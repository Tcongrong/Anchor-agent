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
const caseId = "case006_byte_array_transformation";

const checks = {
  page_load: false,
  controls_exist: false,
  button_action: false,
  console_log_found: false,
  target_field_exists: false,
  format_ok: false,
  stable_output: false,
  file_sensitive: false,
  desc_sensitive: false,
  category_sensitive: false,
  batch_sensitive: false,
  codec_sensitive: false,
  shard_sensitive: false,
  viewport_insensitive: false,
  user_agent_insensitive: false,
  submit_decoys_seen: false,
  decoys_not_target: false,
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
  ["src/host/index.html", 20],
  ["src/host/styles.css", 200],
  ["src/host/favicon.svg", 20],
  ["src/z0/k7/q3/t9.js", 360],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 120);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 180);

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
  let z0Lines = 0;
  for (const file of files.filter((item) => /\.(js|html|css|svg)$/.test(item))) {
    const relative = path.relative(hiddenRoot, file).replaceAll("\\", "/");
    const count = linesOf(await readFile(file, "utf8"));
    srcLines += count;
    if (relative.startsWith("src/z0/")) z0Lines += count;
  }
  return srcLines >= 18000 && z0Lines >= 12000;
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
        if (value && typeof value === "object" && value.action === "byte.pipe.commit" && typeof value.byte_array_payload === "string") {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(context, baseUrl, options = {}) {
  const input = {
    batchKey: "REC-7749",
    fileName: "quarterly-report.pdf",
    description: "finance summary",
    category: "finance",
    profileMode: "attested",
    codec: "delta-xor",
    shard: "s3",
    normalize: true,
    consent: true,
    ...options,
  };
  const page = await context.newPage();
  const misc = [];
  const responses = [];
  page.on("response", (response) => responses.push(response.url()));
  page.on("console", async (message) => {
    if (!["debug", "info", "log"].includes(message.type())) return;
    try {
      const value = await message.args()[0]?.jsonValue();
      if (value && !(value.action === "byte.pipe.commit" && value.byte_array_payload)) misc.push(value);
    } catch {}
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.fill("#batchKeyInput", input.batchKey);
  await page.fill("#fileNameInput", input.fileName);
  await page.fill("#fileDescInput", input.description);
  await page.selectOption("#categorySelect", input.category);
  await page.selectOption("#profileModeSelect", input.profileMode);
  await page.selectOption("#codecSelect", input.codec);
  await page.selectOption("#shardSelect", input.shard);
  if (input.normalize) await page.check("#normalizeToggle");
  else await page.uncheck("#normalizeToggle");
  await page.click("#scanButton");
  await page.click("#previewButton");
  if (input.consent) await page.check("#byteTransformConsent");
  else await page.uncheck("#byteTransformConsent");
  await page.click("#sealButton");
  const got = targetPromise(page);
  await page.click("#uploadButton");
  const output = await got;
  const shadows = await page.evaluate(() => ({
    dataset: { ...document.documentElement.dataset },
    cacheSize: Array.isArray(window.__case006ShadowCache) ? window.__case006ShadowCache.length : 0,
    cacheValues: Array.isArray(window.__case006ShadowCache) ? window.__case006ShadowCache.map((row) => row.value) : [],
  }));
  await page.close();
  return { output, misc, shadows, responses };
}

async function blocked(context, baseUrl) {
  const page = await context.newPage();
  await page.route("**/assets/upload.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.fill("#batchKeyInput", "REC-7749").catch(() => null);
  await page.fill("#fileNameInput", "quarterly-report.pdf").catch(() => null);
  await page.fill("#fileDescInput", "finance summary").catch(() => null);
  await page.selectOption("#categorySelect", "finance").catch(() => null);
  await page.selectOption("#profileModeSelect", "attested").catch(() => null);
  await page.selectOption("#codecSelect", "delta-xor").catch(() => null);
  await page.selectOption("#shardSelect", "s3").catch(() => null);
  await page.check("#normalizeToggle").catch(() => null);
  await page.click("#scanButton").catch(() => null);
  await page.click("#previewButton").catch(() => null);
  await page.check("#byteTransformConsent").catch(() => null);
  await page.click("#sealButton").catch(() => null);
  const got = targetPromise(page, 1000);
  await page.click("#uploadButton").catch(() => null);
  const output = await got;
  await page.close();
  return output === null;
}

async function taskJsonClean() {
  const text = (await readFile(path.join(visibleRoot, "task.json"), "utf8")).toLowerCase();
  const leaks = [
    "k7/q3/t9",
    "constructbytearraypayload",
    "bytesourcerows",
    "encodebytepayload",
    "transformbytearray",
    "answer_function",
    "source_function",
    "oracle.hidden",
    "build_meta",
  ];
  return leaks.every((token) => !text.includes(token));
}

async function answerSourcePresent() {
  const source = await readFile(path.join(hiddenRoot, "src/z0/k7/q3/t9.js"), "utf8");
  const sink = await readFile(path.join(hiddenRoot, "src/z0/n0.js"), "utf8");
  return /export\s+function\s+u\b/.test(source)
    && /function\s+constructByteArrayPayload\s*\(/.test(source)
    && /function\s+encodeBytePayload\s*\(/.test(source)
    && /98,\s*121,\s*116,\s*101,\s*95,\s*97,\s*114,\s*114,\s*97,\s*121/.test(sink);
}

async function main() {
  checks.line_count_ok = await lineChecks();
  checks.decoy_file_count = await countByFolder("src/z0/x", /^x\d\d\.js$/) === 44;
  checks.vendor_file_count = await countByFolder("src/z0/v", /^v\d\d\.js$/) === 25;
  checks.task_json_clean = await taskJsonClean();
  checks.hidden_files_present = Boolean(await stat(path.join(hiddenRoot, "oracle.hidden.json")).catch(() => null))
    && Boolean(await stat(path.join(hiddenRoot, "build_meta.hidden.json")).catch(() => null));
  const buildMeta = JSON.parse(await readFile(path.join(hiddenRoot, "build_meta.hidden.json"), "utf8"));
  checks.build_meta_complete = buildMeta.case_id === caseId
    && buildMeta.task_contract?.target_observable?.sink?.field === "byte_array_payload"
    && buildMeta.behavior_category?.paper_category === "byte_array_transformation";
  checks.answer_source_present = await answerSourcePresent();

  const bundleCode = await readFile(bundlePath, "utf8");
  const bundleLines = linesOf(bundleCode);
  checks.bundle_minimum_lines = bundleLines >= 9020;
  checks.bundle_not_single_line = bundleLines > 1;
  checks.no_sourcemap = !/sourceMappingURL/i.test(bundleCode);
  checks.no_worker = !/new\s+Worker\b/.test(bundleCode);
  checks.no_shared_worker = !/\bSharedWorker\b/.test(bundleCode);
  checks.no_service_worker = !/serviceWorker\s*\./.test(bundleCode);
  checks.no_post_message = !/\bpostMessage\s*\(/.test(bundleCode);
  checks.no_broadcast_channel = !/\bBroadcastChannel\b/.test(bundleCode);
  checks.no_iframe = !/<iframe\b|createElement\(["']iframe/.test(bundleCode);
  checks.no_eval = !/\beval\s*\(/.test(bundleCode);
  checks.no_new_function = !/new\s+Function\b/.test(bundleCode);
  checks.no_wasm = !/\bWebAssembly\b/.test(bundleCode);
  checks.bundle_contains_answer_code = /imul/.test(bundleCode) && /byte\.pipe\.commit/.test(bundleCode) && /fromCharCode/.test(bundleCode) && /ba_/.test(bundleCode);
  const assets = await readdir(assetsRoot);
  checks.single_bundle = assets.filter((name) => name.endsWith(".js")).length === 1 && assets.includes("upload.app.bundle.js");

  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = (await page.title()) === "Archive Intake Manifest";
    checks.controls_exist =
      (await page.locator("#batchKeyInput, #fileNameInput, #fileDescInput, #categorySelect, #profileModeSelect, #codecSelect, #shardSelect, #normalizeToggle, #byteTransformConsent, #scanButton, #previewButton, #sealButton, #uploadButton").count()) === 13;
    checks.button_action = (await page.getAttribute("#uploadButton", "data-action")) === "byte.pipe.commit";
    await page.close();

    const s1 = await scenario(context, baseUrl);
    const s2 = await scenario(context, baseUrl);
    const s3 = await scenario(context, baseUrl);
    const cf = await scenario(context, baseUrl, { fileName: "quarterly-appendix.pdf" });
    const cd = await scenario(context, baseUrl, { description: "finance summary revised" });
    const cc = await scenario(context, baseUrl, { category: "legal" });
    const cb = await scenario(context, baseUrl, { batchKey: "REC-7750" });
    const cm = await scenario(context, baseUrl, { codec: "nibble-rotate" });
    const ch = await scenario(context, baseUrl, { shard: "s2" });
    const viewportContext = await browser.newContext({ viewport: { width: 1110, height: 720 } });
    const sv = await scenario(viewportContext, baseUrl);
    await viewportContext.close();
    const uaContext = await browser.newContext({ userAgent: "Case006ByteArrayTransformation/1.0" });
    const su = await scenario(uaContext, baseUrl);
    await uaContext.close();

    const code = s1.output?.byte_array_payload;
    checks.console_log_found = Boolean(s1.output);
    checks.target_field_exists = typeof code === "string";
    checks.format_ok = /^ba_[0-9a-f]{24}$/.test(code || "");
    checks.stable_output = code === s2.output?.byte_array_payload && s2.output?.byte_array_payload === s3.output?.byte_array_payload;
    checks.file_sensitive = code !== cf.output?.byte_array_payload;
    checks.desc_sensitive = code !== cd.output?.byte_array_payload;
    checks.category_sensitive = code !== cc.output?.byte_array_payload;
    checks.batch_sensitive = code !== cb.output?.byte_array_payload;
    checks.codec_sensitive = code !== cm.output?.byte_array_payload;
    checks.shard_sensitive = code !== ch.output?.byte_array_payload;
    checks.viewport_insensitive = code === sv.output?.byte_array_payload;
    checks.user_agent_insensitive = code === su.output?.byte_array_payload;
    checks.submit_decoys_seen = Number(s1.shadows.cacheSize) >= 12 && Number(s1.shadows.dataset.case006DecoyCount || 0) >= 12;
    checks.decoys_not_target = s1.misc.some((item) => item && item.shadow_key) && !s1.shadows.cacheValues.includes(code);
    checks.bundle_visible = s1.responses.some((url) => url.endsWith("/assets/upload.app.bundle.js"));
    checks.bundle_not_blob_or_data = s1.responses.every((url) => !url.startsWith("blob:") && !url.startsWith("data:"));
    checks.blocked_bundle_stops_output = await blocked(context, baseUrl);
    await context.close();
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  const passed = Object.values(checks).every(Boolean);
  console.log(JSON.stringify({ case_id: caseId, passed, byte_array_payload_sample: undefined, checks }, null, 2));
  if (!passed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(JSON.stringify({ case_id: caseId, passed: false, error: "verify_exception", message: error && error.stack || String(error) }, null, 2));
  process.exitCode = 1;
});
