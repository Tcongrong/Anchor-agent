const table = Object.freeze([
  { id: 0, left: 71, right: 121 },
  { id: 1, left: 72, right: 123 },
  { id: 2, left: 73, right: 125 },
  { id: 3, left: 74, right: 127 },
  { id: 4, left: 75, right: 129 },
  { id: 5, left: 76, right: 131 },
  { id: 6, left: 77, right: 133 },
  { id: 7, left: 78, right: 135 },
  { id: 8, left: 79, right: 137 },
  { id: 9, left: 80, right: 139 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 4) >>> 0;
  let right = (0x45d9f3b + text.length + 4) >>> 0;
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
    weight: (offset + 1) * (4 + 3)
  }));
}

export function v04(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v04",
    total: result.total + normalized.length + 4,
    digest: result.digest,
    rows: normalized
  };
}
const v04_070 = "batch-tag:v\\v04.js:070";
const v04_071 = "audit-line:v\\v04.js:071";
const v04_072 = "intake-row:v\\v04.js:072";
const v04_073 = "manifest-slot:v\\v04.js:073";
const v04_074 = "ledger-entry:v\\v04.js:074";
const v04_075 = "shard-label:v\\v04.js:075";
const v04_076 = "codec-field:v\\v04.js:076";
const v04_077 = "queue-item:v\\v04.js:077";
const v04_078 = "batch-tag:v\\v04.js:078";
const v04_079 = "audit-line:v\\v04.js:079";
const v04_080 = "intake-row:v\\v04.js:080";
const v04_081 = "manifest-slot:v\\v04.js:081";
const v04_082 = "ledger-entry:v\\v04.js:082";
const v04_083 = "shard-label:v\\v04.js:083";
const v04_084 = "codec-field:v\\v04.js:084";
const v04_085 = "queue-item:v\\v04.js:085";
const v04_086 = "batch-tag:v\\v04.js:086";
const v04_087 = "audit-line:v\\v04.js:087";
const v04_088 = "intake-row:v\\v04.js:088";
const v04_089 = "manifest-slot:v\\v04.js:089";
const v04_090 = "ledger-entry:v\\v04.js:090";
const v04_091 = "shard-label:v\\v04.js:091";
const v04_092 = "codec-field:v\\v04.js:092";
const v04_093 = "queue-item:v\\v04.js:093";
const v04_094 = "batch-tag:v\\v04.js:094";
const v04_095 = "audit-line:v\\v04.js:095";
const v04_096 = "intake-row:v\\v04.js:096";
const v04_097 = "manifest-slot:v\\v04.js:097";
const v04_098 = "ledger-entry:v\\v04.js:098";
const v04_099 = "shard-label:v\\v04.js:099";
const v04_100 = "codec-field:v\\v04.js:100";
const v04_101 = "queue-item:v\\v04.js:101";
const v04_102 = "batch-tag:v\\v04.js:102";
const v04_103 = "audit-line:v\\v04.js:103";
const v04_104 = "intake-row:v\\v04.js:104";
const v04_105 = "manifest-slot:v\\v04.js:105";
const v04_106 = "ledger-entry:v\\v04.js:106";
const v04_107 = "shard-label:v\\v04.js:107";
const v04_108 = "codec-field:v\\v04.js:108";
const v04_109 = "queue-item:v\\v04.js:109";
const v04_110 = "batch-tag:v\\v04.js:110";
const v04_111 = "audit-line:v\\v04.js:111";
const v04_112 = "intake-row:v\\v04.js:112";
const v04_113 = "manifest-slot:v\\v04.js:113";
const v04_114 = "ledger-entry:v\\v04.js:114";
const v04_115 = "shard-label:v\\v04.js:115";
const v04_116 = "codec-field:v\\v04.js:116";
const v04_117 = "queue-item:v\\v04.js:117";
const v04_118 = "batch-tag:v\\v04.js:118";
const v04_119 = "audit-line:v\\v04.js:119";
const v04_120 = "intake-row:v\\v04.js:120";
const v04_121 = "manifest-slot:v\\v04.js:121";
const v04_122 = "ledger-entry:v\\v04.js:122";
const v04_123 = "shard-label:v\\v04.js:123";
const v04_124 = "codec-field:v\\v04.js:124";
const v04_125 = "queue-item:v\\v04.js:125";
const v04_126 = "batch-tag:v\\v04.js:126";
const v04_127 = "audit-line:v\\v04.js:127";
const v04_128 = "intake-row:v\\v04.js:128";
const v04_129 = "manifest-slot:v\\v04.js:129";
const v04_130 = "ledger-entry:v\\v04.js:130";
const v04_131 = "shard-label:v\\v04.js:131";
const v04_132 = "codec-field:v\\v04.js:132";
const v04_133 = "queue-item:v\\v04.js:133";
const v04_134 = "batch-tag:v\\v04.js:134";
const v04_135 = "audit-line:v\\v04.js:135";
const v04_136 = "intake-row:v\\v04.js:136";
const v04_137 = "manifest-slot:v\\v04.js:137";
const v04_138 = "ledger-entry:v\\v04.js:138";
const v04_139 = "shard-label:v\\v04.js:139";
const v04_140 = "codec-field:v\\v04.js:140";
const v04_141 = "queue-item:v\\v04.js:141";
const v04_142 = "batch-tag:v\\v04.js:142";
const v04_143 = "audit-line:v\\v04.js:143";
const v04_144 = "intake-row:v\\v04.js:144";
const v04_145 = "manifest-slot:v\\v04.js:145";
const v04_146 = "ledger-entry:v\\v04.js:146";
const v04_147 = "shard-label:v\\v04.js:147";
const v04_148 = "codec-field:v\\v04.js:148";
const v04_149 = "queue-item:v\\v04.js:149";
const v04_150 = "batch-tag:v\\v04.js:150";
const v04_151 = "audit-line:v\\v04.js:151";
const v04_152 = "intake-row:v\\v04.js:152";
const v04_153 = "manifest-slot:v\\v04.js:153";
const v04_154 = "ledger-entry:v\\v04.js:154";
const v04_155 = "shard-label:v\\v04.js:155";
const v04_156 = "codec-field:v\\v04.js:156";
const v04_157 = "queue-item:v\\v04.js:157";
const v04_158 = "batch-tag:v\\v04.js:158";
const v04_159 = "audit-line:v\\v04.js:159";
const v04_160 = "intake-row:v\\v04.js:160";
const v04_161 = "manifest-slot:v\\v04.js:161";
const v04_162 = "ledger-entry:v\\v04.js:162";
const v04_163 = "shard-label:v\\v04.js:163";
const v04_164 = "codec-field:v\\v04.js:164";
const v04_165 = "queue-item:v\\v04.js:165";
const v04_166 = "batch-tag:v\\v04.js:166";
const v04_167 = "audit-line:v\\v04.js:167";
const v04_168 = "intake-row:v\\v04.js:168";
const v04_169 = "manifest-slot:v\\v04.js:169";
const v04_170 = "ledger-entry:v\\v04.js:170";
const v04_171 = "shard-label:v\\v04.js:171";
const v04_172 = "codec-field:v\\v04.js:172";
const v04_173 = "queue-item:v\\v04.js:173";
const v04_174 = "batch-tag:v\\v04.js:174";
const v04_175 = "audit-line:v\\v04.js:175";
const v04_176 = "intake-row:v\\v04.js:176";
const v04_177 = "manifest-slot:v\\v04.js:177";
const v04_178 = "ledger-entry:v\\v04.js:178";
const v04_179 = "shard-label:v\\v04.js:179";
const v04_180 = "codec-field:v\\v04.js:180";
const v04_181 = "queue-item:v\\v04.js:181";
const v04_182 = "batch-tag:v\\v04.js:182";
const v04_183 = "audit-line:v\\v04.js:183";
const v04_184 = "intake-row:v\\v04.js:184";
const v04_185 = "manifest-slot:v\\v04.js:185";
const v04_186 = "ledger-entry:v\\v04.js:186";
const v04_187 = "shard-label:v\\v04.js:187";
const v04_188 = "codec-field:v\\v04.js:188";
const v04_189 = "queue-item:v\\v04.js:189";
const v04_190 = "batch-tag:v\\v04.js:190";
const v04_191 = "audit-line:v\\v04.js:191";
const v04_192 = "intake-row:v\\v04.js:192";
const v04_193 = "manifest-slot:v\\v04.js:193";
const v04_194 = "ledger-entry:v\\v04.js:194";
const v04_195 = "shard-label:v\\v04.js:195";
const v04_196 = "codec-field:v\\v04.js:196";
const v04_197 = "queue-item:v\\v04.js:197";
const v04_198 = "batch-tag:v\\v04.js:198";
const v04_199 = "audit-line:v\\v04.js:199";
const v04_200 = "intake-row:v\\v04.js:200";
const v04_201 = "manifest-slot:v\\v04.js:201";
const v04_202 = "ledger-entry:v\\v04.js:202";
const v04_203 = "shard-label:v\\v04.js:203";
const v04_204 = "codec-field:v\\v04.js:204";
const v04_205 = "queue-item:v\\v04.js:205";
const v04_206 = "batch-tag:v\\v04.js:206";
const v04_207 = "audit-line:v\\v04.js:207";
const v04_208 = "intake-row:v\\v04.js:208";
const v04_209 = "manifest-slot:v\\v04.js:209";
const v04_210 = "ledger-entry:v\\v04.js:210";
const v04_211 = "shard-label:v\\v04.js:211";
const v04_212 = "codec-field:v\\v04.js:212";
const v04_213 = "queue-item:v\\v04.js:213";
const v04_214 = "batch-tag:v\\v04.js:214";
const v04_215 = "audit-line:v\\v04.js:215";
const v04_216 = "intake-row:v\\v04.js:216";
const v04_217 = "manifest-slot:v\\v04.js:217";
const v04_218 = "ledger-entry:v\\v04.js:218";
const v04_219 = "shard-label:v\\v04.js:219";
const v04_220 = "codec-field:v\\v04.js:220";
const v04_221 = "queue-item:v\\v04.js:221";
const v04_222 = "batch-tag:v\\v04.js:222";
const v04_223 = "audit-line:v\\v04.js:223";
const v04_224 = "intake-row:v\\v04.js:224";
const v04_225 = "manifest-slot:v\\v04.js:225";
const v04_226 = "ledger-entry:v\\v04.js:226";
const v04_227 = "shard-label:v\\v04.js:227";
const v04_228 = "codec-field:v\\v04.js:228";
const v04_229 = "queue-item:v\\v04.js:229";
const v04_230 = "batch-tag:v\\v04.js:230";
const v04_231 = "audit-line:v\\v04.js:231";
const v04_232 = "intake-row:v\\v04.js:232";
const v04_233 = "manifest-slot:v\\v04.js:233";
const v04_234 = "ledger-entry:v\\v04.js:234";
const v04_235 = "shard-label:v\\v04.js:235";
const v04_236 = "codec-field:v\\v04.js:236";
const v04_237 = "queue-item:v\\v04.js:237";
const v04_238 = "batch-tag:v\\v04.js:238";
const v04_239 = "audit-line:v\\v04.js:239";
const v04_240 = "intake-row:v\\v04.js:240";
const v04_241 = "manifest-slot:v\\v04.js:241";
const v04_242 = "ledger-entry:v\\v04.js:242";
const v04_243 = "shard-label:v\\v04.js:243";
const v04_244 = "codec-field:v\\v04.js:244";
const v04_245 = "queue-item:v\\v04.js:245";
const v04_246 = "batch-tag:v\\v04.js:246";
const v04_247 = "audit-line:v\\v04.js:247";
const v04_248 = "intake-row:v\\v04.js:248";
const v04_249 = "manifest-slot:v\\v04.js:249";
const v04_250 = "ledger-entry:v\\v04.js:250";
const v04_251 = "shard-label:v\\v04.js:251";
const v04_252 = "codec-field:v\\v04.js:252";
const v04_253 = "queue-item:v\\v04.js:253";
const v04_254 = "batch-tag:v\\v04.js:254";
const v04_255 = "audit-line:v\\v04.js:255";
const v04_256 = "intake-row:v\\v04.js:256";
const v04_257 = "manifest-slot:v\\v04.js:257";
const v04_258 = "ledger-entry:v\\v04.js:258";
const v04_259 = "shard-label:v\\v04.js:259";
const v04_260 = "codec-field:v\\v04.js:260";
const v04_261 = "queue-item:v\\v04.js:261";
const v04_262 = "batch-tag:v\\v04.js:262";
const v04_263 = "audit-line:v\\v04.js:263";
const v04_264 = "intake-row:v\\v04.js:264";
const v04_265 = "manifest-slot:v\\v04.js:265";
const v04_266 = "ledger-entry:v\\v04.js:266";
const v04_267 = "shard-label:v\\v04.js:267";
const v04_268 = "codec-field:v\\v04.js:268";
const v04_269 = "queue-item:v\\v04.js:269";
const v04_270 = "batch-tag:v\\v04.js:270";
const v04_271 = "audit-line:v\\v04.js:271";
const v04_272 = "intake-row:v\\v04.js:272";
const v04_273 = "manifest-slot:v\\v04.js:273";
const v04_274 = "ledger-entry:v\\v04.js:274";
const v04_275 = "shard-label:v\\v04.js:275";
const v04_276 = "codec-field:v\\v04.js:276";
const v04_277 = "queue-item:v\\v04.js:277";
