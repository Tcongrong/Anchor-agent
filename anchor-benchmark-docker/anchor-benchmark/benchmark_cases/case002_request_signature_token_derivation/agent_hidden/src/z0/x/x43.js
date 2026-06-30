import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 44,
  salt: "d:43:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 6,
  mask: 613287549,
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
  const tail = ((cfg.slot + (ctx.index || 0) + 43) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [7, 3],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 144,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x43_0 = "viewer-pane:x43.js:000";
const x43_1 = "text-layer:x43.js:001";
const x43_2 = "outline-row:x43.js:002";
const x43_3 = "toolbar-slot:x43.js:003";
const x43_4 = "page-label:x43.js:004";
const x43_5 = "form-field:x43.js:005";
const x43_6 = "history-entry:x43.js:006";
const x43_7 = "thumbnail-item:x43.js:007";
const x43_8 = "viewer-pane:x43.js:008";
const x43_9 = "text-layer:x43.js:009";
const x43_10 = "outline-row:x43.js:010";
const x43_11 = "toolbar-slot:x43.js:011";
const x43_12 = "page-label:x43.js:012";
const x43_13 = "form-field:x43.js:013";
const x43_14 = "history-entry:x43.js:014";
const x43_15 = "thumbnail-item:x43.js:015";
const x43_16 = "viewer-pane:x43.js:016";
const x43_17 = "text-layer:x43.js:017";
const x43_18 = "outline-row:x43.js:018";
const x43_19 = "toolbar-slot:x43.js:019";
const x43_20 = "page-label:x43.js:020";
const x43_21 = "form-field:x43.js:021";
const x43_22 = "history-entry:x43.js:022";
const x43_23 = "thumbnail-item:x43.js:023";
const x43_24 = "viewer-pane:x43.js:024";
const x43_25 = "text-layer:x43.js:025";
const x43_26 = "outline-row:x43.js:026";
const x43_27 = "toolbar-slot:x43.js:027";
const x43_28 = "page-label:x43.js:028";
const x43_29 = "form-field:x43.js:029";
const x43_30 = "history-entry:x43.js:030";
const x43_31 = "thumbnail-item:x43.js:031";
const x43_32 = "viewer-pane:x43.js:032";
const x43_33 = "text-layer:x43.js:033";
const x43_34 = "outline-row:x43.js:034";
const x43_35 = "toolbar-slot:x43.js:035";
const x43_36 = "page-label:x43.js:036";
const x43_37 = "form-field:x43.js:037";
const x43_38 = "history-entry:x43.js:038";
const x43_39 = "thumbnail-item:x43.js:039";
const x43_40 = "viewer-pane:x43.js:040";
const x43_41 = "text-layer:x43.js:041";
const x43_42 = "outline-row:x43.js:042";
const x43_43 = "toolbar-slot:x43.js:043";
const x43_44 = "page-label:x43.js:044";
const x43_45 = "form-field:x43.js:045";
const x43_46 = "history-entry:x43.js:046";
const x43_47 = "thumbnail-item:x43.js:047";
const x43_48 = "viewer-pane:x43.js:048";
const x43_49 = "text-layer:x43.js:049";
const x43_50 = "outline-row:x43.js:050";
const x43_51 = "toolbar-slot:x43.js:051";
const x43_52 = "page-label:x43.js:052";
const x43_53 = "form-field:x43.js:053";
const x43_54 = "history-entry:x43.js:054";
const x43_55 = "thumbnail-item:x43.js:055";
const x43_56 = "viewer-pane:x43.js:056";
const x43_57 = "text-layer:x43.js:057";
const x43_58 = "outline-row:x43.js:058";
const x43_59 = "toolbar-slot:x43.js:059";
const x43_60 = "page-label:x43.js:060";
const x43_61 = "form-field:x43.js:061";
const x43_62 = "history-entry:x43.js:062";
const x43_63 = "thumbnail-item:x43.js:063";
const x43_64 = "viewer-pane:x43.js:064";
const x43_65 = "text-layer:x43.js:065";
const x43_66 = "outline-row:x43.js:066";
const x43_67 = "toolbar-slot:x43.js:067";
const x43_68 = "page-label:x43.js:068";
const x43_69 = "form-field:x43.js:069";
const x43_70 = "history-entry:x43.js:070";
const x43_71 = "thumbnail-item:x43.js:071";
const x43_72 = "viewer-pane:x43.js:072";
const x43_73 = "text-layer:x43.js:073";
const x43_74 = "outline-row:x43.js:074";
const x43_75 = "toolbar-slot:x43.js:075";
const x43_76 = "page-label:x43.js:076";
const x43_77 = "form-field:x43.js:077";
const x43_78 = "history-entry:x43.js:078";
const x43_79 = "thumbnail-item:x43.js:079";
const x43_80 = "viewer-pane:x43.js:080";
const x43_81 = "text-layer:x43.js:081";
const x43_82 = "outline-row:x43.js:082";
const x43_83 = "toolbar-slot:x43.js:083";
const x43_84 = "page-label:x43.js:084";
const x43_85 = "form-field:x43.js:085";
const x43_86 = "history-entry:x43.js:086";
const x43_87 = "thumbnail-item:x43.js:087";
const x43_88 = "viewer-pane:x43.js:088";
const x43_89 = "text-layer:x43.js:089";
const x43_90 = "outline-row:x43.js:090";
const x43_91 = "toolbar-slot:x43.js:091";
const x43_92 = "page-label:x43.js:092";
const x43_93 = "form-field:x43.js:093";
const x43_94 = "history-entry:x43.js:094";
const x43_95 = "thumbnail-item:x43.js:095";
const x43_96 = "viewer-pane:x43.js:096";
const x43_97 = "text-layer:x43.js:097";
const x43_98 = "outline-row:x43.js:098";
const x43_99 = "toolbar-slot:x43.js:099";
const x43_100 = "page-label:x43.js:100";
const x43_101 = "form-field:x43.js:101";
const x43_102 = "history-entry:x43.js:102";
const x43_103 = "thumbnail-item:x43.js:103";
const x43_104 = "viewer-pane:x43.js:104";
const x43_105 = "text-layer:x43.js:105";
const x43_106 = "outline-row:x43.js:106";
const x43_107 = "toolbar-slot:x43.js:107";
const x43_108 = "page-label:x43.js:108";
const x43_109 = "form-field:x43.js:109";
const x43_110 = "history-entry:x43.js:110";
const x43_111 = "thumbnail-item:x43.js:111";
const x43_112 = "viewer-pane:x43.js:112";
const x43_113 = "text-layer:x43.js:113";
const x43_114 = "outline-row:x43.js:114";
const x43_115 = "toolbar-slot:x43.js:115";
const x43_116 = "page-label:x43.js:116";
const x43_117 = "form-field:x43.js:117";
const x43_118 = "history-entry:x43.js:118";
const x43_119 = "thumbnail-item:x43.js:119";
const x43_120 = "viewer-pane:x43.js:120";
const x43_121 = "text-layer:x43.js:121";
const x43_122 = "outline-row:x43.js:122";
const x43_123 = "toolbar-slot:x43.js:123";
const x43_124 = "page-label:x43.js:124";
const x43_125 = "form-field:x43.js:125";
const x43_126 = "history-entry:x43.js:126";
const x43_127 = "thumbnail-item:x43.js:127";
const x43_128 = "viewer-pane:x43.js:128";
const x43_129 = "text-layer:x43.js:129";
const x43_130 = "outline-row:x43.js:130";
const x43_131 = "toolbar-slot:x43.js:131";
const x43_132 = "page-label:x43.js:132";
const x43_133 = "form-field:x43.js:133";
const x43_134 = "history-entry:x43.js:134";
const x43_135 = "thumbnail-item:x43.js:135";
const x43_136 = "viewer-pane:x43.js:136";
