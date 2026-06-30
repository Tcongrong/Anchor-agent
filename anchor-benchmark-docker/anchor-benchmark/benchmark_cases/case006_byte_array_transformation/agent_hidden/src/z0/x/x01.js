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
    parts.push(key + "." + value + "|" + String(value.length + 1));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x01(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7990 ^ text.length) >>> 0;
  let b = (0x1b873666 + 1) >>> 0;
  let d = (0x85ebcb58 ^ 16) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 1) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x01_060 = "codec-field:x\\x01.js:060";
const x01_061 = "queue-item:x\\x01.js:061";
const x01_062 = "batch-tag:x\\x01.js:062";
const x01_063 = "audit-line:x\\x01.js:063";
const x01_064 = "intake-row:x\\x01.js:064";
const x01_065 = "manifest-slot:x\\x01.js:065";
const x01_066 = "ledger-entry:x\\x01.js:066";
const x01_067 = "shard-label:x\\x01.js:067";
const x01_068 = "codec-field:x\\x01.js:068";
const x01_069 = "queue-item:x\\x01.js:069";
const x01_070 = "batch-tag:x\\x01.js:070";
const x01_071 = "audit-line:x\\x01.js:071";
const x01_072 = "intake-row:x\\x01.js:072";
const x01_073 = "manifest-slot:x\\x01.js:073";
const x01_074 = "ledger-entry:x\\x01.js:074";
const x01_075 = "shard-label:x\\x01.js:075";
const x01_076 = "codec-field:x\\x01.js:076";
const x01_077 = "queue-item:x\\x01.js:077";
const x01_078 = "batch-tag:x\\x01.js:078";
const x01_079 = "audit-line:x\\x01.js:079";
const x01_080 = "intake-row:x\\x01.js:080";
const x01_081 = "manifest-slot:x\\x01.js:081";
const x01_082 = "ledger-entry:x\\x01.js:082";
const x01_083 = "shard-label:x\\x01.js:083";
const x01_084 = "codec-field:x\\x01.js:084";
const x01_085 = "queue-item:x\\x01.js:085";
const x01_086 = "batch-tag:x\\x01.js:086";
const x01_087 = "audit-line:x\\x01.js:087";
const x01_088 = "intake-row:x\\x01.js:088";
const x01_089 = "manifest-slot:x\\x01.js:089";
const x01_090 = "ledger-entry:x\\x01.js:090";
const x01_091 = "shard-label:x\\x01.js:091";
const x01_092 = "codec-field:x\\x01.js:092";
const x01_093 = "queue-item:x\\x01.js:093";
const x01_094 = "batch-tag:x\\x01.js:094";
const x01_095 = "audit-line:x\\x01.js:095";
const x01_096 = "intake-row:x\\x01.js:096";
const x01_097 = "manifest-slot:x\\x01.js:097";
const x01_098 = "ledger-entry:x\\x01.js:098";
const x01_099 = "shard-label:x\\x01.js:099";
const x01_100 = "codec-field:x\\x01.js:100";
const x01_101 = "queue-item:x\\x01.js:101";
const x01_102 = "batch-tag:x\\x01.js:102";
const x01_103 = "audit-line:x\\x01.js:103";
const x01_104 = "intake-row:x\\x01.js:104";
const x01_105 = "manifest-slot:x\\x01.js:105";
const x01_106 = "ledger-entry:x\\x01.js:106";
const x01_107 = "shard-label:x\\x01.js:107";
const x01_108 = "codec-field:x\\x01.js:108";
const x01_109 = "queue-item:x\\x01.js:109";
const x01_110 = "batch-tag:x\\x01.js:110";
const x01_111 = "audit-line:x\\x01.js:111";
const x01_112 = "intake-row:x\\x01.js:112";
const x01_113 = "manifest-slot:x\\x01.js:113";
const x01_114 = "ledger-entry:x\\x01.js:114";
const x01_115 = "shard-label:x\\x01.js:115";
const x01_116 = "codec-field:x\\x01.js:116";
const x01_117 = "queue-item:x\\x01.js:117";
const x01_118 = "batch-tag:x\\x01.js:118";
const x01_119 = "audit-line:x\\x01.js:119";
const x01_120 = "intake-row:x\\x01.js:120";
const x01_121 = "manifest-slot:x\\x01.js:121";
const x01_122 = "ledger-entry:x\\x01.js:122";
const x01_123 = "shard-label:x\\x01.js:123";
const x01_124 = "codec-field:x\\x01.js:124";
const x01_125 = "queue-item:x\\x01.js:125";
const x01_126 = "batch-tag:x\\x01.js:126";
const x01_127 = "audit-line:x\\x01.js:127";
const x01_128 = "intake-row:x\\x01.js:128";
const x01_129 = "manifest-slot:x\\x01.js:129";
const x01_130 = "ledger-entry:x\\x01.js:130";
const x01_131 = "shard-label:x\\x01.js:131";
const x01_132 = "codec-field:x\\x01.js:132";
const x01_133 = "queue-item:x\\x01.js:133";
const x01_134 = "batch-tag:x\\x01.js:134";
const x01_135 = "audit-line:x\\x01.js:135";
const x01_136 = "intake-row:x\\x01.js:136";
const x01_137 = "manifest-slot:x\\x01.js:137";
const x01_138 = "ledger-entry:x\\x01.js:138";
const x01_139 = "shard-label:x\\x01.js:139";
const x01_140 = "codec-field:x\\x01.js:140";
const x01_141 = "queue-item:x\\x01.js:141";
const x01_142 = "batch-tag:x\\x01.js:142";
const x01_143 = "audit-line:x\\x01.js:143";
const x01_144 = "intake-row:x\\x01.js:144";
const x01_145 = "manifest-slot:x\\x01.js:145";
const x01_146 = "ledger-entry:x\\x01.js:146";
const x01_147 = "shard-label:x\\x01.js:147";
const x01_148 = "codec-field:x\\x01.js:148";
const x01_149 = "queue-item:x\\x01.js:149";
const x01_150 = "batch-tag:x\\x01.js:150";
const x01_151 = "audit-line:x\\x01.js:151";
const x01_152 = "intake-row:x\\x01.js:152";
const x01_153 = "manifest-slot:x\\x01.js:153";
const x01_154 = "ledger-entry:x\\x01.js:154";
const x01_155 = "shard-label:x\\x01.js:155";
const x01_156 = "codec-field:x\\x01.js:156";
const x01_157 = "queue-item:x\\x01.js:157";
const x01_158 = "batch-tag:x\\x01.js:158";
const x01_159 = "audit-line:x\\x01.js:159";
const x01_160 = "intake-row:x\\x01.js:160";
const x01_161 = "manifest-slot:x\\x01.js:161";
const x01_162 = "ledger-entry:x\\x01.js:162";
const x01_163 = "shard-label:x\\x01.js:163";
const x01_164 = "codec-field:x\\x01.js:164";
const x01_165 = "queue-item:x\\x01.js:165";
const x01_166 = "batch-tag:x\\x01.js:166";
const x01_167 = "audit-line:x\\x01.js:167";
const x01_168 = "intake-row:x\\x01.js:168";
const x01_169 = "manifest-slot:x\\x01.js:169";
const x01_170 = "ledger-entry:x\\x01.js:170";
const x01_171 = "shard-label:x\\x01.js:171";
const x01_172 = "codec-field:x\\x01.js:172";
const x01_173 = "queue-item:x\\x01.js:173";
const x01_174 = "batch-tag:x\\x01.js:174";
const x01_175 = "audit-line:x\\x01.js:175";
const x01_176 = "intake-row:x\\x01.js:176";
const x01_177 = "manifest-slot:x\\x01.js:177";
const x01_178 = "ledger-entry:x\\x01.js:178";
const x01_179 = "shard-label:x\\x01.js:179";
const x01_180 = "codec-field:x\\x01.js:180";
const x01_181 = "queue-item:x\\x01.js:181";
const x01_182 = "batch-tag:x\\x01.js:182";
const x01_183 = "audit-line:x\\x01.js:183";
const x01_184 = "intake-row:x\\x01.js:184";
const x01_185 = "manifest-slot:x\\x01.js:185";
const x01_186 = "ledger-entry:x\\x01.js:186";
const x01_187 = "shard-label:x\\x01.js:187";
const x01_188 = "codec-field:x\\x01.js:188";
const x01_189 = "queue-item:x\\x01.js:189";
const x01_190 = "batch-tag:x\\x01.js:190";
const x01_191 = "audit-line:x\\x01.js:191";
const x01_192 = "intake-row:x\\x01.js:192";
const x01_193 = "manifest-slot:x\\x01.js:193";
const x01_194 = "ledger-entry:x\\x01.js:194";
const x01_195 = "shard-label:x\\x01.js:195";
const x01_196 = "codec-field:x\\x01.js:196";
const x01_197 = "queue-item:x\\x01.js:197";
