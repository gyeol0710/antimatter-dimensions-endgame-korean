<script>
import RealityUpgradeButton from "./RealityUpgradeButton";

export default {
  name: "RealityUpgradesTab",
  components: {
    RealityUpgradeButton
  },
  computed: {
    upgrades: () => RealityUpgrades.all,
    costScalingTooltip: () => `비용은 ${format(1e30)} RM부터 더 빠르게 증가하고
      ${format(DC.NUMMAX, 1)} RM부터는 훨씬 더 빠르게 증가합니다`,
    possibleTooltip: () => `체크무늬 업그레이드는 이번 현실에서 해금할 수 없습니다. 줄무늬 업그레이드는
      아직 해금할 수 있습니다.`,
    lockTooltip: () => `아직 조건 달성에 실패하지 않았고 업그레이드도 해금하지 않은 경우에만
      작동합니다.`,
  },
  methods: {
    id(row, column) {
      return (row - 1) * 5 + column - 1;
    }
  }
};
</script>

<template>
  <div class="l-reality-upgrade-grid">
    <div class="c-reality-upgrade-infotext">
      <i class="fas fa-question-circle" /> 아이콘에 마우스를 올리면 추가 정보를 볼 수 있습니다.
      <br>
      첫 번째 줄의 업그레이드는 증가하는 비용으로 끝없이 구매할 수 있으며
      <span :ach-tooltip="costScalingTooltip">
        <i class="fas fa-question-circle" />
      </span>
      나머지는 한 번만 구매할 수 있습니다.
      <br>
      일회성 업그레이드에는 요구 조건도 있으며, 한 번 달성하면 언제든 업그레이드를 구매할 수 있는
      능력이 영구적으로 해금됩니다.
      <span :ach-tooltip="possibleTooltip">
        <i class="fas fa-question-circle" />
      </span>
      <br>
      잠긴 업그레이드는 기본적으로 요구 조건과 효과를 표시하고, 해금된 업그레이드는 효과와 현재 보너스,
      비용을 표시합니다. Shift를 누르면 표시 방식이 서로 바뀝니다.
      <br>
      <i class="fas fa-lock-open" /> 표시가 있는 업그레이드를 Shift+클릭하면 이번 현실에서 해금 조건을
      실패하게 만드는 행동을 게임이 막도록 할 수 있습니다.
      <span :ach-tooltip="lockTooltip">
        <i class="fas fa-question-circle" />
      </span>
      <br>
      구매를 완료한 업그레이드 줄마다 글리프 레벨이 {{ formatInt(1) }} 증가합니다.
    </div>
    <div
      v-for="row in 5"
      :key="row"
      class="l-reality-upgrade-grid__row"
    >
      <RealityUpgradeButton
        v-for="column in 5"
        :key="id(row, column)"
        :upgrade="upgrades[id(row, column)]"
      />
    </div>
  </div>
</template>

<style scoped>
.c-reality-upgrade-infotext {
  color: var(--color-text);
  margin: -1rem 0 1.5rem;
}
</style>
