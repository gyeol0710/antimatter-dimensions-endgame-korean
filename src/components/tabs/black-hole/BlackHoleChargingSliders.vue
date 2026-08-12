<script>
import { Laitela } from "@/core/globals";

import SliderComponent from "@/components/SliderComponent";

export default {
  name: "BlackHoleChargingSliders",
  components: {
    SliderComponent
  },
  data() {
    return {
      isNegativeBHUnlocked: false,
      isInverted: false,
      isLaitela: false,
      negativeSlider: 0,
      negativeBHDivisor: 1,
      maxNegativeBlackHole: 300,
      isDisabled: false,
      amountSlider: 0.01,
      timeSlider: 5,
      areExtraSlidersUnlocked: false
    };
  },
  computed: {
    infoTooltip() {
      return this.isLaitela
        ? "이 현실의 물리 법칙에서는 블랙홀 역전을 사용할 수 없습니다"
        : "역전을 활성화하려면 블랙홀을 일시 정지해야 합니다";
    },
    reqLockText() {
      return `"${ImaginaryUpgrade(24).name}"의 잠금 조건 때문에
        역전 강도를 변경할 수 없습니다.`;
    }
  },
  methods: {
    update() {
      this.isNegativeBHUnlocked = V.isFlipped && BlackHoles.arePermanent;
      this.isInverted = BlackHoles.areNegative;
      this.isLaitela = Laitela.isRunning;
      this.negativeSlider = -Math.log10(player.blackHoleNegative);
      this.negativeBHDivisor = Math.pow(10, this.negativeSlider);
      const maxInversion = player.requirementChecks.reality.slowestBH <= 1e-300;
      this.isDisabled = ImaginaryUpgrade(24).isLockingMechanics && Ra.isRunning && maxInversion;
      this.amountSlider = player.celestials.enslaved.pulseAmount * 500;
      this.timeSlider = player.celestials.enslaved.pulseTime;
      this.areExtraSlidersUnlocked = ExpansionPack.enslavedPack.isBought && !player.disablePostReality;
    },
    adjustSliderNegative(value) {
      this.negativeSlider = value;
      player.blackHoleNegative = Math.pow(10, -this.negativeSlider);
      player.requirementChecks.reality.slowestBH = Math.max(
        player.requirementChecks.reality.slowestBH,
        player.blackHoleNegative
      );
    },
    adjustSliderPulseAmount(value) {
      this.amountSlider = value;
      player.celestials.enslaved.pulseAmount = this.amountSlider / 500;
    },
    adjustSliderPulseTime(value) {
      this.timeSlider = value;
      player.celestials.enslaved.pulseTime = this.timeSlider;
    },
    sliderProps(negative) {
      return {
        min: 0,
        max: negative ? this.maxNegativeBlackHole : 990,
        interval: 1,
        width: "55rem",
        tooltip: false
      };
    },
    sliderPropsAmount() {
      return {
        min: 1,
        max: 500,
        interval: 1,
        width: "55rem",
        tooltip: false
      };
    },
    sliderPropsTime() {
      return {
        min: 1,
        max: 100,
        interval: 1,
        width: "55rem",
        tooltip: false
      };
    },
  }
};
</script>

<template>
  <div>
    <div
      v-if="isNegativeBHUnlocked"
      class="l-black-hole-sliders"
    >
      <b>
        역전된 블랙홀은 게임 속도를 {{ format(negativeBHDivisor, 2, 2) }}로 나눕니다.
        (현재 {{ isInverted ? "활성" : "비활성" }}<span
          v-if="negativeSlider !== 0 && !isInverted"
          :ach-tooltip="infoTooltip"
        >
          <i class="fas fa-question-circle l-margin-left" />
        </span>)
      </b>
      <SliderComponent
        v-if="!isDisabled"
        v-bind="sliderProps(true)"
        :value="negativeSlider"
        @input="adjustSliderNegative($event)"
      />
      <div
        v-else
        class="l-lock-text"
      >
        {{ reqLockText }}
      </div>
      <br>
      블랙홀 역전은 블랙홀 자체의 가속에만 영향을 주고 다른 업그레이드나 효과에는 영향을 주지 않지만,
      Effarig의 게임 속도 거듭제곱 효과에는 간접적으로 영향을 줍니다.
    </div>
    <br>
    <div
      v-if="areExtraSlidersUnlocked"
      class="l-black-hole-sliders"
    >
      <b>
        파동이 켜져 있으면 블랙홀이 매초 저장된 게임 시간의 {{ formatPercents(amountSlider / 500, 2, 1) }}를 자동 방출합니다.
      </b>
      <SliderComponent
        v-if="areExtraSlidersUnlocked"
        v-bind="sliderPropsAmount()"
        :value="amountSlider"
        @input="adjustSliderPulseAmount($event)"
      />
      <br>
      <b>
        파동이 켜져 있으면 블랙홀이 현재 {{ formatInt(timeSlider) }}틱마다 저장된 게임 시간을 방출합니다.
      </b>
      <SliderComponent
        v-if="areExtraSlidersUnlocked"
        v-bind="sliderPropsTime()"
        :value="timeSlider"
        @input="adjustSliderPulseTime($event)"
      />
    </div>
  </div>
</template>

<style scoped>
.l-black-hole-sliders {
  width: 55rem;
  color: var(--color-text);
}

.l-margin-left {
  margin-left: 0.5rem;
}

.l-lock-text {
  font-weight: bold;
  color: var(--color-bad);
  margin: 0.5rem 0 -0.5rem;
}
</style>
