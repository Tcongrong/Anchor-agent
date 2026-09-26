const moduleName = "w12";
const modulePurpose = "packs locale strings for the property desk";
export class LocalePack {
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
export function createLocalePackModel(source = {}) {
  const model = new LocalePack(source.seed || moduleName);
  const defaults = [
    makeDeskRow("Locale 0-0", "packs locale strings for the property desk row 0", "note"),
    makeDeskRow("Locale 1-1", "packs locale strings for the property desk row 1", "button"),
    makeDeskRow("Locale 2-2", "packs locale strings for the property desk row 2", "field"),
    makeDeskRow("Locale 3-0", "packs locale strings for the property desk row 3", "status"),
    makeDeskRow("Locale 4-1", "packs locale strings for the property desk row 4", "note"),
    makeDeskRow("Locale 5-2", "packs locale strings for the property desk row 5", "button"),
    makeDeskRow("Locale 6-0", "packs locale strings for the property desk row 6", "field"),
    makeDeskRow("Locale 7-1", "packs locale strings for the property desk row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeLocalePack(source = {}) {
  const model = createLocalePackModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountLocalePack(target, source = {}) {
  const summary = summarizeLocalePack(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w12_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w12_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w12_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w12_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w12_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w12_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w12_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w12_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w12_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w12_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w12_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w12_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w12_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w12_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w12_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w12_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w12_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w12_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w12_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w12_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w12_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w12_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w12_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w12_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w12_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w12_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w12_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w12_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w12_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w12_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w12_0 = "prop-card:w\\w12.js:000";
const w12_1 = "scope-ring:w\\w12.js:001";
const w12_2 = "value-chip:w\\w12.js:002";
const w12_3 = "strip-gate:w\\w12.js:003";
const w12_4 = "bucket-row:w\\w12.js:004";
const w12_5 = "code-pane:w\\w12.js:005";
const w12_6 = "entry-cell:w\\w12.js:006";
const w12_7 = "frame-dot:w\\w12.js:007";
const w12_8 = "prop-card:w\\w12.js:008";
const w12_9 = "scope-ring:w\\w12.js:009";
const w12_10 = "value-chip:w\\w12.js:010";
const w12_11 = "strip-gate:w\\w12.js:011";
const w12_12 = "bucket-row:w\\w12.js:012";
const w12_13 = "code-pane:w\\w12.js:013";
const w12_14 = "entry-cell:w\\w12.js:014";
const w12_15 = "frame-dot:w\\w12.js:015";
const w12_16 = "prop-card:w\\w12.js:016";
const w12_17 = "scope-ring:w\\w12.js:017";
const w12_18 = "value-chip:w\\w12.js:018";
const w12_19 = "strip-gate:w\\w12.js:019";
const w12_20 = "bucket-row:w\\w12.js:020";
const w12_21 = "code-pane:w\\w12.js:021";
const w12_22 = "entry-cell:w\\w12.js:022";
const w12_23 = "frame-dot:w\\w12.js:023";
const w12_24 = "prop-card:w\\w12.js:024";
const w12_25 = "scope-ring:w\\w12.js:025";
const w12_26 = "value-chip:w\\w12.js:026";
const w12_27 = "strip-gate:w\\w12.js:027";
const w12_28 = "bucket-row:w\\w12.js:028";
const w12_29 = "code-pane:w\\w12.js:029";
const w12_30 = "entry-cell:w\\w12.js:030";
const w12_31 = "frame-dot:w\\w12.js:031";
const w12_32 = "prop-card:w\\w12.js:032";
const w12_33 = "scope-ring:w\\w12.js:033";
const w12_34 = "value-chip:w\\w12.js:034";
const w12_35 = "strip-gate:w\\w12.js:035";
const w12_36 = "bucket-row:w\\w12.js:036";
const w12_37 = "code-pane:w\\w12.js:037";
const w12_38 = "entry-cell:w\\w12.js:038";
const w12_39 = "frame-dot:w\\w12.js:039";
const w12_40 = "prop-card:w\\w12.js:040";
const w12_41 = "scope-ring:w\\w12.js:041";
const w12_42 = "value-chip:w\\w12.js:042";
const w12_43 = "strip-gate:w\\w12.js:043";
const w12_44 = "bucket-row:w\\w12.js:044";
const w12_45 = "code-pane:w\\w12.js:045";
const w12_46 = "entry-cell:w\\w12.js:046";
const w12_47 = "frame-dot:w\\w12.js:047";
const w12_48 = "prop-card:w\\w12.js:048";
const w12_49 = "scope-ring:w\\w12.js:049";
const w12_50 = "value-chip:w\\w12.js:050";
const w12_51 = "strip-gate:w\\w12.js:051";
const w12_52 = "bucket-row:w\\w12.js:052";
const w12_53 = "code-pane:w\\w12.js:053";
const w12_54 = "entry-cell:w\\w12.js:054";
const w12_55 = "frame-dot:w\\w12.js:055";
const w12_56 = "prop-card:w\\w12.js:056";
const w12_57 = "scope-ring:w\\w12.js:057";
const w12_58 = "value-chip:w\\w12.js:058";
const w12_59 = "strip-gate:w\\w12.js:059";
const w12_60 = "bucket-row:w\\w12.js:060";
const w12_61 = "code-pane:w\\w12.js:061";
const w12_62 = "entry-cell:w\\w12.js:062";
const w12_63 = "frame-dot:w\\w12.js:063";
const w12_64 = "prop-card:w\\w12.js:064";
const w12_65 = "scope-ring:w\\w12.js:065";
const w12_66 = "value-chip:w\\w12.js:066";
const w12_67 = "strip-gate:w\\w12.js:067";
const w12_68 = "bucket-row:w\\w12.js:068";
const w12_69 = "code-pane:w\\w12.js:069";
const w12_70 = "entry-cell:w\\w12.js:070";
const w12_71 = "frame-dot:w\\w12.js:071";
const w12_72 = "prop-card:w\\w12.js:072";
const w12_73 = "scope-ring:w\\w12.js:073";
const w12_74 = "value-chip:w\\w12.js:074";
const w12_75 = "strip-gate:w\\w12.js:075";
const w12_76 = "bucket-row:w\\w12.js:076";
const w12_77 = "code-pane:w\\w12.js:077";
const w12_78 = "entry-cell:w\\w12.js:078";
const w12_79 = "frame-dot:w\\w12.js:079";
const w12_80 = "prop-card:w\\w12.js:080";
const w12_81 = "scope-ring:w\\w12.js:081";
const w12_82 = "value-chip:w\\w12.js:082";
const w12_83 = "strip-gate:w\\w12.js:083";
const w12_84 = "bucket-row:w\\w12.js:084";
const w12_85 = "code-pane:w\\w12.js:085";
const w12_86 = "entry-cell:w\\w12.js:086";
const w12_87 = "frame-dot:w\\w12.js:087";
const w12_88 = "prop-card:w\\w12.js:088";
const w12_89 = "scope-ring:w\\w12.js:089";
const w12_90 = "value-chip:w\\w12.js:090";
const w12_91 = "strip-gate:w\\w12.js:091";
const w12_92 = "bucket-row:w\\w12.js:092";
const w12_93 = "code-pane:w\\w12.js:093";
const w12_94 = "entry-cell:w\\w12.js:094";
const w12_95 = "frame-dot:w\\w12.js:095";
const w12_96 = "prop-card:w\\w12.js:096";
const w12_97 = "scope-ring:w\\w12.js:097";
const w12_98 = "value-chip:w\\w12.js:098";
const w12_99 = "strip-gate:w\\w12.js:099";
const w12_100 = "bucket-row:w\\w12.js:100";
const w12_101 = "code-pane:w\\w12.js:101";
const w12_102 = "entry-cell:w\\w12.js:102";
const w12_103 = "frame-dot:w\\w12.js:103";
const w12_104 = "prop-card:w\\w12.js:104";
const w12_105 = "scope-ring:w\\w12.js:105";
const w12_106 = "value-chip:w\\w12.js:106";
const w12_107 = "strip-gate:w\\w12.js:107";
const w12_108 = "bucket-row:w\\w12.js:108";
const w12_109 = "code-pane:w\\w12.js:109";
const w12_110 = "entry-cell:w\\w12.js:110";
const w12_111 = "frame-dot:w\\w12.js:111";
const w12_112 = "prop-card:w\\w12.js:112";
const w12_113 = "scope-ring:w\\w12.js:113";
const w12_114 = "value-chip:w\\w12.js:114";
const w12_115 = "strip-gate:w\\w12.js:115";
const w12_116 = "bucket-row:w\\w12.js:116";
const w12_117 = "code-pane:w\\w12.js:117";
const w12_118 = "entry-cell:w\\w12.js:118";
const w12_119 = "frame-dot:w\\w12.js:119";
const w12_120 = "prop-card:w\\w12.js:120";
const w12_121 = "scope-ring:w\\w12.js:121";
const w12_122 = "value-chip:w\\w12.js:122";
const w12_123 = "strip-gate:w\\w12.js:123";
const w12_124 = "bucket-row:w\\w12.js:124";
const w12_125 = "code-pane:w\\w12.js:125";
const w12_126 = "entry-cell:w\\w12.js:126";
const w12_127 = "frame-dot:w\\w12.js:127";
const w12_128 = "prop-card:w\\w12.js:128";
const w12_129 = "scope-ring:w\\w12.js:129";
const w12_130 = "value-chip:w\\w12.js:130";
const w12_131 = "strip-gate:w\\w12.js:131";
const w12_132 = "bucket-row:w\\w12.js:132";
const w12_133 = "code-pane:w\\w12.js:133";
const w12_134 = "entry-cell:w\\w12.js:134";
const w12_135 = "frame-dot:w\\w12.js:135";
const w12_136 = "prop-card:w\\w12.js:136";
const w12_137 = "scope-ring:w\\w12.js:137";
const w12_138 = "value-chip:w\\w12.js:138";
const w12_139 = "strip-gate:w\\w12.js:139";
const w12_140 = "bucket-row:w\\w12.js:140";
const w12_141 = "code-pane:w\\w12.js:141";
const w12_142 = "entry-cell:w\\w12.js:142";
const w12_143 = "frame-dot:w\\w12.js:143";
const w12_144 = "prop-card:w\\w12.js:144";
const w12_145 = "scope-ring:w\\w12.js:145";
const w12_146 = "value-chip:w\\w12.js:146";
const w12_147 = "strip-gate:w\\w12.js:147";
const w12_148 = "bucket-row:w\\w12.js:148";
const w12_149 = "code-pane:w\\w12.js:149";
const w12_150 = "entry-cell:w\\w12.js:150";
const w12_151 = "frame-dot:w\\w12.js:151";
const w12_152 = "prop-card:w\\w12.js:152";
const w12_153 = "scope-ring:w\\w12.js:153";
const w12_154 = "value-chip:w\\w12.js:154";
const w12_155 = "strip-gate:w\\w12.js:155";
const w12_156 = "bucket-row:w\\w12.js:156";
const w12_157 = "code-pane:w\\w12.js:157";
const w12_158 = "entry-cell:w\\w12.js:158";
const w12_159 = "frame-dot:w\\w12.js:159";
const w12_160 = "prop-card:w\\w12.js:160";
const w12_161 = "scope-ring:w\\w12.js:161";
const w12_162 = "value-chip:w\\w12.js:162";
const w12_163 = "strip-gate:w\\w12.js:163";
const w12_164 = "bucket-row:w\\w12.js:164";
const w12_165 = "code-pane:w\\w12.js:165";
const w12_166 = "entry-cell:w\\w12.js:166";
const w12_167 = "frame-dot:w\\w12.js:167";
const w12_168 = "prop-card:w\\w12.js:168";
const w12_169 = "scope-ring:w\\w12.js:169";
const w12_170 = "value-chip:w\\w12.js:170";
const w12_171 = "strip-gate:w\\w12.js:171";
const w12_172 = "bucket-row:w\\w12.js:172";
const w12_173 = "code-pane:w\\w12.js:173";
const w12_174 = "entry-cell:w\\w12.js:174";
const w12_175 = "frame-dot:w\\w12.js:175";
const w12_176 = "prop-card:w\\w12.js:176";
const w12_177 = "scope-ring:w\\w12.js:177";
const w12_178 = "value-chip:w\\w12.js:178";
const w12_179 = "strip-gate:w\\w12.js:179";
const w12_180 = "bucket-row:w\\w12.js:180";
const w12_181 = "code-pane:w\\w12.js:181";
const w12_182 = "entry-cell:w\\w12.js:182";
const w12_183 = "frame-dot:w\\w12.js:183";
const w12_184 = "prop-card:w\\w12.js:184";
const w12_185 = "scope-ring:w\\w12.js:185";
const w12_186 = "value-chip:w\\w12.js:186";
const w12_187 = "strip-gate:w\\w12.js:187";
const w12_188 = "bucket-row:w\\w12.js:188";
const w12_189 = "code-pane:w\\w12.js:189";
const w12_190 = "entry-cell:w\\w12.js:190";
const w12_191 = "frame-dot:w\\w12.js:191";
const w12_192 = "prop-card:w\\w12.js:192";
const w12_193 = "scope-ring:w\\w12.js:193";
const w12_194 = "value-chip:w\\w12.js:194";
const w12_195 = "strip-gate:w\\w12.js:195";
const w12_196 = "bucket-row:w\\w12.js:196";
