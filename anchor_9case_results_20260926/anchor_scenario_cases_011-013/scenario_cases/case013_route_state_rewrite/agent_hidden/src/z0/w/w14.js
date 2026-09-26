const moduleName = "w14";
const modulePurpose = "vaults static assets for the route panes";
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
function makePanelRow(label, value, role) {
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
    makePanelRow("AssetV 0-0", "vaults static assets for the route panes row 0", "note"),
    makePanelRow("AssetV 1-1", "vaults static assets for the route panes row 1", "button"),
    makePanelRow("AssetV 2-2", "vaults static assets for the route panes row 2", "field"),
    makePanelRow("AssetV 3-0", "vaults static assets for the route panes row 3", "status"),
    makePanelRow("AssetV 4-1", "vaults static assets for the route panes row 4", "note"),
    makePanelRow("AssetV 5-2", "vaults static assets for the route panes row 5", "button"),
    makePanelRow("AssetV 6-0", "vaults static assets for the route panes row 6", "field"),
    makePanelRow("AssetV 7-1", "vaults static assets for the route panes row 7", "status"),
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
export function w14_openTrail_00(state = {}) {
  const label = normalizeLabel(state.label || "openTrail");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openTrail" };
}
export function w14_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w14_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w14_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w14_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w14_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w14_syncPanel_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPanel" };
}
export function w14_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w14_pushEvent_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEvent" };
}
export function w14_popEvent_09(state = {}) {
  const label = normalizeLabel(state.label || "popEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEvent" };
}
export function w14_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w14_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w14_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w14_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w14_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w14_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w14_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w14_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w14_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w14_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w14_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w14_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w14_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w14_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w14_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w14_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w14_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w14_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w14_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w14_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w14_0 = "route-echo:w\\w14.js:000";
const w14_1 = "path-lane:w\\w14.js:001";
const w14_2 = "view-pin:w\\w14.js:002";
const w14_3 = "scroll-mark:w\\w14.js:003";
const w14_4 = "policy-slot:w\\w14.js:004";
const w14_5 = "crumb-track:w\\w14.js:005";
const w14_6 = "rewrite-shard:w\\w14.js:006";
const w14_7 = "trail-cell:w\\w14.js:007";
const w14_8 = "route-echo:w\\w14.js:008";
const w14_9 = "path-lane:w\\w14.js:009";
const w14_10 = "view-pin:w\\w14.js:010";
const w14_11 = "scroll-mark:w\\w14.js:011";
const w14_12 = "policy-slot:w\\w14.js:012";
const w14_13 = "crumb-track:w\\w14.js:013";
const w14_14 = "rewrite-shard:w\\w14.js:014";
const w14_15 = "trail-cell:w\\w14.js:015";
const w14_16 = "route-echo:w\\w14.js:016";
const w14_17 = "path-lane:w\\w14.js:017";
const w14_18 = "view-pin:w\\w14.js:018";
const w14_19 = "scroll-mark:w\\w14.js:019";
const w14_20 = "policy-slot:w\\w14.js:020";
const w14_21 = "crumb-track:w\\w14.js:021";
const w14_22 = "rewrite-shard:w\\w14.js:022";
const w14_23 = "trail-cell:w\\w14.js:023";
const w14_24 = "route-echo:w\\w14.js:024";
const w14_25 = "path-lane:w\\w14.js:025";
const w14_26 = "view-pin:w\\w14.js:026";
const w14_27 = "scroll-mark:w\\w14.js:027";
const w14_28 = "policy-slot:w\\w14.js:028";
const w14_29 = "crumb-track:w\\w14.js:029";
const w14_30 = "rewrite-shard:w\\w14.js:030";
const w14_31 = "trail-cell:w\\w14.js:031";
const w14_32 = "route-echo:w\\w14.js:032";
const w14_33 = "path-lane:w\\w14.js:033";
const w14_34 = "view-pin:w\\w14.js:034";
const w14_35 = "scroll-mark:w\\w14.js:035";
const w14_36 = "policy-slot:w\\w14.js:036";
const w14_37 = "crumb-track:w\\w14.js:037";
const w14_38 = "rewrite-shard:w\\w14.js:038";
const w14_39 = "trail-cell:w\\w14.js:039";
const w14_40 = "route-echo:w\\w14.js:040";
const w14_41 = "path-lane:w\\w14.js:041";
const w14_42 = "view-pin:w\\w14.js:042";
const w14_43 = "scroll-mark:w\\w14.js:043";
const w14_44 = "policy-slot:w\\w14.js:044";
const w14_45 = "crumb-track:w\\w14.js:045";
const w14_46 = "rewrite-shard:w\\w14.js:046";
const w14_47 = "trail-cell:w\\w14.js:047";
const w14_48 = "route-echo:w\\w14.js:048";
const w14_49 = "path-lane:w\\w14.js:049";
const w14_50 = "view-pin:w\\w14.js:050";
const w14_51 = "scroll-mark:w\\w14.js:051";
const w14_52 = "policy-slot:w\\w14.js:052";
const w14_53 = "crumb-track:w\\w14.js:053";
const w14_54 = "rewrite-shard:w\\w14.js:054";
const w14_55 = "trail-cell:w\\w14.js:055";
const w14_56 = "route-echo:w\\w14.js:056";
const w14_57 = "path-lane:w\\w14.js:057";
const w14_58 = "view-pin:w\\w14.js:058";
const w14_59 = "scroll-mark:w\\w14.js:059";
const w14_60 = "policy-slot:w\\w14.js:060";
const w14_61 = "crumb-track:w\\w14.js:061";
const w14_62 = "rewrite-shard:w\\w14.js:062";
const w14_63 = "trail-cell:w\\w14.js:063";
const w14_64 = "route-echo:w\\w14.js:064";
const w14_65 = "path-lane:w\\w14.js:065";
const w14_66 = "view-pin:w\\w14.js:066";
const w14_67 = "scroll-mark:w\\w14.js:067";
const w14_68 = "policy-slot:w\\w14.js:068";
const w14_69 = "crumb-track:w\\w14.js:069";
const w14_70 = "rewrite-shard:w\\w14.js:070";
const w14_71 = "trail-cell:w\\w14.js:071";
const w14_72 = "route-echo:w\\w14.js:072";
const w14_73 = "path-lane:w\\w14.js:073";
const w14_74 = "view-pin:w\\w14.js:074";
const w14_75 = "scroll-mark:w\\w14.js:075";
const w14_76 = "policy-slot:w\\w14.js:076";
const w14_77 = "crumb-track:w\\w14.js:077";
const w14_78 = "rewrite-shard:w\\w14.js:078";
const w14_79 = "trail-cell:w\\w14.js:079";
const w14_80 = "route-echo:w\\w14.js:080";
const w14_81 = "path-lane:w\\w14.js:081";
const w14_82 = "view-pin:w\\w14.js:082";
const w14_83 = "scroll-mark:w\\w14.js:083";
const w14_84 = "policy-slot:w\\w14.js:084";
const w14_85 = "crumb-track:w\\w14.js:085";
const w14_86 = "rewrite-shard:w\\w14.js:086";
const w14_87 = "trail-cell:w\\w14.js:087";
const w14_88 = "route-echo:w\\w14.js:088";
const w14_89 = "path-lane:w\\w14.js:089";
const w14_90 = "view-pin:w\\w14.js:090";
const w14_91 = "scroll-mark:w\\w14.js:091";
const w14_92 = "policy-slot:w\\w14.js:092";
const w14_93 = "crumb-track:w\\w14.js:093";
const w14_94 = "rewrite-shard:w\\w14.js:094";
const w14_95 = "trail-cell:w\\w14.js:095";
const w14_96 = "route-echo:w\\w14.js:096";
const w14_97 = "path-lane:w\\w14.js:097";
const w14_98 = "view-pin:w\\w14.js:098";
const w14_99 = "scroll-mark:w\\w14.js:099";
const w14_100 = "policy-slot:w\\w14.js:100";
const w14_101 = "crumb-track:w\\w14.js:101";
const w14_102 = "rewrite-shard:w\\w14.js:102";
const w14_103 = "trail-cell:w\\w14.js:103";
const w14_104 = "route-echo:w\\w14.js:104";
const w14_105 = "path-lane:w\\w14.js:105";
const w14_106 = "view-pin:w\\w14.js:106";
const w14_107 = "scroll-mark:w\\w14.js:107";
const w14_108 = "policy-slot:w\\w14.js:108";
const w14_109 = "crumb-track:w\\w14.js:109";
const w14_110 = "rewrite-shard:w\\w14.js:110";
const w14_111 = "trail-cell:w\\w14.js:111";
const w14_112 = "route-echo:w\\w14.js:112";
const w14_113 = "path-lane:w\\w14.js:113";
const w14_114 = "view-pin:w\\w14.js:114";
const w14_115 = "scroll-mark:w\\w14.js:115";
const w14_116 = "policy-slot:w\\w14.js:116";
const w14_117 = "crumb-track:w\\w14.js:117";
const w14_118 = "rewrite-shard:w\\w14.js:118";
const w14_119 = "trail-cell:w\\w14.js:119";
const w14_120 = "route-echo:w\\w14.js:120";
const w14_121 = "path-lane:w\\w14.js:121";
const w14_122 = "view-pin:w\\w14.js:122";
const w14_123 = "scroll-mark:w\\w14.js:123";
const w14_124 = "policy-slot:w\\w14.js:124";
const w14_125 = "crumb-track:w\\w14.js:125";
const w14_126 = "rewrite-shard:w\\w14.js:126";
const w14_127 = "trail-cell:w\\w14.js:127";
const w14_128 = "route-echo:w\\w14.js:128";
const w14_129 = "path-lane:w\\w14.js:129";
const w14_130 = "view-pin:w\\w14.js:130";
const w14_131 = "scroll-mark:w\\w14.js:131";
const w14_132 = "policy-slot:w\\w14.js:132";
const w14_133 = "crumb-track:w\\w14.js:133";
const w14_134 = "rewrite-shard:w\\w14.js:134";
const w14_135 = "trail-cell:w\\w14.js:135";
const w14_136 = "route-echo:w\\w14.js:136";
const w14_137 = "path-lane:w\\w14.js:137";
const w14_138 = "view-pin:w\\w14.js:138";
const w14_139 = "scroll-mark:w\\w14.js:139";
const w14_140 = "policy-slot:w\\w14.js:140";
const w14_141 = "crumb-track:w\\w14.js:141";
const w14_142 = "rewrite-shard:w\\w14.js:142";
const w14_143 = "trail-cell:w\\w14.js:143";
const w14_144 = "route-echo:w\\w14.js:144";
const w14_145 = "path-lane:w\\w14.js:145";
const w14_146 = "view-pin:w\\w14.js:146";
const w14_147 = "scroll-mark:w\\w14.js:147";
const w14_148 = "policy-slot:w\\w14.js:148";
const w14_149 = "crumb-track:w\\w14.js:149";
const w14_150 = "rewrite-shard:w\\w14.js:150";
const w14_151 = "trail-cell:w\\w14.js:151";
const w14_152 = "route-echo:w\\w14.js:152";
const w14_153 = "path-lane:w\\w14.js:153";
const w14_154 = "view-pin:w\\w14.js:154";
const w14_155 = "scroll-mark:w\\w14.js:155";
const w14_156 = "policy-slot:w\\w14.js:156";
const w14_157 = "crumb-track:w\\w14.js:157";
const w14_158 = "rewrite-shard:w\\w14.js:158";
const w14_159 = "trail-cell:w\\w14.js:159";
const w14_160 = "route-echo:w\\w14.js:160";
const w14_161 = "path-lane:w\\w14.js:161";
const w14_162 = "view-pin:w\\w14.js:162";
const w14_163 = "scroll-mark:w\\w14.js:163";
const w14_164 = "policy-slot:w\\w14.js:164";
const w14_165 = "crumb-track:w\\w14.js:165";
const w14_166 = "rewrite-shard:w\\w14.js:166";
const w14_167 = "trail-cell:w\\w14.js:167";
const w14_168 = "route-echo:w\\w14.js:168";
const w14_169 = "path-lane:w\\w14.js:169";
const w14_170 = "view-pin:w\\w14.js:170";
const w14_171 = "scroll-mark:w\\w14.js:171";
const w14_172 = "policy-slot:w\\w14.js:172";
const w14_173 = "crumb-track:w\\w14.js:173";
const w14_174 = "rewrite-shard:w\\w14.js:174";
const w14_175 = "trail-cell:w\\w14.js:175";
const w14_176 = "route-echo:w\\w14.js:176";
const w14_177 = "path-lane:w\\w14.js:177";
const w14_178 = "view-pin:w\\w14.js:178";
const w14_179 = "scroll-mark:w\\w14.js:179";
const w14_180 = "policy-slot:w\\w14.js:180";
const w14_181 = "crumb-track:w\\w14.js:181";
const w14_182 = "rewrite-shard:w\\w14.js:182";
const w14_183 = "trail-cell:w\\w14.js:183";
const w14_184 = "route-echo:w\\w14.js:184";
const w14_185 = "path-lane:w\\w14.js:185";
const w14_186 = "view-pin:w\\w14.js:186";
const w14_187 = "scroll-mark:w\\w14.js:187";
const w14_188 = "policy-slot:w\\w14.js:188";
const w14_189 = "crumb-track:w\\w14.js:189";
const w14_190 = "rewrite-shard:w\\w14.js:190";
const w14_191 = "trail-cell:w\\w14.js:191";
const w14_192 = "route-echo:w\\w14.js:192";
const w14_193 = "path-lane:w\\w14.js:193";
const w14_194 = "view-pin:w\\w14.js:194";
const w14_195 = "scroll-mark:w\\w14.js:195";
const w14_196 = "policy-slot:w\\w14.js:196";
const w14_197 = "crumb-track:w\\w14.js:197";
const w14_198 = "rewrite-shard:w\\w14.js:198";
