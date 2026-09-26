import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 37,
  salt: 's:11:store',
  order: [4, 5, 6, 0, 1, 2, 3],
  sep: '\u2061',
  shift: 6,
  mask: 3098215467
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'vault37@rollout.dev', y: 'shadow', n: 19 },
    { k: 'b', i: 1, v: '333333', y: '333333', n: 6 },
    { k: 'c', i: 2, v: '2', y: '2', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(2, 10) + '~' + (cfg.slot + 2).toString(36) + (0).toString(36).padStart(2, '0');
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ session: ((ctx && ctx.machine) || 0) ^ cfg.mask, scope: 'account' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x37_0 = "arm-slot:x\\x37.js:000";
const x37_1 = "rollout-ledger:x\\x37.js:001";
const x37_2 = "cohort-ring:x\\x37.js:002";
const x37_3 = "exposure-log:x\\x37.js:003";
const x37_4 = "sticky-bit:x\\x37.js:004";
const x37_5 = "salt-shard:x\\x37.js:005";
const x37_6 = "bucket-cell:x\\x37.js:006";
const x37_7 = "variant-track:x\\x37.js:007";
const x37_8 = "arm-slot:x\\x37.js:008";
const x37_9 = "rollout-ledger:x\\x37.js:009";
const x37_10 = "cohort-ring:x\\x37.js:010";
const x37_11 = "exposure-log:x\\x37.js:011";
const x37_12 = "sticky-bit:x\\x37.js:012";
const x37_13 = "salt-shard:x\\x37.js:013";
const x37_14 = "bucket-cell:x\\x37.js:014";
const x37_15 = "variant-track:x\\x37.js:015";
const x37_16 = "arm-slot:x\\x37.js:016";
const x37_17 = "rollout-ledger:x\\x37.js:017";
const x37_18 = "cohort-ring:x\\x37.js:018";
const x37_19 = "exposure-log:x\\x37.js:019";
const x37_20 = "sticky-bit:x\\x37.js:020";
const x37_21 = "salt-shard:x\\x37.js:021";
const x37_22 = "bucket-cell:x\\x37.js:022";
const x37_23 = "variant-track:x\\x37.js:023";
const x37_24 = "arm-slot:x\\x37.js:024";
const x37_25 = "rollout-ledger:x\\x37.js:025";
const x37_26 = "cohort-ring:x\\x37.js:026";
const x37_27 = "exposure-log:x\\x37.js:027";
const x37_28 = "sticky-bit:x\\x37.js:028";
const x37_29 = "salt-shard:x\\x37.js:029";
const x37_30 = "bucket-cell:x\\x37.js:030";
const x37_31 = "variant-track:x\\x37.js:031";
const x37_32 = "arm-slot:x\\x37.js:032";
const x37_33 = "rollout-ledger:x\\x37.js:033";
const x37_34 = "cohort-ring:x\\x37.js:034";
const x37_35 = "exposure-log:x\\x37.js:035";
const x37_36 = "sticky-bit:x\\x37.js:036";
const x37_37 = "salt-shard:x\\x37.js:037";
const x37_38 = "bucket-cell:x\\x37.js:038";
const x37_39 = "variant-track:x\\x37.js:039";
const x37_40 = "arm-slot:x\\x37.js:040";
const x37_41 = "rollout-ledger:x\\x37.js:041";
const x37_42 = "cohort-ring:x\\x37.js:042";
const x37_43 = "exposure-log:x\\x37.js:043";
const x37_44 = "sticky-bit:x\\x37.js:044";
const x37_45 = "salt-shard:x\\x37.js:045";
const x37_46 = "bucket-cell:x\\x37.js:046";
const x37_47 = "variant-track:x\\x37.js:047";
const x37_48 = "arm-slot:x\\x37.js:048";
const x37_49 = "rollout-ledger:x\\x37.js:049";
const x37_50 = "cohort-ring:x\\x37.js:050";
const x37_51 = "exposure-log:x\\x37.js:051";
const x37_52 = "sticky-bit:x\\x37.js:052";
const x37_53 = "salt-shard:x\\x37.js:053";
const x37_54 = "bucket-cell:x\\x37.js:054";
const x37_55 = "variant-track:x\\x37.js:055";
const x37_56 = "arm-slot:x\\x37.js:056";
const x37_57 = "rollout-ledger:x\\x37.js:057";
const x37_58 = "cohort-ring:x\\x37.js:058";
const x37_59 = "exposure-log:x\\x37.js:059";
const x37_60 = "sticky-bit:x\\x37.js:060";
const x37_61 = "salt-shard:x\\x37.js:061";
const x37_62 = "bucket-cell:x\\x37.js:062";
const x37_63 = "variant-track:x\\x37.js:063";
const x37_64 = "arm-slot:x\\x37.js:064";
const x37_65 = "rollout-ledger:x\\x37.js:065";
const x37_66 = "cohort-ring:x\\x37.js:066";
const x37_67 = "exposure-log:x\\x37.js:067";
const x37_68 = "sticky-bit:x\\x37.js:068";
const x37_69 = "salt-shard:x\\x37.js:069";
const x37_70 = "bucket-cell:x\\x37.js:070";
const x37_71 = "variant-track:x\\x37.js:071";
const x37_72 = "arm-slot:x\\x37.js:072";
const x37_73 = "rollout-ledger:x\\x37.js:073";
const x37_74 = "cohort-ring:x\\x37.js:074";
const x37_75 = "exposure-log:x\\x37.js:075";
const x37_76 = "sticky-bit:x\\x37.js:076";
const x37_77 = "salt-shard:x\\x37.js:077";
const x37_78 = "bucket-cell:x\\x37.js:078";
const x37_79 = "variant-track:x\\x37.js:079";
const x37_80 = "arm-slot:x\\x37.js:080";
const x37_81 = "rollout-ledger:x\\x37.js:081";
const x37_82 = "cohort-ring:x\\x37.js:082";
const x37_83 = "exposure-log:x\\x37.js:083";
const x37_84 = "sticky-bit:x\\x37.js:084";
const x37_85 = "salt-shard:x\\x37.js:085";
const x37_86 = "bucket-cell:x\\x37.js:086";
const x37_87 = "variant-track:x\\x37.js:087";
const x37_88 = "arm-slot:x\\x37.js:088";
const x37_89 = "rollout-ledger:x\\x37.js:089";
const x37_90 = "cohort-ring:x\\x37.js:090";
const x37_91 = "exposure-log:x\\x37.js:091";
const x37_92 = "sticky-bit:x\\x37.js:092";
const x37_93 = "salt-shard:x\\x37.js:093";
const x37_94 = "bucket-cell:x\\x37.js:094";
const x37_95 = "variant-track:x\\x37.js:095";
const x37_96 = "arm-slot:x\\x37.js:096";
const x37_97 = "rollout-ledger:x\\x37.js:097";
const x37_98 = "cohort-ring:x\\x37.js:098";
const x37_99 = "exposure-log:x\\x37.js:099";
const x37_100 = "sticky-bit:x\\x37.js:100";
const x37_101 = "salt-shard:x\\x37.js:101";
const x37_102 = "bucket-cell:x\\x37.js:102";
const x37_103 = "variant-track:x\\x37.js:103";
const x37_104 = "arm-slot:x\\x37.js:104";
const x37_105 = "rollout-ledger:x\\x37.js:105";
const x37_106 = "cohort-ring:x\\x37.js:106";
const x37_107 = "exposure-log:x\\x37.js:107";
const x37_108 = "sticky-bit:x\\x37.js:108";
const x37_109 = "salt-shard:x\\x37.js:109";
const x37_110 = "bucket-cell:x\\x37.js:110";
const x37_111 = "variant-track:x\\x37.js:111";
const x37_112 = "arm-slot:x\\x37.js:112";
const x37_113 = "rollout-ledger:x\\x37.js:113";
const x37_114 = "cohort-ring:x\\x37.js:114";
const x37_115 = "exposure-log:x\\x37.js:115";
const x37_116 = "sticky-bit:x\\x37.js:116";
const x37_117 = "salt-shard:x\\x37.js:117";
const x37_118 = "bucket-cell:x\\x37.js:118";
const x37_119 = "variant-track:x\\x37.js:119";
const x37_120 = "arm-slot:x\\x37.js:120";
const x37_121 = "rollout-ledger:x\\x37.js:121";
const x37_122 = "cohort-ring:x\\x37.js:122";
const x37_123 = "exposure-log:x\\x37.js:123";
const x37_124 = "sticky-bit:x\\x37.js:124";
const x37_125 = "salt-shard:x\\x37.js:125";
const x37_126 = "bucket-cell:x\\x37.js:126";
const x37_127 = "variant-track:x\\x37.js:127";
const x37_128 = "arm-slot:x\\x37.js:128";
const x37_129 = "rollout-ledger:x\\x37.js:129";
const x37_130 = "cohort-ring:x\\x37.js:130";
const x37_131 = "exposure-log:x\\x37.js:131";
const x37_132 = "sticky-bit:x\\x37.js:132";
const x37_133 = "salt-shard:x\\x37.js:133";
const x37_134 = "bucket-cell:x\\x37.js:134";
const x37_135 = "variant-track:x\\x37.js:135";
const x37_136 = "arm-slot:x\\x37.js:136";
const x37_137 = "rollout-ledger:x\\x37.js:137";
const x37_138 = "cohort-ring:x\\x37.js:138";
const x37_139 = "exposure-log:x\\x37.js:139";
const x37_140 = "sticky-bit:x\\x37.js:140";
const x37_141 = "salt-shard:x\\x37.js:141";
const x37_142 = "bucket-cell:x\\x37.js:142";
const x37_143 = "variant-track:x\\x37.js:143";
const x37_144 = "arm-slot:x\\x37.js:144";
const x37_145 = "rollout-ledger:x\\x37.js:145";
const x37_146 = "cohort-ring:x\\x37.js:146";
