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
    parts.push(key + ":" + value + "|" + String(value.length + 8));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("|");
}

export function x08(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b7add ^ text.length) >>> 0;
  let b = (0x1b873c2b + 8) >>> 0;
  let d = (0x85ebc3f3 ^ 128) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 8) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x08_060 = "codec-field:x\\x08.js:060";
const x08_061 = "queue-item:x\\x08.js:061";
const x08_062 = "batch-tag:x\\x08.js:062";
const x08_063 = "audit-line:x\\x08.js:063";
const x08_064 = "intake-row:x\\x08.js:064";
const x08_065 = "manifest-slot:x\\x08.js:065";
const x08_066 = "ledger-entry:x\\x08.js:066";
const x08_067 = "shard-label:x\\x08.js:067";
const x08_068 = "codec-field:x\\x08.js:068";
const x08_069 = "queue-item:x\\x08.js:069";
const x08_070 = "batch-tag:x\\x08.js:070";
const x08_071 = "audit-line:x\\x08.js:071";
const x08_072 = "intake-row:x\\x08.js:072";
const x08_073 = "manifest-slot:x\\x08.js:073";
const x08_074 = "ledger-entry:x\\x08.js:074";
const x08_075 = "shard-label:x\\x08.js:075";
const x08_076 = "codec-field:x\\x08.js:076";
const x08_077 = "queue-item:x\\x08.js:077";
const x08_078 = "batch-tag:x\\x08.js:078";
const x08_079 = "audit-line:x\\x08.js:079";
const x08_080 = "intake-row:x\\x08.js:080";
const x08_081 = "manifest-slot:x\\x08.js:081";
const x08_082 = "ledger-entry:x\\x08.js:082";
const x08_083 = "shard-label:x\\x08.js:083";
const x08_084 = "codec-field:x\\x08.js:084";
const x08_085 = "queue-item:x\\x08.js:085";
const x08_086 = "batch-tag:x\\x08.js:086";
const x08_087 = "audit-line:x\\x08.js:087";
const x08_088 = "intake-row:x\\x08.js:088";
const x08_089 = "manifest-slot:x\\x08.js:089";
const x08_090 = "ledger-entry:x\\x08.js:090";
const x08_091 = "shard-label:x\\x08.js:091";
const x08_092 = "codec-field:x\\x08.js:092";
const x08_093 = "queue-item:x\\x08.js:093";
const x08_094 = "batch-tag:x\\x08.js:094";
const x08_095 = "audit-line:x\\x08.js:095";
const x08_096 = "intake-row:x\\x08.js:096";
const x08_097 = "manifest-slot:x\\x08.js:097";
const x08_098 = "ledger-entry:x\\x08.js:098";
const x08_099 = "shard-label:x\\x08.js:099";
const x08_100 = "codec-field:x\\x08.js:100";
const x08_101 = "queue-item:x\\x08.js:101";
const x08_102 = "batch-tag:x\\x08.js:102";
const x08_103 = "audit-line:x\\x08.js:103";
const x08_104 = "intake-row:x\\x08.js:104";
const x08_105 = "manifest-slot:x\\x08.js:105";
const x08_106 = "ledger-entry:x\\x08.js:106";
const x08_107 = "shard-label:x\\x08.js:107";
const x08_108 = "codec-field:x\\x08.js:108";
const x08_109 = "queue-item:x\\x08.js:109";
const x08_110 = "batch-tag:x\\x08.js:110";
const x08_111 = "audit-line:x\\x08.js:111";
const x08_112 = "intake-row:x\\x08.js:112";
const x08_113 = "manifest-slot:x\\x08.js:113";
const x08_114 = "ledger-entry:x\\x08.js:114";
const x08_115 = "shard-label:x\\x08.js:115";
const x08_116 = "codec-field:x\\x08.js:116";
const x08_117 = "queue-item:x\\x08.js:117";
const x08_118 = "batch-tag:x\\x08.js:118";
const x08_119 = "audit-line:x\\x08.js:119";
const x08_120 = "intake-row:x\\x08.js:120";
const x08_121 = "manifest-slot:x\\x08.js:121";
const x08_122 = "ledger-entry:x\\x08.js:122";
const x08_123 = "shard-label:x\\x08.js:123";
const x08_124 = "codec-field:x\\x08.js:124";
const x08_125 = "queue-item:x\\x08.js:125";
const x08_126 = "batch-tag:x\\x08.js:126";
const x08_127 = "audit-line:x\\x08.js:127";
const x08_128 = "intake-row:x\\x08.js:128";
const x08_129 = "manifest-slot:x\\x08.js:129";
const x08_130 = "ledger-entry:x\\x08.js:130";
const x08_131 = "shard-label:x\\x08.js:131";
const x08_132 = "codec-field:x\\x08.js:132";
const x08_133 = "queue-item:x\\x08.js:133";
const x08_134 = "batch-tag:x\\x08.js:134";
const x08_135 = "audit-line:x\\x08.js:135";
const x08_136 = "intake-row:x\\x08.js:136";
const x08_137 = "manifest-slot:x\\x08.js:137";
const x08_138 = "ledger-entry:x\\x08.js:138";
const x08_139 = "shard-label:x\\x08.js:139";
const x08_140 = "codec-field:x\\x08.js:140";
const x08_141 = "queue-item:x\\x08.js:141";
const x08_142 = "batch-tag:x\\x08.js:142";
const x08_143 = "audit-line:x\\x08.js:143";
const x08_144 = "intake-row:x\\x08.js:144";
const x08_145 = "manifest-slot:x\\x08.js:145";
const x08_146 = "ledger-entry:x\\x08.js:146";
const x08_147 = "shard-label:x\\x08.js:147";
const x08_148 = "codec-field:x\\x08.js:148";
const x08_149 = "queue-item:x\\x08.js:149";
const x08_150 = "batch-tag:x\\x08.js:150";
const x08_151 = "audit-line:x\\x08.js:151";
const x08_152 = "intake-row:x\\x08.js:152";
const x08_153 = "manifest-slot:x\\x08.js:153";
const x08_154 = "ledger-entry:x\\x08.js:154";
const x08_155 = "shard-label:x\\x08.js:155";
const x08_156 = "codec-field:x\\x08.js:156";
const x08_157 = "queue-item:x\\x08.js:157";
const x08_158 = "batch-tag:x\\x08.js:158";
const x08_159 = "audit-line:x\\x08.js:159";
const x08_160 = "intake-row:x\\x08.js:160";
const x08_161 = "manifest-slot:x\\x08.js:161";
const x08_162 = "ledger-entry:x\\x08.js:162";
const x08_163 = "shard-label:x\\x08.js:163";
const x08_164 = "codec-field:x\\x08.js:164";
const x08_165 = "queue-item:x\\x08.js:165";
const x08_166 = "batch-tag:x\\x08.js:166";
const x08_167 = "audit-line:x\\x08.js:167";
const x08_168 = "intake-row:x\\x08.js:168";
const x08_169 = "manifest-slot:x\\x08.js:169";
const x08_170 = "ledger-entry:x\\x08.js:170";
const x08_171 = "shard-label:x\\x08.js:171";
const x08_172 = "codec-field:x\\x08.js:172";
const x08_173 = "queue-item:x\\x08.js:173";
const x08_174 = "batch-tag:x\\x08.js:174";
const x08_175 = "audit-line:x\\x08.js:175";
const x08_176 = "intake-row:x\\x08.js:176";
const x08_177 = "manifest-slot:x\\x08.js:177";
const x08_178 = "ledger-entry:x\\x08.js:178";
const x08_179 = "shard-label:x\\x08.js:179";
const x08_180 = "codec-field:x\\x08.js:180";
const x08_181 = "queue-item:x\\x08.js:181";
const x08_182 = "batch-tag:x\\x08.js:182";
const x08_183 = "audit-line:x\\x08.js:183";
const x08_184 = "intake-row:x\\x08.js:184";
const x08_185 = "manifest-slot:x\\x08.js:185";
const x08_186 = "ledger-entry:x\\x08.js:186";
const x08_187 = "shard-label:x\\x08.js:187";
const x08_188 = "codec-field:x\\x08.js:188";
const x08_189 = "queue-item:x\\x08.js:189";
const x08_190 = "batch-tag:x\\x08.js:190";
const x08_191 = "audit-line:x\\x08.js:191";
const x08_192 = "intake-row:x\\x08.js:192";
const x08_193 = "manifest-slot:x\\x08.js:193";
const x08_194 = "ledger-entry:x\\x08.js:194";
const x08_195 = "shard-label:x\\x08.js:195";
const x08_196 = "codec-field:x\\x08.js:196";
const x08_197 = "queue-item:x\\x08.js:197";
