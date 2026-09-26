import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 2,
  salt: 'x:02:expose',
  order: [2, 3, 4, 5, 0, 1],
  sep: '\u2062',
  shift: 5,
  mask: 3668340118
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo2@flags.dev', y: 'shadow', n: 15 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
    { k: 'r', i: 3, v: '2', y: '2', n: 1 },
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
const x02_0 = "exposure-echo:x\\x02.js:000";
const x02_1 = "flag-lane:x\\x02.js:001";
const x02_2 = "arm-ring:x\\x02.js:002";
const x02_3 = "cohort-mark:x\\x02.js:003";
const x02_4 = "digest-shard:x\\x02.js:004";
const x02_5 = "rollout-pin:x\\x02.js:005";
const x02_6 = "bucket-track:x\\x02.js:006";
const x02_7 = "variant-slot:x\\x02.js:007";
const x02_8 = "exposure-echo:x\\x02.js:008";
const x02_9 = "flag-lane:x\\x02.js:009";
const x02_10 = "arm-ring:x\\x02.js:010";
const x02_11 = "cohort-mark:x\\x02.js:011";
const x02_12 = "digest-shard:x\\x02.js:012";
const x02_13 = "rollout-pin:x\\x02.js:013";
const x02_14 = "bucket-track:x\\x02.js:014";
const x02_15 = "variant-slot:x\\x02.js:015";
const x02_16 = "exposure-echo:x\\x02.js:016";
const x02_17 = "flag-lane:x\\x02.js:017";
const x02_18 = "arm-ring:x\\x02.js:018";
const x02_19 = "cohort-mark:x\\x02.js:019";
const x02_20 = "digest-shard:x\\x02.js:020";
const x02_21 = "rollout-pin:x\\x02.js:021";
const x02_22 = "bucket-track:x\\x02.js:022";
const x02_23 = "variant-slot:x\\x02.js:023";
const x02_24 = "exposure-echo:x\\x02.js:024";
const x02_25 = "flag-lane:x\\x02.js:025";
const x02_26 = "arm-ring:x\\x02.js:026";
const x02_27 = "cohort-mark:x\\x02.js:027";
const x02_28 = "digest-shard:x\\x02.js:028";
const x02_29 = "rollout-pin:x\\x02.js:029";
const x02_30 = "bucket-track:x\\x02.js:030";
const x02_31 = "variant-slot:x\\x02.js:031";
const x02_32 = "exposure-echo:x\\x02.js:032";
const x02_33 = "flag-lane:x\\x02.js:033";
const x02_34 = "arm-ring:x\\x02.js:034";
const x02_35 = "cohort-mark:x\\x02.js:035";
const x02_36 = "digest-shard:x\\x02.js:036";
const x02_37 = "rollout-pin:x\\x02.js:037";
const x02_38 = "bucket-track:x\\x02.js:038";
const x02_39 = "variant-slot:x\\x02.js:039";
const x02_40 = "exposure-echo:x\\x02.js:040";
const x02_41 = "flag-lane:x\\x02.js:041";
const x02_42 = "arm-ring:x\\x02.js:042";
const x02_43 = "cohort-mark:x\\x02.js:043";
const x02_44 = "digest-shard:x\\x02.js:044";
const x02_45 = "rollout-pin:x\\x02.js:045";
const x02_46 = "bucket-track:x\\x02.js:046";
const x02_47 = "variant-slot:x\\x02.js:047";
const x02_48 = "exposure-echo:x\\x02.js:048";
const x02_49 = "flag-lane:x\\x02.js:049";
const x02_50 = "arm-ring:x\\x02.js:050";
const x02_51 = "cohort-mark:x\\x02.js:051";
const x02_52 = "digest-shard:x\\x02.js:052";
const x02_53 = "rollout-pin:x\\x02.js:053";
const x02_54 = "bucket-track:x\\x02.js:054";
const x02_55 = "variant-slot:x\\x02.js:055";
const x02_56 = "exposure-echo:x\\x02.js:056";
const x02_57 = "flag-lane:x\\x02.js:057";
const x02_58 = "arm-ring:x\\x02.js:058";
const x02_59 = "cohort-mark:x\\x02.js:059";
const x02_60 = "digest-shard:x\\x02.js:060";
const x02_61 = "rollout-pin:x\\x02.js:061";
const x02_62 = "bucket-track:x\\x02.js:062";
const x02_63 = "variant-slot:x\\x02.js:063";
const x02_64 = "exposure-echo:x\\x02.js:064";
const x02_65 = "flag-lane:x\\x02.js:065";
const x02_66 = "arm-ring:x\\x02.js:066";
const x02_67 = "cohort-mark:x\\x02.js:067";
const x02_68 = "digest-shard:x\\x02.js:068";
const x02_69 = "rollout-pin:x\\x02.js:069";
const x02_70 = "bucket-track:x\\x02.js:070";
const x02_71 = "variant-slot:x\\x02.js:071";
const x02_72 = "exposure-echo:x\\x02.js:072";
const x02_73 = "flag-lane:x\\x02.js:073";
const x02_74 = "arm-ring:x\\x02.js:074";
const x02_75 = "cohort-mark:x\\x02.js:075";
const x02_76 = "digest-shard:x\\x02.js:076";
const x02_77 = "rollout-pin:x\\x02.js:077";
const x02_78 = "bucket-track:x\\x02.js:078";
const x02_79 = "variant-slot:x\\x02.js:079";
const x02_80 = "exposure-echo:x\\x02.js:080";
const x02_81 = "flag-lane:x\\x02.js:081";
const x02_82 = "arm-ring:x\\x02.js:082";
const x02_83 = "cohort-mark:x\\x02.js:083";
const x02_84 = "digest-shard:x\\x02.js:084";
const x02_85 = "rollout-pin:x\\x02.js:085";
const x02_86 = "bucket-track:x\\x02.js:086";
const x02_87 = "variant-slot:x\\x02.js:087";
const x02_88 = "exposure-echo:x\\x02.js:088";
const x02_89 = "flag-lane:x\\x02.js:089";
const x02_90 = "arm-ring:x\\x02.js:090";
const x02_91 = "cohort-mark:x\\x02.js:091";
const x02_92 = "digest-shard:x\\x02.js:092";
const x02_93 = "rollout-pin:x\\x02.js:093";
const x02_94 = "bucket-track:x\\x02.js:094";
const x02_95 = "variant-slot:x\\x02.js:095";
const x02_96 = "exposure-echo:x\\x02.js:096";
const x02_97 = "flag-lane:x\\x02.js:097";
const x02_98 = "arm-ring:x\\x02.js:098";
const x02_99 = "cohort-mark:x\\x02.js:099";
const x02_100 = "digest-shard:x\\x02.js:100";
const x02_101 = "rollout-pin:x\\x02.js:101";
const x02_102 = "bucket-track:x\\x02.js:102";
const x02_103 = "variant-slot:x\\x02.js:103";
const x02_104 = "exposure-echo:x\\x02.js:104";
const x02_105 = "flag-lane:x\\x02.js:105";
const x02_106 = "arm-ring:x\\x02.js:106";
const x02_107 = "cohort-mark:x\\x02.js:107";
const x02_108 = "digest-shard:x\\x02.js:108";
const x02_109 = "rollout-pin:x\\x02.js:109";
const x02_110 = "bucket-track:x\\x02.js:110";
const x02_111 = "variant-slot:x\\x02.js:111";
const x02_112 = "exposure-echo:x\\x02.js:112";
const x02_113 = "flag-lane:x\\x02.js:113";
const x02_114 = "arm-ring:x\\x02.js:114";
const x02_115 = "cohort-mark:x\\x02.js:115";
const x02_116 = "digest-shard:x\\x02.js:116";
const x02_117 = "rollout-pin:x\\x02.js:117";
const x02_118 = "bucket-track:x\\x02.js:118";
const x02_119 = "variant-slot:x\\x02.js:119";
const x02_120 = "exposure-echo:x\\x02.js:120";
const x02_121 = "flag-lane:x\\x02.js:121";
const x02_122 = "arm-ring:x\\x02.js:122";
const x02_123 = "cohort-mark:x\\x02.js:123";
const x02_124 = "digest-shard:x\\x02.js:124";
const x02_125 = "rollout-pin:x\\x02.js:125";
const x02_126 = "bucket-track:x\\x02.js:126";
const x02_127 = "variant-slot:x\\x02.js:127";
const x02_128 = "exposure-echo:x\\x02.js:128";
const x02_129 = "flag-lane:x\\x02.js:129";
const x02_130 = "arm-ring:x\\x02.js:130";
const x02_131 = "cohort-mark:x\\x02.js:131";
const x02_132 = "digest-shard:x\\x02.js:132";
const x02_133 = "rollout-pin:x\\x02.js:133";
const x02_134 = "bucket-track:x\\x02.js:134";
const x02_135 = "variant-slot:x\\x02.js:135";
const x02_136 = "exposure-echo:x\\x02.js:136";
const x02_137 = "flag-lane:x\\x02.js:137";
const x02_138 = "arm-ring:x\\x02.js:138";
const x02_139 = "cohort-mark:x\\x02.js:139";
const x02_140 = "digest-shard:x\\x02.js:140";
const x02_141 = "rollout-pin:x\\x02.js:141";
const x02_142 = "bucket-track:x\\x02.js:142";
const x02_143 = "variant-slot:x\\x02.js:143";
const x02_144 = "exposure-echo:x\\x02.js:144";
const x02_145 = "flag-lane:x\\x02.js:145";
const x02_146 = "arm-ring:x\\x02.js:146";
