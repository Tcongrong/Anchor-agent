import http from "node:http";
import { createReadStream } from "node:fs";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const srcRoot = path.join(hiddenRoot, "src");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const bundlePath = path.join(assetsRoot, "relay.app.bundle.js");

const checks = { page_load: false, controls_exist: false, early_release_silent: false, entry_long_hold: false, console_request_sig_exists: false, request_sig_format_valid: false, same_input_stable: false, different_route_changes: false, different_method_changes: false, decoy_outputs_not_target: false, app_bundle_required: false, bundle_visible_in_devtools_sources: false, bundle_contains_answer_code: false, bundle_contains_call_site: false, bundle_minimum_lines: false, src_minimum_lines: false, no_sourcemap: false, no_worker_bundle: false, no_worker_constructor: false, no_service_worker: false, no_shared_worker: false, no_broadcast_channel: false, no_post_message: false, no_iframe: false, no_eval: false, no_new_function: false, no_wasm: false };

function linesOf(text) { return text.split(/\r?\n/).length; }
async function readFiles(dir) { const out = []; const entries = await readdir(dir, { withFileTypes: true }); for (const entry of entries) { const resolved = path.join(dir, entry.name); if (entry.isDirectory()) out.push(...await readFiles(resolved)); else out.push(resolved); } return out; }

// Line floors apply ONLY to authored src/ content (audit M8 / §3.2).
async function srcLineChecks() {
  const all = await readFiles(srcRoot);
  let src = 0; let z0 = 0;
  for (const file of all.filter((f) => /\.(js|mjs|json|html|css|svg)$/.test(f))) {
    const relative = path.relative(hiddenRoot, file).replaceAll("\\", "/");
    const count = linesOf(await readFile(file, "utf8"));
    src += count;
    if (relative.startsWith("src/z0/")) z0 += count;
  }
  return src >= 14000 && z0 >= 12000;
}

function createServer() {
  const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml" };
  const server = http.createServer(async (request, response) => {
    const url = new URL(request.url || "/", "http://127.0.0.1");
    const clean = decodeURIComponent(url.pathname).replace(/^\/+/, "");
    const resolved = path.resolve(distRoot, clean || "index.html");
    if (!resolved.startsWith(distRoot)) { response.writeHead(403); response.end("Forbidden"); return; }
    try { const info = await stat(resolved); const filePath = info.isDirectory() ? path.join(resolved, "index.html") : resolved; response.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream", "Cache-Control": "no-store" }); createReadStream(filePath).pipe(response); } catch { response.writeHead(404); response.end("Not found"); }
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve({ server, baseUrl: `http://127.0.0.1:${server.address().port}/` })));
}
async function launchBrowser() {
  try { return await chromium.launch({ headless: true }); } catch {
    const candidates = process.platform === "win32" ? ["C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"] : ["/usr/bin/google-chrome", "/usr/bin/chromium"];
    for (const executablePath of candidates) { try { await stat(executablePath); return await chromium.launch({ headless: true, executablePath }); } catch {} }
    throw new Error("No Chromium browser was found.");
  }
}
function targetPromise(page, timeout = 2000) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), timeout);
    page.on("console", async (message) => {
      if (message.type() !== "log") return;
      const arg = message.args()[0];
      if (!arg) return;
      try {
        const value = await arg.jsonValue();
        if (value && typeof value === "object" && value.action === "relay.sign" && typeof value.request_sig === "string") { clearTimeout(timer); resolve(value); }
      } catch {}
    });
  });
}
async function configure(page, route, method) {
  await page.fill("#routeInput", route); await page.selectOption("#methodSelect", method); await page.click("#scopeBilling"); await page.click("#rotateNonce");
}
async function holdPad(page, duration) {
  const box = await page.locator("#signPad").boundingBox(); if (!box) throw new Error("Signing pad not visible"); await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2); await page.mouse.down(); await page.waitForTimeout(duration); await page.mouse.up();
}
async function scenario(browser, baseUrl, route, method) {
  const page = await browser.newPage(); const misc = []; page.on("console", async (message) => { if (message.type() === "debug" || message.type() === "info" || message.type() === "log") { try { const value = await message.args()[0]?.jsonValue(); if (value && !(value.action === "relay.sign" && value.request_sig)) misc.push(value); } catch {} } });
  await page.goto(baseUrl, { waitUntil: "networkidle" }); await configure(page, route, method); const beforeEarlyRelease = targetPromise(page, 450); await holdPad(page, 120); const earlyOutput = await beforeEarlyRelease; const got = targetPromise(page); await holdPad(page, 650); const output = await got; const shadows = await page.evaluate(() => ({ data: { ...document.documentElement.dataset }, keys: Object.keys(window).filter((key) => key.startsWith("__z_shadow_")).map((key) => window[key]) })); await page.close(); return { output, earlyOutput, misc, shadows };
}
async function blocked(browser, baseUrl) {
  const page = await browser.newPage(); await page.route("**/assets/relay.app.bundle.js", (route) => route.abort()); await page.goto(baseUrl, { waitUntil: "domcontentloaded" }); await configure(page, "/v2/invoices/close", "PATCH"); const got = targetPromise(page, 800); await holdPad(page, 650); const output = await got; await page.close(); return output === null;
}
async function main() {
  checks.src_minimum_lines = await srcLineChecks();
  const bundleCode = await readFile(bundlePath, "utf8");
  const bundleLines = linesOf(bundleCode);
  checks.bundle_minimum_lines = bundleLines >= 9000;
  checks.no_sourcemap = !/sourceMappingURL/i.test(bundleCode);
  const assetFiles = await readdir(assetsRoot);
  checks.no_worker_bundle = assetFiles.every((file) => !/worker/i.test(file));
  checks.no_worker_constructor = !/new\s+Worker/i.test(bundleCode); checks.no_service_worker = !/serviceWorker\s*\./i.test(bundleCode); checks.no_shared_worker = !/SharedWorker/i.test(bundleCode); checks.no_broadcast_channel = !/BroadcastChannel/i.test(bundleCode); checks.no_post_message = !/postMessage\s*\(/i.test(bundleCode); checks.no_iframe = !/<iframe|createElement\(['\"]iframe/i.test(bundleCode); checks.no_eval = !/eval\s*\(/i.test(bundleCode); checks.no_new_function = !/new\s+Function/i.test(bundleCode); checks.no_wasm = !/WebAssembly/i.test(bundleCode);
  // Answer-bearing residue is checked via bundle-resident answer_function names
  // (renameGlobals:false keeps them readable) plus decoy field names, not source paths.
  checks.bundle_contains_answer_code = /imul/.test(bundleCode) && /deriveRequestSignature|signatureFrame/.test(bundleCode) && /relay_token|relay_trace/.test(bundleCode);
  checks.bundle_contains_call_site = /console/.test(bundleCode);
  const { server, baseUrl } = await createServer(); let browser;
  try {
    browser = await launchBrowser();
    const page = await browser.newPage(); const responses = []; page.on("response", (response) => responses.push(response.url())); await page.goto(baseUrl, { waitUntil: "networkidle" }); checks.page_load = await page.title() === "Outbound Relay Signing Pad"; checks.controls_exist = await page.locator("#relayPanel, #routeInput, #methodSelect, #scopeBilling, #rotateNonce, #signPad").count() === 6 && await page.getAttribute("#relayPanel", "data-capability") === "relay:authorize:hold"; checks.bundle_visible_in_devtools_sources = responses.some((url) => url.endsWith("/assets/relay.app.bundle.js")); await page.close();
    const first = await scenario(browser, baseUrl, "/v2/invoices/close", "PATCH"); const code = first.output?.request_sig; checks.early_release_silent = first.earlyOutput === null; checks.entry_long_hold = Boolean(first.output); checks.console_request_sig_exists = typeof code === "string"; checks.request_sig_format_valid = /^rs_[a-z0-9]{12}$/.test(code || ""); const second = await scenario(browser, baseUrl, "/v2/invoices/close", "PATCH"); checks.same_input_stable = code === second.output?.request_sig; const changedRoute = await scenario(browser, baseUrl, "/v2/invoices/reopen", "PATCH"); const changedMethod = await scenario(browser, baseUrl, "/v2/invoices/close", "POST"); checks.different_route_changes = code !== changedRoute.output?.request_sig; checks.different_method_changes = code !== changedMethod.output?.request_sig; const decoys = [...first.misc.flatMap((x) => x ? [x.ap, x.relay_token, x.relay_trace, x.request_sig] : []), ...Object.values(first.shadows.data || {}), ...(first.shadows.keys || [])]; checks.decoy_outputs_not_target = decoys.some(Boolean) && decoys.every((value) => value !== code); checks.app_bundle_required = await blocked(browser, baseUrl);
  } finally { if (browser) await browser.close(); await new Promise((resolve) => server.close(resolve)); }
  const passed = Object.values(checks).every(Boolean); console.log(JSON.stringify({ case_id: "case003_request_signature_token_derivation", passed, checks }, null, 2)); if (!passed) process.exitCode = 1;
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
