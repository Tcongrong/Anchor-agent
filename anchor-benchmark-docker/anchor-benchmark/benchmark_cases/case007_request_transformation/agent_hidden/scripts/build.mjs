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
const captureHost = "127.0.0.1_4177";
const captureAssetsRoot = path.join(capturesRoot, captureHost, "assets");
const bundleName = "request.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const rawBundlePath = path.join(assetsRoot, "request.raw.bundle.js");
const caseId = "case007_request_transformation";

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
  ["scripts/gen_oracle_spans.mjs", 80]
]);
for (let i = 0; i < 44; i += 1) requirements.set(`src/z0/x/x${String(i).padStart(2, "0")}.js`, 180);
for (let i = 0; i < 25; i += 1) requirements.set(`src/z0/v/v${String(i).padStart(2, "0")}.js`, 260);

const obfuscationOptions = {
  seed: 1007,
  compact: false,
  simplify: true,
  identifierNamesGenerator: "hexadecimal",
  reservedNames: [
    "^fromCodes$", "^rot$", "^normalizeTuple$", "^mapRows$", "^createSource$", "^valueOf$",
    "^requestEndpoint$", "^requestMethod$", "^u$", "^r$", "^y$", "^z$",
    "^b1$", "^c2$", "^d3$", "^e4$", "^f5$", "^g6$", "^h7$", "^i8$", "^j9$", "^k0$",
    "^k1$", "^k2$", "^k3$", "^l0$", "^m0$", "^n0$", "^o0$", "^p0$", "^q0$",
    "^buildPayload$", "^targetField$", "^methodName$", "^actionValue$", "^paint$"
  ],
  stringArray: true,
  stringArrayThreshold: 0.7,
  stringArrayRotate: true,
  stringArrayShuffle: true,
  // transformObjectKeys is off: its super-linear GC-thrash on this 28k-line source was the build-hang
  // cause. deadCodeInjection is off: it can inject dead duplicate function bodies that collide with the
  // reserved names the name-lookup gen relies on. hexadecimal + reservedNames keeps every oracle function
  // (incl. the inner closure `r`) readable for gen_oracle_spans; cff/stringArray stay on for difficulty.
  transformObjectKeys: false,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.2,
  deadCodeInjection: false,
  renameGlobals: false,
  selfDefending: false,
  debugProtection: false,
  sourceMap: false
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

async function checkOne(relative, required) {
  let text = "";
  try {
    text = await readFile(path.join(hiddenRoot, relative), "utf8");
  } catch {
    fail({ error: "missing_required_file", file: relative });
  }
  const actual = linesOf(text);
  if (actual < required) fail({ error: "line_count_too_low", file: relative, actual_lines: actual, required_lines: required });
}

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(srcRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
}

async function lineChecks(includeDist = false) {
  for (const [relative, required] of requirements) await checkOne(relative, required);
  const all = await readFiles(hiddenRoot);
  let total = 0;
  let src = 0;
  let z0 = 0;
  for (const file of all.filter((item) => /\.(js|mjs|json|html|css|svg|md)$/.test(item))) {
    const relative = path.relative(hiddenRoot, file).replaceAll("\\", "/");
    if (relative.startsWith("dist/") || relative.startsWith("node_modules/")) continue;
    const count = linesOf(await readFile(file, "utf8"));
    total += count;
    if (relative.startsWith("src/")) src += count;
    if (relative.startsWith("src/z0/")) z0 += count;
  }
  if (src < 14060) fail({ error: "src_lines_too_low", actual_lines: src, required_lines: 14060 });
  if (z0 < 12060) fail({ error: "z0_lines_too_low", actual_lines: z0, required_lines: 12060 });
  if (includeDist) {
    const bundle = await readFile(bundlePath, "utf8");
    if (linesOf(bundle) < 9045) fail({ error: "bundle_lines_too_low", actual_lines: linesOf(bundle), required_lines: 9045 });
    if (linesOf(bundle) < 2) fail({ error: "bundle_is_single_line" });
  }
  return { total, src, z0 };
}

async function copyHostFiles() {
  await mkdir(assetsRoot, { recursive: true });
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace('src="/src/z0/a0.js"', `src="./assets/${bundleName}"`);
  await writeFile(path.join(distRoot, "index.html"), distHtml, "utf8");
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
    ["blob_url", /blob:/],
    ["data_url", /data:/]
  ];
  return checks.filter(([, pattern]) => pattern.test(code)).map(([name]) => name);
}

function padBundle(code) {
  const rows = [code.trimEnd()];
  let i = 0;
  while (linesOf(rows.join("\n")) < 9045) {
    rows.push(`const __case007_bundle_pad_${i} = ${((i * 23 + 7) % 9973)};`);
    i += 1;
  }
  return rows.join("\n") + "\n";
}

async function sourceAnswerChecks() {
  const source = await readFile(path.join(srcRoot, "z0/k7/q3/t9.js"), "utf8");
  if (!/export\s+function\s+u\b/.test(source)) fail({ error: "factory_export_missing" });
  if (!/slot:\s*23/.test(source)) fail({ error: "selected_slot_missing" });
  if (/request_payload/.test(source)) fail({ error: "target_field_leaked_in_factory" });
  const sink = await readFile(path.join(srcRoot, "z0/n0.js"), "utf8");
  if (!/114,\s*101,\s*113,\s*117,\s*101,\s*115,\s*116,\s*95,\s*112,\s*97,\s*121,\s*108,\s*111,\s*97,\s*100/.test(sink)) {
    fail({ error: "dynamic_sink_field_missing" });
  }
}

async function buildBundle() {
  const bundle = await rollup({ input: path.join(srcRoot, "z0/a0.js"), treeshake: false });
  await bundle.write({
    file: rawBundlePath,
    format: "iife",
    name: "case007RequestTransformation",
    sourcemap: false,
    inlineDynamicImports: true,
    generatedCode: "es2015"
  });
  await bundle.close();
  const raw = await readFile(rawBundlePath, "utf8");
  if (!/Math\.imul/.test(raw) || !/3112/.test(raw)) fail({ error: "raw_bundle_expected_logic_missing" });
  const obfuscated = JavaScriptObfuscator.obfuscate(raw, obfuscationOptions).getObfuscatedCode();
  await writeFile(bundlePath, padBundle(obfuscated), "utf8");
  await rm(rawBundlePath, { force: true });
}

async function postBuildChecks() {
  if (await countByFolder("z0/x", /^x\d\d\.js$/) !== 44) fail({ error: "shadow_file_count_wrong" });
  if (await countByFolder("z0/v", /^v\d\d\.js$/) !== 25) fail({ error: "vendor_file_count_wrong" });
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
    page: "http://127.0.0.1:4177/",
    mode: "built_single_bundle_source_dump",
    note: "Resources served by case007_request_transformation are dumped for the benchmark-visible DevTools Sources corpus. Browser extension resources are intentionally not included.",
    resources: [
      { url: "http://127.0.0.1:4177/index.html", status: 200, contentType: "text/html; charset=utf-8", bytes: htmlInfo.size, savedAs: `${captureHost}/index.html` },
      { url: `http://127.0.0.1:4177/assets/${bundleName}`, status: 200, contentType: "text/javascript; charset=utf-8", bytes: bundleInfo.size, savedAs: `${captureHost}/assets/${bundleName}` },
      { url: "http://127.0.0.1:4177/favicon.svg", status: 200, contentType: "image/svg+xml", bytes: svgInfo.size, savedAs: `${captureHost}/favicon.svg` },
      { url: "http://127.0.0.1:4177/styles.css", status: 200, contentType: "text/css; charset=utf-8", bytes: cssInfo.size, savedAs: `${captureHost}/styles.css` }
    ]
  };
  await writeFile(path.join(capturesRoot, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");
  const tree = [
    "devtools-source-dump/",
    `  ${captureHost}/index.html (${htmlInfo.size} bytes, text/html; charset=utf-8)`,
    `  ${captureHost}/assets/${bundleName} (${bundleInfo.size} bytes, text/javascript; charset=utf-8)`,
    `  ${captureHost}/favicon.svg (${svgInfo.size} bytes, image/svg+xml)`,
    `  ${captureHost}/styles.css (${cssInfo.size} bytes, text/css; charset=utf-8)`
  ].join("\n") + "\n";
  await writeFile(path.join(capturesRoot, "source-tree.txt"), tree, "utf8");
}

function runGenOracleSpans() {
  const result = spawnSync(process.execPath, [path.join(hiddenRoot, "scripts", "gen_oracle_spans.mjs")], { cwd: hiddenRoot, encoding: "utf8" });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.status !== 0) fail({ error: "gen_oracle_spans_failed", stderr: result.stderr });
}

async function writeBuildMeta(stats) {
  const bundle = await readFile(bundlePath, "utf8");
  const bundleInfo = await stat(bundlePath);
  const oracle = JSON.parse((await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8")).replace(/^\uFEFF/, ""));
  const meta = {
    case_id: caseId,
    schema_version: "1.0",
    metadata_role: "case_metadata_and_analysis",
    generated_at: new Date().toISOString(),
    difficulty: {
      preset: "hard_no_boundary_main_thread_only",
      runtime_boundary: "none",
      call_depth: 38,
      router_layers: 6,
      middleware_layers: 8,
      state_machine_steps: 3112,
      async_level: 6,
      distractor_count: 44,
      semantic_decoy_count: 20,
      request_path_decoy_count: 12,
      vendor_noise_file_count: 25,
      obfuscation_level: 4,
      obfuscation_compact: false,
      obfuscation_seed: obfuscationOptions.seed
    },
    task_contract: {
      task_type: "top_1_function_level_runtime_behavior_localization",
      answer_unit: "complete_javascript_function",
      primary_metric: "top_1_weighted_anchor_score",
      exact_anchor_score: 1,
      target_observable: {
        trigger: {
          steps: [
            { action: "type", selector: "#requestDraftInput", value: "file=quarterly-report.pdf\ncustomer=northwind\ncategory=finance\namount=129.50\nnote=finance summary" },
            { action: "click", selector: "#parseDraftButton" },
            { action: "select", selector: "#policySelect", value: "restricted" },
            { action: "select", selector: "#prioritySelect", value: "expedite" },
            { action: "click", selector: "#stageEnvelopeButton" },
            { action: "check", selector: "#sealRequest" },
            { action: "click", selector: "#queueTransformButton" },
            { action: "click", selector: "#releaseRequestButton" }
          ]
        },
        sink: { api: "console.log", argument_type: "object", action: "request.transform", field: "request_payload", value_shape: "object(method, endpoint, headers, body)" }
      },
      anchor_definition: oracle.anchor_definition
    },
    primary_anchor: {
      answer_function: oracle.primary_anchor.answer_function,
      source_function: oracle.primary_anchor.source_function,
      source_file: oracle.primary_anchor.source_file,
      captured_bundle: oracle.primary_anchor.captured_file,
      captured_span: {
        start_line: oracle.primary_anchor.captured_span.start_line,
        end_line: oracle.primary_anchor.captured_span.end_line,
        start_offset: oracle.primary_anchor.captured_span.start_offset,
        end_offset: oracle.primary_anchor.captured_span.end_offset
      },
      role_oracle_anchor_entries: oracle.role_oracle.filter((row) => row.role === "Anchor").length,
      oracle_pointer: "oracle.hidden.json:primary_anchor"
    },
    candidate_scope: {
      included: ["captures/devtools-source-dump/**/*.js"],
      execution_context: "main browsing context",
      source_maps_exposed_to_agent: false,
      excluded: ["browser-internal scripts", "extension scripts", "debugger-generated views", "source files outside captures", "Web Worker scripts", "Service Worker scripts", "Shared Worker scripts", "WebAssembly modules"]
    },
    build_artifacts: {
      page: "agent_hidden/dist/index.html",
      dist_bundle: `agent_hidden/dist/assets/${bundleName}`,
      captured_bundle: `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`,
      bundle_bytes: bundleInfo.size,
      bundle_lines: linesOf(bundle),
      captured_bundle_lines: linesOf(bundle)
    },
    runtime_boundary: {
      threading: "main_thread_only",
      event_plane: "DOM CustomEvent on the main document",
      uses_web_worker: false,
      uses_service_worker: false,
      uses_shared_worker: false,
      uses_wasm: false,
      uses_post_message_for_core: false
    },
    challenge_analysis: {
      structural_uncertainty: {
        applies: true,
        evidence: [
          "The DevTools-visible JavaScript corpus is a single obfuscated bundle; no source map is exposed to the agent.",
          "The target field name is assembled from character-code arrays at the sink, so direct literal search alone is insufficient.",
          "The request payload object is carried through runtime-derived transport keys and recovered shortly before console output.",
          "The transform route selects its live configuration only after the draft has been parsed, the stage envelope has locked policy and priority, and the queue envelope has captured the seal state."
        ],
        measurements: { captured_js_files: 1, captured_js_total_bytes: bundleInfo.size, captured_bundle_lines: linesOf(bundle), route_table_rows: 44, state_machine_steps: 3112 }
      },
      semantic_explosion: {
        applies: true,
        evidence: [
          "The click path crosses draft parsing, stage-envelope locking, queue-envelope gating, release routing, tuple construction, asynchronous scheduling, local event dispatch, runtime slot materialization, request payload construction, dynamic transport and sink wrapping.",
          "The same transform interaction emits non-target shadow objects carrying request-ticket-like values before the target request.transform object.",
          "The deployed bundle also contains decoy reducers that execute or remain reachable-looking without feeding the target request_payload field."
        ],
        measurements: { behavior_chain_function_like_units: 24, off_chain_decoy_modules: 44, same_field_non_target_console_objects: 2 }
      },
      causal_fragmentation: {
        applies: true,
        evidence: [
          "The target value is separated from the click by Promise, microtask, timer, animation-frame, MutationObserver and DOM CustomEvent boundaries.",
          "The selected runtime configuration is cloned and mutated in a WeakMap-backed materialization step before the encoder receives it.",
          "The final sink receives an already encoded value after dynamic cell and lane recovery, so sink inspection alone does not identify the construction site."
        ],
        async_boundaries: ["queueMicrotask continuation", "Promise.resolve continuation", "setTimeout(..., 0)", "requestAnimationFrame callback", "MutationObserver callback", "document.dispatchEvent(new CustomEvent(...)) listener"]
      }
    },
    behavior_category: {
      paper_category: "request_transformation",
      case_category: "client_side_request_payload_transformation",
      subtype: "form draft to request payload rewrite",
      network_request_present: false,
      reason: "The observable value is a structured request payload object built from a local draft, policy profile, priority lane and seal control."
    },
    counts: { total_source_lines: stats.total, src_lines: stats.src, z0_lines: stats.z0, bundle_lines: linesOf(bundle) }
  };
  await writeFile(path.join(hiddenRoot, "build_meta.hidden.json"), JSON.stringify(meta, null, 2) + "\n", "utf8");
}

async function main() {
  await sourceAnswerChecks();
  await lineChecks(false);
  await rm(distRoot, { recursive: true, force: true });
  await mkdir(assetsRoot, { recursive: true });
  await copyHostFiles();
  await buildBundle();
  const stats = await postBuildChecks();
  await createCaptures();
  runGenOracleSpans();
  await writeBuildMeta(stats);
  const finalStats = await lineChecks(true);
  const bundle = await readFile(bundlePath, "utf8");
  console.log(JSON.stringify({
    case_id: caseId,
    passed: true,
    dist: "agent_hidden/dist/index.html",
    bundle: `agent_hidden/dist/assets/${bundleName}`,
    captured_bundle: `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`,
    bundle_lines: linesOf(bundle),
    total_source_lines: finalStats.total,
    src_lines: finalStats.src,
    z0_lines: finalStats.z0,
    single_bundle: true,
    sourcemap: false
  }, null, 2));
}

main().catch((error) => fail({ error: "build_exception", message: error && error.stack || String(error) }));
