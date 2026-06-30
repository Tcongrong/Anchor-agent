import { d3 } from "./d3.js";

const actionRows = [
  ["byte.pipe.scan", "scan", 29],
  ["byte.pipe.preview", "preview", 31],
  ["byte.pipe.seal", "seal", 37],
  ["byte.pipe.commit", "commit", 43],
  ["byte.pipe.reset", "reset", 5],
  ["byte.pipe.shadow", "shadow", 3]
];

function makeActionTable() {
  const table = new Map();
  for (const row of actionRows) {
    table.set(row[0], {
      lane: row[1],
      weight: row[2],
      run(context) {
        return d3({ ...context, lane: row[1], actionWeight: row[2] });
      }
    });
  }
  return table;
}

const actionTable = makeActionTable();

function summarizeTable() {
  const summary = [];
  for (const [name, entry] of actionTable.entries()) {
    summary.push(name + ":" + entry.lane + ":" + entry.weight);
  }
  return summary.join("|");
}

function routeSignature(context, entry) {
  const controls = context.controls || {};
  return [
    entry.lane,
    String(entry.weight),
    controls.profileMode || "",
    controls.consent || "",
    controls.normalize || "",
    controls.codec || "",
    controls.shard || "",
    controls.batchKey || "",
    String(Array.isArray(context.eventRows) ? context.eventRows.length : 0),
    String(context.boot && context.boot.lane || 0)
  ].join("#");
}

export function c2(context = {}) {
  const actionName = String(context.actionName || "");
  const entry = actionTable.get(actionName);
  document.documentElement.dataset.case006ActionRows = String(actionTable.size);
  document.documentElement.dataset.case006ActionSummary = String(summarizeTable().length);
  if (!entry) {
    const manifestStatus = document.querySelector("#manifestStatus");
    if (manifestStatus) manifestStatus.textContent = "Ignored";
    return null;
  }
  return entry.run({
    ...context,
    actionName,
    routeSignature: routeSignature(context, entry),
    tableSize: actionTable.size,
    tableSummary: summarizeTable()
  });
}

export function c2TableSize() {
  return actionTable.size;
}
const c2_070 = "batch-tag:c2.js:070";
const c2_071 = "audit-line:c2.js:071";
const c2_072 = "intake-row:c2.js:072";
const c2_073 = "manifest-slot:c2.js:073";
const c2_074 = "ledger-entry:c2.js:074";
const c2_075 = "shard-label:c2.js:075";
const c2_076 = "codec-field:c2.js:076";
const c2_077 = "queue-item:c2.js:077";
const c2_078 = "batch-tag:c2.js:078";
const c2_079 = "audit-line:c2.js:079";
const c2_080 = "intake-row:c2.js:080";
const c2_081 = "manifest-slot:c2.js:081";
const c2_082 = "ledger-entry:c2.js:082";
const c2_083 = "shard-label:c2.js:083";
const c2_084 = "codec-field:c2.js:084";
const c2_085 = "queue-item:c2.js:085";
const c2_086 = "batch-tag:c2.js:086";
const c2_087 = "audit-line:c2.js:087";
const c2_088 = "intake-row:c2.js:088";
const c2_089 = "manifest-slot:c2.js:089";
const c2_090 = "ledger-entry:c2.js:090";
const c2_091 = "shard-label:c2.js:091";
const c2_092 = "codec-field:c2.js:092";
const c2_093 = "queue-item:c2.js:093";
const c2_094 = "batch-tag:c2.js:094";
const c2_095 = "audit-line:c2.js:095";
const c2_096 = "intake-row:c2.js:096";
const c2_097 = "manifest-slot:c2.js:097";
const c2_098 = "ledger-entry:c2.js:098";
const c2_099 = "shard-label:c2.js:099";
const c2_100 = "codec-field:c2.js:100";
const c2_101 = "queue-item:c2.js:101";
const c2_102 = "batch-tag:c2.js:102";
const c2_103 = "audit-line:c2.js:103";
const c2_104 = "intake-row:c2.js:104";
const c2_105 = "manifest-slot:c2.js:105";
const c2_106 = "ledger-entry:c2.js:106";
const c2_107 = "shard-label:c2.js:107";
const c2_108 = "codec-field:c2.js:108";
const c2_109 = "queue-item:c2.js:109";
const c2_110 = "batch-tag:c2.js:110";
const c2_111 = "audit-line:c2.js:111";
const c2_112 = "intake-row:c2.js:112";
const c2_113 = "manifest-slot:c2.js:113";
const c2_114 = "ledger-entry:c2.js:114";
const c2_115 = "shard-label:c2.js:115";
const c2_116 = "codec-field:c2.js:116";
const c2_117 = "queue-item:c2.js:117";
const c2_118 = "batch-tag:c2.js:118";
const c2_119 = "audit-line:c2.js:119";
const c2_120 = "intake-row:c2.js:120";
const c2_121 = "manifest-slot:c2.js:121";
const c2_122 = "ledger-entry:c2.js:122";
const c2_123 = "shard-label:c2.js:123";
const c2_124 = "codec-field:c2.js:124";
const c2_125 = "queue-item:c2.js:125";
const c2_126 = "batch-tag:c2.js:126";
const c2_127 = "audit-line:c2.js:127";
const c2_128 = "intake-row:c2.js:128";
const c2_129 = "manifest-slot:c2.js:129";
const c2_130 = "ledger-entry:c2.js:130";
const c2_131 = "shard-label:c2.js:131";
const c2_132 = "codec-field:c2.js:132";
const c2_133 = "queue-item:c2.js:133";
const c2_134 = "batch-tag:c2.js:134";
const c2_135 = "audit-line:c2.js:135";
const c2_136 = "intake-row:c2.js:136";
const c2_137 = "manifest-slot:c2.js:137";
const c2_138 = "ledger-entry:c2.js:138";
const c2_139 = "shard-label:c2.js:139";
const c2_140 = "codec-field:c2.js:140";
const c2_141 = "queue-item:c2.js:141";
const c2_142 = "batch-tag:c2.js:142";
const c2_143 = "audit-line:c2.js:143";
const c2_144 = "intake-row:c2.js:144";
const c2_145 = "manifest-slot:c2.js:145";
const c2_146 = "ledger-entry:c2.js:146";
const c2_147 = "shard-label:c2.js:147";
const c2_148 = "codec-field:c2.js:148";
const c2_149 = "queue-item:c2.js:149";
const c2_150 = "batch-tag:c2.js:150";
const c2_151 = "audit-line:c2.js:151";
const c2_152 = "intake-row:c2.js:152";
const c2_153 = "manifest-slot:c2.js:153";
const c2_154 = "ledger-entry:c2.js:154";
const c2_155 = "shard-label:c2.js:155";
const c2_156 = "codec-field:c2.js:156";
const c2_157 = "queue-item:c2.js:157";
const c2_158 = "batch-tag:c2.js:158";
const c2_159 = "audit-line:c2.js:159";
const c2_160 = "intake-row:c2.js:160";
const c2_161 = "manifest-slot:c2.js:161";
const c2_162 = "ledger-entry:c2.js:162";
const c2_163 = "shard-label:c2.js:163";
const c2_164 = "codec-field:c2.js:164";
const c2_165 = "queue-item:c2.js:165";
const c2_166 = "batch-tag:c2.js:166";
const c2_167 = "audit-line:c2.js:167";
const c2_168 = "intake-row:c2.js:168";
const c2_169 = "manifest-slot:c2.js:169";
const c2_170 = "ledger-entry:c2.js:170";
const c2_171 = "shard-label:c2.js:171";
const c2_172 = "codec-field:c2.js:172";
const c2_173 = "queue-item:c2.js:173";
const c2_174 = "batch-tag:c2.js:174";
const c2_175 = "audit-line:c2.js:175";
const c2_176 = "intake-row:c2.js:176";
const c2_177 = "manifest-slot:c2.js:177";
const c2_178 = "ledger-entry:c2.js:178";
const c2_179 = "shard-label:c2.js:179";
const c2_180 = "codec-field:c2.js:180";
const c2_181 = "queue-item:c2.js:181";
const c2_182 = "batch-tag:c2.js:182";
const c2_183 = "audit-line:c2.js:183";
const c2_184 = "intake-row:c2.js:184";
const c2_185 = "manifest-slot:c2.js:185";
const c2_186 = "ledger-entry:c2.js:186";
