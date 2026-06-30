import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 18,
  salt: "d:18:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 7,
  mask: 317434499,
  branch: 1
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
  const tail = ((cfg.slot + (ctx.index || 0) + 18) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [0, 3],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 119,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x18_0 = "viewer-pane:x18.js:000";
const x18_1 = "text-layer:x18.js:001";
const x18_2 = "outline-row:x18.js:002";
const x18_3 = "toolbar-slot:x18.js:003";
const x18_4 = "page-label:x18.js:004";
const x18_5 = "form-field:x18.js:005";
const x18_6 = "history-entry:x18.js:006";
const x18_7 = "thumbnail-item:x18.js:007";
const x18_8 = "viewer-pane:x18.js:008";
const x18_9 = "text-layer:x18.js:009";
const x18_10 = "outline-row:x18.js:010";
const x18_11 = "toolbar-slot:x18.js:011";
const x18_12 = "page-label:x18.js:012";
const x18_13 = "form-field:x18.js:013";
const x18_14 = "history-entry:x18.js:014";
const x18_15 = "thumbnail-item:x18.js:015";
const x18_16 = "viewer-pane:x18.js:016";
const x18_17 = "text-layer:x18.js:017";
const x18_18 = "outline-row:x18.js:018";
const x18_19 = "toolbar-slot:x18.js:019";
const x18_20 = "page-label:x18.js:020";
const x18_21 = "form-field:x18.js:021";
const x18_22 = "history-entry:x18.js:022";
const x18_23 = "thumbnail-item:x18.js:023";
const x18_24 = "viewer-pane:x18.js:024";
const x18_25 = "text-layer:x18.js:025";
const x18_26 = "outline-row:x18.js:026";
const x18_27 = "toolbar-slot:x18.js:027";
const x18_28 = "page-label:x18.js:028";
const x18_29 = "form-field:x18.js:029";
const x18_30 = "history-entry:x18.js:030";
const x18_31 = "thumbnail-item:x18.js:031";
const x18_32 = "viewer-pane:x18.js:032";
const x18_33 = "text-layer:x18.js:033";
const x18_34 = "outline-row:x18.js:034";
const x18_35 = "toolbar-slot:x18.js:035";
const x18_36 = "page-label:x18.js:036";
const x18_37 = "form-field:x18.js:037";
const x18_38 = "history-entry:x18.js:038";
const x18_39 = "thumbnail-item:x18.js:039";
const x18_40 = "viewer-pane:x18.js:040";
const x18_41 = "text-layer:x18.js:041";
const x18_42 = "outline-row:x18.js:042";
const x18_43 = "toolbar-slot:x18.js:043";
const x18_44 = "page-label:x18.js:044";
const x18_45 = "form-field:x18.js:045";
const x18_46 = "history-entry:x18.js:046";
const x18_47 = "thumbnail-item:x18.js:047";
const x18_48 = "viewer-pane:x18.js:048";
const x18_49 = "text-layer:x18.js:049";
const x18_50 = "outline-row:x18.js:050";
const x18_51 = "toolbar-slot:x18.js:051";
const x18_52 = "page-label:x18.js:052";
const x18_53 = "form-field:x18.js:053";
const x18_54 = "history-entry:x18.js:054";
const x18_55 = "thumbnail-item:x18.js:055";
const x18_56 = "viewer-pane:x18.js:056";
const x18_57 = "text-layer:x18.js:057";
const x18_58 = "outline-row:x18.js:058";
const x18_59 = "toolbar-slot:x18.js:059";
const x18_60 = "page-label:x18.js:060";
const x18_61 = "form-field:x18.js:061";
const x18_62 = "history-entry:x18.js:062";
const x18_63 = "thumbnail-item:x18.js:063";
const x18_64 = "viewer-pane:x18.js:064";
const x18_65 = "text-layer:x18.js:065";
const x18_66 = "outline-row:x18.js:066";
const x18_67 = "toolbar-slot:x18.js:067";
const x18_68 = "page-label:x18.js:068";
const x18_69 = "form-field:x18.js:069";
const x18_70 = "history-entry:x18.js:070";
const x18_71 = "thumbnail-item:x18.js:071";
const x18_72 = "viewer-pane:x18.js:072";
const x18_73 = "text-layer:x18.js:073";
const x18_74 = "outline-row:x18.js:074";
const x18_75 = "toolbar-slot:x18.js:075";
const x18_76 = "page-label:x18.js:076";
const x18_77 = "form-field:x18.js:077";
const x18_78 = "history-entry:x18.js:078";
const x18_79 = "thumbnail-item:x18.js:079";
const x18_80 = "viewer-pane:x18.js:080";
const x18_81 = "text-layer:x18.js:081";
const x18_82 = "outline-row:x18.js:082";
const x18_83 = "toolbar-slot:x18.js:083";
const x18_84 = "page-label:x18.js:084";
const x18_85 = "form-field:x18.js:085";
const x18_86 = "history-entry:x18.js:086";
const x18_87 = "thumbnail-item:x18.js:087";
const x18_88 = "viewer-pane:x18.js:088";
const x18_89 = "text-layer:x18.js:089";
const x18_90 = "outline-row:x18.js:090";
const x18_91 = "toolbar-slot:x18.js:091";
const x18_92 = "page-label:x18.js:092";
const x18_93 = "form-field:x18.js:093";
const x18_94 = "history-entry:x18.js:094";
const x18_95 = "thumbnail-item:x18.js:095";
const x18_96 = "viewer-pane:x18.js:096";
const x18_97 = "text-layer:x18.js:097";
const x18_98 = "outline-row:x18.js:098";
const x18_99 = "toolbar-slot:x18.js:099";
const x18_100 = "page-label:x18.js:100";
const x18_101 = "form-field:x18.js:101";
const x18_102 = "history-entry:x18.js:102";
const x18_103 = "thumbnail-item:x18.js:103";
const x18_104 = "viewer-pane:x18.js:104";
const x18_105 = "text-layer:x18.js:105";
const x18_106 = "outline-row:x18.js:106";
const x18_107 = "toolbar-slot:x18.js:107";
const x18_108 = "page-label:x18.js:108";
const x18_109 = "form-field:x18.js:109";
const x18_110 = "history-entry:x18.js:110";
const x18_111 = "thumbnail-item:x18.js:111";
const x18_112 = "viewer-pane:x18.js:112";
const x18_113 = "text-layer:x18.js:113";
const x18_114 = "outline-row:x18.js:114";
const x18_115 = "toolbar-slot:x18.js:115";
const x18_116 = "page-label:x18.js:116";
const x18_117 = "form-field:x18.js:117";
const x18_118 = "history-entry:x18.js:118";
const x18_119 = "thumbnail-item:x18.js:119";
const x18_120 = "viewer-pane:x18.js:120";
const x18_121 = "text-layer:x18.js:121";
const x18_122 = "outline-row:x18.js:122";
const x18_123 = "toolbar-slot:x18.js:123";
const x18_124 = "page-label:x18.js:124";
const x18_125 = "form-field:x18.js:125";
const x18_126 = "history-entry:x18.js:126";
const x18_127 = "thumbnail-item:x18.js:127";
const x18_128 = "viewer-pane:x18.js:128";
const x18_129 = "text-layer:x18.js:129";
const x18_130 = "outline-row:x18.js:130";
const x18_131 = "toolbar-slot:x18.js:131";
const x18_132 = "page-label:x18.js:132";
const x18_133 = "form-field:x18.js:133";
const x18_134 = "history-entry:x18.js:134";
const x18_135 = "thumbnail-item:x18.js:135";
const x18_136 = "viewer-pane:x18.js:136";
