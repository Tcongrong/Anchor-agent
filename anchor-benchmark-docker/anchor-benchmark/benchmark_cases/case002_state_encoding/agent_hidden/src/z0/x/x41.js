import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 42,
  salt: "d:41:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 4,
  mask: 3894350619,
  branch: 2
};

function makeTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: "q", i: 0, v: "shadow jacket", y: "shadow", n: 13 },
    { k: "s", i: 1, v: "price_desc", y: "sort", n: 10 },
    { k: "o", i: 2, v: "1", y: "one", n: 1 },
    { k: "n", i: 3, v: "northline.catalog.search", y: "ns", n: 24 },
    { k: "v", i: 4, v: "v2", y: "v2", n: 2 },
    { k: "l", i: 5, v: "13:10:1", y: "lens", n: 7 },
    { k: "c", i: 6, v: "catalog.search", y: "cmd", n: 14 },
    { k: "t", i: 7, v: "shadow,jacket", y: "tok", n: 13 }
  ];
}

function mutate(value, ctx) {
  const tail = ((cfg.slot + (ctx.index || 0) + 41) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [5, 1],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 142,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x41_0 = "src/z0/x/x41.js:catalog-row:000";
const x41_1 = "src/z0/x/x41.js:catalog-row:001";
const x41_2 = "src/z0/x/x41.js:catalog-row:002";
const x41_3 = "src/z0/x/x41.js:catalog-row:003";
const x41_4 = "src/z0/x/x41.js:catalog-row:004";
const x41_5 = "src/z0/x/x41.js:catalog-row:005";
const x41_6 = "src/z0/x/x41.js:catalog-row:006";
const x41_7 = "src/z0/x/x41.js:catalog-row:007";
const x41_8 = "src/z0/x/x41.js:catalog-row:008";
const x41_9 = "src/z0/x/x41.js:catalog-row:009";
const x41_10 = "src/z0/x/x41.js:catalog-row:010";
const x41_11 = "src/z0/x/x41.js:catalog-row:011";
const x41_12 = "src/z0/x/x41.js:catalog-row:012";
const x41_13 = "src/z0/x/x41.js:catalog-row:013";
const x41_14 = "src/z0/x/x41.js:catalog-row:014";
const x41_15 = "src/z0/x/x41.js:catalog-row:015";
const x41_16 = "src/z0/x/x41.js:catalog-row:016";
const x41_17 = "src/z0/x/x41.js:catalog-row:017";
const x41_18 = "src/z0/x/x41.js:catalog-row:018";
const x41_19 = "src/z0/x/x41.js:catalog-row:019";
const x41_20 = "src/z0/x/x41.js:catalog-row:020";
const x41_21 = "src/z0/x/x41.js:catalog-row:021";
const x41_22 = "src/z0/x/x41.js:catalog-row:022";
const x41_23 = "src/z0/x/x41.js:catalog-row:023";
const x41_24 = "src/z0/x/x41.js:catalog-row:024";
const x41_25 = "src/z0/x/x41.js:catalog-row:025";
const x41_26 = "src/z0/x/x41.js:catalog-row:026";
const x41_27 = "src/z0/x/x41.js:catalog-row:027";
const x41_28 = "src/z0/x/x41.js:catalog-row:028";
const x41_29 = "src/z0/x/x41.js:catalog-row:029";
const x41_30 = "src/z0/x/x41.js:catalog-row:030";
const x41_31 = "src/z0/x/x41.js:catalog-row:031";
const x41_32 = "src/z0/x/x41.js:catalog-row:032";
const x41_33 = "src/z0/x/x41.js:catalog-row:033";
const x41_34 = "src/z0/x/x41.js:catalog-row:034";
const x41_35 = "src/z0/x/x41.js:catalog-row:035";
const x41_36 = "src/z0/x/x41.js:catalog-row:036";
const x41_37 = "src/z0/x/x41.js:catalog-row:037";
const x41_38 = "src/z0/x/x41.js:catalog-row:038";
const x41_39 = "src/z0/x/x41.js:catalog-row:039";
const x41_40 = "src/z0/x/x41.js:catalog-row:040";
const x41_41 = "src/z0/x/x41.js:catalog-row:041";
const x41_42 = "src/z0/x/x41.js:catalog-row:042";
const x41_43 = "src/z0/x/x41.js:catalog-row:043";
const x41_44 = "src/z0/x/x41.js:catalog-row:044";
const x41_45 = "src/z0/x/x41.js:catalog-row:045";
const x41_46 = "src/z0/x/x41.js:catalog-row:046";
const x41_47 = "src/z0/x/x41.js:catalog-row:047";
const x41_48 = "src/z0/x/x41.js:catalog-row:048";
const x41_49 = "src/z0/x/x41.js:catalog-row:049";
const x41_50 = "src/z0/x/x41.js:catalog-row:050";
const x41_51 = "src/z0/x/x41.js:catalog-row:051";
const x41_52 = "src/z0/x/x41.js:catalog-row:052";
const x41_53 = "src/z0/x/x41.js:catalog-row:053";
const x41_54 = "src/z0/x/x41.js:catalog-row:054";
const x41_55 = "src/z0/x/x41.js:catalog-row:055";
const x41_56 = "src/z0/x/x41.js:catalog-row:056";
const x41_57 = "src/z0/x/x41.js:catalog-row:057";
const x41_58 = "src/z0/x/x41.js:catalog-row:058";
const x41_59 = "src/z0/x/x41.js:catalog-row:059";
const x41_60 = "src/z0/x/x41.js:catalog-row:060";
const x41_61 = "src/z0/x/x41.js:catalog-row:061";
const x41_62 = "src/z0/x/x41.js:catalog-row:062";
const x41_63 = "src/z0/x/x41.js:catalog-row:063";
const x41_64 = "src/z0/x/x41.js:catalog-row:064";
const x41_65 = "src/z0/x/x41.js:catalog-row:065";
const x41_66 = "src/z0/x/x41.js:catalog-row:066";
const x41_67 = "src/z0/x/x41.js:catalog-row:067";
const x41_68 = "src/z0/x/x41.js:catalog-row:068";
const x41_69 = "src/z0/x/x41.js:catalog-row:069";
const x41_70 = "src/z0/x/x41.js:catalog-row:070";
const x41_71 = "src/z0/x/x41.js:catalog-row:071";
const x41_72 = "src/z0/x/x41.js:catalog-row:072";
const x41_73 = "src/z0/x/x41.js:catalog-row:073";
const x41_74 = "src/z0/x/x41.js:catalog-row:074";
const x41_75 = "src/z0/x/x41.js:catalog-row:075";
const x41_76 = "src/z0/x/x41.js:catalog-row:076";
const x41_77 = "src/z0/x/x41.js:catalog-row:077";
const x41_78 = "src/z0/x/x41.js:catalog-row:078";
const x41_79 = "src/z0/x/x41.js:catalog-row:079";
const x41_80 = "src/z0/x/x41.js:catalog-row:080";
const x41_81 = "src/z0/x/x41.js:catalog-row:081";
const x41_82 = "src/z0/x/x41.js:catalog-row:082";
const x41_83 = "src/z0/x/x41.js:catalog-row:083";
const x41_84 = "src/z0/x/x41.js:catalog-row:084";
const x41_85 = "src/z0/x/x41.js:catalog-row:085";
const x41_86 = "src/z0/x/x41.js:catalog-row:086";
const x41_87 = "src/z0/x/x41.js:catalog-row:087";
const x41_88 = "src/z0/x/x41.js:catalog-row:088";
const x41_89 = "src/z0/x/x41.js:catalog-row:089";
const x41_90 = "src/z0/x/x41.js:catalog-row:090";
const x41_91 = "src/z0/x/x41.js:catalog-row:091";
const x41_92 = "src/z0/x/x41.js:catalog-row:092";
const x41_93 = "src/z0/x/x41.js:catalog-row:093";
const x41_94 = "src/z0/x/x41.js:catalog-row:094";
const x41_95 = "src/z0/x/x41.js:catalog-row:095";
const x41_96 = "src/z0/x/x41.js:catalog-row:096";
const x41_97 = "src/z0/x/x41.js:catalog-row:097";
const x41_98 = "src/z0/x/x41.js:catalog-row:098";
const x41_99 = "src/z0/x/x41.js:catalog-row:099";
const x41_100 = "src/z0/x/x41.js:catalog-row:100";
const x41_101 = "src/z0/x/x41.js:catalog-row:101";
const x41_102 = "src/z0/x/x41.js:catalog-row:102";
const x41_103 = "src/z0/x/x41.js:catalog-row:103";
const x41_104 = "src/z0/x/x41.js:catalog-row:104";
const x41_105 = "src/z0/x/x41.js:catalog-row:105";
const x41_106 = "src/z0/x/x41.js:catalog-row:106";
const x41_107 = "src/z0/x/x41.js:catalog-row:107";
const x41_108 = "src/z0/x/x41.js:catalog-row:108";
const x41_109 = "src/z0/x/x41.js:catalog-row:109";
const x41_110 = "src/z0/x/x41.js:catalog-row:110";
const x41_111 = "src/z0/x/x41.js:catalog-row:111";
const x41_112 = "src/z0/x/x41.js:catalog-row:112";
const x41_113 = "src/z0/x/x41.js:catalog-row:113";
const x41_114 = "src/z0/x/x41.js:catalog-row:114";
const x41_115 = "src/z0/x/x41.js:catalog-row:115";
const x41_116 = "src/z0/x/x41.js:catalog-row:116";
const x41_117 = "src/z0/x/x41.js:catalog-row:117";
const x41_118 = "src/z0/x/x41.js:catalog-row:118";
const x41_119 = "src/z0/x/x41.js:catalog-row:119";
const x41_120 = "src/z0/x/x41.js:catalog-row:120";
const x41_121 = "src/z0/x/x41.js:catalog-row:121";
const x41_122 = "src/z0/x/x41.js:catalog-row:122";
const x41_123 = "src/z0/x/x41.js:catalog-row:123";
const x41_124 = "src/z0/x/x41.js:catalog-row:124";
const x41_125 = "src/z0/x/x41.js:catalog-row:125";
const x41_126 = "src/z0/x/x41.js:catalog-row:126";
const x41_127 = "src/z0/x/x41.js:catalog-row:127";
const x41_128 = "src/z0/x/x41.js:catalog-row:128";
const x41_129 = "src/z0/x/x41.js:catalog-row:129";
const x41_130 = "src/z0/x/x41.js:catalog-row:130";
const x41_131 = "src/z0/x/x41.js:catalog-row:131";
const x41_132 = "src/z0/x/x41.js:catalog-row:132";
const x41_133 = "src/z0/x/x41.js:catalog-row:133";
const x41_134 = "src/z0/x/x41.js:catalog-row:134";
const x41_135 = "src/z0/x/x41.js:catalog-row:135";
const x41_136 = "src/z0/x/x41.js:catalog-row:136";
