const moduleName = "w15";
const modulePurpose = "renders document properties for exposure reports";
export class PropSheet {
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
export function createPropSheetModel(source = {}) {
  const model = new PropSheet(source.seed || moduleName);
  const defaults = [
    makePaneRow("PropSh 0-0", "renders document properties for exposure reports row 0", "note"),
    makePaneRow("PropSh 1-1", "renders document properties for exposure reports row 1", "button"),
    makePaneRow("PropSh 2-2", "renders document properties for exposure reports row 2", "field"),
    makePaneRow("PropSh 3-0", "renders document properties for exposure reports row 3", "status"),
    makePaneRow("PropSh 4-1", "renders document properties for exposure reports row 4", "note"),
    makePaneRow("PropSh 5-2", "renders document properties for exposure reports row 5", "button"),
    makePaneRow("PropSh 6-0", "renders document properties for exposure reports row 6", "field"),
    makePaneRow("PropSh 7-1", "renders document properties for exposure reports row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizePropSheet(source = {}) {
  const model = createPropSheetModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountPropSheet(target, source = {}) {
  const summary = summarizePropSheet(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w15_openDesk_00(state = {}) {
  const label = normalizeLabel(state.label || "openDesk");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDesk" };
}
export function w15_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w15_queueFlush_02(state = {}) {
  const label = normalizeLabel(state.label || "queueFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueFlush" };
}
export function w15_cancelFlush_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelFlush" };
}
export function w15_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w15_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w15_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w15_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w15_pushEcho_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEcho" };
}
export function w15_popEcho_09(state = {}) {
  const label = normalizeLabel(state.label || "popEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEcho" };
}
export function w15_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w15_expandArm_11(state = {}) {
  const label = normalizeLabel(state.label || "expandArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandArm" };
}
export function w15_collapseArm_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseArm" };
}
export function w15_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w15_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w15_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w15_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w15_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w15_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w15_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w15_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w15_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w15_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w15_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w15_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w15_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w15_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w15_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w15_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w15_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w15_0 = "exposure-echo:w\\w15.js:000";
const w15_1 = "flag-lane:w\\w15.js:001";
const w15_2 = "arm-ring:w\\w15.js:002";
const w15_3 = "cohort-mark:w\\w15.js:003";
const w15_4 = "digest-shard:w\\w15.js:004";
const w15_5 = "rollout-pin:w\\w15.js:005";
const w15_6 = "bucket-track:w\\w15.js:006";
const w15_7 = "variant-slot:w\\w15.js:007";
const w15_8 = "exposure-echo:w\\w15.js:008";
const w15_9 = "flag-lane:w\\w15.js:009";
const w15_10 = "arm-ring:w\\w15.js:010";
const w15_11 = "cohort-mark:w\\w15.js:011";
const w15_12 = "digest-shard:w\\w15.js:012";
const w15_13 = "rollout-pin:w\\w15.js:013";
const w15_14 = "bucket-track:w\\w15.js:014";
const w15_15 = "variant-slot:w\\w15.js:015";
const w15_16 = "exposure-echo:w\\w15.js:016";
const w15_17 = "flag-lane:w\\w15.js:017";
const w15_18 = "arm-ring:w\\w15.js:018";
const w15_19 = "cohort-mark:w\\w15.js:019";
const w15_20 = "digest-shard:w\\w15.js:020";
const w15_21 = "rollout-pin:w\\w15.js:021";
const w15_22 = "bucket-track:w\\w15.js:022";
const w15_23 = "variant-slot:w\\w15.js:023";
const w15_24 = "exposure-echo:w\\w15.js:024";
const w15_25 = "flag-lane:w\\w15.js:025";
const w15_26 = "arm-ring:w\\w15.js:026";
const w15_27 = "cohort-mark:w\\w15.js:027";
const w15_28 = "digest-shard:w\\w15.js:028";
const w15_29 = "rollout-pin:w\\w15.js:029";
const w15_30 = "bucket-track:w\\w15.js:030";
const w15_31 = "variant-slot:w\\w15.js:031";
const w15_32 = "exposure-echo:w\\w15.js:032";
const w15_33 = "flag-lane:w\\w15.js:033";
const w15_34 = "arm-ring:w\\w15.js:034";
const w15_35 = "cohort-mark:w\\w15.js:035";
const w15_36 = "digest-shard:w\\w15.js:036";
const w15_37 = "rollout-pin:w\\w15.js:037";
const w15_38 = "bucket-track:w\\w15.js:038";
const w15_39 = "variant-slot:w\\w15.js:039";
const w15_40 = "exposure-echo:w\\w15.js:040";
const w15_41 = "flag-lane:w\\w15.js:041";
const w15_42 = "arm-ring:w\\w15.js:042";
const w15_43 = "cohort-mark:w\\w15.js:043";
const w15_44 = "digest-shard:w\\w15.js:044";
const w15_45 = "rollout-pin:w\\w15.js:045";
const w15_46 = "bucket-track:w\\w15.js:046";
const w15_47 = "variant-slot:w\\w15.js:047";
const w15_48 = "exposure-echo:w\\w15.js:048";
const w15_49 = "flag-lane:w\\w15.js:049";
const w15_50 = "arm-ring:w\\w15.js:050";
const w15_51 = "cohort-mark:w\\w15.js:051";
const w15_52 = "digest-shard:w\\w15.js:052";
const w15_53 = "rollout-pin:w\\w15.js:053";
const w15_54 = "bucket-track:w\\w15.js:054";
const w15_55 = "variant-slot:w\\w15.js:055";
const w15_56 = "exposure-echo:w\\w15.js:056";
const w15_57 = "flag-lane:w\\w15.js:057";
const w15_58 = "arm-ring:w\\w15.js:058";
const w15_59 = "cohort-mark:w\\w15.js:059";
const w15_60 = "digest-shard:w\\w15.js:060";
const w15_61 = "rollout-pin:w\\w15.js:061";
const w15_62 = "bucket-track:w\\w15.js:062";
const w15_63 = "variant-slot:w\\w15.js:063";
const w15_64 = "exposure-echo:w\\w15.js:064";
const w15_65 = "flag-lane:w\\w15.js:065";
const w15_66 = "arm-ring:w\\w15.js:066";
const w15_67 = "cohort-mark:w\\w15.js:067";
const w15_68 = "digest-shard:w\\w15.js:068";
const w15_69 = "rollout-pin:w\\w15.js:069";
const w15_70 = "bucket-track:w\\w15.js:070";
const w15_71 = "variant-slot:w\\w15.js:071";
const w15_72 = "exposure-echo:w\\w15.js:072";
const w15_73 = "flag-lane:w\\w15.js:073";
const w15_74 = "arm-ring:w\\w15.js:074";
const w15_75 = "cohort-mark:w\\w15.js:075";
const w15_76 = "digest-shard:w\\w15.js:076";
const w15_77 = "rollout-pin:w\\w15.js:077";
const w15_78 = "bucket-track:w\\w15.js:078";
const w15_79 = "variant-slot:w\\w15.js:079";
const w15_80 = "exposure-echo:w\\w15.js:080";
const w15_81 = "flag-lane:w\\w15.js:081";
const w15_82 = "arm-ring:w\\w15.js:082";
const w15_83 = "cohort-mark:w\\w15.js:083";
const w15_84 = "digest-shard:w\\w15.js:084";
const w15_85 = "rollout-pin:w\\w15.js:085";
const w15_86 = "bucket-track:w\\w15.js:086";
const w15_87 = "variant-slot:w\\w15.js:087";
const w15_88 = "exposure-echo:w\\w15.js:088";
const w15_89 = "flag-lane:w\\w15.js:089";
const w15_90 = "arm-ring:w\\w15.js:090";
const w15_91 = "cohort-mark:w\\w15.js:091";
const w15_92 = "digest-shard:w\\w15.js:092";
const w15_93 = "rollout-pin:w\\w15.js:093";
const w15_94 = "bucket-track:w\\w15.js:094";
const w15_95 = "variant-slot:w\\w15.js:095";
const w15_96 = "exposure-echo:w\\w15.js:096";
const w15_97 = "flag-lane:w\\w15.js:097";
const w15_98 = "arm-ring:w\\w15.js:098";
const w15_99 = "cohort-mark:w\\w15.js:099";
const w15_100 = "digest-shard:w\\w15.js:100";
const w15_101 = "rollout-pin:w\\w15.js:101";
const w15_102 = "bucket-track:w\\w15.js:102";
const w15_103 = "variant-slot:w\\w15.js:103";
const w15_104 = "exposure-echo:w\\w15.js:104";
const w15_105 = "flag-lane:w\\w15.js:105";
const w15_106 = "arm-ring:w\\w15.js:106";
const w15_107 = "cohort-mark:w\\w15.js:107";
const w15_108 = "digest-shard:w\\w15.js:108";
const w15_109 = "rollout-pin:w\\w15.js:109";
const w15_110 = "bucket-track:w\\w15.js:110";
const w15_111 = "variant-slot:w\\w15.js:111";
const w15_112 = "exposure-echo:w\\w15.js:112";
const w15_113 = "flag-lane:w\\w15.js:113";
const w15_114 = "arm-ring:w\\w15.js:114";
const w15_115 = "cohort-mark:w\\w15.js:115";
const w15_116 = "digest-shard:w\\w15.js:116";
const w15_117 = "rollout-pin:w\\w15.js:117";
const w15_118 = "bucket-track:w\\w15.js:118";
const w15_119 = "variant-slot:w\\w15.js:119";
const w15_120 = "exposure-echo:w\\w15.js:120";
const w15_121 = "flag-lane:w\\w15.js:121";
const w15_122 = "arm-ring:w\\w15.js:122";
const w15_123 = "cohort-mark:w\\w15.js:123";
const w15_124 = "digest-shard:w\\w15.js:124";
const w15_125 = "rollout-pin:w\\w15.js:125";
const w15_126 = "bucket-track:w\\w15.js:126";
const w15_127 = "variant-slot:w\\w15.js:127";
const w15_128 = "exposure-echo:w\\w15.js:128";
const w15_129 = "flag-lane:w\\w15.js:129";
const w15_130 = "arm-ring:w\\w15.js:130";
const w15_131 = "cohort-mark:w\\w15.js:131";
const w15_132 = "digest-shard:w\\w15.js:132";
const w15_133 = "rollout-pin:w\\w15.js:133";
const w15_134 = "bucket-track:w\\w15.js:134";
const w15_135 = "variant-slot:w\\w15.js:135";
const w15_136 = "exposure-echo:w\\w15.js:136";
const w15_137 = "flag-lane:w\\w15.js:137";
const w15_138 = "arm-ring:w\\w15.js:138";
const w15_139 = "cohort-mark:w\\w15.js:139";
const w15_140 = "digest-shard:w\\w15.js:140";
const w15_141 = "rollout-pin:w\\w15.js:141";
const w15_142 = "bucket-track:w\\w15.js:142";
const w15_143 = "variant-slot:w\\w15.js:143";
const w15_144 = "exposure-echo:w\\w15.js:144";
const w15_145 = "flag-lane:w\\w15.js:145";
const w15_146 = "arm-ring:w\\w15.js:146";
const w15_147 = "cohort-mark:w\\w15.js:147";
const w15_148 = "digest-shard:w\\w15.js:148";
const w15_149 = "rollout-pin:w\\w15.js:149";
const w15_150 = "bucket-track:w\\w15.js:150";
const w15_151 = "variant-slot:w\\w15.js:151";
const w15_152 = "exposure-echo:w\\w15.js:152";
const w15_153 = "flag-lane:w\\w15.js:153";
const w15_154 = "arm-ring:w\\w15.js:154";
const w15_155 = "cohort-mark:w\\w15.js:155";
const w15_156 = "digest-shard:w\\w15.js:156";
const w15_157 = "rollout-pin:w\\w15.js:157";
const w15_158 = "bucket-track:w\\w15.js:158";
const w15_159 = "variant-slot:w\\w15.js:159";
const w15_160 = "exposure-echo:w\\w15.js:160";
const w15_161 = "flag-lane:w\\w15.js:161";
const w15_162 = "arm-ring:w\\w15.js:162";
const w15_163 = "cohort-mark:w\\w15.js:163";
const w15_164 = "digest-shard:w\\w15.js:164";
const w15_165 = "rollout-pin:w\\w15.js:165";
const w15_166 = "bucket-track:w\\w15.js:166";
const w15_167 = "variant-slot:w\\w15.js:167";
const w15_168 = "exposure-echo:w\\w15.js:168";
const w15_169 = "flag-lane:w\\w15.js:169";
const w15_170 = "arm-ring:w\\w15.js:170";
const w15_171 = "cohort-mark:w\\w15.js:171";
const w15_172 = "digest-shard:w\\w15.js:172";
const w15_173 = "rollout-pin:w\\w15.js:173";
const w15_174 = "bucket-track:w\\w15.js:174";
const w15_175 = "variant-slot:w\\w15.js:175";
const w15_176 = "exposure-echo:w\\w15.js:176";
const w15_177 = "flag-lane:w\\w15.js:177";
const w15_178 = "arm-ring:w\\w15.js:178";
const w15_179 = "cohort-mark:w\\w15.js:179";
const w15_180 = "digest-shard:w\\w15.js:180";
const w15_181 = "rollout-pin:w\\w15.js:181";
const w15_182 = "bucket-track:w\\w15.js:182";
const w15_183 = "variant-slot:w\\w15.js:183";
const w15_184 = "exposure-echo:w\\w15.js:184";
const w15_185 = "flag-lane:w\\w15.js:185";
const w15_186 = "arm-ring:w\\w15.js:186";
const w15_187 = "cohort-mark:w\\w15.js:187";
const w15_188 = "digest-shard:w\\w15.js:188";
const w15_189 = "rollout-pin:w\\w15.js:189";
const w15_190 = "bucket-track:w\\w15.js:190";
const w15_191 = "variant-slot:w\\w15.js:191";
const w15_192 = "exposure-echo:w\\w15.js:192";
const w15_193 = "flag-lane:w\\w15.js:193";
const w15_194 = "arm-ring:w\\w15.js:194";
const w15_195 = "cohort-mark:w\\w15.js:195";
const w15_196 = "digest-shard:w\\w15.js:196";
