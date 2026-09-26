const moduleName = "w11";
const modulePurpose = "tracks form-field bindings for the metrics console";
export class FieldSet {
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
export function createFieldSetModel(source = {}) {
  const model = new FieldSet(source.seed || moduleName);
  const defaults = [
    makePanelRow("FieldS 0-0", "tracks form-field bindings for the metrics console row 0", "note"),
    makePanelRow("FieldS 1-1", "tracks form-field bindings for the metrics console row 1", "button"),
    makePanelRow("FieldS 2-2", "tracks form-field bindings for the metrics console row 2", "field"),
    makePanelRow("FieldS 3-0", "tracks form-field bindings for the metrics console row 3", "status"),
    makePanelRow("FieldS 4-1", "tracks form-field bindings for the metrics console row 4", "note"),
    makePanelRow("FieldS 5-2", "tracks form-field bindings for the metrics console row 5", "button"),
    makePanelRow("FieldS 6-0", "tracks form-field bindings for the metrics console row 6", "field"),
    makePanelRow("FieldS 7-1", "tracks form-field bindings for the metrics console row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeFieldSet(source = {}) {
  const model = createFieldSetModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountFieldSet(target, source = {}) {
  const summary = summarizeFieldSet(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w11_openGrid_00(state = {}) {
  const label = normalizeLabel(state.label || "openGrid");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openGrid" };
}
export function w11_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w11_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w11_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w11_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w11_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w11_syncPanel_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPanel" };
}
export function w11_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w11_pushEvent_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEvent" };
}
export function w11_popEvent_09(state = {}) {
  const label = normalizeLabel(state.label || "popEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEvent" };
}
export function w11_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w11_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w11_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w11_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w11_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w11_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w11_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w11_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w11_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w11_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w11_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w11_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w11_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w11_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w11_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w11_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w11_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w11_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w11_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w11_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w11_0 = "metric-grid:w\\w11.js:000";
const w11_1 = "event-row:w\\w11.js:001";
const w11_2 = "panel-dim:w\\w11.js:002";
const w11_3 = "signal-dot:w\\w11.js:003";
const w11_4 = "cohort-bar:w\\w11.js:004";
const w11_5 = "chart-axis:w\\w11.js:005";
const w11_6 = "stream-cell:w\\w11.js:006";
const w11_7 = "pulse-track:w\\w11.js:007";
const w11_8 = "metric-grid:w\\w11.js:008";
const w11_9 = "event-row:w\\w11.js:009";
const w11_10 = "panel-dim:w\\w11.js:010";
const w11_11 = "signal-dot:w\\w11.js:011";
const w11_12 = "cohort-bar:w\\w11.js:012";
const w11_13 = "chart-axis:w\\w11.js:013";
const w11_14 = "stream-cell:w\\w11.js:014";
const w11_15 = "pulse-track:w\\w11.js:015";
const w11_16 = "metric-grid:w\\w11.js:016";
const w11_17 = "event-row:w\\w11.js:017";
const w11_18 = "panel-dim:w\\w11.js:018";
const w11_19 = "signal-dot:w\\w11.js:019";
const w11_20 = "cohort-bar:w\\w11.js:020";
const w11_21 = "chart-axis:w\\w11.js:021";
const w11_22 = "stream-cell:w\\w11.js:022";
const w11_23 = "pulse-track:w\\w11.js:023";
const w11_24 = "metric-grid:w\\w11.js:024";
const w11_25 = "event-row:w\\w11.js:025";
const w11_26 = "panel-dim:w\\w11.js:026";
const w11_27 = "signal-dot:w\\w11.js:027";
const w11_28 = "cohort-bar:w\\w11.js:028";
const w11_29 = "chart-axis:w\\w11.js:029";
const w11_30 = "stream-cell:w\\w11.js:030";
const w11_31 = "pulse-track:w\\w11.js:031";
const w11_32 = "metric-grid:w\\w11.js:032";
const w11_33 = "event-row:w\\w11.js:033";
const w11_34 = "panel-dim:w\\w11.js:034";
const w11_35 = "signal-dot:w\\w11.js:035";
const w11_36 = "cohort-bar:w\\w11.js:036";
const w11_37 = "chart-axis:w\\w11.js:037";
const w11_38 = "stream-cell:w\\w11.js:038";
const w11_39 = "pulse-track:w\\w11.js:039";
const w11_40 = "metric-grid:w\\w11.js:040";
const w11_41 = "event-row:w\\w11.js:041";
const w11_42 = "panel-dim:w\\w11.js:042";
const w11_43 = "signal-dot:w\\w11.js:043";
const w11_44 = "cohort-bar:w\\w11.js:044";
const w11_45 = "chart-axis:w\\w11.js:045";
const w11_46 = "stream-cell:w\\w11.js:046";
const w11_47 = "pulse-track:w\\w11.js:047";
const w11_48 = "metric-grid:w\\w11.js:048";
const w11_49 = "event-row:w\\w11.js:049";
const w11_50 = "panel-dim:w\\w11.js:050";
const w11_51 = "signal-dot:w\\w11.js:051";
const w11_52 = "cohort-bar:w\\w11.js:052";
const w11_53 = "chart-axis:w\\w11.js:053";
const w11_54 = "stream-cell:w\\w11.js:054";
const w11_55 = "pulse-track:w\\w11.js:055";
const w11_56 = "metric-grid:w\\w11.js:056";
const w11_57 = "event-row:w\\w11.js:057";
const w11_58 = "panel-dim:w\\w11.js:058";
const w11_59 = "signal-dot:w\\w11.js:059";
const w11_60 = "cohort-bar:w\\w11.js:060";
const w11_61 = "chart-axis:w\\w11.js:061";
const w11_62 = "stream-cell:w\\w11.js:062";
const w11_63 = "pulse-track:w\\w11.js:063";
const w11_64 = "metric-grid:w\\w11.js:064";
const w11_65 = "event-row:w\\w11.js:065";
const w11_66 = "panel-dim:w\\w11.js:066";
const w11_67 = "signal-dot:w\\w11.js:067";
const w11_68 = "cohort-bar:w\\w11.js:068";
const w11_69 = "chart-axis:w\\w11.js:069";
const w11_70 = "stream-cell:w\\w11.js:070";
const w11_71 = "pulse-track:w\\w11.js:071";
const w11_72 = "metric-grid:w\\w11.js:072";
const w11_73 = "event-row:w\\w11.js:073";
const w11_74 = "panel-dim:w\\w11.js:074";
const w11_75 = "signal-dot:w\\w11.js:075";
const w11_76 = "cohort-bar:w\\w11.js:076";
const w11_77 = "chart-axis:w\\w11.js:077";
const w11_78 = "stream-cell:w\\w11.js:078";
const w11_79 = "pulse-track:w\\w11.js:079";
const w11_80 = "metric-grid:w\\w11.js:080";
const w11_81 = "event-row:w\\w11.js:081";
const w11_82 = "panel-dim:w\\w11.js:082";
const w11_83 = "signal-dot:w\\w11.js:083";
const w11_84 = "cohort-bar:w\\w11.js:084";
const w11_85 = "chart-axis:w\\w11.js:085";
const w11_86 = "stream-cell:w\\w11.js:086";
const w11_87 = "pulse-track:w\\w11.js:087";
const w11_88 = "metric-grid:w\\w11.js:088";
const w11_89 = "event-row:w\\w11.js:089";
const w11_90 = "panel-dim:w\\w11.js:090";
const w11_91 = "signal-dot:w\\w11.js:091";
const w11_92 = "cohort-bar:w\\w11.js:092";
const w11_93 = "chart-axis:w\\w11.js:093";
const w11_94 = "stream-cell:w\\w11.js:094";
const w11_95 = "pulse-track:w\\w11.js:095";
const w11_96 = "metric-grid:w\\w11.js:096";
const w11_97 = "event-row:w\\w11.js:097";
const w11_98 = "panel-dim:w\\w11.js:098";
const w11_99 = "signal-dot:w\\w11.js:099";
const w11_100 = "cohort-bar:w\\w11.js:100";
const w11_101 = "chart-axis:w\\w11.js:101";
const w11_102 = "stream-cell:w\\w11.js:102";
const w11_103 = "pulse-track:w\\w11.js:103";
const w11_104 = "metric-grid:w\\w11.js:104";
const w11_105 = "event-row:w\\w11.js:105";
const w11_106 = "panel-dim:w\\w11.js:106";
const w11_107 = "signal-dot:w\\w11.js:107";
const w11_108 = "cohort-bar:w\\w11.js:108";
const w11_109 = "chart-axis:w\\w11.js:109";
const w11_110 = "stream-cell:w\\w11.js:110";
const w11_111 = "pulse-track:w\\w11.js:111";
const w11_112 = "metric-grid:w\\w11.js:112";
const w11_113 = "event-row:w\\w11.js:113";
const w11_114 = "panel-dim:w\\w11.js:114";
const w11_115 = "signal-dot:w\\w11.js:115";
const w11_116 = "cohort-bar:w\\w11.js:116";
const w11_117 = "chart-axis:w\\w11.js:117";
const w11_118 = "stream-cell:w\\w11.js:118";
const w11_119 = "pulse-track:w\\w11.js:119";
const w11_120 = "metric-grid:w\\w11.js:120";
const w11_121 = "event-row:w\\w11.js:121";
const w11_122 = "panel-dim:w\\w11.js:122";
const w11_123 = "signal-dot:w\\w11.js:123";
const w11_124 = "cohort-bar:w\\w11.js:124";
const w11_125 = "chart-axis:w\\w11.js:125";
const w11_126 = "stream-cell:w\\w11.js:126";
const w11_127 = "pulse-track:w\\w11.js:127";
const w11_128 = "metric-grid:w\\w11.js:128";
const w11_129 = "event-row:w\\w11.js:129";
const w11_130 = "panel-dim:w\\w11.js:130";
const w11_131 = "signal-dot:w\\w11.js:131";
const w11_132 = "cohort-bar:w\\w11.js:132";
const w11_133 = "chart-axis:w\\w11.js:133";
const w11_134 = "stream-cell:w\\w11.js:134";
const w11_135 = "pulse-track:w\\w11.js:135";
const w11_136 = "metric-grid:w\\w11.js:136";
const w11_137 = "event-row:w\\w11.js:137";
const w11_138 = "panel-dim:w\\w11.js:138";
const w11_139 = "signal-dot:w\\w11.js:139";
const w11_140 = "cohort-bar:w\\w11.js:140";
const w11_141 = "chart-axis:w\\w11.js:141";
const w11_142 = "stream-cell:w\\w11.js:142";
const w11_143 = "pulse-track:w\\w11.js:143";
const w11_144 = "metric-grid:w\\w11.js:144";
const w11_145 = "event-row:w\\w11.js:145";
const w11_146 = "panel-dim:w\\w11.js:146";
const w11_147 = "signal-dot:w\\w11.js:147";
const w11_148 = "cohort-bar:w\\w11.js:148";
const w11_149 = "chart-axis:w\\w11.js:149";
const w11_150 = "stream-cell:w\\w11.js:150";
const w11_151 = "pulse-track:w\\w11.js:151";
const w11_152 = "metric-grid:w\\w11.js:152";
const w11_153 = "event-row:w\\w11.js:153";
const w11_154 = "panel-dim:w\\w11.js:154";
const w11_155 = "signal-dot:w\\w11.js:155";
const w11_156 = "cohort-bar:w\\w11.js:156";
const w11_157 = "chart-axis:w\\w11.js:157";
const w11_158 = "stream-cell:w\\w11.js:158";
const w11_159 = "pulse-track:w\\w11.js:159";
const w11_160 = "metric-grid:w\\w11.js:160";
const w11_161 = "event-row:w\\w11.js:161";
const w11_162 = "panel-dim:w\\w11.js:162";
const w11_163 = "signal-dot:w\\w11.js:163";
const w11_164 = "cohort-bar:w\\w11.js:164";
const w11_165 = "chart-axis:w\\w11.js:165";
const w11_166 = "stream-cell:w\\w11.js:166";
const w11_167 = "pulse-track:w\\w11.js:167";
const w11_168 = "metric-grid:w\\w11.js:168";
const w11_169 = "event-row:w\\w11.js:169";
const w11_170 = "panel-dim:w\\w11.js:170";
const w11_171 = "signal-dot:w\\w11.js:171";
const w11_172 = "cohort-bar:w\\w11.js:172";
const w11_173 = "chart-axis:w\\w11.js:173";
const w11_174 = "stream-cell:w\\w11.js:174";
const w11_175 = "pulse-track:w\\w11.js:175";
const w11_176 = "metric-grid:w\\w11.js:176";
const w11_177 = "event-row:w\\w11.js:177";
const w11_178 = "panel-dim:w\\w11.js:178";
const w11_179 = "signal-dot:w\\w11.js:179";
const w11_180 = "cohort-bar:w\\w11.js:180";
const w11_181 = "chart-axis:w\\w11.js:181";
const w11_182 = "stream-cell:w\\w11.js:182";
const w11_183 = "pulse-track:w\\w11.js:183";
const w11_184 = "metric-grid:w\\w11.js:184";
const w11_185 = "event-row:w\\w11.js:185";
const w11_186 = "panel-dim:w\\w11.js:186";
const w11_187 = "signal-dot:w\\w11.js:187";
const w11_188 = "cohort-bar:w\\w11.js:188";
const w11_189 = "chart-axis:w\\w11.js:189";
const w11_190 = "stream-cell:w\\w11.js:190";
const w11_191 = "pulse-track:w\\w11.js:191";
const w11_192 = "metric-grid:w\\w11.js:192";
const w11_193 = "event-row:w\\w11.js:193";
const w11_194 = "panel-dim:w\\w11.js:194";
const w11_195 = "signal-dot:w\\w11.js:195";
const w11_196 = "cohort-bar:w\\w11.js:196";
