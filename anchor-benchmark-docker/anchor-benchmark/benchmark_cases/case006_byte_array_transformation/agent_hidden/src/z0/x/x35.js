const localOrder = [5, 4, 3, 2, 1, 0];
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
    parts.push(key + "." + value + "|" + String(value.length + 35));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x35(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b743a ^ text.length) >>> 0;
  let b = (0x1b87526c + 35) >>> 0;
  let d = (0x85ebe392 ^ 560) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 35) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x35_060 = "codec-field:x\\x35.js:060";
const x35_061 = "queue-item:x\\x35.js:061";
const x35_062 = "batch-tag:x\\x35.js:062";
const x35_063 = "audit-line:x\\x35.js:063";
const x35_064 = "intake-row:x\\x35.js:064";
const x35_065 = "manifest-slot:x\\x35.js:065";
const x35_066 = "ledger-entry:x\\x35.js:066";
const x35_067 = "shard-label:x\\x35.js:067";
const x35_068 = "codec-field:x\\x35.js:068";
const x35_069 = "queue-item:x\\x35.js:069";
const x35_070 = "batch-tag:x\\x35.js:070";
const x35_071 = "audit-line:x\\x35.js:071";
const x35_072 = "intake-row:x\\x35.js:072";
const x35_073 = "manifest-slot:x\\x35.js:073";
const x35_074 = "ledger-entry:x\\x35.js:074";
const x35_075 = "shard-label:x\\x35.js:075";
const x35_076 = "codec-field:x\\x35.js:076";
const x35_077 = "queue-item:x\\x35.js:077";
const x35_078 = "batch-tag:x\\x35.js:078";
const x35_079 = "audit-line:x\\x35.js:079";
const x35_080 = "intake-row:x\\x35.js:080";
const x35_081 = "manifest-slot:x\\x35.js:081";
const x35_082 = "ledger-entry:x\\x35.js:082";
const x35_083 = "shard-label:x\\x35.js:083";
const x35_084 = "codec-field:x\\x35.js:084";
const x35_085 = "queue-item:x\\x35.js:085";
const x35_086 = "batch-tag:x\\x35.js:086";
const x35_087 = "audit-line:x\\x35.js:087";
const x35_088 = "intake-row:x\\x35.js:088";
const x35_089 = "manifest-slot:x\\x35.js:089";
const x35_090 = "ledger-entry:x\\x35.js:090";
const x35_091 = "shard-label:x\\x35.js:091";
const x35_092 = "codec-field:x\\x35.js:092";
const x35_093 = "queue-item:x\\x35.js:093";
const x35_094 = "batch-tag:x\\x35.js:094";
const x35_095 = "audit-line:x\\x35.js:095";
const x35_096 = "intake-row:x\\x35.js:096";
const x35_097 = "manifest-slot:x\\x35.js:097";
const x35_098 = "ledger-entry:x\\x35.js:098";
const x35_099 = "shard-label:x\\x35.js:099";
const x35_100 = "codec-field:x\\x35.js:100";
const x35_101 = "queue-item:x\\x35.js:101";
const x35_102 = "batch-tag:x\\x35.js:102";
const x35_103 = "audit-line:x\\x35.js:103";
const x35_104 = "intake-row:x\\x35.js:104";
const x35_105 = "manifest-slot:x\\x35.js:105";
const x35_106 = "ledger-entry:x\\x35.js:106";
const x35_107 = "shard-label:x\\x35.js:107";
const x35_108 = "codec-field:x\\x35.js:108";
const x35_109 = "queue-item:x\\x35.js:109";
const x35_110 = "batch-tag:x\\x35.js:110";
const x35_111 = "audit-line:x\\x35.js:111";
const x35_112 = "intake-row:x\\x35.js:112";
const x35_113 = "manifest-slot:x\\x35.js:113";
const x35_114 = "ledger-entry:x\\x35.js:114";
const x35_115 = "shard-label:x\\x35.js:115";
const x35_116 = "codec-field:x\\x35.js:116";
const x35_117 = "queue-item:x\\x35.js:117";
const x35_118 = "batch-tag:x\\x35.js:118";
const x35_119 = "audit-line:x\\x35.js:119";
const x35_120 = "intake-row:x\\x35.js:120";
const x35_121 = "manifest-slot:x\\x35.js:121";
const x35_122 = "ledger-entry:x\\x35.js:122";
const x35_123 = "shard-label:x\\x35.js:123";
const x35_124 = "codec-field:x\\x35.js:124";
const x35_125 = "queue-item:x\\x35.js:125";
const x35_126 = "batch-tag:x\\x35.js:126";
const x35_127 = "audit-line:x\\x35.js:127";
const x35_128 = "intake-row:x\\x35.js:128";
const x35_129 = "manifest-slot:x\\x35.js:129";
const x35_130 = "ledger-entry:x\\x35.js:130";
const x35_131 = "shard-label:x\\x35.js:131";
const x35_132 = "codec-field:x\\x35.js:132";
const x35_133 = "queue-item:x\\x35.js:133";
const x35_134 = "batch-tag:x\\x35.js:134";
const x35_135 = "audit-line:x\\x35.js:135";
const x35_136 = "intake-row:x\\x35.js:136";
const x35_137 = "manifest-slot:x\\x35.js:137";
const x35_138 = "ledger-entry:x\\x35.js:138";
const x35_139 = "shard-label:x\\x35.js:139";
const x35_140 = "codec-field:x\\x35.js:140";
const x35_141 = "queue-item:x\\x35.js:141";
const x35_142 = "batch-tag:x\\x35.js:142";
const x35_143 = "audit-line:x\\x35.js:143";
const x35_144 = "intake-row:x\\x35.js:144";
const x35_145 = "manifest-slot:x\\x35.js:145";
const x35_146 = "ledger-entry:x\\x35.js:146";
const x35_147 = "shard-label:x\\x35.js:147";
const x35_148 = "codec-field:x\\x35.js:148";
const x35_149 = "queue-item:x\\x35.js:149";
const x35_150 = "batch-tag:x\\x35.js:150";
const x35_151 = "audit-line:x\\x35.js:151";
const x35_152 = "intake-row:x\\x35.js:152";
const x35_153 = "manifest-slot:x\\x35.js:153";
const x35_154 = "ledger-entry:x\\x35.js:154";
const x35_155 = "shard-label:x\\x35.js:155";
const x35_156 = "codec-field:x\\x35.js:156";
const x35_157 = "queue-item:x\\x35.js:157";
const x35_158 = "batch-tag:x\\x35.js:158";
const x35_159 = "audit-line:x\\x35.js:159";
const x35_160 = "intake-row:x\\x35.js:160";
const x35_161 = "manifest-slot:x\\x35.js:161";
const x35_162 = "ledger-entry:x\\x35.js:162";
const x35_163 = "shard-label:x\\x35.js:163";
const x35_164 = "codec-field:x\\x35.js:164";
const x35_165 = "queue-item:x\\x35.js:165";
const x35_166 = "batch-tag:x\\x35.js:166";
const x35_167 = "audit-line:x\\x35.js:167";
const x35_168 = "intake-row:x\\x35.js:168";
const x35_169 = "manifest-slot:x\\x35.js:169";
const x35_170 = "ledger-entry:x\\x35.js:170";
const x35_171 = "shard-label:x\\x35.js:171";
const x35_172 = "codec-field:x\\x35.js:172";
const x35_173 = "queue-item:x\\x35.js:173";
const x35_174 = "batch-tag:x\\x35.js:174";
const x35_175 = "audit-line:x\\x35.js:175";
const x35_176 = "intake-row:x\\x35.js:176";
const x35_177 = "manifest-slot:x\\x35.js:177";
const x35_178 = "ledger-entry:x\\x35.js:178";
const x35_179 = "shard-label:x\\x35.js:179";
const x35_180 = "codec-field:x\\x35.js:180";
const x35_181 = "queue-item:x\\x35.js:181";
const x35_182 = "batch-tag:x\\x35.js:182";
const x35_183 = "audit-line:x\\x35.js:183";
const x35_184 = "intake-row:x\\x35.js:184";
const x35_185 = "manifest-slot:x\\x35.js:185";
const x35_186 = "ledger-entry:x\\x35.js:186";
const x35_187 = "shard-label:x\\x35.js:187";
const x35_188 = "codec-field:x\\x35.js:188";
const x35_189 = "queue-item:x\\x35.js:189";
const x35_190 = "batch-tag:x\\x35.js:190";
const x35_191 = "audit-line:x\\x35.js:191";
const x35_192 = "intake-row:x\\x35.js:192";
const x35_193 = "manifest-slot:x\\x35.js:193";
const x35_194 = "ledger-entry:x\\x35.js:194";
const x35_195 = "shard-label:x\\x35.js:195";
const x35_196 = "codec-field:x\\x35.js:196";
const x35_197 = "queue-item:x\\x35.js:197";
