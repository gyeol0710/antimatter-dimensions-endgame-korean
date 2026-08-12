<script>
import CelestialDimensionBoostRow from "./ClassicCelestialDimensionBoostRow";
import CelestialDimensionRow from "./ClassicCelestialDimensionRow";
import CelestialGalaxyRow from "./ClassicCelestialGalaxyRow";
import CelestialTickspeedRow from "./CelestialTickspeedRow";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "ClassicCelestialDimensionTab",
  components: {
    PrimaryButton,
    CelestialDimensionBoostRow,
    CelestialDimensionRow,
    CelestialGalaxyRow,
    CelestialTickspeedRow
  },
  data() {
    return {
      celestialMatter: new Decimal(0),
      dimMultiplier: new Decimal(0),
      matterPerSecond: new Decimal(0),
      incomeType: "",
      conversionExponent: 0,
      nextDimCapIncrease: 0,
      totalDimCap: new Decimal(0),
      creditsClosed: false,
      showLockedDimCostNote: true,
      isEffectActive: false,
      isExpanded: false,
      isAnyAutobuyerUnlocked: false,
    };
  },
  methods: {
    update() {
      this.showLockedDimCostNote = !CelestialDimension(8).isUnlocked;
      this.celestialMatter.copyFrom(Currency.celestialMatter);
      this.conversionExponent = CelestialDimensions.conversionExponent;
      this.dimMultiplier.copyFrom(this.celestialMatter.pow(this.conversionExponent).max(1));
      this.matterPerSecond.copyFrom(CelestialDimension(1).productionPerRealSecond);
      this.incomeType = "셀레스티얼 물질";
      this.totalDimCap.copyFrom(CelestialDimensions.totalDimCap);
      this.creditsClosed = GameEnd.creditsEverClosed;
      this.isEffectActive = player.endgame.celestialMatterMultiplier.isActive;
      this.isExpanded = Achievement(221).isUnlocked;
      this.isAnyAutobuyerUnlocked = Autobuyer.celestialDimension(1).isUnlocked;
    },
    maxAll() {
      CelestialDimensions.buyMax();
    },
    toggleCelestialMatterMultiplier() {
      toggleCelestialMatter();
    },
    toggleAllAutobuyers() {
      toggleAllCelDims();
    }
  }
};
</script>

<template>
  <div class="l-celestial-dim-tab">
    <div class="c-subtab-option-container">
      <PrimaryButton
        class="o-primary-btn--subtab-option"
        @click="maxAll"
      >
        모두 최대 구매
      </PrimaryButton>
      <PrimaryButton
        class="o-primary-btn--subtab-option"
        @click="toggleCelestialMatterMultiplier"
      >
        셀레스티얼 물질 효과 전환
      </PrimaryButton>
      <PrimaryButton
        v-if="isAnyAutobuyerUnlocked"
        class="o-primary-btn--subtab-option"
        @click="toggleAllAutobuyers"
      >
        모든 자동 구매기 전환
      </PrimaryButton>
    </div>
    <div>
      <p>
        보유량:
        <span class="c-celestial-dim-description__accent">{{ format(celestialMatter, 2, 1) }}</span>
        셀레스티얼 물질 <span v-if="!isEffectActive">(비활성화)</span>,
        <br>
        <span>
          셀레스티얼 물질에
          <span class="c-celestial-dim-description__accent">{{ formatPow(conversionExponent, 2, 3) }}</span>
          제곱을 적용하여
        </span>
        게임 속도에
        <span class="c-celestial-dim-description__accent">{{ formatX(dimMultiplier, 2, 1) }}</span>
        배의 효과를 <span>제공합니다.</span>
      </p>
    </div>
    <div>
      모든 셀레스티얼 차원은 셀레스티얼 포인트 {{ format(totalDimCap, 2, 2) }}개까지 구매할 수 있습니다.
    </div>
    <div>초당 {{ format(matterPerSecond, 2, 0) }} {{ incomeType }}을 획득하고 있습니다.</div>
    <CelestialTickspeedRow v-if="isExpanded"/>
    <div class="l-dimensions-container">
      <CelestialDimensionRow
        v-for="tier in 8"
        :key="tier"
        :tier="tier"
      />
      <CelestialDimensionBoostRow v-if="isExpanded"/>
      <CelestialGalaxyRow v-if="isExpanded"/>
    </div>
    <div v-if="showLockedDimCostNote">
      Shift 키를 누르면 잠긴 셀레스티얼 차원의 셀레스티얼 포인트 비용을 볼 수 있습니다.
    </div>
  </div>
</template>
