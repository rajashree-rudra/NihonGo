// N4 kanji book — groups 15–27. Grouped by theme.
// bk(kanji, level, meaning, on'yomi, kun'yomi, [[ja, kana, en, word level]], [[word, reading, meaning, level, example, exampleEn]])
import { bk, type BookGroup } from "../../builders.ts";

export const GROUPS: BookGroup[] = [
  {
    n: 15,
    note: "Culture · letters, languages and sound",
    items: [
      bk("文", "N4", "sentence, writing", "ブン モン", "", [
        ["この**文**を読んでください。", "この **ぶん** を よんで ください。", "Please read this sentence.", "N4", undefined, "ブン"],
        ["日本の**文化**を勉強しています。", "にほん の **ぶんか** を べんきょう して います。", "I am studying Japanese culture.", "N4", undefined, "ブン"],
        ["日本語で**作文**を書きました。", "にほんご で **さくぶん** を かきました。", "I wrote an essay in Japanese.", "N4", undefined, "ブン"],
        ["コーヒーを**注文**しました。", "コーヒー を **ちゅうもん** しました。", "I ordered a coffee.", "N4", undefined, "モン"],
        ["**文学**が好きです。", "**ぶんがく** が すき です。", "I like literature.", "N4", undefined, "ブン"],
      ], []),
      bk("字", "N4", "character, letter", "ジ", "", [
        ["名前を大きい**字**で書いてください。", "なまえ を おおきい **じ** で かいて ください。", "Please write your name in large letters.", "N4", undefined, "ジ"],
      ], [
        ["漢字", "かんじ", "kanji", "N5", "**漢字**は難しいです。", "Kanji are difficult.", "**かんじ** は むずかしい です。"],
      ]),
      bk("漢", "N4", "China, Han", "カン", "", [
        ["**漢字**を三つ覚えました。", "**かんじ** を みっつ おぼえました。", "I learned three kanji.", "N5", undefined, "カン"],
      ], []),
      bk("英", "N4", "England, English", "エイ", "", [
        ["兄は**英語**が上手です。", "あに は **えいご** が じょうず です。", "My older brother is good at English.", "N5", undefined, "エイ"],
      ], []),
      bk("歌", "N4", "song, sing", "カ", "うた うた.う", [
        ["この**歌**が好きです。", "この **うた** が すき です。", "I like this song.", "N5", undefined, "うた"],
        ["妹は**歌手**になりたいです。", "いもうと は **かしゅ** に なりたい です。", "My younger sister wants to become a singer.", "N4", undefined, "カ"],
      ], [
        ["歌う", "うたう", "to sing", "N5", "カラオケで**歌いました**。", "I sang at karaoke.", "カラオケ で **うたいました**。"],
      ]),
      bk("音", "N4", "sound", "オン", "おと ね", [
        ["外で大きい**音**がしました。", "そと で おおきい **おと** が しました。", "There was a loud sound outside.", "N4", undefined, "おと"],
        ["先生の**発音**はきれいです。", "せんせい の **はつおん** は きれい です。", "The teacher's pronunciation is beautiful.", "N4", undefined, "オン"],
        ["友達に**本音**を話しました。", "ともだち に **ほんね** を はなしました。", "I told my friend my true feelings.", "N2", undefined, "ね"],
      ], [
        ["音楽", "おんがく", "music", "N5", "毎晩**音楽**を聞きます。", "I listen to music every night.", "まいばん **おんがく** を ききます。"],
      ]),
    ],
  },
  {
    n: 16,
    note: "Culture · music, film and pictures",
    items: [
      bk("楽", "N4", "fun, music", "ガク ラク", "たの.しい", [
        ["旅行は**楽しかった**です。", "りょこう は **たのしかった** です。", "The trip was fun.", "N5", undefined, "たの.しい"],
        ["夏休みが**楽しみ**です。", "なつやすみ が **たのしみ** です。", "I'm looking forward to the summer holidays.", "N4", undefined, "たの.しい"],
        ["この仕事は**楽**です。", "この しごと は **らく** です。", "This job is easy.", "N3", undefined, "ラク"],
      ], [
        ["音楽", "おんがく", "music", "N5", "父はクラシック**音楽**が好きです。", "My father likes classical music.", "ちち は クラシック **おんがく** が すき です。"],
      ]),
      bk("映", "N4", "reflect, project", "エイ", "うつ.る", [
        ["週末に**映画**を見ました。", "しゅうまつ に **えいが** を みました。", "I watched a movie on the weekend.", "N5", undefined, "エイ"],
        ["湖に山が**映って**います。", "みずうみ に やま が **うつって** います。", "The mountain is reflected in the lake.", "N3", undefined, "うつ.る"],
      ], [
        ["映画館", "えいがかん", "cinema", "N5", "駅の前に**映画館**があります。", "There is a cinema in front of the station.", "えき の まえ に **えいがかん** が あります。"],
      ]),
      bk("画", "N4", "picture, stroke", "ガ カク", "", [
        ["この**映画**はとても面白いです。", "この **えいが** は とても おもしろい です。", "This movie is very interesting.", "N5", undefined, "ガ"],
        ["来年の**計画**を立てました。", "らいねん の **けいかく** を たてました。", "I made plans for next year.", "N4", undefined, "カク"],
      ], []),
      bk("写", "N4", "copy, photograph", "シャ", "うつ.す", [
        ["ここで**写真**を撮ってもいいですか。", "ここ で **しゃしん** を とって も いい です か。", "May I take a photo here?", "N5", undefined, "シャ"],
        ["黒板の字をノートに**写して**ください。", "こくばん の じ を ノート に **うつして** ください。", "Please copy the words on the blackboard into your notebook.", "N3", undefined, "うつ.す"],
      ], []),
      bk("図", "N4", "map, drawing", "ズ ト", "", [
        ["この**地図**はわかりやすいです。", "この **ちず** は わかりやすい です。", "This map is easy to understand.", "N4", undefined, "ズ"],
      ], [
        ["図書館", "としょかん", "library", "N5", "毎週**図書館**に行きます。", "I go to the library every week.", "まいしゅう **としょかん** に いきます。"],
      ]),
    ],
  },
  {
    n: 17,
    note: "Work · jobs, business and the public",
    items: [
      bk("仕", "N4", "serve, do", "シ", "", [
        ["今日は**仕事**が忙しいです。", "きょう は **しごと** が いそがしい です。", "I'm busy with work today.", "N5", undefined, "シ"],
        ["雨だから、**仕方**がありません。", "あめ だ から、 **しかた** が ありません。", "It's raining, so it can't be helped.", "N4", undefined, "シ"],
      ], []),
      bk("事", "N4", "thing, matter", "ジ", "こと", [
        ["大切な**事**を忘れました。", "たいせつ な **こと** を わすれました。", "I forgot something important.", "N4", undefined, "こと"],
        ["七時に**食事**をします。", "しちじ に **しょくじ** を します。", "I have dinner at seven.", "N4", undefined, "ジ"],
        ["健康は**大事**です。", "けんこう は **だいじ** です。", "Health is important.", "N4", undefined, "ジ"],
        ["メールの**返事**を書きました。", "メール の **へんじ** を かきました。", "I wrote a reply to the email.", "N4", undefined, "ジ"],
        ["昨日、駅の近くで**火事**がありました。", "きのう、 えき の ちかく で **かじ** が ありました。", "There was a fire near the station yesterday.", "N4", undefined, "ジ"],
      ], []),
      bk("業", "N4", "business, work", "ギョウ", "", [
        ["九時から**授業**が始まります。", "くじ から **じゅぎょう** が はじまります。", "Class starts at nine.", "N4", undefined, "ギョウ"],
        ["来年大学を**卒業**します。", "らいねん だいがく を **そつぎょう** します。", "I will graduate from university next year.", "N4", undefined, "ギョウ"],
        ["この町は**工業**の町です。", "この まち は **こうぎょう** の まち です。", "This is an industrial town.", "N4", undefined, "ギョウ"],
      ], []),
      bk("工", "N4", "craft, construction", "コウ ク", "", [
        ["兄は**工場**で働いています。", "あに は **こうじょう** で はたらいて います。", "My older brother works at a factory.", "N4", undefined, "コウ"],
        ["道で**工事**をしています。", "みち で **こうじ** を して います。", "There is construction work on the road.", "N4", undefined, "コウ"],
        ["祖父は**大工**でした。", "そふ は **だいく** でした。", "My grandfather was a carpenter.", "N3", undefined, "ク"],
      ], []),
      bk("公", "N4", "public", "コウ", "", [
        ["子どもたちが**公園**で遊んでいます。", "こども たち が **こうえん** で あそんで います。", "The children are playing in the park.", "N5", undefined, "コウ"],
      ], []),
    ],
  },
  {
    n: 18,
    note: "Work · making and using things",
    items: [
      bk("発", "N4", "depart, emit", "ハツ", "", [
        ["電車は八時に**出発**します。", "でんしゃ は はちじ に **しゅっぱつ** します。", "The train departs at eight.", "N4", undefined, "ハツ"],
        ["この言葉の**発音**は難しいです。", "この ことば の **はつおん** は むずかしい です。", "The pronunciation of this word is difficult.", "N4", undefined, "ハツ"],
      ], []),
      bk("作", "N4", "make", "サク サ", "つく.る", [
        ["母と晩ご飯を**作りました**。", "はは と ばんごはん を **つくりました**。", "I made dinner with my mother.", "N5", undefined, "つく.る"],
        ["日本語で**作文**を書きました。", "にほんご で **さくぶん** を かきました。", "I wrote an essay in Japanese.", "N4", undefined, "サク"],
        ["この機械の**操作**は簡単です。", "この きかい の **そうさ** は かんたん です。", "This machine is easy to operate.", "N2", undefined, "サ"],
      ], []),
      bk("用", "N4", "use, errand", "ヨウ", "", [
        ["午後は**用事**があります。", "ごご は **ようじ** が あります。", "I have something to do this afternoon.", "N4", undefined, "ヨウ"],
        ["旅行の**用意**をしました。", "りょこう の **ようい** を しました。", "I got ready for the trip.", "N4", undefined, "ヨウ"],
      ], []),
      bk("品", "N4", "goods, article", "ヒン", "しな", [
        ["この**品物**はいくらですか。", "この **しなもの** は いくら です か。", "How much is this item?", "N4", undefined, "しな"],
        ["この店は**食料品**が安いです。", "この みせ は **しょくりょうひん** が やすい です。", "Groceries are cheap at this shop.", "N4", undefined, "ヒン"],
      ], []),
      bk("物", "N4", "thing, object", "ブツ モツ", "もの", [
        ["机の上に**物**を置かないでください。", "つくえ の うえ に **もの** を おかないで ください。", "Please don't put things on the desk.", "N5", undefined, "もの"],
      ], [
        ["買い物", "かいもの", "shopping", "N5", "駅前で**買い物**をしました。", "I went shopping near the station.", "えきまえ で **かいもの** を しました。"],
        ["動物", "どうぶつ", "animal", "N5", "**動物**が好きです。", "I like animals.", "**どうぶつ** が すき です。"],
        ["荷物", "にもつ", "luggage", "N5", "**荷物**が重いです。", "My luggage is heavy.", "**にもつ** が おもい です。"],
        ["建物", "たてもの", "building", "N5", "あの高い**建物**は病院です。", "That tall building is a hospital.", "あの たかい **たてもの** は びょういん です。"],
      ]),
    ],
  },
  {
    n: 19,
    note: "Work · selling, using and gathering",
    items: [
      bk("売", "N4", "sell", "バイ", "う.る", [
        ["あの店は野菜を**売って**います。", "あの みせ は やさい を **うって** います。", "That shop sells vegetables.", "N5", undefined, "う.る"],
        ["靴の**売り場**は三階です。", "くつ の **うりば** は さんがい です。", "The shoe department is on the third floor.", "N4", undefined, "う.る"],
        ["駅の**売店**でお茶を買いました。", "えき の **ばいてん** で おちゃ を かいました。", "I bought tea at the station kiosk.", "N3", undefined, "バイ"],
      ], []),
      bk("使", "N4", "use", "シ", "つか.う", [
        ["このペンを**使って**もいいですか。", "この ペン を **つかって** も いい です か。", "May I use this pen?", "N5", undefined, "つか.う"],
        ["父は**大使館**で働いています。", "ちち は **たいしかん** で はたらいて います。", "My father works at an embassy.", "N4", undefined, "シ"],
      ], []),
      bk("計", "N4", "measure, plan", "ケイ", "はか.る", [
        ["この**時計**は高かったです。", "この **とけい** は たかかった です。", "This watch was expensive.", "N5", undefined, "ケイ"],
        ["夏休みの**計画**を立てました。", "なつやすみ の **けいかく** を たてました。", "I made plans for the summer holidays.", "N4", undefined, "ケイ"],
        ["毎朝、体重を**計ります**。", "まいあさ、 たいじゅう を **はかります**。", "I weigh myself every morning.", "N3", undefined, "はか.る"],
      ], []),
      bk("集", "N4", "gather", "シュウ", "あつ.める あつ.まる", [
        ["弟は切手を**集めて**います。", "おとうと は きって を **あつめて** います。", "My younger brother collects stamps.", "N4", undefined, "あつ.める"],
        ["学生が教室に**集まりました**。", "がくせい が きょうしつ に **あつまりました**。", "The students gathered in the classroom.", "N4", undefined, "あつ.まる"],
        ["**集合**時間は八時です。", "**しゅうごう** じかん は はちじ です。", "The meeting time is eight o'clock.", "N3", undefined, "シュウ"],
      ], []),
    ],
  },
  {
    n: 20,
    note: "Movement · moving, commuting and sending",
    items: [
      bk("動", "N4", "move", "ドウ", "うご.く", [
        ["時計が**動きません**。", "とけい が **うごきません**。", "The clock isn't working.", "N4", undefined, "うご.く"],
        ["毎日**運動**をしています。", "まいにち **うんどう** を して います。", "I exercise every day.", "N4", undefined, "ドウ"],
        ["兄は**自動車**の会社で働いています。", "あに は **じどうしゃ** の かいしゃ で はたらいて います。", "My older brother works at a car company.", "N4", undefined, "ドウ"],
      ], [
        ["動物", "どうぶつ", "animal", "N5", "どんな**動物**が好きですか。", "What kind of animals do you like?", "どんな **どうぶつ** が すき です か。"],
      ]),
      bk("通", "N4", "pass through, commute", "ツウ", "とお.る かよ.う", [
        ["この道は車がたくさん**通ります**。", "この みち は くるま が たくさん **とおります**。", "Lots of cars pass along this road.", "N4", undefined, "とお.る"],
        ["毎日電車で学校に**通って**います。", "まいにち でんしゃ で がっこう に **かよって** います。", "I commute to school by train every day.", "N4", undefined, "かよ.う"],
        ["東京は**交通**が便利です。", "とうきょう は **こうつう** が べんり です。", "Transport in Tokyo is convenient.", "N4", undefined, "ツウ"],
        ["**普通**は七時に起きます。", "**ふつう** は しちじ に おきます。", "I usually get up at seven.", "N4", undefined, "ツウ"],
      ], []),
      bk("運", "N4", "carry, luck", "ウン", "はこ.ぶ", [
        ["父は毎日車を**運転**します。", "ちち は まいにち くるま を **うんてん** します。", "My father drives every day.", "N4", undefined, "ウン"],
        ["週末は公園で**運動**します。", "しゅうまつ は こうえん で **うんどう** します。", "I exercise in the park on weekends.", "N4", undefined, "ウン"],
        ["この机を二階に**運んで**ください。", "この つくえ を にかい に **はこんで** ください。", "Please carry this desk to the second floor.", "N4", undefined, "はこ.ぶ"],
      ], []),
      bk("転", "N4", "turn, roll", "テン", "ころ.ぶ", [
        ["**自転車**で駅まで行きます。", "**じてんしゃ** で えき まで いきます。", "I go to the station by bicycle.", "N5", undefined, "テン"],
        ["タクシーの**運転手**に道を聞きました。", "タクシー の **うんてんしゅ** に みち を ききました。", "I asked the taxi driver the way.", "N4", undefined, "テン"],
        ["雪の道で**転びました**。", "ゆき の みち で **ころびました**。", "I fell over on the snowy road.", "N3", undefined, "ころ.ぶ"],
      ], []),
      bk("送", "N4", "send", "ソウ", "おく.る", [
        ["友達にメールを**送りました**。", "ともだち に メール を **おくりました**。", "I sent an email to my friend.", "N4", undefined, "おく.る"],
        ["毎朝、ラジオの**放送**を聞きます。", "まいあさ、 ラジオ の **ほうそう** を ききます。", "I listen to the radio broadcast every morning.", "N4", undefined, "ソウ"],
      ], []),
    ],
  },
  {
    n: 21,
    note: "Movement · stopping, hurrying and going back",
    items: [
      bk("止", "N4", "stop", "シ", "と.まる と.める", [
        ["バスが駅の前に**止まりました**。", "バス が えき の まえ に **とまりました**。", "The bus stopped in front of the station.", "N4", undefined, "と.まる"],
        ["ここに車を**止めないで**ください。", "ここ に くるま を **とめないで** ください。", "Please don't park your car here.", "N4", undefined, "と.める"],
        ["雨で試合は**中止**になりました。", "あめ で しあい は **ちゅうし** に なりました。", "The match was cancelled because of rain.", "N3", undefined, "シ"],
      ], []),
      bk("急", "N4", "hurry, sudden", "キュウ", "いそ.ぐ", [
        ["時間がないので、**急いで**ください。", "じかん が ない ので、 **いそいで** ください。", "There's no time, so please hurry.", "N4", undefined, "いそ.ぐ"],
        ["**急に**雨が降ってきました。", "**きゅうに** あめ が ふって きました。", "It suddenly started to rain.", "N4", undefined, "キュウ"],
        ["**急行**に乗りましょう。", "**きゅうこう** に のりましょう。", "Let's take the express train.", "N4", undefined, "キュウ"],
        ["**特急**で大阪に行きました。", "**とっきゅう** で おおさか に いきました。", "I went to Osaka by limited express.", "N4", undefined, "キュウ"],
      ], []),
      bk("帰", "N4", "return home", "キ", "かえ.る", [
        ["毎日六時に家に**帰ります**。", "まいにち ろくじ に いえ に **かえります**。", "I go home at six every day.", "N5", undefined, "かえ.る"],
        ["**帰り**にスーパーで牛乳を買いました。", "**かえり** に スーパー で ぎゅうにゅう を かいました。", "I bought milk at the supermarket on the way home.", "N4", undefined, "かえ.る"],
        ["夏休みに**帰国**します。", "なつやすみ に **きこく** します。", "I'm going back to my country for the summer holidays.", "N3", undefined, "キ"],
      ], []),
      bk("去", "N4", "leave, past", "キョ コ", "さ.る", [
        ["**去年**、日本に来ました。", "**きょねん**、 にほん に きました。", "I came to Japan last year.", "N5", undefined, "キョ"],
        ["**過去**のことは忘れましょう。", "**かこ** の こと は わすれましょう。", "Let's forget about the past.", "N3", undefined, "コ"],
        ["台風が**去りました**。", "たいふう が **さりました**。", "The typhoon has passed.", "N3", undefined, "さ.る"],
      ], []),
    ],
  },
  {
    n: 22,
    note: "Movement · travelling, waiting and arriving",
    items: [
      bk("旅", "N4", "trip, travel", "リョ", "たび", [
        ["来月、北海道へ**旅行**します。", "らいげつ、 ほっかいどう へ **りょこう** します。", "I'm travelling to Hokkaido next month.", "N4", undefined, "リョ"],
        ["温泉の**旅館**に泊まりました。", "おんせん の **りょかん** に とまりました。", "We stayed at a hot-spring inn.", "N4", undefined, "リョ"],
        ["一人で**旅**に出ました。", "ひとり で **たび** に でました。", "I set off on a journey alone.", "N3", undefined, "たび"],
      ], []),
      bk("待", "N4", "wait", "タイ", "ま.つ", [
        ["ちょっと**待って**ください。", "ちょっと **まって** ください。", "Please wait a moment.", "N5", undefined, "ま.つ"],
        ["友達をパーティーに**招待**しました。", "ともだち を パーティー に **しょうたい** しました。", "I invited my friends to a party.", "N3", undefined, "タイ"],
      ], []),
      bk("起", "N4", "wake up, rise", "キ", "お.きる お.こす お.こる", [
        ["毎朝六時に**起きます**。", "まいあさ ろくじ に **おきます**。", "I get up at six every morning.", "N5", undefined, "お.きる"],
        ["明日七時に**起こして**ください。", "あした しちじ に **おこして** ください。", "Please wake me at seven tomorrow.", "N4", undefined, "お.こす"],
        ["駅の前で事故が**起こりました**。", "えき の まえ で じこ が **おこりました**。", "An accident happened in front of the station.", "N4", undefined, "お.こる"],
        ["**起床**は六時です。", "**きしょう** は ろくじ です。", "Wake-up time is six o'clock.", "N2", undefined, "キ"],
      ], []),
      bk("着", "N4", "arrive, wear", "チャク", "き.る つ.く", [
        ["今日はセーターを**着ます**。", "きょう は セーター を **きます**。", "I'll wear a sweater today.", "N5", undefined, "き.る"],
        ["もうすぐ東京に**着きます**。", "もうすぐ とうきょう に **つきます**。", "We will arrive in Tokyo soon.", "N4", undefined, "つ.く"],
        ["お正月に**着物**を着ました。", "おしょうがつ に **きもの** を きました。", "I wore a kimono at New Year.", "N4", undefined, "き.る"],
        ["新しい**下着**を買いました。", "あたらしい **したぎ** を かいました。", "I bought new underwear.", "N4", undefined, "き.る"],
        ["飛行機は三時に**到着**します。", "ひこうき は さんじ に **とうちゃく** します。", "The plane arrives at three.", "N3", undefined, "チャク"],
      ], []),
    ],
  },
  {
    n: 23,
    note: "Daily · opening, holding, borrowing and lending",
    items: [
      bk("開", "N4", "open", "カイ", "あ.ける ひら.く", [
        ["窓を**開けて**ください。", "まど を **あけて** ください。", "Please open the window.", "N5", undefined, "あ.ける"],
        ["来週パーティーを**開きます**。", "らいしゅう パーティー を **ひらきます**。", "We'll hold a party next week.", "N4", undefined, "ひら.く"],
        ["店は十時に**開店**します。", "みせ は じゅうじ に **かいてん** します。", "The shop opens at ten.", "N3", undefined, "カイ"],
      ], []),
      bk("持", "N4", "hold, have", "ジ", "も.つ", [
        ["傘を**持って**いますか。", "かさ を **もって** います か。", "Do you have an umbrella?", "N5", undefined, "も.つ"],
        ["温泉は**気持ち**がいいです。", "おんせん は **きもち** が いい です。", "Hot springs feel good.", "N4", undefined, "も.つ"],
        ["あの人は**お金持ち**です。", "あの ひと は **おかねもち** です。", "That person is rich.", "N4", undefined, "も.つ"],
        ["私はこの意見を**支持**します。", "わたし は この いけん を **しじ** します。", "I support this opinion.", "N2", undefined, "ジ"],
      ], []),
      bk("借", "N4", "borrow", "シャク", "か.りる", [
        ["図書館で本を**借りました**。", "としょかん で ほん を **かりました**。", "I borrowed a book from the library.", "N5", undefined, "か.りる"],
        ["**借金**を全部返しました。", "**しゃっきん** を ぜんぶ かえしました。", "I paid back all my debt.", "N3", undefined, "シャク"],
      ], []),
      bk("貸", "N4", "lend", "タイ", "か.す", [
        ["友達にお金を**貸しました**。", "ともだち に おかね を **かしました**。", "I lent money to my friend.", "N5", undefined, "か.す"],
        ["**賃貸**のアパートに住んでいます。", "**ちんたい** の アパート に すんで います。", "I live in a rented apartment.", "N2", undefined, "タイ"],
      ], []),
      bk("切", "N4", "cut", "セツ", "き.る", [
        ["ナイフで肉を**切ります**。", "ナイフ で にく を **きります**。", "I cut the meat with a knife.", "N5", undefined, "き.る"],
        ["家族は**大切**です。", "かぞく は **たいせつ** です。", "Family is important.", "N4", undefined, "セツ"],
        ["店員はとても**親切**でした。", "てんいん は とても **しんせつ** でした。", "The shop assistant was very kind.", "N4", undefined, "セツ"],
      ], [
        ["切手", "きって", "postage stamp", "N5", "郵便局で**切手**を買いました。", "I bought stamps at the post office.", "ゆうびんきょく で **きって** を かいました。"],
      ]),
    ],
  },
  {
    n: 24,
    note: "Daily · clothes, care and illness",
    items: [
      bk("注", "N4", "pour, note", "チュウ", "", [
        ["車に**注意**してください。", "くるま に **ちゅうい** して ください。", "Please watch out for cars.", "N4", undefined, "チュウ"],
        ["ラーメンを**注文**しました。", "ラーメン を **ちゅうもん** しました。", "I ordered ramen.", "N4", undefined, "チュウ"],
      ], []),
      bk("服", "N4", "clothes", "フク", "", [
        ["新しい**服**を買いました。", "あたらしい **ふく** を かいました。", "I bought new clothes.", "N5", undefined, "フク"],
      ], [
        ["洋服", "ようふく", "(Western) clothes", "N5", "姉は**洋服**がたくさんあります。", "My older sister has a lot of clothes.", "あね は **ようふく** が たくさん あります。"],
      ]),
      bk("病", "N4", "illness", "ビョウ", "", [
        ["**病気**のときは、よく寝てください。", "**びょうき** の とき は、 よく ねて ください。", "When you're ill, get plenty of sleep.", "N5", undefined, "ビョウ"],
      ], [
        ["病院", "びょういん", "hospital", "N5", "明日**病院**に行きます。", "I'm going to the hospital tomorrow.", "あした **びょういん** に いきます。"],
      ]),
      bk("死", "N4", "death, die", "シ", "し.ぬ", [
        ["うちの犬が**死にました**。", "うち の いぬ が **しにました**。", "Our dog died.", "N5", undefined, "し.ぬ"],
        ["**必死**に勉強しました。", "**ひっし** に べんきょう しました。", "I studied desperately hard.", "N2", undefined, "シ"],
      ], []),
    ],
  },
  {
    n: 25,
    note: "Qualities · sameness, ways and degree",
    items: [
      bk("同", "N4", "same", "ドウ", "おな.じ", [
        ["私も**同じ**かばんを持っています。", "わたし も **おなじ** かばん を もって います。", "I have the same bag too.", "N4", undefined, "おな.じ"],
        ["二人は**同時**に答えました。", "ふたり は **どうじ** に こたえました。", "The two answered at the same time.", "N3", undefined, "ドウ"],
      ], []),
      bk("方", "N4", "direction, way", "ホウ", "かた", [
        ["駅はあちらの**方**です。", "えき は あちら の **ほう** です。", "The station is that way.", "N4", undefined, "ホウ"],
        ["この漢字の**読み方**を教えてください。", "この かんじ の **よみかた** を おしえて ください。", "Please tell me how to read this kanji.", "N4", undefined, "かた"],
        ["**あの方**は先生です。", "**あのかた** は せんせい です。", "That person is a teacher.", "N4", undefined, "かた"],
      ], [
        ["夕方", "ゆうがた", "evening", "N5", "**夕方**に雨が降りました。", "It rained in the evening.", "**ゆうがた** に あめ が ふりました。"],
      ]),
      bk("不", "N4", "not, un-", "フ ブ", "", [
        ["この町は交通が**不便**です。", "この まち は こうつう が **ふべん** です。", "Transport in this town is inconvenient.", "N4", undefined, "フ"],
        ["私は**不器用**です。", "わたし は **ぶきよう** です。", "I'm clumsy.", "N2", undefined, "ブ"],
      ], []),
      bk("以", "N4", "by means of, since", "イ", "", [
        ["十八歳**以上**の人は入れます。", "じゅうはっさい **いじょう** の ひと は はいれます。", "People aged eighteen or over can enter.", "N4", undefined, "イ"],
        ["千円**以下**のお菓子を買ってください。", "せんえん **いか** の おかし を かって ください。", "Please buy snacks costing a thousand yen or less.", "N4", undefined, "イ"],
      ], []),
      bk("度", "N4", "degree, times", "ド", "たび", [
        ["今日は三十**度**です。", "きょう は さんじゅう**ど** です。", "It's thirty degrees today.", "N4", undefined, "ド"],
        ["もう**一度**言ってください。", "もう **いちど** いって ください。", "Please say it once more.", "N4", undefined, "ド"],
        ["**今度**一緒に行きましょう。", "**こんど** いっしょ に いきましょう。", "Let's go together next time.", "N4", undefined, "ド"],
        ["**この度**はありがとうございました。", "**このたび** は ありがとう ございました。", "Thank you very much on this occasion.", "N3", undefined, "たび"],
      ], []),
    ],
  },
  {
    n: 26,
    note: "Qualities · heavy, right, true and original",
    items: [
      bk("重", "N4", "heavy", "ジュウ チョウ", "おも.い かさ.ねる", [
        ["この箱は**重い**です。", "この はこ は **おもい** です。", "This box is heavy.", "N5", undefined, "おも.い"],
        ["健康はとても**重要**です。", "けんこう は とても **じゅうよう** です。", "Health is very important.", "N3", undefined, "ジュウ"],
        ["これは**貴重**な写真です。", "これ は **きちょう** な しゃしん です。", "This is a valuable photo.", "N2", undefined, "チョウ"],
        ["お皿を**重ねて**ください。", "おさら を **かさねて** ください。", "Please stack the plates.", "N2", undefined, "かさ.ねる"],
      ], []),
      bk("正", "N4", "correct", "セイ ショウ", "ただ.しい", [
        ["**正しい**答えを選んでください。", "**ただしい** こたえ を えらんで ください。", "Please choose the correct answer.", "N4", undefined, "ただ.しい"],
        ["お**正月**に神社へ行きました。", "お**しょうがつ** に じんじゃ へ いきました。", "I went to a shrine at New Year.", "N4", undefined, "ショウ"],
        ["**正解**です。よくできました。", "**せいかい** です。 よく できました。", "That's correct. Well done.", "N2", undefined, "セイ"],
      ], []),
      bk("真", "N4", "true, genuine", "シン", "ま", [
        ["この**写真**を見てください。", "この **しゃしん** を みて ください。", "Please look at this photo.", "N5", undefined, "シン"],
        ["公園の**真ん中**に池があります。", "こうえん の **まんなか** に いけ が あります。", "There is a pond in the middle of the park.", "N4", undefined, "ま"],
        ["弟はとても**真面目**です。", "おとうと は とても **まじめ** です。", "My younger brother is very serious.", "N4", undefined, "ま"],
      ], []),
      bk("無", "N4", "nothing, without", "ム ブ", "な.い", [
        ["**無理**をしないでください。", "**むり** を しないで ください。", "Please don't overdo it.", "N4", undefined, "ム"],
        ["時間が**無い**ので、急ぎましょう。", "じかん が **ない** ので、 いそぎましょう。", "We have no time, so let's hurry.", "N4", undefined, "な.い"],
        ["**無事**に家に帰りました。", "**ぶじ** に いえ に かえりました。", "I got home safely.", "N3", undefined, "ブ"],
      ], []),
      bk("元", "N4", "origin, former", "ゲン ガン", "もと", [
        ["お**元気**ですか。", "お**げんき** です か。", "How are you?", "N5", undefined, "ゲン"],
        ["**元日**は家で休みます。", "**がんじつ** は いえ で やすみます。", "I rest at home on New Year's Day.", "N3", undefined, "ガン"],
        ["**地元**の料理を食べました。", "**じもと** の りょうり を たべました。", "I ate the local food.", "N3", undefined, "もと"],
      ], []),
    ],
  },
  {
    n: 27,
    note: "Qualities · bad, quality, separate and special",
    items: [
      bk("悪", "N4", "bad", "アク", "わる.い", [
        ["今日は天気が**悪い**です。", "きょう は てんき が **わるい** です。", "The weather is bad today.", "N5", undefined, "わる.い"],
        ["今日は**最悪**の一日でした。", "きょう は **さいあく** の いちにち でした。", "Today was the worst day.", "N3", undefined, "アク"],
      ], []),
      bk("質", "N4", "quality, matter", "シツ", "", [
        ["何か**質問**がありますか。", "なにか **しつもん** が あります か。", "Do you have any questions?", "N4", undefined, "シツ"],
      ], []),
      bk("別", "N4", "separate, another", "ベツ", "わか.れる", [
        ["**別**の日にしましょう。", "**べつ** の ひ に しましょう。", "Let's make it another day.", "N4", undefined, "ベツ"],
        ["駅で友達と**別れました**。", "えき で ともだち と **わかれました**。", "I said goodbye to my friend at the station.", "N4", undefined, "わか.れる"],
        ["今日は**特別**な日です。", "きょう は **とくべつ** な ひ です。", "Today is a special day.", "N4", undefined, "ベツ"],
      ], []),
      bk("特", "N4", "special", "トク", "", [
        ["**特に**甘い物が好きです。", "**とくに** あまい もの が すき です。", "I especially like sweet things.", "N4", undefined, "トク"],
        ["**特急**は速いです。", "**とっきゅう** は はやい です。", "The limited express is fast.", "N4", undefined, "トク"],
      ], []),
    ],
  },
];
