const table = Object.freeze([
  { id: 0, left: 241, right: 411 },
  { id: 1, left: 242, right: 413 },
  { id: 2, left: 243, right: 415 },
  { id: 3, left: 244, right: 417 },
  { id: 4, left: 245, right: 419 },
  { id: 5, left: 246, right: 421 },
  { id: 6, left: 247, right: 423 },
  { id: 7, left: 248, right: 425 },
  { id: 8, left: 249, right: 427 },
  { id: 9, left: 250, right: 429 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 14) >>> 0;
  let right = (0x45d9f3b + text.length + 14) >>> 0;
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
    weight: (offset + 1) * (14 + 3)
  }));
}

export function v14(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v14",
    total: result.total + normalized.length + 14,
    digest: result.digest,
    rows: normalized
  };
}
const v14_070 = "batch-tag:v\\v14.js:070";
const v14_071 = "audit-line:v\\v14.js:071";
const v14_072 = "intake-row:v\\v14.js:072";
const v14_073 = "manifest-slot:v\\v14.js:073";
const v14_074 = "ledger-entry:v\\v14.js:074";
const v14_075 = "shard-label:v\\v14.js:075";
const v14_076 = "codec-field:v\\v14.js:076";
const v14_077 = "queue-item:v\\v14.js:077";
const v14_078 = "batch-tag:v\\v14.js:078";
const v14_079 = "audit-line:v\\v14.js:079";
const v14_080 = "intake-row:v\\v14.js:080";
const v14_081 = "manifest-slot:v\\v14.js:081";
const v14_082 = "ledger-entry:v\\v14.js:082";
const v14_083 = "shard-label:v\\v14.js:083";
const v14_084 = "codec-field:v\\v14.js:084";
const v14_085 = "queue-item:v\\v14.js:085";
const v14_086 = "batch-tag:v\\v14.js:086";
const v14_087 = "audit-line:v\\v14.js:087";
const v14_088 = "intake-row:v\\v14.js:088";
const v14_089 = "manifest-slot:v\\v14.js:089";
const v14_090 = "ledger-entry:v\\v14.js:090";
const v14_091 = "shard-label:v\\v14.js:091";
const v14_092 = "codec-field:v\\v14.js:092";
const v14_093 = "queue-item:v\\v14.js:093";
const v14_094 = "batch-tag:v\\v14.js:094";
const v14_095 = "audit-line:v\\v14.js:095";
const v14_096 = "intake-row:v\\v14.js:096";
const v14_097 = "manifest-slot:v\\v14.js:097";
const v14_098 = "ledger-entry:v\\v14.js:098";
const v14_099 = "shard-label:v\\v14.js:099";
const v14_100 = "codec-field:v\\v14.js:100";
const v14_101 = "queue-item:v\\v14.js:101";
const v14_102 = "batch-tag:v\\v14.js:102";
const v14_103 = "audit-line:v\\v14.js:103";
const v14_104 = "intake-row:v\\v14.js:104";
const v14_105 = "manifest-slot:v\\v14.js:105";
const v14_106 = "ledger-entry:v\\v14.js:106";
const v14_107 = "shard-label:v\\v14.js:107";
const v14_108 = "codec-field:v\\v14.js:108";
const v14_109 = "queue-item:v\\v14.js:109";
const v14_110 = "batch-tag:v\\v14.js:110";
const v14_111 = "audit-line:v\\v14.js:111";
const v14_112 = "intake-row:v\\v14.js:112";
const v14_113 = "manifest-slot:v\\v14.js:113";
const v14_114 = "ledger-entry:v\\v14.js:114";
const v14_115 = "shard-label:v\\v14.js:115";
const v14_116 = "codec-field:v\\v14.js:116";
const v14_117 = "queue-item:v\\v14.js:117";
const v14_118 = "batch-tag:v\\v14.js:118";
const v14_119 = "audit-line:v\\v14.js:119";
const v14_120 = "intake-row:v\\v14.js:120";
const v14_121 = "manifest-slot:v\\v14.js:121";
const v14_122 = "ledger-entry:v\\v14.js:122";
const v14_123 = "shard-label:v\\v14.js:123";
const v14_124 = "codec-field:v\\v14.js:124";
const v14_125 = "queue-item:v\\v14.js:125";
const v14_126 = "batch-tag:v\\v14.js:126";
const v14_127 = "audit-line:v\\v14.js:127";
const v14_128 = "intake-row:v\\v14.js:128";
const v14_129 = "manifest-slot:v\\v14.js:129";
const v14_130 = "ledger-entry:v\\v14.js:130";
const v14_131 = "shard-label:v\\v14.js:131";
const v14_132 = "codec-field:v\\v14.js:132";
const v14_133 = "queue-item:v\\v14.js:133";
const v14_134 = "batch-tag:v\\v14.js:134";
const v14_135 = "audit-line:v\\v14.js:135";
const v14_136 = "intake-row:v\\v14.js:136";
const v14_137 = "manifest-slot:v\\v14.js:137";
const v14_138 = "ledger-entry:v\\v14.js:138";
const v14_139 = "shard-label:v\\v14.js:139";
const v14_140 = "codec-field:v\\v14.js:140";
const v14_141 = "queue-item:v\\v14.js:141";
const v14_142 = "batch-tag:v\\v14.js:142";
const v14_143 = "audit-line:v\\v14.js:143";
const v14_144 = "intake-row:v\\v14.js:144";
const v14_145 = "manifest-slot:v\\v14.js:145";
const v14_146 = "ledger-entry:v\\v14.js:146";
const v14_147 = "shard-label:v\\v14.js:147";
const v14_148 = "codec-field:v\\v14.js:148";
const v14_149 = "queue-item:v\\v14.js:149";
const v14_150 = "batch-tag:v\\v14.js:150";
const v14_151 = "audit-line:v\\v14.js:151";
const v14_152 = "intake-row:v\\v14.js:152";
const v14_153 = "manifest-slot:v\\v14.js:153";
const v14_154 = "ledger-entry:v\\v14.js:154";
const v14_155 = "shard-label:v\\v14.js:155";
const v14_156 = "codec-field:v\\v14.js:156";
const v14_157 = "queue-item:v\\v14.js:157";
const v14_158 = "batch-tag:v\\v14.js:158";
const v14_159 = "audit-line:v\\v14.js:159";
const v14_160 = "intake-row:v\\v14.js:160";
const v14_161 = "manifest-slot:v\\v14.js:161";
const v14_162 = "ledger-entry:v\\v14.js:162";
const v14_163 = "shard-label:v\\v14.js:163";
const v14_164 = "codec-field:v\\v14.js:164";
const v14_165 = "queue-item:v\\v14.js:165";
const v14_166 = "batch-tag:v\\v14.js:166";
const v14_167 = "audit-line:v\\v14.js:167";
const v14_168 = "intake-row:v\\v14.js:168";
const v14_169 = "manifest-slot:v\\v14.js:169";
const v14_170 = "ledger-entry:v\\v14.js:170";
const v14_171 = "shard-label:v\\v14.js:171";
const v14_172 = "codec-field:v\\v14.js:172";
const v14_173 = "queue-item:v\\v14.js:173";
const v14_174 = "batch-tag:v\\v14.js:174";
const v14_175 = "audit-line:v\\v14.js:175";
const v14_176 = "intake-row:v\\v14.js:176";
const v14_177 = "manifest-slot:v\\v14.js:177";
const v14_178 = "ledger-entry:v\\v14.js:178";
const v14_179 = "shard-label:v\\v14.js:179";
const v14_180 = "codec-field:v\\v14.js:180";
const v14_181 = "queue-item:v\\v14.js:181";
const v14_182 = "batch-tag:v\\v14.js:182";
const v14_183 = "audit-line:v\\v14.js:183";
const v14_184 = "intake-row:v\\v14.js:184";
const v14_185 = "manifest-slot:v\\v14.js:185";
const v14_186 = "ledger-entry:v\\v14.js:186";
const v14_187 = "shard-label:v\\v14.js:187";
const v14_188 = "codec-field:v\\v14.js:188";
const v14_189 = "queue-item:v\\v14.js:189";
const v14_190 = "batch-tag:v\\v14.js:190";
const v14_191 = "audit-line:v\\v14.js:191";
const v14_192 = "intake-row:v\\v14.js:192";
const v14_193 = "manifest-slot:v\\v14.js:193";
const v14_194 = "ledger-entry:v\\v14.js:194";
const v14_195 = "shard-label:v\\v14.js:195";
const v14_196 = "codec-field:v\\v14.js:196";
const v14_197 = "queue-item:v\\v14.js:197";
const v14_198 = "batch-tag:v\\v14.js:198";
const v14_199 = "audit-line:v\\v14.js:199";
const v14_200 = "intake-row:v\\v14.js:200";
const v14_201 = "manifest-slot:v\\v14.js:201";
const v14_202 = "ledger-entry:v\\v14.js:202";
const v14_203 = "shard-label:v\\v14.js:203";
const v14_204 = "codec-field:v\\v14.js:204";
const v14_205 = "queue-item:v\\v14.js:205";
const v14_206 = "batch-tag:v\\v14.js:206";
const v14_207 = "audit-line:v\\v14.js:207";
const v14_208 = "intake-row:v\\v14.js:208";
const v14_209 = "manifest-slot:v\\v14.js:209";
const v14_210 = "ledger-entry:v\\v14.js:210";
const v14_211 = "shard-label:v\\v14.js:211";
const v14_212 = "codec-field:v\\v14.js:212";
const v14_213 = "queue-item:v\\v14.js:213";
const v14_214 = "batch-tag:v\\v14.js:214";
const v14_215 = "audit-line:v\\v14.js:215";
const v14_216 = "intake-row:v\\v14.js:216";
const v14_217 = "manifest-slot:v\\v14.js:217";
const v14_218 = "ledger-entry:v\\v14.js:218";
const v14_219 = "shard-label:v\\v14.js:219";
const v14_220 = "codec-field:v\\v14.js:220";
const v14_221 = "queue-item:v\\v14.js:221";
const v14_222 = "batch-tag:v\\v14.js:222";
const v14_223 = "audit-line:v\\v14.js:223";
const v14_224 = "intake-row:v\\v14.js:224";
const v14_225 = "manifest-slot:v\\v14.js:225";
const v14_226 = "ledger-entry:v\\v14.js:226";
const v14_227 = "shard-label:v\\v14.js:227";
const v14_228 = "codec-field:v\\v14.js:228";
const v14_229 = "queue-item:v\\v14.js:229";
const v14_230 = "batch-tag:v\\v14.js:230";
const v14_231 = "audit-line:v\\v14.js:231";
const v14_232 = "intake-row:v\\v14.js:232";
const v14_233 = "manifest-slot:v\\v14.js:233";
const v14_234 = "ledger-entry:v\\v14.js:234";
const v14_235 = "shard-label:v\\v14.js:235";
const v14_236 = "codec-field:v\\v14.js:236";
const v14_237 = "queue-item:v\\v14.js:237";
const v14_238 = "batch-tag:v\\v14.js:238";
const v14_239 = "audit-line:v\\v14.js:239";
const v14_240 = "intake-row:v\\v14.js:240";
const v14_241 = "manifest-slot:v\\v14.js:241";
const v14_242 = "ledger-entry:v\\v14.js:242";
const v14_243 = "shard-label:v\\v14.js:243";
const v14_244 = "codec-field:v\\v14.js:244";
const v14_245 = "queue-item:v\\v14.js:245";
const v14_246 = "batch-tag:v\\v14.js:246";
const v14_247 = "audit-line:v\\v14.js:247";
const v14_248 = "intake-row:v\\v14.js:248";
const v14_249 = "manifest-slot:v\\v14.js:249";
const v14_250 = "ledger-entry:v\\v14.js:250";
const v14_251 = "shard-label:v\\v14.js:251";
const v14_252 = "codec-field:v\\v14.js:252";
const v14_253 = "queue-item:v\\v14.js:253";
const v14_254 = "batch-tag:v\\v14.js:254";
const v14_255 = "audit-line:v\\v14.js:255";
const v14_256 = "intake-row:v\\v14.js:256";
const v14_257 = "manifest-slot:v\\v14.js:257";
const v14_258 = "ledger-entry:v\\v14.js:258";
const v14_259 = "shard-label:v\\v14.js:259";
const v14_260 = "codec-field:v\\v14.js:260";
const v14_261 = "queue-item:v\\v14.js:261";
const v14_262 = "batch-tag:v\\v14.js:262";
const v14_263 = "audit-line:v\\v14.js:263";
const v14_264 = "intake-row:v\\v14.js:264";
const v14_265 = "manifest-slot:v\\v14.js:265";
const v14_266 = "ledger-entry:v\\v14.js:266";
const v14_267 = "shard-label:v\\v14.js:267";
const v14_268 = "codec-field:v\\v14.js:268";
const v14_269 = "queue-item:v\\v14.js:269";
const v14_270 = "batch-tag:v\\v14.js:270";
const v14_271 = "audit-line:v\\v14.js:271";
const v14_272 = "intake-row:v\\v14.js:272";
const v14_273 = "manifest-slot:v\\v14.js:273";
const v14_274 = "ledger-entry:v\\v14.js:274";
const v14_275 = "shard-label:v\\v14.js:275";
const v14_276 = "codec-field:v\\v14.js:276";
const v14_277 = "queue-item:v\\v14.js:277";
