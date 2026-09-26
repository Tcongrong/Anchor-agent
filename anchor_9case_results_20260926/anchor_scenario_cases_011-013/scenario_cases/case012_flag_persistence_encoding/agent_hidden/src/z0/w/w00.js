const moduleName = "w00";
const modulePurpose = "records rollout stage rows for the assignment store";
export class RolloutLedger {
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
export function createRolloutLedgerModel(source = {}) {
  const model = new RolloutLedger(source.seed || moduleName);
  const defaults = [
    makePaneRow("Rollou 0-0", "records rollout stage rows for the assignment store row 0", "note"),
    makePaneRow("Rollou 1-1", "records rollout stage rows for the assignment store row 1", "button"),
    makePaneRow("Rollou 2-2", "records rollout stage rows for the assignment store row 2", "field"),
    makePaneRow("Rollou 3-0", "records rollout stage rows for the assignment store row 3", "status"),
    makePaneRow("Rollou 4-1", "records rollout stage rows for the assignment store row 4", "note"),
    makePaneRow("Rollou 5-2", "records rollout stage rows for the assignment store row 5", "button"),
    makePaneRow("Rollou 6-0", "records rollout stage rows for the assignment store row 6", "field"),
    makePaneRow("Rollou 7-1", "records rollout stage rows for the assignment store row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeRolloutLedger(source = {}) {
  const model = createRolloutLedgerModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountRolloutLedger(target, source = {}) {
  const summary = summarizeRolloutLedger(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w00_openLedger_00(state = {}) {
  const label = normalizeLabel(state.label || "openLedger");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openLedger" };
}
export function w00_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w00_queueStage_02(state = {}) {
  const label = normalizeLabel(state.label || "queueStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueStage" };
}
export function w00_cancelStage_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelStage" };
}
export function w00_updateRing_04(state = {}) {
  const label = normalizeLabel(state.label || "updateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateRing" };
}
export function w00_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w00_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w00_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w00_pushRoll_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRoll" };
}
export function w00_popRoll_09(state = {}) {
  const label = normalizeLabel(state.label || "popRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRoll" };
}
export function w00_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w00_expandSlot_11(state = {}) {
  const label = normalizeLabel(state.label || "expandSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandSlot" };
}
export function w00_collapseSlot_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseSlot" };
}
export function w00_toggleSticky_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleSticky");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleSticky" };
}
export function w00_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w00_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w00_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w00_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w00_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w00_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w00_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w00_hydrateSlots_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateSlots" };
}
export function w00_drainSlots_22(state = {}) {
  const label = normalizeLabel(state.label || "drainSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainSlots" };
}
export function w00_indexSlots_23(state = {}) {
  const label = normalizeLabel(state.label || "indexSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexSlots" };
}
export function w00_pruneSlots_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneSlots" };
}
export function w00_sealVault_25(state = {}) {
  const label = normalizeLabel(state.label || "sealVault");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealVault" };
}
export function w00_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w00_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w00_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w00_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w00_0 = "arm-slot:w\\w00.js:000";
const w00_1 = "rollout-ledger:w\\w00.js:001";
const w00_2 = "cohort-ring:w\\w00.js:002";
const w00_3 = "exposure-log:w\\w00.js:003";
const w00_4 = "sticky-bit:w\\w00.js:004";
const w00_5 = "salt-shard:w\\w00.js:005";
const w00_6 = "bucket-cell:w\\w00.js:006";
const w00_7 = "variant-track:w\\w00.js:007";
const w00_8 = "arm-slot:w\\w00.js:008";
const w00_9 = "rollout-ledger:w\\w00.js:009";
const w00_10 = "cohort-ring:w\\w00.js:010";
const w00_11 = "exposure-log:w\\w00.js:011";
const w00_12 = "sticky-bit:w\\w00.js:012";
const w00_13 = "salt-shard:w\\w00.js:013";
const w00_14 = "bucket-cell:w\\w00.js:014";
const w00_15 = "variant-track:w\\w00.js:015";
const w00_16 = "arm-slot:w\\w00.js:016";
const w00_17 = "rollout-ledger:w\\w00.js:017";
const w00_18 = "cohort-ring:w\\w00.js:018";
const w00_19 = "exposure-log:w\\w00.js:019";
const w00_20 = "sticky-bit:w\\w00.js:020";
const w00_21 = "salt-shard:w\\w00.js:021";
const w00_22 = "bucket-cell:w\\w00.js:022";
const w00_23 = "variant-track:w\\w00.js:023";
const w00_24 = "arm-slot:w\\w00.js:024";
const w00_25 = "rollout-ledger:w\\w00.js:025";
const w00_26 = "cohort-ring:w\\w00.js:026";
const w00_27 = "exposure-log:w\\w00.js:027";
const w00_28 = "sticky-bit:w\\w00.js:028";
const w00_29 = "salt-shard:w\\w00.js:029";
const w00_30 = "bucket-cell:w\\w00.js:030";
const w00_31 = "variant-track:w\\w00.js:031";
const w00_32 = "arm-slot:w\\w00.js:032";
const w00_33 = "rollout-ledger:w\\w00.js:033";
const w00_34 = "cohort-ring:w\\w00.js:034";
const w00_35 = "exposure-log:w\\w00.js:035";
const w00_36 = "sticky-bit:w\\w00.js:036";
const w00_37 = "salt-shard:w\\w00.js:037";
const w00_38 = "bucket-cell:w\\w00.js:038";
const w00_39 = "variant-track:w\\w00.js:039";
const w00_40 = "arm-slot:w\\w00.js:040";
const w00_41 = "rollout-ledger:w\\w00.js:041";
const w00_42 = "cohort-ring:w\\w00.js:042";
const w00_43 = "exposure-log:w\\w00.js:043";
const w00_44 = "sticky-bit:w\\w00.js:044";
const w00_45 = "salt-shard:w\\w00.js:045";
const w00_46 = "bucket-cell:w\\w00.js:046";
const w00_47 = "variant-track:w\\w00.js:047";
const w00_48 = "arm-slot:w\\w00.js:048";
const w00_49 = "rollout-ledger:w\\w00.js:049";
const w00_50 = "cohort-ring:w\\w00.js:050";
const w00_51 = "exposure-log:w\\w00.js:051";
const w00_52 = "sticky-bit:w\\w00.js:052";
const w00_53 = "salt-shard:w\\w00.js:053";
const w00_54 = "bucket-cell:w\\w00.js:054";
const w00_55 = "variant-track:w\\w00.js:055";
const w00_56 = "arm-slot:w\\w00.js:056";
const w00_57 = "rollout-ledger:w\\w00.js:057";
const w00_58 = "cohort-ring:w\\w00.js:058";
const w00_59 = "exposure-log:w\\w00.js:059";
const w00_60 = "sticky-bit:w\\w00.js:060";
const w00_61 = "salt-shard:w\\w00.js:061";
const w00_62 = "bucket-cell:w\\w00.js:062";
const w00_63 = "variant-track:w\\w00.js:063";
const w00_64 = "arm-slot:w\\w00.js:064";
const w00_65 = "rollout-ledger:w\\w00.js:065";
const w00_66 = "cohort-ring:w\\w00.js:066";
const w00_67 = "exposure-log:w\\w00.js:067";
const w00_68 = "sticky-bit:w\\w00.js:068";
const w00_69 = "salt-shard:w\\w00.js:069";
const w00_70 = "bucket-cell:w\\w00.js:070";
const w00_71 = "variant-track:w\\w00.js:071";
const w00_72 = "arm-slot:w\\w00.js:072";
const w00_73 = "rollout-ledger:w\\w00.js:073";
const w00_74 = "cohort-ring:w\\w00.js:074";
const w00_75 = "exposure-log:w\\w00.js:075";
const w00_76 = "sticky-bit:w\\w00.js:076";
const w00_77 = "salt-shard:w\\w00.js:077";
const w00_78 = "bucket-cell:w\\w00.js:078";
const w00_79 = "variant-track:w\\w00.js:079";
const w00_80 = "arm-slot:w\\w00.js:080";
const w00_81 = "rollout-ledger:w\\w00.js:081";
const w00_82 = "cohort-ring:w\\w00.js:082";
const w00_83 = "exposure-log:w\\w00.js:083";
const w00_84 = "sticky-bit:w\\w00.js:084";
const w00_85 = "salt-shard:w\\w00.js:085";
const w00_86 = "bucket-cell:w\\w00.js:086";
const w00_87 = "variant-track:w\\w00.js:087";
const w00_88 = "arm-slot:w\\w00.js:088";
const w00_89 = "rollout-ledger:w\\w00.js:089";
const w00_90 = "cohort-ring:w\\w00.js:090";
const w00_91 = "exposure-log:w\\w00.js:091";
const w00_92 = "sticky-bit:w\\w00.js:092";
const w00_93 = "salt-shard:w\\w00.js:093";
const w00_94 = "bucket-cell:w\\w00.js:094";
const w00_95 = "variant-track:w\\w00.js:095";
const w00_96 = "arm-slot:w\\w00.js:096";
const w00_97 = "rollout-ledger:w\\w00.js:097";
const w00_98 = "cohort-ring:w\\w00.js:098";
const w00_99 = "exposure-log:w\\w00.js:099";
const w00_100 = "sticky-bit:w\\w00.js:100";
const w00_101 = "salt-shard:w\\w00.js:101";
const w00_102 = "bucket-cell:w\\w00.js:102";
const w00_103 = "variant-track:w\\w00.js:103";
const w00_104 = "arm-slot:w\\w00.js:104";
const w00_105 = "rollout-ledger:w\\w00.js:105";
const w00_106 = "cohort-ring:w\\w00.js:106";
const w00_107 = "exposure-log:w\\w00.js:107";
const w00_108 = "sticky-bit:w\\w00.js:108";
const w00_109 = "salt-shard:w\\w00.js:109";
const w00_110 = "bucket-cell:w\\w00.js:110";
const w00_111 = "variant-track:w\\w00.js:111";
const w00_112 = "arm-slot:w\\w00.js:112";
const w00_113 = "rollout-ledger:w\\w00.js:113";
const w00_114 = "cohort-ring:w\\w00.js:114";
const w00_115 = "exposure-log:w\\w00.js:115";
const w00_116 = "sticky-bit:w\\w00.js:116";
const w00_117 = "salt-shard:w\\w00.js:117";
const w00_118 = "bucket-cell:w\\w00.js:118";
const w00_119 = "variant-track:w\\w00.js:119";
const w00_120 = "arm-slot:w\\w00.js:120";
const w00_121 = "rollout-ledger:w\\w00.js:121";
const w00_122 = "cohort-ring:w\\w00.js:122";
const w00_123 = "exposure-log:w\\w00.js:123";
const w00_124 = "sticky-bit:w\\w00.js:124";
const w00_125 = "salt-shard:w\\w00.js:125";
const w00_126 = "bucket-cell:w\\w00.js:126";
const w00_127 = "variant-track:w\\w00.js:127";
const w00_128 = "arm-slot:w\\w00.js:128";
const w00_129 = "rollout-ledger:w\\w00.js:129";
const w00_130 = "cohort-ring:w\\w00.js:130";
const w00_131 = "exposure-log:w\\w00.js:131";
const w00_132 = "sticky-bit:w\\w00.js:132";
const w00_133 = "salt-shard:w\\w00.js:133";
const w00_134 = "bucket-cell:w\\w00.js:134";
const w00_135 = "variant-track:w\\w00.js:135";
const w00_136 = "arm-slot:w\\w00.js:136";
const w00_137 = "rollout-ledger:w\\w00.js:137";
const w00_138 = "cohort-ring:w\\w00.js:138";
const w00_139 = "exposure-log:w\\w00.js:139";
const w00_140 = "sticky-bit:w\\w00.js:140";
const w00_141 = "salt-shard:w\\w00.js:141";
const w00_142 = "bucket-cell:w\\w00.js:142";
const w00_143 = "variant-track:w\\w00.js:143";
const w00_144 = "arm-slot:w\\w00.js:144";
const w00_145 = "rollout-ledger:w\\w00.js:145";
const w00_146 = "cohort-ring:w\\w00.js:146";
const w00_147 = "exposure-log:w\\w00.js:147";
const w00_148 = "sticky-bit:w\\w00.js:148";
const w00_149 = "salt-shard:w\\w00.js:149";
const w00_150 = "bucket-cell:w\\w00.js:150";
const w00_151 = "variant-track:w\\w00.js:151";
const w00_152 = "arm-slot:w\\w00.js:152";
const w00_153 = "rollout-ledger:w\\w00.js:153";
const w00_154 = "cohort-ring:w\\w00.js:154";
const w00_155 = "exposure-log:w\\w00.js:155";
const w00_156 = "sticky-bit:w\\w00.js:156";
const w00_157 = "salt-shard:w\\w00.js:157";
const w00_158 = "bucket-cell:w\\w00.js:158";
const w00_159 = "variant-track:w\\w00.js:159";
const w00_160 = "arm-slot:w\\w00.js:160";
const w00_161 = "rollout-ledger:w\\w00.js:161";
const w00_162 = "cohort-ring:w\\w00.js:162";
const w00_163 = "exposure-log:w\\w00.js:163";
const w00_164 = "sticky-bit:w\\w00.js:164";
const w00_165 = "salt-shard:w\\w00.js:165";
const w00_166 = "bucket-cell:w\\w00.js:166";
const w00_167 = "variant-track:w\\w00.js:167";
const w00_168 = "arm-slot:w\\w00.js:168";
const w00_169 = "rollout-ledger:w\\w00.js:169";
const w00_170 = "cohort-ring:w\\w00.js:170";
const w00_171 = "exposure-log:w\\w00.js:171";
const w00_172 = "sticky-bit:w\\w00.js:172";
const w00_173 = "salt-shard:w\\w00.js:173";
const w00_174 = "bucket-cell:w\\w00.js:174";
const w00_175 = "variant-track:w\\w00.js:175";
const w00_176 = "arm-slot:w\\w00.js:176";
const w00_177 = "rollout-ledger:w\\w00.js:177";
const w00_178 = "cohort-ring:w\\w00.js:178";
const w00_179 = "exposure-log:w\\w00.js:179";
const w00_180 = "sticky-bit:w\\w00.js:180";
const w00_181 = "salt-shard:w\\w00.js:181";
const w00_182 = "bucket-cell:w\\w00.js:182";
const w00_183 = "variant-track:w\\w00.js:183";
const w00_184 = "arm-slot:w\\w00.js:184";
const w00_185 = "rollout-ledger:w\\w00.js:185";
const w00_186 = "cohort-ring:w\\w00.js:186";
const w00_187 = "exposure-log:w\\w00.js:187";
const w00_188 = "sticky-bit:w\\w00.js:188";
const w00_189 = "salt-shard:w\\w00.js:189";
const w00_190 = "bucket-cell:w\\w00.js:190";
const w00_191 = "variant-track:w\\w00.js:191";
const w00_192 = "arm-slot:w\\w00.js:192";
const w00_193 = "rollout-ledger:w\\w00.js:193";
const w00_194 = "cohort-ring:w\\w00.js:194";
const w00_195 = "exposure-log:w\\w00.js:195";
const w00_196 = "sticky-bit:w\\w00.js:196";
