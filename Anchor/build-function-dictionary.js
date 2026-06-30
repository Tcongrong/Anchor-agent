#!/usr/bin/env node
/**
 * 基于 runtime-function-logs.deduped.json + AST
 * 构建函数语句字典：细粒度语句拆分 + 可待分析的有返回值表达式及其行列位置
 */

const fs = require('fs');
const path = require('path');

const ACORN = require('./cdp-workflow/node_modules/acorn');
const ASTRING = require('./cdp-workflow/node_modules/astring');

const ROOT = __dirname;

const DEFAULT_PATHS = {
  deduped: path.join(ROOT, '/cdp-workflow/cdp-ast-output/runtime-function-logs.deduped.json'),
  map: path.join(ROOT, '/cdp-workflow/cdp-ast-output/function-tag-map.json'),
  out: path.join(ROOT, 'function-dictionary.json')
};

const TRIVIAL_DECODER_NAMES = new Set(['_0x29d4', '_0x1e072d']);

function parseArgs(argv) {
  const opts = { ...DEFAULT_PATHS, help: false };
  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--deduped' && argv[i + 1]) opts.deduped = path.resolve(argv[++i]);
    else if (arg === '--map' && argv[i + 1]) opts.map = path.resolve(argv[++i]);
    else if (arg === '--out' && argv[i + 1]) opts.out = path.resolve(argv[++i]);
    else if (arg === '--help' || arg === '-h') opts.help = true;
  }
  return opts;
}

function printHelp() {
  console.log(`用法: node build-function-dictionary.js [选项]

选项:
  --deduped <file>   runtime-function-logs.deduped.json
  --map <file>       function-tag-map.json（可选，补充源文件信息）
  --out <file>       输出 JSON 路径
  -h, --help         显示帮助
`);
}

function loadJson(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function parseCallStackTop(callStack) {
  if (!callStack || typeof callStack !== 'string') return null;
  const lines = callStack.split('\n').map((l) => l.trim()).filter(Boolean);
  if (lines.length < 2) return null;
  const m = lines[1].match(/\(([^)]+):(\d+):(\d+)\)$/);
  if (!m) return null;
  return {
    scriptUrl: m[1],
    line: Number(m[2]),
    column: Number(m[3])
  };
}

function toAbsoluteLoc(nodeLoc, baseLoc) {
  if (!nodeLoc || !nodeLoc.start) return null;
  const relLine = nodeLoc.start.line;
  const relCol = nodeLoc.start.column;
  const absLine = (baseLoc?.line || 1) + relLine - 1;
  const absCol = relLine === 1 ? (baseLoc?.column || 0) + relCol : relCol;
  return {
    line: absLine,
    column: absCol,
    endLine: (baseLoc?.line || 1) + (nodeLoc.end?.line || relLine) - 1,
    endColumn: (nodeLoc.end?.line || relLine) === 1
      ? (baseLoc?.column || 0) + (nodeLoc.end?.column || relCol)
      : (nodeLoc.end?.column || relCol)
  };
}

function nodeText(node, sourceCode, wrapOffset = 0) {
  if (!node) return '';
  if (sourceCode && node.range) {
    return sourceCode.slice(node.range[0] - wrapOffset, node.range[1] - wrapOffset);
  }
  return ASTRING.generate(node);
}

function parseFunctionAst(functionCode) {
  const wrapped = `(${functionCode})`;
  let ast;
  try {
    ast = ACORN.parse(wrapped, {
      ecmaVersion: 'latest',
      sourceType: 'module',
      locations: true,
      ranges: true,
      allowHashBang: true,
      allowAwaitOutsideFunction: true
    });
  } catch (moduleErr) {
    ast = ACORN.parse(wrapped, {
      ecmaVersion: 'latest',
      sourceType: 'script',
      locations: true,
      ranges: true,
      allowHashBang: true,
      allowAwaitOutsideFunction: true
    });
  }

  const expr = ast.body[0].expression;
  if (expr.type === 'FunctionDeclaration' || expr.type === 'FunctionExpression') {
    return { fnNode: expr, parseSource: wrapped };
  }
  if (expr.type === 'ArrowFunctionExpression') {
    return { fnNode: expr, parseSource: wrapped };
  }
  throw new Error(`无法识别的函数节点: ${expr.type}`);
}

function getFunctionBody(fnNode) {
  if (!fnNode.body) return [];
  if (fnNode.body.type === 'BlockStatement') return fnNode.body.body || [];
  return [{ type: 'ReturnStatement', argument: fnNode.body, loc: fnNode.body.loc, range: fnNode.body.range }];
}

function formatDeclaratorText(decl, kind, isFirstInGroup, parseSource, wrapOffset) {
  const idText = nodeText(decl.id, parseSource, wrapOffset);
  if (!decl.init) return isFirstInGroup && kind ? `${kind} ${idText}` : idText;
  const initText = nodeText(decl.init, parseSource, wrapOffset);
  if (isFirstInGroup && kind) return `${kind} ${idText}=${initText}`;
  return `${idText}=${initText}`;
}

function splitSequenceExpressions(expr, withReturnPrefix, parseSource, wrapOffset) {
  if (!expr) return [];
  if (expr.type === 'SequenceExpression') {
    return expr.expressions.map((part, idx) => ({
      node: part,
      text: idx === 0 && withReturnPrefix
        ? `return ${nodeText(part, parseSource, wrapOffset)}`
        : nodeText(part, parseSource, wrapOffset)
    }));
  }
  return [{
    node: expr,
    text: withReturnPrefix
      ? `return ${nodeText(expr, parseSource, wrapOffset)}`
      : nodeText(expr, parseSource, wrapOffset)
  }];
}

function collectFineStatementsFromNodes(nodes, ctx) {
  for (const stmt of nodes) {
    switch (stmt.type) {
      case 'VariableDeclaration': {
        const kind = stmt.kind || 'var';
        stmt.declarations.forEach((decl, idx) => {
          ctx.statements.push({
            text: formatDeclaratorText(decl, kind, idx === 0, ctx.parseSource, ctx.wrapOffset),
            type: 'VariableDeclarator',
            astType: stmt.type,
            sourceLoc: toAbsoluteLoc(decl.loc, ctx.baseLoc),
            range: decl.range ? { start: decl.range[0], end: decl.range[1] } : null
          });
        });
        break;
      }

      case 'ReturnStatement': {
        const parts = splitSequenceExpressions(stmt.argument, true, ctx.parseSource, ctx.wrapOffset);
        for (const part of parts) {
          ctx.statements.push({
            text: part.text,
            type: 'ReturnStatement',
            astType: stmt.type,
            sourceLoc: toAbsoluteLoc(part.node.loc, ctx.baseLoc),
            range: part.node.range ? { start: part.node.range[0], end: part.node.range[1] } : null
          });
        }
        break;
      }

      case 'ExpressionStatement': {
        const parts = splitSequenceExpressions(stmt.expression, false, ctx.parseSource, ctx.wrapOffset);
        for (const part of parts) {
          ctx.statements.push({
            text: part.text,
            type: 'ExpressionStatement',
            astType: stmt.type,
            sourceLoc: toAbsoluteLoc(part.node.loc, ctx.baseLoc),
            range: part.node.range ? { start: part.node.range[0], end: part.node.range[1] } : null
          });
        }
        break;
      }

      case 'IfStatement':
      case 'ForStatement':
      case 'ForInStatement':
      case 'ForOfStatement':
      case 'WhileStatement':
      case 'DoWhileStatement':
      case 'SwitchStatement':
      case 'TryStatement':
      case 'WithStatement': {
        ctx.statements.push({
          text: nodeText(stmt, ctx.parseSource, ctx.wrapOffset),
          type: stmt.type,
          astType: stmt.type,
          sourceLoc: toAbsoluteLoc(stmt.loc, ctx.baseLoc),
          range: stmt.range ? { start: stmt.range[0], end: stmt.range[1] } : null
        });
        if (stmt.consequent && stmt.consequent.type === 'BlockStatement') {
          collectFineStatementsFromNodes(stmt.consequent.body, ctx);
        } else if (stmt.consequent) {
          collectFineStatementsFromNodes([stmt.consequent], ctx);
        }
        if (stmt.alternate) {
          if (stmt.alternate.type === 'BlockStatement') {
            collectFineStatementsFromNodes(stmt.alternate.body, ctx);
          } else {
            collectFineStatementsFromNodes([stmt.alternate], ctx);
          }
        }
        break;
      }

      case 'BlockStatement':
        collectFineStatementsFromNodes(stmt.body || [], ctx);
        break;

      default:
        ctx.statements.push({
          text: nodeText(stmt, ctx.parseSource, ctx.wrapOffset),
          type: stmt.type,
          astType: stmt.type,
          sourceLoc: toAbsoluteLoc(stmt.loc, ctx.baseLoc),
          range: stmt.range ? { start: stmt.range[0], end: stmt.range[1] } : null
        });
        break;
    }
  }
}

function isTrivialInit(node) {
  if (!node) return true;
  if (node.type === 'ObjectExpression' && node.properties.length === 0) return true;
  if (node.type === 'ArrayExpression' && node.elements.length === 0) return true;
  if (node.type === 'Literal') return true;
  // 仅跳过已知全局 decoder 引用；变量间别名（如 const _0x415a17=_0x19bd70）需保留以便追溯
  if (node.type === 'Identifier' && TRIVIAL_DECODER_NAMES.has(node.name)) return true;
  return false;
}

function classifyValueKind(node) {
  if (!node) return 'unknown';
  if (node.type === 'AwaitExpression') return 'await';
  if (node.type === 'CallExpression') return 'call';
  if (node.type === 'NewExpression') return 'new';
  if (node.type === 'BinaryExpression') return 'binary';
  if (node.type === 'UnaryExpression') return 'unary';
  if (node.type === 'AssignmentExpression') return 'assignment';
  if (node.type === 'Identifier') return 'identifier';
  if (node.type === 'MemberExpression') return 'member';
  if (node.type === 'TemplateLiteral') return 'template';
  if (node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression') return 'function';
  return node.type.toLowerCase();
}

function pushValueExpr(ctx, node, meta) {
  if (!node) return;
  const text = meta.text || nodeText(node, ctx.parseSource, ctx.wrapOffset);
  if (!text) return;
  if (!meta.force && isTrivialInit(node)) return;

  ctx.valueExpressions.push({
    text,
    kind: meta.kind || classifyValueKind(node),
    binding: meta.binding || null,
    role: meta.role || null,
    sourceLoc: toAbsoluteLoc(node.loc, ctx.baseLoc),
    range: node.range ? { start: node.range[0], end: node.range[1] } : null
  });
}

function collectValueExpressionsFromNodes(nodes, ctx) {
  for (const stmt of nodes) {
    switch (stmt.type) {
      case 'VariableDeclaration':
        for (const decl of stmt.declarations) {
          if (decl.init) {
            pushValueExpr(ctx, decl.init, {
              kind: classifyValueKind(decl.init),
              binding: decl.id.type === 'Identifier' ? decl.id.name : nodeText(decl.id, ctx.parseSource, ctx.wrapOffset),
              role: 'decl-init'
            });
          }
        }
        break;

      case 'ReturnStatement': {
        const parts = splitSequenceExpressions(stmt.argument, false, ctx.parseSource, ctx.wrapOffset);
        for (const part of parts) {
          pushValueExpr(ctx, part.node, {
            kind: classifyValueKind(part.node),
            role: 'return-expr'
          });
        }
        break;
      }

      case 'ExpressionStatement': {
        const parts = splitSequenceExpressions(stmt.expression, false, ctx.parseSource, ctx.wrapOffset);
        for (const part of parts) {
          pushValueExpr(ctx, part.node, {
            kind: classifyValueKind(part.node),
            role: 'expr'
          });
        }
        break;
      }

      case 'IfStatement':
        if (stmt.consequent?.type === 'BlockStatement') {
          collectValueExpressionsFromNodes(stmt.consequent.body, ctx);
        } else if (stmt.consequent) {
          collectValueExpressionsFromNodes([stmt.consequent], ctx);
        }
        if (stmt.alternate?.type === 'BlockStatement') {
          collectValueExpressionsFromNodes(stmt.alternate.body, ctx);
        } else if (stmt.alternate) {
          collectValueExpressionsFromNodes([stmt.alternate], ctx);
        }
        break;

      case 'BlockStatement':
        collectValueExpressionsFromNodes(stmt.body || [], ctx);
        break;

      default:
        break;
    }
  }
}

function dedupeValueExpressions(items) {
  const seen = new Set();
  const out = [];
  for (const item of items) {
    const key = `${item.text}|${item.sourceLoc?.line}|${item.sourceLoc?.column}|${item.role}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

function offsetRuntimeLoc(runtimeLoc, baseLoc, sourceLoc) {
  if (!runtimeLoc || !sourceLoc || !baseLoc) return null;
  const deltaLine = sourceLoc.line - baseLoc.line;
  const deltaCol = sourceLoc.column - baseLoc.column;
  if (deltaLine === 0) {
    return { line: runtimeLoc.line, column: runtimeLoc.column + deltaCol };
  }
  return { line: runtimeLoc.line + deltaLine, column: sourceLoc.column };
}

function attachRuntimeLocs(entry) {
  const { runtimeLoc, location: baseLoc } = entry;
  for (const item of [...entry.statements, ...entry.valueExpressions]) {
    if (item.sourceLoc) {
      item.runtimeLoc = offsetRuntimeLoc(runtimeLoc, baseLoc, item.sourceLoc);
    }
  }
}

function analyzeFunctionRecord(record, mapEntry) {
  const functionCode = record.functionCode || '';
  const baseLoc = record.location || record.component?.location || { line: 1, column: 0 };
  const runtimeLoc = parseCallStackTop(record.callStack);

  const result = {
    tag: record.tag,
    functionName: record.component?.functionName || '',
    scriptUrl: record.scriptUrl || record.component?.scriptUrl || '',
    functionCode,
    location: baseLoc,
    runtimeLoc,
    range: record.range || mapEntry?.range || null,
    tags: record.tags || mapEntry?.tags || [],
    statements: [],
    valueExpressions: [],
    parseError: null
  };

  if (!functionCode.trim()) {
    result.parseError = 'empty functionCode';
    return result;
  }

  try {
    const { fnNode, parseSource } = parseFunctionAst(functionCode);
    const ctx = {
      baseLoc,
      parseSource: functionCode,
      wrapOffset: 1,
      statements: [],
      valueExpressions: []
    };

    const bodyStmts = getFunctionBody(fnNode);
    collectFineStatementsFromNodes(bodyStmts, ctx);
    collectValueExpressionsFromNodes(bodyStmts, ctx);

    result.statements = ctx.statements.map((s, idx) => ({
      id: `Stmt${idx + 1}`,
      ...s
    }));

    result.valueExpressions = dedupeValueExpressions(ctx.valueExpressions).map((v, idx) => ({
      id: `V${idx + 1}`,
      ...v
    }));

    attachRuntimeLocs(result);
  } catch (err) {
    result.parseError = err.message;
  }

  return result;
}

function summarizeDictionary(dict) {
  let parseErrors = 0;
  let totalStmts = 0;
  let totalValues = 0;
  for (const entry of Object.values(dict)) {
    if (entry.parseError) parseErrors += 1;
    totalStmts += entry.statements.length;
    totalValues += entry.valueExpressions.length;
  }
  return {
    functionCount: Object.keys(dict).length,
    parseErrorCount: parseErrors,
    totalStatements: totalStmts,
    totalValueExpressions: totalValues
  };
}

function printSample(dict, name) {
  const entry = Object.values(dict).find((e) => e.functionName === name);
  if (!entry) return;
  console.log(`\n=== 示例: ${name} ===`);
  console.log('语句:');
  for (const s of entry.statements) {
    console.log(`  ${s.id}: ${s.text}`);
  }
  console.log('可待分析的有返回值的变量/表达式:');
  for (const v of entry.valueExpressions) {
    const loc = v.sourceLoc ? `@${v.sourceLoc.line}:${v.sourceLoc.column}` : '@?';
    console.log(`  ${v.id}: ${v.text}  ${loc}  [${v.role}/${v.kind}]`);
  }
}

function main() {
  const opts = parseArgs(process.argv);
  if (opts.help) {
    printHelp();
    process.exit(0);
  }

  const dedupedPayload = loadJson(opts.deduped);
  if (!dedupedPayload?.records?.length) {
    throw new Error(`无效的 deduped 文件: ${opts.deduped}`);
  }

  const mapJson = loadJson(opts.map) || {};

  const dictionary = {};
  for (const record of dedupedPayload.records) {
    const mapEntry = mapJson[record.tag] || null;
    dictionary[record.tag] = analyzeFunctionRecord(record, mapEntry);
  }

  const summary = summarizeDictionary(dictionary);

  const output = {
    generatedAt: new Date().toISOString(),
    sourceFiles: {
      deduped: opts.deduped,
      map: fs.existsSync(opts.map) ? opts.map : null
    },
    summary,
    dictionary
  };

  fs.mkdirSync(path.dirname(opts.out), { recursive: true });
  fs.writeFileSync(opts.out, JSON.stringify(output, null, 2), 'utf8');

  console.log('函数语句字典构建完成:');
  console.log(`- 输出: ${opts.out}`);
  console.log(`- 函数数: ${summary.functionCount}`);
  console.log(`- 语句总数: ${summary.totalStatements}`);
  console.log(`- 值表达式总数: ${summary.totalValueExpressions}`);
  console.log(`- 解析失败: ${summary.parseErrorCount}`);

  printSample(dictionary, 'sendPacket');
  printSample(dictionary, 'runAccountCommit');
}

main();
