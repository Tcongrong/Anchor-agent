import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 29,
  salt: "d:28:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 4,
  mask: 3746424094,
  branch: 7
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
  const tail = ((cfg.slot + (ctx.index || 0) + 28) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [1, 3],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 129,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x28_0 = "src/z0/x/x28.js:catalog-row:000";
const x28_1 = "src/z0/x/x28.js:catalog-row:001";
const x28_2 = "src/z0/x/x28.js:catalog-row:002";
const x28_3 = "src/z0/x/x28.js:catalog-row:003";
const x28_4 = "src/z0/x/x28.js:catalog-row:004";
const x28_5 = "src/z0/x/x28.js:catalog-row:005";
const x28_6 = "src/z0/x/x28.js:catalog-row:006";
const x28_7 = "src/z0/x/x28.js:catalog-row:007";
const x28_8 = "src/z0/x/x28.js:catalog-row:008";
const x28_9 = "src/z0/x/x28.js:catalog-row:009";
const x28_10 = "src/z0/x/x28.js:catalog-row:010";
const x28_11 = "src/z0/x/x28.js:catalog-row:011";
const x28_12 = "src/z0/x/x28.js:catalog-row:012";
const x28_13 = "src/z0/x/x28.js:catalog-row:013";
const x28_14 = "src/z0/x/x28.js:catalog-row:014";
const x28_15 = "src/z0/x/x28.js:catalog-row:015";
const x28_16 = "src/z0/x/x28.js:catalog-row:016";
const x28_17 = "src/z0/x/x28.js:catalog-row:017";
const x28_18 = "src/z0/x/x28.js:catalog-row:018";
const x28_19 = "src/z0/x/x28.js:catalog-row:019";
const x28_20 = "src/z0/x/x28.js:catalog-row:020";
const x28_21 = "src/z0/x/x28.js:catalog-row:021";
const x28_22 = "src/z0/x/x28.js:catalog-row:022";
const x28_23 = "src/z0/x/x28.js:catalog-row:023";
const x28_24 = "src/z0/x/x28.js:catalog-row:024";
const x28_25 = "src/z0/x/x28.js:catalog-row:025";
const x28_26 = "src/z0/x/x28.js:catalog-row:026";
const x28_27 = "src/z0/x/x28.js:catalog-row:027";
const x28_28 = "src/z0/x/x28.js:catalog-row:028";
const x28_29 = "src/z0/x/x28.js:catalog-row:029";
const x28_30 = "src/z0/x/x28.js:catalog-row:030";
const x28_31 = "src/z0/x/x28.js:catalog-row:031";
const x28_32 = "src/z0/x/x28.js:catalog-row:032";
const x28_33 = "src/z0/x/x28.js:catalog-row:033";
const x28_34 = "src/z0/x/x28.js:catalog-row:034";
const x28_35 = "src/z0/x/x28.js:catalog-row:035";
const x28_36 = "src/z0/x/x28.js:catalog-row:036";
const x28_37 = "src/z0/x/x28.js:catalog-row:037";
const x28_38 = "src/z0/x/x28.js:catalog-row:038";
const x28_39 = "src/z0/x/x28.js:catalog-row:039";
const x28_40 = "src/z0/x/x28.js:catalog-row:040";
const x28_41 = "src/z0/x/x28.js:catalog-row:041";
const x28_42 = "src/z0/x/x28.js:catalog-row:042";
const x28_43 = "src/z0/x/x28.js:catalog-row:043";
const x28_44 = "src/z0/x/x28.js:catalog-row:044";
const x28_45 = "src/z0/x/x28.js:catalog-row:045";
const x28_46 = "src/z0/x/x28.js:catalog-row:046";
const x28_47 = "src/z0/x/x28.js:catalog-row:047";
const x28_48 = "src/z0/x/x28.js:catalog-row:048";
const x28_49 = "src/z0/x/x28.js:catalog-row:049";
const x28_50 = "src/z0/x/x28.js:catalog-row:050";
const x28_51 = "src/z0/x/x28.js:catalog-row:051";
const x28_52 = "src/z0/x/x28.js:catalog-row:052";
const x28_53 = "src/z0/x/x28.js:catalog-row:053";
const x28_54 = "src/z0/x/x28.js:catalog-row:054";
const x28_55 = "src/z0/x/x28.js:catalog-row:055";
const x28_56 = "src/z0/x/x28.js:catalog-row:056";
const x28_57 = "src/z0/x/x28.js:catalog-row:057";
const x28_58 = "src/z0/x/x28.js:catalog-row:058";
const x28_59 = "src/z0/x/x28.js:catalog-row:059";
const x28_60 = "src/z0/x/x28.js:catalog-row:060";
const x28_61 = "src/z0/x/x28.js:catalog-row:061";
const x28_62 = "src/z0/x/x28.js:catalog-row:062";
const x28_63 = "src/z0/x/x28.js:catalog-row:063";
const x28_64 = "src/z0/x/x28.js:catalog-row:064";
const x28_65 = "src/z0/x/x28.js:catalog-row:065";
const x28_66 = "src/z0/x/x28.js:catalog-row:066";
const x28_67 = "src/z0/x/x28.js:catalog-row:067";
const x28_68 = "src/z0/x/x28.js:catalog-row:068";
const x28_69 = "src/z0/x/x28.js:catalog-row:069";
const x28_70 = "src/z0/x/x28.js:catalog-row:070";
const x28_71 = "src/z0/x/x28.js:catalog-row:071";
const x28_72 = "src/z0/x/x28.js:catalog-row:072";
const x28_73 = "src/z0/x/x28.js:catalog-row:073";
const x28_74 = "src/z0/x/x28.js:catalog-row:074";
const x28_75 = "src/z0/x/x28.js:catalog-row:075";
const x28_76 = "src/z0/x/x28.js:catalog-row:076";
const x28_77 = "src/z0/x/x28.js:catalog-row:077";
const x28_78 = "src/z0/x/x28.js:catalog-row:078";
const x28_79 = "src/z0/x/x28.js:catalog-row:079";
const x28_80 = "src/z0/x/x28.js:catalog-row:080";
const x28_81 = "src/z0/x/x28.js:catalog-row:081";
const x28_82 = "src/z0/x/x28.js:catalog-row:082";
const x28_83 = "src/z0/x/x28.js:catalog-row:083";
const x28_84 = "src/z0/x/x28.js:catalog-row:084";
const x28_85 = "src/z0/x/x28.js:catalog-row:085";
const x28_86 = "src/z0/x/x28.js:catalog-row:086";
const x28_87 = "src/z0/x/x28.js:catalog-row:087";
const x28_88 = "src/z0/x/x28.js:catalog-row:088";
const x28_89 = "src/z0/x/x28.js:catalog-row:089";
const x28_90 = "src/z0/x/x28.js:catalog-row:090";
const x28_91 = "src/z0/x/x28.js:catalog-row:091";
const x28_92 = "src/z0/x/x28.js:catalog-row:092";
const x28_93 = "src/z0/x/x28.js:catalog-row:093";
const x28_94 = "src/z0/x/x28.js:catalog-row:094";
const x28_95 = "src/z0/x/x28.js:catalog-row:095";
const x28_96 = "src/z0/x/x28.js:catalog-row:096";
const x28_97 = "src/z0/x/x28.js:catalog-row:097";
const x28_98 = "src/z0/x/x28.js:catalog-row:098";
const x28_99 = "src/z0/x/x28.js:catalog-row:099";
const x28_100 = "src/z0/x/x28.js:catalog-row:100";
const x28_101 = "src/z0/x/x28.js:catalog-row:101";
const x28_102 = "src/z0/x/x28.js:catalog-row:102";
const x28_103 = "src/z0/x/x28.js:catalog-row:103";
const x28_104 = "src/z0/x/x28.js:catalog-row:104";
const x28_105 = "src/z0/x/x28.js:catalog-row:105";
const x28_106 = "src/z0/x/x28.js:catalog-row:106";
const x28_107 = "src/z0/x/x28.js:catalog-row:107";
const x28_108 = "src/z0/x/x28.js:catalog-row:108";
const x28_109 = "src/z0/x/x28.js:catalog-row:109";
const x28_110 = "src/z0/x/x28.js:catalog-row:110";
const x28_111 = "src/z0/x/x28.js:catalog-row:111";
const x28_112 = "src/z0/x/x28.js:catalog-row:112";
const x28_113 = "src/z0/x/x28.js:catalog-row:113";
const x28_114 = "src/z0/x/x28.js:catalog-row:114";
const x28_115 = "src/z0/x/x28.js:catalog-row:115";
const x28_116 = "src/z0/x/x28.js:catalog-row:116";
const x28_117 = "src/z0/x/x28.js:catalog-row:117";
const x28_118 = "src/z0/x/x28.js:catalog-row:118";
const x28_119 = "src/z0/x/x28.js:catalog-row:119";
const x28_120 = "src/z0/x/x28.js:catalog-row:120";
const x28_121 = "src/z0/x/x28.js:catalog-row:121";
const x28_122 = "src/z0/x/x28.js:catalog-row:122";
const x28_123 = "src/z0/x/x28.js:catalog-row:123";
const x28_124 = "src/z0/x/x28.js:catalog-row:124";
const x28_125 = "src/z0/x/x28.js:catalog-row:125";
const x28_126 = "src/z0/x/x28.js:catalog-row:126";
const x28_127 = "src/z0/x/x28.js:catalog-row:127";
const x28_128 = "src/z0/x/x28.js:catalog-row:128";
const x28_129 = "src/z0/x/x28.js:catalog-row:129";
const x28_130 = "src/z0/x/x28.js:catalog-row:130";
const x28_131 = "src/z0/x/x28.js:catalog-row:131";
const x28_132 = "src/z0/x/x28.js:catalog-row:132";
const x28_133 = "src/z0/x/x28.js:catalog-row:133";
const x28_134 = "src/z0/x/x28.js:catalog-row:134";
const x28_135 = "src/z0/x/x28.js:catalog-row:135";
const x28_136 = "src/z0/x/x28.js:catalog-row:136";
