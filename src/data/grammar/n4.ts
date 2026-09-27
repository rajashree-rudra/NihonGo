// JLPT N4 grammar. Explanations and examples: original.
import type { GrammarCategory, GrammarPoint } from "../types.ts";

export const CATEGORIES: GrammarCategory[] = [
  { id: "forms", title: "Verb Forms & Basics", jp: "動詞の形" },
  { id: "te-patterns", title: "て-form & た-form Patterns", jp: "て形・た形" },
  { id: "giving", title: "Giving & Receiving", jp: "あげる・くれる・もらう" },
  { id: "conditionals", title: "Conditionals", jp: "条件" },
  { id: "intentions", title: "Intentions, Wishes & Purpose", jp: "意志・目的" },
  { id: "guessing", title: "Guessing & Hearsay", jp: "推量・伝聞" },
  { id: "connecting", title: "Reasons, Connecting & More", jp: "理由・接続" },
  { id: "changes", title: "Changes, Decisions & Degree", jp: "変化・決定" },
  { id: "passive", title: "Passive & Causative", jp: "受身・使役" },
  { id: "keigo", title: "Polite Language (Keigo)", jp: "敬語" },
];

export const POINTS: GrammarPoint[] = [
  // ---------- Verb Forms & Basics ----------
  {
    id: "plain-form", pattern: "普通形 (plain form)", meaning: "casual speech; the short form of verbs and adjectives", category: "forms",
    structure: ["Verb dictionary / ない / た / なかった form", "い-adj as is (高い / 高かった); な-adj / Noun + だ / だった"],
    explanation: "The plain form is the casual version of です/ます. Use it with friends and family, and also inside longer sentences before words like と思う, から or つもり.",
    notes: "In casual questions, drop か and raise your voice: 行く？ Plain だ is often dropped in casual speech: 元気？",
    examples: [
      { ja: "明日、どこへ行く？", kana: "あした、どこへ いく？", romaji: "Ashita, doko e iku?", en: "Where are you going tomorrow?" },
      { ja: "昨日は忙しかったから、何も食べなかった。", kana: "きのうは いそがしかったから、なにも たべなかった。", romaji: "Kinou wa isogashikatta kara, nani mo tabenakatta.", en: "I was busy yesterday, so I didn't eat anything." },
    ],
  },
  {
    id: "nominalizer-no", pattern: "〜のが / 〜のは", meaning: "turning a verb into a noun (“doing ~”)", category: "forms",
    structure: ["Verb dictionary form + のが + 好きです / 上手です / きらいです", "Verb dictionary form + のは + adjective"],
    explanation: "Adding の after a verb turns the action into a thing you can talk about, like “-ing” in English. It is very common with 好き, きらい, 上手 and 下手.",
    notes: "〜こと works in many of the same places, but 〜の sounds more natural with feelings and senses (見る, 聞こえる).",
    examples: [
      { ja: "私は料理を作るのが好きです。", kana: "わたしは りょうりを つくるのが すきです。", romaji: "Watashi wa ryouri o tsukuru no ga suki desu.", en: "I like cooking." },
      { ja: "漢字を覚えるのは大変です。", kana: "かんじを おぼえるのは たいへんです。", romaji: "Kanji o oboeru no wa taihen desu.", en: "Memorizing kanji is hard work." },
    ],
  },
  {
    id: "nominalizer-koto", pattern: "〜こと", meaning: "the act of doing ~ (verb as a noun)", category: "forms",
    structure: ["Verb dictionary form + こと", "〜ことです / 〜ことは / 〜ことが"],
    explanation: "こと after a verb makes it a noun meaning “the act of ~”. Use it to talk about hobbies, rules or what is important.",
    notes: "In 趣味は〜ことです (“my hobby is ~”), use こと, not の.",
    examples: [
      { ja: "私のしゅみは写真をとることです。", kana: "わたしの しゅみは しゃしんを とる ことです。", romaji: "Watashi no shumi wa shashin o toru koto desu.", en: "My hobby is taking photos." },
      { ja: "毎日運動することは大切です。", kana: "まいにち うんどうする ことは たいせつです。", romaji: "Mainichi undou suru koto wa taisetsu desu.", en: "Exercising every day is important." },
    ],
  },
  {
    id: "koto-ga-dekiru", pattern: "〜ことができる", meaning: "can, be able to", category: "forms",
    structure: ["Verb dictionary form + ことができます", "Noun + ができます"],
    explanation: "Says that someone can do something or that something is possible or allowed. It is a little more formal than the potential form.",
    notes: "Negative: 〜ことができません. The potential form (読める, 食べられる) means the same thing and is used more in conversation.",
    examples: [
      { ja: "山田さんはピアノをひくことができます。", kana: "やまださんは ピアノを ひく ことが できます。", romaji: "Yamada-san wa piano o hiku koto ga dekimasu.", en: "Yamada-san can play the piano." },
      { ja: "この部屋でたばこをすうことはできません。", kana: "この へやで たばこを すう ことは できません。", romaji: "Kono heya de tabako o suu koto wa dekimasen.", en: "You can't smoke in this room." },
    ],
  },
  {
    id: "potential", pattern: "可能形 (〜える / 〜られる)", meaning: "can (potential form)", category: "forms",
    structure: ["う-verb: change the last u to e + る (書く → 書ける, 話す → 話せる)", "る-verb: drop る + られる (食べる → 食べられる)", "する → できる, 来る → 来られる"],
    explanation: "The potential form says what someone can or cannot do. It is shorter and more common than 〜ことができる. The object usually takes が instead of を.",
    notes: "The potential form conjugates like a る-verb: 書けます, 書けない, 書けた. In casual speech people often say 食べれる or 見れる (dropping ら), but textbooks use 食べられる.",
    examples: [
      { ja: "私は日本語の新聞が読めます。", kana: "わたしは にほんごの しんぶんが よめます。", romaji: "Watashi wa nihongo no shinbun ga yomemasu.", en: "I can read Japanese newspapers." },
      { ja: "今朝は早く起きられませんでした。", kana: "けさは はやく おきられませんでした。", romaji: "Kesa wa hayaku okiraremasen deshita.", en: "I couldn't get up early this morning." },
    ],
  },
  {
    id: "mieru-kikoeru", pattern: "見える / 聞こえる", meaning: "can be seen / can be heard (naturally)", category: "forms",
    structure: ["Noun + が見えます", "Noun + が聞こえます"],
    explanation: "Use 見える and 聞こえる when something comes into your eyes or ears by itself, without you trying. The thing you see or hear takes が.",
    notes: "Compare: 見られる / 聞ける mean you have the chance or ability to see or hear something (e.g. a movie online).",
    examples: [
      { ja: "まどから富士山が見えます。", kana: "まどから ふじさんが みえます。", romaji: "Mado kara Fujisan ga miemasu.", en: "You can see Mt. Fuji from the window." },
      { ja: "となりの部屋から音楽が聞こえますね。", kana: "となりの へやから おんがくが きこえますね。", romaji: "Tonari no heya kara ongaku ga kikoemasu ne.", en: "I can hear music from the room next door, can't you?" },
    ],
  },
  {
    id: "volitional", pattern: "〜よう / 〜おう (意向形)", meaning: "let's ~ (casual) / shall we ~?", category: "forms",
    structure: ["う-verb: change the last u to o + う (行く → 行こう, 飲む → 飲もう)", "る-verb: drop る + よう (食べる → 食べよう)", "する → しよう, 来る → 来よう"],
    explanation: "The volitional form is the casual version of 〜ましょう. Use it to invite friends (“let's ~”) or with か to suggest something (“shall we ~?”).",
    notes: "It is also the base of 〜ようと思う (“I'm thinking of ~”) and 〜ようとする (“try to ~”).",
    examples: [
      { ja: "つかれたね。ちょっと休もう。", kana: "つかれたね。ちょっと やすもう。", romaji: "Tsukareta ne. Chotto yasumou.", en: "We're tired, huh? Let's take a short break." },
      { ja: "週末、いっしょに映画を見ようか。", kana: "しゅうまつ、いっしょに えいがを みようか。", romaji: "Shuumatsu, issho ni eiga o miyou ka.", en: "Shall we watch a movie together this weekend?" },
    ],
  },
  {
    id: "imperative", pattern: "命令形 (〜え / 〜ろ)", meaning: "command form (Do it!)", category: "forms",
    structure: ["う-verb: change the last u to e (行く → 行け, 走る → 走れ)", "る-verb: drop る + ろ (起きる → 起きろ)", "する → しろ, 来る → 来い"],
    explanation: "The command form is a very strong, direct order. You hear it in sports cheering, on signs, in quoted speech, and from people speaking roughly.",
    notes: "It sounds rude in everyday conversation. To ask someone politely, use 〜てください instead.",
    examples: [
      { ja: "もっと速く走れ！", kana: "もっと はやく はしれ！", romaji: "Motto hayaku hashire!", en: "Run faster!" },
      { ja: "父はいつも「早く起きろ」と言います。", kana: "ちちは いつも 「はやく おきろ」と いいます。", romaji: "Chichi wa itsumo 'hayaku okiro' to iimasu.", en: "My father always says, 'Get up early!'" },
    ],
  },
  {
    id: "prohibitive-na", pattern: "〜な", meaning: "don't ~ (strong prohibition)", category: "forms",
    structure: ["Verb dictionary form + な"],
    explanation: "Adding な right after the dictionary form makes a strong “Don't!”. It is the opposite of the command form and is just as direct.",
    notes: "Be careful: 〜な after a dictionary form is a prohibition, but ね/な at the end of a normal sentence (いいな) just adds feeling. Politely, say 〜ないでください.",
    examples: [
      { ja: "ここに車を止めるな。", kana: "ここに くるまを とめるな。", romaji: "Koko ni kuruma o tomeru na.", en: "Don't park your car here." },
      { ja: "「心配するな」と兄が言いました。", kana: "「しんぱいするな」と あにが いいました。", romaji: "'Shinpai suru na' to ani ga iimashita.", en: "My older brother said, 'Don't worry.'" },
    ],
  },
  {
    id: "nasai", pattern: "〜なさい", meaning: "do ~ (instruction from a parent or teacher)", category: "forms",
    structure: ["Verb ます-stem + なさい"],
    explanation: "〜なさい is a firm but not rude instruction. Parents use it with children, and it is common in test instructions.",
    notes: "Don't use it with people above you. Among adults, use 〜てください.",
    examples: [
      { ja: "早く宿題をしなさい。", kana: "はやく しゅくだいを しなさい。", romaji: "Hayaku shukudai o shinasai.", en: "Hurry up and do your homework." },
      { ja: "次の問題に答えなさい。", kana: "つぎの もんだいに こたえなさい。", romaji: "Tsugi no mondai ni kotaenasai.", en: "Answer the following questions." },
    ],
  },
  {
    id: "transitive-intransitive", pattern: "自動詞・他動詞 (開く / 開ける)", meaning: "intransitive vs transitive verb pairs", category: "forms",
    structure: ["Noun + が + intransitive verb (ドアが開く = the door opens)", "Noun + を + transitive verb (ドアを開ける = I open the door)"],
    explanation: "Many verbs come in pairs. One says something happens by itself and uses が; the other says someone does it to something and uses を.",
    notes: "Common pairs: 開く/開ける, 閉まる/閉める, 始まる/始める, 止まる/止める, つく/つける, 消える/消す, 入る/入れる, 出る/出す.",
    examples: [
      { ja: "風でドアが開きました。", kana: "かぜで ドアが あきました。", romaji: "Kaze de doa ga akimashita.", en: "The door opened because of the wind." },
      { ja: "暑いので、まどを開けてください。", kana: "あついので、まどを あけて ください。", romaji: "Atsui node, mado o akete kudasai.", en: "It's hot, so please open the window." },
    ],
  },
  {
    id: "koto-ga-aru-sometimes", pattern: "〜ことがある", meaning: "sometimes ~, there are times when ~", category: "forms",
    structure: ["Verb dictionary form + ことがあります", "Verb ない-form + ことがあります"],
    explanation: "With the dictionary or ない-form, 〜ことがある means something happens now and then, but not always.",
    notes: "Don't mix it up with 〜たことがある (past form), which talks about experience: “have done ~ before”.",
    examples: [
      { ja: "忙しいときは、朝ごはんを食べないことがあります。", kana: "いそがしい ときは、あさごはんを たべない ことが あります。", romaji: "Isogashii toki wa, asagohan o tabenai koto ga arimasu.", en: "When I'm busy, I sometimes skip breakfast." },
      { ja: "この電車はたまにおくれることがあります。", kana: "この でんしゃは たまに おくれる ことが あります。", romaji: "Kono densha wa tama ni okureru koto ga arimasu.", en: "This train is late once in a while." },
    ],
  },

  // ---------- て-form & た-form Patterns ----------
  {
    id: "ta-koto-ga-aru", pattern: "〜たことがある", meaning: "have done ~ before (experience)", category: "te-patterns",
    structure: ["Verb た-form + ことがあります", "Verb た-form + ことがありません (have never ~)"],
    explanation: "Use this to talk about experiences: things you have or have never done in your life.",
    notes: "Add 一度も (not even once) for “never”: 一度も〜たことがありません. Don't use it for things done recently, like this morning.",
    examples: [
      { ja: "私は京都へ行ったことがあります。", kana: "わたしは きょうとへ いった ことが あります。", romaji: "Watashi wa Kyouto e itta koto ga arimasu.", en: "I have been to Kyoto." },
      { ja: "馬に乗ったことは一度もありません。", kana: "うまに のった ことは いちども ありません。", romaji: "Uma ni notta koto wa ichido mo arimasen.", en: "I've never ridden a horse, not even once." },
    ],
  },
  {
    id: "te-shimau", pattern: "〜てしまう", meaning: "finish ~ completely / do ~ by mistake (regret)", category: "te-patterns",
    structure: ["Verb て-form + しまいます", "Casual: 〜ちゃう / 〜じゃう (食べちゃった, 飲んじゃった)"],
    explanation: "〜てしまう has two feelings: something is completely finished, or something happened that you didn't want (“oops”, “unfortunately”).",
    notes: "In casual speech 〜てしまった becomes 〜ちゃった, and 〜でしまった becomes 〜じゃった.",
    examples: [
      { ja: "この本はもう読んでしまいました。", kana: "この ほんは もう よんで しまいました。", romaji: "Kono hon wa mou yonde shimaimashita.", en: "I've already finished reading this book." },
      { ja: "電車にかさを忘れてしまいました。", kana: "でんしゃに かさを わすれて しまいました。", romaji: "Densha ni kasa o wasurete shimaimashita.", en: "I (accidentally) left my umbrella on the train." },
    ],
  },
  {
    id: "te-oku", pattern: "〜ておく", meaning: "do ~ in advance / leave something as it is", category: "te-patterns",
    structure: ["Verb て-form + おきます", "Casual: 〜とく (買っとく, 読んどく)"],
    explanation: "Use 〜ておく when you do something to get ready for later, or when you leave something in a certain state on purpose.",
    notes: "Leaving as is: 開けておく = keep it open. Casual 〜ておく → 〜とく is very common in speech.",
    examples: [
      { ja: "旅行の前にホテルをよやくしておきます。", kana: "りょこうの まえに ホテルを よやくして おきます。", romaji: "Ryokou no mae ni hoteru o yoyaku shite okimasu.", en: "I'll book a hotel before the trip." },
      { ja: "まどは開けておいてください。", kana: "まどは あけて おいて ください。", romaji: "Mado wa akete oite kudasai.", en: "Please leave the window open." },
    ],
  },
  {
    id: "te-miru", pattern: "〜てみる", meaning: "try doing ~ (to see how it is)", category: "te-patterns",
    structure: ["Verb て-form + みます"],
    explanation: "Use 〜てみる when you do something to find out what it's like, such as tasting new food or trying on clothes.",
    notes: "It is often used with 〜たい (〜てみたい) and 〜てもいいですか (〜てみてもいいですか). For “try hard to do”, use 〜ようとする instead.",
    examples: [
      { ja: "この服を着てみてもいいですか。", kana: "この ふくを きて みても いいですか。", romaji: "Kono fuku o kite mite mo ii desu ka.", en: "May I try on these clothes?" },
      { ja: "日本の料理を作ってみたいです。", kana: "にほんの りょうりを つくって みたいです。", romaji: "Nihon no ryouri o tsukutte mitai desu.", en: "I want to try making Japanese food." },
    ],
  },
  {
    id: "te-aru", pattern: "〜てある", meaning: "has been done (and stays that way)", category: "te-patterns",
    structure: ["Noun + が + transitive verb て-form + あります"],
    explanation: "〜てある describes a state that someone created on purpose, such as something written, placed or prepared. The focus is on the result you can see now.",
    notes: "Compare: まどが開いている (the window is open — just a state) vs まどが開けてある (someone opened it on purpose).",
    examples: [
      { ja: "テーブルの上に花がかざってあります。", kana: "テーブルの うえに はなが かざって あります。", romaji: "Teeburu no ue ni hana ga kazatte arimasu.", en: "Flowers have been placed on the table as decoration." },
      { ja: "ノートに名前が書いてありますね。", kana: "ノートに なまえが かいて ありますね。", romaji: "Nooto ni namae ga kaite arimasu ne.", en: "There's a name written in the notebook, isn't there?" },
    ],
  },
  {
    id: "te-iru-state", pattern: "〜ている (状態)", meaning: "is in the state of ~ (result of a change)", category: "te-patterns",
    structure: ["Verb of change て-form + います (結婚する, 開く, 閉まる, 住む, 知る …)"],
    explanation: "With verbs that describe a change, 〜ている shows that the result still continues now, not an action in progress. 結婚している means “is married”, not “is getting married”.",
    notes: "知る is always 知っています for “I know”, but the negative is 知りません.",
    examples: [
      { ja: "兄はもう結婚しています。", kana: "あには もう けっこんして います。", romaji: "Ani wa mou kekkon shite imasu.", en: "My older brother is already married." },
      { ja: "店のドアが閉まっていますね。", kana: "みせの ドアが しまって いますね。", romaji: "Mise no doa ga shimatte imasu ne.", en: "The shop's door is closed, isn't it?" },
    ],
  },
  {
    id: "te-iku", pattern: "〜ていく", meaning: "go ~ing / continue changing from now on", category: "te-patterns",
    structure: ["Verb て-form + いきます"],
    explanation: "〜ていく shows movement away from the speaker (歩いていく = go on foot), or a change that will continue from now into the future.",
    notes: "Often written in kana: 〜ていく. Its partner 〜てくる shows movement toward the speaker or change up to now.",
    examples: [
      { ja: "駅まで歩いていきましょう。", kana: "えきまで あるいて いきましょう。", romaji: "Eki made aruite ikimashou.", en: "Let's walk to the station." },
      { ja: "これからもっと寒くなっていきます。", kana: "これから もっと さむく なって いきます。", romaji: "Kore kara motto samuku natte ikimasu.", en: "It will keep getting colder from now on." },
    ],
  },
  {
    id: "te-kuru", pattern: "〜てくる", meaning: "come ~ing / go and come back / start to (change up to now)", category: "te-patterns",
    structure: ["Verb て-form + きます"],
    explanation: "〜てくる can mean doing something and coming back (買ってくる = go buy and come back), or a change that has been happening up to now.",
    notes: "ちょっと〜てきます is a handy way to say “I'll just go and ~”.",
    examples: [
      { ja: "ちょっとコンビニで飲み物を買ってきます。", kana: "ちょっと コンビニで のみものを かって きます。", romaji: "Chotto konbini de nomimono o katte kimasu.", en: "I'll just go buy a drink at the convenience store." },
      { ja: "だんだん日本語がわかってきました。", kana: "だんだん にほんごが わかって きました。", romaji: "Dandan nihongo ga wakatte kimashita.", en: "I've gradually started to understand Japanese." },
    ],
  },
  {
    id: "naide", pattern: "〜ないで", meaning: "without doing ~ / instead of ~ing", category: "te-patterns",
    structure: ["Verb ない-form + で + main verb"],
    explanation: "〜ないで connects two actions and says the first one was not done: “without ~”. It can also mean “instead of ~ing”.",
    notes: "〜ないでください (please don't ~) uses the same form.",
    examples: [
      { ja: "今朝は朝ごはんを食べないで学校へ来ました。", kana: "けさは あさごはんを たべないで がっこうへ きました。", romaji: "Kesa wa asagohan o tabenaide gakkou e kimashita.", en: "This morning I came to school without eating breakfast." },
      { ja: "かさを持たないで出かけてしまいました。", kana: "かさを もたないで でかけて しまいました。", romaji: "Kasa o motanaide dekakete shimaimashita.", en: "I went out without taking an umbrella." },
    ],
  },
  {
    id: "nakute-mo-ii", pattern: "〜なくてもいい", meaning: "don't have to ~", category: "te-patterns",
    structure: ["Verb ない-form (drop い) + くてもいいです"],
    explanation: "Says that something is not necessary. It is the opposite of “must”.",
    notes: "〜なくてもかまいません is a slightly more formal version.",
    examples: [
      { ja: "明日は学校へ来なくてもいいです。", kana: "あしたは がっこうへ こなくても いいです。", romaji: "Ashita wa gakkou e konakute mo ii desu.", en: "You don't have to come to school tomorrow." },
      { ja: "くつをぬがなくてもいいですか。", kana: "くつを ぬがなくても いいですか。", romaji: "Kutsu o nuganakute mo ii desu ka.", en: "Is it OK if I don't take off my shoes?" },
    ],
  },
  {
    id: "nakereba-naranai", pattern: "〜なければならない / 〜なくてはいけない", meaning: "must, have to", category: "te-patterns",
    structure: ["Verb ない-form (drop い) + ければなりません", "Verb ない-form (drop い) + くてはいけません"],
    explanation: "Both patterns say that something is necessary or required. Literally they mean “if you don't ~, it's no good”.",
    notes: "They are almost the same. 〜なければならない sounds a little more like a rule or duty.",
    examples: [
      { ja: "明日までにレポートを出さなければなりません。", kana: "あしたまでに レポートを ださなければ なりません。", romaji: "Ashita made ni repooto o dasanakereba narimasen.", en: "I have to hand in my report by tomorrow." },
      { ja: "毎日薬を飲まなくてはいけませんか。", kana: "まいにち くすりを のまなくては いけませんか。", romaji: "Mainichi kusuri o nomanakute wa ikemasen ka.", en: "Do I have to take the medicine every day?" },
    ],
  },
  {
    id: "nakucha", pattern: "〜なくちゃ / 〜なきゃ", meaning: "gotta ~ (casual “must”)", category: "te-patterns",
    structure: ["Verb ない-form (drop い) + くちゃ (いけない)", "Verb ない-form (drop い) + きゃ (いけない)"],
    explanation: "These are short, casual ways to say “I have to”. Use them with friends or when talking to yourself.",
    notes: "〜なくちゃ comes from 〜なくては, and 〜なきゃ comes from 〜なければ. The ending いけない / ならない is often left out.",
    examples: [
      { ja: "もう八時だ。早く行かなくちゃ。", kana: "もう はちじだ。はやく いかなくちゃ。", romaji: "Mou hachiji da. Hayaku ikanakucha.", en: "It's already eight. I've got to hurry." },
      { ja: "明日テストだから、勉強しなきゃ。", kana: "あした テストだから、べんきょうしなきゃ。", romaji: "Ashita tesuto da kara, benkyou shinakya.", en: "There's a test tomorrow, so I have to study." },
    ],
  },
  {
    id: "mada-te-inai", pattern: "まだ〜ていない", meaning: "haven't ~ yet", category: "te-patterns",
    structure: ["まだ + Verb て-form + いません"],
    explanation: "Use this to say something has not happened yet but probably will. It is the natural answer to a もう〜ましたか question.",
    notes: "Don't answer with まだ〜ませんでした; that sounds like it will never happen. Use まだ〜ていません.",
    examples: [
      { ja: "まだ昼ごはんを食べていません。", kana: "まだ ひるごはんを たべて いません。", romaji: "Mada hirugohan o tabete imasen.", en: "I haven't eaten lunch yet." },
      { ja: "宿題はまだ終わっていないの？", kana: "しゅくだいは まだ おわって いないの？", romaji: "Shukudai wa mada owatte inai no?", en: "You still haven't finished your homework?" },
    ],
  },
  {
    id: "ta-bakari", pattern: "〜たばかり", meaning: "have just ~ (recently)", category: "te-patterns",
    structure: ["Verb た-form + ばかりです"],
    explanation: "Says that something happened only a short time ago. The speaker feels it was very recent, even if it was weeks ago.",
    notes: "Compare 〜たところ, which means “just this moment”. 〜たばかり can be used for a longer time, like “just moved here last month”.",
    examples: [
      { ja: "さっき起きたばかりです。", kana: "さっき おきた ばかりです。", romaji: "Sakki okita bakari desu.", en: "I just woke up a moment ago." },
      { ja: "日本に来たばかりなので、まだ友達がいません。", kana: "にほんに きた ばかりなので、まだ ともだちが いません。", romaji: "Nihon ni kita bakari na node, mada tomodachi ga imasen.", en: "I've only just come to Japan, so I don't have any friends yet." },
    ],
  },
  {
    id: "tokoro", pattern: "〜ところ", meaning: "about to ~ / in the middle of ~ / have just ~", category: "te-patterns",
    structure: ["Verb dictionary form + ところです (about to)", "Verb て-form + いるところです (in the middle of)", "Verb た-form + ところです (just finished)"],
    explanation: "ところ means “point in time”. The verb form before it shows whether the action is about to start, is going on right now, or has just ended.",
    notes: "It is often used with 今 or ちょうど (just now): ちょうど今、家に着いたところです.",
    examples: [
      { ja: "今から出かけるところです。", kana: "いまから でかける ところです。", romaji: "Ima kara dekakeru tokoro desu.", en: "I'm just about to go out." },
      { ja: "今、ご飯を作っているところです。", kana: "いま、ごはんを つくって いる ところです。", romaji: "Ima, gohan o tsukutte iru tokoro desu.", en: "I'm in the middle of cooking a meal right now." },
    ],
  },
  {
    id: "ta-mama", pattern: "〜たまま", meaning: "leaving it as it is, with ~ still on", category: "te-patterns",
    structure: ["Verb た-form + まま", "Noun + の + まま; Verb ない-form + まま"],
    explanation: "〜たまま says that a state continues without change while something else happens. It often suggests the state should have been changed.",
    notes: "このままでいいです means “it's fine as it is”.",
    examples: [
      { ja: "テレビをつけたまま寝てしまいました。", kana: "テレビを つけた まま ねて しまいました。", romaji: "Terebi o tsuketa mama nete shimaimashita.", en: "I fell asleep with the TV on." },
      { ja: "くつをはいたまま部屋に入らないでください。", kana: "くつを はいた まま へやに はいらないで ください。", romaji: "Kutsu o haita mama heya ni hairanaide kudasai.", en: "Please don't come into the room with your shoes on." },
    ],
  },
  // ---------- Giving & Receiving ----------
  {
    id: "ageru", pattern: "あげる", meaning: "give (to someone else)", category: "giving",
    structure: ["Giver + は/が + Receiver + に + Thing + を + あげます"],
    explanation: "Use あげる when you (or someone) give something to another person, moving away from you. The receiver is never “me”.",
    notes: "For animals and plants, people often say やる. For someone above you, use the humble さしあげる.",
    examples: [
      { ja: "私は妹に本をあげました。", kana: "わたしは いもうとに ほんを あげました。", romaji: "Watashi wa imouto ni hon o agemashita.", en: "I gave my younger sister a book." },
      { ja: "田中さんのたんじょうびに何をあげますか。", kana: "たなかさんの たんじょうびに なにを あげますか。", romaji: "Tanaka-san no tanjoubi ni nani o agemasu ka.", en: "What will you give Tanaka-san for his birthday?" },
    ],
  },
  {
    id: "kureru", pattern: "くれる", meaning: "give (to me or my group)", category: "giving",
    structure: ["Giver + が/は + (私に) + Thing + を + くれます"],
    explanation: "Use くれる when someone gives something to you or to someone close to you, like your family. The gift comes toward you.",
    notes: "A common mistake is 友達が私にあげました — this is wrong. When the receiver is me, always use くれる. Polite version: くださる.",
    examples: [
      { ja: "友達が私にケーキをくれました。", kana: "ともだちが わたしに ケーキを くれました。", romaji: "Tomodachi ga watashi ni keeki o kuremashita.", en: "My friend gave me a cake." },
      { ja: "父はたんじょうびに時計をくれました。", kana: "ちちは たんじょうびに とけいを くれました。", romaji: "Chichi wa tanjoubi ni tokei o kuremashita.", en: "My father gave me a watch for my birthday." },
    ],
  },
  {
    id: "morau", pattern: "もらう", meaning: "receive, get (from someone)", category: "giving",
    structure: ["Receiver + は + Giver + に/から + Thing + を + もらいます"],
    explanation: "もらう looks at the same giving from the receiver's side: “I got ~ from someone”. The person you got it from takes に or から.",
    notes: "Use から when the giver is a company or school. Humble version: いただく.",
    examples: [
      { ja: "私は先生からじしょをもらいました。", kana: "わたしは せんせいから じしょを もらいました。", romaji: "Watashi wa sensei kara jisho o moraimashita.", en: "I got a dictionary from my teacher." },
      { ja: "クリスマスに何をもらいましたか。", kana: "クリスマスに なにを もらいましたか。", romaji: "Kurisumasu ni nani o moraimashita ka.", en: "What did you get for Christmas?" },
    ],
  },
  {
    id: "te-ageru", pattern: "〜てあげる", meaning: "do ~ for someone (as a favor)", category: "giving",
    structure: ["Verb て-form + あげます"],
    explanation: "Just like あげる gives a thing, 〜てあげる gives an action: you do something kind for another person.",
    notes: "Saying 〜てあげます directly to someone above you can sound like you are doing them a big favor. Offer help with お〜しましょうか instead.",
    examples: [
      { ja: "私は弟に宿題を教えてあげました。", kana: "わたしは おとうとに しゅくだいを おしえて あげました。", romaji: "Watashi wa otouto ni shukudai o oshiete agemashita.", en: "I helped my younger brother with his homework." },
      { ja: "おばあさんのにもつを持ってあげました。", kana: "おばあさんの にもつを もって あげました。", romaji: "Obaasan no nimotsu o motte agemashita.", en: "I carried an elderly woman's bags for her." },
    ],
  },
  {
    id: "te-kureru", pattern: "〜てくれる", meaning: "someone does ~ for me", category: "giving",
    structure: ["Person + が + Verb て-form + くれます"],
    explanation: "Use 〜てくれる when someone does something kind for you or your group. It shows you are thankful.",
    notes: "〜てくれない？ is a casual way to ask a friend for help. For someone above you, use 〜てくださる.",
    examples: [
      { ja: "山田さんが駅まで送ってくれました。", kana: "やまださんが えきまで おくって くれました。", romaji: "Yamada-san ga eki made okutte kuremashita.", en: "Yamada-san took me to the station." },
      { ja: "ちょっと手伝ってくれない？", kana: "ちょっと てつだって くれない？", romaji: "Chotto tetsudatte kurenai?", en: "Could you give me a hand for a second?" },
    ],
  },
  {
    id: "te-morau", pattern: "〜てもらう", meaning: "have someone do ~ (for me)", category: "giving",
    structure: ["Receiver + は + Person + に + Verb て-form + もらいます"],
    explanation: "〜てもらう means you receive a kind action from someone. It often suggests you asked them to do it.",
    notes: "The person who does the action always takes に. Humble version: 〜ていただく.",
    examples: [
      { ja: "友達に写真をとってもらいました。", kana: "ともだちに しゃしんを とって もらいました。", romaji: "Tomodachi ni shashin o totte moraimashita.", en: "I had my friend take a photo of me." },
      { ja: "先生に作文を見てもらいたいです。", kana: "せんせいに さくぶんを みて もらいたいです。", romaji: "Sensei ni sakubun o mite moraitai desu.", en: "I'd like my teacher to look over my essay." },
    ],
  },
  {
    id: "te-kuremasenka", pattern: "〜てくれませんか / 〜てもらえませんか", meaning: "could you please ~? (polite request)", category: "giving",
    structure: ["Verb て-form + くれませんか", "Verb て-form + もらえませんか"],
    explanation: "These are softer and more polite than 〜てください. Asking in the negative (“won't you ~?”) makes the request gentle.",
    notes: "Order of politeness: 〜てくれる？ < 〜てくれませんか < 〜てもらえませんか < 〜ていただけませんか.",
    examples: [
      { ja: "すみません、もう一度言ってくれませんか。", kana: "すみません、もう いちど いって くれませんか。", romaji: "Sumimasen, mou ichido itte kuremasen ka.", en: "Excuse me, could you say that once more?" },
      { ja: "この漢字の読み方を教えてもらえませんか。", kana: "この かんじの よみかたを おしえて もらえませんか。", romaji: "Kono kanji no yomikata o oshiete moraemasen ka.", en: "Could you tell me how to read this kanji?" },
    ],
  },

  // ---------- Conditionals ----------
  {
    id: "tara", pattern: "〜たら", meaning: "if ~ / when ~ (after it happens)", category: "conditionals",
    structure: ["Verb / い-adj た-form + ら (行ったら, 高かったら)", "Noun / な-adj + だったら"],
    explanation: "〜たら is the most flexible “if” or “when”. The second part happens after the first part is done or true.",
    notes: "Add もし at the start to stress “if”. 〜たら can be followed by requests, invitations and wishes, unlike 〜と.",
    examples: [
      { ja: "駅に着いたら、電話してください。", kana: "えきに ついたら、でんわして ください。", romaji: "Eki ni tsuitara, denwa shite kudasai.", en: "When you get to the station, please call me." },
      { ja: "もし雨がふったら、出かけません。", kana: "もし あめが ふったら、でかけません。", romaji: "Moshi ame ga futtara, dekakemasen.", en: "If it rains, I won't go out." },
    ],
  },
  {
    id: "ba", pattern: "〜ば", meaning: "if ~ (condition)", category: "conditionals",
    structure: ["う-verb: change the last u to e + ば (行く → 行けば)", "る-verb: drop る + れば (見る → 見れば); する → すれば, 来る → 来れば", "い-adj: drop い + ければ (安い → 安ければ); ない → なければ"],
    explanation: "〜ば sets up a condition: “if A, then B”. It is often used for general rules and for advice about what to do.",
    notes: "For nouns and な-adjectives, use なら: 学生なら. いい becomes よければ.",
    examples: [
      { ja: "急げば、電車に間に合います。", kana: "いそげば、でんしゃに まにあいます。", romaji: "Isogeba, densha ni maniaimasu.", en: "If you hurry, you'll make the train." },
      { ja: "安ければ、買いたいです。", kana: "やすければ、かいたいです。", romaji: "Yasukereba, kaitai desu.", en: "If it's cheap, I'd like to buy it." },
    ],
  },
  {
    id: "to-conditional", pattern: "〜と (条件)", meaning: "whenever ~ / if ~, then naturally …", category: "conditionals",
    structure: ["Verb / い-adj dictionary form + と", "Noun / な-adj + だと"],
    explanation: "〜と is used when the result always or naturally follows, such as how machines work, directions and nature.",
    notes: "You can't end a 〜と sentence with a request, invitation or your own plan. Say 駅に着いたら電話してください, not 着くと.",
    examples: [
      { ja: "このボタンをおすと、お茶が出ます。", kana: "この ボタンを おすと、おちゃが でます。", romaji: "Kono botan o osu to, ocha ga demasu.", en: "If you press this button, tea comes out." },
      { ja: "春になると、さくらがさきます。", kana: "はるに なると、さくらが さきます。", romaji: "Haru ni naru to, sakura ga sakimasu.", en: "When spring comes, the cherry blossoms bloom." },
    ],
  },
  {
    id: "nara", pattern: "〜なら", meaning: "if it's ~ / if you're going to ~ (topic or advice)", category: "conditionals",
    structure: ["Noun / な-adj + なら", "Verb / い-adj plain form + なら"],
    explanation: "〜なら picks up something the other person said or plans, and gives advice or an opinion about it: “If that's the case, …”.",
    notes: "日本へ行くなら means “if you're going to go to Japan (before you go)”, while 日本へ行ったら means “after you get there”.",
    examples: [
      { ja: "日本へ行くなら、京都がいいですよ。", kana: "にほんへ いくなら、きょうとが いいですよ。", romaji: "Nihon e iku nara, Kyouto ga ii desu yo.", en: "If you're going to Japan, Kyoto is a great place to visit." },
      { ja: "コーヒーなら、あの店がおいしいです。", kana: "コーヒーなら、あの みせが おいしいです。", romaji: "Koohii nara, ano mise ga oishii desu.", en: "If it's coffee you want, that shop is good." },
    ],
  },
  {
    id: "te-mo", pattern: "〜ても", meaning: "even if ~, even though ~", category: "conditionals",
    structure: ["Verb / い-adj て-form + も (ふっても, 高くても)", "Noun / な-adj + でも"],
    explanation: "〜ても says the result doesn't change even if the first part is true. With いくら or どんなに it means “no matter how ~”.",
    notes: "Question words + 〜ても: 何を食べても (whatever I eat), だれに聞いても (whoever I ask).",
    examples: [
      { ja: "雨がふっても、サッカーのれんしゅうはあります。", kana: "あめが ふっても、サッカーの れんしゅうは あります。", romaji: "Ame ga futte mo, sakkaa no renshuu wa arimasu.", en: "Even if it rains, there's still soccer practice." },
      { ja: "いくら高くても、この車を買いたいです。", kana: "いくら たかくても、この くるまを かいたいです。", romaji: "Ikura takakute mo, kono kuruma o kaitai desu.", en: "No matter how expensive it is, I want to buy this car." },
    ],
  },
  {
    id: "ba-yokatta", pattern: "〜ばよかった", meaning: "I should have ~ (regret)", category: "conditionals",
    structure: ["Verb ば-form + よかった(です)", "Verb ない-form (drop い) + ければよかった (I shouldn't have ~)"],
    explanation: "Literally “it would have been good if ~”. Use it to say you regret not doing something.",
    notes: "〜たらよかった means the same thing and is also common.",
    examples: [
      { ja: "もっと早く家を出ればよかったです。", kana: "もっと はやく いえを でれば よかったです。", romaji: "Motto hayaku ie o dereba yokatta desu.", en: "I should have left home earlier." },
      { ja: "かさを持ってくればよかった。", kana: "かさを もって くれば よかった。", romaji: "Kasa o motte kureba yokatta.", en: "I should have brought an umbrella." },
    ],
  },
  {
    id: "tara-dou", pattern: "〜たらどうですか", meaning: "why don't you ~? (suggestion)", category: "conditionals",
    structure: ["Verb た-form + らどうですか", "Casual: Verb た-form + ら？"],
    explanation: "Use this to give friendly advice or a suggestion to someone: “How about ~ing?”.",
    notes: "To a superior, 〜たらいかがですか is more polite. Don't use it for your own plans.",
    examples: [
      { ja: "つかれているなら、少し休んだらどうですか。", kana: "つかれて いるなら、すこし やすんだら どうですか。", romaji: "Tsukarete iru nara, sukoshi yasundara dou desu ka.", en: "If you're tired, why don't you rest for a bit?" },
      { ja: "わからなかったら、先生に聞いてみたら？", kana: "わからなかったら、せんせいに きいて みたら？", romaji: "Wakaranakattara, sensei ni kiite mitara?", en: "If you don't understand, why not ask the teacher?" },
    ],
  },
  {
    id: "baai-wa", pattern: "〜場合は", meaning: "in case of ~, if ~ happens", category: "conditionals",
    structure: ["Verb / い-adj plain form + 場合は", "Noun + の + 場合は; な-adj + な + 場合は"],
    explanation: "〜場合は talks about what to do if a certain situation happens. It is common in rules, notices and instructions.",
    notes: "It sounds more formal than 〜たら and is often used for problems or emergencies.",
    examples: [
      { ja: "火事の場合は、エレベーターを使わないでください。", kana: "かじの ばあいは、エレベーターを つかわないで ください。", romaji: "Kaji no baai wa, erebeetaa o tsukawanaide kudasai.", en: "In case of fire, please do not use the elevator." },
      { ja: "おくれる場合は、会社に電話してください。", kana: "おくれる ばあいは、かいしゃに でんわして ください。", romaji: "Okureru baai wa, kaisha ni denwa shite kudasai.", en: "If you're going to be late, please call the office." },
    ],
  },

  // ---------- Intentions, Wishes & Purpose ----------
  {
    id: "you-to-omou", pattern: "〜ようと思う", meaning: "I'm thinking of ~ing", category: "intentions",
    structure: ["Verb volitional form + と思います", "Verb volitional form + と思っています (have been thinking)"],
    explanation: "Use this to talk about your plans or something you have decided to do. 〜と思っています shows the idea has been in your mind for a while.",
    notes: "For other people's plans, use 〜ようと思っているそうです or 〜つもりだそうです.",
    examples: [
      { ja: "夏休みに北海道へ行こうと思っています。", kana: "なつやすみに ほっかいどうへ いこうと おもって います。", romaji: "Natsuyasumi ni Hokkaidou e ikou to omotte imasu.", en: "I'm thinking of going to Hokkaido over the summer vacation." },
      { ja: "今日は早く寝ようと思います。", kana: "きょうは はやく ねようと おもいます。", romaji: "Kyou wa hayaku neyou to omoimasu.", en: "I think I'll go to bed early tonight." },
    ],
  },
  {
    id: "you-to-suru", pattern: "〜ようとする", meaning: "try to ~ / be about to ~", category: "intentions",
    structure: ["Verb volitional form + とします"],
    explanation: "〜ようとする means you try to do something (often without success), or that you were just about to do it when something happened.",
    notes: "Compare 〜てみる: 食べてみる = actually taste to see; 食べようとする = attempt to eat.",
    examples: [
      { ja: "出かけようとしたとき、電話がなりました。", kana: "でかけようと した とき、でんわが なりました。", romaji: "Dekakeyou to shita toki, denwa ga narimashita.", en: "Just as I was about to go out, the phone rang." },
      { ja: "何度も思い出そうとしましたが、だめでした。", kana: "なんども おもいだそうと しましたが、だめでした。", romaji: "Nando mo omoidasou to shimashita ga, dame deshita.", en: "I tried many times to remember, but I couldn't." },
    ],
  },
  {
    id: "tsumori", pattern: "〜つもり", meaning: "intend to ~, plan to ~", category: "intentions",
    structure: ["Verb dictionary form + つもりです", "Verb ない-form + つもりです (don't intend to ~)"],
    explanation: "〜つもり shows a firm plan or intention that you have already made up your mind about.",
    notes: "It's stronger than 〜ようと思う. Asking a superior 〜つもりですか can sound rude; ask 〜ますか instead.",
    examples: [
      { ja: "来年、日本の大学に入るつもりです。", kana: "らいねん、にほんの だいがくに はいる つもりです。", romaji: "Rainen, Nihon no daigaku ni hairu tsumori desu.", en: "I intend to enter a Japanese university next year." },
      { ja: "今日はお酒を飲まないつもりです。", kana: "きょうは おさけを のまない つもりです。", romaji: "Kyou wa osake o nomanai tsumori desu.", en: "I'm not planning to drink today." },
    ],
  },
  {
    id: "yotei", pattern: "〜予定です", meaning: "be scheduled to ~, plan", category: "intentions",
    structure: ["Verb dictionary form + 予定です", "Noun + の + 予定です"],
    explanation: "〜予定 is for things on a schedule, often decided with other people, like meetings, trips and events.",
    notes: "つもり is about your own intention; 予定 is about a fixed plan.",
    examples: [
      { ja: "会議は三時に始まる予定です。", kana: "かいぎは さんじに はじまる よていです。", romaji: "Kaigi wa sanji ni hajimaru yotei desu.", en: "The meeting is scheduled to start at three." },
      { ja: "週末の予定は何ですか。", kana: "しゅうまつの よていは なんですか。", romaji: "Shuumatsu no yotei wa nan desu ka.", en: "What are your plans for the weekend?" },
    ],
  },
  {
    id: "tagaru", pattern: "〜たがる", meaning: "(someone else) wants to ~", category: "intentions",
    structure: ["Verb ます-stem + たがります / たがっています"],
    explanation: "In Japanese you can't directly say what someone else wants, so 〜たい changes to 〜たがる for other people. It describes what they seem to want.",
    notes: "Use 〜たがっています for a current wish. Don't use it about people above you; it can sound rude.",
    examples: [
      { ja: "子どもはいつもゲームをしたがります。", kana: "こどもは いつも ゲームを したがります。", romaji: "Kodomo wa itsumo geemu o shitagarimasu.", en: "Kids always want to play games." },
      { ja: "妹は日本へ行きたがっています。", kana: "いもうとは にほんへ いきたがって います。", romaji: "Imouto wa Nihon e ikitagatte imasu.", en: "My younger sister wants to go to Japan." },
    ],
  },
  {
    id: "garu", pattern: "〜がる", meaning: "(someone else) shows signs of feeling ~", category: "intentions",
    structure: ["い-adj (drop い) + がる (寒い → 寒がる, ほしい → ほしがる)", "な-adj + がる (いや → いやがる)"],
    explanation: "Adjectives of feeling (寒い, こわい, ほしい) describe your own feelings. For other people, add 〜がる to say they act or look that way.",
    notes: "ほしい → ほしがる: 弟は車をほしがっている. Use it for people close to you, not superiors.",
    examples: [
      { ja: "弟は新しい自転車をほしがっています。", kana: "おとうとは あたらしい じてんしゃを ほしがって います。", romaji: "Otouto wa atarashii jitensha o hoshigatte imasu.", en: "My younger brother wants a new bicycle." },
      { ja: "うちの犬はかみなりの音をこわがります。", kana: "うちの いぬは かみなりの おとを こわがります。", romaji: "Uchi no inu wa kaminari no oto o kowagarimasu.", en: "Our dog is scared of the sound of thunder." },
    ],
  },
  {
    id: "te-hoshii", pattern: "〜てほしい", meaning: "want someone to ~", category: "intentions",
    structure: ["Person + に + Verb て-form + ほしいです", "Person + に + Verb ない-form + でほしいです (want them not to ~)"],
    explanation: "〜たい is for things you want to do yourself. 〜てほしい is for things you want another person to do.",
    notes: "Saying 〜てほしい directly to a superior sounds pushy. Use 〜ていただけませんか.",
    examples: [
      { ja: "友達にパーティーに来てほしいです。", kana: "ともだちに パーティーに きて ほしいです。", romaji: "Tomodachi ni paatii ni kite hoshii desu.", en: "I want my friends to come to the party." },
      { ja: "ここでたばこをすわないでほしいです。", kana: "ここで たばこを すわないで ほしいです。", romaji: "Koko de tabako o suwanaide hoshii desu.", en: "I'd like people not to smoke here." },
    ],
  },
  {
    id: "you-ni-suru", pattern: "〜ようにする", meaning: "make an effort to ~, make sure to ~", category: "intentions",
    structure: ["Verb dictionary form + ようにします", "Verb ない-form + ようにします", "Habit: 〜ようにしています"],
    explanation: "Use 〜ようにする for things you try to do (or avoid) as a habit or with effort.",
    notes: "〜ようにしてください is a polite way to ask someone to make sure they do something.",
    examples: [
      { ja: "毎日野菜を食べるようにしています。", kana: "まいにち やさいを たべる ように して います。", romaji: "Mainichi yasai o taberu you ni shite imasu.", en: "I make a point of eating vegetables every day." },
      { ja: "夜おそくコーヒーを飲まないようにしています。", kana: "よる おそく コーヒーを のまない ように して います。", romaji: "Yoru osoku koohii o nomanai you ni shite imasu.", en: "I try not to drink coffee late at night." },
    ],
  },
  {
    id: "you-ni-purpose", pattern: "〜ように (目的)", meaning: "so that ~, in order that ~", category: "intentions",
    structure: ["Verb dictionary / potential form + ように", "Verb ない-form + ように"],
    explanation: "〜ように gives the goal of an action, especially with verbs you can't fully control, like potential forms (聞こえる, できる) or ない-forms.",
    notes: "Compare 〜ために, which is used with actions you do on purpose: 日本で働くために勉強する.",
    examples: [
      { ja: "みんなに聞こえるように、大きい声で話してください。", kana: "みんなに きこえる ように、おおきい こえで はなして ください。", romaji: "Minna ni kikoeru you ni, ookii koe de hanashite kudasai.", en: "Please speak loudly so everyone can hear you." },
      { ja: "かぜをひかないように、あたたかくして寝ます。", kana: "かぜを ひかない ように、あたたかく して ねます。", romaji: "Kaze o hikanai you ni, atatakaku shite nemasu.", en: "I keep myself warm when I sleep so that I don't catch a cold." },
    ],
  },
  {
    id: "tame-ni", pattern: "〜ために", meaning: "in order to ~ / for the sake of ~", category: "intentions",
    structure: ["Verb dictionary form + ために", "Noun + の + ために"],
    explanation: "〜ために shows the purpose of an action you do on purpose, or the person or thing you do it for.",
    notes: "Both parts usually have the same subject. With potential or ない-forms, use 〜ように instead.",
    examples: [
      { ja: "日本で働くために、日本語を勉強しています。", kana: "にほんで はたらく ために、にほんごを べんきょうして います。", romaji: "Nihon de hataraku tame ni, nihongo o benkyou shite imasu.", en: "I'm studying Japanese in order to work in Japan." },
      { ja: "家族のために、毎日料理を作ります。", kana: "かぞくの ために、まいにち りょうりを つくります。", romaji: "Kazoku no tame ni, mainichi ryouri o tsukurimasu.", en: "I cook every day for my family." },
    ],
  },
  {
    id: "noni-purpose", pattern: "〜のに (目的)", meaning: "for ~ing, in order to ~ (use, time, cost)", category: "intentions",
    structure: ["Verb dictionary form + のに + 使う / 便利 / いい / かかる / 必要"],
    explanation: "This のに talks about what something is used for or what is needed to do something, such as time or money.",
    notes: "Don't confuse it with 〜のに meaning “even though”. The purpose のに is followed by words like 便利, 使う or かかる.",
    examples: [
      { ja: "このはさみは紙を切るのに便利です。", kana: "この はさみは かみを きるのに べんりです。", romaji: "Kono hasami wa kami o kiru no ni benri desu.", en: "These scissors are handy for cutting paper." },
      { ja: "駅まで行くのに二十分かかります。", kana: "えきまで いくのに にじゅっぷん かかります。", romaji: "Eki made iku no ni nijuppun kakarimasu.", en: "It takes twenty minutes to get to the station." },
    ],
  },
  {
    id: "you-ni-iu", pattern: "〜ように言う", meaning: "tell someone to ~", category: "intentions",
    structure: ["Verb dictionary form + ように言います", "Verb ない-form + ように言います (tell someone not to ~)"],
    explanation: "Use 〜ように言う to report an instruction or request someone gave, without quoting it word for word.",
    notes: "Other verbs work the same way: 〜ように頼む (ask), 〜ように伝える (pass on the message).",
    examples: [
      { ja: "先生は学生に静かにするように言いました。", kana: "せんせいは がくせいに しずかに する ように いいました。", romaji: "Sensei wa gakusei ni shizuka ni suru you ni iimashita.", en: "The teacher told the students to be quiet." },
      { ja: "田中さんに、明日早く来るように伝えてください。", kana: "たなかさんに、あした はやく くる ように つたえて ください。", romaji: "Tanaka-san ni, ashita hayaku kuru you ni tsutaete kudasai.", en: "Please tell Tanaka-san to come early tomorrow." },
    ],
  },
  // ---------- Guessing & Hearsay ----------
  {
    id: "sou-looks", pattern: "〜そうだ (様子)", meaning: "looks ~ / looks like it's about to ~", category: "guessing",
    structure: ["い-adj (drop い) + そうです (おいしい → おいしそう); いい → よさそう", "な-adj + そうです (元気そう)", "Verb ます-stem + そうです (ふりそう, おちそう)"],
    explanation: "This そう describes your impression from what you see: something looks tasty, looks difficult, or looks like it's about to happen.",
    notes: "Before a noun, use そうな: おいしそうなケーキ. Negative: おいしくなさそう. You can't use it for things that are obvious at a glance, like きれい.",
    examples: [
      { ja: "このケーキはおいしそうですね。", kana: "この ケーキは おいしそうですね。", romaji: "Kono keeki wa oishisou desu ne.", en: "This cake looks delicious." },
      { ja: "空が暗いですね。雨がふりそうです。", kana: "そらが くらいですね。あめが ふりそうです。", romaji: "Sora ga kurai desu ne. Ame ga furisou desu.", en: "The sky is dark. It looks like it's going to rain." },
    ],
  },
  {
    id: "sou-hearsay", pattern: "〜そうだ (伝聞)", meaning: "I heard that ~, they say ~", category: "guessing",
    structure: ["Verb / い-adj plain form + そうです (ふるそう, おいしいそう)", "Noun / な-adj + だそうです"],
    explanation: "This そう passes on information you heard or read somewhere else. It attaches to the full plain form.",
    notes: "Compare: おいしそう (it looks tasty) vs おいしいそう (I heard it's tasty). The source often comes first with 〜によると.",
    examples: [
      { ja: "天気予報によると、明日は雪がふるそうです。", kana: "てんきよほうに よると、あしたは ゆきが ふる そうです。", romaji: "Tenki yohou ni yoru to, ashita wa yuki ga furu sou desu.", en: "According to the weather forecast, it's going to snow tomorrow." },
      { ja: "山田さんは来月結婚するそうです。", kana: "やまださんは らいげつ けっこんする そうです。", romaji: "Yamada-san wa raigetsu kekkon suru sou desu.", en: "I heard Yamada-san is getting married next month." },
    ],
  },
  {
    id: "ni-yoru-to", pattern: "〜によると", meaning: "according to ~", category: "guessing",
    structure: ["Noun (source) + によると + 〜そうです / 〜らしいです"],
    explanation: "〜によると names where your information comes from, such as the news, a forecast or a person.",
    notes: "The sentence usually ends with a hearsay word like そうです or らしいです.",
    examples: [
      { ja: "ニュースによると、電車が止まっているそうです。", kana: "ニュースに よると、でんしゃが とまって いる そうです。", romaji: "Nyuusu ni yoru to, densha ga tomatte iru sou desu.", en: "According to the news, the trains have stopped." },
      { ja: "友達の話によると、あのレストランはとても高いらしいです。", kana: "ともだちの はなしに よると、あの レストランは とても たかい らしいです。", romaji: "Tomodachi no hanashi ni yoru to, ano resutoran wa totemo takai rashii desu.", en: "According to my friend, that restaurant is really expensive." },
    ],
  },
  {
    id: "you-da", pattern: "〜ようだ", meaning: "it seems ~ (my judgment from what I see)", category: "guessing",
    structure: ["Verb / い-adj plain form + ようです", "な-adj + な + ようです; Noun + の + ようです"],
    explanation: "〜ようだ gives your guess based on what you have noticed yourself, like signs or clues. It sounds careful and a little formal.",
    notes: "In conversation, みたい is the casual version. 〜ようだ can also mean “like ~”: 夢のようです (it's like a dream).",
    examples: [
      { ja: "かぎがかかっていますね。だれもいないようです。", kana: "かぎが かかって いますね。だれも いない ようです。", romaji: "Kagi ga kakatte imasu ne. Dare mo inai you desu.", en: "It's locked. It seems nobody's home." },
      { ja: "田中さんはかぜのようです。せきをしています。", kana: "たなかさんは かぜの ようです。せきを して います。", romaji: "Tanaka-san wa kaze no you desu. Seki o shite imasu.", en: "Tanaka-san seems to have a cold. He's coughing." },
    ],
  },
  {
    id: "mitai", pattern: "〜みたい", meaning: "seems like ~, looks like ~ (casual)", category: "guessing",
    structure: ["Verb / い-adj plain form + みたいです", "Noun / な-adj + みたいです (no な or の)"],
    explanation: "みたい is the everyday, casual version of 〜ようだ. Use it to share a guess based on what you see or hear.",
    notes: "Nouns and な-adjectives connect directly: 学生みたい, 元気みたい. With friends, drop です: 雨みたい.",
    examples: [
      { ja: "あの人は先生みたいですね。", kana: "あの ひとは せんせい みたいですね。", romaji: "Ano hito wa sensei mitai desu ne.", en: "That person seems to be a teacher." },
      { ja: "外は雨がふっているみたいだよ。", kana: "そとは あめが ふって いる みたいだよ。", romaji: "Soto wa ame ga futte iru mitai da yo.", en: "It looks like it's raining outside." },
    ],
  },
  {
    id: "you-na-like", pattern: "〜のような / 〜みたいな", meaning: "like ~ (comparison, example)", category: "guessing",
    structure: ["Noun + のような + Noun / Noun + のように + Verb・Adj", "Noun + みたいな + Noun / Noun + みたいに + Verb・Adj (casual)"],
    explanation: "Use these to compare something to something else (“like a ~”) or to give an example of a type (“someone like ~”).",
    notes: "ような / みたいな go before nouns; ように / みたいに go before verbs and adjectives.",
    examples: [
      { ja: "田中さんは歌手のように歌が上手です。", kana: "たなかさんは かしゅの ように うたが じょうずです。", romaji: "Tanaka-san wa kashu no you ni uta ga jouzu desu.", en: "Tanaka-san sings as well as a professional singer." },
      { ja: "私は山田さんみたいな先生になりたいです。", kana: "わたしは やまださん みたいな せんせいに なりたいです。", romaji: "Watashi wa Yamada-san mitai na sensei ni naritai desu.", en: "I want to become a teacher like Yamada-san." },
    ],
  },
  {
    id: "rashii", pattern: "〜らしい", meaning: "apparently ~, I hear ~", category: "guessing",
    structure: ["Verb / い-adj plain form + らしいです", "Noun / な-adj + らしいです"],
    explanation: "〜らしい shares something you heard or read, with a feeling of “it seems so, but I'm not sure”. It is less direct than そうだ (hearsay).",
    notes: "Noun + らしい can also mean “typical of”: 子どもらしい (childlike), 春らしい天気 (real spring weather).",
    examples: [
      { ja: "駅の前に新しいカフェができたらしいです。", kana: "えきの まえに あたらしい カフェが できた らしいです。", romaji: "Eki no mae ni atarashii kafe ga dekita rashii desu.", en: "Apparently a new cafe has opened in front of the station." },
      { ja: "田中さんは今日休みらしいですよ。", kana: "たなかさんは きょう やすみ らしいですよ。", romaji: "Tanaka-san wa kyou yasumi rashii desu yo.", en: "Apparently Tanaka-san is off today." },
    ],
  },
  {
    id: "hazu", pattern: "〜はずだ", meaning: "should be ~, is expected to ~", category: "guessing",
    structure: ["Verb / い-adj plain form + はずです", "な-adj + な + はずです; Noun + の + はずです"],
    explanation: "〜はずだ is a strong guess based on facts or logic: “it should be so”. It is often used when something is expected but not certain.",
    notes: "Compare でしょう (probably) — はず is more confident because you have a reason.",
    examples: [
      { ja: "にもつは明日着くはずです。", kana: "にもつは あした つく はずです。", romaji: "Nimotsu wa ashita tsuku hazu desu.", en: "The package should arrive tomorrow." },
      { ja: "山田さんは会議に来るはずですが、まだ来ていません。", kana: "やまださんは かいぎに くる はずですが、まだ きて いません。", romaji: "Yamada-san wa kaigi ni kuru hazu desu ga, mada kite imasen.", en: "Yamada-san is supposed to come to the meeting, but he hasn't arrived yet." },
    ],
  },
  {
    id: "hazu-ga-nai", pattern: "〜はずがない", meaning: "there's no way ~, it can't be ~", category: "guessing",
    structure: ["Verb / い-adj plain form + はずがありません", "な-adj + な / Noun + の + はずがありません"],
    explanation: "〜はずがない means you strongly believe something is impossible or can't be true.",
    notes: "Casual: 〜はずがない / 〜はずない. Don't confuse it with 〜ないはずだ (it's probably not ~), which is much softer.",
    examples: [
      { ja: "あのまじめな田中さんがうそをつくはずがありません。", kana: "あの まじめな たなかさんが うそを つく はずが ありません。", romaji: "Ano majime na Tanaka-san ga uso o tsuku hazu ga arimasen.", en: "There's no way honest Tanaka-san would tell a lie." },
      { ja: "こんなに安いはずがないよ。", kana: "こんなに やすい はずが ないよ。", romaji: "Konna ni yasui hazu ga nai yo.", en: "There's no way it's this cheap." },
    ],
  },
  {
    id: "kamoshirenai", pattern: "〜かもしれない", meaning: "might ~, may ~", category: "guessing",
    structure: ["Verb / い-adj plain form + かもしれません", "Noun / な-adj + かもしれません"],
    explanation: "〜かもしれない says something is possible, but you're only about 50% sure.",
    notes: "Casual speech often shortens it to 〜かも: 雨がふるかも.",
    examples: [
      { ja: "明日は雨がふるかもしれません。", kana: "あしたは あめが ふるかも しれません。", romaji: "Ashita wa ame ga furu kamo shiremasen.", en: "It might rain tomorrow." },
      { ja: "この答えはまちがっているかもしれない。", kana: "この こたえは まちがって いるかも しれない。", romaji: "Kono kotae wa machigatte iru kamo shirenai.", en: "This answer might be wrong." },
    ],
  },
  {
    id: "deshou", pattern: "〜でしょう / 〜だろう", meaning: "probably ~ / ~, right?", category: "guessing",
    structure: ["Verb / い-adj plain form + でしょう", "Noun / な-adj + でしょう", "Casual: 〜だろう; checking: 〜でしょう？ / 〜でしょ？"],
    explanation: "〜でしょう makes a guess (“probably”), often in weather forecasts. With rising intonation, it checks that the listener agrees: “…, right?”.",
    notes: "It is often used with きっと (surely) or たぶん (probably). だろう is the plain form, used in writing and by some speakers in casual talk.",
    examples: [
      { ja: "明日はきっといい天気になるでしょう。", kana: "あしたは きっと いい てんきに なるでしょう。", romaji: "Ashita wa kitto ii tenki ni naru deshou.", en: "It will surely be nice weather tomorrow." },
      { ja: "このかばん、高かったでしょう？", kana: "この かばん、たかかったでしょう？", romaji: "Kono kaban, takakatta deshou?", en: "This bag was expensive, wasn't it?" },
    ],
  },
  {
    id: "ga-suru", pattern: "〜がする", meaning: "there is a smell / sound / taste / feeling of ~", category: "guessing",
    structure: ["におい / 音 / 声 / 味 + がします", "〜ような気がします (I have a feeling that ~)"],
    explanation: "Use 〜がする for things you notice with your senses: a smell, a sound, a taste. 気がする means “I have a feeling”.",
    notes: "The thing you sense takes が, and する is used even though nobody is “doing” anything.",
    examples: [
      { ja: "台所からいいにおいがします。", kana: "だいどころから いい においが します。", romaji: "Daidokoro kara ii nioi ga shimasu.", en: "There's a nice smell coming from the kitchen." },
      { ja: "外で変な音がしました。", kana: "そとで へんな おとが しました。", romaji: "Soto de hen na oto ga shimashita.", en: "I heard a strange noise outside." },
    ],
  },
  {
    id: "kana-kashira", pattern: "〜かな / 〜かしら", meaning: "I wonder ~", category: "guessing",
    structure: ["Plain form + かな", "Plain form + かしら (softer, used mostly by women)"],
    explanation: "Add かな to the end of a casual sentence when you wonder about something or talk to yourself.",
    notes: "〜ないかな can express a wish: 早く来ないかな (I wish they'd come soon). Nouns and な-adjectives connect directly: 本当かな.",
    examples: [
      { ja: "明日は晴れるかな。", kana: "あしたは はれるかな。", romaji: "Ashita wa hareru ka na.", en: "I wonder if it'll be sunny tomorrow." },
      { ja: "田中さん、もう家に着いたかしら。", kana: "たなかさん、もう いえに ついたかしら。", romaji: "Tanaka-san, mou ie ni tsuita kashira.", en: "I wonder if Tanaka-san has gotten home yet." },
    ],
  },
  {
    id: "janai-ka", pattern: "〜んじゃないか / 〜じゃないですか", meaning: "isn't it ~? (I think so)", category: "guessing",
    structure: ["Verb / い-adj plain form + んじゃないですか", "Noun / な-adj + じゃないですか", "Casual: 〜んじゃない？"],
    explanation: "This pattern shares your opinion softly, like “Isn't it ~?” or “I think ~, don't you?”. It is not really a negative.",
    notes: "More formal: 〜のではないでしょうか. Say it with rising intonation.",
    examples: [
      { ja: "この道、ちがうんじゃない？", kana: "この みち、ちがうんじゃ ない？", romaji: "Kono michi, chigau n ja nai?", en: "Isn't this the wrong road?" },
      { ja: "田中さんはもう帰ったんじゃないですか。", kana: "たなかさんは もう かえったんじゃ ないですか。", romaji: "Tanaka-san wa mou kaetta n ja nai desu ka.", en: "Hasn't Tanaka-san already gone home?" },
    ],
  },

  // ---------- Reasons, Connecting & More ----------
  {
    id: "node", pattern: "〜ので", meaning: "because ~, since ~ (soft reason)", category: "connecting",
    structure: ["Verb / い-adj plain form + ので", "Noun / な-adj + なので"],
    explanation: "〜ので gives a reason, like から, but sounds softer and more polite. It is good for explaining or making excuses.",
    notes: "In polite speech you can also say 〜ますので. Nouns need な: 雨なので (not 雨ので).",
    examples: [
      { ja: "頭が痛いので、今日は早く帰ります。", kana: "あたまが いたいので、きょうは はやく かえります。", romaji: "Atama ga itai node, kyou wa hayaku kaerimasu.", en: "I have a headache, so I'll go home early today." },
      { ja: "明日は休みなので、ゆっくり寝ます。", kana: "あしたは やすみなので、ゆっくり ねます。", romaji: "Ashita wa yasumi na node, yukkuri nemasu.", en: "Tomorrow is my day off, so I'll sleep in." },
    ],
  },
  {
    id: "noni-despite", pattern: "〜のに (逆接)", meaning: "even though ~, despite ~", category: "connecting",
    structure: ["Verb / い-adj plain form + のに", "Noun / な-adj + なのに"],
    explanation: "〜のに shows that the result is different from what you expected. It often carries a feeling of surprise, disappointment or complaint.",
    notes: "Don't end the second part with a request or your own plan. For a neutral “but”, use が or けど.",
    examples: [
      { ja: "たくさん勉強したのに、テストの点が悪かったです。", kana: "たくさん べんきょうしたのに、テストの てんが わるかったです。", romaji: "Takusan benkyou shita noni, tesuto no ten ga warukatta desu.", en: "Even though I studied a lot, I got a bad score on the test." },
      { ja: "日曜日なのに、会社へ行かなければなりません。", kana: "にちようびなのに、かいしゃへ いかなければ なりません。", romaji: "Nichiyoubi na noni, kaisha e ikanakereba narimasen.", en: "Even though it's Sunday, I have to go to work." },
    ],
  },
  {
    id: "shi", pattern: "〜し", meaning: "and also ~ (listing reasons)", category: "connecting",
    structure: ["Plain form + し、Plain form + し、…", "Noun / な-adj + だし"],
    explanation: "〜し lists several reasons or points together, as if saying “not only that, but also …”. The conclusion often comes at the end.",
    notes: "You can give just one reason with し to hint there are more: 時間もないし… (I don't have time, and…).",
    examples: [
      { ja: "この部屋は広いし、駅から近いし、とてもいいです。", kana: "この へやは ひろいし、えきから ちかいし、とても いいです。", romaji: "Kono heya wa hiroi shi, eki kara chikai shi, totemo ii desu.", en: "This room is spacious and close to the station, so it's great." },
      { ja: "今日は雨だし、寒いし、どこにも行きたくない。", kana: "きょうは あめだし、さむいし、どこにも いきたくない。", romaji: "Kyou wa ame da shi, samui shi, doko ni mo ikitakunai.", en: "It's rainy and cold today, so I don't want to go anywhere." },
    ],
  },
  {
    id: "nagara", pattern: "〜ながら", meaning: "while ~ing (two actions at once)", category: "connecting",
    structure: ["Verb ます-stem + ながら + main action"],
    explanation: "〜ながら says one person does two things at the same time. The main action comes at the end of the sentence.",
    notes: "Both actions must be done by the same person. For two different people, use 〜間 or 〜ているとき.",
    examples: [
      { ja: "音楽を聞きながら勉強します。", kana: "おんがくを ききながら べんきょうします。", romaji: "Ongaku o kikinagara benkyou shimasu.", en: "I study while listening to music." },
      { ja: "歩きながらスマホを見ないでください。", kana: "あるきながら スマホを みないで ください。", romaji: "Arukinagara sumaho o minaide kudasai.", en: "Please don't look at your phone while walking." },
    ],
  },
  {
    id: "aida", pattern: "〜間 / 〜間に", meaning: "during ~, while ~ (the whole time / at some point)", category: "connecting",
    structure: ["Verb ている / Noun + の + 間 (the whole time)", "Verb ている / Noun + の + 間に (at some point during)"],
    explanation: "〜間 means something continues for the whole period. 〜間に means something happens once, at some point within that period.",
    notes: "Compare: 夏休みの間、ずっと… (all summer) vs 夏休みの間に、… (sometime during summer).",
    examples: [
      { ja: "夏休みの間、ずっとそぼの家にいました。", kana: "なつやすみの あいだ、ずっと そぼの いえに いました。", romaji: "Natsuyasumi no aida, zutto sobo no ie ni imashita.", en: "I stayed at my grandmother's house for the whole summer vacation." },
      { ja: "母が寝ている間に、料理を作りました。", kana: "ははが ねて いる あいだに、りょうりを つくりました。", romaji: "Haha ga nete iru aida ni, ryouri o tsukurimashita.", en: "I cooked while my mother was sleeping." },
    ],
  },
  {
    id: "made-ni", pattern: "〜までに", meaning: "by ~ (a deadline)", category: "connecting",
    structure: ["Noun (time) + までに", "Verb dictionary form + までに"],
    explanation: "〜までに sets a deadline: the action must be done at some point before that time.",
    notes: "Compare まで (until): 五時まで働く = work until five (the whole time). 五時までに帰る = get back by five.",
    examples: [
      { ja: "五時までに帰ってきてください。", kana: "ごじまでに かえって きて ください。", romaji: "Goji made ni kaette kite kudasai.", en: "Please come back by five o'clock." },
      { ja: "日本へ行くまでに、ひらがなを全部覚えたいです。", kana: "にほんへ いくまでに、ひらがなを ぜんぶ おぼえたいです。", romaji: "Nihon e iku made ni, hiragana o zenbu oboetai desu.", en: "I want to learn all the hiragana before I go to Japan." },
    ],
  },
  {
    id: "ka-dou-ka", pattern: "〜かどうか", meaning: "whether or not ~", category: "connecting",
    structure: ["Verb / い-adj plain form + かどうか", "Noun / な-adj + かどうか"],
    explanation: "〜かどうか puts a yes/no question inside a bigger sentence, often with わかりません, 知りません or 聞いてみます.",
    notes: "For questions with a question word (どこ, 何, いつ), use just か instead: どこにあるか.",
    examples: [
      { ja: "明日パーティーに行けるかどうか、わかりません。", kana: "あした パーティーに いけるか どうか、わかりません。", romaji: "Ashita paatii ni ikeru ka dou ka, wakarimasen.", en: "I don't know whether I can go to the party tomorrow." },
      { ja: "この服がにあうかどうか、ちょっと着てみます。", kana: "この ふくが にあうか どうか、ちょっと きて みます。", romaji: "Kono fuku ga niau ka dou ka, chotto kite mimasu.", en: "I'll try these clothes on to see whether they suit me." },
    ],
  },
  {
    id: "question-ka", pattern: "Question word + 〜か", meaning: "embedded question (where / what / when …)", category: "connecting",
    structure: ["Question word + Verb / Adj plain form + か + 知っています / わかりません / 教えてください"],
    explanation: "To put a question like “Where is it?” inside a sentence, use the plain form + か. The whole question becomes part of the sentence.",
    notes: "Nouns and な-adjectives drop だ: 何の本か, いつがひまか.",
    examples: [
      { ja: "駅はどこにあるか知っていますか。", kana: "えきは どこに あるか しって いますか。", romaji: "Eki wa doko ni aru ka shitte imasu ka.", en: "Do you know where the station is?" },
      { ja: "パーティーに何を着ていくか、まだ決めていません。", kana: "パーティーに なにを きて いくか、まだ きめて いません。", romaji: "Paatii ni nani o kite iku ka, mada kimete imasen.", en: "I haven't decided yet what to wear to the party." },
    ],
  },
  {
    id: "to-iu", pattern: "〜という", meaning: "called ~, named ~", category: "connecting",
    structure: ["Name + という + Noun", "Sentence + ということ (the fact that ~)"],
    explanation: "〜という introduces the name of something the listener may not know: “a place called ~”, “a person named ~”.",
    notes: "In casual speech it often becomes って: たこやきって食べ物.",
    examples: [
      { ja: "これは「たこやき」という食べ物です。", kana: "これは 「たこやき」と いう たべものです。", romaji: "Kore wa 'takoyaki' to iu tabemono desu.", en: "This is a food called 'takoyaki'." },
      { ja: "「さくら」という店を知っていますか。", kana: "「さくら」と いう みせを しって いますか。", romaji: "'Sakura' to iu mise o shitte imasu ka.", en: "Do you know a shop called 'Sakura'?" },
    ],
  },
  {
    id: "tte", pattern: "〜って", meaning: "casual quote / “about ~” (= と, という, は)", category: "connecting",
    structure: ["Sentence + って (= と言っていた)", "Noun + って (= は / という)"],
    explanation: "って is a casual word used in speech. It can pass on what someone said, or bring up a topic you want to ask about.",
    notes: "Use it with friends. In polite or written Japanese, use と, という or は.",
    examples: [
      { ja: "田中さん、今日来ないって。", kana: "たなかさん、きょう こないって。", romaji: "Tanaka-san, kyou konai tte.", en: "Tanaka-san says he isn't coming today." },
      { ja: "「いただきます」って、英語で何と言いますか。", kana: "「いただきます」って、えいごで なんと いいますか。", romaji: "'Itadakimasu' tte, eigo de nan to iimasu ka.", en: "How do you say 'itadakimasu' in English?" },
    ],
  },
  {
    id: "to-itte-ita", pattern: "〜と言っていました", meaning: "(someone) said that ~", category: "connecting",
    structure: ["Plain form + と言っていました"],
    explanation: "Use this to pass on a message or report what someone told you. The plain form goes before と.",
    notes: "〜と言っていました is used to relay a message; 〜と言いました simply reports the words someone said.",
    examples: [
      { ja: "山田さんは明日休むと言っていました。", kana: "やまださんは あした やすむと いって いました。", romaji: "Yamada-san wa ashita yasumu to itte imashita.", en: "Yamada-san said he's taking the day off tomorrow." },
      { ja: "先生はテストは難しくないと言っていましたよ。", kana: "せんせいは テストは むずかしくないと いって いましたよ。", romaji: "Sensei wa tesuto wa muzukashikunai to itte imashita yo.", en: "The teacher said the test won't be hard." },
    ],
  },
  {
    id: "toka", pattern: "〜とか〜とか", meaning: "things like ~ and ~ (examples)", category: "connecting",
    structure: ["Noun + とか + Noun + とか", "Verb plain form + とか + Verb plain form + とか"],
    explanation: "〜とか gives a few examples from a longer list, a lot like 〜や〜など but more casual.",
    notes: "It can also be used with just one example: 映画とか見ない？ (Want to watch a movie or something?).",
    examples: [
      { ja: "休みの日は、そうじとかせんたくとかをします。", kana: "やすみの ひは、そうじとか せんたくとかを します。", romaji: "Yasumi no hi wa, souji toka sentaku toka o shimasu.", en: "On my days off, I do things like cleaning and laundry." },
      { ja: "くだものなら、りんごとかみかんとかが好きです。", kana: "くだものなら、りんごとか みかんとかが すきです。", romaji: "Kudamono nara, ringo toka mikan toka ga suki desu.", en: "When it comes to fruit, I like things like apples and mandarins." },
    ],
  },
  {
    id: "bakari", pattern: "〜ばかり", meaning: "only ~, nothing but ~", category: "connecting",
    structure: ["Noun + ばかり", "Verb て-form + ばかりいます"],
    explanation: "〜ばかり says someone does only one thing, or there is only one kind of thing, often with a feeling of complaint.",
    notes: "Compare だけ (just, only), which is neutral. ばかり suggests “too much of one thing”.",
    examples: [
      { ja: "弟は毎日ゲームばかりしています。", kana: "おとうとは まいにち ゲームばかり して います。", romaji: "Otouto wa mainichi geemu bakari shite imasu.", en: "My younger brother does nothing but play games every day." },
      { ja: "あまいものばかり食べないで、野菜も食べなさい。", kana: "あまい ものばかり たべないで、やさいも たべなさい。", romaji: "Amai mono bakari tabenaide, yasai mo tabenasai.", en: "Don't eat only sweets. Eat your vegetables too." },
    ],
  },
  {
    id: "demo", pattern: "〜でも", meaning: "~ or something (soft suggestion) / even ~", category: "connecting",
    structure: ["Noun + でも + Verb (suggestion)", "Noun + でも (even ~)"],
    explanation: "In invitations, でも makes a suggestion softer: “some tea or something”. It can also mean “even”, showing something is easy or true for everyone.",
    notes: "Question word + でも means “any ~”: いつでも (anytime), だれでも (anyone), 何でも (anything).",
    examples: [
      { ja: "お茶でも飲みませんか。", kana: "おちゃでも のみませんか。", romaji: "Ocha demo nomimasen ka.", en: "Would you like to have some tea or something?" },
      { ja: "この問題は子どもでもわかります。", kana: "この もんだいは こどもでも わかります。", romaji: "Kono mondai wa kodomo demo wakarimasu.", en: "Even a child can understand this problem." },
    ],
  },
  {
    id: "hodo-nai", pattern: "〜ほど〜ない", meaning: "not as ~ as …", category: "connecting",
    structure: ["A + は + B + ほど + Adj negative (A is not as ~ as B)", "Verb た-form + ほど + Adj negative (not as ~ as I thought)"],
    explanation: "Use 〜ほど〜ない to compare two things and say that A doesn't reach the level of B.",
    notes: "The adjective is always negative. Compare 〜より〜ほうが for “A is more ~ than B”.",
    examples: [
      { ja: "今年の夏は去年ほど暑くないです。", kana: "ことしの なつは きょねんほど あつくないです。", romaji: "Kotoshi no natsu wa kyonen hodo atsukunai desu.", en: "This summer isn't as hot as last year." },
      { ja: "日本語は思ったほど難しくありません。", kana: "にほんごは おもったほど むずかしく ありません。", romaji: "Nihongo wa omotta hodo muzukashiku arimasen.", en: "Japanese isn't as hard as I thought." },
    ],
  },
  {
    id: "juu-chuu", pattern: "〜中 (じゅう / ちゅう)", meaning: "all through ~ / in the middle of ~", category: "connecting",
    structure: ["Time / place + 中 (じゅう): 一日中, 世界中", "Action noun + 中 (ちゅう): 会議中, 電話中, 勉強中"],
    explanation: "Read as じゅう, 中 means “throughout” a time or place. Read as ちゅう, it means something is going on right now.",
    notes: "You often see 〜中 on signs: 準備中 (getting ready), 営業中 (open for business).",
    examples: [
      { ja: "昨日は一日中雨でした。", kana: "きのうは いちにちじゅう あめでした。", romaji: "Kinou wa ichinichijuu ame deshita.", en: "It rained all day yesterday." },
      { ja: "父は今、電話中です。", kana: "ちちは いま、でんわちゅうです。", romaji: "Chichi wa ima, denwachuu desu.", en: "My father is on the phone right now." },
    ],
  },
  {
    id: "hitsuyou", pattern: "〜必要がある / 〜が必要だ", meaning: "need to ~ / ~ is necessary", category: "connecting",
    structure: ["Verb dictionary form + 必要があります", "Noun + が必要です"],
    explanation: "Use these to say something is needed. 必要がない / 必要はない means “there's no need to ~”.",
    notes: "〜必要はありません is a polite way to say “you don't have to”, similar to 〜なくてもいいです.",
    examples: [
      { ja: "ビザをもらうには、パスポートが必要です。", kana: "ビザを もらうには、パスポートが ひつようです。", romaji: "Biza o morau ni wa, pasupooto ga hitsuyou desu.", en: "You need a passport to get a visa." },
      { ja: "毎日来る必要はありません。", kana: "まいにち くる ひつようは ありません。", romaji: "Mainichi kuru hitsuyou wa arimasen.", en: "There's no need to come every day." },
    ],
  },
  // ---------- Changes, Decisions & Degree ----------
  {
    id: "you-ni-naru", pattern: "〜ようになる", meaning: "come to ~, become able to ~", category: "changes",
    structure: ["Verb dictionary / potential form + ようになります", "Verb ない-form (drop い) + くなります (stop ~ing)"],
    explanation: "〜ようになる describes a change in ability or habit over time: you can now do something you couldn't before, or you started doing it.",
    notes: "For the opposite change, use 〜なくなる: 食べなくなった (stopped eating). For adjectives and nouns, use 〜くなる / 〜になる.",
    examples: [
      { ja: "日本語が少し話せるようになりました。", kana: "にほんごが すこし はなせる ように なりました。", romaji: "Nihongo ga sukoshi hanaseru you ni narimashita.", en: "I've become able to speak a little Japanese." },
      { ja: "子どもは最近、野菜を食べるようになりました。", kana: "こどもは さいきん、やさいを たべる ように なりました。", romaji: "Kodomo wa saikin, yasai o taberu you ni narimashita.", en: "My child has recently started eating vegetables." },
    ],
  },
  {
    id: "koto-ni-naru", pattern: "〜ことになる", meaning: "it has been decided that ~ (not by me)", category: "changes",
    structure: ["Verb dictionary / ない form + ことになりました", "Rule: 〜ことになっています"],
    explanation: "〜ことになる reports a decision made by someone else or by circumstances, such as your company or a group.",
    notes: "〜ことになっている describes a rule or custom: “it is arranged that ~”.",
    examples: [
      { ja: "来月から大阪で働くことになりました。", kana: "らいげつから おおさかで はたらく ことに なりました。", romaji: "Raigetsu kara Oosaka de hataraku koto ni narimashita.", en: "It's been decided that I'll work in Osaka from next month." },
      { ja: "会議は金曜日にすることになっています。", kana: "かいぎは きんようびに する ことに なって います。", romaji: "Kaigi wa kin'youbi ni suru koto ni natte imasu.", en: "The meeting is set to be held on Friday." },
    ],
  },
  {
    id: "koto-ni-suru", pattern: "〜ことにする", meaning: "decide to ~ (by myself)", category: "changes",
    structure: ["Verb dictionary / ない form + ことにします / ことにしました", "Habit: 〜ことにしています"],
    explanation: "〜ことにする shows a decision you make yourself. The past form 〜ことにしました is very common for decisions already made.",
    notes: "〜ことにしている means “I make it a rule to ~”. Compare 〜ことになる, where someone else decided.",
    examples: [
      { ja: "今年から毎朝走ることにしました。", kana: "ことしから まいあさ はしる ことに しました。", romaji: "Kotoshi kara maiasa hashiru koto ni shimashita.", en: "I've decided to go running every morning starting this year." },
      { ja: "今日は外で食べないで、家で作ることにします。", kana: "きょうは そとで たべないで、いえで つくる ことに します。", romaji: "Kyou wa soto de tabenaide, ie de tsukuru koto ni shimasu.", en: "I'll skip eating out today and cook at home." },
    ],
  },
  {
    id: "ku-suru", pattern: "〜くする / 〜にする", meaning: "make something ~", category: "changes",
    structure: ["い-adj (drop い) + くします (小さい → 小さくする)", "な-adj / Noun + にします (きれい → きれいにする)"],
    explanation: "〜くする / 〜にする mean someone changes something on purpose. Compare 〜くなる / 〜になる, where something changes by itself.",
    notes: "Noun + にする also means “decide on / choose”: コーヒーにします (I'll have coffee).",
    examples: [
      { ja: "音が大きいので、少し小さくしてください。", kana: "おとが おおきいので、すこし ちいさく して ください。", romaji: "Oto ga ookii node, sukoshi chiisaku shite kudasai.", en: "It's loud, so please turn it down a little." },
      { ja: "お客さんが来るので、部屋をきれいにしました。", kana: "おきゃくさんが くるので、へやを きれいに しました。", romaji: "Okyakusan ga kuru node, heya o kirei ni shimashita.", en: "Guests are coming, so I tidied up the room." },
    ],
  },
  {
    id: "hajimeru", pattern: "〜始める", meaning: "start ~ing", category: "changes",
    structure: ["Verb ます-stem + 始めます"],
    explanation: "Add 始める to the ます-stem to say an action starts. It works for actions and for natural changes.",
    notes: "It is often used with things that continue for a while: 読み始める, 習い始める, ふり始める.",
    examples: [
      { ja: "去年から日本語を習い始めました。", kana: "きょねんから にほんごを ならいはじめました。", romaji: "Kyonen kara nihongo o naraihajimemashita.", en: "I started learning Japanese last year." },
      { ja: "この本は先週読み始めたばかりです。", kana: "この ほんは せんしゅう よみはじめた ばかりです。", romaji: "Kono hon wa senshuu yomihajimeta bakari desu.", en: "I only started reading this book last week." },
    ],
  },
  {
    id: "dasu", pattern: "〜出す", meaning: "suddenly start ~ing", category: "changes",
    structure: ["Verb ます-stem + 出します"],
    explanation: "〜出す is like 〜始める, but the start is sudden or unexpected. It is common with rain, crying, laughing and running.",
    notes: "It is often used with 急に (suddenly). You can't use it for invitations: say 食べ始めましょう, not 食べ出しましょう.",
    examples: [
      { ja: "急に雨がふり出しました。", kana: "きゅうに あめが ふりだしました。", romaji: "Kyuu ni ame ga furidashimashita.", en: "It suddenly started raining." },
      { ja: "赤ちゃんが急に泣き出しました。", kana: "あかちゃんが きゅうに なきだしました。", romaji: "Akachan ga kyuu ni nakidashimashita.", en: "The baby suddenly started crying." },
    ],
  },
  {
    id: "tsuzukeru", pattern: "〜続ける", meaning: "keep ~ing, continue ~ing", category: "changes",
    structure: ["Verb ます-stem + 続けます"],
    explanation: "〜続ける says an action goes on without stopping, or that you keep doing it for a long time.",
    notes: "Past and future both work: 三時間歩き続けた, これからも続けたい.",
    examples: [
      { ja: "三時間歩き続けて、とてもつかれました。", kana: "さんじかん あるきつづけて、とても つかれました。", romaji: "Sanjikan arukitsuzukete, totemo tsukaremashita.", en: "I kept walking for three hours and got really tired." },
      { ja: "これからも日本語を勉強し続けたいです。", kana: "これからも にほんごを べんきょうしつづけたいです。", romaji: "Kore kara mo nihongo o benkyou shitsuzuketai desu.", en: "I want to keep studying Japanese from now on, too." },
    ],
  },
  {
    id: "owaru", pattern: "〜終わる", meaning: "finish ~ing", category: "changes",
    structure: ["Verb ます-stem + 終わります"],
    explanation: "〜終わる says you finish an action completely, like finishing reading, writing or eating.",
    notes: "〜終わったら (when I finish ~ing) is a very useful combination.",
    examples: [
      { ja: "レポートを書き終わったら、いっしょに帰りましょう。", kana: "レポートを かきおわったら、いっしょに かえりましょう。", romaji: "Repooto o kakiowattara, issho ni kaerimashou.", en: "When I finish writing my report, let's go home together." },
      { ja: "ご飯を食べ終わった人から、外で遊んでもいいですよ。", kana: "ごはんを たべおわった ひとから、そとで あそんでも いいですよ。", romaji: "Gohan o tabeowatta hito kara, soto de asonde mo ii desu yo.", en: "Anyone who has finished eating can go and play outside." },
    ],
  },
  {
    id: "sugiru", pattern: "〜すぎる", meaning: "too ~, too much", category: "changes",
    structure: ["Verb ます-stem + すぎます (食べすぎる)", "い-adj (drop い) + すぎます (高すぎる); な-adj + すぎます (静かすぎる)"],
    explanation: "〜すぎる says something goes past the right level: too much, too big, too hard. It usually sounds negative.",
    notes: "すぎる is a る-verb: すぎて, すぎた. いい → よすぎる; ない → なさすぎる.",
    examples: [
      { ja: "昨日の夜、飲みすぎました。", kana: "きのうの よる、のみすぎました。", romaji: "Kinou no yoru, nomisugimashita.", en: "I drank too much last night." },
      { ja: "この問題は難しすぎて、わかりません。", kana: "この もんだいは むずかしすぎて、わかりません。", romaji: "Kono mondai wa muzukashisugite, wakarimasen.", en: "This problem is too hard. I don't get it." },
    ],
  },
  {
    id: "yasui", pattern: "〜やすい", meaning: "easy to ~", category: "changes",
    structure: ["Verb ます-stem + やすいです"],
    explanation: "〜やすい means an action is easy to do, or that something tends to happen easily.",
    notes: "It conjugates like an い-adjective: 書きやすくない, 書きやすかった. Also “tends to”: かぜをひきやすい.",
    examples: [
      { ja: "このペンはとても書きやすいです。", kana: "この ペンは とても かきやすいです。", romaji: "Kono pen wa totemo kakiyasui desu.", en: "This pen is very easy to write with." },
      { ja: "田中先生の説明はわかりやすいですね。", kana: "たなかせんせいの せつめいは わかりやすいですね。", romaji: "Tanaka-sensei no setsumei wa wakariyasui desu ne.", en: "Tanaka-sensei's explanations are easy to understand, aren't they?" },
    ],
  },
  {
    id: "nikui", pattern: "〜にくい", meaning: "hard to ~, difficult to ~", category: "changes",
    structure: ["Verb ます-stem + にくいです"],
    explanation: "〜にくい means an action is hard to do because of how something is. It is the opposite of 〜やすい.",
    notes: "It conjugates like an い-adjective: 読みにくくて, 読みにくかった.",
    examples: [
      { ja: "この魚はほねが多くて食べにくいです。", kana: "この さかなは ほねが おおくて たべにくいです。", romaji: "Kono sakana wa hone ga ookute tabenikui desu.", en: "This fish has a lot of bones, so it's hard to eat." },
      { ja: "字が小さくて読みにくいです。", kana: "じが ちいさくて よみにくいです。", romaji: "Ji ga chiisakute yominikui desu.", en: "The letters are small and hard to read." },
    ],
  },
  {
    id: "kata", pattern: "〜方", meaning: "how to ~, way of ~ing", category: "changes",
    structure: ["Verb ます-stem + 方 (かた)", "Noun + の + Verb ます-stem + 方"],
    explanation: "Add 方 to the ます-stem to make a noun meaning “the way of doing ~”. It's very useful for asking how to do things.",
    notes: "The object uses の, not を: 漢字の読み方 (not 漢字を読み方). For する-verbs: 勉強の仕方.",
    examples: [
      { ja: "駅までの行き方を教えてください。", kana: "えきまでの いきかたを おしえて ください。", romaji: "Eki made no ikikata o oshiete kudasai.", en: "Please tell me how to get to the station." },
      { ja: "おいしいカレーの作り方を知っていますか。", kana: "おいしい カレーの つくりかたを しって いますか。", romaji: "Oishii karee no tsukurikata o shitte imasu ka.", en: "Do you know how to make tasty curry?" },
    ],
  },

  // ---------- Passive & Causative ----------
  {
    id: "passive", pattern: "受身形 (〜れる / 〜られる)", meaning: "is done (by someone) — passive", category: "passive",
    structure: ["う-verb: change the last u to a + れる (書く → 書かれる, 言う → 言われる)", "る-verb: drop る + られる (見る → 見られる)", "する → される, 来る → 来られる"],
    explanation: "The passive form shows that something is done to the subject. The person who does the action takes に.",
    notes: "For る-verbs, the passive looks the same as the potential form (食べられる); the meaning comes from context.",
    examples: [
      { ja: "私は先生にほめられました。", kana: "わたしは せんせいに ほめられました。", romaji: "Watashi wa sensei ni homeraremashita.", en: "I was praised by my teacher." },
      { ja: "この寺は八百年前に建てられました。", kana: "この てらは はっぴゃくねん まえに たてられました。", romaji: "Kono tera wa happyakunen mae ni tateraremashita.", en: "This temple was built 800 years ago." },
    ],
  },
  {
    id: "passive-suffering", pattern: "迷惑の受身", meaning: "passive for trouble (something happened to me)", category: "passive",
    structure: ["Person + に + (Thing + を) + Verb passive form"],
    explanation: "Japanese often uses the passive to show that the speaker was bothered or troubled by what happened, even with verbs like ふる (rain).",
    notes: "足をふまれた literally means “I was stepped-on (my foot)”. Your body part or thing takes を.",
    examples: [
      { ja: "電車でだれかに足をふまれました。", kana: "でんしゃで だれかに あしを ふまれました。", romaji: "Densha de dareka ni ashi o fumaremashita.", en: "Someone stepped on my foot on the train." },
      { ja: "昨日は雨にふられて、服がぬれてしまいました。", kana: "きのうは あめに ふられて、ふくが ぬれて しまいました。", romaji: "Kinou wa ame ni furarete, fuku ga nurete shimaimashita.", en: "I got caught in the rain yesterday, and my clothes got wet." },
    ],
  },
  {
    id: "causative", pattern: "使役形 (〜せる / 〜させる)", meaning: "make / let someone do ~", category: "passive",
    structure: ["う-verb: change the last u to a + せる (書く → 書かせる, 行く → 行かせる)", "る-verb: drop る + させる (食べる → 食べさせる)", "する → させる, 来る → 来させる"],
    explanation: "The causative form means someone makes or lets another person do something. The person who does the action takes に (or を with verbs like 行く).",
    notes: "Whether it means “make” or “let” depends on context. Don't use it toward people above you.",
    examples: [
      { ja: "母は弟に部屋をそうじさせました。", kana: "ははは おとうとに へやを そうじさせました。", romaji: "Haha wa otouto ni heya o souji sasemashita.", en: "My mother made my younger brother clean the room." },
      { ja: "先生は学生に毎日作文を書かせます。", kana: "せんせいは がくせいに まいにち さくぶんを かかせます。", romaji: "Sensei wa gakusei ni mainichi sakubun o kakasemasu.", en: "The teacher has the students write an essay every day." },
    ],
  },
  {
    id: "sasete-kudasai", pattern: "〜させてください", meaning: "please let me ~", category: "passive",
    structure: ["Verb causative て-form + ください", "Verb causative て-form + くれる / もらう (someone lets me ~)"],
    explanation: "Causative て-form + ください is a polite way to ask for permission to do something yourself: “Please let me ~”.",
    notes: "More polite: 〜させていただけませんか. 〜させてくれる / 〜させてもらう thank someone for letting you do something.",
    examples: [
      { ja: "すみません、ちょっと考えさせてください。", kana: "すみません、ちょっと かんがえさせて ください。", romaji: "Sumimasen, chotto kangaesasete kudasai.", en: "Sorry, please let me think about it for a moment." },
      { ja: "父は私に好きな大学をえらばせてくれました。", kana: "ちちは わたしに すきな だいがくを えらばせて くれました。", romaji: "Chichi wa watashi ni suki na daigaku o erabasete kuremashita.", en: "My father let me choose the university I wanted." },
    ],
  },
  {
    id: "causative-passive", pattern: "使役受身 (〜させられる)", meaning: "be made to do ~ (against my will)", category: "passive",
    structure: ["う-verb: change the last u to a + される (飲む → 飲まされる); す-verbs: 話させられる", "る-verb: drop る + させられる (食べる → 食べさせられる)", "する → させられる, 来る → 来させられる"],
    explanation: "The causative-passive means you were made to do something you didn't want to do. The person who made you takes に.",
    notes: "The long form 〜せられる (飲ませられる) also exists, but 〜される is more common in speech for う-verbs.",
    examples: [
      { ja: "子どものころ、母に野菜を食べさせられました。", kana: "こどもの ころ、ははに やさいを たべさせられました。", romaji: "Kodomo no koro, haha ni yasai o tabesaseraremashita.", en: "When I was a child, my mother made me eat vegetables." },
      { ja: "昨日、部長にお酒を飲まされました。", kana: "きのう、ぶちょうに おさけを のまされました。", romaji: "Kinou, buchou ni osake o nomasaremashita.", en: "Yesterday my manager made me drink alcohol." },
    ],
  },

  // ---------- Polite Language (Keigo) ----------
  {
    id: "honorific-verbs", pattern: "尊敬語 (いらっしゃる・めしあがる・おっしゃる)", meaning: "special respectful verbs (for others' actions)", category: "keigo",
    structure: ["いる / 行く / 来る → いらっしゃる", "食べる / 飲む → めしあがる; 言う → おっしゃる", "する → なさる; 見る → ご覧になる; 知っている → ご存じだ"],
    explanation: "Respectful language (尊敬語) raises the other person. Use these special verbs for the actions of teachers, customers and bosses — never for yourself.",
    notes: "いらっしゃる, おっしゃる and なさる have irregular ます-forms: いらっしゃいます, おっしゃいます, なさいます.",
    examples: [
      { ja: "社長は今、会議室にいらっしゃいます。", kana: "しゃちょうは いま、かいぎしつに いらっしゃいます。", romaji: "Shachou wa ima, kaigishitsu ni irasshaimasu.", en: "The company president is in the meeting room now." },
      { ja: "先生、何をめしあがりますか。", kana: "せんせい、なにを めしあがりますか。", romaji: "Sensei, nani o meshiagarimasu ka.", en: "What would you like to eat, sensei?" },
    ],
  },
  {
    id: "humble-verbs", pattern: "謙譲語 (まいる・いたす・申す)", meaning: "special humble verbs (for your own actions)", category: "keigo",
    structure: ["行く / 来る → まいる; いる → おる", "する → いたす; 言う → 申す", "食べる / もらう → いただく; 見る → はいけんする; 会う → お目にかかる"],
    explanation: "Humble language (謙譲語) lowers yourself to show respect to the listener. Use these verbs for your own actions or your group's actions.",
    notes: "Self-introductions often use 〜と申します. Don't use humble verbs for your customer's or boss's actions.",
    examples: [
      { ja: "はじめまして。山田と申します。", kana: "はじめまして。やまだと もうします。", romaji: "Hajimemashite. Yamada to moushimasu.", en: "Nice to meet you. My name is Yamada." },
      { ja: "明日の十時にそちらへまいります。", kana: "あしたの じゅうじに そちらへ まいります。", romaji: "Ashita no juuji ni sochira e mairimasu.", en: "I will come to your office at ten tomorrow." },
    ],
  },
  {
    id: "o-ni-naru", pattern: "お〜になる", meaning: "respectful form of an ordinary verb", category: "keigo",
    structure: ["お + Verb ます-stem + になります (帰る → お帰りになる)", "ご + suru-noun + になります (ご利用になる)"],
    explanation: "For verbs without a special respectful form, put お before the ます-stem and add になる. It shows respect for the person doing the action.",
    notes: "This does not work for one-syllable stems like 見 (見る) or い (いる). Use ご覧になる and いらっしゃる instead.",
    examples: [
      { ja: "先生はもうお帰りになりました。", kana: "せんせいは もう おかえりに なりました。", romaji: "Sensei wa mou okaeri ni narimashita.", en: "The teacher has already gone home." },
      { ja: "この本をお読みになりましたか。", kana: "この ほんを およみに なりましたか。", romaji: "Kono hon o oyomi ni narimashita ka.", en: "Have you read this book?" },
    ],
  },
  {
    id: "o-suru", pattern: "お〜する", meaning: "I (humbly) do ~ for you", category: "keigo",
    structure: ["お + Verb ます-stem + します / いたします", "ご + suru-noun + します (ご連絡します, ご案内します)"],
    explanation: "Use お〜する for your own actions that affect or help the other person, like carrying their bag or contacting them.",
    notes: "お〜しましょうか is a polite way to offer help. お〜いたします is even more humble.",
    examples: [
      { ja: "重そうですね。お持ちしましょうか。", kana: "おもそうですね。おもちしましょうか。", romaji: "Omosou desu ne. Omochi shimashou ka.", en: "That looks heavy. Shall I carry it for you?" },
      { ja: "あとでメールでご連絡します。", kana: "あとで メールで ごれんらく します。", romaji: "Ato de meeru de gorenraku shimasu.", en: "I'll contact you by email later." },
    ],
  },
  {
    id: "o-kudasai", pattern: "お〜ください", meaning: "please ~ (very polite request)", category: "keigo",
    structure: ["お + Verb ます-stem + ください (待つ → お待ちください)", "ご + suru-noun + ください (ご注意ください)"],
    explanation: "お〜ください is a more respectful version of 〜てください. You hear it all the time in shops, stations and announcements.",
    notes: "Common set phrases: お待ちください, お入りください, おかけください (please have a seat).",
    examples: [
      { ja: "こちらで少々お待ちください。", kana: "こちらで しょうしょう おまちください。", romaji: "Kochira de shoushou omachi kudasai.", en: "Please wait here a moment." },
      { ja: "どうぞお入りください。", kana: "どうぞ おはいりください。", romaji: "Douzo ohairi kudasai.", en: "Please come in." },
    ],
  },
  {
    id: "gozaimasu", pattern: "ございます / でございます", meaning: "very polite あります / です", category: "keigo",
    structure: ["あります → ございます", "です → でございます"],
    explanation: "Shop and hotel staff use ございます for あります and でございます for です to sound extra polite to customers.",
    notes: "You already know it from ありがとうございます and おはようございます. い-adjectives change too (おいしゅうございます), but this is rare today.",
    examples: [
      { ja: "トイレは二階にございます。", kana: "トイレは にかいに ございます。", romaji: "Toire wa nikai ni gozaimasu.", en: "The restroom is on the second floor." },
      { ja: "こちらは新しいモデルでございます。", kana: "こちらは あたらしい モデルで ございます。", romaji: "Kochira wa atarashii moderu de gozaimasu.", en: "This is our new model." },
    ],
  },
  {
    id: "te-kudasaru", pattern: "〜てくださる", meaning: "(someone above me) kindly does ~ for me", category: "keigo",
    structure: ["Verb て-form + くださいます"],
    explanation: "〜てくださる is the respectful version of 〜てくれる. Use it when a teacher, boss or customer does something kind for you.",
    notes: "The ます-form is くださいます (not くださります).",
    examples: [
      { ja: "先生が駅まで車で送ってくださいました。", kana: "せんせいが えきまで くるまで おくって くださいました。", romaji: "Sensei ga eki made kuruma de okutte kudasaimashita.", en: "My teacher kindly drove me to the station." },
      { ja: "部長が昼ごはんをごちそうしてくださいました。", kana: "ぶちょうが ひるごはんを ごちそうして くださいました。", romaji: "Buchou ga hirugohan o gochisou shite kudasaimashita.", en: "My manager kindly treated me to lunch." },
    ],
  },
  {
    id: "te-itadaku", pattern: "〜ていただく", meaning: "(humbly) have someone above me do ~", category: "keigo",
    structure: ["Person + に + Verb て-form + いただきます", "Request: Verb て-form + いただけませんか"],
    explanation: "〜ていただく is the humble version of 〜てもらう. 〜ていただけませんか is one of the most polite ways to ask for a favor.",
    notes: "Use it with teachers, customers and strangers. The person who does the favor takes に.",
    examples: [
      { ja: "先生に作文を直していただきました。", kana: "せんせいに さくぶんを なおして いただきました。", romaji: "Sensei ni sakubun o naoshite itadakimashita.", en: "My teacher kindly corrected my essay." },
      { ja: "すみません、写真をとっていただけませんか。", kana: "すみません、しゃしんを とって いただけませんか。", romaji: "Sumimasen, shashin o totte itadakemasen ka.", en: "Excuse me, could you please take our photo?" },
    ],
  },
];
