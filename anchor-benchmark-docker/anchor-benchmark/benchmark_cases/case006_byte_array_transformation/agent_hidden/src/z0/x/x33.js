const localOrder = [0, 1, 2, 3, 4, 5];
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
    parts.push(key + "." + value + "~" + String(value.length + 33));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x33(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b74f0 ^ text.length) >>> 0;
  let b = (0x1b8750c6 + 33) >>> 0;
  let d = (0x85ebedf8 ^ 528) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 33) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x33_060 = "codec-field:x\\x33.js:060";
const x33_061 = "queue-item:x\\x33.js:061";
const x33_062 = "batch-tag:x\\x33.js:062";
const x33_063 = "audit-line:x\\x33.js:063";
const x33_064 = "intake-row:x\\x33.js:064";
const x33_065 = "manifest-slot:x\\x33.js:065";
const x33_066 = "ledger-entry:x\\x33.js:066";
const x33_067 = "shard-label:x\\x33.js:067";
const x33_068 = "codec-field:x\\x33.js:068";
const x33_069 = "queue-item:x\\x33.js:069";
const x33_070 = "batch-tag:x\\x33.js:070";
const x33_071 = "audit-line:x\\x33.js:071";
const x33_072 = "intake-row:x\\x33.js:072";
const x33_073 = "manifest-slot:x\\x33.js:073";
const x33_074 = "ledger-entry:x\\x33.js:074";
const x33_075 = "shard-label:x\\x33.js:075";
const x33_076 = "codec-field:x\\x33.js:076";
const x33_077 = "queue-item:x\\x33.js:077";
const x33_078 = "batch-tag:x\\x33.js:078";
const x33_079 = "audit-line:x\\x33.js:079";
const x33_080 = "intake-row:x\\x33.js:080";
const x33_081 = "manifest-slot:x\\x33.js:081";
const x33_082 = "ledger-entry:x\\x33.js:082";
const x33_083 = "shard-label:x\\x33.js:083";
const x33_084 = "codec-field:x\\x33.js:084";
const x33_085 = "queue-item:x\\x33.js:085";
const x33_086 = "batch-tag:x\\x33.js:086";
const x33_087 = "audit-line:x\\x33.js:087";
const x33_088 = "intake-row:x\\x33.js:088";
const x33_089 = "manifest-slot:x\\x33.js:089";
const x33_090 = "ledger-entry:x\\x33.js:090";
const x33_091 = "shard-label:x\\x33.js:091";
const x33_092 = "codec-field:x\\x33.js:092";
const x33_093 = "queue-item:x\\x33.js:093";
const x33_094 = "batch-tag:x\\x33.js:094";
const x33_095 = "audit-line:x\\x33.js:095";
const x33_096 = "intake-row:x\\x33.js:096";
const x33_097 = "manifest-slot:x\\x33.js:097";
const x33_098 = "ledger-entry:x\\x33.js:098";
const x33_099 = "shard-label:x\\x33.js:099";
const x33_100 = "codec-field:x\\x33.js:100";
const x33_101 = "queue-item:x\\x33.js:101";
const x33_102 = "batch-tag:x\\x33.js:102";
const x33_103 = "audit-line:x\\x33.js:103";
const x33_104 = "intake-row:x\\x33.js:104";
const x33_105 = "manifest-slot:x\\x33.js:105";
const x33_106 = "ledger-entry:x\\x33.js:106";
const x33_107 = "shard-label:x\\x33.js:107";
const x33_108 = "codec-field:x\\x33.js:108";
const x33_109 = "queue-item:x\\x33.js:109";
const x33_110 = "batch-tag:x\\x33.js:110";
const x33_111 = "audit-line:x\\x33.js:111";
const x33_112 = "intake-row:x\\x33.js:112";
const x33_113 = "manifest-slot:x\\x33.js:113";
const x33_114 = "ledger-entry:x\\x33.js:114";
const x33_115 = "shard-label:x\\x33.js:115";
const x33_116 = "codec-field:x\\x33.js:116";
const x33_117 = "queue-item:x\\x33.js:117";
const x33_118 = "batch-tag:x\\x33.js:118";
const x33_119 = "audit-line:x\\x33.js:119";
const x33_120 = "intake-row:x\\x33.js:120";
const x33_121 = "manifest-slot:x\\x33.js:121";
const x33_122 = "ledger-entry:x\\x33.js:122";
const x33_123 = "shard-label:x\\x33.js:123";
const x33_124 = "codec-field:x\\x33.js:124";
const x33_125 = "queue-item:x\\x33.js:125";
const x33_126 = "batch-tag:x\\x33.js:126";
const x33_127 = "audit-line:x\\x33.js:127";
const x33_128 = "intake-row:x\\x33.js:128";
const x33_129 = "manifest-slot:x\\x33.js:129";
const x33_130 = "ledger-entry:x\\x33.js:130";
const x33_131 = "shard-label:x\\x33.js:131";
const x33_132 = "codec-field:x\\x33.js:132";
const x33_133 = "queue-item:x\\x33.js:133";
const x33_134 = "batch-tag:x\\x33.js:134";
const x33_135 = "audit-line:x\\x33.js:135";
const x33_136 = "intake-row:x\\x33.js:136";
const x33_137 = "manifest-slot:x\\x33.js:137";
const x33_138 = "ledger-entry:x\\x33.js:138";
const x33_139 = "shard-label:x\\x33.js:139";
const x33_140 = "codec-field:x\\x33.js:140";
const x33_141 = "queue-item:x\\x33.js:141";
const x33_142 = "batch-tag:x\\x33.js:142";
const x33_143 = "audit-line:x\\x33.js:143";
const x33_144 = "intake-row:x\\x33.js:144";
const x33_145 = "manifest-slot:x\\x33.js:145";
const x33_146 = "ledger-entry:x\\x33.js:146";
const x33_147 = "shard-label:x\\x33.js:147";
const x33_148 = "codec-field:x\\x33.js:148";
const x33_149 = "queue-item:x\\x33.js:149";
const x33_150 = "batch-tag:x\\x33.js:150";
const x33_151 = "audit-line:x\\x33.js:151";
const x33_152 = "intake-row:x\\x33.js:152";
const x33_153 = "manifest-slot:x\\x33.js:153";
const x33_154 = "ledger-entry:x\\x33.js:154";
const x33_155 = "shard-label:x\\x33.js:155";
const x33_156 = "codec-field:x\\x33.js:156";
const x33_157 = "queue-item:x\\x33.js:157";
const x33_158 = "batch-tag:x\\x33.js:158";
const x33_159 = "audit-line:x\\x33.js:159";
const x33_160 = "intake-row:x\\x33.js:160";
const x33_161 = "manifest-slot:x\\x33.js:161";
const x33_162 = "ledger-entry:x\\x33.js:162";
const x33_163 = "shard-label:x\\x33.js:163";
const x33_164 = "codec-field:x\\x33.js:164";
const x33_165 = "queue-item:x\\x33.js:165";
const x33_166 = "batch-tag:x\\x33.js:166";
const x33_167 = "audit-line:x\\x33.js:167";
const x33_168 = "intake-row:x\\x33.js:168";
const x33_169 = "manifest-slot:x\\x33.js:169";
const x33_170 = "ledger-entry:x\\x33.js:170";
const x33_171 = "shard-label:x\\x33.js:171";
const x33_172 = "codec-field:x\\x33.js:172";
const x33_173 = "queue-item:x\\x33.js:173";
const x33_174 = "batch-tag:x\\x33.js:174";
const x33_175 = "audit-line:x\\x33.js:175";
const x33_176 = "intake-row:x\\x33.js:176";
const x33_177 = "manifest-slot:x\\x33.js:177";
const x33_178 = "ledger-entry:x\\x33.js:178";
const x33_179 = "shard-label:x\\x33.js:179";
const x33_180 = "codec-field:x\\x33.js:180";
const x33_181 = "queue-item:x\\x33.js:181";
const x33_182 = "batch-tag:x\\x33.js:182";
const x33_183 = "audit-line:x\\x33.js:183";
const x33_184 = "intake-row:x\\x33.js:184";
const x33_185 = "manifest-slot:x\\x33.js:185";
const x33_186 = "ledger-entry:x\\x33.js:186";
const x33_187 = "shard-label:x\\x33.js:187";
const x33_188 = "codec-field:x\\x33.js:188";
const x33_189 = "queue-item:x\\x33.js:189";
const x33_190 = "batch-tag:x\\x33.js:190";
const x33_191 = "audit-line:x\\x33.js:191";
const x33_192 = "intake-row:x\\x33.js:192";
const x33_193 = "manifest-slot:x\\x33.js:193";
const x33_194 = "ledger-entry:x\\x33.js:194";
const x33_195 = "shard-label:x\\x33.js:195";
const x33_196 = "codec-field:x\\x33.js:196";
const x33_197 = "queue-item:x\\x33.js:197";
