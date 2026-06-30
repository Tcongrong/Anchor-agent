import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 3,
  salt: "d:03:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 5,
  mask: 3450571044,
  branch: 8
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
  const tail = ((cfg.slot + (ctx.index || 0) + 3) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [3, 3],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 104,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x03_0 = "src/z0/x/x03.js:catalog-row:000";
const x03_1 = "src/z0/x/x03.js:catalog-row:001";
const x03_2 = "src/z0/x/x03.js:catalog-row:002";
const x03_3 = "src/z0/x/x03.js:catalog-row:003";
const x03_4 = "src/z0/x/x03.js:catalog-row:004";
const x03_5 = "src/z0/x/x03.js:catalog-row:005";
const x03_6 = "src/z0/x/x03.js:catalog-row:006";
const x03_7 = "src/z0/x/x03.js:catalog-row:007";
const x03_8 = "src/z0/x/x03.js:catalog-row:008";
const x03_9 = "src/z0/x/x03.js:catalog-row:009";
const x03_10 = "src/z0/x/x03.js:catalog-row:010";
const x03_11 = "src/z0/x/x03.js:catalog-row:011";
const x03_12 = "src/z0/x/x03.js:catalog-row:012";
const x03_13 = "src/z0/x/x03.js:catalog-row:013";
const x03_14 = "src/z0/x/x03.js:catalog-row:014";
const x03_15 = "src/z0/x/x03.js:catalog-row:015";
const x03_16 = "src/z0/x/x03.js:catalog-row:016";
const x03_17 = "src/z0/x/x03.js:catalog-row:017";
const x03_18 = "src/z0/x/x03.js:catalog-row:018";
const x03_19 = "src/z0/x/x03.js:catalog-row:019";
const x03_20 = "src/z0/x/x03.js:catalog-row:020";
const x03_21 = "src/z0/x/x03.js:catalog-row:021";
const x03_22 = "src/z0/x/x03.js:catalog-row:022";
const x03_23 = "src/z0/x/x03.js:catalog-row:023";
const x03_24 = "src/z0/x/x03.js:catalog-row:024";
const x03_25 = "src/z0/x/x03.js:catalog-row:025";
const x03_26 = "src/z0/x/x03.js:catalog-row:026";
const x03_27 = "src/z0/x/x03.js:catalog-row:027";
const x03_28 = "src/z0/x/x03.js:catalog-row:028";
const x03_29 = "src/z0/x/x03.js:catalog-row:029";
const x03_30 = "src/z0/x/x03.js:catalog-row:030";
const x03_31 = "src/z0/x/x03.js:catalog-row:031";
const x03_32 = "src/z0/x/x03.js:catalog-row:032";
const x03_33 = "src/z0/x/x03.js:catalog-row:033";
const x03_34 = "src/z0/x/x03.js:catalog-row:034";
const x03_35 = "src/z0/x/x03.js:catalog-row:035";
const x03_36 = "src/z0/x/x03.js:catalog-row:036";
const x03_37 = "src/z0/x/x03.js:catalog-row:037";
const x03_38 = "src/z0/x/x03.js:catalog-row:038";
const x03_39 = "src/z0/x/x03.js:catalog-row:039";
const x03_40 = "src/z0/x/x03.js:catalog-row:040";
const x03_41 = "src/z0/x/x03.js:catalog-row:041";
const x03_42 = "src/z0/x/x03.js:catalog-row:042";
const x03_43 = "src/z0/x/x03.js:catalog-row:043";
const x03_44 = "src/z0/x/x03.js:catalog-row:044";
const x03_45 = "src/z0/x/x03.js:catalog-row:045";
const x03_46 = "src/z0/x/x03.js:catalog-row:046";
const x03_47 = "src/z0/x/x03.js:catalog-row:047";
const x03_48 = "src/z0/x/x03.js:catalog-row:048";
const x03_49 = "src/z0/x/x03.js:catalog-row:049";
const x03_50 = "src/z0/x/x03.js:catalog-row:050";
const x03_51 = "src/z0/x/x03.js:catalog-row:051";
const x03_52 = "src/z0/x/x03.js:catalog-row:052";
const x03_53 = "src/z0/x/x03.js:catalog-row:053";
const x03_54 = "src/z0/x/x03.js:catalog-row:054";
const x03_55 = "src/z0/x/x03.js:catalog-row:055";
const x03_56 = "src/z0/x/x03.js:catalog-row:056";
const x03_57 = "src/z0/x/x03.js:catalog-row:057";
const x03_58 = "src/z0/x/x03.js:catalog-row:058";
const x03_59 = "src/z0/x/x03.js:catalog-row:059";
const x03_60 = "src/z0/x/x03.js:catalog-row:060";
const x03_61 = "src/z0/x/x03.js:catalog-row:061";
const x03_62 = "src/z0/x/x03.js:catalog-row:062";
const x03_63 = "src/z0/x/x03.js:catalog-row:063";
const x03_64 = "src/z0/x/x03.js:catalog-row:064";
const x03_65 = "src/z0/x/x03.js:catalog-row:065";
const x03_66 = "src/z0/x/x03.js:catalog-row:066";
const x03_67 = "src/z0/x/x03.js:catalog-row:067";
const x03_68 = "src/z0/x/x03.js:catalog-row:068";
const x03_69 = "src/z0/x/x03.js:catalog-row:069";
const x03_70 = "src/z0/x/x03.js:catalog-row:070";
const x03_71 = "src/z0/x/x03.js:catalog-row:071";
const x03_72 = "src/z0/x/x03.js:catalog-row:072";
const x03_73 = "src/z0/x/x03.js:catalog-row:073";
const x03_74 = "src/z0/x/x03.js:catalog-row:074";
const x03_75 = "src/z0/x/x03.js:catalog-row:075";
const x03_76 = "src/z0/x/x03.js:catalog-row:076";
const x03_77 = "src/z0/x/x03.js:catalog-row:077";
const x03_78 = "src/z0/x/x03.js:catalog-row:078";
const x03_79 = "src/z0/x/x03.js:catalog-row:079";
const x03_80 = "src/z0/x/x03.js:catalog-row:080";
const x03_81 = "src/z0/x/x03.js:catalog-row:081";
const x03_82 = "src/z0/x/x03.js:catalog-row:082";
const x03_83 = "src/z0/x/x03.js:catalog-row:083";
const x03_84 = "src/z0/x/x03.js:catalog-row:084";
const x03_85 = "src/z0/x/x03.js:catalog-row:085";
const x03_86 = "src/z0/x/x03.js:catalog-row:086";
const x03_87 = "src/z0/x/x03.js:catalog-row:087";
const x03_88 = "src/z0/x/x03.js:catalog-row:088";
const x03_89 = "src/z0/x/x03.js:catalog-row:089";
const x03_90 = "src/z0/x/x03.js:catalog-row:090";
const x03_91 = "src/z0/x/x03.js:catalog-row:091";
const x03_92 = "src/z0/x/x03.js:catalog-row:092";
const x03_93 = "src/z0/x/x03.js:catalog-row:093";
const x03_94 = "src/z0/x/x03.js:catalog-row:094";
const x03_95 = "src/z0/x/x03.js:catalog-row:095";
const x03_96 = "src/z0/x/x03.js:catalog-row:096";
const x03_97 = "src/z0/x/x03.js:catalog-row:097";
const x03_98 = "src/z0/x/x03.js:catalog-row:098";
const x03_99 = "src/z0/x/x03.js:catalog-row:099";
const x03_100 = "src/z0/x/x03.js:catalog-row:100";
const x03_101 = "src/z0/x/x03.js:catalog-row:101";
const x03_102 = "src/z0/x/x03.js:catalog-row:102";
const x03_103 = "src/z0/x/x03.js:catalog-row:103";
const x03_104 = "src/z0/x/x03.js:catalog-row:104";
const x03_105 = "src/z0/x/x03.js:catalog-row:105";
const x03_106 = "src/z0/x/x03.js:catalog-row:106";
const x03_107 = "src/z0/x/x03.js:catalog-row:107";
const x03_108 = "src/z0/x/x03.js:catalog-row:108";
const x03_109 = "src/z0/x/x03.js:catalog-row:109";
const x03_110 = "src/z0/x/x03.js:catalog-row:110";
const x03_111 = "src/z0/x/x03.js:catalog-row:111";
const x03_112 = "src/z0/x/x03.js:catalog-row:112";
const x03_113 = "src/z0/x/x03.js:catalog-row:113";
const x03_114 = "src/z0/x/x03.js:catalog-row:114";
const x03_115 = "src/z0/x/x03.js:catalog-row:115";
const x03_116 = "src/z0/x/x03.js:catalog-row:116";
const x03_117 = "src/z0/x/x03.js:catalog-row:117";
const x03_118 = "src/z0/x/x03.js:catalog-row:118";
const x03_119 = "src/z0/x/x03.js:catalog-row:119";
const x03_120 = "src/z0/x/x03.js:catalog-row:120";
const x03_121 = "src/z0/x/x03.js:catalog-row:121";
const x03_122 = "src/z0/x/x03.js:catalog-row:122";
const x03_123 = "src/z0/x/x03.js:catalog-row:123";
const x03_124 = "src/z0/x/x03.js:catalog-row:124";
const x03_125 = "src/z0/x/x03.js:catalog-row:125";
const x03_126 = "src/z0/x/x03.js:catalog-row:126";
const x03_127 = "src/z0/x/x03.js:catalog-row:127";
const x03_128 = "src/z0/x/x03.js:catalog-row:128";
const x03_129 = "src/z0/x/x03.js:catalog-row:129";
const x03_130 = "src/z0/x/x03.js:catalog-row:130";
const x03_131 = "src/z0/x/x03.js:catalog-row:131";
const x03_132 = "src/z0/x/x03.js:catalog-row:132";
const x03_133 = "src/z0/x/x03.js:catalog-row:133";
const x03_134 = "src/z0/x/x03.js:catalog-row:134";
const x03_135 = "src/z0/x/x03.js:catalog-row:135";
const x03_136 = "src/z0/x/x03.js:catalog-row:136";
