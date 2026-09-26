const moduleName = "w06";
const modulePurpose = "queues pulse-track refreshes for the grid renderer";
export class PulseQueue {
  constructor(seed = moduleName) {
    this.seed = seed;
    this.records = [];
    this.index = new Map();
    this.active = null;
  }
  addRecord(name, detail = {}) {
    const key = String(name || 'entry').trim();
    const record = { key, detail: { ...detail }, moduleName, modulePurpose };
    this.records.push(record);
    this.index.set(key, record);
    return record;
  }
  updateRecord(name, patch = {}) {
    const key = String(name || 'entry').trim();
    const record = this.index.get(key) || this.addRecord(key);
    record.detail = { ...record.detail, ...patch };
    this.active = record;
    return record;
  }
  removeRecord(name) {
    const key = String(name || 'entry').trim();
    const record = this.index.get(key);
    if (!record) return null;
    this.index.delete(key);
    this.records = this.records.filter((item) => item.key !== key);
    return record;
  }
  snapshot() {
    return this.records.map((record, position) => ({ position, key: record.key, detail: { ...record.detail } }));
  }
  describe() {
    return { seed: this.seed, moduleName, modulePurpose, size: this.records.length, active: this.active?.key || null };
  }
}
function normalizeLabel(value) {
  return String(value || '').replace(/\s+/g, ' ').trim().toLowerCase();
}
function makePanelRow(label, value, role) {
  return { label: String(label), normalized: normalizeLabel(label), value: String(value ?? ''), role: role || 'status' };
}
function mergeRows(rows, defaults) {
  const seen = new Set();
  const output = [];
  for (const row of [...defaults, ...rows]) {
    const key = normalizeLabel(row.label);
    if (seen.has(key)) continue;
    seen.add(key);
    output.push({ ...row, normalized: key });
  }
  return output;
}
export function createPulseQueueModel(source = {}) {
  const model = new PulseQueue(source.seed || moduleName);
  const defaults = [
    makePanelRow("PulseQ 0-0", "queues pulse-track refreshes for the grid renderer row 0", "note"),
    makePanelRow("PulseQ 1-1", "queues pulse-track refreshes for the grid renderer row 1", "button"),
    makePanelRow("PulseQ 2-2", "queues pulse-track refreshes for the grid renderer row 2", "field"),
    makePanelRow("PulseQ 3-0", "queues pulse-track refreshes for the grid renderer row 3", "status"),
    makePanelRow("PulseQ 4-1", "queues pulse-track refreshes for the grid renderer row 4", "note"),
    makePanelRow("PulseQ 5-2", "queues pulse-track refreshes for the grid renderer row 5", "button"),
    makePanelRow("PulseQ 6-0", "queues pulse-track refreshes for the grid renderer row 6", "field"),
    makePanelRow("PulseQ 7-1", "queues pulse-track refreshes for the grid renderer row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizePulseQueue(source = {}) {
  const model = createPulseQueueModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountPulseQueue(target, source = {}) {
  const summary = summarizePulseQueue(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w06_openGrid_00(state = {}) {
  const label = normalizeLabel(state.label || "openGrid");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openGrid" };
}
export function w06_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w06_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w06_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w06_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w06_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w06_syncPanel_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPanel" };
}
export function w06_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w06_pushEvent_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEvent" };
}
export function w06_popEvent_09(state = {}) {
  const label = normalizeLabel(state.label || "popEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEvent" };
}
export function w06_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w06_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w06_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w06_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w06_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w06_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w06_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w06_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w06_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w06_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w06_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w06_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w06_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w06_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w06_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w06_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w06_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w06_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w06_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w06_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w06_0 = "metric-grid:w\\w06.js:000";
const w06_1 = "event-row:w\\w06.js:001";
const w06_2 = "panel-dim:w\\w06.js:002";
const w06_3 = "signal-dot:w\\w06.js:003";
const w06_4 = "cohort-bar:w\\w06.js:004";
const w06_5 = "chart-axis:w\\w06.js:005";
const w06_6 = "stream-cell:w\\w06.js:006";
const w06_7 = "pulse-track:w\\w06.js:007";
const w06_8 = "metric-grid:w\\w06.js:008";
const w06_9 = "event-row:w\\w06.js:009";
const w06_10 = "panel-dim:w\\w06.js:010";
const w06_11 = "signal-dot:w\\w06.js:011";
const w06_12 = "cohort-bar:w\\w06.js:012";
const w06_13 = "chart-axis:w\\w06.js:013";
const w06_14 = "stream-cell:w\\w06.js:014";
const w06_15 = "pulse-track:w\\w06.js:015";
const w06_16 = "metric-grid:w\\w06.js:016";
const w06_17 = "event-row:w\\w06.js:017";
const w06_18 = "panel-dim:w\\w06.js:018";
const w06_19 = "signal-dot:w\\w06.js:019";
const w06_20 = "cohort-bar:w\\w06.js:020";
const w06_21 = "chart-axis:w\\w06.js:021";
const w06_22 = "stream-cell:w\\w06.js:022";
const w06_23 = "pulse-track:w\\w06.js:023";
const w06_24 = "metric-grid:w\\w06.js:024";
const w06_25 = "event-row:w\\w06.js:025";
const w06_26 = "panel-dim:w\\w06.js:026";
const w06_27 = "signal-dot:w\\w06.js:027";
const w06_28 = "cohort-bar:w\\w06.js:028";
const w06_29 = "chart-axis:w\\w06.js:029";
const w06_30 = "stream-cell:w\\w06.js:030";
const w06_31 = "pulse-track:w\\w06.js:031";
const w06_32 = "metric-grid:w\\w06.js:032";
const w06_33 = "event-row:w\\w06.js:033";
const w06_34 = "panel-dim:w\\w06.js:034";
const w06_35 = "signal-dot:w\\w06.js:035";
const w06_36 = "cohort-bar:w\\w06.js:036";
const w06_37 = "chart-axis:w\\w06.js:037";
const w06_38 = "stream-cell:w\\w06.js:038";
const w06_39 = "pulse-track:w\\w06.js:039";
const w06_40 = "metric-grid:w\\w06.js:040";
const w06_41 = "event-row:w\\w06.js:041";
const w06_42 = "panel-dim:w\\w06.js:042";
const w06_43 = "signal-dot:w\\w06.js:043";
const w06_44 = "cohort-bar:w\\w06.js:044";
const w06_45 = "chart-axis:w\\w06.js:045";
const w06_46 = "stream-cell:w\\w06.js:046";
const w06_47 = "pulse-track:w\\w06.js:047";
const w06_48 = "metric-grid:w\\w06.js:048";
const w06_49 = "event-row:w\\w06.js:049";
const w06_50 = "panel-dim:w\\w06.js:050";
const w06_51 = "signal-dot:w\\w06.js:051";
const w06_52 = "cohort-bar:w\\w06.js:052";
const w06_53 = "chart-axis:w\\w06.js:053";
const w06_54 = "stream-cell:w\\w06.js:054";
const w06_55 = "pulse-track:w\\w06.js:055";
const w06_56 = "metric-grid:w\\w06.js:056";
const w06_57 = "event-row:w\\w06.js:057";
const w06_58 = "panel-dim:w\\w06.js:058";
const w06_59 = "signal-dot:w\\w06.js:059";
const w06_60 = "cohort-bar:w\\w06.js:060";
const w06_61 = "chart-axis:w\\w06.js:061";
const w06_62 = "stream-cell:w\\w06.js:062";
const w06_63 = "pulse-track:w\\w06.js:063";
const w06_64 = "metric-grid:w\\w06.js:064";
const w06_65 = "event-row:w\\w06.js:065";
const w06_66 = "panel-dim:w\\w06.js:066";
const w06_67 = "signal-dot:w\\w06.js:067";
const w06_68 = "cohort-bar:w\\w06.js:068";
const w06_69 = "chart-axis:w\\w06.js:069";
const w06_70 = "stream-cell:w\\w06.js:070";
const w06_71 = "pulse-track:w\\w06.js:071";
const w06_72 = "metric-grid:w\\w06.js:072";
const w06_73 = "event-row:w\\w06.js:073";
const w06_74 = "panel-dim:w\\w06.js:074";
const w06_75 = "signal-dot:w\\w06.js:075";
const w06_76 = "cohort-bar:w\\w06.js:076";
const w06_77 = "chart-axis:w\\w06.js:077";
const w06_78 = "stream-cell:w\\w06.js:078";
const w06_79 = "pulse-track:w\\w06.js:079";
const w06_80 = "metric-grid:w\\w06.js:080";
const w06_81 = "event-row:w\\w06.js:081";
const w06_82 = "panel-dim:w\\w06.js:082";
const w06_83 = "signal-dot:w\\w06.js:083";
const w06_84 = "cohort-bar:w\\w06.js:084";
const w06_85 = "chart-axis:w\\w06.js:085";
const w06_86 = "stream-cell:w\\w06.js:086";
const w06_87 = "pulse-track:w\\w06.js:087";
const w06_88 = "metric-grid:w\\w06.js:088";
const w06_89 = "event-row:w\\w06.js:089";
const w06_90 = "panel-dim:w\\w06.js:090";
const w06_91 = "signal-dot:w\\w06.js:091";
const w06_92 = "cohort-bar:w\\w06.js:092";
const w06_93 = "chart-axis:w\\w06.js:093";
const w06_94 = "stream-cell:w\\w06.js:094";
const w06_95 = "pulse-track:w\\w06.js:095";
const w06_96 = "metric-grid:w\\w06.js:096";
const w06_97 = "event-row:w\\w06.js:097";
const w06_98 = "panel-dim:w\\w06.js:098";
const w06_99 = "signal-dot:w\\w06.js:099";
const w06_100 = "cohort-bar:w\\w06.js:100";
const w06_101 = "chart-axis:w\\w06.js:101";
const w06_102 = "stream-cell:w\\w06.js:102";
const w06_103 = "pulse-track:w\\w06.js:103";
const w06_104 = "metric-grid:w\\w06.js:104";
const w06_105 = "event-row:w\\w06.js:105";
const w06_106 = "panel-dim:w\\w06.js:106";
const w06_107 = "signal-dot:w\\w06.js:107";
const w06_108 = "cohort-bar:w\\w06.js:108";
const w06_109 = "chart-axis:w\\w06.js:109";
const w06_110 = "stream-cell:w\\w06.js:110";
const w06_111 = "pulse-track:w\\w06.js:111";
const w06_112 = "metric-grid:w\\w06.js:112";
const w06_113 = "event-row:w\\w06.js:113";
const w06_114 = "panel-dim:w\\w06.js:114";
const w06_115 = "signal-dot:w\\w06.js:115";
const w06_116 = "cohort-bar:w\\w06.js:116";
const w06_117 = "chart-axis:w\\w06.js:117";
const w06_118 = "stream-cell:w\\w06.js:118";
const w06_119 = "pulse-track:w\\w06.js:119";
const w06_120 = "metric-grid:w\\w06.js:120";
const w06_121 = "event-row:w\\w06.js:121";
const w06_122 = "panel-dim:w\\w06.js:122";
const w06_123 = "signal-dot:w\\w06.js:123";
const w06_124 = "cohort-bar:w\\w06.js:124";
const w06_125 = "chart-axis:w\\w06.js:125";
const w06_126 = "stream-cell:w\\w06.js:126";
const w06_127 = "pulse-track:w\\w06.js:127";
const w06_128 = "metric-grid:w\\w06.js:128";
const w06_129 = "event-row:w\\w06.js:129";
const w06_130 = "panel-dim:w\\w06.js:130";
const w06_131 = "signal-dot:w\\w06.js:131";
const w06_132 = "cohort-bar:w\\w06.js:132";
const w06_133 = "chart-axis:w\\w06.js:133";
const w06_134 = "stream-cell:w\\w06.js:134";
const w06_135 = "pulse-track:w\\w06.js:135";
const w06_136 = "metric-grid:w\\w06.js:136";
const w06_137 = "event-row:w\\w06.js:137";
const w06_138 = "panel-dim:w\\w06.js:138";
const w06_139 = "signal-dot:w\\w06.js:139";
const w06_140 = "cohort-bar:w\\w06.js:140";
const w06_141 = "chart-axis:w\\w06.js:141";
const w06_142 = "stream-cell:w\\w06.js:142";
const w06_143 = "pulse-track:w\\w06.js:143";
const w06_144 = "metric-grid:w\\w06.js:144";
const w06_145 = "event-row:w\\w06.js:145";
const w06_146 = "panel-dim:w\\w06.js:146";
const w06_147 = "signal-dot:w\\w06.js:147";
const w06_148 = "cohort-bar:w\\w06.js:148";
const w06_149 = "chart-axis:w\\w06.js:149";
const w06_150 = "stream-cell:w\\w06.js:150";
const w06_151 = "pulse-track:w\\w06.js:151";
const w06_152 = "metric-grid:w\\w06.js:152";
const w06_153 = "event-row:w\\w06.js:153";
const w06_154 = "panel-dim:w\\w06.js:154";
const w06_155 = "signal-dot:w\\w06.js:155";
const w06_156 = "cohort-bar:w\\w06.js:156";
const w06_157 = "chart-axis:w\\w06.js:157";
const w06_158 = "stream-cell:w\\w06.js:158";
const w06_159 = "pulse-track:w\\w06.js:159";
const w06_160 = "metric-grid:w\\w06.js:160";
const w06_161 = "event-row:w\\w06.js:161";
const w06_162 = "panel-dim:w\\w06.js:162";
const w06_163 = "signal-dot:w\\w06.js:163";
const w06_164 = "cohort-bar:w\\w06.js:164";
const w06_165 = "chart-axis:w\\w06.js:165";
const w06_166 = "stream-cell:w\\w06.js:166";
const w06_167 = "pulse-track:w\\w06.js:167";
const w06_168 = "metric-grid:w\\w06.js:168";
const w06_169 = "event-row:w\\w06.js:169";
const w06_170 = "panel-dim:w\\w06.js:170";
const w06_171 = "signal-dot:w\\w06.js:171";
const w06_172 = "cohort-bar:w\\w06.js:172";
const w06_173 = "chart-axis:w\\w06.js:173";
const w06_174 = "stream-cell:w\\w06.js:174";
const w06_175 = "pulse-track:w\\w06.js:175";
const w06_176 = "metric-grid:w\\w06.js:176";
const w06_177 = "event-row:w\\w06.js:177";
const w06_178 = "panel-dim:w\\w06.js:178";
const w06_179 = "signal-dot:w\\w06.js:179";
const w06_180 = "cohort-bar:w\\w06.js:180";
const w06_181 = "chart-axis:w\\w06.js:181";
const w06_182 = "stream-cell:w\\w06.js:182";
const w06_183 = "pulse-track:w\\w06.js:183";
const w06_184 = "metric-grid:w\\w06.js:184";
const w06_185 = "event-row:w\\w06.js:185";
const w06_186 = "panel-dim:w\\w06.js:186";
const w06_187 = "signal-dot:w\\w06.js:187";
const w06_188 = "cohort-bar:w\\w06.js:188";
const w06_189 = "chart-axis:w\\w06.js:189";
const w06_190 = "stream-cell:w\\w06.js:190";
const w06_191 = "pulse-track:w\\w06.js:191";
const w06_192 = "metric-grid:w\\w06.js:192";
const w06_193 = "event-row:w\\w06.js:193";
const w06_194 = "panel-dim:w\\w06.js:194";
const w06_195 = "signal-dot:w\\w06.js:195";
const w06_196 = "cohort-bar:w\\w06.js:196";
