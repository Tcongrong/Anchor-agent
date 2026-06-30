import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 19,
  salt: "d:19:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 8,
  mask: 2971870260,
  branch: 8
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
  const tail = ((cfg.slot + (ctx.index || 0) + 19) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [1, 4],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 120,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x19_0 = "src/z0/x/x19.js:catalog-row:000";
const x19_1 = "src/z0/x/x19.js:catalog-row:001";
const x19_2 = "src/z0/x/x19.js:catalog-row:002";
const x19_3 = "src/z0/x/x19.js:catalog-row:003";
const x19_4 = "src/z0/x/x19.js:catalog-row:004";
const x19_5 = "src/z0/x/x19.js:catalog-row:005";
const x19_6 = "src/z0/x/x19.js:catalog-row:006";
const x19_7 = "src/z0/x/x19.js:catalog-row:007";
const x19_8 = "src/z0/x/x19.js:catalog-row:008";
const x19_9 = "src/z0/x/x19.js:catalog-row:009";
const x19_10 = "src/z0/x/x19.js:catalog-row:010";
const x19_11 = "src/z0/x/x19.js:catalog-row:011";
const x19_12 = "src/z0/x/x19.js:catalog-row:012";
const x19_13 = "src/z0/x/x19.js:catalog-row:013";
const x19_14 = "src/z0/x/x19.js:catalog-row:014";
const x19_15 = "src/z0/x/x19.js:catalog-row:015";
const x19_16 = "src/z0/x/x19.js:catalog-row:016";
const x19_17 = "src/z0/x/x19.js:catalog-row:017";
const x19_18 = "src/z0/x/x19.js:catalog-row:018";
const x19_19 = "src/z0/x/x19.js:catalog-row:019";
const x19_20 = "src/z0/x/x19.js:catalog-row:020";
const x19_21 = "src/z0/x/x19.js:catalog-row:021";
const x19_22 = "src/z0/x/x19.js:catalog-row:022";
const x19_23 = "src/z0/x/x19.js:catalog-row:023";
const x19_24 = "src/z0/x/x19.js:catalog-row:024";
const x19_25 = "src/z0/x/x19.js:catalog-row:025";
const x19_26 = "src/z0/x/x19.js:catalog-row:026";
const x19_27 = "src/z0/x/x19.js:catalog-row:027";
const x19_28 = "src/z0/x/x19.js:catalog-row:028";
const x19_29 = "src/z0/x/x19.js:catalog-row:029";
const x19_30 = "src/z0/x/x19.js:catalog-row:030";
const x19_31 = "src/z0/x/x19.js:catalog-row:031";
const x19_32 = "src/z0/x/x19.js:catalog-row:032";
const x19_33 = "src/z0/x/x19.js:catalog-row:033";
const x19_34 = "src/z0/x/x19.js:catalog-row:034";
const x19_35 = "src/z0/x/x19.js:catalog-row:035";
const x19_36 = "src/z0/x/x19.js:catalog-row:036";
const x19_37 = "src/z0/x/x19.js:catalog-row:037";
const x19_38 = "src/z0/x/x19.js:catalog-row:038";
const x19_39 = "src/z0/x/x19.js:catalog-row:039";
const x19_40 = "src/z0/x/x19.js:catalog-row:040";
const x19_41 = "src/z0/x/x19.js:catalog-row:041";
const x19_42 = "src/z0/x/x19.js:catalog-row:042";
const x19_43 = "src/z0/x/x19.js:catalog-row:043";
const x19_44 = "src/z0/x/x19.js:catalog-row:044";
const x19_45 = "src/z0/x/x19.js:catalog-row:045";
const x19_46 = "src/z0/x/x19.js:catalog-row:046";
const x19_47 = "src/z0/x/x19.js:catalog-row:047";
const x19_48 = "src/z0/x/x19.js:catalog-row:048";
const x19_49 = "src/z0/x/x19.js:catalog-row:049";
const x19_50 = "src/z0/x/x19.js:catalog-row:050";
const x19_51 = "src/z0/x/x19.js:catalog-row:051";
const x19_52 = "src/z0/x/x19.js:catalog-row:052";
const x19_53 = "src/z0/x/x19.js:catalog-row:053";
const x19_54 = "src/z0/x/x19.js:catalog-row:054";
const x19_55 = "src/z0/x/x19.js:catalog-row:055";
const x19_56 = "src/z0/x/x19.js:catalog-row:056";
const x19_57 = "src/z0/x/x19.js:catalog-row:057";
const x19_58 = "src/z0/x/x19.js:catalog-row:058";
const x19_59 = "src/z0/x/x19.js:catalog-row:059";
const x19_60 = "src/z0/x/x19.js:catalog-row:060";
const x19_61 = "src/z0/x/x19.js:catalog-row:061";
const x19_62 = "src/z0/x/x19.js:catalog-row:062";
const x19_63 = "src/z0/x/x19.js:catalog-row:063";
const x19_64 = "src/z0/x/x19.js:catalog-row:064";
const x19_65 = "src/z0/x/x19.js:catalog-row:065";
const x19_66 = "src/z0/x/x19.js:catalog-row:066";
const x19_67 = "src/z0/x/x19.js:catalog-row:067";
const x19_68 = "src/z0/x/x19.js:catalog-row:068";
const x19_69 = "src/z0/x/x19.js:catalog-row:069";
const x19_70 = "src/z0/x/x19.js:catalog-row:070";
const x19_71 = "src/z0/x/x19.js:catalog-row:071";
const x19_72 = "src/z0/x/x19.js:catalog-row:072";
const x19_73 = "src/z0/x/x19.js:catalog-row:073";
const x19_74 = "src/z0/x/x19.js:catalog-row:074";
const x19_75 = "src/z0/x/x19.js:catalog-row:075";
const x19_76 = "src/z0/x/x19.js:catalog-row:076";
const x19_77 = "src/z0/x/x19.js:catalog-row:077";
const x19_78 = "src/z0/x/x19.js:catalog-row:078";
const x19_79 = "src/z0/x/x19.js:catalog-row:079";
const x19_80 = "src/z0/x/x19.js:catalog-row:080";
const x19_81 = "src/z0/x/x19.js:catalog-row:081";
const x19_82 = "src/z0/x/x19.js:catalog-row:082";
const x19_83 = "src/z0/x/x19.js:catalog-row:083";
const x19_84 = "src/z0/x/x19.js:catalog-row:084";
const x19_85 = "src/z0/x/x19.js:catalog-row:085";
const x19_86 = "src/z0/x/x19.js:catalog-row:086";
const x19_87 = "src/z0/x/x19.js:catalog-row:087";
const x19_88 = "src/z0/x/x19.js:catalog-row:088";
const x19_89 = "src/z0/x/x19.js:catalog-row:089";
const x19_90 = "src/z0/x/x19.js:catalog-row:090";
const x19_91 = "src/z0/x/x19.js:catalog-row:091";
const x19_92 = "src/z0/x/x19.js:catalog-row:092";
const x19_93 = "src/z0/x/x19.js:catalog-row:093";
const x19_94 = "src/z0/x/x19.js:catalog-row:094";
const x19_95 = "src/z0/x/x19.js:catalog-row:095";
const x19_96 = "src/z0/x/x19.js:catalog-row:096";
const x19_97 = "src/z0/x/x19.js:catalog-row:097";
const x19_98 = "src/z0/x/x19.js:catalog-row:098";
const x19_99 = "src/z0/x/x19.js:catalog-row:099";
const x19_100 = "src/z0/x/x19.js:catalog-row:100";
const x19_101 = "src/z0/x/x19.js:catalog-row:101";
const x19_102 = "src/z0/x/x19.js:catalog-row:102";
const x19_103 = "src/z0/x/x19.js:catalog-row:103";
const x19_104 = "src/z0/x/x19.js:catalog-row:104";
const x19_105 = "src/z0/x/x19.js:catalog-row:105";
const x19_106 = "src/z0/x/x19.js:catalog-row:106";
const x19_107 = "src/z0/x/x19.js:catalog-row:107";
const x19_108 = "src/z0/x/x19.js:catalog-row:108";
const x19_109 = "src/z0/x/x19.js:catalog-row:109";
const x19_110 = "src/z0/x/x19.js:catalog-row:110";
const x19_111 = "src/z0/x/x19.js:catalog-row:111";
const x19_112 = "src/z0/x/x19.js:catalog-row:112";
const x19_113 = "src/z0/x/x19.js:catalog-row:113";
const x19_114 = "src/z0/x/x19.js:catalog-row:114";
const x19_115 = "src/z0/x/x19.js:catalog-row:115";
const x19_116 = "src/z0/x/x19.js:catalog-row:116";
const x19_117 = "src/z0/x/x19.js:catalog-row:117";
const x19_118 = "src/z0/x/x19.js:catalog-row:118";
const x19_119 = "src/z0/x/x19.js:catalog-row:119";
const x19_120 = "src/z0/x/x19.js:catalog-row:120";
const x19_121 = "src/z0/x/x19.js:catalog-row:121";
const x19_122 = "src/z0/x/x19.js:catalog-row:122";
const x19_123 = "src/z0/x/x19.js:catalog-row:123";
const x19_124 = "src/z0/x/x19.js:catalog-row:124";
const x19_125 = "src/z0/x/x19.js:catalog-row:125";
const x19_126 = "src/z0/x/x19.js:catalog-row:126";
const x19_127 = "src/z0/x/x19.js:catalog-row:127";
const x19_128 = "src/z0/x/x19.js:catalog-row:128";
const x19_129 = "src/z0/x/x19.js:catalog-row:129";
const x19_130 = "src/z0/x/x19.js:catalog-row:130";
const x19_131 = "src/z0/x/x19.js:catalog-row:131";
const x19_132 = "src/z0/x/x19.js:catalog-row:132";
const x19_133 = "src/z0/x/x19.js:catalog-row:133";
const x19_134 = "src/z0/x/x19.js:catalog-row:134";
const x19_135 = "src/z0/x/x19.js:catalog-row:135";
const x19_136 = "src/z0/x/x19.js:catalog-row:136";
