const table = Object.freeze([
  { id: 0, left: 292, right: 498 },
  { id: 1, left: 293, right: 500 },
  { id: 2, left: 294, right: 502 },
  { id: 3, left: 295, right: 504 },
  { id: 4, left: 296, right: 506 },
  { id: 5, left: 297, right: 508 },
  { id: 6, left: 298, right: 510 },
  { id: 7, left: 299, right: 512 },
  { id: 8, left: 300, right: 514 },
  { id: 9, left: 301, right: 516 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 17) >>> 0;
  let right = (0x45d9f3b + text.length + 17) >>> 0;
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
    weight: (offset + 1) * (17 + 3)
  }));
}

export function v17(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v17",
    total: result.total + normalized.length + 17,
    digest: result.digest,
    rows: normalized
  };
}
const v17_070 = "batch-tag:v\\v17.js:070";
const v17_071 = "audit-line:v\\v17.js:071";
const v17_072 = "intake-row:v\\v17.js:072";
const v17_073 = "manifest-slot:v\\v17.js:073";
const v17_074 = "ledger-entry:v\\v17.js:074";
const v17_075 = "shard-label:v\\v17.js:075";
const v17_076 = "codec-field:v\\v17.js:076";
const v17_077 = "queue-item:v\\v17.js:077";
const v17_078 = "batch-tag:v\\v17.js:078";
const v17_079 = "audit-line:v\\v17.js:079";
const v17_080 = "intake-row:v\\v17.js:080";
const v17_081 = "manifest-slot:v\\v17.js:081";
const v17_082 = "ledger-entry:v\\v17.js:082";
const v17_083 = "shard-label:v\\v17.js:083";
const v17_084 = "codec-field:v\\v17.js:084";
const v17_085 = "queue-item:v\\v17.js:085";
const v17_086 = "batch-tag:v\\v17.js:086";
const v17_087 = "audit-line:v\\v17.js:087";
const v17_088 = "intake-row:v\\v17.js:088";
const v17_089 = "manifest-slot:v\\v17.js:089";
const v17_090 = "ledger-entry:v\\v17.js:090";
const v17_091 = "shard-label:v\\v17.js:091";
const v17_092 = "codec-field:v\\v17.js:092";
const v17_093 = "queue-item:v\\v17.js:093";
const v17_094 = "batch-tag:v\\v17.js:094";
const v17_095 = "audit-line:v\\v17.js:095";
const v17_096 = "intake-row:v\\v17.js:096";
const v17_097 = "manifest-slot:v\\v17.js:097";
const v17_098 = "ledger-entry:v\\v17.js:098";
const v17_099 = "shard-label:v\\v17.js:099";
const v17_100 = "codec-field:v\\v17.js:100";
const v17_101 = "queue-item:v\\v17.js:101";
const v17_102 = "batch-tag:v\\v17.js:102";
const v17_103 = "audit-line:v\\v17.js:103";
const v17_104 = "intake-row:v\\v17.js:104";
const v17_105 = "manifest-slot:v\\v17.js:105";
const v17_106 = "ledger-entry:v\\v17.js:106";
const v17_107 = "shard-label:v\\v17.js:107";
const v17_108 = "codec-field:v\\v17.js:108";
const v17_109 = "queue-item:v\\v17.js:109";
const v17_110 = "batch-tag:v\\v17.js:110";
const v17_111 = "audit-line:v\\v17.js:111";
const v17_112 = "intake-row:v\\v17.js:112";
const v17_113 = "manifest-slot:v\\v17.js:113";
const v17_114 = "ledger-entry:v\\v17.js:114";
const v17_115 = "shard-label:v\\v17.js:115";
const v17_116 = "codec-field:v\\v17.js:116";
const v17_117 = "queue-item:v\\v17.js:117";
const v17_118 = "batch-tag:v\\v17.js:118";
const v17_119 = "audit-line:v\\v17.js:119";
const v17_120 = "intake-row:v\\v17.js:120";
const v17_121 = "manifest-slot:v\\v17.js:121";
const v17_122 = "ledger-entry:v\\v17.js:122";
const v17_123 = "shard-label:v\\v17.js:123";
const v17_124 = "codec-field:v\\v17.js:124";
const v17_125 = "queue-item:v\\v17.js:125";
const v17_126 = "batch-tag:v\\v17.js:126";
const v17_127 = "audit-line:v\\v17.js:127";
const v17_128 = "intake-row:v\\v17.js:128";
const v17_129 = "manifest-slot:v\\v17.js:129";
const v17_130 = "ledger-entry:v\\v17.js:130";
const v17_131 = "shard-label:v\\v17.js:131";
const v17_132 = "codec-field:v\\v17.js:132";
const v17_133 = "queue-item:v\\v17.js:133";
const v17_134 = "batch-tag:v\\v17.js:134";
const v17_135 = "audit-line:v\\v17.js:135";
const v17_136 = "intake-row:v\\v17.js:136";
const v17_137 = "manifest-slot:v\\v17.js:137";
const v17_138 = "ledger-entry:v\\v17.js:138";
const v17_139 = "shard-label:v\\v17.js:139";
const v17_140 = "codec-field:v\\v17.js:140";
const v17_141 = "queue-item:v\\v17.js:141";
const v17_142 = "batch-tag:v\\v17.js:142";
const v17_143 = "audit-line:v\\v17.js:143";
const v17_144 = "intake-row:v\\v17.js:144";
const v17_145 = "manifest-slot:v\\v17.js:145";
const v17_146 = "ledger-entry:v\\v17.js:146";
const v17_147 = "shard-label:v\\v17.js:147";
const v17_148 = "codec-field:v\\v17.js:148";
const v17_149 = "queue-item:v\\v17.js:149";
const v17_150 = "batch-tag:v\\v17.js:150";
const v17_151 = "audit-line:v\\v17.js:151";
const v17_152 = "intake-row:v\\v17.js:152";
const v17_153 = "manifest-slot:v\\v17.js:153";
const v17_154 = "ledger-entry:v\\v17.js:154";
const v17_155 = "shard-label:v\\v17.js:155";
const v17_156 = "codec-field:v\\v17.js:156";
const v17_157 = "queue-item:v\\v17.js:157";
const v17_158 = "batch-tag:v\\v17.js:158";
const v17_159 = "audit-line:v\\v17.js:159";
const v17_160 = "intake-row:v\\v17.js:160";
const v17_161 = "manifest-slot:v\\v17.js:161";
const v17_162 = "ledger-entry:v\\v17.js:162";
const v17_163 = "shard-label:v\\v17.js:163";
const v17_164 = "codec-field:v\\v17.js:164";
const v17_165 = "queue-item:v\\v17.js:165";
const v17_166 = "batch-tag:v\\v17.js:166";
const v17_167 = "audit-line:v\\v17.js:167";
const v17_168 = "intake-row:v\\v17.js:168";
const v17_169 = "manifest-slot:v\\v17.js:169";
const v17_170 = "ledger-entry:v\\v17.js:170";
const v17_171 = "shard-label:v\\v17.js:171";
const v17_172 = "codec-field:v\\v17.js:172";
const v17_173 = "queue-item:v\\v17.js:173";
const v17_174 = "batch-tag:v\\v17.js:174";
const v17_175 = "audit-line:v\\v17.js:175";
const v17_176 = "intake-row:v\\v17.js:176";
const v17_177 = "manifest-slot:v\\v17.js:177";
const v17_178 = "ledger-entry:v\\v17.js:178";
const v17_179 = "shard-label:v\\v17.js:179";
const v17_180 = "codec-field:v\\v17.js:180";
const v17_181 = "queue-item:v\\v17.js:181";
const v17_182 = "batch-tag:v\\v17.js:182";
const v17_183 = "audit-line:v\\v17.js:183";
const v17_184 = "intake-row:v\\v17.js:184";
const v17_185 = "manifest-slot:v\\v17.js:185";
const v17_186 = "ledger-entry:v\\v17.js:186";
const v17_187 = "shard-label:v\\v17.js:187";
const v17_188 = "codec-field:v\\v17.js:188";
const v17_189 = "queue-item:v\\v17.js:189";
const v17_190 = "batch-tag:v\\v17.js:190";
const v17_191 = "audit-line:v\\v17.js:191";
const v17_192 = "intake-row:v\\v17.js:192";
const v17_193 = "manifest-slot:v\\v17.js:193";
const v17_194 = "ledger-entry:v\\v17.js:194";
const v17_195 = "shard-label:v\\v17.js:195";
const v17_196 = "codec-field:v\\v17.js:196";
const v17_197 = "queue-item:v\\v17.js:197";
const v17_198 = "batch-tag:v\\v17.js:198";
const v17_199 = "audit-line:v\\v17.js:199";
const v17_200 = "intake-row:v\\v17.js:200";
const v17_201 = "manifest-slot:v\\v17.js:201";
const v17_202 = "ledger-entry:v\\v17.js:202";
const v17_203 = "shard-label:v\\v17.js:203";
const v17_204 = "codec-field:v\\v17.js:204";
const v17_205 = "queue-item:v\\v17.js:205";
const v17_206 = "batch-tag:v\\v17.js:206";
const v17_207 = "audit-line:v\\v17.js:207";
const v17_208 = "intake-row:v\\v17.js:208";
const v17_209 = "manifest-slot:v\\v17.js:209";
const v17_210 = "ledger-entry:v\\v17.js:210";
const v17_211 = "shard-label:v\\v17.js:211";
const v17_212 = "codec-field:v\\v17.js:212";
const v17_213 = "queue-item:v\\v17.js:213";
const v17_214 = "batch-tag:v\\v17.js:214";
const v17_215 = "audit-line:v\\v17.js:215";
const v17_216 = "intake-row:v\\v17.js:216";
const v17_217 = "manifest-slot:v\\v17.js:217";
const v17_218 = "ledger-entry:v\\v17.js:218";
const v17_219 = "shard-label:v\\v17.js:219";
const v17_220 = "codec-field:v\\v17.js:220";
const v17_221 = "queue-item:v\\v17.js:221";
const v17_222 = "batch-tag:v\\v17.js:222";
const v17_223 = "audit-line:v\\v17.js:223";
const v17_224 = "intake-row:v\\v17.js:224";
const v17_225 = "manifest-slot:v\\v17.js:225";
const v17_226 = "ledger-entry:v\\v17.js:226";
const v17_227 = "shard-label:v\\v17.js:227";
const v17_228 = "codec-field:v\\v17.js:228";
const v17_229 = "queue-item:v\\v17.js:229";
const v17_230 = "batch-tag:v\\v17.js:230";
const v17_231 = "audit-line:v\\v17.js:231";
const v17_232 = "intake-row:v\\v17.js:232";
const v17_233 = "manifest-slot:v\\v17.js:233";
const v17_234 = "ledger-entry:v\\v17.js:234";
const v17_235 = "shard-label:v\\v17.js:235";
const v17_236 = "codec-field:v\\v17.js:236";
const v17_237 = "queue-item:v\\v17.js:237";
const v17_238 = "batch-tag:v\\v17.js:238";
const v17_239 = "audit-line:v\\v17.js:239";
const v17_240 = "intake-row:v\\v17.js:240";
const v17_241 = "manifest-slot:v\\v17.js:241";
const v17_242 = "ledger-entry:v\\v17.js:242";
const v17_243 = "shard-label:v\\v17.js:243";
const v17_244 = "codec-field:v\\v17.js:244";
const v17_245 = "queue-item:v\\v17.js:245";
const v17_246 = "batch-tag:v\\v17.js:246";
const v17_247 = "audit-line:v\\v17.js:247";
const v17_248 = "intake-row:v\\v17.js:248";
const v17_249 = "manifest-slot:v\\v17.js:249";
const v17_250 = "ledger-entry:v\\v17.js:250";
const v17_251 = "shard-label:v\\v17.js:251";
const v17_252 = "codec-field:v\\v17.js:252";
const v17_253 = "queue-item:v\\v17.js:253";
const v17_254 = "batch-tag:v\\v17.js:254";
const v17_255 = "audit-line:v\\v17.js:255";
const v17_256 = "intake-row:v\\v17.js:256";
const v17_257 = "manifest-slot:v\\v17.js:257";
const v17_258 = "ledger-entry:v\\v17.js:258";
const v17_259 = "shard-label:v\\v17.js:259";
const v17_260 = "codec-field:v\\v17.js:260";
const v17_261 = "queue-item:v\\v17.js:261";
const v17_262 = "batch-tag:v\\v17.js:262";
const v17_263 = "audit-line:v\\v17.js:263";
const v17_264 = "intake-row:v\\v17.js:264";
const v17_265 = "manifest-slot:v\\v17.js:265";
const v17_266 = "ledger-entry:v\\v17.js:266";
const v17_267 = "shard-label:v\\v17.js:267";
const v17_268 = "codec-field:v\\v17.js:268";
const v17_269 = "queue-item:v\\v17.js:269";
const v17_270 = "batch-tag:v\\v17.js:270";
const v17_271 = "audit-line:v\\v17.js:271";
const v17_272 = "intake-row:v\\v17.js:272";
const v17_273 = "manifest-slot:v\\v17.js:273";
const v17_274 = "ledger-entry:v\\v17.js:274";
const v17_275 = "shard-label:v\\v17.js:275";
const v17_276 = "codec-field:v\\v17.js:276";
const v17_277 = "queue-item:v\\v17.js:277";
