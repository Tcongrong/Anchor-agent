const localOrder = [5, 4, 0, 1, 2, 3];
const localKeys = ["n", "d", "c", "e", "s", "l"];
const localPrefix = "ux_";

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
    parts.push(key + ":" + value + "~" + String(value.length + 42));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x42(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b6967 ^ text.length) >>> 0;
  let b = (0x1b875831 + 42) >>> 0;
  let d = (0x85ebf835 ^ 672) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 42) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x42_060 = "codec-field:x\\x42.js:060";
const x42_061 = "queue-item:x\\x42.js:061";
const x42_062 = "batch-tag:x\\x42.js:062";
const x42_063 = "audit-line:x\\x42.js:063";
const x42_064 = "intake-row:x\\x42.js:064";
const x42_065 = "manifest-slot:x\\x42.js:065";
const x42_066 = "ledger-entry:x\\x42.js:066";
const x42_067 = "shard-label:x\\x42.js:067";
const x42_068 = "codec-field:x\\x42.js:068";
const x42_069 = "queue-item:x\\x42.js:069";
const x42_070 = "batch-tag:x\\x42.js:070";
const x42_071 = "audit-line:x\\x42.js:071";
const x42_072 = "intake-row:x\\x42.js:072";
const x42_073 = "manifest-slot:x\\x42.js:073";
const x42_074 = "ledger-entry:x\\x42.js:074";
const x42_075 = "shard-label:x\\x42.js:075";
const x42_076 = "codec-field:x\\x42.js:076";
const x42_077 = "queue-item:x\\x42.js:077";
const x42_078 = "batch-tag:x\\x42.js:078";
const x42_079 = "audit-line:x\\x42.js:079";
const x42_080 = "intake-row:x\\x42.js:080";
const x42_081 = "manifest-slot:x\\x42.js:081";
const x42_082 = "ledger-entry:x\\x42.js:082";
const x42_083 = "shard-label:x\\x42.js:083";
const x42_084 = "codec-field:x\\x42.js:084";
const x42_085 = "queue-item:x\\x42.js:085";
const x42_086 = "batch-tag:x\\x42.js:086";
const x42_087 = "audit-line:x\\x42.js:087";
const x42_088 = "intake-row:x\\x42.js:088";
const x42_089 = "manifest-slot:x\\x42.js:089";
const x42_090 = "ledger-entry:x\\x42.js:090";
const x42_091 = "shard-label:x\\x42.js:091";
const x42_092 = "codec-field:x\\x42.js:092";
const x42_093 = "queue-item:x\\x42.js:093";
const x42_094 = "batch-tag:x\\x42.js:094";
const x42_095 = "audit-line:x\\x42.js:095";
const x42_096 = "intake-row:x\\x42.js:096";
const x42_097 = "manifest-slot:x\\x42.js:097";
const x42_098 = "ledger-entry:x\\x42.js:098";
const x42_099 = "shard-label:x\\x42.js:099";
const x42_100 = "codec-field:x\\x42.js:100";
const x42_101 = "queue-item:x\\x42.js:101";
const x42_102 = "batch-tag:x\\x42.js:102";
const x42_103 = "audit-line:x\\x42.js:103";
const x42_104 = "intake-row:x\\x42.js:104";
const x42_105 = "manifest-slot:x\\x42.js:105";
const x42_106 = "ledger-entry:x\\x42.js:106";
const x42_107 = "shard-label:x\\x42.js:107";
const x42_108 = "codec-field:x\\x42.js:108";
const x42_109 = "queue-item:x\\x42.js:109";
const x42_110 = "batch-tag:x\\x42.js:110";
const x42_111 = "audit-line:x\\x42.js:111";
const x42_112 = "intake-row:x\\x42.js:112";
const x42_113 = "manifest-slot:x\\x42.js:113";
const x42_114 = "ledger-entry:x\\x42.js:114";
const x42_115 = "shard-label:x\\x42.js:115";
const x42_116 = "codec-field:x\\x42.js:116";
const x42_117 = "queue-item:x\\x42.js:117";
const x42_118 = "batch-tag:x\\x42.js:118";
const x42_119 = "audit-line:x\\x42.js:119";
const x42_120 = "intake-row:x\\x42.js:120";
const x42_121 = "manifest-slot:x\\x42.js:121";
const x42_122 = "ledger-entry:x\\x42.js:122";
const x42_123 = "shard-label:x\\x42.js:123";
const x42_124 = "codec-field:x\\x42.js:124";
const x42_125 = "queue-item:x\\x42.js:125";
const x42_126 = "batch-tag:x\\x42.js:126";
const x42_127 = "audit-line:x\\x42.js:127";
const x42_128 = "intake-row:x\\x42.js:128";
const x42_129 = "manifest-slot:x\\x42.js:129";
const x42_130 = "ledger-entry:x\\x42.js:130";
const x42_131 = "shard-label:x\\x42.js:131";
const x42_132 = "codec-field:x\\x42.js:132";
const x42_133 = "queue-item:x\\x42.js:133";
const x42_134 = "batch-tag:x\\x42.js:134";
const x42_135 = "audit-line:x\\x42.js:135";
const x42_136 = "intake-row:x\\x42.js:136";
const x42_137 = "manifest-slot:x\\x42.js:137";
const x42_138 = "ledger-entry:x\\x42.js:138";
const x42_139 = "shard-label:x\\x42.js:139";
const x42_140 = "codec-field:x\\x42.js:140";
const x42_141 = "queue-item:x\\x42.js:141";
const x42_142 = "batch-tag:x\\x42.js:142";
const x42_143 = "audit-line:x\\x42.js:143";
const x42_144 = "intake-row:x\\x42.js:144";
const x42_145 = "manifest-slot:x\\x42.js:145";
const x42_146 = "ledger-entry:x\\x42.js:146";
const x42_147 = "shard-label:x\\x42.js:147";
const x42_148 = "codec-field:x\\x42.js:148";
const x42_149 = "queue-item:x\\x42.js:149";
const x42_150 = "batch-tag:x\\x42.js:150";
const x42_151 = "audit-line:x\\x42.js:151";
const x42_152 = "intake-row:x\\x42.js:152";
const x42_153 = "manifest-slot:x\\x42.js:153";
const x42_154 = "ledger-entry:x\\x42.js:154";
const x42_155 = "shard-label:x\\x42.js:155";
const x42_156 = "codec-field:x\\x42.js:156";
const x42_157 = "queue-item:x\\x42.js:157";
const x42_158 = "batch-tag:x\\x42.js:158";
const x42_159 = "audit-line:x\\x42.js:159";
const x42_160 = "intake-row:x\\x42.js:160";
const x42_161 = "manifest-slot:x\\x42.js:161";
const x42_162 = "ledger-entry:x\\x42.js:162";
const x42_163 = "shard-label:x\\x42.js:163";
const x42_164 = "codec-field:x\\x42.js:164";
const x42_165 = "queue-item:x\\x42.js:165";
const x42_166 = "batch-tag:x\\x42.js:166";
const x42_167 = "audit-line:x\\x42.js:167";
const x42_168 = "intake-row:x\\x42.js:168";
const x42_169 = "manifest-slot:x\\x42.js:169";
const x42_170 = "ledger-entry:x\\x42.js:170";
const x42_171 = "shard-label:x\\x42.js:171";
const x42_172 = "codec-field:x\\x42.js:172";
const x42_173 = "queue-item:x\\x42.js:173";
const x42_174 = "batch-tag:x\\x42.js:174";
const x42_175 = "audit-line:x\\x42.js:175";
const x42_176 = "intake-row:x\\x42.js:176";
const x42_177 = "manifest-slot:x\\x42.js:177";
const x42_178 = "ledger-entry:x\\x42.js:178";
const x42_179 = "shard-label:x\\x42.js:179";
const x42_180 = "codec-field:x\\x42.js:180";
const x42_181 = "queue-item:x\\x42.js:181";
const x42_182 = "batch-tag:x\\x42.js:182";
const x42_183 = "audit-line:x\\x42.js:183";
const x42_184 = "intake-row:x\\x42.js:184";
const x42_185 = "manifest-slot:x\\x42.js:185";
const x42_186 = "ledger-entry:x\\x42.js:186";
const x42_187 = "shard-label:x\\x42.js:187";
const x42_188 = "codec-field:x\\x42.js:188";
const x42_189 = "queue-item:x\\x42.js:189";
const x42_190 = "batch-tag:x\\x42.js:190";
const x42_191 = "audit-line:x\\x42.js:191";
const x42_192 = "intake-row:x\\x42.js:192";
const x42_193 = "manifest-slot:x\\x42.js:193";
const x42_194 = "ledger-entry:x\\x42.js:194";
const x42_195 = "shard-label:x\\x42.js:195";
const x42_196 = "codec-field:x\\x42.js:196";
const x42_197 = "queue-item:x\\x42.js:197";
