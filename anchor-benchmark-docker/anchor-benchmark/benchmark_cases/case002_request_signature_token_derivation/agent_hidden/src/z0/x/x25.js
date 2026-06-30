import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 26,
  salt: "d:25:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 14,
  mask: 78084107,
  branch: 2
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
  const tail = ((cfg.slot + (ctx.index || 0) + 25) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [7, 0],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 126,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x25_0 = "viewer-pane:x25.js:000";
const x25_1 = "text-layer:x25.js:001";
const x25_2 = "outline-row:x25.js:002";
const x25_3 = "toolbar-slot:x25.js:003";
const x25_4 = "page-label:x25.js:004";
const x25_5 = "form-field:x25.js:005";
const x25_6 = "history-entry:x25.js:006";
const x25_7 = "thumbnail-item:x25.js:007";
const x25_8 = "viewer-pane:x25.js:008";
const x25_9 = "text-layer:x25.js:009";
const x25_10 = "outline-row:x25.js:010";
const x25_11 = "toolbar-slot:x25.js:011";
const x25_12 = "page-label:x25.js:012";
const x25_13 = "form-field:x25.js:013";
const x25_14 = "history-entry:x25.js:014";
const x25_15 = "thumbnail-item:x25.js:015";
const x25_16 = "viewer-pane:x25.js:016";
const x25_17 = "text-layer:x25.js:017";
const x25_18 = "outline-row:x25.js:018";
const x25_19 = "toolbar-slot:x25.js:019";
const x25_20 = "page-label:x25.js:020";
const x25_21 = "form-field:x25.js:021";
const x25_22 = "history-entry:x25.js:022";
const x25_23 = "thumbnail-item:x25.js:023";
const x25_24 = "viewer-pane:x25.js:024";
const x25_25 = "text-layer:x25.js:025";
const x25_26 = "outline-row:x25.js:026";
const x25_27 = "toolbar-slot:x25.js:027";
const x25_28 = "page-label:x25.js:028";
const x25_29 = "form-field:x25.js:029";
const x25_30 = "history-entry:x25.js:030";
const x25_31 = "thumbnail-item:x25.js:031";
const x25_32 = "viewer-pane:x25.js:032";
const x25_33 = "text-layer:x25.js:033";
const x25_34 = "outline-row:x25.js:034";
const x25_35 = "toolbar-slot:x25.js:035";
const x25_36 = "page-label:x25.js:036";
const x25_37 = "form-field:x25.js:037";
const x25_38 = "history-entry:x25.js:038";
const x25_39 = "thumbnail-item:x25.js:039";
const x25_40 = "viewer-pane:x25.js:040";
const x25_41 = "text-layer:x25.js:041";
const x25_42 = "outline-row:x25.js:042";
const x25_43 = "toolbar-slot:x25.js:043";
const x25_44 = "page-label:x25.js:044";
const x25_45 = "form-field:x25.js:045";
const x25_46 = "history-entry:x25.js:046";
const x25_47 = "thumbnail-item:x25.js:047";
const x25_48 = "viewer-pane:x25.js:048";
const x25_49 = "text-layer:x25.js:049";
const x25_50 = "outline-row:x25.js:050";
const x25_51 = "toolbar-slot:x25.js:051";
const x25_52 = "page-label:x25.js:052";
const x25_53 = "form-field:x25.js:053";
const x25_54 = "history-entry:x25.js:054";
const x25_55 = "thumbnail-item:x25.js:055";
const x25_56 = "viewer-pane:x25.js:056";
const x25_57 = "text-layer:x25.js:057";
const x25_58 = "outline-row:x25.js:058";
const x25_59 = "toolbar-slot:x25.js:059";
const x25_60 = "page-label:x25.js:060";
const x25_61 = "form-field:x25.js:061";
const x25_62 = "history-entry:x25.js:062";
const x25_63 = "thumbnail-item:x25.js:063";
const x25_64 = "viewer-pane:x25.js:064";
const x25_65 = "text-layer:x25.js:065";
const x25_66 = "outline-row:x25.js:066";
const x25_67 = "toolbar-slot:x25.js:067";
const x25_68 = "page-label:x25.js:068";
const x25_69 = "form-field:x25.js:069";
const x25_70 = "history-entry:x25.js:070";
const x25_71 = "thumbnail-item:x25.js:071";
const x25_72 = "viewer-pane:x25.js:072";
const x25_73 = "text-layer:x25.js:073";
const x25_74 = "outline-row:x25.js:074";
const x25_75 = "toolbar-slot:x25.js:075";
const x25_76 = "page-label:x25.js:076";
const x25_77 = "form-field:x25.js:077";
const x25_78 = "history-entry:x25.js:078";
const x25_79 = "thumbnail-item:x25.js:079";
const x25_80 = "viewer-pane:x25.js:080";
const x25_81 = "text-layer:x25.js:081";
const x25_82 = "outline-row:x25.js:082";
const x25_83 = "toolbar-slot:x25.js:083";
const x25_84 = "page-label:x25.js:084";
const x25_85 = "form-field:x25.js:085";
const x25_86 = "history-entry:x25.js:086";
const x25_87 = "thumbnail-item:x25.js:087";
const x25_88 = "viewer-pane:x25.js:088";
const x25_89 = "text-layer:x25.js:089";
const x25_90 = "outline-row:x25.js:090";
const x25_91 = "toolbar-slot:x25.js:091";
const x25_92 = "page-label:x25.js:092";
const x25_93 = "form-field:x25.js:093";
const x25_94 = "history-entry:x25.js:094";
const x25_95 = "thumbnail-item:x25.js:095";
const x25_96 = "viewer-pane:x25.js:096";
const x25_97 = "text-layer:x25.js:097";
const x25_98 = "outline-row:x25.js:098";
const x25_99 = "toolbar-slot:x25.js:099";
const x25_100 = "page-label:x25.js:100";
const x25_101 = "form-field:x25.js:101";
const x25_102 = "history-entry:x25.js:102";
const x25_103 = "thumbnail-item:x25.js:103";
const x25_104 = "viewer-pane:x25.js:104";
const x25_105 = "text-layer:x25.js:105";
const x25_106 = "outline-row:x25.js:106";
const x25_107 = "toolbar-slot:x25.js:107";
const x25_108 = "page-label:x25.js:108";
const x25_109 = "form-field:x25.js:109";
const x25_110 = "history-entry:x25.js:110";
const x25_111 = "thumbnail-item:x25.js:111";
const x25_112 = "viewer-pane:x25.js:112";
const x25_113 = "text-layer:x25.js:113";
const x25_114 = "outline-row:x25.js:114";
const x25_115 = "toolbar-slot:x25.js:115";
const x25_116 = "page-label:x25.js:116";
const x25_117 = "form-field:x25.js:117";
const x25_118 = "history-entry:x25.js:118";
const x25_119 = "thumbnail-item:x25.js:119";
const x25_120 = "viewer-pane:x25.js:120";
const x25_121 = "text-layer:x25.js:121";
const x25_122 = "outline-row:x25.js:122";
const x25_123 = "toolbar-slot:x25.js:123";
const x25_124 = "page-label:x25.js:124";
const x25_125 = "form-field:x25.js:125";
const x25_126 = "history-entry:x25.js:126";
const x25_127 = "thumbnail-item:x25.js:127";
const x25_128 = "viewer-pane:x25.js:128";
const x25_129 = "text-layer:x25.js:129";
const x25_130 = "outline-row:x25.js:130";
const x25_131 = "toolbar-slot:x25.js:131";
const x25_132 = "page-label:x25.js:132";
const x25_133 = "form-field:x25.js:133";
const x25_134 = "history-entry:x25.js:134";
const x25_135 = "thumbnail-item:x25.js:135";
const x25_136 = "viewer-pane:x25.js:136";
