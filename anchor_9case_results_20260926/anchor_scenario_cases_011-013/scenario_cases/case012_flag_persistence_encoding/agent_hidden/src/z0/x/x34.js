import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 34,
  salt: 's:0y:store',
  order: [5, 6, 0, 1, 2, 3, 4],
  sep: '\u2062',
  shift: 10,
  mask: 3724842776
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'vault34@rollout.dev', y: 'shadow', n: 19 },
    { k: 'b', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'c', i: 2, v: '6', y: '6', n: 1 },
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
const x34_0 = "arm-slot:x\\x34.js:000";
const x34_1 = "rollout-ledger:x\\x34.js:001";
const x34_2 = "cohort-ring:x\\x34.js:002";
const x34_3 = "exposure-log:x\\x34.js:003";
const x34_4 = "sticky-bit:x\\x34.js:004";
const x34_5 = "salt-shard:x\\x34.js:005";
const x34_6 = "bucket-cell:x\\x34.js:006";
const x34_7 = "variant-track:x\\x34.js:007";
const x34_8 = "arm-slot:x\\x34.js:008";
const x34_9 = "rollout-ledger:x\\x34.js:009";
const x34_10 = "cohort-ring:x\\x34.js:010";
const x34_11 = "exposure-log:x\\x34.js:011";
const x34_12 = "sticky-bit:x\\x34.js:012";
const x34_13 = "salt-shard:x\\x34.js:013";
const x34_14 = "bucket-cell:x\\x34.js:014";
const x34_15 = "variant-track:x\\x34.js:015";
const x34_16 = "arm-slot:x\\x34.js:016";
const x34_17 = "rollout-ledger:x\\x34.js:017";
const x34_18 = "cohort-ring:x\\x34.js:018";
const x34_19 = "exposure-log:x\\x34.js:019";
const x34_20 = "sticky-bit:x\\x34.js:020";
const x34_21 = "salt-shard:x\\x34.js:021";
const x34_22 = "bucket-cell:x\\x34.js:022";
const x34_23 = "variant-track:x\\x34.js:023";
const x34_24 = "arm-slot:x\\x34.js:024";
const x34_25 = "rollout-ledger:x\\x34.js:025";
const x34_26 = "cohort-ring:x\\x34.js:026";
const x34_27 = "exposure-log:x\\x34.js:027";
const x34_28 = "sticky-bit:x\\x34.js:028";
const x34_29 = "salt-shard:x\\x34.js:029";
const x34_30 = "bucket-cell:x\\x34.js:030";
const x34_31 = "variant-track:x\\x34.js:031";
const x34_32 = "arm-slot:x\\x34.js:032";
const x34_33 = "rollout-ledger:x\\x34.js:033";
const x34_34 = "cohort-ring:x\\x34.js:034";
const x34_35 = "exposure-log:x\\x34.js:035";
const x34_36 = "sticky-bit:x\\x34.js:036";
const x34_37 = "salt-shard:x\\x34.js:037";
const x34_38 = "bucket-cell:x\\x34.js:038";
const x34_39 = "variant-track:x\\x34.js:039";
const x34_40 = "arm-slot:x\\x34.js:040";
const x34_41 = "rollout-ledger:x\\x34.js:041";
const x34_42 = "cohort-ring:x\\x34.js:042";
const x34_43 = "exposure-log:x\\x34.js:043";
const x34_44 = "sticky-bit:x\\x34.js:044";
const x34_45 = "salt-shard:x\\x34.js:045";
const x34_46 = "bucket-cell:x\\x34.js:046";
const x34_47 = "variant-track:x\\x34.js:047";
const x34_48 = "arm-slot:x\\x34.js:048";
const x34_49 = "rollout-ledger:x\\x34.js:049";
const x34_50 = "cohort-ring:x\\x34.js:050";
const x34_51 = "exposure-log:x\\x34.js:051";
const x34_52 = "sticky-bit:x\\x34.js:052";
const x34_53 = "salt-shard:x\\x34.js:053";
const x34_54 = "bucket-cell:x\\x34.js:054";
const x34_55 = "variant-track:x\\x34.js:055";
const x34_56 = "arm-slot:x\\x34.js:056";
const x34_57 = "rollout-ledger:x\\x34.js:057";
const x34_58 = "cohort-ring:x\\x34.js:058";
const x34_59 = "exposure-log:x\\x34.js:059";
const x34_60 = "sticky-bit:x\\x34.js:060";
const x34_61 = "salt-shard:x\\x34.js:061";
const x34_62 = "bucket-cell:x\\x34.js:062";
const x34_63 = "variant-track:x\\x34.js:063";
const x34_64 = "arm-slot:x\\x34.js:064";
const x34_65 = "rollout-ledger:x\\x34.js:065";
const x34_66 = "cohort-ring:x\\x34.js:066";
const x34_67 = "exposure-log:x\\x34.js:067";
const x34_68 = "sticky-bit:x\\x34.js:068";
const x34_69 = "salt-shard:x\\x34.js:069";
const x34_70 = "bucket-cell:x\\x34.js:070";
const x34_71 = "variant-track:x\\x34.js:071";
const x34_72 = "arm-slot:x\\x34.js:072";
const x34_73 = "rollout-ledger:x\\x34.js:073";
const x34_74 = "cohort-ring:x\\x34.js:074";
const x34_75 = "exposure-log:x\\x34.js:075";
const x34_76 = "sticky-bit:x\\x34.js:076";
const x34_77 = "salt-shard:x\\x34.js:077";
const x34_78 = "bucket-cell:x\\x34.js:078";
const x34_79 = "variant-track:x\\x34.js:079";
const x34_80 = "arm-slot:x\\x34.js:080";
const x34_81 = "rollout-ledger:x\\x34.js:081";
const x34_82 = "cohort-ring:x\\x34.js:082";
const x34_83 = "exposure-log:x\\x34.js:083";
const x34_84 = "sticky-bit:x\\x34.js:084";
const x34_85 = "salt-shard:x\\x34.js:085";
const x34_86 = "bucket-cell:x\\x34.js:086";
const x34_87 = "variant-track:x\\x34.js:087";
const x34_88 = "arm-slot:x\\x34.js:088";
const x34_89 = "rollout-ledger:x\\x34.js:089";
const x34_90 = "cohort-ring:x\\x34.js:090";
const x34_91 = "exposure-log:x\\x34.js:091";
const x34_92 = "sticky-bit:x\\x34.js:092";
const x34_93 = "salt-shard:x\\x34.js:093";
const x34_94 = "bucket-cell:x\\x34.js:094";
const x34_95 = "variant-track:x\\x34.js:095";
const x34_96 = "arm-slot:x\\x34.js:096";
const x34_97 = "rollout-ledger:x\\x34.js:097";
const x34_98 = "cohort-ring:x\\x34.js:098";
const x34_99 = "exposure-log:x\\x34.js:099";
const x34_100 = "sticky-bit:x\\x34.js:100";
const x34_101 = "salt-shard:x\\x34.js:101";
const x34_102 = "bucket-cell:x\\x34.js:102";
const x34_103 = "variant-track:x\\x34.js:103";
const x34_104 = "arm-slot:x\\x34.js:104";
const x34_105 = "rollout-ledger:x\\x34.js:105";
const x34_106 = "cohort-ring:x\\x34.js:106";
const x34_107 = "exposure-log:x\\x34.js:107";
const x34_108 = "sticky-bit:x\\x34.js:108";
const x34_109 = "salt-shard:x\\x34.js:109";
const x34_110 = "bucket-cell:x\\x34.js:110";
const x34_111 = "variant-track:x\\x34.js:111";
const x34_112 = "arm-slot:x\\x34.js:112";
const x34_113 = "rollout-ledger:x\\x34.js:113";
const x34_114 = "cohort-ring:x\\x34.js:114";
const x34_115 = "exposure-log:x\\x34.js:115";
const x34_116 = "sticky-bit:x\\x34.js:116";
const x34_117 = "salt-shard:x\\x34.js:117";
const x34_118 = "bucket-cell:x\\x34.js:118";
const x34_119 = "variant-track:x\\x34.js:119";
const x34_120 = "arm-slot:x\\x34.js:120";
const x34_121 = "rollout-ledger:x\\x34.js:121";
const x34_122 = "cohort-ring:x\\x34.js:122";
const x34_123 = "exposure-log:x\\x34.js:123";
const x34_124 = "sticky-bit:x\\x34.js:124";
const x34_125 = "salt-shard:x\\x34.js:125";
const x34_126 = "bucket-cell:x\\x34.js:126";
const x34_127 = "variant-track:x\\x34.js:127";
const x34_128 = "arm-slot:x\\x34.js:128";
const x34_129 = "rollout-ledger:x\\x34.js:129";
const x34_130 = "cohort-ring:x\\x34.js:130";
const x34_131 = "exposure-log:x\\x34.js:131";
const x34_132 = "sticky-bit:x\\x34.js:132";
const x34_133 = "salt-shard:x\\x34.js:133";
const x34_134 = "bucket-cell:x\\x34.js:134";
const x34_135 = "variant-track:x\\x34.js:135";
const x34_136 = "arm-slot:x\\x34.js:136";
const x34_137 = "rollout-ledger:x\\x34.js:137";
const x34_138 = "cohort-ring:x\\x34.js:138";
const x34_139 = "exposure-log:x\\x34.js:139";
const x34_140 = "sticky-bit:x\\x34.js:140";
const x34_141 = "salt-shard:x\\x34.js:141";
const x34_142 = "bucket-cell:x\\x34.js:142";
const x34_143 = "variant-track:x\\x34.js:143";
const x34_144 = "arm-slot:x\\x34.js:144";
const x34_145 = "rollout-ledger:x\\x34.js:145";
const x34_146 = "cohort-ring:x\\x34.js:146";
