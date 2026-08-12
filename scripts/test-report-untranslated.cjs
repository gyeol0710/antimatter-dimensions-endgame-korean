const assert = require("assert");
const childProcess = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const root = path.resolve(__dirname, "..");
const fixtureDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "adeg-report-untranslated-"));
const fixtureFile = path.join(fixtureDirectory, "visible-properties.js");

const expectedCandidates = [
  "Visible direct line",
  "I...",
  "I'm...",
  "Visible template line",
  "Visible nested line",
  "Visible nested fallback",
  "Visible returned option",
  "Visible prompt text",
  "Visible true state",
  "Visible false state",
  "Visible scramble start",
  "Visible scramble end"
];

try {
  fs.writeFileSync(fixtureFile, `export const fixture = {
  lines: [
    "Visible direct line",
    "I...",
    "I'm...",
    \`Visible template line\`,
    { text: "Visible nested line", background: "Hidden background identity" },
    { internalKey: "Visible nested fallback", celestialName: "Hidden celestial identity" },
    "I.",
    "%name?",
    "$1"
  ],
  prompt: "Visible prompt text",
  boolDisplay: ["Visible true state", "Visible false state"],
  scrambleText: ["Visible scramble start", "Visible scramble end"],
  internalKey: "Hidden implementation string"
};

export function visibleReturn() {
  return { optionKey: "Visible returned option" };
}
`);

  const output = childProcess.execFileSync(process.execPath, [
    "--preserve-symlinks",
    "--preserve-symlinks-main",
    path.join(__dirname, "report-untranslated.cjs"),
    `--file=${fixtureFile}`,
    "--details"
  ], { cwd: root, encoding: "utf8" });

  for (const candidate of expectedCandidates) {
    assert.ok(
      output.split(/\r?\n/u).some(line => line.endsWith(`] ${candidate}`)),
      `Missing visible candidate: ${candidate}`
    );
  }
  assert.doesNotMatch(output, /Hidden implementation string/u);
  assert.doesNotMatch(output, /Hidden background identity/u);
  assert.doesNotMatch(output, /Hidden celestial identity/u);
  assert.doesNotMatch(output, /\[script\] I\.$/mu);
  assert.doesNotMatch(output, /\[script\] %name\?$/mu);
  assert.doesNotMatch(output, /\[script\] \$1$/mu);
  assert.match(output, /^번역 후보 영어 문자열: 12개$/mu);

  const structureOutput = childProcess.execFileSync(process.execPath, [
    path.join(__dirname, "check-localization-structure.cjs"),
    "--self-test"
  ], { cwd: root, encoding: "utf8" });
  assert.match(structureOutput, /^localization structure regression passed$/mu);
  process.stdout.write("localization reporter and structure regressions passed\n");
} finally {
  fs.rmSync(fixtureDirectory, { recursive: true, force: true });
}
