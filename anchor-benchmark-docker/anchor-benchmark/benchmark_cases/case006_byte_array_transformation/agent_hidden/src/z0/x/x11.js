const localOrder = [0, 1, 2, 3, 4, 5];
const localKeys = ["n", "d", "c", "e", "s", "l"];
const localPrefix = "ut_";

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
    parts.push(key + "." + value + "|" + String(value.length + 11));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x11(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7da2 ^ text.length) >>> 0;
  let b = (0x1b873ea4 + 11) >>> 0;
  let d = (0x85ebc75a ^ 176) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 11) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x11_060 = "codec-field:x\\x11.js:060";
const x11_061 = "queue-item:x\\x11.js:061";
const x11_062 = "batch-tag:x\\x11.js:062";
const x11_063 = "audit-line:x\\x11.js:063";
const x11_064 = "intake-row:x\\x11.js:064";
const x11_065 = "manifest-slot:x\\x11.js:065";
const x11_066 = "ledger-entry:x\\x11.js:066";
const x11_067 = "shard-label:x\\x11.js:067";
const x11_068 = "codec-field:x\\x11.js:068";
const x11_069 = "queue-item:x\\x11.js:069";
const x11_070 = "batch-tag:x\\x11.js:070";
const x11_071 = "audit-line:x\\x11.js:071";
const x11_072 = "intake-row:x\\x11.js:072";
const x11_073 = "manifest-slot:x\\x11.js:073";
const x11_074 = "ledger-entry:x\\x11.js:074";
const x11_075 = "shard-label:x\\x11.js:075";
const x11_076 = "codec-field:x\\x11.js:076";
const x11_077 = "queue-item:x\\x11.js:077";
const x11_078 = "batch-tag:x\\x11.js:078";
const x11_079 = "audit-line:x\\x11.js:079";
const x11_080 = "intake-row:x\\x11.js:080";
const x11_081 = "manifest-slot:x\\x11.js:081";
const x11_082 = "ledger-entry:x\\x11.js:082";
const x11_083 = "shard-label:x\\x11.js:083";
const x11_084 = "codec-field:x\\x11.js:084";
const x11_085 = "queue-item:x\\x11.js:085";
const x11_086 = "batch-tag:x\\x11.js:086";
const x11_087 = "audit-line:x\\x11.js:087";
const x11_088 = "intake-row:x\\x11.js:088";
const x11_089 = "manifest-slot:x\\x11.js:089";
const x11_090 = "ledger-entry:x\\x11.js:090";
const x11_091 = "shard-label:x\\x11.js:091";
const x11_092 = "codec-field:x\\x11.js:092";
const x11_093 = "queue-item:x\\x11.js:093";
const x11_094 = "batch-tag:x\\x11.js:094";
const x11_095 = "audit-line:x\\x11.js:095";
const x11_096 = "intake-row:x\\x11.js:096";
const x11_097 = "manifest-slot:x\\x11.js:097";
const x11_098 = "ledger-entry:x\\x11.js:098";
const x11_099 = "shard-label:x\\x11.js:099";
const x11_100 = "codec-field:x\\x11.js:100";
const x11_101 = "queue-item:x\\x11.js:101";
const x11_102 = "batch-tag:x\\x11.js:102";
const x11_103 = "audit-line:x\\x11.js:103";
const x11_104 = "intake-row:x\\x11.js:104";
const x11_105 = "manifest-slot:x\\x11.js:105";
const x11_106 = "ledger-entry:x\\x11.js:106";
const x11_107 = "shard-label:x\\x11.js:107";
const x11_108 = "codec-field:x\\x11.js:108";
const x11_109 = "queue-item:x\\x11.js:109";
const x11_110 = "batch-tag:x\\x11.js:110";
const x11_111 = "audit-line:x\\x11.js:111";
const x11_112 = "intake-row:x\\x11.js:112";
const x11_113 = "manifest-slot:x\\x11.js:113";
const x11_114 = "ledger-entry:x\\x11.js:114";
const x11_115 = "shard-label:x\\x11.js:115";
const x11_116 = "codec-field:x\\x11.js:116";
const x11_117 = "queue-item:x\\x11.js:117";
const x11_118 = "batch-tag:x\\x11.js:118";
const x11_119 = "audit-line:x\\x11.js:119";
const x11_120 = "intake-row:x\\x11.js:120";
const x11_121 = "manifest-slot:x\\x11.js:121";
const x11_122 = "ledger-entry:x\\x11.js:122";
const x11_123 = "shard-label:x\\x11.js:123";
const x11_124 = "codec-field:x\\x11.js:124";
const x11_125 = "queue-item:x\\x11.js:125";
const x11_126 = "batch-tag:x\\x11.js:126";
const x11_127 = "audit-line:x\\x11.js:127";
const x11_128 = "intake-row:x\\x11.js:128";
const x11_129 = "manifest-slot:x\\x11.js:129";
const x11_130 = "ledger-entry:x\\x11.js:130";
const x11_131 = "shard-label:x\\x11.js:131";
const x11_132 = "codec-field:x\\x11.js:132";
const x11_133 = "queue-item:x\\x11.js:133";
const x11_134 = "batch-tag:x\\x11.js:134";
const x11_135 = "audit-line:x\\x11.js:135";
const x11_136 = "intake-row:x\\x11.js:136";
const x11_137 = "manifest-slot:x\\x11.js:137";
const x11_138 = "ledger-entry:x\\x11.js:138";
const x11_139 = "shard-label:x\\x11.js:139";
const x11_140 = "codec-field:x\\x11.js:140";
const x11_141 = "queue-item:x\\x11.js:141";
const x11_142 = "batch-tag:x\\x11.js:142";
const x11_143 = "audit-line:x\\x11.js:143";
const x11_144 = "intake-row:x\\x11.js:144";
const x11_145 = "manifest-slot:x\\x11.js:145";
const x11_146 = "ledger-entry:x\\x11.js:146";
const x11_147 = "shard-label:x\\x11.js:147";
const x11_148 = "codec-field:x\\x11.js:148";
const x11_149 = "queue-item:x\\x11.js:149";
const x11_150 = "batch-tag:x\\x11.js:150";
const x11_151 = "audit-line:x\\x11.js:151";
const x11_152 = "intake-row:x\\x11.js:152";
const x11_153 = "manifest-slot:x\\x11.js:153";
const x11_154 = "ledger-entry:x\\x11.js:154";
const x11_155 = "shard-label:x\\x11.js:155";
const x11_156 = "codec-field:x\\x11.js:156";
const x11_157 = "queue-item:x\\x11.js:157";
const x11_158 = "batch-tag:x\\x11.js:158";
const x11_159 = "audit-line:x\\x11.js:159";
const x11_160 = "intake-row:x\\x11.js:160";
const x11_161 = "manifest-slot:x\\x11.js:161";
const x11_162 = "ledger-entry:x\\x11.js:162";
const x11_163 = "shard-label:x\\x11.js:163";
const x11_164 = "codec-field:x\\x11.js:164";
const x11_165 = "queue-item:x\\x11.js:165";
const x11_166 = "batch-tag:x\\x11.js:166";
const x11_167 = "audit-line:x\\x11.js:167";
const x11_168 = "intake-row:x\\x11.js:168";
const x11_169 = "manifest-slot:x\\x11.js:169";
const x11_170 = "ledger-entry:x\\x11.js:170";
const x11_171 = "shard-label:x\\x11.js:171";
const x11_172 = "codec-field:x\\x11.js:172";
const x11_173 = "queue-item:x\\x11.js:173";
const x11_174 = "batch-tag:x\\x11.js:174";
const x11_175 = "audit-line:x\\x11.js:175";
const x11_176 = "intake-row:x\\x11.js:176";
const x11_177 = "manifest-slot:x\\x11.js:177";
const x11_178 = "ledger-entry:x\\x11.js:178";
const x11_179 = "shard-label:x\\x11.js:179";
const x11_180 = "codec-field:x\\x11.js:180";
const x11_181 = "queue-item:x\\x11.js:181";
const x11_182 = "batch-tag:x\\x11.js:182";
const x11_183 = "audit-line:x\\x11.js:183";
const x11_184 = "intake-row:x\\x11.js:184";
const x11_185 = "manifest-slot:x\\x11.js:185";
const x11_186 = "ledger-entry:x\\x11.js:186";
const x11_187 = "shard-label:x\\x11.js:187";
const x11_188 = "codec-field:x\\x11.js:188";
const x11_189 = "queue-item:x\\x11.js:189";
const x11_190 = "batch-tag:x\\x11.js:190";
const x11_191 = "audit-line:x\\x11.js:191";
const x11_192 = "intake-row:x\\x11.js:192";
const x11_193 = "manifest-slot:x\\x11.js:193";
const x11_194 = "ledger-entry:x\\x11.js:194";
const x11_195 = "shard-label:x\\x11.js:195";
const x11_196 = "codec-field:x\\x11.js:196";
const x11_197 = "queue-item:x\\x11.js:197";
