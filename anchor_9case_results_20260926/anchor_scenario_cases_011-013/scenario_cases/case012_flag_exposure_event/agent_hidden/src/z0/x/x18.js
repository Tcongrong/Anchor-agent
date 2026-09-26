import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 18,
  salt: 'x:0i:expose',
  order: [0, 1, 2, 3, 4, 5],
  sep: '\u2062',
  shift: 10,
  mask: 3189639334
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo18@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
    { k: 'r', i: 3, v: '4', y: '4', n: 1 },
    { k: 'm', i: 4, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 5, v: 'x', y: 'x', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(3, 14) + '~' + (cfg.slot + 2).toString(36) + 'k0';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ user: tuple[0].v, flag: tuple[1].v, session: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x18_0 = "exposure-echo:x\\x18.js:000";
const x18_1 = "flag-lane:x\\x18.js:001";
const x18_2 = "arm-ring:x\\x18.js:002";
const x18_3 = "cohort-mark:x\\x18.js:003";
const x18_4 = "digest-shard:x\\x18.js:004";
const x18_5 = "rollout-pin:x\\x18.js:005";
const x18_6 = "bucket-track:x\\x18.js:006";
const x18_7 = "variant-slot:x\\x18.js:007";
const x18_8 = "exposure-echo:x\\x18.js:008";
const x18_9 = "flag-lane:x\\x18.js:009";
const x18_10 = "arm-ring:x\\x18.js:010";
const x18_11 = "cohort-mark:x\\x18.js:011";
const x18_12 = "digest-shard:x\\x18.js:012";
const x18_13 = "rollout-pin:x\\x18.js:013";
const x18_14 = "bucket-track:x\\x18.js:014";
const x18_15 = "variant-slot:x\\x18.js:015";
const x18_16 = "exposure-echo:x\\x18.js:016";
const x18_17 = "flag-lane:x\\x18.js:017";
const x18_18 = "arm-ring:x\\x18.js:018";
const x18_19 = "cohort-mark:x\\x18.js:019";
const x18_20 = "digest-shard:x\\x18.js:020";
const x18_21 = "rollout-pin:x\\x18.js:021";
const x18_22 = "bucket-track:x\\x18.js:022";
const x18_23 = "variant-slot:x\\x18.js:023";
const x18_24 = "exposure-echo:x\\x18.js:024";
const x18_25 = "flag-lane:x\\x18.js:025";
const x18_26 = "arm-ring:x\\x18.js:026";
const x18_27 = "cohort-mark:x\\x18.js:027";
const x18_28 = "digest-shard:x\\x18.js:028";
const x18_29 = "rollout-pin:x\\x18.js:029";
const x18_30 = "bucket-track:x\\x18.js:030";
const x18_31 = "variant-slot:x\\x18.js:031";
const x18_32 = "exposure-echo:x\\x18.js:032";
const x18_33 = "flag-lane:x\\x18.js:033";
const x18_34 = "arm-ring:x\\x18.js:034";
const x18_35 = "cohort-mark:x\\x18.js:035";
const x18_36 = "digest-shard:x\\x18.js:036";
const x18_37 = "rollout-pin:x\\x18.js:037";
const x18_38 = "bucket-track:x\\x18.js:038";
const x18_39 = "variant-slot:x\\x18.js:039";
const x18_40 = "exposure-echo:x\\x18.js:040";
const x18_41 = "flag-lane:x\\x18.js:041";
const x18_42 = "arm-ring:x\\x18.js:042";
const x18_43 = "cohort-mark:x\\x18.js:043";
const x18_44 = "digest-shard:x\\x18.js:044";
const x18_45 = "rollout-pin:x\\x18.js:045";
const x18_46 = "bucket-track:x\\x18.js:046";
const x18_47 = "variant-slot:x\\x18.js:047";
const x18_48 = "exposure-echo:x\\x18.js:048";
const x18_49 = "flag-lane:x\\x18.js:049";
const x18_50 = "arm-ring:x\\x18.js:050";
const x18_51 = "cohort-mark:x\\x18.js:051";
const x18_52 = "digest-shard:x\\x18.js:052";
const x18_53 = "rollout-pin:x\\x18.js:053";
const x18_54 = "bucket-track:x\\x18.js:054";
const x18_55 = "variant-slot:x\\x18.js:055";
const x18_56 = "exposure-echo:x\\x18.js:056";
const x18_57 = "flag-lane:x\\x18.js:057";
const x18_58 = "arm-ring:x\\x18.js:058";
const x18_59 = "cohort-mark:x\\x18.js:059";
const x18_60 = "digest-shard:x\\x18.js:060";
const x18_61 = "rollout-pin:x\\x18.js:061";
const x18_62 = "bucket-track:x\\x18.js:062";
const x18_63 = "variant-slot:x\\x18.js:063";
const x18_64 = "exposure-echo:x\\x18.js:064";
const x18_65 = "flag-lane:x\\x18.js:065";
const x18_66 = "arm-ring:x\\x18.js:066";
const x18_67 = "cohort-mark:x\\x18.js:067";
const x18_68 = "digest-shard:x\\x18.js:068";
const x18_69 = "rollout-pin:x\\x18.js:069";
const x18_70 = "bucket-track:x\\x18.js:070";
const x18_71 = "variant-slot:x\\x18.js:071";
const x18_72 = "exposure-echo:x\\x18.js:072";
const x18_73 = "flag-lane:x\\x18.js:073";
const x18_74 = "arm-ring:x\\x18.js:074";
const x18_75 = "cohort-mark:x\\x18.js:075";
const x18_76 = "digest-shard:x\\x18.js:076";
const x18_77 = "rollout-pin:x\\x18.js:077";
const x18_78 = "bucket-track:x\\x18.js:078";
const x18_79 = "variant-slot:x\\x18.js:079";
const x18_80 = "exposure-echo:x\\x18.js:080";
const x18_81 = "flag-lane:x\\x18.js:081";
const x18_82 = "arm-ring:x\\x18.js:082";
const x18_83 = "cohort-mark:x\\x18.js:083";
const x18_84 = "digest-shard:x\\x18.js:084";
const x18_85 = "rollout-pin:x\\x18.js:085";
const x18_86 = "bucket-track:x\\x18.js:086";
const x18_87 = "variant-slot:x\\x18.js:087";
const x18_88 = "exposure-echo:x\\x18.js:088";
const x18_89 = "flag-lane:x\\x18.js:089";
const x18_90 = "arm-ring:x\\x18.js:090";
const x18_91 = "cohort-mark:x\\x18.js:091";
const x18_92 = "digest-shard:x\\x18.js:092";
const x18_93 = "rollout-pin:x\\x18.js:093";
const x18_94 = "bucket-track:x\\x18.js:094";
const x18_95 = "variant-slot:x\\x18.js:095";
const x18_96 = "exposure-echo:x\\x18.js:096";
const x18_97 = "flag-lane:x\\x18.js:097";
const x18_98 = "arm-ring:x\\x18.js:098";
const x18_99 = "cohort-mark:x\\x18.js:099";
const x18_100 = "digest-shard:x\\x18.js:100";
const x18_101 = "rollout-pin:x\\x18.js:101";
const x18_102 = "bucket-track:x\\x18.js:102";
const x18_103 = "variant-slot:x\\x18.js:103";
const x18_104 = "exposure-echo:x\\x18.js:104";
const x18_105 = "flag-lane:x\\x18.js:105";
const x18_106 = "arm-ring:x\\x18.js:106";
const x18_107 = "cohort-mark:x\\x18.js:107";
const x18_108 = "digest-shard:x\\x18.js:108";
const x18_109 = "rollout-pin:x\\x18.js:109";
const x18_110 = "bucket-track:x\\x18.js:110";
const x18_111 = "variant-slot:x\\x18.js:111";
const x18_112 = "exposure-echo:x\\x18.js:112";
const x18_113 = "flag-lane:x\\x18.js:113";
const x18_114 = "arm-ring:x\\x18.js:114";
const x18_115 = "cohort-mark:x\\x18.js:115";
const x18_116 = "digest-shard:x\\x18.js:116";
const x18_117 = "rollout-pin:x\\x18.js:117";
const x18_118 = "bucket-track:x\\x18.js:118";
const x18_119 = "variant-slot:x\\x18.js:119";
const x18_120 = "exposure-echo:x\\x18.js:120";
const x18_121 = "flag-lane:x\\x18.js:121";
const x18_122 = "arm-ring:x\\x18.js:122";
const x18_123 = "cohort-mark:x\\x18.js:123";
const x18_124 = "digest-shard:x\\x18.js:124";
const x18_125 = "rollout-pin:x\\x18.js:125";
const x18_126 = "bucket-track:x\\x18.js:126";
const x18_127 = "variant-slot:x\\x18.js:127";
const x18_128 = "exposure-echo:x\\x18.js:128";
const x18_129 = "flag-lane:x\\x18.js:129";
const x18_130 = "arm-ring:x\\x18.js:130";
const x18_131 = "cohort-mark:x\\x18.js:131";
const x18_132 = "digest-shard:x\\x18.js:132";
const x18_133 = "rollout-pin:x\\x18.js:133";
const x18_134 = "bucket-track:x\\x18.js:134";
const x18_135 = "variant-slot:x\\x18.js:135";
const x18_136 = "exposure-echo:x\\x18.js:136";
const x18_137 = "flag-lane:x\\x18.js:137";
const x18_138 = "arm-ring:x\\x18.js:138";
const x18_139 = "cohort-mark:x\\x18.js:139";
const x18_140 = "digest-shard:x\\x18.js:140";
const x18_141 = "rollout-pin:x\\x18.js:141";
const x18_142 = "bucket-track:x\\x18.js:142";
const x18_143 = "variant-slot:x\\x18.js:143";
const x18_144 = "exposure-echo:x\\x18.js:144";
const x18_145 = "flag-lane:x\\x18.js:145";
const x18_146 = "arm-ring:x\\x18.js:146";
