const localOrder = [1, 2, 3, 4, 5, 0];
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
    parts.push(key + "." + value + "|" + String(value.length + 7));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x07(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7b36 ^ text.length) >>> 0;
  let b = (0x1b873b58 + 7) >>> 0;
  let d = (0x85ebc20e ^ 112) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 7) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x07_060 = "codec-field:x\\x07.js:060";
const x07_061 = "queue-item:x\\x07.js:061";
const x07_062 = "batch-tag:x\\x07.js:062";
const x07_063 = "audit-line:x\\x07.js:063";
const x07_064 = "intake-row:x\\x07.js:064";
const x07_065 = "manifest-slot:x\\x07.js:065";
const x07_066 = "ledger-entry:x\\x07.js:066";
const x07_067 = "shard-label:x\\x07.js:067";
const x07_068 = "codec-field:x\\x07.js:068";
const x07_069 = "queue-item:x\\x07.js:069";
const x07_070 = "batch-tag:x\\x07.js:070";
const x07_071 = "audit-line:x\\x07.js:071";
const x07_072 = "intake-row:x\\x07.js:072";
const x07_073 = "manifest-slot:x\\x07.js:073";
const x07_074 = "ledger-entry:x\\x07.js:074";
const x07_075 = "shard-label:x\\x07.js:075";
const x07_076 = "codec-field:x\\x07.js:076";
const x07_077 = "queue-item:x\\x07.js:077";
const x07_078 = "batch-tag:x\\x07.js:078";
const x07_079 = "audit-line:x\\x07.js:079";
const x07_080 = "intake-row:x\\x07.js:080";
const x07_081 = "manifest-slot:x\\x07.js:081";
const x07_082 = "ledger-entry:x\\x07.js:082";
const x07_083 = "shard-label:x\\x07.js:083";
const x07_084 = "codec-field:x\\x07.js:084";
const x07_085 = "queue-item:x\\x07.js:085";
const x07_086 = "batch-tag:x\\x07.js:086";
const x07_087 = "audit-line:x\\x07.js:087";
const x07_088 = "intake-row:x\\x07.js:088";
const x07_089 = "manifest-slot:x\\x07.js:089";
const x07_090 = "ledger-entry:x\\x07.js:090";
const x07_091 = "shard-label:x\\x07.js:091";
const x07_092 = "codec-field:x\\x07.js:092";
const x07_093 = "queue-item:x\\x07.js:093";
const x07_094 = "batch-tag:x\\x07.js:094";
const x07_095 = "audit-line:x\\x07.js:095";
const x07_096 = "intake-row:x\\x07.js:096";
const x07_097 = "manifest-slot:x\\x07.js:097";
const x07_098 = "ledger-entry:x\\x07.js:098";
const x07_099 = "shard-label:x\\x07.js:099";
const x07_100 = "codec-field:x\\x07.js:100";
const x07_101 = "queue-item:x\\x07.js:101";
const x07_102 = "batch-tag:x\\x07.js:102";
const x07_103 = "audit-line:x\\x07.js:103";
const x07_104 = "intake-row:x\\x07.js:104";
const x07_105 = "manifest-slot:x\\x07.js:105";
const x07_106 = "ledger-entry:x\\x07.js:106";
const x07_107 = "shard-label:x\\x07.js:107";
const x07_108 = "codec-field:x\\x07.js:108";
const x07_109 = "queue-item:x\\x07.js:109";
const x07_110 = "batch-tag:x\\x07.js:110";
const x07_111 = "audit-line:x\\x07.js:111";
const x07_112 = "intake-row:x\\x07.js:112";
const x07_113 = "manifest-slot:x\\x07.js:113";
const x07_114 = "ledger-entry:x\\x07.js:114";
const x07_115 = "shard-label:x\\x07.js:115";
const x07_116 = "codec-field:x\\x07.js:116";
const x07_117 = "queue-item:x\\x07.js:117";
const x07_118 = "batch-tag:x\\x07.js:118";
const x07_119 = "audit-line:x\\x07.js:119";
const x07_120 = "intake-row:x\\x07.js:120";
const x07_121 = "manifest-slot:x\\x07.js:121";
const x07_122 = "ledger-entry:x\\x07.js:122";
const x07_123 = "shard-label:x\\x07.js:123";
const x07_124 = "codec-field:x\\x07.js:124";
const x07_125 = "queue-item:x\\x07.js:125";
const x07_126 = "batch-tag:x\\x07.js:126";
const x07_127 = "audit-line:x\\x07.js:127";
const x07_128 = "intake-row:x\\x07.js:128";
const x07_129 = "manifest-slot:x\\x07.js:129";
const x07_130 = "ledger-entry:x\\x07.js:130";
const x07_131 = "shard-label:x\\x07.js:131";
const x07_132 = "codec-field:x\\x07.js:132";
const x07_133 = "queue-item:x\\x07.js:133";
const x07_134 = "batch-tag:x\\x07.js:134";
const x07_135 = "audit-line:x\\x07.js:135";
const x07_136 = "intake-row:x\\x07.js:136";
const x07_137 = "manifest-slot:x\\x07.js:137";
const x07_138 = "ledger-entry:x\\x07.js:138";
const x07_139 = "shard-label:x\\x07.js:139";
const x07_140 = "codec-field:x\\x07.js:140";
const x07_141 = "queue-item:x\\x07.js:141";
const x07_142 = "batch-tag:x\\x07.js:142";
const x07_143 = "audit-line:x\\x07.js:143";
const x07_144 = "intake-row:x\\x07.js:144";
const x07_145 = "manifest-slot:x\\x07.js:145";
const x07_146 = "ledger-entry:x\\x07.js:146";
const x07_147 = "shard-label:x\\x07.js:147";
const x07_148 = "codec-field:x\\x07.js:148";
const x07_149 = "queue-item:x\\x07.js:149";
const x07_150 = "batch-tag:x\\x07.js:150";
const x07_151 = "audit-line:x\\x07.js:151";
const x07_152 = "intake-row:x\\x07.js:152";
const x07_153 = "manifest-slot:x\\x07.js:153";
const x07_154 = "ledger-entry:x\\x07.js:154";
const x07_155 = "shard-label:x\\x07.js:155";
const x07_156 = "codec-field:x\\x07.js:156";
const x07_157 = "queue-item:x\\x07.js:157";
const x07_158 = "batch-tag:x\\x07.js:158";
const x07_159 = "audit-line:x\\x07.js:159";
const x07_160 = "intake-row:x\\x07.js:160";
const x07_161 = "manifest-slot:x\\x07.js:161";
const x07_162 = "ledger-entry:x\\x07.js:162";
const x07_163 = "shard-label:x\\x07.js:163";
const x07_164 = "codec-field:x\\x07.js:164";
const x07_165 = "queue-item:x\\x07.js:165";
const x07_166 = "batch-tag:x\\x07.js:166";
const x07_167 = "audit-line:x\\x07.js:167";
const x07_168 = "intake-row:x\\x07.js:168";
const x07_169 = "manifest-slot:x\\x07.js:169";
const x07_170 = "ledger-entry:x\\x07.js:170";
const x07_171 = "shard-label:x\\x07.js:171";
const x07_172 = "codec-field:x\\x07.js:172";
const x07_173 = "queue-item:x\\x07.js:173";
const x07_174 = "batch-tag:x\\x07.js:174";
const x07_175 = "audit-line:x\\x07.js:175";
const x07_176 = "intake-row:x\\x07.js:176";
const x07_177 = "manifest-slot:x\\x07.js:177";
const x07_178 = "ledger-entry:x\\x07.js:178";
const x07_179 = "shard-label:x\\x07.js:179";
const x07_180 = "codec-field:x\\x07.js:180";
const x07_181 = "queue-item:x\\x07.js:181";
const x07_182 = "batch-tag:x\\x07.js:182";
const x07_183 = "audit-line:x\\x07.js:183";
const x07_184 = "intake-row:x\\x07.js:184";
const x07_185 = "manifest-slot:x\\x07.js:185";
const x07_186 = "ledger-entry:x\\x07.js:186";
const x07_187 = "shard-label:x\\x07.js:187";
const x07_188 = "codec-field:x\\x07.js:188";
const x07_189 = "queue-item:x\\x07.js:189";
const x07_190 = "batch-tag:x\\x07.js:190";
const x07_191 = "audit-line:x\\x07.js:191";
const x07_192 = "intake-row:x\\x07.js:192";
const x07_193 = "manifest-slot:x\\x07.js:193";
const x07_194 = "ledger-entry:x\\x07.js:194";
const x07_195 = "shard-label:x\\x07.js:195";
const x07_196 = "codec-field:x\\x07.js:196";
const x07_197 = "queue-item:x\\x07.js:197";
