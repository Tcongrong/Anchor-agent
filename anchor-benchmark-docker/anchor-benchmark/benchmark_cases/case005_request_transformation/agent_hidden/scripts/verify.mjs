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
const bundlePath = path.join(assetsRoot, "query.app.bundle.js");
const caseId = "case005_request_transformation";

const checks = {
  page_load: false,
  controls_exist: false,
  form_action: false,
  submit_runs: false,
  console_query_payload_exists: false,
  query_payload_format_valid: false,
  same_input_stable: false,
  different_scope_changes: false,
  different_filter_changes: false,
  dom_updated_on_submit: false,
  decoy_dataset_not_target: false,
  app_bundle_required: false,
  bundle_visible_in_devtools_sources: false,
  bundle_contains_answer_code: false,
  bundle_contains_call_site: false,
  bundle_minimum_lines: false,
  all_files_minimum_lines: false,
  single_bundle: false,
  captured_bundle_present: false,
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
for (let i = 0; i < 8; i += 1) requirements.set(`src/z0/w/w${String(i).padStart(2, "0")}.js`, 180);
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

function targetPromise(page, timeout = 5000) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), timeout);
    page.on("console", async (message) => {
      if (message.type() !== "log") return;
      const arg = message.args()[0];
      if (!arg) return;
      try {
        const value = await arg.jsonValue();
        if (value && typeof value === "object" && value.action === "request.transform" && typeof value.query_payload === "string") {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(browser, baseUrl, scope, filterMode) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.fill("#searchScope", scope);
  await page.selectOption("#filterMode", filterMode);
  await page.check("#filterEnabled");
  const got = targetPromise(page);
  await page.click("#querySubmit");
  const output = await got;
  const dom = await page.evaluate(() => ({
    status: document.querySelector("#queryStatus")?.textContent || "",
    out: document.querySelector("#queryOutput")?.textContent || "",
    dataset: { ...document.documentElement.dataset },
  }));
  await page.close();
  await context.close();
  return { output, dom };
}

async function blocked(browser, baseUrl) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.route("**/assets/query.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.fill("#searchScope", "logs-ops").catch(() => null);
  await page.selectOption("#filterMode", "strict").catch(() => null);
  await page.check("#filterEnabled").catch(() => null);
  const got = targetPromise(page, 1200);
  await page.click("#querySubmit").catch(() => null);
  const output = await got;
  await page.close();
  await context.close();
  return output === null;
}

async function main() {
  checks.all_files_minimum_lines = await lineChecks();
  const bundleCode = await readFile(bundlePath, "utf8");
  const bundleLines = linesOf(bundleCode);
  checks.bundle_minimum_lines = bundleLines >= 9000;
  checks.no_sourcemap = !/sourceMappingURL/i.test(bundleCode);
  const assetFiles = await readdir(assetsRoot);
  checks.single_bundle = assetFiles.filter((file) => file.endsWith(".js")).length === 1 && assetFiles.includes("query.app.bundle.js");
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
  checks.bundle_contains_answer_code =
    /imul/.test(bundleCode) && /buildQueryPayload/.test(bundleCode) && /makeBody/.test(bundleCode);
  checks.bundle_contains_call_site = /console/.test(bundleCode);
  checks.captured_bundle_present = Boolean(
    await stat(path.join(hiddenRoot, "..", "agent_visible", "captures", "devtools-source-dump", "127.0.0.1_4173", "assets", "query.app.bundle.js")).catch(() => null),
  );

  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    const responses = [];
    page.on("response", (response) => responses.push(response.url()));
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = (await page.title()) === "Query Transform Builder";
    checks.controls_exist =
      (await page.locator("#searchScope, #filterMode, #filterEnabled, #queryForm, #querySubmit").count()) === 5;
    checks.form_action = (await page.getAttribute("#queryForm", "data-action")) === "request.transform";
    checks.bundle_visible_in_devtools_sources = responses.some((url) => url.endsWith("/assets/query.app.bundle.js"));
    await page.close();

    const first = await scenario(browser, baseUrl, "logs-ops", "strict");
    const value = first.output?.query_payload;
    checks.submit_runs = Boolean(first.output);
    checks.console_query_payload_exists = typeof value === "string";
    checks.query_payload_format_valid = /^qp_[a-z0-9_-]{10,18}$/.test(value || "");
    checks.dom_updated_on_submit = first.dom.status === "Transformed" && first.dom.out === value;
    const datasetValues = Object.values(first.dom.dataset || {});
    checks.decoy_dataset_not_target = datasetValues.length >= 3 && datasetValues.every((v) => v !== value);

    const second = await scenario(browser, baseUrl, "logs-ops", "strict");
    checks.same_input_stable = value === second.output?.query_payload;
    const changedScope = await scenario(browser, baseUrl, "metrics-core", "strict");
    const changedFilter = await scenario(browser, baseUrl, "logs-ops", "partial");
    checks.different_scope_changes = value !== changedScope.output?.query_payload;
    checks.different_filter_changes = value !== changedFilter.output?.query_payload;

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
