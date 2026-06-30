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
const bundlePath = path.join(assetsRoot, "upload.app.bundle.js");
const caseId = "case006_browser_fingerprint";

const checks = {
  page_loaded: false,
  controls_exist: false,
  button_action: false,
  standard_interaction: false,
  console_log_found: false,
  target_field_exists: false,
  format_ok: false,
  stable_output: false,
  file_insensitive: false,
  desc_insensitive: false,
  category_insensitive: false,
  viewport_sensitive: false,
  user_agent_sensitive: false,
  submit_decoys_seen: false,
  decoys_not_target: false,
  blocked_bundle_stops_output: false,
  bundle_visible: false,
  bundle_not_blob_or_data: false,
  bundle_line_count: false,
  bundle_not_single_line: false,
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
  line_count_ok: false,
  decoy_file_count: false,
  vendor_file_count: false,
  task_json_clean: false,
  hidden_files_present: false,
  build_meta_complete: false,
  devtools_visible_bundle: false,
  answer_source_present: false,
  agent_visible_partition: false,
};

const requirements = new Map([
  ["src/host/index.html", 160],
  ["src/host/styles.css", 320],
  ["src/host/favicon.svg", 30],
  ["src/z0/a0.js", 120],
  ["src/z0/b1.js", 160],
  ["src/z0/c2.js", 160],
  ["src/z0/d3.js", 180],
  ["src/z0/e4.js", 260],
  ["src/z0/f5.js", 260],
  ["src/z0/g6.js", 240],
  ["src/z0/h7.js", 180],
  ["src/z0/i8.js", 180],
  ["src/z0/j9.js", 180],
  ["src/z0/k0.js", 180],
  ["src/z0/k1.js", 180],
  ["src/z0/k2.js", 180],
  ["src/z0/l0.js", 320],
  ["src/z0/m0.js", 280],
  ["src/z0/n0.js", 300],
  ["src/z0/o0.js", 640],
  ["src/z0/p0.js", 320],
  ["src/z0/k7/q3/t9.js", 560],
  ["scripts/gen_oracle_spans.mjs", 80],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 260);

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

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(hiddenRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
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
  return total >= 18060 && src >= 14040 && z0 >= 12040;
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
      resolve({
        server,
        baseUrl: `http://127.0.0.1:${server.address().port}/`,
      }),
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
        if (
          value &&
          typeof value === "object" &&
          value.action === "vault.stage.accept" &&
          typeof value.browser_fingerprint === "string"
        ) {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(context, baseUrl, fileName, description, category) {
  const page = await context.newPage();
  const misc = [];
  const responses = [];
  page.on("response", (response) => responses.push(response.url()));
  page.on("console", async (message) => {
    if (!["debug", "info", "log"].includes(message.type())) return;
    try {
      const value = await message.args()[0]?.jsonValue();
      if (value && !(value.action === "vault.stage.accept" && value.browser_fingerprint)) misc.push(value);
    } catch {}
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  checks.page_loaded = true;
  checks.controls_exist =
    (await page.locator("#fileNameInput").count()) === 1 &&
    (await page.locator("#fileDescInput").count()) === 1 &&
    (await page.locator("#categorySelect").count()) === 1 &&
    (await page.locator("#profileModeSelect").count()) === 1 &&
    (await page.locator("#fingerprintConsent").count()) === 1 &&
    (await page.locator("#preflightButton").count()) === 1 &&
    (await page.locator("#armButton").count()) === 1 &&
    (await page.locator("#uploadButton").count()) === 1;
  checks.button_action = (await page.locator("#uploadButton").getAttribute("data-action")) === "vault.stage.accept";
  await page.fill("#fileNameInput", fileName);
  await page.fill("#fileDescInput", description);
  await page.selectOption("#categorySelect", category);
  await page.selectOption("#profileModeSelect", "hardened");
  await page.click("#preflightButton");
  await page.check("#fingerprintConsent");
  await page.click("#armButton");
  const got = targetPromise(page);
  await page.click("#uploadButton");
  const output = await got;
  const shadows = await page.evaluate(() => ({
    dataset: { ...document.documentElement.dataset },
    cacheSize: Array.isArray(window.__case006ShadowCache) ? window.__case006ShadowCache.length : 0,
    cacheValues: Array.isArray(window.__case006ShadowCache)
      ? window.__case006ShadowCache.map((row) => row.value)
      : [],
  }));
  await page.close();
  return { output, misc, shadows, responses };
}

async function blocked(context, baseUrl) {
  const page = await context.newPage();
  await page.route("**/assets/upload.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.fill("#fileNameInput", "quarterly-report.pdf").catch(() => null);
  await page.fill("#fileDescInput", "finance summary").catch(() => null);
  await page.selectOption("#categorySelect", "finance").catch(() => null);
  await page.selectOption("#profileModeSelect", "hardened").catch(() => null);
  await page.click("#preflightButton").catch(() => null);
  await page.check("#fingerprintConsent").catch(() => null);
  await page.click("#armButton").catch(() => null);
  const got = targetPromise(page, 1000);
  await page.click("#uploadButton").catch(() => null);
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
  const leaks = [
    "src/z0/k7/q3/t9.js",
    "constructSurfaceEnvelope",
    "encodeSurfaceDigest",
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
  return (
    /export\s+function\s+u\b/.test(source) &&
    /slot:\s*23/.test(source) &&
    /constructSurfaceEnvelope/.test(source) &&
    /encodeSurfaceDigest/.test(source) &&
    /98,\s*114,\s*111,\s*119,\s*115,\s*101,\s*114/.test(sink)
  );
}

async function main() {
  checks.line_count_ok = await lineChecks();
  checks.decoy_file_count = (await countByFolder("src/z0/x", /^x\d\d\.js$/)) === 44;
  checks.vendor_file_count = (await countByFolder("src/z0/v", /^v\d\d\.js$/)) === 25;
  checks.task_json_clean = await taskJsonClean();
  checks.hidden_files_present =
    Boolean(await stat(path.join(hiddenRoot, "oracle.hidden.json")).catch(() => null)) &&
    Boolean(await stat(path.join(hiddenRoot, "build_meta.hidden.json")).catch(() => null));
  checks.agent_visible_partition =
    Boolean(await stat(path.join(visibleRoot, "task.json")).catch(() => null)) &&
    Boolean(await stat(path.join(visibleRoot, "captures")).catch(() => null)) &&
    !(await stat(path.join(caseRoot, "task.json")).catch(() => null));
  const buildMeta = JSON.parse(await readFile(path.join(hiddenRoot, "build_meta.hidden.json"), "utf8"));
  checks.build_meta_complete =
    buildMeta.case_id === caseId &&
    buildMeta.task_contract?.target_observable?.sink?.field === "browser_fingerprint" &&
    buildMeta.build_artifacts?.dist_bundle === "dist/assets/upload.app.bundle.js" &&
    buildMeta.behavior_category?.paper_category === "browser_fingerprint" &&
    Boolean(buildMeta.primary_anchor?.answer_function);
  checks.answer_source_present = await answerSourcePresent();

  const bundleCode = await readFile(bundlePath, "utf8");
  const bundleLines = linesOf(bundleCode);
  checks.bundle_line_count = bundleLines >= 9020;
  checks.bundle_not_single_line = bundleLines > 1;
  checks.no_sourcemap = !/sourceMappingURL/.test(bundleCode);
  Object.assign(checks, forbiddenStatus(bundleCode));
  const assets = await readdir(assetsRoot);
  checks.single_bundle =
    assets.filter((name) => name.endsWith(".js")).length === 1 && assets.includes("upload.app.bundle.js");

  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const context = await browser.newContext();
    const s1 = await scenario(context, baseUrl, "quarterly-report.pdf", "finance summary", "finance");
    const s2 = await scenario(context, baseUrl, "quarterly-report.pdf", "finance summary", "finance");
    const s3 = await scenario(context, baseUrl, "quarterly-report.pdf", "finance summary", "finance");
    const cf = await scenario(context, baseUrl, "quarterly-appendix.pdf", "finance summary", "finance");
    const cd = await scenario(context, baseUrl, "quarterly-report.pdf", "finance summary revised", "finance");
    const cc = await scenario(context, baseUrl, "quarterly-report.pdf", "finance summary", "legal");
    const viewportContext = await browser.newContext({ viewport: { width: 1110, height: 720 } });
    const sv = await scenario(viewportContext, baseUrl, "quarterly-report.pdf", "finance summary", "finance");
    await viewportContext.close();
    const uaContext = await browser.newContext({ userAgent: "Case006BrowserFingerprint/1.0" });
    const su = await scenario(uaContext, baseUrl, "quarterly-report.pdf", "finance summary", "finance");
    await uaContext.close();
    checks.standard_interaction = Boolean(s1.output);
    checks.console_log_found = Boolean(s1.output);
    checks.target_field_exists = typeof s1.output?.browser_fingerprint === "string";
    checks.format_ok = /^bf_[a-z0-9]{10}$/.test(s1.output?.browser_fingerprint || "");
    checks.stable_output =
      s1.output?.browser_fingerprint === s2.output?.browser_fingerprint &&
      s2.output?.browser_fingerprint === s3.output?.browser_fingerprint;
    checks.file_insensitive = s1.output?.browser_fingerprint === cf.output?.browser_fingerprint;
    checks.desc_insensitive = s1.output?.browser_fingerprint === cd.output?.browser_fingerprint;
    checks.category_insensitive = s1.output?.browser_fingerprint === cc.output?.browser_fingerprint;
    checks.viewport_sensitive = s1.output?.browser_fingerprint !== sv.output?.browser_fingerprint;
    checks.user_agent_sensitive = s1.output?.browser_fingerprint !== su.output?.browser_fingerprint;
    checks.submit_decoys_seen =
      Number(s1.shadows.cacheSize) >= 12 && Number(s1.shadows.dataset.case006DecoyCount || 0) >= 12;
    checks.decoys_not_target =
      s1.misc.some((item) => item && item.shadow_key) &&
      !s1.shadows.cacheValues.includes(s1.output?.browser_fingerprint);
    checks.bundle_visible = s1.responses.some((url) => url.endsWith("/assets/upload.app.bundle.js"));
    checks.devtools_visible_bundle = checks.bundle_visible;
    checks.bundle_not_blob_or_data = s1.responses.every(
      (url) => !url.startsWith("blob:") && !url.startsWith("data:"),
    );
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
        case_id: caseId,
        passed,
        target_field: "browser_fingerprint",
        bundle_lines: bundleLines,
        checks,
      },
      null,
      2,
    ),
  );
  if (!passed) process.exit(1);
}

main().catch((error) => {
  console.error(
    JSON.stringify(
      { case_id: caseId, passed: false, error: "verify_exception", message: (error && error.stack) || String(error) },
      null,
      2,
    ),
  );
  process.exit(1);
});
