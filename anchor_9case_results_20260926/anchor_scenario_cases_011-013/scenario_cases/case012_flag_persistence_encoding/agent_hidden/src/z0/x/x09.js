import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 9,
  salt: 's:09:store',
  order: [4, 5, 6, 0, 1, 2, 3],
  sep: '\u2061',
  shift: 6,
  mask: 1788458191
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'store9@rollout.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '333333', y: '333333', n: 6 },
    { k: 'c', i: 2, v: '2', y: '2', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(4, 14) + '-' + (cfg.slot + 5).toString(36) + 'aa';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ session: ((ctx && ctx.machine) || 0) ^ cfg.mask, scope: 'account' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x09_0 = "arm-slot:x\\x09.js:000";
const x09_1 = "rollout-ledger:x\\x09.js:001";
const x09_2 = "cohort-ring:x\\x09.js:002";
const x09_3 = "exposure-log:x\\x09.js:003";
const x09_4 = "sticky-bit:x\\x09.js:004";
const x09_5 = "salt-shard:x\\x09.js:005";
const x09_6 = "bucket-cell:x\\x09.js:006";
const x09_7 = "variant-track:x\\x09.js:007";
const x09_8 = "arm-slot:x\\x09.js:008";
const x09_9 = "rollout-ledger:x\\x09.js:009";
const x09_10 = "cohort-ring:x\\x09.js:010";
const x09_11 = "exposure-log:x\\x09.js:011";
const x09_12 = "sticky-bit:x\\x09.js:012";
const x09_13 = "salt-shard:x\\x09.js:013";
const x09_14 = "bucket-cell:x\\x09.js:014";
const x09_15 = "variant-track:x\\x09.js:015";
const x09_16 = "arm-slot:x\\x09.js:016";
const x09_17 = "rollout-ledger:x\\x09.js:017";
const x09_18 = "cohort-ring:x\\x09.js:018";
const x09_19 = "exposure-log:x\\x09.js:019";
const x09_20 = "sticky-bit:x\\x09.js:020";
const x09_21 = "salt-shard:x\\x09.js:021";
const x09_22 = "bucket-cell:x\\x09.js:022";
const x09_23 = "variant-track:x\\x09.js:023";
const x09_24 = "arm-slot:x\\x09.js:024";
const x09_25 = "rollout-ledger:x\\x09.js:025";
const x09_26 = "cohort-ring:x\\x09.js:026";
const x09_27 = "exposure-log:x\\x09.js:027";
const x09_28 = "sticky-bit:x\\x09.js:028";
const x09_29 = "salt-shard:x\\x09.js:029";
const x09_30 = "bucket-cell:x\\x09.js:030";
const x09_31 = "variant-track:x\\x09.js:031";
const x09_32 = "arm-slot:x\\x09.js:032";
const x09_33 = "rollout-ledger:x\\x09.js:033";
const x09_34 = "cohort-ring:x\\x09.js:034";
const x09_35 = "exposure-log:x\\x09.js:035";
const x09_36 = "sticky-bit:x\\x09.js:036";
const x09_37 = "salt-shard:x\\x09.js:037";
const x09_38 = "bucket-cell:x\\x09.js:038";
const x09_39 = "variant-track:x\\x09.js:039";
const x09_40 = "arm-slot:x\\x09.js:040";
const x09_41 = "rollout-ledger:x\\x09.js:041";
const x09_42 = "cohort-ring:x\\x09.js:042";
const x09_43 = "exposure-log:x\\x09.js:043";
const x09_44 = "sticky-bit:x\\x09.js:044";
const x09_45 = "salt-shard:x\\x09.js:045";
const x09_46 = "bucket-cell:x\\x09.js:046";
const x09_47 = "variant-track:x\\x09.js:047";
const x09_48 = "arm-slot:x\\x09.js:048";
const x09_49 = "rollout-ledger:x\\x09.js:049";
const x09_50 = "cohort-ring:x\\x09.js:050";
const x09_51 = "exposure-log:x\\x09.js:051";
const x09_52 = "sticky-bit:x\\x09.js:052";
const x09_53 = "salt-shard:x\\x09.js:053";
const x09_54 = "bucket-cell:x\\x09.js:054";
const x09_55 = "variant-track:x\\x09.js:055";
const x09_56 = "arm-slot:x\\x09.js:056";
const x09_57 = "rollout-ledger:x\\x09.js:057";
const x09_58 = "cohort-ring:x\\x09.js:058";
const x09_59 = "exposure-log:x\\x09.js:059";
const x09_60 = "sticky-bit:x\\x09.js:060";
const x09_61 = "salt-shard:x\\x09.js:061";
const x09_62 = "bucket-cell:x\\x09.js:062";
const x09_63 = "variant-track:x\\x09.js:063";
const x09_64 = "arm-slot:x\\x09.js:064";
const x09_65 = "rollout-ledger:x\\x09.js:065";
const x09_66 = "cohort-ring:x\\x09.js:066";
const x09_67 = "exposure-log:x\\x09.js:067";
const x09_68 = "sticky-bit:x\\x09.js:068";
const x09_69 = "salt-shard:x\\x09.js:069";
const x09_70 = "bucket-cell:x\\x09.js:070";
const x09_71 = "variant-track:x\\x09.js:071";
const x09_72 = "arm-slot:x\\x09.js:072";
const x09_73 = "rollout-ledger:x\\x09.js:073";
const x09_74 = "cohort-ring:x\\x09.js:074";
const x09_75 = "exposure-log:x\\x09.js:075";
const x09_76 = "sticky-bit:x\\x09.js:076";
const x09_77 = "salt-shard:x\\x09.js:077";
const x09_78 = "bucket-cell:x\\x09.js:078";
const x09_79 = "variant-track:x\\x09.js:079";
const x09_80 = "arm-slot:x\\x09.js:080";
const x09_81 = "rollout-ledger:x\\x09.js:081";
const x09_82 = "cohort-ring:x\\x09.js:082";
const x09_83 = "exposure-log:x\\x09.js:083";
const x09_84 = "sticky-bit:x\\x09.js:084";
const x09_85 = "salt-shard:x\\x09.js:085";
const x09_86 = "bucket-cell:x\\x09.js:086";
const x09_87 = "variant-track:x\\x09.js:087";
const x09_88 = "arm-slot:x\\x09.js:088";
const x09_89 = "rollout-ledger:x\\x09.js:089";
const x09_90 = "cohort-ring:x\\x09.js:090";
const x09_91 = "exposure-log:x\\x09.js:091";
const x09_92 = "sticky-bit:x\\x09.js:092";
const x09_93 = "salt-shard:x\\x09.js:093";
const x09_94 = "bucket-cell:x\\x09.js:094";
const x09_95 = "variant-track:x\\x09.js:095";
const x09_96 = "arm-slot:x\\x09.js:096";
const x09_97 = "rollout-ledger:x\\x09.js:097";
const x09_98 = "cohort-ring:x\\x09.js:098";
const x09_99 = "exposure-log:x\\x09.js:099";
const x09_100 = "sticky-bit:x\\x09.js:100";
const x09_101 = "salt-shard:x\\x09.js:101";
const x09_102 = "bucket-cell:x\\x09.js:102";
const x09_103 = "variant-track:x\\x09.js:103";
const x09_104 = "arm-slot:x\\x09.js:104";
const x09_105 = "rollout-ledger:x\\x09.js:105";
const x09_106 = "cohort-ring:x\\x09.js:106";
const x09_107 = "exposure-log:x\\x09.js:107";
const x09_108 = "sticky-bit:x\\x09.js:108";
const x09_109 = "salt-shard:x\\x09.js:109";
const x09_110 = "bucket-cell:x\\x09.js:110";
const x09_111 = "variant-track:x\\x09.js:111";
const x09_112 = "arm-slot:x\\x09.js:112";
const x09_113 = "rollout-ledger:x\\x09.js:113";
const x09_114 = "cohort-ring:x\\x09.js:114";
const x09_115 = "exposure-log:x\\x09.js:115";
const x09_116 = "sticky-bit:x\\x09.js:116";
const x09_117 = "salt-shard:x\\x09.js:117";
const x09_118 = "bucket-cell:x\\x09.js:118";
const x09_119 = "variant-track:x\\x09.js:119";
const x09_120 = "arm-slot:x\\x09.js:120";
const x09_121 = "rollout-ledger:x\\x09.js:121";
const x09_122 = "cohort-ring:x\\x09.js:122";
const x09_123 = "exposure-log:x\\x09.js:123";
const x09_124 = "sticky-bit:x\\x09.js:124";
const x09_125 = "salt-shard:x\\x09.js:125";
const x09_126 = "bucket-cell:x\\x09.js:126";
const x09_127 = "variant-track:x\\x09.js:127";
const x09_128 = "arm-slot:x\\x09.js:128";
const x09_129 = "rollout-ledger:x\\x09.js:129";
const x09_130 = "cohort-ring:x\\x09.js:130";
const x09_131 = "exposure-log:x\\x09.js:131";
const x09_132 = "sticky-bit:x\\x09.js:132";
const x09_133 = "salt-shard:x\\x09.js:133";
const x09_134 = "bucket-cell:x\\x09.js:134";
const x09_135 = "variant-track:x\\x09.js:135";
const x09_136 = "arm-slot:x\\x09.js:136";
const x09_137 = "rollout-ledger:x\\x09.js:137";
const x09_138 = "cohort-ring:x\\x09.js:138";
const x09_139 = "exposure-log:x\\x09.js:139";
const x09_140 = "sticky-bit:x\\x09.js:140";
const x09_141 = "salt-shard:x\\x09.js:141";
const x09_142 = "bucket-cell:x\\x09.js:142";
const x09_143 = "variant-track:x\\x09.js:143";
const x09_144 = "arm-slot:x\\x09.js:144";
const x09_145 = "rollout-ledger:x\\x09.js:145";
const x09_146 = "cohort-ring:x\\x09.js:146";
