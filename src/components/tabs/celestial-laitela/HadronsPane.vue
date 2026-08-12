<script>
export default {
  name: "HadronsPane",
  data() {
    return {
      totalHadrons: 0,
      lightHadrons: 0,
      darkHadrons: 0,
      exoticHadrons: 0,
      percentageCap: 0,
      hadronTimer: new Decimal(0),
      effect1: new Decimal(1),
      effect2: new Decimal(1),
      effect3: new Decimal(0),
      effect4: new Decimal(1),
      effect5: new Decimal(1),
      hasEffect1: false,
      hasEffect2: false,
      hasEffect3: false,
      hasEffect4: false,
      hasDark: false,
      hasExotic: false,
      showWarning: false
    };
  },
  computed: {
    effect1Time() {
      return new Decimal(0.25).div(Hadrons.speedFactor).times(this.percentageCap).sub(this.hadronTimer);
    },
    effect2Time() {
      return new Decimal(0.5).div(Hadrons.speedFactor).times(this.percentageCap).sub(this.hadronTimer);
    },
    effect3Time() {
      return new Decimal(1).div(Hadrons.speedFactor).times(this.percentageCap).sub(this.hadronTimer);
    },
    effect4Time() {
      return new Decimal(2).div(Hadrons.speedFactor).times(this.percentageCap).sub(this.hadronTimer);
    },
    effect5Time() {
      return new Decimal(5).div(Hadrons.speedFactor).times(this.percentageCap).sub(this.hadronTimer);
    },
    effect1Percent() {
      let fac = this.hadronTimer.times(100).times(4).times(Hadrons.speedFactor);
      let per = fac.gte(100) ? fac.sub(100).sqrt().add(100) : fac;
      return per.div(100).min((100 + (Accelerators.emptiness.effectValue2 - 1) * 100 + EndgameMastery(251).effectOrDefault(0)) / 100);
    },
    effect2Percent() {
      let fac = this.hadronTimer.times(100).times(2).times(Hadrons.speedFactor);
      let per = fac.gte(100) ? fac.sub(100).sqrt().add(100) : fac;
      return per.div(100).min((100 + (Accelerators.emptiness.effectValue2 - 1) * 100 + EndgameMastery(251).effectOrDefault(0)) / 100);
    },
    effect3Percent() {
      let fac = this.hadronTimer.times(100).times(Hadrons.speedFactor);
      let per = fac.gte(100) ? fac.sub(100).sqrt().add(100) : fac;
      return per.div(100).min((100 + (Accelerators.emptiness.effectValue2 - 1) * 100 + EndgameMastery(251).effectOrDefault(0)) / 100);
    },
    effect4Percent() {
      let fac = this.hadronTimer.times(100).div(2).times(Hadrons.speedFactor);
      let per = fac.gte(100) ? fac.sub(100).sqrt().add(100) : fac;
      return per.div(100).min((100 + (Accelerators.emptiness.effectValue2 - 1) * 100 + EndgameMastery(251).effectOrDefault(0)) / 100);
    },
    effect5Percent() {
      let fac = this.hadronTimer.times(100).div(5).times(Hadrons.speedFactor);
      let per = fac.gte(100) ? fac.sub(100).sqrt().add(100) : fac;
      return per.div(100).min((100 + (Accelerators.emptiness.effectValue2 - 1) * 100 + EndgameMastery(251).effectOrDefault(0)) / 100);
    },
    effect1Text() {
      if (this.effect1Time.lte(0)) return `효과가 상한에 도달함`;
      return `상한까지 남은 시간: ${TimeSpan.fromHours(this.effect1Time).toStringShort()}`;
    },
    effect2Text() {
      if (this.effect2Time.lte(0)) return `효과가 상한에 도달함`;
      return `상한까지 남은 시간: ${TimeSpan.fromHours(this.effect2Time).toStringShort()}`;
    },
    effect3Text() {
      if (this.effect3Time.lte(0)) return `효과가 상한에 도달함`;
      return `상한까지 남은 시간: ${TimeSpan.fromHours(this.effect3Time).toStringShort()}`;
    },
    effect4Text() {
      if (this.effect4Time.lte(0)) return `효과가 상한에 도달함`;
      return `상한까지 남은 시간: ${TimeSpan.fromHours(this.effect4Time).toStringShort()}`;
    },
    effect5Text() {
      if (this.effect5Time.lte(0)) return `효과가 상한에 도달함`;
      return `상한까지 남은 시간: ${TimeSpan.fromHours(this.effect5Time).toStringShort()}`;
    },
    hadronTime() {
      return TimeSpan.fromHours(this.hadronTimer).toStringShort();
    },
    buttonText1() {
      if (this.hasExotic) return `강입자와 암흑 강입자를 이국 강입자로 변환`;
      return `강입자를 암흑 강입자로 변환`;
    },
    buttonText2() {
      if (this.hasExotic) return `이국 강입자를 강입자와 암흑 강입자로 변환`;
      return `암흑 강입자를 강입자로 변환`;
    },
    buttonText3() {
      if (this.hasExotic) return `모든 강입자와 암흑 강입자를 이국 강입자로 변환`;
      return `모든 강입자를 암흑 강입자로 변환`;
    },
    buttonText4() {
      if (this.hasExotic) return `모든 이국 강입자를 강입자와 암흑 강입자로 변환`;
      return `모든 암흑 강입자를 강입자로 변환`;
    },
    extraH1Text() {
      if (SingularityMilestone.hadronEffect1Improvement.isReached) {
        return ` 및 ${formatPow(SingularityMilestone.hadronEffect1Improvement.effectOrDefault(1), 2, 3)}`;
      }
      return "";
    }
  },
  methods: {
    update() {
      const hadrons = player.celestials.laitela.hadrons;
      this.totalHadrons = hadrons.total;
      this.lightHadrons = hadrons.light;
      this.darkHadrons = hadrons.dark;
      this.exoticHadrons = hadrons.exotic;
      this.percentageCap = (100 + Math.pow((Accelerators.emptiness.effectValue2 - 1) * 100 +
        EndgameMastery(251).effectOrDefault(0), 2)) / 100;
      this.hadronTimer.copyFrom(Hadrons.timeFactor.div(100));
      this.effect1.copyFrom(Hadrons.singularityMultiplier);
      this.effect2.copyFrom(Hadrons.darkMatterCapMultiplier);
      this.effect3.copyFrom(Hadrons.darkEnergyAscensionBoost);
      this.effect4.copyFrom(Hadrons.entropyFormulaBoost);
      this.effect5.copyFrom(Hadrons.continuumMultiplier);
      this.hasEffect1 = DualityUpgrade(15).isBought;
      this.hasEffect2 = DualityUpgrade(16).isBought;
      this.hasEffect3 = DualityUpgrade(17).isBought;
      this.hasEffect4 = DualityUpgrade(18).isBought;
      this.hasDark = DualityUpgrade(19).isBought;
      this.hasExotic = DivinityMilestone.hadronEmpowerment.isReached;
      this.showWarning = Accelerators.emptiness.effectValue2 > 1;
    },
    assignOne() {
      if (this.hasExotic) {
        if (this.lightHadrons <= 0) return;
        Laitela.reset();
        Endgame.resetNoReward();
        player.celestials.laitela.hadrons.light -= 1;
        player.celestials.laitela.hadrons.dark -= 1;
        player.celestials.laitela.hadrons.exotic += 1;
      } else {
        if (this.lightHadrons <= 0) return;
        Laitela.reset();
        finishProcessReality({ reset: true });
        player.celestials.laitela.hadrons.light -= 1;
        player.celestials.laitela.hadrons.dark += 1;
      }
    },
    unassignOne() {
      if (this.hasExotic) {
        if (this.exoticHadrons <= 0) return;
        Laitela.reset();
        Endgame.resetNoReward();
        player.celestials.laitela.hadrons.light += 1;
        player.celestials.laitela.hadrons.dark += 1;
        player.celestials.laitela.hadrons.exotic -= 1;
      } else {
        if (this.darkHadrons <= 0) return;
        Laitela.reset();
        finishProcessReality({ reset: true });
        player.celestials.laitela.hadrons.light += 1;
        player.celestials.laitela.hadrons.dark -= 1;
      }
    },
    assignAll() {
      if (this.hasExotic) {
        if (this.lightHadrons <= 0) return;
        Laitela.reset();
        Endgame.resetNoReward();
        player.celestials.laitela.hadrons.light = 0;
        player.celestials.laitela.hadrons.dark = 0;
        player.celestials.laitela.hadrons.exotic = player.celestials.laitela.hadrons.total;
      } else {
        if (this.lightHadrons <= 0) return;
        Laitela.reset();
        finishProcessReality({ reset: true });
        player.celestials.laitela.hadrons.light = 0;
        player.celestials.laitela.hadrons.dark = player.celestials.laitela.hadrons.total;
      }
    },
    unassignAll() {
      if (this.hasExotic) {
        if (this.exoticHadrons <= 0) return;
        Laitela.reset();
        Endgame.resetNoReward();
        player.celestials.laitela.hadrons.light = player.celestials.laitela.hadrons.total;
        player.celestials.laitela.hadrons.dark = player.celestials.laitela.hadrons.total;
        player.celestials.laitela.hadrons.exotic = 0;
      } else {
        if (this.darkHadrons <= 0) return;
        Laitela.reset();
        finishProcessReality({ reset: true });
        player.celestials.laitela.hadrons.light = player.celestials.laitela.hadrons.total;
        player.celestials.laitela.hadrons.dark = 0;
      }
    }
  }
};
</script>

<template>
  <div class="c-laitela-hadrons-container">
    <div class="c-laitela-hadrons-row">
      <h2>
        강입자를 {{ quantify("개", lightHadrons, 2) }} 보유하고 있습니다.
      </h2>
      <h2 v-if="hasDark">
        암흑 강입자를 {{ quantify("개", darkHadrons, 2) }} 보유하고 있습니다.
      </h2>
      <h2 v-if="hasExotic">
        이국 강입자를 {{ quantify("개", exoticHadrons, 2) }} 보유하고 있습니다.
      </h2>
      <br>
      <h2>
        현재 엔드게임에서 {{ hadronTime }}을 보냈습니다.
      </h2>
    </div>
    <div
      v-if="hasEffect1"
      class="c-laitela-hadrons-row"
    >
      <div>
        강입자 효과 1:
      </div>
      <div>
        특이점을 {{ formatX(effect1, 2, 2) }}{{ extraH1Text }} 증가
      </div>
      <div>
        {{ effect1Text }}
      </div>
      <div>
        효과율: {{ formatDecimalPercents(effect1Percent, 2, 2) }}
      </div>
    </div>
    <div
      v-if="hasEffect2"
      class="c-laitela-hadrons-row"
    >
      <div>
        강입자 효과 2:
      </div>
      <div>
        암흑 물질 상한에 {{ format(effect2, 2, 2) }}를 곱함
      </div>
      <div>
        {{ effect2Text }}
      </div>
      <div>
        효과율: {{ formatDecimalPercents(effect2Percent, 2, 2) }}
      </div>
    </div>
    <div
      v-if="hasEffect3"
      class="c-laitela-hadrons-row"
    >
      <div>
        강입자 효과 3:
      </div>
      <div>
        승천 시 암흑 에너지 배율을 {{ format(effect3, 2, 2) }} 증가
      </div>
      <div>
        {{ effect3Text }}
      </div>
      <div>
        효과율: {{ formatDecimalPercents(effect3Percent, 2, 2) }}
      </div>
    </div>
    <div
      v-if="hasEffect4"
      class="c-laitela-hadrons-row"
    >
      <div>
        강입자 효과 4:
      </div>
      <div>
        반물질이 엔트로피를 {{ formatX(effect4, 2, 2) }} 더 생성
      </div>
      <div>
        {{ effect4Text }}
      </div>
      <div>
        효과율: {{ formatDecimalPercents(effect4Percent, 2, 2) }}
      </div>
    </div>
    <div
      v-if="hasDark"
      class="c-laitela-hadrons-row"
    >
      <div>
        암흑 강입자 효과:
      </div>
      <div>
        연속체 구매 횟수에 {{ format(effect5, 2, 2) }}를 곱함
      </div>
      <div>
        {{ effect5Text }}
      </div>
      <div>
        효과율: {{ formatDecimalPercents(effect5Percent, 2, 2) }}
      </div>
    </div>
    <div
      v-if="hasDark"
      class="c-laitela-hadrons-row"
    >
      <button
        class="c-laitela-hadrons-assign"
        :class="{ 'c-laitela-hadrons-assign--available' : lightHadrons > 0 }"
        @click="assignOne"
      >
        {{ buttonText1 }}
      </button>
      <button
        class="c-laitela-hadrons-assign"
        :class="{ 'c-laitela-hadrons-assign--available' : (hasExotic ? exoticHadrons > 0 : darkHadrons > 0) }"
        @click="unassignOne"
      >
        {{ buttonText2 }}
      </button>
      <button
        class="c-laitela-hadrons-assign"
        :class="{ 'c-laitela-hadrons-assign--available' : lightHadrons > 0 }"
        @click="assignAll"
      >
        {{ buttonText3 }}
      </button>
      <button
        class="c-laitela-hadrons-assign"
        :class="{ 'c-laitela-hadrons-assign--available' : (hasExotic ? exoticHadrons > 0 : darkHadrons > 0) }"
        @click="unassignAll"
      >
        {{ buttonText4 }}
      </button>
    </div>
    <div
      v-if="showWarning"
      class="c-laitela-warning"
    >
      강입자 효과율은 {{ formatPercents(1) }}를 넘으면 훨씬 느리게 증가합니다.
    </div>
  </div>
</template>

<style scoped>
.c-laitela-hadrons-assign {
  margin: 0 0.3rem 1rem;
}

.c-laitela-warning {
  color: red;
}
</style>
