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
    parts.push(key + ":" + value + "|" + String(value.length + 14));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x14(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7c73 ^ text.length) >>> 0;
  let b = (0x1b87411d + 14) >>> 0;
  let d = (0x85ebdaa1 ^ 224) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 14) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x14_060 = "codec-field:x\\x14.js:060";
const x14_061 = "queue-item:x\\x14.js:061";
const x14_062 = "batch-tag:x\\x14.js:062";
const x14_063 = "audit-line:x\\x14.js:063";
const x14_064 = "intake-row:x\\x14.js:064";
const x14_065 = "manifest-slot:x\\x14.js:065";
const x14_066 = "ledger-entry:x\\x14.js:066";
const x14_067 = "shard-label:x\\x14.js:067";
const x14_068 = "codec-field:x\\x14.js:068";
const x14_069 = "queue-item:x\\x14.js:069";
const x14_070 = "batch-tag:x\\x14.js:070";
const x14_071 = "audit-line:x\\x14.js:071";
const x14_072 = "intake-row:x\\x14.js:072";
const x14_073 = "manifest-slot:x\\x14.js:073";
const x14_074 = "ledger-entry:x\\x14.js:074";
const x14_075 = "shard-label:x\\x14.js:075";
const x14_076 = "codec-field:x\\x14.js:076";
const x14_077 = "queue-item:x\\x14.js:077";
const x14_078 = "batch-tag:x\\x14.js:078";
const x14_079 = "audit-line:x\\x14.js:079";
const x14_080 = "intake-row:x\\x14.js:080";
const x14_081 = "manifest-slot:x\\x14.js:081";
const x14_082 = "ledger-entry:x\\x14.js:082";
const x14_083 = "shard-label:x\\x14.js:083";
const x14_084 = "codec-field:x\\x14.js:084";
const x14_085 = "queue-item:x\\x14.js:085";
const x14_086 = "batch-tag:x\\x14.js:086";
const x14_087 = "audit-line:x\\x14.js:087";
const x14_088 = "intake-row:x\\x14.js:088";
const x14_089 = "manifest-slot:x\\x14.js:089";
const x14_090 = "ledger-entry:x\\x14.js:090";
const x14_091 = "shard-label:x\\x14.js:091";
const x14_092 = "codec-field:x\\x14.js:092";
const x14_093 = "queue-item:x\\x14.js:093";
const x14_094 = "batch-tag:x\\x14.js:094";
const x14_095 = "audit-line:x\\x14.js:095";
const x14_096 = "intake-row:x\\x14.js:096";
const x14_097 = "manifest-slot:x\\x14.js:097";
const x14_098 = "ledger-entry:x\\x14.js:098";
const x14_099 = "shard-label:x\\x14.js:099";
const x14_100 = "codec-field:x\\x14.js:100";
const x14_101 = "queue-item:x\\x14.js:101";
const x14_102 = "batch-tag:x\\x14.js:102";
const x14_103 = "audit-line:x\\x14.js:103";
const x14_104 = "intake-row:x\\x14.js:104";
const x14_105 = "manifest-slot:x\\x14.js:105";
const x14_106 = "ledger-entry:x\\x14.js:106";
const x14_107 = "shard-label:x\\x14.js:107";
const x14_108 = "codec-field:x\\x14.js:108";
const x14_109 = "queue-item:x\\x14.js:109";
const x14_110 = "batch-tag:x\\x14.js:110";
const x14_111 = "audit-line:x\\x14.js:111";
const x14_112 = "intake-row:x\\x14.js:112";
const x14_113 = "manifest-slot:x\\x14.js:113";
const x14_114 = "ledger-entry:x\\x14.js:114";
const x14_115 = "shard-label:x\\x14.js:115";
const x14_116 = "codec-field:x\\x14.js:116";
const x14_117 = "queue-item:x\\x14.js:117";
const x14_118 = "batch-tag:x\\x14.js:118";
const x14_119 = "audit-line:x\\x14.js:119";
const x14_120 = "intake-row:x\\x14.js:120";
const x14_121 = "manifest-slot:x\\x14.js:121";
const x14_122 = "ledger-entry:x\\x14.js:122";
const x14_123 = "shard-label:x\\x14.js:123";
const x14_124 = "codec-field:x\\x14.js:124";
const x14_125 = "queue-item:x\\x14.js:125";
const x14_126 = "batch-tag:x\\x14.js:126";
const x14_127 = "audit-line:x\\x14.js:127";
const x14_128 = "intake-row:x\\x14.js:128";
const x14_129 = "manifest-slot:x\\x14.js:129";
const x14_130 = "ledger-entry:x\\x14.js:130";
const x14_131 = "shard-label:x\\x14.js:131";
const x14_132 = "codec-field:x\\x14.js:132";
const x14_133 = "queue-item:x\\x14.js:133";
const x14_134 = "batch-tag:x\\x14.js:134";
const x14_135 = "audit-line:x\\x14.js:135";
const x14_136 = "intake-row:x\\x14.js:136";
const x14_137 = "manifest-slot:x\\x14.js:137";
const x14_138 = "ledger-entry:x\\x14.js:138";
const x14_139 = "shard-label:x\\x14.js:139";
const x14_140 = "codec-field:x\\x14.js:140";
const x14_141 = "queue-item:x\\x14.js:141";
const x14_142 = "batch-tag:x\\x14.js:142";
const x14_143 = "audit-line:x\\x14.js:143";
const x14_144 = "intake-row:x\\x14.js:144";
const x14_145 = "manifest-slot:x\\x14.js:145";
const x14_146 = "ledger-entry:x\\x14.js:146";
const x14_147 = "shard-label:x\\x14.js:147";
const x14_148 = "codec-field:x\\x14.js:148";
const x14_149 = "queue-item:x\\x14.js:149";
const x14_150 = "batch-tag:x\\x14.js:150";
const x14_151 = "audit-line:x\\x14.js:151";
const x14_152 = "intake-row:x\\x14.js:152";
const x14_153 = "manifest-slot:x\\x14.js:153";
const x14_154 = "ledger-entry:x\\x14.js:154";
const x14_155 = "shard-label:x\\x14.js:155";
const x14_156 = "codec-field:x\\x14.js:156";
const x14_157 = "queue-item:x\\x14.js:157";
const x14_158 = "batch-tag:x\\x14.js:158";
const x14_159 = "audit-line:x\\x14.js:159";
const x14_160 = "intake-row:x\\x14.js:160";
const x14_161 = "manifest-slot:x\\x14.js:161";
const x14_162 = "ledger-entry:x\\x14.js:162";
const x14_163 = "shard-label:x\\x14.js:163";
const x14_164 = "codec-field:x\\x14.js:164";
const x14_165 = "queue-item:x\\x14.js:165";
const x14_166 = "batch-tag:x\\x14.js:166";
const x14_167 = "audit-line:x\\x14.js:167";
const x14_168 = "intake-row:x\\x14.js:168";
const x14_169 = "manifest-slot:x\\x14.js:169";
const x14_170 = "ledger-entry:x\\x14.js:170";
const x14_171 = "shard-label:x\\x14.js:171";
const x14_172 = "codec-field:x\\x14.js:172";
const x14_173 = "queue-item:x\\x14.js:173";
const x14_174 = "batch-tag:x\\x14.js:174";
const x14_175 = "audit-line:x\\x14.js:175";
const x14_176 = "intake-row:x\\x14.js:176";
const x14_177 = "manifest-slot:x\\x14.js:177";
const x14_178 = "ledger-entry:x\\x14.js:178";
const x14_179 = "shard-label:x\\x14.js:179";
const x14_180 = "codec-field:x\\x14.js:180";
const x14_181 = "queue-item:x\\x14.js:181";
const x14_182 = "batch-tag:x\\x14.js:182";
const x14_183 = "audit-line:x\\x14.js:183";
const x14_184 = "intake-row:x\\x14.js:184";
const x14_185 = "manifest-slot:x\\x14.js:185";
const x14_186 = "ledger-entry:x\\x14.js:186";
const x14_187 = "shard-label:x\\x14.js:187";
const x14_188 = "codec-field:x\\x14.js:188";
const x14_189 = "queue-item:x\\x14.js:189";
const x14_190 = "batch-tag:x\\x14.js:190";
const x14_191 = "audit-line:x\\x14.js:191";
const x14_192 = "intake-row:x\\x14.js:192";
const x14_193 = "manifest-slot:x\\x14.js:193";
const x14_194 = "ledger-entry:x\\x14.js:194";
const x14_195 = "shard-label:x\\x14.js:195";
const x14_196 = "codec-field:x\\x14.js:196";
const x14_197 = "queue-item:x\\x14.js:197";
