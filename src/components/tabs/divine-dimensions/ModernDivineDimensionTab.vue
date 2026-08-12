<script>
import DivineDimensionRow from "./ModernDivineDimensionRow";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "ModernDivineDimensionTab",
  components: {
    PrimaryButton,
    DivineDimensionRow
  },
  data() {
    return {
      divineMatter: new Decimal(0),
      divineEnergy: new Decimal(0),
      matterPerSecond: new Decimal(0),
      energyPerSecond: new Decimal(0),
      incomeType: "",
      dispBoth: false,
      conversionFormula1: new Decimal(0),
      conversionFormula2: 0,
      conversionFormula3: 0,
      hardcap: new Decimal(0),
      creditsClosed: false,
      canProduceEnergy: false,
      isProducingEnergy: false,
      isAnyAutobuyerUnlocked: false
    };
  },
  computed: {
    changeProdDisplay() {
      return this.isProducingEnergy
        ? "신성 물질 생산"
        : "신성 에너지 생산";
    },
    currencyProd() {
      return this.isProducingEnergy
        ? `${format(this.energyPerSecond, 2, 2)}`
        : `${format(this.matterPerSecond, 2, 0)}`;
    },
  },
  methods: {
    update() {
      this.divineMatter.copyFrom(Currency.divineMatter);
      this.divineEnergy.copyFrom(Currency.divineEnergy);
      this.matterPerSecond.copyFrom(DivineDimension(1).productionPerSecond);
      this.energyPerSecond.copyFrom(DivineDimensions.energyPerSecond);
      this.incomeType = player.celestials.pelle.divinity.isProducingEnergy ? "신성 에너지" : "신성 물질";
      this.dispBoth = DivinityUpgrade.divineL2U10.isBought;
      this.conversionFormula1 = DivineDimensions.conversionFormula1;
      this.conversionFormula2 = DivineDimensions.conversionFormula2;
      this.conversionFormula3 = DivineDimensions.conversionFormula3;
      this.hardcap.copyFrom(DivineDimensions.HARDCAP);
      this.creditsClosed = GameEnd.creditsEverClosed;
      this.canProduceEnergy = DivinityUpgrade.divineL1U5.isBought;
      this.isProducingEnergy = player.celestials.pelle.divinity.isProducingEnergy;
      this.isAnyAutobuyerUnlocked = Autobuyer.divineDimension(1).isUnlocked;
    },
    maxAll() {
      DivineDimensions.buyMax();
    },
    shiftProd() {
      player.celestials.pelle.divinity.isProducingEnergy = !player.celestials.pelle.divinity.isProducingEnergy;
    },
    toggleAllAutobuyers() {
      toggleAllDivDims();
    }
  }
};
</script>

<template>
  <div class="l-divine-dim-tab">
    <div class="c-subtab-option-container">
      <PrimaryButton
        class="o-primary-btn--subtab-option"
        @click="maxAll"
      >
        모두 최대 구매
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
      <div v-if="canProduceEnergy">
        신성 에너지를 <span class="c-divine-dim-description__accent">{{ format(divineEnergy, 2, 1) }}</span> 보유하고 있습니다.
      </div>
      <div>
        <p>
          보유량:
          <span class="c-divine-dim-description__accent">{{ format(divineMatter, 2, 1) }}</span>
          신성 물질,
          <br>
          다음 효과로 환산됩니다:
          <span class="c-divine-dim-description__accent">{{ formatX(conversionFormula1, 2, 2) }}</span>
          엔드게임 및 에테리얼 파워 획득량 배수,
          <span class="c-divine-dim-description__accent">{{ formatPow(conversionFormula2, 2, 3) }}</span>
          파멸 상태의 반물질 지수와 모든 기계에 적용되는 제곱,
          <span class="c-divine-dim-description__accent">{{ formatPercents(conversionFormula3, 2, 2) }}</span>
          하드론과 Alpha 붕괴 잔재의 상한 도달 시간 감소.
        </p>
      </div>
      <div>신성 물질의 상한은 {{ format(hardcap, 2, 0) }}입니다.</div>
      <div v-if="!dispBoth">초당 획득량: {{ currencyProd }} {{ incomeType }}</div>
      <div v-if="dispBoth">
        <div>초당 신성 물질을 {{ format(matterPerSecond, 2, 0) }} 획득하고 있습니다.</div>
        <div>초당 신성 에너지를 {{ format(energyPerSecond, 2, 2) }} 획득하고 있습니다.</div>
      </div>
      <PrimaryButton
        v-if="canProduceEnergy && !dispBoth"
        class="o-primary-btn--subtab-option"
        @click="shiftProd"
      >
        {{ changeProdDisplay }}
      </PrimaryButton>
    </div>
    <div class="l-dimensions-container">
      <DivineDimensionRow
        v-for="tier in 8"
        :key="tier"
        :tier="tier"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
