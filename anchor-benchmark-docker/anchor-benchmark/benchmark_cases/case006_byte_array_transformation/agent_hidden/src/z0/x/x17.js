const localOrder = [4, 5, 3, 2, 1, 0];
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
    parts.push(key + "." + value + "|" + String(value.length + 17));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x17(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7f40 ^ text.length) >>> 0;
  let b = (0x1b874396 + 17) >>> 0;
  let d = (0x85ebde08 ^ 272) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 17) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x17_060 = "codec-field:x\\x17.js:060";
const x17_061 = "queue-item:x\\x17.js:061";
const x17_062 = "batch-tag:x\\x17.js:062";
const x17_063 = "audit-line:x\\x17.js:063";
const x17_064 = "intake-row:x\\x17.js:064";
const x17_065 = "manifest-slot:x\\x17.js:065";
const x17_066 = "ledger-entry:x\\x17.js:066";
const x17_067 = "shard-label:x\\x17.js:067";
const x17_068 = "codec-field:x\\x17.js:068";
const x17_069 = "queue-item:x\\x17.js:069";
const x17_070 = "batch-tag:x\\x17.js:070";
const x17_071 = "audit-line:x\\x17.js:071";
const x17_072 = "intake-row:x\\x17.js:072";
const x17_073 = "manifest-slot:x\\x17.js:073";
const x17_074 = "ledger-entry:x\\x17.js:074";
const x17_075 = "shard-label:x\\x17.js:075";
const x17_076 = "codec-field:x\\x17.js:076";
const x17_077 = "queue-item:x\\x17.js:077";
const x17_078 = "batch-tag:x\\x17.js:078";
const x17_079 = "audit-line:x\\x17.js:079";
const x17_080 = "intake-row:x\\x17.js:080";
const x17_081 = "manifest-slot:x\\x17.js:081";
const x17_082 = "ledger-entry:x\\x17.js:082";
const x17_083 = "shard-label:x\\x17.js:083";
const x17_084 = "codec-field:x\\x17.js:084";
const x17_085 = "queue-item:x\\x17.js:085";
const x17_086 = "batch-tag:x\\x17.js:086";
const x17_087 = "audit-line:x\\x17.js:087";
const x17_088 = "intake-row:x\\x17.js:088";
const x17_089 = "manifest-slot:x\\x17.js:089";
const x17_090 = "ledger-entry:x\\x17.js:090";
const x17_091 = "shard-label:x\\x17.js:091";
const x17_092 = "codec-field:x\\x17.js:092";
const x17_093 = "queue-item:x\\x17.js:093";
const x17_094 = "batch-tag:x\\x17.js:094";
const x17_095 = "audit-line:x\\x17.js:095";
const x17_096 = "intake-row:x\\x17.js:096";
const x17_097 = "manifest-slot:x\\x17.js:097";
const x17_098 = "ledger-entry:x\\x17.js:098";
const x17_099 = "shard-label:x\\x17.js:099";
const x17_100 = "codec-field:x\\x17.js:100";
const x17_101 = "queue-item:x\\x17.js:101";
const x17_102 = "batch-tag:x\\x17.js:102";
const x17_103 = "audit-line:x\\x17.js:103";
const x17_104 = "intake-row:x\\x17.js:104";
const x17_105 = "manifest-slot:x\\x17.js:105";
const x17_106 = "ledger-entry:x\\x17.js:106";
const x17_107 = "shard-label:x\\x17.js:107";
const x17_108 = "codec-field:x\\x17.js:108";
const x17_109 = "queue-item:x\\x17.js:109";
const x17_110 = "batch-tag:x\\x17.js:110";
const x17_111 = "audit-line:x\\x17.js:111";
const x17_112 = "intake-row:x\\x17.js:112";
const x17_113 = "manifest-slot:x\\x17.js:113";
const x17_114 = "ledger-entry:x\\x17.js:114";
const x17_115 = "shard-label:x\\x17.js:115";
const x17_116 = "codec-field:x\\x17.js:116";
const x17_117 = "queue-item:x\\x17.js:117";
const x17_118 = "batch-tag:x\\x17.js:118";
const x17_119 = "audit-line:x\\x17.js:119";
const x17_120 = "intake-row:x\\x17.js:120";
const x17_121 = "manifest-slot:x\\x17.js:121";
const x17_122 = "ledger-entry:x\\x17.js:122";
const x17_123 = "shard-label:x\\x17.js:123";
const x17_124 = "codec-field:x\\x17.js:124";
const x17_125 = "queue-item:x\\x17.js:125";
const x17_126 = "batch-tag:x\\x17.js:126";
const x17_127 = "audit-line:x\\x17.js:127";
const x17_128 = "intake-row:x\\x17.js:128";
const x17_129 = "manifest-slot:x\\x17.js:129";
const x17_130 = "ledger-entry:x\\x17.js:130";
const x17_131 = "shard-label:x\\x17.js:131";
const x17_132 = "codec-field:x\\x17.js:132";
const x17_133 = "queue-item:x\\x17.js:133";
const x17_134 = "batch-tag:x\\x17.js:134";
const x17_135 = "audit-line:x\\x17.js:135";
const x17_136 = "intake-row:x\\x17.js:136";
const x17_137 = "manifest-slot:x\\x17.js:137";
const x17_138 = "ledger-entry:x\\x17.js:138";
const x17_139 = "shard-label:x\\x17.js:139";
const x17_140 = "codec-field:x\\x17.js:140";
const x17_141 = "queue-item:x\\x17.js:141";
const x17_142 = "batch-tag:x\\x17.js:142";
const x17_143 = "audit-line:x\\x17.js:143";
const x17_144 = "intake-row:x\\x17.js:144";
const x17_145 = "manifest-slot:x\\x17.js:145";
const x17_146 = "ledger-entry:x\\x17.js:146";
const x17_147 = "shard-label:x\\x17.js:147";
const x17_148 = "codec-field:x\\x17.js:148";
const x17_149 = "queue-item:x\\x17.js:149";
const x17_150 = "batch-tag:x\\x17.js:150";
const x17_151 = "audit-line:x\\x17.js:151";
const x17_152 = "intake-row:x\\x17.js:152";
const x17_153 = "manifest-slot:x\\x17.js:153";
const x17_154 = "ledger-entry:x\\x17.js:154";
const x17_155 = "shard-label:x\\x17.js:155";
const x17_156 = "codec-field:x\\x17.js:156";
const x17_157 = "queue-item:x\\x17.js:157";
const x17_158 = "batch-tag:x\\x17.js:158";
const x17_159 = "audit-line:x\\x17.js:159";
const x17_160 = "intake-row:x\\x17.js:160";
const x17_161 = "manifest-slot:x\\x17.js:161";
const x17_162 = "ledger-entry:x\\x17.js:162";
const x17_163 = "shard-label:x\\x17.js:163";
const x17_164 = "codec-field:x\\x17.js:164";
const x17_165 = "queue-item:x\\x17.js:165";
const x17_166 = "batch-tag:x\\x17.js:166";
const x17_167 = "audit-line:x\\x17.js:167";
const x17_168 = "intake-row:x\\x17.js:168";
const x17_169 = "manifest-slot:x\\x17.js:169";
const x17_170 = "ledger-entry:x\\x17.js:170";
const x17_171 = "shard-label:x\\x17.js:171";
const x17_172 = "codec-field:x\\x17.js:172";
const x17_173 = "queue-item:x\\x17.js:173";
const x17_174 = "batch-tag:x\\x17.js:174";
const x17_175 = "audit-line:x\\x17.js:175";
const x17_176 = "intake-row:x\\x17.js:176";
const x17_177 = "manifest-slot:x\\x17.js:177";
const x17_178 = "ledger-entry:x\\x17.js:178";
const x17_179 = "shard-label:x\\x17.js:179";
const x17_180 = "codec-field:x\\x17.js:180";
const x17_181 = "queue-item:x\\x17.js:181";
const x17_182 = "batch-tag:x\\x17.js:182";
const x17_183 = "audit-line:x\\x17.js:183";
const x17_184 = "intake-row:x\\x17.js:184";
const x17_185 = "manifest-slot:x\\x17.js:185";
const x17_186 = "ledger-entry:x\\x17.js:186";
const x17_187 = "shard-label:x\\x17.js:187";
const x17_188 = "codec-field:x\\x17.js:188";
const x17_189 = "queue-item:x\\x17.js:189";
const x17_190 = "batch-tag:x\\x17.js:190";
const x17_191 = "audit-line:x\\x17.js:191";
const x17_192 = "intake-row:x\\x17.js:192";
const x17_193 = "manifest-slot:x\\x17.js:193";
const x17_194 = "ledger-entry:x\\x17.js:194";
const x17_195 = "shard-label:x\\x17.js:195";
const x17_196 = "codec-field:x\\x17.js:196";
const x17_197 = "queue-item:x\\x17.js:197";
