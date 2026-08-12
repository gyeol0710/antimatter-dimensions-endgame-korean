<script>
export default {
  name: "AutomatorDocsIntroPage",
};
</script>

<template>
  <div>
    반물질 차원 오토메이터에 오신 것을 환영합니다!
    <br>
    <br>
    이 페이지에서는 오토메이터로 할 수 있는 작업을 전반적으로 소개합니다.
    각 기능의 자세한 내용은 게임 방법 또는 관련 탭에서 확인할 수 있습니다.
    <br>
    <br>
    <b>스크립트 언어:</b> 오토메이터는 게임의 특정 동작을 대신 수행하기 위해 전용 스크립트 언어를 사용합니다.
    <div class="fas fa-list c-automator-button-icon" />을 클릭하면 사용할 수 있는 명령 목록이 열립니다.
    <div class="fas fa-book c-automator-button-icon" /> 페이지에서는 여러 값을 짧게 부를 상수도 정의할 수 있습니다.
    <br>
    <br>
    <b>화면 구성:</b> 오토메이터는 두 영역으로 나뉩니다. 왼쪽에는 스크립트와 실행, 정지, 반복 제어가 있고,
    오른쪽에는 오토메이터 정보가 있습니다. 오른쪽 위의
    <div class="fas fa-expand-arrows-alt c-automator-button-icon" />을 클릭하면 편집하기 쉽도록 오토메이터가
    브라우저 화면 전체로 확장됩니다.
    <br>
    <br>
    <b>편집기 모드:</b> 오토메이터 스크립트는 기본값인 블록 편집기와 텍스트 편집기 중 하나로 작성할 수 있습니다.
    왼쪽 영역 오른쪽 위의 전환 버튼으로 두 편집기를 바꿀 수 있습니다. 오류가 있는 스크립트는 두 모드 사이에서
    올바르게 변환되지 않아 스크립트 일부가 삭제될 수 있습니다.
    <br>
    <br>
    <b>스크립트 만들기:</b> 두 번째 버튼 줄의 드롭다운에서 여러 스크립트를 전환하거나 새 스크립트를 만들 수 있습니다.
    <div class="fas fa-edit c-automator-button-icon" />과
    <div class="fas fa-trash c-automator-button-icon" /> 버튼으로 현재 스크립트의 이름을 바꾸거나 삭제할 수 있습니다.
    오토메이터에는 편집할 스크립트가 항상 하나 이상 있으며, 마지막 스크립트를 삭제하면 빈 스크립트를 자동으로 만듭니다.
    <br>
    <br>
    <b>스크립트 작성:</b> 블록 편집기에서는 <div class="fas fa-cubes c-automator-button-icon" /> 블록 탭에서
    스크립트를 만들고, 텍스트 편집기에서는 왼쪽의 텍스트 상자에 직접 입력합니다. 어느 편집기에서든
    <div class="fas fa-file-code c-automator-button-icon" /> 템플릿 생성기의 짧은 사전 제작 스크립트도 사용할 수 있습니다.
    <div class="fas fa-arrow-rotate-left c-automator-button-icon" /> 또는
    <div class="fas fa-arrow-rotate-right c-automator-button-icon" />과 각 단축키로 제한된 횟수만큼 편집을 취소하거나
    다시 실행할 수 있습니다. 스크립트를 전환, 변환 또는 삭제하면 편집 기록이 지워집니다.
    <br>
    <br>
    <b>디버깅:</b> 스크립트를 고치는 주요 도구는 두 가지입니다. 스크립트가 전혀 실행되지 않을 때는
    <div class="fas fa-exclamation-triangle c-automator-button-icon" /> 오류 로그를, 실행은 되지만 예상대로 작동하지
    않을 때는 <div class="fas fa-eye c-automator-button-icon" /> 이벤트 로그를 사용합니다.
    <br>
    <br>
    <b>가져오기/내보내기:</b> 각각 <div class="fas fa-file-export c-automator-button-icon" />과
    <div class="fas fa-file-import c-automator-button-icon" /> 버튼을 사용해 오토메이터 스크립트를 텍스트 형식으로
    내보내거나 가져올 수 있습니다. 필요하면 <div class="fas fa-window-restore c-automator-button-icon" />에서
    확장 내보내기 옵션도 사용할 수 있습니다.
    <br>
    <br>
    <b>스크립트 저장:</b> 스크립트 변경 사항이 항상 컴퓨터에 즉시 저장되는 것은 아닙니다.
    자세한 내용은 게임 방법의 오토메이터 항목을 확인하세요. 또한 지연을 줄이기 위한 두 가지 글자 수 제한이
    오토메이터 패널 위에 표시됩니다.
  </div>
</template>

<style scoped>
.c-automator-button-icon {
  padding: 0.3rem 0.8rem;
  width: 3.3rem;
  border: var(--var-border-width, 0.2rem) solid var(--color-automator-controls-border);
  border-radius: var(--var-border-radius, 0.3rem);
  color: var(--color-automator-docs-font);
  background-color: var(--color-automator-controls-inactive);
}
</style>
