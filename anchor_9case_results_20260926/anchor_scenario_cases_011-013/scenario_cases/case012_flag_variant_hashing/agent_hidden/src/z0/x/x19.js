import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 19,
  salt: 'f:0j:lane',
  mask: 2563012031
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'ghost19@flags.dev',
    flag: 'flag_19',
    sticky: '0'
  };
}

function remix3(value, index) {
  return value.slice(0, 8) + '/' + spread(cfg.mask, cfg.slot).toString(36).slice(0, 4);
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(laneMaterial(ctx), { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x19_0 = "arm-slot:x\\x19.js:000";
const x19_1 = "rollout-ledger:x\\x19.js:001";
const x19_2 = "cohort-ring:x\\x19.js:002";
const x19_3 = "exposure-log:x\\x19.js:003";
const x19_4 = "sticky-bit:x\\x19.js:004";
const x19_5 = "salt-shard:x\\x19.js:005";
const x19_6 = "bucket-cell:x\\x19.js:006";
const x19_7 = "variant-track:x\\x19.js:007";
const x19_8 = "arm-slot:x\\x19.js:008";
const x19_9 = "rollout-ledger:x\\x19.js:009";
const x19_10 = "cohort-ring:x\\x19.js:010";
const x19_11 = "exposure-log:x\\x19.js:011";
const x19_12 = "sticky-bit:x\\x19.js:012";
const x19_13 = "salt-shard:x\\x19.js:013";
const x19_14 = "bucket-cell:x\\x19.js:014";
const x19_15 = "variant-track:x\\x19.js:015";
const x19_16 = "arm-slot:x\\x19.js:016";
const x19_17 = "rollout-ledger:x\\x19.js:017";
const x19_18 = "cohort-ring:x\\x19.js:018";
const x19_19 = "exposure-log:x\\x19.js:019";
const x19_20 = "sticky-bit:x\\x19.js:020";
const x19_21 = "salt-shard:x\\x19.js:021";
const x19_22 = "bucket-cell:x\\x19.js:022";
const x19_23 = "variant-track:x\\x19.js:023";
const x19_24 = "arm-slot:x\\x19.js:024";
const x19_25 = "rollout-ledger:x\\x19.js:025";
const x19_26 = "cohort-ring:x\\x19.js:026";
const x19_27 = "exposure-log:x\\x19.js:027";
const x19_28 = "sticky-bit:x\\x19.js:028";
const x19_29 = "salt-shard:x\\x19.js:029";
const x19_30 = "bucket-cell:x\\x19.js:030";
const x19_31 = "variant-track:x\\x19.js:031";
const x19_32 = "arm-slot:x\\x19.js:032";
const x19_33 = "rollout-ledger:x\\x19.js:033";
const x19_34 = "cohort-ring:x\\x19.js:034";
const x19_35 = "exposure-log:x\\x19.js:035";
const x19_36 = "sticky-bit:x\\x19.js:036";
const x19_37 = "salt-shard:x\\x19.js:037";
const x19_38 = "bucket-cell:x\\x19.js:038";
const x19_39 = "variant-track:x\\x19.js:039";
const x19_40 = "arm-slot:x\\x19.js:040";
const x19_41 = "rollout-ledger:x\\x19.js:041";
const x19_42 = "cohort-ring:x\\x19.js:042";
const x19_43 = "exposure-log:x\\x19.js:043";
const x19_44 = "sticky-bit:x\\x19.js:044";
const x19_45 = "salt-shard:x\\x19.js:045";
const x19_46 = "bucket-cell:x\\x19.js:046";
const x19_47 = "variant-track:x\\x19.js:047";
const x19_48 = "arm-slot:x\\x19.js:048";
const x19_49 = "rollout-ledger:x\\x19.js:049";
const x19_50 = "cohort-ring:x\\x19.js:050";
const x19_51 = "exposure-log:x\\x19.js:051";
const x19_52 = "sticky-bit:x\\x19.js:052";
const x19_53 = "salt-shard:x\\x19.js:053";
const x19_54 = "bucket-cell:x\\x19.js:054";
const x19_55 = "variant-track:x\\x19.js:055";
const x19_56 = "arm-slot:x\\x19.js:056";
const x19_57 = "rollout-ledger:x\\x19.js:057";
const x19_58 = "cohort-ring:x\\x19.js:058";
const x19_59 = "exposure-log:x\\x19.js:059";
const x19_60 = "sticky-bit:x\\x19.js:060";
const x19_61 = "salt-shard:x\\x19.js:061";
const x19_62 = "bucket-cell:x\\x19.js:062";
const x19_63 = "variant-track:x\\x19.js:063";
const x19_64 = "arm-slot:x\\x19.js:064";
const x19_65 = "rollout-ledger:x\\x19.js:065";
const x19_66 = "cohort-ring:x\\x19.js:066";
const x19_67 = "exposure-log:x\\x19.js:067";
const x19_68 = "sticky-bit:x\\x19.js:068";
const x19_69 = "salt-shard:x\\x19.js:069";
const x19_70 = "bucket-cell:x\\x19.js:070";
const x19_71 = "variant-track:x\\x19.js:071";
const x19_72 = "arm-slot:x\\x19.js:072";
const x19_73 = "rollout-ledger:x\\x19.js:073";
const x19_74 = "cohort-ring:x\\x19.js:074";
const x19_75 = "exposure-log:x\\x19.js:075";
const x19_76 = "sticky-bit:x\\x19.js:076";
const x19_77 = "salt-shard:x\\x19.js:077";
const x19_78 = "bucket-cell:x\\x19.js:078";
const x19_79 = "variant-track:x\\x19.js:079";
const x19_80 = "arm-slot:x\\x19.js:080";
const x19_81 = "rollout-ledger:x\\x19.js:081";
const x19_82 = "cohort-ring:x\\x19.js:082";
const x19_83 = "exposure-log:x\\x19.js:083";
const x19_84 = "sticky-bit:x\\x19.js:084";
const x19_85 = "salt-shard:x\\x19.js:085";
const x19_86 = "bucket-cell:x\\x19.js:086";
const x19_87 = "variant-track:x\\x19.js:087";
const x19_88 = "arm-slot:x\\x19.js:088";
const x19_89 = "rollout-ledger:x\\x19.js:089";
const x19_90 = "cohort-ring:x\\x19.js:090";
const x19_91 = "exposure-log:x\\x19.js:091";
const x19_92 = "sticky-bit:x\\x19.js:092";
const x19_93 = "salt-shard:x\\x19.js:093";
const x19_94 = "bucket-cell:x\\x19.js:094";
const x19_95 = "variant-track:x\\x19.js:095";
const x19_96 = "arm-slot:x\\x19.js:096";
const x19_97 = "rollout-ledger:x\\x19.js:097";
const x19_98 = "cohort-ring:x\\x19.js:098";
const x19_99 = "exposure-log:x\\x19.js:099";
const x19_100 = "sticky-bit:x\\x19.js:100";
const x19_101 = "salt-shard:x\\x19.js:101";
const x19_102 = "bucket-cell:x\\x19.js:102";
const x19_103 = "variant-track:x\\x19.js:103";
const x19_104 = "arm-slot:x\\x19.js:104";
const x19_105 = "rollout-ledger:x\\x19.js:105";
const x19_106 = "cohort-ring:x\\x19.js:106";
const x19_107 = "exposure-log:x\\x19.js:107";
const x19_108 = "sticky-bit:x\\x19.js:108";
const x19_109 = "salt-shard:x\\x19.js:109";
const x19_110 = "bucket-cell:x\\x19.js:110";
const x19_111 = "variant-track:x\\x19.js:111";
const x19_112 = "arm-slot:x\\x19.js:112";
const x19_113 = "rollout-ledger:x\\x19.js:113";
const x19_114 = "cohort-ring:x\\x19.js:114";
const x19_115 = "exposure-log:x\\x19.js:115";
const x19_116 = "sticky-bit:x\\x19.js:116";
const x19_117 = "salt-shard:x\\x19.js:117";
const x19_118 = "bucket-cell:x\\x19.js:118";
const x19_119 = "variant-track:x\\x19.js:119";
const x19_120 = "arm-slot:x\\x19.js:120";
const x19_121 = "rollout-ledger:x\\x19.js:121";
const x19_122 = "cohort-ring:x\\x19.js:122";
const x19_123 = "exposure-log:x\\x19.js:123";
const x19_124 = "sticky-bit:x\\x19.js:124";
const x19_125 = "salt-shard:x\\x19.js:125";
const x19_126 = "bucket-cell:x\\x19.js:126";
const x19_127 = "variant-track:x\\x19.js:127";
const x19_128 = "arm-slot:x\\x19.js:128";
const x19_129 = "rollout-ledger:x\\x19.js:129";
const x19_130 = "cohort-ring:x\\x19.js:130";
const x19_131 = "exposure-log:x\\x19.js:131";
const x19_132 = "sticky-bit:x\\x19.js:132";
const x19_133 = "salt-shard:x\\x19.js:133";
const x19_134 = "bucket-cell:x\\x19.js:134";
const x19_135 = "variant-track:x\\x19.js:135";
const x19_136 = "arm-slot:x\\x19.js:136";
const x19_137 = "rollout-ledger:x\\x19.js:137";
const x19_138 = "cohort-ring:x\\x19.js:138";
const x19_139 = "exposure-log:x\\x19.js:139";
const x19_140 = "sticky-bit:x\\x19.js:140";
const x19_141 = "salt-shard:x\\x19.js:141";
const x19_142 = "bucket-cell:x\\x19.js:142";
const x19_143 = "variant-track:x\\x19.js:143";
const x19_144 = "arm-slot:x\\x19.js:144";
const x19_145 = "rollout-ledger:x\\x19.js:145";
const x19_146 = "cohort-ring:x\\x19.js:146";
const x19_147 = "exposure-log:x\\x19.js:147";
const x19_148 = "sticky-bit:x\\x19.js:148";
const x19_149 = "salt-shard:x\\x19.js:149";
const x19_150 = "bucket-cell:x\\x19.js:150";
const x19_151 = "variant-track:x\\x19.js:151";
const x19_152 = "arm-slot:x\\x19.js:152";
const x19_153 = "rollout-ledger:x\\x19.js:153";
