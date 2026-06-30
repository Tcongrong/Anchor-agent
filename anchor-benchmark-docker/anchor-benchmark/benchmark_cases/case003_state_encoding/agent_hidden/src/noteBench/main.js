import { bindShortcutGate } from "./gate/shortcutDraftGate.js";
import { bindDraftIntentBus } from "./intent/draftIntentBus.js";
import { initializeNoteSidecars } from "./sidecars/editorMetricCode.js";
import { noteDistractors } from "./noteDistractors.js";
import { initShadowNoteEncoders } from "./shadowBoot.js";
import { nameConfusionDecoys } from "./decoys/nameConfusionDecoys.js";

globalThis.__noteDistractors = noteDistractors;
globalThis.__noteNameDecoys = nameConfusionDecoys;
initShadowNoteEncoders();
initializeNoteSidecars();
bindDraftIntentBus();
bindShortcutGate();
