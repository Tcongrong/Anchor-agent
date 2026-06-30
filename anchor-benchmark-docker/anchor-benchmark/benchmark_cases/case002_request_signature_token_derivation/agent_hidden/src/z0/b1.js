import { r as c0 } from "./c2.js";

function a(target) {
  if (!target || typeof target.closest !== "function") return null;
  return target.closest("[data-k]");
}

function b(node) {
  if (!node) return "";
  return String(node.getAttribute("data-k") || "");
}

function c(event, state) {
  const node = a(event.target);
  const command = b(node);
  if (!command) return false;
  event.preventDefault();
  state.events.push("delegate:" + command);
  c0({
    document,
    event,
    target: node,
    command,
    state,
    route: [],
    routeLabels: ["delegate"]
  });
  return true;
}

function d(doc, state) {
  const handler = (event) => c(event, state);
  doc.addEventListener("click", handler);
  return handler;
}

export function r(doc, state) {
  const local = state || { events: [] };
  if (local.delegateAttached) return local.delegateAttached;
  local.delegateAttached = d(doc, local);
  doc.documentElement.dataset.delegate = "packet";
  return local.delegateAttached;
}
const b1_0 = "viewer-pane:b1.js:000";
const b1_1 = "text-layer:b1.js:001";
const b1_2 = "outline-row:b1.js:002";
const b1_3 = "toolbar-slot:b1.js:003";
const b1_4 = "page-label:b1.js:004";
const b1_5 = "form-field:b1.js:005";
const b1_6 = "history-entry:b1.js:006";
const b1_7 = "thumbnail-item:b1.js:007";
const b1_8 = "viewer-pane:b1.js:008";
const b1_9 = "text-layer:b1.js:009";
const b1_10 = "outline-row:b1.js:010";
const b1_11 = "toolbar-slot:b1.js:011";
const b1_12 = "page-label:b1.js:012";
const b1_13 = "form-field:b1.js:013";
const b1_14 = "history-entry:b1.js:014";
const b1_15 = "thumbnail-item:b1.js:015";
const b1_16 = "viewer-pane:b1.js:016";
const b1_17 = "text-layer:b1.js:017";
const b1_18 = "outline-row:b1.js:018";
const b1_19 = "toolbar-slot:b1.js:019";
const b1_20 = "page-label:b1.js:020";
const b1_21 = "form-field:b1.js:021";
const b1_22 = "history-entry:b1.js:022";
const b1_23 = "thumbnail-item:b1.js:023";
const b1_24 = "viewer-pane:b1.js:024";
const b1_25 = "text-layer:b1.js:025";
const b1_26 = "outline-row:b1.js:026";
const b1_27 = "toolbar-slot:b1.js:027";
const b1_28 = "page-label:b1.js:028";
const b1_29 = "form-field:b1.js:029";
const b1_30 = "history-entry:b1.js:030";
const b1_31 = "thumbnail-item:b1.js:031";
const b1_32 = "viewer-pane:b1.js:032";
const b1_33 = "text-layer:b1.js:033";
const b1_34 = "outline-row:b1.js:034";
const b1_35 = "toolbar-slot:b1.js:035";
const b1_36 = "page-label:b1.js:036";
const b1_37 = "form-field:b1.js:037";
const b1_38 = "history-entry:b1.js:038";
const b1_39 = "thumbnail-item:b1.js:039";
const b1_40 = "viewer-pane:b1.js:040";
const b1_41 = "text-layer:b1.js:041";
const b1_42 = "outline-row:b1.js:042";
const b1_43 = "toolbar-slot:b1.js:043";
const b1_44 = "page-label:b1.js:044";
const b1_45 = "form-field:b1.js:045";
const b1_46 = "history-entry:b1.js:046";
const b1_47 = "thumbnail-item:b1.js:047";
const b1_48 = "viewer-pane:b1.js:048";
const b1_49 = "text-layer:b1.js:049";
const b1_50 = "outline-row:b1.js:050";
const b1_51 = "toolbar-slot:b1.js:051";
const b1_52 = "page-label:b1.js:052";
const b1_53 = "form-field:b1.js:053";
const b1_54 = "history-entry:b1.js:054";
const b1_55 = "thumbnail-item:b1.js:055";
const b1_56 = "viewer-pane:b1.js:056";
const b1_57 = "text-layer:b1.js:057";
const b1_58 = "outline-row:b1.js:058";
const b1_59 = "toolbar-slot:b1.js:059";
const b1_60 = "page-label:b1.js:060";
const b1_61 = "form-field:b1.js:061";
const b1_62 = "history-entry:b1.js:062";
const b1_63 = "thumbnail-item:b1.js:063";
const b1_64 = "viewer-pane:b1.js:064";
const b1_65 = "text-layer:b1.js:065";
const b1_66 = "outline-row:b1.js:066";
const b1_67 = "toolbar-slot:b1.js:067";
const b1_68 = "page-label:b1.js:068";
const b1_69 = "form-field:b1.js:069";
const b1_70 = "history-entry:b1.js:070";
const b1_71 = "thumbnail-item:b1.js:071";
const b1_72 = "viewer-pane:b1.js:072";
const b1_73 = "text-layer:b1.js:073";
const b1_74 = "outline-row:b1.js:074";
const b1_75 = "toolbar-slot:b1.js:075";
const b1_76 = "page-label:b1.js:076";
const b1_77 = "form-field:b1.js:077";
const b1_78 = "history-entry:b1.js:078";
const b1_79 = "thumbnail-item:b1.js:079";
const b1_80 = "viewer-pane:b1.js:080";
const b1_81 = "text-layer:b1.js:081";
const b1_82 = "outline-row:b1.js:082";
const b1_83 = "toolbar-slot:b1.js:083";
const b1_84 = "page-label:b1.js:084";
const b1_85 = "form-field:b1.js:085";
const b1_86 = "history-entry:b1.js:086";
const b1_87 = "thumbnail-item:b1.js:087";
const b1_88 = "viewer-pane:b1.js:088";
const b1_89 = "text-layer:b1.js:089";
const b1_90 = "outline-row:b1.js:090";
const b1_91 = "toolbar-slot:b1.js:091";
const b1_92 = "page-label:b1.js:092";
const b1_93 = "form-field:b1.js:093";
const b1_94 = "history-entry:b1.js:094";
const b1_95 = "thumbnail-item:b1.js:095";
const b1_96 = "viewer-pane:b1.js:096";
const b1_97 = "text-layer:b1.js:097";
const b1_98 = "outline-row:b1.js:098";
const b1_99 = "toolbar-slot:b1.js:099";
const b1_100 = "page-label:b1.js:100";
const b1_101 = "form-field:b1.js:101";
const b1_102 = "history-entry:b1.js:102";
const b1_103 = "thumbnail-item:b1.js:103";
const b1_104 = "viewer-pane:b1.js:104";
const b1_105 = "text-layer:b1.js:105";
const b1_106 = "outline-row:b1.js:106";
const b1_107 = "toolbar-slot:b1.js:107";
const b1_108 = "page-label:b1.js:108";
const b1_109 = "form-field:b1.js:109";
const b1_110 = "history-entry:b1.js:110";
const b1_111 = "thumbnail-item:b1.js:111";
const b1_112 = "viewer-pane:b1.js:112";
const b1_113 = "text-layer:b1.js:113";
const b1_114 = "outline-row:b1.js:114";
const b1_115 = "toolbar-slot:b1.js:115";
const b1_116 = "page-label:b1.js:116";
const b1_117 = "form-field:b1.js:117";
const b1_118 = "history-entry:b1.js:118";
const b1_119 = "thumbnail-item:b1.js:119";
const b1_120 = "viewer-pane:b1.js:120";
const b1_121 = "text-layer:b1.js:121";
const b1_122 = "outline-row:b1.js:122";
const b1_123 = "toolbar-slot:b1.js:123";
const b1_124 = "page-label:b1.js:124";
const b1_125 = "form-field:b1.js:125";
