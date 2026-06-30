import http from "node:http";
import { createReadStream } from "node:fs";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const srcRoot = path.join(hiddenRoot, "src");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const bundlePath = path.join(assetsRoot, "note.app.bundle.js");

const checks = {
  page_load: false,
  controls_exist: false,
  entry_submit: false,
  console_query_pack_exists: false,
  query_pack_format_valid: false,
  same_input_stable: false,
  term_change_changes: false,
  scope_change_changes: false,
  depth_change_changes: false,
  decoys_not_target: false,
  fetch_query_pack_header_sent: false,
  fetch_query_pack_matches_console: false,
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
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const resolved = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await readFiles(resolved));
    else out.push(resolved);
  }
  return out;
}

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(srcRoot, folder));
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
    if (relative.startsWith("node_modules/")) continue;
    const count = linesOf(await readFile(file, "utf8"));
    total += count;
    if (relative.startsWith("src/")) src += count;
    if (relative.startsWith("src/z0/")) z0 += count;
  }
  return src >= 14000 && z0 >= 12000;
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

function targetPromise(page, timeout = 3000) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), timeout);
    page.on("console", async (message) => {
      if (message.type() !== "log") return;
      const arg = message.args()[0];
      if (!arg) return;
      try {
        const value = await arg.jsonValue();
        if (value && typeof value === "object" && value.action === "filter.apply" && typeof value.query_pack === "string") {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(browser, baseUrl, scope, term, depth) {
  const context = await browser.newContext();
  const page = await context.newPage();
  const misc = [];
  const fetchPacks = [];
  page.on("console", async (message) => {
    if (["debug", "info", "log"].includes(message.type())) {
      try {
        const value = await message.args()[0]?.jsonValue();
        if (value && !(value.action === "filter.apply" && value.query_pack)) misc.push(value);
      } catch {}
    }
  });
  await page.route("**/api/filter/run", async (route) => {
    const headers = route.request().headers();
    fetchPacks.push(headers["x-query-pack"] || "");
    await route.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}' });
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.selectOption("#queryScope", scope);
  await page.fill("#queryTerm", term);
  await page.selectOption("#queryDepth", depth);
  const got = targetPromise(page);
  await page.click("#runQueryButton");
  const output = await got;
  const shadows = await page.evaluate(() => ({ ...document.documentElement.dataset }));
  await page.close();
  await context.close();
  return { output, misc, shadows, fetchPacks };
}

async function blocked(browser, baseUrl) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.route("**/assets/note.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.selectOption("#queryScope", "tasks").catch(() => null);
  await page.fill("#queryTerm", "supplier deadline").catch(() => null);
  await page.selectOption("#queryDepth", "deep").catch(() => null);
  const got = targetPromise(page, 900);
  await page.click("#runQueryButton").catch(() => null);
  const output = await got;
  await page.close();
  await context.close();
  return output === null;
}

async function main() {
  checks.all_files_minimum_lines = await lineChecks();
  checks.decoy_file_count = (await countByFolder("z0/x", /^x\d\d\.js$/)) === 44;
  checks.vendor_file_count = (await countByFolder("z0/v", /^v\d\d\.js$/)) === 25;
  const bundleCode = await readFile(bundlePath, "utf8");
  const bundleLines = linesOf(bundleCode);
  checks.bundle_minimum_lines = bundleLines >= 9000;
  checks.no_sourcemap = !/sourceMappingURL/i.test(bundleCode);
  const assetFiles = await readdir(assetsRoot);
  checks.no_worker_bundle = assetFiles.every((file) => !/worker/i.test(file));
  checks.no_worker_constructor = !/new\s+Worker/i.test(bundleCode);
  checks.no_service_worker = !/serviceWorker\s*\./i.test(bundleCode);
  checks.no_shared_worker = !/SharedWorker/i.test(bundleCode);
  checks.no_broadcast_channel = !/BroadcastChannel/i.test(bundleCode);
  checks.no_post_message = !/postMessage\s*\(/i.test(bundleCode);
  checks.no_iframe = !/<iframe|createElement\(['\"]iframe/i.test(bundleCode);
  checks.no_eval = !/eval\s*\(/i.test(bundleCode);
  checks.no_new_function = !/new\s+Function/i.test(bundleCode);
  checks.no_wasm = !/WebAssembly/i.test(bundleCode);
  checks.bundle_contains_answer_code =
    /imul/.test(bundleCode) &&
    /createReducer|makeTape|normalizeTuple/.test(bundleCode) &&
    /np_/.test(bundleCode);
  checks.bundle_contains_call_site = /console/.test(bundleCode) && /fetch/.test(bundleCode);

  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    const responses = [];
    page.on("response", (response) => responses.push(response.url()));
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = (await page.title()) === "Filter Query Board";
    checks.controls_exist = (await page.locator("#queryScope, #queryTerm, #queryDepth, #runQueryButton").count()) === 4;
    checks.bundle_visible_in_devtools_sources = responses.some((url) => url.endsWith("/assets/note.app.bundle.js"));
    await page.close();

    const first = await scenario(browser, baseUrl, "tasks", "supplier deadline", "deep");
    const pack = first.output?.query_pack;
    checks.entry_submit = Boolean(first.output);
    checks.console_query_pack_exists = typeof pack === "string";
    checks.query_pack_format_valid = /^np_[A-Za-z0-9_-]+\.[A-Za-z0-9]{2}$/.test(pack || "");
    checks.fetch_query_pack_header_sent = first.fetchPacks.length > 0 && first.fetchPacks[0] !== "";
    checks.fetch_query_pack_matches_console = first.fetchPacks.length > 0 && first.fetchPacks[0] === pack;
    const second = await scenario(browser, baseUrl, "tasks", "supplier deadline", "deep");
    const third = await scenario(browser, baseUrl, "tasks", "supplier deadline", "deep");
    checks.same_input_stable = pack === second.output?.query_pack && pack === third.output?.query_pack;
    const termChanged = await scenario(browser, baseUrl, "tasks", "budget review", "deep");
    const scopeChanged = await scenario(browser, baseUrl, "projects", "supplier deadline", "deep");
    const depthChanged = await scenario(browser, baseUrl, "tasks", "supplier deadline", "shallow");
    checks.term_change_changes = pack !== termChanged.output?.query_pack;
    checks.scope_change_changes = pack !== scopeChanged.output?.query_pack;
    checks.depth_change_changes = pack !== depthChanged.output?.query_pack;
    const decoys = [
      ...first.misc.flatMap((item) => (item ? [item.shadow, item.value, item.query_pack] : [])),
      ...Object.values(first.shadows || {}),
    ].filter(Boolean);
    checks.decoys_not_target = decoys.length > 0 && decoys.every((value) => value !== pack);
    checks.app_bundle_required = await blocked(browser, baseUrl);
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  const passed = Object.values(checks).every(Boolean);
  console.log(JSON.stringify({ case_id: "case003_request_transformation", passed, checks }, null, 2));
  if (!passed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
