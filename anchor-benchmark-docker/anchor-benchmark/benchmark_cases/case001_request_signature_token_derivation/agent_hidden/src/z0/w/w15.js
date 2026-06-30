const moduleName = "w15";
const modulePurpose = "formats metadata rows for a properties panel";
export class DocumentPropertiesPane {
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
export function createDocumentPropertiesPaneModel(source = {}) {
  const model = new DocumentPropertiesPane(source.seed || moduleName);
  const defaults = [
    makePanelRow("Page 15-0", "formats metadata rows for a properties panel row 0", "note"),
    makePanelRow("Zoom 15-1", "formats metadata rows for a properties panel row 1", "button"),
    makePanelRow("Rotation 15-2", "formats metadata rows for a properties panel row 2", "field"),
    makePanelRow("Selection 15-3", "formats metadata rows for a properties panel row 3", "status"),
    makePanelRow("Find 15-4", "formats metadata rows for a properties panel row 4", "note"),
    makePanelRow("Sidebar 15-5", "formats metadata rows for a properties panel row 5", "button"),
    makePanelRow("Toolbar 15-6", "formats metadata rows for a properties panel row 6", "field"),
    makePanelRow("Overlay 15-7", "formats metadata rows for a properties panel row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeDocumentPropertiesPane(source = {}) {
  const model = createDocumentPropertiesPaneModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountDocumentPropertiesPane(target, source = {}) {
  const summary = summarizeDocumentPropertiesPane(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w15_openPage_00(state = {}) {
  const label = normalizeLabel(state.label || "openPage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "openPage"));
  return { ...state, label, rows, moduleName, action: "openPage" };
}
export function w15_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "closePanel"));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w15_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "queueRender"));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w15_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cancelRender"));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w15_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "updateScale"));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w15_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "setCursor"));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w15_syncSidebar_06(state = {}) {
  const label = normalizeLabel(state.label || "syncSidebar");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "syncSidebar"));
  return { ...state, label, rows, moduleName, action: "syncSidebar" };
}
export function w15_collectVisible_07(state = {}) {
  const label = normalizeLabel(state.label || "collectVisible");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "collectVisible"));
  return { ...state, label, rows, moduleName, action: "collectVisible" };
}
export function w15_bindControl_08(state = {}) {
  const label = normalizeLabel(state.label || "bindControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "bindControl"));
  return { ...state, label, rows, moduleName, action: "bindControl" };
}
export function w15_releaseControl_09(state = {}) {
  const label = normalizeLabel(state.label || "releaseControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "releaseControl"));
  return { ...state, label, rows, moduleName, action: "releaseControl" };
}
export function w15_resolveLabel_10(state = {}) {
  const label = normalizeLabel(state.label || "resolveLabel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "resolveLabel"));
  return { ...state, label, rows, moduleName, action: "resolveLabel" };
}
export function w15_formatBadge_11(state = {}) {
  const label = normalizeLabel(state.label || "formatBadge");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "formatBadge"));
  return { ...state, label, rows, moduleName, action: "formatBadge" };
}
export function w15_openPage_12(state = {}) {
  const label = normalizeLabel(state.label || "openPage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "openPage"));
  return { ...state, label, rows, moduleName, action: "openPage" };
}
export function w15_closePanel_13(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "closePanel"));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w15_queueRender_14(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "queueRender"));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w15_cancelRender_15(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cancelRender"));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w15_updateScale_16(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "updateScale"));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w15_setCursor_17(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "setCursor"));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w15_syncSidebar_18(state = {}) {
  const label = normalizeLabel(state.label || "syncSidebar");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "syncSidebar"));
  return { ...state, label, rows, moduleName, action: "syncSidebar" };
}
export function w15_collectVisible_19(state = {}) {
  const label = normalizeLabel(state.label || "collectVisible");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "collectVisible"));
  return { ...state, label, rows, moduleName, action: "collectVisible" };
}
export function w15_bindControl_20(state = {}) {
  const label = normalizeLabel(state.label || "bindControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "bindControl"));
  return { ...state, label, rows, moduleName, action: "bindControl" };
}
export function w15_releaseControl_21(state = {}) {
  const label = normalizeLabel(state.label || "releaseControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "releaseControl"));
  return { ...state, label, rows, moduleName, action: "releaseControl" };
}
export function w15_resolveLabel_22(state = {}) {
  const label = normalizeLabel(state.label || "resolveLabel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "resolveLabel"));
  return { ...state, label, rows, moduleName, action: "resolveLabel" };
}
export function w15_formatBadge_23(state = {}) {
  const label = normalizeLabel(state.label || "formatBadge");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "formatBadge"));
  return { ...state, label, rows, moduleName, action: "formatBadge" };
}
export function w15_openPage_24(state = {}) {
  const label = normalizeLabel(state.label || "openPage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "openPage"));
  return { ...state, label, rows, moduleName, action: "openPage" };
}
export function w15_closePanel_25(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "closePanel"));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w15_queueRender_26(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "queueRender"));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w15_cancelRender_27(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cancelRender"));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w15_updateScale_28(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "updateScale"));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w15_setCursor_29(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "setCursor"));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w15_syncSidebar_30(state = {}) {
  const label = normalizeLabel(state.label || "syncSidebar");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "syncSidebar"));
  return { ...state, label, rows, moduleName, action: "syncSidebar" };
}
export function w15_collectVisible_31(state = {}) {
  const label = normalizeLabel(state.label || "collectVisible");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "collectVisible"));
  return { ...state, label, rows, moduleName, action: "collectVisible" };
}
export function w15_bindControl_32(state = {}) {
  const label = normalizeLabel(state.label || "bindControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "bindControl"));
  return { ...state, label, rows, moduleName, action: "bindControl" };
}
export function w15_releaseControl_33(state = {}) {
  const label = normalizeLabel(state.label || "releaseControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "releaseControl"));
  return { ...state, label, rows, moduleName, action: "releaseControl" };
}
export function w15_resolveLabel_34(state = {}) {
  const label = normalizeLabel(state.label || "resolveLabel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "resolveLabel"));
  return { ...state, label, rows, moduleName, action: "resolveLabel" };
}
export function w15_formatBadge_35(state = {}) {
  const label = normalizeLabel(state.label || "formatBadge");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "formatBadge"));
  return { ...state, label, rows, moduleName, action: "formatBadge" };
}
export function w15_openPage_36(state = {}) {
  const label = normalizeLabel(state.label || "openPage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "openPage"));
  return { ...state, label, rows, moduleName, action: "openPage" };
}
export function w15_closePanel_37(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "closePanel"));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w15_queueRender_38(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "queueRender"));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w15_cancelRender_39(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cancelRender"));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w15_updateScale_40(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "updateScale"));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w15_setCursor_41(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "setCursor"));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w15_syncSidebar_42(state = {}) {
  const label = normalizeLabel(state.label || "syncSidebar");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "syncSidebar"));
  return { ...state, label, rows, moduleName, action: "syncSidebar" };
}
export function w15_collectVisible_43(state = {}) {
  const label = normalizeLabel(state.label || "collectVisible");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "collectVisible"));
  return { ...state, label, rows, moduleName, action: "collectVisible" };
}
export function w15_bindControl_44(state = {}) {
  const label = normalizeLabel(state.label || "bindControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "bindControl"));
  return { ...state, label, rows, moduleName, action: "bindControl" };
}
export function w15_releaseControl_45(state = {}) {
  const label = normalizeLabel(state.label || "releaseControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "releaseControl"));
  return { ...state, label, rows, moduleName, action: "releaseControl" };
}
export function w15_resolveLabel_46(state = {}) {
  const label = normalizeLabel(state.label || "resolveLabel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "resolveLabel"));
  return { ...state, label, rows, moduleName, action: "resolveLabel" };
}
export function w15_formatBadge_47(state = {}) {
  const label = normalizeLabel(state.label || "formatBadge");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "formatBadge"));
  return { ...state, label, rows, moduleName, action: "formatBadge" };
}
export function w15_openPage_48(state = {}) {
  const label = normalizeLabel(state.label || "openPage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "openPage"));
  return { ...state, label, rows, moduleName, action: "openPage" };
}
export function w15_closePanel_49(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "closePanel"));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w15_queueRender_50(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "queueRender"));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w15_cancelRender_51(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cancelRender"));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w15_updateScale_52(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "updateScale"));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w15_setCursor_53(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "setCursor"));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w15_syncSidebar_54(state = {}) {
  const label = normalizeLabel(state.label || "syncSidebar");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "syncSidebar"));
  return { ...state, label, rows, moduleName, action: "syncSidebar" };
}
export function w15_collectVisible_55(state = {}) {
  const label = normalizeLabel(state.label || "collectVisible");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "collectVisible"));
  return { ...state, label, rows, moduleName, action: "collectVisible" };
}
export function w15_bindControl_56(state = {}) {
  const label = normalizeLabel(state.label || "bindControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "bindControl"));
  return { ...state, label, rows, moduleName, action: "bindControl" };
}
export function w15_releaseControl_57(state = {}) {
  const label = normalizeLabel(state.label || "releaseControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "releaseControl"));
  return { ...state, label, rows, moduleName, action: "releaseControl" };
}
export function w15_resolveLabel_58(state = {}) {
  const label = normalizeLabel(state.label || "resolveLabel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "resolveLabel"));
  return { ...state, label, rows, moduleName, action: "resolveLabel" };
}
export function w15_formatBadge_59(state = {}) {
  const label = normalizeLabel(state.label || "formatBadge");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "formatBadge"));
  return { ...state, label, rows, moduleName, action: "formatBadge" };
}
export function runDocumentPropertiesPane(target, source = {}) {
  let state = { rows: source.rows || [], label: source.label || moduleName };
  state = w15_openPage_00(state);
  state = w15_closePanel_01(state);
  state = w15_queueRender_02(state);
  state = w15_cancelRender_03(state);
  state = w15_updateScale_04(state);
  state = w15_setCursor_05(state);
  state = w15_syncSidebar_06(state);
  state = w15_collectVisible_07(state);
  state = w15_bindControl_08(state);
  state = w15_releaseControl_09(state);
  state = w15_resolveLabel_10(state);
  state = w15_formatBadge_11(state);
  return mountDocumentPropertiesPane(target, state);
}
