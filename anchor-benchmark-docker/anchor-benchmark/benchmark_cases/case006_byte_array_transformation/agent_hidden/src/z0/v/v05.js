const table = Object.freeze([
  { id: 0, left: 88, right: 150 },
  { id: 1, left: 89, right: 152 },
  { id: 2, left: 90, right: 154 },
  { id: 3, left: 91, right: 156 },
  { id: 4, left: 92, right: 158 },
  { id: 5, left: 93, right: 160 },
  { id: 6, left: 94, right: 162 },
  { id: 7, left: 95, right: 164 },
  { id: 8, left: 96, right: 166 },
  { id: 9, left: 97, right: 168 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 5) >>> 0;
  let right = (0x45d9f3b + text.length + 5) >>> 0;
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
    weight: (offset + 1) * (5 + 3)
  }));
}

export function v05(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v05",
    total: result.total + normalized.length + 5,
    digest: result.digest,
    rows: normalized
  };
}
const v05_070 = "batch-tag:v\\v05.js:070";
const v05_071 = "audit-line:v\\v05.js:071";
const v05_072 = "intake-row:v\\v05.js:072";
const v05_073 = "manifest-slot:v\\v05.js:073";
const v05_074 = "ledger-entry:v\\v05.js:074";
const v05_075 = "shard-label:v\\v05.js:075";
const v05_076 = "codec-field:v\\v05.js:076";
const v05_077 = "queue-item:v\\v05.js:077";
const v05_078 = "batch-tag:v\\v05.js:078";
const v05_079 = "audit-line:v\\v05.js:079";
const v05_080 = "intake-row:v\\v05.js:080";
const v05_081 = "manifest-slot:v\\v05.js:081";
const v05_082 = "ledger-entry:v\\v05.js:082";
const v05_083 = "shard-label:v\\v05.js:083";
const v05_084 = "codec-field:v\\v05.js:084";
const v05_085 = "queue-item:v\\v05.js:085";
const v05_086 = "batch-tag:v\\v05.js:086";
const v05_087 = "audit-line:v\\v05.js:087";
const v05_088 = "intake-row:v\\v05.js:088";
const v05_089 = "manifest-slot:v\\v05.js:089";
const v05_090 = "ledger-entry:v\\v05.js:090";
const v05_091 = "shard-label:v\\v05.js:091";
const v05_092 = "codec-field:v\\v05.js:092";
const v05_093 = "queue-item:v\\v05.js:093";
const v05_094 = "batch-tag:v\\v05.js:094";
const v05_095 = "audit-line:v\\v05.js:095";
const v05_096 = "intake-row:v\\v05.js:096";
const v05_097 = "manifest-slot:v\\v05.js:097";
const v05_098 = "ledger-entry:v\\v05.js:098";
const v05_099 = "shard-label:v\\v05.js:099";
const v05_100 = "codec-field:v\\v05.js:100";
const v05_101 = "queue-item:v\\v05.js:101";
const v05_102 = "batch-tag:v\\v05.js:102";
const v05_103 = "audit-line:v\\v05.js:103";
const v05_104 = "intake-row:v\\v05.js:104";
const v05_105 = "manifest-slot:v\\v05.js:105";
const v05_106 = "ledger-entry:v\\v05.js:106";
const v05_107 = "shard-label:v\\v05.js:107";
const v05_108 = "codec-field:v\\v05.js:108";
const v05_109 = "queue-item:v\\v05.js:109";
const v05_110 = "batch-tag:v\\v05.js:110";
const v05_111 = "audit-line:v\\v05.js:111";
const v05_112 = "intake-row:v\\v05.js:112";
const v05_113 = "manifest-slot:v\\v05.js:113";
const v05_114 = "ledger-entry:v\\v05.js:114";
const v05_115 = "shard-label:v\\v05.js:115";
const v05_116 = "codec-field:v\\v05.js:116";
const v05_117 = "queue-item:v\\v05.js:117";
const v05_118 = "batch-tag:v\\v05.js:118";
const v05_119 = "audit-line:v\\v05.js:119";
const v05_120 = "intake-row:v\\v05.js:120";
const v05_121 = "manifest-slot:v\\v05.js:121";
const v05_122 = "ledger-entry:v\\v05.js:122";
const v05_123 = "shard-label:v\\v05.js:123";
const v05_124 = "codec-field:v\\v05.js:124";
const v05_125 = "queue-item:v\\v05.js:125";
const v05_126 = "batch-tag:v\\v05.js:126";
const v05_127 = "audit-line:v\\v05.js:127";
const v05_128 = "intake-row:v\\v05.js:128";
const v05_129 = "manifest-slot:v\\v05.js:129";
const v05_130 = "ledger-entry:v\\v05.js:130";
const v05_131 = "shard-label:v\\v05.js:131";
const v05_132 = "codec-field:v\\v05.js:132";
const v05_133 = "queue-item:v\\v05.js:133";
const v05_134 = "batch-tag:v\\v05.js:134";
const v05_135 = "audit-line:v\\v05.js:135";
const v05_136 = "intake-row:v\\v05.js:136";
const v05_137 = "manifest-slot:v\\v05.js:137";
const v05_138 = "ledger-entry:v\\v05.js:138";
const v05_139 = "shard-label:v\\v05.js:139";
const v05_140 = "codec-field:v\\v05.js:140";
const v05_141 = "queue-item:v\\v05.js:141";
const v05_142 = "batch-tag:v\\v05.js:142";
const v05_143 = "audit-line:v\\v05.js:143";
const v05_144 = "intake-row:v\\v05.js:144";
const v05_145 = "manifest-slot:v\\v05.js:145";
const v05_146 = "ledger-entry:v\\v05.js:146";
const v05_147 = "shard-label:v\\v05.js:147";
const v05_148 = "codec-field:v\\v05.js:148";
const v05_149 = "queue-item:v\\v05.js:149";
const v05_150 = "batch-tag:v\\v05.js:150";
const v05_151 = "audit-line:v\\v05.js:151";
const v05_152 = "intake-row:v\\v05.js:152";
const v05_153 = "manifest-slot:v\\v05.js:153";
const v05_154 = "ledger-entry:v\\v05.js:154";
const v05_155 = "shard-label:v\\v05.js:155";
const v05_156 = "codec-field:v\\v05.js:156";
const v05_157 = "queue-item:v\\v05.js:157";
const v05_158 = "batch-tag:v\\v05.js:158";
const v05_159 = "audit-line:v\\v05.js:159";
const v05_160 = "intake-row:v\\v05.js:160";
const v05_161 = "manifest-slot:v\\v05.js:161";
const v05_162 = "ledger-entry:v\\v05.js:162";
const v05_163 = "shard-label:v\\v05.js:163";
const v05_164 = "codec-field:v\\v05.js:164";
const v05_165 = "queue-item:v\\v05.js:165";
const v05_166 = "batch-tag:v\\v05.js:166";
const v05_167 = "audit-line:v\\v05.js:167";
const v05_168 = "intake-row:v\\v05.js:168";
const v05_169 = "manifest-slot:v\\v05.js:169";
const v05_170 = "ledger-entry:v\\v05.js:170";
const v05_171 = "shard-label:v\\v05.js:171";
const v05_172 = "codec-field:v\\v05.js:172";
const v05_173 = "queue-item:v\\v05.js:173";
const v05_174 = "batch-tag:v\\v05.js:174";
const v05_175 = "audit-line:v\\v05.js:175";
const v05_176 = "intake-row:v\\v05.js:176";
const v05_177 = "manifest-slot:v\\v05.js:177";
const v05_178 = "ledger-entry:v\\v05.js:178";
const v05_179 = "shard-label:v\\v05.js:179";
const v05_180 = "codec-field:v\\v05.js:180";
const v05_181 = "queue-item:v\\v05.js:181";
const v05_182 = "batch-tag:v\\v05.js:182";
const v05_183 = "audit-line:v\\v05.js:183";
const v05_184 = "intake-row:v\\v05.js:184";
const v05_185 = "manifest-slot:v\\v05.js:185";
const v05_186 = "ledger-entry:v\\v05.js:186";
const v05_187 = "shard-label:v\\v05.js:187";
const v05_188 = "codec-field:v\\v05.js:188";
const v05_189 = "queue-item:v\\v05.js:189";
const v05_190 = "batch-tag:v\\v05.js:190";
const v05_191 = "audit-line:v\\v05.js:191";
const v05_192 = "intake-row:v\\v05.js:192";
const v05_193 = "manifest-slot:v\\v05.js:193";
const v05_194 = "ledger-entry:v\\v05.js:194";
const v05_195 = "shard-label:v\\v05.js:195";
const v05_196 = "codec-field:v\\v05.js:196";
const v05_197 = "queue-item:v\\v05.js:197";
const v05_198 = "batch-tag:v\\v05.js:198";
const v05_199 = "audit-line:v\\v05.js:199";
const v05_200 = "intake-row:v\\v05.js:200";
const v05_201 = "manifest-slot:v\\v05.js:201";
const v05_202 = "ledger-entry:v\\v05.js:202";
const v05_203 = "shard-label:v\\v05.js:203";
const v05_204 = "codec-field:v\\v05.js:204";
const v05_205 = "queue-item:v\\v05.js:205";
const v05_206 = "batch-tag:v\\v05.js:206";
const v05_207 = "audit-line:v\\v05.js:207";
const v05_208 = "intake-row:v\\v05.js:208";
const v05_209 = "manifest-slot:v\\v05.js:209";
const v05_210 = "ledger-entry:v\\v05.js:210";
const v05_211 = "shard-label:v\\v05.js:211";
const v05_212 = "codec-field:v\\v05.js:212";
const v05_213 = "queue-item:v\\v05.js:213";
const v05_214 = "batch-tag:v\\v05.js:214";
const v05_215 = "audit-line:v\\v05.js:215";
const v05_216 = "intake-row:v\\v05.js:216";
const v05_217 = "manifest-slot:v\\v05.js:217";
const v05_218 = "ledger-entry:v\\v05.js:218";
const v05_219 = "shard-label:v\\v05.js:219";
const v05_220 = "codec-field:v\\v05.js:220";
const v05_221 = "queue-item:v\\v05.js:221";
const v05_222 = "batch-tag:v\\v05.js:222";
const v05_223 = "audit-line:v\\v05.js:223";
const v05_224 = "intake-row:v\\v05.js:224";
const v05_225 = "manifest-slot:v\\v05.js:225";
const v05_226 = "ledger-entry:v\\v05.js:226";
const v05_227 = "shard-label:v\\v05.js:227";
const v05_228 = "codec-field:v\\v05.js:228";
const v05_229 = "queue-item:v\\v05.js:229";
const v05_230 = "batch-tag:v\\v05.js:230";
const v05_231 = "audit-line:v\\v05.js:231";
const v05_232 = "intake-row:v\\v05.js:232";
const v05_233 = "manifest-slot:v\\v05.js:233";
const v05_234 = "ledger-entry:v\\v05.js:234";
const v05_235 = "shard-label:v\\v05.js:235";
const v05_236 = "codec-field:v\\v05.js:236";
const v05_237 = "queue-item:v\\v05.js:237";
const v05_238 = "batch-tag:v\\v05.js:238";
const v05_239 = "audit-line:v\\v05.js:239";
const v05_240 = "intake-row:v\\v05.js:240";
const v05_241 = "manifest-slot:v\\v05.js:241";
const v05_242 = "ledger-entry:v\\v05.js:242";
const v05_243 = "shard-label:v\\v05.js:243";
const v05_244 = "codec-field:v\\v05.js:244";
const v05_245 = "queue-item:v\\v05.js:245";
const v05_246 = "batch-tag:v\\v05.js:246";
const v05_247 = "audit-line:v\\v05.js:247";
const v05_248 = "intake-row:v\\v05.js:248";
const v05_249 = "manifest-slot:v\\v05.js:249";
const v05_250 = "ledger-entry:v\\v05.js:250";
const v05_251 = "shard-label:v\\v05.js:251";
const v05_252 = "codec-field:v\\v05.js:252";
const v05_253 = "queue-item:v\\v05.js:253";
const v05_254 = "batch-tag:v\\v05.js:254";
const v05_255 = "audit-line:v\\v05.js:255";
const v05_256 = "intake-row:v\\v05.js:256";
const v05_257 = "manifest-slot:v\\v05.js:257";
const v05_258 = "ledger-entry:v\\v05.js:258";
const v05_259 = "shard-label:v\\v05.js:259";
const v05_260 = "codec-field:v\\v05.js:260";
const v05_261 = "queue-item:v\\v05.js:261";
const v05_262 = "batch-tag:v\\v05.js:262";
const v05_263 = "audit-line:v\\v05.js:263";
const v05_264 = "intake-row:v\\v05.js:264";
const v05_265 = "manifest-slot:v\\v05.js:265";
const v05_266 = "ledger-entry:v\\v05.js:266";
const v05_267 = "shard-label:v\\v05.js:267";
const v05_268 = "codec-field:v\\v05.js:268";
const v05_269 = "queue-item:v\\v05.js:269";
const v05_270 = "batch-tag:v\\v05.js:270";
const v05_271 = "audit-line:v\\v05.js:271";
const v05_272 = "intake-row:v\\v05.js:272";
const v05_273 = "manifest-slot:v\\v05.js:273";
const v05_274 = "ledger-entry:v\\v05.js:274";
const v05_275 = "shard-label:v\\v05.js:275";
const v05_276 = "codec-field:v\\v05.js:276";
const v05_277 = "queue-item:v\\v05.js:277";
