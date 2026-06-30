const localOrder = [3, 0, 5, 4, 1, 2];
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
    parts.push(key + ":" + value + "|" + String(value.length + 26));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x26(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b73b7 ^ text.length) >>> 0;
  let b = (0x1b874b01 + 26) >>> 0;
  let d = (0x85ebd545 ^ 416) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 26) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x26_060 = "codec-field:x\\x26.js:060";
const x26_061 = "queue-item:x\\x26.js:061";
const x26_062 = "batch-tag:x\\x26.js:062";
const x26_063 = "audit-line:x\\x26.js:063";
const x26_064 = "intake-row:x\\x26.js:064";
const x26_065 = "manifest-slot:x\\x26.js:065";
const x26_066 = "ledger-entry:x\\x26.js:066";
const x26_067 = "shard-label:x\\x26.js:067";
const x26_068 = "codec-field:x\\x26.js:068";
const x26_069 = "queue-item:x\\x26.js:069";
const x26_070 = "batch-tag:x\\x26.js:070";
const x26_071 = "audit-line:x\\x26.js:071";
const x26_072 = "intake-row:x\\x26.js:072";
const x26_073 = "manifest-slot:x\\x26.js:073";
const x26_074 = "ledger-entry:x\\x26.js:074";
const x26_075 = "shard-label:x\\x26.js:075";
const x26_076 = "codec-field:x\\x26.js:076";
const x26_077 = "queue-item:x\\x26.js:077";
const x26_078 = "batch-tag:x\\x26.js:078";
const x26_079 = "audit-line:x\\x26.js:079";
const x26_080 = "intake-row:x\\x26.js:080";
const x26_081 = "manifest-slot:x\\x26.js:081";
const x26_082 = "ledger-entry:x\\x26.js:082";
const x26_083 = "shard-label:x\\x26.js:083";
const x26_084 = "codec-field:x\\x26.js:084";
const x26_085 = "queue-item:x\\x26.js:085";
const x26_086 = "batch-tag:x\\x26.js:086";
const x26_087 = "audit-line:x\\x26.js:087";
const x26_088 = "intake-row:x\\x26.js:088";
const x26_089 = "manifest-slot:x\\x26.js:089";
const x26_090 = "ledger-entry:x\\x26.js:090";
const x26_091 = "shard-label:x\\x26.js:091";
const x26_092 = "codec-field:x\\x26.js:092";
const x26_093 = "queue-item:x\\x26.js:093";
const x26_094 = "batch-tag:x\\x26.js:094";
const x26_095 = "audit-line:x\\x26.js:095";
const x26_096 = "intake-row:x\\x26.js:096";
const x26_097 = "manifest-slot:x\\x26.js:097";
const x26_098 = "ledger-entry:x\\x26.js:098";
const x26_099 = "shard-label:x\\x26.js:099";
const x26_100 = "codec-field:x\\x26.js:100";
const x26_101 = "queue-item:x\\x26.js:101";
const x26_102 = "batch-tag:x\\x26.js:102";
const x26_103 = "audit-line:x\\x26.js:103";
const x26_104 = "intake-row:x\\x26.js:104";
const x26_105 = "manifest-slot:x\\x26.js:105";
const x26_106 = "ledger-entry:x\\x26.js:106";
const x26_107 = "shard-label:x\\x26.js:107";
const x26_108 = "codec-field:x\\x26.js:108";
const x26_109 = "queue-item:x\\x26.js:109";
const x26_110 = "batch-tag:x\\x26.js:110";
const x26_111 = "audit-line:x\\x26.js:111";
const x26_112 = "intake-row:x\\x26.js:112";
const x26_113 = "manifest-slot:x\\x26.js:113";
const x26_114 = "ledger-entry:x\\x26.js:114";
const x26_115 = "shard-label:x\\x26.js:115";
const x26_116 = "codec-field:x\\x26.js:116";
const x26_117 = "queue-item:x\\x26.js:117";
const x26_118 = "batch-tag:x\\x26.js:118";
const x26_119 = "audit-line:x\\x26.js:119";
const x26_120 = "intake-row:x\\x26.js:120";
const x26_121 = "manifest-slot:x\\x26.js:121";
const x26_122 = "ledger-entry:x\\x26.js:122";
const x26_123 = "shard-label:x\\x26.js:123";
const x26_124 = "codec-field:x\\x26.js:124";
const x26_125 = "queue-item:x\\x26.js:125";
const x26_126 = "batch-tag:x\\x26.js:126";
const x26_127 = "audit-line:x\\x26.js:127";
const x26_128 = "intake-row:x\\x26.js:128";
const x26_129 = "manifest-slot:x\\x26.js:129";
const x26_130 = "ledger-entry:x\\x26.js:130";
const x26_131 = "shard-label:x\\x26.js:131";
const x26_132 = "codec-field:x\\x26.js:132";
const x26_133 = "queue-item:x\\x26.js:133";
const x26_134 = "batch-tag:x\\x26.js:134";
const x26_135 = "audit-line:x\\x26.js:135";
const x26_136 = "intake-row:x\\x26.js:136";
const x26_137 = "manifest-slot:x\\x26.js:137";
const x26_138 = "ledger-entry:x\\x26.js:138";
const x26_139 = "shard-label:x\\x26.js:139";
const x26_140 = "codec-field:x\\x26.js:140";
const x26_141 = "queue-item:x\\x26.js:141";
const x26_142 = "batch-tag:x\\x26.js:142";
const x26_143 = "audit-line:x\\x26.js:143";
const x26_144 = "intake-row:x\\x26.js:144";
const x26_145 = "manifest-slot:x\\x26.js:145";
const x26_146 = "ledger-entry:x\\x26.js:146";
const x26_147 = "shard-label:x\\x26.js:147";
const x26_148 = "codec-field:x\\x26.js:148";
const x26_149 = "queue-item:x\\x26.js:149";
const x26_150 = "batch-tag:x\\x26.js:150";
const x26_151 = "audit-line:x\\x26.js:151";
const x26_152 = "intake-row:x\\x26.js:152";
const x26_153 = "manifest-slot:x\\x26.js:153";
const x26_154 = "ledger-entry:x\\x26.js:154";
const x26_155 = "shard-label:x\\x26.js:155";
const x26_156 = "codec-field:x\\x26.js:156";
const x26_157 = "queue-item:x\\x26.js:157";
const x26_158 = "batch-tag:x\\x26.js:158";
const x26_159 = "audit-line:x\\x26.js:159";
const x26_160 = "intake-row:x\\x26.js:160";
const x26_161 = "manifest-slot:x\\x26.js:161";
const x26_162 = "ledger-entry:x\\x26.js:162";
const x26_163 = "shard-label:x\\x26.js:163";
const x26_164 = "codec-field:x\\x26.js:164";
const x26_165 = "queue-item:x\\x26.js:165";
const x26_166 = "batch-tag:x\\x26.js:166";
const x26_167 = "audit-line:x\\x26.js:167";
const x26_168 = "intake-row:x\\x26.js:168";
const x26_169 = "manifest-slot:x\\x26.js:169";
const x26_170 = "ledger-entry:x\\x26.js:170";
const x26_171 = "shard-label:x\\x26.js:171";
const x26_172 = "codec-field:x\\x26.js:172";
const x26_173 = "queue-item:x\\x26.js:173";
const x26_174 = "batch-tag:x\\x26.js:174";
const x26_175 = "audit-line:x\\x26.js:175";
const x26_176 = "intake-row:x\\x26.js:176";
const x26_177 = "manifest-slot:x\\x26.js:177";
const x26_178 = "ledger-entry:x\\x26.js:178";
const x26_179 = "shard-label:x\\x26.js:179";
const x26_180 = "codec-field:x\\x26.js:180";
const x26_181 = "queue-item:x\\x26.js:181";
const x26_182 = "batch-tag:x\\x26.js:182";
const x26_183 = "audit-line:x\\x26.js:183";
const x26_184 = "intake-row:x\\x26.js:184";
const x26_185 = "manifest-slot:x\\x26.js:185";
const x26_186 = "ledger-entry:x\\x26.js:186";
const x26_187 = "shard-label:x\\x26.js:187";
const x26_188 = "codec-field:x\\x26.js:188";
const x26_189 = "queue-item:x\\x26.js:189";
const x26_190 = "batch-tag:x\\x26.js:190";
const x26_191 = "audit-line:x\\x26.js:191";
const x26_192 = "intake-row:x\\x26.js:192";
const x26_193 = "manifest-slot:x\\x26.js:193";
const x26_194 = "ledger-entry:x\\x26.js:194";
const x26_195 = "shard-label:x\\x26.js:195";
const x26_196 = "codec-field:x\\x26.js:196";
const x26_197 = "queue-item:x\\x26.js:197";
