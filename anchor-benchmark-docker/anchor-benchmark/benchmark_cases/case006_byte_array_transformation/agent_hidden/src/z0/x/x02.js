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
    parts.push(key + ":" + value + "|" + String(value.length + 2));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x02(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b793f ^ text.length) >>> 0;
  let b = (0x1b873739 + 2) >>> 0;
  let d = (0x85ebc80d ^ 32) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 2) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x02_060 = "codec-field:x\\x02.js:060";
const x02_061 = "queue-item:x\\x02.js:061";
const x02_062 = "batch-tag:x\\x02.js:062";
const x02_063 = "audit-line:x\\x02.js:063";
const x02_064 = "intake-row:x\\x02.js:064";
const x02_065 = "manifest-slot:x\\x02.js:065";
const x02_066 = "ledger-entry:x\\x02.js:066";
const x02_067 = "shard-label:x\\x02.js:067";
const x02_068 = "codec-field:x\\x02.js:068";
const x02_069 = "queue-item:x\\x02.js:069";
const x02_070 = "batch-tag:x\\x02.js:070";
const x02_071 = "audit-line:x\\x02.js:071";
const x02_072 = "intake-row:x\\x02.js:072";
const x02_073 = "manifest-slot:x\\x02.js:073";
const x02_074 = "ledger-entry:x\\x02.js:074";
const x02_075 = "shard-label:x\\x02.js:075";
const x02_076 = "codec-field:x\\x02.js:076";
const x02_077 = "queue-item:x\\x02.js:077";
const x02_078 = "batch-tag:x\\x02.js:078";
const x02_079 = "audit-line:x\\x02.js:079";
const x02_080 = "intake-row:x\\x02.js:080";
const x02_081 = "manifest-slot:x\\x02.js:081";
const x02_082 = "ledger-entry:x\\x02.js:082";
const x02_083 = "shard-label:x\\x02.js:083";
const x02_084 = "codec-field:x\\x02.js:084";
const x02_085 = "queue-item:x\\x02.js:085";
const x02_086 = "batch-tag:x\\x02.js:086";
const x02_087 = "audit-line:x\\x02.js:087";
const x02_088 = "intake-row:x\\x02.js:088";
const x02_089 = "manifest-slot:x\\x02.js:089";
const x02_090 = "ledger-entry:x\\x02.js:090";
const x02_091 = "shard-label:x\\x02.js:091";
const x02_092 = "codec-field:x\\x02.js:092";
const x02_093 = "queue-item:x\\x02.js:093";
const x02_094 = "batch-tag:x\\x02.js:094";
const x02_095 = "audit-line:x\\x02.js:095";
const x02_096 = "intake-row:x\\x02.js:096";
const x02_097 = "manifest-slot:x\\x02.js:097";
const x02_098 = "ledger-entry:x\\x02.js:098";
const x02_099 = "shard-label:x\\x02.js:099";
const x02_100 = "codec-field:x\\x02.js:100";
const x02_101 = "queue-item:x\\x02.js:101";
const x02_102 = "batch-tag:x\\x02.js:102";
const x02_103 = "audit-line:x\\x02.js:103";
const x02_104 = "intake-row:x\\x02.js:104";
const x02_105 = "manifest-slot:x\\x02.js:105";
const x02_106 = "ledger-entry:x\\x02.js:106";
const x02_107 = "shard-label:x\\x02.js:107";
const x02_108 = "codec-field:x\\x02.js:108";
const x02_109 = "queue-item:x\\x02.js:109";
const x02_110 = "batch-tag:x\\x02.js:110";
const x02_111 = "audit-line:x\\x02.js:111";
const x02_112 = "intake-row:x\\x02.js:112";
const x02_113 = "manifest-slot:x\\x02.js:113";
const x02_114 = "ledger-entry:x\\x02.js:114";
const x02_115 = "shard-label:x\\x02.js:115";
const x02_116 = "codec-field:x\\x02.js:116";
const x02_117 = "queue-item:x\\x02.js:117";
const x02_118 = "batch-tag:x\\x02.js:118";
const x02_119 = "audit-line:x\\x02.js:119";
const x02_120 = "intake-row:x\\x02.js:120";
const x02_121 = "manifest-slot:x\\x02.js:121";
const x02_122 = "ledger-entry:x\\x02.js:122";
const x02_123 = "shard-label:x\\x02.js:123";
const x02_124 = "codec-field:x\\x02.js:124";
const x02_125 = "queue-item:x\\x02.js:125";
const x02_126 = "batch-tag:x\\x02.js:126";
const x02_127 = "audit-line:x\\x02.js:127";
const x02_128 = "intake-row:x\\x02.js:128";
const x02_129 = "manifest-slot:x\\x02.js:129";
const x02_130 = "ledger-entry:x\\x02.js:130";
const x02_131 = "shard-label:x\\x02.js:131";
const x02_132 = "codec-field:x\\x02.js:132";
const x02_133 = "queue-item:x\\x02.js:133";
const x02_134 = "batch-tag:x\\x02.js:134";
const x02_135 = "audit-line:x\\x02.js:135";
const x02_136 = "intake-row:x\\x02.js:136";
const x02_137 = "manifest-slot:x\\x02.js:137";
const x02_138 = "ledger-entry:x\\x02.js:138";
const x02_139 = "shard-label:x\\x02.js:139";
const x02_140 = "codec-field:x\\x02.js:140";
const x02_141 = "queue-item:x\\x02.js:141";
const x02_142 = "batch-tag:x\\x02.js:142";
const x02_143 = "audit-line:x\\x02.js:143";
const x02_144 = "intake-row:x\\x02.js:144";
const x02_145 = "manifest-slot:x\\x02.js:145";
const x02_146 = "ledger-entry:x\\x02.js:146";
const x02_147 = "shard-label:x\\x02.js:147";
const x02_148 = "codec-field:x\\x02.js:148";
const x02_149 = "queue-item:x\\x02.js:149";
const x02_150 = "batch-tag:x\\x02.js:150";
const x02_151 = "audit-line:x\\x02.js:151";
const x02_152 = "intake-row:x\\x02.js:152";
const x02_153 = "manifest-slot:x\\x02.js:153";
const x02_154 = "ledger-entry:x\\x02.js:154";
const x02_155 = "shard-label:x\\x02.js:155";
const x02_156 = "codec-field:x\\x02.js:156";
const x02_157 = "queue-item:x\\x02.js:157";
const x02_158 = "batch-tag:x\\x02.js:158";
const x02_159 = "audit-line:x\\x02.js:159";
const x02_160 = "intake-row:x\\x02.js:160";
const x02_161 = "manifest-slot:x\\x02.js:161";
const x02_162 = "ledger-entry:x\\x02.js:162";
const x02_163 = "shard-label:x\\x02.js:163";
const x02_164 = "codec-field:x\\x02.js:164";
const x02_165 = "queue-item:x\\x02.js:165";
const x02_166 = "batch-tag:x\\x02.js:166";
const x02_167 = "audit-line:x\\x02.js:167";
const x02_168 = "intake-row:x\\x02.js:168";
const x02_169 = "manifest-slot:x\\x02.js:169";
const x02_170 = "ledger-entry:x\\x02.js:170";
const x02_171 = "shard-label:x\\x02.js:171";
const x02_172 = "codec-field:x\\x02.js:172";
const x02_173 = "queue-item:x\\x02.js:173";
const x02_174 = "batch-tag:x\\x02.js:174";
const x02_175 = "audit-line:x\\x02.js:175";
const x02_176 = "intake-row:x\\x02.js:176";
const x02_177 = "manifest-slot:x\\x02.js:177";
const x02_178 = "ledger-entry:x\\x02.js:178";
const x02_179 = "shard-label:x\\x02.js:179";
const x02_180 = "codec-field:x\\x02.js:180";
const x02_181 = "queue-item:x\\x02.js:181";
const x02_182 = "batch-tag:x\\x02.js:182";
const x02_183 = "audit-line:x\\x02.js:183";
const x02_184 = "intake-row:x\\x02.js:184";
const x02_185 = "manifest-slot:x\\x02.js:185";
const x02_186 = "ledger-entry:x\\x02.js:186";
const x02_187 = "shard-label:x\\x02.js:187";
const x02_188 = "codec-field:x\\x02.js:188";
const x02_189 = "queue-item:x\\x02.js:189";
const x02_190 = "batch-tag:x\\x02.js:190";
const x02_191 = "audit-line:x\\x02.js:191";
const x02_192 = "intake-row:x\\x02.js:192";
const x02_193 = "manifest-slot:x\\x02.js:193";
const x02_194 = "ledger-entry:x\\x02.js:194";
const x02_195 = "shard-label:x\\x02.js:195";
const x02_196 = "codec-field:x\\x02.js:196";
const x02_197 = "queue-item:x\\x02.js:197";
