import { copyFile, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
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
const bundlePath = path.join(assetsRoot, "note.app.bundle.js");
const captureHost = "127.0.0.1_4173";
const captureRoot = path.join(visibleRoot, "captures", "devtools-source-dump");
const capturePageRoot = path.join(captureRoot, captureHost);
const captureAssetsRoot = path.join(capturePageRoot, "assets");
const caseId = "case003_byte_array_transformation";

const obfuscationOptions = {
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
  renameGlobals: false,
  seed: 3003
};

function linesOf(text) {
  return text.split(/\r?\n/).length;
}

function relFromHidden(file) {
  return path.relative(hiddenRoot, file).replaceAll("\\", "/");
}

function fail(error) {
  console.error(JSON.stringify({ case_id: caseId, passed: false, ...error }, null, 2));
  process.exit(1);
}

async function readFiles(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
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

async function sourceLineSummary() {
  const files = (await readFiles(srcRoot)).filter((file) => /\.(js|html|css|svg)$/.test(file));
  let src = 0;
  let z0 = 0;
  for (const file of files) {
    const count = linesOf(await readFile(file, "utf8"));
    src += count;
    if (relFromHidden(file).startsWith("src/z0/")) z0 += count;
  }
  if (src < 14050) fail({ error: "src_lines_too_low", actual_lines: src, required_lines: 14050 });
  if (z0 < 12050) fail({ error: "z0_lines_too_low", actual_lines: z0, required_lines: 12050 });
  return { src_lines: src, z0_lines: z0, file_count: files.length };
}

async function copyHostFiles() {
  await rm(distRoot, { recursive: true, force: true });
  await mkdir(assetsRoot, { recursive: true });
  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace(
    '<script type="module" src="/src/z0/a0.js"></script>',
    '<script type="module" src="./assets/note.app.bundle.js"></script>',
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
  await writeFile(bundlePath, obfuscated + "\n", "utf8");
}

async function scanDist() {
  const files = await readFiles(distRoot);
  const names = files.map((file) => path.relative(distRoot, file).replaceAll("\\", "/"));
  const textFiles = files.filter((file) => /\.(html|css|js|svg)$/.test(file));
  const text = (await Promise.all(textFiles.map((file) => readFile(file, "utf8")))).join("\n");
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
  if (names.some((name) => /\.map$/i.test(name) || /worker/i.test(name))) {
    fail({ error: "forbidden_dist_file", files: names });
  }
  const hit = bad.find((pattern) => pattern.test(text));
  if (hit) fail({ error: "forbidden_dist_text", pattern: String(hit) });
  return names;
}

async function syncCaptures() {
  await rm(captureRoot, { recursive: true, force: true });
  await mkdir(captureAssetsRoot, { recursive: true });
  await copyFile(path.join(distRoot, "index.html"), path.join(capturePageRoot, "index.html"));
  await copyFile(path.join(distRoot, "styles.css"), path.join(capturePageRoot, "styles.css"));
  await copyFile(path.join(distRoot, "favicon.svg"), path.join(capturePageRoot, "favicon.svg"));
  await copyFile(bundlePath, path.join(captureAssetsRoot, "note.app.bundle.js"));

  const resources = [
    ["text/html; charset=utf-8", "", "index.html"],
    ["text/javascript; charset=utf-8", "assets/", "note.app.bundle.js"],
    ["image/svg+xml", "", "favicon.svg"],
    ["text/css; charset=utf-8", "", "styles.css"]
  ];
  const manifestResources = [];
  const treeLines = ["devtools-source-dump/"];
  for (const [contentType, subdir, name] of resources) {
    const savedAs = `${captureHost}/${subdir}${name}`;
    const file = path.join(captureRoot, savedAs);
    const info = await stat(file);
    manifestResources.push({
      contentType,
      status: 200,
      url: `http://127.0.0.1:4173/${subdir}${name === "index.html" ? "" : name}`,
      savedAs,
      bytes: info.size
    });
    treeLines.push(`  ${savedAs} (${info.size} bytes, ${contentType})`);
  }
  await writeFile(
    path.join(captureRoot, "manifest.json"),
    JSON.stringify(
      {
        captured_at: new Date().toISOString(),
        case_id: caseId,
        page: "http://127.0.0.1:4173/",
        mode: "build_synchronized_local_source_dump",
        note: "Only resources served by case003_byte_array_transformation during page load are represented.",
        resources: manifestResources
      },
      null,
      2,
    ) + "\n",
    "utf8",
  );
  await writeFile(path.join(captureRoot, "source-tree.txt"), treeLines.join("\n") + "\n", "utf8");
}

async function writeBuildMeta(summary, files) {
  const sourceFiles = (await readFiles(srcRoot)).map((file) => relFromHidden(file)).sort();
  const distFiles = (await readFiles(distRoot)).map((file) => relFromHidden(file)).sort();
  const bundleText = await readFile(bundlePath, "utf8");
  const bundleInfo = await stat(bundlePath);
  const meta = {
    case_id: caseId,
    schema_version: "1.1",
    metadata_role: "case_metadata_and_analysis",
    task_contract: {
      task_type: "top_1_function_level_runtime_behavior_localization",
      answer_unit: "complete_javascript_function",
      primary_metric: "top_1_weighted_anchor_score",
      exact_anchor_score: 1,
      target_observable: {
        trigger: {
          steps: [
            { action: "click", selector: "input[name=\"streamFormat\"][value=\"binary\"]" },
            { action: "click", selector: "input[name=\"streamMode\"][value=\"encoded\"]" },
            { action: "fill", selector: "#streamData", value: "deadbeef01020304" },
            { action: "click", selector: "#runQueryButton" }
          ]
        },
        sink: {
          api: "console.log + fetch",
          argument_type: "object",
          action: "stream.push",
          field: "byte_payload",
          value_pattern: "^bx_[0-9a-f]+:[0-9a-f]{2}$",
          fetch_header: "X-Byte-Pack",
          fetch_url: "/api/stream/push"
        }
      },
      anchor_definition:
        "The anchor is the first target-specific byte payload value-construction function on the dynamic behavior chain: after form routing and input preparation, its own body constructs the bx_<hex>:<check> value rather than merely collecting inputs, dispatching control, wrapping a return value, or emitting the sink."
    },
    candidate_scope: {
      included: ["captures/devtools-source-dump/**/*.js"],
      execution_context: "main browsing context",
      source_maps_exposed_to_agent: false,
      excluded: ["source files outside captures", "worker scripts", "browser internals"]
    },
    difficulty: {
      preset: "hard_no_worker_main_thread_only",
      runtime_boundary: "none",
      call_depth: 38,
      router_layers: 6,
      middleware_layers: 8,
      state_machine_steps: 3104,
      async_level: 3,
      distractor_count: 44,
      semantic_decoy_count: 26,
      submit_path_decoy_count: 12,
      vendor_noise_level: "very_high",
      obfuscation_level: 4,
      obfuscation_compact: false
    },
    build_artifacts: {
      page: "agent_visible/captures/devtools-source-dump/127.0.0.1_4173/index.html",
      dist_bundle: "agent_hidden/dist/assets/note.app.bundle.js",
      captured_bundle: "captures/devtools-source-dump/127.0.0.1_4173/assets/note.app.bundle.js",
      capture_manifest: "captures/devtools-source-dump/manifest.json",
      bundle_bytes: bundleInfo.size,
      bundle_lines: linesOf(bundleText),
      captured_bundle_lines: linesOf(bundleText)
    },
    runtime_boundary: {
      threading: "main_thread_only",
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
          "The visible JavaScript corpus is one obfuscated bundle and no source map is exposed.",
          "The target value is carried through async relay, middleware compose, state-machine transit, and a slot-selected transformer before console output and fetch header assignment.",
          "The transformer table exposes inactive closures and decoy modules, so the target slot must be distinguished from similar-looking paths."
        ],
        measurements: {
          captured_js_files: 1,
          captured_bundle_lines: linesOf(bundleText),
          route_table_rows: 44,
          transformer_slots: 32,
          active_slot: 17,
          state_machine_steps: 3104
        }
      },
      semantic_explosion: {
        applies: true,
        evidence: [
          "The path crosses click handling, tuple construction, async relay, middleware compose, state-machine trampoline, transformer selection, byte_payload construction, fetch header assignment, and sink wrapping.",
          "The deployed bundle contains 44 structural x-module decoys and 25 vendor-noise v-modules that do not feed the target byte_payload field."
        ],
        measurements: { behavior_chain_function_like_units: 20, off_chain_decoy_modules: 44, inactive_transformer_slots: 31 }
      },
      construct_validity_note:
        "Because answer_function must be visible in captures, the intended difficulty is semantic disambiguation among visible functions and decoys, not hiding every identifier."
    },
    behavior_category: {
      paper_category: "byte_array_transformation",
      case_category: "fetch_request_header_field_assignment",
      subtype: "button-click-time byte-stream field transformation value written to request header",
      network_request_present: true,
      reason:
        "The observable value is a deterministic byte-array transformation of local form state and state-machine transit, written to the X-Byte-Pack header and console object."
    },
    source_files: sourceFiles,
    dist_files: distFiles,
    line_count_summary: summary,
    decoy_file_count: await countByFolder("src/z0/x", /^x\d\d\.js$/),
    vendor_file_count: await countByFolder("src/z0/v", /^v\d\d\.js$/),
    core_file_line_count: linesOf(await readFile(path.join(srcRoot, "z0/k7/q3/t9.js"), "utf8")),
    obfuscation_config: obfuscationOptions,
    forbidden_token_scan_result: { passed: true, files },
    sourcemap_scan_result: { passed: true, exposed: false },
    hidden_oracle_digest: "case003_byte_array_transformation:src-z0-k7-q3-t9:buildTransform:slot-17",
    hidden_core_source_file: "src/z0/k7/q3/t9.js",
    hidden_core_export_name: "u",
    hidden_core_slot: 17
  };
  await writeFile(path.join(hiddenRoot, "build_meta.hidden.json"), JSON.stringify(meta, null, 2) + "\n", "utf8");
}

function runNode(script) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [script], { cwd: hiddenRoot, stdio: "inherit" });
    child.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`${script} exited ${code}`))));
    child.on("error", reject);
  });
}

const pre = await sourceLineSummary();
const decoyCount = await countByFolder("src/z0/x", /^x\d\d\.js$/);
const vendorCount = await countByFolder("src/z0/v", /^v\d\d\.js$/);
if (decoyCount !== 44) fail({ error: "decoy_file_count_wrong", actual: decoyCount, required: 44 });
if (vendorCount !== 25) fail({ error: "vendor_file_count_wrong", actual: vendorCount, required: 25 });
await copyHostFiles();
await buildBundle();
const files = await scanDist();
await syncCaptures();
const post = await sourceLineSummary();
await writeBuildMeta({ pre, post }, files);
await runNode(path.join(__dirname, "gen_oracle_spans.mjs"));
console.log(JSON.stringify({ case_id: caseId, passed: true, bundle: "dist/assets/note.app.bundle.js" }, null, 2));
