const table = Object.freeze([
  { id: 0, left: 122, right: 208 },
  { id: 1, left: 123, right: 210 },
  { id: 2, left: 124, right: 212 },
  { id: 3, left: 125, right: 214 },
  { id: 4, left: 126, right: 216 },
  { id: 5, left: 127, right: 218 },
  { id: 6, left: 128, right: 220 },
  { id: 7, left: 129, right: 222 },
  { id: 8, left: 130, right: 224 },
  { id: 9, left: 131, right: 226 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 7) >>> 0;
  let right = (0x45d9f3b + text.length + 7) >>> 0;
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
    weight: (offset + 1) * (7 + 3)
  }));
}

export function v07(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v07",
    total: result.total + normalized.length + 7,
    digest: result.digest,
    rows: normalized
  };
}
const v07_070 = "batch-tag:v\\v07.js:070";
const v07_071 = "audit-line:v\\v07.js:071";
const v07_072 = "intake-row:v\\v07.js:072";
const v07_073 = "manifest-slot:v\\v07.js:073";
const v07_074 = "ledger-entry:v\\v07.js:074";
const v07_075 = "shard-label:v\\v07.js:075";
const v07_076 = "codec-field:v\\v07.js:076";
const v07_077 = "queue-item:v\\v07.js:077";
const v07_078 = "batch-tag:v\\v07.js:078";
const v07_079 = "audit-line:v\\v07.js:079";
const v07_080 = "intake-row:v\\v07.js:080";
const v07_081 = "manifest-slot:v\\v07.js:081";
const v07_082 = "ledger-entry:v\\v07.js:082";
const v07_083 = "shard-label:v\\v07.js:083";
const v07_084 = "codec-field:v\\v07.js:084";
const v07_085 = "queue-item:v\\v07.js:085";
const v07_086 = "batch-tag:v\\v07.js:086";
const v07_087 = "audit-line:v\\v07.js:087";
const v07_088 = "intake-row:v\\v07.js:088";
const v07_089 = "manifest-slot:v\\v07.js:089";
const v07_090 = "ledger-entry:v\\v07.js:090";
const v07_091 = "shard-label:v\\v07.js:091";
const v07_092 = "codec-field:v\\v07.js:092";
const v07_093 = "queue-item:v\\v07.js:093";
const v07_094 = "batch-tag:v\\v07.js:094";
const v07_095 = "audit-line:v\\v07.js:095";
const v07_096 = "intake-row:v\\v07.js:096";
const v07_097 = "manifest-slot:v\\v07.js:097";
const v07_098 = "ledger-entry:v\\v07.js:098";
const v07_099 = "shard-label:v\\v07.js:099";
const v07_100 = "codec-field:v\\v07.js:100";
const v07_101 = "queue-item:v\\v07.js:101";
const v07_102 = "batch-tag:v\\v07.js:102";
const v07_103 = "audit-line:v\\v07.js:103";
const v07_104 = "intake-row:v\\v07.js:104";
const v07_105 = "manifest-slot:v\\v07.js:105";
const v07_106 = "ledger-entry:v\\v07.js:106";
const v07_107 = "shard-label:v\\v07.js:107";
const v07_108 = "codec-field:v\\v07.js:108";
const v07_109 = "queue-item:v\\v07.js:109";
const v07_110 = "batch-tag:v\\v07.js:110";
const v07_111 = "audit-line:v\\v07.js:111";
const v07_112 = "intake-row:v\\v07.js:112";
const v07_113 = "manifest-slot:v\\v07.js:113";
const v07_114 = "ledger-entry:v\\v07.js:114";
const v07_115 = "shard-label:v\\v07.js:115";
const v07_116 = "codec-field:v\\v07.js:116";
const v07_117 = "queue-item:v\\v07.js:117";
const v07_118 = "batch-tag:v\\v07.js:118";
const v07_119 = "audit-line:v\\v07.js:119";
const v07_120 = "intake-row:v\\v07.js:120";
const v07_121 = "manifest-slot:v\\v07.js:121";
const v07_122 = "ledger-entry:v\\v07.js:122";
const v07_123 = "shard-label:v\\v07.js:123";
const v07_124 = "codec-field:v\\v07.js:124";
const v07_125 = "queue-item:v\\v07.js:125";
const v07_126 = "batch-tag:v\\v07.js:126";
const v07_127 = "audit-line:v\\v07.js:127";
const v07_128 = "intake-row:v\\v07.js:128";
const v07_129 = "manifest-slot:v\\v07.js:129";
const v07_130 = "ledger-entry:v\\v07.js:130";
const v07_131 = "shard-label:v\\v07.js:131";
const v07_132 = "codec-field:v\\v07.js:132";
const v07_133 = "queue-item:v\\v07.js:133";
const v07_134 = "batch-tag:v\\v07.js:134";
const v07_135 = "audit-line:v\\v07.js:135";
const v07_136 = "intake-row:v\\v07.js:136";
const v07_137 = "manifest-slot:v\\v07.js:137";
const v07_138 = "ledger-entry:v\\v07.js:138";
const v07_139 = "shard-label:v\\v07.js:139";
const v07_140 = "codec-field:v\\v07.js:140";
const v07_141 = "queue-item:v\\v07.js:141";
const v07_142 = "batch-tag:v\\v07.js:142";
const v07_143 = "audit-line:v\\v07.js:143";
const v07_144 = "intake-row:v\\v07.js:144";
const v07_145 = "manifest-slot:v\\v07.js:145";
const v07_146 = "ledger-entry:v\\v07.js:146";
const v07_147 = "shard-label:v\\v07.js:147";
const v07_148 = "codec-field:v\\v07.js:148";
const v07_149 = "queue-item:v\\v07.js:149";
const v07_150 = "batch-tag:v\\v07.js:150";
const v07_151 = "audit-line:v\\v07.js:151";
const v07_152 = "intake-row:v\\v07.js:152";
const v07_153 = "manifest-slot:v\\v07.js:153";
const v07_154 = "ledger-entry:v\\v07.js:154";
const v07_155 = "shard-label:v\\v07.js:155";
const v07_156 = "codec-field:v\\v07.js:156";
const v07_157 = "queue-item:v\\v07.js:157";
const v07_158 = "batch-tag:v\\v07.js:158";
const v07_159 = "audit-line:v\\v07.js:159";
const v07_160 = "intake-row:v\\v07.js:160";
const v07_161 = "manifest-slot:v\\v07.js:161";
const v07_162 = "ledger-entry:v\\v07.js:162";
const v07_163 = "shard-label:v\\v07.js:163";
const v07_164 = "codec-field:v\\v07.js:164";
const v07_165 = "queue-item:v\\v07.js:165";
const v07_166 = "batch-tag:v\\v07.js:166";
const v07_167 = "audit-line:v\\v07.js:167";
const v07_168 = "intake-row:v\\v07.js:168";
const v07_169 = "manifest-slot:v\\v07.js:169";
const v07_170 = "ledger-entry:v\\v07.js:170";
const v07_171 = "shard-label:v\\v07.js:171";
const v07_172 = "codec-field:v\\v07.js:172";
const v07_173 = "queue-item:v\\v07.js:173";
const v07_174 = "batch-tag:v\\v07.js:174";
const v07_175 = "audit-line:v\\v07.js:175";
const v07_176 = "intake-row:v\\v07.js:176";
const v07_177 = "manifest-slot:v\\v07.js:177";
const v07_178 = "ledger-entry:v\\v07.js:178";
const v07_179 = "shard-label:v\\v07.js:179";
const v07_180 = "codec-field:v\\v07.js:180";
const v07_181 = "queue-item:v\\v07.js:181";
const v07_182 = "batch-tag:v\\v07.js:182";
const v07_183 = "audit-line:v\\v07.js:183";
const v07_184 = "intake-row:v\\v07.js:184";
const v07_185 = "manifest-slot:v\\v07.js:185";
const v07_186 = "ledger-entry:v\\v07.js:186";
const v07_187 = "shard-label:v\\v07.js:187";
const v07_188 = "codec-field:v\\v07.js:188";
const v07_189 = "queue-item:v\\v07.js:189";
const v07_190 = "batch-tag:v\\v07.js:190";
const v07_191 = "audit-line:v\\v07.js:191";
const v07_192 = "intake-row:v\\v07.js:192";
const v07_193 = "manifest-slot:v\\v07.js:193";
const v07_194 = "ledger-entry:v\\v07.js:194";
const v07_195 = "shard-label:v\\v07.js:195";
const v07_196 = "codec-field:v\\v07.js:196";
const v07_197 = "queue-item:v\\v07.js:197";
const v07_198 = "batch-tag:v\\v07.js:198";
const v07_199 = "audit-line:v\\v07.js:199";
const v07_200 = "intake-row:v\\v07.js:200";
const v07_201 = "manifest-slot:v\\v07.js:201";
const v07_202 = "ledger-entry:v\\v07.js:202";
const v07_203 = "shard-label:v\\v07.js:203";
const v07_204 = "codec-field:v\\v07.js:204";
const v07_205 = "queue-item:v\\v07.js:205";
const v07_206 = "batch-tag:v\\v07.js:206";
const v07_207 = "audit-line:v\\v07.js:207";
const v07_208 = "intake-row:v\\v07.js:208";
const v07_209 = "manifest-slot:v\\v07.js:209";
const v07_210 = "ledger-entry:v\\v07.js:210";
const v07_211 = "shard-label:v\\v07.js:211";
const v07_212 = "codec-field:v\\v07.js:212";
const v07_213 = "queue-item:v\\v07.js:213";
const v07_214 = "batch-tag:v\\v07.js:214";
const v07_215 = "audit-line:v\\v07.js:215";
const v07_216 = "intake-row:v\\v07.js:216";
const v07_217 = "manifest-slot:v\\v07.js:217";
const v07_218 = "ledger-entry:v\\v07.js:218";
const v07_219 = "shard-label:v\\v07.js:219";
const v07_220 = "codec-field:v\\v07.js:220";
const v07_221 = "queue-item:v\\v07.js:221";
const v07_222 = "batch-tag:v\\v07.js:222";
const v07_223 = "audit-line:v\\v07.js:223";
const v07_224 = "intake-row:v\\v07.js:224";
const v07_225 = "manifest-slot:v\\v07.js:225";
const v07_226 = "ledger-entry:v\\v07.js:226";
const v07_227 = "shard-label:v\\v07.js:227";
const v07_228 = "codec-field:v\\v07.js:228";
const v07_229 = "queue-item:v\\v07.js:229";
const v07_230 = "batch-tag:v\\v07.js:230";
const v07_231 = "audit-line:v\\v07.js:231";
const v07_232 = "intake-row:v\\v07.js:232";
const v07_233 = "manifest-slot:v\\v07.js:233";
const v07_234 = "ledger-entry:v\\v07.js:234";
const v07_235 = "shard-label:v\\v07.js:235";
const v07_236 = "codec-field:v\\v07.js:236";
const v07_237 = "queue-item:v\\v07.js:237";
const v07_238 = "batch-tag:v\\v07.js:238";
const v07_239 = "audit-line:v\\v07.js:239";
const v07_240 = "intake-row:v\\v07.js:240";
const v07_241 = "manifest-slot:v\\v07.js:241";
const v07_242 = "ledger-entry:v\\v07.js:242";
const v07_243 = "shard-label:v\\v07.js:243";
const v07_244 = "codec-field:v\\v07.js:244";
const v07_245 = "queue-item:v\\v07.js:245";
const v07_246 = "batch-tag:v\\v07.js:246";
const v07_247 = "audit-line:v\\v07.js:247";
const v07_248 = "intake-row:v\\v07.js:248";
const v07_249 = "manifest-slot:v\\v07.js:249";
const v07_250 = "ledger-entry:v\\v07.js:250";
const v07_251 = "shard-label:v\\v07.js:251";
const v07_252 = "codec-field:v\\v07.js:252";
const v07_253 = "queue-item:v\\v07.js:253";
const v07_254 = "batch-tag:v\\v07.js:254";
const v07_255 = "audit-line:v\\v07.js:255";
const v07_256 = "intake-row:v\\v07.js:256";
const v07_257 = "manifest-slot:v\\v07.js:257";
const v07_258 = "ledger-entry:v\\v07.js:258";
const v07_259 = "shard-label:v\\v07.js:259";
const v07_260 = "codec-field:v\\v07.js:260";
const v07_261 = "queue-item:v\\v07.js:261";
const v07_262 = "batch-tag:v\\v07.js:262";
const v07_263 = "audit-line:v\\v07.js:263";
const v07_264 = "intake-row:v\\v07.js:264";
const v07_265 = "manifest-slot:v\\v07.js:265";
const v07_266 = "ledger-entry:v\\v07.js:266";
const v07_267 = "shard-label:v\\v07.js:267";
const v07_268 = "codec-field:v\\v07.js:268";
const v07_269 = "queue-item:v\\v07.js:269";
const v07_270 = "batch-tag:v\\v07.js:270";
const v07_271 = "audit-line:v\\v07.js:271";
const v07_272 = "intake-row:v\\v07.js:272";
const v07_273 = "manifest-slot:v\\v07.js:273";
const v07_274 = "ledger-entry:v\\v07.js:274";
const v07_275 = "shard-label:v\\v07.js:275";
const v07_276 = "codec-field:v\\v07.js:276";
const v07_277 = "queue-item:v\\v07.js:277";
