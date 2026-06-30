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
const bundleName = "browser.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const caseId = "case005_browser_fingerprint";

const requirements = new Map([
  ["src/host/index.html", 180],
  ["src/host/styles.css", 360],
  ["src/host/favicon.svg", 30],
  ["src/z0/k7/q3/t9.js", 560],
  ["scripts/gen_oracle_spans.mjs", 80],
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 260);
for (let i = 0; i < 8; i += 1) requirements.set(`src/z0/w/w${String(i).padStart(2, "0")}.js`, 180);

const obfuscationOptions = {
  seed: 5005,
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
  if (total < 18100) fail({ error: "total_source_lines_too_low", actual_lines: total, required_lines: 18100 });
  if (src < 14070) fail({ error: "src_lines_too_low", actual_lines: src, required_lines: 14070 });
  if (z0 < 12070) fail({ error: "z0_lines_too_low", actual_lines: z0, required_lines: 12070 });
  if (includeDist) {
    const bundle = await readFile(bundlePath, "utf8");
    if (linesOf(bundle) < 9050) fail({ error: "bundle_lines_too_low", actual_lines: linesOf(bundle), required_lines: 9050 });
  }
  return { total, src, z0 };
}

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(hiddenRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
}

async function copyHostFiles() {
  await mkdir(assetsRoot, { recursive: true });
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
  await copyFile(path.join(hostRoot, "index.html"), path.join(distRoot, "index.html"));
}

async function buildBundle() {
  const rawBundlePath = path.join(assetsRoot, "browser.raw.bundle.js");
  const bundle = await rollup({ input: path.join(srcRoot, "z0/a0.js"), treeshake: false });
  await bundle.write({
    file: rawBundlePath,
    format: "iife",
    name: "browserCase005Fingerprint",
    sourcemap: false,
    inlineDynamicImports: true,
    generatedCode: "es2015",
  });
  await bundle.close();
  const raw = await readFile(rawBundlePath, "utf8");
  console.error(JSON.stringify({ step: "obfuscating", raw_bytes: raw.length }));
  const obfuscated = JavaScriptObfuscator.obfuscate(raw, obfuscationOptions).getObfuscatedCode();
  await writeFile(bundlePath, obfuscated.endsWith("\n") ? obfuscated : `${obfuscated}\n`);
  await rm(rawBundlePath, { force: true });
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
  ];
  return checks.filter(([, pattern]) => pattern.test(code)).map(([name]) => name);
}

async function postBuildChecks() {
  if ((await countByFolder("src/z0/x", /^x\d\d\.js$/)) !== 44) fail({ error: "decoy_file_count_wrong" });
  if ((await countByFolder("src/z0/v", /^v\d\d\.js$/)) !== 25) fail({ error: "vendor_file_count_wrong" });
  if ((await countByFolder("src/z0/w", /^w\d\d\.js$/)) !== 8) fail({ error: "middleware_file_count_wrong" });
  const bundle = await readFile(bundlePath, "utf8");
  const hits = forbiddenHits(bundle);
  if (hits.length) fail({ error: "forbidden_runtime_token", hits });
  const jsAssets = (await readdir(assetsRoot)).filter((name) => name.endsWith(".js"));
  if (jsAssets.length !== 1 || jsAssets[0] !== bundleName) fail({ error: "not_single_js_bundle", js_assets: jsAssets });
  return lineChecks(true);
}

async function createCaptures() {
  await rm(capturesRoot, { recursive: true, force: true });
  await mkdir(captureAssetsRoot, { recursive: true });
  await copyFile(path.join(distRoot, "index.html"), path.join(capturesRoot, captureHost, "index.html"));
  await copyFile(path.join(distRoot, "styles.css"), path.join(capturesRoot, captureHost, "styles.css"));
  await copyFile(path.join(distRoot, "favicon.svg"), path.join(capturesRoot, captureHost, "favicon.svg"));
  await copyFile(bundlePath, path.join(captureAssetsRoot, bundleName));
  const bundle = await readFile(bundlePath, "utf8");
  const bundleInfo = await stat(bundlePath);
  const manifest = {
    captured_at: new Date().toISOString(),
    capture_schema_version: "1.0",
    case_id: caseId,
    page_url: "http://127.0.0.1:4173/index.html",
    source_maps_exposed: false,
    files: [
      {
        path: `${captureHost}/assets/${bundleName}`,
        type: "script",
        bytes: bundleInfo.size,
        lines: linesOf(bundle),
      },
      { path: `${captureHost}/index.html`, type: "document" },
      { path: `${captureHost}/styles.css`, type: "stylesheet" },
    ],
  };
  await writeFile(path.join(capturesRoot, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  await writeFile(
    path.join(capturesRoot, "source-tree.txt"),
    [`${captureHost}/index.html`, `${captureHost}/styles.css`, `${captureHost}/assets/${bundleName}`].join("\n") + "\n",
  );
}

async function updateBuildMeta(stats) {
  const metaPath = path.join(hiddenRoot, "build_meta.hidden.json");
  const meta = JSON.parse(await readFile(metaPath, "utf8"));
  const bundle = await readFile(bundlePath, "utf8");
  const bundleInfo = await stat(bundlePath);
  meta.task_contract.target_observable.trigger.steps = [
    { action: "select", selector: "#fingerprintMode", value: "strict" },
    { action: "check", selector: "#entropyConsent" },
    { action: "submit", selector: "#fingerprintForm" },
  ];
  meta.build_artifacts.bundle_bytes = bundleInfo.size;
  meta.build_artifacts.bundle_lines = linesOf(bundle);
  meta.build_artifacts.captured_bundle = `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`;
  meta.challenge_analysis.structural_uncertainty.measurements.captured_js_total_bytes = bundleInfo.size;
  meta.challenge_analysis.structural_uncertainty.measurements.captured_bundle_lines = linesOf(bundle);
  const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
  const oracle = JSON.parse(await readFile(oraclePath, "utf8"));
  const anchor = oracle.primary_anchor;
  meta.primary_anchor = {
    answer_function: anchor.answer_function,
    source_function: anchor.source_function,
    source_file: anchor.source_file,
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

function runGenOracleSpans() {
  const result = spawnSync(process.execPath, [path.join(hiddenRoot, "scripts", "gen_oracle_spans.mjs")], {
    cwd: hiddenRoot,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    fail({ error: "gen_oracle_spans_failed", stdout: result.stdout, stderr: result.stderr });
  }
}

await lineChecks(false);
await rm(distRoot, { recursive: true, force: true });
await mkdir(assetsRoot, { recursive: true });
await copyHostFiles();
await buildBundle();
const stats = await postBuildChecks();
await createCaptures();
runGenOracleSpans();
await updateBuildMeta(stats);
const bundleInfo = await stat(bundlePath);
console.log(
  JSON.stringify(
    {
      case_id: caseId,
      built: true,
      dist: "dist/index.html",
      bundle: `dist/assets/${bundleName}`,
      captured_bundle: `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`,
      bundle_bytes: bundleInfo.size,
      bundle_lines: linesOf(await readFile(bundlePath, "utf8")),
      total_source_lines: stats.total,
    },
    null,
    2,
  ),
);
