const localOrder = [4, 5, 3, 2, 1, 0];
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
    parts.push(key + "." + value + "~" + String(value.length + 39));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x39(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7696 ^ text.length) >>> 0;
  let b = (0x1b8755b8 + 39) >>> 0;
  let d = (0x85ebe4ae ^ 624) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 39) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x39_060 = "codec-field:x\\x39.js:060";
const x39_061 = "queue-item:x\\x39.js:061";
const x39_062 = "batch-tag:x\\x39.js:062";
const x39_063 = "audit-line:x\\x39.js:063";
const x39_064 = "intake-row:x\\x39.js:064";
const x39_065 = "manifest-slot:x\\x39.js:065";
const x39_066 = "ledger-entry:x\\x39.js:066";
const x39_067 = "shard-label:x\\x39.js:067";
const x39_068 = "codec-field:x\\x39.js:068";
const x39_069 = "queue-item:x\\x39.js:069";
const x39_070 = "batch-tag:x\\x39.js:070";
const x39_071 = "audit-line:x\\x39.js:071";
const x39_072 = "intake-row:x\\x39.js:072";
const x39_073 = "manifest-slot:x\\x39.js:073";
const x39_074 = "ledger-entry:x\\x39.js:074";
const x39_075 = "shard-label:x\\x39.js:075";
const x39_076 = "codec-field:x\\x39.js:076";
const x39_077 = "queue-item:x\\x39.js:077";
const x39_078 = "batch-tag:x\\x39.js:078";
const x39_079 = "audit-line:x\\x39.js:079";
const x39_080 = "intake-row:x\\x39.js:080";
const x39_081 = "manifest-slot:x\\x39.js:081";
const x39_082 = "ledger-entry:x\\x39.js:082";
const x39_083 = "shard-label:x\\x39.js:083";
const x39_084 = "codec-field:x\\x39.js:084";
const x39_085 = "queue-item:x\\x39.js:085";
const x39_086 = "batch-tag:x\\x39.js:086";
const x39_087 = "audit-line:x\\x39.js:087";
const x39_088 = "intake-row:x\\x39.js:088";
const x39_089 = "manifest-slot:x\\x39.js:089";
const x39_090 = "ledger-entry:x\\x39.js:090";
const x39_091 = "shard-label:x\\x39.js:091";
const x39_092 = "codec-field:x\\x39.js:092";
const x39_093 = "queue-item:x\\x39.js:093";
const x39_094 = "batch-tag:x\\x39.js:094";
const x39_095 = "audit-line:x\\x39.js:095";
const x39_096 = "intake-row:x\\x39.js:096";
const x39_097 = "manifest-slot:x\\x39.js:097";
const x39_098 = "ledger-entry:x\\x39.js:098";
const x39_099 = "shard-label:x\\x39.js:099";
const x39_100 = "codec-field:x\\x39.js:100";
const x39_101 = "queue-item:x\\x39.js:101";
const x39_102 = "batch-tag:x\\x39.js:102";
const x39_103 = "audit-line:x\\x39.js:103";
const x39_104 = "intake-row:x\\x39.js:104";
const x39_105 = "manifest-slot:x\\x39.js:105";
const x39_106 = "ledger-entry:x\\x39.js:106";
const x39_107 = "shard-label:x\\x39.js:107";
const x39_108 = "codec-field:x\\x39.js:108";
const x39_109 = "queue-item:x\\x39.js:109";
const x39_110 = "batch-tag:x\\x39.js:110";
const x39_111 = "audit-line:x\\x39.js:111";
const x39_112 = "intake-row:x\\x39.js:112";
const x39_113 = "manifest-slot:x\\x39.js:113";
const x39_114 = "ledger-entry:x\\x39.js:114";
const x39_115 = "shard-label:x\\x39.js:115";
const x39_116 = "codec-field:x\\x39.js:116";
const x39_117 = "queue-item:x\\x39.js:117";
const x39_118 = "batch-tag:x\\x39.js:118";
const x39_119 = "audit-line:x\\x39.js:119";
const x39_120 = "intake-row:x\\x39.js:120";
const x39_121 = "manifest-slot:x\\x39.js:121";
const x39_122 = "ledger-entry:x\\x39.js:122";
const x39_123 = "shard-label:x\\x39.js:123";
const x39_124 = "codec-field:x\\x39.js:124";
const x39_125 = "queue-item:x\\x39.js:125";
const x39_126 = "batch-tag:x\\x39.js:126";
const x39_127 = "audit-line:x\\x39.js:127";
const x39_128 = "intake-row:x\\x39.js:128";
const x39_129 = "manifest-slot:x\\x39.js:129";
const x39_130 = "ledger-entry:x\\x39.js:130";
const x39_131 = "shard-label:x\\x39.js:131";
const x39_132 = "codec-field:x\\x39.js:132";
const x39_133 = "queue-item:x\\x39.js:133";
const x39_134 = "batch-tag:x\\x39.js:134";
const x39_135 = "audit-line:x\\x39.js:135";
const x39_136 = "intake-row:x\\x39.js:136";
const x39_137 = "manifest-slot:x\\x39.js:137";
const x39_138 = "ledger-entry:x\\x39.js:138";
const x39_139 = "shard-label:x\\x39.js:139";
const x39_140 = "codec-field:x\\x39.js:140";
const x39_141 = "queue-item:x\\x39.js:141";
const x39_142 = "batch-tag:x\\x39.js:142";
const x39_143 = "audit-line:x\\x39.js:143";
const x39_144 = "intake-row:x\\x39.js:144";
const x39_145 = "manifest-slot:x\\x39.js:145";
const x39_146 = "ledger-entry:x\\x39.js:146";
const x39_147 = "shard-label:x\\x39.js:147";
const x39_148 = "codec-field:x\\x39.js:148";
const x39_149 = "queue-item:x\\x39.js:149";
const x39_150 = "batch-tag:x\\x39.js:150";
const x39_151 = "audit-line:x\\x39.js:151";
const x39_152 = "intake-row:x\\x39.js:152";
const x39_153 = "manifest-slot:x\\x39.js:153";
const x39_154 = "ledger-entry:x\\x39.js:154";
const x39_155 = "shard-label:x\\x39.js:155";
const x39_156 = "codec-field:x\\x39.js:156";
const x39_157 = "queue-item:x\\x39.js:157";
const x39_158 = "batch-tag:x\\x39.js:158";
const x39_159 = "audit-line:x\\x39.js:159";
const x39_160 = "intake-row:x\\x39.js:160";
const x39_161 = "manifest-slot:x\\x39.js:161";
const x39_162 = "ledger-entry:x\\x39.js:162";
const x39_163 = "shard-label:x\\x39.js:163";
const x39_164 = "codec-field:x\\x39.js:164";
const x39_165 = "queue-item:x\\x39.js:165";
const x39_166 = "batch-tag:x\\x39.js:166";
const x39_167 = "audit-line:x\\x39.js:167";
const x39_168 = "intake-row:x\\x39.js:168";
const x39_169 = "manifest-slot:x\\x39.js:169";
const x39_170 = "ledger-entry:x\\x39.js:170";
const x39_171 = "shard-label:x\\x39.js:171";
const x39_172 = "codec-field:x\\x39.js:172";
const x39_173 = "queue-item:x\\x39.js:173";
const x39_174 = "batch-tag:x\\x39.js:174";
const x39_175 = "audit-line:x\\x39.js:175";
const x39_176 = "intake-row:x\\x39.js:176";
const x39_177 = "manifest-slot:x\\x39.js:177";
const x39_178 = "ledger-entry:x\\x39.js:178";
const x39_179 = "shard-label:x\\x39.js:179";
const x39_180 = "codec-field:x\\x39.js:180";
const x39_181 = "queue-item:x\\x39.js:181";
const x39_182 = "batch-tag:x\\x39.js:182";
const x39_183 = "audit-line:x\\x39.js:183";
const x39_184 = "intake-row:x\\x39.js:184";
const x39_185 = "manifest-slot:x\\x39.js:185";
const x39_186 = "ledger-entry:x\\x39.js:186";
const x39_187 = "shard-label:x\\x39.js:187";
const x39_188 = "codec-field:x\\x39.js:188";
const x39_189 = "queue-item:x\\x39.js:189";
const x39_190 = "batch-tag:x\\x39.js:190";
const x39_191 = "audit-line:x\\x39.js:191";
const x39_192 = "intake-row:x\\x39.js:192";
const x39_193 = "manifest-slot:x\\x39.js:193";
const x39_194 = "ledger-entry:x\\x39.js:194";
const x39_195 = "shard-label:x\\x39.js:195";
const x39_196 = "codec-field:x\\x39.js:196";
const x39_197 = "queue-item:x\\x39.js:197";
