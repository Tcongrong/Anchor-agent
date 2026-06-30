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
const bundlePath = path.join(assetsRoot, "note.app.bundle.js");
const taskPath = path.join(visibleRoot, "task.json");
const caseId = "case003_state_encoding";

const checks = {
  page_load: false,
  controls_exist: false,
  entry_shortcut: false,
  console_state_code_exists: false,
  state_code_format_valid: false,
  same_input_stable: false,
  body_change_changes: false,
  tag_change_changes: false,
  sidecars_not_sink: false,
  no_worker_artifact: false,
  no_sourcemap: false,
  task_does_not_leak_core: false,
  bundle_exists: false,
  bundle_contains_answer_code: false,
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

function consoleNotePromise(page, timeout = 2000) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), timeout);

    page.on("console", async (message) => {
      if (message.type() !== "log") return;
      const [first] = message.args();
      if (!first) return;

      try {
        const value = await first.jsonValue();
        if (value && typeof value === "object" && value.action === "note.add" && Object.hasOwn(value, "state_code")) {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {
        // Ignore unrelated messages.
      }
    });
  });
}

async function fillAndCommit(page, body, tag, priority) {
  await page.fill("#noteText", body);
  await page.fill("#tagInput", tag);
  await page.selectOption("#prioritySelect", priority);
  await page.focus("#noteText");
  const outputPromise = consoleNotePromise(page);
  await page.keyboard.press("Control+Enter");
  return outputPromise;
}

async function runScenario(browser, baseUrl, body, tag, priority) {
  const page = await browser.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  const output = await fillAndCommit(page, body, tag, priority);
  const sidecars = await page.evaluate(() => ({
    preview: window.__note_preview_body__,
    undo: window.__note_undo_preview__,
    status: window.__note_status_key__,
    metric: window.__note_editor_metric__,
    wordFence: window.__note_word_fence__,
  }));
  await page.close();
  return { output, sidecars };
}

async function readDistFiles(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const resolved = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await readDistFiles(resolved)));
    } else {
      out.push(resolved);
    }
  }

  return out;
}

async function runStaticChecks() {
  await stat(bundlePath);
  checks.bundle_exists = true;

  const bundleText = await readFile(bundlePath, "utf8");
  checks.bundle_contains_answer_code =
    /sealDraftFrameCode/.test(bundleText) &&
    /0x9e3779b9|0x85ebca6b|0x01000193/.test(bundleText) &&
    /Math\.imul|Math\[['"]imul['"]\]/.test(bundleText) &&
    /sc_/.test(bundleText);

  const files = await readDistFiles(distRoot);
  const relativeNames = files.map((file) => path.relative(distRoot, file).replaceAll("\\", "/"));
  checks.no_sourcemap = relativeNames.every((file) => !file.endsWith(".map"));

  const forbiddenAsset = relativeNames.some((file) => /worker/i.test(file));
  const textFiles = files.filter((file) => /\.(html|css|js|svg)$/.test(file));
  const text = (await Promise.all(textFiles.map((file) => readFile(file, "utf8")))).join("\n");
  checks.no_worker_artifact =
    !forbiddenAsset &&
    !/(new\s+Worker|new\s+SharedWorker|serviceWorker\.register|importScripts\s*\(|postMessage\s*\(|note\.worker\.bundle\.js|worker\.bundle\.js)/i.test(text);

  const taskText = await readFile(taskPath, "utf8");
  checks.task_does_not_leak_core =
    !/composeDraftStateCode|noteStateCodec\.js|shortcutStateFrame\.js|encodeShortcutStateFrame|buildShortcutStateFrame|pack\/final|packerRegistry|recipe pipeline|Worker|postMessage/i.test(taskText);
}

async function main() {
  await runStaticChecks();
  const { server, baseUrl } = await createServer();
  let browser;

  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = (await page.title()) === "Quick Notes";

    const controlCount = await page.locator("#noteText, #tagInput, #prioritySelect, #draftComposer").count();
    const command = await page.getAttribute("#draftComposer", "data-shortcut-command");
    const lane = await page.getAttribute("#draftComposer", "data-state-lane");
    const hasHigh = await page.locator('#prioritySelect option[value="high"]').count();
    checks.controls_exist = controlCount === 4 && command === "note.shortcut.commit" && lane === "field-notes" && hasHigh === 1;
    await page.close();

    const first = await runScenario(browser, baseUrl, "Call supplier before Friday", "work", "high");
    const pack = first.output?.state_code;
    checks.entry_shortcut = Boolean(first.output);
    checks.console_state_code_exists = typeof pack === "string";
    checks.state_code_format_valid = /^sc_[a-z0-9]{14}$/.test(pack || "");

    const second = await runScenario(browser, baseUrl, "Call supplier before Friday", "work", "high");
    checks.same_input_stable = pack === second.output?.state_code;

    const changedBody = await runScenario(browser, baseUrl, "Call supplier Monday morning", "work", "high");
    const changedTag = await runScenario(browser, baseUrl, "Call supplier before Friday", "ops", "high");

    checks.body_change_changes = pack !== changedBody.output?.state_code;
    checks.tag_change_changes = pack !== changedTag.output?.state_code;
    checks.sidecars_not_sink = Object.values(first.sidecars).every((value) => value !== pack);
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  const passed = Object.values(checks).every(Boolean);
  const result = {
    case_id: caseId,
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
