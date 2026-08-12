<script>
import ModalWrapper from "@/components/modals/ModalWrapper";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "ModifySeedModal",
  components: {
    ModalWrapper,
    PrimaryButton,
  },
  data() {
    return {
      mode: 0,
      inputSeed: "",
      seedText: "",
      convertedInput: false,
      seedValue: 0,
    };
  },
  computed: {
    choiceEnum: () => SPEEDRUN_SEED_STATE,
    officialSeed: () => Speedrun.officialFixedSeed,
  },
  created() {
    this.seedValue = player.speedrun.initialSeed;
    this.inputSeed = `${player.speedrun.initialSeed}`;
    this.convertedInput = false;
  },
  methods: {
    update() {
      this.mode = player.speedrun.seedSelection;
      this.seedText = Speedrun.seedModeText();
    },
    handleSeedInput() {
      if (this.inputSeed.match(/^-?\d+$/gu)) {
        const num = Number(this.inputSeed);
        this.seedValue = Math.abs(num) > 9e15
          ? this.hashStringToSeed(this.inputSeed)
          : Number(this.inputSeed);
      } else {
        this.seedValue = this.hashStringToSeed(this.inputSeed);
      }
      this.convertedInput = this.seedValue !== Number(this.inputSeed);

      if (this.seedValue === 0) this.setMode(this.choiceEnum.FIXED);
      else this.setMode(this.choiceEnum.PLAYER, this.seedValue);
    },
    setMode(mode, seed) {
      if (mode === this.choiceEnum.PLAYER && this.seedValue === 0) return;
      Speedrun.modifySeed(mode, parseInt(seed, 10));
    },
    buttonClass(mode) {
      return {
        "o-primary-btn--subtab-option": true,
        "o-selected": mode === this.mode,
      };
    },
    // String-to-number hashing function, using a fixed numerical seed inspired by Number.MAX_VALUE
    // See https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
    hashStringToSeed(str) {
      const seed = 17977308;
      let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
      for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
      }
      h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
      h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
      return 4294967296 * (2097151 & h2) + (h1 >>> 0);
    }
  },
};
</script>

<template>
  <ModalWrapper>
    <template #header>
      글리프 난수 시드 변경
    </template>
    <div>
      첫 현실 이후 플레이 전체에서 나타나는 모든 글리프 선택지는 초기 시드 값에 따라 게임 시작 시
      무작위로 결정됩니다. 이 시드는 플레이에 사용할 <i>특정한</i> 글리프 선택지 묶음 하나를 정합니다.
      자신이나 다른 사람이 다른 스피드런에서 같은 시드를 선택하면 같은 글리프 선택지가 나타납니다.
      <br>
      <br>
      첫 글리프를 생성하기 전이라면 언제든 다음 세 설정 사이를 전환할 수 있습니다.
      <br>
      현재 설정: <b>{{ seedText }}</b>
      <br>
      <br>
      <PrimaryButton
        :class="buttonClass(choiceEnum.FIXED)"
        @click="setMode(choiceEnum.FIXED)"
      >
        공식 사전 설정 시드
      </PrimaryButton>
      <br>
      시드 <b>{{ officialSeed }}</b> 값을 선택하는 기본 설정입니다. 시드를 전혀 변경하지 않은
      모든 플레이어에게 같은 글리프 선택지가 나타납니다.
      <br>
      <br>
      <PrimaryButton
        :class="buttonClass(choiceEnum.RANDOM)"
        @click="setMode(choiceEnum.RANDOM)"
      >
        무작위 시드
      </PrimaryButton>
      <br>
      완전히 무작위인 시드 값을 선택합니다. 다른 플레이어가 의도적으로 같은 값을 선택하지 않는 한
      서로 다른 글리프 선택지가 나타날 가능성이 매우 높습니다.
      <br>
      <br>
      <PrimaryButton
        v-tooltip="seedValue === 0 ? '입력 시드는 0일 수 없습니다!' : ''"
        :class="buttonClass(choiceEnum.PLAYER)"
        @click="setMode(choiceEnum.PLAYER, seedValue)"
      >
        플레이어 지정 시드:
      </PrimaryButton>
      <input
        ref="inputSeed"
        v-model="inputSeed"
        type="text"
        class="c-modal-input"
        @input="handleSeedInput()"
      >
      <br>
      텍스트 상자에 입력한 값을 시드로 설정합니다.
      <br>
      <span v-if="seedValue !== 0">
        현재 입력은 {{ convertedInput ? "숫자로 변환한" : "그대로 입력한" }} 시드 값 <b>{{ seedValue }}</b>입니다.
      </span>
      <span v-else>
        현재 입력은 {{ convertedInput ? "변환하면" : "그 자체로" }} <b>0</b>이며,
        시드는 공식 사전 설정값으로 돌아갑니다.
      </span>
      <br>
      기술적인 이유로 이 값은 0이 아니어야 사용할 수 있습니다.
    </div>
  </ModalWrapper>
</template>

<style scoped>
.o-selected {
  color: var(--color-text-inverted);
  background-color: var(--color-good);
}
</style>
