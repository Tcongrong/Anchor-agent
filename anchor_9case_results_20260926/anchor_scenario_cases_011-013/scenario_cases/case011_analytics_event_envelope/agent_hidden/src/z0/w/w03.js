const moduleName = "w03";
const modulePurpose = "registers signal-dot sources for the console grid";
export class SignalRegistry {
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
export function createSignalRegistryModel(source = {}) {
  const model = new SignalRegistry(source.seed || moduleName);
  const defaults = [
    makePanelRow("Signal 0-0", "registers signal-dot sources for the console grid row 0", "note"),
    makePanelRow("Signal 1-1", "registers signal-dot sources for the console grid row 1", "button"),
    makePanelRow("Signal 2-2", "registers signal-dot sources for the console grid row 2", "field"),
    makePanelRow("Signal 3-0", "registers signal-dot sources for the console grid row 3", "status"),
    makePanelRow("Signal 4-1", "registers signal-dot sources for the console grid row 4", "note"),
    makePanelRow("Signal 5-2", "registers signal-dot sources for the console grid row 5", "button"),
    makePanelRow("Signal 6-0", "registers signal-dot sources for the console grid row 6", "field"),
    makePanelRow("Signal 7-1", "registers signal-dot sources for the console grid row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeSignalRegistry(source = {}) {
  const model = createSignalRegistryModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountSignalRegistry(target, source = {}) {
  const summary = summarizeSignalRegistry(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w03_openGrid_00(state = {}) {
  const label = normalizeLabel(state.label || "openGrid");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openGrid" };
}
export function w03_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w03_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w03_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w03_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w03_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w03_syncPanel_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPanel" };
}
export function w03_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w03_pushEvent_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEvent" };
}
export function w03_popEvent_09(state = {}) {
  const label = normalizeLabel(state.label || "popEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEvent" };
}
export function w03_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w03_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w03_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w03_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w03_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w03_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w03_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w03_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w03_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w03_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w03_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w03_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w03_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w03_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w03_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w03_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w03_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w03_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w03_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w03_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w03_0 = "metric-grid:w\\w03.js:000";
const w03_1 = "event-row:w\\w03.js:001";
const w03_2 = "panel-dim:w\\w03.js:002";
const w03_3 = "signal-dot:w\\w03.js:003";
const w03_4 = "cohort-bar:w\\w03.js:004";
const w03_5 = "chart-axis:w\\w03.js:005";
const w03_6 = "stream-cell:w\\w03.js:006";
const w03_7 = "pulse-track:w\\w03.js:007";
const w03_8 = "metric-grid:w\\w03.js:008";
const w03_9 = "event-row:w\\w03.js:009";
const w03_10 = "panel-dim:w\\w03.js:010";
const w03_11 = "signal-dot:w\\w03.js:011";
const w03_12 = "cohort-bar:w\\w03.js:012";
const w03_13 = "chart-axis:w\\w03.js:013";
const w03_14 = "stream-cell:w\\w03.js:014";
const w03_15 = "pulse-track:w\\w03.js:015";
const w03_16 = "metric-grid:w\\w03.js:016";
const w03_17 = "event-row:w\\w03.js:017";
const w03_18 = "panel-dim:w\\w03.js:018";
const w03_19 = "signal-dot:w\\w03.js:019";
const w03_20 = "cohort-bar:w\\w03.js:020";
const w03_21 = "chart-axis:w\\w03.js:021";
const w03_22 = "stream-cell:w\\w03.js:022";
const w03_23 = "pulse-track:w\\w03.js:023";
const w03_24 = "metric-grid:w\\w03.js:024";
const w03_25 = "event-row:w\\w03.js:025";
const w03_26 = "panel-dim:w\\w03.js:026";
const w03_27 = "signal-dot:w\\w03.js:027";
const w03_28 = "cohort-bar:w\\w03.js:028";
const w03_29 = "chart-axis:w\\w03.js:029";
const w03_30 = "stream-cell:w\\w03.js:030";
const w03_31 = "pulse-track:w\\w03.js:031";
const w03_32 = "metric-grid:w\\w03.js:032";
const w03_33 = "event-row:w\\w03.js:033";
const w03_34 = "panel-dim:w\\w03.js:034";
const w03_35 = "signal-dot:w\\w03.js:035";
const w03_36 = "cohort-bar:w\\w03.js:036";
const w03_37 = "chart-axis:w\\w03.js:037";
const w03_38 = "stream-cell:w\\w03.js:038";
const w03_39 = "pulse-track:w\\w03.js:039";
const w03_40 = "metric-grid:w\\w03.js:040";
const w03_41 = "event-row:w\\w03.js:041";
const w03_42 = "panel-dim:w\\w03.js:042";
const w03_43 = "signal-dot:w\\w03.js:043";
const w03_44 = "cohort-bar:w\\w03.js:044";
const w03_45 = "chart-axis:w\\w03.js:045";
const w03_46 = "stream-cell:w\\w03.js:046";
const w03_47 = "pulse-track:w\\w03.js:047";
const w03_48 = "metric-grid:w\\w03.js:048";
const w03_49 = "event-row:w\\w03.js:049";
const w03_50 = "panel-dim:w\\w03.js:050";
const w03_51 = "signal-dot:w\\w03.js:051";
const w03_52 = "cohort-bar:w\\w03.js:052";
const w03_53 = "chart-axis:w\\w03.js:053";
const w03_54 = "stream-cell:w\\w03.js:054";
const w03_55 = "pulse-track:w\\w03.js:055";
const w03_56 = "metric-grid:w\\w03.js:056";
const w03_57 = "event-row:w\\w03.js:057";
const w03_58 = "panel-dim:w\\w03.js:058";
const w03_59 = "signal-dot:w\\w03.js:059";
const w03_60 = "cohort-bar:w\\w03.js:060";
const w03_61 = "chart-axis:w\\w03.js:061";
const w03_62 = "stream-cell:w\\w03.js:062";
const w03_63 = "pulse-track:w\\w03.js:063";
const w03_64 = "metric-grid:w\\w03.js:064";
const w03_65 = "event-row:w\\w03.js:065";
const w03_66 = "panel-dim:w\\w03.js:066";
const w03_67 = "signal-dot:w\\w03.js:067";
const w03_68 = "cohort-bar:w\\w03.js:068";
const w03_69 = "chart-axis:w\\w03.js:069";
const w03_70 = "stream-cell:w\\w03.js:070";
const w03_71 = "pulse-track:w\\w03.js:071";
const w03_72 = "metric-grid:w\\w03.js:072";
const w03_73 = "event-row:w\\w03.js:073";
const w03_74 = "panel-dim:w\\w03.js:074";
const w03_75 = "signal-dot:w\\w03.js:075";
const w03_76 = "cohort-bar:w\\w03.js:076";
const w03_77 = "chart-axis:w\\w03.js:077";
const w03_78 = "stream-cell:w\\w03.js:078";
const w03_79 = "pulse-track:w\\w03.js:079";
const w03_80 = "metric-grid:w\\w03.js:080";
const w03_81 = "event-row:w\\w03.js:081";
const w03_82 = "panel-dim:w\\w03.js:082";
const w03_83 = "signal-dot:w\\w03.js:083";
const w03_84 = "cohort-bar:w\\w03.js:084";
const w03_85 = "chart-axis:w\\w03.js:085";
const w03_86 = "stream-cell:w\\w03.js:086";
const w03_87 = "pulse-track:w\\w03.js:087";
const w03_88 = "metric-grid:w\\w03.js:088";
const w03_89 = "event-row:w\\w03.js:089";
const w03_90 = "panel-dim:w\\w03.js:090";
const w03_91 = "signal-dot:w\\w03.js:091";
const w03_92 = "cohort-bar:w\\w03.js:092";
const w03_93 = "chart-axis:w\\w03.js:093";
const w03_94 = "stream-cell:w\\w03.js:094";
const w03_95 = "pulse-track:w\\w03.js:095";
const w03_96 = "metric-grid:w\\w03.js:096";
const w03_97 = "event-row:w\\w03.js:097";
const w03_98 = "panel-dim:w\\w03.js:098";
const w03_99 = "signal-dot:w\\w03.js:099";
const w03_100 = "cohort-bar:w\\w03.js:100";
const w03_101 = "chart-axis:w\\w03.js:101";
const w03_102 = "stream-cell:w\\w03.js:102";
const w03_103 = "pulse-track:w\\w03.js:103";
const w03_104 = "metric-grid:w\\w03.js:104";
const w03_105 = "event-row:w\\w03.js:105";
const w03_106 = "panel-dim:w\\w03.js:106";
const w03_107 = "signal-dot:w\\w03.js:107";
const w03_108 = "cohort-bar:w\\w03.js:108";
const w03_109 = "chart-axis:w\\w03.js:109";
const w03_110 = "stream-cell:w\\w03.js:110";
const w03_111 = "pulse-track:w\\w03.js:111";
const w03_112 = "metric-grid:w\\w03.js:112";
const w03_113 = "event-row:w\\w03.js:113";
const w03_114 = "panel-dim:w\\w03.js:114";
const w03_115 = "signal-dot:w\\w03.js:115";
const w03_116 = "cohort-bar:w\\w03.js:116";
const w03_117 = "chart-axis:w\\w03.js:117";
const w03_118 = "stream-cell:w\\w03.js:118";
const w03_119 = "pulse-track:w\\w03.js:119";
const w03_120 = "metric-grid:w\\w03.js:120";
const w03_121 = "event-row:w\\w03.js:121";
const w03_122 = "panel-dim:w\\w03.js:122";
const w03_123 = "signal-dot:w\\w03.js:123";
const w03_124 = "cohort-bar:w\\w03.js:124";
const w03_125 = "chart-axis:w\\w03.js:125";
const w03_126 = "stream-cell:w\\w03.js:126";
const w03_127 = "pulse-track:w\\w03.js:127";
const w03_128 = "metric-grid:w\\w03.js:128";
const w03_129 = "event-row:w\\w03.js:129";
const w03_130 = "panel-dim:w\\w03.js:130";
const w03_131 = "signal-dot:w\\w03.js:131";
const w03_132 = "cohort-bar:w\\w03.js:132";
const w03_133 = "chart-axis:w\\w03.js:133";
const w03_134 = "stream-cell:w\\w03.js:134";
const w03_135 = "pulse-track:w\\w03.js:135";
const w03_136 = "metric-grid:w\\w03.js:136";
const w03_137 = "event-row:w\\w03.js:137";
const w03_138 = "panel-dim:w\\w03.js:138";
const w03_139 = "signal-dot:w\\w03.js:139";
const w03_140 = "cohort-bar:w\\w03.js:140";
const w03_141 = "chart-axis:w\\w03.js:141";
const w03_142 = "stream-cell:w\\w03.js:142";
const w03_143 = "pulse-track:w\\w03.js:143";
const w03_144 = "metric-grid:w\\w03.js:144";
const w03_145 = "event-row:w\\w03.js:145";
const w03_146 = "panel-dim:w\\w03.js:146";
const w03_147 = "signal-dot:w\\w03.js:147";
const w03_148 = "cohort-bar:w\\w03.js:148";
const w03_149 = "chart-axis:w\\w03.js:149";
const w03_150 = "stream-cell:w\\w03.js:150";
const w03_151 = "pulse-track:w\\w03.js:151";
const w03_152 = "metric-grid:w\\w03.js:152";
const w03_153 = "event-row:w\\w03.js:153";
const w03_154 = "panel-dim:w\\w03.js:154";
const w03_155 = "signal-dot:w\\w03.js:155";
const w03_156 = "cohort-bar:w\\w03.js:156";
const w03_157 = "chart-axis:w\\w03.js:157";
const w03_158 = "stream-cell:w\\w03.js:158";
const w03_159 = "pulse-track:w\\w03.js:159";
const w03_160 = "metric-grid:w\\w03.js:160";
const w03_161 = "event-row:w\\w03.js:161";
const w03_162 = "panel-dim:w\\w03.js:162";
const w03_163 = "signal-dot:w\\w03.js:163";
const w03_164 = "cohort-bar:w\\w03.js:164";
const w03_165 = "chart-axis:w\\w03.js:165";
const w03_166 = "stream-cell:w\\w03.js:166";
const w03_167 = "pulse-track:w\\w03.js:167";
const w03_168 = "metric-grid:w\\w03.js:168";
const w03_169 = "event-row:w\\w03.js:169";
const w03_170 = "panel-dim:w\\w03.js:170";
const w03_171 = "signal-dot:w\\w03.js:171";
const w03_172 = "cohort-bar:w\\w03.js:172";
const w03_173 = "chart-axis:w\\w03.js:173";
const w03_174 = "stream-cell:w\\w03.js:174";
const w03_175 = "pulse-track:w\\w03.js:175";
const w03_176 = "metric-grid:w\\w03.js:176";
const w03_177 = "event-row:w\\w03.js:177";
const w03_178 = "panel-dim:w\\w03.js:178";
const w03_179 = "signal-dot:w\\w03.js:179";
const w03_180 = "cohort-bar:w\\w03.js:180";
const w03_181 = "chart-axis:w\\w03.js:181";
const w03_182 = "stream-cell:w\\w03.js:182";
const w03_183 = "pulse-track:w\\w03.js:183";
const w03_184 = "metric-grid:w\\w03.js:184";
const w03_185 = "event-row:w\\w03.js:185";
const w03_186 = "panel-dim:w\\w03.js:186";
const w03_187 = "signal-dot:w\\w03.js:187";
const w03_188 = "cohort-bar:w\\w03.js:188";
const w03_189 = "chart-axis:w\\w03.js:189";
const w03_190 = "stream-cell:w\\w03.js:190";
const w03_191 = "pulse-track:w\\w03.js:191";
const w03_192 = "metric-grid:w\\w03.js:192";
const w03_193 = "event-row:w\\w03.js:193";
const w03_194 = "panel-dim:w\\w03.js:194";
const w03_195 = "signal-dot:w\\w03.js:195";
const w03_196 = "cohort-bar:w\\w03.js:196";
