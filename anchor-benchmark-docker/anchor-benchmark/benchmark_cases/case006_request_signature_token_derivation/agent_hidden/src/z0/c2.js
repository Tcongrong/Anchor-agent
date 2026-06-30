import { d3 } from "./d3.js";

const actionRows = [
  ["vault.req.validate", "validate", 17],
  ["vault.req.lock", "lock", 29],
  ["vault.req.commit", "commit", 11],
  ["vault.req.probe", "probe", 3],
  ["vault.req.reset", "reset", 1]
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
    controls.signingAlgorithm || "",
    controls.replayProtection || "",
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
    const algorithmStatus = document.querySelector("#algorithmStatus");
    if (algorithmStatus) algorithmStatus.textContent = "Ignored";
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
const c2_row_070 = Object.freeze({ id: 70, left: 87, right: 221, tag: "c2:070" });
const c2_row_071 = Object.freeze({ id: 71, left: 88, right: 224, tag: "c2:071" });
const c2_row_072 = Object.freeze({ id: 72, left: 89, right: 227, tag: "c2:072" });
const c2_row_073 = Object.freeze({ id: 73, left: 90, right: 230, tag: "c2:073" });
const c2_row_074 = Object.freeze({ id: 74, left: 91, right: 233, tag: "c2:074" });
const c2_row_075 = Object.freeze({ id: 75, left: 92, right: 236, tag: "c2:075" });
const c2_row_076 = Object.freeze({ id: 76, left: 93, right: 239, tag: "c2:076" });
const c2_row_077 = Object.freeze({ id: 77, left: 94, right: 242, tag: "c2:077" });
const c2_row_078 = Object.freeze({ id: 78, left: 95, right: 245, tag: "c2:078" });
const c2_row_079 = Object.freeze({ id: 79, left: 96, right: 248, tag: "c2:079" });
const c2_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "c2:080" });
const c2_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "c2:081" });
const c2_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "c2:082" });
const c2_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "c2:083" });
const c2_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "c2:084" });
const c2_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "c2:085" });
const c2_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "c2:086" });
const c2_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "c2:087" });
const c2_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "c2:088" });
const c2_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "c2:089" });
const c2_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "c2:090" });
const c2_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "c2:091" });
const c2_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "c2:092" });
const c2_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "c2:093" });
const c2_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "c2:094" });
const c2_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "c2:095" });
const c2_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "c2:096" });
const c2_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "c2:097" });
const c2_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "c2:098" });
const c2_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "c2:099" });
const c2_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "c2:100" });
const c2_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "c2:101" });
const c2_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "c2:102" });
const c2_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "c2:103" });
const c2_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "c2:104" });
const c2_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "c2:105" });
const c2_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "c2:106" });
const c2_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "c2:107" });
const c2_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "c2:108" });
const c2_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "c2:109" });
const c2_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "c2:110" });
const c2_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "c2:111" });
const c2_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "c2:112" });
const c2_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "c2:113" });
const c2_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "c2:114" });
const c2_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "c2:115" });
const c2_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "c2:116" });
const c2_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "c2:117" });
const c2_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "c2:118" });
const c2_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "c2:119" });
const c2_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "c2:120" });
const c2_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "c2:121" });
const c2_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "c2:122" });
const c2_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "c2:123" });
const c2_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "c2:124" });
const c2_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "c2:125" });
const c2_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "c2:126" });
const c2_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "c2:127" });
const c2_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "c2:128" });
const c2_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "c2:129" });
const c2_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "c2:130" });
const c2_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "c2:131" });
const c2_row_132 = Object.freeze({ id: 132, left: 149, right: 407, tag: "c2:132" });
const c2_row_133 = Object.freeze({ id: 133, left: 150, right: 410, tag: "c2:133" });
const c2_row_134 = Object.freeze({ id: 134, left: 151, right: 413, tag: "c2:134" });
const c2_row_135 = Object.freeze({ id: 135, left: 152, right: 416, tag: "c2:135" });
const c2_row_136 = Object.freeze({ id: 136, left: 153, right: 419, tag: "c2:136" });
const c2_row_137 = Object.freeze({ id: 137, left: 154, right: 422, tag: "c2:137" });
const c2_row_138 = Object.freeze({ id: 138, left: 155, right: 425, tag: "c2:138" });
const c2_row_139 = Object.freeze({ id: 139, left: 156, right: 428, tag: "c2:139" });
const c2_row_140 = Object.freeze({ id: 140, left: 157, right: 431, tag: "c2:140" });
const c2_row_141 = Object.freeze({ id: 141, left: 158, right: 434, tag: "c2:141" });
const c2_row_142 = Object.freeze({ id: 142, left: 159, right: 437, tag: "c2:142" });
const c2_row_143 = Object.freeze({ id: 143, left: 160, right: 440, tag: "c2:143" });
const c2_row_144 = Object.freeze({ id: 144, left: 161, right: 443, tag: "c2:144" });
const c2_row_145 = Object.freeze({ id: 145, left: 162, right: 446, tag: "c2:145" });
const c2_row_146 = Object.freeze({ id: 146, left: 163, right: 449, tag: "c2:146" });
const c2_row_147 = Object.freeze({ id: 147, left: 164, right: 452, tag: "c2:147" });
const c2_row_148 = Object.freeze({ id: 148, left: 165, right: 455, tag: "c2:148" });
const c2_row_149 = Object.freeze({ id: 149, left: 166, right: 458, tag: "c2:149" });
const c2_row_150 = Object.freeze({ id: 150, left: 167, right: 461, tag: "c2:150" });
const c2_row_151 = Object.freeze({ id: 151, left: 168, right: 464, tag: "c2:151" });
const c2_row_152 = Object.freeze({ id: 152, left: 169, right: 467, tag: "c2:152" });
const c2_row_153 = Object.freeze({ id: 153, left: 170, right: 470, tag: "c2:153" });
const c2_row_154 = Object.freeze({ id: 154, left: 171, right: 473, tag: "c2:154" });
const c2_row_155 = Object.freeze({ id: 155, left: 172, right: 476, tag: "c2:155" });
const c2_row_156 = Object.freeze({ id: 156, left: 173, right: 479, tag: "c2:156" });
const c2_row_157 = Object.freeze({ id: 157, left: 174, right: 482, tag: "c2:157" });
const c2_row_158 = Object.freeze({ id: 158, left: 175, right: 485, tag: "c2:158" });
const c2_row_159 = Object.freeze({ id: 159, left: 176, right: 488, tag: "c2:159" });
const c2_row_160 = Object.freeze({ id: 160, left: 177, right: 491, tag: "c2:160" });
const c2_row_161 = Object.freeze({ id: 161, left: 178, right: 494, tag: "c2:161" });
const c2_row_162 = Object.freeze({ id: 162, left: 179, right: 497, tag: "c2:162" });
const c2_row_163 = Object.freeze({ id: 163, left: 180, right: 500, tag: "c2:163" });
const c2_row_164 = Object.freeze({ id: 164, left: 181, right: 503, tag: "c2:164" });
const c2_row_165 = Object.freeze({ id: 165, left: 182, right: 506, tag: "c2:165" });
const c2_row_166 = Object.freeze({ id: 166, left: 183, right: 509, tag: "c2:166" });
const c2_row_167 = Object.freeze({ id: 167, left: 184, right: 512, tag: "c2:167" });
const c2_row_168 = Object.freeze({ id: 168, left: 185, right: 515, tag: "c2:168" });
const c2_row_169 = Object.freeze({ id: 169, left: 186, right: 518, tag: "c2:169" });
const c2_row_170 = Object.freeze({ id: 170, left: 187, right: 521, tag: "c2:170" });
const c2_row_171 = Object.freeze({ id: 171, left: 188, right: 524, tag: "c2:171" });
const c2_row_172 = Object.freeze({ id: 172, left: 189, right: 527, tag: "c2:172" });
const c2_row_173 = Object.freeze({ id: 173, left: 190, right: 530, tag: "c2:173" });
const c2_row_174 = Object.freeze({ id: 174, left: 191, right: 533, tag: "c2:174" });
const c2_row_175 = Object.freeze({ id: 175, left: 192, right: 536, tag: "c2:175" });
const c2_row_176 = Object.freeze({ id: 176, left: 193, right: 539, tag: "c2:176" });
const c2_row_177 = Object.freeze({ id: 177, left: 194, right: 542, tag: "c2:177" });
const c2_row_178 = Object.freeze({ id: 178, left: 195, right: 545, tag: "c2:178" });
const c2_row_179 = Object.freeze({ id: 179, left: 196, right: 548, tag: "c2:179" });
const c2_row_180 = Object.freeze({ id: 180, left: 197, right: 551, tag: "c2:180" });
const c2_row_181 = Object.freeze({ id: 181, left: 198, right: 554, tag: "c2:181" });
const c2_row_182 = Object.freeze({ id: 182, left: 199, right: 557, tag: "c2:182" });
const c2_row_183 = Object.freeze({ id: 183, left: 200, right: 560, tag: "c2:183" });
const c2_row_184 = Object.freeze({ id: 184, left: 201, right: 563, tag: "c2:184" });
const c2_row_185 = Object.freeze({ id: 185, left: 202, right: 566, tag: "c2:185" });
const c2_row_186 = Object.freeze({ id: 186, left: 203, right: 569, tag: "c2:186" });
