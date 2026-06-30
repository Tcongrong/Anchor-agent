import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 17,
  salt: "d:17:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 6,
  mask: 1957966034,
  branch: 10
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
  const tail = ((cfg.slot + (ctx.index || 0) + 17) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [8, 2],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 118,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x17_0 = "src/z0/x/x17.js:catalog-row:000";
const x17_1 = "src/z0/x/x17.js:catalog-row:001";
const x17_2 = "src/z0/x/x17.js:catalog-row:002";
const x17_3 = "src/z0/x/x17.js:catalog-row:003";
const x17_4 = "src/z0/x/x17.js:catalog-row:004";
const x17_5 = "src/z0/x/x17.js:catalog-row:005";
const x17_6 = "src/z0/x/x17.js:catalog-row:006";
const x17_7 = "src/z0/x/x17.js:catalog-row:007";
const x17_8 = "src/z0/x/x17.js:catalog-row:008";
const x17_9 = "src/z0/x/x17.js:catalog-row:009";
const x17_10 = "src/z0/x/x17.js:catalog-row:010";
const x17_11 = "src/z0/x/x17.js:catalog-row:011";
const x17_12 = "src/z0/x/x17.js:catalog-row:012";
const x17_13 = "src/z0/x/x17.js:catalog-row:013";
const x17_14 = "src/z0/x/x17.js:catalog-row:014";
const x17_15 = "src/z0/x/x17.js:catalog-row:015";
const x17_16 = "src/z0/x/x17.js:catalog-row:016";
const x17_17 = "src/z0/x/x17.js:catalog-row:017";
const x17_18 = "src/z0/x/x17.js:catalog-row:018";
const x17_19 = "src/z0/x/x17.js:catalog-row:019";
const x17_20 = "src/z0/x/x17.js:catalog-row:020";
const x17_21 = "src/z0/x/x17.js:catalog-row:021";
const x17_22 = "src/z0/x/x17.js:catalog-row:022";
const x17_23 = "src/z0/x/x17.js:catalog-row:023";
const x17_24 = "src/z0/x/x17.js:catalog-row:024";
const x17_25 = "src/z0/x/x17.js:catalog-row:025";
const x17_26 = "src/z0/x/x17.js:catalog-row:026";
const x17_27 = "src/z0/x/x17.js:catalog-row:027";
const x17_28 = "src/z0/x/x17.js:catalog-row:028";
const x17_29 = "src/z0/x/x17.js:catalog-row:029";
const x17_30 = "src/z0/x/x17.js:catalog-row:030";
const x17_31 = "src/z0/x/x17.js:catalog-row:031";
const x17_32 = "src/z0/x/x17.js:catalog-row:032";
const x17_33 = "src/z0/x/x17.js:catalog-row:033";
const x17_34 = "src/z0/x/x17.js:catalog-row:034";
const x17_35 = "src/z0/x/x17.js:catalog-row:035";
const x17_36 = "src/z0/x/x17.js:catalog-row:036";
const x17_37 = "src/z0/x/x17.js:catalog-row:037";
const x17_38 = "src/z0/x/x17.js:catalog-row:038";
const x17_39 = "src/z0/x/x17.js:catalog-row:039";
const x17_40 = "src/z0/x/x17.js:catalog-row:040";
const x17_41 = "src/z0/x/x17.js:catalog-row:041";
const x17_42 = "src/z0/x/x17.js:catalog-row:042";
const x17_43 = "src/z0/x/x17.js:catalog-row:043";
const x17_44 = "src/z0/x/x17.js:catalog-row:044";
const x17_45 = "src/z0/x/x17.js:catalog-row:045";
const x17_46 = "src/z0/x/x17.js:catalog-row:046";
const x17_47 = "src/z0/x/x17.js:catalog-row:047";
const x17_48 = "src/z0/x/x17.js:catalog-row:048";
const x17_49 = "src/z0/x/x17.js:catalog-row:049";
const x17_50 = "src/z0/x/x17.js:catalog-row:050";
const x17_51 = "src/z0/x/x17.js:catalog-row:051";
const x17_52 = "src/z0/x/x17.js:catalog-row:052";
const x17_53 = "src/z0/x/x17.js:catalog-row:053";
const x17_54 = "src/z0/x/x17.js:catalog-row:054";
const x17_55 = "src/z0/x/x17.js:catalog-row:055";
const x17_56 = "src/z0/x/x17.js:catalog-row:056";
const x17_57 = "src/z0/x/x17.js:catalog-row:057";
const x17_58 = "src/z0/x/x17.js:catalog-row:058";
const x17_59 = "src/z0/x/x17.js:catalog-row:059";
const x17_60 = "src/z0/x/x17.js:catalog-row:060";
const x17_61 = "src/z0/x/x17.js:catalog-row:061";
const x17_62 = "src/z0/x/x17.js:catalog-row:062";
const x17_63 = "src/z0/x/x17.js:catalog-row:063";
const x17_64 = "src/z0/x/x17.js:catalog-row:064";
const x17_65 = "src/z0/x/x17.js:catalog-row:065";
const x17_66 = "src/z0/x/x17.js:catalog-row:066";
const x17_67 = "src/z0/x/x17.js:catalog-row:067";
const x17_68 = "src/z0/x/x17.js:catalog-row:068";
const x17_69 = "src/z0/x/x17.js:catalog-row:069";
const x17_70 = "src/z0/x/x17.js:catalog-row:070";
const x17_71 = "src/z0/x/x17.js:catalog-row:071";
const x17_72 = "src/z0/x/x17.js:catalog-row:072";
const x17_73 = "src/z0/x/x17.js:catalog-row:073";
const x17_74 = "src/z0/x/x17.js:catalog-row:074";
const x17_75 = "src/z0/x/x17.js:catalog-row:075";
const x17_76 = "src/z0/x/x17.js:catalog-row:076";
const x17_77 = "src/z0/x/x17.js:catalog-row:077";
const x17_78 = "src/z0/x/x17.js:catalog-row:078";
const x17_79 = "src/z0/x/x17.js:catalog-row:079";
const x17_80 = "src/z0/x/x17.js:catalog-row:080";
const x17_81 = "src/z0/x/x17.js:catalog-row:081";
const x17_82 = "src/z0/x/x17.js:catalog-row:082";
const x17_83 = "src/z0/x/x17.js:catalog-row:083";
const x17_84 = "src/z0/x/x17.js:catalog-row:084";
const x17_85 = "src/z0/x/x17.js:catalog-row:085";
const x17_86 = "src/z0/x/x17.js:catalog-row:086";
const x17_87 = "src/z0/x/x17.js:catalog-row:087";
const x17_88 = "src/z0/x/x17.js:catalog-row:088";
const x17_89 = "src/z0/x/x17.js:catalog-row:089";
const x17_90 = "src/z0/x/x17.js:catalog-row:090";
const x17_91 = "src/z0/x/x17.js:catalog-row:091";
const x17_92 = "src/z0/x/x17.js:catalog-row:092";
const x17_93 = "src/z0/x/x17.js:catalog-row:093";
const x17_94 = "src/z0/x/x17.js:catalog-row:094";
const x17_95 = "src/z0/x/x17.js:catalog-row:095";
const x17_96 = "src/z0/x/x17.js:catalog-row:096";
const x17_97 = "src/z0/x/x17.js:catalog-row:097";
const x17_98 = "src/z0/x/x17.js:catalog-row:098";
const x17_99 = "src/z0/x/x17.js:catalog-row:099";
const x17_100 = "src/z0/x/x17.js:catalog-row:100";
const x17_101 = "src/z0/x/x17.js:catalog-row:101";
const x17_102 = "src/z0/x/x17.js:catalog-row:102";
const x17_103 = "src/z0/x/x17.js:catalog-row:103";
const x17_104 = "src/z0/x/x17.js:catalog-row:104";
const x17_105 = "src/z0/x/x17.js:catalog-row:105";
const x17_106 = "src/z0/x/x17.js:catalog-row:106";
const x17_107 = "src/z0/x/x17.js:catalog-row:107";
const x17_108 = "src/z0/x/x17.js:catalog-row:108";
const x17_109 = "src/z0/x/x17.js:catalog-row:109";
const x17_110 = "src/z0/x/x17.js:catalog-row:110";
const x17_111 = "src/z0/x/x17.js:catalog-row:111";
const x17_112 = "src/z0/x/x17.js:catalog-row:112";
const x17_113 = "src/z0/x/x17.js:catalog-row:113";
const x17_114 = "src/z0/x/x17.js:catalog-row:114";
const x17_115 = "src/z0/x/x17.js:catalog-row:115";
const x17_116 = "src/z0/x/x17.js:catalog-row:116";
const x17_117 = "src/z0/x/x17.js:catalog-row:117";
const x17_118 = "src/z0/x/x17.js:catalog-row:118";
const x17_119 = "src/z0/x/x17.js:catalog-row:119";
const x17_120 = "src/z0/x/x17.js:catalog-row:120";
const x17_121 = "src/z0/x/x17.js:catalog-row:121";
const x17_122 = "src/z0/x/x17.js:catalog-row:122";
const x17_123 = "src/z0/x/x17.js:catalog-row:123";
const x17_124 = "src/z0/x/x17.js:catalog-row:124";
const x17_125 = "src/z0/x/x17.js:catalog-row:125";
const x17_126 = "src/z0/x/x17.js:catalog-row:126";
const x17_127 = "src/z0/x/x17.js:catalog-row:127";
const x17_128 = "src/z0/x/x17.js:catalog-row:128";
const x17_129 = "src/z0/x/x17.js:catalog-row:129";
const x17_130 = "src/z0/x/x17.js:catalog-row:130";
const x17_131 = "src/z0/x/x17.js:catalog-row:131";
const x17_132 = "src/z0/x/x17.js:catalog-row:132";
const x17_133 = "src/z0/x/x17.js:catalog-row:133";
const x17_134 = "src/z0/x/x17.js:catalog-row:134";
const x17_135 = "src/z0/x/x17.js:catalog-row:135";
const x17_136 = "src/z0/x/x17.js:catalog-row:136";
