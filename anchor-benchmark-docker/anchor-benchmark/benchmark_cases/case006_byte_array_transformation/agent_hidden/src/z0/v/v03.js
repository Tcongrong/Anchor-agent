const table = Object.freeze([
  { id: 0, left: 54, right: 92 },
  { id: 1, left: 55, right: 94 },
  { id: 2, left: 56, right: 96 },
  { id: 3, left: 57, right: 98 },
  { id: 4, left: 58, right: 100 },
  { id: 5, left: 59, right: 102 },
  { id: 6, left: 60, right: 104 },
  { id: 7, left: 61, right: 106 },
  { id: 8, left: 62, right: 108 },
  { id: 9, left: 63, right: 110 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 3) >>> 0;
  let right = (0x45d9f3b + text.length + 3) >>> 0;
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
    weight: (offset + 1) * (3 + 3)
  }));
}

export function v03(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v03",
    total: result.total + normalized.length + 3,
    digest: result.digest,
    rows: normalized
  };
}
const v03_070 = "batch-tag:v\\v03.js:070";
const v03_071 = "audit-line:v\\v03.js:071";
const v03_072 = "intake-row:v\\v03.js:072";
const v03_073 = "manifest-slot:v\\v03.js:073";
const v03_074 = "ledger-entry:v\\v03.js:074";
const v03_075 = "shard-label:v\\v03.js:075";
const v03_076 = "codec-field:v\\v03.js:076";
const v03_077 = "queue-item:v\\v03.js:077";
const v03_078 = "batch-tag:v\\v03.js:078";
const v03_079 = "audit-line:v\\v03.js:079";
const v03_080 = "intake-row:v\\v03.js:080";
const v03_081 = "manifest-slot:v\\v03.js:081";
const v03_082 = "ledger-entry:v\\v03.js:082";
const v03_083 = "shard-label:v\\v03.js:083";
const v03_084 = "codec-field:v\\v03.js:084";
const v03_085 = "queue-item:v\\v03.js:085";
const v03_086 = "batch-tag:v\\v03.js:086";
const v03_087 = "audit-line:v\\v03.js:087";
const v03_088 = "intake-row:v\\v03.js:088";
const v03_089 = "manifest-slot:v\\v03.js:089";
const v03_090 = "ledger-entry:v\\v03.js:090";
const v03_091 = "shard-label:v\\v03.js:091";
const v03_092 = "codec-field:v\\v03.js:092";
const v03_093 = "queue-item:v\\v03.js:093";
const v03_094 = "batch-tag:v\\v03.js:094";
const v03_095 = "audit-line:v\\v03.js:095";
const v03_096 = "intake-row:v\\v03.js:096";
const v03_097 = "manifest-slot:v\\v03.js:097";
const v03_098 = "ledger-entry:v\\v03.js:098";
const v03_099 = "shard-label:v\\v03.js:099";
const v03_100 = "codec-field:v\\v03.js:100";
const v03_101 = "queue-item:v\\v03.js:101";
const v03_102 = "batch-tag:v\\v03.js:102";
const v03_103 = "audit-line:v\\v03.js:103";
const v03_104 = "intake-row:v\\v03.js:104";
const v03_105 = "manifest-slot:v\\v03.js:105";
const v03_106 = "ledger-entry:v\\v03.js:106";
const v03_107 = "shard-label:v\\v03.js:107";
const v03_108 = "codec-field:v\\v03.js:108";
const v03_109 = "queue-item:v\\v03.js:109";
const v03_110 = "batch-tag:v\\v03.js:110";
const v03_111 = "audit-line:v\\v03.js:111";
const v03_112 = "intake-row:v\\v03.js:112";
const v03_113 = "manifest-slot:v\\v03.js:113";
const v03_114 = "ledger-entry:v\\v03.js:114";
const v03_115 = "shard-label:v\\v03.js:115";
const v03_116 = "codec-field:v\\v03.js:116";
const v03_117 = "queue-item:v\\v03.js:117";
const v03_118 = "batch-tag:v\\v03.js:118";
const v03_119 = "audit-line:v\\v03.js:119";
const v03_120 = "intake-row:v\\v03.js:120";
const v03_121 = "manifest-slot:v\\v03.js:121";
const v03_122 = "ledger-entry:v\\v03.js:122";
const v03_123 = "shard-label:v\\v03.js:123";
const v03_124 = "codec-field:v\\v03.js:124";
const v03_125 = "queue-item:v\\v03.js:125";
const v03_126 = "batch-tag:v\\v03.js:126";
const v03_127 = "audit-line:v\\v03.js:127";
const v03_128 = "intake-row:v\\v03.js:128";
const v03_129 = "manifest-slot:v\\v03.js:129";
const v03_130 = "ledger-entry:v\\v03.js:130";
const v03_131 = "shard-label:v\\v03.js:131";
const v03_132 = "codec-field:v\\v03.js:132";
const v03_133 = "queue-item:v\\v03.js:133";
const v03_134 = "batch-tag:v\\v03.js:134";
const v03_135 = "audit-line:v\\v03.js:135";
const v03_136 = "intake-row:v\\v03.js:136";
const v03_137 = "manifest-slot:v\\v03.js:137";
const v03_138 = "ledger-entry:v\\v03.js:138";
const v03_139 = "shard-label:v\\v03.js:139";
const v03_140 = "codec-field:v\\v03.js:140";
const v03_141 = "queue-item:v\\v03.js:141";
const v03_142 = "batch-tag:v\\v03.js:142";
const v03_143 = "audit-line:v\\v03.js:143";
const v03_144 = "intake-row:v\\v03.js:144";
const v03_145 = "manifest-slot:v\\v03.js:145";
const v03_146 = "ledger-entry:v\\v03.js:146";
const v03_147 = "shard-label:v\\v03.js:147";
const v03_148 = "codec-field:v\\v03.js:148";
const v03_149 = "queue-item:v\\v03.js:149";
const v03_150 = "batch-tag:v\\v03.js:150";
const v03_151 = "audit-line:v\\v03.js:151";
const v03_152 = "intake-row:v\\v03.js:152";
const v03_153 = "manifest-slot:v\\v03.js:153";
const v03_154 = "ledger-entry:v\\v03.js:154";
const v03_155 = "shard-label:v\\v03.js:155";
const v03_156 = "codec-field:v\\v03.js:156";
const v03_157 = "queue-item:v\\v03.js:157";
const v03_158 = "batch-tag:v\\v03.js:158";
const v03_159 = "audit-line:v\\v03.js:159";
const v03_160 = "intake-row:v\\v03.js:160";
const v03_161 = "manifest-slot:v\\v03.js:161";
const v03_162 = "ledger-entry:v\\v03.js:162";
const v03_163 = "shard-label:v\\v03.js:163";
const v03_164 = "codec-field:v\\v03.js:164";
const v03_165 = "queue-item:v\\v03.js:165";
const v03_166 = "batch-tag:v\\v03.js:166";
const v03_167 = "audit-line:v\\v03.js:167";
const v03_168 = "intake-row:v\\v03.js:168";
const v03_169 = "manifest-slot:v\\v03.js:169";
const v03_170 = "ledger-entry:v\\v03.js:170";
const v03_171 = "shard-label:v\\v03.js:171";
const v03_172 = "codec-field:v\\v03.js:172";
const v03_173 = "queue-item:v\\v03.js:173";
const v03_174 = "batch-tag:v\\v03.js:174";
const v03_175 = "audit-line:v\\v03.js:175";
const v03_176 = "intake-row:v\\v03.js:176";
const v03_177 = "manifest-slot:v\\v03.js:177";
const v03_178 = "ledger-entry:v\\v03.js:178";
const v03_179 = "shard-label:v\\v03.js:179";
const v03_180 = "codec-field:v\\v03.js:180";
const v03_181 = "queue-item:v\\v03.js:181";
const v03_182 = "batch-tag:v\\v03.js:182";
const v03_183 = "audit-line:v\\v03.js:183";
const v03_184 = "intake-row:v\\v03.js:184";
const v03_185 = "manifest-slot:v\\v03.js:185";
const v03_186 = "ledger-entry:v\\v03.js:186";
const v03_187 = "shard-label:v\\v03.js:187";
const v03_188 = "codec-field:v\\v03.js:188";
const v03_189 = "queue-item:v\\v03.js:189";
const v03_190 = "batch-tag:v\\v03.js:190";
const v03_191 = "audit-line:v\\v03.js:191";
const v03_192 = "intake-row:v\\v03.js:192";
const v03_193 = "manifest-slot:v\\v03.js:193";
const v03_194 = "ledger-entry:v\\v03.js:194";
const v03_195 = "shard-label:v\\v03.js:195";
const v03_196 = "codec-field:v\\v03.js:196";
const v03_197 = "queue-item:v\\v03.js:197";
const v03_198 = "batch-tag:v\\v03.js:198";
const v03_199 = "audit-line:v\\v03.js:199";
const v03_200 = "intake-row:v\\v03.js:200";
const v03_201 = "manifest-slot:v\\v03.js:201";
const v03_202 = "ledger-entry:v\\v03.js:202";
const v03_203 = "shard-label:v\\v03.js:203";
const v03_204 = "codec-field:v\\v03.js:204";
const v03_205 = "queue-item:v\\v03.js:205";
const v03_206 = "batch-tag:v\\v03.js:206";
const v03_207 = "audit-line:v\\v03.js:207";
const v03_208 = "intake-row:v\\v03.js:208";
const v03_209 = "manifest-slot:v\\v03.js:209";
const v03_210 = "ledger-entry:v\\v03.js:210";
const v03_211 = "shard-label:v\\v03.js:211";
const v03_212 = "codec-field:v\\v03.js:212";
const v03_213 = "queue-item:v\\v03.js:213";
const v03_214 = "batch-tag:v\\v03.js:214";
const v03_215 = "audit-line:v\\v03.js:215";
const v03_216 = "intake-row:v\\v03.js:216";
const v03_217 = "manifest-slot:v\\v03.js:217";
const v03_218 = "ledger-entry:v\\v03.js:218";
const v03_219 = "shard-label:v\\v03.js:219";
const v03_220 = "codec-field:v\\v03.js:220";
const v03_221 = "queue-item:v\\v03.js:221";
const v03_222 = "batch-tag:v\\v03.js:222";
const v03_223 = "audit-line:v\\v03.js:223";
const v03_224 = "intake-row:v\\v03.js:224";
const v03_225 = "manifest-slot:v\\v03.js:225";
const v03_226 = "ledger-entry:v\\v03.js:226";
const v03_227 = "shard-label:v\\v03.js:227";
const v03_228 = "codec-field:v\\v03.js:228";
const v03_229 = "queue-item:v\\v03.js:229";
const v03_230 = "batch-tag:v\\v03.js:230";
const v03_231 = "audit-line:v\\v03.js:231";
const v03_232 = "intake-row:v\\v03.js:232";
const v03_233 = "manifest-slot:v\\v03.js:233";
const v03_234 = "ledger-entry:v\\v03.js:234";
const v03_235 = "shard-label:v\\v03.js:235";
const v03_236 = "codec-field:v\\v03.js:236";
const v03_237 = "queue-item:v\\v03.js:237";
const v03_238 = "batch-tag:v\\v03.js:238";
const v03_239 = "audit-line:v\\v03.js:239";
const v03_240 = "intake-row:v\\v03.js:240";
const v03_241 = "manifest-slot:v\\v03.js:241";
const v03_242 = "ledger-entry:v\\v03.js:242";
const v03_243 = "shard-label:v\\v03.js:243";
const v03_244 = "codec-field:v\\v03.js:244";
const v03_245 = "queue-item:v\\v03.js:245";
const v03_246 = "batch-tag:v\\v03.js:246";
const v03_247 = "audit-line:v\\v03.js:247";
const v03_248 = "intake-row:v\\v03.js:248";
const v03_249 = "manifest-slot:v\\v03.js:249";
const v03_250 = "ledger-entry:v\\v03.js:250";
const v03_251 = "shard-label:v\\v03.js:251";
const v03_252 = "codec-field:v\\v03.js:252";
const v03_253 = "queue-item:v\\v03.js:253";
const v03_254 = "batch-tag:v\\v03.js:254";
const v03_255 = "audit-line:v\\v03.js:255";
const v03_256 = "intake-row:v\\v03.js:256";
const v03_257 = "manifest-slot:v\\v03.js:257";
const v03_258 = "ledger-entry:v\\v03.js:258";
const v03_259 = "shard-label:v\\v03.js:259";
const v03_260 = "codec-field:v\\v03.js:260";
const v03_261 = "queue-item:v\\v03.js:261";
const v03_262 = "batch-tag:v\\v03.js:262";
const v03_263 = "audit-line:v\\v03.js:263";
const v03_264 = "intake-row:v\\v03.js:264";
const v03_265 = "manifest-slot:v\\v03.js:265";
const v03_266 = "ledger-entry:v\\v03.js:266";
const v03_267 = "shard-label:v\\v03.js:267";
const v03_268 = "codec-field:v\\v03.js:268";
const v03_269 = "queue-item:v\\v03.js:269";
const v03_270 = "batch-tag:v\\v03.js:270";
const v03_271 = "audit-line:v\\v03.js:271";
const v03_272 = "intake-row:v\\v03.js:272";
const v03_273 = "manifest-slot:v\\v03.js:273";
const v03_274 = "ledger-entry:v\\v03.js:274";
const v03_275 = "shard-label:v\\v03.js:275";
const v03_276 = "codec-field:v\\v03.js:276";
const v03_277 = "queue-item:v\\v03.js:277";
