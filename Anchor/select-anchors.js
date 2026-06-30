#!/usr/bin/env node
/**
 * 函数锚点选择（Value-oriented + Structural Prior）
 *
 * Phase 1: 目标值特征化 / 任务描述解析
 * Phase 2: 值相关评分、结构先验 p_0(f)，或二者混合，输出全部候选函数的置信度分布
 */

const fs = require('fs');
const path = require('path');
const { runStructuralPrior, DEFAULT_PRIOR_TEMPERATURE } = require('./cdp-workflow/src/modules/structural-prior');
const { softmaxNormalize } = require('./cdp-workflow/src/modules/structural-prior/scorer');

const ROOT = __dirname;

const DEFAULT_PATHS = {
  deduped: path.join(ROOT, 'cdp-workflow', 'cdp-ast-output', 'runtime-function-logs.deduped.json'),
  lookup: path.join(ROOT, 'function-call-lookup.json'),
  out: path.join(ROOT, 'anchor-selection.json'),
  cache: path.join(ROOT, '.cache', 'structural-prior-cache.json')
};

const DEFAULT_TASK = "寻找控制台console.log输出的{action: 'catalog.search', search_sig: 'ss_bh9g_30'}中的ss_bh9g_30是在哪个函数生成并赋予的";

const DEFAULT_BLEND_WEIGHTS = {
  value: 0.35,
  structural: 0.65
};

const SCORE_WEIGHTS = {
  returnsString: 10,
  returnsHighEntropy: 30,
  encodeBehavior: 20,
  networkProximity: 25,
  tokenString: 15,
  stringOpsDensity: 10,
  targetPrefixMatch: 20,
  objectFieldKeyMatch: 18,
  objectFieldValueMatch: 22,
  returnsObject: 15
};

const NOISE_TAG_PENALTIES = {
  callback: 18,
  promise: 8,
  dom: 12
};

const STRING_OP_PATTERNS = [
  /\bjoin\b/gi,
  /\bconcat\b/gi,
  /\bslice\b/gi,
  /\bcharCodeAt\b/gi,
  /\bfromCharCode\b/gi,
  /\breplace\b/gi,
  /\bsplit\b/gi,
  /\bpadStart\b/gi,
  /\bpadEnd\b/gi,
  /\btoString\b/gi,
  /\+(?=[^+=])/g
];

const ENCODE_PATTERNS = [
  /\bbtoa\b/gi,
  /\bTextEncoder\b/gi,
  /\bcrypto\b/gi,
  /\bbase64\b/gi,
  /\bUint8Array\b/gi,
  /\bencodeURIComponent\b/gi,
  /\bdecodeURIComponent\b/gi,
  /\btoString\s*\(\s*0x?(?:16|24|36)\s*\)/gi,
  /\bMath\s*\.\s*imul\b/gi,
  />>>/g
];

const NETWORK_FUNCTION_NAMES = new Set([
  'fetch',
  'sendPacket',
  'loadRouter',
  'routeWorkerMessage',
  'XMLHttpRequest',
  'commitResult'
]);

const OBFUSCATOR_DECODER_RE = new RegExp(
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=.{0,800}(?:charAt|[\'"]charAt[\'"]|indexOf|[\'"]indexOf[\'"]).{0,800}decodeURIComponent',
  's'
);

const VALUE_EMITTER_NAMES = ['emit', 'foldEnvelope', 'derive', 'makePacket', 'reshapePacket'];

function parseArgs(argv) {
  const opts = {
    ...DEFAULT_PATHS,
    topK: 5,
    value: '',
    prefix: '',
    valuePattern: '',
    objectJson: '',
    objectFile: '',
    taskDescription: '',
    sinks: [],
    mode: 'hybrid',
    valueWeight: DEFAULT_BLEND_WEIGHTS.value,
    structuralWeight: DEFAULT_BLEND_WEIGHTS.structural,
    priorTemperature: DEFAULT_PRIOR_TEMPERATURE,
    noCache: false,
    help: false
  };

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--deduped' && argv[i + 1]) opts.deduped = path.resolve(argv[++i]);
    else if (arg === '--lookup' && argv[i + 1]) opts.lookup = path.resolve(argv[++i]);
    else if (arg === '--out' && argv[i + 1]) opts.out = path.resolve(argv[++i]);
    else if (arg === '--cache' && argv[i + 1]) opts.cache = path.resolve(argv[++i]);
    else if (arg === '--value' && argv[i + 1]) opts.value = argv[++i];
    else if (arg === '--prefix' && argv[i + 1]) opts.prefix = argv[++i];
    else if (arg === '--value-pattern' && argv[i + 1]) opts.valuePattern = argv[++i];
    else if (arg === '--object' && argv[i + 1]) opts.objectJson = argv[++i];
    else if (arg === '--object-file' && argv[i + 1]) opts.objectFile = path.resolve(argv[++i]);
    else if (arg === '--task' && argv[i + 1]) opts.taskDescription = argv[++i];
    else if (arg === '--sink' && argv[i + 1]) opts.sinks.push(argv[++i]);
    else if (arg === '--mode' && argv[i + 1]) opts.mode = String(argv[++i]).toLowerCase();
    else if (arg === '--value-weight' && argv[i + 1]) opts.valueWeight = Number(argv[++i]) || DEFAULT_BLEND_WEIGHTS.value;
    else if (arg === '--structural-weight' && argv[i + 1]) opts.structuralWeight = Number(argv[++i]) || DEFAULT_BLEND_WEIGHTS.structural;
    else if (arg === '--prior-temperature' && argv[i + 1]) opts.priorTemperature = Math.max(0.1, Number(argv[++i]) || DEFAULT_PRIOR_TEMPERATURE);
    else if (arg === '--top' && argv[i + 1]) opts.topK = Math.max(1, Number(argv[++i]) || 5);
    else if (arg === '--no-cache') opts.noCache = true;
    else if (arg === '--help' || arg === '-h') opts.help = true;
  }

  return opts;
}

function printHelp() {
  console.log(`用法: node select-anchors.js [选项]

锚点选择支持三种模式（--mode）:
  hybrid      值相关评分 + 结构先验 p_0(f) 混合（默认）
  structural  仅结构先验（不依赖函数名/变量名）
  value       仅值相关评分（旧版行为）

选项:
  --value <string>         目标字符串样本，如 ap-01234567
  --prefix <string>        目标值前缀，默认从 --value 推断
  --value-pattern <regex>  目标值形态正则（如 ^bf_[a-z0-9]{10}$）
  --object <json>          目标对象样本 JSON
  --object-file <file>     从 JSON 文件读取目标对象
  --task <text>            任务描述 d，用于结构先验 Sink 识别
  --sink <api>             显式 Sink API，可重复（如 --sink console.log）
  --mode <hybrid|structural|value>
  --value-weight <n>       混合模式下值评分权重，默认 0.35
  --structural-weight <n>  混合模式下结构先验权重，默认 0.65
  --prior-temperature <n>  结构先验 softmax 温度，越大分布越平缓，默认 1
  --top <n>                控制台仅展示 Top-N，JSON 始终含全部函数置信度，默认 5
  --deduped <file>         runtime-function-logs.deduped.json
  --lookup <file>          function-call-lookup.json（可选）
  --cache <file>           结构先验离线特征缓存
  --no-cache               禁用结构先验缓存
  --out <file>             输出 JSON 路径
  -h, --help               显示帮助

示例:
  node select-anchors.js --object '{"action":"catalog.search","search_sig":"ss_bh9g_30"}' --task "寻找 console.log 输出中的 search_sig"
  node select-anchors.js --mode structural --task "寻找 console.log 中的 search_sig" --sink console.log
  node select-anchors.js --mode value --value "ap-0a1b2c3d"
  node select-anchors.js --object-file ./target-object.json
`);
}

function loadJson(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function shannonEntropy(text) {
  if (!text) return 0;
  const freq = new Map();
  for (const ch of text) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }
  let entropy = 0;
  for (const count of freq.values()) {
    const p = count / text.length;
    entropy -= p * Math.log2(p);
  }
  return entropy;
}

function inferPrefix(value) {
  if (!value) return '';
  const m = value.match(/^([a-zA-Z]{1,4}-)/);
  if (m) return m[1];
  const m2 = value.match(/^([a-zA-Z0-9_]+[_-])/);
  return m2 ? m2[1] : '';
}

function detectCharset(value) {
  if (/^[0-9a-f]+$/i.test(value)) return 'hex';
  if (/^[A-Za-z0-9+/=]+$/.test(value)) return 'base64';
  if (/^[A-Za-z0-9_-]+$/.test(value)) return 'token';
  return 'mixed';
}

function profileTargetValue(value, prefixOverride) {
  const raw = String(value || '');
  const prefix = prefixOverride || inferPrefix(raw);
  const suffix = prefix && raw.startsWith(prefix) ? raw.slice(prefix.length) : raw;
  const entropy = shannonEntropy(suffix || raw);
  const entropyThreshold = suffix.length >= 6 ? 3.0 : 2.5;

  return {
    kind: 'string',
    raw,
    prefix,
    suffix,
    length: raw.length,
    suffixLength: suffix.length,
    entropy: Number(entropy.toFixed(4)),
    highEntropy: entropy >= entropyThreshold,
    maybeToken: /^[a-zA-Z0-9_-]+$/.test(raw) && raw.length >= 6,
    charset: detectCharset(suffix || raw),
    valuePattern: null,
    semanticHints: []
  };
}

function profileTargetPattern(valuePattern, prefixOverride) {
  const { compileValuePattern, synthesizeExampleFromPattern } = require('./cdp-workflow/src/modules/value-pattern');
  compileValuePattern(valuePattern);
  const synthetic = synthesizeExampleFromPattern(valuePattern) || '';
  const profile = profileTargetValue(synthetic || prefixOverride || 'x', prefixOverride);
  profile.valuePattern = valuePattern;
  profile.syntheticExample = synthetic || null;
  if (!profile.raw && synthetic) profile.raw = synthetic;
  return profile;
}

function inferFieldMatchMode(value) {
  const str = String(value);
  const prefix = inferPrefix(str);
  if (str.includes('.') && !prefix) return 'exact';
  if (prefix) {
    const suffix = str.slice(prefix.length);
    if (suffix.length >= 4 && shannonEntropy(suffix) >= 2.5) return 'prefix';
  }
  return 'exact';
}

function parseTargetObjectInput(objectJson, objectFile) {
  let parsed;
  if (objectFile) {
    if (!fs.existsSync(objectFile)) {
      throw new Error(`object-file 不存在: ${objectFile}`);
    }
    parsed = JSON.parse(fs.readFileSync(objectFile, 'utf8'));
  } else if (objectJson) {
    parsed = JSON.parse(objectJson);
  } else {
    return null;
  }

  const obj = parsed && typeof parsed === 'object' && !Array.isArray(parsed)
    ? (parsed.target && typeof parsed.target === 'object' ? parsed.target : parsed)
    : null;

  if (!obj || Array.isArray(obj)) {
    throw new Error('--object / --object-file 必须是 JSON 对象');
  }
  return obj;
}

function profileTargetObject(obj) {
  const objectSample = { ...obj };
  const objectFields = {};
  const fieldKeys = Object.keys(obj);
  const semanticHints = new Set(fieldKeys);
  const prefixes = [];

  for (const [key, val] of Object.entries(obj)) {
    if (typeof val === 'string') {
      const stringProfile = profileTargetValue(val);
      const matchMode = inferFieldMatchMode(val);
      objectFields[key] = {
        type: 'string',
        sample: val,
        prefix: stringProfile.prefix || undefined,
        matchMode,
        length: val.length,
        entropy: stringProfile.entropy,
        highEntropy: stringProfile.highEntropy,
        maybeToken: stringProfile.maybeToken,
        charset: stringProfile.charset
      };
      if (stringProfile.prefix) prefixes.push(stringProfile.prefix);
      if (val.includes('.')) {
        val.split('.').forEach((part) => semanticHints.add(part));
      }
    } else if (typeof val === 'number' || typeof val === 'boolean') {
      objectFields[key] = { type: typeof val, sample: val, matchMode: 'exact' };
    } else {
      objectFields[key] = { type: typeof val, sample: val, matchMode: 'exact' };
    }
  }

  return {
    kind: 'object',
    raw: JSON.stringify(objectSample),
    objectSample,
    objectFields,
    fieldKeys,
    semanticHints: [...semanticHints],
    prefixes: [...new Set(prefixes.filter(Boolean))]
  };
}

function escapeRegExp(text) {
  return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function findMatchedObjectKeys(code, fieldKeys) {
  return fieldKeys.filter((key) =>
    new RegExp(`['"]?${escapeRegExp(key)}['"]?\\s*:`).test(code)
  );
}

function findMatchedObjectFieldLiterals(stringLiterals, targetProfile) {
  const hits = [];
  for (const [key, field] of Object.entries(targetProfile.objectFields || {})) {
    if (field.type !== 'string' || !field.sample) continue;
    const literalHit = stringLiterals.find((lit) => {
      if (field.matchMode === 'prefix' && field.prefix) {
        return lit.startsWith(field.prefix) || field.sample.startsWith(lit);
      }
      return lit === field.sample || lit.includes(field.sample);
    });
    if (literalHit) {
      hits.push({ key, literal: literalHit, field });
    }
  }
  return hits;
}

function countMatches(code, patterns) {
  let total = 0;
  for (const re of patterns) {
    const m = code.match(re);
    if (m) total += m.length;
  }
  return total;
}

function extractStringLiterals(code) {
  const literals = [];
  const re = /(['"`])((?:\\.|(?!\1)[^\\])*)\1/g;
  let m;
  while ((m = re.exec(code)) !== null) {
    literals.push(m[2]);
  }
  return literals;
}

function analyzeReturnShape(code) {
  const hasReturn = /\breturn\b/.test(code);
  const returnsString =
    hasReturn &&
    (/\breturn\b[^;]*['"`]/.test(code) ||
      /\breturn\b[^;]*\+/.test(code) ||
      /\breturn\b[^;]*\.(?:join|concat|slice|replace|padStart|toString)\b/.test(code));
  const returnsObjectWithValue = /\breturn\b[^;]*['"]value['"]\s*:/.test(code);
  const returnsHighEntropy =
    hasReturn &&
    (/\btoString\s*\(\s*0x?(?:16|24|36)\s*\)/.test(code) ||
      /\bpadStart\s*\(/.test(code) ||
      /\bbtoa\s*\(/.test(code) ||
      /\bMath\s*\.\s*imul\b/.test(code) ||
      />>>/.test(code));
  const returnsComposedToken =
    hasReturn &&
    (/\breturn\b[^;]*\+[^;]*\b(?:emit|foldEnvelope|encodeURIComponent|btoa)\b/.test(code) ||
      (/\bjoin\s*\(\s*['"`][~|&_\-]['"`]/.test(code) && /\bstep\s*\(/.test(code)));
  const returnsHeadersLike =
    hasReturn && /\b(?:headers|Authorization|token|stamp|channel|body|action|account_proof|proof)\b/.test(code);
  const returnsObject =
    hasReturn &&
    (/\breturn\b[^;]*\{/.test(code) || returnsObjectWithValue);

  return {
    hasReturn,
    returnsString,
    returnsObject,
    returnsObjectWithValue,
    returnsHighEntropy,
    returnsComposedToken,
    returnsHeadersLike
  };
}

function isObfuscatorDecoder(code) {
  return OBFUSCATOR_DECODER_RE.test(code);
}

function isTrivialDelegate(code, functionName) {
  if (!functionName) return false;
  const trimmed = code.replace(/\s+/g, '');
  return (
    /^function\([^)]*\)\{return[^;(+]{1,40}\([^)]*\);\}$/.test(trimmed) ||
    /^function\([^)]*\)\{return[^;]{1,20}\|\|[^;]{1,20};\}$/.test(trimmed) ||
    /^function\([^)]*\)\{return[^;]{1,30};\}$/.test(trimmed) && trimmed.length < 80
  );
}

function buildFunctionProfile(record) {
  const code = record.functionCode || '';
  const functionName = record.component?.functionName || '';
  const stringLiterals = extractStringLiterals(code);
  const stringOps = countMatches(code, STRING_OP_PATTERNS);
  const encodeHits = countMatches(code, ENCODE_PATTERNS);
  const returnShape = analyzeReturnShape(code);
  const apiCalls = [];
  const valuePipelineCalls = [];

  for (const name of ['fetch', 'import', 'console', 'dispatchAction', 'sendPacket', 'decodeURIComponent']) {
    if (new RegExp(`\\b${name}\\b`).test(code)) apiCalls.push(name);
  }

  for (const name of VALUE_EMITTER_NAMES) {
    if (new RegExp(`\\b${name}\\b`).test(code)) valuePipelineCalls.push(name);
  }

  return {
    tag: record.tag,
    functionName,
    scriptUrl: record.scriptUrl || record.component?.scriptUrl || '',
    location: record.location || record.component?.location || null,
    tags: record.tags || [],
    returnShape,
    stringOps,
    encodeHits,
    stringLiterals,
    apiCalls,
    valuePipelineCalls,
    isObfuscatorDecoder: isObfuscatorDecoder(code),
    isTrivialDelegate: isTrivialDelegate(code, functionName),
    codeLength: code.length,
    functionCode: code
  };
}

function buildNetworkDistanceIndex(lookupPayload) {
  const lookup = lookupPayload?.lookup || {};
  const tags = Object.keys(lookup);
  const networkTags = tags.filter((tag) => {
    const name = lookup[tag]?.functionName || '';
    return NETWORK_FUNCTION_NAMES.has(name);
  });

  const distance = {};
  for (const tag of tags) distance[tag] = Infinity;

  const queue = [];
  for (const tag of networkTags) {
    distance[tag] = 0;
    queue.push(tag);
  }

  while (queue.length) {
    const current = queue.shift();
    const node = lookup[current];
    if (!node) continue;

    for (const edge of node.calls || []) {
      if (!edge.tag || distance[edge.tag] !== Infinity) continue;
      distance[edge.tag] = distance[current] + 1;
      queue.push(edge.tag);
    }

    for (const edge of node.calledBy || []) {
      if (!edge.tag || distance[edge.tag] !== Infinity) continue;
      distance[edge.tag] = distance[current] + 1;
      queue.push(edge.tag);
    }
  }

  return { distance, networkTags };
}

function scoreNetworkProximity(tag, networkIndex) {
  if (!networkIndex) return { score: 0, distance: null, reason: null };
  const dist = networkIndex.distance[tag];
  if (!Number.isFinite(dist)) return { score: 0, distance: null, reason: null };
  if (dist === 0) return { score: SCORE_WEIGHTS.networkProximity, distance: dist, reason: 'network-function' };
  if (dist === 1) return { score: SCORE_WEIGHTS.networkProximity, distance: dist, reason: 'adjacent-to-network' };
  if (dist === 2) return { score: Math.round(SCORE_WEIGHTS.networkProximity * 0.6), distance: dist, reason: 'near-network' };
  if (dist === 3) return { score: Math.round(SCORE_WEIGHTS.networkProximity * 0.3), distance: dist, reason: 'weak-network-proximity' };
  return { score: 0, distance: dist, reason: null };
}

function scoreFunction(profile, targetProfile, networkIndex) {
  if (targetProfile.kind === 'object') {
    return scoreFunctionObject(profile, targetProfile, networkIndex);
  }
  return scoreFunctionString(profile, targetProfile, networkIndex);
}

function scoreFunctionObject(profile, targetProfile, networkIndex) {
  const breakdown = [];
  let total = 0;

  const add = (feature, score, reason) => {
    if (!score) return;
    total += score;
    breakdown.push({ feature, score, reason });
  };

  const penalize = (feature, score, reason) => {
    if (!score) return;
    total -= score;
    breakdown.push({ feature, score: -score, reason });
  };

  const { returnShape } = profile;
  const fieldKeys = targetProfile.fieldKeys || [];
  const code = profile.functionCode || '';

  if (returnShape.returnsObject || returnShape.returnsObjectWithValue) {
    add('returnsObject', SCORE_WEIGHTS.returnsObject, '函数显式返回对象字面量');
  }

  const objectKeyHits = findMatchedObjectKeys(code, fieldKeys);
  if (objectKeyHits.length > 0) {
    const ratio = objectKeyHits.length / Math.max(fieldKeys.length, 1);
    add(
      'objectFieldKeyMatch',
      Math.round(SCORE_WEIGHTS.objectFieldKeyMatch * Math.min(1, ratio + 0.2)),
      `源码出现目标字段名: ${objectKeyHits.join(', ')}`
    );
  }

  const literalHits = findMatchedObjectFieldLiterals(profile.stringLiterals, targetProfile);
  if (literalHits.length > 0) {
    add(
      'objectFieldValueMatch',
      Math.min(
        SCORE_WEIGHTS.objectFieldValueMatch * literalHits.length,
        SCORE_WEIGHTS.objectFieldValueMatch + 10
      ),
      `字符串常量匹配对象字段值: ${literalHits.map((h) => `${h.key}=${h.literal}`).join(', ')}`
    );
  }

  if (returnShape.returnsHeadersLike) {
    add('tokenString', Math.round(SCORE_WEIGHTS.tokenString * 0.7), '返回值涉及 action/token/proof 等对象字段');
  }

  if (profile.valuePipelineCalls?.includes('emit') && profile.functionName !== 'emit') {
    add('callsEmit', 12, '调用 emit，接近最终 payload 组装');
  }

  if (profile.valuePipelineCalls?.includes('foldEnvelope') && profile.functionName !== 'foldEnvelope') {
    add('callsFoldEnvelope', 10, '调用 foldEnvelope，接近对象封装');
  }

  if (profile.functionName === 'derive' || profile.functionName === 'foldEnvelope' || profile.functionName === 'makePacket') {
    add('valueRoot', 15, '值/payload 生成链根部函数');
  }

  if (profile.encodeHits > 0) {
    const encodeScore = Math.min(
      SCORE_WEIGHTS.encodeBehavior,
      SCORE_WEIGHTS.encodeBehavior * Math.min(1, profile.encodeHits / 3)
    );
    add('encodeBehavior', Math.round(encodeScore), `编码/位运算特征 x${profile.encodeHits}`);
  }

  const net = scoreNetworkProximity(profile.tag, networkIndex);
  if (net.score) add('networkProximity', net.score, net.reason);

  for (const tag of profile.tags) {
    if (NOISE_TAG_PENALTIES[tag]) {
      penalize(`noise:${tag}`, NOISE_TAG_PENALTIES[tag], `runtime 噪声标签 ${tag}`);
    }
  }

  if (profile.isObfuscatorDecoder) {
    penalize('obfuscatorDecoder', 40, '字符串表/解码器，不是目标对象生成点');
  }

  if (profile.isTrivialDelegate) {
    penalize('trivialDelegate', 20, '简单委托/包装函数');
  }

  if (/^anonymous_\d+$/.test(profile.functionName) && profile.codeLength < 120) {
    penalize('anonymousCallback', 12, '短匿名回调');
  }

  return { total, breakdown };
}

function scoreFunctionString(profile, targetProfile, networkIndex) {
  const breakdown = [];
  let total = 0;

  const add = (feature, score, reason) => {
    if (!score) return;
    total += score;
    breakdown.push({ feature, score, reason });
  };

  const penalize = (feature, score, reason) => {
    if (!score) return;
    total -= score;
    breakdown.push({ feature, score: -score, reason });
  };

  const { returnShape } = profile;

  if (targetProfile.maybeToken || targetProfile.charset !== 'mixed') {
    if (returnShape.returnsString || returnShape.returnsObjectWithValue) {
      add('returnsString', SCORE_WEIGHTS.returnsString, '函数显式返回字符串或 value 字段');
    }
  }

  if (targetProfile.highEntropy && returnShape.returnsHighEntropy) {
    add('returnsHighEntropy', SCORE_WEIGHTS.returnsHighEntropy, '返回值形态像 hash / hex / 编码串');
  } else if (returnShape.returnsHighEntropy) {
    add('returnsHighEntropy', Math.round(SCORE_WEIGHTS.returnsHighEntropy * 0.5), '存在高 entropy 返回特征');
  }

  if (returnShape.returnsComposedToken) {
    add('returnsComposedToken', SCORE_WEIGHTS.tokenString + 10, '拼接/折叠后输出 token 形态字符串');
  }

  if (profile.valuePipelineCalls?.includes('emit') && profile.functionName !== 'emit') {
    add('callsEmit', 12, '调用 emit，接近最终字符串化');
  }

  if (profile.valuePipelineCalls?.includes('foldEnvelope') && profile.functionName !== 'foldEnvelope') {
    add('callsFoldEnvelope', 10, '调用 foldEnvelope，接近 token 封装');
  }

  if (profile.functionName === 'derive' || profile.functionName === 'foldEnvelope') {
    add('valueRoot', 15, '值生成链根部函数');
  }

  if (profile.encodeHits > 0) {
    const encodeScore = Math.min(
      SCORE_WEIGHTS.encodeBehavior,
      SCORE_WEIGHTS.encodeBehavior * Math.min(1, profile.encodeHits / 3)
    );
    add('encodeBehavior', Math.round(encodeScore), `编码/位运算特征 x${profile.encodeHits}`);
  }

  const net = scoreNetworkProximity(profile.tag, networkIndex);
  if (net.score) add('networkProximity', net.score, net.reason);

  const prefixHits = profile.stringLiterals.filter(
    (lit) => targetProfile.prefix && lit.startsWith(targetProfile.prefix)
  );
  const tokenLikeLiterals = profile.stringLiterals.filter((lit) =>
    /^[a-zA-Z]{1,4}-$/.test(lit)
  );
  if (prefixHits.length > 0) {
    add('targetPrefixMatch', SCORE_WEIGHTS.targetPrefixMatch, `字符串常量匹配前缀 ${targetProfile.prefix}`);
  } else if (tokenLikeLiterals.length > 0 && targetProfile.prefix) {
    add('tokenString', SCORE_WEIGHTS.tokenString, '存在 token 前缀型字符串常量');
  } else if (returnShape.returnsHeadersLike) {
    add('tokenString', Math.round(SCORE_WEIGHTS.tokenString * 0.5), '返回值涉及 token/header 相关字段');
  }

  if (profile.stringOps >= 3) {
    const densityScore = Math.min(
      SCORE_WEIGHTS.stringOpsDensity,
      Math.round((profile.stringOps / 8) * SCORE_WEIGHTS.stringOpsDensity)
    );
    add('stringOpsDensity', densityScore, `字符串操作密度 ${profile.stringOps}`);
  }

  for (const tag of profile.tags) {
    if (NOISE_TAG_PENALTIES[tag]) {
      penalize(`noise:${tag}`, NOISE_TAG_PENALTIES[tag], `runtime 噪声标签 ${tag}`);
    }
  }

  if (profile.isObfuscatorDecoder) {
    penalize('obfuscatorDecoder', 40, '字符串表/解码器，不是目标值生成点');
  }

  if (/^_(?:0x[a-f0-9]+|[a-f0-9]+)$/i.test(profile.functionName) && profile.encodeHits <= 1 && profile.stringOps >= 8) {
    penalize('stringTableAccessor', 15, '混淆字符串表访问器');
  }

  if (profile.isTrivialDelegate) {
    penalize('trivialDelegate', 20, '简单委托/包装函数');
  }

  if (/^anonymous_\d+$/.test(profile.functionName) && profile.codeLength < 120) {
    penalize('anonymousCallback', 12, '短匿名回调');
  }

  if (profile.functionName.startsWith('_0x') && profile.isObfuscatorDecoder) {
    penalize('obfuscatedHelper', 10, '混淆辅助函数');
  }

  return { total, breakdown };
}

function inferTaskDescription(opts, targetProfile) {
  if (opts.taskDescription) {
    return opts.taskDescription;
  }
  if (targetProfile?.kind === 'object' && targetProfile.objectSample) {
    return `寻找控制台console.log输出的${JSON.stringify(targetProfile.objectSample)}中的目标字段值是在哪个函数生成并赋予的`;
  }
  if (targetProfile?.raw) {
    return `寻找生成目标值 ${targetProfile.raw} 的函数，输出 Sink 为 console.log`;
  }
  return DEFAULT_TASK;
}

function hasValueTargetInput(opts) {
  return Boolean(opts.value || opts.prefix || opts.valuePattern || opts.objectJson || opts.objectFile);
}

function hasStructuralInput(opts) {
  return Boolean(opts.taskDescription || opts.sinks.length);
}

function resolveSelectionMode(opts) {
  if (opts.mode === 'value' || opts.mode === 'structural' || opts.mode === 'hybrid') {
    return opts.mode;
  }
  throw new Error(`未知 --mode: ${opts.mode}`);
}

function buildStructuralBreakdown(prior) {
  if (!prior) {
    return [];
  }
  const safe = (value, digits = 6) => {
    const n = Number(value);
    return Number.isFinite(n) ? n.toFixed(digits) : (0).toFixed(digits);
  };
  const safeNumber = (value) => {
    const n = Number(value);
    return Number.isFinite(n) ? n : 0;
  };
  return [
    {
      feature: 'structural:p0',
      score: Number((safeNumber(prior.prob) * 100).toFixed(2)),
      reason: `结构先验概率 p_0=${safe(prior.prob, 6)}`
    },
    {
      feature: 'structural:S_ast',
      score: Number((safeNumber(prior.ast_score) * 10).toFixed(2)),
      reason: `AST 子树指纹 ${safe(prior.ast_score, 4)}`
    },
    {
      feature: 'structural:S_api',
      score: Number((safeNumber(prior.api_score) * 10).toFixed(2)),
      reason: `API 调用/下游邻近 ${safe(prior.api_score, 4)}`
    },
    {
      feature: 'structural:S_ent',
      score: Number((safeNumber(prior.entropy_score) * 10).toFixed(2)),
      reason: `值操作熵 ${safe(prior.entropy_score, 4)}`
    },
    {
      feature: 'structural:S_sink',
      score: Number((safeNumber(prior.sink_proximity) * 100).toFixed(2)),
      reason: `Sink 接近度 ${safe(prior.sink_proximity, 4)}`
    }
  ];
}

/**
 * @param {Array<{ confidence: number }>} items
 * @returns {Array}
 */
function rankByConfidence(items) {
  return items
    .sort((a, b) => b.confidence - a.confidence || a.functionName.localeCompare(b.functionName))
    .map((item, idx) => ({ ...item, rank: idx + 1 }));
}

/**
 * @param {number[]} rawScores
 * @param {number} [temperature=1]
 * @returns {number[]}
 */
function scoresToConfidence(rawScores, temperature = 1) {
  return softmaxNormalize(rawScores, temperature);
}

function mapStructuralPriorToAnchor(record, prior) {
  const profile = buildFunctionProfile(record);
  const confidence = prior?.prob || 0;
  return {
    rank: 0,
    tag: profile.tag,
    functionName: profile.functionName,
    scriptUrl: profile.scriptUrl,
    location: profile.location,
    tags: profile.tags,
    confidence,
    score: Number((confidence * 100).toFixed(2)),
    breakdown: buildStructuralBreakdown(prior),
    structuralPrior: prior
      ? {
        prob: prior.prob,
        combined_score: prior.combined_score,
        ast_score: prior.ast_score,
        api_score: prior.api_score,
        api_direct_score: prior.api_direct_score,
        api_proximity_score: prior.api_proximity_score,
        entropy_score: prior.entropy_score,
        sink_proximity: prior.sink_proximity
      }
      : null,
    profile: {
      returnShape: profile.returnShape,
      stringOps: profile.stringOps,
      encodeHits: profile.encodeHits,
      apiCalls: profile.apiCalls,
      matchedLiterals: profile.stringLiterals.slice(0, 5)
    }
  };
}

function selectAnchorsStructural(records, structuralResult) {
  const recordByTag = new Map(records.map((record) => [record.tag, record]));
  const items = (structuralResult.distribution || [])
    .map((prior) => {
      const record = recordByTag.get(prior.func_id);
      return record ? mapStructuralPriorToAnchor(record, prior) : null;
    })
    .filter(Boolean);
  return rankByConfidence(items);
}

function selectAnchorsHybrid(records, targetProfile, networkIndex, structuralResult, blendWeights) {
  const priorByTag = new Map((structuralResult.distribution || []).map((item) => [item.func_id, item]));
  const valueWeight = blendWeights.value;
  const structuralWeight = blendWeights.structural;
  const weightSum = valueWeight + structuralWeight || 1;

  const items = records.map((record) => {
    const profile = buildFunctionProfile(record);
    const valueScoring = scoreFunction(profile, targetProfile, networkIndex);
    const prior = priorByTag.get(profile.tag);
    const valuePart = valueScoring.total;
    const structuralPart = (prior?.prob || 0) * 100;
    const blendedScore = (valueWeight * valuePart + structuralWeight * structuralPart) / weightSum;

    return {
      rank: 0,
      tag: profile.tag,
      functionName: profile.functionName,
      scriptUrl: profile.scriptUrl,
      location: profile.location,
      tags: profile.tags,
      confidence: 0,
      rawScore: blendedScore,
      score: Number(blendedScore.toFixed(2)),
      valueScore: valuePart,
      structuralProb: prior?.prob || 0,
      breakdown: [
        ...valueScoring.breakdown.map((item) => ({
          ...item,
          feature: `value:${item.feature}`
        })),
        ...buildStructuralBreakdown(prior)
      ],
      structuralPrior: prior
        ? {
          prob: prior.prob,
          combined_score: prior.combined_score,
          ast_score: prior.ast_score,
          api_score: prior.api_score,
          api_direct_score: prior.api_direct_score,
          api_proximity_score: prior.api_proximity_score,
          entropy_score: prior.entropy_score,
          sink_proximity: prior.sink_proximity
        }
        : null,
      profile: {
        returnShape: profile.returnShape,
        stringOps: profile.stringOps,
        encodeHits: profile.encodeHits,
        apiCalls: profile.apiCalls,
        matchedLiterals: profile.stringLiterals.filter(
          (lit) => !targetProfile.prefix || lit.includes(targetProfile.prefix.replace(/-$/, ''))
        ).slice(0, 5)
      }
    };
  });

  const confidences = scoresToConfidence(items.map((item) => item.rawScore));
  for (let i = 0; i < items.length; i += 1) {
    items[i].confidence = confidences[i];
    items[i].score = Number((items[i].confidence * 100).toFixed(2));
  }

  return rankByConfidence(items);
}

function selectAnchorsValue(records, targetProfile, networkIndex) {
  const items = records.map((record) => {
    const profile = buildFunctionProfile(record);
    const scoring = scoreFunction(profile, targetProfile, networkIndex);
    return {
      rank: 0,
      tag: profile.tag,
      functionName: profile.functionName,
      scriptUrl: profile.scriptUrl,
      location: profile.location,
      tags: profile.tags,
      confidence: 0,
      rawScore: scoring.total,
      score: scoring.total,
      breakdown: scoring.breakdown,
      profile: {
        returnShape: profile.returnShape,
        stringOps: profile.stringOps,
        encodeHits: profile.encodeHits,
        apiCalls: profile.apiCalls,
        matchedLiterals: profile.stringLiterals.filter(
          (lit) => !targetProfile.prefix || lit.includes(targetProfile.prefix.replace(/-$/, ''))
        ).slice(0, 5)
      }
    };
  });

  const confidences = scoresToConfidence(items.map((item) => item.rawScore));
  for (let i = 0; i < items.length; i += 1) {
    items[i].confidence = confidences[i];
  }

  return rankByConfidence(items);
}

/** @deprecated 使用 selectAnchorsStructural */
function selectTopAnchorsStructural(records, structuralResult, topK) {
  return selectAnchorsStructural(records, structuralResult).slice(0, topK);
}

/** @deprecated 使用 selectAnchorsHybrid */
function selectTopAnchorsHybrid(records, targetProfile, networkIndex, structuralResult, topK, blendWeights) {
  return selectAnchorsHybrid(records, targetProfile, networkIndex, structuralResult, blendWeights).slice(0, topK);
}

/** @deprecated 使用 selectAnchorsValue */
function selectTopAnchors(records, targetProfile, networkIndex, topK) {
  return selectAnchorsValue(records, targetProfile, networkIndex).slice(0, topK);
}

function printReport(targetProfile, distribution, totalCount, extra = {}) {
  const displayTopK = extra.displayTopK || distribution.length;
  const anchors = distribution.slice(0, displayTopK);
  console.log('\n=== 目标值特征 (Phase 1) ===');
  if (targetProfile?.kind === 'object') {
    console.log(`类型: object (${targetProfile.fieldKeys?.length || 0} 个字段)`);
    console.log(JSON.stringify({
      kind: targetProfile.kind,
      objectSample: targetProfile.objectSample,
      objectFields: targetProfile.objectFields,
      fieldKeys: targetProfile.fieldKeys,
      semanticHints: targetProfile.semanticHints
    }, null, 2));
  } else if (targetProfile) {
    console.log(JSON.stringify(targetProfile, null, 2));
  } else {
    console.log('（结构先验模式：未提供值目标特征）');
  }

  if (extra.mode) {
    console.log(`\n选择模式: ${extra.mode}`);
  }
  if (extra.taskDescription) {
    console.log(`任务描述: ${extra.taskDescription}`);
  }
  if (extra.sinkApis?.length) {
    console.log(`Sink API: ${extra.sinkApis.join(', ')}`);
  }
  if (extra.structuralPrior) {
    console.log(`结构先验: ${extra.structuralPrior.candidateCount} 候选, ${extra.structuralPrior.sinkNodeCount} 个 Sink 节点`);
  }

  console.log(`\n=== Top ${anchors.length} 锚点 (Phase 2, 共 ${totalCount} 个函数，JSON 含全部置信度) ===\n`);
  for (const anchor of anchors) {
    console.log(`#${anchor.rank}  confidence=${anchor.confidence.toFixed(6)}  score=${anchor.score}  ${anchor.functionName}`);
    console.log(`    tag: ${anchor.tag}`);
    console.log(`    loc: line ${anchor.location?.line}, col ${anchor.location?.column}`);
    console.log(`    tags: ${(anchor.tags || []).join(', ') || '-'}`);
    if (anchor.structuralPrior) {
      console.log(
        `    p_0=${anchor.structuralPrior.prob.toFixed(6)}  S_sink=${anchor.structuralPrior.sink_proximity.toFixed(4)}`
      );
    }
    console.log(
      `    signals: returnString=${anchor.profile.returnShape.returnsString}, highEntropy=${anchor.profile.returnShape.returnsHighEntropy}, stringOps=${anchor.profile.stringOps}, encode=${anchor.profile.encodeHits}`
    );
    console.log('    breakdown:');
    for (const item of anchor.breakdown) {
      const sign = item.score >= 0 ? '+' : '';
      console.log(`      ${sign}${item.score}\t${item.feature}\t${item.reason}`);
    }
    console.log('');
  }
}

/**
 * 程序化执行 TC1 锚点选择（供 Anchor Agent 调用）
 * @param {object} opts 与 parseArgs 返回值结构相同
 * @returns {object} anchor-selection 输出对象
 */
function runSelectAnchors(opts) {
  const mode = resolveSelectionMode(opts);
  const useValue = mode === 'value' || mode === 'hybrid';
  const useStructural = mode === 'structural' || mode === 'hybrid';

  if (useValue && !hasValueTargetInput(opts)) {
    throw new Error(
      '当前模式需要目标值输入：请提供 --value、--prefix 或 --object / --object-file；'
      + '若仅使用结构先验，请使用 --mode structural 并提供 --task 或 --sink。'
    );
  }

  if (useStructural && !hasStructuralInput(opts) && !hasValueTargetInput(opts)) {
    throw new Error('结构先验需要 --task 或 --sink；或在 hybrid 模式下提供目标值以自动推断任务描述。');
  }

  const dedupedPayload = loadJson(opts.deduped);
  if (!dedupedPayload?.records?.length) {
    throw new Error(`无效的 deduped 文件: ${opts.deduped}`);
  }

  const lookupPayload = loadJson(opts.lookup);
  const networkIndex = lookupPayload ? buildNetworkDistanceIndex(lookupPayload) : null;

  let targetProfile = null;
  if (hasValueTargetInput(opts)) {
    if (opts.objectJson || opts.objectFile) {
      const obj = parseTargetObjectInput(opts.objectJson, opts.objectFile);
      targetProfile = profileTargetObject(obj);
    } else if (opts.valuePattern && !opts.value) {
      targetProfile = profileTargetPattern(opts.valuePattern, opts.prefix);
    } else {
      targetProfile = profileTargetValue(opts.value || opts.prefix, opts.prefix);
      if (!targetProfile.prefix && opts.prefix) targetProfile.prefix = opts.prefix;
      if (opts.valuePattern) targetProfile.valuePattern = opts.valuePattern;
    }
  }

  const taskDescription = inferTaskDescription(opts, targetProfile);
  let structuralResult = null;

  if (useStructural) {
    structuralResult = runStructuralPrior({
      dedupedFile: opts.deduped,
      taskDescription,
      targetProfile,
      sinkApis: opts.sinks,
      priorTemperature: opts.priorTemperature,
      cacheFile: opts.noCache ? null : opts.cache,
      useCache: !opts.noCache
    });
  }

  let distribution;
  let effectiveMode = mode;

  if (mode === 'structural') {
    distribution = selectAnchorsStructural(dedupedPayload.records, structuralResult);
  } else if (mode === 'hybrid') {
    distribution = selectAnchorsHybrid(
      dedupedPayload.records,
      targetProfile,
      networkIndex,
      structuralResult,
      { value: opts.valueWeight, structural: opts.structuralWeight }
    );
  } else {
    distribution = selectAnchorsValue(
      dedupedPayload.records,
      targetProfile,
      networkIndex
    );
    effectiveMode = 'value';
  }

  const confidenceSum = distribution.reduce((acc, item) => acc + item.confidence, 0);

  const output = {
    generatedAt: new Date().toISOString(),
    sourceFiles: {
      deduped: opts.deduped,
      lookup: lookupPayload ? opts.lookup : null,
      structuralCache: useStructural && !opts.noCache ? opts.cache : null
    },
    selectionMode: effectiveMode,
    taskDescription: useStructural ? taskDescription : null,
    blendWeights: mode === 'hybrid'
      ? { value: opts.valueWeight, structural: opts.structuralWeight }
      : null,
    targetProfile,
    scoreWeights: SCORE_WEIGHTS,
    structuralPrior: structuralResult
      ? {
        sinkApis: structuralResult.sinkApis,
        sinkTags: structuralResult.sinkTags,
        sinkNodeCount: structuralResult.sinkNodeCount,
        callGraphStats: structuralResult.callGraphStats,
        candidateCount: structuralResult.candidateCount,
        taskKeywords: structuralResult.taskKeywords || []
      }
      : null,
    summary: {
      candidateCount: dedupedPayload.records.length,
      distributionCount: distribution.length,
      confidenceSum: Number(confidenceSum.toFixed(6)),
      displayTopK: opts.topK
    },
    distribution,
    anchors: distribution
  };

  return output;
}

function main() {
  const opts = parseArgs(process.argv);
  if (opts.help) {
    printHelp();
    process.exit(0);
  }

  const output = runSelectAnchors(opts);
  fs.mkdirSync(path.dirname(opts.out), { recursive: true });
  fs.writeFileSync(opts.out, JSON.stringify(output, null, 2), 'utf8');
  printReport(
    output.targetProfile,
    output.distribution,
    output.summary.candidateCount,
    {
      mode: output.selectionMode,
      displayTopK: opts.topK,
      taskDescription: output.taskDescription,
      sinkApis: output.structuralPrior?.sinkApis || opts.sinks,
      structuralPrior: output.structuralPrior
    }
  );
  console.log(`结果已写入: ${opts.out}`);
}

if (require.main === module) {
  main();
}

module.exports = {
  parseArgs,
  runSelectAnchors,
  inferTaskDescription,
  selectAnchorsStructural,
  selectAnchorsHybrid,
  selectAnchorsValue,
  selectTopAnchors,
  selectTopAnchorsStructural,
  selectTopAnchorsHybrid,
  profileTargetValue,
  profileTargetObject,
  printReport,
  rankByConfidence
};
