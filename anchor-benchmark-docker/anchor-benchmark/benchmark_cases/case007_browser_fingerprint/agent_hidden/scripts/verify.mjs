import http from "node:http";
import { createReadStream } from "node:fs";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const capturesRoot = path.join(visibleRoot, "captures", "devtools-source-dump", "127.0.0.1_8477");
const bundlePath = path.join(assetsRoot, "fingerprint.app.bundle.js");
const captureBundlePath = path.join(capturesRoot, "assets", "fingerprint.app.bundle.js");
const caseId = "case007_browser_fingerprint";

const checks = {
  page_loaded: false,
  controls_exist: false,
  standard_interaction: false,
  console_log_found: false,
  target_field_exists: false,
  format_ok: false,
  stable_output: false,
  scan_mode_sensitive: false,
  extended_sensitive: false,
  shadows_seen: false,
  shadows_not_target: false,
  blocked_bundle_stops_output: false,
  bundle_visible: false,
  bundle_line_count: false,
  single_bundle: false,
  captures_bundle_exists: false,
  captures_page_exists: false,
  oracle_spans_present: false,
  no_sourcemap: false,
  no_forbidden_runtime: false,
  line_count_ok: false,
  shadow_file_count: false,
  vendor_file_count: false,
  task_json_clean: false,
  task_has_response_schema: false,
  build_meta_complete: false,
  answer_source_present: false,
};

const requirements = new Map([
  ["src/host/index.html", 180],
  ["src/z0/k7/q3/t9.js", 560],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 260);

function linesOf(text) {
  return text.split(/\r?\n/).length;
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
    const count = linesOf(await readFile(path.join(hiddenRoot, relative), "utf8"));
    if (count < required) return false;
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
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve({
    server,
    baseUrl: `http://127.0.0.1:${server.address().port}/`,
  })));
}

async function launchBrowser() {
  try {
    return await chromium.launch({ headless: true });
  } catch {
    const candidates = process.platform === "win32"
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
        if (value && typeof value === "object" && value.action === "fingerprint.collect" && typeof value.browser_fp === "string") {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(context, baseUrl, scanMode, extended) {
  const page = await context.newPage();
  const misc = [];
  const responses = [];
  page.on("response", (response) => responses.push(response.url()));
  page.on("console", async (message) => {
    if (!["debug", "info", "log"].includes(message.type())) return;
    try {
      const value = await message.args()[0]?.jsonValue();
      if (value && !(value.action === "fingerprint.collect" && value.browser_fp)) misc.push(value);
    } catch {}
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.selectOption("#scanMode", scanMode);
  if (extended) await page.check("#extendedSignals");
  else await page.uncheck("#extendedSignals");
  const got = targetPromise(page);
  await page.click("#scanButton");
  const output = await got;
  const shadows = await page.evaluate(() => ({
    dataset: { ...document.documentElement.dataset },
    cacheSize: Array.isArray(window.__case007ShadowCache) ? window.__case007ShadowCache.length : 0,
    cacheValues: Array.isArray(window.__case007ShadowCache) ? window.__case007ShadowCache.map((row) => row.value) : [],
  }));
  await page.close();
  return { output, misc, shadows, responses };
}

async function blocked(context, baseUrl) {
  const page = await context.newPage();
  await page.route("**/assets/fingerprint.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.selectOption("#scanMode", "active").catch(() => null);
  await page.check("#extendedSignals").catch(() => null);
  const got = targetPromise(page, 1000);
  await page.click("#scanButton").catch(() => null);
  const output = await got;
  await page.close();
  return output === null;
}

function forbiddenStatus(code) {
  return ![
    /new\s+Worker\b/.test(code),
    /\bSharedWorker\b/.test(code),
    /serviceWorker\b/.test(code),
    /\bpostMessage\b/.test(code),
    /\bBroadcastChannel\b/.test(code),
    /<iframe\b|createElement\(["']iframe/.test(code),
    /\beval\s*\(/.test(code),
    /new\s+Function\b/.test(code),
    /\bWebAssembly\b/.test(code),
    /https?:\/\//.test(code),
  ].some(Boolean);
}

async function taskJsonClean() {
  const text = await readFile(path.join(visibleRoot, "task.json"), "utf8");
  const leaks = [
    "src/z0/k7/q3/t9.js",
    "slot 23",
    "oracle",
    "hidden",
    "build_meta",
    "answer_function",
    "source_function",
  ];
  return leaks.every((token) => !text.toLowerCase().includes(token.toLowerCase()));
}

async function answerSourcePresent() {
  const source = await readFile(path.join(hiddenRoot, "src/z0/k7/q3/t9.js"), "utf8");
  const sink = await readFile(path.join(hiddenRoot, "src/z0/n0.js"), "utf8");
  return /export\s+function\s+u\b/.test(source)
    && /slot:\s*23/.test(source)
    && !/browser_fp/.test(source)
    && /98,\s*114,\s*111,\s*119,\s*115,\s*101,\s*114,\s*95,\s*102,\s*112/.test(sink);
}

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(hiddenRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
}

async function main() {
  checks.line_count_ok = await lineChecks();
  checks.shadow_file_count = await countByFolder("src/z0/x", /^x\d\d\.js$/) === 44;
  checks.vendor_file_count = await countByFolder("src/z0/v", /^v\d\d\.js$/) === 25;
  checks.task_json_clean = await taskJsonClean();
  const task = JSON.parse(await readFile(path.join(visibleRoot, "task.json"), "utf8"));
  checks.task_has_response_schema = task.answer_format?.response_type === "json"
    && Boolean(task.answer_format?.response_schema?.function_name)
    && Boolean(task.answer_format?.response_schema?.slice);
  const buildMeta = JSON.parse(await readFile(path.join(hiddenRoot, "build_meta.hidden.json"), "utf8"));
  checks.build_meta_complete = buildMeta.case_id === caseId
    && Boolean(buildMeta.primary_anchor?.answer_function)
    && buildMeta.task_contract?.task_type === "top_1_function_level_runtime_behavior_localization";
  checks.answer_source_present = await answerSourcePresent();
  checks.captures_bundle_exists = Boolean(await stat(captureBundlePath).catch(() => null));
  checks.captures_page_exists = Boolean(await stat(path.join(capturesRoot, "index.html")).catch(() => null));
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  checks.oracle_spans_present = Boolean(oracle.primary_anchor?.captured_span?.start_offset)
    && oracle.role_oracle.every((row) => typeof row.captured_span?.start_offset === "number");
  const bundleCode = await readFile(bundlePath, "utf8");
  const bundleLines = linesOf(bundleCode);
  checks.bundle_line_count = bundleLines >= 9000;
  checks.no_sourcemap = !/sourceMappingURL/.test(bundleCode);
  checks.no_forbidden_runtime = forbiddenStatus(bundleCode);
  const assets = await readdir(assetsRoot);
  checks.single_bundle = assets.filter((name) => name.endsWith(".js")).length === 1;
  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const context = await browser.newContext();
    const s1 = await scenario(context, baseUrl, "active", true);
    const s2 = await scenario(context, baseUrl, "active", true);
    const sm = await scenario(context, baseUrl, "passive", true);
    const ex = await scenario(context, baseUrl, "active", false);
    checks.page_loaded = true;
    checks.controls_exist = true;
    checks.standard_interaction = Boolean(s1.output);
    checks.console_log_found = Boolean(s1.output);
    checks.target_field_exists = typeof s1.output?.browser_fp === "string";
    checks.format_ok = /^fp_[a-z0-9]{12}$/.test(s1.output?.browser_fp || "");
    checks.stable_output = s1.output?.browser_fp === s2.output?.browser_fp;
    checks.scan_mode_sensitive = s1.output?.browser_fp !== sm.output?.browser_fp;
    checks.extended_sensitive = s1.output?.browser_fp !== ex.output?.browser_fp;
    checks.shadows_seen = Number(s1.shadows.cacheSize) >= 12;
    checks.shadows_not_target = s1.misc.some((item) => item && item.shadow_key)
      && !s1.shadows.cacheValues.includes(s1.output?.browser_fp);
    checks.bundle_visible = s1.responses.some((url) => url.endsWith("/assets/fingerprint.app.bundle.js"));
    checks.blocked_bundle_stops_output = await blocked(context, baseUrl);
    await context.close();
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
  const passed = Object.values(checks).every(Boolean);
  console.log(JSON.stringify({ case_id: caseId, passed, bundle_lines: bundleLines, checks }, null, 2));
  if (!passed) process.exit(1);
}

main().catch((error) => {
  console.error(JSON.stringify({ case_id: caseId, passed: false, error: "verify_exception", message: error?.stack || String(error) }, null, 2));
  process.exit(1);
});
