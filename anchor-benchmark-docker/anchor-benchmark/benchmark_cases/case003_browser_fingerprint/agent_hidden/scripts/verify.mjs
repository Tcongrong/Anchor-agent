import http from "node:http";
import { createReadStream } from "node:fs";
import { readFile, readdir, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const bundlePath = path.join(assetsRoot, "note.app.bundle.js");
const captureRoot = path.join(visibleRoot, "captures", "devtools-source-dump");
const capturedBundlePath = path.join(captureRoot, "127.0.0.1_4173", "assets", "note.app.bundle.js");
const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const caseId = "case003_browser_fingerprint";

const checks = {
  page_load: false,
  controls_exist: false,
  entry_click_pulse: false,
  global_scope_required: false,
  console_browser_fingerprint_exists: false,
  browser_fingerprint_format_valid: false,
  same_input_stable: false,
  platform_hint_change_changes: false,
  canvas_mode_change_changes: false,
  audio_mode_change_changes: false,
  viewport_change_changes: false,
  decoys_not_target: false,
  bundle_visible: false,
  bundle_line_count: false,
  bundle_not_single_line: false,
  all_files_minimum_lines: false,
  decoy_file_count: false,
  vendor_file_count: false,
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
  bundle_required: false,
  answer_code_visible: false,
  runtime_collectors_visible: false,
  capture_bundle_matches_dist: false,
  capture_manifest_valid: false,
  oracle_spans_valid: false
};

const requirements = new Map([
  ["src/host/index.html", 180],
  ["src/host/styles.css", 360],
  ["src/host/favicon.svg", 30],
  ["src/z0/k7/q3/t9.js", 560],
  ["scripts/gen_oracle_spans.mjs", 80]
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 260);

function linesOf(text) {
  return text.split(/\r?\n/).length;
}

function digest(text) {
  return createHash("sha256").update(text).digest("hex");
}

async function validateOracleSpans(bundleCode) {
  const oracle = JSON.parse(await readFile(oraclePath, "utf8"));
  const spans = [oracle.primary_anchor.captured_span, ...oracle.role_oracle.map((row) => row.captured_span)];
  return spans.every((span) => {
    if (!span || span.start_offset < 0 || span.end_offset <= span.start_offset || span.end_offset > bundleCode.length) return false;
    const snippet = bundleCode.slice(span.start_offset, span.end_offset);
    return span.sha256 === digest(snippet) && span.normalized_sha256 === digest(snippet.replace(/\s+/g, " ").trim());
  });
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
  return total >= 18080 && src >= 14050 && z0 >= 12050;
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

function targetPromise(page, timeout = 3000) {
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

async function scenario(context, baseUrl, platformHint, canvasMode, audioMode, probeScope = "global", timeout = 3000) {
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
  await page.fill("#platformHint", platformHint);
  await page.selectOption("#canvasMode", canvasMode);
  await page.selectOption("#audioMode", audioMode);
  await page.selectOption("#probeScope", probeScope);
  await page.check("#probeArm");
  const got = targetPromise(page, timeout);
  await page.click("#runProbeButton");
  const output = await got;
  const shadows = await page.evaluate(() => ({ ...document.documentElement.dataset }));
  await page.close();
  return { output, misc, shadows, responses };
}

async function blocked(context, baseUrl) {
  const page = await context.newPage();
  await page.route("**/assets/note.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.fill("#platformHint", "webkit x86").catch(() => null);
  await page.selectOption("#canvasMode", "precise").catch(() => null);
  await page.selectOption("#audioMode", "full").catch(() => null);
  await page.selectOption("#probeScope", "global").catch(() => null);
  await page.check("#probeArm").catch(() => null);
  const got = targetPromise(page, 900);
  await page.click("#runProbeButton").catch(() => null);
  const output = await got;
  await page.close();
  return output === null;
}

async function main() {
  checks.all_files_minimum_lines = await lineChecks();
  checks.decoy_file_count = await countByFolder("src/z0/x", /^x\d\d\.js$/) === 44;
  checks.vendor_file_count = await countByFolder("src/z0/v", /^v\d\d\.js$/) === 25;
  const bundleCode = await readFile(bundlePath, "utf8");
  const bundleLines = linesOf(bundleCode);
  checks.bundle_line_count = bundleLines >= 9040;
  checks.bundle_not_single_line = bundleLines > 1;
  const assetFiles = await readdir(assetsRoot);
  checks.no_sourcemap = !/sourceMappingURL/i.test(bundleCode) && assetFiles.every((file) => !/\.map$/i.test(file));
  checks.no_worker = !/new\s+Worker|Worker\s*\(/i.test(bundleCode) && assetFiles.every((file) => !/worker/i.test(file));
  checks.no_sharedworker = !/SharedWorker/i.test(bundleCode);
  checks.no_serviceworker = !/serviceWorker\.register/i.test(bundleCode);
  checks.no_postmessage = !/postMessage\s*\(/i.test(bundleCode);
  checks.no_broadcastchannel = !/BroadcastChannel/i.test(bundleCode);
  checks.no_iframe = !/<iframe|createElement\(['"]iframe/i.test(bundleCode);
  checks.no_eval = !/eval\s*\(/i.test(bundleCode);
  checks.no_new_function = !/new\s+Function/i.test(bundleCode);
  checks.no_wasm = !/WebAssembly/i.test(bundleCode);
  checks.answer_code_visible = /Math\[['"]imul['"]\]|Math\.imul|imul/.test(bundleCode) && /fp_/.test(bundleCode) && /console/.test(bundleCode);
  checks.runtime_collectors_visible = /navigator/.test(bundleCode) && /screen/.test(bundleCode) && /toDataURL/.test(bundleCode) && /canPlayType/.test(bundleCode);
  const capturedCode = await readFile(capturedBundlePath, "utf8");
  checks.capture_bundle_matches_dist = capturedCode === bundleCode;
  const manifest = JSON.parse(await readFile(path.join(captureRoot, "manifest.json"), "utf8"));
  checks.capture_manifest_valid = manifest.case_id === caseId && manifest.resources?.some((item) => item.savedAs === "127.0.0.1_4173/assets/note.app.bundle.js");
  checks.oracle_spans_valid = await validateOracleSpans(capturedCode);

  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const inspectContext = await browser.newContext();
    const page = await inspectContext.newPage();
    const responses = [];
    page.on("response", (response) => responses.push(response.url()));
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = await page.title() === "Browser Signal Probe";
    checks.controls_exist = await page.locator("#platformHint, #canvasMode, #audioMode, #probeScope, #probeArm, #runProbeButton").count() === 6;
    checks.bundle_visible = responses.some((url) => url.endsWith("/assets/note.app.bundle.js"));
    await inspectContext.close();

    const context = await browser.newContext();
    const localOnly = await scenario(context, baseUrl, "webkit x86", "precise", "full", "local", 900);
    checks.global_scope_required = localOnly.output === null;
    const first = await scenario(context, baseUrl, "webkit x86", "precise", "full");
    const fingerprint = first.output?.browser_fingerprint;
    checks.entry_click_pulse = Boolean(first.output);
    checks.console_browser_fingerprint_exists = typeof fingerprint === "string";
    checks.browser_fingerprint_format_valid = /^fp_[A-Za-z0-9_-]{24}$/.test(fingerprint || "");
    const second = await scenario(context, baseUrl, "webkit x86", "precise", "full");
    const third = await scenario(context, baseUrl, "webkit x86", "precise", "full");
    checks.same_input_stable = fingerprint === second.output?.browser_fingerprint && fingerprint === third.output?.browser_fingerprint;
    const platformChanged = await scenario(context, baseUrl, "webkit x64", "precise", "full");
    const canvasChanged = await scenario(context, baseUrl, "webkit x86", "vector", "full");
    const audioChanged = await scenario(context, baseUrl, "webkit x86", "precise", "basic");
    checks.platform_hint_change_changes = fingerprint !== platformChanged.output?.browser_fingerprint;
    checks.canvas_mode_change_changes = fingerprint !== canvasChanged.output?.browser_fingerprint;
    checks.audio_mode_change_changes = fingerprint !== audioChanged.output?.browser_fingerprint;
    const viewportContext = await browser.newContext({ viewport: { width: 900, height: 700 }, screen: { width: 900, height: 700 } });
    const viewportChanged = await scenario(viewportContext, baseUrl, "webkit x86", "precise", "full");
    checks.viewport_change_changes = fingerprint !== viewportChanged.output?.browser_fingerprint;
    await viewportContext.close();
    const decoys = [
      ...first.misc.flatMap((item) => item ? [item.shadow, item.value, item.browser_fingerprint] : []),
      ...Object.values(first.shadows || {})
    ].filter(Boolean);
    checks.decoys_not_target = decoys.length > 0 && decoys.every((value) => value !== fingerprint);
    await context.close();
    checks.bundle_required = await blocked(await browser.newContext(), baseUrl);
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
