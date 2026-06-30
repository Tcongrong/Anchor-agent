const localOrder = [1, 2, 3, 4, 5, 0];
const localKeys = ["n", "d", "c", "e", "s", "l"];
const localPrefix = "uf_";

function rot(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function rows(tuple) {
  return (Array.isArray(tuple) ? tuple : [])
    .slice()
    .sort((left, right) => Number(left.ix || 0) - Number(right.ix || 0));
}

function mapRows(tuple) {
  const map = new Map();
  for (const row of rows(tuple)) map.set(String(row.k || ""), String(row.plain || row.v || ""));
  return map;
}

function source(tuple, context) {
  const map = mapRows(tuple);
  const parts = [];
  for (const ix of localOrder) {
    const key = localKeys[ix];
    const value = map.get(key) || "";
    parts.push(key + "." + value + "|" + String(value.length + 29));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x29(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7284 ^ text.length) >>> 0;
  let b = (0x1b874d7a + 29) >>> 0;
  let d = (0x85ebe8ac ^ 464) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 29) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x29_060 = "codec-field:x\\x29.js:060";
const x29_061 = "queue-item:x\\x29.js:061";
const x29_062 = "batch-tag:x\\x29.js:062";
const x29_063 = "audit-line:x\\x29.js:063";
const x29_064 = "intake-row:x\\x29.js:064";
const x29_065 = "manifest-slot:x\\x29.js:065";
const x29_066 = "ledger-entry:x\\x29.js:066";
const x29_067 = "shard-label:x\\x29.js:067";
const x29_068 = "codec-field:x\\x29.js:068";
const x29_069 = "queue-item:x\\x29.js:069";
const x29_070 = "batch-tag:x\\x29.js:070";
const x29_071 = "audit-line:x\\x29.js:071";
const x29_072 = "intake-row:x\\x29.js:072";
const x29_073 = "manifest-slot:x\\x29.js:073";
const x29_074 = "ledger-entry:x\\x29.js:074";
const x29_075 = "shard-label:x\\x29.js:075";
const x29_076 = "codec-field:x\\x29.js:076";
const x29_077 = "queue-item:x\\x29.js:077";
const x29_078 = "batch-tag:x\\x29.js:078";
const x29_079 = "audit-line:x\\x29.js:079";
const x29_080 = "intake-row:x\\x29.js:080";
const x29_081 = "manifest-slot:x\\x29.js:081";
const x29_082 = "ledger-entry:x\\x29.js:082";
const x29_083 = "shard-label:x\\x29.js:083";
const x29_084 = "codec-field:x\\x29.js:084";
const x29_085 = "queue-item:x\\x29.js:085";
const x29_086 = "batch-tag:x\\x29.js:086";
const x29_087 = "audit-line:x\\x29.js:087";
const x29_088 = "intake-row:x\\x29.js:088";
const x29_089 = "manifest-slot:x\\x29.js:089";
const x29_090 = "ledger-entry:x\\x29.js:090";
const x29_091 = "shard-label:x\\x29.js:091";
const x29_092 = "codec-field:x\\x29.js:092";
const x29_093 = "queue-item:x\\x29.js:093";
const x29_094 = "batch-tag:x\\x29.js:094";
const x29_095 = "audit-line:x\\x29.js:095";
const x29_096 = "intake-row:x\\x29.js:096";
const x29_097 = "manifest-slot:x\\x29.js:097";
const x29_098 = "ledger-entry:x\\x29.js:098";
const x29_099 = "shard-label:x\\x29.js:099";
const x29_100 = "codec-field:x\\x29.js:100";
const x29_101 = "queue-item:x\\x29.js:101";
const x29_102 = "batch-tag:x\\x29.js:102";
const x29_103 = "audit-line:x\\x29.js:103";
const x29_104 = "intake-row:x\\x29.js:104";
const x29_105 = "manifest-slot:x\\x29.js:105";
const x29_106 = "ledger-entry:x\\x29.js:106";
const x29_107 = "shard-label:x\\x29.js:107";
const x29_108 = "codec-field:x\\x29.js:108";
const x29_109 = "queue-item:x\\x29.js:109";
const x29_110 = "batch-tag:x\\x29.js:110";
const x29_111 = "audit-line:x\\x29.js:111";
const x29_112 = "intake-row:x\\x29.js:112";
const x29_113 = "manifest-slot:x\\x29.js:113";
const x29_114 = "ledger-entry:x\\x29.js:114";
const x29_115 = "shard-label:x\\x29.js:115";
const x29_116 = "codec-field:x\\x29.js:116";
const x29_117 = "queue-item:x\\x29.js:117";
const x29_118 = "batch-tag:x\\x29.js:118";
const x29_119 = "audit-line:x\\x29.js:119";
const x29_120 = "intake-row:x\\x29.js:120";
const x29_121 = "manifest-slot:x\\x29.js:121";
const x29_122 = "ledger-entry:x\\x29.js:122";
const x29_123 = "shard-label:x\\x29.js:123";
const x29_124 = "codec-field:x\\x29.js:124";
const x29_125 = "queue-item:x\\x29.js:125";
const x29_126 = "batch-tag:x\\x29.js:126";
const x29_127 = "audit-line:x\\x29.js:127";
const x29_128 = "intake-row:x\\x29.js:128";
const x29_129 = "manifest-slot:x\\x29.js:129";
const x29_130 = "ledger-entry:x\\x29.js:130";
const x29_131 = "shard-label:x\\x29.js:131";
const x29_132 = "codec-field:x\\x29.js:132";
const x29_133 = "queue-item:x\\x29.js:133";
const x29_134 = "batch-tag:x\\x29.js:134";
const x29_135 = "audit-line:x\\x29.js:135";
const x29_136 = "intake-row:x\\x29.js:136";
const x29_137 = "manifest-slot:x\\x29.js:137";
const x29_138 = "ledger-entry:x\\x29.js:138";
const x29_139 = "shard-label:x\\x29.js:139";
const x29_140 = "codec-field:x\\x29.js:140";
const x29_141 = "queue-item:x\\x29.js:141";
const x29_142 = "batch-tag:x\\x29.js:142";
const x29_143 = "audit-line:x\\x29.js:143";
const x29_144 = "intake-row:x\\x29.js:144";
const x29_145 = "manifest-slot:x\\x29.js:145";
const x29_146 = "ledger-entry:x\\x29.js:146";
const x29_147 = "shard-label:x\\x29.js:147";
const x29_148 = "codec-field:x\\x29.js:148";
const x29_149 = "queue-item:x\\x29.js:149";
const x29_150 = "batch-tag:x\\x29.js:150";
const x29_151 = "audit-line:x\\x29.js:151";
const x29_152 = "intake-row:x\\x29.js:152";
const x29_153 = "manifest-slot:x\\x29.js:153";
const x29_154 = "ledger-entry:x\\x29.js:154";
const x29_155 = "shard-label:x\\x29.js:155";
const x29_156 = "codec-field:x\\x29.js:156";
const x29_157 = "queue-item:x\\x29.js:157";
const x29_158 = "batch-tag:x\\x29.js:158";
const x29_159 = "audit-line:x\\x29.js:159";
const x29_160 = "intake-row:x\\x29.js:160";
const x29_161 = "manifest-slot:x\\x29.js:161";
const x29_162 = "ledger-entry:x\\x29.js:162";
const x29_163 = "shard-label:x\\x29.js:163";
const x29_164 = "codec-field:x\\x29.js:164";
const x29_165 = "queue-item:x\\x29.js:165";
const x29_166 = "batch-tag:x\\x29.js:166";
const x29_167 = "audit-line:x\\x29.js:167";
const x29_168 = "intake-row:x\\x29.js:168";
const x29_169 = "manifest-slot:x\\x29.js:169";
const x29_170 = "ledger-entry:x\\x29.js:170";
const x29_171 = "shard-label:x\\x29.js:171";
const x29_172 = "codec-field:x\\x29.js:172";
const x29_173 = "queue-item:x\\x29.js:173";
const x29_174 = "batch-tag:x\\x29.js:174";
const x29_175 = "audit-line:x\\x29.js:175";
const x29_176 = "intake-row:x\\x29.js:176";
const x29_177 = "manifest-slot:x\\x29.js:177";
const x29_178 = "ledger-entry:x\\x29.js:178";
const x29_179 = "shard-label:x\\x29.js:179";
const x29_180 = "codec-field:x\\x29.js:180";
const x29_181 = "queue-item:x\\x29.js:181";
const x29_182 = "batch-tag:x\\x29.js:182";
const x29_183 = "audit-line:x\\x29.js:183";
const x29_184 = "intake-row:x\\x29.js:184";
const x29_185 = "manifest-slot:x\\x29.js:185";
const x29_186 = "ledger-entry:x\\x29.js:186";
const x29_187 = "shard-label:x\\x29.js:187";
const x29_188 = "codec-field:x\\x29.js:188";
const x29_189 = "queue-item:x\\x29.js:189";
const x29_190 = "batch-tag:x\\x29.js:190";
const x29_191 = "audit-line:x\\x29.js:191";
const x29_192 = "intake-row:x\\x29.js:192";
const x29_193 = "manifest-slot:x\\x29.js:193";
const x29_194 = "ledger-entry:x\\x29.js:194";
const x29_195 = "shard-label:x\\x29.js:195";
const x29_196 = "codec-field:x\\x29.js:196";
const x29_197 = "queue-item:x\\x29.js:197";
