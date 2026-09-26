import http from "node:http";
import { createReadStream } from "node:fs";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const bundlePath = path.join(assetsRoot, "viewcache.app.bundle.js");

const checks = {
  page_load: false,
  controls_exist: false,
  entry_click: false,
  console_key_exists: false,
  key_format_valid: false,
  same_input_stable: false,
  different_owner_changes: false,
  different_mode_changes: false,
  different_density_changes: false,
  memoize_flag_changes: false,
  decoy_outputs_not_target: false,
  decoy_outputs_not_pattern: false,
  shadow_probe_differs: false,
  lru_holds_same_key: false,
  asset_cache_key_not_pattern: false,
  app_bundle_required: false,
  bundle_visible_in_devtools_sources: false,
  bundle_contains_answer_code: false,
  bundle_contains_call_site: false,
  bundle_minimum_lines: false,
  all_files_minimum_lines: false,
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
  no_math_random_in_path: false,
  no_date_now_in_path: false,
};

const requirements = new Map([
  ["src/host/index.html", 160],
  ["src/host/styles.css", 320],
  ["src/host/favicon.svg", 30],
  ["src/z0/y6/g4/z1.js", 520],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 260);

const KEY_PATTERN = /^ck_[a-f0-9]{16}$/;

function linesOf(text) {
  return text.split(/\r?\n/).length;
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

async function lineChecks() {
  for (const [relative, required] of requirements) {
    const text = await readFile(path.join(hiddenRoot, relative), "utf8");
    if (linesOf(text) < required) return false;
  }
  const all = await readFiles(hiddenRoot);
  let total = 0;
  let src = 0;
  let z0 = 0;
  for (const file of all.filter((item) => /\.(js|mjs|json|html|css|svg|md)$/.test(item))) {
    const relative = path.relative(hiddenRoot, file).replaceAll("\\", "/");
    if (relative.startsWith("dist/")) continue;
    const count = linesOf(await readFile(file, "utf8"));
    total += count;
    if (relative.startsWith("src/")) src += count;
    if (relative.startsWith("src/z0/")) z0 += count;
  }
  return total >= 18000 && src >= 14000 && z0 >= 12000;
}

function createServer() {
  const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".svg": "image/svg+xml",
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
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve({ server, baseUrl: `http://127.0.0.1:${server.address().port}/` })));
}

async function launchBrowser() {
  try {
    return await chromium.launch({ headless: true });
  } catch {
    const candidates =
      process.platform === "win32"
        ? [
            "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
            "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
            "C:/Program Files/Google/Chrome/Application/chrome.exe",
          ]
        : ["/usr/bin/google-chrome", "/usr/bin/chromium"];
    for (const executablePath of candidates) {
      try {
        await stat(executablePath);
        return await chromium.launch({ headless: true, executablePath });
      } catch {}
    }
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
        if (value && typeof value === "object" && value.action === "cache.materialize" && typeof value.cache_key === "string") {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(browser, baseUrl, overrides = {}) {
  const opts = {
    owner: "owner_3912",
    mode: "board",
    density: "balanced",
    memoize: true,
    ...overrides,
  };
  const context = await browser.newContext();
  const page = await context.newPage();
  const misc = [];
  const debugProbes = [];
  page.on("console", async (message) => {
    if (message.type() === "debug" || message.type() === "info" || message.type() === "log") {
      try {
        const value = await message.args()[0]?.jsonValue();
        if (value && !(value.action === "cache.materialize" && value.cache_key)) misc.push(value);
        if (value && typeof value.shadow_cache === "string") debugProbes.push(value.shadow_cache);
      } catch {}
    }
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.fill("#viewOwner", opts.owner);
  await page.selectOption("#viewMode", opts.mode);
  await page.selectOption("#density", opts.density);
  if (opts.memoize) await page.check("#memoize");
  const got = targetPromise(page);
  await page.click("#materializeView");
  const output = await got;
  await page.waitForTimeout(150);
  const shadows = await page.evaluate(() => ({
    data: { ...document.documentElement.dataset },
    keys: Object.keys(window)
      .filter((key) => key.startsWith("__v_shadow_") || ["__vc_view", "__vc_share", "__vc_asset_key", "__vc_lru", "__vc_evict"].includes(key))
      .map((key) => window[key]),
    lruKeys: window.__vc_lru instanceof Map ? [...window.__vc_lru.keys()] : null,
    lruSize: window.__vc_lru instanceof Map ? window.__vc_lru.size : 0,
  }));
  await page.close();
  await context.close();
  return { output, misc, debugProbes, shadows };
}

async function blocked(browser, baseUrl) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.route("**/assets/viewcache.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.fill("#viewOwner", "owner_3912").catch(() => null);
  await page.selectOption("#viewMode", "board").catch(() => null);
  await page.selectOption("#density", "balanced").catch(() => null);
  await page.check("#memoize").catch(() => null);
  const got = targetPromise(page, 800);
  await page.click("#materializeView").catch(() => null);
  const output = await got;
  await page.close();
  await context.close();
  return output === null;
}

async function main() {
  checks.all_files_minimum_lines = await lineChecks();
  const bundleCode = await readFile(bundlePath, "utf8");
  const bundleLines = linesOf(bundleCode);
  checks.bundle_minimum_lines = bundleLines >= 9000;
  checks.no_sourcemap = !/sourceMappingURL/i.test(bundleCode);
  const assetFiles = await readdir(assetsRoot);
  checks.no_worker_bundle = assetFiles.every((file) => !/worker/i.test(file));
  checks.no_worker_constructor = !/new\s+Worker/i.test(bundleCode);
  checks.no_service_worker = !/serviceWorker\s*\./i.test(bundleCode);
  checks.no_shared_worker = !/SharedWorker/i.test(bundleCode);
  checks.no_broadcast_channel = !/BroadcastChannel/i.test(bundleCode);
  checks.no_post_message = !/postMessage\s*\(/i.test(bundleCode);
  checks.no_iframe = !/<iframe|createElement\(['\"]iframe/i.test(bundleCode);
  checks.no_eval = !/eval\s*\(/i.test(bundleCode);
  checks.no_new_function = !/new\s+Function/i.test(bundleCode);
  checks.no_wasm = !/WebAssembly/i.test(bundleCode);
  checks.bundle_contains_answer_code =
    /imul/.test(bundleCode) &&
    /digestViewState|viewFrame/.test(bundleCode) &&
    /evict_ref|asset_ref/.test(bundleCode);
  checks.bundle_contains_call_site = /console/.test(bundleCode) && /__vc_lru/.test(bundleCode);

  const pathSources = [];
  for (const rel of ["src/z0/y6/g4/z1.js", "src/z0/l0.js", "src/z0/n0.js", "src/z0/o0.js", "src/z0/e4.js", "src/z0/b1.js", "src/z0/c2.js", "src/z0/d3.js", "src/z0/f5.js", "src/z0/g6.js", "src/z0/h7.js", "src/z0/i8.js", "src/z0/j9.js", "src/z0/k0.js", "src/z0/k1.js", "src/z0/k2.js", "src/z0/m0.js"]) {
    pathSources.push(await readFile(path.join(hiddenRoot, rel), "utf8"));
  }
  const pathText = pathSources.join("\n");
  checks.no_math_random_in_path = !/Math\.random/.test(pathText);
  checks.no_date_now_in_path = !/Date\.now|new Date/.test(pathText);

  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    const responses = [];
    page.on("response", (response) => responses.push(response.url()));
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = (await page.title()) === "View Composer";
    checks.controls_exist =
      (await page.locator("#viewOwner, #viewMode, #density, #memoize, #materializeView").count()) === 5 &&
      (await page.getAttribute("#materializeView", "data-k")) === "3:67:5";
    checks.bundle_visible_in_devtools_sources = responses.some((url) => url.endsWith("/assets/viewcache.app.bundle.js"));
    await page.close();

    const first = await scenario(browser, baseUrl);
    const key = first.output?.cache_key;
    checks.entry_click = Boolean(first.output);
    checks.console_key_exists = typeof key === "string";
    checks.key_format_valid = KEY_PATTERN.test(key || "");
    const second = await scenario(browser, baseUrl);
    checks.same_input_stable = key === second.output?.cache_key;
    const changedOwner = await scenario(browser, baseUrl, { owner: "owner_3913" });
    const changedMode = await scenario(browser, baseUrl, { mode: "list" });
    const changedDensity = await scenario(browser, baseUrl, { density: "compact" });
    const changedMemo = await scenario(browser, baseUrl, { memoize: false });
    checks.different_owner_changes = key !== changedOwner.output?.cache_key;
    checks.different_mode_changes = key !== changedMode.output?.cache_key;
    checks.different_density_changes = key !== changedDensity.output?.cache_key;
    checks.memoize_flag_changes = key !== changedMemo.output?.cache_key;
    const decoys = [
      ...first.misc.flatMap((x) => (x ? [x.mix, x.evict_ref, x.asset_ref, x.cache_key, x.shadow_cache] : [])),
      ...Object.values(first.shadows.data || {}),
      ...(first.shadows.keys || []).filter((value) => typeof value === "string" || typeof value === "number"),
    ].filter((value) => typeof value === "string");
    checks.decoy_outputs_not_target = decoys.length > 0 && decoys.every((value) => value !== key);
    checks.decoy_outputs_not_pattern = decoys.length > 0 && decoys.every((value) => !KEY_PATTERN.test(value));
    checks.shadow_probe_differs =
      first.debugProbes.length > 0 && first.debugProbes.every((probe) => probe !== key);
    checks.lru_holds_same_key =
      Array.isArray(first.shadows.lruKeys) && first.shadows.lruKeys.includes(key) && first.shadows.lruSize >= 1;
    const assetKey = await readFile(path.join(hiddenRoot, "src", "z0", "n0.js"), "utf8");
    checks.asset_cache_key_not_pattern = /as_/.test(assetKey);
    checks.app_bundle_required = await blocked(browser, baseUrl);
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  const passed = Object.values(checks).every(Boolean);
  console.log(JSON.stringify({ case_id: "case013_cache_key_digest", passed, checks }, null, 2));
  if (!passed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
