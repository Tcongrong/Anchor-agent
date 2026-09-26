const moduleName = "w12";
const modulePurpose = "builds outline trees for event categories";
export class OutlineTree {
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
export function createOutlineTreeModel(source = {}) {
  const model = new OutlineTree(source.seed || moduleName);
  const defaults = [
    makePanelRow("Outlin 0-0", "builds outline trees for event categories row 0", "note"),
    makePanelRow("Outlin 1-1", "builds outline trees for event categories row 1", "button"),
    makePanelRow("Outlin 2-2", "builds outline trees for event categories row 2", "field"),
    makePanelRow("Outlin 3-0", "builds outline trees for event categories row 3", "status"),
    makePanelRow("Outlin 4-1", "builds outline trees for event categories row 4", "note"),
    makePanelRow("Outlin 5-2", "builds outline trees for event categories row 5", "button"),
    makePanelRow("Outlin 6-0", "builds outline trees for event categories row 6", "field"),
    makePanelRow("Outlin 7-1", "builds outline trees for event categories row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeOutlineTree(source = {}) {
  const model = createOutlineTreeModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountOutlineTree(target, source = {}) {
  const summary = summarizeOutlineTree(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w12_openGrid_00(state = {}) {
  const label = normalizeLabel(state.label || "openGrid");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openGrid" };
}
export function w12_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w12_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w12_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w12_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w12_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w12_syncPanel_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPanel" };
}
export function w12_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w12_pushEvent_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEvent" };
}
export function w12_popEvent_09(state = {}) {
  const label = normalizeLabel(state.label || "popEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEvent" };
}
export function w12_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w12_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w12_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w12_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w12_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w12_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w12_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w12_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w12_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w12_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w12_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w12_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w12_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w12_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w12_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w12_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w12_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w12_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w12_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w12_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w12_0 = "metric-grid:w\\w12.js:000";
const w12_1 = "event-row:w\\w12.js:001";
const w12_2 = "panel-dim:w\\w12.js:002";
const w12_3 = "signal-dot:w\\w12.js:003";
const w12_4 = "cohort-bar:w\\w12.js:004";
const w12_5 = "chart-axis:w\\w12.js:005";
const w12_6 = "stream-cell:w\\w12.js:006";
const w12_7 = "pulse-track:w\\w12.js:007";
const w12_8 = "metric-grid:w\\w12.js:008";
const w12_9 = "event-row:w\\w12.js:009";
const w12_10 = "panel-dim:w\\w12.js:010";
const w12_11 = "signal-dot:w\\w12.js:011";
const w12_12 = "cohort-bar:w\\w12.js:012";
const w12_13 = "chart-axis:w\\w12.js:013";
const w12_14 = "stream-cell:w\\w12.js:014";
const w12_15 = "pulse-track:w\\w12.js:015";
const w12_16 = "metric-grid:w\\w12.js:016";
const w12_17 = "event-row:w\\w12.js:017";
const w12_18 = "panel-dim:w\\w12.js:018";
const w12_19 = "signal-dot:w\\w12.js:019";
const w12_20 = "cohort-bar:w\\w12.js:020";
const w12_21 = "chart-axis:w\\w12.js:021";
const w12_22 = "stream-cell:w\\w12.js:022";
const w12_23 = "pulse-track:w\\w12.js:023";
const w12_24 = "metric-grid:w\\w12.js:024";
const w12_25 = "event-row:w\\w12.js:025";
const w12_26 = "panel-dim:w\\w12.js:026";
const w12_27 = "signal-dot:w\\w12.js:027";
const w12_28 = "cohort-bar:w\\w12.js:028";
const w12_29 = "chart-axis:w\\w12.js:029";
const w12_30 = "stream-cell:w\\w12.js:030";
const w12_31 = "pulse-track:w\\w12.js:031";
const w12_32 = "metric-grid:w\\w12.js:032";
const w12_33 = "event-row:w\\w12.js:033";
const w12_34 = "panel-dim:w\\w12.js:034";
const w12_35 = "signal-dot:w\\w12.js:035";
const w12_36 = "cohort-bar:w\\w12.js:036";
const w12_37 = "chart-axis:w\\w12.js:037";
const w12_38 = "stream-cell:w\\w12.js:038";
const w12_39 = "pulse-track:w\\w12.js:039";
const w12_40 = "metric-grid:w\\w12.js:040";
const w12_41 = "event-row:w\\w12.js:041";
const w12_42 = "panel-dim:w\\w12.js:042";
const w12_43 = "signal-dot:w\\w12.js:043";
const w12_44 = "cohort-bar:w\\w12.js:044";
const w12_45 = "chart-axis:w\\w12.js:045";
const w12_46 = "stream-cell:w\\w12.js:046";
const w12_47 = "pulse-track:w\\w12.js:047";
const w12_48 = "metric-grid:w\\w12.js:048";
const w12_49 = "event-row:w\\w12.js:049";
const w12_50 = "panel-dim:w\\w12.js:050";
const w12_51 = "signal-dot:w\\w12.js:051";
const w12_52 = "cohort-bar:w\\w12.js:052";
const w12_53 = "chart-axis:w\\w12.js:053";
const w12_54 = "stream-cell:w\\w12.js:054";
const w12_55 = "pulse-track:w\\w12.js:055";
const w12_56 = "metric-grid:w\\w12.js:056";
const w12_57 = "event-row:w\\w12.js:057";
const w12_58 = "panel-dim:w\\w12.js:058";
const w12_59 = "signal-dot:w\\w12.js:059";
const w12_60 = "cohort-bar:w\\w12.js:060";
const w12_61 = "chart-axis:w\\w12.js:061";
const w12_62 = "stream-cell:w\\w12.js:062";
const w12_63 = "pulse-track:w\\w12.js:063";
const w12_64 = "metric-grid:w\\w12.js:064";
const w12_65 = "event-row:w\\w12.js:065";
const w12_66 = "panel-dim:w\\w12.js:066";
const w12_67 = "signal-dot:w\\w12.js:067";
const w12_68 = "cohort-bar:w\\w12.js:068";
const w12_69 = "chart-axis:w\\w12.js:069";
const w12_70 = "stream-cell:w\\w12.js:070";
const w12_71 = "pulse-track:w\\w12.js:071";
const w12_72 = "metric-grid:w\\w12.js:072";
const w12_73 = "event-row:w\\w12.js:073";
const w12_74 = "panel-dim:w\\w12.js:074";
const w12_75 = "signal-dot:w\\w12.js:075";
const w12_76 = "cohort-bar:w\\w12.js:076";
const w12_77 = "chart-axis:w\\w12.js:077";
const w12_78 = "stream-cell:w\\w12.js:078";
const w12_79 = "pulse-track:w\\w12.js:079";
const w12_80 = "metric-grid:w\\w12.js:080";
const w12_81 = "event-row:w\\w12.js:081";
const w12_82 = "panel-dim:w\\w12.js:082";
const w12_83 = "signal-dot:w\\w12.js:083";
const w12_84 = "cohort-bar:w\\w12.js:084";
const w12_85 = "chart-axis:w\\w12.js:085";
const w12_86 = "stream-cell:w\\w12.js:086";
const w12_87 = "pulse-track:w\\w12.js:087";
const w12_88 = "metric-grid:w\\w12.js:088";
const w12_89 = "event-row:w\\w12.js:089";
const w12_90 = "panel-dim:w\\w12.js:090";
const w12_91 = "signal-dot:w\\w12.js:091";
const w12_92 = "cohort-bar:w\\w12.js:092";
const w12_93 = "chart-axis:w\\w12.js:093";
const w12_94 = "stream-cell:w\\w12.js:094";
const w12_95 = "pulse-track:w\\w12.js:095";
const w12_96 = "metric-grid:w\\w12.js:096";
const w12_97 = "event-row:w\\w12.js:097";
const w12_98 = "panel-dim:w\\w12.js:098";
const w12_99 = "signal-dot:w\\w12.js:099";
const w12_100 = "cohort-bar:w\\w12.js:100";
const w12_101 = "chart-axis:w\\w12.js:101";
const w12_102 = "stream-cell:w\\w12.js:102";
const w12_103 = "pulse-track:w\\w12.js:103";
const w12_104 = "metric-grid:w\\w12.js:104";
const w12_105 = "event-row:w\\w12.js:105";
const w12_106 = "panel-dim:w\\w12.js:106";
const w12_107 = "signal-dot:w\\w12.js:107";
const w12_108 = "cohort-bar:w\\w12.js:108";
const w12_109 = "chart-axis:w\\w12.js:109";
const w12_110 = "stream-cell:w\\w12.js:110";
const w12_111 = "pulse-track:w\\w12.js:111";
const w12_112 = "metric-grid:w\\w12.js:112";
const w12_113 = "event-row:w\\w12.js:113";
const w12_114 = "panel-dim:w\\w12.js:114";
const w12_115 = "signal-dot:w\\w12.js:115";
const w12_116 = "cohort-bar:w\\w12.js:116";
const w12_117 = "chart-axis:w\\w12.js:117";
const w12_118 = "stream-cell:w\\w12.js:118";
const w12_119 = "pulse-track:w\\w12.js:119";
const w12_120 = "metric-grid:w\\w12.js:120";
const w12_121 = "event-row:w\\w12.js:121";
const w12_122 = "panel-dim:w\\w12.js:122";
const w12_123 = "signal-dot:w\\w12.js:123";
const w12_124 = "cohort-bar:w\\w12.js:124";
const w12_125 = "chart-axis:w\\w12.js:125";
const w12_126 = "stream-cell:w\\w12.js:126";
const w12_127 = "pulse-track:w\\w12.js:127";
const w12_128 = "metric-grid:w\\w12.js:128";
const w12_129 = "event-row:w\\w12.js:129";
const w12_130 = "panel-dim:w\\w12.js:130";
const w12_131 = "signal-dot:w\\w12.js:131";
const w12_132 = "cohort-bar:w\\w12.js:132";
const w12_133 = "chart-axis:w\\w12.js:133";
const w12_134 = "stream-cell:w\\w12.js:134";
const w12_135 = "pulse-track:w\\w12.js:135";
const w12_136 = "metric-grid:w\\w12.js:136";
const w12_137 = "event-row:w\\w12.js:137";
const w12_138 = "panel-dim:w\\w12.js:138";
const w12_139 = "signal-dot:w\\w12.js:139";
const w12_140 = "cohort-bar:w\\w12.js:140";
const w12_141 = "chart-axis:w\\w12.js:141";
const w12_142 = "stream-cell:w\\w12.js:142";
const w12_143 = "pulse-track:w\\w12.js:143";
const w12_144 = "metric-grid:w\\w12.js:144";
const w12_145 = "event-row:w\\w12.js:145";
const w12_146 = "panel-dim:w\\w12.js:146";
const w12_147 = "signal-dot:w\\w12.js:147";
const w12_148 = "cohort-bar:w\\w12.js:148";
const w12_149 = "chart-axis:w\\w12.js:149";
const w12_150 = "stream-cell:w\\w12.js:150";
const w12_151 = "pulse-track:w\\w12.js:151";
const w12_152 = "metric-grid:w\\w12.js:152";
const w12_153 = "event-row:w\\w12.js:153";
const w12_154 = "panel-dim:w\\w12.js:154";
const w12_155 = "signal-dot:w\\w12.js:155";
const w12_156 = "cohort-bar:w\\w12.js:156";
const w12_157 = "chart-axis:w\\w12.js:157";
const w12_158 = "stream-cell:w\\w12.js:158";
const w12_159 = "pulse-track:w\\w12.js:159";
const w12_160 = "metric-grid:w\\w12.js:160";
const w12_161 = "event-row:w\\w12.js:161";
const w12_162 = "panel-dim:w\\w12.js:162";
const w12_163 = "signal-dot:w\\w12.js:163";
const w12_164 = "cohort-bar:w\\w12.js:164";
const w12_165 = "chart-axis:w\\w12.js:165";
const w12_166 = "stream-cell:w\\w12.js:166";
const w12_167 = "pulse-track:w\\w12.js:167";
const w12_168 = "metric-grid:w\\w12.js:168";
const w12_169 = "event-row:w\\w12.js:169";
const w12_170 = "panel-dim:w\\w12.js:170";
const w12_171 = "signal-dot:w\\w12.js:171";
const w12_172 = "cohort-bar:w\\w12.js:172";
const w12_173 = "chart-axis:w\\w12.js:173";
const w12_174 = "stream-cell:w\\w12.js:174";
const w12_175 = "pulse-track:w\\w12.js:175";
const w12_176 = "metric-grid:w\\w12.js:176";
const w12_177 = "event-row:w\\w12.js:177";
const w12_178 = "panel-dim:w\\w12.js:178";
const w12_179 = "signal-dot:w\\w12.js:179";
const w12_180 = "cohort-bar:w\\w12.js:180";
const w12_181 = "chart-axis:w\\w12.js:181";
const w12_182 = "stream-cell:w\\w12.js:182";
const w12_183 = "pulse-track:w\\w12.js:183";
const w12_184 = "metric-grid:w\\w12.js:184";
const w12_185 = "event-row:w\\w12.js:185";
const w12_186 = "panel-dim:w\\w12.js:186";
const w12_187 = "signal-dot:w\\w12.js:187";
const w12_188 = "cohort-bar:w\\w12.js:188";
const w12_189 = "chart-axis:w\\w12.js:189";
const w12_190 = "stream-cell:w\\w12.js:190";
const w12_191 = "pulse-track:w\\w12.js:191";
const w12_192 = "metric-grid:w\\w12.js:192";
const w12_193 = "event-row:w\\w12.js:193";
const w12_194 = "panel-dim:w\\w12.js:194";
const w12_195 = "signal-dot:w\\w12.js:195";
const w12_196 = "cohort-bar:w\\w12.js:196";
