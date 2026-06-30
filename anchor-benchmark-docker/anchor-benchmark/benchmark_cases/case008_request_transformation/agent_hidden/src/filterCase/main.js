import { installFilterDelegate } from "./gate/filterDelegate.js";
import { renderInitialRows } from "./rules/applyVisualFilter.js";
import { primeDiversionState } from "./diversions/primeDiversionState.js";
import { filterDistractors } from "./filterDistractors.js";

// Retain the filter distractor modules in the captured app bundle (haystack); inert at runtime.
globalThis.__filterDistractors = filterDistractors;

renderInitialRows();
primeDiversionState(document);
installFilterDelegate(document);
