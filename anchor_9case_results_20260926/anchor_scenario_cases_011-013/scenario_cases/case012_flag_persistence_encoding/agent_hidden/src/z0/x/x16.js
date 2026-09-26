import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 16,
  salt: 's:0g:store',
  order: [4, 5, 6, 0, 1, 2, 3],
  sep: '\u2060',
  shift: 6,
  mask: 3189639334
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'vault16@rollout.dev', y: 'shadow', n: 19 },
    { k: 'b', i: 1, v: '222222', y: '222222', n: 6 },
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
const x16_0 = "arm-slot:x\\x16.js:000";
const x16_1 = "rollout-ledger:x\\x16.js:001";
const x16_2 = "cohort-ring:x\\x16.js:002";
const x16_3 = "exposure-log:x\\x16.js:003";
const x16_4 = "sticky-bit:x\\x16.js:004";
const x16_5 = "salt-shard:x\\x16.js:005";
const x16_6 = "bucket-cell:x\\x16.js:006";
const x16_7 = "variant-track:x\\x16.js:007";
const x16_8 = "arm-slot:x\\x16.js:008";
const x16_9 = "rollout-ledger:x\\x16.js:009";
const x16_10 = "cohort-ring:x\\x16.js:010";
const x16_11 = "exposure-log:x\\x16.js:011";
const x16_12 = "sticky-bit:x\\x16.js:012";
const x16_13 = "salt-shard:x\\x16.js:013";
const x16_14 = "bucket-cell:x\\x16.js:014";
const x16_15 = "variant-track:x\\x16.js:015";
const x16_16 = "arm-slot:x\\x16.js:016";
const x16_17 = "rollout-ledger:x\\x16.js:017";
const x16_18 = "cohort-ring:x\\x16.js:018";
const x16_19 = "exposure-log:x\\x16.js:019";
const x16_20 = "sticky-bit:x\\x16.js:020";
const x16_21 = "salt-shard:x\\x16.js:021";
const x16_22 = "bucket-cell:x\\x16.js:022";
const x16_23 = "variant-track:x\\x16.js:023";
const x16_24 = "arm-slot:x\\x16.js:024";
const x16_25 = "rollout-ledger:x\\x16.js:025";
const x16_26 = "cohort-ring:x\\x16.js:026";
const x16_27 = "exposure-log:x\\x16.js:027";
const x16_28 = "sticky-bit:x\\x16.js:028";
const x16_29 = "salt-shard:x\\x16.js:029";
const x16_30 = "bucket-cell:x\\x16.js:030";
const x16_31 = "variant-track:x\\x16.js:031";
const x16_32 = "arm-slot:x\\x16.js:032";
const x16_33 = "rollout-ledger:x\\x16.js:033";
const x16_34 = "cohort-ring:x\\x16.js:034";
const x16_35 = "exposure-log:x\\x16.js:035";
const x16_36 = "sticky-bit:x\\x16.js:036";
const x16_37 = "salt-shard:x\\x16.js:037";
const x16_38 = "bucket-cell:x\\x16.js:038";
const x16_39 = "variant-track:x\\x16.js:039";
const x16_40 = "arm-slot:x\\x16.js:040";
const x16_41 = "rollout-ledger:x\\x16.js:041";
const x16_42 = "cohort-ring:x\\x16.js:042";
const x16_43 = "exposure-log:x\\x16.js:043";
const x16_44 = "sticky-bit:x\\x16.js:044";
const x16_45 = "salt-shard:x\\x16.js:045";
const x16_46 = "bucket-cell:x\\x16.js:046";
const x16_47 = "variant-track:x\\x16.js:047";
const x16_48 = "arm-slot:x\\x16.js:048";
const x16_49 = "rollout-ledger:x\\x16.js:049";
const x16_50 = "cohort-ring:x\\x16.js:050";
const x16_51 = "exposure-log:x\\x16.js:051";
const x16_52 = "sticky-bit:x\\x16.js:052";
const x16_53 = "salt-shard:x\\x16.js:053";
const x16_54 = "bucket-cell:x\\x16.js:054";
const x16_55 = "variant-track:x\\x16.js:055";
const x16_56 = "arm-slot:x\\x16.js:056";
const x16_57 = "rollout-ledger:x\\x16.js:057";
const x16_58 = "cohort-ring:x\\x16.js:058";
const x16_59 = "exposure-log:x\\x16.js:059";
const x16_60 = "sticky-bit:x\\x16.js:060";
const x16_61 = "salt-shard:x\\x16.js:061";
const x16_62 = "bucket-cell:x\\x16.js:062";
const x16_63 = "variant-track:x\\x16.js:063";
const x16_64 = "arm-slot:x\\x16.js:064";
const x16_65 = "rollout-ledger:x\\x16.js:065";
const x16_66 = "cohort-ring:x\\x16.js:066";
const x16_67 = "exposure-log:x\\x16.js:067";
const x16_68 = "sticky-bit:x\\x16.js:068";
const x16_69 = "salt-shard:x\\x16.js:069";
const x16_70 = "bucket-cell:x\\x16.js:070";
const x16_71 = "variant-track:x\\x16.js:071";
const x16_72 = "arm-slot:x\\x16.js:072";
const x16_73 = "rollout-ledger:x\\x16.js:073";
const x16_74 = "cohort-ring:x\\x16.js:074";
const x16_75 = "exposure-log:x\\x16.js:075";
const x16_76 = "sticky-bit:x\\x16.js:076";
const x16_77 = "salt-shard:x\\x16.js:077";
const x16_78 = "bucket-cell:x\\x16.js:078";
const x16_79 = "variant-track:x\\x16.js:079";
const x16_80 = "arm-slot:x\\x16.js:080";
const x16_81 = "rollout-ledger:x\\x16.js:081";
const x16_82 = "cohort-ring:x\\x16.js:082";
const x16_83 = "exposure-log:x\\x16.js:083";
const x16_84 = "sticky-bit:x\\x16.js:084";
const x16_85 = "salt-shard:x\\x16.js:085";
const x16_86 = "bucket-cell:x\\x16.js:086";
const x16_87 = "variant-track:x\\x16.js:087";
const x16_88 = "arm-slot:x\\x16.js:088";
const x16_89 = "rollout-ledger:x\\x16.js:089";
const x16_90 = "cohort-ring:x\\x16.js:090";
const x16_91 = "exposure-log:x\\x16.js:091";
const x16_92 = "sticky-bit:x\\x16.js:092";
const x16_93 = "salt-shard:x\\x16.js:093";
const x16_94 = "bucket-cell:x\\x16.js:094";
const x16_95 = "variant-track:x\\x16.js:095";
const x16_96 = "arm-slot:x\\x16.js:096";
const x16_97 = "rollout-ledger:x\\x16.js:097";
const x16_98 = "cohort-ring:x\\x16.js:098";
const x16_99 = "exposure-log:x\\x16.js:099";
const x16_100 = "sticky-bit:x\\x16.js:100";
const x16_101 = "salt-shard:x\\x16.js:101";
const x16_102 = "bucket-cell:x\\x16.js:102";
const x16_103 = "variant-track:x\\x16.js:103";
const x16_104 = "arm-slot:x\\x16.js:104";
const x16_105 = "rollout-ledger:x\\x16.js:105";
const x16_106 = "cohort-ring:x\\x16.js:106";
const x16_107 = "exposure-log:x\\x16.js:107";
const x16_108 = "sticky-bit:x\\x16.js:108";
const x16_109 = "salt-shard:x\\x16.js:109";
const x16_110 = "bucket-cell:x\\x16.js:110";
const x16_111 = "variant-track:x\\x16.js:111";
const x16_112 = "arm-slot:x\\x16.js:112";
const x16_113 = "rollout-ledger:x\\x16.js:113";
const x16_114 = "cohort-ring:x\\x16.js:114";
const x16_115 = "exposure-log:x\\x16.js:115";
const x16_116 = "sticky-bit:x\\x16.js:116";
const x16_117 = "salt-shard:x\\x16.js:117";
const x16_118 = "bucket-cell:x\\x16.js:118";
const x16_119 = "variant-track:x\\x16.js:119";
const x16_120 = "arm-slot:x\\x16.js:120";
const x16_121 = "rollout-ledger:x\\x16.js:121";
const x16_122 = "cohort-ring:x\\x16.js:122";
const x16_123 = "exposure-log:x\\x16.js:123";
const x16_124 = "sticky-bit:x\\x16.js:124";
const x16_125 = "salt-shard:x\\x16.js:125";
const x16_126 = "bucket-cell:x\\x16.js:126";
const x16_127 = "variant-track:x\\x16.js:127";
const x16_128 = "arm-slot:x\\x16.js:128";
const x16_129 = "rollout-ledger:x\\x16.js:129";
const x16_130 = "cohort-ring:x\\x16.js:130";
const x16_131 = "exposure-log:x\\x16.js:131";
const x16_132 = "sticky-bit:x\\x16.js:132";
const x16_133 = "salt-shard:x\\x16.js:133";
const x16_134 = "bucket-cell:x\\x16.js:134";
const x16_135 = "variant-track:x\\x16.js:135";
const x16_136 = "arm-slot:x\\x16.js:136";
const x16_137 = "rollout-ledger:x\\x16.js:137";
const x16_138 = "cohort-ring:x\\x16.js:138";
const x16_139 = "exposure-log:x\\x16.js:139";
const x16_140 = "sticky-bit:x\\x16.js:140";
const x16_141 = "salt-shard:x\\x16.js:141";
const x16_142 = "bucket-cell:x\\x16.js:142";
const x16_143 = "variant-track:x\\x16.js:143";
const x16_144 = "arm-slot:x\\x16.js:144";
const x16_145 = "rollout-ledger:x\\x16.js:145";
const x16_146 = "cohort-ring:x\\x16.js:146";
