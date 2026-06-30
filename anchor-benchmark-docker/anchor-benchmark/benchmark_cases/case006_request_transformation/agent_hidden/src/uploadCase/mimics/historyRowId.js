function historyId(rows) {
  let mix = 0x1234567;

  rows.forEach((row, rowIndex) => {
    for (let index = 0; index < row.length; index += 1) {
      mix ^= Math.imul(row.charCodeAt(index) + rowIndex + 31, 0x165667b1);
      mix = (mix << 5) | (mix >>> 27);
    }
  });

  return `hr_${(mix >>> 0).toString(36).slice(-7)}`;
}

export function makeHistoryRowId() {
  const rows = [...document.querySelectorAll("#historyList li")].map((node) => node.textContent || "");
  const value = historyId(rows);
  window.__history_row_id__ = value;
  return value;
}
