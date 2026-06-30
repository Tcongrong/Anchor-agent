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
    parts.push(key + "." + value + "|" + String(value.length + 23));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x23(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b70e6 ^ text.length) >>> 0;
  let b = (0x1b874888 + 23) >>> 0;
  let d = (0x85ebd1fe ^ 368) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 23) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x23_060 = "codec-field:x\\x23.js:060";
const x23_061 = "queue-item:x\\x23.js:061";
const x23_062 = "batch-tag:x\\x23.js:062";
const x23_063 = "audit-line:x\\x23.js:063";
const x23_064 = "intake-row:x\\x23.js:064";
const x23_065 = "manifest-slot:x\\x23.js:065";
const x23_066 = "ledger-entry:x\\x23.js:066";
const x23_067 = "shard-label:x\\x23.js:067";
const x23_068 = "codec-field:x\\x23.js:068";
const x23_069 = "queue-item:x\\x23.js:069";
const x23_070 = "batch-tag:x\\x23.js:070";
const x23_071 = "audit-line:x\\x23.js:071";
const x23_072 = "intake-row:x\\x23.js:072";
const x23_073 = "manifest-slot:x\\x23.js:073";
const x23_074 = "ledger-entry:x\\x23.js:074";
const x23_075 = "shard-label:x\\x23.js:075";
const x23_076 = "codec-field:x\\x23.js:076";
const x23_077 = "queue-item:x\\x23.js:077";
const x23_078 = "batch-tag:x\\x23.js:078";
const x23_079 = "audit-line:x\\x23.js:079";
const x23_080 = "intake-row:x\\x23.js:080";
const x23_081 = "manifest-slot:x\\x23.js:081";
const x23_082 = "ledger-entry:x\\x23.js:082";
const x23_083 = "shard-label:x\\x23.js:083";
const x23_084 = "codec-field:x\\x23.js:084";
const x23_085 = "queue-item:x\\x23.js:085";
const x23_086 = "batch-tag:x\\x23.js:086";
const x23_087 = "audit-line:x\\x23.js:087";
const x23_088 = "intake-row:x\\x23.js:088";
const x23_089 = "manifest-slot:x\\x23.js:089";
const x23_090 = "ledger-entry:x\\x23.js:090";
const x23_091 = "shard-label:x\\x23.js:091";
const x23_092 = "codec-field:x\\x23.js:092";
const x23_093 = "queue-item:x\\x23.js:093";
const x23_094 = "batch-tag:x\\x23.js:094";
const x23_095 = "audit-line:x\\x23.js:095";
const x23_096 = "intake-row:x\\x23.js:096";
const x23_097 = "manifest-slot:x\\x23.js:097";
const x23_098 = "ledger-entry:x\\x23.js:098";
const x23_099 = "shard-label:x\\x23.js:099";
const x23_100 = "codec-field:x\\x23.js:100";
const x23_101 = "queue-item:x\\x23.js:101";
const x23_102 = "batch-tag:x\\x23.js:102";
const x23_103 = "audit-line:x\\x23.js:103";
const x23_104 = "intake-row:x\\x23.js:104";
const x23_105 = "manifest-slot:x\\x23.js:105";
const x23_106 = "ledger-entry:x\\x23.js:106";
const x23_107 = "shard-label:x\\x23.js:107";
const x23_108 = "codec-field:x\\x23.js:108";
const x23_109 = "queue-item:x\\x23.js:109";
const x23_110 = "batch-tag:x\\x23.js:110";
const x23_111 = "audit-line:x\\x23.js:111";
const x23_112 = "intake-row:x\\x23.js:112";
const x23_113 = "manifest-slot:x\\x23.js:113";
const x23_114 = "ledger-entry:x\\x23.js:114";
const x23_115 = "shard-label:x\\x23.js:115";
const x23_116 = "codec-field:x\\x23.js:116";
const x23_117 = "queue-item:x\\x23.js:117";
const x23_118 = "batch-tag:x\\x23.js:118";
const x23_119 = "audit-line:x\\x23.js:119";
const x23_120 = "intake-row:x\\x23.js:120";
const x23_121 = "manifest-slot:x\\x23.js:121";
const x23_122 = "ledger-entry:x\\x23.js:122";
const x23_123 = "shard-label:x\\x23.js:123";
const x23_124 = "codec-field:x\\x23.js:124";
const x23_125 = "queue-item:x\\x23.js:125";
const x23_126 = "batch-tag:x\\x23.js:126";
const x23_127 = "audit-line:x\\x23.js:127";
const x23_128 = "intake-row:x\\x23.js:128";
const x23_129 = "manifest-slot:x\\x23.js:129";
const x23_130 = "ledger-entry:x\\x23.js:130";
const x23_131 = "shard-label:x\\x23.js:131";
const x23_132 = "codec-field:x\\x23.js:132";
const x23_133 = "queue-item:x\\x23.js:133";
const x23_134 = "batch-tag:x\\x23.js:134";
const x23_135 = "audit-line:x\\x23.js:135";
const x23_136 = "intake-row:x\\x23.js:136";
const x23_137 = "manifest-slot:x\\x23.js:137";
const x23_138 = "ledger-entry:x\\x23.js:138";
const x23_139 = "shard-label:x\\x23.js:139";
const x23_140 = "codec-field:x\\x23.js:140";
const x23_141 = "queue-item:x\\x23.js:141";
const x23_142 = "batch-tag:x\\x23.js:142";
const x23_143 = "audit-line:x\\x23.js:143";
const x23_144 = "intake-row:x\\x23.js:144";
const x23_145 = "manifest-slot:x\\x23.js:145";
const x23_146 = "ledger-entry:x\\x23.js:146";
const x23_147 = "shard-label:x\\x23.js:147";
const x23_148 = "codec-field:x\\x23.js:148";
const x23_149 = "queue-item:x\\x23.js:149";
const x23_150 = "batch-tag:x\\x23.js:150";
const x23_151 = "audit-line:x\\x23.js:151";
const x23_152 = "intake-row:x\\x23.js:152";
const x23_153 = "manifest-slot:x\\x23.js:153";
const x23_154 = "ledger-entry:x\\x23.js:154";
const x23_155 = "shard-label:x\\x23.js:155";
const x23_156 = "codec-field:x\\x23.js:156";
const x23_157 = "queue-item:x\\x23.js:157";
const x23_158 = "batch-tag:x\\x23.js:158";
const x23_159 = "audit-line:x\\x23.js:159";
const x23_160 = "intake-row:x\\x23.js:160";
const x23_161 = "manifest-slot:x\\x23.js:161";
const x23_162 = "ledger-entry:x\\x23.js:162";
const x23_163 = "shard-label:x\\x23.js:163";
const x23_164 = "codec-field:x\\x23.js:164";
const x23_165 = "queue-item:x\\x23.js:165";
const x23_166 = "batch-tag:x\\x23.js:166";
const x23_167 = "audit-line:x\\x23.js:167";
const x23_168 = "intake-row:x\\x23.js:168";
const x23_169 = "manifest-slot:x\\x23.js:169";
const x23_170 = "ledger-entry:x\\x23.js:170";
const x23_171 = "shard-label:x\\x23.js:171";
const x23_172 = "codec-field:x\\x23.js:172";
const x23_173 = "queue-item:x\\x23.js:173";
const x23_174 = "batch-tag:x\\x23.js:174";
const x23_175 = "audit-line:x\\x23.js:175";
const x23_176 = "intake-row:x\\x23.js:176";
const x23_177 = "manifest-slot:x\\x23.js:177";
const x23_178 = "ledger-entry:x\\x23.js:178";
const x23_179 = "shard-label:x\\x23.js:179";
const x23_180 = "codec-field:x\\x23.js:180";
const x23_181 = "queue-item:x\\x23.js:181";
const x23_182 = "batch-tag:x\\x23.js:182";
const x23_183 = "audit-line:x\\x23.js:183";
const x23_184 = "intake-row:x\\x23.js:184";
const x23_185 = "manifest-slot:x\\x23.js:185";
const x23_186 = "ledger-entry:x\\x23.js:186";
const x23_187 = "shard-label:x\\x23.js:187";
const x23_188 = "codec-field:x\\x23.js:188";
const x23_189 = "queue-item:x\\x23.js:189";
const x23_190 = "batch-tag:x\\x23.js:190";
const x23_191 = "audit-line:x\\x23.js:191";
const x23_192 = "intake-row:x\\x23.js:192";
const x23_193 = "manifest-slot:x\\x23.js:193";
const x23_194 = "ledger-entry:x\\x23.js:194";
const x23_195 = "shard-label:x\\x23.js:195";
const x23_196 = "codec-field:x\\x23.js:196";
const x23_197 = "queue-item:x\\x23.js:197";
