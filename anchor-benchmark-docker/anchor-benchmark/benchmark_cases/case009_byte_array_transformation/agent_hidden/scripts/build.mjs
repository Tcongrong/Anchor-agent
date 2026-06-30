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
const captureHost = "127.0.0.1_4009";
const bundleName = "calendar.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const captureBundleRel = `captures/devtools-source-dump/${captureHost}/assets/${bundleName}`;
const caseId = "case009_byte_array_transformation";

const requirements = new Map([
  ["src/host/index.html", 160],
  ["src/host/styles.css", 300],
  ["src/host/favicon.svg", 20],
  ["src/z0/k7/q3/t9.js", 360],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 120);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 180);

const obfuscationOptions = {
  seed: 9009,
  compact: false,
  simplify: true,
  identifierNamesGenerator: "hexadecimal",
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

async function checkSourceLines() {
  for (const [relative, required] of requirements) {
    const file = path.join(hiddenRoot, relative);
    let text = "";
    try {
      text = await readFile(file, "utf8");
    } catch {
      fail({ error: "missing_required_file", file: relative });
    }
    const actual = linesOf(text);
    if (actual < required) fail({ error: "source_line_count_too_low", file: relative, actual_lines: actual, required_lines: required });
  }
  const files = await readFiles(srcRoot);
  let srcLines = 0;
  let z0Lines = 0;
  for (const file of files.filter((item) => /\.(js|html|css|svg)$/.test(item))) {
    const relative = path.relative(hiddenRoot, file).replaceAll("\\", "/");
    const count = linesOf(await readFile(file, "utf8"));
    srcLines += count;
    if (relative.startsWith("src/z0/")) z0Lines += count;
  }
  if (srcLines < 14000) fail({ error: "src_lines_too_low", actual_lines: srcLines, required_lines: 14000 });
  if (z0Lines < 12000) fail({ error: "z0_lines_too_low", actual_lines: z0Lines, required_lines: 12000 });
  return { srcLines, z0Lines };
}

async function copyHostFiles() {
  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace(
    '<script type="module" src="/src/z0/a0.js"></script>',
    `<script type="module" src="./assets/${bundleName}"></script>`,
  );
  await writeFile(path.join(distRoot, "index.html"), distHtml, "utf8");
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
}

async function buildBundle() {
  const bundle = await rollup({ input: path.join(srcRoot, "z0", "a0.js"), treeshake: false });
  await bundle.write({ file: bundlePath, format: "iife", name: "case009TypeArrayCalendar", generatedCode: "es2015", sourcemap: false, inlineDynamicImports: true });
  await bundle.close();
  const code = await readFile(bundlePath, "utf8");
  if (!/function\s+transformTableTypedArray\s*\(/.test(code)) fail({ error: "raw_bundle_anchor_not_visible" });
  if (!/new\s+Uint8Array\s*\(\s*18\s*\)/.test(code)) fail({ error: "raw_bundle_typed_array_missing" });
  const obfuscated = JavaScriptObfuscator.obfuscate(code, obfuscationOptions).getObfuscatedCode();
  await writeFile(bundlePath, `${obfuscated}\n`, "utf8");
}

async function scanDist() {
  const bundle = await readFile(bundlePath, "utf8");
  const assetNames = await readdir(assetsRoot);
  if (assetNames.some((name) => /\.map$/i.test(name) || /worker/i.test(name))) fail({ error: "forbidden_dist_file", files: assetNames });
  const bad = [
    ["sourceMappingURL", /sourceMappingURL/i],
    ["new_worker", /new\s+Worker\b/],
    ["shared_worker", /\bSharedWorker\b/],
    ["service_worker", /serviceWorker\s*\./],
    ["broadcast_channel", /\bBroadcastChannel\b/],
    ["post_message", /\bpostMessage\s*\(/],
    ["message_channel", /\bMessageChannel\b/],
    ["iframe", /<iframe\b|createElement\(["']iframe/],
    ["eval", /\beval\s*\(/],
    ["new_function", /new\s+Function\b/],
    ["webassembly", /\bWebAssembly\b/],
    ["blob_url", /blob:/],
    ["data_js_url", /data:text\/javascript/],
  ];
  const hit = bad.find(([, pattern]) => pattern.test(bundle));
  if (hit) fail({ error: "forbidden_dist_text", token: hit[0] });
  const jsAssets = assetNames.filter((name) => name.endsWith(".js"));
  if (jsAssets.length !== 1 || jsAssets[0] !== bundleName) fail({ error: "not_single_js_bundle", js_assets: jsAssets });
}

async function createCaptures() {
  const captureHostRoot = path.join(capturesRoot, captureHost);
  const captureAssetsRoot = path.join(captureHostRoot, "assets");
  await rm(capturesRoot, { recursive: true, force: true });
  await mkdir(captureAssetsRoot, { recursive: true });
  await copyFile(bundlePath, path.join(captureAssetsRoot, bundleName));
  await copyFile(path.join(distRoot, "index.html"), path.join(captureHostRoot, "index.html"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(captureHostRoot, "favicon.svg"));
  await copyFile(path.join(hostRoot, "styles.css"), path.join(captureHostRoot, "styles.css"));
  const bundleInfo = await stat(bundlePath);
  const htmlInfo = await stat(path.join(distRoot, "index.html"));
  const svgInfo = await stat(path.join(hostRoot, "favicon.svg"));
  const cssInfo = await stat(path.join(hostRoot, "styles.css"));
  const manifest = {
    captured_at: new Date().toISOString(),
    case_id: caseId,
    page: "http://127.0.0.1:4009/",
    mode: "initial_page_load_only",
    note: "Only resources served by case009_byte_array_transformation during initial page load are dumped. Browser extension resources are intentionally not included.",
    resources: [
      { contentType: "text/html; charset=utf-8", status: 200, url: "http://127.0.0.1:4009/", savedAs: `${captureHost}/index.html`, bytes: htmlInfo.size },
      { contentType: "text/javascript; charset=utf-8", status: 200, url: `http://127.0.0.1:4009/assets/${bundleName}`, savedAs: `${captureHost}/assets/${bundleName}`, bytes: bundleInfo.size },
      { contentType: "image/svg+xml", status: 200, url: "http://127.0.0.1:4009/favicon.svg", savedAs: `${captureHost}/favicon.svg`, bytes: svgInfo.size },
      { contentType: "text/css; charset=utf-8", status: 200, url: "http://127.0.0.1:4009/styles.css", savedAs: `${captureHost}/styles.css`, bytes: cssInfo.size },
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

function runGenOracleSpans() {
  const result = spawnSync(process.execPath, [path.join(hiddenRoot, "scripts", "gen_oracle_spans.mjs")], {
    cwd: hiddenRoot,
    encoding: "utf8",
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.status !== 0) fail({ error: "gen_oracle_spans_failed", stdout: result.stdout, stderr: result.stderr });
}

async function updateBuildMeta(sourceStats) {
  const metaPath = path.join(hiddenRoot, "build_meta.hidden.json");
  const meta = JSON.parse(await readFile(metaPath, "utf8"));
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  const bundle = await readFile(bundlePath, "utf8");
  const bundleInfo = await stat(bundlePath);
  meta.build_artifacts.page = "agent_hidden/dist/index.html";
  meta.build_artifacts.dist_bundle = `agent_hidden/dist/assets/${bundleName}`;
  meta.build_artifacts.captured_bundle = `agent_visible/${captureBundleRel}`;
  meta.build_artifacts.capture_manifest = "agent_visible/captures/devtools-source-dump/manifest.json";
  meta.build_artifacts.bundle_bytes = bundleInfo.size;
  meta.build_artifacts.bundle_lines = linesOf(bundle);
  if (meta.challenge_analysis?.structural_uncertainty?.measurements) {
    meta.challenge_analysis.structural_uncertainty.measurements.captured_js_total_bytes = bundleInfo.size;
    meta.challenge_analysis.structural_uncertainty.measurements.captured_bundle_lines = linesOf(bundle);
  }
  meta.primary_anchor = {
    answer_function: oracle.primary_anchor.answer_function,
    source_function: oracle.primary_anchor.source_function,
    source_file: oracle.primary_anchor.source_file,
    source_bundle_name_aligned: oracle.primary_anchor.source_bundle_name_aligned,
    captured_bundle: `agent_visible/${captureBundleRel}`,
    captured_span: {
      start_line: oracle.primary_anchor.captured_span.start_line,
      end_line: oracle.primary_anchor.captured_span.end_line,
      start_offset: oracle.primary_anchor.captured_span.start_offset,
      end_offset: oracle.primary_anchor.captured_span.end_offset,
    },
    role_oracle_anchor_entries: oracle.role_oracle.filter((row) => row.role === "Anchor").length,
    oracle_pointer: "oracle.hidden.json:primary_anchor",
  };
  meta.source_line_counts = sourceStats;
  await writeFile(metaPath, JSON.stringify(meta, null, 2) + "\n", "utf8");
}

const sourceStats = await checkSourceLines();
await rm(distRoot, { recursive: true, force: true });
await mkdir(assetsRoot, { recursive: true });
await copyHostFiles();
await buildBundle();
await scanDist();
await createCaptures();
runGenOracleSpans();
await updateBuildMeta(sourceStats);
const bundleInfo = await stat(bundlePath);
console.log(JSON.stringify({
  case_id: caseId,
  built: true,
  dist: path.relative(process.cwd(), distRoot),
  bundle: path.relative(process.cwd(), bundlePath),
  bundle_bytes: bundleInfo.size,
  bundle_lines: linesOf(await readFile(bundlePath, "utf8")),
}, null, 2));
