import http from "node:http";
import { createReadStream } from "node:fs";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const srcRoot = path.join(hiddenRoot, "src");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const bundlePath = path.join(assetsRoot, "note.app.bundle.js");
const captureBundleRel = "captures/devtools-source-dump/127.0.0.1_4173/assets/note.app.bundle.js";
const captureBundlePath = path.join(visibleRoot, captureBundleRel);
const caseId = "case003_byte_array_transformation";

const checks = {
  page_load: false,
  controls_exist: false,
  entry_submit: false,
  console_byte_payload_exists: false,
  byte_payload_format_valid: false,
  same_input_stable: false,
  encoding_change_changes: false,
  channel_change_changes: false,
  length_change_changes: false,
  decoys_not_target: false,
  bundle_visible: false,
  bundle_not_single_line: false,
  captures_exist: false,
  dist_capture_bundle_match: false,
  role_oracle_spans_hash: false,
  role_oracle_answer_functions: false,
  primary_anchor_valid: false,
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
  fetch_byte_pack_header_sent: false,
  fetch_byte_pack_matches_console: false
};

function linesOf(text) {
  return text.split(/\r?\n/).length;
}

function sha(text) {
  return createHash("sha256").update(text).digest("hex");
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
  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => {
      resolve({ server, baseUrl: `http://127.0.0.1:${server.address().port}/` });
    });
  });
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
        if (
          value &&
          typeof value === "object" &&
          value.action === "stream.push" &&
          typeof value.byte_payload === "string"
        ) {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(context, baseUrl, encoding, channel, data) {
  const page = await context.newPage();
  const misc = [];
  const responses = [];
  const fetchPacks = [];
  page.on("response", (response) => responses.push(response.url()));
  page.on("console", async (message) => {
    if (!["debug", "info", "log"].includes(message.type())) return;
    try {
      const value = await message.args()[0]?.jsonValue();
      if (value && !(value.action === "stream.push" && value.byte_payload)) misc.push(value);
    } catch {}
  });
  await page.route("**/api/stream/push", async (route) => {
    const headers = route.request().headers();
    fetchPacks.push(headers["x-byte-pack"] || "");
    await route.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}' });
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.click(`input[name="streamFormat"][value="${encoding}"]`);
  await page.click(`input[name="streamMode"][value="${channel}"]`);
  await page.fill("#streamData", data);
  const got = targetPromise(page);
  await page.click("#runQueryButton");
  const output = await got;
  const shadows = await page.evaluate(() => ({ ...document.documentElement.dataset }));
  await page.close();
  return { output, misc, shadows, responses, fetchPacks };
}

async function blocked(context, baseUrl) {
  const page = await context.newPage();
  await page.route("**/assets/note.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.click('input[name="streamFormat"][value="hex"]').catch(() => null);
  await page.click('input[name="streamMode"][value="raw"]').catch(() => null);
  await page.fill("#streamData", "").catch(() => null);
  const got = targetPromise(page, 900);
  await page.click("#runQueryButton").catch(() => null);
  const output = await got;
  await page.close();
  return output === null;
}

async function verifyOracleSpans() {
  const bundle = await readFile(captureBundlePath, "utf8");
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  const rows = [oracle.primary_anchor, ...oracle.role_oracle];
  let hashes = 0;
  let names = 0;
  for (const row of rows) {
    const span = row.captured_span || {};
    if (span.file !== captureBundleRel) continue;
    if (span.start_offset < 0 || span.end_offset <= span.start_offset) continue;
    const slice = bundle.slice(span.start_offset, span.end_offset);
    if (sha(slice) === span.sha256) hashes += 1;
    const match = slice.trim().match(/^function\s+([A-Za-z_$][\w$]*)\s*\(/);
    if (match && row.answer_function === match[1]) names += 1;
  }
  checks.role_oracle_spans_hash = hashes === rows.length;
  checks.role_oracle_answer_functions = names === rows.length;
  checks.primary_anchor_valid =
    oracle.primary_anchor?.answer_function &&
    oracle.primary_anchor?.source_function &&
    oracle.primary_anchor?.captured_span?.start_offset >= 0 &&
    oracle.role_oracle.filter((row) => row.role === "Anchor").length === 1;
}

async function main() {
  const bundleCode = await readFile(bundlePath, "utf8");
  const captureBundle = await readFile(captureBundlePath, "utf8").catch(() => "");
  checks.captures_exist =
    Boolean(captureBundle) &&
    Boolean(await readFile(path.join(visibleRoot, "captures/devtools-source-dump/manifest.json"), "utf8").catch(() => ""));
  checks.dist_capture_bundle_match = captureBundle === bundleCode;
  checks.decoy_file_count = (await countByFolder("src/z0/x", /^x\d\d\.js$/)) === 44;
  checks.vendor_file_count = (await countByFolder("src/z0/v", /^v\d\d\.js$/)) === 25;
  checks.bundle_not_single_line = linesOf(bundleCode) > 1;
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
  checks.answer_code_visible = /Math\[['"]imul['"]\]|Math\.imul|imul/.test(bundleCode) && /bx_/.test(bundleCode);
  await verifyOracleSpans();

  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const inspectContext = await browser.newContext();
    const page = await inspectContext.newPage();
    const responses = [];
    page.on("response", (response) => responses.push(response.url()));
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = (await page.title()) === "Byte Stream Composer";
    checks.controls_exist =
      (await page.locator('input[name="streamFormat"]').count()) === 3 &&
      (await page.locator('input[name="streamMode"]').count()) === 3 &&
      (await page.locator("#streamData, #runQueryButton").count()) === 2;
    checks.bundle_visible = responses.some((url) => url.endsWith("/assets/note.app.bundle.js"));
    await inspectContext.close();

    const context = await browser.newContext();
    const first = await scenario(context, baseUrl, "binary", "encoded", "deadbeef01020304");
    const pack = first.output?.byte_payload;
    checks.entry_submit = Boolean(first.output);
    checks.console_byte_payload_exists = typeof pack === "string";
    checks.byte_payload_format_valid = /^bx_[0-9a-f]+:[0-9a-f]{2}$/.test(pack || "");
    checks.fetch_byte_pack_header_sent = first.fetchPacks.length > 0 && first.fetchPacks[0] !== "";
    checks.fetch_byte_pack_matches_console = first.fetchPacks[0] === pack;
    const second = await scenario(context, baseUrl, "binary", "encoded", "deadbeef01020304");
    const third = await scenario(context, baseUrl, "binary", "encoded", "deadbeef01020304");
    checks.same_input_stable = pack === second.output?.byte_payload && pack === third.output?.byte_payload;
    const encodingChanged = await scenario(context, baseUrl, "text", "encoded", "deadbeef01020304");
    const channelChanged = await scenario(context, baseUrl, "binary", "raw", "deadbeef01020304");
    const lengthChanged = await scenario(context, baseUrl, "binary", "encoded", "cafebabe");
    checks.encoding_change_changes = pack !== encodingChanged.output?.byte_payload;
    checks.channel_change_changes = pack !== channelChanged.output?.byte_payload;
    checks.length_change_changes = pack !== lengthChanged.output?.byte_payload;
    const decoys = [
      ...first.misc.flatMap((item) => (item ? [item.shadow, item.value, item.byte_payload] : [])),
      ...Object.values(first.shadows || {})
    ].filter(Boolean);
    checks.decoys_not_target = decoys.length > 0 && decoys.every((value) => value !== pack);
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
