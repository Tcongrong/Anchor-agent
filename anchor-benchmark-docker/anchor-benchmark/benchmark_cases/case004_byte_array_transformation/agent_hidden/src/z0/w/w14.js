const moduleName = "w14";
const modulePurpose = "indexes named attachments and sizes";
export class AttachmentCatalog {
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
export function createAttachmentCatalogModel(source = {}) {
  const model = new AttachmentCatalog(source.seed || moduleName);
  const defaults = [
    makePanelRow("Page 14-0", "indexes named attachments and sizes row 0", "note"),
    makePanelRow("Zoom 14-1", "indexes named attachments and sizes row 1", "button"),
    makePanelRow("Rotation 14-2", "indexes named attachments and sizes row 2", "field"),
    makePanelRow("Selection 14-3", "indexes named attachments and sizes row 3", "status"),
    makePanelRow("Find 14-4", "indexes named attachments and sizes row 4", "note"),
    makePanelRow("Sidebar 14-5", "indexes named attachments and sizes row 5", "button"),
    makePanelRow("Toolbar 14-6", "indexes named attachments and sizes row 6", "field"),
    makePanelRow("Overlay 14-7", "indexes named attachments and sizes row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeAttachmentCatalog(source = {}) {
  const model = createAttachmentCatalogModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountAttachmentCatalog(target, source = {}) {
  const summary = summarizeAttachmentCatalog(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w14_openPage_00(state = {}) {
  const label = normalizeLabel(state.label || "openPage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "openPage"));
  return { ...state, label, rows, moduleName, action: "openPage" };
}
export function w14_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "closePanel"));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w14_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "queueRender"));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w14_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cancelRender"));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w14_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "updateScale"));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w14_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "setCursor"));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w14_syncSidebar_06(state = {}) {
  const label = normalizeLabel(state.label || "syncSidebar");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "syncSidebar"));
  return { ...state, label, rows, moduleName, action: "syncSidebar" };
}
export function w14_collectVisible_07(state = {}) {
  const label = normalizeLabel(state.label || "collectVisible");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "collectVisible"));
  return { ...state, label, rows, moduleName, action: "collectVisible" };
}
export function w14_bindControl_08(state = {}) {
  const label = normalizeLabel(state.label || "bindControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "bindControl"));
  return { ...state, label, rows, moduleName, action: "bindControl" };
}
export function w14_releaseControl_09(state = {}) {
  const label = normalizeLabel(state.label || "releaseControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "releaseControl"));
  return { ...state, label, rows, moduleName, action: "releaseControl" };
}
export function w14_resolveLabel_10(state = {}) {
  const label = normalizeLabel(state.label || "resolveLabel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "resolveLabel"));
  return { ...state, label, rows, moduleName, action: "resolveLabel" };
}
export function w14_formatBadge_11(state = {}) {
  const label = normalizeLabel(state.label || "formatBadge");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "formatBadge"));
  return { ...state, label, rows, moduleName, action: "formatBadge" };
}
export function w14_openPage_12(state = {}) {
  const label = normalizeLabel(state.label || "openPage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "openPage"));
  return { ...state, label, rows, moduleName, action: "openPage" };
}
export function w14_closePanel_13(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "closePanel"));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w14_queueRender_14(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "queueRender"));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w14_cancelRender_15(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cancelRender"));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w14_updateScale_16(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "updateScale"));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w14_setCursor_17(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "setCursor"));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w14_syncSidebar_18(state = {}) {
  const label = normalizeLabel(state.label || "syncSidebar");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "syncSidebar"));
  return { ...state, label, rows, moduleName, action: "syncSidebar" };
}
export function w14_collectVisible_19(state = {}) {
  const label = normalizeLabel(state.label || "collectVisible");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "collectVisible"));
  return { ...state, label, rows, moduleName, action: "collectVisible" };
}
export function w14_bindControl_20(state = {}) {
  const label = normalizeLabel(state.label || "bindControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "bindControl"));
  return { ...state, label, rows, moduleName, action: "bindControl" };
}
export function w14_releaseControl_21(state = {}) {
  const label = normalizeLabel(state.label || "releaseControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "releaseControl"));
  return { ...state, label, rows, moduleName, action: "releaseControl" };
}
export function w14_resolveLabel_22(state = {}) {
  const label = normalizeLabel(state.label || "resolveLabel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "resolveLabel"));
  return { ...state, label, rows, moduleName, action: "resolveLabel" };
}
export function w14_formatBadge_23(state = {}) {
  const label = normalizeLabel(state.label || "formatBadge");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "formatBadge"));
  return { ...state, label, rows, moduleName, action: "formatBadge" };
}
export function w14_openPage_24(state = {}) {
  const label = normalizeLabel(state.label || "openPage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "openPage"));
  return { ...state, label, rows, moduleName, action: "openPage" };
}
export function w14_closePanel_25(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "closePanel"));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w14_queueRender_26(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "queueRender"));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w14_cancelRender_27(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cancelRender"));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w14_updateScale_28(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "updateScale"));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w14_setCursor_29(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "setCursor"));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w14_syncSidebar_30(state = {}) {
  const label = normalizeLabel(state.label || "syncSidebar");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "syncSidebar"));
  return { ...state, label, rows, moduleName, action: "syncSidebar" };
}
export function w14_collectVisible_31(state = {}) {
  const label = normalizeLabel(state.label || "collectVisible");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "collectVisible"));
  return { ...state, label, rows, moduleName, action: "collectVisible" };
}
export function w14_bindControl_32(state = {}) {
  const label = normalizeLabel(state.label || "bindControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "bindControl"));
  return { ...state, label, rows, moduleName, action: "bindControl" };
}
export function w14_releaseControl_33(state = {}) {
  const label = normalizeLabel(state.label || "releaseControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "releaseControl"));
  return { ...state, label, rows, moduleName, action: "releaseControl" };
}
export function w14_resolveLabel_34(state = {}) {
  const label = normalizeLabel(state.label || "resolveLabel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "resolveLabel"));
  return { ...state, label, rows, moduleName, action: "resolveLabel" };
}
export function w14_formatBadge_35(state = {}) {
  const label = normalizeLabel(state.label || "formatBadge");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "formatBadge"));
  return { ...state, label, rows, moduleName, action: "formatBadge" };
}
export function w14_openPage_36(state = {}) {
  const label = normalizeLabel(state.label || "openPage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "openPage"));
  return { ...state, label, rows, moduleName, action: "openPage" };
}
export function w14_closePanel_37(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "closePanel"));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w14_queueRender_38(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "queueRender"));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w14_cancelRender_39(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cancelRender"));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w14_updateScale_40(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "updateScale"));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w14_setCursor_41(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "setCursor"));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w14_syncSidebar_42(state = {}) {
  const label = normalizeLabel(state.label || "syncSidebar");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "syncSidebar"));
  return { ...state, label, rows, moduleName, action: "syncSidebar" };
}
export function w14_collectVisible_43(state = {}) {
  const label = normalizeLabel(state.label || "collectVisible");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "collectVisible"));
  return { ...state, label, rows, moduleName, action: "collectVisible" };
}
export function w14_bindControl_44(state = {}) {
  const label = normalizeLabel(state.label || "bindControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "bindControl"));
  return { ...state, label, rows, moduleName, action: "bindControl" };
}
export function w14_releaseControl_45(state = {}) {
  const label = normalizeLabel(state.label || "releaseControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "releaseControl"));
  return { ...state, label, rows, moduleName, action: "releaseControl" };
}
export function w14_resolveLabel_46(state = {}) {
  const label = normalizeLabel(state.label || "resolveLabel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "resolveLabel"));
  return { ...state, label, rows, moduleName, action: "resolveLabel" };
}
export function w14_formatBadge_47(state = {}) {
  const label = normalizeLabel(state.label || "formatBadge");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "formatBadge"));
  return { ...state, label, rows, moduleName, action: "formatBadge" };
}
export function w14_openPage_48(state = {}) {
  const label = normalizeLabel(state.label || "openPage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "openPage"));
  return { ...state, label, rows, moduleName, action: "openPage" };
}
export function w14_closePanel_49(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "closePanel"));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w14_queueRender_50(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "queueRender"));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w14_cancelRender_51(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cancelRender"));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w14_updateScale_52(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "updateScale"));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w14_setCursor_53(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "setCursor"));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w14_syncSidebar_54(state = {}) {
  const label = normalizeLabel(state.label || "syncSidebar");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "syncSidebar"));
  return { ...state, label, rows, moduleName, action: "syncSidebar" };
}
export function w14_collectVisible_55(state = {}) {
  const label = normalizeLabel(state.label || "collectVisible");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "collectVisible"));
  return { ...state, label, rows, moduleName, action: "collectVisible" };
}
export function w14_bindControl_56(state = {}) {
  const label = normalizeLabel(state.label || "bindControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "bindControl"));
  return { ...state, label, rows, moduleName, action: "bindControl" };
}
export function w14_releaseControl_57(state = {}) {
  const label = normalizeLabel(state.label || "releaseControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "releaseControl"));
  return { ...state, label, rows, moduleName, action: "releaseControl" };
}
export function w14_resolveLabel_58(state = {}) {
  const label = normalizeLabel(state.label || "resolveLabel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "resolveLabel"));
  return { ...state, label, rows, moduleName, action: "resolveLabel" };
}
export function w14_formatBadge_59(state = {}) {
  const label = normalizeLabel(state.label || "formatBadge");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "formatBadge"));
  return { ...state, label, rows, moduleName, action: "formatBadge" };
}
export function runAttachmentCatalog(target, source = {}) {
  let state = { rows: source.rows || [], label: source.label || moduleName };
  state = w14_openPage_00(state);
  state = w14_closePanel_01(state);
  state = w14_queueRender_02(state);
  state = w14_cancelRender_03(state);
  state = w14_updateScale_04(state);
  state = w14_setCursor_05(state);
  state = w14_syncSidebar_06(state);
  state = w14_collectVisible_07(state);
  state = w14_bindControl_08(state);
  state = w14_releaseControl_09(state);
  state = w14_resolveLabel_10(state);
  state = w14_formatBadge_11(state);
  return mountAttachmentCatalog(target, state);
}
