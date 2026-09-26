const moduleName = "w14";
const modulePurpose = "catalogs static assets for the flag panes";
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
export function createAssetVaultModel(source = {}) {
  const model = new AssetVault(source.seed || moduleName);
  const defaults = [
    makePaneRow("AssetV 0-0", "catalogs static assets for the flag panes row 0", "note"),
    makePaneRow("AssetV 1-1", "catalogs static assets for the flag panes row 1", "button"),
    makePaneRow("AssetV 2-2", "catalogs static assets for the flag panes row 2", "field"),
    makePaneRow("AssetV 3-0", "catalogs static assets for the flag panes row 3", "status"),
    makePaneRow("AssetV 4-1", "catalogs static assets for the flag panes row 4", "note"),
    makePaneRow("AssetV 5-2", "catalogs static assets for the flag panes row 5", "button"),
    makePaneRow("AssetV 6-0", "catalogs static assets for the flag panes row 6", "field"),
    makePaneRow("AssetV 7-1", "catalogs static assets for the flag panes row 7", "status"),
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
export function w14_openDesk_00(state = {}) {
  const label = normalizeLabel(state.label || "openDesk");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDesk" };
}
export function w14_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w14_queueFlush_02(state = {}) {
  const label = normalizeLabel(state.label || "queueFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueFlush" };
}
export function w14_cancelFlush_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelFlush" };
}
export function w14_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
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
export function w14_pushEcho_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEcho" };
}
export function w14_popEcho_09(state = {}) {
  const label = normalizeLabel(state.label || "popEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEcho" };
}
export function w14_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w14_expandArm_11(state = {}) {
  const label = normalizeLabel(state.label || "expandArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandArm" };
}
export function w14_collapseArm_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseArm" };
}
export function w14_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
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
export function w14_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w14_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w14_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w14_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w14_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
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
const w14_0 = "exposure-echo:w\\w14.js:000";
const w14_1 = "flag-lane:w\\w14.js:001";
const w14_2 = "arm-ring:w\\w14.js:002";
const w14_3 = "cohort-mark:w\\w14.js:003";
const w14_4 = "digest-shard:w\\w14.js:004";
const w14_5 = "rollout-pin:w\\w14.js:005";
const w14_6 = "bucket-track:w\\w14.js:006";
const w14_7 = "variant-slot:w\\w14.js:007";
const w14_8 = "exposure-echo:w\\w14.js:008";
const w14_9 = "flag-lane:w\\w14.js:009";
const w14_10 = "arm-ring:w\\w14.js:010";
const w14_11 = "cohort-mark:w\\w14.js:011";
const w14_12 = "digest-shard:w\\w14.js:012";
const w14_13 = "rollout-pin:w\\w14.js:013";
const w14_14 = "bucket-track:w\\w14.js:014";
const w14_15 = "variant-slot:w\\w14.js:015";
const w14_16 = "exposure-echo:w\\w14.js:016";
const w14_17 = "flag-lane:w\\w14.js:017";
const w14_18 = "arm-ring:w\\w14.js:018";
const w14_19 = "cohort-mark:w\\w14.js:019";
const w14_20 = "digest-shard:w\\w14.js:020";
const w14_21 = "rollout-pin:w\\w14.js:021";
const w14_22 = "bucket-track:w\\w14.js:022";
const w14_23 = "variant-slot:w\\w14.js:023";
const w14_24 = "exposure-echo:w\\w14.js:024";
const w14_25 = "flag-lane:w\\w14.js:025";
const w14_26 = "arm-ring:w\\w14.js:026";
const w14_27 = "cohort-mark:w\\w14.js:027";
const w14_28 = "digest-shard:w\\w14.js:028";
const w14_29 = "rollout-pin:w\\w14.js:029";
const w14_30 = "bucket-track:w\\w14.js:030";
const w14_31 = "variant-slot:w\\w14.js:031";
const w14_32 = "exposure-echo:w\\w14.js:032";
const w14_33 = "flag-lane:w\\w14.js:033";
const w14_34 = "arm-ring:w\\w14.js:034";
const w14_35 = "cohort-mark:w\\w14.js:035";
const w14_36 = "digest-shard:w\\w14.js:036";
const w14_37 = "rollout-pin:w\\w14.js:037";
const w14_38 = "bucket-track:w\\w14.js:038";
const w14_39 = "variant-slot:w\\w14.js:039";
const w14_40 = "exposure-echo:w\\w14.js:040";
const w14_41 = "flag-lane:w\\w14.js:041";
const w14_42 = "arm-ring:w\\w14.js:042";
const w14_43 = "cohort-mark:w\\w14.js:043";
const w14_44 = "digest-shard:w\\w14.js:044";
const w14_45 = "rollout-pin:w\\w14.js:045";
const w14_46 = "bucket-track:w\\w14.js:046";
const w14_47 = "variant-slot:w\\w14.js:047";
const w14_48 = "exposure-echo:w\\w14.js:048";
const w14_49 = "flag-lane:w\\w14.js:049";
const w14_50 = "arm-ring:w\\w14.js:050";
const w14_51 = "cohort-mark:w\\w14.js:051";
const w14_52 = "digest-shard:w\\w14.js:052";
const w14_53 = "rollout-pin:w\\w14.js:053";
const w14_54 = "bucket-track:w\\w14.js:054";
const w14_55 = "variant-slot:w\\w14.js:055";
const w14_56 = "exposure-echo:w\\w14.js:056";
const w14_57 = "flag-lane:w\\w14.js:057";
const w14_58 = "arm-ring:w\\w14.js:058";
const w14_59 = "cohort-mark:w\\w14.js:059";
const w14_60 = "digest-shard:w\\w14.js:060";
const w14_61 = "rollout-pin:w\\w14.js:061";
const w14_62 = "bucket-track:w\\w14.js:062";
const w14_63 = "variant-slot:w\\w14.js:063";
const w14_64 = "exposure-echo:w\\w14.js:064";
const w14_65 = "flag-lane:w\\w14.js:065";
const w14_66 = "arm-ring:w\\w14.js:066";
const w14_67 = "cohort-mark:w\\w14.js:067";
const w14_68 = "digest-shard:w\\w14.js:068";
const w14_69 = "rollout-pin:w\\w14.js:069";
const w14_70 = "bucket-track:w\\w14.js:070";
const w14_71 = "variant-slot:w\\w14.js:071";
const w14_72 = "exposure-echo:w\\w14.js:072";
const w14_73 = "flag-lane:w\\w14.js:073";
const w14_74 = "arm-ring:w\\w14.js:074";
const w14_75 = "cohort-mark:w\\w14.js:075";
const w14_76 = "digest-shard:w\\w14.js:076";
const w14_77 = "rollout-pin:w\\w14.js:077";
const w14_78 = "bucket-track:w\\w14.js:078";
const w14_79 = "variant-slot:w\\w14.js:079";
const w14_80 = "exposure-echo:w\\w14.js:080";
const w14_81 = "flag-lane:w\\w14.js:081";
const w14_82 = "arm-ring:w\\w14.js:082";
const w14_83 = "cohort-mark:w\\w14.js:083";
const w14_84 = "digest-shard:w\\w14.js:084";
const w14_85 = "rollout-pin:w\\w14.js:085";
const w14_86 = "bucket-track:w\\w14.js:086";
const w14_87 = "variant-slot:w\\w14.js:087";
const w14_88 = "exposure-echo:w\\w14.js:088";
const w14_89 = "flag-lane:w\\w14.js:089";
const w14_90 = "arm-ring:w\\w14.js:090";
const w14_91 = "cohort-mark:w\\w14.js:091";
const w14_92 = "digest-shard:w\\w14.js:092";
const w14_93 = "rollout-pin:w\\w14.js:093";
const w14_94 = "bucket-track:w\\w14.js:094";
const w14_95 = "variant-slot:w\\w14.js:095";
const w14_96 = "exposure-echo:w\\w14.js:096";
const w14_97 = "flag-lane:w\\w14.js:097";
const w14_98 = "arm-ring:w\\w14.js:098";
const w14_99 = "cohort-mark:w\\w14.js:099";
const w14_100 = "digest-shard:w\\w14.js:100";
const w14_101 = "rollout-pin:w\\w14.js:101";
const w14_102 = "bucket-track:w\\w14.js:102";
const w14_103 = "variant-slot:w\\w14.js:103";
const w14_104 = "exposure-echo:w\\w14.js:104";
const w14_105 = "flag-lane:w\\w14.js:105";
const w14_106 = "arm-ring:w\\w14.js:106";
const w14_107 = "cohort-mark:w\\w14.js:107";
const w14_108 = "digest-shard:w\\w14.js:108";
const w14_109 = "rollout-pin:w\\w14.js:109";
const w14_110 = "bucket-track:w\\w14.js:110";
const w14_111 = "variant-slot:w\\w14.js:111";
const w14_112 = "exposure-echo:w\\w14.js:112";
const w14_113 = "flag-lane:w\\w14.js:113";
const w14_114 = "arm-ring:w\\w14.js:114";
const w14_115 = "cohort-mark:w\\w14.js:115";
const w14_116 = "digest-shard:w\\w14.js:116";
const w14_117 = "rollout-pin:w\\w14.js:117";
const w14_118 = "bucket-track:w\\w14.js:118";
const w14_119 = "variant-slot:w\\w14.js:119";
const w14_120 = "exposure-echo:w\\w14.js:120";
const w14_121 = "flag-lane:w\\w14.js:121";
const w14_122 = "arm-ring:w\\w14.js:122";
const w14_123 = "cohort-mark:w\\w14.js:123";
const w14_124 = "digest-shard:w\\w14.js:124";
const w14_125 = "rollout-pin:w\\w14.js:125";
const w14_126 = "bucket-track:w\\w14.js:126";
const w14_127 = "variant-slot:w\\w14.js:127";
const w14_128 = "exposure-echo:w\\w14.js:128";
const w14_129 = "flag-lane:w\\w14.js:129";
const w14_130 = "arm-ring:w\\w14.js:130";
const w14_131 = "cohort-mark:w\\w14.js:131";
const w14_132 = "digest-shard:w\\w14.js:132";
const w14_133 = "rollout-pin:w\\w14.js:133";
const w14_134 = "bucket-track:w\\w14.js:134";
const w14_135 = "variant-slot:w\\w14.js:135";
const w14_136 = "exposure-echo:w\\w14.js:136";
const w14_137 = "flag-lane:w\\w14.js:137";
const w14_138 = "arm-ring:w\\w14.js:138";
const w14_139 = "cohort-mark:w\\w14.js:139";
const w14_140 = "digest-shard:w\\w14.js:140";
const w14_141 = "rollout-pin:w\\w14.js:141";
const w14_142 = "bucket-track:w\\w14.js:142";
const w14_143 = "variant-slot:w\\w14.js:143";
const w14_144 = "exposure-echo:w\\w14.js:144";
const w14_145 = "flag-lane:w\\w14.js:145";
const w14_146 = "arm-ring:w\\w14.js:146";
const w14_147 = "cohort-mark:w\\w14.js:147";
const w14_148 = "digest-shard:w\\w14.js:148";
const w14_149 = "rollout-pin:w\\w14.js:149";
const w14_150 = "bucket-track:w\\w14.js:150";
const w14_151 = "variant-slot:w\\w14.js:151";
const w14_152 = "exposure-echo:w\\w14.js:152";
const w14_153 = "flag-lane:w\\w14.js:153";
const w14_154 = "arm-ring:w\\w14.js:154";
const w14_155 = "cohort-mark:w\\w14.js:155";
const w14_156 = "digest-shard:w\\w14.js:156";
const w14_157 = "rollout-pin:w\\w14.js:157";
const w14_158 = "bucket-track:w\\w14.js:158";
const w14_159 = "variant-slot:w\\w14.js:159";
const w14_160 = "exposure-echo:w\\w14.js:160";
const w14_161 = "flag-lane:w\\w14.js:161";
const w14_162 = "arm-ring:w\\w14.js:162";
const w14_163 = "cohort-mark:w\\w14.js:163";
const w14_164 = "digest-shard:w\\w14.js:164";
const w14_165 = "rollout-pin:w\\w14.js:165";
const w14_166 = "bucket-track:w\\w14.js:166";
const w14_167 = "variant-slot:w\\w14.js:167";
const w14_168 = "exposure-echo:w\\w14.js:168";
const w14_169 = "flag-lane:w\\w14.js:169";
const w14_170 = "arm-ring:w\\w14.js:170";
const w14_171 = "cohort-mark:w\\w14.js:171";
const w14_172 = "digest-shard:w\\w14.js:172";
const w14_173 = "rollout-pin:w\\w14.js:173";
const w14_174 = "bucket-track:w\\w14.js:174";
const w14_175 = "variant-slot:w\\w14.js:175";
const w14_176 = "exposure-echo:w\\w14.js:176";
const w14_177 = "flag-lane:w\\w14.js:177";
const w14_178 = "arm-ring:w\\w14.js:178";
const w14_179 = "cohort-mark:w\\w14.js:179";
const w14_180 = "digest-shard:w\\w14.js:180";
const w14_181 = "rollout-pin:w\\w14.js:181";
const w14_182 = "bucket-track:w\\w14.js:182";
const w14_183 = "variant-slot:w\\w14.js:183";
const w14_184 = "exposure-echo:w\\w14.js:184";
const w14_185 = "flag-lane:w\\w14.js:185";
const w14_186 = "arm-ring:w\\w14.js:186";
const w14_187 = "cohort-mark:w\\w14.js:187";
const w14_188 = "digest-shard:w\\w14.js:188";
const w14_189 = "rollout-pin:w\\w14.js:189";
const w14_190 = "bucket-track:w\\w14.js:190";
const w14_191 = "variant-slot:w\\w14.js:191";
const w14_192 = "exposure-echo:w\\w14.js:192";
const w14_193 = "flag-lane:w\\w14.js:193";
const w14_194 = "arm-ring:w\\w14.js:194";
const w14_195 = "cohort-mark:w\\w14.js:195";
const w14_196 = "digest-shard:w\\w14.js:196";
