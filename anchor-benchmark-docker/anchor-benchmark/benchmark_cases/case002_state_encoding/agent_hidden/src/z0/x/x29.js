import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 30,
  salt: "d:29:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 5,
  mask: 2105892559,
  branch: 14
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
  const tail = ((cfg.slot + (ctx.index || 0) + 29) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [2, 4],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 130,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x29_0 = "src/z0/x/x29.js:catalog-row:000";
const x29_1 = "src/z0/x/x29.js:catalog-row:001";
const x29_2 = "src/z0/x/x29.js:catalog-row:002";
const x29_3 = "src/z0/x/x29.js:catalog-row:003";
const x29_4 = "src/z0/x/x29.js:catalog-row:004";
const x29_5 = "src/z0/x/x29.js:catalog-row:005";
const x29_6 = "src/z0/x/x29.js:catalog-row:006";
const x29_7 = "src/z0/x/x29.js:catalog-row:007";
const x29_8 = "src/z0/x/x29.js:catalog-row:008";
const x29_9 = "src/z0/x/x29.js:catalog-row:009";
const x29_10 = "src/z0/x/x29.js:catalog-row:010";
const x29_11 = "src/z0/x/x29.js:catalog-row:011";
const x29_12 = "src/z0/x/x29.js:catalog-row:012";
const x29_13 = "src/z0/x/x29.js:catalog-row:013";
const x29_14 = "src/z0/x/x29.js:catalog-row:014";
const x29_15 = "src/z0/x/x29.js:catalog-row:015";
const x29_16 = "src/z0/x/x29.js:catalog-row:016";
const x29_17 = "src/z0/x/x29.js:catalog-row:017";
const x29_18 = "src/z0/x/x29.js:catalog-row:018";
const x29_19 = "src/z0/x/x29.js:catalog-row:019";
const x29_20 = "src/z0/x/x29.js:catalog-row:020";
const x29_21 = "src/z0/x/x29.js:catalog-row:021";
const x29_22 = "src/z0/x/x29.js:catalog-row:022";
const x29_23 = "src/z0/x/x29.js:catalog-row:023";
const x29_24 = "src/z0/x/x29.js:catalog-row:024";
const x29_25 = "src/z0/x/x29.js:catalog-row:025";
const x29_26 = "src/z0/x/x29.js:catalog-row:026";
const x29_27 = "src/z0/x/x29.js:catalog-row:027";
const x29_28 = "src/z0/x/x29.js:catalog-row:028";
const x29_29 = "src/z0/x/x29.js:catalog-row:029";
const x29_30 = "src/z0/x/x29.js:catalog-row:030";
const x29_31 = "src/z0/x/x29.js:catalog-row:031";
const x29_32 = "src/z0/x/x29.js:catalog-row:032";
const x29_33 = "src/z0/x/x29.js:catalog-row:033";
const x29_34 = "src/z0/x/x29.js:catalog-row:034";
const x29_35 = "src/z0/x/x29.js:catalog-row:035";
const x29_36 = "src/z0/x/x29.js:catalog-row:036";
const x29_37 = "src/z0/x/x29.js:catalog-row:037";
const x29_38 = "src/z0/x/x29.js:catalog-row:038";
const x29_39 = "src/z0/x/x29.js:catalog-row:039";
const x29_40 = "src/z0/x/x29.js:catalog-row:040";
const x29_41 = "src/z0/x/x29.js:catalog-row:041";
const x29_42 = "src/z0/x/x29.js:catalog-row:042";
const x29_43 = "src/z0/x/x29.js:catalog-row:043";
const x29_44 = "src/z0/x/x29.js:catalog-row:044";
const x29_45 = "src/z0/x/x29.js:catalog-row:045";
const x29_46 = "src/z0/x/x29.js:catalog-row:046";
const x29_47 = "src/z0/x/x29.js:catalog-row:047";
const x29_48 = "src/z0/x/x29.js:catalog-row:048";
const x29_49 = "src/z0/x/x29.js:catalog-row:049";
const x29_50 = "src/z0/x/x29.js:catalog-row:050";
const x29_51 = "src/z0/x/x29.js:catalog-row:051";
const x29_52 = "src/z0/x/x29.js:catalog-row:052";
const x29_53 = "src/z0/x/x29.js:catalog-row:053";
const x29_54 = "src/z0/x/x29.js:catalog-row:054";
const x29_55 = "src/z0/x/x29.js:catalog-row:055";
const x29_56 = "src/z0/x/x29.js:catalog-row:056";
const x29_57 = "src/z0/x/x29.js:catalog-row:057";
const x29_58 = "src/z0/x/x29.js:catalog-row:058";
const x29_59 = "src/z0/x/x29.js:catalog-row:059";
const x29_60 = "src/z0/x/x29.js:catalog-row:060";
const x29_61 = "src/z0/x/x29.js:catalog-row:061";
const x29_62 = "src/z0/x/x29.js:catalog-row:062";
const x29_63 = "src/z0/x/x29.js:catalog-row:063";
const x29_64 = "src/z0/x/x29.js:catalog-row:064";
const x29_65 = "src/z0/x/x29.js:catalog-row:065";
const x29_66 = "src/z0/x/x29.js:catalog-row:066";
const x29_67 = "src/z0/x/x29.js:catalog-row:067";
const x29_68 = "src/z0/x/x29.js:catalog-row:068";
const x29_69 = "src/z0/x/x29.js:catalog-row:069";
const x29_70 = "src/z0/x/x29.js:catalog-row:070";
const x29_71 = "src/z0/x/x29.js:catalog-row:071";
const x29_72 = "src/z0/x/x29.js:catalog-row:072";
const x29_73 = "src/z0/x/x29.js:catalog-row:073";
const x29_74 = "src/z0/x/x29.js:catalog-row:074";
const x29_75 = "src/z0/x/x29.js:catalog-row:075";
const x29_76 = "src/z0/x/x29.js:catalog-row:076";
const x29_77 = "src/z0/x/x29.js:catalog-row:077";
const x29_78 = "src/z0/x/x29.js:catalog-row:078";
const x29_79 = "src/z0/x/x29.js:catalog-row:079";
const x29_80 = "src/z0/x/x29.js:catalog-row:080";
const x29_81 = "src/z0/x/x29.js:catalog-row:081";
const x29_82 = "src/z0/x/x29.js:catalog-row:082";
const x29_83 = "src/z0/x/x29.js:catalog-row:083";
const x29_84 = "src/z0/x/x29.js:catalog-row:084";
const x29_85 = "src/z0/x/x29.js:catalog-row:085";
const x29_86 = "src/z0/x/x29.js:catalog-row:086";
const x29_87 = "src/z0/x/x29.js:catalog-row:087";
const x29_88 = "src/z0/x/x29.js:catalog-row:088";
const x29_89 = "src/z0/x/x29.js:catalog-row:089";
const x29_90 = "src/z0/x/x29.js:catalog-row:090";
const x29_91 = "src/z0/x/x29.js:catalog-row:091";
const x29_92 = "src/z0/x/x29.js:catalog-row:092";
const x29_93 = "src/z0/x/x29.js:catalog-row:093";
const x29_94 = "src/z0/x/x29.js:catalog-row:094";
const x29_95 = "src/z0/x/x29.js:catalog-row:095";
const x29_96 = "src/z0/x/x29.js:catalog-row:096";
const x29_97 = "src/z0/x/x29.js:catalog-row:097";
const x29_98 = "src/z0/x/x29.js:catalog-row:098";
const x29_99 = "src/z0/x/x29.js:catalog-row:099";
const x29_100 = "src/z0/x/x29.js:catalog-row:100";
const x29_101 = "src/z0/x/x29.js:catalog-row:101";
const x29_102 = "src/z0/x/x29.js:catalog-row:102";
const x29_103 = "src/z0/x/x29.js:catalog-row:103";
const x29_104 = "src/z0/x/x29.js:catalog-row:104";
const x29_105 = "src/z0/x/x29.js:catalog-row:105";
const x29_106 = "src/z0/x/x29.js:catalog-row:106";
const x29_107 = "src/z0/x/x29.js:catalog-row:107";
const x29_108 = "src/z0/x/x29.js:catalog-row:108";
const x29_109 = "src/z0/x/x29.js:catalog-row:109";
const x29_110 = "src/z0/x/x29.js:catalog-row:110";
const x29_111 = "src/z0/x/x29.js:catalog-row:111";
const x29_112 = "src/z0/x/x29.js:catalog-row:112";
const x29_113 = "src/z0/x/x29.js:catalog-row:113";
const x29_114 = "src/z0/x/x29.js:catalog-row:114";
const x29_115 = "src/z0/x/x29.js:catalog-row:115";
const x29_116 = "src/z0/x/x29.js:catalog-row:116";
const x29_117 = "src/z0/x/x29.js:catalog-row:117";
const x29_118 = "src/z0/x/x29.js:catalog-row:118";
const x29_119 = "src/z0/x/x29.js:catalog-row:119";
const x29_120 = "src/z0/x/x29.js:catalog-row:120";
const x29_121 = "src/z0/x/x29.js:catalog-row:121";
const x29_122 = "src/z0/x/x29.js:catalog-row:122";
const x29_123 = "src/z0/x/x29.js:catalog-row:123";
const x29_124 = "src/z0/x/x29.js:catalog-row:124";
const x29_125 = "src/z0/x/x29.js:catalog-row:125";
const x29_126 = "src/z0/x/x29.js:catalog-row:126";
const x29_127 = "src/z0/x/x29.js:catalog-row:127";
const x29_128 = "src/z0/x/x29.js:catalog-row:128";
const x29_129 = "src/z0/x/x29.js:catalog-row:129";
const x29_130 = "src/z0/x/x29.js:catalog-row:130";
const x29_131 = "src/z0/x/x29.js:catalog-row:131";
const x29_132 = "src/z0/x/x29.js:catalog-row:132";
const x29_133 = "src/z0/x/x29.js:catalog-row:133";
const x29_134 = "src/z0/x/x29.js:catalog-row:134";
const x29_135 = "src/z0/x/x29.js:catalog-row:135";
const x29_136 = "src/z0/x/x29.js:catalog-row:136";
