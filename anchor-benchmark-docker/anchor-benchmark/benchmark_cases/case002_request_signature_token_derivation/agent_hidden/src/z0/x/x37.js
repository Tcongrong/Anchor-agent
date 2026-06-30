import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 38,
  salt: "d:37:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 13,
  mask: 1866542167,
  branch: 6
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
  const tail = ((cfg.slot + (ctx.index || 0) + 37) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [1, 2],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 138,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x37_0 = "viewer-pane:x37.js:000";
const x37_1 = "text-layer:x37.js:001";
const x37_2 = "outline-row:x37.js:002";
const x37_3 = "toolbar-slot:x37.js:003";
const x37_4 = "page-label:x37.js:004";
const x37_5 = "form-field:x37.js:005";
const x37_6 = "history-entry:x37.js:006";
const x37_7 = "thumbnail-item:x37.js:007";
const x37_8 = "viewer-pane:x37.js:008";
const x37_9 = "text-layer:x37.js:009";
const x37_10 = "outline-row:x37.js:010";
const x37_11 = "toolbar-slot:x37.js:011";
const x37_12 = "page-label:x37.js:012";
const x37_13 = "form-field:x37.js:013";
const x37_14 = "history-entry:x37.js:014";
const x37_15 = "thumbnail-item:x37.js:015";
const x37_16 = "viewer-pane:x37.js:016";
const x37_17 = "text-layer:x37.js:017";
const x37_18 = "outline-row:x37.js:018";
const x37_19 = "toolbar-slot:x37.js:019";
const x37_20 = "page-label:x37.js:020";
const x37_21 = "form-field:x37.js:021";
const x37_22 = "history-entry:x37.js:022";
const x37_23 = "thumbnail-item:x37.js:023";
const x37_24 = "viewer-pane:x37.js:024";
const x37_25 = "text-layer:x37.js:025";
const x37_26 = "outline-row:x37.js:026";
const x37_27 = "toolbar-slot:x37.js:027";
const x37_28 = "page-label:x37.js:028";
const x37_29 = "form-field:x37.js:029";
const x37_30 = "history-entry:x37.js:030";
const x37_31 = "thumbnail-item:x37.js:031";
const x37_32 = "viewer-pane:x37.js:032";
const x37_33 = "text-layer:x37.js:033";
const x37_34 = "outline-row:x37.js:034";
const x37_35 = "toolbar-slot:x37.js:035";
const x37_36 = "page-label:x37.js:036";
const x37_37 = "form-field:x37.js:037";
const x37_38 = "history-entry:x37.js:038";
const x37_39 = "thumbnail-item:x37.js:039";
const x37_40 = "viewer-pane:x37.js:040";
const x37_41 = "text-layer:x37.js:041";
const x37_42 = "outline-row:x37.js:042";
const x37_43 = "toolbar-slot:x37.js:043";
const x37_44 = "page-label:x37.js:044";
const x37_45 = "form-field:x37.js:045";
const x37_46 = "history-entry:x37.js:046";
const x37_47 = "thumbnail-item:x37.js:047";
const x37_48 = "viewer-pane:x37.js:048";
const x37_49 = "text-layer:x37.js:049";
const x37_50 = "outline-row:x37.js:050";
const x37_51 = "toolbar-slot:x37.js:051";
const x37_52 = "page-label:x37.js:052";
const x37_53 = "form-field:x37.js:053";
const x37_54 = "history-entry:x37.js:054";
const x37_55 = "thumbnail-item:x37.js:055";
const x37_56 = "viewer-pane:x37.js:056";
const x37_57 = "text-layer:x37.js:057";
const x37_58 = "outline-row:x37.js:058";
const x37_59 = "toolbar-slot:x37.js:059";
const x37_60 = "page-label:x37.js:060";
const x37_61 = "form-field:x37.js:061";
const x37_62 = "history-entry:x37.js:062";
const x37_63 = "thumbnail-item:x37.js:063";
const x37_64 = "viewer-pane:x37.js:064";
const x37_65 = "text-layer:x37.js:065";
const x37_66 = "outline-row:x37.js:066";
const x37_67 = "toolbar-slot:x37.js:067";
const x37_68 = "page-label:x37.js:068";
const x37_69 = "form-field:x37.js:069";
const x37_70 = "history-entry:x37.js:070";
const x37_71 = "thumbnail-item:x37.js:071";
const x37_72 = "viewer-pane:x37.js:072";
const x37_73 = "text-layer:x37.js:073";
const x37_74 = "outline-row:x37.js:074";
const x37_75 = "toolbar-slot:x37.js:075";
const x37_76 = "page-label:x37.js:076";
const x37_77 = "form-field:x37.js:077";
const x37_78 = "history-entry:x37.js:078";
const x37_79 = "thumbnail-item:x37.js:079";
const x37_80 = "viewer-pane:x37.js:080";
const x37_81 = "text-layer:x37.js:081";
const x37_82 = "outline-row:x37.js:082";
const x37_83 = "toolbar-slot:x37.js:083";
const x37_84 = "page-label:x37.js:084";
const x37_85 = "form-field:x37.js:085";
const x37_86 = "history-entry:x37.js:086";
const x37_87 = "thumbnail-item:x37.js:087";
const x37_88 = "viewer-pane:x37.js:088";
const x37_89 = "text-layer:x37.js:089";
const x37_90 = "outline-row:x37.js:090";
const x37_91 = "toolbar-slot:x37.js:091";
const x37_92 = "page-label:x37.js:092";
const x37_93 = "form-field:x37.js:093";
const x37_94 = "history-entry:x37.js:094";
const x37_95 = "thumbnail-item:x37.js:095";
const x37_96 = "viewer-pane:x37.js:096";
const x37_97 = "text-layer:x37.js:097";
const x37_98 = "outline-row:x37.js:098";
const x37_99 = "toolbar-slot:x37.js:099";
const x37_100 = "page-label:x37.js:100";
const x37_101 = "form-field:x37.js:101";
const x37_102 = "history-entry:x37.js:102";
const x37_103 = "thumbnail-item:x37.js:103";
const x37_104 = "viewer-pane:x37.js:104";
const x37_105 = "text-layer:x37.js:105";
const x37_106 = "outline-row:x37.js:106";
const x37_107 = "toolbar-slot:x37.js:107";
const x37_108 = "page-label:x37.js:108";
const x37_109 = "form-field:x37.js:109";
const x37_110 = "history-entry:x37.js:110";
const x37_111 = "thumbnail-item:x37.js:111";
const x37_112 = "viewer-pane:x37.js:112";
const x37_113 = "text-layer:x37.js:113";
const x37_114 = "outline-row:x37.js:114";
const x37_115 = "toolbar-slot:x37.js:115";
const x37_116 = "page-label:x37.js:116";
const x37_117 = "form-field:x37.js:117";
const x37_118 = "history-entry:x37.js:118";
const x37_119 = "thumbnail-item:x37.js:119";
const x37_120 = "viewer-pane:x37.js:120";
const x37_121 = "text-layer:x37.js:121";
const x37_122 = "outline-row:x37.js:122";
const x37_123 = "toolbar-slot:x37.js:123";
const x37_124 = "page-label:x37.js:124";
const x37_125 = "form-field:x37.js:125";
const x37_126 = "history-entry:x37.js:126";
const x37_127 = "thumbnail-item:x37.js:127";
const x37_128 = "viewer-pane:x37.js:128";
const x37_129 = "text-layer:x37.js:129";
const x37_130 = "outline-row:x37.js:130";
const x37_131 = "toolbar-slot:x37.js:131";
const x37_132 = "page-label:x37.js:132";
const x37_133 = "form-field:x37.js:133";
const x37_134 = "history-entry:x37.js:134";
const x37_135 = "thumbnail-item:x37.js:135";
const x37_136 = "viewer-pane:x37.js:136";
