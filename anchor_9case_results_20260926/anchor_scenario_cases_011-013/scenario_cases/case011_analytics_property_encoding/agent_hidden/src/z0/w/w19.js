const moduleName = "w19";
const modulePurpose = "indexes layer visibility for chart panes";
export class LayerIndex {
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
export function createLayerIndexModel(source = {}) {
  const model = new LayerIndex(source.seed || moduleName);
  const defaults = [
    makeDeskRow("LayerI 0-0", "indexes layer visibility for chart panes row 0", "note"),
    makeDeskRow("LayerI 1-1", "indexes layer visibility for chart panes row 1", "button"),
    makeDeskRow("LayerI 2-2", "indexes layer visibility for chart panes row 2", "field"),
    makeDeskRow("LayerI 3-0", "indexes layer visibility for chart panes row 3", "status"),
    makeDeskRow("LayerI 4-1", "indexes layer visibility for chart panes row 4", "note"),
    makeDeskRow("LayerI 5-2", "indexes layer visibility for chart panes row 5", "button"),
    makeDeskRow("LayerI 6-0", "indexes layer visibility for chart panes row 6", "field"),
    makeDeskRow("LayerI 7-1", "indexes layer visibility for chart panes row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeLayerIndex(source = {}) {
  const model = createLayerIndexModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountLayerIndex(target, source = {}) {
  const summary = summarizeLayerIndex(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w19_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w19_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w19_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w19_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w19_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w19_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w19_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w19_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w19_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w19_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w19_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w19_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w19_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w19_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w19_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w19_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w19_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w19_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w19_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w19_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w19_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w19_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w19_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w19_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w19_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w19_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w19_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w19_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w19_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w19_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w19_0 = "prop-card:w\\w19.js:000";
const w19_1 = "scope-ring:w\\w19.js:001";
const w19_2 = "value-chip:w\\w19.js:002";
const w19_3 = "strip-gate:w\\w19.js:003";
const w19_4 = "bucket-row:w\\w19.js:004";
const w19_5 = "code-pane:w\\w19.js:005";
const w19_6 = "entry-cell:w\\w19.js:006";
const w19_7 = "frame-dot:w\\w19.js:007";
const w19_8 = "prop-card:w\\w19.js:008";
const w19_9 = "scope-ring:w\\w19.js:009";
const w19_10 = "value-chip:w\\w19.js:010";
const w19_11 = "strip-gate:w\\w19.js:011";
const w19_12 = "bucket-row:w\\w19.js:012";
const w19_13 = "code-pane:w\\w19.js:013";
const w19_14 = "entry-cell:w\\w19.js:014";
const w19_15 = "frame-dot:w\\w19.js:015";
const w19_16 = "prop-card:w\\w19.js:016";
const w19_17 = "scope-ring:w\\w19.js:017";
const w19_18 = "value-chip:w\\w19.js:018";
const w19_19 = "strip-gate:w\\w19.js:019";
const w19_20 = "bucket-row:w\\w19.js:020";
const w19_21 = "code-pane:w\\w19.js:021";
const w19_22 = "entry-cell:w\\w19.js:022";
const w19_23 = "frame-dot:w\\w19.js:023";
const w19_24 = "prop-card:w\\w19.js:024";
const w19_25 = "scope-ring:w\\w19.js:025";
const w19_26 = "value-chip:w\\w19.js:026";
const w19_27 = "strip-gate:w\\w19.js:027";
const w19_28 = "bucket-row:w\\w19.js:028";
const w19_29 = "code-pane:w\\w19.js:029";
const w19_30 = "entry-cell:w\\w19.js:030";
const w19_31 = "frame-dot:w\\w19.js:031";
const w19_32 = "prop-card:w\\w19.js:032";
const w19_33 = "scope-ring:w\\w19.js:033";
const w19_34 = "value-chip:w\\w19.js:034";
const w19_35 = "strip-gate:w\\w19.js:035";
const w19_36 = "bucket-row:w\\w19.js:036";
const w19_37 = "code-pane:w\\w19.js:037";
const w19_38 = "entry-cell:w\\w19.js:038";
const w19_39 = "frame-dot:w\\w19.js:039";
const w19_40 = "prop-card:w\\w19.js:040";
const w19_41 = "scope-ring:w\\w19.js:041";
const w19_42 = "value-chip:w\\w19.js:042";
const w19_43 = "strip-gate:w\\w19.js:043";
const w19_44 = "bucket-row:w\\w19.js:044";
const w19_45 = "code-pane:w\\w19.js:045";
const w19_46 = "entry-cell:w\\w19.js:046";
const w19_47 = "frame-dot:w\\w19.js:047";
const w19_48 = "prop-card:w\\w19.js:048";
const w19_49 = "scope-ring:w\\w19.js:049";
const w19_50 = "value-chip:w\\w19.js:050";
const w19_51 = "strip-gate:w\\w19.js:051";
const w19_52 = "bucket-row:w\\w19.js:052";
const w19_53 = "code-pane:w\\w19.js:053";
const w19_54 = "entry-cell:w\\w19.js:054";
const w19_55 = "frame-dot:w\\w19.js:055";
const w19_56 = "prop-card:w\\w19.js:056";
const w19_57 = "scope-ring:w\\w19.js:057";
const w19_58 = "value-chip:w\\w19.js:058";
const w19_59 = "strip-gate:w\\w19.js:059";
const w19_60 = "bucket-row:w\\w19.js:060";
const w19_61 = "code-pane:w\\w19.js:061";
const w19_62 = "entry-cell:w\\w19.js:062";
const w19_63 = "frame-dot:w\\w19.js:063";
const w19_64 = "prop-card:w\\w19.js:064";
const w19_65 = "scope-ring:w\\w19.js:065";
const w19_66 = "value-chip:w\\w19.js:066";
const w19_67 = "strip-gate:w\\w19.js:067";
const w19_68 = "bucket-row:w\\w19.js:068";
const w19_69 = "code-pane:w\\w19.js:069";
const w19_70 = "entry-cell:w\\w19.js:070";
const w19_71 = "frame-dot:w\\w19.js:071";
const w19_72 = "prop-card:w\\w19.js:072";
const w19_73 = "scope-ring:w\\w19.js:073";
const w19_74 = "value-chip:w\\w19.js:074";
const w19_75 = "strip-gate:w\\w19.js:075";
const w19_76 = "bucket-row:w\\w19.js:076";
const w19_77 = "code-pane:w\\w19.js:077";
const w19_78 = "entry-cell:w\\w19.js:078";
const w19_79 = "frame-dot:w\\w19.js:079";
const w19_80 = "prop-card:w\\w19.js:080";
const w19_81 = "scope-ring:w\\w19.js:081";
const w19_82 = "value-chip:w\\w19.js:082";
const w19_83 = "strip-gate:w\\w19.js:083";
const w19_84 = "bucket-row:w\\w19.js:084";
const w19_85 = "code-pane:w\\w19.js:085";
const w19_86 = "entry-cell:w\\w19.js:086";
const w19_87 = "frame-dot:w\\w19.js:087";
const w19_88 = "prop-card:w\\w19.js:088";
const w19_89 = "scope-ring:w\\w19.js:089";
const w19_90 = "value-chip:w\\w19.js:090";
const w19_91 = "strip-gate:w\\w19.js:091";
const w19_92 = "bucket-row:w\\w19.js:092";
const w19_93 = "code-pane:w\\w19.js:093";
const w19_94 = "entry-cell:w\\w19.js:094";
const w19_95 = "frame-dot:w\\w19.js:095";
const w19_96 = "prop-card:w\\w19.js:096";
const w19_97 = "scope-ring:w\\w19.js:097";
const w19_98 = "value-chip:w\\w19.js:098";
const w19_99 = "strip-gate:w\\w19.js:099";
const w19_100 = "bucket-row:w\\w19.js:100";
const w19_101 = "code-pane:w\\w19.js:101";
const w19_102 = "entry-cell:w\\w19.js:102";
const w19_103 = "frame-dot:w\\w19.js:103";
const w19_104 = "prop-card:w\\w19.js:104";
const w19_105 = "scope-ring:w\\w19.js:105";
const w19_106 = "value-chip:w\\w19.js:106";
const w19_107 = "strip-gate:w\\w19.js:107";
const w19_108 = "bucket-row:w\\w19.js:108";
const w19_109 = "code-pane:w\\w19.js:109";
const w19_110 = "entry-cell:w\\w19.js:110";
const w19_111 = "frame-dot:w\\w19.js:111";
const w19_112 = "prop-card:w\\w19.js:112";
const w19_113 = "scope-ring:w\\w19.js:113";
const w19_114 = "value-chip:w\\w19.js:114";
const w19_115 = "strip-gate:w\\w19.js:115";
const w19_116 = "bucket-row:w\\w19.js:116";
const w19_117 = "code-pane:w\\w19.js:117";
const w19_118 = "entry-cell:w\\w19.js:118";
const w19_119 = "frame-dot:w\\w19.js:119";
const w19_120 = "prop-card:w\\w19.js:120";
const w19_121 = "scope-ring:w\\w19.js:121";
const w19_122 = "value-chip:w\\w19.js:122";
const w19_123 = "strip-gate:w\\w19.js:123";
const w19_124 = "bucket-row:w\\w19.js:124";
const w19_125 = "code-pane:w\\w19.js:125";
const w19_126 = "entry-cell:w\\w19.js:126";
const w19_127 = "frame-dot:w\\w19.js:127";
const w19_128 = "prop-card:w\\w19.js:128";
const w19_129 = "scope-ring:w\\w19.js:129";
const w19_130 = "value-chip:w\\w19.js:130";
const w19_131 = "strip-gate:w\\w19.js:131";
const w19_132 = "bucket-row:w\\w19.js:132";
const w19_133 = "code-pane:w\\w19.js:133";
const w19_134 = "entry-cell:w\\w19.js:134";
const w19_135 = "frame-dot:w\\w19.js:135";
const w19_136 = "prop-card:w\\w19.js:136";
const w19_137 = "scope-ring:w\\w19.js:137";
const w19_138 = "value-chip:w\\w19.js:138";
const w19_139 = "strip-gate:w\\w19.js:139";
const w19_140 = "bucket-row:w\\w19.js:140";
const w19_141 = "code-pane:w\\w19.js:141";
const w19_142 = "entry-cell:w\\w19.js:142";
const w19_143 = "frame-dot:w\\w19.js:143";
const w19_144 = "prop-card:w\\w19.js:144";
const w19_145 = "scope-ring:w\\w19.js:145";
const w19_146 = "value-chip:w\\w19.js:146";
const w19_147 = "strip-gate:w\\w19.js:147";
const w19_148 = "bucket-row:w\\w19.js:148";
const w19_149 = "code-pane:w\\w19.js:149";
const w19_150 = "entry-cell:w\\w19.js:150";
const w19_151 = "frame-dot:w\\w19.js:151";
const w19_152 = "prop-card:w\\w19.js:152";
const w19_153 = "scope-ring:w\\w19.js:153";
const w19_154 = "value-chip:w\\w19.js:154";
const w19_155 = "strip-gate:w\\w19.js:155";
const w19_156 = "bucket-row:w\\w19.js:156";
const w19_157 = "code-pane:w\\w19.js:157";
const w19_158 = "entry-cell:w\\w19.js:158";
const w19_159 = "frame-dot:w\\w19.js:159";
const w19_160 = "prop-card:w\\w19.js:160";
const w19_161 = "scope-ring:w\\w19.js:161";
const w19_162 = "value-chip:w\\w19.js:162";
const w19_163 = "strip-gate:w\\w19.js:163";
const w19_164 = "bucket-row:w\\w19.js:164";
const w19_165 = "code-pane:w\\w19.js:165";
const w19_166 = "entry-cell:w\\w19.js:166";
const w19_167 = "frame-dot:w\\w19.js:167";
const w19_168 = "prop-card:w\\w19.js:168";
const w19_169 = "scope-ring:w\\w19.js:169";
const w19_170 = "value-chip:w\\w19.js:170";
const w19_171 = "strip-gate:w\\w19.js:171";
const w19_172 = "bucket-row:w\\w19.js:172";
const w19_173 = "code-pane:w\\w19.js:173";
const w19_174 = "entry-cell:w\\w19.js:174";
const w19_175 = "frame-dot:w\\w19.js:175";
const w19_176 = "prop-card:w\\w19.js:176";
const w19_177 = "scope-ring:w\\w19.js:177";
const w19_178 = "value-chip:w\\w19.js:178";
const w19_179 = "strip-gate:w\\w19.js:179";
const w19_180 = "bucket-row:w\\w19.js:180";
const w19_181 = "code-pane:w\\w19.js:181";
const w19_182 = "entry-cell:w\\w19.js:182";
const w19_183 = "frame-dot:w\\w19.js:183";
const w19_184 = "prop-card:w\\w19.js:184";
const w19_185 = "scope-ring:w\\w19.js:185";
const w19_186 = "value-chip:w\\w19.js:186";
const w19_187 = "strip-gate:w\\w19.js:187";
const w19_188 = "bucket-row:w\\w19.js:188";
const w19_189 = "code-pane:w\\w19.js:189";
const w19_190 = "entry-cell:w\\w19.js:190";
const w19_191 = "frame-dot:w\\w19.js:191";
const w19_192 = "prop-card:w\\w19.js:192";
const w19_193 = "scope-ring:w\\w19.js:193";
const w19_194 = "value-chip:w\\w19.js:194";
const w19_195 = "strip-gate:w\\w19.js:195";
const w19_196 = "bucket-row:w\\w19.js:196";
