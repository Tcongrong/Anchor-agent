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
const appBundlePath = path.join(assetsRoot, "prefs.app.bundle.js");
const taskPath = path.join(caseRoot, "agent_visible", "task.json");
const metaPath = path.join(hiddenRoot, "build_meta.hidden.json");

function linesOf(text) {
  return text.split(/\r?\n/).length;
}

const checks = {
  page_load: false,
  controls_exist: false,
  entry_click: false,
  shortcut_entry_works: false,
  console_state_code_exists: false,
  state_code_format_valid: false,
  same_input_stable: false,
  different_workspace_name_changes: false,
  different_theme_changes: false,
  different_density_changes: false,
  different_autosave_changes: false,
  distractor_buttons_no_state_code: false,
  app_bundle_required: false,
  no_worker_construct: false,
  no_post_message: false,
  no_worker_request: false,
  no_sourcemap: false,
  no_obfuscator: false,
  no_core_chunk: false,
  task_does_not_leak_core: false,
  bundle_exists: false,
  bundle_large_enough: false
};

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

function consoleStateCodePromise(page, timeout = 3000) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), timeout);

    page.on("console", async (message) => {
      if (message.type() !== "log") return;
      const [first] = message.args();
      if (!first) return;

      try {
        const value = await first.jsonValue();
        if (value && typeof value === "object" && value.action === "prefs.save" && Object.hasOwn(value, "state_code")) {
          clearTimeout(timer);
          resolve(value);
        }
      } catch {
        // Ignore unrelated browser messages.
      }
    });
  });
}

async function runSaveScenario(browser, baseUrl, { theme, density, autosave, workspaceName, useShortcut = false, blockAppBundle = false }) {
  const page = await browser.newPage();
  const requested = [];
  page.on("request", (request) => requested.push(request.url()));

  if (blockAppBundle) {
    await page.route(/prefs\.app\.bundle\.js(?:\?.*)?$/, (route) => {
      route.fulfill({
        status: 404,
        contentType: "text/javascript",
        body: ""
      });
    });
  }

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.selectOption("#themeSelect", theme);
  await page.selectOption("#densitySelect", density);

  if (autosave) {
    await page.check("#autosaveToggle");
  } else {
    await page.uncheck("#autosaveToggle");
  }

  await page.fill("#workspaceNameInput", "");
  await page.type("#workspaceNameInput", workspaceName, { delay: 4 });

  const outputPromise = consoleStateCodePromise(page);

  if (useShortcut) {
    await page.locator("body").click();
    await page.keyboard.press("Control+s");
  } else {
    await page.click("#savePreferences");
  }

  const output = await outputPromise;

  await page.close();
  return { output, requested };
}

async function runDistractorScenario(browser, baseUrl) {
  const page = await browser.newPage();
  const outputs = [];

  page.on("console", async (message) => {
    if (message.type() !== "log") return;
    const [first] = message.args();
    if (!first) return;
    try {
      outputs.push(await first.jsonValue());
    } catch {
      outputs.push(message.text());
    }
  });

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.click('[data-action="prefs.preview"]');
  await page.click('[data-action="prefs.export"]');
  await page.click('[data-action="prefs.sync"]');
  await page.click('[data-action="prefs.reset"]');
  await page.waitForTimeout(200);
  await page.close();

  return outputs;
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
  checks.bundle_exists = true;
  checks.bundle_large_enough = linesOf(await readFile(appBundlePath, "utf8")) >= 9000;

  const files = await readDistFiles(distRoot);
  const relativeNames = files.map((file) => path.relative(distRoot, file).replaceAll("\\", "/"));
  checks.no_sourcemap = relativeNames.every((file) => !file.endsWith(".map"));
  checks.no_core_chunk = relativeNames.every((file) => !/prefs\.core\.chunk\.js|chunk/i.test(file));

  const textFiles = files.filter((file) => /\.(html|css|js|svg)$/.test(file));
  const text = (await Promise.all(textFiles.map((file) => readFile(file, "utf8")))).join("\n");
  checks.no_worker_construct = relativeNames.every((file) => !/worker/i.test(file)) &&
    !/(new\s+Worker|\bWorker\s*\(|SharedWorker|serviceWorker\s*\.|importScripts\s*\(|BroadcastChannel|MessageChannel)/i.test(text);
  checks.no_post_message = !/postMessage\s*\(/i.test(text);
  checks.no_obfuscator = !/javascript-obfuscator/i.test(text);

  const taskText = await readFile(taskPath, "utf8");
  checks.task_does_not_leak_core =
    !/encodeWorkspaceState|workspaceStateCodec|codecCore|bitMixHelpers|FNV|preference codec|registry|oracle|hidden/i.test(taskText);

  const meta = JSON.parse(await readFile(metaPath, "utf8"));
  checks.app_bundle_required = meta.dist?.app_bundle === "dist/assets/prefs.app.bundle.js" &&
    meta.dist?.core_chunk === null;
}

async function main() {
  await runStaticChecks();
  const { server, baseUrl } = await createServer();
  let browser;

  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    checks.page_load = await page.title() === "Workspace Preferences Studio";

    const controlCount = await page.locator("#themeSelect, #densitySelect, #autosaveToggle, #workspaceNameInput, #savePreferences").count();
    const action = await page.getAttribute("#savePreferences", "data-action");
    checks.controls_exist = controlCount === 5 && action === "prefs.save";
    await page.close();

    const base = { theme: "dark", density: "roomy", autosave: true, workspaceName: "north-ops" };

    const first = await runSaveScenario(browser, baseUrl, base);
    const code = first.output?.state_code;
    checks.entry_click = Boolean(first.output);
    checks.console_state_code_exists = typeof code === "string";
    checks.state_code_format_valid = /^[a-z0-9]{12}$/.test(code || "");

    const second = await runSaveScenario(browser, baseUrl, base);
    checks.same_input_stable = Boolean(code) && code === second.output?.state_code;

    const viaShortcut = await runSaveScenario(browser, baseUrl, { ...base, useShortcut: true });
    checks.shortcut_entry_works = Boolean(code) && code === viaShortcut.output?.state_code;

    const changedName = await runSaveScenario(browser, baseUrl, { ...base, workspaceName: "south-ops" });
    const changedTheme = await runSaveScenario(browser, baseUrl, { ...base, theme: "light" });
    const changedDensity = await runSaveScenario(browser, baseUrl, { ...base, density: "compact" });
    const changedAutosave = await runSaveScenario(browser, baseUrl, { ...base, autosave: false });

    checks.different_workspace_name_changes = code !== changedName.output?.state_code;
    checks.different_theme_changes = code !== changedTheme.output?.state_code;
    checks.different_density_changes = code !== changedDensity.output?.state_code;
    checks.different_autosave_changes = code !== changedAutosave.output?.state_code;

    const distractorOutputs = await runDistractorScenario(browser, baseUrl);
    checks.distractor_buttons_no_state_code = distractorOutputs.every((value) => {
      return !(value && typeof value === "object" && Object.hasOwn(value, "state_code"));
    });

    const blocked = await runSaveScenario(browser, baseUrl, { ...base, blockAppBundle: true });
    checks.app_bundle_required = checks.app_bundle_required && !blocked.output;

    checks.no_worker_request = [first, second, viaShortcut, changedName, changedTheme, changedDensity, changedAutosave, blocked]
      .flatMap((scenario) => scenario.requested)
      .every((url) => !/worker/i.test(url));
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  const passed = Object.values(checks).every(Boolean);
  const result = {
    case_id: "case008_state_encoding",
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
