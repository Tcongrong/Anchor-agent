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
const captureHost = "127.0.0.1_11751";
const captureHostRoot = path.join(capturesRoot, captureHost);
const captureAssetsRoot = path.join(captureHostRoot, "assets");
const appBundleName = "filter.app.bundle.js";
const coreChunkName = "filter.core.chunk.js";
const appBundlePath = path.join(assetsRoot, appBundleName);
const coreChunkPath = path.join(assetsRoot, coreChunkName);
const metaPath = path.join(hiddenRoot, "build_meta.hidden.json");
const oraclePath = path.join(hiddenRoot, "oracle.hidden.json");
const caseId = "case008_request_transformation";

// App bundle: light obfuscation (mangled identifiers) plus a 69-module distractor haystack padded
// to 9000+ lines. Core chunk: stronger obfuscation; renameGlobals:false keeps top-level oracle names.
const appObfuscationOptions = {
  seed: 8008,
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
  sourceMap: false
};

const coreObfuscationOptions = {
  seed: 8008,
  compact: true,
  simplify: true,
  identifierNamesGenerator: "hexadecimal",
  stringArray: true,
  stringArrayThreshold: 0.76,
  stringArrayEncoding: ["base64"],
  transformObjectKeys: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.25,
  deadCodeInjection: false,
  renameGlobals: false,
  selfDefending: false,
  debugProtection: false,
  sourceMap: false
};

function linesOf(text) {
  return text.trimEnd().split(/\r?\n/).length;
}

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(hiddenRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
}

async function assertHaystack() {
  const noiseCount = await countByFolder("src/filterCase/noise", /^n\d\d\.js$/);
  const vendorCount = await countByFolder("src/filterCase/vendor", /^v\d\d\.js$/);
  if (noiseCount !== 44) {
    throw new Error(`expected 44 noise modules, found ${noiseCount}; run scripts/gen_filter_distractors.mjs`);
  }
  if (vendorCount !== 25) {
    throw new Error(`expected 25 vendor modules, found ${vendorCount}; run scripts/gen_filter_distractors.mjs`);
  }
}

function stripBom(text) {
  return text.replace(/^﻿/, "");
}

async function copyHostFiles() {
  await rm(distRoot, { recursive: true, force: true });
  await mkdir(assetsRoot, { recursive: true });

  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace(
    '<script type="module" src="/src/filterCase/main.js"></script>',
    [
      '<script type="module" src="./assets/filter.app.bundle.js"></script>',
      '<script type="module" src="./assets/filter.core.chunk.js"></script>'
    ].join("\n    ")
  );

  await writeFile(path.join(distRoot, "index.html"), distHtml, "utf8");
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
}

async function buildBundles() {
  const bundle = await rollup({
    input: path.join(srcRoot, "filterCase", "main.js"),
    treeshake: {
      moduleSideEffects: true
    }
  });

  await bundle.write({
    dir: assetsRoot,
    format: "es",
    sourcemap: false,
    entryFileNames: appBundleName,
    chunkFileNames: coreChunkName
  });

  await bundle.close();

  for (const filePath of [appBundlePath, coreChunkPath]) {
    const code = await readFile(filePath, "utf8");
    const options = filePath === appBundlePath ? appObfuscationOptions : coreObfuscationOptions;
    let obfuscated = JavaScriptObfuscator.obfuscate(code, options).getObfuscatedCode();

    if (filePath === appBundlePath) {
      const bundlePad = [];
      let padIndex = 0;
      while (linesOf(`${obfuscated}\n${bundlePad.join("\n")}`) < 9200) {
        bundlePad.push(
          `class FilterPad${padIndex} { constructor(label = 'filter row ${padIndex}') { this.label = label; this.rows = []; } add(row) { this.rows.push({ label: this.label, row: String(row) }); return this; } snapshot() { return this.rows.map((item) => ({ ...item })); } }`
        );
        padIndex += 1;
      }
      obfuscated = `${obfuscated}\n${bundlePad.join("\n")}\n`;
    }

    await writeFile(filePath, obfuscated, "utf8");
  }
}

async function readFiles(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const resolved = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...await readFiles(resolved));
    } else {
      out.push(resolved);
    }
  }

  return out;
}

async function scanDist() {
  const files = await readFiles(distRoot);
  const names = files.map((file) => path.relative(distRoot, file).replaceAll("\\", "/"));
  const textFiles = files.filter((file) => /\.(html|css|js|svg)$/.test(file));
  const text = (await Promise.all(textFiles.map((file) => readFile(file, "utf8")))).join("\n");

  const disallowed = [
    /new\s+Worker/i,
    /\bWorker\s*\(/i,
    /new\s+SharedWorker/i,
    /SharedWorker/i,
    /serviceWorker\s*\./i,
    /importScripts\s*\(/i,
    /postMessage\s*\(/i,
    /BroadcastChannel/i,
    /MessageChannel/i,
    /worker\.bundle\.js/i,
    /\.worker\.js/i,
    /sourceMappingURL/i
  ];

  const hasBadName = names.some((name) => /\.map$/i.test(name) || /worker/i.test(name));
  const hasBadText = disallowed.some((pattern) => pattern.test(text));

  if (hasBadName || hasBadText) {
    throw new Error("case008_request_transformation dist scan failed.");
  }

  const appText = await readFile(appBundlePath, "utf8");
  if (linesOf(appText) < 9000) {
    throw new Error(`app bundle lines too low: ${linesOf(appText)} (required >= 9000)`);
  }

  return names;
}

// Sync the freshly built dist into the agent-visible captures snapshot and refresh the
// manifest + source-tree so the captured corpus always matches the current build.
async function createCaptures() {
  await rm(captureHostRoot, { recursive: true, force: true });
  await mkdir(captureAssetsRoot, { recursive: true });

  await copyFile(appBundlePath, path.join(captureAssetsRoot, appBundleName));
  await copyFile(coreChunkPath, path.join(captureAssetsRoot, coreChunkName));
  await copyFile(path.join(distRoot, "index.html"), path.join(captureHostRoot, "index.html"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(captureHostRoot, "favicon.svg"));
  await copyFile(path.join(hostRoot, "styles.css"), path.join(captureHostRoot, "styles.css"));

  const htmlInfo = await stat(path.join(captureHostRoot, "index.html"));
  const appInfo = await stat(path.join(captureAssetsRoot, appBundleName));
  const coreInfo = await stat(path.join(captureAssetsRoot, coreChunkName));
  const svgInfo = await stat(path.join(captureHostRoot, "favicon.svg"));
  const cssInfo = await stat(path.join(captureHostRoot, "styles.css"));

  const manifest = {
    captured_at: new Date().toISOString(),
    case_id: caseId,
    page: "http://127.0.0.1:11751/",
    mode: "initial_page_load_with_explicit_module_scripts",
    note: "Resources served by case008_request_transformation during initial page load are dumped. The same-thread request transformation core chunk is loaded as a side-effect-free ES module script so it appears in Chrome DevTools Sources without executing the request path. Browser extension resources are intentionally not included.",
    resources: [
      { url: "http://127.0.0.1:11751/", status: 200, contentType: "text/html; charset=utf-8", bytes: htmlInfo.size, savedAs: `${captureHost}/index.html` },
      { url: `http://127.0.0.1:11751/assets/${appBundleName}`, status: 200, contentType: "text/javascript; charset=utf-8", bytes: appInfo.size, savedAs: `${captureHost}/assets/${appBundleName}` },
      { url: `http://127.0.0.1:11751/assets/${coreChunkName}`, status: 200, contentType: "text/javascript; charset=utf-8", bytes: coreInfo.size, savedAs: `${captureHost}/assets/${coreChunkName}` },
      { url: "http://127.0.0.1:11751/favicon.svg", status: 200, contentType: "image/svg+xml", bytes: svgInfo.size, savedAs: `${captureHost}/favicon.svg` },
      { url: "http://127.0.0.1:11751/styles.css", status: 200, contentType: "text/css; charset=utf-8", bytes: cssInfo.size, savedAs: `${captureHost}/styles.css` }
    ]
  };
  await writeFile(path.join(capturesRoot, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");

  const sourceTree = [
    "devtools-source-dump/",
    `  ${captureHost}/index.html (${htmlInfo.size} bytes, text/html; charset=utf-8)`,
    `  ${captureHost}/assets/${appBundleName} (${appInfo.size} bytes, text/javascript; charset=utf-8)`,
    `  ${captureHost}/assets/${coreChunkName} (${coreInfo.size} bytes, text/javascript; charset=utf-8)`,
    `  ${captureHost}/favicon.svg (${svgInfo.size} bytes, image/svg+xml)`,
    `  ${captureHost}/styles.css (${cssInfo.size} bytes, text/css; charset=utf-8)`
  ].join("\n") + "\n";
  await writeFile(path.join(capturesRoot, "source-tree.txt"), sourceTree, "utf8");
}

function runGenOracleSpans() {
  const result = spawnSync(process.execPath, [path.join(hiddenRoot, "scripts", "gen_oracle_spans.mjs")], {
    cwd: hiddenRoot,
    encoding: "utf8"
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.status !== 0) {
    if (result.stderr) process.stderr.write(result.stderr);
    throw new Error("gen_oracle_spans.mjs failed");
  }
}

async function writeBuildMeta(files) {
  const appInfo = await stat(appBundlePath);
  const coreInfo = await stat(coreChunkPath);
  const appBundleText = await readFile(appBundlePath, "utf8");
  const appBundleLines = linesOf(appBundleText);
  const oracle = JSON.parse(stripBom(await readFile(oraclePath, "utf8")));
  const anchor = oracle.primary_anchor;
  const meta = {
    case_id: caseId,
    schema_version: "1.0",
    metadata_role: "case_metadata_and_analysis",
    difficulty: {
      preset: "hard_no_worker_main_thread_only",
      runtime_boundary: "none",
      call_depth: 14,
      router_layers: 4,
      middleware_layers: 5,
      cross_file: true,
      async_level: 4,
      dynamic_dispatch: true,
      resolver_registry: true,
      lazy_core_chunk: true,
      bundle_mode: "app_plus_lazy_chunk",
      obfuscation_level: 4,
      obfuscation_note: "App bundle uses mangled-identifier obfuscation plus a 69-module filter distractor haystack (44 noise + 25 vendor) padded to 9000+ lines; the lazy core anchor is resolved through a default-export slot table so the anchor identifier does not appear in the app bundle. Core chunk uses control-flow flattening and string-array obfuscation with renameGlobals:false so top-level oracle names (including composeReceivablesSearchBody) stay readable for grader/agent submission in the core chunk only. The target field and action are assembled from character-code arrays at the sink, so literal keyword search is insufficient.",
      distractor_count: oracle.role_oracle.length - 1,
      semantic_decoy_count: oracle.role_oracle.filter((r) => r.role === "Off-chain").length,
      submit_path_decoy_count: oracle.role_oracle.filter((r) => ["Path-critical", "Path-generic-helper", "Path/Wrapper", "Wrapper"].includes(r.role)).length,
      vendor_noise_file_count: 25,
      vendor_noise_level: "very_high",
      distractor_haystack_modules: 69,
      distractor_haystack_scoring: "bulk_inert_corpus_only_not_individual_role_oracle_entries",
      obfuscation_compact: false
    },
    task_contract: {
      task_type: "top_1_function_level_runtime_behavior_localization",
      answer_unit: "complete_javascript_function",
      primary_metric: "top_1_weighted_anchor_score",
      exact_anchor_score: 1,
      target_observable: {
        trigger: {
          steps: [
            { action: "select", selector: "#requestProfile", value: "audit" },
            { action: "select", selector: "#statusFilter", value: "open" },
            { action: "select", selector: "#regionFilter", value: "west" },
            { action: "fill", selector: "#minAmount", value: "500" },
            { action: "fill", selector: "#ownerInput", value: "maria" },
            { action: "check", selector: "#agedOnly" },
            { action: "click", selector: "#stageRequest" },
            { action: "click", selector: "[data-action='table.page.next']" },
            { action: "click", selector: "[data-action='table.columns.save']" },
            { action: "click", selector: "#prepareRequest" }
          ]
        },
        sink: {
          api: "console.log",
          argument_type: "object",
          action: "table.filter.request",
          field: "request_payload",
          value_shape: "POST request descriptor with endpoint, staged profile, region and aged filters, projection, runtime page/layout state, sort and matched row scope"
        }
      },
      anchor_definition: oracle.anchor_definition
    },
    candidate_scope: {
      included: ["captures/devtools-source-dump/**/*.js"],
      execution_context: "main browsing context",
      source_maps_exposed_to_agent: false,
      excluded: [
        "browser-internal scripts",
        "extension scripts",
        "debugger-generated views",
        "source files outside captures",
        "Web Worker scripts",
        "Service Worker scripts",
        "Shared Worker scripts",
        "WebAssembly modules"
      ]
    },
    build_artifacts: {
      page: "dist/index.html",
      app_bundle: `dist/assets/${appBundleName}`,
      core_chunk: `dist/assets/${coreChunkName}`,
      captured_app_bundle: `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${appBundleName}`,
      captured_core_chunk: `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${coreChunkName}`,
      capture_manifest: "agent_visible/captures/devtools-source-dump/manifest.json",
      files,
      app_bundle_bytes: appInfo.size,
      core_chunk_bytes: coreInfo.size,
      app_bundle_lines: appBundleLines
    },
    primary_anchor: {
      answer_function: anchor.answer_function || anchor.function,
      source_function: anchor.source_function || anchor.function,
      source_file: anchor.source_file,
      source_bundle_name_aligned: anchor.source_bundle_name_aligned ?? true,
      captured_bundle: anchor.captured_file,
      captured_span: {
        start_line: anchor.captured_span.start_line,
        end_line: anchor.captured_span.end_line,
        start_offset: anchor.captured_span.start_offset,
        end_offset: anchor.captured_span.end_offset
      },
      role_oracle_anchor_entries: oracle.role_oracle.filter((r) => r.role === "Anchor").length,
      oracle_pointer: "oracle.hidden.json:primary_anchor"
    },
    runtime_boundary: {
      threading: "main_thread_only",
      event_plane: "document click delegation, staging CustomEvent, hydration CustomEvent and local async queue",
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
          "The DevTools-visible corpus is split across a large obfuscated app bundle haystack and an obfuscated lazy core chunk with no source map.",
          "The target field name and action are assembled from character-code arrays at the sink, so direct literal search is insufficient.",
          "The target field name is loaded through a resolver registry and the payload constructor lives in the lazy core chunk.",
          "The target interaction requires a staging click, an intervening page/layout mutation and a final prepare click, so the target request transformation is not exposed by a single button.",
          "The UI still performs table filtering, badge rendering and decoy actions, so the request transformation is mixed with table state behavior."
        ],
        measurements: {
          captured_js_files: 2,
          captured_js_total_bytes: appInfo.size + coreInfo.size,
          captured_app_bundle_lines: appBundleLines,
          route_table_rows: 8,
          bundle_mode: "app_plus_lazy_chunk",
          shadow_file_count: 44,
          vendor_noise_file_count: 25
        }
      },
      semantic_explosion: {
        applies: true,
        evidence: [
          "The path crosses delegated event handling, action routing, form collection, normalization, visual filtering, stage ticket creation, CustomEvent notification, page/layout mutation, stage reconciliation, hydration, async queueing, resolver dispatch, lazy payload construction and console wrapping.",
          "Several table actions produce export, pagination, column, badge and saved-view artifacts that resemble request-adjacent behavior but never feed the requested request_payload field.",
          "The upstream ledger contains table state and row summaries; only the core constructor rewrites that material into the request descriptor."
        ],
        measurements: {
          behavior_chain_function_like_units: oracle.role_oracle.filter((r) => r.role !== "Off-chain").length,
          off_chain_decoy_modules: oracle.role_oracle.filter((r) => r.role === "Off-chain").length,
          same_field_non_target_console_objects: 0
        }
      },
      causal_fragmentation: {
        applies: true,
        evidence: [
          "The target request payload is separated from the visible controls by two user actions and by CustomEvent, MutationObserver, queueMicrotask, Promise, requestAnimationFrame and setTimeout boundaries.",
          "The final sink receives an already constructed request descriptor, so console wrapping alone does not identify the value construction site.",
          "The target constructor lives in a lazy chunk that is also loaded as a DevTools-visible script during page load."
        ],
        async_boundaries: [
          "request-stage:ready CustomEvent",
          "request-envelope:hydrate CustomEvent",
          "MutationObserver attribute observation",
          "queueMicrotask continuation",
          "Promise.resolve continuation",
          "requestAnimationFrame callback",
          "setTimeout(..., 0)"
        ]
      }
    },
    behavior_category: {
      paper_category: "request_transformation",
      case_category: "client_side_request_payload_construction",
      subtype: "staged table filter form to receivables request payload",
      network_request_present: false,
      reason: "The target observable is a client-side request descriptor derived from form controls, request profile, region/aged filters, staged row scope and runtime page/layout state. It is not a proof token, browser fingerprint, state code or byte-array transform.",
      near_categories: [
        {
          category: "request_signature_token_derivation",
          why_not: "The staged ticket is only descriptor metadata, not the requested observable, and does not by itself represent the request body construction."
        },
        {
          category: "state_encoding",
          why_not: "The target is an action request payload object rather than a compact UI state code."
        },
        {
          category: "byte_array_transformation",
          why_not: "The output is a structured request descriptor, not a byte buffer or binary payload."
        }
      ]
    },
    metadata_partitioning_notes: {
      answer_bearing_material: "stored only in oracle.hidden.json",
      private_oracle_location: "agent_hidden/oracle.hidden.json",
      benchmark_summary_location: "benchmark.summary.json or an equivalent corpus-level artifact",
      reason: "This file describes the task contract, candidate scope and difficulty analysis without exposing the primary anchor role oracle coordinates beyond the maintainer anchor mirror."
    },
    fairness_constraints: {
      no_web_worker: true,
      no_post_message: true,
      no_randomness: true,
      no_remote_code_loading: true,
      no_anti_debug: true,
      no_environment_detection: true,
      stable_output: true
    }
  };

  await writeFile(metaPath, `${JSON.stringify(meta, null, 2)}\n`, "utf8");
}

await assertHaystack();
await copyHostFiles();
await buildBundles();
const files = await scanDist();
await createCaptures();
runGenOracleSpans();
await writeBuildMeta(files);

console.log(JSON.stringify({
  case_id: caseId,
  built: true,
  dist: path.relative(process.cwd(), distRoot),
  app_bundle: path.relative(process.cwd(), appBundlePath),
  core_chunk: path.relative(process.cwd(), coreChunkPath),
  app_bundle_bytes: (await stat(appBundlePath)).size,
  core_chunk_bytes: (await stat(coreChunkPath)).size,
  app_bundle_lines: linesOf(await readFile(appBundlePath, "utf8"))
}));
