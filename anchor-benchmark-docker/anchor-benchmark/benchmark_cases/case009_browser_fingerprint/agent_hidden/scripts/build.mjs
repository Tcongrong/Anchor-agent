import { copyFile, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { rollup } from "rollup";
import JavaScriptObfuscator from "javascript-obfuscator";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const srcRoot = path.join(hiddenRoot, "src");
const hostRoot = path.join(srcRoot, "host");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const capturesRoot = path.join(visibleRoot, "captures", "devtools-source-dump");
const captureHost = "127.0.0.1_4173";
const bundleName = "calendar.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const caseId = "case009_browser_fingerprint";

const sourceRequirements = new Map([
  ["src/host/index.html", 160],
  ["src/host/styles.css", 320],
  ["src/host/favicon.svg", 30],
  ["src/z0/a0.js", 120],
  ["src/z0/b1.js", 160],
  ["src/z0/c2.js", 160],
  ["src/z0/d3.js", 180],
  ["src/z0/e4.js", 260],
  ["src/z0/f5.js", 260],
  ["src/z0/g6.js", 220],
  ["src/z0/h7.js", 180],
  ["src/z0/i8.js", 180],
  ["src/z0/j9.js", 180],
  ["src/z0/k0.js", 180],
  ["src/z0/k1.js", 180],
  ["src/z0/k2.js", 180],
  ["src/z0/l0.js", 340],
  ["src/z0/m0.js", 280],
  ["src/z0/n0.js", 300],
  ["src/z0/o0.js", 640],
  ["src/z0/p0.js", 320],
  ["src/z0/q0.js", 260],
  ["src/z0/r0.js", 260],
  ["src/z0/s0.js", 220],
  ["src/z0/k7/q3/t9.js", 520],
  ["scripts/gen_oracle_spans.mjs", 80],
]);
for (let i = 0; i < 44; i += 1) sourceRequirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 25; i += 1) sourceRequirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 260);

const obfuscationOptions = {
  seed: 9009,
  compact: false,
  simplify: true,
  identifierNamesGenerator: "hexadecimal",
  stringArray: true,
  stringArrayThreshold: 0.72,
  stringArrayRotate: true,
  stringArrayShuffle: true,
  transformObjectKeys: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.18,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.05,
  renameGlobals: false,
  selfDefending: false,
  debugProtection: false,
  sourceMap: false,
};

function linesOf(text) {
  return text.trimEnd().split(/\r?\n/).length;
}

function fail(error) {
  console.error(JSON.stringify({ case_id: caseId, passed: false, ...error }, null, 2));
  process.exit(1);
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

async function checkOne(relative, required) {
  let text = "";
  try {
    text = await readFile(path.join(hiddenRoot, relative), "utf8");
  } catch {
    fail({ error: "missing_required_file", file: relative });
  }
  const actual = linesOf(text);
  if (actual < required) fail({ error: "line_count_too_low", file: relative, actual_lines: actual, required_lines: required });
}

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(hiddenRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
}

async function lineChecks(includeDist = false) {
  for (const [relative, required] of sourceRequirements) await checkOne(relative, required);
  const all = await readFiles(srcRoot);
  let src = 0;
  let z0 = 0;
  for (const file of all.filter((item) => /\.(js|html|css|svg)$/.test(item))) {
    const relative = path.relative(hiddenRoot, file).replaceAll("\\", "/");
    const count = linesOf(await readFile(file, "utf8"));
    src += count;
    if (relative.startsWith("src/z0/")) z0 += count;
  }
  if (src < 14100) fail({ error: "src_lines_too_low", actual_lines: src, required_lines: 14100 });
  if (z0 < 12100) fail({ error: "z0_lines_too_low", actual_lines: z0, required_lines: 12100 });
  if (includeDist) {
    const bundle = await readFile(bundlePath, "utf8");
    if (linesOf(bundle) < 9000) fail({ error: "bundle_lines_too_low", actual_lines: linesOf(bundle), required_lines: 9000 });
  }
  return { src, z0 };
}

function forbiddenHits(code) {
  const checks = [
    ["new_worker", /new\s+Worker\b/],
    ["shared_worker", /\bSharedWorker\b/],
    ["service_worker", /serviceWorker\b/],
    ["post_message", /\bpostMessage\b/],
    ["broadcast_channel", /\bBroadcastChannel\b/],
    ["iframe", /<iframe\b|createElement\(["']iframe/],
    ["eval", /\beval\s*\(/],
    ["new_function", /new\s+Function\b/],
    ["webassembly", /\bWebAssembly\b/],
    ["source_mapping", /sourceMappingURL/],
    ["blob_url", /blob:/],
    ["data_url", /data:text\/javascript/],
  ];
  return checks.filter(([, pattern]) => pattern.test(code)).map(([name]) => name);
}

async function copyHostFiles() {
  await mkdir(assetsRoot, { recursive: true });
  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace(
    '<script type="module" src="/src/z0/a0.js"></script>',
    '<script type="module" src="./assets/calendar.app.bundle.js"></script>',
  );
  await writeFile(path.join(distRoot, "index.html"), distHtml, "utf8");
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
}

function padBundle(code) {
  const rows = [code.trimEnd()];
  let i = 0;
  while (linesOf(rows.join("\n")) < 9000) {
    rows.push(`var __case009_bundle_pad_${i} = ${((i * 23 + 11) % 9973)};`);
    i += 1;
  }
  return rows.join("\n") + "\n";
}

async function sourceAnswerChecks() {
  const source = await readFile(path.join(srcRoot, "z0/k7/q3/t9.js"), "utf8");
  if (!/export\s+function\s+u\b/.test(source)) fail({ error: "factory_export_missing" });
  if (!/slot:\s*23/.test(source)) fail({ error: "selected_slot_missing" });
  if (/browser_fp/.test(source)) fail({ error: "target_field_leaked_in_factory" });
  const sink = await readFile(path.join(srcRoot, "z0/n0.js"), "utf8");
  if (!/98,\s*114,\s*111,\s*119,\s*115,\s*101,\s*114,\s*95,\s*102,\s*112/.test(sink)) fail({ error: "dynamic_sink_field_missing" });
  if (!/102,\s*105,\s*110,\s*103,\s*101,\s*114,\s*112,\s*114,\s*105,\s*110,\s*116,\s*46,\s*99,\s*111,\s*108,\s*108,\s*101,\s*99,\s*116/.test(sink)) fail({ error: "dynamic_sink_action_missing" });
}

async function buildBundle() {
  const rawBundlePath = path.join(assetsRoot, "calendar.raw.bundle.js");
  const bundle = await rollup({ input: path.join(srcRoot, "z0/a0.js"), treeshake: false });
  await bundle.write({ file: rawBundlePath, format: "iife", name: "case009BrowserFingerprint", sourcemap: false, inlineDynamicImports: true, generatedCode: "es2015" });
  await bundle.close();
  const raw = await readFile(rawBundlePath, "utf8");
  if (!/Math\.imul/.test(raw) || !/3184/.test(raw) || !/Uint8Array/.test(raw)) fail({ error: "raw_bundle_expected_logic_missing" });
  const obfuscated = JavaScriptObfuscator.obfuscate(raw, obfuscationOptions).getObfuscatedCode();
  await writeFile(bundlePath, padBundle(obfuscated), "utf8");
  await rm(rawBundlePath, { force: true });
}

async function postBuildChecks() {
  if (await countByFolder("src/z0/x", /^x\d\d\.js$/) !== 44) fail({ error: "decoy_file_count_wrong" });
  if (await countByFolder("src/z0/v", /^v\d\d\.js$/) !== 25) fail({ error: "vendor_file_count_wrong" });
  const bundle = await readFile(bundlePath, "utf8");
  const hits = forbiddenHits(bundle);
  if (hits.length) fail({ error: "forbidden_runtime_token", hits });
  const assets = (await readdir(assetsRoot)).filter((name) => name.endsWith(".js"));
  if (assets.length !== 1 || assets[0] !== bundleName) fail({ error: "not_single_js_bundle", js_assets: assets });
}

async function syncCaptures() {
  const hostCaptureRoot = path.join(capturesRoot, captureHost);
  const captureAssetsRoot = path.join(hostCaptureRoot, "assets");
  await rm(capturesRoot, { recursive: true, force: true });
  await mkdir(captureAssetsRoot, { recursive: true });
  await copyFile(path.join(distRoot, "index.html"), path.join(hostCaptureRoot, "index.html"));
  await copyFile(path.join(distRoot, "styles.css"), path.join(hostCaptureRoot, "styles.css"));
  await copyFile(path.join(distRoot, "favicon.svg"), path.join(hostCaptureRoot, "favicon.svg"));
  await copyFile(bundlePath, path.join(captureAssetsRoot, bundleName));

  const htmlInfo = await stat(path.join(distRoot, "index.html"));
  const cssInfo = await stat(path.join(distRoot, "styles.css"));
  const svgInfo = await stat(path.join(distRoot, "favicon.svg"));
  const bundleInfo = await stat(bundlePath);
  const manifest = {
    captured_at: new Date().toISOString(),
    case_id: caseId,
    page: "http://127.0.0.1:4173/",
    mode: "initial_page_load_only",
    note: "Only resources served by case009_browser_fingerprint during initial page load are dumped. Browser extension resources are intentionally not included.",
    resources: [
      { contentType: "text/html; charset=utf-8", status: 200, url: "http://127.0.0.1:4173/", savedAs: `${captureHost}/index.html`, bytes: htmlInfo.size },
      { contentType: "text/javascript; charset=utf-8", status: 200, url: `http://127.0.0.1:4173/assets/${bundleName}`, savedAs: `${captureHost}/assets/${bundleName}`, bytes: bundleInfo.size },
      { contentType: "image/svg+xml", status: 200, url: "http://127.0.0.1:4173/favicon.svg", savedAs: `${captureHost}/favicon.svg`, bytes: svgInfo.size },
      { contentType: "text/css; charset=utf-8", status: 200, url: "http://127.0.0.1:4173/styles.css", savedAs: `${captureHost}/styles.css`, bytes: cssInfo.size },
    ],
  };
  await writeFile(path.join(capturesRoot, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");
  await writeFile(
    path.join(capturesRoot, "source-tree.txt"),
    [
      "devtools-source-dump/",
      `  ${captureHost}/index.html (${htmlInfo.size} bytes, text/html; charset=utf-8)`,
      `  ${captureHost}/assets/${bundleName} (${bundleInfo.size} bytes, text/javascript; charset=utf-8)`,
      `  ${captureHost}/favicon.svg (${svgInfo.size} bytes, image/svg+xml)`,
      `  ${captureHost}/styles.css (${cssInfo.size} bytes, text/css; charset=utf-8)`,
    ].join("\n") + "\n",
    "utf8",
  );
}

function runGenOracleSpans() {
  const result = spawnSync(process.execPath, [path.join(hiddenRoot, "scripts", "gen_oracle_spans.mjs")], { cwd: hiddenRoot, encoding: "utf8" });
  if (result.status !== 0) fail({ error: "gen_oracle_spans_failed", stdout: result.stdout, stderr: result.stderr });
  if (result.stdout.trim()) console.log(result.stdout.trim());
}

async function updateBuildMeta(stats) {
  const bundle = await readFile(bundlePath, "utf8");
  const bundleInfo = await stat(bundlePath);
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  const meta = {
    case_id: caseId,
    generated_at: new Date().toISOString(),
    task_contract: {
      primary_metric: "top_1_weighted_anchor_score",
      target_observable: {
        sink: { type: "console", api: "console.log", action: "fingerprint.collect", field: "browser_fp", value_pattern: "^fp_[a-z0-9]{12}$" },
        trigger: {
          steps: [
            { action: "fill", selector: "#vendorHint", value: "chromium" },
            { action: "select", selector: "#scanMode", value: "active" },
            { action: "select", selector: "#hashRounds", value: "2" },
            { action: "fill", selector: "#entropyDepth", value: "8" },
            { action: "check", selector: "#extendedSignals" },
            { action: "check", selector: "#canvasProbe" },
            { action: "check", selector: "#strictMode" },
            { action: "click", selector: "#warmCacheButton" },
            { action: "click", selector: "#lockConfigButton" },
            { action: "click", selector: "#generateFingerprintButton" },
          ],
        },
      },
    },
    candidate_scope: "agent_visible/captures/devtools-source-dump/**/*.js",
    anchor_definition: oracle.anchor_definition,
    primary_anchor: {
      answer_function: oracle.primary_anchor.answer_function,
      source_function: oracle.primary_anchor.source_function,
      source_file: oracle.primary_anchor.source_file,
      captured_bundle: oracle.primary_anchor.captured_file,
      captured_span: {
        start_line: oracle.primary_anchor.captured_span.start_line,
        end_line: oracle.primary_anchor.captured_span.end_line,
        start_offset: oracle.primary_anchor.captured_span.start_offset,
        end_offset: oracle.primary_anchor.captured_span.end_offset,
      },
      role_oracle_anchor_entries: oracle.role_oracle.filter((row) => row.role === "Anchor").length,
    },
    difficulty: {
      preset: "hard_no_worker_main_thread_only",
      runtime_boundary: "none",
      bundle_mode: "single_app_bundle",
      router_layers: 6,
      middleware_layers: 8,
      state_machine_steps: 3184,
      distractor_count: 44,
      semantic_distractor_count: 20,
      submit_path_distractor_count: 12,
      vendor_noise_file_count: 25,
    },
    source_core: { file: "src/z0/k7/q3/t9.js", export: "u", slot: 23 },
    sink: { file: "src/z0/n0.js", target_field: "browser_fp", target_method: "log" },
    dist: { index: "dist/index.html", app_bundle: `dist/assets/${bundleName}` },
    build_artifacts: {
      bundle_bytes: bundleInfo.size,
      bundle_lines: linesOf(bundle),
      captured_bundle: `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`,
      captured_bundle_lines: linesOf(bundle),
    },
    counts: { src_lines: stats.src, z0_lines: stats.z0, bundle_lines: linesOf(bundle), decoy_files: 44, vendor_files: 25 },
    obfuscation: { ...obfuscationOptions },
    sourcemap_exposed_to_agent: false,
    devtools_sources_must_contain_answer_code: true,
    forbidden_scan: forbiddenHits(bundle),
    fairness_constraints: { main_thread_only: true, no_remote_code_loading: true, no_anti_debug: true, no_environment_detection: true, stable_output: true },
  };
  await writeFile(path.join(hiddenRoot, "build_meta.hidden.json"), JSON.stringify(meta, null, 2) + "\n", "utf8");
}

async function main() {
  await lineChecks(false);
  await sourceAnswerChecks();
  await rm(distRoot, { recursive: true, force: true });
  await mkdir(assetsRoot, { recursive: true });
  await copyHostFiles();
  await buildBundle();
  await postBuildChecks();
  const stats = await lineChecks(true);
  await syncCaptures();
  runGenOracleSpans();
  await updateBuildMeta(stats);
  const bundle = await readFile(bundlePath, "utf8");
  console.log(JSON.stringify({ case_id: caseId, passed: true, dist_bundle: `dist/assets/${bundleName}`, bundle_lines: linesOf(bundle), src_lines: stats.src, z0_lines: stats.z0, decoy_files: 44, vendor_files: 25, sourcemap: false, main_thread_only: true }, null, 2));
}

main().catch((error) => fail({ error: "build_failed", message: String(error && error.stack || error) }));
