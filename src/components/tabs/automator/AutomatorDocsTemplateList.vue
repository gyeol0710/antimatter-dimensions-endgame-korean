<script>
export default {
  name: "AutomatorDocsTemplateList",
  data() {
    return {
      isBlock: false,
      blockTemplates: [],
      selectedTemplateID: -1,
    };
  },
  computed: {
    templates: () => GameDatabase.reality.automator.templates.scripts,
    pasteText() {
      return this.isBlock
        ? `오토메이터에서 원하는 위치로 끌어다 놓을 수 있는 특별한 블록을 만듭니다. 그러면 템플릿에 필요한
          모든 개별 블록이 자동으로 채워집니다`
        : `템플릿을 텍스트로 클립보드에 복사합니다. 템플릿 텍스트를 오토메이터의 원하는 위치에 직접
          붙여 넣을 수 있습니다`;
    }
  },
  methods: {
    update() {
      this.isBlock = player.reality.automator.type === AUTOMATOR_TYPE.BLOCK;
      this.blockTemplates = AutomatorData.blockTemplates;
    },
    showModal(template) {
      Modal.automatorScriptTemplate.show(template);
    },
    unpackTemplateBlocks(event) {
      const templateBlocks = this.blockTemplates[this.selectedTemplateID].blocks;
      const beforeBlocks = BlockAutomator.lines.slice(0, event.newIndex);
      // Note that slice will also pick up the Vue observer, so we need to remove that as well
      const afterBlocks = BlockAutomator.lines.slice(event.newIndex).filter(b => b.cmd);

      // Remap IDs, in case the template gets added more than once
      const maxExistingID = Math.max(...BlockAutomator._idArray.filter(id => id));
      const minTemplateID = Math.min(...templateBlocks.map(b => b.id));
      const blocksToAdd = [];
      for (const block of templateBlocks) {
        blocksToAdd.push({
          ...block,
          id: block.id + maxExistingID - minTemplateID + 1
        });
      }
      BlockAutomator.lines = beforeBlocks;
      BlockAutomator.lines.push(...blocksToAdd);
      BlockAutomator.lines.push(...afterBlocks);
      BlockAutomator.updateIdArray();
    },
    setIndex(index) {
      this.selectedTemplateID = index;
    }
  }
};
</script>

<template>
  <div>
    이 템플릿을 사용하면 오토메이터에서 자주 하는 작업을 쉽게 수행할 수 있습니다. 직접 작성한 스크립트보다
    조금 느릴 수 있지만 프로그래밍 경험이 없어도 사용할 수 있습니다. 버튼을 클릭하면 입력란이 있는 창이 열리고,
    오토메이터에 넣을 수 있는 템플릿을 생성합니다.
    <button
      v-for="template in templates"
      :key="template.name"
      class="o-primary-btn c-automator-docs-template--button l-automator__button"
      @click="showModal(template)"
    >
      템플릿: {{ template.displayName }}
    </button>
    현재 {{ isBlock ? "블록" : "텍스트" }} 편집기를 사용 중이므로 이 패널은 {{ pasteText }}.
    <br>
    <br>
    <draggable
      v-if="isBlock"
      :key="blockTemplates.length"
      class="template-container"
      :list="blockTemplates"
      :group="{ name: 'code-blocks', pull: 'clone', put: false }"
      :sort="false"
      @end="unpackTemplateBlocks"
    >
      <div
        v-for="(template, i) in blockTemplates"
        :key="i"
        class="o-automator-command o-automator-block-list draggable-blocks"
        @dragstart="setIndex(i)"
      >
        {{ template.name }}
      </div>
    </draggable>
  </div>
</template>

<style scoped>
.c-automator-docs-template--button {
  margin: 0.4rem;
  border-radius: var(--var-border-radius, 0.4rem);
  border-width: var(--var-border-width, 0.2rem);
  cursor: pointer;
}

.template-container {
  display: flex;
  flex-direction: column;
}
</style>
