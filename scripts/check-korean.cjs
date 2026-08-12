const crypto = require("crypto");
const path = require("path");

const parser = require("@babel/parser");

const {
  UsageError,
  createContext,
  parseArguments,
  validateExceptionConfig
} = require("./localization-git-diff.cjs");
const { canonicalScript } = require("./check-localization-structure.cjs");

const defaultRoot = path.resolve(__dirname, "..");
const includedExtensions = new Set([".css", ".html", ".js", ".json", ".md", ".txt", ".vue"]);
const scanRoots = ["src", "public", "localization"];
const diffRoots = ["src", "public"];
const glossaryPath = "localization/ko-KR/glossary.json";
const visibleHtmlAttributes = new Set([
  "ach-tooltip", "alt", "aria-label", "label", "placeholder", "title", "tooltip"
]);
const voidHtmlElements = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"
]);

function extractTemplateExpressions(text) {
  const expressions = [];
  for (let index = 0; index < text.length - 1; index++) {
    if (text[index] !== "$" || text[index + 1] !== "{" || isEscapedCharacter(text, index)) continue;
    const start = index;
    let foundBoundary = false;
    for (let end = index + 2; end < text.length; end++) {
      if (text[end] !== "}") continue;
      const candidate = text.slice(start, end + 1);
      if (!isCompleteTemplateExpression(candidate)) continue;
      expressions.push(candidate);
      index = end;
      foundBoundary = true;
      break;
    }
    if (!foundBoundary) {
      // Preserve an incomplete expression to the end of the input so a malformed edit cannot pass by truncation.
      expressions.push(text.slice(start));
      break;
    }
  }
  return expressions;
}

function isEscapedCharacter(text, index) {
  let backslashCount = 0;
  for (let cursor = index - 1; cursor >= 0 && text[cursor] === "\\"; cursor--) backslashCount++;
  return backslashCount % 2 === 1;
}

function isCompleteTemplateExpression(candidate) {
  const source = candidate.slice(2, -1);
  try {
    parser.parseExpression(source, {
      allowAwaitOutsideFunction: true,
      allowNewTargetOutsideFunction: true,
      allowSuperOutsideMethod: true,
      allowYieldOutsideFunction: true,
      plugins: ["classProperties", "dynamicImport", "objectRestSpread", "optionalChaining", "topLevelAwait"]
    });
    return true;
  } catch {
    return false;
  }
}

function normalizeExpression(expression) {
  const trimmed = expression.trim();
  let source = trimmed;
  if (trimmed.startsWith("${") && trimmed.endsWith("}")) source = trimmed.slice(2, -1);
  else if (trimmed.startsWith("{{") && trimmed.endsWith("}}")) source = trimmed.slice(2, -2);
  try {
    return canonicalScript("__protected_expression__.js", `const __expression = (${source});`);
  } catch {
    // Invalid or unsupported expressions are kept fail-closed; masking their strings could hide runtime-key changes.
    return expression.replace(/\s+/gu, " ");
  }
}

function hasIncludedExtension(file) {
  return includedExtensions.has(path.extname(file).toLowerCase());
}

function htmlTagSignature(match) {
  const attributes = [];
  const attributePattern = /([:@A-Za-z_][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/gu;
  for (const attribute of match.attributes.matchAll(attributePattern)) {
    const name = attribute[1];
    const plainName = name.replace(/^:/u, "");
    const rawValue = attribute[2] ?? attribute[3] ?? attribute[4] ?? null;
    attributes.push([name, visibleHtmlAttributes.has(plainName) ? null : rawValue]);
  }
  attributes.sort(([left], [right]) => left.localeCompare(right));
  return JSON.stringify({
    name: `${match.closing ? "/" : ""}${match.name}`,
    attributes,
    selfClosing: /\/\s*$/u.test(match.attributes)
  });
}

function htmlTagSignatures(text) {
  return extractHtmlTags(text).map(htmlTagSignature);
}

function extractHtmlTags(text) {
  const tags = [];
  for (let start = 0; start < text.length; start++) {
    if (text[start] !== "<" || !/^\/?[A-Za-z]/u.test(text.slice(start + 1))) continue;
    let quote = "";
    let end = start + 1;
    for (; end < text.length; end++) {
      const character = text[end];
      if (quote) {
        if (character === quote && text[end - 1] !== "\\") quote = "";
      } else if (character === "\"" || character === "'") {
        quote = character;
      } else if (character === ">") {
        break;
      }
    }
    if (end >= text.length) break;
    const parsed = /^<(\/)?([A-Za-z][\w-]*)([\s\S]*)>$/u.exec(text.slice(start, end + 1));
    if (parsed) {
      tags.push({
        closing: Boolean(parsed[1]),
        name: parsed[2],
        attributes: parsed[3],
        attributesStart: start + 1 + (parsed[1] ? 1 : 0) + parsed[2].length,
        start,
        end
      });
    }
    start = end;
  }
  return tags;
}

function htmlAttributeSlots(tag) {
  const slots = [];
  const attributePattern = /([:@A-Za-z_][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/gu;
  for (const attribute of tag.attributes.matchAll(attributePattern)) {
    const rawValue = attribute[2] ?? attribute[3] ?? attribute[4] ?? null;
    if (rawValue === null) continue;
    const equalsIndex = attribute[0].indexOf("=");
    let valueOffset = equalsIndex + 1;
    while (/\s/u.test(attribute[0][valueOffset] ?? "")) valueOffset++;
    if (attribute[0][valueOffset] === "\"" || attribute[0][valueOffset] === "'") valueOffset++;
    const start = tag.attributesStart + attribute.index + valueOffset;
    slots.push({ name: attribute[1], start, end: start + rawValue.length });
  }
  return slots;
}

function placeholderSlot(tags, index, length) {
  const containingTag = tags.find(tag => !tag.closing && tag.start < index && index + length <= tag.end);
  if (!containingTag) return "text";
  const attribute = htmlAttributeSlots(containingTag)
    .find(slot => slot.start <= index && index + length <= slot.end);
  return attribute ? `attribute:${attribute.name}` : "text";
}

function placeholderContexts(text) {
  const events = [];
  const tags = extractHtmlTags(text);
  for (const tag of tags) events.push({ type: "tag", index: tag.start, tag });
  for (const match of text.matchAll(/\$\d+|%[A-Za-z_][A-Za-z\d_]*\??/gu)) {
    events.push({
      type: "placeholder",
      index: match.index,
      token: match[0],
      slot: placeholderSlot(tags, match.index, match[0].length)
    });
  }
  events.sort((left, right) => left.index - right.index || (left.type === "tag" ? -1 : 1));

  const contexts = [];
  const stack = [];
  let openingIndex = 0;
  for (const event of events) {
    while (stack.length > 0 && stack[stack.length - 1].endsAt < event.index) stack.pop();
    if (event.type === "placeholder") {
      contexts.push(JSON.stringify({
        token: event.token,
        slot: event.slot,
        ancestors: stack.map(entry => entry.signature)
      }));
      continue;
    }
    const { tag } = event;
    if (tag.closing) {
      const matchingIndex = stack.map(entry => entry.name).lastIndexOf(tag.name);
      if (matchingIndex !== -1) stack.splice(matchingIndex);
      continue;
    }
    const selfClosing = /\/\s*$/u.test(tag.attributes) || voidHtmlElements.has(tag.name.toLowerCase());
    const signature = `${htmlTagSignature(tag)}@${openingIndex++}`;
    stack.push({ name: tag.name, signature, endsAt: selfClosing ? tag.end : Number.POSITIVE_INFINITY });
  }
  return contexts.sort();
}

function protectedParts(text) {
  const templateExpressions = extractTemplateExpressions(text);
  const vueExpressions = text.match(/\{\{[\s\S]*?\}\}/gu) ?? [];
  const tagNames = htmlTagSignatures(text);
  const entities = text.match(/&(?:#\d+|#x[\dA-Fa-f]+|[A-Za-z][A-Za-z\d]+);/gu) ?? [];
  const escapes = text.match(/\\(?:[0btnvfr'"\\]|u[\dA-Fa-f]{4}|x[\dA-Fa-f]{2})/gu) ?? [];
  const placeholders = [
    ...(text.match(/\$\d+/gu) ?? []),
    ...(text.match(/%[A-Za-z_][A-Za-z\d_]*\??/gu) ?? [])
  ];
  let withoutExpressions = text;
  for (const token of [...templateExpressions, ...vueExpressions, ...placeholders, ...escapes]) {
    withoutExpressions = withoutExpressions.replace(token, "");
  }
  const numbers = withoutExpressions.match(/(?<![\w.])[-+]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?/giu) ?? [];
  const normalizedExpressions = [...templateExpressions, ...vueExpressions].map(normalizeExpression);
  return {
    expressions: normalizedExpressions.sort(),
    tags: tagNames,
    entities,
    escapes: escapes.sort(),
    placeholders: placeholders.sort(),
    placeholderContexts: placeholderContexts(text),
    numbers: numbers.sort()
  };
}

function sameMultiset(left, right) {
  return left.length === right.length && left.every((token, index) => token === right[index]);
}

function signaturesMatch(left, right) {
  const before = protectedParts(left);
  const after = protectedParts(right);
  return sameMultiset(before.expressions, after.expressions) &&
    sameMultiset(before.tags, after.tags) &&
    sameMultiset(before.entities, after.entities) &&
    sameMultiset(before.escapes, after.escapes) &&
    sameMultiset(before.placeholders, after.placeholders) &&
    sameMultiset(before.placeholderContexts, after.placeholderContexts) &&
    sameMultiset(before.numbers, after.numbers);
}

function contentHash(value) {
  return crypto.createHash("sha256").update(value.replace(/\r\n/gu, "\n")).digest("hex");
}

function validateActiveAllowances(allowances) {
  for (const [file, allowance] of Object.entries(allowances)) {
    if (!allowance || typeof allowance !== "object" ||
      typeof allowance.reason !== "string" || !allowance.reason.trim() ||
      typeof allowance.removeAfter !== "string" || !allowance.removeAfter.trim()) {
      throw new Error(`Active protected-token allowance requires reason and removeAfter for ${file}`);
    }
    for (const key of ["beforeContentSha256", "afterContentSha256"]) {
      if (!/^[0-9a-f]{64}$/u.test(allowance[key] ?? "")) {
        throw new Error(`Invalid ${key} in active protected-token allowance for ${file}`);
      }
    }
  }
}

function allowanceMatches(allowance, before, after) {
  return Boolean(allowance) &&
    allowance.beforeContentSha256 === contentHash(before) &&
    allowance.afterContentSha256 === contentHash(after);
}

function validateGlossary(glossary) {
  if (!glossary || typeof glossary !== "object" || Array.isArray(glossary) || glossary.locale !== "ko-KR") {
    throw new Error("Korean glossary must be an object with locale ko-KR");
  }
  const policy = glossary.policy;
  for (const key of ["existingTranslation", "gameFacts", "properNames"]) {
    if (!policy || typeof policy !== "object" || Array.isArray(policy) ||
      typeof policy[key] !== "string" || !policy[key].trim()) {
      throw new Error(`Korean glossary requires non-empty policy.${key}`);
    }
  }
  if (!glossary.terms || typeof glossary.terms !== "object" || Array.isArray(glossary.terms) ||
    Object.keys(glossary.terms).length === 0) {
    throw new Error("Korean glossary requires a non-empty terms object");
  }
  for (const [source, translation] of Object.entries(glossary.terms)) {
    if (!source.trim() || /[\uAC00-\uD7A3]/u.test(source)) {
      throw new Error(`Glossary source term must remain a non-Korean source key: ${JSON.stringify(source)}`);
    }
    if (typeof translation !== "string" || !translation.trim()) {
      throw new Error(`Glossary term requires a non-empty translation: ${JSON.stringify(source)}`);
    }
  }
}

function parseChangedHunks(diff) {
  const hunks = [];
  let header = "";
  let inHunk = false;
  let removed = [];
  let added = [];
  const flush = () => {
    if (header && (removed.length > 0 || added.length > 0)) {
      hunks.push({ header, before: removed.join("\n"), after: added.join("\n") });
    }
    removed = [];
    added = [];
  };

  for (const line of diff.split(/\r?\n/u)) {
    if (line.startsWith("@@ ")) {
      flush();
      header = line;
      inHunk = true;
    } else if (inHunk && line.startsWith("-")) {
      removed.push(line.slice(1));
    } else if (inHunk && line.startsWith("+")) {
      added.push(line.slice(1));
    }
  }
  flush();
  return hunks;
}

function shouldCheckHunk(before, after) {
  const hasKorean = /[\uAC00-\uD7A3]/u.test(before) || /[\uAC00-\uD7A3]/u.test(after);
  const englishToKorean = /[A-Za-z]/u.test(before) && /[\uAC00-\uD7A3]/u.test(after);
  const hasCriticalTokens = [before, after].some(text => {
    const parts = protectedParts(text);
    return [parts.expressions, parts.tags, parts.entities, parts.escapes, parts.placeholders, parts.numbers]
      .some(tokens => tokens.length > 0);
  });
  return hasKorean || englishToKorean || hasCriticalTokens;
}

function hasProtectedParts(text) {
  return Object.values(protectedParts(text)).some(tokens => tokens.length > 0);
}

function showHelp() {
  process.stdout.write(`Usage: node scripts/check-korean.cjs [options]\n\n` +
    `  (default)          scan worktree and compare index to worktree\n` +
    `  --cached           scan index and compare HEAD to index\n` +
    `  --base=<ref>       scan HEAD and compare merge-base(ref, HEAD) to HEAD\n` +
    `  --path=<path>      restrict to a repository-relative src/public/localization path (repeatable)\n` +
    `  --details          show protected-token signatures for failures\n`);
}

function main(argv = process.argv.slice(2)) {
  const options = parseArguments(argv);
  if (options.help) {
    showHelp();
    return;
  }

  const context = createContext(defaultRoot, options, scanRoots);
  context.assertRequestedPathsMatch(scanRoots);
  context.assertBaseModeClean(scanRoots);
  const exceptions = JSON.parse(context.readAfterPath("localization/ko-KR/check-exceptions.json"));
  validateExceptionConfig(exceptions);
  const activeAllowances = exceptions.activeProtectedTokenAllowances ?? {};
  const historicalCount = Object.keys(exceptions.historicalProtectedTokenDiff ?? {}).length;
  validateActiveAllowances(activeAllowances);
  for (const file of Object.keys(activeAllowances)) {
    const eligiblePath = file.startsWith("src/") || file.startsWith("public/") || file === glossaryPath;
    if (!eligiblePath || !hasIncludedExtension(file)) {
      throw new Error(`Active protected-token allowance targets an unchecked path: ${file}`);
    }
    context.readAfterPath(file);
  }
  const glossaryAfterRaw = context.readAfterPath(glossaryPath);
  const glossaryAfter = JSON.parse(glossaryAfterRaw);
  validateGlossary(glossaryAfter);
  const usedAllowances = new Set();
  const glossaryFailures = [];
  for (const change of context.listChanges([glossaryPath], { includeUntracked: false })) {
    if (change.status !== "M" || change.oldPath !== glossaryPath || change.newPath !== glossaryPath) continue;
    const beforeRaw = context.readBefore(change);
    const before = JSON.parse(beforeRaw);
    validateGlossary(before);
    const removedTerms = Object.keys(before.terms).filter(term => !(term in glossaryAfter.terms));
    if (removedTerms.length === 0) continue;
    if (allowanceMatches(activeAllowances[glossaryPath], beforeRaw, glossaryAfterRaw)) {
      usedAllowances.add(glossaryPath);
      continue;
    }
    glossaryFailures.push(`removed or renamed source terms: ${removedTerms.map(JSON.stringify).join(", ")}`);
  }

  const textFiles = context.listAfterFiles(scanRoots)
    .filter(hasIncludedExtension);
  const textContents = context.readAfterPaths(textFiles);
  const encodingFailures = [];
  let koreanFileCount = 0;
  for (const relativePath of textFiles) {
    const content = textContents.get(relativePath);
    if (content.includes("\u0000") || content.includes("\uFFFD")) encodingFailures.push(relativePath);
    if (/[\uAC00-\uD7A3]/u.test(content)) koreanFileCount++;
  }

  const protectedTokenFailures = [];
  const topologyFailures = [];
  let checkedHunkCount = 0;
  let checkedTopologyCount = 0;
  const changes = context.listChanges(diffRoots);

  for (const change of changes) {
    const file = change.newPath ?? change.oldPath;
    if (![change.oldPath, change.newPath].filter(Boolean)
      .some(hasIncludedExtension)) continue;

    if (!["A", "C", "D", "M", "R", "T"].includes(change.status)) {
      checkedTopologyCount++;
      topologyFailures.push(`${change.statusToken} ${file} (unsupported or unresolved Git status)`);
      continue;
    }

    if (change.untracked) {
      checkedTopologyCount++;
      topologyFailures.push(`?? ${change.newPath} (new text file requires explicit review before commit)`);
      continue;
    }

    if (change.status === "A") {
      checkedTopologyCount++;
      topologyFailures.push(`${change.statusToken} ${change.newPath} (new text file requires explicit review)`);
      continue;
    }

    if ((change.status === "R" || change.status === "C") && change.oldPath && change.newPath) {
      checkedTopologyCount++;
      const before = context.readBefore(change);
      const after = context.readAfter(change);
      if (signaturesMatch(before, after)) continue;
      if (allowanceMatches(activeAllowances[change.newPath], before, after)) {
        usedAllowances.add(change.newPath);
        continue;
      }
      protectedTokenFailures.push({
        file: `${change.oldPath} -> ${change.newPath}`,
        header: change.statusToken,
        before,
        after
      });
      continue;
    }

    if (change.status === "D" || change.status === "T") {
      checkedTopologyCount++;
      topologyFailures.push(`${change.statusToken} ${change.oldPath ?? file}`);
      continue;
    }
    if (change.status !== "M" || change.oldPath !== change.newPath) {
      checkedTopologyCount++;
      topologyFailures.push(`${change.statusToken} ${file} (unsupported path topology)`);
      continue;
    }

    const failingHunks = [];
    const hunks = parseChangedHunks(context.diffForPath(file));
    if (hunks.length === 0) {
      let before;
      let after;
      try {
        before = context.readBefore(change);
        after = context.readAfter(change);
      } catch (error) {
        checkedTopologyCount++;
        topologyFailures.push(`${change.statusToken} ${file} ` +
          `(unsupported or unresolved Git status; comparison snapshot unavailable: ${error.message})`);
        continue;
      }
      if (before !== after) {
        checkedHunkCount++;
        if (!signaturesMatch(before, after)) {
          failingHunks.push({
            header: change.statusToken,
            before,
            after,
            reason: "changed content produced no textual Git hunk; full snapshots require explicit review"
          });
        }
      }
    }
    for (const hunk of hunks) {
      if (!hunk.before) {
        if (!hasProtectedParts(hunk.after)) continue;
        checkedHunkCount++;
        failingHunks.push({
          ...hunk,
          reason: "addition-only hunk contains protected content and requires explicit review"
        });
        continue;
      }
      const removesProtectedContent = hunk.before && !hunk.after && hasProtectedParts(hunk.before);
      if (!shouldCheckHunk(hunk.before, hunk.after) && !removesProtectedContent) continue;
      checkedHunkCount++;
      if (!signaturesMatch(hunk.before, hunk.after)) failingHunks.push(hunk);
    }
    if (failingHunks.length === 0) continue;

    const before = context.readBefore(change);
    const after = context.readAfter(change);
    if (allowanceMatches(activeAllowances[file], before, after)) {
      usedAllowances.add(file);
      continue;
    }
    for (const hunk of failingHunks) protectedTokenFailures.push({ file, ...hunk });
  }

  const uniqueProtectedFailures = [...new Map(protectedTokenFailures.map(failure => [
    `${failure.file}:${failure.header}`,
    failure
  ])).values()].sort((left, right) =>
    `${left.file}:${left.header}`.localeCompare(`${right.file}:${right.header}`));

  console.log(`[localization-korean] ${context.summary()}`);
  console.log(`[localization-korean] korean-files=${koreanFileCount}/${textFiles.length} ` +
    `checked-hunks=${checkedHunkCount} checked-topology=${checkedTopologyCount} allowed=${usedAllowances.size} ` +
    `active=${Object.keys(activeAllowances).length} historical=${historicalCount}`);

  if (encodingFailures.length > 0) {
    console.error("Files containing NUL bytes or the U+FFFD replacement character:");
    for (const file of encodingFailures) console.error(`- ${file}`);
  }
  if (uniqueProtectedFailures.length > 0) {
    console.error("Localization removed or changed a protected expression, tag, escape, placeholder, " +
      "or source number:");
    for (const failure of uniqueProtectedFailures) {
      console.error(`- ${failure.file} ${failure.header}${failure.reason ? ` (${failure.reason})` : ""}`);
      if (options.details) {
        console.error(`  before: ${JSON.stringify(protectedParts(failure.before))}`);
        console.error(`  after:  ${JSON.stringify(protectedParts(failure.after))}`);
      }
    }
  }
  if (topologyFailures.length > 0) {
    console.error("Untracked, deleted, or type-changed localization text files, plus added or conflicted files, " +
      "require explicit review:");
    for (const failure of topologyFailures) console.error(`- ${failure}`);
  }
  if (glossaryFailures.length > 0) {
    console.error("Korean glossary source keys changed without an exact protected-token allowance:");
    for (const failure of glossaryFailures) console.error(`- ${failure}`);
  }

  if (encodingFailures.length > 0 || uniqueProtectedFailures.length > 0 || topologyFailures.length > 0 ||
    glossaryFailures.length > 0) {
    process.exitCode = 1;
  }
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = error instanceof UsageError ? error.exitCode : 1;
  }
}

module.exports = {
  allowanceMatches,
  contentHash,
  main,
  parseChangedHunks,
  protectedParts,
  signaturesMatch,
  validateGlossary
};
