const priorityLabels = {
  P1: "High",
  P2: "Normal",
  P3: "Low"
};

function setStatus(text) {
  const node = document.querySelector("#draftStatus");
  if (node) {
    node.textContent = text;
  }
}

function renderPreviewCard(record, hints) {
  const preview = document.querySelector("#draftPreview");
  if (!preview) return;

  const safeBody = record.body || "(empty note)";
  preview.innerHTML = "";

  const heading = document.createElement("strong");
  heading.textContent = `${priorityLabels[record.priority] || record.priority} note`;

  const meta = document.createElement("p");
  meta.className = "muted";
  meta.textContent = `#${record.tag} · ${hints?.bodyLength ?? safeBody.length} chars`;

  const body = document.createElement("p");
  body.textContent = safeBody;

  preview.append(heading, meta, body);
}

export function paintNotePreview(record, hints = {}) {
  const list = document.querySelector("#noteList");
  if (!list || !record) return;

  renderPreviewCard(record, hints);

  const item = document.createElement("li");
  item.dataset.priority = record.priority;
  item.textContent = `[${record.priority}] ${record.tag}: ${record.body}`;
  list.appendChild(item);

  setStatus("Saved locally");
}
