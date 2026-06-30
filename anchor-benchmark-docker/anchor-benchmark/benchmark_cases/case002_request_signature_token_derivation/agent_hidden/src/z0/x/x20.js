import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 20,
  salt: "d:20:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 9,
  mask: 1331338725,
  branch: 15
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
  const tail = ((cfg.slot + (ctx.index || 0) + 20) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [2, 0],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 121,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x20_0 = "viewer-pane:x20.js:000";
const x20_1 = "text-layer:x20.js:001";
const x20_2 = "outline-row:x20.js:002";
const x20_3 = "toolbar-slot:x20.js:003";
const x20_4 = "page-label:x20.js:004";
const x20_5 = "form-field:x20.js:005";
const x20_6 = "history-entry:x20.js:006";
const x20_7 = "thumbnail-item:x20.js:007";
const x20_8 = "viewer-pane:x20.js:008";
const x20_9 = "text-layer:x20.js:009";
const x20_10 = "outline-row:x20.js:010";
const x20_11 = "toolbar-slot:x20.js:011";
const x20_12 = "page-label:x20.js:012";
const x20_13 = "form-field:x20.js:013";
const x20_14 = "history-entry:x20.js:014";
const x20_15 = "thumbnail-item:x20.js:015";
const x20_16 = "viewer-pane:x20.js:016";
const x20_17 = "text-layer:x20.js:017";
const x20_18 = "outline-row:x20.js:018";
const x20_19 = "toolbar-slot:x20.js:019";
const x20_20 = "page-label:x20.js:020";
const x20_21 = "form-field:x20.js:021";
const x20_22 = "history-entry:x20.js:022";
const x20_23 = "thumbnail-item:x20.js:023";
const x20_24 = "viewer-pane:x20.js:024";
const x20_25 = "text-layer:x20.js:025";
const x20_26 = "outline-row:x20.js:026";
const x20_27 = "toolbar-slot:x20.js:027";
const x20_28 = "page-label:x20.js:028";
const x20_29 = "form-field:x20.js:029";
const x20_30 = "history-entry:x20.js:030";
const x20_31 = "thumbnail-item:x20.js:031";
const x20_32 = "viewer-pane:x20.js:032";
const x20_33 = "text-layer:x20.js:033";
const x20_34 = "outline-row:x20.js:034";
const x20_35 = "toolbar-slot:x20.js:035";
const x20_36 = "page-label:x20.js:036";
const x20_37 = "form-field:x20.js:037";
const x20_38 = "history-entry:x20.js:038";
const x20_39 = "thumbnail-item:x20.js:039";
const x20_40 = "viewer-pane:x20.js:040";
const x20_41 = "text-layer:x20.js:041";
const x20_42 = "outline-row:x20.js:042";
const x20_43 = "toolbar-slot:x20.js:043";
const x20_44 = "page-label:x20.js:044";
const x20_45 = "form-field:x20.js:045";
const x20_46 = "history-entry:x20.js:046";
const x20_47 = "thumbnail-item:x20.js:047";
const x20_48 = "viewer-pane:x20.js:048";
const x20_49 = "text-layer:x20.js:049";
const x20_50 = "outline-row:x20.js:050";
const x20_51 = "toolbar-slot:x20.js:051";
const x20_52 = "page-label:x20.js:052";
const x20_53 = "form-field:x20.js:053";
const x20_54 = "history-entry:x20.js:054";
const x20_55 = "thumbnail-item:x20.js:055";
const x20_56 = "viewer-pane:x20.js:056";
const x20_57 = "text-layer:x20.js:057";
const x20_58 = "outline-row:x20.js:058";
const x20_59 = "toolbar-slot:x20.js:059";
const x20_60 = "page-label:x20.js:060";
const x20_61 = "form-field:x20.js:061";
const x20_62 = "history-entry:x20.js:062";
const x20_63 = "thumbnail-item:x20.js:063";
const x20_64 = "viewer-pane:x20.js:064";
const x20_65 = "text-layer:x20.js:065";
const x20_66 = "outline-row:x20.js:066";
const x20_67 = "toolbar-slot:x20.js:067";
const x20_68 = "page-label:x20.js:068";
const x20_69 = "form-field:x20.js:069";
const x20_70 = "history-entry:x20.js:070";
const x20_71 = "thumbnail-item:x20.js:071";
const x20_72 = "viewer-pane:x20.js:072";
const x20_73 = "text-layer:x20.js:073";
const x20_74 = "outline-row:x20.js:074";
const x20_75 = "toolbar-slot:x20.js:075";
const x20_76 = "page-label:x20.js:076";
const x20_77 = "form-field:x20.js:077";
const x20_78 = "history-entry:x20.js:078";
const x20_79 = "thumbnail-item:x20.js:079";
const x20_80 = "viewer-pane:x20.js:080";
const x20_81 = "text-layer:x20.js:081";
const x20_82 = "outline-row:x20.js:082";
const x20_83 = "toolbar-slot:x20.js:083";
const x20_84 = "page-label:x20.js:084";
const x20_85 = "form-field:x20.js:085";
const x20_86 = "history-entry:x20.js:086";
const x20_87 = "thumbnail-item:x20.js:087";
const x20_88 = "viewer-pane:x20.js:088";
const x20_89 = "text-layer:x20.js:089";
const x20_90 = "outline-row:x20.js:090";
const x20_91 = "toolbar-slot:x20.js:091";
const x20_92 = "page-label:x20.js:092";
const x20_93 = "form-field:x20.js:093";
const x20_94 = "history-entry:x20.js:094";
const x20_95 = "thumbnail-item:x20.js:095";
const x20_96 = "viewer-pane:x20.js:096";
const x20_97 = "text-layer:x20.js:097";
const x20_98 = "outline-row:x20.js:098";
const x20_99 = "toolbar-slot:x20.js:099";
const x20_100 = "page-label:x20.js:100";
const x20_101 = "form-field:x20.js:101";
const x20_102 = "history-entry:x20.js:102";
const x20_103 = "thumbnail-item:x20.js:103";
const x20_104 = "viewer-pane:x20.js:104";
const x20_105 = "text-layer:x20.js:105";
const x20_106 = "outline-row:x20.js:106";
const x20_107 = "toolbar-slot:x20.js:107";
const x20_108 = "page-label:x20.js:108";
const x20_109 = "form-field:x20.js:109";
const x20_110 = "history-entry:x20.js:110";
const x20_111 = "thumbnail-item:x20.js:111";
const x20_112 = "viewer-pane:x20.js:112";
const x20_113 = "text-layer:x20.js:113";
const x20_114 = "outline-row:x20.js:114";
const x20_115 = "toolbar-slot:x20.js:115";
const x20_116 = "page-label:x20.js:116";
const x20_117 = "form-field:x20.js:117";
const x20_118 = "history-entry:x20.js:118";
const x20_119 = "thumbnail-item:x20.js:119";
const x20_120 = "viewer-pane:x20.js:120";
const x20_121 = "text-layer:x20.js:121";
const x20_122 = "outline-row:x20.js:122";
const x20_123 = "toolbar-slot:x20.js:123";
const x20_124 = "page-label:x20.js:124";
const x20_125 = "form-field:x20.js:125";
const x20_126 = "history-entry:x20.js:126";
const x20_127 = "thumbnail-item:x20.js:127";
const x20_128 = "viewer-pane:x20.js:128";
const x20_129 = "text-layer:x20.js:129";
const x20_130 = "outline-row:x20.js:130";
const x20_131 = "toolbar-slot:x20.js:131";
const x20_132 = "page-label:x20.js:132";
const x20_133 = "form-field:x20.js:133";
const x20_134 = "history-entry:x20.js:134";
const x20_135 = "thumbnail-item:x20.js:135";
const x20_136 = "viewer-pane:x20.js:136";
