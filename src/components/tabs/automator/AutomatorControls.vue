<script>
import AutomatorButton from "./AutomatorButton";
import AutomatorModeSwitch from "./AutomatorModeSwitch";

export default {
  name: "AutomatorControls",
  components: {
    AutomatorButton,
    AutomatorModeSwitch
  },
  data() {
    return {
      isRunning: false,
      isPaused: false,
      repeatOn: false,
      justCompleted: false,
      forceRestartOn: false,
      followExecution: false,
      hasErrors: false,
      currentLine: 0,
      statusName: "",
      editingName: "",
      editingDifferentScript: false,
      currentChars: 0,
      hasUndo: false,
      hasRedo: false,
    };
  },
  computed: {
    fullScreen() {
      return this.$viewModel.tabs.reality.automator.fullScreen;
    },
    currentScriptID() {
      return this.$viewModel.tabs.reality.automator.editorScriptID;
    },
    playTooltip() {
      if (this.isPaused) return "오토메이터 실행 재개";
      if (!this.isRunning) return "오토메이터 시작";
      return "오토메이터 일시 정지";
    },
    playButtonClass() {
      return {
        "c-automator__button--active": this.isRunning,
        "fa-play": !this.isRunning && !this.isPaused,
        "fa-pause": this.isRunning,
        "fa-eject": this.isPaused
      };
    },
    statusText() {
      // Pad with leading zeroes based on script length to prevent text jitter on fast scripts. This technically fails
      // for scripts with more than 99999 lines, but scripts that long will be prevented elsewhere
      const digits = Math.clampMin(Math.ceil(Math.log10(AutomatorBackend.currentScriptLength + 1)), 1);
      let lineNum = `0000${this.currentLine}`;
      lineNum = lineNum.slice(lineNum.length - digits);

      if (this.isPaused) return `일시 정지: "${this.statusName}" (${lineNum}번째 줄에서 재개)`;
      if (this.isRunning) return `실행 중: "${this.statusName}" (${lineNum}번째 줄)`;
      if (this.hasErrors) return `정지: "${this.statusName}"에 오류가 있음 (실행 불가)`;
      return `정지: "${this.statusName}" 실행 대기`;
    },
    maxScriptChars() {
      return AutomatorData.MAX_ALLOWED_SCRIPT_CHARACTERS;
    },
  },
  methods: {
    update() {
      this.isRunning = AutomatorBackend.isRunning;
      this.isPaused = AutomatorBackend.isOn && !this.isRunning;
      this.repeatOn = AutomatorBackend.state.repeat;
      this.justCompleted = AutomatorBackend.hasJustCompleted;
      this.forceRestartOn = AutomatorBackend.state.forceRestart;
      this.followExecution = AutomatorBackend.state.followExecution;
      this.hasErrors = AutomatorData.currentErrors().length !== 0;
      this.currentLine = AutomatorBackend.currentLineNumber;

      // When the automator isn't running, the script name contains the last run script instead of the
      // to-be-run script, which is the currently displayed one in the editor
      this.statusName = (this.isPaused || this.isRunning)
        ? AutomatorBackend.scriptName
        : AutomatorBackend.currentEditingScript.name;
      this.duplicateStatus = AutomatorBackend.hasDuplicateName(this.statusName);
      this.editingDifferentScript = (this.isRunning || this.isPaused) &&
        AutomatorBackend.currentEditingScript.id !== AutomatorBackend.currentRunningScript.id;

      this.currentChars = AutomatorData.singleScriptCharacters();
      this.hasUndo = AutomatorData.undoBuffer.length > 0;
      this.hasRedo = AutomatorData.redoBuffer.length > 0;
    },
    rewind: () => AutomatorBackend.restart(),
    play() {
      if (this.hasErrors) {
        // This shouldn't be needed but someone's save was still on MODE.RUN when the script had errors so this
        // is just an additional layer of failsafe in case something goes wrong
        AutomatorBackend.mode = AUTOMATOR_MODE.PAUSED;
        return;
      }
      if (this.isRunning) {
        AutomatorBackend.pause();
        return;
      }
      if (player.reality.automator.type === AUTOMATOR_TYPE.BLOCK) this.$emit("automatorplay");
      if (AutomatorBackend.isOn) AutomatorBackend.mode = AUTOMATOR_MODE.RUN;
      else AutomatorBackend.start(this.currentScriptID);
    },
    stop: () => AutomatorBackend.stop(),
    step() {
      if (AutomatorBackend.isOn) AutomatorBackend.mode = AUTOMATOR_MODE.SINGLE_STEP;
      else AutomatorBackend.start(this.currentScriptID, AUTOMATOR_MODE.SINGLE_STEP);
    },
    repeat: () => AutomatorBackend.toggleRepeat(),
    restart: () => AutomatorBackend.toggleForceRestart(),
    follow: () => AutomatorBackend.toggleFollowExecution(),
    undo: () => AutomatorData.undoScriptEdit(),
    redo: () => AutomatorData.redoScriptEdit(),
  }
};
</script>

<template>
  <div class="c-automator__controls l-automator__controls">
    <div class="c-automator-control-row l-automator-button-row">
      <div class="c-button-group">
        <AutomatorButton
          v-tooltip="'오토메이터를 첫 명령으로 되감기'"
          class="fa-fast-backward"
          @click="rewind"
        />
        <AutomatorButton
          v-tooltip="{
            content: playTooltip,
            hideOnTargetClick: false
          }"
          :class="playButtonClass"
          @click="play"
        />
        <AutomatorButton
          v-tooltip="'오토메이터를 정지하고 위치 초기화'"
          class="fa-stop"
          @click="stop"
        />
        <AutomatorButton
          v-tooltip="'한 줄 앞으로 실행'"
          class="fa-step-forward"
          @click="step"
        />
        <AutomatorButton
          v-tooltip="'스크립트가 끝나면 자동으로 다시 시작'"
          class="fa-sync-alt"
          :class="{ 'c-automator__button--active' : repeatOn }"
          @click="repeat"
        />
        <AutomatorButton
          v-tooltip="'현실을 완료하거나 다시 시작할 때 활성 스크립트를 자동으로 다시 시작'"
          class="fa-reply"
          :class="{ 'c-automator__button--active' : forceRestartOn }"
          @click="restart"
        />
        <AutomatorButton
          v-tooltip="'현재 줄을 따라가도록 오토메이터 스크롤'"
          class="fa-indent"
          :class="{ 'c-automator__button--active' : followExecution }"
          @click="follow"
        />
        <span
          v-if="fullScreen"
          class="c-automator__status-text c-automator__status-text--small"
          :class="{ 'c-automator__status-text--error' : currentChars > maxScriptChars }"
        >
          현재 스크립트: {{ formatInt(currentChars) }}/{{ formatInt(maxScriptChars) }}
        </span>
      </div>
      <div class="c-button-group">
        <AutomatorButton
          v-tooltip="'실행 취소'"
          class="fa-arrow-rotate-left"
          :class="{ 'c-automator__button--inactive' : !hasUndo }"
          @click="undo"
        />
        <AutomatorButton
          v-tooltip="'다시 실행'"
          class="fa-arrow-rotate-right"
          :class="{ 'c-automator__button--inactive' : !hasRedo }"
          @click="redo"
        />
        <AutomatorModeSwitch />
      </div>
    </div>
    <div class="l-automator-button-row">
      <span
        v-if="duplicateStatus"
        v-tooltip="'같은 이름의 스크립트가 여러 개 있습니다!'"
        class="fas fa-exclamation-triangle c-automator__status-text c-automator__status-text--error"
      />
      <span
        v-if="editingDifferentScript"
        v-tooltip="'오토메이터가 편집기에 표시된 것과 다른 스크립트를 실행 중입니다'"
        class="fas fa-circle-exclamation c-automator__status-text c-automator__status-text--warning"
      />
      <span
        v-if="justCompleted"
        v-tooltip="'오토메이터가 이전 스크립트 실행을 완료했습니다'"
        class="fas fa-circle-check c-automator__status-text"
      />
      <span
        class="c-automator__status-text"
        :class="{ 'c-automator__status-text--error' : hasErrors && !(isRunning || isPaused) }"
      >
        {{ statusText }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.c-automator-control-row {
  justify-content: space-between;
}

.c-button-group {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.c-automator__status-text {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--color-reality);
  padding: 0 0.5rem;
}

.c-automator__status-text--small {
  font-size: 1.1rem;
}

.c-automator__status-text--warning {
  color: var(--color-good-paused);
}

.c-automator__status-text--error {
  color: var(--color-bad);
}

.c-automator__button--active {
  background-color: var(--color-automator-controls-active);
  border-color: var(--color-reality-light);
}

.c-automator__button--inactive {
  background-color: var(--color-automator-controls-border);
  border-color: var(--color-reality-light);
}

.c-automator__button.fa-eject::before {
  transform: rotate(90deg);
}
</style>
