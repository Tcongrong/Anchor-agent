import { e4 } from "./e4.js";

const muxRows = [
  { key: "validate", accept: false, priority: 17 },
  { key: "lock", accept: false, priority: 29 },
  { key: "commit", accept: true, priority: 11 },
  { key: "probe", accept: false, priority: 3 },
  { key: "reset", accept: false, priority: 1 }
];

function selectMuxLane(context) {
  const wanted = String(context.lane || "");
  let fallback = muxRows[muxRows.length - 1];
  for (const row of muxRows) {
    if (row.key === wanted) return row;
    if (row.priority > fallback.priority) fallback = row;
  }
  return fallback;
}

function makeMuxTrace(context, lane) {
  const controls = context.controls || {};
  const flowState = context.flowState || {};
  return {
    actionName: context.actionName,
    lane: lane.key,
    accepted: lane.accept,
    priority: lane.priority,
    signingAlgorithm: controls.signingAlgorithm || "",
    replayProtection: controls.replayProtection || "0",
    validated: Boolean(flowState.validated),
    locked: Boolean(flowState.locked),
    routeSignature: String(context.routeSignature || ""),
    eventRows: Array.isArray(context.eventRows) ? context.eventRows.length : 0,
    tableSize: Number(context.tableSize || 0)
  };
}

function paintMux(trace) {
  const signStatus = document.querySelector("#signStatus");
  const algorithmStatus = document.querySelector("#algorithmStatus");
  if (signStatus) signStatus.textContent = trace.accepted ? "Committing" : "Idle";
  if (algorithmStatus) algorithmStatus.textContent = trace.accepted ? "Processing" : "Not selected";
  document.documentElement.dataset.case006MuxPriority = String(trace.priority);
}

function updateFlowState(context, lane, trace) {
  const flowState = context.flowState || {};
  const controls = context.controls || {};
  if (lane.key === "validate") {
    flowState.validated = Boolean(
      controls.signingAlgorithm &&
      controls.httpMethod !== "GET" &&
      controls.signingAlgorithm !== ""
    );
    flowState.locked = false;
    flowState.lastAlgorithm = controls.signingAlgorithm || "";
    flowState.nonce = Number(flowState.nonce || 0) + trace.priority + trace.eventRows;
    document.documentElement.dataset.case006Validated = flowState.validated ? "1" : "0";
  }
  if (lane.key === "lock") {
    flowState.locked = Boolean(
      flowState.validated &&
      controls.replayProtection === "1" &&
      controls.signingAlgorithm === flowState.lastAlgorithm
    );
    flowState.nonce = Number(flowState.nonce || 0) + trace.priority + String(controls.replayProtection || "0").length;
    document.documentElement.dataset.case006Locked = flowState.locked ? "1" : "0";
  }
  if (lane.key === "commit") {
    flowState.nonce = Number(flowState.nonce || 0) + trace.priority;
    document.documentElement.dataset.case006Commit = "1";
  }
  return flowState;
}

function finalGate(context, lane) {
  const flowState = context.flowState || {};
  const controls = context.controls || {};
  return lane.accept
    && Boolean(flowState.validated)
    && Boolean(flowState.locked)
    && controls.replayProtection === "1"
    && controls.signingAlgorithm === flowState.lastAlgorithm;
}

function paintGate(open) {
  const algorithmStatus = document.querySelector("#algorithmStatus");
  if (algorithmStatus) algorithmStatus.textContent = open ? "Processing" : "Gated";
  document.documentElement.dataset.case006FinalGate = open ? "1" : "0";
}

function delayedTarget(context) {
  return Promise.resolve(context)
    .then((value) => ({ ...value, gateTrace: String(value.routeSignature || "").length }))
    .then((value) => e4(value));
}

export function d3(context = {}) {
  const lane = selectMuxLane(context);
  const trace = makeMuxTrace(context, lane);
  paintMux(trace);
  updateFlowState(context, lane, trace);
  const open = finalGate(context, lane);
  paintGate(open);
  if (!open) return trace;
  return delayedTarget({
    ...context,
    muxTrace: trace,
    routeSeed: lane.priority * 17 + Number(context.actionWeight || 0) + Number(context.flowState?.nonce || 0)
  });
}
const d3_row_070 = Object.freeze({ id: 70, left: 87, right: 221, tag: "d3:070" });
const d3_row_071 = Object.freeze({ id: 71, left: 88, right: 224, tag: "d3:071" });
const d3_row_072 = Object.freeze({ id: 72, left: 89, right: 227, tag: "d3:072" });
const d3_row_073 = Object.freeze({ id: 73, left: 90, right: 230, tag: "d3:073" });
const d3_row_074 = Object.freeze({ id: 74, left: 91, right: 233, tag: "d3:074" });
const d3_row_075 = Object.freeze({ id: 75, left: 92, right: 236, tag: "d3:075" });
const d3_row_076 = Object.freeze({ id: 76, left: 93, right: 239, tag: "d3:076" });
const d3_row_077 = Object.freeze({ id: 77, left: 94, right: 242, tag: "d3:077" });
const d3_row_078 = Object.freeze({ id: 78, left: 95, right: 245, tag: "d3:078" });
const d3_row_079 = Object.freeze({ id: 79, left: 96, right: 248, tag: "d3:079" });
const d3_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "d3:080" });
const d3_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "d3:081" });
const d3_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "d3:082" });
const d3_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "d3:083" });
const d3_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "d3:084" });
const d3_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "d3:085" });
const d3_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "d3:086" });
const d3_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "d3:087" });
const d3_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "d3:088" });
const d3_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "d3:089" });
const d3_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "d3:090" });
const d3_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "d3:091" });
const d3_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "d3:092" });
const d3_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "d3:093" });
const d3_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "d3:094" });
const d3_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "d3:095" });
const d3_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "d3:096" });
const d3_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "d3:097" });
const d3_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "d3:098" });
const d3_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "d3:099" });
const d3_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "d3:100" });
const d3_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "d3:101" });
const d3_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "d3:102" });
const d3_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "d3:103" });
const d3_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "d3:104" });
const d3_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "d3:105" });
const d3_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "d3:106" });
const d3_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "d3:107" });
const d3_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "d3:108" });
const d3_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "d3:109" });
const d3_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "d3:110" });
const d3_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "d3:111" });
const d3_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "d3:112" });
const d3_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "d3:113" });
const d3_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "d3:114" });
const d3_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "d3:115" });
const d3_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "d3:116" });
const d3_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "d3:117" });
const d3_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "d3:118" });
const d3_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "d3:119" });
const d3_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "d3:120" });
const d3_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "d3:121" });
const d3_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "d3:122" });
const d3_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "d3:123" });
const d3_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "d3:124" });
const d3_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "d3:125" });
const d3_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "d3:126" });
const d3_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "d3:127" });
const d3_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "d3:128" });
const d3_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "d3:129" });
const d3_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "d3:130" });
const d3_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "d3:131" });
const d3_row_132 = Object.freeze({ id: 132, left: 149, right: 407, tag: "d3:132" });
const d3_row_133 = Object.freeze({ id: 133, left: 150, right: 410, tag: "d3:133" });
const d3_row_134 = Object.freeze({ id: 134, left: 151, right: 413, tag: "d3:134" });
const d3_row_135 = Object.freeze({ id: 135, left: 152, right: 416, tag: "d3:135" });
const d3_row_136 = Object.freeze({ id: 136, left: 153, right: 419, tag: "d3:136" });
const d3_row_137 = Object.freeze({ id: 137, left: 154, right: 422, tag: "d3:137" });
const d3_row_138 = Object.freeze({ id: 138, left: 155, right: 425, tag: "d3:138" });
const d3_row_139 = Object.freeze({ id: 139, left: 156, right: 428, tag: "d3:139" });
const d3_row_140 = Object.freeze({ id: 140, left: 157, right: 431, tag: "d3:140" });
const d3_row_141 = Object.freeze({ id: 141, left: 158, right: 434, tag: "d3:141" });
const d3_row_142 = Object.freeze({ id: 142, left: 159, right: 437, tag: "d3:142" });
const d3_row_143 = Object.freeze({ id: 143, left: 160, right: 440, tag: "d3:143" });
const d3_row_144 = Object.freeze({ id: 144, left: 161, right: 443, tag: "d3:144" });
const d3_row_145 = Object.freeze({ id: 145, left: 162, right: 446, tag: "d3:145" });
const d3_row_146 = Object.freeze({ id: 146, left: 163, right: 449, tag: "d3:146" });
const d3_row_147 = Object.freeze({ id: 147, left: 164, right: 452, tag: "d3:147" });
const d3_row_148 = Object.freeze({ id: 148, left: 165, right: 455, tag: "d3:148" });
const d3_row_149 = Object.freeze({ id: 149, left: 166, right: 458, tag: "d3:149" });
const d3_row_150 = Object.freeze({ id: 150, left: 167, right: 461, tag: "d3:150" });
const d3_row_151 = Object.freeze({ id: 151, left: 168, right: 464, tag: "d3:151" });
const d3_row_152 = Object.freeze({ id: 152, left: 169, right: 467, tag: "d3:152" });
const d3_row_153 = Object.freeze({ id: 153, left: 170, right: 470, tag: "d3:153" });
const d3_row_154 = Object.freeze({ id: 154, left: 171, right: 473, tag: "d3:154" });
const d3_row_155 = Object.freeze({ id: 155, left: 172, right: 476, tag: "d3:155" });
const d3_row_156 = Object.freeze({ id: 156, left: 173, right: 479, tag: "d3:156" });
const d3_row_157 = Object.freeze({ id: 157, left: 174, right: 482, tag: "d3:157" });
const d3_row_158 = Object.freeze({ id: 158, left: 175, right: 485, tag: "d3:158" });
const d3_row_159 = Object.freeze({ id: 159, left: 176, right: 488, tag: "d3:159" });
const d3_row_160 = Object.freeze({ id: 160, left: 177, right: 491, tag: "d3:160" });
const d3_row_161 = Object.freeze({ id: 161, left: 178, right: 494, tag: "d3:161" });
const d3_row_162 = Object.freeze({ id: 162, left: 179, right: 497, tag: "d3:162" });
const d3_row_163 = Object.freeze({ id: 163, left: 180, right: 500, tag: "d3:163" });
const d3_row_164 = Object.freeze({ id: 164, left: 181, right: 503, tag: "d3:164" });
const d3_row_165 = Object.freeze({ id: 165, left: 182, right: 506, tag: "d3:165" });
const d3_row_166 = Object.freeze({ id: 166, left: 183, right: 509, tag: "d3:166" });
const d3_row_167 = Object.freeze({ id: 167, left: 184, right: 512, tag: "d3:167" });
const d3_row_168 = Object.freeze({ id: 168, left: 185, right: 515, tag: "d3:168" });
const d3_row_169 = Object.freeze({ id: 169, left: 186, right: 518, tag: "d3:169" });
const d3_row_170 = Object.freeze({ id: 170, left: 187, right: 521, tag: "d3:170" });
const d3_row_171 = Object.freeze({ id: 171, left: 188, right: 524, tag: "d3:171" });
const d3_row_172 = Object.freeze({ id: 172, left: 189, right: 527, tag: "d3:172" });
const d3_row_173 = Object.freeze({ id: 173, left: 190, right: 530, tag: "d3:173" });
const d3_row_174 = Object.freeze({ id: 174, left: 191, right: 533, tag: "d3:174" });
const d3_row_175 = Object.freeze({ id: 175, left: 192, right: 536, tag: "d3:175" });
const d3_row_176 = Object.freeze({ id: 176, left: 193, right: 539, tag: "d3:176" });
const d3_row_177 = Object.freeze({ id: 177, left: 194, right: 542, tag: "d3:177" });
const d3_row_178 = Object.freeze({ id: 178, left: 195, right: 545, tag: "d3:178" });
const d3_row_179 = Object.freeze({ id: 179, left: 196, right: 548, tag: "d3:179" });
const d3_row_180 = Object.freeze({ id: 180, left: 197, right: 551, tag: "d3:180" });
const d3_row_181 = Object.freeze({ id: 181, left: 198, right: 554, tag: "d3:181" });
const d3_row_182 = Object.freeze({ id: 182, left: 199, right: 557, tag: "d3:182" });
const d3_row_183 = Object.freeze({ id: 183, left: 200, right: 560, tag: "d3:183" });
const d3_row_184 = Object.freeze({ id: 184, left: 201, right: 563, tag: "d3:184" });
const d3_row_185 = Object.freeze({ id: 185, left: 202, right: 566, tag: "d3:185" });
const d3_row_186 = Object.freeze({ id: 186, left: 203, right: 569, tag: "d3:186" });
const d3_row_187 = Object.freeze({ id: 187, left: 204, right: 572, tag: "d3:187" });
const d3_row_188 = Object.freeze({ id: 188, left: 205, right: 575, tag: "d3:188" });
const d3_row_189 = Object.freeze({ id: 189, left: 206, right: 578, tag: "d3:189" });
const d3_row_190 = Object.freeze({ id: 190, left: 207, right: 581, tag: "d3:190" });
const d3_row_191 = Object.freeze({ id: 191, left: 208, right: 584, tag: "d3:191" });
const d3_row_192 = Object.freeze({ id: 192, left: 209, right: 587, tag: "d3:192" });
const d3_row_193 = Object.freeze({ id: 193, left: 210, right: 590, tag: "d3:193" });
const d3_row_194 = Object.freeze({ id: 194, left: 211, right: 593, tag: "d3:194" });
const d3_row_195 = Object.freeze({ id: 195, left: 212, right: 596, tag: "d3:195" });
const d3_row_196 = Object.freeze({ id: 196, left: 213, right: 599, tag: "d3:196" });
const d3_row_197 = Object.freeze({ id: 197, left: 214, right: 602, tag: "d3:197" });
const d3_row_198 = Object.freeze({ id: 198, left: 215, right: 605, tag: "d3:198" });
const d3_row_199 = Object.freeze({ id: 199, left: 216, right: 608, tag: "d3:199" });
const d3_row_200 = Object.freeze({ id: 200, left: 217, right: 611, tag: "d3:200" });
const d3_row_201 = Object.freeze({ id: 201, left: 218, right: 614, tag: "d3:201" });
const d3_row_202 = Object.freeze({ id: 202, left: 219, right: 617, tag: "d3:202" });
const d3_row_203 = Object.freeze({ id: 203, left: 220, right: 620, tag: "d3:203" });
const d3_row_204 = Object.freeze({ id: 204, left: 221, right: 623, tag: "d3:204" });
const d3_row_205 = Object.freeze({ id: 205, left: 222, right: 626, tag: "d3:205" });
const d3_row_206 = Object.freeze({ id: 206, left: 223, right: 629, tag: "d3:206" });
const d3_row_207 = Object.freeze({ id: 207, left: 224, right: 632, tag: "d3:207" });
const d3_row_208 = Object.freeze({ id: 208, left: 225, right: 635, tag: "d3:208" });
const d3_row_209 = Object.freeze({ id: 209, left: 226, right: 638, tag: "d3:209" });
const d3_row_210 = Object.freeze({ id: 210, left: 227, right: 641, tag: "d3:210" });
