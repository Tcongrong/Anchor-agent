const moduleName = "w02";
const modulePurpose = "models signal-lane layout for the exposure console";
export class SignalLedger {
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
export function createSignalLedgerModel(source = {}) {
  const model = new SignalLedger(source.seed || moduleName);
  const defaults = [
    makePaneRow("Signal 0-0", "models signal-lane layout for the exposure console row 0", "note"),
    makePaneRow("Signal 1-1", "models signal-lane layout for the exposure console row 1", "button"),
    makePaneRow("Signal 2-2", "models signal-lane layout for the exposure console row 2", "field"),
    makePaneRow("Signal 3-0", "models signal-lane layout for the exposure console row 3", "status"),
    makePaneRow("Signal 4-1", "models signal-lane layout for the exposure console row 4", "note"),
    makePaneRow("Signal 5-2", "models signal-lane layout for the exposure console row 5", "button"),
    makePaneRow("Signal 6-0", "models signal-lane layout for the exposure console row 6", "field"),
    makePaneRow("Signal 7-1", "models signal-lane layout for the exposure console row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeSignalLedger(source = {}) {
  const model = createSignalLedgerModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountSignalLedger(target, source = {}) {
  const summary = summarizeSignalLedger(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w02_openDesk_00(state = {}) {
  const label = normalizeLabel(state.label || "openDesk");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDesk" };
}
export function w02_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w02_queueFlush_02(state = {}) {
  const label = normalizeLabel(state.label || "queueFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueFlush" };
}
export function w02_cancelFlush_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelFlush" };
}
export function w02_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w02_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w02_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w02_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w02_pushEcho_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEcho" };
}
export function w02_popEcho_09(state = {}) {
  const label = normalizeLabel(state.label || "popEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEcho" };
}
export function w02_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w02_expandArm_11(state = {}) {
  const label = normalizeLabel(state.label || "expandArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandArm" };
}
export function w02_collapseArm_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseArm" };
}
export function w02_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w02_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w02_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w02_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w02_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w02_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w02_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w02_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w02_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w02_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w02_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w02_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w02_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w02_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w02_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w02_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w02_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w02_0 = "exposure-echo:w\\w02.js:000";
const w02_1 = "flag-lane:w\\w02.js:001";
const w02_2 = "arm-ring:w\\w02.js:002";
const w02_3 = "cohort-mark:w\\w02.js:003";
const w02_4 = "digest-shard:w\\w02.js:004";
const w02_5 = "rollout-pin:w\\w02.js:005";
const w02_6 = "bucket-track:w\\w02.js:006";
const w02_7 = "variant-slot:w\\w02.js:007";
const w02_8 = "exposure-echo:w\\w02.js:008";
const w02_9 = "flag-lane:w\\w02.js:009";
const w02_10 = "arm-ring:w\\w02.js:010";
const w02_11 = "cohort-mark:w\\w02.js:011";
const w02_12 = "digest-shard:w\\w02.js:012";
const w02_13 = "rollout-pin:w\\w02.js:013";
const w02_14 = "bucket-track:w\\w02.js:014";
const w02_15 = "variant-slot:w\\w02.js:015";
const w02_16 = "exposure-echo:w\\w02.js:016";
const w02_17 = "flag-lane:w\\w02.js:017";
const w02_18 = "arm-ring:w\\w02.js:018";
const w02_19 = "cohort-mark:w\\w02.js:019";
const w02_20 = "digest-shard:w\\w02.js:020";
const w02_21 = "rollout-pin:w\\w02.js:021";
const w02_22 = "bucket-track:w\\w02.js:022";
const w02_23 = "variant-slot:w\\w02.js:023";
const w02_24 = "exposure-echo:w\\w02.js:024";
const w02_25 = "flag-lane:w\\w02.js:025";
const w02_26 = "arm-ring:w\\w02.js:026";
const w02_27 = "cohort-mark:w\\w02.js:027";
const w02_28 = "digest-shard:w\\w02.js:028";
const w02_29 = "rollout-pin:w\\w02.js:029";
const w02_30 = "bucket-track:w\\w02.js:030";
const w02_31 = "variant-slot:w\\w02.js:031";
const w02_32 = "exposure-echo:w\\w02.js:032";
const w02_33 = "flag-lane:w\\w02.js:033";
const w02_34 = "arm-ring:w\\w02.js:034";
const w02_35 = "cohort-mark:w\\w02.js:035";
const w02_36 = "digest-shard:w\\w02.js:036";
const w02_37 = "rollout-pin:w\\w02.js:037";
const w02_38 = "bucket-track:w\\w02.js:038";
const w02_39 = "variant-slot:w\\w02.js:039";
const w02_40 = "exposure-echo:w\\w02.js:040";
const w02_41 = "flag-lane:w\\w02.js:041";
const w02_42 = "arm-ring:w\\w02.js:042";
const w02_43 = "cohort-mark:w\\w02.js:043";
const w02_44 = "digest-shard:w\\w02.js:044";
const w02_45 = "rollout-pin:w\\w02.js:045";
const w02_46 = "bucket-track:w\\w02.js:046";
const w02_47 = "variant-slot:w\\w02.js:047";
const w02_48 = "exposure-echo:w\\w02.js:048";
const w02_49 = "flag-lane:w\\w02.js:049";
const w02_50 = "arm-ring:w\\w02.js:050";
const w02_51 = "cohort-mark:w\\w02.js:051";
const w02_52 = "digest-shard:w\\w02.js:052";
const w02_53 = "rollout-pin:w\\w02.js:053";
const w02_54 = "bucket-track:w\\w02.js:054";
const w02_55 = "variant-slot:w\\w02.js:055";
const w02_56 = "exposure-echo:w\\w02.js:056";
const w02_57 = "flag-lane:w\\w02.js:057";
const w02_58 = "arm-ring:w\\w02.js:058";
const w02_59 = "cohort-mark:w\\w02.js:059";
const w02_60 = "digest-shard:w\\w02.js:060";
const w02_61 = "rollout-pin:w\\w02.js:061";
const w02_62 = "bucket-track:w\\w02.js:062";
const w02_63 = "variant-slot:w\\w02.js:063";
const w02_64 = "exposure-echo:w\\w02.js:064";
const w02_65 = "flag-lane:w\\w02.js:065";
const w02_66 = "arm-ring:w\\w02.js:066";
const w02_67 = "cohort-mark:w\\w02.js:067";
const w02_68 = "digest-shard:w\\w02.js:068";
const w02_69 = "rollout-pin:w\\w02.js:069";
const w02_70 = "bucket-track:w\\w02.js:070";
const w02_71 = "variant-slot:w\\w02.js:071";
const w02_72 = "exposure-echo:w\\w02.js:072";
const w02_73 = "flag-lane:w\\w02.js:073";
const w02_74 = "arm-ring:w\\w02.js:074";
const w02_75 = "cohort-mark:w\\w02.js:075";
const w02_76 = "digest-shard:w\\w02.js:076";
const w02_77 = "rollout-pin:w\\w02.js:077";
const w02_78 = "bucket-track:w\\w02.js:078";
const w02_79 = "variant-slot:w\\w02.js:079";
const w02_80 = "exposure-echo:w\\w02.js:080";
const w02_81 = "flag-lane:w\\w02.js:081";
const w02_82 = "arm-ring:w\\w02.js:082";
const w02_83 = "cohort-mark:w\\w02.js:083";
const w02_84 = "digest-shard:w\\w02.js:084";
const w02_85 = "rollout-pin:w\\w02.js:085";
const w02_86 = "bucket-track:w\\w02.js:086";
const w02_87 = "variant-slot:w\\w02.js:087";
const w02_88 = "exposure-echo:w\\w02.js:088";
const w02_89 = "flag-lane:w\\w02.js:089";
const w02_90 = "arm-ring:w\\w02.js:090";
const w02_91 = "cohort-mark:w\\w02.js:091";
const w02_92 = "digest-shard:w\\w02.js:092";
const w02_93 = "rollout-pin:w\\w02.js:093";
const w02_94 = "bucket-track:w\\w02.js:094";
const w02_95 = "variant-slot:w\\w02.js:095";
const w02_96 = "exposure-echo:w\\w02.js:096";
const w02_97 = "flag-lane:w\\w02.js:097";
const w02_98 = "arm-ring:w\\w02.js:098";
const w02_99 = "cohort-mark:w\\w02.js:099";
const w02_100 = "digest-shard:w\\w02.js:100";
const w02_101 = "rollout-pin:w\\w02.js:101";
const w02_102 = "bucket-track:w\\w02.js:102";
const w02_103 = "variant-slot:w\\w02.js:103";
const w02_104 = "exposure-echo:w\\w02.js:104";
const w02_105 = "flag-lane:w\\w02.js:105";
const w02_106 = "arm-ring:w\\w02.js:106";
const w02_107 = "cohort-mark:w\\w02.js:107";
const w02_108 = "digest-shard:w\\w02.js:108";
const w02_109 = "rollout-pin:w\\w02.js:109";
const w02_110 = "bucket-track:w\\w02.js:110";
const w02_111 = "variant-slot:w\\w02.js:111";
const w02_112 = "exposure-echo:w\\w02.js:112";
const w02_113 = "flag-lane:w\\w02.js:113";
const w02_114 = "arm-ring:w\\w02.js:114";
const w02_115 = "cohort-mark:w\\w02.js:115";
const w02_116 = "digest-shard:w\\w02.js:116";
const w02_117 = "rollout-pin:w\\w02.js:117";
const w02_118 = "bucket-track:w\\w02.js:118";
const w02_119 = "variant-slot:w\\w02.js:119";
const w02_120 = "exposure-echo:w\\w02.js:120";
const w02_121 = "flag-lane:w\\w02.js:121";
const w02_122 = "arm-ring:w\\w02.js:122";
const w02_123 = "cohort-mark:w\\w02.js:123";
const w02_124 = "digest-shard:w\\w02.js:124";
const w02_125 = "rollout-pin:w\\w02.js:125";
const w02_126 = "bucket-track:w\\w02.js:126";
const w02_127 = "variant-slot:w\\w02.js:127";
const w02_128 = "exposure-echo:w\\w02.js:128";
const w02_129 = "flag-lane:w\\w02.js:129";
const w02_130 = "arm-ring:w\\w02.js:130";
const w02_131 = "cohort-mark:w\\w02.js:131";
const w02_132 = "digest-shard:w\\w02.js:132";
const w02_133 = "rollout-pin:w\\w02.js:133";
const w02_134 = "bucket-track:w\\w02.js:134";
const w02_135 = "variant-slot:w\\w02.js:135";
const w02_136 = "exposure-echo:w\\w02.js:136";
const w02_137 = "flag-lane:w\\w02.js:137";
const w02_138 = "arm-ring:w\\w02.js:138";
const w02_139 = "cohort-mark:w\\w02.js:139";
const w02_140 = "digest-shard:w\\w02.js:140";
const w02_141 = "rollout-pin:w\\w02.js:141";
const w02_142 = "bucket-track:w\\w02.js:142";
const w02_143 = "variant-slot:w\\w02.js:143";
const w02_144 = "exposure-echo:w\\w02.js:144";
const w02_145 = "flag-lane:w\\w02.js:145";
const w02_146 = "arm-ring:w\\w02.js:146";
const w02_147 = "cohort-mark:w\\w02.js:147";
const w02_148 = "digest-shard:w\\w02.js:148";
const w02_149 = "rollout-pin:w\\w02.js:149";
const w02_150 = "bucket-track:w\\w02.js:150";
const w02_151 = "variant-slot:w\\w02.js:151";
const w02_152 = "exposure-echo:w\\w02.js:152";
const w02_153 = "flag-lane:w\\w02.js:153";
const w02_154 = "arm-ring:w\\w02.js:154";
const w02_155 = "cohort-mark:w\\w02.js:155";
const w02_156 = "digest-shard:w\\w02.js:156";
const w02_157 = "rollout-pin:w\\w02.js:157";
const w02_158 = "bucket-track:w\\w02.js:158";
const w02_159 = "variant-slot:w\\w02.js:159";
const w02_160 = "exposure-echo:w\\w02.js:160";
const w02_161 = "flag-lane:w\\w02.js:161";
const w02_162 = "arm-ring:w\\w02.js:162";
const w02_163 = "cohort-mark:w\\w02.js:163";
const w02_164 = "digest-shard:w\\w02.js:164";
const w02_165 = "rollout-pin:w\\w02.js:165";
const w02_166 = "bucket-track:w\\w02.js:166";
const w02_167 = "variant-slot:w\\w02.js:167";
const w02_168 = "exposure-echo:w\\w02.js:168";
const w02_169 = "flag-lane:w\\w02.js:169";
const w02_170 = "arm-ring:w\\w02.js:170";
const w02_171 = "cohort-mark:w\\w02.js:171";
const w02_172 = "digest-shard:w\\w02.js:172";
const w02_173 = "rollout-pin:w\\w02.js:173";
const w02_174 = "bucket-track:w\\w02.js:174";
const w02_175 = "variant-slot:w\\w02.js:175";
const w02_176 = "exposure-echo:w\\w02.js:176";
const w02_177 = "flag-lane:w\\w02.js:177";
const w02_178 = "arm-ring:w\\w02.js:178";
const w02_179 = "cohort-mark:w\\w02.js:179";
const w02_180 = "digest-shard:w\\w02.js:180";
const w02_181 = "rollout-pin:w\\w02.js:181";
const w02_182 = "bucket-track:w\\w02.js:182";
const w02_183 = "variant-slot:w\\w02.js:183";
const w02_184 = "exposure-echo:w\\w02.js:184";
const w02_185 = "flag-lane:w\\w02.js:185";
const w02_186 = "arm-ring:w\\w02.js:186";
const w02_187 = "cohort-mark:w\\w02.js:187";
const w02_188 = "digest-shard:w\\w02.js:188";
const w02_189 = "rollout-pin:w\\w02.js:189";
const w02_190 = "bucket-track:w\\w02.js:190";
const w02_191 = "variant-slot:w\\w02.js:191";
const w02_192 = "exposure-echo:w\\w02.js:192";
const w02_193 = "flag-lane:w\\w02.js:193";
const w02_194 = "arm-ring:w\\w02.js:194";
const w02_195 = "cohort-mark:w\\w02.js:195";
const w02_196 = "digest-shard:w\\w02.js:196";
