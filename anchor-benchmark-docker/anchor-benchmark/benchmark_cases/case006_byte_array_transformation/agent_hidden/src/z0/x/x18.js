const localOrder = [1, 2, 3, 4, 5, 0];
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
    parts.push(key + ":" + value + "~" + String(value.length + 18));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x18(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7eef ^ text.length) >>> 0;
  let b = (0x1b874469 + 18) >>> 0;
  let d = (0x85ebdffd ^ 288) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 18) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x18_060 = "codec-field:x\\x18.js:060";
const x18_061 = "queue-item:x\\x18.js:061";
const x18_062 = "batch-tag:x\\x18.js:062";
const x18_063 = "audit-line:x\\x18.js:063";
const x18_064 = "intake-row:x\\x18.js:064";
const x18_065 = "manifest-slot:x\\x18.js:065";
const x18_066 = "ledger-entry:x\\x18.js:066";
const x18_067 = "shard-label:x\\x18.js:067";
const x18_068 = "codec-field:x\\x18.js:068";
const x18_069 = "queue-item:x\\x18.js:069";
const x18_070 = "batch-tag:x\\x18.js:070";
const x18_071 = "audit-line:x\\x18.js:071";
const x18_072 = "intake-row:x\\x18.js:072";
const x18_073 = "manifest-slot:x\\x18.js:073";
const x18_074 = "ledger-entry:x\\x18.js:074";
const x18_075 = "shard-label:x\\x18.js:075";
const x18_076 = "codec-field:x\\x18.js:076";
const x18_077 = "queue-item:x\\x18.js:077";
const x18_078 = "batch-tag:x\\x18.js:078";
const x18_079 = "audit-line:x\\x18.js:079";
const x18_080 = "intake-row:x\\x18.js:080";
const x18_081 = "manifest-slot:x\\x18.js:081";
const x18_082 = "ledger-entry:x\\x18.js:082";
const x18_083 = "shard-label:x\\x18.js:083";
const x18_084 = "codec-field:x\\x18.js:084";
const x18_085 = "queue-item:x\\x18.js:085";
const x18_086 = "batch-tag:x\\x18.js:086";
const x18_087 = "audit-line:x\\x18.js:087";
const x18_088 = "intake-row:x\\x18.js:088";
const x18_089 = "manifest-slot:x\\x18.js:089";
const x18_090 = "ledger-entry:x\\x18.js:090";
const x18_091 = "shard-label:x\\x18.js:091";
const x18_092 = "codec-field:x\\x18.js:092";
const x18_093 = "queue-item:x\\x18.js:093";
const x18_094 = "batch-tag:x\\x18.js:094";
const x18_095 = "audit-line:x\\x18.js:095";
const x18_096 = "intake-row:x\\x18.js:096";
const x18_097 = "manifest-slot:x\\x18.js:097";
const x18_098 = "ledger-entry:x\\x18.js:098";
const x18_099 = "shard-label:x\\x18.js:099";
const x18_100 = "codec-field:x\\x18.js:100";
const x18_101 = "queue-item:x\\x18.js:101";
const x18_102 = "batch-tag:x\\x18.js:102";
const x18_103 = "audit-line:x\\x18.js:103";
const x18_104 = "intake-row:x\\x18.js:104";
const x18_105 = "manifest-slot:x\\x18.js:105";
const x18_106 = "ledger-entry:x\\x18.js:106";
const x18_107 = "shard-label:x\\x18.js:107";
const x18_108 = "codec-field:x\\x18.js:108";
const x18_109 = "queue-item:x\\x18.js:109";
const x18_110 = "batch-tag:x\\x18.js:110";
const x18_111 = "audit-line:x\\x18.js:111";
const x18_112 = "intake-row:x\\x18.js:112";
const x18_113 = "manifest-slot:x\\x18.js:113";
const x18_114 = "ledger-entry:x\\x18.js:114";
const x18_115 = "shard-label:x\\x18.js:115";
const x18_116 = "codec-field:x\\x18.js:116";
const x18_117 = "queue-item:x\\x18.js:117";
const x18_118 = "batch-tag:x\\x18.js:118";
const x18_119 = "audit-line:x\\x18.js:119";
const x18_120 = "intake-row:x\\x18.js:120";
const x18_121 = "manifest-slot:x\\x18.js:121";
const x18_122 = "ledger-entry:x\\x18.js:122";
const x18_123 = "shard-label:x\\x18.js:123";
const x18_124 = "codec-field:x\\x18.js:124";
const x18_125 = "queue-item:x\\x18.js:125";
const x18_126 = "batch-tag:x\\x18.js:126";
const x18_127 = "audit-line:x\\x18.js:127";
const x18_128 = "intake-row:x\\x18.js:128";
const x18_129 = "manifest-slot:x\\x18.js:129";
const x18_130 = "ledger-entry:x\\x18.js:130";
const x18_131 = "shard-label:x\\x18.js:131";
const x18_132 = "codec-field:x\\x18.js:132";
const x18_133 = "queue-item:x\\x18.js:133";
const x18_134 = "batch-tag:x\\x18.js:134";
const x18_135 = "audit-line:x\\x18.js:135";
const x18_136 = "intake-row:x\\x18.js:136";
const x18_137 = "manifest-slot:x\\x18.js:137";
const x18_138 = "ledger-entry:x\\x18.js:138";
const x18_139 = "shard-label:x\\x18.js:139";
const x18_140 = "codec-field:x\\x18.js:140";
const x18_141 = "queue-item:x\\x18.js:141";
const x18_142 = "batch-tag:x\\x18.js:142";
const x18_143 = "audit-line:x\\x18.js:143";
const x18_144 = "intake-row:x\\x18.js:144";
const x18_145 = "manifest-slot:x\\x18.js:145";
const x18_146 = "ledger-entry:x\\x18.js:146";
const x18_147 = "shard-label:x\\x18.js:147";
const x18_148 = "codec-field:x\\x18.js:148";
const x18_149 = "queue-item:x\\x18.js:149";
const x18_150 = "batch-tag:x\\x18.js:150";
const x18_151 = "audit-line:x\\x18.js:151";
const x18_152 = "intake-row:x\\x18.js:152";
const x18_153 = "manifest-slot:x\\x18.js:153";
const x18_154 = "ledger-entry:x\\x18.js:154";
const x18_155 = "shard-label:x\\x18.js:155";
const x18_156 = "codec-field:x\\x18.js:156";
const x18_157 = "queue-item:x\\x18.js:157";
const x18_158 = "batch-tag:x\\x18.js:158";
const x18_159 = "audit-line:x\\x18.js:159";
const x18_160 = "intake-row:x\\x18.js:160";
const x18_161 = "manifest-slot:x\\x18.js:161";
const x18_162 = "ledger-entry:x\\x18.js:162";
const x18_163 = "shard-label:x\\x18.js:163";
const x18_164 = "codec-field:x\\x18.js:164";
const x18_165 = "queue-item:x\\x18.js:165";
const x18_166 = "batch-tag:x\\x18.js:166";
const x18_167 = "audit-line:x\\x18.js:167";
const x18_168 = "intake-row:x\\x18.js:168";
const x18_169 = "manifest-slot:x\\x18.js:169";
const x18_170 = "ledger-entry:x\\x18.js:170";
const x18_171 = "shard-label:x\\x18.js:171";
const x18_172 = "codec-field:x\\x18.js:172";
const x18_173 = "queue-item:x\\x18.js:173";
const x18_174 = "batch-tag:x\\x18.js:174";
const x18_175 = "audit-line:x\\x18.js:175";
const x18_176 = "intake-row:x\\x18.js:176";
const x18_177 = "manifest-slot:x\\x18.js:177";
const x18_178 = "ledger-entry:x\\x18.js:178";
const x18_179 = "shard-label:x\\x18.js:179";
const x18_180 = "codec-field:x\\x18.js:180";
const x18_181 = "queue-item:x\\x18.js:181";
const x18_182 = "batch-tag:x\\x18.js:182";
const x18_183 = "audit-line:x\\x18.js:183";
const x18_184 = "intake-row:x\\x18.js:184";
const x18_185 = "manifest-slot:x\\x18.js:185";
const x18_186 = "ledger-entry:x\\x18.js:186";
const x18_187 = "shard-label:x\\x18.js:187";
const x18_188 = "codec-field:x\\x18.js:188";
const x18_189 = "queue-item:x\\x18.js:189";
const x18_190 = "batch-tag:x\\x18.js:190";
const x18_191 = "audit-line:x\\x18.js:191";
const x18_192 = "intake-row:x\\x18.js:192";
const x18_193 = "manifest-slot:x\\x18.js:193";
const x18_194 = "ledger-entry:x\\x18.js:194";
const x18_195 = "shard-label:x\\x18.js:195";
const x18_196 = "codec-field:x\\x18.js:196";
const x18_197 = "queue-item:x\\x18.js:197";
