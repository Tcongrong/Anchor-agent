import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 19,
  salt: "d:19:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 8,
  mask: 2971870260,
  branch: 8
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
  const tail = ((cfg.slot + (ctx.index || 0) + 19) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [1, 4],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 120,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x19_0 = "viewer-pane:x19.js:000";
const x19_1 = "text-layer:x19.js:001";
const x19_2 = "outline-row:x19.js:002";
const x19_3 = "toolbar-slot:x19.js:003";
const x19_4 = "page-label:x19.js:004";
const x19_5 = "form-field:x19.js:005";
const x19_6 = "history-entry:x19.js:006";
const x19_7 = "thumbnail-item:x19.js:007";
const x19_8 = "viewer-pane:x19.js:008";
const x19_9 = "text-layer:x19.js:009";
const x19_10 = "outline-row:x19.js:010";
const x19_11 = "toolbar-slot:x19.js:011";
const x19_12 = "page-label:x19.js:012";
const x19_13 = "form-field:x19.js:013";
const x19_14 = "history-entry:x19.js:014";
const x19_15 = "thumbnail-item:x19.js:015";
const x19_16 = "viewer-pane:x19.js:016";
const x19_17 = "text-layer:x19.js:017";
const x19_18 = "outline-row:x19.js:018";
const x19_19 = "toolbar-slot:x19.js:019";
const x19_20 = "page-label:x19.js:020";
const x19_21 = "form-field:x19.js:021";
const x19_22 = "history-entry:x19.js:022";
const x19_23 = "thumbnail-item:x19.js:023";
const x19_24 = "viewer-pane:x19.js:024";
const x19_25 = "text-layer:x19.js:025";
const x19_26 = "outline-row:x19.js:026";
const x19_27 = "toolbar-slot:x19.js:027";
const x19_28 = "page-label:x19.js:028";
const x19_29 = "form-field:x19.js:029";
const x19_30 = "history-entry:x19.js:030";
const x19_31 = "thumbnail-item:x19.js:031";
const x19_32 = "viewer-pane:x19.js:032";
const x19_33 = "text-layer:x19.js:033";
const x19_34 = "outline-row:x19.js:034";
const x19_35 = "toolbar-slot:x19.js:035";
const x19_36 = "page-label:x19.js:036";
const x19_37 = "form-field:x19.js:037";
const x19_38 = "history-entry:x19.js:038";
const x19_39 = "thumbnail-item:x19.js:039";
const x19_40 = "viewer-pane:x19.js:040";
const x19_41 = "text-layer:x19.js:041";
const x19_42 = "outline-row:x19.js:042";
const x19_43 = "toolbar-slot:x19.js:043";
const x19_44 = "page-label:x19.js:044";
const x19_45 = "form-field:x19.js:045";
const x19_46 = "history-entry:x19.js:046";
const x19_47 = "thumbnail-item:x19.js:047";
const x19_48 = "viewer-pane:x19.js:048";
const x19_49 = "text-layer:x19.js:049";
const x19_50 = "outline-row:x19.js:050";
const x19_51 = "toolbar-slot:x19.js:051";
const x19_52 = "page-label:x19.js:052";
const x19_53 = "form-field:x19.js:053";
const x19_54 = "history-entry:x19.js:054";
const x19_55 = "thumbnail-item:x19.js:055";
const x19_56 = "viewer-pane:x19.js:056";
const x19_57 = "text-layer:x19.js:057";
const x19_58 = "outline-row:x19.js:058";
const x19_59 = "toolbar-slot:x19.js:059";
const x19_60 = "page-label:x19.js:060";
const x19_61 = "form-field:x19.js:061";
const x19_62 = "history-entry:x19.js:062";
const x19_63 = "thumbnail-item:x19.js:063";
const x19_64 = "viewer-pane:x19.js:064";
const x19_65 = "text-layer:x19.js:065";
const x19_66 = "outline-row:x19.js:066";
const x19_67 = "toolbar-slot:x19.js:067";
const x19_68 = "page-label:x19.js:068";
const x19_69 = "form-field:x19.js:069";
const x19_70 = "history-entry:x19.js:070";
const x19_71 = "thumbnail-item:x19.js:071";
const x19_72 = "viewer-pane:x19.js:072";
const x19_73 = "text-layer:x19.js:073";
const x19_74 = "outline-row:x19.js:074";
const x19_75 = "toolbar-slot:x19.js:075";
const x19_76 = "page-label:x19.js:076";
const x19_77 = "form-field:x19.js:077";
const x19_78 = "history-entry:x19.js:078";
const x19_79 = "thumbnail-item:x19.js:079";
const x19_80 = "viewer-pane:x19.js:080";
const x19_81 = "text-layer:x19.js:081";
const x19_82 = "outline-row:x19.js:082";
const x19_83 = "toolbar-slot:x19.js:083";
const x19_84 = "page-label:x19.js:084";
const x19_85 = "form-field:x19.js:085";
const x19_86 = "history-entry:x19.js:086";
const x19_87 = "thumbnail-item:x19.js:087";
const x19_88 = "viewer-pane:x19.js:088";
const x19_89 = "text-layer:x19.js:089";
const x19_90 = "outline-row:x19.js:090";
const x19_91 = "toolbar-slot:x19.js:091";
const x19_92 = "page-label:x19.js:092";
const x19_93 = "form-field:x19.js:093";
const x19_94 = "history-entry:x19.js:094";
const x19_95 = "thumbnail-item:x19.js:095";
const x19_96 = "viewer-pane:x19.js:096";
const x19_97 = "text-layer:x19.js:097";
const x19_98 = "outline-row:x19.js:098";
const x19_99 = "toolbar-slot:x19.js:099";
const x19_100 = "page-label:x19.js:100";
const x19_101 = "form-field:x19.js:101";
const x19_102 = "history-entry:x19.js:102";
const x19_103 = "thumbnail-item:x19.js:103";
const x19_104 = "viewer-pane:x19.js:104";
const x19_105 = "text-layer:x19.js:105";
const x19_106 = "outline-row:x19.js:106";
const x19_107 = "toolbar-slot:x19.js:107";
const x19_108 = "page-label:x19.js:108";
const x19_109 = "form-field:x19.js:109";
const x19_110 = "history-entry:x19.js:110";
const x19_111 = "thumbnail-item:x19.js:111";
const x19_112 = "viewer-pane:x19.js:112";
const x19_113 = "text-layer:x19.js:113";
const x19_114 = "outline-row:x19.js:114";
const x19_115 = "toolbar-slot:x19.js:115";
const x19_116 = "page-label:x19.js:116";
const x19_117 = "form-field:x19.js:117";
const x19_118 = "history-entry:x19.js:118";
const x19_119 = "thumbnail-item:x19.js:119";
const x19_120 = "viewer-pane:x19.js:120";
const x19_121 = "text-layer:x19.js:121";
const x19_122 = "outline-row:x19.js:122";
const x19_123 = "toolbar-slot:x19.js:123";
const x19_124 = "page-label:x19.js:124";
const x19_125 = "form-field:x19.js:125";
const x19_126 = "history-entry:x19.js:126";
const x19_127 = "thumbnail-item:x19.js:127";
const x19_128 = "viewer-pane:x19.js:128";
const x19_129 = "text-layer:x19.js:129";
const x19_130 = "outline-row:x19.js:130";
const x19_131 = "toolbar-slot:x19.js:131";
const x19_132 = "page-label:x19.js:132";
const x19_133 = "form-field:x19.js:133";
const x19_134 = "history-entry:x19.js:134";
const x19_135 = "thumbnail-item:x19.js:135";
const x19_136 = "viewer-pane:x19.js:136";
