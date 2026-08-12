<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "CloudInvalidDataModal",
  components: {
    ModalWrapperChoice,
  },
  props: {
    isSaving: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    conflict() {
      return this.$viewModel.modal.cloudConflict;
    },
    overwriteText() {
      return this.isSaving
        ? "클라우드 세이브 덮어쓰기"
        : "클라우드 세이브 불러오기";
    }
  },
  methods: {
    ignore() {
      EventHub.dispatch(GAME_EVENT.CLOSE_MODAL);
    },
    overwrite() {
      this.conflict.onAccept?.();
      EventHub.dispatch(GAME_EVENT.CLOSE_MODAL);
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    class="c-modal-options__large"
    :cancel-class="'c-modal-message__okay-btn'"
    :confirm-class="'c-modal-message__okay-btn c-modal__confirm-btn'"
    :cancel-fn="overwrite"
    @confirm="ignore()"
  >
    <template #header>
      클라우드 세이브를 비교할 수 없음
    </template>
    세이브를 비교하는 중 클라우드 세이브 데이터를 정상적으로 처리하지 못했습니다.
    클라우드 세이브가 매우 오래되어 이전 게임 버전의 데이터 형식을 사용하기 때문일 가능성이 큽니다.
    <br>
    <br>
    <span v-if="isSaving">
      클라우드 세이브를 덮어써도 안전할 가능성이 큽니다. 사용 가능한 올바른 세이브 형식으로 변환해 보려면
      "클라우드 불러오기"를 눌러 세이브를 강제로 불러올 수 있습니다.
    </span>
    <span v-else>
      원한다면 클라우드 데이터를 불러올 수 있습니다. 게임이 데이터 형식을 변환해 불러오려고 시도하지만
      실패할 수 있으며, 최악의 경우 게임을 다시 작동시키려면 이 세이브 슬롯을 초기화해야 할 수도 있습니다.
    </span>
    <br>
    참고: 이 문제가 해결될 때까지 10분 간격 자동 저장이 계속 차단되므로, 설정과 관계없이 이 모달이 표시됩니다.
    <template #cancel-text>
      {{ overwriteText }}
    </template>
    <template #confirm-text>
      덮어쓰지 않기
    </template>
  </ModalWrapperChoice>
</template>
