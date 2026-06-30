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
const bundlePath = path.join(assetsRoot, "browser.app.bundle.js");
const captureBundlePath = path.join(
  visibleRoot,
  "captures",
  "devtools-source-dump",
  "127.0.0.1_4173",
  "assets",
  "browser.app.bundle.js",
);

const checks = {
  page_loaded: false,
  controls_exist: false,
  standard_interaction: false,
  console_log_found: false,
  target_field_exists: false,
  format_ok: false,
  stable_output: false,
  environment_basis: false,
  decoys_not_target: false,
  blocked_bundle_stops_output: false,
  bundle_visible: false,
  captured_bundle_visible: false,
  bundle_minimum_lines: false,
  all_files_minimum_lines: false,
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
  decoy_file_count: false,
  vendor_file_count: false,
  middleware_file_count: false,
  task_json_clean: false,
  hidden_files_present: false,
  build_meta_complete: false,
};

const requirements = new Map([
  ["src/host/index.html", 180],
  ["src/z0/k7/q3/t9.js", 560],
  ["scripts/gen_oracle_spans.mjs", 80],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 260);
for (let i = 0; i < 8; i += 1) requirements.set(`src/z0/w/w${String(i).padStart(2, "0")}.js`, 180);

function linesOf(text) {
  return text.trimEnd().split(/\r?\n/).length;
}

async function readFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
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
  return total >= 18100 && src >= 14070 && z0 >= 12070;
}

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(hiddenRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
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
    server.listen(0, "127.0.0.1", () => resolve({ server, baseUrl: `http://127.0.0.1:${server.address().port}/` })),
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
        if (
          value &&
          typeof value === "object" &&
          value.action === "browser.fingerprint" &&
          typeof value.browser_fingerprint === "string"
        ) {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(context, baseUrl) {
  const page = await context.newPage();
  const misc = [];
  const responses = [];
  page.on("response", (response) => responses.push(response.url()));
  page.on("console", async (message) => {
    if (!["debug", "info", "log"].includes(message.type())) return;
    try {
      const value = await message.args()[0]?.jsonValue();
      if (value && !(value.action === "browser.fingerprint" && value.browser_fingerprint)) misc.push(value);
    } catch {}
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  checks.page_loaded = true;
  checks.controls_exist =
    (await page.locator("#fingerprintForm").count()) === 1 &&
    (await page.locator("#fingerprintMode").count()) === 1 &&
    (await page.locator("#entropyConsent").count()) === 1 &&
    (await page.locator("#publishFingerprint").count()) === 1;
  const got = targetPromise(page);
  await page.selectOption("#fingerprintMode", "strict");
  await page.check("#entropyConsent");
  await page.locator("#fingerprintForm").evaluate((form) => form.requestSubmit());
  const output = await got;
  const shadows = await page.evaluate(() => ({
    cacheSize: Array.isArray(window.__browserShadowCache) ? window.__browserShadowCache.length : 0,
    hasNavigator: typeof navigator.userAgent === "string",
    hasScreen: Boolean(window.screen && window.screen.width),
    hasCanvas: (() => {
      try {
        return Boolean(document.createElement("canvas").getContext("2d"));
      } catch {
        return false;
      }
    })(),
  }));
  await page.close();
  return { output, misc, shadows, responses };
}

async function blocked(context, baseUrl) {
  const page = await context.newPage();
  await page.route("**/assets/browser.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  const got = targetPromise(page, 1000);
  await page.selectOption("#fingerprintMode", "strict").catch(() => null);
  await page.check("#entropyConsent").catch(() => null);
  await page.locator("#fingerprintForm").evaluate((form) => form.requestSubmit()).catch(() => null);
  const output = await got;
  await page.close();
  return output === null;
}

async function taskJsonClean() {
  const text = await readFile(path.join(visibleRoot, "task.json"), "utf8");
  const leaks = ["src/z0/k7/q3/t9.js", "oracle", "hidden", "primary_anchor", "answer_function"];
  return leaks.every((token) => !text.toLowerCase().includes(token.toLowerCase()));
}

const bundleCode = await readFile(bundlePath, "utf8");
const bundleLines = linesOf(bundleCode);
checks.all_files_minimum_lines = await lineChecks();
checks.decoy_file_count = (await countByFolder("src/z0/x", /^x\d\d\.js$/)) === 44;
checks.vendor_file_count = (await countByFolder("src/z0/v", /^v\d\d\.js$/)) === 25;
checks.middleware_file_count = (await countByFolder("src/z0/w", /^w\d\d\.js$/)) === 8;
checks.task_json_clean = await taskJsonClean();
checks.hidden_files_present =
  Boolean(await stat(path.join(hiddenRoot, "oracle.hidden.json")).catch(() => null)) &&
  Boolean(await stat(path.join(hiddenRoot, "build_meta.hidden.json")).catch(() => null));
const buildMeta = JSON.parse(await readFile(path.join(hiddenRoot, "build_meta.hidden.json"), "utf8"));
checks.build_meta_complete =
  buildMeta.case_id === "case005_browser_fingerprint" &&
  buildMeta.task_contract?.target_observable?.sink?.field === "browser_fingerprint";
checks.bundle_minimum_lines = bundleLines >= 9050;
checks.no_sourcemap = !/sourceMappingURL/.test(bundleCode);
checks.no_worker = !/new\s+Worker\b/.test(bundleCode);
checks.no_sharedworker = !/\bSharedWorker\b/.test(bundleCode);
checks.no_serviceworker = !/serviceWorker\b/.test(bundleCode);
checks.no_postmessage = !/\bpostMessage\b/.test(bundleCode);
checks.no_broadcastchannel = !/\bBroadcastChannel\b/.test(bundleCode);
checks.no_iframe = !/<iframe\b|createElement\(["']iframe/.test(bundleCode);
checks.no_eval = !/\beval\s*\(/.test(bundleCode);
checks.no_new_function = !/new\s+Function\b/.test(bundleCode);
checks.no_wasm = !/\bWebAssembly\b/.test(bundleCode);
checks.captured_bundle_visible = Boolean(await stat(captureBundlePath).catch(() => null));

const { server, baseUrl } = await createServer();
let browser;
try {
  browser = await launchBrowser();
  const context = await browser.newContext();
  const s1 = await scenario(context, baseUrl);
  const s2 = await scenario(context, baseUrl);
  const s3 = await scenario(context, baseUrl);
  checks.standard_interaction = Boolean(s1.output);
  checks.console_log_found = Boolean(s1.output);
  checks.target_field_exists = typeof s1.output?.browser_fingerprint === "string";
  checks.format_ok = /^bf_[a-z0-9_-]{10,18}$/.test(s1.output?.browser_fingerprint || "");
  checks.stable_output =
    s1.output?.browser_fingerprint === s2.output?.browser_fingerprint &&
    s2.output?.browser_fingerprint === s3.output?.browser_fingerprint;
  checks.environment_basis = Boolean(s1.shadows.hasNavigator && s1.shadows.hasScreen && s1.shadows.hasCanvas);
  checks.decoys_not_target =
    s1.misc.some((item) => item && (item.shadow_key || item.preview_key)) && Number(s1.shadows.cacheSize) === 12;
  checks.bundle_visible = s1.responses.some((url) => url.endsWith("/assets/browser.app.bundle.js"));
  checks.blocked_bundle_stops_output = await blocked(context, baseUrl);
  await context.close();
} finally {
  if (browser) await browser.close();
  await new Promise((resolve) => server.close(resolve));
}

const passed = Object.values(checks).every(Boolean);
console.log(
  JSON.stringify(
    {
      case_id: "case005_browser_fingerprint",
      passed,
      console_log_found: checks.console_log_found,
      target_field: "browser_fingerprint",
      format_ok: checks.format_ok,
      stable_output: checks.stable_output,
      bundle_lines: bundleLines,
      checks,
    },
    null,
    2,
  ),
);
if (!passed) process.exit(1);
