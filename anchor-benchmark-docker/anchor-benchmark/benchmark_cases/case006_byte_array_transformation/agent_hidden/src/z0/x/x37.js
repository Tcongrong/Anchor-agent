const localOrder = [3, 0, 5, 4, 1, 2];
const localKeys = ["n", "d", "c", "e", "s", "l"];
const localPrefix = "uf_";

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
    parts.push(key + "." + value + "|" + String(value.length + 37));
  }
  parts.push("lane" + String(context && context.lane || 0));
  return parts.join("~");
}

export function x37(tuple, context = {}) {
  const text = source(tuple, context);
  let a = (0x6d2b776c ^ text.length) >>> 0;
  let b = (0x1b875412 + 37) >>> 0;
  let d = (0x85ebe634 ^ 592) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text.charCodeAt(i);
    a = Math.imul(a ^ ch ^ i, 0x7feb352d) >>> 0;
    a = rot(a, ((i + 37) % 13) + 5);
    b = Math.imul((b + ch + rot(a, (i % 7) + 3)) >>> 0, 0x846ca68b) >>> 0;
    d = Math.imul((d + b + rot(ch ^ a, 3)) >>> 0, 0x9e3779b1) >>> 0;
  }
  const body = ((a ^ b ^ d) >>> 0).toString(36).padStart(8, "0").slice(-8);
  return localPrefix + body;
}
const x37_060 = "codec-field:x\\x37.js:060";
const x37_061 = "queue-item:x\\x37.js:061";
const x37_062 = "batch-tag:x\\x37.js:062";
const x37_063 = "audit-line:x\\x37.js:063";
const x37_064 = "intake-row:x\\x37.js:064";
const x37_065 = "manifest-slot:x\\x37.js:065";
const x37_066 = "ledger-entry:x\\x37.js:066";
const x37_067 = "shard-label:x\\x37.js:067";
const x37_068 = "codec-field:x\\x37.js:068";
const x37_069 = "queue-item:x\\x37.js:069";
const x37_070 = "batch-tag:x\\x37.js:070";
const x37_071 = "audit-line:x\\x37.js:071";
const x37_072 = "intake-row:x\\x37.js:072";
const x37_073 = "manifest-slot:x\\x37.js:073";
const x37_074 = "ledger-entry:x\\x37.js:074";
const x37_075 = "shard-label:x\\x37.js:075";
const x37_076 = "codec-field:x\\x37.js:076";
const x37_077 = "queue-item:x\\x37.js:077";
const x37_078 = "batch-tag:x\\x37.js:078";
const x37_079 = "audit-line:x\\x37.js:079";
const x37_080 = "intake-row:x\\x37.js:080";
const x37_081 = "manifest-slot:x\\x37.js:081";
const x37_082 = "ledger-entry:x\\x37.js:082";
const x37_083 = "shard-label:x\\x37.js:083";
const x37_084 = "codec-field:x\\x37.js:084";
const x37_085 = "queue-item:x\\x37.js:085";
const x37_086 = "batch-tag:x\\x37.js:086";
const x37_087 = "audit-line:x\\x37.js:087";
const x37_088 = "intake-row:x\\x37.js:088";
const x37_089 = "manifest-slot:x\\x37.js:089";
const x37_090 = "ledger-entry:x\\x37.js:090";
const x37_091 = "shard-label:x\\x37.js:091";
const x37_092 = "codec-field:x\\x37.js:092";
const x37_093 = "queue-item:x\\x37.js:093";
const x37_094 = "batch-tag:x\\x37.js:094";
const x37_095 = "audit-line:x\\x37.js:095";
const x37_096 = "intake-row:x\\x37.js:096";
const x37_097 = "manifest-slot:x\\x37.js:097";
const x37_098 = "ledger-entry:x\\x37.js:098";
const x37_099 = "shard-label:x\\x37.js:099";
const x37_100 = "codec-field:x\\x37.js:100";
const x37_101 = "queue-item:x\\x37.js:101";
const x37_102 = "batch-tag:x\\x37.js:102";
const x37_103 = "audit-line:x\\x37.js:103";
const x37_104 = "intake-row:x\\x37.js:104";
const x37_105 = "manifest-slot:x\\x37.js:105";
const x37_106 = "ledger-entry:x\\x37.js:106";
const x37_107 = "shard-label:x\\x37.js:107";
const x37_108 = "codec-field:x\\x37.js:108";
const x37_109 = "queue-item:x\\x37.js:109";
const x37_110 = "batch-tag:x\\x37.js:110";
const x37_111 = "audit-line:x\\x37.js:111";
const x37_112 = "intake-row:x\\x37.js:112";
const x37_113 = "manifest-slot:x\\x37.js:113";
const x37_114 = "ledger-entry:x\\x37.js:114";
const x37_115 = "shard-label:x\\x37.js:115";
const x37_116 = "codec-field:x\\x37.js:116";
const x37_117 = "queue-item:x\\x37.js:117";
const x37_118 = "batch-tag:x\\x37.js:118";
const x37_119 = "audit-line:x\\x37.js:119";
const x37_120 = "intake-row:x\\x37.js:120";
const x37_121 = "manifest-slot:x\\x37.js:121";
const x37_122 = "ledger-entry:x\\x37.js:122";
const x37_123 = "shard-label:x\\x37.js:123";
const x37_124 = "codec-field:x\\x37.js:124";
const x37_125 = "queue-item:x\\x37.js:125";
const x37_126 = "batch-tag:x\\x37.js:126";
const x37_127 = "audit-line:x\\x37.js:127";
const x37_128 = "intake-row:x\\x37.js:128";
const x37_129 = "manifest-slot:x\\x37.js:129";
const x37_130 = "ledger-entry:x\\x37.js:130";
const x37_131 = "shard-label:x\\x37.js:131";
const x37_132 = "codec-field:x\\x37.js:132";
const x37_133 = "queue-item:x\\x37.js:133";
const x37_134 = "batch-tag:x\\x37.js:134";
const x37_135 = "audit-line:x\\x37.js:135";
const x37_136 = "intake-row:x\\x37.js:136";
const x37_137 = "manifest-slot:x\\x37.js:137";
const x37_138 = "ledger-entry:x\\x37.js:138";
const x37_139 = "shard-label:x\\x37.js:139";
const x37_140 = "codec-field:x\\x37.js:140";
const x37_141 = "queue-item:x\\x37.js:141";
const x37_142 = "batch-tag:x\\x37.js:142";
const x37_143 = "audit-line:x\\x37.js:143";
const x37_144 = "intake-row:x\\x37.js:144";
const x37_145 = "manifest-slot:x\\x37.js:145";
const x37_146 = "ledger-entry:x\\x37.js:146";
const x37_147 = "shard-label:x\\x37.js:147";
const x37_148 = "codec-field:x\\x37.js:148";
const x37_149 = "queue-item:x\\x37.js:149";
const x37_150 = "batch-tag:x\\x37.js:150";
const x37_151 = "audit-line:x\\x37.js:151";
const x37_152 = "intake-row:x\\x37.js:152";
const x37_153 = "manifest-slot:x\\x37.js:153";
const x37_154 = "ledger-entry:x\\x37.js:154";
const x37_155 = "shard-label:x\\x37.js:155";
const x37_156 = "codec-field:x\\x37.js:156";
const x37_157 = "queue-item:x\\x37.js:157";
const x37_158 = "batch-tag:x\\x37.js:158";
const x37_159 = "audit-line:x\\x37.js:159";
const x37_160 = "intake-row:x\\x37.js:160";
const x37_161 = "manifest-slot:x\\x37.js:161";
const x37_162 = "ledger-entry:x\\x37.js:162";
const x37_163 = "shard-label:x\\x37.js:163";
const x37_164 = "codec-field:x\\x37.js:164";
const x37_165 = "queue-item:x\\x37.js:165";
const x37_166 = "batch-tag:x\\x37.js:166";
const x37_167 = "audit-line:x\\x37.js:167";
const x37_168 = "intake-row:x\\x37.js:168";
const x37_169 = "manifest-slot:x\\x37.js:169";
const x37_170 = "ledger-entry:x\\x37.js:170";
const x37_171 = "shard-label:x\\x37.js:171";
const x37_172 = "codec-field:x\\x37.js:172";
const x37_173 = "queue-item:x\\x37.js:173";
const x37_174 = "batch-tag:x\\x37.js:174";
const x37_175 = "audit-line:x\\x37.js:175";
const x37_176 = "intake-row:x\\x37.js:176";
const x37_177 = "manifest-slot:x\\x37.js:177";
const x37_178 = "ledger-entry:x\\x37.js:178";
const x37_179 = "shard-label:x\\x37.js:179";
const x37_180 = "codec-field:x\\x37.js:180";
const x37_181 = "queue-item:x\\x37.js:181";
const x37_182 = "batch-tag:x\\x37.js:182";
const x37_183 = "audit-line:x\\x37.js:183";
const x37_184 = "intake-row:x\\x37.js:184";
const x37_185 = "manifest-slot:x\\x37.js:185";
const x37_186 = "ledger-entry:x\\x37.js:186";
const x37_187 = "shard-label:x\\x37.js:187";
const x37_188 = "codec-field:x\\x37.js:188";
const x37_189 = "queue-item:x\\x37.js:189";
const x37_190 = "batch-tag:x\\x37.js:190";
const x37_191 = "audit-line:x\\x37.js:191";
const x37_192 = "intake-row:x\\x37.js:192";
const x37_193 = "manifest-slot:x\\x37.js:193";
const x37_194 = "ledger-entry:x\\x37.js:194";
const x37_195 = "shard-label:x\\x37.js:195";
const x37_196 = "codec-field:x\\x37.js:196";
const x37_197 = "queue-item:x\\x37.js:197";
