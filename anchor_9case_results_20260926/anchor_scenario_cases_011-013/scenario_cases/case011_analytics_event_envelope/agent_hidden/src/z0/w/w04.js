const moduleName = "w04";
const modulePurpose = "catalogs chart-axis definitions for metric panels";
export class ChartCatalog {
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
export function createChartCatalogModel(source = {}) {
  const model = new ChartCatalog(source.seed || moduleName);
  const defaults = [
    makePanelRow("ChartC 0-0", "catalogs chart-axis definitions for metric panels row 0", "note"),
    makePanelRow("ChartC 1-1", "catalogs chart-axis definitions for metric panels row 1", "button"),
    makePanelRow("ChartC 2-2", "catalogs chart-axis definitions for metric panels row 2", "field"),
    makePanelRow("ChartC 3-0", "catalogs chart-axis definitions for metric panels row 3", "status"),
    makePanelRow("ChartC 4-1", "catalogs chart-axis definitions for metric panels row 4", "note"),
    makePanelRow("ChartC 5-2", "catalogs chart-axis definitions for metric panels row 5", "button"),
    makePanelRow("ChartC 6-0", "catalogs chart-axis definitions for metric panels row 6", "field"),
    makePanelRow("ChartC 7-1", "catalogs chart-axis definitions for metric panels row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeChartCatalog(source = {}) {
  const model = createChartCatalogModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountChartCatalog(target, source = {}) {
  const summary = summarizeChartCatalog(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w04_openGrid_00(state = {}) {
  const label = normalizeLabel(state.label || "openGrid");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openGrid" };
}
export function w04_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w04_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w04_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w04_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w04_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w04_syncPanel_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPanel" };
}
export function w04_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w04_pushEvent_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEvent" };
}
export function w04_popEvent_09(state = {}) {
  const label = normalizeLabel(state.label || "popEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEvent" };
}
export function w04_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w04_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w04_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w04_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w04_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w04_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w04_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w04_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w04_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w04_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w04_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w04_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w04_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w04_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w04_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w04_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w04_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w04_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w04_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w04_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w04_0 = "metric-grid:w\\w04.js:000";
const w04_1 = "event-row:w\\w04.js:001";
const w04_2 = "panel-dim:w\\w04.js:002";
const w04_3 = "signal-dot:w\\w04.js:003";
const w04_4 = "cohort-bar:w\\w04.js:004";
const w04_5 = "chart-axis:w\\w04.js:005";
const w04_6 = "stream-cell:w\\w04.js:006";
const w04_7 = "pulse-track:w\\w04.js:007";
const w04_8 = "metric-grid:w\\w04.js:008";
const w04_9 = "event-row:w\\w04.js:009";
const w04_10 = "panel-dim:w\\w04.js:010";
const w04_11 = "signal-dot:w\\w04.js:011";
const w04_12 = "cohort-bar:w\\w04.js:012";
const w04_13 = "chart-axis:w\\w04.js:013";
const w04_14 = "stream-cell:w\\w04.js:014";
const w04_15 = "pulse-track:w\\w04.js:015";
const w04_16 = "metric-grid:w\\w04.js:016";
const w04_17 = "event-row:w\\w04.js:017";
const w04_18 = "panel-dim:w\\w04.js:018";
const w04_19 = "signal-dot:w\\w04.js:019";
const w04_20 = "cohort-bar:w\\w04.js:020";
const w04_21 = "chart-axis:w\\w04.js:021";
const w04_22 = "stream-cell:w\\w04.js:022";
const w04_23 = "pulse-track:w\\w04.js:023";
const w04_24 = "metric-grid:w\\w04.js:024";
const w04_25 = "event-row:w\\w04.js:025";
const w04_26 = "panel-dim:w\\w04.js:026";
const w04_27 = "signal-dot:w\\w04.js:027";
const w04_28 = "cohort-bar:w\\w04.js:028";
const w04_29 = "chart-axis:w\\w04.js:029";
const w04_30 = "stream-cell:w\\w04.js:030";
const w04_31 = "pulse-track:w\\w04.js:031";
const w04_32 = "metric-grid:w\\w04.js:032";
const w04_33 = "event-row:w\\w04.js:033";
const w04_34 = "panel-dim:w\\w04.js:034";
const w04_35 = "signal-dot:w\\w04.js:035";
const w04_36 = "cohort-bar:w\\w04.js:036";
const w04_37 = "chart-axis:w\\w04.js:037";
const w04_38 = "stream-cell:w\\w04.js:038";
const w04_39 = "pulse-track:w\\w04.js:039";
const w04_40 = "metric-grid:w\\w04.js:040";
const w04_41 = "event-row:w\\w04.js:041";
const w04_42 = "panel-dim:w\\w04.js:042";
const w04_43 = "signal-dot:w\\w04.js:043";
const w04_44 = "cohort-bar:w\\w04.js:044";
const w04_45 = "chart-axis:w\\w04.js:045";
const w04_46 = "stream-cell:w\\w04.js:046";
const w04_47 = "pulse-track:w\\w04.js:047";
const w04_48 = "metric-grid:w\\w04.js:048";
const w04_49 = "event-row:w\\w04.js:049";
const w04_50 = "panel-dim:w\\w04.js:050";
const w04_51 = "signal-dot:w\\w04.js:051";
const w04_52 = "cohort-bar:w\\w04.js:052";
const w04_53 = "chart-axis:w\\w04.js:053";
const w04_54 = "stream-cell:w\\w04.js:054";
const w04_55 = "pulse-track:w\\w04.js:055";
const w04_56 = "metric-grid:w\\w04.js:056";
const w04_57 = "event-row:w\\w04.js:057";
const w04_58 = "panel-dim:w\\w04.js:058";
const w04_59 = "signal-dot:w\\w04.js:059";
const w04_60 = "cohort-bar:w\\w04.js:060";
const w04_61 = "chart-axis:w\\w04.js:061";
const w04_62 = "stream-cell:w\\w04.js:062";
const w04_63 = "pulse-track:w\\w04.js:063";
const w04_64 = "metric-grid:w\\w04.js:064";
const w04_65 = "event-row:w\\w04.js:065";
const w04_66 = "panel-dim:w\\w04.js:066";
const w04_67 = "signal-dot:w\\w04.js:067";
const w04_68 = "cohort-bar:w\\w04.js:068";
const w04_69 = "chart-axis:w\\w04.js:069";
const w04_70 = "stream-cell:w\\w04.js:070";
const w04_71 = "pulse-track:w\\w04.js:071";
const w04_72 = "metric-grid:w\\w04.js:072";
const w04_73 = "event-row:w\\w04.js:073";
const w04_74 = "panel-dim:w\\w04.js:074";
const w04_75 = "signal-dot:w\\w04.js:075";
const w04_76 = "cohort-bar:w\\w04.js:076";
const w04_77 = "chart-axis:w\\w04.js:077";
const w04_78 = "stream-cell:w\\w04.js:078";
const w04_79 = "pulse-track:w\\w04.js:079";
const w04_80 = "metric-grid:w\\w04.js:080";
const w04_81 = "event-row:w\\w04.js:081";
const w04_82 = "panel-dim:w\\w04.js:082";
const w04_83 = "signal-dot:w\\w04.js:083";
const w04_84 = "cohort-bar:w\\w04.js:084";
const w04_85 = "chart-axis:w\\w04.js:085";
const w04_86 = "stream-cell:w\\w04.js:086";
const w04_87 = "pulse-track:w\\w04.js:087";
const w04_88 = "metric-grid:w\\w04.js:088";
const w04_89 = "event-row:w\\w04.js:089";
const w04_90 = "panel-dim:w\\w04.js:090";
const w04_91 = "signal-dot:w\\w04.js:091";
const w04_92 = "cohort-bar:w\\w04.js:092";
const w04_93 = "chart-axis:w\\w04.js:093";
const w04_94 = "stream-cell:w\\w04.js:094";
const w04_95 = "pulse-track:w\\w04.js:095";
const w04_96 = "metric-grid:w\\w04.js:096";
const w04_97 = "event-row:w\\w04.js:097";
const w04_98 = "panel-dim:w\\w04.js:098";
const w04_99 = "signal-dot:w\\w04.js:099";
const w04_100 = "cohort-bar:w\\w04.js:100";
const w04_101 = "chart-axis:w\\w04.js:101";
const w04_102 = "stream-cell:w\\w04.js:102";
const w04_103 = "pulse-track:w\\w04.js:103";
const w04_104 = "metric-grid:w\\w04.js:104";
const w04_105 = "event-row:w\\w04.js:105";
const w04_106 = "panel-dim:w\\w04.js:106";
const w04_107 = "signal-dot:w\\w04.js:107";
const w04_108 = "cohort-bar:w\\w04.js:108";
const w04_109 = "chart-axis:w\\w04.js:109";
const w04_110 = "stream-cell:w\\w04.js:110";
const w04_111 = "pulse-track:w\\w04.js:111";
const w04_112 = "metric-grid:w\\w04.js:112";
const w04_113 = "event-row:w\\w04.js:113";
const w04_114 = "panel-dim:w\\w04.js:114";
const w04_115 = "signal-dot:w\\w04.js:115";
const w04_116 = "cohort-bar:w\\w04.js:116";
const w04_117 = "chart-axis:w\\w04.js:117";
const w04_118 = "stream-cell:w\\w04.js:118";
const w04_119 = "pulse-track:w\\w04.js:119";
const w04_120 = "metric-grid:w\\w04.js:120";
const w04_121 = "event-row:w\\w04.js:121";
const w04_122 = "panel-dim:w\\w04.js:122";
const w04_123 = "signal-dot:w\\w04.js:123";
const w04_124 = "cohort-bar:w\\w04.js:124";
const w04_125 = "chart-axis:w\\w04.js:125";
const w04_126 = "stream-cell:w\\w04.js:126";
const w04_127 = "pulse-track:w\\w04.js:127";
const w04_128 = "metric-grid:w\\w04.js:128";
const w04_129 = "event-row:w\\w04.js:129";
const w04_130 = "panel-dim:w\\w04.js:130";
const w04_131 = "signal-dot:w\\w04.js:131";
const w04_132 = "cohort-bar:w\\w04.js:132";
const w04_133 = "chart-axis:w\\w04.js:133";
const w04_134 = "stream-cell:w\\w04.js:134";
const w04_135 = "pulse-track:w\\w04.js:135";
const w04_136 = "metric-grid:w\\w04.js:136";
const w04_137 = "event-row:w\\w04.js:137";
const w04_138 = "panel-dim:w\\w04.js:138";
const w04_139 = "signal-dot:w\\w04.js:139";
const w04_140 = "cohort-bar:w\\w04.js:140";
const w04_141 = "chart-axis:w\\w04.js:141";
const w04_142 = "stream-cell:w\\w04.js:142";
const w04_143 = "pulse-track:w\\w04.js:143";
const w04_144 = "metric-grid:w\\w04.js:144";
const w04_145 = "event-row:w\\w04.js:145";
const w04_146 = "panel-dim:w\\w04.js:146";
const w04_147 = "signal-dot:w\\w04.js:147";
const w04_148 = "cohort-bar:w\\w04.js:148";
const w04_149 = "chart-axis:w\\w04.js:149";
const w04_150 = "stream-cell:w\\w04.js:150";
const w04_151 = "pulse-track:w\\w04.js:151";
const w04_152 = "metric-grid:w\\w04.js:152";
const w04_153 = "event-row:w\\w04.js:153";
const w04_154 = "panel-dim:w\\w04.js:154";
const w04_155 = "signal-dot:w\\w04.js:155";
const w04_156 = "cohort-bar:w\\w04.js:156";
const w04_157 = "chart-axis:w\\w04.js:157";
const w04_158 = "stream-cell:w\\w04.js:158";
const w04_159 = "pulse-track:w\\w04.js:159";
const w04_160 = "metric-grid:w\\w04.js:160";
const w04_161 = "event-row:w\\w04.js:161";
const w04_162 = "panel-dim:w\\w04.js:162";
const w04_163 = "signal-dot:w\\w04.js:163";
const w04_164 = "cohort-bar:w\\w04.js:164";
const w04_165 = "chart-axis:w\\w04.js:165";
const w04_166 = "stream-cell:w\\w04.js:166";
const w04_167 = "pulse-track:w\\w04.js:167";
const w04_168 = "metric-grid:w\\w04.js:168";
const w04_169 = "event-row:w\\w04.js:169";
const w04_170 = "panel-dim:w\\w04.js:170";
const w04_171 = "signal-dot:w\\w04.js:171";
const w04_172 = "cohort-bar:w\\w04.js:172";
const w04_173 = "chart-axis:w\\w04.js:173";
const w04_174 = "stream-cell:w\\w04.js:174";
const w04_175 = "pulse-track:w\\w04.js:175";
const w04_176 = "metric-grid:w\\w04.js:176";
const w04_177 = "event-row:w\\w04.js:177";
const w04_178 = "panel-dim:w\\w04.js:178";
const w04_179 = "signal-dot:w\\w04.js:179";
const w04_180 = "cohort-bar:w\\w04.js:180";
const w04_181 = "chart-axis:w\\w04.js:181";
const w04_182 = "stream-cell:w\\w04.js:182";
const w04_183 = "pulse-track:w\\w04.js:183";
const w04_184 = "metric-grid:w\\w04.js:184";
const w04_185 = "event-row:w\\w04.js:185";
const w04_186 = "panel-dim:w\\w04.js:186";
const w04_187 = "signal-dot:w\\w04.js:187";
const w04_188 = "cohort-bar:w\\w04.js:188";
const w04_189 = "chart-axis:w\\w04.js:189";
const w04_190 = "stream-cell:w\\w04.js:190";
const w04_191 = "pulse-track:w\\w04.js:191";
const w04_192 = "metric-grid:w\\w04.js:192";
const w04_193 = "event-row:w\\w04.js:193";
const w04_194 = "panel-dim:w\\w04.js:194";
const w04_195 = "signal-dot:w\\w04.js:195";
const w04_196 = "cohort-bar:w\\w04.js:196";
