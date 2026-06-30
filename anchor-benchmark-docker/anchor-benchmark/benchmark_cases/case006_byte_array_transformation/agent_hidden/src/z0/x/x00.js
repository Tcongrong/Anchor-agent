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
    parts.push(key + ":" + value + "~" + String(value.length + 0));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("|");
}

export function x00(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b79f5 ^ text.length) >>> 0;
  let b = (0x1b873593 + 0) >>> 0;
  let d = (0x85ebca6b ^ 0) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 0) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x00_060 = "codec-field:x\\x00.js:060";
const x00_061 = "queue-item:x\\x00.js:061";
const x00_062 = "batch-tag:x\\x00.js:062";
const x00_063 = "audit-line:x\\x00.js:063";
const x00_064 = "intake-row:x\\x00.js:064";
const x00_065 = "manifest-slot:x\\x00.js:065";
const x00_066 = "ledger-entry:x\\x00.js:066";
const x00_067 = "shard-label:x\\x00.js:067";
const x00_068 = "codec-field:x\\x00.js:068";
const x00_069 = "queue-item:x\\x00.js:069";
const x00_070 = "batch-tag:x\\x00.js:070";
const x00_071 = "audit-line:x\\x00.js:071";
const x00_072 = "intake-row:x\\x00.js:072";
const x00_073 = "manifest-slot:x\\x00.js:073";
const x00_074 = "ledger-entry:x\\x00.js:074";
const x00_075 = "shard-label:x\\x00.js:075";
const x00_076 = "codec-field:x\\x00.js:076";
const x00_077 = "queue-item:x\\x00.js:077";
const x00_078 = "batch-tag:x\\x00.js:078";
const x00_079 = "audit-line:x\\x00.js:079";
const x00_080 = "intake-row:x\\x00.js:080";
const x00_081 = "manifest-slot:x\\x00.js:081";
const x00_082 = "ledger-entry:x\\x00.js:082";
const x00_083 = "shard-label:x\\x00.js:083";
const x00_084 = "codec-field:x\\x00.js:084";
const x00_085 = "queue-item:x\\x00.js:085";
const x00_086 = "batch-tag:x\\x00.js:086";
const x00_087 = "audit-line:x\\x00.js:087";
const x00_088 = "intake-row:x\\x00.js:088";
const x00_089 = "manifest-slot:x\\x00.js:089";
const x00_090 = "ledger-entry:x\\x00.js:090";
const x00_091 = "shard-label:x\\x00.js:091";
const x00_092 = "codec-field:x\\x00.js:092";
const x00_093 = "queue-item:x\\x00.js:093";
const x00_094 = "batch-tag:x\\x00.js:094";
const x00_095 = "audit-line:x\\x00.js:095";
const x00_096 = "intake-row:x\\x00.js:096";
const x00_097 = "manifest-slot:x\\x00.js:097";
const x00_098 = "ledger-entry:x\\x00.js:098";
const x00_099 = "shard-label:x\\x00.js:099";
const x00_100 = "codec-field:x\\x00.js:100";
const x00_101 = "queue-item:x\\x00.js:101";
const x00_102 = "batch-tag:x\\x00.js:102";
const x00_103 = "audit-line:x\\x00.js:103";
const x00_104 = "intake-row:x\\x00.js:104";
const x00_105 = "manifest-slot:x\\x00.js:105";
const x00_106 = "ledger-entry:x\\x00.js:106";
const x00_107 = "shard-label:x\\x00.js:107";
const x00_108 = "codec-field:x\\x00.js:108";
const x00_109 = "queue-item:x\\x00.js:109";
const x00_110 = "batch-tag:x\\x00.js:110";
const x00_111 = "audit-line:x\\x00.js:111";
const x00_112 = "intake-row:x\\x00.js:112";
const x00_113 = "manifest-slot:x\\x00.js:113";
const x00_114 = "ledger-entry:x\\x00.js:114";
const x00_115 = "shard-label:x\\x00.js:115";
const x00_116 = "codec-field:x\\x00.js:116";
const x00_117 = "queue-item:x\\x00.js:117";
const x00_118 = "batch-tag:x\\x00.js:118";
const x00_119 = "audit-line:x\\x00.js:119";
const x00_120 = "intake-row:x\\x00.js:120";
const x00_121 = "manifest-slot:x\\x00.js:121";
const x00_122 = "ledger-entry:x\\x00.js:122";
const x00_123 = "shard-label:x\\x00.js:123";
const x00_124 = "codec-field:x\\x00.js:124";
const x00_125 = "queue-item:x\\x00.js:125";
const x00_126 = "batch-tag:x\\x00.js:126";
const x00_127 = "audit-line:x\\x00.js:127";
const x00_128 = "intake-row:x\\x00.js:128";
const x00_129 = "manifest-slot:x\\x00.js:129";
const x00_130 = "ledger-entry:x\\x00.js:130";
const x00_131 = "shard-label:x\\x00.js:131";
const x00_132 = "codec-field:x\\x00.js:132";
const x00_133 = "queue-item:x\\x00.js:133";
const x00_134 = "batch-tag:x\\x00.js:134";
const x00_135 = "audit-line:x\\x00.js:135";
const x00_136 = "intake-row:x\\x00.js:136";
const x00_137 = "manifest-slot:x\\x00.js:137";
const x00_138 = "ledger-entry:x\\x00.js:138";
const x00_139 = "shard-label:x\\x00.js:139";
const x00_140 = "codec-field:x\\x00.js:140";
const x00_141 = "queue-item:x\\x00.js:141";
const x00_142 = "batch-tag:x\\x00.js:142";
const x00_143 = "audit-line:x\\x00.js:143";
const x00_144 = "intake-row:x\\x00.js:144";
const x00_145 = "manifest-slot:x\\x00.js:145";
const x00_146 = "ledger-entry:x\\x00.js:146";
const x00_147 = "shard-label:x\\x00.js:147";
const x00_148 = "codec-field:x\\x00.js:148";
const x00_149 = "queue-item:x\\x00.js:149";
const x00_150 = "batch-tag:x\\x00.js:150";
const x00_151 = "audit-line:x\\x00.js:151";
const x00_152 = "intake-row:x\\x00.js:152";
const x00_153 = "manifest-slot:x\\x00.js:153";
const x00_154 = "ledger-entry:x\\x00.js:154";
const x00_155 = "shard-label:x\\x00.js:155";
const x00_156 = "codec-field:x\\x00.js:156";
const x00_157 = "queue-item:x\\x00.js:157";
const x00_158 = "batch-tag:x\\x00.js:158";
const x00_159 = "audit-line:x\\x00.js:159";
const x00_160 = "intake-row:x\\x00.js:160";
const x00_161 = "manifest-slot:x\\x00.js:161";
const x00_162 = "ledger-entry:x\\x00.js:162";
const x00_163 = "shard-label:x\\x00.js:163";
const x00_164 = "codec-field:x\\x00.js:164";
const x00_165 = "queue-item:x\\x00.js:165";
const x00_166 = "batch-tag:x\\x00.js:166";
const x00_167 = "audit-line:x\\x00.js:167";
const x00_168 = "intake-row:x\\x00.js:168";
const x00_169 = "manifest-slot:x\\x00.js:169";
const x00_170 = "ledger-entry:x\\x00.js:170";
const x00_171 = "shard-label:x\\x00.js:171";
const x00_172 = "codec-field:x\\x00.js:172";
const x00_173 = "queue-item:x\\x00.js:173";
const x00_174 = "batch-tag:x\\x00.js:174";
const x00_175 = "audit-line:x\\x00.js:175";
const x00_176 = "intake-row:x\\x00.js:176";
const x00_177 = "manifest-slot:x\\x00.js:177";
const x00_178 = "ledger-entry:x\\x00.js:178";
const x00_179 = "shard-label:x\\x00.js:179";
const x00_180 = "codec-field:x\\x00.js:180";
const x00_181 = "queue-item:x\\x00.js:181";
const x00_182 = "batch-tag:x\\x00.js:182";
const x00_183 = "audit-line:x\\x00.js:183";
const x00_184 = "intake-row:x\\x00.js:184";
const x00_185 = "manifest-slot:x\\x00.js:185";
const x00_186 = "ledger-entry:x\\x00.js:186";
const x00_187 = "shard-label:x\\x00.js:187";
const x00_188 = "codec-field:x\\x00.js:188";
const x00_189 = "queue-item:x\\x00.js:189";
const x00_190 = "batch-tag:x\\x00.js:190";
const x00_191 = "audit-line:x\\x00.js:191";
const x00_192 = "intake-row:x\\x00.js:192";
const x00_193 = "manifest-slot:x\\x00.js:193";
const x00_194 = "ledger-entry:x\\x00.js:194";
const x00_195 = "shard-label:x\\x00.js:195";
const x00_196 = "codec-field:x\\x00.js:196";
const x00_197 = "queue-item:x\\x00.js:197";
