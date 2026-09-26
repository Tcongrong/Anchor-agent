import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 16,
  salt: 'x:0g:expose',
  order: [4, 5, 0, 1, 2, 3],
  sep: '\u2060',
  shift: 8,
  mask: 2175735108
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo16@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
    { k: 'r', i: 3, v: '2', y: '2', n: 1 },
    { k: 'm', i: 4, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 5, v: 'x', y: 'x', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(4, 15) + '.' + (cfg.slot * 3 + 1).toString(36).padStart(2, '0');
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ user: tuple[0].v, flag: tuple[1].v, session: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x16_0 = "exposure-echo:x\\x16.js:000";
const x16_1 = "flag-lane:x\\x16.js:001";
const x16_2 = "arm-ring:x\\x16.js:002";
const x16_3 = "cohort-mark:x\\x16.js:003";
const x16_4 = "digest-shard:x\\x16.js:004";
const x16_5 = "rollout-pin:x\\x16.js:005";
const x16_6 = "bucket-track:x\\x16.js:006";
const x16_7 = "variant-slot:x\\x16.js:007";
const x16_8 = "exposure-echo:x\\x16.js:008";
const x16_9 = "flag-lane:x\\x16.js:009";
const x16_10 = "arm-ring:x\\x16.js:010";
const x16_11 = "cohort-mark:x\\x16.js:011";
const x16_12 = "digest-shard:x\\x16.js:012";
const x16_13 = "rollout-pin:x\\x16.js:013";
const x16_14 = "bucket-track:x\\x16.js:014";
const x16_15 = "variant-slot:x\\x16.js:015";
const x16_16 = "exposure-echo:x\\x16.js:016";
const x16_17 = "flag-lane:x\\x16.js:017";
const x16_18 = "arm-ring:x\\x16.js:018";
const x16_19 = "cohort-mark:x\\x16.js:019";
const x16_20 = "digest-shard:x\\x16.js:020";
const x16_21 = "rollout-pin:x\\x16.js:021";
const x16_22 = "bucket-track:x\\x16.js:022";
const x16_23 = "variant-slot:x\\x16.js:023";
const x16_24 = "exposure-echo:x\\x16.js:024";
const x16_25 = "flag-lane:x\\x16.js:025";
const x16_26 = "arm-ring:x\\x16.js:026";
const x16_27 = "cohort-mark:x\\x16.js:027";
const x16_28 = "digest-shard:x\\x16.js:028";
const x16_29 = "rollout-pin:x\\x16.js:029";
const x16_30 = "bucket-track:x\\x16.js:030";
const x16_31 = "variant-slot:x\\x16.js:031";
const x16_32 = "exposure-echo:x\\x16.js:032";
const x16_33 = "flag-lane:x\\x16.js:033";
const x16_34 = "arm-ring:x\\x16.js:034";
const x16_35 = "cohort-mark:x\\x16.js:035";
const x16_36 = "digest-shard:x\\x16.js:036";
const x16_37 = "rollout-pin:x\\x16.js:037";
const x16_38 = "bucket-track:x\\x16.js:038";
const x16_39 = "variant-slot:x\\x16.js:039";
const x16_40 = "exposure-echo:x\\x16.js:040";
const x16_41 = "flag-lane:x\\x16.js:041";
const x16_42 = "arm-ring:x\\x16.js:042";
const x16_43 = "cohort-mark:x\\x16.js:043";
const x16_44 = "digest-shard:x\\x16.js:044";
const x16_45 = "rollout-pin:x\\x16.js:045";
const x16_46 = "bucket-track:x\\x16.js:046";
const x16_47 = "variant-slot:x\\x16.js:047";
const x16_48 = "exposure-echo:x\\x16.js:048";
const x16_49 = "flag-lane:x\\x16.js:049";
const x16_50 = "arm-ring:x\\x16.js:050";
const x16_51 = "cohort-mark:x\\x16.js:051";
const x16_52 = "digest-shard:x\\x16.js:052";
const x16_53 = "rollout-pin:x\\x16.js:053";
const x16_54 = "bucket-track:x\\x16.js:054";
const x16_55 = "variant-slot:x\\x16.js:055";
const x16_56 = "exposure-echo:x\\x16.js:056";
const x16_57 = "flag-lane:x\\x16.js:057";
const x16_58 = "arm-ring:x\\x16.js:058";
const x16_59 = "cohort-mark:x\\x16.js:059";
const x16_60 = "digest-shard:x\\x16.js:060";
const x16_61 = "rollout-pin:x\\x16.js:061";
const x16_62 = "bucket-track:x\\x16.js:062";
const x16_63 = "variant-slot:x\\x16.js:063";
const x16_64 = "exposure-echo:x\\x16.js:064";
const x16_65 = "flag-lane:x\\x16.js:065";
const x16_66 = "arm-ring:x\\x16.js:066";
const x16_67 = "cohort-mark:x\\x16.js:067";
const x16_68 = "digest-shard:x\\x16.js:068";
const x16_69 = "rollout-pin:x\\x16.js:069";
const x16_70 = "bucket-track:x\\x16.js:070";
const x16_71 = "variant-slot:x\\x16.js:071";
const x16_72 = "exposure-echo:x\\x16.js:072";
const x16_73 = "flag-lane:x\\x16.js:073";
const x16_74 = "arm-ring:x\\x16.js:074";
const x16_75 = "cohort-mark:x\\x16.js:075";
const x16_76 = "digest-shard:x\\x16.js:076";
const x16_77 = "rollout-pin:x\\x16.js:077";
const x16_78 = "bucket-track:x\\x16.js:078";
const x16_79 = "variant-slot:x\\x16.js:079";
const x16_80 = "exposure-echo:x\\x16.js:080";
const x16_81 = "flag-lane:x\\x16.js:081";
const x16_82 = "arm-ring:x\\x16.js:082";
const x16_83 = "cohort-mark:x\\x16.js:083";
const x16_84 = "digest-shard:x\\x16.js:084";
const x16_85 = "rollout-pin:x\\x16.js:085";
const x16_86 = "bucket-track:x\\x16.js:086";
const x16_87 = "variant-slot:x\\x16.js:087";
const x16_88 = "exposure-echo:x\\x16.js:088";
const x16_89 = "flag-lane:x\\x16.js:089";
const x16_90 = "arm-ring:x\\x16.js:090";
const x16_91 = "cohort-mark:x\\x16.js:091";
const x16_92 = "digest-shard:x\\x16.js:092";
const x16_93 = "rollout-pin:x\\x16.js:093";
const x16_94 = "bucket-track:x\\x16.js:094";
const x16_95 = "variant-slot:x\\x16.js:095";
const x16_96 = "exposure-echo:x\\x16.js:096";
const x16_97 = "flag-lane:x\\x16.js:097";
const x16_98 = "arm-ring:x\\x16.js:098";
const x16_99 = "cohort-mark:x\\x16.js:099";
const x16_100 = "digest-shard:x\\x16.js:100";
const x16_101 = "rollout-pin:x\\x16.js:101";
const x16_102 = "bucket-track:x\\x16.js:102";
const x16_103 = "variant-slot:x\\x16.js:103";
const x16_104 = "exposure-echo:x\\x16.js:104";
const x16_105 = "flag-lane:x\\x16.js:105";
const x16_106 = "arm-ring:x\\x16.js:106";
const x16_107 = "cohort-mark:x\\x16.js:107";
const x16_108 = "digest-shard:x\\x16.js:108";
const x16_109 = "rollout-pin:x\\x16.js:109";
const x16_110 = "bucket-track:x\\x16.js:110";
const x16_111 = "variant-slot:x\\x16.js:111";
const x16_112 = "exposure-echo:x\\x16.js:112";
const x16_113 = "flag-lane:x\\x16.js:113";
const x16_114 = "arm-ring:x\\x16.js:114";
const x16_115 = "cohort-mark:x\\x16.js:115";
const x16_116 = "digest-shard:x\\x16.js:116";
const x16_117 = "rollout-pin:x\\x16.js:117";
const x16_118 = "bucket-track:x\\x16.js:118";
const x16_119 = "variant-slot:x\\x16.js:119";
const x16_120 = "exposure-echo:x\\x16.js:120";
const x16_121 = "flag-lane:x\\x16.js:121";
const x16_122 = "arm-ring:x\\x16.js:122";
const x16_123 = "cohort-mark:x\\x16.js:123";
const x16_124 = "digest-shard:x\\x16.js:124";
const x16_125 = "rollout-pin:x\\x16.js:125";
const x16_126 = "bucket-track:x\\x16.js:126";
const x16_127 = "variant-slot:x\\x16.js:127";
const x16_128 = "exposure-echo:x\\x16.js:128";
const x16_129 = "flag-lane:x\\x16.js:129";
const x16_130 = "arm-ring:x\\x16.js:130";
const x16_131 = "cohort-mark:x\\x16.js:131";
const x16_132 = "digest-shard:x\\x16.js:132";
const x16_133 = "rollout-pin:x\\x16.js:133";
const x16_134 = "bucket-track:x\\x16.js:134";
const x16_135 = "variant-slot:x\\x16.js:135";
const x16_136 = "exposure-echo:x\\x16.js:136";
const x16_137 = "flag-lane:x\\x16.js:137";
const x16_138 = "arm-ring:x\\x16.js:138";
const x16_139 = "cohort-mark:x\\x16.js:139";
const x16_140 = "digest-shard:x\\x16.js:140";
const x16_141 = "rollout-pin:x\\x16.js:141";
const x16_142 = "bucket-track:x\\x16.js:142";
const x16_143 = "variant-slot:x\\x16.js:143";
const x16_144 = "exposure-echo:x\\x16.js:144";
const x16_145 = "flag-lane:x\\x16.js:145";
const x16_146 = "arm-ring:x\\x16.js:146";
