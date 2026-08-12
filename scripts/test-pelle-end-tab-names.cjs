const assert = require("assert");
const fs = require("fs");
const path = require("path");

const parser = require("@babel/parser");

const root = path.resolve(__dirname, "..");
const pelleFile = path.join(root, "src", "core", "celestials", "pelle", "pelle.js");
const source = fs.readFileSync(pelleFile, "utf8");
const ast = parser.parse(source, {
  sourceType: "module",
  plugins: ["nullishCoalescingOperator", "objectRestSpread", "optionalChaining"]
});

function propertyName(node) {
  if (node.type === "Identifier") return node.name;
  if (node.type === "StringLiteral") return node.value;
  return undefined;
}

let pelleObject;
for (const statement of ast.program.body) {
  if (statement.type !== "ExportNamedDeclaration" || statement.declaration?.type !== "VariableDeclaration") continue;
  for (const declaration of statement.declaration.declarations) {
    if (declaration.id.type === "Identifier" && declaration.id.name === "Pelle" &&
        declaration.init?.type === "ObjectExpression") {
      pelleObject = declaration.init;
    }
  }
}

assert.ok(pelleObject, "the exported Pelle object must be present");
const endTabNames = pelleObject.properties.find(property =>
  property.type === "ObjectMethod" && property.kind === "get" && propertyName(property.key) === "endTabNames");
assert.ok(endTabNames, "Pelle.endTabNames getter must be present");

const targetPhrases = [];
function collectReturns(node) {
  if (!node || typeof node !== "object") return;
  if (node.type === "ReturnStatement") {
    const splitCall = node.argument;
    assert.equal(splitCall?.type, "CallExpression", "endTabNames branches must return a split phrase");
    assert.equal(splitCall.callee?.type, "MemberExpression", "endTabNames branches must call String.split");
    assert.equal(propertyName(splitCall.callee.property), "split", "endTabNames branches must split on spaces");
    assert.equal(splitCall.callee.object?.type, "StringLiteral", "endTabNames targets must be static strings");
    assert.equal(splitCall.arguments.length, 1, "endTabNames split calls must have one separator");
    assert.equal(splitCall.arguments[0]?.type, "StringLiteral", "endTabNames separator must be static");
    assert.equal(splitCall.arguments[0].value, " ", "endTabNames targets must use one space as the separator");
    targetPhrases.push(splitCall.callee.object.value);
    return;
  }
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) value.forEach(collectReturns);
    else if (value && typeof value === "object") collectReturns(value);
  }
}
collectReturns(endTabNames.body);

assert.equal(targetPhrases.length, 6, "Pelle.endTabNames must retain all six progression branches");
const expectedOmegaIndices = [[], [10], [9, 10], [9, 10], [8, 9, 10], [7, 8, 9, 10]];

for (const [index, phrase] of targetPhrases.entries()) {
  const tokens = phrase.split(" ");
  assert.equal(tokens.length, 14, `Pelle.endTabNames branch ${index + 1} must map to exactly 14 tabs`);
  assert.ok(tokens.every(Boolean), `Pelle.endTabNames branch ${index + 1} must not contain empty tab labels`);
  assert.deepStrictEqual(
    tokens.flatMap((token, tokenIndex) => (token === "Ω" ? [tokenIndex] : [])),
    expectedOmegaIndices[index],
    `Pelle.endTabNames branch ${index + 1} must preserve its Ω tab positions`
  );
  assert.ok(!tokens.some(token => /[A-Za-z]/u.test(token)),
    `Pelle.endTabNames branch ${index + 1} must not leave English tab labels`);
}

assert.deepStrictEqual(targetPhrases[0].split(" ").slice(-3), ["재미", "혼란", "웃음"],
  "the final divinity labels must match Pelle's existing confusing word cycle");
assert.deepStrictEqual(targetPhrases[3].split(" ").slice(-3), ["생성기", "필라멘트", "별들"],
  "the destroyed-Alpha labels must match Pelle's existing filament word cycle");

process.stdout.write("Pelle end tab name regressions passed (6 branches, 14 tabs each)\n");
