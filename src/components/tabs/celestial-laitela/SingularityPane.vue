<script>
export default {
  name: "SingularityPane",
  data() {
    return {
      darkEnergy: new Decimal(),
      darkEnergyGainPerSecond: new Decimal(),
      singularities: new Decimal(),
      singularityCapIncreases: new Decimal(),
      canPerformSingularity: false,
      unlockedBulkSingularity: false,
      singularityCap: new Decimal(),
      baseTimeToSingularity: new Decimal(),
      currentTimeToSingularity: new Decimal(),
      extraTimeAfterSingularity: new Decimal(),
      singularitiesGained: new Decimal(),
      autoSingularityFactor: 0,
      perStepFactor: new Decimal(),
      isAutoEnabled: false,
      hasAutoSingularity: false,
      nextLowerStep: new Decimal(),
      willCondenseOnDecrease: false,
    };
  },
  computed: {
    isDoomed: () => Pelle.isDoomed && !PelleDestructionUpgrade.singularityMilestones.canBeApplied,
    singularityFormText() {
      const formText = this.singularitiesGained.eq(1) ? "모든 암흑 에너지를 하나의 특이점으로"
        : `모든 암흑 에너지를 ${quantify("개의 특이점", this.singularitiesGained, 2)}으로`;
      if (this.canPerformSingularity) {
        return `${formText} 응축`;
      }
      return `암흑 에너지 ${format(this.singularityCap)}에 도달하여 ${formText} 응축`;
    },
    singularityWaitText() {
      let singularityTime = this.currentTimeToSingularity;
      if (this.canPerformSingularity) {
        singularityTime = singularityTime.add(this.extraTimeAfterSingularity);
        if (!this.isAutoEnabled) return "";
        return singularityTime.gt(0)
          ? `(${TimeSpan.fromSeconds(new Decimal(singularityTime)).toStringShort()} 후 자동 응축)`
          : "(즉시 자동 응축 예정)";
      }
      return `(${TimeSpan.fromSeconds(new Decimal(singularityTime)).toStringShort()} 후 암흑 에너지 충족)`;
    },
    baseSingularityTime() {
      return TimeSpan.fromSeconds(new Decimal(this.baseTimeToSingularity)).toStringShort();
    },
    additionalSingularityTime() {
      return TimeSpan.fromSeconds(new Decimal(this.extraTimeAfterSingularity)).toStringShort();
    },
    manualSingularityRate() {
      const totalTime = this.baseTimeToSingularity;
      return this.formatRate(this.singularitiesGained.div(totalTime));
    },
    autoSingularityRate() {
      if (this.hasAutoSingularity && !this.isAutoEnabled) return "자동 특이점 꺼짐";
      const totalTime = this.baseTimeToSingularity.add(this.extraTimeAfterSingularity);
      return this.formatRate(this.singularitiesGained.div(totalTime));
    },
    decreaseTooltip() {
      if (this.singularityCapIncreases.eq(0)) return "상한을 더 낮출 수 없습니다!";
      const singularities = this.singularitiesGained.div(this.perStepFactor);
      return this.willCondenseOnDecrease
        ? `상한을 낮추면 즉시 자동 응축하여
          ${quantify("개의 특이점", singularities, 2)}을 얻습니다!`
        : null;
    },
    increaseTooltip() {
      return this.singularityCapIncreases.gte(5e11)
        ? `5e11을 넘는 상한은 더 강하게 증가합니다. ${formatX(Decimal.pow10(new Decimal(this.singularityCapIncreases.log(10)).sub(10).floor()), 2, 2)}`
        : null;
    }
  },
  methods: {
    update() {
      const laitela = player.celestials.laitela;
      this.darkEnergy.copyFrom(Currency.darkEnergy.value);
      this.darkEnergyGainPerSecond.copyFrom(Currency.darkEnergy.productionPerSecond);
      this.singularities.copyFrom(Currency.singularities.value);
      this.singularityCapIncreases.copyFrom(laitela.singularityCapIncreases);
      this.canPerformSingularity = Singularity.capIsReached;
      this.unlockedBulkSingularity = Currency.singularities.gte(10);
      this.singularityCap.copyFrom(Singularity.cap);
      this.baseTimeToSingularity.copyFrom(Singularity.timePerCondense);
      this.currentTimeToSingularity.copyFrom(Singularity.timeUntilCap);
      this.extraTimeAfterSingularity.copyFrom(Singularity.timeDelayFromAuto);
      this.singularitiesGained.copyFrom(Singularity.singularitiesGained);
      this.autoSingularityFactor = SingularityMilestone.autoCondense.effectOrDefault(Infinity);
      this.perStepFactor.copyFrom(Singularity.gainPerCapIncrease);
      this.isAutoEnabled = player.auto.singularity.isActive && SingularityMilestone.autoCondense.canBeApplied;
      this.hasAutoSingularity = Number.isFinite(this.autoSingularityFactor);
      this.nextLowerStep.copyFrom(this.singularityCap.mul(this.autoSingularityFactor).div(10));
      this.willCondenseOnDecrease = this.isAutoEnabled && this.darkEnergy.gt(this.nextLowerStep);
    },
    doSingularity() {
      Singularity.perform();
    },
    increaseCap() {
      Singularity.increaseCap();
    },
    decreaseCap() {
      Singularity.decreaseCap();
    },
    formatRate(rate) {
      if (rate.lt(1 / 60)) return `시간당 ${format(rate.mul(3600), 2, 3)}`;
      if (rate.lt(1)) return `분당 ${format(rate.mul(60), 2, 3)}`;
      return `초당 ${format(rate, 2, 3)}`;
    },
    condenseClassObject() {
      return {
        "c-laitela-singularity": true,
        "c-laitela-singularity--active": this.canPerformSingularity && !this.isDoomed,
        "o-pelle-disabled": this.isDoomed,
        "o-pelle-disabled-pointer": this.isDoomed,
      };
    }
  }
};
</script>

<template>
  <div class="c-laitela-singularity-container">
    <div>
      <h2>
        특이점을 {{ quantify("개", singularities, 2) }} 보유하고 있습니다.
      </h2>
      <button
        :class="condenseClassObject()"
        @click="doSingularity"
      >
        <h2>
          {{ singularityFormText }}
        </h2>
        <br v-if="singularityWaitText !== ''">
        <h2>
          {{ singularityWaitText }}
        </h2>
      </button>
    </div>
    <div v-if="singularities.neq(0)">
      <div class="o-laitela-matter-amount">
        암흑 에너지를 {{ format(darkEnergy, 2, 4) }} 보유하고 있습니다. (+{{ format(darkEnergyGainPerSecond, 2, 4) }}/초)
      </div>
      <div v-if="unlockedBulkSingularity">
        <button
          class="c-laitela-singularity__cap-control"
          :class="{ 'c-laitela-singularity__cap-control--available' : singularityCapIncreases.gt(0) }"
          :ach-tooltip="decreaseTooltip"
          @click="decreaseCap"
        >
          특이점 상한 감소
        </button>
        <button
          class="c-laitela-singularity__cap-control"
          :class="{ 'c-laitela-singularity__cap-control--available' : true }"
          :ach-tooltip="increaseTooltip"
          @click="increaseCap"
        >
          특이점 상한 증가
        </button>
        <br>
        한 단계마다 필요한 암흑 에너지가 {{ formatX(10) }} 증가하지만,
        <br>
        획득하는 특이점도 {{ formatX(perStepFactor) }} 증가합니다.
      </div>
      <div v-else>
        <br>
        특이점 {{ format(10) }}개에 도달하여
        <br>
        특이점 일괄 획득을 해금하세요.
        <br>
      </div>
      <br>
      <span v-if="hasAutoSingularity">자동 </span>응축까지 걸리는 총 시간:
      {{ baseSingularityTime }}
      <span v-if="hasAutoSingularity && autoSingularityFactor !== 1">
        (+{{ additionalSingularityTime }})
      </span>
      <br>
      <span v-if="hasAutoSingularity && autoSingularityFactor !== 1">수동 </span>
      특이점 획득 속도: {{ manualSingularityRate }}
      <br>
      <span v-if="hasAutoSingularity && autoSingularityFactor !== 1">
        자동 특이점 획득 속도: {{ autoSingularityRate }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.c-laitela-singularity__cap-control {
  margin: 0 0.3rem 1rem;
}
</style>
