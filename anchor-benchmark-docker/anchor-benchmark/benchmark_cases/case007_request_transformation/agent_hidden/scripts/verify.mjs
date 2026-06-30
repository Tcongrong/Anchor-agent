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
const bundlePath = path.join(assetsRoot, "request.app.bundle.js");
const caseId = "case007_request_transformation";
const checks = {
  page_loaded: false,
  controls_exist: false,
  button_action: false,
  standard_interaction: false,
  console_log_found: false,
  target_field_exists: false,
  payload_shape_ok: false,
  stable_output: false,
  policy_sensitive: false,
  seal_sensitive: false,
  draft_sensitive: false,
  staged_path_required: false,
  shadows_seen: false,
  shadows_not_target: false,
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
  shadow_file_count: false,
  vendor_file_count: false,
  task_json_clean: false,
  hidden_files_present: false,
  build_meta_complete: false,
  devtools_visible_bundle: false,
  answer_source_present: false
};
const requirements = new Map([
  ["src/host/index.html", 180],
  ["src/host/styles.css", 360],
  ["src/host/favicon.svg", 30],
  ["src/z0/a0.js", 120],
  ["src/z0/b1.js", 160],
  ["src/z0/c2.js", 160],
  ["src/z0/d3.js", 180],
  ["src/z0/e4.js", 260],
  ["src/z0/f5.js", 260],
  ["src/z0/g6.js", 260],
  ["src/z0/h7.js", 220],
  ["src/z0/i8.js", 180],
  ["src/z0/j9.js", 180],
  ["src/z0/k0.js", 180],
  ["src/z0/k1.js", 180],
  ["src/z0/k2.js", 180],
  ["src/z0/k3.js", 180],
  ["src/z0/l0.js", 340],
  ["src/z0/m0.js", 300],
  ["src/z0/n0.js", 300],
  ["src/z0/o0.js", 640],
  ["src/z0/p0.js", 320],
  ["src/z0/q0.js", 220],
  ["src/z0/k7/q3/t9.js", 560],
  ["scripts/gen_oracle_spans.mjs", 80]
]);
for (let i = 0; i < 44; i += 1) requirements.set("src/z0/x/x" + String(i).padStart(2, "0") + ".js", 180);
for (let i = 0; i < 25; i += 1) requirements.set("src/z0/v/v" + String(i).padStart(2, "0") + ".js", 260);
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
  return total >= 18090 && src >= 14060 && z0 >= 12060;
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
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve({
    server,
    baseUrl: "http://127.0.0.1:" + server.address().port + "/"
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
        if (value && typeof value === "object" && value.action === "request.transform" && value.request_payload && typeof value.request_payload === "object") {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}
async function scenario(context, baseUrl, draftText, policy, priority, sealed) {
  const page = await context.newPage();
  const misc = [];
  const responses = [];
  page.on("response", (response) => responses.push(response.url()));
  page.on("console", async (message) => {
    if (!["debug", "info", "log"].includes(message.type())) return;
    try {
      const value = await message.args()[0]?.jsonValue();
      if (value && !(value.action === "request.transform" && value.request_payload)) misc.push(value);
    } catch {}
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  checks.page_loaded = true;
  checks.controls_exist = await page.locator("#releaseRequestButton").count() === 1
    && await page.locator("#parseDraftButton").count() === 1
    && await page.locator("#stageEnvelopeButton").count() === 1
    && await page.locator("#queueTransformButton").count() === 1
    && await page.locator("#requestDraftInput").count() === 1
    && await page.locator("#policySelect").count() === 1
    && await page.locator("#prioritySelect").count() === 1
    && await page.locator("#sealRequest").count() === 1;
  checks.button_action = await page.locator("#releaseRequestButton").count() === 1;
  await page.fill("#requestDraftInput", draftText);
  await page.click("#parseDraftButton");
  await page.selectOption("#policySelect", policy);
  await page.selectOption("#prioritySelect", priority);
  await page.uncheck("#sealRequest");
  await page.click("#stageEnvelopeButton");
  if (sealed) await page.check("#sealRequest");
  else await page.uncheck("#sealRequest");
  await page.click("#queueTransformButton");
  const got = targetPromise(page);
  await page.click("#releaseRequestButton");
  const output = await got;
  const shadows = await page.evaluate(() => ({
    dataset: { ...document.documentElement.dataset },
    cacheSize: Array.isArray(window.__case007ShadowCache) ? window.__case007ShadowCache.length : 0,
    cacheValues: Array.isArray(window.__case007ShadowCache) ? window.__case007ShadowCache.map((row) => row.value) : []
  }));
  await page.close();
  return { output, misc, shadows, responses };
}
async function blocked(context, baseUrl) {
  const page = await context.newPage();
  await page.route("**/assets/request.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.fill("#requestDraftInput", "file=quarterly-report.pdf\ncustomer=northwind\ncategory=finance\namount=129.50\nnote=finance summary").catch(() => null);
  await page.click("#parseDraftButton").catch(() => null);
  await page.selectOption("#policySelect", "restricted").catch(() => null);
  await page.selectOption("#prioritySelect", "expedite").catch(() => null);
  await page.click("#stageEnvelopeButton").catch(() => null);
  await page.check("#sealRequest").catch(() => null);
  await page.click("#queueTransformButton").catch(() => null);
  const got = targetPromise(page, 1000);
  await page.click("#releaseRequestButton").catch(() => null);
  const output = await got;
  await page.close();
  return output === null;
}
async function directReleaseBlocked(context, baseUrl) {
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.fill("#requestDraftInput", "file=quarterly-report.pdf\ncustomer=northwind\ncategory=finance\namount=129.50\nnote=finance summary");
  await page.selectOption("#policySelect", "restricted");
  await page.selectOption("#prioritySelect", "expedite");
  await page.check("#sealRequest");
  const got = targetPromise(page, 1000);
  await page.click("#releaseRequestButton");
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
    no_anti_debug: !/debugProtection|selfDefending|devtools|puppeteer|playwright/i.test(code)
  };
}
async function taskJsonClean() {
  const text = await readFile(path.join(visibleRoot, "task.json"), "utf8");
  const leaks = [
    "src/z0/k7/q3/t9.js",
    "export_name",
    "slot 23",
    "reducer factory",
    "oracle",
    "hidden",
    "build_meta",
    "middleware",
    "trampoline",
    "MutationObserver",
    "CustomEvent"
  ];
  return leaks.every((token) => !text.toLowerCase().includes(token.toLowerCase()));
}
async function answerSourcePresent() {
  const source = await readFile(path.join(hiddenRoot, "src/z0/k7/q3/t9.js"), "utf8");
  const sink = await readFile(path.join(hiddenRoot, "src/z0/n0.js"), "utf8");
  return /export\s+function\s+u\b/.test(source)
    && /slot:\s*23/.test(source)
    && !/request_payload/.test(source)
    && /114,\s*101,\s*113,\s*117,\s*101,\s*115,\s*116,\s*95,\s*112,\s*97,\s*121,\s*108,\s*111,\s*97,\s*100/.test(sink);
}
async function main() {
  checks.line_count_ok = await lineChecks();
  checks.shadow_file_count = await countByFolder("src/z0/x", /^x\d\d\.js$/) === 44;
  checks.vendor_file_count = await countByFolder("src/z0/v", /^v\d\d\.js$/) === 25;
  checks.task_json_clean = await taskJsonClean();
  checks.hidden_files_present = Boolean(await stat(path.join(hiddenRoot, "oracle.hidden.json")).catch(() => null))
    && Boolean(await stat(path.join(hiddenRoot, "build_meta.hidden.json")).catch(() => null));
  const buildMeta = JSON.parse(await readFile(path.join(hiddenRoot, "build_meta.hidden.json"), "utf8"));
  checks.build_meta_complete = buildMeta.case_id === caseId
    && buildMeta.build_artifacts?.dist_bundle === "agent_hidden/dist/assets/request.app.bundle.js"
    && buildMeta.build_artifacts?.captured_bundle === "agent_visible/captures/devtools-source-dump/127.0.0.1_4177/assets/request.app.bundle.js"
    && buildMeta.task_contract?.task_type === "top_1_function_level_runtime_behavior_localization";
  checks.answer_source_present = await answerSourcePresent();
  const bundleCode = await readFile(bundlePath, "utf8");
  const bundleLines = linesOf(bundleCode);
  checks.bundle_line_count = bundleLines >= 9045;
  checks.bundle_not_single_line = bundleLines > 1;
  checks.no_sourcemap = !/sourceMappingURL/.test(bundleCode);
  checks.bundle_not_blob_or_data = !/blob:|data:/.test(bundleCode);
  Object.assign(checks, forbiddenStatus(bundleCode));
  const assets = await readdir(assetsRoot);
  checks.single_bundle = assets.filter((name) => name.endsWith(".js")).length === 1 && assets.includes("request.app.bundle.js");
  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const context = await browser.newContext();
    const standardDraft = "file=quarterly-report.pdf\ncustomer=northwind\ncategory=finance\namount=129.50\nnote=finance summary";
    const changedDraft = "file=annual-audit.csv\ncustomer=northwind\ncategory=finance\namount=129.50\nnote=finance summary";
    const s1 = await scenario(context, baseUrl, standardDraft, "restricted", "expedite", true);
    const s2 = await scenario(context, baseUrl, standardDraft, "restricted", "expedite", true);
    const s3 = await scenario(context, baseUrl, standardDraft, "restricted", "expedite", true);
    const sp = await scenario(context, baseUrl, standardDraft, "standard", "expedite", true);
    const ss = await scenario(context, baseUrl, standardDraft, "restricted", "expedite", false);
    const sd = await scenario(context, baseUrl, changedDraft, "restricted", "expedite", true);
    checks.standard_interaction = Boolean(s1.output);
    checks.console_log_found = Boolean(s1.output);
    checks.target_field_exists = Boolean(s1.output?.request_payload);
    checks.payload_shape_ok = isPayloadShape(s1.output?.request_payload);
    checks.stable_output = JSON.stringify(s1.output?.request_payload) === JSON.stringify(s2.output?.request_payload)
      && JSON.stringify(s2.output?.request_payload) === JSON.stringify(s3.output?.request_payload);
    checks.policy_sensitive = s1.output?.request_payload?.endpoint !== sp.output?.request_payload?.endpoint;
    checks.seal_sensitive = Boolean(s1.output?.request_payload?.body?.sealed) !== Boolean(ss.output?.request_payload?.body?.sealed);
    checks.draft_sensitive = s1.output?.request_payload?.body?.file_name !== sd.output?.request_payload?.body?.file_name;
    checks.shadows_seen = Number(s1.shadows.cacheSize) >= 12 && Number(s1.shadows.dataset.case007ShadowCount || 0) >= 12;
    checks.shadows_not_target = s1.misc.some((item) => item && item.shadow_key)
      && !s1.shadows.cacheValues.includes(s1.output?.request_payload);
    checks.bundle_visible = s1.responses.some((url) => url.endsWith("/assets/request.app.bundle.js"));
    checks.devtools_visible_bundle = checks.bundle_visible;
    checks.staged_path_required = await directReleaseBlocked(context, baseUrl);
    checks.blocked_bundle_stops_output = await blocked(context, baseUrl);
    await context.close();
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
  const passed = Object.values(checks).every(Boolean);
  const summary = {
    case_id: caseId,
    passed,
    page_loaded: checks.page_loaded,
    console_log_found: checks.console_log_found,
    target_field: "request_payload",
    payload_shape_ok: checks.payload_shape_ok,
    stable_output: checks.stable_output,
    policy_sensitive: checks.policy_sensitive,
    seal_sensitive: checks.seal_sensitive,
    draft_sensitive: checks.draft_sensitive,
    staged_path_required: checks.staged_path_required,
    shadows_seen: checks.shadows_seen,
    bundle_visible: checks.bundle_visible,
    bundle_lines: bundleLines,
    single_bundle: checks.single_bundle,
    no_forbidden_runtime: checks.no_worker && checks.no_sharedworker && checks.no_serviceworker && checks.no_postmessage && checks.no_broadcastchannel && checks.no_iframe && checks.no_eval && checks.no_new_function && checks.no_wasm,
    line_count_ok: checks.line_count_ok,
    checks
  };
  console.log(JSON.stringify(summary, null, 2));
  if (!passed) process.exit(1);
}
main().catch((error) => {
  console.error(JSON.stringify({ case_id: caseId, passed: false, error: "verify_exception", message: error && error.stack || String(error) }, null, 2));
  process.exit(1);
});
function isPayloadShape(value) {
  if (!value || typeof value !== "object") return false;
  if (!["POST", "PUT"].includes(value.method)) return false;
  if (typeof value.endpoint !== "string" || !value.endpoint.startsWith("/")) return false;
  if (!value.headers || !/^rq_[a-z0-9]{12}$/.test(String(value.headers["x-request-ticket"] || ""))) return false;
  if (!value.body || typeof value.body.file_name !== "string") return false;
  return typeof value.body.category === "string" && typeof value.body.amount_cents === "number";
}
function shadowCacheCheck(shadows) {
  return Number(shadows.cacheSize) >= 12 && Number(shadows.dataset.case007ShadowCount || 0) >= 12;
}
function shadowTargetCheck(misc, targetValue) {
  const hasShadowKey = misc.some((item) => item && item.shadow_key);
  if (!hasShadowKey) return false;
  const cacheHit = misc.some((item) => item && item.value === targetValue);
  return !cacheHit;
}
function bundleUrlCheck(responses) {
  return responses.some((url) => url.endsWith("/assets/request.app.bundle.js"));
}
const verifyHelpers = Object.freeze({ isPayloadShape, shadowCacheCheck, shadowTargetCheck, bundleUrlCheck });
