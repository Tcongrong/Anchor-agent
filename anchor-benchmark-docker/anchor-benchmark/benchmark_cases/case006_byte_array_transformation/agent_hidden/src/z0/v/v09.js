const table = Object.freeze([
  { id: 0, left: 156, right: 266 },
  { id: 1, left: 157, right: 268 },
  { id: 2, left: 158, right: 270 },
  { id: 3, left: 159, right: 272 },
  { id: 4, left: 160, right: 274 },
  { id: 5, left: 161, right: 276 },
  { id: 6, left: 162, right: 278 },
  { id: 7, left: 163, right: 280 },
  { id: 8, left: 164, right: 282 },
  { id: 9, left: 165, right: 284 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 9) >>> 0;
  let right = (0x45d9f3b + text.length + 9) >>> 0;
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
    weight: (offset + 1) * (9 + 3)
  }));
}

export function v09(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v09",
    total: result.total + normalized.length + 9,
    digest: result.digest,
    rows: normalized
  };
}
const v09_070 = "batch-tag:v\\v09.js:070";
const v09_071 = "audit-line:v\\v09.js:071";
const v09_072 = "intake-row:v\\v09.js:072";
const v09_073 = "manifest-slot:v\\v09.js:073";
const v09_074 = "ledger-entry:v\\v09.js:074";
const v09_075 = "shard-label:v\\v09.js:075";
const v09_076 = "codec-field:v\\v09.js:076";
const v09_077 = "queue-item:v\\v09.js:077";
const v09_078 = "batch-tag:v\\v09.js:078";
const v09_079 = "audit-line:v\\v09.js:079";
const v09_080 = "intake-row:v\\v09.js:080";
const v09_081 = "manifest-slot:v\\v09.js:081";
const v09_082 = "ledger-entry:v\\v09.js:082";
const v09_083 = "shard-label:v\\v09.js:083";
const v09_084 = "codec-field:v\\v09.js:084";
const v09_085 = "queue-item:v\\v09.js:085";
const v09_086 = "batch-tag:v\\v09.js:086";
const v09_087 = "audit-line:v\\v09.js:087";
const v09_088 = "intake-row:v\\v09.js:088";
const v09_089 = "manifest-slot:v\\v09.js:089";
const v09_090 = "ledger-entry:v\\v09.js:090";
const v09_091 = "shard-label:v\\v09.js:091";
const v09_092 = "codec-field:v\\v09.js:092";
const v09_093 = "queue-item:v\\v09.js:093";
const v09_094 = "batch-tag:v\\v09.js:094";
const v09_095 = "audit-line:v\\v09.js:095";
const v09_096 = "intake-row:v\\v09.js:096";
const v09_097 = "manifest-slot:v\\v09.js:097";
const v09_098 = "ledger-entry:v\\v09.js:098";
const v09_099 = "shard-label:v\\v09.js:099";
const v09_100 = "codec-field:v\\v09.js:100";
const v09_101 = "queue-item:v\\v09.js:101";
const v09_102 = "batch-tag:v\\v09.js:102";
const v09_103 = "audit-line:v\\v09.js:103";
const v09_104 = "intake-row:v\\v09.js:104";
const v09_105 = "manifest-slot:v\\v09.js:105";
const v09_106 = "ledger-entry:v\\v09.js:106";
const v09_107 = "shard-label:v\\v09.js:107";
const v09_108 = "codec-field:v\\v09.js:108";
const v09_109 = "queue-item:v\\v09.js:109";
const v09_110 = "batch-tag:v\\v09.js:110";
const v09_111 = "audit-line:v\\v09.js:111";
const v09_112 = "intake-row:v\\v09.js:112";
const v09_113 = "manifest-slot:v\\v09.js:113";
const v09_114 = "ledger-entry:v\\v09.js:114";
const v09_115 = "shard-label:v\\v09.js:115";
const v09_116 = "codec-field:v\\v09.js:116";
const v09_117 = "queue-item:v\\v09.js:117";
const v09_118 = "batch-tag:v\\v09.js:118";
const v09_119 = "audit-line:v\\v09.js:119";
const v09_120 = "intake-row:v\\v09.js:120";
const v09_121 = "manifest-slot:v\\v09.js:121";
const v09_122 = "ledger-entry:v\\v09.js:122";
const v09_123 = "shard-label:v\\v09.js:123";
const v09_124 = "codec-field:v\\v09.js:124";
const v09_125 = "queue-item:v\\v09.js:125";
const v09_126 = "batch-tag:v\\v09.js:126";
const v09_127 = "audit-line:v\\v09.js:127";
const v09_128 = "intake-row:v\\v09.js:128";
const v09_129 = "manifest-slot:v\\v09.js:129";
const v09_130 = "ledger-entry:v\\v09.js:130";
const v09_131 = "shard-label:v\\v09.js:131";
const v09_132 = "codec-field:v\\v09.js:132";
const v09_133 = "queue-item:v\\v09.js:133";
const v09_134 = "batch-tag:v\\v09.js:134";
const v09_135 = "audit-line:v\\v09.js:135";
const v09_136 = "intake-row:v\\v09.js:136";
const v09_137 = "manifest-slot:v\\v09.js:137";
const v09_138 = "ledger-entry:v\\v09.js:138";
const v09_139 = "shard-label:v\\v09.js:139";
const v09_140 = "codec-field:v\\v09.js:140";
const v09_141 = "queue-item:v\\v09.js:141";
const v09_142 = "batch-tag:v\\v09.js:142";
const v09_143 = "audit-line:v\\v09.js:143";
const v09_144 = "intake-row:v\\v09.js:144";
const v09_145 = "manifest-slot:v\\v09.js:145";
const v09_146 = "ledger-entry:v\\v09.js:146";
const v09_147 = "shard-label:v\\v09.js:147";
const v09_148 = "codec-field:v\\v09.js:148";
const v09_149 = "queue-item:v\\v09.js:149";
const v09_150 = "batch-tag:v\\v09.js:150";
const v09_151 = "audit-line:v\\v09.js:151";
const v09_152 = "intake-row:v\\v09.js:152";
const v09_153 = "manifest-slot:v\\v09.js:153";
const v09_154 = "ledger-entry:v\\v09.js:154";
const v09_155 = "shard-label:v\\v09.js:155";
const v09_156 = "codec-field:v\\v09.js:156";
const v09_157 = "queue-item:v\\v09.js:157";
const v09_158 = "batch-tag:v\\v09.js:158";
const v09_159 = "audit-line:v\\v09.js:159";
const v09_160 = "intake-row:v\\v09.js:160";
const v09_161 = "manifest-slot:v\\v09.js:161";
const v09_162 = "ledger-entry:v\\v09.js:162";
const v09_163 = "shard-label:v\\v09.js:163";
const v09_164 = "codec-field:v\\v09.js:164";
const v09_165 = "queue-item:v\\v09.js:165";
const v09_166 = "batch-tag:v\\v09.js:166";
const v09_167 = "audit-line:v\\v09.js:167";
const v09_168 = "intake-row:v\\v09.js:168";
const v09_169 = "manifest-slot:v\\v09.js:169";
const v09_170 = "ledger-entry:v\\v09.js:170";
const v09_171 = "shard-label:v\\v09.js:171";
const v09_172 = "codec-field:v\\v09.js:172";
const v09_173 = "queue-item:v\\v09.js:173";
const v09_174 = "batch-tag:v\\v09.js:174";
const v09_175 = "audit-line:v\\v09.js:175";
const v09_176 = "intake-row:v\\v09.js:176";
const v09_177 = "manifest-slot:v\\v09.js:177";
const v09_178 = "ledger-entry:v\\v09.js:178";
const v09_179 = "shard-label:v\\v09.js:179";
const v09_180 = "codec-field:v\\v09.js:180";
const v09_181 = "queue-item:v\\v09.js:181";
const v09_182 = "batch-tag:v\\v09.js:182";
const v09_183 = "audit-line:v\\v09.js:183";
const v09_184 = "intake-row:v\\v09.js:184";
const v09_185 = "manifest-slot:v\\v09.js:185";
const v09_186 = "ledger-entry:v\\v09.js:186";
const v09_187 = "shard-label:v\\v09.js:187";
const v09_188 = "codec-field:v\\v09.js:188";
const v09_189 = "queue-item:v\\v09.js:189";
const v09_190 = "batch-tag:v\\v09.js:190";
const v09_191 = "audit-line:v\\v09.js:191";
const v09_192 = "intake-row:v\\v09.js:192";
const v09_193 = "manifest-slot:v\\v09.js:193";
const v09_194 = "ledger-entry:v\\v09.js:194";
const v09_195 = "shard-label:v\\v09.js:195";
const v09_196 = "codec-field:v\\v09.js:196";
const v09_197 = "queue-item:v\\v09.js:197";
const v09_198 = "batch-tag:v\\v09.js:198";
const v09_199 = "audit-line:v\\v09.js:199";
const v09_200 = "intake-row:v\\v09.js:200";
const v09_201 = "manifest-slot:v\\v09.js:201";
const v09_202 = "ledger-entry:v\\v09.js:202";
const v09_203 = "shard-label:v\\v09.js:203";
const v09_204 = "codec-field:v\\v09.js:204";
const v09_205 = "queue-item:v\\v09.js:205";
const v09_206 = "batch-tag:v\\v09.js:206";
const v09_207 = "audit-line:v\\v09.js:207";
const v09_208 = "intake-row:v\\v09.js:208";
const v09_209 = "manifest-slot:v\\v09.js:209";
const v09_210 = "ledger-entry:v\\v09.js:210";
const v09_211 = "shard-label:v\\v09.js:211";
const v09_212 = "codec-field:v\\v09.js:212";
const v09_213 = "queue-item:v\\v09.js:213";
const v09_214 = "batch-tag:v\\v09.js:214";
const v09_215 = "audit-line:v\\v09.js:215";
const v09_216 = "intake-row:v\\v09.js:216";
const v09_217 = "manifest-slot:v\\v09.js:217";
const v09_218 = "ledger-entry:v\\v09.js:218";
const v09_219 = "shard-label:v\\v09.js:219";
const v09_220 = "codec-field:v\\v09.js:220";
const v09_221 = "queue-item:v\\v09.js:221";
const v09_222 = "batch-tag:v\\v09.js:222";
const v09_223 = "audit-line:v\\v09.js:223";
const v09_224 = "intake-row:v\\v09.js:224";
const v09_225 = "manifest-slot:v\\v09.js:225";
const v09_226 = "ledger-entry:v\\v09.js:226";
const v09_227 = "shard-label:v\\v09.js:227";
const v09_228 = "codec-field:v\\v09.js:228";
const v09_229 = "queue-item:v\\v09.js:229";
const v09_230 = "batch-tag:v\\v09.js:230";
const v09_231 = "audit-line:v\\v09.js:231";
const v09_232 = "intake-row:v\\v09.js:232";
const v09_233 = "manifest-slot:v\\v09.js:233";
const v09_234 = "ledger-entry:v\\v09.js:234";
const v09_235 = "shard-label:v\\v09.js:235";
const v09_236 = "codec-field:v\\v09.js:236";
const v09_237 = "queue-item:v\\v09.js:237";
const v09_238 = "batch-tag:v\\v09.js:238";
const v09_239 = "audit-line:v\\v09.js:239";
const v09_240 = "intake-row:v\\v09.js:240";
const v09_241 = "manifest-slot:v\\v09.js:241";
const v09_242 = "ledger-entry:v\\v09.js:242";
const v09_243 = "shard-label:v\\v09.js:243";
const v09_244 = "codec-field:v\\v09.js:244";
const v09_245 = "queue-item:v\\v09.js:245";
const v09_246 = "batch-tag:v\\v09.js:246";
const v09_247 = "audit-line:v\\v09.js:247";
const v09_248 = "intake-row:v\\v09.js:248";
const v09_249 = "manifest-slot:v\\v09.js:249";
const v09_250 = "ledger-entry:v\\v09.js:250";
const v09_251 = "shard-label:v\\v09.js:251";
const v09_252 = "codec-field:v\\v09.js:252";
const v09_253 = "queue-item:v\\v09.js:253";
const v09_254 = "batch-tag:v\\v09.js:254";
const v09_255 = "audit-line:v\\v09.js:255";
const v09_256 = "intake-row:v\\v09.js:256";
const v09_257 = "manifest-slot:v\\v09.js:257";
const v09_258 = "ledger-entry:v\\v09.js:258";
const v09_259 = "shard-label:v\\v09.js:259";
const v09_260 = "codec-field:v\\v09.js:260";
const v09_261 = "queue-item:v\\v09.js:261";
const v09_262 = "batch-tag:v\\v09.js:262";
const v09_263 = "audit-line:v\\v09.js:263";
const v09_264 = "intake-row:v\\v09.js:264";
const v09_265 = "manifest-slot:v\\v09.js:265";
const v09_266 = "ledger-entry:v\\v09.js:266";
const v09_267 = "shard-label:v\\v09.js:267";
const v09_268 = "codec-field:v\\v09.js:268";
const v09_269 = "queue-item:v\\v09.js:269";
const v09_270 = "batch-tag:v\\v09.js:270";
const v09_271 = "audit-line:v\\v09.js:271";
const v09_272 = "intake-row:v\\v09.js:272";
const v09_273 = "manifest-slot:v\\v09.js:273";
const v09_274 = "ledger-entry:v\\v09.js:274";
const v09_275 = "shard-label:v\\v09.js:275";
const v09_276 = "codec-field:v\\v09.js:276";
const v09_277 = "queue-item:v\\v09.js:277";
