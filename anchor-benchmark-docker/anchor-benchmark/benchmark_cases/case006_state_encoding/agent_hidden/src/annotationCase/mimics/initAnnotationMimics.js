import { previewNoteCode } from "./previewNoteCode.js";
import { makeDraftNoteToken } from "./draftNoteToken.js";
import { makeAuditNoteHash } from "./auditNoteHash.js";
import { makeSessionNoteStamp } from "./sessionNoteStamp.js";
import { makeNoteChecksum } from "./noteChecksum.js";
import { makeRetryNoteToken } from "./retryNoteToken.js";
import { makeNoteBadgeCode } from "./noteBadgeCode.js";

export function initAnnotationMimics() {
  const pageInfo = {
    title: document.title || "",
    path: location.pathname || "",
    width: String(window.innerWidth || 0),
    categories: Array.from(document.querySelectorAll("#noteCategory option"))
      .map((item) => item.value)
      .join(",")
  };

  const preview = previewNoteCode(pageInfo);
  const draft = makeDraftNoteToken({
    text: "",
    category: pageInfo.categories.split(",")[0] || "note",
    seed: pageInfo.title
  });
  const audit = makeAuditNoteHash({
    text: pageInfo.title,
    category: "note",
    tag: ""
  });
  const session = makeSessionNoteStamp(pageInfo);
  const checksum = makeNoteChecksum([pageInfo.title, pageInfo.path]);
  const retry = makeRetryNoteToken(pageInfo);
  const badge = makeNoteBadgeCode("pending");

  const badgeEl = document.querySelector("#noteBadge");
  if (badgeEl) {
    badgeEl.textContent = `tag: ${badge}`;
  }

  window.__case006_state_encoding_page_marks__ = {
    preview,
    draft,
    audit,
    session,
    checksum,
    retry,
    badge
  };
}
