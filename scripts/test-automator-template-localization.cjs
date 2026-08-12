const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");

function loadTemplateConfig() {
  const file = path.join(root, "src", "core", "secret-formula", "script-templates.js");
  const source = fs.readFileSync(file, "utf8");
  const executable = source
    .replace(/^import .*;\r?\n/u, "")
    .replace("export const automatorTemplates =", "globalThis.automatorTemplates =");
  assert.notEqual(executable, source, "automator template config must be loadable by the regression harness");
  const context = {};
  vm.runInNewContext(executable, context);
  return context.automatorTemplates;
}

class TestDecimal {
  constructor(value) {
    this.value = value instanceof TestDecimal ? value.value : Number(value);
  }

  lte(other) {
    return this.value <= Number(other instanceof TestDecimal ? other.value : other);
  }

  toNumber() {
    return this.value;
  }

  dividedBy(other) {
    return new TestDecimal(this.value / Number(other instanceof TestDecimal ? other.value : other));
  }

  get exponent() {
    return this.value === 0 ? 0 : Math.floor(Math.log10(Math.abs(this.value)));
  }

  get mantissa() {
    return this.value / 10 ** this.exponent;
  }

  static pow(base, exponent) {
    const value = base instanceof TestDecimal ? base.value : Number(base);
    return new TestDecimal(value ** exponent);
  }
}

function loadTemplateRuntime() {
  const file = path.join(root, "src", "core", "automator", "script-templates.js");
  const source = fs.readFileSync(file, "utf8");
  const executable = `${source.replace("export class ScriptTemplate", "class ScriptTemplate")}
globalThis.ScriptTemplate = ScriptTemplate;`;
  assert.notEqual(executable, source, "automator template runtime must be loadable by the regression harness");

  class TestTimeStudyTree {
    constructor() {
      this.invalidStudies = [];
      this.selectedStudies = [231];
      this.purchasedStudies = [231];
      this.ec = 0;
    }

    hasRequirements() {
      return true;
    }
  }

  const timeStudy = id => id;
  timeStudy.eternityChallenge = id => ({ id });
  timeStudy.dilation = { totalTimeTheoremRequirement: new TestDecimal(5000) };

  const context = {
    Achievement: id => ({ id, name: `Achievement ${id}` }),
    Currency: { infinityPoints: { startingValue: new TestDecimal(1e100) } },
    Decimal: TestDecimal,
    TimeStudy: timeStudy,
    TimeStudyTree: TestTimeStudyTree,
    format: value => String(value instanceof TestDecimal ? value.value : value),
    formatInt: value => String(value),
    player: { timestudy: { presets: [] } },
  };
  vm.runInNewContext(executable, context);
  return context.ScriptTemplate;
}

const expectedScripts = [
  {
    name: "Climb EP",
    displayName: "영원 포인트 불리기",
    inputs: [
      ["treeStudies", "tree"],
      ["treeNowait", "nowait"],
      ["finalEP", "decimal"],
      ["autoInfMode", "mode"],
      ["autoInfValue", "decimal"],
      ["autoEterMode", "mode"],
      ["autoEterValue", "decimal"]
    ]
  },
  {
    name: "Grind Eternities",
    displayName: "영원 횟수 모으기",
    inputs: [
      ["treeStudies", "tree"],
      ["treeNowait", "nowait"],
      ["crunchesPerEternity", "integer"],
      ["eternities", "decimal"]
    ]
  },
  {
    name: "Grind Infinities",
    displayName: "무한 횟수 모으기",
    inputs: [
      ["treeStudies", "tree"],
      ["treeNowait", "nowait"],
      ["infinities", "decimal"],
      ["isBanked", "boolean"]
    ]
  },
  {
    name: "Complete Eternity Challenge",
    displayName: "영원 도전 완료하기",
    inputs: [
      ["treeStudies", "tree"],
      ["treeNowait", "nowait"],
      ["ec", "integer"],
      ["completions", "integer"],
      ["autoInfMode", "mode"],
      ["autoInfValue", "decimal"]
    ]
  },
  {
    name: "Unlock Dilation",
    displayName: "시간 팽창 해금하기",
    inputs: [
      ["treeStudies", "tree"],
      ["treeNowait", "nowait"],
      ["finalEP", "decimal"],
      ["autoEterMode", "mode"],
      ["autoEterValue", "decimal"]
    ]
  }
];

const config = loadTemplateConfig();
assert.deepStrictEqual(Array.from(config.paramTypes, param => param.name),
  ["tree", "integer", "decimal", "boolean", "nowait", "mode"],
  "template parameter type keys are internal identifiers and must remain stable");

const booleanType = config.paramTypes.find(param => param.name === "boolean");
const nowaitType = config.paramTypes.find(param => param.name === "nowait");
const modeType = config.paramTypes.find(param => param.name === "mode");
assert.deepStrictEqual(Array.from(booleanType.boolDisplay), ["예", "아니요"]);
assert.deepStrictEqual(Array.from(nowaitType.boolDisplay), ["계속 진행", "연구를 계속 구매"]);
assert.deepStrictEqual(Array.from(modeType.boolDisplay), ["최고 기록의 X배", "마지막 실행 후 경과 시간(초)"]);
assert.equal(modeType.map(true), "mult", "localized mode labels must still map to the mult grammar token");
assert.equal(modeType.map(false), "time", "localized mode labels must still map to the time grammar token");

const actualScripts = Array.from(config.scripts, script => ({
  name: script.name,
  displayName: script.displayName,
  inputs: Array.from(script.inputs, input => [input.name, input.type])
}));
assert.deepStrictEqual(actualScripts, expectedScripts,
  "localized template labels must not change dispatch names or input schemas");

const ScriptTemplate = loadTemplateRuntime();
const formatter = { format: value => String(value) };
assert.equal(ScriptTemplate.prototype.parseAutobuyerProp.call(formatter, "mult", 7), "7 x highest");
assert.equal(ScriptTemplate.prototype.parseAutobuyerProp.call(formatter, "time", 3), "3 seconds");

const decimal = value => new TestDecimal(value);
const treeParams = treeNowait => ({
  treePreset: null,
  treeStudies: "231",
  treeNowait,
});
const generationCases = [
  {
    name: "Climb EP",
    params: {
      ...treeParams(false),
      finalEP: decimal(10),
      autoInfMode: "mult",
      autoInfValue: decimal(2),
      autoEterMode: "time",
      autoEterValue: decimal(3),
    },
    requiredLines: [
      "auto infinity 2.00 x highest",
      "auto eternity 3.00 seconds",
      "while ep < 10.00 {",
      " studies purchase 231",
      " studies respec",
      " wait eternity",
      "}",
    ]
  },
  {
    name: "Grind Eternities",
    params: {
      ...treeParams(false),
      crunchesPerEternity: 2,
      eternities: decimal(5),
    },
    requiredLines: [
      "studies purchase 231",
      "auto eternity 0 ep",
      /^auto infinity \S+ x highest$/u,
      "wait eternities > 5.00",
      "auto eternity off",
    ]
  },
  {
    name: "Grind Infinities",
    params: {
      ...treeParams(false),
      infinities: decimal(8),
      isBanked: false,
    },
    requiredLines: [
      "studies purchase 231",
      "auto eternity off",
      "auto infinity 5s",
      "wait infinities > 8.00",
    ]
  },
  {
    name: "Complete Eternity Challenge",
    params: {
      ...treeParams(false),
      ec: 1,
      completions: 2,
      autoInfMode: "mult",
      autoInfValue: decimal(2),
    },
    requiredLines: [
      "eternity respec",
      "studies purchase 231",
      "unlock ec 1",
      "auto infinity 2.00 x highest",
      "auto eternity off",
      "start ec 1",
      "wait pending completions >= 2",
      "eternity",
    ]
  },
  {
    name: "Unlock Dilation",
    params: {
      ...treeParams(false),
      finalEP: decimal(10),
      autoEterMode: "time",
      autoEterValue: decimal(3),
    },
    requiredLines: [
      "auto infinity off",
      "auto eternity 3.00 seconds",
      "while total tt < 5.00e3 {",
      " studies purchase 231",
      " studies respec",
      " wait eternity",
      "}",
      "unlock dilation",
    ]
  }
];

for (const { name, params, requiredLines } of generationCases) {
  const script = new ScriptTemplate(params, name).script;
  const lines = script.split("\n");
  assert(lines.length > 2, `${name} must generate a non-empty Automator script`);
  for (const required of requiredLines) {
    if (typeof required === "string") {
      assert(lines.includes(required), `${name} must preserve Automator command: ${required}`);
    } else {
      assert(lines.some(line => required.test(line)), `${name} must preserve Automator command matching ${required}`);
    }
  }
  for (const line of lines) {
    if (line.startsWith("//") || line.startsWith("notify ")) continue;
    assert(!/[가-힣]/u.test(line), `${name} generated a localized, unparseable command: ${line}`);
  }
}

const nowaitScript = new ScriptTemplate({
  ...generationCases[0].params,
  treeNowait: true,
}, "Climb EP").script;
assert(nowaitScript.split("\n").includes(" studies nowait purchase 231"),
  "the localized nowait label must still emit the nowait grammar token");

const modalSource = fs.readFileSync(path.join(root, "src", "components", "modals", "AutomatorScriptTemplate.vue"),
  "utf8");
assert.match(modalSource, /new ScriptTemplate\(this\.templateProps, this\.name\)/u,
  "the template modal must pass the internal dispatch name to ScriptTemplate");
assert.doesNotMatch(modalSource, /new ScriptTemplate\(this\.templateProps, this\.displayName\)/u,
  "the localized display name must never be passed as a runtime dispatch key");
assert.throws(() => new ScriptTemplate({}, "영원 포인트 불리기"), /Unrecognized template name/u,
  "localized display names must never become runtime dispatch keys");

process.stdout.write([
  "automator template localization regressions passed",
  `(${generationCases.length} generated scripts)\n`
].join(" "));
