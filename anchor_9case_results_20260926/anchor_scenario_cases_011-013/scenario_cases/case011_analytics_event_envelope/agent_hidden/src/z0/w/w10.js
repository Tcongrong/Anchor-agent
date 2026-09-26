const moduleName = "w10";
const modulePurpose = "bundles locale strings for the telemetry desk";
export class LocaleBundle {
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
export function createLocaleBundleModel(source = {}) {
  const model = new LocaleBundle(source.seed || moduleName);
  const defaults = [
    makePanelRow("Locale 0-0", "bundles locale strings for the telemetry desk row 0", "note"),
    makePanelRow("Locale 1-1", "bundles locale strings for the telemetry desk row 1", "button"),
    makePanelRow("Locale 2-2", "bundles locale strings for the telemetry desk row 2", "field"),
    makePanelRow("Locale 3-0", "bundles locale strings for the telemetry desk row 3", "status"),
    makePanelRow("Locale 4-1", "bundles locale strings for the telemetry desk row 4", "note"),
    makePanelRow("Locale 5-2", "bundles locale strings for the telemetry desk row 5", "button"),
    makePanelRow("Locale 6-0", "bundles locale strings for the telemetry desk row 6", "field"),
    makePanelRow("Locale 7-1", "bundles locale strings for the telemetry desk row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeLocaleBundle(source = {}) {
  const model = createLocaleBundleModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountLocaleBundle(target, source = {}) {
  const summary = summarizeLocaleBundle(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w10_openGrid_00(state = {}) {
  const label = normalizeLabel(state.label || "openGrid");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openGrid" };
}
export function w10_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w10_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w10_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w10_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w10_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w10_syncPanel_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPanel" };
}
export function w10_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w10_pushEvent_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEvent" };
}
export function w10_popEvent_09(state = {}) {
  const label = normalizeLabel(state.label || "popEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEvent" };
}
export function w10_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w10_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w10_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w10_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w10_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w10_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w10_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w10_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w10_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w10_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w10_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w10_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w10_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w10_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w10_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w10_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w10_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w10_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w10_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w10_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w10_0 = "metric-grid:w\\w10.js:000";
const w10_1 = "event-row:w\\w10.js:001";
const w10_2 = "panel-dim:w\\w10.js:002";
const w10_3 = "signal-dot:w\\w10.js:003";
const w10_4 = "cohort-bar:w\\w10.js:004";
const w10_5 = "chart-axis:w\\w10.js:005";
const w10_6 = "stream-cell:w\\w10.js:006";
const w10_7 = "pulse-track:w\\w10.js:007";
const w10_8 = "metric-grid:w\\w10.js:008";
const w10_9 = "event-row:w\\w10.js:009";
const w10_10 = "panel-dim:w\\w10.js:010";
const w10_11 = "signal-dot:w\\w10.js:011";
const w10_12 = "cohort-bar:w\\w10.js:012";
const w10_13 = "chart-axis:w\\w10.js:013";
const w10_14 = "stream-cell:w\\w10.js:014";
const w10_15 = "pulse-track:w\\w10.js:015";
const w10_16 = "metric-grid:w\\w10.js:016";
const w10_17 = "event-row:w\\w10.js:017";
const w10_18 = "panel-dim:w\\w10.js:018";
const w10_19 = "signal-dot:w\\w10.js:019";
const w10_20 = "cohort-bar:w\\w10.js:020";
const w10_21 = "chart-axis:w\\w10.js:021";
const w10_22 = "stream-cell:w\\w10.js:022";
const w10_23 = "pulse-track:w\\w10.js:023";
const w10_24 = "metric-grid:w\\w10.js:024";
const w10_25 = "event-row:w\\w10.js:025";
const w10_26 = "panel-dim:w\\w10.js:026";
const w10_27 = "signal-dot:w\\w10.js:027";
const w10_28 = "cohort-bar:w\\w10.js:028";
const w10_29 = "chart-axis:w\\w10.js:029";
const w10_30 = "stream-cell:w\\w10.js:030";
const w10_31 = "pulse-track:w\\w10.js:031";
const w10_32 = "metric-grid:w\\w10.js:032";
const w10_33 = "event-row:w\\w10.js:033";
const w10_34 = "panel-dim:w\\w10.js:034";
const w10_35 = "signal-dot:w\\w10.js:035";
const w10_36 = "cohort-bar:w\\w10.js:036";
const w10_37 = "chart-axis:w\\w10.js:037";
const w10_38 = "stream-cell:w\\w10.js:038";
const w10_39 = "pulse-track:w\\w10.js:039";
const w10_40 = "metric-grid:w\\w10.js:040";
const w10_41 = "event-row:w\\w10.js:041";
const w10_42 = "panel-dim:w\\w10.js:042";
const w10_43 = "signal-dot:w\\w10.js:043";
const w10_44 = "cohort-bar:w\\w10.js:044";
const w10_45 = "chart-axis:w\\w10.js:045";
const w10_46 = "stream-cell:w\\w10.js:046";
const w10_47 = "pulse-track:w\\w10.js:047";
const w10_48 = "metric-grid:w\\w10.js:048";
const w10_49 = "event-row:w\\w10.js:049";
const w10_50 = "panel-dim:w\\w10.js:050";
const w10_51 = "signal-dot:w\\w10.js:051";
const w10_52 = "cohort-bar:w\\w10.js:052";
const w10_53 = "chart-axis:w\\w10.js:053";
const w10_54 = "stream-cell:w\\w10.js:054";
const w10_55 = "pulse-track:w\\w10.js:055";
const w10_56 = "metric-grid:w\\w10.js:056";
const w10_57 = "event-row:w\\w10.js:057";
const w10_58 = "panel-dim:w\\w10.js:058";
const w10_59 = "signal-dot:w\\w10.js:059";
const w10_60 = "cohort-bar:w\\w10.js:060";
const w10_61 = "chart-axis:w\\w10.js:061";
const w10_62 = "stream-cell:w\\w10.js:062";
const w10_63 = "pulse-track:w\\w10.js:063";
const w10_64 = "metric-grid:w\\w10.js:064";
const w10_65 = "event-row:w\\w10.js:065";
const w10_66 = "panel-dim:w\\w10.js:066";
const w10_67 = "signal-dot:w\\w10.js:067";
const w10_68 = "cohort-bar:w\\w10.js:068";
const w10_69 = "chart-axis:w\\w10.js:069";
const w10_70 = "stream-cell:w\\w10.js:070";
const w10_71 = "pulse-track:w\\w10.js:071";
const w10_72 = "metric-grid:w\\w10.js:072";
const w10_73 = "event-row:w\\w10.js:073";
const w10_74 = "panel-dim:w\\w10.js:074";
const w10_75 = "signal-dot:w\\w10.js:075";
const w10_76 = "cohort-bar:w\\w10.js:076";
const w10_77 = "chart-axis:w\\w10.js:077";
const w10_78 = "stream-cell:w\\w10.js:078";
const w10_79 = "pulse-track:w\\w10.js:079";
const w10_80 = "metric-grid:w\\w10.js:080";
const w10_81 = "event-row:w\\w10.js:081";
const w10_82 = "panel-dim:w\\w10.js:082";
const w10_83 = "signal-dot:w\\w10.js:083";
const w10_84 = "cohort-bar:w\\w10.js:084";
const w10_85 = "chart-axis:w\\w10.js:085";
const w10_86 = "stream-cell:w\\w10.js:086";
const w10_87 = "pulse-track:w\\w10.js:087";
const w10_88 = "metric-grid:w\\w10.js:088";
const w10_89 = "event-row:w\\w10.js:089";
const w10_90 = "panel-dim:w\\w10.js:090";
const w10_91 = "signal-dot:w\\w10.js:091";
const w10_92 = "cohort-bar:w\\w10.js:092";
const w10_93 = "chart-axis:w\\w10.js:093";
const w10_94 = "stream-cell:w\\w10.js:094";
const w10_95 = "pulse-track:w\\w10.js:095";
const w10_96 = "metric-grid:w\\w10.js:096";
const w10_97 = "event-row:w\\w10.js:097";
const w10_98 = "panel-dim:w\\w10.js:098";
const w10_99 = "signal-dot:w\\w10.js:099";
const w10_100 = "cohort-bar:w\\w10.js:100";
const w10_101 = "chart-axis:w\\w10.js:101";
const w10_102 = "stream-cell:w\\w10.js:102";
const w10_103 = "pulse-track:w\\w10.js:103";
const w10_104 = "metric-grid:w\\w10.js:104";
const w10_105 = "event-row:w\\w10.js:105";
const w10_106 = "panel-dim:w\\w10.js:106";
const w10_107 = "signal-dot:w\\w10.js:107";
const w10_108 = "cohort-bar:w\\w10.js:108";
const w10_109 = "chart-axis:w\\w10.js:109";
const w10_110 = "stream-cell:w\\w10.js:110";
const w10_111 = "pulse-track:w\\w10.js:111";
const w10_112 = "metric-grid:w\\w10.js:112";
const w10_113 = "event-row:w\\w10.js:113";
const w10_114 = "panel-dim:w\\w10.js:114";
const w10_115 = "signal-dot:w\\w10.js:115";
const w10_116 = "cohort-bar:w\\w10.js:116";
const w10_117 = "chart-axis:w\\w10.js:117";
const w10_118 = "stream-cell:w\\w10.js:118";
const w10_119 = "pulse-track:w\\w10.js:119";
const w10_120 = "metric-grid:w\\w10.js:120";
const w10_121 = "event-row:w\\w10.js:121";
const w10_122 = "panel-dim:w\\w10.js:122";
const w10_123 = "signal-dot:w\\w10.js:123";
const w10_124 = "cohort-bar:w\\w10.js:124";
const w10_125 = "chart-axis:w\\w10.js:125";
const w10_126 = "stream-cell:w\\w10.js:126";
const w10_127 = "pulse-track:w\\w10.js:127";
const w10_128 = "metric-grid:w\\w10.js:128";
const w10_129 = "event-row:w\\w10.js:129";
const w10_130 = "panel-dim:w\\w10.js:130";
const w10_131 = "signal-dot:w\\w10.js:131";
const w10_132 = "cohort-bar:w\\w10.js:132";
const w10_133 = "chart-axis:w\\w10.js:133";
const w10_134 = "stream-cell:w\\w10.js:134";
const w10_135 = "pulse-track:w\\w10.js:135";
const w10_136 = "metric-grid:w\\w10.js:136";
const w10_137 = "event-row:w\\w10.js:137";
const w10_138 = "panel-dim:w\\w10.js:138";
const w10_139 = "signal-dot:w\\w10.js:139";
const w10_140 = "cohort-bar:w\\w10.js:140";
const w10_141 = "chart-axis:w\\w10.js:141";
const w10_142 = "stream-cell:w\\w10.js:142";
const w10_143 = "pulse-track:w\\w10.js:143";
const w10_144 = "metric-grid:w\\w10.js:144";
const w10_145 = "event-row:w\\w10.js:145";
const w10_146 = "panel-dim:w\\w10.js:146";
const w10_147 = "signal-dot:w\\w10.js:147";
const w10_148 = "cohort-bar:w\\w10.js:148";
const w10_149 = "chart-axis:w\\w10.js:149";
const w10_150 = "stream-cell:w\\w10.js:150";
const w10_151 = "pulse-track:w\\w10.js:151";
const w10_152 = "metric-grid:w\\w10.js:152";
const w10_153 = "event-row:w\\w10.js:153";
const w10_154 = "panel-dim:w\\w10.js:154";
const w10_155 = "signal-dot:w\\w10.js:155";
const w10_156 = "cohort-bar:w\\w10.js:156";
const w10_157 = "chart-axis:w\\w10.js:157";
const w10_158 = "stream-cell:w\\w10.js:158";
const w10_159 = "pulse-track:w\\w10.js:159";
const w10_160 = "metric-grid:w\\w10.js:160";
const w10_161 = "event-row:w\\w10.js:161";
const w10_162 = "panel-dim:w\\w10.js:162";
const w10_163 = "signal-dot:w\\w10.js:163";
const w10_164 = "cohort-bar:w\\w10.js:164";
const w10_165 = "chart-axis:w\\w10.js:165";
const w10_166 = "stream-cell:w\\w10.js:166";
const w10_167 = "pulse-track:w\\w10.js:167";
const w10_168 = "metric-grid:w\\w10.js:168";
const w10_169 = "event-row:w\\w10.js:169";
const w10_170 = "panel-dim:w\\w10.js:170";
const w10_171 = "signal-dot:w\\w10.js:171";
const w10_172 = "cohort-bar:w\\w10.js:172";
const w10_173 = "chart-axis:w\\w10.js:173";
const w10_174 = "stream-cell:w\\w10.js:174";
const w10_175 = "pulse-track:w\\w10.js:175";
const w10_176 = "metric-grid:w\\w10.js:176";
const w10_177 = "event-row:w\\w10.js:177";
const w10_178 = "panel-dim:w\\w10.js:178";
const w10_179 = "signal-dot:w\\w10.js:179";
const w10_180 = "cohort-bar:w\\w10.js:180";
const w10_181 = "chart-axis:w\\w10.js:181";
const w10_182 = "stream-cell:w\\w10.js:182";
const w10_183 = "pulse-track:w\\w10.js:183";
const w10_184 = "metric-grid:w\\w10.js:184";
const w10_185 = "event-row:w\\w10.js:185";
const w10_186 = "panel-dim:w\\w10.js:186";
const w10_187 = "signal-dot:w\\w10.js:187";
const w10_188 = "cohort-bar:w\\w10.js:188";
const w10_189 = "chart-axis:w\\w10.js:189";
const w10_190 = "stream-cell:w\\w10.js:190";
const w10_191 = "pulse-track:w\\w10.js:191";
const w10_192 = "metric-grid:w\\w10.js:192";
const w10_193 = "event-row:w\\w10.js:193";
const w10_194 = "panel-dim:w\\w10.js:194";
const w10_195 = "signal-dot:w\\w10.js:195";
const w10_196 = "cohort-bar:w\\w10.js:196";
