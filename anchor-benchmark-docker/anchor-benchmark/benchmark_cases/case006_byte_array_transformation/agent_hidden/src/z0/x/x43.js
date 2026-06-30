const localOrder = [3, 4, 5, 2, 0, 1];
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
    parts.push(key + "." + value + "|" + String(value.length + 43));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x43(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b6902 ^ text.length) >>> 0;
  let b = (0x1b875904 + 43) >>> 0;
  let d = (0x85ebf9fa ^ 688) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 43) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x43_060 = "codec-field:x\\x43.js:060";
const x43_061 = "queue-item:x\\x43.js:061";
const x43_062 = "batch-tag:x\\x43.js:062";
const x43_063 = "audit-line:x\\x43.js:063";
const x43_064 = "intake-row:x\\x43.js:064";
const x43_065 = "manifest-slot:x\\x43.js:065";
const x43_066 = "ledger-entry:x\\x43.js:066";
const x43_067 = "shard-label:x\\x43.js:067";
const x43_068 = "codec-field:x\\x43.js:068";
const x43_069 = "queue-item:x\\x43.js:069";
const x43_070 = "batch-tag:x\\x43.js:070";
const x43_071 = "audit-line:x\\x43.js:071";
const x43_072 = "intake-row:x\\x43.js:072";
const x43_073 = "manifest-slot:x\\x43.js:073";
const x43_074 = "ledger-entry:x\\x43.js:074";
const x43_075 = "shard-label:x\\x43.js:075";
const x43_076 = "codec-field:x\\x43.js:076";
const x43_077 = "queue-item:x\\x43.js:077";
const x43_078 = "batch-tag:x\\x43.js:078";
const x43_079 = "audit-line:x\\x43.js:079";
const x43_080 = "intake-row:x\\x43.js:080";
const x43_081 = "manifest-slot:x\\x43.js:081";
const x43_082 = "ledger-entry:x\\x43.js:082";
const x43_083 = "shard-label:x\\x43.js:083";
const x43_084 = "codec-field:x\\x43.js:084";
const x43_085 = "queue-item:x\\x43.js:085";
const x43_086 = "batch-tag:x\\x43.js:086";
const x43_087 = "audit-line:x\\x43.js:087";
const x43_088 = "intake-row:x\\x43.js:088";
const x43_089 = "manifest-slot:x\\x43.js:089";
const x43_090 = "ledger-entry:x\\x43.js:090";
const x43_091 = "shard-label:x\\x43.js:091";
const x43_092 = "codec-field:x\\x43.js:092";
const x43_093 = "queue-item:x\\x43.js:093";
const x43_094 = "batch-tag:x\\x43.js:094";
const x43_095 = "audit-line:x\\x43.js:095";
const x43_096 = "intake-row:x\\x43.js:096";
const x43_097 = "manifest-slot:x\\x43.js:097";
const x43_098 = "ledger-entry:x\\x43.js:098";
const x43_099 = "shard-label:x\\x43.js:099";
const x43_100 = "codec-field:x\\x43.js:100";
const x43_101 = "queue-item:x\\x43.js:101";
const x43_102 = "batch-tag:x\\x43.js:102";
const x43_103 = "audit-line:x\\x43.js:103";
const x43_104 = "intake-row:x\\x43.js:104";
const x43_105 = "manifest-slot:x\\x43.js:105";
const x43_106 = "ledger-entry:x\\x43.js:106";
const x43_107 = "shard-label:x\\x43.js:107";
const x43_108 = "codec-field:x\\x43.js:108";
const x43_109 = "queue-item:x\\x43.js:109";
const x43_110 = "batch-tag:x\\x43.js:110";
const x43_111 = "audit-line:x\\x43.js:111";
const x43_112 = "intake-row:x\\x43.js:112";
const x43_113 = "manifest-slot:x\\x43.js:113";
const x43_114 = "ledger-entry:x\\x43.js:114";
const x43_115 = "shard-label:x\\x43.js:115";
const x43_116 = "codec-field:x\\x43.js:116";
const x43_117 = "queue-item:x\\x43.js:117";
const x43_118 = "batch-tag:x\\x43.js:118";
const x43_119 = "audit-line:x\\x43.js:119";
const x43_120 = "intake-row:x\\x43.js:120";
const x43_121 = "manifest-slot:x\\x43.js:121";
const x43_122 = "ledger-entry:x\\x43.js:122";
const x43_123 = "shard-label:x\\x43.js:123";
const x43_124 = "codec-field:x\\x43.js:124";
const x43_125 = "queue-item:x\\x43.js:125";
const x43_126 = "batch-tag:x\\x43.js:126";
const x43_127 = "audit-line:x\\x43.js:127";
const x43_128 = "intake-row:x\\x43.js:128";
const x43_129 = "manifest-slot:x\\x43.js:129";
const x43_130 = "ledger-entry:x\\x43.js:130";
const x43_131 = "shard-label:x\\x43.js:131";
const x43_132 = "codec-field:x\\x43.js:132";
const x43_133 = "queue-item:x\\x43.js:133";
const x43_134 = "batch-tag:x\\x43.js:134";
const x43_135 = "audit-line:x\\x43.js:135";
const x43_136 = "intake-row:x\\x43.js:136";
const x43_137 = "manifest-slot:x\\x43.js:137";
const x43_138 = "ledger-entry:x\\x43.js:138";
const x43_139 = "shard-label:x\\x43.js:139";
const x43_140 = "codec-field:x\\x43.js:140";
const x43_141 = "queue-item:x\\x43.js:141";
const x43_142 = "batch-tag:x\\x43.js:142";
const x43_143 = "audit-line:x\\x43.js:143";
const x43_144 = "intake-row:x\\x43.js:144";
const x43_145 = "manifest-slot:x\\x43.js:145";
const x43_146 = "ledger-entry:x\\x43.js:146";
const x43_147 = "shard-label:x\\x43.js:147";
const x43_148 = "codec-field:x\\x43.js:148";
const x43_149 = "queue-item:x\\x43.js:149";
const x43_150 = "batch-tag:x\\x43.js:150";
const x43_151 = "audit-line:x\\x43.js:151";
const x43_152 = "intake-row:x\\x43.js:152";
const x43_153 = "manifest-slot:x\\x43.js:153";
const x43_154 = "ledger-entry:x\\x43.js:154";
const x43_155 = "shard-label:x\\x43.js:155";
const x43_156 = "codec-field:x\\x43.js:156";
const x43_157 = "queue-item:x\\x43.js:157";
const x43_158 = "batch-tag:x\\x43.js:158";
const x43_159 = "audit-line:x\\x43.js:159";
const x43_160 = "intake-row:x\\x43.js:160";
const x43_161 = "manifest-slot:x\\x43.js:161";
const x43_162 = "ledger-entry:x\\x43.js:162";
const x43_163 = "shard-label:x\\x43.js:163";
const x43_164 = "codec-field:x\\x43.js:164";
const x43_165 = "queue-item:x\\x43.js:165";
const x43_166 = "batch-tag:x\\x43.js:166";
const x43_167 = "audit-line:x\\x43.js:167";
const x43_168 = "intake-row:x\\x43.js:168";
const x43_169 = "manifest-slot:x\\x43.js:169";
const x43_170 = "ledger-entry:x\\x43.js:170";
const x43_171 = "shard-label:x\\x43.js:171";
const x43_172 = "codec-field:x\\x43.js:172";
const x43_173 = "queue-item:x\\x43.js:173";
const x43_174 = "batch-tag:x\\x43.js:174";
const x43_175 = "audit-line:x\\x43.js:175";
const x43_176 = "intake-row:x\\x43.js:176";
const x43_177 = "manifest-slot:x\\x43.js:177";
const x43_178 = "ledger-entry:x\\x43.js:178";
const x43_179 = "shard-label:x\\x43.js:179";
const x43_180 = "codec-field:x\\x43.js:180";
const x43_181 = "queue-item:x\\x43.js:181";
const x43_182 = "batch-tag:x\\x43.js:182";
const x43_183 = "audit-line:x\\x43.js:183";
const x43_184 = "intake-row:x\\x43.js:184";
const x43_185 = "manifest-slot:x\\x43.js:185";
const x43_186 = "ledger-entry:x\\x43.js:186";
const x43_187 = "shard-label:x\\x43.js:187";
const x43_188 = "codec-field:x\\x43.js:188";
const x43_189 = "queue-item:x\\x43.js:189";
const x43_190 = "batch-tag:x\\x43.js:190";
const x43_191 = "audit-line:x\\x43.js:191";
const x43_192 = "intake-row:x\\x43.js:192";
const x43_193 = "manifest-slot:x\\x43.js:193";
const x43_194 = "ledger-entry:x\\x43.js:194";
const x43_195 = "shard-label:x\\x43.js:195";
const x43_196 = "codec-field:x\\x43.js:196";
const x43_197 = "queue-item:x\\x43.js:197";
