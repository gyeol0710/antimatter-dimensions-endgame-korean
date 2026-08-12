<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "SpeedrunModeModal",
  components: {
    PrimaryButton,
    ModalWrapperChoice,
  },
  data() {
    return {
      onInfoPage: true,
      name: "",
      confirmPhrase: "",
    };
  },
  computed: {
    willStartRun() {
      return this.confirmPhrase === "Gotta Go Fast!";
    },
  },
  methods: {
    nextPage() {
      this.onInfoPage = false;
    },
    startRun() {
      if (!this.willStartRun) return;
      this.emitClose();
      Speedrun.prepareSave(Speedrun.generateName(this.name));
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    :show-cancel="!onInfoPage && !willStartRun"
    :show-confirm="!onInfoPage && willStartRun"
    confirm-class="o-primary-btn--width-medium c-modal-hard-reset-btn c-modal__confirm-btn"
    @confirm="startRun"
  >
    <template #header>
      스피드런 모드 시작
    </template>
    <div
      v-if="onInfoPage"
      class="c-modal-message__text"
    >
      게임의 특정 지점에 도달한 시간을 추적하는 추가 통계가 있는 저장 파일을 시작합니다.
      이 기록은 화면 오른쪽 아래와 통계의 전용 하위 탭에 표시됩니다.
      <br>
      <br>
      거의 모든 애니메이션과 확인 창은 기본적으로 비활성화되지만, 필요한 진행 단계에 도달하기 전까지
      해당 설정을 변경할 수 있습니다. 스피드런을 시작하면 반물질 수량이 변할 때까지 게임이 일시 정지되어
      시작 전에 모든 설정을 조정할 수 있습니다. 최적화된 스피드런을 실제로 시작하기까지 오래 기다리지
      않도록 몇 가지 도전과제가 무료로 주어집니다.
      <br>
      <br>
      <i>
        스피드런 모드에만 존재하는 추가 콘텐츠는 없습니다.
      </i>
      <br>
      <br>
      <PrimaryButton
        class="o-primary-btn--width-medium c-modal-hard-reset-btn c-modal__confirm-btn"
        @click="nextPage"
      >
        계속
      </PrimaryButton>
    </div>
    <div
      v-else
      class="c-modal-message__text"
    >
      아래에 스피드런 저장 파일의 이름을 입력할 수 있습니다. 이름은 게임 플레이에 영향을 주지 않고
      이 저장 파일의 플레이어를 식별하는 용도로만 사용됩니다. 입력하지 않으면 무작위 이름이 생성됩니다.
      타이머가 시작되기 전에는 스피드런 정보 상자의 이름을 클릭하여 변경할 수 있습니다.
      <input
        ref="name"
        v-model="name"
        type="text"
        class="c-modal-input c-modal-hard-reset__input"
        @keyup.esc="emitClose"
      >
      <br>
      <br>
      스피드런 저장 파일도 일반 저장 파일처럼 가져오거나 내보낼 수 있습니다. 가져오기와 내보내기를 통해
      게임의 개별 구간을 최적화할 수 있으므로 가져온 스피드런은 분할 스피드런으로 표시됩니다.
      가져오지 않은 저장 파일은 단일 구간 스피드런으로 유지됩니다.
      <br>
      <br>
      원한다면 스피드런을 시작하기 전에 설정 탭에서 글리프 난수 시드를 변경할 수 있습니다.
      <br>
      <br>
      <div class="c-modal-hard-reset-danger">
        스피드런을 시작하면 저장 파일이 게임 시작 지점으로 초기화됩니다. 전체 게임 완료 통계, 시각 설정,
        오토메이터 스크립트, 글리프 꾸미기 같은 일부 요소는 유지되지만, 그 밖의 상태는 게임 전체를 완료하고
        크레딧 화면에서 다시 시작하기를 선택한 직후와 같아집니다. 아래에 "Gotta Go Fast!"를 입력하여
        확인하고 스피드런을 시작하거나 다시 시작하세요.
      </div>
      <input
        ref="confirmPhrase"
        v-model="confirmPhrase"
        type="text"
        class="c-modal-input c-modal-hard-reset__input"
        @keyup.esc="emitClose"
      >
    </div>
    <template #confirm>
      스피드런 시작!
    </template>
    <template #cancel>
      취소
    </template>
  </ModalWrapperChoice>
</template>
