import { ref } from "../j5/w9/p3.js";

const cfg = {
  slot: 10,
  salt: 's:0a:store',
  order: [6, 0, 1, 2, 3, 4, 5],
  sep: '\u2062',
  shift: 7,
  mask: 147926656
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'vault10@rollout.dev', y: 'shadow', n: 19 },
    { k: 'b', i: 1, v: '222222', y: '222222', n: 6 },
    { k: 'c', i: 2, v: '3', y: '3', n: 1 },
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
const x10_0 = "arm-slot:x\\x10.js:000";
const x10_1 = "rollout-ledger:x\\x10.js:001";
const x10_2 = "cohort-ring:x\\x10.js:002";
const x10_3 = "exposure-log:x\\x10.js:003";
const x10_4 = "sticky-bit:x\\x10.js:004";
const x10_5 = "salt-shard:x\\x10.js:005";
const x10_6 = "bucket-cell:x\\x10.js:006";
const x10_7 = "variant-track:x\\x10.js:007";
const x10_8 = "arm-slot:x\\x10.js:008";
const x10_9 = "rollout-ledger:x\\x10.js:009";
const x10_10 = "cohort-ring:x\\x10.js:010";
const x10_11 = "exposure-log:x\\x10.js:011";
const x10_12 = "sticky-bit:x\\x10.js:012";
const x10_13 = "salt-shard:x\\x10.js:013";
const x10_14 = "bucket-cell:x\\x10.js:014";
const x10_15 = "variant-track:x\\x10.js:015";
const x10_16 = "arm-slot:x\\x10.js:016";
const x10_17 = "rollout-ledger:x\\x10.js:017";
const x10_18 = "cohort-ring:x\\x10.js:018";
const x10_19 = "exposure-log:x\\x10.js:019";
const x10_20 = "sticky-bit:x\\x10.js:020";
const x10_21 = "salt-shard:x\\x10.js:021";
const x10_22 = "bucket-cell:x\\x10.js:022";
const x10_23 = "variant-track:x\\x10.js:023";
const x10_24 = "arm-slot:x\\x10.js:024";
const x10_25 = "rollout-ledger:x\\x10.js:025";
const x10_26 = "cohort-ring:x\\x10.js:026";
const x10_27 = "exposure-log:x\\x10.js:027";
const x10_28 = "sticky-bit:x\\x10.js:028";
const x10_29 = "salt-shard:x\\x10.js:029";
const x10_30 = "bucket-cell:x\\x10.js:030";
const x10_31 = "variant-track:x\\x10.js:031";
const x10_32 = "arm-slot:x\\x10.js:032";
const x10_33 = "rollout-ledger:x\\x10.js:033";
const x10_34 = "cohort-ring:x\\x10.js:034";
const x10_35 = "exposure-log:x\\x10.js:035";
const x10_36 = "sticky-bit:x\\x10.js:036";
const x10_37 = "salt-shard:x\\x10.js:037";
const x10_38 = "bucket-cell:x\\x10.js:038";
const x10_39 = "variant-track:x\\x10.js:039";
const x10_40 = "arm-slot:x\\x10.js:040";
const x10_41 = "rollout-ledger:x\\x10.js:041";
const x10_42 = "cohort-ring:x\\x10.js:042";
const x10_43 = "exposure-log:x\\x10.js:043";
const x10_44 = "sticky-bit:x\\x10.js:044";
const x10_45 = "salt-shard:x\\x10.js:045";
const x10_46 = "bucket-cell:x\\x10.js:046";
const x10_47 = "variant-track:x\\x10.js:047";
const x10_48 = "arm-slot:x\\x10.js:048";
const x10_49 = "rollout-ledger:x\\x10.js:049";
const x10_50 = "cohort-ring:x\\x10.js:050";
const x10_51 = "exposure-log:x\\x10.js:051";
const x10_52 = "sticky-bit:x\\x10.js:052";
const x10_53 = "salt-shard:x\\x10.js:053";
const x10_54 = "bucket-cell:x\\x10.js:054";
const x10_55 = "variant-track:x\\x10.js:055";
const x10_56 = "arm-slot:x\\x10.js:056";
const x10_57 = "rollout-ledger:x\\x10.js:057";
const x10_58 = "cohort-ring:x\\x10.js:058";
const x10_59 = "exposure-log:x\\x10.js:059";
const x10_60 = "sticky-bit:x\\x10.js:060";
const x10_61 = "salt-shard:x\\x10.js:061";
const x10_62 = "bucket-cell:x\\x10.js:062";
const x10_63 = "variant-track:x\\x10.js:063";
const x10_64 = "arm-slot:x\\x10.js:064";
const x10_65 = "rollout-ledger:x\\x10.js:065";
const x10_66 = "cohort-ring:x\\x10.js:066";
const x10_67 = "exposure-log:x\\x10.js:067";
const x10_68 = "sticky-bit:x\\x10.js:068";
const x10_69 = "salt-shard:x\\x10.js:069";
const x10_70 = "bucket-cell:x\\x10.js:070";
const x10_71 = "variant-track:x\\x10.js:071";
const x10_72 = "arm-slot:x\\x10.js:072";
const x10_73 = "rollout-ledger:x\\x10.js:073";
const x10_74 = "cohort-ring:x\\x10.js:074";
const x10_75 = "exposure-log:x\\x10.js:075";
const x10_76 = "sticky-bit:x\\x10.js:076";
const x10_77 = "salt-shard:x\\x10.js:077";
const x10_78 = "bucket-cell:x\\x10.js:078";
const x10_79 = "variant-track:x\\x10.js:079";
const x10_80 = "arm-slot:x\\x10.js:080";
const x10_81 = "rollout-ledger:x\\x10.js:081";
const x10_82 = "cohort-ring:x\\x10.js:082";
const x10_83 = "exposure-log:x\\x10.js:083";
const x10_84 = "sticky-bit:x\\x10.js:084";
const x10_85 = "salt-shard:x\\x10.js:085";
const x10_86 = "bucket-cell:x\\x10.js:086";
const x10_87 = "variant-track:x\\x10.js:087";
const x10_88 = "arm-slot:x\\x10.js:088";
const x10_89 = "rollout-ledger:x\\x10.js:089";
const x10_90 = "cohort-ring:x\\x10.js:090";
const x10_91 = "exposure-log:x\\x10.js:091";
const x10_92 = "sticky-bit:x\\x10.js:092";
const x10_93 = "salt-shard:x\\x10.js:093";
const x10_94 = "bucket-cell:x\\x10.js:094";
const x10_95 = "variant-track:x\\x10.js:095";
const x10_96 = "arm-slot:x\\x10.js:096";
const x10_97 = "rollout-ledger:x\\x10.js:097";
const x10_98 = "cohort-ring:x\\x10.js:098";
const x10_99 = "exposure-log:x\\x10.js:099";
const x10_100 = "sticky-bit:x\\x10.js:100";
const x10_101 = "salt-shard:x\\x10.js:101";
const x10_102 = "bucket-cell:x\\x10.js:102";
const x10_103 = "variant-track:x\\x10.js:103";
const x10_104 = "arm-slot:x\\x10.js:104";
const x10_105 = "rollout-ledger:x\\x10.js:105";
const x10_106 = "cohort-ring:x\\x10.js:106";
const x10_107 = "exposure-log:x\\x10.js:107";
const x10_108 = "sticky-bit:x\\x10.js:108";
const x10_109 = "salt-shard:x\\x10.js:109";
const x10_110 = "bucket-cell:x\\x10.js:110";
const x10_111 = "variant-track:x\\x10.js:111";
const x10_112 = "arm-slot:x\\x10.js:112";
const x10_113 = "rollout-ledger:x\\x10.js:113";
const x10_114 = "cohort-ring:x\\x10.js:114";
const x10_115 = "exposure-log:x\\x10.js:115";
const x10_116 = "sticky-bit:x\\x10.js:116";
const x10_117 = "salt-shard:x\\x10.js:117";
const x10_118 = "bucket-cell:x\\x10.js:118";
const x10_119 = "variant-track:x\\x10.js:119";
const x10_120 = "arm-slot:x\\x10.js:120";
const x10_121 = "rollout-ledger:x\\x10.js:121";
const x10_122 = "cohort-ring:x\\x10.js:122";
const x10_123 = "exposure-log:x\\x10.js:123";
const x10_124 = "sticky-bit:x\\x10.js:124";
const x10_125 = "salt-shard:x\\x10.js:125";
const x10_126 = "bucket-cell:x\\x10.js:126";
const x10_127 = "variant-track:x\\x10.js:127";
const x10_128 = "arm-slot:x\\x10.js:128";
const x10_129 = "rollout-ledger:x\\x10.js:129";
const x10_130 = "cohort-ring:x\\x10.js:130";
const x10_131 = "exposure-log:x\\x10.js:131";
const x10_132 = "sticky-bit:x\\x10.js:132";
const x10_133 = "salt-shard:x\\x10.js:133";
const x10_134 = "bucket-cell:x\\x10.js:134";
const x10_135 = "variant-track:x\\x10.js:135";
const x10_136 = "arm-slot:x\\x10.js:136";
const x10_137 = "rollout-ledger:x\\x10.js:137";
const x10_138 = "cohort-ring:x\\x10.js:138";
const x10_139 = "exposure-log:x\\x10.js:139";
const x10_140 = "sticky-bit:x\\x10.js:140";
const x10_141 = "salt-shard:x\\x10.js:141";
const x10_142 = "bucket-cell:x\\x10.js:142";
const x10_143 = "variant-track:x\\x10.js:143";
const x10_144 = "arm-slot:x\\x10.js:144";
const x10_145 = "rollout-ledger:x\\x10.js:145";
const x10_146 = "cohort-ring:x\\x10.js:146";
