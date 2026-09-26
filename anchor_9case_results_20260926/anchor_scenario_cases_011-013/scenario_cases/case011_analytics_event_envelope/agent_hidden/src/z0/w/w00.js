const moduleName = "w00";
const modulePurpose = "routes metric-grid panel events through listener rings";
export class MetricEventBus {
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
export function createMetricEventBusModel(source = {}) {
  const model = new MetricEventBus(source.seed || moduleName);
  const defaults = [
    makePanelRow("Metric 0-0", "routes metric-grid panel events through listener rings row 0", "note"),
    makePanelRow("Metric 1-1", "routes metric-grid panel events through listener rings row 1", "button"),
    makePanelRow("Metric 2-2", "routes metric-grid panel events through listener rings row 2", "field"),
    makePanelRow("Metric 3-0", "routes metric-grid panel events through listener rings row 3", "status"),
    makePanelRow("Metric 4-1", "routes metric-grid panel events through listener rings row 4", "note"),
    makePanelRow("Metric 5-2", "routes metric-grid panel events through listener rings row 5", "button"),
    makePanelRow("Metric 6-0", "routes metric-grid panel events through listener rings row 6", "field"),
    makePanelRow("Metric 7-1", "routes metric-grid panel events through listener rings row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeMetricEventBus(source = {}) {
  const model = createMetricEventBusModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountMetricEventBus(target, source = {}) {
  const summary = summarizeMetricEventBus(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w00_openGrid_00(state = {}) {
  const label = normalizeLabel(state.label || "openGrid");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openGrid" };
}
export function w00_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w00_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w00_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w00_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w00_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w00_syncPanel_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPanel" };
}
export function w00_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w00_pushEvent_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEvent" };
}
export function w00_popEvent_09(state = {}) {
  const label = normalizeLabel(state.label || "popEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEvent" };
}
export function w00_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w00_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w00_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w00_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w00_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w00_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w00_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w00_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w00_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w00_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w00_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w00_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w00_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w00_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w00_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w00_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w00_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w00_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w00_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w00_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w00_0 = "metric-grid:w\\w00.js:000";
const w00_1 = "event-row:w\\w00.js:001";
const w00_2 = "panel-dim:w\\w00.js:002";
const w00_3 = "signal-dot:w\\w00.js:003";
const w00_4 = "cohort-bar:w\\w00.js:004";
const w00_5 = "chart-axis:w\\w00.js:005";
const w00_6 = "stream-cell:w\\w00.js:006";
const w00_7 = "pulse-track:w\\w00.js:007";
const w00_8 = "metric-grid:w\\w00.js:008";
const w00_9 = "event-row:w\\w00.js:009";
const w00_10 = "panel-dim:w\\w00.js:010";
const w00_11 = "signal-dot:w\\w00.js:011";
const w00_12 = "cohort-bar:w\\w00.js:012";
const w00_13 = "chart-axis:w\\w00.js:013";
const w00_14 = "stream-cell:w\\w00.js:014";
const w00_15 = "pulse-track:w\\w00.js:015";
const w00_16 = "metric-grid:w\\w00.js:016";
const w00_17 = "event-row:w\\w00.js:017";
const w00_18 = "panel-dim:w\\w00.js:018";
const w00_19 = "signal-dot:w\\w00.js:019";
const w00_20 = "cohort-bar:w\\w00.js:020";
const w00_21 = "chart-axis:w\\w00.js:021";
const w00_22 = "stream-cell:w\\w00.js:022";
const w00_23 = "pulse-track:w\\w00.js:023";
const w00_24 = "metric-grid:w\\w00.js:024";
const w00_25 = "event-row:w\\w00.js:025";
const w00_26 = "panel-dim:w\\w00.js:026";
const w00_27 = "signal-dot:w\\w00.js:027";
const w00_28 = "cohort-bar:w\\w00.js:028";
const w00_29 = "chart-axis:w\\w00.js:029";
const w00_30 = "stream-cell:w\\w00.js:030";
const w00_31 = "pulse-track:w\\w00.js:031";
const w00_32 = "metric-grid:w\\w00.js:032";
const w00_33 = "event-row:w\\w00.js:033";
const w00_34 = "panel-dim:w\\w00.js:034";
const w00_35 = "signal-dot:w\\w00.js:035";
const w00_36 = "cohort-bar:w\\w00.js:036";
const w00_37 = "chart-axis:w\\w00.js:037";
const w00_38 = "stream-cell:w\\w00.js:038";
const w00_39 = "pulse-track:w\\w00.js:039";
const w00_40 = "metric-grid:w\\w00.js:040";
const w00_41 = "event-row:w\\w00.js:041";
const w00_42 = "panel-dim:w\\w00.js:042";
const w00_43 = "signal-dot:w\\w00.js:043";
const w00_44 = "cohort-bar:w\\w00.js:044";
const w00_45 = "chart-axis:w\\w00.js:045";
const w00_46 = "stream-cell:w\\w00.js:046";
const w00_47 = "pulse-track:w\\w00.js:047";
const w00_48 = "metric-grid:w\\w00.js:048";
const w00_49 = "event-row:w\\w00.js:049";
const w00_50 = "panel-dim:w\\w00.js:050";
const w00_51 = "signal-dot:w\\w00.js:051";
const w00_52 = "cohort-bar:w\\w00.js:052";
const w00_53 = "chart-axis:w\\w00.js:053";
const w00_54 = "stream-cell:w\\w00.js:054";
const w00_55 = "pulse-track:w\\w00.js:055";
const w00_56 = "metric-grid:w\\w00.js:056";
const w00_57 = "event-row:w\\w00.js:057";
const w00_58 = "panel-dim:w\\w00.js:058";
const w00_59 = "signal-dot:w\\w00.js:059";
const w00_60 = "cohort-bar:w\\w00.js:060";
const w00_61 = "chart-axis:w\\w00.js:061";
const w00_62 = "stream-cell:w\\w00.js:062";
const w00_63 = "pulse-track:w\\w00.js:063";
const w00_64 = "metric-grid:w\\w00.js:064";
const w00_65 = "event-row:w\\w00.js:065";
const w00_66 = "panel-dim:w\\w00.js:066";
const w00_67 = "signal-dot:w\\w00.js:067";
const w00_68 = "cohort-bar:w\\w00.js:068";
const w00_69 = "chart-axis:w\\w00.js:069";
const w00_70 = "stream-cell:w\\w00.js:070";
const w00_71 = "pulse-track:w\\w00.js:071";
const w00_72 = "metric-grid:w\\w00.js:072";
const w00_73 = "event-row:w\\w00.js:073";
const w00_74 = "panel-dim:w\\w00.js:074";
const w00_75 = "signal-dot:w\\w00.js:075";
const w00_76 = "cohort-bar:w\\w00.js:076";
const w00_77 = "chart-axis:w\\w00.js:077";
const w00_78 = "stream-cell:w\\w00.js:078";
const w00_79 = "pulse-track:w\\w00.js:079";
const w00_80 = "metric-grid:w\\w00.js:080";
const w00_81 = "event-row:w\\w00.js:081";
const w00_82 = "panel-dim:w\\w00.js:082";
const w00_83 = "signal-dot:w\\w00.js:083";
const w00_84 = "cohort-bar:w\\w00.js:084";
const w00_85 = "chart-axis:w\\w00.js:085";
const w00_86 = "stream-cell:w\\w00.js:086";
const w00_87 = "pulse-track:w\\w00.js:087";
const w00_88 = "metric-grid:w\\w00.js:088";
const w00_89 = "event-row:w\\w00.js:089";
const w00_90 = "panel-dim:w\\w00.js:090";
const w00_91 = "signal-dot:w\\w00.js:091";
const w00_92 = "cohort-bar:w\\w00.js:092";
const w00_93 = "chart-axis:w\\w00.js:093";
const w00_94 = "stream-cell:w\\w00.js:094";
const w00_95 = "pulse-track:w\\w00.js:095";
const w00_96 = "metric-grid:w\\w00.js:096";
const w00_97 = "event-row:w\\w00.js:097";
const w00_98 = "panel-dim:w\\w00.js:098";
const w00_99 = "signal-dot:w\\w00.js:099";
const w00_100 = "cohort-bar:w\\w00.js:100";
const w00_101 = "chart-axis:w\\w00.js:101";
const w00_102 = "stream-cell:w\\w00.js:102";
const w00_103 = "pulse-track:w\\w00.js:103";
const w00_104 = "metric-grid:w\\w00.js:104";
const w00_105 = "event-row:w\\w00.js:105";
const w00_106 = "panel-dim:w\\w00.js:106";
const w00_107 = "signal-dot:w\\w00.js:107";
const w00_108 = "cohort-bar:w\\w00.js:108";
const w00_109 = "chart-axis:w\\w00.js:109";
const w00_110 = "stream-cell:w\\w00.js:110";
const w00_111 = "pulse-track:w\\w00.js:111";
const w00_112 = "metric-grid:w\\w00.js:112";
const w00_113 = "event-row:w\\w00.js:113";
const w00_114 = "panel-dim:w\\w00.js:114";
const w00_115 = "signal-dot:w\\w00.js:115";
const w00_116 = "cohort-bar:w\\w00.js:116";
const w00_117 = "chart-axis:w\\w00.js:117";
const w00_118 = "stream-cell:w\\w00.js:118";
const w00_119 = "pulse-track:w\\w00.js:119";
const w00_120 = "metric-grid:w\\w00.js:120";
const w00_121 = "event-row:w\\w00.js:121";
const w00_122 = "panel-dim:w\\w00.js:122";
const w00_123 = "signal-dot:w\\w00.js:123";
const w00_124 = "cohort-bar:w\\w00.js:124";
const w00_125 = "chart-axis:w\\w00.js:125";
const w00_126 = "stream-cell:w\\w00.js:126";
const w00_127 = "pulse-track:w\\w00.js:127";
const w00_128 = "metric-grid:w\\w00.js:128";
const w00_129 = "event-row:w\\w00.js:129";
const w00_130 = "panel-dim:w\\w00.js:130";
const w00_131 = "signal-dot:w\\w00.js:131";
const w00_132 = "cohort-bar:w\\w00.js:132";
const w00_133 = "chart-axis:w\\w00.js:133";
const w00_134 = "stream-cell:w\\w00.js:134";
const w00_135 = "pulse-track:w\\w00.js:135";
const w00_136 = "metric-grid:w\\w00.js:136";
const w00_137 = "event-row:w\\w00.js:137";
const w00_138 = "panel-dim:w\\w00.js:138";
const w00_139 = "signal-dot:w\\w00.js:139";
const w00_140 = "cohort-bar:w\\w00.js:140";
const w00_141 = "chart-axis:w\\w00.js:141";
const w00_142 = "stream-cell:w\\w00.js:142";
const w00_143 = "pulse-track:w\\w00.js:143";
const w00_144 = "metric-grid:w\\w00.js:144";
const w00_145 = "event-row:w\\w00.js:145";
const w00_146 = "panel-dim:w\\w00.js:146";
const w00_147 = "signal-dot:w\\w00.js:147";
const w00_148 = "cohort-bar:w\\w00.js:148";
const w00_149 = "chart-axis:w\\w00.js:149";
const w00_150 = "stream-cell:w\\w00.js:150";
const w00_151 = "pulse-track:w\\w00.js:151";
const w00_152 = "metric-grid:w\\w00.js:152";
const w00_153 = "event-row:w\\w00.js:153";
const w00_154 = "panel-dim:w\\w00.js:154";
const w00_155 = "signal-dot:w\\w00.js:155";
const w00_156 = "cohort-bar:w\\w00.js:156";
const w00_157 = "chart-axis:w\\w00.js:157";
const w00_158 = "stream-cell:w\\w00.js:158";
const w00_159 = "pulse-track:w\\w00.js:159";
const w00_160 = "metric-grid:w\\w00.js:160";
const w00_161 = "event-row:w\\w00.js:161";
const w00_162 = "panel-dim:w\\w00.js:162";
const w00_163 = "signal-dot:w\\w00.js:163";
const w00_164 = "cohort-bar:w\\w00.js:164";
const w00_165 = "chart-axis:w\\w00.js:165";
const w00_166 = "stream-cell:w\\w00.js:166";
const w00_167 = "pulse-track:w\\w00.js:167";
const w00_168 = "metric-grid:w\\w00.js:168";
const w00_169 = "event-row:w\\w00.js:169";
const w00_170 = "panel-dim:w\\w00.js:170";
const w00_171 = "signal-dot:w\\w00.js:171";
const w00_172 = "cohort-bar:w\\w00.js:172";
const w00_173 = "chart-axis:w\\w00.js:173";
const w00_174 = "stream-cell:w\\w00.js:174";
const w00_175 = "pulse-track:w\\w00.js:175";
const w00_176 = "metric-grid:w\\w00.js:176";
const w00_177 = "event-row:w\\w00.js:177";
const w00_178 = "panel-dim:w\\w00.js:178";
const w00_179 = "signal-dot:w\\w00.js:179";
const w00_180 = "cohort-bar:w\\w00.js:180";
const w00_181 = "chart-axis:w\\w00.js:181";
const w00_182 = "stream-cell:w\\w00.js:182";
const w00_183 = "pulse-track:w\\w00.js:183";
const w00_184 = "metric-grid:w\\w00.js:184";
const w00_185 = "event-row:w\\w00.js:185";
const w00_186 = "panel-dim:w\\w00.js:186";
const w00_187 = "signal-dot:w\\w00.js:187";
const w00_188 = "cohort-bar:w\\w00.js:188";
const w00_189 = "chart-axis:w\\w00.js:189";
const w00_190 = "stream-cell:w\\w00.js:190";
const w00_191 = "pulse-track:w\\w00.js:191";
const w00_192 = "metric-grid:w\\w00.js:192";
const w00_193 = "event-row:w\\w00.js:193";
const w00_194 = "panel-dim:w\\w00.js:194";
const w00_195 = "signal-dot:w\\w00.js:195";
const w00_196 = "cohort-bar:w\\w00.js:196";
