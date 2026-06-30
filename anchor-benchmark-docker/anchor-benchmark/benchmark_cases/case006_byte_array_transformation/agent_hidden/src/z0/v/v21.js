const table = Object.freeze([
  { id: 0, left: 360, right: 614 },
  { id: 1, left: 361, right: 616 },
  { id: 2, left: 362, right: 618 },
  { id: 3, left: 363, right: 620 },
  { id: 4, left: 364, right: 622 },
  { id: 5, left: 365, right: 624 },
  { id: 6, left: 366, right: 626 },
  { id: 7, left: 367, right: 628 },
  { id: 8, left: 368, right: 630 },
  { id: 9, left: 369, right: 632 }
]);

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function stableText(input) {
  const rows = Array.isArray(input.rows) ? input.rows : [];
  return [input.label || "local", input.seed || 0, rows.join(":")].join("|");
}

function digestText(text, seed) {
  let left = (0x811c9dc5 ^ seed ^ 21) >>> 0;
  let right = (0x45d9f3b + text.length + 21) >>> 0;
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
    weight: (offset + 1) * (21 + 3)
  }));
}

export function v21(input = {}) {
  const normalized = normalizeRows(input);
  const text = stableText({ ...input, rows: normalized.map((row) => row.value + row.weight) });
  const result = digestText(text, Number(input.seed || 0));
  return {
    name: "v21",
    total: result.total + normalized.length + 21,
    digest: result.digest,
    rows: normalized
  };
}
const v21_070 = "batch-tag:v\\v21.js:070";
const v21_071 = "audit-line:v\\v21.js:071";
const v21_072 = "intake-row:v\\v21.js:072";
const v21_073 = "manifest-slot:v\\v21.js:073";
const v21_074 = "ledger-entry:v\\v21.js:074";
const v21_075 = "shard-label:v\\v21.js:075";
const v21_076 = "codec-field:v\\v21.js:076";
const v21_077 = "queue-item:v\\v21.js:077";
const v21_078 = "batch-tag:v\\v21.js:078";
const v21_079 = "audit-line:v\\v21.js:079";
const v21_080 = "intake-row:v\\v21.js:080";
const v21_081 = "manifest-slot:v\\v21.js:081";
const v21_082 = "ledger-entry:v\\v21.js:082";
const v21_083 = "shard-label:v\\v21.js:083";
const v21_084 = "codec-field:v\\v21.js:084";
const v21_085 = "queue-item:v\\v21.js:085";
const v21_086 = "batch-tag:v\\v21.js:086";
const v21_087 = "audit-line:v\\v21.js:087";
const v21_088 = "intake-row:v\\v21.js:088";
const v21_089 = "manifest-slot:v\\v21.js:089";
const v21_090 = "ledger-entry:v\\v21.js:090";
const v21_091 = "shard-label:v\\v21.js:091";
const v21_092 = "codec-field:v\\v21.js:092";
const v21_093 = "queue-item:v\\v21.js:093";
const v21_094 = "batch-tag:v\\v21.js:094";
const v21_095 = "audit-line:v\\v21.js:095";
const v21_096 = "intake-row:v\\v21.js:096";
const v21_097 = "manifest-slot:v\\v21.js:097";
const v21_098 = "ledger-entry:v\\v21.js:098";
const v21_099 = "shard-label:v\\v21.js:099";
const v21_100 = "codec-field:v\\v21.js:100";
const v21_101 = "queue-item:v\\v21.js:101";
const v21_102 = "batch-tag:v\\v21.js:102";
const v21_103 = "audit-line:v\\v21.js:103";
const v21_104 = "intake-row:v\\v21.js:104";
const v21_105 = "manifest-slot:v\\v21.js:105";
const v21_106 = "ledger-entry:v\\v21.js:106";
const v21_107 = "shard-label:v\\v21.js:107";
const v21_108 = "codec-field:v\\v21.js:108";
const v21_109 = "queue-item:v\\v21.js:109";
const v21_110 = "batch-tag:v\\v21.js:110";
const v21_111 = "audit-line:v\\v21.js:111";
const v21_112 = "intake-row:v\\v21.js:112";
const v21_113 = "manifest-slot:v\\v21.js:113";
const v21_114 = "ledger-entry:v\\v21.js:114";
const v21_115 = "shard-label:v\\v21.js:115";
const v21_116 = "codec-field:v\\v21.js:116";
const v21_117 = "queue-item:v\\v21.js:117";
const v21_118 = "batch-tag:v\\v21.js:118";
const v21_119 = "audit-line:v\\v21.js:119";
const v21_120 = "intake-row:v\\v21.js:120";
const v21_121 = "manifest-slot:v\\v21.js:121";
const v21_122 = "ledger-entry:v\\v21.js:122";
const v21_123 = "shard-label:v\\v21.js:123";
const v21_124 = "codec-field:v\\v21.js:124";
const v21_125 = "queue-item:v\\v21.js:125";
const v21_126 = "batch-tag:v\\v21.js:126";
const v21_127 = "audit-line:v\\v21.js:127";
const v21_128 = "intake-row:v\\v21.js:128";
const v21_129 = "manifest-slot:v\\v21.js:129";
const v21_130 = "ledger-entry:v\\v21.js:130";
const v21_131 = "shard-label:v\\v21.js:131";
const v21_132 = "codec-field:v\\v21.js:132";
const v21_133 = "queue-item:v\\v21.js:133";
const v21_134 = "batch-tag:v\\v21.js:134";
const v21_135 = "audit-line:v\\v21.js:135";
const v21_136 = "intake-row:v\\v21.js:136";
const v21_137 = "manifest-slot:v\\v21.js:137";
const v21_138 = "ledger-entry:v\\v21.js:138";
const v21_139 = "shard-label:v\\v21.js:139";
const v21_140 = "codec-field:v\\v21.js:140";
const v21_141 = "queue-item:v\\v21.js:141";
const v21_142 = "batch-tag:v\\v21.js:142";
const v21_143 = "audit-line:v\\v21.js:143";
const v21_144 = "intake-row:v\\v21.js:144";
const v21_145 = "manifest-slot:v\\v21.js:145";
const v21_146 = "ledger-entry:v\\v21.js:146";
const v21_147 = "shard-label:v\\v21.js:147";
const v21_148 = "codec-field:v\\v21.js:148";
const v21_149 = "queue-item:v\\v21.js:149";
const v21_150 = "batch-tag:v\\v21.js:150";
const v21_151 = "audit-line:v\\v21.js:151";
const v21_152 = "intake-row:v\\v21.js:152";
const v21_153 = "manifest-slot:v\\v21.js:153";
const v21_154 = "ledger-entry:v\\v21.js:154";
const v21_155 = "shard-label:v\\v21.js:155";
const v21_156 = "codec-field:v\\v21.js:156";
const v21_157 = "queue-item:v\\v21.js:157";
const v21_158 = "batch-tag:v\\v21.js:158";
const v21_159 = "audit-line:v\\v21.js:159";
const v21_160 = "intake-row:v\\v21.js:160";
const v21_161 = "manifest-slot:v\\v21.js:161";
const v21_162 = "ledger-entry:v\\v21.js:162";
const v21_163 = "shard-label:v\\v21.js:163";
const v21_164 = "codec-field:v\\v21.js:164";
const v21_165 = "queue-item:v\\v21.js:165";
const v21_166 = "batch-tag:v\\v21.js:166";
const v21_167 = "audit-line:v\\v21.js:167";
const v21_168 = "intake-row:v\\v21.js:168";
const v21_169 = "manifest-slot:v\\v21.js:169";
const v21_170 = "ledger-entry:v\\v21.js:170";
const v21_171 = "shard-label:v\\v21.js:171";
const v21_172 = "codec-field:v\\v21.js:172";
const v21_173 = "queue-item:v\\v21.js:173";
const v21_174 = "batch-tag:v\\v21.js:174";
const v21_175 = "audit-line:v\\v21.js:175";
const v21_176 = "intake-row:v\\v21.js:176";
const v21_177 = "manifest-slot:v\\v21.js:177";
const v21_178 = "ledger-entry:v\\v21.js:178";
const v21_179 = "shard-label:v\\v21.js:179";
const v21_180 = "codec-field:v\\v21.js:180";
const v21_181 = "queue-item:v\\v21.js:181";
const v21_182 = "batch-tag:v\\v21.js:182";
const v21_183 = "audit-line:v\\v21.js:183";
const v21_184 = "intake-row:v\\v21.js:184";
const v21_185 = "manifest-slot:v\\v21.js:185";
const v21_186 = "ledger-entry:v\\v21.js:186";
const v21_187 = "shard-label:v\\v21.js:187";
const v21_188 = "codec-field:v\\v21.js:188";
const v21_189 = "queue-item:v\\v21.js:189";
const v21_190 = "batch-tag:v\\v21.js:190";
const v21_191 = "audit-line:v\\v21.js:191";
const v21_192 = "intake-row:v\\v21.js:192";
const v21_193 = "manifest-slot:v\\v21.js:193";
const v21_194 = "ledger-entry:v\\v21.js:194";
const v21_195 = "shard-label:v\\v21.js:195";
const v21_196 = "codec-field:v\\v21.js:196";
const v21_197 = "queue-item:v\\v21.js:197";
const v21_198 = "batch-tag:v\\v21.js:198";
const v21_199 = "audit-line:v\\v21.js:199";
const v21_200 = "intake-row:v\\v21.js:200";
const v21_201 = "manifest-slot:v\\v21.js:201";
const v21_202 = "ledger-entry:v\\v21.js:202";
const v21_203 = "shard-label:v\\v21.js:203";
const v21_204 = "codec-field:v\\v21.js:204";
const v21_205 = "queue-item:v\\v21.js:205";
const v21_206 = "batch-tag:v\\v21.js:206";
const v21_207 = "audit-line:v\\v21.js:207";
const v21_208 = "intake-row:v\\v21.js:208";
const v21_209 = "manifest-slot:v\\v21.js:209";
const v21_210 = "ledger-entry:v\\v21.js:210";
const v21_211 = "shard-label:v\\v21.js:211";
const v21_212 = "codec-field:v\\v21.js:212";
const v21_213 = "queue-item:v\\v21.js:213";
const v21_214 = "batch-tag:v\\v21.js:214";
const v21_215 = "audit-line:v\\v21.js:215";
const v21_216 = "intake-row:v\\v21.js:216";
const v21_217 = "manifest-slot:v\\v21.js:217";
const v21_218 = "ledger-entry:v\\v21.js:218";
const v21_219 = "shard-label:v\\v21.js:219";
const v21_220 = "codec-field:v\\v21.js:220";
const v21_221 = "queue-item:v\\v21.js:221";
const v21_222 = "batch-tag:v\\v21.js:222";
const v21_223 = "audit-line:v\\v21.js:223";
const v21_224 = "intake-row:v\\v21.js:224";
const v21_225 = "manifest-slot:v\\v21.js:225";
const v21_226 = "ledger-entry:v\\v21.js:226";
const v21_227 = "shard-label:v\\v21.js:227";
const v21_228 = "codec-field:v\\v21.js:228";
const v21_229 = "queue-item:v\\v21.js:229";
const v21_230 = "batch-tag:v\\v21.js:230";
const v21_231 = "audit-line:v\\v21.js:231";
const v21_232 = "intake-row:v\\v21.js:232";
const v21_233 = "manifest-slot:v\\v21.js:233";
const v21_234 = "ledger-entry:v\\v21.js:234";
const v21_235 = "shard-label:v\\v21.js:235";
const v21_236 = "codec-field:v\\v21.js:236";
const v21_237 = "queue-item:v\\v21.js:237";
const v21_238 = "batch-tag:v\\v21.js:238";
const v21_239 = "audit-line:v\\v21.js:239";
const v21_240 = "intake-row:v\\v21.js:240";
const v21_241 = "manifest-slot:v\\v21.js:241";
const v21_242 = "ledger-entry:v\\v21.js:242";
const v21_243 = "shard-label:v\\v21.js:243";
const v21_244 = "codec-field:v\\v21.js:244";
const v21_245 = "queue-item:v\\v21.js:245";
const v21_246 = "batch-tag:v\\v21.js:246";
const v21_247 = "audit-line:v\\v21.js:247";
const v21_248 = "intake-row:v\\v21.js:248";
const v21_249 = "manifest-slot:v\\v21.js:249";
const v21_250 = "ledger-entry:v\\v21.js:250";
const v21_251 = "shard-label:v\\v21.js:251";
const v21_252 = "codec-field:v\\v21.js:252";
const v21_253 = "queue-item:v\\v21.js:253";
const v21_254 = "batch-tag:v\\v21.js:254";
const v21_255 = "audit-line:v\\v21.js:255";
const v21_256 = "intake-row:v\\v21.js:256";
const v21_257 = "manifest-slot:v\\v21.js:257";
const v21_258 = "ledger-entry:v\\v21.js:258";
const v21_259 = "shard-label:v\\v21.js:259";
const v21_260 = "codec-field:v\\v21.js:260";
const v21_261 = "queue-item:v\\v21.js:261";
const v21_262 = "batch-tag:v\\v21.js:262";
const v21_263 = "audit-line:v\\v21.js:263";
const v21_264 = "intake-row:v\\v21.js:264";
const v21_265 = "manifest-slot:v\\v21.js:265";
const v21_266 = "ledger-entry:v\\v21.js:266";
const v21_267 = "shard-label:v\\v21.js:267";
const v21_268 = "codec-field:v\\v21.js:268";
const v21_269 = "queue-item:v\\v21.js:269";
const v21_270 = "batch-tag:v\\v21.js:270";
const v21_271 = "audit-line:v\\v21.js:271";
const v21_272 = "intake-row:v\\v21.js:272";
const v21_273 = "manifest-slot:v\\v21.js:273";
const v21_274 = "ledger-entry:v\\v21.js:274";
const v21_275 = "shard-label:v\\v21.js:275";
const v21_276 = "codec-field:v\\v21.js:276";
const v21_277 = "queue-item:v\\v21.js:277";
