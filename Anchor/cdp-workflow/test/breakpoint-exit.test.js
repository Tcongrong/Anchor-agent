const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');

const BreakpointExitCommand = require('../src/commands/breakpoint-exit');

test('breakpoint-exit: 从 input-file 解析任务并直接使用 location 行/列', () => {
  const cmd = new BreakpointExitCommand({ initialize: async () => {} });
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cdp-workflow-'));
  const inputFile = path.join(tmpDir, 'need_to_break.json');

  fs.writeFileSync(inputFile, JSON.stringify([
    {
      scriptUrl: 'https://example.com/app.js',
      tag: 'fn.submit',
      location: { line: 10, column: 4 }
    }
  ]));

  const tasks = cmd._resolveBreakpointExitTasksFromFile({ inputFile });
  assert.equal(tasks.length, 1);
  assert.equal(tasks[0].entry.url, 'https://example.com/app.js');
  assert.equal(tasks[0].entry.tag, 'fn.submit');
  assert.deepEqual(tasks[0].position, { line: 10, column: 4 });

  const points = cmd._buildTaskBreakpointPoints(tasks[0]);
  assert.equal(points.length, 1);
  assert.deepEqual(points[0], { line: 10, column: 4 });
});

test('breakpoint-exit: _buildTaskBreakpointPoints 去重入口与出口', () => {
  const cmd = new BreakpointExitCommand({});
  const points = cmd._buildTaskBreakpointPoints({
    startPosition: { line: 5, column: 0 },
    endPosition: { line: 8, column: 2 }
  });
  assert.equal(points.length, 2);
  assert.deepEqual(points[0], { line: 5, column: 0 });
  assert.deepEqual(points[1], { line: 8, column: 2 });
});

test('breakpoint-exit: _upsertPersistentBreakpoint 写入 .cdp-breakpoints.json', () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cdp-workflow-'));
  const prevCwd = process.cwd();
  process.chdir(tmpDir);

  try {
    const cmd = new BreakpointExitCommand({});
    const first = cmd._upsertPersistentBreakpoint('https://example.com/a.js', 12, 100, 'tag.a');
    const second = cmd._upsertPersistentBreakpoint('https://example.com/a.js', 12, 100, 'tag.a');

    assert.equal(first, true);
    assert.equal(second, false);

    const saved = JSON.parse(fs.readFileSync(path.join(tmpDir, '.cdp-breakpoints.json'), 'utf8'));
    assert.equal(saved.length, 1);
    assert.equal(saved[0].url, 'https://example.com/a.js');
    assert.equal(saved[0].lineNumber, 12);
    assert.equal(saved[0].options.columnNumber, 100);
    assert.equal(saved[0].tag, 'tag.a');
  } finally {
    process.chdir(prevCwd);
  }
});

test('breakpoint-exit: _upsertPersistentBreakpoint 写入 text 到 .cdp-breakpoints.json', () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cdp-workflow-'));
  const prevCwd = process.cwd();
  process.chdir(tmpDir);

  try {
    const cmd = new BreakpointExitCommand({});
    cmd._upsertPersistentBreakpoint(
      'https://example.com/a.js',
      12,
      100,
      'tag.a',
      '_0x2c3b93(0x18c)+emit'
    );

    const saved = JSON.parse(fs.readFileSync(path.join(tmpDir, '.cdp-breakpoints.json'), 'utf8'));
    assert.equal(saved.length, 1);
    assert.equal(saved[0].text, '_0x2c3b93(0x18c)+emit');
    assert.equal(saved[0].options.text, '_0x2c3b93(0x18c)+emit');
  } finally {
    process.chdir(prevCwd);
  }
});

test('breakpoint-exit: input-file 解析 text 字段', () => {
  const cmd = new BreakpointExitCommand({});
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cdp-workflow-'));
  const inputFile = path.join(tmpDir, 'need_to_break.json');

  fs.writeFileSync(inputFile, JSON.stringify([
    {
      scriptUrl: 'https://example.com/app.js',
      text: 'foo()+bar',
      location: { line: 10, column: 4 }
    }
  ]));

  const tasks = cmd._resolveBreakpointExitTasksFromFile({ inputFile });
  assert.equal(tasks[0].entry.text, 'foo()+bar');
});

test('breakpoint-exit: input-file 不存在时抛出错误', () => {
  const cmd = new BreakpointExitCommand({});
  assert.throws(
    () => cmd._resolveBreakpointExitTasksFromFile({ inputFile: './not-exists.json' }),
    /input-file 不存在/
  );
});

test('breakpoint-exit: 支持 TC2 need_to_break 对象格式', () => {
  const cmd = new BreakpointExitCommand({});
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cdp-workflow-'));
  const inputFile = path.join(tmpDir, 'need_to_break.json');

  fs.writeFileSync(inputFile, JSON.stringify({
    selected_breakpoint: {
      var_name: 'sig',
      scriptUrl: 'https://example.com/app.js',
      location: { line: 10, column: 4 },
      text: 'seal(x)',
      tag: 'fn.seal'
    }
  }));

  const tasks = cmd._resolveBreakpointExitTasksFromFile({ inputFile });
  assert.equal(tasks.length, 1);
  assert.equal(tasks[0].entry.url, 'https://example.com/app.js');
  assert.deepEqual(tasks[0].position, { line: 10, column: 4 });
});

test('breakpoint-exit: selected_breakpoint 可从 function_tag 回退解析 scriptUrl', () => {
  const cmd = new BreakpointExitCommand({});
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cdp-workflow-'));
  const inputFile = path.join(tmpDir, 'need_to_break.json');

  fs.writeFileSync(inputFile, JSON.stringify({
    selected_breakpoint: {
      var_name: 'arguments',
      function_tag: 'http://127.0.0.1:4173/assets/note.app.bundle.js::emitNoteResult@1:16850',
      scriptUrl: null,
      location: { line: 1, column: 16850 },
      text: 'arguments',
      tag: 'http://127.0.0.1:4173/assets/note.app.bundle.js::emitNoteResult@1:16850'
    },
    breakpointTasks: []
  }));

  const tasks = cmd._resolveBreakpointExitTasksFromFile({ inputFile });
  assert.equal(tasks.length, 1);
  assert.equal(tasks[0].entry.url, 'http://127.0.0.1:4173/assets/note.app.bundle.js');
  assert.deepEqual(tasks[0].position, { line: 1, column: 16850 });
});

test('breakpoint-exit: 支持 breakpointTasks 数组字段', () => {
  const cmd = new BreakpointExitCommand({});
  const rows = cmd._normalizeBreakpointInputRows({
    breakpointTasks: [{
      scriptUrl: 'https://example.com/app.js',
      location: { line: 3, column: 1 }
    }]
  });
  assert.equal(rows.length, 1);
  assert.equal(rows[0].location.line, 3);
});
