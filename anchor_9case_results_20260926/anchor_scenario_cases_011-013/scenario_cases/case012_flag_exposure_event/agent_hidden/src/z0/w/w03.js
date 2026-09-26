const moduleName = "w03";
const modulePurpose = "catalogs arm-ring definitions for flag panels";
export class ArmCatalog {
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
export function createArmCatalogModel(source = {}) {
  const model = new ArmCatalog(source.seed || moduleName);
  const defaults = [
    makePaneRow("ArmCat 0-0", "catalogs arm-ring definitions for flag panels row 0", "note"),
    makePaneRow("ArmCat 1-1", "catalogs arm-ring definitions for flag panels row 1", "button"),
    makePaneRow("ArmCat 2-2", "catalogs arm-ring definitions for flag panels row 2", "field"),
    makePaneRow("ArmCat 3-0", "catalogs arm-ring definitions for flag panels row 3", "status"),
    makePaneRow("ArmCat 4-1", "catalogs arm-ring definitions for flag panels row 4", "note"),
    makePaneRow("ArmCat 5-2", "catalogs arm-ring definitions for flag panels row 5", "button"),
    makePaneRow("ArmCat 6-0", "catalogs arm-ring definitions for flag panels row 6", "field"),
    makePaneRow("ArmCat 7-1", "catalogs arm-ring definitions for flag panels row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeArmCatalog(source = {}) {
  const model = createArmCatalogModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountArmCatalog(target, source = {}) {
  const summary = summarizeArmCatalog(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w03_openDesk_00(state = {}) {
  const label = normalizeLabel(state.label || "openDesk");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDesk" };
}
export function w03_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w03_queueFlush_02(state = {}) {
  const label = normalizeLabel(state.label || "queueFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueFlush" };
}
export function w03_cancelFlush_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelFlush" };
}
export function w03_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
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
export function w03_pushEcho_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEcho" };
}
export function w03_popEcho_09(state = {}) {
  const label = normalizeLabel(state.label || "popEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEcho" };
}
export function w03_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w03_expandArm_11(state = {}) {
  const label = normalizeLabel(state.label || "expandArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandArm" };
}
export function w03_collapseArm_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseArm" };
}
export function w03_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
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
export function w03_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w03_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w03_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w03_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w03_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
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
const w03_0 = "exposure-echo:w\\w03.js:000";
const w03_1 = "flag-lane:w\\w03.js:001";
const w03_2 = "arm-ring:w\\w03.js:002";
const w03_3 = "cohort-mark:w\\w03.js:003";
const w03_4 = "digest-shard:w\\w03.js:004";
const w03_5 = "rollout-pin:w\\w03.js:005";
const w03_6 = "bucket-track:w\\w03.js:006";
const w03_7 = "variant-slot:w\\w03.js:007";
const w03_8 = "exposure-echo:w\\w03.js:008";
const w03_9 = "flag-lane:w\\w03.js:009";
const w03_10 = "arm-ring:w\\w03.js:010";
const w03_11 = "cohort-mark:w\\w03.js:011";
const w03_12 = "digest-shard:w\\w03.js:012";
const w03_13 = "rollout-pin:w\\w03.js:013";
const w03_14 = "bucket-track:w\\w03.js:014";
const w03_15 = "variant-slot:w\\w03.js:015";
const w03_16 = "exposure-echo:w\\w03.js:016";
const w03_17 = "flag-lane:w\\w03.js:017";
const w03_18 = "arm-ring:w\\w03.js:018";
const w03_19 = "cohort-mark:w\\w03.js:019";
const w03_20 = "digest-shard:w\\w03.js:020";
const w03_21 = "rollout-pin:w\\w03.js:021";
const w03_22 = "bucket-track:w\\w03.js:022";
const w03_23 = "variant-slot:w\\w03.js:023";
const w03_24 = "exposure-echo:w\\w03.js:024";
const w03_25 = "flag-lane:w\\w03.js:025";
const w03_26 = "arm-ring:w\\w03.js:026";
const w03_27 = "cohort-mark:w\\w03.js:027";
const w03_28 = "digest-shard:w\\w03.js:028";
const w03_29 = "rollout-pin:w\\w03.js:029";
const w03_30 = "bucket-track:w\\w03.js:030";
const w03_31 = "variant-slot:w\\w03.js:031";
const w03_32 = "exposure-echo:w\\w03.js:032";
const w03_33 = "flag-lane:w\\w03.js:033";
const w03_34 = "arm-ring:w\\w03.js:034";
const w03_35 = "cohort-mark:w\\w03.js:035";
const w03_36 = "digest-shard:w\\w03.js:036";
const w03_37 = "rollout-pin:w\\w03.js:037";
const w03_38 = "bucket-track:w\\w03.js:038";
const w03_39 = "variant-slot:w\\w03.js:039";
const w03_40 = "exposure-echo:w\\w03.js:040";
const w03_41 = "flag-lane:w\\w03.js:041";
const w03_42 = "arm-ring:w\\w03.js:042";
const w03_43 = "cohort-mark:w\\w03.js:043";
const w03_44 = "digest-shard:w\\w03.js:044";
const w03_45 = "rollout-pin:w\\w03.js:045";
const w03_46 = "bucket-track:w\\w03.js:046";
const w03_47 = "variant-slot:w\\w03.js:047";
const w03_48 = "exposure-echo:w\\w03.js:048";
const w03_49 = "flag-lane:w\\w03.js:049";
const w03_50 = "arm-ring:w\\w03.js:050";
const w03_51 = "cohort-mark:w\\w03.js:051";
const w03_52 = "digest-shard:w\\w03.js:052";
const w03_53 = "rollout-pin:w\\w03.js:053";
const w03_54 = "bucket-track:w\\w03.js:054";
const w03_55 = "variant-slot:w\\w03.js:055";
const w03_56 = "exposure-echo:w\\w03.js:056";
const w03_57 = "flag-lane:w\\w03.js:057";
const w03_58 = "arm-ring:w\\w03.js:058";
const w03_59 = "cohort-mark:w\\w03.js:059";
const w03_60 = "digest-shard:w\\w03.js:060";
const w03_61 = "rollout-pin:w\\w03.js:061";
const w03_62 = "bucket-track:w\\w03.js:062";
const w03_63 = "variant-slot:w\\w03.js:063";
const w03_64 = "exposure-echo:w\\w03.js:064";
const w03_65 = "flag-lane:w\\w03.js:065";
const w03_66 = "arm-ring:w\\w03.js:066";
const w03_67 = "cohort-mark:w\\w03.js:067";
const w03_68 = "digest-shard:w\\w03.js:068";
const w03_69 = "rollout-pin:w\\w03.js:069";
const w03_70 = "bucket-track:w\\w03.js:070";
const w03_71 = "variant-slot:w\\w03.js:071";
const w03_72 = "exposure-echo:w\\w03.js:072";
const w03_73 = "flag-lane:w\\w03.js:073";
const w03_74 = "arm-ring:w\\w03.js:074";
const w03_75 = "cohort-mark:w\\w03.js:075";
const w03_76 = "digest-shard:w\\w03.js:076";
const w03_77 = "rollout-pin:w\\w03.js:077";
const w03_78 = "bucket-track:w\\w03.js:078";
const w03_79 = "variant-slot:w\\w03.js:079";
const w03_80 = "exposure-echo:w\\w03.js:080";
const w03_81 = "flag-lane:w\\w03.js:081";
const w03_82 = "arm-ring:w\\w03.js:082";
const w03_83 = "cohort-mark:w\\w03.js:083";
const w03_84 = "digest-shard:w\\w03.js:084";
const w03_85 = "rollout-pin:w\\w03.js:085";
const w03_86 = "bucket-track:w\\w03.js:086";
const w03_87 = "variant-slot:w\\w03.js:087";
const w03_88 = "exposure-echo:w\\w03.js:088";
const w03_89 = "flag-lane:w\\w03.js:089";
const w03_90 = "arm-ring:w\\w03.js:090";
const w03_91 = "cohort-mark:w\\w03.js:091";
const w03_92 = "digest-shard:w\\w03.js:092";
const w03_93 = "rollout-pin:w\\w03.js:093";
const w03_94 = "bucket-track:w\\w03.js:094";
const w03_95 = "variant-slot:w\\w03.js:095";
const w03_96 = "exposure-echo:w\\w03.js:096";
const w03_97 = "flag-lane:w\\w03.js:097";
const w03_98 = "arm-ring:w\\w03.js:098";
const w03_99 = "cohort-mark:w\\w03.js:099";
const w03_100 = "digest-shard:w\\w03.js:100";
const w03_101 = "rollout-pin:w\\w03.js:101";
const w03_102 = "bucket-track:w\\w03.js:102";
const w03_103 = "variant-slot:w\\w03.js:103";
const w03_104 = "exposure-echo:w\\w03.js:104";
const w03_105 = "flag-lane:w\\w03.js:105";
const w03_106 = "arm-ring:w\\w03.js:106";
const w03_107 = "cohort-mark:w\\w03.js:107";
const w03_108 = "digest-shard:w\\w03.js:108";
const w03_109 = "rollout-pin:w\\w03.js:109";
const w03_110 = "bucket-track:w\\w03.js:110";
const w03_111 = "variant-slot:w\\w03.js:111";
const w03_112 = "exposure-echo:w\\w03.js:112";
const w03_113 = "flag-lane:w\\w03.js:113";
const w03_114 = "arm-ring:w\\w03.js:114";
const w03_115 = "cohort-mark:w\\w03.js:115";
const w03_116 = "digest-shard:w\\w03.js:116";
const w03_117 = "rollout-pin:w\\w03.js:117";
const w03_118 = "bucket-track:w\\w03.js:118";
const w03_119 = "variant-slot:w\\w03.js:119";
const w03_120 = "exposure-echo:w\\w03.js:120";
const w03_121 = "flag-lane:w\\w03.js:121";
const w03_122 = "arm-ring:w\\w03.js:122";
const w03_123 = "cohort-mark:w\\w03.js:123";
const w03_124 = "digest-shard:w\\w03.js:124";
const w03_125 = "rollout-pin:w\\w03.js:125";
const w03_126 = "bucket-track:w\\w03.js:126";
const w03_127 = "variant-slot:w\\w03.js:127";
const w03_128 = "exposure-echo:w\\w03.js:128";
const w03_129 = "flag-lane:w\\w03.js:129";
const w03_130 = "arm-ring:w\\w03.js:130";
const w03_131 = "cohort-mark:w\\w03.js:131";
const w03_132 = "digest-shard:w\\w03.js:132";
const w03_133 = "rollout-pin:w\\w03.js:133";
const w03_134 = "bucket-track:w\\w03.js:134";
const w03_135 = "variant-slot:w\\w03.js:135";
const w03_136 = "exposure-echo:w\\w03.js:136";
const w03_137 = "flag-lane:w\\w03.js:137";
const w03_138 = "arm-ring:w\\w03.js:138";
const w03_139 = "cohort-mark:w\\w03.js:139";
const w03_140 = "digest-shard:w\\w03.js:140";
const w03_141 = "rollout-pin:w\\w03.js:141";
const w03_142 = "bucket-track:w\\w03.js:142";
const w03_143 = "variant-slot:w\\w03.js:143";
const w03_144 = "exposure-echo:w\\w03.js:144";
const w03_145 = "flag-lane:w\\w03.js:145";
const w03_146 = "arm-ring:w\\w03.js:146";
const w03_147 = "cohort-mark:w\\w03.js:147";
const w03_148 = "digest-shard:w\\w03.js:148";
const w03_149 = "rollout-pin:w\\w03.js:149";
const w03_150 = "bucket-track:w\\w03.js:150";
const w03_151 = "variant-slot:w\\w03.js:151";
const w03_152 = "exposure-echo:w\\w03.js:152";
const w03_153 = "flag-lane:w\\w03.js:153";
const w03_154 = "arm-ring:w\\w03.js:154";
const w03_155 = "cohort-mark:w\\w03.js:155";
const w03_156 = "digest-shard:w\\w03.js:156";
const w03_157 = "rollout-pin:w\\w03.js:157";
const w03_158 = "bucket-track:w\\w03.js:158";
const w03_159 = "variant-slot:w\\w03.js:159";
const w03_160 = "exposure-echo:w\\w03.js:160";
const w03_161 = "flag-lane:w\\w03.js:161";
const w03_162 = "arm-ring:w\\w03.js:162";
const w03_163 = "cohort-mark:w\\w03.js:163";
const w03_164 = "digest-shard:w\\w03.js:164";
const w03_165 = "rollout-pin:w\\w03.js:165";
const w03_166 = "bucket-track:w\\w03.js:166";
const w03_167 = "variant-slot:w\\w03.js:167";
const w03_168 = "exposure-echo:w\\w03.js:168";
const w03_169 = "flag-lane:w\\w03.js:169";
const w03_170 = "arm-ring:w\\w03.js:170";
const w03_171 = "cohort-mark:w\\w03.js:171";
const w03_172 = "digest-shard:w\\w03.js:172";
const w03_173 = "rollout-pin:w\\w03.js:173";
const w03_174 = "bucket-track:w\\w03.js:174";
const w03_175 = "variant-slot:w\\w03.js:175";
const w03_176 = "exposure-echo:w\\w03.js:176";
const w03_177 = "flag-lane:w\\w03.js:177";
const w03_178 = "arm-ring:w\\w03.js:178";
const w03_179 = "cohort-mark:w\\w03.js:179";
const w03_180 = "digest-shard:w\\w03.js:180";
const w03_181 = "rollout-pin:w\\w03.js:181";
const w03_182 = "bucket-track:w\\w03.js:182";
const w03_183 = "variant-slot:w\\w03.js:183";
const w03_184 = "exposure-echo:w\\w03.js:184";
const w03_185 = "flag-lane:w\\w03.js:185";
const w03_186 = "arm-ring:w\\w03.js:186";
const w03_187 = "cohort-mark:w\\w03.js:187";
const w03_188 = "digest-shard:w\\w03.js:188";
const w03_189 = "rollout-pin:w\\w03.js:189";
const w03_190 = "bucket-track:w\\w03.js:190";
const w03_191 = "variant-slot:w\\w03.js:191";
const w03_192 = "exposure-echo:w\\w03.js:192";
const w03_193 = "flag-lane:w\\w03.js:193";
const w03_194 = "arm-ring:w\\w03.js:194";
const w03_195 = "cohort-mark:w\\w03.js:195";
const w03_196 = "digest-shard:w\\w03.js:196";
