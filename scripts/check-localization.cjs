const path = require("path");
const { spawnSync } = require("child_process");

const forwardedArguments = process.argv.slice(2);
const scripts = forwardedArguments.includes("--self-test")
  ? ["check-localization-structure.cjs"]
  : ["check-korean.cjs", "check-localization-structure.cjs"];

for (const script of scripts) {
  const result = spawnSync(process.execPath, [path.join(__dirname, script), ...forwardedArguments], {
    cwd: path.resolve(__dirname, ".."),
    stdio: "inherit"
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
