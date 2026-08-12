<script>
import InfinityDimensionRow from "./ModernInfinityDimensionRow";
import PrimaryButton from "@/components/PrimaryButton";
import PrimaryToggleButton from "@/components/PrimaryToggleButton";

export default {
  name: "ModernInfinityDimensionsTab",
  components: {
    PrimaryButton,
    PrimaryToggleButton,
    InfinityDimensionRow
  },
  data() {
    return {
      infinityPower: new Decimal(0),
      dimMultiplier: new Decimal(0),
      powerPerSecond: new Decimal(0),
      incomeType: "",
      isEC8Running: false,
      EC8PurchasesLeft: 0,
      isEC9Running: false,
      isEnslavedRunning: false,
      isAnyAutobuyerUnlocked: false,
      conversionRate: 0,
      nextDimCapIncrease: new Decimal(0),
      tesseractCost: new Decimal(0),
      totalDimCap: new Decimal(0),
      canBuyTesseract: false,
      enslavedCompleted: false,
      boughtTesseracts: 0,
      extraTesseracts: 0,
      creditsClosed: false,
      showLockedDimCostNote: true,
      isEndgameUnlocked: false,
      infinityDimCompressionMagnitude: 0,
      infinityDimOverflow: 0,
      infinityDimStart: new Decimal(0),
      infinityDimCompressionMagnitude2: 0,
      infinityDimOverflow2: 0,
      infinityDimStart2: new Decimal(0),
      hasSecond: false,
      freeTesseractSoftcap: 0,
      freeTesseractHardcap: 0,
      isAutoUnlocked: false,
      isAutoActive: false,
      isAlphaDestroyed: false,
    };
  },
  computed: {
    tesseractCountString() {
      const extra = this.extraTesseracts > 0 ? ` + ${format(this.extraTesseracts, 2, 2)}` : "";
      return `${formatHybridSmall(this.boughtTesseracts, 3)}${extra}`;
    },
    autobuyer() {
      return Autobuyer.tesseract;
    },
    autobuyerTextDisplay() {
      const auto = this.isAutoActive;
      return `테서랙트 자동구매기 ${auto ? "켜짐" : "꺼짐"}`;
    },
  },
  methods: {
    update() {
      this.showLockedDimCostNote = !InfinityDimension(8).isUnlocked;
      this.isEC9Running = EternityChallenge(9).isRunning;
      this.infinityPower.copyFrom(Currency.infinityPower);
      this.conversionRate = InfinityDimensions.powerConversionRate;
      if (this.isEC9Running) {
        this.dimMultiplier.copyFrom(Decimal.pow(Decimal.max(this.infinityPower.add(1).log2(), 1), 4).max(1));
      } else {
        this.dimMultiplier.copyFrom(this.infinityPower.pow(this.conversionRate).max(1));
      }
      this.powerPerSecond.copyFrom(InfinityDimension(1).productionPerSecond);
      this.incomeType = EternityChallenge(7).isRunning ? "제7 차원" : "무한력";
      this.isEC8Running = EternityChallenge(8).isRunning;
      if (this.isEC8Running) {
        this.EC8PurchasesLeft = player.eterc8ids;
      }
      this.isEnslavedRunning = Enslaved.isRunning;
      this.isAnyAutobuyerUnlocked = Autobuyer.infinityDimension(1).isUnlocked;
      this.nextDimCapIncrease.copyFrom(Tesseracts.nextTesseractIncrease);
      this.tesseractCost.copyFrom(Tesseracts.nextCost);
      this.totalDimCap.copyFrom(InfinityDimensions.totalDimCap);
      this.canBuyTesseract = Tesseracts.canBuyTesseract;
      this.enslavedCompleted = Enslaved.isCompleted && !player.disablePostReality;
      this.boughtTesseracts = Tesseracts.bought * Tesseracts.totalMult;
      this.extraTesseracts = Tesseracts.extra * Tesseracts.totalMult;
      this.creditsClosed = GameEnd.creditsEverClosed;
      this.isEndgameUnlocked = PlayerProgress.endgameUnlocked();
      this.infinityDimCompressionMagnitude = InfinityDimensions.compressionMagnitude;
      this.infinityDimOverflow = 1 / this.infinityDimCompressionMagnitude;
      this.infinityDimStart = InfinityDimensions.OVERFLOW;
      this.infinityDimCompressionMagnitude2 = InfinityDimensions.compressionMag2;
      this.infinityDimOverflow2 = 1 / this.infinityDimCompressionMagnitude2;
      this.infinityDimStart2 = InfinityDimensions.OVERFLOW_SQUARED;
      this.hasSecond = Currency.infinityPower.gte(DC.ENUMMAX);
      this.freeTesseractSoftcap = Tesseracts.freeSoftcapStart;
      this.freeTesseractHardcap = this.freeTesseractSoftcap * 2;
      const auto = Autobuyer.tesseract;
      this.isAutoUnlocked = auto.isUnlocked;
      this.isAutoActive = auto.isActive;
      this.isAlphaDestroyed = Alpha.isDestroyed;
    },
    maxAll() {
      InfinityDimensions.buyMax();
    },
    toggleAllAutobuyers() {
      toggleAllInfDims();
    },
    buyTesseract() {
      Tesseracts.buyTesseract();
    },
    handleAutoToggle(value) {
      Autobuyer.tesseract.isActive = value;
      this.update();
    }
  }
};
</script>

<template>
  <div class="l-infinity-dim-tab">
    <div class="c-subtab-option-container">
      <PrimaryButton
        v-if="!isEC8Running"
        class="o-primary-btn--subtab-option"
        @click="maxAll"
      >
        최대 구매
      </PrimaryButton>
      <PrimaryButton
        v-if="isAnyAutobuyerUnlocked && !isEC8Running"
        class="o-primary-btn--subtab-option"
        @click="toggleAllAutobuyers"
      >
        전체 자동구매기 토글
      </PrimaryButton>
    </div>
    <div>
      <p>
        무한력을
        <span class="c-infinity-dim-description__accent">{{ format(infinityPower, 2, 1) }}</span>
        만큼 보유 중이며,
        <br>
        <span v-if="!isEC9Running">
          무한력에
          <span class="c-infinity-dim-description__accent">{{ formatPow(conversionRate, 2, 3) }}</span>
          의 거듭제곱을 적용해
        </span>
        <span v-else>무한력을 변환해</span>
        <span class="c-infinity-dim-description__accent">{{ formatX(dimMultiplier, 2, 1) }}</span>
        배율을 모든
        <span v-if="!isEC9Running">반물질 차원에 적용합니다.</span>
        <span v-else>시간 차원에 적용합니다(영원 도전 9).</span>
      </p>
    </div>
    <div>
      <p>
        <span v-if="isEndgameUnlocked">
          무한 차원 압축 규모는
          <span class="c-infinity-dim-compression-description__accent">{{ format(infinityDimCompressionMagnitude, 2, 3) }}</span>,
          모든 무한 차원 배율을
          <span class="c-infinity-dim-compression-description__accent">{{ format(infinityDimOverflow, 2, 3) }}</span>
          제곱합니다(<span>{{ formatPostBreak(infinityDimStart, 2, 1) }}</span> 이상).
        </span>
      </p>
    </div>
    <div>
      <p>
        <span v-if="hasSecond">
          무한 차원 압축^2 규모는
          <span class="c-infinity-dim-compression-description__accent">{{ format(infinityDimCompressionMagnitude2, 2, 3) }}</span>,
          모든 무한 차원 배율을
          <span class="c-infinity-dim-compression-description__accent">{{ format(infinityDimOverflow2, 2, 3) }}</span>
          제곱합니다(<span>{{ formatPostBreak(infinityDimStart2, 2, 1) }}</span> 이상).
        </span>
      </p>
    </div>
    <div
      v-if="enslavedCompleted"
      class="l-infinity-dim-tab__enslaved-reward-container"
    >
      <button
        class="c-infinity-dim-tab__tesseract-button"
        :class="{
          'c-infinity-dim-tab__tesseract-button--disabled': !canBuyTesseract,
          'o-pelle-disabled-pointer': creditsClosed
        }"
        @click="buyTesseract"
      >
        <p>
          테서랙트 구매 ({{ tesseractCountString }})
        </p>
        <p>차원 상한을 {{ format(nextDimCapIncrease, 2) }}만큼 증가</p>
        <p><b>가격: {{ format(tesseractCost) }} IP</b></p>
      </button>
      <br>
      <PrimaryToggleButton
        v-if="isAutoUnlocked"
        :value="isAutoActive"
        :on="autobuyerTextDisplay"
        :off="autobuyerTextDisplay"
        class="l--spoon-btn-group__little-spoon o-primary-btn--tesseract-toggle"
        @input="handleAutoToggle"
      />
    </div>
    <div>
      무료 테서랙트는 {{ format(freeTesseractSoftcap, 2, 2) }}개부터 소프트캡이 적용됩니다.
      <div v-if="!isAlphaDestroyed">
        <br>
        이 소프트캡으로 인해 {{ format(freeTesseractSoftcap, 2, 2) }}개를 넘는 테서랙트는
        실제로 도달하지 못한 채 {{ format(freeTesseractHardcap, 2, 2) }}개의 하드캡에 영원히 가까워집니다.
      </div>
    </div>
    <div v-if="isEnslavedRunning">
      모든 무한 차원은 한 번만 구매할 수 있습니다.
    </div>
    <div v-else>
      제8 무한 차원을 제외한 모든 무한 차원은 각각 최대 {{ format(totalDimCap, 2) }}번 구매할 수 있습니다.
    </div>
    <div>초당 {{ format(powerPerSecond, 2, 0) }} {{ incomeType }}을 획득합니다.</div>
    <b
      v-if="isEC8Running"
      class="l-infinity-dim-tab__ec8-purchases"
    >
      영원 도전 8에서 구매 기회가 {{ quantifyInt("회", EC8PurchasesLeft) }} 남았습니다.
    </b>
    <div class="l-dimensions-container">
      <InfinityDimensionRow
        v-for="tier in 8"
        :key="tier"
        :tier="tier"
      />
    </div>
    <div v-if="showLockedDimCostNote">
      Shift 키를 누르면 잠긴 무한 차원의 무한 포인트 가격을 볼 수 있습니다.
    </div>
  </div>
</template>
