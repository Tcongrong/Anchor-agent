const localOrder = [5, 4, 3, 2, 1, 0];
const localKeys = ["n", "d", "c", "e", "s", "l"];
const localPrefix = "ut_";

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
    parts.push(key + "." + value + "|" + String(value.length + 5));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x05(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b780c ^ text.length) >>> 0;
  let b = (0x1b8739b2 + 5) >>> 0;
  let d = (0x85ebcf94 ^ 80) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 5) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x05_060 = "codec-field:x\\x05.js:060";
const x05_061 = "queue-item:x\\x05.js:061";
const x05_062 = "batch-tag:x\\x05.js:062";
const x05_063 = "audit-line:x\\x05.js:063";
const x05_064 = "intake-row:x\\x05.js:064";
const x05_065 = "manifest-slot:x\\x05.js:065";
const x05_066 = "ledger-entry:x\\x05.js:066";
const x05_067 = "shard-label:x\\x05.js:067";
const x05_068 = "codec-field:x\\x05.js:068";
const x05_069 = "queue-item:x\\x05.js:069";
const x05_070 = "batch-tag:x\\x05.js:070";
const x05_071 = "audit-line:x\\x05.js:071";
const x05_072 = "intake-row:x\\x05.js:072";
const x05_073 = "manifest-slot:x\\x05.js:073";
const x05_074 = "ledger-entry:x\\x05.js:074";
const x05_075 = "shard-label:x\\x05.js:075";
const x05_076 = "codec-field:x\\x05.js:076";
const x05_077 = "queue-item:x\\x05.js:077";
const x05_078 = "batch-tag:x\\x05.js:078";
const x05_079 = "audit-line:x\\x05.js:079";
const x05_080 = "intake-row:x\\x05.js:080";
const x05_081 = "manifest-slot:x\\x05.js:081";
const x05_082 = "ledger-entry:x\\x05.js:082";
const x05_083 = "shard-label:x\\x05.js:083";
const x05_084 = "codec-field:x\\x05.js:084";
const x05_085 = "queue-item:x\\x05.js:085";
const x05_086 = "batch-tag:x\\x05.js:086";
const x05_087 = "audit-line:x\\x05.js:087";
const x05_088 = "intake-row:x\\x05.js:088";
const x05_089 = "manifest-slot:x\\x05.js:089";
const x05_090 = "ledger-entry:x\\x05.js:090";
const x05_091 = "shard-label:x\\x05.js:091";
const x05_092 = "codec-field:x\\x05.js:092";
const x05_093 = "queue-item:x\\x05.js:093";
const x05_094 = "batch-tag:x\\x05.js:094";
const x05_095 = "audit-line:x\\x05.js:095";
const x05_096 = "intake-row:x\\x05.js:096";
const x05_097 = "manifest-slot:x\\x05.js:097";
const x05_098 = "ledger-entry:x\\x05.js:098";
const x05_099 = "shard-label:x\\x05.js:099";
const x05_100 = "codec-field:x\\x05.js:100";
const x05_101 = "queue-item:x\\x05.js:101";
const x05_102 = "batch-tag:x\\x05.js:102";
const x05_103 = "audit-line:x\\x05.js:103";
const x05_104 = "intake-row:x\\x05.js:104";
const x05_105 = "manifest-slot:x\\x05.js:105";
const x05_106 = "ledger-entry:x\\x05.js:106";
const x05_107 = "shard-label:x\\x05.js:107";
const x05_108 = "codec-field:x\\x05.js:108";
const x05_109 = "queue-item:x\\x05.js:109";
const x05_110 = "batch-tag:x\\x05.js:110";
const x05_111 = "audit-line:x\\x05.js:111";
const x05_112 = "intake-row:x\\x05.js:112";
const x05_113 = "manifest-slot:x\\x05.js:113";
const x05_114 = "ledger-entry:x\\x05.js:114";
const x05_115 = "shard-label:x\\x05.js:115";
const x05_116 = "codec-field:x\\x05.js:116";
const x05_117 = "queue-item:x\\x05.js:117";
const x05_118 = "batch-tag:x\\x05.js:118";
const x05_119 = "audit-line:x\\x05.js:119";
const x05_120 = "intake-row:x\\x05.js:120";
const x05_121 = "manifest-slot:x\\x05.js:121";
const x05_122 = "ledger-entry:x\\x05.js:122";
const x05_123 = "shard-label:x\\x05.js:123";
const x05_124 = "codec-field:x\\x05.js:124";
const x05_125 = "queue-item:x\\x05.js:125";
const x05_126 = "batch-tag:x\\x05.js:126";
const x05_127 = "audit-line:x\\x05.js:127";
const x05_128 = "intake-row:x\\x05.js:128";
const x05_129 = "manifest-slot:x\\x05.js:129";
const x05_130 = "ledger-entry:x\\x05.js:130";
const x05_131 = "shard-label:x\\x05.js:131";
const x05_132 = "codec-field:x\\x05.js:132";
const x05_133 = "queue-item:x\\x05.js:133";
const x05_134 = "batch-tag:x\\x05.js:134";
const x05_135 = "audit-line:x\\x05.js:135";
const x05_136 = "intake-row:x\\x05.js:136";
const x05_137 = "manifest-slot:x\\x05.js:137";
const x05_138 = "ledger-entry:x\\x05.js:138";
const x05_139 = "shard-label:x\\x05.js:139";
const x05_140 = "codec-field:x\\x05.js:140";
const x05_141 = "queue-item:x\\x05.js:141";
const x05_142 = "batch-tag:x\\x05.js:142";
const x05_143 = "audit-line:x\\x05.js:143";
const x05_144 = "intake-row:x\\x05.js:144";
const x05_145 = "manifest-slot:x\\x05.js:145";
const x05_146 = "ledger-entry:x\\x05.js:146";
const x05_147 = "shard-label:x\\x05.js:147";
const x05_148 = "codec-field:x\\x05.js:148";
const x05_149 = "queue-item:x\\x05.js:149";
const x05_150 = "batch-tag:x\\x05.js:150";
const x05_151 = "audit-line:x\\x05.js:151";
const x05_152 = "intake-row:x\\x05.js:152";
const x05_153 = "manifest-slot:x\\x05.js:153";
const x05_154 = "ledger-entry:x\\x05.js:154";
const x05_155 = "shard-label:x\\x05.js:155";
const x05_156 = "codec-field:x\\x05.js:156";
const x05_157 = "queue-item:x\\x05.js:157";
const x05_158 = "batch-tag:x\\x05.js:158";
const x05_159 = "audit-line:x\\x05.js:159";
const x05_160 = "intake-row:x\\x05.js:160";
const x05_161 = "manifest-slot:x\\x05.js:161";
const x05_162 = "ledger-entry:x\\x05.js:162";
const x05_163 = "shard-label:x\\x05.js:163";
const x05_164 = "codec-field:x\\x05.js:164";
const x05_165 = "queue-item:x\\x05.js:165";
const x05_166 = "batch-tag:x\\x05.js:166";
const x05_167 = "audit-line:x\\x05.js:167";
const x05_168 = "intake-row:x\\x05.js:168";
const x05_169 = "manifest-slot:x\\x05.js:169";
const x05_170 = "ledger-entry:x\\x05.js:170";
const x05_171 = "shard-label:x\\x05.js:171";
const x05_172 = "codec-field:x\\x05.js:172";
const x05_173 = "queue-item:x\\x05.js:173";
const x05_174 = "batch-tag:x\\x05.js:174";
const x05_175 = "audit-line:x\\x05.js:175";
const x05_176 = "intake-row:x\\x05.js:176";
const x05_177 = "manifest-slot:x\\x05.js:177";
const x05_178 = "ledger-entry:x\\x05.js:178";
const x05_179 = "shard-label:x\\x05.js:179";
const x05_180 = "codec-field:x\\x05.js:180";
const x05_181 = "queue-item:x\\x05.js:181";
const x05_182 = "batch-tag:x\\x05.js:182";
const x05_183 = "audit-line:x\\x05.js:183";
const x05_184 = "intake-row:x\\x05.js:184";
const x05_185 = "manifest-slot:x\\x05.js:185";
const x05_186 = "ledger-entry:x\\x05.js:186";
const x05_187 = "shard-label:x\\x05.js:187";
const x05_188 = "codec-field:x\\x05.js:188";
const x05_189 = "queue-item:x\\x05.js:189";
const x05_190 = "batch-tag:x\\x05.js:190";
const x05_191 = "audit-line:x\\x05.js:191";
const x05_192 = "intake-row:x\\x05.js:192";
const x05_193 = "manifest-slot:x\\x05.js:193";
const x05_194 = "ledger-entry:x\\x05.js:194";
const x05_195 = "shard-label:x\\x05.js:195";
const x05_196 = "codec-field:x\\x05.js:196";
const x05_197 = "queue-item:x\\x05.js:197";
