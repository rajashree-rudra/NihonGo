// Visual identity per module id. Unknown ids fall back to the neutral theme,
// so new modules only need an entry here if they want their own colour.
export interface ModuleTheme {
  glyph: string;
  text: string;
  soft: string;
  solid: string;
  ring: string;
  bar: string;
}

const THEMES: Record<string, ModuleTheme> = {
  hiragana: { glyph: "あ", text: "text-shu", soft: "bg-shu-soft", solid: "bg-shu", ring: "ring-shu/25", bar: "bg-shu" },
  katakana: { glyph: "ア", text: "text-ai", soft: "bg-ai-soft", solid: "bg-ai", ring: "ring-ai/25", bar: "bg-ai" },
  kanji: { glyph: "漢", text: "text-matcha", soft: "bg-matcha-soft", solid: "bg-matcha", ring: "ring-matcha/25", bar: "bg-matcha" },
  vocabulary: { glyph: "語", text: "text-kin", soft: "bg-kin-soft", solid: "bg-kin", ring: "ring-kin/25", bar: "bg-kin" },
  grammar: { glyph: "文", text: "text-ink-soft", soft: "bg-ink/6", solid: "bg-ink", ring: "ring-ink/15", bar: "bg-ink" },
};

export function moduleTheme(id: string): ModuleTheme {
  return THEMES[id] ?? THEMES.grammar;
}
