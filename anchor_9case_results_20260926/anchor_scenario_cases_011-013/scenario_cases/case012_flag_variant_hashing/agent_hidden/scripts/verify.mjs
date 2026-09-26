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
const bundlePath = path.join(assetsRoot, "assign.app.bundle.js");

const checks = {
  page_load: false,
  controls_exist: false,
  entry_click: false,
  console_variant_exists: false,
  variant_format_valid: false,
  same_input_stable: false,
  different_user_changes: false,
  different_flag_changes: false,
  arm_distribution_covers_eight: false,
  target_differs_from_decoy_probe: false,
  decoy_outputs_not_target: false,
  decoy_outputs_not_pattern: false,
  storage_persisted_same_variant: false,
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
  ["src/z0/h4/r8/n2.js", 520],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 260);

const VARIANT_PATTERN = /^variant_[a-h]$/;

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
            "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
            "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
            "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
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
        if (value && typeof value === "object" && value.action === "flag.assign" && typeof value.variant === "string") {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(browser, baseUrl, userKey, flag) {
  const context = await browser.newContext();
  const page = await context.newPage();
  const misc = [];
  const debugProbes = [];
  page.on("console", async (message) => {
    if (message.type() === "debug" || message.type() === "info" || message.type() === "log") {
      try {
        const value = await message.args()[0]?.jsonValue();
        if (value && !(value.action === "flag.assign" && value.variant)) misc.push(value);
        if (value && typeof value.variant_probe === "string") debugProbes.push(value.variant_probe);
      } catch {}
    }
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.fill("#userKey", userKey);
  await page.selectOption("#flagSelect", flag);
  await page.check("#stickyToggle");
  const got = targetPromise(page);
  await page.click("#assignVariant");
  const output = await got;
  await page.waitForTimeout(150);
  const stored = await page.evaluate(() => {
    try {
      return window.localStorage.getItem("ff_assignment");
    } catch {
      return null;
    }
  });
  const shadows = await page.evaluate(() => ({
    data: { ...document.documentElement.dataset },
    keys: Object.keys(window).filter((key) => key.startsWith("__f_shadow_")).map((key) => window[key]),
  }));
  await page.close();
  await context.close();
  return { output, misc, debugProbes, shadows, stored };
}

async function blocked(browser, baseUrl) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.route("**/assets/assign.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.fill("#userKey", "user_4471").catch(() => null);
  await page.selectOption("#flagSelect", "checkout_redesign").catch(() => null);
  await page.check("#stickyToggle").catch(() => null);
  const got = targetPromise(page, 800);
  await page.click("#assignVariant").catch(() => null);
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
    /computeVariantBucket/.test(bundleCode) &&
    /sticky_ref|rollout_ref/.test(bundleCode);
  checks.bundle_contains_call_site = /console/.test(bundleCode) && /localStorage/.test(bundleCode);

  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    const responses = [];
    page.on("response", (response) => responses.push(response.url()));
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = (await page.title()) === "Experiment Console";
    checks.controls_exist =
      (await page.locator("#userKey, #flagSelect, #stickyToggle, #assignVariant").count()) === 4 &&
      (await page.getAttribute("#assignVariant", "data-k")) === "7:91:4";
    checks.bundle_visible_in_devtools_sources = responses.some((url) => url.endsWith("/assets/assign.app.bundle.js"));
    await page.close();

    const first = await scenario(browser, baseUrl, "user_4471", "checkout_redesign");
    const code = first.output?.variant;
    checks.entry_click = Boolean(first.output);
    checks.console_variant_exists = typeof code === "string";
    checks.variant_format_valid = VARIANT_PATTERN.test(code || "");
    const second = await scenario(browser, baseUrl, "user_4471", "checkout_redesign");
    checks.same_input_stable = code === second.output?.variant;
    const changedUser = await scenario(browser, baseUrl, "user_4471x", "checkout_redesign");
    checks.different_user_changes = code !== changedUser.output?.variant;
    const changedFlag = await scenario(browser, baseUrl, "user_4471", "search_autocomplete");
    checks.different_flag_changes = code !== changedFlag.output?.variant;

    // construction-time bucket distribution assertion: 8 distinct arms over 8 fixed probe users
    const PROBE_KEYS = ['user_probe_7000', 'user_probe_7037', 'user_probe_7148', 'user_probe_7222', 'user_probe_7296', 'user_probe_7407', 'user_probe_7518', 'user_probe_7629'];
    const context = await browser.newContext();
    const distPage = await context.newPage();
    const arms = new Set();
    for (const key of PROBE_KEYS) {
      const got = targetPromise(distPage);
      await distPage.goto(baseUrl, { waitUntil: 'networkidle' });
      await distPage.fill('#userKey', key);
      await distPage.selectOption('#flagSelect', 'checkout_redesign');
      await distPage.check('#stickyToggle');
      await distPage.click('#assignVariant');
      const out = await got;
      if (out?.variant) arms.add(out.variant);
      await distPage.goto('about:blank');
    }
    await distPage.close();
    await context.close();
    checks.arm_distribution_covers_eight = arms.size === 8;

    checks.target_differs_from_decoy_probe =
      first.debugProbes.length > 0 && first.debugProbes.every((probe) => probe !== code);
    const decoys = [
      ...first.misc.flatMap((x) => (x ? [x.mix, x.sticky_ref, x.rollout_ref, x.variant, x.variant_probe] : [])),
      ...Object.values(first.shadows.data || {}),
      ...(first.shadows.keys || []),
    ].filter((value) => typeof value === "string");
    checks.decoy_outputs_not_target = decoys.length > 0 && decoys.every((value) => value !== code);
    checks.decoy_outputs_not_pattern = decoys.length > 0 && decoys.every((value) => !VARIANT_PATTERN.test(value));
    checks.storage_persisted_same_variant =
      typeof first.stored === "string" && first.stored.includes(code) && first.stored.length > code.length;
    checks.app_bundle_required = await blocked(browser, baseUrl);
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  const passed = Object.values(checks).every(Boolean);
  console.log(JSON.stringify({ case_id: "case012_flag_variant_hashing", passed, checks }, null, 2));
  if (!passed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
