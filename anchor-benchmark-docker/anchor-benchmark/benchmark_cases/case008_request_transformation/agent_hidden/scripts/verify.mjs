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
const appBundlePath = path.join(assetsRoot, "filter.app.bundle.js");
const coreChunkPath = path.join(assetsRoot, "filter.core.chunk.js");
const taskPath = path.join(visibleRoot, "task.json");
const metaPath = path.join(hiddenRoot, "build_meta.hidden.json");

const standardInput = {
  requestProfile: "audit",
  status: "open",
  region: "west",
  minAmount: "500",
  owner: "maria",
  agedOnly: true
};

const checks = {
  page_load: false,
  controls_exist: false,
  entry_click: false,
  console_request_payload_exists: false,
  request_payload_shape_valid: false,
  same_input_stable: false,
  different_status_changes: false,
  different_amount_changes: false,
  different_owner_changes: false,
  diversion_buttons_no_request_payload: false,
  core_chunk_required: false,
  no_worker_construct: false,
  no_post_message: false,
  no_worker_request: false,
  worker_url_block_does_not_break_output: false,
  no_sourcemap: false,
  task_does_not_leak_core: false,
  bundles_exist: false,
  app_bundle_haystack_lines: false,
  sink_uses_char_codes: false,
  app_bundle_hides_core_anchor_name: false
};

const CORE_ANCHOR_FUNCTION = "composeReceivablesSearchBody";
const LEGACY_ANCHOR_FUNCTION = "buildFilterRequestPayload";

function linesOf(text) {
  return text.trimEnd().split(/\r?\n/).length;
}

function createServer() {
  const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".svg": "image/svg+xml"
  };

  const server = http.createServer(async (request, response) => {
    const url = new URL(request.url || "/", "http://127.0.0.1");
    const cleanPath = decodeURIComponent(url.pathname).replace(/^\/+/, "");
    const resolved = path.resolve(distRoot, cleanPath || "index.html");

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
      const address = server.address();
      resolve({ server, baseUrl: `http://127.0.0.1:${address.port}/` });
    });
  });
}

async function launchBrowser() {
  try {
    return await chromium.launch({ headless: true });
  } catch {
    const candidates = process.platform === "win32"
      ? [
          "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
          "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
          "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
          "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
        ]
      : ["/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser"];

    for (const executablePath of candidates) {
      try {
        await stat(executablePath);
        return await chromium.launch({ headless: true, executablePath });
      } catch {
        continue;
      }
    }

    throw new Error("No Playwright browser or local Chromium-compatible browser was found.");
  }
}

function consoleStampPromise(page, timeout = 3500) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), timeout);

    page.on("console", async (message) => {
      if (message.type() !== "log") return;
      const [first] = message.args();
      if (!first) return;

      try {
        const value = await first.jsonValue();
        if (
          value &&
          typeof value === "object" &&
          value.action === "table.filter.request" &&
          Object.hasOwn(value, "request_payload")
        ) {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {
        // Ignore unrelated browser messages.
      }
    });
  });
}

async function runScenario(browser, baseUrl, input, options = {}) {
  const page = await browser.newPage();
  const requested = [];
  page.on("request", (request) => requested.push(request.url()));

  if (options.blockCoreChunk) {
    await page.route(/filter\.core\.chunk\.js(?:\?.*)?$/, (route) => {
      route.fulfill({
        status: 404,
        contentType: "text/javascript",
        body: ""
      });
    });
  }

  if (options.blockWorkerUrls) {
    await page.route(/worker/i, (route) => route.abort());
  }

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.selectOption("#requestProfile", input.requestProfile);
  await page.selectOption("#statusFilter", input.status);
  await page.selectOption("#regionFilter", input.region);
  await page.fill("#minAmount", input.minAmount);
  await page.fill("#ownerInput", input.owner);
  if (input.agedOnly) {
    await page.check("#agedOnly");
  } else {
    await page.uncheck("#agedOnly");
  }

  await page.click("#stageRequest");
  await page.waitForFunction(() => document.querySelector("#stageTicket")?.textContent?.startsWith("rq_"));
  if (options.extraRuntimeSteps !== false) {
    await page.click('[data-action="table.page.next"]');
    await page.click('[data-action="table.columns.save"]');
  }

  const outputPromise = consoleStampPromise(page);
  await page.click("#prepareRequest");
  const output = await outputPromise;
  const visibleCount = await page.textContent("#visibleCount");

  await page.close();
  return { output, visibleCount, requested };
}

async function runDiversionScenario(browser, baseUrl) {
  const page = await browser.newPage();
  const logs = [];
  page.on("console", async (message) => {
    if (message.type() !== "log") return;
    const values = await Promise.all(message.args().map((arg) => arg.jsonValue().catch(() => null)));
    logs.push(values);
  });

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  for (const selector of [
    '[data-action="table.request.stage"]',
    '[data-action="table.export.preview"]',
    '[data-action="table.page.prev"]',
    '[data-action="table.page.next"]',
    '[data-action="table.columns.save"]',
    '[data-action="table.badge.refresh"]',
    '[data-action="table.view.pin"]'
  ]) {
    await page.click(selector);
    await page.waitForTimeout(60);
  }

  await page.close();
  return logs.flat().every((value) => !(value && typeof value === "object" && Object.hasOwn(value, "request_payload")));
}

async function readDistFiles(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const resolved = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...await readDistFiles(resolved));
    } else {
      out.push(resolved);
    }
  }

  return out;
}

async function runStaticChecks() {
  await stat(appBundlePath);
  await stat(coreChunkPath);
  checks.bundles_exist = true;

  const files = await readDistFiles(distRoot);
  const relativeNames = files.map((file) => path.relative(distRoot, file).replaceAll("\\", "/"));
  checks.no_sourcemap = relativeNames.every((file) => !file.endsWith(".map"));

  const textFiles = files.filter((file) => /\.(html|css|js|svg)$/.test(file));
  const text = (await Promise.all(textFiles.map((file) => readFile(file, "utf8")))).join("\n");
  checks.no_worker_construct = relativeNames.every((file) => !/worker/i.test(file)) &&
    !/(new\s+Worker|\bWorker\s*\(|SharedWorker|serviceWorker\s*\.|importScripts\s*\(|BroadcastChannel|MessageChannel)/i.test(text);
  checks.no_post_message = !/postMessage\s*\(/i.test(text);

  const taskText = await readFile(taskPath, "utf8");
  checks.task_does_not_leak_core =
    !/composeReceivablesSearchBody|buildFilterRequestPayload|filterRequestPayload|requestCore|dynamic import|filter\.core\.chunk/i.test(taskText);

  const appText = await readFile(appBundlePath, "utf8");
  checks.app_bundle_haystack_lines = linesOf(appText) >= 9000;
  checks.app_bundle_hides_core_anchor_name =
    !new RegExp(`\\b${CORE_ANCHOR_FUNCTION}\\b`).test(appText) &&
    !new RegExp(`\\b${LEGACY_ANCHOR_FUNCTION}\\b`).test(appText);
  checks.sink_uses_char_codes =
    /String\s*\[\s*['"]fromCharCode['"]\s*\]/.test(appText) &&
    /function\s+targetFieldKey\s*\(/.test(appText) &&
    /function\s+targetActionValue\s*\(/.test(appText);

  const meta = JSON.parse(await readFile(metaPath, "utf8"));
  checks.core_chunk_required = meta.build_artifacts?.core_chunk === "dist/assets/filter.core.chunk.js";
}

async function main() {
  await runStaticChecks();
  const { server, baseUrl } = await createServer();
  let browser;

  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = await page.title() === "Operations Table Console";

    const controlCount = await page.locator("#requestProfile, #statusFilter, #regionFilter, #minAmount, #ownerInput, #agedOnly, #stageRequest, #prepareRequest, #invoiceRows").count();
    const stageCommand = await page.getAttribute("#stageRequest", "data-action");
    const prepareCommand = await page.getAttribute("#prepareRequest", "data-action");
    checks.controls_exist = controlCount === 9 &&
      stageCommand === "table.request.stage" &&
      prepareCommand === "table.request.prepare";
    await page.close();

    const first = await runScenario(browser, baseUrl, standardInput);
    const requestPayload = first.output?.request_payload;
    const requestSignature = JSON.stringify(requestPayload);
    checks.entry_click = Boolean(first.output);
    checks.console_request_payload_exists = requestPayload && typeof requestPayload === "object";
    checks.request_payload_shape_valid =
      requestPayload?.method === "POST" &&
      requestPayload?.endpoint === "/api/receivables/search" &&
      requestPayload?.profile === "audit" &&
      requestPayload?.stage?.ticket?.startsWith("rq_") &&
      Array.isArray(requestPayload?.body?.filters) &&
      requestPayload.body.filters.some((filter) => filter.field === "status" && filter.value === "open") &&
      requestPayload.body.filters.some((filter) => filter.field === "amount" && filter.op === "gte" && filter.value === 500) &&
      requestPayload.body.filters.some((filter) => filter.field === "owner" && filter.value === "maria") &&
      requestPayload.body.filters.some((filter) => filter.field === "region" && filter.value === "west") &&
      requestPayload.body.filters.some((filter) => filter.field === "age" && filter.op === "gte" && filter.value === 14) &&
      requestPayload.body.page.number === 2 &&
      requestPayload.body.hydration?.ticket === requestPayload.stage.ticket &&
      Array.isArray(requestPayload.body.projection);

    const second = await runScenario(browser, baseUrl, standardInput);
    checks.same_input_stable = requestSignature === JSON.stringify(second.output?.request_payload);

    const changedStatus = await runScenario(browser, baseUrl, { ...standardInput, status: "pending" });
    const changedAmount = await runScenario(browser, baseUrl, { ...standardInput, minAmount: "700" });
    const changedOwner = await runScenario(browser, baseUrl, { ...standardInput, owner: "liam" });
    checks.different_status_changes = requestSignature !== JSON.stringify(changedStatus.output?.request_payload);
    checks.different_amount_changes = requestSignature !== JSON.stringify(changedAmount.output?.request_payload);
    checks.different_owner_changes = requestSignature !== JSON.stringify(changedOwner.output?.request_payload);

    const blockedCore = await runScenario(browser, baseUrl, standardInput, { blockCoreChunk: true });
    checks.core_chunk_required = checks.core_chunk_required && !blockedCore.output;

    checks.diversion_buttons_no_request_payload = await runDiversionScenario(browser, baseUrl);

    const blockedWorkerUrls = await runScenario(browser, baseUrl, standardInput, { blockWorkerUrls: true });
    checks.worker_url_block_does_not_break_output = Boolean(blockedWorkerUrls.output?.request_payload?.body?.filters);

    checks.no_worker_request = [first, second, changedStatus, changedAmount, changedOwner, blockedCore, blockedWorkerUrls]
      .flatMap((scenario) => scenario.requested)
      .every((url) => !/worker/i.test(url));
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  const passed = Object.values(checks).every(Boolean);
  const result = {
    case_id: "case008_request_transformation",
    passed,
    checks
  };

  console.log(JSON.stringify(result, null, 2));
  if (!passed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
