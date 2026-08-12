<script>
import Accelerator from "./Accelerator";
import PowerCoreButton from "./PowerCoreButton";

export default {
  name: "AcceleratorsPanel",
  components: {
    Accelerator,
    PowerCoreButton
  },
  data() {
    return {
      decayRate: 0,
      time: 0,
      nextAcceleratorReq: new Decimal(),
      nextAcceleratorCurrency: ""
    };
  },
  computed: {
    accelerators() {
      return Accelerators.all;
    }
  },
  methods: {
    update() {
      this.decayRate = LHC.acceleratorSpeed;
      this.time = Date.now();
      this.nextAcceleratorReq.copyFrom(LHC.nextAccelerator ? LHC.nextAccelerator.config.unlockReq() : Decimal.pow10("1e1000"));
      this.nextAcceleratorCurrency = LHC.nextAccelerator ? LHC.nextAccelerator.config.drainResource : "반물질";
    }
  }
};
</script>

<template>
  <div class="l-accelerator-panel-container">
    <div class="c-accelerator-panel-title">
      가속기
    </div>
    <div
      class="l-accelerator-content-container"
    >
      막대를 클릭하여 가속기를 활성화할 수 있습니다.
      <span>한 번에 두 개 이상의 가속기를 활성화할 수 없습니다.</span>
      활성화된 가속기는 초당 {{ formatPercents(decayRate, 3) }}의 속도로 충전됩니다.
      <br>
      가속기 효과는 비활성 상태에서도 적용되며, 현재 충전 비율을 기반으로 합니다.
      <div class="c-accelerator-bar-container">
        <Accelerator
          v-for="accelerator in accelerators"
          :key="accelerator.config.id"
          :accelerator="accelerator"
        />
      </div>
    </div>
    <PowerCoreButton />
    <div class="c-accelerator-panel-description">
      다음 가속기 해금 조건: {{ format(nextAcceleratorReq, 2, 2) }} {{ nextAcceleratorCurrency }}
    </div>
  </div>
</template>

<style scoped>
.c-accelerator-panel-title {
  position: relative;
  font-size: 3rem;
  font-weight: bold;
  color: var(--color-alpha--base);
}

.l-accelerator-content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-text);
}

.l-accelerator-panel-container {
  width: 98rem;
  border: var(--var-border-width, 0.2rem) solid var(--color-alpha--base);
  border-radius: var(--var-border-radius, 0.5rem);
  margin: 1rem;
  padding: 1rem;
  -webkit-user-select: none;
  user-select: none;
}

.c-accelerator-bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.c-accelerator-panel-description {
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-alpha--base);
}
</style>
