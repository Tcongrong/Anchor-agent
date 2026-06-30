import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 15,
  salt: "d:15:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 4,
  mask: 944061808,
  branch: 12
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
  const tail = ((cfg.slot + (ctx.index || 0) + 15) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [6, 0],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 116,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x15_0 = "src/z0/x/x15.js:catalog-row:000";
const x15_1 = "src/z0/x/x15.js:catalog-row:001";
const x15_2 = "src/z0/x/x15.js:catalog-row:002";
const x15_3 = "src/z0/x/x15.js:catalog-row:003";
const x15_4 = "src/z0/x/x15.js:catalog-row:004";
const x15_5 = "src/z0/x/x15.js:catalog-row:005";
const x15_6 = "src/z0/x/x15.js:catalog-row:006";
const x15_7 = "src/z0/x/x15.js:catalog-row:007";
const x15_8 = "src/z0/x/x15.js:catalog-row:008";
const x15_9 = "src/z0/x/x15.js:catalog-row:009";
const x15_10 = "src/z0/x/x15.js:catalog-row:010";
const x15_11 = "src/z0/x/x15.js:catalog-row:011";
const x15_12 = "src/z0/x/x15.js:catalog-row:012";
const x15_13 = "src/z0/x/x15.js:catalog-row:013";
const x15_14 = "src/z0/x/x15.js:catalog-row:014";
const x15_15 = "src/z0/x/x15.js:catalog-row:015";
const x15_16 = "src/z0/x/x15.js:catalog-row:016";
const x15_17 = "src/z0/x/x15.js:catalog-row:017";
const x15_18 = "src/z0/x/x15.js:catalog-row:018";
const x15_19 = "src/z0/x/x15.js:catalog-row:019";
const x15_20 = "src/z0/x/x15.js:catalog-row:020";
const x15_21 = "src/z0/x/x15.js:catalog-row:021";
const x15_22 = "src/z0/x/x15.js:catalog-row:022";
const x15_23 = "src/z0/x/x15.js:catalog-row:023";
const x15_24 = "src/z0/x/x15.js:catalog-row:024";
const x15_25 = "src/z0/x/x15.js:catalog-row:025";
const x15_26 = "src/z0/x/x15.js:catalog-row:026";
const x15_27 = "src/z0/x/x15.js:catalog-row:027";
const x15_28 = "src/z0/x/x15.js:catalog-row:028";
const x15_29 = "src/z0/x/x15.js:catalog-row:029";
const x15_30 = "src/z0/x/x15.js:catalog-row:030";
const x15_31 = "src/z0/x/x15.js:catalog-row:031";
const x15_32 = "src/z0/x/x15.js:catalog-row:032";
const x15_33 = "src/z0/x/x15.js:catalog-row:033";
const x15_34 = "src/z0/x/x15.js:catalog-row:034";
const x15_35 = "src/z0/x/x15.js:catalog-row:035";
const x15_36 = "src/z0/x/x15.js:catalog-row:036";
const x15_37 = "src/z0/x/x15.js:catalog-row:037";
const x15_38 = "src/z0/x/x15.js:catalog-row:038";
const x15_39 = "src/z0/x/x15.js:catalog-row:039";
const x15_40 = "src/z0/x/x15.js:catalog-row:040";
const x15_41 = "src/z0/x/x15.js:catalog-row:041";
const x15_42 = "src/z0/x/x15.js:catalog-row:042";
const x15_43 = "src/z0/x/x15.js:catalog-row:043";
const x15_44 = "src/z0/x/x15.js:catalog-row:044";
const x15_45 = "src/z0/x/x15.js:catalog-row:045";
const x15_46 = "src/z0/x/x15.js:catalog-row:046";
const x15_47 = "src/z0/x/x15.js:catalog-row:047";
const x15_48 = "src/z0/x/x15.js:catalog-row:048";
const x15_49 = "src/z0/x/x15.js:catalog-row:049";
const x15_50 = "src/z0/x/x15.js:catalog-row:050";
const x15_51 = "src/z0/x/x15.js:catalog-row:051";
const x15_52 = "src/z0/x/x15.js:catalog-row:052";
const x15_53 = "src/z0/x/x15.js:catalog-row:053";
const x15_54 = "src/z0/x/x15.js:catalog-row:054";
const x15_55 = "src/z0/x/x15.js:catalog-row:055";
const x15_56 = "src/z0/x/x15.js:catalog-row:056";
const x15_57 = "src/z0/x/x15.js:catalog-row:057";
const x15_58 = "src/z0/x/x15.js:catalog-row:058";
const x15_59 = "src/z0/x/x15.js:catalog-row:059";
const x15_60 = "src/z0/x/x15.js:catalog-row:060";
const x15_61 = "src/z0/x/x15.js:catalog-row:061";
const x15_62 = "src/z0/x/x15.js:catalog-row:062";
const x15_63 = "src/z0/x/x15.js:catalog-row:063";
const x15_64 = "src/z0/x/x15.js:catalog-row:064";
const x15_65 = "src/z0/x/x15.js:catalog-row:065";
const x15_66 = "src/z0/x/x15.js:catalog-row:066";
const x15_67 = "src/z0/x/x15.js:catalog-row:067";
const x15_68 = "src/z0/x/x15.js:catalog-row:068";
const x15_69 = "src/z0/x/x15.js:catalog-row:069";
const x15_70 = "src/z0/x/x15.js:catalog-row:070";
const x15_71 = "src/z0/x/x15.js:catalog-row:071";
const x15_72 = "src/z0/x/x15.js:catalog-row:072";
const x15_73 = "src/z0/x/x15.js:catalog-row:073";
const x15_74 = "src/z0/x/x15.js:catalog-row:074";
const x15_75 = "src/z0/x/x15.js:catalog-row:075";
const x15_76 = "src/z0/x/x15.js:catalog-row:076";
const x15_77 = "src/z0/x/x15.js:catalog-row:077";
const x15_78 = "src/z0/x/x15.js:catalog-row:078";
const x15_79 = "src/z0/x/x15.js:catalog-row:079";
const x15_80 = "src/z0/x/x15.js:catalog-row:080";
const x15_81 = "src/z0/x/x15.js:catalog-row:081";
const x15_82 = "src/z0/x/x15.js:catalog-row:082";
const x15_83 = "src/z0/x/x15.js:catalog-row:083";
const x15_84 = "src/z0/x/x15.js:catalog-row:084";
const x15_85 = "src/z0/x/x15.js:catalog-row:085";
const x15_86 = "src/z0/x/x15.js:catalog-row:086";
const x15_87 = "src/z0/x/x15.js:catalog-row:087";
const x15_88 = "src/z0/x/x15.js:catalog-row:088";
const x15_89 = "src/z0/x/x15.js:catalog-row:089";
const x15_90 = "src/z0/x/x15.js:catalog-row:090";
const x15_91 = "src/z0/x/x15.js:catalog-row:091";
const x15_92 = "src/z0/x/x15.js:catalog-row:092";
const x15_93 = "src/z0/x/x15.js:catalog-row:093";
const x15_94 = "src/z0/x/x15.js:catalog-row:094";
const x15_95 = "src/z0/x/x15.js:catalog-row:095";
const x15_96 = "src/z0/x/x15.js:catalog-row:096";
const x15_97 = "src/z0/x/x15.js:catalog-row:097";
const x15_98 = "src/z0/x/x15.js:catalog-row:098";
const x15_99 = "src/z0/x/x15.js:catalog-row:099";
const x15_100 = "src/z0/x/x15.js:catalog-row:100";
const x15_101 = "src/z0/x/x15.js:catalog-row:101";
const x15_102 = "src/z0/x/x15.js:catalog-row:102";
const x15_103 = "src/z0/x/x15.js:catalog-row:103";
const x15_104 = "src/z0/x/x15.js:catalog-row:104";
const x15_105 = "src/z0/x/x15.js:catalog-row:105";
const x15_106 = "src/z0/x/x15.js:catalog-row:106";
const x15_107 = "src/z0/x/x15.js:catalog-row:107";
const x15_108 = "src/z0/x/x15.js:catalog-row:108";
const x15_109 = "src/z0/x/x15.js:catalog-row:109";
const x15_110 = "src/z0/x/x15.js:catalog-row:110";
const x15_111 = "src/z0/x/x15.js:catalog-row:111";
const x15_112 = "src/z0/x/x15.js:catalog-row:112";
const x15_113 = "src/z0/x/x15.js:catalog-row:113";
const x15_114 = "src/z0/x/x15.js:catalog-row:114";
const x15_115 = "src/z0/x/x15.js:catalog-row:115";
const x15_116 = "src/z0/x/x15.js:catalog-row:116";
const x15_117 = "src/z0/x/x15.js:catalog-row:117";
const x15_118 = "src/z0/x/x15.js:catalog-row:118";
const x15_119 = "src/z0/x/x15.js:catalog-row:119";
const x15_120 = "src/z0/x/x15.js:catalog-row:120";
const x15_121 = "src/z0/x/x15.js:catalog-row:121";
const x15_122 = "src/z0/x/x15.js:catalog-row:122";
const x15_123 = "src/z0/x/x15.js:catalog-row:123";
const x15_124 = "src/z0/x/x15.js:catalog-row:124";
const x15_125 = "src/z0/x/x15.js:catalog-row:125";
const x15_126 = "src/z0/x/x15.js:catalog-row:126";
const x15_127 = "src/z0/x/x15.js:catalog-row:127";
const x15_128 = "src/z0/x/x15.js:catalog-row:128";
const x15_129 = "src/z0/x/x15.js:catalog-row:129";
const x15_130 = "src/z0/x/x15.js:catalog-row:130";
const x15_131 = "src/z0/x/x15.js:catalog-row:131";
const x15_132 = "src/z0/x/x15.js:catalog-row:132";
const x15_133 = "src/z0/x/x15.js:catalog-row:133";
const x15_134 = "src/z0/x/x15.js:catalog-row:134";
const x15_135 = "src/z0/x/x15.js:catalog-row:135";
const x15_136 = "src/z0/x/x15.js:catalog-row:136";
