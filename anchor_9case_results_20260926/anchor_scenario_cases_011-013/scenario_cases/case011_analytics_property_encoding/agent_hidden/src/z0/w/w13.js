const moduleName = "w13";
const modulePurpose = "binds form fields for the encoder console";
export class FieldBinder {
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
export function createFieldBinderModel(source = {}) {
  const model = new FieldBinder(source.seed || moduleName);
  const defaults = [
    makeDeskRow("FieldB 0-0", "binds form fields for the encoder console row 0", "note"),
    makeDeskRow("FieldB 1-1", "binds form fields for the encoder console row 1", "button"),
    makeDeskRow("FieldB 2-2", "binds form fields for the encoder console row 2", "field"),
    makeDeskRow("FieldB 3-0", "binds form fields for the encoder console row 3", "status"),
    makeDeskRow("FieldB 4-1", "binds form fields for the encoder console row 4", "note"),
    makeDeskRow("FieldB 5-2", "binds form fields for the encoder console row 5", "button"),
    makeDeskRow("FieldB 6-0", "binds form fields for the encoder console row 6", "field"),
    makeDeskRow("FieldB 7-1", "binds form fields for the encoder console row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeFieldBinder(source = {}) {
  const model = createFieldBinderModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountFieldBinder(target, source = {}) {
  const summary = summarizeFieldBinder(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w13_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w13_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w13_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w13_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w13_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w13_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w13_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w13_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w13_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w13_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w13_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w13_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w13_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w13_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w13_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w13_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w13_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w13_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w13_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w13_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w13_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w13_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w13_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w13_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w13_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w13_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w13_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w13_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w13_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w13_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w13_0 = "prop-card:w\\w13.js:000";
const w13_1 = "scope-ring:w\\w13.js:001";
const w13_2 = "value-chip:w\\w13.js:002";
const w13_3 = "strip-gate:w\\w13.js:003";
const w13_4 = "bucket-row:w\\w13.js:004";
const w13_5 = "code-pane:w\\w13.js:005";
const w13_6 = "entry-cell:w\\w13.js:006";
const w13_7 = "frame-dot:w\\w13.js:007";
const w13_8 = "prop-card:w\\w13.js:008";
const w13_9 = "scope-ring:w\\w13.js:009";
const w13_10 = "value-chip:w\\w13.js:010";
const w13_11 = "strip-gate:w\\w13.js:011";
const w13_12 = "bucket-row:w\\w13.js:012";
const w13_13 = "code-pane:w\\w13.js:013";
const w13_14 = "entry-cell:w\\w13.js:014";
const w13_15 = "frame-dot:w\\w13.js:015";
const w13_16 = "prop-card:w\\w13.js:016";
const w13_17 = "scope-ring:w\\w13.js:017";
const w13_18 = "value-chip:w\\w13.js:018";
const w13_19 = "strip-gate:w\\w13.js:019";
const w13_20 = "bucket-row:w\\w13.js:020";
const w13_21 = "code-pane:w\\w13.js:021";
const w13_22 = "entry-cell:w\\w13.js:022";
const w13_23 = "frame-dot:w\\w13.js:023";
const w13_24 = "prop-card:w\\w13.js:024";
const w13_25 = "scope-ring:w\\w13.js:025";
const w13_26 = "value-chip:w\\w13.js:026";
const w13_27 = "strip-gate:w\\w13.js:027";
const w13_28 = "bucket-row:w\\w13.js:028";
const w13_29 = "code-pane:w\\w13.js:029";
const w13_30 = "entry-cell:w\\w13.js:030";
const w13_31 = "frame-dot:w\\w13.js:031";
const w13_32 = "prop-card:w\\w13.js:032";
const w13_33 = "scope-ring:w\\w13.js:033";
const w13_34 = "value-chip:w\\w13.js:034";
const w13_35 = "strip-gate:w\\w13.js:035";
const w13_36 = "bucket-row:w\\w13.js:036";
const w13_37 = "code-pane:w\\w13.js:037";
const w13_38 = "entry-cell:w\\w13.js:038";
const w13_39 = "frame-dot:w\\w13.js:039";
const w13_40 = "prop-card:w\\w13.js:040";
const w13_41 = "scope-ring:w\\w13.js:041";
const w13_42 = "value-chip:w\\w13.js:042";
const w13_43 = "strip-gate:w\\w13.js:043";
const w13_44 = "bucket-row:w\\w13.js:044";
const w13_45 = "code-pane:w\\w13.js:045";
const w13_46 = "entry-cell:w\\w13.js:046";
const w13_47 = "frame-dot:w\\w13.js:047";
const w13_48 = "prop-card:w\\w13.js:048";
const w13_49 = "scope-ring:w\\w13.js:049";
const w13_50 = "value-chip:w\\w13.js:050";
const w13_51 = "strip-gate:w\\w13.js:051";
const w13_52 = "bucket-row:w\\w13.js:052";
const w13_53 = "code-pane:w\\w13.js:053";
const w13_54 = "entry-cell:w\\w13.js:054";
const w13_55 = "frame-dot:w\\w13.js:055";
const w13_56 = "prop-card:w\\w13.js:056";
const w13_57 = "scope-ring:w\\w13.js:057";
const w13_58 = "value-chip:w\\w13.js:058";
const w13_59 = "strip-gate:w\\w13.js:059";
const w13_60 = "bucket-row:w\\w13.js:060";
const w13_61 = "code-pane:w\\w13.js:061";
const w13_62 = "entry-cell:w\\w13.js:062";
const w13_63 = "frame-dot:w\\w13.js:063";
const w13_64 = "prop-card:w\\w13.js:064";
const w13_65 = "scope-ring:w\\w13.js:065";
const w13_66 = "value-chip:w\\w13.js:066";
const w13_67 = "strip-gate:w\\w13.js:067";
const w13_68 = "bucket-row:w\\w13.js:068";
const w13_69 = "code-pane:w\\w13.js:069";
const w13_70 = "entry-cell:w\\w13.js:070";
const w13_71 = "frame-dot:w\\w13.js:071";
const w13_72 = "prop-card:w\\w13.js:072";
const w13_73 = "scope-ring:w\\w13.js:073";
const w13_74 = "value-chip:w\\w13.js:074";
const w13_75 = "strip-gate:w\\w13.js:075";
const w13_76 = "bucket-row:w\\w13.js:076";
const w13_77 = "code-pane:w\\w13.js:077";
const w13_78 = "entry-cell:w\\w13.js:078";
const w13_79 = "frame-dot:w\\w13.js:079";
const w13_80 = "prop-card:w\\w13.js:080";
const w13_81 = "scope-ring:w\\w13.js:081";
const w13_82 = "value-chip:w\\w13.js:082";
const w13_83 = "strip-gate:w\\w13.js:083";
const w13_84 = "bucket-row:w\\w13.js:084";
const w13_85 = "code-pane:w\\w13.js:085";
const w13_86 = "entry-cell:w\\w13.js:086";
const w13_87 = "frame-dot:w\\w13.js:087";
const w13_88 = "prop-card:w\\w13.js:088";
const w13_89 = "scope-ring:w\\w13.js:089";
const w13_90 = "value-chip:w\\w13.js:090";
const w13_91 = "strip-gate:w\\w13.js:091";
const w13_92 = "bucket-row:w\\w13.js:092";
const w13_93 = "code-pane:w\\w13.js:093";
const w13_94 = "entry-cell:w\\w13.js:094";
const w13_95 = "frame-dot:w\\w13.js:095";
const w13_96 = "prop-card:w\\w13.js:096";
const w13_97 = "scope-ring:w\\w13.js:097";
const w13_98 = "value-chip:w\\w13.js:098";
const w13_99 = "strip-gate:w\\w13.js:099";
const w13_100 = "bucket-row:w\\w13.js:100";
const w13_101 = "code-pane:w\\w13.js:101";
const w13_102 = "entry-cell:w\\w13.js:102";
const w13_103 = "frame-dot:w\\w13.js:103";
const w13_104 = "prop-card:w\\w13.js:104";
const w13_105 = "scope-ring:w\\w13.js:105";
const w13_106 = "value-chip:w\\w13.js:106";
const w13_107 = "strip-gate:w\\w13.js:107";
const w13_108 = "bucket-row:w\\w13.js:108";
const w13_109 = "code-pane:w\\w13.js:109";
const w13_110 = "entry-cell:w\\w13.js:110";
const w13_111 = "frame-dot:w\\w13.js:111";
const w13_112 = "prop-card:w\\w13.js:112";
const w13_113 = "scope-ring:w\\w13.js:113";
const w13_114 = "value-chip:w\\w13.js:114";
const w13_115 = "strip-gate:w\\w13.js:115";
const w13_116 = "bucket-row:w\\w13.js:116";
const w13_117 = "code-pane:w\\w13.js:117";
const w13_118 = "entry-cell:w\\w13.js:118";
const w13_119 = "frame-dot:w\\w13.js:119";
const w13_120 = "prop-card:w\\w13.js:120";
const w13_121 = "scope-ring:w\\w13.js:121";
const w13_122 = "value-chip:w\\w13.js:122";
const w13_123 = "strip-gate:w\\w13.js:123";
const w13_124 = "bucket-row:w\\w13.js:124";
const w13_125 = "code-pane:w\\w13.js:125";
const w13_126 = "entry-cell:w\\w13.js:126";
const w13_127 = "frame-dot:w\\w13.js:127";
const w13_128 = "prop-card:w\\w13.js:128";
const w13_129 = "scope-ring:w\\w13.js:129";
const w13_130 = "value-chip:w\\w13.js:130";
const w13_131 = "strip-gate:w\\w13.js:131";
const w13_132 = "bucket-row:w\\w13.js:132";
const w13_133 = "code-pane:w\\w13.js:133";
const w13_134 = "entry-cell:w\\w13.js:134";
const w13_135 = "frame-dot:w\\w13.js:135";
const w13_136 = "prop-card:w\\w13.js:136";
const w13_137 = "scope-ring:w\\w13.js:137";
const w13_138 = "value-chip:w\\w13.js:138";
const w13_139 = "strip-gate:w\\w13.js:139";
const w13_140 = "bucket-row:w\\w13.js:140";
const w13_141 = "code-pane:w\\w13.js:141";
const w13_142 = "entry-cell:w\\w13.js:142";
const w13_143 = "frame-dot:w\\w13.js:143";
const w13_144 = "prop-card:w\\w13.js:144";
const w13_145 = "scope-ring:w\\w13.js:145";
const w13_146 = "value-chip:w\\w13.js:146";
const w13_147 = "strip-gate:w\\w13.js:147";
const w13_148 = "bucket-row:w\\w13.js:148";
const w13_149 = "code-pane:w\\w13.js:149";
const w13_150 = "entry-cell:w\\w13.js:150";
const w13_151 = "frame-dot:w\\w13.js:151";
const w13_152 = "prop-card:w\\w13.js:152";
const w13_153 = "scope-ring:w\\w13.js:153";
const w13_154 = "value-chip:w\\w13.js:154";
const w13_155 = "strip-gate:w\\w13.js:155";
const w13_156 = "bucket-row:w\\w13.js:156";
const w13_157 = "code-pane:w\\w13.js:157";
const w13_158 = "entry-cell:w\\w13.js:158";
const w13_159 = "frame-dot:w\\w13.js:159";
const w13_160 = "prop-card:w\\w13.js:160";
const w13_161 = "scope-ring:w\\w13.js:161";
const w13_162 = "value-chip:w\\w13.js:162";
const w13_163 = "strip-gate:w\\w13.js:163";
const w13_164 = "bucket-row:w\\w13.js:164";
const w13_165 = "code-pane:w\\w13.js:165";
const w13_166 = "entry-cell:w\\w13.js:166";
const w13_167 = "frame-dot:w\\w13.js:167";
const w13_168 = "prop-card:w\\w13.js:168";
const w13_169 = "scope-ring:w\\w13.js:169";
const w13_170 = "value-chip:w\\w13.js:170";
const w13_171 = "strip-gate:w\\w13.js:171";
const w13_172 = "bucket-row:w\\w13.js:172";
const w13_173 = "code-pane:w\\w13.js:173";
const w13_174 = "entry-cell:w\\w13.js:174";
const w13_175 = "frame-dot:w\\w13.js:175";
const w13_176 = "prop-card:w\\w13.js:176";
const w13_177 = "scope-ring:w\\w13.js:177";
const w13_178 = "value-chip:w\\w13.js:178";
const w13_179 = "strip-gate:w\\w13.js:179";
const w13_180 = "bucket-row:w\\w13.js:180";
const w13_181 = "code-pane:w\\w13.js:181";
const w13_182 = "entry-cell:w\\w13.js:182";
const w13_183 = "frame-dot:w\\w13.js:183";
const w13_184 = "prop-card:w\\w13.js:184";
const w13_185 = "scope-ring:w\\w13.js:185";
const w13_186 = "value-chip:w\\w13.js:186";
const w13_187 = "strip-gate:w\\w13.js:187";
const w13_188 = "bucket-row:w\\w13.js:188";
const w13_189 = "code-pane:w\\w13.js:189";
const w13_190 = "entry-cell:w\\w13.js:190";
const w13_191 = "frame-dot:w\\w13.js:191";
const w13_192 = "prop-card:w\\w13.js:192";
const w13_193 = "scope-ring:w\\w13.js:193";
const w13_194 = "value-chip:w\\w13.js:194";
const w13_195 = "strip-gate:w\\w13.js:195";
const w13_196 = "bucket-row:w\\w13.js:196";
