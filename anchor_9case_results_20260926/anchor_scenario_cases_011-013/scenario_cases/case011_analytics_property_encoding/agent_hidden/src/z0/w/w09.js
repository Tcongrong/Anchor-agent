const moduleName = "w09";
const modulePurpose = "blends mix levels for the encoder panel";
export class MixDesk {
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
export function createMixDeskModel(source = {}) {
  const model = new MixDesk(source.seed || moduleName);
  const defaults = [
    makeDeskRow("MixDes 0-0", "blends mix levels for the encoder panel row 0", "note"),
    makeDeskRow("MixDes 1-1", "blends mix levels for the encoder panel row 1", "button"),
    makeDeskRow("MixDes 2-2", "blends mix levels for the encoder panel row 2", "field"),
    makeDeskRow("MixDes 3-0", "blends mix levels for the encoder panel row 3", "status"),
    makeDeskRow("MixDes 4-1", "blends mix levels for the encoder panel row 4", "note"),
    makeDeskRow("MixDes 5-2", "blends mix levels for the encoder panel row 5", "button"),
    makeDeskRow("MixDes 6-0", "blends mix levels for the encoder panel row 6", "field"),
    makeDeskRow("MixDes 7-1", "blends mix levels for the encoder panel row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeMixDesk(source = {}) {
  const model = createMixDeskModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountMixDesk(target, source = {}) {
  const summary = summarizeMixDesk(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w09_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w09_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w09_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w09_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w09_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w09_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w09_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w09_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w09_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w09_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w09_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w09_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w09_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w09_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w09_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w09_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w09_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w09_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w09_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w09_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w09_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w09_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w09_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w09_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w09_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w09_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w09_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w09_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w09_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w09_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w09_0 = "prop-card:w\\w09.js:000";
const w09_1 = "scope-ring:w\\w09.js:001";
const w09_2 = "value-chip:w\\w09.js:002";
const w09_3 = "strip-gate:w\\w09.js:003";
const w09_4 = "bucket-row:w\\w09.js:004";
const w09_5 = "code-pane:w\\w09.js:005";
const w09_6 = "entry-cell:w\\w09.js:006";
const w09_7 = "frame-dot:w\\w09.js:007";
const w09_8 = "prop-card:w\\w09.js:008";
const w09_9 = "scope-ring:w\\w09.js:009";
const w09_10 = "value-chip:w\\w09.js:010";
const w09_11 = "strip-gate:w\\w09.js:011";
const w09_12 = "bucket-row:w\\w09.js:012";
const w09_13 = "code-pane:w\\w09.js:013";
const w09_14 = "entry-cell:w\\w09.js:014";
const w09_15 = "frame-dot:w\\w09.js:015";
const w09_16 = "prop-card:w\\w09.js:016";
const w09_17 = "scope-ring:w\\w09.js:017";
const w09_18 = "value-chip:w\\w09.js:018";
const w09_19 = "strip-gate:w\\w09.js:019";
const w09_20 = "bucket-row:w\\w09.js:020";
const w09_21 = "code-pane:w\\w09.js:021";
const w09_22 = "entry-cell:w\\w09.js:022";
const w09_23 = "frame-dot:w\\w09.js:023";
const w09_24 = "prop-card:w\\w09.js:024";
const w09_25 = "scope-ring:w\\w09.js:025";
const w09_26 = "value-chip:w\\w09.js:026";
const w09_27 = "strip-gate:w\\w09.js:027";
const w09_28 = "bucket-row:w\\w09.js:028";
const w09_29 = "code-pane:w\\w09.js:029";
const w09_30 = "entry-cell:w\\w09.js:030";
const w09_31 = "frame-dot:w\\w09.js:031";
const w09_32 = "prop-card:w\\w09.js:032";
const w09_33 = "scope-ring:w\\w09.js:033";
const w09_34 = "value-chip:w\\w09.js:034";
const w09_35 = "strip-gate:w\\w09.js:035";
const w09_36 = "bucket-row:w\\w09.js:036";
const w09_37 = "code-pane:w\\w09.js:037";
const w09_38 = "entry-cell:w\\w09.js:038";
const w09_39 = "frame-dot:w\\w09.js:039";
const w09_40 = "prop-card:w\\w09.js:040";
const w09_41 = "scope-ring:w\\w09.js:041";
const w09_42 = "value-chip:w\\w09.js:042";
const w09_43 = "strip-gate:w\\w09.js:043";
const w09_44 = "bucket-row:w\\w09.js:044";
const w09_45 = "code-pane:w\\w09.js:045";
const w09_46 = "entry-cell:w\\w09.js:046";
const w09_47 = "frame-dot:w\\w09.js:047";
const w09_48 = "prop-card:w\\w09.js:048";
const w09_49 = "scope-ring:w\\w09.js:049";
const w09_50 = "value-chip:w\\w09.js:050";
const w09_51 = "strip-gate:w\\w09.js:051";
const w09_52 = "bucket-row:w\\w09.js:052";
const w09_53 = "code-pane:w\\w09.js:053";
const w09_54 = "entry-cell:w\\w09.js:054";
const w09_55 = "frame-dot:w\\w09.js:055";
const w09_56 = "prop-card:w\\w09.js:056";
const w09_57 = "scope-ring:w\\w09.js:057";
const w09_58 = "value-chip:w\\w09.js:058";
const w09_59 = "strip-gate:w\\w09.js:059";
const w09_60 = "bucket-row:w\\w09.js:060";
const w09_61 = "code-pane:w\\w09.js:061";
const w09_62 = "entry-cell:w\\w09.js:062";
const w09_63 = "frame-dot:w\\w09.js:063";
const w09_64 = "prop-card:w\\w09.js:064";
const w09_65 = "scope-ring:w\\w09.js:065";
const w09_66 = "value-chip:w\\w09.js:066";
const w09_67 = "strip-gate:w\\w09.js:067";
const w09_68 = "bucket-row:w\\w09.js:068";
const w09_69 = "code-pane:w\\w09.js:069";
const w09_70 = "entry-cell:w\\w09.js:070";
const w09_71 = "frame-dot:w\\w09.js:071";
const w09_72 = "prop-card:w\\w09.js:072";
const w09_73 = "scope-ring:w\\w09.js:073";
const w09_74 = "value-chip:w\\w09.js:074";
const w09_75 = "strip-gate:w\\w09.js:075";
const w09_76 = "bucket-row:w\\w09.js:076";
const w09_77 = "code-pane:w\\w09.js:077";
const w09_78 = "entry-cell:w\\w09.js:078";
const w09_79 = "frame-dot:w\\w09.js:079";
const w09_80 = "prop-card:w\\w09.js:080";
const w09_81 = "scope-ring:w\\w09.js:081";
const w09_82 = "value-chip:w\\w09.js:082";
const w09_83 = "strip-gate:w\\w09.js:083";
const w09_84 = "bucket-row:w\\w09.js:084";
const w09_85 = "code-pane:w\\w09.js:085";
const w09_86 = "entry-cell:w\\w09.js:086";
const w09_87 = "frame-dot:w\\w09.js:087";
const w09_88 = "prop-card:w\\w09.js:088";
const w09_89 = "scope-ring:w\\w09.js:089";
const w09_90 = "value-chip:w\\w09.js:090";
const w09_91 = "strip-gate:w\\w09.js:091";
const w09_92 = "bucket-row:w\\w09.js:092";
const w09_93 = "code-pane:w\\w09.js:093";
const w09_94 = "entry-cell:w\\w09.js:094";
const w09_95 = "frame-dot:w\\w09.js:095";
const w09_96 = "prop-card:w\\w09.js:096";
const w09_97 = "scope-ring:w\\w09.js:097";
const w09_98 = "value-chip:w\\w09.js:098";
const w09_99 = "strip-gate:w\\w09.js:099";
const w09_100 = "bucket-row:w\\w09.js:100";
const w09_101 = "code-pane:w\\w09.js:101";
const w09_102 = "entry-cell:w\\w09.js:102";
const w09_103 = "frame-dot:w\\w09.js:103";
const w09_104 = "prop-card:w\\w09.js:104";
const w09_105 = "scope-ring:w\\w09.js:105";
const w09_106 = "value-chip:w\\w09.js:106";
const w09_107 = "strip-gate:w\\w09.js:107";
const w09_108 = "bucket-row:w\\w09.js:108";
const w09_109 = "code-pane:w\\w09.js:109";
const w09_110 = "entry-cell:w\\w09.js:110";
const w09_111 = "frame-dot:w\\w09.js:111";
const w09_112 = "prop-card:w\\w09.js:112";
const w09_113 = "scope-ring:w\\w09.js:113";
const w09_114 = "value-chip:w\\w09.js:114";
const w09_115 = "strip-gate:w\\w09.js:115";
const w09_116 = "bucket-row:w\\w09.js:116";
const w09_117 = "code-pane:w\\w09.js:117";
const w09_118 = "entry-cell:w\\w09.js:118";
const w09_119 = "frame-dot:w\\w09.js:119";
const w09_120 = "prop-card:w\\w09.js:120";
const w09_121 = "scope-ring:w\\w09.js:121";
const w09_122 = "value-chip:w\\w09.js:122";
const w09_123 = "strip-gate:w\\w09.js:123";
const w09_124 = "bucket-row:w\\w09.js:124";
const w09_125 = "code-pane:w\\w09.js:125";
const w09_126 = "entry-cell:w\\w09.js:126";
const w09_127 = "frame-dot:w\\w09.js:127";
const w09_128 = "prop-card:w\\w09.js:128";
const w09_129 = "scope-ring:w\\w09.js:129";
const w09_130 = "value-chip:w\\w09.js:130";
const w09_131 = "strip-gate:w\\w09.js:131";
const w09_132 = "bucket-row:w\\w09.js:132";
const w09_133 = "code-pane:w\\w09.js:133";
const w09_134 = "entry-cell:w\\w09.js:134";
const w09_135 = "frame-dot:w\\w09.js:135";
const w09_136 = "prop-card:w\\w09.js:136";
const w09_137 = "scope-ring:w\\w09.js:137";
const w09_138 = "value-chip:w\\w09.js:138";
const w09_139 = "strip-gate:w\\w09.js:139";
const w09_140 = "bucket-row:w\\w09.js:140";
const w09_141 = "code-pane:w\\w09.js:141";
const w09_142 = "entry-cell:w\\w09.js:142";
const w09_143 = "frame-dot:w\\w09.js:143";
const w09_144 = "prop-card:w\\w09.js:144";
const w09_145 = "scope-ring:w\\w09.js:145";
const w09_146 = "value-chip:w\\w09.js:146";
const w09_147 = "strip-gate:w\\w09.js:147";
const w09_148 = "bucket-row:w\\w09.js:148";
const w09_149 = "code-pane:w\\w09.js:149";
const w09_150 = "entry-cell:w\\w09.js:150";
const w09_151 = "frame-dot:w\\w09.js:151";
const w09_152 = "prop-card:w\\w09.js:152";
const w09_153 = "scope-ring:w\\w09.js:153";
const w09_154 = "value-chip:w\\w09.js:154";
const w09_155 = "strip-gate:w\\w09.js:155";
const w09_156 = "bucket-row:w\\w09.js:156";
const w09_157 = "code-pane:w\\w09.js:157";
const w09_158 = "entry-cell:w\\w09.js:158";
const w09_159 = "frame-dot:w\\w09.js:159";
const w09_160 = "prop-card:w\\w09.js:160";
const w09_161 = "scope-ring:w\\w09.js:161";
const w09_162 = "value-chip:w\\w09.js:162";
const w09_163 = "strip-gate:w\\w09.js:163";
const w09_164 = "bucket-row:w\\w09.js:164";
const w09_165 = "code-pane:w\\w09.js:165";
const w09_166 = "entry-cell:w\\w09.js:166";
const w09_167 = "frame-dot:w\\w09.js:167";
const w09_168 = "prop-card:w\\w09.js:168";
const w09_169 = "scope-ring:w\\w09.js:169";
const w09_170 = "value-chip:w\\w09.js:170";
const w09_171 = "strip-gate:w\\w09.js:171";
const w09_172 = "bucket-row:w\\w09.js:172";
const w09_173 = "code-pane:w\\w09.js:173";
const w09_174 = "entry-cell:w\\w09.js:174";
const w09_175 = "frame-dot:w\\w09.js:175";
const w09_176 = "prop-card:w\\w09.js:176";
const w09_177 = "scope-ring:w\\w09.js:177";
const w09_178 = "value-chip:w\\w09.js:178";
const w09_179 = "strip-gate:w\\w09.js:179";
const w09_180 = "bucket-row:w\\w09.js:180";
const w09_181 = "code-pane:w\\w09.js:181";
const w09_182 = "entry-cell:w\\w09.js:182";
const w09_183 = "frame-dot:w\\w09.js:183";
const w09_184 = "prop-card:w\\w09.js:184";
const w09_185 = "scope-ring:w\\w09.js:185";
const w09_186 = "value-chip:w\\w09.js:186";
const w09_187 = "strip-gate:w\\w09.js:187";
const w09_188 = "bucket-row:w\\w09.js:188";
const w09_189 = "code-pane:w\\w09.js:189";
const w09_190 = "entry-cell:w\\w09.js:190";
const w09_191 = "frame-dot:w\\w09.js:191";
const w09_192 = "prop-card:w\\w09.js:192";
const w09_193 = "scope-ring:w\\w09.js:193";
const w09_194 = "value-chip:w\\w09.js:194";
const w09_195 = "strip-gate:w\\w09.js:195";
const w09_196 = "bucket-row:w\\w09.js:196";
