const moduleName = "w14";
const modulePurpose = "catalogs static salts for the store panes";
export class SaltCatalog {
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
export function createSaltCatalogModel(source = {}) {
  const model = new SaltCatalog(source.seed || moduleName);
  const defaults = [
    makePaneRow("SaltCa 0-0", "catalogs static salts for the store panes row 0", "note"),
    makePaneRow("SaltCa 1-1", "catalogs static salts for the store panes row 1", "button"),
    makePaneRow("SaltCa 2-2", "catalogs static salts for the store panes row 2", "field"),
    makePaneRow("SaltCa 3-0", "catalogs static salts for the store panes row 3", "status"),
    makePaneRow("SaltCa 4-1", "catalogs static salts for the store panes row 4", "note"),
    makePaneRow("SaltCa 5-2", "catalogs static salts for the store panes row 5", "button"),
    makePaneRow("SaltCa 6-0", "catalogs static salts for the store panes row 6", "field"),
    makePaneRow("SaltCa 7-1", "catalogs static salts for the store panes row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeSaltCatalog(source = {}) {
  const model = createSaltCatalogModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountSaltCatalog(target, source = {}) {
  const summary = summarizeSaltCatalog(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w14_openLedger_00(state = {}) {
  const label = normalizeLabel(state.label || "openLedger");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openLedger" };
}
export function w14_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w14_queueStage_02(state = {}) {
  const label = normalizeLabel(state.label || "queueStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueStage" };
}
export function w14_cancelStage_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelStage" };
}
export function w14_updateRing_04(state = {}) {
  const label = normalizeLabel(state.label || "updateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateRing" };
}
export function w14_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w14_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w14_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w14_pushRoll_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRoll" };
}
export function w14_popRoll_09(state = {}) {
  const label = normalizeLabel(state.label || "popRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRoll" };
}
export function w14_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w14_expandSlot_11(state = {}) {
  const label = normalizeLabel(state.label || "expandSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandSlot" };
}
export function w14_collapseSlot_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseSlot" };
}
export function w14_toggleSticky_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleSticky");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleSticky" };
}
export function w14_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w14_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w14_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w14_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w14_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w14_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w14_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w14_hydrateSlots_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateSlots" };
}
export function w14_drainSlots_22(state = {}) {
  const label = normalizeLabel(state.label || "drainSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainSlots" };
}
export function w14_indexSlots_23(state = {}) {
  const label = normalizeLabel(state.label || "indexSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexSlots" };
}
export function w14_pruneSlots_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneSlots" };
}
export function w14_sealVault_25(state = {}) {
  const label = normalizeLabel(state.label || "sealVault");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealVault" };
}
export function w14_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w14_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w14_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w14_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w14_0 = "arm-slot:w\\w14.js:000";
const w14_1 = "rollout-ledger:w\\w14.js:001";
const w14_2 = "cohort-ring:w\\w14.js:002";
const w14_3 = "exposure-log:w\\w14.js:003";
const w14_4 = "sticky-bit:w\\w14.js:004";
const w14_5 = "salt-shard:w\\w14.js:005";
const w14_6 = "bucket-cell:w\\w14.js:006";
const w14_7 = "variant-track:w\\w14.js:007";
const w14_8 = "arm-slot:w\\w14.js:008";
const w14_9 = "rollout-ledger:w\\w14.js:009";
const w14_10 = "cohort-ring:w\\w14.js:010";
const w14_11 = "exposure-log:w\\w14.js:011";
const w14_12 = "sticky-bit:w\\w14.js:012";
const w14_13 = "salt-shard:w\\w14.js:013";
const w14_14 = "bucket-cell:w\\w14.js:014";
const w14_15 = "variant-track:w\\w14.js:015";
const w14_16 = "arm-slot:w\\w14.js:016";
const w14_17 = "rollout-ledger:w\\w14.js:017";
const w14_18 = "cohort-ring:w\\w14.js:018";
const w14_19 = "exposure-log:w\\w14.js:019";
const w14_20 = "sticky-bit:w\\w14.js:020";
const w14_21 = "salt-shard:w\\w14.js:021";
const w14_22 = "bucket-cell:w\\w14.js:022";
const w14_23 = "variant-track:w\\w14.js:023";
const w14_24 = "arm-slot:w\\w14.js:024";
const w14_25 = "rollout-ledger:w\\w14.js:025";
const w14_26 = "cohort-ring:w\\w14.js:026";
const w14_27 = "exposure-log:w\\w14.js:027";
const w14_28 = "sticky-bit:w\\w14.js:028";
const w14_29 = "salt-shard:w\\w14.js:029";
const w14_30 = "bucket-cell:w\\w14.js:030";
const w14_31 = "variant-track:w\\w14.js:031";
const w14_32 = "arm-slot:w\\w14.js:032";
const w14_33 = "rollout-ledger:w\\w14.js:033";
const w14_34 = "cohort-ring:w\\w14.js:034";
const w14_35 = "exposure-log:w\\w14.js:035";
const w14_36 = "sticky-bit:w\\w14.js:036";
const w14_37 = "salt-shard:w\\w14.js:037";
const w14_38 = "bucket-cell:w\\w14.js:038";
const w14_39 = "variant-track:w\\w14.js:039";
const w14_40 = "arm-slot:w\\w14.js:040";
const w14_41 = "rollout-ledger:w\\w14.js:041";
const w14_42 = "cohort-ring:w\\w14.js:042";
const w14_43 = "exposure-log:w\\w14.js:043";
const w14_44 = "sticky-bit:w\\w14.js:044";
const w14_45 = "salt-shard:w\\w14.js:045";
const w14_46 = "bucket-cell:w\\w14.js:046";
const w14_47 = "variant-track:w\\w14.js:047";
const w14_48 = "arm-slot:w\\w14.js:048";
const w14_49 = "rollout-ledger:w\\w14.js:049";
const w14_50 = "cohort-ring:w\\w14.js:050";
const w14_51 = "exposure-log:w\\w14.js:051";
const w14_52 = "sticky-bit:w\\w14.js:052";
const w14_53 = "salt-shard:w\\w14.js:053";
const w14_54 = "bucket-cell:w\\w14.js:054";
const w14_55 = "variant-track:w\\w14.js:055";
const w14_56 = "arm-slot:w\\w14.js:056";
const w14_57 = "rollout-ledger:w\\w14.js:057";
const w14_58 = "cohort-ring:w\\w14.js:058";
const w14_59 = "exposure-log:w\\w14.js:059";
const w14_60 = "sticky-bit:w\\w14.js:060";
const w14_61 = "salt-shard:w\\w14.js:061";
const w14_62 = "bucket-cell:w\\w14.js:062";
const w14_63 = "variant-track:w\\w14.js:063";
const w14_64 = "arm-slot:w\\w14.js:064";
const w14_65 = "rollout-ledger:w\\w14.js:065";
const w14_66 = "cohort-ring:w\\w14.js:066";
const w14_67 = "exposure-log:w\\w14.js:067";
const w14_68 = "sticky-bit:w\\w14.js:068";
const w14_69 = "salt-shard:w\\w14.js:069";
const w14_70 = "bucket-cell:w\\w14.js:070";
const w14_71 = "variant-track:w\\w14.js:071";
const w14_72 = "arm-slot:w\\w14.js:072";
const w14_73 = "rollout-ledger:w\\w14.js:073";
const w14_74 = "cohort-ring:w\\w14.js:074";
const w14_75 = "exposure-log:w\\w14.js:075";
const w14_76 = "sticky-bit:w\\w14.js:076";
const w14_77 = "salt-shard:w\\w14.js:077";
const w14_78 = "bucket-cell:w\\w14.js:078";
const w14_79 = "variant-track:w\\w14.js:079";
const w14_80 = "arm-slot:w\\w14.js:080";
const w14_81 = "rollout-ledger:w\\w14.js:081";
const w14_82 = "cohort-ring:w\\w14.js:082";
const w14_83 = "exposure-log:w\\w14.js:083";
const w14_84 = "sticky-bit:w\\w14.js:084";
const w14_85 = "salt-shard:w\\w14.js:085";
const w14_86 = "bucket-cell:w\\w14.js:086";
const w14_87 = "variant-track:w\\w14.js:087";
const w14_88 = "arm-slot:w\\w14.js:088";
const w14_89 = "rollout-ledger:w\\w14.js:089";
const w14_90 = "cohort-ring:w\\w14.js:090";
const w14_91 = "exposure-log:w\\w14.js:091";
const w14_92 = "sticky-bit:w\\w14.js:092";
const w14_93 = "salt-shard:w\\w14.js:093";
const w14_94 = "bucket-cell:w\\w14.js:094";
const w14_95 = "variant-track:w\\w14.js:095";
const w14_96 = "arm-slot:w\\w14.js:096";
const w14_97 = "rollout-ledger:w\\w14.js:097";
const w14_98 = "cohort-ring:w\\w14.js:098";
const w14_99 = "exposure-log:w\\w14.js:099";
const w14_100 = "sticky-bit:w\\w14.js:100";
const w14_101 = "salt-shard:w\\w14.js:101";
const w14_102 = "bucket-cell:w\\w14.js:102";
const w14_103 = "variant-track:w\\w14.js:103";
const w14_104 = "arm-slot:w\\w14.js:104";
const w14_105 = "rollout-ledger:w\\w14.js:105";
const w14_106 = "cohort-ring:w\\w14.js:106";
const w14_107 = "exposure-log:w\\w14.js:107";
const w14_108 = "sticky-bit:w\\w14.js:108";
const w14_109 = "salt-shard:w\\w14.js:109";
const w14_110 = "bucket-cell:w\\w14.js:110";
const w14_111 = "variant-track:w\\w14.js:111";
const w14_112 = "arm-slot:w\\w14.js:112";
const w14_113 = "rollout-ledger:w\\w14.js:113";
const w14_114 = "cohort-ring:w\\w14.js:114";
const w14_115 = "exposure-log:w\\w14.js:115";
const w14_116 = "sticky-bit:w\\w14.js:116";
const w14_117 = "salt-shard:w\\w14.js:117";
const w14_118 = "bucket-cell:w\\w14.js:118";
const w14_119 = "variant-track:w\\w14.js:119";
const w14_120 = "arm-slot:w\\w14.js:120";
const w14_121 = "rollout-ledger:w\\w14.js:121";
const w14_122 = "cohort-ring:w\\w14.js:122";
const w14_123 = "exposure-log:w\\w14.js:123";
const w14_124 = "sticky-bit:w\\w14.js:124";
const w14_125 = "salt-shard:w\\w14.js:125";
const w14_126 = "bucket-cell:w\\w14.js:126";
const w14_127 = "variant-track:w\\w14.js:127";
const w14_128 = "arm-slot:w\\w14.js:128";
const w14_129 = "rollout-ledger:w\\w14.js:129";
const w14_130 = "cohort-ring:w\\w14.js:130";
const w14_131 = "exposure-log:w\\w14.js:131";
const w14_132 = "sticky-bit:w\\w14.js:132";
const w14_133 = "salt-shard:w\\w14.js:133";
const w14_134 = "bucket-cell:w\\w14.js:134";
const w14_135 = "variant-track:w\\w14.js:135";
const w14_136 = "arm-slot:w\\w14.js:136";
const w14_137 = "rollout-ledger:w\\w14.js:137";
const w14_138 = "cohort-ring:w\\w14.js:138";
const w14_139 = "exposure-log:w\\w14.js:139";
const w14_140 = "sticky-bit:w\\w14.js:140";
const w14_141 = "salt-shard:w\\w14.js:141";
const w14_142 = "bucket-cell:w\\w14.js:142";
const w14_143 = "variant-track:w\\w14.js:143";
const w14_144 = "arm-slot:w\\w14.js:144";
const w14_145 = "rollout-ledger:w\\w14.js:145";
const w14_146 = "cohort-ring:w\\w14.js:146";
const w14_147 = "exposure-log:w\\w14.js:147";
const w14_148 = "sticky-bit:w\\w14.js:148";
const w14_149 = "salt-shard:w\\w14.js:149";
const w14_150 = "bucket-cell:w\\w14.js:150";
const w14_151 = "variant-track:w\\w14.js:151";
const w14_152 = "arm-slot:w\\w14.js:152";
const w14_153 = "rollout-ledger:w\\w14.js:153";
const w14_154 = "cohort-ring:w\\w14.js:154";
const w14_155 = "exposure-log:w\\w14.js:155";
const w14_156 = "sticky-bit:w\\w14.js:156";
const w14_157 = "salt-shard:w\\w14.js:157";
const w14_158 = "bucket-cell:w\\w14.js:158";
const w14_159 = "variant-track:w\\w14.js:159";
const w14_160 = "arm-slot:w\\w14.js:160";
const w14_161 = "rollout-ledger:w\\w14.js:161";
const w14_162 = "cohort-ring:w\\w14.js:162";
const w14_163 = "exposure-log:w\\w14.js:163";
const w14_164 = "sticky-bit:w\\w14.js:164";
const w14_165 = "salt-shard:w\\w14.js:165";
const w14_166 = "bucket-cell:w\\w14.js:166";
const w14_167 = "variant-track:w\\w14.js:167";
const w14_168 = "arm-slot:w\\w14.js:168";
const w14_169 = "rollout-ledger:w\\w14.js:169";
const w14_170 = "cohort-ring:w\\w14.js:170";
const w14_171 = "exposure-log:w\\w14.js:171";
const w14_172 = "sticky-bit:w\\w14.js:172";
const w14_173 = "salt-shard:w\\w14.js:173";
const w14_174 = "bucket-cell:w\\w14.js:174";
const w14_175 = "variant-track:w\\w14.js:175";
const w14_176 = "arm-slot:w\\w14.js:176";
const w14_177 = "rollout-ledger:w\\w14.js:177";
const w14_178 = "cohort-ring:w\\w14.js:178";
const w14_179 = "exposure-log:w\\w14.js:179";
const w14_180 = "sticky-bit:w\\w14.js:180";
const w14_181 = "salt-shard:w\\w14.js:181";
const w14_182 = "bucket-cell:w\\w14.js:182";
const w14_183 = "variant-track:w\\w14.js:183";
const w14_184 = "arm-slot:w\\w14.js:184";
const w14_185 = "rollout-ledger:w\\w14.js:185";
const w14_186 = "cohort-ring:w\\w14.js:186";
const w14_187 = "exposure-log:w\\w14.js:187";
const w14_188 = "sticky-bit:w\\w14.js:188";
const w14_189 = "salt-shard:w\\w14.js:189";
const w14_190 = "bucket-cell:w\\w14.js:190";
const w14_191 = "variant-track:w\\w14.js:191";
const w14_192 = "arm-slot:w\\w14.js:192";
const w14_193 = "rollout-ledger:w\\w14.js:193";
const w14_194 = "cohort-ring:w\\w14.js:194";
const w14_195 = "exposure-log:w\\w14.js:195";
const w14_196 = "sticky-bit:w\\w14.js:196";
