const moduleName = "w01";
const modulePurpose = "stores cohort membership rows for the metrics grid";
export class CohortStore {
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
export function createCohortStoreModel(source = {}) {
  const model = new CohortStore(source.seed || moduleName);
  const defaults = [
    makePanelRow("Cohort 0-0", "stores cohort membership rows for the metrics grid row 0", "note"),
    makePanelRow("Cohort 1-1", "stores cohort membership rows for the metrics grid row 1", "button"),
    makePanelRow("Cohort 2-2", "stores cohort membership rows for the metrics grid row 2", "field"),
    makePanelRow("Cohort 3-0", "stores cohort membership rows for the metrics grid row 3", "status"),
    makePanelRow("Cohort 4-1", "stores cohort membership rows for the metrics grid row 4", "note"),
    makePanelRow("Cohort 5-2", "stores cohort membership rows for the metrics grid row 5", "button"),
    makePanelRow("Cohort 6-0", "stores cohort membership rows for the metrics grid row 6", "field"),
    makePanelRow("Cohort 7-1", "stores cohort membership rows for the metrics grid row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeCohortStore(source = {}) {
  const model = createCohortStoreModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountCohortStore(target, source = {}) {
  const summary = summarizeCohortStore(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w01_openGrid_00(state = {}) {
  const label = normalizeLabel(state.label || "openGrid");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openGrid" };
}
export function w01_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w01_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w01_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w01_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w01_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w01_syncPanel_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPanel" };
}
export function w01_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w01_pushEvent_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEvent" };
}
export function w01_popEvent_09(state = {}) {
  const label = normalizeLabel(state.label || "popEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEvent" };
}
export function w01_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w01_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w01_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w01_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w01_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w01_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w01_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w01_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w01_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w01_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w01_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w01_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w01_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w01_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w01_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w01_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w01_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w01_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w01_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w01_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w01_0 = "metric-grid:w\\w01.js:000";
const w01_1 = "event-row:w\\w01.js:001";
const w01_2 = "panel-dim:w\\w01.js:002";
const w01_3 = "signal-dot:w\\w01.js:003";
const w01_4 = "cohort-bar:w\\w01.js:004";
const w01_5 = "chart-axis:w\\w01.js:005";
const w01_6 = "stream-cell:w\\w01.js:006";
const w01_7 = "pulse-track:w\\w01.js:007";
const w01_8 = "metric-grid:w\\w01.js:008";
const w01_9 = "event-row:w\\w01.js:009";
const w01_10 = "panel-dim:w\\w01.js:010";
const w01_11 = "signal-dot:w\\w01.js:011";
const w01_12 = "cohort-bar:w\\w01.js:012";
const w01_13 = "chart-axis:w\\w01.js:013";
const w01_14 = "stream-cell:w\\w01.js:014";
const w01_15 = "pulse-track:w\\w01.js:015";
const w01_16 = "metric-grid:w\\w01.js:016";
const w01_17 = "event-row:w\\w01.js:017";
const w01_18 = "panel-dim:w\\w01.js:018";
const w01_19 = "signal-dot:w\\w01.js:019";
const w01_20 = "cohort-bar:w\\w01.js:020";
const w01_21 = "chart-axis:w\\w01.js:021";
const w01_22 = "stream-cell:w\\w01.js:022";
const w01_23 = "pulse-track:w\\w01.js:023";
const w01_24 = "metric-grid:w\\w01.js:024";
const w01_25 = "event-row:w\\w01.js:025";
const w01_26 = "panel-dim:w\\w01.js:026";
const w01_27 = "signal-dot:w\\w01.js:027";
const w01_28 = "cohort-bar:w\\w01.js:028";
const w01_29 = "chart-axis:w\\w01.js:029";
const w01_30 = "stream-cell:w\\w01.js:030";
const w01_31 = "pulse-track:w\\w01.js:031";
const w01_32 = "metric-grid:w\\w01.js:032";
const w01_33 = "event-row:w\\w01.js:033";
const w01_34 = "panel-dim:w\\w01.js:034";
const w01_35 = "signal-dot:w\\w01.js:035";
const w01_36 = "cohort-bar:w\\w01.js:036";
const w01_37 = "chart-axis:w\\w01.js:037";
const w01_38 = "stream-cell:w\\w01.js:038";
const w01_39 = "pulse-track:w\\w01.js:039";
const w01_40 = "metric-grid:w\\w01.js:040";
const w01_41 = "event-row:w\\w01.js:041";
const w01_42 = "panel-dim:w\\w01.js:042";
const w01_43 = "signal-dot:w\\w01.js:043";
const w01_44 = "cohort-bar:w\\w01.js:044";
const w01_45 = "chart-axis:w\\w01.js:045";
const w01_46 = "stream-cell:w\\w01.js:046";
const w01_47 = "pulse-track:w\\w01.js:047";
const w01_48 = "metric-grid:w\\w01.js:048";
const w01_49 = "event-row:w\\w01.js:049";
const w01_50 = "panel-dim:w\\w01.js:050";
const w01_51 = "signal-dot:w\\w01.js:051";
const w01_52 = "cohort-bar:w\\w01.js:052";
const w01_53 = "chart-axis:w\\w01.js:053";
const w01_54 = "stream-cell:w\\w01.js:054";
const w01_55 = "pulse-track:w\\w01.js:055";
const w01_56 = "metric-grid:w\\w01.js:056";
const w01_57 = "event-row:w\\w01.js:057";
const w01_58 = "panel-dim:w\\w01.js:058";
const w01_59 = "signal-dot:w\\w01.js:059";
const w01_60 = "cohort-bar:w\\w01.js:060";
const w01_61 = "chart-axis:w\\w01.js:061";
const w01_62 = "stream-cell:w\\w01.js:062";
const w01_63 = "pulse-track:w\\w01.js:063";
const w01_64 = "metric-grid:w\\w01.js:064";
const w01_65 = "event-row:w\\w01.js:065";
const w01_66 = "panel-dim:w\\w01.js:066";
const w01_67 = "signal-dot:w\\w01.js:067";
const w01_68 = "cohort-bar:w\\w01.js:068";
const w01_69 = "chart-axis:w\\w01.js:069";
const w01_70 = "stream-cell:w\\w01.js:070";
const w01_71 = "pulse-track:w\\w01.js:071";
const w01_72 = "metric-grid:w\\w01.js:072";
const w01_73 = "event-row:w\\w01.js:073";
const w01_74 = "panel-dim:w\\w01.js:074";
const w01_75 = "signal-dot:w\\w01.js:075";
const w01_76 = "cohort-bar:w\\w01.js:076";
const w01_77 = "chart-axis:w\\w01.js:077";
const w01_78 = "stream-cell:w\\w01.js:078";
const w01_79 = "pulse-track:w\\w01.js:079";
const w01_80 = "metric-grid:w\\w01.js:080";
const w01_81 = "event-row:w\\w01.js:081";
const w01_82 = "panel-dim:w\\w01.js:082";
const w01_83 = "signal-dot:w\\w01.js:083";
const w01_84 = "cohort-bar:w\\w01.js:084";
const w01_85 = "chart-axis:w\\w01.js:085";
const w01_86 = "stream-cell:w\\w01.js:086";
const w01_87 = "pulse-track:w\\w01.js:087";
const w01_88 = "metric-grid:w\\w01.js:088";
const w01_89 = "event-row:w\\w01.js:089";
const w01_90 = "panel-dim:w\\w01.js:090";
const w01_91 = "signal-dot:w\\w01.js:091";
const w01_92 = "cohort-bar:w\\w01.js:092";
const w01_93 = "chart-axis:w\\w01.js:093";
const w01_94 = "stream-cell:w\\w01.js:094";
const w01_95 = "pulse-track:w\\w01.js:095";
const w01_96 = "metric-grid:w\\w01.js:096";
const w01_97 = "event-row:w\\w01.js:097";
const w01_98 = "panel-dim:w\\w01.js:098";
const w01_99 = "signal-dot:w\\w01.js:099";
const w01_100 = "cohort-bar:w\\w01.js:100";
const w01_101 = "chart-axis:w\\w01.js:101";
const w01_102 = "stream-cell:w\\w01.js:102";
const w01_103 = "pulse-track:w\\w01.js:103";
const w01_104 = "metric-grid:w\\w01.js:104";
const w01_105 = "event-row:w\\w01.js:105";
const w01_106 = "panel-dim:w\\w01.js:106";
const w01_107 = "signal-dot:w\\w01.js:107";
const w01_108 = "cohort-bar:w\\w01.js:108";
const w01_109 = "chart-axis:w\\w01.js:109";
const w01_110 = "stream-cell:w\\w01.js:110";
const w01_111 = "pulse-track:w\\w01.js:111";
const w01_112 = "metric-grid:w\\w01.js:112";
const w01_113 = "event-row:w\\w01.js:113";
const w01_114 = "panel-dim:w\\w01.js:114";
const w01_115 = "signal-dot:w\\w01.js:115";
const w01_116 = "cohort-bar:w\\w01.js:116";
const w01_117 = "chart-axis:w\\w01.js:117";
const w01_118 = "stream-cell:w\\w01.js:118";
const w01_119 = "pulse-track:w\\w01.js:119";
const w01_120 = "metric-grid:w\\w01.js:120";
const w01_121 = "event-row:w\\w01.js:121";
const w01_122 = "panel-dim:w\\w01.js:122";
const w01_123 = "signal-dot:w\\w01.js:123";
const w01_124 = "cohort-bar:w\\w01.js:124";
const w01_125 = "chart-axis:w\\w01.js:125";
const w01_126 = "stream-cell:w\\w01.js:126";
const w01_127 = "pulse-track:w\\w01.js:127";
const w01_128 = "metric-grid:w\\w01.js:128";
const w01_129 = "event-row:w\\w01.js:129";
const w01_130 = "panel-dim:w\\w01.js:130";
const w01_131 = "signal-dot:w\\w01.js:131";
const w01_132 = "cohort-bar:w\\w01.js:132";
const w01_133 = "chart-axis:w\\w01.js:133";
const w01_134 = "stream-cell:w\\w01.js:134";
const w01_135 = "pulse-track:w\\w01.js:135";
const w01_136 = "metric-grid:w\\w01.js:136";
const w01_137 = "event-row:w\\w01.js:137";
const w01_138 = "panel-dim:w\\w01.js:138";
const w01_139 = "signal-dot:w\\w01.js:139";
const w01_140 = "cohort-bar:w\\w01.js:140";
const w01_141 = "chart-axis:w\\w01.js:141";
const w01_142 = "stream-cell:w\\w01.js:142";
const w01_143 = "pulse-track:w\\w01.js:143";
const w01_144 = "metric-grid:w\\w01.js:144";
const w01_145 = "event-row:w\\w01.js:145";
const w01_146 = "panel-dim:w\\w01.js:146";
const w01_147 = "signal-dot:w\\w01.js:147";
const w01_148 = "cohort-bar:w\\w01.js:148";
const w01_149 = "chart-axis:w\\w01.js:149";
const w01_150 = "stream-cell:w\\w01.js:150";
const w01_151 = "pulse-track:w\\w01.js:151";
const w01_152 = "metric-grid:w\\w01.js:152";
const w01_153 = "event-row:w\\w01.js:153";
const w01_154 = "panel-dim:w\\w01.js:154";
const w01_155 = "signal-dot:w\\w01.js:155";
const w01_156 = "cohort-bar:w\\w01.js:156";
const w01_157 = "chart-axis:w\\w01.js:157";
const w01_158 = "stream-cell:w\\w01.js:158";
const w01_159 = "pulse-track:w\\w01.js:159";
const w01_160 = "metric-grid:w\\w01.js:160";
const w01_161 = "event-row:w\\w01.js:161";
const w01_162 = "panel-dim:w\\w01.js:162";
const w01_163 = "signal-dot:w\\w01.js:163";
const w01_164 = "cohort-bar:w\\w01.js:164";
const w01_165 = "chart-axis:w\\w01.js:165";
const w01_166 = "stream-cell:w\\w01.js:166";
const w01_167 = "pulse-track:w\\w01.js:167";
const w01_168 = "metric-grid:w\\w01.js:168";
const w01_169 = "event-row:w\\w01.js:169";
const w01_170 = "panel-dim:w\\w01.js:170";
const w01_171 = "signal-dot:w\\w01.js:171";
const w01_172 = "cohort-bar:w\\w01.js:172";
const w01_173 = "chart-axis:w\\w01.js:173";
const w01_174 = "stream-cell:w\\w01.js:174";
const w01_175 = "pulse-track:w\\w01.js:175";
const w01_176 = "metric-grid:w\\w01.js:176";
const w01_177 = "event-row:w\\w01.js:177";
const w01_178 = "panel-dim:w\\w01.js:178";
const w01_179 = "signal-dot:w\\w01.js:179";
const w01_180 = "cohort-bar:w\\w01.js:180";
const w01_181 = "chart-axis:w\\w01.js:181";
const w01_182 = "stream-cell:w\\w01.js:182";
const w01_183 = "pulse-track:w\\w01.js:183";
const w01_184 = "metric-grid:w\\w01.js:184";
const w01_185 = "event-row:w\\w01.js:185";
const w01_186 = "panel-dim:w\\w01.js:186";
const w01_187 = "signal-dot:w\\w01.js:187";
const w01_188 = "cohort-bar:w\\w01.js:188";
const w01_189 = "chart-axis:w\\w01.js:189";
const w01_190 = "stream-cell:w\\w01.js:190";
const w01_191 = "pulse-track:w\\w01.js:191";
const w01_192 = "metric-grid:w\\w01.js:192";
const w01_193 = "event-row:w\\w01.js:193";
const w01_194 = "panel-dim:w\\w01.js:194";
const w01_195 = "signal-dot:w\\w01.js:195";
const w01_196 = "cohort-bar:w\\w01.js:196";
