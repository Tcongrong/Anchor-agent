import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 17,
  salt: 'x:0h:expose',
  order: [5, 0, 1, 2, 3, 4],
  sep: '\u2061',
  shift: 9,
  mask: 535203573
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo17@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '3', y: '3', n: 1 },
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
const x17_0 = "exposure-echo:x\\x17.js:000";
const x17_1 = "flag-lane:x\\x17.js:001";
const x17_2 = "arm-ring:x\\x17.js:002";
const x17_3 = "cohort-mark:x\\x17.js:003";
const x17_4 = "digest-shard:x\\x17.js:004";
const x17_5 = "rollout-pin:x\\x17.js:005";
const x17_6 = "bucket-track:x\\x17.js:006";
const x17_7 = "variant-slot:x\\x17.js:007";
const x17_8 = "exposure-echo:x\\x17.js:008";
const x17_9 = "flag-lane:x\\x17.js:009";
const x17_10 = "arm-ring:x\\x17.js:010";
const x17_11 = "cohort-mark:x\\x17.js:011";
const x17_12 = "digest-shard:x\\x17.js:012";
const x17_13 = "rollout-pin:x\\x17.js:013";
const x17_14 = "bucket-track:x\\x17.js:014";
const x17_15 = "variant-slot:x\\x17.js:015";
const x17_16 = "exposure-echo:x\\x17.js:016";
const x17_17 = "flag-lane:x\\x17.js:017";
const x17_18 = "arm-ring:x\\x17.js:018";
const x17_19 = "cohort-mark:x\\x17.js:019";
const x17_20 = "digest-shard:x\\x17.js:020";
const x17_21 = "rollout-pin:x\\x17.js:021";
const x17_22 = "bucket-track:x\\x17.js:022";
const x17_23 = "variant-slot:x\\x17.js:023";
const x17_24 = "exposure-echo:x\\x17.js:024";
const x17_25 = "flag-lane:x\\x17.js:025";
const x17_26 = "arm-ring:x\\x17.js:026";
const x17_27 = "cohort-mark:x\\x17.js:027";
const x17_28 = "digest-shard:x\\x17.js:028";
const x17_29 = "rollout-pin:x\\x17.js:029";
const x17_30 = "bucket-track:x\\x17.js:030";
const x17_31 = "variant-slot:x\\x17.js:031";
const x17_32 = "exposure-echo:x\\x17.js:032";
const x17_33 = "flag-lane:x\\x17.js:033";
const x17_34 = "arm-ring:x\\x17.js:034";
const x17_35 = "cohort-mark:x\\x17.js:035";
const x17_36 = "digest-shard:x\\x17.js:036";
const x17_37 = "rollout-pin:x\\x17.js:037";
const x17_38 = "bucket-track:x\\x17.js:038";
const x17_39 = "variant-slot:x\\x17.js:039";
const x17_40 = "exposure-echo:x\\x17.js:040";
const x17_41 = "flag-lane:x\\x17.js:041";
const x17_42 = "arm-ring:x\\x17.js:042";
const x17_43 = "cohort-mark:x\\x17.js:043";
const x17_44 = "digest-shard:x\\x17.js:044";
const x17_45 = "rollout-pin:x\\x17.js:045";
const x17_46 = "bucket-track:x\\x17.js:046";
const x17_47 = "variant-slot:x\\x17.js:047";
const x17_48 = "exposure-echo:x\\x17.js:048";
const x17_49 = "flag-lane:x\\x17.js:049";
const x17_50 = "arm-ring:x\\x17.js:050";
const x17_51 = "cohort-mark:x\\x17.js:051";
const x17_52 = "digest-shard:x\\x17.js:052";
const x17_53 = "rollout-pin:x\\x17.js:053";
const x17_54 = "bucket-track:x\\x17.js:054";
const x17_55 = "variant-slot:x\\x17.js:055";
const x17_56 = "exposure-echo:x\\x17.js:056";
const x17_57 = "flag-lane:x\\x17.js:057";
const x17_58 = "arm-ring:x\\x17.js:058";
const x17_59 = "cohort-mark:x\\x17.js:059";
const x17_60 = "digest-shard:x\\x17.js:060";
const x17_61 = "rollout-pin:x\\x17.js:061";
const x17_62 = "bucket-track:x\\x17.js:062";
const x17_63 = "variant-slot:x\\x17.js:063";
const x17_64 = "exposure-echo:x\\x17.js:064";
const x17_65 = "flag-lane:x\\x17.js:065";
const x17_66 = "arm-ring:x\\x17.js:066";
const x17_67 = "cohort-mark:x\\x17.js:067";
const x17_68 = "digest-shard:x\\x17.js:068";
const x17_69 = "rollout-pin:x\\x17.js:069";
const x17_70 = "bucket-track:x\\x17.js:070";
const x17_71 = "variant-slot:x\\x17.js:071";
const x17_72 = "exposure-echo:x\\x17.js:072";
const x17_73 = "flag-lane:x\\x17.js:073";
const x17_74 = "arm-ring:x\\x17.js:074";
const x17_75 = "cohort-mark:x\\x17.js:075";
const x17_76 = "digest-shard:x\\x17.js:076";
const x17_77 = "rollout-pin:x\\x17.js:077";
const x17_78 = "bucket-track:x\\x17.js:078";
const x17_79 = "variant-slot:x\\x17.js:079";
const x17_80 = "exposure-echo:x\\x17.js:080";
const x17_81 = "flag-lane:x\\x17.js:081";
const x17_82 = "arm-ring:x\\x17.js:082";
const x17_83 = "cohort-mark:x\\x17.js:083";
const x17_84 = "digest-shard:x\\x17.js:084";
const x17_85 = "rollout-pin:x\\x17.js:085";
const x17_86 = "bucket-track:x\\x17.js:086";
const x17_87 = "variant-slot:x\\x17.js:087";
const x17_88 = "exposure-echo:x\\x17.js:088";
const x17_89 = "flag-lane:x\\x17.js:089";
const x17_90 = "arm-ring:x\\x17.js:090";
const x17_91 = "cohort-mark:x\\x17.js:091";
const x17_92 = "digest-shard:x\\x17.js:092";
const x17_93 = "rollout-pin:x\\x17.js:093";
const x17_94 = "bucket-track:x\\x17.js:094";
const x17_95 = "variant-slot:x\\x17.js:095";
const x17_96 = "exposure-echo:x\\x17.js:096";
const x17_97 = "flag-lane:x\\x17.js:097";
const x17_98 = "arm-ring:x\\x17.js:098";
const x17_99 = "cohort-mark:x\\x17.js:099";
const x17_100 = "digest-shard:x\\x17.js:100";
const x17_101 = "rollout-pin:x\\x17.js:101";
const x17_102 = "bucket-track:x\\x17.js:102";
const x17_103 = "variant-slot:x\\x17.js:103";
const x17_104 = "exposure-echo:x\\x17.js:104";
const x17_105 = "flag-lane:x\\x17.js:105";
const x17_106 = "arm-ring:x\\x17.js:106";
const x17_107 = "cohort-mark:x\\x17.js:107";
const x17_108 = "digest-shard:x\\x17.js:108";
const x17_109 = "rollout-pin:x\\x17.js:109";
const x17_110 = "bucket-track:x\\x17.js:110";
const x17_111 = "variant-slot:x\\x17.js:111";
const x17_112 = "exposure-echo:x\\x17.js:112";
const x17_113 = "flag-lane:x\\x17.js:113";
const x17_114 = "arm-ring:x\\x17.js:114";
const x17_115 = "cohort-mark:x\\x17.js:115";
const x17_116 = "digest-shard:x\\x17.js:116";
const x17_117 = "rollout-pin:x\\x17.js:117";
const x17_118 = "bucket-track:x\\x17.js:118";
const x17_119 = "variant-slot:x\\x17.js:119";
const x17_120 = "exposure-echo:x\\x17.js:120";
const x17_121 = "flag-lane:x\\x17.js:121";
const x17_122 = "arm-ring:x\\x17.js:122";
const x17_123 = "cohort-mark:x\\x17.js:123";
const x17_124 = "digest-shard:x\\x17.js:124";
const x17_125 = "rollout-pin:x\\x17.js:125";
const x17_126 = "bucket-track:x\\x17.js:126";
const x17_127 = "variant-slot:x\\x17.js:127";
const x17_128 = "exposure-echo:x\\x17.js:128";
const x17_129 = "flag-lane:x\\x17.js:129";
const x17_130 = "arm-ring:x\\x17.js:130";
const x17_131 = "cohort-mark:x\\x17.js:131";
const x17_132 = "digest-shard:x\\x17.js:132";
const x17_133 = "rollout-pin:x\\x17.js:133";
const x17_134 = "bucket-track:x\\x17.js:134";
const x17_135 = "variant-slot:x\\x17.js:135";
const x17_136 = "exposure-echo:x\\x17.js:136";
const x17_137 = "flag-lane:x\\x17.js:137";
const x17_138 = "arm-ring:x\\x17.js:138";
const x17_139 = "cohort-mark:x\\x17.js:139";
const x17_140 = "digest-shard:x\\x17.js:140";
const x17_141 = "rollout-pin:x\\x17.js:141";
const x17_142 = "bucket-track:x\\x17.js:142";
const x17_143 = "variant-slot:x\\x17.js:143";
const x17_144 = "exposure-echo:x\\x17.js:144";
const x17_145 = "flag-lane:x\\x17.js:145";
const x17_146 = "arm-ring:x\\x17.js:146";
