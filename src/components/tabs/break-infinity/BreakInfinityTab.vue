<script>
import BreakInfinityButton from "./BreakInfinityButton";
import InfinityUpgradeButton from "@/components/InfinityUpgradeButton";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "BreakInfinityTab",
  components: {
    PrimaryButton,
    BreakInfinityButton,
    InfinityUpgradeButton
  },
  data() {
    return {
      isUnlocked: false,
      chargeUnlocked: false,
      totalCharges: 0,
      chargesUsed: 0,
      disCharge: false
    };
  },
  computed: {
    grid() {
      return [
        [
          BreakInfinityUpgrade.totalAMMult,
          BreakInfinityUpgrade.currentAMMult,
          BreakInfinityUpgrade.galaxyBoost,
        ],
        [
          BreakInfinityUpgrade.infinitiedMult,
          BreakInfinityUpgrade.achievementMult,
          BreakInfinityUpgrade.slowestChallengeMult,
        ],
        [
          BreakInfinityUpgrade.infinitiedGen,
          BreakInfinityUpgrade.autobuyMaxDimboosts,
          BreakInfinityUpgrade.autobuyerSpeed
        ],
        [
          BreakInfinityUpgrade.tickspeedCostMult,
          BreakInfinityUpgrade.dimCostMult,
          BreakInfinityUpgrade.ipGen
        ]
      ];
    },
    disChargeClassObject() {
      return {
        "o-primary-btn--subtab-option": true,
        "o-primary-btn--charged-respec-active": this.disCharge
      };
    }
  },
  watch: {
    disCharge(newValue) {
      player.endgame.overcharge.discharge.infinite = newValue;
    }
  },
  methods: {
    update() {
      this.isUnlocked = Autobuyer.bigCrunch.hasMaxedInterval;
      this.chargeUnlocked = Ascensions.ocA.isUnlocked;
      this.totalCharges = player.endgame.overcharge.completions.bi;
      this.chargesUsed = player.endgame.overcharge.completions.bi - player.endgame.overcharge.chargesLeft.infinite;
      this.disCharge = player.endgame.overcharge.discharge.infinite;
    },
    btnClassObject(column) {
      return {
        "l-infinity-upgrade-grid__cell": true,
        "o-infinity-upgrade-btn--multiplier": column === 3
      };
    },
    timeDisplayShort(time) {
      return timeDisplayShort(time);
    }
  }
};
</script>

<template>
  <div class="l-break-infinity-tab">
    <div v-if="!isUnlocked">
      빅 크런치 자동구매기의 간격을 {{ format(0.1, 1, 1) }}초까지 줄이면 무한 돌파가 해금됩니다.
    </div>
    <div
      v-if="chargeUnlocked"
      class="c-subtab-option-container"
    >
      <PrimaryButton
        :class="disChargeClassObject"
        @click="disCharge = !disCharge"
      >
        다음 엔드게임에서 충전된 무한 돌파 업그레이드 재분배
      </PrimaryButton>
    </div>
    <div v-if="chargeUnlocked">
      무한 돌파 업그레이드 {{ formatInt(totalCharges) }}개 중 {{ formatInt(chargesUsed) }}개를 충전했습니다.
      충전된 무한 돌파 업그레이드는 효과가 달라집니다.
      <br>
      Shift 키를 누르면 충전된 무한 돌파 업그레이드를 표시합니다.
      <span> 엔드게임에서 선택을 자유롭게 재분배할 수 있습니다.</span>
    </div>
    <BreakInfinityButton class="l-break-infinity-tab__break-btn" />
    <div
      v-if="isUnlocked"
      class="l-break-infinity-upgrade-grid l-break-infinity-tab__grid"
    >
      <div
        v-for="(column, columnId) in grid"
        :key="columnId"
        class="l-break-infinity-upgrade-grid__row"
      >
        <InfinityUpgradeButton
          v-for="upgrade in column"
          :key="upgrade.id"
          :upgrade="upgrade"
          :class="btnClassObject(columnId)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
