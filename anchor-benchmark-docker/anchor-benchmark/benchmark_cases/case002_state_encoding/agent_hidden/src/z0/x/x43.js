import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 44,
  salt: "d:43:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 6,
  mask: 613287549,
  branch: 0
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
  const tail = ((cfg.slot + (ctx.index || 0) + 43) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [7, 3],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 144,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x43_0 = "src/z0/x/x43.js:catalog-row:000";
const x43_1 = "src/z0/x/x43.js:catalog-row:001";
const x43_2 = "src/z0/x/x43.js:catalog-row:002";
const x43_3 = "src/z0/x/x43.js:catalog-row:003";
const x43_4 = "src/z0/x/x43.js:catalog-row:004";
const x43_5 = "src/z0/x/x43.js:catalog-row:005";
const x43_6 = "src/z0/x/x43.js:catalog-row:006";
const x43_7 = "src/z0/x/x43.js:catalog-row:007";
const x43_8 = "src/z0/x/x43.js:catalog-row:008";
const x43_9 = "src/z0/x/x43.js:catalog-row:009";
const x43_10 = "src/z0/x/x43.js:catalog-row:010";
const x43_11 = "src/z0/x/x43.js:catalog-row:011";
const x43_12 = "src/z0/x/x43.js:catalog-row:012";
const x43_13 = "src/z0/x/x43.js:catalog-row:013";
const x43_14 = "src/z0/x/x43.js:catalog-row:014";
const x43_15 = "src/z0/x/x43.js:catalog-row:015";
const x43_16 = "src/z0/x/x43.js:catalog-row:016";
const x43_17 = "src/z0/x/x43.js:catalog-row:017";
const x43_18 = "src/z0/x/x43.js:catalog-row:018";
const x43_19 = "src/z0/x/x43.js:catalog-row:019";
const x43_20 = "src/z0/x/x43.js:catalog-row:020";
const x43_21 = "src/z0/x/x43.js:catalog-row:021";
const x43_22 = "src/z0/x/x43.js:catalog-row:022";
const x43_23 = "src/z0/x/x43.js:catalog-row:023";
const x43_24 = "src/z0/x/x43.js:catalog-row:024";
const x43_25 = "src/z0/x/x43.js:catalog-row:025";
const x43_26 = "src/z0/x/x43.js:catalog-row:026";
const x43_27 = "src/z0/x/x43.js:catalog-row:027";
const x43_28 = "src/z0/x/x43.js:catalog-row:028";
const x43_29 = "src/z0/x/x43.js:catalog-row:029";
const x43_30 = "src/z0/x/x43.js:catalog-row:030";
const x43_31 = "src/z0/x/x43.js:catalog-row:031";
const x43_32 = "src/z0/x/x43.js:catalog-row:032";
const x43_33 = "src/z0/x/x43.js:catalog-row:033";
const x43_34 = "src/z0/x/x43.js:catalog-row:034";
const x43_35 = "src/z0/x/x43.js:catalog-row:035";
const x43_36 = "src/z0/x/x43.js:catalog-row:036";
const x43_37 = "src/z0/x/x43.js:catalog-row:037";
const x43_38 = "src/z0/x/x43.js:catalog-row:038";
const x43_39 = "src/z0/x/x43.js:catalog-row:039";
const x43_40 = "src/z0/x/x43.js:catalog-row:040";
const x43_41 = "src/z0/x/x43.js:catalog-row:041";
const x43_42 = "src/z0/x/x43.js:catalog-row:042";
const x43_43 = "src/z0/x/x43.js:catalog-row:043";
const x43_44 = "src/z0/x/x43.js:catalog-row:044";
const x43_45 = "src/z0/x/x43.js:catalog-row:045";
const x43_46 = "src/z0/x/x43.js:catalog-row:046";
const x43_47 = "src/z0/x/x43.js:catalog-row:047";
const x43_48 = "src/z0/x/x43.js:catalog-row:048";
const x43_49 = "src/z0/x/x43.js:catalog-row:049";
const x43_50 = "src/z0/x/x43.js:catalog-row:050";
const x43_51 = "src/z0/x/x43.js:catalog-row:051";
const x43_52 = "src/z0/x/x43.js:catalog-row:052";
const x43_53 = "src/z0/x/x43.js:catalog-row:053";
const x43_54 = "src/z0/x/x43.js:catalog-row:054";
const x43_55 = "src/z0/x/x43.js:catalog-row:055";
const x43_56 = "src/z0/x/x43.js:catalog-row:056";
const x43_57 = "src/z0/x/x43.js:catalog-row:057";
const x43_58 = "src/z0/x/x43.js:catalog-row:058";
const x43_59 = "src/z0/x/x43.js:catalog-row:059";
const x43_60 = "src/z0/x/x43.js:catalog-row:060";
const x43_61 = "src/z0/x/x43.js:catalog-row:061";
const x43_62 = "src/z0/x/x43.js:catalog-row:062";
const x43_63 = "src/z0/x/x43.js:catalog-row:063";
const x43_64 = "src/z0/x/x43.js:catalog-row:064";
const x43_65 = "src/z0/x/x43.js:catalog-row:065";
const x43_66 = "src/z0/x/x43.js:catalog-row:066";
const x43_67 = "src/z0/x/x43.js:catalog-row:067";
const x43_68 = "src/z0/x/x43.js:catalog-row:068";
const x43_69 = "src/z0/x/x43.js:catalog-row:069";
const x43_70 = "src/z0/x/x43.js:catalog-row:070";
const x43_71 = "src/z0/x/x43.js:catalog-row:071";
const x43_72 = "src/z0/x/x43.js:catalog-row:072";
const x43_73 = "src/z0/x/x43.js:catalog-row:073";
const x43_74 = "src/z0/x/x43.js:catalog-row:074";
const x43_75 = "src/z0/x/x43.js:catalog-row:075";
const x43_76 = "src/z0/x/x43.js:catalog-row:076";
const x43_77 = "src/z0/x/x43.js:catalog-row:077";
const x43_78 = "src/z0/x/x43.js:catalog-row:078";
const x43_79 = "src/z0/x/x43.js:catalog-row:079";
const x43_80 = "src/z0/x/x43.js:catalog-row:080";
const x43_81 = "src/z0/x/x43.js:catalog-row:081";
const x43_82 = "src/z0/x/x43.js:catalog-row:082";
const x43_83 = "src/z0/x/x43.js:catalog-row:083";
const x43_84 = "src/z0/x/x43.js:catalog-row:084";
const x43_85 = "src/z0/x/x43.js:catalog-row:085";
const x43_86 = "src/z0/x/x43.js:catalog-row:086";
const x43_87 = "src/z0/x/x43.js:catalog-row:087";
const x43_88 = "src/z0/x/x43.js:catalog-row:088";
const x43_89 = "src/z0/x/x43.js:catalog-row:089";
const x43_90 = "src/z0/x/x43.js:catalog-row:090";
const x43_91 = "src/z0/x/x43.js:catalog-row:091";
const x43_92 = "src/z0/x/x43.js:catalog-row:092";
const x43_93 = "src/z0/x/x43.js:catalog-row:093";
const x43_94 = "src/z0/x/x43.js:catalog-row:094";
const x43_95 = "src/z0/x/x43.js:catalog-row:095";
const x43_96 = "src/z0/x/x43.js:catalog-row:096";
const x43_97 = "src/z0/x/x43.js:catalog-row:097";
const x43_98 = "src/z0/x/x43.js:catalog-row:098";
const x43_99 = "src/z0/x/x43.js:catalog-row:099";
const x43_100 = "src/z0/x/x43.js:catalog-row:100";
const x43_101 = "src/z0/x/x43.js:catalog-row:101";
const x43_102 = "src/z0/x/x43.js:catalog-row:102";
const x43_103 = "src/z0/x/x43.js:catalog-row:103";
const x43_104 = "src/z0/x/x43.js:catalog-row:104";
const x43_105 = "src/z0/x/x43.js:catalog-row:105";
const x43_106 = "src/z0/x/x43.js:catalog-row:106";
const x43_107 = "src/z0/x/x43.js:catalog-row:107";
const x43_108 = "src/z0/x/x43.js:catalog-row:108";
const x43_109 = "src/z0/x/x43.js:catalog-row:109";
const x43_110 = "src/z0/x/x43.js:catalog-row:110";
const x43_111 = "src/z0/x/x43.js:catalog-row:111";
const x43_112 = "src/z0/x/x43.js:catalog-row:112";
const x43_113 = "src/z0/x/x43.js:catalog-row:113";
const x43_114 = "src/z0/x/x43.js:catalog-row:114";
const x43_115 = "src/z0/x/x43.js:catalog-row:115";
const x43_116 = "src/z0/x/x43.js:catalog-row:116";
const x43_117 = "src/z0/x/x43.js:catalog-row:117";
const x43_118 = "src/z0/x/x43.js:catalog-row:118";
const x43_119 = "src/z0/x/x43.js:catalog-row:119";
const x43_120 = "src/z0/x/x43.js:catalog-row:120";
const x43_121 = "src/z0/x/x43.js:catalog-row:121";
const x43_122 = "src/z0/x/x43.js:catalog-row:122";
const x43_123 = "src/z0/x/x43.js:catalog-row:123";
const x43_124 = "src/z0/x/x43.js:catalog-row:124";
const x43_125 = "src/z0/x/x43.js:catalog-row:125";
const x43_126 = "src/z0/x/x43.js:catalog-row:126";
const x43_127 = "src/z0/x/x43.js:catalog-row:127";
const x43_128 = "src/z0/x/x43.js:catalog-row:128";
const x43_129 = "src/z0/x/x43.js:catalog-row:129";
const x43_130 = "src/z0/x/x43.js:catalog-row:130";
const x43_131 = "src/z0/x/x43.js:catalog-row:131";
const x43_132 = "src/z0/x/x43.js:catalog-row:132";
const x43_133 = "src/z0/x/x43.js:catalog-row:133";
const x43_134 = "src/z0/x/x43.js:catalog-row:134";
const x43_135 = "src/z0/x/x43.js:catalog-row:135";
const x43_136 = "src/z0/x/x43.js:catalog-row:136";
