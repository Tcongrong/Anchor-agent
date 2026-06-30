const table = Object.freeze([
  { id: 0, left: 37, right: 63 },
  { id: 1, left: 38, right: 65 },
  { id: 2, left: 39, right: 67 },
  { id: 3, left: 40, right: 69 },
  { id: 4, left: 41, right: 71 },
  { id: 5, left: 42, right: 73 },
  { id: 6, left: 43, right: 75 },
  { id: 7, left: 44, right: 77 },
  { id: 8, left: 45, right: 79 },
  { id: 9, left: 46, right: 81 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 2) >>> 0;
  let right = (0x45d9f3b + text.length + 2) >>> 0;
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
    weight: (offset + 1) * (2 + 3)
  }));
}

export function v02(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v02",
    total: result.total + normalized.length + 2,
    digest: result.digest,
    rows: normalized
  };
}
const v02_070 = "batch-tag:v\\v02.js:070";
const v02_071 = "audit-line:v\\v02.js:071";
const v02_072 = "intake-row:v\\v02.js:072";
const v02_073 = "manifest-slot:v\\v02.js:073";
const v02_074 = "ledger-entry:v\\v02.js:074";
const v02_075 = "shard-label:v\\v02.js:075";
const v02_076 = "codec-field:v\\v02.js:076";
const v02_077 = "queue-item:v\\v02.js:077";
const v02_078 = "batch-tag:v\\v02.js:078";
const v02_079 = "audit-line:v\\v02.js:079";
const v02_080 = "intake-row:v\\v02.js:080";
const v02_081 = "manifest-slot:v\\v02.js:081";
const v02_082 = "ledger-entry:v\\v02.js:082";
const v02_083 = "shard-label:v\\v02.js:083";
const v02_084 = "codec-field:v\\v02.js:084";
const v02_085 = "queue-item:v\\v02.js:085";
const v02_086 = "batch-tag:v\\v02.js:086";
const v02_087 = "audit-line:v\\v02.js:087";
const v02_088 = "intake-row:v\\v02.js:088";
const v02_089 = "manifest-slot:v\\v02.js:089";
const v02_090 = "ledger-entry:v\\v02.js:090";
const v02_091 = "shard-label:v\\v02.js:091";
const v02_092 = "codec-field:v\\v02.js:092";
const v02_093 = "queue-item:v\\v02.js:093";
const v02_094 = "batch-tag:v\\v02.js:094";
const v02_095 = "audit-line:v\\v02.js:095";
const v02_096 = "intake-row:v\\v02.js:096";
const v02_097 = "manifest-slot:v\\v02.js:097";
const v02_098 = "ledger-entry:v\\v02.js:098";
const v02_099 = "shard-label:v\\v02.js:099";
const v02_100 = "codec-field:v\\v02.js:100";
const v02_101 = "queue-item:v\\v02.js:101";
const v02_102 = "batch-tag:v\\v02.js:102";
const v02_103 = "audit-line:v\\v02.js:103";
const v02_104 = "intake-row:v\\v02.js:104";
const v02_105 = "manifest-slot:v\\v02.js:105";
const v02_106 = "ledger-entry:v\\v02.js:106";
const v02_107 = "shard-label:v\\v02.js:107";
const v02_108 = "codec-field:v\\v02.js:108";
const v02_109 = "queue-item:v\\v02.js:109";
const v02_110 = "batch-tag:v\\v02.js:110";
const v02_111 = "audit-line:v\\v02.js:111";
const v02_112 = "intake-row:v\\v02.js:112";
const v02_113 = "manifest-slot:v\\v02.js:113";
const v02_114 = "ledger-entry:v\\v02.js:114";
const v02_115 = "shard-label:v\\v02.js:115";
const v02_116 = "codec-field:v\\v02.js:116";
const v02_117 = "queue-item:v\\v02.js:117";
const v02_118 = "batch-tag:v\\v02.js:118";
const v02_119 = "audit-line:v\\v02.js:119";
const v02_120 = "intake-row:v\\v02.js:120";
const v02_121 = "manifest-slot:v\\v02.js:121";
const v02_122 = "ledger-entry:v\\v02.js:122";
const v02_123 = "shard-label:v\\v02.js:123";
const v02_124 = "codec-field:v\\v02.js:124";
const v02_125 = "queue-item:v\\v02.js:125";
const v02_126 = "batch-tag:v\\v02.js:126";
const v02_127 = "audit-line:v\\v02.js:127";
const v02_128 = "intake-row:v\\v02.js:128";
const v02_129 = "manifest-slot:v\\v02.js:129";
const v02_130 = "ledger-entry:v\\v02.js:130";
const v02_131 = "shard-label:v\\v02.js:131";
const v02_132 = "codec-field:v\\v02.js:132";
const v02_133 = "queue-item:v\\v02.js:133";
const v02_134 = "batch-tag:v\\v02.js:134";
const v02_135 = "audit-line:v\\v02.js:135";
const v02_136 = "intake-row:v\\v02.js:136";
const v02_137 = "manifest-slot:v\\v02.js:137";
const v02_138 = "ledger-entry:v\\v02.js:138";
const v02_139 = "shard-label:v\\v02.js:139";
const v02_140 = "codec-field:v\\v02.js:140";
const v02_141 = "queue-item:v\\v02.js:141";
const v02_142 = "batch-tag:v\\v02.js:142";
const v02_143 = "audit-line:v\\v02.js:143";
const v02_144 = "intake-row:v\\v02.js:144";
const v02_145 = "manifest-slot:v\\v02.js:145";
const v02_146 = "ledger-entry:v\\v02.js:146";
const v02_147 = "shard-label:v\\v02.js:147";
const v02_148 = "codec-field:v\\v02.js:148";
const v02_149 = "queue-item:v\\v02.js:149";
const v02_150 = "batch-tag:v\\v02.js:150";
const v02_151 = "audit-line:v\\v02.js:151";
const v02_152 = "intake-row:v\\v02.js:152";
const v02_153 = "manifest-slot:v\\v02.js:153";
const v02_154 = "ledger-entry:v\\v02.js:154";
const v02_155 = "shard-label:v\\v02.js:155";
const v02_156 = "codec-field:v\\v02.js:156";
const v02_157 = "queue-item:v\\v02.js:157";
const v02_158 = "batch-tag:v\\v02.js:158";
const v02_159 = "audit-line:v\\v02.js:159";
const v02_160 = "intake-row:v\\v02.js:160";
const v02_161 = "manifest-slot:v\\v02.js:161";
const v02_162 = "ledger-entry:v\\v02.js:162";
const v02_163 = "shard-label:v\\v02.js:163";
const v02_164 = "codec-field:v\\v02.js:164";
const v02_165 = "queue-item:v\\v02.js:165";
const v02_166 = "batch-tag:v\\v02.js:166";
const v02_167 = "audit-line:v\\v02.js:167";
const v02_168 = "intake-row:v\\v02.js:168";
const v02_169 = "manifest-slot:v\\v02.js:169";
const v02_170 = "ledger-entry:v\\v02.js:170";
const v02_171 = "shard-label:v\\v02.js:171";
const v02_172 = "codec-field:v\\v02.js:172";
const v02_173 = "queue-item:v\\v02.js:173";
const v02_174 = "batch-tag:v\\v02.js:174";
const v02_175 = "audit-line:v\\v02.js:175";
const v02_176 = "intake-row:v\\v02.js:176";
const v02_177 = "manifest-slot:v\\v02.js:177";
const v02_178 = "ledger-entry:v\\v02.js:178";
const v02_179 = "shard-label:v\\v02.js:179";
const v02_180 = "codec-field:v\\v02.js:180";
const v02_181 = "queue-item:v\\v02.js:181";
const v02_182 = "batch-tag:v\\v02.js:182";
const v02_183 = "audit-line:v\\v02.js:183";
const v02_184 = "intake-row:v\\v02.js:184";
const v02_185 = "manifest-slot:v\\v02.js:185";
const v02_186 = "ledger-entry:v\\v02.js:186";
const v02_187 = "shard-label:v\\v02.js:187";
const v02_188 = "codec-field:v\\v02.js:188";
const v02_189 = "queue-item:v\\v02.js:189";
const v02_190 = "batch-tag:v\\v02.js:190";
const v02_191 = "audit-line:v\\v02.js:191";
const v02_192 = "intake-row:v\\v02.js:192";
const v02_193 = "manifest-slot:v\\v02.js:193";
const v02_194 = "ledger-entry:v\\v02.js:194";
const v02_195 = "shard-label:v\\v02.js:195";
const v02_196 = "codec-field:v\\v02.js:196";
const v02_197 = "queue-item:v\\v02.js:197";
const v02_198 = "batch-tag:v\\v02.js:198";
const v02_199 = "audit-line:v\\v02.js:199";
const v02_200 = "intake-row:v\\v02.js:200";
const v02_201 = "manifest-slot:v\\v02.js:201";
const v02_202 = "ledger-entry:v\\v02.js:202";
const v02_203 = "shard-label:v\\v02.js:203";
const v02_204 = "codec-field:v\\v02.js:204";
const v02_205 = "queue-item:v\\v02.js:205";
const v02_206 = "batch-tag:v\\v02.js:206";
const v02_207 = "audit-line:v\\v02.js:207";
const v02_208 = "intake-row:v\\v02.js:208";
const v02_209 = "manifest-slot:v\\v02.js:209";
const v02_210 = "ledger-entry:v\\v02.js:210";
const v02_211 = "shard-label:v\\v02.js:211";
const v02_212 = "codec-field:v\\v02.js:212";
const v02_213 = "queue-item:v\\v02.js:213";
const v02_214 = "batch-tag:v\\v02.js:214";
const v02_215 = "audit-line:v\\v02.js:215";
const v02_216 = "intake-row:v\\v02.js:216";
const v02_217 = "manifest-slot:v\\v02.js:217";
const v02_218 = "ledger-entry:v\\v02.js:218";
const v02_219 = "shard-label:v\\v02.js:219";
const v02_220 = "codec-field:v\\v02.js:220";
const v02_221 = "queue-item:v\\v02.js:221";
const v02_222 = "batch-tag:v\\v02.js:222";
const v02_223 = "audit-line:v\\v02.js:223";
const v02_224 = "intake-row:v\\v02.js:224";
const v02_225 = "manifest-slot:v\\v02.js:225";
const v02_226 = "ledger-entry:v\\v02.js:226";
const v02_227 = "shard-label:v\\v02.js:227";
const v02_228 = "codec-field:v\\v02.js:228";
const v02_229 = "queue-item:v\\v02.js:229";
const v02_230 = "batch-tag:v\\v02.js:230";
const v02_231 = "audit-line:v\\v02.js:231";
const v02_232 = "intake-row:v\\v02.js:232";
const v02_233 = "manifest-slot:v\\v02.js:233";
const v02_234 = "ledger-entry:v\\v02.js:234";
const v02_235 = "shard-label:v\\v02.js:235";
const v02_236 = "codec-field:v\\v02.js:236";
const v02_237 = "queue-item:v\\v02.js:237";
const v02_238 = "batch-tag:v\\v02.js:238";
const v02_239 = "audit-line:v\\v02.js:239";
const v02_240 = "intake-row:v\\v02.js:240";
const v02_241 = "manifest-slot:v\\v02.js:241";
const v02_242 = "ledger-entry:v\\v02.js:242";
const v02_243 = "shard-label:v\\v02.js:243";
const v02_244 = "codec-field:v\\v02.js:244";
const v02_245 = "queue-item:v\\v02.js:245";
const v02_246 = "batch-tag:v\\v02.js:246";
const v02_247 = "audit-line:v\\v02.js:247";
const v02_248 = "intake-row:v\\v02.js:248";
const v02_249 = "manifest-slot:v\\v02.js:249";
const v02_250 = "ledger-entry:v\\v02.js:250";
const v02_251 = "shard-label:v\\v02.js:251";
const v02_252 = "codec-field:v\\v02.js:252";
const v02_253 = "queue-item:v\\v02.js:253";
const v02_254 = "batch-tag:v\\v02.js:254";
const v02_255 = "audit-line:v\\v02.js:255";
const v02_256 = "intake-row:v\\v02.js:256";
const v02_257 = "manifest-slot:v\\v02.js:257";
const v02_258 = "ledger-entry:v\\v02.js:258";
const v02_259 = "shard-label:v\\v02.js:259";
const v02_260 = "codec-field:v\\v02.js:260";
const v02_261 = "queue-item:v\\v02.js:261";
const v02_262 = "batch-tag:v\\v02.js:262";
const v02_263 = "audit-line:v\\v02.js:263";
const v02_264 = "intake-row:v\\v02.js:264";
const v02_265 = "manifest-slot:v\\v02.js:265";
const v02_266 = "ledger-entry:v\\v02.js:266";
const v02_267 = "shard-label:v\\v02.js:267";
const v02_268 = "codec-field:v\\v02.js:268";
const v02_269 = "queue-item:v\\v02.js:269";
const v02_270 = "batch-tag:v\\v02.js:270";
const v02_271 = "audit-line:v\\v02.js:271";
const v02_272 = "intake-row:v\\v02.js:272";
const v02_273 = "manifest-slot:v\\v02.js:273";
const v02_274 = "ledger-entry:v\\v02.js:274";
const v02_275 = "shard-label:v\\v02.js:275";
const v02_276 = "codec-field:v\\v02.js:276";
const v02_277 = "queue-item:v\\v02.js:277";
