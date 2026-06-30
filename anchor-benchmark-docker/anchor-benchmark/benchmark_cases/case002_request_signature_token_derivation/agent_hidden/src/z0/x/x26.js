import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 27,
  salt: "d:26:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 2,
  mask: 2732519868,
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
  const tail = ((cfg.slot + (ctx.index || 0) + 26) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [8, 1],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 127,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x26_0 = "viewer-pane:x26.js:000";
const x26_1 = "text-layer:x26.js:001";
const x26_2 = "outline-row:x26.js:002";
const x26_3 = "toolbar-slot:x26.js:003";
const x26_4 = "page-label:x26.js:004";
const x26_5 = "form-field:x26.js:005";
const x26_6 = "history-entry:x26.js:006";
const x26_7 = "thumbnail-item:x26.js:007";
const x26_8 = "viewer-pane:x26.js:008";
const x26_9 = "text-layer:x26.js:009";
const x26_10 = "outline-row:x26.js:010";
const x26_11 = "toolbar-slot:x26.js:011";
const x26_12 = "page-label:x26.js:012";
const x26_13 = "form-field:x26.js:013";
const x26_14 = "history-entry:x26.js:014";
const x26_15 = "thumbnail-item:x26.js:015";
const x26_16 = "viewer-pane:x26.js:016";
const x26_17 = "text-layer:x26.js:017";
const x26_18 = "outline-row:x26.js:018";
const x26_19 = "toolbar-slot:x26.js:019";
const x26_20 = "page-label:x26.js:020";
const x26_21 = "form-field:x26.js:021";
const x26_22 = "history-entry:x26.js:022";
const x26_23 = "thumbnail-item:x26.js:023";
const x26_24 = "viewer-pane:x26.js:024";
const x26_25 = "text-layer:x26.js:025";
const x26_26 = "outline-row:x26.js:026";
const x26_27 = "toolbar-slot:x26.js:027";
const x26_28 = "page-label:x26.js:028";
const x26_29 = "form-field:x26.js:029";
const x26_30 = "history-entry:x26.js:030";
const x26_31 = "thumbnail-item:x26.js:031";
const x26_32 = "viewer-pane:x26.js:032";
const x26_33 = "text-layer:x26.js:033";
const x26_34 = "outline-row:x26.js:034";
const x26_35 = "toolbar-slot:x26.js:035";
const x26_36 = "page-label:x26.js:036";
const x26_37 = "form-field:x26.js:037";
const x26_38 = "history-entry:x26.js:038";
const x26_39 = "thumbnail-item:x26.js:039";
const x26_40 = "viewer-pane:x26.js:040";
const x26_41 = "text-layer:x26.js:041";
const x26_42 = "outline-row:x26.js:042";
const x26_43 = "toolbar-slot:x26.js:043";
const x26_44 = "page-label:x26.js:044";
const x26_45 = "form-field:x26.js:045";
const x26_46 = "history-entry:x26.js:046";
const x26_47 = "thumbnail-item:x26.js:047";
const x26_48 = "viewer-pane:x26.js:048";
const x26_49 = "text-layer:x26.js:049";
const x26_50 = "outline-row:x26.js:050";
const x26_51 = "toolbar-slot:x26.js:051";
const x26_52 = "page-label:x26.js:052";
const x26_53 = "form-field:x26.js:053";
const x26_54 = "history-entry:x26.js:054";
const x26_55 = "thumbnail-item:x26.js:055";
const x26_56 = "viewer-pane:x26.js:056";
const x26_57 = "text-layer:x26.js:057";
const x26_58 = "outline-row:x26.js:058";
const x26_59 = "toolbar-slot:x26.js:059";
const x26_60 = "page-label:x26.js:060";
const x26_61 = "form-field:x26.js:061";
const x26_62 = "history-entry:x26.js:062";
const x26_63 = "thumbnail-item:x26.js:063";
const x26_64 = "viewer-pane:x26.js:064";
const x26_65 = "text-layer:x26.js:065";
const x26_66 = "outline-row:x26.js:066";
const x26_67 = "toolbar-slot:x26.js:067";
const x26_68 = "page-label:x26.js:068";
const x26_69 = "form-field:x26.js:069";
const x26_70 = "history-entry:x26.js:070";
const x26_71 = "thumbnail-item:x26.js:071";
const x26_72 = "viewer-pane:x26.js:072";
const x26_73 = "text-layer:x26.js:073";
const x26_74 = "outline-row:x26.js:074";
const x26_75 = "toolbar-slot:x26.js:075";
const x26_76 = "page-label:x26.js:076";
const x26_77 = "form-field:x26.js:077";
const x26_78 = "history-entry:x26.js:078";
const x26_79 = "thumbnail-item:x26.js:079";
const x26_80 = "viewer-pane:x26.js:080";
const x26_81 = "text-layer:x26.js:081";
const x26_82 = "outline-row:x26.js:082";
const x26_83 = "toolbar-slot:x26.js:083";
const x26_84 = "page-label:x26.js:084";
const x26_85 = "form-field:x26.js:085";
const x26_86 = "history-entry:x26.js:086";
const x26_87 = "thumbnail-item:x26.js:087";
const x26_88 = "viewer-pane:x26.js:088";
const x26_89 = "text-layer:x26.js:089";
const x26_90 = "outline-row:x26.js:090";
const x26_91 = "toolbar-slot:x26.js:091";
const x26_92 = "page-label:x26.js:092";
const x26_93 = "form-field:x26.js:093";
const x26_94 = "history-entry:x26.js:094";
const x26_95 = "thumbnail-item:x26.js:095";
const x26_96 = "viewer-pane:x26.js:096";
const x26_97 = "text-layer:x26.js:097";
const x26_98 = "outline-row:x26.js:098";
const x26_99 = "toolbar-slot:x26.js:099";
const x26_100 = "page-label:x26.js:100";
const x26_101 = "form-field:x26.js:101";
const x26_102 = "history-entry:x26.js:102";
const x26_103 = "thumbnail-item:x26.js:103";
const x26_104 = "viewer-pane:x26.js:104";
const x26_105 = "text-layer:x26.js:105";
const x26_106 = "outline-row:x26.js:106";
const x26_107 = "toolbar-slot:x26.js:107";
const x26_108 = "page-label:x26.js:108";
const x26_109 = "form-field:x26.js:109";
const x26_110 = "history-entry:x26.js:110";
const x26_111 = "thumbnail-item:x26.js:111";
const x26_112 = "viewer-pane:x26.js:112";
const x26_113 = "text-layer:x26.js:113";
const x26_114 = "outline-row:x26.js:114";
const x26_115 = "toolbar-slot:x26.js:115";
const x26_116 = "page-label:x26.js:116";
const x26_117 = "form-field:x26.js:117";
const x26_118 = "history-entry:x26.js:118";
const x26_119 = "thumbnail-item:x26.js:119";
const x26_120 = "viewer-pane:x26.js:120";
const x26_121 = "text-layer:x26.js:121";
const x26_122 = "outline-row:x26.js:122";
const x26_123 = "toolbar-slot:x26.js:123";
const x26_124 = "page-label:x26.js:124";
const x26_125 = "form-field:x26.js:125";
const x26_126 = "history-entry:x26.js:126";
const x26_127 = "thumbnail-item:x26.js:127";
const x26_128 = "viewer-pane:x26.js:128";
const x26_129 = "text-layer:x26.js:129";
const x26_130 = "outline-row:x26.js:130";
const x26_131 = "toolbar-slot:x26.js:131";
const x26_132 = "page-label:x26.js:132";
const x26_133 = "form-field:x26.js:133";
const x26_134 = "history-entry:x26.js:134";
const x26_135 = "thumbnail-item:x26.js:135";
const x26_136 = "viewer-pane:x26.js:136";
