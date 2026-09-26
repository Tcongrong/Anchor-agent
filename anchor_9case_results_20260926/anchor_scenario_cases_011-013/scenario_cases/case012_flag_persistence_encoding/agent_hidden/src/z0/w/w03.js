const moduleName = "w03";
const modulePurpose = "registers scope-bound sources for the store grid";
export class ScopeRegistry {
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
export function createScopeRegistryModel(source = {}) {
  const model = new ScopeRegistry(source.seed || moduleName);
  const defaults = [
    makePaneRow("ScopeR 0-0", "registers scope-bound sources for the store grid row 0", "note"),
    makePaneRow("ScopeR 1-1", "registers scope-bound sources for the store grid row 1", "button"),
    makePaneRow("ScopeR 2-2", "registers scope-bound sources for the store grid row 2", "field"),
    makePaneRow("ScopeR 3-0", "registers scope-bound sources for the store grid row 3", "status"),
    makePaneRow("ScopeR 4-1", "registers scope-bound sources for the store grid row 4", "note"),
    makePaneRow("ScopeR 5-2", "registers scope-bound sources for the store grid row 5", "button"),
    makePaneRow("ScopeR 6-0", "registers scope-bound sources for the store grid row 6", "field"),
    makePaneRow("ScopeR 7-1", "registers scope-bound sources for the store grid row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeScopeRegistry(source = {}) {
  const model = createScopeRegistryModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountScopeRegistry(target, source = {}) {
  const summary = summarizeScopeRegistry(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w03_openLedger_00(state = {}) {
  const label = normalizeLabel(state.label || "openLedger");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openLedger" };
}
export function w03_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w03_queueStage_02(state = {}) {
  const label = normalizeLabel(state.label || "queueStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueStage" };
}
export function w03_cancelStage_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelStage" };
}
export function w03_updateRing_04(state = {}) {
  const label = normalizeLabel(state.label || "updateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateRing" };
}
export function w03_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w03_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w03_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w03_pushRoll_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRoll" };
}
export function w03_popRoll_09(state = {}) {
  const label = normalizeLabel(state.label || "popRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRoll" };
}
export function w03_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w03_expandSlot_11(state = {}) {
  const label = normalizeLabel(state.label || "expandSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandSlot" };
}
export function w03_collapseSlot_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseSlot" };
}
export function w03_toggleSticky_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleSticky");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleSticky" };
}
export function w03_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w03_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w03_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w03_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w03_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w03_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w03_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w03_hydrateSlots_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateSlots" };
}
export function w03_drainSlots_22(state = {}) {
  const label = normalizeLabel(state.label || "drainSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainSlots" };
}
export function w03_indexSlots_23(state = {}) {
  const label = normalizeLabel(state.label || "indexSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexSlots" };
}
export function w03_pruneSlots_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneSlots" };
}
export function w03_sealVault_25(state = {}) {
  const label = normalizeLabel(state.label || "sealVault");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealVault" };
}
export function w03_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w03_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w03_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w03_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w03_0 = "arm-slot:w\\w03.js:000";
const w03_1 = "rollout-ledger:w\\w03.js:001";
const w03_2 = "cohort-ring:w\\w03.js:002";
const w03_3 = "exposure-log:w\\w03.js:003";
const w03_4 = "sticky-bit:w\\w03.js:004";
const w03_5 = "salt-shard:w\\w03.js:005";
const w03_6 = "bucket-cell:w\\w03.js:006";
const w03_7 = "variant-track:w\\w03.js:007";
const w03_8 = "arm-slot:w\\w03.js:008";
const w03_9 = "rollout-ledger:w\\w03.js:009";
const w03_10 = "cohort-ring:w\\w03.js:010";
const w03_11 = "exposure-log:w\\w03.js:011";
const w03_12 = "sticky-bit:w\\w03.js:012";
const w03_13 = "salt-shard:w\\w03.js:013";
const w03_14 = "bucket-cell:w\\w03.js:014";
const w03_15 = "variant-track:w\\w03.js:015";
const w03_16 = "arm-slot:w\\w03.js:016";
const w03_17 = "rollout-ledger:w\\w03.js:017";
const w03_18 = "cohort-ring:w\\w03.js:018";
const w03_19 = "exposure-log:w\\w03.js:019";
const w03_20 = "sticky-bit:w\\w03.js:020";
const w03_21 = "salt-shard:w\\w03.js:021";
const w03_22 = "bucket-cell:w\\w03.js:022";
const w03_23 = "variant-track:w\\w03.js:023";
const w03_24 = "arm-slot:w\\w03.js:024";
const w03_25 = "rollout-ledger:w\\w03.js:025";
const w03_26 = "cohort-ring:w\\w03.js:026";
const w03_27 = "exposure-log:w\\w03.js:027";
const w03_28 = "sticky-bit:w\\w03.js:028";
const w03_29 = "salt-shard:w\\w03.js:029";
const w03_30 = "bucket-cell:w\\w03.js:030";
const w03_31 = "variant-track:w\\w03.js:031";
const w03_32 = "arm-slot:w\\w03.js:032";
const w03_33 = "rollout-ledger:w\\w03.js:033";
const w03_34 = "cohort-ring:w\\w03.js:034";
const w03_35 = "exposure-log:w\\w03.js:035";
const w03_36 = "sticky-bit:w\\w03.js:036";
const w03_37 = "salt-shard:w\\w03.js:037";
const w03_38 = "bucket-cell:w\\w03.js:038";
const w03_39 = "variant-track:w\\w03.js:039";
const w03_40 = "arm-slot:w\\w03.js:040";
const w03_41 = "rollout-ledger:w\\w03.js:041";
const w03_42 = "cohort-ring:w\\w03.js:042";
const w03_43 = "exposure-log:w\\w03.js:043";
const w03_44 = "sticky-bit:w\\w03.js:044";
const w03_45 = "salt-shard:w\\w03.js:045";
const w03_46 = "bucket-cell:w\\w03.js:046";
const w03_47 = "variant-track:w\\w03.js:047";
const w03_48 = "arm-slot:w\\w03.js:048";
const w03_49 = "rollout-ledger:w\\w03.js:049";
const w03_50 = "cohort-ring:w\\w03.js:050";
const w03_51 = "exposure-log:w\\w03.js:051";
const w03_52 = "sticky-bit:w\\w03.js:052";
const w03_53 = "salt-shard:w\\w03.js:053";
const w03_54 = "bucket-cell:w\\w03.js:054";
const w03_55 = "variant-track:w\\w03.js:055";
const w03_56 = "arm-slot:w\\w03.js:056";
const w03_57 = "rollout-ledger:w\\w03.js:057";
const w03_58 = "cohort-ring:w\\w03.js:058";
const w03_59 = "exposure-log:w\\w03.js:059";
const w03_60 = "sticky-bit:w\\w03.js:060";
const w03_61 = "salt-shard:w\\w03.js:061";
const w03_62 = "bucket-cell:w\\w03.js:062";
const w03_63 = "variant-track:w\\w03.js:063";
const w03_64 = "arm-slot:w\\w03.js:064";
const w03_65 = "rollout-ledger:w\\w03.js:065";
const w03_66 = "cohort-ring:w\\w03.js:066";
const w03_67 = "exposure-log:w\\w03.js:067";
const w03_68 = "sticky-bit:w\\w03.js:068";
const w03_69 = "salt-shard:w\\w03.js:069";
const w03_70 = "bucket-cell:w\\w03.js:070";
const w03_71 = "variant-track:w\\w03.js:071";
const w03_72 = "arm-slot:w\\w03.js:072";
const w03_73 = "rollout-ledger:w\\w03.js:073";
const w03_74 = "cohort-ring:w\\w03.js:074";
const w03_75 = "exposure-log:w\\w03.js:075";
const w03_76 = "sticky-bit:w\\w03.js:076";
const w03_77 = "salt-shard:w\\w03.js:077";
const w03_78 = "bucket-cell:w\\w03.js:078";
const w03_79 = "variant-track:w\\w03.js:079";
const w03_80 = "arm-slot:w\\w03.js:080";
const w03_81 = "rollout-ledger:w\\w03.js:081";
const w03_82 = "cohort-ring:w\\w03.js:082";
const w03_83 = "exposure-log:w\\w03.js:083";
const w03_84 = "sticky-bit:w\\w03.js:084";
const w03_85 = "salt-shard:w\\w03.js:085";
const w03_86 = "bucket-cell:w\\w03.js:086";
const w03_87 = "variant-track:w\\w03.js:087";
const w03_88 = "arm-slot:w\\w03.js:088";
const w03_89 = "rollout-ledger:w\\w03.js:089";
const w03_90 = "cohort-ring:w\\w03.js:090";
const w03_91 = "exposure-log:w\\w03.js:091";
const w03_92 = "sticky-bit:w\\w03.js:092";
const w03_93 = "salt-shard:w\\w03.js:093";
const w03_94 = "bucket-cell:w\\w03.js:094";
const w03_95 = "variant-track:w\\w03.js:095";
const w03_96 = "arm-slot:w\\w03.js:096";
const w03_97 = "rollout-ledger:w\\w03.js:097";
const w03_98 = "cohort-ring:w\\w03.js:098";
const w03_99 = "exposure-log:w\\w03.js:099";
const w03_100 = "sticky-bit:w\\w03.js:100";
const w03_101 = "salt-shard:w\\w03.js:101";
const w03_102 = "bucket-cell:w\\w03.js:102";
const w03_103 = "variant-track:w\\w03.js:103";
const w03_104 = "arm-slot:w\\w03.js:104";
const w03_105 = "rollout-ledger:w\\w03.js:105";
const w03_106 = "cohort-ring:w\\w03.js:106";
const w03_107 = "exposure-log:w\\w03.js:107";
const w03_108 = "sticky-bit:w\\w03.js:108";
const w03_109 = "salt-shard:w\\w03.js:109";
const w03_110 = "bucket-cell:w\\w03.js:110";
const w03_111 = "variant-track:w\\w03.js:111";
const w03_112 = "arm-slot:w\\w03.js:112";
const w03_113 = "rollout-ledger:w\\w03.js:113";
const w03_114 = "cohort-ring:w\\w03.js:114";
const w03_115 = "exposure-log:w\\w03.js:115";
const w03_116 = "sticky-bit:w\\w03.js:116";
const w03_117 = "salt-shard:w\\w03.js:117";
const w03_118 = "bucket-cell:w\\w03.js:118";
const w03_119 = "variant-track:w\\w03.js:119";
const w03_120 = "arm-slot:w\\w03.js:120";
const w03_121 = "rollout-ledger:w\\w03.js:121";
const w03_122 = "cohort-ring:w\\w03.js:122";
const w03_123 = "exposure-log:w\\w03.js:123";
const w03_124 = "sticky-bit:w\\w03.js:124";
const w03_125 = "salt-shard:w\\w03.js:125";
const w03_126 = "bucket-cell:w\\w03.js:126";
const w03_127 = "variant-track:w\\w03.js:127";
const w03_128 = "arm-slot:w\\w03.js:128";
const w03_129 = "rollout-ledger:w\\w03.js:129";
const w03_130 = "cohort-ring:w\\w03.js:130";
const w03_131 = "exposure-log:w\\w03.js:131";
const w03_132 = "sticky-bit:w\\w03.js:132";
const w03_133 = "salt-shard:w\\w03.js:133";
const w03_134 = "bucket-cell:w\\w03.js:134";
const w03_135 = "variant-track:w\\w03.js:135";
const w03_136 = "arm-slot:w\\w03.js:136";
const w03_137 = "rollout-ledger:w\\w03.js:137";
const w03_138 = "cohort-ring:w\\w03.js:138";
const w03_139 = "exposure-log:w\\w03.js:139";
const w03_140 = "sticky-bit:w\\w03.js:140";
const w03_141 = "salt-shard:w\\w03.js:141";
const w03_142 = "bucket-cell:w\\w03.js:142";
const w03_143 = "variant-track:w\\w03.js:143";
const w03_144 = "arm-slot:w\\w03.js:144";
const w03_145 = "rollout-ledger:w\\w03.js:145";
const w03_146 = "cohort-ring:w\\w03.js:146";
const w03_147 = "exposure-log:w\\w03.js:147";
const w03_148 = "sticky-bit:w\\w03.js:148";
const w03_149 = "salt-shard:w\\w03.js:149";
const w03_150 = "bucket-cell:w\\w03.js:150";
const w03_151 = "variant-track:w\\w03.js:151";
const w03_152 = "arm-slot:w\\w03.js:152";
const w03_153 = "rollout-ledger:w\\w03.js:153";
const w03_154 = "cohort-ring:w\\w03.js:154";
const w03_155 = "exposure-log:w\\w03.js:155";
const w03_156 = "sticky-bit:w\\w03.js:156";
const w03_157 = "salt-shard:w\\w03.js:157";
const w03_158 = "bucket-cell:w\\w03.js:158";
const w03_159 = "variant-track:w\\w03.js:159";
const w03_160 = "arm-slot:w\\w03.js:160";
const w03_161 = "rollout-ledger:w\\w03.js:161";
const w03_162 = "cohort-ring:w\\w03.js:162";
const w03_163 = "exposure-log:w\\w03.js:163";
const w03_164 = "sticky-bit:w\\w03.js:164";
const w03_165 = "salt-shard:w\\w03.js:165";
const w03_166 = "bucket-cell:w\\w03.js:166";
const w03_167 = "variant-track:w\\w03.js:167";
const w03_168 = "arm-slot:w\\w03.js:168";
const w03_169 = "rollout-ledger:w\\w03.js:169";
const w03_170 = "cohort-ring:w\\w03.js:170";
const w03_171 = "exposure-log:w\\w03.js:171";
const w03_172 = "sticky-bit:w\\w03.js:172";
const w03_173 = "salt-shard:w\\w03.js:173";
const w03_174 = "bucket-cell:w\\w03.js:174";
const w03_175 = "variant-track:w\\w03.js:175";
const w03_176 = "arm-slot:w\\w03.js:176";
const w03_177 = "rollout-ledger:w\\w03.js:177";
const w03_178 = "cohort-ring:w\\w03.js:178";
const w03_179 = "exposure-log:w\\w03.js:179";
const w03_180 = "sticky-bit:w\\w03.js:180";
const w03_181 = "salt-shard:w\\w03.js:181";
const w03_182 = "bucket-cell:w\\w03.js:182";
const w03_183 = "variant-track:w\\w03.js:183";
const w03_184 = "arm-slot:w\\w03.js:184";
const w03_185 = "rollout-ledger:w\\w03.js:185";
const w03_186 = "cohort-ring:w\\w03.js:186";
const w03_187 = "exposure-log:w\\w03.js:187";
const w03_188 = "sticky-bit:w\\w03.js:188";
const w03_189 = "salt-shard:w\\w03.js:189";
const w03_190 = "bucket-cell:w\\w03.js:190";
const w03_191 = "variant-track:w\\w03.js:191";
const w03_192 = "arm-slot:w\\w03.js:192";
const w03_193 = "rollout-ledger:w\\w03.js:193";
const w03_194 = "cohort-ring:w\\w03.js:194";
const w03_195 = "exposure-log:w\\w03.js:195";
const w03_196 = "sticky-bit:w\\w03.js:196";
