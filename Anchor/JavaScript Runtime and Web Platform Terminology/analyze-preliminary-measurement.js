#!/usr/bin/env node
/**
 * 前置实验三项指标复现
 *
 * 论文结论（14 个生产级 Web 应用，单次 user-level interaction）：
 *   - median N_inv ≈ 493.5 function invocations
 *   - median T_async ≈ 7 asynchronous turns
 *   - σ(t) < 4.2% semantically relevant invocations
 *
 * 用法：
 *   node analyze-preliminary-measurement.js
 *   npm run measure                    # 同上，写入 preliminary-measurement-results.json
 *   node analyze-preliminary-measurement.js --heuristic
 *   node analyze-preliminary-measurement.js --raw-logs-dir ./archive
 *
 * 协议说明见：第六章-测量协议与前置实验说明.md
 */

const fs = require('fs');
const path = require('path');

const TRACE_DIR = __dirname;
const DEFAULT_BENCHMARK_ROOT = path.resolve(TRACE_DIR, '../real_benchmarks');
const MANIFEST_PATH = path.join(TRACE_DIR, 'sites-manifest.json');

const SEMANTIC_ROLES = new Set(['Anchor', 'Nested target-specific helper']);

const VENDOR_URL_PATTERNS = [
  /jquery/i,
  /bootstrap/i,
  /react/i,
  /vue\.runtime/i,
  /webpack/i,
  /hm\.baidu/i,
  /alicdn/i,
  /analytics/i,
  /sensorsdata/i
];

const GENERIC_CODE_PATTERNS = [
  /\bn\.event\.(simulate|trigger|fix)\b/,
  /\baddEventListener\b/,
  /\bdispatchEvent\b/,
  /__webpack_require__/,
  /regeneratorRuntime/,
  /Object\.assign\b/,
  /JSON\.stringify\b/,
  /console\.(log|debug|info)\b/
];

function parseArgs(argv) {
  const opts = {
    benchmarkRoot: DEFAULT_BENCHMARK_ROOT,
    traceDir: TRACE_DIR,
    manifestPath: MANIFEST_PATH,
    jsonOut: null,
    rawLogsDir: null,
    asyncGapMs: 50,
    semMinScore: 0.7,
    useHeuristic: false,
    verbose: false
  };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--benchmark-root' && argv[i + 1]) opts.benchmarkRoot = path.resolve(argv[++i]);
    else if (a === '--trace-dir' && argv[i + 1]) opts.traceDir = path.resolve(argv[++i]);
    else if (a === '--manifest' && argv[i + 1]) opts.manifestPath = path.resolve(argv[++i]);
    else if (a === '--json-out' && argv[i + 1]) opts.jsonOut = path.resolve(argv[++i]);
    else if (a === '--raw-logs-dir' && argv[i + 1]) opts.rawLogsDir = path.resolve(argv[++i]);
    else if (a === '--async-gap-ms' && argv[i + 1]) opts.asyncGapMs = Number(argv[++i]);
    else if (a === '--sem-min-score' && argv[i + 1]) opts.semMinScore = Number(argv[++i]);
    else if (a === '--heuristic') opts.useHeuristic = true;
    else if (a === '--no-heuristic') opts.useHeuristic = false;
    else if (a === '--verbose' || a === '-v') opts.verbose = true;
    else if (a === '--help' || a === '-h') {
      console.log(`Usage: node analyze-preliminary-measurement.js [options]

Options:
  --benchmark-root <dir>   real_benchmarks 根目录 (default: ../real_benchmarks)
  --trace-dir <dir>        deduped 日志目录 (default: trace/)
  --manifest <file>        14 站清单 JSON (default: sites-manifest.json)
  --raw-logs-dir <dir>       若存在，优先用原始 runtime-function-logs.json 计算 N_inv
  --async-gap-ms <n>         异步轮次切分阈值 (default: 50)
  --sem-min-score <n>        oracle 语义相关最低分 (default: 0.7)
  --heuristic                附加 task.json 字段启发式
  --json-out <file>          输出 JSON 报告
  --verbose                  打印每站语义相关函数名`);
      process.exit(0);
    }
  }
  return opts;
}

function median(values) {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function loadManifest(manifestPath) {
  if (!fs.existsSync(manifestPath)) return null;
  const manifest = loadJson(manifestPath);
  const map = {};
  for (const site of manifest.sites || []) {
    map[site.num] = site;
  }
  return { manifest, map };
}

function discoverDedupedFiles(traceDir, manifestMap) {
  const fromDisk = fs.readdirSync(traceDir)
    .filter((f) => /^runtime-function-logs\.deduped_(\d+)\.json$/.test(f))
    .map((f) => {
      const num = Number(f.match(/deduped_(\d+)/)[1]);
      return { num, file: f, filePath: path.join(traceDir, f) };
    });

  if (!manifestMap) return fromDisk.sort((a, b) => a.num - b.num);

  const byNum = new Map(fromDisk.map((e) => [e.num, e]));
  return Object.keys(manifestMap)
    .map(Number)
    .sort((a, b) => a - b)
    .map((num) => {
      const meta = manifestMap[num];
      const file = meta.dedupedLog || `runtime-function-logs.deduped_${num}.json`;
      const filePath = path.join(traceDir, file);
      return { num, file, filePath, meta };
    })
    .filter((e) => fs.existsSync(e.filePath));
}

function normalizeScriptBasename(urlOrPath) {
  const s = String(urlOrPath || '').split('?')[0].replace(/\\/g, '/');
  return s.split('/').pop().toLowerCase();
}

function countAsyncTurnsFromTimestamps(timestamps, gapMs) {
  const sorted = timestamps.filter((t) => Number.isFinite(t)).sort((a, b) => a - b);
  if (!sorted.length) return 0;
  let turns = 1;
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] > gapMs) turns++;
  }
  return turns;
}

function countAsyncTurnsFromDeduped(records, gapMs) {
  const timestamps = records.map((r) => Date.parse(r.firstLoggedAt));
  return countAsyncTurnsFromTimestamps(timestamps, gapMs);
}

function countAsyncTurnsFromRawLogs(records, gapMs) {
  const timestamps = records.map((r) => Date.parse(r.loggedAt || r.timestamp));
  return countAsyncTurnsFromTimestamps(timestamps, gapMs);
}

function spanMatchesRecord(oracleEntry, record) {
  const span = oracleEntry.captured_span;
  if (!span) return false;

  const srcBase = normalizeScriptBasename(
    oracleEntry.source_file || span.file || ''
  );
  const recBase = normalizeScriptBasename(
    record.scriptUrl || record.component?.scriptUrl || record.tag || ''
  );
  if (!srcBase || srcBase !== recBase) return false;

  const loc = record.location || record.component?.location;
  if (
    loc &&
    span.start_line === loc.line &&
    span.start_column === loc.column
  ) {
    return true;
  }

  const range = record.range;
  if (
    range &&
    typeof span.start_offset === 'number' &&
    typeof span.end_offset === 'number'
  ) {
    return range.start < span.end_offset && range.end > span.start_offset;
  }

  return false;
}

function loadOracleEntries(benchmarkRoot, caseDir, semMinScore) {
  const oraclePath = path.join(benchmarkRoot, caseDir, 'agent_hidden', 'oracle.hidden.json');
  if (!fs.existsSync(oraclePath)) {
    return { entries: [], roles: [], oraclePath: null };
  }

  const oracle = loadJson(oraclePath);
  const scoreValues = oracle.score_values || {};
  const entries = [];
  const roles = [];

  function pushEntry(raw, source) {
    const score = typeof raw.score === 'number'
      ? raw.score
      : (scoreValues[raw.role || raw.semantic_role] ?? 0);
    const role = raw.role || raw.semantic_role || '';
    const names = new Set(
      [raw.function, raw.answer_function, raw.source_function].filter(Boolean)
    );
    const item = {
      function: raw.function,
      role,
      score,
      source,
      names,
      source_file: raw.source_file,
      captured_span: raw.captured_span
    };
    roles.push(item);
    if (score >= semMinScore) entries.push(item);
  }

  for (const entry of oracle.role_oracle || []) {
    pushEntry(entry, 'role_oracle');
  }
  if (oracle.primary_anchor) {
    pushEntry({ ...oracle.primary_anchor, role: oracle.primary_anchor.semantic_role }, 'primary_anchor');
  }

  return { entries, roles, oraclePath, caseId: oracle.case_id };
}

function loadTaskHints(benchmarkRoot, caseDir) {
  const taskPath = path.join(benchmarkRoot, caseDir, 'agent_visible', 'task.json');
  if (!fs.existsSync(taskPath)) {
    return { fieldTokens: [], urlTokens: [], method: '', anchorDefinition: '' };
  }

  const task = loadJson(taskPath);
  const obs = task.observable || {};
  const fieldRaw = String(obs.field || '');
  const fieldTokens = fieldRaw
    .split(/[,;#\s]+/)
    .map((s) => s.trim())
    .filter((s) => s.length >= 2);
  const urlTokens = String(obs.url_contains || '')
    .split(/[/\s]+/)
    .map((s) => s.trim())
    .filter((s) => s.length >= 3);

  return {
    fieldTokens,
    urlTokens,
    method: String(obs.method || '').toUpperCase(),
    anchorDefinition: task.anchor_definition_general || ''
  };
}

function isVendorRecord(record) {
  const url = record.scriptUrl || record.component?.scriptUrl || '';
  return VENDOR_URL_PATTERNS.some((re) => re.test(url));
}

function matchesHeuristicSemantic(record, taskHints) {
  if (isVendorRecord(record)) return false;

  const code = record.functionCode || '';
  const name = record.component?.functionName || '';
  const haystack = `${name}\n${code}`.toLowerCase();

  for (const token of taskHints.fieldTokens) {
    if (haystack.includes(token.toLowerCase())) return true;
  }
  for (const token of taskHints.urlTokens) {
    if (haystack.includes(token.toLowerCase())) return true;
  }

  const cryptoHints = [
    'encrypt', 'decrypt', 'sm2', 'sm3', 'rsa', 'aes', 'md5', 'sha1', 'sha256',
    'sign', 'digest', 'encode', 'btoa', 'crypt', 'bust='
  ];
  const hasCrypto = cryptoHints.some((h) => haystack.includes(h));
  const hasNetwork = ['xmlhttprequest', 'fetch(', '.ajax', 'sendbeacon', 'request(']
    .some((h) => haystack.includes(h));

  if (hasCrypto && (hasNetwork || taskHints.fieldTokens.some((t) => haystack.includes(t.toLowerCase())))) {
    return true;
  }

  return false;
}

function isGenericPlumbing(record) {
  const code = record.functionCode || '';
  const astTags = record.tags || [];
  if (astTags.length === 1 && (astTags[0] === 'general' || astTags[0] === 'object-method')) {
    if (GENERIC_CODE_PATTERNS.some((re) => re.test(code))) return true;
  }
  return GENERIC_CODE_PATTERNS.some((re) => re.test(code)) && isVendorRecord(record);
}

function matchOracleEntry(record, oracleEntries) {
  const fn = record.component?.functionName || '';
  for (const entry of oracleEntries) {
    if (entry.names.has(fn)) {
      return { entry, reason: 'oracle-name' };
    }
    if (spanMatchesRecord(entry, record)) {
      return { entry, reason: 'oracle-span' };
    }
  }
  return null;
}

function classifyRecord(record, oracleEntries, taskHints, useHeuristic) {
  const fn = record.component?.functionName || '';
  const oracleHit = matchOracleEntry(record, oracleEntries);
  if (oracleHit) {
    const { entry, reason } = oracleHit;
    const semanticallyRelevant = SEMANTIC_ROLES.has(entry.role) || entry.score >= 0.7;
    return {
      relevant: semanticallyRelevant,
      reason: semanticallyRelevant ? reason : 'oracle-low-score',
      functionName: fn,
      oracleRole: entry.role,
      oracleScore: entry.score
    };
  }
  if (useHeuristic && matchesHeuristicSemantic(record, taskHints)) {
    return { relevant: true, reason: 'heuristic-task', functionName: fn };
  }
  return {
    relevant: false,
    reason: isGenericPlumbing(record) ? 'generic-plumbing' : 'other',
    functionName: fn
  };
}

function tryLoadRawLogs(rawLogsDir, num, caseDir) {
  if (!rawLogsDir) return null;
  const candidates = [
    path.join(rawLogsDir, String(num), 'runtime-function-logs.json'),
    path.join(rawLogsDir, caseDir, 'runtime-function-logs.json'),
    path.join(rawLogsDir, `runtime-function-logs_${num}.json`)
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) return loadJson(p);
  }
  return null;
}

function analyzeSite(entry, opts) {
  const meta = entry.meta || {};
  const caseDir = meta.benchmarkDir || entry.caseDir;
  if (!caseDir) {
    return { num: entry.num, file: entry.file, error: 'missing benchmarkDir in manifest' };
  }

  const deduped = loadJson(entry.filePath);
  const records = deduped.records || [];
  const nFunc = deduped.count ?? records.length;

  const rawLogs = tryLoadRawLogs(opts.rawLogsDir, entry.num, caseDir);
  let nInv;
  let nInvSource;
  let tAsync;
  let tAsyncSource;

  if (rawLogs && Array.isArray(rawLogs.records)) {
    nInv = rawLogs.count ?? rawLogs.records.length;
    nInvSource = 'runtime-function-logs.json count (exact invocations)';
    tAsync = countAsyncTurnsFromRawLogs(rawLogs.records, opts.asyncGapMs);
    tAsyncSource = 'raw logs loggedAt timestamps';
  } else {
    nInv = nFunc;
    nInvSource = 'deduped.count (unique tags as invocation proxy)';
    tAsync = countAsyncTurnsFromDeduped(records, opts.asyncGapMs);
    tAsyncSource = 'deduped firstLoggedAt timestamps';
  }

  const { entries: oracleEntries, roles, oraclePath, caseId: oracleCaseId } = loadOracleEntries(
    opts.benchmarkRoot,
    caseDir,
    opts.semMinScore
  );
  const taskHints = loadTaskHints(opts.benchmarkRoot, caseDir);

  const classified = records.map((r) => classifyRecord(r, oracleEntries, taskHints, opts.useHeuristic));
  const semRecords = classified.filter((c) => c.relevant);

  // deduped-only：按唯一函数条目计 σ proxy；若有 raw logs 可按 tag 重复次数加权
  let nSem = semRecords.length;
  let sigmaPercent = nInv > 0 ? (nSem / nInv) * 100 : 0;
  let sigmaSource = 'deduped unique functions (σ proxy; true σ needs raw runtime logs)';

  if (rawLogs && Array.isArray(rawLogs.records)) {
    const semTags = new Set(
      records
        .filter((_, i) => classified[i].relevant)
        .map((r) => r.tag)
    );
    nSem = rawLogs.records.filter((r) => semTags.has(r.tag)).length;
    sigmaPercent = nInv > 0 ? (nSem / nInv) * 100 : 0;
    sigmaSource = 'raw logs invocation-weighted σ (tags matched via deduped oracle hits)';
  }

  const caseId = meta.caseId || oracleCaseId || caseDir;

  return {
    num: entry.num,
    caseId,
    caseDir,
    file: entry.file,
    productionUrl: meta.productionUrl,
    targetBehavior: meta.targetBehavior,
    generatedAt: deduped.generatedAt,
    nInv,
    nInvSource,
    nFunc,
    tAsync,
    tAsyncSource,
    asyncGapMs: opts.asyncGapMs,
    nSem,
    sigmaPercent,
    sigmaSource,
    oraclePath,
    oracleRoleCount: roles.length,
    semMatchedByOracleName: classified.filter((c) => c.relevant && c.reason === 'oracle-name').length,
    semMatchedByOracleSpan: classified.filter((c) => c.relevant && c.reason === 'oracle-span').length,
    semMatchedByHeuristic: classified.filter((c) => c.relevant && c.reason === 'heuristic-task').length,
    semanticallyRelevantFunctions: semRecords.map((c) => c.functionName).filter(Boolean),
    belowFourPointTwoPercent: sigmaPercent < 4.2,
    hasRawLogs: Boolean(rawLogs)
  };
}

function printReport(results, opts, manifest) {
  const valid = results.filter((r) => !r.error);
  const nInvValues = valid.map((r) => r.nInv);
  const tAsyncValues = valid.map((r) => r.tAsync);
  const sigmaValues = valid.map((r) => r.sigmaPercent);

  const paperTargets = manifest?.paperTargets || {
    medianNInv: 493.5,
    medianTAsync: 7,
    sigmaLessThanPercent: 4.2
  };

  const summary = {
    siteCount: valid.length,
    medianNInv: median(nInvValues),
    medianTAsync: median(tAsyncValues),
    medianSigmaPercent: median(sigmaValues),
    maxSigmaPercent: sigmaValues.length ? Math.max(...sigmaValues) : null,
    sitesBelowFourPointTwoPercent: valid.filter((r) => r.sigmaPercent < 4.2).length,
    asyncGapMs: opts.asyncGapMs,
    semMinScore: opts.semMinScore,
    useHeuristic: opts.useHeuristic,
    rawLogsDir: opts.rawLogsDir,
    paperTargets
  };

  console.log('\n=== 前置实验测量复现 ===\n');
  console.log(
    '| # | case_id | N_inv | T_async | σ% | <4.2% |',
    '\n|---|---------|-------|---------|-----|-------|'
  );
  for (const r of valid) {
    console.log(
      `| ${r.num} | ${String(r.caseId).slice(0, 28)} | ${r.nInv} | ${r.tAsync} | ${r.sigmaPercent.toFixed(2)} | ${r.belowFourPointTwoPercent ? '✓' : '✗'} |`
    );
  }

  console.log('\n--- 汇总 vs 论文 ---');
  console.log(`站点数: ${summary.siteCount}`);
  console.log(`N_inv 中位数: ${summary.medianNInv}  (论文: ${paperTargets.medianNInv})`);
  console.log(`T_async 中位数: ${summary.medianTAsync}  (论文: ${paperTargets.medianTAsync}, gap=${opts.asyncGapMs}ms)`);
  console.log(`σ 中位数: ${summary.medianSigmaPercent.toFixed(2)}%  (论文: < ${paperTargets.sigmaLessThanPercent}%)`);
  console.log(`σ 最大值: ${summary.maxSigmaPercent.toFixed(2)}%`);
  console.log(`σ < 4.2% 的站点: ${summary.sitesBelowFourPointTwoPercent}/${valid.length}`);
  if (!opts.rawLogsDir) {
    console.log('\n提示: 提供 --raw-logs-dir 可计算精确 N_inv 与 invocation 加权 σ');
  }
  console.log('协议详情: trace/第六章-测量协议与前置实验说明.md\n');

  return summary;
}

function runAnalysis(opts = parseArgs(process.argv)) {
  const { manifest, map: manifestMap } = loadManifest(opts.manifestPath) || {};
  const entries = discoverDedupedFiles(opts.traceDir, manifestMap);
  if (!entries.length) {
    throw new Error('未找到 runtime-function-logs.deduped_*.json');
  }
  const results = entries.map((e) => analyzeSite(e, opts));
  const summary = printReport(results, opts, manifest);
  return { summary, results, manifest, opts };
}

function main() {
  const opts = parseArgs(process.argv);
  let payload;
  try {
    payload = runAnalysis(opts);
  } catch (err) {
    console.error(err.message || err);
    process.exit(1);
  }

  if (opts.jsonOut) {
    const out = {
      generatedAt: new Date().toISOString(),
      methodology: {
        nInv: payload.results.some((r) => r.hasRawLogs)
          ? 'runtime-function-logs.json count when --raw-logs-dir provided; else deduped.count proxy'
          : 'deduped.count as proxy for function invocations (one record per unique tag)',
        tAsync: `partition sorted timestamps with gap > ${opts.asyncGapMs}ms`,
        sigma: `oracle span/name match (score>=${opts.semMinScore}, roles Anchor|Nested) + optional heuristic / N_inv`
      },
      summary: payload.summary,
      sites: payload.results
    };
    fs.writeFileSync(opts.jsonOut, JSON.stringify(out, null, 2), 'utf8');
    console.log(`JSON 已写入: ${opts.jsonOut}`);
  }

  if (opts.verbose) {
    for (const r of payload.results.filter((x) => !x.error)) {
      console.log(`\n[${r.num}] ${r.caseId}`);
      console.log('  sem functions:', r.semanticallyRelevantFunctions.join(', ') || '(none)');
      console.log('  match:', `name=${r.semMatchedByOracleName}`, `span=${r.semMatchedByOracleSpan}`, `heuristic=${r.semMatchedByHeuristic}`);
    }
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  parseArgs,
  median,
  countAsyncTurnsFromDeduped,
  countAsyncTurnsFromRawLogs,
  spanMatchesRecord,
  classifyRecord,
  analyzeSite,
  runAnalysis,
  loadOracleEntries,
  SEMANTIC_ROLES
};
