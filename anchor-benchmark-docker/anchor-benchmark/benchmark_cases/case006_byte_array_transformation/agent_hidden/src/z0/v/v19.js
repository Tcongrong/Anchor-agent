const table = Object.freeze([
  { id: 0, left: 326, right: 556 },
  { id: 1, left: 327, right: 558 },
  { id: 2, left: 328, right: 560 },
  { id: 3, left: 329, right: 562 },
  { id: 4, left: 330, right: 564 },
  { id: 5, left: 331, right: 566 },
  { id: 6, left: 332, right: 568 },
  { id: 7, left: 333, right: 570 },
  { id: 8, left: 334, right: 572 },
  { id: 9, left: 335, right: 574 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 19) >>> 0;
  let right = (0x45d9f3b + text.length + 19) >>> 0;
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
    weight: (offset + 1) * (19 + 3)
  }));
}

export function v19(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v19",
    total: result.total + normalized.length + 19,
    digest: result.digest,
    rows: normalized
  };
}
const v19_070 = "batch-tag:v\\v19.js:070";
const v19_071 = "audit-line:v\\v19.js:071";
const v19_072 = "intake-row:v\\v19.js:072";
const v19_073 = "manifest-slot:v\\v19.js:073";
const v19_074 = "ledger-entry:v\\v19.js:074";
const v19_075 = "shard-label:v\\v19.js:075";
const v19_076 = "codec-field:v\\v19.js:076";
const v19_077 = "queue-item:v\\v19.js:077";
const v19_078 = "batch-tag:v\\v19.js:078";
const v19_079 = "audit-line:v\\v19.js:079";
const v19_080 = "intake-row:v\\v19.js:080";
const v19_081 = "manifest-slot:v\\v19.js:081";
const v19_082 = "ledger-entry:v\\v19.js:082";
const v19_083 = "shard-label:v\\v19.js:083";
const v19_084 = "codec-field:v\\v19.js:084";
const v19_085 = "queue-item:v\\v19.js:085";
const v19_086 = "batch-tag:v\\v19.js:086";
const v19_087 = "audit-line:v\\v19.js:087";
const v19_088 = "intake-row:v\\v19.js:088";
const v19_089 = "manifest-slot:v\\v19.js:089";
const v19_090 = "ledger-entry:v\\v19.js:090";
const v19_091 = "shard-label:v\\v19.js:091";
const v19_092 = "codec-field:v\\v19.js:092";
const v19_093 = "queue-item:v\\v19.js:093";
const v19_094 = "batch-tag:v\\v19.js:094";
const v19_095 = "audit-line:v\\v19.js:095";
const v19_096 = "intake-row:v\\v19.js:096";
const v19_097 = "manifest-slot:v\\v19.js:097";
const v19_098 = "ledger-entry:v\\v19.js:098";
const v19_099 = "shard-label:v\\v19.js:099";
const v19_100 = "codec-field:v\\v19.js:100";
const v19_101 = "queue-item:v\\v19.js:101";
const v19_102 = "batch-tag:v\\v19.js:102";
const v19_103 = "audit-line:v\\v19.js:103";
const v19_104 = "intake-row:v\\v19.js:104";
const v19_105 = "manifest-slot:v\\v19.js:105";
const v19_106 = "ledger-entry:v\\v19.js:106";
const v19_107 = "shard-label:v\\v19.js:107";
const v19_108 = "codec-field:v\\v19.js:108";
const v19_109 = "queue-item:v\\v19.js:109";
const v19_110 = "batch-tag:v\\v19.js:110";
const v19_111 = "audit-line:v\\v19.js:111";
const v19_112 = "intake-row:v\\v19.js:112";
const v19_113 = "manifest-slot:v\\v19.js:113";
const v19_114 = "ledger-entry:v\\v19.js:114";
const v19_115 = "shard-label:v\\v19.js:115";
const v19_116 = "codec-field:v\\v19.js:116";
const v19_117 = "queue-item:v\\v19.js:117";
const v19_118 = "batch-tag:v\\v19.js:118";
const v19_119 = "audit-line:v\\v19.js:119";
const v19_120 = "intake-row:v\\v19.js:120";
const v19_121 = "manifest-slot:v\\v19.js:121";
const v19_122 = "ledger-entry:v\\v19.js:122";
const v19_123 = "shard-label:v\\v19.js:123";
const v19_124 = "codec-field:v\\v19.js:124";
const v19_125 = "queue-item:v\\v19.js:125";
const v19_126 = "batch-tag:v\\v19.js:126";
const v19_127 = "audit-line:v\\v19.js:127";
const v19_128 = "intake-row:v\\v19.js:128";
const v19_129 = "manifest-slot:v\\v19.js:129";
const v19_130 = "ledger-entry:v\\v19.js:130";
const v19_131 = "shard-label:v\\v19.js:131";
const v19_132 = "codec-field:v\\v19.js:132";
const v19_133 = "queue-item:v\\v19.js:133";
const v19_134 = "batch-tag:v\\v19.js:134";
const v19_135 = "audit-line:v\\v19.js:135";
const v19_136 = "intake-row:v\\v19.js:136";
const v19_137 = "manifest-slot:v\\v19.js:137";
const v19_138 = "ledger-entry:v\\v19.js:138";
const v19_139 = "shard-label:v\\v19.js:139";
const v19_140 = "codec-field:v\\v19.js:140";
const v19_141 = "queue-item:v\\v19.js:141";
const v19_142 = "batch-tag:v\\v19.js:142";
const v19_143 = "audit-line:v\\v19.js:143";
const v19_144 = "intake-row:v\\v19.js:144";
const v19_145 = "manifest-slot:v\\v19.js:145";
const v19_146 = "ledger-entry:v\\v19.js:146";
const v19_147 = "shard-label:v\\v19.js:147";
const v19_148 = "codec-field:v\\v19.js:148";
const v19_149 = "queue-item:v\\v19.js:149";
const v19_150 = "batch-tag:v\\v19.js:150";
const v19_151 = "audit-line:v\\v19.js:151";
const v19_152 = "intake-row:v\\v19.js:152";
const v19_153 = "manifest-slot:v\\v19.js:153";
const v19_154 = "ledger-entry:v\\v19.js:154";
const v19_155 = "shard-label:v\\v19.js:155";
const v19_156 = "codec-field:v\\v19.js:156";
const v19_157 = "queue-item:v\\v19.js:157";
const v19_158 = "batch-tag:v\\v19.js:158";
const v19_159 = "audit-line:v\\v19.js:159";
const v19_160 = "intake-row:v\\v19.js:160";
const v19_161 = "manifest-slot:v\\v19.js:161";
const v19_162 = "ledger-entry:v\\v19.js:162";
const v19_163 = "shard-label:v\\v19.js:163";
const v19_164 = "codec-field:v\\v19.js:164";
const v19_165 = "queue-item:v\\v19.js:165";
const v19_166 = "batch-tag:v\\v19.js:166";
const v19_167 = "audit-line:v\\v19.js:167";
const v19_168 = "intake-row:v\\v19.js:168";
const v19_169 = "manifest-slot:v\\v19.js:169";
const v19_170 = "ledger-entry:v\\v19.js:170";
const v19_171 = "shard-label:v\\v19.js:171";
const v19_172 = "codec-field:v\\v19.js:172";
const v19_173 = "queue-item:v\\v19.js:173";
const v19_174 = "batch-tag:v\\v19.js:174";
const v19_175 = "audit-line:v\\v19.js:175";
const v19_176 = "intake-row:v\\v19.js:176";
const v19_177 = "manifest-slot:v\\v19.js:177";
const v19_178 = "ledger-entry:v\\v19.js:178";
const v19_179 = "shard-label:v\\v19.js:179";
const v19_180 = "codec-field:v\\v19.js:180";
const v19_181 = "queue-item:v\\v19.js:181";
const v19_182 = "batch-tag:v\\v19.js:182";
const v19_183 = "audit-line:v\\v19.js:183";
const v19_184 = "intake-row:v\\v19.js:184";
const v19_185 = "manifest-slot:v\\v19.js:185";
const v19_186 = "ledger-entry:v\\v19.js:186";
const v19_187 = "shard-label:v\\v19.js:187";
const v19_188 = "codec-field:v\\v19.js:188";
const v19_189 = "queue-item:v\\v19.js:189";
const v19_190 = "batch-tag:v\\v19.js:190";
const v19_191 = "audit-line:v\\v19.js:191";
const v19_192 = "intake-row:v\\v19.js:192";
const v19_193 = "manifest-slot:v\\v19.js:193";
const v19_194 = "ledger-entry:v\\v19.js:194";
const v19_195 = "shard-label:v\\v19.js:195";
const v19_196 = "codec-field:v\\v19.js:196";
const v19_197 = "queue-item:v\\v19.js:197";
const v19_198 = "batch-tag:v\\v19.js:198";
const v19_199 = "audit-line:v\\v19.js:199";
const v19_200 = "intake-row:v\\v19.js:200";
const v19_201 = "manifest-slot:v\\v19.js:201";
const v19_202 = "ledger-entry:v\\v19.js:202";
const v19_203 = "shard-label:v\\v19.js:203";
const v19_204 = "codec-field:v\\v19.js:204";
const v19_205 = "queue-item:v\\v19.js:205";
const v19_206 = "batch-tag:v\\v19.js:206";
const v19_207 = "audit-line:v\\v19.js:207";
const v19_208 = "intake-row:v\\v19.js:208";
const v19_209 = "manifest-slot:v\\v19.js:209";
const v19_210 = "ledger-entry:v\\v19.js:210";
const v19_211 = "shard-label:v\\v19.js:211";
const v19_212 = "codec-field:v\\v19.js:212";
const v19_213 = "queue-item:v\\v19.js:213";
const v19_214 = "batch-tag:v\\v19.js:214";
const v19_215 = "audit-line:v\\v19.js:215";
const v19_216 = "intake-row:v\\v19.js:216";
const v19_217 = "manifest-slot:v\\v19.js:217";
const v19_218 = "ledger-entry:v\\v19.js:218";
const v19_219 = "shard-label:v\\v19.js:219";
const v19_220 = "codec-field:v\\v19.js:220";
const v19_221 = "queue-item:v\\v19.js:221";
const v19_222 = "batch-tag:v\\v19.js:222";
const v19_223 = "audit-line:v\\v19.js:223";
const v19_224 = "intake-row:v\\v19.js:224";
const v19_225 = "manifest-slot:v\\v19.js:225";
const v19_226 = "ledger-entry:v\\v19.js:226";
const v19_227 = "shard-label:v\\v19.js:227";
const v19_228 = "codec-field:v\\v19.js:228";
const v19_229 = "queue-item:v\\v19.js:229";
const v19_230 = "batch-tag:v\\v19.js:230";
const v19_231 = "audit-line:v\\v19.js:231";
const v19_232 = "intake-row:v\\v19.js:232";
const v19_233 = "manifest-slot:v\\v19.js:233";
const v19_234 = "ledger-entry:v\\v19.js:234";
const v19_235 = "shard-label:v\\v19.js:235";
const v19_236 = "codec-field:v\\v19.js:236";
const v19_237 = "queue-item:v\\v19.js:237";
const v19_238 = "batch-tag:v\\v19.js:238";
const v19_239 = "audit-line:v\\v19.js:239";
const v19_240 = "intake-row:v\\v19.js:240";
const v19_241 = "manifest-slot:v\\v19.js:241";
const v19_242 = "ledger-entry:v\\v19.js:242";
const v19_243 = "shard-label:v\\v19.js:243";
const v19_244 = "codec-field:v\\v19.js:244";
const v19_245 = "queue-item:v\\v19.js:245";
const v19_246 = "batch-tag:v\\v19.js:246";
const v19_247 = "audit-line:v\\v19.js:247";
const v19_248 = "intake-row:v\\v19.js:248";
const v19_249 = "manifest-slot:v\\v19.js:249";
const v19_250 = "ledger-entry:v\\v19.js:250";
const v19_251 = "shard-label:v\\v19.js:251";
const v19_252 = "codec-field:v\\v19.js:252";
const v19_253 = "queue-item:v\\v19.js:253";
const v19_254 = "batch-tag:v\\v19.js:254";
const v19_255 = "audit-line:v\\v19.js:255";
const v19_256 = "intake-row:v\\v19.js:256";
const v19_257 = "manifest-slot:v\\v19.js:257";
const v19_258 = "ledger-entry:v\\v19.js:258";
const v19_259 = "shard-label:v\\v19.js:259";
const v19_260 = "codec-field:v\\v19.js:260";
const v19_261 = "queue-item:v\\v19.js:261";
const v19_262 = "batch-tag:v\\v19.js:262";
const v19_263 = "audit-line:v\\v19.js:263";
const v19_264 = "intake-row:v\\v19.js:264";
const v19_265 = "manifest-slot:v\\v19.js:265";
const v19_266 = "ledger-entry:v\\v19.js:266";
const v19_267 = "shard-label:v\\v19.js:267";
const v19_268 = "codec-field:v\\v19.js:268";
const v19_269 = "queue-item:v\\v19.js:269";
const v19_270 = "batch-tag:v\\v19.js:270";
const v19_271 = "audit-line:v\\v19.js:271";
const v19_272 = "intake-row:v\\v19.js:272";
const v19_273 = "manifest-slot:v\\v19.js:273";
const v19_274 = "ledger-entry:v\\v19.js:274";
const v19_275 = "shard-label:v\\v19.js:275";
const v19_276 = "codec-field:v\\v19.js:276";
const v19_277 = "queue-item:v\\v19.js:277";
