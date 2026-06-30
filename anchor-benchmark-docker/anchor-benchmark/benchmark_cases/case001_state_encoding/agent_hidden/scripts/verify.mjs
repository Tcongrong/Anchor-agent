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
const bundlePath = path.join(assetsRoot, "account.app.bundle.js");

const checks = {
  page_load: false,
  controls_exist: false,
  entry_click: false,
  console_state_code_exists: false,
  state_code_format_valid: false,
  same_input_stable: false,
  different_email_changes: false,
  different_otp_changes: false,
  decoy_outputs_not_target: false,
  app_bundle_required: false,
  bundle_visible_in_devtools_sources: false,
  bundle_contains_answer_code: false,
  bundle_contains_call_site: false,
  bundle_minimum_lines: false,
  all_files_minimum_lines: false,
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
  ["src/host/index.html", 30],
  ["src/host/styles.css", 320],
  ["src/host/favicon.svg", 30],
  ["src/z0/k7/q3/t9.js", 520],
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
  return total >= 18000 && src >= 14000 && z0 >= 12000;
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

function targetPromise(page, timeout = 2000) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), timeout);
    page.on("console", async (message) => {
      if (message.type() !== "log") return;
      const arg = message.args()[0];
      if (!arg) return;
      try {
        const value = await arg.jsonValue();
        if (value && typeof value === "object" && value.action === "account.submit" && typeof value.state_code === "string") {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {}
    });
  });
}

async function scenario(browser, baseUrl, email, otp) {
  const page = await browser.newPage();
  const misc = [];
  page.on("console", async (message) => {
    if (message.type() === "debug" || message.type() === "info" || message.type() === "log") {
      try {
        const value = await message.args()[0]?.jsonValue();
        if (value && !(value.action === "account.submit" && value.state_code)) misc.push(value);
      } catch {}
    }
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.fill("#emailInput", email);
  await page.fill("#otpInput", otp);
  await page.check("#rememberDevice");
  const got = targetPromise(page);
  await page.click("#submitAccount");
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
  await page.route("**/assets/account.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.fill("#emailInput", "alice@example.com");
  await page.fill("#otpInput", "483920");
  await page.check("#rememberDevice");
  const got = targetPromise(page, 800);
  await page.click("#submitAccount").catch(() => null);
  const output = await got;
  await page.close();
  return output === null;
}

async function main() {
  checks.all_files_minimum_lines = await lineChecks();
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
    /encodeStateEnvelope|stateFrame/.test(bundleCode) &&
    /account_token|account_trace/.test(bundleCode);
  checks.bundle_contains_call_site = /console/.test(bundleCode);

  const { server, baseUrl } = await createServer();
  let browser;
  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    const responses = [];
    page.on("response", (response) => responses.push(response.url()));
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = (await page.title()) === "Account Verification";
    checks.controls_exist =
      (await page.locator("#emailInput, #otpInput, #rememberDevice, #submitAccount").count()) === 4 &&
      (await page.getAttribute("#submitAccount", "data-k")) === "7:31:4";
    checks.bundle_visible_in_devtools_sources = responses.some((url) => url.endsWith("/assets/account.app.bundle.js"));
    await page.close();

    const first = await scenario(browser, baseUrl, "alice@example.com", "483920");
    const code = first.output?.state_code;
    checks.entry_click = Boolean(first.output);
    checks.console_state_code_exists = typeof code === "string";
    checks.state_code_format_valid = /^[a-z0-9]{12}$/.test(code || "");
    const second = await scenario(browser, baseUrl, "alice@example.com", "483920");
    checks.same_input_stable = code === second.output?.state_code;
    const changedEmail = await scenario(browser, baseUrl, "bob@example.com", "483920");
    const changedOtp = await scenario(browser, baseUrl, "alice@example.com", "583920");
    checks.different_email_changes = code !== changedEmail.output?.state_code;
    checks.different_otp_changes = code !== changedOtp.output?.state_code;
    const decoys = [
      ...first.misc.flatMap((x) => (x ? [x.ap, x.account_token, x.account_trace, x.state_code] : [])),
      ...Object.values(first.shadows.data || {}),
      ...(first.shadows.keys || []),
    ];
    checks.decoy_outputs_not_target = decoys.some(Boolean) && decoys.every((value) => value !== code);
    checks.app_bundle_required = await blocked(browser, baseUrl);
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  const passed = Object.values(checks).every(Boolean);
  console.log(JSON.stringify({ case_id: "case001_state_encoding", passed, checks }, null, 2));
  if (!passed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
