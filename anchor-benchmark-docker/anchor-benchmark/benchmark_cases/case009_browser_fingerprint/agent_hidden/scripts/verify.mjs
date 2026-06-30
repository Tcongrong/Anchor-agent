import http from "node:http";
import { createReadStream } from "node:fs";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const distRoot = path.join(hiddenRoot, "dist");
const capturesRoot = path.join(visibleRoot, "captures", "devtools-source-dump");
const captureBundle = path.join(capturesRoot, "127.0.0.1_4173", "assets", "calendar.app.bundle.js");
const bundlePath = path.join(distRoot, "assets", "calendar.app.bundle.js");
const caseId = "case009_browser_fingerprint";

const checks = {
  page_loaded: false,
  controls_exist: false,
  button_command: false,
  standard_interaction: false,
  console_log_found: false,
  target_field_exists: false,
  format_ok: false,
  stable_output: false,
  vendor_sensitive: false,
  mode_sensitive: false,
  rounds_sensitive: false,
  diversion_debug_seen: false,
  diversions_not_target: false,
  blocked_bundle_stops_output: false,
  bundle_visible: false,
  dist_capture_in_sync: false,
  single_bundle: false,
  no_sourcemap: false,
  no_worker: false,
  no_sharedworker: false,
  no_serviceworker: false,
  no_postmessage: false,
  no_broadcastchannel: false,
  no_iframe: false,
  no_eval: false,
  no_new_function: false,
  no_wasm: false,
  no_remote_loading: false,
  no_anti_debug: false,
  decoy_file_count: false,
  vendor_file_count: false,
  task_json_clean: false,
  hidden_files_present: false,
  hidden_files_not_visible: false,
  oracle_dual_track: false,
  response_schema_present: false,
  answer_source_present: false,
};

function linesOf(text) {
  return text.trimEnd().split(/\r?\n/).length;
}

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(hiddenRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
}

function createServer() {
  const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml; charset=utf-8" };
  const server = http.createServer(async (request, response) => {
    const url = new URL(request.url || "/", "http://127.0.0.1");
    const clean = decodeURIComponent(url.pathname).replace(/^\/+/, "");
    const resolved = path.resolve(distRoot, clean || "index.html");
    if (!resolved.startsWith(distRoot)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }
    try {
      const info = await stat(resolved);
      const filePath = info.isDirectory() ? path.join(resolved, "index.html") : resolved;
      response.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream", "Cache-Control": "no-store" });
      createReadStream(filePath).pipe(response);
    } catch {
      response.writeHead(404);
      response.end("Not found");
    }
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve({ server, baseUrl: `http://127.0.0.1:${server.address().port}/` })));
}

async function launchBrowser() {
  try {
    return await chromium.launch({ headless: true });
  } catch {
    const candidates = process.platform === "win32"
      ? ["C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"]
      : ["/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser"];
    for (const executablePath of candidates) {
      try {
        await stat(executablePath);
        return await chromium.launch({ headless: true, executablePath });
      } catch {}
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
        if (value && typeof value === "object" && value.action === "fingerprint.collect" && typeof value.browser_fp === "string") {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(context, baseUrl, vendor, mode, rounds, extended = true) {
  const page = await context.newPage();
  const misc = [];
  page.on("console", async (message) => {
    if (!["debug", "info", "log"].includes(message.type())) return;
    try {
      const value = await message.args()[0]?.jsonValue();
      if (value && !(value.action === "fingerprint.collect" && value.browser_fp)) misc.push(value);
    } catch {}
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  checks.page_loaded = true;
  checks.controls_exist =
    (await page.locator("#vendorHint").count()) === 1 &&
    (await page.locator("#scanMode").count()) === 1 &&
    (await page.locator("#hashRounds").count()) === 1 &&
    (await page.locator("#entropyDepth").count()) === 1 &&
    (await page.locator("#extendedSignals").count()) === 1 &&
    (await page.locator("#canvasProbe").count()) === 1 &&
    (await page.locator("#strictMode").count()) === 1 &&
    (await page.locator("#warmCacheButton").count()) === 1 &&
    (await page.locator("#lockConfigButton").count()) === 1 &&
    (await page.locator("#generateFingerprintButton").count()) === 1;
  checks.button_command = await page.locator("#generateFingerprintButton").getAttribute("data-stage") === "collect";
  await page.fill("#vendorHint", vendor);
  await page.selectOption("#scanMode", mode);
  await page.selectOption("#hashRounds", rounds);
  await page.fill("#entropyDepth", "8");
  if (extended) await page.check("#extendedSignals"); else await page.uncheck("#extendedSignals");
  await page.check("#canvasProbe");
  await page.check("#strictMode");
  const got = targetPromise(page);
  await page.click("#warmCacheButton");
  await page.click("#lockConfigButton");
  await page.click("#generateFingerprintButton");
  const output = await got;
  await page.close();
  return { output, misc };
}

async function blocked(context, baseUrl) {
  const page = await context.newPage();
  await page.route("**/assets/calendar.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  const got = targetPromise(page, 1000);
  await page.fill("#vendorHint", "chromium").catch(() => null);
  await page.selectOption("#scanMode", "active").catch(() => null);
  await page.selectOption("#hashRounds", "2").catch(() => null);
  await page.fill("#entropyDepth", "8").catch(() => null);
  await page.check("#extendedSignals").catch(() => null);
  await page.check("#canvasProbe").catch(() => null);
  await page.check("#strictMode").catch(() => null);
  await page.click("#warmCacheButton").catch(() => null);
  await page.click("#lockConfigButton").catch(() => null);
  await page.click("#generateFingerprintButton").catch(() => null);
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
    no_broadcastchannel: !/\bBroadcastChannel\b/.test(code),
    no_iframe: !/<iframe\b|createElement\(["']iframe/.test(code),
    no_eval: !/\beval\s*\(/.test(code),
    no_new_function: !/new\s+Function\b/.test(code),
    no_wasm: !/\bWebAssembly\b/.test(code),
    no_remote_loading: !/https?:\/\//.test(code),
    no_anti_debug: !/debugProtection|selfDefending|devtools|puppeteer|playwright/i.test(code),
  };
}

async function taskJsonClean() {
  const text = await readFile(path.join(visibleRoot, "task.json"), "utf8");
  const leaks = ["src/z0/k7/q3/t9.js", "slot 23", "oracle", "hidden", "build_meta", "export u", "deriveBrowserFingerprint"];
  return leaks.every((item) => !text.includes(item));
}

async function staticChecks() {
  const bundle = await readFile(bundlePath, "utf8");
  const captureBundleText = await readFile(captureBundle, "utf8");
  const assets = (await readdir(path.join(distRoot, "assets"))).filter((name) => name.endsWith(".js"));
  checks.single_bundle = assets.length === 1 && assets[0] === "calendar.app.bundle.js";
  checks.bundle_visible = linesOf(captureBundleText) > 1;
  checks.dist_capture_in_sync = bundle === captureBundleText;
  checks.no_sourcemap = !/sourceMappingURL/.test(bundle);
  Object.assign(checks, forbiddenStatus(bundle));
  checks.decoy_file_count = await countByFolder("src/z0/x", /^x\d\d\.js$/) === 44;
  checks.vendor_file_count = await countByFolder("src/z0/v", /^v\d\d\.js$/) === 25;
  checks.task_json_clean = await taskJsonClean();
  checks.hidden_files_present = Boolean(await stat(path.join(hiddenRoot, "oracle.hidden.json")).catch(() => null)) && Boolean(await stat(path.join(hiddenRoot, "build_meta.hidden.json")).catch(() => null));
  checks.hidden_files_not_visible = !Boolean(await stat(path.join(visibleRoot, "oracle.hidden.json")).catch(() => null)) && !Boolean(await stat(path.join(visibleRoot, "src")).catch(() => null));
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  checks.oracle_dual_track = Boolean(oracle.primary_anchor?.answer_function && oracle.primary_anchor?.source_function) && oracle.role_oracle.every((row) => row.answer_function && row.source_function);
  const task = JSON.parse(await readFile(path.join(visibleRoot, "task.json"), "utf8"));
  checks.response_schema_present = Boolean(task.answer_format?.response_schema?.function_name && task.answer_format?.response_schema?.slice);
  const source = await readFile(path.join(hiddenRoot, "src/z0/k7/q3/t9.js"), "utf8");
  checks.answer_source_present = /export\s+function\s+u\b/.test(source) && /slot:\s*23/.test(source) && /Uint8Array/.test(source);
}

async function main() {
  await staticChecks();
  const { server, baseUrl } = await createServer();
  const browser = await launchBrowser();
  let first = null;
  let second = null;
  let changedVendor = null;
  let changedMode = null;
  let changedRounds = null;
  try {
    const context = await browser.newContext();
    first = await scenario(context, baseUrl, "chromium", "active", "2", true);
    second = await scenario(context, baseUrl, "chromium", "active", "2", true);
    changedVendor = await scenario(context, baseUrl, "gecko", "active", "2", true);
    changedMode = await scenario(context, baseUrl, "chromium", "deep", "2", true);
    changedRounds = await scenario(context, baseUrl, "chromium", "active", "3", true);
    checks.standard_interaction = Boolean(first.output);
    checks.console_log_found = Boolean(first.output);
    checks.target_field_exists = Boolean(first.output && first.output.browser_fp);
    checks.format_ok = /^fp_[a-z0-9]{12}$/.test(first.output?.browser_fp || "");
    checks.stable_output = first.output?.browser_fp === second.output?.browser_fp;
    checks.vendor_sensitive = Boolean(changedVendor.output && changedVendor.output.browser_fp !== first.output.browser_fp);
    checks.mode_sensitive = Boolean(changedMode.output && changedMode.output.browser_fp !== first.output.browser_fp);
    checks.rounds_sensitive = Boolean(changedRounds.output && changedRounds.output.browser_fp !== first.output.browser_fp);
    const miscValues = first.misc.concat(second.misc, changedVendor.misc, changedMode.misc, changedRounds.misc);
    checks.diversion_debug_seen = miscValues.some((value) => value && value.action === "fingerprint.shadow.action");
    checks.diversions_not_target = miscValues.every((value) => !(value && typeof value === "object" && Object.hasOwn(value, "browser_fp")));
    checks.blocked_bundle_stops_output = await blocked(context, baseUrl);
    await context.close();
  } finally {
    await browser.close();
    server.close();
  }
  const passed = Object.values(checks).every(Boolean);
  console.log(JSON.stringify({ case_id: caseId, passed, observed: first && first.output, changed: { vendor: changedVendor && changedVendor.output, mode: changedMode && changedMode.output, rounds: changedRounds && changedRounds.output }, checks }, null, 2));
  if (!passed) process.exit(1);
}

main().catch((error) => {
  console.error(JSON.stringify({ case_id: caseId, passed: false, error: String(error && error.stack || error) }, null, 2));
  process.exit(1);
});
