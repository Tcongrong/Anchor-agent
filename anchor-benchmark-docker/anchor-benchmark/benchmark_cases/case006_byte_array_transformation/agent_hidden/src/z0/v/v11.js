const table = Object.freeze([
  { id: 0, left: 190, right: 324 },
  { id: 1, left: 191, right: 326 },
  { id: 2, left: 192, right: 328 },
  { id: 3, left: 193, right: 330 },
  { id: 4, left: 194, right: 332 },
  { id: 5, left: 195, right: 334 },
  { id: 6, left: 196, right: 336 },
  { id: 7, left: 197, right: 338 },
  { id: 8, left: 198, right: 340 },
  { id: 9, left: 199, right: 342 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 11) >>> 0;
  let right = (0x45d9f3b + text.length + 11) >>> 0;
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
    weight: (offset + 1) * (11 + 3)
  }));
}

export function v11(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v11",
    total: result.total + normalized.length + 11,
    digest: result.digest,
    rows: normalized
  };
}
const v11_070 = "batch-tag:v\\v11.js:070";
const v11_071 = "audit-line:v\\v11.js:071";
const v11_072 = "intake-row:v\\v11.js:072";
const v11_073 = "manifest-slot:v\\v11.js:073";
const v11_074 = "ledger-entry:v\\v11.js:074";
const v11_075 = "shard-label:v\\v11.js:075";
const v11_076 = "codec-field:v\\v11.js:076";
const v11_077 = "queue-item:v\\v11.js:077";
const v11_078 = "batch-tag:v\\v11.js:078";
const v11_079 = "audit-line:v\\v11.js:079";
const v11_080 = "intake-row:v\\v11.js:080";
const v11_081 = "manifest-slot:v\\v11.js:081";
const v11_082 = "ledger-entry:v\\v11.js:082";
const v11_083 = "shard-label:v\\v11.js:083";
const v11_084 = "codec-field:v\\v11.js:084";
const v11_085 = "queue-item:v\\v11.js:085";
const v11_086 = "batch-tag:v\\v11.js:086";
const v11_087 = "audit-line:v\\v11.js:087";
const v11_088 = "intake-row:v\\v11.js:088";
const v11_089 = "manifest-slot:v\\v11.js:089";
const v11_090 = "ledger-entry:v\\v11.js:090";
const v11_091 = "shard-label:v\\v11.js:091";
const v11_092 = "codec-field:v\\v11.js:092";
const v11_093 = "queue-item:v\\v11.js:093";
const v11_094 = "batch-tag:v\\v11.js:094";
const v11_095 = "audit-line:v\\v11.js:095";
const v11_096 = "intake-row:v\\v11.js:096";
const v11_097 = "manifest-slot:v\\v11.js:097";
const v11_098 = "ledger-entry:v\\v11.js:098";
const v11_099 = "shard-label:v\\v11.js:099";
const v11_100 = "codec-field:v\\v11.js:100";
const v11_101 = "queue-item:v\\v11.js:101";
const v11_102 = "batch-tag:v\\v11.js:102";
const v11_103 = "audit-line:v\\v11.js:103";
const v11_104 = "intake-row:v\\v11.js:104";
const v11_105 = "manifest-slot:v\\v11.js:105";
const v11_106 = "ledger-entry:v\\v11.js:106";
const v11_107 = "shard-label:v\\v11.js:107";
const v11_108 = "codec-field:v\\v11.js:108";
const v11_109 = "queue-item:v\\v11.js:109";
const v11_110 = "batch-tag:v\\v11.js:110";
const v11_111 = "audit-line:v\\v11.js:111";
const v11_112 = "intake-row:v\\v11.js:112";
const v11_113 = "manifest-slot:v\\v11.js:113";
const v11_114 = "ledger-entry:v\\v11.js:114";
const v11_115 = "shard-label:v\\v11.js:115";
const v11_116 = "codec-field:v\\v11.js:116";
const v11_117 = "queue-item:v\\v11.js:117";
const v11_118 = "batch-tag:v\\v11.js:118";
const v11_119 = "audit-line:v\\v11.js:119";
const v11_120 = "intake-row:v\\v11.js:120";
const v11_121 = "manifest-slot:v\\v11.js:121";
const v11_122 = "ledger-entry:v\\v11.js:122";
const v11_123 = "shard-label:v\\v11.js:123";
const v11_124 = "codec-field:v\\v11.js:124";
const v11_125 = "queue-item:v\\v11.js:125";
const v11_126 = "batch-tag:v\\v11.js:126";
const v11_127 = "audit-line:v\\v11.js:127";
const v11_128 = "intake-row:v\\v11.js:128";
const v11_129 = "manifest-slot:v\\v11.js:129";
const v11_130 = "ledger-entry:v\\v11.js:130";
const v11_131 = "shard-label:v\\v11.js:131";
const v11_132 = "codec-field:v\\v11.js:132";
const v11_133 = "queue-item:v\\v11.js:133";
const v11_134 = "batch-tag:v\\v11.js:134";
const v11_135 = "audit-line:v\\v11.js:135";
const v11_136 = "intake-row:v\\v11.js:136";
const v11_137 = "manifest-slot:v\\v11.js:137";
const v11_138 = "ledger-entry:v\\v11.js:138";
const v11_139 = "shard-label:v\\v11.js:139";
const v11_140 = "codec-field:v\\v11.js:140";
const v11_141 = "queue-item:v\\v11.js:141";
const v11_142 = "batch-tag:v\\v11.js:142";
const v11_143 = "audit-line:v\\v11.js:143";
const v11_144 = "intake-row:v\\v11.js:144";
const v11_145 = "manifest-slot:v\\v11.js:145";
const v11_146 = "ledger-entry:v\\v11.js:146";
const v11_147 = "shard-label:v\\v11.js:147";
const v11_148 = "codec-field:v\\v11.js:148";
const v11_149 = "queue-item:v\\v11.js:149";
const v11_150 = "batch-tag:v\\v11.js:150";
const v11_151 = "audit-line:v\\v11.js:151";
const v11_152 = "intake-row:v\\v11.js:152";
const v11_153 = "manifest-slot:v\\v11.js:153";
const v11_154 = "ledger-entry:v\\v11.js:154";
const v11_155 = "shard-label:v\\v11.js:155";
const v11_156 = "codec-field:v\\v11.js:156";
const v11_157 = "queue-item:v\\v11.js:157";
const v11_158 = "batch-tag:v\\v11.js:158";
const v11_159 = "audit-line:v\\v11.js:159";
const v11_160 = "intake-row:v\\v11.js:160";
const v11_161 = "manifest-slot:v\\v11.js:161";
const v11_162 = "ledger-entry:v\\v11.js:162";
const v11_163 = "shard-label:v\\v11.js:163";
const v11_164 = "codec-field:v\\v11.js:164";
const v11_165 = "queue-item:v\\v11.js:165";
const v11_166 = "batch-tag:v\\v11.js:166";
const v11_167 = "audit-line:v\\v11.js:167";
const v11_168 = "intake-row:v\\v11.js:168";
const v11_169 = "manifest-slot:v\\v11.js:169";
const v11_170 = "ledger-entry:v\\v11.js:170";
const v11_171 = "shard-label:v\\v11.js:171";
const v11_172 = "codec-field:v\\v11.js:172";
const v11_173 = "queue-item:v\\v11.js:173";
const v11_174 = "batch-tag:v\\v11.js:174";
const v11_175 = "audit-line:v\\v11.js:175";
const v11_176 = "intake-row:v\\v11.js:176";
const v11_177 = "manifest-slot:v\\v11.js:177";
const v11_178 = "ledger-entry:v\\v11.js:178";
const v11_179 = "shard-label:v\\v11.js:179";
const v11_180 = "codec-field:v\\v11.js:180";
const v11_181 = "queue-item:v\\v11.js:181";
const v11_182 = "batch-tag:v\\v11.js:182";
const v11_183 = "audit-line:v\\v11.js:183";
const v11_184 = "intake-row:v\\v11.js:184";
const v11_185 = "manifest-slot:v\\v11.js:185";
const v11_186 = "ledger-entry:v\\v11.js:186";
const v11_187 = "shard-label:v\\v11.js:187";
const v11_188 = "codec-field:v\\v11.js:188";
const v11_189 = "queue-item:v\\v11.js:189";
const v11_190 = "batch-tag:v\\v11.js:190";
const v11_191 = "audit-line:v\\v11.js:191";
const v11_192 = "intake-row:v\\v11.js:192";
const v11_193 = "manifest-slot:v\\v11.js:193";
const v11_194 = "ledger-entry:v\\v11.js:194";
const v11_195 = "shard-label:v\\v11.js:195";
const v11_196 = "codec-field:v\\v11.js:196";
const v11_197 = "queue-item:v\\v11.js:197";
const v11_198 = "batch-tag:v\\v11.js:198";
const v11_199 = "audit-line:v\\v11.js:199";
const v11_200 = "intake-row:v\\v11.js:200";
const v11_201 = "manifest-slot:v\\v11.js:201";
const v11_202 = "ledger-entry:v\\v11.js:202";
const v11_203 = "shard-label:v\\v11.js:203";
const v11_204 = "codec-field:v\\v11.js:204";
const v11_205 = "queue-item:v\\v11.js:205";
const v11_206 = "batch-tag:v\\v11.js:206";
const v11_207 = "audit-line:v\\v11.js:207";
const v11_208 = "intake-row:v\\v11.js:208";
const v11_209 = "manifest-slot:v\\v11.js:209";
const v11_210 = "ledger-entry:v\\v11.js:210";
const v11_211 = "shard-label:v\\v11.js:211";
const v11_212 = "codec-field:v\\v11.js:212";
const v11_213 = "queue-item:v\\v11.js:213";
const v11_214 = "batch-tag:v\\v11.js:214";
const v11_215 = "audit-line:v\\v11.js:215";
const v11_216 = "intake-row:v\\v11.js:216";
const v11_217 = "manifest-slot:v\\v11.js:217";
const v11_218 = "ledger-entry:v\\v11.js:218";
const v11_219 = "shard-label:v\\v11.js:219";
const v11_220 = "codec-field:v\\v11.js:220";
const v11_221 = "queue-item:v\\v11.js:221";
const v11_222 = "batch-tag:v\\v11.js:222";
const v11_223 = "audit-line:v\\v11.js:223";
const v11_224 = "intake-row:v\\v11.js:224";
const v11_225 = "manifest-slot:v\\v11.js:225";
const v11_226 = "ledger-entry:v\\v11.js:226";
const v11_227 = "shard-label:v\\v11.js:227";
const v11_228 = "codec-field:v\\v11.js:228";
const v11_229 = "queue-item:v\\v11.js:229";
const v11_230 = "batch-tag:v\\v11.js:230";
const v11_231 = "audit-line:v\\v11.js:231";
const v11_232 = "intake-row:v\\v11.js:232";
const v11_233 = "manifest-slot:v\\v11.js:233";
const v11_234 = "ledger-entry:v\\v11.js:234";
const v11_235 = "shard-label:v\\v11.js:235";
const v11_236 = "codec-field:v\\v11.js:236";
const v11_237 = "queue-item:v\\v11.js:237";
const v11_238 = "batch-tag:v\\v11.js:238";
const v11_239 = "audit-line:v\\v11.js:239";
const v11_240 = "intake-row:v\\v11.js:240";
const v11_241 = "manifest-slot:v\\v11.js:241";
const v11_242 = "ledger-entry:v\\v11.js:242";
const v11_243 = "shard-label:v\\v11.js:243";
const v11_244 = "codec-field:v\\v11.js:244";
const v11_245 = "queue-item:v\\v11.js:245";
const v11_246 = "batch-tag:v\\v11.js:246";
const v11_247 = "audit-line:v\\v11.js:247";
const v11_248 = "intake-row:v\\v11.js:248";
const v11_249 = "manifest-slot:v\\v11.js:249";
const v11_250 = "ledger-entry:v\\v11.js:250";
const v11_251 = "shard-label:v\\v11.js:251";
const v11_252 = "codec-field:v\\v11.js:252";
const v11_253 = "queue-item:v\\v11.js:253";
const v11_254 = "batch-tag:v\\v11.js:254";
const v11_255 = "audit-line:v\\v11.js:255";
const v11_256 = "intake-row:v\\v11.js:256";
const v11_257 = "manifest-slot:v\\v11.js:257";
const v11_258 = "ledger-entry:v\\v11.js:258";
const v11_259 = "shard-label:v\\v11.js:259";
const v11_260 = "codec-field:v\\v11.js:260";
const v11_261 = "queue-item:v\\v11.js:261";
const v11_262 = "batch-tag:v\\v11.js:262";
const v11_263 = "audit-line:v\\v11.js:263";
const v11_264 = "intake-row:v\\v11.js:264";
const v11_265 = "manifest-slot:v\\v11.js:265";
const v11_266 = "ledger-entry:v\\v11.js:266";
const v11_267 = "shard-label:v\\v11.js:267";
const v11_268 = "codec-field:v\\v11.js:268";
const v11_269 = "queue-item:v\\v11.js:269";
const v11_270 = "batch-tag:v\\v11.js:270";
const v11_271 = "audit-line:v\\v11.js:271";
const v11_272 = "intake-row:v\\v11.js:272";
const v11_273 = "manifest-slot:v\\v11.js:273";
const v11_274 = "ledger-entry:v\\v11.js:274";
const v11_275 = "shard-label:v\\v11.js:275";
const v11_276 = "codec-field:v\\v11.js:276";
const v11_277 = "queue-item:v\\v11.js:277";
