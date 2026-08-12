const fs = require("fs");
const path = require("path");

const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const vue = require("vue-template-compiler");

const root = path.resolve(__dirname, "..");
const showDetails = process.argv.includes("--details");
const showFiles = process.argv.includes("--files");
const pathArgument = process.argv.find(argument => argument.startsWith("--path="));
const fileArgument = process.argv.find(argument => argument.startsWith("--file="));
const requestedPrefix = pathArgument ? pathArgument.slice("--path=".length).replaceAll("\\", "/") : "src/";
const requestedFile = fileArgument ? path.resolve(root, fileArgument.slice("--file=".length)) : null;
const candidates = [];
const visibleProperties = new Set([
  "alias", "baseEffect1", "baseEffect2", "baseEffect3", "boolDisplay", "description", "displayName",
  "drainResource", "effect", "entranceLabel", "info", "label", "lines", "message", "name", "optionName",
  "prompt", "reward", "scrambleText", "text", "title", "tooltip", "unlock", "warning"
]);
const nonVisibleProperties = new Set(["background", "celestialName"]);

function walk(directory) {
  const result = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...walk(absolutePath));
    else if (entry.name.endsWith(".js") || entry.name.endsWith(".vue")) result.push(absolutePath);
  }
  return result;
}

function isCandidate(text) {
  const value = text.replace(/\s+/gu, " ").trim();
  const isFirstPersonFragment = /^I(?:(?:['’][A-Za-z]+)?(?:\.{2,}|…+))$/u.test(value);
  const hasEnglishText = /[A-Za-z]{2}/u.test(value) || isFirstPersonFragment;
  if (!hasEnglishText || /[가-힣]/u.test(value)) return false;
  if (/^(?:https?:|mailto:|@\/|\.\.?\/)/u.test(value)) return false;
  if (/\.(?:css|html|js|json|mp3|png|svg|vue|webm|webp)$/iu.test(value)) return false;
  if (/^(?:%[A-Za-z][A-Za-z\d_]*\??|\$\d+)[.!…]*$/u.test(value)) return false;
  if (/^(?:[clo]-|fa[brs]?\s|fas\s|far\s)/u.test(value) || /(?:__|--)/u.test(value)) return false;
  if (/^[A-Z\d_]+$/u.test(value)) return false;
  return true;
}

function addCandidate(file, line, context, text) {
  const value = text.replace(/\s+/gu, " ").trim();
  if (isCandidate(value)) candidates.push({ file, line, context, text: value });
}

function propertyName(node) {
  if (!node || !node.key) return "";
  return node.key.name ?? node.key.value ?? "";
}

function hasVisibleAncestor(astPath) {
  let parent = astPath.parentPath;
  while (parent) {
    if (parent.isReturnStatement()) return true;
    if (parent.isObjectProperty()) {
      const name = propertyName(parent.node);
      if (nonVisibleProperties.has(name)) return false;
      if (visibleProperties.has(name)) return true;
    }
    if (parent.isCallExpression()) {
      const callee = parent.get("callee").toString();
      if (/(?:Modal|notify|show|confirm|prompt|log)/u.test(callee)) return true;
    }
    parent = parent.parentPath;
  }
  return false;
}

function collectScript(file, source, lineOffset = 0) {
  let ast;
  try {
    ast = parser.parse(source, {
      sourceType: "unambiguous",
      plugins: ["classProperties", "dynamicImport", "objectRestSpread", "optionalChaining", "topLevelAwait"]
    });
  } catch (error) {
    console.error(`파싱 실패: ${file}: ${error.message}`);
    return;
  }

  traverse(ast, {
    StringLiteral(astPath) {
      const parent = astPath.parentPath;
      if (parent.isImportDeclaration() || parent.isExportNamedDeclaration() || parent.isExportAllDeclaration()) return;
      if (parent.isObjectProperty() &&
        !visibleProperties.has(propertyName(parent.node)) &&
        !hasVisibleAncestor(astPath)) return;
      if (!parent.isObjectProperty() && !hasVisibleAncestor(astPath)) return;
      addCandidate(file, astPath.node.loc.start.line + lineOffset, "script", astPath.node.value);
    },
    TemplateElement(astPath) {
      if (!hasVisibleAncestor(astPath)) return;
      addCandidate(file, astPath.node.loc.start.line + lineOffset, "template-string", astPath.node.value.raw);
    }
  });
}

function templateLine(source, offset, lineOffset) {
  if (!Number.isInteger(offset)) return lineOffset + 1;
  return lineOffset + source.slice(0, offset).split(/\r?\n/u).length;
}

function collectTemplateNode(file, node, source, lineOffset) {
  if (!node) return;
  if (node.type === 3 && !node.isComment) {
    addCandidate(file, templateLine(source, node.start, lineOffset), "vue-text", node.text);
  }
  if (node.attrsList) {
    for (const attribute of node.attrsList) {
      if (["ach-tooltip", "alt", "placeholder", "title"].includes(attribute.name)) {
        addCandidate(file, templateLine(source, attribute.start, lineOffset), `vue-${attribute.name}`, attribute.value);
      }
    }
  }
  for (const child of node.children ?? []) collectTemplateNode(file, child, source, lineOffset);
  if (node.ifConditions) {
    for (const condition of node.ifConditions.slice(1)) collectTemplateNode(file, condition.block, source, lineOffset);
  }
}

const sourceFiles = requestedFile ? [requestedFile] : walk(path.join(root, "src"));
for (const absolutePath of sourceFiles) {
  const file = path.relative(root, absolutePath).replaceAll("\\", "/");
  if (!requestedFile && !file.startsWith(requestedPrefix)) continue;
  if (file.startsWith("src/typings/")) continue;
  const source = fs.readFileSync(absolutePath, "utf8");
  if (file.endsWith(".js")) {
    collectScript(file, source);
    continue;
  }

  const component = vue.parseComponent(source, { pad: "line" });
  if (component.script) collectScript(file, component.script.content);
  if (component.template) {
    const compiled = vue.compile(component.template.content, { comments: false, outputSourceRange: true });
    const lineOffset = source.slice(0, component.template.start).split(/\r?\n/u).length - 1;
    collectTemplateNode(file, compiled.ast, component.template.content, lineOffset);
  }
}

const unique = [...new Map(candidates.map(candidate => [
  `${candidate.file}:${candidate.line}:${candidate.context}:${candidate.text}`,
  candidate
])).values()];
const counts = new Map();
for (const candidate of unique) {
  const parts = candidate.file.split("/");
  const group = parts.slice(0, Math.min(parts.length - 1, 4)).join("/");
  counts.set(group, (counts.get(group) ?? 0) + 1);
}

console.log(`번역 후보 영어 문자열: ${unique.length}개`);
for (const [group, count] of [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 30)) {
  console.log(`${String(count).padStart(5)}  ${group}`);
}

if (showFiles) {
  const fileCounts = new Map();
  for (const candidate of unique) fileCounts.set(candidate.file, (fileCounts.get(candidate.file) ?? 0) + 1);
  console.log("\n파일별 후보:");
  for (const [file, count] of [...fileCounts.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`${String(count).padStart(5)}  ${file}`);
  }
}

if (showDetails) {
  console.log("\n상세 후보:");
  for (const candidate of unique) {
    console.log(`${candidate.file}:${candidate.line} [${candidate.context}] ${candidate.text}`);
  }
}
