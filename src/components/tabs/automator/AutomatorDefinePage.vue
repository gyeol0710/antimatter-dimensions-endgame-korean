<script>
import AutomatorDefineSingleEntry from "./AutomatorDefineSingleEntry";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "AutomatorDefinePage",
  components: {
    AutomatorDefineSingleEntry,
    PrimaryButton,
  },
  data() {
    return {
      constants: [],
      count: 0,
      refreshConstants: false,
    };
  },
  computed: {
    maxConstantCount() {
      return AutomatorData.MAX_ALLOWED_CONSTANT_COUNT;
    },
    maxNameLength() {
      return AutomatorData.MAX_ALLOWED_CONSTANT_NAME_LENGTH;
    },
    maxValueLength() {
      return AutomatorData.MAX_ALLOWED_CONSTANT_VALUE_LENGTH;
    },
    hasConstants() {
      return this.constants.length > 1 || this.constants[0] !== "";
    }
  },
  created() {
    // This key-swaps the container for all the constants in order to force a re-render when externally changed
    this.on$(GAME_EVENT.AUTOMATOR_CONSTANT_CHANGED, () => {
      this.refreshConstants = true;
      this.$nextTick(() => this.refreshConstants = false);
    });
  },
  methods: {
    update() {
      const existingValues = player.reality.automator.constantSortOrder;
      this.count = existingValues.length;
      this.constants = this.count < this.maxConstantCount ? [...existingValues, ""] : [...existingValues];
    },
    deleteAllConstants() {
      if (this.hasConstants) Modal.clearAutomatorConstants.show();
    },
    importPresets() {
      Modal.importTSConstants.show();
    },
  }
};
</script>

<template>
  <div class="l-panel-padding">
    이 패널에서는 숫자나 시간 연구 가져오기 문자열 대신 사용할, 대소문자를 구분하는 상숫값을 정의할 수 있습니다.
    정의한 상수는 모든 스크립트에서 공유하며 최대 {{ maxConstantCount }}개까지 만들 수 있습니다. 또한 상수 이름과 값은
    각각 {{ maxNameLength }}자와 {{ maxValueLength }}자로 제한됩니다. 상수 변경 사항은 현재 실행 중인 스크립트를
    다시 시작해야 적용됩니다.
    <br>
    <br>
    사용 예시로
    <b>first 🠈 11,21,22,31,32,33</b>
    를 정의하면 첫 세 줄의 연구를 모두 구매하기 위해
    <b>studies purchase first</b>
    를 사용할 수 있습니다.
    <br>
    <br>
    <PrimaryButton
      v-tooltip="hasConstants ? null : '삭제할 수 있는 상수가 없습니다!'"
      class="c-delete-margin o-primary-btn--subtab-option"
      :class="{ 'o-primary-btn--disabled' : !hasConstants }"
      @click="deleteAllConstants"
    >
      모든 상수 삭제
    </PrimaryButton>
    <br>
    <br>
    <PrimaryButton
      class="c-delete-margin o-primary-btn--subtab-option"
      @click="importPresets"
    >
      시간 연구 프리셋 가져오기
    </PrimaryButton>
    <div
      :key="count + refreshConstants"
      class="l-definition-container"
    >
      <AutomatorDefineSingleEntry
        v-for="(constant, i) in constants"
        :key="i"
        :constant="constant"
      />
    </div>
  </div>
</template>

<style scoped>
.c-delete-margin {
  margin: 0;
}

.l-panel-padding {
  padding: 0.5rem 2rem 0 0;
}

.l-definition-container {
  display: flex;
  flex-direction: column;
  border: solid 0.1rem var(--color-automator-docs-font);
  border-radius: var(--var-border-radius, 0.5rem);
  padding: 0.5rem;
  margin-top: 1rem;
}
</style>
