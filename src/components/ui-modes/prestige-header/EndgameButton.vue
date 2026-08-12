<script>
export default {
  name: "EndgameButton",
  data() {
    return {
      canEndgame: false,
      showPelleGlow: false,
      gainedCP: 0,
      gainedDP: 0,
    };
  },
  computed: {
    formatCPGain() {
      return `획득 셀레스티얼 포인트: ${format(this.gainedCP, 2)}`;
    },
    formatDPGain() {
      return `획득 파멸 입자: ${format(this.gainedDP, 2)}`;
    },
    classObject() {
      return {
        "c-endgame-button--unlocked": this.canEndgame,
        "c-endgame-button--locked": !this.canEndgame,
        "c-endgame-button--special": this.showPelleGlow,
      };
    }
  },
  methods: {
    update() {
      this.canEndgame = isEndgameAvailable();
      this.showPelleGlow = true;
      if (!this.canEndgame) {
        this.gainedCP = 0;
        this.gainedDP = 0;
        return;
      }
      this.gainedCP = gainedCelestialPoints();
      this.gainedDP = gainedDoomedParticles();
    },
    handleClick() {
      if (this.canEndgame) {
        Endgame.newEndgame();
      }
    }
  }
};
</script>

<template>
  <div class="l-endgame-button">
    <button
      class="c-endgame-button infotooltip"
      :class="classObject"
      @click="handleClick"
    >
      <div class="l-endgame-button__contents">
        <template v-if="canEndgame">
          <div class="c-endgame-button__header">
            엔드게임 진입
          </div>
          <div>{{ formatCPGain }}</div>
          <div>{{ formatDPGain }}</div>
        </template>
        <template v-else>
          <div>반물질 {{ format("1e9000000000000000") }}에 도달하면 엔드게임 진입 능력이 해금됩니다.</div>
        </template>
        <div
          v-if="canEndgame"
          class="infotooltiptext"
        >
          <div>또 하나의 끝, 그리고 새로운 시작...</div>
        </div>
      </div>
    </button>
  </div>
</template>

<style scoped>

</style>
