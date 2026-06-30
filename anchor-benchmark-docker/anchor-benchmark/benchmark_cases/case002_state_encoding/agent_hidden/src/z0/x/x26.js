import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 27,
  salt: "d:26:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 2,
  mask: 2732519868,
  branch: 9
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
  const tail = ((cfg.slot + (ctx.index || 0) + 26) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [8, 1],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 127,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x26_0 = "src/z0/x/x26.js:catalog-row:000";
const x26_1 = "src/z0/x/x26.js:catalog-row:001";
const x26_2 = "src/z0/x/x26.js:catalog-row:002";
const x26_3 = "src/z0/x/x26.js:catalog-row:003";
const x26_4 = "src/z0/x/x26.js:catalog-row:004";
const x26_5 = "src/z0/x/x26.js:catalog-row:005";
const x26_6 = "src/z0/x/x26.js:catalog-row:006";
const x26_7 = "src/z0/x/x26.js:catalog-row:007";
const x26_8 = "src/z0/x/x26.js:catalog-row:008";
const x26_9 = "src/z0/x/x26.js:catalog-row:009";
const x26_10 = "src/z0/x/x26.js:catalog-row:010";
const x26_11 = "src/z0/x/x26.js:catalog-row:011";
const x26_12 = "src/z0/x/x26.js:catalog-row:012";
const x26_13 = "src/z0/x/x26.js:catalog-row:013";
const x26_14 = "src/z0/x/x26.js:catalog-row:014";
const x26_15 = "src/z0/x/x26.js:catalog-row:015";
const x26_16 = "src/z0/x/x26.js:catalog-row:016";
const x26_17 = "src/z0/x/x26.js:catalog-row:017";
const x26_18 = "src/z0/x/x26.js:catalog-row:018";
const x26_19 = "src/z0/x/x26.js:catalog-row:019";
const x26_20 = "src/z0/x/x26.js:catalog-row:020";
const x26_21 = "src/z0/x/x26.js:catalog-row:021";
const x26_22 = "src/z0/x/x26.js:catalog-row:022";
const x26_23 = "src/z0/x/x26.js:catalog-row:023";
const x26_24 = "src/z0/x/x26.js:catalog-row:024";
const x26_25 = "src/z0/x/x26.js:catalog-row:025";
const x26_26 = "src/z0/x/x26.js:catalog-row:026";
const x26_27 = "src/z0/x/x26.js:catalog-row:027";
const x26_28 = "src/z0/x/x26.js:catalog-row:028";
const x26_29 = "src/z0/x/x26.js:catalog-row:029";
const x26_30 = "src/z0/x/x26.js:catalog-row:030";
const x26_31 = "src/z0/x/x26.js:catalog-row:031";
const x26_32 = "src/z0/x/x26.js:catalog-row:032";
const x26_33 = "src/z0/x/x26.js:catalog-row:033";
const x26_34 = "src/z0/x/x26.js:catalog-row:034";
const x26_35 = "src/z0/x/x26.js:catalog-row:035";
const x26_36 = "src/z0/x/x26.js:catalog-row:036";
const x26_37 = "src/z0/x/x26.js:catalog-row:037";
const x26_38 = "src/z0/x/x26.js:catalog-row:038";
const x26_39 = "src/z0/x/x26.js:catalog-row:039";
const x26_40 = "src/z0/x/x26.js:catalog-row:040";
const x26_41 = "src/z0/x/x26.js:catalog-row:041";
const x26_42 = "src/z0/x/x26.js:catalog-row:042";
const x26_43 = "src/z0/x/x26.js:catalog-row:043";
const x26_44 = "src/z0/x/x26.js:catalog-row:044";
const x26_45 = "src/z0/x/x26.js:catalog-row:045";
const x26_46 = "src/z0/x/x26.js:catalog-row:046";
const x26_47 = "src/z0/x/x26.js:catalog-row:047";
const x26_48 = "src/z0/x/x26.js:catalog-row:048";
const x26_49 = "src/z0/x/x26.js:catalog-row:049";
const x26_50 = "src/z0/x/x26.js:catalog-row:050";
const x26_51 = "src/z0/x/x26.js:catalog-row:051";
const x26_52 = "src/z0/x/x26.js:catalog-row:052";
const x26_53 = "src/z0/x/x26.js:catalog-row:053";
const x26_54 = "src/z0/x/x26.js:catalog-row:054";
const x26_55 = "src/z0/x/x26.js:catalog-row:055";
const x26_56 = "src/z0/x/x26.js:catalog-row:056";
const x26_57 = "src/z0/x/x26.js:catalog-row:057";
const x26_58 = "src/z0/x/x26.js:catalog-row:058";
const x26_59 = "src/z0/x/x26.js:catalog-row:059";
const x26_60 = "src/z0/x/x26.js:catalog-row:060";
const x26_61 = "src/z0/x/x26.js:catalog-row:061";
const x26_62 = "src/z0/x/x26.js:catalog-row:062";
const x26_63 = "src/z0/x/x26.js:catalog-row:063";
const x26_64 = "src/z0/x/x26.js:catalog-row:064";
const x26_65 = "src/z0/x/x26.js:catalog-row:065";
const x26_66 = "src/z0/x/x26.js:catalog-row:066";
const x26_67 = "src/z0/x/x26.js:catalog-row:067";
const x26_68 = "src/z0/x/x26.js:catalog-row:068";
const x26_69 = "src/z0/x/x26.js:catalog-row:069";
const x26_70 = "src/z0/x/x26.js:catalog-row:070";
const x26_71 = "src/z0/x/x26.js:catalog-row:071";
const x26_72 = "src/z0/x/x26.js:catalog-row:072";
const x26_73 = "src/z0/x/x26.js:catalog-row:073";
const x26_74 = "src/z0/x/x26.js:catalog-row:074";
const x26_75 = "src/z0/x/x26.js:catalog-row:075";
const x26_76 = "src/z0/x/x26.js:catalog-row:076";
const x26_77 = "src/z0/x/x26.js:catalog-row:077";
const x26_78 = "src/z0/x/x26.js:catalog-row:078";
const x26_79 = "src/z0/x/x26.js:catalog-row:079";
const x26_80 = "src/z0/x/x26.js:catalog-row:080";
const x26_81 = "src/z0/x/x26.js:catalog-row:081";
const x26_82 = "src/z0/x/x26.js:catalog-row:082";
const x26_83 = "src/z0/x/x26.js:catalog-row:083";
const x26_84 = "src/z0/x/x26.js:catalog-row:084";
const x26_85 = "src/z0/x/x26.js:catalog-row:085";
const x26_86 = "src/z0/x/x26.js:catalog-row:086";
const x26_87 = "src/z0/x/x26.js:catalog-row:087";
const x26_88 = "src/z0/x/x26.js:catalog-row:088";
const x26_89 = "src/z0/x/x26.js:catalog-row:089";
const x26_90 = "src/z0/x/x26.js:catalog-row:090";
const x26_91 = "src/z0/x/x26.js:catalog-row:091";
const x26_92 = "src/z0/x/x26.js:catalog-row:092";
const x26_93 = "src/z0/x/x26.js:catalog-row:093";
const x26_94 = "src/z0/x/x26.js:catalog-row:094";
const x26_95 = "src/z0/x/x26.js:catalog-row:095";
const x26_96 = "src/z0/x/x26.js:catalog-row:096";
const x26_97 = "src/z0/x/x26.js:catalog-row:097";
const x26_98 = "src/z0/x/x26.js:catalog-row:098";
const x26_99 = "src/z0/x/x26.js:catalog-row:099";
const x26_100 = "src/z0/x/x26.js:catalog-row:100";
const x26_101 = "src/z0/x/x26.js:catalog-row:101";
const x26_102 = "src/z0/x/x26.js:catalog-row:102";
const x26_103 = "src/z0/x/x26.js:catalog-row:103";
const x26_104 = "src/z0/x/x26.js:catalog-row:104";
const x26_105 = "src/z0/x/x26.js:catalog-row:105";
const x26_106 = "src/z0/x/x26.js:catalog-row:106";
const x26_107 = "src/z0/x/x26.js:catalog-row:107";
const x26_108 = "src/z0/x/x26.js:catalog-row:108";
const x26_109 = "src/z0/x/x26.js:catalog-row:109";
const x26_110 = "src/z0/x/x26.js:catalog-row:110";
const x26_111 = "src/z0/x/x26.js:catalog-row:111";
const x26_112 = "src/z0/x/x26.js:catalog-row:112";
const x26_113 = "src/z0/x/x26.js:catalog-row:113";
const x26_114 = "src/z0/x/x26.js:catalog-row:114";
const x26_115 = "src/z0/x/x26.js:catalog-row:115";
const x26_116 = "src/z0/x/x26.js:catalog-row:116";
const x26_117 = "src/z0/x/x26.js:catalog-row:117";
const x26_118 = "src/z0/x/x26.js:catalog-row:118";
const x26_119 = "src/z0/x/x26.js:catalog-row:119";
const x26_120 = "src/z0/x/x26.js:catalog-row:120";
const x26_121 = "src/z0/x/x26.js:catalog-row:121";
const x26_122 = "src/z0/x/x26.js:catalog-row:122";
const x26_123 = "src/z0/x/x26.js:catalog-row:123";
const x26_124 = "src/z0/x/x26.js:catalog-row:124";
const x26_125 = "src/z0/x/x26.js:catalog-row:125";
const x26_126 = "src/z0/x/x26.js:catalog-row:126";
const x26_127 = "src/z0/x/x26.js:catalog-row:127";
const x26_128 = "src/z0/x/x26.js:catalog-row:128";
const x26_129 = "src/z0/x/x26.js:catalog-row:129";
const x26_130 = "src/z0/x/x26.js:catalog-row:130";
const x26_131 = "src/z0/x/x26.js:catalog-row:131";
const x26_132 = "src/z0/x/x26.js:catalog-row:132";
const x26_133 = "src/z0/x/x26.js:catalog-row:133";
const x26_134 = "src/z0/x/x26.js:catalog-row:134";
const x26_135 = "src/z0/x/x26.js:catalog-row:135";
const x26_136 = "src/z0/x/x26.js:catalog-row:136";
