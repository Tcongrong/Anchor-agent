import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 2,
  salt: "d:02:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 4,
  mask: 796135283,
  branch: 1
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
  const tail = ((cfg.slot + (ctx.index || 0) + 2) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [2, 2],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 103,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x02_0 = "src/z0/x/x02.js:catalog-row:000";
const x02_1 = "src/z0/x/x02.js:catalog-row:001";
const x02_2 = "src/z0/x/x02.js:catalog-row:002";
const x02_3 = "src/z0/x/x02.js:catalog-row:003";
const x02_4 = "src/z0/x/x02.js:catalog-row:004";
const x02_5 = "src/z0/x/x02.js:catalog-row:005";
const x02_6 = "src/z0/x/x02.js:catalog-row:006";
const x02_7 = "src/z0/x/x02.js:catalog-row:007";
const x02_8 = "src/z0/x/x02.js:catalog-row:008";
const x02_9 = "src/z0/x/x02.js:catalog-row:009";
const x02_10 = "src/z0/x/x02.js:catalog-row:010";
const x02_11 = "src/z0/x/x02.js:catalog-row:011";
const x02_12 = "src/z0/x/x02.js:catalog-row:012";
const x02_13 = "src/z0/x/x02.js:catalog-row:013";
const x02_14 = "src/z0/x/x02.js:catalog-row:014";
const x02_15 = "src/z0/x/x02.js:catalog-row:015";
const x02_16 = "src/z0/x/x02.js:catalog-row:016";
const x02_17 = "src/z0/x/x02.js:catalog-row:017";
const x02_18 = "src/z0/x/x02.js:catalog-row:018";
const x02_19 = "src/z0/x/x02.js:catalog-row:019";
const x02_20 = "src/z0/x/x02.js:catalog-row:020";
const x02_21 = "src/z0/x/x02.js:catalog-row:021";
const x02_22 = "src/z0/x/x02.js:catalog-row:022";
const x02_23 = "src/z0/x/x02.js:catalog-row:023";
const x02_24 = "src/z0/x/x02.js:catalog-row:024";
const x02_25 = "src/z0/x/x02.js:catalog-row:025";
const x02_26 = "src/z0/x/x02.js:catalog-row:026";
const x02_27 = "src/z0/x/x02.js:catalog-row:027";
const x02_28 = "src/z0/x/x02.js:catalog-row:028";
const x02_29 = "src/z0/x/x02.js:catalog-row:029";
const x02_30 = "src/z0/x/x02.js:catalog-row:030";
const x02_31 = "src/z0/x/x02.js:catalog-row:031";
const x02_32 = "src/z0/x/x02.js:catalog-row:032";
const x02_33 = "src/z0/x/x02.js:catalog-row:033";
const x02_34 = "src/z0/x/x02.js:catalog-row:034";
const x02_35 = "src/z0/x/x02.js:catalog-row:035";
const x02_36 = "src/z0/x/x02.js:catalog-row:036";
const x02_37 = "src/z0/x/x02.js:catalog-row:037";
const x02_38 = "src/z0/x/x02.js:catalog-row:038";
const x02_39 = "src/z0/x/x02.js:catalog-row:039";
const x02_40 = "src/z0/x/x02.js:catalog-row:040";
const x02_41 = "src/z0/x/x02.js:catalog-row:041";
const x02_42 = "src/z0/x/x02.js:catalog-row:042";
const x02_43 = "src/z0/x/x02.js:catalog-row:043";
const x02_44 = "src/z0/x/x02.js:catalog-row:044";
const x02_45 = "src/z0/x/x02.js:catalog-row:045";
const x02_46 = "src/z0/x/x02.js:catalog-row:046";
const x02_47 = "src/z0/x/x02.js:catalog-row:047";
const x02_48 = "src/z0/x/x02.js:catalog-row:048";
const x02_49 = "src/z0/x/x02.js:catalog-row:049";
const x02_50 = "src/z0/x/x02.js:catalog-row:050";
const x02_51 = "src/z0/x/x02.js:catalog-row:051";
const x02_52 = "src/z0/x/x02.js:catalog-row:052";
const x02_53 = "src/z0/x/x02.js:catalog-row:053";
const x02_54 = "src/z0/x/x02.js:catalog-row:054";
const x02_55 = "src/z0/x/x02.js:catalog-row:055";
const x02_56 = "src/z0/x/x02.js:catalog-row:056";
const x02_57 = "src/z0/x/x02.js:catalog-row:057";
const x02_58 = "src/z0/x/x02.js:catalog-row:058";
const x02_59 = "src/z0/x/x02.js:catalog-row:059";
const x02_60 = "src/z0/x/x02.js:catalog-row:060";
const x02_61 = "src/z0/x/x02.js:catalog-row:061";
const x02_62 = "src/z0/x/x02.js:catalog-row:062";
const x02_63 = "src/z0/x/x02.js:catalog-row:063";
const x02_64 = "src/z0/x/x02.js:catalog-row:064";
const x02_65 = "src/z0/x/x02.js:catalog-row:065";
const x02_66 = "src/z0/x/x02.js:catalog-row:066";
const x02_67 = "src/z0/x/x02.js:catalog-row:067";
const x02_68 = "src/z0/x/x02.js:catalog-row:068";
const x02_69 = "src/z0/x/x02.js:catalog-row:069";
const x02_70 = "src/z0/x/x02.js:catalog-row:070";
const x02_71 = "src/z0/x/x02.js:catalog-row:071";
const x02_72 = "src/z0/x/x02.js:catalog-row:072";
const x02_73 = "src/z0/x/x02.js:catalog-row:073";
const x02_74 = "src/z0/x/x02.js:catalog-row:074";
const x02_75 = "src/z0/x/x02.js:catalog-row:075";
const x02_76 = "src/z0/x/x02.js:catalog-row:076";
const x02_77 = "src/z0/x/x02.js:catalog-row:077";
const x02_78 = "src/z0/x/x02.js:catalog-row:078";
const x02_79 = "src/z0/x/x02.js:catalog-row:079";
const x02_80 = "src/z0/x/x02.js:catalog-row:080";
const x02_81 = "src/z0/x/x02.js:catalog-row:081";
const x02_82 = "src/z0/x/x02.js:catalog-row:082";
const x02_83 = "src/z0/x/x02.js:catalog-row:083";
const x02_84 = "src/z0/x/x02.js:catalog-row:084";
const x02_85 = "src/z0/x/x02.js:catalog-row:085";
const x02_86 = "src/z0/x/x02.js:catalog-row:086";
const x02_87 = "src/z0/x/x02.js:catalog-row:087";
const x02_88 = "src/z0/x/x02.js:catalog-row:088";
const x02_89 = "src/z0/x/x02.js:catalog-row:089";
const x02_90 = "src/z0/x/x02.js:catalog-row:090";
const x02_91 = "src/z0/x/x02.js:catalog-row:091";
const x02_92 = "src/z0/x/x02.js:catalog-row:092";
const x02_93 = "src/z0/x/x02.js:catalog-row:093";
const x02_94 = "src/z0/x/x02.js:catalog-row:094";
const x02_95 = "src/z0/x/x02.js:catalog-row:095";
const x02_96 = "src/z0/x/x02.js:catalog-row:096";
const x02_97 = "src/z0/x/x02.js:catalog-row:097";
const x02_98 = "src/z0/x/x02.js:catalog-row:098";
const x02_99 = "src/z0/x/x02.js:catalog-row:099";
const x02_100 = "src/z0/x/x02.js:catalog-row:100";
const x02_101 = "src/z0/x/x02.js:catalog-row:101";
const x02_102 = "src/z0/x/x02.js:catalog-row:102";
const x02_103 = "src/z0/x/x02.js:catalog-row:103";
const x02_104 = "src/z0/x/x02.js:catalog-row:104";
const x02_105 = "src/z0/x/x02.js:catalog-row:105";
const x02_106 = "src/z0/x/x02.js:catalog-row:106";
const x02_107 = "src/z0/x/x02.js:catalog-row:107";
const x02_108 = "src/z0/x/x02.js:catalog-row:108";
const x02_109 = "src/z0/x/x02.js:catalog-row:109";
const x02_110 = "src/z0/x/x02.js:catalog-row:110";
const x02_111 = "src/z0/x/x02.js:catalog-row:111";
const x02_112 = "src/z0/x/x02.js:catalog-row:112";
const x02_113 = "src/z0/x/x02.js:catalog-row:113";
const x02_114 = "src/z0/x/x02.js:catalog-row:114";
const x02_115 = "src/z0/x/x02.js:catalog-row:115";
const x02_116 = "src/z0/x/x02.js:catalog-row:116";
const x02_117 = "src/z0/x/x02.js:catalog-row:117";
const x02_118 = "src/z0/x/x02.js:catalog-row:118";
const x02_119 = "src/z0/x/x02.js:catalog-row:119";
const x02_120 = "src/z0/x/x02.js:catalog-row:120";
const x02_121 = "src/z0/x/x02.js:catalog-row:121";
const x02_122 = "src/z0/x/x02.js:catalog-row:122";
const x02_123 = "src/z0/x/x02.js:catalog-row:123";
const x02_124 = "src/z0/x/x02.js:catalog-row:124";
const x02_125 = "src/z0/x/x02.js:catalog-row:125";
const x02_126 = "src/z0/x/x02.js:catalog-row:126";
const x02_127 = "src/z0/x/x02.js:catalog-row:127";
const x02_128 = "src/z0/x/x02.js:catalog-row:128";
const x02_129 = "src/z0/x/x02.js:catalog-row:129";
const x02_130 = "src/z0/x/x02.js:catalog-row:130";
const x02_131 = "src/z0/x/x02.js:catalog-row:131";
const x02_132 = "src/z0/x/x02.js:catalog-row:132";
const x02_133 = "src/z0/x/x02.js:catalog-row:133";
const x02_134 = "src/z0/x/x02.js:catalog-row:134";
const x02_135 = "src/z0/x/x02.js:catalog-row:135";
const x02_136 = "src/z0/x/x02.js:catalog-row:136";
