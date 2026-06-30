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
const assetsRoot = path.join(distRoot, "assets");
const bundlePath = path.join(assetsRoot, "statebench.app.bundle.js");
const caseId = "case004_state_encoding";

const checks = {
  dist_index_exists: false,
  dist_bundle_exists: false,
  page_load: false,
  controls_exist: false,
  shortcut_action: false,
  standard_interaction: false,
  console_state_code_exists: false,
  state_code_format_valid: false,
  same_input_stable: false,
  range_change_changes: false,
  metric_change_changes: false,
  region_change_changes: false,
  decoy_outputs_not_target: false,
  bundle_loaded: false,
  bundle_not_blob_or_data: false,
  app_bundle_required: false,
  bundle_minimum_lines: false,
  bundle_not_single_line: false,
  all_files_minimum_lines: false,
  decoy_file_count: false,
  vendor_file_count: false,
  no_sourcemap: false,
  no_worker_bundle: false,
  no_worker_constructor: false,
  no_service_worker: false,
  no_shared_worker: false,
  no_broadcast_channel: false,
  no_post_message: false,
  no_iframe: false,
  no_eval: false,
  no_new_function: false,
  no_wasm: false,
  no_blob_data_core: false,
  task_json_clean: false,
  bundle_contains_answer_code: false,
  bundle_contains_call_site: false,
};

const requirements = new Map([
  ["src/host/index.html", 180],
  ["src/host/styles.css", 360],
  ["src/host/favicon.svg", 30],
  ["src/z4/a0.js", 120],
  ["src/z4/b1.js", 160],
  ["src/z4/c2.js", 160],
  ["src/z4/d3.js", 180],
  ["src/z4/e4.js", 260],
  ["src/z4/f5.js", 260],
  ["src/z4/g6.js", 240],
  ["src/z4/h0.js", 180],
  ["src/z4/h1.js", 180],
  ["src/z4/h2.js", 180],
  ["src/z4/h3.js", 180],
  ["src/z4/h4.js", 180],
  ["src/z4/h5.js", 180],
  ["src/z4/i0.js", 300],
  ["src/z4/j0.js", 340],
  ["src/z4/k0.js", 280],
  ["src/z4/l0.js", 300],
  ["src/z4/m0.js", 640],
  ["src/z4/n0.js", 320],
  ["src/z4/q8/r2/m5.js", 560],
]);
for (let i = 0; i < 44; i += 1) {
  requirements.set(`src/z4/x/d${String(i).padStart(2, "0")}.js`, 180);
}
for (let i = 0; i < 25; i += 1) {
  requirements.set(`src/z4/v/v${String(i).padStart(2, "0")}.js`, 260);
}

function linesOf(text) {
  return text.split(/\r?\n/).length;
}

function bundleContainsAnswerCode(bundleCode) {
  return /makeBody/.test(bundleCode) && /createReducer/.test(bundleCode);
}

async function readFiles(dir, skipDirs = new Set(["node_modules"])) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const resolved = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) continue;
      out.push(...(await readFiles(resolved, skipDirs)));
    } else {
      out.push(resolved);
    }
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
  const all = await readFiles(hiddenRoot);
  let total = 0;
  let src = 0;
  let z4 = 0;
  for (const file of all.filter((item) => /\.(js|mjs|json|html|css|svg|md)$/.test(item))) {
    const relative = path.relative(hiddenRoot, file).replaceAll("\\", "/");
    if (relative.startsWith("dist/") || relative.startsWith("node_modules/")) continue;
    const count = linesOf(await readFile(file, "utf8"));
    total += count;
    if (relative.startsWith("src/")) src += count;
    if (relative.startsWith("src/z4/")) z4 += count;
  }
  return total >= 18140 && src >= 14090 && z4 >= 12090;
}

async function taskJsonClean() {
  const text = await readFile(path.join(visibleRoot, "task.json"), "utf8");
  const leaks = [
    "src/z4/q8/r2/m5.js",
    "slot 23",
    "reducer factory",
    "oracle",
    "hidden",
    "middleware",
    "state trampoline",
    "projection lattice",
    "createReducer",
  ];
  return leaks.every((token) => !text.toLowerCase().includes(token.toLowerCase()));
}

function createServer() {
  const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".svg": "image/svg+xml; charset=utf-8",
  };
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
      response.writeHead(200, {
        "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
        "Cache-Control": "no-store",
      });
      createReadStream(filePath).pipe(response);
    } catch {
      response.writeHead(404);
      response.end("Not found");
    }
  });
  return new Promise((resolve) =>
    server.listen(0, "127.0.0.1", () =>
      resolve({ server, baseUrl: `http://127.0.0.1:${server.address().port}/` }),
    ),
  );
}

async function launchBrowser() {
  try {
    return await chromium.launch({ headless: true });
  } catch {
    const candidates =
      process.platform === "win32"
        ? [
            "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
            "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
            "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
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
        if (value && typeof value === "object" && value.action === "state.capture" && typeof value.state_code === "string") {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(context, baseUrl, scope, format, env) {
  const page = await context.newPage();
  const misc = [];
  page.on("console", async (message) => {
    if (!["debug", "info", "log"].includes(message.type())) return;
    try {
      const value = await message.args()[0]?.jsonValue();
      if (value && !(value.action === "state.capture" && value.state_code)) misc.push(value);
    } catch {}
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.fill("#stateScope", scope);
  await page.selectOption("#encodingMode", format);
  await page.fill("#stateLane", env);
  const got = targetPromise(page);
  await page.focus("#stateScope");
  await page.keyboard.press("Control+Enter");
  const output = await got;
  const shadows = await page.evaluate(() => ({ ...document.documentElement.dataset }));
  await page.close();
  return { output, misc, shadows };
}

async function blocked(context, baseUrl) {
  const page = await context.newPage();
  await page.route("**/assets/statebench.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.fill("#stateScope", "profile-panel").catch(() => null);
  await page.selectOption("#encodingMode", "compact").catch(() => null);
  await page.fill("#stateLane", "primary").catch(() => null);
  const got = targetPromise(page, 1000);
  await page.focus("#stateScope").catch(() => null);
  await page.keyboard.press("Control+Enter").catch(() => null);
  const output = await got;
  await page.close();
  return output === null;
}

async function main() {
  checks.dist_index_exists = Boolean(await stat(path.join(distRoot, "index.html")).catch(() => null));
  checks.dist_bundle_exists = Boolean(await stat(bundlePath).catch(() => null));
  checks.all_files_minimum_lines = await lineChecks();
  checks.decoy_file_count = (await countByFolder("src/z4/x", /^d\d\d\.js$/)) === 44;
  checks.vendor_file_count = (await countByFolder("src/z4/v", /^v\d\d\.js$/)) === 25;
  checks.task_json_clean = await taskJsonClean();

  const bundleCode = await readFile(bundlePath, "utf8");
  const bundleLines = linesOf(bundleCode);
  checks.bundle_minimum_lines = bundleLines >= 9070;
  checks.bundle_not_single_line = bundleLines > 1;

  const assetFiles = await readdir(assetsRoot);
  checks.no_worker_bundle = assetFiles.every((file) => !/worker/i.test(file));
  checks.no_sourcemap = !/sourceMappingURL/i.test(bundleCode) && assetFiles.every((file) => !/\.map$/i.test(file));
  checks.no_worker_constructor = !/new\s+Worker|Worker\s*\(/i.test(bundleCode);
  checks.no_service_worker = !/serviceWorker\.register/i.test(bundleCode);
  checks.no_shared_worker = !/SharedWorker/i.test(bundleCode);
  checks.no_broadcast_channel = !/BroadcastChannel/i.test(bundleCode);
  checks.no_post_message = !/postMessage\s*\(/i.test(bundleCode);
  checks.no_iframe = !/<iframe|createElement\(['"]iframe/i.test(bundleCode);
  checks.no_eval = !/eval\s*\(/i.test(bundleCode);
  checks.no_new_function = !/new\s+Function/i.test(bundleCode);
  checks.no_wasm = !/WebAssembly/i.test(bundleCode);
  checks.no_blob_data_core = !/blob:|data:text\/javascript|data:application\/javascript/i.test(bundleCode);
  checks.bundle_not_blob_or_data = checks.no_blob_data_core;
  checks.bundle_contains_answer_code = bundleContainsAnswerCode(bundleCode);
  checks.bundle_contains_call_site =
    /console/.test(bundleCode) &&
    (/\.log\s*\(/.test(bundleCode) || /console\[[^\]]+\]\(/.test(bundleCode));

  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const inspectContext = await browser.newContext();
    const page = await inspectContext.newPage();
    const responses = [];
    page.on("response", (response) => responses.push(response.url()));
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = (await page.title()) === "State Encoding Console";
    checks.controls_exist =
      (await page.locator("#stateScope, #encodingMode, #stateLane, #captureButton").count()) === 4;
    checks.shortcut_action = (await page.locator("#stateScope").getAttribute("data-state-action")) === "state.capture";
    checks.bundle_loaded = responses.some((url) => url.endsWith("/assets/statebench.app.bundle.js"));
    await inspectContext.close();

    const context = await browser.newContext();
    const first = await scenario(context, baseUrl, "profile-panel", "compact", "primary");
    const sig = first.output?.state_code;
    checks.standard_interaction = Boolean(first.output);
    checks.console_state_code_exists = typeof sig === "string";
    checks.state_code_format_valid = /^[a-z0-9]{16}$/.test(sig || "");

    const second = await scenario(context, baseUrl, "profile-panel", "compact", "primary");
    const third = await scenario(context, baseUrl, "profile-panel", "compact", "primary");
    checks.same_input_stable = sig === second.output?.state_code && sig === third.output?.state_code;

    const scopeChanged = await scenario(context, baseUrl, "settings-drawer", "compact", "primary");
    const formatChanged = await scenario(context, baseUrl, "profile-panel", "stable", "primary");
    const envChanged = await scenario(context, baseUrl, "profile-panel", "compact", "secondary");
    checks.range_change_changes = sig !== scopeChanged.output?.state_code;
    checks.metric_change_changes = sig !== formatChanged.output?.state_code;
    checks.region_change_changes = sig !== envChanged.output?.state_code;

    const decoys = [
      ...first.misc.flatMap((item) => (item ? [item.shadow_key, item.preview_key, item.state_code] : [])),
      ...Object.values(first.shadows || {}),
    ].filter(Boolean);
    checks.decoy_outputs_not_target = decoys.length > 0 && decoys.every((value) => value !== sig);
    await context.close();

    checks.app_bundle_required = await blocked(await browser.newContext(), baseUrl);
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
