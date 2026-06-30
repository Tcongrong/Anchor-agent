import { processAnnotation } from "../pipeline/processAnnotation.js";

const NOTE_EVENT = "note:stage";

export function bindAnnotationForm() {
  document.addEventListener(NOTE_EVENT, (evt) => {
    const payload = evt.detail;
    queueMicrotask(() => processAnnotation(payload));
  });

  const form = document.querySelector("#annotationForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const payload = {
      text: document.querySelector("#noteText")?.value || "",
      category: document.querySelector("#noteCategory")?.value || "",
      tag: document.querySelector("#noteTag")?.value || "",
      pageRef: document.title || ""
    };

    document.dispatchEvent(
      new CustomEvent(NOTE_EVENT, { detail: payload, bubbles: false })
    );
  });
}
