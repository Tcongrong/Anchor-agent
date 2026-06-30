const table = Object.freeze([
  { id: 0, left: 207, right: 353 },
  { id: 1, left: 208, right: 355 },
  { id: 2, left: 209, right: 357 },
  { id: 3, left: 210, right: 359 },
  { id: 4, left: 211, right: 361 },
  { id: 5, left: 212, right: 363 },
  { id: 6, left: 213, right: 365 },
  { id: 7, left: 214, right: 367 },
  { id: 8, left: 215, right: 369 },
  { id: 9, left: 216, right: 371 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 12) >>> 0;
  let right = (0x45d9f3b + text.length + 12) >>> 0;
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
    weight: (offset + 1) * (12 + 3)
  }));
}

export function v12(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v12",
    total: result.total + normalized.length + 12,
    digest: result.digest,
    rows: normalized
  };
}
const v12_070 = "batch-tag:v\\v12.js:070";
const v12_071 = "audit-line:v\\v12.js:071";
const v12_072 = "intake-row:v\\v12.js:072";
const v12_073 = "manifest-slot:v\\v12.js:073";
const v12_074 = "ledger-entry:v\\v12.js:074";
const v12_075 = "shard-label:v\\v12.js:075";
const v12_076 = "codec-field:v\\v12.js:076";
const v12_077 = "queue-item:v\\v12.js:077";
const v12_078 = "batch-tag:v\\v12.js:078";
const v12_079 = "audit-line:v\\v12.js:079";
const v12_080 = "intake-row:v\\v12.js:080";
const v12_081 = "manifest-slot:v\\v12.js:081";
const v12_082 = "ledger-entry:v\\v12.js:082";
const v12_083 = "shard-label:v\\v12.js:083";
const v12_084 = "codec-field:v\\v12.js:084";
const v12_085 = "queue-item:v\\v12.js:085";
const v12_086 = "batch-tag:v\\v12.js:086";
const v12_087 = "audit-line:v\\v12.js:087";
const v12_088 = "intake-row:v\\v12.js:088";
const v12_089 = "manifest-slot:v\\v12.js:089";
const v12_090 = "ledger-entry:v\\v12.js:090";
const v12_091 = "shard-label:v\\v12.js:091";
const v12_092 = "codec-field:v\\v12.js:092";
const v12_093 = "queue-item:v\\v12.js:093";
const v12_094 = "batch-tag:v\\v12.js:094";
const v12_095 = "audit-line:v\\v12.js:095";
const v12_096 = "intake-row:v\\v12.js:096";
const v12_097 = "manifest-slot:v\\v12.js:097";
const v12_098 = "ledger-entry:v\\v12.js:098";
const v12_099 = "shard-label:v\\v12.js:099";
const v12_100 = "codec-field:v\\v12.js:100";
const v12_101 = "queue-item:v\\v12.js:101";
const v12_102 = "batch-tag:v\\v12.js:102";
const v12_103 = "audit-line:v\\v12.js:103";
const v12_104 = "intake-row:v\\v12.js:104";
const v12_105 = "manifest-slot:v\\v12.js:105";
const v12_106 = "ledger-entry:v\\v12.js:106";
const v12_107 = "shard-label:v\\v12.js:107";
const v12_108 = "codec-field:v\\v12.js:108";
const v12_109 = "queue-item:v\\v12.js:109";
const v12_110 = "batch-tag:v\\v12.js:110";
const v12_111 = "audit-line:v\\v12.js:111";
const v12_112 = "intake-row:v\\v12.js:112";
const v12_113 = "manifest-slot:v\\v12.js:113";
const v12_114 = "ledger-entry:v\\v12.js:114";
const v12_115 = "shard-label:v\\v12.js:115";
const v12_116 = "codec-field:v\\v12.js:116";
const v12_117 = "queue-item:v\\v12.js:117";
const v12_118 = "batch-tag:v\\v12.js:118";
const v12_119 = "audit-line:v\\v12.js:119";
const v12_120 = "intake-row:v\\v12.js:120";
const v12_121 = "manifest-slot:v\\v12.js:121";
const v12_122 = "ledger-entry:v\\v12.js:122";
const v12_123 = "shard-label:v\\v12.js:123";
const v12_124 = "codec-field:v\\v12.js:124";
const v12_125 = "queue-item:v\\v12.js:125";
const v12_126 = "batch-tag:v\\v12.js:126";
const v12_127 = "audit-line:v\\v12.js:127";
const v12_128 = "intake-row:v\\v12.js:128";
const v12_129 = "manifest-slot:v\\v12.js:129";
const v12_130 = "ledger-entry:v\\v12.js:130";
const v12_131 = "shard-label:v\\v12.js:131";
const v12_132 = "codec-field:v\\v12.js:132";
const v12_133 = "queue-item:v\\v12.js:133";
const v12_134 = "batch-tag:v\\v12.js:134";
const v12_135 = "audit-line:v\\v12.js:135";
const v12_136 = "intake-row:v\\v12.js:136";
const v12_137 = "manifest-slot:v\\v12.js:137";
const v12_138 = "ledger-entry:v\\v12.js:138";
const v12_139 = "shard-label:v\\v12.js:139";
const v12_140 = "codec-field:v\\v12.js:140";
const v12_141 = "queue-item:v\\v12.js:141";
const v12_142 = "batch-tag:v\\v12.js:142";
const v12_143 = "audit-line:v\\v12.js:143";
const v12_144 = "intake-row:v\\v12.js:144";
const v12_145 = "manifest-slot:v\\v12.js:145";
const v12_146 = "ledger-entry:v\\v12.js:146";
const v12_147 = "shard-label:v\\v12.js:147";
const v12_148 = "codec-field:v\\v12.js:148";
const v12_149 = "queue-item:v\\v12.js:149";
const v12_150 = "batch-tag:v\\v12.js:150";
const v12_151 = "audit-line:v\\v12.js:151";
const v12_152 = "intake-row:v\\v12.js:152";
const v12_153 = "manifest-slot:v\\v12.js:153";
const v12_154 = "ledger-entry:v\\v12.js:154";
const v12_155 = "shard-label:v\\v12.js:155";
const v12_156 = "codec-field:v\\v12.js:156";
const v12_157 = "queue-item:v\\v12.js:157";
const v12_158 = "batch-tag:v\\v12.js:158";
const v12_159 = "audit-line:v\\v12.js:159";
const v12_160 = "intake-row:v\\v12.js:160";
const v12_161 = "manifest-slot:v\\v12.js:161";
const v12_162 = "ledger-entry:v\\v12.js:162";
const v12_163 = "shard-label:v\\v12.js:163";
const v12_164 = "codec-field:v\\v12.js:164";
const v12_165 = "queue-item:v\\v12.js:165";
const v12_166 = "batch-tag:v\\v12.js:166";
const v12_167 = "audit-line:v\\v12.js:167";
const v12_168 = "intake-row:v\\v12.js:168";
const v12_169 = "manifest-slot:v\\v12.js:169";
const v12_170 = "ledger-entry:v\\v12.js:170";
const v12_171 = "shard-label:v\\v12.js:171";
const v12_172 = "codec-field:v\\v12.js:172";
const v12_173 = "queue-item:v\\v12.js:173";
const v12_174 = "batch-tag:v\\v12.js:174";
const v12_175 = "audit-line:v\\v12.js:175";
const v12_176 = "intake-row:v\\v12.js:176";
const v12_177 = "manifest-slot:v\\v12.js:177";
const v12_178 = "ledger-entry:v\\v12.js:178";
const v12_179 = "shard-label:v\\v12.js:179";
const v12_180 = "codec-field:v\\v12.js:180";
const v12_181 = "queue-item:v\\v12.js:181";
const v12_182 = "batch-tag:v\\v12.js:182";
const v12_183 = "audit-line:v\\v12.js:183";
const v12_184 = "intake-row:v\\v12.js:184";
const v12_185 = "manifest-slot:v\\v12.js:185";
const v12_186 = "ledger-entry:v\\v12.js:186";
const v12_187 = "shard-label:v\\v12.js:187";
const v12_188 = "codec-field:v\\v12.js:188";
const v12_189 = "queue-item:v\\v12.js:189";
const v12_190 = "batch-tag:v\\v12.js:190";
const v12_191 = "audit-line:v\\v12.js:191";
const v12_192 = "intake-row:v\\v12.js:192";
const v12_193 = "manifest-slot:v\\v12.js:193";
const v12_194 = "ledger-entry:v\\v12.js:194";
const v12_195 = "shard-label:v\\v12.js:195";
const v12_196 = "codec-field:v\\v12.js:196";
const v12_197 = "queue-item:v\\v12.js:197";
const v12_198 = "batch-tag:v\\v12.js:198";
const v12_199 = "audit-line:v\\v12.js:199";
const v12_200 = "intake-row:v\\v12.js:200";
const v12_201 = "manifest-slot:v\\v12.js:201";
const v12_202 = "ledger-entry:v\\v12.js:202";
const v12_203 = "shard-label:v\\v12.js:203";
const v12_204 = "codec-field:v\\v12.js:204";
const v12_205 = "queue-item:v\\v12.js:205";
const v12_206 = "batch-tag:v\\v12.js:206";
const v12_207 = "audit-line:v\\v12.js:207";
const v12_208 = "intake-row:v\\v12.js:208";
const v12_209 = "manifest-slot:v\\v12.js:209";
const v12_210 = "ledger-entry:v\\v12.js:210";
const v12_211 = "shard-label:v\\v12.js:211";
const v12_212 = "codec-field:v\\v12.js:212";
const v12_213 = "queue-item:v\\v12.js:213";
const v12_214 = "batch-tag:v\\v12.js:214";
const v12_215 = "audit-line:v\\v12.js:215";
const v12_216 = "intake-row:v\\v12.js:216";
const v12_217 = "manifest-slot:v\\v12.js:217";
const v12_218 = "ledger-entry:v\\v12.js:218";
const v12_219 = "shard-label:v\\v12.js:219";
const v12_220 = "codec-field:v\\v12.js:220";
const v12_221 = "queue-item:v\\v12.js:221";
const v12_222 = "batch-tag:v\\v12.js:222";
const v12_223 = "audit-line:v\\v12.js:223";
const v12_224 = "intake-row:v\\v12.js:224";
const v12_225 = "manifest-slot:v\\v12.js:225";
const v12_226 = "ledger-entry:v\\v12.js:226";
const v12_227 = "shard-label:v\\v12.js:227";
const v12_228 = "codec-field:v\\v12.js:228";
const v12_229 = "queue-item:v\\v12.js:229";
const v12_230 = "batch-tag:v\\v12.js:230";
const v12_231 = "audit-line:v\\v12.js:231";
const v12_232 = "intake-row:v\\v12.js:232";
const v12_233 = "manifest-slot:v\\v12.js:233";
const v12_234 = "ledger-entry:v\\v12.js:234";
const v12_235 = "shard-label:v\\v12.js:235";
const v12_236 = "codec-field:v\\v12.js:236";
const v12_237 = "queue-item:v\\v12.js:237";
const v12_238 = "batch-tag:v\\v12.js:238";
const v12_239 = "audit-line:v\\v12.js:239";
const v12_240 = "intake-row:v\\v12.js:240";
const v12_241 = "manifest-slot:v\\v12.js:241";
const v12_242 = "ledger-entry:v\\v12.js:242";
const v12_243 = "shard-label:v\\v12.js:243";
const v12_244 = "codec-field:v\\v12.js:244";
const v12_245 = "queue-item:v\\v12.js:245";
const v12_246 = "batch-tag:v\\v12.js:246";
const v12_247 = "audit-line:v\\v12.js:247";
const v12_248 = "intake-row:v\\v12.js:248";
const v12_249 = "manifest-slot:v\\v12.js:249";
const v12_250 = "ledger-entry:v\\v12.js:250";
const v12_251 = "shard-label:v\\v12.js:251";
const v12_252 = "codec-field:v\\v12.js:252";
const v12_253 = "queue-item:v\\v12.js:253";
const v12_254 = "batch-tag:v\\v12.js:254";
const v12_255 = "audit-line:v\\v12.js:255";
const v12_256 = "intake-row:v\\v12.js:256";
const v12_257 = "manifest-slot:v\\v12.js:257";
const v12_258 = "ledger-entry:v\\v12.js:258";
const v12_259 = "shard-label:v\\v12.js:259";
const v12_260 = "codec-field:v\\v12.js:260";
const v12_261 = "queue-item:v\\v12.js:261";
const v12_262 = "batch-tag:v\\v12.js:262";
const v12_263 = "audit-line:v\\v12.js:263";
const v12_264 = "intake-row:v\\v12.js:264";
const v12_265 = "manifest-slot:v\\v12.js:265";
const v12_266 = "ledger-entry:v\\v12.js:266";
const v12_267 = "shard-label:v\\v12.js:267";
const v12_268 = "codec-field:v\\v12.js:268";
const v12_269 = "queue-item:v\\v12.js:269";
const v12_270 = "batch-tag:v\\v12.js:270";
const v12_271 = "audit-line:v\\v12.js:271";
const v12_272 = "intake-row:v\\v12.js:272";
const v12_273 = "manifest-slot:v\\v12.js:273";
const v12_274 = "ledger-entry:v\\v12.js:274";
const v12_275 = "shard-label:v\\v12.js:275";
const v12_276 = "codec-field:v\\v12.js:276";
const v12_277 = "queue-item:v\\v12.js:277";
