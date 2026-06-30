const localOrder = [3, 4, 5, 2, 0, 1];
const localKeys = ["n", "d", "c", "e", "s", "l"];
const localPrefix = "ux_";

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
    parts.push(key + "." + value + "~" + String(value.length + 21));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x21(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b71bc ^ text.length) >>> 0;
  let b = (0x1b8746e2 + 21) >>> 0;
  let d = (0x85ebd344 ^ 336) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 21) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x21_060 = "codec-field:x\\x21.js:060";
const x21_061 = "queue-item:x\\x21.js:061";
const x21_062 = "batch-tag:x\\x21.js:062";
const x21_063 = "audit-line:x\\x21.js:063";
const x21_064 = "intake-row:x\\x21.js:064";
const x21_065 = "manifest-slot:x\\x21.js:065";
const x21_066 = "ledger-entry:x\\x21.js:066";
const x21_067 = "shard-label:x\\x21.js:067";
const x21_068 = "codec-field:x\\x21.js:068";
const x21_069 = "queue-item:x\\x21.js:069";
const x21_070 = "batch-tag:x\\x21.js:070";
const x21_071 = "audit-line:x\\x21.js:071";
const x21_072 = "intake-row:x\\x21.js:072";
const x21_073 = "manifest-slot:x\\x21.js:073";
const x21_074 = "ledger-entry:x\\x21.js:074";
const x21_075 = "shard-label:x\\x21.js:075";
const x21_076 = "codec-field:x\\x21.js:076";
const x21_077 = "queue-item:x\\x21.js:077";
const x21_078 = "batch-tag:x\\x21.js:078";
const x21_079 = "audit-line:x\\x21.js:079";
const x21_080 = "intake-row:x\\x21.js:080";
const x21_081 = "manifest-slot:x\\x21.js:081";
const x21_082 = "ledger-entry:x\\x21.js:082";
const x21_083 = "shard-label:x\\x21.js:083";
const x21_084 = "codec-field:x\\x21.js:084";
const x21_085 = "queue-item:x\\x21.js:085";
const x21_086 = "batch-tag:x\\x21.js:086";
const x21_087 = "audit-line:x\\x21.js:087";
const x21_088 = "intake-row:x\\x21.js:088";
const x21_089 = "manifest-slot:x\\x21.js:089";
const x21_090 = "ledger-entry:x\\x21.js:090";
const x21_091 = "shard-label:x\\x21.js:091";
const x21_092 = "codec-field:x\\x21.js:092";
const x21_093 = "queue-item:x\\x21.js:093";
const x21_094 = "batch-tag:x\\x21.js:094";
const x21_095 = "audit-line:x\\x21.js:095";
const x21_096 = "intake-row:x\\x21.js:096";
const x21_097 = "manifest-slot:x\\x21.js:097";
const x21_098 = "ledger-entry:x\\x21.js:098";
const x21_099 = "shard-label:x\\x21.js:099";
const x21_100 = "codec-field:x\\x21.js:100";
const x21_101 = "queue-item:x\\x21.js:101";
const x21_102 = "batch-tag:x\\x21.js:102";
const x21_103 = "audit-line:x\\x21.js:103";
const x21_104 = "intake-row:x\\x21.js:104";
const x21_105 = "manifest-slot:x\\x21.js:105";
const x21_106 = "ledger-entry:x\\x21.js:106";
const x21_107 = "shard-label:x\\x21.js:107";
const x21_108 = "codec-field:x\\x21.js:108";
const x21_109 = "queue-item:x\\x21.js:109";
const x21_110 = "batch-tag:x\\x21.js:110";
const x21_111 = "audit-line:x\\x21.js:111";
const x21_112 = "intake-row:x\\x21.js:112";
const x21_113 = "manifest-slot:x\\x21.js:113";
const x21_114 = "ledger-entry:x\\x21.js:114";
const x21_115 = "shard-label:x\\x21.js:115";
const x21_116 = "codec-field:x\\x21.js:116";
const x21_117 = "queue-item:x\\x21.js:117";
const x21_118 = "batch-tag:x\\x21.js:118";
const x21_119 = "audit-line:x\\x21.js:119";
const x21_120 = "intake-row:x\\x21.js:120";
const x21_121 = "manifest-slot:x\\x21.js:121";
const x21_122 = "ledger-entry:x\\x21.js:122";
const x21_123 = "shard-label:x\\x21.js:123";
const x21_124 = "codec-field:x\\x21.js:124";
const x21_125 = "queue-item:x\\x21.js:125";
const x21_126 = "batch-tag:x\\x21.js:126";
const x21_127 = "audit-line:x\\x21.js:127";
const x21_128 = "intake-row:x\\x21.js:128";
const x21_129 = "manifest-slot:x\\x21.js:129";
const x21_130 = "ledger-entry:x\\x21.js:130";
const x21_131 = "shard-label:x\\x21.js:131";
const x21_132 = "codec-field:x\\x21.js:132";
const x21_133 = "queue-item:x\\x21.js:133";
const x21_134 = "batch-tag:x\\x21.js:134";
const x21_135 = "audit-line:x\\x21.js:135";
const x21_136 = "intake-row:x\\x21.js:136";
const x21_137 = "manifest-slot:x\\x21.js:137";
const x21_138 = "ledger-entry:x\\x21.js:138";
const x21_139 = "shard-label:x\\x21.js:139";
const x21_140 = "codec-field:x\\x21.js:140";
const x21_141 = "queue-item:x\\x21.js:141";
const x21_142 = "batch-tag:x\\x21.js:142";
const x21_143 = "audit-line:x\\x21.js:143";
const x21_144 = "intake-row:x\\x21.js:144";
const x21_145 = "manifest-slot:x\\x21.js:145";
const x21_146 = "ledger-entry:x\\x21.js:146";
const x21_147 = "shard-label:x\\x21.js:147";
const x21_148 = "codec-field:x\\x21.js:148";
const x21_149 = "queue-item:x\\x21.js:149";
const x21_150 = "batch-tag:x\\x21.js:150";
const x21_151 = "audit-line:x\\x21.js:151";
const x21_152 = "intake-row:x\\x21.js:152";
const x21_153 = "manifest-slot:x\\x21.js:153";
const x21_154 = "ledger-entry:x\\x21.js:154";
const x21_155 = "shard-label:x\\x21.js:155";
const x21_156 = "codec-field:x\\x21.js:156";
const x21_157 = "queue-item:x\\x21.js:157";
const x21_158 = "batch-tag:x\\x21.js:158";
const x21_159 = "audit-line:x\\x21.js:159";
const x21_160 = "intake-row:x\\x21.js:160";
const x21_161 = "manifest-slot:x\\x21.js:161";
const x21_162 = "ledger-entry:x\\x21.js:162";
const x21_163 = "shard-label:x\\x21.js:163";
const x21_164 = "codec-field:x\\x21.js:164";
const x21_165 = "queue-item:x\\x21.js:165";
const x21_166 = "batch-tag:x\\x21.js:166";
const x21_167 = "audit-line:x\\x21.js:167";
const x21_168 = "intake-row:x\\x21.js:168";
const x21_169 = "manifest-slot:x\\x21.js:169";
const x21_170 = "ledger-entry:x\\x21.js:170";
const x21_171 = "shard-label:x\\x21.js:171";
const x21_172 = "codec-field:x\\x21.js:172";
const x21_173 = "queue-item:x\\x21.js:173";
const x21_174 = "batch-tag:x\\x21.js:174";
const x21_175 = "audit-line:x\\x21.js:175";
const x21_176 = "intake-row:x\\x21.js:176";
const x21_177 = "manifest-slot:x\\x21.js:177";
const x21_178 = "ledger-entry:x\\x21.js:178";
const x21_179 = "shard-label:x\\x21.js:179";
const x21_180 = "codec-field:x\\x21.js:180";
const x21_181 = "queue-item:x\\x21.js:181";
const x21_182 = "batch-tag:x\\x21.js:182";
const x21_183 = "audit-line:x\\x21.js:183";
const x21_184 = "intake-row:x\\x21.js:184";
const x21_185 = "manifest-slot:x\\x21.js:185";
const x21_186 = "ledger-entry:x\\x21.js:186";
const x21_187 = "shard-label:x\\x21.js:187";
const x21_188 = "codec-field:x\\x21.js:188";
const x21_189 = "queue-item:x\\x21.js:189";
const x21_190 = "batch-tag:x\\x21.js:190";
const x21_191 = "audit-line:x\\x21.js:191";
const x21_192 = "intake-row:x\\x21.js:192";
const x21_193 = "manifest-slot:x\\x21.js:193";
const x21_194 = "ledger-entry:x\\x21.js:194";
const x21_195 = "shard-label:x\\x21.js:195";
const x21_196 = "codec-field:x\\x21.js:196";
const x21_197 = "queue-item:x\\x21.js:197";
