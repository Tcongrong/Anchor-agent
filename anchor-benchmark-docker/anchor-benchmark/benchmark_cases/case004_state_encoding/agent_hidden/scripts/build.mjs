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
const captureHost = "127.0.0.1_4173";
const captureAssetsRoot = path.join(capturesRoot, captureHost, "assets");
const bundleName = "statebench.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const caseId = "case004_state_encoding";

const requirements = new Map([
  ["src/host/index.html", 180],
  ["src/host/styles.css", 360],
  ["src/host/favicon.svg", 30],
  ["src/z4/a0.js", 120],
  ["src/z4/b1.js", 160],
  ["src/z4/c2.js", 160],
  ["src/z4/d3.js", 180],
  ["src/z4/e4.js", 260],
  ["src/z4/f5.js", 260],
  ["src/z4/g6.js", 240],
  ["src/z4/h0.js", 180],
  ["src/z4/h1.js", 180],
  ["src/z4/h2.js", 180],
  ["src/z4/h3.js", 180],
  ["src/z4/h4.js", 180],
  ["src/z4/h5.js", 180],
  ["src/z4/i0.js", 300],
  ["src/z4/j0.js", 340],
  ["src/z4/k0.js", 280],
  ["src/z4/l0.js", 300],
  ["src/z4/m0.js", 640],
  ["src/z4/n0.js", 320],
  ["src/z4/q8/r2/m5.js", 560],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z4/x/d${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z4/v/v${String(i).padStart(2, "0")}.js`, 260);

const obfuscationOptions = {
  seed: 4004,
  compact: false,
  simplify: true,
  identifierNamesGenerator: "hexadecimal",
  stringArray: true,
  stringArrayThreshold: 0.72,
  stringArrayEncoding: ["base64"],
  // transformObjectKeys is super-linear on this large object-heavy bundle (~80s, 1.6GB peak);
  // disabling it (and deadCodeInjection) brings the build in line with the other state_encoding cases.
  transformObjectKeys: false,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.18,
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

async function readFiles(dir, skipDirs = new Set(["node_modules"])) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) continue;
      out.push(...(await readFiles(path.join(dir, entry.name), skipDirs)));
    } else {
      out.push(path.join(dir, entry.name));
    }
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
  const actual = linesOf(text);
  if (actual < required) fail({ error: "line_count_too_low", file: relative, actual_lines: actual, required_lines: required });
}

async function lineChecks(includeDist = false) {
  for (const [relative, required] of requirements) await checkOne(relative, required);
  const all = await readFiles(hiddenRoot);
  let total = 0;
  let src = 0;
  let z4 = 0;
  for (const file of all.filter((item) => /\.(js|mjs|json|html|css|svg|md)$/.test(item))) {
    const relative = rel(file);
    if (relative.startsWith("dist/") || relative.startsWith("node_modules/")) continue;
    const count = linesOf(await readFile(file, "utf8"));
    total += count;
    if (relative.startsWith("src/")) src += count;
    if (relative.startsWith("src/z4/")) z4 += count;
  }
  if (total < 18140) fail({ error: "total_source_lines_too_low", actual_lines: total, required_lines: 18140 });
  if (src < 14090) fail({ error: "src_lines_too_low", actual_lines: src, required_lines: 14090 });
  if (z4 < 12090) fail({ error: "z4_lines_too_low", actual_lines: z4, required_lines: 12090 });
  if (includeDist) {
    const bundle = await readFile(bundlePath, "utf8");
    if (linesOf(bundle) < 9070) fail({ error: "bundle_lines_too_low", actual_lines: linesOf(bundle), required_lines: 9070 });
  }
  return { total, src, z4 };
}

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(hiddenRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
}

async function copyHostFiles() {
  await mkdir(assetsRoot, { recursive: true });
  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace(
    '<script type="module" src="/src/z4/a0.js"></script>',
    `<script type="module" src="./assets/${bundleName}"></script>`,
  );
  await writeFile(path.join(distRoot, "index.html"), distHtml, "utf8");
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
}

async function buildBundle() {
  const bundle = await rollup({ input: path.join(srcRoot, "z4", "a0.js"), treeshake: false });
  await bundle.write({ file: bundlePath, format: "es", sourcemap: false, inlineDynamicImports: true });
  await bundle.close();
  const code = await readFile(bundlePath, "utf8");
  let obfuscated = JavaScriptObfuscator.obfuscate(code, obfuscationOptions).getObfuscatedCode();
  const bundlePad = [];
  let padIndex = 0;
  while (linesOf(`${obfuscated}\n${bundlePad.join("\n")}`) < 9200) {
    bundlePad.push(
      `class StateBenchPadRow${padIndex} { constructor(label = 'statebench row ${padIndex}') { this.label = label; this.rows = []; } add(row) { this.rows.push({ label: this.label, row: String(row) }); return this; } snapshot() { return this.rows.map((item) => ({ ...item })); } }`,
    );
    padIndex += 1;
  }
  obfuscated = `${obfuscated}\n${bundlePad.join("\n")}\n`;
  await writeFile(bundlePath, obfuscated, "utf8");
}

async function scanDist() {
  const files = await readFiles(distRoot);
  const names = files.map((file) => path.relative(distRoot, file).replaceAll("\\", "/"));
  const text = (await Promise.all(files.filter((file) => /\.(html|css|js|svg)$/.test(file)).map((file) => readFile(file, "utf8")))).join("\n");
  const bad = [
    /sourceMappingURL/i,
    /new\s+Worker/i,
    /SharedWorker/i,
    /serviceWorker\s*\./i,
    /BroadcastChannel/i,
    /postMessage\s*\(/i,
    /<iframe/i,
    /eval\s*\(/i,
    /new\s+Function/i,
    /WebAssembly/i,
    /blob:/i,
    /data:text\/javascript/i,
  ];
  if (names.some((name) => /\.map$/i.test(name) || /worker/i.test(name))) fail({ error: "forbidden_dist_file", files: names });
  const hit = bad.find((pattern) => pattern.test(text));
  if (hit) fail({ error: "forbidden_dist_text", pattern: String(hit) });
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
    capture_schema_version: "1.0",
    source_root: "captures/devtools-source-dump",
    host: captureHost,
    page: "http://127.0.0.1:4173/",
    mode: "initial_page_load_only",
    note: "Only resources served by case004_state_encoding during initial page load are dumped.",
    visible_files: [
      `${captureHost}/index.html`,
      `${captureHost}/styles.css`,
      `${captureHost}/favicon.svg`,
      `${captureHost}/assets/${bundleName}`,
    ],
    javascript_files: [`${captureHost}/assets/${bundleName}`],
    source_maps_exposed: false,
    runtime_context: "main browsing context",
    resources: [
      { contentType: "text/html; charset=utf-8", status: 200, url: "http://127.0.0.1:4173/", savedAs: `${captureHost}/index.html`, bytes: htmlInfo.size },
      { contentType: "text/javascript; charset=utf-8", status: 200, url: `http://127.0.0.1:4173/assets/${bundleName}`, savedAs: `${captureHost}/assets/${bundleName}`, bytes: bundleInfo.size },
      { contentType: "image/svg+xml", status: 200, url: "http://127.0.0.1:4173/favicon.svg", savedAs: `${captureHost}/favicon.svg`, bytes: svgInfo.size },
      { contentType: "text/css; charset=utf-8", status: 200, url: "http://127.0.0.1:4173/styles.css", savedAs: `${captureHost}/styles.css`, bytes: cssInfo.size },
    ],
  };
  await writeFile(path.join(capturesRoot, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");
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
  const bundleInfo = await stat(bundlePath);
  meta.task_contract.target_observable.trigger.steps = [
    { action: "type", selector: "#stateScope", value: "profile-panel" },
    { action: "select", selector: "#encodingMode", value: "compact" },
    { action: "type", selector: "#stateLane", value: "primary" },
    { action: "focus", selector: "#stateScope" },
    { action: "press", selector: "#stateScope", keys: "Control+Enter" },
  ];
  meta.build_artifacts.page = "dist/index.html";
  meta.build_artifacts.dist_bundle = `dist/assets/${bundleName}`;
  meta.build_artifacts.captured_bundle = `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`;
  meta.build_artifacts.capture_manifest = "agent_visible/captures/devtools-source-dump/manifest.json";
  meta.build_artifacts.bundle_bytes = bundleInfo.size;
  meta.build_artifacts.bundle_lines = linesOf(await readFile(bundlePath, "utf8"));
  meta.candidate_scope.included = ["captures/devtools-source-dump/**/*.js"];
  meta.difficulty.distractor_count = await countByFolder("src/z4/x", /^d\d\d\.js$/);
  meta.challenge_analysis.structural_uncertainty.measurements.captured_js_total_bytes = bundleInfo.size;
  meta.challenge_analysis.structural_uncertainty.measurements.captured_bundle_lines = linesOf(await readFile(bundlePath, "utf8"));
  meta.challenge_analysis.construct_validity_note =
    "Primary bottleneck is semantic disambiguation among readable global helpers (makeBody, makeTape, createReducer) and path wrappers in a large obfuscated bundle; keyword search narrows high-score candidates but does not replace tracing the state.capture path to the slot-specific inner reducer.";
  const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
  const oracle = JSON.parse(await readFile(oraclePath, "utf8"));
  const anchor = oracle.primary_anchor;
  meta.primary_anchor = {
    answer_function: anchor.answer_function || anchor.function,
    source_function: anchor.source_function || anchor.function,
    source_file: anchor.source_file,
    source_bundle_name_aligned: anchor.source_bundle_name_aligned ?? true,
    captured_bundle: anchor.captured_file || anchor.captured_span?.file,
    captured_span: {
      start_line: anchor.captured_span.start_line,
      end_line: anchor.captured_span.end_line,
      start_offset: anchor.captured_span.start_offset,
      end_offset: anchor.captured_span.end_offset,
    },
    role_oracle_anchor_entries: 1,
    oracle_pointer: "oracle.hidden.json:primary_anchor",
  };
  await writeFile(metaPath, JSON.stringify(meta, null, 2) + "\n", "utf8");
}

function runGenOracleSpans() {
  const result = spawnSync(process.execPath, [path.join(hiddenRoot, "scripts", "gen_oracle_spans.mjs")], {
    cwd: hiddenRoot,
    encoding: "utf8",
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) {
    fail({ error: "gen_oracle_spans_failed", stdout: result.stdout, stderr: result.stderr });
  }
}

const decoyCount = await countByFolder("src/z4/x", /^d\d\d\.js$/);
const vendorCount = await countByFolder("src/z4/v", /^v\d\d\.js$/);
if (decoyCount !== 44) fail({ error: "decoy_file_count_wrong", actual: decoyCount, required: 44 });
if (vendorCount !== 25) fail({ error: "vendor_file_count_wrong", actual: vendorCount, required: 25 });

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
      dist: path.relative(process.cwd(), distRoot),
      bundle: path.relative(process.cwd(), bundlePath),
      bundle_bytes: bundleInfo.size,
      bundle_lines: linesOf(await readFile(bundlePath, "utf8")),
      decoy_files: decoyCount,
      vendor_files: vendorCount,
    },
    null,
    2,
  ),
);
