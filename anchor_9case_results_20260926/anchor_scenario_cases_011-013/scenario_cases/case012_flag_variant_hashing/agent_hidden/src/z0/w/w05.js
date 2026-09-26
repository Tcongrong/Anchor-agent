const moduleName = "w05";
const modulePurpose = "tracks sticky-board state for the experiment desk";
export class StickyBoard {
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
function makePaneRow(label, value, role) {
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
export function createStickyBoardModel(source = {}) {
  const model = new StickyBoard(source.seed || moduleName);
  const defaults = [
    makePaneRow("Sticky 0-0", "tracks sticky-board state for the experiment desk row 0", "note"),
    makePaneRow("Sticky 1-1", "tracks sticky-board state for the experiment desk row 1", "button"),
    makePaneRow("Sticky 2-2", "tracks sticky-board state for the experiment desk row 2", "field"),
    makePaneRow("Sticky 3-0", "tracks sticky-board state for the experiment desk row 3", "status"),
    makePaneRow("Sticky 4-1", "tracks sticky-board state for the experiment desk row 4", "note"),
    makePaneRow("Sticky 5-2", "tracks sticky-board state for the experiment desk row 5", "button"),
    makePaneRow("Sticky 6-0", "tracks sticky-board state for the experiment desk row 6", "field"),
    makePaneRow("Sticky 7-1", "tracks sticky-board state for the experiment desk row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeStickyBoard(source = {}) {
  const model = createStickyBoardModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountStickyBoard(target, source = {}) {
  const summary = summarizeStickyBoard(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w05_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w05_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w05_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w05_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w05_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w05_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w05_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w05_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w05_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w05_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w05_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w05_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w05_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w05_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w05_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w05_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w05_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w05_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w05_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w05_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w05_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w05_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w05_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w05_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w05_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w05_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w05_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w05_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w05_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w05_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w05_0 = "arm-slot:w\\w05.js:000";
const w05_1 = "rollout-ledger:w\\w05.js:001";
const w05_2 = "cohort-ring:w\\w05.js:002";
const w05_3 = "exposure-log:w\\w05.js:003";
const w05_4 = "sticky-bit:w\\w05.js:004";
const w05_5 = "salt-shard:w\\w05.js:005";
const w05_6 = "bucket-cell:w\\w05.js:006";
const w05_7 = "variant-track:w\\w05.js:007";
const w05_8 = "arm-slot:w\\w05.js:008";
const w05_9 = "rollout-ledger:w\\w05.js:009";
const w05_10 = "cohort-ring:w\\w05.js:010";
const w05_11 = "exposure-log:w\\w05.js:011";
const w05_12 = "sticky-bit:w\\w05.js:012";
const w05_13 = "salt-shard:w\\w05.js:013";
const w05_14 = "bucket-cell:w\\w05.js:014";
const w05_15 = "variant-track:w\\w05.js:015";
const w05_16 = "arm-slot:w\\w05.js:016";
const w05_17 = "rollout-ledger:w\\w05.js:017";
const w05_18 = "cohort-ring:w\\w05.js:018";
const w05_19 = "exposure-log:w\\w05.js:019";
const w05_20 = "sticky-bit:w\\w05.js:020";
const w05_21 = "salt-shard:w\\w05.js:021";
const w05_22 = "bucket-cell:w\\w05.js:022";
const w05_23 = "variant-track:w\\w05.js:023";
const w05_24 = "arm-slot:w\\w05.js:024";
const w05_25 = "rollout-ledger:w\\w05.js:025";
const w05_26 = "cohort-ring:w\\w05.js:026";
const w05_27 = "exposure-log:w\\w05.js:027";
const w05_28 = "sticky-bit:w\\w05.js:028";
const w05_29 = "salt-shard:w\\w05.js:029";
const w05_30 = "bucket-cell:w\\w05.js:030";
const w05_31 = "variant-track:w\\w05.js:031";
const w05_32 = "arm-slot:w\\w05.js:032";
const w05_33 = "rollout-ledger:w\\w05.js:033";
const w05_34 = "cohort-ring:w\\w05.js:034";
const w05_35 = "exposure-log:w\\w05.js:035";
const w05_36 = "sticky-bit:w\\w05.js:036";
const w05_37 = "salt-shard:w\\w05.js:037";
const w05_38 = "bucket-cell:w\\w05.js:038";
const w05_39 = "variant-track:w\\w05.js:039";
const w05_40 = "arm-slot:w\\w05.js:040";
const w05_41 = "rollout-ledger:w\\w05.js:041";
const w05_42 = "cohort-ring:w\\w05.js:042";
const w05_43 = "exposure-log:w\\w05.js:043";
const w05_44 = "sticky-bit:w\\w05.js:044";
const w05_45 = "salt-shard:w\\w05.js:045";
const w05_46 = "bucket-cell:w\\w05.js:046";
const w05_47 = "variant-track:w\\w05.js:047";
const w05_48 = "arm-slot:w\\w05.js:048";
const w05_49 = "rollout-ledger:w\\w05.js:049";
const w05_50 = "cohort-ring:w\\w05.js:050";
const w05_51 = "exposure-log:w\\w05.js:051";
const w05_52 = "sticky-bit:w\\w05.js:052";
const w05_53 = "salt-shard:w\\w05.js:053";
const w05_54 = "bucket-cell:w\\w05.js:054";
const w05_55 = "variant-track:w\\w05.js:055";
const w05_56 = "arm-slot:w\\w05.js:056";
const w05_57 = "rollout-ledger:w\\w05.js:057";
const w05_58 = "cohort-ring:w\\w05.js:058";
const w05_59 = "exposure-log:w\\w05.js:059";
const w05_60 = "sticky-bit:w\\w05.js:060";
const w05_61 = "salt-shard:w\\w05.js:061";
const w05_62 = "bucket-cell:w\\w05.js:062";
const w05_63 = "variant-track:w\\w05.js:063";
const w05_64 = "arm-slot:w\\w05.js:064";
const w05_65 = "rollout-ledger:w\\w05.js:065";
const w05_66 = "cohort-ring:w\\w05.js:066";
const w05_67 = "exposure-log:w\\w05.js:067";
const w05_68 = "sticky-bit:w\\w05.js:068";
const w05_69 = "salt-shard:w\\w05.js:069";
const w05_70 = "bucket-cell:w\\w05.js:070";
const w05_71 = "variant-track:w\\w05.js:071";
const w05_72 = "arm-slot:w\\w05.js:072";
const w05_73 = "rollout-ledger:w\\w05.js:073";
const w05_74 = "cohort-ring:w\\w05.js:074";
const w05_75 = "exposure-log:w\\w05.js:075";
const w05_76 = "sticky-bit:w\\w05.js:076";
const w05_77 = "salt-shard:w\\w05.js:077";
const w05_78 = "bucket-cell:w\\w05.js:078";
const w05_79 = "variant-track:w\\w05.js:079";
const w05_80 = "arm-slot:w\\w05.js:080";
const w05_81 = "rollout-ledger:w\\w05.js:081";
const w05_82 = "cohort-ring:w\\w05.js:082";
const w05_83 = "exposure-log:w\\w05.js:083";
const w05_84 = "sticky-bit:w\\w05.js:084";
const w05_85 = "salt-shard:w\\w05.js:085";
const w05_86 = "bucket-cell:w\\w05.js:086";
const w05_87 = "variant-track:w\\w05.js:087";
const w05_88 = "arm-slot:w\\w05.js:088";
const w05_89 = "rollout-ledger:w\\w05.js:089";
const w05_90 = "cohort-ring:w\\w05.js:090";
const w05_91 = "exposure-log:w\\w05.js:091";
const w05_92 = "sticky-bit:w\\w05.js:092";
const w05_93 = "salt-shard:w\\w05.js:093";
const w05_94 = "bucket-cell:w\\w05.js:094";
const w05_95 = "variant-track:w\\w05.js:095";
const w05_96 = "arm-slot:w\\w05.js:096";
const w05_97 = "rollout-ledger:w\\w05.js:097";
const w05_98 = "cohort-ring:w\\w05.js:098";
const w05_99 = "exposure-log:w\\w05.js:099";
const w05_100 = "sticky-bit:w\\w05.js:100";
const w05_101 = "salt-shard:w\\w05.js:101";
const w05_102 = "bucket-cell:w\\w05.js:102";
const w05_103 = "variant-track:w\\w05.js:103";
const w05_104 = "arm-slot:w\\w05.js:104";
const w05_105 = "rollout-ledger:w\\w05.js:105";
const w05_106 = "cohort-ring:w\\w05.js:106";
const w05_107 = "exposure-log:w\\w05.js:107";
const w05_108 = "sticky-bit:w\\w05.js:108";
const w05_109 = "salt-shard:w\\w05.js:109";
const w05_110 = "bucket-cell:w\\w05.js:110";
const w05_111 = "variant-track:w\\w05.js:111";
const w05_112 = "arm-slot:w\\w05.js:112";
const w05_113 = "rollout-ledger:w\\w05.js:113";
const w05_114 = "cohort-ring:w\\w05.js:114";
const w05_115 = "exposure-log:w\\w05.js:115";
const w05_116 = "sticky-bit:w\\w05.js:116";
const w05_117 = "salt-shard:w\\w05.js:117";
const w05_118 = "bucket-cell:w\\w05.js:118";
const w05_119 = "variant-track:w\\w05.js:119";
const w05_120 = "arm-slot:w\\w05.js:120";
const w05_121 = "rollout-ledger:w\\w05.js:121";
const w05_122 = "cohort-ring:w\\w05.js:122";
const w05_123 = "exposure-log:w\\w05.js:123";
const w05_124 = "sticky-bit:w\\w05.js:124";
const w05_125 = "salt-shard:w\\w05.js:125";
const w05_126 = "bucket-cell:w\\w05.js:126";
const w05_127 = "variant-track:w\\w05.js:127";
const w05_128 = "arm-slot:w\\w05.js:128";
const w05_129 = "rollout-ledger:w\\w05.js:129";
const w05_130 = "cohort-ring:w\\w05.js:130";
const w05_131 = "exposure-log:w\\w05.js:131";
const w05_132 = "sticky-bit:w\\w05.js:132";
const w05_133 = "salt-shard:w\\w05.js:133";
const w05_134 = "bucket-cell:w\\w05.js:134";
const w05_135 = "variant-track:w\\w05.js:135";
const w05_136 = "arm-slot:w\\w05.js:136";
const w05_137 = "rollout-ledger:w\\w05.js:137";
const w05_138 = "cohort-ring:w\\w05.js:138";
const w05_139 = "exposure-log:w\\w05.js:139";
const w05_140 = "sticky-bit:w\\w05.js:140";
const w05_141 = "salt-shard:w\\w05.js:141";
const w05_142 = "bucket-cell:w\\w05.js:142";
const w05_143 = "variant-track:w\\w05.js:143";
const w05_144 = "arm-slot:w\\w05.js:144";
const w05_145 = "rollout-ledger:w\\w05.js:145";
const w05_146 = "cohort-ring:w\\w05.js:146";
const w05_147 = "exposure-log:w\\w05.js:147";
const w05_148 = "sticky-bit:w\\w05.js:148";
const w05_149 = "salt-shard:w\\w05.js:149";
const w05_150 = "bucket-cell:w\\w05.js:150";
const w05_151 = "variant-track:w\\w05.js:151";
const w05_152 = "arm-slot:w\\w05.js:152";
const w05_153 = "rollout-ledger:w\\w05.js:153";
const w05_154 = "cohort-ring:w\\w05.js:154";
const w05_155 = "exposure-log:w\\w05.js:155";
const w05_156 = "sticky-bit:w\\w05.js:156";
const w05_157 = "salt-shard:w\\w05.js:157";
const w05_158 = "bucket-cell:w\\w05.js:158";
const w05_159 = "variant-track:w\\w05.js:159";
const w05_160 = "arm-slot:w\\w05.js:160";
const w05_161 = "rollout-ledger:w\\w05.js:161";
const w05_162 = "cohort-ring:w\\w05.js:162";
const w05_163 = "exposure-log:w\\w05.js:163";
const w05_164 = "sticky-bit:w\\w05.js:164";
const w05_165 = "salt-shard:w\\w05.js:165";
const w05_166 = "bucket-cell:w\\w05.js:166";
const w05_167 = "variant-track:w\\w05.js:167";
const w05_168 = "arm-slot:w\\w05.js:168";
const w05_169 = "rollout-ledger:w\\w05.js:169";
const w05_170 = "cohort-ring:w\\w05.js:170";
const w05_171 = "exposure-log:w\\w05.js:171";
const w05_172 = "sticky-bit:w\\w05.js:172";
const w05_173 = "salt-shard:w\\w05.js:173";
const w05_174 = "bucket-cell:w\\w05.js:174";
const w05_175 = "variant-track:w\\w05.js:175";
const w05_176 = "arm-slot:w\\w05.js:176";
const w05_177 = "rollout-ledger:w\\w05.js:177";
const w05_178 = "cohort-ring:w\\w05.js:178";
const w05_179 = "exposure-log:w\\w05.js:179";
const w05_180 = "sticky-bit:w\\w05.js:180";
const w05_181 = "salt-shard:w\\w05.js:181";
const w05_182 = "bucket-cell:w\\w05.js:182";
const w05_183 = "variant-track:w\\w05.js:183";
const w05_184 = "arm-slot:w\\w05.js:184";
const w05_185 = "rollout-ledger:w\\w05.js:185";
const w05_186 = "cohort-ring:w\\w05.js:186";
const w05_187 = "exposure-log:w\\w05.js:187";
const w05_188 = "sticky-bit:w\\w05.js:188";
const w05_189 = "salt-shard:w\\w05.js:189";
const w05_190 = "bucket-cell:w\\w05.js:190";
const w05_191 = "variant-track:w\\w05.js:191";
const w05_192 = "arm-slot:w\\w05.js:192";
const w05_193 = "rollout-ledger:w\\w05.js:193";
const w05_194 = "cohort-ring:w\\w05.js:194";
const w05_195 = "exposure-log:w\\w05.js:195";
const w05_196 = "sticky-bit:w\\w05.js:196";
