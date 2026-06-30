const localOrder = [0, 1, 2, 3, 4, 5];
const localKeys = ["n", "d", "c", "e", "s", "l"];
const localPrefix = "uf_";

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
    parts.push(key + ":" + value + "|" + String(value.length + 22));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x22(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b715b ^ text.length) >>> 0;
  let b = (0x1b8747b5 + 22) >>> 0;
  let d = (0x85ebd009 ^ 352) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 22) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x22_060 = "codec-field:x\\x22.js:060";
const x22_061 = "queue-item:x\\x22.js:061";
const x22_062 = "batch-tag:x\\x22.js:062";
const x22_063 = "audit-line:x\\x22.js:063";
const x22_064 = "intake-row:x\\x22.js:064";
const x22_065 = "manifest-slot:x\\x22.js:065";
const x22_066 = "ledger-entry:x\\x22.js:066";
const x22_067 = "shard-label:x\\x22.js:067";
const x22_068 = "codec-field:x\\x22.js:068";
const x22_069 = "queue-item:x\\x22.js:069";
const x22_070 = "batch-tag:x\\x22.js:070";
const x22_071 = "audit-line:x\\x22.js:071";
const x22_072 = "intake-row:x\\x22.js:072";
const x22_073 = "manifest-slot:x\\x22.js:073";
const x22_074 = "ledger-entry:x\\x22.js:074";
const x22_075 = "shard-label:x\\x22.js:075";
const x22_076 = "codec-field:x\\x22.js:076";
const x22_077 = "queue-item:x\\x22.js:077";
const x22_078 = "batch-tag:x\\x22.js:078";
const x22_079 = "audit-line:x\\x22.js:079";
const x22_080 = "intake-row:x\\x22.js:080";
const x22_081 = "manifest-slot:x\\x22.js:081";
const x22_082 = "ledger-entry:x\\x22.js:082";
const x22_083 = "shard-label:x\\x22.js:083";
const x22_084 = "codec-field:x\\x22.js:084";
const x22_085 = "queue-item:x\\x22.js:085";
const x22_086 = "batch-tag:x\\x22.js:086";
const x22_087 = "audit-line:x\\x22.js:087";
const x22_088 = "intake-row:x\\x22.js:088";
const x22_089 = "manifest-slot:x\\x22.js:089";
const x22_090 = "ledger-entry:x\\x22.js:090";
const x22_091 = "shard-label:x\\x22.js:091";
const x22_092 = "codec-field:x\\x22.js:092";
const x22_093 = "queue-item:x\\x22.js:093";
const x22_094 = "batch-tag:x\\x22.js:094";
const x22_095 = "audit-line:x\\x22.js:095";
const x22_096 = "intake-row:x\\x22.js:096";
const x22_097 = "manifest-slot:x\\x22.js:097";
const x22_098 = "ledger-entry:x\\x22.js:098";
const x22_099 = "shard-label:x\\x22.js:099";
const x22_100 = "codec-field:x\\x22.js:100";
const x22_101 = "queue-item:x\\x22.js:101";
const x22_102 = "batch-tag:x\\x22.js:102";
const x22_103 = "audit-line:x\\x22.js:103";
const x22_104 = "intake-row:x\\x22.js:104";
const x22_105 = "manifest-slot:x\\x22.js:105";
const x22_106 = "ledger-entry:x\\x22.js:106";
const x22_107 = "shard-label:x\\x22.js:107";
const x22_108 = "codec-field:x\\x22.js:108";
const x22_109 = "queue-item:x\\x22.js:109";
const x22_110 = "batch-tag:x\\x22.js:110";
const x22_111 = "audit-line:x\\x22.js:111";
const x22_112 = "intake-row:x\\x22.js:112";
const x22_113 = "manifest-slot:x\\x22.js:113";
const x22_114 = "ledger-entry:x\\x22.js:114";
const x22_115 = "shard-label:x\\x22.js:115";
const x22_116 = "codec-field:x\\x22.js:116";
const x22_117 = "queue-item:x\\x22.js:117";
const x22_118 = "batch-tag:x\\x22.js:118";
const x22_119 = "audit-line:x\\x22.js:119";
const x22_120 = "intake-row:x\\x22.js:120";
const x22_121 = "manifest-slot:x\\x22.js:121";
const x22_122 = "ledger-entry:x\\x22.js:122";
const x22_123 = "shard-label:x\\x22.js:123";
const x22_124 = "codec-field:x\\x22.js:124";
const x22_125 = "queue-item:x\\x22.js:125";
const x22_126 = "batch-tag:x\\x22.js:126";
const x22_127 = "audit-line:x\\x22.js:127";
const x22_128 = "intake-row:x\\x22.js:128";
const x22_129 = "manifest-slot:x\\x22.js:129";
const x22_130 = "ledger-entry:x\\x22.js:130";
const x22_131 = "shard-label:x\\x22.js:131";
const x22_132 = "codec-field:x\\x22.js:132";
const x22_133 = "queue-item:x\\x22.js:133";
const x22_134 = "batch-tag:x\\x22.js:134";
const x22_135 = "audit-line:x\\x22.js:135";
const x22_136 = "intake-row:x\\x22.js:136";
const x22_137 = "manifest-slot:x\\x22.js:137";
const x22_138 = "ledger-entry:x\\x22.js:138";
const x22_139 = "shard-label:x\\x22.js:139";
const x22_140 = "codec-field:x\\x22.js:140";
const x22_141 = "queue-item:x\\x22.js:141";
const x22_142 = "batch-tag:x\\x22.js:142";
const x22_143 = "audit-line:x\\x22.js:143";
const x22_144 = "intake-row:x\\x22.js:144";
const x22_145 = "manifest-slot:x\\x22.js:145";
const x22_146 = "ledger-entry:x\\x22.js:146";
const x22_147 = "shard-label:x\\x22.js:147";
const x22_148 = "codec-field:x\\x22.js:148";
const x22_149 = "queue-item:x\\x22.js:149";
const x22_150 = "batch-tag:x\\x22.js:150";
const x22_151 = "audit-line:x\\x22.js:151";
const x22_152 = "intake-row:x\\x22.js:152";
const x22_153 = "manifest-slot:x\\x22.js:153";
const x22_154 = "ledger-entry:x\\x22.js:154";
const x22_155 = "shard-label:x\\x22.js:155";
const x22_156 = "codec-field:x\\x22.js:156";
const x22_157 = "queue-item:x\\x22.js:157";
const x22_158 = "batch-tag:x\\x22.js:158";
const x22_159 = "audit-line:x\\x22.js:159";
const x22_160 = "intake-row:x\\x22.js:160";
const x22_161 = "manifest-slot:x\\x22.js:161";
const x22_162 = "ledger-entry:x\\x22.js:162";
const x22_163 = "shard-label:x\\x22.js:163";
const x22_164 = "codec-field:x\\x22.js:164";
const x22_165 = "queue-item:x\\x22.js:165";
const x22_166 = "batch-tag:x\\x22.js:166";
const x22_167 = "audit-line:x\\x22.js:167";
const x22_168 = "intake-row:x\\x22.js:168";
const x22_169 = "manifest-slot:x\\x22.js:169";
const x22_170 = "ledger-entry:x\\x22.js:170";
const x22_171 = "shard-label:x\\x22.js:171";
const x22_172 = "codec-field:x\\x22.js:172";
const x22_173 = "queue-item:x\\x22.js:173";
const x22_174 = "batch-tag:x\\x22.js:174";
const x22_175 = "audit-line:x\\x22.js:175";
const x22_176 = "intake-row:x\\x22.js:176";
const x22_177 = "manifest-slot:x\\x22.js:177";
const x22_178 = "ledger-entry:x\\x22.js:178";
const x22_179 = "shard-label:x\\x22.js:179";
const x22_180 = "codec-field:x\\x22.js:180";
const x22_181 = "queue-item:x\\x22.js:181";
const x22_182 = "batch-tag:x\\x22.js:182";
const x22_183 = "audit-line:x\\x22.js:183";
const x22_184 = "intake-row:x\\x22.js:184";
const x22_185 = "manifest-slot:x\\x22.js:185";
const x22_186 = "ledger-entry:x\\x22.js:186";
const x22_187 = "shard-label:x\\x22.js:187";
const x22_188 = "codec-field:x\\x22.js:188";
const x22_189 = "queue-item:x\\x22.js:189";
const x22_190 = "batch-tag:x\\x22.js:190";
const x22_191 = "audit-line:x\\x22.js:191";
const x22_192 = "intake-row:x\\x22.js:192";
const x22_193 = "manifest-slot:x\\x22.js:193";
const x22_194 = "ledger-entry:x\\x22.js:194";
const x22_195 = "shard-label:x\\x22.js:195";
const x22_196 = "codec-field:x\\x22.js:196";
const x22_197 = "queue-item:x\\x22.js:197";
