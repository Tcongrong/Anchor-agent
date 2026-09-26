import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 2,
  salt: 's:02:store',
  order: [4, 5, 6, 0, 1, 2, 3],
  sep: '\u2062',
  shift: 6,
  mask: 387277048
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'slot2@rollout.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'c', i: 2, v: '2', y: '2', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix2(value, index) {
  return value.slice(5, 13) + '.' + (cfg.slot * 3 + 2).toString(36) + 'x';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ session: ((ctx && ctx.machine) || 0) ^ cfg.mask, scope: 'account' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x02_0 = "arm-slot:x\\x02.js:000";
const x02_1 = "rollout-ledger:x\\x02.js:001";
const x02_2 = "cohort-ring:x\\x02.js:002";
const x02_3 = "exposure-log:x\\x02.js:003";
const x02_4 = "sticky-bit:x\\x02.js:004";
const x02_5 = "salt-shard:x\\x02.js:005";
const x02_6 = "bucket-cell:x\\x02.js:006";
const x02_7 = "variant-track:x\\x02.js:007";
const x02_8 = "arm-slot:x\\x02.js:008";
const x02_9 = "rollout-ledger:x\\x02.js:009";
const x02_10 = "cohort-ring:x\\x02.js:010";
const x02_11 = "exposure-log:x\\x02.js:011";
const x02_12 = "sticky-bit:x\\x02.js:012";
const x02_13 = "salt-shard:x\\x02.js:013";
const x02_14 = "bucket-cell:x\\x02.js:014";
const x02_15 = "variant-track:x\\x02.js:015";
const x02_16 = "arm-slot:x\\x02.js:016";
const x02_17 = "rollout-ledger:x\\x02.js:017";
const x02_18 = "cohort-ring:x\\x02.js:018";
const x02_19 = "exposure-log:x\\x02.js:019";
const x02_20 = "sticky-bit:x\\x02.js:020";
const x02_21 = "salt-shard:x\\x02.js:021";
const x02_22 = "bucket-cell:x\\x02.js:022";
const x02_23 = "variant-track:x\\x02.js:023";
const x02_24 = "arm-slot:x\\x02.js:024";
const x02_25 = "rollout-ledger:x\\x02.js:025";
const x02_26 = "cohort-ring:x\\x02.js:026";
const x02_27 = "exposure-log:x\\x02.js:027";
const x02_28 = "sticky-bit:x\\x02.js:028";
const x02_29 = "salt-shard:x\\x02.js:029";
const x02_30 = "bucket-cell:x\\x02.js:030";
const x02_31 = "variant-track:x\\x02.js:031";
const x02_32 = "arm-slot:x\\x02.js:032";
const x02_33 = "rollout-ledger:x\\x02.js:033";
const x02_34 = "cohort-ring:x\\x02.js:034";
const x02_35 = "exposure-log:x\\x02.js:035";
const x02_36 = "sticky-bit:x\\x02.js:036";
const x02_37 = "salt-shard:x\\x02.js:037";
const x02_38 = "bucket-cell:x\\x02.js:038";
const x02_39 = "variant-track:x\\x02.js:039";
const x02_40 = "arm-slot:x\\x02.js:040";
const x02_41 = "rollout-ledger:x\\x02.js:041";
const x02_42 = "cohort-ring:x\\x02.js:042";
const x02_43 = "exposure-log:x\\x02.js:043";
const x02_44 = "sticky-bit:x\\x02.js:044";
const x02_45 = "salt-shard:x\\x02.js:045";
const x02_46 = "bucket-cell:x\\x02.js:046";
const x02_47 = "variant-track:x\\x02.js:047";
const x02_48 = "arm-slot:x\\x02.js:048";
const x02_49 = "rollout-ledger:x\\x02.js:049";
const x02_50 = "cohort-ring:x\\x02.js:050";
const x02_51 = "exposure-log:x\\x02.js:051";
const x02_52 = "sticky-bit:x\\x02.js:052";
const x02_53 = "salt-shard:x\\x02.js:053";
const x02_54 = "bucket-cell:x\\x02.js:054";
const x02_55 = "variant-track:x\\x02.js:055";
const x02_56 = "arm-slot:x\\x02.js:056";
const x02_57 = "rollout-ledger:x\\x02.js:057";
const x02_58 = "cohort-ring:x\\x02.js:058";
const x02_59 = "exposure-log:x\\x02.js:059";
const x02_60 = "sticky-bit:x\\x02.js:060";
const x02_61 = "salt-shard:x\\x02.js:061";
const x02_62 = "bucket-cell:x\\x02.js:062";
const x02_63 = "variant-track:x\\x02.js:063";
const x02_64 = "arm-slot:x\\x02.js:064";
const x02_65 = "rollout-ledger:x\\x02.js:065";
const x02_66 = "cohort-ring:x\\x02.js:066";
const x02_67 = "exposure-log:x\\x02.js:067";
const x02_68 = "sticky-bit:x\\x02.js:068";
const x02_69 = "salt-shard:x\\x02.js:069";
const x02_70 = "bucket-cell:x\\x02.js:070";
const x02_71 = "variant-track:x\\x02.js:071";
const x02_72 = "arm-slot:x\\x02.js:072";
const x02_73 = "rollout-ledger:x\\x02.js:073";
const x02_74 = "cohort-ring:x\\x02.js:074";
const x02_75 = "exposure-log:x\\x02.js:075";
const x02_76 = "sticky-bit:x\\x02.js:076";
const x02_77 = "salt-shard:x\\x02.js:077";
const x02_78 = "bucket-cell:x\\x02.js:078";
const x02_79 = "variant-track:x\\x02.js:079";
const x02_80 = "arm-slot:x\\x02.js:080";
const x02_81 = "rollout-ledger:x\\x02.js:081";
const x02_82 = "cohort-ring:x\\x02.js:082";
const x02_83 = "exposure-log:x\\x02.js:083";
const x02_84 = "sticky-bit:x\\x02.js:084";
const x02_85 = "salt-shard:x\\x02.js:085";
const x02_86 = "bucket-cell:x\\x02.js:086";
const x02_87 = "variant-track:x\\x02.js:087";
const x02_88 = "arm-slot:x\\x02.js:088";
const x02_89 = "rollout-ledger:x\\x02.js:089";
const x02_90 = "cohort-ring:x\\x02.js:090";
const x02_91 = "exposure-log:x\\x02.js:091";
const x02_92 = "sticky-bit:x\\x02.js:092";
const x02_93 = "salt-shard:x\\x02.js:093";
const x02_94 = "bucket-cell:x\\x02.js:094";
const x02_95 = "variant-track:x\\x02.js:095";
const x02_96 = "arm-slot:x\\x02.js:096";
const x02_97 = "rollout-ledger:x\\x02.js:097";
const x02_98 = "cohort-ring:x\\x02.js:098";
const x02_99 = "exposure-log:x\\x02.js:099";
const x02_100 = "sticky-bit:x\\x02.js:100";
const x02_101 = "salt-shard:x\\x02.js:101";
const x02_102 = "bucket-cell:x\\x02.js:102";
const x02_103 = "variant-track:x\\x02.js:103";
const x02_104 = "arm-slot:x\\x02.js:104";
const x02_105 = "rollout-ledger:x\\x02.js:105";
const x02_106 = "cohort-ring:x\\x02.js:106";
const x02_107 = "exposure-log:x\\x02.js:107";
const x02_108 = "sticky-bit:x\\x02.js:108";
const x02_109 = "salt-shard:x\\x02.js:109";
const x02_110 = "bucket-cell:x\\x02.js:110";
const x02_111 = "variant-track:x\\x02.js:111";
const x02_112 = "arm-slot:x\\x02.js:112";
const x02_113 = "rollout-ledger:x\\x02.js:113";
const x02_114 = "cohort-ring:x\\x02.js:114";
const x02_115 = "exposure-log:x\\x02.js:115";
const x02_116 = "sticky-bit:x\\x02.js:116";
const x02_117 = "salt-shard:x\\x02.js:117";
const x02_118 = "bucket-cell:x\\x02.js:118";
const x02_119 = "variant-track:x\\x02.js:119";
const x02_120 = "arm-slot:x\\x02.js:120";
const x02_121 = "rollout-ledger:x\\x02.js:121";
const x02_122 = "cohort-ring:x\\x02.js:122";
const x02_123 = "exposure-log:x\\x02.js:123";
const x02_124 = "sticky-bit:x\\x02.js:124";
const x02_125 = "salt-shard:x\\x02.js:125";
const x02_126 = "bucket-cell:x\\x02.js:126";
const x02_127 = "variant-track:x\\x02.js:127";
const x02_128 = "arm-slot:x\\x02.js:128";
const x02_129 = "rollout-ledger:x\\x02.js:129";
const x02_130 = "cohort-ring:x\\x02.js:130";
const x02_131 = "exposure-log:x\\x02.js:131";
const x02_132 = "sticky-bit:x\\x02.js:132";
const x02_133 = "salt-shard:x\\x02.js:133";
const x02_134 = "bucket-cell:x\\x02.js:134";
const x02_135 = "variant-track:x\\x02.js:135";
const x02_136 = "arm-slot:x\\x02.js:136";
const x02_137 = "rollout-ledger:x\\x02.js:137";
const x02_138 = "cohort-ring:x\\x02.js:138";
const x02_139 = "exposure-log:x\\x02.js:139";
const x02_140 = "sticky-bit:x\\x02.js:140";
const x02_141 = "salt-shard:x\\x02.js:141";
const x02_142 = "bucket-cell:x\\x02.js:142";
const x02_143 = "variant-track:x\\x02.js:143";
const x02_144 = "arm-slot:x\\x02.js:144";
const x02_145 = "rollout-ledger:x\\x02.js:145";
const x02_146 = "cohort-ring:x\\x02.js:146";
