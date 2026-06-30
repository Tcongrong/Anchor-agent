// verify.mjs - case006_request_signature_token_derivation
// Structural + runtime checks for the canonical (agent_visible/agent_hidden)
// layout. Verifies the documented validate/lock/commit flow really logs the
// { action:"vault.req.commit", request_sig } console object (审查.md §5.1/§12.3).
// Does NOT grade agent submissions (that is grade_submission.mjs).
import http from "node:http";
import { createReadStream } from "node:fs";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const caseId = "case006_request_signature_token_derivation";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const srcRoot = path.join(hiddenRoot, "src");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const bundleName = "upload.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const captureHost = "127.0.0.1_4191";
const capturedBundlePath = path.join(visibleRoot, "captures", "devtools-source-dump", captureHost, "assets", bundleName);
const taskJsonPath = path.join(visibleRoot, "task.json");

const checks = { page_loaded: false, controls_exist: false, button_action: false, standard_interaction: false, console_log_found: false, target_field_exists: false, format_ok: false, stable_output: false, input_sensitive: false, decoys_not_target: false, blocked_bundle_stops_output: false, bundle_visible: false, bundle_not_blob_or_data: false, bundle_line_count: false, bundle_not_single_line: false, single_bundle: false, captured_bundle_visible: false, no_sourcemap: false, no_worker: false, no_sharedworker: false, no_serviceworker: false, no_postmessage: false, no_broadcastchannel: false, no_iframe: false, no_eval: false, no_new_function: false, no_wasm: false, src_line_count_ok: false, decoy_file_count: false, vendor_file_count: false, task_json_clean: false, hidden_files_present: false, build_meta_complete: false, answer_source_present: false };

const baseInputs = { endpointPath: "/api/payments/v2/transfers/batch", httpMethod: "POST", endpointClass: "payments", signingAlgorithm: "hmac-sha256", requestBody: "{\"amount\":9800,\"currency\":\"USD\"}" };

function linesOf(text) { return text.split(/\r?\n/).length; }
async function readFiles(dir) { const out = []; for (const entry of await readdir(dir, { withFileTypes: true })) { const resolved = path.join(dir, entry.name); if (entry.isDirectory()) out.push(...await readFiles(resolved)); else out.push(resolved); } return out; }
async function countByFolder(folder, pattern) { const entries = await readdir(path.join(srcRoot, folder)); return entries.filter((name) => pattern.test(name)).length; }

// Line-count floors apply ONLY to authored src/ (audit M8 / §3.2).
async function srcLineChecks() {
  const all = await readFiles(srcRoot);
  let src = 0, z0 = 0;
  for (const file of all.filter((f) => /\.(js|mjs|json|html|css|svg)$/.test(f))) {
    const relative = path.relative(hiddenRoot, file).replaceAll("\\", "/");
    const c = linesOf(await readFile(file, "utf8"));
    src += c;
    if (relative.startsWith("src/z0/")) z0 += c;
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
    try { const info = await stat(resolved); const filePath = info.isDirectory() ? path.join(resolved, "index.html") : resolved; response.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream", "Cache-Control": "no-store" }); createReadStream(filePath).pipe(response); }
    catch { response.writeHead(404); response.end("Not found"); }
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve({ server, baseUrl: "http://127.0.0.1:" + server.address().port + "/" })));
}
async function launchBrowser() {
  try { return await chromium.launch({ headless: true }); }
  catch {
    const candidates = process.platform === "win32" ? ["C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"] : ["/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser"];
    for (const executablePath of candidates) { try { await stat(executablePath); return await chromium.launch({ headless: true, executablePath }); } catch {} }
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
      try { const value = await arg.jsonValue(); if (value && typeof value === "object" && value.action === "vault.req.commit" && typeof value.request_sig === "string") { clearTimeout(timer); resolve(value); } } catch {}
    });
  });
}
async function scenario(context, baseUrl, inputs = baseInputs) {
  const page = await context.newPage();
  const misc = []; const responses = [];
  page.on("response", (response) => responses.push(response.url()));
  page.on("console", async (message) => { if (!["debug", "info", "log"].includes(message.type())) return; try { const value = await message.args()[0]?.jsonValue(); if (value && !(value.action === "vault.req.commit" && value.request_sig)) misc.push(value); } catch {} });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  checks.page_loaded = true;
  checks.controls_exist = await page.locator("#endpointPath").count() === 1 && await page.locator("#httpMethod").count() === 1 && await page.locator("#endpointClass").count() === 1 && await page.locator("#signingAlgorithm").count() === 1 && await page.locator("#requestBody").count() === 1 && await page.locator("#replayProtection").count() === 1 && await page.locator("#validatePayload").count() === 1 && await page.locator("#lockNonce").count() === 1 && await page.locator("#commitSign").count() === 1;
  checks.button_action = await page.locator("#commitSign").getAttribute("data-action") === "vault.req.commit" && await page.locator("#validatePayload").getAttribute("data-action") === "vault.req.validate" && await page.locator("#lockNonce").getAttribute("data-action") === "vault.req.lock";
  const got = targetPromise(page);
  await page.fill("#endpointPath", inputs.endpointPath);
  await page.selectOption("#httpMethod", inputs.httpMethod);
  await page.selectOption("#endpointClass", inputs.endpointClass);
  await page.selectOption("#signingAlgorithm", inputs.signingAlgorithm);
  await page.fill("#requestBody", inputs.requestBody);
  await page.check("#replayProtection");
  await page.click("#validatePayload");
  await page.click("#lockNonce");
  await page.click("#commitSign");
  const output = await got;
  const shadows = await page.evaluate(() => ({ decoyCount: document.documentElement.dataset.case006DecoyCount || "0", cacheSize: Array.isArray(window.__case006ShadowCache) ? window.__case006ShadowCache.length : 0, cacheValues: Array.isArray(window.__case006ShadowCache) ? window.__case006ShadowCache.map((row) => row.value) : [], visibleLen: document.documentElement.dataset.case006VisibleLen || "" }));
  await page.close();
  return { output, misc, shadows, responses };
}
async function blocked(context, baseUrl) {
  const page = await context.newPage();
  await page.route("**/assets/" + bundleName, (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  const got = targetPromise(page, 1000);
  await page.fill("#endpointPath", baseInputs.endpointPath).catch(() => null);
  await page.selectOption("#httpMethod", baseInputs.httpMethod).catch(() => null);
  await page.selectOption("#endpointClass", baseInputs.endpointClass).catch(() => null);
  await page.selectOption("#signingAlgorithm", baseInputs.signingAlgorithm).catch(() => null);
  await page.fill("#requestBody", baseInputs.requestBody).catch(() => null);
  await page.check("#replayProtection").catch(() => null);
  await page.click("#validatePayload").catch(() => null);
  await page.click("#lockNonce").catch(() => null);
  await page.click("#commitSign").catch(() => null);
  const output = await got;
  await page.close();
  return output === null;
}
function forbiddenStatus(code) { return { no_worker: !/new\s+Worker\b/.test(code), no_sharedworker: !/\bSharedWorker\b/.test(code), no_serviceworker: !/serviceWorker\b/.test(code), no_postmessage: !/\bpostMessage\b/.test(code), no_broadcastchannel: !/\bBroadcastChannel\b/.test(code), no_iframe: !/<iframe\b|createElement\(["']iframe/.test(code), no_eval: !/\beval\s*\(/.test(code), no_new_function: !/new\s+Function\b/.test(code), no_wasm: !/\bWebAssembly\b/.test(code) }; }
async function taskJsonClean() { const text = await readFile(taskJsonPath, "utf8"); const leaks = ["src/z0/k7/q3/t9.js", "requestsignaturetokenderivation", "createreducer", "reducer factory", "active slot", "slot 23", "oracle.hidden", "build_meta", "trampoline", "middleware", "state machine"]; return leaks.every((token) => !text.toLowerCase().includes(token.toLowerCase())); }
async function answerSourcePresent() {
  const source = await readFile(path.join(srcRoot, "z0/k7/q3/t9.js"), "utf8");
  const sink = await readFile(path.join(srcRoot, "z0/n0.js"), "utf8");
  return /export\s+function\s+u\b/.test(source) && /function\s+requestSignatureTokenDerivation\b/.test(source) && /function\s+encodeSignatureDigest\b/.test(source) && /114,\s*101,\s*113,\s*117,\s*101,\s*115,\s*116,\s*95,\s*115,\s*105,\s*103/.test(sink);
}

async function main() {
  checks.src_line_count_ok = await srcLineChecks();
  checks.decoy_file_count = await countByFolder("z0/x", /^x\d\d\.js$/) === 44;
  checks.vendor_file_count = await countByFolder("z0/v", /^v\d\d\.js$/) === 25;
  checks.task_json_clean = await taskJsonClean();
  checks.hidden_files_present = Boolean(await stat(path.join(hiddenRoot, "oracle.hidden.json")).catch(() => null)) && Boolean(await stat(path.join(hiddenRoot, "build_meta.hidden.json")).catch(() => null));
  const buildMeta = JSON.parse(await readFile(path.join(hiddenRoot, "build_meta.hidden.json"), "utf8"));
  checks.build_meta_complete = buildMeta.case_id === caseId && buildMeta.build_artifacts?.dist_bundle === "dist/assets/" + bundleName && buildMeta.task_contract?.target_observable?.sink?.field === "request_sig" && buildMeta.behavior_category?.paper_category === "request_signature_token_derivation";
  checks.answer_source_present = await answerSourcePresent();
  const bundleCode = await readFile(bundlePath, "utf8");
  const bundleLines = linesOf(bundleCode);
  checks.bundle_line_count = bundleLines >= 9000;
  checks.bundle_not_single_line = bundleLines > 1;
  checks.no_sourcemap = !/sourceMappingURL/.test(bundleCode);
  Object.assign(checks, forbiddenStatus(bundleCode));
  const assets = await readdir(assetsRoot);
  checks.single_bundle = assets.filter((name) => name.endsWith(".js")).length === 1 && assets.includes(bundleName);
  checks.captured_bundle_visible = Boolean(await stat(capturedBundlePath).catch(() => null));
  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const context = await browser.newContext();
    const s1 = await scenario(context, baseUrl);
    const s2 = await scenario(context, baseUrl);
    const sAlt = await scenario(context, baseUrl, { ...baseInputs, endpointPath: "/api/payments/v2/transfers/single", requestBody: "{\"amount\":1234,\"currency\":\"EUR\"}" });
    checks.standard_interaction = Boolean(s1.output);
    checks.console_log_found = Boolean(s1.output);
    checks.target_field_exists = typeof s1.output?.request_sig === "string";
    checks.format_ok = /^rs_[a-z0-9]{6}-[a-z0-9]{6}$/.test(s1.output?.request_sig || "");
    checks.stable_output = Boolean(s1.output) && s1.output?.request_sig === s2.output?.request_sig;
    checks.input_sensitive = Boolean(s1.output) && Boolean(sAlt.output) && s1.output?.request_sig !== sAlt.output?.request_sig;
    checks.decoys_not_target = s1.misc.some((item) => item && item.shadow_key) && Number(s1.shadows.cacheSize) === 12 && !s1.shadows.cacheValues.includes(s1.output?.request_sig);
    checks.bundle_visible = s1.responses.some((url) => url.endsWith("/assets/" + bundleName));
    checks.bundle_not_blob_or_data = s1.responses.every((url) => !url.startsWith("blob:") && !url.startsWith("data:"));
    checks.blocked_bundle_stops_output = await blocked(context, baseUrl);
    await context.close();
  } finally { if (browser) await browser.close(); await new Promise((resolve) => server.close(resolve)); }
  const passed = Object.values(checks).every(Boolean);
  const summary = { case_id: caseId, passed, console_log_found: checks.console_log_found, target_field: "request_sig", format_ok: checks.format_ok, stable_output: checks.stable_output, input_sensitive: checks.input_sensitive, decoys_not_target: checks.decoys_not_target, bundle_visible: checks.bundle_visible, captured_bundle_visible: checks.captured_bundle_visible, bundle_lines: bundleLines, single_bundle: checks.single_bundle, no_forbidden_runtime: checks.no_worker && checks.no_sharedworker && checks.no_serviceworker && checks.no_postmessage && checks.no_broadcastchannel && checks.no_iframe && checks.no_eval && checks.no_new_function && checks.no_wasm, src_line_count_ok: checks.src_line_count_ok, checks };
  console.log(JSON.stringify(summary, null, 2));
  if (!passed) process.exit(1);
}
main().catch((error) => { console.error(JSON.stringify({ case_id: caseId, passed: false, error: "verify_exception", message: error && error.stack || String(error) }, null, 2)); process.exit(1); });
