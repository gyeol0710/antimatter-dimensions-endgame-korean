<script>
export default {
  name: "AutomatorErrorPage",
  data() {
    return {
      errors: [],
    };
  },
  methods: {
    update() {
      this.errors = AutomatorData.currentErrors();
    },
    scrollToLine(line) {
      AutomatorScroller.scrollToLine(line);
      AutomatorHighlighter.updateHighlightedLine(line, LineEnum.Error);
    }
  }
};
</script>

<template>
  <div class="c-automator-docs-page">
    <div v-if="errors.length === 0">
      스크립트 오류가 없습니다!
    </div>
    <div v-else>
      <b>스크립트에 다음 {{ quantify("오류", errors.length) }}가 있습니다:</b>
      <br>
      <span
        v-for="(error, i) in errors"
        :key="i"
      >
        <b>{{ error.startLine }}번째 줄:</b>
        <button
          v-tooltip="'해당 줄로 이동'"
          class="c-automator-docs--button fas fa-arrow-circle-right"
          @click="scrollToLine(error.startLine)"
        />
        <div class="c-automator-docs-page__indented">
          {{ error.info }}
        </div>
        <div class="c-automator-docs-page__indented">
          <i>권장 수정: {{ error.tip }}</i>
        </div>
      </span>
      <i>
        참고: 오류로 인해 오토메이터가 스크립트의 나머지 부분을 올바르게 검사하지 못할 때가 있습니다.
        앞줄에서 발생한 다른 오류 때문에 일부 오류가 "사라지거나", 내부 블록이 있는 명령(예: IF 또는 WHILE)의
        오류가 올바르게 작성된 뒷줄 명령에 표시될 수 있습니다.
        또한 오류의 원인이 명확하지 않으면 일부 권장 수정이 실제 해결 방법과 다를 수 있습니다.
      </i>
    </div>
  </div>
</template>

<style scoped>

</style>
