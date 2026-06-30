const localOrder = [3, 0, 5, 4, 1, 2];
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
    parts.push(key + "." + value + "~" + String(value.length + 15));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x15(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7c1e ^ text.length) >>> 0;
  let b = (0x1b8741f0 + 15) >>> 0;
  let d = (0x85ebdb96 ^ 240) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 15) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x15_060 = "codec-field:x\\x15.js:060";
const x15_061 = "queue-item:x\\x15.js:061";
const x15_062 = "batch-tag:x\\x15.js:062";
const x15_063 = "audit-line:x\\x15.js:063";
const x15_064 = "intake-row:x\\x15.js:064";
const x15_065 = "manifest-slot:x\\x15.js:065";
const x15_066 = "ledger-entry:x\\x15.js:066";
const x15_067 = "shard-label:x\\x15.js:067";
const x15_068 = "codec-field:x\\x15.js:068";
const x15_069 = "queue-item:x\\x15.js:069";
const x15_070 = "batch-tag:x\\x15.js:070";
const x15_071 = "audit-line:x\\x15.js:071";
const x15_072 = "intake-row:x\\x15.js:072";
const x15_073 = "manifest-slot:x\\x15.js:073";
const x15_074 = "ledger-entry:x\\x15.js:074";
const x15_075 = "shard-label:x\\x15.js:075";
const x15_076 = "codec-field:x\\x15.js:076";
const x15_077 = "queue-item:x\\x15.js:077";
const x15_078 = "batch-tag:x\\x15.js:078";
const x15_079 = "audit-line:x\\x15.js:079";
const x15_080 = "intake-row:x\\x15.js:080";
const x15_081 = "manifest-slot:x\\x15.js:081";
const x15_082 = "ledger-entry:x\\x15.js:082";
const x15_083 = "shard-label:x\\x15.js:083";
const x15_084 = "codec-field:x\\x15.js:084";
const x15_085 = "queue-item:x\\x15.js:085";
const x15_086 = "batch-tag:x\\x15.js:086";
const x15_087 = "audit-line:x\\x15.js:087";
const x15_088 = "intake-row:x\\x15.js:088";
const x15_089 = "manifest-slot:x\\x15.js:089";
const x15_090 = "ledger-entry:x\\x15.js:090";
const x15_091 = "shard-label:x\\x15.js:091";
const x15_092 = "codec-field:x\\x15.js:092";
const x15_093 = "queue-item:x\\x15.js:093";
const x15_094 = "batch-tag:x\\x15.js:094";
const x15_095 = "audit-line:x\\x15.js:095";
const x15_096 = "intake-row:x\\x15.js:096";
const x15_097 = "manifest-slot:x\\x15.js:097";
const x15_098 = "ledger-entry:x\\x15.js:098";
const x15_099 = "shard-label:x\\x15.js:099";
const x15_100 = "codec-field:x\\x15.js:100";
const x15_101 = "queue-item:x\\x15.js:101";
const x15_102 = "batch-tag:x\\x15.js:102";
const x15_103 = "audit-line:x\\x15.js:103";
const x15_104 = "intake-row:x\\x15.js:104";
const x15_105 = "manifest-slot:x\\x15.js:105";
const x15_106 = "ledger-entry:x\\x15.js:106";
const x15_107 = "shard-label:x\\x15.js:107";
const x15_108 = "codec-field:x\\x15.js:108";
const x15_109 = "queue-item:x\\x15.js:109";
const x15_110 = "batch-tag:x\\x15.js:110";
const x15_111 = "audit-line:x\\x15.js:111";
const x15_112 = "intake-row:x\\x15.js:112";
const x15_113 = "manifest-slot:x\\x15.js:113";
const x15_114 = "ledger-entry:x\\x15.js:114";
const x15_115 = "shard-label:x\\x15.js:115";
const x15_116 = "codec-field:x\\x15.js:116";
const x15_117 = "queue-item:x\\x15.js:117";
const x15_118 = "batch-tag:x\\x15.js:118";
const x15_119 = "audit-line:x\\x15.js:119";
const x15_120 = "intake-row:x\\x15.js:120";
const x15_121 = "manifest-slot:x\\x15.js:121";
const x15_122 = "ledger-entry:x\\x15.js:122";
const x15_123 = "shard-label:x\\x15.js:123";
const x15_124 = "codec-field:x\\x15.js:124";
const x15_125 = "queue-item:x\\x15.js:125";
const x15_126 = "batch-tag:x\\x15.js:126";
const x15_127 = "audit-line:x\\x15.js:127";
const x15_128 = "intake-row:x\\x15.js:128";
const x15_129 = "manifest-slot:x\\x15.js:129";
const x15_130 = "ledger-entry:x\\x15.js:130";
const x15_131 = "shard-label:x\\x15.js:131";
const x15_132 = "codec-field:x\\x15.js:132";
const x15_133 = "queue-item:x\\x15.js:133";
const x15_134 = "batch-tag:x\\x15.js:134";
const x15_135 = "audit-line:x\\x15.js:135";
const x15_136 = "intake-row:x\\x15.js:136";
const x15_137 = "manifest-slot:x\\x15.js:137";
const x15_138 = "ledger-entry:x\\x15.js:138";
const x15_139 = "shard-label:x\\x15.js:139";
const x15_140 = "codec-field:x\\x15.js:140";
const x15_141 = "queue-item:x\\x15.js:141";
const x15_142 = "batch-tag:x\\x15.js:142";
const x15_143 = "audit-line:x\\x15.js:143";
const x15_144 = "intake-row:x\\x15.js:144";
const x15_145 = "manifest-slot:x\\x15.js:145";
const x15_146 = "ledger-entry:x\\x15.js:146";
const x15_147 = "shard-label:x\\x15.js:147";
const x15_148 = "codec-field:x\\x15.js:148";
const x15_149 = "queue-item:x\\x15.js:149";
const x15_150 = "batch-tag:x\\x15.js:150";
const x15_151 = "audit-line:x\\x15.js:151";
const x15_152 = "intake-row:x\\x15.js:152";
const x15_153 = "manifest-slot:x\\x15.js:153";
const x15_154 = "ledger-entry:x\\x15.js:154";
const x15_155 = "shard-label:x\\x15.js:155";
const x15_156 = "codec-field:x\\x15.js:156";
const x15_157 = "queue-item:x\\x15.js:157";
const x15_158 = "batch-tag:x\\x15.js:158";
const x15_159 = "audit-line:x\\x15.js:159";
const x15_160 = "intake-row:x\\x15.js:160";
const x15_161 = "manifest-slot:x\\x15.js:161";
const x15_162 = "ledger-entry:x\\x15.js:162";
const x15_163 = "shard-label:x\\x15.js:163";
const x15_164 = "codec-field:x\\x15.js:164";
const x15_165 = "queue-item:x\\x15.js:165";
const x15_166 = "batch-tag:x\\x15.js:166";
const x15_167 = "audit-line:x\\x15.js:167";
const x15_168 = "intake-row:x\\x15.js:168";
const x15_169 = "manifest-slot:x\\x15.js:169";
const x15_170 = "ledger-entry:x\\x15.js:170";
const x15_171 = "shard-label:x\\x15.js:171";
const x15_172 = "codec-field:x\\x15.js:172";
const x15_173 = "queue-item:x\\x15.js:173";
const x15_174 = "batch-tag:x\\x15.js:174";
const x15_175 = "audit-line:x\\x15.js:175";
const x15_176 = "intake-row:x\\x15.js:176";
const x15_177 = "manifest-slot:x\\x15.js:177";
const x15_178 = "ledger-entry:x\\x15.js:178";
const x15_179 = "shard-label:x\\x15.js:179";
const x15_180 = "codec-field:x\\x15.js:180";
const x15_181 = "queue-item:x\\x15.js:181";
const x15_182 = "batch-tag:x\\x15.js:182";
const x15_183 = "audit-line:x\\x15.js:183";
const x15_184 = "intake-row:x\\x15.js:184";
const x15_185 = "manifest-slot:x\\x15.js:185";
const x15_186 = "ledger-entry:x\\x15.js:186";
const x15_187 = "shard-label:x\\x15.js:187";
const x15_188 = "codec-field:x\\x15.js:188";
const x15_189 = "queue-item:x\\x15.js:189";
const x15_190 = "batch-tag:x\\x15.js:190";
const x15_191 = "audit-line:x\\x15.js:191";
const x15_192 = "intake-row:x\\x15.js:192";
const x15_193 = "manifest-slot:x\\x15.js:193";
const x15_194 = "ledger-entry:x\\x15.js:194";
const x15_195 = "shard-label:x\\x15.js:195";
const x15_196 = "codec-field:x\\x15.js:196";
const x15_197 = "queue-item:x\\x15.js:197";
