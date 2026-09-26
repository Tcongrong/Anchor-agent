const moduleName = "w18";
const modulePurpose = "stores pane labels for the property grid";
export class LabelStore {
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
export function createLabelStoreModel(source = {}) {
  const model = new LabelStore(source.seed || moduleName);
  const defaults = [
    makeDeskRow("LabelS 0-0", "stores pane labels for the property grid row 0", "note"),
    makeDeskRow("LabelS 1-1", "stores pane labels for the property grid row 1", "button"),
    makeDeskRow("LabelS 2-2", "stores pane labels for the property grid row 2", "field"),
    makeDeskRow("LabelS 3-0", "stores pane labels for the property grid row 3", "status"),
    makeDeskRow("LabelS 4-1", "stores pane labels for the property grid row 4", "note"),
    makeDeskRow("LabelS 5-2", "stores pane labels for the property grid row 5", "button"),
    makeDeskRow("LabelS 6-0", "stores pane labels for the property grid row 6", "field"),
    makeDeskRow("LabelS 7-1", "stores pane labels for the property grid row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeLabelStore(source = {}) {
  const model = createLabelStoreModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountLabelStore(target, source = {}) {
  const summary = summarizeLabelStore(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w18_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w18_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w18_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w18_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w18_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w18_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w18_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w18_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w18_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w18_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w18_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w18_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w18_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w18_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w18_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w18_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w18_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w18_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w18_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w18_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w18_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w18_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w18_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w18_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w18_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w18_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w18_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w18_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w18_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w18_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w18_0 = "prop-card:w\\w18.js:000";
const w18_1 = "scope-ring:w\\w18.js:001";
const w18_2 = "value-chip:w\\w18.js:002";
const w18_3 = "strip-gate:w\\w18.js:003";
const w18_4 = "bucket-row:w\\w18.js:004";
const w18_5 = "code-pane:w\\w18.js:005";
const w18_6 = "entry-cell:w\\w18.js:006";
const w18_7 = "frame-dot:w\\w18.js:007";
const w18_8 = "prop-card:w\\w18.js:008";
const w18_9 = "scope-ring:w\\w18.js:009";
const w18_10 = "value-chip:w\\w18.js:010";
const w18_11 = "strip-gate:w\\w18.js:011";
const w18_12 = "bucket-row:w\\w18.js:012";
const w18_13 = "code-pane:w\\w18.js:013";
const w18_14 = "entry-cell:w\\w18.js:014";
const w18_15 = "frame-dot:w\\w18.js:015";
const w18_16 = "prop-card:w\\w18.js:016";
const w18_17 = "scope-ring:w\\w18.js:017";
const w18_18 = "value-chip:w\\w18.js:018";
const w18_19 = "strip-gate:w\\w18.js:019";
const w18_20 = "bucket-row:w\\w18.js:020";
const w18_21 = "code-pane:w\\w18.js:021";
const w18_22 = "entry-cell:w\\w18.js:022";
const w18_23 = "frame-dot:w\\w18.js:023";
const w18_24 = "prop-card:w\\w18.js:024";
const w18_25 = "scope-ring:w\\w18.js:025";
const w18_26 = "value-chip:w\\w18.js:026";
const w18_27 = "strip-gate:w\\w18.js:027";
const w18_28 = "bucket-row:w\\w18.js:028";
const w18_29 = "code-pane:w\\w18.js:029";
const w18_30 = "entry-cell:w\\w18.js:030";
const w18_31 = "frame-dot:w\\w18.js:031";
const w18_32 = "prop-card:w\\w18.js:032";
const w18_33 = "scope-ring:w\\w18.js:033";
const w18_34 = "value-chip:w\\w18.js:034";
const w18_35 = "strip-gate:w\\w18.js:035";
const w18_36 = "bucket-row:w\\w18.js:036";
const w18_37 = "code-pane:w\\w18.js:037";
const w18_38 = "entry-cell:w\\w18.js:038";
const w18_39 = "frame-dot:w\\w18.js:039";
const w18_40 = "prop-card:w\\w18.js:040";
const w18_41 = "scope-ring:w\\w18.js:041";
const w18_42 = "value-chip:w\\w18.js:042";
const w18_43 = "strip-gate:w\\w18.js:043";
const w18_44 = "bucket-row:w\\w18.js:044";
const w18_45 = "code-pane:w\\w18.js:045";
const w18_46 = "entry-cell:w\\w18.js:046";
const w18_47 = "frame-dot:w\\w18.js:047";
const w18_48 = "prop-card:w\\w18.js:048";
const w18_49 = "scope-ring:w\\w18.js:049";
const w18_50 = "value-chip:w\\w18.js:050";
const w18_51 = "strip-gate:w\\w18.js:051";
const w18_52 = "bucket-row:w\\w18.js:052";
const w18_53 = "code-pane:w\\w18.js:053";
const w18_54 = "entry-cell:w\\w18.js:054";
const w18_55 = "frame-dot:w\\w18.js:055";
const w18_56 = "prop-card:w\\w18.js:056";
const w18_57 = "scope-ring:w\\w18.js:057";
const w18_58 = "value-chip:w\\w18.js:058";
const w18_59 = "strip-gate:w\\w18.js:059";
const w18_60 = "bucket-row:w\\w18.js:060";
const w18_61 = "code-pane:w\\w18.js:061";
const w18_62 = "entry-cell:w\\w18.js:062";
const w18_63 = "frame-dot:w\\w18.js:063";
const w18_64 = "prop-card:w\\w18.js:064";
const w18_65 = "scope-ring:w\\w18.js:065";
const w18_66 = "value-chip:w\\w18.js:066";
const w18_67 = "strip-gate:w\\w18.js:067";
const w18_68 = "bucket-row:w\\w18.js:068";
const w18_69 = "code-pane:w\\w18.js:069";
const w18_70 = "entry-cell:w\\w18.js:070";
const w18_71 = "frame-dot:w\\w18.js:071";
const w18_72 = "prop-card:w\\w18.js:072";
const w18_73 = "scope-ring:w\\w18.js:073";
const w18_74 = "value-chip:w\\w18.js:074";
const w18_75 = "strip-gate:w\\w18.js:075";
const w18_76 = "bucket-row:w\\w18.js:076";
const w18_77 = "code-pane:w\\w18.js:077";
const w18_78 = "entry-cell:w\\w18.js:078";
const w18_79 = "frame-dot:w\\w18.js:079";
const w18_80 = "prop-card:w\\w18.js:080";
const w18_81 = "scope-ring:w\\w18.js:081";
const w18_82 = "value-chip:w\\w18.js:082";
const w18_83 = "strip-gate:w\\w18.js:083";
const w18_84 = "bucket-row:w\\w18.js:084";
const w18_85 = "code-pane:w\\w18.js:085";
const w18_86 = "entry-cell:w\\w18.js:086";
const w18_87 = "frame-dot:w\\w18.js:087";
const w18_88 = "prop-card:w\\w18.js:088";
const w18_89 = "scope-ring:w\\w18.js:089";
const w18_90 = "value-chip:w\\w18.js:090";
const w18_91 = "strip-gate:w\\w18.js:091";
const w18_92 = "bucket-row:w\\w18.js:092";
const w18_93 = "code-pane:w\\w18.js:093";
const w18_94 = "entry-cell:w\\w18.js:094";
const w18_95 = "frame-dot:w\\w18.js:095";
const w18_96 = "prop-card:w\\w18.js:096";
const w18_97 = "scope-ring:w\\w18.js:097";
const w18_98 = "value-chip:w\\w18.js:098";
const w18_99 = "strip-gate:w\\w18.js:099";
const w18_100 = "bucket-row:w\\w18.js:100";
const w18_101 = "code-pane:w\\w18.js:101";
const w18_102 = "entry-cell:w\\w18.js:102";
const w18_103 = "frame-dot:w\\w18.js:103";
const w18_104 = "prop-card:w\\w18.js:104";
const w18_105 = "scope-ring:w\\w18.js:105";
const w18_106 = "value-chip:w\\w18.js:106";
const w18_107 = "strip-gate:w\\w18.js:107";
const w18_108 = "bucket-row:w\\w18.js:108";
const w18_109 = "code-pane:w\\w18.js:109";
const w18_110 = "entry-cell:w\\w18.js:110";
const w18_111 = "frame-dot:w\\w18.js:111";
const w18_112 = "prop-card:w\\w18.js:112";
const w18_113 = "scope-ring:w\\w18.js:113";
const w18_114 = "value-chip:w\\w18.js:114";
const w18_115 = "strip-gate:w\\w18.js:115";
const w18_116 = "bucket-row:w\\w18.js:116";
const w18_117 = "code-pane:w\\w18.js:117";
const w18_118 = "entry-cell:w\\w18.js:118";
const w18_119 = "frame-dot:w\\w18.js:119";
const w18_120 = "prop-card:w\\w18.js:120";
const w18_121 = "scope-ring:w\\w18.js:121";
const w18_122 = "value-chip:w\\w18.js:122";
const w18_123 = "strip-gate:w\\w18.js:123";
const w18_124 = "bucket-row:w\\w18.js:124";
const w18_125 = "code-pane:w\\w18.js:125";
const w18_126 = "entry-cell:w\\w18.js:126";
const w18_127 = "frame-dot:w\\w18.js:127";
const w18_128 = "prop-card:w\\w18.js:128";
const w18_129 = "scope-ring:w\\w18.js:129";
const w18_130 = "value-chip:w\\w18.js:130";
const w18_131 = "strip-gate:w\\w18.js:131";
const w18_132 = "bucket-row:w\\w18.js:132";
const w18_133 = "code-pane:w\\w18.js:133";
const w18_134 = "entry-cell:w\\w18.js:134";
const w18_135 = "frame-dot:w\\w18.js:135";
const w18_136 = "prop-card:w\\w18.js:136";
const w18_137 = "scope-ring:w\\w18.js:137";
const w18_138 = "value-chip:w\\w18.js:138";
const w18_139 = "strip-gate:w\\w18.js:139";
const w18_140 = "bucket-row:w\\w18.js:140";
const w18_141 = "code-pane:w\\w18.js:141";
const w18_142 = "entry-cell:w\\w18.js:142";
const w18_143 = "frame-dot:w\\w18.js:143";
const w18_144 = "prop-card:w\\w18.js:144";
const w18_145 = "scope-ring:w\\w18.js:145";
const w18_146 = "value-chip:w\\w18.js:146";
const w18_147 = "strip-gate:w\\w18.js:147";
const w18_148 = "bucket-row:w\\w18.js:148";
const w18_149 = "code-pane:w\\w18.js:149";
const w18_150 = "entry-cell:w\\w18.js:150";
const w18_151 = "frame-dot:w\\w18.js:151";
const w18_152 = "prop-card:w\\w18.js:152";
const w18_153 = "scope-ring:w\\w18.js:153";
const w18_154 = "value-chip:w\\w18.js:154";
const w18_155 = "strip-gate:w\\w18.js:155";
const w18_156 = "bucket-row:w\\w18.js:156";
const w18_157 = "code-pane:w\\w18.js:157";
const w18_158 = "entry-cell:w\\w18.js:158";
const w18_159 = "frame-dot:w\\w18.js:159";
const w18_160 = "prop-card:w\\w18.js:160";
const w18_161 = "scope-ring:w\\w18.js:161";
const w18_162 = "value-chip:w\\w18.js:162";
const w18_163 = "strip-gate:w\\w18.js:163";
const w18_164 = "bucket-row:w\\w18.js:164";
const w18_165 = "code-pane:w\\w18.js:165";
const w18_166 = "entry-cell:w\\w18.js:166";
const w18_167 = "frame-dot:w\\w18.js:167";
const w18_168 = "prop-card:w\\w18.js:168";
const w18_169 = "scope-ring:w\\w18.js:169";
const w18_170 = "value-chip:w\\w18.js:170";
const w18_171 = "strip-gate:w\\w18.js:171";
const w18_172 = "bucket-row:w\\w18.js:172";
const w18_173 = "code-pane:w\\w18.js:173";
const w18_174 = "entry-cell:w\\w18.js:174";
const w18_175 = "frame-dot:w\\w18.js:175";
const w18_176 = "prop-card:w\\w18.js:176";
const w18_177 = "scope-ring:w\\w18.js:177";
const w18_178 = "value-chip:w\\w18.js:178";
const w18_179 = "strip-gate:w\\w18.js:179";
const w18_180 = "bucket-row:w\\w18.js:180";
const w18_181 = "code-pane:w\\w18.js:181";
const w18_182 = "entry-cell:w\\w18.js:182";
const w18_183 = "frame-dot:w\\w18.js:183";
const w18_184 = "prop-card:w\\w18.js:184";
const w18_185 = "scope-ring:w\\w18.js:185";
const w18_186 = "value-chip:w\\w18.js:186";
const w18_187 = "strip-gate:w\\w18.js:187";
const w18_188 = "bucket-row:w\\w18.js:188";
const w18_189 = "code-pane:w\\w18.js:189";
const w18_190 = "entry-cell:w\\w18.js:190";
const w18_191 = "frame-dot:w\\w18.js:191";
const w18_192 = "prop-card:w\\w18.js:192";
const w18_193 = "scope-ring:w\\w18.js:193";
const w18_194 = "value-chip:w\\w18.js:194";
const w18_195 = "strip-gate:w\\w18.js:195";
const w18_196 = "bucket-row:w\\w18.js:196";
