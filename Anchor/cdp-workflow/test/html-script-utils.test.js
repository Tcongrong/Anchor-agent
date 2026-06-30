const test = require('node:test');
const assert = require('node:assert/strict');
const {
  isHtmlContent,
  isHtmlLikeUrl,
  extractInlineScriptBlocks,
  replaceInlineScriptBlock,
  buildHtmlScriptBlockUrl,
  buildHtmlScriptUrlCandidates,
  getBlockContentStartPosition,
  translateScriptLocToHtml,
  findMatchingInlineScriptBlock
} = require('../src/modules/html-script-utils');

test('isHtmlContent detects html documents', () => {
  assert.equal(isHtmlContent('<!DOCTYPE html><html><body></body></html>'), true);
  assert.equal(isHtmlContent('var a = 1;'), false);
});

test('isHtmlLikeUrl detects common html endpoints', () => {
  assert.equal(isHtmlLikeUrl('https://oauth.d.cn/auth/goLogin.html'), true);
  assert.equal(isHtmlLikeUrl('https://cdn.example.com/app/main.js'), false);
});

test('extractInlineScriptBlocks skips external and non-js script tags', () => {
  const html = `<!DOCTYPE html>
<html>
<head>
  <script src="external.js"></script>
  <script type="application/json">{"a":1}</script>
  <script>
    function hello() { return 1; }
  </script>
</head>
<body>
  <script type="module">
    export const x = 1;
  </script>
</body>
</html>`;

  const blocks = extractInlineScriptBlocks(html);
  assert.equal(blocks.length, 2);
  assert.match(blocks[0].content, /function hello/);
  assert.match(blocks[1].content, /export const x/);
});

test('replaceInlineScriptBlock rewrites only target inline script', () => {
  const html = '<html><script>var a=1;</script><script>var b=2;</script></html>';
  const updated = replaceInlineScriptBlock(html, 1, 'var b=999;/*injected*/');
  assert.match(updated, /var a=1/);
  assert.ok(updated.includes('var b=999;/*injected*/'));
  assert.doesNotMatch(updated, /var b=2/);
});

test('buildHtmlScriptUrlCandidates includes inline alias and block url', () => {
  const pageUrl = 'https://example.com/login.html';
  const candidates = buildHtmlScriptUrlCandidates(pageUrl, 2);
  assert.ok(candidates.includes('inline-script-2'));
  assert.ok(candidates.includes(buildHtmlScriptBlockUrl(pageUrl, 2)));
});

test('domInlineIndex aligns with querySelectorAll script:not([src]) order', () => {
  const html = `<html><body>
<script>document.write(1)</script>
<script id="tpl" type="text/html"><div></div></script>
<script>function digoInteraction(){}</script>
<script>var flag=false; function pwdFormLogin(){}</script>
</body></html>`;

  const blocks = extractInlineScriptBlocks(html);
  assert.equal(blocks.length, 3);
  assert.equal(blocks[0].domInlineIndex, 0);
  assert.equal(blocks[1].domInlineIndex, 2);
  assert.equal(blocks[2].domInlineIndex, 3);
  assert.match(blocks[2].content, /pwdFormLogin/);

  const replaced = replaceInlineScriptBlock(html, 3, 'var flag=false;/*injected*/', 'dom');
  assert.ok(replaced.includes('/*injected*/'));
  assert.match(replaced, /function digoInteraction/);
});

test('translateScriptLocToHtml maps script-relative lines into html document lines', () => {
  assert.deepEqual(
    translateScriptLocToHtml(1, 4, 10, 2),
    { line: 10, column: 6 }
  );
  assert.deepEqual(
    translateScriptLocToHtml(118, 21, 334, 0),
    { line: 451, column: 21 }
  );
});

test('getBlockContentStartPosition returns html line of inline script content', () => {
  const html = `<!DOCTYPE html>
<html>
<body>
<script>
function hello() {}
</script>
</body>
</html>`;

  const block = extractInlineScriptBlocks(html)[0];
  const start = getBlockContentStartPosition(html, block);
  assert.equal(start.line, 4);
  assert.ok(start.column >= 0);
});

test('findMatchingInlineScriptBlock locates extracted script inside html', () => {
  const scriptCode = 'var flag = false;\nfunction pwdFormLogin() { return 1; }';
  const html = `<html><body><script>${scriptCode}</script></body></html>`;
  const match = findMatchingInlineScriptBlock(html, scriptCode);
  assert.ok(match);
  assert.equal(match.contentStart.line, 1);
});
