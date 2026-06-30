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
const bundleName = "note.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const captureHost = "127.0.0.1_4173";
const captureRoot = path.join(visibleRoot, "captures", "devtools-source-dump");
const capturedHostRoot = path.join(captureRoot, captureHost);
const capturedAssetsRoot = path.join(capturedHostRoot, "assets");
const capturedBundleRelative = `captures/devtools-source-dump/${captureHost}/assets/${bundleName}`;
const capturedBundlePath = path.join(visibleRoot, capturedBundleRelative);
const caseId = "case003_browser_fingerprint";

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
  ["src/z0/r0.js", 320],
  ["src/z0/s0.js", 220],
  ["src/z0/t0.js", 240],
  ["src/z0/k7/q3/t9.js", 560],
  ["scripts/gen_oracle_spans.mjs", 80]
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 260);

const obfuscationOptions = {
  seed: 3003,
  compact: false,
  sourceMap: false,
  selfDefending: false,
  debugProtection: false,
  debugProtectionInterval: 0,
  disableConsoleOutput: false,
  simplify: true,
  identifierNamesGenerator: "mangled",
  stringArray: false,
  transformObjectKeys: false,
  controlFlowFlattening: false,
  deadCodeInjection: false,
  renameGlobals: false
};

function linesOf(text) {
  return text.split(/\r?\n/).length;
}

function relHidden(file) {
  return path.relative(hiddenRoot, file).replaceAll("\\", "/");
}

function relCase(file) {
  return path.relative(caseRoot, file).replaceAll("\\", "/");
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

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(hiddenRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
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
    const relative = relHidden(file);
    if (relative.startsWith("dist/")) continue;
    const count = linesOf(await readFile(file, "utf8"));
    total += count;
    if (relative.startsWith("src/")) src += count;
    if (relative.startsWith("src/z0/")) z0 += count;
  }
  if (total < 18080) fail({ error: "total_source_lines_too_low", actual_lines: total, required_lines: 18080 });
  if (src < 14050) fail({ error: "src_lines_too_low", actual_lines: src, required_lines: 14050 });
  if (z0 < 12050) fail({ error: "z0_lines_too_low", actual_lines: z0, required_lines: 12050 });
  if (includeDist) {
    const bundle = await readFile(bundlePath, "utf8");
    if (linesOf(bundle) < 9040) fail({ error: "bundle_lines_too_low", actual_lines: linesOf(bundle), required_lines: 9040 });
  }
  return { total, src, z0 };
}

async function copyHostFiles() {
  await rm(distRoot, { recursive: true, force: true });
  await mkdir(assetsRoot, { recursive: true });
  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace(
    '<script type="module" src="/src/z0/a0.js"></script>',
    `<script type="module" src="./assets/${bundleName}"></script>`
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
    /Worker\s*\(/,
    /SharedWorker/i,
    /serviceWorker\.register/i,
    /BroadcastChannel/i,
    /postMessage\s*\(/i,
    /<iframe/i,
    /createElement\(['"]iframe/i,
    /eval\s*\(/i,
    /new\s+Function/i,
    /WebAssembly/i,
    /blob:/i,
    /data:text\/javascript/i,
    /data:application\/javascript/i
  ];
  if (names.some((name) => /\.map$/i.test(name) || /worker/i.test(name))) fail({ error: "forbidden_dist_file", files: names });
  const hit = bad.find((pattern) => pattern.test(text));
  if (hit) fail({ error: "forbidden_dist_text", pattern: String(hit) });
}

async function copyCaptureFiles() {
  await rm(captureRoot, { recursive: true, force: true });
  await mkdir(capturedAssetsRoot, { recursive: true });
  await copyFile(path.join(distRoot, "index.html"), path.join(capturedHostRoot, "index.html"));
  await copyFile(path.join(distRoot, "styles.css"), path.join(capturedHostRoot, "styles.css"));
  await copyFile(path.join(distRoot, "favicon.svg"), path.join(capturedHostRoot, "favicon.svg"));
  await copyFile(bundlePath, capturedBundlePath);
  const resources = [];
  for (const item of [
    { url: "http://127.0.0.1:4173/", contentType: "text/html; charset=utf-8", savedAs: `${captureHost}/index.html`, file: path.join(capturedHostRoot, "index.html") },
    { url: `http://127.0.0.1:4173/assets/${bundleName}`, contentType: "text/javascript; charset=utf-8", savedAs: `${captureHost}/assets/${bundleName}`, file: capturedBundlePath },
    { url: "http://127.0.0.1:4173/favicon.svg", contentType: "image/svg+xml", savedAs: `${captureHost}/favicon.svg`, file: path.join(capturedHostRoot, "favicon.svg") },
    { url: "http://127.0.0.1:4173/styles.css", contentType: "text/css; charset=utf-8", savedAs: `${captureHost}/styles.css`, file: path.join(capturedHostRoot, "styles.css") }
  ]) {
    const info = await stat(item.file);
    resources.push({ url: item.url, status: 200, contentType: item.contentType, bytes: info.size, savedAs: item.savedAs });
  }
  const manifest = {
    captured_at: new Date().toISOString(),
    case_id: caseId,
    page: "http://127.0.0.1:4173/",
    mode: "initial_page_load_only",
    note: "Only resources served by case003_browser_fingerprint during initial page load are dumped. Browser extension resources are intentionally not included.",
    resources
  };
  const tree = ["devtools-source-dump/", ...resources.map((item) => `  ${item.savedAs} (${item.bytes} bytes, ${item.contentType})`)].join("\n") + "\n";
  await writeFile(path.join(captureRoot, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");
  await writeFile(path.join(captureRoot, "source-tree.txt"), tree, "utf8");
}

function runGenOracleSpans() {
  const result = spawnSync(process.execPath, [path.join(hiddenRoot, "scripts", "gen_oracle_spans.mjs")], {
    cwd: hiddenRoot,
    encoding: "utf8"
  });
  if (result.status !== 0) {
    fail({ error: "gen_oracle_spans_failed", stdout: result.stdout, stderr: result.stderr });
  }
}

async function updateBuildMeta(summary) {
  const metaPath = path.join(hiddenRoot, "build_meta.hidden.json");
  const meta = JSON.parse(await readFile(metaPath, "utf8"));
  const bundle = await readFile(bundlePath, "utf8");
  const bundleInfo = await stat(bundlePath);
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
  meta.case_id = caseId;
  meta.build_artifacts = {
    ...meta.build_artifacts,
    page: "agent_hidden/dist/index.html",
    dist_bundle: `agent_hidden/dist/assets/${bundleName}`,
    captured_bundle: `agent_visible/${capturedBundleRelative}`,
    capture_manifest: "agent_visible/captures/devtools-source-dump/manifest.json",
    capture_files: (await readFiles(captureRoot)).map((file) => relCase(file)).sort(),
    bundle_bytes: bundleInfo.size,
    bundle_lines: linesOf(bundle)
  };
  meta.challenge_analysis.structural_uncertainty.measurements.captured_bundle_lines = linesOf(bundle);
  meta.build_validation = {
    build_timestamp: new Date().toISOString(),
    line_count_summary: {
      pre: { total: summary.pre.total, src: summary.pre.src, z0: summary.pre.z0 },
      post: { total: summary.post.total, src: summary.post.src, z0: summary.post.z0 },
      bundle_lines: linesOf(bundle),
      bundle_bytes: bundleInfo.size
    },
    decoy_file_count: await countByFolder("src/z0/x", /^x\d\d\.js$/),
    vendor_file_count: await countByFolder("src/z0/v", /^v\d\d\.js$/),
    obfuscation_config: obfuscationOptions,
    forbidden_token_scan_result: { passed: true, files: ["assets/note.app.bundle.js", "favicon.svg", "index.html", "styles.css"] },
    sourcemap_scan_result: { passed: true, exposed: false },
    devtools_visibility_check_summary: { bundle_visible_as: `agent_visible/${capturedBundleRelative}`, main_thread_only: true }
  };
  meta.primary_anchor = {
    answer_function: oracle.primary_anchor.answer_function,
    source_function: oracle.primary_anchor.source_function,
    source_file: oracle.primary_anchor.source_file,
    source_bundle_name_aligned: oracle.primary_anchor.source_bundle_name_aligned,
    captured_bundle: oracle.primary_anchor.captured_file,
    captured_span: {
      start_line: oracle.primary_anchor.captured_span.start_line,
      end_line: oracle.primary_anchor.captured_span.end_line,
      start_offset: oracle.primary_anchor.captured_span.start_offset,
      end_offset: oracle.primary_anchor.captured_span.end_offset
    },
    role_oracle_anchor_entries: oracle.role_oracle.filter((row) => row.role === "Anchor").length,
    oracle_pointer: "oracle.hidden.json:primary_anchor"
  };
  await writeFile(metaPath, JSON.stringify(meta, null, 2) + "\n", "utf8");
}

const pre = await lineChecks(false);
const decoyCount = await countByFolder("src/z0/x", /^x\d\d\.js$/);
const vendorCount = await countByFolder("src/z0/v", /^v\d\d\.js$/);
if (decoyCount !== 44) fail({ error: "decoy_file_count_wrong", actual: decoyCount, required: 44 });
if (vendorCount !== 25) fail({ error: "vendor_file_count_wrong", actual: vendorCount, required: 25 });
await copyHostFiles();
await buildBundle();
await scanDist();
await copyCaptureFiles();
runGenOracleSpans();
const post = await lineChecks(true);
await updateBuildMeta({ pre, post });
const bundleInfo = await stat(bundlePath);
console.log(JSON.stringify({
  case_id: caseId,
  passed: true,
  bundle: `agent_hidden/dist/assets/${bundleName}`,
  bundle_bytes: bundleInfo.size,
  bundle_lines: linesOf(await readFile(bundlePath, "utf8")),
  checks: {
    required_files: true,
    line_counts: true,
    decoy_count: true,
    vendor_count: true,
    bundle_lines: true,
    capture_sync: true,
    oracle_spans: true,
    no_sourcemap: true,
    no_worker: true,
    no_postmessage: true,
    no_eval: true
  }
}, null, 2));
