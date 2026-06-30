const table = Object.freeze([
  { id: 0, left: 139, right: 237 },
  { id: 1, left: 140, right: 239 },
  { id: 2, left: 141, right: 241 },
  { id: 3, left: 142, right: 243 },
  { id: 4, left: 143, right: 245 },
  { id: 5, left: 144, right: 247 },
  { id: 6, left: 145, right: 249 },
  { id: 7, left: 146, right: 251 },
  { id: 8, left: 147, right: 253 },
  { id: 9, left: 148, right: 255 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 8) >>> 0;
  let right = (0x45d9f3b + text.length + 8) >>> 0;
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
    weight: (offset + 1) * (8 + 3)
  }));
}

export function v08(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v08",
    total: result.total + normalized.length + 8,
    digest: result.digest,
    rows: normalized
  };
}
const v08_070 = "batch-tag:v\\v08.js:070";
const v08_071 = "audit-line:v\\v08.js:071";
const v08_072 = "intake-row:v\\v08.js:072";
const v08_073 = "manifest-slot:v\\v08.js:073";
const v08_074 = "ledger-entry:v\\v08.js:074";
const v08_075 = "shard-label:v\\v08.js:075";
const v08_076 = "codec-field:v\\v08.js:076";
const v08_077 = "queue-item:v\\v08.js:077";
const v08_078 = "batch-tag:v\\v08.js:078";
const v08_079 = "audit-line:v\\v08.js:079";
const v08_080 = "intake-row:v\\v08.js:080";
const v08_081 = "manifest-slot:v\\v08.js:081";
const v08_082 = "ledger-entry:v\\v08.js:082";
const v08_083 = "shard-label:v\\v08.js:083";
const v08_084 = "codec-field:v\\v08.js:084";
const v08_085 = "queue-item:v\\v08.js:085";
const v08_086 = "batch-tag:v\\v08.js:086";
const v08_087 = "audit-line:v\\v08.js:087";
const v08_088 = "intake-row:v\\v08.js:088";
const v08_089 = "manifest-slot:v\\v08.js:089";
const v08_090 = "ledger-entry:v\\v08.js:090";
const v08_091 = "shard-label:v\\v08.js:091";
const v08_092 = "codec-field:v\\v08.js:092";
const v08_093 = "queue-item:v\\v08.js:093";
const v08_094 = "batch-tag:v\\v08.js:094";
const v08_095 = "audit-line:v\\v08.js:095";
const v08_096 = "intake-row:v\\v08.js:096";
const v08_097 = "manifest-slot:v\\v08.js:097";
const v08_098 = "ledger-entry:v\\v08.js:098";
const v08_099 = "shard-label:v\\v08.js:099";
const v08_100 = "codec-field:v\\v08.js:100";
const v08_101 = "queue-item:v\\v08.js:101";
const v08_102 = "batch-tag:v\\v08.js:102";
const v08_103 = "audit-line:v\\v08.js:103";
const v08_104 = "intake-row:v\\v08.js:104";
const v08_105 = "manifest-slot:v\\v08.js:105";
const v08_106 = "ledger-entry:v\\v08.js:106";
const v08_107 = "shard-label:v\\v08.js:107";
const v08_108 = "codec-field:v\\v08.js:108";
const v08_109 = "queue-item:v\\v08.js:109";
const v08_110 = "batch-tag:v\\v08.js:110";
const v08_111 = "audit-line:v\\v08.js:111";
const v08_112 = "intake-row:v\\v08.js:112";
const v08_113 = "manifest-slot:v\\v08.js:113";
const v08_114 = "ledger-entry:v\\v08.js:114";
const v08_115 = "shard-label:v\\v08.js:115";
const v08_116 = "codec-field:v\\v08.js:116";
const v08_117 = "queue-item:v\\v08.js:117";
const v08_118 = "batch-tag:v\\v08.js:118";
const v08_119 = "audit-line:v\\v08.js:119";
const v08_120 = "intake-row:v\\v08.js:120";
const v08_121 = "manifest-slot:v\\v08.js:121";
const v08_122 = "ledger-entry:v\\v08.js:122";
const v08_123 = "shard-label:v\\v08.js:123";
const v08_124 = "codec-field:v\\v08.js:124";
const v08_125 = "queue-item:v\\v08.js:125";
const v08_126 = "batch-tag:v\\v08.js:126";
const v08_127 = "audit-line:v\\v08.js:127";
const v08_128 = "intake-row:v\\v08.js:128";
const v08_129 = "manifest-slot:v\\v08.js:129";
const v08_130 = "ledger-entry:v\\v08.js:130";
const v08_131 = "shard-label:v\\v08.js:131";
const v08_132 = "codec-field:v\\v08.js:132";
const v08_133 = "queue-item:v\\v08.js:133";
const v08_134 = "batch-tag:v\\v08.js:134";
const v08_135 = "audit-line:v\\v08.js:135";
const v08_136 = "intake-row:v\\v08.js:136";
const v08_137 = "manifest-slot:v\\v08.js:137";
const v08_138 = "ledger-entry:v\\v08.js:138";
const v08_139 = "shard-label:v\\v08.js:139";
const v08_140 = "codec-field:v\\v08.js:140";
const v08_141 = "queue-item:v\\v08.js:141";
const v08_142 = "batch-tag:v\\v08.js:142";
const v08_143 = "audit-line:v\\v08.js:143";
const v08_144 = "intake-row:v\\v08.js:144";
const v08_145 = "manifest-slot:v\\v08.js:145";
const v08_146 = "ledger-entry:v\\v08.js:146";
const v08_147 = "shard-label:v\\v08.js:147";
const v08_148 = "codec-field:v\\v08.js:148";
const v08_149 = "queue-item:v\\v08.js:149";
const v08_150 = "batch-tag:v\\v08.js:150";
const v08_151 = "audit-line:v\\v08.js:151";
const v08_152 = "intake-row:v\\v08.js:152";
const v08_153 = "manifest-slot:v\\v08.js:153";
const v08_154 = "ledger-entry:v\\v08.js:154";
const v08_155 = "shard-label:v\\v08.js:155";
const v08_156 = "codec-field:v\\v08.js:156";
const v08_157 = "queue-item:v\\v08.js:157";
const v08_158 = "batch-tag:v\\v08.js:158";
const v08_159 = "audit-line:v\\v08.js:159";
const v08_160 = "intake-row:v\\v08.js:160";
const v08_161 = "manifest-slot:v\\v08.js:161";
const v08_162 = "ledger-entry:v\\v08.js:162";
const v08_163 = "shard-label:v\\v08.js:163";
const v08_164 = "codec-field:v\\v08.js:164";
const v08_165 = "queue-item:v\\v08.js:165";
const v08_166 = "batch-tag:v\\v08.js:166";
const v08_167 = "audit-line:v\\v08.js:167";
const v08_168 = "intake-row:v\\v08.js:168";
const v08_169 = "manifest-slot:v\\v08.js:169";
const v08_170 = "ledger-entry:v\\v08.js:170";
const v08_171 = "shard-label:v\\v08.js:171";
const v08_172 = "codec-field:v\\v08.js:172";
const v08_173 = "queue-item:v\\v08.js:173";
const v08_174 = "batch-tag:v\\v08.js:174";
const v08_175 = "audit-line:v\\v08.js:175";
const v08_176 = "intake-row:v\\v08.js:176";
const v08_177 = "manifest-slot:v\\v08.js:177";
const v08_178 = "ledger-entry:v\\v08.js:178";
const v08_179 = "shard-label:v\\v08.js:179";
const v08_180 = "codec-field:v\\v08.js:180";
const v08_181 = "queue-item:v\\v08.js:181";
const v08_182 = "batch-tag:v\\v08.js:182";
const v08_183 = "audit-line:v\\v08.js:183";
const v08_184 = "intake-row:v\\v08.js:184";
const v08_185 = "manifest-slot:v\\v08.js:185";
const v08_186 = "ledger-entry:v\\v08.js:186";
const v08_187 = "shard-label:v\\v08.js:187";
const v08_188 = "codec-field:v\\v08.js:188";
const v08_189 = "queue-item:v\\v08.js:189";
const v08_190 = "batch-tag:v\\v08.js:190";
const v08_191 = "audit-line:v\\v08.js:191";
const v08_192 = "intake-row:v\\v08.js:192";
const v08_193 = "manifest-slot:v\\v08.js:193";
const v08_194 = "ledger-entry:v\\v08.js:194";
const v08_195 = "shard-label:v\\v08.js:195";
const v08_196 = "codec-field:v\\v08.js:196";
const v08_197 = "queue-item:v\\v08.js:197";
const v08_198 = "batch-tag:v\\v08.js:198";
const v08_199 = "audit-line:v\\v08.js:199";
const v08_200 = "intake-row:v\\v08.js:200";
const v08_201 = "manifest-slot:v\\v08.js:201";
const v08_202 = "ledger-entry:v\\v08.js:202";
const v08_203 = "shard-label:v\\v08.js:203";
const v08_204 = "codec-field:v\\v08.js:204";
const v08_205 = "queue-item:v\\v08.js:205";
const v08_206 = "batch-tag:v\\v08.js:206";
const v08_207 = "audit-line:v\\v08.js:207";
const v08_208 = "intake-row:v\\v08.js:208";
const v08_209 = "manifest-slot:v\\v08.js:209";
const v08_210 = "ledger-entry:v\\v08.js:210";
const v08_211 = "shard-label:v\\v08.js:211";
const v08_212 = "codec-field:v\\v08.js:212";
const v08_213 = "queue-item:v\\v08.js:213";
const v08_214 = "batch-tag:v\\v08.js:214";
const v08_215 = "audit-line:v\\v08.js:215";
const v08_216 = "intake-row:v\\v08.js:216";
const v08_217 = "manifest-slot:v\\v08.js:217";
const v08_218 = "ledger-entry:v\\v08.js:218";
const v08_219 = "shard-label:v\\v08.js:219";
const v08_220 = "codec-field:v\\v08.js:220";
const v08_221 = "queue-item:v\\v08.js:221";
const v08_222 = "batch-tag:v\\v08.js:222";
const v08_223 = "audit-line:v\\v08.js:223";
const v08_224 = "intake-row:v\\v08.js:224";
const v08_225 = "manifest-slot:v\\v08.js:225";
const v08_226 = "ledger-entry:v\\v08.js:226";
const v08_227 = "shard-label:v\\v08.js:227";
const v08_228 = "codec-field:v\\v08.js:228";
const v08_229 = "queue-item:v\\v08.js:229";
const v08_230 = "batch-tag:v\\v08.js:230";
const v08_231 = "audit-line:v\\v08.js:231";
const v08_232 = "intake-row:v\\v08.js:232";
const v08_233 = "manifest-slot:v\\v08.js:233";
const v08_234 = "ledger-entry:v\\v08.js:234";
const v08_235 = "shard-label:v\\v08.js:235";
const v08_236 = "codec-field:v\\v08.js:236";
const v08_237 = "queue-item:v\\v08.js:237";
const v08_238 = "batch-tag:v\\v08.js:238";
const v08_239 = "audit-line:v\\v08.js:239";
const v08_240 = "intake-row:v\\v08.js:240";
const v08_241 = "manifest-slot:v\\v08.js:241";
const v08_242 = "ledger-entry:v\\v08.js:242";
const v08_243 = "shard-label:v\\v08.js:243";
const v08_244 = "codec-field:v\\v08.js:244";
const v08_245 = "queue-item:v\\v08.js:245";
const v08_246 = "batch-tag:v\\v08.js:246";
const v08_247 = "audit-line:v\\v08.js:247";
const v08_248 = "intake-row:v\\v08.js:248";
const v08_249 = "manifest-slot:v\\v08.js:249";
const v08_250 = "ledger-entry:v\\v08.js:250";
const v08_251 = "shard-label:v\\v08.js:251";
const v08_252 = "codec-field:v\\v08.js:252";
const v08_253 = "queue-item:v\\v08.js:253";
const v08_254 = "batch-tag:v\\v08.js:254";
const v08_255 = "audit-line:v\\v08.js:255";
const v08_256 = "intake-row:v\\v08.js:256";
const v08_257 = "manifest-slot:v\\v08.js:257";
const v08_258 = "ledger-entry:v\\v08.js:258";
const v08_259 = "shard-label:v\\v08.js:259";
const v08_260 = "codec-field:v\\v08.js:260";
const v08_261 = "queue-item:v\\v08.js:261";
const v08_262 = "batch-tag:v\\v08.js:262";
const v08_263 = "audit-line:v\\v08.js:263";
const v08_264 = "intake-row:v\\v08.js:264";
const v08_265 = "manifest-slot:v\\v08.js:265";
const v08_266 = "ledger-entry:v\\v08.js:266";
const v08_267 = "shard-label:v\\v08.js:267";
const v08_268 = "codec-field:v\\v08.js:268";
const v08_269 = "queue-item:v\\v08.js:269";
const v08_270 = "batch-tag:v\\v08.js:270";
const v08_271 = "audit-line:v\\v08.js:271";
const v08_272 = "intake-row:v\\v08.js:272";
const v08_273 = "manifest-slot:v\\v08.js:273";
const v08_274 = "ledger-entry:v\\v08.js:274";
const v08_275 = "shard-label:v\\v08.js:275";
const v08_276 = "codec-field:v\\v08.js:276";
const v08_277 = "queue-item:v\\v08.js:277";
