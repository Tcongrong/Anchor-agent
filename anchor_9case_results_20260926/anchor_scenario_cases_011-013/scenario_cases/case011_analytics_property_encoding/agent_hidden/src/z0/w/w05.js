const moduleName = "w05";
const modulePurpose = "panes code slots for the encoder surface";
export class CodePane {
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
export function createCodePaneModel(source = {}) {
  const model = new CodePane(source.seed || moduleName);
  const defaults = [
    makeDeskRow("CodePa 0-0", "panes code slots for the encoder surface row 0", "note"),
    makeDeskRow("CodePa 1-1", "panes code slots for the encoder surface row 1", "button"),
    makeDeskRow("CodePa 2-2", "panes code slots for the encoder surface row 2", "field"),
    makeDeskRow("CodePa 3-0", "panes code slots for the encoder surface row 3", "status"),
    makeDeskRow("CodePa 4-1", "panes code slots for the encoder surface row 4", "note"),
    makeDeskRow("CodePa 5-2", "panes code slots for the encoder surface row 5", "button"),
    makeDeskRow("CodePa 6-0", "panes code slots for the encoder surface row 6", "field"),
    makeDeskRow("CodePa 7-1", "panes code slots for the encoder surface row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeCodePane(source = {}) {
  const model = createCodePaneModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountCodePane(target, source = {}) {
  const summary = summarizeCodePane(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w05_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w05_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w05_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w05_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w05_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w05_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w05_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w05_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w05_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w05_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w05_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w05_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w05_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w05_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w05_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w05_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w05_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w05_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w05_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w05_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w05_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w05_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w05_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w05_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w05_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w05_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w05_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w05_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w05_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w05_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w05_0 = "prop-card:w\\w05.js:000";
const w05_1 = "scope-ring:w\\w05.js:001";
const w05_2 = "value-chip:w\\w05.js:002";
const w05_3 = "strip-gate:w\\w05.js:003";
const w05_4 = "bucket-row:w\\w05.js:004";
const w05_5 = "code-pane:w\\w05.js:005";
const w05_6 = "entry-cell:w\\w05.js:006";
const w05_7 = "frame-dot:w\\w05.js:007";
const w05_8 = "prop-card:w\\w05.js:008";
const w05_9 = "scope-ring:w\\w05.js:009";
const w05_10 = "value-chip:w\\w05.js:010";
const w05_11 = "strip-gate:w\\w05.js:011";
const w05_12 = "bucket-row:w\\w05.js:012";
const w05_13 = "code-pane:w\\w05.js:013";
const w05_14 = "entry-cell:w\\w05.js:014";
const w05_15 = "frame-dot:w\\w05.js:015";
const w05_16 = "prop-card:w\\w05.js:016";
const w05_17 = "scope-ring:w\\w05.js:017";
const w05_18 = "value-chip:w\\w05.js:018";
const w05_19 = "strip-gate:w\\w05.js:019";
const w05_20 = "bucket-row:w\\w05.js:020";
const w05_21 = "code-pane:w\\w05.js:021";
const w05_22 = "entry-cell:w\\w05.js:022";
const w05_23 = "frame-dot:w\\w05.js:023";
const w05_24 = "prop-card:w\\w05.js:024";
const w05_25 = "scope-ring:w\\w05.js:025";
const w05_26 = "value-chip:w\\w05.js:026";
const w05_27 = "strip-gate:w\\w05.js:027";
const w05_28 = "bucket-row:w\\w05.js:028";
const w05_29 = "code-pane:w\\w05.js:029";
const w05_30 = "entry-cell:w\\w05.js:030";
const w05_31 = "frame-dot:w\\w05.js:031";
const w05_32 = "prop-card:w\\w05.js:032";
const w05_33 = "scope-ring:w\\w05.js:033";
const w05_34 = "value-chip:w\\w05.js:034";
const w05_35 = "strip-gate:w\\w05.js:035";
const w05_36 = "bucket-row:w\\w05.js:036";
const w05_37 = "code-pane:w\\w05.js:037";
const w05_38 = "entry-cell:w\\w05.js:038";
const w05_39 = "frame-dot:w\\w05.js:039";
const w05_40 = "prop-card:w\\w05.js:040";
const w05_41 = "scope-ring:w\\w05.js:041";
const w05_42 = "value-chip:w\\w05.js:042";
const w05_43 = "strip-gate:w\\w05.js:043";
const w05_44 = "bucket-row:w\\w05.js:044";
const w05_45 = "code-pane:w\\w05.js:045";
const w05_46 = "entry-cell:w\\w05.js:046";
const w05_47 = "frame-dot:w\\w05.js:047";
const w05_48 = "prop-card:w\\w05.js:048";
const w05_49 = "scope-ring:w\\w05.js:049";
const w05_50 = "value-chip:w\\w05.js:050";
const w05_51 = "strip-gate:w\\w05.js:051";
const w05_52 = "bucket-row:w\\w05.js:052";
const w05_53 = "code-pane:w\\w05.js:053";
const w05_54 = "entry-cell:w\\w05.js:054";
const w05_55 = "frame-dot:w\\w05.js:055";
const w05_56 = "prop-card:w\\w05.js:056";
const w05_57 = "scope-ring:w\\w05.js:057";
const w05_58 = "value-chip:w\\w05.js:058";
const w05_59 = "strip-gate:w\\w05.js:059";
const w05_60 = "bucket-row:w\\w05.js:060";
const w05_61 = "code-pane:w\\w05.js:061";
const w05_62 = "entry-cell:w\\w05.js:062";
const w05_63 = "frame-dot:w\\w05.js:063";
const w05_64 = "prop-card:w\\w05.js:064";
const w05_65 = "scope-ring:w\\w05.js:065";
const w05_66 = "value-chip:w\\w05.js:066";
const w05_67 = "strip-gate:w\\w05.js:067";
const w05_68 = "bucket-row:w\\w05.js:068";
const w05_69 = "code-pane:w\\w05.js:069";
const w05_70 = "entry-cell:w\\w05.js:070";
const w05_71 = "frame-dot:w\\w05.js:071";
const w05_72 = "prop-card:w\\w05.js:072";
const w05_73 = "scope-ring:w\\w05.js:073";
const w05_74 = "value-chip:w\\w05.js:074";
const w05_75 = "strip-gate:w\\w05.js:075";
const w05_76 = "bucket-row:w\\w05.js:076";
const w05_77 = "code-pane:w\\w05.js:077";
const w05_78 = "entry-cell:w\\w05.js:078";
const w05_79 = "frame-dot:w\\w05.js:079";
const w05_80 = "prop-card:w\\w05.js:080";
const w05_81 = "scope-ring:w\\w05.js:081";
const w05_82 = "value-chip:w\\w05.js:082";
const w05_83 = "strip-gate:w\\w05.js:083";
const w05_84 = "bucket-row:w\\w05.js:084";
const w05_85 = "code-pane:w\\w05.js:085";
const w05_86 = "entry-cell:w\\w05.js:086";
const w05_87 = "frame-dot:w\\w05.js:087";
const w05_88 = "prop-card:w\\w05.js:088";
const w05_89 = "scope-ring:w\\w05.js:089";
const w05_90 = "value-chip:w\\w05.js:090";
const w05_91 = "strip-gate:w\\w05.js:091";
const w05_92 = "bucket-row:w\\w05.js:092";
const w05_93 = "code-pane:w\\w05.js:093";
const w05_94 = "entry-cell:w\\w05.js:094";
const w05_95 = "frame-dot:w\\w05.js:095";
const w05_96 = "prop-card:w\\w05.js:096";
const w05_97 = "scope-ring:w\\w05.js:097";
const w05_98 = "value-chip:w\\w05.js:098";
const w05_99 = "strip-gate:w\\w05.js:099";
const w05_100 = "bucket-row:w\\w05.js:100";
const w05_101 = "code-pane:w\\w05.js:101";
const w05_102 = "entry-cell:w\\w05.js:102";
const w05_103 = "frame-dot:w\\w05.js:103";
const w05_104 = "prop-card:w\\w05.js:104";
const w05_105 = "scope-ring:w\\w05.js:105";
const w05_106 = "value-chip:w\\w05.js:106";
const w05_107 = "strip-gate:w\\w05.js:107";
const w05_108 = "bucket-row:w\\w05.js:108";
const w05_109 = "code-pane:w\\w05.js:109";
const w05_110 = "entry-cell:w\\w05.js:110";
const w05_111 = "frame-dot:w\\w05.js:111";
const w05_112 = "prop-card:w\\w05.js:112";
const w05_113 = "scope-ring:w\\w05.js:113";
const w05_114 = "value-chip:w\\w05.js:114";
const w05_115 = "strip-gate:w\\w05.js:115";
const w05_116 = "bucket-row:w\\w05.js:116";
const w05_117 = "code-pane:w\\w05.js:117";
const w05_118 = "entry-cell:w\\w05.js:118";
const w05_119 = "frame-dot:w\\w05.js:119";
const w05_120 = "prop-card:w\\w05.js:120";
const w05_121 = "scope-ring:w\\w05.js:121";
const w05_122 = "value-chip:w\\w05.js:122";
const w05_123 = "strip-gate:w\\w05.js:123";
const w05_124 = "bucket-row:w\\w05.js:124";
const w05_125 = "code-pane:w\\w05.js:125";
const w05_126 = "entry-cell:w\\w05.js:126";
const w05_127 = "frame-dot:w\\w05.js:127";
const w05_128 = "prop-card:w\\w05.js:128";
const w05_129 = "scope-ring:w\\w05.js:129";
const w05_130 = "value-chip:w\\w05.js:130";
const w05_131 = "strip-gate:w\\w05.js:131";
const w05_132 = "bucket-row:w\\w05.js:132";
const w05_133 = "code-pane:w\\w05.js:133";
const w05_134 = "entry-cell:w\\w05.js:134";
const w05_135 = "frame-dot:w\\w05.js:135";
const w05_136 = "prop-card:w\\w05.js:136";
const w05_137 = "scope-ring:w\\w05.js:137";
const w05_138 = "value-chip:w\\w05.js:138";
const w05_139 = "strip-gate:w\\w05.js:139";
const w05_140 = "bucket-row:w\\w05.js:140";
const w05_141 = "code-pane:w\\w05.js:141";
const w05_142 = "entry-cell:w\\w05.js:142";
const w05_143 = "frame-dot:w\\w05.js:143";
const w05_144 = "prop-card:w\\w05.js:144";
const w05_145 = "scope-ring:w\\w05.js:145";
const w05_146 = "value-chip:w\\w05.js:146";
const w05_147 = "strip-gate:w\\w05.js:147";
const w05_148 = "bucket-row:w\\w05.js:148";
const w05_149 = "code-pane:w\\w05.js:149";
const w05_150 = "entry-cell:w\\w05.js:150";
const w05_151 = "frame-dot:w\\w05.js:151";
const w05_152 = "prop-card:w\\w05.js:152";
const w05_153 = "scope-ring:w\\w05.js:153";
const w05_154 = "value-chip:w\\w05.js:154";
const w05_155 = "strip-gate:w\\w05.js:155";
const w05_156 = "bucket-row:w\\w05.js:156";
const w05_157 = "code-pane:w\\w05.js:157";
const w05_158 = "entry-cell:w\\w05.js:158";
const w05_159 = "frame-dot:w\\w05.js:159";
const w05_160 = "prop-card:w\\w05.js:160";
const w05_161 = "scope-ring:w\\w05.js:161";
const w05_162 = "value-chip:w\\w05.js:162";
const w05_163 = "strip-gate:w\\w05.js:163";
const w05_164 = "bucket-row:w\\w05.js:164";
const w05_165 = "code-pane:w\\w05.js:165";
const w05_166 = "entry-cell:w\\w05.js:166";
const w05_167 = "frame-dot:w\\w05.js:167";
const w05_168 = "prop-card:w\\w05.js:168";
const w05_169 = "scope-ring:w\\w05.js:169";
const w05_170 = "value-chip:w\\w05.js:170";
const w05_171 = "strip-gate:w\\w05.js:171";
const w05_172 = "bucket-row:w\\w05.js:172";
const w05_173 = "code-pane:w\\w05.js:173";
const w05_174 = "entry-cell:w\\w05.js:174";
const w05_175 = "frame-dot:w\\w05.js:175";
const w05_176 = "prop-card:w\\w05.js:176";
const w05_177 = "scope-ring:w\\w05.js:177";
const w05_178 = "value-chip:w\\w05.js:178";
const w05_179 = "strip-gate:w\\w05.js:179";
const w05_180 = "bucket-row:w\\w05.js:180";
const w05_181 = "code-pane:w\\w05.js:181";
const w05_182 = "entry-cell:w\\w05.js:182";
const w05_183 = "frame-dot:w\\w05.js:183";
const w05_184 = "prop-card:w\\w05.js:184";
const w05_185 = "scope-ring:w\\w05.js:185";
const w05_186 = "value-chip:w\\w05.js:186";
const w05_187 = "strip-gate:w\\w05.js:187";
const w05_188 = "bucket-row:w\\w05.js:188";
const w05_189 = "code-pane:w\\w05.js:189";
const w05_190 = "entry-cell:w\\w05.js:190";
const w05_191 = "frame-dot:w\\w05.js:191";
const w05_192 = "prop-card:w\\w05.js:192";
const w05_193 = "scope-ring:w\\w05.js:193";
const w05_194 = "value-chip:w\\w05.js:194";
const w05_195 = "strip-gate:w\\w05.js:195";
const w05_196 = "bucket-row:w\\w05.js:196";
