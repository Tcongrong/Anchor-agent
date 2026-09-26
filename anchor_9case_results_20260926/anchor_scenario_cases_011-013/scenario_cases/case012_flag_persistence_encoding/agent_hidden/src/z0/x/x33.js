import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 33,
  salt: 's:0x:store',
  order: [3, 4, 5, 6, 0, 1, 2],
  sep: '\u2061',
  shift: 9,
  mask: 1070407015
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'store33@rollout.dev', y: 'shadow', n: 19 },
    { k: 'b', i: 1, v: '333333', y: '333333', n: 6 },
    { k: 'c', i: 2, v: '5', y: '5', n: 1 },
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
const x33_0 = "arm-slot:x\\x33.js:000";
const x33_1 = "rollout-ledger:x\\x33.js:001";
const x33_2 = "cohort-ring:x\\x33.js:002";
const x33_3 = "exposure-log:x\\x33.js:003";
const x33_4 = "sticky-bit:x\\x33.js:004";
const x33_5 = "salt-shard:x\\x33.js:005";
const x33_6 = "bucket-cell:x\\x33.js:006";
const x33_7 = "variant-track:x\\x33.js:007";
const x33_8 = "arm-slot:x\\x33.js:008";
const x33_9 = "rollout-ledger:x\\x33.js:009";
const x33_10 = "cohort-ring:x\\x33.js:010";
const x33_11 = "exposure-log:x\\x33.js:011";
const x33_12 = "sticky-bit:x\\x33.js:012";
const x33_13 = "salt-shard:x\\x33.js:013";
const x33_14 = "bucket-cell:x\\x33.js:014";
const x33_15 = "variant-track:x\\x33.js:015";
const x33_16 = "arm-slot:x\\x33.js:016";
const x33_17 = "rollout-ledger:x\\x33.js:017";
const x33_18 = "cohort-ring:x\\x33.js:018";
const x33_19 = "exposure-log:x\\x33.js:019";
const x33_20 = "sticky-bit:x\\x33.js:020";
const x33_21 = "salt-shard:x\\x33.js:021";
const x33_22 = "bucket-cell:x\\x33.js:022";
const x33_23 = "variant-track:x\\x33.js:023";
const x33_24 = "arm-slot:x\\x33.js:024";
const x33_25 = "rollout-ledger:x\\x33.js:025";
const x33_26 = "cohort-ring:x\\x33.js:026";
const x33_27 = "exposure-log:x\\x33.js:027";
const x33_28 = "sticky-bit:x\\x33.js:028";
const x33_29 = "salt-shard:x\\x33.js:029";
const x33_30 = "bucket-cell:x\\x33.js:030";
const x33_31 = "variant-track:x\\x33.js:031";
const x33_32 = "arm-slot:x\\x33.js:032";
const x33_33 = "rollout-ledger:x\\x33.js:033";
const x33_34 = "cohort-ring:x\\x33.js:034";
const x33_35 = "exposure-log:x\\x33.js:035";
const x33_36 = "sticky-bit:x\\x33.js:036";
const x33_37 = "salt-shard:x\\x33.js:037";
const x33_38 = "bucket-cell:x\\x33.js:038";
const x33_39 = "variant-track:x\\x33.js:039";
const x33_40 = "arm-slot:x\\x33.js:040";
const x33_41 = "rollout-ledger:x\\x33.js:041";
const x33_42 = "cohort-ring:x\\x33.js:042";
const x33_43 = "exposure-log:x\\x33.js:043";
const x33_44 = "sticky-bit:x\\x33.js:044";
const x33_45 = "salt-shard:x\\x33.js:045";
const x33_46 = "bucket-cell:x\\x33.js:046";
const x33_47 = "variant-track:x\\x33.js:047";
const x33_48 = "arm-slot:x\\x33.js:048";
const x33_49 = "rollout-ledger:x\\x33.js:049";
const x33_50 = "cohort-ring:x\\x33.js:050";
const x33_51 = "exposure-log:x\\x33.js:051";
const x33_52 = "sticky-bit:x\\x33.js:052";
const x33_53 = "salt-shard:x\\x33.js:053";
const x33_54 = "bucket-cell:x\\x33.js:054";
const x33_55 = "variant-track:x\\x33.js:055";
const x33_56 = "arm-slot:x\\x33.js:056";
const x33_57 = "rollout-ledger:x\\x33.js:057";
const x33_58 = "cohort-ring:x\\x33.js:058";
const x33_59 = "exposure-log:x\\x33.js:059";
const x33_60 = "sticky-bit:x\\x33.js:060";
const x33_61 = "salt-shard:x\\x33.js:061";
const x33_62 = "bucket-cell:x\\x33.js:062";
const x33_63 = "variant-track:x\\x33.js:063";
const x33_64 = "arm-slot:x\\x33.js:064";
const x33_65 = "rollout-ledger:x\\x33.js:065";
const x33_66 = "cohort-ring:x\\x33.js:066";
const x33_67 = "exposure-log:x\\x33.js:067";
const x33_68 = "sticky-bit:x\\x33.js:068";
const x33_69 = "salt-shard:x\\x33.js:069";
const x33_70 = "bucket-cell:x\\x33.js:070";
const x33_71 = "variant-track:x\\x33.js:071";
const x33_72 = "arm-slot:x\\x33.js:072";
const x33_73 = "rollout-ledger:x\\x33.js:073";
const x33_74 = "cohort-ring:x\\x33.js:074";
const x33_75 = "exposure-log:x\\x33.js:075";
const x33_76 = "sticky-bit:x\\x33.js:076";
const x33_77 = "salt-shard:x\\x33.js:077";
const x33_78 = "bucket-cell:x\\x33.js:078";
const x33_79 = "variant-track:x\\x33.js:079";
const x33_80 = "arm-slot:x\\x33.js:080";
const x33_81 = "rollout-ledger:x\\x33.js:081";
const x33_82 = "cohort-ring:x\\x33.js:082";
const x33_83 = "exposure-log:x\\x33.js:083";
const x33_84 = "sticky-bit:x\\x33.js:084";
const x33_85 = "salt-shard:x\\x33.js:085";
const x33_86 = "bucket-cell:x\\x33.js:086";
const x33_87 = "variant-track:x\\x33.js:087";
const x33_88 = "arm-slot:x\\x33.js:088";
const x33_89 = "rollout-ledger:x\\x33.js:089";
const x33_90 = "cohort-ring:x\\x33.js:090";
const x33_91 = "exposure-log:x\\x33.js:091";
const x33_92 = "sticky-bit:x\\x33.js:092";
const x33_93 = "salt-shard:x\\x33.js:093";
const x33_94 = "bucket-cell:x\\x33.js:094";
const x33_95 = "variant-track:x\\x33.js:095";
const x33_96 = "arm-slot:x\\x33.js:096";
const x33_97 = "rollout-ledger:x\\x33.js:097";
const x33_98 = "cohort-ring:x\\x33.js:098";
const x33_99 = "exposure-log:x\\x33.js:099";
const x33_100 = "sticky-bit:x\\x33.js:100";
const x33_101 = "salt-shard:x\\x33.js:101";
const x33_102 = "bucket-cell:x\\x33.js:102";
const x33_103 = "variant-track:x\\x33.js:103";
const x33_104 = "arm-slot:x\\x33.js:104";
const x33_105 = "rollout-ledger:x\\x33.js:105";
const x33_106 = "cohort-ring:x\\x33.js:106";
const x33_107 = "exposure-log:x\\x33.js:107";
const x33_108 = "sticky-bit:x\\x33.js:108";
const x33_109 = "salt-shard:x\\x33.js:109";
const x33_110 = "bucket-cell:x\\x33.js:110";
const x33_111 = "variant-track:x\\x33.js:111";
const x33_112 = "arm-slot:x\\x33.js:112";
const x33_113 = "rollout-ledger:x\\x33.js:113";
const x33_114 = "cohort-ring:x\\x33.js:114";
const x33_115 = "exposure-log:x\\x33.js:115";
const x33_116 = "sticky-bit:x\\x33.js:116";
const x33_117 = "salt-shard:x\\x33.js:117";
const x33_118 = "bucket-cell:x\\x33.js:118";
const x33_119 = "variant-track:x\\x33.js:119";
const x33_120 = "arm-slot:x\\x33.js:120";
const x33_121 = "rollout-ledger:x\\x33.js:121";
const x33_122 = "cohort-ring:x\\x33.js:122";
const x33_123 = "exposure-log:x\\x33.js:123";
const x33_124 = "sticky-bit:x\\x33.js:124";
const x33_125 = "salt-shard:x\\x33.js:125";
const x33_126 = "bucket-cell:x\\x33.js:126";
const x33_127 = "variant-track:x\\x33.js:127";
const x33_128 = "arm-slot:x\\x33.js:128";
const x33_129 = "rollout-ledger:x\\x33.js:129";
const x33_130 = "cohort-ring:x\\x33.js:130";
const x33_131 = "exposure-log:x\\x33.js:131";
const x33_132 = "sticky-bit:x\\x33.js:132";
const x33_133 = "salt-shard:x\\x33.js:133";
const x33_134 = "bucket-cell:x\\x33.js:134";
const x33_135 = "variant-track:x\\x33.js:135";
const x33_136 = "arm-slot:x\\x33.js:136";
const x33_137 = "rollout-ledger:x\\x33.js:137";
const x33_138 = "cohort-ring:x\\x33.js:138";
const x33_139 = "exposure-log:x\\x33.js:139";
const x33_140 = "sticky-bit:x\\x33.js:140";
const x33_141 = "salt-shard:x\\x33.js:141";
const x33_142 = "bucket-cell:x\\x33.js:142";
const x33_143 = "variant-track:x\\x33.js:143";
const x33_144 = "arm-slot:x\\x33.js:144";
const x33_145 = "rollout-ledger:x\\x33.js:145";
const x33_146 = "cohort-ring:x\\x33.js:146";
