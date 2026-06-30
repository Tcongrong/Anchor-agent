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
const bundleName = "query.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const caseId = "case005_request_transformation";

const requirements = new Map([
  ["src/host/index.html", 180],
  ["src/host/styles.css", 360],
  ["src/host/favicon.svg", 30],
  ["src/z0/a0.js", 140],
  ["src/z0/b1.js", 180],
  ["src/z0/c2.js", 180],
  ["src/z0/d3.js", 200],
  ["src/z0/e4.js", 280],
  ["src/z0/f5.js", 280],
  ["src/z0/g6.js", 240],
  ["src/z0/h7.js", 200],
  ["src/z0/i8.js", 200],
  ["src/z0/j9.js", 200],
  ["src/z0/k0.js", 200],
  ["src/z0/k1.js", 200],
  ["src/z0/k2.js", 200],
  ["src/z0/l0.js", 340],
  ["src/z0/m0.js", 280],
  ["src/z0/n0.js", 300],
  ["src/z0/o0.js", 640],
  ["src/z0/p0.js", 320],
  ["src/z0/k7/q3/t9.js", 560],
  ["scripts/gen_oracle_spans.mjs", 80],
]);
for (let i = 0; i < 8; i += 1) requirements.set(`src/z0/w/w${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 260);

const obfuscationOptions = {
  seed: 1005,
  compact: false,
  simplify: true,
  identifierNamesGenerator: "mangled",
  stringArray: true,
  stringArrayThreshold: 0.65,
  stringArrayRotate: true,
  stringArrayShuffle: true,
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
  const actual = linesOf(text);
  if (actual < required) fail({ error: "line_count_too_low", file: relative, actual_lines: actual, required_lines: required });
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
  if (src < 14000) fail({ error: "src_lines_too_low", actual_lines: src, required_lines: 14000 });
  if (z0 < 12000) fail({ error: "z0_lines_too_low", actual_lines: z0, required_lines: 12000 });
  if (includeDist) {
    const bundle = await readFile(bundlePath, "utf8");
    if (linesOf(bundle) < 9000) fail({ error: "bundle_lines_too_low", actual_lines: linesOf(bundle), required_lines: 9000 });
  }
  return { total, src, z0 };
}

async function copyHostFiles() {
  await mkdir(assetsRoot, { recursive: true });
  await copyFile(path.join(hostRoot, "index.html"), path.join(distRoot, "index.html"));
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
}

async function buildBundle() {
  const bundle = await rollup({ input: path.join(srcRoot, "z0", "a0.js"), treeshake: false });
  await bundle.write({ file: bundlePath, format: "es", sourcemap: false, inlineDynamicImports: true });
  await bundle.close();
  const code = await readFile(bundlePath, "utf8");
  let obfuscated = JavaScriptObfuscator.obfuscate(code, obfuscationOptions).getObfuscatedCode();
  const bundlePad = [];
  let padIndex = 0;
  while (linesOf(`${obfuscated}\n${bundlePad.join("\n")}`) < 9100) {
    const name = `__z0_query_pad_${padIndex}`;
    bundlePad.push(
      `class ${name} { constructor(label = 'query row ${padIndex}') { this.label = label; this.rows = []; } add(row) { this.rows.push({ label: this.label, row: String(row) }); return this; } snapshot() { return this.rows.map((item) => ({ ...item })); } }`,
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
  await rm(capturesRoot, { recursive: true, force: true });
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
    page: "http://127.0.0.1:4173/",
    mode: "initial_page_load_only",
    note: "Only resources served by case005_request_transformation during initial page load are dumped. Browser extension resources are intentionally not included.",
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

async function updateBuildMeta() {
  const metaPath = path.join(hiddenRoot, "build_meta.hidden.json");
  const meta = JSON.parse((await readFile(metaPath, "utf8")).replace(/^﻿/, ""));
  const bundle = await readFile(bundlePath, "utf8");
  const bundleInfo = await stat(bundlePath);
  meta.task_contract.target_observable.trigger.steps = [
    { action: "type", selector: "#searchScope", value: "logs-ops" },
    { action: "select", selector: "#filterMode", value: "strict" },
    { action: "check", selector: "#filterEnabled" },
    { action: "submit", selector: "#queryForm" },
  ];
  meta.build_artifacts.bundle_bytes = bundleInfo.size;
  meta.build_artifacts.bundle_lines = linesOf(bundle);
  meta.build_artifacts.captured_bundle = `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`;
  meta.challenge_analysis.structural_uncertainty.measurements.captured_js_total_bytes = bundleInfo.size;
  meta.challenge_analysis.structural_uncertainty.measurements.captured_bundle_lines = linesOf(bundle);
  const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
  const oracle = JSON.parse((await readFile(oraclePath, "utf8")).replace(/^﻿/, ""));
  const anchor = oracle.primary_anchor;
  meta.primary_anchor = {
    answer_function: anchor.answer_function || anchor.function,
    source_function: anchor.source_function || anchor.function,
    source_file: anchor.source_file,
    source_bundle_name_aligned: anchor.source_bundle_name_aligned ?? true,
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
  await writeFile(metaPath, JSON.stringify(meta, null, 2) + "\n", "utf8");
}

function runGenOracleSpans() {
  const result = spawnSync(process.execPath, [path.join(hiddenRoot, "scripts", "gen_oracle_spans.mjs")], {
    cwd: hiddenRoot,
    encoding: "utf8",
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.status !== 0) {
    fail({ error: "gen_oracle_spans_failed", stderr: result.stderr });
  }
}

await lineChecks(false);
await rm(distRoot, { recursive: true, force: true });
await mkdir(assetsRoot, { recursive: true });
await copyHostFiles();
await buildBundle();
await scanDist();
await lineChecks(true);
await createCaptures();
runGenOracleSpans();
await updateBuildMeta();
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
