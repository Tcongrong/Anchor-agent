const moduleName = "w15";
const modulePurpose = "marks scroll offsets of the property stream";
export class ScrollMark {
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
export function createScrollMarkModel(source = {}) {
  const model = new ScrollMark(source.seed || moduleName);
  const defaults = [
    makeDeskRow("Scroll 0-0", "marks scroll offsets of the property stream row 0", "note"),
    makeDeskRow("Scroll 1-1", "marks scroll offsets of the property stream row 1", "button"),
    makeDeskRow("Scroll 2-2", "marks scroll offsets of the property stream row 2", "field"),
    makeDeskRow("Scroll 3-0", "marks scroll offsets of the property stream row 3", "status"),
    makeDeskRow("Scroll 4-1", "marks scroll offsets of the property stream row 4", "note"),
    makeDeskRow("Scroll 5-2", "marks scroll offsets of the property stream row 5", "button"),
    makeDeskRow("Scroll 6-0", "marks scroll offsets of the property stream row 6", "field"),
    makeDeskRow("Scroll 7-1", "marks scroll offsets of the property stream row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeScrollMark(source = {}) {
  const model = createScrollMarkModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountScrollMark(target, source = {}) {
  const summary = summarizeScrollMark(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w15_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w15_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w15_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w15_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w15_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w15_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w15_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w15_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w15_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w15_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w15_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w15_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w15_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w15_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w15_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w15_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w15_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w15_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w15_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w15_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w15_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w15_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w15_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w15_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w15_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w15_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w15_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w15_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w15_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w15_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w15_0 = "prop-card:w\\w15.js:000";
const w15_1 = "scope-ring:w\\w15.js:001";
const w15_2 = "value-chip:w\\w15.js:002";
const w15_3 = "strip-gate:w\\w15.js:003";
const w15_4 = "bucket-row:w\\w15.js:004";
const w15_5 = "code-pane:w\\w15.js:005";
const w15_6 = "entry-cell:w\\w15.js:006";
const w15_7 = "frame-dot:w\\w15.js:007";
const w15_8 = "prop-card:w\\w15.js:008";
const w15_9 = "scope-ring:w\\w15.js:009";
const w15_10 = "value-chip:w\\w15.js:010";
const w15_11 = "strip-gate:w\\w15.js:011";
const w15_12 = "bucket-row:w\\w15.js:012";
const w15_13 = "code-pane:w\\w15.js:013";
const w15_14 = "entry-cell:w\\w15.js:014";
const w15_15 = "frame-dot:w\\w15.js:015";
const w15_16 = "prop-card:w\\w15.js:016";
const w15_17 = "scope-ring:w\\w15.js:017";
const w15_18 = "value-chip:w\\w15.js:018";
const w15_19 = "strip-gate:w\\w15.js:019";
const w15_20 = "bucket-row:w\\w15.js:020";
const w15_21 = "code-pane:w\\w15.js:021";
const w15_22 = "entry-cell:w\\w15.js:022";
const w15_23 = "frame-dot:w\\w15.js:023";
const w15_24 = "prop-card:w\\w15.js:024";
const w15_25 = "scope-ring:w\\w15.js:025";
const w15_26 = "value-chip:w\\w15.js:026";
const w15_27 = "strip-gate:w\\w15.js:027";
const w15_28 = "bucket-row:w\\w15.js:028";
const w15_29 = "code-pane:w\\w15.js:029";
const w15_30 = "entry-cell:w\\w15.js:030";
const w15_31 = "frame-dot:w\\w15.js:031";
const w15_32 = "prop-card:w\\w15.js:032";
const w15_33 = "scope-ring:w\\w15.js:033";
const w15_34 = "value-chip:w\\w15.js:034";
const w15_35 = "strip-gate:w\\w15.js:035";
const w15_36 = "bucket-row:w\\w15.js:036";
const w15_37 = "code-pane:w\\w15.js:037";
const w15_38 = "entry-cell:w\\w15.js:038";
const w15_39 = "frame-dot:w\\w15.js:039";
const w15_40 = "prop-card:w\\w15.js:040";
const w15_41 = "scope-ring:w\\w15.js:041";
const w15_42 = "value-chip:w\\w15.js:042";
const w15_43 = "strip-gate:w\\w15.js:043";
const w15_44 = "bucket-row:w\\w15.js:044";
const w15_45 = "code-pane:w\\w15.js:045";
const w15_46 = "entry-cell:w\\w15.js:046";
const w15_47 = "frame-dot:w\\w15.js:047";
const w15_48 = "prop-card:w\\w15.js:048";
const w15_49 = "scope-ring:w\\w15.js:049";
const w15_50 = "value-chip:w\\w15.js:050";
const w15_51 = "strip-gate:w\\w15.js:051";
const w15_52 = "bucket-row:w\\w15.js:052";
const w15_53 = "code-pane:w\\w15.js:053";
const w15_54 = "entry-cell:w\\w15.js:054";
const w15_55 = "frame-dot:w\\w15.js:055";
const w15_56 = "prop-card:w\\w15.js:056";
const w15_57 = "scope-ring:w\\w15.js:057";
const w15_58 = "value-chip:w\\w15.js:058";
const w15_59 = "strip-gate:w\\w15.js:059";
const w15_60 = "bucket-row:w\\w15.js:060";
const w15_61 = "code-pane:w\\w15.js:061";
const w15_62 = "entry-cell:w\\w15.js:062";
const w15_63 = "frame-dot:w\\w15.js:063";
const w15_64 = "prop-card:w\\w15.js:064";
const w15_65 = "scope-ring:w\\w15.js:065";
const w15_66 = "value-chip:w\\w15.js:066";
const w15_67 = "strip-gate:w\\w15.js:067";
const w15_68 = "bucket-row:w\\w15.js:068";
const w15_69 = "code-pane:w\\w15.js:069";
const w15_70 = "entry-cell:w\\w15.js:070";
const w15_71 = "frame-dot:w\\w15.js:071";
const w15_72 = "prop-card:w\\w15.js:072";
const w15_73 = "scope-ring:w\\w15.js:073";
const w15_74 = "value-chip:w\\w15.js:074";
const w15_75 = "strip-gate:w\\w15.js:075";
const w15_76 = "bucket-row:w\\w15.js:076";
const w15_77 = "code-pane:w\\w15.js:077";
const w15_78 = "entry-cell:w\\w15.js:078";
const w15_79 = "frame-dot:w\\w15.js:079";
const w15_80 = "prop-card:w\\w15.js:080";
const w15_81 = "scope-ring:w\\w15.js:081";
const w15_82 = "value-chip:w\\w15.js:082";
const w15_83 = "strip-gate:w\\w15.js:083";
const w15_84 = "bucket-row:w\\w15.js:084";
const w15_85 = "code-pane:w\\w15.js:085";
const w15_86 = "entry-cell:w\\w15.js:086";
const w15_87 = "frame-dot:w\\w15.js:087";
const w15_88 = "prop-card:w\\w15.js:088";
const w15_89 = "scope-ring:w\\w15.js:089";
const w15_90 = "value-chip:w\\w15.js:090";
const w15_91 = "strip-gate:w\\w15.js:091";
const w15_92 = "bucket-row:w\\w15.js:092";
const w15_93 = "code-pane:w\\w15.js:093";
const w15_94 = "entry-cell:w\\w15.js:094";
const w15_95 = "frame-dot:w\\w15.js:095";
const w15_96 = "prop-card:w\\w15.js:096";
const w15_97 = "scope-ring:w\\w15.js:097";
const w15_98 = "value-chip:w\\w15.js:098";
const w15_99 = "strip-gate:w\\w15.js:099";
const w15_100 = "bucket-row:w\\w15.js:100";
const w15_101 = "code-pane:w\\w15.js:101";
const w15_102 = "entry-cell:w\\w15.js:102";
const w15_103 = "frame-dot:w\\w15.js:103";
const w15_104 = "prop-card:w\\w15.js:104";
const w15_105 = "scope-ring:w\\w15.js:105";
const w15_106 = "value-chip:w\\w15.js:106";
const w15_107 = "strip-gate:w\\w15.js:107";
const w15_108 = "bucket-row:w\\w15.js:108";
const w15_109 = "code-pane:w\\w15.js:109";
const w15_110 = "entry-cell:w\\w15.js:110";
const w15_111 = "frame-dot:w\\w15.js:111";
const w15_112 = "prop-card:w\\w15.js:112";
const w15_113 = "scope-ring:w\\w15.js:113";
const w15_114 = "value-chip:w\\w15.js:114";
const w15_115 = "strip-gate:w\\w15.js:115";
const w15_116 = "bucket-row:w\\w15.js:116";
const w15_117 = "code-pane:w\\w15.js:117";
const w15_118 = "entry-cell:w\\w15.js:118";
const w15_119 = "frame-dot:w\\w15.js:119";
const w15_120 = "prop-card:w\\w15.js:120";
const w15_121 = "scope-ring:w\\w15.js:121";
const w15_122 = "value-chip:w\\w15.js:122";
const w15_123 = "strip-gate:w\\w15.js:123";
const w15_124 = "bucket-row:w\\w15.js:124";
const w15_125 = "code-pane:w\\w15.js:125";
const w15_126 = "entry-cell:w\\w15.js:126";
const w15_127 = "frame-dot:w\\w15.js:127";
const w15_128 = "prop-card:w\\w15.js:128";
const w15_129 = "scope-ring:w\\w15.js:129";
const w15_130 = "value-chip:w\\w15.js:130";
const w15_131 = "strip-gate:w\\w15.js:131";
const w15_132 = "bucket-row:w\\w15.js:132";
const w15_133 = "code-pane:w\\w15.js:133";
const w15_134 = "entry-cell:w\\w15.js:134";
const w15_135 = "frame-dot:w\\w15.js:135";
const w15_136 = "prop-card:w\\w15.js:136";
const w15_137 = "scope-ring:w\\w15.js:137";
const w15_138 = "value-chip:w\\w15.js:138";
const w15_139 = "strip-gate:w\\w15.js:139";
const w15_140 = "bucket-row:w\\w15.js:140";
const w15_141 = "code-pane:w\\w15.js:141";
const w15_142 = "entry-cell:w\\w15.js:142";
const w15_143 = "frame-dot:w\\w15.js:143";
const w15_144 = "prop-card:w\\w15.js:144";
const w15_145 = "scope-ring:w\\w15.js:145";
const w15_146 = "value-chip:w\\w15.js:146";
const w15_147 = "strip-gate:w\\w15.js:147";
const w15_148 = "bucket-row:w\\w15.js:148";
const w15_149 = "code-pane:w\\w15.js:149";
const w15_150 = "entry-cell:w\\w15.js:150";
const w15_151 = "frame-dot:w\\w15.js:151";
const w15_152 = "prop-card:w\\w15.js:152";
const w15_153 = "scope-ring:w\\w15.js:153";
const w15_154 = "value-chip:w\\w15.js:154";
const w15_155 = "strip-gate:w\\w15.js:155";
const w15_156 = "bucket-row:w\\w15.js:156";
const w15_157 = "code-pane:w\\w15.js:157";
const w15_158 = "entry-cell:w\\w15.js:158";
const w15_159 = "frame-dot:w\\w15.js:159";
const w15_160 = "prop-card:w\\w15.js:160";
const w15_161 = "scope-ring:w\\w15.js:161";
const w15_162 = "value-chip:w\\w15.js:162";
const w15_163 = "strip-gate:w\\w15.js:163";
const w15_164 = "bucket-row:w\\w15.js:164";
const w15_165 = "code-pane:w\\w15.js:165";
const w15_166 = "entry-cell:w\\w15.js:166";
const w15_167 = "frame-dot:w\\w15.js:167";
const w15_168 = "prop-card:w\\w15.js:168";
const w15_169 = "scope-ring:w\\w15.js:169";
const w15_170 = "value-chip:w\\w15.js:170";
const w15_171 = "strip-gate:w\\w15.js:171";
const w15_172 = "bucket-row:w\\w15.js:172";
const w15_173 = "code-pane:w\\w15.js:173";
const w15_174 = "entry-cell:w\\w15.js:174";
const w15_175 = "frame-dot:w\\w15.js:175";
const w15_176 = "prop-card:w\\w15.js:176";
const w15_177 = "scope-ring:w\\w15.js:177";
const w15_178 = "value-chip:w\\w15.js:178";
const w15_179 = "strip-gate:w\\w15.js:179";
const w15_180 = "bucket-row:w\\w15.js:180";
const w15_181 = "code-pane:w\\w15.js:181";
const w15_182 = "entry-cell:w\\w15.js:182";
const w15_183 = "frame-dot:w\\w15.js:183";
const w15_184 = "prop-card:w\\w15.js:184";
const w15_185 = "scope-ring:w\\w15.js:185";
const w15_186 = "value-chip:w\\w15.js:186";
const w15_187 = "strip-gate:w\\w15.js:187";
const w15_188 = "bucket-row:w\\w15.js:188";
const w15_189 = "code-pane:w\\w15.js:189";
const w15_190 = "entry-cell:w\\w15.js:190";
const w15_191 = "frame-dot:w\\w15.js:191";
const w15_192 = "prop-card:w\\w15.js:192";
const w15_193 = "scope-ring:w\\w15.js:193";
const w15_194 = "value-chip:w\\w15.js:194";
const w15_195 = "strip-gate:w\\w15.js:195";
const w15_196 = "bucket-row:w\\w15.js:196";
