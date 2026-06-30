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
    parts.push(key + ":" + value + "~" + String(value.length + 12));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("|");
}

export function x12(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7d49 ^ text.length) >>> 0;
  let b = (0x1b873f77 + 12) >>> 0;
  let d = (0x85ebc40f ^ 192) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 12) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x12_060 = "codec-field:x\\x12.js:060";
const x12_061 = "queue-item:x\\x12.js:061";
const x12_062 = "batch-tag:x\\x12.js:062";
const x12_063 = "audit-line:x\\x12.js:063";
const x12_064 = "intake-row:x\\x12.js:064";
const x12_065 = "manifest-slot:x\\x12.js:065";
const x12_066 = "ledger-entry:x\\x12.js:066";
const x12_067 = "shard-label:x\\x12.js:067";
const x12_068 = "codec-field:x\\x12.js:068";
const x12_069 = "queue-item:x\\x12.js:069";
const x12_070 = "batch-tag:x\\x12.js:070";
const x12_071 = "audit-line:x\\x12.js:071";
const x12_072 = "intake-row:x\\x12.js:072";
const x12_073 = "manifest-slot:x\\x12.js:073";
const x12_074 = "ledger-entry:x\\x12.js:074";
const x12_075 = "shard-label:x\\x12.js:075";
const x12_076 = "codec-field:x\\x12.js:076";
const x12_077 = "queue-item:x\\x12.js:077";
const x12_078 = "batch-tag:x\\x12.js:078";
const x12_079 = "audit-line:x\\x12.js:079";
const x12_080 = "intake-row:x\\x12.js:080";
const x12_081 = "manifest-slot:x\\x12.js:081";
const x12_082 = "ledger-entry:x\\x12.js:082";
const x12_083 = "shard-label:x\\x12.js:083";
const x12_084 = "codec-field:x\\x12.js:084";
const x12_085 = "queue-item:x\\x12.js:085";
const x12_086 = "batch-tag:x\\x12.js:086";
const x12_087 = "audit-line:x\\x12.js:087";
const x12_088 = "intake-row:x\\x12.js:088";
const x12_089 = "manifest-slot:x\\x12.js:089";
const x12_090 = "ledger-entry:x\\x12.js:090";
const x12_091 = "shard-label:x\\x12.js:091";
const x12_092 = "codec-field:x\\x12.js:092";
const x12_093 = "queue-item:x\\x12.js:093";
const x12_094 = "batch-tag:x\\x12.js:094";
const x12_095 = "audit-line:x\\x12.js:095";
const x12_096 = "intake-row:x\\x12.js:096";
const x12_097 = "manifest-slot:x\\x12.js:097";
const x12_098 = "ledger-entry:x\\x12.js:098";
const x12_099 = "shard-label:x\\x12.js:099";
const x12_100 = "codec-field:x\\x12.js:100";
const x12_101 = "queue-item:x\\x12.js:101";
const x12_102 = "batch-tag:x\\x12.js:102";
const x12_103 = "audit-line:x\\x12.js:103";
const x12_104 = "intake-row:x\\x12.js:104";
const x12_105 = "manifest-slot:x\\x12.js:105";
const x12_106 = "ledger-entry:x\\x12.js:106";
const x12_107 = "shard-label:x\\x12.js:107";
const x12_108 = "codec-field:x\\x12.js:108";
const x12_109 = "queue-item:x\\x12.js:109";
const x12_110 = "batch-tag:x\\x12.js:110";
const x12_111 = "audit-line:x\\x12.js:111";
const x12_112 = "intake-row:x\\x12.js:112";
const x12_113 = "manifest-slot:x\\x12.js:113";
const x12_114 = "ledger-entry:x\\x12.js:114";
const x12_115 = "shard-label:x\\x12.js:115";
const x12_116 = "codec-field:x\\x12.js:116";
const x12_117 = "queue-item:x\\x12.js:117";
const x12_118 = "batch-tag:x\\x12.js:118";
const x12_119 = "audit-line:x\\x12.js:119";
const x12_120 = "intake-row:x\\x12.js:120";
const x12_121 = "manifest-slot:x\\x12.js:121";
const x12_122 = "ledger-entry:x\\x12.js:122";
const x12_123 = "shard-label:x\\x12.js:123";
const x12_124 = "codec-field:x\\x12.js:124";
const x12_125 = "queue-item:x\\x12.js:125";
const x12_126 = "batch-tag:x\\x12.js:126";
const x12_127 = "audit-line:x\\x12.js:127";
const x12_128 = "intake-row:x\\x12.js:128";
const x12_129 = "manifest-slot:x\\x12.js:129";
const x12_130 = "ledger-entry:x\\x12.js:130";
const x12_131 = "shard-label:x\\x12.js:131";
const x12_132 = "codec-field:x\\x12.js:132";
const x12_133 = "queue-item:x\\x12.js:133";
const x12_134 = "batch-tag:x\\x12.js:134";
const x12_135 = "audit-line:x\\x12.js:135";
const x12_136 = "intake-row:x\\x12.js:136";
const x12_137 = "manifest-slot:x\\x12.js:137";
const x12_138 = "ledger-entry:x\\x12.js:138";
const x12_139 = "shard-label:x\\x12.js:139";
const x12_140 = "codec-field:x\\x12.js:140";
const x12_141 = "queue-item:x\\x12.js:141";
const x12_142 = "batch-tag:x\\x12.js:142";
const x12_143 = "audit-line:x\\x12.js:143";
const x12_144 = "intake-row:x\\x12.js:144";
const x12_145 = "manifest-slot:x\\x12.js:145";
const x12_146 = "ledger-entry:x\\x12.js:146";
const x12_147 = "shard-label:x\\x12.js:147";
const x12_148 = "codec-field:x\\x12.js:148";
const x12_149 = "queue-item:x\\x12.js:149";
const x12_150 = "batch-tag:x\\x12.js:150";
const x12_151 = "audit-line:x\\x12.js:151";
const x12_152 = "intake-row:x\\x12.js:152";
const x12_153 = "manifest-slot:x\\x12.js:153";
const x12_154 = "ledger-entry:x\\x12.js:154";
const x12_155 = "shard-label:x\\x12.js:155";
const x12_156 = "codec-field:x\\x12.js:156";
const x12_157 = "queue-item:x\\x12.js:157";
const x12_158 = "batch-tag:x\\x12.js:158";
const x12_159 = "audit-line:x\\x12.js:159";
const x12_160 = "intake-row:x\\x12.js:160";
const x12_161 = "manifest-slot:x\\x12.js:161";
const x12_162 = "ledger-entry:x\\x12.js:162";
const x12_163 = "shard-label:x\\x12.js:163";
const x12_164 = "codec-field:x\\x12.js:164";
const x12_165 = "queue-item:x\\x12.js:165";
const x12_166 = "batch-tag:x\\x12.js:166";
const x12_167 = "audit-line:x\\x12.js:167";
const x12_168 = "intake-row:x\\x12.js:168";
const x12_169 = "manifest-slot:x\\x12.js:169";
const x12_170 = "ledger-entry:x\\x12.js:170";
const x12_171 = "shard-label:x\\x12.js:171";
const x12_172 = "codec-field:x\\x12.js:172";
const x12_173 = "queue-item:x\\x12.js:173";
const x12_174 = "batch-tag:x\\x12.js:174";
const x12_175 = "audit-line:x\\x12.js:175";
const x12_176 = "intake-row:x\\x12.js:176";
const x12_177 = "manifest-slot:x\\x12.js:177";
const x12_178 = "ledger-entry:x\\x12.js:178";
const x12_179 = "shard-label:x\\x12.js:179";
const x12_180 = "codec-field:x\\x12.js:180";
const x12_181 = "queue-item:x\\x12.js:181";
const x12_182 = "batch-tag:x\\x12.js:182";
const x12_183 = "audit-line:x\\x12.js:183";
const x12_184 = "intake-row:x\\x12.js:184";
const x12_185 = "manifest-slot:x\\x12.js:185";
const x12_186 = "ledger-entry:x\\x12.js:186";
const x12_187 = "shard-label:x\\x12.js:187";
const x12_188 = "codec-field:x\\x12.js:188";
const x12_189 = "queue-item:x\\x12.js:189";
const x12_190 = "batch-tag:x\\x12.js:190";
const x12_191 = "audit-line:x\\x12.js:191";
const x12_192 = "intake-row:x\\x12.js:192";
const x12_193 = "manifest-slot:x\\x12.js:193";
const x12_194 = "ledger-entry:x\\x12.js:194";
const x12_195 = "shard-label:x\\x12.js:195";
const x12_196 = "codec-field:x\\x12.js:196";
const x12_197 = "queue-item:x\\x12.js:197";
