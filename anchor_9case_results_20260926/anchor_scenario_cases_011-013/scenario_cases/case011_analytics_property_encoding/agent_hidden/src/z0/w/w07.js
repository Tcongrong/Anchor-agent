const moduleName = "w07";
const modulePurpose = "dots frame anchors for the encoder view";
export class FrameDot {
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
export function createFrameDotModel(source = {}) {
  const model = new FrameDot(source.seed || moduleName);
  const defaults = [
    makeDeskRow("FrameD 0-0", "dots frame anchors for the encoder view row 0", "note"),
    makeDeskRow("FrameD 1-1", "dots frame anchors for the encoder view row 1", "button"),
    makeDeskRow("FrameD 2-2", "dots frame anchors for the encoder view row 2", "field"),
    makeDeskRow("FrameD 3-0", "dots frame anchors for the encoder view row 3", "status"),
    makeDeskRow("FrameD 4-1", "dots frame anchors for the encoder view row 4", "note"),
    makeDeskRow("FrameD 5-2", "dots frame anchors for the encoder view row 5", "button"),
    makeDeskRow("FrameD 6-0", "dots frame anchors for the encoder view row 6", "field"),
    makeDeskRow("FrameD 7-1", "dots frame anchors for the encoder view row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeFrameDot(source = {}) {
  const model = createFrameDotModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountFrameDot(target, source = {}) {
  const summary = summarizeFrameDot(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w07_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w07_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w07_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w07_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w07_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w07_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w07_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w07_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w07_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w07_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w07_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w07_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w07_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w07_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w07_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w07_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w07_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w07_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w07_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w07_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w07_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w07_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w07_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w07_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w07_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w07_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w07_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w07_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w07_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w07_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w07_0 = "prop-card:w\\w07.js:000";
const w07_1 = "scope-ring:w\\w07.js:001";
const w07_2 = "value-chip:w\\w07.js:002";
const w07_3 = "strip-gate:w\\w07.js:003";
const w07_4 = "bucket-row:w\\w07.js:004";
const w07_5 = "code-pane:w\\w07.js:005";
const w07_6 = "entry-cell:w\\w07.js:006";
const w07_7 = "frame-dot:w\\w07.js:007";
const w07_8 = "prop-card:w\\w07.js:008";
const w07_9 = "scope-ring:w\\w07.js:009";
const w07_10 = "value-chip:w\\w07.js:010";
const w07_11 = "strip-gate:w\\w07.js:011";
const w07_12 = "bucket-row:w\\w07.js:012";
const w07_13 = "code-pane:w\\w07.js:013";
const w07_14 = "entry-cell:w\\w07.js:014";
const w07_15 = "frame-dot:w\\w07.js:015";
const w07_16 = "prop-card:w\\w07.js:016";
const w07_17 = "scope-ring:w\\w07.js:017";
const w07_18 = "value-chip:w\\w07.js:018";
const w07_19 = "strip-gate:w\\w07.js:019";
const w07_20 = "bucket-row:w\\w07.js:020";
const w07_21 = "code-pane:w\\w07.js:021";
const w07_22 = "entry-cell:w\\w07.js:022";
const w07_23 = "frame-dot:w\\w07.js:023";
const w07_24 = "prop-card:w\\w07.js:024";
const w07_25 = "scope-ring:w\\w07.js:025";
const w07_26 = "value-chip:w\\w07.js:026";
const w07_27 = "strip-gate:w\\w07.js:027";
const w07_28 = "bucket-row:w\\w07.js:028";
const w07_29 = "code-pane:w\\w07.js:029";
const w07_30 = "entry-cell:w\\w07.js:030";
const w07_31 = "frame-dot:w\\w07.js:031";
const w07_32 = "prop-card:w\\w07.js:032";
const w07_33 = "scope-ring:w\\w07.js:033";
const w07_34 = "value-chip:w\\w07.js:034";
const w07_35 = "strip-gate:w\\w07.js:035";
const w07_36 = "bucket-row:w\\w07.js:036";
const w07_37 = "code-pane:w\\w07.js:037";
const w07_38 = "entry-cell:w\\w07.js:038";
const w07_39 = "frame-dot:w\\w07.js:039";
const w07_40 = "prop-card:w\\w07.js:040";
const w07_41 = "scope-ring:w\\w07.js:041";
const w07_42 = "value-chip:w\\w07.js:042";
const w07_43 = "strip-gate:w\\w07.js:043";
const w07_44 = "bucket-row:w\\w07.js:044";
const w07_45 = "code-pane:w\\w07.js:045";
const w07_46 = "entry-cell:w\\w07.js:046";
const w07_47 = "frame-dot:w\\w07.js:047";
const w07_48 = "prop-card:w\\w07.js:048";
const w07_49 = "scope-ring:w\\w07.js:049";
const w07_50 = "value-chip:w\\w07.js:050";
const w07_51 = "strip-gate:w\\w07.js:051";
const w07_52 = "bucket-row:w\\w07.js:052";
const w07_53 = "code-pane:w\\w07.js:053";
const w07_54 = "entry-cell:w\\w07.js:054";
const w07_55 = "frame-dot:w\\w07.js:055";
const w07_56 = "prop-card:w\\w07.js:056";
const w07_57 = "scope-ring:w\\w07.js:057";
const w07_58 = "value-chip:w\\w07.js:058";
const w07_59 = "strip-gate:w\\w07.js:059";
const w07_60 = "bucket-row:w\\w07.js:060";
const w07_61 = "code-pane:w\\w07.js:061";
const w07_62 = "entry-cell:w\\w07.js:062";
const w07_63 = "frame-dot:w\\w07.js:063";
const w07_64 = "prop-card:w\\w07.js:064";
const w07_65 = "scope-ring:w\\w07.js:065";
const w07_66 = "value-chip:w\\w07.js:066";
const w07_67 = "strip-gate:w\\w07.js:067";
const w07_68 = "bucket-row:w\\w07.js:068";
const w07_69 = "code-pane:w\\w07.js:069";
const w07_70 = "entry-cell:w\\w07.js:070";
const w07_71 = "frame-dot:w\\w07.js:071";
const w07_72 = "prop-card:w\\w07.js:072";
const w07_73 = "scope-ring:w\\w07.js:073";
const w07_74 = "value-chip:w\\w07.js:074";
const w07_75 = "strip-gate:w\\w07.js:075";
const w07_76 = "bucket-row:w\\w07.js:076";
const w07_77 = "code-pane:w\\w07.js:077";
const w07_78 = "entry-cell:w\\w07.js:078";
const w07_79 = "frame-dot:w\\w07.js:079";
const w07_80 = "prop-card:w\\w07.js:080";
const w07_81 = "scope-ring:w\\w07.js:081";
const w07_82 = "value-chip:w\\w07.js:082";
const w07_83 = "strip-gate:w\\w07.js:083";
const w07_84 = "bucket-row:w\\w07.js:084";
const w07_85 = "code-pane:w\\w07.js:085";
const w07_86 = "entry-cell:w\\w07.js:086";
const w07_87 = "frame-dot:w\\w07.js:087";
const w07_88 = "prop-card:w\\w07.js:088";
const w07_89 = "scope-ring:w\\w07.js:089";
const w07_90 = "value-chip:w\\w07.js:090";
const w07_91 = "strip-gate:w\\w07.js:091";
const w07_92 = "bucket-row:w\\w07.js:092";
const w07_93 = "code-pane:w\\w07.js:093";
const w07_94 = "entry-cell:w\\w07.js:094";
const w07_95 = "frame-dot:w\\w07.js:095";
const w07_96 = "prop-card:w\\w07.js:096";
const w07_97 = "scope-ring:w\\w07.js:097";
const w07_98 = "value-chip:w\\w07.js:098";
const w07_99 = "strip-gate:w\\w07.js:099";
const w07_100 = "bucket-row:w\\w07.js:100";
const w07_101 = "code-pane:w\\w07.js:101";
const w07_102 = "entry-cell:w\\w07.js:102";
const w07_103 = "frame-dot:w\\w07.js:103";
const w07_104 = "prop-card:w\\w07.js:104";
const w07_105 = "scope-ring:w\\w07.js:105";
const w07_106 = "value-chip:w\\w07.js:106";
const w07_107 = "strip-gate:w\\w07.js:107";
const w07_108 = "bucket-row:w\\w07.js:108";
const w07_109 = "code-pane:w\\w07.js:109";
const w07_110 = "entry-cell:w\\w07.js:110";
const w07_111 = "frame-dot:w\\w07.js:111";
const w07_112 = "prop-card:w\\w07.js:112";
const w07_113 = "scope-ring:w\\w07.js:113";
const w07_114 = "value-chip:w\\w07.js:114";
const w07_115 = "strip-gate:w\\w07.js:115";
const w07_116 = "bucket-row:w\\w07.js:116";
const w07_117 = "code-pane:w\\w07.js:117";
const w07_118 = "entry-cell:w\\w07.js:118";
const w07_119 = "frame-dot:w\\w07.js:119";
const w07_120 = "prop-card:w\\w07.js:120";
const w07_121 = "scope-ring:w\\w07.js:121";
const w07_122 = "value-chip:w\\w07.js:122";
const w07_123 = "strip-gate:w\\w07.js:123";
const w07_124 = "bucket-row:w\\w07.js:124";
const w07_125 = "code-pane:w\\w07.js:125";
const w07_126 = "entry-cell:w\\w07.js:126";
const w07_127 = "frame-dot:w\\w07.js:127";
const w07_128 = "prop-card:w\\w07.js:128";
const w07_129 = "scope-ring:w\\w07.js:129";
const w07_130 = "value-chip:w\\w07.js:130";
const w07_131 = "strip-gate:w\\w07.js:131";
const w07_132 = "bucket-row:w\\w07.js:132";
const w07_133 = "code-pane:w\\w07.js:133";
const w07_134 = "entry-cell:w\\w07.js:134";
const w07_135 = "frame-dot:w\\w07.js:135";
const w07_136 = "prop-card:w\\w07.js:136";
const w07_137 = "scope-ring:w\\w07.js:137";
const w07_138 = "value-chip:w\\w07.js:138";
const w07_139 = "strip-gate:w\\w07.js:139";
const w07_140 = "bucket-row:w\\w07.js:140";
const w07_141 = "code-pane:w\\w07.js:141";
const w07_142 = "entry-cell:w\\w07.js:142";
const w07_143 = "frame-dot:w\\w07.js:143";
const w07_144 = "prop-card:w\\w07.js:144";
const w07_145 = "scope-ring:w\\w07.js:145";
const w07_146 = "value-chip:w\\w07.js:146";
const w07_147 = "strip-gate:w\\w07.js:147";
const w07_148 = "bucket-row:w\\w07.js:148";
const w07_149 = "code-pane:w\\w07.js:149";
const w07_150 = "entry-cell:w\\w07.js:150";
const w07_151 = "frame-dot:w\\w07.js:151";
const w07_152 = "prop-card:w\\w07.js:152";
const w07_153 = "scope-ring:w\\w07.js:153";
const w07_154 = "value-chip:w\\w07.js:154";
const w07_155 = "strip-gate:w\\w07.js:155";
const w07_156 = "bucket-row:w\\w07.js:156";
const w07_157 = "code-pane:w\\w07.js:157";
const w07_158 = "entry-cell:w\\w07.js:158";
const w07_159 = "frame-dot:w\\w07.js:159";
const w07_160 = "prop-card:w\\w07.js:160";
const w07_161 = "scope-ring:w\\w07.js:161";
const w07_162 = "value-chip:w\\w07.js:162";
const w07_163 = "strip-gate:w\\w07.js:163";
const w07_164 = "bucket-row:w\\w07.js:164";
const w07_165 = "code-pane:w\\w07.js:165";
const w07_166 = "entry-cell:w\\w07.js:166";
const w07_167 = "frame-dot:w\\w07.js:167";
const w07_168 = "prop-card:w\\w07.js:168";
const w07_169 = "scope-ring:w\\w07.js:169";
const w07_170 = "value-chip:w\\w07.js:170";
const w07_171 = "strip-gate:w\\w07.js:171";
const w07_172 = "bucket-row:w\\w07.js:172";
const w07_173 = "code-pane:w\\w07.js:173";
const w07_174 = "entry-cell:w\\w07.js:174";
const w07_175 = "frame-dot:w\\w07.js:175";
const w07_176 = "prop-card:w\\w07.js:176";
const w07_177 = "scope-ring:w\\w07.js:177";
const w07_178 = "value-chip:w\\w07.js:178";
const w07_179 = "strip-gate:w\\w07.js:179";
const w07_180 = "bucket-row:w\\w07.js:180";
const w07_181 = "code-pane:w\\w07.js:181";
const w07_182 = "entry-cell:w\\w07.js:182";
const w07_183 = "frame-dot:w\\w07.js:183";
const w07_184 = "prop-card:w\\w07.js:184";
const w07_185 = "scope-ring:w\\w07.js:185";
const w07_186 = "value-chip:w\\w07.js:186";
const w07_187 = "strip-gate:w\\w07.js:187";
const w07_188 = "bucket-row:w\\w07.js:188";
const w07_189 = "code-pane:w\\w07.js:189";
const w07_190 = "entry-cell:w\\w07.js:190";
const w07_191 = "frame-dot:w\\w07.js:191";
const w07_192 = "prop-card:w\\w07.js:192";
const w07_193 = "scope-ring:w\\w07.js:193";
const w07_194 = "value-chip:w\\w07.js:194";
const w07_195 = "strip-gate:w\\w07.js:195";
const w07_196 = "bucket-row:w\\w07.js:196";
