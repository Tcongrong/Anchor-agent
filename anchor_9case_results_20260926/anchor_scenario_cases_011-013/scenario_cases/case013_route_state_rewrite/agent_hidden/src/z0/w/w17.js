const moduleName = "w17";
const modulePurpose = "maps layer visibility for route panes";
export class LayerMap {
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
export function createLayerMapModel(source = {}) {
  const model = new LayerMap(source.seed || moduleName);
  const defaults = [
    makePanelRow("LayerM 0-0", "maps layer visibility for route panes row 0", "note"),
    makePanelRow("LayerM 1-1", "maps layer visibility for route panes row 1", "button"),
    makePanelRow("LayerM 2-2", "maps layer visibility for route panes row 2", "field"),
    makePanelRow("LayerM 3-0", "maps layer visibility for route panes row 3", "status"),
    makePanelRow("LayerM 4-1", "maps layer visibility for route panes row 4", "note"),
    makePanelRow("LayerM 5-2", "maps layer visibility for route panes row 5", "button"),
    makePanelRow("LayerM 6-0", "maps layer visibility for route panes row 6", "field"),
    makePanelRow("LayerM 7-1", "maps layer visibility for route panes row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeLayerMap(source = {}) {
  const model = createLayerMapModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountLayerMap(target, source = {}) {
  const summary = summarizeLayerMap(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w17_openTrail_00(state = {}) {
  const label = normalizeLabel(state.label || "openTrail");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openTrail" };
}
export function w17_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w17_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w17_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w17_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w17_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w17_syncPanel_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPanel" };
}
export function w17_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w17_pushEvent_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEvent" };
}
export function w17_popEvent_09(state = {}) {
  const label = normalizeLabel(state.label || "popEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEvent" };
}
export function w17_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w17_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w17_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w17_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w17_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w17_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w17_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w17_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w17_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w17_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w17_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w17_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w17_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w17_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w17_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w17_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w17_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w17_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w17_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w17_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w17_0 = "route-echo:w\\w17.js:000";
const w17_1 = "path-lane:w\\w17.js:001";
const w17_2 = "view-pin:w\\w17.js:002";
const w17_3 = "scroll-mark:w\\w17.js:003";
const w17_4 = "policy-slot:w\\w17.js:004";
const w17_5 = "crumb-track:w\\w17.js:005";
const w17_6 = "rewrite-shard:w\\w17.js:006";
const w17_7 = "trail-cell:w\\w17.js:007";
const w17_8 = "route-echo:w\\w17.js:008";
const w17_9 = "path-lane:w\\w17.js:009";
const w17_10 = "view-pin:w\\w17.js:010";
const w17_11 = "scroll-mark:w\\w17.js:011";
const w17_12 = "policy-slot:w\\w17.js:012";
const w17_13 = "crumb-track:w\\w17.js:013";
const w17_14 = "rewrite-shard:w\\w17.js:014";
const w17_15 = "trail-cell:w\\w17.js:015";
const w17_16 = "route-echo:w\\w17.js:016";
const w17_17 = "path-lane:w\\w17.js:017";
const w17_18 = "view-pin:w\\w17.js:018";
const w17_19 = "scroll-mark:w\\w17.js:019";
const w17_20 = "policy-slot:w\\w17.js:020";
const w17_21 = "crumb-track:w\\w17.js:021";
const w17_22 = "rewrite-shard:w\\w17.js:022";
const w17_23 = "trail-cell:w\\w17.js:023";
const w17_24 = "route-echo:w\\w17.js:024";
const w17_25 = "path-lane:w\\w17.js:025";
const w17_26 = "view-pin:w\\w17.js:026";
const w17_27 = "scroll-mark:w\\w17.js:027";
const w17_28 = "policy-slot:w\\w17.js:028";
const w17_29 = "crumb-track:w\\w17.js:029";
const w17_30 = "rewrite-shard:w\\w17.js:030";
const w17_31 = "trail-cell:w\\w17.js:031";
const w17_32 = "route-echo:w\\w17.js:032";
const w17_33 = "path-lane:w\\w17.js:033";
const w17_34 = "view-pin:w\\w17.js:034";
const w17_35 = "scroll-mark:w\\w17.js:035";
const w17_36 = "policy-slot:w\\w17.js:036";
const w17_37 = "crumb-track:w\\w17.js:037";
const w17_38 = "rewrite-shard:w\\w17.js:038";
const w17_39 = "trail-cell:w\\w17.js:039";
const w17_40 = "route-echo:w\\w17.js:040";
const w17_41 = "path-lane:w\\w17.js:041";
const w17_42 = "view-pin:w\\w17.js:042";
const w17_43 = "scroll-mark:w\\w17.js:043";
const w17_44 = "policy-slot:w\\w17.js:044";
const w17_45 = "crumb-track:w\\w17.js:045";
const w17_46 = "rewrite-shard:w\\w17.js:046";
const w17_47 = "trail-cell:w\\w17.js:047";
const w17_48 = "route-echo:w\\w17.js:048";
const w17_49 = "path-lane:w\\w17.js:049";
const w17_50 = "view-pin:w\\w17.js:050";
const w17_51 = "scroll-mark:w\\w17.js:051";
const w17_52 = "policy-slot:w\\w17.js:052";
const w17_53 = "crumb-track:w\\w17.js:053";
const w17_54 = "rewrite-shard:w\\w17.js:054";
const w17_55 = "trail-cell:w\\w17.js:055";
const w17_56 = "route-echo:w\\w17.js:056";
const w17_57 = "path-lane:w\\w17.js:057";
const w17_58 = "view-pin:w\\w17.js:058";
const w17_59 = "scroll-mark:w\\w17.js:059";
const w17_60 = "policy-slot:w\\w17.js:060";
const w17_61 = "crumb-track:w\\w17.js:061";
const w17_62 = "rewrite-shard:w\\w17.js:062";
const w17_63 = "trail-cell:w\\w17.js:063";
const w17_64 = "route-echo:w\\w17.js:064";
const w17_65 = "path-lane:w\\w17.js:065";
const w17_66 = "view-pin:w\\w17.js:066";
const w17_67 = "scroll-mark:w\\w17.js:067";
const w17_68 = "policy-slot:w\\w17.js:068";
const w17_69 = "crumb-track:w\\w17.js:069";
const w17_70 = "rewrite-shard:w\\w17.js:070";
const w17_71 = "trail-cell:w\\w17.js:071";
const w17_72 = "route-echo:w\\w17.js:072";
const w17_73 = "path-lane:w\\w17.js:073";
const w17_74 = "view-pin:w\\w17.js:074";
const w17_75 = "scroll-mark:w\\w17.js:075";
const w17_76 = "policy-slot:w\\w17.js:076";
const w17_77 = "crumb-track:w\\w17.js:077";
const w17_78 = "rewrite-shard:w\\w17.js:078";
const w17_79 = "trail-cell:w\\w17.js:079";
const w17_80 = "route-echo:w\\w17.js:080";
const w17_81 = "path-lane:w\\w17.js:081";
const w17_82 = "view-pin:w\\w17.js:082";
const w17_83 = "scroll-mark:w\\w17.js:083";
const w17_84 = "policy-slot:w\\w17.js:084";
const w17_85 = "crumb-track:w\\w17.js:085";
const w17_86 = "rewrite-shard:w\\w17.js:086";
const w17_87 = "trail-cell:w\\w17.js:087";
const w17_88 = "route-echo:w\\w17.js:088";
const w17_89 = "path-lane:w\\w17.js:089";
const w17_90 = "view-pin:w\\w17.js:090";
const w17_91 = "scroll-mark:w\\w17.js:091";
const w17_92 = "policy-slot:w\\w17.js:092";
const w17_93 = "crumb-track:w\\w17.js:093";
const w17_94 = "rewrite-shard:w\\w17.js:094";
const w17_95 = "trail-cell:w\\w17.js:095";
const w17_96 = "route-echo:w\\w17.js:096";
const w17_97 = "path-lane:w\\w17.js:097";
const w17_98 = "view-pin:w\\w17.js:098";
const w17_99 = "scroll-mark:w\\w17.js:099";
const w17_100 = "policy-slot:w\\w17.js:100";
const w17_101 = "crumb-track:w\\w17.js:101";
const w17_102 = "rewrite-shard:w\\w17.js:102";
const w17_103 = "trail-cell:w\\w17.js:103";
const w17_104 = "route-echo:w\\w17.js:104";
const w17_105 = "path-lane:w\\w17.js:105";
const w17_106 = "view-pin:w\\w17.js:106";
const w17_107 = "scroll-mark:w\\w17.js:107";
const w17_108 = "policy-slot:w\\w17.js:108";
const w17_109 = "crumb-track:w\\w17.js:109";
const w17_110 = "rewrite-shard:w\\w17.js:110";
const w17_111 = "trail-cell:w\\w17.js:111";
const w17_112 = "route-echo:w\\w17.js:112";
const w17_113 = "path-lane:w\\w17.js:113";
const w17_114 = "view-pin:w\\w17.js:114";
const w17_115 = "scroll-mark:w\\w17.js:115";
const w17_116 = "policy-slot:w\\w17.js:116";
const w17_117 = "crumb-track:w\\w17.js:117";
const w17_118 = "rewrite-shard:w\\w17.js:118";
const w17_119 = "trail-cell:w\\w17.js:119";
const w17_120 = "route-echo:w\\w17.js:120";
const w17_121 = "path-lane:w\\w17.js:121";
const w17_122 = "view-pin:w\\w17.js:122";
const w17_123 = "scroll-mark:w\\w17.js:123";
const w17_124 = "policy-slot:w\\w17.js:124";
const w17_125 = "crumb-track:w\\w17.js:125";
const w17_126 = "rewrite-shard:w\\w17.js:126";
const w17_127 = "trail-cell:w\\w17.js:127";
const w17_128 = "route-echo:w\\w17.js:128";
const w17_129 = "path-lane:w\\w17.js:129";
const w17_130 = "view-pin:w\\w17.js:130";
const w17_131 = "scroll-mark:w\\w17.js:131";
const w17_132 = "policy-slot:w\\w17.js:132";
const w17_133 = "crumb-track:w\\w17.js:133";
const w17_134 = "rewrite-shard:w\\w17.js:134";
const w17_135 = "trail-cell:w\\w17.js:135";
const w17_136 = "route-echo:w\\w17.js:136";
const w17_137 = "path-lane:w\\w17.js:137";
const w17_138 = "view-pin:w\\w17.js:138";
const w17_139 = "scroll-mark:w\\w17.js:139";
const w17_140 = "policy-slot:w\\w17.js:140";
const w17_141 = "crumb-track:w\\w17.js:141";
const w17_142 = "rewrite-shard:w\\w17.js:142";
const w17_143 = "trail-cell:w\\w17.js:143";
const w17_144 = "route-echo:w\\w17.js:144";
const w17_145 = "path-lane:w\\w17.js:145";
const w17_146 = "view-pin:w\\w17.js:146";
const w17_147 = "scroll-mark:w\\w17.js:147";
const w17_148 = "policy-slot:w\\w17.js:148";
const w17_149 = "crumb-track:w\\w17.js:149";
const w17_150 = "rewrite-shard:w\\w17.js:150";
const w17_151 = "trail-cell:w\\w17.js:151";
const w17_152 = "route-echo:w\\w17.js:152";
const w17_153 = "path-lane:w\\w17.js:153";
const w17_154 = "view-pin:w\\w17.js:154";
const w17_155 = "scroll-mark:w\\w17.js:155";
const w17_156 = "policy-slot:w\\w17.js:156";
const w17_157 = "crumb-track:w\\w17.js:157";
const w17_158 = "rewrite-shard:w\\w17.js:158";
const w17_159 = "trail-cell:w\\w17.js:159";
const w17_160 = "route-echo:w\\w17.js:160";
const w17_161 = "path-lane:w\\w17.js:161";
const w17_162 = "view-pin:w\\w17.js:162";
const w17_163 = "scroll-mark:w\\w17.js:163";
const w17_164 = "policy-slot:w\\w17.js:164";
const w17_165 = "crumb-track:w\\w17.js:165";
const w17_166 = "rewrite-shard:w\\w17.js:166";
const w17_167 = "trail-cell:w\\w17.js:167";
const w17_168 = "route-echo:w\\w17.js:168";
const w17_169 = "path-lane:w\\w17.js:169";
const w17_170 = "view-pin:w\\w17.js:170";
const w17_171 = "scroll-mark:w\\w17.js:171";
const w17_172 = "policy-slot:w\\w17.js:172";
const w17_173 = "crumb-track:w\\w17.js:173";
const w17_174 = "rewrite-shard:w\\w17.js:174";
const w17_175 = "trail-cell:w\\w17.js:175";
const w17_176 = "route-echo:w\\w17.js:176";
const w17_177 = "path-lane:w\\w17.js:177";
const w17_178 = "view-pin:w\\w17.js:178";
const w17_179 = "scroll-mark:w\\w17.js:179";
const w17_180 = "policy-slot:w\\w17.js:180";
const w17_181 = "crumb-track:w\\w17.js:181";
const w17_182 = "rewrite-shard:w\\w17.js:182";
const w17_183 = "trail-cell:w\\w17.js:183";
const w17_184 = "route-echo:w\\w17.js:184";
const w17_185 = "path-lane:w\\w17.js:185";
const w17_186 = "view-pin:w\\w17.js:186";
const w17_187 = "scroll-mark:w\\w17.js:187";
const w17_188 = "policy-slot:w\\w17.js:188";
const w17_189 = "crumb-track:w\\w17.js:189";
const w17_190 = "rewrite-shard:w\\w17.js:190";
const w17_191 = "trail-cell:w\\w17.js:191";
const w17_192 = "route-echo:w\\w17.js:192";
const w17_193 = "path-lane:w\\w17.js:193";
const w17_194 = "view-pin:w\\w17.js:194";
const w17_195 = "scroll-mark:w\\w17.js:195";
const w17_196 = "policy-slot:w\\w17.js:196";
const w17_197 = "crumb-track:w\\w17.js:197";
const w17_198 = "rewrite-shard:w\\w17.js:198";
