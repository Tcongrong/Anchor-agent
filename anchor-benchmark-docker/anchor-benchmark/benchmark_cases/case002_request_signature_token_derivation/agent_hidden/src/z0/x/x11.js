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
const x11_0 = "viewer-pane:x11.js:000";
const x11_1 = "text-layer:x11.js:001";
const x11_2 = "outline-row:x11.js:002";
const x11_3 = "toolbar-slot:x11.js:003";
const x11_4 = "page-label:x11.js:004";
const x11_5 = "form-field:x11.js:005";
const x11_6 = "history-entry:x11.js:006";
const x11_7 = "thumbnail-item:x11.js:007";
const x11_8 = "viewer-pane:x11.js:008";
const x11_9 = "text-layer:x11.js:009";
const x11_10 = "outline-row:x11.js:010";
const x11_11 = "toolbar-slot:x11.js:011";
const x11_12 = "page-label:x11.js:012";
const x11_13 = "form-field:x11.js:013";
const x11_14 = "history-entry:x11.js:014";
const x11_15 = "thumbnail-item:x11.js:015";
const x11_16 = "viewer-pane:x11.js:016";
const x11_17 = "text-layer:x11.js:017";
const x11_18 = "outline-row:x11.js:018";
const x11_19 = "toolbar-slot:x11.js:019";
const x11_20 = "page-label:x11.js:020";
const x11_21 = "form-field:x11.js:021";
const x11_22 = "history-entry:x11.js:022";
const x11_23 = "thumbnail-item:x11.js:023";
const x11_24 = "viewer-pane:x11.js:024";
const x11_25 = "text-layer:x11.js:025";
const x11_26 = "outline-row:x11.js:026";
const x11_27 = "toolbar-slot:x11.js:027";
const x11_28 = "page-label:x11.js:028";
const x11_29 = "form-field:x11.js:029";
const x11_30 = "history-entry:x11.js:030";
const x11_31 = "thumbnail-item:x11.js:031";
const x11_32 = "viewer-pane:x11.js:032";
const x11_33 = "text-layer:x11.js:033";
const x11_34 = "outline-row:x11.js:034";
const x11_35 = "toolbar-slot:x11.js:035";
const x11_36 = "page-label:x11.js:036";
const x11_37 = "form-field:x11.js:037";
const x11_38 = "history-entry:x11.js:038";
const x11_39 = "thumbnail-item:x11.js:039";
const x11_40 = "viewer-pane:x11.js:040";
const x11_41 = "text-layer:x11.js:041";
const x11_42 = "outline-row:x11.js:042";
const x11_43 = "toolbar-slot:x11.js:043";
const x11_44 = "page-label:x11.js:044";
const x11_45 = "form-field:x11.js:045";
const x11_46 = "history-entry:x11.js:046";
const x11_47 = "thumbnail-item:x11.js:047";
const x11_48 = "viewer-pane:x11.js:048";
const x11_49 = "text-layer:x11.js:049";
const x11_50 = "outline-row:x11.js:050";
const x11_51 = "toolbar-slot:x11.js:051";
const x11_52 = "page-label:x11.js:052";
const x11_53 = "form-field:x11.js:053";
const x11_54 = "history-entry:x11.js:054";
const x11_55 = "thumbnail-item:x11.js:055";
const x11_56 = "viewer-pane:x11.js:056";
const x11_57 = "text-layer:x11.js:057";
const x11_58 = "outline-row:x11.js:058";
const x11_59 = "toolbar-slot:x11.js:059";
const x11_60 = "page-label:x11.js:060";
const x11_61 = "form-field:x11.js:061";
const x11_62 = "history-entry:x11.js:062";
const x11_63 = "thumbnail-item:x11.js:063";
const x11_64 = "viewer-pane:x11.js:064";
const x11_65 = "text-layer:x11.js:065";
const x11_66 = "outline-row:x11.js:066";
const x11_67 = "toolbar-slot:x11.js:067";
const x11_68 = "page-label:x11.js:068";
const x11_69 = "form-field:x11.js:069";
const x11_70 = "history-entry:x11.js:070";
const x11_71 = "thumbnail-item:x11.js:071";
const x11_72 = "viewer-pane:x11.js:072";
const x11_73 = "text-layer:x11.js:073";
const x11_74 = "outline-row:x11.js:074";
const x11_75 = "toolbar-slot:x11.js:075";
const x11_76 = "page-label:x11.js:076";
const x11_77 = "form-field:x11.js:077";
const x11_78 = "history-entry:x11.js:078";
const x11_79 = "thumbnail-item:x11.js:079";
const x11_80 = "viewer-pane:x11.js:080";
const x11_81 = "text-layer:x11.js:081";
const x11_82 = "outline-row:x11.js:082";
const x11_83 = "toolbar-slot:x11.js:083";
const x11_84 = "page-label:x11.js:084";
const x11_85 = "form-field:x11.js:085";
const x11_86 = "history-entry:x11.js:086";
const x11_87 = "thumbnail-item:x11.js:087";
const x11_88 = "viewer-pane:x11.js:088";
const x11_89 = "text-layer:x11.js:089";
const x11_90 = "outline-row:x11.js:090";
const x11_91 = "toolbar-slot:x11.js:091";
const x11_92 = "page-label:x11.js:092";
const x11_93 = "form-field:x11.js:093";
const x11_94 = "history-entry:x11.js:094";
const x11_95 = "thumbnail-item:x11.js:095";
const x11_96 = "viewer-pane:x11.js:096";
const x11_97 = "text-layer:x11.js:097";
const x11_98 = "outline-row:x11.js:098";
const x11_99 = "toolbar-slot:x11.js:099";
const x11_100 = "page-label:x11.js:100";
const x11_101 = "form-field:x11.js:101";
const x11_102 = "history-entry:x11.js:102";
const x11_103 = "thumbnail-item:x11.js:103";
const x11_104 = "viewer-pane:x11.js:104";
const x11_105 = "text-layer:x11.js:105";
const x11_106 = "outline-row:x11.js:106";
const x11_107 = "toolbar-slot:x11.js:107";
const x11_108 = "page-label:x11.js:108";
const x11_109 = "form-field:x11.js:109";
const x11_110 = "history-entry:x11.js:110";
const x11_111 = "thumbnail-item:x11.js:111";
const x11_112 = "viewer-pane:x11.js:112";
const x11_113 = "text-layer:x11.js:113";
const x11_114 = "outline-row:x11.js:114";
const x11_115 = "toolbar-slot:x11.js:115";
const x11_116 = "page-label:x11.js:116";
const x11_117 = "form-field:x11.js:117";
const x11_118 = "history-entry:x11.js:118";
const x11_119 = "thumbnail-item:x11.js:119";
const x11_120 = "viewer-pane:x11.js:120";
const x11_121 = "text-layer:x11.js:121";
const x11_122 = "outline-row:x11.js:122";
const x11_123 = "toolbar-slot:x11.js:123";
const x11_124 = "page-label:x11.js:124";
const x11_125 = "form-field:x11.js:125";
const x11_126 = "history-entry:x11.js:126";
const x11_127 = "thumbnail-item:x11.js:127";
const x11_128 = "viewer-pane:x11.js:128";
const x11_129 = "text-layer:x11.js:129";
const x11_130 = "outline-row:x11.js:130";
const x11_131 = "toolbar-slot:x11.js:131";
const x11_132 = "page-label:x11.js:132";
const x11_133 = "form-field:x11.js:133";
const x11_134 = "history-entry:x11.js:134";
const x11_135 = "thumbnail-item:x11.js:135";
const x11_136 = "viewer-pane:x11.js:136";
