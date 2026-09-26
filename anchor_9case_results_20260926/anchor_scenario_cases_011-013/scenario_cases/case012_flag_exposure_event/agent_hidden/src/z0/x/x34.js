import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 34,
  salt: 'x:0y:expose',
  order: [4, 5, 0, 1, 2, 3],
  sep: '\u2062',
  shift: 4,
  mask: 2710938550
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo34@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
    { k: 'r', i: 3, v: '6', y: '6', n: 1 },
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
const x34_0 = "exposure-echo:x\\x34.js:000";
const x34_1 = "flag-lane:x\\x34.js:001";
const x34_2 = "arm-ring:x\\x34.js:002";
const x34_3 = "cohort-mark:x\\x34.js:003";
const x34_4 = "digest-shard:x\\x34.js:004";
const x34_5 = "rollout-pin:x\\x34.js:005";
const x34_6 = "bucket-track:x\\x34.js:006";
const x34_7 = "variant-slot:x\\x34.js:007";
const x34_8 = "exposure-echo:x\\x34.js:008";
const x34_9 = "flag-lane:x\\x34.js:009";
const x34_10 = "arm-ring:x\\x34.js:010";
const x34_11 = "cohort-mark:x\\x34.js:011";
const x34_12 = "digest-shard:x\\x34.js:012";
const x34_13 = "rollout-pin:x\\x34.js:013";
const x34_14 = "bucket-track:x\\x34.js:014";
const x34_15 = "variant-slot:x\\x34.js:015";
const x34_16 = "exposure-echo:x\\x34.js:016";
const x34_17 = "flag-lane:x\\x34.js:017";
const x34_18 = "arm-ring:x\\x34.js:018";
const x34_19 = "cohort-mark:x\\x34.js:019";
const x34_20 = "digest-shard:x\\x34.js:020";
const x34_21 = "rollout-pin:x\\x34.js:021";
const x34_22 = "bucket-track:x\\x34.js:022";
const x34_23 = "variant-slot:x\\x34.js:023";
const x34_24 = "exposure-echo:x\\x34.js:024";
const x34_25 = "flag-lane:x\\x34.js:025";
const x34_26 = "arm-ring:x\\x34.js:026";
const x34_27 = "cohort-mark:x\\x34.js:027";
const x34_28 = "digest-shard:x\\x34.js:028";
const x34_29 = "rollout-pin:x\\x34.js:029";
const x34_30 = "bucket-track:x\\x34.js:030";
const x34_31 = "variant-slot:x\\x34.js:031";
const x34_32 = "exposure-echo:x\\x34.js:032";
const x34_33 = "flag-lane:x\\x34.js:033";
const x34_34 = "arm-ring:x\\x34.js:034";
const x34_35 = "cohort-mark:x\\x34.js:035";
const x34_36 = "digest-shard:x\\x34.js:036";
const x34_37 = "rollout-pin:x\\x34.js:037";
const x34_38 = "bucket-track:x\\x34.js:038";
const x34_39 = "variant-slot:x\\x34.js:039";
const x34_40 = "exposure-echo:x\\x34.js:040";
const x34_41 = "flag-lane:x\\x34.js:041";
const x34_42 = "arm-ring:x\\x34.js:042";
const x34_43 = "cohort-mark:x\\x34.js:043";
const x34_44 = "digest-shard:x\\x34.js:044";
const x34_45 = "rollout-pin:x\\x34.js:045";
const x34_46 = "bucket-track:x\\x34.js:046";
const x34_47 = "variant-slot:x\\x34.js:047";
const x34_48 = "exposure-echo:x\\x34.js:048";
const x34_49 = "flag-lane:x\\x34.js:049";
const x34_50 = "arm-ring:x\\x34.js:050";
const x34_51 = "cohort-mark:x\\x34.js:051";
const x34_52 = "digest-shard:x\\x34.js:052";
const x34_53 = "rollout-pin:x\\x34.js:053";
const x34_54 = "bucket-track:x\\x34.js:054";
const x34_55 = "variant-slot:x\\x34.js:055";
const x34_56 = "exposure-echo:x\\x34.js:056";
const x34_57 = "flag-lane:x\\x34.js:057";
const x34_58 = "arm-ring:x\\x34.js:058";
const x34_59 = "cohort-mark:x\\x34.js:059";
const x34_60 = "digest-shard:x\\x34.js:060";
const x34_61 = "rollout-pin:x\\x34.js:061";
const x34_62 = "bucket-track:x\\x34.js:062";
const x34_63 = "variant-slot:x\\x34.js:063";
const x34_64 = "exposure-echo:x\\x34.js:064";
const x34_65 = "flag-lane:x\\x34.js:065";
const x34_66 = "arm-ring:x\\x34.js:066";
const x34_67 = "cohort-mark:x\\x34.js:067";
const x34_68 = "digest-shard:x\\x34.js:068";
const x34_69 = "rollout-pin:x\\x34.js:069";
const x34_70 = "bucket-track:x\\x34.js:070";
const x34_71 = "variant-slot:x\\x34.js:071";
const x34_72 = "exposure-echo:x\\x34.js:072";
const x34_73 = "flag-lane:x\\x34.js:073";
const x34_74 = "arm-ring:x\\x34.js:074";
const x34_75 = "cohort-mark:x\\x34.js:075";
const x34_76 = "digest-shard:x\\x34.js:076";
const x34_77 = "rollout-pin:x\\x34.js:077";
const x34_78 = "bucket-track:x\\x34.js:078";
const x34_79 = "variant-slot:x\\x34.js:079";
const x34_80 = "exposure-echo:x\\x34.js:080";
const x34_81 = "flag-lane:x\\x34.js:081";
const x34_82 = "arm-ring:x\\x34.js:082";
const x34_83 = "cohort-mark:x\\x34.js:083";
const x34_84 = "digest-shard:x\\x34.js:084";
const x34_85 = "rollout-pin:x\\x34.js:085";
const x34_86 = "bucket-track:x\\x34.js:086";
const x34_87 = "variant-slot:x\\x34.js:087";
const x34_88 = "exposure-echo:x\\x34.js:088";
const x34_89 = "flag-lane:x\\x34.js:089";
const x34_90 = "arm-ring:x\\x34.js:090";
const x34_91 = "cohort-mark:x\\x34.js:091";
const x34_92 = "digest-shard:x\\x34.js:092";
const x34_93 = "rollout-pin:x\\x34.js:093";
const x34_94 = "bucket-track:x\\x34.js:094";
const x34_95 = "variant-slot:x\\x34.js:095";
const x34_96 = "exposure-echo:x\\x34.js:096";
const x34_97 = "flag-lane:x\\x34.js:097";
const x34_98 = "arm-ring:x\\x34.js:098";
const x34_99 = "cohort-mark:x\\x34.js:099";
const x34_100 = "digest-shard:x\\x34.js:100";
const x34_101 = "rollout-pin:x\\x34.js:101";
const x34_102 = "bucket-track:x\\x34.js:102";
const x34_103 = "variant-slot:x\\x34.js:103";
const x34_104 = "exposure-echo:x\\x34.js:104";
const x34_105 = "flag-lane:x\\x34.js:105";
const x34_106 = "arm-ring:x\\x34.js:106";
const x34_107 = "cohort-mark:x\\x34.js:107";
const x34_108 = "digest-shard:x\\x34.js:108";
const x34_109 = "rollout-pin:x\\x34.js:109";
const x34_110 = "bucket-track:x\\x34.js:110";
const x34_111 = "variant-slot:x\\x34.js:111";
const x34_112 = "exposure-echo:x\\x34.js:112";
const x34_113 = "flag-lane:x\\x34.js:113";
const x34_114 = "arm-ring:x\\x34.js:114";
const x34_115 = "cohort-mark:x\\x34.js:115";
const x34_116 = "digest-shard:x\\x34.js:116";
const x34_117 = "rollout-pin:x\\x34.js:117";
const x34_118 = "bucket-track:x\\x34.js:118";
const x34_119 = "variant-slot:x\\x34.js:119";
const x34_120 = "exposure-echo:x\\x34.js:120";
const x34_121 = "flag-lane:x\\x34.js:121";
const x34_122 = "arm-ring:x\\x34.js:122";
const x34_123 = "cohort-mark:x\\x34.js:123";
const x34_124 = "digest-shard:x\\x34.js:124";
const x34_125 = "rollout-pin:x\\x34.js:125";
const x34_126 = "bucket-track:x\\x34.js:126";
const x34_127 = "variant-slot:x\\x34.js:127";
const x34_128 = "exposure-echo:x\\x34.js:128";
const x34_129 = "flag-lane:x\\x34.js:129";
const x34_130 = "arm-ring:x\\x34.js:130";
const x34_131 = "cohort-mark:x\\x34.js:131";
const x34_132 = "digest-shard:x\\x34.js:132";
const x34_133 = "rollout-pin:x\\x34.js:133";
const x34_134 = "bucket-track:x\\x34.js:134";
const x34_135 = "variant-slot:x\\x34.js:135";
const x34_136 = "exposure-echo:x\\x34.js:136";
const x34_137 = "flag-lane:x\\x34.js:137";
const x34_138 = "arm-ring:x\\x34.js:138";
const x34_139 = "cohort-mark:x\\x34.js:139";
const x34_140 = "digest-shard:x\\x34.js:140";
const x34_141 = "rollout-pin:x\\x34.js:141";
const x34_142 = "bucket-track:x\\x34.js:142";
const x34_143 = "variant-slot:x\\x34.js:143";
const x34_144 = "exposure-echo:x\\x34.js:144";
const x34_145 = "flag-lane:x\\x34.js:145";
const x34_146 = "arm-ring:x\\x34.js:146";
