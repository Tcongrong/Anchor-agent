import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 29,
  salt: 'x:0t:expose',
  order: [5, 0, 1, 2, 3, 4],
  sep: '\u2061',
  shift: 10,
  mask: 2323661633
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo29@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '1', y: '1', n: 1 },
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
const x29_0 = "exposure-echo:x\\x29.js:000";
const x29_1 = "flag-lane:x\\x29.js:001";
const x29_2 = "arm-ring:x\\x29.js:002";
const x29_3 = "cohort-mark:x\\x29.js:003";
const x29_4 = "digest-shard:x\\x29.js:004";
const x29_5 = "rollout-pin:x\\x29.js:005";
const x29_6 = "bucket-track:x\\x29.js:006";
const x29_7 = "variant-slot:x\\x29.js:007";
const x29_8 = "exposure-echo:x\\x29.js:008";
const x29_9 = "flag-lane:x\\x29.js:009";
const x29_10 = "arm-ring:x\\x29.js:010";
const x29_11 = "cohort-mark:x\\x29.js:011";
const x29_12 = "digest-shard:x\\x29.js:012";
const x29_13 = "rollout-pin:x\\x29.js:013";
const x29_14 = "bucket-track:x\\x29.js:014";
const x29_15 = "variant-slot:x\\x29.js:015";
const x29_16 = "exposure-echo:x\\x29.js:016";
const x29_17 = "flag-lane:x\\x29.js:017";
const x29_18 = "arm-ring:x\\x29.js:018";
const x29_19 = "cohort-mark:x\\x29.js:019";
const x29_20 = "digest-shard:x\\x29.js:020";
const x29_21 = "rollout-pin:x\\x29.js:021";
const x29_22 = "bucket-track:x\\x29.js:022";
const x29_23 = "variant-slot:x\\x29.js:023";
const x29_24 = "exposure-echo:x\\x29.js:024";
const x29_25 = "flag-lane:x\\x29.js:025";
const x29_26 = "arm-ring:x\\x29.js:026";
const x29_27 = "cohort-mark:x\\x29.js:027";
const x29_28 = "digest-shard:x\\x29.js:028";
const x29_29 = "rollout-pin:x\\x29.js:029";
const x29_30 = "bucket-track:x\\x29.js:030";
const x29_31 = "variant-slot:x\\x29.js:031";
const x29_32 = "exposure-echo:x\\x29.js:032";
const x29_33 = "flag-lane:x\\x29.js:033";
const x29_34 = "arm-ring:x\\x29.js:034";
const x29_35 = "cohort-mark:x\\x29.js:035";
const x29_36 = "digest-shard:x\\x29.js:036";
const x29_37 = "rollout-pin:x\\x29.js:037";
const x29_38 = "bucket-track:x\\x29.js:038";
const x29_39 = "variant-slot:x\\x29.js:039";
const x29_40 = "exposure-echo:x\\x29.js:040";
const x29_41 = "flag-lane:x\\x29.js:041";
const x29_42 = "arm-ring:x\\x29.js:042";
const x29_43 = "cohort-mark:x\\x29.js:043";
const x29_44 = "digest-shard:x\\x29.js:044";
const x29_45 = "rollout-pin:x\\x29.js:045";
const x29_46 = "bucket-track:x\\x29.js:046";
const x29_47 = "variant-slot:x\\x29.js:047";
const x29_48 = "exposure-echo:x\\x29.js:048";
const x29_49 = "flag-lane:x\\x29.js:049";
const x29_50 = "arm-ring:x\\x29.js:050";
const x29_51 = "cohort-mark:x\\x29.js:051";
const x29_52 = "digest-shard:x\\x29.js:052";
const x29_53 = "rollout-pin:x\\x29.js:053";
const x29_54 = "bucket-track:x\\x29.js:054";
const x29_55 = "variant-slot:x\\x29.js:055";
const x29_56 = "exposure-echo:x\\x29.js:056";
const x29_57 = "flag-lane:x\\x29.js:057";
const x29_58 = "arm-ring:x\\x29.js:058";
const x29_59 = "cohort-mark:x\\x29.js:059";
const x29_60 = "digest-shard:x\\x29.js:060";
const x29_61 = "rollout-pin:x\\x29.js:061";
const x29_62 = "bucket-track:x\\x29.js:062";
const x29_63 = "variant-slot:x\\x29.js:063";
const x29_64 = "exposure-echo:x\\x29.js:064";
const x29_65 = "flag-lane:x\\x29.js:065";
const x29_66 = "arm-ring:x\\x29.js:066";
const x29_67 = "cohort-mark:x\\x29.js:067";
const x29_68 = "digest-shard:x\\x29.js:068";
const x29_69 = "rollout-pin:x\\x29.js:069";
const x29_70 = "bucket-track:x\\x29.js:070";
const x29_71 = "variant-slot:x\\x29.js:071";
const x29_72 = "exposure-echo:x\\x29.js:072";
const x29_73 = "flag-lane:x\\x29.js:073";
const x29_74 = "arm-ring:x\\x29.js:074";
const x29_75 = "cohort-mark:x\\x29.js:075";
const x29_76 = "digest-shard:x\\x29.js:076";
const x29_77 = "rollout-pin:x\\x29.js:077";
const x29_78 = "bucket-track:x\\x29.js:078";
const x29_79 = "variant-slot:x\\x29.js:079";
const x29_80 = "exposure-echo:x\\x29.js:080";
const x29_81 = "flag-lane:x\\x29.js:081";
const x29_82 = "arm-ring:x\\x29.js:082";
const x29_83 = "cohort-mark:x\\x29.js:083";
const x29_84 = "digest-shard:x\\x29.js:084";
const x29_85 = "rollout-pin:x\\x29.js:085";
const x29_86 = "bucket-track:x\\x29.js:086";
const x29_87 = "variant-slot:x\\x29.js:087";
const x29_88 = "exposure-echo:x\\x29.js:088";
const x29_89 = "flag-lane:x\\x29.js:089";
const x29_90 = "arm-ring:x\\x29.js:090";
const x29_91 = "cohort-mark:x\\x29.js:091";
const x29_92 = "digest-shard:x\\x29.js:092";
const x29_93 = "rollout-pin:x\\x29.js:093";
const x29_94 = "bucket-track:x\\x29.js:094";
const x29_95 = "variant-slot:x\\x29.js:095";
const x29_96 = "exposure-echo:x\\x29.js:096";
const x29_97 = "flag-lane:x\\x29.js:097";
const x29_98 = "arm-ring:x\\x29.js:098";
const x29_99 = "cohort-mark:x\\x29.js:099";
const x29_100 = "digest-shard:x\\x29.js:100";
const x29_101 = "rollout-pin:x\\x29.js:101";
const x29_102 = "bucket-track:x\\x29.js:102";
const x29_103 = "variant-slot:x\\x29.js:103";
const x29_104 = "exposure-echo:x\\x29.js:104";
const x29_105 = "flag-lane:x\\x29.js:105";
const x29_106 = "arm-ring:x\\x29.js:106";
const x29_107 = "cohort-mark:x\\x29.js:107";
const x29_108 = "digest-shard:x\\x29.js:108";
const x29_109 = "rollout-pin:x\\x29.js:109";
const x29_110 = "bucket-track:x\\x29.js:110";
const x29_111 = "variant-slot:x\\x29.js:111";
const x29_112 = "exposure-echo:x\\x29.js:112";
const x29_113 = "flag-lane:x\\x29.js:113";
const x29_114 = "arm-ring:x\\x29.js:114";
const x29_115 = "cohort-mark:x\\x29.js:115";
const x29_116 = "digest-shard:x\\x29.js:116";
const x29_117 = "rollout-pin:x\\x29.js:117";
const x29_118 = "bucket-track:x\\x29.js:118";
const x29_119 = "variant-slot:x\\x29.js:119";
const x29_120 = "exposure-echo:x\\x29.js:120";
const x29_121 = "flag-lane:x\\x29.js:121";
const x29_122 = "arm-ring:x\\x29.js:122";
const x29_123 = "cohort-mark:x\\x29.js:123";
const x29_124 = "digest-shard:x\\x29.js:124";
const x29_125 = "rollout-pin:x\\x29.js:125";
const x29_126 = "bucket-track:x\\x29.js:126";
const x29_127 = "variant-slot:x\\x29.js:127";
const x29_128 = "exposure-echo:x\\x29.js:128";
const x29_129 = "flag-lane:x\\x29.js:129";
const x29_130 = "arm-ring:x\\x29.js:130";
const x29_131 = "cohort-mark:x\\x29.js:131";
const x29_132 = "digest-shard:x\\x29.js:132";
const x29_133 = "rollout-pin:x\\x29.js:133";
const x29_134 = "bucket-track:x\\x29.js:134";
const x29_135 = "variant-slot:x\\x29.js:135";
const x29_136 = "exposure-echo:x\\x29.js:136";
const x29_137 = "flag-lane:x\\x29.js:137";
const x29_138 = "arm-ring:x\\x29.js:138";
const x29_139 = "cohort-mark:x\\x29.js:139";
const x29_140 = "digest-shard:x\\x29.js:140";
const x29_141 = "rollout-pin:x\\x29.js:141";
const x29_142 = "bucket-track:x\\x29.js:142";
const x29_143 = "variant-slot:x\\x29.js:143";
const x29_144 = "exposure-echo:x\\x29.js:144";
const x29_145 = "flag-lane:x\\x29.js:145";
const x29_146 = "arm-ring:x\\x29.js:146";
