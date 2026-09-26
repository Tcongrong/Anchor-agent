import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 20,
  salt: 'x:0k:expose',
  order: [2, 3, 4, 5, 0, 1],
  sep: '\u2060',
  shift: 12,
  mask: 4203543560
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo20@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
    { k: 'r', i: 3, v: '6', y: '6', n: 1 },
    { k: 'm', i: 4, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 5, v: 'x', y: 'x', n: 1 }
  ];
}

function remix2(value, index) {
  return value.slice(2, 12) + '-' + (cfg.slot + 7).toString(36) + 'z9';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ user: tuple[0].v, flag: tuple[1].v, session: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x20_0 = "exposure-echo:x\\x20.js:000";
const x20_1 = "flag-lane:x\\x20.js:001";
const x20_2 = "arm-ring:x\\x20.js:002";
const x20_3 = "cohort-mark:x\\x20.js:003";
const x20_4 = "digest-shard:x\\x20.js:004";
const x20_5 = "rollout-pin:x\\x20.js:005";
const x20_6 = "bucket-track:x\\x20.js:006";
const x20_7 = "variant-slot:x\\x20.js:007";
const x20_8 = "exposure-echo:x\\x20.js:008";
const x20_9 = "flag-lane:x\\x20.js:009";
const x20_10 = "arm-ring:x\\x20.js:010";
const x20_11 = "cohort-mark:x\\x20.js:011";
const x20_12 = "digest-shard:x\\x20.js:012";
const x20_13 = "rollout-pin:x\\x20.js:013";
const x20_14 = "bucket-track:x\\x20.js:014";
const x20_15 = "variant-slot:x\\x20.js:015";
const x20_16 = "exposure-echo:x\\x20.js:016";
const x20_17 = "flag-lane:x\\x20.js:017";
const x20_18 = "arm-ring:x\\x20.js:018";
const x20_19 = "cohort-mark:x\\x20.js:019";
const x20_20 = "digest-shard:x\\x20.js:020";
const x20_21 = "rollout-pin:x\\x20.js:021";
const x20_22 = "bucket-track:x\\x20.js:022";
const x20_23 = "variant-slot:x\\x20.js:023";
const x20_24 = "exposure-echo:x\\x20.js:024";
const x20_25 = "flag-lane:x\\x20.js:025";
const x20_26 = "arm-ring:x\\x20.js:026";
const x20_27 = "cohort-mark:x\\x20.js:027";
const x20_28 = "digest-shard:x\\x20.js:028";
const x20_29 = "rollout-pin:x\\x20.js:029";
const x20_30 = "bucket-track:x\\x20.js:030";
const x20_31 = "variant-slot:x\\x20.js:031";
const x20_32 = "exposure-echo:x\\x20.js:032";
const x20_33 = "flag-lane:x\\x20.js:033";
const x20_34 = "arm-ring:x\\x20.js:034";
const x20_35 = "cohort-mark:x\\x20.js:035";
const x20_36 = "digest-shard:x\\x20.js:036";
const x20_37 = "rollout-pin:x\\x20.js:037";
const x20_38 = "bucket-track:x\\x20.js:038";
const x20_39 = "variant-slot:x\\x20.js:039";
const x20_40 = "exposure-echo:x\\x20.js:040";
const x20_41 = "flag-lane:x\\x20.js:041";
const x20_42 = "arm-ring:x\\x20.js:042";
const x20_43 = "cohort-mark:x\\x20.js:043";
const x20_44 = "digest-shard:x\\x20.js:044";
const x20_45 = "rollout-pin:x\\x20.js:045";
const x20_46 = "bucket-track:x\\x20.js:046";
const x20_47 = "variant-slot:x\\x20.js:047";
const x20_48 = "exposure-echo:x\\x20.js:048";
const x20_49 = "flag-lane:x\\x20.js:049";
const x20_50 = "arm-ring:x\\x20.js:050";
const x20_51 = "cohort-mark:x\\x20.js:051";
const x20_52 = "digest-shard:x\\x20.js:052";
const x20_53 = "rollout-pin:x\\x20.js:053";
const x20_54 = "bucket-track:x\\x20.js:054";
const x20_55 = "variant-slot:x\\x20.js:055";
const x20_56 = "exposure-echo:x\\x20.js:056";
const x20_57 = "flag-lane:x\\x20.js:057";
const x20_58 = "arm-ring:x\\x20.js:058";
const x20_59 = "cohort-mark:x\\x20.js:059";
const x20_60 = "digest-shard:x\\x20.js:060";
const x20_61 = "rollout-pin:x\\x20.js:061";
const x20_62 = "bucket-track:x\\x20.js:062";
const x20_63 = "variant-slot:x\\x20.js:063";
const x20_64 = "exposure-echo:x\\x20.js:064";
const x20_65 = "flag-lane:x\\x20.js:065";
const x20_66 = "arm-ring:x\\x20.js:066";
const x20_67 = "cohort-mark:x\\x20.js:067";
const x20_68 = "digest-shard:x\\x20.js:068";
const x20_69 = "rollout-pin:x\\x20.js:069";
const x20_70 = "bucket-track:x\\x20.js:070";
const x20_71 = "variant-slot:x\\x20.js:071";
const x20_72 = "exposure-echo:x\\x20.js:072";
const x20_73 = "flag-lane:x\\x20.js:073";
const x20_74 = "arm-ring:x\\x20.js:074";
const x20_75 = "cohort-mark:x\\x20.js:075";
const x20_76 = "digest-shard:x\\x20.js:076";
const x20_77 = "rollout-pin:x\\x20.js:077";
const x20_78 = "bucket-track:x\\x20.js:078";
const x20_79 = "variant-slot:x\\x20.js:079";
const x20_80 = "exposure-echo:x\\x20.js:080";
const x20_81 = "flag-lane:x\\x20.js:081";
const x20_82 = "arm-ring:x\\x20.js:082";
const x20_83 = "cohort-mark:x\\x20.js:083";
const x20_84 = "digest-shard:x\\x20.js:084";
const x20_85 = "rollout-pin:x\\x20.js:085";
const x20_86 = "bucket-track:x\\x20.js:086";
const x20_87 = "variant-slot:x\\x20.js:087";
const x20_88 = "exposure-echo:x\\x20.js:088";
const x20_89 = "flag-lane:x\\x20.js:089";
const x20_90 = "arm-ring:x\\x20.js:090";
const x20_91 = "cohort-mark:x\\x20.js:091";
const x20_92 = "digest-shard:x\\x20.js:092";
const x20_93 = "rollout-pin:x\\x20.js:093";
const x20_94 = "bucket-track:x\\x20.js:094";
const x20_95 = "variant-slot:x\\x20.js:095";
const x20_96 = "exposure-echo:x\\x20.js:096";
const x20_97 = "flag-lane:x\\x20.js:097";
const x20_98 = "arm-ring:x\\x20.js:098";
const x20_99 = "cohort-mark:x\\x20.js:099";
const x20_100 = "digest-shard:x\\x20.js:100";
const x20_101 = "rollout-pin:x\\x20.js:101";
const x20_102 = "bucket-track:x\\x20.js:102";
const x20_103 = "variant-slot:x\\x20.js:103";
const x20_104 = "exposure-echo:x\\x20.js:104";
const x20_105 = "flag-lane:x\\x20.js:105";
const x20_106 = "arm-ring:x\\x20.js:106";
const x20_107 = "cohort-mark:x\\x20.js:107";
const x20_108 = "digest-shard:x\\x20.js:108";
const x20_109 = "rollout-pin:x\\x20.js:109";
const x20_110 = "bucket-track:x\\x20.js:110";
const x20_111 = "variant-slot:x\\x20.js:111";
const x20_112 = "exposure-echo:x\\x20.js:112";
const x20_113 = "flag-lane:x\\x20.js:113";
const x20_114 = "arm-ring:x\\x20.js:114";
const x20_115 = "cohort-mark:x\\x20.js:115";
const x20_116 = "digest-shard:x\\x20.js:116";
const x20_117 = "rollout-pin:x\\x20.js:117";
const x20_118 = "bucket-track:x\\x20.js:118";
const x20_119 = "variant-slot:x\\x20.js:119";
const x20_120 = "exposure-echo:x\\x20.js:120";
const x20_121 = "flag-lane:x\\x20.js:121";
const x20_122 = "arm-ring:x\\x20.js:122";
const x20_123 = "cohort-mark:x\\x20.js:123";
const x20_124 = "digest-shard:x\\x20.js:124";
const x20_125 = "rollout-pin:x\\x20.js:125";
const x20_126 = "bucket-track:x\\x20.js:126";
const x20_127 = "variant-slot:x\\x20.js:127";
const x20_128 = "exposure-echo:x\\x20.js:128";
const x20_129 = "flag-lane:x\\x20.js:129";
const x20_130 = "arm-ring:x\\x20.js:130";
const x20_131 = "cohort-mark:x\\x20.js:131";
const x20_132 = "digest-shard:x\\x20.js:132";
const x20_133 = "rollout-pin:x\\x20.js:133";
const x20_134 = "bucket-track:x\\x20.js:134";
const x20_135 = "variant-slot:x\\x20.js:135";
const x20_136 = "exposure-echo:x\\x20.js:136";
const x20_137 = "flag-lane:x\\x20.js:137";
const x20_138 = "arm-ring:x\\x20.js:138";
const x20_139 = "cohort-mark:x\\x20.js:139";
const x20_140 = "digest-shard:x\\x20.js:140";
const x20_141 = "rollout-pin:x\\x20.js:141";
const x20_142 = "bucket-track:x\\x20.js:142";
const x20_143 = "variant-slot:x\\x20.js:143";
const x20_144 = "exposure-echo:x\\x20.js:144";
const x20_145 = "flag-lane:x\\x20.js:145";
const x20_146 = "arm-ring:x\\x20.js:146";
