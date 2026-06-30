import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 20,
  salt: "d:20:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 9,
  mask: 1331338725,
  branch: 15
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
  const tail = ((cfg.slot + (ctx.index || 0) + 20) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [2, 0],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 121,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x20_0 = "src/z0/x/x20.js:catalog-row:000";
const x20_1 = "src/z0/x/x20.js:catalog-row:001";
const x20_2 = "src/z0/x/x20.js:catalog-row:002";
const x20_3 = "src/z0/x/x20.js:catalog-row:003";
const x20_4 = "src/z0/x/x20.js:catalog-row:004";
const x20_5 = "src/z0/x/x20.js:catalog-row:005";
const x20_6 = "src/z0/x/x20.js:catalog-row:006";
const x20_7 = "src/z0/x/x20.js:catalog-row:007";
const x20_8 = "src/z0/x/x20.js:catalog-row:008";
const x20_9 = "src/z0/x/x20.js:catalog-row:009";
const x20_10 = "src/z0/x/x20.js:catalog-row:010";
const x20_11 = "src/z0/x/x20.js:catalog-row:011";
const x20_12 = "src/z0/x/x20.js:catalog-row:012";
const x20_13 = "src/z0/x/x20.js:catalog-row:013";
const x20_14 = "src/z0/x/x20.js:catalog-row:014";
const x20_15 = "src/z0/x/x20.js:catalog-row:015";
const x20_16 = "src/z0/x/x20.js:catalog-row:016";
const x20_17 = "src/z0/x/x20.js:catalog-row:017";
const x20_18 = "src/z0/x/x20.js:catalog-row:018";
const x20_19 = "src/z0/x/x20.js:catalog-row:019";
const x20_20 = "src/z0/x/x20.js:catalog-row:020";
const x20_21 = "src/z0/x/x20.js:catalog-row:021";
const x20_22 = "src/z0/x/x20.js:catalog-row:022";
const x20_23 = "src/z0/x/x20.js:catalog-row:023";
const x20_24 = "src/z0/x/x20.js:catalog-row:024";
const x20_25 = "src/z0/x/x20.js:catalog-row:025";
const x20_26 = "src/z0/x/x20.js:catalog-row:026";
const x20_27 = "src/z0/x/x20.js:catalog-row:027";
const x20_28 = "src/z0/x/x20.js:catalog-row:028";
const x20_29 = "src/z0/x/x20.js:catalog-row:029";
const x20_30 = "src/z0/x/x20.js:catalog-row:030";
const x20_31 = "src/z0/x/x20.js:catalog-row:031";
const x20_32 = "src/z0/x/x20.js:catalog-row:032";
const x20_33 = "src/z0/x/x20.js:catalog-row:033";
const x20_34 = "src/z0/x/x20.js:catalog-row:034";
const x20_35 = "src/z0/x/x20.js:catalog-row:035";
const x20_36 = "src/z0/x/x20.js:catalog-row:036";
const x20_37 = "src/z0/x/x20.js:catalog-row:037";
const x20_38 = "src/z0/x/x20.js:catalog-row:038";
const x20_39 = "src/z0/x/x20.js:catalog-row:039";
const x20_40 = "src/z0/x/x20.js:catalog-row:040";
const x20_41 = "src/z0/x/x20.js:catalog-row:041";
const x20_42 = "src/z0/x/x20.js:catalog-row:042";
const x20_43 = "src/z0/x/x20.js:catalog-row:043";
const x20_44 = "src/z0/x/x20.js:catalog-row:044";
const x20_45 = "src/z0/x/x20.js:catalog-row:045";
const x20_46 = "src/z0/x/x20.js:catalog-row:046";
const x20_47 = "src/z0/x/x20.js:catalog-row:047";
const x20_48 = "src/z0/x/x20.js:catalog-row:048";
const x20_49 = "src/z0/x/x20.js:catalog-row:049";
const x20_50 = "src/z0/x/x20.js:catalog-row:050";
const x20_51 = "src/z0/x/x20.js:catalog-row:051";
const x20_52 = "src/z0/x/x20.js:catalog-row:052";
const x20_53 = "src/z0/x/x20.js:catalog-row:053";
const x20_54 = "src/z0/x/x20.js:catalog-row:054";
const x20_55 = "src/z0/x/x20.js:catalog-row:055";
const x20_56 = "src/z0/x/x20.js:catalog-row:056";
const x20_57 = "src/z0/x/x20.js:catalog-row:057";
const x20_58 = "src/z0/x/x20.js:catalog-row:058";
const x20_59 = "src/z0/x/x20.js:catalog-row:059";
const x20_60 = "src/z0/x/x20.js:catalog-row:060";
const x20_61 = "src/z0/x/x20.js:catalog-row:061";
const x20_62 = "src/z0/x/x20.js:catalog-row:062";
const x20_63 = "src/z0/x/x20.js:catalog-row:063";
const x20_64 = "src/z0/x/x20.js:catalog-row:064";
const x20_65 = "src/z0/x/x20.js:catalog-row:065";
const x20_66 = "src/z0/x/x20.js:catalog-row:066";
const x20_67 = "src/z0/x/x20.js:catalog-row:067";
const x20_68 = "src/z0/x/x20.js:catalog-row:068";
const x20_69 = "src/z0/x/x20.js:catalog-row:069";
const x20_70 = "src/z0/x/x20.js:catalog-row:070";
const x20_71 = "src/z0/x/x20.js:catalog-row:071";
const x20_72 = "src/z0/x/x20.js:catalog-row:072";
const x20_73 = "src/z0/x/x20.js:catalog-row:073";
const x20_74 = "src/z0/x/x20.js:catalog-row:074";
const x20_75 = "src/z0/x/x20.js:catalog-row:075";
const x20_76 = "src/z0/x/x20.js:catalog-row:076";
const x20_77 = "src/z0/x/x20.js:catalog-row:077";
const x20_78 = "src/z0/x/x20.js:catalog-row:078";
const x20_79 = "src/z0/x/x20.js:catalog-row:079";
const x20_80 = "src/z0/x/x20.js:catalog-row:080";
const x20_81 = "src/z0/x/x20.js:catalog-row:081";
const x20_82 = "src/z0/x/x20.js:catalog-row:082";
const x20_83 = "src/z0/x/x20.js:catalog-row:083";
const x20_84 = "src/z0/x/x20.js:catalog-row:084";
const x20_85 = "src/z0/x/x20.js:catalog-row:085";
const x20_86 = "src/z0/x/x20.js:catalog-row:086";
const x20_87 = "src/z0/x/x20.js:catalog-row:087";
const x20_88 = "src/z0/x/x20.js:catalog-row:088";
const x20_89 = "src/z0/x/x20.js:catalog-row:089";
const x20_90 = "src/z0/x/x20.js:catalog-row:090";
const x20_91 = "src/z0/x/x20.js:catalog-row:091";
const x20_92 = "src/z0/x/x20.js:catalog-row:092";
const x20_93 = "src/z0/x/x20.js:catalog-row:093";
const x20_94 = "src/z0/x/x20.js:catalog-row:094";
const x20_95 = "src/z0/x/x20.js:catalog-row:095";
const x20_96 = "src/z0/x/x20.js:catalog-row:096";
const x20_97 = "src/z0/x/x20.js:catalog-row:097";
const x20_98 = "src/z0/x/x20.js:catalog-row:098";
const x20_99 = "src/z0/x/x20.js:catalog-row:099";
const x20_100 = "src/z0/x/x20.js:catalog-row:100";
const x20_101 = "src/z0/x/x20.js:catalog-row:101";
const x20_102 = "src/z0/x/x20.js:catalog-row:102";
const x20_103 = "src/z0/x/x20.js:catalog-row:103";
const x20_104 = "src/z0/x/x20.js:catalog-row:104";
const x20_105 = "src/z0/x/x20.js:catalog-row:105";
const x20_106 = "src/z0/x/x20.js:catalog-row:106";
const x20_107 = "src/z0/x/x20.js:catalog-row:107";
const x20_108 = "src/z0/x/x20.js:catalog-row:108";
const x20_109 = "src/z0/x/x20.js:catalog-row:109";
const x20_110 = "src/z0/x/x20.js:catalog-row:110";
const x20_111 = "src/z0/x/x20.js:catalog-row:111";
const x20_112 = "src/z0/x/x20.js:catalog-row:112";
const x20_113 = "src/z0/x/x20.js:catalog-row:113";
const x20_114 = "src/z0/x/x20.js:catalog-row:114";
const x20_115 = "src/z0/x/x20.js:catalog-row:115";
const x20_116 = "src/z0/x/x20.js:catalog-row:116";
const x20_117 = "src/z0/x/x20.js:catalog-row:117";
const x20_118 = "src/z0/x/x20.js:catalog-row:118";
const x20_119 = "src/z0/x/x20.js:catalog-row:119";
const x20_120 = "src/z0/x/x20.js:catalog-row:120";
const x20_121 = "src/z0/x/x20.js:catalog-row:121";
const x20_122 = "src/z0/x/x20.js:catalog-row:122";
const x20_123 = "src/z0/x/x20.js:catalog-row:123";
const x20_124 = "src/z0/x/x20.js:catalog-row:124";
const x20_125 = "src/z0/x/x20.js:catalog-row:125";
const x20_126 = "src/z0/x/x20.js:catalog-row:126";
const x20_127 = "src/z0/x/x20.js:catalog-row:127";
const x20_128 = "src/z0/x/x20.js:catalog-row:128";
const x20_129 = "src/z0/x/x20.js:catalog-row:129";
const x20_130 = "src/z0/x/x20.js:catalog-row:130";
const x20_131 = "src/z0/x/x20.js:catalog-row:131";
const x20_132 = "src/z0/x/x20.js:catalog-row:132";
const x20_133 = "src/z0/x/x20.js:catalog-row:133";
const x20_134 = "src/z0/x/x20.js:catalog-row:134";
const x20_135 = "src/z0/x/x20.js:catalog-row:135";
const x20_136 = "src/z0/x/x20.js:catalog-row:136";
