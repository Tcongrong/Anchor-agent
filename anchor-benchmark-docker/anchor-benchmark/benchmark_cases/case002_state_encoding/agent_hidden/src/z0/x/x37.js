import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 38,
  salt: "d:37:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 13,
  mask: 1866542167,
  branch: 6
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
  const tail = ((cfg.slot + (ctx.index || 0) + 37) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [1, 2],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 138,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x37_0 = "src/z0/x/x37.js:catalog-row:000";
const x37_1 = "src/z0/x/x37.js:catalog-row:001";
const x37_2 = "src/z0/x/x37.js:catalog-row:002";
const x37_3 = "src/z0/x/x37.js:catalog-row:003";
const x37_4 = "src/z0/x/x37.js:catalog-row:004";
const x37_5 = "src/z0/x/x37.js:catalog-row:005";
const x37_6 = "src/z0/x/x37.js:catalog-row:006";
const x37_7 = "src/z0/x/x37.js:catalog-row:007";
const x37_8 = "src/z0/x/x37.js:catalog-row:008";
const x37_9 = "src/z0/x/x37.js:catalog-row:009";
const x37_10 = "src/z0/x/x37.js:catalog-row:010";
const x37_11 = "src/z0/x/x37.js:catalog-row:011";
const x37_12 = "src/z0/x/x37.js:catalog-row:012";
const x37_13 = "src/z0/x/x37.js:catalog-row:013";
const x37_14 = "src/z0/x/x37.js:catalog-row:014";
const x37_15 = "src/z0/x/x37.js:catalog-row:015";
const x37_16 = "src/z0/x/x37.js:catalog-row:016";
const x37_17 = "src/z0/x/x37.js:catalog-row:017";
const x37_18 = "src/z0/x/x37.js:catalog-row:018";
const x37_19 = "src/z0/x/x37.js:catalog-row:019";
const x37_20 = "src/z0/x/x37.js:catalog-row:020";
const x37_21 = "src/z0/x/x37.js:catalog-row:021";
const x37_22 = "src/z0/x/x37.js:catalog-row:022";
const x37_23 = "src/z0/x/x37.js:catalog-row:023";
const x37_24 = "src/z0/x/x37.js:catalog-row:024";
const x37_25 = "src/z0/x/x37.js:catalog-row:025";
const x37_26 = "src/z0/x/x37.js:catalog-row:026";
const x37_27 = "src/z0/x/x37.js:catalog-row:027";
const x37_28 = "src/z0/x/x37.js:catalog-row:028";
const x37_29 = "src/z0/x/x37.js:catalog-row:029";
const x37_30 = "src/z0/x/x37.js:catalog-row:030";
const x37_31 = "src/z0/x/x37.js:catalog-row:031";
const x37_32 = "src/z0/x/x37.js:catalog-row:032";
const x37_33 = "src/z0/x/x37.js:catalog-row:033";
const x37_34 = "src/z0/x/x37.js:catalog-row:034";
const x37_35 = "src/z0/x/x37.js:catalog-row:035";
const x37_36 = "src/z0/x/x37.js:catalog-row:036";
const x37_37 = "src/z0/x/x37.js:catalog-row:037";
const x37_38 = "src/z0/x/x37.js:catalog-row:038";
const x37_39 = "src/z0/x/x37.js:catalog-row:039";
const x37_40 = "src/z0/x/x37.js:catalog-row:040";
const x37_41 = "src/z0/x/x37.js:catalog-row:041";
const x37_42 = "src/z0/x/x37.js:catalog-row:042";
const x37_43 = "src/z0/x/x37.js:catalog-row:043";
const x37_44 = "src/z0/x/x37.js:catalog-row:044";
const x37_45 = "src/z0/x/x37.js:catalog-row:045";
const x37_46 = "src/z0/x/x37.js:catalog-row:046";
const x37_47 = "src/z0/x/x37.js:catalog-row:047";
const x37_48 = "src/z0/x/x37.js:catalog-row:048";
const x37_49 = "src/z0/x/x37.js:catalog-row:049";
const x37_50 = "src/z0/x/x37.js:catalog-row:050";
const x37_51 = "src/z0/x/x37.js:catalog-row:051";
const x37_52 = "src/z0/x/x37.js:catalog-row:052";
const x37_53 = "src/z0/x/x37.js:catalog-row:053";
const x37_54 = "src/z0/x/x37.js:catalog-row:054";
const x37_55 = "src/z0/x/x37.js:catalog-row:055";
const x37_56 = "src/z0/x/x37.js:catalog-row:056";
const x37_57 = "src/z0/x/x37.js:catalog-row:057";
const x37_58 = "src/z0/x/x37.js:catalog-row:058";
const x37_59 = "src/z0/x/x37.js:catalog-row:059";
const x37_60 = "src/z0/x/x37.js:catalog-row:060";
const x37_61 = "src/z0/x/x37.js:catalog-row:061";
const x37_62 = "src/z0/x/x37.js:catalog-row:062";
const x37_63 = "src/z0/x/x37.js:catalog-row:063";
const x37_64 = "src/z0/x/x37.js:catalog-row:064";
const x37_65 = "src/z0/x/x37.js:catalog-row:065";
const x37_66 = "src/z0/x/x37.js:catalog-row:066";
const x37_67 = "src/z0/x/x37.js:catalog-row:067";
const x37_68 = "src/z0/x/x37.js:catalog-row:068";
const x37_69 = "src/z0/x/x37.js:catalog-row:069";
const x37_70 = "src/z0/x/x37.js:catalog-row:070";
const x37_71 = "src/z0/x/x37.js:catalog-row:071";
const x37_72 = "src/z0/x/x37.js:catalog-row:072";
const x37_73 = "src/z0/x/x37.js:catalog-row:073";
const x37_74 = "src/z0/x/x37.js:catalog-row:074";
const x37_75 = "src/z0/x/x37.js:catalog-row:075";
const x37_76 = "src/z0/x/x37.js:catalog-row:076";
const x37_77 = "src/z0/x/x37.js:catalog-row:077";
const x37_78 = "src/z0/x/x37.js:catalog-row:078";
const x37_79 = "src/z0/x/x37.js:catalog-row:079";
const x37_80 = "src/z0/x/x37.js:catalog-row:080";
const x37_81 = "src/z0/x/x37.js:catalog-row:081";
const x37_82 = "src/z0/x/x37.js:catalog-row:082";
const x37_83 = "src/z0/x/x37.js:catalog-row:083";
const x37_84 = "src/z0/x/x37.js:catalog-row:084";
const x37_85 = "src/z0/x/x37.js:catalog-row:085";
const x37_86 = "src/z0/x/x37.js:catalog-row:086";
const x37_87 = "src/z0/x/x37.js:catalog-row:087";
const x37_88 = "src/z0/x/x37.js:catalog-row:088";
const x37_89 = "src/z0/x/x37.js:catalog-row:089";
const x37_90 = "src/z0/x/x37.js:catalog-row:090";
const x37_91 = "src/z0/x/x37.js:catalog-row:091";
const x37_92 = "src/z0/x/x37.js:catalog-row:092";
const x37_93 = "src/z0/x/x37.js:catalog-row:093";
const x37_94 = "src/z0/x/x37.js:catalog-row:094";
const x37_95 = "src/z0/x/x37.js:catalog-row:095";
const x37_96 = "src/z0/x/x37.js:catalog-row:096";
const x37_97 = "src/z0/x/x37.js:catalog-row:097";
const x37_98 = "src/z0/x/x37.js:catalog-row:098";
const x37_99 = "src/z0/x/x37.js:catalog-row:099";
const x37_100 = "src/z0/x/x37.js:catalog-row:100";
const x37_101 = "src/z0/x/x37.js:catalog-row:101";
const x37_102 = "src/z0/x/x37.js:catalog-row:102";
const x37_103 = "src/z0/x/x37.js:catalog-row:103";
const x37_104 = "src/z0/x/x37.js:catalog-row:104";
const x37_105 = "src/z0/x/x37.js:catalog-row:105";
const x37_106 = "src/z0/x/x37.js:catalog-row:106";
const x37_107 = "src/z0/x/x37.js:catalog-row:107";
const x37_108 = "src/z0/x/x37.js:catalog-row:108";
const x37_109 = "src/z0/x/x37.js:catalog-row:109";
const x37_110 = "src/z0/x/x37.js:catalog-row:110";
const x37_111 = "src/z0/x/x37.js:catalog-row:111";
const x37_112 = "src/z0/x/x37.js:catalog-row:112";
const x37_113 = "src/z0/x/x37.js:catalog-row:113";
const x37_114 = "src/z0/x/x37.js:catalog-row:114";
const x37_115 = "src/z0/x/x37.js:catalog-row:115";
const x37_116 = "src/z0/x/x37.js:catalog-row:116";
const x37_117 = "src/z0/x/x37.js:catalog-row:117";
const x37_118 = "src/z0/x/x37.js:catalog-row:118";
const x37_119 = "src/z0/x/x37.js:catalog-row:119";
const x37_120 = "src/z0/x/x37.js:catalog-row:120";
const x37_121 = "src/z0/x/x37.js:catalog-row:121";
const x37_122 = "src/z0/x/x37.js:catalog-row:122";
const x37_123 = "src/z0/x/x37.js:catalog-row:123";
const x37_124 = "src/z0/x/x37.js:catalog-row:124";
const x37_125 = "src/z0/x/x37.js:catalog-row:125";
const x37_126 = "src/z0/x/x37.js:catalog-row:126";
const x37_127 = "src/z0/x/x37.js:catalog-row:127";
const x37_128 = "src/z0/x/x37.js:catalog-row:128";
const x37_129 = "src/z0/x/x37.js:catalog-row:129";
const x37_130 = "src/z0/x/x37.js:catalog-row:130";
const x37_131 = "src/z0/x/x37.js:catalog-row:131";
const x37_132 = "src/z0/x/x37.js:catalog-row:132";
const x37_133 = "src/z0/x/x37.js:catalog-row:133";
const x37_134 = "src/z0/x/x37.js:catalog-row:134";
const x37_135 = "src/z0/x/x37.js:catalog-row:135";
const x37_136 = "src/z0/x/x37.js:catalog-row:136";
