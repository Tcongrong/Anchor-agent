const table = Object.freeze([
  { id: 0, left: 3, right: 5 },
  { id: 1, left: 4, right: 7 },
  { id: 2, left: 5, right: 9 },
  { id: 3, left: 6, right: 11 },
  { id: 4, left: 7, right: 13 },
  { id: 5, left: 8, right: 15 },
  { id: 6, left: 9, right: 17 },
  { id: 7, left: 10, right: 19 },
  { id: 8, left: 11, right: 21 },
  { id: 9, left: 12, right: 23 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 0) >>> 0;
  let right = (0x45d9f3b + text.length + 0) >>> 0;
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
    weight: (offset + 1) * (0 + 3)
  }));
}

export function v00(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v00",
    total: result.total + normalized.length + 0,
    digest: result.digest,
    rows: normalized
  };
}
const v00_070 = "batch-tag:v\\v00.js:070";
const v00_071 = "audit-line:v\\v00.js:071";
const v00_072 = "intake-row:v\\v00.js:072";
const v00_073 = "manifest-slot:v\\v00.js:073";
const v00_074 = "ledger-entry:v\\v00.js:074";
const v00_075 = "shard-label:v\\v00.js:075";
const v00_076 = "codec-field:v\\v00.js:076";
const v00_077 = "queue-item:v\\v00.js:077";
const v00_078 = "batch-tag:v\\v00.js:078";
const v00_079 = "audit-line:v\\v00.js:079";
const v00_080 = "intake-row:v\\v00.js:080";
const v00_081 = "manifest-slot:v\\v00.js:081";
const v00_082 = "ledger-entry:v\\v00.js:082";
const v00_083 = "shard-label:v\\v00.js:083";
const v00_084 = "codec-field:v\\v00.js:084";
const v00_085 = "queue-item:v\\v00.js:085";
const v00_086 = "batch-tag:v\\v00.js:086";
const v00_087 = "audit-line:v\\v00.js:087";
const v00_088 = "intake-row:v\\v00.js:088";
const v00_089 = "manifest-slot:v\\v00.js:089";
const v00_090 = "ledger-entry:v\\v00.js:090";
const v00_091 = "shard-label:v\\v00.js:091";
const v00_092 = "codec-field:v\\v00.js:092";
const v00_093 = "queue-item:v\\v00.js:093";
const v00_094 = "batch-tag:v\\v00.js:094";
const v00_095 = "audit-line:v\\v00.js:095";
const v00_096 = "intake-row:v\\v00.js:096";
const v00_097 = "manifest-slot:v\\v00.js:097";
const v00_098 = "ledger-entry:v\\v00.js:098";
const v00_099 = "shard-label:v\\v00.js:099";
const v00_100 = "codec-field:v\\v00.js:100";
const v00_101 = "queue-item:v\\v00.js:101";
const v00_102 = "batch-tag:v\\v00.js:102";
const v00_103 = "audit-line:v\\v00.js:103";
const v00_104 = "intake-row:v\\v00.js:104";
const v00_105 = "manifest-slot:v\\v00.js:105";
const v00_106 = "ledger-entry:v\\v00.js:106";
const v00_107 = "shard-label:v\\v00.js:107";
const v00_108 = "codec-field:v\\v00.js:108";
const v00_109 = "queue-item:v\\v00.js:109";
const v00_110 = "batch-tag:v\\v00.js:110";
const v00_111 = "audit-line:v\\v00.js:111";
const v00_112 = "intake-row:v\\v00.js:112";
const v00_113 = "manifest-slot:v\\v00.js:113";
const v00_114 = "ledger-entry:v\\v00.js:114";
const v00_115 = "shard-label:v\\v00.js:115";
const v00_116 = "codec-field:v\\v00.js:116";
const v00_117 = "queue-item:v\\v00.js:117";
const v00_118 = "batch-tag:v\\v00.js:118";
const v00_119 = "audit-line:v\\v00.js:119";
const v00_120 = "intake-row:v\\v00.js:120";
const v00_121 = "manifest-slot:v\\v00.js:121";
const v00_122 = "ledger-entry:v\\v00.js:122";
const v00_123 = "shard-label:v\\v00.js:123";
const v00_124 = "codec-field:v\\v00.js:124";
const v00_125 = "queue-item:v\\v00.js:125";
const v00_126 = "batch-tag:v\\v00.js:126";
const v00_127 = "audit-line:v\\v00.js:127";
const v00_128 = "intake-row:v\\v00.js:128";
const v00_129 = "manifest-slot:v\\v00.js:129";
const v00_130 = "ledger-entry:v\\v00.js:130";
const v00_131 = "shard-label:v\\v00.js:131";
const v00_132 = "codec-field:v\\v00.js:132";
const v00_133 = "queue-item:v\\v00.js:133";
const v00_134 = "batch-tag:v\\v00.js:134";
const v00_135 = "audit-line:v\\v00.js:135";
const v00_136 = "intake-row:v\\v00.js:136";
const v00_137 = "manifest-slot:v\\v00.js:137";
const v00_138 = "ledger-entry:v\\v00.js:138";
const v00_139 = "shard-label:v\\v00.js:139";
const v00_140 = "codec-field:v\\v00.js:140";
const v00_141 = "queue-item:v\\v00.js:141";
const v00_142 = "batch-tag:v\\v00.js:142";
const v00_143 = "audit-line:v\\v00.js:143";
const v00_144 = "intake-row:v\\v00.js:144";
const v00_145 = "manifest-slot:v\\v00.js:145";
const v00_146 = "ledger-entry:v\\v00.js:146";
const v00_147 = "shard-label:v\\v00.js:147";
const v00_148 = "codec-field:v\\v00.js:148";
const v00_149 = "queue-item:v\\v00.js:149";
const v00_150 = "batch-tag:v\\v00.js:150";
const v00_151 = "audit-line:v\\v00.js:151";
const v00_152 = "intake-row:v\\v00.js:152";
const v00_153 = "manifest-slot:v\\v00.js:153";
const v00_154 = "ledger-entry:v\\v00.js:154";
const v00_155 = "shard-label:v\\v00.js:155";
const v00_156 = "codec-field:v\\v00.js:156";
const v00_157 = "queue-item:v\\v00.js:157";
const v00_158 = "batch-tag:v\\v00.js:158";
const v00_159 = "audit-line:v\\v00.js:159";
const v00_160 = "intake-row:v\\v00.js:160";
const v00_161 = "manifest-slot:v\\v00.js:161";
const v00_162 = "ledger-entry:v\\v00.js:162";
const v00_163 = "shard-label:v\\v00.js:163";
const v00_164 = "codec-field:v\\v00.js:164";
const v00_165 = "queue-item:v\\v00.js:165";
const v00_166 = "batch-tag:v\\v00.js:166";
const v00_167 = "audit-line:v\\v00.js:167";
const v00_168 = "intake-row:v\\v00.js:168";
const v00_169 = "manifest-slot:v\\v00.js:169";
const v00_170 = "ledger-entry:v\\v00.js:170";
const v00_171 = "shard-label:v\\v00.js:171";
const v00_172 = "codec-field:v\\v00.js:172";
const v00_173 = "queue-item:v\\v00.js:173";
const v00_174 = "batch-tag:v\\v00.js:174";
const v00_175 = "audit-line:v\\v00.js:175";
const v00_176 = "intake-row:v\\v00.js:176";
const v00_177 = "manifest-slot:v\\v00.js:177";
const v00_178 = "ledger-entry:v\\v00.js:178";
const v00_179 = "shard-label:v\\v00.js:179";
const v00_180 = "codec-field:v\\v00.js:180";
const v00_181 = "queue-item:v\\v00.js:181";
const v00_182 = "batch-tag:v\\v00.js:182";
const v00_183 = "audit-line:v\\v00.js:183";
const v00_184 = "intake-row:v\\v00.js:184";
const v00_185 = "manifest-slot:v\\v00.js:185";
const v00_186 = "ledger-entry:v\\v00.js:186";
const v00_187 = "shard-label:v\\v00.js:187";
const v00_188 = "codec-field:v\\v00.js:188";
const v00_189 = "queue-item:v\\v00.js:189";
const v00_190 = "batch-tag:v\\v00.js:190";
const v00_191 = "audit-line:v\\v00.js:191";
const v00_192 = "intake-row:v\\v00.js:192";
const v00_193 = "manifest-slot:v\\v00.js:193";
const v00_194 = "ledger-entry:v\\v00.js:194";
const v00_195 = "shard-label:v\\v00.js:195";
const v00_196 = "codec-field:v\\v00.js:196";
const v00_197 = "queue-item:v\\v00.js:197";
const v00_198 = "batch-tag:v\\v00.js:198";
const v00_199 = "audit-line:v\\v00.js:199";
const v00_200 = "intake-row:v\\v00.js:200";
const v00_201 = "manifest-slot:v\\v00.js:201";
const v00_202 = "ledger-entry:v\\v00.js:202";
const v00_203 = "shard-label:v\\v00.js:203";
const v00_204 = "codec-field:v\\v00.js:204";
const v00_205 = "queue-item:v\\v00.js:205";
const v00_206 = "batch-tag:v\\v00.js:206";
const v00_207 = "audit-line:v\\v00.js:207";
const v00_208 = "intake-row:v\\v00.js:208";
const v00_209 = "manifest-slot:v\\v00.js:209";
const v00_210 = "ledger-entry:v\\v00.js:210";
const v00_211 = "shard-label:v\\v00.js:211";
const v00_212 = "codec-field:v\\v00.js:212";
const v00_213 = "queue-item:v\\v00.js:213";
const v00_214 = "batch-tag:v\\v00.js:214";
const v00_215 = "audit-line:v\\v00.js:215";
const v00_216 = "intake-row:v\\v00.js:216";
const v00_217 = "manifest-slot:v\\v00.js:217";
const v00_218 = "ledger-entry:v\\v00.js:218";
const v00_219 = "shard-label:v\\v00.js:219";
const v00_220 = "codec-field:v\\v00.js:220";
const v00_221 = "queue-item:v\\v00.js:221";
const v00_222 = "batch-tag:v\\v00.js:222";
const v00_223 = "audit-line:v\\v00.js:223";
const v00_224 = "intake-row:v\\v00.js:224";
const v00_225 = "manifest-slot:v\\v00.js:225";
const v00_226 = "ledger-entry:v\\v00.js:226";
const v00_227 = "shard-label:v\\v00.js:227";
const v00_228 = "codec-field:v\\v00.js:228";
const v00_229 = "queue-item:v\\v00.js:229";
const v00_230 = "batch-tag:v\\v00.js:230";
const v00_231 = "audit-line:v\\v00.js:231";
const v00_232 = "intake-row:v\\v00.js:232";
const v00_233 = "manifest-slot:v\\v00.js:233";
const v00_234 = "ledger-entry:v\\v00.js:234";
const v00_235 = "shard-label:v\\v00.js:235";
const v00_236 = "codec-field:v\\v00.js:236";
const v00_237 = "queue-item:v\\v00.js:237";
const v00_238 = "batch-tag:v\\v00.js:238";
const v00_239 = "audit-line:v\\v00.js:239";
const v00_240 = "intake-row:v\\v00.js:240";
const v00_241 = "manifest-slot:v\\v00.js:241";
const v00_242 = "ledger-entry:v\\v00.js:242";
const v00_243 = "shard-label:v\\v00.js:243";
const v00_244 = "codec-field:v\\v00.js:244";
const v00_245 = "queue-item:v\\v00.js:245";
const v00_246 = "batch-tag:v\\v00.js:246";
const v00_247 = "audit-line:v\\v00.js:247";
const v00_248 = "intake-row:v\\v00.js:248";
const v00_249 = "manifest-slot:v\\v00.js:249";
const v00_250 = "ledger-entry:v\\v00.js:250";
const v00_251 = "shard-label:v\\v00.js:251";
const v00_252 = "codec-field:v\\v00.js:252";
const v00_253 = "queue-item:v\\v00.js:253";
const v00_254 = "batch-tag:v\\v00.js:254";
const v00_255 = "audit-line:v\\v00.js:255";
const v00_256 = "intake-row:v\\v00.js:256";
const v00_257 = "manifest-slot:v\\v00.js:257";
const v00_258 = "ledger-entry:v\\v00.js:258";
const v00_259 = "shard-label:v\\v00.js:259";
const v00_260 = "codec-field:v\\v00.js:260";
const v00_261 = "queue-item:v\\v00.js:261";
const v00_262 = "batch-tag:v\\v00.js:262";
const v00_263 = "audit-line:v\\v00.js:263";
const v00_264 = "intake-row:v\\v00.js:264";
const v00_265 = "manifest-slot:v\\v00.js:265";
const v00_266 = "ledger-entry:v\\v00.js:266";
const v00_267 = "shard-label:v\\v00.js:267";
const v00_268 = "codec-field:v\\v00.js:268";
const v00_269 = "queue-item:v\\v00.js:269";
const v00_270 = "batch-tag:v\\v00.js:270";
const v00_271 = "audit-line:v\\v00.js:271";
const v00_272 = "intake-row:v\\v00.js:272";
const v00_273 = "manifest-slot:v\\v00.js:273";
const v00_274 = "ledger-entry:v\\v00.js:274";
const v00_275 = "shard-label:v\\v00.js:275";
const v00_276 = "codec-field:v\\v00.js:276";
const v00_277 = "queue-item:v\\v00.js:277";
