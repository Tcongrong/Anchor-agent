import { r as c0 } from "./c2.js";

function a(target, selector) {
  if (!target || typeof target.closest !== "function") return null;
  return target.closest(selector);
}

function b(node, name) {
  if (!node) return "";
  return String(node.getAttribute(name) || "");
}

function c(event, state) {
  const picked = a(event.target, "[data-pick-sku]");
  if (picked) {
    event.preventDefault();
    const sku = b(picked, "data-pick-sku");
    const lane = b(picked, "data-pick-lane") || "ambient";
    document.documentElement.dataset.selectedSku = sku;
    document.documentElement.dataset.selectedLane = lane;
    document.documentElement.dataset.selectionStage = "picked";
    state.events.push("pick:" + sku + ":" + lane);
    const node = document.getElementById("statusLine");
    if (node) node.value = "Selected " + sku;
    return true;
  }
  const node = a(event.target, "[data-intent]");
  const command = b(node, "data-intent");
  if (!command) return false;
  event.preventDefault();
  state.events.push("intent:" + command);
  c0({
    document,
    event,
    target: node,
    command,
    state,
    selectedSku: document.documentElement.dataset.selectedSku || "",
    selectedLane: document.documentElement.dataset.selectedLane || "",
    route: [],
    routeLabels: ["selection-capture"]
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
  doc.documentElement.dataset.delegate = "inventory";
  return local.delegateAttached;
}
const b1_0 = "src/z0/b1.js:catalog-row:000";
const b1_1 = "src/z0/b1.js:catalog-row:001";
const b1_2 = "src/z0/b1.js:catalog-row:002";
const b1_3 = "src/z0/b1.js:catalog-row:003";
const b1_4 = "src/z0/b1.js:catalog-row:004";
const b1_5 = "src/z0/b1.js:catalog-row:005";
const b1_6 = "src/z0/b1.js:catalog-row:006";
const b1_7 = "src/z0/b1.js:catalog-row:007";
const b1_8 = "src/z0/b1.js:catalog-row:008";
const b1_9 = "src/z0/b1.js:catalog-row:009";
const b1_10 = "src/z0/b1.js:catalog-row:010";
const b1_11 = "src/z0/b1.js:catalog-row:011";
const b1_12 = "src/z0/b1.js:catalog-row:012";
const b1_13 = "src/z0/b1.js:catalog-row:013";
const b1_14 = "src/z0/b1.js:catalog-row:014";
const b1_15 = "src/z0/b1.js:catalog-row:015";
const b1_16 = "src/z0/b1.js:catalog-row:016";
const b1_17 = "src/z0/b1.js:catalog-row:017";
const b1_18 = "src/z0/b1.js:catalog-row:018";
const b1_19 = "src/z0/b1.js:catalog-row:019";
const b1_20 = "src/z0/b1.js:catalog-row:020";
const b1_21 = "src/z0/b1.js:catalog-row:021";
const b1_22 = "src/z0/b1.js:catalog-row:022";
const b1_23 = "src/z0/b1.js:catalog-row:023";
const b1_24 = "src/z0/b1.js:catalog-row:024";
const b1_25 = "src/z0/b1.js:catalog-row:025";
const b1_26 = "src/z0/b1.js:catalog-row:026";
const b1_27 = "src/z0/b1.js:catalog-row:027";
const b1_28 = "src/z0/b1.js:catalog-row:028";
const b1_29 = "src/z0/b1.js:catalog-row:029";
const b1_30 = "src/z0/b1.js:catalog-row:030";
const b1_31 = "src/z0/b1.js:catalog-row:031";
const b1_32 = "src/z0/b1.js:catalog-row:032";
const b1_33 = "src/z0/b1.js:catalog-row:033";
const b1_34 = "src/z0/b1.js:catalog-row:034";
const b1_35 = "src/z0/b1.js:catalog-row:035";
const b1_36 = "src/z0/b1.js:catalog-row:036";
const b1_37 = "src/z0/b1.js:catalog-row:037";
const b1_38 = "src/z0/b1.js:catalog-row:038";
const b1_39 = "src/z0/b1.js:catalog-row:039";
const b1_40 = "src/z0/b1.js:catalog-row:040";
const b1_41 = "src/z0/b1.js:catalog-row:041";
const b1_42 = "src/z0/b1.js:catalog-row:042";
const b1_43 = "src/z0/b1.js:catalog-row:043";
const b1_44 = "src/z0/b1.js:catalog-row:044";
const b1_45 = "src/z0/b1.js:catalog-row:045";
const b1_46 = "src/z0/b1.js:catalog-row:046";
const b1_47 = "src/z0/b1.js:catalog-row:047";
const b1_48 = "src/z0/b1.js:catalog-row:048";
const b1_49 = "src/z0/b1.js:catalog-row:049";
const b1_50 = "src/z0/b1.js:catalog-row:050";
const b1_51 = "src/z0/b1.js:catalog-row:051";
const b1_52 = "src/z0/b1.js:catalog-row:052";
const b1_53 = "src/z0/b1.js:catalog-row:053";
const b1_54 = "src/z0/b1.js:catalog-row:054";
const b1_55 = "src/z0/b1.js:catalog-row:055";
const b1_56 = "src/z0/b1.js:catalog-row:056";
const b1_57 = "src/z0/b1.js:catalog-row:057";
const b1_58 = "src/z0/b1.js:catalog-row:058";
const b1_59 = "src/z0/b1.js:catalog-row:059";
const b1_60 = "src/z0/b1.js:catalog-row:060";
const b1_61 = "src/z0/b1.js:catalog-row:061";
const b1_62 = "src/z0/b1.js:catalog-row:062";
const b1_63 = "src/z0/b1.js:catalog-row:063";
const b1_64 = "src/z0/b1.js:catalog-row:064";
const b1_65 = "src/z0/b1.js:catalog-row:065";
const b1_66 = "src/z0/b1.js:catalog-row:066";
const b1_67 = "src/z0/b1.js:catalog-row:067";
const b1_68 = "src/z0/b1.js:catalog-row:068";
const b1_69 = "src/z0/b1.js:catalog-row:069";
const b1_70 = "src/z0/b1.js:catalog-row:070";
const b1_71 = "src/z0/b1.js:catalog-row:071";
const b1_72 = "src/z0/b1.js:catalog-row:072";
const b1_73 = "src/z0/b1.js:catalog-row:073";
const b1_74 = "src/z0/b1.js:catalog-row:074";
const b1_75 = "src/z0/b1.js:catalog-row:075";
const b1_76 = "src/z0/b1.js:catalog-row:076";
const b1_77 = "src/z0/b1.js:catalog-row:077";
const b1_78 = "src/z0/b1.js:catalog-row:078";
const b1_79 = "src/z0/b1.js:catalog-row:079";
const b1_80 = "src/z0/b1.js:catalog-row:080";
const b1_81 = "src/z0/b1.js:catalog-row:081";
const b1_82 = "src/z0/b1.js:catalog-row:082";
const b1_83 = "src/z0/b1.js:catalog-row:083";
const b1_84 = "src/z0/b1.js:catalog-row:084";
const b1_85 = "src/z0/b1.js:catalog-row:085";
const b1_86 = "src/z0/b1.js:catalog-row:086";
const b1_87 = "src/z0/b1.js:catalog-row:087";
const b1_88 = "src/z0/b1.js:catalog-row:088";
const b1_89 = "src/z0/b1.js:catalog-row:089";
const b1_90 = "src/z0/b1.js:catalog-row:090";
const b1_91 = "src/z0/b1.js:catalog-row:091";
const b1_92 = "src/z0/b1.js:catalog-row:092";
const b1_93 = "src/z0/b1.js:catalog-row:093";
const b1_94 = "src/z0/b1.js:catalog-row:094";
const b1_95 = "src/z0/b1.js:catalog-row:095";
const b1_96 = "src/z0/b1.js:catalog-row:096";
const b1_97 = "src/z0/b1.js:catalog-row:097";
const b1_98 = "src/z0/b1.js:catalog-row:098";
const b1_99 = "src/z0/b1.js:catalog-row:099";
const b1_100 = "src/z0/b1.js:catalog-row:100";
const b1_101 = "src/z0/b1.js:catalog-row:101";
const b1_102 = "src/z0/b1.js:catalog-row:102";
const b1_103 = "src/z0/b1.js:catalog-row:103";
const b1_104 = "src/z0/b1.js:catalog-row:104";
const b1_105 = "src/z0/b1.js:catalog-row:105";
const b1_106 = "src/z0/b1.js:catalog-row:106";
const b1_107 = "src/z0/b1.js:catalog-row:107";
const b1_108 = "src/z0/b1.js:catalog-row:108";
const b1_109 = "src/z0/b1.js:catalog-row:109";
const b1_110 = "src/z0/b1.js:catalog-row:110";
const b1_111 = "src/z0/b1.js:catalog-row:111";
const b1_112 = "src/z0/b1.js:catalog-row:112";
const b1_113 = "src/z0/b1.js:catalog-row:113";
const b1_114 = "src/z0/b1.js:catalog-row:114";
const b1_115 = "src/z0/b1.js:catalog-row:115";
const b1_116 = "src/z0/b1.js:catalog-row:116";
const b1_117 = "src/z0/b1.js:catalog-row:117";
const b1_118 = "src/z0/b1.js:catalog-row:118";
const b1_119 = "src/z0/b1.js:catalog-row:119";
const b1_120 = "src/z0/b1.js:catalog-row:120";
const b1_121 = "src/z0/b1.js:catalog-row:121";
const b1_122 = "src/z0/b1.js:catalog-row:122";
const b1_123 = "src/z0/b1.js:catalog-row:123";
const b1_124 = "src/z0/b1.js:catalog-row:124";
const b1_125 = "src/z0/b1.js:catalog-row:125";
