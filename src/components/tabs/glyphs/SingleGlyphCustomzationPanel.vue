<script>
import GlyphComponent from "@/components/GlyphComponent";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "SingleGlyphCustomzationPanel",
  components: {
    GlyphComponent,
    PrimaryButton
  },
  data() {
    return {
      glyphID: -1,
      isVisible: true,
    };
  },
  computed: {
    glyph() {
      if (this.glyphID === -1) return null;
      const g = Glyphs.findById(this.glyphID);
      return {
        type: g.type,
        level: g.level,
        strength: g.strength,
        effects: g.effects,
        color: g.color,
        symbol: g.symbol,
        cosmetic: g.cosmetic,
      };
    },
    glyphTypeName() {
      const names = {
        time: "시간",
        dilation: "팽창",
        replication: "복제",
        infinity: "무한",
        power: "동력",
        effarig: "에파리그",
        reality: "현실",
        cursed: "저주받은",
        companion: "동반자",
      };
      return names[this.glyph.type] ?? this.glyph.type.capitalize();
    },
    typeCosmetic() {
      const changes = [];
      if (GlyphAppearanceHandler.symbolMap[this.glyph.type]) changes.push("기호");
      if (GlyphAppearanceHandler.colorMap[this.glyph.type]) changes.push("색상");
      if (changes.length === 0) return "없음";
      return changes.join("/");
    },
    specialCosmetic() {
      if (this.glyph.cosmetic) {
        const names = {
          time: "시간",
          dilation: "팽창",
          replication: "복제",
          infinity: "무한",
          power: "동력",
          effarig: "에파리그",
          reality: "현실",
          cursed: "저주받은",
          companion: "동반자",
          music: "음악",
          blob: "블롭",
        };
        return names[this.glyph.cosmetic] ?? this.glyph.cosmetic.capitalize();
      }
      const changes = [];
      if (this.glyph.symbol) changes.push("기호");
      if (this.glyph.color) changes.push("색상");
      if (changes.length === 0) return "없음";
      return changes.join("/");
    }
  },
  created() {
    // Whenever the inventory changes, this glyph might not exist afterwards
    EventHub.logic.on(GAME_EVENT.GLYPHS_CHANGED, () => {
      this.glyphID = -1;
      this.$recompute("glyph");
    });
    EventHub.logic.on(GAME_EVENT.GLYPH_VISUAL_CHANGE, () => {
      this.$recompute("glyph");
    });
  },
  methods: {
    update() {
      this.isVisible = player.reality.glyphs.cosmetics.active && (GlyphAppearanceHandler.availableTypes.length > 0 ||
        CosmeticGlyphTypes.list.some(t => t.isCosmetic && t.isUnlocked()));
    },
    dragover(event) {
      if (!event.dataTransfer.types.includes(GLYPH_MIME_TYPE)) return;
      event.preventDefault();
    },
    drop(event) {
      if (!event.dataTransfer.types.includes(GLYPH_MIME_TYPE)) return;
      const id = parseInt(event.dataTransfer.getData(GLYPH_MIME_TYPE), 10);
      if (isNaN(id)) return;
      EventHub.dispatch(GAME_EVENT.GLYPH_VISUAL_CHANGE);
      this.glyphID = id;
      this.$recompute("glyph");
    },
    openModal() {
      Modal.singleGlyphAppearance.show({ glyphId: this.glyphID });
    },
  }
};
</script>

<template>
  <div
    v-if="isVisible"
    class="c-single-glyph-cosmetic"
    @dragover="dragover"
    @drop="drop"
  >
    <div
      v-if="glyph"
      class="c-glyph-info"
    >
      <div class="c-glyph-info-section">
        <GlyphComponent
          :glyph="glyph"
          :flip-tooltip="true"
        />
      </div>
      <div class="c-glyph-info-section c-cosmetic-text">
        <u>외형 속성</u>
        종류: {{ glyphTypeName }}
        <br>
        전체: {{ typeCosmetic }}
        <br>
        개별: {{ specialCosmetic }}
      </div>
      <div class="c-glyph-info-section">
        <PrimaryButton
          class="o-primary-btn--subtab-option"
          @click="openModal"
        >
          꾸미기
        </PrimaryButton>
        <PrimaryButton
          class="o-primary-btn--subtab-option"
          @click="glyphID = -1"
        >
          칸 비우기
        </PrimaryButton>
      </div>
    </div>
    <div v-else>
      이 칸으로 글리프를 끌어오면 외형을 바꿀 수 있습니다! 이곳에는 외형만 복사되며,
      실제 글리프는 인벤토리에 그대로 남습니다. 글리프를 제거하거나 획득하거나 옮기면 이 칸이 비워집니다.
    </div>
  </div>
</template>

<style scoped>
.c-single-glyph-cosmetic {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 1rem);
  height: 8rem;
  font-size: 1.2rem;
  border: 0.1rem solid #b8b8b8;
  border-radius: var(--var-border-radius, 0.5rem);
  padding: 0.5rem;
  margin-top: 1rem;
  user-select: none;
}

.c-glyph-info {
  display: flex;
  flex-direction: row;
}

.c-glyph-info-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  margin: 1rem;
}

.c-cosmetic-text {
  width: 18rem;
}
</style>
