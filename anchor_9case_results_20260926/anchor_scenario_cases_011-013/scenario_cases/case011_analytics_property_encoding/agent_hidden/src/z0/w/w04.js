const moduleName = "w04";
const modulePurpose = "grids bucket rows for the property console";
export class BucketGrid {
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
export function createBucketGridModel(source = {}) {
  const model = new BucketGrid(source.seed || moduleName);
  const defaults = [
    makeDeskRow("Bucket 0-0", "grids bucket rows for the property console row 0", "note"),
    makeDeskRow("Bucket 1-1", "grids bucket rows for the property console row 1", "button"),
    makeDeskRow("Bucket 2-2", "grids bucket rows for the property console row 2", "field"),
    makeDeskRow("Bucket 3-0", "grids bucket rows for the property console row 3", "status"),
    makeDeskRow("Bucket 4-1", "grids bucket rows for the property console row 4", "note"),
    makeDeskRow("Bucket 5-2", "grids bucket rows for the property console row 5", "button"),
    makeDeskRow("Bucket 6-0", "grids bucket rows for the property console row 6", "field"),
    makeDeskRow("Bucket 7-1", "grids bucket rows for the property console row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeBucketGrid(source = {}) {
  const model = createBucketGridModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountBucketGrid(target, source = {}) {
  const summary = summarizeBucketGrid(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w04_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w04_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w04_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w04_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w04_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w04_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w04_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w04_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w04_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w04_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w04_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w04_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w04_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w04_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w04_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w04_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w04_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w04_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w04_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w04_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w04_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w04_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w04_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w04_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w04_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w04_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w04_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w04_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w04_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w04_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w04_0 = "prop-card:w\\w04.js:000";
const w04_1 = "scope-ring:w\\w04.js:001";
const w04_2 = "value-chip:w\\w04.js:002";
const w04_3 = "strip-gate:w\\w04.js:003";
const w04_4 = "bucket-row:w\\w04.js:004";
const w04_5 = "code-pane:w\\w04.js:005";
const w04_6 = "entry-cell:w\\w04.js:006";
const w04_7 = "frame-dot:w\\w04.js:007";
const w04_8 = "prop-card:w\\w04.js:008";
const w04_9 = "scope-ring:w\\w04.js:009";
const w04_10 = "value-chip:w\\w04.js:010";
const w04_11 = "strip-gate:w\\w04.js:011";
const w04_12 = "bucket-row:w\\w04.js:012";
const w04_13 = "code-pane:w\\w04.js:013";
const w04_14 = "entry-cell:w\\w04.js:014";
const w04_15 = "frame-dot:w\\w04.js:015";
const w04_16 = "prop-card:w\\w04.js:016";
const w04_17 = "scope-ring:w\\w04.js:017";
const w04_18 = "value-chip:w\\w04.js:018";
const w04_19 = "strip-gate:w\\w04.js:019";
const w04_20 = "bucket-row:w\\w04.js:020";
const w04_21 = "code-pane:w\\w04.js:021";
const w04_22 = "entry-cell:w\\w04.js:022";
const w04_23 = "frame-dot:w\\w04.js:023";
const w04_24 = "prop-card:w\\w04.js:024";
const w04_25 = "scope-ring:w\\w04.js:025";
const w04_26 = "value-chip:w\\w04.js:026";
const w04_27 = "strip-gate:w\\w04.js:027";
const w04_28 = "bucket-row:w\\w04.js:028";
const w04_29 = "code-pane:w\\w04.js:029";
const w04_30 = "entry-cell:w\\w04.js:030";
const w04_31 = "frame-dot:w\\w04.js:031";
const w04_32 = "prop-card:w\\w04.js:032";
const w04_33 = "scope-ring:w\\w04.js:033";
const w04_34 = "value-chip:w\\w04.js:034";
const w04_35 = "strip-gate:w\\w04.js:035";
const w04_36 = "bucket-row:w\\w04.js:036";
const w04_37 = "code-pane:w\\w04.js:037";
const w04_38 = "entry-cell:w\\w04.js:038";
const w04_39 = "frame-dot:w\\w04.js:039";
const w04_40 = "prop-card:w\\w04.js:040";
const w04_41 = "scope-ring:w\\w04.js:041";
const w04_42 = "value-chip:w\\w04.js:042";
const w04_43 = "strip-gate:w\\w04.js:043";
const w04_44 = "bucket-row:w\\w04.js:044";
const w04_45 = "code-pane:w\\w04.js:045";
const w04_46 = "entry-cell:w\\w04.js:046";
const w04_47 = "frame-dot:w\\w04.js:047";
const w04_48 = "prop-card:w\\w04.js:048";
const w04_49 = "scope-ring:w\\w04.js:049";
const w04_50 = "value-chip:w\\w04.js:050";
const w04_51 = "strip-gate:w\\w04.js:051";
const w04_52 = "bucket-row:w\\w04.js:052";
const w04_53 = "code-pane:w\\w04.js:053";
const w04_54 = "entry-cell:w\\w04.js:054";
const w04_55 = "frame-dot:w\\w04.js:055";
const w04_56 = "prop-card:w\\w04.js:056";
const w04_57 = "scope-ring:w\\w04.js:057";
const w04_58 = "value-chip:w\\w04.js:058";
const w04_59 = "strip-gate:w\\w04.js:059";
const w04_60 = "bucket-row:w\\w04.js:060";
const w04_61 = "code-pane:w\\w04.js:061";
const w04_62 = "entry-cell:w\\w04.js:062";
const w04_63 = "frame-dot:w\\w04.js:063";
const w04_64 = "prop-card:w\\w04.js:064";
const w04_65 = "scope-ring:w\\w04.js:065";
const w04_66 = "value-chip:w\\w04.js:066";
const w04_67 = "strip-gate:w\\w04.js:067";
const w04_68 = "bucket-row:w\\w04.js:068";
const w04_69 = "code-pane:w\\w04.js:069";
const w04_70 = "entry-cell:w\\w04.js:070";
const w04_71 = "frame-dot:w\\w04.js:071";
const w04_72 = "prop-card:w\\w04.js:072";
const w04_73 = "scope-ring:w\\w04.js:073";
const w04_74 = "value-chip:w\\w04.js:074";
const w04_75 = "strip-gate:w\\w04.js:075";
const w04_76 = "bucket-row:w\\w04.js:076";
const w04_77 = "code-pane:w\\w04.js:077";
const w04_78 = "entry-cell:w\\w04.js:078";
const w04_79 = "frame-dot:w\\w04.js:079";
const w04_80 = "prop-card:w\\w04.js:080";
const w04_81 = "scope-ring:w\\w04.js:081";
const w04_82 = "value-chip:w\\w04.js:082";
const w04_83 = "strip-gate:w\\w04.js:083";
const w04_84 = "bucket-row:w\\w04.js:084";
const w04_85 = "code-pane:w\\w04.js:085";
const w04_86 = "entry-cell:w\\w04.js:086";
const w04_87 = "frame-dot:w\\w04.js:087";
const w04_88 = "prop-card:w\\w04.js:088";
const w04_89 = "scope-ring:w\\w04.js:089";
const w04_90 = "value-chip:w\\w04.js:090";
const w04_91 = "strip-gate:w\\w04.js:091";
const w04_92 = "bucket-row:w\\w04.js:092";
const w04_93 = "code-pane:w\\w04.js:093";
const w04_94 = "entry-cell:w\\w04.js:094";
const w04_95 = "frame-dot:w\\w04.js:095";
const w04_96 = "prop-card:w\\w04.js:096";
const w04_97 = "scope-ring:w\\w04.js:097";
const w04_98 = "value-chip:w\\w04.js:098";
const w04_99 = "strip-gate:w\\w04.js:099";
const w04_100 = "bucket-row:w\\w04.js:100";
const w04_101 = "code-pane:w\\w04.js:101";
const w04_102 = "entry-cell:w\\w04.js:102";
const w04_103 = "frame-dot:w\\w04.js:103";
const w04_104 = "prop-card:w\\w04.js:104";
const w04_105 = "scope-ring:w\\w04.js:105";
const w04_106 = "value-chip:w\\w04.js:106";
const w04_107 = "strip-gate:w\\w04.js:107";
const w04_108 = "bucket-row:w\\w04.js:108";
const w04_109 = "code-pane:w\\w04.js:109";
const w04_110 = "entry-cell:w\\w04.js:110";
const w04_111 = "frame-dot:w\\w04.js:111";
const w04_112 = "prop-card:w\\w04.js:112";
const w04_113 = "scope-ring:w\\w04.js:113";
const w04_114 = "value-chip:w\\w04.js:114";
const w04_115 = "strip-gate:w\\w04.js:115";
const w04_116 = "bucket-row:w\\w04.js:116";
const w04_117 = "code-pane:w\\w04.js:117";
const w04_118 = "entry-cell:w\\w04.js:118";
const w04_119 = "frame-dot:w\\w04.js:119";
const w04_120 = "prop-card:w\\w04.js:120";
const w04_121 = "scope-ring:w\\w04.js:121";
const w04_122 = "value-chip:w\\w04.js:122";
const w04_123 = "strip-gate:w\\w04.js:123";
const w04_124 = "bucket-row:w\\w04.js:124";
const w04_125 = "code-pane:w\\w04.js:125";
const w04_126 = "entry-cell:w\\w04.js:126";
const w04_127 = "frame-dot:w\\w04.js:127";
const w04_128 = "prop-card:w\\w04.js:128";
const w04_129 = "scope-ring:w\\w04.js:129";
const w04_130 = "value-chip:w\\w04.js:130";
const w04_131 = "strip-gate:w\\w04.js:131";
const w04_132 = "bucket-row:w\\w04.js:132";
const w04_133 = "code-pane:w\\w04.js:133";
const w04_134 = "entry-cell:w\\w04.js:134";
const w04_135 = "frame-dot:w\\w04.js:135";
const w04_136 = "prop-card:w\\w04.js:136";
const w04_137 = "scope-ring:w\\w04.js:137";
const w04_138 = "value-chip:w\\w04.js:138";
const w04_139 = "strip-gate:w\\w04.js:139";
const w04_140 = "bucket-row:w\\w04.js:140";
const w04_141 = "code-pane:w\\w04.js:141";
const w04_142 = "entry-cell:w\\w04.js:142";
const w04_143 = "frame-dot:w\\w04.js:143";
const w04_144 = "prop-card:w\\w04.js:144";
const w04_145 = "scope-ring:w\\w04.js:145";
const w04_146 = "value-chip:w\\w04.js:146";
const w04_147 = "strip-gate:w\\w04.js:147";
const w04_148 = "bucket-row:w\\w04.js:148";
const w04_149 = "code-pane:w\\w04.js:149";
const w04_150 = "entry-cell:w\\w04.js:150";
const w04_151 = "frame-dot:w\\w04.js:151";
const w04_152 = "prop-card:w\\w04.js:152";
const w04_153 = "scope-ring:w\\w04.js:153";
const w04_154 = "value-chip:w\\w04.js:154";
const w04_155 = "strip-gate:w\\w04.js:155";
const w04_156 = "bucket-row:w\\w04.js:156";
const w04_157 = "code-pane:w\\w04.js:157";
const w04_158 = "entry-cell:w\\w04.js:158";
const w04_159 = "frame-dot:w\\w04.js:159";
const w04_160 = "prop-card:w\\w04.js:160";
const w04_161 = "scope-ring:w\\w04.js:161";
const w04_162 = "value-chip:w\\w04.js:162";
const w04_163 = "strip-gate:w\\w04.js:163";
const w04_164 = "bucket-row:w\\w04.js:164";
const w04_165 = "code-pane:w\\w04.js:165";
const w04_166 = "entry-cell:w\\w04.js:166";
const w04_167 = "frame-dot:w\\w04.js:167";
const w04_168 = "prop-card:w\\w04.js:168";
const w04_169 = "scope-ring:w\\w04.js:169";
const w04_170 = "value-chip:w\\w04.js:170";
const w04_171 = "strip-gate:w\\w04.js:171";
const w04_172 = "bucket-row:w\\w04.js:172";
const w04_173 = "code-pane:w\\w04.js:173";
const w04_174 = "entry-cell:w\\w04.js:174";
const w04_175 = "frame-dot:w\\w04.js:175";
const w04_176 = "prop-card:w\\w04.js:176";
const w04_177 = "scope-ring:w\\w04.js:177";
const w04_178 = "value-chip:w\\w04.js:178";
const w04_179 = "strip-gate:w\\w04.js:179";
const w04_180 = "bucket-row:w\\w04.js:180";
const w04_181 = "code-pane:w\\w04.js:181";
const w04_182 = "entry-cell:w\\w04.js:182";
const w04_183 = "frame-dot:w\\w04.js:183";
const w04_184 = "prop-card:w\\w04.js:184";
const w04_185 = "scope-ring:w\\w04.js:185";
const w04_186 = "value-chip:w\\w04.js:186";
const w04_187 = "strip-gate:w\\w04.js:187";
const w04_188 = "bucket-row:w\\w04.js:188";
const w04_189 = "code-pane:w\\w04.js:189";
const w04_190 = "entry-cell:w\\w04.js:190";
const w04_191 = "frame-dot:w\\w04.js:191";
const w04_192 = "prop-card:w\\w04.js:192";
const w04_193 = "scope-ring:w\\w04.js:193";
const w04_194 = "value-chip:w\\w04.js:194";
const w04_195 = "strip-gate:w\\w04.js:195";
const w04_196 = "bucket-row:w\\w04.js:196";
