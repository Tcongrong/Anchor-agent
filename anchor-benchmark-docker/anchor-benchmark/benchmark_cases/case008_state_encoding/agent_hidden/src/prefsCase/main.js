import { mountWorkspacePanel } from "./view/mountWorkspacePanel.js";
import { bindPreferenceInputGate } from "./gate/preferenceInputGate.js";
import { primeIdleWorkspaceMarks } from "./diversions/idleWorkspaceMarks.js";
import { computeViewportProfileCode } from "./diversions/viewportProfileCode.js";
import { computeSessionWarmDigest } from "./diversions/sessionWarmDigest.js";
import { buildPanelLayoutFingerprint } from "./diversions/panelLayoutFingerprint.js";
import { prefsDistractors } from "./prefsDistractors.js";

// Retain the prefs distractor modules in the captured bundle (haystack); inert at runtime.
globalThis.__prefsDistractors = prefsDistractors;

mountWorkspacePanel();
primeIdleWorkspaceMarks();
computeViewportProfileCode();
computeSessionWarmDigest();
buildPanelLayoutFingerprint();
bindPreferenceInputGate();
