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
    parts.push(key + ":" + value + "|" + String(value.length + 34));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x34(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b749f ^ text.length) >>> 0;
  let b = (0x1b875199 + 34) >>> 0;
  let d = (0x85ebe2ad ^ 544) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 34) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x34_060 = "codec-field:x\\x34.js:060";
const x34_061 = "queue-item:x\\x34.js:061";
const x34_062 = "batch-tag:x\\x34.js:062";
const x34_063 = "audit-line:x\\x34.js:063";
const x34_064 = "intake-row:x\\x34.js:064";
const x34_065 = "manifest-slot:x\\x34.js:065";
const x34_066 = "ledger-entry:x\\x34.js:066";
const x34_067 = "shard-label:x\\x34.js:067";
const x34_068 = "codec-field:x\\x34.js:068";
const x34_069 = "queue-item:x\\x34.js:069";
const x34_070 = "batch-tag:x\\x34.js:070";
const x34_071 = "audit-line:x\\x34.js:071";
const x34_072 = "intake-row:x\\x34.js:072";
const x34_073 = "manifest-slot:x\\x34.js:073";
const x34_074 = "ledger-entry:x\\x34.js:074";
const x34_075 = "shard-label:x\\x34.js:075";
const x34_076 = "codec-field:x\\x34.js:076";
const x34_077 = "queue-item:x\\x34.js:077";
const x34_078 = "batch-tag:x\\x34.js:078";
const x34_079 = "audit-line:x\\x34.js:079";
const x34_080 = "intake-row:x\\x34.js:080";
const x34_081 = "manifest-slot:x\\x34.js:081";
const x34_082 = "ledger-entry:x\\x34.js:082";
const x34_083 = "shard-label:x\\x34.js:083";
const x34_084 = "codec-field:x\\x34.js:084";
const x34_085 = "queue-item:x\\x34.js:085";
const x34_086 = "batch-tag:x\\x34.js:086";
const x34_087 = "audit-line:x\\x34.js:087";
const x34_088 = "intake-row:x\\x34.js:088";
const x34_089 = "manifest-slot:x\\x34.js:089";
const x34_090 = "ledger-entry:x\\x34.js:090";
const x34_091 = "shard-label:x\\x34.js:091";
const x34_092 = "codec-field:x\\x34.js:092";
const x34_093 = "queue-item:x\\x34.js:093";
const x34_094 = "batch-tag:x\\x34.js:094";
const x34_095 = "audit-line:x\\x34.js:095";
const x34_096 = "intake-row:x\\x34.js:096";
const x34_097 = "manifest-slot:x\\x34.js:097";
const x34_098 = "ledger-entry:x\\x34.js:098";
const x34_099 = "shard-label:x\\x34.js:099";
const x34_100 = "codec-field:x\\x34.js:100";
const x34_101 = "queue-item:x\\x34.js:101";
const x34_102 = "batch-tag:x\\x34.js:102";
const x34_103 = "audit-line:x\\x34.js:103";
const x34_104 = "intake-row:x\\x34.js:104";
const x34_105 = "manifest-slot:x\\x34.js:105";
const x34_106 = "ledger-entry:x\\x34.js:106";
const x34_107 = "shard-label:x\\x34.js:107";
const x34_108 = "codec-field:x\\x34.js:108";
const x34_109 = "queue-item:x\\x34.js:109";
const x34_110 = "batch-tag:x\\x34.js:110";
const x34_111 = "audit-line:x\\x34.js:111";
const x34_112 = "intake-row:x\\x34.js:112";
const x34_113 = "manifest-slot:x\\x34.js:113";
const x34_114 = "ledger-entry:x\\x34.js:114";
const x34_115 = "shard-label:x\\x34.js:115";
const x34_116 = "codec-field:x\\x34.js:116";
const x34_117 = "queue-item:x\\x34.js:117";
const x34_118 = "batch-tag:x\\x34.js:118";
const x34_119 = "audit-line:x\\x34.js:119";
const x34_120 = "intake-row:x\\x34.js:120";
const x34_121 = "manifest-slot:x\\x34.js:121";
const x34_122 = "ledger-entry:x\\x34.js:122";
const x34_123 = "shard-label:x\\x34.js:123";
const x34_124 = "codec-field:x\\x34.js:124";
const x34_125 = "queue-item:x\\x34.js:125";
const x34_126 = "batch-tag:x\\x34.js:126";
const x34_127 = "audit-line:x\\x34.js:127";
const x34_128 = "intake-row:x\\x34.js:128";
const x34_129 = "manifest-slot:x\\x34.js:129";
const x34_130 = "ledger-entry:x\\x34.js:130";
const x34_131 = "shard-label:x\\x34.js:131";
const x34_132 = "codec-field:x\\x34.js:132";
const x34_133 = "queue-item:x\\x34.js:133";
const x34_134 = "batch-tag:x\\x34.js:134";
const x34_135 = "audit-line:x\\x34.js:135";
const x34_136 = "intake-row:x\\x34.js:136";
const x34_137 = "manifest-slot:x\\x34.js:137";
const x34_138 = "ledger-entry:x\\x34.js:138";
const x34_139 = "shard-label:x\\x34.js:139";
const x34_140 = "codec-field:x\\x34.js:140";
const x34_141 = "queue-item:x\\x34.js:141";
const x34_142 = "batch-tag:x\\x34.js:142";
const x34_143 = "audit-line:x\\x34.js:143";
const x34_144 = "intake-row:x\\x34.js:144";
const x34_145 = "manifest-slot:x\\x34.js:145";
const x34_146 = "ledger-entry:x\\x34.js:146";
const x34_147 = "shard-label:x\\x34.js:147";
const x34_148 = "codec-field:x\\x34.js:148";
const x34_149 = "queue-item:x\\x34.js:149";
const x34_150 = "batch-tag:x\\x34.js:150";
const x34_151 = "audit-line:x\\x34.js:151";
const x34_152 = "intake-row:x\\x34.js:152";
const x34_153 = "manifest-slot:x\\x34.js:153";
const x34_154 = "ledger-entry:x\\x34.js:154";
const x34_155 = "shard-label:x\\x34.js:155";
const x34_156 = "codec-field:x\\x34.js:156";
const x34_157 = "queue-item:x\\x34.js:157";
const x34_158 = "batch-tag:x\\x34.js:158";
const x34_159 = "audit-line:x\\x34.js:159";
const x34_160 = "intake-row:x\\x34.js:160";
const x34_161 = "manifest-slot:x\\x34.js:161";
const x34_162 = "ledger-entry:x\\x34.js:162";
const x34_163 = "shard-label:x\\x34.js:163";
const x34_164 = "codec-field:x\\x34.js:164";
const x34_165 = "queue-item:x\\x34.js:165";
const x34_166 = "batch-tag:x\\x34.js:166";
const x34_167 = "audit-line:x\\x34.js:167";
const x34_168 = "intake-row:x\\x34.js:168";
const x34_169 = "manifest-slot:x\\x34.js:169";
const x34_170 = "ledger-entry:x\\x34.js:170";
const x34_171 = "shard-label:x\\x34.js:171";
const x34_172 = "codec-field:x\\x34.js:172";
const x34_173 = "queue-item:x\\x34.js:173";
const x34_174 = "batch-tag:x\\x34.js:174";
const x34_175 = "audit-line:x\\x34.js:175";
const x34_176 = "intake-row:x\\x34.js:176";
const x34_177 = "manifest-slot:x\\x34.js:177";
const x34_178 = "ledger-entry:x\\x34.js:178";
const x34_179 = "shard-label:x\\x34.js:179";
const x34_180 = "codec-field:x\\x34.js:180";
const x34_181 = "queue-item:x\\x34.js:181";
const x34_182 = "batch-tag:x\\x34.js:182";
const x34_183 = "audit-line:x\\x34.js:183";
const x34_184 = "intake-row:x\\x34.js:184";
const x34_185 = "manifest-slot:x\\x34.js:185";
const x34_186 = "ledger-entry:x\\x34.js:186";
const x34_187 = "shard-label:x\\x34.js:187";
const x34_188 = "codec-field:x\\x34.js:188";
const x34_189 = "queue-item:x\\x34.js:189";
const x34_190 = "batch-tag:x\\x34.js:190";
const x34_191 = "audit-line:x\\x34.js:191";
const x34_192 = "intake-row:x\\x34.js:192";
const x34_193 = "manifest-slot:x\\x34.js:193";
const x34_194 = "ledger-entry:x\\x34.js:194";
const x34_195 = "shard-label:x\\x34.js:195";
const x34_196 = "codec-field:x\\x34.js:196";
const x34_197 = "queue-item:x\\x34.js:197";
