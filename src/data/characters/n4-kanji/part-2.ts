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
        ["**文学**が好きです。", "**ぶんがく** が すき です。", "I like literature.", "N4", undefined, "ブン"],
        ["**文句**を言わないでください。", "**もんく** を いわないで ください。", "Please don't complain.", "N3", undefined, "モン"],
      ], [
        ["作文", "さくぶん", "composition, essay", "N4", "日本語で**作文**を書きました。", "I wrote an essay in Japanese.", "にほんご で **さくぶん** を かきました。"],
        ["文化", "ぶんか", "culture", "N4", "日本の**文化**を勉強しています。", "I am studying Japanese culture.", "にほん の **ぶんか** を べんきょう して います。"],
        ["注文", "ちゅうもん", "order (food, goods)", "N4", "コーヒーを**注文**しました。", "I ordered a coffee.", "コーヒー を **ちゅうもん** しました。"],
      ]),
      bk("字", "N4", "character, letter", "ジ", "", [
        ["名前を大きい**字**で書いてください。", "なまえ を おおきい **じ** で かいて ください。", "Please write your name in large letters.", "N4", undefined, "ジ"],
        ["**漢字**は難しいです。", "**かんじ** は むずかしい です。", "Kanji are difficult.", "N5", undefined, "ジ"],
      ], [
        ["漢字", "かんじ", "kanji", "N5", "毎日**漢字**を練習します。", "I practise kanji every day.", "まいにち **かんじ** を れんしゅう します。"],
        ["文字", "もじ", "letter, character", "N3", "この**文字**は読めません。", "I can't read this character.", "この **もじ** は よめません。"],
        ["数字", "すうじ", "number, digit", "N3", "**数字**をはっきり書いてください。", "Please write the numbers clearly.", "**すうじ** を はっきり かいて ください。"],
      ]),
      bk("漢", "N4", "China, Han", "カン", "", [
        ["**漢字**を三つ覚えました。", "**かんじ** を みっつ おぼえました。", "I learned three kanji.", "N5", undefined, "カン"],
      ], [
        ["漢字", "かんじ", "kanji", "N5", "この**漢字**の読み方を教えてください。", "Please tell me how to read this kanji.", "この **かんじ** の よみかた を おしえて ください。"],
        ["漢和辞典", "かんわじてん", "kanji dictionary", "N2", "**漢和辞典**で調べました。", "I looked it up in a kanji dictionary.", "**かんわじてん** で しらべました。"],
      ]),
      bk("英", "N4", "England, English", "エイ", "", [
        ["兄は**英語**が上手です。", "あに は **えいご** が じょうず です。", "My older brother is good at English.", "N5", undefined, "エイ"],
      ], [
        ["英語", "えいご", "English (language)", "N5", "**英語**で話しましょう。", "Let's talk in English.", "**えいご** で はなしましょう。"],
        ["英会話", "えいかいわ", "English conversation", "N3", "週に一回**英会話**の教室に行きます。", "I go to an English conversation class once a week.", "しゅう に いっかい **えいかいわ** の きょうしつ に いきます。"],
      ]),
      bk("歌", "N4", "song, sing", "カ", "うた うた.う", [
        ["妹は**歌手**になりたいです。", "いもうと は **かしゅ** に なりたい です。", "My younger sister wants to become a singer.", "N4", undefined, "カ"],
        ["この**歌**が好きです。", "この **うた** が すき です。", "I like this song.", "N5", undefined, "うた"],
        ["みんなで**歌いましょう**。", "みんな で **うたいましょう**。", "Let's all sing together.", "N5", undefined, "うた.う"],
      ], [
        ["歌手", "かしゅ", "singer", "N4", "あの**歌手**はとても有名です。", "That singer is very famous.", "あの **かしゅ** は とても ゆうめい です。"],
        ["歌", "うた", "song", "N5", "日本の**歌**を習いました。", "I learned a Japanese song.", "にほん の **うた** を ならいました。"],
        ["歌う", "うたう", "to sing", "N5", "カラオケで**歌いました**。", "I sang at karaoke.", "カラオケ で **うたいました**。"],
      ]),
      bk("音", "N4", "sound", "オン", "おと ね", [
        ["**音楽**を聞くのが好きです。", "**おんがく** を きく の が すき です。", "I like listening to music.", "N5", undefined, "オン"],
        ["外で大きい**音**がしました。", "そと で おおきい **おと** が しました。", "There was a loud sound outside.", "N4", undefined, "おと"],
        ["きれいな**音色**ですね。", "きれい な **ねいろ** です ね。", "What a beautiful tone.", "N2", undefined, "ね"],
      ], [
        ["音楽", "おんがく", "music", "N5", "毎晩**音楽**を聞きます。", "I listen to music every night.", "まいばん **おんがく** を ききます。"],
        ["発音", "はつおん", "pronunciation", "N4", "先生の**発音**はきれいです。", "The teacher's pronunciation is beautiful.", "せんせい の **はつおん** は きれい です。"],
        ["本音", "ほんね", "true feelings", "N2", "友達に**本音**を話しました。", "I told my friend my true feelings.", "ともだち に **ほんね** を はなしました。"],
      ]),
    ],
  },
  {
    n: 16,
    note: "Culture · music, film and pictures",
    items: [
      bk("楽", "N4", "fun, music", "ガク ラク", "たの.しい", [
        ["父はクラシック**音楽**が好きです。", "ちち は クラシック **おんがく** が すき です。", "My father likes classical music.", "N5", undefined, "ガク"],
        ["この仕事は**楽**です。", "この しごと は **らく** です。", "This job is easy.", "N3", undefined, "ラク"],
        ["旅行は**楽しかった**です。", "りょこう は **たのしかった** です。", "The trip was fun.", "N5", undefined, "たの.しい"],
      ], [
        ["楽しい", "たのしい", "fun, enjoyable", "N5", "パーティーはとても**楽しい**です。", "The party is a lot of fun.", "パーティー は とても **たのしい** です。"],
        ["楽しみ", "たのしみ", "looking forward to", "N4", "夏休みが**楽しみ**です。", "I'm looking forward to the summer holidays.", "なつやすみ が **たのしみ** です。"],
        ["楽器", "がっき", "musical instrument", "N3", "何か**楽器**ができますか。", "Can you play any instrument?", "なにか **がっき** が できます か。"],
      ]),
      bk("映", "N4", "reflect, project", "エイ", "うつ.る", [
        ["週末に**映画**を見ました。", "しゅうまつ に **えいが** を みました。", "I watched a movie on the weekend.", "N5", undefined, "エイ"],
        ["湖に山が**映って**います。", "みずうみ に やま が **うつって** います。", "The mountain is reflected in the lake.", "N3", undefined, "うつ.る"],
      ], [
        ["映画", "えいが", "movie", "N5", "一緒に**映画**を見に行きませんか。", "Would you like to go and see a movie together?", "いっしょ に **えいが** を み に いきません か。"],
        ["映画館", "えいがかん", "cinema", "N5", "駅の前に**映画館**があります。", "There is a cinema in front of the station.", "えき の まえ に **えいがかん** が あります。"],
        ["放映", "ほうえい", "broadcast (on TV)", "N1", "その番組は来月**放映**されます。", "That programme will be broadcast next month.", "その ばんぐみ は らいげつ **ほうえい** されます。"],
      ]),
      bk("画", "N4", "picture, stroke", "ガ カク", "", [
        ["この**画家**の絵が好きです。", "この **がか** の え が すき です。", "I like this painter's pictures.", "N3", undefined, "ガ"],
        ["来年の**計画**を立てました。", "らいねん の **けいかく** を たてました。", "I made plans for next year.", "N4", undefined, "カク"],
        ["この漢字の**画数**はいくつですか。", "この かんじ の **かくすう** は いくつ です か。", "How many strokes does this kanji have?", "N2", undefined, "カク"],
      ], [
        ["映画", "えいが", "movie", "N5", "この**映画**はとても面白いです。", "This movie is very interesting.", "この **えいが** は とても おもしろい です。"],
        ["計画", "けいかく", "plan", "N4", "旅行の**計画**を話しましょう。", "Let's talk about the travel plans.", "りょこう の **けいかく** を はなしましょう。"],
        ["漫画", "まんが", "manga, comic", "N3", "弟は**漫画**をよく読みます。", "My younger brother often reads manga.", "おとうと は **まんが** を よく よみます。"],
      ]),
      bk("写", "N4", "copy, photograph", "シャ", "うつ.す", [
        ["ここで**写真**を撮ってもいいですか。", "ここ で **しゃしん** を とって も いい です か。", "May I take a photo here?", "N5", undefined, "シャ"],
        ["黒板の字をノートに**写して**ください。", "こくばん の じ を ノート に **うつして** ください。", "Please copy the words on the blackboard into your notebook.", "N3", undefined, "うつ.す"],
      ], [
        ["写真", "しゃしん", "photograph", "N5", "家族の**写真**を見せてください。", "Please show me a photo of your family.", "かぞく の **しゃしん** を みせて ください。"],
        ["写真家", "しゃしんか", "photographer", "N3", "おじは**写真家**です。", "My uncle is a photographer.", "おじ は **しゃしんか** です。"],
      ]),
      bk("図", "N4", "map, drawing", "ズ ト", "", [
        ["駅までの**地図**を書きましょう。", "えき まで の **ちず** を かきましょう。", "Let's draw a map to the station.", "N4", undefined, "ズ"],
        ["**図書館**で本を借りました。", "**としょかん** で ほん を かりました。", "I borrowed a book from the library.", "N5", undefined, "ト"],
      ], [
        ["地図", "ちず", "map", "N4", "この**地図**はわかりやすいです。", "This map is easy to understand.", "この **ちず** は わかりやすい です。"],
        ["図書館", "としょかん", "library", "N5", "毎週**図書館**に行きます。", "I go to the library every week.", "まいしゅう **としょかん** に いきます。"],
        ["合図", "あいず", "signal, sign", "N3", "先生の**合図**で始めてください。", "Please start at the teacher's signal.", "せんせい の **あいず** で はじめて ください。"],
      ]),
    ],
  },
  {
    n: 17,
    note: "Work · jobs, business and the public",
    items: [
      bk("仕", "N4", "serve, do", "シ", "", [
        ["父は銀行で**仕事**をしています。", "ちち は ぎんこう で **しごと** を して います。", "My father works at a bank.", "N5", undefined, "シ"],
        ["この機械の**仕組み**を知っていますか。", "この きかい の **しくみ** を しって います か。", "Do you know how this machine works?", "N2", undefined, "シ"],
      ], [
        ["仕事", "しごと", "work, job", "N5", "今日は**仕事**が忙しいです。", "I'm busy with work today.", "きょう は **しごと** が いそがしい です。"],
        ["仕方", "しかた", "way, method", "N4", "雨だから、**仕方**がありません。", "It's raining, so it can't be helped.", "あめ だ から、 **しかた** が ありません。"],
      ]),
      bk("事", "N4", "thing, matter", "ジ", "こと", [
        ["昨日、駅の近くで**火事**がありました。", "きのう、 えき の ちかく で **かじ** が ありました。", "There was a fire near the station yesterday.", "N4", undefined, "ジ"],
        ["大切な**事**を忘れました。", "たいせつ な **こと** を わすれました。", "I forgot something important.", "N4", undefined, "こと"],
      ], [
        ["食事", "しょくじ", "meal", "N4", "七時に**食事**をします。", "I have dinner at seven.", "しちじ に **しょくじ** を します。"],
        ["大事", "だいじ", "important", "N4", "健康は**大事**です。", "Health is important.", "けんこう は **だいじ** です。"],
        ["返事", "へんじ", "reply", "N4", "メールの**返事**を書きました。", "I wrote a reply to the email.", "メール の **へんじ** を かきました。"],
      ]),
      bk("業", "N4", "business, work", "ギョウ", "", [
        ["九時から**授業**が始まります。", "くじ から **じゅぎょう** が はじまります。", "Class starts at nine.", "N4", undefined, "ギョウ"],
      ], [
        ["授業", "じゅぎょう", "class, lesson", "N4", "今日の**授業**は面白かったです。", "Today's class was interesting.", "きょう の **じゅぎょう** は おもしろかった です。"],
        ["卒業", "そつぎょう", "graduation", "N4", "来年大学を**卒業**します。", "I will graduate from university next year.", "らいねん だいがく を **そつぎょう** します。"],
        ["工業", "こうぎょう", "industry", "N4", "この町は**工業**が盛んです。", "Industry thrives in this town.", "この まち は **こうぎょう** が さかん です。"],
      ]),
      bk("工", "N4", "craft, construction", "コウ ク", "", [
        ["兄は**工場**で働いています。", "あに は **こうじょう** で はたらいて います。", "My older brother works at a factory.", "N4", undefined, "コウ"],
        ["祖父は**大工**でした。", "そふ は **だいく** でした。", "My grandfather was a carpenter.", "N3", undefined, "ク"],
      ], [
        ["工場", "こうじょう", "factory", "N4", "車の**工場**を見学しました。", "We toured a car factory.", "くるま の **こうじょう** を けんがく しました。"],
        ["工事", "こうじ", "construction work", "N4", "道で**工事**をしています。", "There is construction work on the road.", "みち で **こうじ** を して います。"],
        ["工夫", "くふう", "device, ingenuity", "N3", "料理に**工夫**をしました。", "I came up with a new twist on the dish.", "りょうり に **くふう** を しました。"],
      ]),
      bk("公", "N4", "public", "コウ", "", [
        ["子どもたちが**公園**で遊んでいます。", "こども たち が **こうえん** で あそんで います。", "The children are playing in the park.", "N5", undefined, "コウ"],
      ], [
        ["公園", "こうえん", "park", "N5", "日曜日に**公園**を散歩しました。", "I took a walk in the park on Sunday.", "にちようび に **こうえん** を さんぽ しました。"],
        ["公務員", "こうむいん", "civil servant", "N3", "姉は**公務員**です。", "My older sister is a civil servant.", "あね は **こうむいん** です。"],
      ]),
    ],
  },
  {
    n: 18,
    note: "Work · making and using things",
    items: [
      bk("発", "N4", "depart, emit", "ハツ", "", [
        ["電車は八時に**出発**します。", "でんしゃ は はちじ に **しゅっぱつ** します。", "The train departs at eight.", "N4", undefined, "ハツ"],
        ["この言葉の**発音**は難しいです。", "この ことば の **はつおん** は むずかしい です。", "The pronunciation of this word is difficult.", "N4", undefined, "ハツ"],
      ], [
        ["出発", "しゅっぱつ", "departure", "N4", "明日の朝**出発**します。", "We leave tomorrow morning.", "あした の あさ **しゅっぱつ** します。"],
        ["発表", "はっぴょう", "presentation, announcement", "N3", "授業で**発表**をしました。", "I gave a presentation in class.", "じゅぎょう で **はっぴょう** を しました。"],
        ["発見", "はっけん", "discovery", "N3", "新しい星が**発見**されました。", "A new star was discovered.", "あたらしい ほし が **はっけん** されました。"],
      ]),
      bk("作", "N4", "make", "サク サ", "つく.る", [
        ["日本語で**作文**を書きました。", "にほんご で **さくぶん** を かきました。", "I wrote an essay in Japanese.", "N4", undefined, "サク"],
        ["この機械の**操作**は簡単です。", "この きかい の **そうさ** は かんたん です。", "This machine is easy to operate.", "N2", undefined, "サ"],
        ["母と晩ご飯を**作りました**。", "はは と ばんごはん を **つくりました**。", "I made dinner with my mother.", "N5", undefined, "つく.る"],
      ], [
        ["作る", "つくる", "to make", "N5", "ケーキを**作って**みました。", "I tried making a cake.", "ケーキ を **つくって** みました。"],
        ["作品", "さくひん", "work (of art)", "N3", "これは有名な画家の**作品**です。", "This is a work by a famous painter.", "これ は ゆうめい な がか の **さくひん** です。"],
        ["作家", "さっか", "author, writer", "N3", "好きな**作家**は誰ですか。", "Who is your favourite author?", "すき な **さっか** は だれ です か。"],
      ]),
      bk("用", "N4", "use, errand", "ヨウ", "", [
        ["今日は**用事**があるので、早く帰ります。", "きょう は **ようじ** が ある ので、 はやく かえります。", "I have an errand today, so I'll go home early.", "N4", undefined, "ヨウ"],
      ], [
        ["用事", "ようじ", "errand, business", "N4", "午後は**用事**があります。", "I have something to do this afternoon.", "ごご は **ようじ** が あります。"],
        ["利用", "りよう", "use, utilization", "N3", "毎日バスを**利用**しています。", "I use the bus every day.", "まいにち バス を **りよう** して います。"],
        ["用意", "ようい", "preparation", "N4", "旅行の**用意**をしました。", "I got ready for the trip.", "りょこう の **ようい** を しました。"],
      ]),
      bk("品", "N4", "goods, article", "ヒン", "しな", [
        ["この店は**食料品**が安いです。", "この みせ は **しょくりょうひん** が やすい です。", "Groceries are cheap at this shop.", "N4", undefined, "ヒン"],
        ["あの店はいい**品**が多いです。", "あの みせ は いい **しな** が おおい です。", "That shop has a lot of good goods.", "N3", undefined, "しな"],
      ], [
        ["食料品", "しょくりょうひん", "groceries", "N4", "スーパーで**食料品**を買いました。", "I bought groceries at the supermarket.", "スーパー で **しょくりょうひん** を かいました。"],
        ["品物", "しなもの", "goods, article", "N4", "この**品物**はいくらですか。", "How much is this item?", "この **しなもの** は いくら です か。"],
        ["商品", "しょうひん", "product, merchandise", "N3", "新しい**商品**が並んでいます。", "New products are lined up.", "あたらしい **しょうひん** が ならんで います。"],
      ]),
      bk("物", "N4", "thing, object", "ブツ モツ", "もの", [
        ["**動物**が好きです。", "**どうぶつ** が すき です。", "I like animals.", "N5", undefined, "ブツ"],
        ["**荷物**が重いです。", "**にもつ** が おもい です。", "My luggage is heavy.", "N5", undefined, "モツ"],
        ["何か飲み**物**はありますか。", "なにか のみ**もの** は あります か。", "Is there anything to drink?", "N5", undefined, "もの"],
      ], [
        ["買い物", "かいもの", "shopping", "N5", "駅前で**買い物**をしました。", "I went shopping near the station.", "えきまえ で **かいもの** を しました。"],
        ["建物", "たてもの", "building", "N5", "あの高い**建物**は病院です。", "That tall building is a hospital.", "あの たかい **たてもの** は びょういん です。"],
        ["荷物", "にもつ", "luggage", "N5", "**荷物**をここに置いてください。", "Please put your luggage here.", "**にもつ** を ここ に おいて ください。"],
      ]),
    ],
  },
  {
    n: 19,
    note: "Work · selling, using and gathering",
    items: [
      bk("売", "N4", "sell", "バイ", "う.る", [
        ["**売店**で新聞を買いました。", "**ばいてん** で しんぶん を かいました。", "I bought a newspaper at the kiosk.", "N3", undefined, "バイ"],
        ["あの店は野菜を**売って**います。", "あの みせ は やさい を **うって** います。", "That shop sells vegetables.", "N5", undefined, "う.る"],
      ], [
        ["売り場", "うりば", "sales counter, department", "N4", "靴の**売り場**は三階です。", "The shoe department is on the third floor.", "くつ の **うりば** は さんがい です。"],
        ["売店", "ばいてん", "kiosk, stand", "N3", "駅の**売店**でお茶を買いました。", "I bought tea at the station kiosk.", "えき の **ばいてん** で おちゃ を かいました。"],
        ["販売", "はんばい", "sales, selling", "N2", "この店ではチケットを**販売**しています。", "This shop sells tickets.", "この みせ では チケット を **はんばい** して います。"],
      ]),
      bk("使", "N4", "use", "シ", "つか.う", [
        ["父は**大使館**で働いています。", "ちち は **たいしかん** で はたらいて います。", "My father works at an embassy.", "N4", undefined, "シ"],
        ["このペンを**使って**もいいですか。", "この ペン を **つかって** も いい です か。", "May I use this pen?", "N5", undefined, "つか.う"],
      ], [
        ["使う", "つかう", "to use", "N5", "毎日パソコンを**使います**。", "I use a computer every day.", "まいにち パソコン を **つかいます**。"],
        ["大使館", "たいしかん", "embassy", "N4", "**大使館**でビザをもらいました。", "I got a visa at the embassy.", "**たいしかん** で ビザ を もらいました。"],
        ["使用", "しよう", "use", "N3", "ここでは携帯電話の**使用**はできません。", "You can't use mobile phones here.", "ここ では けいたいでんわ の **しよう** は できません。"],
      ]),
      bk("計", "N4", "measure, plan", "ケイ", "はか.る", [
        ["この**時計**は高かったです。", "この **とけい** は たかかった です。", "This watch was expensive.", "N5", undefined, "ケイ"],
        ["毎朝、体重を**計ります**。", "まいあさ、 たいじゅう を **はかります**。", "I weigh myself every morning.", "N3", undefined, "はか.る"],
      ], [
        ["時計", "とけい", "clock, watch", "N5", "**時計**を見てください。", "Please look at the clock.", "**とけい** を みて ください。"],
        ["計画", "けいかく", "plan", "N4", "夏休みの**計画**を立てました。", "I made plans for the summer holidays.", "なつやすみ の **けいかく** を たてました。"],
        ["合計", "ごうけい", "total", "N3", "**合計**で三千円です。", "It's three thousand yen in total.", "**ごうけい** で さんぜんえん です。"],
      ]),
      bk("集", "N4", "gather", "シュウ", "あつ.める あつ.まる", [
        ["駅の前に九時に**集合**してください。", "えき の まえ に くじ に **しゅうごう** して ください。", "Please gather in front of the station at nine.", "N3", undefined, "シュウ"],
        ["弟は切手を**集めて**います。", "おとうと は きって を **あつめて** います。", "My younger brother collects stamps.", "N4", undefined, "あつ.める"],
        ["学生が教室に**集まりました**。", "がくせい が きょうしつ に **あつまりました**。", "The students gathered in the classroom.", "N4", undefined, "あつ.まる"],
      ], [
        ["集める", "あつめる", "to collect, to gather", "N4", "古い本を**集めて**います。", "I collect old books.", "ふるい ほん を **あつめて** います。"],
        ["集まる", "あつまる", "to gather (intr.)", "N4", "みんな公園に**集まって**ください。", "Everyone, please gather in the park.", "みんな こうえん に **あつまって** ください。"],
        ["集合", "しゅうごう", "assembly, meeting up", "N3", "**集合**時間は八時です。", "The meeting time is eight o'clock.", "**しゅうごう** じかん は はちじ です。"],
      ]),
    ],
  },
  {
    n: 20,
    note: "Movement · moving, commuting and sending",
    items: [
      bk("動", "N4", "move", "ドウ", "うご.く", [
        ["毎日**運動**をしています。", "まいにち **うんどう** を して います。", "I exercise every day.", "N4", undefined, "ドウ"],
        ["時計が**動きません**。", "とけい が **うごきません**。", "The clock isn't working.", "N4", undefined, "うご.く"],
      ], [
        ["動く", "うごく", "to move", "N4", "写真を撮るので、**動かないで**ください。", "I'm taking a photo, so please don't move.", "しゃしん を とる ので、 **うごかないで** ください。"],
        ["動物", "どうぶつ", "animal", "N5", "どんな**動物**が好きですか。", "What kind of animals do you like?", "どんな **どうぶつ** が すき です か。"],
        ["自動車", "じどうしゃ", "car, automobile", "N4", "兄は**自動車**の会社で働いています。", "My older brother works at a car company.", "あに は **じどうしゃ** の かいしゃ で はたらいて います。"],
      ]),
      bk("通", "N4", "pass through, commute", "ツウ", "とお.る かよ.う", [
        ["**交通**が便利な町です。", "**こうつう** が べんり な まち です。", "It's a town with convenient transport.", "N4", undefined, "ツウ"],
        ["この道は車がたくさん**通ります**。", "この みち は くるま が たくさん **とおります**。", "Lots of cars pass along this road.", "N4", undefined, "とお.る"],
        ["毎日電車で学校に**通って**います。", "まいにち でんしゃ で がっこう に **かよって** います。", "I commute to school by train every day.", "N4", undefined, "かよ.う"],
      ], [
        ["交通", "こうつう", "traffic, transport", "N4", "東京は**交通**が便利です。", "Transport in Tokyo is convenient.", "とうきょう は **こうつう** が べんり です。"],
        ["普通", "ふつう", "normal, usual", "N4", "**普通**は七時に起きます。", "I usually get up at seven.", "**ふつう** は しちじ に おきます。"],
        ["通う", "かよう", "to commute, to attend", "N4", "妹はピアノ教室に**通って**います。", "My younger sister goes to piano lessons.", "いもうと は ピアノ きょうしつ に **かよって** います。"],
      ]),
      bk("運", "N4", "carry, luck", "ウン", "はこ.ぶ", [
        ["父は毎日車を**運転**します。", "ちち は まいにち くるま を **うんてん** します。", "My father drives every day.", "N4", undefined, "ウン"],
        ["この机を二階に**運んで**ください。", "この つくえ を にかい に **はこんで** ください。", "Please carry this desk to the second floor.", "N4", undefined, "はこ.ぶ"],
      ], [
        ["運転", "うんてん", "driving", "N4", "車の**運転**ができますか。", "Can you drive a car?", "くるま の **うんてん** が できます か。"],
        ["運動", "うんどう", "exercise", "N4", "週末は公園で**運動**します。", "I exercise in the park on weekends.", "しゅうまつ は こうえん で **うんどう** します。"],
        ["運ぶ", "はこぶ", "to carry", "N4", "荷物を部屋に**運びました**。", "I carried the luggage to the room.", "にもつ を へや に **はこびました**。"],
      ]),
      bk("転", "N4", "turn, roll", "テン", "ころ.ぶ", [
        ["**自転車**で駅まで行きます。", "**じてんしゃ** で えき まで いきます。", "I go to the station by bicycle.", "N5", undefined, "テン"],
        ["雪の道で**転びました**。", "ゆき の みち で **ころびました**。", "I fell over on the snowy road.", "N3", undefined, "ころ.ぶ"],
      ], [
        ["自転車", "じてんしゃ", "bicycle", "N5", "新しい**自転車**を買いました。", "I bought a new bicycle.", "あたらしい **じてんしゃ** を かいました。"],
        ["運転手", "うんてんしゅ", "driver", "N4", "タクシーの**運転手**に道を聞きました。", "I asked the taxi driver the way.", "タクシー の **うんてんしゅ** に みち を ききました。"],
        ["転ぶ", "ころぶ", "to fall over", "N3", "走ると**転びます**よ。", "If you run, you'll fall over.", "はしる と **ころびます** よ。"],
      ]),
      bk("送", "N4", "send", "ソウ", "おく.る", [
        ["毎朝、ラジオの**放送**を聞きます。", "まいあさ、 ラジオ の **ほうそう** を ききます。", "I listen to the radio broadcast every morning.", "N4", undefined, "ソウ"],
        ["友達にメールを**送りました**。", "ともだち に メール を **おくりました**。", "I sent an email to my friend.", "N4", undefined, "おく.る"],
      ], [
        ["送る", "おくる", "to send", "N4", "国の家族に荷物を**送ります**。", "I'll send a parcel to my family back home.", "くに の かぞく に にもつ を **おくります**。"],
        ["放送", "ほうそう", "broadcast", "N4", "この番組は毎週**放送**されます。", "This programme is broadcast every week.", "この ばんぐみ は まいしゅう **ほうそう** されます。"],
        ["送料", "そうりょう", "postage, shipping fee", "N2", "**送料**はいくらですか。", "How much is the shipping?", "**そうりょう** は いくら です か。"],
      ]),
    ],
  },
  {
    n: 21,
    note: "Movement · stopping, hurrying and going back",
    items: [
      bk("止", "N4", "stop", "シ", "と.まる と.める", [
        ["雨で試合は**中止**になりました。", "あめ で しあい は **ちゅうし** に なりました。", "The match was cancelled because of rain.", "N3", undefined, "シ"],
        ["バスが駅の前に**止まりました**。", "バス が えき の まえ に **とまりました**。", "The bus stopped in front of the station.", "N4", undefined, "と.まる"],
        ["ここに車を**止めないで**ください。", "ここ に くるま を **とめないで** ください。", "Please don't park your car here.", "N4", undefined, "と.める"],
      ], [
        ["中止", "ちゅうし", "cancellation", "N3", "旅行は**中止**です。", "The trip is cancelled.", "りょこう は **ちゅうし** です。"],
        ["止まる", "とまる", "to stop (intr.)", "N4", "時計が**止まって**います。", "The clock has stopped.", "とけい が **とまって** います。"],
        ["禁止", "きんし", "prohibition", "N3", "ここは駐車**禁止**です。", "Parking is prohibited here.", "ここ は ちゅうしゃ **きんし** です。"],
      ]),
      bk("急", "N4", "hurry, sudden", "キュウ", "いそ.ぐ", [
        ["**急行**に乗りましょう。", "**きゅうこう** に のりましょう。", "Let's take the express train.", "N4", undefined, "キュウ"],
        ["**急に**雨が降ってきました。", "**きゅうに** あめ が ふって きました。", "It suddenly started to rain.", "N4", undefined, "キュウ"],
        ["時間がないので、**急いで**ください。", "じかん が ない ので、 **いそいで** ください。", "There's no time, so please hurry.", "N4", undefined, "いそ.ぐ"],
      ], [
        ["急ぐ", "いそぐ", "to hurry", "N4", "**急がなくて**も大丈夫です。", "It's fine even if you don't hurry.", "**いそがなくて** も だいじょうぶ です。"],
        ["急行", "きゅうこう", "express (train)", "N4", "この**急行**は新宿に止まりますか。", "Does this express stop at Shinjuku?", "この **きゅうこう** は しんじゅく に とまります か。"],
        ["特急", "とっきゅう", "limited express", "N4", "**特急**で大阪に行きました。", "I went to Osaka by limited express.", "**とっきゅう** で おおさか に いきました。"],
      ]),
      bk("帰", "N4", "return home", "キ", "かえ.る", [
        ["夏休みに**帰国**します。", "なつやすみ に **きこく** します。", "I'm going back to my country for the summer holidays.", "N3", undefined, "キ"],
        ["毎日六時に家に**帰ります**。", "まいにち ろくじ に いえ に **かえります**。", "I go home at six every day.", "N5", undefined, "かえ.る"],
      ], [
        ["帰る", "かえる", "to go home, to return", "N5", "もう**帰りましょう**。", "Let's go home now.", "もう **かえりましょう**。"],
        ["帰り", "かえり", "return, way home", "N4", "**帰り**にスーパーに寄ります。", "I'll stop by the supermarket on the way home.", "**かえり** に スーパー に よります。"],
        ["日帰り", "ひがえり", "day trip", "N3", "**日帰り**で京都に行きました。", "I went to Kyoto on a day trip.", "**ひがえり** で きょうと に いきました。"],
      ]),
      bk("去", "N4", "leave, past", "キョ コ", "さ.る", [
        ["**去年**、日本に来ました。", "**きょねん**、 にほん に きました。", "I came to Japan last year.", "N5", undefined, "キョ"],
        ["**過去**のことは忘れましょう。", "**かこ** の こと は わすれましょう。", "Let's forget about the past.", "N3", undefined, "コ"],
        ["台風が**去りました**。", "たいふう が **さりました**。", "The typhoon has passed.", "N3", undefined, "さ.る"],
      ], [
        ["去年", "きょねん", "last year", "N5", "**去年**の冬は寒かったです。", "Last winter was cold.", "**きょねん** の ふゆ は さむかった です。"],
        ["過去", "かこ", "the past", "N3", "**過去**の写真を見ました。", "I looked at old photos.", "**かこ** の しゃしん を みました。"],
      ]),
    ],
  },
  {
    n: 22,
    note: "Movement · travelling, waiting and arriving",
    items: [
      bk("旅", "N4", "trip, travel", "リョ", "たび", [
        ["来月、北海道へ**旅行**します。", "らいげつ、 ほっかいどう へ **りょこう** します。", "I'm travelling to Hokkaido next month.", "N4", undefined, "リョ"],
        ["一人で**旅**に出ました。", "ひとり で **たび** に でました。", "I set off on a journey alone.", "N3", undefined, "たび"],
      ], [
        ["旅行", "りょこう", "trip, travel", "N4", "家族で**旅行**に行きました。", "I went on a trip with my family.", "かぞく で **りょこう** に いきました。"],
        ["旅館", "りょかん", "Japanese-style inn", "N4", "温泉の**旅館**に泊まりました。", "We stayed at a hot-spring inn.", "おんせん の **りょかん** に とまりました。"],
        ["旅行会社", "りょこうがいしゃ", "travel agency", "N3", "**旅行会社**で切符を買いました。", "I bought a ticket at a travel agency.", "**りょこうがいしゃ** で きっぷ を かいました。"],
      ]),
      bk("待", "N4", "wait", "タイ", "ま.つ", [
        ["友達を誕生日パーティーに**招待**しました。", "ともだち を たんじょうび パーティー に **しょうたい** しました。", "I invited my friends to my birthday party.", "N3", undefined, "タイ"],
        ["ちょっと**待って**ください。", "ちょっと **まって** ください。", "Please wait a moment.", "N5", undefined, "ま.つ"],
      ], [
        ["待つ", "まつ", "to wait", "N5", "駅で友達を**待ちました**。", "I waited for my friend at the station.", "えき で ともだち を **まちました**。"],
        ["招待", "しょうたい", "invitation", "N3", "結婚式に**招待**されました。", "I was invited to a wedding.", "けっこんしき に **しょうたい** されました。"],
        ["期待", "きたい", "expectation", "N3", "みんなあなたに**期待**しています。", "Everyone has high hopes for you.", "みんな あなた に **きたい** して います。"],
      ]),
      bk("起", "N4", "wake up, rise", "キ", "お.きる", [
        ["弟は朝**起床**するのが遅いです。", "おとうと は あさ **きしょう** する の が おそい です。", "My younger brother is slow to get up in the morning.", "N2", undefined, "キ"],
        ["毎朝六時に**起きます**。", "まいあさ ろくじ に **おきます**。", "I get up at six every morning.", "N5", undefined, "お.きる"],
      ], [
        ["起きる", "おきる", "to get up, to happen", "N5", "昨日は何時に**起きました**か。", "What time did you get up yesterday?", "きのう は なんじ に **おきました** か。"],
        ["起こす", "おこす", "to wake someone up", "N4", "明日七時に**起こして**ください。", "Please wake me at seven tomorrow.", "あした しちじ に **おこして** ください。"],
      ]),
      bk("着", "N4", "arrive, wear", "チャク", "き.る つ.く", [
        ["飛行機は三時に**到着**します。", "ひこうき は さんじ に **とうちゃく** します。", "The plane arrives at three.", "N3", undefined, "チャク"],
        ["今日はセーターを**着ます**。", "きょう は セーター を **きます**。", "I'll wear a sweater today.", "N5", undefined, "き.る"],
        ["駅に**着いたら**、電話してください。", "えき に **ついたら**、 でんわ して ください。", "Please call me when you get to the station.", "N4", undefined, "つ.く"],
      ], [
        ["着物", "きもの", "kimono", "N4", "お正月に**着物**を着ました。", "I wore a kimono at New Year.", "おしょうがつ に **きもの** を きました。"],
        ["下着", "したぎ", "underwear", "N4", "新しい**下着**を買いました。", "I bought new underwear.", "あたらしい **したぎ** を かいました。"],
        ["着く", "つく", "to arrive", "N4", "もうすぐ東京に**着きます**。", "We will arrive in Tokyo soon.", "もうすぐ とうきょう に **つきます**。"],
      ]),
    ],
  },
  {
    n: 23,
    note: "Daily · opening, holding, borrowing and lending",
    items: [
      bk("開", "N4", "open", "カイ", "あ.ける ひら.く", [
        ["店は十時に**開店**します。", "みせ は じゅうじ に **かいてん** します。", "The shop opens at ten.", "N3", undefined, "カイ"],
        ["窓を**開けて**ください。", "まど を **あけて** ください。", "Please open the window.", "N5", undefined, "あ.ける"],
        ["教科書の十ページを**開いて**ください。", "きょうかしょ の じゅう ページ を **ひらいて** ください。", "Please open your textbook to page ten.", "N4", undefined, "ひら.く"],
      ], [
        ["開ける", "あける", "to open", "N5", "ドアを**開けました**。", "I opened the door.", "ドア を **あけました**。"],
        ["開く", "ひらく", "to open, to hold (an event)", "N4", "来週パーティーを**開きます**。", "We'll hold a party next week.", "らいしゅう パーティー を **ひらきます**。"],
        ["開始", "かいし", "start, beginning", "N3", "試験は九時に**開始**します。", "The exam begins at nine.", "しけん は くじ に **かいし** します。"],
      ]),
      bk("持", "N4", "hold, have", "ジ", "も.つ", [
        ["**支持**してくれてありがとうございます。", "**しじ** して くれて ありがとう ございます。", "Thank you for supporting me.", "N2", undefined, "ジ"],
        ["傘を**持って**いますか。", "かさ を **もって** います か。", "Do you have an umbrella?", "N5", undefined, "も.つ"],
      ], [
        ["持つ", "もつ", "to hold, to have", "N5", "この荷物を**持って**ください。", "Please hold this bag.", "この にもつ を **もって** ください。"],
        ["気持ち", "きもち", "feeling", "N4", "温泉は**気持ち**がいいです。", "Hot springs feel good.", "おんせん は **きもち** が いい です。"],
        ["お金持ち", "おかねもち", "rich person", "N4", "あの人は**お金持ち**です。", "That person is rich.", "あの ひと は **おかねもち** です。"],
      ]),
      bk("借", "N4", "borrow", "シャク", "か.りる", [
        ["家を買うために**借金**をしました。", "いえ を かう ため に **しゃっきん** を しました。", "I took out a loan to buy a house.", "N3", undefined, "シャク"],
        ["図書館で本を**借りました**。", "としょかん で ほん を **かりました**。", "I borrowed a book from the library.", "N5", undefined, "か.りる"],
      ], [
        ["借りる", "かりる", "to borrow", "N5", "ペンを**借りて**もいいですか。", "May I borrow a pen?", "ペン を **かりて** も いい です か。"],
        ["借金", "しゃっきん", "debt, loan", "N3", "**借金**を全部返しました。", "I paid back all my debt.", "**しゃっきん** を ぜんぶ かえしました。"],
      ]),
      bk("貸", "N4", "lend", "タイ", "か.す", [
        ["**賃貸**のアパートに住んでいます。", "**ちんたい** の アパート に すんで います。", "I live in a rented apartment.", "N2", undefined, "タイ"],
        ["友達にお金を**貸しました**。", "ともだち に おかね を **かしました**。", "I lent money to my friend.", "N5", undefined, "か.す"],
      ], [
        ["貸す", "かす", "to lend", "N5", "辞書を**貸して**ください。", "Please lend me your dictionary.", "じしょ を **かして** ください。"],
        ["貸し出し", "かしだし", "lending (out)", "N2", "本の**貸し出し**は二週間です。", "Books are lent out for two weeks.", "ほん の **かしだし** は にしゅうかん です。"],
      ]),
      bk("切", "N4", "cut", "セツ", "き.る", [
        ["家族は**大切**です。", "かぞく は **たいせつ** です。", "Family is important.", "N4", undefined, "セツ"],
        ["店員はとても**親切**でした。", "てんいん は とても **しんせつ** でした。", "The shop assistant was very kind.", "N4", undefined, "セツ"],
        ["ナイフで肉を**切ります**。", "ナイフ で にく を **きります**。", "I cut the meat with a knife.", "N5", undefined, "き.る"],
      ], [
        ["大切", "たいせつ", "important, precious", "N4", "この写真は**大切**な物です。", "This photo is precious to me.", "この しゃしん は **たいせつ** な もの です。"],
        ["親切", "しんせつ", "kind", "N4", "隣の人は**親切**です。", "My neighbour is kind.", "となり の ひと は **しんせつ** です。"],
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
      ], [
        ["注意", "ちゅうい", "caution, attention", "N4", "風邪に**注意**してください。", "Please be careful not to catch a cold.", "かぜ に **ちゅうい** して ください。"],
        ["注文", "ちゅうもん", "order", "N4", "ご**注文**は何ですか。", "What would you like to order?", "ご**ちゅうもん** は なん です か。"],
        ["注射", "ちゅうしゃ", "injection", "N3", "病院で**注射**をしました。", "I had an injection at the hospital.", "びょういん で **ちゅうしゃ** を しました。"],
      ]),
      bk("服", "N4", "clothes", "フク", "", [
        ["新しい**服**を買いました。", "あたらしい **ふく** を かいました。", "I bought new clothes.", "N5", undefined, "フク"],
      ], [
        ["洋服", "ようふく", "(Western) clothes", "N5", "姉は**洋服**がたくさんあります。", "My older sister has a lot of clothes.", "あね は **ようふく** が たくさん あります。"],
        ["制服", "せいふく", "uniform", "N3", "この学校は**制服**があります。", "This school has a uniform.", "この がっこう は **せいふく** が あります。"],
      ]),
      bk("病", "N4", "illness", "ビョウ", "", [
        ["祖母は**病気**で入院しています。", "そぼ は **びょうき** で にゅういん して います。", "My grandmother is in hospital because she is ill.", "N5", undefined, "ビョウ"],
        ["**病院**は駅の近くにあります。", "**びょういん** は えき の ちかく に あります。", "The hospital is near the station.", "N5", undefined, "ビョウ"],
      ], [
        ["病気", "びょうき", "illness", "N5", "**病気**のときは、よく寝てください。", "When you're ill, get plenty of sleep.", "**びょうき** の とき は、 よく ねて ください。"],
        ["病院", "びょういん", "hospital", "N5", "明日**病院**に行きます。", "I'm going to the hospital tomorrow.", "あした **びょういん** に いきます。"],
      ]),
      bk("死", "N4", "death, die", "シ", "し.ぬ", [
        ["事故で三人が**死亡**しました。", "じこ で さんにん が **しぼう** しました。", "Three people died in the accident.", "N2", undefined, "シ"],
        ["飼っていた犬が**死にました**。", "かって いた いぬ が **しにました**。", "The dog we had died.", "N5", undefined, "し.ぬ"],
      ], [
        ["死ぬ", "しぬ", "to die", "N5", "花に水をやらないと、**死んで**しまいます。", "If you don't water the flowers, they'll die.", "はな に みず を やらない と、 **しんで** しまいます。"],
        ["必死", "ひっし", "desperate, frantic", "N2", "**必死**に勉強しました。", "I studied desperately hard.", "**ひっし** に べんきょう しました。"],
      ]),
    ],
  },
  {
    n: 25,
    note: "Qualities · sameness, ways and degree",
    items: [
      bk("同", "N4", "same", "ドウ", "おな.じ", [
        ["田中さんは会社の**同僚**です。", "たなか さん は かいしゃ の **どうりょう** です。", "Mr. Tanaka is a colleague from work.", "N2", undefined, "ドウ"],
        ["私も**同じ**かばんを持っています。", "わたし も **おなじ** かばん を もって います。", "I have the same bag too.", "N4", undefined, "おな.じ"],
      ], [
        ["同じ", "おなじ", "same", "N4", "兄と私は**同じ**学校です。", "My older brother and I go to the same school.", "あに と わたし は **おなじ** がっこう です。"],
        ["同時", "どうじ", "same time", "N3", "二人は**同時**に答えました。", "The two answered at the same time.", "ふたり は **どうじ** に こたえました。"],
      ]),
      bk("方", "N4", "direction, way", "ホウ", "かた", [
        ["駅はあちらの**方**です。", "えき は あちら の **ほう** です。", "The station is that way.", "N4", undefined, "ホウ"],
        ["この漢字の読み**方**を教えてください。", "この かんじ の よみ**かた** を おしえて ください。", "Please tell me how to read this kanji.", "N4", undefined, "かた"],
      ], [
        ["夕方", "ゆうがた", "evening", "N5", "**夕方**に雨が降りました。", "It rained in the evening.", "**ゆうがた** に あめ が ふりました。"],
        ["方法", "ほうほう", "method, way", "N3", "いい**方法**がありますか。", "Is there a good way to do it?", "いい **ほうほう** が あります か。"],
        ["あの方", "あのかた", "that person (polite)", "N4", "**あの方**は先生です。", "That person is a teacher.", "**あのかた** は せんせい です。"],
      ]),
      bk("不", "N4", "not, un-", "フ ブ", "", [
        ["この町は交通が**不便**です。", "この まち は こうつう が **ふべん** です。", "Transport in this town is inconvenient.", "N4", undefined, "フ"],
        ["私は料理が**不器用**です。", "わたし は りょうり が **ぶきよう** です。", "I'm clumsy at cooking.", "N2", undefined, "ブ"],
      ], [
        ["不便", "ふべん", "inconvenient", "N4", "車がないと**不便**です。", "It's inconvenient without a car.", "くるま が ない と **ふべん** です。"],
        ["不安", "ふあん", "anxiety, uneasy", "N3", "試験の前はいつも**不安**です。", "I'm always anxious before exams.", "しけん の まえ は いつも **ふあん** です。"],
        ["不足", "ふそく", "shortage", "N3", "最近、寝**不足**です。", "I've been short of sleep lately.", "さいきん、 ね**ぶそく** です。"],
      ]),
      bk("以", "N4", "by means of, since", "イ", "", [
        ["十八歳**以上**の人は入れます。", "じゅうはっさい **いじょう** の ひと は はいれます。", "People aged eighteen or over can enter.", "N4", undefined, "イ"],
        ["三時**以降**は家にいます。", "さんじ **いこう** は いえ に います。", "I'll be at home from three o'clock on.", "N2", undefined, "イ"],
      ], [
        ["以上", "いじょう", "or more; that's all", "N4", "説明は**以上**です。", "That's all for the explanation.", "せつめい は **いじょう** です。"],
        ["以下", "いか", "or less, below", "N4", "千円**以下**のお菓子を買ってください。", "Please buy snacks costing a thousand yen or less.", "せんえん **いか** の おかし を かって ください。"],
        ["以前", "いぜん", "before, formerly", "N3", "**以前**、大阪に住んでいました。", "I used to live in Osaka.", "**いぜん**、 おおさか に すんで いました。"],
      ]),
      bk("度", "N4", "degree, times", "ド", "たび", [
        ["もう一**度**言ってください。", "もう いち**ど** いって ください。", "Please say it once more.", "N4", undefined, "ド"],
        ["今日は三十**度**です。", "きょう は さんじゅう**ど** です。", "It's thirty degrees today.", "N4", undefined, "ド"],
        ["この**度**はありがとうございました。", "この **たび** は ありがとう ございました。", "Thank you very much on this occasion.", "N3", undefined, "たび"],
      ], [
        ["今度", "こんど", "next time, this time", "N4", "**今度**一緒に行きましょう。", "Let's go together next time.", "**こんど** いっしょ に いきましょう。"],
        ["支度", "したく", "preparation", "N4", "出かける**支度**をしています。", "I'm getting ready to go out.", "でかける **したく** を して います。"],
        ["温度", "おんど", "temperature", "N3", "部屋の**温度**を下げてください。", "Please lower the room temperature.", "へや の **おんど** を さげて ください。"],
      ]),
    ],
  },
  {
    n: 26,
    note: "Qualities · heavy, right, true and original",
    items: [
      bk("重", "N4", "heavy", "ジュウ チョウ", "おも.い かさ.ねる", [
        ["健康はとても**重要**です。", "けんこう は とても **じゅうよう** です。", "Health is very important.", "N3", undefined, "ジュウ"],
        ["**貴重**な経験をしました。", "**きちょう** な けいけん を しました。", "I had a valuable experience.", "N2", undefined, "チョウ"],
        ["この箱は**重い**です。", "この はこ は **おもい** です。", "This box is heavy.", "N5", undefined, "おも.い"],
        ["お皿を**重ねて**ください。", "おさら を **かさねて** ください。", "Please stack the plates.", "N2", undefined, "かさ.ねる"],
      ], [
        ["重い", "おもい", "heavy", "N5", "かばんが**重くて**大変です。", "My bag is heavy, which is tough.", "かばん が **おもくて** たいへん です。"],
        ["体重", "たいじゅう", "body weight", "N3", "**体重**が増えました。", "I've gained weight.", "**たいじゅう** が ふえました。"],
        ["重要", "じゅうよう", "important", "N3", "これは**重要**な書類です。", "This is an important document.", "これ は **じゅうよう** な しょるい です。"],
      ]),
      bk("正", "N4", "correct", "セイ ショウ", "ただ.しい", [
        ["**正解**です。よくできました。", "**せいかい** です。 よく できました。", "That's correct. Well done.", "N2", undefined, "セイ"],
        ["**正月**は家族と過ごします。", "**しょうがつ** は かぞく と すごします。", "I spend New Year with my family.", "N4", undefined, "ショウ"],
        ["**正しい**答えを選んでください。", "**ただしい** こたえ を えらんで ください。", "Please choose the correct answer.", "N4", undefined, "ただ.しい"],
      ], [
        ["正しい", "ただしい", "correct, right", "N4", "あなたの意見は**正しい**です。", "Your opinion is right.", "あなた の いけん は **ただしい** です。"],
        ["正月", "しょうがつ", "New Year", "N4", "お**正月**に神社へ行きました。", "I went to a shrine at New Year.", "お**しょうがつ** に じんじゃ へ いきました。"],
        ["正直", "しょうじき", "honest", "N3", "彼はとても**正直**な人です。", "He is a very honest person.", "かれ は とても **しょうじき** な ひと です。"],
      ]),
      bk("真", "N4", "true, genuine", "シン", "ま", [
        ["この**写真**を見てください。", "この **しゃしん** を みて ください。", "Please look at this photo.", "N5", undefined, "シン"],
        ["公園の**真ん中**に池があります。", "こうえん の **まんなか** に いけ が あります。", "There is a pond in the middle of the park.", "N4", undefined, "ま"],
      ], [
        ["写真", "しゃしん", "photograph", "N5", "旅行の**写真**を撮りました。", "I took photos on the trip.", "りょこう の **しゃしん** を とりました。"],
        ["真面目", "まじめ", "serious, diligent", "N4", "弟はとても**真面目**です。", "My younger brother is very serious.", "おとうと は とても **まじめ** です。"],
        ["真っ白", "まっしろ", "pure white", "N3", "外は雪で**真っ白**です。", "Outside is pure white with snow.", "そと は ゆき で **まっしろ** です。"],
      ]),
      bk("無", "N4", "nothing, without", "ム ブ", "な.い", [
        ["**無理**をしないでください。", "**むり** を しないで ください。", "Please don't overdo it.", "N4", undefined, "ム"],
        ["みんな**無事**に着きました。", "みんな **ぶじ** に つきました。", "Everyone arrived safely.", "N3", undefined, "ブ"],
        ["時間が**無い**ので、急ぎましょう。", "じかん が **ない** ので、 いそぎましょう。", "We have no time, so let's hurry.", "N4", undefined, "な.い"],
      ], [
        ["無理", "むり", "impossible, unreasonable", "N4", "今日は**無理**です。", "Today is impossible.", "きょう は **むり** です。"],
        ["無料", "むりょう", "free of charge", "N3", "この美術館は**無料**です。", "This museum is free.", "この びじゅつかん は **むりょう** です。"],
        ["無事", "ぶじ", "safe, without incident", "N3", "**無事**に家に帰りました。", "I got home safely.", "**ぶじ** に いえ に かえりました。"],
      ]),
      bk("元", "N4", "origin, former", "ゲン ガン", "もと", [
        ["お**元気**ですか。", "お**げんき** です か。", "How are you?", "N5", undefined, "ゲン"],
        ["**元日**は家で休みます。", "**がんじつ** は いえ で やすみます。", "I rest at home on New Year's Day.", "N3", undefined, "ガン"],
        ["本を**元**の場所に戻してください。", "ほん を **もと** の ばしょ に もどして ください。", "Please put the book back where it was.", "N3", undefined, "もと"],
      ], [
        ["元気", "げんき", "healthy, energetic", "N5", "祖父は今も**元気**です。", "My grandfather is still healthy.", "そふ は いま も **げんき** です。"],
        ["地元", "じもと", "hometown, local area", "N3", "**地元**の料理を食べました。", "I ate the local food.", "**じもと** の りょうり を たべました。"],
        ["足元", "あしもと", "at one's feet", "N3", "**足元**に気をつけてください。", "Please watch your step.", "**あしもと** に き を つけて ください。"],
      ]),
    ],
  },
  {
    n: 27,
    note: "Qualities · bad, quality, separate and special",
    items: [
      bk("悪", "N4", "bad", "アク", "わる.い", [
        ["映画の**悪人**は怖かったです。", "えいが の **あくにん** は こわかった です。", "The villain in the movie was scary.", "N2", undefined, "アク"],
        ["今日は天気が**悪い**です。", "きょう は てんき が **わるい** です。", "The weather is bad today.", "N5", undefined, "わる.い"],
      ], [
        ["悪い", "わるい", "bad", "N5", "遅れて、すみません。私が**悪かった**です。", "Sorry I was late. It was my fault.", "おくれて、 すみません。 わたし が **わるかった** です。"],
        ["最悪", "さいあく", "the worst", "N3", "今日は**最悪**の一日でした。", "Today was the worst day.", "きょう は **さいあく** の いちにち でした。"],
      ]),
      bk("質", "N4", "quality, matter", "シツ", "", [
        ["何か**質問**がありますか。", "なにか **しつもん** が あります か。", "Do you have any questions?", "N4", undefined, "シツ"],
      ], [
        ["質問", "しつもん", "question", "N4", "先生に**質問**しました。", "I asked the teacher a question.", "せんせい に **しつもん** しました。"],
        ["品質", "ひんしつ", "quality (of goods)", "N2", "この店の商品は**品質**がいいです。", "The products at this shop are of good quality.", "この みせ の しょうひん は **ひんしつ** が いい です。"],
      ]),
      bk("別", "N4", "separate, another", "ベツ", "わか.れる", [
        ["**別**の日にしましょう。", "**べつ** の ひ に しましょう。", "Let's make it another day.", "N4", undefined, "ベツ"],
        ["駅で友達と**別れました**。", "えき で ともだち と **わかれました**。", "I said goodbye to my friend at the station.", "N4", undefined, "わか.れる"],
      ], [
        ["特別", "とくべつ", "special", "N4", "今日は**特別**な日です。", "Today is a special day.", "きょう は **とくべつ** な ひ です。"],
        ["別れる", "わかれる", "to part, to separate", "N4", "三年前に彼女と**別れました**。", "I broke up with my girlfriend three years ago.", "さんねん まえ に かのじょ と **わかれました**。"],
        ["別々", "べつべつ", "separately", "N3", "お会計は**別々**にお願いします。", "Separate bills, please.", "おかいけい は **べつべつ** に おねがい します。"],
      ]),
      bk("特", "N4", "special", "トク", "", [
        ["**特に**甘い物が好きです。", "**とくに** あまい もの が すき です。", "I especially like sweet things.", "N4", undefined, "トク"],
      ], [
        ["特に", "とくに", "especially", "N4", "**特に**問題はありません。", "There are no particular problems.", "**とくに** もんだい は ありません。"],
        ["特急", "とっきゅう", "limited express", "N4", "**特急**に乗れば、一時間で着きます。", "If you take the limited express, you'll get there in an hour.", "**とっきゅう** に のれば、 いちじかん で つきます。"],
        ["特徴", "とくちょう", "feature, characteristic", "N2", "この町の**特徴**は古いお寺です。", "This town's distinctive feature is its old temples.", "この まち の **とくちょう** は ふるい おてら です。"],
      ]),
    ],
  },
];
