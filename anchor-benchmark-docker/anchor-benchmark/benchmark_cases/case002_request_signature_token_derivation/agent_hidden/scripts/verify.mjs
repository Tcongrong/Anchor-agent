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
const bundlePath = path.join(assetsRoot, "search.app.bundle.js");
const caseId = "case002_request_signature_token_derivation";

const checks = {
  page_load: false,
  controls_exist: false,
  entry_emit: false,
  console_packet_sig_exists: false,
  packet_sig_format_valid: false,
  same_input_stable: false,
  different_source_changes: false,
  new_context_stable: false,
  decoy_outputs_not_target: false,
  app_bundle_required: false,
  bundle_visible_in_devtools_sources: false,
  bundle_contains_answer_code: false,
  bundle_contains_call_site: false,
  bundle_minimum_lines: false,
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
};

const requirements = new Map([
  ["src/host/index.html", 180],
  ["src/host/styles.css", 360],
  ["src/host/favicon.svg", 30],
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
  let src = 0;
  let z0 = 0;
  for (const file of all.filter((item) => /\.(js|mjs|json|html|css|svg|md)$/.test(item))) {
    const relative = path.relative(hiddenRoot, file).replaceAll("\\", "/");
    if (relative.startsWith("dist/")) continue;
    const count = linesOf(await readFile(file, "utf8"));
    if (relative.startsWith("src/")) src += count;
    if (relative.startsWith("src/z0/")) z0 += count;
  }
  return src >= 14080 && z0 >= 12080;
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

function targetPromise(page, timeout = 3500) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), timeout);
    page.on("console", async (message) => {
      if (message.type() !== "log") return;
      const arg = message.args()[0];
      if (!arg) return;
      try {
        const value = await arg.jsonValue();
        if (value && typeof value === "object" && value.action === "packet.emit" && typeof value.packet_sig === "string") {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function configure(page, source, chunk, mode, profile, header) {
  await page.fill("#sourceBytes", source);
  await page.fill("#chunkSize", String(chunk));
  await page.selectOption("#encodingMode", mode);
  await page.selectOption("#profileSelect", profile);
  if (header) await page.check("#includeHeader");
  else await page.uncheck("#includeHeader");
}

async function scenario(browser, baseUrl, source, chunk, mode, profile, header, contextOptions = {}) {
  const context = await browser.newContext(contextOptions);
  const page = await context.newPage();
  const misc = [];
  page.on("console", async (message) => {
    if (!["debug", "info", "log"].includes(message.type())) return;
    try {
      const value = await message.args()[0]?.jsonValue();
      if (value && !(value.action === "packet.emit" && value.packet_sig)) misc.push(value);
    } catch {}
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await configure(page, source, chunk, mode, profile, header);
  await page.click("#stagePacket");
  await page.waitForTimeout(150);
  const got = targetPromise(page);
  await page.click("#emitPacket");
  const output = await got;
  const shadows = await page.evaluate(() => ({ ...document.documentElement.dataset }));
  await page.close();
  await context.close();
  return { output, misc, shadows };
}

async function blocked(browser, baseUrl) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.route("**/assets/search.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await configure(page, "delta frame 01", 9, "delta", "bulk", true).catch(() => null);
  await page.click("#stagePacket").catch(() => null);
  const got = targetPromise(page, 900);
  await page.click("#emitPacket").catch(() => null);
  const output = await got;
  await page.close();
  await context.close();
  return output === null;
}

async function main() {
  checks.all_files_minimum_lines = await lineChecks();
  checks.decoy_file_count = (await countByFolder("src/z0/x", /^x\d\d\.js$/)) === 44;
  checks.vendor_file_count = (await countByFolder("src/z0/v", /^v\d\d\.js$/)) === 25;
  const bundleCode = await readFile(bundlePath, "utf8");
  checks.bundle_minimum_lines = linesOf(bundleCode) >= 9060;
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
  // Structural answer-code markers (obfuscation-resistant; no source-level identifiers).
  checks.bundle_contains_answer_code =
    /imul/.test(bundleCode) &&
    /fromCharCode/.test(bundleCode) &&
    /0x6d2b79f5|0x85ebca6b/.test(bundleCode);
  checks.bundle_contains_call_site = /console/.test(bundleCode);

  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    const responses = [];
    page.on("response", (response) => responses.push(response.url()));
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = (await page.title()) === "Byte Packet Builder";
    checks.controls_exist =
      (await page.locator("#sourceBytes, #chunkSize, #encodingMode, #profileSelect, #includeHeader, #stagePacket, #emitPacket").count()) === 7;
    checks.bundle_visible_in_devtools_sources = responses.some((url) => url.endsWith("/assets/search.app.bundle.js"));
    await page.close();

    const first = await scenario(browser, baseUrl, "delta frame 01", 9, "delta", "bulk", true);
    const sig = first.output?.packet_sig;
    checks.entry_emit = Boolean(first.output);
    checks.console_packet_sig_exists = typeof sig === "string";
    checks.packet_sig_format_valid = /^ss_[a-z0-9]{8,10}_[a-z0-9]+$/.test(sig || "");

    const second = await scenario(browser, baseUrl, "delta frame 01", 9, "delta", "bulk", true);
    checks.same_input_stable = typeof sig === "string" && sig === second.output?.packet_sig;

    const changedSource = await scenario(browser, baseUrl, "omega frame 99", 9, "delta", "bulk", true);
    checks.different_source_changes = typeof sig === "string" && sig !== changedSource.output?.packet_sig;

    const newContextA = await scenario(browser, baseUrl, "delta frame 01", 9, "delta", "bulk", true);
    const newContextB = await scenario(browser, baseUrl, "delta frame 01", 9, "delta", "bulk", true);
    checks.new_context_stable = sig === newContextA.output?.packet_sig && sig === newContextB.output?.packet_sig;

    const decoys = [
      ...first.misc.flatMap((item) => (item ? [item.shadow_key, item.packet_sig, item.shadow_sig] : [])),
      ...Object.values(first.shadows || {}),
    ].filter(Boolean);
    checks.decoy_outputs_not_target = decoys.length > 0 && decoys.every((value) => value !== sig);

    checks.app_bundle_required = await blocked(browser, baseUrl);
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
