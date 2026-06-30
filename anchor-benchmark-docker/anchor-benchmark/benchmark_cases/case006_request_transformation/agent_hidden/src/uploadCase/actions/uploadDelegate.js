import { dispatchUploadIntent } from "../intents/dispatchUploadIntent.js";

export function bindUploadDelegation() {
  document.addEventListener(
    "click",
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const node = target.closest("[data-action]");
      if (!node) return;

      const action = node.getAttribute("data-action");
      if (!action) return;

      dispatchUploadIntent(action, {
        origin: "intake-page",
        tag: node.tagName,
        role: node.id || ""
      });
    },
    true
  );
}
