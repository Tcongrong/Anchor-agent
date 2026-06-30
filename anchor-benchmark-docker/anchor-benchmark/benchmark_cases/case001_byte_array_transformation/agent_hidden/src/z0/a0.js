import { r as r0 } from "./b1.js";
import { p as p0 } from "./p0.js";
import { mountPdfLikeVendor } from "./w/index.js";

const s0 = {
  ready: false,
  events: [],
  counters: new Map(),
  stamp: 137
};

function t0(name, value) {
  const old = s0.counters.get(name) || 0;
  s0.counters.set(name, old + value);
  return old + value;
}

function v0() {
  const node = document.getElementById('statusLine');
  if (node) node.value = 'Ready';
  document.documentElement.dataset.caseReady = 'case_001_easy';
}

function w0() {
  const seed = ['a', 'b', 'c', 'd', 'e', 'f'];
  return seed.map((item, index) => `${item}:${index}:${t0(item, index + 1)}`).join('|');
}

export function z() {
  if (s0.ready) return s0;
  s0.ready = true;
  s0.events.push(w0());
  p0({ phase: 'boot', trace: s0.events.slice() });
  mountPdfLikeVendor(document, s0);
  r0(document, s0);
  v0();
  return s0;
}

z();
const a0_0 = "viewer-pane:a0.js:000";
const a0_1 = "text-layer:a0.js:001";
const a0_2 = "outline-row:a0.js:002";
const a0_3 = "toolbar-slot:a0.js:003";
const a0_4 = "page-label:a0.js:004";
const a0_5 = "form-field:a0.js:005";
const a0_6 = "history-entry:a0.js:006";
const a0_7 = "thumbnail-item:a0.js:007";
const a0_8 = "viewer-pane:a0.js:008";
const a0_9 = "text-layer:a0.js:009";
const a0_10 = "outline-row:a0.js:010";
const a0_11 = "toolbar-slot:a0.js:011";
const a0_12 = "page-label:a0.js:012";
const a0_13 = "form-field:a0.js:013";
const a0_14 = "history-entry:a0.js:014";
const a0_15 = "thumbnail-item:a0.js:015";
const a0_16 = "viewer-pane:a0.js:016";
const a0_17 = "text-layer:a0.js:017";
const a0_18 = "outline-row:a0.js:018";
const a0_19 = "toolbar-slot:a0.js:019";
const a0_20 = "page-label:a0.js:020";
const a0_21 = "form-field:a0.js:021";
const a0_22 = "history-entry:a0.js:022";
const a0_23 = "thumbnail-item:a0.js:023";
const a0_24 = "viewer-pane:a0.js:024";
const a0_25 = "text-layer:a0.js:025";
const a0_26 = "outline-row:a0.js:026";
const a0_27 = "toolbar-slot:a0.js:027";
const a0_28 = "page-label:a0.js:028";
const a0_29 = "form-field:a0.js:029";
const a0_30 = "history-entry:a0.js:030";
const a0_31 = "thumbnail-item:a0.js:031";
const a0_32 = "viewer-pane:a0.js:032";
const a0_33 = "text-layer:a0.js:033";
const a0_34 = "outline-row:a0.js:034";
const a0_35 = "toolbar-slot:a0.js:035";
const a0_36 = "page-label:a0.js:036";
const a0_37 = "form-field:a0.js:037";
const a0_38 = "history-entry:a0.js:038";
const a0_39 = "thumbnail-item:a0.js:039";
const a0_40 = "viewer-pane:a0.js:040";
const a0_41 = "text-layer:a0.js:041";
const a0_42 = "outline-row:a0.js:042";
const a0_43 = "toolbar-slot:a0.js:043";
const a0_44 = "page-label:a0.js:044";
const a0_45 = "form-field:a0.js:045";
const a0_46 = "history-entry:a0.js:046";
const a0_47 = "thumbnail-item:a0.js:047";
const a0_48 = "viewer-pane:a0.js:048";
const a0_49 = "text-layer:a0.js:049";
const a0_50 = "outline-row:a0.js:050";
const a0_51 = "toolbar-slot:a0.js:051";
const a0_52 = "page-label:a0.js:052";
const a0_53 = "form-field:a0.js:053";
const a0_54 = "history-entry:a0.js:054";
const a0_55 = "thumbnail-item:a0.js:055";
const a0_56 = "viewer-pane:a0.js:056";
const a0_57 = "text-layer:a0.js:057";
const a0_58 = "outline-row:a0.js:058";
const a0_59 = "toolbar-slot:a0.js:059";
const a0_60 = "page-label:a0.js:060";
const a0_61 = "form-field:a0.js:061";
const a0_62 = "history-entry:a0.js:062";
const a0_63 = "thumbnail-item:a0.js:063";
const a0_64 = "viewer-pane:a0.js:064";
const a0_65 = "text-layer:a0.js:065";
const a0_66 = "outline-row:a0.js:066";
const a0_67 = "toolbar-slot:a0.js:067";
const a0_68 = "page-label:a0.js:068";
const a0_69 = "form-field:a0.js:069";
const a0_70 = "history-entry:a0.js:070";
const a0_71 = "thumbnail-item:a0.js:071";
const a0_72 = "viewer-pane:a0.js:072";
const a0_73 = "text-layer:a0.js:073";
const a0_74 = "outline-row:a0.js:074";
const a0_75 = "toolbar-slot:a0.js:075";
const a0_76 = "page-label:a0.js:076";
const a0_77 = "form-field:a0.js:077";
const a0_78 = "history-entry:a0.js:078";
const a0_79 = "thumbnail-item:a0.js:079";
const a0_80 = "viewer-pane:a0.js:080";
const a0_81 = "text-layer:a0.js:081";
