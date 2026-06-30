const table = Object.freeze([
  { id: 0, left: 343, right: 585 },
  { id: 1, left: 344, right: 587 },
  { id: 2, left: 345, right: 589 },
  { id: 3, left: 346, right: 591 },
  { id: 4, left: 347, right: 593 },
  { id: 5, left: 348, right: 595 },
  { id: 6, left: 349, right: 597 },
  { id: 7, left: 350, right: 599 },
  { id: 8, left: 351, right: 601 },
  { id: 9, left: 352, right: 603 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 20) >>> 0;
  let right = (0x45d9f3b + text.length + 20) >>> 0;
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
    weight: (offset + 1) * (20 + 3)
  }));
}

export function v20(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v20",
    total: result.total + normalized.length + 20,
    digest: result.digest,
    rows: normalized
  };
}
const v20_070 = "batch-tag:v\\v20.js:070";
const v20_071 = "audit-line:v\\v20.js:071";
const v20_072 = "intake-row:v\\v20.js:072";
const v20_073 = "manifest-slot:v\\v20.js:073";
const v20_074 = "ledger-entry:v\\v20.js:074";
const v20_075 = "shard-label:v\\v20.js:075";
const v20_076 = "codec-field:v\\v20.js:076";
const v20_077 = "queue-item:v\\v20.js:077";
const v20_078 = "batch-tag:v\\v20.js:078";
const v20_079 = "audit-line:v\\v20.js:079";
const v20_080 = "intake-row:v\\v20.js:080";
const v20_081 = "manifest-slot:v\\v20.js:081";
const v20_082 = "ledger-entry:v\\v20.js:082";
const v20_083 = "shard-label:v\\v20.js:083";
const v20_084 = "codec-field:v\\v20.js:084";
const v20_085 = "queue-item:v\\v20.js:085";
const v20_086 = "batch-tag:v\\v20.js:086";
const v20_087 = "audit-line:v\\v20.js:087";
const v20_088 = "intake-row:v\\v20.js:088";
const v20_089 = "manifest-slot:v\\v20.js:089";
const v20_090 = "ledger-entry:v\\v20.js:090";
const v20_091 = "shard-label:v\\v20.js:091";
const v20_092 = "codec-field:v\\v20.js:092";
const v20_093 = "queue-item:v\\v20.js:093";
const v20_094 = "batch-tag:v\\v20.js:094";
const v20_095 = "audit-line:v\\v20.js:095";
const v20_096 = "intake-row:v\\v20.js:096";
const v20_097 = "manifest-slot:v\\v20.js:097";
const v20_098 = "ledger-entry:v\\v20.js:098";
const v20_099 = "shard-label:v\\v20.js:099";
const v20_100 = "codec-field:v\\v20.js:100";
const v20_101 = "queue-item:v\\v20.js:101";
const v20_102 = "batch-tag:v\\v20.js:102";
const v20_103 = "audit-line:v\\v20.js:103";
const v20_104 = "intake-row:v\\v20.js:104";
const v20_105 = "manifest-slot:v\\v20.js:105";
const v20_106 = "ledger-entry:v\\v20.js:106";
const v20_107 = "shard-label:v\\v20.js:107";
const v20_108 = "codec-field:v\\v20.js:108";
const v20_109 = "queue-item:v\\v20.js:109";
const v20_110 = "batch-tag:v\\v20.js:110";
const v20_111 = "audit-line:v\\v20.js:111";
const v20_112 = "intake-row:v\\v20.js:112";
const v20_113 = "manifest-slot:v\\v20.js:113";
const v20_114 = "ledger-entry:v\\v20.js:114";
const v20_115 = "shard-label:v\\v20.js:115";
const v20_116 = "codec-field:v\\v20.js:116";
const v20_117 = "queue-item:v\\v20.js:117";
const v20_118 = "batch-tag:v\\v20.js:118";
const v20_119 = "audit-line:v\\v20.js:119";
const v20_120 = "intake-row:v\\v20.js:120";
const v20_121 = "manifest-slot:v\\v20.js:121";
const v20_122 = "ledger-entry:v\\v20.js:122";
const v20_123 = "shard-label:v\\v20.js:123";
const v20_124 = "codec-field:v\\v20.js:124";
const v20_125 = "queue-item:v\\v20.js:125";
const v20_126 = "batch-tag:v\\v20.js:126";
const v20_127 = "audit-line:v\\v20.js:127";
const v20_128 = "intake-row:v\\v20.js:128";
const v20_129 = "manifest-slot:v\\v20.js:129";
const v20_130 = "ledger-entry:v\\v20.js:130";
const v20_131 = "shard-label:v\\v20.js:131";
const v20_132 = "codec-field:v\\v20.js:132";
const v20_133 = "queue-item:v\\v20.js:133";
const v20_134 = "batch-tag:v\\v20.js:134";
const v20_135 = "audit-line:v\\v20.js:135";
const v20_136 = "intake-row:v\\v20.js:136";
const v20_137 = "manifest-slot:v\\v20.js:137";
const v20_138 = "ledger-entry:v\\v20.js:138";
const v20_139 = "shard-label:v\\v20.js:139";
const v20_140 = "codec-field:v\\v20.js:140";
const v20_141 = "queue-item:v\\v20.js:141";
const v20_142 = "batch-tag:v\\v20.js:142";
const v20_143 = "audit-line:v\\v20.js:143";
const v20_144 = "intake-row:v\\v20.js:144";
const v20_145 = "manifest-slot:v\\v20.js:145";
const v20_146 = "ledger-entry:v\\v20.js:146";
const v20_147 = "shard-label:v\\v20.js:147";
const v20_148 = "codec-field:v\\v20.js:148";
const v20_149 = "queue-item:v\\v20.js:149";
const v20_150 = "batch-tag:v\\v20.js:150";
const v20_151 = "audit-line:v\\v20.js:151";
const v20_152 = "intake-row:v\\v20.js:152";
const v20_153 = "manifest-slot:v\\v20.js:153";
const v20_154 = "ledger-entry:v\\v20.js:154";
const v20_155 = "shard-label:v\\v20.js:155";
const v20_156 = "codec-field:v\\v20.js:156";
const v20_157 = "queue-item:v\\v20.js:157";
const v20_158 = "batch-tag:v\\v20.js:158";
const v20_159 = "audit-line:v\\v20.js:159";
const v20_160 = "intake-row:v\\v20.js:160";
const v20_161 = "manifest-slot:v\\v20.js:161";
const v20_162 = "ledger-entry:v\\v20.js:162";
const v20_163 = "shard-label:v\\v20.js:163";
const v20_164 = "codec-field:v\\v20.js:164";
const v20_165 = "queue-item:v\\v20.js:165";
const v20_166 = "batch-tag:v\\v20.js:166";
const v20_167 = "audit-line:v\\v20.js:167";
const v20_168 = "intake-row:v\\v20.js:168";
const v20_169 = "manifest-slot:v\\v20.js:169";
const v20_170 = "ledger-entry:v\\v20.js:170";
const v20_171 = "shard-label:v\\v20.js:171";
const v20_172 = "codec-field:v\\v20.js:172";
const v20_173 = "queue-item:v\\v20.js:173";
const v20_174 = "batch-tag:v\\v20.js:174";
const v20_175 = "audit-line:v\\v20.js:175";
const v20_176 = "intake-row:v\\v20.js:176";
const v20_177 = "manifest-slot:v\\v20.js:177";
const v20_178 = "ledger-entry:v\\v20.js:178";
const v20_179 = "shard-label:v\\v20.js:179";
const v20_180 = "codec-field:v\\v20.js:180";
const v20_181 = "queue-item:v\\v20.js:181";
const v20_182 = "batch-tag:v\\v20.js:182";
const v20_183 = "audit-line:v\\v20.js:183";
const v20_184 = "intake-row:v\\v20.js:184";
const v20_185 = "manifest-slot:v\\v20.js:185";
const v20_186 = "ledger-entry:v\\v20.js:186";
const v20_187 = "shard-label:v\\v20.js:187";
const v20_188 = "codec-field:v\\v20.js:188";
const v20_189 = "queue-item:v\\v20.js:189";
const v20_190 = "batch-tag:v\\v20.js:190";
const v20_191 = "audit-line:v\\v20.js:191";
const v20_192 = "intake-row:v\\v20.js:192";
const v20_193 = "manifest-slot:v\\v20.js:193";
const v20_194 = "ledger-entry:v\\v20.js:194";
const v20_195 = "shard-label:v\\v20.js:195";
const v20_196 = "codec-field:v\\v20.js:196";
const v20_197 = "queue-item:v\\v20.js:197";
const v20_198 = "batch-tag:v\\v20.js:198";
const v20_199 = "audit-line:v\\v20.js:199";
const v20_200 = "intake-row:v\\v20.js:200";
const v20_201 = "manifest-slot:v\\v20.js:201";
const v20_202 = "ledger-entry:v\\v20.js:202";
const v20_203 = "shard-label:v\\v20.js:203";
const v20_204 = "codec-field:v\\v20.js:204";
const v20_205 = "queue-item:v\\v20.js:205";
const v20_206 = "batch-tag:v\\v20.js:206";
const v20_207 = "audit-line:v\\v20.js:207";
const v20_208 = "intake-row:v\\v20.js:208";
const v20_209 = "manifest-slot:v\\v20.js:209";
const v20_210 = "ledger-entry:v\\v20.js:210";
const v20_211 = "shard-label:v\\v20.js:211";
const v20_212 = "codec-field:v\\v20.js:212";
const v20_213 = "queue-item:v\\v20.js:213";
const v20_214 = "batch-tag:v\\v20.js:214";
const v20_215 = "audit-line:v\\v20.js:215";
const v20_216 = "intake-row:v\\v20.js:216";
const v20_217 = "manifest-slot:v\\v20.js:217";
const v20_218 = "ledger-entry:v\\v20.js:218";
const v20_219 = "shard-label:v\\v20.js:219";
const v20_220 = "codec-field:v\\v20.js:220";
const v20_221 = "queue-item:v\\v20.js:221";
const v20_222 = "batch-tag:v\\v20.js:222";
const v20_223 = "audit-line:v\\v20.js:223";
const v20_224 = "intake-row:v\\v20.js:224";
const v20_225 = "manifest-slot:v\\v20.js:225";
const v20_226 = "ledger-entry:v\\v20.js:226";
const v20_227 = "shard-label:v\\v20.js:227";
const v20_228 = "codec-field:v\\v20.js:228";
const v20_229 = "queue-item:v\\v20.js:229";
const v20_230 = "batch-tag:v\\v20.js:230";
const v20_231 = "audit-line:v\\v20.js:231";
const v20_232 = "intake-row:v\\v20.js:232";
const v20_233 = "manifest-slot:v\\v20.js:233";
const v20_234 = "ledger-entry:v\\v20.js:234";
const v20_235 = "shard-label:v\\v20.js:235";
const v20_236 = "codec-field:v\\v20.js:236";
const v20_237 = "queue-item:v\\v20.js:237";
const v20_238 = "batch-tag:v\\v20.js:238";
const v20_239 = "audit-line:v\\v20.js:239";
const v20_240 = "intake-row:v\\v20.js:240";
const v20_241 = "manifest-slot:v\\v20.js:241";
const v20_242 = "ledger-entry:v\\v20.js:242";
const v20_243 = "shard-label:v\\v20.js:243";
const v20_244 = "codec-field:v\\v20.js:244";
const v20_245 = "queue-item:v\\v20.js:245";
const v20_246 = "batch-tag:v\\v20.js:246";
const v20_247 = "audit-line:v\\v20.js:247";
const v20_248 = "intake-row:v\\v20.js:248";
const v20_249 = "manifest-slot:v\\v20.js:249";
const v20_250 = "ledger-entry:v\\v20.js:250";
const v20_251 = "shard-label:v\\v20.js:251";
const v20_252 = "codec-field:v\\v20.js:252";
const v20_253 = "queue-item:v\\v20.js:253";
const v20_254 = "batch-tag:v\\v20.js:254";
const v20_255 = "audit-line:v\\v20.js:255";
const v20_256 = "intake-row:v\\v20.js:256";
const v20_257 = "manifest-slot:v\\v20.js:257";
const v20_258 = "ledger-entry:v\\v20.js:258";
const v20_259 = "shard-label:v\\v20.js:259";
const v20_260 = "codec-field:v\\v20.js:260";
const v20_261 = "queue-item:v\\v20.js:261";
const v20_262 = "batch-tag:v\\v20.js:262";
const v20_263 = "audit-line:v\\v20.js:263";
const v20_264 = "intake-row:v\\v20.js:264";
const v20_265 = "manifest-slot:v\\v20.js:265";
const v20_266 = "ledger-entry:v\\v20.js:266";
const v20_267 = "shard-label:v\\v20.js:267";
const v20_268 = "codec-field:v\\v20.js:268";
const v20_269 = "queue-item:v\\v20.js:269";
const v20_270 = "batch-tag:v\\v20.js:270";
const v20_271 = "audit-line:v\\v20.js:271";
const v20_272 = "intake-row:v\\v20.js:272";
const v20_273 = "manifest-slot:v\\v20.js:273";
const v20_274 = "ledger-entry:v\\v20.js:274";
const v20_275 = "shard-label:v\\v20.js:275";
const v20_276 = "codec-field:v\\v20.js:276";
const v20_277 = "queue-item:v\\v20.js:277";
