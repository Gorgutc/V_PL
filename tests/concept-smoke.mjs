#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const indexPath = path.join(root, "index.html");
const html = fs.existsSync(indexPath) ? fs.readFileSync(indexPath, "utf8") : "";
const checks = [];

function record(ok, name, message = "") {
  checks.push({ ok, name, message });
}

function includes(value, name) {
  record(html.includes(value), name, `missing ${value}`);
}

record(Boolean(html), "index.html exists");
includes('data-app="v-pl-video-console"', "app root marker");
includes('data-panel="live-video"', "live video panel");
includes('data-panel="map-route"', "map and route panel");
includes('data-panel="telemetry"', "telemetry panel");
includes('data-panel="archive-search"', "archive search panel");
includes('data-action="replay-last-minute"', "last minute replay action");
includes('data-action="save-snapshot"', "snapshot action");
includes('data-action="toggle-sync"', "sync toggle action");
includes('data-action="download-product-video"', "download action");
includes('data-action="download-selected-clip"', "selected clip download action");
includes('data-action="save-target-label"', "target label action");
includes('id="timelineRange"', "timeline range control");
includes('id="productSelect"', "product filter control");
includes('id="areaSelect"', "area filter control");
includes('id="dateSelect"', "date filter control");
includes('id="sharedClock"', "shared clock display");
includes('id="mapCursor"', "map cursor marker");
includes('id="telemetryBars"', "telemetry bars");
includes('id="annotationLayer"', "annotation layer");
includes('class="lower-row"', "map and snapshots lower row");
includes('class="panel snapshots-panel"', "snapshots panel beside map");
includes("annotation--friendly", "friendly unit annotation");
includes("annotation--direction", "target direction annotation");
includes("Ortho stitching", "orthophoto stitching analytics item");
includes("Geolocation", "geolocation analytics item");
includes('$("#mapCanvas").addEventListener("click"', "trajectory seek on map click");
includes('aria-label="Позиция воспроизведения"', "timeline range accessible name");

const failed = checks.filter((check) => !check.ok);
for (const check of checks) {
  console.log(`${check.ok ? "PASS" : "FAIL"} ${check.name}${check.ok ? "" : ` - ${check.message}`}`);
}
console.log(`${checks.length - failed.length} PASS, ${failed.length} FAIL`);
process.exit(failed.length ? 1 : 0);
