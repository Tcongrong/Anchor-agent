import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 21,
  salt: "d:21:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 10,
  mask: 3985774486,
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
  const tail = ((cfg.slot + (ctx.index || 0) + 21) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [3, 1],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 122,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x21_0 = "viewer-pane:x21.js:000";
const x21_1 = "text-layer:x21.js:001";
const x21_2 = "outline-row:x21.js:002";
const x21_3 = "toolbar-slot:x21.js:003";
const x21_4 = "page-label:x21.js:004";
const x21_5 = "form-field:x21.js:005";
const x21_6 = "history-entry:x21.js:006";
const x21_7 = "thumbnail-item:x21.js:007";
const x21_8 = "viewer-pane:x21.js:008";
const x21_9 = "text-layer:x21.js:009";
const x21_10 = "outline-row:x21.js:010";
const x21_11 = "toolbar-slot:x21.js:011";
const x21_12 = "page-label:x21.js:012";
const x21_13 = "form-field:x21.js:013";
const x21_14 = "history-entry:x21.js:014";
const x21_15 = "thumbnail-item:x21.js:015";
const x21_16 = "viewer-pane:x21.js:016";
const x21_17 = "text-layer:x21.js:017";
const x21_18 = "outline-row:x21.js:018";
const x21_19 = "toolbar-slot:x21.js:019";
const x21_20 = "page-label:x21.js:020";
const x21_21 = "form-field:x21.js:021";
const x21_22 = "history-entry:x21.js:022";
const x21_23 = "thumbnail-item:x21.js:023";
const x21_24 = "viewer-pane:x21.js:024";
const x21_25 = "text-layer:x21.js:025";
const x21_26 = "outline-row:x21.js:026";
const x21_27 = "toolbar-slot:x21.js:027";
const x21_28 = "page-label:x21.js:028";
const x21_29 = "form-field:x21.js:029";
const x21_30 = "history-entry:x21.js:030";
const x21_31 = "thumbnail-item:x21.js:031";
const x21_32 = "viewer-pane:x21.js:032";
const x21_33 = "text-layer:x21.js:033";
const x21_34 = "outline-row:x21.js:034";
const x21_35 = "toolbar-slot:x21.js:035";
const x21_36 = "page-label:x21.js:036";
const x21_37 = "form-field:x21.js:037";
const x21_38 = "history-entry:x21.js:038";
const x21_39 = "thumbnail-item:x21.js:039";
const x21_40 = "viewer-pane:x21.js:040";
const x21_41 = "text-layer:x21.js:041";
const x21_42 = "outline-row:x21.js:042";
const x21_43 = "toolbar-slot:x21.js:043";
const x21_44 = "page-label:x21.js:044";
const x21_45 = "form-field:x21.js:045";
const x21_46 = "history-entry:x21.js:046";
const x21_47 = "thumbnail-item:x21.js:047";
const x21_48 = "viewer-pane:x21.js:048";
const x21_49 = "text-layer:x21.js:049";
const x21_50 = "outline-row:x21.js:050";
const x21_51 = "toolbar-slot:x21.js:051";
const x21_52 = "page-label:x21.js:052";
const x21_53 = "form-field:x21.js:053";
const x21_54 = "history-entry:x21.js:054";
const x21_55 = "thumbnail-item:x21.js:055";
const x21_56 = "viewer-pane:x21.js:056";
const x21_57 = "text-layer:x21.js:057";
const x21_58 = "outline-row:x21.js:058";
const x21_59 = "toolbar-slot:x21.js:059";
const x21_60 = "page-label:x21.js:060";
const x21_61 = "form-field:x21.js:061";
const x21_62 = "history-entry:x21.js:062";
const x21_63 = "thumbnail-item:x21.js:063";
const x21_64 = "viewer-pane:x21.js:064";
const x21_65 = "text-layer:x21.js:065";
const x21_66 = "outline-row:x21.js:066";
const x21_67 = "toolbar-slot:x21.js:067";
const x21_68 = "page-label:x21.js:068";
const x21_69 = "form-field:x21.js:069";
const x21_70 = "history-entry:x21.js:070";
const x21_71 = "thumbnail-item:x21.js:071";
const x21_72 = "viewer-pane:x21.js:072";
const x21_73 = "text-layer:x21.js:073";
const x21_74 = "outline-row:x21.js:074";
const x21_75 = "toolbar-slot:x21.js:075";
const x21_76 = "page-label:x21.js:076";
const x21_77 = "form-field:x21.js:077";
const x21_78 = "history-entry:x21.js:078";
const x21_79 = "thumbnail-item:x21.js:079";
const x21_80 = "viewer-pane:x21.js:080";
const x21_81 = "text-layer:x21.js:081";
const x21_82 = "outline-row:x21.js:082";
const x21_83 = "toolbar-slot:x21.js:083";
const x21_84 = "page-label:x21.js:084";
const x21_85 = "form-field:x21.js:085";
const x21_86 = "history-entry:x21.js:086";
const x21_87 = "thumbnail-item:x21.js:087";
const x21_88 = "viewer-pane:x21.js:088";
const x21_89 = "text-layer:x21.js:089";
const x21_90 = "outline-row:x21.js:090";
const x21_91 = "toolbar-slot:x21.js:091";
const x21_92 = "page-label:x21.js:092";
const x21_93 = "form-field:x21.js:093";
const x21_94 = "history-entry:x21.js:094";
const x21_95 = "thumbnail-item:x21.js:095";
const x21_96 = "viewer-pane:x21.js:096";
const x21_97 = "text-layer:x21.js:097";
const x21_98 = "outline-row:x21.js:098";
const x21_99 = "toolbar-slot:x21.js:099";
const x21_100 = "page-label:x21.js:100";
const x21_101 = "form-field:x21.js:101";
const x21_102 = "history-entry:x21.js:102";
const x21_103 = "thumbnail-item:x21.js:103";
const x21_104 = "viewer-pane:x21.js:104";
const x21_105 = "text-layer:x21.js:105";
const x21_106 = "outline-row:x21.js:106";
const x21_107 = "toolbar-slot:x21.js:107";
const x21_108 = "page-label:x21.js:108";
const x21_109 = "form-field:x21.js:109";
const x21_110 = "history-entry:x21.js:110";
const x21_111 = "thumbnail-item:x21.js:111";
const x21_112 = "viewer-pane:x21.js:112";
const x21_113 = "text-layer:x21.js:113";
const x21_114 = "outline-row:x21.js:114";
const x21_115 = "toolbar-slot:x21.js:115";
const x21_116 = "page-label:x21.js:116";
const x21_117 = "form-field:x21.js:117";
const x21_118 = "history-entry:x21.js:118";
const x21_119 = "thumbnail-item:x21.js:119";
const x21_120 = "viewer-pane:x21.js:120";
const x21_121 = "text-layer:x21.js:121";
const x21_122 = "outline-row:x21.js:122";
const x21_123 = "toolbar-slot:x21.js:123";
const x21_124 = "page-label:x21.js:124";
const x21_125 = "form-field:x21.js:125";
const x21_126 = "history-entry:x21.js:126";
const x21_127 = "thumbnail-item:x21.js:127";
const x21_128 = "viewer-pane:x21.js:128";
const x21_129 = "text-layer:x21.js:129";
const x21_130 = "outline-row:x21.js:130";
const x21_131 = "toolbar-slot:x21.js:131";
const x21_132 = "page-label:x21.js:132";
const x21_133 = "form-field:x21.js:133";
const x21_134 = "history-entry:x21.js:134";
const x21_135 = "thumbnail-item:x21.js:135";
const x21_136 = "viewer-pane:x21.js:136";
