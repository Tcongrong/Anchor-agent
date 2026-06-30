import http from "node:http";
import { createReadStream } from "node:fs";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const caseRoot = path.resolve(__dirname, "..");            // agent_hidden
const visibleRoot = path.resolve(caseRoot, "../agent_visible");
const distRoot = path.join(caseRoot, "dist");
const capturesHost = "127.0.0.1_4212";
const capturesAssets = path.join(visibleRoot, "captures", "devtools-source-dump", capturesHost, "assets");
const bundlePath = path.join(capturesAssets, "media.app.bundle.js");   // agent-visible corpus
const taskPath = path.join(visibleRoot, "task.json");
const caseId = "case010_request_signature_token_derivation";
const checks = { page_loaded: false, controls_exist: false, button_command: false, standard_interaction: false, console_log_found: false, target_field_exists: false, format_ok: false, stable_output: false, carrier_sensitive: false, window_sensitive: false, priority_sensitive: false, manifest_sensitive: false, diversion_debug_seen: false, diversions_not_target: false, blocked_bundle_stops_output: false, bundle_visible: false, bundle_not_blob_or_data: false, bundle_line_count: false, bundle_not_single_line: false, single_bundle: false, no_sourcemap: false, no_worker: false, no_sharedworker: false, no_serviceworker: false, no_postmessage: false, no_broadcastchannel: false, no_iframe: false, no_eval: false, no_new_function: false, no_wasm: false, no_remote_loading: false, no_anti_debug: false, src_line_floor_ok: false, decoy_file_count: false, vendor_file_count: false, task_json_clean: false, hidden_files_present: false, hidden_files_not_visible: false, build_meta_complete: false, devtools_visible_bundle: false, answer_source_present: false, captures_present: false, oracle_span_present: false };
function linesOf(text) { return text.trimEnd().split(/\r?\n/).length; }
async function readFiles(dir) { const out = []; for (const entry of await readdir(dir, { withFileTypes: true })) { const resolved = path.join(dir, entry.name); if (entry.isDirectory()) out.push(...await readFiles(resolved)); else out.push(resolved); } return out; }
async function countByFolder(folder, pattern) { const entries = await readdir(path.join(caseRoot, folder)); return entries.filter((name) => pattern.test(name)).length; }
// Line-count floors apply ONLY to in-task src/ content (audit-spec section 3.2 / fix-plan M8); infra files carry none.
async function srcLineFloorOk() { const all = await readFiles(path.join(caseRoot, "src")); let src = 0; let z0 = 0; for (const file of all.filter((item) => /\.(js|mjs|json|html|css|svg)$/.test(item))) { const relative = path.relative(caseRoot, file).replaceAll("\\", "/"); const count = linesOf(await readFile(file, "utf8")); src += count; if (relative.startsWith("src/z0/")) z0 += count; } return src >= 14085 && z0 >= 12085; }
function createServer() { const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml; charset=utf-8" }; const server = http.createServer(async (request, response) => { const url = new URL(request.url || "/", "http://127.0.0.1"); const clean = decodeURIComponent(url.pathname).replace(/^\/+/, ""); const resolved = path.resolve(distRoot, clean || "index.html"); if (!resolved.startsWith(distRoot)) { response.writeHead(403); response.end("Forbidden"); return; } try { const info = await stat(resolved); const filePath = info.isDirectory() ? path.join(resolved, "index.html") : resolved; response.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream", "Cache-Control": "no-store" }); createReadStream(filePath).pipe(response); } catch { response.writeHead(404); response.end("Not found"); } }); return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve({ server, baseUrl: "http://127.0.0.1:" + server.address().port + "/" }))); }
async function launchBrowser() { try { return await chromium.launch({ headless: true }); } catch { const candidates = process.platform === "win32" ? ["C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"] : ["/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser"]; for (const executablePath of candidates) { try { await stat(executablePath); return await chromium.launch({ headless: true, executablePath }); } catch {} } throw new Error("No Chromium browser was found."); } }
function targetPromise(page, timeout = 5000) { return new Promise((resolve) => { const timer = setTimeout(() => resolve(null), timeout); page.on("console", async (message) => { if (message.type() !== "log") return; const arg = message.args()[0]; if (!arg) return; try { const value = await arg.jsonValue(); if (value && typeof value === "object" && value.action === "media.sign" && typeof value.req_sig === "string") { clearTimeout(timer); resolve(value); } } catch {} }); }); }
async function applyManifestControls(page, carrier, priority, window, manifestId, integrity = "nonce-bind") {
  await page.locator('input[name="carrierRoute"][value="' + carrier + '"]').check();
  await page.locator("#priorityBand").evaluate((node, value) => { node.value = value; node.dispatchEvent(new Event("input", { bubbles: true })); }, String(priority));
  await page.selectOption("#deliveryWindow", window);
  await page.fill("#manifestId", manifestId);
  await page.locator('input[name="integrityMode"][value="' + integrity + '"]').check();
}
async function scenario(context, baseUrl, carrier, priority, window, manifestId) {
  const page = await context.newPage();
  const misc = [];
  page.on("console", async (message) => { if (!["debug", "info", "log"].includes(message.type())) return; try { const value = await message.args()[0]?.jsonValue(); if (value && !(value.action === "media.sign" && value.req_sig)) misc.push(value); } catch {} });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  checks.page_loaded = true;
  checks.controls_exist = await page.locator('input[name="carrierRoute"]').count() === 3 && await page.locator("#priorityBand").count() === 1 && await page.locator("#deliveryWindow").count() === 1 && await page.locator("#manifestId").count() === 1 && await page.locator('input[name="integrityMode"]').count() === 2 && await page.locator("#snapshotManifestButton").count() === 1 && await page.locator("#issueSealButton").count() === 1;
  checks.button_command = await page.locator("#issueSealButton").getAttribute("data-phase") === "issue";
  await applyManifestControls(page, carrier, priority, window, manifestId);
  const got = targetPromise(page);
  await page.click("#snapshotManifestButton");
  await page.click("#issueSealButton");
  const output = await got;
  await page.close();
  return { output, misc };
}
async function blocked(context, baseUrl) { const page = await context.newPage(); await page.route("**/assets/media.app.bundle.js", (route) => route.abort()); await page.goto(baseUrl, { waitUntil: "domcontentloaded" }); await applyManifestControls(page, "edge-cdn", 6, "afternoon", "MFST-8842-ALPHA").catch(() => null); const got = targetPromise(page, 1000); await page.click("#snapshotManifestButton").catch(() => null); await page.click("#issueSealButton").catch(() => null); const output = await got; await page.close(); return output === null; }
function forbiddenStatus(code) { return { no_worker: !/new\s+Worker\b/.test(code), no_sharedworker: !/\bSharedWorker\b/.test(code), no_serviceworker: !/serviceWorker\b/.test(code), no_postmessage: !/\bpostMessage\b/.test(code), no_broadcastchannel: !/\bBroadcastChannel\b/.test(code), no_iframe: !/<iframe\b|createElement\(["']iframe/.test(code), no_eval: !/\beval\s*\(/.test(code), no_new_function: !/new\s+Function\b/.test(code), no_wasm: !/\bWebAssembly\b/.test(code), no_remote_loading: !/https?:\/\//.test(code), no_anti_debug: !/debugProtection|selfDefending|devtools|puppeteer|playwright/i.test(code) }; }
async function taskJsonClean() { const text = await readFile(taskPath, "utf8"); const leaks = ["src/z0", "slot 29", "0x27d4eb2d", "deriveRequestSignatureToken", "formatSignatureToken", "materializeSignBytes", "composeRequestCanon", "Math.imul", "answer_function", "source_function", "oracle", "build_meta", "javascript-obfuscator", "export u", "reducer factory"]; return leaks.every((item) => !text.includes(item)); }
async function staticChecks() {
  const bundle = await readFile(bundlePath, "utf8");
  const assets = (await readdir(capturesAssets)).filter((name) => name.endsWith(".js"));
  checks.single_bundle = assets.length === 1 && assets[0] === "media.app.bundle.js";
  checks.bundle_line_count = linesOf(bundle) >= 9065;
  checks.bundle_not_single_line = linesOf(bundle) > 1;
  checks.no_sourcemap = !/sourceMappingURL/.test(bundle);
  Object.assign(checks, forbiddenStatus(bundle));
  checks.bundle_visible = true;
  checks.devtools_visible_bundle = true;
  checks.bundle_not_blob_or_data = !/blob:|data:/.test(bundle);
  checks.src_line_floor_ok = await srcLineFloorOk();
  checks.decoy_file_count = await countByFolder("src/z0/x", /^x\d\d\.js$/) === 44;
  checks.vendor_file_count = await countByFolder("src/z0/v", /^v\d\d\.js$/) === 25;
  checks.task_json_clean = await taskJsonClean();
  checks.hidden_files_present = Boolean(await stat(path.join(caseRoot, "oracle.hidden.json")).catch(() => null)) && Boolean(await stat(path.join(caseRoot, "build_meta.hidden.json")).catch(() => null));
  checks.hidden_files_not_visible = !Boolean(await stat(path.join(visibleRoot, "oracle.hidden.json")).catch(() => null)) && !Boolean(await stat(path.join(visibleRoot, "build_meta.hidden.json")).catch(() => null));
  const meta = JSON.parse(await readFile(path.join(caseRoot, "build_meta.hidden.json"), "utf8"));
  checks.build_meta_complete = meta.case_id === caseId && Boolean(meta.task_contract) && Boolean(meta.task_contract.target_observable) && Boolean(meta.task_contract.target_observable.sink) && meta.task_contract.target_observable.sink.field === "req_sig";
  const source = await readFile(path.join(caseRoot, "src/z0/k7/q3/t9.js"), "utf8");
  checks.answer_source_present = /export\s+function\s+u\b/.test(source) && /slot:\s*29/.test(source) && /deriveRequestSignatureToken/.test(source) && /formatSignatureToken/.test(source);
  checks.captures_present = Boolean(await stat(path.join(visibleRoot, "captures/devtools-source-dump/manifest.json")).catch(() => null));
  const oracle = JSON.parse(await readFile(path.join(caseRoot, "oracle.hidden.json"), "utf8"));
  checks.oracle_span_present = Boolean(oracle.primary_anchor && oracle.primary_anchor.captured_span && oracle.primary_anchor.captured_span.sha256 && oracle.primary_anchor.captured_span.sha256.length === 64);
}
async function main() {
  await staticChecks();
  const { server, baseUrl } = await createServer();
  const browser = await launchBrowser();
  let first = null, second = null, changedCarrier = null, changedWindow = null, changedPriority = null, changedManifest = null;
  try {
    const context = await browser.newContext();
    first = await scenario(context, baseUrl, "edge-cdn", 6, "afternoon", "MFST-8842-ALPHA");
    second = await scenario(context, baseUrl, "edge-cdn", 6, "afternoon", "MFST-8842-ALPHA");
    changedCarrier = await scenario(context, baseUrl, "origin-pull", 6, "afternoon", "MFST-8842-ALPHA");
    changedWindow = await scenario(context, baseUrl, "edge-cdn", 6, "evening", "MFST-8842-ALPHA");
    changedPriority = await scenario(context, baseUrl, "edge-cdn", 4, "afternoon", "MFST-8842-ALPHA");
    changedManifest = await scenario(context, baseUrl, "edge-cdn", 6, "afternoon", "MFST-8842-BETA");
    checks.standard_interaction = Boolean(first.output);
    checks.console_log_found = Boolean(first.output);
    checks.target_field_exists = Boolean(first.output && first.output.req_sig);
    checks.format_ok = /^sig_[a-z0-9]{4,8}-[a-z0-9]{4,8}-[a-z0-9]{6,10}$/.test(first.output?.req_sig || "");
    checks.stable_output = first.output?.req_sig === second.output?.req_sig;
    checks.carrier_sensitive = Boolean(changedCarrier.output && changedCarrier.output.req_sig !== first.output.req_sig);
    checks.window_sensitive = Boolean(changedWindow.output && changedWindow.output.req_sig !== first.output.req_sig);
    checks.priority_sensitive = Boolean(changedPriority.output && changedPriority.output.req_sig !== first.output.req_sig);
    checks.manifest_sensitive = Boolean(changedManifest.output && changedManifest.output.req_sig !== first.output.req_sig);
    const miscValues = first.misc.concat(second.misc, changedCarrier.misc, changedWindow.misc, changedPriority.misc, changedManifest.misc);
    checks.diversion_debug_seen = miscValues.some((value) => value && typeof value === "object" && typeof value.action === "string" && value.action.includes("shadow.action"));
    checks.diversions_not_target = miscValues.every((value) => !(value && typeof value === "object" && Object.hasOwn(value, "req_sig")));
    checks.blocked_bundle_stops_output = await blocked(context, baseUrl);
    await context.close();
  } finally { await browser.close(); server.close(); }
  const passed = Object.values(checks).every(Boolean);
  console.log(JSON.stringify({ case_id: caseId, passed, observed: first && first.output, changed: { carrier: changedCarrier && changedCarrier.output, window: changedWindow && changedWindow.output, priority: changedPriority && changedPriority.output, manifest: changedManifest && changedManifest.output }, checks }, null, 2));
  if (!passed) process.exit(1);
}
main().catch((error) => { console.error(JSON.stringify({ case_id: caseId, passed: false, error: String(error && error.stack || error) }, null, 2)); process.exit(1); });
