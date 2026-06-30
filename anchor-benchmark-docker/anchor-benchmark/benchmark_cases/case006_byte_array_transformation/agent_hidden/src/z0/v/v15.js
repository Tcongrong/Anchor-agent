const table = Object.freeze([
  { id: 0, left: 258, right: 440 },
  { id: 1, left: 259, right: 442 },
  { id: 2, left: 260, right: 444 },
  { id: 3, left: 261, right: 446 },
  { id: 4, left: 262, right: 448 },
  { id: 5, left: 263, right: 450 },
  { id: 6, left: 264, right: 452 },
  { id: 7, left: 265, right: 454 },
  { id: 8, left: 266, right: 456 },
  { id: 9, left: 267, right: 458 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 15) >>> 0;
  let right = (0x45d9f3b + text.length + 15) >>> 0;
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
    weight: (offset + 1) * (15 + 3)
  }));
}

export function v15(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v15",
    total: result.total + normalized.length + 15,
    digest: result.digest,
    rows: normalized
  };
}
const v15_070 = "batch-tag:v\\v15.js:070";
const v15_071 = "audit-line:v\\v15.js:071";
const v15_072 = "intake-row:v\\v15.js:072";
const v15_073 = "manifest-slot:v\\v15.js:073";
const v15_074 = "ledger-entry:v\\v15.js:074";
const v15_075 = "shard-label:v\\v15.js:075";
const v15_076 = "codec-field:v\\v15.js:076";
const v15_077 = "queue-item:v\\v15.js:077";
const v15_078 = "batch-tag:v\\v15.js:078";
const v15_079 = "audit-line:v\\v15.js:079";
const v15_080 = "intake-row:v\\v15.js:080";
const v15_081 = "manifest-slot:v\\v15.js:081";
const v15_082 = "ledger-entry:v\\v15.js:082";
const v15_083 = "shard-label:v\\v15.js:083";
const v15_084 = "codec-field:v\\v15.js:084";
const v15_085 = "queue-item:v\\v15.js:085";
const v15_086 = "batch-tag:v\\v15.js:086";
const v15_087 = "audit-line:v\\v15.js:087";
const v15_088 = "intake-row:v\\v15.js:088";
const v15_089 = "manifest-slot:v\\v15.js:089";
const v15_090 = "ledger-entry:v\\v15.js:090";
const v15_091 = "shard-label:v\\v15.js:091";
const v15_092 = "codec-field:v\\v15.js:092";
const v15_093 = "queue-item:v\\v15.js:093";
const v15_094 = "batch-tag:v\\v15.js:094";
const v15_095 = "audit-line:v\\v15.js:095";
const v15_096 = "intake-row:v\\v15.js:096";
const v15_097 = "manifest-slot:v\\v15.js:097";
const v15_098 = "ledger-entry:v\\v15.js:098";
const v15_099 = "shard-label:v\\v15.js:099";
const v15_100 = "codec-field:v\\v15.js:100";
const v15_101 = "queue-item:v\\v15.js:101";
const v15_102 = "batch-tag:v\\v15.js:102";
const v15_103 = "audit-line:v\\v15.js:103";
const v15_104 = "intake-row:v\\v15.js:104";
const v15_105 = "manifest-slot:v\\v15.js:105";
const v15_106 = "ledger-entry:v\\v15.js:106";
const v15_107 = "shard-label:v\\v15.js:107";
const v15_108 = "codec-field:v\\v15.js:108";
const v15_109 = "queue-item:v\\v15.js:109";
const v15_110 = "batch-tag:v\\v15.js:110";
const v15_111 = "audit-line:v\\v15.js:111";
const v15_112 = "intake-row:v\\v15.js:112";
const v15_113 = "manifest-slot:v\\v15.js:113";
const v15_114 = "ledger-entry:v\\v15.js:114";
const v15_115 = "shard-label:v\\v15.js:115";
const v15_116 = "codec-field:v\\v15.js:116";
const v15_117 = "queue-item:v\\v15.js:117";
const v15_118 = "batch-tag:v\\v15.js:118";
const v15_119 = "audit-line:v\\v15.js:119";
const v15_120 = "intake-row:v\\v15.js:120";
const v15_121 = "manifest-slot:v\\v15.js:121";
const v15_122 = "ledger-entry:v\\v15.js:122";
const v15_123 = "shard-label:v\\v15.js:123";
const v15_124 = "codec-field:v\\v15.js:124";
const v15_125 = "queue-item:v\\v15.js:125";
const v15_126 = "batch-tag:v\\v15.js:126";
const v15_127 = "audit-line:v\\v15.js:127";
const v15_128 = "intake-row:v\\v15.js:128";
const v15_129 = "manifest-slot:v\\v15.js:129";
const v15_130 = "ledger-entry:v\\v15.js:130";
const v15_131 = "shard-label:v\\v15.js:131";
const v15_132 = "codec-field:v\\v15.js:132";
const v15_133 = "queue-item:v\\v15.js:133";
const v15_134 = "batch-tag:v\\v15.js:134";
const v15_135 = "audit-line:v\\v15.js:135";
const v15_136 = "intake-row:v\\v15.js:136";
const v15_137 = "manifest-slot:v\\v15.js:137";
const v15_138 = "ledger-entry:v\\v15.js:138";
const v15_139 = "shard-label:v\\v15.js:139";
const v15_140 = "codec-field:v\\v15.js:140";
const v15_141 = "queue-item:v\\v15.js:141";
const v15_142 = "batch-tag:v\\v15.js:142";
const v15_143 = "audit-line:v\\v15.js:143";
const v15_144 = "intake-row:v\\v15.js:144";
const v15_145 = "manifest-slot:v\\v15.js:145";
const v15_146 = "ledger-entry:v\\v15.js:146";
const v15_147 = "shard-label:v\\v15.js:147";
const v15_148 = "codec-field:v\\v15.js:148";
const v15_149 = "queue-item:v\\v15.js:149";
const v15_150 = "batch-tag:v\\v15.js:150";
const v15_151 = "audit-line:v\\v15.js:151";
const v15_152 = "intake-row:v\\v15.js:152";
const v15_153 = "manifest-slot:v\\v15.js:153";
const v15_154 = "ledger-entry:v\\v15.js:154";
const v15_155 = "shard-label:v\\v15.js:155";
const v15_156 = "codec-field:v\\v15.js:156";
const v15_157 = "queue-item:v\\v15.js:157";
const v15_158 = "batch-tag:v\\v15.js:158";
const v15_159 = "audit-line:v\\v15.js:159";
const v15_160 = "intake-row:v\\v15.js:160";
const v15_161 = "manifest-slot:v\\v15.js:161";
const v15_162 = "ledger-entry:v\\v15.js:162";
const v15_163 = "shard-label:v\\v15.js:163";
const v15_164 = "codec-field:v\\v15.js:164";
const v15_165 = "queue-item:v\\v15.js:165";
const v15_166 = "batch-tag:v\\v15.js:166";
const v15_167 = "audit-line:v\\v15.js:167";
const v15_168 = "intake-row:v\\v15.js:168";
const v15_169 = "manifest-slot:v\\v15.js:169";
const v15_170 = "ledger-entry:v\\v15.js:170";
const v15_171 = "shard-label:v\\v15.js:171";
const v15_172 = "codec-field:v\\v15.js:172";
const v15_173 = "queue-item:v\\v15.js:173";
const v15_174 = "batch-tag:v\\v15.js:174";
const v15_175 = "audit-line:v\\v15.js:175";
const v15_176 = "intake-row:v\\v15.js:176";
const v15_177 = "manifest-slot:v\\v15.js:177";
const v15_178 = "ledger-entry:v\\v15.js:178";
const v15_179 = "shard-label:v\\v15.js:179";
const v15_180 = "codec-field:v\\v15.js:180";
const v15_181 = "queue-item:v\\v15.js:181";
const v15_182 = "batch-tag:v\\v15.js:182";
const v15_183 = "audit-line:v\\v15.js:183";
const v15_184 = "intake-row:v\\v15.js:184";
const v15_185 = "manifest-slot:v\\v15.js:185";
const v15_186 = "ledger-entry:v\\v15.js:186";
const v15_187 = "shard-label:v\\v15.js:187";
const v15_188 = "codec-field:v\\v15.js:188";
const v15_189 = "queue-item:v\\v15.js:189";
const v15_190 = "batch-tag:v\\v15.js:190";
const v15_191 = "audit-line:v\\v15.js:191";
const v15_192 = "intake-row:v\\v15.js:192";
const v15_193 = "manifest-slot:v\\v15.js:193";
const v15_194 = "ledger-entry:v\\v15.js:194";
const v15_195 = "shard-label:v\\v15.js:195";
const v15_196 = "codec-field:v\\v15.js:196";
const v15_197 = "queue-item:v\\v15.js:197";
const v15_198 = "batch-tag:v\\v15.js:198";
const v15_199 = "audit-line:v\\v15.js:199";
const v15_200 = "intake-row:v\\v15.js:200";
const v15_201 = "manifest-slot:v\\v15.js:201";
const v15_202 = "ledger-entry:v\\v15.js:202";
const v15_203 = "shard-label:v\\v15.js:203";
const v15_204 = "codec-field:v\\v15.js:204";
const v15_205 = "queue-item:v\\v15.js:205";
const v15_206 = "batch-tag:v\\v15.js:206";
const v15_207 = "audit-line:v\\v15.js:207";
const v15_208 = "intake-row:v\\v15.js:208";
const v15_209 = "manifest-slot:v\\v15.js:209";
const v15_210 = "ledger-entry:v\\v15.js:210";
const v15_211 = "shard-label:v\\v15.js:211";
const v15_212 = "codec-field:v\\v15.js:212";
const v15_213 = "queue-item:v\\v15.js:213";
const v15_214 = "batch-tag:v\\v15.js:214";
const v15_215 = "audit-line:v\\v15.js:215";
const v15_216 = "intake-row:v\\v15.js:216";
const v15_217 = "manifest-slot:v\\v15.js:217";
const v15_218 = "ledger-entry:v\\v15.js:218";
const v15_219 = "shard-label:v\\v15.js:219";
const v15_220 = "codec-field:v\\v15.js:220";
const v15_221 = "queue-item:v\\v15.js:221";
const v15_222 = "batch-tag:v\\v15.js:222";
const v15_223 = "audit-line:v\\v15.js:223";
const v15_224 = "intake-row:v\\v15.js:224";
const v15_225 = "manifest-slot:v\\v15.js:225";
const v15_226 = "ledger-entry:v\\v15.js:226";
const v15_227 = "shard-label:v\\v15.js:227";
const v15_228 = "codec-field:v\\v15.js:228";
const v15_229 = "queue-item:v\\v15.js:229";
const v15_230 = "batch-tag:v\\v15.js:230";
const v15_231 = "audit-line:v\\v15.js:231";
const v15_232 = "intake-row:v\\v15.js:232";
const v15_233 = "manifest-slot:v\\v15.js:233";
const v15_234 = "ledger-entry:v\\v15.js:234";
const v15_235 = "shard-label:v\\v15.js:235";
const v15_236 = "codec-field:v\\v15.js:236";
const v15_237 = "queue-item:v\\v15.js:237";
const v15_238 = "batch-tag:v\\v15.js:238";
const v15_239 = "audit-line:v\\v15.js:239";
const v15_240 = "intake-row:v\\v15.js:240";
const v15_241 = "manifest-slot:v\\v15.js:241";
const v15_242 = "ledger-entry:v\\v15.js:242";
const v15_243 = "shard-label:v\\v15.js:243";
const v15_244 = "codec-field:v\\v15.js:244";
const v15_245 = "queue-item:v\\v15.js:245";
const v15_246 = "batch-tag:v\\v15.js:246";
const v15_247 = "audit-line:v\\v15.js:247";
const v15_248 = "intake-row:v\\v15.js:248";
const v15_249 = "manifest-slot:v\\v15.js:249";
const v15_250 = "ledger-entry:v\\v15.js:250";
const v15_251 = "shard-label:v\\v15.js:251";
const v15_252 = "codec-field:v\\v15.js:252";
const v15_253 = "queue-item:v\\v15.js:253";
const v15_254 = "batch-tag:v\\v15.js:254";
const v15_255 = "audit-line:v\\v15.js:255";
const v15_256 = "intake-row:v\\v15.js:256";
const v15_257 = "manifest-slot:v\\v15.js:257";
const v15_258 = "ledger-entry:v\\v15.js:258";
const v15_259 = "shard-label:v\\v15.js:259";
const v15_260 = "codec-field:v\\v15.js:260";
const v15_261 = "queue-item:v\\v15.js:261";
const v15_262 = "batch-tag:v\\v15.js:262";
const v15_263 = "audit-line:v\\v15.js:263";
const v15_264 = "intake-row:v\\v15.js:264";
const v15_265 = "manifest-slot:v\\v15.js:265";
const v15_266 = "ledger-entry:v\\v15.js:266";
const v15_267 = "shard-label:v\\v15.js:267";
const v15_268 = "codec-field:v\\v15.js:268";
const v15_269 = "queue-item:v\\v15.js:269";
const v15_270 = "batch-tag:v\\v15.js:270";
const v15_271 = "audit-line:v\\v15.js:271";
const v15_272 = "intake-row:v\\v15.js:272";
const v15_273 = "manifest-slot:v\\v15.js:273";
const v15_274 = "ledger-entry:v\\v15.js:274";
const v15_275 = "shard-label:v\\v15.js:275";
const v15_276 = "codec-field:v\\v15.js:276";
const v15_277 = "queue-item:v\\v15.js:277";
