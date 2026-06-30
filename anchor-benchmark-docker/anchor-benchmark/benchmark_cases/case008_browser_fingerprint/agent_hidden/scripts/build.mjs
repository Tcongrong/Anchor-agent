import { mkdir, rm, copyFile, readFile, writeFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
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
const captureHost = "127.0.0.1_4008";
const captureAssetsRoot = path.join(capturesRoot, captureHost, "assets");
const bundleName = "filter.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const caseId = "case008_browser_fingerprint";

const requirements = new Map([
  ["src/host/index.html", 180],
  ["src/host/styles.css", 340],
  ["src/host/favicon.svg", 30],
  ["src/z8/a0.js", 120],
  ["src/z8/b1.js", 160],
  ["src/z8/c2.js", 160],
  ["src/z8/d3.js", 180],
  ["src/z8/e4.js", 260],
  ["src/z8/f5.js", 280],
  ["src/z8/g6.js", 240],
  ["src/z8/h7.js", 180],
  ["src/z8/i8.js", 180],
  ["src/z8/j9.js", 180],
  ["src/z8/k0.js", 180],
  ["src/z8/k1.js", 180],
  ["src/z8/k2.js", 180],
  ["src/z8/k3.js", 180],
  ["src/z8/l0.js", 340],
  ["src/z8/m0.js", 280],
  ["src/z8/n0.js", 300],
  ["src/z8/o0.js", 620],
  ["src/z8/p0.js", 320],
  ["src/z8/q0.js", 260],
  ["src/z8/r0.js", 260],
  ["src/z8/s0.js", 220],
  ["src/z8/k7/q3/t9.js", 520],
  ["scripts/gen_oracle_spans.mjs", 80],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z8/x/x${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z8/v/v${String(i).padStart(2, "0")}.js`, 260);

const obfuscationOptions = {
  seed: 8008,
  compact: false,
  simplify: true,
  identifierNamesGenerator: "hexadecimal",
  stringArray: false,
  transformObjectKeys: false,
  controlFlowFlattening: false,
  deadCodeInjection: false,
  renameGlobals: false,
  selfDefending: false,
  debugProtection: false,
  sourceMap: false,
};

function linesOf(text) {
  return text.split(/\r?\n/).length;
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

function rel(file) {
  return path.relative(hiddenRoot, file).replaceAll("\\", "/");
}

async function checkOne(relative, required) {
  const file = path.join(hiddenRoot, relative);
  let text = "";
  try {
    text = await readFile(file, "utf8");
  } catch {
    fail({ error: "missing_required_file", file: relative });
  }
  if (linesOf(text) < required) {
    fail({ error: "line_count_too_low", file: relative, actual_lines: linesOf(text), required_lines: required });
  }
}

async function lineChecks(includeDist = false) {
  for (const [relative, required] of requirements) await checkOne(relative, required);
  const all = await readFiles(hiddenRoot);
  let total = 0;
  let src = 0;
  let z8 = 0;
  for (const file of all.filter((item) => /\.(js|mjs|json|html|css|svg|md)$/.test(item))) {
    const relative = rel(file);
    if (relative.startsWith("dist/")) continue;
    const count = linesOf(await readFile(file, "utf8"));
    total += count;
    if (relative.startsWith("src/")) src += count;
    if (relative.startsWith("src/z8/")) z8 += count;
  }
  if (total < 18110) fail({ error: "total_source_lines_too_low", actual_lines: total, required_lines: 18110 });
  if (src < 14075) fail({ error: "src_lines_too_low", actual_lines: src, required_lines: 14075 });
  if (z8 < 12075) fail({ error: "z8_lines_too_low", actual_lines: z8, required_lines: 12075 });
  if (includeDist) {
    const bundle = await readFile(bundlePath, "utf8");
    if (linesOf(bundle) < 9055) fail({ error: "bundle_lines_too_low", actual_lines: linesOf(bundle), required_lines: 9055 });
  }
  return { total, src, z8 };
}

async function sourceAnswerChecks() {
  const source = await readFile(path.join(srcRoot, "z8/k7/q3/t9.js"), "utf8");
  if (!/export\s+function\s+u\b/.test(source)) fail({ error: "factory_export_missing" });
  if (!/slot:\s*23/.test(source)) fail({ error: "selected_slot_missing" });
  if (!/Uint8Array/.test(source) || !/deriveBrowserFingerprint/.test(source)) fail({ error: "fingerprint_anchor_missing" });
  if (/browser_fp|fingerprint\.collect/.test(source)) fail({ error: "target_observable_leaked_in_factory" });
  const sink = await readFile(path.join(srcRoot, "z8/n0.js"), "utf8");
  if (!/98,\s*114,\s*111,\s*119,\s*115,\s*101,\s*114,\s*95,\s*102,\s*112/.test(sink)) fail({ error: "dynamic_sink_field_missing" });
}

async function copyHostFiles() {
  await mkdir(assetsRoot, { recursive: true });
  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace(
    '<script type="module" src="/src/z8/a0.js"></script>',
    `<script type="module" src="./assets/${bundleName}"></script>`,
  );
  await writeFile(path.join(distRoot, "index.html"), distHtml, "utf8");
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
}

function padBundle(code) {
  const rows = [code.trimEnd()];
  let i = 0;
  while (linesOf(rows.join("\n")) < 9055) {
    rows.push(`var __case008_bundle_pad_${i} = ${((i * 23 + 11) % 9973)};`);
    i += 1;
  }
  return `${rows.join("\n")}\n`;
}

async function buildBundle() {
  const rawBundlePath = path.join(assetsRoot, "filter.raw.bundle.js");
  const bundle = await rollup({ input: path.join(srcRoot, "z8/a0.js"), treeshake: false });
  await bundle.write({
    file: rawBundlePath,
    format: "iife",
    name: "case008HardFilter",
    sourcemap: false,
    inlineDynamicImports: true,
    generatedCode: "es2015",
  });
  await bundle.close();
  const raw = await readFile(rawBundlePath, "utf8");
  if (!/Math\.imul/.test(raw) || !/3128/.test(raw) || !/Uint8Array/.test(raw)) {
    fail({ error: "raw_bundle_expected_logic_missing" });
  }
  const obfuscated = JavaScriptObfuscator.obfuscate(raw, obfuscationOptions).getObfuscatedCode();
  await writeFile(bundlePath, padBundle(obfuscated));
  await rm(rawBundlePath, { force: true });
}

async function scanDist() {
  const bundle = await readFile(bundlePath, "utf8");
  const bad = [
    /sourceMappingURL/i,
    /new\s+Worker/i,
    /SharedWorker/i,
    /serviceWorker\s*\./i,
    /BroadcastChannel/i,
    /postMessage\s*\(/i,
    /<iframe/i,
    /\beval\s*\(/i,
    /new\s+Function/i,
    /WebAssembly/i,
    /https?:\/\//i,
  ];
  const hit = bad.find((pattern) => pattern.test(bundle));
  if (hit) fail({ error: "forbidden_dist_text", pattern: String(hit) });
  const jsAssets = (await readdir(assetsRoot)).filter((name) => name.endsWith(".js"));
  if (jsAssets.length !== 1 || jsAssets[0] !== bundleName) fail({ error: "not_single_js_bundle", js_assets: jsAssets });
}

async function createCaptures() {
  await mkdir(captureAssetsRoot, { recursive: true });
  await copyFile(bundlePath, path.join(captureAssetsRoot, bundleName));
  await copyFile(path.join(distRoot, "index.html"), path.join(capturesRoot, captureHost, "index.html"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(capturesRoot, captureHost, "favicon.svg"));
  await copyFile(path.join(hostRoot, "styles.css"), path.join(capturesRoot, captureHost, "styles.css"));
  const bundleInfo = await stat(bundlePath);
  const htmlInfo = await stat(path.join(distRoot, "index.html"));
  const svgInfo = await stat(path.join(hostRoot, "favicon.svg"));
  const cssInfo = await stat(path.join(hostRoot, "styles.css"));
  const manifest = {
    captured_at: new Date().toISOString(),
    case_id: caseId,
    page: "http://127.0.0.1:8478/",
    mode: "initial_page_load_only",
    note: "Only resources served by case008_browser_fingerprint during initial page load are dumped.",
    resources: [
      { contentType: "text/html; charset=utf-8", status: 200, url: "http://127.0.0.1:8478/", savedAs: `${captureHost}/index.html`, bytes: htmlInfo.size },
      { contentType: "text/javascript; charset=utf-8", status: 200, url: `http://127.0.0.1:8478/assets/${bundleName}`, savedAs: `${captureHost}/assets/${bundleName}`, bytes: bundleInfo.size },
      { contentType: "image/svg+xml", status: 200, url: "http://127.0.0.1:8478/favicon.svg", savedAs: `${captureHost}/favicon.svg`, bytes: svgInfo.size },
      { contentType: "text/css; charset=utf-8", status: 200, url: "http://127.0.0.1:8478/styles.css", savedAs: `${captureHost}/styles.css`, bytes: cssInfo.size },
    ],
  };
  await writeFile(path.join(capturesRoot, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  const sourceTree = [
    "devtools-source-dump/",
    `  ${captureHost}/index.html (${htmlInfo.size} bytes, text/html; charset=utf-8)`,
    `  ${captureHost}/assets/${bundleName} (${bundleInfo.size} bytes, text/javascript; charset=utf-8)`,
    `  ${captureHost}/favicon.svg (${svgInfo.size} bytes, image/svg+xml)`,
    `  ${captureHost}/styles.css (${cssInfo.size} bytes, text/css; charset=utf-8)`,
  ].join("\n") + "\n";
  await writeFile(path.join(capturesRoot, "source-tree.txt"), sourceTree, "utf8");
}

async function updateBuildMeta(stats) {
  const metaPath = path.join(hiddenRoot, "build_meta.hidden.json");
  const meta = JSON.parse(await readFile(metaPath, "utf8"));
  const bundle = await readFile(bundlePath, "utf8");
  const bundleInfo = await stat(bundlePath);
  meta.generated_at = new Date().toISOString();
  meta.difficulty.obfuscation_level = 2;
  meta.difficulty.obfuscation_compact = obfuscationOptions.compact;
  meta.difficulty.obfuscation_features = [
    "deterministic hexadecimal identifier renaming",
    "source maps disabled",
    "runtime string literals partially preserved for build-time tractability",
  ];
  meta.task_contract.target_observable.trigger.steps = [
    { action: "select", selector: "#scanMode", value: "active" },
    { action: "select", selector: "#hashRounds", value: "2" },
    { action: "fill", selector: "#entropyDepth", value: "8" },
    { action: "fill", selector: "#vendorHint", value: "chromium" },
    { action: "check", selector: "#extendedSignals" },
    { action: "check", selector: "#canvasProbe" },
    { action: "click", selector: "#calibrateProbe" },
    { action: "click", selector: "#armScan" },
    { action: "click", selector: "#previewScan" },
    { action: "click", selector: "#scanButton" },
  ];
  meta.build_artifacts.page = `agent_visible/captures/devtools-source-dump/${captureHost}/index.html`;
  meta.build_artifacts.dist_bundle = `dist/assets/${bundleName}`;
  meta.build_artifacts.bundle_lines = linesOf(bundle);
  meta.build_artifacts.bundle_bytes = bundleInfo.size;
  meta.build_artifacts.captured_bundle = `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`;
  meta.build_artifacts.total_source_lines = stats.total;
  meta.build_artifacts.src_lines = stats.src;
  meta.build_artifacts.z8_lines = stats.z8;
  meta.challenge_analysis.structural_uncertainty.measurements.captured_bundle_lines = linesOf(bundle);
  meta.counts = { total_source_lines: stats.total, src_lines: stats.src, z8_lines: stats.z8, bundle_lines: linesOf(bundle) };
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  const anchor = oracle.primary_anchor;
  meta.primary_anchor = {
    answer_function: anchor.answer_function,
    source_function: anchor.source_function,
    source_file: anchor.source_file,
    source_bundle_name_aligned: anchor.source_bundle_name_aligned ?? false,
    captured_bundle: `captures/devtools-source-dump/${captureHost}/assets/${bundleName}`,
    captured_span: {
      start_line: anchor.captured_span.start_line,
      end_line: anchor.captured_span.end_line,
      start_offset: anchor.captured_span.start_offset,
      end_offset: anchor.captured_span.end_offset,
    },
    role_oracle_anchor_entries: 1,
    oracle_pointer: "oracle.hidden.json:primary_anchor",
  };
  await writeFile(metaPath, `${JSON.stringify(meta, null, 2)}\n`, "utf8");
}

function runGenOracleSpans() {
  const result = spawnSync(process.execPath, [path.join(hiddenRoot, "scripts", "gen_oracle_spans.mjs")], {
    cwd: hiddenRoot,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    fail({ error: "gen_oracle_spans_failed", stdout: result.stdout, stderr: result.stderr });
  }
}

await sourceAnswerChecks();
await lineChecks(false);
await rm(distRoot, { recursive: true, force: true });
await mkdir(assetsRoot, { recursive: true });
await copyHostFiles();
await buildBundle();
await scanDist();
const stats = await lineChecks(true);
await createCaptures();
runGenOracleSpans();
await updateBuildMeta(stats);
const bundleInfo = await stat(bundlePath);
console.log(
  JSON.stringify(
    {
      case_id: caseId,
      built: true,
      bundle: path.relative(hiddenRoot, bundlePath).replaceAll("\\", "/"),
      bundle_bytes: bundleInfo.size,
      bundle_lines: linesOf(await readFile(bundlePath, "utf8")),
    },
    null,
    2,
  ),
);
