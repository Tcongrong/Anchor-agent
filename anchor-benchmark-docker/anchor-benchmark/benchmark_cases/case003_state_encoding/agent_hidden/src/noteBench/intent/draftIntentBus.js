import { resolveDraftFlow } from "../flow/flowCatalog.js";
import { runDraftFlow } from "../flow/flowRunner.js";

export function bindDraftIntentBus() {
  document.addEventListener("note:draft-intent", (event) => {
    const intent = event.detail || {};
    const flow = resolveDraftFlow(intent);
    if (!flow) return;

    runDraftFlow(flow, {
      intent,
      source: "intent-bus",
      command: intent.command
    });
  });
}
