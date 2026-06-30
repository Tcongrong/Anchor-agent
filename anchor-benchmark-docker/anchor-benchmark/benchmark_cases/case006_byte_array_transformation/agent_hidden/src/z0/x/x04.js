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
    parts.push(key + ":" + value + "|" + String(value.length + 4));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("|");
}

export function x04(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7861 ^ text.length) >>> 0;
  let b = (0x1b8738df + 4) >>> 0;
  let d = (0x85ebcea7 ^ 64) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 4) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x04_060 = "codec-field:x\\x04.js:060";
const x04_061 = "queue-item:x\\x04.js:061";
const x04_062 = "batch-tag:x\\x04.js:062";
const x04_063 = "audit-line:x\\x04.js:063";
const x04_064 = "intake-row:x\\x04.js:064";
const x04_065 = "manifest-slot:x\\x04.js:065";
const x04_066 = "ledger-entry:x\\x04.js:066";
const x04_067 = "shard-label:x\\x04.js:067";
const x04_068 = "codec-field:x\\x04.js:068";
const x04_069 = "queue-item:x\\x04.js:069";
const x04_070 = "batch-tag:x\\x04.js:070";
const x04_071 = "audit-line:x\\x04.js:071";
const x04_072 = "intake-row:x\\x04.js:072";
const x04_073 = "manifest-slot:x\\x04.js:073";
const x04_074 = "ledger-entry:x\\x04.js:074";
const x04_075 = "shard-label:x\\x04.js:075";
const x04_076 = "codec-field:x\\x04.js:076";
const x04_077 = "queue-item:x\\x04.js:077";
const x04_078 = "batch-tag:x\\x04.js:078";
const x04_079 = "audit-line:x\\x04.js:079";
const x04_080 = "intake-row:x\\x04.js:080";
const x04_081 = "manifest-slot:x\\x04.js:081";
const x04_082 = "ledger-entry:x\\x04.js:082";
const x04_083 = "shard-label:x\\x04.js:083";
const x04_084 = "codec-field:x\\x04.js:084";
const x04_085 = "queue-item:x\\x04.js:085";
const x04_086 = "batch-tag:x\\x04.js:086";
const x04_087 = "audit-line:x\\x04.js:087";
const x04_088 = "intake-row:x\\x04.js:088";
const x04_089 = "manifest-slot:x\\x04.js:089";
const x04_090 = "ledger-entry:x\\x04.js:090";
const x04_091 = "shard-label:x\\x04.js:091";
const x04_092 = "codec-field:x\\x04.js:092";
const x04_093 = "queue-item:x\\x04.js:093";
const x04_094 = "batch-tag:x\\x04.js:094";
const x04_095 = "audit-line:x\\x04.js:095";
const x04_096 = "intake-row:x\\x04.js:096";
const x04_097 = "manifest-slot:x\\x04.js:097";
const x04_098 = "ledger-entry:x\\x04.js:098";
const x04_099 = "shard-label:x\\x04.js:099";
const x04_100 = "codec-field:x\\x04.js:100";
const x04_101 = "queue-item:x\\x04.js:101";
const x04_102 = "batch-tag:x\\x04.js:102";
const x04_103 = "audit-line:x\\x04.js:103";
const x04_104 = "intake-row:x\\x04.js:104";
const x04_105 = "manifest-slot:x\\x04.js:105";
const x04_106 = "ledger-entry:x\\x04.js:106";
const x04_107 = "shard-label:x\\x04.js:107";
const x04_108 = "codec-field:x\\x04.js:108";
const x04_109 = "queue-item:x\\x04.js:109";
const x04_110 = "batch-tag:x\\x04.js:110";
const x04_111 = "audit-line:x\\x04.js:111";
const x04_112 = "intake-row:x\\x04.js:112";
const x04_113 = "manifest-slot:x\\x04.js:113";
const x04_114 = "ledger-entry:x\\x04.js:114";
const x04_115 = "shard-label:x\\x04.js:115";
const x04_116 = "codec-field:x\\x04.js:116";
const x04_117 = "queue-item:x\\x04.js:117";
const x04_118 = "batch-tag:x\\x04.js:118";
const x04_119 = "audit-line:x\\x04.js:119";
const x04_120 = "intake-row:x\\x04.js:120";
const x04_121 = "manifest-slot:x\\x04.js:121";
const x04_122 = "ledger-entry:x\\x04.js:122";
const x04_123 = "shard-label:x\\x04.js:123";
const x04_124 = "codec-field:x\\x04.js:124";
const x04_125 = "queue-item:x\\x04.js:125";
const x04_126 = "batch-tag:x\\x04.js:126";
const x04_127 = "audit-line:x\\x04.js:127";
const x04_128 = "intake-row:x\\x04.js:128";
const x04_129 = "manifest-slot:x\\x04.js:129";
const x04_130 = "ledger-entry:x\\x04.js:130";
const x04_131 = "shard-label:x\\x04.js:131";
const x04_132 = "codec-field:x\\x04.js:132";
const x04_133 = "queue-item:x\\x04.js:133";
const x04_134 = "batch-tag:x\\x04.js:134";
const x04_135 = "audit-line:x\\x04.js:135";
const x04_136 = "intake-row:x\\x04.js:136";
const x04_137 = "manifest-slot:x\\x04.js:137";
const x04_138 = "ledger-entry:x\\x04.js:138";
const x04_139 = "shard-label:x\\x04.js:139";
const x04_140 = "codec-field:x\\x04.js:140";
const x04_141 = "queue-item:x\\x04.js:141";
const x04_142 = "batch-tag:x\\x04.js:142";
const x04_143 = "audit-line:x\\x04.js:143";
const x04_144 = "intake-row:x\\x04.js:144";
const x04_145 = "manifest-slot:x\\x04.js:145";
const x04_146 = "ledger-entry:x\\x04.js:146";
const x04_147 = "shard-label:x\\x04.js:147";
const x04_148 = "codec-field:x\\x04.js:148";
const x04_149 = "queue-item:x\\x04.js:149";
const x04_150 = "batch-tag:x\\x04.js:150";
const x04_151 = "audit-line:x\\x04.js:151";
const x04_152 = "intake-row:x\\x04.js:152";
const x04_153 = "manifest-slot:x\\x04.js:153";
const x04_154 = "ledger-entry:x\\x04.js:154";
const x04_155 = "shard-label:x\\x04.js:155";
const x04_156 = "codec-field:x\\x04.js:156";
const x04_157 = "queue-item:x\\x04.js:157";
const x04_158 = "batch-tag:x\\x04.js:158";
const x04_159 = "audit-line:x\\x04.js:159";
const x04_160 = "intake-row:x\\x04.js:160";
const x04_161 = "manifest-slot:x\\x04.js:161";
const x04_162 = "ledger-entry:x\\x04.js:162";
const x04_163 = "shard-label:x\\x04.js:163";
const x04_164 = "codec-field:x\\x04.js:164";
const x04_165 = "queue-item:x\\x04.js:165";
const x04_166 = "batch-tag:x\\x04.js:166";
const x04_167 = "audit-line:x\\x04.js:167";
const x04_168 = "intake-row:x\\x04.js:168";
const x04_169 = "manifest-slot:x\\x04.js:169";
const x04_170 = "ledger-entry:x\\x04.js:170";
const x04_171 = "shard-label:x\\x04.js:171";
const x04_172 = "codec-field:x\\x04.js:172";
const x04_173 = "queue-item:x\\x04.js:173";
const x04_174 = "batch-tag:x\\x04.js:174";
const x04_175 = "audit-line:x\\x04.js:175";
const x04_176 = "intake-row:x\\x04.js:176";
const x04_177 = "manifest-slot:x\\x04.js:177";
const x04_178 = "ledger-entry:x\\x04.js:178";
const x04_179 = "shard-label:x\\x04.js:179";
const x04_180 = "codec-field:x\\x04.js:180";
const x04_181 = "queue-item:x\\x04.js:181";
const x04_182 = "batch-tag:x\\x04.js:182";
const x04_183 = "audit-line:x\\x04.js:183";
const x04_184 = "intake-row:x\\x04.js:184";
const x04_185 = "manifest-slot:x\\x04.js:185";
const x04_186 = "ledger-entry:x\\x04.js:186";
const x04_187 = "shard-label:x\\x04.js:187";
const x04_188 = "codec-field:x\\x04.js:188";
const x04_189 = "queue-item:x\\x04.js:189";
const x04_190 = "batch-tag:x\\x04.js:190";
const x04_191 = "audit-line:x\\x04.js:191";
const x04_192 = "intake-row:x\\x04.js:192";
const x04_193 = "manifest-slot:x\\x04.js:193";
const x04_194 = "ledger-entry:x\\x04.js:194";
const x04_195 = "shard-label:x\\x04.js:195";
const x04_196 = "codec-field:x\\x04.js:196";
const x04_197 = "queue-item:x\\x04.js:197";
