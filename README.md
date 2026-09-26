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
| `/` | Choose a JLPT level (N5 available, N4–N1 coming soon) |
| `/n5` | Learning options: Hiragana, Katakana, Kanji (Vocabulary & Grammar coming soon) |
| `/n5/hiragana` | Chart — tap a character to hear it |
| `/n5/hiragana/practice?c=5` | Practice in chart order (optional start index) |
| `/n5/hiragana/test` | Randomised test |

All routes are generated from the level registry, so new levels need no new pages.

## Adding characters or a level (e.g. N4 kanji)

1. Create `src/data/characters/n4-kanji.ts`, copying the format of `n5-kanji.ts`:
   `defineKanjiSet("n4-kanji", [{ id, title, subtitle, rows: [[kanji, meaning, on, kun], …] }])`
2. In `src/data/levels.ts`, set the level's `status` to `"available"` and add a module with `charSet: N4_KANJI`.
3. Generate its assets:
   ```bash
   npm run data:strokes   # stroke order from KanjiVG → public/strokes/<set>.json
   npm run data:audio     # neural voice clips → public/audio/<codepoint>.mp3 (skips existing)
   ```

The chart, writing pad, practice and test code is shared by every character set.

## Structure

- `src/data/` — plain data + pure helpers (also loaded by the Node scripts)
- `src/lib/geometry.ts` — stroke recognition (strict mode) and shape similarity (easy mode)
- `src/lib/audio.ts` — pronunciation (pre-generated clips, browser voice fallback) and feedback sounds
- `src/components/writing/WritingPad.tsx` — the writing box used everywhere
- `src/components/session/` — practice/test session, character strip, summary

## Credits

Stroke order data: [KanjiVG](https://kanjivg.tagaini.net) by Ulrich Apel, CC BY-SA 3.0.
Voice: Microsoft Nanami neural voice, generated via the Edge Read Aloud service.
