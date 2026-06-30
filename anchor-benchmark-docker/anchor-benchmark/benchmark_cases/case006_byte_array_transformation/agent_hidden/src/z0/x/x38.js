const localOrder = [5, 4, 3, 2, 1, 0];
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
    parts.push(key + ":" + value + "|" + String(value.length + 38));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x38(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b770b ^ text.length) >>> 0;
  let b = (0x1b8754e5 + 38) >>> 0;
  let d = (0x85ebe7f9 ^ 608) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 38) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x38_060 = "codec-field:x\\x38.js:060";
const x38_061 = "queue-item:x\\x38.js:061";
const x38_062 = "batch-tag:x\\x38.js:062";
const x38_063 = "audit-line:x\\x38.js:063";
const x38_064 = "intake-row:x\\x38.js:064";
const x38_065 = "manifest-slot:x\\x38.js:065";
const x38_066 = "ledger-entry:x\\x38.js:066";
const x38_067 = "shard-label:x\\x38.js:067";
const x38_068 = "codec-field:x\\x38.js:068";
const x38_069 = "queue-item:x\\x38.js:069";
const x38_070 = "batch-tag:x\\x38.js:070";
const x38_071 = "audit-line:x\\x38.js:071";
const x38_072 = "intake-row:x\\x38.js:072";
const x38_073 = "manifest-slot:x\\x38.js:073";
const x38_074 = "ledger-entry:x\\x38.js:074";
const x38_075 = "shard-label:x\\x38.js:075";
const x38_076 = "codec-field:x\\x38.js:076";
const x38_077 = "queue-item:x\\x38.js:077";
const x38_078 = "batch-tag:x\\x38.js:078";
const x38_079 = "audit-line:x\\x38.js:079";
const x38_080 = "intake-row:x\\x38.js:080";
const x38_081 = "manifest-slot:x\\x38.js:081";
const x38_082 = "ledger-entry:x\\x38.js:082";
const x38_083 = "shard-label:x\\x38.js:083";
const x38_084 = "codec-field:x\\x38.js:084";
const x38_085 = "queue-item:x\\x38.js:085";
const x38_086 = "batch-tag:x\\x38.js:086";
const x38_087 = "audit-line:x\\x38.js:087";
const x38_088 = "intake-row:x\\x38.js:088";
const x38_089 = "manifest-slot:x\\x38.js:089";
const x38_090 = "ledger-entry:x\\x38.js:090";
const x38_091 = "shard-label:x\\x38.js:091";
const x38_092 = "codec-field:x\\x38.js:092";
const x38_093 = "queue-item:x\\x38.js:093";
const x38_094 = "batch-tag:x\\x38.js:094";
const x38_095 = "audit-line:x\\x38.js:095";
const x38_096 = "intake-row:x\\x38.js:096";
const x38_097 = "manifest-slot:x\\x38.js:097";
const x38_098 = "ledger-entry:x\\x38.js:098";
const x38_099 = "shard-label:x\\x38.js:099";
const x38_100 = "codec-field:x\\x38.js:100";
const x38_101 = "queue-item:x\\x38.js:101";
const x38_102 = "batch-tag:x\\x38.js:102";
const x38_103 = "audit-line:x\\x38.js:103";
const x38_104 = "intake-row:x\\x38.js:104";
const x38_105 = "manifest-slot:x\\x38.js:105";
const x38_106 = "ledger-entry:x\\x38.js:106";
const x38_107 = "shard-label:x\\x38.js:107";
const x38_108 = "codec-field:x\\x38.js:108";
const x38_109 = "queue-item:x\\x38.js:109";
const x38_110 = "batch-tag:x\\x38.js:110";
const x38_111 = "audit-line:x\\x38.js:111";
const x38_112 = "intake-row:x\\x38.js:112";
const x38_113 = "manifest-slot:x\\x38.js:113";
const x38_114 = "ledger-entry:x\\x38.js:114";
const x38_115 = "shard-label:x\\x38.js:115";
const x38_116 = "codec-field:x\\x38.js:116";
const x38_117 = "queue-item:x\\x38.js:117";
const x38_118 = "batch-tag:x\\x38.js:118";
const x38_119 = "audit-line:x\\x38.js:119";
const x38_120 = "intake-row:x\\x38.js:120";
const x38_121 = "manifest-slot:x\\x38.js:121";
const x38_122 = "ledger-entry:x\\x38.js:122";
const x38_123 = "shard-label:x\\x38.js:123";
const x38_124 = "codec-field:x\\x38.js:124";
const x38_125 = "queue-item:x\\x38.js:125";
const x38_126 = "batch-tag:x\\x38.js:126";
const x38_127 = "audit-line:x\\x38.js:127";
const x38_128 = "intake-row:x\\x38.js:128";
const x38_129 = "manifest-slot:x\\x38.js:129";
const x38_130 = "ledger-entry:x\\x38.js:130";
const x38_131 = "shard-label:x\\x38.js:131";
const x38_132 = "codec-field:x\\x38.js:132";
const x38_133 = "queue-item:x\\x38.js:133";
const x38_134 = "batch-tag:x\\x38.js:134";
const x38_135 = "audit-line:x\\x38.js:135";
const x38_136 = "intake-row:x\\x38.js:136";
const x38_137 = "manifest-slot:x\\x38.js:137";
const x38_138 = "ledger-entry:x\\x38.js:138";
const x38_139 = "shard-label:x\\x38.js:139";
const x38_140 = "codec-field:x\\x38.js:140";
const x38_141 = "queue-item:x\\x38.js:141";
const x38_142 = "batch-tag:x\\x38.js:142";
const x38_143 = "audit-line:x\\x38.js:143";
const x38_144 = "intake-row:x\\x38.js:144";
const x38_145 = "manifest-slot:x\\x38.js:145";
const x38_146 = "ledger-entry:x\\x38.js:146";
const x38_147 = "shard-label:x\\x38.js:147";
const x38_148 = "codec-field:x\\x38.js:148";
const x38_149 = "queue-item:x\\x38.js:149";
const x38_150 = "batch-tag:x\\x38.js:150";
const x38_151 = "audit-line:x\\x38.js:151";
const x38_152 = "intake-row:x\\x38.js:152";
const x38_153 = "manifest-slot:x\\x38.js:153";
const x38_154 = "ledger-entry:x\\x38.js:154";
const x38_155 = "shard-label:x\\x38.js:155";
const x38_156 = "codec-field:x\\x38.js:156";
const x38_157 = "queue-item:x\\x38.js:157";
const x38_158 = "batch-tag:x\\x38.js:158";
const x38_159 = "audit-line:x\\x38.js:159";
const x38_160 = "intake-row:x\\x38.js:160";
const x38_161 = "manifest-slot:x\\x38.js:161";
const x38_162 = "ledger-entry:x\\x38.js:162";
const x38_163 = "shard-label:x\\x38.js:163";
const x38_164 = "codec-field:x\\x38.js:164";
const x38_165 = "queue-item:x\\x38.js:165";
const x38_166 = "batch-tag:x\\x38.js:166";
const x38_167 = "audit-line:x\\x38.js:167";
const x38_168 = "intake-row:x\\x38.js:168";
const x38_169 = "manifest-slot:x\\x38.js:169";
const x38_170 = "ledger-entry:x\\x38.js:170";
const x38_171 = "shard-label:x\\x38.js:171";
const x38_172 = "codec-field:x\\x38.js:172";
const x38_173 = "queue-item:x\\x38.js:173";
const x38_174 = "batch-tag:x\\x38.js:174";
const x38_175 = "audit-line:x\\x38.js:175";
const x38_176 = "intake-row:x\\x38.js:176";
const x38_177 = "manifest-slot:x\\x38.js:177";
const x38_178 = "ledger-entry:x\\x38.js:178";
const x38_179 = "shard-label:x\\x38.js:179";
const x38_180 = "codec-field:x\\x38.js:180";
const x38_181 = "queue-item:x\\x38.js:181";
const x38_182 = "batch-tag:x\\x38.js:182";
const x38_183 = "audit-line:x\\x38.js:183";
const x38_184 = "intake-row:x\\x38.js:184";
const x38_185 = "manifest-slot:x\\x38.js:185";
const x38_186 = "ledger-entry:x\\x38.js:186";
const x38_187 = "shard-label:x\\x38.js:187";
const x38_188 = "codec-field:x\\x38.js:188";
const x38_189 = "queue-item:x\\x38.js:189";
const x38_190 = "batch-tag:x\\x38.js:190";
const x38_191 = "audit-line:x\\x38.js:191";
const x38_192 = "intake-row:x\\x38.js:192";
const x38_193 = "manifest-slot:x\\x38.js:193";
const x38_194 = "ledger-entry:x\\x38.js:194";
const x38_195 = "shard-label:x\\x38.js:195";
const x38_196 = "codec-field:x\\x38.js:196";
const x38_197 = "queue-item:x\\x38.js:197";
