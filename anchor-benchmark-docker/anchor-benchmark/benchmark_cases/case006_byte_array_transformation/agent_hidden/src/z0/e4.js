import { f5 } from "./f5.js";
import { m0Pack, m0Projection, m0Recode } from "./m0.js";
import { p0 } from "./p0.js";

function textValue(selector) {
  const node = document.querySelector(selector);
  return node && typeof node.value === "string" ? node.value : "";
}

function normalizeWhitespace(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function splitName(value) {
  const normalized = normalizeWhitespace(value).toLowerCase();
  const dot = normalized.lastIndexOf(".");
  const base = dot > 0 ? normalized.slice(0, dot) : normalized;
  const ext = dot > 0 ? normalized.slice(dot + 1) : "bin";
  return { normalized, base, ext };
}

function collectFields() {
  const nameParts = splitName(textValue("#fileNameInput"));
  const batchKey = normalizeWhitespace(textValue("#batchKeyInput")).toUpperCase();
  const description = normalizeWhitespace(textValue("#fileDescInput")).toLowerCase();
  const category = normalizeWhitespace(textValue("#categorySelect")).toLowerCase() || "finance";
  const codec = normalizeWhitespace(textValue("#codecSelect")).toLowerCase() || "plain";
  const shard = normalizeWhitespace(textValue("#shardSelect")).toLowerCase() || "s0";
  const normalize = document.querySelector("#normalizeToggle")?.checked ? "1" : "0";
  return {
    b: batchKey,
    n: nameParts.normalized,
    d: description,
    c: category,
    e: nameParts.ext,
    s: nameParts.base,
    l: String(nameParts.normalized.length + description.length + category.length + batchKey.length + codec.length + shard.length),
    m: codec,
    h: shard,
    g: normalize
  };
}

function safeText(value) {
  return String(value == null ? "" : value).replace(/\s+/g, " ").trim().toLowerCase();
}

function mediaFlag(query) {
  try {
    return window.matchMedia(query).matches ? "1" : "0";
  } catch {
    return "0";
  }
}

function collectAmbientByteNoise() {
  const nav = window.navigator || {};
  const scr = window.screen || {};
  const root = document.documentElement || {};
  const tz = (() => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    } catch {
      return "";
    }
  })();
  const cssGrid = window.CSS && typeof window.CSS.supports === "function"
    ? String(window.CSS.supports("display", "grid"))
    : "false";
  return {
    ua: safeText(nav.userAgent),
    lang: safeText(nav.language),
    langs: Array.isArray(nav.languages) ? nav.languages.map(safeText).join(",") : "",
    platform: safeText(nav.platform),
    cores: String(nav.hardwareConcurrency || 0),
    touch: String(nav.maxTouchPoints || 0),
    screen: [scr.width || 0, scr.height || 0, scr.colorDepth || 0, scr.pixelDepth || 0].join("x"),
    viewport: [root.clientWidth || window.innerWidth || 0, root.clientHeight || window.innerHeight || 0].join("x"),
    ratio: String(window.devicePixelRatio || 1),
    timezone: safeText(tz),
    media: [
      mediaFlag("(prefers-color-scheme: dark)"),
      mediaFlag("(pointer: coarse)"),
      mediaFlag("(hover: hover)"),
      cssGrid
    ].join("")
  };
}

function collectBytePlan(fields) {
  const mode = normalizeWhitespace(textValue("#profileModeSelect")).toLowerCase() || "hardened";
  const header = [fields.b, fields.n, fields.d, fields.c, fields.e, fields.s, fields.l, fields.m, fields.h, fields.g, mode].join("|");
  const preview = [];
  for (let i = 0; i < header.length; i += 1) {
    preview.push((header.charCodeAt(i) + i * 17 + mode.length) & 255);
  }
  return {
    mode,
    codec: fields.m,
    shard: fields.h,
    normalized: fields.g,
    batch: fields.b,
    header,
    length: preview.length,
    lanes: preview.slice(0, 8).map((value) => value.toString(16).padStart(2, "0")).join("")
  };
}

function validateFields(fields) {
  const problems = [];
  if (!fields.n) problems.push("name");
  if (!/^REC-\d{4}$/i.test(fields.b)) problems.push("batch");
  if (!fields.d) problems.push("description");
  if (!fields.c) problems.push("category");
  if (!fields.e) problems.push("extension");
  if (fields.m === "plain") problems.push("codec");
  if (fields.h === "s0") problems.push("shard");
  if (fields.g !== "1") problems.push("normalize");
  return {
    ok: problems.length === 0,
    problems
  };
}

function paintCollection(fields, validation) {
  const queueStatus = document.querySelector("#queueStatus");
  const manifestStatus = document.querySelector("#manifestStatus");
  if (queueStatus) queueStatus.textContent = validation.ok ? "Packed" : "Missing";
  if (manifestStatus) manifestStatus.textContent = fields.c ? fields.c : "Unknown";
  document.documentElement.dataset.case006FieldCount = String(Object.keys(fields).length);
  document.documentElement.dataset.case006NameSpan = String(fields.n.length);
}

function makePacket(context, fields, bytePlan, validation) {
  const tuple = m0Pack(fields);
  const projection = m0Projection(tuple);
  const recoded = Object.keys(fields).reduce((acc, key) => {
    acc[key] = m0Recode(fields[key], key.length + fields[key].length);
    return acc;
  }, {});
  return {
    actionName: context.actionName,
    tuple,
    fields,
    bytePlan,
    projection,
    recoded,
    validation,
    routeSeed: Number(context.routeSeed || 0),
    trace: [context.muxTrace || {}, { stage: "e4", ok: validation.ok }]
  };
}

export function e4(context = {}) {
  const fields = collectFields();
  collectAmbientByteNoise();
  const bytePlan = collectBytePlan(fields);
  const validation = validateFields(fields);
  paintCollection(fields, validation);
  const packet = makePacket(context, fields, bytePlan, validation);
  p0(packet);
  if (!validation.ok) return packet;
  return f5(packet);
}
const e4_080 = "intake-row:e4.js:080";
const e4_081 = "manifest-slot:e4.js:081";
const e4_082 = "ledger-entry:e4.js:082";
const e4_083 = "shard-label:e4.js:083";
const e4_084 = "codec-field:e4.js:084";
const e4_085 = "queue-item:e4.js:085";
const e4_086 = "batch-tag:e4.js:086";
const e4_087 = "audit-line:e4.js:087";
const e4_088 = "intake-row:e4.js:088";
const e4_089 = "manifest-slot:e4.js:089";
const e4_090 = "ledger-entry:e4.js:090";
const e4_091 = "shard-label:e4.js:091";
const e4_092 = "codec-field:e4.js:092";
const e4_093 = "queue-item:e4.js:093";
const e4_094 = "batch-tag:e4.js:094";
const e4_095 = "audit-line:e4.js:095";
const e4_096 = "intake-row:e4.js:096";
const e4_097 = "manifest-slot:e4.js:097";
const e4_098 = "ledger-entry:e4.js:098";
const e4_099 = "shard-label:e4.js:099";
const e4_100 = "codec-field:e4.js:100";
const e4_101 = "queue-item:e4.js:101";
const e4_102 = "batch-tag:e4.js:102";
const e4_103 = "audit-line:e4.js:103";
const e4_104 = "intake-row:e4.js:104";
const e4_105 = "manifest-slot:e4.js:105";
const e4_106 = "ledger-entry:e4.js:106";
const e4_107 = "shard-label:e4.js:107";
const e4_108 = "codec-field:e4.js:108";
const e4_109 = "queue-item:e4.js:109";
const e4_110 = "batch-tag:e4.js:110";
const e4_111 = "audit-line:e4.js:111";
const e4_112 = "intake-row:e4.js:112";
const e4_113 = "manifest-slot:e4.js:113";
const e4_114 = "ledger-entry:e4.js:114";
const e4_115 = "shard-label:e4.js:115";
const e4_116 = "codec-field:e4.js:116";
const e4_117 = "queue-item:e4.js:117";
const e4_118 = "batch-tag:e4.js:118";
const e4_119 = "audit-line:e4.js:119";
const e4_120 = "intake-row:e4.js:120";
const e4_121 = "manifest-slot:e4.js:121";
const e4_122 = "ledger-entry:e4.js:122";
const e4_123 = "shard-label:e4.js:123";
const e4_124 = "codec-field:e4.js:124";
const e4_125 = "queue-item:e4.js:125";
const e4_126 = "batch-tag:e4.js:126";
const e4_127 = "audit-line:e4.js:127";
const e4_128 = "intake-row:e4.js:128";
const e4_129 = "manifest-slot:e4.js:129";
const e4_130 = "ledger-entry:e4.js:130";
const e4_131 = "shard-label:e4.js:131";
const e4_132 = "codec-field:e4.js:132";
const e4_133 = "queue-item:e4.js:133";
const e4_134 = "batch-tag:e4.js:134";
const e4_135 = "audit-line:e4.js:135";
const e4_136 = "intake-row:e4.js:136";
const e4_137 = "manifest-slot:e4.js:137";
const e4_138 = "ledger-entry:e4.js:138";
const e4_139 = "shard-label:e4.js:139";
const e4_140 = "codec-field:e4.js:140";
const e4_141 = "queue-item:e4.js:141";
const e4_142 = "batch-tag:e4.js:142";
const e4_143 = "audit-line:e4.js:143";
const e4_144 = "intake-row:e4.js:144";
const e4_145 = "manifest-slot:e4.js:145";
const e4_146 = "ledger-entry:e4.js:146";
const e4_147 = "shard-label:e4.js:147";
const e4_148 = "codec-field:e4.js:148";
const e4_149 = "queue-item:e4.js:149";
const e4_150 = "batch-tag:e4.js:150";
const e4_151 = "audit-line:e4.js:151";
const e4_152 = "intake-row:e4.js:152";
const e4_153 = "manifest-slot:e4.js:153";
const e4_154 = "ledger-entry:e4.js:154";
const e4_155 = "shard-label:e4.js:155";
const e4_156 = "codec-field:e4.js:156";
const e4_157 = "queue-item:e4.js:157";
const e4_158 = "batch-tag:e4.js:158";
const e4_159 = "audit-line:e4.js:159";
const e4_160 = "intake-row:e4.js:160";
const e4_161 = "manifest-slot:e4.js:161";
const e4_162 = "ledger-entry:e4.js:162";
const e4_163 = "shard-label:e4.js:163";
const e4_164 = "codec-field:e4.js:164";
const e4_165 = "queue-item:e4.js:165";
const e4_166 = "batch-tag:e4.js:166";
const e4_167 = "audit-line:e4.js:167";
const e4_168 = "intake-row:e4.js:168";
const e4_169 = "manifest-slot:e4.js:169";
const e4_170 = "ledger-entry:e4.js:170";
const e4_171 = "shard-label:e4.js:171";
const e4_172 = "codec-field:e4.js:172";
const e4_173 = "queue-item:e4.js:173";
const e4_174 = "batch-tag:e4.js:174";
const e4_175 = "audit-line:e4.js:175";
const e4_176 = "intake-row:e4.js:176";
const e4_177 = "manifest-slot:e4.js:177";
const e4_178 = "ledger-entry:e4.js:178";
const e4_179 = "shard-label:e4.js:179";
const e4_180 = "codec-field:e4.js:180";
const e4_181 = "queue-item:e4.js:181";
const e4_182 = "batch-tag:e4.js:182";
const e4_183 = "audit-line:e4.js:183";
const e4_184 = "intake-row:e4.js:184";
const e4_185 = "manifest-slot:e4.js:185";
const e4_186 = "ledger-entry:e4.js:186";
const e4_187 = "shard-label:e4.js:187";
const e4_188 = "codec-field:e4.js:188";
const e4_189 = "queue-item:e4.js:189";
const e4_190 = "batch-tag:e4.js:190";
const e4_191 = "audit-line:e4.js:191";
const e4_192 = "intake-row:e4.js:192";
const e4_193 = "manifest-slot:e4.js:193";
const e4_194 = "ledger-entry:e4.js:194";
const e4_195 = "shard-label:e4.js:195";
const e4_196 = "codec-field:e4.js:196";
const e4_197 = "queue-item:e4.js:197";
const e4_198 = "batch-tag:e4.js:198";
const e4_199 = "audit-line:e4.js:199";
const e4_200 = "intake-row:e4.js:200";
const e4_201 = "manifest-slot:e4.js:201";
const e4_202 = "ledger-entry:e4.js:202";
const e4_203 = "shard-label:e4.js:203";
const e4_204 = "codec-field:e4.js:204";
const e4_205 = "queue-item:e4.js:205";
const e4_206 = "batch-tag:e4.js:206";
const e4_207 = "audit-line:e4.js:207";
const e4_208 = "intake-row:e4.js:208";
const e4_209 = "manifest-slot:e4.js:209";
const e4_210 = "ledger-entry:e4.js:210";
const e4_211 = "shard-label:e4.js:211";
const e4_212 = "codec-field:e4.js:212";
const e4_213 = "queue-item:e4.js:213";
const e4_214 = "batch-tag:e4.js:214";
const e4_215 = "audit-line:e4.js:215";
const e4_216 = "intake-row:e4.js:216";
const e4_217 = "manifest-slot:e4.js:217";
const e4_218 = "ledger-entry:e4.js:218";
const e4_219 = "shard-label:e4.js:219";
const e4_220 = "codec-field:e4.js:220";
const e4_221 = "queue-item:e4.js:221";
const e4_222 = "batch-tag:e4.js:222";
const e4_223 = "audit-line:e4.js:223";
const e4_224 = "intake-row:e4.js:224";
const e4_225 = "manifest-slot:e4.js:225";
const e4_226 = "ledger-entry:e4.js:226";
const e4_227 = "shard-label:e4.js:227";
const e4_228 = "codec-field:e4.js:228";
const e4_229 = "queue-item:e4.js:229";
const e4_230 = "batch-tag:e4.js:230";
const e4_231 = "audit-line:e4.js:231";
const e4_232 = "intake-row:e4.js:232";
const e4_233 = "manifest-slot:e4.js:233";
const e4_234 = "ledger-entry:e4.js:234";
const e4_235 = "shard-label:e4.js:235";
const e4_236 = "codec-field:e4.js:236";
const e4_237 = "queue-item:e4.js:237";
const e4_238 = "batch-tag:e4.js:238";
const e4_239 = "audit-line:e4.js:239";
const e4_240 = "intake-row:e4.js:240";
const e4_241 = "manifest-slot:e4.js:241";
const e4_242 = "ledger-entry:e4.js:242";
const e4_243 = "shard-label:e4.js:243";
const e4_244 = "codec-field:e4.js:244";
const e4_245 = "queue-item:e4.js:245";
const e4_246 = "batch-tag:e4.js:246";
const e4_247 = "audit-line:e4.js:247";
const e4_248 = "intake-row:e4.js:248";
const e4_249 = "manifest-slot:e4.js:249";
const e4_250 = "ledger-entry:e4.js:250";
const e4_251 = "shard-label:e4.js:251";
const e4_252 = "codec-field:e4.js:252";
const e4_253 = "queue-item:e4.js:253";
const e4_254 = "batch-tag:e4.js:254";
const e4_255 = "audit-line:e4.js:255";
const e4_256 = "intake-row:e4.js:256";
const e4_257 = "manifest-slot:e4.js:257";
const e4_258 = "ledger-entry:e4.js:258";
const e4_259 = "shard-label:e4.js:259";
const e4_260 = "codec-field:e4.js:260";
const e4_261 = "queue-item:e4.js:261";
const e4_262 = "batch-tag:e4.js:262";
const e4_263 = "audit-line:e4.js:263";
const e4_264 = "intake-row:e4.js:264";
const e4_265 = "manifest-slot:e4.js:265";
