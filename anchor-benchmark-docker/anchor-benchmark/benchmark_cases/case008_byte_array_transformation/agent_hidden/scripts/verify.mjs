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
const bundleName = "filter.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const caseId = "case008_byte_array_transformation";
const targetAction = "table.segment.commit";

const checks = {
  page_load: false,
  controls_exist: false,
  button_action: false,
  console_log_found: false,
  target_field_exists: false,
  format_ok: false,
  stable_output: false,
  status_sensitive: false,
  amount_sensitive: false,
  owner_sensitive: false,
  priority_sensitive: false,
  review_sensitive: false,
  viewport_insensitive: false,
  user_agent_insensitive: false,
  diversion_debug_seen: false,
  diversions_not_target: false,
  blocked_bundle_stops_output: false,
  bundle_visible: false,
  bundle_not_blob_or_data: false,
  bundle_minimum_lines: false,
  bundle_not_single_line: false,
  single_bundle: false,
  no_sourcemap: false,
  bundle_contains_answer_code: false,
  no_worker: false,
  no_shared_worker: false,
  no_service_worker: false,
  no_post_message: false,
  no_message_channel: false,
  no_broadcast_channel: false,
  no_iframe: false,
  no_eval: false,
  no_new_function: false,
  no_wasm: false,
  line_count_ok: false,
  decoy_file_count: false,
  vendor_file_count: false,
  task_json_clean: false,
  hidden_files_present: false,
  build_meta_complete: false,
  answer_source_present: false,
};

const requirements = new Map([
  ["src/host/index.html", 180],
  ["src/host/styles.css", 300],
  ["src/host/favicon.svg", 20],
  ["src/z8/k7/q3/t9.js", 360],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z8/x/x${String(i).padStart(2, "0")}.js`, 120);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z8/v/v${String(i).padStart(2, "0")}.js`, 180);

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

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(hiddenRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
}

async function lineChecks() {
  for (const [relative, required] of requirements) {
    const text = await readFile(path.join(hiddenRoot, relative), "utf8");
    if (linesOf(text) < required) return false;
  }
  const files = await readFiles(path.join(hiddenRoot, "src"));
  let srcLines = 0;
  let z8Lines = 0;
  for (const file of files.filter((item) => /\.(js|html|css|svg)$/.test(item))) {
    const relative = path.relative(hiddenRoot, file).replaceAll("\\", "/");
    const count = linesOf(await readFile(file, "utf8"));
    srcLines += count;
    if (relative.startsWith("src/z8/")) z8Lines += count;
  }
  return srcLines >= 14000 && z8Lines >= 12000;
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
        if (value && typeof value === "object" && value.action === targetAction && typeof value.typed_array_payload === "string") {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(context, baseUrl, options = {}) {
  const input = { status: "open", amount: "250", owner: "maria", priority: "escalated", review: true, ...options };
  const page = await context.newPage();
  const misc = [];
  const responses = [];
  page.on("response", (response) => responses.push(response.url()));
  page.on("console", async (message) => {
    if (!["debug", "info", "log"].includes(message.type())) return;
    try {
      const value = await message.args()[0]?.jsonValue();
      if (value && !(value.action === targetAction && value.typed_array_payload)) misc.push(value);
    } catch {}
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.click("#armBatch");
  await page.selectOption("#priorityFilter", input.priority);
  await page.selectOption("#statusFilter", input.status);
  await page.fill("#minAmount", input.amount);
  await page.fill("#ownerInput", input.owner);
  await page.setChecked("#reviewToggle", input.review);
  await page.click("#previewBatch");
  const got = targetPromise(page);
  await page.click("#commitFilter");
  const output = await got;
  const view = await page.evaluate(() => ({
    dataset: { ...document.documentElement.dataset },
    cacheSize: Array.isArray(window.__case008ShadowCache) ? window.__case008ShadowCache.length : 0,
    cacheValues: Array.isArray(window.__case008ShadowCache) ? window.__case008ShadowCache.map((row) => row.value) : [],
  }));
  await page.close();
  return { output, misc, view, responses };
}

async function diversions(context, baseUrl) {
  const page = await context.newPage();
  const values = [];
  page.on("console", async (message) => {
    try {
      values.push(await message.args()[0]?.jsonValue());
    } catch {}
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  for (const selector of ['[data-action="table.export.preview"]', '[data-action="table.page.prev"]', '[data-action="table.page.next"]', '[data-action="table.columns.save"]', '[data-action="table.badge.refresh"]', '[data-action="table.view.pin"]']) {
    await page.click(selector).catch(() => null);
    await page.waitForTimeout(40);
  }
  await page.close();
  return values;
}

async function blocked(context, baseUrl) {
  const page = await context.newPage();
  await page.route(`**/assets/${bundleName}`, (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.click("#armBatch").catch(() => null);
  await page.selectOption("#priorityFilter", "escalated").catch(() => null);
  await page.selectOption("#statusFilter", "open").catch(() => null);
  await page.fill("#minAmount", "250").catch(() => null);
  await page.fill("#ownerInput", "maria").catch(() => null);
  await page.setChecked("#reviewToggle", true).catch(() => null);
  await page.click("#previewBatch").catch(() => null);
  const got = targetPromise(page, 1000);
  await page.click("#commitFilter").catch(() => null);
  const output = await got;
  await page.close();
  return output === null;
}

async function taskJsonClean() {
  const text = (await readFile(path.join(visibleRoot, "task.json"), "utf8")).toLowerCase();
  const leaks = [
    "k7/q3/t9",
    "transformtabletypedarray",
    "materializelanebytes",
    "encodetypedarraypayload",
    "createsource",
    "answer_function",
    "source_function",
    "oracle.hidden",
    "build_meta",
  ];
  return leaks.every((token) => !text.includes(token));
}

async function answerSourcePresent() {
  const source = await readFile(path.join(hiddenRoot, "src/z8/k7/q3/t9.js"), "utf8");
  const sink = await readFile(path.join(hiddenRoot, "src/z8/n0.js"), "utf8");
  return /export\s+function\s+u\b/.test(source)
    && /function\s+transformTableTypedArray\s*\(/.test(source)
    && /function\s+encodeTypedArrayPayload\s*\(/.test(source)
    && /new\s+Uint8Array\s*\(\s*18\s*\)/.test(source)
    && /116,\s*121,\s*112,\s*101,\s*100,\s*95,\s*97,\s*114,\s*114,\s*97,\s*121/.test(sink);
}

async function main() {
  checks.line_count_ok = await lineChecks();
  checks.decoy_file_count = await countByFolder("src/z8/x", /^x\d\d\.js$/) === 44;
  checks.vendor_file_count = await countByFolder("src/z8/v", /^v\d\d\.js$/) === 25;
  checks.task_json_clean = await taskJsonClean();
  checks.hidden_files_present = Boolean(await stat(path.join(hiddenRoot, "oracle.hidden.json")).catch(() => null))
    && Boolean(await stat(path.join(hiddenRoot, "build_meta.hidden.json")).catch(() => null));
  const buildMeta = JSON.parse(await readFile(path.join(hiddenRoot, "build_meta.hidden.json"), "utf8"));
  checks.build_meta_complete = buildMeta.case_id === caseId
    && buildMeta.task_contract?.target_observable?.sink?.field === "typed_array_payload"
    && buildMeta.behavior_category?.paper_category === "byte_array_transformation";
  checks.answer_source_present = await answerSourcePresent();

  const bundleCode = await readFile(bundlePath, "utf8");
  const bundleLines = linesOf(bundleCode);
  checks.bundle_minimum_lines = bundleLines >= 20000;
  checks.bundle_not_single_line = bundleLines > 1;
  checks.no_sourcemap = !/sourceMappingURL/i.test(bundleCode);
  checks.no_worker = !/new\s+Worker\b/.test(bundleCode);
  checks.no_shared_worker = !/\bSharedWorker\b/.test(bundleCode);
  checks.no_service_worker = !/serviceWorker\s*\./.test(bundleCode);
  checks.no_post_message = !/\bpostMessage\s*\(/.test(bundleCode);
  checks.no_message_channel = !/\bMessageChannel\b/.test(bundleCode);
  checks.no_broadcast_channel = !/\bBroadcastChannel\b/.test(bundleCode);
  checks.no_iframe = !/<iframe\b|createElement\(["']iframe/.test(bundleCode);
  checks.no_eval = !/\beval\s*\(/.test(bundleCode);
  checks.no_new_function = !/new\s+Function\b/.test(bundleCode);
  checks.no_wasm = !/\bWebAssembly\b/.test(bundleCode);
  checks.bundle_contains_answer_code = /imul/.test(bundleCode)
    && /Uint8Array/.test(bundleCode)
    && /fromCharCode/.test(bundleCode)
    && /ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_/.test(bundleCode);
  const assets = await readdir(assetsRoot);
  checks.single_bundle = assets.filter((name) => name.endsWith(".js")).length === 1 && assets.includes(bundleName);

  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = (await page.title()) === "Operations Table Console";
    checks.controls_exist =
      (await page.locator("#armBatch, #priorityFilter, #statusFilter, #minAmount, #ownerInput, #reviewToggle, #previewBatch, #commitFilter").count()) === 8;
    checks.button_action = (await page.getAttribute("#commitFilter", "data-action")) === targetAction;
    await page.close();

    const s1 = await scenario(context, baseUrl);
    const s2 = await scenario(context, baseUrl);
    const s3 = await scenario(context, baseUrl);
    const cStatus = await scenario(context, baseUrl, { status: "pending" });
    const cAmount = await scenario(context, baseUrl, { amount: "500" });
    const cOwner = await scenario(context, baseUrl, { owner: "nora" });
    const cPriority = await scenario(context, baseUrl, { priority: "watch" });
    const cReview = await scenario(context, baseUrl, { review: false });
    const viewportContext = await browser.newContext({ viewport: { width: 1110, height: 720 } });
    const sv = await scenario(viewportContext, baseUrl);
    await viewportContext.close();
    const uaContext = await browser.newContext({ userAgent: "Case008TypeArrayTransformation/1.0" });
    const su = await scenario(uaContext, baseUrl);
    await uaContext.close();
    const diversionValues = await diversions(context, baseUrl);

    const code = s1.output?.typed_array_payload;
    checks.console_log_found = Boolean(s1.output);
    checks.target_field_exists = typeof code === "string";
    checks.format_ok = /^ta_[A-Za-z0-9_-]{24}$/.test(code || "");
    checks.stable_output = code === s2.output?.typed_array_payload && s2.output?.typed_array_payload === s3.output?.typed_array_payload;
    checks.status_sensitive = Boolean(cStatus.output && cStatus.output.typed_array_payload !== code);
    checks.amount_sensitive = Boolean(cAmount.output && cAmount.output.typed_array_payload !== code);
    checks.owner_sensitive = Boolean(cOwner.output && cOwner.output.typed_array_payload !== code);
    checks.priority_sensitive = Boolean(cPriority.output && cPriority.output.typed_array_payload !== code);
    checks.review_sensitive = Boolean(cReview.output && cReview.output.typed_array_payload !== code);
    checks.viewport_insensitive = code === sv.output?.typed_array_payload;
    checks.user_agent_insensitive = code === su.output?.typed_array_payload;
    checks.diversion_debug_seen = diversionValues.some((value) => value && value.action === "table.shadow.action");
    checks.diversions_not_target = diversionValues.every((value) => !(value && typeof value === "object" && Object.hasOwn(value, "typed_array_payload")));
    checks.bundle_visible = s1.responses.some((url) => url.endsWith(`/assets/${bundleName}`));
    checks.bundle_not_blob_or_data = s1.responses.every((url) => !url.startsWith("blob:") && !url.startsWith("data:"));
    checks.blocked_bundle_stops_output = await blocked(context, baseUrl);
    await context.close();
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  const passed = Object.values(checks).every(Boolean);
  console.log(JSON.stringify({ case_id: caseId, passed, checks }, null, 2));
  if (!passed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(JSON.stringify({ case_id: caseId, passed: false, error: "verify_exception", message: error && error.stack || String(error) }, null, 2));
  process.exitCode = 1;
});
