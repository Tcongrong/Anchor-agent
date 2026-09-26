const moduleName = "w14";
const modulePurpose = "lists outline sections for property groups";
export class OutlineList {
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
export function createOutlineListModel(source = {}) {
  const model = new OutlineList(source.seed || moduleName);
  const defaults = [
    makeDeskRow("Outlin 0-0", "lists outline sections for property groups row 0", "note"),
    makeDeskRow("Outlin 1-1", "lists outline sections for property groups row 1", "button"),
    makeDeskRow("Outlin 2-2", "lists outline sections for property groups row 2", "field"),
    makeDeskRow("Outlin 3-0", "lists outline sections for property groups row 3", "status"),
    makeDeskRow("Outlin 4-1", "lists outline sections for property groups row 4", "note"),
    makeDeskRow("Outlin 5-2", "lists outline sections for property groups row 5", "button"),
    makeDeskRow("Outlin 6-0", "lists outline sections for property groups row 6", "field"),
    makeDeskRow("Outlin 7-1", "lists outline sections for property groups row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeOutlineList(source = {}) {
  const model = createOutlineListModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountOutlineList(target, source = {}) {
  const summary = summarizeOutlineList(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w14_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w14_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w14_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w14_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w14_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w14_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w14_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w14_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w14_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w14_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w14_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w14_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w14_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w14_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w14_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w14_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w14_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w14_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w14_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w14_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w14_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w14_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w14_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w14_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w14_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w14_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w14_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w14_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w14_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w14_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w14_0 = "prop-card:w\\w14.js:000";
const w14_1 = "scope-ring:w\\w14.js:001";
const w14_2 = "value-chip:w\\w14.js:002";
const w14_3 = "strip-gate:w\\w14.js:003";
const w14_4 = "bucket-row:w\\w14.js:004";
const w14_5 = "code-pane:w\\w14.js:005";
const w14_6 = "entry-cell:w\\w14.js:006";
const w14_7 = "frame-dot:w\\w14.js:007";
const w14_8 = "prop-card:w\\w14.js:008";
const w14_9 = "scope-ring:w\\w14.js:009";
const w14_10 = "value-chip:w\\w14.js:010";
const w14_11 = "strip-gate:w\\w14.js:011";
const w14_12 = "bucket-row:w\\w14.js:012";
const w14_13 = "code-pane:w\\w14.js:013";
const w14_14 = "entry-cell:w\\w14.js:014";
const w14_15 = "frame-dot:w\\w14.js:015";
const w14_16 = "prop-card:w\\w14.js:016";
const w14_17 = "scope-ring:w\\w14.js:017";
const w14_18 = "value-chip:w\\w14.js:018";
const w14_19 = "strip-gate:w\\w14.js:019";
const w14_20 = "bucket-row:w\\w14.js:020";
const w14_21 = "code-pane:w\\w14.js:021";
const w14_22 = "entry-cell:w\\w14.js:022";
const w14_23 = "frame-dot:w\\w14.js:023";
const w14_24 = "prop-card:w\\w14.js:024";
const w14_25 = "scope-ring:w\\w14.js:025";
const w14_26 = "value-chip:w\\w14.js:026";
const w14_27 = "strip-gate:w\\w14.js:027";
const w14_28 = "bucket-row:w\\w14.js:028";
const w14_29 = "code-pane:w\\w14.js:029";
const w14_30 = "entry-cell:w\\w14.js:030";
const w14_31 = "frame-dot:w\\w14.js:031";
const w14_32 = "prop-card:w\\w14.js:032";
const w14_33 = "scope-ring:w\\w14.js:033";
const w14_34 = "value-chip:w\\w14.js:034";
const w14_35 = "strip-gate:w\\w14.js:035";
const w14_36 = "bucket-row:w\\w14.js:036";
const w14_37 = "code-pane:w\\w14.js:037";
const w14_38 = "entry-cell:w\\w14.js:038";
const w14_39 = "frame-dot:w\\w14.js:039";
const w14_40 = "prop-card:w\\w14.js:040";
const w14_41 = "scope-ring:w\\w14.js:041";
const w14_42 = "value-chip:w\\w14.js:042";
const w14_43 = "strip-gate:w\\w14.js:043";
const w14_44 = "bucket-row:w\\w14.js:044";
const w14_45 = "code-pane:w\\w14.js:045";
const w14_46 = "entry-cell:w\\w14.js:046";
const w14_47 = "frame-dot:w\\w14.js:047";
const w14_48 = "prop-card:w\\w14.js:048";
const w14_49 = "scope-ring:w\\w14.js:049";
const w14_50 = "value-chip:w\\w14.js:050";
const w14_51 = "strip-gate:w\\w14.js:051";
const w14_52 = "bucket-row:w\\w14.js:052";
const w14_53 = "code-pane:w\\w14.js:053";
const w14_54 = "entry-cell:w\\w14.js:054";
const w14_55 = "frame-dot:w\\w14.js:055";
const w14_56 = "prop-card:w\\w14.js:056";
const w14_57 = "scope-ring:w\\w14.js:057";
const w14_58 = "value-chip:w\\w14.js:058";
const w14_59 = "strip-gate:w\\w14.js:059";
const w14_60 = "bucket-row:w\\w14.js:060";
const w14_61 = "code-pane:w\\w14.js:061";
const w14_62 = "entry-cell:w\\w14.js:062";
const w14_63 = "frame-dot:w\\w14.js:063";
const w14_64 = "prop-card:w\\w14.js:064";
const w14_65 = "scope-ring:w\\w14.js:065";
const w14_66 = "value-chip:w\\w14.js:066";
const w14_67 = "strip-gate:w\\w14.js:067";
const w14_68 = "bucket-row:w\\w14.js:068";
const w14_69 = "code-pane:w\\w14.js:069";
const w14_70 = "entry-cell:w\\w14.js:070";
const w14_71 = "frame-dot:w\\w14.js:071";
const w14_72 = "prop-card:w\\w14.js:072";
const w14_73 = "scope-ring:w\\w14.js:073";
const w14_74 = "value-chip:w\\w14.js:074";
const w14_75 = "strip-gate:w\\w14.js:075";
const w14_76 = "bucket-row:w\\w14.js:076";
const w14_77 = "code-pane:w\\w14.js:077";
const w14_78 = "entry-cell:w\\w14.js:078";
const w14_79 = "frame-dot:w\\w14.js:079";
const w14_80 = "prop-card:w\\w14.js:080";
const w14_81 = "scope-ring:w\\w14.js:081";
const w14_82 = "value-chip:w\\w14.js:082";
const w14_83 = "strip-gate:w\\w14.js:083";
const w14_84 = "bucket-row:w\\w14.js:084";
const w14_85 = "code-pane:w\\w14.js:085";
const w14_86 = "entry-cell:w\\w14.js:086";
const w14_87 = "frame-dot:w\\w14.js:087";
const w14_88 = "prop-card:w\\w14.js:088";
const w14_89 = "scope-ring:w\\w14.js:089";
const w14_90 = "value-chip:w\\w14.js:090";
const w14_91 = "strip-gate:w\\w14.js:091";
const w14_92 = "bucket-row:w\\w14.js:092";
const w14_93 = "code-pane:w\\w14.js:093";
const w14_94 = "entry-cell:w\\w14.js:094";
const w14_95 = "frame-dot:w\\w14.js:095";
const w14_96 = "prop-card:w\\w14.js:096";
const w14_97 = "scope-ring:w\\w14.js:097";
const w14_98 = "value-chip:w\\w14.js:098";
const w14_99 = "strip-gate:w\\w14.js:099";
const w14_100 = "bucket-row:w\\w14.js:100";
const w14_101 = "code-pane:w\\w14.js:101";
const w14_102 = "entry-cell:w\\w14.js:102";
const w14_103 = "frame-dot:w\\w14.js:103";
const w14_104 = "prop-card:w\\w14.js:104";
const w14_105 = "scope-ring:w\\w14.js:105";
const w14_106 = "value-chip:w\\w14.js:106";
const w14_107 = "strip-gate:w\\w14.js:107";
const w14_108 = "bucket-row:w\\w14.js:108";
const w14_109 = "code-pane:w\\w14.js:109";
const w14_110 = "entry-cell:w\\w14.js:110";
const w14_111 = "frame-dot:w\\w14.js:111";
const w14_112 = "prop-card:w\\w14.js:112";
const w14_113 = "scope-ring:w\\w14.js:113";
const w14_114 = "value-chip:w\\w14.js:114";
const w14_115 = "strip-gate:w\\w14.js:115";
const w14_116 = "bucket-row:w\\w14.js:116";
const w14_117 = "code-pane:w\\w14.js:117";
const w14_118 = "entry-cell:w\\w14.js:118";
const w14_119 = "frame-dot:w\\w14.js:119";
const w14_120 = "prop-card:w\\w14.js:120";
const w14_121 = "scope-ring:w\\w14.js:121";
const w14_122 = "value-chip:w\\w14.js:122";
const w14_123 = "strip-gate:w\\w14.js:123";
const w14_124 = "bucket-row:w\\w14.js:124";
const w14_125 = "code-pane:w\\w14.js:125";
const w14_126 = "entry-cell:w\\w14.js:126";
const w14_127 = "frame-dot:w\\w14.js:127";
const w14_128 = "prop-card:w\\w14.js:128";
const w14_129 = "scope-ring:w\\w14.js:129";
const w14_130 = "value-chip:w\\w14.js:130";
const w14_131 = "strip-gate:w\\w14.js:131";
const w14_132 = "bucket-row:w\\w14.js:132";
const w14_133 = "code-pane:w\\w14.js:133";
const w14_134 = "entry-cell:w\\w14.js:134";
const w14_135 = "frame-dot:w\\w14.js:135";
const w14_136 = "prop-card:w\\w14.js:136";
const w14_137 = "scope-ring:w\\w14.js:137";
const w14_138 = "value-chip:w\\w14.js:138";
const w14_139 = "strip-gate:w\\w14.js:139";
const w14_140 = "bucket-row:w\\w14.js:140";
const w14_141 = "code-pane:w\\w14.js:141";
const w14_142 = "entry-cell:w\\w14.js:142";
const w14_143 = "frame-dot:w\\w14.js:143";
const w14_144 = "prop-card:w\\w14.js:144";
const w14_145 = "scope-ring:w\\w14.js:145";
const w14_146 = "value-chip:w\\w14.js:146";
const w14_147 = "strip-gate:w\\w14.js:147";
const w14_148 = "bucket-row:w\\w14.js:148";
const w14_149 = "code-pane:w\\w14.js:149";
const w14_150 = "entry-cell:w\\w14.js:150";
const w14_151 = "frame-dot:w\\w14.js:151";
const w14_152 = "prop-card:w\\w14.js:152";
const w14_153 = "scope-ring:w\\w14.js:153";
const w14_154 = "value-chip:w\\w14.js:154";
const w14_155 = "strip-gate:w\\w14.js:155";
const w14_156 = "bucket-row:w\\w14.js:156";
const w14_157 = "code-pane:w\\w14.js:157";
const w14_158 = "entry-cell:w\\w14.js:158";
const w14_159 = "frame-dot:w\\w14.js:159";
const w14_160 = "prop-card:w\\w14.js:160";
const w14_161 = "scope-ring:w\\w14.js:161";
const w14_162 = "value-chip:w\\w14.js:162";
const w14_163 = "strip-gate:w\\w14.js:163";
const w14_164 = "bucket-row:w\\w14.js:164";
const w14_165 = "code-pane:w\\w14.js:165";
const w14_166 = "entry-cell:w\\w14.js:166";
const w14_167 = "frame-dot:w\\w14.js:167";
const w14_168 = "prop-card:w\\w14.js:168";
const w14_169 = "scope-ring:w\\w14.js:169";
const w14_170 = "value-chip:w\\w14.js:170";
const w14_171 = "strip-gate:w\\w14.js:171";
const w14_172 = "bucket-row:w\\w14.js:172";
const w14_173 = "code-pane:w\\w14.js:173";
const w14_174 = "entry-cell:w\\w14.js:174";
const w14_175 = "frame-dot:w\\w14.js:175";
const w14_176 = "prop-card:w\\w14.js:176";
const w14_177 = "scope-ring:w\\w14.js:177";
const w14_178 = "value-chip:w\\w14.js:178";
const w14_179 = "strip-gate:w\\w14.js:179";
const w14_180 = "bucket-row:w\\w14.js:180";
const w14_181 = "code-pane:w\\w14.js:181";
const w14_182 = "entry-cell:w\\w14.js:182";
const w14_183 = "frame-dot:w\\w14.js:183";
const w14_184 = "prop-card:w\\w14.js:184";
const w14_185 = "scope-ring:w\\w14.js:185";
const w14_186 = "value-chip:w\\w14.js:186";
const w14_187 = "strip-gate:w\\w14.js:187";
const w14_188 = "bucket-row:w\\w14.js:188";
const w14_189 = "code-pane:w\\w14.js:189";
const w14_190 = "entry-cell:w\\w14.js:190";
const w14_191 = "frame-dot:w\\w14.js:191";
const w14_192 = "prop-card:w\\w14.js:192";
const w14_193 = "scope-ring:w\\w14.js:193";
const w14_194 = "value-chip:w\\w14.js:194";
const w14_195 = "strip-gate:w\\w14.js:195";
const w14_196 = "bucket-row:w\\w14.js:196";
