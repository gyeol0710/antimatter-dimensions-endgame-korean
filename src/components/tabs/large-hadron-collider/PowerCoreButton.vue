<script>
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "PowerCoreButton",
  components: {
    PrimaryButton
  },
  data() {
    return {
      isAffordable: false,
      multiplier: 0,
      cost: 0
    };
  },
  computed: {
    upgrade() {
      return LHC.powerCores;
    },
    classObject() {
      return {
        "o-power-core-upgrade": true,
        "o-power-core-upgrade--available": this.isAffordable,
        "o-power-core-upgrade--unavailable": !this.isAffordable
      };
    },
  },
  methods: {
    update() {
      const upgrade = this.upgrade;
      this.multiplier = upgrade.effectValue;
      this.cost = upgrade.cost;
      this.isAffordable = upgrade.isAffordable;
    },
    purchaseUpgrade() {
      this.upgrade.purchase();
    }
  }
};
</script>

<template>
  <div class="l-spoon-btn-group l-margin-top l-power-core-box">
    <button
      :class="classObject"
      @click="purchaseUpgrade"
    >
      <div>
        동력 코어 획득
        <br>
        현재 가속기 속도 배수: {{ formatX(multiplier, 2, 0) }}
      </div>
      <br>
      비용: {{ quantify("총 하드론", cost, 2, 0) }}
    </button>
    <PrimaryButton
      class="l--spoon-btn-group__little-spoon o-primary-btn--small-spoon"
      @click="upgrade.buyMax(false)"
    >
      동력 코어 최대 구매
    </PrimaryButton>
  </div>
</template>

<style scoped>
.l-margin-top {
  margin-top: 0.55rem;
}

.l-power-core-box {
  align-items: center;
  width: 20rem;
  margin-left: 37.9rem;
}
</style>
