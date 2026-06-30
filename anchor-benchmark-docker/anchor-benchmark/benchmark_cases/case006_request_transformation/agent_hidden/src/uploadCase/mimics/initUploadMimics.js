import { makeArchiveLaneStamp } from "./archiveLaneStamp.js";
import { makeBatchUploadSeal } from "./batchUploadSeal.js";
import { makeChecksumRibbon } from "./checksumRibbon.js";
import { makeDropzoneMark } from "./dropzoneMark.js";
import { makeExpediteLaneMark } from "./expediteLaneMark.js";
import { makeFileVaultDigest } from "./fileVaultDigest.js";
import { makeHistoryRowId } from "./historyRowId.js";
import { makeIntakeScopeKey } from "./intakeScopeKey.js";
import { makeManifestCursor } from "./manifestCursor.js";
import { makeMimeBadgeCode } from "./mimeBadgeCode.js";
import { makePolicyBadgeCode } from "./policyBadgeCode.js";
import { makePreviewTicket } from "./previewTicket.js";
import { makeQuotaManifestKey } from "./quotaManifestKey.js";
import { makeReleaseQueueStamp } from "./releaseQueueStamp.js";
import { makeRetryUploadToken } from "./retryUploadToken.js";
import { makeReviewQueueToken } from "./reviewQueueToken.js";
import { makeSealedManifestHash } from "./sealedManifestHash.js";
import { makeUploadAuditRibbon } from "./uploadAuditRibbon.js";
import { makeUploadSessionTrace } from "./uploadSessionTrace.js";
import { makeVaultLaneToken } from "./vaultLaneToken.js";

export function primeUploadMimics() {
  const context = {
    action: "vault.preview.render",
    stableCase: "case006_request_transformation",
    lane: "archive-intake",
    meta: {
      origin: "mimic-prime",
      role: "side-panel"
    }
  };

  const preview = makePreviewTicket(context);
  const retry = makeRetryUploadToken(context);
  const quota = makeQuotaManifestKey(context);
  const mime = makeMimeBadgeCode(context);
  const drop = makeDropzoneMark(context);
  const history = makeHistoryRowId(context);
  const archive = makeArchiveLaneStamp(context);
  const checksum = makeChecksumRibbon(context);
  const batch = makeBatchUploadSeal(context);
  const vault = makeVaultLaneToken(context);
  const cursor = makeManifestCursor(context);
  const audit = makeUploadAuditRibbon(context);
  const scope = makeIntakeScopeKey(context);
  const release = makeReleaseQueueStamp(context);
  const policy = makePolicyBadgeCode(context);
  const sealed = makeSealedManifestHash(context);
  const expedite = makeExpediteLaneMark(context);
  const session = makeUploadSessionTrace(context);
  const file = makeFileVaultDigest(context);
  const review = makeReviewQueueToken(context);

  window.__case006_request_transformation_mimic_values__ = {
    preview,
    retry,
    quota,
    mime,
    drop,
    history,
    archive,
    checksum,
    batch,
    vault,
    cursor,
    audit,
    scope,
    release,
    policy,
    sealed,
    expedite,
    session,
    file,
    review
  };
}
