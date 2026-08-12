<script>
import ModalOptionsToggleButton from "@/components/ModalOptionsToggleButton";
import ModalWrapperOptions from "@/components/modals/options/ModalWrapperOptions";

export default {
  name: "InfoDisplayOptionsModal",
  components: {
    ModalOptionsToggleButton,
    ModalWrapperOptions,
  },
  data() {
    return {
      infinityUnlocked: false,
      eternityUnlocked: false,
      realityUnlocked: false,
      alchemyUnlocked: false,
      endgameUnlocked: false,

      showPercentage: false,
      achievements: false,
      achievementUnlockStates: false,
      challenges: false,
      studies: false,
      glyphEffectDots: false,
      realityUpgrades: false,
      perks: false,
      alchemy: false,
      masteries: false,
      breakEternityUpgrades: false,
      endgameUpgrades: false,
      divinityUpgrades: false,
      resurgenceUpgrades: false,
      nullUpgrades: false,
    };
  },
  computed: {
    fullCompletion() {
      return player.records.fullGameCompletions > 0;
    }
  },
  watch: {
    showPercentage(newValue) {
      player.options.showHintText.showPercentage = newValue;
    },
    achievements(newValue) {
      player.options.showHintText.achievements = newValue;
    },
    achievementUnlockStates(newValue) {
      player.options.showHintText.achievementUnlockStates = newValue;
    },
    challenges(newValue) {
      player.options.showHintText.challenges = newValue;
    },
    studies(newValue) {
      player.options.showHintText.studies = newValue;
    },
    glyphEffectDots(newValue) {
      player.options.showHintText.glyphEffectDots = newValue;
    },
    realityUpgrades(newValue) {
      player.options.showHintText.realityUpgrades = newValue;
    },
    perks(newValue) {
      player.options.showHintText.perks = newValue;
    },
    alchemy(newValue) {
      player.options.showHintText.alchemy = newValue;
    },
    masteries(newValue) {
      player.options.showHintText.masteries = newValue;
    },
    breakEternityUpgrades(newValue) {
      player.options.showHintText.breakEternityUpgrades = newValue;
    },
    endgameUpgrades(newValue) {
      player.options.showHintText.endgameUpgrades = newValue;
    },
    divinityUpgrades(newValue) {
      player.options.showHintText.divinityUpgrades = newValue;
    },
    resurgenceUpgrades(newValue) {
      player.options.showHintText.resurgenceUpgrades = newValue;
    },
    nullUpgrades(newValue) {
      player.options.showHintText.nullUpgrades = newValue;
    },
  },
  methods: {
    update() {
      const progress = PlayerProgress.current;
      this.infinityUnlocked = this.fullCompletion || progress.isInfinityUnlocked;
      this.eternityUnlocked = this.fullCompletion || progress.isEternityUnlocked;
      this.realityUnlocked = this.fullCompletion || progress.isRealityUnlocked;
      this.alchemyUnlocked = this.fullCompletion || Ra.unlocks.effarigUnlock.canBeApplied;
      this.endgameUnlocked = this.fullCompletion || progress.isEndgameUnlocked;
      this.divinityUnlocked = this.fullCompletion || player.celestials.pelle.divinities > 0;
      this.lhcUnlocked = this.fullCompletion || ExpansionPack.alphaPack.isBought;

      const options = player.options.showHintText;
      this.showPercentage = options.showPercentage;
      this.achievements = options.achievements;
      this.achievementUnlockStates = options.achievementUnlockStates;
      this.challenges = options.challenges;
      this.studies = options.studies;
      this.glyphEffectDots = options.glyphEffectDots;
      this.realityUpgrades = options.realityUpgrades;
      this.perks = options.perks;
      this.alchemy = options.alchemy;
      this.masteries = options.masteries;
      this.breakEternityUpgrades = options.breakEternityUpgrades;
      this.endgameUpgrades = options.endgameUpgrades;
      this.divinityUpgrades = options.divinityUpgrades;
      this.resurgenceUpgrades = options.resurgenceUpgrades;
      this.nullUpgrades = options.nullUpgrades;
    }
  },
};
</script>

<template>
  <ModalWrapperOptions class="c-modal-options__large">
    <template #header>
      정보 디스플레이 설정
    </template>
    <div class="c-modal-options__button-container">
      <ModalOptionsToggleButton
        v-model="showPercentage"
        text="% 획득 보이기:"
      />
      <ModalOptionsToggleButton
        v-model="achievements"
        text="도전과제 ID:"
      />
      <ModalOptionsToggleButton
        v-model="achievementUnlockStates"
        text="도전과제 달성 알림:"
      />
      <ModalOptionsToggleButton
        v-if="infinityUnlocked"
        v-model="challenges"
        text="도전 ID:"
      />
      <ModalOptionsToggleButton
        v-if="eternityUnlocked"
        v-model="studies"
        text="시간 연구 ID:"
      />
      <ModalOptionsToggleButton
        v-if="realityUnlocked"
        v-model="glyphEffectDots"
        text="글리프 효과 도트:"
      />
      <ModalOptionsToggleButton
        v-if="realityUnlocked"
        v-model="realityUpgrades"
        text="현실 업그레이드 이름:"
      />
      <ModalOptionsToggleButton
        v-if="realityUnlocked"
        v-model="perks"
        text="퍼크 ID:"
      />
      <ModalOptionsToggleButton
        v-if="alchemyUnlocked"
        v-model="alchemy"
        text="연금술 재료 개수:"
      />
      <ModalOptionsToggleButton
        v-if="endgameUnlocked"
        v-model="masteries"
        text="엔드게임 마스터리 ID:"
      />
      <ModalOptionsToggleButton
        v-if="endgameUnlocked"
        v-model="breakEternityUpgrades"
        text="영원 돌파 업그레이드 이름:"
      />
      <ModalOptionsToggleButton
        v-if="endgameUnlocked"
        v-model="endgameUpgrades"
        text="엔드게임 업그레이드 이름:"
      />
      <ModalOptionsToggleButton
        v-if="divinityUnlocked"
        v-model="divinityUpgrades"
        text="신성 업그레이드 이름:"
      />
      <ModalOptionsToggleButton
        v-if="divinityUnlocked"
        v-model="resurgenceUpgrades"
        text="재기 업그레이드 이름:"
      />
      <ModalOptionsToggleButton
        v-if="lhcUnlocked"
        v-model="nullUpgrades"
        text="무효 업그레이드 이름:"
      />
    </div>
    참고: Shift 키를 누르고 있으면 위의 모든 추가 정보가 항상 표시됩니다.
  </ModalWrapperOptions>
</template>
