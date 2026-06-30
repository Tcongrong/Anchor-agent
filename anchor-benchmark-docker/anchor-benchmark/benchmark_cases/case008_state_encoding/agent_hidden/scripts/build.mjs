import { copyFile, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { rollup } from "rollup";
import JavaScriptObfuscator from "javascript-obfuscator";

// Light obfuscation profile (mangled identifiers only): matches case006_state_encoding so the bundle
// becomes a large obfuscated haystack while staying fast to build (no cff/stringArray/dci).
const obfuscationOptions = {
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
  sourceMap: false,
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiddenRoot = path.resolve(__dirname, "..");
const caseRoot = path.resolve(hiddenRoot, "..");
const visibleRoot = path.join(caseRoot, "agent_visible");
const srcRoot = path.join(hiddenRoot, "src");
const hostRoot = path.join(srcRoot, "host");
const distRoot = path.join(hiddenRoot, "dist");
const assetsRoot = path.join(distRoot, "assets");
const bundleName = "prefs.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const capturesRoot = path.join(visibleRoot, "captures", "devtools-source-dump");
const captureHost = "127.0.0.1_4218";
const captureHostRoot = path.join(capturesRoot, captureHost);
const captureAssetsRoot = path.join(captureHostRoot, "assets");
const metaPath = path.join(hiddenRoot, "build_meta.hidden.json");
const caseId = "case008_state_encoding";

const requiredFiles = [
  "src/host/index.html",
  "src/host/styles.css",
  "src/host/favicon.svg",
  "src/prefsCase/main.js",
  "src/prefsCase/prefsDistractors.js",
  "src/prefsCase/codecCore/workspaceStateCodec.js",
  "src/prefsCase/codecCore/contrastStateCodec.js",
  "src/prefsCase/codecCore/bitMixHelpers.js",
  "src/prefsCase/pipeline/runSavePreferencesPipeline.js",
  "src/prefsCase/registry/preferenceCodecRegistry.js",
  "src/prefsCase/sink/publishPreferenceState.js",
  "build_meta.hidden.json",
  "oracle.hidden.json",
];

function linesOf(text) {
  return text.split(/\r?\n/).length;
}

function countFunctionDeclarations(text) {
  const matches = text.match(/(?:async\s+)?function\s+[\w$]+\s*\(/g);
  return matches ? matches.length : 0;
}

async function assertRequiredFiles() {
  for (const relative of requiredFiles) {
    await stat(path.join(hiddenRoot, relative));
  }
}

async function copyHostFiles() {
  await rm(distRoot, { recursive: true, force: true });
  await mkdir(assetsRoot, { recursive: true });

  const html = await readFile(path.join(hostRoot, "index.html"), "utf8");
  const distHtml = html.replace(
    '<script type="module" src="/src/prefsCase/main.js"></script>',
    `<script type="module" src="./assets/${bundleName}"></script>`
  );

  await writeFile(path.join(distRoot, "index.html"), distHtml, "utf8");
  await copyFile(path.join(hostRoot, "styles.css"), path.join(distRoot, "styles.css"));
  await copyFile(path.join(hostRoot, "favicon.svg"), path.join(distRoot, "favicon.svg"));
}

async function buildBundle() {
  const bundle = await rollup({
    input: path.join(srcRoot, "prefsCase", "main.js"),
    treeshake: {
      moduleSideEffects: true,
    },
  });

  await bundle.write({
    file: bundlePath,
    format: "es",
    sourcemap: false,
    inlineDynamicImports: true,
  });

  await bundle.close();

  const code = await readFile(bundlePath, "utf8");
  let obfuscated = JavaScriptObfuscator.obfuscate(code, obfuscationOptions).getObfuscatedCode();
  const bundlePad = [];
  let padIndex = 0;
  while (linesOf(`${obfuscated}\n${bundlePad.join("\n")}`) < 9200) {
    bundlePad.push(
      `class PrefsPad${padIndex} { constructor(label = 'prefs row ${padIndex}') { this.label = label; this.rows = []; } add(row) { this.rows.push({ label: this.label, row: String(row) }); return this; } snapshot() { return this.rows.map((item) => ({ ...item })); } }`,
    );
    padIndex += 1;
  }
  obfuscated = `${obfuscated}\n${bundlePad.join("\n")}\n`;
  await writeFile(bundlePath, obfuscated, "utf8");
}

async function readFilesRecursive(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const resolved = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await readFilesRecursive(resolved));
    else out.push(resolved);
  }
  return out;
}

async function scanDist() {
  const files = await readFilesRecursive(distRoot);
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
    /javascript-obfuscator/i,
    /sourceMappingURL/i,
    /<iframe/i,
    /eval\s*\(/i,
    /new\s+Function/i,
    /WebAssembly/i,
    /blob:/i,
    /data:text\/javascript/i,
  ];

  const hasBadName = names.some((name) => /\.map$/i.test(name) || /worker/i.test(name) || /prefs\.core\.chunk\.js/i.test(name));
  const hasBadText = disallowed.some((pattern) => pattern.test(text));
  const bundleText = await readFile(bundlePath, "utf8");

  if (hasBadName || hasBadText || linesOf(bundleText) < 9000) {
    throw new Error("case008_state_encoding dist scan failed.");
  }
  return names;
}

async function createCaptures() {
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
    page: "http://127.0.0.1:4218/",
    mode: "initial_page_load_only",
    note: "Only resources served by case008_state_encoding during initial page load are dumped. Browser extension resources are intentionally not included.",
    resources: [
      { contentType: "text/html; charset=utf-8", status: 200, url: "http://127.0.0.1:4218/", savedAs: `${captureHost}/index.html`, bytes: htmlInfo.size },
      { contentType: "text/javascript; charset=utf-8", status: 200, url: `http://127.0.0.1:4218/assets/${bundleName}`, savedAs: `${captureHost}/assets/${bundleName}`, bytes: bundleInfo.size },
      { contentType: "image/svg+xml", status: 200, url: "http://127.0.0.1:4218/favicon.svg", savedAs: `${captureHost}/favicon.svg`, bytes: svgInfo.size },
      { contentType: "text/css; charset=utf-8", status: 200, url: "http://127.0.0.1:4218/styles.css", savedAs: `${captureHost}/styles.css`, bytes: cssInfo.size },
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

function runGenOracleSpans() {
  const result = spawnSync(process.execPath, [path.join(hiddenRoot, "scripts", "gen_oracle_spans.mjs")], {
    cwd: hiddenRoot,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    console.error(result.stdout || "");
    console.error(result.stderr || "");
    throw new Error("gen_oracle_spans.mjs failed.");
  }
  return result.stdout;
}

async function writeBuildMeta(files) {
  const bundleInfo = await stat(bundlePath);
  const bundleText = await readFile(bundlePath, "utf8");
  const bundleLines = linesOf(bundleText);

  const meta = JSON.parse(await readFile(metaPath, "utf8"));
  meta.build_artifacts = {
    page: "dist/index.html",
    dist_bundle: `dist/assets/${bundleName}`,
    captured_bundle: `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`,
    capture_manifest: "agent_visible/captures/devtools-source-dump/manifest.json",
    bundle_bytes: bundleInfo.size,
    bundle_lines: bundleLines,
  };
  if (meta.challenge_analysis?.structural_uncertainty?.measurements) {
    meta.challenge_analysis.structural_uncertainty.measurements.captured_js_total_bytes = bundleInfo.size;
    meta.challenge_analysis.structural_uncertainty.measurements.captured_bundle_lines = bundleLines;
    meta.challenge_analysis.structural_uncertainty.measurements.bundle_function_declarations = countFunctionDeclarations(bundleText);
  }
  if (meta.dist) {
    meta.dist.files = files;
    meta.dist.app_bundle_bytes = bundleInfo.size;
  }

  const oracle = JSON.parse(await readFile(path.join(hiddenRoot, "oracle.hidden.json"), "utf8"));
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

  await writeFile(metaPath, `${JSON.stringify(meta, null, 2)}\n`, "utf8");
}

await assertRequiredFiles();
await copyHostFiles();
await buildBundle();
const files = await scanDist();
await createCaptures();
const genOut = runGenOracleSpans();
await writeBuildMeta(files);

const bundleInfo = await stat(bundlePath);
console.log(JSON.stringify({
  case_id: caseId,
  built: true,
  dist: path.relative(process.cwd(), distRoot),
  bundle: path.relative(process.cwd(), bundlePath),
  bundle_bytes: bundleInfo.size,
  bundle_lines: linesOf(await readFile(bundlePath, "utf8")),
  captures: path.relative(process.cwd(), capturesRoot),
  gen_oracle_spans: JSON.parse(genOut.trim().split("\n").pop()),
}, null, 2));
