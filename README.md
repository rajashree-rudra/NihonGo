# NihonGo

Learn to read, hear and write Japanese — Next.js 16 · React 19 · Tailwind CSS 4.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Routes

| URL | Page |
| --- | --- |
| `/` | Choose a JLPT level (N5 and N4 available, N3–N1 coming soon) |
| `/n5` | Learning options: Hiragana, Katakana, Kanji, Vocabulary, Grammar |
| `/n5/hiragana` | Chart — tap a character to hear it |
| `/n5/hiragana/practice?s=yoon&c=5` | Practice in chart order (optional group tab and start index) |
| `/n5/hiragana/test` | Randomised test |
| `/n5/vocabulary?s=verbs` | Word list by category, search, collapsible example sentences |
| `/n4/grammar` | Grammar points with structure, notes and examples |

All routes are generated from the level registry (`src/data/levels.ts`), so new content needs no new pages.

## Content

| Folder | What | Format |
| --- | --- | --- |
| `src/data/characters/` | kana tables, kanji per level | `defineKanaSet` / `defineKanjiSet` |
| `src/data/vocabulary/<level>/part-*.ts` | words: reading, romaji, meaning, part of speech, category, 2 examples | `WORDS: VocabEntry[]` |
| `src/data/grammar/<level>.ts` | grammar points: pattern, meaning, structure, explanation, notes, 2 examples | `CATEGORIES`, `POINTS` |

Types live in `src/data/types.ts`. Check any content file with:

```bash
node --experimental-strip-types --no-warnings scripts/validate-content.mjs src/data/vocabulary/n5/part-1.ts
```

## Adding a level (e.g. N3)

1. Add `characters/n3-kanji.ts`, `vocabulary/n3/part-*.ts` (+ `index.ts`) and `grammar/n3.ts` in the formats above.
2. In `src/data/levels.ts`, set the level's `status` to `"available"` and attach the sets to its modules.
3. Generate assets (both scripts only fill in what's missing):
   ```bash
   npm run data:strokes   # stroke order from KanjiVG → public/strokes/<set>.json
   npm run data:audio     # neural voice → public/audio/*.mp3 (characters) and public/audio/t/*.mp3 (words, sentences)
   ```

## Structure

- `src/data/` — plain data + pure helpers (also loaded by the Node scripts)
- `src/lib/geometry.ts` — stroke recognition (strict mode) and shape similarity (easy mode)
- `src/lib/audio.ts` — pronunciation (pre-generated clips, browser voice fallback) and feedback sounds
- `src/components/writing/` — the writing box used everywhere
- `src/components/session/` — practice/test session, character strip, summary
- `src/components/study/` — vocabulary & grammar browser, cards, example sentences

## Credits

Stroke order data: [KanjiVG](https://kanjivg.tagaini.net) by Ulrich Apel, CC BY-SA 3.0.
Word lists: [elzup/jlpt-word-list](https://github.com/elzup/jlpt-word-list) (MIT). Example sentences and explanations are original.
Voice: Microsoft Nanami neural voice, generated via the Edge Read Aloud service.
