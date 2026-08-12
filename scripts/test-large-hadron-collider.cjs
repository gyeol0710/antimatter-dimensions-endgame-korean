const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");

function loadAcceleratorConfig() {
  const file = path.join(root, "src", "core", "secret-formula", "endgame", "accelerators.js");
  const source = fs.readFileSync(file, "utf8");
  const executable = source.replace("export const accelerators =", "globalThis.accelerators =");
  assert.notEqual(executable, source, "accelerator config must be loadable by the regression harness");
  const context = {};
  vm.runInNewContext(executable, context);
  return context.accelerators;
}

function loadAcceleratorRuntime(pelle, player) {
  const file = path.join(root, "src", "core", "large-hadron-collider.js");
  const source = fs.readFileSync(file, "utf8");
  const start = source.indexOf("class AcceleratorMilestoneState");
  const end = source.indexOf("\nexport const Accelerators =");
  assert.ok(start >= 0 && end > start, "accelerator runtime classes must be loadable by the regression harness");
  const executable = `${source.slice(start, end)}\nglobalThis.AcceleratorState = AcceleratorState;`;

  class GameMechanicState {
    constructor(config) {
      this.config = config;
    }
  }

  const context = {
    Accelerators: { all: [] },
    GameMechanicState,
    LHC: { acceleratorSpeed: 0.25 },
    Pelle: pelle,
    player
  };
  vm.runInNewContext(executable, context);
  return context.AcceleratorState;
}

const config = loadAcceleratorConfig();
assert.equal(config.potency.key, "potency", "Potency must keep its persisted internal key");

const pelle = { isDoomed: true };
const player = {
  endgame: {
    largeHadronCollider: {
      accelerators: {
        potency: { fill: 0, active: true },
        emptiness: { fill: 0, active: true }
      }
    }
  }
};
const AcceleratorState = loadAcceleratorRuntime(pelle, player);
const fillCurrency = { value: { lte: () => false } };

function testConfig(key, name) {
  return {
    key,
    name,
    id: key === "potency" ? 1 : 2,
    milestones: [],
    currency: () => fillCurrency,
    percentage: () => 1,
    percentageToFill: value => value,
    effects: {
      alpha: value => value,
      beta: value => value,
      gamma: value => value
    }
  };
}

const potency = new AcceleratorState(testConfig("potency", "번역 가능한 표시명"));
potency.fill(1000);
assert.equal(player.endgame.largeHadronCollider.accelerators.potency.fill, 0,
  "Doomed Potency must be blocked by its internal key regardless of its translated name");

const emptiness = new AcceleratorState(testConfig("emptiness", "Potency Accelerator"));
emptiness.fill(1000);
assert.equal(player.endgame.largeHadronCollider.accelerators.emptiness.fill, 0.25,
  "a non-Potency accelerator must not be blocked by a matching display name");

pelle.isDoomed = false;
potency.fill(1000);
assert.equal(player.endgame.largeHadronCollider.accelerators.potency.fill, 0.25,
  "Potency must continue filling normally outside Doom");

process.stdout.write("large hadron collider Potency identity regressions passed\n");
