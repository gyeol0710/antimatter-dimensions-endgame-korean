<script>
import GlyphSetPreview from "@/components/GlyphSetPreview";
import ToggleButton from "@/components/ToggleButton";

export default {
  name: "GlyphSetSavePanel",
  components: {
    ToggleButton,
    GlyphSetPreview
  },
  data() {
    return {
      hasEquipped: true,
      glyphSets: [],
      names: [],
      effects: false,
      rarity: false,
      level: false,
    };
  },
  computed: {
    questionmarkTooltip() {
      return `글리프 프리셋은 시간 연구 불러오기처럼 작동하며, 이전에 저장한
        글리프 세트 전체를 장착할 수 있습니다`;
    },
    noSet() {
      return `이 슬롯에 저장된 글리프 프리셋이 없습니다`;
    },
  },
  watch: {
    effects(newValue) {
      player.options.ignoreGlyphEffects = newValue;
    },
    rarity(newValue) {
      player.options.ignoreGlyphRarity = newValue;
    },
    level(newValue) {
      player.options.ignoreGlyphLevel = newValue;
    },
  },
  created() {
    this.on$(GAME_EVENT.GLYPHS_EQUIPPED_CHANGED, this.refreshGlyphSets);
    this.on$(GAME_EVENT.GLYPH_SET_SAVE_CHANGE, this.refreshGlyphSets);
    this.refreshGlyphSets();
    for (let i = 0; i < player.reality.glyphs.sets.length; i++) {
      this.names[i] = player.reality.glyphs.sets[i].name;
    }
  },
  methods: {
    update() {
      this.hasEquipped = Glyphs.activeList.length > 0;
      this.effects = player.options.ignoreGlyphEffects;
      this.rarity = player.options.ignoreGlyphRarity;
      this.level = player.options.ignoreGlyphLevel;
    },
    refreshGlyphSets() {
      this.glyphSets = cloneDeep(player.reality.glyphs.sets.map(g => Glyphs.copyForRecords(g.glyphs)));
    },
    setName(id) {
      const name = this.names[id] === "" ? "" : `: ${this.names[id]}`;
      return `글리프 프리셋 #${id + 1}${name}`;
    },
    saveGlyphSet(id) {
      if (!this.hasEquipped || player.reality.glyphs.sets[id].glyphs.length) return;
      player.reality.glyphs.sets[id].glyphs = Glyphs.active.compact();
      this.refreshGlyphSets();
      EventHub.dispatch(GAME_EVENT.GLYPH_SET_SAVE_CHANGE);
    },
    // A proper full solution to this turns out to contain an NP-hard problem as a subproblem, so instead we do
    // something which should work in most cases - we match greedily when it won't obviously lead to an incomplete
    // preset match, and leniently when matching greedily may lead to an incomplete set being loaded
    loadGlyphSet(set, id) {
      if (!this.setLengthValid(set)) return;
      let glyphsToLoad = [...set].sort((a, b) => Decimal.compare(a.level.times(a.strength), b.level.times(b.strength)));
      const activeGlyphs = [...Glyphs.active.filter(g => g)];

      // Create an array where each entry contains a single active glyph and all its matches in the preset which it
      // could fill in for, based on the preset loading settings
      const activeOptions = [];
      for (const glyph of activeGlyphs) {
        const options = Glyphs.findByValues(glyph, glyphsToLoad, {
          level: this.level ? -1 : 0,
          strength: this.rarity ? -1 : 0,
          effects: this.effects ? -1 : 0
        });
        activeOptions.push({ glyph, options });
      }

      // Using the active glyphs one by one, select matching to-be-loaded preset glyphs to be removed from the list.
      // This makes sure the inventory doesn't attempt to match a glyph which is already satisfied by an equipped one
      const selectedFromActive = this.findSelectedGlyphs(activeOptions, 5);
      for (const glyph of selectedFromActive) glyphsToLoad = glyphsToLoad.filter(g => g !== glyph);

      // For the remaining glyphs to load from the preset, find all their appropriate matches within the inventory.
      // This is largely the same as earlier with the equipped glyphs
      const remainingOptions = [];
      for (let index = 0; index < glyphsToLoad.length; index++) {
        const glyph = glyphsToLoad[index];
        const options = Glyphs.findByValues(glyph, Glyphs.sortedInventoryList, {
          level: this.level ? 1 : 0,
          strength: this.rarity ? 1 : 0,
          effects: this.effects ? 1 : 0
        });
        remainingOptions[index] = { glyph, options };
      }

      // This is scanned through similarly to the active slot glyphs, except we need to make sure we don't try to
      // match more glyphs than we have room for
      const selectedFromInventory = this.findSelectedGlyphs(remainingOptions,
        Glyphs.active.countWhere(g => g === null));
      for (const glyph of selectedFromInventory) glyphsToLoad = glyphsToLoad.filter(g => g !== glyph);

      // Actually equip the glyphs and then notify how successful (or not) the loading was
      let missingGlyphs = glyphsToLoad.length;
      for (const glyph of selectedFromInventory) {
        const idx = Glyphs.active.indexOf(null);
        if (idx !== -1) {
          Glyphs.equip(glyph, idx);
          missingGlyphs--;
        }
      }
      if (missingGlyphs > 0) {
        GameUI.notify.error(`${missingGlyphs} ${pluralize("글리프", missingGlyphs)}를 ${this.setName(id)}에서
          찾거나 장착하지 못했습니다.`);
      } else {
        GameUI.notify.success(`불러오기 완료: ${this.setName(id)}`);
      }
    },
    // Given a list of options for suitable matches to those glyphs and a maximum glyph count to match, returns the
    // set of glyphs which should be loaded. This is a tricky matching process to do since on one hand we don't want
    // early matches to prevent later ones, but on the other hand matching too leniently can cause any passed-on later
    // requirements to be too strict (eg. preset 1234 and equipped 234 could match 123, leaving an unmatchable 4).
    // The compromise solution here is to check how many choices the next-strictest option list has - if it only has
    // one choice then we pick conservatively (the weakest glyph) - otherwise we pick greedily (the strongest glyph).
    findSelectedGlyphs(optionList, maxGlyphs) {
      // We do a weird composite function here in order to make sure that glyphs get treated by type individually; then
      // within type they are generally ordered in strictest to most lenient in terms of matches. Note that the options
      // are sorted internally starting with the strictest match first
      const compFn = o => 1000 * (10 * o.glyph.type.length + o.glyph.type.codePointAt(0)) + o.options.length;
      optionList.sort((a, b) => compFn(a) - compFn(b));

      const toLoad = [];
      let slotsLeft = maxGlyphs;
      for (let index = 0; index < optionList.length; index++) {
        if (slotsLeft === 0) break;
        const entry = optionList[index];

        const filteredOptions = entry.options.filter(g => !toLoad.includes(g));
        if (filteredOptions.length === 0) continue;
        const selectedGlyph = filteredOptions[filteredOptions.length - 1];
        toLoad.push(selectedGlyph);
        slotsLeft--;
      }
      return toLoad;
    },
    deleteGlyphSet(id) {
      if (!player.reality.glyphs.sets[id].glyphs.length) return;
      if (player.options.confirmations.deleteGlyphSetSave) Modal.glyphSetSaveDelete.show({ glyphSetId: id });
      else {
        player.reality.glyphs.sets[id].glyphs = [];
        this.refreshGlyphSets();
        EventHub.dispatch(GAME_EVENT.GLYPH_SET_SAVE_CHANGE);
      }
    },
    nicknameBlur(event) {
      player.reality.glyphs.sets[event.target.id].name = event.target.value.slice(0, 20);
      this.names[event.target.id] = player.reality.glyphs.sets[event.target.id].name;
      this.refreshGlyphSets();
    },
    setLengthValid(set) {
      return set.length && set.length <= Glyphs.activeSlotCount;
    },
    loadingTooltip(set) {
      return this.setLengthValid(set) && this.hasEquipped
        ? "이미 장착한 글리프가 있어 이 세트를 제대로 불러오지 못할 수 있습니다"
        : null;
    },
    glyphSetKey(set, index) {
      return `${index} ${Glyphs.hash(set)}`;
    }
  }
};
</script>

<template>
  <div class="l-glyph-sacrifice-options c-glyph-sacrifice-options l-glyph-sidebar-panel-size">
    <span
      v-tooltip="questionmarkTooltip"
      class="l-glyph-sacrifice-options__help c-glyph-sacrifice-options__help o-questionmark"
    >
      ?
    </span>
    <div class="l-glyph-set-save__header">
      프리셋을 불러올 때 다음 속성을 기준으로 일치하는 글리프를 찾습니다. "정확히"는 프리셋에 있는 것과
      동일한 글리프만 장착합니다. 다른 설정은 대체로 조건에 맞는 "더 좋은" 글리프를 대신 장착할 수 있게 합니다.
    </div>
    <div class="c-glyph-set-save-container">
      <ToggleButton
        v-model="effects"
        class="c-glyph-set-save-setting-button"
        label="효과:"
        on="포함"
        off="정확히"
      />
      <ToggleButton
        v-model="level"
        class="c-glyph-set-save-setting-button"
        label="레벨:"
        on="이상"
        off="정확히"
      />
      <ToggleButton
        v-model="rarity"
        class="c-glyph-set-save-setting-button"
        label="희귀도:"
        on="이상"
        off="정확히"
      />
    </div>
    <div
      v-for="(set, id) in glyphSets"
      :key="id"
      class="c-glyph-single-set-save"
    >
      <div class="c-glyph-set-preview-area">
        <GlyphSetPreview
          :key="glyphSetKey(set, id)"
          :text="setName(id)"
          :text-hidden="true"
          :glyphs="set"
          :flip-tooltip="true"
          :none-text="noSet"
        />
      </div>
      <div class="c-glyph-single-set-save-flexbox">
        <div ach-tooltip="사용자 지정 이름 설정 (최대 20자)">
          <input
            :id="id"
            type="text"
            size="20"
            maxlength="20"
            placeholder="사용자 지정 세트 이름"
            class="c-glyph-sets-save-name__input"
            :value="names[id]"
            @blur="nicknameBlur"
          >
        </div>
        <div class="c-glyph-single-set-save-flexbox-buttons">
          <button
            class="c-glyph-set-save-button"
            :class="{'c-glyph-set-save-button--unavailable': !hasEquipped || set.length}"
            @click="saveGlyphSet(id)"
          >
            저장
          </button>
          <button
            v-tooltip="loadingTooltip(set)"
            class="c-glyph-set-save-button"
            :class="{'c-glyph-set-save-button--unavailable': !setLengthValid(set)}"
            @click="loadGlyphSet(set, id)"
          >
            불러오기
          </button>
          <button
            class="c-glyph-set-save-button"
            :class="{'c-glyph-set-save-button--unavailable': !set.length}"
            @click="deleteGlyphSet(id)"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.l-glyph-set-save__header {
  margin: -1.5rem 2rem 0;
}

.c-glyph-set-save-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin: 1rem auto 0;
}

.c-glyph-single-set-save-flexbox {
  width: 17rem;
}

.c-glyph-set-preview-area {
  width: 18rem;
}
</style>
