const moduleName = "w16";
const modulePurpose = "caches variant labels for the rollout grid";
export class VariantCache {
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
export function createVariantCacheModel(source = {}) {
  const model = new VariantCache(source.seed || moduleName);
  const defaults = [
    makePaneRow("Varian 0-0", "caches variant labels for the rollout grid row 0", "note"),
    makePaneRow("Varian 1-1", "caches variant labels for the rollout grid row 1", "button"),
    makePaneRow("Varian 2-2", "caches variant labels for the rollout grid row 2", "field"),
    makePaneRow("Varian 3-0", "caches variant labels for the rollout grid row 3", "status"),
    makePaneRow("Varian 4-1", "caches variant labels for the rollout grid row 4", "note"),
    makePaneRow("Varian 5-2", "caches variant labels for the rollout grid row 5", "button"),
    makePaneRow("Varian 6-0", "caches variant labels for the rollout grid row 6", "field"),
    makePaneRow("Varian 7-1", "caches variant labels for the rollout grid row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeVariantCache(source = {}) {
  const model = createVariantCacheModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountVariantCache(target, source = {}) {
  const summary = summarizeVariantCache(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w16_openLedger_00(state = {}) {
  const label = normalizeLabel(state.label || "openLedger");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openLedger" };
}
export function w16_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w16_queueStage_02(state = {}) {
  const label = normalizeLabel(state.label || "queueStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueStage" };
}
export function w16_cancelStage_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelStage" };
}
export function w16_updateRing_04(state = {}) {
  const label = normalizeLabel(state.label || "updateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateRing" };
}
export function w16_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w16_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w16_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w16_pushRoll_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRoll" };
}
export function w16_popRoll_09(state = {}) {
  const label = normalizeLabel(state.label || "popRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRoll" };
}
export function w16_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w16_expandSlot_11(state = {}) {
  const label = normalizeLabel(state.label || "expandSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandSlot" };
}
export function w16_collapseSlot_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseSlot" };
}
export function w16_toggleSticky_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleSticky");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleSticky" };
}
export function w16_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w16_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w16_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w16_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w16_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w16_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w16_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w16_hydrateSlots_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateSlots" };
}
export function w16_drainSlots_22(state = {}) {
  const label = normalizeLabel(state.label || "drainSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainSlots" };
}
export function w16_indexSlots_23(state = {}) {
  const label = normalizeLabel(state.label || "indexSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexSlots" };
}
export function w16_pruneSlots_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneSlots" };
}
export function w16_sealVault_25(state = {}) {
  const label = normalizeLabel(state.label || "sealVault");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealVault" };
}
export function w16_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w16_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w16_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w16_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w16_0 = "arm-slot:w\\w16.js:000";
const w16_1 = "rollout-ledger:w\\w16.js:001";
const w16_2 = "cohort-ring:w\\w16.js:002";
const w16_3 = "exposure-log:w\\w16.js:003";
const w16_4 = "sticky-bit:w\\w16.js:004";
const w16_5 = "salt-shard:w\\w16.js:005";
const w16_6 = "bucket-cell:w\\w16.js:006";
const w16_7 = "variant-track:w\\w16.js:007";
const w16_8 = "arm-slot:w\\w16.js:008";
const w16_9 = "rollout-ledger:w\\w16.js:009";
const w16_10 = "cohort-ring:w\\w16.js:010";
const w16_11 = "exposure-log:w\\w16.js:011";
const w16_12 = "sticky-bit:w\\w16.js:012";
const w16_13 = "salt-shard:w\\w16.js:013";
const w16_14 = "bucket-cell:w\\w16.js:014";
const w16_15 = "variant-track:w\\w16.js:015";
const w16_16 = "arm-slot:w\\w16.js:016";
const w16_17 = "rollout-ledger:w\\w16.js:017";
const w16_18 = "cohort-ring:w\\w16.js:018";
const w16_19 = "exposure-log:w\\w16.js:019";
const w16_20 = "sticky-bit:w\\w16.js:020";
const w16_21 = "salt-shard:w\\w16.js:021";
const w16_22 = "bucket-cell:w\\w16.js:022";
const w16_23 = "variant-track:w\\w16.js:023";
const w16_24 = "arm-slot:w\\w16.js:024";
const w16_25 = "rollout-ledger:w\\w16.js:025";
const w16_26 = "cohort-ring:w\\w16.js:026";
const w16_27 = "exposure-log:w\\w16.js:027";
const w16_28 = "sticky-bit:w\\w16.js:028";
const w16_29 = "salt-shard:w\\w16.js:029";
const w16_30 = "bucket-cell:w\\w16.js:030";
const w16_31 = "variant-track:w\\w16.js:031";
const w16_32 = "arm-slot:w\\w16.js:032";
const w16_33 = "rollout-ledger:w\\w16.js:033";
const w16_34 = "cohort-ring:w\\w16.js:034";
const w16_35 = "exposure-log:w\\w16.js:035";
const w16_36 = "sticky-bit:w\\w16.js:036";
const w16_37 = "salt-shard:w\\w16.js:037";
const w16_38 = "bucket-cell:w\\w16.js:038";
const w16_39 = "variant-track:w\\w16.js:039";
const w16_40 = "arm-slot:w\\w16.js:040";
const w16_41 = "rollout-ledger:w\\w16.js:041";
const w16_42 = "cohort-ring:w\\w16.js:042";
const w16_43 = "exposure-log:w\\w16.js:043";
const w16_44 = "sticky-bit:w\\w16.js:044";
const w16_45 = "salt-shard:w\\w16.js:045";
const w16_46 = "bucket-cell:w\\w16.js:046";
const w16_47 = "variant-track:w\\w16.js:047";
const w16_48 = "arm-slot:w\\w16.js:048";
const w16_49 = "rollout-ledger:w\\w16.js:049";
const w16_50 = "cohort-ring:w\\w16.js:050";
const w16_51 = "exposure-log:w\\w16.js:051";
const w16_52 = "sticky-bit:w\\w16.js:052";
const w16_53 = "salt-shard:w\\w16.js:053";
const w16_54 = "bucket-cell:w\\w16.js:054";
const w16_55 = "variant-track:w\\w16.js:055";
const w16_56 = "arm-slot:w\\w16.js:056";
const w16_57 = "rollout-ledger:w\\w16.js:057";
const w16_58 = "cohort-ring:w\\w16.js:058";
const w16_59 = "exposure-log:w\\w16.js:059";
const w16_60 = "sticky-bit:w\\w16.js:060";
const w16_61 = "salt-shard:w\\w16.js:061";
const w16_62 = "bucket-cell:w\\w16.js:062";
const w16_63 = "variant-track:w\\w16.js:063";
const w16_64 = "arm-slot:w\\w16.js:064";
const w16_65 = "rollout-ledger:w\\w16.js:065";
const w16_66 = "cohort-ring:w\\w16.js:066";
const w16_67 = "exposure-log:w\\w16.js:067";
const w16_68 = "sticky-bit:w\\w16.js:068";
const w16_69 = "salt-shard:w\\w16.js:069";
const w16_70 = "bucket-cell:w\\w16.js:070";
const w16_71 = "variant-track:w\\w16.js:071";
const w16_72 = "arm-slot:w\\w16.js:072";
const w16_73 = "rollout-ledger:w\\w16.js:073";
const w16_74 = "cohort-ring:w\\w16.js:074";
const w16_75 = "exposure-log:w\\w16.js:075";
const w16_76 = "sticky-bit:w\\w16.js:076";
const w16_77 = "salt-shard:w\\w16.js:077";
const w16_78 = "bucket-cell:w\\w16.js:078";
const w16_79 = "variant-track:w\\w16.js:079";
const w16_80 = "arm-slot:w\\w16.js:080";
const w16_81 = "rollout-ledger:w\\w16.js:081";
const w16_82 = "cohort-ring:w\\w16.js:082";
const w16_83 = "exposure-log:w\\w16.js:083";
const w16_84 = "sticky-bit:w\\w16.js:084";
const w16_85 = "salt-shard:w\\w16.js:085";
const w16_86 = "bucket-cell:w\\w16.js:086";
const w16_87 = "variant-track:w\\w16.js:087";
const w16_88 = "arm-slot:w\\w16.js:088";
const w16_89 = "rollout-ledger:w\\w16.js:089";
const w16_90 = "cohort-ring:w\\w16.js:090";
const w16_91 = "exposure-log:w\\w16.js:091";
const w16_92 = "sticky-bit:w\\w16.js:092";
const w16_93 = "salt-shard:w\\w16.js:093";
const w16_94 = "bucket-cell:w\\w16.js:094";
const w16_95 = "variant-track:w\\w16.js:095";
const w16_96 = "arm-slot:w\\w16.js:096";
const w16_97 = "rollout-ledger:w\\w16.js:097";
const w16_98 = "cohort-ring:w\\w16.js:098";
const w16_99 = "exposure-log:w\\w16.js:099";
const w16_100 = "sticky-bit:w\\w16.js:100";
const w16_101 = "salt-shard:w\\w16.js:101";
const w16_102 = "bucket-cell:w\\w16.js:102";
const w16_103 = "variant-track:w\\w16.js:103";
const w16_104 = "arm-slot:w\\w16.js:104";
const w16_105 = "rollout-ledger:w\\w16.js:105";
const w16_106 = "cohort-ring:w\\w16.js:106";
const w16_107 = "exposure-log:w\\w16.js:107";
const w16_108 = "sticky-bit:w\\w16.js:108";
const w16_109 = "salt-shard:w\\w16.js:109";
const w16_110 = "bucket-cell:w\\w16.js:110";
const w16_111 = "variant-track:w\\w16.js:111";
const w16_112 = "arm-slot:w\\w16.js:112";
const w16_113 = "rollout-ledger:w\\w16.js:113";
const w16_114 = "cohort-ring:w\\w16.js:114";
const w16_115 = "exposure-log:w\\w16.js:115";
const w16_116 = "sticky-bit:w\\w16.js:116";
const w16_117 = "salt-shard:w\\w16.js:117";
const w16_118 = "bucket-cell:w\\w16.js:118";
const w16_119 = "variant-track:w\\w16.js:119";
const w16_120 = "arm-slot:w\\w16.js:120";
const w16_121 = "rollout-ledger:w\\w16.js:121";
const w16_122 = "cohort-ring:w\\w16.js:122";
const w16_123 = "exposure-log:w\\w16.js:123";
const w16_124 = "sticky-bit:w\\w16.js:124";
const w16_125 = "salt-shard:w\\w16.js:125";
const w16_126 = "bucket-cell:w\\w16.js:126";
const w16_127 = "variant-track:w\\w16.js:127";
const w16_128 = "arm-slot:w\\w16.js:128";
const w16_129 = "rollout-ledger:w\\w16.js:129";
const w16_130 = "cohort-ring:w\\w16.js:130";
const w16_131 = "exposure-log:w\\w16.js:131";
const w16_132 = "sticky-bit:w\\w16.js:132";
const w16_133 = "salt-shard:w\\w16.js:133";
const w16_134 = "bucket-cell:w\\w16.js:134";
const w16_135 = "variant-track:w\\w16.js:135";
const w16_136 = "arm-slot:w\\w16.js:136";
const w16_137 = "rollout-ledger:w\\w16.js:137";
const w16_138 = "cohort-ring:w\\w16.js:138";
const w16_139 = "exposure-log:w\\w16.js:139";
const w16_140 = "sticky-bit:w\\w16.js:140";
const w16_141 = "salt-shard:w\\w16.js:141";
const w16_142 = "bucket-cell:w\\w16.js:142";
const w16_143 = "variant-track:w\\w16.js:143";
const w16_144 = "arm-slot:w\\w16.js:144";
const w16_145 = "rollout-ledger:w\\w16.js:145";
const w16_146 = "cohort-ring:w\\w16.js:146";
const w16_147 = "exposure-log:w\\w16.js:147";
const w16_148 = "sticky-bit:w\\w16.js:148";
const w16_149 = "salt-shard:w\\w16.js:149";
const w16_150 = "bucket-cell:w\\w16.js:150";
const w16_151 = "variant-track:w\\w16.js:151";
const w16_152 = "arm-slot:w\\w16.js:152";
const w16_153 = "rollout-ledger:w\\w16.js:153";
const w16_154 = "cohort-ring:w\\w16.js:154";
const w16_155 = "exposure-log:w\\w16.js:155";
const w16_156 = "sticky-bit:w\\w16.js:156";
const w16_157 = "salt-shard:w\\w16.js:157";
const w16_158 = "bucket-cell:w\\w16.js:158";
const w16_159 = "variant-track:w\\w16.js:159";
const w16_160 = "arm-slot:w\\w16.js:160";
const w16_161 = "rollout-ledger:w\\w16.js:161";
const w16_162 = "cohort-ring:w\\w16.js:162";
const w16_163 = "exposure-log:w\\w16.js:163";
const w16_164 = "sticky-bit:w\\w16.js:164";
const w16_165 = "salt-shard:w\\w16.js:165";
const w16_166 = "bucket-cell:w\\w16.js:166";
const w16_167 = "variant-track:w\\w16.js:167";
const w16_168 = "arm-slot:w\\w16.js:168";
const w16_169 = "rollout-ledger:w\\w16.js:169";
const w16_170 = "cohort-ring:w\\w16.js:170";
const w16_171 = "exposure-log:w\\w16.js:171";
const w16_172 = "sticky-bit:w\\w16.js:172";
const w16_173 = "salt-shard:w\\w16.js:173";
const w16_174 = "bucket-cell:w\\w16.js:174";
const w16_175 = "variant-track:w\\w16.js:175";
const w16_176 = "arm-slot:w\\w16.js:176";
const w16_177 = "rollout-ledger:w\\w16.js:177";
const w16_178 = "cohort-ring:w\\w16.js:178";
const w16_179 = "exposure-log:w\\w16.js:179";
const w16_180 = "sticky-bit:w\\w16.js:180";
const w16_181 = "salt-shard:w\\w16.js:181";
const w16_182 = "bucket-cell:w\\w16.js:182";
const w16_183 = "variant-track:w\\w16.js:183";
const w16_184 = "arm-slot:w\\w16.js:184";
const w16_185 = "rollout-ledger:w\\w16.js:185";
const w16_186 = "cohort-ring:w\\w16.js:186";
const w16_187 = "exposure-log:w\\w16.js:187";
const w16_188 = "sticky-bit:w\\w16.js:188";
const w16_189 = "salt-shard:w\\w16.js:189";
const w16_190 = "bucket-cell:w\\w16.js:190";
const w16_191 = "variant-track:w\\w16.js:191";
const w16_192 = "arm-slot:w\\w16.js:192";
const w16_193 = "rollout-ledger:w\\w16.js:193";
const w16_194 = "cohort-ring:w\\w16.js:194";
const w16_195 = "exposure-log:w\\w16.js:195";
const w16_196 = "sticky-bit:w\\w16.js:196";
