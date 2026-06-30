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
    parts.push(key + "." + value + "|" + String(value.length + 41));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x41(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b69d8 ^ text.length) >>> 0;
  let b = (0x1b87575e + 41) >>> 0;
  let d = (0x85ebfb40 ^ 656) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 41) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x41_060 = "codec-field:x\\x41.js:060";
const x41_061 = "queue-item:x\\x41.js:061";
const x41_062 = "batch-tag:x\\x41.js:062";
const x41_063 = "audit-line:x\\x41.js:063";
const x41_064 = "intake-row:x\\x41.js:064";
const x41_065 = "manifest-slot:x\\x41.js:065";
const x41_066 = "ledger-entry:x\\x41.js:066";
const x41_067 = "shard-label:x\\x41.js:067";
const x41_068 = "codec-field:x\\x41.js:068";
const x41_069 = "queue-item:x\\x41.js:069";
const x41_070 = "batch-tag:x\\x41.js:070";
const x41_071 = "audit-line:x\\x41.js:071";
const x41_072 = "intake-row:x\\x41.js:072";
const x41_073 = "manifest-slot:x\\x41.js:073";
const x41_074 = "ledger-entry:x\\x41.js:074";
const x41_075 = "shard-label:x\\x41.js:075";
const x41_076 = "codec-field:x\\x41.js:076";
const x41_077 = "queue-item:x\\x41.js:077";
const x41_078 = "batch-tag:x\\x41.js:078";
const x41_079 = "audit-line:x\\x41.js:079";
const x41_080 = "intake-row:x\\x41.js:080";
const x41_081 = "manifest-slot:x\\x41.js:081";
const x41_082 = "ledger-entry:x\\x41.js:082";
const x41_083 = "shard-label:x\\x41.js:083";
const x41_084 = "codec-field:x\\x41.js:084";
const x41_085 = "queue-item:x\\x41.js:085";
const x41_086 = "batch-tag:x\\x41.js:086";
const x41_087 = "audit-line:x\\x41.js:087";
const x41_088 = "intake-row:x\\x41.js:088";
const x41_089 = "manifest-slot:x\\x41.js:089";
const x41_090 = "ledger-entry:x\\x41.js:090";
const x41_091 = "shard-label:x\\x41.js:091";
const x41_092 = "codec-field:x\\x41.js:092";
const x41_093 = "queue-item:x\\x41.js:093";
const x41_094 = "batch-tag:x\\x41.js:094";
const x41_095 = "audit-line:x\\x41.js:095";
const x41_096 = "intake-row:x\\x41.js:096";
const x41_097 = "manifest-slot:x\\x41.js:097";
const x41_098 = "ledger-entry:x\\x41.js:098";
const x41_099 = "shard-label:x\\x41.js:099";
const x41_100 = "codec-field:x\\x41.js:100";
const x41_101 = "queue-item:x\\x41.js:101";
const x41_102 = "batch-tag:x\\x41.js:102";
const x41_103 = "audit-line:x\\x41.js:103";
const x41_104 = "intake-row:x\\x41.js:104";
const x41_105 = "manifest-slot:x\\x41.js:105";
const x41_106 = "ledger-entry:x\\x41.js:106";
const x41_107 = "shard-label:x\\x41.js:107";
const x41_108 = "codec-field:x\\x41.js:108";
const x41_109 = "queue-item:x\\x41.js:109";
const x41_110 = "batch-tag:x\\x41.js:110";
const x41_111 = "audit-line:x\\x41.js:111";
const x41_112 = "intake-row:x\\x41.js:112";
const x41_113 = "manifest-slot:x\\x41.js:113";
const x41_114 = "ledger-entry:x\\x41.js:114";
const x41_115 = "shard-label:x\\x41.js:115";
const x41_116 = "codec-field:x\\x41.js:116";
const x41_117 = "queue-item:x\\x41.js:117";
const x41_118 = "batch-tag:x\\x41.js:118";
const x41_119 = "audit-line:x\\x41.js:119";
const x41_120 = "intake-row:x\\x41.js:120";
const x41_121 = "manifest-slot:x\\x41.js:121";
const x41_122 = "ledger-entry:x\\x41.js:122";
const x41_123 = "shard-label:x\\x41.js:123";
const x41_124 = "codec-field:x\\x41.js:124";
const x41_125 = "queue-item:x\\x41.js:125";
const x41_126 = "batch-tag:x\\x41.js:126";
const x41_127 = "audit-line:x\\x41.js:127";
const x41_128 = "intake-row:x\\x41.js:128";
const x41_129 = "manifest-slot:x\\x41.js:129";
const x41_130 = "ledger-entry:x\\x41.js:130";
const x41_131 = "shard-label:x\\x41.js:131";
const x41_132 = "codec-field:x\\x41.js:132";
const x41_133 = "queue-item:x\\x41.js:133";
const x41_134 = "batch-tag:x\\x41.js:134";
const x41_135 = "audit-line:x\\x41.js:135";
const x41_136 = "intake-row:x\\x41.js:136";
const x41_137 = "manifest-slot:x\\x41.js:137";
const x41_138 = "ledger-entry:x\\x41.js:138";
const x41_139 = "shard-label:x\\x41.js:139";
const x41_140 = "codec-field:x\\x41.js:140";
const x41_141 = "queue-item:x\\x41.js:141";
const x41_142 = "batch-tag:x\\x41.js:142";
const x41_143 = "audit-line:x\\x41.js:143";
const x41_144 = "intake-row:x\\x41.js:144";
const x41_145 = "manifest-slot:x\\x41.js:145";
const x41_146 = "ledger-entry:x\\x41.js:146";
const x41_147 = "shard-label:x\\x41.js:147";
const x41_148 = "codec-field:x\\x41.js:148";
const x41_149 = "queue-item:x\\x41.js:149";
const x41_150 = "batch-tag:x\\x41.js:150";
const x41_151 = "audit-line:x\\x41.js:151";
const x41_152 = "intake-row:x\\x41.js:152";
const x41_153 = "manifest-slot:x\\x41.js:153";
const x41_154 = "ledger-entry:x\\x41.js:154";
const x41_155 = "shard-label:x\\x41.js:155";
const x41_156 = "codec-field:x\\x41.js:156";
const x41_157 = "queue-item:x\\x41.js:157";
const x41_158 = "batch-tag:x\\x41.js:158";
const x41_159 = "audit-line:x\\x41.js:159";
const x41_160 = "intake-row:x\\x41.js:160";
const x41_161 = "manifest-slot:x\\x41.js:161";
const x41_162 = "ledger-entry:x\\x41.js:162";
const x41_163 = "shard-label:x\\x41.js:163";
const x41_164 = "codec-field:x\\x41.js:164";
const x41_165 = "queue-item:x\\x41.js:165";
const x41_166 = "batch-tag:x\\x41.js:166";
const x41_167 = "audit-line:x\\x41.js:167";
const x41_168 = "intake-row:x\\x41.js:168";
const x41_169 = "manifest-slot:x\\x41.js:169";
const x41_170 = "ledger-entry:x\\x41.js:170";
const x41_171 = "shard-label:x\\x41.js:171";
const x41_172 = "codec-field:x\\x41.js:172";
const x41_173 = "queue-item:x\\x41.js:173";
const x41_174 = "batch-tag:x\\x41.js:174";
const x41_175 = "audit-line:x\\x41.js:175";
const x41_176 = "intake-row:x\\x41.js:176";
const x41_177 = "manifest-slot:x\\x41.js:177";
const x41_178 = "ledger-entry:x\\x41.js:178";
const x41_179 = "shard-label:x\\x41.js:179";
const x41_180 = "codec-field:x\\x41.js:180";
const x41_181 = "queue-item:x\\x41.js:181";
const x41_182 = "batch-tag:x\\x41.js:182";
const x41_183 = "audit-line:x\\x41.js:183";
const x41_184 = "intake-row:x\\x41.js:184";
const x41_185 = "manifest-slot:x\\x41.js:185";
const x41_186 = "ledger-entry:x\\x41.js:186";
const x41_187 = "shard-label:x\\x41.js:187";
const x41_188 = "codec-field:x\\x41.js:188";
const x41_189 = "queue-item:x\\x41.js:189";
const x41_190 = "batch-tag:x\\x41.js:190";
const x41_191 = "audit-line:x\\x41.js:191";
const x41_192 = "intake-row:x\\x41.js:192";
const x41_193 = "manifest-slot:x\\x41.js:193";
const x41_194 = "ledger-entry:x\\x41.js:194";
const x41_195 = "shard-label:x\\x41.js:195";
const x41_196 = "codec-field:x\\x41.js:196";
const x41_197 = "queue-item:x\\x41.js:197";
