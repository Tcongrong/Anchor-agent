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
const bundlePath = path.join(assetsRoot, "listing.app.bundle.js");

const checks = {
  page_load: false,
  controls_exist: false,
  entry_click: false,
  console_key_exists: false,
  key_format_valid: false,
  same_input_stable: false,
  different_status_changes: false,
  different_region_changes: false,
  different_amount_changes: false,
  different_sort_changes: false,
  different_page_changes: false,
  archived_flag_changes: false,
  decoy_outputs_not_target: false,
  decoy_outputs_not_pattern: false,
  pushstate_carries_same_key: false,
  share_link_not_target: false,
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
};

const requirements = new Map([
  ["src/host/index.html", 160],
  ["src/host/styles.css", 320],
  ["src/host/favicon.svg", 30],
  ["src/z0/m8/q2/s5.js", 520],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 260);

const KEY_PATTERN = /^qs_[a-z0-9]{16}$/;

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
        if (value && typeof value === "object" && value.action === "listing.filter" && typeof value.query_key === "string") {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(browser, baseUrl, overrides = {}) {
  const opts = {
    status: "open",
    region: "west",
    amount: "500",
    sort: "recent",
    page: "2",
    archived: true,
    ...overrides,
  };
  const context = await browser.newContext();
  const page = await context.newPage();
  const misc = [];
  page.on("console", async (message) => {
    if (message.type() === "debug" || message.type() === "info" || message.type() === "log") {
      try {
        const value = await message.args()[0]?.jsonValue();
        if (value && !(value.action === "listing.filter" && value.query_key)) misc.push(value);
      } catch {}
    }
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.selectOption("#statusFilter", opts.status);
  await page.selectOption("#regionFilter", opts.region);
  await page.fill("#minAmount", opts.amount);
  await page.selectOption("#sortOrder", opts.sort);
  await page.fill("#pageInput", opts.page);
  if (opts.archived) await page.check("#includeArchived");
  const got = targetPromise(page);
  await page.click("#applyFilters");
  const output = await got;
  await page.waitForTimeout(150);
  const search = new URL(page.url()).search;
  const shadows = await page.evaluate(() => ({
    data: { ...document.documentElement.dataset },
    keys: Object.keys(window).filter((key) => key.startsWith("__s_shadow_") || key === "__ls_view" || key === "__ls_share" || key === "__ls_share_record").map((key) => window[key]),
  }));
  await page.close();
  await context.close();
  return { output, misc, shadows, search };
}

async function blocked(browser, baseUrl) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.route("**/assets/listing.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.selectOption("#statusFilter", "open").catch(() => null);
  await page.selectOption("#regionFilter", "west").catch(() => null);
  await page.fill("#minAmount", "500").catch(() => null);
  await page.selectOption("#sortOrder", "recent").catch(() => null);
  await page.fill("#pageInput", "2").catch(() => null);
  await page.check("#includeArchived").catch(() => null);
  const got = targetPromise(page, 800);
  await page.click("#applyFilters").catch(() => null);
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
    /serializeQueryState|queryStateFrame/.test(bundleCode) &&
    /sort_ref|export_ref/.test(bundleCode);
  checks.bundle_contains_call_site = /console/.test(bundleCode) && /pushState/.test(bundleCode);

  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    const responses = [];
    page.on("response", (response) => responses.push(response.url()));
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = (await page.title()) === "Listing Filter";
    checks.controls_exist =
      (await page.locator("#statusFilter, #regionFilter, #minAmount, #sortOrder, #pageInput, #includeArchived, #applyFilters").count()) === 7 &&
      (await page.getAttribute("#applyFilters", "data-k")) === "4:52:2";
    checks.bundle_visible_in_devtools_sources = responses.some((url) => url.endsWith("/assets/listing.app.bundle.js"));
    await page.close();

    const first = await scenario(browser, baseUrl);
    const key = first.output?.query_key;
    checks.entry_click = Boolean(first.output);
    checks.console_key_exists = typeof key === "string";
    checks.key_format_valid = KEY_PATTERN.test(key || "");
    const second = await scenario(browser, baseUrl);
    checks.same_input_stable = key === second.output?.query_key;
    const changedStatus = await scenario(browser, baseUrl, { status: "pending" });
    const changedRegion = await scenario(browser, baseUrl, { region: "east" });
    const changedAmount = await scenario(browser, baseUrl, { amount: "750" });
    const changedSort = await scenario(browser, baseUrl, { sort: "oldest" });
    const changedPage = await scenario(browser, baseUrl, { page: "3" });
    const changedArchived = await scenario(browser, baseUrl, { archived: false });
    checks.different_status_changes = key !== changedStatus.output?.query_key;
    checks.different_region_changes = key !== changedRegion.output?.query_key;
    checks.different_amount_changes = key !== changedAmount.output?.query_key;
    checks.different_sort_changes = key !== changedSort.output?.query_key;
    checks.different_page_changes = key !== changedPage.output?.query_key;
    checks.archived_flag_changes = key !== changedArchived.output?.query_key;
    const decoys = [
      ...first.misc.flatMap((x) => (x ? [x.mix, x.sort_ref, x.export_ref, x.query_key, x.shadow_query] : [])),
      ...Object.values(first.shadows.data || {}),
      ...(first.shadows.keys || []),
    ].filter((value) => typeof value === "string");
    checks.decoy_outputs_not_target = decoys.length > 0 && decoys.every((value) => value !== key);
    checks.decoy_outputs_not_pattern = decoys.length > 0 && decoys.every((value) => !KEY_PATTERN.test(value));
    checks.pushstate_carries_same_key = typeof first.search === "string" && new URLSearchParams(first.search.slice(1)).get("q") === key;
    checks.share_link_not_target =
      typeof first.shadows.keys?.find?.((v) => typeof v === "string" && v.startsWith("/listing/shared")) === "string"
        ? first.shadows.keys.every((v) => v !== key)
        : true;
    checks.app_bundle_required = await blocked(browser, baseUrl);
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  const passed = Object.values(checks).every(Boolean);
  console.log(JSON.stringify({ case_id: "case013_query_state_serialization", passed, checks }, null, 2));
  if (!passed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
