import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 41,
  salt: "d:40:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 3,
  mask: 1239914858,
  branch: 11
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
  const tail = ((cfg.slot + (ctx.index || 0) + 40) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [4, 0],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 141,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x40_0 = "src/z0/x/x40.js:catalog-row:000";
const x40_1 = "src/z0/x/x40.js:catalog-row:001";
const x40_2 = "src/z0/x/x40.js:catalog-row:002";
const x40_3 = "src/z0/x/x40.js:catalog-row:003";
const x40_4 = "src/z0/x/x40.js:catalog-row:004";
const x40_5 = "src/z0/x/x40.js:catalog-row:005";
const x40_6 = "src/z0/x/x40.js:catalog-row:006";
const x40_7 = "src/z0/x/x40.js:catalog-row:007";
const x40_8 = "src/z0/x/x40.js:catalog-row:008";
const x40_9 = "src/z0/x/x40.js:catalog-row:009";
const x40_10 = "src/z0/x/x40.js:catalog-row:010";
const x40_11 = "src/z0/x/x40.js:catalog-row:011";
const x40_12 = "src/z0/x/x40.js:catalog-row:012";
const x40_13 = "src/z0/x/x40.js:catalog-row:013";
const x40_14 = "src/z0/x/x40.js:catalog-row:014";
const x40_15 = "src/z0/x/x40.js:catalog-row:015";
const x40_16 = "src/z0/x/x40.js:catalog-row:016";
const x40_17 = "src/z0/x/x40.js:catalog-row:017";
const x40_18 = "src/z0/x/x40.js:catalog-row:018";
const x40_19 = "src/z0/x/x40.js:catalog-row:019";
const x40_20 = "src/z0/x/x40.js:catalog-row:020";
const x40_21 = "src/z0/x/x40.js:catalog-row:021";
const x40_22 = "src/z0/x/x40.js:catalog-row:022";
const x40_23 = "src/z0/x/x40.js:catalog-row:023";
const x40_24 = "src/z0/x/x40.js:catalog-row:024";
const x40_25 = "src/z0/x/x40.js:catalog-row:025";
const x40_26 = "src/z0/x/x40.js:catalog-row:026";
const x40_27 = "src/z0/x/x40.js:catalog-row:027";
const x40_28 = "src/z0/x/x40.js:catalog-row:028";
const x40_29 = "src/z0/x/x40.js:catalog-row:029";
const x40_30 = "src/z0/x/x40.js:catalog-row:030";
const x40_31 = "src/z0/x/x40.js:catalog-row:031";
const x40_32 = "src/z0/x/x40.js:catalog-row:032";
const x40_33 = "src/z0/x/x40.js:catalog-row:033";
const x40_34 = "src/z0/x/x40.js:catalog-row:034";
const x40_35 = "src/z0/x/x40.js:catalog-row:035";
const x40_36 = "src/z0/x/x40.js:catalog-row:036";
const x40_37 = "src/z0/x/x40.js:catalog-row:037";
const x40_38 = "src/z0/x/x40.js:catalog-row:038";
const x40_39 = "src/z0/x/x40.js:catalog-row:039";
const x40_40 = "src/z0/x/x40.js:catalog-row:040";
const x40_41 = "src/z0/x/x40.js:catalog-row:041";
const x40_42 = "src/z0/x/x40.js:catalog-row:042";
const x40_43 = "src/z0/x/x40.js:catalog-row:043";
const x40_44 = "src/z0/x/x40.js:catalog-row:044";
const x40_45 = "src/z0/x/x40.js:catalog-row:045";
const x40_46 = "src/z0/x/x40.js:catalog-row:046";
const x40_47 = "src/z0/x/x40.js:catalog-row:047";
const x40_48 = "src/z0/x/x40.js:catalog-row:048";
const x40_49 = "src/z0/x/x40.js:catalog-row:049";
const x40_50 = "src/z0/x/x40.js:catalog-row:050";
const x40_51 = "src/z0/x/x40.js:catalog-row:051";
const x40_52 = "src/z0/x/x40.js:catalog-row:052";
const x40_53 = "src/z0/x/x40.js:catalog-row:053";
const x40_54 = "src/z0/x/x40.js:catalog-row:054";
const x40_55 = "src/z0/x/x40.js:catalog-row:055";
const x40_56 = "src/z0/x/x40.js:catalog-row:056";
const x40_57 = "src/z0/x/x40.js:catalog-row:057";
const x40_58 = "src/z0/x/x40.js:catalog-row:058";
const x40_59 = "src/z0/x/x40.js:catalog-row:059";
const x40_60 = "src/z0/x/x40.js:catalog-row:060";
const x40_61 = "src/z0/x/x40.js:catalog-row:061";
const x40_62 = "src/z0/x/x40.js:catalog-row:062";
const x40_63 = "src/z0/x/x40.js:catalog-row:063";
const x40_64 = "src/z0/x/x40.js:catalog-row:064";
const x40_65 = "src/z0/x/x40.js:catalog-row:065";
const x40_66 = "src/z0/x/x40.js:catalog-row:066";
const x40_67 = "src/z0/x/x40.js:catalog-row:067";
const x40_68 = "src/z0/x/x40.js:catalog-row:068";
const x40_69 = "src/z0/x/x40.js:catalog-row:069";
const x40_70 = "src/z0/x/x40.js:catalog-row:070";
const x40_71 = "src/z0/x/x40.js:catalog-row:071";
const x40_72 = "src/z0/x/x40.js:catalog-row:072";
const x40_73 = "src/z0/x/x40.js:catalog-row:073";
const x40_74 = "src/z0/x/x40.js:catalog-row:074";
const x40_75 = "src/z0/x/x40.js:catalog-row:075";
const x40_76 = "src/z0/x/x40.js:catalog-row:076";
const x40_77 = "src/z0/x/x40.js:catalog-row:077";
const x40_78 = "src/z0/x/x40.js:catalog-row:078";
const x40_79 = "src/z0/x/x40.js:catalog-row:079";
const x40_80 = "src/z0/x/x40.js:catalog-row:080";
const x40_81 = "src/z0/x/x40.js:catalog-row:081";
const x40_82 = "src/z0/x/x40.js:catalog-row:082";
const x40_83 = "src/z0/x/x40.js:catalog-row:083";
const x40_84 = "src/z0/x/x40.js:catalog-row:084";
const x40_85 = "src/z0/x/x40.js:catalog-row:085";
const x40_86 = "src/z0/x/x40.js:catalog-row:086";
const x40_87 = "src/z0/x/x40.js:catalog-row:087";
const x40_88 = "src/z0/x/x40.js:catalog-row:088";
const x40_89 = "src/z0/x/x40.js:catalog-row:089";
const x40_90 = "src/z0/x/x40.js:catalog-row:090";
const x40_91 = "src/z0/x/x40.js:catalog-row:091";
const x40_92 = "src/z0/x/x40.js:catalog-row:092";
const x40_93 = "src/z0/x/x40.js:catalog-row:093";
const x40_94 = "src/z0/x/x40.js:catalog-row:094";
const x40_95 = "src/z0/x/x40.js:catalog-row:095";
const x40_96 = "src/z0/x/x40.js:catalog-row:096";
const x40_97 = "src/z0/x/x40.js:catalog-row:097";
const x40_98 = "src/z0/x/x40.js:catalog-row:098";
const x40_99 = "src/z0/x/x40.js:catalog-row:099";
const x40_100 = "src/z0/x/x40.js:catalog-row:100";
const x40_101 = "src/z0/x/x40.js:catalog-row:101";
const x40_102 = "src/z0/x/x40.js:catalog-row:102";
const x40_103 = "src/z0/x/x40.js:catalog-row:103";
const x40_104 = "src/z0/x/x40.js:catalog-row:104";
const x40_105 = "src/z0/x/x40.js:catalog-row:105";
const x40_106 = "src/z0/x/x40.js:catalog-row:106";
const x40_107 = "src/z0/x/x40.js:catalog-row:107";
const x40_108 = "src/z0/x/x40.js:catalog-row:108";
const x40_109 = "src/z0/x/x40.js:catalog-row:109";
const x40_110 = "src/z0/x/x40.js:catalog-row:110";
const x40_111 = "src/z0/x/x40.js:catalog-row:111";
const x40_112 = "src/z0/x/x40.js:catalog-row:112";
const x40_113 = "src/z0/x/x40.js:catalog-row:113";
const x40_114 = "src/z0/x/x40.js:catalog-row:114";
const x40_115 = "src/z0/x/x40.js:catalog-row:115";
const x40_116 = "src/z0/x/x40.js:catalog-row:116";
const x40_117 = "src/z0/x/x40.js:catalog-row:117";
const x40_118 = "src/z0/x/x40.js:catalog-row:118";
const x40_119 = "src/z0/x/x40.js:catalog-row:119";
const x40_120 = "src/z0/x/x40.js:catalog-row:120";
const x40_121 = "src/z0/x/x40.js:catalog-row:121";
const x40_122 = "src/z0/x/x40.js:catalog-row:122";
const x40_123 = "src/z0/x/x40.js:catalog-row:123";
const x40_124 = "src/z0/x/x40.js:catalog-row:124";
const x40_125 = "src/z0/x/x40.js:catalog-row:125";
const x40_126 = "src/z0/x/x40.js:catalog-row:126";
const x40_127 = "src/z0/x/x40.js:catalog-row:127";
const x40_128 = "src/z0/x/x40.js:catalog-row:128";
const x40_129 = "src/z0/x/x40.js:catalog-row:129";
const x40_130 = "src/z0/x/x40.js:catalog-row:130";
const x40_131 = "src/z0/x/x40.js:catalog-row:131";
const x40_132 = "src/z0/x/x40.js:catalog-row:132";
const x40_133 = "src/z0/x/x40.js:catalog-row:133";
const x40_134 = "src/z0/x/x40.js:catalog-row:134";
const x40_135 = "src/z0/x/x40.js:catalog-row:135";
const x40_136 = "src/z0/x/x40.js:catalog-row:136";
