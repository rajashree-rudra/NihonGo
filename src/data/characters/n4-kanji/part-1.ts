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
      ], []),
      bk("者", "N4", "person, someone", "シャ", "もの", [
        ["父は**医者**です。", "ちち は **いしゃ** です。", "My father is a doctor.", "N4", undefined, "シャ"],
        ["この町には**若者**が多いです。", "この まち に は **わかもの** が おおい です。", "There are many young people in this town.", "N3", undefined, "もの"],
      ], []),
      bk("員", "N4", "member, staff", "イン", "", [
        ["兄は**会社員**です。", "あに は **かいしゃいん** です。", "My older brother is an office worker.", "N4", undefined, "イン"],
        ["**店員**さんに聞きましょう。", "**てんいん** さん に ききましょう。", "Let's ask the shop assistant.", "N4", undefined, "イン"],
      ], []),
      bk("主", "N4", "master, main", "シュ", "ぬし おも", [
        ["**主人**は今出かけています。", "**しゅじん** は いま でかけて います。", "My husband is out right now.", "N4", undefined, "シュ"],
        ["この傘の**持ち主**は誰ですか。", "この かさ の **もちぬし** は だれ です か。", "Who is the owner of this umbrella?", "N3", undefined, "ぬし"],
        ["**主な**仕事は何ですか。", "**おもな** しごと は なん です か。", "What is your main job?", "N3", undefined, "おも"],
      ], []),
      bk("族", "N4", "family, tribe", "ゾク", "", [
        ["私の**家族**は四人です。", "わたし の **かぞく** は よにん です。", "There are four people in my family.", "N4", undefined, "ゾク"],
        ["夏休みに**家族旅行**をしました。", "なつやすみ に **かぞくりょこう** を しました。", "We went on a family trip in the summer holidays.", "N4", undefined, "ゾク"],
        ["**水族館**で魚を見ました。", "**すいぞくかん** で さかな を みました。", "I saw fish at the aquarium.", "N4", undefined, "ゾク"],
      ], []),
    ],
  },
  {
    n: 2,
    note: "People · parents and siblings",
    items: [
      bk("親", "N4", "parent, intimate", "シン", "おや した.しい", [
        ["週に一回**親**に電話をかけます。", "しゅう に いっかい **おや** に でんわ を かけます。", "I call my parents once a week.", "N4", undefined, "おや"],
        ["**親切**な人に道を教えてもらいました。", "**しんせつ** な ひと に みち を おしえて もらいました。", "A kind person showed me the way.", "N4", undefined, "シン"],
        ["**両親**は大阪に住んでいます。", "**りょうしん** は おおさか に すんで います。", "My parents live in Osaka.", "N4", undefined, "シン"],
        ["田中さんとは**親しい**です。", "たなか さん と は **したしい** です。", "I am close to Mr. Tanaka.", "N3", undefined, "した.しい"],
      ], []),
      bk("兄", "N4", "older brother", "キョウ", "あに", [
        ["**兄**は銀行で働いています。", "**あに** は ぎんこう で はたらいて います。", "My older brother works at a bank.", "N4", undefined, "あに"],
        ["**兄弟**はいますか。", "**きょうだい** は います か。", "Do you have any brothers or sisters?", "N4", undefined, "キョウ"],
      ], [
        ["お兄さん", "おにいさん", "older brother (polite)", "N5", "田中さんの**お兄さん**は先生です。", "Mr. Tanaka's older brother is a teacher.", "たなか さん の **おにいさん** は せんせい です。"],
      ]),
      bk("弟", "N4", "younger brother", "ダイ デ", "おとうと", [
        ["**弟**は高校生です。", "**おとうと** は こうこうせい です。", "My younger brother is a high school student.", "N4", undefined, "おとうと"],
        ["**兄弟**は何人いますか。", "**きょうだい** は なんにん います か。", "How many siblings do you have?", "N4", undefined, "ダイ"],
        ["先生には**弟子**がたくさんいます。", "せんせい に は **でし** が たくさん います。", "The teacher has many pupils.", "N2", undefined, "デ"],
      ], []),
      bk("姉", "N4", "older sister", "シ", "あね", [
        ["**姉**は東京に住んでいます。", "**あね** は とうきょう に すんで います。", "My older sister lives in Tokyo.", "N4", undefined, "あね"],
        ["あの二人は**姉妹**です。", "あの ふたり は **しまい** です。", "Those two are sisters.", "N3", undefined, "シ"],
      ], [
        ["お姉さん", "おねえさん", "older sister (polite)", "N5", "**お姉さん**はお元気ですか。", "How is your older sister?", "**おねえさん** は おげんき です か。"],
      ]),
    ],
  },
  {
    n: 3,
    note: "People · sister, body, heart and health",
    items: [
      bk("妹", "N4", "younger sister", "マイ", "いもうと", [
        ["**妹**は小学生です。", "**いもうと** は しょうがくせい です。", "My younger sister is an elementary school student.", "N4", undefined, "いもうと"],
        ["**妹さん**はおいくつですか。", "**いもうとさん** は おいくつ です か。", "How old is your younger sister?", "N4", undefined, "いもうと"],
        ["**姉妹**でピアノを習っています。", "**しまい** で ピアノ を ならって います。", "The sisters are learning the piano.", "N3", undefined, "マイ"],
      ], []),
      bk("体", "N4", "body", "タイ", "からだ", [
        ["**体**に気をつけてください。", "**からだ** に き を つけて ください。", "Please take care of yourself.", "N4", undefined, "からだ"],
        ["**体育館**でバスケットボールをします。", "**たいいくかん** で バスケットボール を します。", "We play basketball in the gym.", "N4", undefined, "タイ"],
        ["宿題は**大体**終わりました。", "しゅくだい は **だいたい** おわりました。", "I've mostly finished my homework.", "N4", undefined, "タイ"],
      ], []),
      bk("心", "N4", "heart, mind", "シン", "こころ", [
        ["彼は**心**のやさしい人です。", "かれ は **こころ** の やさしい ひと です。", "He is a kind-hearted person.", "N3", undefined, "こころ"],
        ["**心配**しないでください。", "**しんぱい** しないで ください。", "Please don't worry.", "N4", undefined, "シン"],
        ["テストが終わって**安心**しました。", "テスト が おわって **あんしん** しました。", "I was relieved that the test was over.", "N4", undefined, "シン"],
        ["学生たちは**熱心**に勉強しています。", "がくせいたち は **ねっしん** に べんきょう して います。", "The students are studying hard.", "N4", undefined, "シン"],
      ], []),
      bk("医", "N4", "doctor, medicine", "イ", "", [
        ["**医者**に薬をもらいました。", "**いしゃ** に くすり を もらいました。", "I got medicine from the doctor.", "N4", undefined, "イ"],
        ["明日**歯医者**に行きます。", "あした **はいしゃ** に いきます。", "I'm going to the dentist tomorrow.", "N4", undefined, "イ"],
      ], []),
    ],
  },
  {
    n: 4,
    note: "Time · seasons and days of the week",
    items: [
      bk("春", "N4", "spring", "シュン", "はる", [
        ["**春**になると、桜が咲きます。", "**はる** に なる と、 さくら が さきます。", "When spring comes, the cherry blossoms bloom.", "N4", undefined, "はる"],
        ["**春休み**に京都へ行きます。", "**はるやすみ** に きょうと へ いきます。", "I'll go to Kyoto during spring break.", "N4", undefined, "はる"],
        ["高校時代は私の**青春**でした。", "こうこう じだい は わたし の **せいしゅん** でした。", "My high school days were my youth.", "N2", undefined, "シュン"],
      ], []),
      bk("夏", "N4", "summer", "カ", "なつ", [
        ["**夏**は海で泳ぎます。", "**なつ** は うみ で およぎます。", "In summer I swim in the sea.", "N4", undefined, "なつ"],
        ["**夏休み**に海へ行きました。", "**なつやすみ** に うみ へ いきました。", "I went to the sea during summer vacation.", "N4", undefined, "なつ"],
        ["日本には**春夏秋冬**があります。", "にほん に は **しゅんかしゅうとう** が あります。", "Japan has four seasons.", "N2", undefined, "カ"],
      ], []),
      bk("秋", "N4", "autumn", "シュウ", "あき", [
        ["**秋**は紅葉がきれいです。", "**あき** は こうよう が きれい です。", "In autumn the leaves are beautiful.", "N4", undefined, "あき"],
        ["九月に**秋分**の日があります。", "くがつ に **しゅうぶん** の ひ が あります。", "Autumnal Equinox Day is in September.", "N2", undefined, "シュウ"],
      ], []),
      bk("冬", "N4", "winter", "トウ", "ふゆ", [
        ["**冬**は雪がたくさん降ります。", "**ふゆ** は ゆき が たくさん ふります。", "It snows a lot in winter.", "N4", undefined, "ふゆ"],
        ["**冬休み**にスキーをしました。", "**ふゆやすみ** に スキー を しました。", "I went skiing during winter vacation.", "N4", undefined, "ふゆ"],
        ["くまは**冬眠**します。", "くま は **とうみん** します。", "Bears hibernate.", "N2", undefined, "トウ"],
      ], []),
      bk("早", "N4", "early, fast", "ソウ", "はや.い", [
        ["明日は**早く**起きます。", "あした は **はやく** おきます。", "I will get up early tomorrow.", "N4", undefined, "はや.い"],
        ["**早朝**に公園を散歩します。", "**そうちょう** に こうえん を さんぽ します。", "I take a walk in the park early in the morning.", "N2", undefined, "ソウ"],
      ], []),
      bk("曜", "N4", "day of the week", "ヨウ", "", [
        ["今日は何**曜日**ですか。", "きょう は なん **ようび** です か。", "What day of the week is it today?", "N5", undefined, "ヨウ"],
      ], [
        ["日曜日", "にちようび", "Sunday", "N5", "**日曜日**に映画を見ます。", "I'll watch a movie on Sunday.", "**にちようび** に えいが を みます。"],
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
        ["運転を**交代**しましょう。", "うんてん を **こうたい** しましょう。", "Let's take turns driving.", "N3", undefined, "タイ"],
        ["コーヒーの**代わり**にお茶を飲みます。", "コーヒー の **かわり** に おちゃ を のみます。", "I drink tea instead of coffee.", "N3", undefined, "か.わる"],
      ], []),
      bk("世", "N4", "world, generation", "セ セイ", "よ", [
        ["**世界**で一番高い山はどこですか。", "**せかい** で いちばん たかい やま は どこ です か。", "Where is the highest mountain in the world?", "N4", undefined, "セ"],
        ["いつも**お世話**になっています。", "いつも **おせわ** に なって います。", "Thank you for always looking after me.", "N4", undefined, "セ"],
        ["今は二十一**世紀**です。", "いま は にじゅういち **せいき** です。", "It is now the 21st century.", "N3", undefined, "セイ"],
        ["**世の中**にはいろいろな人がいます。", "**よのなか** に は いろいろ な ひと が います。", "There are all kinds of people in the world.", "N3", undefined, "よ"],
      ], []),
      bk("明", "N4", "bright, clear", "メイ ミョウ", "あか.るい あ.ける", [
        ["この部屋はとても**明るい**です。", "この へや は とても **あかるい** です。", "This room is very bright.", "N4", undefined, "あか.るい"],
        ["先生が文法を**説明**しました。", "せんせい が ぶんぽう を **せつめい** しました。", "The teacher explained the grammar.", "N4", undefined, "メイ"],
        ["**明日**、またご連絡します。", "**みょうにち**、 また ごれんらく します。", "I will contact you again tomorrow.", "N4", undefined, "ミョウ"],
        ["**明けまして**おめでとうございます。", "**あけまして** おめでとう ございます。", "Happy New Year!", "N4", undefined, "あ.ける"],
      ], [
        ["明日", "あした", "tomorrow", "N5", "**明日**は日曜日です。", "Tomorrow is Sunday.", "**あした** は にちようび です。"],
      ]),
      bk("始", "N4", "begin", "シ", "はじ.める はじ.まる", [
        ["来月から日本語を**始めます**。", "らいげつ から にほんご を **はじめます**。", "I will start learning Japanese next month.", "N4", undefined, "はじ.める"],
        ["授業は九時に**始まります**。", "じゅぎょう は くじ に **はじまります**。", "Class begins at nine.", "N4", undefined, "はじ.まる"],
        ["コンサートの**開始**は七時です。", "コンサート の **かいし** は しちじ です。", "The concert starts at seven.", "N3", undefined, "シ"],
      ], []),
      bk("終", "N4", "end, finish", "シュウ", "お.わる", [
        ["仕事は六時に**終わります**。", "しごと は ろくじ に **おわります**。", "Work ends at six.", "N4", undefined, "お.わる"],
        ["**終電**は何時ですか。", "**しゅうでん** は なんじ です か。", "What time is the last train?", "N3", undefined, "シュウ"],
      ], []),
    ],
  },
  {
    n: 6,
    note: "Nature · land, fields and sea",
    items: [
      bk("地", "N4", "ground, earth", "チ ジ", "", [
        ["**地図**を見ながら歩きます。", "**ちず** を みながら あるきます。", "I walk while looking at a map.", "N4", undefined, "チ"],
        ["**地下鉄**で行くと早いです。", "**ちかてつ** で いく と はやい です。", "It's faster to go by subway.", "N4", undefined, "チ"],
        ["日本は**地震**が多いです。", "にほん は **じしん** が おおい です。", "Japan has many earthquakes.", "N4", undefined, "ジ"],
      ], []),
      bk("界", "N4", "world, boundary", "カイ", "", [
        ["**世界**にはたくさんの国があります。", "**せかい** に は たくさん の くに が あります。", "There are many countries in the world.", "N4", undefined, "カイ"],
      ], []),
      bk("野", "N4", "field, plain", "ヤ", "の", [
        ["毎日**野菜**を食べます。", "まいにち **やさい** を たべます。", "I eat vegetables every day.", "N4", undefined, "ヤ"],
        ["弟は**野球**が好きです。", "おとうと は **やきゅう** が すき です。", "My younger brother likes baseball.", "N4", undefined, "ヤ"],
        ["子どもたちが**野原**で遊んでいます。", "こどもたち が **のはら** で あそんで います。", "The children are playing in the field.", "N3", undefined, "の"],
      ], []),
      bk("海", "N4", "sea, ocean", "カイ", "うみ", [
        ["**海**の近くに住んでいます。", "**うみ** の ちかく に すんで います。", "I live near the sea.", "N4", undefined, "うみ"],
        ["来年、**海外**へ行きたいです。", "らいねん、 **かいがい** へ いきたい です。", "I want to go abroad next year.", "N3", undefined, "カイ"],
      ], []),
    ],
  },
  {
    n: 7,
    note: "Nature · wind and colours",
    items: [
      bk("風", "N4", "wind, style", "フウ フ", "かぜ", [
        ["今日は**風**が強いです。", "きょう は **かぜ** が つよい です。", "The wind is strong today.", "N4", undefined, "かぜ"],
        ["明日、**台風**が来るそうです。", "あした、 **たいふう** が くる そう です。", "I hear a typhoon is coming tomorrow.", "N4", undefined, "フウ"],
        ["毎晩**お風呂**に入ります。", "まいばん **おふろ** に はいります。", "I take a bath every evening.", "N4", undefined, "フ"],
        ["**風邪**をひいて、学校を休みました。", "**かぜ** を ひいて、 がっこう を やすみました。", "I caught a cold and stayed home from school.", "N4", undefined, "かぜ"],
      ], []),
      bk("黒", "N4", "black", "コク", "くろ", [
        ["**黒い**かばんを買いました。", "**くろい** かばん を かいました。", "I bought a black bag.", "N4", undefined, "くろ"],
        ["**黒**と白、どちらがいいですか。", "**くろ** と しろ、 どちら が いい です か。", "Which is better, black or white?", "N4", undefined, "くろ"],
        ["先生が**黒板**に字を書きました。", "せんせい が **こくばん** に じ を かきました。", "The teacher wrote on the blackboard.", "N3", undefined, "コク"],
      ], []),
      bk("青", "N4", "blue, green", "セイ", "あお", [
        ["今日は空が**青い**です。", "きょう は そら が **あおい** です。", "The sky is blue today.", "N4", undefined, "あお"],
        ["あの**青年**はとても親切です。", "あの **せいねん** は とても しんせつ です。", "That young man is very kind.", "N3", undefined, "セイ"],
      ], []),
      bk("色", "N4", "colour", "ショク シキ", "いろ", [
        ["どの**色**が好きですか。", "どの **いろ** が すき です か。", "Which colour do you like?", "N4", undefined, "いろ"],
        ["窓から**景色**を見ました。", "まど から **けしき** を みました。", "I looked at the scenery from the window.", "N4", undefined, "シキ"],
        ["**黄色い**花が咲いています。", "**きいろい** はな が さいて います。", "Yellow flowers are blooming.", "N4", undefined, "いろ"],
        ["この町の**特色**は古いお寺です。", "この まち の **とくしょく** は ふるい おてら です。", "This town's special feature is its old temples.", "N2", undefined, "ショク"],
      ], []),
    ],
  },
  {
    n: 8,
    note: "Food · meat, birds and meals",
    items: [
      bk("肉", "N4", "meat, flesh", "ニク", "", [
        ["**肉**と魚とどちらが好きですか。", "**にく** と さかな と どちら が すき です か。", "Which do you like better, meat or fish?", "N4", undefined, "ニク"],
        ["晩ご飯に**牛肉**を食べました。", "ばんごはん に **ぎゅうにく** を たべました。", "I ate beef for dinner.", "N4", undefined, "ニク"],
        ["**豚肉**でカレーを作ります。", "**ぶたにく** で カレー を つくります。", "I make curry with pork.", "N4", undefined, "ニク"],
      ], []),
      bk("鳥", "N4", "bird", "チョウ", "とり", [
        ["木の上で**鳥**が鳴いています。", "き の うえ で **とり** が ないて います。", "A bird is singing in the tree.", "N4", undefined, "とり"],
        ["湖に**白鳥**がいます。", "みずうみ に **はくちょう** が います。", "There are swans on the lake.", "N2", undefined, "チョウ"],
      ], []),
      bk("牛", "N4", "cow, cattle", "ギュウ", "うし", [
        ["**牛**が草を食べています。", "**うし** が くさ を たべて います。", "The cow is eating grass.", "N4", undefined, "うし"],
        ["毎朝**牛乳**を飲みます。", "まいあさ **ぎゅうにゅう** を のみます。", "I drink milk every morning.", "N4", undefined, "ギュウ"],
        ["**牛肉**のカレーが好きです。", "**ぎゅうにく** の カレー が すき です。", "I like beef curry.", "N4", undefined, "ギュウ"],
      ], []),
      bk("飯", "N4", "meal, cooked rice", "ハン", "めし", [
        ["一緒に**ご飯**を食べましょう。", "いっしょ に **ごはん** を たべましょう。", "Let's eat together.", "N5", undefined, "ハン"],
        ["**晩ご飯**は何にしますか。", "**ばんごはん** は なに に します か。", "What shall we have for dinner?", "N4", undefined, "ハン"],
        ["**昼ご飯**を食べに行きましょう。", "**ひるごはん** を たべ に いきましょう。", "Let's go and eat lunch.", "N4", undefined, "ハン"],
        ["お昼に**焼き飯**を食べました。", "おひる に **やきめし** を たべました。", "I had fried rice for lunch.", "N3", undefined, "めし"],
      ], [
        ["朝ご飯", "あさごはん", "breakfast", "N5", "今日の**朝ご飯**はパンでした。", "Today's breakfast was bread.", "きょう の **あさごはん** は パン でした。"],
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
        ["**茶色**のくつを買いました。", "**ちゃいろ** の くつ を かいました。", "I bought brown shoes.", "N4", undefined, "チャ"],
      ], []),
      bk("味", "N4", "taste, flavour", "ミ", "あじ", [
        ["このスープは**味**が薄いです。", "この スープ は **あじ** が うすい です。", "This soup tastes bland.", "N4", undefined, "あじ"],
        ["この言葉の**意味**がわかりません。", "この ことば の **いみ** が わかりません。", "I don't understand the meaning of this word.", "N4", undefined, "ミ"],
        ["私の**趣味**は料理です。", "わたし の **しゅみ** は りょうり です。", "My hobby is cooking.", "N4", undefined, "ミ"],
      ], []),
      bk("料", "N4", "fee, materials", "リョウ", "", [
        ["父は**料理**が上手です。", "ちち は **りょうり** が じょうず です。", "My father is good at cooking.", "N4", undefined, "リョウ"],
      ], []),
      bk("洋", "N4", "ocean, Western", "ヨウ", "", [
        ["**洋服**を買いに行きます。", "**ようふく** を かい に いきます。", "I'm going to buy some clothes.", "N4", undefined, "ヨウ"],
      ], []),
    ],
  },
  {
    n: 10,
    note: "Places · towns and public buildings",
    items: [
      bk("場", "N4", "place", "ジョウ", "ば", [
        ["この**場所**で写真を撮ってもいいですか。", "この **ばしょ** で しゃしん を とって も いい です か。", "May I take photos in this place?", "N4", undefined, "ば"],
        ["**会場**はこちらです。", "**かいじょう** は こちら です。", "The venue is this way.", "N4", undefined, "ジョウ"],
        ["**駐車場**に車を止めました。", "**ちゅうしゃじょう** に くるま を とめました。", "I parked the car in the parking lot.", "N4", undefined, "ジョウ"],
        ["靴の**売り場**は三階です。", "くつ の **うりば** は さんがい です。", "The shoe department is on the third floor.", "N4", undefined, "ば"],
      ], []),
      bk("京", "N4", "capital", "キョウ", "", [
        ["**東京**に住んでいます。", "**とうきょう** に すんで います。", "I live in Tokyo.", "N5", undefined, "キョウ"],
        ["来週、**京都**へ行きます。", "らいしゅう、 **きょうと** へ いきます。", "I'm going to Kyoto next week.", "N4", undefined, "キョウ"],
      ], []),
      bk("町", "N4", "town", "チョウ", "まち", [
        ["この**町**は静かです。", "この **まち** は しずか です。", "This town is quiet.", "N4", undefined, "まち"],
        ["新しい**町長**が決まりました。", "あたらしい **ちょうちょう** が きまりました。", "A new town mayor has been chosen.", "N2", undefined, "チョウ"],
      ], []),
      bk("院", "N4", "institution", "イン", "", [
        ["祖母は**病院**にいます。", "そぼ は **びょういん** に います。", "My grandmother is in hospital.", "N4", undefined, "イン"],
      ], []),
      bk("館", "N4", "hall, building", "カン", "", [
        ["**図書館**で本を借りました。", "**としょかん** で ほん を かりました。", "I borrowed a book from the library.", "N4", undefined, "カン"],
        ["日曜日に**美術館**へ行きました。", "にちようび に **びじゅつかん** へ いきました。", "I went to the art museum on Sunday.", "N4", undefined, "カン"],
        ["駅の近くに**映画館**があります。", "えき の ちかく に **えいがかん** が あります。", "There is a movie theatre near the station.", "N4", undefined, "カン"],
        ["温泉の**旅館**に泊まりました。", "おんせん の **りょかん** に とまりました。", "We stayed at a hot-spring inn.", "N4", undefined, "カン"],
      ], []),
    ],
  },
  {
    n: 11,
    note: "Places · shops, rooms and buildings",
    items: [
      bk("屋", "N4", "shop, roof", "オク", "や", [
        ["私の**部屋**は二階です。", "わたし の **へや** は にかい です。", "My room is on the second floor.", "N5", undefined, "や"],
        ["駅の前に**本屋**があります。", "えき の まえ に **ほんや** が あります。", "There is a bookshop in front of the station.", "N4", undefined, "や"],
        ["**八百屋**でトマトを買いました。", "**やおや** で トマト を かいました。", "I bought tomatoes at the greengrocer's.", "N4", undefined, "や"],
        ["**屋上**からの景色がきれいです。", "**おくじょう** から の けしき が きれい です。", "The view from the rooftop is beautiful.", "N3", undefined, "オク"],
      ], []),
      bk("室", "N4", "room", "シツ", "", [
        ["**教室**に学生が二十人います。", "**きょうしつ** に がくせい が にじゅうにん います。", "There are twenty students in the classroom.", "N4", undefined, "シツ"],
        ["**会議室**は三階にあります。", "**かいぎしつ** は さんがい に あります。", "The meeting room is on the third floor.", "N4", undefined, "シツ"],
      ], []),
      bk("堂", "N4", "hall", "ドウ", "", [
        ["昼ご飯は**食堂**で食べます。", "ひるごはん は **しょくどう** で たべます。", "I eat lunch in the cafeteria.", "N4", undefined, "ドウ"],
      ], []),
      bk("台", "N4", "stand, platform; counter for machines", "ダイ タイ", "", [
        ["母は**台所**で料理をしています。", "はは は **だいどころ** で りょうり を して います。", "My mother is cooking in the kitchen.", "N4", undefined, "ダイ"],
        ["家に車が**二台**あります。", "いえ に くるま が **にだい** あります。", "We have two cars at home.", "N4", undefined, "ダイ"],
        ["**台風**が近づいています。", "**たいふう** が ちかづいて います。", "A typhoon is approaching.", "N4", undefined, "タイ"],
      ], []),
      bk("建", "N4", "build", "ケン", "た.てる た.つ", [
        ["来年、家を**建てます**。", "らいねん、 いえ を **たてます**。", "We will build a house next year.", "N4", undefined, "た.てる"],
        ["あの高い**建物**は何ですか。", "あの たかい **たてもの** は なん です か。", "What is that tall building?", "N4", undefined, "た.てる"],
        ["兄は大学で**建築**を勉強しています。", "あに は だいがく で **けんちく** を べんきょう して います。", "My older brother studies architecture at university.", "N2", undefined, "ケン"],
        ["駅の前に新しいビルが**建ちました**。", "えき の まえ に あたらしい ビル が **たちました**。", "A new building went up in front of the station.", "N3", undefined, "た.つ"],
      ], []),
    ],
  },
  {
    n: 12,
    note: "Study · teaching, learning and trying",
    items: [
      bk("教", "N4", "teach", "キョウ", "おし.える おそ.わる", [
        ["道を**教えて**ください。", "みち を **おしえて** ください。", "Please tell me the way.", "N4", undefined, "おし.える"],
        ["**教室**に誰もいません。", "**きょうしつ** に だれ も いません。", "There is no one in the classroom.", "N4", undefined, "キョウ"],
        ["日曜日に**教会**へ行きます。", "にちようび に **きょうかい** へ いきます。", "I go to church on Sundays.", "N4", undefined, "キョウ"],
        ["田中先生に日本語を**教わりました**。", "たなか せんせい に にほんご を **おそわりました**。", "I learned Japanese from Mr. Tanaka.", "N3", undefined, "おそ.わる"],
      ], []),
      bk("習", "N4", "learn", "シュウ", "なら.う", [
        ["妹は英語を**習って**います。", "いもうと は えいご を **ならって** います。", "My younger sister is learning English.", "N4", undefined, "なら.う"],
        ["毎日ピアノを**練習**します。", "まいにち ピアノ を **れんしゅう** します。", "I practise the piano every day.", "N4", undefined, "シュウ"],
        ["明日の授業を**予習**しました。", "あした の じゅぎょう を **よしゅう** しました。", "I prepared for tomorrow's class.", "N4", undefined, "シュウ"],
        ["家で今日の**復習**をします。", "いえ で きょう の **ふくしゅう** を します。", "I review today's lesson at home.", "N4", undefined, "シュウ"],
      ], []),
      bk("勉", "N4", "exertion, effort", "ベン", "", [
        ["毎晩日本語を**勉強**します。", "まいばん にほんご を **べんきょう** します。", "I study Japanese every evening.", "N5", undefined, "ベン"],
      ], []),
      bk("強", "N4", "strong", "キョウ", "つよ.い", [
        ["**強い**風が吹いています。", "**つよい** かぜ が ふいて います。", "A strong wind is blowing.", "N4", undefined, "つよ.い"],
      ], [
        ["勉強", "べんきょう", "study", "N5", "テストの前に**勉強**しました。", "I studied before the test.", "テスト の まえ に **べんきょう** しました。"],
      ]),
      bk("試", "N4", "test, try", "シ", "ため.す", [
        ["明日、日本語の**試験**があります。", "あした、 にほんご の **しけん** が あります。", "I have a Japanese exam tomorrow.", "N4", undefined, "シ"],
        ["日曜日にサッカーの**試合**を見ました。", "にちようび に サッカー の **しあい** を みました。", "I watched a soccer match on Sunday.", "N4", undefined, "シ"],
        ["新しいレシピを**試しました**。", "あたらしい レシピ を **ためしました**。", "I tried a new recipe.", "N3", undefined, "ため.す"],
      ], []),
    ],
  },
  {
    n: 13,
    note: "Study · exams, research and questions",
    items: [
      bk("験", "N4", "test, verify", "ケン", "", [
        ["来週、大学の**試験**を受けます。", "らいしゅう、 だいがく の **しけん** を うけます。", "I'm taking a university exam next week.", "N4", undefined, "ケン"],
      ], []),
      bk("研", "N4", "polish, study", "ケン", "と.ぐ", [
        ["大学で日本の歴史を**研究**しています。", "だいがく で にほん の れきし を **けんきゅう** して います。", "I research Japanese history at university.", "N4", undefined, "ケン"],
        ["ご飯を炊く前にお米を**研ぎます**。", "ごはん を たく まえ に おこめ を **とぎます**。", "I wash the rice before cooking it.", "N1", undefined, "と.ぐ"],
      ], []),
      bk("究", "N4", "research, investigate", "キュウ", "", [
        ["この**研究**には三年かかりました。", "この **けんきゅう** に は さんねん かかりました。", "This research took three years.", "N4", undefined, "キュウ"],
      ], []),
      bk("問", "N4", "question, ask", "モン", "と.う", [
        ["この**問題**は難しいです。", "この **もんだい** は むずかしい です。", "This problem is difficult.", "N4", undefined, "モン"],
        ["何か**質問**はありますか。", "なにか **しつもん** は あります か。", "Do you have any questions?", "N4", undefined, "モン"],
        ["詳しいことは電話で**問い合わせて**ください。", "くわしい こと は でんわ で **といあわせて** ください。", "Please call to ask for details.", "N3", undefined, "と.う"],
      ], []),
      bk("題", "N4", "topic, title", "ダイ", "", [
        ["今日の**宿題**は多いです。", "きょう の **しゅくだい** は おおい です。", "There is a lot of homework today.", "N4", undefined, "ダイ"],
        ["テストの**問題**は簡単でした。", "テスト の **もんだい** は かんたん でした。", "The test questions were easy.", "N4", undefined, "ダイ"],
      ], []),
    ],
  },
  {
    n: 14,
    note: "Study · answers, reason and thinking",
    items: [
      bk("答", "N4", "answer", "トウ", "こた.える", [
        ["先生の質問に**答えました**。", "せんせい の しつもん に **こたえました**。", "I answered the teacher's question.", "N4", undefined, "こた.える"],
        ["**答え**を書いてください。", "**こたえ** を かいて ください。", "Please write the answer.", "N4", undefined, "こた.える"],
        ["アンケートに**回答**してください。", "アンケート に **かいとう** して ください。", "Please answer the survey.", "N3", undefined, "トウ"],
      ], []),
      bk("理", "N4", "reason, logic", "リ", "", [
        ["週末に**料理**を作ります。", "しゅうまつ に **りょうり** を つくります。", "I cook on weekends.", "N4", undefined, "リ"],
        ["**無理**をしないでください。", "**むり** を しないで ください。", "Please don't overdo it.", "N4", undefined, "リ"],
        ["遅れた**理由**を教えてください。", "おくれた **りゆう** を おしえて ください。", "Please tell me why you were late.", "N4", undefined, "リ"],
      ], []),
      bk("意", "N4", "meaning, mind", "イ", "", [
        ["この文の**意味**がわかりますか。", "この ぶん の **いみ** が わかります か。", "Do you understand what this sentence means?", "N4", undefined, "イ"],
        ["車に**注意**してください。", "くるま に **ちゅうい** して ください。", "Please watch out for cars.", "N4", undefined, "イ"],
        ["晩ご飯の**用意**ができました。", "ばんごはん の **ようい** が できました。", "Dinner is ready.", "N4", undefined, "イ"],
        ["あなたの**意見**を聞かせてください。", "あなた の **いけん** を きかせて ください。", "Please tell me your opinion.", "N4", undefined, "イ"],
      ], []),
      bk("考", "N4", "think, consider", "コウ", "かんが.える", [
        ["よく**考えて**から決めます。", "よく **かんがえて** から きめます。", "I'll decide after thinking carefully.", "N4", undefined, "かんが.える"],
        ["それはいい**考え**ですね。", "それ は いい **かんがえ** です ね。", "That's a good idea.", "N4", undefined, "かんが.える"],
        ["この本を**参考**にしました。", "この ほん を **さんこう** に しました。", "I used this book as a reference.", "N3", undefined, "コウ"],
      ], []),
    ],
  },
];
