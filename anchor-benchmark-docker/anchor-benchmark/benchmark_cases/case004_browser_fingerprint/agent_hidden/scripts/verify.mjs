import http from "node:http";
import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const bundleName = "dashboard.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const capRel = "captures/devtools-source-dump/127.0.0.1_4173/assets/dashboard.app.bundle.js";
const capturedBundlePath = path.join(visibleRoot, capRel);
const caseId = "case004_browser_fingerprint";

const checks = {
  visible_task_exists: false,
  visible_captures_exist: false,
  task_response_schema: false,
  task_no_private_leaks: false,
  hidden_files_present: false,
  page_load: false,
  controls_exist: false,
  button_action: false,
  standard_interaction: false,
  console_object: false,
  browser_fingerprint_exists: false,
  browser_fingerprint_format_valid: false,
  same_input_stable: false,
  signal_change_changes: false,
  canvas_change_changes: false,
  timezone_change_changes: false,
  decoys_not_target: false,
  runtime_no_worker_requests: false,
  dist_no_worker_bundle: false,
  no_sourcemap: false,
  bundle_visible: false,
  bundle_line_count: false,
  bundle_not_single_line: false,
  bundle_required: false,
  all_files_minimum_lines: false,
  decoy_file_count: false,
  vendor_file_count: false,
  no_worker: false,
  no_sharedworker: false,
  no_serviceworker: false,
  no_postmessage: false,
  no_broadcastchannel: false,
  no_iframe: false,
  no_eval: false,
  no_new_function: false,
  no_wasm: false,
  oracle_schema: false,
  oracle_hashes_match: false,
  oracle_complete_functions: false,
  build_meta_complete: false
};

const requirements = new Map([
  ["src/host/index.html", 180],
  ["src/host/styles.css", 360],
  ["src/host/favicon.svg", 30],
  ["src/z4/q8/r2/m5.js", 520]
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z4/x/d${String(i).padStart(2, "0")}.js`, 160);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z4/v/v${String(i).padStart(2, "0")}.js`, 240);

function linesOf(text) {
  return text.trimEnd().split(/\r?\n/).length;
}

function sha(text) {
  return createHash("sha256").update(text).digest("hex");
}

async function readFiles(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
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
    const text = await readFile(path.join(hiddenRoot, relative), "utf8");
    if (linesOf(text) < required) return false;
  }
  const all = await readFiles(path.join(hiddenRoot, "src"));
  let src = 0;
  let z4 = 0;
  for (const file of all.filter((item) => /\.(js|html|css|svg)$/.test(item))) {
    const relative = path.relative(hiddenRoot, file).replaceAll("\\", "/");
    const count = linesOf(await readFile(file, "utf8"));
    src += count;
    if (relative.startsWith("src/z4/")) z4 += count;
  }
  return src >= 14000 && z4 >= 12000;
}

function createServer() {
  const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".svg": "image/svg+xml; charset=utf-8"
  };
  const server = http.createServer(async (request, response) => {
    const url = new URL(request.url || "/", "http://127.0.0.1");
    if (url.pathname === "/api/fingerprint/scan") {
      response.writeHead(204, { "Cache-Control": "no-store" });
      response.end();
      return;
    }
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
      response.writeHead(200, {
        "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
        "Cache-Control": "no-store"
      });
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
      ? [
          "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
          "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
          "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
        ]
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
        if (value && typeof value === "object" && value.action === "fingerprint.scan" && typeof value.browser_fingerprint === "string") {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(context, baseUrl, signalLevel, driver, timezone) {
  const page = await context.newPage();
  const misc = [];
  const responses = [];
  page.on("response", (response) => responses.push(response.url()));
  page.on("console", async (message) => {
    if (!["debug", "info", "log"].includes(message.type())) return;
    try {
      const value = await message.args()[0]?.jsonValue();
      if (value && !(value.action === "fingerprint.scan" && value.browser_fingerprint)) misc.push(value);
    } catch {}
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.selectOption("#signalLevel", signalLevel);
  await page.selectOption("#canvasDriver", driver);
  await page.fill("#timezoneSeed", timezone);
  await page.check("#probeEnabled");
  const got = targetPromise(page);
  await page.click("#initiateProbeBtn");
  const output = await got;
  const shadows = await page.evaluate(() => ({ ...document.documentElement.dataset, cache: window.__fpShadowCache || [] }));
  await page.close();
  return { output, misc, shadows, responses };
}

async function blocked(context, baseUrl) {
  const page = await context.newPage();
  await page.route("**/assets/dashboard.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.selectOption("#signalLevel", "full").catch(() => null);
  await page.selectOption("#canvasDriver", "hardware").catch(() => null);
  await page.fill("#timezoneSeed", "UTC-8").catch(() => null);
  await page.check("#probeEnabled").catch(() => null);
  const got = targetPromise(page, 1000);
  await page.click("#initiateProbeBtn").catch(() => null);
  const output = await got;
  await page.close();
  return output === null;
}

function isCompleteFunction(text) {
  const trimmed = text.trim();
  if (!/^(?:async\s+)?function\s*\*?\s*[A-Za-z_$][\w$]*\s*\(/.test(trimmed)) return false;
  if (!trimmed.endsWith("}")) return false;
  let depth = 0;
  let quote = "";
  let escape = false;
  for (const ch of trimmed) {
    if (escape) {
      escape = false;
      continue;
    }
    if (ch === "\\") {
      escape = true;
      continue;
    }
    if (quote) {
      if (ch === quote) quote = "";
      continue;
    }
    if (ch === "'" || ch === "\"" || ch === "`") {
      quote = ch;
      continue;
    }
    if (ch === "{") depth += 1;
    else if (ch === "}") depth -= 1;
    if (depth < 0) return false;
  }
  return depth === 0;
}

async function taskSchemaClean() {
  const task = JSON.parse(await readFile(path.join(visibleRoot, "task.json"), "utf8"));
  const schema = task.answer_format?.response_schema;
  const forbidden = ["src/z4/q8/r2/m5.js", "slot 23", "createReducer", "source_function", "answer_function", "captured_span", "oracle.hidden"];
  const taskText = JSON.stringify(task).toLowerCase();
  return {
    schemaOk: task.answer_format?.response_type === "json" && Boolean(schema?.function_name && schema?.file && schema?.slice?.fields?.start_offset && schema?.slice?.fields?.end_offset && schema?.slice?.fields?.code),
    noLeaks: forbidden.every((token) => !taskText.includes(token.toLowerCase()))
  };
}

async function oracleChecks() {
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  const code = await readFile(capturedBundlePath, "utf8");
  const rows = [oracle.primary_anchor, ...oracle.role_oracle];
  const schemaOk = Boolean(
    oracle.primary_anchor?.answer_function &&
    oracle.primary_anchor?.source_function &&
    oracle.primary_anchor?.captured_span &&
    oracle.role_oracle.every((entry) => entry.answer_function && entry.source_function && entry.captured_span)
  );
  const hashesOk = rows.every((entry) => {
    const span = entry.captured_span;
    const slice = code.slice(span.start_offset, span.end_offset);
    return sha(slice) === span.sha256;
  });
  const completeOk = rows.every((entry) => {
    const span = entry.captured_span;
    return isCompleteFunction(code.slice(span.start_offset, span.end_offset));
  });
  return { schemaOk, hashesOk, completeOk };
}

async function main() {
  checks.visible_task_exists = Boolean(await stat(path.join(visibleRoot, "task.json")).catch(() => null));
  checks.visible_captures_exist = Boolean(await stat(capturedBundlePath).catch(() => null)) && Boolean(await stat(path.join(visibleRoot, "captures", "devtools-source-dump", "manifest.json")).catch(() => null));
  const taskClean = await taskSchemaClean();
  checks.task_response_schema = taskClean.schemaOk;
  checks.task_no_private_leaks = taskClean.noLeaks;
  checks.hidden_files_present = Boolean(await stat(path.join(hiddenRoot, "oracle.hidden.json")).catch(() => null)) && Boolean(await stat(path.join(hiddenRoot, "build_meta.hidden.json")).catch(() => null));
  checks.all_files_minimum_lines = await lineChecks();
  checks.decoy_file_count = await countByFolder("src/z4/x", /^d\d\d\.js$/) === 44;
  checks.vendor_file_count = await countByFolder("src/z4/v", /^v\d\d\.js$/) === 25;

  const buildMeta = JSON.parse(await readFile(path.join(hiddenRoot, "build_meta.hidden.json"), "utf8"));
  checks.build_meta_complete = Boolean(buildMeta.case_id === caseId && buildMeta.captured_bundle?.includes(capRel) && buildMeta.primary_anchor?.answer_function);

  const bundleCode = await readFile(bundlePath, "utf8");
  const capturedCode = await readFile(capturedBundlePath, "utf8");
  checks.bundle_line_count = linesOf(bundleCode) >= 9000;
  checks.bundle_not_single_line = linesOf(bundleCode) > 1;
  checks.bundle_visible = capturedCode === bundleCode;
  const assetFiles = await readdir(assetsRoot);
  checks.no_sourcemap = !/sourceMappingURL/i.test(bundleCode) && assetFiles.every((file) => !/\.map$/i.test(file));
  checks.dist_no_worker_bundle = assetFiles.every((file) => !/worker/i.test(file));
  checks.no_worker = !/new\s+Worker|Worker\s*\(/i.test(bundleCode);
  checks.no_sharedworker = !/SharedWorker/i.test(bundleCode);
  checks.no_serviceworker = !/serviceWorker\.register/i.test(bundleCode);
  checks.no_postmessage = !/postMessage\s*\(/i.test(bundleCode);
  checks.no_broadcastchannel = !/BroadcastChannel/i.test(bundleCode);
  checks.no_iframe = !/<iframe|createElement\(['"]iframe/i.test(bundleCode);
  checks.no_eval = !/eval\s*\(/i.test(bundleCode);
  checks.no_new_function = !/new\s+Function/i.test(bundleCode);
  checks.no_wasm = !/WebAssembly/i.test(bundleCode);

  const oracleResult = await oracleChecks();
  checks.oracle_schema = oracleResult.schemaOk;
  checks.oracle_hashes_match = oracleResult.hashesOk;
  checks.oracle_complete_functions = oracleResult.completeOk;

  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const inspectContext = await browser.newContext();
    const page = await inspectContext.newPage();
    const responses = [];
    page.on("response", (response) => responses.push(response.url()));
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = await page.title() === "Browser Fingerprint Probe";
    checks.controls_exist = await page.locator("#signalLevel, #canvasDriver, #timezoneSeed, #probeEnabled, #initiateProbeBtn").count() === 5;
    checks.button_action = await page.locator("#initiateProbeBtn").getAttribute("data-action") === "fingerprint.scan";
    checks.bundle_visible = checks.bundle_visible && responses.some((url) => url.endsWith("/assets/dashboard.app.bundle.js"));
    await inspectContext.close();

    const context = await browser.newContext();
    const first = await scenario(context, baseUrl, "full", "hardware", "UTC-8");
    const key = first.output?.browser_fingerprint;
    checks.runtime_no_worker_requests = first.responses.every((url) => !/worker/i.test(url));
    checks.standard_interaction = Boolean(first.output);
    checks.console_object = first.output && typeof first.output === "object";
    checks.browser_fingerprint_exists = typeof key === "string";
    checks.browser_fingerprint_format_valid = /^[a-z0-9]{16}$/.test(key || "");
    const second = await scenario(context, baseUrl, "full", "hardware", "UTC-8");
    const third = await scenario(context, baseUrl, "full", "hardware", "UTC-8");
    checks.same_input_stable = key === second.output?.browser_fingerprint && key === third.output?.browser_fingerprint;
    const signalChanged = await scenario(context, baseUrl, "minimal", "hardware", "UTC-8");
    const driverChanged = await scenario(context, baseUrl, "full", "software", "UTC-8");
    const tzChanged = await scenario(context, baseUrl, "full", "hardware", "UTC+9");
    checks.signal_change_changes = key !== signalChanged.output?.browser_fingerprint;
    checks.canvas_change_changes = key !== driverChanged.output?.browser_fingerprint;
    checks.timezone_change_changes = key !== tzChanged.output?.browser_fingerprint;
    const decoys = [
      ...first.misc.flatMap((item) => item ? [item.fp_shadow, item.fp_preview, item.browser_fingerprint] : []),
      ...Object.values(first.shadows || {}).flatMap((value) => Array.isArray(value) ? value.map((item) => item.value) : [value])
    ].filter(Boolean);
    checks.decoys_not_target = decoys.length > 0 && decoys.every((value) => value !== key);
    checks.bundle_required = await blocked(await browser.newContext(), baseUrl);
    await context.close();
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  const passed = Object.values(checks).every(Boolean);
  console.log(JSON.stringify({ case_id: caseId, passed, checks }, null, 2));
  if (!passed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
