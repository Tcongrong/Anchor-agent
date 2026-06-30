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
const captureHost = "127.0.0.1_4191";
const bundleName = "account.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const captureBundleRel = `captures/devtools-source-dump/${captureHost}/assets/${bundleName}`;
const caseId = "case001_byte_array_transformation";

const requirements = new Map([
  ["src/host/index.html", 20],
  ["src/host/styles.css", 200],
  ["src/host/favicon.svg", 20],
  ["src/z0/a0.js", 80],
  ["src/z0/b1.js", 120],
  ["src/z0/c2.js", 120],
  ["src/z0/d3.js", 120],
  ["src/z0/e4.js", 160],
  ["src/z0/f5.js", 120],
  ["src/z0/g6.js", 120],
  ["src/z0/l0.js", 260],
  ["src/z0/m0.js", 180],
  ["src/z0/n0.js", 220],
  ["src/z0/o0.js", 420],
  ["src/z0/p0.js", 240],
  ["src/z0/k7/q3/t9.js", 360],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 120);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 180);

const obfuscationOptions = {
  seed: 1001,
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
    '<script type="module" src="./assets/account.app.bundle.js"></script>',
  );
  await writeFile(path.join(distRoot, "index.html"), distHtml, "utf8");
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
}

async function buildBundle() {
  const bundle = await rollup({ input: path.join(srcRoot, "z0", "a0.js"), treeshake: false });
  await bundle.write({ file: bundlePath, format: "es", sourcemap: false, inlineDynamicImports: true });
  await bundle.close();
  const code = await readFile(bundlePath, "utf8");
  const obfuscated = JavaScriptObfuscator.obfuscate(code, obfuscationOptions).getObfuscatedCode();
  await writeFile(bundlePath, `${obfuscated}\n`, "utf8");
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
    page: "http://127.0.0.1:4191/",
    mode: "initial_page_load_only",
    note: "Only resources served by case001_byte_array_transformation during initial page load are dumped. Browser extension resources are intentionally not included.",
    resources: [
      { contentType: "text/html; charset=utf-8", status: 200, url: "http://127.0.0.1:4191/", savedAs: `${captureHost}/index.html`, bytes: htmlInfo.size },
      { contentType: "text/javascript; charset=utf-8", status: 200, url: `http://127.0.0.1:4191/assets/${bundleName}`, savedAs: `${captureHost}/assets/${bundleName}`, bytes: bundleInfo.size },
      { contentType: "image/svg+xml", status: 200, url: "http://127.0.0.1:4191/favicon.svg", savedAs: `${captureHost}/favicon.svg`, bytes: svgInfo.size },
      { contentType: "text/css; charset=utf-8", status: 200, url: "http://127.0.0.1:4191/styles.css", savedAs: `${captureHost}/styles.css`, bytes: cssInfo.size },
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
  if (result.status !== 0) fail({ error: "gen_oracle_spans_failed", stdout: result.stdout, stderr: result.stderr });
}

async function updateBuildMeta(sourceStats) {
  const metaPath = path.join(hiddenRoot, "build_meta.hidden.json");
  const meta = JSON.parse(await readFile(metaPath, "utf8"));
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  const bundle = await readFile(bundlePath, "utf8");
  const bundleInfo = await stat(bundlePath);
  meta.build_artifacts.page = "agent_hidden/dist/index.html";
  meta.build_artifacts.dist_bundle = "agent_hidden/dist/assets/account.app.bundle.js";
  meta.build_artifacts.captured_bundle = `agent_visible/${captureBundleRel}`;
  meta.build_artifacts.capture_manifest = "agent_visible/captures/devtools-source-dump/manifest.json";
  meta.build_artifacts.bundle_bytes = bundleInfo.size;
  meta.build_artifacts.bundle_lines = linesOf(bundle);
  meta.challenge_analysis.structural_uncertainty.measurements.captured_js_total_bytes = bundleInfo.size;
  meta.challenge_analysis.structural_uncertainty.measurements.captured_bundle_lines = linesOf(bundle);
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
