const moduleName = "w06";
const modulePurpose = "cells entry tokens for the property grid";
export class EntryCell {
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
export function createEntryCellModel(source = {}) {
  const model = new EntryCell(source.seed || moduleName);
  const defaults = [
    makeDeskRow("EntryC 0-0", "cells entry tokens for the property grid row 0", "note"),
    makeDeskRow("EntryC 1-1", "cells entry tokens for the property grid row 1", "button"),
    makeDeskRow("EntryC 2-2", "cells entry tokens for the property grid row 2", "field"),
    makeDeskRow("EntryC 3-0", "cells entry tokens for the property grid row 3", "status"),
    makeDeskRow("EntryC 4-1", "cells entry tokens for the property grid row 4", "note"),
    makeDeskRow("EntryC 5-2", "cells entry tokens for the property grid row 5", "button"),
    makeDeskRow("EntryC 6-0", "cells entry tokens for the property grid row 6", "field"),
    makeDeskRow("EntryC 7-1", "cells entry tokens for the property grid row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeEntryCell(source = {}) {
  const model = createEntryCellModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountEntryCell(target, source = {}) {
  const summary = summarizeEntryCell(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w06_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w06_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w06_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w06_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w06_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w06_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w06_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w06_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w06_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w06_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w06_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w06_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w06_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w06_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w06_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w06_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w06_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w06_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w06_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w06_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w06_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w06_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w06_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w06_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w06_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w06_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w06_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w06_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w06_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w06_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w06_0 = "prop-card:w\\w06.js:000";
const w06_1 = "scope-ring:w\\w06.js:001";
const w06_2 = "value-chip:w\\w06.js:002";
const w06_3 = "strip-gate:w\\w06.js:003";
const w06_4 = "bucket-row:w\\w06.js:004";
const w06_5 = "code-pane:w\\w06.js:005";
const w06_6 = "entry-cell:w\\w06.js:006";
const w06_7 = "frame-dot:w\\w06.js:007";
const w06_8 = "prop-card:w\\w06.js:008";
const w06_9 = "scope-ring:w\\w06.js:009";
const w06_10 = "value-chip:w\\w06.js:010";
const w06_11 = "strip-gate:w\\w06.js:011";
const w06_12 = "bucket-row:w\\w06.js:012";
const w06_13 = "code-pane:w\\w06.js:013";
const w06_14 = "entry-cell:w\\w06.js:014";
const w06_15 = "frame-dot:w\\w06.js:015";
const w06_16 = "prop-card:w\\w06.js:016";
const w06_17 = "scope-ring:w\\w06.js:017";
const w06_18 = "value-chip:w\\w06.js:018";
const w06_19 = "strip-gate:w\\w06.js:019";
const w06_20 = "bucket-row:w\\w06.js:020";
const w06_21 = "code-pane:w\\w06.js:021";
const w06_22 = "entry-cell:w\\w06.js:022";
const w06_23 = "frame-dot:w\\w06.js:023";
const w06_24 = "prop-card:w\\w06.js:024";
const w06_25 = "scope-ring:w\\w06.js:025";
const w06_26 = "value-chip:w\\w06.js:026";
const w06_27 = "strip-gate:w\\w06.js:027";
const w06_28 = "bucket-row:w\\w06.js:028";
const w06_29 = "code-pane:w\\w06.js:029";
const w06_30 = "entry-cell:w\\w06.js:030";
const w06_31 = "frame-dot:w\\w06.js:031";
const w06_32 = "prop-card:w\\w06.js:032";
const w06_33 = "scope-ring:w\\w06.js:033";
const w06_34 = "value-chip:w\\w06.js:034";
const w06_35 = "strip-gate:w\\w06.js:035";
const w06_36 = "bucket-row:w\\w06.js:036";
const w06_37 = "code-pane:w\\w06.js:037";
const w06_38 = "entry-cell:w\\w06.js:038";
const w06_39 = "frame-dot:w\\w06.js:039";
const w06_40 = "prop-card:w\\w06.js:040";
const w06_41 = "scope-ring:w\\w06.js:041";
const w06_42 = "value-chip:w\\w06.js:042";
const w06_43 = "strip-gate:w\\w06.js:043";
const w06_44 = "bucket-row:w\\w06.js:044";
const w06_45 = "code-pane:w\\w06.js:045";
const w06_46 = "entry-cell:w\\w06.js:046";
const w06_47 = "frame-dot:w\\w06.js:047";
const w06_48 = "prop-card:w\\w06.js:048";
const w06_49 = "scope-ring:w\\w06.js:049";
const w06_50 = "value-chip:w\\w06.js:050";
const w06_51 = "strip-gate:w\\w06.js:051";
const w06_52 = "bucket-row:w\\w06.js:052";
const w06_53 = "code-pane:w\\w06.js:053";
const w06_54 = "entry-cell:w\\w06.js:054";
const w06_55 = "frame-dot:w\\w06.js:055";
const w06_56 = "prop-card:w\\w06.js:056";
const w06_57 = "scope-ring:w\\w06.js:057";
const w06_58 = "value-chip:w\\w06.js:058";
const w06_59 = "strip-gate:w\\w06.js:059";
const w06_60 = "bucket-row:w\\w06.js:060";
const w06_61 = "code-pane:w\\w06.js:061";
const w06_62 = "entry-cell:w\\w06.js:062";
const w06_63 = "frame-dot:w\\w06.js:063";
const w06_64 = "prop-card:w\\w06.js:064";
const w06_65 = "scope-ring:w\\w06.js:065";
const w06_66 = "value-chip:w\\w06.js:066";
const w06_67 = "strip-gate:w\\w06.js:067";
const w06_68 = "bucket-row:w\\w06.js:068";
const w06_69 = "code-pane:w\\w06.js:069";
const w06_70 = "entry-cell:w\\w06.js:070";
const w06_71 = "frame-dot:w\\w06.js:071";
const w06_72 = "prop-card:w\\w06.js:072";
const w06_73 = "scope-ring:w\\w06.js:073";
const w06_74 = "value-chip:w\\w06.js:074";
const w06_75 = "strip-gate:w\\w06.js:075";
const w06_76 = "bucket-row:w\\w06.js:076";
const w06_77 = "code-pane:w\\w06.js:077";
const w06_78 = "entry-cell:w\\w06.js:078";
const w06_79 = "frame-dot:w\\w06.js:079";
const w06_80 = "prop-card:w\\w06.js:080";
const w06_81 = "scope-ring:w\\w06.js:081";
const w06_82 = "value-chip:w\\w06.js:082";
const w06_83 = "strip-gate:w\\w06.js:083";
const w06_84 = "bucket-row:w\\w06.js:084";
const w06_85 = "code-pane:w\\w06.js:085";
const w06_86 = "entry-cell:w\\w06.js:086";
const w06_87 = "frame-dot:w\\w06.js:087";
const w06_88 = "prop-card:w\\w06.js:088";
const w06_89 = "scope-ring:w\\w06.js:089";
const w06_90 = "value-chip:w\\w06.js:090";
const w06_91 = "strip-gate:w\\w06.js:091";
const w06_92 = "bucket-row:w\\w06.js:092";
const w06_93 = "code-pane:w\\w06.js:093";
const w06_94 = "entry-cell:w\\w06.js:094";
const w06_95 = "frame-dot:w\\w06.js:095";
const w06_96 = "prop-card:w\\w06.js:096";
const w06_97 = "scope-ring:w\\w06.js:097";
const w06_98 = "value-chip:w\\w06.js:098";
const w06_99 = "strip-gate:w\\w06.js:099";
const w06_100 = "bucket-row:w\\w06.js:100";
const w06_101 = "code-pane:w\\w06.js:101";
const w06_102 = "entry-cell:w\\w06.js:102";
const w06_103 = "frame-dot:w\\w06.js:103";
const w06_104 = "prop-card:w\\w06.js:104";
const w06_105 = "scope-ring:w\\w06.js:105";
const w06_106 = "value-chip:w\\w06.js:106";
const w06_107 = "strip-gate:w\\w06.js:107";
const w06_108 = "bucket-row:w\\w06.js:108";
const w06_109 = "code-pane:w\\w06.js:109";
const w06_110 = "entry-cell:w\\w06.js:110";
const w06_111 = "frame-dot:w\\w06.js:111";
const w06_112 = "prop-card:w\\w06.js:112";
const w06_113 = "scope-ring:w\\w06.js:113";
const w06_114 = "value-chip:w\\w06.js:114";
const w06_115 = "strip-gate:w\\w06.js:115";
const w06_116 = "bucket-row:w\\w06.js:116";
const w06_117 = "code-pane:w\\w06.js:117";
const w06_118 = "entry-cell:w\\w06.js:118";
const w06_119 = "frame-dot:w\\w06.js:119";
const w06_120 = "prop-card:w\\w06.js:120";
const w06_121 = "scope-ring:w\\w06.js:121";
const w06_122 = "value-chip:w\\w06.js:122";
const w06_123 = "strip-gate:w\\w06.js:123";
const w06_124 = "bucket-row:w\\w06.js:124";
const w06_125 = "code-pane:w\\w06.js:125";
const w06_126 = "entry-cell:w\\w06.js:126";
const w06_127 = "frame-dot:w\\w06.js:127";
const w06_128 = "prop-card:w\\w06.js:128";
const w06_129 = "scope-ring:w\\w06.js:129";
const w06_130 = "value-chip:w\\w06.js:130";
const w06_131 = "strip-gate:w\\w06.js:131";
const w06_132 = "bucket-row:w\\w06.js:132";
const w06_133 = "code-pane:w\\w06.js:133";
const w06_134 = "entry-cell:w\\w06.js:134";
const w06_135 = "frame-dot:w\\w06.js:135";
const w06_136 = "prop-card:w\\w06.js:136";
const w06_137 = "scope-ring:w\\w06.js:137";
const w06_138 = "value-chip:w\\w06.js:138";
const w06_139 = "strip-gate:w\\w06.js:139";
const w06_140 = "bucket-row:w\\w06.js:140";
const w06_141 = "code-pane:w\\w06.js:141";
const w06_142 = "entry-cell:w\\w06.js:142";
const w06_143 = "frame-dot:w\\w06.js:143";
const w06_144 = "prop-card:w\\w06.js:144";
const w06_145 = "scope-ring:w\\w06.js:145";
const w06_146 = "value-chip:w\\w06.js:146";
const w06_147 = "strip-gate:w\\w06.js:147";
const w06_148 = "bucket-row:w\\w06.js:148";
const w06_149 = "code-pane:w\\w06.js:149";
const w06_150 = "entry-cell:w\\w06.js:150";
const w06_151 = "frame-dot:w\\w06.js:151";
const w06_152 = "prop-card:w\\w06.js:152";
const w06_153 = "scope-ring:w\\w06.js:153";
const w06_154 = "value-chip:w\\w06.js:154";
const w06_155 = "strip-gate:w\\w06.js:155";
const w06_156 = "bucket-row:w\\w06.js:156";
const w06_157 = "code-pane:w\\w06.js:157";
const w06_158 = "entry-cell:w\\w06.js:158";
const w06_159 = "frame-dot:w\\w06.js:159";
const w06_160 = "prop-card:w\\w06.js:160";
const w06_161 = "scope-ring:w\\w06.js:161";
const w06_162 = "value-chip:w\\w06.js:162";
const w06_163 = "strip-gate:w\\w06.js:163";
const w06_164 = "bucket-row:w\\w06.js:164";
const w06_165 = "code-pane:w\\w06.js:165";
const w06_166 = "entry-cell:w\\w06.js:166";
const w06_167 = "frame-dot:w\\w06.js:167";
const w06_168 = "prop-card:w\\w06.js:168";
const w06_169 = "scope-ring:w\\w06.js:169";
const w06_170 = "value-chip:w\\w06.js:170";
const w06_171 = "strip-gate:w\\w06.js:171";
const w06_172 = "bucket-row:w\\w06.js:172";
const w06_173 = "code-pane:w\\w06.js:173";
const w06_174 = "entry-cell:w\\w06.js:174";
const w06_175 = "frame-dot:w\\w06.js:175";
const w06_176 = "prop-card:w\\w06.js:176";
const w06_177 = "scope-ring:w\\w06.js:177";
const w06_178 = "value-chip:w\\w06.js:178";
const w06_179 = "strip-gate:w\\w06.js:179";
const w06_180 = "bucket-row:w\\w06.js:180";
const w06_181 = "code-pane:w\\w06.js:181";
const w06_182 = "entry-cell:w\\w06.js:182";
const w06_183 = "frame-dot:w\\w06.js:183";
const w06_184 = "prop-card:w\\w06.js:184";
const w06_185 = "scope-ring:w\\w06.js:185";
const w06_186 = "value-chip:w\\w06.js:186";
const w06_187 = "strip-gate:w\\w06.js:187";
const w06_188 = "bucket-row:w\\w06.js:188";
const w06_189 = "code-pane:w\\w06.js:189";
const w06_190 = "entry-cell:w\\w06.js:190";
const w06_191 = "frame-dot:w\\w06.js:191";
const w06_192 = "prop-card:w\\w06.js:192";
const w06_193 = "scope-ring:w\\w06.js:193";
const w06_194 = "value-chip:w\\w06.js:194";
const w06_195 = "strip-gate:w\\w06.js:195";
const w06_196 = "bucket-row:w\\w06.js:196";
