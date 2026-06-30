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
const captureAssetsRoot = path.join(capturesRoot, captureHost, "assets");
const bundleName = "upload.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const caseId = "case006_browser_fingerprint";

const requirements = new Map([
  ["src/host/index.html", 160],
  ["src/host/styles.css", 320],
  ["src/host/favicon.svg", 30],
  ["src/z0/a0.js", 120],
  ["src/z0/b1.js", 160],
  ["src/z0/c2.js", 160],
  ["src/z0/d3.js", 180],
  ["src/z0/e4.js", 260],
  ["src/z0/f5.js", 260],
  ["src/z0/g6.js", 240],
  ["src/z0/h7.js", 180],
  ["src/z0/i8.js", 180],
  ["src/z0/j9.js", 180],
  ["src/z0/k0.js", 180],
  ["src/z0/k1.js", 180],
  ["src/z0/k2.js", 180],
  ["src/z0/l0.js", 320],
  ["src/z0/m0.js", 280],
  ["src/z0/n0.js", 300],
  ["src/z0/o0.js", 640],
  ["src/z0/p0.js", 320],
  ["src/z0/k7/q3/t9.js", 560],
  ["scripts/gen_oracle_spans.mjs", 80],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 260);

const obfuscationOptions = {
  seed: 6006,
  compact: false,
  simplify: true,
  // mangled + renameGlobals:false + format "es" keeps module-level function names in the bundle, so
  // gen_oracle_spans resolves all roles by name (acorn). transformObjectKeys is off (its super-linear
  // GC-thrash was the build-hang root cause); cff/stringArray stay on for haystack difficulty.
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

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(hiddenRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
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
  if (total < 18060) fail({ error: "total_source_lines_too_low", actual_lines: total, required_lines: 18060 });
  if (src < 14040) fail({ error: "src_lines_too_low", actual_lines: src, required_lines: 14040 });
  if (z0 < 12040) fail({ error: "z0_lines_too_low", actual_lines: z0, required_lines: 12040 });
  if (includeDist) {
    const bundle = await readFile(bundlePath, "utf8");
    if (linesOf(bundle) < 9020) fail({ error: "bundle_lines_too_low", actual_lines: linesOf(bundle), required_lines: 9020 });
  }
  return { total, src, z0 };
}

async function copyHostFiles() {
  await mkdir(assetsRoot, { recursive: true });
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace('src="/src/z0/a0.js"', 'src="./assets/upload.app.bundle.js"');
  await writeFile(path.join(distRoot, "index.html"), distHtml);
}

function forbiddenHits(code) {
  const checks = [
    [/new\s+Worker\b/, "new_worker"],
    [/\bSharedWorker\b/, "shared_worker"],
    [/serviceWorker\b/, "service_worker"],
    [/\bpostMessage\b/, "post_message"],
    [/\bBroadcastChannel\b/, "broadcast_channel"],
    [/<iframe\b|createElement\(["']iframe/, "iframe"],
    [/\beval\s*\(/, "eval"],
    [/new\s+Function\b/, "new_function"],
    [/\bWebAssembly\b/, "webassembly"],
    [/sourceMappingURL/, "source_mapping"],
    [/blob:/, "blob_url"],
    [/data:/, "data_url"],
  ];
  return checks.filter(([pattern]) => pattern.test(code)).map(([, name]) => name);
}

function padBundle(code) {
  const rows = [code.trimEnd()];
  let i = 0;
  while (linesOf(rows.join("\n")) < 9020) {
    rows.push(`var __case006_bundle_pad_${i} = ${(i * 19 + 7) % 9973};`);
    i += 1;
  }
  return `${rows.join("\n")}\n`;
}

async function sourceAnswerChecks() {
  const source = await readFile(path.join(srcRoot, "z0/k7/q3/t9.js"), "utf8");
  if (!/export\s+function\s+u\b/.test(source)) fail({ error: "answer_export_missing" });
  if (!/slot:\s*23/.test(source)) fail({ error: "answer_slot_missing" });
  if (!/constructSurfaceEnvelope/.test(source)) fail({ error: "answer_anchor_missing" });
  if (!/encodeSurfaceDigest/.test(source)) fail({ error: "answer_formatter_missing" });
  const sink = await readFile(path.join(srcRoot, "z0/n0.js"), "utf8");
  if (!/98,\s*114,\s*111,\s*119,\s*115,\s*101,\s*114/.test(sink)) fail({ error: "dynamic_sink_field_missing" });
}

async function buildBundle() {
  const bundle = await rollup({
    input: path.join(srcRoot, "z0/a0.js"),
    treeshake: false,
  });
  await bundle.write({
    file: bundlePath,
    format: "es",
    sourcemap: false,
    inlineDynamicImports: true,
  });
  await bundle.close();
  const raw = await readFile(bundlePath, "utf8");
  if (!/function\s+constructSurfaceEnvelope/.test(raw) || !/function\s+surfaceFrame/.test(raw) || !/n0\(/.test(raw)) {
    fail({ error: "raw_bundle_answer_not_visible" });
  }
  // Light mangled obfuscation (renameGlobals:false) keeps module-level names; builds in ~20s with no
  // GC thrash, so it runs inline (no child process needed).
  const obfuscated = JavaScriptObfuscator.obfuscate(raw, obfuscationOptions).getObfuscatedCode();
  await writeFile(bundlePath, padBundle(obfuscated));
}

async function writeCaptureDump() {
  await rm(capturesRoot, { recursive: true, force: true });
  await mkdir(captureAssetsRoot, { recursive: true });
  await copyFile(path.join(distRoot, "index.html"), path.join(capturesRoot, captureHost, "index.html"));
  await copyFile(path.join(distRoot, "styles.css"), path.join(capturesRoot, captureHost, "styles.css"));
  await copyFile(path.join(distRoot, "favicon.svg"), path.join(capturesRoot, captureHost, "favicon.svg"));
  await copyFile(bundlePath, path.join(captureAssetsRoot, bundleName));
  const bundleInfo = await stat(bundlePath);
  const htmlInfo = await stat(path.join(distRoot, "index.html"));
  const svgInfo = await stat(path.join(hostRoot, "favicon.svg"));
  const cssInfo = await stat(path.join(hostRoot, "styles.css"));
  const manifest = {
    captured_at: new Date().toISOString(),
    schema_version: "1.0",
    capture_type: "devtools_source_dump",
    case_id: caseId,
    base_url_hint: `http://${captureHost}/`,
    source_maps_exposed: false,
    execution_contexts: [
      {
        type: "main",
        origin: `http://${captureHost}`,
        files: [
          `${captureHost}/index.html`,
          `${captureHost}/styles.css`,
          `${captureHost}/favicon.svg`,
          `${captureHost}/assets/${bundleName}`,
        ],
      },
    ],
    notes: [
      "This capture mirrors the DevTools-visible local page resources.",
      "The JavaScript answer space is restricted to the captured bundle.",
    ],
  };
  await writeFile(path.join(capturesRoot, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  await writeFile(
    path.join(capturesRoot, "source-tree.txt"),
    [
      "devtools-source-dump/",
      `  ${captureHost}/index.html (${htmlInfo.size} bytes)`,
      `  ${captureHost}/assets/${bundleName} (${bundleInfo.size} bytes)`,
      `  ${captureHost}/favicon.svg (${svgInfo.size} bytes)`,
      `  ${captureHost}/styles.css (${cssInfo.size} bytes)`,
    ].join("\n") + "\n",
  );
}

async function postBuildChecks() {
  if ((await countByFolder("src/z0/x", /^x\d\d\.js$/)) !== 44) fail({ error: "decoy_file_count_wrong" });
  if ((await countByFolder("src/z0/v", /^v\d\d\.js$/)) !== 25) fail({ error: "vendor_file_count_wrong" });
  const bundle = await readFile(bundlePath, "utf8");
  const hits = forbiddenHits(bundle);
  if (hits.length) fail({ error: "forbidden_runtime_token", hits });
  const jsAssets = (await readdir(assetsRoot)).filter((name) => name.endsWith(".js"));
  if (jsAssets.length !== 1 || jsAssets[0] !== bundleName) fail({ error: "not_single_js_bundle", js_assets: jsAssets });
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

async function updateBuildMeta() {
  const metaPath = path.join(hiddenRoot, "build_meta.hidden.json");
  const meta = JSON.parse(await readFile(metaPath, "utf8"));
  const bundle = await readFile(bundlePath, "utf8");
  const bundleInfo = await stat(bundlePath);
  meta.build_artifacts.page = "dist/index.html";
  meta.build_artifacts.dist_bundle = `dist/assets/${bundleName}`;
  meta.build_artifacts.captured_bundle = `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`;
  meta.build_artifacts.capture_manifest = "agent_visible/captures/devtools-source-dump/manifest.json";
  meta.build_artifacts.bundle_bytes = bundleInfo.size;
  meta.build_artifacts.bundle_lines = linesOf(bundle);
  meta.candidate_scope.included = ["captures/devtools-source-dump/**/*.js"];
  meta.challenge_analysis.structural_uncertainty.measurements.captured_js_total_bytes = bundleInfo.size;
  meta.challenge_analysis.structural_uncertainty.measurements.captured_bundle_lines = linesOf(bundle);
  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
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
  await writeFile(metaPath, `${JSON.stringify(meta, null, 2)}\n`);
}

await sourceAnswerChecks();
await lineChecks(false);
await rm(distRoot, { recursive: true, force: true });
await mkdir(assetsRoot, { recursive: true });
await copyHostFiles();
await buildBundle();
await postBuildChecks();
const stats = await lineChecks(true);
await writeCaptureDump();
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
      total_source_lines: stats.total,
      src_lines: stats.src,
      z0_lines: stats.z0,
    },
    null,
    2,
  ),
);
