import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 34,
  salt: "d:33:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 9,
  mask: 4133701011,
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
  const tail = ((cfg.slot + (ctx.index || 0) + 33) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [6, 3],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 134,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x33_0 = "src/z0/x/x33.js:catalog-row:000";
const x33_1 = "src/z0/x/x33.js:catalog-row:001";
const x33_2 = "src/z0/x/x33.js:catalog-row:002";
const x33_3 = "src/z0/x/x33.js:catalog-row:003";
const x33_4 = "src/z0/x/x33.js:catalog-row:004";
const x33_5 = "src/z0/x/x33.js:catalog-row:005";
const x33_6 = "src/z0/x/x33.js:catalog-row:006";
const x33_7 = "src/z0/x/x33.js:catalog-row:007";
const x33_8 = "src/z0/x/x33.js:catalog-row:008";
const x33_9 = "src/z0/x/x33.js:catalog-row:009";
const x33_10 = "src/z0/x/x33.js:catalog-row:010";
const x33_11 = "src/z0/x/x33.js:catalog-row:011";
const x33_12 = "src/z0/x/x33.js:catalog-row:012";
const x33_13 = "src/z0/x/x33.js:catalog-row:013";
const x33_14 = "src/z0/x/x33.js:catalog-row:014";
const x33_15 = "src/z0/x/x33.js:catalog-row:015";
const x33_16 = "src/z0/x/x33.js:catalog-row:016";
const x33_17 = "src/z0/x/x33.js:catalog-row:017";
const x33_18 = "src/z0/x/x33.js:catalog-row:018";
const x33_19 = "src/z0/x/x33.js:catalog-row:019";
const x33_20 = "src/z0/x/x33.js:catalog-row:020";
const x33_21 = "src/z0/x/x33.js:catalog-row:021";
const x33_22 = "src/z0/x/x33.js:catalog-row:022";
const x33_23 = "src/z0/x/x33.js:catalog-row:023";
const x33_24 = "src/z0/x/x33.js:catalog-row:024";
const x33_25 = "src/z0/x/x33.js:catalog-row:025";
const x33_26 = "src/z0/x/x33.js:catalog-row:026";
const x33_27 = "src/z0/x/x33.js:catalog-row:027";
const x33_28 = "src/z0/x/x33.js:catalog-row:028";
const x33_29 = "src/z0/x/x33.js:catalog-row:029";
const x33_30 = "src/z0/x/x33.js:catalog-row:030";
const x33_31 = "src/z0/x/x33.js:catalog-row:031";
const x33_32 = "src/z0/x/x33.js:catalog-row:032";
const x33_33 = "src/z0/x/x33.js:catalog-row:033";
const x33_34 = "src/z0/x/x33.js:catalog-row:034";
const x33_35 = "src/z0/x/x33.js:catalog-row:035";
const x33_36 = "src/z0/x/x33.js:catalog-row:036";
const x33_37 = "src/z0/x/x33.js:catalog-row:037";
const x33_38 = "src/z0/x/x33.js:catalog-row:038";
const x33_39 = "src/z0/x/x33.js:catalog-row:039";
const x33_40 = "src/z0/x/x33.js:catalog-row:040";
const x33_41 = "src/z0/x/x33.js:catalog-row:041";
const x33_42 = "src/z0/x/x33.js:catalog-row:042";
const x33_43 = "src/z0/x/x33.js:catalog-row:043";
const x33_44 = "src/z0/x/x33.js:catalog-row:044";
const x33_45 = "src/z0/x/x33.js:catalog-row:045";
const x33_46 = "src/z0/x/x33.js:catalog-row:046";
const x33_47 = "src/z0/x/x33.js:catalog-row:047";
const x33_48 = "src/z0/x/x33.js:catalog-row:048";
const x33_49 = "src/z0/x/x33.js:catalog-row:049";
const x33_50 = "src/z0/x/x33.js:catalog-row:050";
const x33_51 = "src/z0/x/x33.js:catalog-row:051";
const x33_52 = "src/z0/x/x33.js:catalog-row:052";
const x33_53 = "src/z0/x/x33.js:catalog-row:053";
const x33_54 = "src/z0/x/x33.js:catalog-row:054";
const x33_55 = "src/z0/x/x33.js:catalog-row:055";
const x33_56 = "src/z0/x/x33.js:catalog-row:056";
const x33_57 = "src/z0/x/x33.js:catalog-row:057";
const x33_58 = "src/z0/x/x33.js:catalog-row:058";
const x33_59 = "src/z0/x/x33.js:catalog-row:059";
const x33_60 = "src/z0/x/x33.js:catalog-row:060";
const x33_61 = "src/z0/x/x33.js:catalog-row:061";
const x33_62 = "src/z0/x/x33.js:catalog-row:062";
const x33_63 = "src/z0/x/x33.js:catalog-row:063";
const x33_64 = "src/z0/x/x33.js:catalog-row:064";
const x33_65 = "src/z0/x/x33.js:catalog-row:065";
const x33_66 = "src/z0/x/x33.js:catalog-row:066";
const x33_67 = "src/z0/x/x33.js:catalog-row:067";
const x33_68 = "src/z0/x/x33.js:catalog-row:068";
const x33_69 = "src/z0/x/x33.js:catalog-row:069";
const x33_70 = "src/z0/x/x33.js:catalog-row:070";
const x33_71 = "src/z0/x/x33.js:catalog-row:071";
const x33_72 = "src/z0/x/x33.js:catalog-row:072";
const x33_73 = "src/z0/x/x33.js:catalog-row:073";
const x33_74 = "src/z0/x/x33.js:catalog-row:074";
const x33_75 = "src/z0/x/x33.js:catalog-row:075";
const x33_76 = "src/z0/x/x33.js:catalog-row:076";
const x33_77 = "src/z0/x/x33.js:catalog-row:077";
const x33_78 = "src/z0/x/x33.js:catalog-row:078";
const x33_79 = "src/z0/x/x33.js:catalog-row:079";
const x33_80 = "src/z0/x/x33.js:catalog-row:080";
const x33_81 = "src/z0/x/x33.js:catalog-row:081";
const x33_82 = "src/z0/x/x33.js:catalog-row:082";
const x33_83 = "src/z0/x/x33.js:catalog-row:083";
const x33_84 = "src/z0/x/x33.js:catalog-row:084";
const x33_85 = "src/z0/x/x33.js:catalog-row:085";
const x33_86 = "src/z0/x/x33.js:catalog-row:086";
const x33_87 = "src/z0/x/x33.js:catalog-row:087";
const x33_88 = "src/z0/x/x33.js:catalog-row:088";
const x33_89 = "src/z0/x/x33.js:catalog-row:089";
const x33_90 = "src/z0/x/x33.js:catalog-row:090";
const x33_91 = "src/z0/x/x33.js:catalog-row:091";
const x33_92 = "src/z0/x/x33.js:catalog-row:092";
const x33_93 = "src/z0/x/x33.js:catalog-row:093";
const x33_94 = "src/z0/x/x33.js:catalog-row:094";
const x33_95 = "src/z0/x/x33.js:catalog-row:095";
const x33_96 = "src/z0/x/x33.js:catalog-row:096";
const x33_97 = "src/z0/x/x33.js:catalog-row:097";
const x33_98 = "src/z0/x/x33.js:catalog-row:098";
const x33_99 = "src/z0/x/x33.js:catalog-row:099";
const x33_100 = "src/z0/x/x33.js:catalog-row:100";
const x33_101 = "src/z0/x/x33.js:catalog-row:101";
const x33_102 = "src/z0/x/x33.js:catalog-row:102";
const x33_103 = "src/z0/x/x33.js:catalog-row:103";
const x33_104 = "src/z0/x/x33.js:catalog-row:104";
const x33_105 = "src/z0/x/x33.js:catalog-row:105";
const x33_106 = "src/z0/x/x33.js:catalog-row:106";
const x33_107 = "src/z0/x/x33.js:catalog-row:107";
const x33_108 = "src/z0/x/x33.js:catalog-row:108";
const x33_109 = "src/z0/x/x33.js:catalog-row:109";
const x33_110 = "src/z0/x/x33.js:catalog-row:110";
const x33_111 = "src/z0/x/x33.js:catalog-row:111";
const x33_112 = "src/z0/x/x33.js:catalog-row:112";
const x33_113 = "src/z0/x/x33.js:catalog-row:113";
const x33_114 = "src/z0/x/x33.js:catalog-row:114";
const x33_115 = "src/z0/x/x33.js:catalog-row:115";
const x33_116 = "src/z0/x/x33.js:catalog-row:116";
const x33_117 = "src/z0/x/x33.js:catalog-row:117";
const x33_118 = "src/z0/x/x33.js:catalog-row:118";
const x33_119 = "src/z0/x/x33.js:catalog-row:119";
const x33_120 = "src/z0/x/x33.js:catalog-row:120";
const x33_121 = "src/z0/x/x33.js:catalog-row:121";
const x33_122 = "src/z0/x/x33.js:catalog-row:122";
const x33_123 = "src/z0/x/x33.js:catalog-row:123";
const x33_124 = "src/z0/x/x33.js:catalog-row:124";
const x33_125 = "src/z0/x/x33.js:catalog-row:125";
const x33_126 = "src/z0/x/x33.js:catalog-row:126";
const x33_127 = "src/z0/x/x33.js:catalog-row:127";
const x33_128 = "src/z0/x/x33.js:catalog-row:128";
const x33_129 = "src/z0/x/x33.js:catalog-row:129";
const x33_130 = "src/z0/x/x33.js:catalog-row:130";
const x33_131 = "src/z0/x/x33.js:catalog-row:131";
const x33_132 = "src/z0/x/x33.js:catalog-row:132";
const x33_133 = "src/z0/x/x33.js:catalog-row:133";
const x33_134 = "src/z0/x/x33.js:catalog-row:134";
const x33_135 = "src/z0/x/x33.js:catalog-row:135";
const x33_136 = "src/z0/x/x33.js:catalog-row:136";
