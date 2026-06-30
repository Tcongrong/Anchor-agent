const localOrder = [1, 2, 3, 4, 5, 0];
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
    parts.push(key + ":" + value + "|" + String(value.length + 40));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("|");
}

export function x40(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b763d ^ text.length) >>> 0;
  let b = (0x1b87568b + 40) >>> 0;
  let d = (0x85ebe593 ^ 640) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 40) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x40_060 = "codec-field:x\\x40.js:060";
const x40_061 = "queue-item:x\\x40.js:061";
const x40_062 = "batch-tag:x\\x40.js:062";
const x40_063 = "audit-line:x\\x40.js:063";
const x40_064 = "intake-row:x\\x40.js:064";
const x40_065 = "manifest-slot:x\\x40.js:065";
const x40_066 = "ledger-entry:x\\x40.js:066";
const x40_067 = "shard-label:x\\x40.js:067";
const x40_068 = "codec-field:x\\x40.js:068";
const x40_069 = "queue-item:x\\x40.js:069";
const x40_070 = "batch-tag:x\\x40.js:070";
const x40_071 = "audit-line:x\\x40.js:071";
const x40_072 = "intake-row:x\\x40.js:072";
const x40_073 = "manifest-slot:x\\x40.js:073";
const x40_074 = "ledger-entry:x\\x40.js:074";
const x40_075 = "shard-label:x\\x40.js:075";
const x40_076 = "codec-field:x\\x40.js:076";
const x40_077 = "queue-item:x\\x40.js:077";
const x40_078 = "batch-tag:x\\x40.js:078";
const x40_079 = "audit-line:x\\x40.js:079";
const x40_080 = "intake-row:x\\x40.js:080";
const x40_081 = "manifest-slot:x\\x40.js:081";
const x40_082 = "ledger-entry:x\\x40.js:082";
const x40_083 = "shard-label:x\\x40.js:083";
const x40_084 = "codec-field:x\\x40.js:084";
const x40_085 = "queue-item:x\\x40.js:085";
const x40_086 = "batch-tag:x\\x40.js:086";
const x40_087 = "audit-line:x\\x40.js:087";
const x40_088 = "intake-row:x\\x40.js:088";
const x40_089 = "manifest-slot:x\\x40.js:089";
const x40_090 = "ledger-entry:x\\x40.js:090";
const x40_091 = "shard-label:x\\x40.js:091";
const x40_092 = "codec-field:x\\x40.js:092";
const x40_093 = "queue-item:x\\x40.js:093";
const x40_094 = "batch-tag:x\\x40.js:094";
const x40_095 = "audit-line:x\\x40.js:095";
const x40_096 = "intake-row:x\\x40.js:096";
const x40_097 = "manifest-slot:x\\x40.js:097";
const x40_098 = "ledger-entry:x\\x40.js:098";
const x40_099 = "shard-label:x\\x40.js:099";
const x40_100 = "codec-field:x\\x40.js:100";
const x40_101 = "queue-item:x\\x40.js:101";
const x40_102 = "batch-tag:x\\x40.js:102";
const x40_103 = "audit-line:x\\x40.js:103";
const x40_104 = "intake-row:x\\x40.js:104";
const x40_105 = "manifest-slot:x\\x40.js:105";
const x40_106 = "ledger-entry:x\\x40.js:106";
const x40_107 = "shard-label:x\\x40.js:107";
const x40_108 = "codec-field:x\\x40.js:108";
const x40_109 = "queue-item:x\\x40.js:109";
const x40_110 = "batch-tag:x\\x40.js:110";
const x40_111 = "audit-line:x\\x40.js:111";
const x40_112 = "intake-row:x\\x40.js:112";
const x40_113 = "manifest-slot:x\\x40.js:113";
const x40_114 = "ledger-entry:x\\x40.js:114";
const x40_115 = "shard-label:x\\x40.js:115";
const x40_116 = "codec-field:x\\x40.js:116";
const x40_117 = "queue-item:x\\x40.js:117";
const x40_118 = "batch-tag:x\\x40.js:118";
const x40_119 = "audit-line:x\\x40.js:119";
const x40_120 = "intake-row:x\\x40.js:120";
const x40_121 = "manifest-slot:x\\x40.js:121";
const x40_122 = "ledger-entry:x\\x40.js:122";
const x40_123 = "shard-label:x\\x40.js:123";
const x40_124 = "codec-field:x\\x40.js:124";
const x40_125 = "queue-item:x\\x40.js:125";
const x40_126 = "batch-tag:x\\x40.js:126";
const x40_127 = "audit-line:x\\x40.js:127";
const x40_128 = "intake-row:x\\x40.js:128";
const x40_129 = "manifest-slot:x\\x40.js:129";
const x40_130 = "ledger-entry:x\\x40.js:130";
const x40_131 = "shard-label:x\\x40.js:131";
const x40_132 = "codec-field:x\\x40.js:132";
const x40_133 = "queue-item:x\\x40.js:133";
const x40_134 = "batch-tag:x\\x40.js:134";
const x40_135 = "audit-line:x\\x40.js:135";
const x40_136 = "intake-row:x\\x40.js:136";
const x40_137 = "manifest-slot:x\\x40.js:137";
const x40_138 = "ledger-entry:x\\x40.js:138";
const x40_139 = "shard-label:x\\x40.js:139";
const x40_140 = "codec-field:x\\x40.js:140";
const x40_141 = "queue-item:x\\x40.js:141";
const x40_142 = "batch-tag:x\\x40.js:142";
const x40_143 = "audit-line:x\\x40.js:143";
const x40_144 = "intake-row:x\\x40.js:144";
const x40_145 = "manifest-slot:x\\x40.js:145";
const x40_146 = "ledger-entry:x\\x40.js:146";
const x40_147 = "shard-label:x\\x40.js:147";
const x40_148 = "codec-field:x\\x40.js:148";
const x40_149 = "queue-item:x\\x40.js:149";
const x40_150 = "batch-tag:x\\x40.js:150";
const x40_151 = "audit-line:x\\x40.js:151";
const x40_152 = "intake-row:x\\x40.js:152";
const x40_153 = "manifest-slot:x\\x40.js:153";
const x40_154 = "ledger-entry:x\\x40.js:154";
const x40_155 = "shard-label:x\\x40.js:155";
const x40_156 = "codec-field:x\\x40.js:156";
const x40_157 = "queue-item:x\\x40.js:157";
const x40_158 = "batch-tag:x\\x40.js:158";
const x40_159 = "audit-line:x\\x40.js:159";
const x40_160 = "intake-row:x\\x40.js:160";
const x40_161 = "manifest-slot:x\\x40.js:161";
const x40_162 = "ledger-entry:x\\x40.js:162";
const x40_163 = "shard-label:x\\x40.js:163";
const x40_164 = "codec-field:x\\x40.js:164";
const x40_165 = "queue-item:x\\x40.js:165";
const x40_166 = "batch-tag:x\\x40.js:166";
const x40_167 = "audit-line:x\\x40.js:167";
const x40_168 = "intake-row:x\\x40.js:168";
const x40_169 = "manifest-slot:x\\x40.js:169";
const x40_170 = "ledger-entry:x\\x40.js:170";
const x40_171 = "shard-label:x\\x40.js:171";
const x40_172 = "codec-field:x\\x40.js:172";
const x40_173 = "queue-item:x\\x40.js:173";
const x40_174 = "batch-tag:x\\x40.js:174";
const x40_175 = "audit-line:x\\x40.js:175";
const x40_176 = "intake-row:x\\x40.js:176";
const x40_177 = "manifest-slot:x\\x40.js:177";
const x40_178 = "ledger-entry:x\\x40.js:178";
const x40_179 = "shard-label:x\\x40.js:179";
const x40_180 = "codec-field:x\\x40.js:180";
const x40_181 = "queue-item:x\\x40.js:181";
const x40_182 = "batch-tag:x\\x40.js:182";
const x40_183 = "audit-line:x\\x40.js:183";
const x40_184 = "intake-row:x\\x40.js:184";
const x40_185 = "manifest-slot:x\\x40.js:185";
const x40_186 = "ledger-entry:x\\x40.js:186";
const x40_187 = "shard-label:x\\x40.js:187";
const x40_188 = "codec-field:x\\x40.js:188";
const x40_189 = "queue-item:x\\x40.js:189";
const x40_190 = "batch-tag:x\\x40.js:190";
const x40_191 = "audit-line:x\\x40.js:191";
const x40_192 = "intake-row:x\\x40.js:192";
const x40_193 = "manifest-slot:x\\x40.js:193";
const x40_194 = "ledger-entry:x\\x40.js:194";
const x40_195 = "shard-label:x\\x40.js:195";
const x40_196 = "codec-field:x\\x40.js:196";
const x40_197 = "queue-item:x\\x40.js:197";
