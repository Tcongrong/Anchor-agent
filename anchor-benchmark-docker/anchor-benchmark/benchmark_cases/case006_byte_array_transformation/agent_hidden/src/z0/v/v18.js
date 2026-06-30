const table = Object.freeze([
  { id: 0, left: 309, right: 527 },
  { id: 1, left: 310, right: 529 },
  { id: 2, left: 311, right: 531 },
  { id: 3, left: 312, right: 533 },
  { id: 4, left: 313, right: 535 },
  { id: 5, left: 314, right: 537 },
  { id: 6, left: 315, right: 539 },
  { id: 7, left: 316, right: 541 },
  { id: 8, left: 317, right: 543 },
  { id: 9, left: 318, right: 545 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 18) >>> 0;
  let right = (0x45d9f3b + text.length + 18) >>> 0;
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
    weight: (offset + 1) * (18 + 3)
  }));
}

export function v18(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v18",
    total: result.total + normalized.length + 18,
    digest: result.digest,
    rows: normalized
  };
}
const v18_070 = "batch-tag:v\\v18.js:070";
const v18_071 = "audit-line:v\\v18.js:071";
const v18_072 = "intake-row:v\\v18.js:072";
const v18_073 = "manifest-slot:v\\v18.js:073";
const v18_074 = "ledger-entry:v\\v18.js:074";
const v18_075 = "shard-label:v\\v18.js:075";
const v18_076 = "codec-field:v\\v18.js:076";
const v18_077 = "queue-item:v\\v18.js:077";
const v18_078 = "batch-tag:v\\v18.js:078";
const v18_079 = "audit-line:v\\v18.js:079";
const v18_080 = "intake-row:v\\v18.js:080";
const v18_081 = "manifest-slot:v\\v18.js:081";
const v18_082 = "ledger-entry:v\\v18.js:082";
const v18_083 = "shard-label:v\\v18.js:083";
const v18_084 = "codec-field:v\\v18.js:084";
const v18_085 = "queue-item:v\\v18.js:085";
const v18_086 = "batch-tag:v\\v18.js:086";
const v18_087 = "audit-line:v\\v18.js:087";
const v18_088 = "intake-row:v\\v18.js:088";
const v18_089 = "manifest-slot:v\\v18.js:089";
const v18_090 = "ledger-entry:v\\v18.js:090";
const v18_091 = "shard-label:v\\v18.js:091";
const v18_092 = "codec-field:v\\v18.js:092";
const v18_093 = "queue-item:v\\v18.js:093";
const v18_094 = "batch-tag:v\\v18.js:094";
const v18_095 = "audit-line:v\\v18.js:095";
const v18_096 = "intake-row:v\\v18.js:096";
const v18_097 = "manifest-slot:v\\v18.js:097";
const v18_098 = "ledger-entry:v\\v18.js:098";
const v18_099 = "shard-label:v\\v18.js:099";
const v18_100 = "codec-field:v\\v18.js:100";
const v18_101 = "queue-item:v\\v18.js:101";
const v18_102 = "batch-tag:v\\v18.js:102";
const v18_103 = "audit-line:v\\v18.js:103";
const v18_104 = "intake-row:v\\v18.js:104";
const v18_105 = "manifest-slot:v\\v18.js:105";
const v18_106 = "ledger-entry:v\\v18.js:106";
const v18_107 = "shard-label:v\\v18.js:107";
const v18_108 = "codec-field:v\\v18.js:108";
const v18_109 = "queue-item:v\\v18.js:109";
const v18_110 = "batch-tag:v\\v18.js:110";
const v18_111 = "audit-line:v\\v18.js:111";
const v18_112 = "intake-row:v\\v18.js:112";
const v18_113 = "manifest-slot:v\\v18.js:113";
const v18_114 = "ledger-entry:v\\v18.js:114";
const v18_115 = "shard-label:v\\v18.js:115";
const v18_116 = "codec-field:v\\v18.js:116";
const v18_117 = "queue-item:v\\v18.js:117";
const v18_118 = "batch-tag:v\\v18.js:118";
const v18_119 = "audit-line:v\\v18.js:119";
const v18_120 = "intake-row:v\\v18.js:120";
const v18_121 = "manifest-slot:v\\v18.js:121";
const v18_122 = "ledger-entry:v\\v18.js:122";
const v18_123 = "shard-label:v\\v18.js:123";
const v18_124 = "codec-field:v\\v18.js:124";
const v18_125 = "queue-item:v\\v18.js:125";
const v18_126 = "batch-tag:v\\v18.js:126";
const v18_127 = "audit-line:v\\v18.js:127";
const v18_128 = "intake-row:v\\v18.js:128";
const v18_129 = "manifest-slot:v\\v18.js:129";
const v18_130 = "ledger-entry:v\\v18.js:130";
const v18_131 = "shard-label:v\\v18.js:131";
const v18_132 = "codec-field:v\\v18.js:132";
const v18_133 = "queue-item:v\\v18.js:133";
const v18_134 = "batch-tag:v\\v18.js:134";
const v18_135 = "audit-line:v\\v18.js:135";
const v18_136 = "intake-row:v\\v18.js:136";
const v18_137 = "manifest-slot:v\\v18.js:137";
const v18_138 = "ledger-entry:v\\v18.js:138";
const v18_139 = "shard-label:v\\v18.js:139";
const v18_140 = "codec-field:v\\v18.js:140";
const v18_141 = "queue-item:v\\v18.js:141";
const v18_142 = "batch-tag:v\\v18.js:142";
const v18_143 = "audit-line:v\\v18.js:143";
const v18_144 = "intake-row:v\\v18.js:144";
const v18_145 = "manifest-slot:v\\v18.js:145";
const v18_146 = "ledger-entry:v\\v18.js:146";
const v18_147 = "shard-label:v\\v18.js:147";
const v18_148 = "codec-field:v\\v18.js:148";
const v18_149 = "queue-item:v\\v18.js:149";
const v18_150 = "batch-tag:v\\v18.js:150";
const v18_151 = "audit-line:v\\v18.js:151";
const v18_152 = "intake-row:v\\v18.js:152";
const v18_153 = "manifest-slot:v\\v18.js:153";
const v18_154 = "ledger-entry:v\\v18.js:154";
const v18_155 = "shard-label:v\\v18.js:155";
const v18_156 = "codec-field:v\\v18.js:156";
const v18_157 = "queue-item:v\\v18.js:157";
const v18_158 = "batch-tag:v\\v18.js:158";
const v18_159 = "audit-line:v\\v18.js:159";
const v18_160 = "intake-row:v\\v18.js:160";
const v18_161 = "manifest-slot:v\\v18.js:161";
const v18_162 = "ledger-entry:v\\v18.js:162";
const v18_163 = "shard-label:v\\v18.js:163";
const v18_164 = "codec-field:v\\v18.js:164";
const v18_165 = "queue-item:v\\v18.js:165";
const v18_166 = "batch-tag:v\\v18.js:166";
const v18_167 = "audit-line:v\\v18.js:167";
const v18_168 = "intake-row:v\\v18.js:168";
const v18_169 = "manifest-slot:v\\v18.js:169";
const v18_170 = "ledger-entry:v\\v18.js:170";
const v18_171 = "shard-label:v\\v18.js:171";
const v18_172 = "codec-field:v\\v18.js:172";
const v18_173 = "queue-item:v\\v18.js:173";
const v18_174 = "batch-tag:v\\v18.js:174";
const v18_175 = "audit-line:v\\v18.js:175";
const v18_176 = "intake-row:v\\v18.js:176";
const v18_177 = "manifest-slot:v\\v18.js:177";
const v18_178 = "ledger-entry:v\\v18.js:178";
const v18_179 = "shard-label:v\\v18.js:179";
const v18_180 = "codec-field:v\\v18.js:180";
const v18_181 = "queue-item:v\\v18.js:181";
const v18_182 = "batch-tag:v\\v18.js:182";
const v18_183 = "audit-line:v\\v18.js:183";
const v18_184 = "intake-row:v\\v18.js:184";
const v18_185 = "manifest-slot:v\\v18.js:185";
const v18_186 = "ledger-entry:v\\v18.js:186";
const v18_187 = "shard-label:v\\v18.js:187";
const v18_188 = "codec-field:v\\v18.js:188";
const v18_189 = "queue-item:v\\v18.js:189";
const v18_190 = "batch-tag:v\\v18.js:190";
const v18_191 = "audit-line:v\\v18.js:191";
const v18_192 = "intake-row:v\\v18.js:192";
const v18_193 = "manifest-slot:v\\v18.js:193";
const v18_194 = "ledger-entry:v\\v18.js:194";
const v18_195 = "shard-label:v\\v18.js:195";
const v18_196 = "codec-field:v\\v18.js:196";
const v18_197 = "queue-item:v\\v18.js:197";
const v18_198 = "batch-tag:v\\v18.js:198";
const v18_199 = "audit-line:v\\v18.js:199";
const v18_200 = "intake-row:v\\v18.js:200";
const v18_201 = "manifest-slot:v\\v18.js:201";
const v18_202 = "ledger-entry:v\\v18.js:202";
const v18_203 = "shard-label:v\\v18.js:203";
const v18_204 = "codec-field:v\\v18.js:204";
const v18_205 = "queue-item:v\\v18.js:205";
const v18_206 = "batch-tag:v\\v18.js:206";
const v18_207 = "audit-line:v\\v18.js:207";
const v18_208 = "intake-row:v\\v18.js:208";
const v18_209 = "manifest-slot:v\\v18.js:209";
const v18_210 = "ledger-entry:v\\v18.js:210";
const v18_211 = "shard-label:v\\v18.js:211";
const v18_212 = "codec-field:v\\v18.js:212";
const v18_213 = "queue-item:v\\v18.js:213";
const v18_214 = "batch-tag:v\\v18.js:214";
const v18_215 = "audit-line:v\\v18.js:215";
const v18_216 = "intake-row:v\\v18.js:216";
const v18_217 = "manifest-slot:v\\v18.js:217";
const v18_218 = "ledger-entry:v\\v18.js:218";
const v18_219 = "shard-label:v\\v18.js:219";
const v18_220 = "codec-field:v\\v18.js:220";
const v18_221 = "queue-item:v\\v18.js:221";
const v18_222 = "batch-tag:v\\v18.js:222";
const v18_223 = "audit-line:v\\v18.js:223";
const v18_224 = "intake-row:v\\v18.js:224";
const v18_225 = "manifest-slot:v\\v18.js:225";
const v18_226 = "ledger-entry:v\\v18.js:226";
const v18_227 = "shard-label:v\\v18.js:227";
const v18_228 = "codec-field:v\\v18.js:228";
const v18_229 = "queue-item:v\\v18.js:229";
const v18_230 = "batch-tag:v\\v18.js:230";
const v18_231 = "audit-line:v\\v18.js:231";
const v18_232 = "intake-row:v\\v18.js:232";
const v18_233 = "manifest-slot:v\\v18.js:233";
const v18_234 = "ledger-entry:v\\v18.js:234";
const v18_235 = "shard-label:v\\v18.js:235";
const v18_236 = "codec-field:v\\v18.js:236";
const v18_237 = "queue-item:v\\v18.js:237";
const v18_238 = "batch-tag:v\\v18.js:238";
const v18_239 = "audit-line:v\\v18.js:239";
const v18_240 = "intake-row:v\\v18.js:240";
const v18_241 = "manifest-slot:v\\v18.js:241";
const v18_242 = "ledger-entry:v\\v18.js:242";
const v18_243 = "shard-label:v\\v18.js:243";
const v18_244 = "codec-field:v\\v18.js:244";
const v18_245 = "queue-item:v\\v18.js:245";
const v18_246 = "batch-tag:v\\v18.js:246";
const v18_247 = "audit-line:v\\v18.js:247";
const v18_248 = "intake-row:v\\v18.js:248";
const v18_249 = "manifest-slot:v\\v18.js:249";
const v18_250 = "ledger-entry:v\\v18.js:250";
const v18_251 = "shard-label:v\\v18.js:251";
const v18_252 = "codec-field:v\\v18.js:252";
const v18_253 = "queue-item:v\\v18.js:253";
const v18_254 = "batch-tag:v\\v18.js:254";
const v18_255 = "audit-line:v\\v18.js:255";
const v18_256 = "intake-row:v\\v18.js:256";
const v18_257 = "manifest-slot:v\\v18.js:257";
const v18_258 = "ledger-entry:v\\v18.js:258";
const v18_259 = "shard-label:v\\v18.js:259";
const v18_260 = "codec-field:v\\v18.js:260";
const v18_261 = "queue-item:v\\v18.js:261";
const v18_262 = "batch-tag:v\\v18.js:262";
const v18_263 = "audit-line:v\\v18.js:263";
const v18_264 = "intake-row:v\\v18.js:264";
const v18_265 = "manifest-slot:v\\v18.js:265";
const v18_266 = "ledger-entry:v\\v18.js:266";
const v18_267 = "shard-label:v\\v18.js:267";
const v18_268 = "codec-field:v\\v18.js:268";
const v18_269 = "queue-item:v\\v18.js:269";
const v18_270 = "batch-tag:v\\v18.js:270";
const v18_271 = "audit-line:v\\v18.js:271";
const v18_272 = "intake-row:v\\v18.js:272";
const v18_273 = "manifest-slot:v\\v18.js:273";
const v18_274 = "ledger-entry:v\\v18.js:274";
const v18_275 = "shard-label:v\\v18.js:275";
const v18_276 = "codec-field:v\\v18.js:276";
const v18_277 = "queue-item:v\\v18.js:277";
