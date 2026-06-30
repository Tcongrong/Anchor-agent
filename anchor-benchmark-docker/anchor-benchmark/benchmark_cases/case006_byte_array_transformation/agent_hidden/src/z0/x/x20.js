const localOrder = [5, 4, 0, 1, 2, 3];
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
    parts.push(key + ":" + value + "|" + String(value.length + 20));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("|");
}

export function x20(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7e11 ^ text.length) >>> 0;
  let b = (0x1b87460f + 20) >>> 0;
  let d = (0x85ebdd97 ^ 320) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 20) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x20_060 = "codec-field:x\\x20.js:060";
const x20_061 = "queue-item:x\\x20.js:061";
const x20_062 = "batch-tag:x\\x20.js:062";
const x20_063 = "audit-line:x\\x20.js:063";
const x20_064 = "intake-row:x\\x20.js:064";
const x20_065 = "manifest-slot:x\\x20.js:065";
const x20_066 = "ledger-entry:x\\x20.js:066";
const x20_067 = "shard-label:x\\x20.js:067";
const x20_068 = "codec-field:x\\x20.js:068";
const x20_069 = "queue-item:x\\x20.js:069";
const x20_070 = "batch-tag:x\\x20.js:070";
const x20_071 = "audit-line:x\\x20.js:071";
const x20_072 = "intake-row:x\\x20.js:072";
const x20_073 = "manifest-slot:x\\x20.js:073";
const x20_074 = "ledger-entry:x\\x20.js:074";
const x20_075 = "shard-label:x\\x20.js:075";
const x20_076 = "codec-field:x\\x20.js:076";
const x20_077 = "queue-item:x\\x20.js:077";
const x20_078 = "batch-tag:x\\x20.js:078";
const x20_079 = "audit-line:x\\x20.js:079";
const x20_080 = "intake-row:x\\x20.js:080";
const x20_081 = "manifest-slot:x\\x20.js:081";
const x20_082 = "ledger-entry:x\\x20.js:082";
const x20_083 = "shard-label:x\\x20.js:083";
const x20_084 = "codec-field:x\\x20.js:084";
const x20_085 = "queue-item:x\\x20.js:085";
const x20_086 = "batch-tag:x\\x20.js:086";
const x20_087 = "audit-line:x\\x20.js:087";
const x20_088 = "intake-row:x\\x20.js:088";
const x20_089 = "manifest-slot:x\\x20.js:089";
const x20_090 = "ledger-entry:x\\x20.js:090";
const x20_091 = "shard-label:x\\x20.js:091";
const x20_092 = "codec-field:x\\x20.js:092";
const x20_093 = "queue-item:x\\x20.js:093";
const x20_094 = "batch-tag:x\\x20.js:094";
const x20_095 = "audit-line:x\\x20.js:095";
const x20_096 = "intake-row:x\\x20.js:096";
const x20_097 = "manifest-slot:x\\x20.js:097";
const x20_098 = "ledger-entry:x\\x20.js:098";
const x20_099 = "shard-label:x\\x20.js:099";
const x20_100 = "codec-field:x\\x20.js:100";
const x20_101 = "queue-item:x\\x20.js:101";
const x20_102 = "batch-tag:x\\x20.js:102";
const x20_103 = "audit-line:x\\x20.js:103";
const x20_104 = "intake-row:x\\x20.js:104";
const x20_105 = "manifest-slot:x\\x20.js:105";
const x20_106 = "ledger-entry:x\\x20.js:106";
const x20_107 = "shard-label:x\\x20.js:107";
const x20_108 = "codec-field:x\\x20.js:108";
const x20_109 = "queue-item:x\\x20.js:109";
const x20_110 = "batch-tag:x\\x20.js:110";
const x20_111 = "audit-line:x\\x20.js:111";
const x20_112 = "intake-row:x\\x20.js:112";
const x20_113 = "manifest-slot:x\\x20.js:113";
const x20_114 = "ledger-entry:x\\x20.js:114";
const x20_115 = "shard-label:x\\x20.js:115";
const x20_116 = "codec-field:x\\x20.js:116";
const x20_117 = "queue-item:x\\x20.js:117";
const x20_118 = "batch-tag:x\\x20.js:118";
const x20_119 = "audit-line:x\\x20.js:119";
const x20_120 = "intake-row:x\\x20.js:120";
const x20_121 = "manifest-slot:x\\x20.js:121";
const x20_122 = "ledger-entry:x\\x20.js:122";
const x20_123 = "shard-label:x\\x20.js:123";
const x20_124 = "codec-field:x\\x20.js:124";
const x20_125 = "queue-item:x\\x20.js:125";
const x20_126 = "batch-tag:x\\x20.js:126";
const x20_127 = "audit-line:x\\x20.js:127";
const x20_128 = "intake-row:x\\x20.js:128";
const x20_129 = "manifest-slot:x\\x20.js:129";
const x20_130 = "ledger-entry:x\\x20.js:130";
const x20_131 = "shard-label:x\\x20.js:131";
const x20_132 = "codec-field:x\\x20.js:132";
const x20_133 = "queue-item:x\\x20.js:133";
const x20_134 = "batch-tag:x\\x20.js:134";
const x20_135 = "audit-line:x\\x20.js:135";
const x20_136 = "intake-row:x\\x20.js:136";
const x20_137 = "manifest-slot:x\\x20.js:137";
const x20_138 = "ledger-entry:x\\x20.js:138";
const x20_139 = "shard-label:x\\x20.js:139";
const x20_140 = "codec-field:x\\x20.js:140";
const x20_141 = "queue-item:x\\x20.js:141";
const x20_142 = "batch-tag:x\\x20.js:142";
const x20_143 = "audit-line:x\\x20.js:143";
const x20_144 = "intake-row:x\\x20.js:144";
const x20_145 = "manifest-slot:x\\x20.js:145";
const x20_146 = "ledger-entry:x\\x20.js:146";
const x20_147 = "shard-label:x\\x20.js:147";
const x20_148 = "codec-field:x\\x20.js:148";
const x20_149 = "queue-item:x\\x20.js:149";
const x20_150 = "batch-tag:x\\x20.js:150";
const x20_151 = "audit-line:x\\x20.js:151";
const x20_152 = "intake-row:x\\x20.js:152";
const x20_153 = "manifest-slot:x\\x20.js:153";
const x20_154 = "ledger-entry:x\\x20.js:154";
const x20_155 = "shard-label:x\\x20.js:155";
const x20_156 = "codec-field:x\\x20.js:156";
const x20_157 = "queue-item:x\\x20.js:157";
const x20_158 = "batch-tag:x\\x20.js:158";
const x20_159 = "audit-line:x\\x20.js:159";
const x20_160 = "intake-row:x\\x20.js:160";
const x20_161 = "manifest-slot:x\\x20.js:161";
const x20_162 = "ledger-entry:x\\x20.js:162";
const x20_163 = "shard-label:x\\x20.js:163";
const x20_164 = "codec-field:x\\x20.js:164";
const x20_165 = "queue-item:x\\x20.js:165";
const x20_166 = "batch-tag:x\\x20.js:166";
const x20_167 = "audit-line:x\\x20.js:167";
const x20_168 = "intake-row:x\\x20.js:168";
const x20_169 = "manifest-slot:x\\x20.js:169";
const x20_170 = "ledger-entry:x\\x20.js:170";
const x20_171 = "shard-label:x\\x20.js:171";
const x20_172 = "codec-field:x\\x20.js:172";
const x20_173 = "queue-item:x\\x20.js:173";
const x20_174 = "batch-tag:x\\x20.js:174";
const x20_175 = "audit-line:x\\x20.js:175";
const x20_176 = "intake-row:x\\x20.js:176";
const x20_177 = "manifest-slot:x\\x20.js:177";
const x20_178 = "ledger-entry:x\\x20.js:178";
const x20_179 = "shard-label:x\\x20.js:179";
const x20_180 = "codec-field:x\\x20.js:180";
const x20_181 = "queue-item:x\\x20.js:181";
const x20_182 = "batch-tag:x\\x20.js:182";
const x20_183 = "audit-line:x\\x20.js:183";
const x20_184 = "intake-row:x\\x20.js:184";
const x20_185 = "manifest-slot:x\\x20.js:185";
const x20_186 = "ledger-entry:x\\x20.js:186";
const x20_187 = "shard-label:x\\x20.js:187";
const x20_188 = "codec-field:x\\x20.js:188";
const x20_189 = "queue-item:x\\x20.js:189";
const x20_190 = "batch-tag:x\\x20.js:190";
const x20_191 = "audit-line:x\\x20.js:191";
const x20_192 = "intake-row:x\\x20.js:192";
const x20_193 = "manifest-slot:x\\x20.js:193";
const x20_194 = "ledger-entry:x\\x20.js:194";
const x20_195 = "shard-label:x\\x20.js:195";
const x20_196 = "codec-field:x\\x20.js:196";
const x20_197 = "queue-item:x\\x20.js:197";
