import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 17,
  salt: "d:17:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 6,
  mask: 1957966034,
  branch: 10
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
  const tail = ((cfg.slot + (ctx.index || 0) + 17) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [8, 2],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 118,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x17_0 = "viewer-pane:x17.js:000";
const x17_1 = "text-layer:x17.js:001";
const x17_2 = "outline-row:x17.js:002";
const x17_3 = "toolbar-slot:x17.js:003";
const x17_4 = "page-label:x17.js:004";
const x17_5 = "form-field:x17.js:005";
const x17_6 = "history-entry:x17.js:006";
const x17_7 = "thumbnail-item:x17.js:007";
const x17_8 = "viewer-pane:x17.js:008";
const x17_9 = "text-layer:x17.js:009";
const x17_10 = "outline-row:x17.js:010";
const x17_11 = "toolbar-slot:x17.js:011";
const x17_12 = "page-label:x17.js:012";
const x17_13 = "form-field:x17.js:013";
const x17_14 = "history-entry:x17.js:014";
const x17_15 = "thumbnail-item:x17.js:015";
const x17_16 = "viewer-pane:x17.js:016";
const x17_17 = "text-layer:x17.js:017";
const x17_18 = "outline-row:x17.js:018";
const x17_19 = "toolbar-slot:x17.js:019";
const x17_20 = "page-label:x17.js:020";
const x17_21 = "form-field:x17.js:021";
const x17_22 = "history-entry:x17.js:022";
const x17_23 = "thumbnail-item:x17.js:023";
const x17_24 = "viewer-pane:x17.js:024";
const x17_25 = "text-layer:x17.js:025";
const x17_26 = "outline-row:x17.js:026";
const x17_27 = "toolbar-slot:x17.js:027";
const x17_28 = "page-label:x17.js:028";
const x17_29 = "form-field:x17.js:029";
const x17_30 = "history-entry:x17.js:030";
const x17_31 = "thumbnail-item:x17.js:031";
const x17_32 = "viewer-pane:x17.js:032";
const x17_33 = "text-layer:x17.js:033";
const x17_34 = "outline-row:x17.js:034";
const x17_35 = "toolbar-slot:x17.js:035";
const x17_36 = "page-label:x17.js:036";
const x17_37 = "form-field:x17.js:037";
const x17_38 = "history-entry:x17.js:038";
const x17_39 = "thumbnail-item:x17.js:039";
const x17_40 = "viewer-pane:x17.js:040";
const x17_41 = "text-layer:x17.js:041";
const x17_42 = "outline-row:x17.js:042";
const x17_43 = "toolbar-slot:x17.js:043";
const x17_44 = "page-label:x17.js:044";
const x17_45 = "form-field:x17.js:045";
const x17_46 = "history-entry:x17.js:046";
const x17_47 = "thumbnail-item:x17.js:047";
const x17_48 = "viewer-pane:x17.js:048";
const x17_49 = "text-layer:x17.js:049";
const x17_50 = "outline-row:x17.js:050";
const x17_51 = "toolbar-slot:x17.js:051";
const x17_52 = "page-label:x17.js:052";
const x17_53 = "form-field:x17.js:053";
const x17_54 = "history-entry:x17.js:054";
const x17_55 = "thumbnail-item:x17.js:055";
const x17_56 = "viewer-pane:x17.js:056";
const x17_57 = "text-layer:x17.js:057";
const x17_58 = "outline-row:x17.js:058";
const x17_59 = "toolbar-slot:x17.js:059";
const x17_60 = "page-label:x17.js:060";
const x17_61 = "form-field:x17.js:061";
const x17_62 = "history-entry:x17.js:062";
const x17_63 = "thumbnail-item:x17.js:063";
const x17_64 = "viewer-pane:x17.js:064";
const x17_65 = "text-layer:x17.js:065";
const x17_66 = "outline-row:x17.js:066";
const x17_67 = "toolbar-slot:x17.js:067";
const x17_68 = "page-label:x17.js:068";
const x17_69 = "form-field:x17.js:069";
const x17_70 = "history-entry:x17.js:070";
const x17_71 = "thumbnail-item:x17.js:071";
const x17_72 = "viewer-pane:x17.js:072";
const x17_73 = "text-layer:x17.js:073";
const x17_74 = "outline-row:x17.js:074";
const x17_75 = "toolbar-slot:x17.js:075";
const x17_76 = "page-label:x17.js:076";
const x17_77 = "form-field:x17.js:077";
const x17_78 = "history-entry:x17.js:078";
const x17_79 = "thumbnail-item:x17.js:079";
const x17_80 = "viewer-pane:x17.js:080";
const x17_81 = "text-layer:x17.js:081";
const x17_82 = "outline-row:x17.js:082";
const x17_83 = "toolbar-slot:x17.js:083";
const x17_84 = "page-label:x17.js:084";
const x17_85 = "form-field:x17.js:085";
const x17_86 = "history-entry:x17.js:086";
const x17_87 = "thumbnail-item:x17.js:087";
const x17_88 = "viewer-pane:x17.js:088";
const x17_89 = "text-layer:x17.js:089";
const x17_90 = "outline-row:x17.js:090";
const x17_91 = "toolbar-slot:x17.js:091";
const x17_92 = "page-label:x17.js:092";
const x17_93 = "form-field:x17.js:093";
const x17_94 = "history-entry:x17.js:094";
const x17_95 = "thumbnail-item:x17.js:095";
const x17_96 = "viewer-pane:x17.js:096";
const x17_97 = "text-layer:x17.js:097";
const x17_98 = "outline-row:x17.js:098";
const x17_99 = "toolbar-slot:x17.js:099";
const x17_100 = "page-label:x17.js:100";
const x17_101 = "form-field:x17.js:101";
const x17_102 = "history-entry:x17.js:102";
const x17_103 = "thumbnail-item:x17.js:103";
const x17_104 = "viewer-pane:x17.js:104";
const x17_105 = "text-layer:x17.js:105";
const x17_106 = "outline-row:x17.js:106";
const x17_107 = "toolbar-slot:x17.js:107";
const x17_108 = "page-label:x17.js:108";
const x17_109 = "form-field:x17.js:109";
const x17_110 = "history-entry:x17.js:110";
const x17_111 = "thumbnail-item:x17.js:111";
const x17_112 = "viewer-pane:x17.js:112";
const x17_113 = "text-layer:x17.js:113";
const x17_114 = "outline-row:x17.js:114";
const x17_115 = "toolbar-slot:x17.js:115";
const x17_116 = "page-label:x17.js:116";
const x17_117 = "form-field:x17.js:117";
const x17_118 = "history-entry:x17.js:118";
const x17_119 = "thumbnail-item:x17.js:119";
const x17_120 = "viewer-pane:x17.js:120";
const x17_121 = "text-layer:x17.js:121";
const x17_122 = "outline-row:x17.js:122";
const x17_123 = "toolbar-slot:x17.js:123";
const x17_124 = "page-label:x17.js:124";
const x17_125 = "form-field:x17.js:125";
const x17_126 = "history-entry:x17.js:126";
const x17_127 = "thumbnail-item:x17.js:127";
const x17_128 = "viewer-pane:x17.js:128";
const x17_129 = "text-layer:x17.js:129";
const x17_130 = "outline-row:x17.js:130";
const x17_131 = "toolbar-slot:x17.js:131";
const x17_132 = "page-label:x17.js:132";
const x17_133 = "form-field:x17.js:133";
const x17_134 = "history-entry:x17.js:134";
const x17_135 = "thumbnail-item:x17.js:135";
const x17_136 = "viewer-pane:x17.js:136";
