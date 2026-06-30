const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const AstAnalyzer = require('../src/modules/ast-analyzer');

function createTmpDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'dedupe-logs-'));
}

test('dedupeRuntimeFunctionLogs 自动补充 HTML 内联脚本函数', async () => {
  const tmpDir = createTmpDir();
  const mapFile = path.join(tmpDir, 'function-tag-map.json');
  const logsFile = path.join(tmpDir, 'runtime-function-logs.json');
  const outFile = path.join(tmpDir, 'runtime-function-logs.deduped.json');
  const sourceFile = path.join(tmpDir, 'page.source.js');

  const sourceCode = [
    'function hello() { return 1; }',
    'function unusedInHtml() { return 2; }'
  ].join('\n');

  fs.writeFileSync(sourceFile, sourceCode, 'utf8');
  fs.writeFileSync(mapFile, JSON.stringify({
    'https://example.com/login.html::hello@1:0': {
      scriptUrl: 'https://example.com/login.html',
      functionName: 'hello',
      location: { line: 1, column: 0 },
      range: { start: 0, end: 30 },
      tags: ['general'],
      sourceFile
    },
    'https://example.com/login.html::unusedInHtml@2:0': {
      scriptUrl: 'https://example.com/login.html',
      functionName: 'unusedInHtml',
      location: { line: 2, column: 0 },
      range: { start: 31, end: 65 },
      tags: ['general'],
      sourceFile
    },
    'https://cdn.example.com/app.js::run@1:0': {
      scriptUrl: 'https://cdn.example.com/app.js',
      functionName: 'run',
      location: { line: 1, column: 0 },
      range: { start: 0, end: 20 },
      tags: ['general'],
      sourceFile
    }
  }), 'utf8');

  fs.writeFileSync(logsFile, JSON.stringify({
    records: [{
      tag: 'https://example.com/login.html::hello@1:0',
      loggedAt: '2026-06-24T00:00:00.000Z',
      scriptUrl: 'https://example.com/login.html',
      tags: ['general'],
      location: { line: 1, column: 0 }
    }, {
      tag: 'https://cdn.example.com/app.js::run@1:0',
      loggedAt: '2026-06-24T00:00:01.000Z',
      scriptUrl: 'https://cdn.example.com/app.js',
      tags: ['general'],
      location: { line: 1, column: 0 }
    }]
  }), 'utf8');

  const analyzer = new AstAnalyzer(null, null);
  const result = await analyzer.dedupeRuntimeFunctionLogs({
    inputDir: tmpDir,
    mapFile,
    logsFile,
    outputFile: outFile
  });

  assert.equal(result.dedupedCount, 3);
  assert.equal(result.htmlAddedCount, 1);

  const payload = JSON.parse(fs.readFileSync(outFile, 'utf8'));
  const tags = payload.records.map((item) => item.tag);
  assert.ok(tags.includes('https://example.com/login.html::unusedInHtml@2:0'));
  assert.ok(!tags.includes('https://cdn.example.com/app.js::missing@9:9'));

  const htmlOnly = payload.records.find(
    (item) => item.tag === 'https://example.com/login.html::unusedInHtml@2:0'
  );
  assert.equal(htmlOnly.firstLoggedAt, null);
  assert.equal(htmlOnly.callStack, null);
  assert.match(htmlOnly.functionCode, /unusedInHtml/);
});

test('dedupeRuntimeFunctionLogs 将 HTML 内联函数行号换算为文档行号', async () => {
  const tmpDir = createTmpDir();
  const mapFile = path.join(tmpDir, 'function-tag-map.json');
  const logsFile = path.join(tmpDir, 'runtime-function-logs.json');
  const outFile = path.join(tmpDir, 'runtime-function-logs.deduped.json');
  const sourceFile = path.join(tmpDir, 'oauth.d.cn_auth_goLogin.html__test.source.js');
  const acorn = require('acorn');

  const sourceCode = '\nvar pwdFormLogin = function(){\n  return 1;\n};\n';
  const html = `<!DOCTYPE html>
<html>
<body>
<script>${sourceCode}</script>
</body>
</html>`;
  fs.writeFileSync(sourceFile, sourceCode, 'utf8');

  const ast = acorn.parse(sourceCode, {
    ecmaVersion: 'latest',
    sourceType: 'script',
    locations: true,
    ranges: true
  });
  let fnStart = 0;
  const visit = (node, parent) => {
    if (!node || typeof node !== 'object') return;
    if (node.type === 'FunctionExpression'
      && parent?.type === 'VariableDeclarator'
      && parent.id?.name === 'pwdFormLogin') {
      fnStart = node.start;
    }
    for (const key of Object.keys(node)) {
      const value = node[key];
      if (Array.isArray(value)) value.forEach((item) => visit(item, node));
      else if (value && typeof value === 'object' && value.type) visit(value, node);
    }
  };
  visit(ast, null);

  fs.writeFileSync(mapFile, JSON.stringify({
    'https://oauth.example.com/auth/goLogin.html::pwdFormLogin@2:21': {
      scriptUrl: 'https://oauth.example.com/auth/goLogin.html',
      functionName: 'pwdFormLogin',
      location: { line: 2, column: 21 },
      range: { start: fnStart, end: fnStart + 20 },
      tags: ['dom'],
      sourceFile
    }
  }), 'utf8');
  fs.writeFileSync(logsFile, JSON.stringify({ records: [] }), 'utf8');

  const analyzer = new AstAnalyzer(null, null);
  analyzer._fetchScriptSourceViaNode = async (url) => {
    if (url.includes('goLogin.html')) return html;
    return null;
  };

  const result = await analyzer.dedupeRuntimeFunctionLogs({
    inputDir: tmpDir,
    mapFile,
    logsFile,
    outputFile: outFile
  });

  assert.equal(result.htmlAddedCount, 1);
  const payload = JSON.parse(fs.readFileSync(outFile, 'utf8'));
  const pwd = payload.records.find((item) => item.component.functionName === 'pwdFormLogin');
  assert.ok(pwd);
  assert.ok(pwd.location.line > 2);
  assert.equal(pwd.scriptLocation.line, 2);
});
