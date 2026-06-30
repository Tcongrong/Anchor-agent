const table = Object.freeze([
  { id: 0, left: 394, right: 672 },
  { id: 1, left: 395, right: 674 },
  { id: 2, left: 396, right: 676 },
  { id: 3, left: 397, right: 678 },
  { id: 4, left: 398, right: 680 },
  { id: 5, left: 399, right: 682 },
  { id: 6, left: 400, right: 684 },
  { id: 7, left: 401, right: 686 },
  { id: 8, left: 402, right: 688 },
  { id: 9, left: 403, right: 690 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 23) >>> 0;
  let right = (0x45d9f3b + text.length + 23) >>> 0;
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
    weight: (offset + 1) * (23 + 3)
  }));
}

export function v23(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v23",
    total: result.total + normalized.length + 23,
    digest: result.digest,
    rows: normalized
  };
}
const v23_070 = "batch-tag:v\\v23.js:070";
const v23_071 = "audit-line:v\\v23.js:071";
const v23_072 = "intake-row:v\\v23.js:072";
const v23_073 = "manifest-slot:v\\v23.js:073";
const v23_074 = "ledger-entry:v\\v23.js:074";
const v23_075 = "shard-label:v\\v23.js:075";
const v23_076 = "codec-field:v\\v23.js:076";
const v23_077 = "queue-item:v\\v23.js:077";
const v23_078 = "batch-tag:v\\v23.js:078";
const v23_079 = "audit-line:v\\v23.js:079";
const v23_080 = "intake-row:v\\v23.js:080";
const v23_081 = "manifest-slot:v\\v23.js:081";
const v23_082 = "ledger-entry:v\\v23.js:082";
const v23_083 = "shard-label:v\\v23.js:083";
const v23_084 = "codec-field:v\\v23.js:084";
const v23_085 = "queue-item:v\\v23.js:085";
const v23_086 = "batch-tag:v\\v23.js:086";
const v23_087 = "audit-line:v\\v23.js:087";
const v23_088 = "intake-row:v\\v23.js:088";
const v23_089 = "manifest-slot:v\\v23.js:089";
const v23_090 = "ledger-entry:v\\v23.js:090";
const v23_091 = "shard-label:v\\v23.js:091";
const v23_092 = "codec-field:v\\v23.js:092";
const v23_093 = "queue-item:v\\v23.js:093";
const v23_094 = "batch-tag:v\\v23.js:094";
const v23_095 = "audit-line:v\\v23.js:095";
const v23_096 = "intake-row:v\\v23.js:096";
const v23_097 = "manifest-slot:v\\v23.js:097";
const v23_098 = "ledger-entry:v\\v23.js:098";
const v23_099 = "shard-label:v\\v23.js:099";
const v23_100 = "codec-field:v\\v23.js:100";
const v23_101 = "queue-item:v\\v23.js:101";
const v23_102 = "batch-tag:v\\v23.js:102";
const v23_103 = "audit-line:v\\v23.js:103";
const v23_104 = "intake-row:v\\v23.js:104";
const v23_105 = "manifest-slot:v\\v23.js:105";
const v23_106 = "ledger-entry:v\\v23.js:106";
const v23_107 = "shard-label:v\\v23.js:107";
const v23_108 = "codec-field:v\\v23.js:108";
const v23_109 = "queue-item:v\\v23.js:109";
const v23_110 = "batch-tag:v\\v23.js:110";
const v23_111 = "audit-line:v\\v23.js:111";
const v23_112 = "intake-row:v\\v23.js:112";
const v23_113 = "manifest-slot:v\\v23.js:113";
const v23_114 = "ledger-entry:v\\v23.js:114";
const v23_115 = "shard-label:v\\v23.js:115";
const v23_116 = "codec-field:v\\v23.js:116";
const v23_117 = "queue-item:v\\v23.js:117";
const v23_118 = "batch-tag:v\\v23.js:118";
const v23_119 = "audit-line:v\\v23.js:119";
const v23_120 = "intake-row:v\\v23.js:120";
const v23_121 = "manifest-slot:v\\v23.js:121";
const v23_122 = "ledger-entry:v\\v23.js:122";
const v23_123 = "shard-label:v\\v23.js:123";
const v23_124 = "codec-field:v\\v23.js:124";
const v23_125 = "queue-item:v\\v23.js:125";
const v23_126 = "batch-tag:v\\v23.js:126";
const v23_127 = "audit-line:v\\v23.js:127";
const v23_128 = "intake-row:v\\v23.js:128";
const v23_129 = "manifest-slot:v\\v23.js:129";
const v23_130 = "ledger-entry:v\\v23.js:130";
const v23_131 = "shard-label:v\\v23.js:131";
const v23_132 = "codec-field:v\\v23.js:132";
const v23_133 = "queue-item:v\\v23.js:133";
const v23_134 = "batch-tag:v\\v23.js:134";
const v23_135 = "audit-line:v\\v23.js:135";
const v23_136 = "intake-row:v\\v23.js:136";
const v23_137 = "manifest-slot:v\\v23.js:137";
const v23_138 = "ledger-entry:v\\v23.js:138";
const v23_139 = "shard-label:v\\v23.js:139";
const v23_140 = "codec-field:v\\v23.js:140";
const v23_141 = "queue-item:v\\v23.js:141";
const v23_142 = "batch-tag:v\\v23.js:142";
const v23_143 = "audit-line:v\\v23.js:143";
const v23_144 = "intake-row:v\\v23.js:144";
const v23_145 = "manifest-slot:v\\v23.js:145";
const v23_146 = "ledger-entry:v\\v23.js:146";
const v23_147 = "shard-label:v\\v23.js:147";
const v23_148 = "codec-field:v\\v23.js:148";
const v23_149 = "queue-item:v\\v23.js:149";
const v23_150 = "batch-tag:v\\v23.js:150";
const v23_151 = "audit-line:v\\v23.js:151";
const v23_152 = "intake-row:v\\v23.js:152";
const v23_153 = "manifest-slot:v\\v23.js:153";
const v23_154 = "ledger-entry:v\\v23.js:154";
const v23_155 = "shard-label:v\\v23.js:155";
const v23_156 = "codec-field:v\\v23.js:156";
const v23_157 = "queue-item:v\\v23.js:157";
const v23_158 = "batch-tag:v\\v23.js:158";
const v23_159 = "audit-line:v\\v23.js:159";
const v23_160 = "intake-row:v\\v23.js:160";
const v23_161 = "manifest-slot:v\\v23.js:161";
const v23_162 = "ledger-entry:v\\v23.js:162";
const v23_163 = "shard-label:v\\v23.js:163";
const v23_164 = "codec-field:v\\v23.js:164";
const v23_165 = "queue-item:v\\v23.js:165";
const v23_166 = "batch-tag:v\\v23.js:166";
const v23_167 = "audit-line:v\\v23.js:167";
const v23_168 = "intake-row:v\\v23.js:168";
const v23_169 = "manifest-slot:v\\v23.js:169";
const v23_170 = "ledger-entry:v\\v23.js:170";
const v23_171 = "shard-label:v\\v23.js:171";
const v23_172 = "codec-field:v\\v23.js:172";
const v23_173 = "queue-item:v\\v23.js:173";
const v23_174 = "batch-tag:v\\v23.js:174";
const v23_175 = "audit-line:v\\v23.js:175";
const v23_176 = "intake-row:v\\v23.js:176";
const v23_177 = "manifest-slot:v\\v23.js:177";
const v23_178 = "ledger-entry:v\\v23.js:178";
const v23_179 = "shard-label:v\\v23.js:179";
const v23_180 = "codec-field:v\\v23.js:180";
const v23_181 = "queue-item:v\\v23.js:181";
const v23_182 = "batch-tag:v\\v23.js:182";
const v23_183 = "audit-line:v\\v23.js:183";
const v23_184 = "intake-row:v\\v23.js:184";
const v23_185 = "manifest-slot:v\\v23.js:185";
const v23_186 = "ledger-entry:v\\v23.js:186";
const v23_187 = "shard-label:v\\v23.js:187";
const v23_188 = "codec-field:v\\v23.js:188";
const v23_189 = "queue-item:v\\v23.js:189";
const v23_190 = "batch-tag:v\\v23.js:190";
const v23_191 = "audit-line:v\\v23.js:191";
const v23_192 = "intake-row:v\\v23.js:192";
const v23_193 = "manifest-slot:v\\v23.js:193";
const v23_194 = "ledger-entry:v\\v23.js:194";
const v23_195 = "shard-label:v\\v23.js:195";
const v23_196 = "codec-field:v\\v23.js:196";
const v23_197 = "queue-item:v\\v23.js:197";
const v23_198 = "batch-tag:v\\v23.js:198";
const v23_199 = "audit-line:v\\v23.js:199";
const v23_200 = "intake-row:v\\v23.js:200";
const v23_201 = "manifest-slot:v\\v23.js:201";
const v23_202 = "ledger-entry:v\\v23.js:202";
const v23_203 = "shard-label:v\\v23.js:203";
const v23_204 = "codec-field:v\\v23.js:204";
const v23_205 = "queue-item:v\\v23.js:205";
const v23_206 = "batch-tag:v\\v23.js:206";
const v23_207 = "audit-line:v\\v23.js:207";
const v23_208 = "intake-row:v\\v23.js:208";
const v23_209 = "manifest-slot:v\\v23.js:209";
const v23_210 = "ledger-entry:v\\v23.js:210";
const v23_211 = "shard-label:v\\v23.js:211";
const v23_212 = "codec-field:v\\v23.js:212";
const v23_213 = "queue-item:v\\v23.js:213";
const v23_214 = "batch-tag:v\\v23.js:214";
const v23_215 = "audit-line:v\\v23.js:215";
const v23_216 = "intake-row:v\\v23.js:216";
const v23_217 = "manifest-slot:v\\v23.js:217";
const v23_218 = "ledger-entry:v\\v23.js:218";
const v23_219 = "shard-label:v\\v23.js:219";
const v23_220 = "codec-field:v\\v23.js:220";
const v23_221 = "queue-item:v\\v23.js:221";
const v23_222 = "batch-tag:v\\v23.js:222";
const v23_223 = "audit-line:v\\v23.js:223";
const v23_224 = "intake-row:v\\v23.js:224";
const v23_225 = "manifest-slot:v\\v23.js:225";
const v23_226 = "ledger-entry:v\\v23.js:226";
const v23_227 = "shard-label:v\\v23.js:227";
const v23_228 = "codec-field:v\\v23.js:228";
const v23_229 = "queue-item:v\\v23.js:229";
const v23_230 = "batch-tag:v\\v23.js:230";
const v23_231 = "audit-line:v\\v23.js:231";
const v23_232 = "intake-row:v\\v23.js:232";
const v23_233 = "manifest-slot:v\\v23.js:233";
const v23_234 = "ledger-entry:v\\v23.js:234";
const v23_235 = "shard-label:v\\v23.js:235";
const v23_236 = "codec-field:v\\v23.js:236";
const v23_237 = "queue-item:v\\v23.js:237";
const v23_238 = "batch-tag:v\\v23.js:238";
const v23_239 = "audit-line:v\\v23.js:239";
const v23_240 = "intake-row:v\\v23.js:240";
const v23_241 = "manifest-slot:v\\v23.js:241";
const v23_242 = "ledger-entry:v\\v23.js:242";
const v23_243 = "shard-label:v\\v23.js:243";
const v23_244 = "codec-field:v\\v23.js:244";
const v23_245 = "queue-item:v\\v23.js:245";
const v23_246 = "batch-tag:v\\v23.js:246";
const v23_247 = "audit-line:v\\v23.js:247";
const v23_248 = "intake-row:v\\v23.js:248";
const v23_249 = "manifest-slot:v\\v23.js:249";
const v23_250 = "ledger-entry:v\\v23.js:250";
const v23_251 = "shard-label:v\\v23.js:251";
const v23_252 = "codec-field:v\\v23.js:252";
const v23_253 = "queue-item:v\\v23.js:253";
const v23_254 = "batch-tag:v\\v23.js:254";
const v23_255 = "audit-line:v\\v23.js:255";
const v23_256 = "intake-row:v\\v23.js:256";
const v23_257 = "manifest-slot:v\\v23.js:257";
const v23_258 = "ledger-entry:v\\v23.js:258";
const v23_259 = "shard-label:v\\v23.js:259";
const v23_260 = "codec-field:v\\v23.js:260";
const v23_261 = "queue-item:v\\v23.js:261";
const v23_262 = "batch-tag:v\\v23.js:262";
const v23_263 = "audit-line:v\\v23.js:263";
const v23_264 = "intake-row:v\\v23.js:264";
const v23_265 = "manifest-slot:v\\v23.js:265";
const v23_266 = "ledger-entry:v\\v23.js:266";
const v23_267 = "shard-label:v\\v23.js:267";
const v23_268 = "codec-field:v\\v23.js:268";
const v23_269 = "queue-item:v\\v23.js:269";
const v23_270 = "batch-tag:v\\v23.js:270";
const v23_271 = "audit-line:v\\v23.js:271";
const v23_272 = "intake-row:v\\v23.js:272";
const v23_273 = "manifest-slot:v\\v23.js:273";
const v23_274 = "ledger-entry:v\\v23.js:274";
const v23_275 = "shard-label:v\\v23.js:275";
const v23_276 = "codec-field:v\\v23.js:276";
const v23_277 = "queue-item:v\\v23.js:277";
