/**
 * Benchmark 注册表：ID 1~50 对应 auto / benchmark 目录下的 case。
 *
 * 排序规则（与 auto 目录一致）：
 *   case001~006: browser_fingerprint → byte_array → request_signature → request_transformation → state_encoding
 *   case007~010: browser_fingerprint → request_signature → request_transformation → state_encoding → type_array
 */

const path = require('path');
const tasks = require('./benchmark-tasks.json');

const ROOT = path.join(__dirname, '..');
const DEFAULT_BENCHMARK_ROOT = path.join(ROOT, 'benchmark');

/**
 * @param {string} [benchmarkRoot]
 * @returns {string}
 */
function resolveBenchmarkRoot(benchmarkRoot) {
  if (!benchmarkRoot) {
    return DEFAULT_BENCHMARK_ROOT;
  }
  return path.isAbsolute(benchmarkRoot)
    ? path.normalize(benchmarkRoot)
    : path.resolve(ROOT, benchmarkRoot);
}

const SUFFIXES_LOW = [
  'browser_fingerprint',
  'byte_array_transformation',
  'request_signature_token_derivation',
  'request_transformation',
  'state_encoding'
];

const SUFFIXES_HIGH = [
  'browser_fingerprint',
  'request_signature_token_derivation',
  'request_transformation',
  'state_encoding',
  'type_array_transformation'
];

function getCaseSuffixes(caseNum) {
  return caseNum <= 6 ? SUFFIXES_LOW : SUFFIXES_HIGH;
}

function resolveBenchmarkName(id) {
  if (!Number.isInteger(id) || id < 1 || id > 50) {
    throw new RangeError(`Benchmark ID 必须在 1~50 之间，收到: ${id}`);
  }

  const caseNum = Math.ceil(id / 5);
  const subIndex = (id - 1) % 5;
  const suffixes = getCaseSuffixes(caseNum);
  const casePrefix = `case${String(caseNum).padStart(3, '0')}`;

  return `${casePrefix}_${suffixes[subIndex]}`;
}

function getBenchmarkById(id, options = {}) {
  const name = resolveBenchmarkName(id);
  const task = tasks[id - 1];
  const benchmarkRoot = resolveBenchmarkRoot(options.benchmarkRoot);

  if (!task || task.label !== `${Math.ceil(id / 5)}_${(id - 1) % 5 + 1}`) {
    throw new Error(`任务配置与 ID ${id} 不匹配，请检查 lib/benchmark-tasks.json`);
  }

  return {
    id,
    label: task.label,
    name,
    task: task.task,
    value: task.value || '',
    valuePattern: task.valuePattern || '',
    autoScript: path.join(ROOT, 'auto', `${name}.js`),
    benchmarkDir: path.join(benchmarkRoot, name),
    agentHiddenDir: path.join(benchmarkRoot, name, 'agent_hidden')
  };
}

function listBenchmarks(options = {}) {
  return Array.from({ length: 50 }, (_, i) => {
    const entry = getBenchmarkById(i + 1, options);
    return {
      id: entry.id,
      label: entry.label,
      name: entry.name,
      benchmarkDir: entry.benchmarkDir,
      agentHiddenDir: entry.agentHiddenDir
    };
  });
}

function buildMainArgs(benchmark, browserUrl) {
  const args = [
    'main.js',
    '--task', benchmark.task,
    '--no-isolated-perfect-score',
    '--focus', '5',
    '--auto',
    '--browser-url', browserUrl
  ];

  if (benchmark.valuePattern) {
    args.push('--value-pattern', benchmark.valuePattern);
  } else if (benchmark.value) {
    args.push('--value', benchmark.value);
  }

  return args;
}

module.exports = {
  ROOT,
  DEFAULT_BENCHMARK_ROOT,
  ASTS_DIR: path.join(ROOT, 'cdp-workflow', 'cdp-ast-output', 'asts'),
  AGENT_RESULT: path.join(ROOT, 'anchor-agent-result.json'),
  resolveBenchmarkRoot,
  resolveBenchmarkName,
  getBenchmarkById,
  listBenchmarks,
  buildMainArgs
};
