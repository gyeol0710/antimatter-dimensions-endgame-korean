#!/usr/bin/env node

"use strict";

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const DEFAULT_BASE = "7767d453ee01d1b2f906dc98e90078140c0bed98";
const DEFAULT_KO = "2747c4272ced074a3f68f251fd7e96cfc0c12ec0";
const DEFAULT_REPORT = "localization/ko-KR/reuse-report.json";

const ALWAYS_EXCLUDED = new Set([
  "public/index.html",
  "src/components/tabs/index.js",
  "src/components/tabs/shop/ShopButton.vue",
  "src/core/format.js",
  "src/core/secret-formula/news.js",
  "src/core/timespan.js",
  "src/core/secret-formula/tabs.js",
]);

const MANUAL_TRANSLATION_OVERRIDES = {
  "src/core/secret-formula/achievements/normal-achievements.js": {
    "return `Unlock two new Infinity Upgrades- ${formatX(2)} IP multiplier and offline IP generation.`;":
      "return `새로운 무한 업그레이드 두 개(무한 포인트 ${formatX(2)} 배율 및 오프라인 무한 포인트 생산)를 해금한다.`;",
  },
  "src/core/secret-formula/confirmation-types.js": {
    'name: "Delete Glyph Preset",': 'name: "글리프 프리셋 삭제",',
  },
};

function parseArgs(argv) {
  const options = {
    target: process.cwd(),
    reference: process.env.ADKOREAN_REPO || "",
    base: DEFAULT_BASE,
    ko: DEFAULT_KO,
    report: DEFAULT_REPORT,
    mode: "summary",
  };

  for (let index = 0; index < argv.length; index++) {
    const argument = argv[index];
    if (argument === "--apply") options.mode = "apply";
    else if (argument === "--emit-patch") options.mode = "patch";
    else if (argument === "--summary") options.mode = "summary";
    else if (argument === "--target") options.target = argv[++index];
    else if (argument === "--reference") options.reference = argv[++index];
    else if (argument === "--base") options.base = argv[++index];
    else if (argument === "--ko") options.ko = argv[++index];
    else if (argument === "--report") options.report = argv[++index];
    else if (argument === "--help" || argument === "-h") options.mode = "help";
    else throw new Error(`Unknown option: ${argument}`);
  }
  return options;
}

function usage() {
  return [
    "Usage: node scripts/port-adkorean.cjs --reference <ADKorean repo> [mode]",
    "",
    "Modes:",
    "  --summary     Print a JSON dry-run summary (default)",
    "  --emit-patch  Print an apply_patch-compatible patch without writing files",
    "  --apply       Apply safe line-level reuse and write the JSON report",
    "",
    `Defaults: --base ${DEFAULT_BASE} --ko ${DEFAULT_KO}`,
    "ADKOREAN_REPO may be used instead of --reference.",
  ].join("\n");
}

function git(reference, args) {
  return execFileSync("git", ["-c", `safe.directory=${reference.replaceAll("\\", "/")}`, ...args], {
    cwd: reference,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function normalizeRepoPath(file) {
  return file.replaceAll("\\", "/");
}

function excludedReason(file) {
  if (ALWAYS_EXCLUDED.has(file)) return "explicit-scope-exclusion";
  if (file.startsWith("src/components/tabs/Korean/")) return "adkorean-credit-tab";
  if (file.startsWith("src/core/secret-formula/endgame/")) return "endgame-owned-by-separate-pass";
  if (file.includes("/endgame-") || file.includes("/endgame/")) return "endgame-owned-by-separate-pass";
  if (!file.endsWith(".js") && !file.endsWith(".vue")) return "non-source-or-style-file";
  return null;
}

function showFile(reference, revision, file) {
  return git(reference, ["show", `${revision}:${file}`]);
}

function vueSections(lines) {
  const sections = Array(lines.length).fill("outside");
  let current = "outside";
  for (let index = 0; index < lines.length; index++) {
    const trimmed = lines[index].trim();
    if (/^<script(?:\s|>)/.test(trimmed)) current = "script";
    else if (/^<template(?:\s|>)/.test(trimmed)) current = "template";
    sections[index] = current;
    if (/^<\/script>/.test(trimmed) || /^<\/template>/.test(trimmed)) current = "outside";
  }
  return sections;
}

function parseZeroContextDiff(diff, baseLines, file) {
  const sections = file.endsWith(".vue") ? vueSections(baseLines) : null;
  const hunks = [];
  let hunk = null;
  let oldLine = 0;
  let newLine = 0;

  const flush = () => {
    if (hunk && (hunk.old.length || hunk.added.length)) hunks.push(hunk);
    hunk = null;
  };

  for (const line of diff.split(/\r?\n/)) {
    const match = /^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/.exec(line);
    if (match) {
      flush();
      oldLine = Number(match[1]);
      newLine = Number(match[3]);
      hunk = { old: [], added: [] };
      continue;
    }
    if (!hunk) continue;
    if (line.startsWith("-") && !line.startsWith("---")) {
      hunk.old.push({
        text: line.slice(1),
        line: oldLine,
        section: sections ? sections[oldLine - 1] : "script",
      });
      oldLine++;
    } else if (line.startsWith("+") && !line.startsWith("+++")) {
      hunk.added.push({ text: line.slice(1), line: newLine });
      newLine++;
    } else if (line.startsWith(" ")) {
      oldLine++;
      newLine++;
    }
  }
  flush();
  return hunks;
}

function sortedEqual(left, right) {
  if (left.length !== right.length) return false;
  const a = [...left].sort();
  const b = [...right].sort();
  return a.every((value, index) => value === b[index]);
}

function scanTemplateExpressions(text) {
  const expressions = [];
  for (let index = 0; index < text.length - 1; index++) {
    if (text[index] !== "$" || text[index + 1] !== "{") continue;
    const start = index;
    index += 2;
    const expressionStart = index;
    let depth = 1;
    let quote = null;
    let escaped = false;
    for (; index < text.length; index++) {
      const character = text[index];
      if (quote) {
        if (escaped) escaped = false;
        else if (character === "\\") escaped = true;
        else if (character === quote) quote = null;
        continue;
      }
      if (character === "'" || character === '"' || character === "`") {
        quote = character;
      } else if (character === "{") {
        depth++;
      } else if (character === "}") {
        depth--;
        if (depth === 0) {
          expressions.push({ start, end: index + 1, expression: text.slice(expressionStart, index) });
          break;
        }
      }
    }
    if (depth !== 0) return null;
  }
  return expressions;
}

function expressionShape(expression) {
  return expression.replace(/(?<![A-Za-z_$])\d+(?:\.\d+)?(?:e[+-]?\d+)?/gi, "#").replace(/\s+/g, "");
}

function repairTemplateExpressions(original, translated) {
  const sourceExpressions = scanTemplateExpressions(original);
  const translatedExpressions = scanTemplateExpressions(translated);
  if (!sourceExpressions || !translatedExpressions) return { ok: false, reason: "unbalanced-template-expression" };
  if (sourceExpressions.length !== translatedExpressions.length) {
    return { ok: false, reason: "placeholder-count-changed" };
  }

  const unused = new Set(sourceExpressions.map((_, index) => index));
  const replacements = [];
  for (const targetExpression of translatedExpressions) {
    let matches = [...unused].filter(index =>
      sourceExpressions[index].expression === targetExpression.expression
    );
    if (matches.length === 0) {
      matches = [...unused].filter(index =>
        expressionShape(sourceExpressions[index].expression) === expressionShape(targetExpression.expression)
      );
    }
    if (matches.length !== 1) return { ok: false, reason: "placeholder-expression-changed" };
    const sourceIndex = matches[0];
    unused.delete(sourceIndex);
    replacements.push({
      start: targetExpression.start,
      end: targetExpression.end,
      text: `\${${sourceExpressions[sourceIndex].expression}}`,
    });
  }

  let repaired = translated;
  for (const replacement of replacements.reverse()) {
    repaired = repaired.slice(0, replacement.start) + replacement.text + repaired.slice(replacement.end);
  }
  return { ok: true, text: repaired, corrected: repaired !== translated };
}

function moustacheExpressions(text) {
  return [...text.matchAll(/\{\{([\s\S]*?)\}\}/g)].map(match => match[1].trim());
}

function numericTokens(text) {
  return [...text.matchAll(/(?<![A-Za-z_$])\d+(?:\.\d+)?(?:e[+-]?\d+)?/gi)].map(match => match[0]);
}

function printfTokens(text) {
  return [...text.matchAll(/%(?:\d+\$)?[sdif]/g)].map(match => match[0]);
}

function specialPlaceholderTokens(text) {
  return [...text.matchAll(/\*/g)].map(match => match[0]);
}

function maskJavaScriptStrings(text) {
  let result = "";
  for (let index = 0; index < text.length;) {
    const character = text[index];
    if (character !== "'" && character !== '"' && character !== "`") {
      result += character;
      index++;
      continue;
    }

    const quote = character;
    result += `${quote}§`;
    index++;
    let escaped = false;
    let closed = false;
    while (index < text.length) {
      const current = text[index];
      if (escaped) {
        escaped = false;
        index++;
        continue;
      }
      if (current === "\\") {
        escaped = true;
        index++;
        continue;
      }
      if (quote === "`" && current === "$" && text[index + 1] === "{") {
        const remainder = text.slice(index);
        const expression = scanTemplateExpressions(remainder)?.[0];
        if (!expression || expression.start !== 0) return null;
        result += "¤";
        index += expression.end;
        continue;
      }
      if (current === quote) {
        result += quote;
        index++;
        closed = true;
        break;
      }
      index++;
    }
    if (!closed) return null;
  }
  return result.replace(/\s+/g, " ").trim();
}

function maskTemplateMarkup(text) {
  let working = text;
  working = working.replace(/\{\{[\s\S]*?\}\}/g, "¤");
  const tags = [];
  working = working.replace(/<[^>]*>/g, match => {
    tags.push(match.replace(/\s+/g, " ").trim());
    return `§TAG${tags.length - 1}§`;
  });
  working = working.replace(/[A-Za-zÀ-ž가-힣][^§¤<>]*/g, "TEXT");
  return {
    skeleton: working.replace(/\s+/g, " ").trim(),
    tags,
  };
}

function safeAttributePair(source, translated) {
  const attribute = /^\s*([:@]?[\w.-]+)\s*=\s*(["'])([\s\S]*)\2\s*$/.exec(source);
  const translatedAttribute = /^\s*([:@]?[\w.-]+)\s*=\s*(["'])([\s\S]*)\2\s*$/.exec(translated);
  if (!attribute || !translatedAttribute || attribute[1] !== translatedAttribute[1]) return false;
  const name = attribute[1];
  if (!name.startsWith(":") && !name.startsWith("@")) {
    return ["title", "label", "text", "message", "tooltip", "description", "name"].includes(name);
  }
  const sourceMask = maskJavaScriptStrings(attribute[3]);
  const translatedMask = maskJavaScriptStrings(translatedAttribute[3]);
  return sourceMask !== null && sourceMask === translatedMask;
}

function safePair(sourceEntry, translatedEntry) {
  const source = sourceEntry.text;
  let translated = translatedEntry.text;
  const sourceTrimmed = source.trim();
  const translatedTrimmed = translated.trim();

  if (!sourceTrimmed || !translatedTrimmed) return { ok: false, reason: "blank-or-whitespace" };
  if (sourceTrimmed === translatedTrimmed) return { ok: false, reason: "unchanged" };
  if (!/[A-Za-z]/.test(sourceTrimmed) || !/[가-힣]/.test(translatedTrimmed)) {
    return { ok: false, reason: "not-an-english-to-korean-pair" };
  }
  if (/^(?:\/\/|\/\*|\*|import\b|export\s+\{)/.test(sourceTrimmed)) {
    return { ok: false, reason: "comment-or-module-structure" };
  }
  if (/\bscrambleText\s*:/.test(sourceTrimmed)) {
    return { ok: false, reason: "runtime-scramble-source" };
  }

  const repaired = repairTemplateExpressions(source, translated);
  if (!repaired.ok) return repaired;
  translated = repaired.text;

  if (!sortedEqual(moustacheExpressions(source), moustacheExpressions(translated))) {
    return { ok: false, reason: "vue-placeholder-changed" };
  }
  if (!sortedEqual(printfTokens(source), printfTokens(translated))) {
    return { ok: false, reason: "printf-placeholder-changed" };
  }
  if (!sortedEqual(specialPlaceholderTokens(source), specialPlaceholderTokens(translated))) {
    return { ok: false, reason: "special-placeholder-changed" };
  }
  if (!sortedEqual(numericTokens(source), numericTokens(translated))) {
    return { ok: false, reason: "numeric-value-changed" };
  }

  let structuresMatch = false;
  if (sourceEntry.section === "template") {
    if (/^\s*[:@\w.-]+\s*=/.test(source)) {
      structuresMatch = safeAttributePair(source, translated);
    } else {
      const sourceMarkup = maskTemplateMarkup(source);
      const translatedMarkup = maskTemplateMarkup(translated);
      structuresMatch = sourceMarkup.skeleton === translatedMarkup.skeleton &&
        JSON.stringify(sourceMarkup.tags) === JSON.stringify(translatedMarkup.tags);
    }
  } else {
    const sourceMask = maskJavaScriptStrings(source);
    const translatedMask = maskJavaScriptStrings(translated);
    structuresMatch = sourceMask !== null && sourceMask === translatedMask;
  }

  if (!structuresMatch) return { ok: false, reason: "code-or-markup-structure-changed" };
  return {
    ok: true,
    source: sourceTrimmed,
    translated: translated.trim(),
    corrected: repaired.corrected,
    sourceLine: sourceEntry.line,
  };
}

function candidatePairsForHunk(hunk, exclusions) {
  const pairs = [];
  const usedOld = new Set();
  const usedAdded = new Set();

  const accept = (oldIndex, addedIndex, result) => {
    usedOld.add(oldIndex);
    usedAdded.add(addedIndex);
    pairs.push(result);
  };

  const positionalCount = Math.min(hunk.old.length, hunk.added.length);
  for (let index = 0; index < positionalCount; index++) {
    const result = safePair(hunk.old[index], hunk.added[index]);
    if (result.ok) accept(index, index, result);
  }

  for (let oldIndex = 0; oldIndex < hunk.old.length; oldIndex++) {
    if (usedOld.has(oldIndex)) continue;
    const matches = [];
    for (let addedIndex = 0; addedIndex < hunk.added.length; addedIndex++) {
      if (usedAdded.has(addedIndex)) continue;
      const result = safePair(hunk.old[oldIndex], hunk.added[addedIndex]);
      if (result.ok) matches.push({ addedIndex, result });
    }
    if (matches.length !== 1) continue;
    const reverseMatches = hunk.old.reduce((count, entry, candidateOldIndex) => {
      if (usedOld.has(candidateOldIndex)) return count;
      return count + Number(safePair(entry, hunk.added[matches[0].addedIndex]).ok);
    }, 0);
    if (reverseMatches === 1) accept(oldIndex, matches[0].addedIndex, matches[0].result);
  }

  for (let oldIndex = 0; oldIndex < hunk.old.length; oldIndex++) {
    if (usedOld.has(oldIndex)) continue;
    const reasons = hunk.added.map(entry => safePair(hunk.old[oldIndex], entry).reason).filter(Boolean);
    const reason = reasons.find(value => value.includes("placeholder")) ||
      reasons.find(value => value === "numeric-value-changed") ||
      reasons.find(value => value === "code-or-markup-structure-changed") ||
      "unaligned-diff-hunk";
    exclusions[reason] = (exclusions[reason] || 0) + 1;
  }
  return pairs;
}

function buildPlan(options) {
  const targetRoot = path.resolve(options.target);
  const referenceRoot = path.resolve(options.reference);
  if (!options.reference || !fs.existsSync(referenceRoot)) {
    throw new Error("ADKorean reference repository not found; pass --reference or set ADKOREAN_REPO.");
  }

  git(referenceRoot, ["cat-file", "-e", `${options.base}^{commit}`]);
  git(referenceRoot, ["cat-file", "-e", `${options.ko}^{commit}`]);
  const changedFiles = git(referenceRoot, ["diff", "--name-only", "-z", options.base, options.ko, "--", "src"])
    .split("\0").filter(Boolean).map(normalizeRepoPath);

  const excludedFiles = [];
  const exclusions = {};
  const files = [];
  const reportFiles = [];
  let extractedPairs = 0;
  let correctedPairs = 0;
  let alreadyAppliedOccurrences = 0;
  let missingSourceOccurrences = 0;
  let ambiguousMappings = 0;

  for (const file of changedFiles) {
    const reason = excludedReason(file);
    const targetFile = path.join(targetRoot, ...file.split("/"));
    if (reason) {
      excludedFiles.push({ file, reason });
      continue;
    }
    if (!fs.existsSync(targetFile)) {
      excludedFiles.push({ file, reason: "not-present-in-endgame-target" });
      continue;
    }

    const base = showFile(referenceRoot, options.base, file).replaceAll("\r\n", "\n");
    const translatedReference = showFile(referenceRoot, options.ko, file).replaceAll("\r\n", "\n");
    const target = fs.readFileSync(targetFile, "utf8").replaceAll("\r\n", "\n");
    const baseLines = base.split("\n");
    const diff = git(referenceRoot, ["diff", "--no-color", "--unified=0", options.base, options.ko, "--", file]);
    const hunks = parseZeroContextDiff(diff, baseLines, file);
    const mappings = [];
    for (const hunk of hunks) mappings.push(...candidatePairsForHunk(hunk, exclusions));
    const overrides = MANUAL_TRANSLATION_OVERRIDES[file] || {};
    for (const mapping of mappings) {
      if (overrides[mapping.source]) {
        mapping.translated = overrides[mapping.source];
        mapping.corrected = true;
      }
    }
    extractedPairs += mappings.length;
    correctedPairs += mappings.filter(mapping => mapping.corrected).length;

    const groupedMappings = new Map();
    for (const mapping of mappings) {
      if (!groupedMappings.has(mapping.source)) groupedMappings.set(mapping.source, new Map());
      const translations = groupedMappings.get(mapping.source);
      translations.set(mapping.translated, mapping);
    }

    const usable = new Map();
    for (const [source, translations] of groupedMappings) {
      if (translations.size !== 1) {
        ambiguousMappings++;
        continue;
      }
      usable.set(source, [...translations.values()][0]);
    }

    const lines = target.split("\n");
    const changes = [];
    let existingOccurrences = 0;
    let existingCorrectedOccurrences = 0;
    const satisfiedSources = new Set();
    const translations = new Map();
    for (const mapping of usable.values()) {
      if (!translations.has(mapping.translated)) translations.set(mapping.translated, []);
      translations.get(mapping.translated).push(mapping);
    }
    for (let index = 0; index < lines.length; index++) {
      const trimmed = lines[index].trim();
      const mapping = usable.get(trimmed);
      if (mapping) {
        const indentation = lines[index].slice(0, lines[index].length - lines[index].trimStart().length);
        changes.push({
          index,
          before: lines[index],
          after: indentation + mapping.translated,
          referenceLine: mapping.sourceLine,
          corrected: mapping.corrected,
        });
        satisfiedSources.add(mapping.source);
      } else {
        const existingMappings = translations.get(trimmed);
        if (existingMappings) {
          existingOccurrences++;
          alreadyAppliedOccurrences++;
          if (existingMappings.some(candidate => candidate.corrected)) existingCorrectedOccurrences++;
          for (const candidate of existingMappings) satisfiedSources.add(candidate.source);
        }
      }
    }

    missingSourceOccurrences += [...usable.keys()].filter(source => !satisfiedSources.has(source)).length;
    if (changes.length || existingOccurrences) {
      reportFiles.push({
        file,
        occurrences: changes.length + existingOccurrences,
        plannedOccurrences: changes.length,
        alreadyAppliedOccurrences: existingOccurrences,
        correctedReferenceOccurrences:
          changes.filter(change => change.corrected).length + existingCorrectedOccurrences,
      });
    }
    if (changes.length) files.push({ file, targetFile, original: target, lines, changes });
  }

  return {
    targetRoot,
    referenceRoot,
    files,
    report: {
      schemaVersion: 1,
      generatedBy: "scripts/port-adkorean.cjs",
      source: {
        repository: referenceRoot,
        upstream: "https://github.com/Jihuu621/ADKorean",
        englishBase: options.base,
        koreanRevision: options.ko,
      },
      policy: {
        match: "same path plus exact current source line, with code/markup skeleton preserved",
        placeholders: "template, Vue, printf placeholders preserved as a multiset",
        values: "numeric tokens preserved; repair only uniquely matched numeric template expressions",
        exclusions: [...ALWAYS_EXCLUDED],
      },
      totals: {
        referenceChangedFiles: changedFiles.length,
        eligibleChangedFiles: changedFiles.length - excludedFiles.length,
        filesWithReusableText: reportFiles.length,
        extractedSafePairs: extractedPairs,
        correctedReferencePairs: correctedPairs,
        appliedOccurrences: files.reduce((sum, entry) => sum + entry.changes.length, 0) +
          alreadyAppliedOccurrences,
        plannedOccurrences: files.reduce((sum, entry) => sum + entry.changes.length, 0),
        alreadyAppliedOccurrences,
        missingOrChangedSourceMappings: missingSourceOccurrences,
        reviewOrExcludedCandidates:
          Object.values(exclusions).reduce((sum, count) => sum + count, 0) + missingSourceOccurrences,
        ambiguousMappings,
      },
      correctedReferenceText: [
        {
          file: "src/core/secret-formula/achievements/normal-achievements.js",
          context: "Achievement 41 reward",
          reason: "Restored the ×2 IP multiplier meaning instead of treating it as a negative upgrade count.",
        },
        {
          file: "src/core/secret-formula/achievements/normal-achievements.js",
          context: "Achievement 92 description",
          reason: "Restored formatInt(20); the ADKorean text incorrectly used formatInt(2).",
        },
        {
          file: "src/core/secret-formula/confirmation-types.js",
          context: "Delete Glyph Preset confirmation",
          reason: "Corrected 'change preset' to 'delete preset'.",
        },
      ],
      excludedFiles,
      excludedCandidatesByReason: exclusions,
      appliedFiles: reportFiles,
    },
  };
}

function patchForFile(entry) {
  const changed = new Set(entry.changes.map(change => change.index));
  const groups = [];
  let group = null;
  for (const index of [...changed].sort((a, b) => a - b)) {
    if (!group || index > group.end + 3) {
      group = { start: index, end: index };
      groups.push(group);
    } else {
      group.end = index;
    }
  }

  const output = [`*** Update File: ${entry.file}`];
  const changeByIndex = new Map(entry.changes.map(change => [change.index, change]));
  for (const current of groups) {
    const start = Math.max(0, current.start - 1);
    const end = Math.min(entry.lines.length - 1, current.end + 1);
    output.push("@@");
    for (let index = start; index <= end; index++) {
      const change = changeByIndex.get(index);
      if (change) {
        output.push(`-${change.before}`);
        output.push(`+${change.after}`);
      } else {
        output.push(` ${entry.lines[index]}`);
      }
    }
  }
  return output.join("\n");
}

function emitPatch(plan) {
  if (plan.files.length === 0) return "*** Begin Patch\n*** End Patch\n";
  return `*** Begin Patch\n${plan.files.map(patchForFile).join("\n")}\n*** End Patch\n`;
}

function applyPlan(plan, reportPath) {
  for (const entry of plan.files) {
    const nextLines = [...entry.lines];
    for (const change of entry.changes) nextLines[change.index] = change.after;
    fs.writeFileSync(entry.targetFile, nextLines.join("\n"), "utf8");
  }
  const absoluteReport = path.resolve(plan.targetRoot, reportPath);
  fs.mkdirSync(path.dirname(absoluteReport), { recursive: true });
  fs.writeFileSync(absoluteReport, `${JSON.stringify(plan.report, null, 2)}\n`, "utf8");
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.mode === "help") {
    process.stdout.write(`${usage()}\n`);
    return;
  }
  const plan = buildPlan(options);
  if (options.mode === "patch") process.stdout.write(emitPatch(plan));
  else if (options.mode === "apply") {
    applyPlan(plan, options.report);
    process.stdout.write(`${JSON.stringify(plan.report.totals, null, 2)}\n`);
  } else {
    process.stdout.write(`${JSON.stringify(plan.report, null, 2)}\n`);
  }
}

try {
  main();
} catch (error) {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
}
