const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const MAX_BUFFER = 32 * 1024 * 1024;

class UsageError extends Error {
  constructor(message) {
    super(message);
    this.name = "UsageError";
    this.exitCode = 2;
  }
}

function hasControlCharacters(value) {
  return [...value].some(character => {
    const codePoint = character.codePointAt(0);
    return codePoint <= 0x1F || codePoint === 0x7F;
  });
}

function normalizeRepoPath(value) {
  const normalized = value.replace(/\\/gu, "/").replace(/\/+$/u, "");
  if (!normalized || normalized.startsWith("/") || /^[A-Za-z]:/u.test(normalized) || normalized.startsWith(":")) {
    throw new UsageError(`Invalid repository-relative path: ${JSON.stringify(value)}`);
  }
  if (hasControlCharacters(normalized)) {
    throw new UsageError(`Path contains control characters: ${JSON.stringify(value)}`);
  }
  if (normalized.split("/").some(part => part === ".." || part === "." || part === "")) {
    throw new UsageError(`Path must not contain dot or empty segments: ${JSON.stringify(value)}`);
  }
  return normalized;
}

function validateRef(value) {
  if (!value || value.startsWith("-") || hasControlCharacters(value)) {
    throw new UsageError(`Invalid base ref: ${JSON.stringify(value)}`);
  }
  return value;
}

function parseArguments(argv, { allowSelfTest = false } = {}) {
  const options = {
    mode: "worktree",
    baseRef: null,
    details: false,
    help: false,
    paths: [],
    root: null,
    selfTest: false
  };
  let selectedMode = false;

  for (const argument of argv) {
    if (argument === "--details") options.details = true;
    else if (argument === "--help" || argument === "-h") options.help = true;
    else if (argument === "--cached") {
      if (selectedMode) throw new UsageError("--cached and --base may not be combined or repeated");
      selectedMode = true;
      options.mode = "cached";
    } else if (argument.startsWith("--base=")) {
      if (selectedMode) throw new UsageError("--cached and --base may not be combined or repeated");
      selectedMode = true;
      options.mode = "base";
      options.baseRef = validateRef(argument.slice("--base=".length));
    } else if (argument.startsWith("--path=")) {
      options.paths.push(normalizeRepoPath(argument.slice("--path=".length)));
    } else if (argument.startsWith("--root=")) {
      if (options.root !== null) throw new UsageError("--root may only be specified once");
      const rootValue = argument.slice("--root=".length);
      if (!rootValue) throw new UsageError("--root requires a directory");
      options.root = path.resolve(rootValue);
    } else if (argument === "--self-test" && allowSelfTest) {
      options.selfTest = true;
    } else {
      throw new UsageError(`Unknown option: ${argument}`);
    }
  }

  options.paths = [...new Set(options.paths)];
  return options;
}

function pathMatchesPrefix(file, prefix) {
  return file === prefix || file.startsWith(`${prefix}/`);
}

function isPathSelected(file, requestedPaths) {
  return requestedPaths.length === 0 || requestedPaths.some(prefix => pathMatchesPrefix(file, prefix));
}

function validateRequestedPaths(requestedPaths, allowedRoots) {
  for (const requestedPath of requestedPaths) {
    if (!allowedRoots.some(root => pathMatchesPrefix(requestedPath, root))) {
      throw new UsageError(
        `Path ${JSON.stringify(requestedPath)} is outside the allowed roots: ${allowedRoots.join(", ")}`
      );
    }
  }
}

function isPlainRecord(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function validateExceptionConfig(config) {
  if (!isPlainRecord(config)) throw new Error("Localization exception config must be a JSON object");
  const requiredMaps = [
    "historicalProtectedTokenDiff",
    "activeProtectedTokenAllowances",
    "historicalStructureDiff",
    "activeStructureAllowances"
  ];
  const allowedFields = new Set(["historicalCheckpoint", ...requiredMaps]);
  for (const key of Object.keys(config)) {
    if (!allowedFields.has(key)) throw new Error(`Unknown localization exception config field: ${key}`);
  }
  for (const key of requiredMaps) {
    if (!isPlainRecord(config[key])) throw new Error(`Localization exception config requires object field ${key}`);
  }
  const checkpoint = config.historicalCheckpoint;
  if (!isPlainRecord(checkpoint) || !/^[0-9a-f]{40,64}$/u.test(checkpoint.base ?? "") ||
    !/^[0-9a-f]{40,64}$/u.test(checkpoint.introducedBy ?? "") ||
    typeof checkpoint.reason !== "string" || !checkpoint.reason.trim()) {
    throw new Error("Localization exception config requires a valid historicalCheckpoint");
  }
  for (const key of ["historicalProtectedTokenDiff", "historicalStructureDiff"]) {
    for (const [file, reason] of Object.entries(config[key])) {
      normalizeRepoPath(file);
      if (typeof reason !== "string" || !reason.trim()) {
        throw new Error(`Historical localization exception requires a reason for ${file}`);
      }
    }
  }
}

function runGit(root, args, { allowFailure = false } = {}) {
  const result = spawnSync("git", [
    "-c", "core.safecrlf=false",
    "-c", "core.quotepath=false",
    ...args
  ], {
    cwd: root,
    encoding: "utf8",
    maxBuffer: MAX_BUFFER
  });
  if (result.error) throw result.error;
  if (result.status !== 0 && !allowFailure) {
    const detail = (result.stderr || result.stdout || "git command failed").trim();
    throw new Error(`${detail}\nCommand: git ${args.join(" ")}`);
  }
  return result;
}

function parseNameStatus(output) {
  const tokens = output.split("\0");
  if (tokens[tokens.length - 1] === "") tokens.pop();
  const changes = [];
  for (let index = 0; index < tokens.length;) {
    const statusToken = tokens[index++];
    const status = statusToken[0];
    if (!status) throw new Error("Malformed git --name-status output");
    if (status === "R" || status === "C") {
      const oldPath = tokens[index++];
      const newPath = tokens[index++];
      if (oldPath === undefined || newPath === undefined) throw new Error("Malformed rename/copy record from git");
      changes.push({ status, statusToken, oldPath, newPath });
    } else {
      const file = tokens[index++];
      if (file === undefined) throw new Error("Malformed path record from git");
      changes.push({
        status,
        statusToken,
        oldPath: status === "A" ? null : file,
        newPath: status === "D" ? null : file
      });
    }
  }
  return changes;
}

function selectedChange(change, requestedPaths) {
  return [change.oldPath, change.newPath]
    .filter(Boolean)
    .some(file => isPathSelected(file, requestedPaths));
}

class LocalizationGitDiff {
  constructor(root, options) {
    this.root = path.resolve(root);
    this.options = options;
    this.head = this.resolveCommit("HEAD");
    this.baseCommit = null;
    this.mergeBase = null;
    this.afterFileObjects = new Map();

    if (options.mode === "worktree") {
      this.before = { kind: "index", label: "index" };
      this.after = { kind: "worktree", label: "worktree" };
    } else if (options.mode === "cached") {
      this.before = { kind: "commit", oid: this.head, label: this.head };
      this.after = { kind: "index", label: "index" };
    } else {
      this.baseCommit = this.resolveCommit(options.baseRef);
      const mergeBaseResult = runGit(this.root, ["merge-base", this.baseCommit, this.head], { allowFailure: true });
      this.mergeBase = mergeBaseResult.stdout.trim();
      if (mergeBaseResult.status !== 0 || !/^[0-9a-f]{40,64}$/u.test(this.mergeBase)) {
        throw new UsageError(`Unable to find a merge base between ${options.baseRef} and HEAD`);
      }
      this.before = { kind: "commit", oid: this.mergeBase, label: this.mergeBase };
      this.after = { kind: "commit", oid: this.head, label: this.head };
    }
  }

  resolveCommit(ref) {
    const result = runGit(this.root, ["rev-parse", "--verify", `${ref}^{commit}`], { allowFailure: true });
    const oid = result.stdout.trim();
    if (result.status !== 0 || !/^[0-9a-f]{40,64}$/u.test(oid)) {
      throw new UsageError(`Ref does not resolve to a commit: ${ref}`);
    }
    return oid;
  }

  diffModeArguments() {
    if (this.options.mode === "worktree") return [];
    if (this.options.mode === "cached") return ["--cached", this.head];
    return [this.mergeBase, this.head];
  }

  diffArguments(extraArguments, roots) {
    return [
      "diff",
      "--no-ext-diff",
      "--no-textconv",
      "--no-color",
      ...extraArguments,
      ...this.diffModeArguments(),
      "--",
      ...roots
    ];
  }

  listTrackedChanges(roots, { respectPathSelection = true } = {}) {
    const output = runGit(this.root, this.diffArguments([
      "--name-status", "-z", "--find-renames", "--find-copies", "--find-copies-harder"
    ], roots)).stdout;
    const changes = parseNameStatus(output);
    return respectPathSelection
      ? changes.filter(change => selectedChange(change, this.options.paths))
      : changes;
  }

  listUntrackedFiles(roots) {
    if (this.options.mode !== "worktree") return [];
    const output = runGit(this.root, ["ls-files", "--others", "--exclude-standard", "-z", "--", ...roots]).stdout;
    return output.split("\0")
      .filter(Boolean)
      .filter(file => isPathSelected(file, this.options.paths));
  }

  listChanges(roots, { includeUntracked = true } = {}) {
    const tracked = this.listTrackedChanges(roots);
    if (!includeUntracked) return tracked;
    const trackedPaths = new Set(tracked.flatMap(change => [change.oldPath, change.newPath]).filter(Boolean));
    const untracked = this.listUntrackedFiles(roots)
      .filter(file => !trackedPaths.has(file))
      .map(file => ({ status: "A", statusToken: "??", oldPath: null, newPath: file, untracked: true }));
    return [...tracked, ...untracked];
  }

  assertBaseModeClean(roots) {
    if (this.options.mode !== "base") return;
    const dirty = [];
    const unstaged = parseNameStatus(runGit(this.root, [
      "diff", "--no-ext-diff", "--no-textconv", "--name-status", "-z", "--find-renames", "--", ...roots
    ]).stdout);
    const staged = parseNameStatus(runGit(this.root, [
      "diff", "--cached", "--no-ext-diff", "--no-textconv", "--name-status", "-z", "--find-renames", "--", ...roots
    ]).stdout);
    for (const change of [...unstaged, ...staged]) {
      dirty.push(`${change.statusToken} ${change.oldPath ?? ""}${change.newPath ? ` -> ${change.newPath}` : ""}`);
    }
    for (const file of runGit(this.root, [
      "ls-files", "--others", "--exclude-standard", "-z", "--", ...roots
    ]).stdout.split("\0").filter(Boolean)) {
      dirty.push(`?? ${file}`);
    }
    if (dirty.length > 0) {
      throw new UsageError(
        `--base examines committed snapshots only; localization scan roots must be clean:\n${
          dirty.map(line => `- ${line}`).join("\n")}`
      );
    }
  }

  readSnapshot(snapshot, relativePath) {
    const file = normalizeRepoPath(relativePath);
    if (snapshot.kind === "worktree") return fs.readFileSync(path.join(this.root, file), "utf8");
    const object = snapshot.kind === "index" ? `:${file}` : `${snapshot.oid}:${file}`;
    return runGit(this.root, ["show", object]).stdout;
  }

  readBefore(change) {
    if (!change.oldPath) throw new Error(`No before snapshot exists for ${change.newPath}`);
    return this.readSnapshot(this.before, change.oldPath);
  }

  readAfter(change) {
    if (!change.newPath) throw new Error(`No after snapshot exists for ${change.oldPath}`);
    return this.readSnapshot(this.after, change.newPath);
  }

  readAfterPath(relativePath) {
    return this.readSnapshot(this.after, relativePath);
  }

  readAfterPaths(relativePaths) {
    if (this.after.kind === "worktree") {
      return new Map(relativePaths.map(file => [file, this.readAfterPath(file)]));
    }

    const objects = relativePaths.map(file => {
      let oid = this.afterFileObjects.get(file);
      if (!oid) {
        const object = this.after.kind === "index" ? `:${file}` : `${this.after.oid}:${file}`;
        oid = runGit(this.root, ["rev-parse", "--verify", object]).stdout.trim();
      }
      return { file, oid };
    });
    if (objects.length === 0) return new Map();

    const result = spawnSync("git", ["cat-file", "--batch"], {
      cwd: this.root,
      input: `${objects.map(object => object.oid).join("\n")}\n`,
      encoding: null,
      maxBuffer: MAX_BUFFER
    });
    if (result.error) throw result.error;
    if (result.status !== 0) {
      throw new Error((result.stderr?.toString("utf8") || "git cat-file --batch failed").trim());
    }

    const contents = new Map();
    let offset = 0;
    for (const object of objects) {
      const headerEnd = result.stdout.indexOf(0x0A, offset);
      if (headerEnd === -1) throw new Error(`Malformed git cat-file header for ${object.file}`);
      const header = result.stdout.subarray(offset, headerEnd).toString("utf8");
      const match = /^([0-9a-f]+) (\w+) (\d+)$/u.exec(header);
      if (!match) throw new Error(`Unable to read Git object for ${object.file}: ${header}`);
      const size = Number(match[3]);
      const contentStart = headerEnd + 1;
      const contentEnd = contentStart + size;
      if (contentEnd > result.stdout.length) throw new Error(`Truncated Git object for ${object.file}`);
      contents.set(object.file, result.stdout.subarray(contentStart, contentEnd).toString("utf8"));
      offset = contentEnd + 1;
    }
    return contents;
  }

  diffForPath(relativePath) {
    return runGit(this.root, this.diffArguments(["--text", "--unified=0"], [relativePath])).stdout;
  }

  listAfterFiles(roots, { respectPathSelection = true } = {}) {
    let files;
    if (this.after.kind === "worktree") {
      files = runGit(this.root, [
        "ls-files", "--cached", "--others", "--exclude-standard", "-z", "--", ...roots
      ]).stdout.split("\0").filter(Boolean).filter(file => {
        const absolutePath = path.join(this.root, file);
        return fs.existsSync(absolutePath) && fs.statSync(absolutePath).isFile();
      });
    } else if (this.after.kind === "index") {
      files = [];
      const records = runGit(this.root, ["ls-files", "-s", "-z", "--", ...roots]).stdout
        .split("\0").filter(Boolean);
      for (const record of records) {
        const tab = record.indexOf("\t");
        const metadata = record.slice(0, tab).split(" ");
        const file = record.slice(tab + 1);
        if (tab === -1 || metadata.length !== 3 || metadata[2] !== "0") continue;
        this.afterFileObjects.set(file, metadata[1]);
        files.push(file);
      }
    } else {
      files = [];
      const records = runGit(this.root, [
        "ls-tree", "-r", "-z", this.after.oid, "--", ...roots
      ]).stdout.split("\0").filter(Boolean);
      for (const record of records) {
        const tab = record.indexOf("\t");
        const metadata = record.slice(0, tab).split(" ");
        const file = record.slice(tab + 1);
        if (tab === -1 || metadata.length !== 3 || metadata[1] !== "blob") continue;
        this.afterFileObjects.set(file, metadata[2]);
        files.push(file);
      }
    }
    if (!respectPathSelection || this.options.paths.length === 0) return files;
    const selectedAfterPaths = new Set(this.listTrackedChanges(roots)
      .map(change => change.newPath)
      .filter(Boolean));
    return files.filter(file => isPathSelected(file, this.options.paths) || selectedAfterPaths.has(file));
  }

  assertRequestedPathsMatch(roots) {
    if (this.options.paths.length === 0) return;
    const files = this.listAfterFiles(roots, { respectPathSelection: false });
    const changes = this.listTrackedChanges(roots, { respectPathSelection: false });
    for (const requestedPath of this.options.paths) {
      const matchesFile = files.some(file => pathMatchesPrefix(file, requestedPath));
      const matchesChange = changes.some(change => [change.oldPath, change.newPath]
        .filter(Boolean)
        .some(file => pathMatchesPrefix(file, requestedPath)));
      if (!matchesFile && !matchesChange) {
        throw new UsageError(`Path does not match a file or changed path in the selected snapshot: ${requestedPath}`);
      }
    }
  }

  summary() {
    if (this.options.mode === "base") {
      return `mode=base ref=${this.options.baseRef} merge-base=${this.mergeBase} head=${this.head}`;
    }
    return `mode=${this.options.mode} before=${this.before.label} after=${this.after.label} head=${this.head}`;
  }
}

function createContext(defaultRoot, options, allowedRoots) {
  validateRequestedPaths(options.paths, allowedRoots);
  return new LocalizationGitDiff(options.root ?? defaultRoot, options);
}

module.exports = {
  LocalizationGitDiff,
  UsageError,
  createContext,
  isPathSelected,
  normalizeRepoPath,
  parseArguments,
  parseNameStatus,
  pathMatchesPrefix,
  runGit,
  validateExceptionConfig,
  validateRequestedPaths
};
