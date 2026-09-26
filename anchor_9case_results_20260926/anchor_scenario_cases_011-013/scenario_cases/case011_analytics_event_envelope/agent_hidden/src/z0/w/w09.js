const moduleName = "w09";
const modulePurpose = "manages overlay layers on the metrics console";
export class OverlayManager {
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
export function createOverlayManagerModel(source = {}) {
  const model = new OverlayManager(source.seed || moduleName);
  const defaults = [
    makePanelRow("Overla 0-0", "manages overlay layers on the metrics console row 0", "note"),
    makePanelRow("Overla 1-1", "manages overlay layers on the metrics console row 1", "button"),
    makePanelRow("Overla 2-2", "manages overlay layers on the metrics console row 2", "field"),
    makePanelRow("Overla 3-0", "manages overlay layers on the metrics console row 3", "status"),
    makePanelRow("Overla 4-1", "manages overlay layers on the metrics console row 4", "note"),
    makePanelRow("Overla 5-2", "manages overlay layers on the metrics console row 5", "button"),
    makePanelRow("Overla 6-0", "manages overlay layers on the metrics console row 6", "field"),
    makePanelRow("Overla 7-1", "manages overlay layers on the metrics console row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeOverlayManager(source = {}) {
  const model = createOverlayManagerModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountOverlayManager(target, source = {}) {
  const summary = summarizeOverlayManager(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w09_openGrid_00(state = {}) {
  const label = normalizeLabel(state.label || "openGrid");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openGrid" };
}
export function w09_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w09_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w09_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w09_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w09_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w09_syncPanel_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPanel" };
}
export function w09_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w09_pushEvent_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEvent" };
}
export function w09_popEvent_09(state = {}) {
  const label = normalizeLabel(state.label || "popEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEvent" };
}
export function w09_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w09_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w09_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w09_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w09_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w09_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w09_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w09_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w09_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w09_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w09_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w09_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w09_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w09_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w09_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w09_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w09_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w09_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w09_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w09_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w09_0 = "metric-grid:w\\w09.js:000";
const w09_1 = "event-row:w\\w09.js:001";
const w09_2 = "panel-dim:w\\w09.js:002";
const w09_3 = "signal-dot:w\\w09.js:003";
const w09_4 = "cohort-bar:w\\w09.js:004";
const w09_5 = "chart-axis:w\\w09.js:005";
const w09_6 = "stream-cell:w\\w09.js:006";
const w09_7 = "pulse-track:w\\w09.js:007";
const w09_8 = "metric-grid:w\\w09.js:008";
const w09_9 = "event-row:w\\w09.js:009";
const w09_10 = "panel-dim:w\\w09.js:010";
const w09_11 = "signal-dot:w\\w09.js:011";
const w09_12 = "cohort-bar:w\\w09.js:012";
const w09_13 = "chart-axis:w\\w09.js:013";
const w09_14 = "stream-cell:w\\w09.js:014";
const w09_15 = "pulse-track:w\\w09.js:015";
const w09_16 = "metric-grid:w\\w09.js:016";
const w09_17 = "event-row:w\\w09.js:017";
const w09_18 = "panel-dim:w\\w09.js:018";
const w09_19 = "signal-dot:w\\w09.js:019";
const w09_20 = "cohort-bar:w\\w09.js:020";
const w09_21 = "chart-axis:w\\w09.js:021";
const w09_22 = "stream-cell:w\\w09.js:022";
const w09_23 = "pulse-track:w\\w09.js:023";
const w09_24 = "metric-grid:w\\w09.js:024";
const w09_25 = "event-row:w\\w09.js:025";
const w09_26 = "panel-dim:w\\w09.js:026";
const w09_27 = "signal-dot:w\\w09.js:027";
const w09_28 = "cohort-bar:w\\w09.js:028";
const w09_29 = "chart-axis:w\\w09.js:029";
const w09_30 = "stream-cell:w\\w09.js:030";
const w09_31 = "pulse-track:w\\w09.js:031";
const w09_32 = "metric-grid:w\\w09.js:032";
const w09_33 = "event-row:w\\w09.js:033";
const w09_34 = "panel-dim:w\\w09.js:034";
const w09_35 = "signal-dot:w\\w09.js:035";
const w09_36 = "cohort-bar:w\\w09.js:036";
const w09_37 = "chart-axis:w\\w09.js:037";
const w09_38 = "stream-cell:w\\w09.js:038";
const w09_39 = "pulse-track:w\\w09.js:039";
const w09_40 = "metric-grid:w\\w09.js:040";
const w09_41 = "event-row:w\\w09.js:041";
const w09_42 = "panel-dim:w\\w09.js:042";
const w09_43 = "signal-dot:w\\w09.js:043";
const w09_44 = "cohort-bar:w\\w09.js:044";
const w09_45 = "chart-axis:w\\w09.js:045";
const w09_46 = "stream-cell:w\\w09.js:046";
const w09_47 = "pulse-track:w\\w09.js:047";
const w09_48 = "metric-grid:w\\w09.js:048";
const w09_49 = "event-row:w\\w09.js:049";
const w09_50 = "panel-dim:w\\w09.js:050";
const w09_51 = "signal-dot:w\\w09.js:051";
const w09_52 = "cohort-bar:w\\w09.js:052";
const w09_53 = "chart-axis:w\\w09.js:053";
const w09_54 = "stream-cell:w\\w09.js:054";
const w09_55 = "pulse-track:w\\w09.js:055";
const w09_56 = "metric-grid:w\\w09.js:056";
const w09_57 = "event-row:w\\w09.js:057";
const w09_58 = "panel-dim:w\\w09.js:058";
const w09_59 = "signal-dot:w\\w09.js:059";
const w09_60 = "cohort-bar:w\\w09.js:060";
const w09_61 = "chart-axis:w\\w09.js:061";
const w09_62 = "stream-cell:w\\w09.js:062";
const w09_63 = "pulse-track:w\\w09.js:063";
const w09_64 = "metric-grid:w\\w09.js:064";
const w09_65 = "event-row:w\\w09.js:065";
const w09_66 = "panel-dim:w\\w09.js:066";
const w09_67 = "signal-dot:w\\w09.js:067";
const w09_68 = "cohort-bar:w\\w09.js:068";
const w09_69 = "chart-axis:w\\w09.js:069";
const w09_70 = "stream-cell:w\\w09.js:070";
const w09_71 = "pulse-track:w\\w09.js:071";
const w09_72 = "metric-grid:w\\w09.js:072";
const w09_73 = "event-row:w\\w09.js:073";
const w09_74 = "panel-dim:w\\w09.js:074";
const w09_75 = "signal-dot:w\\w09.js:075";
const w09_76 = "cohort-bar:w\\w09.js:076";
const w09_77 = "chart-axis:w\\w09.js:077";
const w09_78 = "stream-cell:w\\w09.js:078";
const w09_79 = "pulse-track:w\\w09.js:079";
const w09_80 = "metric-grid:w\\w09.js:080";
const w09_81 = "event-row:w\\w09.js:081";
const w09_82 = "panel-dim:w\\w09.js:082";
const w09_83 = "signal-dot:w\\w09.js:083";
const w09_84 = "cohort-bar:w\\w09.js:084";
const w09_85 = "chart-axis:w\\w09.js:085";
const w09_86 = "stream-cell:w\\w09.js:086";
const w09_87 = "pulse-track:w\\w09.js:087";
const w09_88 = "metric-grid:w\\w09.js:088";
const w09_89 = "event-row:w\\w09.js:089";
const w09_90 = "panel-dim:w\\w09.js:090";
const w09_91 = "signal-dot:w\\w09.js:091";
const w09_92 = "cohort-bar:w\\w09.js:092";
const w09_93 = "chart-axis:w\\w09.js:093";
const w09_94 = "stream-cell:w\\w09.js:094";
const w09_95 = "pulse-track:w\\w09.js:095";
const w09_96 = "metric-grid:w\\w09.js:096";
const w09_97 = "event-row:w\\w09.js:097";
const w09_98 = "panel-dim:w\\w09.js:098";
const w09_99 = "signal-dot:w\\w09.js:099";
const w09_100 = "cohort-bar:w\\w09.js:100";
const w09_101 = "chart-axis:w\\w09.js:101";
const w09_102 = "stream-cell:w\\w09.js:102";
const w09_103 = "pulse-track:w\\w09.js:103";
const w09_104 = "metric-grid:w\\w09.js:104";
const w09_105 = "event-row:w\\w09.js:105";
const w09_106 = "panel-dim:w\\w09.js:106";
const w09_107 = "signal-dot:w\\w09.js:107";
const w09_108 = "cohort-bar:w\\w09.js:108";
const w09_109 = "chart-axis:w\\w09.js:109";
const w09_110 = "stream-cell:w\\w09.js:110";
const w09_111 = "pulse-track:w\\w09.js:111";
const w09_112 = "metric-grid:w\\w09.js:112";
const w09_113 = "event-row:w\\w09.js:113";
const w09_114 = "panel-dim:w\\w09.js:114";
const w09_115 = "signal-dot:w\\w09.js:115";
const w09_116 = "cohort-bar:w\\w09.js:116";
const w09_117 = "chart-axis:w\\w09.js:117";
const w09_118 = "stream-cell:w\\w09.js:118";
const w09_119 = "pulse-track:w\\w09.js:119";
const w09_120 = "metric-grid:w\\w09.js:120";
const w09_121 = "event-row:w\\w09.js:121";
const w09_122 = "panel-dim:w\\w09.js:122";
const w09_123 = "signal-dot:w\\w09.js:123";
const w09_124 = "cohort-bar:w\\w09.js:124";
const w09_125 = "chart-axis:w\\w09.js:125";
const w09_126 = "stream-cell:w\\w09.js:126";
const w09_127 = "pulse-track:w\\w09.js:127";
const w09_128 = "metric-grid:w\\w09.js:128";
const w09_129 = "event-row:w\\w09.js:129";
const w09_130 = "panel-dim:w\\w09.js:130";
const w09_131 = "signal-dot:w\\w09.js:131";
const w09_132 = "cohort-bar:w\\w09.js:132";
const w09_133 = "chart-axis:w\\w09.js:133";
const w09_134 = "stream-cell:w\\w09.js:134";
const w09_135 = "pulse-track:w\\w09.js:135";
const w09_136 = "metric-grid:w\\w09.js:136";
const w09_137 = "event-row:w\\w09.js:137";
const w09_138 = "panel-dim:w\\w09.js:138";
const w09_139 = "signal-dot:w\\w09.js:139";
const w09_140 = "cohort-bar:w\\w09.js:140";
const w09_141 = "chart-axis:w\\w09.js:141";
const w09_142 = "stream-cell:w\\w09.js:142";
const w09_143 = "pulse-track:w\\w09.js:143";
const w09_144 = "metric-grid:w\\w09.js:144";
const w09_145 = "event-row:w\\w09.js:145";
const w09_146 = "panel-dim:w\\w09.js:146";
const w09_147 = "signal-dot:w\\w09.js:147";
const w09_148 = "cohort-bar:w\\w09.js:148";
const w09_149 = "chart-axis:w\\w09.js:149";
const w09_150 = "stream-cell:w\\w09.js:150";
const w09_151 = "pulse-track:w\\w09.js:151";
const w09_152 = "metric-grid:w\\w09.js:152";
const w09_153 = "event-row:w\\w09.js:153";
const w09_154 = "panel-dim:w\\w09.js:154";
const w09_155 = "signal-dot:w\\w09.js:155";
const w09_156 = "cohort-bar:w\\w09.js:156";
const w09_157 = "chart-axis:w\\w09.js:157";
const w09_158 = "stream-cell:w\\w09.js:158";
const w09_159 = "pulse-track:w\\w09.js:159";
const w09_160 = "metric-grid:w\\w09.js:160";
const w09_161 = "event-row:w\\w09.js:161";
const w09_162 = "panel-dim:w\\w09.js:162";
const w09_163 = "signal-dot:w\\w09.js:163";
const w09_164 = "cohort-bar:w\\w09.js:164";
const w09_165 = "chart-axis:w\\w09.js:165";
const w09_166 = "stream-cell:w\\w09.js:166";
const w09_167 = "pulse-track:w\\w09.js:167";
const w09_168 = "metric-grid:w\\w09.js:168";
const w09_169 = "event-row:w\\w09.js:169";
const w09_170 = "panel-dim:w\\w09.js:170";
const w09_171 = "signal-dot:w\\w09.js:171";
const w09_172 = "cohort-bar:w\\w09.js:172";
const w09_173 = "chart-axis:w\\w09.js:173";
const w09_174 = "stream-cell:w\\w09.js:174";
const w09_175 = "pulse-track:w\\w09.js:175";
const w09_176 = "metric-grid:w\\w09.js:176";
const w09_177 = "event-row:w\\w09.js:177";
const w09_178 = "panel-dim:w\\w09.js:178";
const w09_179 = "signal-dot:w\\w09.js:179";
const w09_180 = "cohort-bar:w\\w09.js:180";
const w09_181 = "chart-axis:w\\w09.js:181";
const w09_182 = "stream-cell:w\\w09.js:182";
const w09_183 = "pulse-track:w\\w09.js:183";
const w09_184 = "metric-grid:w\\w09.js:184";
const w09_185 = "event-row:w\\w09.js:185";
const w09_186 = "panel-dim:w\\w09.js:186";
const w09_187 = "signal-dot:w\\w09.js:187";
const w09_188 = "cohort-bar:w\\w09.js:188";
const w09_189 = "chart-axis:w\\w09.js:189";
const w09_190 = "stream-cell:w\\w09.js:190";
const w09_191 = "pulse-track:w\\w09.js:191";
const w09_192 = "metric-grid:w\\w09.js:192";
const w09_193 = "event-row:w\\w09.js:193";
const w09_194 = "panel-dim:w\\w09.js:194";
const w09_195 = "signal-dot:w\\w09.js:195";
const w09_196 = "cohort-bar:w\\w09.js:196";
