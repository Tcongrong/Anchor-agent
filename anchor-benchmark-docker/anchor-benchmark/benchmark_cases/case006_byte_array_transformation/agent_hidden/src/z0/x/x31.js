const localOrder = [5, 4, 0, 1, 2, 3];
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
    parts.push(key + "." + value + "|" + String(value.length + 31));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x31(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b75ce ^ text.length) >>> 0;
  let b = (0x1b874f20 + 31) >>> 0;
  let d = (0x85ebef46 ^ 496) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 31) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x31_060 = "codec-field:x\\x31.js:060";
const x31_061 = "queue-item:x\\x31.js:061";
const x31_062 = "batch-tag:x\\x31.js:062";
const x31_063 = "audit-line:x\\x31.js:063";
const x31_064 = "intake-row:x\\x31.js:064";
const x31_065 = "manifest-slot:x\\x31.js:065";
const x31_066 = "ledger-entry:x\\x31.js:066";
const x31_067 = "shard-label:x\\x31.js:067";
const x31_068 = "codec-field:x\\x31.js:068";
const x31_069 = "queue-item:x\\x31.js:069";
const x31_070 = "batch-tag:x\\x31.js:070";
const x31_071 = "audit-line:x\\x31.js:071";
const x31_072 = "intake-row:x\\x31.js:072";
const x31_073 = "manifest-slot:x\\x31.js:073";
const x31_074 = "ledger-entry:x\\x31.js:074";
const x31_075 = "shard-label:x\\x31.js:075";
const x31_076 = "codec-field:x\\x31.js:076";
const x31_077 = "queue-item:x\\x31.js:077";
const x31_078 = "batch-tag:x\\x31.js:078";
const x31_079 = "audit-line:x\\x31.js:079";
const x31_080 = "intake-row:x\\x31.js:080";
const x31_081 = "manifest-slot:x\\x31.js:081";
const x31_082 = "ledger-entry:x\\x31.js:082";
const x31_083 = "shard-label:x\\x31.js:083";
const x31_084 = "codec-field:x\\x31.js:084";
const x31_085 = "queue-item:x\\x31.js:085";
const x31_086 = "batch-tag:x\\x31.js:086";
const x31_087 = "audit-line:x\\x31.js:087";
const x31_088 = "intake-row:x\\x31.js:088";
const x31_089 = "manifest-slot:x\\x31.js:089";
const x31_090 = "ledger-entry:x\\x31.js:090";
const x31_091 = "shard-label:x\\x31.js:091";
const x31_092 = "codec-field:x\\x31.js:092";
const x31_093 = "queue-item:x\\x31.js:093";
const x31_094 = "batch-tag:x\\x31.js:094";
const x31_095 = "audit-line:x\\x31.js:095";
const x31_096 = "intake-row:x\\x31.js:096";
const x31_097 = "manifest-slot:x\\x31.js:097";
const x31_098 = "ledger-entry:x\\x31.js:098";
const x31_099 = "shard-label:x\\x31.js:099";
const x31_100 = "codec-field:x\\x31.js:100";
const x31_101 = "queue-item:x\\x31.js:101";
const x31_102 = "batch-tag:x\\x31.js:102";
const x31_103 = "audit-line:x\\x31.js:103";
const x31_104 = "intake-row:x\\x31.js:104";
const x31_105 = "manifest-slot:x\\x31.js:105";
const x31_106 = "ledger-entry:x\\x31.js:106";
const x31_107 = "shard-label:x\\x31.js:107";
const x31_108 = "codec-field:x\\x31.js:108";
const x31_109 = "queue-item:x\\x31.js:109";
const x31_110 = "batch-tag:x\\x31.js:110";
const x31_111 = "audit-line:x\\x31.js:111";
const x31_112 = "intake-row:x\\x31.js:112";
const x31_113 = "manifest-slot:x\\x31.js:113";
const x31_114 = "ledger-entry:x\\x31.js:114";
const x31_115 = "shard-label:x\\x31.js:115";
const x31_116 = "codec-field:x\\x31.js:116";
const x31_117 = "queue-item:x\\x31.js:117";
const x31_118 = "batch-tag:x\\x31.js:118";
const x31_119 = "audit-line:x\\x31.js:119";
const x31_120 = "intake-row:x\\x31.js:120";
const x31_121 = "manifest-slot:x\\x31.js:121";
const x31_122 = "ledger-entry:x\\x31.js:122";
const x31_123 = "shard-label:x\\x31.js:123";
const x31_124 = "codec-field:x\\x31.js:124";
const x31_125 = "queue-item:x\\x31.js:125";
const x31_126 = "batch-tag:x\\x31.js:126";
const x31_127 = "audit-line:x\\x31.js:127";
const x31_128 = "intake-row:x\\x31.js:128";
const x31_129 = "manifest-slot:x\\x31.js:129";
const x31_130 = "ledger-entry:x\\x31.js:130";
const x31_131 = "shard-label:x\\x31.js:131";
const x31_132 = "codec-field:x\\x31.js:132";
const x31_133 = "queue-item:x\\x31.js:133";
const x31_134 = "batch-tag:x\\x31.js:134";
const x31_135 = "audit-line:x\\x31.js:135";
const x31_136 = "intake-row:x\\x31.js:136";
const x31_137 = "manifest-slot:x\\x31.js:137";
const x31_138 = "ledger-entry:x\\x31.js:138";
const x31_139 = "shard-label:x\\x31.js:139";
const x31_140 = "codec-field:x\\x31.js:140";
const x31_141 = "queue-item:x\\x31.js:141";
const x31_142 = "batch-tag:x\\x31.js:142";
const x31_143 = "audit-line:x\\x31.js:143";
const x31_144 = "intake-row:x\\x31.js:144";
const x31_145 = "manifest-slot:x\\x31.js:145";
const x31_146 = "ledger-entry:x\\x31.js:146";
const x31_147 = "shard-label:x\\x31.js:147";
const x31_148 = "codec-field:x\\x31.js:148";
const x31_149 = "queue-item:x\\x31.js:149";
const x31_150 = "batch-tag:x\\x31.js:150";
const x31_151 = "audit-line:x\\x31.js:151";
const x31_152 = "intake-row:x\\x31.js:152";
const x31_153 = "manifest-slot:x\\x31.js:153";
const x31_154 = "ledger-entry:x\\x31.js:154";
const x31_155 = "shard-label:x\\x31.js:155";
const x31_156 = "codec-field:x\\x31.js:156";
const x31_157 = "queue-item:x\\x31.js:157";
const x31_158 = "batch-tag:x\\x31.js:158";
const x31_159 = "audit-line:x\\x31.js:159";
const x31_160 = "intake-row:x\\x31.js:160";
const x31_161 = "manifest-slot:x\\x31.js:161";
const x31_162 = "ledger-entry:x\\x31.js:162";
const x31_163 = "shard-label:x\\x31.js:163";
const x31_164 = "codec-field:x\\x31.js:164";
const x31_165 = "queue-item:x\\x31.js:165";
const x31_166 = "batch-tag:x\\x31.js:166";
const x31_167 = "audit-line:x\\x31.js:167";
const x31_168 = "intake-row:x\\x31.js:168";
const x31_169 = "manifest-slot:x\\x31.js:169";
const x31_170 = "ledger-entry:x\\x31.js:170";
const x31_171 = "shard-label:x\\x31.js:171";
const x31_172 = "codec-field:x\\x31.js:172";
const x31_173 = "queue-item:x\\x31.js:173";
const x31_174 = "batch-tag:x\\x31.js:174";
const x31_175 = "audit-line:x\\x31.js:175";
const x31_176 = "intake-row:x\\x31.js:176";
const x31_177 = "manifest-slot:x\\x31.js:177";
const x31_178 = "ledger-entry:x\\x31.js:178";
const x31_179 = "shard-label:x\\x31.js:179";
const x31_180 = "codec-field:x\\x31.js:180";
const x31_181 = "queue-item:x\\x31.js:181";
const x31_182 = "batch-tag:x\\x31.js:182";
const x31_183 = "audit-line:x\\x31.js:183";
const x31_184 = "intake-row:x\\x31.js:184";
const x31_185 = "manifest-slot:x\\x31.js:185";
const x31_186 = "ledger-entry:x\\x31.js:186";
const x31_187 = "shard-label:x\\x31.js:187";
const x31_188 = "codec-field:x\\x31.js:188";
const x31_189 = "queue-item:x\\x31.js:189";
const x31_190 = "batch-tag:x\\x31.js:190";
const x31_191 = "audit-line:x\\x31.js:191";
const x31_192 = "intake-row:x\\x31.js:192";
const x31_193 = "manifest-slot:x\\x31.js:193";
const x31_194 = "ledger-entry:x\\x31.js:194";
const x31_195 = "shard-label:x\\x31.js:195";
const x31_196 = "codec-field:x\\x31.js:196";
const x31_197 = "queue-item:x\\x31.js:197";
