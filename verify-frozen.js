#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const checks = [];

function pass(name) {
  checks.push({ name, ok: true });
}

function fail(name, message) {
  checks.push({ name, ok: false, message });
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function json(relativePath) {
  return JSON.parse(read(relativePath));
}

function checkRequiredFiles() {
  [
    "AGENTS.md",
    "CLAUDE.md",
    "package.json",
    "verify-frozen.js",
    ".codex/config.toml",
    ".codex/hooks.json",
    "plugins/v-pl-codex/.codex-plugin/plugin.json",
    "docs/agent/README.md",
    "docs/agent/skill-map.md",
    "docs/agent/video-platform-requirements.md",
  ].forEach((file) => {
    exists(file) ? pass(`required file: ${file}`) : fail(`required file: ${file}`, "missing");
  });
}

function checkPackageScripts() {
  const pkg = json("package.json");
  ["verify", "codex:verify-plugin", "sync:harness", "check:parity", "codex:ship"].forEach(
    (scriptName) => {
      pkg.scripts && pkg.scripts[scriptName]
        ? pass(`package script: ${scriptName}`)
        : fail(`package script: ${scriptName}`, "missing");
    },
  );
}

function checkClaudeEntrypoint() {
  const claude = read("CLAUDE.md");
  claude.includes("@AGENTS.md")
    ? pass("CLAUDE imports AGENTS")
    : fail("CLAUDE imports AGENTS", "CLAUDE.md must import @AGENTS.md");
}

function checkPluginManifest() {
  const manifest = json("plugins/v-pl-codex/.codex-plugin/plugin.json");
  manifest.name === "v-pl-codex"
    ? pass("plugin manifest name")
    : fail("plugin manifest name", "expected v-pl-codex");
  manifest.skills === "./skills/"
    ? pass("plugin skills path")
    : fail("plugin skills path", "expected ./skills/");
}

function listSkillFiles(base) {
  if (!fs.existsSync(base)) return [];
  return fs
    .readdirSync(base, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(base, entry.name, "SKILL.md"))
    .filter((file) => fs.existsSync(file));
}

function checkSkills() {
  const pluginSkills = listSkillFiles(path.join(root, "plugins/v-pl-codex/skills"));
  const localSkills = listSkillFiles(path.join(root, ".agents/skills"));
  pluginSkills.length >= 8
    ? pass("plugin skill count")
    : fail("plugin skill count", "expected at least 8 plugin skills");
  localSkills.length >= 3
    ? pass("local skill count")
    : fail("local skill count", "expected at least 3 local skills");

  [...pluginSkills, ...localSkills].forEach((file) => {
    const content = fs.readFileSync(file, "utf8");
    const relative = path.relative(root, file).replaceAll(path.sep, "/");
    const nameMatch = content.match(/^name:\s*(.+)$/m);
    const descMatch = content.match(/^description:\s*["']?(.+?)["']?$/m);
    nameMatch && nameMatch[1].startsWith("v-pl-")
      ? pass(`skill name: ${relative}`)
      : fail(`skill name: ${relative}`, "missing v-pl-* frontmatter name");
    descMatch ? pass(`skill description: ${relative}`) : fail(`skill description: ${relative}`, "missing description");
  });
}

function checkDocsReferenceCoreDomains() {
  const requirements = read("docs/agent/video-platform-requirements.md").toLowerCase();
  ["rtsp", "map", "telemetry", "orthophoto", "geoserver", "metashape"].forEach((term) => {
    requirements.includes(term)
      ? pass(`requirements term: ${term}`)
      : fail(`requirements term: ${term}`, "missing from requirements doc");
  });
}

function main() {
  checkRequiredFiles();
  checkPackageScripts();
  checkClaudeEntrypoint();
  checkPluginManifest();
  checkSkills();
  checkDocsReferenceCoreDomains();

  const failed = checks.filter((check) => !check.ok);
  checks.forEach((check) => {
    console.log(`${check.ok ? "PASS" : "FAIL"} ${check.name}${check.message ? ` - ${check.message}` : ""}`);
  });
  console.log(`${checks.length - failed.length} PASS, ${failed.length} FAIL`);
  process.exit(failed.length ? 1 : 0);
}

main();

