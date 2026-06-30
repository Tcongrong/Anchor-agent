/**
 * HTML 内联 <script> 提取与回写工具
 */

const JS_SCRIPT_TYPES = new Set([
  '',
  'text/javascript',
  'application/javascript',
  'application/ecmascript',
  'text/ecmascript',
  'module'
]);

/**
 * @param {string} text
 * @returns {boolean}
 */
function isHtmlContent(text) {
  if (typeof text !== 'string' || !text.trim()) return false;
  const head = text.trim().slice(0, 512).toLowerCase();
  if (head.startsWith('<!doctype html') || head.startsWith('<html')) return true;
  if (/<head[\s>]/i.test(head) || /<body[\s>]/i.test(head)) return true;
  return /<script\b/i.test(text) && /<\/html>/i.test(text);
}

/**
 * @param {string} url
 * @returns {boolean}
 */
function isHtmlLikeUrl(url) {
  const normalized = String(url || '').split('#')[0].split('?')[0].toLowerCase();
  return /\.(html?|xhtml|shtml|htm|php|asp|aspx|jsp|do|action)(?:$|\/)/i.test(normalized)
    || /\/(login|register|auth|index)(?:$|\/|\?)/i.test(normalized);
}

/**
 * @param {string} attrs
 * @returns {boolean}
 */
function isExecutableInlineScriptTag(attrs) {
  if (/\bsrc\s*=/i.test(attrs)) return false;
  const typeMatch = String(attrs || '').match(/\btype\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
  if (!typeMatch) return true;
  const scriptType = String(typeMatch[1] || typeMatch[2] || typeMatch[3] || '').trim().toLowerCase();
  return JS_SCRIPT_TYPES.has(scriptType);
}

/**
 * 提取 HTML 中无 src 的内联 script。
 * domInlineIndex 与 document.querySelectorAll('script:not([src])') 的下标一致；
 * index 仅为可执行 JS 块的下标（用于向后兼容）。
 *
 * @param {string} html
 * @returns {Array<{ index: number, domInlineIndex: number, content: string, openTag: string, fullMatch: string, matchStart: number, matchEnd: number }>}
 */
function extractInlineScriptBlocks(html) {
  if (typeof html !== 'string' || !html) return [];

  const blocks = [];
  const regex = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let match;
  let executableIndex = 0;
  let domInlineIndex = 0;

  while ((match = regex.exec(html)) !== null) {
    const attrs = match[1] || '';
    if (/\bsrc\s*=/i.test(attrs)) continue;

    const isExecutable = isExecutableInlineScriptTag(attrs);
    if (isExecutable) {
      const openTagEnd = match[0].indexOf('>');
      const contentStart = match.index + openTagEnd + 1;
      blocks.push({
        index: executableIndex,
        domInlineIndex,
        content: match[2],
        openTag: match[0].slice(0, openTagEnd + 1),
        fullMatch: match[0],
        matchStart: match.index,
        matchEnd: match.index + match[0].length,
        contentStart
      });
      executableIndex += 1;
    }
    domInlineIndex += 1;
  }

  return blocks;
}

/**
 * @param {string} html
 * @param {number} blockIndex
 * @param {string} newContent
 * @param {'executable'|'dom'} [indexMode='executable']
 * @returns {string|null}
 */
function replaceInlineScriptBlock(html, blockIndex, newContent, indexMode = 'executable') {
  const blocks = extractInlineScriptBlocks(html);
  const target = indexMode === 'dom'
    ? blocks.find((b) => b.domInlineIndex === blockIndex)
    : blocks.find((b) => b.index === blockIndex);
  if (!target) return null;

  const replacement = `${target.openTag}${newContent}</script>`;
  return `${html.slice(0, target.matchStart)}${replacement}${html.slice(target.matchEnd)}`;
}

/**
 * @param {string} pageUrl
 * @param {number} blockIndex
 * @returns {string}
 */
function buildHtmlScriptBlockUrl(pageUrl, blockIndex) {
  const base = String(pageUrl || '').split('#')[0];
  return `${base}#script-block-${blockIndex}`;
}

/**
 * @param {string} pageUrl
 * @param {number} blockIndex domInlineIndex
 * @returns {string[]}
 */
function buildHtmlScriptUrlCandidates(pageUrl, blockIndex) {
  const normalized = String(pageUrl || '').split('#')[0].split('?')[0];
  return [
    `inline-script-${blockIndex}`,
    buildHtmlScriptBlockUrl(pageUrl, blockIndex),
    buildHtmlScriptBlockUrl(normalized, blockIndex)
  ];
}

/**
 * @param {string} text
 * @param {number} offset
 * @returns {{ line: number, column: number }}
 */
function getPositionAtOffset(text, offset) {
  if (!text || offset <= 0) {
    return { line: 1, column: 0 };
  }

  let line = 1;
  let column = 0;
  const limit = Math.min(offset, text.length);
  for (let i = 0; i < limit; i++) {
    if (text[i] === '\n') {
      line += 1;
      column = 0;
    } else {
      column += 1;
    }
  }
  return { line, column };
}

/**
 * @param {{ contentStart?: number, fullMatch: string, matchStart: number }} block
 * @returns {number}
 */
function getBlockContentStartOffset(block) {
  if (typeof block.contentStart === 'number') {
    return block.contentStart;
  }
  const openTagEnd = block.fullMatch.indexOf('>');
  return block.matchStart + openTagEnd + 1;
}

/**
 * @param {string} html
 * @param {{ contentStart?: number, fullMatch: string, matchStart: number }} block
 * @returns {{ line: number, column: number }}
 */
function getBlockContentStartPosition(html, block) {
  return getPositionAtOffset(html, getBlockContentStartOffset(block));
}

/**
 * 将 script 内相对行号转换为 HTML 文档行号（acorn 1-based line，0-based column）。
 *
 * @param {number} scriptLine
 * @param {number} scriptColumn
 * @param {number} startLine
 * @param {number} startColumn
 * @returns {{ line: number, column: number }}
 */
function translateScriptLocToHtml(scriptLine, scriptColumn, startLine, startColumn) {
  const sl = Number(scriptLine) || 1;
  const sc = Number(scriptColumn) || 0;
  const tl = Number(startLine) || 1;
  const tc = Number(startColumn) || 0;

  if (sl <= 1) {
    return { line: tl, column: tc + sc };
  }
  return { line: tl + (sl - 1), column: sc };
}

/**
 * @param {string} code
 * @returns {string}
 */
function normalizeScriptContentForMatch(code) {
  return String(code || '')
    .replace(/^\uFEFF/, '')
    .replace(/\u0000/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * 在 HTML 中查找与给定 script 源码匹配的内联块。
 *
 * @param {string} html
 * @param {string} scriptCode
 * @param {(code: string) => string} [sanitizeFn]
 * @returns {{ block: object, contentStart: { line: number, column: number } }|null}
 */
function findMatchingInlineScriptBlock(html, scriptCode, sanitizeFn = (s) => s) {
  if (!html || !scriptCode) return null;

  const normalizedTarget = normalizeScriptContentForMatch(sanitizeFn(scriptCode));
  if (!normalizedTarget) return null;

  const blocks = extractInlineScriptBlocks(html);
  let bestPartial = null;
  let bestPartialScore = 0;

  for (const block of blocks) {
    const normalizedBlock = normalizeScriptContentForMatch(sanitizeFn(block.content));
    if (!normalizedBlock) continue;
    if (normalizedBlock === normalizedTarget) {
      return {
        block,
        contentStart: getBlockContentStartPosition(html, block)
      };
    }

    const probeLen = Math.min(240, normalizedTarget.length, normalizedBlock.length);
    if (probeLen < 32) continue;
    const targetProbe = normalizedTarget.slice(0, probeLen);
    const blockProbe = normalizedBlock.slice(0, probeLen);
    let score = 0;
    if (normalizedBlock.includes(targetProbe) || normalizedTarget.includes(blockProbe)) {
      score = probeLen;
    }
    if (score > bestPartialScore) {
      bestPartialScore = score;
      bestPartial = block;
    }
  }

  if (!bestPartial || bestPartialScore < 32) {
    return null;
  }

  return {
    block: bestPartial,
    contentStart: getBlockContentStartPosition(html, bestPartial)
  };
}

module.exports = {
  isHtmlContent,
  isHtmlLikeUrl,
  isExecutableInlineScriptTag,
  extractInlineScriptBlocks,
  replaceInlineScriptBlock,
  buildHtmlScriptBlockUrl,
  buildHtmlScriptUrlCandidates,
  getPositionAtOffset,
  getBlockContentStartOffset,
  getBlockContentStartPosition,
  translateScriptLocToHtml,
  normalizeScriptContentForMatch,
  findMatchingInlineScriptBlock
};
