const HISTORY_LIMIT = 6;
const historyRing = [];

function summarizeCommand(command) {
  return `${command?.type || "?"}:${command?.origin || "?"}`;
}

export function recordPreferenceHistory(command) {
  historyRing.push(summarizeCommand(command));
  if (historyRing.length > HISTORY_LIMIT) historyRing.shift();
  return historyRing.slice();
}

export function getPreferenceHistorySnapshot() {
  return historyRing.slice();
}
