const localOrder = [2, 5, 3, 1, 0, 4];
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
    parts.push(key + "." + value + "|" + String(value.length + 25));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x25(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7028 ^ text.length) >>> 0;
  let b = (0x1b874a2e + 25) >>> 0;
  let d = (0x85ebd790 ^ 400) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 25) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x25_060 = "codec-field:x\\x25.js:060";
const x25_061 = "queue-item:x\\x25.js:061";
const x25_062 = "batch-tag:x\\x25.js:062";
const x25_063 = "audit-line:x\\x25.js:063";
const x25_064 = "intake-row:x\\x25.js:064";
const x25_065 = "manifest-slot:x\\x25.js:065";
const x25_066 = "ledger-entry:x\\x25.js:066";
const x25_067 = "shard-label:x\\x25.js:067";
const x25_068 = "codec-field:x\\x25.js:068";
const x25_069 = "queue-item:x\\x25.js:069";
const x25_070 = "batch-tag:x\\x25.js:070";
const x25_071 = "audit-line:x\\x25.js:071";
const x25_072 = "intake-row:x\\x25.js:072";
const x25_073 = "manifest-slot:x\\x25.js:073";
const x25_074 = "ledger-entry:x\\x25.js:074";
const x25_075 = "shard-label:x\\x25.js:075";
const x25_076 = "codec-field:x\\x25.js:076";
const x25_077 = "queue-item:x\\x25.js:077";
const x25_078 = "batch-tag:x\\x25.js:078";
const x25_079 = "audit-line:x\\x25.js:079";
const x25_080 = "intake-row:x\\x25.js:080";
const x25_081 = "manifest-slot:x\\x25.js:081";
const x25_082 = "ledger-entry:x\\x25.js:082";
const x25_083 = "shard-label:x\\x25.js:083";
const x25_084 = "codec-field:x\\x25.js:084";
const x25_085 = "queue-item:x\\x25.js:085";
const x25_086 = "batch-tag:x\\x25.js:086";
const x25_087 = "audit-line:x\\x25.js:087";
const x25_088 = "intake-row:x\\x25.js:088";
const x25_089 = "manifest-slot:x\\x25.js:089";
const x25_090 = "ledger-entry:x\\x25.js:090";
const x25_091 = "shard-label:x\\x25.js:091";
const x25_092 = "codec-field:x\\x25.js:092";
const x25_093 = "queue-item:x\\x25.js:093";
const x25_094 = "batch-tag:x\\x25.js:094";
const x25_095 = "audit-line:x\\x25.js:095";
const x25_096 = "intake-row:x\\x25.js:096";
const x25_097 = "manifest-slot:x\\x25.js:097";
const x25_098 = "ledger-entry:x\\x25.js:098";
const x25_099 = "shard-label:x\\x25.js:099";
const x25_100 = "codec-field:x\\x25.js:100";
const x25_101 = "queue-item:x\\x25.js:101";
const x25_102 = "batch-tag:x\\x25.js:102";
const x25_103 = "audit-line:x\\x25.js:103";
const x25_104 = "intake-row:x\\x25.js:104";
const x25_105 = "manifest-slot:x\\x25.js:105";
const x25_106 = "ledger-entry:x\\x25.js:106";
const x25_107 = "shard-label:x\\x25.js:107";
const x25_108 = "codec-field:x\\x25.js:108";
const x25_109 = "queue-item:x\\x25.js:109";
const x25_110 = "batch-tag:x\\x25.js:110";
const x25_111 = "audit-line:x\\x25.js:111";
const x25_112 = "intake-row:x\\x25.js:112";
const x25_113 = "manifest-slot:x\\x25.js:113";
const x25_114 = "ledger-entry:x\\x25.js:114";
const x25_115 = "shard-label:x\\x25.js:115";
const x25_116 = "codec-field:x\\x25.js:116";
const x25_117 = "queue-item:x\\x25.js:117";
const x25_118 = "batch-tag:x\\x25.js:118";
const x25_119 = "audit-line:x\\x25.js:119";
const x25_120 = "intake-row:x\\x25.js:120";
const x25_121 = "manifest-slot:x\\x25.js:121";
const x25_122 = "ledger-entry:x\\x25.js:122";
const x25_123 = "shard-label:x\\x25.js:123";
const x25_124 = "codec-field:x\\x25.js:124";
const x25_125 = "queue-item:x\\x25.js:125";
const x25_126 = "batch-tag:x\\x25.js:126";
const x25_127 = "audit-line:x\\x25.js:127";
const x25_128 = "intake-row:x\\x25.js:128";
const x25_129 = "manifest-slot:x\\x25.js:129";
const x25_130 = "ledger-entry:x\\x25.js:130";
const x25_131 = "shard-label:x\\x25.js:131";
const x25_132 = "codec-field:x\\x25.js:132";
const x25_133 = "queue-item:x\\x25.js:133";
const x25_134 = "batch-tag:x\\x25.js:134";
const x25_135 = "audit-line:x\\x25.js:135";
const x25_136 = "intake-row:x\\x25.js:136";
const x25_137 = "manifest-slot:x\\x25.js:137";
const x25_138 = "ledger-entry:x\\x25.js:138";
const x25_139 = "shard-label:x\\x25.js:139";
const x25_140 = "codec-field:x\\x25.js:140";
const x25_141 = "queue-item:x\\x25.js:141";
const x25_142 = "batch-tag:x\\x25.js:142";
const x25_143 = "audit-line:x\\x25.js:143";
const x25_144 = "intake-row:x\\x25.js:144";
const x25_145 = "manifest-slot:x\\x25.js:145";
const x25_146 = "ledger-entry:x\\x25.js:146";
const x25_147 = "shard-label:x\\x25.js:147";
const x25_148 = "codec-field:x\\x25.js:148";
const x25_149 = "queue-item:x\\x25.js:149";
const x25_150 = "batch-tag:x\\x25.js:150";
const x25_151 = "audit-line:x\\x25.js:151";
const x25_152 = "intake-row:x\\x25.js:152";
const x25_153 = "manifest-slot:x\\x25.js:153";
const x25_154 = "ledger-entry:x\\x25.js:154";
const x25_155 = "shard-label:x\\x25.js:155";
const x25_156 = "codec-field:x\\x25.js:156";
const x25_157 = "queue-item:x\\x25.js:157";
const x25_158 = "batch-tag:x\\x25.js:158";
const x25_159 = "audit-line:x\\x25.js:159";
const x25_160 = "intake-row:x\\x25.js:160";
const x25_161 = "manifest-slot:x\\x25.js:161";
const x25_162 = "ledger-entry:x\\x25.js:162";
const x25_163 = "shard-label:x\\x25.js:163";
const x25_164 = "codec-field:x\\x25.js:164";
const x25_165 = "queue-item:x\\x25.js:165";
const x25_166 = "batch-tag:x\\x25.js:166";
const x25_167 = "audit-line:x\\x25.js:167";
const x25_168 = "intake-row:x\\x25.js:168";
const x25_169 = "manifest-slot:x\\x25.js:169";
const x25_170 = "ledger-entry:x\\x25.js:170";
const x25_171 = "shard-label:x\\x25.js:171";
const x25_172 = "codec-field:x\\x25.js:172";
const x25_173 = "queue-item:x\\x25.js:173";
const x25_174 = "batch-tag:x\\x25.js:174";
const x25_175 = "audit-line:x\\x25.js:175";
const x25_176 = "intake-row:x\\x25.js:176";
const x25_177 = "manifest-slot:x\\x25.js:177";
const x25_178 = "ledger-entry:x\\x25.js:178";
const x25_179 = "shard-label:x\\x25.js:179";
const x25_180 = "codec-field:x\\x25.js:180";
const x25_181 = "queue-item:x\\x25.js:181";
const x25_182 = "batch-tag:x\\x25.js:182";
const x25_183 = "audit-line:x\\x25.js:183";
const x25_184 = "intake-row:x\\x25.js:184";
const x25_185 = "manifest-slot:x\\x25.js:185";
const x25_186 = "ledger-entry:x\\x25.js:186";
const x25_187 = "shard-label:x\\x25.js:187";
const x25_188 = "codec-field:x\\x25.js:188";
const x25_189 = "queue-item:x\\x25.js:189";
const x25_190 = "batch-tag:x\\x25.js:190";
const x25_191 = "audit-line:x\\x25.js:191";
const x25_192 = "intake-row:x\\x25.js:192";
const x25_193 = "manifest-slot:x\\x25.js:193";
const x25_194 = "ledger-entry:x\\x25.js:194";
const x25_195 = "shard-label:x\\x25.js:195";
const x25_196 = "codec-field:x\\x25.js:196";
const x25_197 = "queue-item:x\\x25.js:197";
