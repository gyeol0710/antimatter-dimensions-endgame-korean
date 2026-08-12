<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "UiChoiceModal",
  components: {
    ModalWrapperChoice
  },
  computed: {
    listEntries() {
      return [
        `더 많은 게임 이벤트에 애니메이션이 추가되었습니다. 성능이나 플레이에 영향을 주면 비주얼 설정에서 끌 수 있습니다.`,
        `새 확인 창이 기본 자바스크립트 경고 창을 대체했습니다. 게임플레이 설정에서 끌 수 있습니다.`,
        "더 현대적인 디자인 원칙을 반영한 깔끔한 새 레이아웃도 추가되었습니다."
      ];
    }
  },
  methods: {
    handleYesClick() {
      GameOptions.toggleUI();
    },
  },
};
</script>

<template>
  <ModalWrapperChoice @confirm="handleYesClick">
    <template #header>
      시각 요소 변경 사항
    </template>
    <div class="c-modal-message__text">
      오래된 세이브를 불러왔습니다. 이전 버전 이후 다음과 같은 시각 요소가 변경되었습니다.
      <br>
      <br>
      <div class="c-visual-change-list">
        <div
          v-for="(entry, i) in listEntries"
          :key="i"
          class="c-visual-change-list-entry"
        >
          <b>&bull;</b>
          {{ entry }}
        </div>
      </div>
      <br>
      <br>
      비주얼 설정에서 이전 버전의 클래식 UI와 새로운 모던 UI를 언제든 전환할 수 있습니다.
      지금 모던 UI로 바꾸시겠습니까?
    </div>
    <template #cancel-text>
      유지
    </template>
    <template #confirm-text>
      전환
    </template>
  </ModalWrapperChoice>
</template>

<style scoped>
.c-visual-change-list {
  display: inline-block;
  max-width: 45rem;
  text-align: left;
}

.c-visual-change-list-entry {
  display: flex;
  margin-bottom: 0.5rem;
  gap: 1rem;
}
</style>
