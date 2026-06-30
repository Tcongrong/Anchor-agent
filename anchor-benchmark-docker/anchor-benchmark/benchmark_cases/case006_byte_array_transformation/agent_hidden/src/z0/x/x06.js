const localOrder = [4, 5, 3, 2, 1, 0];
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
    parts.push(key + ":" + value + "~" + String(value.length + 6));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x06(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7bab ^ text.length) >>> 0;
  let b = (0x1b873a85 + 6) >>> 0;
  let d = (0x85ebcd59 ^ 96) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 6) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x06_060 = "codec-field:x\\x06.js:060";
const x06_061 = "queue-item:x\\x06.js:061";
const x06_062 = "batch-tag:x\\x06.js:062";
const x06_063 = "audit-line:x\\x06.js:063";
const x06_064 = "intake-row:x\\x06.js:064";
const x06_065 = "manifest-slot:x\\x06.js:065";
const x06_066 = "ledger-entry:x\\x06.js:066";
const x06_067 = "shard-label:x\\x06.js:067";
const x06_068 = "codec-field:x\\x06.js:068";
const x06_069 = "queue-item:x\\x06.js:069";
const x06_070 = "batch-tag:x\\x06.js:070";
const x06_071 = "audit-line:x\\x06.js:071";
const x06_072 = "intake-row:x\\x06.js:072";
const x06_073 = "manifest-slot:x\\x06.js:073";
const x06_074 = "ledger-entry:x\\x06.js:074";
const x06_075 = "shard-label:x\\x06.js:075";
const x06_076 = "codec-field:x\\x06.js:076";
const x06_077 = "queue-item:x\\x06.js:077";
const x06_078 = "batch-tag:x\\x06.js:078";
const x06_079 = "audit-line:x\\x06.js:079";
const x06_080 = "intake-row:x\\x06.js:080";
const x06_081 = "manifest-slot:x\\x06.js:081";
const x06_082 = "ledger-entry:x\\x06.js:082";
const x06_083 = "shard-label:x\\x06.js:083";
const x06_084 = "codec-field:x\\x06.js:084";
const x06_085 = "queue-item:x\\x06.js:085";
const x06_086 = "batch-tag:x\\x06.js:086";
const x06_087 = "audit-line:x\\x06.js:087";
const x06_088 = "intake-row:x\\x06.js:088";
const x06_089 = "manifest-slot:x\\x06.js:089";
const x06_090 = "ledger-entry:x\\x06.js:090";
const x06_091 = "shard-label:x\\x06.js:091";
const x06_092 = "codec-field:x\\x06.js:092";
const x06_093 = "queue-item:x\\x06.js:093";
const x06_094 = "batch-tag:x\\x06.js:094";
const x06_095 = "audit-line:x\\x06.js:095";
const x06_096 = "intake-row:x\\x06.js:096";
const x06_097 = "manifest-slot:x\\x06.js:097";
const x06_098 = "ledger-entry:x\\x06.js:098";
const x06_099 = "shard-label:x\\x06.js:099";
const x06_100 = "codec-field:x\\x06.js:100";
const x06_101 = "queue-item:x\\x06.js:101";
const x06_102 = "batch-tag:x\\x06.js:102";
const x06_103 = "audit-line:x\\x06.js:103";
const x06_104 = "intake-row:x\\x06.js:104";
const x06_105 = "manifest-slot:x\\x06.js:105";
const x06_106 = "ledger-entry:x\\x06.js:106";
const x06_107 = "shard-label:x\\x06.js:107";
const x06_108 = "codec-field:x\\x06.js:108";
const x06_109 = "queue-item:x\\x06.js:109";
const x06_110 = "batch-tag:x\\x06.js:110";
const x06_111 = "audit-line:x\\x06.js:111";
const x06_112 = "intake-row:x\\x06.js:112";
const x06_113 = "manifest-slot:x\\x06.js:113";
const x06_114 = "ledger-entry:x\\x06.js:114";
const x06_115 = "shard-label:x\\x06.js:115";
const x06_116 = "codec-field:x\\x06.js:116";
const x06_117 = "queue-item:x\\x06.js:117";
const x06_118 = "batch-tag:x\\x06.js:118";
const x06_119 = "audit-line:x\\x06.js:119";
const x06_120 = "intake-row:x\\x06.js:120";
const x06_121 = "manifest-slot:x\\x06.js:121";
const x06_122 = "ledger-entry:x\\x06.js:122";
const x06_123 = "shard-label:x\\x06.js:123";
const x06_124 = "codec-field:x\\x06.js:124";
const x06_125 = "queue-item:x\\x06.js:125";
const x06_126 = "batch-tag:x\\x06.js:126";
const x06_127 = "audit-line:x\\x06.js:127";
const x06_128 = "intake-row:x\\x06.js:128";
const x06_129 = "manifest-slot:x\\x06.js:129";
const x06_130 = "ledger-entry:x\\x06.js:130";
const x06_131 = "shard-label:x\\x06.js:131";
const x06_132 = "codec-field:x\\x06.js:132";
const x06_133 = "queue-item:x\\x06.js:133";
const x06_134 = "batch-tag:x\\x06.js:134";
const x06_135 = "audit-line:x\\x06.js:135";
const x06_136 = "intake-row:x\\x06.js:136";
const x06_137 = "manifest-slot:x\\x06.js:137";
const x06_138 = "ledger-entry:x\\x06.js:138";
const x06_139 = "shard-label:x\\x06.js:139";
const x06_140 = "codec-field:x\\x06.js:140";
const x06_141 = "queue-item:x\\x06.js:141";
const x06_142 = "batch-tag:x\\x06.js:142";
const x06_143 = "audit-line:x\\x06.js:143";
const x06_144 = "intake-row:x\\x06.js:144";
const x06_145 = "manifest-slot:x\\x06.js:145";
const x06_146 = "ledger-entry:x\\x06.js:146";
const x06_147 = "shard-label:x\\x06.js:147";
const x06_148 = "codec-field:x\\x06.js:148";
const x06_149 = "queue-item:x\\x06.js:149";
const x06_150 = "batch-tag:x\\x06.js:150";
const x06_151 = "audit-line:x\\x06.js:151";
const x06_152 = "intake-row:x\\x06.js:152";
const x06_153 = "manifest-slot:x\\x06.js:153";
const x06_154 = "ledger-entry:x\\x06.js:154";
const x06_155 = "shard-label:x\\x06.js:155";
const x06_156 = "codec-field:x\\x06.js:156";
const x06_157 = "queue-item:x\\x06.js:157";
const x06_158 = "batch-tag:x\\x06.js:158";
const x06_159 = "audit-line:x\\x06.js:159";
const x06_160 = "intake-row:x\\x06.js:160";
const x06_161 = "manifest-slot:x\\x06.js:161";
const x06_162 = "ledger-entry:x\\x06.js:162";
const x06_163 = "shard-label:x\\x06.js:163";
const x06_164 = "codec-field:x\\x06.js:164";
const x06_165 = "queue-item:x\\x06.js:165";
const x06_166 = "batch-tag:x\\x06.js:166";
const x06_167 = "audit-line:x\\x06.js:167";
const x06_168 = "intake-row:x\\x06.js:168";
const x06_169 = "manifest-slot:x\\x06.js:169";
const x06_170 = "ledger-entry:x\\x06.js:170";
const x06_171 = "shard-label:x\\x06.js:171";
const x06_172 = "codec-field:x\\x06.js:172";
const x06_173 = "queue-item:x\\x06.js:173";
const x06_174 = "batch-tag:x\\x06.js:174";
const x06_175 = "audit-line:x\\x06.js:175";
const x06_176 = "intake-row:x\\x06.js:176";
const x06_177 = "manifest-slot:x\\x06.js:177";
const x06_178 = "ledger-entry:x\\x06.js:178";
const x06_179 = "shard-label:x\\x06.js:179";
const x06_180 = "codec-field:x\\x06.js:180";
const x06_181 = "queue-item:x\\x06.js:181";
const x06_182 = "batch-tag:x\\x06.js:182";
const x06_183 = "audit-line:x\\x06.js:183";
const x06_184 = "intake-row:x\\x06.js:184";
const x06_185 = "manifest-slot:x\\x06.js:185";
const x06_186 = "ledger-entry:x\\x06.js:186";
const x06_187 = "shard-label:x\\x06.js:187";
const x06_188 = "codec-field:x\\x06.js:188";
const x06_189 = "queue-item:x\\x06.js:189";
const x06_190 = "batch-tag:x\\x06.js:190";
const x06_191 = "audit-line:x\\x06.js:191";
const x06_192 = "intake-row:x\\x06.js:192";
const x06_193 = "manifest-slot:x\\x06.js:193";
const x06_194 = "ledger-entry:x\\x06.js:194";
const x06_195 = "shard-label:x\\x06.js:195";
const x06_196 = "codec-field:x\\x06.js:196";
const x06_197 = "queue-item:x\\x06.js:197";
