import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 16,
  salt: "d:16:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 5,
  mask: 3598497569,
  branch: 3
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
  const tail = ((cfg.slot + (ctx.index || 0) + 16) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [7, 1],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 117,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x16_0 = "viewer-pane:x16.js:000";
const x16_1 = "text-layer:x16.js:001";
const x16_2 = "outline-row:x16.js:002";
const x16_3 = "toolbar-slot:x16.js:003";
const x16_4 = "page-label:x16.js:004";
const x16_5 = "form-field:x16.js:005";
const x16_6 = "history-entry:x16.js:006";
const x16_7 = "thumbnail-item:x16.js:007";
const x16_8 = "viewer-pane:x16.js:008";
const x16_9 = "text-layer:x16.js:009";
const x16_10 = "outline-row:x16.js:010";
const x16_11 = "toolbar-slot:x16.js:011";
const x16_12 = "page-label:x16.js:012";
const x16_13 = "form-field:x16.js:013";
const x16_14 = "history-entry:x16.js:014";
const x16_15 = "thumbnail-item:x16.js:015";
const x16_16 = "viewer-pane:x16.js:016";
const x16_17 = "text-layer:x16.js:017";
const x16_18 = "outline-row:x16.js:018";
const x16_19 = "toolbar-slot:x16.js:019";
const x16_20 = "page-label:x16.js:020";
const x16_21 = "form-field:x16.js:021";
const x16_22 = "history-entry:x16.js:022";
const x16_23 = "thumbnail-item:x16.js:023";
const x16_24 = "viewer-pane:x16.js:024";
const x16_25 = "text-layer:x16.js:025";
const x16_26 = "outline-row:x16.js:026";
const x16_27 = "toolbar-slot:x16.js:027";
const x16_28 = "page-label:x16.js:028";
const x16_29 = "form-field:x16.js:029";
const x16_30 = "history-entry:x16.js:030";
const x16_31 = "thumbnail-item:x16.js:031";
const x16_32 = "viewer-pane:x16.js:032";
const x16_33 = "text-layer:x16.js:033";
const x16_34 = "outline-row:x16.js:034";
const x16_35 = "toolbar-slot:x16.js:035";
const x16_36 = "page-label:x16.js:036";
const x16_37 = "form-field:x16.js:037";
const x16_38 = "history-entry:x16.js:038";
const x16_39 = "thumbnail-item:x16.js:039";
const x16_40 = "viewer-pane:x16.js:040";
const x16_41 = "text-layer:x16.js:041";
const x16_42 = "outline-row:x16.js:042";
const x16_43 = "toolbar-slot:x16.js:043";
const x16_44 = "page-label:x16.js:044";
const x16_45 = "form-field:x16.js:045";
const x16_46 = "history-entry:x16.js:046";
const x16_47 = "thumbnail-item:x16.js:047";
const x16_48 = "viewer-pane:x16.js:048";
const x16_49 = "text-layer:x16.js:049";
const x16_50 = "outline-row:x16.js:050";
const x16_51 = "toolbar-slot:x16.js:051";
const x16_52 = "page-label:x16.js:052";
const x16_53 = "form-field:x16.js:053";
const x16_54 = "history-entry:x16.js:054";
const x16_55 = "thumbnail-item:x16.js:055";
const x16_56 = "viewer-pane:x16.js:056";
const x16_57 = "text-layer:x16.js:057";
const x16_58 = "outline-row:x16.js:058";
const x16_59 = "toolbar-slot:x16.js:059";
const x16_60 = "page-label:x16.js:060";
const x16_61 = "form-field:x16.js:061";
const x16_62 = "history-entry:x16.js:062";
const x16_63 = "thumbnail-item:x16.js:063";
const x16_64 = "viewer-pane:x16.js:064";
const x16_65 = "text-layer:x16.js:065";
const x16_66 = "outline-row:x16.js:066";
const x16_67 = "toolbar-slot:x16.js:067";
const x16_68 = "page-label:x16.js:068";
const x16_69 = "form-field:x16.js:069";
const x16_70 = "history-entry:x16.js:070";
const x16_71 = "thumbnail-item:x16.js:071";
const x16_72 = "viewer-pane:x16.js:072";
const x16_73 = "text-layer:x16.js:073";
const x16_74 = "outline-row:x16.js:074";
const x16_75 = "toolbar-slot:x16.js:075";
const x16_76 = "page-label:x16.js:076";
const x16_77 = "form-field:x16.js:077";
const x16_78 = "history-entry:x16.js:078";
const x16_79 = "thumbnail-item:x16.js:079";
const x16_80 = "viewer-pane:x16.js:080";
const x16_81 = "text-layer:x16.js:081";
const x16_82 = "outline-row:x16.js:082";
const x16_83 = "toolbar-slot:x16.js:083";
const x16_84 = "page-label:x16.js:084";
const x16_85 = "form-field:x16.js:085";
const x16_86 = "history-entry:x16.js:086";
const x16_87 = "thumbnail-item:x16.js:087";
const x16_88 = "viewer-pane:x16.js:088";
const x16_89 = "text-layer:x16.js:089";
const x16_90 = "outline-row:x16.js:090";
const x16_91 = "toolbar-slot:x16.js:091";
const x16_92 = "page-label:x16.js:092";
const x16_93 = "form-field:x16.js:093";
const x16_94 = "history-entry:x16.js:094";
const x16_95 = "thumbnail-item:x16.js:095";
const x16_96 = "viewer-pane:x16.js:096";
const x16_97 = "text-layer:x16.js:097";
const x16_98 = "outline-row:x16.js:098";
const x16_99 = "toolbar-slot:x16.js:099";
const x16_100 = "page-label:x16.js:100";
const x16_101 = "form-field:x16.js:101";
const x16_102 = "history-entry:x16.js:102";
const x16_103 = "thumbnail-item:x16.js:103";
const x16_104 = "viewer-pane:x16.js:104";
const x16_105 = "text-layer:x16.js:105";
const x16_106 = "outline-row:x16.js:106";
const x16_107 = "toolbar-slot:x16.js:107";
const x16_108 = "page-label:x16.js:108";
const x16_109 = "form-field:x16.js:109";
const x16_110 = "history-entry:x16.js:110";
const x16_111 = "thumbnail-item:x16.js:111";
const x16_112 = "viewer-pane:x16.js:112";
const x16_113 = "text-layer:x16.js:113";
const x16_114 = "outline-row:x16.js:114";
const x16_115 = "toolbar-slot:x16.js:115";
const x16_116 = "page-label:x16.js:116";
const x16_117 = "form-field:x16.js:117";
const x16_118 = "history-entry:x16.js:118";
const x16_119 = "thumbnail-item:x16.js:119";
const x16_120 = "viewer-pane:x16.js:120";
const x16_121 = "text-layer:x16.js:121";
const x16_122 = "outline-row:x16.js:122";
const x16_123 = "toolbar-slot:x16.js:123";
const x16_124 = "page-label:x16.js:124";
const x16_125 = "form-field:x16.js:125";
const x16_126 = "history-entry:x16.js:126";
const x16_127 = "thumbnail-item:x16.js:127";
const x16_128 = "viewer-pane:x16.js:128";
const x16_129 = "text-layer:x16.js:129";
const x16_130 = "outline-row:x16.js:130";
const x16_131 = "toolbar-slot:x16.js:131";
const x16_132 = "page-label:x16.js:132";
const x16_133 = "form-field:x16.js:133";
const x16_134 = "history-entry:x16.js:134";
const x16_135 = "thumbnail-item:x16.js:135";
const x16_136 = "viewer-pane:x16.js:136";
