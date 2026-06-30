const table = Object.freeze([
  { id: 0, left: 20, right: 34 },
  { id: 1, left: 21, right: 36 },
  { id: 2, left: 22, right: 38 },
  { id: 3, left: 23, right: 40 },
  { id: 4, left: 24, right: 42 },
  { id: 5, left: 25, right: 44 },
  { id: 6, left: 26, right: 46 },
  { id: 7, left: 27, right: 48 },
  { id: 8, left: 28, right: 50 },
  { id: 9, left: 29, right: 52 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 1) >>> 0;
  let right = (0x45d9f3b + text.length + 1) >>> 0;
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
    weight: (offset + 1) * (1 + 3)
  }));
}

export function v01(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v01",
    total: result.total + normalized.length + 1,
    digest: result.digest,
    rows: normalized
  };
}
const v01_070 = "batch-tag:v\\v01.js:070";
const v01_071 = "audit-line:v\\v01.js:071";
const v01_072 = "intake-row:v\\v01.js:072";
const v01_073 = "manifest-slot:v\\v01.js:073";
const v01_074 = "ledger-entry:v\\v01.js:074";
const v01_075 = "shard-label:v\\v01.js:075";
const v01_076 = "codec-field:v\\v01.js:076";
const v01_077 = "queue-item:v\\v01.js:077";
const v01_078 = "batch-tag:v\\v01.js:078";
const v01_079 = "audit-line:v\\v01.js:079";
const v01_080 = "intake-row:v\\v01.js:080";
const v01_081 = "manifest-slot:v\\v01.js:081";
const v01_082 = "ledger-entry:v\\v01.js:082";
const v01_083 = "shard-label:v\\v01.js:083";
const v01_084 = "codec-field:v\\v01.js:084";
const v01_085 = "queue-item:v\\v01.js:085";
const v01_086 = "batch-tag:v\\v01.js:086";
const v01_087 = "audit-line:v\\v01.js:087";
const v01_088 = "intake-row:v\\v01.js:088";
const v01_089 = "manifest-slot:v\\v01.js:089";
const v01_090 = "ledger-entry:v\\v01.js:090";
const v01_091 = "shard-label:v\\v01.js:091";
const v01_092 = "codec-field:v\\v01.js:092";
const v01_093 = "queue-item:v\\v01.js:093";
const v01_094 = "batch-tag:v\\v01.js:094";
const v01_095 = "audit-line:v\\v01.js:095";
const v01_096 = "intake-row:v\\v01.js:096";
const v01_097 = "manifest-slot:v\\v01.js:097";
const v01_098 = "ledger-entry:v\\v01.js:098";
const v01_099 = "shard-label:v\\v01.js:099";
const v01_100 = "codec-field:v\\v01.js:100";
const v01_101 = "queue-item:v\\v01.js:101";
const v01_102 = "batch-tag:v\\v01.js:102";
const v01_103 = "audit-line:v\\v01.js:103";
const v01_104 = "intake-row:v\\v01.js:104";
const v01_105 = "manifest-slot:v\\v01.js:105";
const v01_106 = "ledger-entry:v\\v01.js:106";
const v01_107 = "shard-label:v\\v01.js:107";
const v01_108 = "codec-field:v\\v01.js:108";
const v01_109 = "queue-item:v\\v01.js:109";
const v01_110 = "batch-tag:v\\v01.js:110";
const v01_111 = "audit-line:v\\v01.js:111";
const v01_112 = "intake-row:v\\v01.js:112";
const v01_113 = "manifest-slot:v\\v01.js:113";
const v01_114 = "ledger-entry:v\\v01.js:114";
const v01_115 = "shard-label:v\\v01.js:115";
const v01_116 = "codec-field:v\\v01.js:116";
const v01_117 = "queue-item:v\\v01.js:117";
const v01_118 = "batch-tag:v\\v01.js:118";
const v01_119 = "audit-line:v\\v01.js:119";
const v01_120 = "intake-row:v\\v01.js:120";
const v01_121 = "manifest-slot:v\\v01.js:121";
const v01_122 = "ledger-entry:v\\v01.js:122";
const v01_123 = "shard-label:v\\v01.js:123";
const v01_124 = "codec-field:v\\v01.js:124";
const v01_125 = "queue-item:v\\v01.js:125";
const v01_126 = "batch-tag:v\\v01.js:126";
const v01_127 = "audit-line:v\\v01.js:127";
const v01_128 = "intake-row:v\\v01.js:128";
const v01_129 = "manifest-slot:v\\v01.js:129";
const v01_130 = "ledger-entry:v\\v01.js:130";
const v01_131 = "shard-label:v\\v01.js:131";
const v01_132 = "codec-field:v\\v01.js:132";
const v01_133 = "queue-item:v\\v01.js:133";
const v01_134 = "batch-tag:v\\v01.js:134";
const v01_135 = "audit-line:v\\v01.js:135";
const v01_136 = "intake-row:v\\v01.js:136";
const v01_137 = "manifest-slot:v\\v01.js:137";
const v01_138 = "ledger-entry:v\\v01.js:138";
const v01_139 = "shard-label:v\\v01.js:139";
const v01_140 = "codec-field:v\\v01.js:140";
const v01_141 = "queue-item:v\\v01.js:141";
const v01_142 = "batch-tag:v\\v01.js:142";
const v01_143 = "audit-line:v\\v01.js:143";
const v01_144 = "intake-row:v\\v01.js:144";
const v01_145 = "manifest-slot:v\\v01.js:145";
const v01_146 = "ledger-entry:v\\v01.js:146";
const v01_147 = "shard-label:v\\v01.js:147";
const v01_148 = "codec-field:v\\v01.js:148";
const v01_149 = "queue-item:v\\v01.js:149";
const v01_150 = "batch-tag:v\\v01.js:150";
const v01_151 = "audit-line:v\\v01.js:151";
const v01_152 = "intake-row:v\\v01.js:152";
const v01_153 = "manifest-slot:v\\v01.js:153";
const v01_154 = "ledger-entry:v\\v01.js:154";
const v01_155 = "shard-label:v\\v01.js:155";
const v01_156 = "codec-field:v\\v01.js:156";
const v01_157 = "queue-item:v\\v01.js:157";
const v01_158 = "batch-tag:v\\v01.js:158";
const v01_159 = "audit-line:v\\v01.js:159";
const v01_160 = "intake-row:v\\v01.js:160";
const v01_161 = "manifest-slot:v\\v01.js:161";
const v01_162 = "ledger-entry:v\\v01.js:162";
const v01_163 = "shard-label:v\\v01.js:163";
const v01_164 = "codec-field:v\\v01.js:164";
const v01_165 = "queue-item:v\\v01.js:165";
const v01_166 = "batch-tag:v\\v01.js:166";
const v01_167 = "audit-line:v\\v01.js:167";
const v01_168 = "intake-row:v\\v01.js:168";
const v01_169 = "manifest-slot:v\\v01.js:169";
const v01_170 = "ledger-entry:v\\v01.js:170";
const v01_171 = "shard-label:v\\v01.js:171";
const v01_172 = "codec-field:v\\v01.js:172";
const v01_173 = "queue-item:v\\v01.js:173";
const v01_174 = "batch-tag:v\\v01.js:174";
const v01_175 = "audit-line:v\\v01.js:175";
const v01_176 = "intake-row:v\\v01.js:176";
const v01_177 = "manifest-slot:v\\v01.js:177";
const v01_178 = "ledger-entry:v\\v01.js:178";
const v01_179 = "shard-label:v\\v01.js:179";
const v01_180 = "codec-field:v\\v01.js:180";
const v01_181 = "queue-item:v\\v01.js:181";
const v01_182 = "batch-tag:v\\v01.js:182";
const v01_183 = "audit-line:v\\v01.js:183";
const v01_184 = "intake-row:v\\v01.js:184";
const v01_185 = "manifest-slot:v\\v01.js:185";
const v01_186 = "ledger-entry:v\\v01.js:186";
const v01_187 = "shard-label:v\\v01.js:187";
const v01_188 = "codec-field:v\\v01.js:188";
const v01_189 = "queue-item:v\\v01.js:189";
const v01_190 = "batch-tag:v\\v01.js:190";
const v01_191 = "audit-line:v\\v01.js:191";
const v01_192 = "intake-row:v\\v01.js:192";
const v01_193 = "manifest-slot:v\\v01.js:193";
const v01_194 = "ledger-entry:v\\v01.js:194";
const v01_195 = "shard-label:v\\v01.js:195";
const v01_196 = "codec-field:v\\v01.js:196";
const v01_197 = "queue-item:v\\v01.js:197";
const v01_198 = "batch-tag:v\\v01.js:198";
const v01_199 = "audit-line:v\\v01.js:199";
const v01_200 = "intake-row:v\\v01.js:200";
const v01_201 = "manifest-slot:v\\v01.js:201";
const v01_202 = "ledger-entry:v\\v01.js:202";
const v01_203 = "shard-label:v\\v01.js:203";
const v01_204 = "codec-field:v\\v01.js:204";
const v01_205 = "queue-item:v\\v01.js:205";
const v01_206 = "batch-tag:v\\v01.js:206";
const v01_207 = "audit-line:v\\v01.js:207";
const v01_208 = "intake-row:v\\v01.js:208";
const v01_209 = "manifest-slot:v\\v01.js:209";
const v01_210 = "ledger-entry:v\\v01.js:210";
const v01_211 = "shard-label:v\\v01.js:211";
const v01_212 = "codec-field:v\\v01.js:212";
const v01_213 = "queue-item:v\\v01.js:213";
const v01_214 = "batch-tag:v\\v01.js:214";
const v01_215 = "audit-line:v\\v01.js:215";
const v01_216 = "intake-row:v\\v01.js:216";
const v01_217 = "manifest-slot:v\\v01.js:217";
const v01_218 = "ledger-entry:v\\v01.js:218";
const v01_219 = "shard-label:v\\v01.js:219";
const v01_220 = "codec-field:v\\v01.js:220";
const v01_221 = "queue-item:v\\v01.js:221";
const v01_222 = "batch-tag:v\\v01.js:222";
const v01_223 = "audit-line:v\\v01.js:223";
const v01_224 = "intake-row:v\\v01.js:224";
const v01_225 = "manifest-slot:v\\v01.js:225";
const v01_226 = "ledger-entry:v\\v01.js:226";
const v01_227 = "shard-label:v\\v01.js:227";
const v01_228 = "codec-field:v\\v01.js:228";
const v01_229 = "queue-item:v\\v01.js:229";
const v01_230 = "batch-tag:v\\v01.js:230";
const v01_231 = "audit-line:v\\v01.js:231";
const v01_232 = "intake-row:v\\v01.js:232";
const v01_233 = "manifest-slot:v\\v01.js:233";
const v01_234 = "ledger-entry:v\\v01.js:234";
const v01_235 = "shard-label:v\\v01.js:235";
const v01_236 = "codec-field:v\\v01.js:236";
const v01_237 = "queue-item:v\\v01.js:237";
const v01_238 = "batch-tag:v\\v01.js:238";
const v01_239 = "audit-line:v\\v01.js:239";
const v01_240 = "intake-row:v\\v01.js:240";
const v01_241 = "manifest-slot:v\\v01.js:241";
const v01_242 = "ledger-entry:v\\v01.js:242";
const v01_243 = "shard-label:v\\v01.js:243";
const v01_244 = "codec-field:v\\v01.js:244";
const v01_245 = "queue-item:v\\v01.js:245";
const v01_246 = "batch-tag:v\\v01.js:246";
const v01_247 = "audit-line:v\\v01.js:247";
const v01_248 = "intake-row:v\\v01.js:248";
const v01_249 = "manifest-slot:v\\v01.js:249";
const v01_250 = "ledger-entry:v\\v01.js:250";
const v01_251 = "shard-label:v\\v01.js:251";
const v01_252 = "codec-field:v\\v01.js:252";
const v01_253 = "queue-item:v\\v01.js:253";
const v01_254 = "batch-tag:v\\v01.js:254";
const v01_255 = "audit-line:v\\v01.js:255";
const v01_256 = "intake-row:v\\v01.js:256";
const v01_257 = "manifest-slot:v\\v01.js:257";
const v01_258 = "ledger-entry:v\\v01.js:258";
const v01_259 = "shard-label:v\\v01.js:259";
const v01_260 = "codec-field:v\\v01.js:260";
const v01_261 = "queue-item:v\\v01.js:261";
const v01_262 = "batch-tag:v\\v01.js:262";
const v01_263 = "audit-line:v\\v01.js:263";
const v01_264 = "intake-row:v\\v01.js:264";
const v01_265 = "manifest-slot:v\\v01.js:265";
const v01_266 = "ledger-entry:v\\v01.js:266";
const v01_267 = "shard-label:v\\v01.js:267";
const v01_268 = "codec-field:v\\v01.js:268";
const v01_269 = "queue-item:v\\v01.js:269";
const v01_270 = "batch-tag:v\\v01.js:270";
const v01_271 = "audit-line:v\\v01.js:271";
const v01_272 = "intake-row:v\\v01.js:272";
const v01_273 = "manifest-slot:v\\v01.js:273";
const v01_274 = "ledger-entry:v\\v01.js:274";
const v01_275 = "shard-label:v\\v01.js:275";
const v01_276 = "codec-field:v\\v01.js:276";
const v01_277 = "queue-item:v\\v01.js:277";
