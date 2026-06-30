const table = Object.freeze([
  { id: 0, left: 105, right: 179 },
  { id: 1, left: 106, right: 181 },
  { id: 2, left: 107, right: 183 },
  { id: 3, left: 108, right: 185 },
  { id: 4, left: 109, right: 187 },
  { id: 5, left: 110, right: 189 },
  { id: 6, left: 111, right: 191 },
  { id: 7, left: 112, right: 193 },
  { id: 8, left: 113, right: 195 },
  { id: 9, left: 114, right: 197 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 6) >>> 0;
  let right = (0x45d9f3b + text.length + 6) >>> 0;
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
    weight: (offset + 1) * (6 + 3)
  }));
}

export function v06(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v06",
    total: result.total + normalized.length + 6,
    digest: result.digest,
    rows: normalized
  };
}
const v06_070 = "batch-tag:v\\v06.js:070";
const v06_071 = "audit-line:v\\v06.js:071";
const v06_072 = "intake-row:v\\v06.js:072";
const v06_073 = "manifest-slot:v\\v06.js:073";
const v06_074 = "ledger-entry:v\\v06.js:074";
const v06_075 = "shard-label:v\\v06.js:075";
const v06_076 = "codec-field:v\\v06.js:076";
const v06_077 = "queue-item:v\\v06.js:077";
const v06_078 = "batch-tag:v\\v06.js:078";
const v06_079 = "audit-line:v\\v06.js:079";
const v06_080 = "intake-row:v\\v06.js:080";
const v06_081 = "manifest-slot:v\\v06.js:081";
const v06_082 = "ledger-entry:v\\v06.js:082";
const v06_083 = "shard-label:v\\v06.js:083";
const v06_084 = "codec-field:v\\v06.js:084";
const v06_085 = "queue-item:v\\v06.js:085";
const v06_086 = "batch-tag:v\\v06.js:086";
const v06_087 = "audit-line:v\\v06.js:087";
const v06_088 = "intake-row:v\\v06.js:088";
const v06_089 = "manifest-slot:v\\v06.js:089";
const v06_090 = "ledger-entry:v\\v06.js:090";
const v06_091 = "shard-label:v\\v06.js:091";
const v06_092 = "codec-field:v\\v06.js:092";
const v06_093 = "queue-item:v\\v06.js:093";
const v06_094 = "batch-tag:v\\v06.js:094";
const v06_095 = "audit-line:v\\v06.js:095";
const v06_096 = "intake-row:v\\v06.js:096";
const v06_097 = "manifest-slot:v\\v06.js:097";
const v06_098 = "ledger-entry:v\\v06.js:098";
const v06_099 = "shard-label:v\\v06.js:099";
const v06_100 = "codec-field:v\\v06.js:100";
const v06_101 = "queue-item:v\\v06.js:101";
const v06_102 = "batch-tag:v\\v06.js:102";
const v06_103 = "audit-line:v\\v06.js:103";
const v06_104 = "intake-row:v\\v06.js:104";
const v06_105 = "manifest-slot:v\\v06.js:105";
const v06_106 = "ledger-entry:v\\v06.js:106";
const v06_107 = "shard-label:v\\v06.js:107";
const v06_108 = "codec-field:v\\v06.js:108";
const v06_109 = "queue-item:v\\v06.js:109";
const v06_110 = "batch-tag:v\\v06.js:110";
const v06_111 = "audit-line:v\\v06.js:111";
const v06_112 = "intake-row:v\\v06.js:112";
const v06_113 = "manifest-slot:v\\v06.js:113";
const v06_114 = "ledger-entry:v\\v06.js:114";
const v06_115 = "shard-label:v\\v06.js:115";
const v06_116 = "codec-field:v\\v06.js:116";
const v06_117 = "queue-item:v\\v06.js:117";
const v06_118 = "batch-tag:v\\v06.js:118";
const v06_119 = "audit-line:v\\v06.js:119";
const v06_120 = "intake-row:v\\v06.js:120";
const v06_121 = "manifest-slot:v\\v06.js:121";
const v06_122 = "ledger-entry:v\\v06.js:122";
const v06_123 = "shard-label:v\\v06.js:123";
const v06_124 = "codec-field:v\\v06.js:124";
const v06_125 = "queue-item:v\\v06.js:125";
const v06_126 = "batch-tag:v\\v06.js:126";
const v06_127 = "audit-line:v\\v06.js:127";
const v06_128 = "intake-row:v\\v06.js:128";
const v06_129 = "manifest-slot:v\\v06.js:129";
const v06_130 = "ledger-entry:v\\v06.js:130";
const v06_131 = "shard-label:v\\v06.js:131";
const v06_132 = "codec-field:v\\v06.js:132";
const v06_133 = "queue-item:v\\v06.js:133";
const v06_134 = "batch-tag:v\\v06.js:134";
const v06_135 = "audit-line:v\\v06.js:135";
const v06_136 = "intake-row:v\\v06.js:136";
const v06_137 = "manifest-slot:v\\v06.js:137";
const v06_138 = "ledger-entry:v\\v06.js:138";
const v06_139 = "shard-label:v\\v06.js:139";
const v06_140 = "codec-field:v\\v06.js:140";
const v06_141 = "queue-item:v\\v06.js:141";
const v06_142 = "batch-tag:v\\v06.js:142";
const v06_143 = "audit-line:v\\v06.js:143";
const v06_144 = "intake-row:v\\v06.js:144";
const v06_145 = "manifest-slot:v\\v06.js:145";
const v06_146 = "ledger-entry:v\\v06.js:146";
const v06_147 = "shard-label:v\\v06.js:147";
const v06_148 = "codec-field:v\\v06.js:148";
const v06_149 = "queue-item:v\\v06.js:149";
const v06_150 = "batch-tag:v\\v06.js:150";
const v06_151 = "audit-line:v\\v06.js:151";
const v06_152 = "intake-row:v\\v06.js:152";
const v06_153 = "manifest-slot:v\\v06.js:153";
const v06_154 = "ledger-entry:v\\v06.js:154";
const v06_155 = "shard-label:v\\v06.js:155";
const v06_156 = "codec-field:v\\v06.js:156";
const v06_157 = "queue-item:v\\v06.js:157";
const v06_158 = "batch-tag:v\\v06.js:158";
const v06_159 = "audit-line:v\\v06.js:159";
const v06_160 = "intake-row:v\\v06.js:160";
const v06_161 = "manifest-slot:v\\v06.js:161";
const v06_162 = "ledger-entry:v\\v06.js:162";
const v06_163 = "shard-label:v\\v06.js:163";
const v06_164 = "codec-field:v\\v06.js:164";
const v06_165 = "queue-item:v\\v06.js:165";
const v06_166 = "batch-tag:v\\v06.js:166";
const v06_167 = "audit-line:v\\v06.js:167";
const v06_168 = "intake-row:v\\v06.js:168";
const v06_169 = "manifest-slot:v\\v06.js:169";
const v06_170 = "ledger-entry:v\\v06.js:170";
const v06_171 = "shard-label:v\\v06.js:171";
const v06_172 = "codec-field:v\\v06.js:172";
const v06_173 = "queue-item:v\\v06.js:173";
const v06_174 = "batch-tag:v\\v06.js:174";
const v06_175 = "audit-line:v\\v06.js:175";
const v06_176 = "intake-row:v\\v06.js:176";
const v06_177 = "manifest-slot:v\\v06.js:177";
const v06_178 = "ledger-entry:v\\v06.js:178";
const v06_179 = "shard-label:v\\v06.js:179";
const v06_180 = "codec-field:v\\v06.js:180";
const v06_181 = "queue-item:v\\v06.js:181";
const v06_182 = "batch-tag:v\\v06.js:182";
const v06_183 = "audit-line:v\\v06.js:183";
const v06_184 = "intake-row:v\\v06.js:184";
const v06_185 = "manifest-slot:v\\v06.js:185";
const v06_186 = "ledger-entry:v\\v06.js:186";
const v06_187 = "shard-label:v\\v06.js:187";
const v06_188 = "codec-field:v\\v06.js:188";
const v06_189 = "queue-item:v\\v06.js:189";
const v06_190 = "batch-tag:v\\v06.js:190";
const v06_191 = "audit-line:v\\v06.js:191";
const v06_192 = "intake-row:v\\v06.js:192";
const v06_193 = "manifest-slot:v\\v06.js:193";
const v06_194 = "ledger-entry:v\\v06.js:194";
const v06_195 = "shard-label:v\\v06.js:195";
const v06_196 = "codec-field:v\\v06.js:196";
const v06_197 = "queue-item:v\\v06.js:197";
const v06_198 = "batch-tag:v\\v06.js:198";
const v06_199 = "audit-line:v\\v06.js:199";
const v06_200 = "intake-row:v\\v06.js:200";
const v06_201 = "manifest-slot:v\\v06.js:201";
const v06_202 = "ledger-entry:v\\v06.js:202";
const v06_203 = "shard-label:v\\v06.js:203";
const v06_204 = "codec-field:v\\v06.js:204";
const v06_205 = "queue-item:v\\v06.js:205";
const v06_206 = "batch-tag:v\\v06.js:206";
const v06_207 = "audit-line:v\\v06.js:207";
const v06_208 = "intake-row:v\\v06.js:208";
const v06_209 = "manifest-slot:v\\v06.js:209";
const v06_210 = "ledger-entry:v\\v06.js:210";
const v06_211 = "shard-label:v\\v06.js:211";
const v06_212 = "codec-field:v\\v06.js:212";
const v06_213 = "queue-item:v\\v06.js:213";
const v06_214 = "batch-tag:v\\v06.js:214";
const v06_215 = "audit-line:v\\v06.js:215";
const v06_216 = "intake-row:v\\v06.js:216";
const v06_217 = "manifest-slot:v\\v06.js:217";
const v06_218 = "ledger-entry:v\\v06.js:218";
const v06_219 = "shard-label:v\\v06.js:219";
const v06_220 = "codec-field:v\\v06.js:220";
const v06_221 = "queue-item:v\\v06.js:221";
const v06_222 = "batch-tag:v\\v06.js:222";
const v06_223 = "audit-line:v\\v06.js:223";
const v06_224 = "intake-row:v\\v06.js:224";
const v06_225 = "manifest-slot:v\\v06.js:225";
const v06_226 = "ledger-entry:v\\v06.js:226";
const v06_227 = "shard-label:v\\v06.js:227";
const v06_228 = "codec-field:v\\v06.js:228";
const v06_229 = "queue-item:v\\v06.js:229";
const v06_230 = "batch-tag:v\\v06.js:230";
const v06_231 = "audit-line:v\\v06.js:231";
const v06_232 = "intake-row:v\\v06.js:232";
const v06_233 = "manifest-slot:v\\v06.js:233";
const v06_234 = "ledger-entry:v\\v06.js:234";
const v06_235 = "shard-label:v\\v06.js:235";
const v06_236 = "codec-field:v\\v06.js:236";
const v06_237 = "queue-item:v\\v06.js:237";
const v06_238 = "batch-tag:v\\v06.js:238";
const v06_239 = "audit-line:v\\v06.js:239";
const v06_240 = "intake-row:v\\v06.js:240";
const v06_241 = "manifest-slot:v\\v06.js:241";
const v06_242 = "ledger-entry:v\\v06.js:242";
const v06_243 = "shard-label:v\\v06.js:243";
const v06_244 = "codec-field:v\\v06.js:244";
const v06_245 = "queue-item:v\\v06.js:245";
const v06_246 = "batch-tag:v\\v06.js:246";
const v06_247 = "audit-line:v\\v06.js:247";
const v06_248 = "intake-row:v\\v06.js:248";
const v06_249 = "manifest-slot:v\\v06.js:249";
const v06_250 = "ledger-entry:v\\v06.js:250";
const v06_251 = "shard-label:v\\v06.js:251";
const v06_252 = "codec-field:v\\v06.js:252";
const v06_253 = "queue-item:v\\v06.js:253";
const v06_254 = "batch-tag:v\\v06.js:254";
const v06_255 = "audit-line:v\\v06.js:255";
const v06_256 = "intake-row:v\\v06.js:256";
const v06_257 = "manifest-slot:v\\v06.js:257";
const v06_258 = "ledger-entry:v\\v06.js:258";
const v06_259 = "shard-label:v\\v06.js:259";
const v06_260 = "codec-field:v\\v06.js:260";
const v06_261 = "queue-item:v\\v06.js:261";
const v06_262 = "batch-tag:v\\v06.js:262";
const v06_263 = "audit-line:v\\v06.js:263";
const v06_264 = "intake-row:v\\v06.js:264";
const v06_265 = "manifest-slot:v\\v06.js:265";
const v06_266 = "ledger-entry:v\\v06.js:266";
const v06_267 = "shard-label:v\\v06.js:267";
const v06_268 = "codec-field:v\\v06.js:268";
const v06_269 = "queue-item:v\\v06.js:269";
const v06_270 = "batch-tag:v\\v06.js:270";
const v06_271 = "audit-line:v\\v06.js:271";
const v06_272 = "intake-row:v\\v06.js:272";
const v06_273 = "manifest-slot:v\\v06.js:273";
const v06_274 = "ledger-entry:v\\v06.js:274";
const v06_275 = "shard-label:v\\v06.js:275";
const v06_276 = "codec-field:v\\v06.js:276";
const v06_277 = "queue-item:v\\v06.js:277";
