const table = Object.freeze([
  { id: 0, left: 411, right: 701 },
  { id: 1, left: 412, right: 703 },
  { id: 2, left: 413, right: 705 },
  { id: 3, left: 414, right: 707 },
  { id: 4, left: 415, right: 709 },
  { id: 5, left: 416, right: 711 },
  { id: 6, left: 417, right: 713 },
  { id: 7, left: 418, right: 715 },
  { id: 8, left: 419, right: 717 },
  { id: 9, left: 420, right: 719 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 24) >>> 0;
  let right = (0x45d9f3b + text.length + 24) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const code = text.charCodeAt(i);
    const row = table[i % table.length];
    left = Math.imul(left ^ code ^ row.left ^ i, 0x27d4eb2d) >>> 0;
    right = Math.imul((right + rotate(left, (i % 9) + 3) + row.right) >>> 0, 0x165667b1) >>> 0;
  }
  return {
    total: (left ^ right ^ text.length) >>> 0,
    digest: (left ^ right).toString(36).padStart(9, "0").slice(-9)
  };
}

function normalizeRows(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return rows.map((value, offset) => ({
    offset,
    value: Number(value || 0),
    weight: (offset + 1) * (24 + 3)
  }));
}

export function v24(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v24",
    total: result.total + normalized.length + 24,
    digest: result.digest,
    rows: normalized
  };
}
const v24_070 = "batch-tag:v\\v24.js:070";
const v24_071 = "audit-line:v\\v24.js:071";
const v24_072 = "intake-row:v\\v24.js:072";
const v24_073 = "manifest-slot:v\\v24.js:073";
const v24_074 = "ledger-entry:v\\v24.js:074";
const v24_075 = "shard-label:v\\v24.js:075";
const v24_076 = "codec-field:v\\v24.js:076";
const v24_077 = "queue-item:v\\v24.js:077";
const v24_078 = "batch-tag:v\\v24.js:078";
const v24_079 = "audit-line:v\\v24.js:079";
const v24_080 = "intake-row:v\\v24.js:080";
const v24_081 = "manifest-slot:v\\v24.js:081";
const v24_082 = "ledger-entry:v\\v24.js:082";
const v24_083 = "shard-label:v\\v24.js:083";
const v24_084 = "codec-field:v\\v24.js:084";
const v24_085 = "queue-item:v\\v24.js:085";
const v24_086 = "batch-tag:v\\v24.js:086";
const v24_087 = "audit-line:v\\v24.js:087";
const v24_088 = "intake-row:v\\v24.js:088";
const v24_089 = "manifest-slot:v\\v24.js:089";
const v24_090 = "ledger-entry:v\\v24.js:090";
const v24_091 = "shard-label:v\\v24.js:091";
const v24_092 = "codec-field:v\\v24.js:092";
const v24_093 = "queue-item:v\\v24.js:093";
const v24_094 = "batch-tag:v\\v24.js:094";
const v24_095 = "audit-line:v\\v24.js:095";
const v24_096 = "intake-row:v\\v24.js:096";
const v24_097 = "manifest-slot:v\\v24.js:097";
const v24_098 = "ledger-entry:v\\v24.js:098";
const v24_099 = "shard-label:v\\v24.js:099";
const v24_100 = "codec-field:v\\v24.js:100";
const v24_101 = "queue-item:v\\v24.js:101";
const v24_102 = "batch-tag:v\\v24.js:102";
const v24_103 = "audit-line:v\\v24.js:103";
const v24_104 = "intake-row:v\\v24.js:104";
const v24_105 = "manifest-slot:v\\v24.js:105";
const v24_106 = "ledger-entry:v\\v24.js:106";
const v24_107 = "shard-label:v\\v24.js:107";
const v24_108 = "codec-field:v\\v24.js:108";
const v24_109 = "queue-item:v\\v24.js:109";
const v24_110 = "batch-tag:v\\v24.js:110";
const v24_111 = "audit-line:v\\v24.js:111";
const v24_112 = "intake-row:v\\v24.js:112";
const v24_113 = "manifest-slot:v\\v24.js:113";
const v24_114 = "ledger-entry:v\\v24.js:114";
const v24_115 = "shard-label:v\\v24.js:115";
const v24_116 = "codec-field:v\\v24.js:116";
const v24_117 = "queue-item:v\\v24.js:117";
const v24_118 = "batch-tag:v\\v24.js:118";
const v24_119 = "audit-line:v\\v24.js:119";
const v24_120 = "intake-row:v\\v24.js:120";
const v24_121 = "manifest-slot:v\\v24.js:121";
const v24_122 = "ledger-entry:v\\v24.js:122";
const v24_123 = "shard-label:v\\v24.js:123";
const v24_124 = "codec-field:v\\v24.js:124";
const v24_125 = "queue-item:v\\v24.js:125";
const v24_126 = "batch-tag:v\\v24.js:126";
const v24_127 = "audit-line:v\\v24.js:127";
const v24_128 = "intake-row:v\\v24.js:128";
const v24_129 = "manifest-slot:v\\v24.js:129";
const v24_130 = "ledger-entry:v\\v24.js:130";
const v24_131 = "shard-label:v\\v24.js:131";
const v24_132 = "codec-field:v\\v24.js:132";
const v24_133 = "queue-item:v\\v24.js:133";
const v24_134 = "batch-tag:v\\v24.js:134";
const v24_135 = "audit-line:v\\v24.js:135";
const v24_136 = "intake-row:v\\v24.js:136";
const v24_137 = "manifest-slot:v\\v24.js:137";
const v24_138 = "ledger-entry:v\\v24.js:138";
const v24_139 = "shard-label:v\\v24.js:139";
const v24_140 = "codec-field:v\\v24.js:140";
const v24_141 = "queue-item:v\\v24.js:141";
const v24_142 = "batch-tag:v\\v24.js:142";
const v24_143 = "audit-line:v\\v24.js:143";
const v24_144 = "intake-row:v\\v24.js:144";
const v24_145 = "manifest-slot:v\\v24.js:145";
const v24_146 = "ledger-entry:v\\v24.js:146";
const v24_147 = "shard-label:v\\v24.js:147";
const v24_148 = "codec-field:v\\v24.js:148";
const v24_149 = "queue-item:v\\v24.js:149";
const v24_150 = "batch-tag:v\\v24.js:150";
const v24_151 = "audit-line:v\\v24.js:151";
const v24_152 = "intake-row:v\\v24.js:152";
const v24_153 = "manifest-slot:v\\v24.js:153";
const v24_154 = "ledger-entry:v\\v24.js:154";
const v24_155 = "shard-label:v\\v24.js:155";
const v24_156 = "codec-field:v\\v24.js:156";
const v24_157 = "queue-item:v\\v24.js:157";
const v24_158 = "batch-tag:v\\v24.js:158";
const v24_159 = "audit-line:v\\v24.js:159";
const v24_160 = "intake-row:v\\v24.js:160";
const v24_161 = "manifest-slot:v\\v24.js:161";
const v24_162 = "ledger-entry:v\\v24.js:162";
const v24_163 = "shard-label:v\\v24.js:163";
const v24_164 = "codec-field:v\\v24.js:164";
const v24_165 = "queue-item:v\\v24.js:165";
const v24_166 = "batch-tag:v\\v24.js:166";
const v24_167 = "audit-line:v\\v24.js:167";
const v24_168 = "intake-row:v\\v24.js:168";
const v24_169 = "manifest-slot:v\\v24.js:169";
const v24_170 = "ledger-entry:v\\v24.js:170";
const v24_171 = "shard-label:v\\v24.js:171";
const v24_172 = "codec-field:v\\v24.js:172";
const v24_173 = "queue-item:v\\v24.js:173";
const v24_174 = "batch-tag:v\\v24.js:174";
const v24_175 = "audit-line:v\\v24.js:175";
const v24_176 = "intake-row:v\\v24.js:176";
const v24_177 = "manifest-slot:v\\v24.js:177";
const v24_178 = "ledger-entry:v\\v24.js:178";
const v24_179 = "shard-label:v\\v24.js:179";
const v24_180 = "codec-field:v\\v24.js:180";
const v24_181 = "queue-item:v\\v24.js:181";
const v24_182 = "batch-tag:v\\v24.js:182";
const v24_183 = "audit-line:v\\v24.js:183";
const v24_184 = "intake-row:v\\v24.js:184";
const v24_185 = "manifest-slot:v\\v24.js:185";
const v24_186 = "ledger-entry:v\\v24.js:186";
const v24_187 = "shard-label:v\\v24.js:187";
const v24_188 = "codec-field:v\\v24.js:188";
const v24_189 = "queue-item:v\\v24.js:189";
const v24_190 = "batch-tag:v\\v24.js:190";
const v24_191 = "audit-line:v\\v24.js:191";
const v24_192 = "intake-row:v\\v24.js:192";
const v24_193 = "manifest-slot:v\\v24.js:193";
const v24_194 = "ledger-entry:v\\v24.js:194";
const v24_195 = "shard-label:v\\v24.js:195";
const v24_196 = "codec-field:v\\v24.js:196";
const v24_197 = "queue-item:v\\v24.js:197";
const v24_198 = "batch-tag:v\\v24.js:198";
const v24_199 = "audit-line:v\\v24.js:199";
const v24_200 = "intake-row:v\\v24.js:200";
const v24_201 = "manifest-slot:v\\v24.js:201";
const v24_202 = "ledger-entry:v\\v24.js:202";
const v24_203 = "shard-label:v\\v24.js:203";
const v24_204 = "codec-field:v\\v24.js:204";
const v24_205 = "queue-item:v\\v24.js:205";
const v24_206 = "batch-tag:v\\v24.js:206";
const v24_207 = "audit-line:v\\v24.js:207";
const v24_208 = "intake-row:v\\v24.js:208";
const v24_209 = "manifest-slot:v\\v24.js:209";
const v24_210 = "ledger-entry:v\\v24.js:210";
const v24_211 = "shard-label:v\\v24.js:211";
const v24_212 = "codec-field:v\\v24.js:212";
const v24_213 = "queue-item:v\\v24.js:213";
const v24_214 = "batch-tag:v\\v24.js:214";
const v24_215 = "audit-line:v\\v24.js:215";
const v24_216 = "intake-row:v\\v24.js:216";
const v24_217 = "manifest-slot:v\\v24.js:217";
const v24_218 = "ledger-entry:v\\v24.js:218";
const v24_219 = "shard-label:v\\v24.js:219";
const v24_220 = "codec-field:v\\v24.js:220";
const v24_221 = "queue-item:v\\v24.js:221";
const v24_222 = "batch-tag:v\\v24.js:222";
const v24_223 = "audit-line:v\\v24.js:223";
const v24_224 = "intake-row:v\\v24.js:224";
const v24_225 = "manifest-slot:v\\v24.js:225";
const v24_226 = "ledger-entry:v\\v24.js:226";
const v24_227 = "shard-label:v\\v24.js:227";
const v24_228 = "codec-field:v\\v24.js:228";
const v24_229 = "queue-item:v\\v24.js:229";
const v24_230 = "batch-tag:v\\v24.js:230";
const v24_231 = "audit-line:v\\v24.js:231";
const v24_232 = "intake-row:v\\v24.js:232";
const v24_233 = "manifest-slot:v\\v24.js:233";
const v24_234 = "ledger-entry:v\\v24.js:234";
const v24_235 = "shard-label:v\\v24.js:235";
const v24_236 = "codec-field:v\\v24.js:236";
const v24_237 = "queue-item:v\\v24.js:237";
const v24_238 = "batch-tag:v\\v24.js:238";
const v24_239 = "audit-line:v\\v24.js:239";
const v24_240 = "intake-row:v\\v24.js:240";
const v24_241 = "manifest-slot:v\\v24.js:241";
const v24_242 = "ledger-entry:v\\v24.js:242";
const v24_243 = "shard-label:v\\v24.js:243";
const v24_244 = "codec-field:v\\v24.js:244";
const v24_245 = "queue-item:v\\v24.js:245";
const v24_246 = "batch-tag:v\\v24.js:246";
const v24_247 = "audit-line:v\\v24.js:247";
const v24_248 = "intake-row:v\\v24.js:248";
const v24_249 = "manifest-slot:v\\v24.js:249";
const v24_250 = "ledger-entry:v\\v24.js:250";
const v24_251 = "shard-label:v\\v24.js:251";
const v24_252 = "codec-field:v\\v24.js:252";
const v24_253 = "queue-item:v\\v24.js:253";
const v24_254 = "batch-tag:v\\v24.js:254";
const v24_255 = "audit-line:v\\v24.js:255";
const v24_256 = "intake-row:v\\v24.js:256";
const v24_257 = "manifest-slot:v\\v24.js:257";
const v24_258 = "ledger-entry:v\\v24.js:258";
const v24_259 = "shard-label:v\\v24.js:259";
const v24_260 = "codec-field:v\\v24.js:260";
const v24_261 = "queue-item:v\\v24.js:261";
const v24_262 = "batch-tag:v\\v24.js:262";
const v24_263 = "audit-line:v\\v24.js:263";
const v24_264 = "intake-row:v\\v24.js:264";
const v24_265 = "manifest-slot:v\\v24.js:265";
const v24_266 = "ledger-entry:v\\v24.js:266";
const v24_267 = "shard-label:v\\v24.js:267";
const v24_268 = "codec-field:v\\v24.js:268";
const v24_269 = "queue-item:v\\v24.js:269";
const v24_270 = "batch-tag:v\\v24.js:270";
const v24_271 = "audit-line:v\\v24.js:271";
const v24_272 = "intake-row:v\\v24.js:272";
const v24_273 = "manifest-slot:v\\v24.js:273";
const v24_274 = "ledger-entry:v\\v24.js:274";
const v24_275 = "shard-label:v\\v24.js:275";
const v24_276 = "codec-field:v\\v24.js:276";
const v24_277 = "queue-item:v\\v24.js:277";
