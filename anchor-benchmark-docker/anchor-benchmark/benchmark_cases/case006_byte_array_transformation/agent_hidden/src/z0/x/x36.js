const localOrder = [2, 5, 3, 1, 0, 4];
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
    parts.push(key + ":" + value + "~" + String(value.length + 36));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("|");
}

export function x36(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b77c1 ^ text.length) >>> 0;
  let b = (0x1b87533f + 36) >>> 0;
  let d = (0x85ebe147 ^ 576) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 36) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x36_060 = "codec-field:x\\x36.js:060";
const x36_061 = "queue-item:x\\x36.js:061";
const x36_062 = "batch-tag:x\\x36.js:062";
const x36_063 = "audit-line:x\\x36.js:063";
const x36_064 = "intake-row:x\\x36.js:064";
const x36_065 = "manifest-slot:x\\x36.js:065";
const x36_066 = "ledger-entry:x\\x36.js:066";
const x36_067 = "shard-label:x\\x36.js:067";
const x36_068 = "codec-field:x\\x36.js:068";
const x36_069 = "queue-item:x\\x36.js:069";
const x36_070 = "batch-tag:x\\x36.js:070";
const x36_071 = "audit-line:x\\x36.js:071";
const x36_072 = "intake-row:x\\x36.js:072";
const x36_073 = "manifest-slot:x\\x36.js:073";
const x36_074 = "ledger-entry:x\\x36.js:074";
const x36_075 = "shard-label:x\\x36.js:075";
const x36_076 = "codec-field:x\\x36.js:076";
const x36_077 = "queue-item:x\\x36.js:077";
const x36_078 = "batch-tag:x\\x36.js:078";
const x36_079 = "audit-line:x\\x36.js:079";
const x36_080 = "intake-row:x\\x36.js:080";
const x36_081 = "manifest-slot:x\\x36.js:081";
const x36_082 = "ledger-entry:x\\x36.js:082";
const x36_083 = "shard-label:x\\x36.js:083";
const x36_084 = "codec-field:x\\x36.js:084";
const x36_085 = "queue-item:x\\x36.js:085";
const x36_086 = "batch-tag:x\\x36.js:086";
const x36_087 = "audit-line:x\\x36.js:087";
const x36_088 = "intake-row:x\\x36.js:088";
const x36_089 = "manifest-slot:x\\x36.js:089";
const x36_090 = "ledger-entry:x\\x36.js:090";
const x36_091 = "shard-label:x\\x36.js:091";
const x36_092 = "codec-field:x\\x36.js:092";
const x36_093 = "queue-item:x\\x36.js:093";
const x36_094 = "batch-tag:x\\x36.js:094";
const x36_095 = "audit-line:x\\x36.js:095";
const x36_096 = "intake-row:x\\x36.js:096";
const x36_097 = "manifest-slot:x\\x36.js:097";
const x36_098 = "ledger-entry:x\\x36.js:098";
const x36_099 = "shard-label:x\\x36.js:099";
const x36_100 = "codec-field:x\\x36.js:100";
const x36_101 = "queue-item:x\\x36.js:101";
const x36_102 = "batch-tag:x\\x36.js:102";
const x36_103 = "audit-line:x\\x36.js:103";
const x36_104 = "intake-row:x\\x36.js:104";
const x36_105 = "manifest-slot:x\\x36.js:105";
const x36_106 = "ledger-entry:x\\x36.js:106";
const x36_107 = "shard-label:x\\x36.js:107";
const x36_108 = "codec-field:x\\x36.js:108";
const x36_109 = "queue-item:x\\x36.js:109";
const x36_110 = "batch-tag:x\\x36.js:110";
const x36_111 = "audit-line:x\\x36.js:111";
const x36_112 = "intake-row:x\\x36.js:112";
const x36_113 = "manifest-slot:x\\x36.js:113";
const x36_114 = "ledger-entry:x\\x36.js:114";
const x36_115 = "shard-label:x\\x36.js:115";
const x36_116 = "codec-field:x\\x36.js:116";
const x36_117 = "queue-item:x\\x36.js:117";
const x36_118 = "batch-tag:x\\x36.js:118";
const x36_119 = "audit-line:x\\x36.js:119";
const x36_120 = "intake-row:x\\x36.js:120";
const x36_121 = "manifest-slot:x\\x36.js:121";
const x36_122 = "ledger-entry:x\\x36.js:122";
const x36_123 = "shard-label:x\\x36.js:123";
const x36_124 = "codec-field:x\\x36.js:124";
const x36_125 = "queue-item:x\\x36.js:125";
const x36_126 = "batch-tag:x\\x36.js:126";
const x36_127 = "audit-line:x\\x36.js:127";
const x36_128 = "intake-row:x\\x36.js:128";
const x36_129 = "manifest-slot:x\\x36.js:129";
const x36_130 = "ledger-entry:x\\x36.js:130";
const x36_131 = "shard-label:x\\x36.js:131";
const x36_132 = "codec-field:x\\x36.js:132";
const x36_133 = "queue-item:x\\x36.js:133";
const x36_134 = "batch-tag:x\\x36.js:134";
const x36_135 = "audit-line:x\\x36.js:135";
const x36_136 = "intake-row:x\\x36.js:136";
const x36_137 = "manifest-slot:x\\x36.js:137";
const x36_138 = "ledger-entry:x\\x36.js:138";
const x36_139 = "shard-label:x\\x36.js:139";
const x36_140 = "codec-field:x\\x36.js:140";
const x36_141 = "queue-item:x\\x36.js:141";
const x36_142 = "batch-tag:x\\x36.js:142";
const x36_143 = "audit-line:x\\x36.js:143";
const x36_144 = "intake-row:x\\x36.js:144";
const x36_145 = "manifest-slot:x\\x36.js:145";
const x36_146 = "ledger-entry:x\\x36.js:146";
const x36_147 = "shard-label:x\\x36.js:147";
const x36_148 = "codec-field:x\\x36.js:148";
const x36_149 = "queue-item:x\\x36.js:149";
const x36_150 = "batch-tag:x\\x36.js:150";
const x36_151 = "audit-line:x\\x36.js:151";
const x36_152 = "intake-row:x\\x36.js:152";
const x36_153 = "manifest-slot:x\\x36.js:153";
const x36_154 = "ledger-entry:x\\x36.js:154";
const x36_155 = "shard-label:x\\x36.js:155";
const x36_156 = "codec-field:x\\x36.js:156";
const x36_157 = "queue-item:x\\x36.js:157";
const x36_158 = "batch-tag:x\\x36.js:158";
const x36_159 = "audit-line:x\\x36.js:159";
const x36_160 = "intake-row:x\\x36.js:160";
const x36_161 = "manifest-slot:x\\x36.js:161";
const x36_162 = "ledger-entry:x\\x36.js:162";
const x36_163 = "shard-label:x\\x36.js:163";
const x36_164 = "codec-field:x\\x36.js:164";
const x36_165 = "queue-item:x\\x36.js:165";
const x36_166 = "batch-tag:x\\x36.js:166";
const x36_167 = "audit-line:x\\x36.js:167";
const x36_168 = "intake-row:x\\x36.js:168";
const x36_169 = "manifest-slot:x\\x36.js:169";
const x36_170 = "ledger-entry:x\\x36.js:170";
const x36_171 = "shard-label:x\\x36.js:171";
const x36_172 = "codec-field:x\\x36.js:172";
const x36_173 = "queue-item:x\\x36.js:173";
const x36_174 = "batch-tag:x\\x36.js:174";
const x36_175 = "audit-line:x\\x36.js:175";
const x36_176 = "intake-row:x\\x36.js:176";
const x36_177 = "manifest-slot:x\\x36.js:177";
const x36_178 = "ledger-entry:x\\x36.js:178";
const x36_179 = "shard-label:x\\x36.js:179";
const x36_180 = "codec-field:x\\x36.js:180";
const x36_181 = "queue-item:x\\x36.js:181";
const x36_182 = "batch-tag:x\\x36.js:182";
const x36_183 = "audit-line:x\\x36.js:183";
const x36_184 = "intake-row:x\\x36.js:184";
const x36_185 = "manifest-slot:x\\x36.js:185";
const x36_186 = "ledger-entry:x\\x36.js:186";
const x36_187 = "shard-label:x\\x36.js:187";
const x36_188 = "codec-field:x\\x36.js:188";
const x36_189 = "queue-item:x\\x36.js:189";
const x36_190 = "batch-tag:x\\x36.js:190";
const x36_191 = "audit-line:x\\x36.js:191";
const x36_192 = "intake-row:x\\x36.js:192";
const x36_193 = "manifest-slot:x\\x36.js:193";
const x36_194 = "ledger-entry:x\\x36.js:194";
const x36_195 = "shard-label:x\\x36.js:195";
const x36_196 = "codec-field:x\\x36.js:196";
const x36_197 = "queue-item:x\\x36.js:197";
