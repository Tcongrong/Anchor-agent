const localOrder = [3, 4, 5, 2, 0, 1];
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
    parts.push(key + ":" + value + "|" + String(value.length + 10));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x10(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7a07 ^ text.length) >>> 0;
  let b = (0x1b873dd1 + 10) >>> 0;
  let d = (0x85ebc195 ^ 160) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 10) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x10_060 = "codec-field:x\\x10.js:060";
const x10_061 = "queue-item:x\\x10.js:061";
const x10_062 = "batch-tag:x\\x10.js:062";
const x10_063 = "audit-line:x\\x10.js:063";
const x10_064 = "intake-row:x\\x10.js:064";
const x10_065 = "manifest-slot:x\\x10.js:065";
const x10_066 = "ledger-entry:x\\x10.js:066";
const x10_067 = "shard-label:x\\x10.js:067";
const x10_068 = "codec-field:x\\x10.js:068";
const x10_069 = "queue-item:x\\x10.js:069";
const x10_070 = "batch-tag:x\\x10.js:070";
const x10_071 = "audit-line:x\\x10.js:071";
const x10_072 = "intake-row:x\\x10.js:072";
const x10_073 = "manifest-slot:x\\x10.js:073";
const x10_074 = "ledger-entry:x\\x10.js:074";
const x10_075 = "shard-label:x\\x10.js:075";
const x10_076 = "codec-field:x\\x10.js:076";
const x10_077 = "queue-item:x\\x10.js:077";
const x10_078 = "batch-tag:x\\x10.js:078";
const x10_079 = "audit-line:x\\x10.js:079";
const x10_080 = "intake-row:x\\x10.js:080";
const x10_081 = "manifest-slot:x\\x10.js:081";
const x10_082 = "ledger-entry:x\\x10.js:082";
const x10_083 = "shard-label:x\\x10.js:083";
const x10_084 = "codec-field:x\\x10.js:084";
const x10_085 = "queue-item:x\\x10.js:085";
const x10_086 = "batch-tag:x\\x10.js:086";
const x10_087 = "audit-line:x\\x10.js:087";
const x10_088 = "intake-row:x\\x10.js:088";
const x10_089 = "manifest-slot:x\\x10.js:089";
const x10_090 = "ledger-entry:x\\x10.js:090";
const x10_091 = "shard-label:x\\x10.js:091";
const x10_092 = "codec-field:x\\x10.js:092";
const x10_093 = "queue-item:x\\x10.js:093";
const x10_094 = "batch-tag:x\\x10.js:094";
const x10_095 = "audit-line:x\\x10.js:095";
const x10_096 = "intake-row:x\\x10.js:096";
const x10_097 = "manifest-slot:x\\x10.js:097";
const x10_098 = "ledger-entry:x\\x10.js:098";
const x10_099 = "shard-label:x\\x10.js:099";
const x10_100 = "codec-field:x\\x10.js:100";
const x10_101 = "queue-item:x\\x10.js:101";
const x10_102 = "batch-tag:x\\x10.js:102";
const x10_103 = "audit-line:x\\x10.js:103";
const x10_104 = "intake-row:x\\x10.js:104";
const x10_105 = "manifest-slot:x\\x10.js:105";
const x10_106 = "ledger-entry:x\\x10.js:106";
const x10_107 = "shard-label:x\\x10.js:107";
const x10_108 = "codec-field:x\\x10.js:108";
const x10_109 = "queue-item:x\\x10.js:109";
const x10_110 = "batch-tag:x\\x10.js:110";
const x10_111 = "audit-line:x\\x10.js:111";
const x10_112 = "intake-row:x\\x10.js:112";
const x10_113 = "manifest-slot:x\\x10.js:113";
const x10_114 = "ledger-entry:x\\x10.js:114";
const x10_115 = "shard-label:x\\x10.js:115";
const x10_116 = "codec-field:x\\x10.js:116";
const x10_117 = "queue-item:x\\x10.js:117";
const x10_118 = "batch-tag:x\\x10.js:118";
const x10_119 = "audit-line:x\\x10.js:119";
const x10_120 = "intake-row:x\\x10.js:120";
const x10_121 = "manifest-slot:x\\x10.js:121";
const x10_122 = "ledger-entry:x\\x10.js:122";
const x10_123 = "shard-label:x\\x10.js:123";
const x10_124 = "codec-field:x\\x10.js:124";
const x10_125 = "queue-item:x\\x10.js:125";
const x10_126 = "batch-tag:x\\x10.js:126";
const x10_127 = "audit-line:x\\x10.js:127";
const x10_128 = "intake-row:x\\x10.js:128";
const x10_129 = "manifest-slot:x\\x10.js:129";
const x10_130 = "ledger-entry:x\\x10.js:130";
const x10_131 = "shard-label:x\\x10.js:131";
const x10_132 = "codec-field:x\\x10.js:132";
const x10_133 = "queue-item:x\\x10.js:133";
const x10_134 = "batch-tag:x\\x10.js:134";
const x10_135 = "audit-line:x\\x10.js:135";
const x10_136 = "intake-row:x\\x10.js:136";
const x10_137 = "manifest-slot:x\\x10.js:137";
const x10_138 = "ledger-entry:x\\x10.js:138";
const x10_139 = "shard-label:x\\x10.js:139";
const x10_140 = "codec-field:x\\x10.js:140";
const x10_141 = "queue-item:x\\x10.js:141";
const x10_142 = "batch-tag:x\\x10.js:142";
const x10_143 = "audit-line:x\\x10.js:143";
const x10_144 = "intake-row:x\\x10.js:144";
const x10_145 = "manifest-slot:x\\x10.js:145";
const x10_146 = "ledger-entry:x\\x10.js:146";
const x10_147 = "shard-label:x\\x10.js:147";
const x10_148 = "codec-field:x\\x10.js:148";
const x10_149 = "queue-item:x\\x10.js:149";
const x10_150 = "batch-tag:x\\x10.js:150";
const x10_151 = "audit-line:x\\x10.js:151";
const x10_152 = "intake-row:x\\x10.js:152";
const x10_153 = "manifest-slot:x\\x10.js:153";
const x10_154 = "ledger-entry:x\\x10.js:154";
const x10_155 = "shard-label:x\\x10.js:155";
const x10_156 = "codec-field:x\\x10.js:156";
const x10_157 = "queue-item:x\\x10.js:157";
const x10_158 = "batch-tag:x\\x10.js:158";
const x10_159 = "audit-line:x\\x10.js:159";
const x10_160 = "intake-row:x\\x10.js:160";
const x10_161 = "manifest-slot:x\\x10.js:161";
const x10_162 = "ledger-entry:x\\x10.js:162";
const x10_163 = "shard-label:x\\x10.js:163";
const x10_164 = "codec-field:x\\x10.js:164";
const x10_165 = "queue-item:x\\x10.js:165";
const x10_166 = "batch-tag:x\\x10.js:166";
const x10_167 = "audit-line:x\\x10.js:167";
const x10_168 = "intake-row:x\\x10.js:168";
const x10_169 = "manifest-slot:x\\x10.js:169";
const x10_170 = "ledger-entry:x\\x10.js:170";
const x10_171 = "shard-label:x\\x10.js:171";
const x10_172 = "codec-field:x\\x10.js:172";
const x10_173 = "queue-item:x\\x10.js:173";
const x10_174 = "batch-tag:x\\x10.js:174";
const x10_175 = "audit-line:x\\x10.js:175";
const x10_176 = "intake-row:x\\x10.js:176";
const x10_177 = "manifest-slot:x\\x10.js:177";
const x10_178 = "ledger-entry:x\\x10.js:178";
const x10_179 = "shard-label:x\\x10.js:179";
const x10_180 = "codec-field:x\\x10.js:180";
const x10_181 = "queue-item:x\\x10.js:181";
const x10_182 = "batch-tag:x\\x10.js:182";
const x10_183 = "audit-line:x\\x10.js:183";
const x10_184 = "intake-row:x\\x10.js:184";
const x10_185 = "manifest-slot:x\\x10.js:185";
const x10_186 = "ledger-entry:x\\x10.js:186";
const x10_187 = "shard-label:x\\x10.js:187";
const x10_188 = "codec-field:x\\x10.js:188";
const x10_189 = "queue-item:x\\x10.js:189";
const x10_190 = "batch-tag:x\\x10.js:190";
const x10_191 = "audit-line:x\\x10.js:191";
const x10_192 = "intake-row:x\\x10.js:192";
const x10_193 = "manifest-slot:x\\x10.js:193";
const x10_194 = "ledger-entry:x\\x10.js:194";
const x10_195 = "shard-label:x\\x10.js:195";
const x10_196 = "codec-field:x\\x10.js:196";
const x10_197 = "queue-item:x\\x10.js:197";
