const localOrder = [5, 4, 3, 2, 1, 0];
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
    parts.push(key + "." + value + "~" + String(value.length + 27));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x27(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7352 ^ text.length) >>> 0;
  let b = (0x1b874bd4 + 27) >>> 0;
  let d = (0x85ebea0a ^ 432) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 27) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x27_060 = "codec-field:x\\x27.js:060";
const x27_061 = "queue-item:x\\x27.js:061";
const x27_062 = "batch-tag:x\\x27.js:062";
const x27_063 = "audit-line:x\\x27.js:063";
const x27_064 = "intake-row:x\\x27.js:064";
const x27_065 = "manifest-slot:x\\x27.js:065";
const x27_066 = "ledger-entry:x\\x27.js:066";
const x27_067 = "shard-label:x\\x27.js:067";
const x27_068 = "codec-field:x\\x27.js:068";
const x27_069 = "queue-item:x\\x27.js:069";
const x27_070 = "batch-tag:x\\x27.js:070";
const x27_071 = "audit-line:x\\x27.js:071";
const x27_072 = "intake-row:x\\x27.js:072";
const x27_073 = "manifest-slot:x\\x27.js:073";
const x27_074 = "ledger-entry:x\\x27.js:074";
const x27_075 = "shard-label:x\\x27.js:075";
const x27_076 = "codec-field:x\\x27.js:076";
const x27_077 = "queue-item:x\\x27.js:077";
const x27_078 = "batch-tag:x\\x27.js:078";
const x27_079 = "audit-line:x\\x27.js:079";
const x27_080 = "intake-row:x\\x27.js:080";
const x27_081 = "manifest-slot:x\\x27.js:081";
const x27_082 = "ledger-entry:x\\x27.js:082";
const x27_083 = "shard-label:x\\x27.js:083";
const x27_084 = "codec-field:x\\x27.js:084";
const x27_085 = "queue-item:x\\x27.js:085";
const x27_086 = "batch-tag:x\\x27.js:086";
const x27_087 = "audit-line:x\\x27.js:087";
const x27_088 = "intake-row:x\\x27.js:088";
const x27_089 = "manifest-slot:x\\x27.js:089";
const x27_090 = "ledger-entry:x\\x27.js:090";
const x27_091 = "shard-label:x\\x27.js:091";
const x27_092 = "codec-field:x\\x27.js:092";
const x27_093 = "queue-item:x\\x27.js:093";
const x27_094 = "batch-tag:x\\x27.js:094";
const x27_095 = "audit-line:x\\x27.js:095";
const x27_096 = "intake-row:x\\x27.js:096";
const x27_097 = "manifest-slot:x\\x27.js:097";
const x27_098 = "ledger-entry:x\\x27.js:098";
const x27_099 = "shard-label:x\\x27.js:099";
const x27_100 = "codec-field:x\\x27.js:100";
const x27_101 = "queue-item:x\\x27.js:101";
const x27_102 = "batch-tag:x\\x27.js:102";
const x27_103 = "audit-line:x\\x27.js:103";
const x27_104 = "intake-row:x\\x27.js:104";
const x27_105 = "manifest-slot:x\\x27.js:105";
const x27_106 = "ledger-entry:x\\x27.js:106";
const x27_107 = "shard-label:x\\x27.js:107";
const x27_108 = "codec-field:x\\x27.js:108";
const x27_109 = "queue-item:x\\x27.js:109";
const x27_110 = "batch-tag:x\\x27.js:110";
const x27_111 = "audit-line:x\\x27.js:111";
const x27_112 = "intake-row:x\\x27.js:112";
const x27_113 = "manifest-slot:x\\x27.js:113";
const x27_114 = "ledger-entry:x\\x27.js:114";
const x27_115 = "shard-label:x\\x27.js:115";
const x27_116 = "codec-field:x\\x27.js:116";
const x27_117 = "queue-item:x\\x27.js:117";
const x27_118 = "batch-tag:x\\x27.js:118";
const x27_119 = "audit-line:x\\x27.js:119";
const x27_120 = "intake-row:x\\x27.js:120";
const x27_121 = "manifest-slot:x\\x27.js:121";
const x27_122 = "ledger-entry:x\\x27.js:122";
const x27_123 = "shard-label:x\\x27.js:123";
const x27_124 = "codec-field:x\\x27.js:124";
const x27_125 = "queue-item:x\\x27.js:125";
const x27_126 = "batch-tag:x\\x27.js:126";
const x27_127 = "audit-line:x\\x27.js:127";
const x27_128 = "intake-row:x\\x27.js:128";
const x27_129 = "manifest-slot:x\\x27.js:129";
const x27_130 = "ledger-entry:x\\x27.js:130";
const x27_131 = "shard-label:x\\x27.js:131";
const x27_132 = "codec-field:x\\x27.js:132";
const x27_133 = "queue-item:x\\x27.js:133";
const x27_134 = "batch-tag:x\\x27.js:134";
const x27_135 = "audit-line:x\\x27.js:135";
const x27_136 = "intake-row:x\\x27.js:136";
const x27_137 = "manifest-slot:x\\x27.js:137";
const x27_138 = "ledger-entry:x\\x27.js:138";
const x27_139 = "shard-label:x\\x27.js:139";
const x27_140 = "codec-field:x\\x27.js:140";
const x27_141 = "queue-item:x\\x27.js:141";
const x27_142 = "batch-tag:x\\x27.js:142";
const x27_143 = "audit-line:x\\x27.js:143";
const x27_144 = "intake-row:x\\x27.js:144";
const x27_145 = "manifest-slot:x\\x27.js:145";
const x27_146 = "ledger-entry:x\\x27.js:146";
const x27_147 = "shard-label:x\\x27.js:147";
const x27_148 = "codec-field:x\\x27.js:148";
const x27_149 = "queue-item:x\\x27.js:149";
const x27_150 = "batch-tag:x\\x27.js:150";
const x27_151 = "audit-line:x\\x27.js:151";
const x27_152 = "intake-row:x\\x27.js:152";
const x27_153 = "manifest-slot:x\\x27.js:153";
const x27_154 = "ledger-entry:x\\x27.js:154";
const x27_155 = "shard-label:x\\x27.js:155";
const x27_156 = "codec-field:x\\x27.js:156";
const x27_157 = "queue-item:x\\x27.js:157";
const x27_158 = "batch-tag:x\\x27.js:158";
const x27_159 = "audit-line:x\\x27.js:159";
const x27_160 = "intake-row:x\\x27.js:160";
const x27_161 = "manifest-slot:x\\x27.js:161";
const x27_162 = "ledger-entry:x\\x27.js:162";
const x27_163 = "shard-label:x\\x27.js:163";
const x27_164 = "codec-field:x\\x27.js:164";
const x27_165 = "queue-item:x\\x27.js:165";
const x27_166 = "batch-tag:x\\x27.js:166";
const x27_167 = "audit-line:x\\x27.js:167";
const x27_168 = "intake-row:x\\x27.js:168";
const x27_169 = "manifest-slot:x\\x27.js:169";
const x27_170 = "ledger-entry:x\\x27.js:170";
const x27_171 = "shard-label:x\\x27.js:171";
const x27_172 = "codec-field:x\\x27.js:172";
const x27_173 = "queue-item:x\\x27.js:173";
const x27_174 = "batch-tag:x\\x27.js:174";
const x27_175 = "audit-line:x\\x27.js:175";
const x27_176 = "intake-row:x\\x27.js:176";
const x27_177 = "manifest-slot:x\\x27.js:177";
const x27_178 = "ledger-entry:x\\x27.js:178";
const x27_179 = "shard-label:x\\x27.js:179";
const x27_180 = "codec-field:x\\x27.js:180";
const x27_181 = "queue-item:x\\x27.js:181";
const x27_182 = "batch-tag:x\\x27.js:182";
const x27_183 = "audit-line:x\\x27.js:183";
const x27_184 = "intake-row:x\\x27.js:184";
const x27_185 = "manifest-slot:x\\x27.js:185";
const x27_186 = "ledger-entry:x\\x27.js:186";
const x27_187 = "shard-label:x\\x27.js:187";
const x27_188 = "codec-field:x\\x27.js:188";
const x27_189 = "queue-item:x\\x27.js:189";
const x27_190 = "batch-tag:x\\x27.js:190";
const x27_191 = "audit-line:x\\x27.js:191";
const x27_192 = "intake-row:x\\x27.js:192";
const x27_193 = "manifest-slot:x\\x27.js:193";
const x27_194 = "ledger-entry:x\\x27.js:194";
const x27_195 = "shard-label:x\\x27.js:195";
const x27_196 = "codec-field:x\\x27.js:196";
const x27_197 = "queue-item:x\\x27.js:197";
