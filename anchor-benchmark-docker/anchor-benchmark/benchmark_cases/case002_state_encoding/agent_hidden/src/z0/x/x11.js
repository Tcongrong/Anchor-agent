import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 11,
  salt: "d:11:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 13,
  mask: 3211220652,
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
  const tail = ((cfg.slot + (ctx.index || 0) + 11) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [2, 1],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 112,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x11_0 = "src/z0/x/x11.js:catalog-row:000";
const x11_1 = "src/z0/x/x11.js:catalog-row:001";
const x11_2 = "src/z0/x/x11.js:catalog-row:002";
const x11_3 = "src/z0/x/x11.js:catalog-row:003";
const x11_4 = "src/z0/x/x11.js:catalog-row:004";
const x11_5 = "src/z0/x/x11.js:catalog-row:005";
const x11_6 = "src/z0/x/x11.js:catalog-row:006";
const x11_7 = "src/z0/x/x11.js:catalog-row:007";
const x11_8 = "src/z0/x/x11.js:catalog-row:008";
const x11_9 = "src/z0/x/x11.js:catalog-row:009";
const x11_10 = "src/z0/x/x11.js:catalog-row:010";
const x11_11 = "src/z0/x/x11.js:catalog-row:011";
const x11_12 = "src/z0/x/x11.js:catalog-row:012";
const x11_13 = "src/z0/x/x11.js:catalog-row:013";
const x11_14 = "src/z0/x/x11.js:catalog-row:014";
const x11_15 = "src/z0/x/x11.js:catalog-row:015";
const x11_16 = "src/z0/x/x11.js:catalog-row:016";
const x11_17 = "src/z0/x/x11.js:catalog-row:017";
const x11_18 = "src/z0/x/x11.js:catalog-row:018";
const x11_19 = "src/z0/x/x11.js:catalog-row:019";
const x11_20 = "src/z0/x/x11.js:catalog-row:020";
const x11_21 = "src/z0/x/x11.js:catalog-row:021";
const x11_22 = "src/z0/x/x11.js:catalog-row:022";
const x11_23 = "src/z0/x/x11.js:catalog-row:023";
const x11_24 = "src/z0/x/x11.js:catalog-row:024";
const x11_25 = "src/z0/x/x11.js:catalog-row:025";
const x11_26 = "src/z0/x/x11.js:catalog-row:026";
const x11_27 = "src/z0/x/x11.js:catalog-row:027";
const x11_28 = "src/z0/x/x11.js:catalog-row:028";
const x11_29 = "src/z0/x/x11.js:catalog-row:029";
const x11_30 = "src/z0/x/x11.js:catalog-row:030";
const x11_31 = "src/z0/x/x11.js:catalog-row:031";
const x11_32 = "src/z0/x/x11.js:catalog-row:032";
const x11_33 = "src/z0/x/x11.js:catalog-row:033";
const x11_34 = "src/z0/x/x11.js:catalog-row:034";
const x11_35 = "src/z0/x/x11.js:catalog-row:035";
const x11_36 = "src/z0/x/x11.js:catalog-row:036";
const x11_37 = "src/z0/x/x11.js:catalog-row:037";
const x11_38 = "src/z0/x/x11.js:catalog-row:038";
const x11_39 = "src/z0/x/x11.js:catalog-row:039";
const x11_40 = "src/z0/x/x11.js:catalog-row:040";
const x11_41 = "src/z0/x/x11.js:catalog-row:041";
const x11_42 = "src/z0/x/x11.js:catalog-row:042";
const x11_43 = "src/z0/x/x11.js:catalog-row:043";
const x11_44 = "src/z0/x/x11.js:catalog-row:044";
const x11_45 = "src/z0/x/x11.js:catalog-row:045";
const x11_46 = "src/z0/x/x11.js:catalog-row:046";
const x11_47 = "src/z0/x/x11.js:catalog-row:047";
const x11_48 = "src/z0/x/x11.js:catalog-row:048";
const x11_49 = "src/z0/x/x11.js:catalog-row:049";
const x11_50 = "src/z0/x/x11.js:catalog-row:050";
const x11_51 = "src/z0/x/x11.js:catalog-row:051";
const x11_52 = "src/z0/x/x11.js:catalog-row:052";
const x11_53 = "src/z0/x/x11.js:catalog-row:053";
const x11_54 = "src/z0/x/x11.js:catalog-row:054";
const x11_55 = "src/z0/x/x11.js:catalog-row:055";
const x11_56 = "src/z0/x/x11.js:catalog-row:056";
const x11_57 = "src/z0/x/x11.js:catalog-row:057";
const x11_58 = "src/z0/x/x11.js:catalog-row:058";
const x11_59 = "src/z0/x/x11.js:catalog-row:059";
const x11_60 = "src/z0/x/x11.js:catalog-row:060";
const x11_61 = "src/z0/x/x11.js:catalog-row:061";
const x11_62 = "src/z0/x/x11.js:catalog-row:062";
const x11_63 = "src/z0/x/x11.js:catalog-row:063";
const x11_64 = "src/z0/x/x11.js:catalog-row:064";
const x11_65 = "src/z0/x/x11.js:catalog-row:065";
const x11_66 = "src/z0/x/x11.js:catalog-row:066";
const x11_67 = "src/z0/x/x11.js:catalog-row:067";
const x11_68 = "src/z0/x/x11.js:catalog-row:068";
const x11_69 = "src/z0/x/x11.js:catalog-row:069";
const x11_70 = "src/z0/x/x11.js:catalog-row:070";
const x11_71 = "src/z0/x/x11.js:catalog-row:071";
const x11_72 = "src/z0/x/x11.js:catalog-row:072";
const x11_73 = "src/z0/x/x11.js:catalog-row:073";
const x11_74 = "src/z0/x/x11.js:catalog-row:074";
const x11_75 = "src/z0/x/x11.js:catalog-row:075";
const x11_76 = "src/z0/x/x11.js:catalog-row:076";
const x11_77 = "src/z0/x/x11.js:catalog-row:077";
const x11_78 = "src/z0/x/x11.js:catalog-row:078";
const x11_79 = "src/z0/x/x11.js:catalog-row:079";
const x11_80 = "src/z0/x/x11.js:catalog-row:080";
const x11_81 = "src/z0/x/x11.js:catalog-row:081";
const x11_82 = "src/z0/x/x11.js:catalog-row:082";
const x11_83 = "src/z0/x/x11.js:catalog-row:083";
const x11_84 = "src/z0/x/x11.js:catalog-row:084";
const x11_85 = "src/z0/x/x11.js:catalog-row:085";
const x11_86 = "src/z0/x/x11.js:catalog-row:086";
const x11_87 = "src/z0/x/x11.js:catalog-row:087";
const x11_88 = "src/z0/x/x11.js:catalog-row:088";
const x11_89 = "src/z0/x/x11.js:catalog-row:089";
const x11_90 = "src/z0/x/x11.js:catalog-row:090";
const x11_91 = "src/z0/x/x11.js:catalog-row:091";
const x11_92 = "src/z0/x/x11.js:catalog-row:092";
const x11_93 = "src/z0/x/x11.js:catalog-row:093";
const x11_94 = "src/z0/x/x11.js:catalog-row:094";
const x11_95 = "src/z0/x/x11.js:catalog-row:095";
const x11_96 = "src/z0/x/x11.js:catalog-row:096";
const x11_97 = "src/z0/x/x11.js:catalog-row:097";
const x11_98 = "src/z0/x/x11.js:catalog-row:098";
const x11_99 = "src/z0/x/x11.js:catalog-row:099";
const x11_100 = "src/z0/x/x11.js:catalog-row:100";
const x11_101 = "src/z0/x/x11.js:catalog-row:101";
const x11_102 = "src/z0/x/x11.js:catalog-row:102";
const x11_103 = "src/z0/x/x11.js:catalog-row:103";
const x11_104 = "src/z0/x/x11.js:catalog-row:104";
const x11_105 = "src/z0/x/x11.js:catalog-row:105";
const x11_106 = "src/z0/x/x11.js:catalog-row:106";
const x11_107 = "src/z0/x/x11.js:catalog-row:107";
const x11_108 = "src/z0/x/x11.js:catalog-row:108";
const x11_109 = "src/z0/x/x11.js:catalog-row:109";
const x11_110 = "src/z0/x/x11.js:catalog-row:110";
const x11_111 = "src/z0/x/x11.js:catalog-row:111";
const x11_112 = "src/z0/x/x11.js:catalog-row:112";
const x11_113 = "src/z0/x/x11.js:catalog-row:113";
const x11_114 = "src/z0/x/x11.js:catalog-row:114";
const x11_115 = "src/z0/x/x11.js:catalog-row:115";
const x11_116 = "src/z0/x/x11.js:catalog-row:116";
const x11_117 = "src/z0/x/x11.js:catalog-row:117";
const x11_118 = "src/z0/x/x11.js:catalog-row:118";
const x11_119 = "src/z0/x/x11.js:catalog-row:119";
const x11_120 = "src/z0/x/x11.js:catalog-row:120";
const x11_121 = "src/z0/x/x11.js:catalog-row:121";
const x11_122 = "src/z0/x/x11.js:catalog-row:122";
const x11_123 = "src/z0/x/x11.js:catalog-row:123";
const x11_124 = "src/z0/x/x11.js:catalog-row:124";
const x11_125 = "src/z0/x/x11.js:catalog-row:125";
const x11_126 = "src/z0/x/x11.js:catalog-row:126";
const x11_127 = "src/z0/x/x11.js:catalog-row:127";
const x11_128 = "src/z0/x/x11.js:catalog-row:128";
const x11_129 = "src/z0/x/x11.js:catalog-row:129";
const x11_130 = "src/z0/x/x11.js:catalog-row:130";
const x11_131 = "src/z0/x/x11.js:catalog-row:131";
const x11_132 = "src/z0/x/x11.js:catalog-row:132";
const x11_133 = "src/z0/x/x11.js:catalog-row:133";
const x11_134 = "src/z0/x/x11.js:catalog-row:134";
const x11_135 = "src/z0/x/x11.js:catalog-row:135";
const x11_136 = "src/z0/x/x11.js:catalog-row:136";
