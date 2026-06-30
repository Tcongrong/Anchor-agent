const table = Object.freeze([
  { id: 0, left: 275, right: 469 },
  { id: 1, left: 276, right: 471 },
  { id: 2, left: 277, right: 473 },
  { id: 3, left: 278, right: 475 },
  { id: 4, left: 279, right: 477 },
  { id: 5, left: 280, right: 479 },
  { id: 6, left: 281, right: 481 },
  { id: 7, left: 282, right: 483 },
  { id: 8, left: 283, right: 485 },
  { id: 9, left: 284, right: 487 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 16) >>> 0;
  let right = (0x45d9f3b + text.length + 16) >>> 0;
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
    weight: (offset + 1) * (16 + 3)
  }));
}

export function v16(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v16",
    total: result.total + normalized.length + 16,
    digest: result.digest,
    rows: normalized
  };
}
const v16_070 = "batch-tag:v\\v16.js:070";
const v16_071 = "audit-line:v\\v16.js:071";
const v16_072 = "intake-row:v\\v16.js:072";
const v16_073 = "manifest-slot:v\\v16.js:073";
const v16_074 = "ledger-entry:v\\v16.js:074";
const v16_075 = "shard-label:v\\v16.js:075";
const v16_076 = "codec-field:v\\v16.js:076";
const v16_077 = "queue-item:v\\v16.js:077";
const v16_078 = "batch-tag:v\\v16.js:078";
const v16_079 = "audit-line:v\\v16.js:079";
const v16_080 = "intake-row:v\\v16.js:080";
const v16_081 = "manifest-slot:v\\v16.js:081";
const v16_082 = "ledger-entry:v\\v16.js:082";
const v16_083 = "shard-label:v\\v16.js:083";
const v16_084 = "codec-field:v\\v16.js:084";
const v16_085 = "queue-item:v\\v16.js:085";
const v16_086 = "batch-tag:v\\v16.js:086";
const v16_087 = "audit-line:v\\v16.js:087";
const v16_088 = "intake-row:v\\v16.js:088";
const v16_089 = "manifest-slot:v\\v16.js:089";
const v16_090 = "ledger-entry:v\\v16.js:090";
const v16_091 = "shard-label:v\\v16.js:091";
const v16_092 = "codec-field:v\\v16.js:092";
const v16_093 = "queue-item:v\\v16.js:093";
const v16_094 = "batch-tag:v\\v16.js:094";
const v16_095 = "audit-line:v\\v16.js:095";
const v16_096 = "intake-row:v\\v16.js:096";
const v16_097 = "manifest-slot:v\\v16.js:097";
const v16_098 = "ledger-entry:v\\v16.js:098";
const v16_099 = "shard-label:v\\v16.js:099";
const v16_100 = "codec-field:v\\v16.js:100";
const v16_101 = "queue-item:v\\v16.js:101";
const v16_102 = "batch-tag:v\\v16.js:102";
const v16_103 = "audit-line:v\\v16.js:103";
const v16_104 = "intake-row:v\\v16.js:104";
const v16_105 = "manifest-slot:v\\v16.js:105";
const v16_106 = "ledger-entry:v\\v16.js:106";
const v16_107 = "shard-label:v\\v16.js:107";
const v16_108 = "codec-field:v\\v16.js:108";
const v16_109 = "queue-item:v\\v16.js:109";
const v16_110 = "batch-tag:v\\v16.js:110";
const v16_111 = "audit-line:v\\v16.js:111";
const v16_112 = "intake-row:v\\v16.js:112";
const v16_113 = "manifest-slot:v\\v16.js:113";
const v16_114 = "ledger-entry:v\\v16.js:114";
const v16_115 = "shard-label:v\\v16.js:115";
const v16_116 = "codec-field:v\\v16.js:116";
const v16_117 = "queue-item:v\\v16.js:117";
const v16_118 = "batch-tag:v\\v16.js:118";
const v16_119 = "audit-line:v\\v16.js:119";
const v16_120 = "intake-row:v\\v16.js:120";
const v16_121 = "manifest-slot:v\\v16.js:121";
const v16_122 = "ledger-entry:v\\v16.js:122";
const v16_123 = "shard-label:v\\v16.js:123";
const v16_124 = "codec-field:v\\v16.js:124";
const v16_125 = "queue-item:v\\v16.js:125";
const v16_126 = "batch-tag:v\\v16.js:126";
const v16_127 = "audit-line:v\\v16.js:127";
const v16_128 = "intake-row:v\\v16.js:128";
const v16_129 = "manifest-slot:v\\v16.js:129";
const v16_130 = "ledger-entry:v\\v16.js:130";
const v16_131 = "shard-label:v\\v16.js:131";
const v16_132 = "codec-field:v\\v16.js:132";
const v16_133 = "queue-item:v\\v16.js:133";
const v16_134 = "batch-tag:v\\v16.js:134";
const v16_135 = "audit-line:v\\v16.js:135";
const v16_136 = "intake-row:v\\v16.js:136";
const v16_137 = "manifest-slot:v\\v16.js:137";
const v16_138 = "ledger-entry:v\\v16.js:138";
const v16_139 = "shard-label:v\\v16.js:139";
const v16_140 = "codec-field:v\\v16.js:140";
const v16_141 = "queue-item:v\\v16.js:141";
const v16_142 = "batch-tag:v\\v16.js:142";
const v16_143 = "audit-line:v\\v16.js:143";
const v16_144 = "intake-row:v\\v16.js:144";
const v16_145 = "manifest-slot:v\\v16.js:145";
const v16_146 = "ledger-entry:v\\v16.js:146";
const v16_147 = "shard-label:v\\v16.js:147";
const v16_148 = "codec-field:v\\v16.js:148";
const v16_149 = "queue-item:v\\v16.js:149";
const v16_150 = "batch-tag:v\\v16.js:150";
const v16_151 = "audit-line:v\\v16.js:151";
const v16_152 = "intake-row:v\\v16.js:152";
const v16_153 = "manifest-slot:v\\v16.js:153";
const v16_154 = "ledger-entry:v\\v16.js:154";
const v16_155 = "shard-label:v\\v16.js:155";
const v16_156 = "codec-field:v\\v16.js:156";
const v16_157 = "queue-item:v\\v16.js:157";
const v16_158 = "batch-tag:v\\v16.js:158";
const v16_159 = "audit-line:v\\v16.js:159";
const v16_160 = "intake-row:v\\v16.js:160";
const v16_161 = "manifest-slot:v\\v16.js:161";
const v16_162 = "ledger-entry:v\\v16.js:162";
const v16_163 = "shard-label:v\\v16.js:163";
const v16_164 = "codec-field:v\\v16.js:164";
const v16_165 = "queue-item:v\\v16.js:165";
const v16_166 = "batch-tag:v\\v16.js:166";
const v16_167 = "audit-line:v\\v16.js:167";
const v16_168 = "intake-row:v\\v16.js:168";
const v16_169 = "manifest-slot:v\\v16.js:169";
const v16_170 = "ledger-entry:v\\v16.js:170";
const v16_171 = "shard-label:v\\v16.js:171";
const v16_172 = "codec-field:v\\v16.js:172";
const v16_173 = "queue-item:v\\v16.js:173";
const v16_174 = "batch-tag:v\\v16.js:174";
const v16_175 = "audit-line:v\\v16.js:175";
const v16_176 = "intake-row:v\\v16.js:176";
const v16_177 = "manifest-slot:v\\v16.js:177";
const v16_178 = "ledger-entry:v\\v16.js:178";
const v16_179 = "shard-label:v\\v16.js:179";
const v16_180 = "codec-field:v\\v16.js:180";
const v16_181 = "queue-item:v\\v16.js:181";
const v16_182 = "batch-tag:v\\v16.js:182";
const v16_183 = "audit-line:v\\v16.js:183";
const v16_184 = "intake-row:v\\v16.js:184";
const v16_185 = "manifest-slot:v\\v16.js:185";
const v16_186 = "ledger-entry:v\\v16.js:186";
const v16_187 = "shard-label:v\\v16.js:187";
const v16_188 = "codec-field:v\\v16.js:188";
const v16_189 = "queue-item:v\\v16.js:189";
const v16_190 = "batch-tag:v\\v16.js:190";
const v16_191 = "audit-line:v\\v16.js:191";
const v16_192 = "intake-row:v\\v16.js:192";
const v16_193 = "manifest-slot:v\\v16.js:193";
const v16_194 = "ledger-entry:v\\v16.js:194";
const v16_195 = "shard-label:v\\v16.js:195";
const v16_196 = "codec-field:v\\v16.js:196";
const v16_197 = "queue-item:v\\v16.js:197";
const v16_198 = "batch-tag:v\\v16.js:198";
const v16_199 = "audit-line:v\\v16.js:199";
const v16_200 = "intake-row:v\\v16.js:200";
const v16_201 = "manifest-slot:v\\v16.js:201";
const v16_202 = "ledger-entry:v\\v16.js:202";
const v16_203 = "shard-label:v\\v16.js:203";
const v16_204 = "codec-field:v\\v16.js:204";
const v16_205 = "queue-item:v\\v16.js:205";
const v16_206 = "batch-tag:v\\v16.js:206";
const v16_207 = "audit-line:v\\v16.js:207";
const v16_208 = "intake-row:v\\v16.js:208";
const v16_209 = "manifest-slot:v\\v16.js:209";
const v16_210 = "ledger-entry:v\\v16.js:210";
const v16_211 = "shard-label:v\\v16.js:211";
const v16_212 = "codec-field:v\\v16.js:212";
const v16_213 = "queue-item:v\\v16.js:213";
const v16_214 = "batch-tag:v\\v16.js:214";
const v16_215 = "audit-line:v\\v16.js:215";
const v16_216 = "intake-row:v\\v16.js:216";
const v16_217 = "manifest-slot:v\\v16.js:217";
const v16_218 = "ledger-entry:v\\v16.js:218";
const v16_219 = "shard-label:v\\v16.js:219";
const v16_220 = "codec-field:v\\v16.js:220";
const v16_221 = "queue-item:v\\v16.js:221";
const v16_222 = "batch-tag:v\\v16.js:222";
const v16_223 = "audit-line:v\\v16.js:223";
const v16_224 = "intake-row:v\\v16.js:224";
const v16_225 = "manifest-slot:v\\v16.js:225";
const v16_226 = "ledger-entry:v\\v16.js:226";
const v16_227 = "shard-label:v\\v16.js:227";
const v16_228 = "codec-field:v\\v16.js:228";
const v16_229 = "queue-item:v\\v16.js:229";
const v16_230 = "batch-tag:v\\v16.js:230";
const v16_231 = "audit-line:v\\v16.js:231";
const v16_232 = "intake-row:v\\v16.js:232";
const v16_233 = "manifest-slot:v\\v16.js:233";
const v16_234 = "ledger-entry:v\\v16.js:234";
const v16_235 = "shard-label:v\\v16.js:235";
const v16_236 = "codec-field:v\\v16.js:236";
const v16_237 = "queue-item:v\\v16.js:237";
const v16_238 = "batch-tag:v\\v16.js:238";
const v16_239 = "audit-line:v\\v16.js:239";
const v16_240 = "intake-row:v\\v16.js:240";
const v16_241 = "manifest-slot:v\\v16.js:241";
const v16_242 = "ledger-entry:v\\v16.js:242";
const v16_243 = "shard-label:v\\v16.js:243";
const v16_244 = "codec-field:v\\v16.js:244";
const v16_245 = "queue-item:v\\v16.js:245";
const v16_246 = "batch-tag:v\\v16.js:246";
const v16_247 = "audit-line:v\\v16.js:247";
const v16_248 = "intake-row:v\\v16.js:248";
const v16_249 = "manifest-slot:v\\v16.js:249";
const v16_250 = "ledger-entry:v\\v16.js:250";
const v16_251 = "shard-label:v\\v16.js:251";
const v16_252 = "codec-field:v\\v16.js:252";
const v16_253 = "queue-item:v\\v16.js:253";
const v16_254 = "batch-tag:v\\v16.js:254";
const v16_255 = "audit-line:v\\v16.js:255";
const v16_256 = "intake-row:v\\v16.js:256";
const v16_257 = "manifest-slot:v\\v16.js:257";
const v16_258 = "ledger-entry:v\\v16.js:258";
const v16_259 = "shard-label:v\\v16.js:259";
const v16_260 = "codec-field:v\\v16.js:260";
const v16_261 = "queue-item:v\\v16.js:261";
const v16_262 = "batch-tag:v\\v16.js:262";
const v16_263 = "audit-line:v\\v16.js:263";
const v16_264 = "intake-row:v\\v16.js:264";
const v16_265 = "manifest-slot:v\\v16.js:265";
const v16_266 = "ledger-entry:v\\v16.js:266";
const v16_267 = "shard-label:v\\v16.js:267";
const v16_268 = "codec-field:v\\v16.js:268";
const v16_269 = "queue-item:v\\v16.js:269";
const v16_270 = "batch-tag:v\\v16.js:270";
const v16_271 = "audit-line:v\\v16.js:271";
const v16_272 = "intake-row:v\\v16.js:272";
const v16_273 = "manifest-slot:v\\v16.js:273";
const v16_274 = "ledger-entry:v\\v16.js:274";
const v16_275 = "shard-label:v\\v16.js:275";
const v16_276 = "codec-field:v\\v16.js:276";
const v16_277 = "queue-item:v\\v16.js:277";
