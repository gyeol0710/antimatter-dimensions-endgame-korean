<script>
import ImaginaryUpgradeButton from "./ImaginaryUpgradeButton";

export default {
  name: "ImaginaryUpgradesTab",
  components: {
    ImaginaryUpgradeButton
  },
  data() {
    return {
      baseRMCap: new Decimal(),
      capRM: new Decimal(),
      scaleTime: 0,
      capStr: "",
    };
  },
  computed: {
    upgrades: () => ImaginaryUpgrades.all,
    lockTooltip: () => `요구 조건 잠금은 수동 및 자동 동작만 막습니다. 관련 업그레이드는 비활성화되지 않으며,
      여전히 요구 조건을 실패하게 만들 수 있습니다.`,
  },
  methods: {
    update() {
      this.baseRMCap.copyFrom(MachineHandler.baseRMCap);
      this.capRM.copyFrom(MachineHandler.hardcapRM);
      this.scaleTime = MachineHandler.scaleTimeForIM;
      this.capStr = formatMachines(MachineHandler.hardcapRM, MachineHandler.currentIMCap, MachineHandler.currentDMCap);
    },
    id(row, column) {
      return (row - 1) * 5 + column - 1;
    }
  }
};
</script>

<template>
  <div class="l-reality-upgrade-grid">
    <div class="c-cap-text">
      머신 상한은 <span class="c-reality-tab__reality-machines">{{ capStr }}</span>입니다.
    </div>
    <div class="c-info-text">
      현실의 한계에 도달하여 리얼리티 머신을 {{ format(capRM) }}개보다 많이 보유할 수 없습니다.
      <br>
      리얼리티 머신을 {{ format(baseRMCap) }}개보다 많이 획득하면 보유할 수 있는 허수 머신 상한이 증가합니다.
      <br>
      허수 머신은 시간이 지나면 상한까지 자동으로 증가하지만, 상한에 가까워질수록 획득 속도가 지수적으로 느려집니다.
      <br>
      {{ formatInt(scaleTime) }}초마다 현재 허수 머신과 상한의 차이가 절반으로 줄어듭니다.
      <br>
      <br>
      처음 두 줄의 업그레이드는 끝없이 구매할 수 있고, 나머지는 요구 조건이 있는 일회성 업그레이드입니다.
      <br>
      이곳의 업그레이드는 현실 업그레이드와 게임 및 시각적 동작은 같지만, 허수 머신을 비용으로 사용합니다.
      <span :ach-tooltip="lockTooltip">
        <i class="fas fa-question-circle" />
      </span>
    </div>
    <div
      v-for="row in 6"
      :key="row"
      class="l-reality-upgrade-grid__row"
    >
      <ImaginaryUpgradeButton
        v-for="column in 5"
        :key="id(row, column)"
        :upgrade="upgrades[id(row, column)]"
      />
    </div>
  </div>
</template>

<style scoped>
.c-cap-text {
  color: var(--color-text);
  font-size: 1.5rem;
}

.c-info-text {
  color: var(--color-text);
  margin: 1.5rem;
}
</style>
