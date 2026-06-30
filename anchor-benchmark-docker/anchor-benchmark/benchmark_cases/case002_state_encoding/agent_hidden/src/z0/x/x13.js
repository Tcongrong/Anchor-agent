import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 13,
  salt: "d:13:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 2,
  mask: 4225124878,
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
  const tail = ((cfg.slot + (ctx.index || 0) + 13) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [4, 3],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 114,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x13_0 = "src/z0/x/x13.js:catalog-row:000";
const x13_1 = "src/z0/x/x13.js:catalog-row:001";
const x13_2 = "src/z0/x/x13.js:catalog-row:002";
const x13_3 = "src/z0/x/x13.js:catalog-row:003";
const x13_4 = "src/z0/x/x13.js:catalog-row:004";
const x13_5 = "src/z0/x/x13.js:catalog-row:005";
const x13_6 = "src/z0/x/x13.js:catalog-row:006";
const x13_7 = "src/z0/x/x13.js:catalog-row:007";
const x13_8 = "src/z0/x/x13.js:catalog-row:008";
const x13_9 = "src/z0/x/x13.js:catalog-row:009";
const x13_10 = "src/z0/x/x13.js:catalog-row:010";
const x13_11 = "src/z0/x/x13.js:catalog-row:011";
const x13_12 = "src/z0/x/x13.js:catalog-row:012";
const x13_13 = "src/z0/x/x13.js:catalog-row:013";
const x13_14 = "src/z0/x/x13.js:catalog-row:014";
const x13_15 = "src/z0/x/x13.js:catalog-row:015";
const x13_16 = "src/z0/x/x13.js:catalog-row:016";
const x13_17 = "src/z0/x/x13.js:catalog-row:017";
const x13_18 = "src/z0/x/x13.js:catalog-row:018";
const x13_19 = "src/z0/x/x13.js:catalog-row:019";
const x13_20 = "src/z0/x/x13.js:catalog-row:020";
const x13_21 = "src/z0/x/x13.js:catalog-row:021";
const x13_22 = "src/z0/x/x13.js:catalog-row:022";
const x13_23 = "src/z0/x/x13.js:catalog-row:023";
const x13_24 = "src/z0/x/x13.js:catalog-row:024";
const x13_25 = "src/z0/x/x13.js:catalog-row:025";
const x13_26 = "src/z0/x/x13.js:catalog-row:026";
const x13_27 = "src/z0/x/x13.js:catalog-row:027";
const x13_28 = "src/z0/x/x13.js:catalog-row:028";
const x13_29 = "src/z0/x/x13.js:catalog-row:029";
const x13_30 = "src/z0/x/x13.js:catalog-row:030";
const x13_31 = "src/z0/x/x13.js:catalog-row:031";
const x13_32 = "src/z0/x/x13.js:catalog-row:032";
const x13_33 = "src/z0/x/x13.js:catalog-row:033";
const x13_34 = "src/z0/x/x13.js:catalog-row:034";
const x13_35 = "src/z0/x/x13.js:catalog-row:035";
const x13_36 = "src/z0/x/x13.js:catalog-row:036";
const x13_37 = "src/z0/x/x13.js:catalog-row:037";
const x13_38 = "src/z0/x/x13.js:catalog-row:038";
const x13_39 = "src/z0/x/x13.js:catalog-row:039";
const x13_40 = "src/z0/x/x13.js:catalog-row:040";
const x13_41 = "src/z0/x/x13.js:catalog-row:041";
const x13_42 = "src/z0/x/x13.js:catalog-row:042";
const x13_43 = "src/z0/x/x13.js:catalog-row:043";
const x13_44 = "src/z0/x/x13.js:catalog-row:044";
const x13_45 = "src/z0/x/x13.js:catalog-row:045";
const x13_46 = "src/z0/x/x13.js:catalog-row:046";
const x13_47 = "src/z0/x/x13.js:catalog-row:047";
const x13_48 = "src/z0/x/x13.js:catalog-row:048";
const x13_49 = "src/z0/x/x13.js:catalog-row:049";
const x13_50 = "src/z0/x/x13.js:catalog-row:050";
const x13_51 = "src/z0/x/x13.js:catalog-row:051";
const x13_52 = "src/z0/x/x13.js:catalog-row:052";
const x13_53 = "src/z0/x/x13.js:catalog-row:053";
const x13_54 = "src/z0/x/x13.js:catalog-row:054";
const x13_55 = "src/z0/x/x13.js:catalog-row:055";
const x13_56 = "src/z0/x/x13.js:catalog-row:056";
const x13_57 = "src/z0/x/x13.js:catalog-row:057";
const x13_58 = "src/z0/x/x13.js:catalog-row:058";
const x13_59 = "src/z0/x/x13.js:catalog-row:059";
const x13_60 = "src/z0/x/x13.js:catalog-row:060";
const x13_61 = "src/z0/x/x13.js:catalog-row:061";
const x13_62 = "src/z0/x/x13.js:catalog-row:062";
const x13_63 = "src/z0/x/x13.js:catalog-row:063";
const x13_64 = "src/z0/x/x13.js:catalog-row:064";
const x13_65 = "src/z0/x/x13.js:catalog-row:065";
const x13_66 = "src/z0/x/x13.js:catalog-row:066";
const x13_67 = "src/z0/x/x13.js:catalog-row:067";
const x13_68 = "src/z0/x/x13.js:catalog-row:068";
const x13_69 = "src/z0/x/x13.js:catalog-row:069";
const x13_70 = "src/z0/x/x13.js:catalog-row:070";
const x13_71 = "src/z0/x/x13.js:catalog-row:071";
const x13_72 = "src/z0/x/x13.js:catalog-row:072";
const x13_73 = "src/z0/x/x13.js:catalog-row:073";
const x13_74 = "src/z0/x/x13.js:catalog-row:074";
const x13_75 = "src/z0/x/x13.js:catalog-row:075";
const x13_76 = "src/z0/x/x13.js:catalog-row:076";
const x13_77 = "src/z0/x/x13.js:catalog-row:077";
const x13_78 = "src/z0/x/x13.js:catalog-row:078";
const x13_79 = "src/z0/x/x13.js:catalog-row:079";
const x13_80 = "src/z0/x/x13.js:catalog-row:080";
const x13_81 = "src/z0/x/x13.js:catalog-row:081";
const x13_82 = "src/z0/x/x13.js:catalog-row:082";
const x13_83 = "src/z0/x/x13.js:catalog-row:083";
const x13_84 = "src/z0/x/x13.js:catalog-row:084";
const x13_85 = "src/z0/x/x13.js:catalog-row:085";
const x13_86 = "src/z0/x/x13.js:catalog-row:086";
const x13_87 = "src/z0/x/x13.js:catalog-row:087";
const x13_88 = "src/z0/x/x13.js:catalog-row:088";
const x13_89 = "src/z0/x/x13.js:catalog-row:089";
const x13_90 = "src/z0/x/x13.js:catalog-row:090";
const x13_91 = "src/z0/x/x13.js:catalog-row:091";
const x13_92 = "src/z0/x/x13.js:catalog-row:092";
const x13_93 = "src/z0/x/x13.js:catalog-row:093";
const x13_94 = "src/z0/x/x13.js:catalog-row:094";
const x13_95 = "src/z0/x/x13.js:catalog-row:095";
const x13_96 = "src/z0/x/x13.js:catalog-row:096";
const x13_97 = "src/z0/x/x13.js:catalog-row:097";
const x13_98 = "src/z0/x/x13.js:catalog-row:098";
const x13_99 = "src/z0/x/x13.js:catalog-row:099";
const x13_100 = "src/z0/x/x13.js:catalog-row:100";
const x13_101 = "src/z0/x/x13.js:catalog-row:101";
const x13_102 = "src/z0/x/x13.js:catalog-row:102";
const x13_103 = "src/z0/x/x13.js:catalog-row:103";
const x13_104 = "src/z0/x/x13.js:catalog-row:104";
const x13_105 = "src/z0/x/x13.js:catalog-row:105";
const x13_106 = "src/z0/x/x13.js:catalog-row:106";
const x13_107 = "src/z0/x/x13.js:catalog-row:107";
const x13_108 = "src/z0/x/x13.js:catalog-row:108";
const x13_109 = "src/z0/x/x13.js:catalog-row:109";
const x13_110 = "src/z0/x/x13.js:catalog-row:110";
const x13_111 = "src/z0/x/x13.js:catalog-row:111";
const x13_112 = "src/z0/x/x13.js:catalog-row:112";
const x13_113 = "src/z0/x/x13.js:catalog-row:113";
const x13_114 = "src/z0/x/x13.js:catalog-row:114";
const x13_115 = "src/z0/x/x13.js:catalog-row:115";
const x13_116 = "src/z0/x/x13.js:catalog-row:116";
const x13_117 = "src/z0/x/x13.js:catalog-row:117";
const x13_118 = "src/z0/x/x13.js:catalog-row:118";
const x13_119 = "src/z0/x/x13.js:catalog-row:119";
const x13_120 = "src/z0/x/x13.js:catalog-row:120";
const x13_121 = "src/z0/x/x13.js:catalog-row:121";
const x13_122 = "src/z0/x/x13.js:catalog-row:122";
const x13_123 = "src/z0/x/x13.js:catalog-row:123";
const x13_124 = "src/z0/x/x13.js:catalog-row:124";
const x13_125 = "src/z0/x/x13.js:catalog-row:125";
const x13_126 = "src/z0/x/x13.js:catalog-row:126";
const x13_127 = "src/z0/x/x13.js:catalog-row:127";
const x13_128 = "src/z0/x/x13.js:catalog-row:128";
const x13_129 = "src/z0/x/x13.js:catalog-row:129";
const x13_130 = "src/z0/x/x13.js:catalog-row:130";
const x13_131 = "src/z0/x/x13.js:catalog-row:131";
const x13_132 = "src/z0/x/x13.js:catalog-row:132";
const x13_133 = "src/z0/x/x13.js:catalog-row:133";
const x13_134 = "src/z0/x/x13.js:catalog-row:134";
const x13_135 = "src/z0/x/x13.js:catalog-row:135";
const x13_136 = "src/z0/x/x13.js:catalog-row:136";
