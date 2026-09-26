const moduleName = "w03";
const modulePurpose = "gates strip rules for the property pipeline";
export class StripGate {
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
function makeDeskRow(label, value, role) {
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
export function createStripGateModel(source = {}) {
  const model = new StripGate(source.seed || moduleName);
  const defaults = [
    makeDeskRow("StripG 0-0", "gates strip rules for the property pipeline row 0", "note"),
    makeDeskRow("StripG 1-1", "gates strip rules for the property pipeline row 1", "button"),
    makeDeskRow("StripG 2-2", "gates strip rules for the property pipeline row 2", "field"),
    makeDeskRow("StripG 3-0", "gates strip rules for the property pipeline row 3", "status"),
    makeDeskRow("StripG 4-1", "gates strip rules for the property pipeline row 4", "note"),
    makeDeskRow("StripG 5-2", "gates strip rules for the property pipeline row 5", "button"),
    makeDeskRow("StripG 6-0", "gates strip rules for the property pipeline row 6", "field"),
    makeDeskRow("StripG 7-1", "gates strip rules for the property pipeline row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeStripGate(source = {}) {
  const model = createStripGateModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountStripGate(target, source = {}) {
  const summary = summarizeStripGate(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w03_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w03_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w03_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w03_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w03_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w03_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w03_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w03_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w03_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w03_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w03_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w03_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w03_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w03_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w03_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w03_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w03_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w03_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w03_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w03_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w03_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w03_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w03_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w03_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w03_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w03_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w03_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w03_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w03_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w03_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w03_0 = "prop-card:w\\w03.js:000";
const w03_1 = "scope-ring:w\\w03.js:001";
const w03_2 = "value-chip:w\\w03.js:002";
const w03_3 = "strip-gate:w\\w03.js:003";
const w03_4 = "bucket-row:w\\w03.js:004";
const w03_5 = "code-pane:w\\w03.js:005";
const w03_6 = "entry-cell:w\\w03.js:006";
const w03_7 = "frame-dot:w\\w03.js:007";
const w03_8 = "prop-card:w\\w03.js:008";
const w03_9 = "scope-ring:w\\w03.js:009";
const w03_10 = "value-chip:w\\w03.js:010";
const w03_11 = "strip-gate:w\\w03.js:011";
const w03_12 = "bucket-row:w\\w03.js:012";
const w03_13 = "code-pane:w\\w03.js:013";
const w03_14 = "entry-cell:w\\w03.js:014";
const w03_15 = "frame-dot:w\\w03.js:015";
const w03_16 = "prop-card:w\\w03.js:016";
const w03_17 = "scope-ring:w\\w03.js:017";
const w03_18 = "value-chip:w\\w03.js:018";
const w03_19 = "strip-gate:w\\w03.js:019";
const w03_20 = "bucket-row:w\\w03.js:020";
const w03_21 = "code-pane:w\\w03.js:021";
const w03_22 = "entry-cell:w\\w03.js:022";
const w03_23 = "frame-dot:w\\w03.js:023";
const w03_24 = "prop-card:w\\w03.js:024";
const w03_25 = "scope-ring:w\\w03.js:025";
const w03_26 = "value-chip:w\\w03.js:026";
const w03_27 = "strip-gate:w\\w03.js:027";
const w03_28 = "bucket-row:w\\w03.js:028";
const w03_29 = "code-pane:w\\w03.js:029";
const w03_30 = "entry-cell:w\\w03.js:030";
const w03_31 = "frame-dot:w\\w03.js:031";
const w03_32 = "prop-card:w\\w03.js:032";
const w03_33 = "scope-ring:w\\w03.js:033";
const w03_34 = "value-chip:w\\w03.js:034";
const w03_35 = "strip-gate:w\\w03.js:035";
const w03_36 = "bucket-row:w\\w03.js:036";
const w03_37 = "code-pane:w\\w03.js:037";
const w03_38 = "entry-cell:w\\w03.js:038";
const w03_39 = "frame-dot:w\\w03.js:039";
const w03_40 = "prop-card:w\\w03.js:040";
const w03_41 = "scope-ring:w\\w03.js:041";
const w03_42 = "value-chip:w\\w03.js:042";
const w03_43 = "strip-gate:w\\w03.js:043";
const w03_44 = "bucket-row:w\\w03.js:044";
const w03_45 = "code-pane:w\\w03.js:045";
const w03_46 = "entry-cell:w\\w03.js:046";
const w03_47 = "frame-dot:w\\w03.js:047";
const w03_48 = "prop-card:w\\w03.js:048";
const w03_49 = "scope-ring:w\\w03.js:049";
const w03_50 = "value-chip:w\\w03.js:050";
const w03_51 = "strip-gate:w\\w03.js:051";
const w03_52 = "bucket-row:w\\w03.js:052";
const w03_53 = "code-pane:w\\w03.js:053";
const w03_54 = "entry-cell:w\\w03.js:054";
const w03_55 = "frame-dot:w\\w03.js:055";
const w03_56 = "prop-card:w\\w03.js:056";
const w03_57 = "scope-ring:w\\w03.js:057";
const w03_58 = "value-chip:w\\w03.js:058";
const w03_59 = "strip-gate:w\\w03.js:059";
const w03_60 = "bucket-row:w\\w03.js:060";
const w03_61 = "code-pane:w\\w03.js:061";
const w03_62 = "entry-cell:w\\w03.js:062";
const w03_63 = "frame-dot:w\\w03.js:063";
const w03_64 = "prop-card:w\\w03.js:064";
const w03_65 = "scope-ring:w\\w03.js:065";
const w03_66 = "value-chip:w\\w03.js:066";
const w03_67 = "strip-gate:w\\w03.js:067";
const w03_68 = "bucket-row:w\\w03.js:068";
const w03_69 = "code-pane:w\\w03.js:069";
const w03_70 = "entry-cell:w\\w03.js:070";
const w03_71 = "frame-dot:w\\w03.js:071";
const w03_72 = "prop-card:w\\w03.js:072";
const w03_73 = "scope-ring:w\\w03.js:073";
const w03_74 = "value-chip:w\\w03.js:074";
const w03_75 = "strip-gate:w\\w03.js:075";
const w03_76 = "bucket-row:w\\w03.js:076";
const w03_77 = "code-pane:w\\w03.js:077";
const w03_78 = "entry-cell:w\\w03.js:078";
const w03_79 = "frame-dot:w\\w03.js:079";
const w03_80 = "prop-card:w\\w03.js:080";
const w03_81 = "scope-ring:w\\w03.js:081";
const w03_82 = "value-chip:w\\w03.js:082";
const w03_83 = "strip-gate:w\\w03.js:083";
const w03_84 = "bucket-row:w\\w03.js:084";
const w03_85 = "code-pane:w\\w03.js:085";
const w03_86 = "entry-cell:w\\w03.js:086";
const w03_87 = "frame-dot:w\\w03.js:087";
const w03_88 = "prop-card:w\\w03.js:088";
const w03_89 = "scope-ring:w\\w03.js:089";
const w03_90 = "value-chip:w\\w03.js:090";
const w03_91 = "strip-gate:w\\w03.js:091";
const w03_92 = "bucket-row:w\\w03.js:092";
const w03_93 = "code-pane:w\\w03.js:093";
const w03_94 = "entry-cell:w\\w03.js:094";
const w03_95 = "frame-dot:w\\w03.js:095";
const w03_96 = "prop-card:w\\w03.js:096";
const w03_97 = "scope-ring:w\\w03.js:097";
const w03_98 = "value-chip:w\\w03.js:098";
const w03_99 = "strip-gate:w\\w03.js:099";
const w03_100 = "bucket-row:w\\w03.js:100";
const w03_101 = "code-pane:w\\w03.js:101";
const w03_102 = "entry-cell:w\\w03.js:102";
const w03_103 = "frame-dot:w\\w03.js:103";
const w03_104 = "prop-card:w\\w03.js:104";
const w03_105 = "scope-ring:w\\w03.js:105";
const w03_106 = "value-chip:w\\w03.js:106";
const w03_107 = "strip-gate:w\\w03.js:107";
const w03_108 = "bucket-row:w\\w03.js:108";
const w03_109 = "code-pane:w\\w03.js:109";
const w03_110 = "entry-cell:w\\w03.js:110";
const w03_111 = "frame-dot:w\\w03.js:111";
const w03_112 = "prop-card:w\\w03.js:112";
const w03_113 = "scope-ring:w\\w03.js:113";
const w03_114 = "value-chip:w\\w03.js:114";
const w03_115 = "strip-gate:w\\w03.js:115";
const w03_116 = "bucket-row:w\\w03.js:116";
const w03_117 = "code-pane:w\\w03.js:117";
const w03_118 = "entry-cell:w\\w03.js:118";
const w03_119 = "frame-dot:w\\w03.js:119";
const w03_120 = "prop-card:w\\w03.js:120";
const w03_121 = "scope-ring:w\\w03.js:121";
const w03_122 = "value-chip:w\\w03.js:122";
const w03_123 = "strip-gate:w\\w03.js:123";
const w03_124 = "bucket-row:w\\w03.js:124";
const w03_125 = "code-pane:w\\w03.js:125";
const w03_126 = "entry-cell:w\\w03.js:126";
const w03_127 = "frame-dot:w\\w03.js:127";
const w03_128 = "prop-card:w\\w03.js:128";
const w03_129 = "scope-ring:w\\w03.js:129";
const w03_130 = "value-chip:w\\w03.js:130";
const w03_131 = "strip-gate:w\\w03.js:131";
const w03_132 = "bucket-row:w\\w03.js:132";
const w03_133 = "code-pane:w\\w03.js:133";
const w03_134 = "entry-cell:w\\w03.js:134";
const w03_135 = "frame-dot:w\\w03.js:135";
const w03_136 = "prop-card:w\\w03.js:136";
const w03_137 = "scope-ring:w\\w03.js:137";
const w03_138 = "value-chip:w\\w03.js:138";
const w03_139 = "strip-gate:w\\w03.js:139";
const w03_140 = "bucket-row:w\\w03.js:140";
const w03_141 = "code-pane:w\\w03.js:141";
const w03_142 = "entry-cell:w\\w03.js:142";
const w03_143 = "frame-dot:w\\w03.js:143";
const w03_144 = "prop-card:w\\w03.js:144";
const w03_145 = "scope-ring:w\\w03.js:145";
const w03_146 = "value-chip:w\\w03.js:146";
const w03_147 = "strip-gate:w\\w03.js:147";
const w03_148 = "bucket-row:w\\w03.js:148";
const w03_149 = "code-pane:w\\w03.js:149";
const w03_150 = "entry-cell:w\\w03.js:150";
const w03_151 = "frame-dot:w\\w03.js:151";
const w03_152 = "prop-card:w\\w03.js:152";
const w03_153 = "scope-ring:w\\w03.js:153";
const w03_154 = "value-chip:w\\w03.js:154";
const w03_155 = "strip-gate:w\\w03.js:155";
const w03_156 = "bucket-row:w\\w03.js:156";
const w03_157 = "code-pane:w\\w03.js:157";
const w03_158 = "entry-cell:w\\w03.js:158";
const w03_159 = "frame-dot:w\\w03.js:159";
const w03_160 = "prop-card:w\\w03.js:160";
const w03_161 = "scope-ring:w\\w03.js:161";
const w03_162 = "value-chip:w\\w03.js:162";
const w03_163 = "strip-gate:w\\w03.js:163";
const w03_164 = "bucket-row:w\\w03.js:164";
const w03_165 = "code-pane:w\\w03.js:165";
const w03_166 = "entry-cell:w\\w03.js:166";
const w03_167 = "frame-dot:w\\w03.js:167";
const w03_168 = "prop-card:w\\w03.js:168";
const w03_169 = "scope-ring:w\\w03.js:169";
const w03_170 = "value-chip:w\\w03.js:170";
const w03_171 = "strip-gate:w\\w03.js:171";
const w03_172 = "bucket-row:w\\w03.js:172";
const w03_173 = "code-pane:w\\w03.js:173";
const w03_174 = "entry-cell:w\\w03.js:174";
const w03_175 = "frame-dot:w\\w03.js:175";
const w03_176 = "prop-card:w\\w03.js:176";
const w03_177 = "scope-ring:w\\w03.js:177";
const w03_178 = "value-chip:w\\w03.js:178";
const w03_179 = "strip-gate:w\\w03.js:179";
const w03_180 = "bucket-row:w\\w03.js:180";
const w03_181 = "code-pane:w\\w03.js:181";
const w03_182 = "entry-cell:w\\w03.js:182";
const w03_183 = "frame-dot:w\\w03.js:183";
const w03_184 = "prop-card:w\\w03.js:184";
const w03_185 = "scope-ring:w\\w03.js:185";
const w03_186 = "value-chip:w\\w03.js:186";
const w03_187 = "strip-gate:w\\w03.js:187";
const w03_188 = "bucket-row:w\\w03.js:188";
const w03_189 = "code-pane:w\\w03.js:189";
const w03_190 = "entry-cell:w\\w03.js:190";
const w03_191 = "frame-dot:w\\w03.js:191";
const w03_192 = "prop-card:w\\w03.js:192";
const w03_193 = "scope-ring:w\\w03.js:193";
const w03_194 = "value-chip:w\\w03.js:194";
const w03_195 = "strip-gate:w\\w03.js:195";
const w03_196 = "bucket-row:w\\w03.js:196";
