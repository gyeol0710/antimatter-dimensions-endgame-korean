<script>
export default {
  name: "AutomatorEventLog",
  data() {
    return {
      unsortedEvents: [],
      newestFirst: false,
      timestampMode: 0,
      currentTime: 0,
      maxEntries: 0,
      clearOnReality: false,
      clearOnRestart: false,
    };
  },
  computed: {
    events() {
      // eslint-disable-next-line no-nested-ternary
      const sorted = this.unsortedEvents.sort((a, b) => (a.timestamp === b.timestamp
        ? (a.thisReality === b.thisReality
          ? a.line - b.line
          : a.thisReality - b.thisReality)
        : a.timestamp - b.timestamp));
      return this.newestFirst ? sorted.reverse() : sorted;
    },
    clearTooltip() {
      return `모든 항목 지우기 (최대 ${this.maxEntries}개)`;
    },
    buttonClassObject() {
      return "c-automator-docs--button fas";
    }
  },
  watch: {
    newestFirst(newValue) {
      player.options.automatorEvents.newestFirst = newValue;
    },
    timestampMode(newValue) {
      player.options.automatorEvents.timestampType = newValue;
    },
    clearOnReality(newValue) {
      player.options.automatorEvents.clearOnReality = newValue;
    },
    clearOnRestart(newValue) {
      player.options.automatorEvents.clearOnRestart = newValue;
    }
  },
  methods: {
    update() {
      const eventSettings = player.options.automatorEvents;
      this.unsortedEvents = AutomatorData.eventLog;
      this.newestFirst = eventSettings.newestFirst;
      this.timestampMode = eventSettings.timestampType;
      this.currentTime = Date.now();
      this.maxEntries = eventSettings.maxEntries;
      this.clearOnReality = eventSettings.clearOnReality;
      this.clearOnRestart = eventSettings.clearOnRestart;
    },
    clearLog() {
      AutomatorData.clearEventLog();
      this.update();
    },
    sortStyle(selected) {
      return {
        "background-color": selected ? "var(--color-reality)" : ""
      };
    },
    timestampStyle(key) {
      return {
        "background-color": this.timestampMode === AUTOMATOR_EVENT_TIMESTAMP_MODE[key] ? "var(--color-reality)" : ""
      };
    },
    clearRealityStyle() {
      return {
        "background-color": this.clearOnReality ? "var(--color-reality)" : ""
      };
    },
    clearRestartStyle() {
      return {
        "background-color": this.clearOnRestart ? "var(--color-reality)" : ""
      };
    },
    setTimestampMode(key) {
      this.timestampMode = AUTOMATOR_EVENT_TIMESTAMP_MODE[key];
    },
    timestamp(entry) {
      switch (this.timestampMode) {
        case AUTOMATOR_EVENT_TIMESTAMP_MODE.DISABLED:
          return "";
        case AUTOMATOR_EVENT_TIMESTAMP_MODE.THIS_REALITY:
          return `, 현실 내 실제 시간 ${TimeSpan.fromSeconds(new Decimal(entry.thisReality)).toStringShort()}`;
        case AUTOMATOR_EVENT_TIMESTAMP_MODE.RELATIVE_NOW:
          return `, ${TimeSpan.fromMilliseconds(new Decimal(this.currentTime - entry.timestamp)).toStringShort()} 전`;
        case AUTOMATOR_EVENT_TIMESTAMP_MODE.RELATIVE_PREV:
          if (entry.timegap === entry.timestamp) return `, 처음 기록한 이벤트`;
          return `, 이전 이벤트 ${TimeSpan.fromMilliseconds(new Decimal(entry.timegap)).toStringShort()} 후`;
        case AUTOMATOR_EVENT_TIMESTAMP_MODE.DATE_TIME:
          return `, ${Time.toDateTimeString(entry.timestamp)}`;
        default:
          throw Error("Unrecognized timestamp mode in Automator event log");
      }
    },
    scrollToLine(line) {
      AutomatorScroller.scrollToLine(line);
      AutomatorHighlighter.updateHighlightedLine(line, LineEnum.Event);
    }
  }
};

const AUTOMATOR_EVENT_TIMESTAMP_MODE = {
  DISABLED: 0,
  THIS_REALITY: 1,
  RELATIVE_NOW: 2,
  RELATIVE_PREV: 3,
  DATE_TIME: 4,
};
</script>

<template>
  <div class="c-automator-docs-page">
    <div>
      이 패널은 오토메이터가 최근 실행한 모든 명령과 일부 명령의 추가 정보를 이벤트 로그에 계속 기록합니다.
      오토메이터가 특정 지점에서 멈출 때 문제를 찾는 데 유용합니다.
      <br>
      <br>
      설정은 저장 파일에 보존되지만 실제 이벤트는 보존되지 않으며 새로고침하면 사라집니다.
      <br>
      <br>
      <b>항목 정렬:</b>
      <button
        v-tooltip="'오래된 결과부터'"
        :style="sortStyle(!newestFirst)"
        :class="buttonClassObject"
        class="fa-angle-down"
        @click="newestFirst = false"
      />
      <button
        v-tooltip="'최신 결과부터'"
        :style="sortStyle(newestFirst)"
        :class="buttonClassObject"
        class="fa-angle-up"
        @click="newestFirst = true"
      />
      <button
        v-tooltip="clearTooltip"
        :class="buttonClassObject"
        class="fa-trash"
        @click="clearLog"
      />
      <button
        v-tooltip="'현실마다 이벤트 로그 지우기'"
        :style="clearRealityStyle()"
        :class="buttonClassObject"
        class="fa-eraser"
        @click="clearOnReality = !clearOnReality"
      />
      <button
        v-tooltip="'스크립트를 다시 시작할 때 이벤트 로그 지우기'"
        :style="clearRestartStyle()"
        :class="buttonClassObject"
        class="fa-backspace"
        @click="clearOnRestart = !clearOnRestart"
      />
    </div>
    <div>
      <b>타임스탬프 형식:</b>
      <button
        v-tooltip="'타임스탬프 없음'"
        :style="timestampStyle('DISABLED')"
        :class="buttonClassObject"
        class="fa-ban"
        @click="setTimestampMode('DISABLED')"
      />
      <button
        v-tooltip="'이번 현실의 현재 시간'"
        :style="timestampStyle('THIS_REALITY')"
        :class="buttonClassObject"
        class="fa-stopwatch"
        @click="setTimestampMode('THIS_REALITY')"
      />
      <button
        v-tooltip="'이벤트 이후 경과 시간'"
        :style="timestampStyle('RELATIVE_NOW')"
        :class="buttonClassObject"
        class="fa-clock"
        @click="setTimestampMode('RELATIVE_NOW')"
      />
      <button
        v-tooltip="'이전 이벤트 이후 시간'"
        :style="timestampStyle('RELATIVE_PREV')"
        :class="buttonClassObject"
        class="fa-arrow-left"
        @click="setTimestampMode('RELATIVE_PREV')"
      />
      <button
        v-tooltip="'날짜와 시간'"
        :style="timestampStyle('DATE_TIME')"
        :class="buttonClassObject"
        class="fa-user-clock"
        @click="setTimestampMode('DATE_TIME')"
      />
    </div>
    <span
      v-for="(event, id) in events"
      :key="id"
    >
      <b>{{ event.line }}번째 줄{{ timestamp(event) }}:</b>
      <button
        v-tooltip="'해당 줄로 이동'"
        :class="buttonClassObject"
        class="fa-arrow-circle-right"
        @click="scrollToLine(event.line)"
      />
      <div class="c-automator-docs-page__indented">
        <i>{{ event.message }}</i>
      </div>
    </span>
  </div>
</template>

<style scoped>

</style>
