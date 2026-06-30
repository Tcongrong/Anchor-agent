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
const bundlePath = path.join(assetsRoot, "filter.app.bundle.js");
const caseId = "case008_request_signature_token_derivation";
const targetAction = "request.sign";

const checks = { page_loaded: false, controls_exist: false, button_action: false, standard_interaction: false, console_log_found: false, target_field_exists: false, format_ok: false, stable_output: false, endpoint_sensitive: false, method_sensitive: false, scheme_sensitive: false, body_sensitive: false, replay_sensitive: false, diversion_debug_seen: false, diversions_not_target: false, blocked_bundle_stops_output: false, bundle_visible: false, bundle_not_blob_or_data: false, bundle_not_single_line: false, single_bundle: false, no_sourcemap: false, no_worker: false, no_sharedworker: false, no_serviceworker: false, no_postmessage: false, no_messagechannel: false, no_broadcastchannel: false, no_iframe: false, no_eval: false, no_new_function: false, no_wasm: false, no_remote_loading: false, no_anti_debug: false, line_count_ok: false, shadow_file_count: false, vendor_file_count: false, task_json_clean: false, hidden_files_present: false, build_meta_complete: false, captured_bundle_present: false, answer_source_present: false };

// src-only line floors (matches build.mjs). Infrastructure/doc files carry no floor.
const requirements = new Map([
  ["src/host/index.html", 180],
  ["src/host/styles.css", 320],
  ["src/host/favicon.svg", 20],
  ["src/z8/k7/q3/t9.js", 520],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z8/x/x${String(i).padStart(2, "0")}.js`, 160);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z8/v/v${String(i).padStart(2, "0")}.js`, 220);

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
  let src = 0;
  let z8 = 0;
  for (const file of all.filter((item) => /\.(js|html|css|svg)$/.test(item))) {
    const relative = path.relative(path.join(hiddenRoot, "src"), file).replaceAll("\\", "/");
    const count = linesOf(await readFile(file, "utf8"));
    src += count;
    if (relative.startsWith("z8/")) z8 += count;
  }
  return src >= 20000 && z8 >= 19000;
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
        if (value && typeof value === "object" && value.action === targetAction && typeof value.req_sig === "string") { clearTimeout(timer); resolve(value); }
      } catch {}
    });
  });
}

async function scenario(context, baseUrl, endpoint, method, scheme, body, replay = true) {
  const page = await context.newPage();
  const misc = [];
  page.on("console", async (message) => {
    if (!["debug", "info", "log"].includes(message.type())) return;
    try {
      const value = await message.args()[0]?.jsonValue();
      if (value && !(value.action === targetAction && value.req_sig)) misc.push(value);
    } catch {}
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  checks.page_loaded = true;
  checks.controls_exist = await page.locator("#apiEndpoint").count() === 1 && await page.locator("#httpMethod").count() === 1 && await page.locator("#authScheme").count() === 1 && await page.locator("#requestBody").count() === 1 && await page.locator("#replayGuard").count() === 1 && await page.locator("#stageRequest").count() === 1 && await page.locator("#sealRequest").count() === 1 && await page.locator("#signRequest").count() === 1;
  checks.button_action = await page.locator("#signRequest").getAttribute("data-action") === targetAction;
  await page.fill("#apiEndpoint", endpoint);
  await page.selectOption("#httpMethod", method);
  await page.selectOption("#authScheme", scheme);
  await page.fill("#requestBody", body);
  await page.setChecked("#replayGuard", replay);
  await page.click("#stageRequest");
  await page.click("#sealRequest");
  const got = targetPromise(page);
  await page.click("#signRequest");
  const output = await got;
  await page.close();
  return { output, misc };
}

async function diversions(context, baseUrl) {
  const page = await context.newPage();
  const values = [];
  page.on("console", async (message) => { try { values.push(await message.args()[0]?.jsonValue()); } catch {} });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  for (const selector of ['[data-action="request.export.preview"]', '[data-action="request.history.prev"]', '[data-action="request.history.next"]', '[data-action="request.headers.save"]', '[data-action="request.badge.refresh"]', '[data-action="request.view.pin"]']) {
    await page.click(selector).catch(() => null);
    await page.waitForTimeout(40);
  }
  await page.close();
  return values;
}

async function blocked(context, baseUrl) {
  const page = await context.newPage();
  await page.route("**/assets/filter.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.fill("#apiEndpoint", "/api/v2/orders").catch(() => null);
  await page.selectOption("#httpMethod", "POST").catch(() => null);
  await page.selectOption("#authScheme", "bearer").catch(() => null);
  await page.fill("#requestBody", "amount=250").catch(() => null);
  await page.setChecked("#replayGuard", true).catch(() => null);
  await page.click("#stageRequest").catch(() => null);
  await page.click("#sealRequest").catch(() => null);
  const got = targetPromise(page, 1000);
  await page.click("#signRequest").catch(() => null);
  const output = await got;
  await page.close();
  return output === null;
}

function forbiddenStatus(code) {
  return {
    no_worker: !/new\s+Worker\b/.test(code),
    no_sharedworker: !/\bSharedWorker\b/.test(code),
    no_serviceworker: !/serviceWorker\b/.test(code),
    no_postmessage: !/\bpostMessage\b/.test(code),
    no_messagechannel: !/\bMessageChannel\b/.test(code),
    no_broadcastchannel: !/\bBroadcastChannel\b/.test(code),
    no_iframe: !/<iframe\b|createElement\(["']iframe/.test(code),
    no_eval: !/\beval\s*\(/.test(code),
    no_new_function: !/new\s+Function\b/.test(code),
    no_wasm: !/\bWebAssembly\b/.test(code),
    no_remote_loading: !/https?:\/\//.test(code),
    no_anti_debug: !/debugProtection|selfDefending|devtools|puppeteer|playwright/i.test(code)
  };
}

async function taskJsonClean() {
  const text = await readFile(path.join(visibleRoot, "task.json"), "utf8");
  const leaks = ["src/z8/k7/q3/t9.js", "slot 23", "slot: 23", "deriveRequestSignature", "encodeSignatureToken", "mixSignatureState", "oracle.hidden.json", "build_meta.hidden.json", "source_function", "answer_function"];
  return leaks.every((item) => !text.includes(item));
}

async function staticChecks() {
  const bundle = await readFile(bundlePath, "utf8");
  const assets = (await readdir(assetsRoot)).filter((name) => name.endsWith(".js"));
  checks.single_bundle = assets.length === 1 && assets[0] === "filter.app.bundle.js";
  checks.bundle_not_single_line = linesOf(bundle) > 1;
  checks.no_sourcemap = !/sourceMappingURL/.test(bundle);
  Object.assign(checks, forbiddenStatus(bundle));
  checks.bundle_visible = true;
  checks.bundle_not_blob_or_data = true;
  checks.line_count_ok = await lineChecks();
  checks.shadow_file_count = await countByFolder("src/z8/x", /^x\d\d\.js$/) === 44;
  checks.vendor_file_count = await countByFolder("src/z8/v", /^v\d\d\.js$/) === 25;
  checks.task_json_clean = await taskJsonClean();
  checks.hidden_files_present = Boolean(await stat(path.join(hiddenRoot, "oracle.hidden.json")).catch(() => null)) && Boolean(await stat(path.join(hiddenRoot, "build_meta.hidden.json")).catch(() => null));
  const capturedBundle = path.join(visibleRoot, "captures", "devtools-source-dump", "127.0.0.1_4008", "assets", "filter.app.bundle.js");
  checks.captured_bundle_present = Boolean(await stat(capturedBundle).catch(() => null));
  const meta = JSON.parse(await readFile(path.join(hiddenRoot, "build_meta.hidden.json"), "utf8"));
  checks.build_meta_complete = meta.case_id === caseId && meta.task_contract && meta.task_contract.public_task_label === "request_signature_token_derivation" && meta.task_contract.target_observable?.sink?.action === targetAction && meta.task_contract.target_observable?.sink?.field === "req_sig";
  const source = await readFile(path.join(hiddenRoot, "src/z8/k7/q3/t9.js"), "utf8");
  checks.answer_source_present = /export\s+function\s+u\b/.test(source) && /slot:\s*23/.test(source) && /function\s+deriveRequestSignature\b/.test(source);
}

async function main() {
  await staticChecks();
  const { server, baseUrl } = await createServer();
  const browser = await launchBrowser();
  try {
    const context = await browser.newContext();
    const base = ["/api/v2/orders", "POST", "bearer", "amount=250&owner=maria", true];
    const first = await scenario(context, baseUrl, ...base);
    const second = await scenario(context, baseUrl, ...base);
    const third = await scenario(context, baseUrl, ...base);
    const changedEndpoint = await scenario(context, baseUrl, "/api/v2/users", "POST", "bearer", "amount=250&owner=maria", true);
    const changedMethod = await scenario(context, baseUrl, "/api/v2/orders", "GET", "bearer", "amount=250&owner=maria", true);
    const changedScheme = await scenario(context, baseUrl, "/api/v2/orders", "POST", "apikey", "amount=250&owner=maria", true);
    const changedBody = await scenario(context, baseUrl, "/api/v2/orders", "POST", "bearer", "amount=500&owner=nora", true);
    const changedReplay = await scenario(context, baseUrl, "/api/v2/orders", "POST", "bearer", "amount=250&owner=maria", false);
    const diversionValues = await diversions(context, baseUrl);
    checks.standard_interaction = Boolean(first.output);
    checks.console_log_found = Boolean(first.output);
    checks.target_field_exists = Boolean(first.output && first.output.req_sig);
    checks.format_ok = /^sig_[a-z0-9]{16}$/.test(first.output?.req_sig || "");
    checks.stable_output = first.output?.req_sig === second.output?.req_sig && first.output?.req_sig === third.output?.req_sig;
    checks.endpoint_sensitive = Boolean(changedEndpoint.output && changedEndpoint.output.req_sig !== first.output.req_sig);
    checks.method_sensitive = Boolean(changedMethod.output && changedMethod.output.req_sig !== first.output.req_sig);
    checks.scheme_sensitive = Boolean(changedScheme.output && changedScheme.output.req_sig !== first.output.req_sig);
    checks.body_sensitive = Boolean(changedBody.output && changedBody.output.req_sig !== first.output.req_sig);
    checks.replay_sensitive = Boolean(changedReplay.output && changedReplay.output.req_sig !== first.output.req_sig);
    checks.diversion_debug_seen = diversionValues.some((value) => value && value.action === "request.shadow.action");
    checks.diversions_not_target = diversionValues.every((value) => !(value && typeof value === "object" && Object.hasOwn(value, "req_sig")));
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

main().catch((error) => { console.error(JSON.stringify({ case_id: caseId, passed: false, error: String(error && error.stack || error) }, null, 2)); process.exit(1); });
