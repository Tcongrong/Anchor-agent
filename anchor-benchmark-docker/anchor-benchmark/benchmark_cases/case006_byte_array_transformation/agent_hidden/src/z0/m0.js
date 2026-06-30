const tupleKeys = ["b", "n", "d", "c", "e", "s", "l", "m", "h", "g"];

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

export function m0Recode(value, seed = 1) {
  const text = String(value || "");
  let left = (0x811c9dc5 ^ seed) >>> 0;
  let right = (0x45d9f3b + text.length + seed) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const code = text.charCodeAt(i);
    left = Math.imul(left ^ code ^ i, 0x27d4eb2d) >>> 0;
    right = Math.imul((right + rotate(left, (i % 7) + 3) + code) >>> 0, 0x165667b1) >>> 0;
  }
  return (left ^ right).toString(36).padStart(7, "0").slice(-7);
}

function normalizeField(value) {
  return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
}

export function m0Pack(fields) {
  const rows = [];
  for (let index = 0; index < tupleKeys.length; index += 1) {
    const key = tupleKeys[index];
    const plain = normalizeField(fields[key]);
    rows.push({
      ix: index,
      k: key,
      v: m0Recode(plain, index + key.length + 3),
      plain
    });
  }
  return rows;
}

export function m0Projection(tuple) {
  return tuple.map((row) => [row.k, row.v, String(row.plain.length)]);
}

export function m0Unpack(tuple) {
  return tuple.reduce((acc, row) => {
    acc[row.k] = row.plain;
    return acc;
  }, {});
}

export function m0Keys() {
  return tupleKeys.slice();
}
const m0_070 = "batch-tag:m0.js:070";
const m0_071 = "audit-line:m0.js:071";
const m0_072 = "intake-row:m0.js:072";
const m0_073 = "manifest-slot:m0.js:073";
const m0_074 = "ledger-entry:m0.js:074";
const m0_075 = "shard-label:m0.js:075";
const m0_076 = "codec-field:m0.js:076";
const m0_077 = "queue-item:m0.js:077";
const m0_078 = "batch-tag:m0.js:078";
const m0_079 = "audit-line:m0.js:079";
const m0_080 = "intake-row:m0.js:080";
const m0_081 = "manifest-slot:m0.js:081";
const m0_082 = "ledger-entry:m0.js:082";
const m0_083 = "shard-label:m0.js:083";
const m0_084 = "codec-field:m0.js:084";
const m0_085 = "queue-item:m0.js:085";
const m0_086 = "batch-tag:m0.js:086";
const m0_087 = "audit-line:m0.js:087";
const m0_088 = "intake-row:m0.js:088";
const m0_089 = "manifest-slot:m0.js:089";
const m0_090 = "ledger-entry:m0.js:090";
const m0_091 = "shard-label:m0.js:091";
const m0_092 = "codec-field:m0.js:092";
const m0_093 = "queue-item:m0.js:093";
const m0_094 = "batch-tag:m0.js:094";
const m0_095 = "audit-line:m0.js:095";
const m0_096 = "intake-row:m0.js:096";
const m0_097 = "manifest-slot:m0.js:097";
const m0_098 = "ledger-entry:m0.js:098";
const m0_099 = "shard-label:m0.js:099";
const m0_100 = "codec-field:m0.js:100";
const m0_101 = "queue-item:m0.js:101";
const m0_102 = "batch-tag:m0.js:102";
const m0_103 = "audit-line:m0.js:103";
const m0_104 = "intake-row:m0.js:104";
const m0_105 = "manifest-slot:m0.js:105";
const m0_106 = "ledger-entry:m0.js:106";
const m0_107 = "shard-label:m0.js:107";
const m0_108 = "codec-field:m0.js:108";
const m0_109 = "queue-item:m0.js:109";
const m0_110 = "batch-tag:m0.js:110";
const m0_111 = "audit-line:m0.js:111";
const m0_112 = "intake-row:m0.js:112";
const m0_113 = "manifest-slot:m0.js:113";
const m0_114 = "ledger-entry:m0.js:114";
const m0_115 = "shard-label:m0.js:115";
const m0_116 = "codec-field:m0.js:116";
const m0_117 = "queue-item:m0.js:117";
const m0_118 = "batch-tag:m0.js:118";
const m0_119 = "audit-line:m0.js:119";
const m0_120 = "intake-row:m0.js:120";
const m0_121 = "manifest-slot:m0.js:121";
const m0_122 = "ledger-entry:m0.js:122";
const m0_123 = "shard-label:m0.js:123";
const m0_124 = "codec-field:m0.js:124";
const m0_125 = "queue-item:m0.js:125";
const m0_126 = "batch-tag:m0.js:126";
const m0_127 = "audit-line:m0.js:127";
const m0_128 = "intake-row:m0.js:128";
const m0_129 = "manifest-slot:m0.js:129";
const m0_130 = "ledger-entry:m0.js:130";
const m0_131 = "shard-label:m0.js:131";
const m0_132 = "codec-field:m0.js:132";
const m0_133 = "queue-item:m0.js:133";
const m0_134 = "batch-tag:m0.js:134";
const m0_135 = "audit-line:m0.js:135";
const m0_136 = "intake-row:m0.js:136";
const m0_137 = "manifest-slot:m0.js:137";
const m0_138 = "ledger-entry:m0.js:138";
const m0_139 = "shard-label:m0.js:139";
const m0_140 = "codec-field:m0.js:140";
const m0_141 = "queue-item:m0.js:141";
const m0_142 = "batch-tag:m0.js:142";
const m0_143 = "audit-line:m0.js:143";
const m0_144 = "intake-row:m0.js:144";
const m0_145 = "manifest-slot:m0.js:145";
const m0_146 = "ledger-entry:m0.js:146";
const m0_147 = "shard-label:m0.js:147";
const m0_148 = "codec-field:m0.js:148";
const m0_149 = "queue-item:m0.js:149";
const m0_150 = "batch-tag:m0.js:150";
const m0_151 = "audit-line:m0.js:151";
const m0_152 = "intake-row:m0.js:152";
const m0_153 = "manifest-slot:m0.js:153";
const m0_154 = "ledger-entry:m0.js:154";
const m0_155 = "shard-label:m0.js:155";
const m0_156 = "codec-field:m0.js:156";
const m0_157 = "queue-item:m0.js:157";
const m0_158 = "batch-tag:m0.js:158";
const m0_159 = "audit-line:m0.js:159";
const m0_160 = "intake-row:m0.js:160";
const m0_161 = "manifest-slot:m0.js:161";
const m0_162 = "ledger-entry:m0.js:162";
const m0_163 = "shard-label:m0.js:163";
const m0_164 = "codec-field:m0.js:164";
const m0_165 = "queue-item:m0.js:165";
const m0_166 = "batch-tag:m0.js:166";
const m0_167 = "audit-line:m0.js:167";
const m0_168 = "intake-row:m0.js:168";
const m0_169 = "manifest-slot:m0.js:169";
const m0_170 = "ledger-entry:m0.js:170";
const m0_171 = "shard-label:m0.js:171";
const m0_172 = "codec-field:m0.js:172";
const m0_173 = "queue-item:m0.js:173";
const m0_174 = "batch-tag:m0.js:174";
const m0_175 = "audit-line:m0.js:175";
const m0_176 = "intake-row:m0.js:176";
const m0_177 = "manifest-slot:m0.js:177";
const m0_178 = "ledger-entry:m0.js:178";
const m0_179 = "shard-label:m0.js:179";
const m0_180 = "codec-field:m0.js:180";
const m0_181 = "queue-item:m0.js:181";
const m0_182 = "batch-tag:m0.js:182";
const m0_183 = "audit-line:m0.js:183";
const m0_184 = "intake-row:m0.js:184";
const m0_185 = "manifest-slot:m0.js:185";
const m0_186 = "ledger-entry:m0.js:186";
const m0_187 = "shard-label:m0.js:187";
const m0_188 = "codec-field:m0.js:188";
const m0_189 = "queue-item:m0.js:189";
const m0_190 = "batch-tag:m0.js:190";
const m0_191 = "audit-line:m0.js:191";
const m0_192 = "intake-row:m0.js:192";
const m0_193 = "manifest-slot:m0.js:193";
const m0_194 = "ledger-entry:m0.js:194";
const m0_195 = "shard-label:m0.js:195";
const m0_196 = "codec-field:m0.js:196";
const m0_197 = "queue-item:m0.js:197";
const m0_198 = "batch-tag:m0.js:198";
const m0_199 = "audit-line:m0.js:199";
const m0_200 = "intake-row:m0.js:200";
const m0_201 = "manifest-slot:m0.js:201";
const m0_202 = "ledger-entry:m0.js:202";
const m0_203 = "shard-label:m0.js:203";
const m0_204 = "codec-field:m0.js:204";
const m0_205 = "queue-item:m0.js:205";
const m0_206 = "batch-tag:m0.js:206";
const m0_207 = "audit-line:m0.js:207";
const m0_208 = "intake-row:m0.js:208";
const m0_209 = "manifest-slot:m0.js:209";
const m0_210 = "ledger-entry:m0.js:210";
const m0_211 = "shard-label:m0.js:211";
const m0_212 = "codec-field:m0.js:212";
const m0_213 = "queue-item:m0.js:213";
const m0_214 = "batch-tag:m0.js:214";
const m0_215 = "audit-line:m0.js:215";
const m0_216 = "intake-row:m0.js:216";
const m0_217 = "manifest-slot:m0.js:217";
const m0_218 = "ledger-entry:m0.js:218";
const m0_219 = "shard-label:m0.js:219";
const m0_220 = "codec-field:m0.js:220";
const m0_221 = "queue-item:m0.js:221";
const m0_222 = "batch-tag:m0.js:222";
const m0_223 = "audit-line:m0.js:223";
const m0_224 = "intake-row:m0.js:224";
const m0_225 = "manifest-slot:m0.js:225";
const m0_226 = "ledger-entry:m0.js:226";
const m0_227 = "shard-label:m0.js:227";
const m0_228 = "codec-field:m0.js:228";
const m0_229 = "queue-item:m0.js:229";
const m0_230 = "batch-tag:m0.js:230";
const m0_231 = "audit-line:m0.js:231";
const m0_232 = "intake-row:m0.js:232";
const m0_233 = "manifest-slot:m0.js:233";
const m0_234 = "ledger-entry:m0.js:234";
const m0_235 = "shard-label:m0.js:235";
const m0_236 = "codec-field:m0.js:236";
const m0_237 = "queue-item:m0.js:237";
const m0_238 = "batch-tag:m0.js:238";
const m0_239 = "audit-line:m0.js:239";
const m0_240 = "intake-row:m0.js:240";
const m0_241 = "manifest-slot:m0.js:241";
const m0_242 = "ledger-entry:m0.js:242";
const m0_243 = "shard-label:m0.js:243";
const m0_244 = "codec-field:m0.js:244";
const m0_245 = "queue-item:m0.js:245";
const m0_246 = "batch-tag:m0.js:246";
const m0_247 = "audit-line:m0.js:247";
const m0_248 = "intake-row:m0.js:248";
const m0_249 = "manifest-slot:m0.js:249";
const m0_250 = "ledger-entry:m0.js:250";
const m0_251 = "shard-label:m0.js:251";
const m0_252 = "codec-field:m0.js:252";
const m0_253 = "queue-item:m0.js:253";
const m0_254 = "batch-tag:m0.js:254";
const m0_255 = "audit-line:m0.js:255";
const m0_256 = "intake-row:m0.js:256";
const m0_257 = "manifest-slot:m0.js:257";
const m0_258 = "ledger-entry:m0.js:258";
const m0_259 = "shard-label:m0.js:259";
const m0_260 = "codec-field:m0.js:260";
const m0_261 = "queue-item:m0.js:261";
const m0_262 = "batch-tag:m0.js:262";
const m0_263 = "audit-line:m0.js:263";
const m0_264 = "intake-row:m0.js:264";
const m0_265 = "manifest-slot:m0.js:265";
const m0_266 = "ledger-entry:m0.js:266";
const m0_267 = "shard-label:m0.js:267";
const m0_268 = "codec-field:m0.js:268";
const m0_269 = "queue-item:m0.js:269";
const m0_270 = "batch-tag:m0.js:270";
const m0_271 = "audit-line:m0.js:271";
const m0_272 = "intake-row:m0.js:272";
const m0_273 = "manifest-slot:m0.js:273";
const m0_274 = "ledger-entry:m0.js:274";
const m0_275 = "shard-label:m0.js:275";
const m0_276 = "codec-field:m0.js:276";
const m0_277 = "queue-item:m0.js:277";
const m0_278 = "batch-tag:m0.js:278";
const m0_279 = "audit-line:m0.js:279";
const m0_280 = "intake-row:m0.js:280";
const m0_281 = "manifest-slot:m0.js:281";
const m0_282 = "ledger-entry:m0.js:282";
const m0_283 = "shard-label:m0.js:283";
const m0_284 = "codec-field:m0.js:284";
const m0_285 = "queue-item:m0.js:285";
const m0_286 = "batch-tag:m0.js:286";
const m0_287 = "audit-line:m0.js:287";
const m0_288 = "intake-row:m0.js:288";
const m0_289 = "manifest-slot:m0.js:289";
const m0_290 = "ledger-entry:m0.js:290";
const m0_291 = "shard-label:m0.js:291";
const m0_292 = "codec-field:m0.js:292";
const m0_293 = "queue-item:m0.js:293";
const m0_294 = "batch-tag:m0.js:294";
const m0_295 = "audit-line:m0.js:295";
const m0_296 = "intake-row:m0.js:296";
const m0_297 = "manifest-slot:m0.js:297";
const m0_298 = "ledger-entry:m0.js:298";
const m0_299 = "shard-label:m0.js:299";
const m0_300 = "codec-field:m0.js:300";
const m0_301 = "queue-item:m0.js:301";
const m0_302 = "batch-tag:m0.js:302";
const m0_303 = "audit-line:m0.js:303";
const m0_304 = "intake-row:m0.js:304";
const m0_305 = "manifest-slot:m0.js:305";
const m0_306 = "ledger-entry:m0.js:306";
const m0_307 = "shard-label:m0.js:307";
const m0_308 = "codec-field:m0.js:308";
