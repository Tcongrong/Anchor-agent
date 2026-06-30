const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('path');
const fs = require('fs');

const {
  parseArgs,
  inferTaskDescription,
  profileTargetObject
} = require('../../select-anchors');

const FIXTURE_DEDUPED = path.join(__dirname, '..', 'cdp-ast-output', 'runtime-function-logs.deduped.json');

test('select-anchors: parseArgs 支持 hybrid 与 structural 参数', () => {
  const opts = parseArgs([
    'node',
    'select-anchors.js',
    '--mode',
    'hybrid',
    '--task',
    '寻找 console.log',
    '--sink',
    'console.log',
    '--object',
    '{"action":"catalog.search"}'
  ]);

  assert.equal(opts.mode, 'hybrid');
  assert.equal(opts.taskDescription, '寻找 console.log');
  assert.deepEqual(opts.sinks, ['console.log']);
});

test('select-anchors: inferTaskDescription 从 object 推断任务', () => {
  const profile = profileTargetObject({ action: 'catalog.search', search_sig: 'ss_bh9g_30' });
  const task = inferTaskDescription({}, profile);
  assert.match(task, /console\.log/);
  assert.match(task, /catalog\.search/);
});

test('select-anchors: structural 模式可在项目根目录执行', () => {
  if (!fs.existsSync(FIXTURE_DEDUPED)) {
    return;
  }

  const { spawnSync } = require('child_process');
  const outPath = path.join(__dirname, '..', '..', '.cache', 'test-anchor-selection-structural.json');
  const script = path.join(__dirname, '..', '..', 'select-anchors.js');
  const result = spawnSync(process.execPath, [
    script,
    '--mode',
    'structural',
    '--task',
    '寻找 console.log 输出中的 search_sig',
    '--sink',
    'console.log',
    '--top',
    '3',
    '--out',
    outPath,
    '--no-cache'
  ], { encoding: 'utf8' });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /emitSearchTelemetry|Top 3 锚点/);

  const output = JSON.parse(fs.readFileSync(outPath, 'utf8'));
  assert.equal(output.distribution.length, output.summary.candidateCount);
  assert.equal(output.anchors.length, output.summary.candidateCount);
  assert.ok(Math.abs(output.summary.confidenceSum - 1) < 1e-5);
  assert.equal(output.distribution[0].functionName, 'emitSearchTelemetry');
  assert.ok(output.distribution[0].confidence > output.distribution[1].confidence);
});
