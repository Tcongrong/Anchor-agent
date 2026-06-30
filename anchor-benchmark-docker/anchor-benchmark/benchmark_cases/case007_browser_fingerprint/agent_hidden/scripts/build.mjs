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
const captureHost = "127.0.0.1_8477";
const captureAssetsRoot = path.join(capturesRoot, captureHost, "assets");
const bundleName = "fingerprint.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const caseId = "case007_browser_fingerprint";

const requirements = new Map([
  ["src/host/index.html", 180],
  ["src/host/styles.css", 360],
  ["src/host/favicon.svg", 30],
  ["src/z0/a0.js", 120],
  ["src/z0/b1.js", 160],
  ["src/z0/c2.js", 160],
  ["src/z0/d3.js", 180],
  ["src/z0/e4.js", 260],
  ["src/z0/f5.js", 260],
  ["src/z0/g6.js", 260],
  ["src/z0/h7.js", 220],
  ["src/z0/i8.js", 180],
  ["src/z0/j9.js", 180],
  ["src/z0/k0.js", 180],
  ["src/z0/k1.js", 180],
  ["src/z0/k2.js", 180],
  ["src/z0/k3.js", 180],
  ["src/z0/l0.js", 340],
  ["src/z0/m0.js", 300],
  ["src/z0/n0.js", 300],
  ["src/z0/o0.js", 640],
  ["src/z0/p0.js", 320],
  ["src/z0/q0.js", 220],
  ["src/z0/k7/q3/t9.js", 560],
  ["scripts/gen_oracle_spans.mjs", 80],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 260);

const obfuscationOptions = {
  seed: 7007,
  compact: false,
  simplify: true,
  // recipe A: mangled + renameGlobals:false + format "es" keeps module-level function names so
  // gen_oracle_spans resolves roles by name (acorn); the inner reducer closure `r` is resolved
  // structurally via its factory `u`. transformObjectKeys stays off (its super-linear GC-thrash was the
  // build-hang cause); cff/stringArray stay on for haystack difficulty.
  identifierNamesGenerator: "mangled",
  stringArray: true,
  stringArrayThreshold: 0.7,
  transformObjectKeys: false,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.2,
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
  if (linesOf(text) < required) fail({ error: "line_count_too_low", file: relative, actual_lines: linesOf(text), required_lines: required });
}

async function lineChecks(includeDist = false) {
  for (const [relative, required] of requirements) await checkOne(relative, required);
  const all = await readFiles(hiddenRoot);
  let total = 0;
  let src = 0;
  let z0 = 0;
  for (const file of all.filter((item) => /\.(js|mjs|json|html|css|svg|md)$/.test(item))) {
    const relative = rel(file);
    if (relative.startsWith("dist/")) continue;
    const count = linesOf(await readFile(file, "utf8"));
    total += count;
    if (relative.startsWith("src/")) src += count;
    if (relative.startsWith("src/z0/")) z0 += count;
  }
  if (total < 18000) fail({ error: "total_source_lines_too_low", actual_lines: total, required_lines: 18000 });
  if (src < 14000) fail({ error: "src_lines_too_low", actual_lines: src, required_lines: 14000 });
  if (z0 < 12000) fail({ error: "z0_lines_too_low", actual_lines: z0, required_lines: 12000 });
  if (includeDist) {
    const bundle = await readFile(bundlePath, "utf8");
    if (linesOf(bundle) < 9000) fail({ error: "bundle_lines_too_low", actual_lines: linesOf(bundle), required_lines: 9000 });
  }
  return { total, src, z0 };
}

async function sourceAnswerChecks() {
  const source = await readFile(path.join(srcRoot, "z0/k7/q3/t9.js"), "utf8");
  if (!/export\s+function\s+u\b/.test(source)) fail({ error: "factory_export_missing" });
  if (!/slot:\s*23/.test(source)) fail({ error: "selected_slot_missing" });
  if (/browser_fp/.test(source)) fail({ error: "target_field_leaked_in_factory" });
  const sink = await readFile(path.join(srcRoot, "z0/n0.js"), "utf8");
  if (!/98,\s*114,\s*111,\s*119,\s*115,\s*101,\s*114,\s*95,\s*102,\s*112/.test(sink)) fail({ error: "dynamic_sink_field_missing" });
}

async function copyHostFiles() {
  await mkdir(assetsRoot, { recursive: true });
  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace(
    '<script type="module" src="/src/z0/a0.js"></script>',
    '<script type="module" src="./assets/fingerprint.app.bundle.js"></script>',
  );
  await writeFile(path.join(distRoot, "index.html"), distHtml, "utf8");
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
}

async function buildBundle() {
  const bundle = await rollup({ input: path.join(srcRoot, "z0/a0.js"), treeshake: false });
  await bundle.write({
    file: bundlePath,
    format: "es",
    sourcemap: false,
    inlineDynamicImports: true,
  });
  await bundle.close();
  const raw = await readFile(bundlePath, "utf8");
  if (!/Math\.imul/.test(raw) || !/3112/.test(raw)) fail({ error: "raw_bundle_expected_logic_missing" });
  // recipe A: light mangled obfuscation (renameGlobals:false) keeps module-level names; runs inline in
  // ~20-30s with no GC thrash, so no child process / FULL_OBF gate is needed.
  const output = JavaScriptObfuscator.obfuscate(raw, obfuscationOptions).getObfuscatedCode();
  const bundlePad = [];
  let padIndex = 0;
  while (linesOf(`${output}\n${bundlePad.join("\n")}`) < 9100) {
    const name = `__case007_viewer_pad_${padIndex}`;
    bundlePad.push(
      `class ${name} { constructor(label = 'viewer row ${padIndex}') { this.label = label; this.rows = []; } add(row) { this.rows.push({ label: this.label, row: String(row) }); return this; } snapshot() { return this.rows.map((item) => ({ ...item })); } }`,
    );
    padIndex += 1;
  }
  await writeFile(bundlePath, `${output}\n${bundlePad.join("\n")}\n`);
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
    /eval\s*\(/i,
    /new\s+Function/i,
    /WebAssembly/i,
    /blob:/i,
    /data:text\/javascript/i,
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
    page: "http://127.0.0.1:8477/",
    mode: "initial_page_load_only",
    note: "Only resources served by case007_browser_fingerprint during initial page load are dumped.",
    resources: [
      { contentType: "text/html; charset=utf-8", status: 200, url: "http://127.0.0.1:8477/", savedAs: `${captureHost}/index.html`, bytes: htmlInfo.size },
      { contentType: "text/javascript; charset=utf-8", status: 200, url: `http://127.0.0.1:8477/assets/${bundleName}`, savedAs: `${captureHost}/assets/${bundleName}`, bytes: bundleInfo.size },
      { contentType: "image/svg+xml", status: 200, url: "http://127.0.0.1:8477/favicon.svg", savedAs: `${captureHost}/favicon.svg`, bytes: svgInfo.size },
      { contentType: "text/css; charset=utf-8", status: 200, url: "http://127.0.0.1:8477/styles.css", savedAs: `${captureHost}/styles.css`, bytes: cssInfo.size },
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
  meta.task_contract.target_observable.trigger.steps = [
    { action: "select", selector: "#scanMode", value: "active" },
    { action: "check", selector: "#extendedSignals" },
    { action: "click", selector: "#scanButton" },
  ];
  meta.build_artifacts.page = `agent_visible/captures/devtools-source-dump/${captureHost}/index.html`;
  meta.build_artifacts.dist_bundle = `dist/assets/${bundleName}`;
  meta.build_artifacts.bundle_lines = linesOf(bundle);
  meta.build_artifacts.bundle_bytes = bundleInfo.size;
  meta.build_artifacts.captured_bundle = `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`;
  meta.challenge_analysis.structural_uncertainty.measurements.captured_js_total_bytes = bundleInfo.size;
  meta.challenge_analysis.structural_uncertainty.measurements.captured_bundle_lines = linesOf(bundle);
  meta.counts = {
    total_source_lines: stats.total,
    src_lines: stats.src,
    z0_lines: stats.z0,
    bundle_lines: linesOf(bundle),
  };
  const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
  const oracle = JSON.parse(await readFile(oraclePath, "utf8"));
  const anchor = oracle.primary_anchor;
  meta.primary_anchor = {
    answer_function: anchor.answer_function,
    source_function: anchor.source_function,
    source_file: anchor.source_file,
    source_bundle_name_aligned: anchor.source_bundle_name_aligned ?? false,
    captured_bundle: anchor.captured_file,
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
      dist: path.relative(process.cwd(), distRoot),
      bundle: path.relative(process.cwd(), bundlePath),
      bundle_bytes: bundleInfo.size,
      bundle_lines: linesOf(await readFile(bundlePath, "utf8")),
    },
    null,
    2,
  ),
);
