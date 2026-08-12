<script>
import GlyphSetPreview from "@/components/GlyphSetPreview";

export default {
  name: "GlyphSetRecordsTab",
  components: {
    GlyphSetPreview
  },
  data() {
    return {
      recordGlyphInfo: [],
    };
  },
  methods: {
    update() {
      const bestReality = player.records.bestReality;
      const laitelaDim = 8 - Laitela.difficultyTier;
      this.recordGlyphInfo = [
        [true, cloneDeep(Glyphs.copyForRecords(bestReality.RMSet)), "최고 리얼리티 머신 획득량",
          `${format(bestReality.RM, 2, 2)} RM`],
        [true, cloneDeep(Glyphs.copyForRecords(bestReality.RMminSet)), "분당 최고 리얼리티 머신 획득량",
          `${format(bestReality.RMmin, 2, 2)} RM/min`],
        [true, cloneDeep(Glyphs.copyForRecords(bestReality.glyphLevelSet)), "최고 글리프 레벨",
          `레벨 ${formatHybridLarge(bestReality.glyphLevel, 3)}`],
        [true, cloneDeep(Glyphs.copyForRecords(bestReality.bestEPSet)), "최고 영원 포인트",
          `${format(bestReality.bestEP, 2, 2)} EP`],
        [true, cloneDeep(Glyphs.copyForRecords(bestReality.speedSet)), "가장 빠른 현실 (현실 시간)",
          `${TimeSpan.fromMilliseconds(new Decimal(bestReality.realTime)).toStringShort()}`],
        [player.celestials.teresa.bestRunAM.gt(1), cloneDeep(Glyphs.copyForRecords(player.celestials.teresa.bestAMSet)),
          `${Teresa.possessiveName} 현실에서 최고 반물질`,
          `${format(player.celestials.teresa.bestRunAM, 2, 2)} 반물질`],
        [Currency.imaginaryMachines.gt(0), cloneDeep(Glyphs.copyForRecords(bestReality.iMCapSet)),
          "최고 허수 머신 상한",
          `${format(MachineHandler.currentIMCap, 2, 2)} iM`],
        [Laitela.isUnlocked, cloneDeep(Glyphs.copyForRecords(bestReality.laitelaSet)),
          `최고 ${Laitela.displayName} 불안정화`,
          `${TimeSpan.fromSeconds(new Decimal(player.celestials.laitela.fastestCompletion)).toStringShort()},
          ${laitelaDim} ${pluralize("차원", laitelaDim)} (${formatX(Laitela.realityReward, 2, 2)} DM)`],
      ];
    },
  }
};
</script>

<template>
  <div class="l-glyph-set-tab">
    <div
      v-for="(set, idx) in recordGlyphInfo"
      :key="idx"
    >
      <div
        v-if="set[0]"
        class="l-glyph-set-entry"
      >
        {{ set[2] }}:
        <GlyphSetPreview
          v-if="set[0]"
          :key="idx"
          :glyphs="set[1]"
          :text="set[2]"
          :text-hidden="true"
        />
        {{ set[3] }}
        <br>
      </div>
    </div>
  </div>
</template>
