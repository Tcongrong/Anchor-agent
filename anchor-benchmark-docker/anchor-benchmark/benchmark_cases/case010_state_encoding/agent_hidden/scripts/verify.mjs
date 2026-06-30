import http from "node:http";
import { createReadStream } from "node:fs";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const bundleName = "media.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const captureHost = "127.0.0.1_4211";
const captureBundle = path.join(visibleRoot, "captures", "devtools-source-dump", captureHost, "assets", bundleName);
const caseId = "case010_state_encoding";

const checks = {
  page_loaded: false, controls_exist: false, command_intent: false, standard_interaction: false,
  console_log_found: false, target_field_exists: false, format_ok: false, stable_output: false,
  profile_sensitive: false, bitrate_sensitive: false, channel_sensitive: false, diversion_debug_seen: false,
  diversions_not_target: false, blocked_bundle_stops_output: false, single_bundle: false, no_sourcemap: false,
  no_worker: false, no_sharedworker: false, no_serviceworker: false, no_postmessage: false,
  no_broadcastchannel: false, no_iframe: false, no_eval: false, no_new_function: false, no_wasm: false,
  no_remote_loading: false, no_anti_debug: false, decoy_file_count: false, vendor_file_count: false,
  task_json_clean: false, hidden_files_present: false, hidden_files_not_dist: false, build_meta_complete: false,
  captures_present: false, captures_matches_dist: false, answer_source_present: false,
};

function linesOf(text) { return text.split(/\r?\n/).length; }
function sha256(text) { return createHash("sha256").update(text).digest("hex"); }

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(hiddenRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
}

function createServer() {
  const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml; charset=utf-8" };
  const server = http.createServer(async (request, response) => {
    const url = new URL(request.url || "/", "http://127.0.0.1");
    const clean = decodeURIComponent(url.pathname).replace(/^\/+/, "");
    const resolved = path.resolve(distRoot, clean || "index.html");
    if (!resolved.startsWith(distRoot)) { response.writeHead(403); response.end("Forbidden"); return; }
    try {
      const info = await stat(resolved);
      const filePath = info.isDirectory() ? path.join(resolved, "index.html") : resolved;
      response.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream", "Cache-Control": "no-store" });
      createReadStream(filePath).pipe(response);
    } catch { response.writeHead(404); response.end("Not found"); }
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve({ server, baseUrl: "http://127.0.0.1:" + server.address().port + "/" })));
}

async function launchBrowser() {
  try { return await chromium.launch({ headless: true }); } catch {
    const candidates = process.platform === "win32"
      ? ["C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"]
      : ["/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser"];
    for (const executablePath of candidates) {
      try { await stat(executablePath); return await chromium.launch({ headless: true, executablePath }); } catch {}
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
        if (value && typeof value === "object" && value.action === "media.apply" && typeof value.state_code === "string") {
          clearTimeout(timer); resolve(value);
        }
      } catch {}
    });
  });
}

async function applyEncodeControls(page, profile, bitrate, channel) {
  await page.click(`[data-profile="${profile}"]`);
  await page.locator("#bitrateRange").evaluate((node, value) => {
    node.value = String(value);
    node.dispatchEvent(new Event("input", { bubbles: true }));
  }, bitrate);
  await page.check(`input[name="channel"][value="${channel}"]`);
}

async function scenario(context, baseUrl, profile, bitrate, channel) {
  const page = await context.newPage();
  const misc = [];
  page.on("console", async (message) => {
    if (!["debug", "info", "log"].includes(message.type())) return;
    try {
      const value = await message.args()[0]?.jsonValue();
      if (value && !(value.action === "media.apply" && value.state_code)) misc.push(value);
    } catch {}
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  checks.page_loaded = true;
  checks.controls_exist = await page.locator("#encodeForm").count() === 1 && await page.locator("#bitrateRange").count() === 1 && await page.locator(".profile-card").count() >= 3 && await page.locator("#commitEncodeButton").count() === 1;
  checks.command_intent = (await page.locator("#commitEncodeButton").getAttribute("data-route-key")) === "encode:29:7";
  await applyEncodeControls(page, profile, bitrate, channel);
  const got = targetPromise(page);
  await page.click("#commitEncodeButton");
  const output = await got;
  await page.close();
  return { output, misc };
}

async function blocked(context, baseUrl) {
  const page = await context.newPage();
  await page.route("**/assets/media.app.bundle.js", (route) => route.abort());
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await applyEncodeControls(page, "cinematic", 96, "launch_reel").catch(() => null);
  const got = targetPromise(page, 1000);
  await page.click("#commitEncodeButton").catch(() => null);
  const output = await got;
  await page.close();
  return output === null;
}

function forbiddenStatus(code) {
  return {
    no_worker: !/new\s+Worker\b/.test(code), no_sharedworker: !/\bSharedWorker\b/.test(code),
    no_serviceworker: !/serviceWorker\b/.test(code), no_postmessage: !/\bpostMessage\b/.test(code),
    no_broadcastchannel: !/\bBroadcastChannel\b/.test(code), no_iframe: !/<iframe\b|createElement\(["']iframe/.test(code),
    no_eval: !/\beval\s*\(/.test(code), no_new_function: !/new\s+Function\b/.test(code),
    no_wasm: !/\bWebAssembly\b/.test(code), no_remote_loading: !/https?:\/\//.test(code),
    no_anti_debug: !/debugProtection|selfDefending|devtools|puppeteer|playwright/i.test(code),
  };
}

async function taskJsonClean() {
  const text = await readFile(path.join(visibleRoot, "task.json"), "utf8");
  const leaks = ["src/z0", "t9.js", "makeReducer", "createSource", "segmentCode", "makePlainMap", "slot 29", "slot:29", "oracle", "hidden", "build_meta", "answer_function", "source_function"];
  return leaks.every((item) => !text.includes(item));
}

async function staticChecks() {
  const bundle = await readFile(bundlePath, "utf8");
  const assets = (await readdir(assetsRoot)).filter((name) => name.endsWith(".js"));
  checks.single_bundle = assets.length === 1 && assets[0] === bundleName;
  checks.no_sourcemap = !/sourceMappingURL/.test(bundle);
  Object.assign(checks, forbiddenStatus(bundle));
  checks.decoy_file_count = await countByFolder("src/z0/x", /^x\d\d\.js$/) === 44;
  checks.vendor_file_count = await countByFolder("src/z0/v", /^v\d\d\.js$/) === 25;
  checks.task_json_clean = await taskJsonClean();
  checks.hidden_files_present = Boolean(await stat(path.join(hiddenRoot, "oracle.hidden.json")).catch(() => null)) && Boolean(await stat(path.join(hiddenRoot, "build_meta.hidden.json")).catch(() => null));
  checks.hidden_files_not_dist = !Boolean(await stat(path.join(distRoot, "oracle.hidden.json")).catch(() => null)) && !Boolean(await stat(path.join(visibleRoot, "oracle.hidden.json")).catch(() => null));
  const meta = JSON.parse(await readFile(path.join(hiddenRoot, "build_meta.hidden.json"), "utf8"));
  checks.build_meta_complete = meta.case_id === caseId && Boolean(meta.task_contract) && Boolean(meta.behavior_category) && meta.behavior_category.paper_category === "state_encoding" && Boolean(meta.primary_anchor);
  const captureText = await readFile(captureBundle, "utf8").catch(() => null);
  checks.captures_present = captureText != null && Boolean(await stat(path.join(visibleRoot, "captures", "devtools-source-dump", "manifest.json")).catch(() => null));
  checks.captures_matches_dist = captureText != null && sha256(captureText) === sha256(bundle);
  const source = await readFile(path.join(hiddenRoot, "src/z0/k7/q3/t9.js"), "utf8");
  checks.answer_source_present = /export\s+function\s+makeReducer\b/.test(source) && /function\s+createSource\b/.test(source) && /Math\.imul/.test(source);
}

async function main() {
  await staticChecks();
  const { server, baseUrl } = await createServer();
  const browser = await launchBrowser();
  let first = null, second = null, changedProfile = null, changedBitrate = null, changedChannel = null;
  try {
    const context = await browser.newContext();
    first = await scenario(context, baseUrl, "cinematic", 96, "launch_reel");
    second = await scenario(context, baseUrl, "cinematic", 96, "launch_reel");
    changedProfile = await scenario(context, baseUrl, "broadcast", 96, "launch_reel");
    changedBitrate = await scenario(context, baseUrl, "cinematic", 64, "launch_reel");
    changedChannel = await scenario(context, baseUrl, "cinematic", 96, "studio_loop");
    checks.standard_interaction = Boolean(first.output);
    checks.console_log_found = Boolean(first.output);
    checks.target_field_exists = Boolean(first.output && first.output.state_code);
    checks.format_ok = /^[a-z0-9]{12}$/.test(first.output?.state_code || "");
    checks.stable_output = first.output?.state_code === second.output?.state_code;
    checks.profile_sensitive = Boolean(changedProfile.output && changedProfile.output.state_code !== first.output.state_code);
    checks.bitrate_sensitive = Boolean(changedBitrate.output && changedBitrate.output.state_code !== first.output.state_code);
    checks.channel_sensitive = Boolean(changedChannel.output && changedChannel.output.state_code !== first.output.state_code);
    const miscValues = first.misc.concat(second.misc, changedProfile.misc, changedBitrate.misc, changedChannel.misc);
    checks.diversion_debug_seen = miscValues.some((value) => value && value.action === "media.shadow.action");
    checks.diversions_not_target = miscValues.every((value) => !(value && typeof value === "object" && Object.hasOwn(value, "state_code")));
    checks.blocked_bundle_stops_output = await blocked(context, baseUrl);
    await context.close();
  } finally { await browser.close(); server.close(); }
  const passed = Object.values(checks).every(Boolean);
  console.log(JSON.stringify({ case_id: caseId, passed, observed: first && first.output, changed: { profile: changedProfile && changedProfile.output, bitrate: changedBitrate && changedBitrate.output, channel: changedChannel && changedChannel.output }, checks }, null, 2));
  if (!passed) process.exit(1);
}

main().catch((error) => { console.error(JSON.stringify({ case_id: caseId, passed: false, error: String(error && error.stack || error) }, null, 2)); process.exit(1); });
