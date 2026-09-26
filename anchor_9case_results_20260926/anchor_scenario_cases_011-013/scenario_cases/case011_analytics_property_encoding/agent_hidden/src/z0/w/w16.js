const moduleName = "w16";
const modulePurpose = "vaults static assets for the grid panes";
export class AssetVault {
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
export function createAssetVaultModel(source = {}) {
  const model = new AssetVault(source.seed || moduleName);
  const defaults = [
    makeDeskRow("AssetV 0-0", "vaults static assets for the grid panes row 0", "note"),
    makeDeskRow("AssetV 1-1", "vaults static assets for the grid panes row 1", "button"),
    makeDeskRow("AssetV 2-2", "vaults static assets for the grid panes row 2", "field"),
    makeDeskRow("AssetV 3-0", "vaults static assets for the grid panes row 3", "status"),
    makeDeskRow("AssetV 4-1", "vaults static assets for the grid panes row 4", "note"),
    makeDeskRow("AssetV 5-2", "vaults static assets for the grid panes row 5", "button"),
    makeDeskRow("AssetV 6-0", "vaults static assets for the grid panes row 6", "field"),
    makeDeskRow("AssetV 7-1", "vaults static assets for the grid panes row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeAssetVault(source = {}) {
  const model = createAssetVaultModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountAssetVault(target, source = {}) {
  const summary = summarizeAssetVault(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w16_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w16_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w16_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w16_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w16_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w16_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w16_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w16_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w16_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w16_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w16_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w16_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w16_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w16_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w16_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w16_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w16_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w16_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w16_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w16_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w16_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w16_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w16_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w16_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w16_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w16_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w16_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w16_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w16_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w16_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w16_0 = "prop-card:w\\w16.js:000";
const w16_1 = "scope-ring:w\\w16.js:001";
const w16_2 = "value-chip:w\\w16.js:002";
const w16_3 = "strip-gate:w\\w16.js:003";
const w16_4 = "bucket-row:w\\w16.js:004";
const w16_5 = "code-pane:w\\w16.js:005";
const w16_6 = "entry-cell:w\\w16.js:006";
const w16_7 = "frame-dot:w\\w16.js:007";
const w16_8 = "prop-card:w\\w16.js:008";
const w16_9 = "scope-ring:w\\w16.js:009";
const w16_10 = "value-chip:w\\w16.js:010";
const w16_11 = "strip-gate:w\\w16.js:011";
const w16_12 = "bucket-row:w\\w16.js:012";
const w16_13 = "code-pane:w\\w16.js:013";
const w16_14 = "entry-cell:w\\w16.js:014";
const w16_15 = "frame-dot:w\\w16.js:015";
const w16_16 = "prop-card:w\\w16.js:016";
const w16_17 = "scope-ring:w\\w16.js:017";
const w16_18 = "value-chip:w\\w16.js:018";
const w16_19 = "strip-gate:w\\w16.js:019";
const w16_20 = "bucket-row:w\\w16.js:020";
const w16_21 = "code-pane:w\\w16.js:021";
const w16_22 = "entry-cell:w\\w16.js:022";
const w16_23 = "frame-dot:w\\w16.js:023";
const w16_24 = "prop-card:w\\w16.js:024";
const w16_25 = "scope-ring:w\\w16.js:025";
const w16_26 = "value-chip:w\\w16.js:026";
const w16_27 = "strip-gate:w\\w16.js:027";
const w16_28 = "bucket-row:w\\w16.js:028";
const w16_29 = "code-pane:w\\w16.js:029";
const w16_30 = "entry-cell:w\\w16.js:030";
const w16_31 = "frame-dot:w\\w16.js:031";
const w16_32 = "prop-card:w\\w16.js:032";
const w16_33 = "scope-ring:w\\w16.js:033";
const w16_34 = "value-chip:w\\w16.js:034";
const w16_35 = "strip-gate:w\\w16.js:035";
const w16_36 = "bucket-row:w\\w16.js:036";
const w16_37 = "code-pane:w\\w16.js:037";
const w16_38 = "entry-cell:w\\w16.js:038";
const w16_39 = "frame-dot:w\\w16.js:039";
const w16_40 = "prop-card:w\\w16.js:040";
const w16_41 = "scope-ring:w\\w16.js:041";
const w16_42 = "value-chip:w\\w16.js:042";
const w16_43 = "strip-gate:w\\w16.js:043";
const w16_44 = "bucket-row:w\\w16.js:044";
const w16_45 = "code-pane:w\\w16.js:045";
const w16_46 = "entry-cell:w\\w16.js:046";
const w16_47 = "frame-dot:w\\w16.js:047";
const w16_48 = "prop-card:w\\w16.js:048";
const w16_49 = "scope-ring:w\\w16.js:049";
const w16_50 = "value-chip:w\\w16.js:050";
const w16_51 = "strip-gate:w\\w16.js:051";
const w16_52 = "bucket-row:w\\w16.js:052";
const w16_53 = "code-pane:w\\w16.js:053";
const w16_54 = "entry-cell:w\\w16.js:054";
const w16_55 = "frame-dot:w\\w16.js:055";
const w16_56 = "prop-card:w\\w16.js:056";
const w16_57 = "scope-ring:w\\w16.js:057";
const w16_58 = "value-chip:w\\w16.js:058";
const w16_59 = "strip-gate:w\\w16.js:059";
const w16_60 = "bucket-row:w\\w16.js:060";
const w16_61 = "code-pane:w\\w16.js:061";
const w16_62 = "entry-cell:w\\w16.js:062";
const w16_63 = "frame-dot:w\\w16.js:063";
const w16_64 = "prop-card:w\\w16.js:064";
const w16_65 = "scope-ring:w\\w16.js:065";
const w16_66 = "value-chip:w\\w16.js:066";
const w16_67 = "strip-gate:w\\w16.js:067";
const w16_68 = "bucket-row:w\\w16.js:068";
const w16_69 = "code-pane:w\\w16.js:069";
const w16_70 = "entry-cell:w\\w16.js:070";
const w16_71 = "frame-dot:w\\w16.js:071";
const w16_72 = "prop-card:w\\w16.js:072";
const w16_73 = "scope-ring:w\\w16.js:073";
const w16_74 = "value-chip:w\\w16.js:074";
const w16_75 = "strip-gate:w\\w16.js:075";
const w16_76 = "bucket-row:w\\w16.js:076";
const w16_77 = "code-pane:w\\w16.js:077";
const w16_78 = "entry-cell:w\\w16.js:078";
const w16_79 = "frame-dot:w\\w16.js:079";
const w16_80 = "prop-card:w\\w16.js:080";
const w16_81 = "scope-ring:w\\w16.js:081";
const w16_82 = "value-chip:w\\w16.js:082";
const w16_83 = "strip-gate:w\\w16.js:083";
const w16_84 = "bucket-row:w\\w16.js:084";
const w16_85 = "code-pane:w\\w16.js:085";
const w16_86 = "entry-cell:w\\w16.js:086";
const w16_87 = "frame-dot:w\\w16.js:087";
const w16_88 = "prop-card:w\\w16.js:088";
const w16_89 = "scope-ring:w\\w16.js:089";
const w16_90 = "value-chip:w\\w16.js:090";
const w16_91 = "strip-gate:w\\w16.js:091";
const w16_92 = "bucket-row:w\\w16.js:092";
const w16_93 = "code-pane:w\\w16.js:093";
const w16_94 = "entry-cell:w\\w16.js:094";
const w16_95 = "frame-dot:w\\w16.js:095";
const w16_96 = "prop-card:w\\w16.js:096";
const w16_97 = "scope-ring:w\\w16.js:097";
const w16_98 = "value-chip:w\\w16.js:098";
const w16_99 = "strip-gate:w\\w16.js:099";
const w16_100 = "bucket-row:w\\w16.js:100";
const w16_101 = "code-pane:w\\w16.js:101";
const w16_102 = "entry-cell:w\\w16.js:102";
const w16_103 = "frame-dot:w\\w16.js:103";
const w16_104 = "prop-card:w\\w16.js:104";
const w16_105 = "scope-ring:w\\w16.js:105";
const w16_106 = "value-chip:w\\w16.js:106";
const w16_107 = "strip-gate:w\\w16.js:107";
const w16_108 = "bucket-row:w\\w16.js:108";
const w16_109 = "code-pane:w\\w16.js:109";
const w16_110 = "entry-cell:w\\w16.js:110";
const w16_111 = "frame-dot:w\\w16.js:111";
const w16_112 = "prop-card:w\\w16.js:112";
const w16_113 = "scope-ring:w\\w16.js:113";
const w16_114 = "value-chip:w\\w16.js:114";
const w16_115 = "strip-gate:w\\w16.js:115";
const w16_116 = "bucket-row:w\\w16.js:116";
const w16_117 = "code-pane:w\\w16.js:117";
const w16_118 = "entry-cell:w\\w16.js:118";
const w16_119 = "frame-dot:w\\w16.js:119";
const w16_120 = "prop-card:w\\w16.js:120";
const w16_121 = "scope-ring:w\\w16.js:121";
const w16_122 = "value-chip:w\\w16.js:122";
const w16_123 = "strip-gate:w\\w16.js:123";
const w16_124 = "bucket-row:w\\w16.js:124";
const w16_125 = "code-pane:w\\w16.js:125";
const w16_126 = "entry-cell:w\\w16.js:126";
const w16_127 = "frame-dot:w\\w16.js:127";
const w16_128 = "prop-card:w\\w16.js:128";
const w16_129 = "scope-ring:w\\w16.js:129";
const w16_130 = "value-chip:w\\w16.js:130";
const w16_131 = "strip-gate:w\\w16.js:131";
const w16_132 = "bucket-row:w\\w16.js:132";
const w16_133 = "code-pane:w\\w16.js:133";
const w16_134 = "entry-cell:w\\w16.js:134";
const w16_135 = "frame-dot:w\\w16.js:135";
const w16_136 = "prop-card:w\\w16.js:136";
const w16_137 = "scope-ring:w\\w16.js:137";
const w16_138 = "value-chip:w\\w16.js:138";
const w16_139 = "strip-gate:w\\w16.js:139";
const w16_140 = "bucket-row:w\\w16.js:140";
const w16_141 = "code-pane:w\\w16.js:141";
const w16_142 = "entry-cell:w\\w16.js:142";
const w16_143 = "frame-dot:w\\w16.js:143";
const w16_144 = "prop-card:w\\w16.js:144";
const w16_145 = "scope-ring:w\\w16.js:145";
const w16_146 = "value-chip:w\\w16.js:146";
const w16_147 = "strip-gate:w\\w16.js:147";
const w16_148 = "bucket-row:w\\w16.js:148";
const w16_149 = "code-pane:w\\w16.js:149";
const w16_150 = "entry-cell:w\\w16.js:150";
const w16_151 = "frame-dot:w\\w16.js:151";
const w16_152 = "prop-card:w\\w16.js:152";
const w16_153 = "scope-ring:w\\w16.js:153";
const w16_154 = "value-chip:w\\w16.js:154";
const w16_155 = "strip-gate:w\\w16.js:155";
const w16_156 = "bucket-row:w\\w16.js:156";
const w16_157 = "code-pane:w\\w16.js:157";
const w16_158 = "entry-cell:w\\w16.js:158";
const w16_159 = "frame-dot:w\\w16.js:159";
const w16_160 = "prop-card:w\\w16.js:160";
const w16_161 = "scope-ring:w\\w16.js:161";
const w16_162 = "value-chip:w\\w16.js:162";
const w16_163 = "strip-gate:w\\w16.js:163";
const w16_164 = "bucket-row:w\\w16.js:164";
const w16_165 = "code-pane:w\\w16.js:165";
const w16_166 = "entry-cell:w\\w16.js:166";
const w16_167 = "frame-dot:w\\w16.js:167";
const w16_168 = "prop-card:w\\w16.js:168";
const w16_169 = "scope-ring:w\\w16.js:169";
const w16_170 = "value-chip:w\\w16.js:170";
const w16_171 = "strip-gate:w\\w16.js:171";
const w16_172 = "bucket-row:w\\w16.js:172";
const w16_173 = "code-pane:w\\w16.js:173";
const w16_174 = "entry-cell:w\\w16.js:174";
const w16_175 = "frame-dot:w\\w16.js:175";
const w16_176 = "prop-card:w\\w16.js:176";
const w16_177 = "scope-ring:w\\w16.js:177";
const w16_178 = "value-chip:w\\w16.js:178";
const w16_179 = "strip-gate:w\\w16.js:179";
const w16_180 = "bucket-row:w\\w16.js:180";
const w16_181 = "code-pane:w\\w16.js:181";
const w16_182 = "entry-cell:w\\w16.js:182";
const w16_183 = "frame-dot:w\\w16.js:183";
const w16_184 = "prop-card:w\\w16.js:184";
const w16_185 = "scope-ring:w\\w16.js:185";
const w16_186 = "value-chip:w\\w16.js:186";
const w16_187 = "strip-gate:w\\w16.js:187";
const w16_188 = "bucket-row:w\\w16.js:188";
const w16_189 = "code-pane:w\\w16.js:189";
const w16_190 = "entry-cell:w\\w16.js:190";
const w16_191 = "frame-dot:w\\w16.js:191";
const w16_192 = "prop-card:w\\w16.js:192";
const w16_193 = "scope-ring:w\\w16.js:193";
const w16_194 = "value-chip:w\\w16.js:194";
const w16_195 = "strip-gate:w\\w16.js:195";
const w16_196 = "bucket-row:w\\w16.js:196";
