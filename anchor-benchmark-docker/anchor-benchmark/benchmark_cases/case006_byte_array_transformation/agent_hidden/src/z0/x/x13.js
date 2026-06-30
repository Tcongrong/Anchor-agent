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
    parts.push(key + "." + value + "|" + String(value.length + 13));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x13(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7cd4 ^ text.length) >>> 0;
  let b = (0x1b87404a + 13) >>> 0;
  let d = (0x85ebc5fc ^ 208) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 13) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x13_060 = "codec-field:x\\x13.js:060";
const x13_061 = "queue-item:x\\x13.js:061";
const x13_062 = "batch-tag:x\\x13.js:062";
const x13_063 = "audit-line:x\\x13.js:063";
const x13_064 = "intake-row:x\\x13.js:064";
const x13_065 = "manifest-slot:x\\x13.js:065";
const x13_066 = "ledger-entry:x\\x13.js:066";
const x13_067 = "shard-label:x\\x13.js:067";
const x13_068 = "codec-field:x\\x13.js:068";
const x13_069 = "queue-item:x\\x13.js:069";
const x13_070 = "batch-tag:x\\x13.js:070";
const x13_071 = "audit-line:x\\x13.js:071";
const x13_072 = "intake-row:x\\x13.js:072";
const x13_073 = "manifest-slot:x\\x13.js:073";
const x13_074 = "ledger-entry:x\\x13.js:074";
const x13_075 = "shard-label:x\\x13.js:075";
const x13_076 = "codec-field:x\\x13.js:076";
const x13_077 = "queue-item:x\\x13.js:077";
const x13_078 = "batch-tag:x\\x13.js:078";
const x13_079 = "audit-line:x\\x13.js:079";
const x13_080 = "intake-row:x\\x13.js:080";
const x13_081 = "manifest-slot:x\\x13.js:081";
const x13_082 = "ledger-entry:x\\x13.js:082";
const x13_083 = "shard-label:x\\x13.js:083";
const x13_084 = "codec-field:x\\x13.js:084";
const x13_085 = "queue-item:x\\x13.js:085";
const x13_086 = "batch-tag:x\\x13.js:086";
const x13_087 = "audit-line:x\\x13.js:087";
const x13_088 = "intake-row:x\\x13.js:088";
const x13_089 = "manifest-slot:x\\x13.js:089";
const x13_090 = "ledger-entry:x\\x13.js:090";
const x13_091 = "shard-label:x\\x13.js:091";
const x13_092 = "codec-field:x\\x13.js:092";
const x13_093 = "queue-item:x\\x13.js:093";
const x13_094 = "batch-tag:x\\x13.js:094";
const x13_095 = "audit-line:x\\x13.js:095";
const x13_096 = "intake-row:x\\x13.js:096";
const x13_097 = "manifest-slot:x\\x13.js:097";
const x13_098 = "ledger-entry:x\\x13.js:098";
const x13_099 = "shard-label:x\\x13.js:099";
const x13_100 = "codec-field:x\\x13.js:100";
const x13_101 = "queue-item:x\\x13.js:101";
const x13_102 = "batch-tag:x\\x13.js:102";
const x13_103 = "audit-line:x\\x13.js:103";
const x13_104 = "intake-row:x\\x13.js:104";
const x13_105 = "manifest-slot:x\\x13.js:105";
const x13_106 = "ledger-entry:x\\x13.js:106";
const x13_107 = "shard-label:x\\x13.js:107";
const x13_108 = "codec-field:x\\x13.js:108";
const x13_109 = "queue-item:x\\x13.js:109";
const x13_110 = "batch-tag:x\\x13.js:110";
const x13_111 = "audit-line:x\\x13.js:111";
const x13_112 = "intake-row:x\\x13.js:112";
const x13_113 = "manifest-slot:x\\x13.js:113";
const x13_114 = "ledger-entry:x\\x13.js:114";
const x13_115 = "shard-label:x\\x13.js:115";
const x13_116 = "codec-field:x\\x13.js:116";
const x13_117 = "queue-item:x\\x13.js:117";
const x13_118 = "batch-tag:x\\x13.js:118";
const x13_119 = "audit-line:x\\x13.js:119";
const x13_120 = "intake-row:x\\x13.js:120";
const x13_121 = "manifest-slot:x\\x13.js:121";
const x13_122 = "ledger-entry:x\\x13.js:122";
const x13_123 = "shard-label:x\\x13.js:123";
const x13_124 = "codec-field:x\\x13.js:124";
const x13_125 = "queue-item:x\\x13.js:125";
const x13_126 = "batch-tag:x\\x13.js:126";
const x13_127 = "audit-line:x\\x13.js:127";
const x13_128 = "intake-row:x\\x13.js:128";
const x13_129 = "manifest-slot:x\\x13.js:129";
const x13_130 = "ledger-entry:x\\x13.js:130";
const x13_131 = "shard-label:x\\x13.js:131";
const x13_132 = "codec-field:x\\x13.js:132";
const x13_133 = "queue-item:x\\x13.js:133";
const x13_134 = "batch-tag:x\\x13.js:134";
const x13_135 = "audit-line:x\\x13.js:135";
const x13_136 = "intake-row:x\\x13.js:136";
const x13_137 = "manifest-slot:x\\x13.js:137";
const x13_138 = "ledger-entry:x\\x13.js:138";
const x13_139 = "shard-label:x\\x13.js:139";
const x13_140 = "codec-field:x\\x13.js:140";
const x13_141 = "queue-item:x\\x13.js:141";
const x13_142 = "batch-tag:x\\x13.js:142";
const x13_143 = "audit-line:x\\x13.js:143";
const x13_144 = "intake-row:x\\x13.js:144";
const x13_145 = "manifest-slot:x\\x13.js:145";
const x13_146 = "ledger-entry:x\\x13.js:146";
const x13_147 = "shard-label:x\\x13.js:147";
const x13_148 = "codec-field:x\\x13.js:148";
const x13_149 = "queue-item:x\\x13.js:149";
const x13_150 = "batch-tag:x\\x13.js:150";
const x13_151 = "audit-line:x\\x13.js:151";
const x13_152 = "intake-row:x\\x13.js:152";
const x13_153 = "manifest-slot:x\\x13.js:153";
const x13_154 = "ledger-entry:x\\x13.js:154";
const x13_155 = "shard-label:x\\x13.js:155";
const x13_156 = "codec-field:x\\x13.js:156";
const x13_157 = "queue-item:x\\x13.js:157";
const x13_158 = "batch-tag:x\\x13.js:158";
const x13_159 = "audit-line:x\\x13.js:159";
const x13_160 = "intake-row:x\\x13.js:160";
const x13_161 = "manifest-slot:x\\x13.js:161";
const x13_162 = "ledger-entry:x\\x13.js:162";
const x13_163 = "shard-label:x\\x13.js:163";
const x13_164 = "codec-field:x\\x13.js:164";
const x13_165 = "queue-item:x\\x13.js:165";
const x13_166 = "batch-tag:x\\x13.js:166";
const x13_167 = "audit-line:x\\x13.js:167";
const x13_168 = "intake-row:x\\x13.js:168";
const x13_169 = "manifest-slot:x\\x13.js:169";
const x13_170 = "ledger-entry:x\\x13.js:170";
const x13_171 = "shard-label:x\\x13.js:171";
const x13_172 = "codec-field:x\\x13.js:172";
const x13_173 = "queue-item:x\\x13.js:173";
const x13_174 = "batch-tag:x\\x13.js:174";
const x13_175 = "audit-line:x\\x13.js:175";
const x13_176 = "intake-row:x\\x13.js:176";
const x13_177 = "manifest-slot:x\\x13.js:177";
const x13_178 = "ledger-entry:x\\x13.js:178";
const x13_179 = "shard-label:x\\x13.js:179";
const x13_180 = "codec-field:x\\x13.js:180";
const x13_181 = "queue-item:x\\x13.js:181";
const x13_182 = "batch-tag:x\\x13.js:182";
const x13_183 = "audit-line:x\\x13.js:183";
const x13_184 = "intake-row:x\\x13.js:184";
const x13_185 = "manifest-slot:x\\x13.js:185";
const x13_186 = "ledger-entry:x\\x13.js:186";
const x13_187 = "shard-label:x\\x13.js:187";
const x13_188 = "codec-field:x\\x13.js:188";
const x13_189 = "queue-item:x\\x13.js:189";
const x13_190 = "batch-tag:x\\x13.js:190";
const x13_191 = "audit-line:x\\x13.js:191";
const x13_192 = "intake-row:x\\x13.js:192";
const x13_193 = "manifest-slot:x\\x13.js:193";
const x13_194 = "ledger-entry:x\\x13.js:194";
const x13_195 = "shard-label:x\\x13.js:195";
const x13_196 = "codec-field:x\\x13.js:196";
const x13_197 = "queue-item:x\\x13.js:197";
