const localOrder = [0, 1, 2, 3, 4, 5];
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
    parts.push(key + "." + value + "|" + String(value.length + 19));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x19(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7e8a ^ text.length) >>> 0;
  let b = (0x1b87453c + 19) >>> 0;
  let d = (0x85ebdca2 ^ 304) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 19) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x19_060 = "codec-field:x\\x19.js:060";
const x19_061 = "queue-item:x\\x19.js:061";
const x19_062 = "batch-tag:x\\x19.js:062";
const x19_063 = "audit-line:x\\x19.js:063";
const x19_064 = "intake-row:x\\x19.js:064";
const x19_065 = "manifest-slot:x\\x19.js:065";
const x19_066 = "ledger-entry:x\\x19.js:066";
const x19_067 = "shard-label:x\\x19.js:067";
const x19_068 = "codec-field:x\\x19.js:068";
const x19_069 = "queue-item:x\\x19.js:069";
const x19_070 = "batch-tag:x\\x19.js:070";
const x19_071 = "audit-line:x\\x19.js:071";
const x19_072 = "intake-row:x\\x19.js:072";
const x19_073 = "manifest-slot:x\\x19.js:073";
const x19_074 = "ledger-entry:x\\x19.js:074";
const x19_075 = "shard-label:x\\x19.js:075";
const x19_076 = "codec-field:x\\x19.js:076";
const x19_077 = "queue-item:x\\x19.js:077";
const x19_078 = "batch-tag:x\\x19.js:078";
const x19_079 = "audit-line:x\\x19.js:079";
const x19_080 = "intake-row:x\\x19.js:080";
const x19_081 = "manifest-slot:x\\x19.js:081";
const x19_082 = "ledger-entry:x\\x19.js:082";
const x19_083 = "shard-label:x\\x19.js:083";
const x19_084 = "codec-field:x\\x19.js:084";
const x19_085 = "queue-item:x\\x19.js:085";
const x19_086 = "batch-tag:x\\x19.js:086";
const x19_087 = "audit-line:x\\x19.js:087";
const x19_088 = "intake-row:x\\x19.js:088";
const x19_089 = "manifest-slot:x\\x19.js:089";
const x19_090 = "ledger-entry:x\\x19.js:090";
const x19_091 = "shard-label:x\\x19.js:091";
const x19_092 = "codec-field:x\\x19.js:092";
const x19_093 = "queue-item:x\\x19.js:093";
const x19_094 = "batch-tag:x\\x19.js:094";
const x19_095 = "audit-line:x\\x19.js:095";
const x19_096 = "intake-row:x\\x19.js:096";
const x19_097 = "manifest-slot:x\\x19.js:097";
const x19_098 = "ledger-entry:x\\x19.js:098";
const x19_099 = "shard-label:x\\x19.js:099";
const x19_100 = "codec-field:x\\x19.js:100";
const x19_101 = "queue-item:x\\x19.js:101";
const x19_102 = "batch-tag:x\\x19.js:102";
const x19_103 = "audit-line:x\\x19.js:103";
const x19_104 = "intake-row:x\\x19.js:104";
const x19_105 = "manifest-slot:x\\x19.js:105";
const x19_106 = "ledger-entry:x\\x19.js:106";
const x19_107 = "shard-label:x\\x19.js:107";
const x19_108 = "codec-field:x\\x19.js:108";
const x19_109 = "queue-item:x\\x19.js:109";
const x19_110 = "batch-tag:x\\x19.js:110";
const x19_111 = "audit-line:x\\x19.js:111";
const x19_112 = "intake-row:x\\x19.js:112";
const x19_113 = "manifest-slot:x\\x19.js:113";
const x19_114 = "ledger-entry:x\\x19.js:114";
const x19_115 = "shard-label:x\\x19.js:115";
const x19_116 = "codec-field:x\\x19.js:116";
const x19_117 = "queue-item:x\\x19.js:117";
const x19_118 = "batch-tag:x\\x19.js:118";
const x19_119 = "audit-line:x\\x19.js:119";
const x19_120 = "intake-row:x\\x19.js:120";
const x19_121 = "manifest-slot:x\\x19.js:121";
const x19_122 = "ledger-entry:x\\x19.js:122";
const x19_123 = "shard-label:x\\x19.js:123";
const x19_124 = "codec-field:x\\x19.js:124";
const x19_125 = "queue-item:x\\x19.js:125";
const x19_126 = "batch-tag:x\\x19.js:126";
const x19_127 = "audit-line:x\\x19.js:127";
const x19_128 = "intake-row:x\\x19.js:128";
const x19_129 = "manifest-slot:x\\x19.js:129";
const x19_130 = "ledger-entry:x\\x19.js:130";
const x19_131 = "shard-label:x\\x19.js:131";
const x19_132 = "codec-field:x\\x19.js:132";
const x19_133 = "queue-item:x\\x19.js:133";
const x19_134 = "batch-tag:x\\x19.js:134";
const x19_135 = "audit-line:x\\x19.js:135";
const x19_136 = "intake-row:x\\x19.js:136";
const x19_137 = "manifest-slot:x\\x19.js:137";
const x19_138 = "ledger-entry:x\\x19.js:138";
const x19_139 = "shard-label:x\\x19.js:139";
const x19_140 = "codec-field:x\\x19.js:140";
const x19_141 = "queue-item:x\\x19.js:141";
const x19_142 = "batch-tag:x\\x19.js:142";
const x19_143 = "audit-line:x\\x19.js:143";
const x19_144 = "intake-row:x\\x19.js:144";
const x19_145 = "manifest-slot:x\\x19.js:145";
const x19_146 = "ledger-entry:x\\x19.js:146";
const x19_147 = "shard-label:x\\x19.js:147";
const x19_148 = "codec-field:x\\x19.js:148";
const x19_149 = "queue-item:x\\x19.js:149";
const x19_150 = "batch-tag:x\\x19.js:150";
const x19_151 = "audit-line:x\\x19.js:151";
const x19_152 = "intake-row:x\\x19.js:152";
const x19_153 = "manifest-slot:x\\x19.js:153";
const x19_154 = "ledger-entry:x\\x19.js:154";
const x19_155 = "shard-label:x\\x19.js:155";
const x19_156 = "codec-field:x\\x19.js:156";
const x19_157 = "queue-item:x\\x19.js:157";
const x19_158 = "batch-tag:x\\x19.js:158";
const x19_159 = "audit-line:x\\x19.js:159";
const x19_160 = "intake-row:x\\x19.js:160";
const x19_161 = "manifest-slot:x\\x19.js:161";
const x19_162 = "ledger-entry:x\\x19.js:162";
const x19_163 = "shard-label:x\\x19.js:163";
const x19_164 = "codec-field:x\\x19.js:164";
const x19_165 = "queue-item:x\\x19.js:165";
const x19_166 = "batch-tag:x\\x19.js:166";
const x19_167 = "audit-line:x\\x19.js:167";
const x19_168 = "intake-row:x\\x19.js:168";
const x19_169 = "manifest-slot:x\\x19.js:169";
const x19_170 = "ledger-entry:x\\x19.js:170";
const x19_171 = "shard-label:x\\x19.js:171";
const x19_172 = "codec-field:x\\x19.js:172";
const x19_173 = "queue-item:x\\x19.js:173";
const x19_174 = "batch-tag:x\\x19.js:174";
const x19_175 = "audit-line:x\\x19.js:175";
const x19_176 = "intake-row:x\\x19.js:176";
const x19_177 = "manifest-slot:x\\x19.js:177";
const x19_178 = "ledger-entry:x\\x19.js:178";
const x19_179 = "shard-label:x\\x19.js:179";
const x19_180 = "codec-field:x\\x19.js:180";
const x19_181 = "queue-item:x\\x19.js:181";
const x19_182 = "batch-tag:x\\x19.js:182";
const x19_183 = "audit-line:x\\x19.js:183";
const x19_184 = "intake-row:x\\x19.js:184";
const x19_185 = "manifest-slot:x\\x19.js:185";
const x19_186 = "ledger-entry:x\\x19.js:186";
const x19_187 = "shard-label:x\\x19.js:187";
const x19_188 = "codec-field:x\\x19.js:188";
const x19_189 = "queue-item:x\\x19.js:189";
const x19_190 = "batch-tag:x\\x19.js:190";
const x19_191 = "audit-line:x\\x19.js:191";
const x19_192 = "intake-row:x\\x19.js:192";
const x19_193 = "manifest-slot:x\\x19.js:193";
const x19_194 = "ledger-entry:x\\x19.js:194";
const x19_195 = "shard-label:x\\x19.js:195";
const x19_196 = "codec-field:x\\x19.js:196";
const x19_197 = "queue-item:x\\x19.js:197";
