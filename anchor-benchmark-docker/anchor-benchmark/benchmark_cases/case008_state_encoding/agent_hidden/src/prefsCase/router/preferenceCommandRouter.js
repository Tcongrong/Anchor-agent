import { runSavePreferencesPipeline } from "../pipeline/runSavePreferencesPipeline.js";
import { makeThemePreviewCode } from "../diversions/themePreviewCode.js";
import { makeExportSnapshotDigest } from "../diversions/exportSnapshotDigest.js";
import { makeSyncTokenStamp } from "../diversions/syncTokenStamp.js";
import { makeResetConfirmCode } from "../diversions/resetConfirmCode.js";
import { recordPreferenceHistory } from "../diversions/preferenceHistoryLog.js";

const commandRouteTable = {
  "prefs.save": runSavePreferencesPipeline,
  "prefs.preview": makeThemePreviewCode,
  "prefs.export": makeExportSnapshotDigest,
  "prefs.sync": makeSyncTokenStamp,
  "prefs.reset": makeResetConfirmCode
};

export async function routePreferenceCommand(command) {
  const handler = commandRouteTable[command.type];

  if (typeof handler !== "function") {
    return null;
  }

  if (command.type === "prefs.save") {
    recordPreferenceHistory(command);
  }

  return handler(command);
}
