import { spawnSync } from "node:child_process";
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
const appBundlePath = path.join(assetsRoot, "upload.app.bundle.js");
const ticketChunkPath = path.join(assetsRoot, "upload.ticket.chunk.js");
const taskPath = path.join(visibleRoot, "task.json");
const metaPath = path.join(hiddenRoot, "build_meta.hidden.json");

const checks = {
  page_load: false,
  controls_exist: false,
  entry_click: false,
  console_request_payload_exists: false,
  request_payload_shape_valid: false,
  same_input_stable: false,
  different_filename_changes: false,
  different_category_changes: false,
  transform_chunk_required: false,
  mimics_not_in_target: false,
  no_worker_boundary: false,
  no_worker_request: false,
  no_sourcemap: false,
  task_does_not_leak_core: false,
  bundles_exist: false,
  app_bundle_lines_sufficient: false,
  distractor_haystack_present: false,
  oracle_spans_semantic: false
};

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(hiddenRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
}

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

function consoleUploadPromise(page, timeout = 3000) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), timeout);

    page.on("console", async (message) => {
      if (message.type() !== "log") return;
      const [first] = message.args();
      if (!first) return;

      try {
        const value = await first.jsonValue();
        if (value && typeof value === "object" && Object.hasOwn(value, "request_payload")) {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {
        // Ignore unrelated browser messages.
      }
    });
  });
}

async function runScenario(browser, baseUrl, fileName, description, category, options = {}) {
  const page = await browser.newPage();
  const requested = [];
  page.on("request", (request) => requested.push(request.url()));

  if (options.blockTicketChunk) {
    await page.route(/upload\.ticket\.chunk\.js(?:\?.*)?$/, (route) => {
      route.fulfill({
        status: 404,
        contentType: "text/javascript",
        body: ""
      });
    });
  }

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.fill("#manifestDraftInput", [
    `file=${fileName}`,
    `summary=${description}`,
    `category=${category}`
  ].join("\n"));
  await page.click("#parseDraftButton");
  await page.check('input[name="laneMode"][value="expedite"]');
  await page.selectOption("#policySelect", "restricted");
  await page.check("#sealReviewCheckbox");

  const outputPromise = consoleUploadPromise(page);
  await page.click("#queueManifestButton");
  await page.click("#releaseRequestButton");
  const output = await outputPromise;
  const mimicValues = await page.evaluate(() => window.__case006_request_transformation_mimic_values__ || {});

  await page.close();
  return { output, mimicValues, requested };
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
  await stat(ticketChunkPath);
  checks.bundles_exist = true;

  const files = await readDistFiles(distRoot);
  const relativeNames = files.map((file) => path.relative(distRoot, file).replaceAll("\\", "/"));
  checks.no_sourcemap = relativeNames.every((file) => !file.endsWith(".map"));

  const textFiles = files.filter((file) => /\.(html|css|js|svg)$/.test(file));
  const text = (await Promise.all(textFiles.map((file) => readFile(file, "utf8")))).join("\n");
  checks.no_worker_boundary = relativeNames.every((file) => !/worker/i.test(file)) &&
    !/(new\s+Worker|\bWorker\s*\(|SharedWorker|serviceWorker\s*\.|importScripts\s*\(|postMessage\s*\(|BroadcastChannel|MessageChannel)/i.test(text);

  const taskText = await readFile(taskPath, "utf8");
  checks.task_does_not_leak_core =
    !/foldSegmentLedger|segmentTrieFold|src\/uploadCase\/ledger\/ticket|dynamic import|EventTarget|upload\.ticket\.chunk/i.test(taskText);

  const meta = JSON.parse(await readFile(metaPath, "utf8"));
  checks.transform_chunk_required = meta.build_artifacts?.transform_chunk === "dist/assets/upload.ticket.chunk.js";

  const appText = await readFile(appBundlePath, "utf8");
  checks.app_bundle_lines_sufficient = linesOf(appText) >= 9000;
  const noiseCount = await countByFolder("src/uploadCase/noise", /^n\d\d\.js$/);
  const vendorCount = await countByFolder("src/uploadCase/vendor", /^v\d\d\.js$/);
  checks.distractor_haystack_present = noiseCount === 44 && vendorCount === 25;

  const auditRun = spawnSync(process.execPath, [path.join(__dirname, "audit_oracle_spans.mjs")], {
    cwd: hiddenRoot,
    encoding: "utf8"
  });
  checks.oracle_spans_semantic = auditRun.status === 0;
}

async function main() {
  await runStaticChecks();
  const { server, baseUrl } = await createServer();
  let browser;

  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = await page.title() === "Archive Intake Console";

    const controlCount = await page.locator("#manifestDraftInput, #parseDraftButton, #queueManifestButton, #releaseRequestButton, input[name='laneMode'], #policySelect, #sealReviewCheckbox").count();
    const parseAction = await page.getAttribute("#parseDraftButton", "data-action");
    const queueAction = await page.getAttribute("#queueManifestButton", "data-action");
    const releaseAction = await page.getAttribute("#releaseRequestButton", "data-action");
    checks.controls_exist = controlCount === 8 &&
      parseAction === "vault.manifest.parse" &&
      queueAction === "vault.manifest.queue" &&
      releaseAction === "vault.request.release";
    await page.close();

    const first = await runScenario(browser, baseUrl, "quarterly-report.pdf", "finance summary", "finance");
    const payload = first.output?.request_payload;
    const ticket = payload?.headers?.["x-upload-ticket"];
    checks.entry_click = Boolean(first.output);
    checks.console_request_payload_exists = payload && typeof payload === "object";
    checks.request_payload_shape_valid =
      first.output?.action === "upload.request" &&
      payload?.method === "POST" &&
      payload?.endpoint === "/archive/intake" &&
      /^ut_[a-z0-9]{6}-[a-z0-9]{6}-[a-z0-9]{6}$/.test(ticket || "") &&
      payload?.body?.file_name === "quarterly-report.pdf" &&
      payload?.body?.category === "finance" &&
      payload?.body?.summary?.startsWith("rq_");

    const second = await runScenario(browser, baseUrl, "quarterly-report.pdf", "finance summary", "finance");
    checks.same_input_stable = JSON.stringify(payload) === JSON.stringify(second.output?.request_payload);

    const changedFile = await runScenario(browser, baseUrl, "quarterly-appendix.pdf", "finance summary", "finance");
    const changedCategory = await runScenario(browser, baseUrl, "quarterly-report.pdf", "finance summary", "legal");
    checks.different_filename_changes = payload?.body?.summary !== changedFile.output?.request_payload?.body?.summary;
    checks.different_category_changes = payload?.body?.priority !== changedCategory.output?.request_payload?.body?.priority;

    const blocked = await runScenario(browser, baseUrl, "quarterly-report.pdf", "finance summary", "finance", {
      blockTicketChunk: true
    });
    checks.transform_chunk_required = checks.transform_chunk_required && !blocked.output;

    const flatMimics = Object.values(first.mimicValues)
      .flatMap((value) => typeof value === "object" ? Object.values(value || {}) : [value])
      .filter(Boolean)
      .map((value) => String(value));
    checks.mimics_not_in_target = flatMimics.length >= 20 &&
      flatMimics.every((value) => value !== ticket && value !== payload?.body?.summary);

    checks.no_worker_request = [first, second, changedFile, changedCategory, blocked]
      .flatMap((scenario) => scenario.requested)
      .every((url) => !/worker/i.test(url));
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  const passed = Object.values(checks).every(Boolean);
  const result = {
    case_id: "case006_request_transformation",
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
