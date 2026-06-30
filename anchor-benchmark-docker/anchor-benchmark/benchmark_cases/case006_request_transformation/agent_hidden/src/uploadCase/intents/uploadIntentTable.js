import { runUploadManifestFlow } from "../manifest/manifestQueue.js";
import { parseManifestDraft, queueManifestForRelease } from "../manifest/draftManifestStage.js";
import { makeArchiveLaneStamp } from "../mimics/archiveLaneStamp.js";
import { makePreviewTicket } from "../mimics/previewTicket.js";
import { makeQuotaManifestKey } from "../mimics/quotaManifestKey.js";
import { makeRetryUploadToken } from "../mimics/retryUploadToken.js";

export const uploadIntentTable = {
  "vault.manifest.parse": parseManifestDraft,
  "vault.manifest.queue": queueManifestForRelease,
  "vault.request.release": runUploadManifestFlow,
  "vault.preview.render": makePreviewTicket,
  "vault.retry.prepare": makeRetryUploadToken,
  "vault.quota.refresh": makeQuotaManifestKey,
  "vault.archive.mark": makeArchiveLaneStamp
};
