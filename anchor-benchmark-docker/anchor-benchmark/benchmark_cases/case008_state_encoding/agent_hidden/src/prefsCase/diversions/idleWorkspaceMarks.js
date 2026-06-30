function describeNode(node) {
  return `${node.tagName.toLowerCase()}#${node.id || "anon"}`;
}

export function primeIdleWorkspaceMarks() {
  const root = document.querySelector(".prefs-shell");
  if (!root) return;

  let mutationCount = 0;
  const observer = new MutationObserver((records) => {
    mutationCount += records.length;
    const mark = `mu${mutationCount.toString(36).padStart(4, "0")}`;
    window.__case008_idle_marks__.push(mark);
  });

  observer.observe(root, { childList: true, subtree: true, attributes: true });

  const seedNodes = Array.from(root.querySelectorAll("[data-action]")).map(describeNode);
  window.__case008_idle_marks__ = [`seed:${seedNodes.length}`];
}
