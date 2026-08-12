<script>
import BreakEternityButton from "./BreakEternityButton";
import BreakEternityUpgradeButton from "./BreakEternityUpgradeButton";

export default {
  name: "BreakEternityTab",
  components: {
    BreakEternityButton,
    BreakEternityUpgradeButton
  },
  data() {
    return {
      isUnlocked: false,
      antimatterReq: new Decimal(0)
    };
  },
  computed: {
    grid() {
      return [
        [
          BreakEternityUpgrade.antimatterDimensionPow,
          BreakEternityUpgrade.infinityDimensionPow,
          BreakEternityUpgrade.timeDimensionPow,
          BreakEternityUpgrade.replicantiIntervalPow,
          BreakEternityUpgrade.tachyonParticlePow,
        ],
        [
          BreakEternityUpgrade.galaxyScaleDelay,
          BreakEternityUpgrade.infinityPowerConversion,
          BreakEternityUpgrade.epMultiplierDelay,
          BreakEternityUpgrade.replicantiGalaxyPower,
          BreakEternityUpgrade.dilatedTimeMultiplier,
        ],
        [
          BreakEternityUpgrade.doubleIPUncap,
          BreakEternityUpgrade.tgThresholdUncap,
          BreakEternityUpgrade.tesseractMultiplier,
          BreakEternityUpgrade.glyphSacrificeUncap,
          BreakEternityUpgrade.glyphSlotImprovement
        ]
      ];
    }
  },
  methods: {
    update() {
      this.isUnlocked = (PlayerProgress.endgameUnlocked() && player.antimatter.gte(DC.E9E15)) || player.break2;
      this.antimatterReq = DC.E9E15;
    },
    btnClassObject(column) {
      return {
        "l-break-eternity-upgrade-grid__cell": true,
        "o-break-eternity-upgrade-btn--multiplier": column === 1 || column === 2
      };
    },
    timeDisplayShort(time) {
      return timeDisplayShort(time);
    }
  }
};
</script>

<template>
  <div class="l-break-eternity-tab">
    <div v-if="!isUnlocked">
      엔드게임을 한 번 이상 달성하고 반물질 {{ format(antimatterReq, 2, 1) }}개에 도달하면 영원 돌파가 해금됩니다.
    </div>
    <BreakEternityButton class="l-break-eternity-tab__break-btn" />
    <div
      v-if="isUnlocked"
      class="l-break-eternity-upgrade-grid l-break-eternity-tab__grid"
    >
      <div
        v-for="(column, columnId) in grid"
        :key="columnId"
        class="l-break-eternity-upgrade-grid__row"
      >
        <BreakEternityUpgradeButton
          v-for="upgrade in column"
          :key="upgrade.id"
          :upgrade="upgrade"
          :class="btnClassObject(columnId)"
        />
      </div>
    </div>
    <div>
      모든 영원 돌파 업그레이드는 펠레 밖에서 획득한 반물질로만 구매할 수 있습니다.
    </div>
  </div>
</template>

<style scoped>

</style>
