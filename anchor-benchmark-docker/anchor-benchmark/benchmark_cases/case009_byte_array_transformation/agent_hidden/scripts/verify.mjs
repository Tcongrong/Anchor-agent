import http from "node:http";
import { createReadStream } from "node:fs";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const bundleName = "calendar.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const captureHost = "127.0.0.1_4009";
const capturedBundlePath = path.join(visibleRoot, "captures", "devtools-source-dump", captureHost, "assets", bundleName);
const caseId = "case009_byte_array_transformation";
const targetAction = "table.segment.commit";

const checks = {
  page_loaded: false, controls_exist: false, button_action: false, standard_interaction: false,
  console_log_found: false, target_field_exists: false, format_ok: false, stable_output: false,
  scope_sensitive: false, ledger_sensitive: false, floor_sensitive: false, custodian_sensitive: false,
  parity_sensitive: false, diversion_debug_seen: false, diversions_not_target: false,
  blocked_bundle_stops_output: false, single_bundle: false, no_sourcemap: false,
  no_worker: false, no_sharedworker: false, no_serviceworker: false, no_postmessage: false,
  no_messagechannel: false, no_broadcastchannel: false, no_iframe: false, no_eval: false,
  no_new_function: false, no_wasm: false, no_remote_loading: false, no_anti_debug: false,
  line_count_ok: false, decoy_file_count: false, vendor_file_count: false, task_json_clean: false,
  hidden_files_present: false, hidden_files_not_dist: false, captures_present: false,
  build_meta_complete: false, answer_source_present: false, captured_bundle_matches_dist: false,
};

const requirements = new Map([
  ["src/host/index.html", 160], ["src/host/styles.css", 300], ["src/host/favicon.svg", 20],
  ["src/z0/k7/q3/t9.js", 360],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 120);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 180);

function linesOf(text) { return text.split(/\r?\n/).length; }

async function readFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const resolved = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await readFiles(resolved));
    else out.push(resolved);
  }
  return out;
}

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(hiddenRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
}

async function lineChecks() {
  for (const [relative, required] of requirements) {
    const count = linesOf(await readFile(path.join(hiddenRoot, relative), "utf8"));
    if (count < required) return false;
  }
  const all = await readFiles(path.join(hiddenRoot, "src"));
  let src = 0; let z0 = 0;
  for (const file of all.filter((item) => /\.(js|html|css|svg)$/.test(item))) {
    const relative = path.relative(hiddenRoot, file).replaceAll("\\", "/");
    const count = linesOf(await readFile(file, "utf8"));
    src += count;
    if (relative.startsWith("src/z0/")) z0 += count;
  }
  return src >= 14000 && z0 >= 12000;
}

function createServer() {
  const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml; charset=utf-8" };
  const server = http.createServer(async (request, response) => {
    const url = new URL(request.url || "/", "http://127.0.0.1");
    const clean = decodeURIComponent(url.pathname).replace(/^\/+/, "");
    const resolved = path.resolve(distRoot, clean || "index.html");
    if (!resolved.startsWith(distRoot)) { response.writeHead(403); response.end("Forbidden"); return; }
    try {
      const info = await stat(resolved);
      const filePath = info.isDirectory() ? path.join(resolved, "index.html") : resolved;
      response.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream", "Cache-Control": "no-store" });
      createReadStream(filePath).pipe(response);
    } catch { response.writeHead(404); response.end("Not found"); }
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve({ server, baseUrl: "http://127.0.0.1:" + server.address().port + "/" })));
}

async function launchBrowser() {
  try { return await chromium.launch({ headless: true }); }
  catch {
    const candidates = process.platform === "win32"
      ? ["C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"]
      : ["/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser"];
    for (const executablePath of candidates) {
      try { await stat(executablePath); return await chromium.launch({ headless: true, executablePath }); } catch {}
    }
    throw new Error("No Chromium browser was found.");
  }
}

function targetPromise(page, timeout = 5000) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), timeout);
    page.on("console", async (message) => {
      if (message.type() !== "log") return;
      const arg = message.args()[0];
      if (!arg) return;
      try {
        const value = await arg.jsonValue();
        if (value && typeof value === "object" && value.action === targetAction && typeof value.typed_array_payload === "string") {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(context, baseUrl, scopeBand, ledger, floor, custodian, parity = true) {
  const page = await context.newPage();
  const misc = [];
  page.on("console", async (message) => {
    if (!["debug", "info", "log"].includes(message.type())) return;
    try {
      const value = await message.args()[0]?.jsonValue();
      if (value && !(value.action === targetAction && value.typed_array_payload)) misc.push(value);
    } catch {}
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  checks.page_loaded = true;
  checks.controls_exist = await page.locator("#bootLaneButton").count() === 1
    && await page.locator("#scopeBand").count() === 1
    && await page.locator("#ledgerSlice").count() === 1
    && await page.locator("#floorUnits").count() === 1
    && await page.locator("#custodianTag").count() === 1
    && await page.locator("#parityLock").count() === 1
    && await page.locator("#bindScopeButton").count() === 1
    && await page.locator("#emitBufferButton").count() === 1;
  checks.button_action = await page.locator("#emitBufferButton").getAttribute("data-stage") === "emit";
  await page.click("#bootLaneButton");
  await page.selectOption("#scopeBand", scopeBand);
  await page.selectOption("#ledgerSlice", ledger);
  await page.fill("#floorUnits", floor);
  await page.fill("#custodianTag", custodian);
  await page.setChecked("#parityLock", parity);
  await page.click("#bindScopeButton");
  const got = targetPromise(page);
  await page.click("#emitBufferButton");
  const output = await got;
  await page.close();
  return { output, misc };
}

async function diversions(context, baseUrl) {
  const page = await context.newPage();
  const values = [];
  page.on("console", async (message) => {
    try { values.push(await message.args()[0]?.jsonValue()); } catch {}
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  for (const selector of ['[data-lane-noise="lane.export.preview"]', '[data-lane-noise="lane.page.shift"]', '[data-lane-noise="lane.columns.freeze"]', '[data-lane-noise="lane.badge.resync"]', '[data-lane-noise="lane.view.anchor"]', '[data-lane-noise="lane.queue.flush"]']) {
    await page.click(selector).catch(() => null);
    await page.waitForTimeout(40);
  }
  await page.close();
  return values;
}

async function blocked(context, baseUrl) {
  const page = await context.newPage();
  await page.route("**/assets/" + bundleName, (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.click("#bootLaneButton").catch(() => null);
  await page.selectOption("#scopeBand", "wide").catch(() => null);
  await page.selectOption("#ledgerSlice", "open").catch(() => null);
  await page.fill("#floorUnits", "250").catch(() => null);
  await page.fill("#custodianTag", "maria").catch(() => null);
  await page.setChecked("#parityLock", true).catch(() => null);
  await page.click("#bindScopeButton").catch(() => null);
  const got = targetPromise(page, 1000);
  await page.click("#emitBufferButton").catch(() => null);
  const output = await got;
  await page.close();
  return output === null;
}

function forbiddenStatus(code) {
  return {
    no_worker: !/new\s+Worker\b/.test(code), no_sharedworker: !/\bSharedWorker\b/.test(code),
    no_serviceworker: !/serviceWorker\s*\./.test(code), no_postmessage: !/\bpostMessage\s*\(/.test(code),
    no_messagechannel: !/\bMessageChannel\b/.test(code), no_broadcastchannel: !/\bBroadcastChannel\b/.test(code),
    no_iframe: !/<iframe\b|createElement\(["']iframe/.test(code), no_eval: !/\beval\s*\(/.test(code),
    no_new_function: !/new\s+Function\b/.test(code), no_wasm: !/\bWebAssembly\b/.test(code),
    no_remote_loading: !/https?:\/\//.test(code), no_anti_debug: !/debugProtection|selfDefending|devtools|puppeteer|playwright/i.test(code),
  };
}

async function taskJsonClean() {
  const text = await readFile(path.join(visibleRoot, "task.json"), "utf8");
  const leaks = ["src/z0", "k7/q3/t9", "slot 23", "slot: 23", "oracle", "build_meta", "transformTableTypedArray", "materializeLaneBytes", "encodeTypedArrayPayload", "laneWord", "renameGlobals"];
  return leaks.every((item) => !text.includes(item));
}

async function staticChecks() {
  const bundle = await readFile(bundlePath, "utf8");
  const assets = (await readdir(assetsRoot)).filter((name) => name.endsWith(".js"));
  checks.single_bundle = assets.length === 1 && assets[0] === bundleName;
  checks.no_sourcemap = !/sourceMappingURL/.test(bundle);
  Object.assign(checks, forbiddenStatus(bundle));
  checks.line_count_ok = await lineChecks();
  checks.decoy_file_count = await countByFolder("src/z0/x", /^x\d\d\.js$/) === 44;
  checks.vendor_file_count = await countByFolder("src/z0/v", /^v\d\d\.js$/) === 25;
  checks.task_json_clean = await taskJsonClean();
  checks.hidden_files_not_dist = !(await stat(path.join(distRoot, "oracle.hidden.json")).catch(() => null))
    && !(await stat(path.join(distRoot, "build_meta.hidden.json")).catch(() => null));
  checks.hidden_files_present = Boolean(await stat(path.join(hiddenRoot, "oracle.hidden.json")).catch(() => null))
    && Boolean(await stat(path.join(hiddenRoot, "build_meta.hidden.json")).catch(() => null));
  checks.captures_present = Boolean(await stat(capturedBundlePath).catch(() => null));
  const capturedBundle = await readFile(capturedBundlePath, "utf8").catch(() => "");
  checks.captured_bundle_matches_dist = capturedBundle === bundle;
  const meta = JSON.parse(await readFile(path.join(hiddenRoot, "build_meta.hidden.json"), "utf8"));
  checks.build_meta_complete = meta.case_id === caseId && meta.task_contract?.target_observable?.sink?.field === "typed_array_payload";
  const source = await readFile(path.join(hiddenRoot, "src/z0/k7/q3/t9.js"), "utf8");
  checks.answer_source_present = /export\s+function\s+u\b/.test(source) && /slot:\s*23/.test(source) && /Uint8Array/.test(source) && /function\s+transformTableTypedArray\s*\(/.test(source);
}

async function main() {
  await staticChecks();
  const { server, baseUrl } = await createServer();
  const browser = await launchBrowser();
  try {
    const context = await browser.newContext();
    const first = await scenario(context, baseUrl, "wide", "open", "250", "maria", true);
    const second = await scenario(context, baseUrl, "wide", "open", "250", "maria", true);
    const third = await scenario(context, baseUrl, "wide", "open", "250", "maria", true);
    const changedScope = await scenario(context, baseUrl, "narrow", "open", "250", "maria", true);
    const changedLedger = await scenario(context, baseUrl, "wide", "pending", "250", "maria", true);
    const changedFloor = await scenario(context, baseUrl, "wide", "open", "500", "maria", true);
    const changedCustodian = await scenario(context, baseUrl, "wide", "open", "250", "nora", true);
    const changedParity = await scenario(context, baseUrl, "wide", "open", "250", "maria", false);
    const diversionValues = await diversions(context, baseUrl);
    checks.standard_interaction = Boolean(first.output);
    checks.console_log_found = Boolean(first.output);
    checks.target_field_exists = Boolean(first.output && first.output.typed_array_payload);
    checks.format_ok = /^ta_[A-Za-z0-9_-]{24}$/.test(first.output?.typed_array_payload || "");
    checks.stable_output = first.output?.typed_array_payload === second.output?.typed_array_payload
      && first.output?.typed_array_payload === third.output?.typed_array_payload;
    checks.scope_sensitive = Boolean(changedScope.output && changedScope.output.typed_array_payload !== first.output.typed_array_payload);
    checks.ledger_sensitive = Boolean(changedLedger.output && changedLedger.output.typed_array_payload !== first.output.typed_array_payload);
    checks.floor_sensitive = Boolean(changedFloor.output && changedFloor.output.typed_array_payload !== first.output.typed_array_payload);
    checks.custodian_sensitive = Boolean(changedCustodian.output && changedCustodian.output.typed_array_payload !== first.output.typed_array_payload);
    checks.parity_sensitive = Boolean(changedParity.output && changedParity.output.typed_array_payload !== first.output.typed_array_payload);
    checks.diversion_debug_seen = diversionValues.some((value) => value && value.action === "lane.buffer.shadow");
    checks.diversions_not_target = diversionValues.every((value) => !(value && typeof value === "object" && Object.hasOwn(value, "typed_array_payload")));
    checks.blocked_bundle_stops_output = await blocked(context, baseUrl);
    await context.close();
  } finally {
    await browser.close();
    server.close();
  }
  const passed = Object.values(checks).every(Boolean);
  console.log(JSON.stringify({ case_id: caseId, passed, checks }, null, 2));
  if (!passed) process.exit(1);
}

main().catch((error) => {
  console.error(JSON.stringify({ case_id: caseId, passed: false, error: String(error && error.stack || error) }, null, 2));
  process.exit(1);
});
