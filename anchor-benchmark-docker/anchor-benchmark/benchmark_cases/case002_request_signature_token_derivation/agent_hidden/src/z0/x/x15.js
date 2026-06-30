import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 15,
  salt: "d:15:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 4,
  mask: 944061808,
  branch: 12
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
  const tail = ((cfg.slot + (ctx.index || 0) + 15) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [6, 0],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 116,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x15_0 = "viewer-pane:x15.js:000";
const x15_1 = "text-layer:x15.js:001";
const x15_2 = "outline-row:x15.js:002";
const x15_3 = "toolbar-slot:x15.js:003";
const x15_4 = "page-label:x15.js:004";
const x15_5 = "form-field:x15.js:005";
const x15_6 = "history-entry:x15.js:006";
const x15_7 = "thumbnail-item:x15.js:007";
const x15_8 = "viewer-pane:x15.js:008";
const x15_9 = "text-layer:x15.js:009";
const x15_10 = "outline-row:x15.js:010";
const x15_11 = "toolbar-slot:x15.js:011";
const x15_12 = "page-label:x15.js:012";
const x15_13 = "form-field:x15.js:013";
const x15_14 = "history-entry:x15.js:014";
const x15_15 = "thumbnail-item:x15.js:015";
const x15_16 = "viewer-pane:x15.js:016";
const x15_17 = "text-layer:x15.js:017";
const x15_18 = "outline-row:x15.js:018";
const x15_19 = "toolbar-slot:x15.js:019";
const x15_20 = "page-label:x15.js:020";
const x15_21 = "form-field:x15.js:021";
const x15_22 = "history-entry:x15.js:022";
const x15_23 = "thumbnail-item:x15.js:023";
const x15_24 = "viewer-pane:x15.js:024";
const x15_25 = "text-layer:x15.js:025";
const x15_26 = "outline-row:x15.js:026";
const x15_27 = "toolbar-slot:x15.js:027";
const x15_28 = "page-label:x15.js:028";
const x15_29 = "form-field:x15.js:029";
const x15_30 = "history-entry:x15.js:030";
const x15_31 = "thumbnail-item:x15.js:031";
const x15_32 = "viewer-pane:x15.js:032";
const x15_33 = "text-layer:x15.js:033";
const x15_34 = "outline-row:x15.js:034";
const x15_35 = "toolbar-slot:x15.js:035";
const x15_36 = "page-label:x15.js:036";
const x15_37 = "form-field:x15.js:037";
const x15_38 = "history-entry:x15.js:038";
const x15_39 = "thumbnail-item:x15.js:039";
const x15_40 = "viewer-pane:x15.js:040";
const x15_41 = "text-layer:x15.js:041";
const x15_42 = "outline-row:x15.js:042";
const x15_43 = "toolbar-slot:x15.js:043";
const x15_44 = "page-label:x15.js:044";
const x15_45 = "form-field:x15.js:045";
const x15_46 = "history-entry:x15.js:046";
const x15_47 = "thumbnail-item:x15.js:047";
const x15_48 = "viewer-pane:x15.js:048";
const x15_49 = "text-layer:x15.js:049";
const x15_50 = "outline-row:x15.js:050";
const x15_51 = "toolbar-slot:x15.js:051";
const x15_52 = "page-label:x15.js:052";
const x15_53 = "form-field:x15.js:053";
const x15_54 = "history-entry:x15.js:054";
const x15_55 = "thumbnail-item:x15.js:055";
const x15_56 = "viewer-pane:x15.js:056";
const x15_57 = "text-layer:x15.js:057";
const x15_58 = "outline-row:x15.js:058";
const x15_59 = "toolbar-slot:x15.js:059";
const x15_60 = "page-label:x15.js:060";
const x15_61 = "form-field:x15.js:061";
const x15_62 = "history-entry:x15.js:062";
const x15_63 = "thumbnail-item:x15.js:063";
const x15_64 = "viewer-pane:x15.js:064";
const x15_65 = "text-layer:x15.js:065";
const x15_66 = "outline-row:x15.js:066";
const x15_67 = "toolbar-slot:x15.js:067";
const x15_68 = "page-label:x15.js:068";
const x15_69 = "form-field:x15.js:069";
const x15_70 = "history-entry:x15.js:070";
const x15_71 = "thumbnail-item:x15.js:071";
const x15_72 = "viewer-pane:x15.js:072";
const x15_73 = "text-layer:x15.js:073";
const x15_74 = "outline-row:x15.js:074";
const x15_75 = "toolbar-slot:x15.js:075";
const x15_76 = "page-label:x15.js:076";
const x15_77 = "form-field:x15.js:077";
const x15_78 = "history-entry:x15.js:078";
const x15_79 = "thumbnail-item:x15.js:079";
const x15_80 = "viewer-pane:x15.js:080";
const x15_81 = "text-layer:x15.js:081";
const x15_82 = "outline-row:x15.js:082";
const x15_83 = "toolbar-slot:x15.js:083";
const x15_84 = "page-label:x15.js:084";
const x15_85 = "form-field:x15.js:085";
const x15_86 = "history-entry:x15.js:086";
const x15_87 = "thumbnail-item:x15.js:087";
const x15_88 = "viewer-pane:x15.js:088";
const x15_89 = "text-layer:x15.js:089";
const x15_90 = "outline-row:x15.js:090";
const x15_91 = "toolbar-slot:x15.js:091";
const x15_92 = "page-label:x15.js:092";
const x15_93 = "form-field:x15.js:093";
const x15_94 = "history-entry:x15.js:094";
const x15_95 = "thumbnail-item:x15.js:095";
const x15_96 = "viewer-pane:x15.js:096";
const x15_97 = "text-layer:x15.js:097";
const x15_98 = "outline-row:x15.js:098";
const x15_99 = "toolbar-slot:x15.js:099";
const x15_100 = "page-label:x15.js:100";
const x15_101 = "form-field:x15.js:101";
const x15_102 = "history-entry:x15.js:102";
const x15_103 = "thumbnail-item:x15.js:103";
const x15_104 = "viewer-pane:x15.js:104";
const x15_105 = "text-layer:x15.js:105";
const x15_106 = "outline-row:x15.js:106";
const x15_107 = "toolbar-slot:x15.js:107";
const x15_108 = "page-label:x15.js:108";
const x15_109 = "form-field:x15.js:109";
const x15_110 = "history-entry:x15.js:110";
const x15_111 = "thumbnail-item:x15.js:111";
const x15_112 = "viewer-pane:x15.js:112";
const x15_113 = "text-layer:x15.js:113";
const x15_114 = "outline-row:x15.js:114";
const x15_115 = "toolbar-slot:x15.js:115";
const x15_116 = "page-label:x15.js:116";
const x15_117 = "form-field:x15.js:117";
const x15_118 = "history-entry:x15.js:118";
const x15_119 = "thumbnail-item:x15.js:119";
const x15_120 = "viewer-pane:x15.js:120";
const x15_121 = "text-layer:x15.js:121";
const x15_122 = "outline-row:x15.js:122";
const x15_123 = "toolbar-slot:x15.js:123";
const x15_124 = "page-label:x15.js:124";
const x15_125 = "form-field:x15.js:125";
const x15_126 = "history-entry:x15.js:126";
const x15_127 = "thumbnail-item:x15.js:127";
const x15_128 = "viewer-pane:x15.js:128";
const x15_129 = "text-layer:x15.js:129";
const x15_130 = "outline-row:x15.js:130";
const x15_131 = "toolbar-slot:x15.js:131";
const x15_132 = "page-label:x15.js:132";
const x15_133 = "form-field:x15.js:133";
const x15_134 = "history-entry:x15.js:134";
const x15_135 = "thumbnail-item:x15.js:135";
const x15_136 = "viewer-pane:x15.js:136";
