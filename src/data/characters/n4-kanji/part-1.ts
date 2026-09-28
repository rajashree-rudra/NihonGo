// N4 kanji book — groups 1–14. Grouped by theme.
// bk(kanji, level, meaning, on'yomi, kun'yomi, [[ja, kana, en, word level]], [[word, reading, meaning, level, example, exampleEn]])
import { bk, type BookGroup } from "../../builders.ts";

export const GROUPS: BookGroup[] = [
  {
    n: 1,
    note: "People · self, members and family",
    items: [
      bk("自", "N4", "self, oneself", "ジ シ", "", [
        ["**自分**で料理を作ります。", "**じぶん** で りょうり を つくります。", "I cook by myself.", "N4", undefined, "ジ"],
        ["毎日**自転車**で学校に行きます。", "まいにち **じてんしゃ** で がっこう に いきます。", "I go to school by bicycle every day.", "N4", undefined, "ジ"],
        ["この町は**自然**がきれいです。", "この まち は **しぜん** が きれい です。", "The nature in this town is beautiful.", "N3", undefined, "シ"],
      ], [
        ["自分", "じぶん", "oneself", "N4", "**自分**の部屋を掃除しました。", "I cleaned my own room.", "**じぶん** の へや を そうじ しました。"],
        ["自転車", "じてんしゃ", "bicycle", "N4", "新しい**自転車**を買いました。", "I bought a new bicycle.", "あたらしい **じてんしゃ** を かいました。"],
        ["自由", "じゆう", "freedom, free", "N3", "日曜日は**自由**な時間があります。", "I have free time on Sundays.", "にちようび は **じゆう** な じかん が あります。"],
      ]),
      bk("者", "N4", "person, someone", "シャ", "もの", [
        ["父は**医者**です。", "ちち は **いしゃ** です。", "My father is a doctor.", "N4", undefined, "シャ"],
        ["この町には**若者**が多いです。", "この まち に は **わかもの** が おおい です。", "There are many young people in this town.", "N3", undefined, "もの"],
      ], [
        ["医者", "いしゃ", "doctor", "N4", "熱があるので、**医者**に行きます。", "I have a fever, so I'm going to the doctor.", "ねつ が ある ので、 **いしゃ** に いきます。"],
        ["学者", "がくしゃ", "scholar", "N3", "祖父は有名な**学者**でした。", "My grandfather was a famous scholar.", "そふ は ゆうめい な **がくしゃ** でした。"],
        ["若者", "わかもの", "young people", "N3", "**若者**に人気がある歌です。", "It's a song that is popular with young people.", "**わかもの** に にんき が ある うた です。"],
      ]),
      bk("員", "N4", "member, staff", "イン", "", [
        ["兄は**会社員**です。", "あに は **かいしゃいん** です。", "My older brother is an office worker.", "N4", undefined, "イン"],
        ["**店員**さんに聞きましょう。", "**てんいん** さん に ききましょう。", "Let's ask the shop assistant.", "N4", undefined, "イン"],
      ], [
        ["会社員", "かいしゃいん", "office worker", "N4", "朝の電車には**会社員**がたくさん乗っています。", "Many office workers ride the morning train.", "あさ の でんしゃ に は **かいしゃいん** が たくさん のって います。"],
        ["店員", "てんいん", "shop assistant", "N4", "あの**店員**はとても親切です。", "That shop assistant is very kind.", "あの **てんいん** は とても しんせつ です。"],
        ["全員", "ぜんいん", "everyone, all members", "N3", "クラスの**全員**が来ました。", "Everyone in the class came.", "クラス の **ぜんいん** が きました。"],
      ]),
      bk("主", "N4", "master, main", "シュ", "ぬし おも", [
        ["母は**主婦**です。", "はは は **しゅふ** です。", "My mother is a housewife.", "N3", undefined, "シュ"],
        ["この傘の**持ち主**は誰ですか。", "この かさ の **もちぬし** は だれ です か。", "Who is the owner of this umbrella?", "N3", undefined, "ぬし"],
        ["**主な**仕事は何ですか。", "**おもな** しごと は なん です か。", "What is your main job?", "N3", undefined, "おも"],
      ], [
        ["主人", "しゅじん", "husband, master", "N4", "**主人**は今出かけています。", "My husband is out right now.", "**しゅじん** は いま でかけて います。"],
        ["主婦", "しゅふ", "housewife", "N3", "**主婦**は毎日忙しいです。", "Housewives are busy every day.", "**しゅふ** は まいにち いそがしい です。"],
        ["主に", "おもに", "mainly", "N3", "**主に**週末に働いています。", "I mainly work on weekends.", "**おもに** しゅうまつ に はたらいて います。"],
      ]),
      bk("族", "N4", "family, tribe", "ゾク", "", [
        ["私の**家族**は四人です。", "わたし の **かぞく** は よにん です。", "There are four people in my family.", "N4", undefined, "ゾク"],
        ["夏休みに**家族旅行**をしました。", "なつやすみ に **かぞくりょこう** を しました。", "We went on a family trip in the summer holidays.", "N4", undefined, "ゾク"],
      ], [
        ["家族", "かぞく", "family", "N4", "週末は**家族**と過ごします。", "I spend weekends with my family.", "しゅうまつ は **かぞく** と すごします。"],
        ["水族館", "すいぞくかん", "aquarium", "N4", "**水族館**で魚を見ました。", "I saw fish at the aquarium.", "**すいぞくかん** で さかな を みました。"],
        ["民族", "みんぞく", "ethnic group, people", "N2", "この国にはたくさんの**民族**がいます。", "There are many ethnic groups in this country.", "この くに に は たくさん の **みんぞく** が います。"],
      ]),
    ],
  },
  {
    n: 2,
    note: "People · parents and siblings",
    items: [
      bk("親", "N4", "parent, intimate", "シン", "おや した.しい", [
        ["**親切**な人に道を教えてもらいました。", "**しんせつ** な ひと に みち を おしえて もらいました。", "A kind person showed me the way.", "N4", undefined, "シン"],
        ["**両親**は大阪に住んでいます。", "**りょうしん** は おおさか に すんで います。", "My parents live in Osaka.", "N4", undefined, "シン"],
        ["週に一回**親**に電話をかけます。", "しゅう に いっかい **おや** に でんわ を かけます。", "I call my parents once a week.", "N4", undefined, "おや"],
        ["田中さんとは**親しい**です。", "たなか さん と は **したしい** です。", "I am close to Mr. Tanaka.", "N3", undefined, "した.しい"],
      ], [
        ["親切", "しんせつ", "kind", "N4", "駅員さんはとても**親切**でした。", "The station staff member was very kind.", "えきいん さん は とても **しんせつ** でした。"],
        ["両親", "りょうしん", "parents", "N4", "お正月に**両親**の家へ帰ります。", "I go back to my parents' house at New Year.", "おしょうがつ に **りょうしん** の いえ へ かえります。"],
        ["親友", "しんゆう", "best friend", "N3", "彼は私の**親友**です。", "He is my best friend.", "かれ は わたし の **しんゆう** です。"],
      ]),
      bk("兄", "N4", "older brother", "キョウ", "あに", [
        ["**兄弟**はいますか。", "**きょうだい** は います か。", "Do you have any brothers or sisters?", "N4", undefined, "キョウ"],
        ["**兄**は銀行で働いています。", "**あに** は ぎんこう で はたらいて います。", "My older brother works at a bank.", "N4", undefined, "あに"],
      ], [
        ["兄", "あに", "(my) older brother", "N4", "**兄**は私より三歳上です。", "My older brother is three years older than me.", "**あに** は わたし より さんさい うえ です。"],
        ["お兄さん", "おにいさん", "older brother (polite)", "N4", "田中さんの**お兄さん**は先生です。", "Mr. Tanaka's older brother is a teacher.", "たなか さん の **おにいさん** は せんせい です。"],
        ["兄弟", "きょうだい", "siblings, brothers", "N4", "私は三人**兄弟**です。", "I am one of three siblings.", "わたし は さんにん **きょうだい** です。"],
      ]),
      bk("弟", "N4", "younger brother", "ダイ デ", "おとうと", [
        ["**兄弟**でサッカーをしました。", "**きょうだい** で サッカー を しました。", "The brothers played soccer together.", "N4", undefined, "ダイ"],
        ["先生には**弟子**がたくさんいます。", "せんせい に は **でし** が たくさん います。", "The teacher has many pupils.", "N2", undefined, "デ"],
        ["**弟**は高校生です。", "**おとうと** は こうこうせい です。", "My younger brother is a high school student.", "N4", undefined, "おとうと"],
      ], [
        ["弟", "おとうと", "younger brother", "N4", "**弟**と一緒にゲームをします。", "I play games with my younger brother.", "**おとうと** と いっしょ に ゲーム を します。"],
        ["兄弟", "きょうだい", "siblings, brothers", "N4", "**兄弟**は何人いますか。", "How many siblings do you have?", "**きょうだい** は なんにん います か。"],
        ["弟子", "でし", "pupil, apprentice", "N2", "彼は有名な料理人の**弟子**です。", "He is the apprentice of a famous chef.", "かれ は ゆうめい な りょうりにん の **でし** です。"],
      ]),
      bk("姉", "N4", "older sister", "シ", "あね", [
        ["あの二人は**姉妹**です。", "あの ふたり は **しまい** です。", "Those two are sisters.", "N3", undefined, "シ"],
        ["**姉**は看護師です。", "**あね** は かんごし です。", "My older sister is a nurse.", "N4", undefined, "あね"],
      ], [
        ["姉", "あね", "(my) older sister", "N4", "**姉**は東京に住んでいます。", "My older sister lives in Tokyo.", "**あね** は とうきょう に すんで います。"],
        ["お姉さん", "おねえさん", "older sister (polite)", "N4", "**お姉さん**はお元気ですか。", "How is your older sister?", "**おねえさん** は おげんき です か。"],
        ["姉妹", "しまい", "sisters", "N3", "私たちは三人**姉妹**です。", "We are three sisters.", "わたしたち は さんにん **しまい** です。"],
      ]),
    ],
  },
  {
    n: 3,
    note: "People · sister, body, heart and health",
    items: [
      bk("妹", "N4", "younger sister", "マイ", "いもうと", [
        ["**姉妹**でピアノを習っています。", "**しまい** で ピアノ を ならって います。", "The sisters are learning the piano.", "N3", undefined, "マイ"],
        ["**妹**は小学生です。", "**いもうと** は しょうがくせい です。", "My younger sister is an elementary school student.", "N4", undefined, "いもうと"],
      ], [
        ["妹", "いもうと", "(my) younger sister", "N4", "**妹**に本を貸しました。", "I lent a book to my younger sister.", "**いもうと** に ほん を かしました。"],
        ["妹さん", "いもうとさん", "(someone's) younger sister", "N4", "**妹さん**はおいくつですか。", "How old is your younger sister?", "**いもうとさん** は おいくつ です か。"],
        ["姉妹", "しまい", "sisters", "N3", "この二つの町は**姉妹**都市です。", "These two towns are sister cities.", "この ふたつ の まち は **しまい** とし です。"],
      ]),
      bk("体", "N4", "body", "タイ", "からだ", [
        ["**体育**の授業が好きです。", "**たいいく** の じゅぎょう が すき です。", "I like PE class.", "N3", undefined, "タイ"],
        ["**体**に気をつけてください。", "**からだ** に き を つけて ください。", "Please take care of yourself.", "N4", undefined, "からだ"],
      ], [
        ["体", "からだ", "body", "N4", "毎朝運動するので、**体**が丈夫です。", "I exercise every morning, so I'm healthy.", "まいあさ うんどう する ので、 **からだ** が じょうぶ です。"],
        ["体育館", "たいいくかん", "gym", "N4", "**体育館**でバスケットボールをします。", "We play basketball in the gym.", "**たいいくかん** で バスケットボール を します。"],
        ["大体", "だいたい", "mostly, roughly", "N4", "宿題は**大体**終わりました。", "I've mostly finished my homework.", "しゅくだい は **だいたい** おわりました。"],
      ]),
      bk("心", "N4", "heart, mind", "シン", "こころ", [
        ["**心配**しないでください。", "**しんぱい** しないで ください。", "Please don't worry.", "N4", undefined, "シン"],
        ["彼は**心**のやさしい人です。", "かれ は **こころ** の やさしい ひと です。", "He is a kind-hearted person.", "N3", undefined, "こころ"],
      ], [
        ["心配", "しんぱい", "worry", "N4", "母は私のことを**心配**しています。", "My mother is worried about me.", "はは は わたし の こと を **しんぱい** して います。"],
        ["安心", "あんしん", "relief, peace of mind", "N4", "テストが終わって**安心**しました。", "I was relieved that the test was over.", "テスト が おわって **あんしん** しました。"],
        ["熱心", "ねっしん", "eager, enthusiastic", "N4", "学生たちは**熱心**に勉強しています。", "The students are studying hard.", "がくせいたち は **ねっしん** に べんきょう して います。"],
      ]),
      bk("医", "N4", "doctor, medicine", "イ", "", [
        ["**医者**に薬をもらいました。", "**いしゃ** に くすり を もらいました。", "I got medicine from the doctor.", "N4", undefined, "イ"],
        ["姉は**医学**を勉強しています。", "あね は **いがく** を べんきょう して います。", "My older sister is studying medicine.", "N3", undefined, "イ"],
      ], [
        ["医者", "いしゃ", "doctor", "N4", "将来、**医者**になりたいです。", "I want to become a doctor in the future.", "しょうらい、 **いしゃ** に なりたい です。"],
        ["歯医者", "はいしゃ", "dentist", "N4", "明日**歯医者**に行きます。", "I'm going to the dentist tomorrow.", "あした **はいしゃ** に いきます。"],
        ["医学", "いがく", "medical science", "N3", "兄は大学で**医学**を学んでいます。", "My older brother studies medicine at university.", "あに は だいがく で **いがく** を まなんで います。"],
      ]),
    ],
  },
  {
    n: 4,
    note: "Time · seasons and days of the week",
    items: [
      bk("春", "N4", "spring", "シュン", "はる", [
        ["**春分**の日は休みです。", "**しゅんぶん** の ひ は やすみ です。", "Vernal Equinox Day is a holiday.", undefined, undefined, "シュン"],
        ["**春**になると、桜が咲きます。", "**はる** に なる と、 さくら が さきます。", "When spring comes, the cherry blossoms bloom.", "N4", undefined, "はる"],
      ], [
        ["春", "はる", "spring", "N4", "**春**は暖かくて気持ちがいいです。", "Spring is warm and pleasant.", "**はる** は あたたかくて きもち が いい です。"],
        ["春休み", "はるやすみ", "spring break", "N4", "**春休み**に京都へ行きます。", "I'll go to Kyoto during spring break.", "**はるやすみ** に きょうと へ いきます。"],
        ["青春", "せいしゅん", "youth", "N2", "高校時代は私の**青春**でした。", "My high school days were my youth.", "こうこう じだい は わたし の **せいしゅん** でした。"],
      ]),
      bk("夏", "N4", "summer", "カ", "なつ", [
        ["日本には**春夏秋冬**があります。", "にほん に は **しゅんかしゅうとう** が あります。", "Japan has four seasons.", undefined, undefined, "カ"],
        ["**夏**は海で泳ぎます。", "**なつ** は うみ で およぎます。", "In summer I swim in the sea.", "N4", undefined, "なつ"],
      ], [
        ["夏", "なつ", "summer", "N4", "今年の**夏**はとても暑いです。", "This summer is very hot.", "ことし の **なつ** は とても あつい です。"],
        ["夏休み", "なつやすみ", "summer vacation", "N4", "**夏休み**に海へ行きました。", "I went to the sea during summer vacation.", "**なつやすみ** に うみ へ いきました。"],
        ["真夏", "まなつ", "midsummer", "N2", "**真夏**の昼は外に出ないほうがいいです。", "It's better not to go out at midday in midsummer.", "**まなつ** の ひる は そと に でない ほう が いい です。"],
      ]),
      bk("秋", "N4", "autumn", "シュウ", "あき", [
        ["九月に**秋分**の日があります。", "くがつ に **しゅうぶん** の ひ が あります。", "Autumnal Equinox Day is in September.", undefined, undefined, "シュウ"],
        ["**秋**は紅葉がきれいです。", "**あき** は こうよう が きれい です。", "In autumn the leaves are beautiful.", "N4", undefined, "あき"],
      ], [
        ["秋", "あき", "autumn", "N4", "**秋**はスポーツにいい季節です。", "Autumn is a good season for sports.", "**あき** は スポーツ に いい きせつ です。"],
        ["秋分の日", "しゅうぶんのひ", "Autumnal Equinox Day", undefined, "**秋分の日**は祝日です。", "Autumnal Equinox Day is a national holiday.", "**しゅうぶんのひ** は しゅくじつ です。"],
      ]),
      bk("冬", "N4", "winter", "トウ", "ふゆ", [
        ["くまは**冬眠**します。", "くま は **とうみん** します。", "Bears hibernate.", undefined, undefined, "トウ"],
        ["**冬**は雪がたくさん降ります。", "**ふゆ** は ゆき が たくさん ふります。", "It snows a lot in winter.", "N4", undefined, "ふゆ"],
      ], [
        ["冬", "ふゆ", "winter", "N4", "北海道の**冬**はとても寒いです。", "Winter in Hokkaido is very cold.", "ほっかいどう の **ふゆ** は とても さむい です。"],
        ["冬休み", "ふゆやすみ", "winter vacation", "N4", "**冬休み**にスキーをしました。", "I went skiing during winter vacation.", "**ふゆやすみ** に スキー を しました。"],
      ]),
      bk("早", "N4", "early, fast", "ソウ", "はや.い", [
        ["**早朝**に公園を散歩します。", "**そうちょう** に こうえん を さんぽ します。", "I take a walk in the park early in the morning.", "N2", undefined, "ソウ"],
        ["明日は**早く**起きます。", "あした は **はやく** おきます。", "I will get up early tomorrow.", "N4", undefined, "はや.い"],
      ], [
        ["早い", "はやい", "early", "N4", "父は毎朝起きるのが**早い**です。", "My father gets up early every morning.", "ちち は まいあさ おきる の が **はやい** です。"],
        ["早速", "さっそく", "at once, right away", "N3", "**早速**やってみます。", "I'll try it right away.", "**さっそく** やって みます。"],
        ["早口", "はやくち", "fast talking", "N2", "先生は**早口**なので、わかりにくいです。", "The teacher talks fast, so it's hard to understand.", "せんせい は **はやくち** な ので、 わかりにくい です。"],
      ]),
      bk("曜", "N4", "day of the week", "ヨウ", "", [
        ["今日は何**曜日**ですか。", "きょう は なん **ようび** です か。", "What day of the week is it today?", "N5", undefined, "ヨウ"],
        ["**日曜日**に映画を見ます。", "**にちようび** に えいが を みます。", "I'll watch a movie on Sunday.", "N5", undefined, "ヨウ"],
      ], [
        ["曜日", "ようび", "day of the week", "N5", "何**曜日**が暇ですか。", "Which day of the week are you free?", "なん **ようび** が ひま です か。"],
        ["土曜日", "どようび", "Saturday", "N5", "**土曜日**は学校が休みです。", "There is no school on Saturday.", "**どようび** は がっこう が やすみ です。"],
        ["月曜日", "げつようび", "Monday", "N5", "**月曜日**の朝は忙しいです。", "Monday mornings are busy.", "**げつようび** の あさ は いそがしい です。"],
      ]),
    ],
  },
  {
    n: 5,
    note: "Time · eras, beginnings and endings",
    items: [
      bk("代", "N4", "generation, fee, replace", "ダイ タイ", "か.わる", [
        ["**時代**が変わりました。", "**じだい** が かわりました。", "Times have changed.", "N4", undefined, "ダイ"],
        ["**電気代**が高いです。", "**でんきだい** が たかい です。", "The electricity bill is expensive.", "N3", undefined, "ダイ"],
        ["運転を**交代**しましょう。", "うんてん を **こうたい** しましょう。", "Let's take turns driving.", "N3", undefined, "タイ"],
        ["部長の**代わりに**会議に出ます。", "ぶちょう の **かわりに** かいぎ に でます。", "I'll attend the meeting in place of the manager.", "N3", undefined, "か.わる"],
      ], [
        ["時代", "じだい", "era, period", "N4", "江戸**時代**の建物が残っています。", "Buildings from the Edo period remain.", "えど **じだい** の たてもの が のこって います。"],
        ["電気代", "でんきだい", "electricity bill", "N3", "今月は**電気代**が高かったです。", "The electricity bill was high this month.", "こんげつ は **でんきだい** が たかかった です。"],
        ["代わり", "かわり", "substitute, instead", "N3", "コーヒーの**代わり**にお茶を飲みます。", "I drink tea instead of coffee.", "コーヒー の **かわり** に おちゃ を のみます。"],
      ]),
      bk("世", "N4", "world, generation", "セ セイ", "よ", [
        ["**世界中**を旅行したいです。", "**せかいじゅう** を りょこう したい です。", "I want to travel all over the world.", "N3", undefined, "セ"],
        ["今は二十一**世紀**です。", "いま は にじゅういち **せいき** です。", "It is now the 21st century.", "N3", undefined, "セイ"],
        ["**世の中**にはいろいろな人がいます。", "**よのなか** に は いろいろ な ひと が います。", "There are all kinds of people in the world.", "N3", undefined, "よ"],
      ], [
        ["世界", "せかい", "world", "N4", "**世界**で一番高い山はどこですか。", "Where is the highest mountain in the world?", "**せかい** で いちばん たかい やま は どこ です か。"],
        ["お世話", "おせわ", "care, help", "N4", "いつも**お世話**になっています。", "Thank you for always looking after me.", "いつも **おせわ** に なって います。"],
        ["世紀", "せいき", "century", "N3", "この寺は八**世紀**に建てられました。", "This temple was built in the eighth century.", "この てら は はち **せいき** に たてられました。"],
      ]),
      bk("明", "N4", "bright, clear", "メイ ミョウ", "あか.るい あ.ける", [
        ["先生が文法を**説明**しました。", "せんせい が ぶんぽう を **せつめい** しました。", "The teacher explained the grammar.", "N4", undefined, "メイ"],
        ["**明日**、またご連絡します。", "**みょうにち**、 また ごれんらく します。", "I will contact you again tomorrow.", "N4", undefined, "ミョウ"],
        ["この部屋はとても**明るい**です。", "この へや は とても **あかるい** です。", "This room is very bright.", "N4", undefined, "あか.るい"],
        ["**明けまして**おめでとうございます。", "**あけまして** おめでとう ございます。", "Happy New Year!", "N4", undefined, "あ.ける"],
      ], [
        ["説明", "せつめい", "explanation", "N4", "使い方を**説明**してください。", "Please explain how to use it.", "つかいかた を **せつめい** して ください。"],
        ["明るい", "あかるい", "bright, cheerful", "N4", "彼女はいつも**明るい**です。", "She is always cheerful.", "かのじょ は いつも **あかるい** です。"],
        ["明日", "あした", "tomorrow", "N5", "**明日**は雨が降るでしょう。", "It will probably rain tomorrow.", "**あした** は あめ が ふる でしょう。"],
      ]),
      bk("始", "N4", "begin", "シ", "はじ.める はじ.まる", [
        ["コンサートの**開始**は七時です。", "コンサート の **かいし** は しちじ です。", "The concert starts at seven.", "N3", undefined, "シ"],
        ["来月から日本語を**始めます**。", "らいげつ から にほんご を **はじめます**。", "I will start learning Japanese next month.", "N4", undefined, "はじ.める"],
        ["授業は九時に**始まります**。", "じゅぎょう は くじ に **はじまります**。", "Class begins at nine.", "N4", undefined, "はじ.まる"],
      ], [
        ["始める", "はじめる", "to begin (something)", "N4", "テストを**始めて**ください。", "Please begin the test.", "テスト を **はじめて** ください。"],
        ["始まる", "はじまる", "to start", "N4", "映画はもう**始まりました**。", "The movie has already started.", "えいが は もう **はじまりました**。"],
        ["開始", "かいし", "start, beginning", "N3", "試合**開始**まであと十分です。", "There are ten minutes left until the match starts.", "しあい **かいし** まで あと じっぷん です。"],
      ]),
      bk("終", "N4", "end, finish", "シュウ", "お.わる", [
        ["**終電**に間に合いませんでした。", "**しゅうでん** に まにあいません でした。", "I didn't make the last train.", "N3", undefined, "シュウ"],
        ["仕事は六時に**終わります**。", "しごと は ろくじ に **おわります**。", "Work ends at six.", "N4", undefined, "お.わる"],
      ], [
        ["終わる", "おわる", "to end", "N4", "夏休みがもうすぐ**終わります**。", "Summer vacation is ending soon.", "なつやすみ が もうすぐ **おわります**。"],
        ["最終", "さいしゅう", "last, final", "N3", "**最終**のバスは十時です。", "The last bus is at ten.", "**さいしゅう** の バス は じゅうじ です。"],
        ["終電", "しゅうでん", "last train", "N3", "**終電**は何時ですか。", "What time is the last train?", "**しゅうでん** は なんじ です か。"],
      ]),
    ],
  },
  {
    n: 6,
    note: "Nature · land, fields and sea",
    items: [
      bk("地", "N4", "ground, earth", "チ ジ", "", [
        ["**地図**を見ながら歩きます。", "**ちず** を みながら あるきます。", "I walk while looking at a map.", "N4", undefined, "チ"],
        ["昨日、大きい**地震**がありました。", "きのう、 おおきい **じしん** が ありました。", "There was a big earthquake yesterday.", "N4", undefined, "ジ"],
      ], [
        ["地図", "ちず", "map", "N4", "駅までの**地図**をかいてください。", "Please draw a map to the station.", "えき まで の **ちず** を かいて ください。"],
        ["地下鉄", "ちかてつ", "subway", "N4", "**地下鉄**で行くと早いです。", "It's faster to go by subway.", "**ちかてつ** で いく と はやい です。"],
        ["地震", "じしん", "earthquake", "N4", "日本は**地震**が多いです。", "Japan has many earthquakes.", "にほん は **じしん** が おおい です。"],
      ]),
      bk("界", "N4", "world, boundary", "カイ", "", [
        ["**世界**にはたくさんの国があります。", "**せかい** に は たくさん の くに が あります。", "There are many countries in the world.", "N4", undefined, "カイ"],
        ["兄は音楽の**業界**で働いています。", "あに は おんがく の **ぎょうかい** で はたらいて います。", "My older brother works in the music industry.", "N2", undefined, "カイ"],
      ], [
        ["世界", "せかい", "world", "N4", "いつか**世界**旅行をしたいです。", "Someday I want to travel around the world.", "いつか **せかい** りょこう を したい です。"],
        ["世界中", "せかいじゅう", "all over the world", "N3", "この歌は**世界中**で人気があります。", "This song is popular all over the world.", "この うた は **せかいじゅう** で にんき が あります。"],
        ["限界", "げんかい", "limit", "N2", "もう**限界**です。", "I've reached my limit.", "もう **げんかい** です。"],
      ]),
      bk("野", "N4", "field, plain", "ヤ", "の", [
        ["毎日**野菜**を食べます。", "まいにち **やさい** を たべます。", "I eat vegetables every day.", "N4", undefined, "ヤ"],
        ["弟は**野球**が好きです。", "おとうと は **やきゅう** が すき です。", "My younger brother likes baseball.", "N4", undefined, "ヤ"],
        ["**野原**で花を摘みました。", "**のはら** で はな を つみました。", "I picked flowers in the field.", "N3", undefined, "の"],
      ], [
        ["野菜", "やさい", "vegetable", "N4", "**野菜**スープを作りました。", "I made vegetable soup.", "**やさい** スープ を つくりました。"],
        ["野球", "やきゅう", "baseball", "N4", "週末に**野球**の試合を見ます。", "I watch a baseball game on the weekend.", "しゅうまつ に **やきゅう** の しあい を みます。"],
        ["野原", "のはら", "field, meadow", "N3", "子どもたちが**野原**で遊んでいます。", "The children are playing in the field.", "こどもたち が **のはら** で あそんで います。"],
      ]),
      bk("海", "N4", "sea, ocean", "カイ", "うみ", [
        ["来年、**海外**へ行きたいです。", "らいねん、 **かいがい** へ いきたい です。", "I want to go abroad next year.", "N3", undefined, "カイ"],
        ["**海**の近くに住んでいます。", "**うみ** の ちかく に すんで います。", "I live near the sea.", "N4", undefined, "うみ"],
      ], [
        ["海", "うみ", "sea", "N4", "この**海**はとてもきれいです。", "This sea is very beautiful.", "この **うみ** は とても きれい です。"],
        ["海外", "かいがい", "overseas, abroad", "N3", "**海外**旅行は初めてです。", "This is my first trip abroad.", "**かいがい** りょこう は はじめて です。"],
        ["海岸", "かいがん", "coast, beach", "N3", "**海岸**を散歩しました。", "I took a walk along the coast.", "**かいがん** を さんぽ しました。"],
      ]),
    ],
  },
  {
    n: 7,
    note: "Nature · wind and colours",
    items: [
      bk("風", "N4", "wind, style", "フウ フ", "かぜ", [
        ["明日、**台風**が来るそうです。", "あした、 **たいふう** が くる そう です。", "I hear a typhoon is coming tomorrow.", "N4", undefined, "フウ"],
        ["毎晩**お風呂**に入ります。", "まいばん **おふろ** に はいります。", "I take a bath every evening.", "N4", undefined, "フ"],
        ["今日は**風**が強いです。", "きょう は **かぜ** が つよい です。", "The wind is strong today.", "N4", undefined, "かぜ"],
      ], [
        ["台風", "たいふう", "typhoon", "N4", "**台風**で電車が止まりました。", "The trains stopped because of the typhoon.", "**たいふう** で でんしゃ が とまりました。"],
        ["風呂", "ふろ", "bath", "N4", "**風呂**の後でビールを飲みます。", "I drink beer after my bath.", "**ふろ** の あと で ビール を のみます。"],
        ["風邪", "かぜ", "a cold", "N4", "**風邪**をひいて、学校を休みました。", "I caught a cold and stayed home from school.", "**かぜ** を ひいて、 がっこう を やすみました。"],
      ]),
      bk("黒", "N4", "black", "コク", "くろ", [
        ["先生が**黒板**に字を書きました。", "せんせい が **こくばん** に じ を かきました。", "The teacher wrote on the blackboard.", "N3", undefined, "コク"],
        ["**黒い**かばんを買いました。", "**くろい** かばん を かいました。", "I bought a black bag.", "N4", undefined, "くろ"],
      ], [
        ["黒い", "くろい", "black", "N4", "父は**黒い**車に乗っています。", "My father drives a black car.", "ちち は **くろい** くるま に のって います。"],
        ["黒板", "こくばん", "blackboard", "N3", "**黒板**の字がよく見えません。", "I can't see the writing on the blackboard well.", "**こくばん** の じ が よく みえません。"],
        ["黒", "くろ", "black (colour)", "N4", "**黒**と白、どちらがいいですか。", "Which is better, black or white?", "**くろ** と しろ、 どちら が いい です か。"],
      ]),
      bk("青", "N4", "blue, green", "セイ", "あお", [
        ["**青年**たちがボランティアをしています。", "**せいねん** たち が ボランティア を して います。", "Young people are doing volunteer work.", "N3", undefined, "セイ"],
        ["今日は空が**青い**です。", "きょう は そら が **あおい** です。", "The sky is blue today.", "N4", undefined, "あお"],
      ], [
        ["青い", "あおい", "blue", "N4", "**青い**シャツを着ています。", "I'm wearing a blue shirt.", "**あおい** シャツ を きて います。"],
        ["青信号", "あおしんごう", "green (traffic) light", "N3", "**青信号**で渡りましょう。", "Let's cross on the green light.", "**あおしんごう** で わたりましょう。"],
        ["青年", "せいねん", "young man, youth", "N3", "あの**青年**はとても親切です。", "That young man is very kind.", "あの **せいねん** は とても しんせつ です。"],
      ]),
      bk("色", "N4", "colour", "ショク シキ", "いろ", [
        ["この町の**特色**は古いお寺です。", "この まち の **とくしょく** は ふるい おてら です。", "This town's special feature is its old temples.", "N2", undefined, "ショク"],
        ["山の上から見る**景色**はきれいです。", "やま の うえ から みる **けしき** は きれい です。", "The view from the top of the mountain is beautiful.", "N4", undefined, "シキ"],
        ["どの**色**が好きですか。", "どの **いろ** が すき です か。", "Which colour do you like?", "N4", undefined, "いろ"],
      ], [
        ["色", "いろ", "colour", "N4", "この**色**はあなたに似合います。", "This colour suits you.", "この **いろ** は あなた に にあいます。"],
        ["景色", "けしき", "scenery, view", "N4", "窓から**景色**を見ました。", "I looked at the scenery from the window.", "まど から **けしき** を みました。"],
        ["黄色", "きいろ", "yellow", "N4", "**黄色い**花が咲いています。", "Yellow flowers are blooming.", "**きいろい** はな が さいて います。"],
      ]),
    ],
  },
  {
    n: 8,
    note: "Food · meat, birds and meals",
    items: [
      bk("肉", "N4", "meat, flesh", "ニク", "", [
        ["晩ご飯に**牛肉**を食べました。", "ばんごはん に **ぎゅうにく** を たべました。", "I ate beef for dinner.", "N4", undefined, "ニク"],
        ["**肉**と魚とどちらが好きですか。", "**にく** と さかな と どちら が すき です か。", "Which do you like better, meat or fish?", "N4", undefined, "ニク"],
      ], [
        ["肉", "にく", "meat", "N4", "スーパーで**肉**を買いました。", "I bought meat at the supermarket.", "スーパー で **にく** を かいました。"],
        ["牛肉", "ぎゅうにく", "beef", "N4", "**牛肉**は少し高いです。", "Beef is a little expensive.", "**ぎゅうにく** は すこし たかい です。"],
        ["豚肉", "ぶたにく", "pork", "N4", "**豚肉**でカレーを作ります。", "I make curry with pork.", "**ぶたにく** で カレー を つくります。"],
      ]),
      bk("鳥", "N4", "bird", "チョウ", "とり", [
        ["湖に**白鳥**がいます。", "みずうみ に **はくちょう** が います。", "There are swans on the lake.", "N2", undefined, "チョウ"],
        ["木の上で**鳥**が鳴いています。", "き の うえ で **とり** が ないて います。", "A bird is singing in the tree.", "N4", undefined, "とり"],
      ], [
        ["鳥", "とり", "bird", "N4", "庭に小さい**鳥**が来ました。", "A small bird came into the garden.", "にわ に ちいさい **とり** が きました。"],
        ["焼き鳥", "やきとり", "grilled chicken skewers", "N3", "駅前の店で**焼き鳥**を食べました。", "I ate yakitori at a shop in front of the station.", "えきまえ の みせ で **やきとり** を たべました。"],
        ["小鳥", "ことり", "small bird", "N3", "**小鳥**を飼っています。", "I keep a little bird.", "**ことり** を かって います。"],
      ]),
      bk("牛", "N4", "cow, cattle", "ギュウ", "うし", [
        ["毎朝**牛乳**を飲みます。", "まいあさ **ぎゅうにゅう** を のみます。", "I drink milk every morning.", "N4", undefined, "ギュウ"],
        ["牧場に**牛**がたくさんいます。", "ぼくじょう に **うし** が たくさん います。", "There are many cows on the farm.", "N4", undefined, "うし"],
      ], [
        ["牛乳", "ぎゅうにゅう", "milk", "N4", "**牛乳**を一本買ってきてください。", "Please go and buy a carton of milk.", "**ぎゅうにゅう** を いっぽん かって きて ください。"],
        ["牛肉", "ぎゅうにく", "beef", "N4", "**牛肉**のカレーが好きです。", "I like beef curry.", "**ぎゅうにく** の カレー が すき です。"],
        ["牛", "うし", "cow", "N4", "**牛**が草を食べています。", "The cow is eating grass.", "**うし** が くさ を たべて います。"],
      ]),
      bk("飯", "N4", "meal, cooked rice", "ハン", "めし", [
        ["一緒に**ご飯**を食べましょう。", "いっしょ に **ごはん** を たべましょう。", "Let's eat together.", "N5", undefined, "ハン"],
        ["今日の**朝ご飯**はパンでした。", "きょう の **あさごはん** は パン でした。", "Today's breakfast was bread.", "N5", undefined, "ハン"],
        ["お昼に**焼き飯**を食べました。", "おひる に **やきめし** を たべました。", "I had fried rice for lunch.", undefined, undefined, "めし"],
      ], [
        ["ご飯", "ごはん", "cooked rice, meal", "N5", "**ご飯**をもう少しください。", "A little more rice, please.", "**ごはん** を もう すこし ください。"],
        ["晩ご飯", "ばんごはん", "dinner", "N4", "**晩ご飯**は何にしますか。", "What shall we have for dinner?", "**ばんごはん** は なに に します か。"],
        ["昼ご飯", "ひるごはん", "lunch", "N4", "**昼ご飯**を食べに行きましょう。", "Let's go and eat lunch.", "**ひるごはん** を たべ に いきましょう。"],
      ]),
    ],
  },
  {
    n: 9,
    note: "Food · tea, taste and cooking",
    items: [
      bk("茶", "N4", "tea", "チャ サ", "", [
        ["**お茶**を一杯いかがですか。", "**おちゃ** を いっぱい いかが です か。", "Would you like a cup of tea?", "N5", undefined, "チャ"],
        ["駅の前の**喫茶店**で待っています。", "えき の まえ の **きっさてん** で まって います。", "I'm waiting at the coffee shop in front of the station.", "N4", undefined, "サ"],
      ], [
        ["お茶", "おちゃ", "tea", "N5", "食事の後で**お茶**を飲みます。", "I drink tea after meals.", "しょくじ の あと で **おちゃ** を のみます。"],
        ["茶色", "ちゃいろ", "brown", "N4", "**茶色**のくつを買いました。", "I bought brown shoes.", "**ちゃいろ** の くつ を かいました。"],
        ["喫茶店", "きっさてん", "coffee shop, café", "N4", "この**喫茶店**のケーキはおいしいです。", "The cake at this café is delicious.", "この **きっさてん** の ケーキ は おいしい です。"],
      ]),
      bk("味", "N4", "taste, flavour", "ミ", "あじ", [
        ["この言葉の**意味**がわかりません。", "この ことば の **いみ** が わかりません。", "I don't understand the meaning of this word.", "N4", undefined, "ミ"],
        ["私の**趣味**は料理です。", "わたし の **しゅみ** は りょうり です。", "My hobby is cooking.", "N4", undefined, "ミ"],
        ["このスープは**味**が薄いです。", "この スープ は **あじ** が うすい です。", "This soup tastes bland.", "N4", undefined, "あじ"],
      ], [
        ["意味", "いみ", "meaning", "N4", "この漢字の**意味**を教えてください。", "Please tell me the meaning of this kanji.", "この かんじ の **いみ** を おしえて ください。"],
        ["趣味", "しゅみ", "hobby", "N4", "**趣味**は何ですか。", "What are your hobbies?", "**しゅみ** は なん です か。"],
        ["味", "あじ", "taste", "N4", "母の料理は**味**がいいです。", "My mother's cooking tastes good.", "はは の りょうり は **あじ** が いい です。"],
      ]),
      bk("料", "N4", "fee, materials", "リョウ", "", [
        ["父は**料理**が上手です。", "ちち は **りょうり** が じょうず です。", "My father is good at cooking.", "N4", undefined, "リョウ"],
        ["子どもの入場は**無料**です。", "こども の にゅうじょう は **むりょう** です。", "Admission is free for children.", "N3", undefined, "リョウ"],
      ], [
        ["料理", "りょうり", "cooking, dish", "N4", "日本**料理**が好きです。", "I like Japanese food.", "にほん **りょうり** が すき です。"],
        ["材料", "ざいりょう", "ingredients, materials", "N3", "カレーの**材料**を買いました。", "I bought the ingredients for curry.", "カレー の **ざいりょう** を かいました。"],
        ["料金", "りょうきん", "fee, charge", "N3", "バスの**料金**はいくらですか。", "How much is the bus fare?", "バス の **りょうきん** は いくら です か。"],
      ]),
      bk("洋", "N4", "ocean, Western", "ヨウ", "", [
        ["**洋服**を買いに行きます。", "**ようふく** を かい に いきます。", "I'm going to buy some clothes.", "N4", undefined, "ヨウ"],
        ["船で**太平洋**を渡りました。", "ふね で **たいへいよう** を わたりました。", "We crossed the Pacific Ocean by ship.", "N3", undefined, "ヨウ"],
      ], [
        ["洋服", "ようふく", "(Western) clothes", "N4", "新しい**洋服**を着て出かけます。", "I'll go out in new clothes.", "あたらしい **ようふく** を きて でかけます。"],
        ["西洋", "せいよう", "the West", "N3", "**西洋**の音楽を勉強しています。", "I'm studying Western music.", "**せいよう** の おんがく を べんきょう して います。"],
        ["洋食", "ようしょく", "Western food", "N3", "今日の昼は**洋食**にしましょう。", "Let's have Western food for lunch today.", "きょう の ひる は **ようしょく** に しましょう。"],
      ]),
    ],
  },
  {
    n: 10,
    note: "Places · towns and public buildings",
    items: [
      bk("場", "N4", "place", "ジョウ", "ば", [
        ["**会場**はこちらです。", "**かいじょう** は こちら です。", "The venue is this way.", "N4", undefined, "ジョウ"],
        ["この**場所**で写真を撮ってもいいですか。", "この **ばしょ** で しゃしん を とって も いい です か。", "May I take photos in this place?", "N4", undefined, "ば"],
      ], [
        ["場所", "ばしょ", "place, location", "N4", "待ち合わせの**場所**はどこですか。", "Where is the meeting place?", "まちあわせ の **ばしょ** は どこ です か。"],
        ["駐車場", "ちゅうしゃじょう", "parking lot", "N4", "**駐車場**に車を止めました。", "I parked the car in the parking lot.", "**ちゅうしゃじょう** に くるま を とめました。"],
        ["売り場", "うりば", "sales floor, counter", "N4", "靴の**売り場**は三階です。", "The shoe department is on the third floor.", "くつ の **うりば** は さんがい です。"],
      ]),
      bk("京", "N4", "capital", "キョウ", "", [
        ["**東京**に住んでいます。", "**とうきょう** に すんで います。", "I live in Tokyo.", "N5", undefined, "キョウ"],
        ["来週、**京都**へ行きます。", "らいしゅう、 **きょうと** へ いきます。", "I'm going to Kyoto next week.", "N4", undefined, "キョウ"],
      ], [
        ["東京", "とうきょう", "Tokyo", "N5", "**東京**は人が多いです。", "Tokyo has a lot of people.", "**とうきょう** は ひと が おおい です。"],
        ["京都", "きょうと", "Kyoto", "N4", "**京都**には古いお寺がたくさんあります。", "Kyoto has many old temples.", "**きょうと** に は ふるい おてら が たくさん あります。"],
        ["上京", "じょうきょう", "moving to the capital", "N2", "兄は十八歳で**上京**しました。", "My older brother moved to Tokyo at eighteen.", "あに は じゅうはっさい で **じょうきょう** しました。"],
      ]),
      bk("町", "N4", "town", "チョウ", "まち", [
        ["**町長**さんがあいさつをしました。", "**ちょうちょう** さん が あいさつ を しました。", "The town mayor gave a speech of greeting.", undefined, undefined, "チョウ"],
        ["この**町**は静かです。", "この **まち** は しずか です。", "This town is quiet.", "N4", undefined, "まち"],
      ], [
        ["町", "まち", "town", "N4", "私の**町**には大きい公園があります。", "There is a big park in my town.", "わたし の **まち** に は おおきい こうえん が あります。"],
        ["下町", "したまち", "old downtown area", "N2", "**下町**を歩くのが好きです。", "I like walking around the old downtown.", "**したまち** を あるく の が すき です。"],
        ["町長", "ちょうちょう", "town mayor", undefined, "新しい**町長**が決まりました。", "A new town mayor has been chosen.", "あたらしい **ちょうちょう** が きまりました。"],
      ]),
      bk("院", "N4", "institution", "イン", "", [
        ["祖母は**病院**にいます。", "そぼ は **びょういん** に います。", "My grandmother is in hospital.", "N4", undefined, "イン"],
        ["**大学院**で研究しています。", "**だいがくいん** で けんきゅう して います。", "I'm doing research at graduate school.", "N3", undefined, "イン"],
      ], [
        ["病院", "びょういん", "hospital", "N4", "近くに**病院**はありますか。", "Is there a hospital nearby?", "ちかく に **びょういん** は あります か。"],
        ["入院", "にゅういん", "being hospitalised", "N3", "父は一週間**入院**しました。", "My father was in hospital for a week.", "ちち は いっしゅうかん **にゅういん** しました。"],
        ["美容院", "びよういん", "hair salon", "N3", "**美容院**で髪を切りました。", "I had my hair cut at the salon.", "**びよういん** で かみ を きりました。"],
      ]),
      bk("館", "N4", "hall, building", "カン", "", [
        ["**図書館**で本を借りました。", "**としょかん** で ほん を かりました。", "I borrowed a book from the library.", "N4", undefined, "カン"],
        ["日曜日に**美術館**へ行きました。", "にちようび に **びじゅつかん** へ いきました。", "I went to the art museum on Sunday.", "N4", undefined, "カン"],
      ], [
        ["図書館", "としょかん", "library", "N4", "**図書館**で勉強します。", "I study at the library.", "**としょかん** で べんきょう します。"],
        ["映画館", "えいがかん", "movie theatre", "N4", "駅の近くに**映画館**があります。", "There is a movie theatre near the station.", "えき の ちかく に **えいがかん** が あります。"],
        ["旅館", "りょかん", "Japanese inn", "N4", "温泉の**旅館**に泊まりました。", "We stayed at a hot-spring inn.", "おんせん の **りょかん** に とまりました。"],
      ]),
    ],
  },
  {
    n: 11,
    note: "Places · shops, rooms and buildings",
    items: [
      bk("屋", "N4", "shop, roof", "オク", "や", [
        ["**屋上**からの景色がきれいです。", "**おくじょう** から の けしき が きれい です。", "The view from the rooftop is beautiful.", "N3", undefined, "オク"],
        ["駅の前に**本屋**があります。", "えき の まえ に **ほんや** が あります。", "There is a bookshop in front of the station.", "N4", undefined, "や"],
      ], [
        ["部屋", "へや", "room", "N5", "私の**部屋**は二階です。", "My room is on the second floor.", "わたし の **へや** は にかい です。"],
        ["八百屋", "やおや", "greengrocer", "N4", "**八百屋**でトマトを買いました。", "I bought tomatoes at the greengrocer's.", "**やおや** で トマト を かいました。"],
        ["屋上", "おくじょう", "rooftop", "N3", "昼休みに**屋上**でお弁当を食べます。", "I eat my packed lunch on the rooftop at lunch break.", "ひるやすみ に **おくじょう** で おべんとう を たべます。"],
      ]),
      bk("室", "N4", "room", "シツ", "", [
        ["**教室**に学生が二十人います。", "**きょうしつ** に がくせい が にじゅうにん います。", "There are twenty students in the classroom.", "N4", undefined, "シツ"],
        ["この**和室**で寝ます。", "この **わしつ** で ねます。", "I sleep in this Japanese-style room.", "N3", undefined, "シツ"],
      ], [
        ["教室", "きょうしつ", "classroom", "N4", "**教室**では静かにしてください。", "Please be quiet in the classroom.", "**きょうしつ** で は しずか に して ください。"],
        ["会議室", "かいぎしつ", "meeting room", "N4", "**会議室**は三階にあります。", "The meeting room is on the third floor.", "**かいぎしつ** は さんがい に あります。"],
        ["室内", "しつない", "indoors, inside a room", "N2", "雨の日は**室内**で遊びます。", "On rainy days we play indoors.", "あめ の ひ は **しつない** で あそびます。"],
      ]),
      bk("堂", "N4", "hall", "ドウ", "", [
        ["昼ご飯は**食堂**で食べます。", "ひるごはん は **しょくどう** で たべます。", "I eat lunch in the cafeteria.", "N4", undefined, "ドウ"],
        ["大学の**講堂**で入学式がありました。", "だいがく の **こうどう** で にゅうがくしき が ありました。", "The entrance ceremony was held in the university auditorium.", "N2", undefined, "ドウ"],
      ], [
        ["食堂", "しょくどう", "dining hall, cafeteria", "N4", "会社の**食堂**は安くておいしいです。", "The company cafeteria is cheap and good.", "かいしゃ の **しょくどう** は やすくて おいしい です。"],
        ["講堂", "こうどう", "auditorium", "N2", "全員**講堂**に集まってください。", "Everyone, please gather in the auditorium.", "ぜんいん **こうどう** に あつまって ください。"],
        ["堂々と", "どうどうと", "confidently, openly", "N2", "彼は**堂々と**話しました。", "He spoke confidently.", "かれ は **どうどうと** はなしました。"],
      ]),
      bk("台", "N4", "stand, platform; counter for machines", "ダイ タイ", "", [
        ["母は**台所**で料理をしています。", "はは は **だいどころ** で りょうり を して います。", "My mother is cooking in the kitchen.", "N4", undefined, "ダイ"],
        ["家に車が**二台**あります。", "いえ に くるま が **にだい** あります。", "We have two cars at home.", "N4", undefined, "ダイ"],
        ["**台風**が近づいています。", "**たいふう** が ちかづいて います。", "A typhoon is approaching.", "N4", undefined, "タイ"],
      ], [
        ["台所", "だいどころ", "kitchen", "N4", "**台所**をきれいに掃除しました。", "I cleaned the kitchen thoroughly.", "**だいどころ** を きれい に そうじ しました。"],
        ["台風", "たいふう", "typhoon", "N4", "**台風**のせいで学校が休みになりました。", "School was closed because of the typhoon.", "**たいふう** の せい で がっこう が やすみ に なりました。"],
        ["舞台", "ぶたい", "stage", "N3", "姉は**舞台**で歌いました。", "My older sister sang on stage.", "あね は **ぶたい** で うたいました。"],
      ]),
      bk("建", "N4", "build", "ケン", "た.てる た.つ", [
        ["兄は大学で**建築**を勉強しています。", "あに は だいがく で **けんちく** を べんきょう して います。", "My older brother studies architecture at university.", "N2", undefined, "ケン"],
        ["来年、家を**建てます**。", "らいねん、 いえ を **たてます**。", "We will build a house next year.", "N4", undefined, "た.てる"],
        ["駅の前に新しいビルが**建ちました**。", "えき の まえ に あたらしい ビル が **たちました**。", "A new building went up in front of the station.", "N3", undefined, "た.つ"],
      ], [
        ["建物", "たてもの", "building", "N4", "あの高い**建物**は何ですか。", "What is that tall building?", "あの たかい **たてもの** は なん です か。"],
        ["建てる", "たてる", "to build", "N4", "この寺は昔に**建てられました**。", "This temple was built long ago.", "この てら は むかし に **たてられました**。"],
        ["建築", "けんちく", "architecture, construction", "N2", "日本の**建築**に興味があります。", "I'm interested in Japanese architecture.", "にほん の **けんちく** に きょうみ が あります。"],
      ]),
    ],
  },
  {
    n: 12,
    note: "Study · teaching, learning and trying",
    items: [
      bk("教", "N4", "teach", "キョウ", "おし.える おそ.わる", [
        ["**教室**に誰もいません。", "**きょうしつ** に だれ も いません。", "There is no one in the classroom.", "N4", undefined, "キョウ"],
        ["道を**教えて**ください。", "みち を **おしえて** ください。", "Please tell me the way.", "N4", undefined, "おし.える"],
        ["田中先生に日本語を**教わりました**。", "たなか せんせい に にほんご を **おそわりました**。", "I learned Japanese from Mr. Tanaka.", "N3", undefined, "おそ.わる"],
      ], [
        ["教える", "おしえる", "to teach, to tell", "N4", "兄は中学校で数学を**教えて**います。", "My older brother teaches maths at a junior high school.", "あに は ちゅうがっこう で すうがく を **おしえて** います。"],
        ["教室", "きょうしつ", "classroom, class", "N4", "料理**教室**に通っています。", "I attend a cooking class.", "りょうり **きょうしつ** に かよって います。"],
        ["教会", "きょうかい", "church", "N4", "日曜日に**教会**へ行きます。", "I go to church on Sundays.", "にちようび に **きょうかい** へ いきます。"],
      ]),
      bk("習", "N4", "learn", "シュウ", "なら.う", [
        ["毎日ピアノを**練習**します。", "まいにち ピアノ を **れんしゅう** します。", "I practise the piano every day.", "N4", undefined, "シュウ"],
        ["明日の授業を**予習**しました。", "あした の じゅぎょう を **よしゅう** しました。", "I prepared for tomorrow's class.", "N4", undefined, "シュウ"],
        ["子どもの時、水泳を**習いました**。", "こども の とき、 すいえい を **ならいました**。", "I learned to swim as a child.", "N4", undefined, "なら.う"],
      ], [
        ["練習", "れんしゅう", "practice", "N4", "サッカーの**練習**は毎週土曜日です。", "Soccer practice is every Saturday.", "サッカー の **れんしゅう** は まいしゅう どようび です。"],
        ["習う", "ならう", "to learn", "N4", "妹は英語を**習って**います。", "My younger sister is learning English.", "いもうと は えいご を **ならって** います。"],
        ["復習", "ふくしゅう", "review", "N4", "家で今日の**復習**をします。", "I review today's lesson at home.", "いえ で きょう の **ふくしゅう** を します。"],
      ]),
      bk("勉", "N4", "exertion, effort", "ベン", "", [
        ["毎晩日本語を**勉強**します。", "まいばん にほんご を **べんきょう** します。", "I study Japanese every evening.", "N5", undefined, "ベン"],
        ["図書館で**勉強**しましょう。", "としょかん で **べんきょう** しましょう。", "Let's study at the library.", "N5", undefined, "ベン"],
      ], [
        ["勉強", "べんきょう", "study", "N5", "**勉強**の時間はテレビを見ません。", "I don't watch TV during study time.", "**べんきょう** の じかん は テレビ を みません。"],
        ["勉強家", "べんきょうか", "hard worker, studious person", undefined, "姉はとても**勉強家**です。", "My older sister is very studious.", "あね は とても **べんきょうか** です。"],
      ]),
      bk("強", "N4", "strong", "キョウ", "つよ.い", [
        ["テストの前に**勉強**しました。", "テスト の まえ に **べんきょう** しました。", "I studied before the test.", "N5", undefined, "キョウ"],
        ["**強い**風が吹いています。", "**つよい** かぜ が ふいて います。", "A strong wind is blowing.", "N4", undefined, "つよ.い"],
      ], [
        ["強い", "つよい", "strong", "N4", "このチームはとても**強い**です。", "This team is very strong.", "この チーム は とても **つよい** です。"],
        ["勉強", "べんきょう", "study", "N5", "大学で経済を**勉強**しています。", "I'm studying economics at university.", "だいがく で けいざい を **べんきょう** して います。"],
        ["強風", "きょうふう", "strong wind", undefined, "**強風**で電車が遅れました。", "The train was delayed by strong winds.", "**きょうふう** で でんしゃ が おくれました。"],
      ]),
      bk("試", "N4", "test, try", "シ", "ため.す", [
        ["明日、日本語の**試験**があります。", "あした、 にほんご の **しけん** が あります。", "I have a Japanese exam tomorrow.", "N4", undefined, "シ"],
        ["日曜日にサッカーの**試合**を見ました。", "にちようび に サッカー の **しあい** を みました。", "I watched a soccer match on Sunday.", "N4", undefined, "シ"],
        ["新しい方法を**試して**みます。", "あたらしい ほうほう を **ためして** みます。", "I'll try out a new method.", "N3", undefined, "ため.す"],
      ], [
        ["試験", "しけん", "exam", "N4", "**試験**に合格しました。", "I passed the exam.", "**しけん** に ごうかく しました。"],
        ["試合", "しあい", "match, game", "N4", "明日の**試合**に勝ちたいです。", "I want to win tomorrow's match.", "あした の **しあい** に かちたい です。"],
        ["試す", "ためす", "to try, to test", "N3", "新しいレシピを**試しました**。", "I tried a new recipe.", "あたらしい レシピ を **ためしました**。"],
      ]),
    ],
  },
  {
    n: 13,
    note: "Study · exams, research and questions",
    items: [
      bk("験", "N4", "test, verify", "ケン", "", [
        ["来週、大学の**試験**を受けます。", "らいしゅう、 だいがく の **しけん** を うけます。", "I'm taking a university exam next week.", "N4", undefined, "ケン"],
        ["日本で働いた**経験**があります。", "にほん で はたらいた **けいけん** が あります。", "I have experience working in Japan.", "N3", undefined, "ケン"],
      ], [
        ["試験", "しけん", "exam", "N4", "**試験**の前はよく寝てください。", "Get plenty of sleep before the exam.", "**しけん** の まえ は よく ねて ください。"],
        ["経験", "けいけん", "experience", "N3", "いい**経験**になりました。", "It was a good experience.", "いい **けいけん** に なりました。"],
        ["実験", "じっけん", "experiment", "N3", "理科の授業で**実験**をしました。", "We did an experiment in science class.", "りか の じゅぎょう で **じっけん** を しました。"],
      ]),
      bk("研", "N4", "polish, study", "ケン", "と.ぐ", [
        ["大学で日本の歴史を**研究**しています。", "だいがく で にほん の れきし を **けんきゅう** して います。", "I research Japanese history at university.", "N4", undefined, "ケン"],
        ["ご飯を炊く前にお米を**研ぎます**。", "ごはん を たく まえ に おこめ を **とぎます**。", "I wash the rice before cooking it.", undefined, undefined, "と.ぐ"],
      ], [
        ["研究", "けんきゅう", "research", "N4", "父は**研究**のためにアメリカへ行きました。", "My father went to America for research.", "ちち は **けんきゅう** の ため に アメリカ へ いきました。"],
        ["研究者", "けんきゅうしゃ", "researcher", "N3", "姉は**研究者**になりたいそうです。", "My older sister says she wants to be a researcher.", "あね は **けんきゅうしゃ** に なりたい そう です。"],
        ["研修", "けんしゅう", "training", "N2", "新しい社員は**研修**を受けます。", "New employees receive training.", "あたらしい しゃいん は **けんしゅう** を うけます。"],
      ]),
      bk("究", "N4", "research, investigate", "キュウ", "", [
        ["先生は宇宙を**研究**しています。", "せんせい は うちゅう を **けんきゅう** して います。", "The professor researches outer space.", "N4", undefined, "キュウ"],
        ["**研究室**で実験をします。", "**けんきゅうしつ** で じっけん を します。", "We do experiments in the laboratory.", "N3", undefined, "キュウ"],
      ], [
        ["研究", "けんきゅう", "research", "N4", "この**研究**には三年かかりました。", "This research took three years.", "この **けんきゅう** に は さんねん かかりました。"],
        ["研究室", "けんきゅうしつ", "laboratory, professor's office", "N3", "先生は**研究室**にいます。", "The professor is in the lab.", "せんせい は **けんきゅうしつ** に います。"],
      ]),
      bk("問", "N4", "question, ask", "モン", "と.う", [
        ["この**問題**は難しいです。", "この **もんだい** は むずかしい です。", "This problem is difficult.", "N4", undefined, "モン"],
        ["何か**質問**はありますか。", "なにか **しつもん** は あります か。", "Do you have any questions?", "N4", undefined, "モン"],
        ["詳しいことは電話で**問い合わせて**ください。", "くわしい こと は でんわ で **といあわせて** ください。", "Please call to ask for details.", "N3", undefined, "と.う"],
      ], [
        ["質問", "しつもん", "question", "N4", "先生に**質問**しました。", "I asked the teacher a question.", "せんせい に **しつもん** しました。"],
        ["問題", "もんだい", "problem, question", "N4", "**問題**ありません。", "No problem.", "**もんだい** ありません。"],
        ["訪問", "ほうもん", "visit", "N2", "来週、お客様の会社を**訪問**します。", "Next week I will visit a client's company.", "らいしゅう、 おきゃくさま の かいしゃ を **ほうもん** します。"],
      ]),
      bk("題", "N4", "topic, title", "ダイ", "", [
        ["今日の**宿題**は多いです。", "きょう の **しゅくだい** は おおい です。", "There is a lot of homework today.", "N4", undefined, "ダイ"],
        ["この本の**題名**は何ですか。", "この ほん の **だいめい** は なん です か。", "What is the title of this book?", "N3", undefined, "ダイ"],
      ], [
        ["宿題", "しゅくだい", "homework", "N4", "**宿題**を忘れました。", "I forgot my homework.", "**しゅくだい** を わすれました。"],
        ["問題", "もんだい", "problem, question", "N4", "テストの**問題**は簡単でした。", "The test questions were easy.", "テスト の **もんだい** は かんたん でした。"],
        ["話題", "わだい", "topic", "N3", "その映画は今**話題**になっています。", "That movie is a hot topic right now.", "その えいが は いま **わだい** に なって います。"],
      ]),
    ],
  },
  {
    n: 14,
    note: "Study · answers, reason and thinking",
    items: [
      bk("答", "N4", "answer", "トウ", "こた.える", [
        ["アンケートに**回答**してください。", "アンケート に **かいとう** して ください。", "Please answer the survey.", "N3", undefined, "トウ"],
        ["先生の質問に**答えました**。", "せんせい の しつもん に **こたえました**。", "I answered the teacher's question.", "N4", undefined, "こた.える"],
      ], [
        ["答え", "こたえ", "answer", "N4", "**答え**を書いてください。", "Please write the answer.", "**こたえ** を かいて ください。"],
        ["答える", "こたえる", "to answer", "N4", "大きい声で**答えて**ください。", "Please answer in a loud voice.", "おおきい こえ で **こたえて** ください。"],
        ["解答", "かいとう", "answer, solution", "N2", "**解答**は次のページにあります。", "The answers are on the next page.", "**かいとう** は つぎ の ページ に あります。"],
      ]),
      bk("理", "N4", "reason, logic", "リ", "", [
        ["姉は**料理**が得意です。", "あね は **りょうり** が とくい です。", "My older sister is good at cooking.", "N4", undefined, "リ"],
        ["**無理**をしないでください。", "**むり** を しないで ください。", "Please don't overdo it.", "N4", undefined, "リ"],
      ], [
        ["理由", "りゆう", "reason", "N4", "遅れた**理由**を教えてください。", "Please tell me why you were late.", "おくれた **りゆう** を おしえて ください。"],
        ["無理", "むり", "impossible, unreasonable", "N4", "一日で終わらせるのは**無理**です。", "It's impossible to finish it in one day.", "いちにち で おわらせる の は **むり** です。"],
        ["料理", "りょうり", "cooking, dish", "N4", "週末に**料理**を作ります。", "I cook on weekends.", "しゅうまつ に **りょうり** を つくります。"],
      ]),
      bk("意", "N4", "meaning, mind", "イ", "", [
        ["車に**注意**してください。", "くるま に **ちゅうい** して ください。", "Please watch out for cars.", "N4", undefined, "イ"],
        ["晩ご飯の**用意**ができました。", "ばんごはん の **ようい** が できました。", "Dinner is ready.", "N4", undefined, "イ"],
      ], [
        ["意見", "いけん", "opinion", "N4", "あなたの**意見**を聞かせてください。", "Please tell me your opinion.", "あなた の **いけん** を きかせて ください。"],
        ["注意", "ちゅうい", "caution, care", "N4", "階段では足元に**注意**してください。", "Please watch your step on the stairs.", "かいだん で は あしもと に **ちゅうい** して ください。"],
        ["意味", "いみ", "meaning", "N4", "この文の**意味**がわかりますか。", "Do you understand what this sentence means?", "この ぶん の **いみ** が わかります か。"],
      ]),
      bk("考", "N4", "think, consider", "コウ", "かんが.える", [
        ["この本を**参考**にしました。", "この ほん を **さんこう** に しました。", "I used this book as a reference.", "N3", undefined, "コウ"],
        ["よく**考えて**から決めます。", "よく **かんがえて** から きめます。", "I'll decide after thinking carefully.", "N4", undefined, "かんが.える"],
      ], [
        ["考える", "かんがえる", "to think, to consider", "N4", "将来のことを**考えて**います。", "I'm thinking about my future.", "しょうらい の こと を **かんがえて** います。"],
        ["考え", "かんがえ", "idea, thought", "N4", "それはいい**考え**ですね。", "That's a good idea.", "それ は いい **かんがえ** です ね。"],
        ["参考", "さんこう", "reference", "N3", "先輩の意見を**参考**にします。", "I'll take my senior's advice into account.", "せんぱい の いけん を **さんこう** に します。"],
      ]),
    ],
  },
];
