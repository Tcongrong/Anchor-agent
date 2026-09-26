const moduleName = "w13";
const modulePurpose = "tracks scroll state of the exposure stream";
export class PaneState {
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
export function createPaneStateModel(source = {}) {
  const model = new PaneState(source.seed || moduleName);
  const defaults = [
    makePaneRow("PaneSt 0-0", "tracks scroll state of the exposure stream row 0", "note"),
    makePaneRow("PaneSt 1-1", "tracks scroll state of the exposure stream row 1", "button"),
    makePaneRow("PaneSt 2-2", "tracks scroll state of the exposure stream row 2", "field"),
    makePaneRow("PaneSt 3-0", "tracks scroll state of the exposure stream row 3", "status"),
    makePaneRow("PaneSt 4-1", "tracks scroll state of the exposure stream row 4", "note"),
    makePaneRow("PaneSt 5-2", "tracks scroll state of the exposure stream row 5", "button"),
    makePaneRow("PaneSt 6-0", "tracks scroll state of the exposure stream row 6", "field"),
    makePaneRow("PaneSt 7-1", "tracks scroll state of the exposure stream row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizePaneState(source = {}) {
  const model = createPaneStateModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountPaneState(target, source = {}) {
  const summary = summarizePaneState(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w13_openDesk_00(state = {}) {
  const label = normalizeLabel(state.label || "openDesk");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDesk" };
}
export function w13_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w13_queueFlush_02(state = {}) {
  const label = normalizeLabel(state.label || "queueFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueFlush" };
}
export function w13_cancelFlush_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelFlush" };
}
export function w13_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w13_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w13_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w13_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w13_pushEcho_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEcho" };
}
export function w13_popEcho_09(state = {}) {
  const label = normalizeLabel(state.label || "popEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEcho" };
}
export function w13_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w13_expandArm_11(state = {}) {
  const label = normalizeLabel(state.label || "expandArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandArm" };
}
export function w13_collapseArm_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseArm" };
}
export function w13_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w13_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w13_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w13_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w13_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w13_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w13_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w13_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w13_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w13_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w13_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w13_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w13_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w13_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w13_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w13_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w13_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w13_0 = "exposure-echo:w\\w13.js:000";
const w13_1 = "flag-lane:w\\w13.js:001";
const w13_2 = "arm-ring:w\\w13.js:002";
const w13_3 = "cohort-mark:w\\w13.js:003";
const w13_4 = "digest-shard:w\\w13.js:004";
const w13_5 = "rollout-pin:w\\w13.js:005";
const w13_6 = "bucket-track:w\\w13.js:006";
const w13_7 = "variant-slot:w\\w13.js:007";
const w13_8 = "exposure-echo:w\\w13.js:008";
const w13_9 = "flag-lane:w\\w13.js:009";
const w13_10 = "arm-ring:w\\w13.js:010";
const w13_11 = "cohort-mark:w\\w13.js:011";
const w13_12 = "digest-shard:w\\w13.js:012";
const w13_13 = "rollout-pin:w\\w13.js:013";
const w13_14 = "bucket-track:w\\w13.js:014";
const w13_15 = "variant-slot:w\\w13.js:015";
const w13_16 = "exposure-echo:w\\w13.js:016";
const w13_17 = "flag-lane:w\\w13.js:017";
const w13_18 = "arm-ring:w\\w13.js:018";
const w13_19 = "cohort-mark:w\\w13.js:019";
const w13_20 = "digest-shard:w\\w13.js:020";
const w13_21 = "rollout-pin:w\\w13.js:021";
const w13_22 = "bucket-track:w\\w13.js:022";
const w13_23 = "variant-slot:w\\w13.js:023";
const w13_24 = "exposure-echo:w\\w13.js:024";
const w13_25 = "flag-lane:w\\w13.js:025";
const w13_26 = "arm-ring:w\\w13.js:026";
const w13_27 = "cohort-mark:w\\w13.js:027";
const w13_28 = "digest-shard:w\\w13.js:028";
const w13_29 = "rollout-pin:w\\w13.js:029";
const w13_30 = "bucket-track:w\\w13.js:030";
const w13_31 = "variant-slot:w\\w13.js:031";
const w13_32 = "exposure-echo:w\\w13.js:032";
const w13_33 = "flag-lane:w\\w13.js:033";
const w13_34 = "arm-ring:w\\w13.js:034";
const w13_35 = "cohort-mark:w\\w13.js:035";
const w13_36 = "digest-shard:w\\w13.js:036";
const w13_37 = "rollout-pin:w\\w13.js:037";
const w13_38 = "bucket-track:w\\w13.js:038";
const w13_39 = "variant-slot:w\\w13.js:039";
const w13_40 = "exposure-echo:w\\w13.js:040";
const w13_41 = "flag-lane:w\\w13.js:041";
const w13_42 = "arm-ring:w\\w13.js:042";
const w13_43 = "cohort-mark:w\\w13.js:043";
const w13_44 = "digest-shard:w\\w13.js:044";
const w13_45 = "rollout-pin:w\\w13.js:045";
const w13_46 = "bucket-track:w\\w13.js:046";
const w13_47 = "variant-slot:w\\w13.js:047";
const w13_48 = "exposure-echo:w\\w13.js:048";
const w13_49 = "flag-lane:w\\w13.js:049";
const w13_50 = "arm-ring:w\\w13.js:050";
const w13_51 = "cohort-mark:w\\w13.js:051";
const w13_52 = "digest-shard:w\\w13.js:052";
const w13_53 = "rollout-pin:w\\w13.js:053";
const w13_54 = "bucket-track:w\\w13.js:054";
const w13_55 = "variant-slot:w\\w13.js:055";
const w13_56 = "exposure-echo:w\\w13.js:056";
const w13_57 = "flag-lane:w\\w13.js:057";
const w13_58 = "arm-ring:w\\w13.js:058";
const w13_59 = "cohort-mark:w\\w13.js:059";
const w13_60 = "digest-shard:w\\w13.js:060";
const w13_61 = "rollout-pin:w\\w13.js:061";
const w13_62 = "bucket-track:w\\w13.js:062";
const w13_63 = "variant-slot:w\\w13.js:063";
const w13_64 = "exposure-echo:w\\w13.js:064";
const w13_65 = "flag-lane:w\\w13.js:065";
const w13_66 = "arm-ring:w\\w13.js:066";
const w13_67 = "cohort-mark:w\\w13.js:067";
const w13_68 = "digest-shard:w\\w13.js:068";
const w13_69 = "rollout-pin:w\\w13.js:069";
const w13_70 = "bucket-track:w\\w13.js:070";
const w13_71 = "variant-slot:w\\w13.js:071";
const w13_72 = "exposure-echo:w\\w13.js:072";
const w13_73 = "flag-lane:w\\w13.js:073";
const w13_74 = "arm-ring:w\\w13.js:074";
const w13_75 = "cohort-mark:w\\w13.js:075";
const w13_76 = "digest-shard:w\\w13.js:076";
const w13_77 = "rollout-pin:w\\w13.js:077";
const w13_78 = "bucket-track:w\\w13.js:078";
const w13_79 = "variant-slot:w\\w13.js:079";
const w13_80 = "exposure-echo:w\\w13.js:080";
const w13_81 = "flag-lane:w\\w13.js:081";
const w13_82 = "arm-ring:w\\w13.js:082";
const w13_83 = "cohort-mark:w\\w13.js:083";
const w13_84 = "digest-shard:w\\w13.js:084";
const w13_85 = "rollout-pin:w\\w13.js:085";
const w13_86 = "bucket-track:w\\w13.js:086";
const w13_87 = "variant-slot:w\\w13.js:087";
const w13_88 = "exposure-echo:w\\w13.js:088";
const w13_89 = "flag-lane:w\\w13.js:089";
const w13_90 = "arm-ring:w\\w13.js:090";
const w13_91 = "cohort-mark:w\\w13.js:091";
const w13_92 = "digest-shard:w\\w13.js:092";
const w13_93 = "rollout-pin:w\\w13.js:093";
const w13_94 = "bucket-track:w\\w13.js:094";
const w13_95 = "variant-slot:w\\w13.js:095";
const w13_96 = "exposure-echo:w\\w13.js:096";
const w13_97 = "flag-lane:w\\w13.js:097";
const w13_98 = "arm-ring:w\\w13.js:098";
const w13_99 = "cohort-mark:w\\w13.js:099";
const w13_100 = "digest-shard:w\\w13.js:100";
const w13_101 = "rollout-pin:w\\w13.js:101";
const w13_102 = "bucket-track:w\\w13.js:102";
const w13_103 = "variant-slot:w\\w13.js:103";
const w13_104 = "exposure-echo:w\\w13.js:104";
const w13_105 = "flag-lane:w\\w13.js:105";
const w13_106 = "arm-ring:w\\w13.js:106";
const w13_107 = "cohort-mark:w\\w13.js:107";
const w13_108 = "digest-shard:w\\w13.js:108";
const w13_109 = "rollout-pin:w\\w13.js:109";
const w13_110 = "bucket-track:w\\w13.js:110";
const w13_111 = "variant-slot:w\\w13.js:111";
const w13_112 = "exposure-echo:w\\w13.js:112";
const w13_113 = "flag-lane:w\\w13.js:113";
const w13_114 = "arm-ring:w\\w13.js:114";
const w13_115 = "cohort-mark:w\\w13.js:115";
const w13_116 = "digest-shard:w\\w13.js:116";
const w13_117 = "rollout-pin:w\\w13.js:117";
const w13_118 = "bucket-track:w\\w13.js:118";
const w13_119 = "variant-slot:w\\w13.js:119";
const w13_120 = "exposure-echo:w\\w13.js:120";
const w13_121 = "flag-lane:w\\w13.js:121";
const w13_122 = "arm-ring:w\\w13.js:122";
const w13_123 = "cohort-mark:w\\w13.js:123";
const w13_124 = "digest-shard:w\\w13.js:124";
const w13_125 = "rollout-pin:w\\w13.js:125";
const w13_126 = "bucket-track:w\\w13.js:126";
const w13_127 = "variant-slot:w\\w13.js:127";
const w13_128 = "exposure-echo:w\\w13.js:128";
const w13_129 = "flag-lane:w\\w13.js:129";
const w13_130 = "arm-ring:w\\w13.js:130";
const w13_131 = "cohort-mark:w\\w13.js:131";
const w13_132 = "digest-shard:w\\w13.js:132";
const w13_133 = "rollout-pin:w\\w13.js:133";
const w13_134 = "bucket-track:w\\w13.js:134";
const w13_135 = "variant-slot:w\\w13.js:135";
const w13_136 = "exposure-echo:w\\w13.js:136";
const w13_137 = "flag-lane:w\\w13.js:137";
const w13_138 = "arm-ring:w\\w13.js:138";
const w13_139 = "cohort-mark:w\\w13.js:139";
const w13_140 = "digest-shard:w\\w13.js:140";
const w13_141 = "rollout-pin:w\\w13.js:141";
const w13_142 = "bucket-track:w\\w13.js:142";
const w13_143 = "variant-slot:w\\w13.js:143";
const w13_144 = "exposure-echo:w\\w13.js:144";
const w13_145 = "flag-lane:w\\w13.js:145";
const w13_146 = "arm-ring:w\\w13.js:146";
const w13_147 = "cohort-mark:w\\w13.js:147";
const w13_148 = "digest-shard:w\\w13.js:148";
const w13_149 = "rollout-pin:w\\w13.js:149";
const w13_150 = "bucket-track:w\\w13.js:150";
const w13_151 = "variant-slot:w\\w13.js:151";
const w13_152 = "exposure-echo:w\\w13.js:152";
const w13_153 = "flag-lane:w\\w13.js:153";
const w13_154 = "arm-ring:w\\w13.js:154";
const w13_155 = "cohort-mark:w\\w13.js:155";
const w13_156 = "digest-shard:w\\w13.js:156";
const w13_157 = "rollout-pin:w\\w13.js:157";
const w13_158 = "bucket-track:w\\w13.js:158";
const w13_159 = "variant-slot:w\\w13.js:159";
const w13_160 = "exposure-echo:w\\w13.js:160";
const w13_161 = "flag-lane:w\\w13.js:161";
const w13_162 = "arm-ring:w\\w13.js:162";
const w13_163 = "cohort-mark:w\\w13.js:163";
const w13_164 = "digest-shard:w\\w13.js:164";
const w13_165 = "rollout-pin:w\\w13.js:165";
const w13_166 = "bucket-track:w\\w13.js:166";
const w13_167 = "variant-slot:w\\w13.js:167";
const w13_168 = "exposure-echo:w\\w13.js:168";
const w13_169 = "flag-lane:w\\w13.js:169";
const w13_170 = "arm-ring:w\\w13.js:170";
const w13_171 = "cohort-mark:w\\w13.js:171";
const w13_172 = "digest-shard:w\\w13.js:172";
const w13_173 = "rollout-pin:w\\w13.js:173";
const w13_174 = "bucket-track:w\\w13.js:174";
const w13_175 = "variant-slot:w\\w13.js:175";
const w13_176 = "exposure-echo:w\\w13.js:176";
const w13_177 = "flag-lane:w\\w13.js:177";
const w13_178 = "arm-ring:w\\w13.js:178";
const w13_179 = "cohort-mark:w\\w13.js:179";
const w13_180 = "digest-shard:w\\w13.js:180";
const w13_181 = "rollout-pin:w\\w13.js:181";
const w13_182 = "bucket-track:w\\w13.js:182";
const w13_183 = "variant-slot:w\\w13.js:183";
const w13_184 = "exposure-echo:w\\w13.js:184";
const w13_185 = "flag-lane:w\\w13.js:185";
const w13_186 = "arm-ring:w\\w13.js:186";
const w13_187 = "cohort-mark:w\\w13.js:187";
const w13_188 = "digest-shard:w\\w13.js:188";
const w13_189 = "rollout-pin:w\\w13.js:189";
const w13_190 = "bucket-track:w\\w13.js:190";
const w13_191 = "variant-slot:w\\w13.js:191";
const w13_192 = "exposure-echo:w\\w13.js:192";
const w13_193 = "flag-lane:w\\w13.js:193";
const w13_194 = "arm-ring:w\\w13.js:194";
const w13_195 = "cohort-mark:w\\w13.js:195";
const w13_196 = "digest-shard:w\\w13.js:196";
