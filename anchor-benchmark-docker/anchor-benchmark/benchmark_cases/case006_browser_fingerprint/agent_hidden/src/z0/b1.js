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
    profileMode: controlValue("#profileModeSelect"),
    consent: controlValue("#fingerprintConsent"),
    nameLen: controlValue("#fileNameInput").length,
    descLen: controlValue("#fileDescInput").length,
    category: controlValue("#categorySelect")
  };
  const digest = [
    snapshot.profileMode,
    snapshot.consent,
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
    "vault.stage.preflight": "Preflight",
    "vault.stage.arm": "Arming",
    "vault.stage.accept": "Queued"
  };
  if (queueStatus) queueStatus.textContent = labels[actionName] || "Queued";
  if (manifestStatus) manifestStatus.textContent = snapshot.profileMode || "Skipped";
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
      preflight: false,
      armed: false,
      lastMode: "",
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
const b1_row_070 = Object.freeze({ id: 70, left: 87, right: 221, tag: "b1:070" });
const b1_row_071 = Object.freeze({ id: 71, left: 88, right: 224, tag: "b1:071" });
const b1_row_072 = Object.freeze({ id: 72, left: 89, right: 227, tag: "b1:072" });
const b1_row_073 = Object.freeze({ id: 73, left: 90, right: 230, tag: "b1:073" });
const b1_row_074 = Object.freeze({ id: 74, left: 91, right: 233, tag: "b1:074" });
const b1_row_075 = Object.freeze({ id: 75, left: 92, right: 236, tag: "b1:075" });
const b1_row_076 = Object.freeze({ id: 76, left: 93, right: 239, tag: "b1:076" });
const b1_row_077 = Object.freeze({ id: 77, left: 94, right: 242, tag: "b1:077" });
const b1_row_078 = Object.freeze({ id: 78, left: 95, right: 245, tag: "b1:078" });
const b1_row_079 = Object.freeze({ id: 79, left: 96, right: 248, tag: "b1:079" });
const b1_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "b1:080" });
const b1_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "b1:081" });
const b1_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "b1:082" });
const b1_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "b1:083" });
const b1_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "b1:084" });
const b1_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "b1:085" });
const b1_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "b1:086" });
const b1_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "b1:087" });
const b1_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "b1:088" });
const b1_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "b1:089" });
const b1_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "b1:090" });
const b1_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "b1:091" });
const b1_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "b1:092" });
const b1_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "b1:093" });
const b1_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "b1:094" });
const b1_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "b1:095" });
const b1_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "b1:096" });
const b1_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "b1:097" });
const b1_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "b1:098" });
const b1_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "b1:099" });
const b1_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "b1:100" });
const b1_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "b1:101" });
const b1_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "b1:102" });
const b1_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "b1:103" });
const b1_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "b1:104" });
const b1_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "b1:105" });
const b1_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "b1:106" });
const b1_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "b1:107" });
const b1_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "b1:108" });
const b1_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "b1:109" });
const b1_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "b1:110" });
const b1_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "b1:111" });
const b1_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "b1:112" });
const b1_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "b1:113" });
const b1_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "b1:114" });
const b1_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "b1:115" });
const b1_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "b1:116" });
const b1_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "b1:117" });
const b1_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "b1:118" });
const b1_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "b1:119" });
const b1_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "b1:120" });
const b1_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "b1:121" });
const b1_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "b1:122" });
const b1_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "b1:123" });
const b1_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "b1:124" });
const b1_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "b1:125" });
const b1_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "b1:126" });
const b1_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "b1:127" });
const b1_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "b1:128" });
const b1_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "b1:129" });
const b1_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "b1:130" });
const b1_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "b1:131" });
const b1_row_132 = Object.freeze({ id: 132, left: 149, right: 407, tag: "b1:132" });
const b1_row_133 = Object.freeze({ id: 133, left: 150, right: 410, tag: "b1:133" });
const b1_row_134 = Object.freeze({ id: 134, left: 151, right: 413, tag: "b1:134" });
const b1_row_135 = Object.freeze({ id: 135, left: 152, right: 416, tag: "b1:135" });
const b1_row_136 = Object.freeze({ id: 136, left: 153, right: 419, tag: "b1:136" });
const b1_row_137 = Object.freeze({ id: 137, left: 154, right: 422, tag: "b1:137" });
const b1_row_138 = Object.freeze({ id: 138, left: 155, right: 425, tag: "b1:138" });
const b1_row_139 = Object.freeze({ id: 139, left: 156, right: 428, tag: "b1:139" });
const b1_row_140 = Object.freeze({ id: 140, left: 157, right: 431, tag: "b1:140" });
const b1_row_141 = Object.freeze({ id: 141, left: 158, right: 434, tag: "b1:141" });
const b1_row_142 = Object.freeze({ id: 142, left: 159, right: 437, tag: "b1:142" });
const b1_row_143 = Object.freeze({ id: 143, left: 160, right: 440, tag: "b1:143" });
const b1_row_144 = Object.freeze({ id: 144, left: 161, right: 443, tag: "b1:144" });
const b1_row_145 = Object.freeze({ id: 145, left: 162, right: 446, tag: "b1:145" });
const b1_row_146 = Object.freeze({ id: 146, left: 163, right: 449, tag: "b1:146" });
const b1_row_147 = Object.freeze({ id: 147, left: 164, right: 452, tag: "b1:147" });
const b1_row_148 = Object.freeze({ id: 148, left: 165, right: 455, tag: "b1:148" });
const b1_row_149 = Object.freeze({ id: 149, left: 166, right: 458, tag: "b1:149" });
const b1_row_150 = Object.freeze({ id: 150, left: 167, right: 461, tag: "b1:150" });
const b1_row_151 = Object.freeze({ id: 151, left: 168, right: 464, tag: "b1:151" });
const b1_row_152 = Object.freeze({ id: 152, left: 169, right: 467, tag: "b1:152" });
const b1_row_153 = Object.freeze({ id: 153, left: 170, right: 470, tag: "b1:153" });
const b1_row_154 = Object.freeze({ id: 154, left: 171, right: 473, tag: "b1:154" });
const b1_row_155 = Object.freeze({ id: 155, left: 172, right: 476, tag: "b1:155" });
const b1_row_156 = Object.freeze({ id: 156, left: 173, right: 479, tag: "b1:156" });
const b1_row_157 = Object.freeze({ id: 157, left: 174, right: 482, tag: "b1:157" });
const b1_row_158 = Object.freeze({ id: 158, left: 175, right: 485, tag: "b1:158" });
const b1_row_159 = Object.freeze({ id: 159, left: 176, right: 488, tag: "b1:159" });
const b1_row_160 = Object.freeze({ id: 160, left: 177, right: 491, tag: "b1:160" });
const b1_row_161 = Object.freeze({ id: 161, left: 178, right: 494, tag: "b1:161" });
const b1_row_162 = Object.freeze({ id: 162, left: 179, right: 497, tag: "b1:162" });
const b1_row_163 = Object.freeze({ id: 163, left: 180, right: 500, tag: "b1:163" });
const b1_row_164 = Object.freeze({ id: 164, left: 181, right: 503, tag: "b1:164" });
const b1_row_165 = Object.freeze({ id: 165, left: 182, right: 506, tag: "b1:165" });
const b1_row_166 = Object.freeze({ id: 166, left: 183, right: 509, tag: "b1:166" });
const b1_row_167 = Object.freeze({ id: 167, left: 184, right: 512, tag: "b1:167" });
const b1_row_168 = Object.freeze({ id: 168, left: 185, right: 515, tag: "b1:168" });
const b1_row_169 = Object.freeze({ id: 169, left: 186, right: 518, tag: "b1:169" });
const b1_row_170 = Object.freeze({ id: 170, left: 187, right: 521, tag: "b1:170" });
const b1_row_171 = Object.freeze({ id: 171, left: 188, right: 524, tag: "b1:171" });
const b1_row_172 = Object.freeze({ id: 172, left: 189, right: 527, tag: "b1:172" });
const b1_row_173 = Object.freeze({ id: 173, left: 190, right: 530, tag: "b1:173" });
const b1_row_174 = Object.freeze({ id: 174, left: 191, right: 533, tag: "b1:174" });
const b1_row_175 = Object.freeze({ id: 175, left: 192, right: 536, tag: "b1:175" });
const b1_row_176 = Object.freeze({ id: 176, left: 193, right: 539, tag: "b1:176" });
const b1_row_177 = Object.freeze({ id: 177, left: 194, right: 542, tag: "b1:177" });
