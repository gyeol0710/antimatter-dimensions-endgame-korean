<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "ResetRealityModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      isDoomed: false,
      canReality: false,
    };
  },
  computed: {
    resetTerm() { return this.isDoomed ? "아마겟돈" : "현실"; },
  },
  methods: {
    update() {
      this.isDoomed = Pelle.isDoomed;
      this.canReality = isRealityAvailable();
    },
    handleYesClick() {
      beginProcessReality(getRealityProps(true));
      EventHub.ui.offAll(this);
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="resetReality"
    @confirm="handleYesClick"
  >
    <template #header>
      초기화하려는 대상: {{ resetTerm }}
    </template>
    <div class="c-modal-message__text">
      현재 {{ resetTerm }} 진행도에 따른 보상을 받지 않고
      {{ resetTerm }} 시작 시점으로 돌아갑니다.
      <br>
      <br>
      정말로 초기화하시겠습니까?
      <div
        v-if="canReality"
        class="c-has-rewards"
      >
        <br>
        현재 일반 보상을 모두 받으며 현실을 완료할 수 있지만 여기서 초기화하면 보상을 받지 못합니다.
        보상을 받으려면 "새 현실 만들기" 버튼을 사용하세요.
      </div>
      <br>
    </div>
    <template #confirm-text>
      초기화
    </template>
  </ModalWrapperChoice>
</template>

<style scoped>
.c-has-rewards {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--color-bad);
}
</style>
