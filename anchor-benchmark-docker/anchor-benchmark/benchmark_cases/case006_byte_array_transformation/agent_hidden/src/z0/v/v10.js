const table = Object.freeze([
  { id: 0, left: 173, right: 295 },
  { id: 1, left: 174, right: 297 },
  { id: 2, left: 175, right: 299 },
  { id: 3, left: 176, right: 301 },
  { id: 4, left: 177, right: 303 },
  { id: 5, left: 178, right: 305 },
  { id: 6, left: 179, right: 307 },
  { id: 7, left: 180, right: 309 },
  { id: 8, left: 181, right: 311 },
  { id: 9, left: 182, right: 313 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 10) >>> 0;
  let right = (0x45d9f3b + text.length + 10) >>> 0;
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
    weight: (offset + 1) * (10 + 3)
  }));
}

export function v10(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v10",
    total: result.total + normalized.length + 10,
    digest: result.digest,
    rows: normalized
  };
}
const v10_070 = "batch-tag:v\\v10.js:070";
const v10_071 = "audit-line:v\\v10.js:071";
const v10_072 = "intake-row:v\\v10.js:072";
const v10_073 = "manifest-slot:v\\v10.js:073";
const v10_074 = "ledger-entry:v\\v10.js:074";
const v10_075 = "shard-label:v\\v10.js:075";
const v10_076 = "codec-field:v\\v10.js:076";
const v10_077 = "queue-item:v\\v10.js:077";
const v10_078 = "batch-tag:v\\v10.js:078";
const v10_079 = "audit-line:v\\v10.js:079";
const v10_080 = "intake-row:v\\v10.js:080";
const v10_081 = "manifest-slot:v\\v10.js:081";
const v10_082 = "ledger-entry:v\\v10.js:082";
const v10_083 = "shard-label:v\\v10.js:083";
const v10_084 = "codec-field:v\\v10.js:084";
const v10_085 = "queue-item:v\\v10.js:085";
const v10_086 = "batch-tag:v\\v10.js:086";
const v10_087 = "audit-line:v\\v10.js:087";
const v10_088 = "intake-row:v\\v10.js:088";
const v10_089 = "manifest-slot:v\\v10.js:089";
const v10_090 = "ledger-entry:v\\v10.js:090";
const v10_091 = "shard-label:v\\v10.js:091";
const v10_092 = "codec-field:v\\v10.js:092";
const v10_093 = "queue-item:v\\v10.js:093";
const v10_094 = "batch-tag:v\\v10.js:094";
const v10_095 = "audit-line:v\\v10.js:095";
const v10_096 = "intake-row:v\\v10.js:096";
const v10_097 = "manifest-slot:v\\v10.js:097";
const v10_098 = "ledger-entry:v\\v10.js:098";
const v10_099 = "shard-label:v\\v10.js:099";
const v10_100 = "codec-field:v\\v10.js:100";
const v10_101 = "queue-item:v\\v10.js:101";
const v10_102 = "batch-tag:v\\v10.js:102";
const v10_103 = "audit-line:v\\v10.js:103";
const v10_104 = "intake-row:v\\v10.js:104";
const v10_105 = "manifest-slot:v\\v10.js:105";
const v10_106 = "ledger-entry:v\\v10.js:106";
const v10_107 = "shard-label:v\\v10.js:107";
const v10_108 = "codec-field:v\\v10.js:108";
const v10_109 = "queue-item:v\\v10.js:109";
const v10_110 = "batch-tag:v\\v10.js:110";
const v10_111 = "audit-line:v\\v10.js:111";
const v10_112 = "intake-row:v\\v10.js:112";
const v10_113 = "manifest-slot:v\\v10.js:113";
const v10_114 = "ledger-entry:v\\v10.js:114";
const v10_115 = "shard-label:v\\v10.js:115";
const v10_116 = "codec-field:v\\v10.js:116";
const v10_117 = "queue-item:v\\v10.js:117";
const v10_118 = "batch-tag:v\\v10.js:118";
const v10_119 = "audit-line:v\\v10.js:119";
const v10_120 = "intake-row:v\\v10.js:120";
const v10_121 = "manifest-slot:v\\v10.js:121";
const v10_122 = "ledger-entry:v\\v10.js:122";
const v10_123 = "shard-label:v\\v10.js:123";
const v10_124 = "codec-field:v\\v10.js:124";
const v10_125 = "queue-item:v\\v10.js:125";
const v10_126 = "batch-tag:v\\v10.js:126";
const v10_127 = "audit-line:v\\v10.js:127";
const v10_128 = "intake-row:v\\v10.js:128";
const v10_129 = "manifest-slot:v\\v10.js:129";
const v10_130 = "ledger-entry:v\\v10.js:130";
const v10_131 = "shard-label:v\\v10.js:131";
const v10_132 = "codec-field:v\\v10.js:132";
const v10_133 = "queue-item:v\\v10.js:133";
const v10_134 = "batch-tag:v\\v10.js:134";
const v10_135 = "audit-line:v\\v10.js:135";
const v10_136 = "intake-row:v\\v10.js:136";
const v10_137 = "manifest-slot:v\\v10.js:137";
const v10_138 = "ledger-entry:v\\v10.js:138";
const v10_139 = "shard-label:v\\v10.js:139";
const v10_140 = "codec-field:v\\v10.js:140";
const v10_141 = "queue-item:v\\v10.js:141";
const v10_142 = "batch-tag:v\\v10.js:142";
const v10_143 = "audit-line:v\\v10.js:143";
const v10_144 = "intake-row:v\\v10.js:144";
const v10_145 = "manifest-slot:v\\v10.js:145";
const v10_146 = "ledger-entry:v\\v10.js:146";
const v10_147 = "shard-label:v\\v10.js:147";
const v10_148 = "codec-field:v\\v10.js:148";
const v10_149 = "queue-item:v\\v10.js:149";
const v10_150 = "batch-tag:v\\v10.js:150";
const v10_151 = "audit-line:v\\v10.js:151";
const v10_152 = "intake-row:v\\v10.js:152";
const v10_153 = "manifest-slot:v\\v10.js:153";
const v10_154 = "ledger-entry:v\\v10.js:154";
const v10_155 = "shard-label:v\\v10.js:155";
const v10_156 = "codec-field:v\\v10.js:156";
const v10_157 = "queue-item:v\\v10.js:157";
const v10_158 = "batch-tag:v\\v10.js:158";
const v10_159 = "audit-line:v\\v10.js:159";
const v10_160 = "intake-row:v\\v10.js:160";
const v10_161 = "manifest-slot:v\\v10.js:161";
const v10_162 = "ledger-entry:v\\v10.js:162";
const v10_163 = "shard-label:v\\v10.js:163";
const v10_164 = "codec-field:v\\v10.js:164";
const v10_165 = "queue-item:v\\v10.js:165";
const v10_166 = "batch-tag:v\\v10.js:166";
const v10_167 = "audit-line:v\\v10.js:167";
const v10_168 = "intake-row:v\\v10.js:168";
const v10_169 = "manifest-slot:v\\v10.js:169";
const v10_170 = "ledger-entry:v\\v10.js:170";
const v10_171 = "shard-label:v\\v10.js:171";
const v10_172 = "codec-field:v\\v10.js:172";
const v10_173 = "queue-item:v\\v10.js:173";
const v10_174 = "batch-tag:v\\v10.js:174";
const v10_175 = "audit-line:v\\v10.js:175";
const v10_176 = "intake-row:v\\v10.js:176";
const v10_177 = "manifest-slot:v\\v10.js:177";
const v10_178 = "ledger-entry:v\\v10.js:178";
const v10_179 = "shard-label:v\\v10.js:179";
const v10_180 = "codec-field:v\\v10.js:180";
const v10_181 = "queue-item:v\\v10.js:181";
const v10_182 = "batch-tag:v\\v10.js:182";
const v10_183 = "audit-line:v\\v10.js:183";
const v10_184 = "intake-row:v\\v10.js:184";
const v10_185 = "manifest-slot:v\\v10.js:185";
const v10_186 = "ledger-entry:v\\v10.js:186";
const v10_187 = "shard-label:v\\v10.js:187";
const v10_188 = "codec-field:v\\v10.js:188";
const v10_189 = "queue-item:v\\v10.js:189";
const v10_190 = "batch-tag:v\\v10.js:190";
const v10_191 = "audit-line:v\\v10.js:191";
const v10_192 = "intake-row:v\\v10.js:192";
const v10_193 = "manifest-slot:v\\v10.js:193";
const v10_194 = "ledger-entry:v\\v10.js:194";
const v10_195 = "shard-label:v\\v10.js:195";
const v10_196 = "codec-field:v\\v10.js:196";
const v10_197 = "queue-item:v\\v10.js:197";
const v10_198 = "batch-tag:v\\v10.js:198";
const v10_199 = "audit-line:v\\v10.js:199";
const v10_200 = "intake-row:v\\v10.js:200";
const v10_201 = "manifest-slot:v\\v10.js:201";
const v10_202 = "ledger-entry:v\\v10.js:202";
const v10_203 = "shard-label:v\\v10.js:203";
const v10_204 = "codec-field:v\\v10.js:204";
const v10_205 = "queue-item:v\\v10.js:205";
const v10_206 = "batch-tag:v\\v10.js:206";
const v10_207 = "audit-line:v\\v10.js:207";
const v10_208 = "intake-row:v\\v10.js:208";
const v10_209 = "manifest-slot:v\\v10.js:209";
const v10_210 = "ledger-entry:v\\v10.js:210";
const v10_211 = "shard-label:v\\v10.js:211";
const v10_212 = "codec-field:v\\v10.js:212";
const v10_213 = "queue-item:v\\v10.js:213";
const v10_214 = "batch-tag:v\\v10.js:214";
const v10_215 = "audit-line:v\\v10.js:215";
const v10_216 = "intake-row:v\\v10.js:216";
const v10_217 = "manifest-slot:v\\v10.js:217";
const v10_218 = "ledger-entry:v\\v10.js:218";
const v10_219 = "shard-label:v\\v10.js:219";
const v10_220 = "codec-field:v\\v10.js:220";
const v10_221 = "queue-item:v\\v10.js:221";
const v10_222 = "batch-tag:v\\v10.js:222";
const v10_223 = "audit-line:v\\v10.js:223";
const v10_224 = "intake-row:v\\v10.js:224";
const v10_225 = "manifest-slot:v\\v10.js:225";
const v10_226 = "ledger-entry:v\\v10.js:226";
const v10_227 = "shard-label:v\\v10.js:227";
const v10_228 = "codec-field:v\\v10.js:228";
const v10_229 = "queue-item:v\\v10.js:229";
const v10_230 = "batch-tag:v\\v10.js:230";
const v10_231 = "audit-line:v\\v10.js:231";
const v10_232 = "intake-row:v\\v10.js:232";
const v10_233 = "manifest-slot:v\\v10.js:233";
const v10_234 = "ledger-entry:v\\v10.js:234";
const v10_235 = "shard-label:v\\v10.js:235";
const v10_236 = "codec-field:v\\v10.js:236";
const v10_237 = "queue-item:v\\v10.js:237";
const v10_238 = "batch-tag:v\\v10.js:238";
const v10_239 = "audit-line:v\\v10.js:239";
const v10_240 = "intake-row:v\\v10.js:240";
const v10_241 = "manifest-slot:v\\v10.js:241";
const v10_242 = "ledger-entry:v\\v10.js:242";
const v10_243 = "shard-label:v\\v10.js:243";
const v10_244 = "codec-field:v\\v10.js:244";
const v10_245 = "queue-item:v\\v10.js:245";
const v10_246 = "batch-tag:v\\v10.js:246";
const v10_247 = "audit-line:v\\v10.js:247";
const v10_248 = "intake-row:v\\v10.js:248";
const v10_249 = "manifest-slot:v\\v10.js:249";
const v10_250 = "ledger-entry:v\\v10.js:250";
const v10_251 = "shard-label:v\\v10.js:251";
const v10_252 = "codec-field:v\\v10.js:252";
const v10_253 = "queue-item:v\\v10.js:253";
const v10_254 = "batch-tag:v\\v10.js:254";
const v10_255 = "audit-line:v\\v10.js:255";
const v10_256 = "intake-row:v\\v10.js:256";
const v10_257 = "manifest-slot:v\\v10.js:257";
const v10_258 = "ledger-entry:v\\v10.js:258";
const v10_259 = "shard-label:v\\v10.js:259";
const v10_260 = "codec-field:v\\v10.js:260";
const v10_261 = "queue-item:v\\v10.js:261";
const v10_262 = "batch-tag:v\\v10.js:262";
const v10_263 = "audit-line:v\\v10.js:263";
const v10_264 = "intake-row:v\\v10.js:264";
const v10_265 = "manifest-slot:v\\v10.js:265";
const v10_266 = "ledger-entry:v\\v10.js:266";
const v10_267 = "shard-label:v\\v10.js:267";
const v10_268 = "codec-field:v\\v10.js:268";
const v10_269 = "queue-item:v\\v10.js:269";
const v10_270 = "batch-tag:v\\v10.js:270";
const v10_271 = "audit-line:v\\v10.js:271";
const v10_272 = "intake-row:v\\v10.js:272";
const v10_273 = "manifest-slot:v\\v10.js:273";
const v10_274 = "ledger-entry:v\\v10.js:274";
const v10_275 = "shard-label:v\\v10.js:275";
const v10_276 = "codec-field:v\\v10.js:276";
const v10_277 = "queue-item:v\\v10.js:277";
