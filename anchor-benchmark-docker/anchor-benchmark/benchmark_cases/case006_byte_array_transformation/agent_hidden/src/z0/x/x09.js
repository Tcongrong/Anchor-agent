const localOrder = [5, 4, 0, 1, 2, 3];
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
    parts.push(key + "." + value + "~" + String(value.length + 9));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x09(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7a78 ^ text.length) >>> 0;
  let b = (0x1b873cfe + 9) >>> 0;
  let d = (0x85ebc0a0 ^ 144) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 9) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x09_060 = "codec-field:x\\x09.js:060";
const x09_061 = "queue-item:x\\x09.js:061";
const x09_062 = "batch-tag:x\\x09.js:062";
const x09_063 = "audit-line:x\\x09.js:063";
const x09_064 = "intake-row:x\\x09.js:064";
const x09_065 = "manifest-slot:x\\x09.js:065";
const x09_066 = "ledger-entry:x\\x09.js:066";
const x09_067 = "shard-label:x\\x09.js:067";
const x09_068 = "codec-field:x\\x09.js:068";
const x09_069 = "queue-item:x\\x09.js:069";
const x09_070 = "batch-tag:x\\x09.js:070";
const x09_071 = "audit-line:x\\x09.js:071";
const x09_072 = "intake-row:x\\x09.js:072";
const x09_073 = "manifest-slot:x\\x09.js:073";
const x09_074 = "ledger-entry:x\\x09.js:074";
const x09_075 = "shard-label:x\\x09.js:075";
const x09_076 = "codec-field:x\\x09.js:076";
const x09_077 = "queue-item:x\\x09.js:077";
const x09_078 = "batch-tag:x\\x09.js:078";
const x09_079 = "audit-line:x\\x09.js:079";
const x09_080 = "intake-row:x\\x09.js:080";
const x09_081 = "manifest-slot:x\\x09.js:081";
const x09_082 = "ledger-entry:x\\x09.js:082";
const x09_083 = "shard-label:x\\x09.js:083";
const x09_084 = "codec-field:x\\x09.js:084";
const x09_085 = "queue-item:x\\x09.js:085";
const x09_086 = "batch-tag:x\\x09.js:086";
const x09_087 = "audit-line:x\\x09.js:087";
const x09_088 = "intake-row:x\\x09.js:088";
const x09_089 = "manifest-slot:x\\x09.js:089";
const x09_090 = "ledger-entry:x\\x09.js:090";
const x09_091 = "shard-label:x\\x09.js:091";
const x09_092 = "codec-field:x\\x09.js:092";
const x09_093 = "queue-item:x\\x09.js:093";
const x09_094 = "batch-tag:x\\x09.js:094";
const x09_095 = "audit-line:x\\x09.js:095";
const x09_096 = "intake-row:x\\x09.js:096";
const x09_097 = "manifest-slot:x\\x09.js:097";
const x09_098 = "ledger-entry:x\\x09.js:098";
const x09_099 = "shard-label:x\\x09.js:099";
const x09_100 = "codec-field:x\\x09.js:100";
const x09_101 = "queue-item:x\\x09.js:101";
const x09_102 = "batch-tag:x\\x09.js:102";
const x09_103 = "audit-line:x\\x09.js:103";
const x09_104 = "intake-row:x\\x09.js:104";
const x09_105 = "manifest-slot:x\\x09.js:105";
const x09_106 = "ledger-entry:x\\x09.js:106";
const x09_107 = "shard-label:x\\x09.js:107";
const x09_108 = "codec-field:x\\x09.js:108";
const x09_109 = "queue-item:x\\x09.js:109";
const x09_110 = "batch-tag:x\\x09.js:110";
const x09_111 = "audit-line:x\\x09.js:111";
const x09_112 = "intake-row:x\\x09.js:112";
const x09_113 = "manifest-slot:x\\x09.js:113";
const x09_114 = "ledger-entry:x\\x09.js:114";
const x09_115 = "shard-label:x\\x09.js:115";
const x09_116 = "codec-field:x\\x09.js:116";
const x09_117 = "queue-item:x\\x09.js:117";
const x09_118 = "batch-tag:x\\x09.js:118";
const x09_119 = "audit-line:x\\x09.js:119";
const x09_120 = "intake-row:x\\x09.js:120";
const x09_121 = "manifest-slot:x\\x09.js:121";
const x09_122 = "ledger-entry:x\\x09.js:122";
const x09_123 = "shard-label:x\\x09.js:123";
const x09_124 = "codec-field:x\\x09.js:124";
const x09_125 = "queue-item:x\\x09.js:125";
const x09_126 = "batch-tag:x\\x09.js:126";
const x09_127 = "audit-line:x\\x09.js:127";
const x09_128 = "intake-row:x\\x09.js:128";
const x09_129 = "manifest-slot:x\\x09.js:129";
const x09_130 = "ledger-entry:x\\x09.js:130";
const x09_131 = "shard-label:x\\x09.js:131";
const x09_132 = "codec-field:x\\x09.js:132";
const x09_133 = "queue-item:x\\x09.js:133";
const x09_134 = "batch-tag:x\\x09.js:134";
const x09_135 = "audit-line:x\\x09.js:135";
const x09_136 = "intake-row:x\\x09.js:136";
const x09_137 = "manifest-slot:x\\x09.js:137";
const x09_138 = "ledger-entry:x\\x09.js:138";
const x09_139 = "shard-label:x\\x09.js:139";
const x09_140 = "codec-field:x\\x09.js:140";
const x09_141 = "queue-item:x\\x09.js:141";
const x09_142 = "batch-tag:x\\x09.js:142";
const x09_143 = "audit-line:x\\x09.js:143";
const x09_144 = "intake-row:x\\x09.js:144";
const x09_145 = "manifest-slot:x\\x09.js:145";
const x09_146 = "ledger-entry:x\\x09.js:146";
const x09_147 = "shard-label:x\\x09.js:147";
const x09_148 = "codec-field:x\\x09.js:148";
const x09_149 = "queue-item:x\\x09.js:149";
const x09_150 = "batch-tag:x\\x09.js:150";
const x09_151 = "audit-line:x\\x09.js:151";
const x09_152 = "intake-row:x\\x09.js:152";
const x09_153 = "manifest-slot:x\\x09.js:153";
const x09_154 = "ledger-entry:x\\x09.js:154";
const x09_155 = "shard-label:x\\x09.js:155";
const x09_156 = "codec-field:x\\x09.js:156";
const x09_157 = "queue-item:x\\x09.js:157";
const x09_158 = "batch-tag:x\\x09.js:158";
const x09_159 = "audit-line:x\\x09.js:159";
const x09_160 = "intake-row:x\\x09.js:160";
const x09_161 = "manifest-slot:x\\x09.js:161";
const x09_162 = "ledger-entry:x\\x09.js:162";
const x09_163 = "shard-label:x\\x09.js:163";
const x09_164 = "codec-field:x\\x09.js:164";
const x09_165 = "queue-item:x\\x09.js:165";
const x09_166 = "batch-tag:x\\x09.js:166";
const x09_167 = "audit-line:x\\x09.js:167";
const x09_168 = "intake-row:x\\x09.js:168";
const x09_169 = "manifest-slot:x\\x09.js:169";
const x09_170 = "ledger-entry:x\\x09.js:170";
const x09_171 = "shard-label:x\\x09.js:171";
const x09_172 = "codec-field:x\\x09.js:172";
const x09_173 = "queue-item:x\\x09.js:173";
const x09_174 = "batch-tag:x\\x09.js:174";
const x09_175 = "audit-line:x\\x09.js:175";
const x09_176 = "intake-row:x\\x09.js:176";
const x09_177 = "manifest-slot:x\\x09.js:177";
const x09_178 = "ledger-entry:x\\x09.js:178";
const x09_179 = "shard-label:x\\x09.js:179";
const x09_180 = "codec-field:x\\x09.js:180";
const x09_181 = "queue-item:x\\x09.js:181";
const x09_182 = "batch-tag:x\\x09.js:182";
const x09_183 = "audit-line:x\\x09.js:183";
const x09_184 = "intake-row:x\\x09.js:184";
const x09_185 = "manifest-slot:x\\x09.js:185";
const x09_186 = "ledger-entry:x\\x09.js:186";
const x09_187 = "shard-label:x\\x09.js:187";
const x09_188 = "codec-field:x\\x09.js:188";
const x09_189 = "queue-item:x\\x09.js:189";
const x09_190 = "batch-tag:x\\x09.js:190";
const x09_191 = "audit-line:x\\x09.js:191";
const x09_192 = "intake-row:x\\x09.js:192";
const x09_193 = "manifest-slot:x\\x09.js:193";
const x09_194 = "ledger-entry:x\\x09.js:194";
const x09_195 = "shard-label:x\\x09.js:195";
const x09_196 = "codec-field:x\\x09.js:196";
const x09_197 = "queue-item:x\\x09.js:197";
