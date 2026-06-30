import { e4 } from "./e4.js";

const muxRows = [
  { key: "scan", accept: false, priority: 29 },
  { key: "preview", accept: false, priority: 5 },
  { key: "seal", accept: false, priority: 23 },
  { key: "commit", accept: true, priority: 41 },
  { key: "reset", accept: false, priority: 2 },
  { key: "shadow", accept: false, priority: 1 }
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
    profileMode: controls.profileMode || "",
    consent: controls.consent || "0",
    normalize: controls.normalize || "0",
    codec: controls.codec || "",
    shard: controls.shard || "",
    batchKey: controls.batchKey || "",
    scanned: Boolean(flowState.scanned),
    previewed: Boolean(flowState.previewed),
    sealed: Boolean(flowState.sealed),
    routeSignature: String(context.routeSignature || ""),
    eventRows: Array.isArray(context.eventRows) ? context.eventRows.length : 0,
    tableSize: Number(context.tableSize || 0)
  };
}

function paintMux(trace) {
  const queueStatus = document.querySelector("#queueStatus");
  const manifestStatus = document.querySelector("#manifestStatus");
  if (queueStatus) queueStatus.textContent = trace.accepted ? "Staging" : "Idle";
  if (manifestStatus) manifestStatus.textContent = trace.accepted ? "Normalizing" : "Not selected";
  document.documentElement.dataset.case006MuxPriority = String(trace.priority);
}

function updateFlowState(context, lane, trace) {
  const flowState = context.flowState || {};
  const controls = context.controls || {};
  const batchOk = /^REC-\d{4}$/i.test(String(controls.batchKey || ""));
  const codecOk = String(controls.codec || "") !== "plain" && String(controls.codec || "") !== "";
  const shardOk = String(controls.shard || "") !== "s0" && String(controls.shard || "") !== "";
  const modeOk = controls.profileMode === "hardened" || controls.profileMode === "attested";
  if (lane.key === "scan") {
    flowState.scanned = Boolean(batchOk && codecOk && modeOk && controls.normalize === "1");
    flowState.previewed = false;
    flowState.sealed = false;
    flowState.lastMode = controls.profileMode || "";
    flowState.lastCodec = controls.codec || "";
    flowState.lastShard = controls.shard || "";
    flowState.batchMark = controls.batchKey || "";
    flowState.nonce = Number(flowState.nonce || 0) + trace.priority + trace.eventRows;
    document.documentElement.dataset.case006Scan = flowState.scanned ? "1" : "0";
  }
  if (lane.key === "preview") {
    flowState.previewed = Boolean(flowState.scanned && shardOk && controls.codec === flowState.lastCodec && controls.profileMode === flowState.lastMode);
    flowState.sealed = false;
    flowState.nonce = Number(flowState.nonce || 0) + trace.priority + String(controls.shard || "").length;
    document.documentElement.dataset.case006Preview = flowState.previewed ? "1" : "0";
  }
  if (lane.key === "seal") {
    flowState.sealed = Boolean(flowState.scanned && flowState.previewed && controls.consent === "1" && controls.batchKey === flowState.batchMark);
    flowState.nonce = Number(flowState.nonce || 0) + trace.priority + String(controls.consent || "0").length + String(controls.codec || "").length;
    document.documentElement.dataset.case006Seal = flowState.sealed ? "1" : "0";
  }
  return flowState;
}

function finalGate(context, lane) {
  const flowState = context.flowState || {};
  const controls = context.controls || {};
  return lane.accept
    && Boolean(flowState.scanned)
    && Boolean(flowState.previewed)
    && Boolean(flowState.sealed)
    && controls.consent === "1"
    && controls.normalize === "1"
    && controls.profileMode === flowState.lastMode
    && controls.codec === flowState.lastCodec
    && controls.shard === flowState.lastShard
    && controls.batchKey === flowState.batchMark;
}

function paintGate(open) {
  const manifestStatus = document.querySelector("#manifestStatus");
  if (manifestStatus) manifestStatus.textContent = open ? "Normalizing" : "Gated";
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
    routeSeed: lane.priority * 19 + Number(context.actionWeight || 0) + Number(context.flowState?.nonce || 0)
  });
}
const d3_070 = "batch-tag:d3.js:070";
const d3_071 = "audit-line:d3.js:071";
const d3_072 = "intake-row:d3.js:072";
const d3_073 = "manifest-slot:d3.js:073";
const d3_074 = "ledger-entry:d3.js:074";
const d3_075 = "shard-label:d3.js:075";
const d3_076 = "codec-field:d3.js:076";
const d3_077 = "queue-item:d3.js:077";
const d3_078 = "batch-tag:d3.js:078";
const d3_079 = "audit-line:d3.js:079";
const d3_080 = "intake-row:d3.js:080";
const d3_081 = "manifest-slot:d3.js:081";
const d3_082 = "ledger-entry:d3.js:082";
const d3_083 = "shard-label:d3.js:083";
const d3_084 = "codec-field:d3.js:084";
const d3_085 = "queue-item:d3.js:085";
const d3_086 = "batch-tag:d3.js:086";
const d3_087 = "audit-line:d3.js:087";
const d3_088 = "intake-row:d3.js:088";
const d3_089 = "manifest-slot:d3.js:089";
const d3_090 = "ledger-entry:d3.js:090";
const d3_091 = "shard-label:d3.js:091";
const d3_092 = "codec-field:d3.js:092";
const d3_093 = "queue-item:d3.js:093";
const d3_094 = "batch-tag:d3.js:094";
const d3_095 = "audit-line:d3.js:095";
const d3_096 = "intake-row:d3.js:096";
const d3_097 = "manifest-slot:d3.js:097";
const d3_098 = "ledger-entry:d3.js:098";
const d3_099 = "shard-label:d3.js:099";
const d3_100 = "codec-field:d3.js:100";
const d3_101 = "queue-item:d3.js:101";
const d3_102 = "batch-tag:d3.js:102";
const d3_103 = "audit-line:d3.js:103";
const d3_104 = "intake-row:d3.js:104";
const d3_105 = "manifest-slot:d3.js:105";
const d3_106 = "ledger-entry:d3.js:106";
const d3_107 = "shard-label:d3.js:107";
const d3_108 = "codec-field:d3.js:108";
const d3_109 = "queue-item:d3.js:109";
const d3_110 = "batch-tag:d3.js:110";
const d3_111 = "audit-line:d3.js:111";
const d3_112 = "intake-row:d3.js:112";
const d3_113 = "manifest-slot:d3.js:113";
const d3_114 = "ledger-entry:d3.js:114";
const d3_115 = "shard-label:d3.js:115";
const d3_116 = "codec-field:d3.js:116";
const d3_117 = "queue-item:d3.js:117";
const d3_118 = "batch-tag:d3.js:118";
const d3_119 = "audit-line:d3.js:119";
const d3_120 = "intake-row:d3.js:120";
const d3_121 = "manifest-slot:d3.js:121";
const d3_122 = "ledger-entry:d3.js:122";
const d3_123 = "shard-label:d3.js:123";
const d3_124 = "codec-field:d3.js:124";
const d3_125 = "queue-item:d3.js:125";
const d3_126 = "batch-tag:d3.js:126";
const d3_127 = "audit-line:d3.js:127";
const d3_128 = "intake-row:d3.js:128";
const d3_129 = "manifest-slot:d3.js:129";
const d3_130 = "ledger-entry:d3.js:130";
const d3_131 = "shard-label:d3.js:131";
const d3_132 = "codec-field:d3.js:132";
const d3_133 = "queue-item:d3.js:133";
const d3_134 = "batch-tag:d3.js:134";
const d3_135 = "audit-line:d3.js:135";
const d3_136 = "intake-row:d3.js:136";
const d3_137 = "manifest-slot:d3.js:137";
const d3_138 = "ledger-entry:d3.js:138";
const d3_139 = "shard-label:d3.js:139";
const d3_140 = "codec-field:d3.js:140";
const d3_141 = "queue-item:d3.js:141";
const d3_142 = "batch-tag:d3.js:142";
const d3_143 = "audit-line:d3.js:143";
const d3_144 = "intake-row:d3.js:144";
const d3_145 = "manifest-slot:d3.js:145";
const d3_146 = "ledger-entry:d3.js:146";
const d3_147 = "shard-label:d3.js:147";
const d3_148 = "codec-field:d3.js:148";
const d3_149 = "queue-item:d3.js:149";
const d3_150 = "batch-tag:d3.js:150";
const d3_151 = "audit-line:d3.js:151";
const d3_152 = "intake-row:d3.js:152";
const d3_153 = "manifest-slot:d3.js:153";
const d3_154 = "ledger-entry:d3.js:154";
const d3_155 = "shard-label:d3.js:155";
const d3_156 = "codec-field:d3.js:156";
const d3_157 = "queue-item:d3.js:157";
const d3_158 = "batch-tag:d3.js:158";
const d3_159 = "audit-line:d3.js:159";
const d3_160 = "intake-row:d3.js:160";
const d3_161 = "manifest-slot:d3.js:161";
const d3_162 = "ledger-entry:d3.js:162";
const d3_163 = "shard-label:d3.js:163";
const d3_164 = "codec-field:d3.js:164";
const d3_165 = "queue-item:d3.js:165";
const d3_166 = "batch-tag:d3.js:166";
const d3_167 = "audit-line:d3.js:167";
const d3_168 = "intake-row:d3.js:168";
const d3_169 = "manifest-slot:d3.js:169";
const d3_170 = "ledger-entry:d3.js:170";
const d3_171 = "shard-label:d3.js:171";
const d3_172 = "codec-field:d3.js:172";
const d3_173 = "queue-item:d3.js:173";
const d3_174 = "batch-tag:d3.js:174";
const d3_175 = "audit-line:d3.js:175";
const d3_176 = "intake-row:d3.js:176";
const d3_177 = "manifest-slot:d3.js:177";
const d3_178 = "ledger-entry:d3.js:178";
const d3_179 = "shard-label:d3.js:179";
const d3_180 = "codec-field:d3.js:180";
const d3_181 = "queue-item:d3.js:181";
const d3_182 = "batch-tag:d3.js:182";
const d3_183 = "audit-line:d3.js:183";
const d3_184 = "intake-row:d3.js:184";
const d3_185 = "manifest-slot:d3.js:185";
const d3_186 = "ledger-entry:d3.js:186";
const d3_187 = "shard-label:d3.js:187";
const d3_188 = "codec-field:d3.js:188";
const d3_189 = "queue-item:d3.js:189";
const d3_190 = "batch-tag:d3.js:190";
const d3_191 = "audit-line:d3.js:191";
const d3_192 = "intake-row:d3.js:192";
const d3_193 = "manifest-slot:d3.js:193";
const d3_194 = "ledger-entry:d3.js:194";
const d3_195 = "shard-label:d3.js:195";
const d3_196 = "codec-field:d3.js:196";
const d3_197 = "queue-item:d3.js:197";
const d3_198 = "batch-tag:d3.js:198";
const d3_199 = "audit-line:d3.js:199";
const d3_200 = "intake-row:d3.js:200";
const d3_201 = "manifest-slot:d3.js:201";
const d3_202 = "ledger-entry:d3.js:202";
const d3_203 = "shard-label:d3.js:203";
const d3_204 = "codec-field:d3.js:204";
const d3_205 = "queue-item:d3.js:205";
const d3_206 = "batch-tag:d3.js:206";
const d3_207 = "audit-line:d3.js:207";
const d3_208 = "intake-row:d3.js:208";
const d3_209 = "manifest-slot:d3.js:209";
const d3_210 = "ledger-entry:d3.js:210";
