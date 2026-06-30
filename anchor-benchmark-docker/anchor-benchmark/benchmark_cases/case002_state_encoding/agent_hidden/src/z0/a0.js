import { r as b0 } from "./b1.js";
import { p as p0 } from "./p0.js";
import { s as r0 } from "./r0.js";

const a = {
  ready: false,
  events: [],
  counters: new Map(),
  stamp: 223
};

function c(name, value) {
  const old = a.counters.get(name) || 0;
  const next = old + value;
  a.counters.set(name, next);
  return next;
}

function d() {
  const node = document.getElementById("statusLine");
  if (node) node.value = "Ready";
  document.documentElement.dataset.caseReady = "case002_state_encoding";
}

function e() {
  const seed = ["z", "w", "b", "h", "i", "m"];
  return seed.map((item, index) => item + ":" + index + ":" + c(item, index + 1)).join("|");
}

function f() {
  return {
    caseId: "case002_state_encoding",
    action: "inventory.snapshot",
    selectors: ["zoneInput", "windowSelect", "batchCount", "sealHold", "bin219", "snapshotButton"],
    bootTrace: e()
  };
}

export function z() {
  if (a.ready) return a;
  a.ready = true;
  a.events.push(f().bootTrace);
  p0({ phase: "boot", boost: false, tuple: [], route: [], state: a });
  b0(document, a);
  r0(document, { action: "inventory.snapshot", boot: true });
  d();
  return a;
}

z();
const a0_0 = "src/z0/a0.js:catalog-row:000";
const a0_1 = "src/z0/a0.js:catalog-row:001";
const a0_2 = "src/z0/a0.js:catalog-row:002";
const a0_3 = "src/z0/a0.js:catalog-row:003";
const a0_4 = "src/z0/a0.js:catalog-row:004";
const a0_5 = "src/z0/a0.js:catalog-row:005";
const a0_6 = "src/z0/a0.js:catalog-row:006";
const a0_7 = "src/z0/a0.js:catalog-row:007";
const a0_8 = "src/z0/a0.js:catalog-row:008";
const a0_9 = "src/z0/a0.js:catalog-row:009";
const a0_10 = "src/z0/a0.js:catalog-row:010";
const a0_11 = "src/z0/a0.js:catalog-row:011";
const a0_12 = "src/z0/a0.js:catalog-row:012";
const a0_13 = "src/z0/a0.js:catalog-row:013";
const a0_14 = "src/z0/a0.js:catalog-row:014";
const a0_15 = "src/z0/a0.js:catalog-row:015";
const a0_16 = "src/z0/a0.js:catalog-row:016";
const a0_17 = "src/z0/a0.js:catalog-row:017";
const a0_18 = "src/z0/a0.js:catalog-row:018";
const a0_19 = "src/z0/a0.js:catalog-row:019";
const a0_20 = "src/z0/a0.js:catalog-row:020";
const a0_21 = "src/z0/a0.js:catalog-row:021";
const a0_22 = "src/z0/a0.js:catalog-row:022";
const a0_23 = "src/z0/a0.js:catalog-row:023";
const a0_24 = "src/z0/a0.js:catalog-row:024";
const a0_25 = "src/z0/a0.js:catalog-row:025";
const a0_26 = "src/z0/a0.js:catalog-row:026";
const a0_27 = "src/z0/a0.js:catalog-row:027";
const a0_28 = "src/z0/a0.js:catalog-row:028";
const a0_29 = "src/z0/a0.js:catalog-row:029";
const a0_30 = "src/z0/a0.js:catalog-row:030";
const a0_31 = "src/z0/a0.js:catalog-row:031";
const a0_32 = "src/z0/a0.js:catalog-row:032";
const a0_33 = "src/z0/a0.js:catalog-row:033";
const a0_34 = "src/z0/a0.js:catalog-row:034";
const a0_35 = "src/z0/a0.js:catalog-row:035";
const a0_36 = "src/z0/a0.js:catalog-row:036";
const a0_37 = "src/z0/a0.js:catalog-row:037";
const a0_38 = "src/z0/a0.js:catalog-row:038";
const a0_39 = "src/z0/a0.js:catalog-row:039";
const a0_40 = "src/z0/a0.js:catalog-row:040";
const a0_41 = "src/z0/a0.js:catalog-row:041";
const a0_42 = "src/z0/a0.js:catalog-row:042";
const a0_43 = "src/z0/a0.js:catalog-row:043";
const a0_44 = "src/z0/a0.js:catalog-row:044";
const a0_45 = "src/z0/a0.js:catalog-row:045";
const a0_46 = "src/z0/a0.js:catalog-row:046";
const a0_47 = "src/z0/a0.js:catalog-row:047";
const a0_48 = "src/z0/a0.js:catalog-row:048";
const a0_49 = "src/z0/a0.js:catalog-row:049";
const a0_50 = "src/z0/a0.js:catalog-row:050";
const a0_51 = "src/z0/a0.js:catalog-row:051";
const a0_52 = "src/z0/a0.js:catalog-row:052";
const a0_53 = "src/z0/a0.js:catalog-row:053";
const a0_54 = "src/z0/a0.js:catalog-row:054";
const a0_55 = "src/z0/a0.js:catalog-row:055";
const a0_56 = "src/z0/a0.js:catalog-row:056";
const a0_57 = "src/z0/a0.js:catalog-row:057";
const a0_58 = "src/z0/a0.js:catalog-row:058";
const a0_59 = "src/z0/a0.js:catalog-row:059";
const a0_60 = "src/z0/a0.js:catalog-row:060";
const a0_61 = "src/z0/a0.js:catalog-row:061";
const a0_62 = "src/z0/a0.js:catalog-row:062";
const a0_63 = "src/z0/a0.js:catalog-row:063";
const a0_64 = "src/z0/a0.js:catalog-row:064";
const a0_65 = "src/z0/a0.js:catalog-row:065";
const a0_66 = "src/z0/a0.js:catalog-row:066";
const a0_67 = "src/z0/a0.js:catalog-row:067";
const a0_68 = "src/z0/a0.js:catalog-row:068";
const a0_69 = "src/z0/a0.js:catalog-row:069";
const a0_70 = "src/z0/a0.js:catalog-row:070";
const a0_71 = "src/z0/a0.js:catalog-row:071";
const a0_72 = "src/z0/a0.js:catalog-row:072";
const a0_73 = "src/z0/a0.js:catalog-row:073";
const a0_74 = "src/z0/a0.js:catalog-row:074";
const a0_75 = "src/z0/a0.js:catalog-row:075";
const a0_76 = "src/z0/a0.js:catalog-row:076";
const a0_77 = "src/z0/a0.js:catalog-row:077";
const a0_78 = "src/z0/a0.js:catalog-row:078";
