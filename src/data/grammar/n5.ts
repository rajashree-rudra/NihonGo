// JLPT N5 grammar. Explanations and examples: original.
import type { GrammarCategory, GrammarPoint } from "../types.ts";

export const CATEGORIES: GrammarCategory[] = [
  { id: "basics", title: "Sentence Basics", jp: "基本" },
  { id: "particles", title: "Particles", jp: "助詞" },
  { id: "questions", title: "Question Words", jp: "疑問詞" },
  { id: "verbs", title: "Verbs", jp: "動詞" },
  { id: "adjectives", title: "Adjectives & Comparison", jp: "形容詞・比較" },
  { id: "existence", title: "Existence, Location & Counting", jp: "存在・場所・数" },
  { id: "wants", title: "Wants & Invitations", jp: "希望・さそい" },
  { id: "requests", title: "Requests & Rules", jp: "お願い・ルール" },
  { id: "time", title: "Time & Sequence", jp: "時間・順番" },
  { id: "connecting", title: "Connecting & Explaining", jp: "接続・説明" },
];

export const POINTS: GrammarPoint[] = [
  // ---------- Sentence Basics ----------
  {
    id: "wa-desu", pattern: "〜は〜です", meaning: "A is B", category: "basics",
    structure: ["Noun₁ + は + Noun₂ + です"],
    explanation: "The most basic sentence. は (pronounced “wa”) marks the topic — what you are talking about — and です politely ends the sentence, like “is / am / are”.",
    notes: "Make it a question by adding か: 〜ですか。 Japanese often drops the topic when it is obvious, so 学生です。 alone means “I'm a student.”",
    examples: [
      { ja: "私は学生です。", kana: "わたしは がくせいです。", romaji: "Watashi wa gakusei desu.", en: "I'm a student." },
      { ja: "田中さんは先生ですか。", kana: "たなかさんは せんせいですか。", romaji: "Tanaka-san wa sensei desu ka.", en: "Is Mr. Tanaka a teacher?" },
    ],
  },
  {
    id: "ja-arimasen", pattern: "〜じゃありません", meaning: "is not, am not, are not", category: "basics",
    structure: ["Noun + じゃありません", "Noun + ではありません (more formal)"],
    explanation: "The polite negative of です. Use it to say that something is not a certain thing.",
    notes: "じゃありません is common in speech; ではありません sounds more formal and is used in writing. Casual form: じゃない. You will also hear じゃないです.",
    examples: [
      { ja: "私は先生じゃありません。", kana: "わたしは せんせいじゃ ありません。", romaji: "Watashi wa sensei ja arimasen.", en: "I'm not a teacher." },
      { ja: "これは私の本ではありません。", kana: "これは わたしの ほんでは ありません。", romaji: "Kore wa watashi no hon de wa arimasen.", en: "This isn't my book." },
    ],
  },
  {
    id: "deshita", pattern: "〜でした / 〜じゃありませんでした", meaning: "was / was not", category: "basics",
    structure: ["Noun + でした", "Noun + じゃありませんでした"],
    explanation: "The past forms of です. でした means “was”, and じゃありませんでした means “was not”.",
    notes: "Only the end of the sentence changes for the past — the rest stays the same.",
    examples: [
      { ja: "きのうは休みでした。", kana: "きのうは やすみでした。", romaji: "Kinou wa yasumi deshita.", en: "Yesterday was my day off." },
      { ja: "あの人は田中さんじゃありませんでした。", kana: "あの ひとは たなかさんじゃ ありませんでした。", romaji: "Ano hito wa Tanaka-san ja arimasen deshita.", en: "That person wasn't Mr. Tanaka." },
    ],
  },
  {
    id: "da", pattern: "〜だ", meaning: "is (casual)", category: "basics",
    structure: ["Noun / な-adj + だ", "Past: + だった　Negative: + じゃない"],
    explanation: "だ is the casual form of です. Use it with friends and family, and in diaries or notes. With teachers, customers or people you don't know, use です.",
    notes: "In casual questions だ is usually dropped: 休み？ (“Day off?”). Never put だ after an い-adjective (✗ たかいだ).",
    examples: [
      { ja: "今日は休みだ。", kana: "きょうは やすみだ。", romaji: "Kyou wa yasumi da.", en: "Today is a day off." },
      { ja: "きのうは雨だった。", kana: "きのうは あめだった。", romaji: "Kinou wa ame datta.", en: "It was rainy yesterday." },
    ],
  },
  {
    id: "ka-question", pattern: "〜か", meaning: "question marker", category: "basics",
    structure: ["Sentence (polite) + か"],
    explanation: "Put か at the end of a polite sentence to turn it into a question. The word order does not change.",
    notes: "In written Japanese a question often ends with 。 instead of ？. Answer with はい (yes) or いいえ (no).",
    examples: [
      { ja: "これはあなたのかさですか。", kana: "これは あなたの かさですか。", romaji: "Kore wa anata no kasa desu ka.", en: "Is this your umbrella?" },
      { ja: "コーヒーを飲みますか。", kana: "コーヒーを のみますか。", romaji: "Koohii o nomimasu ka.", en: "Will you have some coffee?" },
    ],
  },
  {
    id: "mo", pattern: "〜も", meaning: "also, too", category: "basics",
    structure: ["Noun + も (replaces は, が or を)"],
    explanation: "も means “also” or “too”. Put it right after the word it is about, in place of は, が or を.",
    notes: "With other particles, も goes after them: 私にも (to me too), 駅へも (to the station too).",
    examples: [
      { ja: "私も学生です。", kana: "わたしも がくせいです。", romaji: "Watashi mo gakusei desu.", en: "I'm a student too." },
      { ja: "田中さんはコーヒーも飲みます。", kana: "たなかさんは コーヒーも のみます。", romaji: "Tanaka-san wa koohii mo nomimasu.", en: "Mr. Tanaka drinks coffee too." },
    ],
  },
  {
    id: "no-possessive", pattern: "〜の〜", meaning: "'s, of (links two nouns)", category: "basics",
    structure: ["Noun₁ + の + Noun₂"],
    explanation: "の joins two nouns. The first noun tells you more about the second: whose it is, what kind it is, or where it is from.",
    notes: "If the second noun is clear, you can drop it: これは私のです (This is mine).",
    examples: [
      { ja: "これは私の本です。", kana: "これは わたしの ほんです。", romaji: "Kore wa watashi no hon desu.", en: "This is my book." },
      { ja: "日本語の先生は山田さんです。", kana: "にほんごの せんせいは やまださんです。", romaji: "Nihongo no sensei wa Yamada-san desu.", en: "Our Japanese teacher is Ms. Yamada." },
    ],
  },
  {
    id: "kore-sore-are", pattern: "これ・それ・あれ・どれ", meaning: "this one, that one, that one over there, which one", category: "basics",
    structure: ["これ / それ / あれ + は + 〜です", "どれ + ですか"],
    explanation: "これ is something near you, それ is near the listener, and あれ is far from both of you. どれ asks “which one?” when there are three or more choices.",
    notes: "These words stand alone — they are never followed directly by a noun. For “this book”, use この本.",
    examples: [
      { ja: "それは何ですか。", kana: "それは なんですか。", romaji: "Sore wa nan desu ka.", en: "What is that?" },
      { ja: "田中さんのかばんはどれですか。", kana: "たなかさんの かばんは どれですか。", romaji: "Tanaka-san no kaban wa dore desu ka.", en: "Which bag is yours, Mr. Tanaka?" },
    ],
  },
  {
    id: "kono-sono-ano", pattern: "この・その・あの・どの + Noun", meaning: "this ~, that ~, that ~ over there, which ~", category: "basics",
    structure: ["この / その / あの / どの + Noun"],
    explanation: "Like これ・それ・あれ・どれ, but always followed by a noun: この本 (this book), あの人 (that person).",
    notes: "Mistake to avoid: ✗ これ本. Say この本.",
    examples: [
      { ja: "この本は高いです。", kana: "この ほんは たかいです。", romaji: "Kono hon wa takai desu.", en: "This book is expensive." },
      { ja: "どの人が山田さんですか。", kana: "どの ひとが やまださんですか。", romaji: "Dono hito ga Yamada-san desu ka.", en: "Which person is Ms. Yamada?" },
    ],
  },
  {
    id: "koko-soko-asoko", pattern: "ここ・そこ・あそこ・どこ", meaning: "here, there, over there, where", category: "basics",
    structure: ["Place + は + ここ / そこ / あそこ + です", "Place + は + どこですか"],
    explanation: "Words for places. ここ is where you are, そこ is near the listener, あそこ is far from both, and どこ asks “where?”.",
    notes: "More polite versions: こちら・そちら・あちら・どちら. Shop staff use these a lot.",
    examples: [
      { ja: "トイレはあそこです。", kana: "トイレは あそこです。", romaji: "Toire wa asoko desu.", en: "The toilet is over there." },
      { ja: "駅はどこですか。", kana: "えきは どこですか。", romaji: "Eki wa doko desu ka.", en: "Where is the station?" },
    ],
  },
  {
    id: "ne", pattern: "〜ね", meaning: "isn't it?, right?", category: "basics",
    structure: ["Sentence + ね"],
    explanation: "ね at the end of a sentence asks for agreement or checks something you think is true, like “isn't it?” or “right?” in English.",
    notes: "It makes speech sound friendly. Don't overuse it when giving new information — that is what よ is for.",
    examples: [
      { ja: "今日はいい天気ですね。", kana: "きょうは いい てんきですね。", romaji: "Kyou wa ii tenki desu ne.", en: "Nice weather today, isn't it?" },
      { ja: "田中さんは来週来ますね。", kana: "たなかさんは らいしゅう きますね。", romaji: "Tanaka-san wa raishuu kimasu ne.", en: "Mr. Tanaka is coming next week, right?" },
    ],
  },
  {
    id: "yo", pattern: "〜よ", meaning: "you know, I tell you", category: "basics",
    structure: ["Sentence + よ"],
    explanation: "よ at the end of a sentence tells the listener something new or something you feel strongly about, like “you know” or “I tell you”.",
    notes: "Too many よ can sound pushy, especially to older people. よね combines both: “…, you know, right?”",
    examples: [
      { ja: "この店のラーメンはおいしいですよ。", kana: "この みせの ラーメンは おいしいですよ。", romaji: "Kono mise no raamen wa oishii desu yo.", en: "The ramen at this shop is really good, you know." },
      { ja: "電車はもう出ましたよ。", kana: "でんしゃは もう でましたよ。", romaji: "Densha wa mou demashita yo.", en: "The train has already left, you know." },
    ],
  },

  // ---------- Particles ----------
  {
    id: "ga-subject", pattern: "〜が", meaning: "subject marker", category: "particles",
    structure: ["Noun + が + Verb / Adjective"],
    explanation: "が marks who or what does something, especially when it is new information. After a question word like だれ or 何 you must use が, and the answer uses が too.",
    notes: "✗ だれは来ましたか → ○ だれが来ましたか。 が is also used with あります / います, 好き and わかります.",
    examples: [
      { ja: "だれが来ましたか。", kana: "だれが きましたか。", romaji: "Dare ga kimashita ka.", en: "Who came?" },
      { ja: "あ、バスが来ました。", kana: "あ、バスが きました。", romaji: "A, basu ga kimashita.", en: "Oh, the bus is here." },
    ],
  },
  {
    id: "wo-object", pattern: "〜を", meaning: "object marker", category: "particles",
    structure: ["Noun + を + Verb"],
    explanation: "を marks the thing an action is done to: what you eat, drink, buy, watch and so on. It is written を but pronounced “o”.",
    notes: "を also marks a place you move through or along: 道を歩きます (walk along the road).",
    examples: [
      { ja: "毎朝パンを食べます。", kana: "まいあさ パンを たべます。", romaji: "Maiasa pan o tabemasu.", en: "I eat bread every morning." },
      { ja: "何を買いましたか。", kana: "なにを かいましたか。", romaji: "Nani o kaimashita ka.", en: "What did you buy?" },
    ],
  },
  {
    id: "ni-time", pattern: "〜に (time)", meaning: "at, on, in (a point in time)", category: "particles",
    structure: ["Time + に + Verb"],
    explanation: "に after a clock time, day or month shows when something happens: 七時に (at seven), 八月に (in August).",
    notes: "Words like 今日, あした, 毎日 and 来週 do not take に. For days of the week に is optional.",
    examples: [
      { ja: "毎朝七時におきます。", kana: "まいあさ しちじに おきます。", romaji: "Maiasa shichiji ni okimasu.", en: "I get up at seven every morning." },
      { ja: "八月に日本へ行きます。", kana: "はちがつに にほんへ いきます。", romaji: "Hachigatsu ni Nihon e ikimasu.", en: "I'm going to Japan in August." },
    ],
  },
  {
    id: "ni-e-direction", pattern: "〜に / 〜へ (direction)", meaning: "to (a place)", category: "particles",
    structure: ["Place + へ / に + 行きます・来ます・かえります"],
    explanation: "へ (pronounced “e”) and に both show where you are going. Use them with 行きます (go), 来ます (come) and かえります (go home).",
    notes: "へ puts a little more focus on the direction, に on the arrival point, but for going places they are interchangeable.",
    examples: [
      { ja: "あした銀行へ行きます。", kana: "あした ぎんこうへ いきます。", romaji: "Ashita ginkou e ikimasu.", en: "I'm going to the bank tomorrow." },
      { ja: "山田さんはきのう学校に来ませんでした。", kana: "やまださんは きのう がっこうに きませんでした。", romaji: "Yamada-san wa kinou gakkou ni kimasen deshita.", en: "Ms. Yamada didn't come to school yesterday." },
    ],
  },
  {
    id: "ni-target", pattern: "〜に (person)", meaning: "to (someone)", category: "particles",
    structure: ["Person + に + Verb (会います, 書きます, 電話をかけます …)"],
    explanation: "に marks the person an action is directed at: who you meet, write to, call or give something to.",
    notes: "会います always takes に: 友だちに会います (not を).",
    examples: [
      { ja: "母に電話をかけます。", kana: "ははに でんわを かけます。", romaji: "Haha ni denwa o kakemasu.", en: "I'll call my mother." },
      { ja: "友だちに手紙を書きました。", kana: "ともだちに てがみを かきました。", romaji: "Tomodachi ni tegami o kakimashita.", en: "I wrote a letter to my friend." },
    ],
  },
  {
    id: "de-place", pattern: "〜で (place)", meaning: "at, in (where an action happens)", category: "particles",
    structure: ["Place + で + Action verb"],
    explanation: "で after a place shows where an action happens: where you study, eat, work or shop.",
    notes: "Compare: 学校にいます (be at school — existence uses に) and 学校でべんきょうします (study at school — actions use で).",
    examples: [
      { ja: "学校で日本語をべんきょうします。", kana: "がっこうで にほんごを べんきょうします。", romaji: "Gakkou de nihongo o benkyou shimasu.", en: "I study Japanese at school." },
      { ja: "どこで昼ごはんを食べますか。", kana: "どこで ひるごはんを たべますか。", romaji: "Doko de hirugohan o tabemasu ka.", en: "Where are you going to eat lunch?" },
    ],
  },
  {
    id: "de-means", pattern: "〜で (means)", meaning: "by, with, in (a tool, transport or language)", category: "particles",
    structure: ["Tool / Transport / Language + で + Verb"],
    explanation: "で also shows how you do something: the tool you use, the transport you take, or the language you speak.",
    notes: "On foot is 歩いて, not ✗ 足で.",
    examples: [
      { ja: "電車で会社へ行きます。", kana: "でんしゃで かいしゃへ いきます。", romaji: "Densha de kaisha e ikimasu.", en: "I go to work by train." },
      { ja: "これは日本語で何ですか。", kana: "これは にほんごで なんですか。", romaji: "Kore wa nihongo de nan desu ka.", en: "What is this in Japanese?" },
    ],
  },
  {
    id: "to-and", pattern: "〜と〜", meaning: "and (between nouns)", category: "particles",
    structure: ["Noun₁ + と + Noun₂"],
    explanation: "と joins nouns into a complete list: “A and B (and nothing else)”.",
    notes: "と only joins nouns. To join sentences, use そして or the て-form.",
    examples: [
      { ja: "パンとたまごを食べました。", kana: "パンと たまごを たべました。", romaji: "Pan to tamago o tabemashita.", en: "I ate bread and eggs." },
      { ja: "私のかぞくは父と母と私です。", kana: "わたしの かぞくは ちちと ははと わたしです。", romaji: "Watashi no kazoku wa chichi to haha to watashi desu.", en: "My family is my father, my mother and me." },
    ],
  },
  {
    id: "to-with", pattern: "〜と (together)", meaning: "with (someone)", category: "particles",
    structure: ["Person + と + Verb", "Person + と + いっしょに + Verb"],
    explanation: "と after a person means “with”: the person you do something together with.",
    notes: "Adding いっしょに (together) makes it clearer: 友だちといっしょに行きます.",
    examples: [
      { ja: "友だちとえいがを見ます。", kana: "ともだちと えいがを みます。", romaji: "Tomodachi to eiga o mimasu.", en: "I'm going to see a movie with a friend." },
      { ja: "だれと日本へ行きましたか。", kana: "だれと にほんへ いきましたか。", romaji: "Dare to Nihon e ikimashita ka.", en: "Who did you go to Japan with?" },
    ],
  },
  {
    id: "ya", pattern: "〜や〜", meaning: "and, or (examples from a longer list)", category: "particles",
    structure: ["Noun₁ + や + Noun₂ (+ など)"],
    explanation: "や joins nouns like と, but it means the list is not complete: “A, B and things like that”.",
    notes: "Often used with など (etc.): 本やノートなど.",
    examples: [
      { ja: "かばんの中に本やノートがあります。", kana: "かばんの なかに ほんや ノートが あります。", romaji: "Kaban no naka ni hon ya nooto ga arimasu.", en: "There are books, notebooks and other things in my bag." },
      { ja: "休みの日は、そうじやせんたくをします。", kana: "やすみの ひは、そうじや せんたくを します。", romaji: "Yasumi no hi wa, souji ya sentaku o shimasu.", en: "On my days off, I do things like cleaning and laundry." },
    ],
  },
  {
    id: "kara-made", pattern: "〜から〜まで", meaning: "from ~ to / until ~", category: "particles",
    structure: ["Time / Place + から", "Time / Place + まで"],
    explanation: "から means “from” (a starting point) and まで means “until” or “as far as” (an end point). They work for both time and places.",
    notes: "Each one can also be used on its own: 九時から (from nine), 駅まで (as far as the station).",
    examples: [
      { ja: "銀行は九時から三時までです。", kana: "ぎんこうは くじから さんじまでです。", romaji: "Ginkou wa kuji kara sanji made desu.", en: "The bank is open from nine to three." },
      { ja: "家から駅まで歩きます。", kana: "いえから えきまで あるきます。", romaji: "Ie kara eki made arukimasu.", en: "I walk from my house to the station." },
    ],
  },
  {
    id: "dake", pattern: "〜だけ", meaning: "only, just", category: "particles",
    structure: ["Noun / Number + だけ"],
    explanation: "だけ means “only” or “just”. Put it right after the word it limits.",
    notes: "だけ usually replaces を or が: 水だけ飲みました.",
    examples: [
      { ja: "水だけ飲みました。", kana: "みずだけ のみました。", romaji: "Mizu dake nomimashita.", en: "I only drank water." },
      { ja: "日本語は少しだけわかります。", kana: "にほんごは すこしだけ わかります。", romaji: "Nihongo wa sukoshi dake wakarimasu.", en: "I understand just a little Japanese." },
    ],
  },

  // ---------- Question Words ----------
  {
    id: "nani", pattern: "何 (なに・なん)", meaning: "what", category: "questions",
    structure: ["何 + を / が + Verb + か", "何 + です / Counter"],
    explanation: "何 means “what”. It is read なに before を and が, and なん before です, の and counters like 時 (o'clock) or 人 (people).",
    notes: "何時 (なんじ) = what time, 何人 (なんにん) = how many people.",
    examples: [
      { ja: "何を食べますか。", kana: "なにを たべますか。", romaji: "Nani o tabemasu ka.", en: "What will you eat?" },
      { ja: "今何時ですか。", kana: "いま なんじですか。", romaji: "Ima nanji desu ka.", en: "What time is it now?" },
    ],
  },
  {
    id: "dare", pattern: "だれ", meaning: "who", category: "questions",
    structure: ["〜は + だれですか", "だれ + の + Noun (whose)"],
    explanation: "だれ means “who”. だれの means “whose”.",
    notes: "The polite version is どなた: あの方はどなたですか。",
    examples: [
      { ja: "あの人はだれですか。", kana: "あの ひとは だれですか。", romaji: "Ano hito wa dare desu ka.", en: "Who is that person?" },
      { ja: "これはだれのかさですか。", kana: "これは だれの かさですか。", romaji: "Kore wa dare no kasa desu ka.", en: "Whose umbrella is this?" },
    ],
  },
  {
    id: "itsu", pattern: "いつ", meaning: "when", category: "questions",
    structure: ["〜は + いつですか", "いつ + Verb + か"],
    explanation: "いつ asks “when?” about a day, date or time.",
    notes: "Do not put に after いつ (✗ いつに). To ask the exact time, use 何時に.",
    examples: [
      { ja: "たんじょう日はいつですか。", kana: "たんじょうびは いつですか。", romaji: "Tanjoubi wa itsu desu ka.", en: "When is your birthday?" },
      { ja: "いつ日本へ来ましたか。", kana: "いつ にほんへ きましたか。", romaji: "Itsu Nihon e kimashita ka.", en: "When did you come to Japan?" },
    ],
  },
  {
    id: "donna", pattern: "どんな + Noun", meaning: "what kind of ~", category: "questions",
    structure: ["どんな + Noun"],
    explanation: "どんな asks what something is like or what type it is: “what kind of music?”, “what kind of person?”.",
    notes: "The answer is usually an adjective + noun: やさしい人です。",
    examples: [
      { ja: "どんなおんがくが好きですか。", kana: "どんな おんがくが すきですか。", romaji: "Donna ongaku ga suki desu ka.", en: "What kind of music do you like?" },
      { ja: "山田さんはどんな人ですか。", kana: "やまださんは どんな ひとですか。", romaji: "Yamada-san wa donna hito desu ka.", en: "What kind of person is Ms. Yamada?" },
    ],
  },
  {
    id: "dou", pattern: "〜はどうですか", meaning: "how is ~?, how about ~?", category: "questions",
    structure: ["Noun + は + どうですか"],
    explanation: "どう means “how”. 〜はどうですか asks for someone's opinion (“How is ~?”) or makes a suggestion (“How about ~?”).",
    notes: "The more polite version is いかがですか, often used when offering food or drinks.",
    examples: [
      { ja: "日本語のべんきょうはどうですか。", kana: "にほんごの べんきょうは どうですか。", romaji: "Nihongo no benkyou wa dou desu ka.", en: "How are your Japanese studies going?" },
      { ja: "あしたはどうですか。", kana: "あしたは どうですか。", romaji: "Ashita wa dou desu ka.", en: "How about tomorrow?" },
    ],
  },
  {
    id: "doushite", pattern: "どうして", meaning: "why", category: "questions",
    structure: ["どうして + Sentence + か"],
    explanation: "どうして asks for a reason: “why?”. The answer often ends with 〜からです (because ~).",
    notes: "どうして is often used with 〜んですか to sound softer: どうして休んだんですか。 なぜ also means why but is a bit more formal.",
    examples: [
      { ja: "どうしてきのう休みましたか。", kana: "どうして きのう やすみましたか。", romaji: "Doushite kinou yasumimashita ka.", en: "Why were you absent yesterday?" },
      { ja: "どうして日本へ来ましたか。", kana: "どうして にほんへ きましたか。", romaji: "Doushite Nihon e kimashita ka.", en: "Why did you come to Japan?" },
    ],
  },
  {
    id: "douyatte", pattern: "どうやって", meaning: "how, in what way", category: "questions",
    structure: ["どうやって + Verb + か"],
    explanation: "どうやって asks about the method or way of doing something: how to get somewhere, how to use something.",
    notes: "For “how is it?” (opinion), use どう instead.",
    examples: [
      { ja: "駅までどうやって行きますか。", kana: "えきまで どうやって いきますか。", romaji: "Eki made douyatte ikimasu ka.", en: "How do I get to the station?" },
      { ja: "このカードはどうやってつかいますか。", kana: "この カードは どうやって つかいますか。", romaji: "Kono kaado wa douyatte tsukaimasu ka.", en: "How do you use this card?" },
    ],
  },
  {
    id: "ikura-ikutsu", pattern: "いくら・いくつ", meaning: "how much (price) / how many", category: "questions",
    structure: ["〜は + いくらですか", "Noun + を + いくつ + Verb"],
    explanation: "いくら asks about price: “how much?”. いくつ asks “how many?” for small objects, and can also ask someone's age.",
    notes: "For people, use 何人 (how many people). おいくつですか is a polite way to ask age.",
    examples: [
      { ja: "このシャツはいくらですか。", kana: "この シャツは いくらですか。", romaji: "Kono shatsu wa ikura desu ka.", en: "How much is this shirt?" },
      { ja: "りんごをいくつ買いますか。", kana: "りんごを いくつ かいますか。", romaji: "Ringo o ikutsu kaimasu ka.", en: "How many apples are you going to buy?" },
    ],
  },
  {
    id: "nanika", pattern: "何か・だれか・どこか", meaning: "something, someone, somewhere", category: "questions",
    structure: ["Question word + か"],
    explanation: "Adding か to a question word makes it “some-”: 何か (something), だれか (someone), どこか (somewhere).",
    notes: "を and が after 何か / だれか are usually dropped: 何か飲みますか。",
    examples: [
      { ja: "何か飲みますか。", kana: "なにか のみますか。", romaji: "Nanika nomimasu ka.", en: "Would you like something to drink?" },
      { ja: "だれか来ましたよ。", kana: "だれか きましたよ。", romaji: "Dareka kimashita yo.", en: "Someone is here." },
    ],
  },
  {
    id: "nanimo", pattern: "何も〜ません", meaning: "nothing, nobody, nowhere", category: "questions",
    structure: ["何も / だれも + Verb negative", "どこへも / どこにも + Verb negative"],
    explanation: "A question word + も with a negative verb means “not any”: 何も〜ません (nothing), だれも〜ません (nobody).",
    notes: "The verb must be negative: ✗ 何も食べます. With other particles: どこへも行きません (I'm not going anywhere).",
    examples: [
      { ja: "今朝は何も食べませんでした。", kana: "けさは なにも たべませんでした。", romaji: "Kesa wa nanimo tabemasen deshita.", en: "I didn't eat anything this morning." },
      { ja: "きょうしつにはだれもいません。", kana: "きょうしつには だれも いません。", romaji: "Kyoushitsu ni wa daremo imasen.", en: "There's nobody in the classroom." },
    ],
  },

  // ---------- Verbs ----------
  {
    id: "masu", pattern: "〜ます", meaning: "do, will do (polite present / future)", category: "verbs",
    structure: ["Verb ます-stem + ます", "食べる → 食べます, 行く → 行きます, する → します, 来る → 来ます"],
    explanation: "The polite form of a verb. It is used for habits (“I do”) and for the future (“I will do”) — Japanese has no separate future tense.",
    notes: "Words like 毎日 (every day) or あした (tomorrow) make it clear whether you mean a habit or the future.",
    examples: [
      { ja: "毎日日本語をべんきょうします。", kana: "まいにち にほんごを べんきょうします。", romaji: "Mainichi nihongo o benkyou shimasu.", en: "I study Japanese every day." },
      { ja: "あした友だちが来ます。", kana: "あした ともだちが きます。", romaji: "Ashita tomodachi ga kimasu.", en: "My friend is coming tomorrow." },
    ],
  },
  {
    id: "masen", pattern: "〜ません", meaning: "do not, will not", category: "verbs",
    structure: ["Verb ます-stem + ません"],
    explanation: "Change ます to ません to make the polite negative: “don't do” or “won't do”.",
    notes: "Casual negative is the ない-form: 飲まない, 行かない.",
    examples: [
      { ja: "私はおさけを飲みません。", kana: "わたしは おさけを のみません。", romaji: "Watashi wa osake o nomimasen.", en: "I don't drink alcohol." },
      { ja: "あしたは学校へ行きません。", kana: "あしたは がっこうへ いきません。", romaji: "Ashita wa gakkou e ikimasen.", en: "I'm not going to school tomorrow." },
    ],
  },
  {
    id: "mashita", pattern: "〜ました", meaning: "did (polite past)", category: "verbs",
    structure: ["Verb ます-stem + ました"],
    explanation: "Change ます to ました to talk about the past: “I did” or “I went”.",
    notes: "Casual past is the た-form: 食べた, 行った.",
    examples: [
      { ja: "きのうスーパーで魚を買いました。", kana: "きのう スーパーで さかなを かいました。", romaji: "Kinou suupaa de sakana o kaimashita.", en: "I bought fish at the supermarket yesterday." },
      { ja: "きのうの夜、何をしましたか。", kana: "きのうの よる、なにを しましたか。", romaji: "Kinou no yoru, nani o shimashita ka.", en: "What did you do last night?" },
    ],
  },
  {
    id: "masen-deshita", pattern: "〜ませんでした", meaning: "did not (polite past negative)", category: "verbs",
    structure: ["Verb ます-stem + ませんでした"],
    explanation: "The polite past negative: “I didn't do”. Just add でした to ません.",
    notes: "As a question, 〜ませんでしたか can mean “Didn't you…?”.",
    examples: [
      { ja: "きのうはテレビを見ませんでした。", kana: "きのうは テレビを みませんでした。", romaji: "Kinou wa terebi o mimasen deshita.", en: "I didn't watch TV yesterday." },
      { ja: "田中さんに会いませんでしたか。", kana: "たなかさんに あいませんでしたか。", romaji: "Tanaka-san ni aimasen deshita ka.", en: "Didn't you see Mr. Tanaka?" },
    ],
  },
  {
    id: "te-form-and", pattern: "〜て、〜", meaning: "and (then), do A and do B", category: "verbs",
    structure: ["Verb て-form + 、 + next action", "う・つ・る → って, む・ぶ・ぬ → んで, く → いて, ぐ → いで, す → して, る-verbs → て"],
    explanation: "The て-form links actions in the order they happen: “do A, and then do B”. Only the last verb shows the tense.",
    notes: "Irregular: 行く → 行って, する → して, 来る → 来て. The て-form is used in many other patterns, such as 〜てください and 〜ています.",
    examples: [
      { ja: "朝おきて、かおをあらいます。", kana: "あさ おきて、かおを あらいます。", romaji: "Asa okite, kao o araimasu.", en: "I get up in the morning and wash my face." },
      { ja: "デパートへ行って、くつを買いました。", kana: "デパートへ いって、くつを かいました。", romaji: "Depaato e itte, kutsu o kaimashita.", en: "I went to the department store and bought shoes." },
    ],
  },
  {
    id: "te-iru", pattern: "〜ています", meaning: "is doing; (a continuing state or habit)", category: "verbs",
    structure: ["Verb て-form + います"],
    explanation: "〜ています describes an action going on right now (“is eating”). It is also used for ongoing situations like where you work or live.",
    notes: "知っています (I know) and 住んでいます (I live) always use this form. Negative: 〜ていません. Casual: 〜てる.",
    examples: [
      { ja: "今、何をしていますか。", kana: "いま、なにを して いますか。", romaji: "Ima, nani o shite imasu ka.", en: "What are you doing now?" },
      { ja: "山田さんは銀行ではたらいています。", kana: "やまださんは ぎんこうで はたらいて います。", romaji: "Yamada-san wa ginkou de hataraite imasu.", en: "Ms. Yamada works at a bank." },
    ],
  },

  // ---------- Adjectives & Comparison ----------
  {
    id: "i-adj-present", pattern: "い-adjective + です / 〜くないです", meaning: "is ~ / is not ~ (い-adjectives)", category: "adjectives",
    structure: ["い-adj + です", "い-adj (drop い) + くないです"],
    explanation: "い-adjectives end in い, like 高い (expensive) or 大きい (big). Add です to be polite. For the negative, change the last い to くないです.",
    notes: "いい (good) is special: よくないです. くありません is another polite negative: 高くありません.",
    examples: [
      { ja: "このりんごはあまいです。", kana: "この りんごは あまいです。", romaji: "Kono ringo wa amai desu.", en: "This apple is sweet." },
      { ja: "私のへやは広くないです。", kana: "わたしの へやは ひろくないです。", romaji: "Watashi no heya wa hirokunai desu.", en: "My room isn't big." },
    ],
  },
  {
    id: "i-adj-past", pattern: "〜かったです / 〜くなかったです", meaning: "was ~ / was not ~ (い-adjectives)", category: "adjectives",
    structure: ["い-adj (drop い) + かったです", "い-adj (drop い) + くなかったです"],
    explanation: "For the past, change the final い to かったです (was ~). For the past negative, use くなかったです (wasn't ~).",
    notes: "A common mistake is ✗ あついでした. The past is inside the adjective: あつかったです. いい → よかったです.",
    examples: [
      { ja: "きのうはとてもあつかったです。", kana: "きのうは とても あつかったです。", romaji: "Kinou wa totemo atsukatta desu.", en: "It was very hot yesterday." },
      { ja: "えいがはおもしろくなかったです。", kana: "えいがは おもしろくなかったです。", romaji: "Eiga wa omoshirokunakatta desu.", en: "The movie wasn't interesting." },
    ],
  },
  {
    id: "na-adj-present", pattern: "な-adjective + です / じゃありません", meaning: "is ~ / is not ~ (な-adjectives)", category: "adjectives",
    structure: ["な-adj + です", "な-adj + じゃありません"],
    explanation: "な-adjectives, like しずか (quiet) or きれい (pretty, clean), work like nouns: add です, or じゃありません for the negative.",
    notes: "きれい and きらい end in い but are な-adjectives: ✗ きれくない → ○ きれいじゃありません.",
    examples: [
      { ja: "このまちはしずかです。", kana: "この まちは しずかです。", romaji: "Kono machi wa shizuka desu.", en: "This town is quiet." },
      { ja: "このへやはきれいじゃありません。", kana: "この へやは きれいじゃ ありません。", romaji: "Kono heya wa kirei ja arimasen.", en: "This room isn't clean." },
    ],
  },
  {
    id: "na-adj-past", pattern: "な-adjective + でした / じゃありませんでした", meaning: "was ~ / was not ~ (な-adjectives)", category: "adjectives",
    structure: ["な-adj + でした", "な-adj + じゃありませんでした"],
    explanation: "The past of な-adjectives is the same as for nouns: でした (was) and じゃありませんでした (wasn't).",
    notes: "Casual: にぎやかだった / にぎやかじゃなかった.",
    examples: [
      { ja: "パーティーはにぎやかでした。", kana: "パーティーは にぎやかでした。", romaji: "Paatii wa nigiyaka deshita.", en: "The party was lively." },
      { ja: "テストはかんたんじゃありませんでした。", kana: "テストは かんたんじゃ ありませんでした。", romaji: "Tesuto wa kantan ja arimasen deshita.", en: "The test wasn't easy." },
    ],
  },
  {
    id: "adj-noun", pattern: "Adjective + Noun", meaning: "describing a noun", category: "adjectives",
    structure: ["い-adj + Noun (赤いかさ)", "な-adj + な + Noun (しずかな店)"],
    explanation: "Put an adjective before a noun to describe it. い-adjectives go straight before the noun; な-adjectives need な in between.",
    notes: "This な is where the name “な-adjective” comes from. ✗ しずか店 → ○ しずかな店.",
    examples: [
      { ja: "赤いかさを買いました。", kana: "あかい かさを かいました。", romaji: "Akai kasa o kaimashita.", en: "I bought a red umbrella." },
      { ja: "ここはしずかな店ですね。", kana: "ここは しずかな みせですね。", romaji: "Koko wa shizuka na mise desu ne.", en: "This is a quiet shop, isn't it?" },
    ],
  },
  {
    id: "kute-de", pattern: "〜くて / 〜で", meaning: "~ and ~ (joining adjectives)", category: "adjectives",
    structure: ["い-adj (drop い) + くて", "な-adj / Noun + で"],
    explanation: "Use the て-form of adjectives to join two descriptions: “cheap and tasty”, “pretty and kind”.",
    notes: "いい → よくて. Don't use と to join adjectives: ✗ 安いとおいしい.",
    examples: [
      { ja: "この店は安くておいしいです。", kana: "この みせは やすくて おいしいです。", romaji: "Kono mise wa yasukute oishii desu.", en: "This shop is cheap and the food is good." },
      { ja: "山田さんはきれいでやさしい人です。", kana: "やまださんは きれいで やさしい ひとです。", romaji: "Yamada-san wa kirei de yasashii hito desu.", en: "Ms. Yamada is a pretty and kind person." },
    ],
  },
  {
    id: "adj-adverb", pattern: "〜く / 〜に + Verb", meaning: "~ly (adjective as adverb)", category: "adjectives",
    structure: ["い-adj (drop い) + く + Verb", "な-adj + に + Verb"],
    explanation: "Change an adjective into an adverb to describe how you do something: はやい → はやく (early, fast), しずか → しずかに (quietly).",
    notes: "いい → よく (well, often): よく行きます (I often go).",
    examples: [
      { ja: "毎朝はやくおきます。", kana: "まいあさ はやく おきます。", romaji: "Maiasa hayaku okimasu.", en: "I get up early every morning." },
      { ja: "田中さんはしずかに本を読んでいます。", kana: "たなかさんは しずかに ほんを よんで います。", romaji: "Tanaka-san wa shizuka ni hon o yonde imasu.", en: "Mr. Tanaka is quietly reading a book." },
    ],
  },
  {
    id: "naru", pattern: "〜くなります / 〜になります", meaning: "to become ~", category: "adjectives",
    structure: ["い-adj (drop い) + くなります", "な-adj / Noun + になります"],
    explanation: "なります means “become”. Use it to talk about changes: getting colder, turning ten, becoming a teacher.",
    notes: "いい → よくなります (get better).",
    examples: [
      { ja: "さむくなりましたね。", kana: "さむく なりましたね。", romaji: "Samuku narimashita ne.", en: "It's gotten cold, hasn't it?" },
      { ja: "むすこは十さいになりました。", kana: "むすこは じゅっさいに なりました。", romaji: "Musuko wa jussai ni narimashita.", en: "My son turned ten." },
    ],
  },
  {
    id: "suki-kirai", pattern: "〜が好きです / 〜がきらいです", meaning: "to like ~ / to dislike ~", category: "adjectives",
    structure: ["Noun + が + 好きです", "Noun + が + きらいです"],
    explanation: "好き (like) and きらい (dislike) are な-adjectives, not verbs. The thing you like is marked with が.",
    notes: "✗ 犬を好きです → ○ 犬が好きです. 大好き means “love, like very much”. きらい sounds strong; あまり好きじゃありません is softer.",
    examples: [
      { ja: "私は犬が好きです。", kana: "わたしは いぬが すきです。", romaji: "Watashi wa inu ga suki desu.", en: "I like dogs." },
      { ja: "やさいがきらいですか。", kana: "やさいが きらいですか。", romaji: "Yasai ga kirai desu ka.", en: "Do you dislike vegetables?" },
    ],
  },
  {
    id: "jouzu-heta", pattern: "〜が上手です / 〜が下手です", meaning: "to be good at ~ / bad at ~", category: "adjectives",
    structure: ["Noun + が + 上手です", "Noun + が + 下手です"],
    explanation: "上手 (good at) and 下手 (bad at) are な-adjectives. The skill is marked with が.",
    notes: "It sounds like bragging to call yourself 上手. For your own skills, use とくいです (it's my strong point).",
    examples: [
      { ja: "田中さんはうたが上手です。", kana: "たなかさんは うたが じょうずです。", romaji: "Tanaka-san wa uta ga jouzu desu.", en: "Mr. Tanaka is good at singing." },
      { ja: "私はりょうりが下手です。", kana: "わたしは りょうりが へたです。", romaji: "Watashi wa ryouri ga heta desu.", en: "I'm bad at cooking." },
    ],
  },
  {
    id: "no-ga-suki", pattern: "〜のが好きです / 〜のが上手です", meaning: "to like doing ~ / to be good at doing ~", category: "adjectives",
    structure: ["Verb dictionary form + のが + 好き / 上手 / 下手 です"],
    explanation: "To like or be good at an action, turn the verb into a noun with の: 読むの (reading), かくの (drawing).",
    notes: "こと can also be used: 読むことが好きです. の is more common in speech.",
    examples: [
      { ja: "私は本を読むのが好きです。", kana: "わたしは ほんを よむのが すきです。", romaji: "Watashi wa hon o yomu no ga suki desu.", en: "I like reading books." },
      { ja: "父はえをかくのが上手です。", kana: "ちちは えを かくのが じょうずです。", romaji: "Chichi wa e o kaku no ga jouzu desu.", en: "My father is good at drawing." },
    ],
  },
  {
    id: "totemo-amari", pattern: "とても / あまり〜ない", meaning: "very / not very, not much", category: "adjectives",
    structure: ["とても + Adjective", "あまり + Adjective / Verb negative"],
    explanation: "とても means “very” and is used with positive sentences. あまり with a negative means “not very” or “not much”.",
    notes: "あまり must have a negative: ✗ あまり高いです → ○ あまり高くないです.",
    examples: [
      { ja: "このケーキはとてもおいしいです。", kana: "この ケーキは とても おいしいです。", romaji: "Kono keeki wa totemo oishii desu.", en: "This cake is very tasty." },
      { ja: "私はあまりテレビを見ません。", kana: "わたしは あまり テレビを みません。", romaji: "Watashi wa amari terebi o mimasen.", en: "I don't watch TV much." },
    ],
  },
  {
    id: "yori", pattern: "AはBより〜", meaning: "A is more ~ than B", category: "adjectives",
    structure: ["A + は + B + より + Adjective"],
    explanation: "より means “than”. The thing after は is the one that is “more”. Japanese adjectives don't change for comparison — より does the work.",
    notes: "There is no word for “-er”: 大きい means both “big” and “bigger”.",
    examples: [
      { ja: "今日はきのうよりさむいです。", kana: "きょうは きのうより さむいです。", romaji: "Kyou wa kinou yori samui desu.", en: "Today is colder than yesterday." },
      { ja: "電車はバスよりはやいです。", kana: "でんしゃは バスより はやいです。", romaji: "Densha wa basu yori hayai desu.", en: "The train is faster than the bus." },
    ],
  },
  {
    id: "hou-ga", pattern: "BよりAのほうが〜", meaning: "A is more ~ (than B)", category: "adjectives",
    structure: ["B + より + A + の + ほうが + Adjective", "A + の + ほうが + Adjective"],
    explanation: "のほうが points at the winning side of a comparison: “A is the one that is more ~”. It is also the usual way to answer “which one?”.",
    notes: "You can leave out the より part when it is clear.",
    examples: [
      { ja: "にくより魚のほうが好きです。", kana: "にくより さかなの ほうが すきです。", romaji: "Niku yori sakana no hou ga suki desu.", en: "I like fish more than meat." },
      { ja: "おちゃのほうがいいです。", kana: "おちゃの ほうが いいです。", romaji: "Ocha no hou ga ii desu.", en: "I'd prefer tea." },
    ],
  },
  {
    id: "dochira", pattern: "AとBとどちらが〜", meaning: "which is more ~, A or B?", category: "adjectives",
    structure: ["A + と + B + と + どちらが + Adjective + ですか"],
    explanation: "Use this to ask someone to compare two things. どちら means “which (of two)”.",
    notes: "Answer with 〜のほうが〜です. If both are the same: どちらも〜です. Casual: どっち.",
    examples: [
      { ja: "犬とねこと、どちらが好きですか。", kana: "いぬと ねこと、どちらが すきですか。", romaji: "Inu to neko to, dochira ga suki desu ka.", en: "Which do you like better, dogs or cats?" },
      { ja: "電車とバスとどちらが安いですか。", kana: "でんしゃと バスと どちらが やすいですか。", romaji: "Densha to basu to dochira ga yasui desu ka.", en: "Which is cheaper, the train or the bus?" },
    ],
  },
  {
    id: "ichiban", pattern: "〜の中で〜がいちばん", meaning: "the most ~ of all", category: "adjectives",
    structure: ["Group + の中で + A + が + いちばん + Adjective"],
    explanation: "いちばん means “number one, the most”. 〜の中で sets the group: “out of all ~, A is the most …”.",
    notes: "Ask with a question word: 何がいちばん, だれがいちばん, どこがいちばん.",
    examples: [
      { ja: "くだものの中で何がいちばん好きですか。", kana: "くだものの なかで なにが いちばん すきですか。", romaji: "Kudamono no naka de nani ga ichiban suki desu ka.", en: "What fruit do you like best?" },
      { ja: "かぞくの中で父がいちばんせが高いです。", kana: "かぞくの なかで ちちが いちばん せが たかいです。", romaji: "Kazoku no naka de chichi ga ichiban se ga takai desu.", en: "My father is the tallest in my family." },
    ],
  },

  // ---------- Existence, Location & Counting ----------
  {
    id: "arimasu", pattern: "〜があります", meaning: "there is ~, to have ~ (things)", category: "existence",
    structure: ["Thing + が + あります", "Negative: + ありません"],
    explanation: "あります says that a thing (not alive) exists or that you have it: a shop, a book, time, a test.",
    notes: "Plants count as things (あります). Events also use あります: あしたテストがあります.",
    examples: [
      { ja: "近くにコンビニがあります。", kana: "ちかくに コンビニが あります。", romaji: "Chikaku ni konbini ga arimasu.", en: "There's a convenience store nearby." },
      { ja: "今日は時間がありません。", kana: "きょうは じかんが ありません。", romaji: "Kyou wa jikan ga arimasen.", en: "I don't have time today." },
    ],
  },
  {
    id: "imasu", pattern: "〜がいます", meaning: "there is ~, to have ~ (people, animals)", category: "existence",
    structure: ["Person / Animal + が + います", "Negative: + いません"],
    explanation: "います is for living things that move: people and animals. It also means “have” for family and pets.",
    notes: "Things → あります, people and animals → います.",
    examples: [
      { ja: "こうえんに子どもがたくさんいます。", kana: "こうえんに こどもが たくさん います。", romaji: "Kouen ni kodomo ga takusan imasu.", en: "There are lots of children in the park." },
      { ja: "田中さんはきょうだいがいますか。", kana: "たなかさんは きょうだいが いますか。", romaji: "Tanaka-san wa kyoudai ga imasu ka.", en: "Do you have any brothers or sisters, Mr. Tanaka?" },
    ],
  },
  {
    id: "ni-ga-arimasu", pattern: "〜に〜があります / います", meaning: "in (place) there is ~", category: "existence",
    structure: ["Place + に + Thing + が + あります", "Place + に + Person / Animal + が + います"],
    explanation: "Start with the place + に, then say what is there with が. Use this to describe what is in a place.",
    notes: "The place takes に, not で: ✗ つくえの上で本があります.",
    examples: [
      { ja: "つくえの上に本があります。", kana: "つくえの うえに ほんが あります。", romaji: "Tsukue no ue ni hon ga arimasu.", en: "There's a book on the desk." },
      { ja: "木の下にねこがいます。", kana: "きの したに ねこが います。", romaji: "Ki no shita ni neko ga imasu.", en: "There's a cat under the tree." },
    ],
  },
  {
    id: "wa-ni-arimasu", pattern: "〜は〜にあります / います", meaning: "~ is in / at (place)", category: "existence",
    structure: ["Thing + は + Place + に + あります", "Person + は + Place + に + います"],
    explanation: "Start with the thing or person + は, then say where it is. Use this to tell where something you already know about is.",
    notes: "Short version: トイレは二かいです (です can replace にあります).",
    examples: [
      { ja: "トイレは二かいにあります。", kana: "トイレは にかいに あります。", romaji: "Toire wa nikai ni arimasu.", en: "The toilet is on the second floor." },
      { ja: "山田さんはどこにいますか。", kana: "やまださんは どこに いますか。", romaji: "Yamada-san wa doko ni imasu ka.", en: "Where is Ms. Yamada?" },
    ],
  },
  {
    id: "position", pattern: "〜の上・下・中・前・後ろ・となり", meaning: "on, under, in, in front of, behind, next to", category: "existence",
    structure: ["Noun + の + 上 / 下 / 中 / 前 / 後ろ / となり + に"],
    explanation: "To say where something is compared to another thing, use the noun + の + a position word: つくえの上 (on the desk), 駅の前 (in front of the station).",
    notes: "Other position words: 右 (right), 左 (left), 外 (outside), 近く (near).",
    examples: [
      { ja: "駅の前に銀行があります。", kana: "えきの まえに ぎんこうが あります。", romaji: "Eki no mae ni ginkou ga arimasu.", en: "There's a bank in front of the station." },
      { ja: "かばんはいすの後ろにあります。", kana: "かばんは いすの うしろに あります。", romaji: "Kaban wa isu no ushiro ni arimasu.", en: "The bag is behind the chair." },
    ],
  },
  {
    id: "counters", pattern: "Noun + を/が + Number + Counter", meaning: "counting things", category: "existence",
    structure: ["Noun + を / が + Number + Counter + Verb"],
    explanation: "When counting, the number (with its counter) usually goes after the particle, right before the verb: りんごを三つ買います.",
    notes: "一つ, 二つ, 三つ … for general things; 一人 (ひとり), 二人 (ふたり), 三人 (さんにん) for people.",
    examples: [
      { ja: "りんごを三つ買いました。", kana: "りんごを みっつ かいました。", romaji: "Ringo o mittsu kaimashita.", en: "I bought three apples." },
      { ja: "きょうしつに学生が五人います。", kana: "きょうしつに がくせいが ごにん います。", romaji: "Kyoushitsu ni gakusei ga gonin imasu.", en: "There are five students in the classroom." },
    ],
  },

  // ---------- Wants & Invitations ----------
  {
    id: "hoshii", pattern: "〜がほしいです", meaning: "to want (something)", category: "wants",
    structure: ["Noun + が + ほしいです"],
    explanation: "ほしい means “want” for things. It is an い-adjective, so the thing you want takes が.",
    notes: "Use it only for your own wishes, or to ask a friend. Don't ask a teacher or boss 〜がほしいですか — it sounds too direct.",
    examples: [
      { ja: "新しいかばんがほしいです。", kana: "あたらしい かばんが ほしいです。", romaji: "Atarashii kaban ga hoshii desu.", en: "I want a new bag." },
      { ja: "たんじょう日に何がほしいですか。", kana: "たんじょうびに なにが ほしいですか。", romaji: "Tanjoubi ni nani ga hoshii desu ka.", en: "What do you want for your birthday?" },
    ],
  },
  {
    id: "tai", pattern: "〜たいです", meaning: "to want to (do)", category: "wants",
    structure: ["Verb ます-stem + たいです", "Negative: + たくないです"],
    explanation: "Add たい to the verb stem to say what you want to do. It changes like an い-adjective: 行きたい, 行きたくない, 行きたかった.",
    notes: "The object can take を or が: 水を飲みたい / 水が飲みたい. Like ほしい, use it for yourself, not for other people.",
    examples: [
      { ja: "日本へ行きたいです。", kana: "にほんへ いきたいです。", romaji: "Nihon e ikitai desu.", en: "I want to go to Japan." },
      { ja: "今は何も食べたくないです。", kana: "いまは なにも たべたくないです。", romaji: "Ima wa nanimo tabetakunai desu.", en: "I don't want to eat anything right now." },
    ],
  },
  {
    id: "ni-iku", pattern: "〜に行きます / 来ます", meaning: "go / come (in order) to do", category: "wants",
    structure: ["Verb ます-stem + に + 行きます / 来ます", "Activity noun + に + 行きます"],
    explanation: "Shows the purpose of going or coming somewhere: “go to buy”, “come to study”.",
    notes: "With activity nouns: 買いものに行きます (go shopping), さんぽに行きます (go for a walk).",
    examples: [
      { ja: "デパートへくつを買いに行きます。", kana: "デパートへ くつを かいに いきます。", romaji: "Depaato e kutsu o kai ni ikimasu.", en: "I'm going to the department store to buy shoes." },
      { ja: "日本へ日本語をべんきょうしに来ました。", kana: "にほんへ にほんごを べんきょうしに きました。", romaji: "Nihon e nihongo o benkyou shi ni kimashita.", en: "I came to Japan to study Japanese." },
    ],
  },
  {
    id: "mashou", pattern: "〜ましょう", meaning: "let's ~", category: "wants",
    structure: ["Verb ます-stem + ましょう"],
    explanation: "Change ます to ましょう to say “let's do ~”. It is also used to say yes to an invitation: 行きましょう (Yes, let's go).",
    notes: "Casual: the volitional form, 行こう, 食べよう.",
    examples: [
      { ja: "いっしょに昼ごはんを食べましょう。", kana: "いっしょに ひるごはんを たべましょう。", romaji: "Issho ni hirugohan o tabemashou.", en: "Let's have lunch together." },
      { ja: "ええ、行きましょう。", kana: "ええ、いきましょう。", romaji: "Ee, ikimashou.", en: "Sure, let's go." },
    ],
  },
  {
    id: "mashou-ka", pattern: "〜ましょうか", meaning: "shall I ~? / shall we ~?", category: "wants",
    structure: ["Verb ます-stem + ましょうか"],
    explanation: "Use ましょうか to offer help (“Shall I ~?”) or to make plans together (“Shall we ~?”).",
    notes: "Reply to an offer with ありがとうございます、おねがいします or いいえ、けっこうです.",
    examples: [
      { ja: "にもつをもちましょうか。", kana: "にもつを もちましょうか。", romaji: "Nimotsu o mochimashou ka.", en: "Shall I carry your bags?" },
      { ja: "何時に会いましょうか。", kana: "なんじに あいましょうか。", romaji: "Nanji ni aimashou ka.", en: "What time shall we meet?" },
    ],
  },
  {
    id: "masen-ka", pattern: "〜ませんか", meaning: "won't you ~?, would you like to ~?", category: "wants",
    structure: ["Verb ます-stem + ませんか"],
    explanation: "A polite invitation: “Would you like to ~ (with me)?”. Using the negative makes it softer and easier to refuse than ましょう.",
    notes: "To say yes: いいですね、〜ましょう。 To refuse politely: すみません、ちょっと…",
    examples: [
      { ja: "いっしょにえいがを見ませんか。", kana: "いっしょに えいがを みませんか。", romaji: "Issho ni eiga o mimasen ka.", en: "Would you like to see a movie with me?" },
      { ja: "こんどの休みに山へ行きませんか。", kana: "こんどの やすみに やまへ いきませんか。", romaji: "Kondo no yasumi ni yama e ikimasen ka.", en: "Would you like to go to the mountains on our next day off?" },
    ],
  },
  {
    id: "ni-suru", pattern: "〜にします", meaning: "to decide on ~, I'll have ~", category: "wants",
    structure: ["Noun + にします"],
    explanation: "にします means you choose or decide on something. It is very useful when ordering food: コーヒーにします (I'll have coffee).",
    notes: "Past にしました = “I decided on ~”.",
    examples: [
      { ja: "私はコーヒーにします。", kana: "わたしは コーヒーに します。", romaji: "Watashi wa koohii ni shimasu.", en: "I'll have coffee." },
      { ja: "パーティーは何時にしましょうか。", kana: "パーティーは なんじに しましょうか。", romaji: "Paatii wa nanji ni shimashou ka.", en: "What time shall we have the party?" },
    ],
  },

  // ---------- Requests & Rules ----------
  {
    id: "wo-kudasai", pattern: "〜をください", meaning: "please give me ~", category: "requests",
    structure: ["Noun + を + ください", "Noun + を + Number + ください"],
    explanation: "Use をください to ask for things, for example when shopping or ordering at a restaurant.",
    notes: "〜をおねがいします is a little softer and also very common.",
    examples: [
      { ja: "水をください。", kana: "みずを ください。", romaji: "Mizu o kudasai.", en: "Water, please." },
      { ja: "このりんごを五つください。", kana: "この りんごを いつつ ください。", romaji: "Kono ringo o itsutsu kudasai.", en: "Five of these apples, please." },
    ],
  },
  {
    id: "te-kudasai", pattern: "〜てください", meaning: "please do ~", category: "requests",
    structure: ["Verb て-form + ください"],
    explanation: "Use the て-form + ください to politely ask someone to do something.",
    notes: "It can sound like an instruction. For a softer request, use 〜てくださいませんか (N4).",
    examples: [
      { ja: "ちょっとまってください。", kana: "ちょっと まって ください。", romaji: "Chotto matte kudasai.", en: "Please wait a moment." },
      { ja: "ここに名前を書いてください。", kana: "ここに なまえを かいて ください。", romaji: "Koko ni namae o kaite kudasai.", en: "Please write your name here." },
    ],
  },
  {
    id: "naide-kudasai", pattern: "〜ないでください", meaning: "please don't ~", category: "requests",
    structure: ["Verb ない-form + でください"],
    explanation: "Use the ない-form + でください to politely ask someone not to do something.",
    notes: "Making the ない-form: う-verbs change the last sound to あ + ない (とる → とらない, かう → かわない); る-verbs drop る (食べない); する → しない, 来る → こない.",
    examples: [
      { ja: "ここでしゃしんをとらないでください。", kana: "ここで しゃしんを とらないで ください。", romaji: "Koko de shashin o toranaide kudasai.", en: "Please don't take photos here." },
      { ja: "しんぱいしないでください。", kana: "しんぱいしないで ください。", romaji: "Shinpai shinaide kudasai.", en: "Please don't worry." },
    ],
  },
  {
    id: "temo-ii", pattern: "〜てもいいです", meaning: "may ~, it's OK to ~", category: "requests",
    structure: ["Verb て-form + もいいです", "Question: + もいいですか"],
    explanation: "〜てもいいです gives permission (“you may ~”). As a question, 〜てもいいですか asks for permission (“May I ~?”).",
    notes: "Answer: はい、いいですよ (yes) or すみません、ちょっと… (a polite no).",
    examples: [
      { ja: "入ってもいいですか。", kana: "はいっても いいですか。", romaji: "Haitte mo ii desu ka.", en: "May I come in?" },
      { ja: "ここで食べてもいいですよ。", kana: "ここで たべても いいですよ。", romaji: "Koko de tabete mo ii desu yo.", en: "You can eat here." },
    ],
  },
  {
    id: "tewa-ikemasen", pattern: "〜てはいけません", meaning: "must not ~", category: "requests",
    structure: ["Verb て-form + はいけません"],
    explanation: "〜てはいけません says something is not allowed: “you must not ~”. It is used for rules and strong warnings.",
    notes: "It sounds strict, so it is used for rules and by teachers or parents. Casual: 〜ちゃだめ / 〜ちゃいけない.",
    examples: [
      { ja: "ここでたばこをすってはいけません。", kana: "ここで たばこを すっては いけません。", romaji: "Koko de tabako o sutte wa ikemasen.", en: "You must not smoke here." },
      { ja: "このへやに入ってはいけません。", kana: "この へやに はいっては いけません。", romaji: "Kono heya ni haitte wa ikemasen.", en: "You must not go into this room." },
    ],
  },
  {
    id: "nakereba-narimasen", pattern: "〜なければなりません", meaning: "must ~, have to ~", category: "requests",
    structure: ["Verb ない-form (drop い) + ければなりません"],
    explanation: "Says something is necessary: “I have to ~”. Take the ない-form, drop the final い and add ければなりません.",
    notes: "Also common: 〜なくてはいけません. Casual: 〜なきゃ / 〜なくちゃ.",
    examples: [
      { ja: "あしたははやくおきなければなりません。", kana: "あしたは はやく おきなければ なりません。", romaji: "Ashita wa hayaku okinakereba narimasen.", en: "I have to get up early tomorrow." },
      { ja: "毎日くすりを飲まなければなりませんか。", kana: "まいにち くすりを のまなければ なりませんか。", romaji: "Mainichi kusuri o nomanakereba narimasen ka.", en: "Do I have to take the medicine every day?" },
    ],
  },
  {
    id: "nakutemo-ii", pattern: "〜なくてもいいです", meaning: "don't have to ~", category: "requests",
    structure: ["Verb ない-form (drop い) + くてもいいです"],
    explanation: "Says something is not necessary: “you don't have to ~”. It is the opposite of 〜なければなりません.",
    notes: "Don't confuse with 〜ないでください (please don't): 行かなくてもいい = no need to go; 行かないでください = please don't go.",
    examples: [
      { ja: "あしたは会社へ行かなくてもいいです。", kana: "あしたは かいしゃへ いかなくても いいです。", romaji: "Ashita wa kaisha e ikanakute mo ii desu.", en: "I don't have to go to work tomorrow." },
      { ja: "くつをぬがなくてもいいですか。", kana: "くつを ぬがなくても いいですか。", romaji: "Kutsu o nuganakute mo ii desu ka.", en: "Is it OK if I don't take off my shoes?" },
    ],
  },

  // ---------- Time & Sequence ----------
  {
    id: "te-kara", pattern: "〜てから", meaning: "after doing ~, once ~", category: "time",
    structure: ["Verb て-form + から"],
    explanation: "〜てから means “after doing A, (then) B”. It stresses that A comes first.",
    notes: "Compare: plain て-form just lists actions in order; てから puts focus on “only after A”.",
    examples: [
      { ja: "手をあらってから、ごはんを食べます。", kana: "てを あらってから、ごはんを たべます。", romaji: "Te o aratte kara, gohan o tabemasu.", en: "After washing my hands, I eat." },
      { ja: "しゅくだいをしてから、テレビを見ました。", kana: "しゅくだいを してから、テレビを みました。", romaji: "Shukudai o shite kara, terebi o mimashita.", en: "I watched TV after I did my homework." },
    ],
  },
  {
    id: "mae-ni", pattern: "〜前に", meaning: "before ~", category: "time",
    structure: ["Verb dictionary form + 前に", "Noun + の + 前に"],
    explanation: "前に means “before”. The verb before 前に is always in the dictionary form, even when talking about the past.",
    notes: "✗ ねました前に → ○ ねる前に.",
    examples: [
      { ja: "ねる前に、シャワーをあびます。", kana: "ねる まえに、シャワーを あびます。", romaji: "Neru mae ni, shawaa o abimasu.", en: "I take a shower before I go to bed." },
      { ja: "ごはんの前にこのくすりを飲んでください。", kana: "ごはんの まえに この くすりを のんで ください。", romaji: "Gohan no mae ni kono kusuri o nonde kudasai.", en: "Please take this medicine before meals." },
    ],
  },
  {
    id: "ato-de", pattern: "〜た後で", meaning: "after ~", category: "time",
    structure: ["Verb た-form + 後で", "Noun + の + 後で"],
    explanation: "後で means “after”. The verb before 後で is always in the た-form (past), even when talking about the future.",
    notes: "The た-form is made like the て-form, with た instead of て: 食べて → 食べた, 行って → 行った.",
    examples: [
      { ja: "ごはんを食べた後で、さんぽをします。", kana: "ごはんを たべた あとで、さんぽを します。", romaji: "Gohan o tabeta ato de, sanpo o shimasu.", en: "I go for a walk after I eat." },
      { ja: "しごとの後で、友だちに会います。", kana: "しごとの あとで、ともだちに あいます。", romaji: "Shigoto no ato de, tomodachi ni aimasu.", en: "I'm meeting a friend after work." },
    ],
  },
  {
    id: "toki", pattern: "〜とき", meaning: "when ~, at the time of ~", category: "time",
    structure: ["Verb plain form / い-adj + とき", "な-adj + な + とき / Noun + の + とき"],
    explanation: "とき means “when” or “at the time”. The part before とき describes the time: 子どものとき (when I was a child).",
    notes: "Don't use いつ for this — いつ is only for questions.",
    examples: [
      { ja: "子どものとき、この川でよくおよぎました。", kana: "こどもの とき、この かわで よく およぎました。", romaji: "Kodomo no toki, kono kawa de yoku oyogimashita.", en: "When I was a child, I often swam in this river." },
      { ja: "ひまなとき、何をしますか。", kana: "ひまな とき、なにを しますか。", romaji: "Hima na toki, nani o shimasu ka.", en: "What do you do when you're free?" },
    ],
  },
  {
    id: "tari-tari", pattern: "〜たり〜たりします", meaning: "do things like A and B", category: "time",
    structure: ["Verb₁ た-form + り、Verb₂ た-form + り + します"],
    explanation: "Lists a few example actions, not all of them: “I do things like A and B”. The sentence ends with します.",
    notes: "Tense goes on the final します: 〜たり〜たりしました (did things like…).",
    examples: [
      { ja: "休みの日は、本を読んだりおんがくを聞いたりします。", kana: "やすみの ひは、ほんを よんだり おんがくを きいたり します。", romaji: "Yasumi no hi wa, hon o yondari ongaku o kiitari shimasu.", en: "On my days off, I read books, listen to music and so on." },
      { ja: "きのうは友だちと買いものをしたり、えいがを見たりしました。", kana: "きのうは ともだちと かいものを したり、えいがを みたり しました。", romaji: "Kinou wa tomodachi to kaimono o shitari, eiga o mitari shimashita.", en: "Yesterday I went shopping and saw a movie with a friend, among other things." },
    ],
  },
  {
    id: "mou", pattern: "もう〜ました", meaning: "already", category: "time",
    structure: ["もう + Verb ました", "もう + Time / Noun + です"],
    explanation: "もう means “already”. もう〜ましたか asks if something has happened yet.",
    notes: "Answers: はい、もう〜ました (yes, already) / いいえ、まだです (not yet). With a negative, もう means “not anymore”.",
    examples: [
      { ja: "もう昼ごはんを食べましたか。", kana: "もう ひるごはんを たべましたか。", romaji: "Mou hirugohan o tabemashita ka.", en: "Have you had lunch yet?" },
      { ja: "もう十時ですよ。", kana: "もう じゅうじですよ。", romaji: "Mou juuji desu yo.", en: "It's already ten o'clock!" },
    ],
  },
  {
    id: "mada", pattern: "まだ〜ていません / まだ", meaning: "not yet / still", category: "time",
    structure: ["まだ + Verb て-form + いません", "まだ + Verb / Noun (still)"],
    explanation: "まだ〜ていません means “haven't done it yet”. With a positive sentence, まだ means “still”.",
    notes: "For “not yet”, use 〜ていません, not ✗ まだ食べませんでした.",
    examples: [
      { ja: "いいえ、まだ食べていません。", kana: "いいえ、まだ たべて いません。", romaji: "Iie, mada tabete imasen.", en: "No, I haven't eaten yet." },
      { ja: "山田さんはまだ会社にいます。", kana: "やまださんは まだ かいしゃに います。", romaji: "Yamada-san wa mada kaisha ni imasu.", en: "Ms. Yamada is still at the office." },
    ],
  },
  {
    id: "frequency", pattern: "〜に〜かい", meaning: "~ times per (period)", category: "time",
    structure: ["Period + に + Number + かい (回)"],
    explanation: "To say how often, put the period + に, then the number of times: 一週間に二かい (twice a week).",
    notes: "Periods: 一日 (いちにち, a day), 一週間 (いっしゅうかん, a week), 一か月 (いっかげつ, a month), 一年 (いちねん, a year).",
    examples: [
      { ja: "一週間に二かいプールへ行きます。", kana: "いっしゅうかんに にかい プールへ いきます。", romaji: "Isshuukan ni nikai puuru e ikimasu.", en: "I go to the pool twice a week." },
      { ja: "一日に三かいくすりを飲みます。", kana: "いちにちに さんかい くすりを のみます。", romaji: "Ichinichi ni sankai kusuri o nomimasu.", en: "I take medicine three times a day." },
    ],
  },

  // ---------- Connecting & Explaining ----------
  {
    id: "kara-because", pattern: "〜から (reason)", meaning: "because, so", category: "connecting",
    structure: ["Reason + から、Result"],
    explanation: "から after a sentence gives the reason: “A, so B” or “because A, B”. The reason comes first.",
    notes: "Answering どうして: 〜からです (It's because ~). Don't confuse with から meaning “from”.",
    examples: [
      { ja: "雨ですから、家でえいがを見ます。", kana: "あめですから、いえで えいがを みます。", romaji: "Ame desu kara, ie de eiga o mimasu.", en: "It's raining, so I'll watch a movie at home." },
      { ja: "時間がありませんから、タクシーで行きましょう。", kana: "じかんが ありませんから、タクシーで いきましょう。", romaji: "Jikan ga arimasen kara, takushii de ikimashou.", en: "We don't have time, so let's take a taxi." },
    ],
  },
  {
    id: "ga-but", pattern: "〜が、〜", meaning: "but", category: "connecting",
    structure: ["Sentence₁ + が、Sentence₂"],
    explanation: "が after a sentence means “but” and joins two ideas that contrast. It is also used to soften the start of a request or question: すみませんが…",
    notes: "This が comes after です / ます, so it is easy to tell apart from the subject particle が.",
    examples: [
      { ja: "この店は高いですが、おいしいです。", kana: "この みせは たかいですが、おいしいです。", romaji: "Kono mise wa takai desu ga, oishii desu.", en: "This restaurant is expensive, but the food is good." },
      { ja: "すみませんが、駅はどこですか。", kana: "すみませんが、えきは どこですか。", romaji: "Sumimasen ga, eki wa doko desu ka.", en: "Excuse me, but where is the station?" },
    ],
  },
  {
    id: "kedo", pattern: "〜けど", meaning: "but, although", category: "connecting",
    structure: ["Sentence₁ + けど、Sentence₂"],
    explanation: "けど also means “but”. It is a little more casual than が and very common in conversation.",
    notes: "けれども is the more formal version. A sentence can end with けど to hint at something left unsaid.",
    examples: [
      { ja: "日本語はむずかしいですけど、おもしろいです。", kana: "にほんごは むずかしいですけど、おもしろいです。", romaji: "Nihongo wa muzukashii desu kedo, omoshiroi desu.", en: "Japanese is difficult, but it's interesting." },
      { ja: "行きたいですけど、時間がありません。", kana: "いきたいですけど、じかんが ありません。", romaji: "Ikitai desu kedo, jikan ga arimasen.", en: "I'd like to go, but I don't have time." },
    ],
  },
  {
    id: "demo", pattern: "でも", meaning: "but, however (starting a sentence)", category: "connecting",
    structure: ["Sentence₁。でも、Sentence₂。"],
    explanation: "でも goes at the start of a new sentence and means “but” or “however”.",
    notes: "しかし means the same but is used mostly in writing. が and けど join two parts into one sentence; でも starts a new one.",
    examples: [
      { ja: "日本のなつはあついです。でも、たのしいです。", kana: "にほんの なつは あついです。でも、たのしいです。", romaji: "Nihon no natsu wa atsui desu. Demo, tanoshii desu.", en: "Summer in Japan is hot. But it's fun." },
      { ja: "山田さんに電話しました。でも、出ませんでした。", kana: "やまださんに でんわしました。でも、でませんでした。", romaji: "Yamada-san ni denwa shimashita. Demo, demasen deshita.", en: "I called Ms. Yamada. But she didn't answer." },
    ],
  },
  {
    id: "soshite", pattern: "そして・それから", meaning: "and, and then", category: "connecting",
    structure: ["Sentence₁。そして、Sentence₂。", "Sentence₁。それから、Sentence₂。"],
    explanation: "そして starts a sentence to add something: “and (also)”. それから means “and then, after that” and is used for the next event.",
    notes: "Both come at the start of a sentence. To join nouns, use と instead.",
    examples: [
      { ja: "山田さんはやさしいです。そして、おもしろいです。", kana: "やまださんは やさしいです。そして、おもしろいです。", romaji: "Yamada-san wa yasashii desu. Soshite, omoshiroi desu.", en: "Ms. Yamada is kind. And she's funny too." },
      { ja: "スーパーへ行きました。それから、本やへ行きました。", kana: "スーパーへ いきました。それから、ほんやへ いきました。", romaji: "Suupaa e ikimashita. Sorekara, hon'ya e ikimashita.", en: "I went to the supermarket. After that, I went to the bookshop." },
    ],
  },
  {
    id: "n-desu", pattern: "〜んです", meaning: "(explaining or asking for an explanation)", category: "connecting",
    structure: ["Verb / い-adj plain form + んです", "な-adj / Noun + なんです"],
    explanation: "〜んです gives or asks for an explanation or background: “It's that…”. It makes speech sound more natural and personal.",
    notes: "どうしたんですか (What's wrong?) is a very common phrase. In writing, のです is used.",
    examples: [
      { ja: "どうしたんですか。", kana: "どう したんですか。", romaji: "Dou shita n desu ka.", en: "What's wrong?" },
      { ja: "あたまがいたいんです。", kana: "あたまが いたいんです。", romaji: "Atama ga itai n desu.", en: "I have a headache, you see." },
    ],
  },
  {
    id: "deshou", pattern: "〜でしょう", meaning: "probably ~; ~, right?", category: "connecting",
    structure: ["Verb / い-adj plain form + でしょう", "な-adj / Noun + でしょう"],
    explanation: "でしょう means “probably” — you think something is true but are not sure. It is heard a lot in weather forecasts. With a rising tone, it checks that the listener agrees: “…, right?”.",
    notes: "Casual: だろう (probably) / でしょ？ (right?).",
    examples: [
      { ja: "あしたは雨でしょう。", kana: "あしたは あめでしょう。", romaji: "Ashita wa ame deshou.", en: "It will probably rain tomorrow." },
      { ja: "このケーキ、おいしいでしょう？", kana: "この ケーキ、おいしいでしょう？", romaji: "Kono keeki, oishii deshou?", en: "This cake is good, isn't it?" },
    ],
  },
];
