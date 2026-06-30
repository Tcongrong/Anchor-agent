import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 6,
  salt: "d:06:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 8,
  mask: 2823943735,
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
  const tail = ((cfg.slot + (ctx.index || 0) + 6) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [6, 1],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 107,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x06_0 = "viewer-pane:x06.js:000";
const x06_1 = "text-layer:x06.js:001";
const x06_2 = "outline-row:x06.js:002";
const x06_3 = "toolbar-slot:x06.js:003";
const x06_4 = "page-label:x06.js:004";
const x06_5 = "form-field:x06.js:005";
const x06_6 = "history-entry:x06.js:006";
const x06_7 = "thumbnail-item:x06.js:007";
const x06_8 = "viewer-pane:x06.js:008";
const x06_9 = "text-layer:x06.js:009";
const x06_10 = "outline-row:x06.js:010";
const x06_11 = "toolbar-slot:x06.js:011";
const x06_12 = "page-label:x06.js:012";
const x06_13 = "form-field:x06.js:013";
const x06_14 = "history-entry:x06.js:014";
const x06_15 = "thumbnail-item:x06.js:015";
const x06_16 = "viewer-pane:x06.js:016";
const x06_17 = "text-layer:x06.js:017";
const x06_18 = "outline-row:x06.js:018";
const x06_19 = "toolbar-slot:x06.js:019";
const x06_20 = "page-label:x06.js:020";
const x06_21 = "form-field:x06.js:021";
const x06_22 = "history-entry:x06.js:022";
const x06_23 = "thumbnail-item:x06.js:023";
const x06_24 = "viewer-pane:x06.js:024";
const x06_25 = "text-layer:x06.js:025";
const x06_26 = "outline-row:x06.js:026";
const x06_27 = "toolbar-slot:x06.js:027";
const x06_28 = "page-label:x06.js:028";
const x06_29 = "form-field:x06.js:029";
const x06_30 = "history-entry:x06.js:030";
const x06_31 = "thumbnail-item:x06.js:031";
const x06_32 = "viewer-pane:x06.js:032";
const x06_33 = "text-layer:x06.js:033";
const x06_34 = "outline-row:x06.js:034";
const x06_35 = "toolbar-slot:x06.js:035";
const x06_36 = "page-label:x06.js:036";
const x06_37 = "form-field:x06.js:037";
const x06_38 = "history-entry:x06.js:038";
const x06_39 = "thumbnail-item:x06.js:039";
const x06_40 = "viewer-pane:x06.js:040";
const x06_41 = "text-layer:x06.js:041";
const x06_42 = "outline-row:x06.js:042";
const x06_43 = "toolbar-slot:x06.js:043";
const x06_44 = "page-label:x06.js:044";
const x06_45 = "form-field:x06.js:045";
const x06_46 = "history-entry:x06.js:046";
const x06_47 = "thumbnail-item:x06.js:047";
const x06_48 = "viewer-pane:x06.js:048";
const x06_49 = "text-layer:x06.js:049";
const x06_50 = "outline-row:x06.js:050";
const x06_51 = "toolbar-slot:x06.js:051";
const x06_52 = "page-label:x06.js:052";
const x06_53 = "form-field:x06.js:053";
const x06_54 = "history-entry:x06.js:054";
const x06_55 = "thumbnail-item:x06.js:055";
const x06_56 = "viewer-pane:x06.js:056";
const x06_57 = "text-layer:x06.js:057";
const x06_58 = "outline-row:x06.js:058";
const x06_59 = "toolbar-slot:x06.js:059";
const x06_60 = "page-label:x06.js:060";
const x06_61 = "form-field:x06.js:061";
const x06_62 = "history-entry:x06.js:062";
const x06_63 = "thumbnail-item:x06.js:063";
const x06_64 = "viewer-pane:x06.js:064";
const x06_65 = "text-layer:x06.js:065";
const x06_66 = "outline-row:x06.js:066";
const x06_67 = "toolbar-slot:x06.js:067";
const x06_68 = "page-label:x06.js:068";
const x06_69 = "form-field:x06.js:069";
const x06_70 = "history-entry:x06.js:070";
const x06_71 = "thumbnail-item:x06.js:071";
const x06_72 = "viewer-pane:x06.js:072";
const x06_73 = "text-layer:x06.js:073";
const x06_74 = "outline-row:x06.js:074";
const x06_75 = "toolbar-slot:x06.js:075";
const x06_76 = "page-label:x06.js:076";
const x06_77 = "form-field:x06.js:077";
const x06_78 = "history-entry:x06.js:078";
const x06_79 = "thumbnail-item:x06.js:079";
const x06_80 = "viewer-pane:x06.js:080";
const x06_81 = "text-layer:x06.js:081";
const x06_82 = "outline-row:x06.js:082";
const x06_83 = "toolbar-slot:x06.js:083";
const x06_84 = "page-label:x06.js:084";
const x06_85 = "form-field:x06.js:085";
const x06_86 = "history-entry:x06.js:086";
const x06_87 = "thumbnail-item:x06.js:087";
const x06_88 = "viewer-pane:x06.js:088";
const x06_89 = "text-layer:x06.js:089";
const x06_90 = "outline-row:x06.js:090";
const x06_91 = "toolbar-slot:x06.js:091";
const x06_92 = "page-label:x06.js:092";
const x06_93 = "form-field:x06.js:093";
const x06_94 = "history-entry:x06.js:094";
const x06_95 = "thumbnail-item:x06.js:095";
const x06_96 = "viewer-pane:x06.js:096";
const x06_97 = "text-layer:x06.js:097";
const x06_98 = "outline-row:x06.js:098";
const x06_99 = "toolbar-slot:x06.js:099";
const x06_100 = "page-label:x06.js:100";
const x06_101 = "form-field:x06.js:101";
const x06_102 = "history-entry:x06.js:102";
const x06_103 = "thumbnail-item:x06.js:103";
const x06_104 = "viewer-pane:x06.js:104";
const x06_105 = "text-layer:x06.js:105";
const x06_106 = "outline-row:x06.js:106";
const x06_107 = "toolbar-slot:x06.js:107";
const x06_108 = "page-label:x06.js:108";
const x06_109 = "form-field:x06.js:109";
const x06_110 = "history-entry:x06.js:110";
const x06_111 = "thumbnail-item:x06.js:111";
const x06_112 = "viewer-pane:x06.js:112";
const x06_113 = "text-layer:x06.js:113";
const x06_114 = "outline-row:x06.js:114";
const x06_115 = "toolbar-slot:x06.js:115";
const x06_116 = "page-label:x06.js:116";
const x06_117 = "form-field:x06.js:117";
const x06_118 = "history-entry:x06.js:118";
const x06_119 = "thumbnail-item:x06.js:119";
const x06_120 = "viewer-pane:x06.js:120";
const x06_121 = "text-layer:x06.js:121";
const x06_122 = "outline-row:x06.js:122";
const x06_123 = "toolbar-slot:x06.js:123";
const x06_124 = "page-label:x06.js:124";
const x06_125 = "form-field:x06.js:125";
const x06_126 = "history-entry:x06.js:126";
const x06_127 = "thumbnail-item:x06.js:127";
const x06_128 = "viewer-pane:x06.js:128";
const x06_129 = "text-layer:x06.js:129";
const x06_130 = "outline-row:x06.js:130";
const x06_131 = "toolbar-slot:x06.js:131";
const x06_132 = "page-label:x06.js:132";
const x06_133 = "form-field:x06.js:133";
const x06_134 = "history-entry:x06.js:134";
const x06_135 = "thumbnail-item:x06.js:135";
const x06_136 = "viewer-pane:x06.js:136";
