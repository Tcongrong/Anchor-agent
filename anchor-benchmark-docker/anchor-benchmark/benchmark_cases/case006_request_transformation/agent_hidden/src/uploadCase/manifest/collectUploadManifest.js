import { readReviewedManifest } from "./draftManifestStage.js";

export function collectUploadManifest() {
  return readReviewedManifest() || {
    fileName: "untitled.txt",
    description: "blank",
    category: "ops",
    seed: "case006_request_transformation_manifest_seed",
    pageTitle: document.title || "archive",
    visualLane: document.querySelector("#dropzoneVisual")?.textContent || "",
    review: {
      mode: "fallback",
      source: "unstaged"
    }
  };
}
