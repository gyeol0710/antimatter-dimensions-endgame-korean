<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "UpgradeMechanicLockModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    upgrade: {
      type: Object,
      required: true
    },
    isImaginary: {
      type: Boolean,
      required: true,
    },
    isDual: {
      type: Boolean,
      required: true,
    },
    isEndgame: {
      type: Boolean,
      required: true,
    },
    specialLockText: {
      type: String,
      required: false,
      default: null,
    }
  },
  computed: {
    upgradeStr() {
      if (this.isEndgame) return "엔드게임 업그레이드";
      if (this.isDual) return "이중성 업그레이드";
      return this.isImaginary ? "상상 업그레이드" : "현실 업그레이드";
    },
    lockEvent() {
      return this.specialLockText ?? this.upgrade.lockEvent;
    }
  },
  methods: {
    disableLock() {
      this.upgrade.setMechanicLock(false);
    }
  }
};
</script>

<template>
  <ModalWrapperChoice
    @confirm="disableLock"
  >
    <template #header>
      {{ upgradeStr }} 조건 잠금
    </template>
    <div class="c-modal-message__text">
      정말 {{ lockEvent }}하시겠습니까? 지금 이 동작을 수행하면 다음 업그레이드의
      <span class="l-emphasis">
        요구 조건을 달성하지 못하게 됩니다: {{ upgradeStr }} "{{ upgrade.name }}"
      </span>
      <span :ach-tooltip="upgrade.requirement">
        <i class="fas fa-question-circle" />
      </span>
      <br>
      <br>
      "취소"를 선택하면 아무 효과 없이 창을 닫습니다. "잠금 비활성화"를 선택하면 이 업그레이드의
      요구 조건 확인이 비활성화되며, 다시 켜기 전까지 이 메시지가 표시되지 않습니다.
      <br>
      <br>
      어느 쪽을 선택해도 방금 시도한 동작은 실행되지 않으므로 다시 시도해야 합니다.
    </div>
    <template #confirm-text>
      잠금 비활성화
    </template>
  </ModalWrapperChoice>
</template>

<style scoped>
.l-emphasis {
  font-weight: bold;
  color: var(--color-bad);
}
</style>
