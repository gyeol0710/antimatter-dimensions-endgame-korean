<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "ResetEndgameModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    endgameState: {
      type: String,
      required: true,
    },
    suggestion: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      isDoomed: false,
      canEndgame: false,
    };
  },
  computed: {
    resetTerm() { return "엔드게임"; },
  },
  methods: {
    update() {
      this.isDoomed = Pelle.isDoomed;
      this.canEndgame = isEndgameAvailable();
    },
    handleYesClick() {
      Endgame.resetNoReward();
      EventHub.ui.offAll(this);
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="resetEndgame"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ resetTerm }}을 초기화하려 합니다
    </template>
    <div class="c-modal-message__text">
      현재 {{ resetTerm }}의 진행도에 따른 보상을 받지 않고
      {{ resetTerm }} 시작 시점으로 돌아갑니다.
      <br>
      <br>
      정말로 초기화하시겠습니까?
      <br>
      현재 상태: {{ endgameState }}. 현재 엔드게임 상태를 고려하면
      {{ suggestion }}이 권장됩니다.
      <br>
    </div>
    <template #confirm-text>
      초기화
    </template>
  </ModalWrapperChoice>
</template>

<style scoped>

</style>
