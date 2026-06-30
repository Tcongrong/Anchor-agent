import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 28,
  salt: "d:27:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 3,
  mask: 1091988333,
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
  const tail = ((cfg.slot + (ctx.index || 0) + 27) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [0, 2],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 128,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x27_0 = "viewer-pane:x27.js:000";
const x27_1 = "text-layer:x27.js:001";
const x27_2 = "outline-row:x27.js:002";
const x27_3 = "toolbar-slot:x27.js:003";
const x27_4 = "page-label:x27.js:004";
const x27_5 = "form-field:x27.js:005";
const x27_6 = "history-entry:x27.js:006";
const x27_7 = "thumbnail-item:x27.js:007";
const x27_8 = "viewer-pane:x27.js:008";
const x27_9 = "text-layer:x27.js:009";
const x27_10 = "outline-row:x27.js:010";
const x27_11 = "toolbar-slot:x27.js:011";
const x27_12 = "page-label:x27.js:012";
const x27_13 = "form-field:x27.js:013";
const x27_14 = "history-entry:x27.js:014";
const x27_15 = "thumbnail-item:x27.js:015";
const x27_16 = "viewer-pane:x27.js:016";
const x27_17 = "text-layer:x27.js:017";
const x27_18 = "outline-row:x27.js:018";
const x27_19 = "toolbar-slot:x27.js:019";
const x27_20 = "page-label:x27.js:020";
const x27_21 = "form-field:x27.js:021";
const x27_22 = "history-entry:x27.js:022";
const x27_23 = "thumbnail-item:x27.js:023";
const x27_24 = "viewer-pane:x27.js:024";
const x27_25 = "text-layer:x27.js:025";
const x27_26 = "outline-row:x27.js:026";
const x27_27 = "toolbar-slot:x27.js:027";
const x27_28 = "page-label:x27.js:028";
const x27_29 = "form-field:x27.js:029";
const x27_30 = "history-entry:x27.js:030";
const x27_31 = "thumbnail-item:x27.js:031";
const x27_32 = "viewer-pane:x27.js:032";
const x27_33 = "text-layer:x27.js:033";
const x27_34 = "outline-row:x27.js:034";
const x27_35 = "toolbar-slot:x27.js:035";
const x27_36 = "page-label:x27.js:036";
const x27_37 = "form-field:x27.js:037";
const x27_38 = "history-entry:x27.js:038";
const x27_39 = "thumbnail-item:x27.js:039";
const x27_40 = "viewer-pane:x27.js:040";
const x27_41 = "text-layer:x27.js:041";
const x27_42 = "outline-row:x27.js:042";
const x27_43 = "toolbar-slot:x27.js:043";
const x27_44 = "page-label:x27.js:044";
const x27_45 = "form-field:x27.js:045";
const x27_46 = "history-entry:x27.js:046";
const x27_47 = "thumbnail-item:x27.js:047";
const x27_48 = "viewer-pane:x27.js:048";
const x27_49 = "text-layer:x27.js:049";
const x27_50 = "outline-row:x27.js:050";
const x27_51 = "toolbar-slot:x27.js:051";
const x27_52 = "page-label:x27.js:052";
const x27_53 = "form-field:x27.js:053";
const x27_54 = "history-entry:x27.js:054";
const x27_55 = "thumbnail-item:x27.js:055";
const x27_56 = "viewer-pane:x27.js:056";
const x27_57 = "text-layer:x27.js:057";
const x27_58 = "outline-row:x27.js:058";
const x27_59 = "toolbar-slot:x27.js:059";
const x27_60 = "page-label:x27.js:060";
const x27_61 = "form-field:x27.js:061";
const x27_62 = "history-entry:x27.js:062";
const x27_63 = "thumbnail-item:x27.js:063";
const x27_64 = "viewer-pane:x27.js:064";
const x27_65 = "text-layer:x27.js:065";
const x27_66 = "outline-row:x27.js:066";
const x27_67 = "toolbar-slot:x27.js:067";
const x27_68 = "page-label:x27.js:068";
const x27_69 = "form-field:x27.js:069";
const x27_70 = "history-entry:x27.js:070";
const x27_71 = "thumbnail-item:x27.js:071";
const x27_72 = "viewer-pane:x27.js:072";
const x27_73 = "text-layer:x27.js:073";
const x27_74 = "outline-row:x27.js:074";
const x27_75 = "toolbar-slot:x27.js:075";
const x27_76 = "page-label:x27.js:076";
const x27_77 = "form-field:x27.js:077";
const x27_78 = "history-entry:x27.js:078";
const x27_79 = "thumbnail-item:x27.js:079";
const x27_80 = "viewer-pane:x27.js:080";
const x27_81 = "text-layer:x27.js:081";
const x27_82 = "outline-row:x27.js:082";
const x27_83 = "toolbar-slot:x27.js:083";
const x27_84 = "page-label:x27.js:084";
const x27_85 = "form-field:x27.js:085";
const x27_86 = "history-entry:x27.js:086";
const x27_87 = "thumbnail-item:x27.js:087";
const x27_88 = "viewer-pane:x27.js:088";
const x27_89 = "text-layer:x27.js:089";
const x27_90 = "outline-row:x27.js:090";
const x27_91 = "toolbar-slot:x27.js:091";
const x27_92 = "page-label:x27.js:092";
const x27_93 = "form-field:x27.js:093";
const x27_94 = "history-entry:x27.js:094";
const x27_95 = "thumbnail-item:x27.js:095";
const x27_96 = "viewer-pane:x27.js:096";
const x27_97 = "text-layer:x27.js:097";
const x27_98 = "outline-row:x27.js:098";
const x27_99 = "toolbar-slot:x27.js:099";
const x27_100 = "page-label:x27.js:100";
const x27_101 = "form-field:x27.js:101";
const x27_102 = "history-entry:x27.js:102";
const x27_103 = "thumbnail-item:x27.js:103";
const x27_104 = "viewer-pane:x27.js:104";
const x27_105 = "text-layer:x27.js:105";
const x27_106 = "outline-row:x27.js:106";
const x27_107 = "toolbar-slot:x27.js:107";
const x27_108 = "page-label:x27.js:108";
const x27_109 = "form-field:x27.js:109";
const x27_110 = "history-entry:x27.js:110";
const x27_111 = "thumbnail-item:x27.js:111";
const x27_112 = "viewer-pane:x27.js:112";
const x27_113 = "text-layer:x27.js:113";
const x27_114 = "outline-row:x27.js:114";
const x27_115 = "toolbar-slot:x27.js:115";
const x27_116 = "page-label:x27.js:116";
const x27_117 = "form-field:x27.js:117";
const x27_118 = "history-entry:x27.js:118";
const x27_119 = "thumbnail-item:x27.js:119";
const x27_120 = "viewer-pane:x27.js:120";
const x27_121 = "text-layer:x27.js:121";
const x27_122 = "outline-row:x27.js:122";
const x27_123 = "toolbar-slot:x27.js:123";
const x27_124 = "page-label:x27.js:124";
const x27_125 = "form-field:x27.js:125";
const x27_126 = "history-entry:x27.js:126";
const x27_127 = "thumbnail-item:x27.js:127";
const x27_128 = "viewer-pane:x27.js:128";
const x27_129 = "text-layer:x27.js:129";
const x27_130 = "outline-row:x27.js:130";
const x27_131 = "toolbar-slot:x27.js:131";
const x27_132 = "page-label:x27.js:132";
const x27_133 = "form-field:x27.js:133";
const x27_134 = "history-entry:x27.js:134";
const x27_135 = "thumbnail-item:x27.js:135";
const x27_136 = "viewer-pane:x27.js:136";
