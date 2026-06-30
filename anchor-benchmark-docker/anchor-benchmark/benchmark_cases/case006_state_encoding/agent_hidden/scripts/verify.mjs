import http from "node:http";
import { createReadStream } from "node:fs";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const bundleName = "annotation.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const taskPath = path.join(caseRoot, "agent_visible", "task.json");

const checks = {
  page_load: false,
  controls_exist: false,
  entry_click: false,
  console_annotation_state_code_exists: false,
  annotation_state_code_format_valid: false,
  same_input_stable: false,
  different_text_changes: false,
  different_category_changes: false,
  mimics_not_in_target: false,
  app_bundle_required: false,
  bundle_loaded: false,
  bundle_contains_answer_code: false,
  bundle_not_blob_or_data: false,
  single_bundle_only: false,
  no_sourcemap: false,
  no_obfuscation: false,
  no_worker_boundary: false,
  no_worker_request: false,
  task_does_not_leak_core: false,
};

function createServer() {
  const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".svg": "image/svg+xml",
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
        "Cache-Control": "no-store",
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
          "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
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

function targetPromise(page, timeout = 2500) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), timeout);
    page.on("console", async (message) => {
      if (message.type() !== "log") return;
      const arg = message.args()[0];
      if (!arg) return;
      try {
        const value = await arg.jsonValue();
        if (
          value && typeof value === "object" &&
          value.action === "note.commit" &&
          typeof value.annotation_state_code === "string"
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

async function runScenario(browser, baseUrl, text, category, tag, contextOptions = {}) {
  const context = await browser.newContext(contextOptions);
  const page = await context.newPage();
  const requested = [];
  page.on("request", (request) => requested.push(request.url()));

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.fill("#noteText", text);
  await page.selectOption("#noteCategory", category);
  await page.fill("#noteTag", tag);

  const outputPromise = targetPromise(page);
  await page.click("#submitNote");
  const output = await outputPromise;

  const marks = await page.evaluate(() => window.__case006_state_encoding_page_marks__ || {});

  await page.close();
  await context.close();
  return { output, marks, requested };
}

async function blocked(browser, baseUrl) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.route(`**/assets/${bundleName}`, (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.fill("#noteText", "quarterly targets need review before friday").catch(() => null);
  await page.selectOption("#noteCategory", "task").catch(() => null);
  await page.fill("#noteTag", "q2-review").catch(() => null);
  const outputPromise = targetPromise(page, 800);
  await page.click("#submitNote").catch(() => null);
  const output = await outputPromise;
  await page.close();
  await context.close();
  return output === null;
}

async function readDistFiles(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const resolved = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await readDistFiles(resolved));
    else out.push(resolved);
  }
  return out;
}

async function runStaticChecks() {
  await stat(bundlePath);

  const files = await readDistFiles(distRoot);
  const relativeNames = files.map((file) => path.relative(distRoot, file).replaceAll("\\", "/"));
  checks.no_sourcemap = relativeNames.every((file) => !file.endsWith(".map"));
  checks.single_bundle_only = relativeNames.filter((file) => file.endsWith(".js")).join("|") === `assets/${bundleName}`;

  const textFiles = files.filter((file) => /\.(html|css|js|svg)$/.test(file));
  const text = (await Promise.all(textFiles.map((file) => readFile(file, "utf8")))).join("\n");
  checks.no_worker_boundary = relativeNames.every((file) => !/worker/i.test(file)) &&
    !/(new\s+Worker|new\s+SharedWorker|serviceWorker\.register|importScripts\s*\(|postMessage\s*\(|BroadcastChannel|MessageChannel)/i.test(text);
  checks.no_obfuscation =
    !/(javascript-obfuscator|controlFlowFlattening|deadCodeInjection|stringArrayEncoding|identifierNamesGenerator|sourceMappingURL)/i.test(text);

  const bundleText = await readFile(bundlePath, "utf8");
  checks.bundle_not_blob_or_data = !/(blob:|data:)/i.test(bundleText);
  // Markers that survive mangled obfuscation (noteStateReducer is mangled; obfuscator emits single
  // quotes, so the sink concat is matched quote-agnostically).
  checks.bundle_contains_answer_code =
    /mkNoteReducer/.test(bundleText) &&
    /0x9e3779b1/i.test(bundleText) &&
    /['"]annotation_['"]\s*\+/.test(bundleText) &&
    /note\.commit/.test(bundleText) &&
    /an_|pn_/.test(bundleText);

  const taskText = await readFile(taskPath, "utf8");
  checks.task_does_not_leak_core =
    !/noteStateReducer|mkNoteReducer|encodeAnnotationState|_noteEnc|noteSlotTable|src\/annotationCase|oracle\.hidden|build_meta|mimics/i.test(taskText);
}

async function main() {
  await runStaticChecks();
  const { server, baseUrl } = await createServer();
  let browser;

  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    const requested = [];
    page.on("request", (request) => requested.push(request.url()));
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = await page.title() === "Annotation Workspace";
    checks.bundle_loaded = requested.some((url) => new RegExp(`assets/${bundleName.replace(/\./g, "\\.")}$`).test(url));

    const controlCount = await page.locator("#noteText, #noteCategory, #noteTag, #submitNote").count();
    const formCount = await page.locator("#annotationForm").count();
    checks.controls_exist = controlCount === 4 && formCount === 1;
    await page.close();

    const first = await runScenario(browser, baseUrl, "quarterly targets need review before friday", "task", "q2-review");
    const code = first.output?.annotation_state_code;
    checks.entry_click = Boolean(first.output);
    checks.console_annotation_state_code_exists = typeof code === "string";
    checks.annotation_state_code_format_valid = /^[a-z0-9]{12}$/.test(code || "");

    const second = await runScenario(browser, baseUrl, "quarterly targets need review before friday", "task", "q2-review");
    checks.same_input_stable = code === second.output?.annotation_state_code;

    const changedText = await runScenario(browser, baseUrl, "different observation entirely", "task", "q2-review");
    const changedCategory = await runScenario(browser, baseUrl, "quarterly targets need review before friday", "insight", "q2-review");
    checks.different_text_changes = code !== changedText.output?.annotation_state_code;
    checks.different_category_changes = code !== changedCategory.output?.annotation_state_code;

    const flatMarks = Object.values(first.marks)
      .filter(Boolean)
      .map((value) => String(value));
    checks.mimics_not_in_target = flatMarks.length >= 6 && flatMarks.every((value) => value !== code);

    checks.app_bundle_required = await blocked(browser, baseUrl);

    checks.no_worker_request = [first, second, changedText, changedCategory]
      .flatMap((scenario) => scenario.requested)
      .every((url) => !/worker/i.test(url));
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  const passed = Object.values(checks).every(Boolean);
  const result = {
    case_id: "case006_state_encoding",
    passed,
    checks,
  };

  console.log(JSON.stringify(result, null, 2));
  if (!passed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
