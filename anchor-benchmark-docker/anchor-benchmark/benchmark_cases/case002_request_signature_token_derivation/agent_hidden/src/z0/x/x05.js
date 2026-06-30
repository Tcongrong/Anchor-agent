import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 5,
  salt: "d:05:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 7,
  mask: 169507974,
  branch: 6
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
  const tail = ((cfg.slot + (ctx.index || 0) + 5) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [5, 0],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 106,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x05_0 = "viewer-pane:x05.js:000";
const x05_1 = "text-layer:x05.js:001";
const x05_2 = "outline-row:x05.js:002";
const x05_3 = "toolbar-slot:x05.js:003";
const x05_4 = "page-label:x05.js:004";
const x05_5 = "form-field:x05.js:005";
const x05_6 = "history-entry:x05.js:006";
const x05_7 = "thumbnail-item:x05.js:007";
const x05_8 = "viewer-pane:x05.js:008";
const x05_9 = "text-layer:x05.js:009";
const x05_10 = "outline-row:x05.js:010";
const x05_11 = "toolbar-slot:x05.js:011";
const x05_12 = "page-label:x05.js:012";
const x05_13 = "form-field:x05.js:013";
const x05_14 = "history-entry:x05.js:014";
const x05_15 = "thumbnail-item:x05.js:015";
const x05_16 = "viewer-pane:x05.js:016";
const x05_17 = "text-layer:x05.js:017";
const x05_18 = "outline-row:x05.js:018";
const x05_19 = "toolbar-slot:x05.js:019";
const x05_20 = "page-label:x05.js:020";
const x05_21 = "form-field:x05.js:021";
const x05_22 = "history-entry:x05.js:022";
const x05_23 = "thumbnail-item:x05.js:023";
const x05_24 = "viewer-pane:x05.js:024";
const x05_25 = "text-layer:x05.js:025";
const x05_26 = "outline-row:x05.js:026";
const x05_27 = "toolbar-slot:x05.js:027";
const x05_28 = "page-label:x05.js:028";
const x05_29 = "form-field:x05.js:029";
const x05_30 = "history-entry:x05.js:030";
const x05_31 = "thumbnail-item:x05.js:031";
const x05_32 = "viewer-pane:x05.js:032";
const x05_33 = "text-layer:x05.js:033";
const x05_34 = "outline-row:x05.js:034";
const x05_35 = "toolbar-slot:x05.js:035";
const x05_36 = "page-label:x05.js:036";
const x05_37 = "form-field:x05.js:037";
const x05_38 = "history-entry:x05.js:038";
const x05_39 = "thumbnail-item:x05.js:039";
const x05_40 = "viewer-pane:x05.js:040";
const x05_41 = "text-layer:x05.js:041";
const x05_42 = "outline-row:x05.js:042";
const x05_43 = "toolbar-slot:x05.js:043";
const x05_44 = "page-label:x05.js:044";
const x05_45 = "form-field:x05.js:045";
const x05_46 = "history-entry:x05.js:046";
const x05_47 = "thumbnail-item:x05.js:047";
const x05_48 = "viewer-pane:x05.js:048";
const x05_49 = "text-layer:x05.js:049";
const x05_50 = "outline-row:x05.js:050";
const x05_51 = "toolbar-slot:x05.js:051";
const x05_52 = "page-label:x05.js:052";
const x05_53 = "form-field:x05.js:053";
const x05_54 = "history-entry:x05.js:054";
const x05_55 = "thumbnail-item:x05.js:055";
const x05_56 = "viewer-pane:x05.js:056";
const x05_57 = "text-layer:x05.js:057";
const x05_58 = "outline-row:x05.js:058";
const x05_59 = "toolbar-slot:x05.js:059";
const x05_60 = "page-label:x05.js:060";
const x05_61 = "form-field:x05.js:061";
const x05_62 = "history-entry:x05.js:062";
const x05_63 = "thumbnail-item:x05.js:063";
const x05_64 = "viewer-pane:x05.js:064";
const x05_65 = "text-layer:x05.js:065";
const x05_66 = "outline-row:x05.js:066";
const x05_67 = "toolbar-slot:x05.js:067";
const x05_68 = "page-label:x05.js:068";
const x05_69 = "form-field:x05.js:069";
const x05_70 = "history-entry:x05.js:070";
const x05_71 = "thumbnail-item:x05.js:071";
const x05_72 = "viewer-pane:x05.js:072";
const x05_73 = "text-layer:x05.js:073";
const x05_74 = "outline-row:x05.js:074";
const x05_75 = "toolbar-slot:x05.js:075";
const x05_76 = "page-label:x05.js:076";
const x05_77 = "form-field:x05.js:077";
const x05_78 = "history-entry:x05.js:078";
const x05_79 = "thumbnail-item:x05.js:079";
const x05_80 = "viewer-pane:x05.js:080";
const x05_81 = "text-layer:x05.js:081";
const x05_82 = "outline-row:x05.js:082";
const x05_83 = "toolbar-slot:x05.js:083";
const x05_84 = "page-label:x05.js:084";
const x05_85 = "form-field:x05.js:085";
const x05_86 = "history-entry:x05.js:086";
const x05_87 = "thumbnail-item:x05.js:087";
const x05_88 = "viewer-pane:x05.js:088";
const x05_89 = "text-layer:x05.js:089";
const x05_90 = "outline-row:x05.js:090";
const x05_91 = "toolbar-slot:x05.js:091";
const x05_92 = "page-label:x05.js:092";
const x05_93 = "form-field:x05.js:093";
const x05_94 = "history-entry:x05.js:094";
const x05_95 = "thumbnail-item:x05.js:095";
const x05_96 = "viewer-pane:x05.js:096";
const x05_97 = "text-layer:x05.js:097";
const x05_98 = "outline-row:x05.js:098";
const x05_99 = "toolbar-slot:x05.js:099";
const x05_100 = "page-label:x05.js:100";
const x05_101 = "form-field:x05.js:101";
const x05_102 = "history-entry:x05.js:102";
const x05_103 = "thumbnail-item:x05.js:103";
const x05_104 = "viewer-pane:x05.js:104";
const x05_105 = "text-layer:x05.js:105";
const x05_106 = "outline-row:x05.js:106";
const x05_107 = "toolbar-slot:x05.js:107";
const x05_108 = "page-label:x05.js:108";
const x05_109 = "form-field:x05.js:109";
const x05_110 = "history-entry:x05.js:110";
const x05_111 = "thumbnail-item:x05.js:111";
const x05_112 = "viewer-pane:x05.js:112";
const x05_113 = "text-layer:x05.js:113";
const x05_114 = "outline-row:x05.js:114";
const x05_115 = "toolbar-slot:x05.js:115";
const x05_116 = "page-label:x05.js:116";
const x05_117 = "form-field:x05.js:117";
const x05_118 = "history-entry:x05.js:118";
const x05_119 = "thumbnail-item:x05.js:119";
const x05_120 = "viewer-pane:x05.js:120";
const x05_121 = "text-layer:x05.js:121";
const x05_122 = "outline-row:x05.js:122";
const x05_123 = "toolbar-slot:x05.js:123";
const x05_124 = "page-label:x05.js:124";
const x05_125 = "form-field:x05.js:125";
const x05_126 = "history-entry:x05.js:126";
const x05_127 = "thumbnail-item:x05.js:127";
const x05_128 = "viewer-pane:x05.js:128";
const x05_129 = "text-layer:x05.js:129";
const x05_130 = "outline-row:x05.js:130";
const x05_131 = "toolbar-slot:x05.js:131";
const x05_132 = "page-label:x05.js:132";
const x05_133 = "form-field:x05.js:133";
const x05_134 = "history-entry:x05.js:134";
const x05_135 = "thumbnail-item:x05.js:135";
const x05_136 = "viewer-pane:x05.js:136";
