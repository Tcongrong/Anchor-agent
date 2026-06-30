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
const bundlePath = path.join(assetsRoot, "packet.app.bundle.js");
const caseId = "case002_browser_fingerprint";

const checks = {
  dist_index_exists: false,
  dist_bundle_exists: false,
  page_load: false,
  controls_exist: false,
  scope_required: false,
  entry_click: false,
  console_browser_fingerprint_exists: false,
  browser_fingerprint_format_valid: false,
  same_input_stable: false,
  different_source_changes: false,
  different_audio_changes: false,
  different_canvas_changes: false,
  timezone_changes: false,
  decoy_outputs_not_target: false,
  app_bundle_required: false,
  bundle_visible_in_devtools_sources: false,
  bundle_contains_answer_code: false,
  bundle_contains_call_site: false,
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
  bundle_not_blob_or_data: false,
};

const requirements = new Map([
  ["src/host/index.html", 55],
  ["src/host/styles.css", 320],
  ["src/host/favicon.svg", 30],
  ["src/z0/k7/q3/t9.js", 520],
]);
for (let i = 0; i < 44; i += 1) {
  requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 180);
}
for (let i = 0; i < 25; i += 1) {
  requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 260);
}

function linesOf(text) {
  return text.split(/\r?\n/).length;
}

async function readFiles(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const resolved = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await readFiles(resolved)));
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
  const all = await readFiles(hiddenRoot);
  let total = 0;
  let src = 0;
  let z0 = 0;
  for (const file of all.filter((item) => /\.(js|mjs|json|html|css|svg|md)$/.test(item))) {
    const relative = path.relative(hiddenRoot, file).replaceAll("\\", "/");
    if (!relative.startsWith("src/")) continue;
    const count = linesOf(await readFile(file, "utf8"));
    total += count;
    src += count;
    if (relative.startsWith("src/z0/")) z0 += count;
  }
  return total >= 18000 && src >= 14000 && z0 >= 12000;
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

function targetPromise(page, timeout = 2500) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), timeout);
    page.on("console", async (message) => {
      if (message.type() !== "log") return;
      const arg = message.args()[0];
      if (!arg) return;
      try {
        const value = await arg.jsonValue();
        if (
          value &&
          typeof value === "object" &&
          value.action === "fingerprint.scan" &&
          typeof value.browser_fingerprint === "string"
        ) {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(context, baseUrl, platform, canvas = "precise", audio = "full", timezone = "local", probeScope = "global") {
  const page = await context.newPage();
  const misc = [];
  page.on("console", async (message) => {
    if (!["debug", "info", "log"].includes(message.type())) return;
    try {
      const value = await message.args()[0]?.jsonValue();
      if (value && !(value.action === "fingerprint.scan" && value.browser_fingerprint)) misc.push(value);
    } catch {}
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.fill("#platformHint", platform);
  await page.selectOption("#canvasMode", canvas);
  await page.selectOption("#audioTest", audio);
  await page.selectOption("#timezoneMode", timezone);
  await page.selectOption("#probeScope", probeScope);
  const got = targetPromise(page);
  await page.click("#runAnalysis");
  const output = await got;
  const shadows = await page.evaluate(() => ({
    data: { ...document.documentElement.dataset },
    keys: Object.keys(window)
      .filter((key) => key.startsWith("__z_shadow_"))
      .map((key) => window[key]),
  }));
  await page.close();
  return { output, misc, shadows };
}

async function blocked(context, baseUrl) {
  const page = await context.newPage();
  await page.route("**/assets/packet.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.fill("#platformHint", "webkit x86").catch(() => null);
  await page.selectOption("#canvasMode", "precise").catch(() => null);
  await page.selectOption("#audioTest", "full").catch(() => null);
  await page.selectOption("#timezoneMode", "local").catch(() => null);
  await page.selectOption("#probeScope", "global").catch(() => null);
  const got = targetPromise(page, 900);
  await page.click("#runAnalysis").catch(() => null);
  const output = await got;
  await page.close();
  return output === null;
}

async function main() {
  checks.dist_index_exists = Boolean(await stat(path.join(distRoot, "index.html")).catch(() => null));
  checks.dist_bundle_exists = Boolean(await stat(bundlePath).catch(() => null));
  checks.all_files_minimum_lines = await lineChecks();
  checks.decoy_file_count = (await countByFolder("src/z0/x", /^x\d\d\.js$/)) === 44;
  checks.vendor_file_count = (await countByFolder("src/z0/v", /^v\d\d\.js$/)) === 25;

  const bundleCode = await readFile(bundlePath, "utf8");
  const bundleLines = linesOf(bundleCode);
  checks.bundle_minimum_lines = bundleLines >= 9000;
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
  checks.bundle_contains_answer_code =
    /Math\[['"]imul['"]\]|Math\.imul/.test(bundleCode) &&
    /computeBrowserFingerprint|signalFrame|Uint8Array/.test(bundleCode) &&
    /signal_token|signal_trace|fingerprint\.scan/.test(bundleCode);
  checks.bundle_contains_call_site = /console/.test(bundleCode) && /log/.test(bundleCode);

  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const inspectContext = await browser.newContext();
    const page = await inspectContext.newPage();
    const responses = [];
    page.on("response", (response) => responses.push(response.url()));
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = (await page.title()) === "Browser Signal Probe";
    checks.controls_exist =
      (await page.locator("#platformHint, #canvasMode, #audioTest, #timezoneMode, #probeScope, #runAnalysis").count()) === 6 &&
      (await page.getAttribute("#runAnalysis", "data-k")) === "11:29:8";
    checks.bundle_visible_in_devtools_sources = responses.some((url) => url.endsWith("/assets/packet.app.bundle.js"));
    await inspectContext.close();

    const context = await browser.newContext();
    const noScope = await scenario(context, baseUrl, "webkit x86", "precise", "full", "local", "local");
    checks.scope_required = noScope.output === null;

    const first = await scenario(context, baseUrl, "webkit x86");
    const code = first.output?.browser_fingerprint;
    checks.entry_click = Boolean(first.output);
    checks.console_browser_fingerprint_exists = typeof code === "string";
    checks.browser_fingerprint_format_valid = /^fp_[A-Za-z0-9_-]{24}$/.test(code || "");

    const second = await scenario(context, baseUrl, "webkit x86");
    checks.same_input_stable = code === second.output?.browser_fingerprint;

    const changedSource = await scenario(context, baseUrl, "webkit x64");
    const changedAudio = await scenario(context, baseUrl, "webkit x86", "precise", "lite");
    const changedCanvas = await scenario(context, baseUrl, "webkit x86", "coarse");
    const changedTimezone = await scenario(context, baseUrl, "webkit x86", "precise", "full", "utc");
    checks.different_source_changes = code !== changedSource.output?.browser_fingerprint;
    checks.different_audio_changes = code !== changedAudio.output?.browser_fingerprint;
    checks.different_canvas_changes = code !== changedCanvas.output?.browser_fingerprint;
    checks.timezone_changes = code !== changedTimezone.output?.browser_fingerprint;

    const decoys = [
      ...first.misc.flatMap((item) => (item ? [item.ap, item.signal_token, item.signal_trace, item.browser_fingerprint] : [])),
      ...Object.values(first.shadows.data || {}),
      ...(first.shadows.keys || []),
    ].filter(Boolean);
    checks.decoy_outputs_not_target = decoys.length > 0 && decoys.every((value) => value !== code);
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
