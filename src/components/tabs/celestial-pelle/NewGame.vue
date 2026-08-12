<script>
export default {
  name: "NewGame",
  data() {
    return {
      opacity: 0,
      visible: false,
      hasMoreCosmetics: false,
      selectedSetName: "",
    };
  },
  computed: {
    style() {
      return {
        opacity: this.opacity,
        visibility: this.visible ? "visible" : "hidden",
      };
    }
  },
  methods: {
    update() {
      this.visible = GameEnd.endState > END_STATE_MARKERS.SHOW_NEW_GAME && !GameEnd.removeAdditionalEnd;
      this.opacity = (GameEnd.endState - END_STATE_MARKERS.SHOW_NEW_GAME) * 2;
      this.hasMoreCosmetics = GlyphAppearanceHandler.lockedSets.length > 0;
      this.selectedSetName = GlyphAppearanceHandler.chosenFromModal?.name ?? "없음 (무작위 선택)";
    },
    startNewGame() {
      Endgame.newEndgame();
    },
    openSelectionModal() {
      Modal.cosmeticSetChoice.show();
    }
  }
};
</script>

<template>
  <div
    class="c-new-game-container"
    :style="style"
  >
    <h2>
      정말 엔드게임을 시작하시겠습니까? 엔드게임을 시작하면 게임 전체가 초기화되지만 기록 반물질, 오토메이터 스크립트, 연구 프리셋, 비밀 테마,
      일반/비밀 도전과제(일반 도전과제는 19행 이상만), 설정, 동료 글리프는 유지됩니다.
    </h2>
    <h3>오른쪽 위 버튼을 사용하면 현재 상태의 게임을 볼 수 있습니다.</h3>
    <div class="c-new-game-button-container">
      <button
        class="c-new-game-button"
        @click="startNewGame"
      >
        엔드게임 진입
      </button>
    </div>
    <br>
    <h3 v-if="hasMoreCosmetics">
      원본 게임을 완료한 보상으로 원하는 글리프 장식 세트 하나도 해금합니다. 다시 현실에 도달하면 자유롭게
      변경할 수 있지만, 외형만 바뀌며 게임 플레이 보너스는 없습니다.
      <br>
      <button
        class="c-new-game-button"
        @click="openSelectionModal"
      >
        장식 세트 선택
      </button>
      <br>
      <br>
      선택한 세트: {{ selectedSetName }}
    </h3>
    <h3 v-else>
      모든 글리프 장식 세트를 해금했습니다!
    </h3>
    <br>
    <h3>
      "speedrun"을 불러오면 스피드런용 추가 기록 기능과 함께 게임을 다시 시작할 수도 있습니다.
      단, 엔드게임까지의 진행 상황이 초기화될 수 있습니다.
    </h3>
  </div>
</template>

<style scoped>
.c-new-game-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  pointer-events: auto;
}

.t-s12 .c-new-game-container {
  color: white;
}

.c-new-game-button-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.c-new-game-button {
  font-family: Typewriter;
  background: grey;
  border: black;
  border-radius: var(--var-border-radius, 0.5rem);
  margin-top: 1rem;
  padding: 1rem;
  cursor: pointer;
}
</style>
