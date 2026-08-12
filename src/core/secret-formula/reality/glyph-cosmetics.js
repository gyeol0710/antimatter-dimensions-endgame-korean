// Color prop is a combination of a B/W background and a border hex code
export const glyphCosmeticSets = {
  cards: {
    id: "cards",
    name: "플레잉 카드 문양",
    symbol: ["♠", "♥", "♦", "♣", "♤", "♧", "♡", "♢"],
    color: ["W#000000", "B#FF2222"],
  },
  lower: {
    id: "lower",
    name: "소문자 글리프",
    symbol: ["ω", "ξ", "δ", "ψ"],
  },
  sus: {
    id: "sus",
    name: "수상함",
    symbol: ["ඔ", "ඕ", "ඞ", "ඩ"],
    color: ["B#FCA40A"]
  },
  currency: {
    id: "currency",
    name: "현대 화폐",
    symbol: ["$", "₽", "¥", "€", "¢", "£", "₩"],
    preventBlur: true,
    color: ["W#00DD00"],
  },
  oldCurrency: {
    id: "oldCurrency",
    name: "옛날 화폐",
    symbol: ["₷", "₰", "₳", "₯", "₻"],
    preventBlur: true,
    color: ["B#00DD00"],
  },
  pipe: {
    id: "pipe",
    name: "홑줄 파이프",
    symbol: ["┌", "┐", "└", "┘", "─", "│"],
    color: ["B#33FF33"],
  },
  pipe2: {
    id: "pipe2",
    name: "겹줄 파이프",
    symbol: ["╔", "╗", "╚", "╝", "═", "║"],
    color: ["W#33FF33"],
  },
  trigram: {
    id: "trigram",
    name: "팔괘",
    symbol: ["☰", "☱", "☲", "☳", "☴", "☵", "☶", "☷"],
    preventBlur: true,
    color: ["B#FFFFFF"],
  },
  arrow: {
    id: "arrow",
    name: "홑화살표",
    symbol: ["←", "↓", "↑", "→", "↖", "↗", "↘", "↙"],
    color: ["W#CC0000"],
  },
  arrow2: {
    id: "arrow2",
    name: "겹화살표",
    symbol: ["⇄", "⇅", "⇔", "⇕"],
    color: ["W#0000CC"],
  },
  arrow3: {
    id: "arrow3",
    name: "특수 화살표",
    symbol: ["↺", "↯", "↬", "⇱", "⇲", "⇮", "↭"],
    preventBlur: true,
    color: ["W#CCCC00"],
  },
  integral: {
    id: "integral",
    name: "적분",
    symbol: ["∬", "∭", "∮", "∯", "∰", "∱", "∲", "∳"],
    preventBlur: true,
    color: ["B#123456"]
  },
  numbers: {
    id: "numbers",
    name: "원문자 숫자",
    symbol: ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧"],
    preventBlur: true,
    color: ["B#607D8B"]
  },
  blocks: {
    id: "blocks",
    name: "2x2 블록",
    symbol: ["▘", "▚", "▞", "▙", "▛", "▜", "▟"],
  },
  shapes: {
    id: "shapes",
    name: "여러 도형",
    symbol: ["▰", "▲", "◆", "◎", "◍"],
    preventBlur: true,
  },
  chess: {
    id: "chess",
    name: "체스 말",
    symbol: ["♟", "♞", "♝", "♜", "♛", "♚"],
    preventBlur: true,
    color: ["B#AAAAAA"],
  },
  planet: {
    id: "planet",
    name: "행성 기호",
    symbol: ["☿", "♀", "♁", "♂", "♃", "♄", "♆", "♇"],
    preventBlur: true,
    color: ["B#964B00"],
  },
  musical: {
    id: "musical",
    name: "음악 기호",
    symbol: ["♩", "♪", "♬", "♭", "♮", "♯"],
    preventBlur: true,
    color: ["W#E621E6"]
  },
  recycle: {
    id: "recycle",
    name: "재활용 기호",
    symbol: ["♻", "♳", "♴", "♵", "♶", "♷", "♸", "♹"],
    preventBlur: true,
  },
  dice: {
    id: "dice",
    name: "주사위 눈",
    symbol: ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"],
    preventBlur: true,
  },
  hazard: {
    id: "hazard",
    name: "위험 기호",
    symbol: ["☠", "☢", "☣", "⚠"],
    preventBlur: true,
    color: ["W#FCA40A"]
  },
  celestial: {
    id: "celestial",
    name: "셀레스티얼 아이콘",
    symbol: ["\uF0C1", "⌬", "\uF185", "ᛝ", "♅"],
    color: ["B#00BCD4"],
  },
  alchemy: {
    id: "alchemy",
    name: "연금술 기호",
    symbol: ["🜁", "🜂", "🜃", "🜄", "🜔", "🜍", "🜞", "🜚"],
    color: ["B#FFD700"],
  },
  blob: {
    id: "blob",
    name: "블롭",
    symbol: ["\uE011", "\uE012", "\uE013", "\uE014", "\uE016", "\uE01A", "\uE01C"],
    preventBlur: true,
    color: ["B#E4B51A"],
  },
  blob2: {
    id: "blob2",
    name: "더 많은 블롭",
    symbol: ["\uE01D", "\uE01E", "\uE021", "\uE024", "\uE025", "\uE026", "\uE027"],
    preventBlur: true,
  },
  star: {
    id: "star",
    name: "기하학적 별",
    symbol: ["★", "☆", "✪", "✯", "✭", "✫", "🜞"],
  },
  star2: {
    id: "star2",
    name: "사실적인 별",
    symbol: ["✶", "✦", "✧", "✺", "✹", "✷"],
    color: ["W#D4FFFF", "W#FDFFCC"],
  },
  gem: {
    id: "gem",
    name: "보석",
    symbol: ["💎"],
    color: ["B#035E3B", "B#943B47", "B#032C54"],
  },
  heiroglyph: {
    id: "heiroglyph",
    name: "일반 상형문자",
    symbol: ["𓂀", "𓀶", "𓅊", "𓇌", "𓊝", "☥"],
    preventBlur: true,
  },
  paperclip: {
    id: "paperclip",
    name: "쓸모없는 클립",
    symbol: ["𓄲", "𓄳", "𓄴", "𓄵", "𓄶", "𓄷", "𓄸"],
    preventBlur: true,
    color: ["B#222222"],
  },
  snake: {
    id: "snake",
    name: "여러 뱀",
    symbol: ["𓆓", "𓆔", "𓆕", "𓆖", "𓆗", "𓆘"],
    preventBlur: true,
  },
  egyptNumber: {
    id: "egyptNumber",
    name: "이집트 숫자",
    symbol: ["𓆄", "𓅔", "𓆾", "𓂰", "𓍦", "𓎋", "𓐀", "𓃐"],
    preventBlur: true,
    color: ["W#123456"]
  },
  egyptWeather: {
    id: "egyptWeather",
    name: "이집트 풍향계",
    symbol: ["𓈹", "𓈧", "𓈷", "𓉈", "𓈩", "𓈻", "𓈽"],
    preventBlur: true,
    color: ["W#607D8B"]
  },
  limbs: {
    id: "limbs",
    name: "어색한 팔다리",
    symbol: ["𓈝", "𓄒", "𓃂", "𓃁", "𓂩", "𓂙", "𓂓", "𓂼"],
    preventBlur: true,
    color: ["B#E621E6"]
  },
  animal: {
    id: "animal",
    name: "모세의 방주",
    symbol: ["𓆏", "𓆉", "𓅬", "𓅃", "𓃲", "𓆣", "𓆊", "𓃰"],
    preventBlur: true,
    color: ["W#0000AA"],
  },
};
