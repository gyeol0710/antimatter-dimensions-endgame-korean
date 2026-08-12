<script>
import AutomatorDataTransferSingleEntry from "./AutomatorDataTransferSingleEntry";

export default {
  name: "AutomatorDataTransferPage",
  components: {
    AutomatorDataTransferSingleEntry,
  },
  data() {
    return {
      scripts: 0,
    };
  },
  computed: {
    maxScriptCount: () => AutomatorData.MAX_ALLOWED_SCRIPT_COUNT,
  },
  created() {
    this.loadScripts();
    this.on$(GAME_EVENT.AUTOMATOR_SAVE_CHANGED, () => {
      this.loadScripts();
    });
  },
  methods: {
    loadScripts() {
      this.scripts = Object.values(player.reality.automator.scripts).map(script => ({
        id: script.id,
        name: script.name,
      }));
    },
  }
};
</script>

<template>
  <div class="l-panel-padding">
    이 페이지에서는 추가 데이터를 첨부해 스크립트를 가져오거나 내보낼 수 있습니다. 인코딩된 텍스트에는
    스크립트에서 사용하는 시간 연구 프리셋이나 상수 데이터도 포함됩니다. 따라서 작동하는 스크립트를 서로 다른
    저장 파일 간에 더 쉽게 옮길 수 있지만, 연구 프리셋과 상수를 저장할 공간이 제한되어 있어 기존 데이터를
    덮어써야 할 수도 있습니다. 이 페이지에서 내보낸 데이터도 단일 스크립트 데이터와 같은 방법으로 가져옵니다.
    <br>
    <br>
    참고: 주석에서 상수 이름이나 완전한 연구 구매 명령을 언급해도 스크립트에서 해당 항목을 "사용"한 것으로
    계산합니다. 주석은 스크립트가 프리셋이나 상수로 무엇을 하려는지 나타낸다고 간주하므로 의도된 동작입니다.
    <br>
    <br>
    <div
      v-for="(script, id) in scripts"
      :key="id"
    >
      <AutomatorDataTransferSingleEntry
        class="l-entry-margin"
        :script="script"
      />
    </div>
  </div>
</template>

<style scoped>
.l-panel-padding {
  padding: 0.5rem 2rem 1rem 0;
}

.l-entry-margin {
  margin-bottom: 1rem;
}

.c-import-button {
  margin: 1rem 1rem -1rem;
  border-radius: var(--var-border-radius, 0.4rem);
  border-width: var(--var-border-width, 0.2rem);
  cursor: pointer;
}
</style>
