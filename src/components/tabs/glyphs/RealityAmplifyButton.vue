<script>
export default {
  name: "RealityAmplifyButton",
  data: () => ({
    isDoomed: false,
    isVisible: false,
    isDisabled: false,
    isActive: false,
    ratio: 1,
    canAmplify: false,
  }),
  computed: {
    tooltip() {
      if (this.isDoomed) return "파멸 상태의 현실은 증폭할 수 없습니다";
      if (this.isDisabled) return "셀레스티얼 현실은 증폭할 수 없습니다";
      if (!this.canAmplify) {
        return "현실을 증폭하려면 현실 시간을 더 저장하거나 현실을 더 빨리 완료하세요";
      }
      return null;
    },
    buttonClass() {
      return {
        "l-reality-amplify-button": true,
        "l-reality-amplify-button--clickable": !this.isDoomed && this.canAmplify,
        "o-enslaved-mechanic-button--storing-time": this.isActive,
      };
    }
  },
  methods: {
    update() {
      this.isDoomed = Pelle.isDoomed;
      this.isVisible = Enslaved.isUnlocked;
      this.isDisabled = isInCelestialReality();
      this.isActive = Enslaved.boostReality;
      this.ratio = Enslaved.realityBoostRatio;
      this.canAmplify = Enslaved.canAmplify;
    },
    toggleActive() {
      if (!this.canAmplify) return;
      Enslaved.boostReality = !Enslaved.boostReality;
    }
  }
};
</script>

<template>
  <button
    v-if="isVisible"
    :class="buttonClass"
    :ach-tooltip="tooltip"
    @click="toggleActive"
  >
    <div v-if="isDoomed">
      파멸 상태의 현실은 증폭할 수 없습니다.
    </div>
    <div v-else-if="canAmplify">
      <span v-if="isActive">증폭 예정:</span>
      <span v-else>이번 현실 증폭:</span>
      <br>
      모든 보상 ×{{ formatInt(ratio) }}
    </div>
    <div v-else>
      증폭에 필요한 저장된 현실 시간이 부족합니다.
    </div>
  </button>
</template>

<style scoped>

</style>
