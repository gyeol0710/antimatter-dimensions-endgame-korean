<script>
import AntimatterDimensionProgressBar from "./AntimatterDimensionProgressBar";
import AntimatterDimensionRow from "@/components/tabs/antimatter-dimensions/ModernAntimatterDimensionRow";
import AntimatterGalaxyRow from "@/components/tabs/antimatter-dimensions/ModernAntimatterGalaxyRow";
import DimensionBoostRow from "@/components/tabs/antimatter-dimensions/ModernDimensionBoostRow";
import PrimaryButton from "@/components/PrimaryButton";
import TickspeedRow from "@/components/tabs/antimatter-dimensions/TickspeedRow";

export default {
  name: "ModernAntimatterDimensionsTab",
  components: {
    PrimaryButton,
    AntimatterDimensionProgressBar,
    AntimatterDimensionRow,
    AntimatterGalaxyRow,
    DimensionBoostRow,
    TickspeedRow
  },
  data() {
    return {
      hasDimensionBoosts: false,
      buyUntil10: true,
      isSacrificeUnlocked: false,
      isSacrificeAffordable: false,
      buy10Mult: new Decimal(0),
      buyOoMPow: new Decimal(0),
      currentSacrifice: new Decimal(0),
      currentPower: new Decimal(0),
      sacrificeBoost: new Decimal(0),
      sacrificePower: new Decimal(0),
      disabledCondition: "",
      isQuickResetAvailable: false,
      hasContinuum: false,
      isContinuumActive: false,
      multiplierText: "",
      isFullyAutomated: false,
    };
  },
  computed: {
    sacrificeTooltip() {
      if (this.isFullyAutomated) {
        return "차원 희생 자동구매기가 활성화되어 있고 도전과제 118을 달성하여, 차원 희생이 완전히 자동화되었습니다";
      }
      if (Ascensions.sacA.isUnlocked) return `제8 반물질 차원을 +${formatPow(this.sacrificePower, 2, 3)}만큼 강화`;
      return `제8 반물질 차원을 ${formatX(this.sacrificeBoost, 2, 2)}만큼 강화`;
    },
    sacText() {
      if (Ascensions.sacA.isUnlocked) return `차원 희생 (${formatPow(this.sacrificePower, 2, 3)})`;
      return `차원 희생 (${formatX(this.sacrificeBoost, 2, 2)})`;
    }
  },
  methods: {
    maxAll() {
      maxAll();
    },
    sacrifice() {
      sacrificeBtnClick();
    },
    // Toggle single/10 without Continuum, otherwise cycle through all 3 if it's unlocked
    changeBuyMode() {
      if (!this.hasContinuum) {
        player.buyUntil10 = !player.buyUntil10;
        return;
      }
      // "Continuum" => "Until 10" => "Buy 1" => "Continuum"
      if (this.isContinuumActive) {
        Laitela.setContinuum(false);
        player.buyUntil10 = true;
      } else if (player.buyUntil10) {
        player.buyUntil10 = false;
      } else {
        if (ImaginaryUpgrade(21).isLockingMechanics && player.auto.disableContinuum) {
          ImaginaryUpgrade(21).tryShowWarningModal();
          return;
        }
        if (DualityUpgrade(21).isLockingMechanics && player.auto.disableContinuum) {
          DualityUpgrade(21).tryShowWarningModal();
          return;
        }
        Laitela.setContinuum(true);
      }
    },
    getUntil10Display() {
      if (this.isContinuumActive) return "연속체";
      return this.buyUntil10 ? "10개 구매 " : "1개 구매";
    },
    update() {
      this.hasDimensionBoosts = player.dimensionBoosts.gt(0);
      this.buyUntil10 = player.buyUntil10;
      this.hasContinuum = Laitela.continuumUnlocked;
      this.isContinuumActive = Laitela.continuumActive;
      this.isQuickResetAvailable = Player.isInAntimatterChallenge && Player.antimatterChallenge.isQuickResettable;

      const isSacrificeUnlocked = Sacrifice.isVisible;
      this.isSacrificeUnlocked = isSacrificeUnlocked;

      this.buy10Mult.copyFrom(AntimatterDimensions.buyTenMultiplier);
      this.buyOoMPow.copyFrom(AntimatterDimensions.buyOoMPower);

      this.multiplierText = Ascensions.b10mA.isUnlocked
        ? `자릿수 단위 구매 거듭제곱: +${formatPow(this.buyOoMPow, 2, 3)}`
        : `차원 10개 구매 배율: ${formatX(this.buy10Mult, 2, 2)}`;
      if (!isSacrificeUnlocked) return;
      this.isFullyAutomated = Autobuyer.sacrifice.isActive && Achievement(118).canBeApplied &&
        (!player.disablePostReality || (Alpha.isRunning && Alpha.currentStage >= 12) ||
        (LHC.voidRunning && NullUpgrade.limerick1.isBought));
      this.isSacrificeAffordable = Sacrifice.canSacrifice && !this.isFullyAutomated;
      this.currentSacrifice.copyFrom(Sacrifice.totalBoost);
      this.currentPower.copyFrom(Sacrifice.totalPower);
      this.sacrificeBoost.copyFrom(Sacrifice.nextBoost);
      this.sacrificePower.copyFrom(Sacrifice.nextPower);
      this.disabledCondition = Sacrifice.disabledCondition;
      const sacText = this.isSacrificeUnlocked
        ? (Ascensions.sacA.isUnlocked
          ? ` | 차원 희생 거듭제곱: ${formatPow(this.currentPower, 2, 3)}`
          : ` | 차원 희생 배율: ${formatX(this.currentSacrifice, 2, 2)}`)
        : "";
      this.multiplierText += sacText;
    }
  }
};
</script>

<template>
  <div class="l-antimatter-dim-tab">
    <div class="modes-container">
      <button
        class="o-primary-btn l-button-container"
        @click="changeBuyMode"
      >
        {{ getUntil10Display() }}
      </button>
      <PrimaryButton
        v-show="isSacrificeUnlocked"
        v-tooltip="sacrificeTooltip"
        :enabled="isSacrificeAffordable"
        class="o-primary-btn--sacrifice"
        @click="sacrifice"
      >
        <span v-if="isSacrificeAffordable">{{ sacText }}</span>
        <span v-else-if="isFullyAutomated && disabledCondition !== ''">
          차원 희생이 자동화됨 (도전과제 118)
        </span>
        <span v-else>차원 희생 비활성화됨 ({{ disabledCondition }})</span>
      </PrimaryButton>
      <button
        class="o-primary-btn l-button-container"
        @click="maxAll"
      >
        전체 구매 (M)
      </button>
    </div>
    <span>{{ multiplierText }}</span>
    <TickspeedRow />
    <div class="l-dimensions-container">
      <AntimatterDimensionRow
        v-for="tier in 8"
        :key="tier"
        :tier="tier"
      />
    </div>
    <div class="resets-container">
      <DimensionBoostRow />
      <PrimaryButton
        v-if="isQuickResetAvailable"
        class="o-primary-btn--quick-reset"
        onclick="softReset(-1, true, true)"
      >
        차원 가속 초기화 수행
        <span v-if="hasDimensionBoosts"> (차원 가속 하나를 잃음)</span>
        <span v-else> (획득 없음)</span>
      </PrimaryButton>
      <AntimatterGalaxyRow />
    </div>
    <AntimatterDimensionProgressBar />
  </div>
</template>

<style scoped>
.l-button-container {
  width: 100px;
  height: 30px;
  padding: 0;
}
</style>
