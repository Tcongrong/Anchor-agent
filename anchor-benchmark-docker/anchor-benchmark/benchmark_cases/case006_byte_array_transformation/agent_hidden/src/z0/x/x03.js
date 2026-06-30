const localOrder = [2, 5, 3, 1, 0, 4];
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
    parts.push(key + "." + value + "~" + String(value.length + 3));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x03(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b78da ^ text.length) >>> 0;
  let b = (0x1b87380c + 3) >>> 0;
  let d = (0x85ebc9f2 ^ 48) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 3) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x03_060 = "codec-field:x\\x03.js:060";
const x03_061 = "queue-item:x\\x03.js:061";
const x03_062 = "batch-tag:x\\x03.js:062";
const x03_063 = "audit-line:x\\x03.js:063";
const x03_064 = "intake-row:x\\x03.js:064";
const x03_065 = "manifest-slot:x\\x03.js:065";
const x03_066 = "ledger-entry:x\\x03.js:066";
const x03_067 = "shard-label:x\\x03.js:067";
const x03_068 = "codec-field:x\\x03.js:068";
const x03_069 = "queue-item:x\\x03.js:069";
const x03_070 = "batch-tag:x\\x03.js:070";
const x03_071 = "audit-line:x\\x03.js:071";
const x03_072 = "intake-row:x\\x03.js:072";
const x03_073 = "manifest-slot:x\\x03.js:073";
const x03_074 = "ledger-entry:x\\x03.js:074";
const x03_075 = "shard-label:x\\x03.js:075";
const x03_076 = "codec-field:x\\x03.js:076";
const x03_077 = "queue-item:x\\x03.js:077";
const x03_078 = "batch-tag:x\\x03.js:078";
const x03_079 = "audit-line:x\\x03.js:079";
const x03_080 = "intake-row:x\\x03.js:080";
const x03_081 = "manifest-slot:x\\x03.js:081";
const x03_082 = "ledger-entry:x\\x03.js:082";
const x03_083 = "shard-label:x\\x03.js:083";
const x03_084 = "codec-field:x\\x03.js:084";
const x03_085 = "queue-item:x\\x03.js:085";
const x03_086 = "batch-tag:x\\x03.js:086";
const x03_087 = "audit-line:x\\x03.js:087";
const x03_088 = "intake-row:x\\x03.js:088";
const x03_089 = "manifest-slot:x\\x03.js:089";
const x03_090 = "ledger-entry:x\\x03.js:090";
const x03_091 = "shard-label:x\\x03.js:091";
const x03_092 = "codec-field:x\\x03.js:092";
const x03_093 = "queue-item:x\\x03.js:093";
const x03_094 = "batch-tag:x\\x03.js:094";
const x03_095 = "audit-line:x\\x03.js:095";
const x03_096 = "intake-row:x\\x03.js:096";
const x03_097 = "manifest-slot:x\\x03.js:097";
const x03_098 = "ledger-entry:x\\x03.js:098";
const x03_099 = "shard-label:x\\x03.js:099";
const x03_100 = "codec-field:x\\x03.js:100";
const x03_101 = "queue-item:x\\x03.js:101";
const x03_102 = "batch-tag:x\\x03.js:102";
const x03_103 = "audit-line:x\\x03.js:103";
const x03_104 = "intake-row:x\\x03.js:104";
const x03_105 = "manifest-slot:x\\x03.js:105";
const x03_106 = "ledger-entry:x\\x03.js:106";
const x03_107 = "shard-label:x\\x03.js:107";
const x03_108 = "codec-field:x\\x03.js:108";
const x03_109 = "queue-item:x\\x03.js:109";
const x03_110 = "batch-tag:x\\x03.js:110";
const x03_111 = "audit-line:x\\x03.js:111";
const x03_112 = "intake-row:x\\x03.js:112";
const x03_113 = "manifest-slot:x\\x03.js:113";
const x03_114 = "ledger-entry:x\\x03.js:114";
const x03_115 = "shard-label:x\\x03.js:115";
const x03_116 = "codec-field:x\\x03.js:116";
const x03_117 = "queue-item:x\\x03.js:117";
const x03_118 = "batch-tag:x\\x03.js:118";
const x03_119 = "audit-line:x\\x03.js:119";
const x03_120 = "intake-row:x\\x03.js:120";
const x03_121 = "manifest-slot:x\\x03.js:121";
const x03_122 = "ledger-entry:x\\x03.js:122";
const x03_123 = "shard-label:x\\x03.js:123";
const x03_124 = "codec-field:x\\x03.js:124";
const x03_125 = "queue-item:x\\x03.js:125";
const x03_126 = "batch-tag:x\\x03.js:126";
const x03_127 = "audit-line:x\\x03.js:127";
const x03_128 = "intake-row:x\\x03.js:128";
const x03_129 = "manifest-slot:x\\x03.js:129";
const x03_130 = "ledger-entry:x\\x03.js:130";
const x03_131 = "shard-label:x\\x03.js:131";
const x03_132 = "codec-field:x\\x03.js:132";
const x03_133 = "queue-item:x\\x03.js:133";
const x03_134 = "batch-tag:x\\x03.js:134";
const x03_135 = "audit-line:x\\x03.js:135";
const x03_136 = "intake-row:x\\x03.js:136";
const x03_137 = "manifest-slot:x\\x03.js:137";
const x03_138 = "ledger-entry:x\\x03.js:138";
const x03_139 = "shard-label:x\\x03.js:139";
const x03_140 = "codec-field:x\\x03.js:140";
const x03_141 = "queue-item:x\\x03.js:141";
const x03_142 = "batch-tag:x\\x03.js:142";
const x03_143 = "audit-line:x\\x03.js:143";
const x03_144 = "intake-row:x\\x03.js:144";
const x03_145 = "manifest-slot:x\\x03.js:145";
const x03_146 = "ledger-entry:x\\x03.js:146";
const x03_147 = "shard-label:x\\x03.js:147";
const x03_148 = "codec-field:x\\x03.js:148";
const x03_149 = "queue-item:x\\x03.js:149";
const x03_150 = "batch-tag:x\\x03.js:150";
const x03_151 = "audit-line:x\\x03.js:151";
const x03_152 = "intake-row:x\\x03.js:152";
const x03_153 = "manifest-slot:x\\x03.js:153";
const x03_154 = "ledger-entry:x\\x03.js:154";
const x03_155 = "shard-label:x\\x03.js:155";
const x03_156 = "codec-field:x\\x03.js:156";
const x03_157 = "queue-item:x\\x03.js:157";
const x03_158 = "batch-tag:x\\x03.js:158";
const x03_159 = "audit-line:x\\x03.js:159";
const x03_160 = "intake-row:x\\x03.js:160";
const x03_161 = "manifest-slot:x\\x03.js:161";
const x03_162 = "ledger-entry:x\\x03.js:162";
const x03_163 = "shard-label:x\\x03.js:163";
const x03_164 = "codec-field:x\\x03.js:164";
const x03_165 = "queue-item:x\\x03.js:165";
const x03_166 = "batch-tag:x\\x03.js:166";
const x03_167 = "audit-line:x\\x03.js:167";
const x03_168 = "intake-row:x\\x03.js:168";
const x03_169 = "manifest-slot:x\\x03.js:169";
const x03_170 = "ledger-entry:x\\x03.js:170";
const x03_171 = "shard-label:x\\x03.js:171";
const x03_172 = "codec-field:x\\x03.js:172";
const x03_173 = "queue-item:x\\x03.js:173";
const x03_174 = "batch-tag:x\\x03.js:174";
const x03_175 = "audit-line:x\\x03.js:175";
const x03_176 = "intake-row:x\\x03.js:176";
const x03_177 = "manifest-slot:x\\x03.js:177";
const x03_178 = "ledger-entry:x\\x03.js:178";
const x03_179 = "shard-label:x\\x03.js:179";
const x03_180 = "codec-field:x\\x03.js:180";
const x03_181 = "queue-item:x\\x03.js:181";
const x03_182 = "batch-tag:x\\x03.js:182";
const x03_183 = "audit-line:x\\x03.js:183";
const x03_184 = "intake-row:x\\x03.js:184";
const x03_185 = "manifest-slot:x\\x03.js:185";
const x03_186 = "ledger-entry:x\\x03.js:186";
const x03_187 = "shard-label:x\\x03.js:187";
const x03_188 = "codec-field:x\\x03.js:188";
const x03_189 = "queue-item:x\\x03.js:189";
const x03_190 = "batch-tag:x\\x03.js:190";
const x03_191 = "audit-line:x\\x03.js:191";
const x03_192 = "intake-row:x\\x03.js:192";
const x03_193 = "manifest-slot:x\\x03.js:193";
const x03_194 = "ledger-entry:x\\x03.js:194";
const x03_195 = "shard-label:x\\x03.js:195";
const x03_196 = "codec-field:x\\x03.js:196";
const x03_197 = "queue-item:x\\x03.js:197";
