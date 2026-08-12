<script>
import ModalWrapper from "@/components/modals/ModalWrapper";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "PelleEffectsModal",
  components: {
    PrimaryButton,
    ModalWrapper,
  },
  computed: {
    nerfs() {
      return [
        // Numerical nerfs and disabled boosts
        "펠레 업그레이드로 해금한 항목은 일반적인 방법으로 해금할 수 없습니다",
        "파멸 이전의 모든 무한 포인트 및 영원 포인트 배율이 비활성화됩니다",
        "가장 빠른 무한 기록에 따른 무한 포인트 생성이 비활성화됩니다",
        "파멸 이전의 모든 복제자 속도 배율이 비활성화됩니다",
        `복제자가 ${format(Number.MAX_VALUE, 2)}개를 넘으면 훨씬 더 급격히 느려집니다`,
        "대부분의 영원 도전이 더 어려워집니다",
        `모든 은하의 효과가 원래의 ${formatPercents(0.5)}로 감소합니다`,
        `반물질 차원 배율이 원래의 ${formatInt(10)}분의 하나로 줄어듭니다`,
        "도전과제 배율과 여러 도전과제 보상이 비활성화됩니다",
        "모든 무한 및 영원 배율과 생성 효과가 비활성화됩니다",
        "블랙홀이 비활성화됩니다",
        `현실 업그레이드 "시간적 초월"이 비활성화됩니다`,

        // Initial QoL and automation
        "도전과제 21을 제외한 모든 시작 자원 증가 보상이 비활성화됩니다",
        "자원이 초기화되지 않게 하는 모든 보상이 비활성화됩니다",
        "ECR 계열을 제외한 해금 비용 감소 퍼크 보상이 비활성화됩니다",
        "무한 도전 및 영원 도전 자동 완료가 비활성화됩니다",
        "모든 차원 자동구매기와 무한 이전 단계의 자동구매기는 펠레를 통해 다시 획득할 때까지 비활성화됩니다",
        "시간 정리 자동구매기가 비활성화됩니다",
        "시간 팽창 이후의 모든 자동화가 비활성화됩니다",

        // Time studies + Dilation
        "플레이 일수에 따라 시간 차원을 강화하는 영원 업그레이드는 이번 아마겟돈 시간을 기준으로 계산됩니다",
        `파멸 이전의 모든 팽창된 시간 배율이 ${formatX(2)} 반복 구매 업그레이드를 제외하고 비활성화됩니다`,
        "모든 타키온 입자 배율이 비활성화됩니다",
        "시간 팽창 업그레이드를 제외한 파멸 이전의 모든 시간 정리 생성 효과가 비활성화됩니다",

        // Glyphs
        "글리프 장착 기능은 다시 획득할 때까지 비활성화됩니다",
        `글리프 레벨이 낮아지고 희귀도가 ${formatPercents(0)}로 고정됩니다`,
        "글리프 희생, 변형, 연금술의 효과가 모두 비활성화됩니다",

        // Celestial features
        "다른 셀레스티얼 현실에 진입할 수 없습니다",
        "음악 글리프를 구매할 수 없습니다",
        "에파리그의 모든 보상이 비활성화됩니다",
        "시간 저장과 관련된 모든 기능이 비활성화됩니다",
        "V의 모든 보상이 비활성화됩니다",
        `라의 테레사 레벨 ${formatInt(1)} 효과가 비활성화됩니다`,
        "무한 업그레이드를 충전할 수 없습니다",
        "삼원 연구와 공간 정리가 비활성화됩니다",
        "암흑 물질 차원 및 셀레스티얼 해금과 관련된 것을 제외한 모든 허수 업그레이드가 비활성화됩니다",
        "연속체와 특이점 보상이 비활성화됩니다"
      ];
    }
  }
};
</script>

<template>
  <ModalWrapper>
    <template #header>
      파멸 상태에서 비활성화되거나 약화되는 효과
    </template>
    <div class="pelle-effects-container">
      <p
        v-for="(nerf, idx) in nerfs"
        :key="idx"
      >
        {{ nerf }}
      </p>
    </div>
    <PrimaryButton
      class="o-primary-btn--width-medium c-modal-message__okay-btn c-modal__confirm-btn"
      @click="emitClose"
    >
      확인
    </PrimaryButton>
  </ModalWrapper>
</template>

<style scoped>
.pelle-effects-container {
  overflow-y: scroll;
  height: 40rem;
}

p {
  margin-bottom: 1rem;
}
</style>
