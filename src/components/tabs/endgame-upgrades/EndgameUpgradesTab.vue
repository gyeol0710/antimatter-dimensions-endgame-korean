<script>
import EndgameUpgradeButton from "./EndgameUpgradeButton";

export default {
  name: "EndgameUpgradesTab",
  components: {
    EndgameUpgradeButton
  },
  computed: {
    upgrades: () => EndgameUpgrades.all,
    costScalingTooltip: () => `가격은 셀레스티얼 포인트 ${format(1e100)}개부터 더 빠르게 상승하며,
      ${format(DC.NUMMAX, 1)}개부터는 더욱 빠르게 상승합니다.`,
    possibleTooltip: () => `체크무늬 업그레이드는 이번 엔드게임에서 해금할 수 없습니다.
      줄무늬 업그레이드는 아직 해금할 수 있습니다.`,
    lockTooltip: () => `아직 조건을 실패하지 않았고 업그레이드도 해금하지 않은 경우에만 작동합니다.`,
  },
  methods: {
    id(row, column) {
      return (row - 1) * 5 + column - 1;
    }
  }
};
</script>

<template>
  <div class="l-endgame-upgrade-grid">
    <div class="c-endgame-upgrade-infotext">
      자세한 정보를 보려면 <i class="fas fa-question-circle" /> 아이콘에 마우스를 올리세요.
      <br>
      첫 번째 줄의 업그레이드는 가격이 계속 증가하지만 무한히 구매할 수 있고
      <span :ach-tooltip="costScalingTooltip">
        <i class="fas fa-question-circle" />
      </span>
      나머지는 한 번만 구매할 수 있습니다.
      <br>
      일회성 업그레이드에는 요구 조건도 있으며, 한 번 달성하면 언제든 해당 업그레이드를
      구매할 수 있는 능력이 영구적으로 해금됩니다.
      <span :ach-tooltip="possibleTooltip">
        <i class="fas fa-question-circle" />
      </span>
      <br>
      잠긴 업그레이드는 기본적으로 요구 조건과 효과를 표시하고, 해금된 업그레이드는
      효과와 현재 보너스 및 비용을 표시합니다. Shift를 누르면 표시 방식이 바뀝니다.
      <br>
      <i class="fas fa-lock-open" /> 표시가 있는 업그레이드를 Shift+클릭하면 이번 엔드게임에서
      해금 조건을 실패하게 만드는 행동을 게임이 차단합니다.
      <span :ach-tooltip="lockTooltip">
        <i class="fas fa-question-circle" />
      </span>
      <br>
    </div>
    <div
      v-for="row in 5"
      :key="row"
      class="l-endgame-upgrade-grid__row"
    >
      <EndgameUpgradeButton
        v-for="column in 5"
        :key="id(row, column)"
        :upgrade="upgrades[id(row, column)]"
      />
    </div>
  </div>
</template>

<style scoped>
.c-endgame-upgrade-infotext {
  color: var(--color-text);
  margin: -1rem 0 1.5rem;
}
</style>
