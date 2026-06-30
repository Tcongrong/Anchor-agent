const localOrder = [4, 5, 3, 2, 1, 0];
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
    parts.push(key + ":" + value + "|" + String(value.length + 28));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("|");
}

export function x28(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b72f9 ^ text.length) >>> 0;
  let b = (0x1b874ca7 + 28) >>> 0;
  let d = (0x85ebebff ^ 448) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 28) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x28_060 = "codec-field:x\\x28.js:060";
const x28_061 = "queue-item:x\\x28.js:061";
const x28_062 = "batch-tag:x\\x28.js:062";
const x28_063 = "audit-line:x\\x28.js:063";
const x28_064 = "intake-row:x\\x28.js:064";
const x28_065 = "manifest-slot:x\\x28.js:065";
const x28_066 = "ledger-entry:x\\x28.js:066";
const x28_067 = "shard-label:x\\x28.js:067";
const x28_068 = "codec-field:x\\x28.js:068";
const x28_069 = "queue-item:x\\x28.js:069";
const x28_070 = "batch-tag:x\\x28.js:070";
const x28_071 = "audit-line:x\\x28.js:071";
const x28_072 = "intake-row:x\\x28.js:072";
const x28_073 = "manifest-slot:x\\x28.js:073";
const x28_074 = "ledger-entry:x\\x28.js:074";
const x28_075 = "shard-label:x\\x28.js:075";
const x28_076 = "codec-field:x\\x28.js:076";
const x28_077 = "queue-item:x\\x28.js:077";
const x28_078 = "batch-tag:x\\x28.js:078";
const x28_079 = "audit-line:x\\x28.js:079";
const x28_080 = "intake-row:x\\x28.js:080";
const x28_081 = "manifest-slot:x\\x28.js:081";
const x28_082 = "ledger-entry:x\\x28.js:082";
const x28_083 = "shard-label:x\\x28.js:083";
const x28_084 = "codec-field:x\\x28.js:084";
const x28_085 = "queue-item:x\\x28.js:085";
const x28_086 = "batch-tag:x\\x28.js:086";
const x28_087 = "audit-line:x\\x28.js:087";
const x28_088 = "intake-row:x\\x28.js:088";
const x28_089 = "manifest-slot:x\\x28.js:089";
const x28_090 = "ledger-entry:x\\x28.js:090";
const x28_091 = "shard-label:x\\x28.js:091";
const x28_092 = "codec-field:x\\x28.js:092";
const x28_093 = "queue-item:x\\x28.js:093";
const x28_094 = "batch-tag:x\\x28.js:094";
const x28_095 = "audit-line:x\\x28.js:095";
const x28_096 = "intake-row:x\\x28.js:096";
const x28_097 = "manifest-slot:x\\x28.js:097";
const x28_098 = "ledger-entry:x\\x28.js:098";
const x28_099 = "shard-label:x\\x28.js:099";
const x28_100 = "codec-field:x\\x28.js:100";
const x28_101 = "queue-item:x\\x28.js:101";
const x28_102 = "batch-tag:x\\x28.js:102";
const x28_103 = "audit-line:x\\x28.js:103";
const x28_104 = "intake-row:x\\x28.js:104";
const x28_105 = "manifest-slot:x\\x28.js:105";
const x28_106 = "ledger-entry:x\\x28.js:106";
const x28_107 = "shard-label:x\\x28.js:107";
const x28_108 = "codec-field:x\\x28.js:108";
const x28_109 = "queue-item:x\\x28.js:109";
const x28_110 = "batch-tag:x\\x28.js:110";
const x28_111 = "audit-line:x\\x28.js:111";
const x28_112 = "intake-row:x\\x28.js:112";
const x28_113 = "manifest-slot:x\\x28.js:113";
const x28_114 = "ledger-entry:x\\x28.js:114";
const x28_115 = "shard-label:x\\x28.js:115";
const x28_116 = "codec-field:x\\x28.js:116";
const x28_117 = "queue-item:x\\x28.js:117";
const x28_118 = "batch-tag:x\\x28.js:118";
const x28_119 = "audit-line:x\\x28.js:119";
const x28_120 = "intake-row:x\\x28.js:120";
const x28_121 = "manifest-slot:x\\x28.js:121";
const x28_122 = "ledger-entry:x\\x28.js:122";
const x28_123 = "shard-label:x\\x28.js:123";
const x28_124 = "codec-field:x\\x28.js:124";
const x28_125 = "queue-item:x\\x28.js:125";
const x28_126 = "batch-tag:x\\x28.js:126";
const x28_127 = "audit-line:x\\x28.js:127";
const x28_128 = "intake-row:x\\x28.js:128";
const x28_129 = "manifest-slot:x\\x28.js:129";
const x28_130 = "ledger-entry:x\\x28.js:130";
const x28_131 = "shard-label:x\\x28.js:131";
const x28_132 = "codec-field:x\\x28.js:132";
const x28_133 = "queue-item:x\\x28.js:133";
const x28_134 = "batch-tag:x\\x28.js:134";
const x28_135 = "audit-line:x\\x28.js:135";
const x28_136 = "intake-row:x\\x28.js:136";
const x28_137 = "manifest-slot:x\\x28.js:137";
const x28_138 = "ledger-entry:x\\x28.js:138";
const x28_139 = "shard-label:x\\x28.js:139";
const x28_140 = "codec-field:x\\x28.js:140";
const x28_141 = "queue-item:x\\x28.js:141";
const x28_142 = "batch-tag:x\\x28.js:142";
const x28_143 = "audit-line:x\\x28.js:143";
const x28_144 = "intake-row:x\\x28.js:144";
const x28_145 = "manifest-slot:x\\x28.js:145";
const x28_146 = "ledger-entry:x\\x28.js:146";
const x28_147 = "shard-label:x\\x28.js:147";
const x28_148 = "codec-field:x\\x28.js:148";
const x28_149 = "queue-item:x\\x28.js:149";
const x28_150 = "batch-tag:x\\x28.js:150";
const x28_151 = "audit-line:x\\x28.js:151";
const x28_152 = "intake-row:x\\x28.js:152";
const x28_153 = "manifest-slot:x\\x28.js:153";
const x28_154 = "ledger-entry:x\\x28.js:154";
const x28_155 = "shard-label:x\\x28.js:155";
const x28_156 = "codec-field:x\\x28.js:156";
const x28_157 = "queue-item:x\\x28.js:157";
const x28_158 = "batch-tag:x\\x28.js:158";
const x28_159 = "audit-line:x\\x28.js:159";
const x28_160 = "intake-row:x\\x28.js:160";
const x28_161 = "manifest-slot:x\\x28.js:161";
const x28_162 = "ledger-entry:x\\x28.js:162";
const x28_163 = "shard-label:x\\x28.js:163";
const x28_164 = "codec-field:x\\x28.js:164";
const x28_165 = "queue-item:x\\x28.js:165";
const x28_166 = "batch-tag:x\\x28.js:166";
const x28_167 = "audit-line:x\\x28.js:167";
const x28_168 = "intake-row:x\\x28.js:168";
const x28_169 = "manifest-slot:x\\x28.js:169";
const x28_170 = "ledger-entry:x\\x28.js:170";
const x28_171 = "shard-label:x\\x28.js:171";
const x28_172 = "codec-field:x\\x28.js:172";
const x28_173 = "queue-item:x\\x28.js:173";
const x28_174 = "batch-tag:x\\x28.js:174";
const x28_175 = "audit-line:x\\x28.js:175";
const x28_176 = "intake-row:x\\x28.js:176";
const x28_177 = "manifest-slot:x\\x28.js:177";
const x28_178 = "ledger-entry:x\\x28.js:178";
const x28_179 = "shard-label:x\\x28.js:179";
const x28_180 = "codec-field:x\\x28.js:180";
const x28_181 = "queue-item:x\\x28.js:181";
const x28_182 = "batch-tag:x\\x28.js:182";
const x28_183 = "audit-line:x\\x28.js:183";
const x28_184 = "intake-row:x\\x28.js:184";
const x28_185 = "manifest-slot:x\\x28.js:185";
const x28_186 = "ledger-entry:x\\x28.js:186";
const x28_187 = "shard-label:x\\x28.js:187";
const x28_188 = "codec-field:x\\x28.js:188";
const x28_189 = "queue-item:x\\x28.js:189";
const x28_190 = "batch-tag:x\\x28.js:190";
const x28_191 = "audit-line:x\\x28.js:191";
const x28_192 = "intake-row:x\\x28.js:192";
const x28_193 = "manifest-slot:x\\x28.js:193";
const x28_194 = "ledger-entry:x\\x28.js:194";
const x28_195 = "shard-label:x\\x28.js:195";
const x28_196 = "codec-field:x\\x28.js:196";
const x28_197 = "queue-item:x\\x28.js:197";
