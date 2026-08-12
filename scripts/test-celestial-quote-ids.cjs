const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const parser = require("@babel/parser");

const root = path.resolve(__dirname, "..");
const quoteDirectory = path.join(root, "src", "core", "secret-formula", "celestials", "quotes");

function propertyName(node) {
  if (node.type === "Identifier") return node.name;
  if (node.type === "StringLiteral") return node.value;
  return undefined;
}

function quoteEntries(file) {
  const source = fs.readFileSync(file, "utf8");
  const ast = parser.parse(source, {
    sourceType: "module",
    plugins: ["nullishCoalescingOperator", "objectRestSpread", "optionalChaining"]
  });
  let quoteObject;

  for (const statement of ast.program.body) {
    if (statement.type !== "ExportNamedDeclaration" || statement.declaration?.type !== "VariableDeclaration") {
      continue;
    }
    for (const declaration of statement.declaration.declarations) {
      if (declaration.id.type === "Identifier" && declaration.id.name.endsWith("Quotes") &&
          declaration.init?.type === "ObjectExpression") {
        quoteObject = declaration.init;
      }
    }
  }

  assert.ok(quoteObject, `${path.basename(file)}: exported quote object not found`);
  return quoteObject.properties.map(property => {
    assert.equal(property.type, "ObjectProperty", `${path.basename(file)}: quote entries must be object properties`);
    const name = propertyName(property.key);
    assert.ok(name, `${path.basename(file)}: quote entry must have a static name`);
    assert.equal(property.value.type, "ObjectExpression", `${path.basename(file)}: ${name} must be an object`);
    const idProperties = property.value.properties.filter(entry => propertyName(entry.key) === "id");
    assert.equal(idProperties.length, 1, `${path.basename(file)}: ${name} must have exactly one id`);
    const [idProperty] = idProperties;
    assert.equal(idProperty.value.type, "NumericLiteral", `${path.basename(file)}: ${name} id must be numeric`);
    assert.ok(Number.isInteger(idProperty.value.value) && idProperty.value.value >= 0,
      `${path.basename(file)}: ${name} id must be a non-negative integer`);
    return { name, id: idProperty.value.value };
  });
}

const quoteFiles = fs.readdirSync(quoteDirectory)
  .filter(file => file.endsWith(".js") && file !== "index.js")
  .sort();
const quotesByFile = new Map();

for (const fileName of quoteFiles) {
  const entries = quoteEntries(path.join(quoteDirectory, fileName));
  const namesById = new Map();
  for (const entry of entries) {
    assert.ok(!namesById.has(entry.id),
      `${fileName}: duplicate quote id ${entry.id} for ${namesById.get(entry.id)} and ${entry.name}`);
    namesById.set(entry.id, entry.name);
  }
  quotesByFile.set(fileName, new Map(entries.map(entry => [entry.name, entry.id])));
}

const laitela = quotesByFile.get("laitela.js");
assert.ok(laitela, "laitela quote data must be present");
assert.deepStrictEqual(Object.fromEntries(laitela), {
  unlock: 0,
  firstDestabilize: 1,
  secondDestabilize: 2,
  firstSingularity: 3,
  thirdDMD: 5,
  annihilation: 4,
  halfDimensions: 6,
  finalRowIM: 7,
  increasedMilestoneScaling: 8,
  fullDestabilize: 9,
  expansionPacks: 10,
  dmd5: 11,
  dmd6: 12,
  dmd7: 13,
  dmd8: 14,
  laitelaPack: 15,
  hadrons: 16,
  darkHadrons: 17,
  massHadron: 18,
  autoHadron: 19,
  gigaHadron: 20
}, "Laitela quote ids are persisted save data and must not be renumbered");

function loadLaitelaConfig(laitelaState) {
  const file = path.join(quoteDirectory, "laitela.js");
  const source = fs.readFileSync(file, "utf8");
  const executable = source.replace("export const laitelaQuotes =", "return");
  assert.notEqual(executable, source, "laitela quote export must be loadable by the regression harness");
  return vm.runInNewContext(`(() => { ${executable} })()`, {
    Laitela: laitelaState,
    DivinityMilestone: { hadronEmpowerment: { isReached: false } }
  });
}

function loadQuoteRuntime(ui, player) {
  const file = path.join(root, "src", "core", "celestials", "quotes.js");
  const source = fs.readFileSync(file, "utf8");
  const start = source.indexOf("export const Quote =");
  const end = source.indexOf("\nexport const Quotes =");
  assert.ok(start >= 0 && end > start, "quote runtime classes must be loadable by the regression harness");
  const executable = source.slice(start, end).replace("export const Quote =", "const Quote =");
  class GameMechanicState {
    constructor(config) {
      this.config = config;
    }

    get id() {
      return this.config.id;
    }
  }
  return vm.runInNewContext(`(() => { ${executable}\nreturn { Quote, CelQuotes }; })()`, {
    GameMechanicState,
    wordShift: { wordCycle: value => value },
    ui,
    player,
    Celestials: {
      laitela: { displayName: "Laitela", symbol: "L" },
      teresa: { displayName: "Teresa", symbol: "T" }
    },
    Elemental: { displayName: "Elemental", symbol: "E" },
    Destroyer: { displayName: "Destroyer", symbol: "D" }
  });
}

const legacySave = [18, 18];
const laitelaState = { hadronizes: 24 };
const config = loadLaitelaConfig(laitelaState);
const ui = { view: { quotes: { queue: [], current: undefined, history: undefined } } };
const player = {
  username: "Test Player",
  celestials: { laitela: { quotes: legacySave } },
  expanse: { elemental: { quotes: [] } }
};
const { Quote, CelQuotes } = loadQuoteRuntime(ui, player);
const massHadron = new CelQuotes(config.massHadron, "laitela");
const gigaHadron = new CelQuotes(config.gigaHadron, "laitela");

assert.ok(massHadron.isUnlocked, "legacy id 18 must keep massHadron unlocked");
assert.ok(!gigaHadron.isUnlocked, "legacy id 18 must not unlock or expose gigaHadron");
assert.ok(!massHadron.requirement, "massHadron must stay locked below 25 Hadronizations");
laitelaState.hadronizes = 25;
assert.ok(massHadron.requirement, "massHadron must become eligible at 25 Hadronizations");
laitelaState.hadronizes = 99;
assert.ok(!gigaHadron.requirement, "gigaHadron must stay locked below 100 Hadronizations");
laitelaState.hadronizes = 100;
assert.ok(gigaHadron.requirement, "gigaHadron must become eligible at 100 Hadronizations");

const beforeRecoveryLength = legacySave.length;
gigaHadron.show();
assert.ok(gigaHadron.isUnlocked, "an eligible legacy save must record gigaHadron id 20");
assert.deepStrictEqual(legacySave, [18, 18, 20], "legacy save recovery must append the new id exactly once");
assert.equal(legacySave.length, beforeRecoveryLength + 1, "a quote unlock must add exactly one save entry");
assert.equal(ui.view.quotes.current, gigaHadron, "legacy save recovery must present the previously suppressed quote");
const afterRecoveryLength = legacySave.length;
gigaHadron.show();
assert.equal(legacySave.length, afterRecoveryLength, "the recovered quote must not unlock repeatedly");
assert.equal(ui.view.quotes.queue.length, 0, "the recovered quote must not be queued repeatedly");

Quote.clearAll();
player.celestials.teresa = { quotes: [] };
const celestialQuote = new CelQuotes({ id: 3, lines: ["Celestial quote"] }, "teresa");
celestialQuote.show();
assert.deepStrictEqual(player.celestials.teresa.quotes, [3],
  "a regular celestial quote must be saved exactly once");
assert.equal(ui.view.quotes.current, celestialQuote, "a regular celestial quote must be presented once");
celestialQuote.show();
assert.deepStrictEqual(player.celestials.teresa.quotes, [3],
  "an unlocked regular celestial quote must not be saved repeatedly");

Quote.clearAll();
const elementalQuote = new CelQuotes({ id: 7, lines: ["Elemental quote"] }, "elemental");
elementalQuote.show();
assert.deepStrictEqual(player.expanse.elemental.quotes, [7],
  "an Elemental quote must use its fallback save array exactly once");
assert.equal(ui.view.quotes.current, elementalQuote, "an Elemental quote must be presented once");
elementalQuote.show();
assert.deepStrictEqual(player.expanse.elemental.quotes, [7],
  "an unlocked Elemental quote must not be saved repeatedly");

Quote.clearAll();
const elementalSaveBeforePresent = [...player.expanse.elemental.quotes];
elementalQuote.present();
assert.deepStrictEqual(player.expanse.elemental.quotes, elementalSaveBeforePresent,
  "presenting an existing quote directly must not mutate save data");
assert.equal(ui.view.quotes.current, elementalQuote, "direct presentation must still open the quote once");

process.stdout.write(`celestial quote id regressions passed (${quoteFiles.length} files)\n`);
