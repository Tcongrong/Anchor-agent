import { copyFile, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { rollup } from "rollup";
import JavaScriptObfuscator from "javascript-obfuscator";

// Light obfuscation profile (identifier mangling only): keeps module-level function names while
// renaming locals/closures, and stays acorn-parseable so gen_oracle_spans can resolve spans.
// A fixed seed makes the bundle byte-deterministic across builds.
const obfuscationOptions = {
  seed: 1010,
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
const capturesRoot = path.join(visibleRoot, "captures", "devtools-source-dump");
const captureHost = "127.0.0.1_4211";
const captureHostRoot = path.join(capturesRoot, captureHost);
const captureAssetsRoot = path.join(captureHostRoot, "assets");
const bundleName = "media.app.bundle.js";
const bundlePath = path.join(assetsRoot, bundleName);
const metaPath = path.join(hiddenRoot, "build_meta.hidden.json");
const caseId = "case010_state_encoding";

const requiredFiles = [
  "src/host/index.html",
  "src/host/styles.css",
  "src/host/favicon.svg",
  "src/z0/a0.js",
  "src/z0/b1.js",
  "src/z0/c2.js",
  "src/z0/d3.js",
  "src/z0/e4.js",
  "src/z0/f5.js",
  "src/z0/g6.js",
  "src/z0/h7.js",
  "src/z0/i8.js",
  "src/z0/j9.js",
  "src/z0/k0.js",
  "src/z0/k1.js",
  "src/z0/k2.js",
  "src/z0/l0.js",
  "src/z0/m0.js",
  "src/z0/n0.js",
  "src/z0/o0.js",
  "src/z0/p0.js",
  "src/z0/q0.js",
  "src/z0/r0.js",
  "src/z0/s0.js",
  "src/z0/k7/q3/t9.js",
  "build_meta.hidden.json",
  "oracle.hidden.json",
];

function linesOf(text) {
  return text.split(/\r?\n/).length;
}

async function assertRequiredFiles() {
  for (const relative of requiredFiles) {
    await stat(path.join(hiddenRoot, relative));
  }
}

async function countByFolder(folder, pattern) {
  const entries = await readdir(path.join(srcRoot, folder));
  return entries.filter((name) => pattern.test(name)).length;
}

// Maintainer-private answer-bearing source must stay intact and unleaked.
async function sourceAnswerChecks() {
  const anchorSrc = await readFile(path.join(srcRoot, "z0/k7/q3/t9.js"), "utf8");
  if (!/export\s+function\s+makeReducer\b/.test(anchorSrc)) throw new Error("anchor factory export `makeReducer` missing");
  if (!/function\s+createSource\b/.test(anchorSrc)) throw new Error("createSource helper missing");
  if (!/function\s+segmentCode\b/.test(anchorSrc)) throw new Error("segmentCode utility missing");
  if (!/Math\.imul/.test(anchorSrc)) throw new Error("anchor mixing loop missing");
  if (/state_code/.test(anchorSrc)) throw new Error("target field name leaked in anchor source");
  const sink = await readFile(path.join(srcRoot, "z0/n0.js"), "utf8");
  if (!/115,\s*116,\s*97,\s*116,\s*101,\s*95,\s*99,\s*111,\s*100,\s*101/.test(sink)) {
    throw new Error("dynamic sink field codes (state_code) missing");
  }
  if (!/109,\s*101,\s*100,\s*105,\s*97,\s*46,\s*97,\s*112,\s*112,\s*108,\s*121/.test(sink)) {
    throw new Error("dynamic sink action codes (media.apply) missing");
  }
  if (await countByFolder("z0/x", /^x\d\d\.js$/) !== 44) throw new Error("decoy reducer count != 44");
  if (await countByFolder("z0/v", /^v\d\d\.js$/) !== 25) throw new Error("vendor noise count != 25");
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
  const bundle = await rollup({
    input: path.join(srcRoot, "z0", "a0.js"),
    treeshake: false,
  });

  await bundle.write({
    file: bundlePath,
    format: "es",
    sourcemap: false,
    inlineDynamicImports: true,
    generatedCode: "es2015",
  });

  await bundle.close();

  const raw = await readFile(bundlePath, "utf8");
  if (!/Math\.imul/.test(raw) || !/0x27d4eb2d/i.test(raw)) throw new Error("raw bundle expected logic missing");
  let obfuscated = JavaScriptObfuscator.obfuscate(raw, obfuscationOptions).getObfuscatedCode();
  // Decoy haystack tail. Appended AFTER the obfuscated app code, so every oracle span
  // (offsets <= ~2.02M, all in the prefix) stays byte-identical, while the candidate-function
  // count and byte size rise to parity with the sibling case010 bundles (~720 fns / ~4.5MB).
  // Generation is seeded so the build stays two-build identical. Each decoy mimics the
  // obfuscated app style: a readable top-level name (renameGlobals:false keeps globals) with
  // mangled-looking locals, doing pure arithmetic/string work and containing no forbidden
  // tokens (no Worker/eval/new Function/URLs/anti-debug) so the dist scan still passes.
  const PAD_TARGET_BYTES = 4500000;
  const PAD_MIN_FUNCTIONS = 300;
  function padRng(a) {
    return () => {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const padRand = padRng(0x5e0d10);
  const padHex = (cap) => "0x" + Math.floor(padRand() * cap).toString(16);
  function padArray(len) {
    const out = [];
    for (let k = 0; k < len; k += 1) out.push(padHex(0x10000));
    return out.join(",");
  }
  function padDecoy(i) {
    const name = "qd" + i.toString(36);
    const p0 = "_0x" + (0x2000 + i).toString(16);
    const p1 = "_0x" + (0x5000 + i).toString(16);
    const len = 820 + Math.floor(padRand() * 360);
    const arr = padArray(len);
    const mul = 1 + 2 * Math.floor(padRand() * 0x40000000);
    const add = Math.floor(padRand() * 0x40000000);
    switch (i % 4) {
      case 0:
        return `function ${name}(${p0},${p1}){var _0xa=[${arr}],_0xb=${add}>>>0;for(var _0xc=0;_0xc<_0xa.length;_0xc++){_0xb=(Math.imul(_0xb^_0xa[_0xc],${mul})+(${p0}?${p0}.length:_0xa[_0xc]))>>>0;}return (_0xb^(${p1}|0)).toString(36);}`;
      case 1:
        return `function ${name}(${p0}){var _0xa=[${arr}],_0xb='';for(var _0xc=0;_0xc<_0xa.length;_0xc++){_0xb+=String.fromCharCode(97+(_0xa[_0xc]+(${p0}?_0xc:0))%26);}return _0xb;}`;
      case 2:
        return `function ${name}(${p0},${p1}){var _0xa=[${arr}];return _0xa.map(function(_0xd,_0xc){return {seg:_0xc,val:(_0xd^(${p0}?${p0}.length:0))>>>0,tag:(_0xd*33+${add})%65536};}).filter(function(_0xe){return _0xe.val>(${p1}|0);});}`;
      default:
        return `function ${name}(${p0}){var _0xa=[${arr}],_0xb=${add}>>>0,_0xf=0;for(var _0xc=0;_0xc<_0xa.length;_0xc++){_0xf=(_0xf+(_0xa[_0xc]<<(_0xc%7)))>>>0;_0xb=(Math.imul(_0xb^_0xf,${mul}))>>>0;}return (_0xb+(${p0}?${p0}.length:0))>>>0;}`;
    }
  }
  const bundlePad = [];
  let padIndex = 0;
  let padBytes = Buffer.byteLength(obfuscated) + 1;
  while (padBytes < PAD_TARGET_BYTES || padIndex < PAD_MIN_FUNCTIONS) {
    const fn = padDecoy(padIndex);
    bundlePad.push(fn);
    padBytes += Buffer.byteLength(fn) + 1;
    padIndex += 1;
  }
  obfuscated = `${obfuscated}\n${bundlePad.join("\n")}\n`;
  await writeFile(bundlePath, obfuscated, "utf8");
}

async function readFilesRecursive(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const resolved = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await readFilesRecursive(resolved));
    else files.push(resolved);
  }
  return files;
}

async function scanDist() {
  const files = await readFilesRecursive(distRoot);
  const names = files.map((file) => path.relative(distRoot, file).replaceAll("\\", "/"));
  const textFiles = files.filter((file) => /\.(html|css|js|svg)$/.test(file));
  const text = (await Promise.all(textFiles.map((file) => readFile(file, "utf8")))).join("\n");

  const disallowed = [
    /new\s+Worker/i,
    /new\s+SharedWorker/i,
    /serviceWorker\.register/i,
    /importScripts\s*\(/i,
    /postMessage\s*\(/i,
    /BroadcastChannel/i,
    /MessageChannel/i,
    /sourceMappingURL/i,
    /<iframe/i,
    /eval\s*\(/i,
    /new\s+Function/i,
    /WebAssembly/i,
    /blob:/i,
    /data:text\/javascript/i,
  ];

  const hasBadName = names.some((name) => /\.map$/i.test(name) || /worker/i.test(name));
  const hasBadText = disallowed.some((pattern) => pattern.test(text));
  const jsAssets = (await readdir(assetsRoot)).filter((name) => name.endsWith(".js"));
  const bundleText = await readFile(bundlePath, "utf8");
  if (hasBadName || hasBadText || jsAssets.length !== 1 || jsAssets[0] !== bundleName || linesOf(bundleText) < 9000) {
    throw new Error("case010_state_encoding dist scan failed.");
  }
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
    page: "http://127.0.0.1:4211/",
    mode: "initial_page_load_only",
    note: "Only resources served by case010_state_encoding during initial page load are dumped. Browser extension resources are intentionally not included.",
    resources: [
      { contentType: "text/html; charset=utf-8", status: 200, url: "http://127.0.0.1:4211/", savedAs: `${captureHost}/index.html`, bytes: htmlInfo.size },
      { contentType: "text/javascript; charset=utf-8", status: 200, url: `http://127.0.0.1:4211/assets/${bundleName}`, savedAs: `${captureHost}/assets/${bundleName}`, bytes: bundleInfo.size },
      { contentType: "image/svg+xml", status: 200, url: "http://127.0.0.1:4211/favicon.svg", savedAs: `${captureHost}/favicon.svg`, bytes: svgInfo.size },
      { contentType: "text/css; charset=utf-8", status: 200, url: "http://127.0.0.1:4211/styles.css", savedAs: `${captureHost}/styles.css`, bytes: cssInfo.size },
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

async function writeBuildMeta() {
  const bundleInfo = await stat(bundlePath);
  const bundleText = await readFile(bundlePath, "utf8");
  const bundleLines = linesOf(bundleText);

  const meta = JSON.parse(await readFile(metaPath, "utf8"));
  meta.build_artifacts = {
    page: "dist/index.html",
    dist_bundle: `dist/assets/${bundleName}`,
    captured_bundle: `agent_visible/captures/devtools-source-dump/${captureHost}/assets/${bundleName}`,
    bundle_bytes: bundleInfo.size,
    bundle_lines: bundleLines,
  };
  if (meta.challenge_analysis?.structural_uncertainty?.measurements) {
    meta.challenge_analysis.structural_uncertainty.measurements.captured_js_total_bytes = bundleInfo.size;
    meta.challenge_analysis.structural_uncertainty.measurements.captured_bundle_lines = bundleLines;
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
await sourceAnswerChecks();
await copyHostFiles();
await buildBundle();
await scanDist();
await createCaptures();
const genOut = runGenOracleSpans();
await writeBuildMeta();

const bundleInfo = await stat(bundlePath);
console.log(JSON.stringify({
  case_id: caseId,
  built: true,
  dist: path.relative(process.cwd(), distRoot),
  bundle: path.relative(process.cwd(), bundlePath),
  bundle_bytes: bundleInfo.size,
  bundle_lines: linesOf(await readFile(bundlePath, "utf8")),
  gen_oracle_spans: JSON.parse(genOut.trim().split("\n").pop()),
}, null, 2));
