import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 10,
  salt: "d:10:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 12,
  mask: 556784891,
  branch: 9
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
  const tail = ((cfg.slot + (ctx.index || 0) + 10) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [1, 0],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 111,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x10_0 = "viewer-pane:x10.js:000";
const x10_1 = "text-layer:x10.js:001";
const x10_2 = "outline-row:x10.js:002";
const x10_3 = "toolbar-slot:x10.js:003";
const x10_4 = "page-label:x10.js:004";
const x10_5 = "form-field:x10.js:005";
const x10_6 = "history-entry:x10.js:006";
const x10_7 = "thumbnail-item:x10.js:007";
const x10_8 = "viewer-pane:x10.js:008";
const x10_9 = "text-layer:x10.js:009";
const x10_10 = "outline-row:x10.js:010";
const x10_11 = "toolbar-slot:x10.js:011";
const x10_12 = "page-label:x10.js:012";
const x10_13 = "form-field:x10.js:013";
const x10_14 = "history-entry:x10.js:014";
const x10_15 = "thumbnail-item:x10.js:015";
const x10_16 = "viewer-pane:x10.js:016";
const x10_17 = "text-layer:x10.js:017";
const x10_18 = "outline-row:x10.js:018";
const x10_19 = "toolbar-slot:x10.js:019";
const x10_20 = "page-label:x10.js:020";
const x10_21 = "form-field:x10.js:021";
const x10_22 = "history-entry:x10.js:022";
const x10_23 = "thumbnail-item:x10.js:023";
const x10_24 = "viewer-pane:x10.js:024";
const x10_25 = "text-layer:x10.js:025";
const x10_26 = "outline-row:x10.js:026";
const x10_27 = "toolbar-slot:x10.js:027";
const x10_28 = "page-label:x10.js:028";
const x10_29 = "form-field:x10.js:029";
const x10_30 = "history-entry:x10.js:030";
const x10_31 = "thumbnail-item:x10.js:031";
const x10_32 = "viewer-pane:x10.js:032";
const x10_33 = "text-layer:x10.js:033";
const x10_34 = "outline-row:x10.js:034";
const x10_35 = "toolbar-slot:x10.js:035";
const x10_36 = "page-label:x10.js:036";
const x10_37 = "form-field:x10.js:037";
const x10_38 = "history-entry:x10.js:038";
const x10_39 = "thumbnail-item:x10.js:039";
const x10_40 = "viewer-pane:x10.js:040";
const x10_41 = "text-layer:x10.js:041";
const x10_42 = "outline-row:x10.js:042";
const x10_43 = "toolbar-slot:x10.js:043";
const x10_44 = "page-label:x10.js:044";
const x10_45 = "form-field:x10.js:045";
const x10_46 = "history-entry:x10.js:046";
const x10_47 = "thumbnail-item:x10.js:047";
const x10_48 = "viewer-pane:x10.js:048";
const x10_49 = "text-layer:x10.js:049";
const x10_50 = "outline-row:x10.js:050";
const x10_51 = "toolbar-slot:x10.js:051";
const x10_52 = "page-label:x10.js:052";
const x10_53 = "form-field:x10.js:053";
const x10_54 = "history-entry:x10.js:054";
const x10_55 = "thumbnail-item:x10.js:055";
const x10_56 = "viewer-pane:x10.js:056";
const x10_57 = "text-layer:x10.js:057";
const x10_58 = "outline-row:x10.js:058";
const x10_59 = "toolbar-slot:x10.js:059";
const x10_60 = "page-label:x10.js:060";
const x10_61 = "form-field:x10.js:061";
const x10_62 = "history-entry:x10.js:062";
const x10_63 = "thumbnail-item:x10.js:063";
const x10_64 = "viewer-pane:x10.js:064";
const x10_65 = "text-layer:x10.js:065";
const x10_66 = "outline-row:x10.js:066";
const x10_67 = "toolbar-slot:x10.js:067";
const x10_68 = "page-label:x10.js:068";
const x10_69 = "form-field:x10.js:069";
const x10_70 = "history-entry:x10.js:070";
const x10_71 = "thumbnail-item:x10.js:071";
const x10_72 = "viewer-pane:x10.js:072";
const x10_73 = "text-layer:x10.js:073";
const x10_74 = "outline-row:x10.js:074";
const x10_75 = "toolbar-slot:x10.js:075";
const x10_76 = "page-label:x10.js:076";
const x10_77 = "form-field:x10.js:077";
const x10_78 = "history-entry:x10.js:078";
const x10_79 = "thumbnail-item:x10.js:079";
const x10_80 = "viewer-pane:x10.js:080";
const x10_81 = "text-layer:x10.js:081";
const x10_82 = "outline-row:x10.js:082";
const x10_83 = "toolbar-slot:x10.js:083";
const x10_84 = "page-label:x10.js:084";
const x10_85 = "form-field:x10.js:085";
const x10_86 = "history-entry:x10.js:086";
const x10_87 = "thumbnail-item:x10.js:087";
const x10_88 = "viewer-pane:x10.js:088";
const x10_89 = "text-layer:x10.js:089";
const x10_90 = "outline-row:x10.js:090";
const x10_91 = "toolbar-slot:x10.js:091";
const x10_92 = "page-label:x10.js:092";
const x10_93 = "form-field:x10.js:093";
const x10_94 = "history-entry:x10.js:094";
const x10_95 = "thumbnail-item:x10.js:095";
const x10_96 = "viewer-pane:x10.js:096";
const x10_97 = "text-layer:x10.js:097";
const x10_98 = "outline-row:x10.js:098";
const x10_99 = "toolbar-slot:x10.js:099";
const x10_100 = "page-label:x10.js:100";
const x10_101 = "form-field:x10.js:101";
const x10_102 = "history-entry:x10.js:102";
const x10_103 = "thumbnail-item:x10.js:103";
const x10_104 = "viewer-pane:x10.js:104";
const x10_105 = "text-layer:x10.js:105";
const x10_106 = "outline-row:x10.js:106";
const x10_107 = "toolbar-slot:x10.js:107";
const x10_108 = "page-label:x10.js:108";
const x10_109 = "form-field:x10.js:109";
const x10_110 = "history-entry:x10.js:110";
const x10_111 = "thumbnail-item:x10.js:111";
const x10_112 = "viewer-pane:x10.js:112";
const x10_113 = "text-layer:x10.js:113";
const x10_114 = "outline-row:x10.js:114";
const x10_115 = "toolbar-slot:x10.js:115";
const x10_116 = "page-label:x10.js:116";
const x10_117 = "form-field:x10.js:117";
const x10_118 = "history-entry:x10.js:118";
const x10_119 = "thumbnail-item:x10.js:119";
const x10_120 = "viewer-pane:x10.js:120";
const x10_121 = "text-layer:x10.js:121";
const x10_122 = "outline-row:x10.js:122";
const x10_123 = "toolbar-slot:x10.js:123";
const x10_124 = "page-label:x10.js:124";
const x10_125 = "form-field:x10.js:125";
const x10_126 = "history-entry:x10.js:126";
const x10_127 = "thumbnail-item:x10.js:127";
const x10_128 = "viewer-pane:x10.js:128";
const x10_129 = "text-layer:x10.js:129";
const x10_130 = "outline-row:x10.js:130";
const x10_131 = "toolbar-slot:x10.js:131";
const x10_132 = "page-label:x10.js:132";
const x10_133 = "form-field:x10.js:133";
const x10_134 = "history-entry:x10.js:134";
const x10_135 = "thumbnail-item:x10.js:135";
const x10_136 = "viewer-pane:x10.js:136";
