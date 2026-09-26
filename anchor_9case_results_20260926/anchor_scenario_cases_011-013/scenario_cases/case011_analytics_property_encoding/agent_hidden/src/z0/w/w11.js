const moduleName = "w11";
const modulePurpose = "grids overlay layers on the encoder desk";
export class OverlayGrid {
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
export function createOverlayGridModel(source = {}) {
  const model = new OverlayGrid(source.seed || moduleName);
  const defaults = [
    makeDeskRow("Overla 0-0", "grids overlay layers on the encoder desk row 0", "note"),
    makeDeskRow("Overla 1-1", "grids overlay layers on the encoder desk row 1", "button"),
    makeDeskRow("Overla 2-2", "grids overlay layers on the encoder desk row 2", "field"),
    makeDeskRow("Overla 3-0", "grids overlay layers on the encoder desk row 3", "status"),
    makeDeskRow("Overla 4-1", "grids overlay layers on the encoder desk row 4", "note"),
    makeDeskRow("Overla 5-2", "grids overlay layers on the encoder desk row 5", "button"),
    makeDeskRow("Overla 6-0", "grids overlay layers on the encoder desk row 6", "field"),
    makeDeskRow("Overla 7-1", "grids overlay layers on the encoder desk row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeOverlayGrid(source = {}) {
  const model = createOverlayGridModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountOverlayGrid(target, source = {}) {
  const summary = summarizeOverlayGrid(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w11_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w11_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w11_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w11_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w11_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w11_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w11_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w11_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w11_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w11_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w11_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w11_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w11_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w11_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w11_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w11_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w11_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w11_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w11_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w11_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w11_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w11_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w11_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w11_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w11_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w11_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w11_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w11_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w11_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w11_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w11_0 = "prop-card:w\\w11.js:000";
const w11_1 = "scope-ring:w\\w11.js:001";
const w11_2 = "value-chip:w\\w11.js:002";
const w11_3 = "strip-gate:w\\w11.js:003";
const w11_4 = "bucket-row:w\\w11.js:004";
const w11_5 = "code-pane:w\\w11.js:005";
const w11_6 = "entry-cell:w\\w11.js:006";
const w11_7 = "frame-dot:w\\w11.js:007";
const w11_8 = "prop-card:w\\w11.js:008";
const w11_9 = "scope-ring:w\\w11.js:009";
const w11_10 = "value-chip:w\\w11.js:010";
const w11_11 = "strip-gate:w\\w11.js:011";
const w11_12 = "bucket-row:w\\w11.js:012";
const w11_13 = "code-pane:w\\w11.js:013";
const w11_14 = "entry-cell:w\\w11.js:014";
const w11_15 = "frame-dot:w\\w11.js:015";
const w11_16 = "prop-card:w\\w11.js:016";
const w11_17 = "scope-ring:w\\w11.js:017";
const w11_18 = "value-chip:w\\w11.js:018";
const w11_19 = "strip-gate:w\\w11.js:019";
const w11_20 = "bucket-row:w\\w11.js:020";
const w11_21 = "code-pane:w\\w11.js:021";
const w11_22 = "entry-cell:w\\w11.js:022";
const w11_23 = "frame-dot:w\\w11.js:023";
const w11_24 = "prop-card:w\\w11.js:024";
const w11_25 = "scope-ring:w\\w11.js:025";
const w11_26 = "value-chip:w\\w11.js:026";
const w11_27 = "strip-gate:w\\w11.js:027";
const w11_28 = "bucket-row:w\\w11.js:028";
const w11_29 = "code-pane:w\\w11.js:029";
const w11_30 = "entry-cell:w\\w11.js:030";
const w11_31 = "frame-dot:w\\w11.js:031";
const w11_32 = "prop-card:w\\w11.js:032";
const w11_33 = "scope-ring:w\\w11.js:033";
const w11_34 = "value-chip:w\\w11.js:034";
const w11_35 = "strip-gate:w\\w11.js:035";
const w11_36 = "bucket-row:w\\w11.js:036";
const w11_37 = "code-pane:w\\w11.js:037";
const w11_38 = "entry-cell:w\\w11.js:038";
const w11_39 = "frame-dot:w\\w11.js:039";
const w11_40 = "prop-card:w\\w11.js:040";
const w11_41 = "scope-ring:w\\w11.js:041";
const w11_42 = "value-chip:w\\w11.js:042";
const w11_43 = "strip-gate:w\\w11.js:043";
const w11_44 = "bucket-row:w\\w11.js:044";
const w11_45 = "code-pane:w\\w11.js:045";
const w11_46 = "entry-cell:w\\w11.js:046";
const w11_47 = "frame-dot:w\\w11.js:047";
const w11_48 = "prop-card:w\\w11.js:048";
const w11_49 = "scope-ring:w\\w11.js:049";
const w11_50 = "value-chip:w\\w11.js:050";
const w11_51 = "strip-gate:w\\w11.js:051";
const w11_52 = "bucket-row:w\\w11.js:052";
const w11_53 = "code-pane:w\\w11.js:053";
const w11_54 = "entry-cell:w\\w11.js:054";
const w11_55 = "frame-dot:w\\w11.js:055";
const w11_56 = "prop-card:w\\w11.js:056";
const w11_57 = "scope-ring:w\\w11.js:057";
const w11_58 = "value-chip:w\\w11.js:058";
const w11_59 = "strip-gate:w\\w11.js:059";
const w11_60 = "bucket-row:w\\w11.js:060";
const w11_61 = "code-pane:w\\w11.js:061";
const w11_62 = "entry-cell:w\\w11.js:062";
const w11_63 = "frame-dot:w\\w11.js:063";
const w11_64 = "prop-card:w\\w11.js:064";
const w11_65 = "scope-ring:w\\w11.js:065";
const w11_66 = "value-chip:w\\w11.js:066";
const w11_67 = "strip-gate:w\\w11.js:067";
const w11_68 = "bucket-row:w\\w11.js:068";
const w11_69 = "code-pane:w\\w11.js:069";
const w11_70 = "entry-cell:w\\w11.js:070";
const w11_71 = "frame-dot:w\\w11.js:071";
const w11_72 = "prop-card:w\\w11.js:072";
const w11_73 = "scope-ring:w\\w11.js:073";
const w11_74 = "value-chip:w\\w11.js:074";
const w11_75 = "strip-gate:w\\w11.js:075";
const w11_76 = "bucket-row:w\\w11.js:076";
const w11_77 = "code-pane:w\\w11.js:077";
const w11_78 = "entry-cell:w\\w11.js:078";
const w11_79 = "frame-dot:w\\w11.js:079";
const w11_80 = "prop-card:w\\w11.js:080";
const w11_81 = "scope-ring:w\\w11.js:081";
const w11_82 = "value-chip:w\\w11.js:082";
const w11_83 = "strip-gate:w\\w11.js:083";
const w11_84 = "bucket-row:w\\w11.js:084";
const w11_85 = "code-pane:w\\w11.js:085";
const w11_86 = "entry-cell:w\\w11.js:086";
const w11_87 = "frame-dot:w\\w11.js:087";
const w11_88 = "prop-card:w\\w11.js:088";
const w11_89 = "scope-ring:w\\w11.js:089";
const w11_90 = "value-chip:w\\w11.js:090";
const w11_91 = "strip-gate:w\\w11.js:091";
const w11_92 = "bucket-row:w\\w11.js:092";
const w11_93 = "code-pane:w\\w11.js:093";
const w11_94 = "entry-cell:w\\w11.js:094";
const w11_95 = "frame-dot:w\\w11.js:095";
const w11_96 = "prop-card:w\\w11.js:096";
const w11_97 = "scope-ring:w\\w11.js:097";
const w11_98 = "value-chip:w\\w11.js:098";
const w11_99 = "strip-gate:w\\w11.js:099";
const w11_100 = "bucket-row:w\\w11.js:100";
const w11_101 = "code-pane:w\\w11.js:101";
const w11_102 = "entry-cell:w\\w11.js:102";
const w11_103 = "frame-dot:w\\w11.js:103";
const w11_104 = "prop-card:w\\w11.js:104";
const w11_105 = "scope-ring:w\\w11.js:105";
const w11_106 = "value-chip:w\\w11.js:106";
const w11_107 = "strip-gate:w\\w11.js:107";
const w11_108 = "bucket-row:w\\w11.js:108";
const w11_109 = "code-pane:w\\w11.js:109";
const w11_110 = "entry-cell:w\\w11.js:110";
const w11_111 = "frame-dot:w\\w11.js:111";
const w11_112 = "prop-card:w\\w11.js:112";
const w11_113 = "scope-ring:w\\w11.js:113";
const w11_114 = "value-chip:w\\w11.js:114";
const w11_115 = "strip-gate:w\\w11.js:115";
const w11_116 = "bucket-row:w\\w11.js:116";
const w11_117 = "code-pane:w\\w11.js:117";
const w11_118 = "entry-cell:w\\w11.js:118";
const w11_119 = "frame-dot:w\\w11.js:119";
const w11_120 = "prop-card:w\\w11.js:120";
const w11_121 = "scope-ring:w\\w11.js:121";
const w11_122 = "value-chip:w\\w11.js:122";
const w11_123 = "strip-gate:w\\w11.js:123";
const w11_124 = "bucket-row:w\\w11.js:124";
const w11_125 = "code-pane:w\\w11.js:125";
const w11_126 = "entry-cell:w\\w11.js:126";
const w11_127 = "frame-dot:w\\w11.js:127";
const w11_128 = "prop-card:w\\w11.js:128";
const w11_129 = "scope-ring:w\\w11.js:129";
const w11_130 = "value-chip:w\\w11.js:130";
const w11_131 = "strip-gate:w\\w11.js:131";
const w11_132 = "bucket-row:w\\w11.js:132";
const w11_133 = "code-pane:w\\w11.js:133";
const w11_134 = "entry-cell:w\\w11.js:134";
const w11_135 = "frame-dot:w\\w11.js:135";
const w11_136 = "prop-card:w\\w11.js:136";
const w11_137 = "scope-ring:w\\w11.js:137";
const w11_138 = "value-chip:w\\w11.js:138";
const w11_139 = "strip-gate:w\\w11.js:139";
const w11_140 = "bucket-row:w\\w11.js:140";
const w11_141 = "code-pane:w\\w11.js:141";
const w11_142 = "entry-cell:w\\w11.js:142";
const w11_143 = "frame-dot:w\\w11.js:143";
const w11_144 = "prop-card:w\\w11.js:144";
const w11_145 = "scope-ring:w\\w11.js:145";
const w11_146 = "value-chip:w\\w11.js:146";
const w11_147 = "strip-gate:w\\w11.js:147";
const w11_148 = "bucket-row:w\\w11.js:148";
const w11_149 = "code-pane:w\\w11.js:149";
const w11_150 = "entry-cell:w\\w11.js:150";
const w11_151 = "frame-dot:w\\w11.js:151";
const w11_152 = "prop-card:w\\w11.js:152";
const w11_153 = "scope-ring:w\\w11.js:153";
const w11_154 = "value-chip:w\\w11.js:154";
const w11_155 = "strip-gate:w\\w11.js:155";
const w11_156 = "bucket-row:w\\w11.js:156";
const w11_157 = "code-pane:w\\w11.js:157";
const w11_158 = "entry-cell:w\\w11.js:158";
const w11_159 = "frame-dot:w\\w11.js:159";
const w11_160 = "prop-card:w\\w11.js:160";
const w11_161 = "scope-ring:w\\w11.js:161";
const w11_162 = "value-chip:w\\w11.js:162";
const w11_163 = "strip-gate:w\\w11.js:163";
const w11_164 = "bucket-row:w\\w11.js:164";
const w11_165 = "code-pane:w\\w11.js:165";
const w11_166 = "entry-cell:w\\w11.js:166";
const w11_167 = "frame-dot:w\\w11.js:167";
const w11_168 = "prop-card:w\\w11.js:168";
const w11_169 = "scope-ring:w\\w11.js:169";
const w11_170 = "value-chip:w\\w11.js:170";
const w11_171 = "strip-gate:w\\w11.js:171";
const w11_172 = "bucket-row:w\\w11.js:172";
const w11_173 = "code-pane:w\\w11.js:173";
const w11_174 = "entry-cell:w\\w11.js:174";
const w11_175 = "frame-dot:w\\w11.js:175";
const w11_176 = "prop-card:w\\w11.js:176";
const w11_177 = "scope-ring:w\\w11.js:177";
const w11_178 = "value-chip:w\\w11.js:178";
const w11_179 = "strip-gate:w\\w11.js:179";
const w11_180 = "bucket-row:w\\w11.js:180";
const w11_181 = "code-pane:w\\w11.js:181";
const w11_182 = "entry-cell:w\\w11.js:182";
const w11_183 = "frame-dot:w\\w11.js:183";
const w11_184 = "prop-card:w\\w11.js:184";
const w11_185 = "scope-ring:w\\w11.js:185";
const w11_186 = "value-chip:w\\w11.js:186";
const w11_187 = "strip-gate:w\\w11.js:187";
const w11_188 = "bucket-row:w\\w11.js:188";
const w11_189 = "code-pane:w\\w11.js:189";
const w11_190 = "entry-cell:w\\w11.js:190";
const w11_191 = "frame-dot:w\\w11.js:191";
const w11_192 = "prop-card:w\\w11.js:192";
const w11_193 = "scope-ring:w\\w11.js:193";
const w11_194 = "value-chip:w\\w11.js:194";
const w11_195 = "strip-gate:w\\w11.js:195";
const w11_196 = "bucket-row:w\\w11.js:196";
