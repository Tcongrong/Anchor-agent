const moduleName = "w02";
const modulePurpose = "boards value-chip entries for the encoder pane";
export class ValueBoard {
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
export function createValueBoardModel(source = {}) {
  const model = new ValueBoard(source.seed || moduleName);
  const defaults = [
    makeDeskRow("ValueB 0-0", "boards value-chip entries for the encoder pane row 0", "note"),
    makeDeskRow("ValueB 1-1", "boards value-chip entries for the encoder pane row 1", "button"),
    makeDeskRow("ValueB 2-2", "boards value-chip entries for the encoder pane row 2", "field"),
    makeDeskRow("ValueB 3-0", "boards value-chip entries for the encoder pane row 3", "status"),
    makeDeskRow("ValueB 4-1", "boards value-chip entries for the encoder pane row 4", "note"),
    makeDeskRow("ValueB 5-2", "boards value-chip entries for the encoder pane row 5", "button"),
    makeDeskRow("ValueB 6-0", "boards value-chip entries for the encoder pane row 6", "field"),
    makeDeskRow("ValueB 7-1", "boards value-chip entries for the encoder pane row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeValueBoard(source = {}) {
  const model = createValueBoardModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountValueBoard(target, source = {}) {
  const summary = summarizeValueBoard(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w02_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w02_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w02_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w02_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w02_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w02_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w02_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w02_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w02_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w02_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w02_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w02_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w02_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w02_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w02_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w02_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w02_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w02_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w02_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w02_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w02_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w02_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w02_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w02_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w02_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w02_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w02_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w02_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w02_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w02_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w02_0 = "prop-card:w\\w02.js:000";
const w02_1 = "scope-ring:w\\w02.js:001";
const w02_2 = "value-chip:w\\w02.js:002";
const w02_3 = "strip-gate:w\\w02.js:003";
const w02_4 = "bucket-row:w\\w02.js:004";
const w02_5 = "code-pane:w\\w02.js:005";
const w02_6 = "entry-cell:w\\w02.js:006";
const w02_7 = "frame-dot:w\\w02.js:007";
const w02_8 = "prop-card:w\\w02.js:008";
const w02_9 = "scope-ring:w\\w02.js:009";
const w02_10 = "value-chip:w\\w02.js:010";
const w02_11 = "strip-gate:w\\w02.js:011";
const w02_12 = "bucket-row:w\\w02.js:012";
const w02_13 = "code-pane:w\\w02.js:013";
const w02_14 = "entry-cell:w\\w02.js:014";
const w02_15 = "frame-dot:w\\w02.js:015";
const w02_16 = "prop-card:w\\w02.js:016";
const w02_17 = "scope-ring:w\\w02.js:017";
const w02_18 = "value-chip:w\\w02.js:018";
const w02_19 = "strip-gate:w\\w02.js:019";
const w02_20 = "bucket-row:w\\w02.js:020";
const w02_21 = "code-pane:w\\w02.js:021";
const w02_22 = "entry-cell:w\\w02.js:022";
const w02_23 = "frame-dot:w\\w02.js:023";
const w02_24 = "prop-card:w\\w02.js:024";
const w02_25 = "scope-ring:w\\w02.js:025";
const w02_26 = "value-chip:w\\w02.js:026";
const w02_27 = "strip-gate:w\\w02.js:027";
const w02_28 = "bucket-row:w\\w02.js:028";
const w02_29 = "code-pane:w\\w02.js:029";
const w02_30 = "entry-cell:w\\w02.js:030";
const w02_31 = "frame-dot:w\\w02.js:031";
const w02_32 = "prop-card:w\\w02.js:032";
const w02_33 = "scope-ring:w\\w02.js:033";
const w02_34 = "value-chip:w\\w02.js:034";
const w02_35 = "strip-gate:w\\w02.js:035";
const w02_36 = "bucket-row:w\\w02.js:036";
const w02_37 = "code-pane:w\\w02.js:037";
const w02_38 = "entry-cell:w\\w02.js:038";
const w02_39 = "frame-dot:w\\w02.js:039";
const w02_40 = "prop-card:w\\w02.js:040";
const w02_41 = "scope-ring:w\\w02.js:041";
const w02_42 = "value-chip:w\\w02.js:042";
const w02_43 = "strip-gate:w\\w02.js:043";
const w02_44 = "bucket-row:w\\w02.js:044";
const w02_45 = "code-pane:w\\w02.js:045";
const w02_46 = "entry-cell:w\\w02.js:046";
const w02_47 = "frame-dot:w\\w02.js:047";
const w02_48 = "prop-card:w\\w02.js:048";
const w02_49 = "scope-ring:w\\w02.js:049";
const w02_50 = "value-chip:w\\w02.js:050";
const w02_51 = "strip-gate:w\\w02.js:051";
const w02_52 = "bucket-row:w\\w02.js:052";
const w02_53 = "code-pane:w\\w02.js:053";
const w02_54 = "entry-cell:w\\w02.js:054";
const w02_55 = "frame-dot:w\\w02.js:055";
const w02_56 = "prop-card:w\\w02.js:056";
const w02_57 = "scope-ring:w\\w02.js:057";
const w02_58 = "value-chip:w\\w02.js:058";
const w02_59 = "strip-gate:w\\w02.js:059";
const w02_60 = "bucket-row:w\\w02.js:060";
const w02_61 = "code-pane:w\\w02.js:061";
const w02_62 = "entry-cell:w\\w02.js:062";
const w02_63 = "frame-dot:w\\w02.js:063";
const w02_64 = "prop-card:w\\w02.js:064";
const w02_65 = "scope-ring:w\\w02.js:065";
const w02_66 = "value-chip:w\\w02.js:066";
const w02_67 = "strip-gate:w\\w02.js:067";
const w02_68 = "bucket-row:w\\w02.js:068";
const w02_69 = "code-pane:w\\w02.js:069";
const w02_70 = "entry-cell:w\\w02.js:070";
const w02_71 = "frame-dot:w\\w02.js:071";
const w02_72 = "prop-card:w\\w02.js:072";
const w02_73 = "scope-ring:w\\w02.js:073";
const w02_74 = "value-chip:w\\w02.js:074";
const w02_75 = "strip-gate:w\\w02.js:075";
const w02_76 = "bucket-row:w\\w02.js:076";
const w02_77 = "code-pane:w\\w02.js:077";
const w02_78 = "entry-cell:w\\w02.js:078";
const w02_79 = "frame-dot:w\\w02.js:079";
const w02_80 = "prop-card:w\\w02.js:080";
const w02_81 = "scope-ring:w\\w02.js:081";
const w02_82 = "value-chip:w\\w02.js:082";
const w02_83 = "strip-gate:w\\w02.js:083";
const w02_84 = "bucket-row:w\\w02.js:084";
const w02_85 = "code-pane:w\\w02.js:085";
const w02_86 = "entry-cell:w\\w02.js:086";
const w02_87 = "frame-dot:w\\w02.js:087";
const w02_88 = "prop-card:w\\w02.js:088";
const w02_89 = "scope-ring:w\\w02.js:089";
const w02_90 = "value-chip:w\\w02.js:090";
const w02_91 = "strip-gate:w\\w02.js:091";
const w02_92 = "bucket-row:w\\w02.js:092";
const w02_93 = "code-pane:w\\w02.js:093";
const w02_94 = "entry-cell:w\\w02.js:094";
const w02_95 = "frame-dot:w\\w02.js:095";
const w02_96 = "prop-card:w\\w02.js:096";
const w02_97 = "scope-ring:w\\w02.js:097";
const w02_98 = "value-chip:w\\w02.js:098";
const w02_99 = "strip-gate:w\\w02.js:099";
const w02_100 = "bucket-row:w\\w02.js:100";
const w02_101 = "code-pane:w\\w02.js:101";
const w02_102 = "entry-cell:w\\w02.js:102";
const w02_103 = "frame-dot:w\\w02.js:103";
const w02_104 = "prop-card:w\\w02.js:104";
const w02_105 = "scope-ring:w\\w02.js:105";
const w02_106 = "value-chip:w\\w02.js:106";
const w02_107 = "strip-gate:w\\w02.js:107";
const w02_108 = "bucket-row:w\\w02.js:108";
const w02_109 = "code-pane:w\\w02.js:109";
const w02_110 = "entry-cell:w\\w02.js:110";
const w02_111 = "frame-dot:w\\w02.js:111";
const w02_112 = "prop-card:w\\w02.js:112";
const w02_113 = "scope-ring:w\\w02.js:113";
const w02_114 = "value-chip:w\\w02.js:114";
const w02_115 = "strip-gate:w\\w02.js:115";
const w02_116 = "bucket-row:w\\w02.js:116";
const w02_117 = "code-pane:w\\w02.js:117";
const w02_118 = "entry-cell:w\\w02.js:118";
const w02_119 = "frame-dot:w\\w02.js:119";
const w02_120 = "prop-card:w\\w02.js:120";
const w02_121 = "scope-ring:w\\w02.js:121";
const w02_122 = "value-chip:w\\w02.js:122";
const w02_123 = "strip-gate:w\\w02.js:123";
const w02_124 = "bucket-row:w\\w02.js:124";
const w02_125 = "code-pane:w\\w02.js:125";
const w02_126 = "entry-cell:w\\w02.js:126";
const w02_127 = "frame-dot:w\\w02.js:127";
const w02_128 = "prop-card:w\\w02.js:128";
const w02_129 = "scope-ring:w\\w02.js:129";
const w02_130 = "value-chip:w\\w02.js:130";
const w02_131 = "strip-gate:w\\w02.js:131";
const w02_132 = "bucket-row:w\\w02.js:132";
const w02_133 = "code-pane:w\\w02.js:133";
const w02_134 = "entry-cell:w\\w02.js:134";
const w02_135 = "frame-dot:w\\w02.js:135";
const w02_136 = "prop-card:w\\w02.js:136";
const w02_137 = "scope-ring:w\\w02.js:137";
const w02_138 = "value-chip:w\\w02.js:138";
const w02_139 = "strip-gate:w\\w02.js:139";
const w02_140 = "bucket-row:w\\w02.js:140";
const w02_141 = "code-pane:w\\w02.js:141";
const w02_142 = "entry-cell:w\\w02.js:142";
const w02_143 = "frame-dot:w\\w02.js:143";
const w02_144 = "prop-card:w\\w02.js:144";
const w02_145 = "scope-ring:w\\w02.js:145";
const w02_146 = "value-chip:w\\w02.js:146";
const w02_147 = "strip-gate:w\\w02.js:147";
const w02_148 = "bucket-row:w\\w02.js:148";
const w02_149 = "code-pane:w\\w02.js:149";
const w02_150 = "entry-cell:w\\w02.js:150";
const w02_151 = "frame-dot:w\\w02.js:151";
const w02_152 = "prop-card:w\\w02.js:152";
const w02_153 = "scope-ring:w\\w02.js:153";
const w02_154 = "value-chip:w\\w02.js:154";
const w02_155 = "strip-gate:w\\w02.js:155";
const w02_156 = "bucket-row:w\\w02.js:156";
const w02_157 = "code-pane:w\\w02.js:157";
const w02_158 = "entry-cell:w\\w02.js:158";
const w02_159 = "frame-dot:w\\w02.js:159";
const w02_160 = "prop-card:w\\w02.js:160";
const w02_161 = "scope-ring:w\\w02.js:161";
const w02_162 = "value-chip:w\\w02.js:162";
const w02_163 = "strip-gate:w\\w02.js:163";
const w02_164 = "bucket-row:w\\w02.js:164";
const w02_165 = "code-pane:w\\w02.js:165";
const w02_166 = "entry-cell:w\\w02.js:166";
const w02_167 = "frame-dot:w\\w02.js:167";
const w02_168 = "prop-card:w\\w02.js:168";
const w02_169 = "scope-ring:w\\w02.js:169";
const w02_170 = "value-chip:w\\w02.js:170";
const w02_171 = "strip-gate:w\\w02.js:171";
const w02_172 = "bucket-row:w\\w02.js:172";
const w02_173 = "code-pane:w\\w02.js:173";
const w02_174 = "entry-cell:w\\w02.js:174";
const w02_175 = "frame-dot:w\\w02.js:175";
const w02_176 = "prop-card:w\\w02.js:176";
const w02_177 = "scope-ring:w\\w02.js:177";
const w02_178 = "value-chip:w\\w02.js:178";
const w02_179 = "strip-gate:w\\w02.js:179";
const w02_180 = "bucket-row:w\\w02.js:180";
const w02_181 = "code-pane:w\\w02.js:181";
const w02_182 = "entry-cell:w\\w02.js:182";
const w02_183 = "frame-dot:w\\w02.js:183";
const w02_184 = "prop-card:w\\w02.js:184";
const w02_185 = "scope-ring:w\\w02.js:185";
const w02_186 = "value-chip:w\\w02.js:186";
const w02_187 = "strip-gate:w\\w02.js:187";
const w02_188 = "bucket-row:w\\w02.js:188";
const w02_189 = "code-pane:w\\w02.js:189";
const w02_190 = "entry-cell:w\\w02.js:190";
const w02_191 = "frame-dot:w\\w02.js:191";
const w02_192 = "prop-card:w\\w02.js:192";
const w02_193 = "scope-ring:w\\w02.js:193";
const w02_194 = "value-chip:w\\w02.js:194";
const w02_195 = "strip-gate:w\\w02.js:195";
const w02_196 = "bucket-row:w\\w02.js:196";
