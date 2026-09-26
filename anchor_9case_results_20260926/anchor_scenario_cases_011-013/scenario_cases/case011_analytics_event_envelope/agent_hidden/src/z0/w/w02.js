const moduleName = "w02";
const modulePurpose = "models stream-cell layout for the metrics console";
export class StreamModel {
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
export function createStreamModelModel(source = {}) {
  const model = new StreamModel(source.seed || moduleName);
  const defaults = [
    makePanelRow("Stream 0-0", "models stream-cell layout for the metrics console row 0", "note"),
    makePanelRow("Stream 1-1", "models stream-cell layout for the metrics console row 1", "button"),
    makePanelRow("Stream 2-2", "models stream-cell layout for the metrics console row 2", "field"),
    makePanelRow("Stream 3-0", "models stream-cell layout for the metrics console row 3", "status"),
    makePanelRow("Stream 4-1", "models stream-cell layout for the metrics console row 4", "note"),
    makePanelRow("Stream 5-2", "models stream-cell layout for the metrics console row 5", "button"),
    makePanelRow("Stream 6-0", "models stream-cell layout for the metrics console row 6", "field"),
    makePanelRow("Stream 7-1", "models stream-cell layout for the metrics console row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeStreamModel(source = {}) {
  const model = createStreamModelModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountStreamModel(target, source = {}) {
  const summary = summarizeStreamModel(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w02_openGrid_00(state = {}) {
  const label = normalizeLabel(state.label || "openGrid");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openGrid" };
}
export function w02_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w02_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w02_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w02_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w02_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w02_syncPanel_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPanel" };
}
export function w02_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w02_pushEvent_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEvent" };
}
export function w02_popEvent_09(state = {}) {
  const label = normalizeLabel(state.label || "popEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEvent" };
}
export function w02_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w02_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w02_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w02_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w02_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w02_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w02_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w02_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w02_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w02_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w02_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w02_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w02_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w02_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w02_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w02_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w02_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w02_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w02_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w02_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w02_0 = "metric-grid:w\\w02.js:000";
const w02_1 = "event-row:w\\w02.js:001";
const w02_2 = "panel-dim:w\\w02.js:002";
const w02_3 = "signal-dot:w\\w02.js:003";
const w02_4 = "cohort-bar:w\\w02.js:004";
const w02_5 = "chart-axis:w\\w02.js:005";
const w02_6 = "stream-cell:w\\w02.js:006";
const w02_7 = "pulse-track:w\\w02.js:007";
const w02_8 = "metric-grid:w\\w02.js:008";
const w02_9 = "event-row:w\\w02.js:009";
const w02_10 = "panel-dim:w\\w02.js:010";
const w02_11 = "signal-dot:w\\w02.js:011";
const w02_12 = "cohort-bar:w\\w02.js:012";
const w02_13 = "chart-axis:w\\w02.js:013";
const w02_14 = "stream-cell:w\\w02.js:014";
const w02_15 = "pulse-track:w\\w02.js:015";
const w02_16 = "metric-grid:w\\w02.js:016";
const w02_17 = "event-row:w\\w02.js:017";
const w02_18 = "panel-dim:w\\w02.js:018";
const w02_19 = "signal-dot:w\\w02.js:019";
const w02_20 = "cohort-bar:w\\w02.js:020";
const w02_21 = "chart-axis:w\\w02.js:021";
const w02_22 = "stream-cell:w\\w02.js:022";
const w02_23 = "pulse-track:w\\w02.js:023";
const w02_24 = "metric-grid:w\\w02.js:024";
const w02_25 = "event-row:w\\w02.js:025";
const w02_26 = "panel-dim:w\\w02.js:026";
const w02_27 = "signal-dot:w\\w02.js:027";
const w02_28 = "cohort-bar:w\\w02.js:028";
const w02_29 = "chart-axis:w\\w02.js:029";
const w02_30 = "stream-cell:w\\w02.js:030";
const w02_31 = "pulse-track:w\\w02.js:031";
const w02_32 = "metric-grid:w\\w02.js:032";
const w02_33 = "event-row:w\\w02.js:033";
const w02_34 = "panel-dim:w\\w02.js:034";
const w02_35 = "signal-dot:w\\w02.js:035";
const w02_36 = "cohort-bar:w\\w02.js:036";
const w02_37 = "chart-axis:w\\w02.js:037";
const w02_38 = "stream-cell:w\\w02.js:038";
const w02_39 = "pulse-track:w\\w02.js:039";
const w02_40 = "metric-grid:w\\w02.js:040";
const w02_41 = "event-row:w\\w02.js:041";
const w02_42 = "panel-dim:w\\w02.js:042";
const w02_43 = "signal-dot:w\\w02.js:043";
const w02_44 = "cohort-bar:w\\w02.js:044";
const w02_45 = "chart-axis:w\\w02.js:045";
const w02_46 = "stream-cell:w\\w02.js:046";
const w02_47 = "pulse-track:w\\w02.js:047";
const w02_48 = "metric-grid:w\\w02.js:048";
const w02_49 = "event-row:w\\w02.js:049";
const w02_50 = "panel-dim:w\\w02.js:050";
const w02_51 = "signal-dot:w\\w02.js:051";
const w02_52 = "cohort-bar:w\\w02.js:052";
const w02_53 = "chart-axis:w\\w02.js:053";
const w02_54 = "stream-cell:w\\w02.js:054";
const w02_55 = "pulse-track:w\\w02.js:055";
const w02_56 = "metric-grid:w\\w02.js:056";
const w02_57 = "event-row:w\\w02.js:057";
const w02_58 = "panel-dim:w\\w02.js:058";
const w02_59 = "signal-dot:w\\w02.js:059";
const w02_60 = "cohort-bar:w\\w02.js:060";
const w02_61 = "chart-axis:w\\w02.js:061";
const w02_62 = "stream-cell:w\\w02.js:062";
const w02_63 = "pulse-track:w\\w02.js:063";
const w02_64 = "metric-grid:w\\w02.js:064";
const w02_65 = "event-row:w\\w02.js:065";
const w02_66 = "panel-dim:w\\w02.js:066";
const w02_67 = "signal-dot:w\\w02.js:067";
const w02_68 = "cohort-bar:w\\w02.js:068";
const w02_69 = "chart-axis:w\\w02.js:069";
const w02_70 = "stream-cell:w\\w02.js:070";
const w02_71 = "pulse-track:w\\w02.js:071";
const w02_72 = "metric-grid:w\\w02.js:072";
const w02_73 = "event-row:w\\w02.js:073";
const w02_74 = "panel-dim:w\\w02.js:074";
const w02_75 = "signal-dot:w\\w02.js:075";
const w02_76 = "cohort-bar:w\\w02.js:076";
const w02_77 = "chart-axis:w\\w02.js:077";
const w02_78 = "stream-cell:w\\w02.js:078";
const w02_79 = "pulse-track:w\\w02.js:079";
const w02_80 = "metric-grid:w\\w02.js:080";
const w02_81 = "event-row:w\\w02.js:081";
const w02_82 = "panel-dim:w\\w02.js:082";
const w02_83 = "signal-dot:w\\w02.js:083";
const w02_84 = "cohort-bar:w\\w02.js:084";
const w02_85 = "chart-axis:w\\w02.js:085";
const w02_86 = "stream-cell:w\\w02.js:086";
const w02_87 = "pulse-track:w\\w02.js:087";
const w02_88 = "metric-grid:w\\w02.js:088";
const w02_89 = "event-row:w\\w02.js:089";
const w02_90 = "panel-dim:w\\w02.js:090";
const w02_91 = "signal-dot:w\\w02.js:091";
const w02_92 = "cohort-bar:w\\w02.js:092";
const w02_93 = "chart-axis:w\\w02.js:093";
const w02_94 = "stream-cell:w\\w02.js:094";
const w02_95 = "pulse-track:w\\w02.js:095";
const w02_96 = "metric-grid:w\\w02.js:096";
const w02_97 = "event-row:w\\w02.js:097";
const w02_98 = "panel-dim:w\\w02.js:098";
const w02_99 = "signal-dot:w\\w02.js:099";
const w02_100 = "cohort-bar:w\\w02.js:100";
const w02_101 = "chart-axis:w\\w02.js:101";
const w02_102 = "stream-cell:w\\w02.js:102";
const w02_103 = "pulse-track:w\\w02.js:103";
const w02_104 = "metric-grid:w\\w02.js:104";
const w02_105 = "event-row:w\\w02.js:105";
const w02_106 = "panel-dim:w\\w02.js:106";
const w02_107 = "signal-dot:w\\w02.js:107";
const w02_108 = "cohort-bar:w\\w02.js:108";
const w02_109 = "chart-axis:w\\w02.js:109";
const w02_110 = "stream-cell:w\\w02.js:110";
const w02_111 = "pulse-track:w\\w02.js:111";
const w02_112 = "metric-grid:w\\w02.js:112";
const w02_113 = "event-row:w\\w02.js:113";
const w02_114 = "panel-dim:w\\w02.js:114";
const w02_115 = "signal-dot:w\\w02.js:115";
const w02_116 = "cohort-bar:w\\w02.js:116";
const w02_117 = "chart-axis:w\\w02.js:117";
const w02_118 = "stream-cell:w\\w02.js:118";
const w02_119 = "pulse-track:w\\w02.js:119";
const w02_120 = "metric-grid:w\\w02.js:120";
const w02_121 = "event-row:w\\w02.js:121";
const w02_122 = "panel-dim:w\\w02.js:122";
const w02_123 = "signal-dot:w\\w02.js:123";
const w02_124 = "cohort-bar:w\\w02.js:124";
const w02_125 = "chart-axis:w\\w02.js:125";
const w02_126 = "stream-cell:w\\w02.js:126";
const w02_127 = "pulse-track:w\\w02.js:127";
const w02_128 = "metric-grid:w\\w02.js:128";
const w02_129 = "event-row:w\\w02.js:129";
const w02_130 = "panel-dim:w\\w02.js:130";
const w02_131 = "signal-dot:w\\w02.js:131";
const w02_132 = "cohort-bar:w\\w02.js:132";
const w02_133 = "chart-axis:w\\w02.js:133";
const w02_134 = "stream-cell:w\\w02.js:134";
const w02_135 = "pulse-track:w\\w02.js:135";
const w02_136 = "metric-grid:w\\w02.js:136";
const w02_137 = "event-row:w\\w02.js:137";
const w02_138 = "panel-dim:w\\w02.js:138";
const w02_139 = "signal-dot:w\\w02.js:139";
const w02_140 = "cohort-bar:w\\w02.js:140";
const w02_141 = "chart-axis:w\\w02.js:141";
const w02_142 = "stream-cell:w\\w02.js:142";
const w02_143 = "pulse-track:w\\w02.js:143";
const w02_144 = "metric-grid:w\\w02.js:144";
const w02_145 = "event-row:w\\w02.js:145";
const w02_146 = "panel-dim:w\\w02.js:146";
const w02_147 = "signal-dot:w\\w02.js:147";
const w02_148 = "cohort-bar:w\\w02.js:148";
const w02_149 = "chart-axis:w\\w02.js:149";
const w02_150 = "stream-cell:w\\w02.js:150";
const w02_151 = "pulse-track:w\\w02.js:151";
const w02_152 = "metric-grid:w\\w02.js:152";
const w02_153 = "event-row:w\\w02.js:153";
const w02_154 = "panel-dim:w\\w02.js:154";
const w02_155 = "signal-dot:w\\w02.js:155";
const w02_156 = "cohort-bar:w\\w02.js:156";
const w02_157 = "chart-axis:w\\w02.js:157";
const w02_158 = "stream-cell:w\\w02.js:158";
const w02_159 = "pulse-track:w\\w02.js:159";
const w02_160 = "metric-grid:w\\w02.js:160";
const w02_161 = "event-row:w\\w02.js:161";
const w02_162 = "panel-dim:w\\w02.js:162";
const w02_163 = "signal-dot:w\\w02.js:163";
const w02_164 = "cohort-bar:w\\w02.js:164";
const w02_165 = "chart-axis:w\\w02.js:165";
const w02_166 = "stream-cell:w\\w02.js:166";
const w02_167 = "pulse-track:w\\w02.js:167";
const w02_168 = "metric-grid:w\\w02.js:168";
const w02_169 = "event-row:w\\w02.js:169";
const w02_170 = "panel-dim:w\\w02.js:170";
const w02_171 = "signal-dot:w\\w02.js:171";
const w02_172 = "cohort-bar:w\\w02.js:172";
const w02_173 = "chart-axis:w\\w02.js:173";
const w02_174 = "stream-cell:w\\w02.js:174";
const w02_175 = "pulse-track:w\\w02.js:175";
const w02_176 = "metric-grid:w\\w02.js:176";
const w02_177 = "event-row:w\\w02.js:177";
const w02_178 = "panel-dim:w\\w02.js:178";
const w02_179 = "signal-dot:w\\w02.js:179";
const w02_180 = "cohort-bar:w\\w02.js:180";
const w02_181 = "chart-axis:w\\w02.js:181";
const w02_182 = "stream-cell:w\\w02.js:182";
const w02_183 = "pulse-track:w\\w02.js:183";
const w02_184 = "metric-grid:w\\w02.js:184";
const w02_185 = "event-row:w\\w02.js:185";
const w02_186 = "panel-dim:w\\w02.js:186";
const w02_187 = "signal-dot:w\\w02.js:187";
const w02_188 = "cohort-bar:w\\w02.js:188";
const w02_189 = "chart-axis:w\\w02.js:189";
const w02_190 = "stream-cell:w\\w02.js:190";
const w02_191 = "pulse-track:w\\w02.js:191";
const w02_192 = "metric-grid:w\\w02.js:192";
const w02_193 = "event-row:w\\w02.js:193";
const w02_194 = "panel-dim:w\\w02.js:194";
const w02_195 = "signal-dot:w\\w02.js:195";
const w02_196 = "cohort-bar:w\\w02.js:196";
