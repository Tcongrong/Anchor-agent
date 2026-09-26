import { r as r0 } from "./b1.js";
import { p as p0 } from "./p0.js";
import { mountGridLikeVendor } from "./w/index.js";

const s0 = {
  ready: false,
  events: [],
  counters: new Map(),
  stamp: 419
};

function t0(name, value) {
  const old = s0.counters.get(name) || 0;
  s0.counters.set(name, old + value);
  return old + value;
}

function v0() {
  const node = document.getElementById('statusLine');
  if (node) node.value = 'Ready';
  document.documentElement.dataset.filterReady = 'case_013_listing';
}

function w0() {
  const seed = ['l', 'm', 'n', 'o', 'p', 'q'];
  return seed.map((item, index) => item + ':' + index + ':' + t0(item, index + 5)).join('|');
}

export function z() {
  if (s0.ready) return s0;
  s0.ready = true;
  s0.events.push(w0());
  p0({ phase: 'boot', trace: s0.events.slice() });
  mountGridLikeVendor(document, s0);
  r0(document, s0);
  v0();
  return s0;
}

z();
const a0_0 = "query-shard:z0/a0.js:000";
const a0_1 = "filter-lane:z0/a0.js:001";
const a0_2 = "region-pin:z0/a0.js:002";
const a0_3 = "sort-track:z0/a0.js:003";
const a0_4 = "page-cursor:z0/a0.js:004";
const a0_5 = "archive-bit:z0/a0.js:005";
const a0_6 = "grid-slot:z0/a0.js:006";
const a0_7 = "facet-mark:z0/a0.js:007";
const a0_8 = "query-shard:z0/a0.js:008";
const a0_9 = "filter-lane:z0/a0.js:009";
const a0_10 = "region-pin:z0/a0.js:010";
const a0_11 = "sort-track:z0/a0.js:011";
const a0_12 = "page-cursor:z0/a0.js:012";
const a0_13 = "archive-bit:z0/a0.js:013";
const a0_14 = "grid-slot:z0/a0.js:014";
const a0_15 = "facet-mark:z0/a0.js:015";
const a0_16 = "query-shard:z0/a0.js:016";
const a0_17 = "filter-lane:z0/a0.js:017";
const a0_18 = "region-pin:z0/a0.js:018";
const a0_19 = "sort-track:z0/a0.js:019";
const a0_20 = "page-cursor:z0/a0.js:020";
const a0_21 = "archive-bit:z0/a0.js:021";
const a0_22 = "grid-slot:z0/a0.js:022";
const a0_23 = "facet-mark:z0/a0.js:023";
const a0_24 = "query-shard:z0/a0.js:024";
const a0_25 = "filter-lane:z0/a0.js:025";
const a0_26 = "region-pin:z0/a0.js:026";
const a0_27 = "sort-track:z0/a0.js:027";
const a0_28 = "page-cursor:z0/a0.js:028";
const a0_29 = "archive-bit:z0/a0.js:029";
const a0_30 = "grid-slot:z0/a0.js:030";
const a0_31 = "facet-mark:z0/a0.js:031";
const a0_32 = "query-shard:z0/a0.js:032";
const a0_33 = "filter-lane:z0/a0.js:033";
const a0_34 = "region-pin:z0/a0.js:034";
const a0_35 = "sort-track:z0/a0.js:035";
const a0_36 = "page-cursor:z0/a0.js:036";
const a0_37 = "archive-bit:z0/a0.js:037";
const a0_38 = "grid-slot:z0/a0.js:038";
const a0_39 = "facet-mark:z0/a0.js:039";
const a0_40 = "query-shard:z0/a0.js:040";
const a0_41 = "filter-lane:z0/a0.js:041";
const a0_42 = "region-pin:z0/a0.js:042";
const a0_43 = "sort-track:z0/a0.js:043";
const a0_44 = "page-cursor:z0/a0.js:044";
const a0_45 = "archive-bit:z0/a0.js:045";
const a0_46 = "grid-slot:z0/a0.js:046";
const a0_47 = "facet-mark:z0/a0.js:047";
const a0_48 = "query-shard:z0/a0.js:048";
const a0_49 = "filter-lane:z0/a0.js:049";
const a0_50 = "region-pin:z0/a0.js:050";
const a0_51 = "sort-track:z0/a0.js:051";
const a0_52 = "page-cursor:z0/a0.js:052";
const a0_53 = "archive-bit:z0/a0.js:053";
const a0_54 = "grid-slot:z0/a0.js:054";
const a0_55 = "facet-mark:z0/a0.js:055";
const a0_56 = "query-shard:z0/a0.js:056";
const a0_57 = "filter-lane:z0/a0.js:057";
const a0_58 = "region-pin:z0/a0.js:058";
const a0_59 = "sort-track:z0/a0.js:059";
const a0_60 = "page-cursor:z0/a0.js:060";
const a0_61 = "archive-bit:z0/a0.js:061";
const a0_62 = "grid-slot:z0/a0.js:062";
const a0_63 = "facet-mark:z0/a0.js:063";
const a0_64 = "query-shard:z0/a0.js:064";
const a0_65 = "filter-lane:z0/a0.js:065";
const a0_66 = "region-pin:z0/a0.js:066";
const a0_67 = "sort-track:z0/a0.js:067";
const a0_68 = "page-cursor:z0/a0.js:068";
const a0_69 = "archive-bit:z0/a0.js:069";
const a0_70 = "grid-slot:z0/a0.js:070";
const a0_71 = "facet-mark:z0/a0.js:071";
const a0_72 = "query-shard:z0/a0.js:072";
const a0_73 = "filter-lane:z0/a0.js:073";
const a0_74 = "region-pin:z0/a0.js:074";
const a0_75 = "sort-track:z0/a0.js:075";
const a0_76 = "page-cursor:z0/a0.js:076";
const a0_77 = "archive-bit:z0/a0.js:077";
const a0_78 = "grid-slot:z0/a0.js:078";
const a0_79 = "facet-mark:z0/a0.js:079";
const a0_80 = "query-shard:z0/a0.js:080";
const a0_81 = "filter-lane:z0/a0.js:081";
