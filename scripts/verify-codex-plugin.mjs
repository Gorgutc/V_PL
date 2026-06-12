#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const checks = [];

function record(ok, name, message = "") {
  checks.push({ ok, name, message });
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function readJson(relativePath) {
  return JSON.parse(read(relativePath));
}

function listSkillFiles(baseRelative) {
  const base = path.join(root, baseRelative);
  if (!fs.existsSync(base)) return [];
  return fs
    .readdirSync(base, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(base, entry.name, "SKILL.md"))
    .filter((file) => fs.existsSync(file));
}

function verifyManifest() {
  const manifestPath = "plugins/v-pl-codex/.codex-plugin/plugin.json";
  record(exists(manifestPath), "plugin manifest exists");
  const manifest = readJson(manifestPath);
  record(manifest.name === "v-pl-codex", "plugin manifest name");
  record(manifest.skills === "./skills/", "plugin manifest skills path");
  record(Boolean(manifest.interface?.defaultPrompt?.length), "plugin default prompts");
}

function verifySkills() {
  const files = [
    ...listSkillFiles("plugins/v-pl-codex/skills"),
    ...listSkillFiles(".agents/skills"),
  ];
  record(files.length >= 12, "combined skill count", `found ${files.length}`);
  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    const relative = path.relative(root, file).replaceAll(path.sep, "/");
    record(/^---\n[\s\S]+?\n---/m.test(text), `frontmatter: ${relative}`);
    record(/^name:\s*v-pl-[\w-]+$/m.test(text), `skill name: ${relative}`);
    record(/^description:\s*.+$/m.test(text), `skill description: ${relative}`);
  }
}

function verifyEntrypoints() {
  record(read("CLAUDE.md").includes("@AGENTS.md"), "CLAUDE imports AGENTS");
  record(read("AGENTS.md").includes("plugins/v-pl-codex/skills/"), "AGENTS references canonical skills");
  record(read("docs/agent/skill-map.md").includes("npm run sync:harness"), "skill map explains sync");
}

function verify() {
  verifyManifest();
  verifySkills();
  verifyEntrypoints();

  const failed = checks.filter((check) => !check.ok);
  for (const check of checks) {
    console.log(`${check.ok ? "PASS" : "FAIL"} ${check.name}${check.message ? ` - ${check.message}` : ""}`);
  }
  console.log(`${checks.length - failed.length} PASS, ${failed.length} FAIL`);
  process.exit(failed.length ? 1 : 0);
}

verify();

