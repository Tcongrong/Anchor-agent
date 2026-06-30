import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 31,
  salt: "d:30:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 6,
  mask: 465361024,
  branch: 5
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
  const tail = ((cfg.slot + (ctx.index || 0) + 30) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [3, 0],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 131,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x30_0 = "viewer-pane:x30.js:000";
const x30_1 = "text-layer:x30.js:001";
const x30_2 = "outline-row:x30.js:002";
const x30_3 = "toolbar-slot:x30.js:003";
const x30_4 = "page-label:x30.js:004";
const x30_5 = "form-field:x30.js:005";
const x30_6 = "history-entry:x30.js:006";
const x30_7 = "thumbnail-item:x30.js:007";
const x30_8 = "viewer-pane:x30.js:008";
const x30_9 = "text-layer:x30.js:009";
const x30_10 = "outline-row:x30.js:010";
const x30_11 = "toolbar-slot:x30.js:011";
const x30_12 = "page-label:x30.js:012";
const x30_13 = "form-field:x30.js:013";
const x30_14 = "history-entry:x30.js:014";
const x30_15 = "thumbnail-item:x30.js:015";
const x30_16 = "viewer-pane:x30.js:016";
const x30_17 = "text-layer:x30.js:017";
const x30_18 = "outline-row:x30.js:018";
const x30_19 = "toolbar-slot:x30.js:019";
const x30_20 = "page-label:x30.js:020";
const x30_21 = "form-field:x30.js:021";
const x30_22 = "history-entry:x30.js:022";
const x30_23 = "thumbnail-item:x30.js:023";
const x30_24 = "viewer-pane:x30.js:024";
const x30_25 = "text-layer:x30.js:025";
const x30_26 = "outline-row:x30.js:026";
const x30_27 = "toolbar-slot:x30.js:027";
const x30_28 = "page-label:x30.js:028";
const x30_29 = "form-field:x30.js:029";
const x30_30 = "history-entry:x30.js:030";
const x30_31 = "thumbnail-item:x30.js:031";
const x30_32 = "viewer-pane:x30.js:032";
const x30_33 = "text-layer:x30.js:033";
const x30_34 = "outline-row:x30.js:034";
const x30_35 = "toolbar-slot:x30.js:035";
const x30_36 = "page-label:x30.js:036";
const x30_37 = "form-field:x30.js:037";
const x30_38 = "history-entry:x30.js:038";
const x30_39 = "thumbnail-item:x30.js:039";
const x30_40 = "viewer-pane:x30.js:040";
const x30_41 = "text-layer:x30.js:041";
const x30_42 = "outline-row:x30.js:042";
const x30_43 = "toolbar-slot:x30.js:043";
const x30_44 = "page-label:x30.js:044";
const x30_45 = "form-field:x30.js:045";
const x30_46 = "history-entry:x30.js:046";
const x30_47 = "thumbnail-item:x30.js:047";
const x30_48 = "viewer-pane:x30.js:048";
const x30_49 = "text-layer:x30.js:049";
const x30_50 = "outline-row:x30.js:050";
const x30_51 = "toolbar-slot:x30.js:051";
const x30_52 = "page-label:x30.js:052";
const x30_53 = "form-field:x30.js:053";
const x30_54 = "history-entry:x30.js:054";
const x30_55 = "thumbnail-item:x30.js:055";
const x30_56 = "viewer-pane:x30.js:056";
const x30_57 = "text-layer:x30.js:057";
const x30_58 = "outline-row:x30.js:058";
const x30_59 = "toolbar-slot:x30.js:059";
const x30_60 = "page-label:x30.js:060";
const x30_61 = "form-field:x30.js:061";
const x30_62 = "history-entry:x30.js:062";
const x30_63 = "thumbnail-item:x30.js:063";
const x30_64 = "viewer-pane:x30.js:064";
const x30_65 = "text-layer:x30.js:065";
const x30_66 = "outline-row:x30.js:066";
const x30_67 = "toolbar-slot:x30.js:067";
const x30_68 = "page-label:x30.js:068";
const x30_69 = "form-field:x30.js:069";
const x30_70 = "history-entry:x30.js:070";
const x30_71 = "thumbnail-item:x30.js:071";
const x30_72 = "viewer-pane:x30.js:072";
const x30_73 = "text-layer:x30.js:073";
const x30_74 = "outline-row:x30.js:074";
const x30_75 = "toolbar-slot:x30.js:075";
const x30_76 = "page-label:x30.js:076";
const x30_77 = "form-field:x30.js:077";
const x30_78 = "history-entry:x30.js:078";
const x30_79 = "thumbnail-item:x30.js:079";
const x30_80 = "viewer-pane:x30.js:080";
const x30_81 = "text-layer:x30.js:081";
const x30_82 = "outline-row:x30.js:082";
const x30_83 = "toolbar-slot:x30.js:083";
const x30_84 = "page-label:x30.js:084";
const x30_85 = "form-field:x30.js:085";
const x30_86 = "history-entry:x30.js:086";
const x30_87 = "thumbnail-item:x30.js:087";
const x30_88 = "viewer-pane:x30.js:088";
const x30_89 = "text-layer:x30.js:089";
const x30_90 = "outline-row:x30.js:090";
const x30_91 = "toolbar-slot:x30.js:091";
const x30_92 = "page-label:x30.js:092";
const x30_93 = "form-field:x30.js:093";
const x30_94 = "history-entry:x30.js:094";
const x30_95 = "thumbnail-item:x30.js:095";
const x30_96 = "viewer-pane:x30.js:096";
const x30_97 = "text-layer:x30.js:097";
const x30_98 = "outline-row:x30.js:098";
const x30_99 = "toolbar-slot:x30.js:099";
const x30_100 = "page-label:x30.js:100";
const x30_101 = "form-field:x30.js:101";
const x30_102 = "history-entry:x30.js:102";
const x30_103 = "thumbnail-item:x30.js:103";
const x30_104 = "viewer-pane:x30.js:104";
const x30_105 = "text-layer:x30.js:105";
const x30_106 = "outline-row:x30.js:106";
const x30_107 = "toolbar-slot:x30.js:107";
const x30_108 = "page-label:x30.js:108";
const x30_109 = "form-field:x30.js:109";
const x30_110 = "history-entry:x30.js:110";
const x30_111 = "thumbnail-item:x30.js:111";
const x30_112 = "viewer-pane:x30.js:112";
const x30_113 = "text-layer:x30.js:113";
const x30_114 = "outline-row:x30.js:114";
const x30_115 = "toolbar-slot:x30.js:115";
const x30_116 = "page-label:x30.js:116";
const x30_117 = "form-field:x30.js:117";
const x30_118 = "history-entry:x30.js:118";
const x30_119 = "thumbnail-item:x30.js:119";
const x30_120 = "viewer-pane:x30.js:120";
const x30_121 = "text-layer:x30.js:121";
const x30_122 = "outline-row:x30.js:122";
const x30_123 = "toolbar-slot:x30.js:123";
const x30_124 = "page-label:x30.js:124";
const x30_125 = "form-field:x30.js:125";
const x30_126 = "history-entry:x30.js:126";
const x30_127 = "thumbnail-item:x30.js:127";
const x30_128 = "viewer-pane:x30.js:128";
const x30_129 = "text-layer:x30.js:129";
const x30_130 = "outline-row:x30.js:130";
const x30_131 = "toolbar-slot:x30.js:131";
const x30_132 = "page-label:x30.js:132";
const x30_133 = "form-field:x30.js:133";
const x30_134 = "history-entry:x30.js:134";
const x30_135 = "thumbnail-item:x30.js:135";
const x30_136 = "viewer-pane:x30.js:136";
