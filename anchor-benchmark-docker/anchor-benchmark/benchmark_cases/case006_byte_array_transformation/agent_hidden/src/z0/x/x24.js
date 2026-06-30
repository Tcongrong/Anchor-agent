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
    parts.push(key + ":" + value + "~" + String(value.length + 24));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("|");
}

export function x24(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b708d ^ text.length) >>> 0;
  let b = (0x1b87495b + 24) >>> 0;
  let d = (0x85ebd6a3 ^ 384) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 24) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x24_060 = "codec-field:x\\x24.js:060";
const x24_061 = "queue-item:x\\x24.js:061";
const x24_062 = "batch-tag:x\\x24.js:062";
const x24_063 = "audit-line:x\\x24.js:063";
const x24_064 = "intake-row:x\\x24.js:064";
const x24_065 = "manifest-slot:x\\x24.js:065";
const x24_066 = "ledger-entry:x\\x24.js:066";
const x24_067 = "shard-label:x\\x24.js:067";
const x24_068 = "codec-field:x\\x24.js:068";
const x24_069 = "queue-item:x\\x24.js:069";
const x24_070 = "batch-tag:x\\x24.js:070";
const x24_071 = "audit-line:x\\x24.js:071";
const x24_072 = "intake-row:x\\x24.js:072";
const x24_073 = "manifest-slot:x\\x24.js:073";
const x24_074 = "ledger-entry:x\\x24.js:074";
const x24_075 = "shard-label:x\\x24.js:075";
const x24_076 = "codec-field:x\\x24.js:076";
const x24_077 = "queue-item:x\\x24.js:077";
const x24_078 = "batch-tag:x\\x24.js:078";
const x24_079 = "audit-line:x\\x24.js:079";
const x24_080 = "intake-row:x\\x24.js:080";
const x24_081 = "manifest-slot:x\\x24.js:081";
const x24_082 = "ledger-entry:x\\x24.js:082";
const x24_083 = "shard-label:x\\x24.js:083";
const x24_084 = "codec-field:x\\x24.js:084";
const x24_085 = "queue-item:x\\x24.js:085";
const x24_086 = "batch-tag:x\\x24.js:086";
const x24_087 = "audit-line:x\\x24.js:087";
const x24_088 = "intake-row:x\\x24.js:088";
const x24_089 = "manifest-slot:x\\x24.js:089";
const x24_090 = "ledger-entry:x\\x24.js:090";
const x24_091 = "shard-label:x\\x24.js:091";
const x24_092 = "codec-field:x\\x24.js:092";
const x24_093 = "queue-item:x\\x24.js:093";
const x24_094 = "batch-tag:x\\x24.js:094";
const x24_095 = "audit-line:x\\x24.js:095";
const x24_096 = "intake-row:x\\x24.js:096";
const x24_097 = "manifest-slot:x\\x24.js:097";
const x24_098 = "ledger-entry:x\\x24.js:098";
const x24_099 = "shard-label:x\\x24.js:099";
const x24_100 = "codec-field:x\\x24.js:100";
const x24_101 = "queue-item:x\\x24.js:101";
const x24_102 = "batch-tag:x\\x24.js:102";
const x24_103 = "audit-line:x\\x24.js:103";
const x24_104 = "intake-row:x\\x24.js:104";
const x24_105 = "manifest-slot:x\\x24.js:105";
const x24_106 = "ledger-entry:x\\x24.js:106";
const x24_107 = "shard-label:x\\x24.js:107";
const x24_108 = "codec-field:x\\x24.js:108";
const x24_109 = "queue-item:x\\x24.js:109";
const x24_110 = "batch-tag:x\\x24.js:110";
const x24_111 = "audit-line:x\\x24.js:111";
const x24_112 = "intake-row:x\\x24.js:112";
const x24_113 = "manifest-slot:x\\x24.js:113";
const x24_114 = "ledger-entry:x\\x24.js:114";
const x24_115 = "shard-label:x\\x24.js:115";
const x24_116 = "codec-field:x\\x24.js:116";
const x24_117 = "queue-item:x\\x24.js:117";
const x24_118 = "batch-tag:x\\x24.js:118";
const x24_119 = "audit-line:x\\x24.js:119";
const x24_120 = "intake-row:x\\x24.js:120";
const x24_121 = "manifest-slot:x\\x24.js:121";
const x24_122 = "ledger-entry:x\\x24.js:122";
const x24_123 = "shard-label:x\\x24.js:123";
const x24_124 = "codec-field:x\\x24.js:124";
const x24_125 = "queue-item:x\\x24.js:125";
const x24_126 = "batch-tag:x\\x24.js:126";
const x24_127 = "audit-line:x\\x24.js:127";
const x24_128 = "intake-row:x\\x24.js:128";
const x24_129 = "manifest-slot:x\\x24.js:129";
const x24_130 = "ledger-entry:x\\x24.js:130";
const x24_131 = "shard-label:x\\x24.js:131";
const x24_132 = "codec-field:x\\x24.js:132";
const x24_133 = "queue-item:x\\x24.js:133";
const x24_134 = "batch-tag:x\\x24.js:134";
const x24_135 = "audit-line:x\\x24.js:135";
const x24_136 = "intake-row:x\\x24.js:136";
const x24_137 = "manifest-slot:x\\x24.js:137";
const x24_138 = "ledger-entry:x\\x24.js:138";
const x24_139 = "shard-label:x\\x24.js:139";
const x24_140 = "codec-field:x\\x24.js:140";
const x24_141 = "queue-item:x\\x24.js:141";
const x24_142 = "batch-tag:x\\x24.js:142";
const x24_143 = "audit-line:x\\x24.js:143";
const x24_144 = "intake-row:x\\x24.js:144";
const x24_145 = "manifest-slot:x\\x24.js:145";
const x24_146 = "ledger-entry:x\\x24.js:146";
const x24_147 = "shard-label:x\\x24.js:147";
const x24_148 = "codec-field:x\\x24.js:148";
const x24_149 = "queue-item:x\\x24.js:149";
const x24_150 = "batch-tag:x\\x24.js:150";
const x24_151 = "audit-line:x\\x24.js:151";
const x24_152 = "intake-row:x\\x24.js:152";
const x24_153 = "manifest-slot:x\\x24.js:153";
const x24_154 = "ledger-entry:x\\x24.js:154";
const x24_155 = "shard-label:x\\x24.js:155";
const x24_156 = "codec-field:x\\x24.js:156";
const x24_157 = "queue-item:x\\x24.js:157";
const x24_158 = "batch-tag:x\\x24.js:158";
const x24_159 = "audit-line:x\\x24.js:159";
const x24_160 = "intake-row:x\\x24.js:160";
const x24_161 = "manifest-slot:x\\x24.js:161";
const x24_162 = "ledger-entry:x\\x24.js:162";
const x24_163 = "shard-label:x\\x24.js:163";
const x24_164 = "codec-field:x\\x24.js:164";
const x24_165 = "queue-item:x\\x24.js:165";
const x24_166 = "batch-tag:x\\x24.js:166";
const x24_167 = "audit-line:x\\x24.js:167";
const x24_168 = "intake-row:x\\x24.js:168";
const x24_169 = "manifest-slot:x\\x24.js:169";
const x24_170 = "ledger-entry:x\\x24.js:170";
const x24_171 = "shard-label:x\\x24.js:171";
const x24_172 = "codec-field:x\\x24.js:172";
const x24_173 = "queue-item:x\\x24.js:173";
const x24_174 = "batch-tag:x\\x24.js:174";
const x24_175 = "audit-line:x\\x24.js:175";
const x24_176 = "intake-row:x\\x24.js:176";
const x24_177 = "manifest-slot:x\\x24.js:177";
const x24_178 = "ledger-entry:x\\x24.js:178";
const x24_179 = "shard-label:x\\x24.js:179";
const x24_180 = "codec-field:x\\x24.js:180";
const x24_181 = "queue-item:x\\x24.js:181";
const x24_182 = "batch-tag:x\\x24.js:182";
const x24_183 = "audit-line:x\\x24.js:183";
const x24_184 = "intake-row:x\\x24.js:184";
const x24_185 = "manifest-slot:x\\x24.js:185";
const x24_186 = "ledger-entry:x\\x24.js:186";
const x24_187 = "shard-label:x\\x24.js:187";
const x24_188 = "codec-field:x\\x24.js:188";
const x24_189 = "queue-item:x\\x24.js:189";
const x24_190 = "batch-tag:x\\x24.js:190";
const x24_191 = "audit-line:x\\x24.js:191";
const x24_192 = "intake-row:x\\x24.js:192";
const x24_193 = "manifest-slot:x\\x24.js:193";
const x24_194 = "ledger-entry:x\\x24.js:194";
const x24_195 = "shard-label:x\\x24.js:195";
const x24_196 = "codec-field:x\\x24.js:196";
const x24_197 = "queue-item:x\\x24.js:197";
