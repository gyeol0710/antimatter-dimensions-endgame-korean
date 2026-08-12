<script>
import { blockifyTextAutomator } from "@/core/automator";
import ModalWrapper from "@/components/modals/ModalWrapper";

export default {
  name: "AutomatorScriptTemplate",
  components: {
    ModalWrapper,
  },
  props: {
    warnings: {
      type: Function,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    inputs: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      templateInputs: {},
      buttonTextStrings: [],
      invalidInputCount: 0,
      templateProps: null,
      currentPreset: "",
      isBlock: false,
    };
  },
  computed: {
    presets: () => player.timestudy.presets,
    params: () => GameDatabase.reality.automator.templates.paramTypes,
    validWarnings() {
      return this.invalidInputCount === 0
        ? this.warnings().concat(this.templateScript?.warnings)
        : this.warnings();
    },
    templateScript() {
      if (this.invalidInputCount !== 0) return null;
      return new ScriptTemplate(this.templateProps, this.name);
    }
  },
  // Many props in this component are generated dynamically from a GameDB entry, but Vue can only give reactive
  // behavior to props that exist on declaration. We need all the dynamically generated inputs to be reactive, so we
  // specifically $set them here on initialization; additionally we give them a default value so that later function
  // calls don't error out from undefined inputs.
  created() {
    for (const input of this.inputs) {
      const boolProp = this.paramTypeObject(input.type).boolDisplay;
      if (boolProp) {
        this.$set(this.templateInputs, input.name, false);
        this.buttonTextStrings[input.name] = boolProp[1];
      } else {
        this.$set(this.templateInputs, input.name, "");
        this.invalidInputCount++;
      }
    }
  },
  methods: {
    update() {
      this.isBlock = player.reality.automator.type === AUTOMATOR_TYPE.BLOCK;
    },
    paramTypeObject(name) {
      return this.params.find(p => p.name === name);
    },
    isValid(input) {
      const typeObject = this.paramTypeObject(input.type);
      return typeObject.isValidString ? typeObject.isValidString(this.templateInputs[input.name]) : true;
    },
    validityClass(input) {
      if (input.name === "treeStudies" && this.currentPreset !== "") {
        return "c-automator-template-textbox--preset";
      }
      return this.isValid(input)
        ? undefined
        : "c-automator-template-textbox--invalid";
    },
    loadPreset(name, id) {
      this.templateInputs.treeStudies = name ? `NAME ${name}` : `ID ${id}`;
      this.updateTemplateProps();
    },
    loadCurrent() {
      this.templateInputs.treeStudies = GameCache.currentStudyTree.value.exportString;
      this.updateTemplateProps();
    },
    updateTemplateProps() {
      this.templateProps = {};
      this.invalidInputCount = 0;
      for (const input of this.inputs) {
        const typeObj = this.paramTypeObject(input.type);
        const mapFn = x => (typeObj.map ? typeObj.map(x) : x);
        this.templateProps[input.name] = mapFn(this.templateInputs[input.name]);
        if (!this.isValid(input)) this.invalidInputCount++;
      }

      // We treat treeStudies as a special prop which will set treePreset if it matches the format "NAME [name]"
      const nameMatch = this.templateProps.treeStudies.match(/^NAME (.{1,4})$/u);
      const idMatch = this.templateProps.treeStudies.match(/^ID (\d)$/u);

      if (nameMatch) {
        const nameStr = nameMatch ? nameMatch[1] : "";
        this.currentPreset = this.presets.find(x => x.name === nameStr).name;
      } else if (idMatch) {
        const idStr = idMatch ? idMatch[1] : "";
        this.currentPreset = this.presets.some((x, y) => y === idStr - 1) ? idStr : "";
      }

      this.templateProps.treePreset = this.currentPreset === "" ? null : this.currentPreset;
    },
    updateButton(input) {
      this.templateInputs[input.name] = !this.templateInputs[input.name];
      const boolProp = this.paramTypeObject(input.type).boolDisplay;
      this.buttonTextStrings[input.name] = boolProp[this.templateInputs[input.name] ? 0 : 1];
      this.updateTemplateProps();
    },
    copyAndClose() {
      if (this.isBlock) {
        const newTemplateBlock = {
          name: `템플릿: ${this.displayName}`,
          blocks: blockifyTextAutomator(this.templateScript.script).blocks
        };
        AutomatorData.blockTemplates.push(newTemplateBlock);
        GameUI.notify.info("사용자 지정 템플릿 블록을 만들었습니다");
      } else {
        copyToClipboard(this.templateScript.script);
        GameUI.notify.info("템플릿을 클립보드에 복사했습니다");
      }
      this.emitClose();
    }
  }
};
</script>

<template>
  <ModalWrapper class="c-automator-template-container">
    <template #header>
      {{ displayName }} 템플릿
    </template>
    <div class="c-automator-template-description">
      {{ description }}
    </div>
    <div class="c-automator-template-inputs">
      <b>필수 정보:</b>
      <br>
      연구 트리 프리셋 사용:
      <button
        v-for="(preset, presetNumber) in presets"
        :key="preset.name"
        class="o-primary-btn o-load-preset-button-margin"
        @click="loadPreset(preset.name, presetNumber + 1)"
      >
        {{ preset.name ? preset.name : presetNumber + 1 }}
      </button>
      <button
        class="o-primary-btn o-load-preset-button-margin"
        @click="loadCurrent"
      >
        <i>현재 트리</i>
      </button>
      <div
        v-for="input in inputs"
        :key="input.name"
        class="c-automator-template-entry"
      >
        {{ input.prompt }}:
        <span v-if="paramTypeObject(input.type).boolDisplay">
          <button
            class="o-primary-btn"
            @click="updateButton(input)"
          >
            {{ buttonTextStrings[input.name] }}
          </button>
        </span>
        <span v-else>
          <input
            ref="templateInputs[input.name]"
            v-model="templateInputs[input.name]"
            type="text"
            class="c-automator-template-textbox"
            :class="validityClass(input)"
            @input="updateTemplateProps"
          >
        </span>
      </div>
    </div>
    <div class="c-automator-template-warnings">
      <b>확인할 사항:</b>
      <div v-if="validWarnings.length !== 0">
        <div
          v-for="warning in validWarnings"
          :key="warning"
          class="c-automator-template-entry"
        >
          {{ warning }}
        </div>
      </div>
      <div v-else>
        (템플릿 입력에 문제가 있으면 여기에 표시됩니다)
      </div>
      <br>
      <br>
    </div>
    <button
      v-if="invalidInputCount === 0"
      class="o-primary-btn"
      @click="copyAndClose"
    >
      {{ isBlock ? "사용자 지정 템플릿 블록 만들기" : "이 템플릿을 클립보드에 복사" }} 후 창 닫기
    </button>
    <button
      v-else
      class="o-primary-btn o-primary-btn--disabled"
    >
      템플릿을 생성할 수 없음 (잘못된 입력 {{ quantifyInt("개", invalidInputCount) }})
    </button>
  </ModalWrapper>
</template>

<style scoped>
.o-load-preset-button-margin {
  margin-right: 0.3rem;
}
</style>
