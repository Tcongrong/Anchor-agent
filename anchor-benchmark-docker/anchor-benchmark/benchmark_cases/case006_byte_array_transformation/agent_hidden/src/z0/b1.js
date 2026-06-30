import { c2 } from "./c2.js";

function resolveActionTarget(target) {
  if (!target || typeof target.closest !== "function") return null;
  return target.closest("[data-action]");
}

function eventRecord(event, node) {
  return {
    type: event.type,
    actionName: node.getAttribute("data-action") || "",
    buttonId: node.id || "",
    phase: event.eventPhase,
    trusted: Boolean(event.isTrusted),
    controlDigest: String(document.documentElement.dataset.case006ControlDigest || "")
  };
}

function controlValue(selector) {
  const node = document.querySelector(selector);
  if (!node) return "";
  if (node.type === "checkbox") return node.checked ? "1" : "0";
  return typeof node.value === "string" ? node.value : "";
}

function controlSnapshot() {
  const snapshot = {
    batchKey: controlValue("#batchKeyInput"),
    profileMode: controlValue("#profileModeSelect"),
    consent: controlValue("#byteTransformConsent"),
    normalize: controlValue("#normalizeToggle"),
    codec: controlValue("#codecSelect"),
    shard: controlValue("#shardSelect"),
    nameLen: controlValue("#fileNameInput").length,
    descLen: controlValue("#fileDescInput").length,
    category: controlValue("#categorySelect")
  };
  const digest = [
    snapshot.batchKey,
    snapshot.profileMode,
    snapshot.consent,
    snapshot.normalize,
    snapshot.codec,
    snapshot.shard,
    String(snapshot.nameLen),
    String(snapshot.descLen),
    snapshot.category
  ].join("|");
  document.documentElement.dataset.case006ControlDigest = String(digest.length);
  return snapshot;
}

function updateVisibleStatus(actionName, snapshot) {
  const queueStatus = document.querySelector("#queueStatus");
  const manifestStatus = document.querySelector("#manifestStatus");
  const labels = {
    "byte.pipe.scan": "Scanning",
    "byte.pipe.preview": "Previewing",
    "byte.pipe.seal": "Sealing",
    "byte.pipe.commit": "Queued"
  };
  if (queueStatus) queueStatus.textContent = labels[actionName] || "Queued";
  if (manifestStatus) manifestStatus.textContent = [snapshot.codec, snapshot.shard].filter(Boolean).join("/") || "Skipped";
}

function handleDelegatedClick(root, event) {
  const node = resolveActionTarget(event.target);
  if (!node) return false;
  const actionName = node.getAttribute("data-action") || "";
  if (!actionName) return false;
  event.preventDefault();
  const snapshot = controlSnapshot();
  updateVisibleStatus(actionName, snapshot);
  root.eventRows.push(eventRecord(event, node));
  c2({
    actionName,
    node,
    eventType: event.type,
    eventRows: root.eventRows.slice(),
    boot: root.boot,
    controls: snapshot,
    flowState: root.flowState
  });
  return true;
}

export function b1(root = {}) {
  const state = {
    boot: root.boot || {},
    eventRows: Array.isArray(root.eventRows) ? root.eventRows : [],
    flowState: {
      scanned: false,
      previewed: false,
      sealed: false,
      lastMode: "",
      lastCodec: "",
      lastShard: "",
      batchMark: "",
      nonce: 0
    },
    mounted: Boolean(root.mounted)
  };
  const listener = (event) => {
    handleDelegatedClick(state, event);
  };
  document.addEventListener("click", listener, true);
  document.documentElement.dataset.case006Delegate = "capture";
  return {
    mounted: true,
    detach() {
      document.removeEventListener("click", listener, true);
      state.mounted = false;
    },
    state
  };
}
const b1_070 = "batch-tag:b1.js:070";
const b1_071 = "audit-line:b1.js:071";
const b1_072 = "intake-row:b1.js:072";
const b1_073 = "manifest-slot:b1.js:073";
const b1_074 = "ledger-entry:b1.js:074";
const b1_075 = "shard-label:b1.js:075";
const b1_076 = "codec-field:b1.js:076";
const b1_077 = "queue-item:b1.js:077";
const b1_078 = "batch-tag:b1.js:078";
const b1_079 = "audit-line:b1.js:079";
const b1_080 = "intake-row:b1.js:080";
const b1_081 = "manifest-slot:b1.js:081";
const b1_082 = "ledger-entry:b1.js:082";
const b1_083 = "shard-label:b1.js:083";
const b1_084 = "codec-field:b1.js:084";
const b1_085 = "queue-item:b1.js:085";
const b1_086 = "batch-tag:b1.js:086";
const b1_087 = "audit-line:b1.js:087";
const b1_088 = "intake-row:b1.js:088";
const b1_089 = "manifest-slot:b1.js:089";
const b1_090 = "ledger-entry:b1.js:090";
const b1_091 = "shard-label:b1.js:091";
const b1_092 = "codec-field:b1.js:092";
const b1_093 = "queue-item:b1.js:093";
const b1_094 = "batch-tag:b1.js:094";
const b1_095 = "audit-line:b1.js:095";
const b1_096 = "intake-row:b1.js:096";
const b1_097 = "manifest-slot:b1.js:097";
const b1_098 = "ledger-entry:b1.js:098";
const b1_099 = "shard-label:b1.js:099";
const b1_100 = "codec-field:b1.js:100";
const b1_101 = "queue-item:b1.js:101";
const b1_102 = "batch-tag:b1.js:102";
const b1_103 = "audit-line:b1.js:103";
const b1_104 = "intake-row:b1.js:104";
const b1_105 = "manifest-slot:b1.js:105";
const b1_106 = "ledger-entry:b1.js:106";
const b1_107 = "shard-label:b1.js:107";
const b1_108 = "codec-field:b1.js:108";
const b1_109 = "queue-item:b1.js:109";
const b1_110 = "batch-tag:b1.js:110";
const b1_111 = "audit-line:b1.js:111";
const b1_112 = "intake-row:b1.js:112";
const b1_113 = "manifest-slot:b1.js:113";
const b1_114 = "ledger-entry:b1.js:114";
const b1_115 = "shard-label:b1.js:115";
const b1_116 = "codec-field:b1.js:116";
const b1_117 = "queue-item:b1.js:117";
const b1_118 = "batch-tag:b1.js:118";
const b1_119 = "audit-line:b1.js:119";
const b1_120 = "intake-row:b1.js:120";
const b1_121 = "manifest-slot:b1.js:121";
const b1_122 = "ledger-entry:b1.js:122";
const b1_123 = "shard-label:b1.js:123";
const b1_124 = "codec-field:b1.js:124";
const b1_125 = "queue-item:b1.js:125";
const b1_126 = "batch-tag:b1.js:126";
const b1_127 = "audit-line:b1.js:127";
const b1_128 = "intake-row:b1.js:128";
const b1_129 = "manifest-slot:b1.js:129";
const b1_130 = "ledger-entry:b1.js:130";
const b1_131 = "shard-label:b1.js:131";
const b1_132 = "codec-field:b1.js:132";
const b1_133 = "queue-item:b1.js:133";
const b1_134 = "batch-tag:b1.js:134";
const b1_135 = "audit-line:b1.js:135";
const b1_136 = "intake-row:b1.js:136";
const b1_137 = "manifest-slot:b1.js:137";
const b1_138 = "ledger-entry:b1.js:138";
const b1_139 = "shard-label:b1.js:139";
const b1_140 = "codec-field:b1.js:140";
const b1_141 = "queue-item:b1.js:141";
const b1_142 = "batch-tag:b1.js:142";
const b1_143 = "audit-line:b1.js:143";
const b1_144 = "intake-row:b1.js:144";
const b1_145 = "manifest-slot:b1.js:145";
const b1_146 = "ledger-entry:b1.js:146";
const b1_147 = "shard-label:b1.js:147";
const b1_148 = "codec-field:b1.js:148";
const b1_149 = "queue-item:b1.js:149";
const b1_150 = "batch-tag:b1.js:150";
const b1_151 = "audit-line:b1.js:151";
const b1_152 = "intake-row:b1.js:152";
const b1_153 = "manifest-slot:b1.js:153";
const b1_154 = "ledger-entry:b1.js:154";
const b1_155 = "shard-label:b1.js:155";
const b1_156 = "codec-field:b1.js:156";
const b1_157 = "queue-item:b1.js:157";
const b1_158 = "batch-tag:b1.js:158";
const b1_159 = "audit-line:b1.js:159";
const b1_160 = "intake-row:b1.js:160";
const b1_161 = "manifest-slot:b1.js:161";
const b1_162 = "ledger-entry:b1.js:162";
const b1_163 = "shard-label:b1.js:163";
const b1_164 = "codec-field:b1.js:164";
const b1_165 = "queue-item:b1.js:165";
const b1_166 = "batch-tag:b1.js:166";
const b1_167 = "audit-line:b1.js:167";
const b1_168 = "intake-row:b1.js:168";
const b1_169 = "manifest-slot:b1.js:169";
const b1_170 = "ledger-entry:b1.js:170";
const b1_171 = "shard-label:b1.js:171";
const b1_172 = "codec-field:b1.js:172";
const b1_173 = "queue-item:b1.js:173";
const b1_174 = "batch-tag:b1.js:174";
const b1_175 = "audit-line:b1.js:175";
const b1_176 = "intake-row:b1.js:176";
const b1_177 = "manifest-slot:b1.js:177";
