<script>
import AutosaveIntervalSlider from "./AutosaveIntervalSlider";
import OpenModalHotkeysButton from "@/components/OpenModalHotkeysButton";
import OptionsButton from "@/components/OptionsButton";
import PrimaryToggleButton from "@/components/PrimaryToggleButton";
import SaveFileName from "./SaveFileName";

import { STEAM } from "@/env";

export default {
  name: "OptionsSavingTab",
  components: {
    AutosaveIntervalSlider,
    OpenModalHotkeysButton,
    OptionsButton,
    PrimaryToggleButton,
    SaveFileName
  },
  data() {
    return {
      time: 0,
      lastExportTime: 0,
      hasExportedToday: false,
      cloudAvailable: false,
      cloudEnabled: false,
      forceCloudOverwrite: false,
      showCloudModal: false,
      syncSaveIntervals: false,
      showTimeSinceSave: false,
      hideGoogleName: false,
      loggedIn: false,
      userName: "",
      canSpeedrun: false,
      inSpeedrun: false,
      creditsClosed: false,
      canModifySeed: false,
    };
  },
  computed: {
    modalTooltip() {
      return `클라우드 세이브를 덮어쓰지 않는 편이 좋을 수 있는 상황을 게임이 감지합니다. 이 설정을 켜면
        자세한 정보를 담은 모달을 표시합니다.`;
    },
    overwriteTooltip() {
      if (this.showCloudModal) return "모달이 표시되므로 이 설정은 아무 효과가 없습니다.";
      return this.forceCloudOverwrite
        ? `어떤 경우에도 로컬 세이브가 클라우드 세이브를 덮어씁니다.`
        : `세이브 충돌이 발생하면 로컬 세이브를 클라우드에 저장하지 않습니다.`;
    },
    STEAM() {
      return STEAM;
    }
  },
  watch: {
    cloudEnabled(newValue) {
      player.options.cloudEnabled = newValue;
    },
    forceCloudOverwrite(newValue) {
      player.options.forceCloudOverwrite = newValue;
    },
    showCloudModal(newValue) {
      player.options.showCloudModal = newValue;
    },
    syncSaveIntervals(newValue) {
      player.options.syncSaveIntervals = newValue;
    },
    showTimeSinceSave(newValue) {
      player.options.showTimeSinceSave = newValue;
    },
    hideGoogleName(newValue) {
      player.options.hideGoogleName = newValue;
    }
  },
  methods: {
    update() {
      const options = player.options;
      this.time = Date.now();
      this.lastExportTime = player.lastExportTime;
      this.hasExportedToday = Math.floor(this.time / 86400000) <= Math.floor(this.lastExportTime / 86400000);
      this.cloudAvailable = Cloud.isAvailable;
      this.cloudEnabled = options.cloudEnabled;
      this.forceCloudOverwrite = options.forceCloudOverwrite;
      this.showCloudModal = options.showCloudModal;
      this.syncSaveIntervals = options.syncSaveIntervals;
      this.showTimeSinceSave = options.showTimeSinceSave;
      this.hideGoogleName = options.hideGoogleName;
      this.loggedIn = Cloud.loggedIn;
      this.canSpeedrun = player.speedrun.isUnlocked;
      this.inSpeedrun = player.speedrun.isActive;
      this.canModifySeed = Speedrun.canModifySeed();
      this.creditsClosed = GameEnd.creditsEverClosed;
      if (!this.loggedIn) return;
      this.userName = Cloud.user.displayName;
    },
    importAsFile(event) {
      // This happens if the file dialog is canceled instead of a file being selected
      if (event.target.files.length === 0) return;

      const reader = new FileReader();
      reader.onload = function() {
        // File importing behavior should use the behavior on the existing and to-be-overwritten save instead of the
        // settings in the to-be-imported save. This is largely because the former is more easily edited by the player,
        // and in contrast with the import-as-string case which allows the player to choose.
        // Note: Do not move this into GameStorage.import, as this would cause the offline progress choice in the text
        // import modal (the only other place GameStorage.import is called) to always be overridden
        GameStorage.offlineEnabled = player.options.offlineProgress;
        GameStorage.offlineTicks = player.options.offlineTicks;
        GameStorage.import(reader.result);
      };
      reader.readAsText(event.target.files[0]);
    },
    openSeedModal() {
      if (this.canModifySeed) {
        Modal.modifySeed.show();
      } else {
        Modal.message.show(`더 이상 시드를 변경할 수 없습니다. 이번 진행에서 글리프 난수로 글리프를
          하나 이상 생성했습니다.`);
      }
    },
    exportSave() {
      if (!this.hasExportedToday) {
        GameStorage.export();
        player.lastExportTime = Date.now();
        player.storedTime += 3600;
        GameUI.notify.info("세이브 내보내기 일일 보상을 받았습니다!");
      }
      if (this.hasExportedToday) {
        GameStorage.export();
        GameUI.notify.info("오늘은 이미 세이브를 내보냈습니다!");
      }
    }
  }
};
</script>

<template>
  <div class="l-options-tab">
    <div>
      하루에 한 번 세이브를 내보내면 무료 보상을 받을 수 있습니다!
    </div>
    <div class="l-options-grid">
      <div class="l-options-grid__row">
        <OptionsButton
          class="o-primary-btn--option_font-x-large"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          @click="exportSave()"
        >
          세이브 내보내기
        </OptionsButton>
        <OptionsButton
          class="o-primary-btn--option_font-x-large"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          onclick="Modal.import.show()"
        >
          세이브 불러오기
        </OptionsButton>
        <OptionsButton
          class="o-primary-btn--option_font-x-large"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          onclick="Modal.hardReset.show()"
        >
          게임 리셋하기
        </OptionsButton>
      </div>
      <div class="l-options-grid__row">
        <OptionsButton
          class="o-primary-btn--option_font-x-large"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          onclick="GameStorage.save(false, true)"
        >
          게임 저장하기
        </OptionsButton>
        <OptionsButton
          class="o-primary-btn--option_font-x-large"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          onclick="Modal.loadGame.show()"
        >
          세이브 선택하기
        </OptionsButton>
        <AutosaveIntervalSlider
          :min="10"
          :max="60"
          :interval="1"
        />
      </div>
      <div class="l-options-grid__row">
        <OptionsButton
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          onclick="GameStorage.exportAsFile()"
        >
          세이브를 파일로 내보내기
        </OptionsButton>
        <OptionsButton
          class="c-file-import-button"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
        >
          <input
            class="c-file-import"
            type="file"
            accept=".txt"
            @change="importAsFile"
          >
          <label for="file">세이브를 파일에서 가져오기</label>
        </OptionsButton>
        <PrimaryToggleButton
          v-model="showTimeSinceSave"
          class="o-primary-btn--option l-options-grid__button"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          label="마지막으로 저장한 시간 표시:"
        />
      </div>
      <div class="l-options-grid__row">
        <OptionsButton
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          onclick="Modal.backupWindows.show()"
        >
          자동 백업 메뉴 열기
        </OptionsButton>
        <SaveFileName />
      </div>
      <div class="l-options-grid__row">
        <OptionsButton
          v-if="canSpeedrun"
          class="o-primary-btn--option_font-x-large"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          onclick="Modal.enterSpeedrun.show()"
        >
          스피드런 시작하기
        </OptionsButton>
        <OptionsButton
          v-if="inSpeedrun"
          :class="{
            'o-pelle-disabled-pointer': creditsClosed,
            'o-primary-btn--disabled': !canModifySeed
          }"
          @click="openSeedModal()"
        >
          글리프 난수 시드 바꾸기
        </OptionsButton>
      </div>
      <OpenModalHotkeysButton />
    </div>
    <h2
      v-if="cloudAvailable"
      class="c-cloud-options-header"
    >
      <span v-if="hideGoogleName">구글 계정으로 로그인됨 <i>(이름 숨김)</i></span>
      <span v-else-if="loggedIn">로그인한 구글 계정: {{ userName }}</span>
      <span v-else>로그인되지 않음</span>
    </h2>
    <div v-if="loggedIn">
      <span v-if="cloudEnabled">10분마다 클라우드에 자동으로 저장합니다.</span>
      <span v-else>이 세이브에서 클라우드 저장이 비활성화되어 있습니다.</span>
    </div>
    <div
      v-if="cloudAvailable"
      class="l-options-grid"
    >
      <div
        v-if="!STEAM"
        class="l-options-grid__row"
      >
        <OptionsButton
          v-if="loggedIn"
          onclick="GameOptions.logout()"
        >
          구글 계정 연결을 끊고 클라우드 저장을 비활성화하기
        </OptionsButton>
        <OptionsButton
          v-else
          v-tooltip="'구글 계정을 게임 세이브 파일에 연결합니다.'"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          onclick="GameOptions.login()"
        >
          구글로 로그인하여 클라우드 저장을 활성화하기
        </OptionsButton>
        <PrimaryToggleButton
          v-if="loggedIn"
          v-model="hideGoogleName"
          v-tooltip="'개인정보 보호를 위해 화면에서 구글 계정 이름을 숨깁니다. 저장과 불러오기에는 영향을 주지 않습니다.'"
          class="o-primary-btn--option l-options-grid__button"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          label="구글 계정 이름 숨기기:"
        />
      </div>
      <div
        v-if="loggedIn"
        class="l-options-grid__row"
      >
        <OptionsButton
          onclick="GameOptions.cloudSave()"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
        >
          클라우드 저장
        </OptionsButton>
        <OptionsButton
          onclick="GameOptions.cloudLoad()"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
        >
          클라우드 불러오기
        </OptionsButton>
        <PrimaryToggleButton
          v-model="syncSaveIntervals"
          class="o-primary-btn--option l-options-grid__button"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          label="클라우드 저장 전 로컬에 강제 저장:"
        />
      </div>
      <div
        v-if="loggedIn"
        class="l-options-grid__row"
      >
        <PrimaryToggleButton
          v-model="cloudEnabled"
          class="o-primary-btn--option l-options-grid__button"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          label="클라우드 자동 저장 및 불러오기:"
        />
        <PrimaryToggleButton
          v-model="showCloudModal"
          v-tooltip="modalTooltip"
          class="o-primary-btn--option l-options-grid__button"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          label="세이브 충돌 가능성이 있으면 모달 표시:"
        />
        <PrimaryToggleButton
          v-model="forceCloudOverwrite"
          v-tooltip="overwriteTooltip"
          class="o-primary-btn--option l-options-grid__button"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          label="충돌이 있어도 클라우드에 강제 저장:"
        />
      </div>
    </div>
  </div>
</template>
