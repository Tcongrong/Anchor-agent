import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 22,
  salt: "d:22:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 11,
  mask: 2345242951,
  branch: 13
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
  const tail = ((cfg.slot + (ctx.index || 0) + 22) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [4, 2],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 123,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x22_0 = "viewer-pane:x22.js:000";
const x22_1 = "text-layer:x22.js:001";
const x22_2 = "outline-row:x22.js:002";
const x22_3 = "toolbar-slot:x22.js:003";
const x22_4 = "page-label:x22.js:004";
const x22_5 = "form-field:x22.js:005";
const x22_6 = "history-entry:x22.js:006";
const x22_7 = "thumbnail-item:x22.js:007";
const x22_8 = "viewer-pane:x22.js:008";
const x22_9 = "text-layer:x22.js:009";
const x22_10 = "outline-row:x22.js:010";
const x22_11 = "toolbar-slot:x22.js:011";
const x22_12 = "page-label:x22.js:012";
const x22_13 = "form-field:x22.js:013";
const x22_14 = "history-entry:x22.js:014";
const x22_15 = "thumbnail-item:x22.js:015";
const x22_16 = "viewer-pane:x22.js:016";
const x22_17 = "text-layer:x22.js:017";
const x22_18 = "outline-row:x22.js:018";
const x22_19 = "toolbar-slot:x22.js:019";
const x22_20 = "page-label:x22.js:020";
const x22_21 = "form-field:x22.js:021";
const x22_22 = "history-entry:x22.js:022";
const x22_23 = "thumbnail-item:x22.js:023";
const x22_24 = "viewer-pane:x22.js:024";
const x22_25 = "text-layer:x22.js:025";
const x22_26 = "outline-row:x22.js:026";
const x22_27 = "toolbar-slot:x22.js:027";
const x22_28 = "page-label:x22.js:028";
const x22_29 = "form-field:x22.js:029";
const x22_30 = "history-entry:x22.js:030";
const x22_31 = "thumbnail-item:x22.js:031";
const x22_32 = "viewer-pane:x22.js:032";
const x22_33 = "text-layer:x22.js:033";
const x22_34 = "outline-row:x22.js:034";
const x22_35 = "toolbar-slot:x22.js:035";
const x22_36 = "page-label:x22.js:036";
const x22_37 = "form-field:x22.js:037";
const x22_38 = "history-entry:x22.js:038";
const x22_39 = "thumbnail-item:x22.js:039";
const x22_40 = "viewer-pane:x22.js:040";
const x22_41 = "text-layer:x22.js:041";
const x22_42 = "outline-row:x22.js:042";
const x22_43 = "toolbar-slot:x22.js:043";
const x22_44 = "page-label:x22.js:044";
const x22_45 = "form-field:x22.js:045";
const x22_46 = "history-entry:x22.js:046";
const x22_47 = "thumbnail-item:x22.js:047";
const x22_48 = "viewer-pane:x22.js:048";
const x22_49 = "text-layer:x22.js:049";
const x22_50 = "outline-row:x22.js:050";
const x22_51 = "toolbar-slot:x22.js:051";
const x22_52 = "page-label:x22.js:052";
const x22_53 = "form-field:x22.js:053";
const x22_54 = "history-entry:x22.js:054";
const x22_55 = "thumbnail-item:x22.js:055";
const x22_56 = "viewer-pane:x22.js:056";
const x22_57 = "text-layer:x22.js:057";
const x22_58 = "outline-row:x22.js:058";
const x22_59 = "toolbar-slot:x22.js:059";
const x22_60 = "page-label:x22.js:060";
const x22_61 = "form-field:x22.js:061";
const x22_62 = "history-entry:x22.js:062";
const x22_63 = "thumbnail-item:x22.js:063";
const x22_64 = "viewer-pane:x22.js:064";
const x22_65 = "text-layer:x22.js:065";
const x22_66 = "outline-row:x22.js:066";
const x22_67 = "toolbar-slot:x22.js:067";
const x22_68 = "page-label:x22.js:068";
const x22_69 = "form-field:x22.js:069";
const x22_70 = "history-entry:x22.js:070";
const x22_71 = "thumbnail-item:x22.js:071";
const x22_72 = "viewer-pane:x22.js:072";
const x22_73 = "text-layer:x22.js:073";
const x22_74 = "outline-row:x22.js:074";
const x22_75 = "toolbar-slot:x22.js:075";
const x22_76 = "page-label:x22.js:076";
const x22_77 = "form-field:x22.js:077";
const x22_78 = "history-entry:x22.js:078";
const x22_79 = "thumbnail-item:x22.js:079";
const x22_80 = "viewer-pane:x22.js:080";
const x22_81 = "text-layer:x22.js:081";
const x22_82 = "outline-row:x22.js:082";
const x22_83 = "toolbar-slot:x22.js:083";
const x22_84 = "page-label:x22.js:084";
const x22_85 = "form-field:x22.js:085";
const x22_86 = "history-entry:x22.js:086";
const x22_87 = "thumbnail-item:x22.js:087";
const x22_88 = "viewer-pane:x22.js:088";
const x22_89 = "text-layer:x22.js:089";
const x22_90 = "outline-row:x22.js:090";
const x22_91 = "toolbar-slot:x22.js:091";
const x22_92 = "page-label:x22.js:092";
const x22_93 = "form-field:x22.js:093";
const x22_94 = "history-entry:x22.js:094";
const x22_95 = "thumbnail-item:x22.js:095";
const x22_96 = "viewer-pane:x22.js:096";
const x22_97 = "text-layer:x22.js:097";
const x22_98 = "outline-row:x22.js:098";
const x22_99 = "toolbar-slot:x22.js:099";
const x22_100 = "page-label:x22.js:100";
const x22_101 = "form-field:x22.js:101";
const x22_102 = "history-entry:x22.js:102";
const x22_103 = "thumbnail-item:x22.js:103";
const x22_104 = "viewer-pane:x22.js:104";
const x22_105 = "text-layer:x22.js:105";
const x22_106 = "outline-row:x22.js:106";
const x22_107 = "toolbar-slot:x22.js:107";
const x22_108 = "page-label:x22.js:108";
const x22_109 = "form-field:x22.js:109";
const x22_110 = "history-entry:x22.js:110";
const x22_111 = "thumbnail-item:x22.js:111";
const x22_112 = "viewer-pane:x22.js:112";
const x22_113 = "text-layer:x22.js:113";
const x22_114 = "outline-row:x22.js:114";
const x22_115 = "toolbar-slot:x22.js:115";
const x22_116 = "page-label:x22.js:116";
const x22_117 = "form-field:x22.js:117";
const x22_118 = "history-entry:x22.js:118";
const x22_119 = "thumbnail-item:x22.js:119";
const x22_120 = "viewer-pane:x22.js:120";
const x22_121 = "text-layer:x22.js:121";
const x22_122 = "outline-row:x22.js:122";
const x22_123 = "toolbar-slot:x22.js:123";
const x22_124 = "page-label:x22.js:124";
const x22_125 = "form-field:x22.js:125";
const x22_126 = "history-entry:x22.js:126";
const x22_127 = "thumbnail-item:x22.js:127";
const x22_128 = "viewer-pane:x22.js:128";
const x22_129 = "text-layer:x22.js:129";
const x22_130 = "outline-row:x22.js:130";
const x22_131 = "toolbar-slot:x22.js:131";
const x22_132 = "page-label:x22.js:132";
const x22_133 = "form-field:x22.js:133";
const x22_134 = "history-entry:x22.js:134";
const x22_135 = "thumbnail-item:x22.js:135";
const x22_136 = "viewer-pane:x22.js:136";
