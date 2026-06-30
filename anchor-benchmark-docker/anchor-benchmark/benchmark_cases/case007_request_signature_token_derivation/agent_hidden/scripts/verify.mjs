import http from "node:http";
import { createReadStream } from "node:fs";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const bundleName = "fingerprint.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const caseId = "case007_request_signature_token_derivation";

const checks = {
  page_load: false,
  controls_exist: false,
  standard_interaction: false,
  console_log_found: false,
  target_field_exists: false,
  format_ok: false,
  stable_output: false,
  method_sensitive: false,
  auth_scheme_sensitive: false,
  endpoint_sensitive: false,
  shadows_seen: false,
  shadows_not_target: false,
  app_bundle_required: false,
  bundle_visible_in_devtools_sources: false,
  bundle_contains_answer_code: false,
  bundle_contains_call_site: false,
  bundle_minimum_lines: false,
  src_minimum_lines: false,
  captures_present: false,
  oracle_spans_complete: false,
  build_meta_aligned: false,
  task_json_clean: false,
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
  no_wasm: false
};

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

async function srcLineChecks() {
  const files = await readFiles(path.join(hiddenRoot, "src"));
  let src = 0;
  let z0 = 0;
  for (const file of files.filter((item) => /\.(js|html|css|svg)$/.test(item))) {
    const count = linesOf(await readFile(file, "utf8"));
    src += count;
    if (path.relative(path.join(hiddenRoot, "src"), file).replaceAll("\\", "/").startsWith("z0/")) z0 += count;
  }
  return src >= 14060 && z0 >= 12060;
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
    const clean = decodeURIComponent(url.pathname || "/").replace(/^\/+/, "");
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

function targetPromise(page, timeout = 2500) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), timeout);
    page.on("console", async (message) => {
      if (message.type() !== "log") return;
      const arg = message.args()[0];
      if (!arg) return;
      try {
        const value = await arg.jsonValue();
        if (value && typeof value === "object" && value.action === "request.sign" && typeof value.req_sig === "string") {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(browser, baseUrl, endpoint, method, authScheme) {
  const context = await browser.newContext();
  const page = await context.newPage();
  const misc = [];
  const responses = [];
  page.on("response", (response) => responses.push(response.url()));
  page.on("console", async (message) => {
    if (!["debug", "info", "log"].includes(message.type())) return;
    try {
      const value = await message.args()[0]?.jsonValue();
      if (value && !(value.action === "request.sign" && value.req_sig)) misc.push(value);
    } catch {}
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  checks.page_load = (await page.title()) === "Request Signature Workbench";
  checks.controls_exist =
    (await page.locator("#apiEndpoint").count()) === 1 &&
    (await page.locator("#httpMethod").count()) === 1 &&
    (await page.locator("#authScheme").count()) === 1 &&
    (await page.locator("#generateToken").count()) === 1;
  await page.fill("#apiEndpoint", endpoint);
  await page.selectOption("#httpMethod", method);
  await page.selectOption("#authScheme", authScheme);
  const got = targetPromise(page);
  await page.click("#generateToken");
  const output = await got;
  const shadows = await page.evaluate(() => ({
    dataset: { ...document.documentElement.dataset },
    cacheValues: Array.isArray(window.__case007ShadowCache) ? window.__case007ShadowCache.map((row) => row.value) : [],
  }));
  await page.close();
  await context.close();
  return { output, misc, responses, shadows };
}

async function blocked(browser, baseUrl) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.route(`**/assets/${bundleName}`, (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.fill("#apiEndpoint", "/api/v2/users").catch(() => null);
  await page.selectOption("#httpMethod", "POST").catch(() => null);
  await page.selectOption("#authScheme", "bearer").catch(() => null);
  const got = targetPromise(page, 800);
  await page.click("#generateToken").catch(() => null);
  const output = await got;
  await page.close();
  await context.close();
  return output === null;
}

function forbiddenStatus(code) {
  return {
    no_sourcemap: !/sourceMappingURL/i.test(code),
    no_worker_constructor: !/new\s+Worker/i.test(code),
    no_service_worker: !/serviceWorker\s*\./i.test(code),
    no_shared_worker: !/SharedWorker/i.test(code),
    no_broadcast_channel: !/BroadcastChannel/i.test(code),
    no_post_message: !/postMessage\s*\(/i.test(code),
    no_iframe: !/<iframe|createElement\(['"]iframe/i.test(code),
    no_eval: !/eval\s*\(/i.test(code),
    no_new_function: !/new\s+Function/i.test(code),
    no_wasm: !/WebAssembly/i.test(code),
  };
}

async function taskJsonClean() {
  const text = await readFile(path.join(visibleRoot, "task.json"), "utf8");
  const forbidden = [
    "src/z0/k7/q3/t9.js",
    "slot 23",
    "oracle",
    "hidden",
    "build_meta",
    "captured_span",
    "answer_function",
    "source_function"
  ];
  return forbidden.every((token) => !text.toLowerCase().includes(token.toLowerCase()));
}

async function oracleSpansComplete() {
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  const rows = [oracle.primary_anchor, ...oracle.role_oracle];
  return rows.every((row) =>
    row.answer_function &&
    row.source_function &&
    row.captured_span?.file?.startsWith("captures/") &&
    Number.isInteger(row.captured_span.start_offset) &&
    Number.isInteger(row.captured_span.end_offset) &&
    typeof row.captured_span.sha256 === "string" &&
    typeof row.captured_span.normalized_sha256 === "string"
  );
}

async function buildMetaAligned() {
  const meta = JSON.parse(await readFile(path.join(hiddenRoot, "build_meta.hidden.json"), "utf8"));
  return meta.case_id === caseId &&
    meta.task_contract?.target_observable?.sink?.action === "request.sign" &&
    meta.task_contract?.target_observable?.sink?.field === "req_sig" &&
    meta.primary_anchor?.answer_function &&
    meta.build_artifacts?.captured_bundle?.includes("agent_visible/captures/");
}

async function main() {
  checks.src_minimum_lines = await srcLineChecks();
  const bundleCode = await readFile(bundlePath, "utf8");
  const bundleLines = linesOf(bundleCode);
  checks.bundle_minimum_lines = bundleLines >= 9000;
  Object.assign(checks, forbiddenStatus(bundleCode));
  const assetFiles = await readdir(assetsRoot);
  checks.no_worker_bundle = assetFiles.every((file) => !/worker/i.test(file));
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  const anchorSpan = oracle.primary_anchor?.captured_span;
  const anchorSlice = anchorSpan ? bundleCode.slice(anchorSpan.start_offset, anchorSpan.end_offset) : "";
  checks.bundle_contains_answer_code = /^function\s+[A-Za-z_$][\w$]*\s*\(/.test(anchorSlice.trim()) &&
    /Math\.imul/.test(anchorSlice) &&
    /return/.test(anchorSlice);
  checks.bundle_contains_call_site = /console/.test(bundleCode);
  checks.captures_present = Boolean(await stat(path.join(visibleRoot, "captures", "devtools-source-dump", "manifest.json")).catch(() => null)) &&
    Boolean(await stat(path.join(visibleRoot, "captures", "devtools-source-dump", "127.0.0.1_4191", "assets", bundleName)).catch(() => null));
  checks.oracle_spans_complete = await oracleSpansComplete();
  checks.build_meta_aligned = await buildMetaAligned();
  checks.task_json_clean = await taskJsonClean();

  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const first = await scenario(browser, baseUrl, "/api/v2/users", "POST", "bearer");
    const second = await scenario(browser, baseUrl, "/api/v2/users", "POST", "bearer");
    const methodChanged = await scenario(browser, baseUrl, "/api/v2/users", "GET", "bearer");
    const authChanged = await scenario(browser, baseUrl, "/api/v2/users", "POST", "apikey");
    const endpointChanged = await scenario(browser, baseUrl, "/api/v2/projects", "POST", "bearer");
    const value = first.output?.req_sig;
    checks.standard_interaction = Boolean(first.output);
    checks.console_log_found = Boolean(first.output);
    checks.target_field_exists = typeof value === "string";
    checks.format_ok = /^sig_[a-z0-9]{12}$/.test(value || "");
    checks.stable_output = value === second.output?.req_sig;
    checks.method_sensitive = value !== methodChanged.output?.req_sig;
    checks.auth_scheme_sensitive = value !== authChanged.output?.req_sig;
    checks.endpoint_sensitive = value !== endpointChanged.output?.req_sig;
    checks.shadows_seen = first.misc.some((item) => item && item.shadow_key) || first.shadows.cacheValues.length >= 1;
    checks.shadows_not_target = !first.shadows.cacheValues.includes(value);
    checks.bundle_visible_in_devtools_sources = first.responses.some((url) => url.endsWith(`/assets/${bundleName}`));
    checks.app_bundle_required = await blocked(browser, baseUrl);
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  const passed = Object.values(checks).every(Boolean);
  console.log(JSON.stringify({
    case_id: caseId,
    passed,
    target_action: "request.sign",
    target_field: "req_sig",
    bundle_lines: bundleLines,
    checks
  }, null, 2));
  if (!passed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(JSON.stringify({ case_id: caseId, passed: false, error: "verify_exception", message: error && error.stack || String(error) }, null, 2));
  process.exitCode = 1;
});
