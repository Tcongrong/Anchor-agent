const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const acorn = require('acorn');
const AstAnalyzer = require('../src/modules/ast-analyzer');
const {
  extractInlineScriptBlocks,
  getBlockContentStartPosition
} = require('../src/modules/html-script-utils');

const sourceFile = path.join(
  __dirname,
  '../cdp-ast-output/sources/oauth.d.cn_auth_goLogin.html__d19a7d33.source.js'
);

test('_buildFunctionTagMap uses html document line numbers for inline scripts', async () => {
  const sourceCode = [
    'function hello() { return 1; }',
    'function pwdFormLogin() { return 2; }'
  ].join('\n');
  const html = `<!DOCTYPE html>
<html>
<head><title>login</title></head>
<body>
<script>
${sourceCode}
</script>
</body>
</html>`;

  const block = extractInlineScriptBlocks(html)[0];
  const contentStart = getBlockContentStartPosition(html, block);
  const ast = acorn.parse(sourceCode, {
    ecmaVersion: 'latest',
    sourceType: 'script',
    locations: true,
    ranges: true
  });

  const analyzer = new AstAnalyzer(null, null);
  const map = analyzer._buildFunctionTagMap(
    ast,
    sourceCode,
    'https://example.com/login.html',
    null,
    null,
    {
      pageUrl: 'https://example.com/login.html',
      htmlContent: html,
      contentStartOffset: block.contentStart,
      contentStartLine: contentStart.line,
      contentStartColumn: contentStart.column
    }
  );

  const pwdEntry = Object.values(map).find((item) => item.functionName === 'pwdFormLogin');
  assert.ok(pwdEntry);
  assert.equal(pwdEntry.scriptLocation.line, 2);
  assert.equal(pwdEntry.location.line, contentStart.line + 1);
  assert.match(
    Object.keys(map).find((key) => key.includes('pwdFormLogin')),
    new RegExp(`pwdFormLogin@${contentStart.line + 1}:`)
  );
});

test('goLogin exported source maps pwdFormLogin to html-scale line numbers when wrapped', () => {
  if (!fs.existsSync(sourceFile)) {
    return;
  }

  const sourceCode = fs.readFileSync(sourceFile, 'utf8');
  const html = `<!DOCTYPE html><html><body><script>${sourceCode}</script></body></html>`;
  const block = extractInlineScriptBlocks(html)[0];
  const contentStart = getBlockContentStartPosition(html, block);
  const ast = acorn.parse(sourceCode, {
    ecmaVersion: 'latest',
    sourceType: 'script',
    locations: true,
    ranges: true
  });

  const analyzer = new AstAnalyzer(null, null);
  const map = analyzer._buildFunctionTagMap(
    ast,
    sourceCode,
    'https://oauth.d.cn/auth/goLogin.html',
    null,
    sourceFile,
    {
      pageUrl: 'https://oauth.d.cn/auth/goLogin.html',
      htmlContent: html,
      contentStartOffset: block.contentStart,
      contentStartLine: contentStart.line,
      contentStartColumn: contentStart.column
    }
  );

  const pwdEntry = Object.values(map).find((item) => item.functionName === 'pwdFormLogin');
  assert.ok(pwdEntry);
  assert.equal(pwdEntry.scriptLocation.line, 118);
  assert.equal(pwdEntry.location.line, contentStart.line + 117);
  assert.ok(pwdEntry.location.line > 100);
});
