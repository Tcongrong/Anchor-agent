import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 43,
  salt: "d:42:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 5,
  mask: 2253819084,
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
  const tail = ((cfg.slot + (ctx.index || 0) + 42) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [6, 2],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 143,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x42_0 = "viewer-pane:x42.js:000";
const x42_1 = "text-layer:x42.js:001";
const x42_2 = "outline-row:x42.js:002";
const x42_3 = "toolbar-slot:x42.js:003";
const x42_4 = "page-label:x42.js:004";
const x42_5 = "form-field:x42.js:005";
const x42_6 = "history-entry:x42.js:006";
const x42_7 = "thumbnail-item:x42.js:007";
const x42_8 = "viewer-pane:x42.js:008";
const x42_9 = "text-layer:x42.js:009";
const x42_10 = "outline-row:x42.js:010";
const x42_11 = "toolbar-slot:x42.js:011";
const x42_12 = "page-label:x42.js:012";
const x42_13 = "form-field:x42.js:013";
const x42_14 = "history-entry:x42.js:014";
const x42_15 = "thumbnail-item:x42.js:015";
const x42_16 = "viewer-pane:x42.js:016";
const x42_17 = "text-layer:x42.js:017";
const x42_18 = "outline-row:x42.js:018";
const x42_19 = "toolbar-slot:x42.js:019";
const x42_20 = "page-label:x42.js:020";
const x42_21 = "form-field:x42.js:021";
const x42_22 = "history-entry:x42.js:022";
const x42_23 = "thumbnail-item:x42.js:023";
const x42_24 = "viewer-pane:x42.js:024";
const x42_25 = "text-layer:x42.js:025";
const x42_26 = "outline-row:x42.js:026";
const x42_27 = "toolbar-slot:x42.js:027";
const x42_28 = "page-label:x42.js:028";
const x42_29 = "form-field:x42.js:029";
const x42_30 = "history-entry:x42.js:030";
const x42_31 = "thumbnail-item:x42.js:031";
const x42_32 = "viewer-pane:x42.js:032";
const x42_33 = "text-layer:x42.js:033";
const x42_34 = "outline-row:x42.js:034";
const x42_35 = "toolbar-slot:x42.js:035";
const x42_36 = "page-label:x42.js:036";
const x42_37 = "form-field:x42.js:037";
const x42_38 = "history-entry:x42.js:038";
const x42_39 = "thumbnail-item:x42.js:039";
const x42_40 = "viewer-pane:x42.js:040";
const x42_41 = "text-layer:x42.js:041";
const x42_42 = "outline-row:x42.js:042";
const x42_43 = "toolbar-slot:x42.js:043";
const x42_44 = "page-label:x42.js:044";
const x42_45 = "form-field:x42.js:045";
const x42_46 = "history-entry:x42.js:046";
const x42_47 = "thumbnail-item:x42.js:047";
const x42_48 = "viewer-pane:x42.js:048";
const x42_49 = "text-layer:x42.js:049";
const x42_50 = "outline-row:x42.js:050";
const x42_51 = "toolbar-slot:x42.js:051";
const x42_52 = "page-label:x42.js:052";
const x42_53 = "form-field:x42.js:053";
const x42_54 = "history-entry:x42.js:054";
const x42_55 = "thumbnail-item:x42.js:055";
const x42_56 = "viewer-pane:x42.js:056";
const x42_57 = "text-layer:x42.js:057";
const x42_58 = "outline-row:x42.js:058";
const x42_59 = "toolbar-slot:x42.js:059";
const x42_60 = "page-label:x42.js:060";
const x42_61 = "form-field:x42.js:061";
const x42_62 = "history-entry:x42.js:062";
const x42_63 = "thumbnail-item:x42.js:063";
const x42_64 = "viewer-pane:x42.js:064";
const x42_65 = "text-layer:x42.js:065";
const x42_66 = "outline-row:x42.js:066";
const x42_67 = "toolbar-slot:x42.js:067";
const x42_68 = "page-label:x42.js:068";
const x42_69 = "form-field:x42.js:069";
const x42_70 = "history-entry:x42.js:070";
const x42_71 = "thumbnail-item:x42.js:071";
const x42_72 = "viewer-pane:x42.js:072";
const x42_73 = "text-layer:x42.js:073";
const x42_74 = "outline-row:x42.js:074";
const x42_75 = "toolbar-slot:x42.js:075";
const x42_76 = "page-label:x42.js:076";
const x42_77 = "form-field:x42.js:077";
const x42_78 = "history-entry:x42.js:078";
const x42_79 = "thumbnail-item:x42.js:079";
const x42_80 = "viewer-pane:x42.js:080";
const x42_81 = "text-layer:x42.js:081";
const x42_82 = "outline-row:x42.js:082";
const x42_83 = "toolbar-slot:x42.js:083";
const x42_84 = "page-label:x42.js:084";
const x42_85 = "form-field:x42.js:085";
const x42_86 = "history-entry:x42.js:086";
const x42_87 = "thumbnail-item:x42.js:087";
const x42_88 = "viewer-pane:x42.js:088";
const x42_89 = "text-layer:x42.js:089";
const x42_90 = "outline-row:x42.js:090";
const x42_91 = "toolbar-slot:x42.js:091";
const x42_92 = "page-label:x42.js:092";
const x42_93 = "form-field:x42.js:093";
const x42_94 = "history-entry:x42.js:094";
const x42_95 = "thumbnail-item:x42.js:095";
const x42_96 = "viewer-pane:x42.js:096";
const x42_97 = "text-layer:x42.js:097";
const x42_98 = "outline-row:x42.js:098";
const x42_99 = "toolbar-slot:x42.js:099";
const x42_100 = "page-label:x42.js:100";
const x42_101 = "form-field:x42.js:101";
const x42_102 = "history-entry:x42.js:102";
const x42_103 = "thumbnail-item:x42.js:103";
const x42_104 = "viewer-pane:x42.js:104";
const x42_105 = "text-layer:x42.js:105";
const x42_106 = "outline-row:x42.js:106";
const x42_107 = "toolbar-slot:x42.js:107";
const x42_108 = "page-label:x42.js:108";
const x42_109 = "form-field:x42.js:109";
const x42_110 = "history-entry:x42.js:110";
const x42_111 = "thumbnail-item:x42.js:111";
const x42_112 = "viewer-pane:x42.js:112";
const x42_113 = "text-layer:x42.js:113";
const x42_114 = "outline-row:x42.js:114";
const x42_115 = "toolbar-slot:x42.js:115";
const x42_116 = "page-label:x42.js:116";
const x42_117 = "form-field:x42.js:117";
const x42_118 = "history-entry:x42.js:118";
const x42_119 = "thumbnail-item:x42.js:119";
const x42_120 = "viewer-pane:x42.js:120";
const x42_121 = "text-layer:x42.js:121";
const x42_122 = "outline-row:x42.js:122";
const x42_123 = "toolbar-slot:x42.js:123";
const x42_124 = "page-label:x42.js:124";
const x42_125 = "form-field:x42.js:125";
const x42_126 = "history-entry:x42.js:126";
const x42_127 = "thumbnail-item:x42.js:127";
const x42_128 = "viewer-pane:x42.js:128";
const x42_129 = "text-layer:x42.js:129";
const x42_130 = "outline-row:x42.js:130";
const x42_131 = "toolbar-slot:x42.js:131";
const x42_132 = "page-label:x42.js:132";
const x42_133 = "form-field:x42.js:133";
const x42_134 = "history-entry:x42.js:134";
const x42_135 = "thumbnail-item:x42.js:135";
const x42_136 = "viewer-pane:x42.js:136";
