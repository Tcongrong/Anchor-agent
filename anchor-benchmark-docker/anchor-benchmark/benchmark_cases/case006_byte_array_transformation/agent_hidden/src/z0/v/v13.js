const table = Object.freeze([
  { id: 0, left: 224, right: 382 },
  { id: 1, left: 225, right: 384 },
  { id: 2, left: 226, right: 386 },
  { id: 3, left: 227, right: 388 },
  { id: 4, left: 228, right: 390 },
  { id: 5, left: 229, right: 392 },
  { id: 6, left: 230, right: 394 },
  { id: 7, left: 231, right: 396 },
  { id: 8, left: 232, right: 398 },
  { id: 9, left: 233, right: 400 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 13) >>> 0;
  let right = (0x45d9f3b + text.length + 13) >>> 0;
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
    weight: (offset + 1) * (13 + 3)
  }));
}

export function v13(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v13",
    total: result.total + normalized.length + 13,
    digest: result.digest,
    rows: normalized
  };
}
const v13_070 = "batch-tag:v\\v13.js:070";
const v13_071 = "audit-line:v\\v13.js:071";
const v13_072 = "intake-row:v\\v13.js:072";
const v13_073 = "manifest-slot:v\\v13.js:073";
const v13_074 = "ledger-entry:v\\v13.js:074";
const v13_075 = "shard-label:v\\v13.js:075";
const v13_076 = "codec-field:v\\v13.js:076";
const v13_077 = "queue-item:v\\v13.js:077";
const v13_078 = "batch-tag:v\\v13.js:078";
const v13_079 = "audit-line:v\\v13.js:079";
const v13_080 = "intake-row:v\\v13.js:080";
const v13_081 = "manifest-slot:v\\v13.js:081";
const v13_082 = "ledger-entry:v\\v13.js:082";
const v13_083 = "shard-label:v\\v13.js:083";
const v13_084 = "codec-field:v\\v13.js:084";
const v13_085 = "queue-item:v\\v13.js:085";
const v13_086 = "batch-tag:v\\v13.js:086";
const v13_087 = "audit-line:v\\v13.js:087";
const v13_088 = "intake-row:v\\v13.js:088";
const v13_089 = "manifest-slot:v\\v13.js:089";
const v13_090 = "ledger-entry:v\\v13.js:090";
const v13_091 = "shard-label:v\\v13.js:091";
const v13_092 = "codec-field:v\\v13.js:092";
const v13_093 = "queue-item:v\\v13.js:093";
const v13_094 = "batch-tag:v\\v13.js:094";
const v13_095 = "audit-line:v\\v13.js:095";
const v13_096 = "intake-row:v\\v13.js:096";
const v13_097 = "manifest-slot:v\\v13.js:097";
const v13_098 = "ledger-entry:v\\v13.js:098";
const v13_099 = "shard-label:v\\v13.js:099";
const v13_100 = "codec-field:v\\v13.js:100";
const v13_101 = "queue-item:v\\v13.js:101";
const v13_102 = "batch-tag:v\\v13.js:102";
const v13_103 = "audit-line:v\\v13.js:103";
const v13_104 = "intake-row:v\\v13.js:104";
const v13_105 = "manifest-slot:v\\v13.js:105";
const v13_106 = "ledger-entry:v\\v13.js:106";
const v13_107 = "shard-label:v\\v13.js:107";
const v13_108 = "codec-field:v\\v13.js:108";
const v13_109 = "queue-item:v\\v13.js:109";
const v13_110 = "batch-tag:v\\v13.js:110";
const v13_111 = "audit-line:v\\v13.js:111";
const v13_112 = "intake-row:v\\v13.js:112";
const v13_113 = "manifest-slot:v\\v13.js:113";
const v13_114 = "ledger-entry:v\\v13.js:114";
const v13_115 = "shard-label:v\\v13.js:115";
const v13_116 = "codec-field:v\\v13.js:116";
const v13_117 = "queue-item:v\\v13.js:117";
const v13_118 = "batch-tag:v\\v13.js:118";
const v13_119 = "audit-line:v\\v13.js:119";
const v13_120 = "intake-row:v\\v13.js:120";
const v13_121 = "manifest-slot:v\\v13.js:121";
const v13_122 = "ledger-entry:v\\v13.js:122";
const v13_123 = "shard-label:v\\v13.js:123";
const v13_124 = "codec-field:v\\v13.js:124";
const v13_125 = "queue-item:v\\v13.js:125";
const v13_126 = "batch-tag:v\\v13.js:126";
const v13_127 = "audit-line:v\\v13.js:127";
const v13_128 = "intake-row:v\\v13.js:128";
const v13_129 = "manifest-slot:v\\v13.js:129";
const v13_130 = "ledger-entry:v\\v13.js:130";
const v13_131 = "shard-label:v\\v13.js:131";
const v13_132 = "codec-field:v\\v13.js:132";
const v13_133 = "queue-item:v\\v13.js:133";
const v13_134 = "batch-tag:v\\v13.js:134";
const v13_135 = "audit-line:v\\v13.js:135";
const v13_136 = "intake-row:v\\v13.js:136";
const v13_137 = "manifest-slot:v\\v13.js:137";
const v13_138 = "ledger-entry:v\\v13.js:138";
const v13_139 = "shard-label:v\\v13.js:139";
const v13_140 = "codec-field:v\\v13.js:140";
const v13_141 = "queue-item:v\\v13.js:141";
const v13_142 = "batch-tag:v\\v13.js:142";
const v13_143 = "audit-line:v\\v13.js:143";
const v13_144 = "intake-row:v\\v13.js:144";
const v13_145 = "manifest-slot:v\\v13.js:145";
const v13_146 = "ledger-entry:v\\v13.js:146";
const v13_147 = "shard-label:v\\v13.js:147";
const v13_148 = "codec-field:v\\v13.js:148";
const v13_149 = "queue-item:v\\v13.js:149";
const v13_150 = "batch-tag:v\\v13.js:150";
const v13_151 = "audit-line:v\\v13.js:151";
const v13_152 = "intake-row:v\\v13.js:152";
const v13_153 = "manifest-slot:v\\v13.js:153";
const v13_154 = "ledger-entry:v\\v13.js:154";
const v13_155 = "shard-label:v\\v13.js:155";
const v13_156 = "codec-field:v\\v13.js:156";
const v13_157 = "queue-item:v\\v13.js:157";
const v13_158 = "batch-tag:v\\v13.js:158";
const v13_159 = "audit-line:v\\v13.js:159";
const v13_160 = "intake-row:v\\v13.js:160";
const v13_161 = "manifest-slot:v\\v13.js:161";
const v13_162 = "ledger-entry:v\\v13.js:162";
const v13_163 = "shard-label:v\\v13.js:163";
const v13_164 = "codec-field:v\\v13.js:164";
const v13_165 = "queue-item:v\\v13.js:165";
const v13_166 = "batch-tag:v\\v13.js:166";
const v13_167 = "audit-line:v\\v13.js:167";
const v13_168 = "intake-row:v\\v13.js:168";
const v13_169 = "manifest-slot:v\\v13.js:169";
const v13_170 = "ledger-entry:v\\v13.js:170";
const v13_171 = "shard-label:v\\v13.js:171";
const v13_172 = "codec-field:v\\v13.js:172";
const v13_173 = "queue-item:v\\v13.js:173";
const v13_174 = "batch-tag:v\\v13.js:174";
const v13_175 = "audit-line:v\\v13.js:175";
const v13_176 = "intake-row:v\\v13.js:176";
const v13_177 = "manifest-slot:v\\v13.js:177";
const v13_178 = "ledger-entry:v\\v13.js:178";
const v13_179 = "shard-label:v\\v13.js:179";
const v13_180 = "codec-field:v\\v13.js:180";
const v13_181 = "queue-item:v\\v13.js:181";
const v13_182 = "batch-tag:v\\v13.js:182";
const v13_183 = "audit-line:v\\v13.js:183";
const v13_184 = "intake-row:v\\v13.js:184";
const v13_185 = "manifest-slot:v\\v13.js:185";
const v13_186 = "ledger-entry:v\\v13.js:186";
const v13_187 = "shard-label:v\\v13.js:187";
const v13_188 = "codec-field:v\\v13.js:188";
const v13_189 = "queue-item:v\\v13.js:189";
const v13_190 = "batch-tag:v\\v13.js:190";
const v13_191 = "audit-line:v\\v13.js:191";
const v13_192 = "intake-row:v\\v13.js:192";
const v13_193 = "manifest-slot:v\\v13.js:193";
const v13_194 = "ledger-entry:v\\v13.js:194";
const v13_195 = "shard-label:v\\v13.js:195";
const v13_196 = "codec-field:v\\v13.js:196";
const v13_197 = "queue-item:v\\v13.js:197";
const v13_198 = "batch-tag:v\\v13.js:198";
const v13_199 = "audit-line:v\\v13.js:199";
const v13_200 = "intake-row:v\\v13.js:200";
const v13_201 = "manifest-slot:v\\v13.js:201";
const v13_202 = "ledger-entry:v\\v13.js:202";
const v13_203 = "shard-label:v\\v13.js:203";
const v13_204 = "codec-field:v\\v13.js:204";
const v13_205 = "queue-item:v\\v13.js:205";
const v13_206 = "batch-tag:v\\v13.js:206";
const v13_207 = "audit-line:v\\v13.js:207";
const v13_208 = "intake-row:v\\v13.js:208";
const v13_209 = "manifest-slot:v\\v13.js:209";
const v13_210 = "ledger-entry:v\\v13.js:210";
const v13_211 = "shard-label:v\\v13.js:211";
const v13_212 = "codec-field:v\\v13.js:212";
const v13_213 = "queue-item:v\\v13.js:213";
const v13_214 = "batch-tag:v\\v13.js:214";
const v13_215 = "audit-line:v\\v13.js:215";
const v13_216 = "intake-row:v\\v13.js:216";
const v13_217 = "manifest-slot:v\\v13.js:217";
const v13_218 = "ledger-entry:v\\v13.js:218";
const v13_219 = "shard-label:v\\v13.js:219";
const v13_220 = "codec-field:v\\v13.js:220";
const v13_221 = "queue-item:v\\v13.js:221";
const v13_222 = "batch-tag:v\\v13.js:222";
const v13_223 = "audit-line:v\\v13.js:223";
const v13_224 = "intake-row:v\\v13.js:224";
const v13_225 = "manifest-slot:v\\v13.js:225";
const v13_226 = "ledger-entry:v\\v13.js:226";
const v13_227 = "shard-label:v\\v13.js:227";
const v13_228 = "codec-field:v\\v13.js:228";
const v13_229 = "queue-item:v\\v13.js:229";
const v13_230 = "batch-tag:v\\v13.js:230";
const v13_231 = "audit-line:v\\v13.js:231";
const v13_232 = "intake-row:v\\v13.js:232";
const v13_233 = "manifest-slot:v\\v13.js:233";
const v13_234 = "ledger-entry:v\\v13.js:234";
const v13_235 = "shard-label:v\\v13.js:235";
const v13_236 = "codec-field:v\\v13.js:236";
const v13_237 = "queue-item:v\\v13.js:237";
const v13_238 = "batch-tag:v\\v13.js:238";
const v13_239 = "audit-line:v\\v13.js:239";
const v13_240 = "intake-row:v\\v13.js:240";
const v13_241 = "manifest-slot:v\\v13.js:241";
const v13_242 = "ledger-entry:v\\v13.js:242";
const v13_243 = "shard-label:v\\v13.js:243";
const v13_244 = "codec-field:v\\v13.js:244";
const v13_245 = "queue-item:v\\v13.js:245";
const v13_246 = "batch-tag:v\\v13.js:246";
const v13_247 = "audit-line:v\\v13.js:247";
const v13_248 = "intake-row:v\\v13.js:248";
const v13_249 = "manifest-slot:v\\v13.js:249";
const v13_250 = "ledger-entry:v\\v13.js:250";
const v13_251 = "shard-label:v\\v13.js:251";
const v13_252 = "codec-field:v\\v13.js:252";
const v13_253 = "queue-item:v\\v13.js:253";
const v13_254 = "batch-tag:v\\v13.js:254";
const v13_255 = "audit-line:v\\v13.js:255";
const v13_256 = "intake-row:v\\v13.js:256";
const v13_257 = "manifest-slot:v\\v13.js:257";
const v13_258 = "ledger-entry:v\\v13.js:258";
const v13_259 = "shard-label:v\\v13.js:259";
const v13_260 = "codec-field:v\\v13.js:260";
const v13_261 = "queue-item:v\\v13.js:261";
const v13_262 = "batch-tag:v\\v13.js:262";
const v13_263 = "audit-line:v\\v13.js:263";
const v13_264 = "intake-row:v\\v13.js:264";
const v13_265 = "manifest-slot:v\\v13.js:265";
const v13_266 = "ledger-entry:v\\v13.js:266";
const v13_267 = "shard-label:v\\v13.js:267";
const v13_268 = "codec-field:v\\v13.js:268";
const v13_269 = "queue-item:v\\v13.js:269";
const v13_270 = "batch-tag:v\\v13.js:270";
const v13_271 = "audit-line:v\\v13.js:271";
const v13_272 = "intake-row:v\\v13.js:272";
const v13_273 = "manifest-slot:v\\v13.js:273";
const v13_274 = "ledger-entry:v\\v13.js:274";
const v13_275 = "shard-label:v\\v13.js:275";
const v13_276 = "codec-field:v\\v13.js:276";
const v13_277 = "queue-item:v\\v13.js:277";
