const assert = require("assert");
const childProcess = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const {
  allowanceMatches: structureAllowanceMatches,
  canonicalHash,
  canonicalScript
} = require("./check-localization-structure.cjs");
const {
  allowanceMatches: protectedAllowanceMatches,
  contentHash,
  parseChangedHunks,
  signaturesMatch
} = require("./check-korean.cjs");
const { parseNameStatus, validateExceptionConfig } = require("./localization-git-diff.cjs");

const projectRoot = path.resolve(__dirname, "..");
const checker = path.join(__dirname, "check-localization.cjs");
const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), "adeg-localization-git-"));
const fixtureFile = path.join(fixtureRoot, "src", "fixture.js");
const exceptionFile = path.join(fixtureRoot, "localization", "ko-KR", "check-exceptions.json");
const glossaryFile = path.join(fixtureRoot, "localization", "ko-KR", "glossary.json");

function execute(command, args, cwd = fixtureRoot) {
  return childProcess.spawnSync(command, args, {
    cwd,
    encoding: "utf8",
    maxBuffer: 16 * 1024 * 1024
  });
}

function git(...args) {
  const result = execute("git", ["-c", "core.safecrlf=false", ...args]);
  assert.strictEqual(result.status, 0, result.stderr || result.stdout);
  return result.stdout.trim();
}

function runChecker(...args) {
  return execute(process.execPath, [checker, `--root=${fixtureRoot}`, ...args], projectRoot);
}

function assertPassed(result, message) {
  assert.strictEqual(result.status, 0, `${message}\n${result.stdout}\n${result.stderr}`);
}

function assertFailed(result, expectedStatus, message) {
  assert.strictEqual(result.status, expectedStatus, `${message}\n${result.stdout}\n${result.stderr}`);
}

function writeFixture(background, text) {
  fs.writeFileSync(fixtureFile, `export const fixture = {\n` +
    `  background: primaryBackground(${JSON.stringify(background)}),\n` +
    `  text: ${JSON.stringify(text)}\n` +
    `};\n`);
}

function fixtureSource(background, text) {
  return `export const fixture = {\n` +
    `  background: primaryBackground(${JSON.stringify(background)}),\n` +
    `  text: ${JSON.stringify(text)}\n` +
    `};\n`;
}

function writeExceptions(activeStructureAllowances = {}) {
  fs.writeFileSync(exceptionFile, JSON.stringify({
    historicalCheckpoint: {
      base: "0000000000000000000000000000000000000000",
      introducedBy: "0000000000000000000000000000000000000000",
      reason: "integration fixture"
    },
    historicalProtectedTokenDiff: {},
    activeProtectedTokenAllowances: {},
    historicalStructureDiff: {},
    activeStructureAllowances
  }, null, 2));
}

try {
  assert.ok(signaturesMatch("The $1 greets %name.", "$1은(는) %name에게 인사한다."));
  assert.ok(!signaturesMatch("$1은(는) %name에게 인사한다.", "%name에게 인사한다."));
  assert.ok(!signaturesMatch("Hello, %name?", "안녕, %name"));
  assert.ok(signaturesMatch(
    "<a href='/same' title='Visible'><b>Text</b></a>",
    "<a href='/same' title='표시'><b>문구</b></a>"
  ));
  assert.ok(!signaturesMatch("<a href='/old'>Text</a>", "<a href='/new'>문구</a>"));
  assert.ok(!signaturesMatch("<b><i>Text</i></b>", "<i><b>문구</b></i>"));
  assert.ok(!signaturesMatch("Value &amp; more", "값 &times; 더보기"));
  assert.ok(!signaturesMatch("Value -5", "값 5"));
  assert.ok(!signaturesMatch("Reached 5th place", "8번째 순위 달성"));
  assert.ok(!signaturesMatch("Gain 10", "10 획득, 보너스 20"));
  assert.ok(!signaturesMatch("Gain .5", "5 획득"));
  assert.ok(!signaturesMatch("Gain -.5", "5 획득"));
  assert.ok(!signaturesMatch("Line \\v break", "줄 \\n 나눔"));
  assert.ok(!signaturesMatch('${map.get("old-key")}', '${map.get("new-key")}'));
  assert.ok(!signaturesMatch('${map?.get?.("old-key")}', '${map?.get?.("new-key")}'));
  assert.ok(!signaturesMatch('${foo("old-key", "}")}', '${foo("new-key", "}")}'));
  assert.ok(!signaturesMatch('${foo(/foo}bar/, "old-key")}', '${foo(/foo}bar/, "new-key")}'));
  assert.ok(!signaturesMatch('${foo(/[}]/u, "old-key")}', '${foo(/[}]/u, "new-key")}'));
  assert.ok(!signaturesMatch('${foo(/\\}/u, "old-key")}', '${foo(/\\}/u, "new-key")}'));
  assert.ok(signaturesMatch('${quantifyInt("Visible", value)}', '${quantifyInt("표시", value)}'));
  assert.ok(!signaturesMatch(
    '<p id="first">$1</p><p id="second">$2</p>',
    '<p id="first">$2</p><p id="second">$1</p>'
  ));
  assert.ok(signaturesMatch("$1 before $2", "$2 다음 $1"));
  assert.ok(signaturesMatch("<p>$1 before $2</p>", "<p>$2 다음 $1</p>"));
  assert.ok(signaturesMatch("<br>$1", "$1<br>"));
  assert.ok(!signaturesMatch('<input value="$1">$2', '<input value="$2">$1'));
  assert.ok(!signaturesMatch(
    '<input aria-label="$1" title="$2">',
    '<input aria-label="$2" title="$1">'
  ));
  assert.ok(!signaturesMatch('<span title="$1">$2</span>', '<span title="$2">$1</span>'));
  assert.deepStrictEqual(parseChangedHunks("@@ -1 +1 @@\n--- $1\n+++ translated\n"), [{
    header: "@@ -1 +1 @@",
    before: "-- $1",
    after: "++ translated"
  }]);
  const protectedBefore = "$1 원문";
  const protectedAfter = "$1 번역";
  const protectedAllowance = {
    beforeContentSha256: contentHash(protectedBefore),
    afterContentSha256: contentHash(protectedAfter),
    reason: "exact protected-token fixture",
    removeAfter: "fixture completes"
  };
  assert.ok(protectedAllowanceMatches(protectedAllowance, protectedBefore, protectedAfter));
  assert.ok(!protectedAllowanceMatches(protectedAllowance, protectedBefore, `${protectedAfter}!`));
  assert.deepStrictEqual(parseNameStatus(
    "R087\0src/옛 이름\t파일.js\0src/새 이름 파일.js\0M\0src/일반 파일.js\0"
  ), [{
    status: "R",
    statusToken: "R087",
    oldPath: "src/옛 이름\t파일.js",
    newPath: "src/새 이름 파일.js"
  }, {
    status: "M",
    statusToken: "M",
    oldPath: "src/일반 파일.js",
    newPath: "src/일반 파일.js"
  }]);
  assert.throws(() => validateExceptionConfig({}), /requires object field/u);

  fs.mkdirSync(path.join(fixtureRoot, "src"), { recursive: true });
  fs.mkdirSync(path.join(fixtureRoot, "src", "foo"), { recursive: true });
  fs.mkdirSync(path.join(fixtureRoot, "public"), { recursive: true });
  fs.mkdirSync(path.join(fixtureRoot, "localization", "ko-KR"), { recursive: true });
  fs.writeFileSync(path.join(fixtureRoot, ".gitattributes"), "*.html -diff\n");
  writeExceptions();
  const fixtureGlossary = {
    locale: "ko-KR",
    policy: {
      existingTranslation: "fixture policy",
      gameFacts: "fixture policy",
      properNames: "fixture policy"
    },
    terms: { Antimatter: "반물질" }
  };
  fs.writeFileSync(glossaryFile, JSON.stringify(fixtureGlossary, null, 2));
  writeFixture("teresa", "Visible label");
  const htmlLines = ["<main>", "  <p>Visible line one</p>", "  <p>Visible line two</p>",
    "  <p>$1 protected line</p>", "  <p>Visible line three</p>", "  <p>Gain 10 points</p>", "</main>", ""];
  fs.writeFileSync(path.join(fixtureRoot, "public", "fixture.html"), htmlLines.join("\n"));
  fs.writeFileSync(path.join(fixtureRoot, "public", "version.txt"), "Version $1\n");
  fs.writeFileSync(path.join(fixtureRoot, "public", "NOTICE.HTML"), "<p>Notice $2</p>\n");
  fs.writeFileSync(path.join(fixtureRoot, "public", "conflict.html"), "<p>base</p>\n");
  fs.writeFileSync(path.join(fixtureRoot, "src", "foo", "selected.js"), "export const selected = true;\n");

  git("init", "--initial-branch=main");
  git("config", "user.name", "Localization Test");
  git("config", "user.email", "localization-test@example.invalid");
  git("add", ".gitattributes", "src/fixture.js", "src/foo/selected.js", "public/fixture.html", "public/version.txt",
    "public/NOTICE.HTML", "public/conflict.html",
    "localization/ko-KR/check-exceptions.json", "localization/ko-KR/glossary.json");
  git("commit", "-m", "initial fixture");
  const baseCommit = git("rev-parse", "HEAD");
  const disconnectedCommit = git("commit-tree", "4b825dc642cb6eb9a060e54bf8d69288fbee4904", "-m", "disconnected");
  git("branch", "disconnected-base", disconnectedCommit);
  git("switch", "-c", "divergent-base");
  fs.writeFileSync(path.join(fixtureRoot, "README.md"), "divergent base branch\n");
  git("add", "README.md");
  git("commit", "-m", "diverge base branch");
  git("switch", "main");

  let result = runChecker();
  assertPassed(result, "A clean worktree should pass");
  assert.match(result.stdout, /checked=0/u);

  const htmlFile = path.join(fixtureRoot, "public", "fixture.html");
  fs.writeFileSync(htmlFile, htmlLines.filter(line => !line.includes("$1")).join("\n"));
  result = runChecker("--path=public/fixture.html");
  assertFailed(result, 1, "A protected-token change marked -diff by Git attributes must still fail");
  fs.writeFileSync(htmlFile, htmlLines.join("\n"));

  const versionFile = path.join(fixtureRoot, "public", "version.txt");
  fs.writeFileSync(versionFile, "Version translated\n");
  result = runChecker("--path=public/version.txt");
  assertFailed(result, 1, "A tracked user-visible txt file must preserve protected tokens");
  fs.writeFileSync(versionFile, "Version $1\n");

  fs.writeFileSync(versionFile, "Version $1\n새 표시 문구\n");
  result = runChecker("--path=public/version.txt");
  assertPassed(result, "An addition-only plain display line must remain allowed");
  fs.writeFileSync(versionFile, "Version $1\n추가 $9\n");
  result = runChecker("--path=public/version.txt");
  assertFailed(result, 1, "An addition-only protected token must require explicit review");
  assert.match(result.stderr, /addition-only hunk.*explicit review/u);
  fs.writeFileSync(versionFile, "Version $1\n");

  const uppercaseHtmlFile = path.join(fixtureRoot, "public", "NOTICE.HTML");
  fs.writeFileSync(uppercaseHtmlFile, "<p>번역문</p>\n");
  result = runChecker("--path=public/NOTICE.HTML");
  assertFailed(result, 1, "Eligible text extensions must be matched case-insensitively");
  fs.writeFileSync(uppercaseHtmlFile, "<p>Notice $2</p>\n");

  fs.writeFileSync(versionFile, Buffer.from([0x41, 0x00, 0x42, 0x00]));
  result = runChecker("--path=public/version.txt");
  assertFailed(result, 1, "NUL-containing text must not pass as an empty binary diff");
  assert.match(result.stderr, /NUL bytes/u);
  fs.writeFileSync(versionFile, "Version $1\n");

  fs.writeFileSync(glossaryFile, JSON.stringify({ ...fixtureGlossary, terms: { "반물질": "반물질" } }, null, 2));
  result = runChecker("--path=localization/ko-KR/glossary.json");
  assertFailed(result, 1, "A glossary source key must not be translated or silently renamed");
  fs.writeFileSync(glossaryFile, JSON.stringify(fixtureGlossary, null, 2));

  fs.writeFileSync(glossaryFile, JSON.stringify({ ...fixtureGlossary, terms: { Matter: "반물질" } }, null, 2));
  result = runChecker("--path=localization/ko-KR/glossary.json");
  assertFailed(result, 1, "An English glossary source-key rename must require an exact allowance");
  assert.match(result.stderr, /glossary source keys changed/u);
  fs.writeFileSync(glossaryFile, JSON.stringify(fixtureGlossary, null, 2));

  writeFixture("teresa", "표시 라벨");
  result = runChecker();
  assertPassed(result, "A visible worktree translation should pass");
  assert.match(result.stdout, /checked=1/u);

  writeFixture("effarig", "표시 라벨");
  result = runChecker();
  assertFailed(result, 1, "A worktree structural key mutation should fail");
  assert.match(result.stderr, /src\/fixture\.js/u);

  const beforeCanonical = canonicalScript("src/fixture.js", fixtureSource("teresa", "Visible label"));
  const afterCanonical = canonicalScript("src/fixture.js", fixtureSource("effarig", "표시 라벨"));
  writeExceptions({
    "src/fixture.js": {
      beforeCanonicalSha256: canonicalHash(beforeCanonical),
      afterCanonicalSha256: canonicalHash(afterCanonical),
      reason: "exact integration fixture",
      removeAfter: "fixture completes"
    }
  });
  result = runChecker();
  assertPassed(result, "An exact active canonical delta should pass");
  assert.match(result.stdout, /allowed=1/u);
  assert.ok(structureAllowanceMatches({
    beforeCanonicalSha256: canonicalHash(beforeCanonical),
    afterCanonicalSha256: canonicalHash(afterCanonical),
    reason: "direct matcher fixture",
    removeAfter: "fixture completes"
  }, beforeCanonical, afterCanonical));

  writeFixture("enslaved", "표시 라벨");
  result = runChecker();
  assertFailed(result, 1, "An active allowance must reject an additional structural mutation");
  writeExceptions();

  writeFixture("teresa", "표시 라벨");
  git("add", "src/fixture.js");
  writeFixture("effarig", "표시 라벨");
  result = runChecker();
  assertFailed(result, 1, "Default mode must compare the staged index to the worktree");

  result = runChecker("--cached");
  assertPassed(result, "Cached mode must ignore the later unstaged mutation");
  assert.match(result.stdout, /mode=cached/u);

  writeFixture("teresa", "표시 라벨");
  git("commit", "-m", "translate visible label");
  result = runChecker(`--base=${baseCommit}`);
  assertPassed(result, "Base mode should accept a committed visible translation");
  assert.match(result.stdout, /mode=base/u);
  assert.match(result.stdout, /checked=1/u);
  result = runChecker("--base=divergent-base");
  assertPassed(result, "Base mode must use the merge base of a divergent ref");
  assert.match(result.stdout, new RegExp(`merge-base=${baseCommit}`, "u"));

  const stagedBaseCopy = path.join(fixtureRoot, "public", "base-copy.html");
  fs.copyFileSync(path.join(fixtureRoot, "public", "fixture.html"), stagedBaseCopy);
  git("add", "public/base-copy.html");
  result = runChecker(`--base=${baseCommit}`, "--path=src/fixture.js");
  assertFailed(result, 2, "Base mode must reject dirty scan-root files even outside the requested path");
  git("reset", "HEAD", "public/base-copy.html");
  fs.rmSync(stagedBaseCopy);

  fs.writeFileSync(path.join(fixtureRoot, "src", "base-dirty.js"), "export const dirty = true;\n");
  result = runChecker(`--base=${baseCommit}`, "--path=src");
  assertFailed(result, 2, "Base mode must reject a selected untracked file");
  fs.rmSync(path.join(fixtureRoot, "src", "base-dirty.js"));
  writeFixture("effarig", "표시 라벨");
  result = runChecker(`--base=${baseCommit}`, "--path=src");
  assertFailed(result, 2, "Base mode must reject a selected unstaged change");
  git("add", "src/fixture.js");
  result = runChecker(`--base=${baseCommit}`, "--path=src");
  assertFailed(result, 2, "Base mode must reject a selected staged change");
  git("commit", "-m", "mutate structural key");
  result = runChecker(`--base=${baseCommit}`);
  assertFailed(result, 1, "Base mode must inspect committed structural changes");

  result = runChecker("--base=definitely-missing-ref");
  assertFailed(result, 2, "A missing base ref must be a usage failure");
  result = runChecker("--base=disconnected-base");
  assertFailed(result, 2, "A base ref without a merge base must be a usage failure");

  result = runChecker("--cached", `--base=${baseCommit}`);
  assertFailed(result, 2, "Cached and base modes must be mutually exclusive");

  result = runChecker("--self-test");
  assertPassed(result, "The localization wrapper must route its advertised structure self-test correctly");

  fs.writeFileSync(path.join(fixtureRoot, "src", "foobar.js"), "export const value = 1;\n");
  result = runChecker("--path=src/foo");
  assertPassed(result, "A path prefix must not match a sibling with the same textual prefix");
  assert.match(result.stdout, /checked=0/u);

  result = runChecker("--path=src/definitely-does-not-exist");
  assertFailed(result, 2, "A nonexistent requested path must not report a vacuous success");

  result = runChecker();
  assertFailed(result, 1, "An untracked JavaScript file must not be silently skipped");
  assert.match(result.stderr, /topology change|Untracked, deleted, or type-changed/u);
  fs.rmSync(path.join(fixtureRoot, "src", "foobar.js"));

  const renamedHtml = path.join(fixtureRoot, "public", "이름 바꿈.html");
  git("mv", "public/fixture.html", "public/이름 바꿈.html");
  const damagedHtml = [...htmlLines];
  damagedHtml[3] = "  <p>보호 토큰 손실</p>";
  damagedHtml[4] = "  <p>손상 문자 �</p>";
  fs.writeFileSync(renamedHtml, damagedHtml.join("\n"));
  git("add", "public/이름 바꿈.html");
  result = runChecker("--cached");
  assertFailed(result, 1, "A renamed non-code text file must preserve protected tokens");
  assert.match(result.stderr, /protected expression|Deleted or type-changed/u);
  result = runChecker("--cached", "--path=public/fixture.html");
  assertFailed(result, 1, "Selecting a rename's old path must still scan the new file for encoding damage");
  assert.match(result.stderr, /replacement character/u);
  fs.writeFileSync(renamedHtml, htmlLines.join("\n"));
  git("add", "public/이름 바꿈.html");
  git("commit", "-m", "rename protected HTML fixture");
  fs.writeFileSync(renamedHtml, htmlLines.filter(line => !line.includes("$1")).join("\n"));
  result = runChecker();
  assertFailed(result, 1, "A deletion-only hunk must not drop a protected placeholder");
  fs.writeFileSync(renamedHtml, htmlLines.join("\n"));

  fs.writeFileSync(renamedHtml, htmlLines.map(line => line.replace("Gain 10", "Gain 20")).join("\n"));
  result = runChecker();
  assertFailed(result, 1, "An English-only numeric mutation must not bypass protected-token checks");
  fs.writeFileSync(renamedHtml, htmlLines.join("\n"));

  const copiedHtml = path.join(fixtureRoot, "public", "copied-fixture.html");
  fs.writeFileSync(copiedHtml, htmlLines.filter(line => !line.includes("$1")).join("\n"));
  result = runChecker();
  assertFailed(result, 1, "Default mode must not silently accept an untracked localization text copy");
  assert.match(result.stderr, /Untracked, deleted, or type-changed/u);
  git("add", "public/copied-fixture.html");
  result = runChecker("--cached");
  assertFailed(result, 1, "A copy from an unchanged source must preserve the full protected signature");
  assert.match(result.stderr, /copied-fixture\.html/u);
  git("reset", "HEAD", "public/copied-fixture.html");
  fs.rmSync(copiedHtml);

  const lowSimilarityCopy = path.join(fixtureRoot, "public", "translated-copy.html");
  fs.writeFileSync(lowSimilarityCopy, "<main>완전히 새로 번역한 긴 본문이며 원문의 $1도 손실됨</main>\n");
  git("add", "public/translated-copy.html");
  result = runChecker("--cached");
  assertFailed(result, 1, "A low-similarity copy reported as an added text file must fail closed");
  assert.match(result.stderr, /translated-copy\.html.*new text file/u);
  git("reset", "HEAD", "public/translated-copy.html");
  fs.rmSync(lowSimilarityCopy);

  git("switch", "-c", "conflict-side");
  fs.writeFileSync(path.join(fixtureRoot, "public", "conflict.html"), "<p>side branch</p>\n");
  git("add", "public/conflict.html");
  git("commit", "-m", "change conflict fixture on side");
  git("switch", "main");
  fs.writeFileSync(path.join(fixtureRoot, "public", "conflict.html"), "<p>main branch</p>\n");
  git("add", "public/conflict.html");
  git("commit", "-m", "change conflict fixture on main");
  const mergeResult = execute("git", ["-c", "core.safecrlf=false", "merge", "conflict-side"]);
  assert.notStrictEqual(mergeResult.status, 0, "The fixture merge must create an unresolved conflict");
  result = runChecker();
  assertFailed(result, 1, "Default mode must reject an unresolved Git status");
  assert.match(result.stderr, /unsupported or unresolved Git status/u);
  result = runChecker("--cached");
  assertFailed(result, 1, "Cached mode must reject an unresolved Git status");
  assert.match(result.stderr, /unsupported or unresolved Git status/u);
  git("merge", "--abort");

  git("mv", "src/fixture.js", "src/renamed-fixture.js");
  result = runChecker("--cached");
  assertFailed(result, 1, "A staged rename must require explicit structural review");
  assert.match(result.stderr, /R\d*/u);

  process.stdout.write("localization git snapshot regressions passed\n");
} finally {
  fs.rmSync(fixtureRoot, { recursive: true, force: true });
}
