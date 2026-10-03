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
| `src/data/characters/` | kana tables | `defineKanaSet` |
| `src/data/characters/n5-kanji/`, `n4-kanji/`, `n2-kanji/` | kanji books: N5/N4 in themed groups, N2 in look-alike groups. Every on/kun reading has an example sentence (tagged with that reading); every sentence has spaced kana, romaji and English; plus more vocabulary | `defineKanjiBook` + `bk(...)` |
| `src/data/vocabulary/<level>/part-*.ts` | words: reading, romaji, meaning, part of speech, category, 2 examples | `WORDS: VocabEntry[]` |
| `src/data/grammar/<level>.ts` | grammar points: pattern, meaning, structure, explanation, notes, 2 examples | `CATEGORIES`, `POINTS` |

A character set built with `defineKanjiBook` (it has `details`) is shown as the grouped,
collapsible kanji list with per-group practice; other sets use the classic chart.

Types live in `src/data/types.ts`. Check any content file with:

```bash
node --experimental-strip-types --no-warnings scripts/validate-content.mjs src/data/vocabulary/n5/part-1.ts
```

## Adding a level (e.g. N3)

1. Add `characters/n3-kanji/part-*.ts` (+ `index.ts`), `vocabulary/n3/part-*.ts` (+ `index.ts`) and `grammar/n3.ts` in the formats above.
2. In `src/data/levels.ts`, set the level's `status` to `"available"` and attach the sets to its modules.
3. Generate assets (both scripts only fill in what's missing):
   ```bash
   npm run data:strokes   # stroke order from KanjiVG → public/strokes/<set>.json
   npm run data:parts     # kanji parts from KanjiVG → src/data/kanji-parts.json (names: src/data/radicals.ts)
   npm run data:audio       # female voice → public/audio/*.mp3 (characters) + public/audio/packs/ (words, sentences)
   npm run data:audio:male  # male voice   → public/audio/male/…
   ```

## Deploying (free)

Pushing to `publish/main` runs `.github/workflows/deploy.yml`:

1. **Audio → GitHub Pages.** Both voices together are far larger than Vercel's Hobby upload limit,
   so `public/audio` is published to GitHub Pages (free for public repositories).
2. **Site → Vercel**, built with `NEXT_PUBLIC_AUDIO_BASE` pointing at the Pages URL and without `public/audio`.

One-time setup in the GitHub repository:
- Secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
- **Settings → Pages → Source: GitHub Actions.**
- **Settings → Environments → github-pages → Deployment branches:** add `publish/main`.

Locally (no `NEXT_PUBLIC_AUDIO_BASE`) audio is served from `/audio`.

## Settings kept on the device

Sound on/off, **voice (female/male)**, strict/easy, guides, auto-clear, romaji, and **highlighter marks**
(select text in any example sentence or vocabulary line, pick a colour; tap a mark to recolour or erase it)
are stored in `localStorage` (`src/lib/settings.ts`, `src/lib/marks.ts`).

## Structure

- `src/data/` — plain data + pure helpers (also loaded by the Node scripts)
- `src/lib/geometry.ts` — stroke recognition (strict mode) and shape similarity (easy mode)
- `src/lib/audio.ts` — pronunciation (pre-generated clips per voice, browser voice fallback) and feedback sounds
- `src/lib/marks.ts`, `src/components/marker/` — highlighter (CSS Custom Highlight API)
- `src/components/writing/` — the writing box used everywhere
- `src/components/session/` — practice/test session, character strip, summary
- `src/components/study/` — vocabulary & grammar browser, cards, example sentences

## Credits

Stroke order data: [KanjiVG](https://kanjivg.tagaini.net) by Ulrich Apel, CC BY-SA 3.0.
Word lists: [elzup/jlpt-word-list](https://github.com/elzup/jlpt-word-list) (MIT). Example sentences and explanations are original.
Voices: Microsoft Nanami (female) and Keita (male) neural voices, generated via the Edge Read Aloud service.
