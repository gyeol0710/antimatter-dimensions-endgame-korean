<script>
export default {
  name: "ResetEndgameButton",
  data() {
    return {
      canEndgame: false,
      isDoomed: false,
    };
  },
  computed: {
    resetText() {
      return "이 엔드게임을 처음부터 다시 시작";
    },
  },
  methods: {
    update() {
      this.canEndgame = player.celestials.pelle.records.totalEndgameAntimatter.add(1).log10().gte(9e15);
      this.isDoomed = Pelle.isDoomed;
    },
    resetEndgame() {
      const confirms = player.options.confirmations;
      if (GameEnd.creditsClosed) return;
      if (this.isDoomed) {
        if (confirms.resetEndgame) Modal.resetEndgame.show({
          endgameState: "멸망한 현실에 있는 상태",
          suggestion: "그냥 끝날 때까지 기다리는 것"
        });
        else Endgame.resetNoReward();
      } else if (this.canEndgame) {
        if (confirms.resetEndgame) Modal.resetEndgame.show({
          endgameState: "엔드게임을 진행할 수 있는 상태",
          suggestion: "아무것도 없이 초기화하는 대신 보상을 받고 엔드게임을 진행하는 것"
        });
        else Endgame.resetNoReward();
      } else if (confirms.resetEndgame) Modal.resetEndgame.show({
        endgameState: "멸망 밖에 있는 상태",
        suggestion: "정말 원한다면 초기화하는 것"
      });
      else Endgame.resetNoReward();
    },
  }
};
</script>

<template>
  <button
    :class="['l-reset-endgame-button',
             'c-reset-endgame-button',
             {'c-reset-endgame-button-doom': isDoomed}]"
    @click="resetEndgame"
  >
    <div class="l-endgame-button__contents">
      {{ resetText }}
    </div>
  </button>
</template>

<style scoped>

</style>
