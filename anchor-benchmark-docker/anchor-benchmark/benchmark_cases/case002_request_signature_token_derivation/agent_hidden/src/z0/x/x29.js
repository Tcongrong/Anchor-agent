import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 30,
  salt: "d:29:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 5,
  mask: 2105892559,
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
  const tail = ((cfg.slot + (ctx.index || 0) + 29) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [2, 4],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 130,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x29_0 = "viewer-pane:x29.js:000";
const x29_1 = "text-layer:x29.js:001";
const x29_2 = "outline-row:x29.js:002";
const x29_3 = "toolbar-slot:x29.js:003";
const x29_4 = "page-label:x29.js:004";
const x29_5 = "form-field:x29.js:005";
const x29_6 = "history-entry:x29.js:006";
const x29_7 = "thumbnail-item:x29.js:007";
const x29_8 = "viewer-pane:x29.js:008";
const x29_9 = "text-layer:x29.js:009";
const x29_10 = "outline-row:x29.js:010";
const x29_11 = "toolbar-slot:x29.js:011";
const x29_12 = "page-label:x29.js:012";
const x29_13 = "form-field:x29.js:013";
const x29_14 = "history-entry:x29.js:014";
const x29_15 = "thumbnail-item:x29.js:015";
const x29_16 = "viewer-pane:x29.js:016";
const x29_17 = "text-layer:x29.js:017";
const x29_18 = "outline-row:x29.js:018";
const x29_19 = "toolbar-slot:x29.js:019";
const x29_20 = "page-label:x29.js:020";
const x29_21 = "form-field:x29.js:021";
const x29_22 = "history-entry:x29.js:022";
const x29_23 = "thumbnail-item:x29.js:023";
const x29_24 = "viewer-pane:x29.js:024";
const x29_25 = "text-layer:x29.js:025";
const x29_26 = "outline-row:x29.js:026";
const x29_27 = "toolbar-slot:x29.js:027";
const x29_28 = "page-label:x29.js:028";
const x29_29 = "form-field:x29.js:029";
const x29_30 = "history-entry:x29.js:030";
const x29_31 = "thumbnail-item:x29.js:031";
const x29_32 = "viewer-pane:x29.js:032";
const x29_33 = "text-layer:x29.js:033";
const x29_34 = "outline-row:x29.js:034";
const x29_35 = "toolbar-slot:x29.js:035";
const x29_36 = "page-label:x29.js:036";
const x29_37 = "form-field:x29.js:037";
const x29_38 = "history-entry:x29.js:038";
const x29_39 = "thumbnail-item:x29.js:039";
const x29_40 = "viewer-pane:x29.js:040";
const x29_41 = "text-layer:x29.js:041";
const x29_42 = "outline-row:x29.js:042";
const x29_43 = "toolbar-slot:x29.js:043";
const x29_44 = "page-label:x29.js:044";
const x29_45 = "form-field:x29.js:045";
const x29_46 = "history-entry:x29.js:046";
const x29_47 = "thumbnail-item:x29.js:047";
const x29_48 = "viewer-pane:x29.js:048";
const x29_49 = "text-layer:x29.js:049";
const x29_50 = "outline-row:x29.js:050";
const x29_51 = "toolbar-slot:x29.js:051";
const x29_52 = "page-label:x29.js:052";
const x29_53 = "form-field:x29.js:053";
const x29_54 = "history-entry:x29.js:054";
const x29_55 = "thumbnail-item:x29.js:055";
const x29_56 = "viewer-pane:x29.js:056";
const x29_57 = "text-layer:x29.js:057";
const x29_58 = "outline-row:x29.js:058";
const x29_59 = "toolbar-slot:x29.js:059";
const x29_60 = "page-label:x29.js:060";
const x29_61 = "form-field:x29.js:061";
const x29_62 = "history-entry:x29.js:062";
const x29_63 = "thumbnail-item:x29.js:063";
const x29_64 = "viewer-pane:x29.js:064";
const x29_65 = "text-layer:x29.js:065";
const x29_66 = "outline-row:x29.js:066";
const x29_67 = "toolbar-slot:x29.js:067";
const x29_68 = "page-label:x29.js:068";
const x29_69 = "form-field:x29.js:069";
const x29_70 = "history-entry:x29.js:070";
const x29_71 = "thumbnail-item:x29.js:071";
const x29_72 = "viewer-pane:x29.js:072";
const x29_73 = "text-layer:x29.js:073";
const x29_74 = "outline-row:x29.js:074";
const x29_75 = "toolbar-slot:x29.js:075";
const x29_76 = "page-label:x29.js:076";
const x29_77 = "form-field:x29.js:077";
const x29_78 = "history-entry:x29.js:078";
const x29_79 = "thumbnail-item:x29.js:079";
const x29_80 = "viewer-pane:x29.js:080";
const x29_81 = "text-layer:x29.js:081";
const x29_82 = "outline-row:x29.js:082";
const x29_83 = "toolbar-slot:x29.js:083";
const x29_84 = "page-label:x29.js:084";
const x29_85 = "form-field:x29.js:085";
const x29_86 = "history-entry:x29.js:086";
const x29_87 = "thumbnail-item:x29.js:087";
const x29_88 = "viewer-pane:x29.js:088";
const x29_89 = "text-layer:x29.js:089";
const x29_90 = "outline-row:x29.js:090";
const x29_91 = "toolbar-slot:x29.js:091";
const x29_92 = "page-label:x29.js:092";
const x29_93 = "form-field:x29.js:093";
const x29_94 = "history-entry:x29.js:094";
const x29_95 = "thumbnail-item:x29.js:095";
const x29_96 = "viewer-pane:x29.js:096";
const x29_97 = "text-layer:x29.js:097";
const x29_98 = "outline-row:x29.js:098";
const x29_99 = "toolbar-slot:x29.js:099";
const x29_100 = "page-label:x29.js:100";
const x29_101 = "form-field:x29.js:101";
const x29_102 = "history-entry:x29.js:102";
const x29_103 = "thumbnail-item:x29.js:103";
const x29_104 = "viewer-pane:x29.js:104";
const x29_105 = "text-layer:x29.js:105";
const x29_106 = "outline-row:x29.js:106";
const x29_107 = "toolbar-slot:x29.js:107";
const x29_108 = "page-label:x29.js:108";
const x29_109 = "form-field:x29.js:109";
const x29_110 = "history-entry:x29.js:110";
const x29_111 = "thumbnail-item:x29.js:111";
const x29_112 = "viewer-pane:x29.js:112";
const x29_113 = "text-layer:x29.js:113";
const x29_114 = "outline-row:x29.js:114";
const x29_115 = "toolbar-slot:x29.js:115";
const x29_116 = "page-label:x29.js:116";
const x29_117 = "form-field:x29.js:117";
const x29_118 = "history-entry:x29.js:118";
const x29_119 = "thumbnail-item:x29.js:119";
const x29_120 = "viewer-pane:x29.js:120";
const x29_121 = "text-layer:x29.js:121";
const x29_122 = "outline-row:x29.js:122";
const x29_123 = "toolbar-slot:x29.js:123";
const x29_124 = "page-label:x29.js:124";
const x29_125 = "form-field:x29.js:125";
const x29_126 = "history-entry:x29.js:126";
const x29_127 = "thumbnail-item:x29.js:127";
const x29_128 = "viewer-pane:x29.js:128";
const x29_129 = "text-layer:x29.js:129";
const x29_130 = "outline-row:x29.js:130";
const x29_131 = "toolbar-slot:x29.js:131";
const x29_132 = "page-label:x29.js:132";
const x29_133 = "form-field:x29.js:133";
const x29_134 = "history-entry:x29.js:134";
const x29_135 = "thumbnail-item:x29.js:135";
const x29_136 = "viewer-pane:x29.js:136";
