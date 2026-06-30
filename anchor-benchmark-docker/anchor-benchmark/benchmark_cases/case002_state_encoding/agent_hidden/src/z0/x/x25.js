import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 26,
  salt: "d:25:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 14,
  mask: 78084107,
  branch: 2
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
  const tail = ((cfg.slot + (ctx.index || 0) + 25) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [7, 0],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 126,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x25_0 = "src/z0/x/x25.js:catalog-row:000";
const x25_1 = "src/z0/x/x25.js:catalog-row:001";
const x25_2 = "src/z0/x/x25.js:catalog-row:002";
const x25_3 = "src/z0/x/x25.js:catalog-row:003";
const x25_4 = "src/z0/x/x25.js:catalog-row:004";
const x25_5 = "src/z0/x/x25.js:catalog-row:005";
const x25_6 = "src/z0/x/x25.js:catalog-row:006";
const x25_7 = "src/z0/x/x25.js:catalog-row:007";
const x25_8 = "src/z0/x/x25.js:catalog-row:008";
const x25_9 = "src/z0/x/x25.js:catalog-row:009";
const x25_10 = "src/z0/x/x25.js:catalog-row:010";
const x25_11 = "src/z0/x/x25.js:catalog-row:011";
const x25_12 = "src/z0/x/x25.js:catalog-row:012";
const x25_13 = "src/z0/x/x25.js:catalog-row:013";
const x25_14 = "src/z0/x/x25.js:catalog-row:014";
const x25_15 = "src/z0/x/x25.js:catalog-row:015";
const x25_16 = "src/z0/x/x25.js:catalog-row:016";
const x25_17 = "src/z0/x/x25.js:catalog-row:017";
const x25_18 = "src/z0/x/x25.js:catalog-row:018";
const x25_19 = "src/z0/x/x25.js:catalog-row:019";
const x25_20 = "src/z0/x/x25.js:catalog-row:020";
const x25_21 = "src/z0/x/x25.js:catalog-row:021";
const x25_22 = "src/z0/x/x25.js:catalog-row:022";
const x25_23 = "src/z0/x/x25.js:catalog-row:023";
const x25_24 = "src/z0/x/x25.js:catalog-row:024";
const x25_25 = "src/z0/x/x25.js:catalog-row:025";
const x25_26 = "src/z0/x/x25.js:catalog-row:026";
const x25_27 = "src/z0/x/x25.js:catalog-row:027";
const x25_28 = "src/z0/x/x25.js:catalog-row:028";
const x25_29 = "src/z0/x/x25.js:catalog-row:029";
const x25_30 = "src/z0/x/x25.js:catalog-row:030";
const x25_31 = "src/z0/x/x25.js:catalog-row:031";
const x25_32 = "src/z0/x/x25.js:catalog-row:032";
const x25_33 = "src/z0/x/x25.js:catalog-row:033";
const x25_34 = "src/z0/x/x25.js:catalog-row:034";
const x25_35 = "src/z0/x/x25.js:catalog-row:035";
const x25_36 = "src/z0/x/x25.js:catalog-row:036";
const x25_37 = "src/z0/x/x25.js:catalog-row:037";
const x25_38 = "src/z0/x/x25.js:catalog-row:038";
const x25_39 = "src/z0/x/x25.js:catalog-row:039";
const x25_40 = "src/z0/x/x25.js:catalog-row:040";
const x25_41 = "src/z0/x/x25.js:catalog-row:041";
const x25_42 = "src/z0/x/x25.js:catalog-row:042";
const x25_43 = "src/z0/x/x25.js:catalog-row:043";
const x25_44 = "src/z0/x/x25.js:catalog-row:044";
const x25_45 = "src/z0/x/x25.js:catalog-row:045";
const x25_46 = "src/z0/x/x25.js:catalog-row:046";
const x25_47 = "src/z0/x/x25.js:catalog-row:047";
const x25_48 = "src/z0/x/x25.js:catalog-row:048";
const x25_49 = "src/z0/x/x25.js:catalog-row:049";
const x25_50 = "src/z0/x/x25.js:catalog-row:050";
const x25_51 = "src/z0/x/x25.js:catalog-row:051";
const x25_52 = "src/z0/x/x25.js:catalog-row:052";
const x25_53 = "src/z0/x/x25.js:catalog-row:053";
const x25_54 = "src/z0/x/x25.js:catalog-row:054";
const x25_55 = "src/z0/x/x25.js:catalog-row:055";
const x25_56 = "src/z0/x/x25.js:catalog-row:056";
const x25_57 = "src/z0/x/x25.js:catalog-row:057";
const x25_58 = "src/z0/x/x25.js:catalog-row:058";
const x25_59 = "src/z0/x/x25.js:catalog-row:059";
const x25_60 = "src/z0/x/x25.js:catalog-row:060";
const x25_61 = "src/z0/x/x25.js:catalog-row:061";
const x25_62 = "src/z0/x/x25.js:catalog-row:062";
const x25_63 = "src/z0/x/x25.js:catalog-row:063";
const x25_64 = "src/z0/x/x25.js:catalog-row:064";
const x25_65 = "src/z0/x/x25.js:catalog-row:065";
const x25_66 = "src/z0/x/x25.js:catalog-row:066";
const x25_67 = "src/z0/x/x25.js:catalog-row:067";
const x25_68 = "src/z0/x/x25.js:catalog-row:068";
const x25_69 = "src/z0/x/x25.js:catalog-row:069";
const x25_70 = "src/z0/x/x25.js:catalog-row:070";
const x25_71 = "src/z0/x/x25.js:catalog-row:071";
const x25_72 = "src/z0/x/x25.js:catalog-row:072";
const x25_73 = "src/z0/x/x25.js:catalog-row:073";
const x25_74 = "src/z0/x/x25.js:catalog-row:074";
const x25_75 = "src/z0/x/x25.js:catalog-row:075";
const x25_76 = "src/z0/x/x25.js:catalog-row:076";
const x25_77 = "src/z0/x/x25.js:catalog-row:077";
const x25_78 = "src/z0/x/x25.js:catalog-row:078";
const x25_79 = "src/z0/x/x25.js:catalog-row:079";
const x25_80 = "src/z0/x/x25.js:catalog-row:080";
const x25_81 = "src/z0/x/x25.js:catalog-row:081";
const x25_82 = "src/z0/x/x25.js:catalog-row:082";
const x25_83 = "src/z0/x/x25.js:catalog-row:083";
const x25_84 = "src/z0/x/x25.js:catalog-row:084";
const x25_85 = "src/z0/x/x25.js:catalog-row:085";
const x25_86 = "src/z0/x/x25.js:catalog-row:086";
const x25_87 = "src/z0/x/x25.js:catalog-row:087";
const x25_88 = "src/z0/x/x25.js:catalog-row:088";
const x25_89 = "src/z0/x/x25.js:catalog-row:089";
const x25_90 = "src/z0/x/x25.js:catalog-row:090";
const x25_91 = "src/z0/x/x25.js:catalog-row:091";
const x25_92 = "src/z0/x/x25.js:catalog-row:092";
const x25_93 = "src/z0/x/x25.js:catalog-row:093";
const x25_94 = "src/z0/x/x25.js:catalog-row:094";
const x25_95 = "src/z0/x/x25.js:catalog-row:095";
const x25_96 = "src/z0/x/x25.js:catalog-row:096";
const x25_97 = "src/z0/x/x25.js:catalog-row:097";
const x25_98 = "src/z0/x/x25.js:catalog-row:098";
const x25_99 = "src/z0/x/x25.js:catalog-row:099";
const x25_100 = "src/z0/x/x25.js:catalog-row:100";
const x25_101 = "src/z0/x/x25.js:catalog-row:101";
const x25_102 = "src/z0/x/x25.js:catalog-row:102";
const x25_103 = "src/z0/x/x25.js:catalog-row:103";
const x25_104 = "src/z0/x/x25.js:catalog-row:104";
const x25_105 = "src/z0/x/x25.js:catalog-row:105";
const x25_106 = "src/z0/x/x25.js:catalog-row:106";
const x25_107 = "src/z0/x/x25.js:catalog-row:107";
const x25_108 = "src/z0/x/x25.js:catalog-row:108";
const x25_109 = "src/z0/x/x25.js:catalog-row:109";
const x25_110 = "src/z0/x/x25.js:catalog-row:110";
const x25_111 = "src/z0/x/x25.js:catalog-row:111";
const x25_112 = "src/z0/x/x25.js:catalog-row:112";
const x25_113 = "src/z0/x/x25.js:catalog-row:113";
const x25_114 = "src/z0/x/x25.js:catalog-row:114";
const x25_115 = "src/z0/x/x25.js:catalog-row:115";
const x25_116 = "src/z0/x/x25.js:catalog-row:116";
const x25_117 = "src/z0/x/x25.js:catalog-row:117";
const x25_118 = "src/z0/x/x25.js:catalog-row:118";
const x25_119 = "src/z0/x/x25.js:catalog-row:119";
const x25_120 = "src/z0/x/x25.js:catalog-row:120";
const x25_121 = "src/z0/x/x25.js:catalog-row:121";
const x25_122 = "src/z0/x/x25.js:catalog-row:122";
const x25_123 = "src/z0/x/x25.js:catalog-row:123";
const x25_124 = "src/z0/x/x25.js:catalog-row:124";
const x25_125 = "src/z0/x/x25.js:catalog-row:125";
const x25_126 = "src/z0/x/x25.js:catalog-row:126";
const x25_127 = "src/z0/x/x25.js:catalog-row:127";
const x25_128 = "src/z0/x/x25.js:catalog-row:128";
const x25_129 = "src/z0/x/x25.js:catalog-row:129";
const x25_130 = "src/z0/x/x25.js:catalog-row:130";
const x25_131 = "src/z0/x/x25.js:catalog-row:131";
const x25_132 = "src/z0/x/x25.js:catalog-row:132";
const x25_133 = "src/z0/x/x25.js:catalog-row:133";
const x25_134 = "src/z0/x/x25.js:catalog-row:134";
const x25_135 = "src/z0/x/x25.js:catalog-row:135";
const x25_136 = "src/z0/x/x25.js:catalog-row:136";
