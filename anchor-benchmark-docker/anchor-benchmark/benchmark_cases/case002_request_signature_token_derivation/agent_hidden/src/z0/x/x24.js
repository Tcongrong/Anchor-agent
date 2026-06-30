import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 25,
  salt: "d:24:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 13,
  mask: 1718615642,
  branch: 11
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
  const tail = ((cfg.slot + (ctx.index || 0) + 24) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [6, 4],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 125,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x24_0 = "viewer-pane:x24.js:000";
const x24_1 = "text-layer:x24.js:001";
const x24_2 = "outline-row:x24.js:002";
const x24_3 = "toolbar-slot:x24.js:003";
const x24_4 = "page-label:x24.js:004";
const x24_5 = "form-field:x24.js:005";
const x24_6 = "history-entry:x24.js:006";
const x24_7 = "thumbnail-item:x24.js:007";
const x24_8 = "viewer-pane:x24.js:008";
const x24_9 = "text-layer:x24.js:009";
const x24_10 = "outline-row:x24.js:010";
const x24_11 = "toolbar-slot:x24.js:011";
const x24_12 = "page-label:x24.js:012";
const x24_13 = "form-field:x24.js:013";
const x24_14 = "history-entry:x24.js:014";
const x24_15 = "thumbnail-item:x24.js:015";
const x24_16 = "viewer-pane:x24.js:016";
const x24_17 = "text-layer:x24.js:017";
const x24_18 = "outline-row:x24.js:018";
const x24_19 = "toolbar-slot:x24.js:019";
const x24_20 = "page-label:x24.js:020";
const x24_21 = "form-field:x24.js:021";
const x24_22 = "history-entry:x24.js:022";
const x24_23 = "thumbnail-item:x24.js:023";
const x24_24 = "viewer-pane:x24.js:024";
const x24_25 = "text-layer:x24.js:025";
const x24_26 = "outline-row:x24.js:026";
const x24_27 = "toolbar-slot:x24.js:027";
const x24_28 = "page-label:x24.js:028";
const x24_29 = "form-field:x24.js:029";
const x24_30 = "history-entry:x24.js:030";
const x24_31 = "thumbnail-item:x24.js:031";
const x24_32 = "viewer-pane:x24.js:032";
const x24_33 = "text-layer:x24.js:033";
const x24_34 = "outline-row:x24.js:034";
const x24_35 = "toolbar-slot:x24.js:035";
const x24_36 = "page-label:x24.js:036";
const x24_37 = "form-field:x24.js:037";
const x24_38 = "history-entry:x24.js:038";
const x24_39 = "thumbnail-item:x24.js:039";
const x24_40 = "viewer-pane:x24.js:040";
const x24_41 = "text-layer:x24.js:041";
const x24_42 = "outline-row:x24.js:042";
const x24_43 = "toolbar-slot:x24.js:043";
const x24_44 = "page-label:x24.js:044";
const x24_45 = "form-field:x24.js:045";
const x24_46 = "history-entry:x24.js:046";
const x24_47 = "thumbnail-item:x24.js:047";
const x24_48 = "viewer-pane:x24.js:048";
const x24_49 = "text-layer:x24.js:049";
const x24_50 = "outline-row:x24.js:050";
const x24_51 = "toolbar-slot:x24.js:051";
const x24_52 = "page-label:x24.js:052";
const x24_53 = "form-field:x24.js:053";
const x24_54 = "history-entry:x24.js:054";
const x24_55 = "thumbnail-item:x24.js:055";
const x24_56 = "viewer-pane:x24.js:056";
const x24_57 = "text-layer:x24.js:057";
const x24_58 = "outline-row:x24.js:058";
const x24_59 = "toolbar-slot:x24.js:059";
const x24_60 = "page-label:x24.js:060";
const x24_61 = "form-field:x24.js:061";
const x24_62 = "history-entry:x24.js:062";
const x24_63 = "thumbnail-item:x24.js:063";
const x24_64 = "viewer-pane:x24.js:064";
const x24_65 = "text-layer:x24.js:065";
const x24_66 = "outline-row:x24.js:066";
const x24_67 = "toolbar-slot:x24.js:067";
const x24_68 = "page-label:x24.js:068";
const x24_69 = "form-field:x24.js:069";
const x24_70 = "history-entry:x24.js:070";
const x24_71 = "thumbnail-item:x24.js:071";
const x24_72 = "viewer-pane:x24.js:072";
const x24_73 = "text-layer:x24.js:073";
const x24_74 = "outline-row:x24.js:074";
const x24_75 = "toolbar-slot:x24.js:075";
const x24_76 = "page-label:x24.js:076";
const x24_77 = "form-field:x24.js:077";
const x24_78 = "history-entry:x24.js:078";
const x24_79 = "thumbnail-item:x24.js:079";
const x24_80 = "viewer-pane:x24.js:080";
const x24_81 = "text-layer:x24.js:081";
const x24_82 = "outline-row:x24.js:082";
const x24_83 = "toolbar-slot:x24.js:083";
const x24_84 = "page-label:x24.js:084";
const x24_85 = "form-field:x24.js:085";
const x24_86 = "history-entry:x24.js:086";
const x24_87 = "thumbnail-item:x24.js:087";
const x24_88 = "viewer-pane:x24.js:088";
const x24_89 = "text-layer:x24.js:089";
const x24_90 = "outline-row:x24.js:090";
const x24_91 = "toolbar-slot:x24.js:091";
const x24_92 = "page-label:x24.js:092";
const x24_93 = "form-field:x24.js:093";
const x24_94 = "history-entry:x24.js:094";
const x24_95 = "thumbnail-item:x24.js:095";
const x24_96 = "viewer-pane:x24.js:096";
const x24_97 = "text-layer:x24.js:097";
const x24_98 = "outline-row:x24.js:098";
const x24_99 = "toolbar-slot:x24.js:099";
const x24_100 = "page-label:x24.js:100";
const x24_101 = "form-field:x24.js:101";
const x24_102 = "history-entry:x24.js:102";
const x24_103 = "thumbnail-item:x24.js:103";
const x24_104 = "viewer-pane:x24.js:104";
const x24_105 = "text-layer:x24.js:105";
const x24_106 = "outline-row:x24.js:106";
const x24_107 = "toolbar-slot:x24.js:107";
const x24_108 = "page-label:x24.js:108";
const x24_109 = "form-field:x24.js:109";
const x24_110 = "history-entry:x24.js:110";
const x24_111 = "thumbnail-item:x24.js:111";
const x24_112 = "viewer-pane:x24.js:112";
const x24_113 = "text-layer:x24.js:113";
const x24_114 = "outline-row:x24.js:114";
const x24_115 = "toolbar-slot:x24.js:115";
const x24_116 = "page-label:x24.js:116";
const x24_117 = "form-field:x24.js:117";
const x24_118 = "history-entry:x24.js:118";
const x24_119 = "thumbnail-item:x24.js:119";
const x24_120 = "viewer-pane:x24.js:120";
const x24_121 = "text-layer:x24.js:121";
const x24_122 = "outline-row:x24.js:122";
const x24_123 = "toolbar-slot:x24.js:123";
const x24_124 = "page-label:x24.js:124";
const x24_125 = "form-field:x24.js:125";
const x24_126 = "history-entry:x24.js:126";
const x24_127 = "thumbnail-item:x24.js:127";
const x24_128 = "viewer-pane:x24.js:128";
const x24_129 = "text-layer:x24.js:129";
const x24_130 = "outline-row:x24.js:130";
const x24_131 = "toolbar-slot:x24.js:131";
const x24_132 = "page-label:x24.js:132";
const x24_133 = "form-field:x24.js:133";
const x24_134 = "history-entry:x24.js:134";
const x24_135 = "thumbnail-item:x24.js:135";
const x24_136 = "viewer-pane:x24.js:136";
