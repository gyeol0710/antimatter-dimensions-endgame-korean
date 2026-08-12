const assert = require("assert");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

const alchemyConfig = read("src/core/secret-formula/celestials/alchemy.js");
const playerSource = read("src/core/player.js");
for (const [key, canonicalName, displayName] of [
  ["power", "Power", "힘"],
  ["infinity", "Infinity", "무한"],
  ["time", "Time", "시간"],
  ["replication", "Replication", "복제"],
  ["dilation", "Dilation", "팽창"]
]) {
  assert.equal(canonicalName.toLowerCase(), key,
    `${canonicalName} must derive the canonical ${key} refinement key`);
  const resourceBlock = new RegExp(`"${key}": \\{([\\s\\S]*?)\\n  \\}`, "u").exec(alchemyConfig)?.[1];
  assert.ok(resourceBlock, `missing ${key} alchemy resource config`);
  assert.ok(resourceBlock.includes(`name: "${canonicalName}"`),
    `${key} must retain the canonical name used by the refinement save key`);
  assert.ok(resourceBlock.includes(`displayName: "${displayName}"`),
    `${key} must expose its Korean UI label separately`);
  assert.ok(new RegExp(`\\b${key}: 0(?:,|\\r?\\n)`, "u").test(playerSource),
    `${key} must match a canonical highestRefinementValue save key`);
}
const effarigResourceBlock = /"effarig": \{([\s\S]*?)\n[ ]{2}\}/u.exec(alchemyConfig)?.[1];
assert.ok(effarigResourceBlock?.includes('name: "Effarig"'),
  "Effarig must retain its canonical Celestial/save-key name");
assert.ok(/\beffarig: 0(?:,|\r?\n)/u.test(playerSource),
  "Effarig must match its canonical highestRefinementValue save key");

const alchemyRuntime = read("src/core/celestials/ra/alchemy.js");
assert.ok(alchemyRuntime.includes("this._name = config.name.toLowerCase();"),
  "the inherited alchemy save-key contract must remain explicit and covered");
assert.ok(alchemyRuntime.includes("return this.config.displayName ?? this.name;"),
  "alchemy resources must provide a display-only name fallback");

for (const [relativePath, requiredSnippet, forbiddenSnippet] of [
  [
    "src/components/tabs/alchemy/AlchemyResourceInfo.vue",
    "resource.displayName",
    "resource.name"
  ],
  [
    "src/components/modals/glyph-management/RefineGlyphModal.vue",
    "this.resource.displayName",
    "this.resource.name"
  ],
  [
    "src/core/glyphs/glyph-purge-handler.js",
    "resourceName: resource.displayName",
    "resourceName: resource.name"
  ],
  [
    "src/components/tabs/celestial-ra/RaPetLevelBar.vue",
    "effarigAlchemyResource.displayName",
    "effarigAlchemyResource.name"
  ]
]) {
  const source = read(relativePath);
  assert.ok(source.includes(requiredSnippet), `${relativePath} must render the display-only alchemy name`);
  assert.ok(!source.includes(forbiddenSnippet), `${relativePath} must not expose the internal alchemy name`);
}

const automatorBackend = read("src/core/automator/automator-backend.js");
assert.equal((automatorBackend.match(/_currentSubtab[.]key !== "automator"/gu) ?? []).length, 2,
  "Automator undo and redo must identify the subtab by stable key");
assert.ok(!/_currentSubtab[.]name !== "Automator"/u.test(automatorBackend),
  "Automator undo and redo must not depend on a translatable name");

const backgroundAnimations = read("src/components/BackgroundAnimations.vue");
for (const [animation, key] of [
  ["animateHadrons", "collider"],
  ["animateStars", "ethereal"],
  ["animateTachyons", "dilation"]
]) {
  const assignment = new RegExp(`this[.]${animation} =[^;]+[.]key === "${key}";`, "u");
  assert.match(backgroundAnimations, assignment,
    `${animation} routing must use the stable ${key} subtab key`);
}
assert.ok(!/Tabs[.]current\[this[.]\$viewModel[.]subtab\][.]name ===/u.test(backgroundAnimations),
  "background animation routing must not depend on translated tab names");

const classicSubtabButton = read("src/components/ui-modes/classic/ClassicSubtabButton.vue");
const classicSubtabBar = read("src/components/ui-modes/classic/ClassicSubtabBar.vue");
assert.ok(classicSubtabButton.includes("parentKey"), "Classic subtabs must receive the parent tab key");
assert.ok(!classicSubtabButton.includes("parentName"), "Classic subtab styling must not use a translated parent name");
assert.ok(classicSubtabBar.includes(':parent-key="tab.key"'),
  "Classic subtab bar must pass the stable parent tab key");
for (const [cssSuffix, tabKey] of [
  ["infinity", "infinity"],
  ["eternity", "eternity"],
  ["reality", "reality"],
  ["celestial", "celestials"],
  ["endgame", "endgame"],
  ["cd-expansion", "cdexpansion"],
  ["divinity", "divinity"],
  ["universes", "universes"]
]) {
  assert.ok(classicSubtabButton.includes(`"o-tab-btn--${cssSuffix}": this.parentKey === "${tabKey}"`),
    `Classic subtab ${cssSuffix} styling must map to the stable ${tabKey} key`);
}

const perksTab = read("src/components/tabs/perks/PerksTab.vue");
assert.ok(perksTab.includes("if (perk.id === GameDatabase.reality.perks.firstPerk.id) return 35 + mod;"),
  "the first Perk size rule must use its stable ID");
assert.ok(!perksTab.includes('perk._config.label === "START"'),
  "the first Perk size rule must not depend on its translated label");

const news = read("src/core/secret-formula/news.js");
const newsTicker = read("src/components/ui-modes/NewsTicker.vue");
const reversibleNewsIdIndex = news.indexOf('id: "ae570"');
assert.notEqual(reversibleNewsIdIndex, -1, "the reversible ae570 news entry must exist");
const reversibleNewsStart = news.lastIndexOf("(function() {", reversibleNewsIdIndex);
const reversibleNewsEnd = news.indexOf("}()),", reversibleNewsIdIndex);
assert.ok(reversibleNewsStart !== -1 && reversibleNewsEnd !== -1,
  "the reversible ae570 news closure must remain structurally identifiable");
const reversibleNews = news.slice(reversibleNewsStart, reversibleNewsEnd);
assert.ok(reversibleNews.includes("get isReversed()"),
  "the reversible ae570 news entry must expose semantic state");
assert.ok(/get isReversed\(\) \{\s*return wasClicked;\s*\}/u.test(reversibleNews),
  "the reversible ae570 state must reflect its click/reset closure state");
assert.equal((newsTicker.match(/currentNews[?][.]isReversed/gu) ?? []).length, 2,
  "the news ticker must use semantic reverse state for both animation phases");
assert.ok(!newsTicker.includes('currentNews?.text === "weeeeeeeeeeee"'),
  "the news ticker must not compare a translatable news payload");

const catchupResources = read("src/core/secret-formula/catchup-resources.js");
const catchupEntry = read("src/components/modals/catchup/CatchupEntry.vue");
const h2p = read("src/core/secret-formula/h2p.js");
const h2pKeys = [...h2p.matchAll(/^[ ]{6}key: "([a-z0-9]+(?:-[a-z0-9]+)*)",$/gmu)]
  .map(match => match[1]);
const catchupH2pKeys = [...catchupResources.matchAll(/^[ ]{4}openH2pEntry: "([^"]+)",$/gmu)]
  .map(match => match[1]);
const catchupResourceBlocks = catchupResources
  .split(/\n[ ]{2}\},\n[ ]{2}\{/u)
  .map(block => block.replace(/^\s*\{/u, "").replace(/\}\s*;?\s*$/u, ""));

assert.ok(catchupH2pKeys.length > 0, "catch-up resources must declare direct H2P links");
for (const [id, expectedKey] of [
  [1, "tickspeed"],
  [6, "infinity"],
  [7, "normal-challenges"],
  [13, "eternity"],
  [19, "time-dilation"],
  [21, "reality"],
  [24, "automator-overview"],
  [28, "nameless-ones"],
  [29, "nameless-ones"],
  [33, "ra"],
  [34, "ra"],
  [36, "ra"],
  [37, "ra"],
  [41, "laitela"],
  [42, "laitela"],
  [45, "pelle"],
  [46, "pelle-strikes"]
]) {
  const matchingBlocks = catchupResourceBlocks.filter(block => new RegExp(`^    id: ${id},$`, "mu").test(block));
  assert.equal(matchingBlocks.length, 1, `catch-up resource ${id} must be uniquely identifiable`);
  assert.match(matchingBlocks[0], new RegExp(`^    openH2pEntry: "${expectedKey}",$`, "mu"),
    `catch-up resource ${id} must preserve the intended ${expectedKey} H2P destination`);
}
for (const key of catchupH2pKeys) {
  assert.match(key, /^[a-z0-9]+(?:-[a-z0-9]+)*$/u,
    `catch-up H2P link ${key} must be a stable semantic key`);
  assert.equal(h2pKeys.filter(h2pKey => h2pKey === key).length, 1,
    `catch-up H2P link ${key} must resolve to exactly one H2P entry`);
}
assert.ok(catchupEntry.includes("tab.key === this.config.openH2pEntry"),
  "dedicated catch-up H2P links must resolve by stable key");
assert.ok(!catchupEntry.includes("tab.alias === (this.hasDedicatedH2p"),
  "dedicated catch-up H2P links must not resolve by a translated alias");

const pastRuns = read("src/components/tabs/past-prestige-runs/PastPrestigeRunsContainer.vue");
assert.ok(pastRuns.includes("singularKey()"),
  "past prestige run state must expose a stable singular key");
assert.equal((pastRuns.match(/player[.]shownRuns\[this[.]singularKey\]/gu) ?? []).length, 3,
  "past prestige run visibility must read and write the stable layer key");
assert.ok(!pastRuns.includes("player.shownRuns[this.singular]"),
  "past prestige run visibility must not use its translated singular label as a save key");

const migrationsSource = read("src/core/storage/migrations.js");
const legacyAchievementMapSource = /const LEGACY_ACHIEVEMENT_NAME_IDS = Object[.]freeze\(\{([\s\S]*?)\n\}\);/u
  .exec(migrationsSource)?.[1];
assert.ok(legacyAchievementMapSource, "legacy achievement names must be isolated in a frozen compatibility map");
const legacyAchievementEntries = [...legacyAchievementMapSource.matchAll(
  /^\s*"((?:\\.|[^"\\])*)":\s*(\d+),?$/gmu
)].map(match => [JSON.parse(`"${match[1]}"`), Number(match[2])]);
const legacyAchievementMap = Object.fromEntries(legacyAchievementEntries);
assert.equal(legacyAchievementEntries.length, 184,
  "legacy achievement compatibility must match all EndGame reference display names");
assert.equal(Object.keys(legacyAchievementMap).length, 184,
  "legacy achievement compatibility names must be unique");
const legacyAchievementDigest = crypto.createHash("sha256")
  .update(JSON.stringify(legacyAchievementEntries.toSorted(([left], [right]) => left.localeCompare(right, "en"))))
  .digest("hex");
assert.equal(legacyAchievementDigest, "7b695a3c207885669f582ed4f1633346212a1bda5dc95a5caf8e4da1014ea80a",
  "legacy achievement compatibility must exactly match the audited EndGame HEAD name/ID pairs");
for (const [name, id] of [
  ["You gotta start somewhere", 11],
  ["FAKE NEWS!", 22],
  ["How the antitables have turned..", 43],
  ["Zero Deaths", 64],
  ["1 Million is a lot", 77],
  ["8 nobody got time for that", 101],
  ["Eternities are the new infinity", 113],
  ["Costco sells Dimboosts now!", 117],
  ["Long lasting relationship", 124],
  ["Tätä saavutusta ei ole olemassa II", 103],
  ["Antimatter Dimensions Eternal", 181],
  ["An unhealthy obsession", 186],
  ["Limits of Reality", 238]
]) {
  assert.equal(legacyAchievementMap[name], id,
    `legacy achievement ${name} must retain the EndGame reference pre-bit ID ${id}`);
}
assert.equal(legacyAchievementMap["Minute of infinity"], undefined,
  "localization compatibility must not broaden support beyond EndGame HEAD");
assert.ok(!migrationsSource.includes("GameDatabase.achievements.normal.find(a => a.name === oldId)"),
  "legacy migration must not compare saved keys with translated display names");

const convertAchievementStartMarker = "  convertAchivementsToNumbers(player) {";
const convertAchievementEndMarker = "\n  },\n\n  adjustGameCreatedTime";
const normalizedMigrationsSource = migrationsSource.replaceAll("\r\n", "\n");
const convertAchievementStart = normalizedMigrationsSource.indexOf(convertAchievementStartMarker);
const convertAchievementEnd = normalizedMigrationsSource.indexOf(
  convertAchievementEndMarker,
  convertAchievementStart
);
assert.ok(convertAchievementStart !== -1 && convertAchievementEnd !== -1,
  "legacy achievement migration body must remain testable");
const convertAchievementBody = normalizedMigrationsSource.slice(
  convertAchievementStart + convertAchievementStartMarker.length,
  convertAchievementEnd
);
// The source function is executed in isolation to exercise the real migration implementation.
// eslint-disable-next-line no-new-func
const convertAchievementsToNumbers = Function(
  "LEGACY_ACHIEVEMENT_NAME_IDS",
  "GameDatabase",
  `return player => {${convertAchievementBody}\n};`
)(legacyAchievementMap, {
  achievements: {
    // These intentionally do not match the English save keys, proving display-name independence.
    normal: [{ id: 11, name: "시작해봅시다!" }, { id: 22, name: "가짜 뉴스!" }],
    secret: [{ id: 11, name: "비밀" }]
  }
});

function convertedAchievements(oldAchievements) {
  const player = { achievements: oldAchievements, secretAchievements: new Set([999]) };
  convertAchievementsToNumbers(player);
  return player;
}

let converted = convertedAchievements(["You gotta start somewhere", "FAKE NEWS!", "Zero Deaths"]);
assert.deepStrictEqual([...converted.achievements], [11, 22, 64],
  "EndGame English name saves must retain their pre-bit IDs with Korean display names loaded");
assert.deepStrictEqual([...converted.secretAchievements], [],
  "name-format saves must still initialize the secret achievement set");

converted = convertedAchievements(["r22", "s11"]);
assert.deepStrictEqual([...converted.achievements], [22], "rNN legacy fallback must remain unchanged");
assert.deepStrictEqual([...converted.secretAchievements], [11], "sNN legacy fallback must remain unchanged");

assert.throws(() => convertedAchievements(["시작해봅시다!"]), /Could not parse achievement id/u,
  "current Korean display names must never become persisted compatibility keys");

console.log("localization semantic-key regressions passed");
