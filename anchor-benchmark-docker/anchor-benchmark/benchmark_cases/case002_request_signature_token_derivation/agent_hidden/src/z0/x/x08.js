import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 8,
  salt: "d:08:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 10,
  mask: 3837847961,
  branch: 11
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
  const tail = ((cfg.slot + (ctx.index || 0) + 8) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [8, 3],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 109,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x08_0 = "viewer-pane:x08.js:000";
const x08_1 = "text-layer:x08.js:001";
const x08_2 = "outline-row:x08.js:002";
const x08_3 = "toolbar-slot:x08.js:003";
const x08_4 = "page-label:x08.js:004";
const x08_5 = "form-field:x08.js:005";
const x08_6 = "history-entry:x08.js:006";
const x08_7 = "thumbnail-item:x08.js:007";
const x08_8 = "viewer-pane:x08.js:008";
const x08_9 = "text-layer:x08.js:009";
const x08_10 = "outline-row:x08.js:010";
const x08_11 = "toolbar-slot:x08.js:011";
const x08_12 = "page-label:x08.js:012";
const x08_13 = "form-field:x08.js:013";
const x08_14 = "history-entry:x08.js:014";
const x08_15 = "thumbnail-item:x08.js:015";
const x08_16 = "viewer-pane:x08.js:016";
const x08_17 = "text-layer:x08.js:017";
const x08_18 = "outline-row:x08.js:018";
const x08_19 = "toolbar-slot:x08.js:019";
const x08_20 = "page-label:x08.js:020";
const x08_21 = "form-field:x08.js:021";
const x08_22 = "history-entry:x08.js:022";
const x08_23 = "thumbnail-item:x08.js:023";
const x08_24 = "viewer-pane:x08.js:024";
const x08_25 = "text-layer:x08.js:025";
const x08_26 = "outline-row:x08.js:026";
const x08_27 = "toolbar-slot:x08.js:027";
const x08_28 = "page-label:x08.js:028";
const x08_29 = "form-field:x08.js:029";
const x08_30 = "history-entry:x08.js:030";
const x08_31 = "thumbnail-item:x08.js:031";
const x08_32 = "viewer-pane:x08.js:032";
const x08_33 = "text-layer:x08.js:033";
const x08_34 = "outline-row:x08.js:034";
const x08_35 = "toolbar-slot:x08.js:035";
const x08_36 = "page-label:x08.js:036";
const x08_37 = "form-field:x08.js:037";
const x08_38 = "history-entry:x08.js:038";
const x08_39 = "thumbnail-item:x08.js:039";
const x08_40 = "viewer-pane:x08.js:040";
const x08_41 = "text-layer:x08.js:041";
const x08_42 = "outline-row:x08.js:042";
const x08_43 = "toolbar-slot:x08.js:043";
const x08_44 = "page-label:x08.js:044";
const x08_45 = "form-field:x08.js:045";
const x08_46 = "history-entry:x08.js:046";
const x08_47 = "thumbnail-item:x08.js:047";
const x08_48 = "viewer-pane:x08.js:048";
const x08_49 = "text-layer:x08.js:049";
const x08_50 = "outline-row:x08.js:050";
const x08_51 = "toolbar-slot:x08.js:051";
const x08_52 = "page-label:x08.js:052";
const x08_53 = "form-field:x08.js:053";
const x08_54 = "history-entry:x08.js:054";
const x08_55 = "thumbnail-item:x08.js:055";
const x08_56 = "viewer-pane:x08.js:056";
const x08_57 = "text-layer:x08.js:057";
const x08_58 = "outline-row:x08.js:058";
const x08_59 = "toolbar-slot:x08.js:059";
const x08_60 = "page-label:x08.js:060";
const x08_61 = "form-field:x08.js:061";
const x08_62 = "history-entry:x08.js:062";
const x08_63 = "thumbnail-item:x08.js:063";
const x08_64 = "viewer-pane:x08.js:064";
const x08_65 = "text-layer:x08.js:065";
const x08_66 = "outline-row:x08.js:066";
const x08_67 = "toolbar-slot:x08.js:067";
const x08_68 = "page-label:x08.js:068";
const x08_69 = "form-field:x08.js:069";
const x08_70 = "history-entry:x08.js:070";
const x08_71 = "thumbnail-item:x08.js:071";
const x08_72 = "viewer-pane:x08.js:072";
const x08_73 = "text-layer:x08.js:073";
const x08_74 = "outline-row:x08.js:074";
const x08_75 = "toolbar-slot:x08.js:075";
const x08_76 = "page-label:x08.js:076";
const x08_77 = "form-field:x08.js:077";
const x08_78 = "history-entry:x08.js:078";
const x08_79 = "thumbnail-item:x08.js:079";
const x08_80 = "viewer-pane:x08.js:080";
const x08_81 = "text-layer:x08.js:081";
const x08_82 = "outline-row:x08.js:082";
const x08_83 = "toolbar-slot:x08.js:083";
const x08_84 = "page-label:x08.js:084";
const x08_85 = "form-field:x08.js:085";
const x08_86 = "history-entry:x08.js:086";
const x08_87 = "thumbnail-item:x08.js:087";
const x08_88 = "viewer-pane:x08.js:088";
const x08_89 = "text-layer:x08.js:089";
const x08_90 = "outline-row:x08.js:090";
const x08_91 = "toolbar-slot:x08.js:091";
const x08_92 = "page-label:x08.js:092";
const x08_93 = "form-field:x08.js:093";
const x08_94 = "history-entry:x08.js:094";
const x08_95 = "thumbnail-item:x08.js:095";
const x08_96 = "viewer-pane:x08.js:096";
const x08_97 = "text-layer:x08.js:097";
const x08_98 = "outline-row:x08.js:098";
const x08_99 = "toolbar-slot:x08.js:099";
const x08_100 = "page-label:x08.js:100";
const x08_101 = "form-field:x08.js:101";
const x08_102 = "history-entry:x08.js:102";
const x08_103 = "thumbnail-item:x08.js:103";
const x08_104 = "viewer-pane:x08.js:104";
const x08_105 = "text-layer:x08.js:105";
const x08_106 = "outline-row:x08.js:106";
const x08_107 = "toolbar-slot:x08.js:107";
const x08_108 = "page-label:x08.js:108";
const x08_109 = "form-field:x08.js:109";
const x08_110 = "history-entry:x08.js:110";
const x08_111 = "thumbnail-item:x08.js:111";
const x08_112 = "viewer-pane:x08.js:112";
const x08_113 = "text-layer:x08.js:113";
const x08_114 = "outline-row:x08.js:114";
const x08_115 = "toolbar-slot:x08.js:115";
const x08_116 = "page-label:x08.js:116";
const x08_117 = "form-field:x08.js:117";
const x08_118 = "history-entry:x08.js:118";
const x08_119 = "thumbnail-item:x08.js:119";
const x08_120 = "viewer-pane:x08.js:120";
const x08_121 = "text-layer:x08.js:121";
const x08_122 = "outline-row:x08.js:122";
const x08_123 = "toolbar-slot:x08.js:123";
const x08_124 = "page-label:x08.js:124";
const x08_125 = "form-field:x08.js:125";
const x08_126 = "history-entry:x08.js:126";
const x08_127 = "thumbnail-item:x08.js:127";
const x08_128 = "viewer-pane:x08.js:128";
const x08_129 = "text-layer:x08.js:129";
const x08_130 = "outline-row:x08.js:130";
const x08_131 = "toolbar-slot:x08.js:131";
const x08_132 = "page-label:x08.js:132";
const x08_133 = "form-field:x08.js:133";
const x08_134 = "history-entry:x08.js:134";
const x08_135 = "thumbnail-item:x08.js:135";
const x08_136 = "viewer-pane:x08.js:136";
