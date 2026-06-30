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
    parts.push(key + ":" + value + "~" + String(value.length + 30));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x30(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7223 ^ text.length) >>> 0;
  let b = (0x1b874e4d + 30) >>> 0;
  let d = (0x85ebe991 ^ 480) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 30) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x30_060 = "codec-field:x\\x30.js:060";
const x30_061 = "queue-item:x\\x30.js:061";
const x30_062 = "batch-tag:x\\x30.js:062";
const x30_063 = "audit-line:x\\x30.js:063";
const x30_064 = "intake-row:x\\x30.js:064";
const x30_065 = "manifest-slot:x\\x30.js:065";
const x30_066 = "ledger-entry:x\\x30.js:066";
const x30_067 = "shard-label:x\\x30.js:067";
const x30_068 = "codec-field:x\\x30.js:068";
const x30_069 = "queue-item:x\\x30.js:069";
const x30_070 = "batch-tag:x\\x30.js:070";
const x30_071 = "audit-line:x\\x30.js:071";
const x30_072 = "intake-row:x\\x30.js:072";
const x30_073 = "manifest-slot:x\\x30.js:073";
const x30_074 = "ledger-entry:x\\x30.js:074";
const x30_075 = "shard-label:x\\x30.js:075";
const x30_076 = "codec-field:x\\x30.js:076";
const x30_077 = "queue-item:x\\x30.js:077";
const x30_078 = "batch-tag:x\\x30.js:078";
const x30_079 = "audit-line:x\\x30.js:079";
const x30_080 = "intake-row:x\\x30.js:080";
const x30_081 = "manifest-slot:x\\x30.js:081";
const x30_082 = "ledger-entry:x\\x30.js:082";
const x30_083 = "shard-label:x\\x30.js:083";
const x30_084 = "codec-field:x\\x30.js:084";
const x30_085 = "queue-item:x\\x30.js:085";
const x30_086 = "batch-tag:x\\x30.js:086";
const x30_087 = "audit-line:x\\x30.js:087";
const x30_088 = "intake-row:x\\x30.js:088";
const x30_089 = "manifest-slot:x\\x30.js:089";
const x30_090 = "ledger-entry:x\\x30.js:090";
const x30_091 = "shard-label:x\\x30.js:091";
const x30_092 = "codec-field:x\\x30.js:092";
const x30_093 = "queue-item:x\\x30.js:093";
const x30_094 = "batch-tag:x\\x30.js:094";
const x30_095 = "audit-line:x\\x30.js:095";
const x30_096 = "intake-row:x\\x30.js:096";
const x30_097 = "manifest-slot:x\\x30.js:097";
const x30_098 = "ledger-entry:x\\x30.js:098";
const x30_099 = "shard-label:x\\x30.js:099";
const x30_100 = "codec-field:x\\x30.js:100";
const x30_101 = "queue-item:x\\x30.js:101";
const x30_102 = "batch-tag:x\\x30.js:102";
const x30_103 = "audit-line:x\\x30.js:103";
const x30_104 = "intake-row:x\\x30.js:104";
const x30_105 = "manifest-slot:x\\x30.js:105";
const x30_106 = "ledger-entry:x\\x30.js:106";
const x30_107 = "shard-label:x\\x30.js:107";
const x30_108 = "codec-field:x\\x30.js:108";
const x30_109 = "queue-item:x\\x30.js:109";
const x30_110 = "batch-tag:x\\x30.js:110";
const x30_111 = "audit-line:x\\x30.js:111";
const x30_112 = "intake-row:x\\x30.js:112";
const x30_113 = "manifest-slot:x\\x30.js:113";
const x30_114 = "ledger-entry:x\\x30.js:114";
const x30_115 = "shard-label:x\\x30.js:115";
const x30_116 = "codec-field:x\\x30.js:116";
const x30_117 = "queue-item:x\\x30.js:117";
const x30_118 = "batch-tag:x\\x30.js:118";
const x30_119 = "audit-line:x\\x30.js:119";
const x30_120 = "intake-row:x\\x30.js:120";
const x30_121 = "manifest-slot:x\\x30.js:121";
const x30_122 = "ledger-entry:x\\x30.js:122";
const x30_123 = "shard-label:x\\x30.js:123";
const x30_124 = "codec-field:x\\x30.js:124";
const x30_125 = "queue-item:x\\x30.js:125";
const x30_126 = "batch-tag:x\\x30.js:126";
const x30_127 = "audit-line:x\\x30.js:127";
const x30_128 = "intake-row:x\\x30.js:128";
const x30_129 = "manifest-slot:x\\x30.js:129";
const x30_130 = "ledger-entry:x\\x30.js:130";
const x30_131 = "shard-label:x\\x30.js:131";
const x30_132 = "codec-field:x\\x30.js:132";
const x30_133 = "queue-item:x\\x30.js:133";
const x30_134 = "batch-tag:x\\x30.js:134";
const x30_135 = "audit-line:x\\x30.js:135";
const x30_136 = "intake-row:x\\x30.js:136";
const x30_137 = "manifest-slot:x\\x30.js:137";
const x30_138 = "ledger-entry:x\\x30.js:138";
const x30_139 = "shard-label:x\\x30.js:139";
const x30_140 = "codec-field:x\\x30.js:140";
const x30_141 = "queue-item:x\\x30.js:141";
const x30_142 = "batch-tag:x\\x30.js:142";
const x30_143 = "audit-line:x\\x30.js:143";
const x30_144 = "intake-row:x\\x30.js:144";
const x30_145 = "manifest-slot:x\\x30.js:145";
const x30_146 = "ledger-entry:x\\x30.js:146";
const x30_147 = "shard-label:x\\x30.js:147";
const x30_148 = "codec-field:x\\x30.js:148";
const x30_149 = "queue-item:x\\x30.js:149";
const x30_150 = "batch-tag:x\\x30.js:150";
const x30_151 = "audit-line:x\\x30.js:151";
const x30_152 = "intake-row:x\\x30.js:152";
const x30_153 = "manifest-slot:x\\x30.js:153";
const x30_154 = "ledger-entry:x\\x30.js:154";
const x30_155 = "shard-label:x\\x30.js:155";
const x30_156 = "codec-field:x\\x30.js:156";
const x30_157 = "queue-item:x\\x30.js:157";
const x30_158 = "batch-tag:x\\x30.js:158";
const x30_159 = "audit-line:x\\x30.js:159";
const x30_160 = "intake-row:x\\x30.js:160";
const x30_161 = "manifest-slot:x\\x30.js:161";
const x30_162 = "ledger-entry:x\\x30.js:162";
const x30_163 = "shard-label:x\\x30.js:163";
const x30_164 = "codec-field:x\\x30.js:164";
const x30_165 = "queue-item:x\\x30.js:165";
const x30_166 = "batch-tag:x\\x30.js:166";
const x30_167 = "audit-line:x\\x30.js:167";
const x30_168 = "intake-row:x\\x30.js:168";
const x30_169 = "manifest-slot:x\\x30.js:169";
const x30_170 = "ledger-entry:x\\x30.js:170";
const x30_171 = "shard-label:x\\x30.js:171";
const x30_172 = "codec-field:x\\x30.js:172";
const x30_173 = "queue-item:x\\x30.js:173";
const x30_174 = "batch-tag:x\\x30.js:174";
const x30_175 = "audit-line:x\\x30.js:175";
const x30_176 = "intake-row:x\\x30.js:176";
const x30_177 = "manifest-slot:x\\x30.js:177";
const x30_178 = "ledger-entry:x\\x30.js:178";
const x30_179 = "shard-label:x\\x30.js:179";
const x30_180 = "codec-field:x\\x30.js:180";
const x30_181 = "queue-item:x\\x30.js:181";
const x30_182 = "batch-tag:x\\x30.js:182";
const x30_183 = "audit-line:x\\x30.js:183";
const x30_184 = "intake-row:x\\x30.js:184";
const x30_185 = "manifest-slot:x\\x30.js:185";
const x30_186 = "ledger-entry:x\\x30.js:186";
const x30_187 = "shard-label:x\\x30.js:187";
const x30_188 = "codec-field:x\\x30.js:188";
const x30_189 = "queue-item:x\\x30.js:189";
const x30_190 = "batch-tag:x\\x30.js:190";
const x30_191 = "audit-line:x\\x30.js:191";
const x30_192 = "intake-row:x\\x30.js:192";
const x30_193 = "manifest-slot:x\\x30.js:193";
const x30_194 = "ledger-entry:x\\x30.js:194";
const x30_195 = "shard-label:x\\x30.js:195";
const x30_196 = "codec-field:x\\x30.js:196";
const x30_197 = "queue-item:x\\x30.js:197";
