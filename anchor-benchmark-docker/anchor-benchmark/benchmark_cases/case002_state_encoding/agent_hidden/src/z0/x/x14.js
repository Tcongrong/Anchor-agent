import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 14,
  salt: "d:14:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 3,
  mask: 2584593343,
  branch: 5
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
  const tail = ((cfg.slot + (ctx.index || 0) + 14) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [5, 4],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 115,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x14_0 = "src/z0/x/x14.js:catalog-row:000";
const x14_1 = "src/z0/x/x14.js:catalog-row:001";
const x14_2 = "src/z0/x/x14.js:catalog-row:002";
const x14_3 = "src/z0/x/x14.js:catalog-row:003";
const x14_4 = "src/z0/x/x14.js:catalog-row:004";
const x14_5 = "src/z0/x/x14.js:catalog-row:005";
const x14_6 = "src/z0/x/x14.js:catalog-row:006";
const x14_7 = "src/z0/x/x14.js:catalog-row:007";
const x14_8 = "src/z0/x/x14.js:catalog-row:008";
const x14_9 = "src/z0/x/x14.js:catalog-row:009";
const x14_10 = "src/z0/x/x14.js:catalog-row:010";
const x14_11 = "src/z0/x/x14.js:catalog-row:011";
const x14_12 = "src/z0/x/x14.js:catalog-row:012";
const x14_13 = "src/z0/x/x14.js:catalog-row:013";
const x14_14 = "src/z0/x/x14.js:catalog-row:014";
const x14_15 = "src/z0/x/x14.js:catalog-row:015";
const x14_16 = "src/z0/x/x14.js:catalog-row:016";
const x14_17 = "src/z0/x/x14.js:catalog-row:017";
const x14_18 = "src/z0/x/x14.js:catalog-row:018";
const x14_19 = "src/z0/x/x14.js:catalog-row:019";
const x14_20 = "src/z0/x/x14.js:catalog-row:020";
const x14_21 = "src/z0/x/x14.js:catalog-row:021";
const x14_22 = "src/z0/x/x14.js:catalog-row:022";
const x14_23 = "src/z0/x/x14.js:catalog-row:023";
const x14_24 = "src/z0/x/x14.js:catalog-row:024";
const x14_25 = "src/z0/x/x14.js:catalog-row:025";
const x14_26 = "src/z0/x/x14.js:catalog-row:026";
const x14_27 = "src/z0/x/x14.js:catalog-row:027";
const x14_28 = "src/z0/x/x14.js:catalog-row:028";
const x14_29 = "src/z0/x/x14.js:catalog-row:029";
const x14_30 = "src/z0/x/x14.js:catalog-row:030";
const x14_31 = "src/z0/x/x14.js:catalog-row:031";
const x14_32 = "src/z0/x/x14.js:catalog-row:032";
const x14_33 = "src/z0/x/x14.js:catalog-row:033";
const x14_34 = "src/z0/x/x14.js:catalog-row:034";
const x14_35 = "src/z0/x/x14.js:catalog-row:035";
const x14_36 = "src/z0/x/x14.js:catalog-row:036";
const x14_37 = "src/z0/x/x14.js:catalog-row:037";
const x14_38 = "src/z0/x/x14.js:catalog-row:038";
const x14_39 = "src/z0/x/x14.js:catalog-row:039";
const x14_40 = "src/z0/x/x14.js:catalog-row:040";
const x14_41 = "src/z0/x/x14.js:catalog-row:041";
const x14_42 = "src/z0/x/x14.js:catalog-row:042";
const x14_43 = "src/z0/x/x14.js:catalog-row:043";
const x14_44 = "src/z0/x/x14.js:catalog-row:044";
const x14_45 = "src/z0/x/x14.js:catalog-row:045";
const x14_46 = "src/z0/x/x14.js:catalog-row:046";
const x14_47 = "src/z0/x/x14.js:catalog-row:047";
const x14_48 = "src/z0/x/x14.js:catalog-row:048";
const x14_49 = "src/z0/x/x14.js:catalog-row:049";
const x14_50 = "src/z0/x/x14.js:catalog-row:050";
const x14_51 = "src/z0/x/x14.js:catalog-row:051";
const x14_52 = "src/z0/x/x14.js:catalog-row:052";
const x14_53 = "src/z0/x/x14.js:catalog-row:053";
const x14_54 = "src/z0/x/x14.js:catalog-row:054";
const x14_55 = "src/z0/x/x14.js:catalog-row:055";
const x14_56 = "src/z0/x/x14.js:catalog-row:056";
const x14_57 = "src/z0/x/x14.js:catalog-row:057";
const x14_58 = "src/z0/x/x14.js:catalog-row:058";
const x14_59 = "src/z0/x/x14.js:catalog-row:059";
const x14_60 = "src/z0/x/x14.js:catalog-row:060";
const x14_61 = "src/z0/x/x14.js:catalog-row:061";
const x14_62 = "src/z0/x/x14.js:catalog-row:062";
const x14_63 = "src/z0/x/x14.js:catalog-row:063";
const x14_64 = "src/z0/x/x14.js:catalog-row:064";
const x14_65 = "src/z0/x/x14.js:catalog-row:065";
const x14_66 = "src/z0/x/x14.js:catalog-row:066";
const x14_67 = "src/z0/x/x14.js:catalog-row:067";
const x14_68 = "src/z0/x/x14.js:catalog-row:068";
const x14_69 = "src/z0/x/x14.js:catalog-row:069";
const x14_70 = "src/z0/x/x14.js:catalog-row:070";
const x14_71 = "src/z0/x/x14.js:catalog-row:071";
const x14_72 = "src/z0/x/x14.js:catalog-row:072";
const x14_73 = "src/z0/x/x14.js:catalog-row:073";
const x14_74 = "src/z0/x/x14.js:catalog-row:074";
const x14_75 = "src/z0/x/x14.js:catalog-row:075";
const x14_76 = "src/z0/x/x14.js:catalog-row:076";
const x14_77 = "src/z0/x/x14.js:catalog-row:077";
const x14_78 = "src/z0/x/x14.js:catalog-row:078";
const x14_79 = "src/z0/x/x14.js:catalog-row:079";
const x14_80 = "src/z0/x/x14.js:catalog-row:080";
const x14_81 = "src/z0/x/x14.js:catalog-row:081";
const x14_82 = "src/z0/x/x14.js:catalog-row:082";
const x14_83 = "src/z0/x/x14.js:catalog-row:083";
const x14_84 = "src/z0/x/x14.js:catalog-row:084";
const x14_85 = "src/z0/x/x14.js:catalog-row:085";
const x14_86 = "src/z0/x/x14.js:catalog-row:086";
const x14_87 = "src/z0/x/x14.js:catalog-row:087";
const x14_88 = "src/z0/x/x14.js:catalog-row:088";
const x14_89 = "src/z0/x/x14.js:catalog-row:089";
const x14_90 = "src/z0/x/x14.js:catalog-row:090";
const x14_91 = "src/z0/x/x14.js:catalog-row:091";
const x14_92 = "src/z0/x/x14.js:catalog-row:092";
const x14_93 = "src/z0/x/x14.js:catalog-row:093";
const x14_94 = "src/z0/x/x14.js:catalog-row:094";
const x14_95 = "src/z0/x/x14.js:catalog-row:095";
const x14_96 = "src/z0/x/x14.js:catalog-row:096";
const x14_97 = "src/z0/x/x14.js:catalog-row:097";
const x14_98 = "src/z0/x/x14.js:catalog-row:098";
const x14_99 = "src/z0/x/x14.js:catalog-row:099";
const x14_100 = "src/z0/x/x14.js:catalog-row:100";
const x14_101 = "src/z0/x/x14.js:catalog-row:101";
const x14_102 = "src/z0/x/x14.js:catalog-row:102";
const x14_103 = "src/z0/x/x14.js:catalog-row:103";
const x14_104 = "src/z0/x/x14.js:catalog-row:104";
const x14_105 = "src/z0/x/x14.js:catalog-row:105";
const x14_106 = "src/z0/x/x14.js:catalog-row:106";
const x14_107 = "src/z0/x/x14.js:catalog-row:107";
const x14_108 = "src/z0/x/x14.js:catalog-row:108";
const x14_109 = "src/z0/x/x14.js:catalog-row:109";
const x14_110 = "src/z0/x/x14.js:catalog-row:110";
const x14_111 = "src/z0/x/x14.js:catalog-row:111";
const x14_112 = "src/z0/x/x14.js:catalog-row:112";
const x14_113 = "src/z0/x/x14.js:catalog-row:113";
const x14_114 = "src/z0/x/x14.js:catalog-row:114";
const x14_115 = "src/z0/x/x14.js:catalog-row:115";
const x14_116 = "src/z0/x/x14.js:catalog-row:116";
const x14_117 = "src/z0/x/x14.js:catalog-row:117";
const x14_118 = "src/z0/x/x14.js:catalog-row:118";
const x14_119 = "src/z0/x/x14.js:catalog-row:119";
const x14_120 = "src/z0/x/x14.js:catalog-row:120";
const x14_121 = "src/z0/x/x14.js:catalog-row:121";
const x14_122 = "src/z0/x/x14.js:catalog-row:122";
const x14_123 = "src/z0/x/x14.js:catalog-row:123";
const x14_124 = "src/z0/x/x14.js:catalog-row:124";
const x14_125 = "src/z0/x/x14.js:catalog-row:125";
const x14_126 = "src/z0/x/x14.js:catalog-row:126";
const x14_127 = "src/z0/x/x14.js:catalog-row:127";
const x14_128 = "src/z0/x/x14.js:catalog-row:128";
const x14_129 = "src/z0/x/x14.js:catalog-row:129";
const x14_130 = "src/z0/x/x14.js:catalog-row:130";
const x14_131 = "src/z0/x/x14.js:catalog-row:131";
const x14_132 = "src/z0/x/x14.js:catalog-row:132";
const x14_133 = "src/z0/x/x14.js:catalog-row:133";
const x14_134 = "src/z0/x/x14.js:catalog-row:134";
const x14_135 = "src/z0/x/x14.js:catalog-row:135";
const x14_136 = "src/z0/x/x14.js:catalog-row:136";
