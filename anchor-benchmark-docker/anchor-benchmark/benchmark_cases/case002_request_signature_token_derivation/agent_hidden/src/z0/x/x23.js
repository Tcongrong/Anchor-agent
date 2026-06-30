import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 24,
  salt: "d:23:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 12,
  mask: 3359147177,
  branch: 4
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
  const tail = ((cfg.slot + (ctx.index || 0) + 23) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [5, 3],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 124,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x23_0 = "viewer-pane:x23.js:000";
const x23_1 = "text-layer:x23.js:001";
const x23_2 = "outline-row:x23.js:002";
const x23_3 = "toolbar-slot:x23.js:003";
const x23_4 = "page-label:x23.js:004";
const x23_5 = "form-field:x23.js:005";
const x23_6 = "history-entry:x23.js:006";
const x23_7 = "thumbnail-item:x23.js:007";
const x23_8 = "viewer-pane:x23.js:008";
const x23_9 = "text-layer:x23.js:009";
const x23_10 = "outline-row:x23.js:010";
const x23_11 = "toolbar-slot:x23.js:011";
const x23_12 = "page-label:x23.js:012";
const x23_13 = "form-field:x23.js:013";
const x23_14 = "history-entry:x23.js:014";
const x23_15 = "thumbnail-item:x23.js:015";
const x23_16 = "viewer-pane:x23.js:016";
const x23_17 = "text-layer:x23.js:017";
const x23_18 = "outline-row:x23.js:018";
const x23_19 = "toolbar-slot:x23.js:019";
const x23_20 = "page-label:x23.js:020";
const x23_21 = "form-field:x23.js:021";
const x23_22 = "history-entry:x23.js:022";
const x23_23 = "thumbnail-item:x23.js:023";
const x23_24 = "viewer-pane:x23.js:024";
const x23_25 = "text-layer:x23.js:025";
const x23_26 = "outline-row:x23.js:026";
const x23_27 = "toolbar-slot:x23.js:027";
const x23_28 = "page-label:x23.js:028";
const x23_29 = "form-field:x23.js:029";
const x23_30 = "history-entry:x23.js:030";
const x23_31 = "thumbnail-item:x23.js:031";
const x23_32 = "viewer-pane:x23.js:032";
const x23_33 = "text-layer:x23.js:033";
const x23_34 = "outline-row:x23.js:034";
const x23_35 = "toolbar-slot:x23.js:035";
const x23_36 = "page-label:x23.js:036";
const x23_37 = "form-field:x23.js:037";
const x23_38 = "history-entry:x23.js:038";
const x23_39 = "thumbnail-item:x23.js:039";
const x23_40 = "viewer-pane:x23.js:040";
const x23_41 = "text-layer:x23.js:041";
const x23_42 = "outline-row:x23.js:042";
const x23_43 = "toolbar-slot:x23.js:043";
const x23_44 = "page-label:x23.js:044";
const x23_45 = "form-field:x23.js:045";
const x23_46 = "history-entry:x23.js:046";
const x23_47 = "thumbnail-item:x23.js:047";
const x23_48 = "viewer-pane:x23.js:048";
const x23_49 = "text-layer:x23.js:049";
const x23_50 = "outline-row:x23.js:050";
const x23_51 = "toolbar-slot:x23.js:051";
const x23_52 = "page-label:x23.js:052";
const x23_53 = "form-field:x23.js:053";
const x23_54 = "history-entry:x23.js:054";
const x23_55 = "thumbnail-item:x23.js:055";
const x23_56 = "viewer-pane:x23.js:056";
const x23_57 = "text-layer:x23.js:057";
const x23_58 = "outline-row:x23.js:058";
const x23_59 = "toolbar-slot:x23.js:059";
const x23_60 = "page-label:x23.js:060";
const x23_61 = "form-field:x23.js:061";
const x23_62 = "history-entry:x23.js:062";
const x23_63 = "thumbnail-item:x23.js:063";
const x23_64 = "viewer-pane:x23.js:064";
const x23_65 = "text-layer:x23.js:065";
const x23_66 = "outline-row:x23.js:066";
const x23_67 = "toolbar-slot:x23.js:067";
const x23_68 = "page-label:x23.js:068";
const x23_69 = "form-field:x23.js:069";
const x23_70 = "history-entry:x23.js:070";
const x23_71 = "thumbnail-item:x23.js:071";
const x23_72 = "viewer-pane:x23.js:072";
const x23_73 = "text-layer:x23.js:073";
const x23_74 = "outline-row:x23.js:074";
const x23_75 = "toolbar-slot:x23.js:075";
const x23_76 = "page-label:x23.js:076";
const x23_77 = "form-field:x23.js:077";
const x23_78 = "history-entry:x23.js:078";
const x23_79 = "thumbnail-item:x23.js:079";
const x23_80 = "viewer-pane:x23.js:080";
const x23_81 = "text-layer:x23.js:081";
const x23_82 = "outline-row:x23.js:082";
const x23_83 = "toolbar-slot:x23.js:083";
const x23_84 = "page-label:x23.js:084";
const x23_85 = "form-field:x23.js:085";
const x23_86 = "history-entry:x23.js:086";
const x23_87 = "thumbnail-item:x23.js:087";
const x23_88 = "viewer-pane:x23.js:088";
const x23_89 = "text-layer:x23.js:089";
const x23_90 = "outline-row:x23.js:090";
const x23_91 = "toolbar-slot:x23.js:091";
const x23_92 = "page-label:x23.js:092";
const x23_93 = "form-field:x23.js:093";
const x23_94 = "history-entry:x23.js:094";
const x23_95 = "thumbnail-item:x23.js:095";
const x23_96 = "viewer-pane:x23.js:096";
const x23_97 = "text-layer:x23.js:097";
const x23_98 = "outline-row:x23.js:098";
const x23_99 = "toolbar-slot:x23.js:099";
const x23_100 = "page-label:x23.js:100";
const x23_101 = "form-field:x23.js:101";
const x23_102 = "history-entry:x23.js:102";
const x23_103 = "thumbnail-item:x23.js:103";
const x23_104 = "viewer-pane:x23.js:104";
const x23_105 = "text-layer:x23.js:105";
const x23_106 = "outline-row:x23.js:106";
const x23_107 = "toolbar-slot:x23.js:107";
const x23_108 = "page-label:x23.js:108";
const x23_109 = "form-field:x23.js:109";
const x23_110 = "history-entry:x23.js:110";
const x23_111 = "thumbnail-item:x23.js:111";
const x23_112 = "viewer-pane:x23.js:112";
const x23_113 = "text-layer:x23.js:113";
const x23_114 = "outline-row:x23.js:114";
const x23_115 = "toolbar-slot:x23.js:115";
const x23_116 = "page-label:x23.js:116";
const x23_117 = "form-field:x23.js:117";
const x23_118 = "history-entry:x23.js:118";
const x23_119 = "thumbnail-item:x23.js:119";
const x23_120 = "viewer-pane:x23.js:120";
const x23_121 = "text-layer:x23.js:121";
const x23_122 = "outline-row:x23.js:122";
const x23_123 = "toolbar-slot:x23.js:123";
const x23_124 = "page-label:x23.js:124";
const x23_125 = "form-field:x23.js:125";
const x23_126 = "history-entry:x23.js:126";
const x23_127 = "thumbnail-item:x23.js:127";
const x23_128 = "viewer-pane:x23.js:128";
const x23_129 = "text-layer:x23.js:129";
const x23_130 = "outline-row:x23.js:130";
const x23_131 = "toolbar-slot:x23.js:131";
const x23_132 = "page-label:x23.js:132";
const x23_133 = "form-field:x23.js:133";
const x23_134 = "history-entry:x23.js:134";
const x23_135 = "thumbnail-item:x23.js:135";
const x23_136 = "viewer-pane:x23.js:136";
