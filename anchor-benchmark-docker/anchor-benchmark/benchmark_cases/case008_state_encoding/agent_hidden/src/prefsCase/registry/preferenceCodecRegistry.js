import { encodeWorkspaceState } from "../codecCore/workspaceStateCodec.js";
import { encodeContrastState } from "../codecCore/contrastStateCodec.js";
import { encodeArchiveStamp } from "../diversions/archiveStampCodec.js";

const preferenceCodecs = {
  "workspace-state-v3": encodeWorkspaceState,
  "contrast-state-v1": encodeContrastState,
  "archive-stamp-v2": encodeArchiveStamp
};

export function getPreferenceCodec(codecKey) {
  return preferenceCodecs[codecKey] || preferenceCodecs["workspace-state-v3"];
}
