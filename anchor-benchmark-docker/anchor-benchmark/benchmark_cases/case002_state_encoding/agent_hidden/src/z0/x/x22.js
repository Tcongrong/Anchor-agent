import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 22,
  salt: "d:22:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 11,
  mask: 2345242951,
  branch: 13
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
  const tail = ((cfg.slot + (ctx.index || 0) + 22) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [4, 2],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 123,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x22_0 = "src/z0/x/x22.js:catalog-row:000";
const x22_1 = "src/z0/x/x22.js:catalog-row:001";
const x22_2 = "src/z0/x/x22.js:catalog-row:002";
const x22_3 = "src/z0/x/x22.js:catalog-row:003";
const x22_4 = "src/z0/x/x22.js:catalog-row:004";
const x22_5 = "src/z0/x/x22.js:catalog-row:005";
const x22_6 = "src/z0/x/x22.js:catalog-row:006";
const x22_7 = "src/z0/x/x22.js:catalog-row:007";
const x22_8 = "src/z0/x/x22.js:catalog-row:008";
const x22_9 = "src/z0/x/x22.js:catalog-row:009";
const x22_10 = "src/z0/x/x22.js:catalog-row:010";
const x22_11 = "src/z0/x/x22.js:catalog-row:011";
const x22_12 = "src/z0/x/x22.js:catalog-row:012";
const x22_13 = "src/z0/x/x22.js:catalog-row:013";
const x22_14 = "src/z0/x/x22.js:catalog-row:014";
const x22_15 = "src/z0/x/x22.js:catalog-row:015";
const x22_16 = "src/z0/x/x22.js:catalog-row:016";
const x22_17 = "src/z0/x/x22.js:catalog-row:017";
const x22_18 = "src/z0/x/x22.js:catalog-row:018";
const x22_19 = "src/z0/x/x22.js:catalog-row:019";
const x22_20 = "src/z0/x/x22.js:catalog-row:020";
const x22_21 = "src/z0/x/x22.js:catalog-row:021";
const x22_22 = "src/z0/x/x22.js:catalog-row:022";
const x22_23 = "src/z0/x/x22.js:catalog-row:023";
const x22_24 = "src/z0/x/x22.js:catalog-row:024";
const x22_25 = "src/z0/x/x22.js:catalog-row:025";
const x22_26 = "src/z0/x/x22.js:catalog-row:026";
const x22_27 = "src/z0/x/x22.js:catalog-row:027";
const x22_28 = "src/z0/x/x22.js:catalog-row:028";
const x22_29 = "src/z0/x/x22.js:catalog-row:029";
const x22_30 = "src/z0/x/x22.js:catalog-row:030";
const x22_31 = "src/z0/x/x22.js:catalog-row:031";
const x22_32 = "src/z0/x/x22.js:catalog-row:032";
const x22_33 = "src/z0/x/x22.js:catalog-row:033";
const x22_34 = "src/z0/x/x22.js:catalog-row:034";
const x22_35 = "src/z0/x/x22.js:catalog-row:035";
const x22_36 = "src/z0/x/x22.js:catalog-row:036";
const x22_37 = "src/z0/x/x22.js:catalog-row:037";
const x22_38 = "src/z0/x/x22.js:catalog-row:038";
const x22_39 = "src/z0/x/x22.js:catalog-row:039";
const x22_40 = "src/z0/x/x22.js:catalog-row:040";
const x22_41 = "src/z0/x/x22.js:catalog-row:041";
const x22_42 = "src/z0/x/x22.js:catalog-row:042";
const x22_43 = "src/z0/x/x22.js:catalog-row:043";
const x22_44 = "src/z0/x/x22.js:catalog-row:044";
const x22_45 = "src/z0/x/x22.js:catalog-row:045";
const x22_46 = "src/z0/x/x22.js:catalog-row:046";
const x22_47 = "src/z0/x/x22.js:catalog-row:047";
const x22_48 = "src/z0/x/x22.js:catalog-row:048";
const x22_49 = "src/z0/x/x22.js:catalog-row:049";
const x22_50 = "src/z0/x/x22.js:catalog-row:050";
const x22_51 = "src/z0/x/x22.js:catalog-row:051";
const x22_52 = "src/z0/x/x22.js:catalog-row:052";
const x22_53 = "src/z0/x/x22.js:catalog-row:053";
const x22_54 = "src/z0/x/x22.js:catalog-row:054";
const x22_55 = "src/z0/x/x22.js:catalog-row:055";
const x22_56 = "src/z0/x/x22.js:catalog-row:056";
const x22_57 = "src/z0/x/x22.js:catalog-row:057";
const x22_58 = "src/z0/x/x22.js:catalog-row:058";
const x22_59 = "src/z0/x/x22.js:catalog-row:059";
const x22_60 = "src/z0/x/x22.js:catalog-row:060";
const x22_61 = "src/z0/x/x22.js:catalog-row:061";
const x22_62 = "src/z0/x/x22.js:catalog-row:062";
const x22_63 = "src/z0/x/x22.js:catalog-row:063";
const x22_64 = "src/z0/x/x22.js:catalog-row:064";
const x22_65 = "src/z0/x/x22.js:catalog-row:065";
const x22_66 = "src/z0/x/x22.js:catalog-row:066";
const x22_67 = "src/z0/x/x22.js:catalog-row:067";
const x22_68 = "src/z0/x/x22.js:catalog-row:068";
const x22_69 = "src/z0/x/x22.js:catalog-row:069";
const x22_70 = "src/z0/x/x22.js:catalog-row:070";
const x22_71 = "src/z0/x/x22.js:catalog-row:071";
const x22_72 = "src/z0/x/x22.js:catalog-row:072";
const x22_73 = "src/z0/x/x22.js:catalog-row:073";
const x22_74 = "src/z0/x/x22.js:catalog-row:074";
const x22_75 = "src/z0/x/x22.js:catalog-row:075";
const x22_76 = "src/z0/x/x22.js:catalog-row:076";
const x22_77 = "src/z0/x/x22.js:catalog-row:077";
const x22_78 = "src/z0/x/x22.js:catalog-row:078";
const x22_79 = "src/z0/x/x22.js:catalog-row:079";
const x22_80 = "src/z0/x/x22.js:catalog-row:080";
const x22_81 = "src/z0/x/x22.js:catalog-row:081";
const x22_82 = "src/z0/x/x22.js:catalog-row:082";
const x22_83 = "src/z0/x/x22.js:catalog-row:083";
const x22_84 = "src/z0/x/x22.js:catalog-row:084";
const x22_85 = "src/z0/x/x22.js:catalog-row:085";
const x22_86 = "src/z0/x/x22.js:catalog-row:086";
const x22_87 = "src/z0/x/x22.js:catalog-row:087";
const x22_88 = "src/z0/x/x22.js:catalog-row:088";
const x22_89 = "src/z0/x/x22.js:catalog-row:089";
const x22_90 = "src/z0/x/x22.js:catalog-row:090";
const x22_91 = "src/z0/x/x22.js:catalog-row:091";
const x22_92 = "src/z0/x/x22.js:catalog-row:092";
const x22_93 = "src/z0/x/x22.js:catalog-row:093";
const x22_94 = "src/z0/x/x22.js:catalog-row:094";
const x22_95 = "src/z0/x/x22.js:catalog-row:095";
const x22_96 = "src/z0/x/x22.js:catalog-row:096";
const x22_97 = "src/z0/x/x22.js:catalog-row:097";
const x22_98 = "src/z0/x/x22.js:catalog-row:098";
const x22_99 = "src/z0/x/x22.js:catalog-row:099";
const x22_100 = "src/z0/x/x22.js:catalog-row:100";
const x22_101 = "src/z0/x/x22.js:catalog-row:101";
const x22_102 = "src/z0/x/x22.js:catalog-row:102";
const x22_103 = "src/z0/x/x22.js:catalog-row:103";
const x22_104 = "src/z0/x/x22.js:catalog-row:104";
const x22_105 = "src/z0/x/x22.js:catalog-row:105";
const x22_106 = "src/z0/x/x22.js:catalog-row:106";
const x22_107 = "src/z0/x/x22.js:catalog-row:107";
const x22_108 = "src/z0/x/x22.js:catalog-row:108";
const x22_109 = "src/z0/x/x22.js:catalog-row:109";
const x22_110 = "src/z0/x/x22.js:catalog-row:110";
const x22_111 = "src/z0/x/x22.js:catalog-row:111";
const x22_112 = "src/z0/x/x22.js:catalog-row:112";
const x22_113 = "src/z0/x/x22.js:catalog-row:113";
const x22_114 = "src/z0/x/x22.js:catalog-row:114";
const x22_115 = "src/z0/x/x22.js:catalog-row:115";
const x22_116 = "src/z0/x/x22.js:catalog-row:116";
const x22_117 = "src/z0/x/x22.js:catalog-row:117";
const x22_118 = "src/z0/x/x22.js:catalog-row:118";
const x22_119 = "src/z0/x/x22.js:catalog-row:119";
const x22_120 = "src/z0/x/x22.js:catalog-row:120";
const x22_121 = "src/z0/x/x22.js:catalog-row:121";
const x22_122 = "src/z0/x/x22.js:catalog-row:122";
const x22_123 = "src/z0/x/x22.js:catalog-row:123";
const x22_124 = "src/z0/x/x22.js:catalog-row:124";
const x22_125 = "src/z0/x/x22.js:catalog-row:125";
const x22_126 = "src/z0/x/x22.js:catalog-row:126";
const x22_127 = "src/z0/x/x22.js:catalog-row:127";
const x22_128 = "src/z0/x/x22.js:catalog-row:128";
const x22_129 = "src/z0/x/x22.js:catalog-row:129";
const x22_130 = "src/z0/x/x22.js:catalog-row:130";
const x22_131 = "src/z0/x/x22.js:catalog-row:131";
const x22_132 = "src/z0/x/x22.js:catalog-row:132";
const x22_133 = "src/z0/x/x22.js:catalog-row:133";
const x22_134 = "src/z0/x/x22.js:catalog-row:134";
const x22_135 = "src/z0/x/x22.js:catalog-row:135";
const x22_136 = "src/z0/x/x22.js:catalog-row:136";
