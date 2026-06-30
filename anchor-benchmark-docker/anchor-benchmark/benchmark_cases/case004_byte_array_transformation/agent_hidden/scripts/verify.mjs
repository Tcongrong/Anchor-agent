import http from "node:http";
import { createReadStream } from "node:fs";
import { readdir, readFile, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const srcRoot = path.join(hiddenRoot, "src");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const bundleName = "batch.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const capturedBundlePath = path.join(visibleRoot, "captures", "devtools-source-dump", "127.0.0.1_4173", "assets", bundleName);
const checks = {
  canonical_layout: false,
  response_schema_present: false,
  page_load: false,
  controls_exist: false,
  entry_click: false,
  encode_direct: false,
  console_batch_payload_exists: false,
  batch_payload_format_valid: false,
  same_input_stable: false,
  different_key_changes: false,
  different_mode_changes: false,
  decoy_outputs_not_target: false,
  app_bundle_required: false,
  bundle_visible_in_devtools_sources: false,
  bundle_contains_answer_code: false,
  bundle_contains_call_site: false,
  dist_matches_captures: false,
  bundle_minimum_lines: false,
  src_minimum_lines: false,
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
  oracle_hashes_match_captures: false,
};

function linesOf(text) {
  return text.split(/\r?\n/).length;
}

function sha(text) {
  return createHash("sha256").update(text).digest("hex");
}

async function exists(file) {
  return stat(file).then(() => true, () => false);
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

async function srcLineChecks() {
  const all = await readFiles(srcRoot);
  let src = 0;
  let z0 = 0;
  for (const file of all.filter((item) => /\.(js|html|css|svg)$/.test(item))) {
    const relative = path.relative(srcRoot, file).replaceAll("\\", "/");
    const count = linesOf(await readFile(file, "utf8"));
    src += count;
    if (relative.startsWith("z0/")) z0 += count;
  }
  return src >= 14000 && z0 >= 12000;
}

function createServer() {
  const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml" };
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
      response.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream", "Cache-Control": "no-store" });
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
      ? ["C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"]
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
        if (value && typeof value === "object" && value.action === "batch.encode" && typeof value.batch_payload === "string") {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(browser, baseUrl, batchKey = "REC-7749", mode = "zstd") {
  const page = await browser.newPage();
  const misc = [];
  page.on("console", async (message) => {
    if (message.type() === "debug" || message.type() === "info" || message.type() === "log") {
      try {
        const value = await message.args()[0]?.jsonValue();
        if (value && !(value.action === "batch.encode" && value.batch_payload)) misc.push(value);
      } catch {}
    }
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.fill("#batchKey", batchKey);
  await page.selectOption("#compressionMode", mode);
  const got = targetPromise(page, 4000);
  await page.click("#encodeButton");
  const output = await got;
  const shadows = await page.evaluate(() => ({
    data: { ...document.documentElement.dataset },
    keys: Object.keys(window).filter((key) => key.startsWith("__z_shadow_")).map((key) => window[key]),
  }));
  await page.close();
  return { output, misc, shadows };
}

async function blocked(browser, baseUrl) {
  const page = await browser.newPage();
  await page.route("**/assets/batch.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.fill("#batchKey", "REC-7749").catch(() => null);
  await page.selectOption("#compressionMode", "zstd").catch(() => null);
  const got = targetPromise(page, 800);
  await page.click("#encodeButton").catch(() => null);
  const output = await got;
  await page.close();
  return output === null;
}

async function oracleHashesMatch() {
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  const rows = [oracle.primary_anchor, ...oracle.role_oracle];
  for (const row of rows) {
    const span = row.captured_span;
    const text = await readFile(path.join(visibleRoot, span.file), "utf8");
    if (sha(text.slice(span.start_offset, span.end_offset)) !== span.sha256) return false;
  }
  return true;
}

async function main() {
  checks.canonical_layout =
    await exists(path.join(visibleRoot, "task.json")) &&
    await exists(path.join(visibleRoot, "captures")) &&
    await exists(path.join(hiddenRoot, "oracle.hidden.json")) &&
    await exists(path.join(hiddenRoot, "build_meta.hidden.json")) &&
    await exists(path.join(hiddenRoot, "src")) &&
    await exists(path.join(hiddenRoot, "scripts"));

  const task = JSON.parse(await readFile(path.join(visibleRoot, "task.json"), "utf8"));
  checks.response_schema_present = Boolean(task.answer_format?.response_schema?.function_name && task.answer_format?.response_schema?.slice?.fields?.code);
  checks.src_minimum_lines = await srcLineChecks();
  const bundleCode = await readFile(bundlePath, "utf8");
  const capturedBundleCode = await readFile(capturedBundlePath, "utf8");
  checks.dist_matches_captures = sha(bundleCode) === sha(capturedBundleCode);
  checks.bundle_minimum_lines = linesOf(bundleCode) >= 9000;
  checks.no_sourcemap = !/sourceMappingURL/i.test(bundleCode);
  const assetFiles = await readdir(assetsRoot);
  checks.no_worker_bundle = assetFiles.every((file) => !/worker/i.test(file));
  checks.no_worker_constructor = !/new\s+Worker/i.test(bundleCode);
  checks.no_service_worker = !/serviceWorker\s*\./i.test(bundleCode);
  checks.no_shared_worker = !/SharedWorker/i.test(bundleCode);
  checks.no_broadcast_channel = !/BroadcastChannel/i.test(bundleCode);
  checks.no_post_message = !/postMessage\s*\(/i.test(bundleCode);
  checks.no_iframe = !/<iframe|createElement\(['"]iframe/i.test(bundleCode);
  checks.no_eval = !/eval\s*\(/i.test(bundleCode);
  checks.no_new_function = !/new\s+Function/i.test(bundleCode);
  checks.no_wasm = !/WebAssembly/i.test(bundleCode);
  checks.bundle_contains_answer_code = /imul/.test(bundleCode) && /serializePackedBytes|byteFrame|Uint8Array/.test(bundleCode) && /batch_hash|batch_trace/.test(bundleCode);
  checks.bundle_contains_call_site = /console/.test(bundleCode);
  checks.oracle_hashes_match_captures = await oracleHashesMatch();

  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    const responses = [];
    page.on("response", (response) => responses.push(response.url()));
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = await page.title() === "Batch Data Encoder";
    checks.controls_exist =
      await page.locator("#batchKey, #compressionMode, #encodeButton").count() === 3 &&
      await page.getAttribute("#encodeButton", "data-op") === "batch.encode";
    checks.bundle_visible_in_devtools_sources = responses.some((url) => url.endsWith(`/assets/${bundleName}`));
    await page.close();

    const first = await scenario(browser, baseUrl, "REC-7749", "zstd");
    const code = first.output?.batch_payload;
    checks.encode_direct = Boolean(first.output);
    checks.entry_click = Boolean(first.output);
    checks.console_batch_payload_exists = typeof code === "string";
    checks.batch_payload_format_valid = /^ca_[A-Za-z0-9_-]{24}$/.test(code || "");
    const second = await scenario(browser, baseUrl, "REC-7749", "zstd");
    checks.same_input_stable = code === second.output?.batch_payload;
    checks.different_key_changes = code !== (await scenario(browser, baseUrl, "REC-9900", "zstd")).output?.batch_payload;
    checks.different_mode_changes = code !== (await scenario(browser, baseUrl, "REC-7749", "none")).output?.batch_payload;
    const decoys = [...first.misc.flatMap((item) => item ? [item.batch_hash, item.batch_trace, item.batch_payload] : []), ...Object.values(first.shadows.data || {}), ...(first.shadows.keys || [])];
    checks.decoy_outputs_not_target = decoys.some(Boolean) && decoys.every((value) => value !== code);
    checks.app_bundle_required = await blocked(browser, baseUrl);
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  const passed = Object.values(checks).every(Boolean);
  console.log(JSON.stringify({ case_id: "case004_byte_array_transformation", passed, checks }, null, 2));
  if (!passed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
