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
| `/n2/kanji/quiz`, `/n5/vocabulary/quiz` | Multiple-choice quiz: kanji → reading or reading → kanji |
| `/n5/vocabulary?s=verbs` | Word list by category, search, collapsible example sentences |
| `/n4/grammar` | Grammar points with structure, notes and examples |

| `/register`, `/login` | Create an account (JLPT target, name, email, password, date of birth, country, postcode → address filled in) · sign in |
| `/admin`, `/admin/login` | Admin panel (its own sign-in): every user with last sign-in, study time (today, 7 days, total) and progress per JLPT level; reset a password, delete an account |

All routes are generated from the level registry (`src/data/levels.ts`), so new content needs no new pages.

## Accounts and database

Who sees what (`src/proxy.ts`):

Signed-out visitors see every page as members do — every section, group, category tab and count — but only the
first few items can be read, heard, practised or tested; the rest is shown locked (faint characters, blank cards,
"Unlock … — register free" chips) to show how much more there is.

| Page | Open without an account | Signed in |
| --- | --- | --- |
| `/` (landing), `/n5` (level) | everything | everything |
| `/n5/hiragana`, `/n5/katakana` (chart, practice, test) | the first 2 rows of the chart | everything |
| `/n5/kanji` (list, practice, test) | the first 2 groups | everything |
| `/n5/vocabulary`, `/n5/grammar` | 5 words / 5 grammar points of each of the first 3 categories | everything |
| `/n5/kanji/quiz`, `/n5/vocabulary/quiz` | — (→ `/login`, then back) | everything |

Each previewed page is built ahead of time in two versions: the preview at its own address (`src/app/[level]/[module]`
and its `practice/`, `test/`) and the full page under `/full/…` (`src/app/full/…`), which the proxy serves at the
page's own address to signed-in accounts. The preview is made from `src/data/preview.ts`: the set keeps its whole
structure, but a locked item keeps only its character (no meaning, readings, examples or memory tricks), so the
locked content isn't in the page. The amounts are `PREVIEW_GROUPS` and `PREVIEW_LISTS`.

Anyone can register at `/register` — no email check, no approval — and then signs in (registering doesn't sign
them in); Register and Sign in from a preview come back to that page. Sessions last as long as the browser keeps
cookies (400 days, renewed whenever the site is used). Emails listed in `ADMIN_EMAILS` become admins when they register.

- **Registration:** the form is in `src/app/(auth)/register/`, its checks in `src/lib/registration.ts`. Countries
  are stored as ISO codes (`src/lib/countries.ts`). Entering a postcode fills in the address through
  `/api/postcode` (Japan: zipcloud, India: api.postalpincode.in, ~60 more countries: Zippopotam.us; elsewhere
  the person types it). Everything stays editable.
- **Study tracking** (`src/lib/tracking.ts`, `src/components/layout/ActivityTracker.tsx`, `/api/track`): time
  counts while the site is open, in front (visible and focused, so tabs don't double count) and used in the last
  2 minutes; it's sent every 2 minutes and when the page is left, and stored per day in Japan time. "Learned" =
  a character written correctly in practice or test, or a word answered correctly in a vocabulary quiz, at least
  once (`markLearned` in `src/lib/settings.ts`). A level's progress counts its kana, kanji and vocabulary
  (`src/app/admin/users.ts`); grammar has no exercises yet.
- **Admin panel:** its **own, independent sign-in** (`/admin/login`, cookie `sb-nihongo-admin`, sent only to
  `/admin`): an admin stays signed in to the panel whatever account the site is signed in as, and signing out of
  one doesn't sign out of the other. An admin who signs in to the site is signed in to the panel too.
- **Sign-in:** Supabase Auth (email + password, sessions in cookies via `@supabase/ssr`). A forgotten password is
  reset from the admin panel (there's no email sending).
- **Data:** Supabase Postgres through Prisma (`prisma/schema.prisma`, client in `src/lib/db.ts`): `profiles`,
  `activity_days`, `learned_items`.
- **Security:** every table has Row Level Security on with no policies, so Supabase's public Data API can't touch
  it; only the server reaches the data. Server Functions and API routes check the account themselves, not only the proxy.
- **Kanji, vocabulary and grammar stay in `src/data/`** — the database holds only per-user data.

Settings: copy `.env.example` to `.env.local` and fill it in. For the live site, each one also goes where
`.env.example` says: in Vercel (Project → Settings → Environment Variables, Production) the two public ones as
**Config** (the build reads them), `SUPABASE_SECRET_KEY`, `DATABASE_URL` and `ADMIN_EMAILS` as **Secret**;
`DIRECT_URL` as a **GitHub Actions secret** (used only to apply migrations). The deploy checks them first.

```bash
npm run db:migrate -- --name what-changed   # after editing prisma/schema.prisma: write + apply a migration
npm run db:deploy                           # apply committed migrations (the deploy does this automatically)
npm run db:status                           # which migrations the database has
```

New migrations are applied by the GitHub deploy before the new site goes live. Give every new table
`ALTER TABLE "…" ENABLE ROW LEVEL SECURITY;` in its migration. To remove or rename a column without breaking the
site that's live during a deploy, do it in two migrations: first add the new and make the old optional, then
remove the old (see `prisma/migrations/*_registration_and_tracking` and `*_remove_access_requests`).

## Content

| Folder | What | Format |
| --- | --- | --- |
| `src/data/characters/` | kana tables | `defineKanaSet` |
| `src/data/characters/n5-kanji/`, `n4-kanji/`, `n2-kanji/` | kanji books: N5/N4 in themed groups, N2 in look-alike groups. Each kanji's examples, in order: its basic word, every word at the kanji's own level, then harder words only when no other word shows their reading. Each example is tagged with the reading it shows (`"*"` for a word read as a whole, e.g. 今日 きょう). "More vocabulary" holds easier words, most used first. Every sentence has spaced kana, romaji and English | `defineKanjiBook` + `bk(...)` |
| `src/data/kanji-memory/` | "Remember it" for each kanji, shared by every book it's in: an easy story from its parts (`""` when there's no easy one) and a two-panel emoji cartoon with very short sentences | `km(kanji, story, [panel, panel])` |
| `public/vocab-art/<code points>.svg` | a hand-drawn picture per vocabulary word (医者 → `533b-8005.svg`), shown on its card; flat colours, 160×160 tile; `npm run data:vocab-art` lists them in `src/data/vocab-art.json` | SVG files |
| `src/data/vocabulary/<level>/part-*.ts` | words: reading, romaji, meaning, part of speech, category, 2 examples | `WORDS: VocabEntry[]` |
| `src/data/grammar/<level>.ts` | grammar points: pattern, meaning, structure, explanation, notes, 2 examples | `CATEGORIES`, `POINTS` |
| `src/data/glosses/part-*.ts` | every N5/N4 example sentence word by word (vocabulary, grammar, kanji books, cartoons), shown under each sentence with the words coloured by kind: `私=I は 学生=student です=am。` — see `words.ts` for the format. Readings come from the sentence's kana (`align.ts`), kinds (noun, verb…) from the word lists and conjugation rules (`pos.ts`) | one sentence per line |

A character set built with `defineKanjiBook` (it has `details`) is shown as the grouped,
collapsible kanji list with per-group practice; other sets use the classic chart.

Types live in `src/data/types.ts`. Check any content file with:

```bash
node --experimental-strip-types --no-warnings scripts/validate-content.mjs src/data/vocabulary/n5/part-1.ts
```

After adding or changing an N5/N4 example sentence, give it a line in `src/data/glosses/` and run
`npm run data:glosses` (`-- --list` prints sentences without one; `-- --kinds` lists words whose kind was
guessed; `-- --readings` lists words read in an unusual way). A changed sentence without a matching line
simply shows no word list.

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
   The audio script also checks every character clip: a lone short sound (む, ン, a reading like い) can come
   back almost silent, especially in the male voice, so it is made again (「む」, then む！, then むー) and soft
   clips are turned up to the same level.

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

Starred kanji, sound on/off, **voice (female/male)**, strict/easy, guides, auto-clear, romaji, **word by word** (on/off), and **highlighter marks**
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
