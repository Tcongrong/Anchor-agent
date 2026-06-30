const localOrder = [3, 4, 5, 2, 0, 1];
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
    parts.push(key + ":" + value + "|" + String(value.length + 32));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("|");
}

export function x32(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7555 ^ text.length) >>> 0;
  let b = (0x1b874ff3 + 32) >>> 0;
  let d = (0x85ebec0b ^ 512) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 32) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x32_060 = "codec-field:x\\x32.js:060";
const x32_061 = "queue-item:x\\x32.js:061";
const x32_062 = "batch-tag:x\\x32.js:062";
const x32_063 = "audit-line:x\\x32.js:063";
const x32_064 = "intake-row:x\\x32.js:064";
const x32_065 = "manifest-slot:x\\x32.js:065";
const x32_066 = "ledger-entry:x\\x32.js:066";
const x32_067 = "shard-label:x\\x32.js:067";
const x32_068 = "codec-field:x\\x32.js:068";
const x32_069 = "queue-item:x\\x32.js:069";
const x32_070 = "batch-tag:x\\x32.js:070";
const x32_071 = "audit-line:x\\x32.js:071";
const x32_072 = "intake-row:x\\x32.js:072";
const x32_073 = "manifest-slot:x\\x32.js:073";
const x32_074 = "ledger-entry:x\\x32.js:074";
const x32_075 = "shard-label:x\\x32.js:075";
const x32_076 = "codec-field:x\\x32.js:076";
const x32_077 = "queue-item:x\\x32.js:077";
const x32_078 = "batch-tag:x\\x32.js:078";
const x32_079 = "audit-line:x\\x32.js:079";
const x32_080 = "intake-row:x\\x32.js:080";
const x32_081 = "manifest-slot:x\\x32.js:081";
const x32_082 = "ledger-entry:x\\x32.js:082";
const x32_083 = "shard-label:x\\x32.js:083";
const x32_084 = "codec-field:x\\x32.js:084";
const x32_085 = "queue-item:x\\x32.js:085";
const x32_086 = "batch-tag:x\\x32.js:086";
const x32_087 = "audit-line:x\\x32.js:087";
const x32_088 = "intake-row:x\\x32.js:088";
const x32_089 = "manifest-slot:x\\x32.js:089";
const x32_090 = "ledger-entry:x\\x32.js:090";
const x32_091 = "shard-label:x\\x32.js:091";
const x32_092 = "codec-field:x\\x32.js:092";
const x32_093 = "queue-item:x\\x32.js:093";
const x32_094 = "batch-tag:x\\x32.js:094";
const x32_095 = "audit-line:x\\x32.js:095";
const x32_096 = "intake-row:x\\x32.js:096";
const x32_097 = "manifest-slot:x\\x32.js:097";
const x32_098 = "ledger-entry:x\\x32.js:098";
const x32_099 = "shard-label:x\\x32.js:099";
const x32_100 = "codec-field:x\\x32.js:100";
const x32_101 = "queue-item:x\\x32.js:101";
const x32_102 = "batch-tag:x\\x32.js:102";
const x32_103 = "audit-line:x\\x32.js:103";
const x32_104 = "intake-row:x\\x32.js:104";
const x32_105 = "manifest-slot:x\\x32.js:105";
const x32_106 = "ledger-entry:x\\x32.js:106";
const x32_107 = "shard-label:x\\x32.js:107";
const x32_108 = "codec-field:x\\x32.js:108";
const x32_109 = "queue-item:x\\x32.js:109";
const x32_110 = "batch-tag:x\\x32.js:110";
const x32_111 = "audit-line:x\\x32.js:111";
const x32_112 = "intake-row:x\\x32.js:112";
const x32_113 = "manifest-slot:x\\x32.js:113";
const x32_114 = "ledger-entry:x\\x32.js:114";
const x32_115 = "shard-label:x\\x32.js:115";
const x32_116 = "codec-field:x\\x32.js:116";
const x32_117 = "queue-item:x\\x32.js:117";
const x32_118 = "batch-tag:x\\x32.js:118";
const x32_119 = "audit-line:x\\x32.js:119";
const x32_120 = "intake-row:x\\x32.js:120";
const x32_121 = "manifest-slot:x\\x32.js:121";
const x32_122 = "ledger-entry:x\\x32.js:122";
const x32_123 = "shard-label:x\\x32.js:123";
const x32_124 = "codec-field:x\\x32.js:124";
const x32_125 = "queue-item:x\\x32.js:125";
const x32_126 = "batch-tag:x\\x32.js:126";
const x32_127 = "audit-line:x\\x32.js:127";
const x32_128 = "intake-row:x\\x32.js:128";
const x32_129 = "manifest-slot:x\\x32.js:129";
const x32_130 = "ledger-entry:x\\x32.js:130";
const x32_131 = "shard-label:x\\x32.js:131";
const x32_132 = "codec-field:x\\x32.js:132";
const x32_133 = "queue-item:x\\x32.js:133";
const x32_134 = "batch-tag:x\\x32.js:134";
const x32_135 = "audit-line:x\\x32.js:135";
const x32_136 = "intake-row:x\\x32.js:136";
const x32_137 = "manifest-slot:x\\x32.js:137";
const x32_138 = "ledger-entry:x\\x32.js:138";
const x32_139 = "shard-label:x\\x32.js:139";
const x32_140 = "codec-field:x\\x32.js:140";
const x32_141 = "queue-item:x\\x32.js:141";
const x32_142 = "batch-tag:x\\x32.js:142";
const x32_143 = "audit-line:x\\x32.js:143";
const x32_144 = "intake-row:x\\x32.js:144";
const x32_145 = "manifest-slot:x\\x32.js:145";
const x32_146 = "ledger-entry:x\\x32.js:146";
const x32_147 = "shard-label:x\\x32.js:147";
const x32_148 = "codec-field:x\\x32.js:148";
const x32_149 = "queue-item:x\\x32.js:149";
const x32_150 = "batch-tag:x\\x32.js:150";
const x32_151 = "audit-line:x\\x32.js:151";
const x32_152 = "intake-row:x\\x32.js:152";
const x32_153 = "manifest-slot:x\\x32.js:153";
const x32_154 = "ledger-entry:x\\x32.js:154";
const x32_155 = "shard-label:x\\x32.js:155";
const x32_156 = "codec-field:x\\x32.js:156";
const x32_157 = "queue-item:x\\x32.js:157";
const x32_158 = "batch-tag:x\\x32.js:158";
const x32_159 = "audit-line:x\\x32.js:159";
const x32_160 = "intake-row:x\\x32.js:160";
const x32_161 = "manifest-slot:x\\x32.js:161";
const x32_162 = "ledger-entry:x\\x32.js:162";
const x32_163 = "shard-label:x\\x32.js:163";
const x32_164 = "codec-field:x\\x32.js:164";
const x32_165 = "queue-item:x\\x32.js:165";
const x32_166 = "batch-tag:x\\x32.js:166";
const x32_167 = "audit-line:x\\x32.js:167";
const x32_168 = "intake-row:x\\x32.js:168";
const x32_169 = "manifest-slot:x\\x32.js:169";
const x32_170 = "ledger-entry:x\\x32.js:170";
const x32_171 = "shard-label:x\\x32.js:171";
const x32_172 = "codec-field:x\\x32.js:172";
const x32_173 = "queue-item:x\\x32.js:173";
const x32_174 = "batch-tag:x\\x32.js:174";
const x32_175 = "audit-line:x\\x32.js:175";
const x32_176 = "intake-row:x\\x32.js:176";
const x32_177 = "manifest-slot:x\\x32.js:177";
const x32_178 = "ledger-entry:x\\x32.js:178";
const x32_179 = "shard-label:x\\x32.js:179";
const x32_180 = "codec-field:x\\x32.js:180";
const x32_181 = "queue-item:x\\x32.js:181";
const x32_182 = "batch-tag:x\\x32.js:182";
const x32_183 = "audit-line:x\\x32.js:183";
const x32_184 = "intake-row:x\\x32.js:184";
const x32_185 = "manifest-slot:x\\x32.js:185";
const x32_186 = "ledger-entry:x\\x32.js:186";
const x32_187 = "shard-label:x\\x32.js:187";
const x32_188 = "codec-field:x\\x32.js:188";
const x32_189 = "queue-item:x\\x32.js:189";
const x32_190 = "batch-tag:x\\x32.js:190";
const x32_191 = "audit-line:x\\x32.js:191";
const x32_192 = "intake-row:x\\x32.js:192";
const x32_193 = "manifest-slot:x\\x32.js:193";
const x32_194 = "ledger-entry:x\\x32.js:194";
const x32_195 = "shard-label:x\\x32.js:195";
const x32_196 = "codec-field:x\\x32.js:196";
const x32_197 = "queue-item:x\\x32.js:197";
