const moduleName = "w00";
const modulePurpose = "routes trail-panel events through listener rings";
export class RouteEventBus {
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
export function createRouteEventBusModel(source = {}) {
  const model = new RouteEventBus(source.seed || moduleName);
  const defaults = [
    makePanelRow("RouteE 0-0", "routes trail-panel events through listener rings row 0", "note"),
    makePanelRow("RouteE 1-1", "routes trail-panel events through listener rings row 1", "button"),
    makePanelRow("RouteE 2-2", "routes trail-panel events through listener rings row 2", "field"),
    makePanelRow("RouteE 3-0", "routes trail-panel events through listener rings row 3", "status"),
    makePanelRow("RouteE 4-1", "routes trail-panel events through listener rings row 4", "note"),
    makePanelRow("RouteE 5-2", "routes trail-panel events through listener rings row 5", "button"),
    makePanelRow("RouteE 6-0", "routes trail-panel events through listener rings row 6", "field"),
    makePanelRow("RouteE 7-1", "routes trail-panel events through listener rings row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeRouteEventBus(source = {}) {
  const model = createRouteEventBusModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountRouteEventBus(target, source = {}) {
  const summary = summarizeRouteEventBus(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w00_openTrail_00(state = {}) {
  const label = normalizeLabel(state.label || "openTrail");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openTrail" };
}
export function w00_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w00_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w00_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w00_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w00_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w00_syncPanel_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPanel" };
}
export function w00_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w00_pushEvent_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEvent" };
}
export function w00_popEvent_09(state = {}) {
  const label = normalizeLabel(state.label || "popEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEvent" };
}
export function w00_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w00_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w00_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w00_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w00_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w00_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w00_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w00_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w00_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w00_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w00_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w00_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w00_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w00_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w00_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w00_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w00_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w00_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w00_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w00_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w00_0 = "route-echo:w\\w00.js:000";
const w00_1 = "path-lane:w\\w00.js:001";
const w00_2 = "view-pin:w\\w00.js:002";
const w00_3 = "scroll-mark:w\\w00.js:003";
const w00_4 = "policy-slot:w\\w00.js:004";
const w00_5 = "crumb-track:w\\w00.js:005";
const w00_6 = "rewrite-shard:w\\w00.js:006";
const w00_7 = "trail-cell:w\\w00.js:007";
const w00_8 = "route-echo:w\\w00.js:008";
const w00_9 = "path-lane:w\\w00.js:009";
const w00_10 = "view-pin:w\\w00.js:010";
const w00_11 = "scroll-mark:w\\w00.js:011";
const w00_12 = "policy-slot:w\\w00.js:012";
const w00_13 = "crumb-track:w\\w00.js:013";
const w00_14 = "rewrite-shard:w\\w00.js:014";
const w00_15 = "trail-cell:w\\w00.js:015";
const w00_16 = "route-echo:w\\w00.js:016";
const w00_17 = "path-lane:w\\w00.js:017";
const w00_18 = "view-pin:w\\w00.js:018";
const w00_19 = "scroll-mark:w\\w00.js:019";
const w00_20 = "policy-slot:w\\w00.js:020";
const w00_21 = "crumb-track:w\\w00.js:021";
const w00_22 = "rewrite-shard:w\\w00.js:022";
const w00_23 = "trail-cell:w\\w00.js:023";
const w00_24 = "route-echo:w\\w00.js:024";
const w00_25 = "path-lane:w\\w00.js:025";
const w00_26 = "view-pin:w\\w00.js:026";
const w00_27 = "scroll-mark:w\\w00.js:027";
const w00_28 = "policy-slot:w\\w00.js:028";
const w00_29 = "crumb-track:w\\w00.js:029";
const w00_30 = "rewrite-shard:w\\w00.js:030";
const w00_31 = "trail-cell:w\\w00.js:031";
const w00_32 = "route-echo:w\\w00.js:032";
const w00_33 = "path-lane:w\\w00.js:033";
const w00_34 = "view-pin:w\\w00.js:034";
const w00_35 = "scroll-mark:w\\w00.js:035";
const w00_36 = "policy-slot:w\\w00.js:036";
const w00_37 = "crumb-track:w\\w00.js:037";
const w00_38 = "rewrite-shard:w\\w00.js:038";
const w00_39 = "trail-cell:w\\w00.js:039";
const w00_40 = "route-echo:w\\w00.js:040";
const w00_41 = "path-lane:w\\w00.js:041";
const w00_42 = "view-pin:w\\w00.js:042";
const w00_43 = "scroll-mark:w\\w00.js:043";
const w00_44 = "policy-slot:w\\w00.js:044";
const w00_45 = "crumb-track:w\\w00.js:045";
const w00_46 = "rewrite-shard:w\\w00.js:046";
const w00_47 = "trail-cell:w\\w00.js:047";
const w00_48 = "route-echo:w\\w00.js:048";
const w00_49 = "path-lane:w\\w00.js:049";
const w00_50 = "view-pin:w\\w00.js:050";
const w00_51 = "scroll-mark:w\\w00.js:051";
const w00_52 = "policy-slot:w\\w00.js:052";
const w00_53 = "crumb-track:w\\w00.js:053";
const w00_54 = "rewrite-shard:w\\w00.js:054";
const w00_55 = "trail-cell:w\\w00.js:055";
const w00_56 = "route-echo:w\\w00.js:056";
const w00_57 = "path-lane:w\\w00.js:057";
const w00_58 = "view-pin:w\\w00.js:058";
const w00_59 = "scroll-mark:w\\w00.js:059";
const w00_60 = "policy-slot:w\\w00.js:060";
const w00_61 = "crumb-track:w\\w00.js:061";
const w00_62 = "rewrite-shard:w\\w00.js:062";
const w00_63 = "trail-cell:w\\w00.js:063";
const w00_64 = "route-echo:w\\w00.js:064";
const w00_65 = "path-lane:w\\w00.js:065";
const w00_66 = "view-pin:w\\w00.js:066";
const w00_67 = "scroll-mark:w\\w00.js:067";
const w00_68 = "policy-slot:w\\w00.js:068";
const w00_69 = "crumb-track:w\\w00.js:069";
const w00_70 = "rewrite-shard:w\\w00.js:070";
const w00_71 = "trail-cell:w\\w00.js:071";
const w00_72 = "route-echo:w\\w00.js:072";
const w00_73 = "path-lane:w\\w00.js:073";
const w00_74 = "view-pin:w\\w00.js:074";
const w00_75 = "scroll-mark:w\\w00.js:075";
const w00_76 = "policy-slot:w\\w00.js:076";
const w00_77 = "crumb-track:w\\w00.js:077";
const w00_78 = "rewrite-shard:w\\w00.js:078";
const w00_79 = "trail-cell:w\\w00.js:079";
const w00_80 = "route-echo:w\\w00.js:080";
const w00_81 = "path-lane:w\\w00.js:081";
const w00_82 = "view-pin:w\\w00.js:082";
const w00_83 = "scroll-mark:w\\w00.js:083";
const w00_84 = "policy-slot:w\\w00.js:084";
const w00_85 = "crumb-track:w\\w00.js:085";
const w00_86 = "rewrite-shard:w\\w00.js:086";
const w00_87 = "trail-cell:w\\w00.js:087";
const w00_88 = "route-echo:w\\w00.js:088";
const w00_89 = "path-lane:w\\w00.js:089";
const w00_90 = "view-pin:w\\w00.js:090";
const w00_91 = "scroll-mark:w\\w00.js:091";
const w00_92 = "policy-slot:w\\w00.js:092";
const w00_93 = "crumb-track:w\\w00.js:093";
const w00_94 = "rewrite-shard:w\\w00.js:094";
const w00_95 = "trail-cell:w\\w00.js:095";
const w00_96 = "route-echo:w\\w00.js:096";
const w00_97 = "path-lane:w\\w00.js:097";
const w00_98 = "view-pin:w\\w00.js:098";
const w00_99 = "scroll-mark:w\\w00.js:099";
const w00_100 = "policy-slot:w\\w00.js:100";
const w00_101 = "crumb-track:w\\w00.js:101";
const w00_102 = "rewrite-shard:w\\w00.js:102";
const w00_103 = "trail-cell:w\\w00.js:103";
const w00_104 = "route-echo:w\\w00.js:104";
const w00_105 = "path-lane:w\\w00.js:105";
const w00_106 = "view-pin:w\\w00.js:106";
const w00_107 = "scroll-mark:w\\w00.js:107";
const w00_108 = "policy-slot:w\\w00.js:108";
const w00_109 = "crumb-track:w\\w00.js:109";
const w00_110 = "rewrite-shard:w\\w00.js:110";
const w00_111 = "trail-cell:w\\w00.js:111";
const w00_112 = "route-echo:w\\w00.js:112";
const w00_113 = "path-lane:w\\w00.js:113";
const w00_114 = "view-pin:w\\w00.js:114";
const w00_115 = "scroll-mark:w\\w00.js:115";
const w00_116 = "policy-slot:w\\w00.js:116";
const w00_117 = "crumb-track:w\\w00.js:117";
const w00_118 = "rewrite-shard:w\\w00.js:118";
const w00_119 = "trail-cell:w\\w00.js:119";
const w00_120 = "route-echo:w\\w00.js:120";
const w00_121 = "path-lane:w\\w00.js:121";
const w00_122 = "view-pin:w\\w00.js:122";
const w00_123 = "scroll-mark:w\\w00.js:123";
const w00_124 = "policy-slot:w\\w00.js:124";
const w00_125 = "crumb-track:w\\w00.js:125";
const w00_126 = "rewrite-shard:w\\w00.js:126";
const w00_127 = "trail-cell:w\\w00.js:127";
const w00_128 = "route-echo:w\\w00.js:128";
const w00_129 = "path-lane:w\\w00.js:129";
const w00_130 = "view-pin:w\\w00.js:130";
const w00_131 = "scroll-mark:w\\w00.js:131";
const w00_132 = "policy-slot:w\\w00.js:132";
const w00_133 = "crumb-track:w\\w00.js:133";
const w00_134 = "rewrite-shard:w\\w00.js:134";
const w00_135 = "trail-cell:w\\w00.js:135";
const w00_136 = "route-echo:w\\w00.js:136";
const w00_137 = "path-lane:w\\w00.js:137";
const w00_138 = "view-pin:w\\w00.js:138";
const w00_139 = "scroll-mark:w\\w00.js:139";
const w00_140 = "policy-slot:w\\w00.js:140";
const w00_141 = "crumb-track:w\\w00.js:141";
const w00_142 = "rewrite-shard:w\\w00.js:142";
const w00_143 = "trail-cell:w\\w00.js:143";
const w00_144 = "route-echo:w\\w00.js:144";
const w00_145 = "path-lane:w\\w00.js:145";
const w00_146 = "view-pin:w\\w00.js:146";
const w00_147 = "scroll-mark:w\\w00.js:147";
const w00_148 = "policy-slot:w\\w00.js:148";
const w00_149 = "crumb-track:w\\w00.js:149";
const w00_150 = "rewrite-shard:w\\w00.js:150";
const w00_151 = "trail-cell:w\\w00.js:151";
const w00_152 = "route-echo:w\\w00.js:152";
const w00_153 = "path-lane:w\\w00.js:153";
const w00_154 = "view-pin:w\\w00.js:154";
const w00_155 = "scroll-mark:w\\w00.js:155";
const w00_156 = "policy-slot:w\\w00.js:156";
const w00_157 = "crumb-track:w\\w00.js:157";
const w00_158 = "rewrite-shard:w\\w00.js:158";
const w00_159 = "trail-cell:w\\w00.js:159";
const w00_160 = "route-echo:w\\w00.js:160";
const w00_161 = "path-lane:w\\w00.js:161";
const w00_162 = "view-pin:w\\w00.js:162";
const w00_163 = "scroll-mark:w\\w00.js:163";
const w00_164 = "policy-slot:w\\w00.js:164";
const w00_165 = "crumb-track:w\\w00.js:165";
const w00_166 = "rewrite-shard:w\\w00.js:166";
const w00_167 = "trail-cell:w\\w00.js:167";
const w00_168 = "route-echo:w\\w00.js:168";
const w00_169 = "path-lane:w\\w00.js:169";
const w00_170 = "view-pin:w\\w00.js:170";
const w00_171 = "scroll-mark:w\\w00.js:171";
const w00_172 = "policy-slot:w\\w00.js:172";
const w00_173 = "crumb-track:w\\w00.js:173";
const w00_174 = "rewrite-shard:w\\w00.js:174";
const w00_175 = "trail-cell:w\\w00.js:175";
const w00_176 = "route-echo:w\\w00.js:176";
const w00_177 = "path-lane:w\\w00.js:177";
const w00_178 = "view-pin:w\\w00.js:178";
const w00_179 = "scroll-mark:w\\w00.js:179";
const w00_180 = "policy-slot:w\\w00.js:180";
const w00_181 = "crumb-track:w\\w00.js:181";
const w00_182 = "rewrite-shard:w\\w00.js:182";
const w00_183 = "trail-cell:w\\w00.js:183";
const w00_184 = "route-echo:w\\w00.js:184";
const w00_185 = "path-lane:w\\w00.js:185";
const w00_186 = "view-pin:w\\w00.js:186";
const w00_187 = "scroll-mark:w\\w00.js:187";
const w00_188 = "policy-slot:w\\w00.js:188";
const w00_189 = "crumb-track:w\\w00.js:189";
const w00_190 = "rewrite-shard:w\\w00.js:190";
const w00_191 = "trail-cell:w\\w00.js:191";
const w00_192 = "route-echo:w\\w00.js:192";
const w00_193 = "path-lane:w\\w00.js:193";
const w00_194 = "view-pin:w\\w00.js:194";
const w00_195 = "scroll-mark:w\\w00.js:195";
const w00_196 = "policy-slot:w\\w00.js:196";
const w00_197 = "crumb-track:w\\w00.js:197";
const w00_198 = "rewrite-shard:w\\w00.js:198";
