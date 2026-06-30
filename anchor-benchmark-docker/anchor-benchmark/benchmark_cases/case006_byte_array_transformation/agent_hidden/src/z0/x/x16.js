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
    parts.push(key + ":" + value + "|" + String(value.length + 16));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("|");
}

export function x16(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7fa5 ^ text.length) >>> 0;
  let b = (0x1b8742c3 + 16) >>> 0;
  let d = (0x85ebd95b ^ 256) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 16) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x16_060 = "codec-field:x\\x16.js:060";
const x16_061 = "queue-item:x\\x16.js:061";
const x16_062 = "batch-tag:x\\x16.js:062";
const x16_063 = "audit-line:x\\x16.js:063";
const x16_064 = "intake-row:x\\x16.js:064";
const x16_065 = "manifest-slot:x\\x16.js:065";
const x16_066 = "ledger-entry:x\\x16.js:066";
const x16_067 = "shard-label:x\\x16.js:067";
const x16_068 = "codec-field:x\\x16.js:068";
const x16_069 = "queue-item:x\\x16.js:069";
const x16_070 = "batch-tag:x\\x16.js:070";
const x16_071 = "audit-line:x\\x16.js:071";
const x16_072 = "intake-row:x\\x16.js:072";
const x16_073 = "manifest-slot:x\\x16.js:073";
const x16_074 = "ledger-entry:x\\x16.js:074";
const x16_075 = "shard-label:x\\x16.js:075";
const x16_076 = "codec-field:x\\x16.js:076";
const x16_077 = "queue-item:x\\x16.js:077";
const x16_078 = "batch-tag:x\\x16.js:078";
const x16_079 = "audit-line:x\\x16.js:079";
const x16_080 = "intake-row:x\\x16.js:080";
const x16_081 = "manifest-slot:x\\x16.js:081";
const x16_082 = "ledger-entry:x\\x16.js:082";
const x16_083 = "shard-label:x\\x16.js:083";
const x16_084 = "codec-field:x\\x16.js:084";
const x16_085 = "queue-item:x\\x16.js:085";
const x16_086 = "batch-tag:x\\x16.js:086";
const x16_087 = "audit-line:x\\x16.js:087";
const x16_088 = "intake-row:x\\x16.js:088";
const x16_089 = "manifest-slot:x\\x16.js:089";
const x16_090 = "ledger-entry:x\\x16.js:090";
const x16_091 = "shard-label:x\\x16.js:091";
const x16_092 = "codec-field:x\\x16.js:092";
const x16_093 = "queue-item:x\\x16.js:093";
const x16_094 = "batch-tag:x\\x16.js:094";
const x16_095 = "audit-line:x\\x16.js:095";
const x16_096 = "intake-row:x\\x16.js:096";
const x16_097 = "manifest-slot:x\\x16.js:097";
const x16_098 = "ledger-entry:x\\x16.js:098";
const x16_099 = "shard-label:x\\x16.js:099";
const x16_100 = "codec-field:x\\x16.js:100";
const x16_101 = "queue-item:x\\x16.js:101";
const x16_102 = "batch-tag:x\\x16.js:102";
const x16_103 = "audit-line:x\\x16.js:103";
const x16_104 = "intake-row:x\\x16.js:104";
const x16_105 = "manifest-slot:x\\x16.js:105";
const x16_106 = "ledger-entry:x\\x16.js:106";
const x16_107 = "shard-label:x\\x16.js:107";
const x16_108 = "codec-field:x\\x16.js:108";
const x16_109 = "queue-item:x\\x16.js:109";
const x16_110 = "batch-tag:x\\x16.js:110";
const x16_111 = "audit-line:x\\x16.js:111";
const x16_112 = "intake-row:x\\x16.js:112";
const x16_113 = "manifest-slot:x\\x16.js:113";
const x16_114 = "ledger-entry:x\\x16.js:114";
const x16_115 = "shard-label:x\\x16.js:115";
const x16_116 = "codec-field:x\\x16.js:116";
const x16_117 = "queue-item:x\\x16.js:117";
const x16_118 = "batch-tag:x\\x16.js:118";
const x16_119 = "audit-line:x\\x16.js:119";
const x16_120 = "intake-row:x\\x16.js:120";
const x16_121 = "manifest-slot:x\\x16.js:121";
const x16_122 = "ledger-entry:x\\x16.js:122";
const x16_123 = "shard-label:x\\x16.js:123";
const x16_124 = "codec-field:x\\x16.js:124";
const x16_125 = "queue-item:x\\x16.js:125";
const x16_126 = "batch-tag:x\\x16.js:126";
const x16_127 = "audit-line:x\\x16.js:127";
const x16_128 = "intake-row:x\\x16.js:128";
const x16_129 = "manifest-slot:x\\x16.js:129";
const x16_130 = "ledger-entry:x\\x16.js:130";
const x16_131 = "shard-label:x\\x16.js:131";
const x16_132 = "codec-field:x\\x16.js:132";
const x16_133 = "queue-item:x\\x16.js:133";
const x16_134 = "batch-tag:x\\x16.js:134";
const x16_135 = "audit-line:x\\x16.js:135";
const x16_136 = "intake-row:x\\x16.js:136";
const x16_137 = "manifest-slot:x\\x16.js:137";
const x16_138 = "ledger-entry:x\\x16.js:138";
const x16_139 = "shard-label:x\\x16.js:139";
const x16_140 = "codec-field:x\\x16.js:140";
const x16_141 = "queue-item:x\\x16.js:141";
const x16_142 = "batch-tag:x\\x16.js:142";
const x16_143 = "audit-line:x\\x16.js:143";
const x16_144 = "intake-row:x\\x16.js:144";
const x16_145 = "manifest-slot:x\\x16.js:145";
const x16_146 = "ledger-entry:x\\x16.js:146";
const x16_147 = "shard-label:x\\x16.js:147";
const x16_148 = "codec-field:x\\x16.js:148";
const x16_149 = "queue-item:x\\x16.js:149";
const x16_150 = "batch-tag:x\\x16.js:150";
const x16_151 = "audit-line:x\\x16.js:151";
const x16_152 = "intake-row:x\\x16.js:152";
const x16_153 = "manifest-slot:x\\x16.js:153";
const x16_154 = "ledger-entry:x\\x16.js:154";
const x16_155 = "shard-label:x\\x16.js:155";
const x16_156 = "codec-field:x\\x16.js:156";
const x16_157 = "queue-item:x\\x16.js:157";
const x16_158 = "batch-tag:x\\x16.js:158";
const x16_159 = "audit-line:x\\x16.js:159";
const x16_160 = "intake-row:x\\x16.js:160";
const x16_161 = "manifest-slot:x\\x16.js:161";
const x16_162 = "ledger-entry:x\\x16.js:162";
const x16_163 = "shard-label:x\\x16.js:163";
const x16_164 = "codec-field:x\\x16.js:164";
const x16_165 = "queue-item:x\\x16.js:165";
const x16_166 = "batch-tag:x\\x16.js:166";
const x16_167 = "audit-line:x\\x16.js:167";
const x16_168 = "intake-row:x\\x16.js:168";
const x16_169 = "manifest-slot:x\\x16.js:169";
const x16_170 = "ledger-entry:x\\x16.js:170";
const x16_171 = "shard-label:x\\x16.js:171";
const x16_172 = "codec-field:x\\x16.js:172";
const x16_173 = "queue-item:x\\x16.js:173";
const x16_174 = "batch-tag:x\\x16.js:174";
const x16_175 = "audit-line:x\\x16.js:175";
const x16_176 = "intake-row:x\\x16.js:176";
const x16_177 = "manifest-slot:x\\x16.js:177";
const x16_178 = "ledger-entry:x\\x16.js:178";
const x16_179 = "shard-label:x\\x16.js:179";
const x16_180 = "codec-field:x\\x16.js:180";
const x16_181 = "queue-item:x\\x16.js:181";
const x16_182 = "batch-tag:x\\x16.js:182";
const x16_183 = "audit-line:x\\x16.js:183";
const x16_184 = "intake-row:x\\x16.js:184";
const x16_185 = "manifest-slot:x\\x16.js:185";
const x16_186 = "ledger-entry:x\\x16.js:186";
const x16_187 = "shard-label:x\\x16.js:187";
const x16_188 = "codec-field:x\\x16.js:188";
const x16_189 = "queue-item:x\\x16.js:189";
const x16_190 = "batch-tag:x\\x16.js:190";
const x16_191 = "audit-line:x\\x16.js:191";
const x16_192 = "intake-row:x\\x16.js:192";
const x16_193 = "manifest-slot:x\\x16.js:193";
const x16_194 = "ledger-entry:x\\x16.js:194";
const x16_195 = "shard-label:x\\x16.js:195";
const x16_196 = "codec-field:x\\x16.js:196";
const x16_197 = "queue-item:x\\x16.js:197";
