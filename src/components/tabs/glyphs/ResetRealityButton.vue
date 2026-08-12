<script>
export default {
  name: "ResetRealityButton",
  data() {
    return {
      canReality: false,
      resetCelestial: false,
      isInCelestialReality: false,
      isDoomed: false,
    };
  },
  computed: {
    resetText() {
      if (this.isDoomed) return "이번 아마겟돈 다시 시작";
      if (this.isInCelestialReality && !this.resetCelestial) return "이 셀레스티얼에서 조기 퇴장";
      if (this.isInCelestialReality && this.resetCelestial) return "이 셀레스티얼 다시 시작";
      return "이번 현실 다시 시작";
    },
  },
  methods: {
    update() {
      this.canReality = TimeStudy.reality.isBought && player.records.thisReality.maxEP.add(1).log10().gte(4000);
      this.resetCelestial = player.options.retryCelestial;
      this.isInCelestialReality = isInCelestialReality();
      this.isDoomed = Pelle.isDoomed;
    },
    resetReality() {
      const confirms = player.options.confirmations;
      if (GameEnd.creditsClosed) return;
      if (this.isInCelestialReality) {
        if (confirms.exitChallenge) Modal.exitChallenge.show({
          challengeName: "셀레스티얼 현실",
          normalName: "현실",
          hasHigherLayers: false,
          exitFn: () => Alpha.isRunning ? Alpha.escapeTheMatrix() : beginProcessReality(getRealityProps(true))
        });
        else Alpha.isRunning ? Alpha.escapeTheMatrix() : beginProcessReality(getRealityProps(true));
      } else if (confirms.resetReality) Modal.resetReality.show();
      else beginProcessReality(getRealityProps(true));
    },
  }
};
</script>

<template>
  <button
    :class="['l-reset-reality-button',
             'c-reset-reality-button',
             {'c-reset-reality-button-celestial': isInCelestialReality}]"
    @click="resetReality"
  >
    <div class="l-reality-button__contents">
      {{ resetText }}
    </div>
  </button>
</template>

<style scoped>

</style>
