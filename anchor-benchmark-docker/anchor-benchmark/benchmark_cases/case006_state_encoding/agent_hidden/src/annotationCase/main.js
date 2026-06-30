import { bindAnnotationForm } from "./handler/annotationFormListener.js";
import { initAnnotationMimics } from "./mimics/initAnnotationMimics.js";
import { annotationDistractors } from "./annotationDistractors.js";

// Retain the annotation distractor modules in the captured bundle (haystack); inert at runtime.
globalThis.__annotationDistractors = annotationDistractors;
initAnnotationMimics();
bindAnnotationForm();
