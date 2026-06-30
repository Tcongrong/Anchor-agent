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
const captureHost = "127.0.0.1_7599";
const captureAssetsRoot = path.join(capturesRoot, captureHost, "assets");
const bundleName = "note.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const caseId = "case003_state_encoding";

// Light obfuscation (mangled identifiers): large haystack + renamed anchor in bundle.
const obfuscationOptions = {
  seed: 3003,
  compact: false,
  simplify: true,
  identifierNamesGenerator: "mangled",
  stringArray: false,
  transformObjectKeys: false,
  controlFlowFlattening: false,
  deadCodeInjection: false,
  renameGlobals: false,
  selfDefending: false,
  debugProtection: false,
  sourceMap: false,
};

const BUNDLE_MIN_LINES = 9000;

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
    if (entry.isDirectory()) out.push(...(await readFiles(resolved)));
    else out.push(resolved);
  }
  return out;
}

async function copyHostFiles() {
  await mkdir(assetsRoot, { recursive: true });
  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace(
    '<script type="module" src="/src/noteBench/main.js"></script>',
    `<script type="module" src="./assets/${bundleName}"></script>`,
  );
  await writeFile(path.join(distRoot, "index.html"), distHtml, "utf8");
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
}

async function buildBundle() {
  const bundle = await rollup({
    input: path.join(srcRoot, "noteBench", "main.js"),
    treeshake: { moduleSideEffects: true },
  });
  await bundle.write({
    file: bundlePath,
    format: "es",
    sourcemap: false,
    inlineDynamicImports: true,
  });
  await bundle.close();
  const bundledCode = await readFile(bundlePath, "utf8");
  const obfuscated = JavaScriptObfuscator.obfuscate(bundledCode, obfuscationOptions).getObfuscatedCode();
  await writeFile(bundlePath, obfuscated, "utf8");
}

async function scanDist() {
  const files = await readFiles(distRoot);
  const names = files.map((file) => path.relative(distRoot, file).replaceAll("\\", "/"));
  const text = (
    await Promise.all(files.filter((file) => /\.(html|css|js|svg)$/.test(file)).map((file) => readFile(file, "utf8")))
  ).join("\n");
  const disallowed = [
    /new\s+Worker/i,
    /new\s+SharedWorker/i,
    /serviceWorker\.register/i,
    /importScripts\s*\(/i,
    /postMessage\s*\(/i,
    /note\.worker\.bundle\.js/i,
    /worker\.bundle\.js/i,
  ];
  if (names.some((name) => /\.map$/i.test(name) || /worker/i.test(name))) {
    fail({ error: "forbidden_dist_file", files: names });
  }
  if (disallowed.some((pattern) => pattern.test(text))) {
    fail({ error: "forbidden_dist_text" });
  }
  const bundleText = await readFile(bundlePath, "utf8");
  if (linesOf(bundleText) < BUNDLE_MIN_LINES) {
    fail({ error: "bundle_too_small", lines: linesOf(bundleText), required: BUNDLE_MIN_LINES });
  }
}

async function createCaptures() {
  await mkdir(captureAssetsRoot, { recursive: true });
  await copyFile(bundlePath, path.join(captureAssetsRoot, bundleName));
  await copyFile(path.join(distRoot, "index.html"), path.join(capturesRoot, captureHost, "index.html"));
  await copyFile(path.join(distRoot, "favicon.svg"), path.join(capturesRoot, captureHost, "favicon.svg"));
  await copyFile(path.join(distRoot, "styles.css"), path.join(capturesRoot, captureHost, "styles.css"));

  const bundleInfo = await stat(bundlePath);
  const htmlInfo = await stat(path.join(distRoot, "index.html"));
  const svgInfo = await stat(path.join(distRoot, "favicon.svg"));
  const cssInfo = await stat(path.join(distRoot, "styles.css"));
  const manifest = {
    captured_at: new Date().toISOString(),
    case_id: caseId,
    capture_schema_version: "1.0",
    source_root: "captures/devtools-source-dump",
    host: captureHost,
    page: "http://127.0.0.1:7599/",
    mode: "initial_page_load_only",
    note: "Only resources served by case003_state_encoding during initial page load are dumped. Browser extension resources are intentionally not included.",
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
      {
        url: "http://127.0.0.1:7599/",
        status: 200,
        contentType: "text/html; charset=utf-8",
        bytes: htmlInfo.size,
        savedAs: `${captureHost}/index.html`,
      },
      {
        url: `http://127.0.0.1:7599/assets/${bundleName}`,
        status: 200,
        contentType: "text/javascript; charset=utf-8",
        bytes: bundleInfo.size,
        savedAs: `${captureHost}/assets/${bundleName}`,
      },
      {
        url: "http://127.0.0.1:7599/favicon.svg",
        status: 200,
        contentType: "image/svg+xml",
        bytes: svgInfo.size,
        savedAs: `${captureHost}/favicon.svg`,
      },
      {
        url: "http://127.0.0.1:7599/styles.css",
        status: 200,
        contentType: "text/css; charset=utf-8",
        bytes: cssInfo.size,
        savedAs: `${captureHost}/styles.css`,
      },
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

async function updateBuildMeta() {
  const metaPath = path.join(hiddenRoot, "build_meta.hidden.json");
  const meta = JSON.parse(await readFile(metaPath, "utf8"));
  const bundleText = await readFile(bundlePath, "utf8");
  const bundleInfo = await stat(bundlePath);
  meta.task_contract.target_observable.trigger.steps = [
    { action: "type", selector: "#noteText", value: "Call supplier before Friday" },
    { action: "type", selector: "#tagInput", value: "work" },
    { action: "select", selector: "#prioritySelect", value: "high" },
    { action: "focus", selector: "#noteText" },
    { action: "press", selector: "#noteText", keys: "Control+Enter" },
  ];
  meta.build_artifacts.page = "dist/index.html";
  meta.build_artifacts.dist_bundle = `dist/assets/${bundleName}`;
  meta.build_artifacts.captured_bundle = `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`;
  meta.build_artifacts.capture_manifest = "agent_visible/captures/devtools-source-dump/manifest.json";
  meta.build_artifacts.bundle_bytes = bundleInfo.size;
  meta.build_artifacts.bundle_lines = linesOf(bundleText);
  meta.candidate_scope.included = ["captures/devtools-source-dump/**/*.js"];
  meta.challenge_analysis.structural_uncertainty.measurements.captured_js_total_bytes = bundleInfo.size;
  meta.challenge_analysis.structural_uncertainty.measurements.captured_bundle_lines = linesOf(bundleText);
  meta.challenge_analysis.structural_uncertainty.measurements.captured_js_files = 1;
  meta.challenge_analysis.semantic_explosion.measurements.off_chain_decoy_modules = 104;
  meta.challenge_analysis.semantic_explosion.measurements.behavior_chain_function_like_units = 47;
  meta.difficulty.distractor_count = 69;
  meta.difficulty.distractor_oracle_note =
    "Each haystack module (n00-n43, v00-v24) has one representative Off-chain row in role_oracle (label haystack:<id>).";
  meta.difficulty.vendor_noise_level = "high";
  meta.difficulty.vendor_noise_file_count = 25;
  meta.difficulty.semantic_decoy_count = 22;
  meta.difficulty.semantic_decoy_note =
    "7 sidecar codecs, 12 shadow encoders (s00-s11), and 3 name-confusion decoys (composeDraftStateCode/Codec/Preview).";
  meta.difficulty.obfuscation_level = 1;
  meta.difficulty.obfuscation_compact = false;
  meta.difficulty.obfuscation_note =
    "Rollup bundle run through javascript-obfuscator with mangled local identifiers (seed 3003). The live anchor export is sealDraftFrameCode; composeDraftStateCode/Codec/Preview are off-chain name decoys. Haystack modules add 2400+ functions.";
  meta.difficulty.call_depth = 24;
  meta.difficulty.async_level = 4;
  meta.challenge_analysis.construct_validity_note =
    "Primary bottleneck is tracing the note.add keyboard path to sealDraftFrameCode and rejecting similarly named off-chain decoys (composeDraftStateCode/Codec/Preview), shadow encoders, sidecars, and haystack helpers inside a 1.7MB bundle.";
  const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
  const oracle = JSON.parse(await readFile(oraclePath, "utf8"));
  const anchor = oracle.primary_anchor;
  meta.primary_anchor = {
    answer_function: anchor.answer_function,
    source_function: anchor.source_function,
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
  await writeFile(metaPath, `${JSON.stringify(meta, null, 2)}\n`, "utf8");
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

function runSyncOffchainOracle() {
  const result = spawnSync(process.execPath, [path.join(hiddenRoot, "scripts", "sync_offchain_oracle.mjs")], {
    cwd: hiddenRoot,
    encoding: "utf8",
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) {
    fail({ error: "sync_offchain_oracle_failed", stdout: result.stdout, stderr: result.stderr });
  }
}

await rm(distRoot, { recursive: true, force: true });
await mkdir(assetsRoot, { recursive: true });
await copyHostFiles();
await buildBundle();
await scanDist();
await createCaptures();
runGenOracleSpans();
runSyncOffchainOracle();
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
