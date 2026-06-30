import { bindUploadDelegation } from "./actions/uploadDelegate.js";
import { primeUploadMimics } from "./mimics/initUploadMimics.js";
import { uploadDistractors } from "./uploadDistractors.js";

// Retain the upload distractor modules in the captured app bundle (haystack); inert at runtime.
globalThis.__uploadDistractors = uploadDistractors;
primeUploadMimics();
bindUploadDelegation();
