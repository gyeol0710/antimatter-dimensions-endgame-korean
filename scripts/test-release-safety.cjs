const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const packageJson = JSON.parse(read("package.json"));
assert(!packageJson.dependencies["vue-gtag"], "vue-gtag must not be included in the public build");
assert(!read("package-lock.json").includes("vue-gtag"), "vue-gtag must not remain in package-lock.json");

const uiSource = read("src/core/ui.js");
assert(!/VueGtag|vue-gtag|UA-\d+/u.test(uiSource), "public builds must not inherit upstream analytics");

const aboutPage = read("public/about.html");
assert(!/paypal|patreon/iu.test(aboutPage), "the public about page must not contain inherited donation forms");

const publicCredits = [
  read("README.md"),
  read("ATTRIBUTION.md"),
  aboutPage,
  read("src/components/modals/InformationModal.vue"),
  read("src/core/secret-formula/credits.js")
];
assert(publicCredits.every(text => text.includes("SameMa")), "every public credit surface must identify SameMa");

const postBuild = read("build/post-build.js");
assert(postBuild.includes("LICENSE.txt"), "the release build must include the MIT license");
assert(postBuild.includes("ATTRIBUTION.md"), "the release build must include attribution notices");

const preBuild = read("build/pre-build.js");
assert(preBuild.includes("--update-supported-browsers"),
  "ordinary release builds must not silently rewrite browser-support logic");

const workflows = fs.readdirSync(path.join(root, ".github/workflows"))
  .filter(name => /\.ya?ml$/u.test(name))
  .map(name => read(path.join(".github/workflows", name)))
  .join("\n");
assert(!workflows.includes("IvarK/AntimatterDimensions"), "workflows must never publish to the upstream repository");
assert(!workflows.includes("GH_PUBLISH_TOKEN"), "Pages deployment must not use the inherited publish token");
assert(workflows.includes("fetch-depth: 0"), "localization checks require complete Git history");
assert(/LOCALIZATION_AUDIT_BASE: [0-9a-f]{40}/u.test(workflows),
  "Pages deployment must identify a fixed, fully-audited localization baseline");
assert(workflows.includes("--base=$LOCALIZATION_AUDIT_BASE"),
  "every deployment must check the full range since the audited baseline");

// eslint-disable-next-line no-console
console.log("Release safety checks passed.");
