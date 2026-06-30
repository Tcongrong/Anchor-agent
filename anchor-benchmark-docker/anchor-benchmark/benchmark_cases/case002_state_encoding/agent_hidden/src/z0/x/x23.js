import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 24,
  salt: "d:23:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 12,
  mask: 3359147177,
  branch: 4
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
  const tail = ((cfg.slot + (ctx.index || 0) + 23) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [5, 3],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 124,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x23_0 = "src/z0/x/x23.js:catalog-row:000";
const x23_1 = "src/z0/x/x23.js:catalog-row:001";
const x23_2 = "src/z0/x/x23.js:catalog-row:002";
const x23_3 = "src/z0/x/x23.js:catalog-row:003";
const x23_4 = "src/z0/x/x23.js:catalog-row:004";
const x23_5 = "src/z0/x/x23.js:catalog-row:005";
const x23_6 = "src/z0/x/x23.js:catalog-row:006";
const x23_7 = "src/z0/x/x23.js:catalog-row:007";
const x23_8 = "src/z0/x/x23.js:catalog-row:008";
const x23_9 = "src/z0/x/x23.js:catalog-row:009";
const x23_10 = "src/z0/x/x23.js:catalog-row:010";
const x23_11 = "src/z0/x/x23.js:catalog-row:011";
const x23_12 = "src/z0/x/x23.js:catalog-row:012";
const x23_13 = "src/z0/x/x23.js:catalog-row:013";
const x23_14 = "src/z0/x/x23.js:catalog-row:014";
const x23_15 = "src/z0/x/x23.js:catalog-row:015";
const x23_16 = "src/z0/x/x23.js:catalog-row:016";
const x23_17 = "src/z0/x/x23.js:catalog-row:017";
const x23_18 = "src/z0/x/x23.js:catalog-row:018";
const x23_19 = "src/z0/x/x23.js:catalog-row:019";
const x23_20 = "src/z0/x/x23.js:catalog-row:020";
const x23_21 = "src/z0/x/x23.js:catalog-row:021";
const x23_22 = "src/z0/x/x23.js:catalog-row:022";
const x23_23 = "src/z0/x/x23.js:catalog-row:023";
const x23_24 = "src/z0/x/x23.js:catalog-row:024";
const x23_25 = "src/z0/x/x23.js:catalog-row:025";
const x23_26 = "src/z0/x/x23.js:catalog-row:026";
const x23_27 = "src/z0/x/x23.js:catalog-row:027";
const x23_28 = "src/z0/x/x23.js:catalog-row:028";
const x23_29 = "src/z0/x/x23.js:catalog-row:029";
const x23_30 = "src/z0/x/x23.js:catalog-row:030";
const x23_31 = "src/z0/x/x23.js:catalog-row:031";
const x23_32 = "src/z0/x/x23.js:catalog-row:032";
const x23_33 = "src/z0/x/x23.js:catalog-row:033";
const x23_34 = "src/z0/x/x23.js:catalog-row:034";
const x23_35 = "src/z0/x/x23.js:catalog-row:035";
const x23_36 = "src/z0/x/x23.js:catalog-row:036";
const x23_37 = "src/z0/x/x23.js:catalog-row:037";
const x23_38 = "src/z0/x/x23.js:catalog-row:038";
const x23_39 = "src/z0/x/x23.js:catalog-row:039";
const x23_40 = "src/z0/x/x23.js:catalog-row:040";
const x23_41 = "src/z0/x/x23.js:catalog-row:041";
const x23_42 = "src/z0/x/x23.js:catalog-row:042";
const x23_43 = "src/z0/x/x23.js:catalog-row:043";
const x23_44 = "src/z0/x/x23.js:catalog-row:044";
const x23_45 = "src/z0/x/x23.js:catalog-row:045";
const x23_46 = "src/z0/x/x23.js:catalog-row:046";
const x23_47 = "src/z0/x/x23.js:catalog-row:047";
const x23_48 = "src/z0/x/x23.js:catalog-row:048";
const x23_49 = "src/z0/x/x23.js:catalog-row:049";
const x23_50 = "src/z0/x/x23.js:catalog-row:050";
const x23_51 = "src/z0/x/x23.js:catalog-row:051";
const x23_52 = "src/z0/x/x23.js:catalog-row:052";
const x23_53 = "src/z0/x/x23.js:catalog-row:053";
const x23_54 = "src/z0/x/x23.js:catalog-row:054";
const x23_55 = "src/z0/x/x23.js:catalog-row:055";
const x23_56 = "src/z0/x/x23.js:catalog-row:056";
const x23_57 = "src/z0/x/x23.js:catalog-row:057";
const x23_58 = "src/z0/x/x23.js:catalog-row:058";
const x23_59 = "src/z0/x/x23.js:catalog-row:059";
const x23_60 = "src/z0/x/x23.js:catalog-row:060";
const x23_61 = "src/z0/x/x23.js:catalog-row:061";
const x23_62 = "src/z0/x/x23.js:catalog-row:062";
const x23_63 = "src/z0/x/x23.js:catalog-row:063";
const x23_64 = "src/z0/x/x23.js:catalog-row:064";
const x23_65 = "src/z0/x/x23.js:catalog-row:065";
const x23_66 = "src/z0/x/x23.js:catalog-row:066";
const x23_67 = "src/z0/x/x23.js:catalog-row:067";
const x23_68 = "src/z0/x/x23.js:catalog-row:068";
const x23_69 = "src/z0/x/x23.js:catalog-row:069";
const x23_70 = "src/z0/x/x23.js:catalog-row:070";
const x23_71 = "src/z0/x/x23.js:catalog-row:071";
const x23_72 = "src/z0/x/x23.js:catalog-row:072";
const x23_73 = "src/z0/x/x23.js:catalog-row:073";
const x23_74 = "src/z0/x/x23.js:catalog-row:074";
const x23_75 = "src/z0/x/x23.js:catalog-row:075";
const x23_76 = "src/z0/x/x23.js:catalog-row:076";
const x23_77 = "src/z0/x/x23.js:catalog-row:077";
const x23_78 = "src/z0/x/x23.js:catalog-row:078";
const x23_79 = "src/z0/x/x23.js:catalog-row:079";
const x23_80 = "src/z0/x/x23.js:catalog-row:080";
const x23_81 = "src/z0/x/x23.js:catalog-row:081";
const x23_82 = "src/z0/x/x23.js:catalog-row:082";
const x23_83 = "src/z0/x/x23.js:catalog-row:083";
const x23_84 = "src/z0/x/x23.js:catalog-row:084";
const x23_85 = "src/z0/x/x23.js:catalog-row:085";
const x23_86 = "src/z0/x/x23.js:catalog-row:086";
const x23_87 = "src/z0/x/x23.js:catalog-row:087";
const x23_88 = "src/z0/x/x23.js:catalog-row:088";
const x23_89 = "src/z0/x/x23.js:catalog-row:089";
const x23_90 = "src/z0/x/x23.js:catalog-row:090";
const x23_91 = "src/z0/x/x23.js:catalog-row:091";
const x23_92 = "src/z0/x/x23.js:catalog-row:092";
const x23_93 = "src/z0/x/x23.js:catalog-row:093";
const x23_94 = "src/z0/x/x23.js:catalog-row:094";
const x23_95 = "src/z0/x/x23.js:catalog-row:095";
const x23_96 = "src/z0/x/x23.js:catalog-row:096";
const x23_97 = "src/z0/x/x23.js:catalog-row:097";
const x23_98 = "src/z0/x/x23.js:catalog-row:098";
const x23_99 = "src/z0/x/x23.js:catalog-row:099";
const x23_100 = "src/z0/x/x23.js:catalog-row:100";
const x23_101 = "src/z0/x/x23.js:catalog-row:101";
const x23_102 = "src/z0/x/x23.js:catalog-row:102";
const x23_103 = "src/z0/x/x23.js:catalog-row:103";
const x23_104 = "src/z0/x/x23.js:catalog-row:104";
const x23_105 = "src/z0/x/x23.js:catalog-row:105";
const x23_106 = "src/z0/x/x23.js:catalog-row:106";
const x23_107 = "src/z0/x/x23.js:catalog-row:107";
const x23_108 = "src/z0/x/x23.js:catalog-row:108";
const x23_109 = "src/z0/x/x23.js:catalog-row:109";
const x23_110 = "src/z0/x/x23.js:catalog-row:110";
const x23_111 = "src/z0/x/x23.js:catalog-row:111";
const x23_112 = "src/z0/x/x23.js:catalog-row:112";
const x23_113 = "src/z0/x/x23.js:catalog-row:113";
const x23_114 = "src/z0/x/x23.js:catalog-row:114";
const x23_115 = "src/z0/x/x23.js:catalog-row:115";
const x23_116 = "src/z0/x/x23.js:catalog-row:116";
const x23_117 = "src/z0/x/x23.js:catalog-row:117";
const x23_118 = "src/z0/x/x23.js:catalog-row:118";
const x23_119 = "src/z0/x/x23.js:catalog-row:119";
const x23_120 = "src/z0/x/x23.js:catalog-row:120";
const x23_121 = "src/z0/x/x23.js:catalog-row:121";
const x23_122 = "src/z0/x/x23.js:catalog-row:122";
const x23_123 = "src/z0/x/x23.js:catalog-row:123";
const x23_124 = "src/z0/x/x23.js:catalog-row:124";
const x23_125 = "src/z0/x/x23.js:catalog-row:125";
const x23_126 = "src/z0/x/x23.js:catalog-row:126";
const x23_127 = "src/z0/x/x23.js:catalog-row:127";
const x23_128 = "src/z0/x/x23.js:catalog-row:128";
const x23_129 = "src/z0/x/x23.js:catalog-row:129";
const x23_130 = "src/z0/x/x23.js:catalog-row:130";
const x23_131 = "src/z0/x/x23.js:catalog-row:131";
const x23_132 = "src/z0/x/x23.js:catalog-row:132";
const x23_133 = "src/z0/x/x23.js:catalog-row:133";
const x23_134 = "src/z0/x/x23.js:catalog-row:134";
const x23_135 = "src/z0/x/x23.js:catalog-row:135";
const x23_136 = "src/z0/x/x23.js:catalog-row:136";
