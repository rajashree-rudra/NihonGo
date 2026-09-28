// N5 kanji book — groups 1–12. Grouped by theme.
// bk(kanji, level, meaning, on'yomi, kun'yomi, [[ja, kana, en, word level]], [[word, reading, meaning, level, example, exampleEn]])
import { bk, type BookGroup } from "../../builders.ts";

export const GROUPS: BookGroup[] = [
  {
    n: 1,
    note: "Numbers · one to five",
    items: [
      bk("一", "N5", "one", "イチ", "ひと ひと.つ", [
        ["**一月**は寒いです。", "**いちがつ** は さむい です。", "January is cold.", "N5", undefined, "イチ"],
        ["私は**一人**で住んでいます。", "わたし は **ひとり** で すんで います。", "I live alone.", "N5", undefined, "ひと"],
        ["りんごを**一つ**ください。", "りんご を **ひとつ** ください。", "One apple, please.", "N5", undefined, "ひと.つ"],
      ], [
        ["一人", "ひとり", "one person, alone", "N5", "週末は**一人**で映画を見ました。", "I watched a movie alone on the weekend.", "しゅうまつ は **ひとり** で えいが を みました。"],
        ["一日", "ついたち", "the 1st (day of the month)", "N5", "四月**一日**は月曜日です。", "April 1st is a Monday.", "しがつ **ついたち** は げつようび です。"],
        ["一番", "いちばん", "number one, the most", "N5", "夏が**一番**好きです。", "I like summer the most.", "なつ が **いちばん** すき です。"],
      ]),
      bk("二", "N5", "two", "ニ", "ふた ふた.つ", [
        ["**二時**に会いましょう。", "**にじ** に あいましょう。", "Let's meet at two.", "N5", undefined, "ニ"],
        ["**二人**で公園へ行きました。", "**ふたり** で こうえん へ いきました。", "The two of us went to the park.", "N5", undefined, "ふた"],
        ["卵を**二つ**買いました。", "たまご を **ふたつ** かいました。", "I bought two eggs.", "N5", undefined, "ふた.つ"],
      ], [
        ["二月", "にがつ", "February", "N5", "**二月**に雪が降りました。", "It snowed in February.", "**にがつ** に ゆき が ふりました。"],
        ["二日", "ふつか", "the 2nd (day of the month); two days", "N5", "五月**二日**に友達が来ます。", "My friend is coming on May 2nd.", "ごがつ **ふつか** に ともだち が きます。"],
        ["二十歳", "はたち", "twenty years old", "N5", "姉は**二十歳**です。", "My older sister is twenty.", "あね は **はたち** です。"],
      ]),
      bk("三", "N5", "three", "サン", "み みっ.つ", [
        ["猫が**三匹**います。", "ねこ が **さんびき** います。", "There are three cats.", "N5", undefined, "サン"],
        ["**三月**に日本へ行きます。", "**さんがつ** に にほん へ いきます。", "I'm going to Japan in March.", "N5", undefined, "サン"],
        ["今夜は**三日月**です。", "こんや は **みかづき** です。", "There's a crescent moon tonight.", "N3", undefined, "み"],
        ["ケーキを**三つ**買いました。", "ケーキ を **みっつ** かいました。", "I bought three pieces of cake.", "N5", undefined, "みっ.つ"],
      ], [
        ["三つ", "みっつ", "three (things)", "N5", "椅子が**三つ**あります。", "There are three chairs.", "いす が **みっつ** あります。"],
        ["三日", "みっか", "the 3rd (day of the month); three days", "N5", "**三日**に試験があります。", "There is an exam on the 3rd.", "**みっか** に しけん が あります。"],
        ["三人", "さんにん", "three people", "N5", "**三人**で昼ご飯を食べました。", "The three of us ate lunch.", "**さんにん** で ひるごはん を たべました。"],
      ]),
      bk("四", "N5", "four", "シ", "よ よっ.つ よん", [
        ["**四月**に学校が始まります。", "**しがつ** に がっこう が はじまります。", "School starts in April.", "N5", undefined, "シ"],
        ["今、**四時**です。", "いま、 **よじ** です。", "It's four o'clock now.", "N5", undefined, "よ"],
        ["みかんを**四つ**食べました。", "みかん を **よっつ** たべました。", "I ate four mandarin oranges.", "N5", undefined, "よっ.つ"],
        ["この本は**四百**円です。", "この ほん は **よんひゃく** えん です。", "This book is 400 yen.", "N5", undefined, "よん"],
      ], [
        ["四つ", "よっつ", "four (things)", "N5", "箱が**四つ**あります。", "There are four boxes.", "はこ が **よっつ** あります。"],
        ["四日", "よっか", "the 4th (day of the month); four days", "N5", "七月**四日**に帰ります。", "I'll go home on July 4th.", "しちがつ **よっか** に かえります。"],
        ["四人", "よにん", "four people", "N5", "家族は**四人**です。", "There are four people in my family.", "かぞく は **よにん** です。"],
      ]),
      bk("五", "N5", "five", "ゴ", "いつ いつ.つ", [
        ["**五月**は暖かいです。", "**ごがつ** は あたたかい です。", "May is warm.", "N5", undefined, "ゴ"],
        ["**五日**は休みです。", "**いつか** は やすみ です。", "The 5th is a day off.", "N5", undefined, "いつ"],
        ["みかんを**五つ**食べました。", "みかん を **いつつ** たべました。", "I ate five mandarin oranges.", "N5", undefined, "いつ.つ"],
      ], [
        ["五日", "いつか", "the 5th (day of the month); five days", "N5", "五月**五日**は子供の日です。", "May 5th is Children's Day.", "ごがつ **いつか** は こども の ひ です。"],
        ["五人", "ごにん", "five people", "N5", "教室に学生が**五人**います。", "There are five students in the classroom.", "きょうしつ に がくせい が **ごにん** います。"],
        ["五分", "ごふん", "five minutes", "N5", "駅まで**五分**です。", "It's five minutes to the station.", "えき まで **ごふん** です。"],
      ]),
    ],
  },
  {
    n: 2,
    note: "Numbers · six to ten",
    items: [
      bk("六", "N5", "six", "ロク", "むっ.つ むい", [
        ["毎朝**六時**に起きます。", "まいあさ **ろくじ** に おきます。", "I get up at six every morning.", "N5", undefined, "ロク"],
        ["**六月**は雨が多いです。", "**ろくがつ** は あめ が おおい です。", "It rains a lot in June.", "N5", undefined, "ロク"],
        ["卵を**六つ**買いました。", "たまご を **むっつ** かいました。", "I bought six eggs.", "N5", undefined, "むっ.つ"],
        ["**六日**に友達が来ます。", "**むいか** に ともだち が きます。", "My friend is coming on the 6th.", "N5", undefined, "むい"],
      ], [
        ["六つ", "むっつ", "six (things)", "N5", "皿が**六つ**あります。", "There are six plates.", "さら が **むっつ** あります。"],
        ["六日", "むいか", "the 6th (day of the month); six days", "N5", "**六日**は日曜日です。", "The 6th is a Sunday.", "**むいか** は にちようび です。"],
        ["六百", "ろっぴゃく", "six hundred", "N5", "このパンは**六百**円です。", "This bread is 600 yen.", "この パン は **ろっぴゃく** えん です。"],
      ]),
      bk("七", "N5", "seven", "シチ", "なな なな.つ なの", [
        ["**七月**は暑いです。", "**しちがつ** は あつい です。", "July is hot.", "N5", undefined, "シチ"],
        ["夜**七時**に晩ご飯を食べます。", "よる **しちじ** に ばんごはん を たべます。", "I eat dinner at seven in the evening.", "N5", undefined, "シチ"],
        ["妹は**七歳**です。", "いもうと は **ななさい** です。", "My little sister is seven years old.", "N5", undefined, "なな"],
        ["箱が**七つ**あります。", "はこ が **ななつ** あります。", "There are seven boxes.", "N5", undefined, "なな.つ"],
        ["**七日**に国へ帰ります。", "**なのか** に くに へ かえります。", "I'll go back to my country on the 7th.", "N5", undefined, "なの"],
      ], [
        ["七つ", "ななつ", "seven (things)", "N5", "袋が**七つ**あります。", "There are seven bags.", "ふくろ が **ななつ** あります。"],
        ["七日", "なのか", "the 7th (day of the month); seven days", "N5", "七月**七日**は七夕です。", "July 7th is Tanabata.", "しちがつ **なのか** は たなばた です。"],
        ["七人", "しちにん", "seven people", "N5", "**七人**でパーティーをしました。", "Seven of us had a party.", "**しちにん** で パーティー を しました。"],
      ]),
      bk("八", "N5", "eight", "ハチ", "や やっ.つ よう", [
        ["**八時**に家を出ます。", "**はちじ** に いえ を でます。", "I leave home at eight.", "N5", undefined, "ハチ"],
        ["**八月**に海へ行きました。", "**はちがつ** に うみ へ いきました。", "I went to the sea in August.", "N5", undefined, "ハチ"],
        ["駅の前に**八百屋**があります。", "えき の まえ に **やおや** が あります。", "There's a greengrocer in front of the station.", "N4", undefined, "や"],
        ["お皿が**八つ**あります。", "おさら が **やっつ** あります。", "There are eight plates.", "N5", undefined, "やっ.つ"],
        ["**八日**は私の誕生日です。", "**ようか** は わたし の たんじょうび です。", "The 8th is my birthday.", "N5", undefined, "よう"],
      ], [
        ["八つ", "やっつ", "eight (things)", "N5", "りんごが**八つ**あります。", "There are eight apples.", "りんご が **やっつ** あります。"],
        ["八日", "ようか", "the 8th (day of the month); eight days", "N5", "**八日**に友達に会います。", "I'll meet a friend on the 8th.", "**ようか** に ともだち に あいます。"],
        ["八百屋", "やおや", "greengrocer", "N4", "**八百屋**で野菜を買いました。", "I bought vegetables at the greengrocer.", "**やおや** で やさい を かいました。"],
      ]),
      bk("九", "N5", "nine", "キュウ ク", "ここの ここの.つ", [
        ["このシャツは**九百**円です。", "この シャツ は **きゅうひゃく** えん です。", "This shirt is 900 yen.", "N5", undefined, "キュウ"],
        ["**九月**はまだ暑いです。", "**くがつ** は まだ あつい です。", "It's still hot in September.", "N5", undefined, "ク"],
        ["授業は**九時**からです。", "じゅぎょう は **くじ** から です。", "Class starts at nine.", "N5", undefined, "ク"],
        ["**九日**に会いましょう。", "**ここのか** に あいましょう。", "Let's meet on the 9th.", "N5", undefined, "ここの"],
        ["りんごが**九つ**あります。", "りんご が **ここのつ** あります。", "There are nine apples.", "N5", undefined, "ここの.つ"],
      ], [
        ["九つ", "ここのつ", "nine (things)", "N5", "星が**九つ**見えます。", "I can see nine stars.", "ほし が **ここのつ** みえます。"],
        ["九日", "ここのか", "the 9th (day of the month); nine days", "N5", "**九日**は休みです。", "The 9th is a day off.", "**ここのか** は やすみ です。"],
        ["九十", "きゅうじゅう", "ninety", "N5", "祖母は**九十**歳です。", "My grandmother is ninety years old.", "そぼ は **きゅうじゅう** さい です。"],
      ]),
      bk("十", "N5", "ten", "ジュウ ジュッ", "とお", [
        ["**十月**は涼しいです。", "**じゅうがつ** は すずしい です。", "October is cool.", "N5", undefined, "ジュウ"],
        ["卵が**十個**あります。", "たまご が **じゅっこ** あります。", "There are ten eggs.", "N5", undefined, "ジュッ"],
        ["**十日**は日曜日です。", "**とおか** は にちようび です。", "The 10th is a Sunday.", "N5", undefined, "とお"],
      ], [
        ["十日", "とおか", "the 10th (day of the month); ten days", "N5", "**十日**に国へ帰ります。", "I'll return to my country on the 10th.", "**とおか** に くに へ かえります。"],
        ["十分", "じゅうぶん", "enough", "N4", "時間は**十分**あります。", "There is enough time.", "じかん は **じゅうぶん** あります。"],
        ["二十", "にじゅう", "twenty", "N5", "クラスに学生が**二十**人います。", "There are twenty students in the class.", "クラス に がくせい が **にじゅう** にん います。"],
      ]),
    ],
  },
  {
    n: 3,
    note: "Numbers · hundreds, thousands and yen",
    items: [
      bk("百", "N5", "hundred", "ヒャク", "", [
        ["このノートは**百円**です。", "この ノート は **ひゃくえん** です。", "This notebook is 100 yen.", "N5", undefined, "ヒャク"],
        ["学校に学生が**三百**人います。", "がっこう に がくせい が **さんびゃく** にん います。", "There are 300 students at the school.", "N5", undefined, "ヒャク"],
      ], [
        ["百", "ひゃく", "hundred", "N5", "**百**メートル走りました。", "I ran 100 meters.", "**ひゃく** メートル はしりました。"],
        ["八百", "はっぴゃく", "eight hundred", "N5", "この本は**八百**円です。", "This book is 800 yen.", "この ほん は **はっぴゃく** えん です。"],
        ["百貨店", "ひゃっかてん", "department store", "N3", "**百貨店**で服を買いました。", "I bought clothes at the department store.", "**ひゃっかてん** で ふく を かいました。"],
      ]),
      bk("千", "N5", "thousand", "セン", "", [
        ["この傘は**千円**です。", "この かさ は **せんえん** です。", "This umbrella is 1,000 yen.", "N5", undefined, "セン"],
        ["チケットは**三千**円でした。", "チケット は **さんぜん** えん でした。", "The ticket was 3,000 yen.", "N5", undefined, "セン"],
      ], [
        ["千", "せん", "thousand", "N5", "**千**人が集まりました。", "A thousand people gathered.", "**せん** にん が あつまりました。"],
        ["八千", "はっせん", "eight thousand", "N5", "靴は**八千**円でした。", "The shoes were 8,000 yen.", "くつ は **はっせん** えん でした。"],
      ]),
      bk("万", "N5", "ten thousand", "マン バン", "", [
        ["このカメラは**一万円**です。", "この カメラ は **いちまんえん** です。", "This camera is 10,000 yen.", "N5", undefined, "マン"],
        ["この町には**五万**人が住んでいます。", "この まち に は **ごまん** にん が すんで います。", "50,000 people live in this town.", "N5", undefined, "マン"],
        ["みんなで「**万歳**」と言いました。", "みんな で 「**ばんざい**」 と いいました。", "Everyone shouted \"banzai\".", "N3", undefined, "バン"],
      ], [
        ["万", "まん", "ten thousand", "N5", "車は二百**万**円でした。", "The car was two million yen.", "くるま は にひゃく **まん** えん でした。"],
        ["万年筆", "まんねんひつ", "fountain pen", "N4", "父に**万年筆**をもらいました。", "I got a fountain pen from my father.", "ちち に **まんねんひつ** を もらいました。"],
        ["万歳", "ばんざい", "hurrah, banzai", "N3", "みんなで**万歳**と言いました。", "Everyone shouted \"banzai\".", "みんな で **ばんざい** と いいました。"],
      ]),
      bk("円", "N5", "yen, circle", "エン", "まる.い", [
        ["コーヒーは**五百円**です。", "コーヒー は **ごひゃくえん** です。", "Coffee is 500 yen.", "N5", undefined, "エン"],
        ["日本のお金は**円**です。", "にほん の おかね は **えん** です。", "Japanese money is the yen.", "N5", undefined, "エン"],
        ["このテーブルは**円い**です。", "この テーブル は **まるい** です。", "This table is round.", "N4", undefined, "まる.い"],
      ], [
        ["一円", "いちえん", "one yen", "N5", "**一円**玉がありますか。", "Do you have a one-yen coin?", "**いちえん** だま が あります か。"],
        ["千円", "せんえん", "1,000 yen", "N5", "**千円**札を持っています。", "I have a 1,000-yen bill.", "**せんえん** さつ を もって います。"],
        ["円い", "まるい", "round", "N4", "**円い**テーブルを買いました。", "I bought a round table.", "**まるい** テーブル を かいました。"],
      ]),
    ],
  },
  {
    n: 4,
    note: "Time · days, years and hours",
    items: [
      bk("日", "N5", "sun, day", "ニチ ジツ", "ひ か", [
        ["**日曜日**に買い物をします。", "**にちようび** に かいもの を します。", "I go shopping on Sundays.", "N5", undefined, "ニチ"],
        ["土曜日は**休日**です。", "どようび は **きゅうじつ** です。", "Saturday is a day off.", "N4", undefined, "ジツ"],
        ["冬は**日**が短いです。", "ふゆ は **ひ** が みじかい です。", "The days are short in winter.", "N5", undefined, "ひ"],
        ["会社を**三日**休みました。", "かいしゃ を **みっか** やすみました。", "I took three days off work.", "N5", undefined, "か"],
      ], [
        ["毎日", "まいにち", "every day", "N5", "**毎日**日本語を勉強します。", "I study Japanese every day.", "**まいにち** にほんご を べんきょう します。"],
        ["明日", "あした", "tomorrow", "N5", "**明日**は学校へ行きます。", "I'll go to school tomorrow.", "**あした** は がっこう へ いきます。"],
        ["日本", "にほん", "Japan", "N5", "**日本**の食べ物が好きです。", "I like Japanese food.", "**にほん** の たべもの が すき です。"],
      ]),
      bk("月", "N5", "moon, month", "ゲツ ガツ", "つき", [
        ["**月曜日**は忙しいです。", "**げつようび** は いそがしい です。", "Mondays are busy.", "N5", undefined, "ゲツ"],
        ["**四月**に日本へ来ました。", "**しがつ** に にほん へ きました。", "I came to Japan in April.", "N5", undefined, "ガツ"],
        ["**月**がとてもきれいです。", "**つき** が とても きれい です。", "The moon is very beautiful.", "N5", undefined, "つき"],
      ], [
        ["今月", "こんげつ", "this month", "N5", "**今月**は旅行に行きます。", "I'm going on a trip this month.", "**こんげつ** は りょこう に いきます。"],
        ["来月", "らいげつ", "next month", "N5", "**来月**国へ帰ります。", "I'll return to my country next month.", "**らいげつ** くに へ かえります。"],
        ["一か月", "いっかげつ", "one month", "N5", "日本に**一か月**います。", "I'll be in Japan for one month.", "にほん に **いっかげつ** います。"],
      ]),
      bk("年", "N5", "year", "ネン", "とし", [
        ["**来年**は日本へ行きたいです。", "**らいねん** は にほん へ いきたい です。", "I want to go to Japan next year.", "N5", undefined, "ネン"],
        ["**去年**、大学を卒業しました。", "**きょねん**、 だいがく を そつぎょう しました。", "I graduated from university last year.", "N5", undefined, "ネン"],
        ["兄は私より三つ**年上**です。", "あに は わたし より みっつ **としうえ** です。", "My older brother is three years older than me.", "N4", undefined, "とし"],
      ], [
        ["来年", "らいねん", "next year", "N5", "**来年**結婚します。", "I'm getting married next year.", "**らいねん** けっこん します。"],
        ["毎年", "まいとし", "every year", "N5", "**毎年**京都へ行きます。", "I go to Kyoto every year.", "**まいとし** きょうと へ いきます。"],
        ["年", "とし", "year; age", "N5", "祖父は**年**をとりました。", "My grandfather has gotten old.", "そふ は **とし** を とりました。"],
      ]),
      bk("時", "N5", "time, hour", "ジ", "とき", [
        ["今、**何時**ですか。", "いま、 **なんじ** です か。", "What time is it now?", "N5", undefined, "ジ"],
        ["**時間**がありません。", "**じかん** が ありません。", "I don't have time.", "N5", undefined, "ジ"],
        ["暇な**時**は本を読みます。", "ひま な **とき** は ほん を よみます。", "When I'm free, I read books.", "N5", undefined, "とき"],
      ], [
        ["時計", "とけい", "clock, watch", "N5", "新しい**時計**を買いました。", "I bought a new watch.", "あたらしい **とけい** を かいました。"],
        ["時々", "ときどき", "sometimes", "N5", "**時々**映画を見ます。", "I sometimes watch movies.", "**ときどき** えいが を みます。"],
        ["時", "とき", "time, when", "N5", "子供の**時**、犬がいました。", "When I was a child, I had a dog.", "こども の **とき**、 いぬ が いました。"],
      ]),
      bk("分", "N5", "minute, divide", "ブン フン", "わ.ける わ.かる", [
        ["**自分**の部屋を掃除します。", "**じぶん** の へや を そうじ します。", "I clean my own room.", "N5", undefined, "ブン"],
        ["駅まで歩いて**二十分**です。", "えき まで あるいて **にじゅっぷん** です。", "It's a twenty-minute walk to the station.", "N5", undefined, "フン"],
        ["パンを二つに**分けます**。", "パン を ふたつ に **わけます**。", "I'll split the bread in two.", "N4", undefined, "わ.ける"],
        ["この問題が**分かりません**。", "この もんだい が **わかりません**。", "I don't understand this problem.", "N5", undefined, "わ.かる"],
      ], [
        ["自分", "じぶん", "oneself", "N5", "**自分**で料理を作ります。", "I cook for myself.", "**じぶん** で りょうり を つくります。"],
        ["気分", "きぶん", "feeling, mood", "N4", "今日は**気分**がいいです。", "I feel good today.", "きょう は **きぶん** が いい です。"],
        ["分ける", "わける", "to divide, to share", "N4", "ケーキを四つに**分けました**。", "I cut the cake into four pieces.", "ケーキ を よっつ に **わけました**。"],
      ]),
      bk("半", "N5", "half", "ハン", "", [
        ["今、**三時半**です。", "いま、 **さんじはん** です。", "It's 3:30 now.", "N5", undefined, "ハン"],
        ["りんごを**半分**食べました。", "りんご を **はんぶん** たべました。", "I ate half an apple.", "N5", undefined, "ハン"],
      ], [
        ["半年", "はんとし", "half a year", "N4", "日本に**半年**住みました。", "I lived in Japan for half a year.", "にほん に **はんとし** すみました。"],
        ["半日", "はんにち", "half a day", "N4", "**半日**、図書館にいました。", "I was in the library for half a day.", "**はんにち**、 としょかん に いました。"],
      ]),
    ],
  },
  {
    n: 5,
    note: "Time · now, last and every",
    items: [
      bk("今", "N5", "now", "コン", "いま", [
        ["**今晩**、映画を見ます。", "**こんばん**、 えいが を みます。", "I'll watch a movie tonight.", "N5", undefined, "コン"],
        ["**今**、何をしていますか。", "**いま**、 なに を して います か。", "What are you doing now?", "N5", undefined, "いま"],
      ], [
        ["今日", "きょう", "today", "N5", "**今日**は暑いです。", "It's hot today.", "**きょう** は あつい です。"],
        ["今週", "こんしゅう", "this week", "N5", "**今週**はテストがあります。", "There's a test this week.", "**こんしゅう** は テスト が あります。"],
        ["今朝", "けさ", "this morning", "N5", "**今朝**パンを食べました。", "I ate bread this morning.", "**けさ** パン を たべました。"],
      ]),
      bk("先", "N5", "ahead, previous", "セン", "さき", [
        ["**先生**に質問しました。", "**せんせい** に しつもん しました。", "I asked the teacher a question.", "N5", undefined, "セン"],
        ["**先週**、京都へ行きました。", "**せんしゅう**、 きょうと へ いきました。", "I went to Kyoto last week.", "N5", undefined, "セン"],
        ["**お先に**失礼します。", "**おさきに** しつれい します。", "Excuse me for leaving before you.", "N4", undefined, "さき"],
      ], [
        ["先月", "せんげつ", "last month", "N5", "**先月**引っ越しました。", "I moved last month.", "**せんげつ** ひっこしました。"],
        ["先に", "さきに", "ahead, first", "N4", "**先に**帰ります。", "I'll go home first.", "**さきに** かえります。"],
        ["先輩", "せんぱい", "senior (at school or work)", "N3", "**先輩**に仕事を教えてもらいました。", "A senior colleague taught me the work.", "**せんぱい** に しごと を おしえて もらいました。"],
      ]),
      bk("毎", "N5", "every", "マイ", "", [
        ["**毎朝**コーヒーを飲みます。", "**まいあさ** コーヒー を のみます。", "I drink coffee every morning.", "N5", undefined, "マイ"],
        ["**毎週**土曜日にテニスをします。", "**まいしゅう** どようび に テニス を します。", "I play tennis every Saturday.", "N5", undefined, "マイ"],
      ], [
        ["毎日", "まいにち", "every day", "N5", "**毎日**歩いて学校へ行きます。", "I walk to school every day.", "**まいにち** あるいて がっこう へ いきます。"],
        ["毎晩", "まいばん", "every night", "N5", "**毎晩**本を読みます。", "I read a book every night.", "**まいばん** ほん を よみます。"],
        ["毎月", "まいつき", "every month", "N5", "**毎月**家族に電話します。", "I call my family every month.", "**まいつき** かぞく に でんわ します。"],
      ]),
      bk("週", "N5", "week", "シュウ", "", [
        ["**来週**、テストがあります。", "**らいしゅう**、 テスト が あります。", "There's a test next week.", "N5", undefined, "シュウ"],
        ["**週末**は何をしますか。", "**しゅうまつ** は なに を します か。", "What will you do on the weekend?", "N4", undefined, "シュウ"],
      ], [
        ["今週", "こんしゅう", "this week", "N5", "**今週**は雨が多いです。", "There's been a lot of rain this week.", "**こんしゅう** は あめ が おおい です。"],
        ["先週", "せんしゅう", "last week", "N5", "**先週**友達に会いました。", "I met a friend last week.", "**せんしゅう** ともだち に あいました。"],
        ["一週間", "いっしゅうかん", "one week", "N5", "**一週間**休みます。", "I'll take a week off.", "**いっしゅうかん** やすみます。"],
      ]),
      bk("午", "N5", "noon", "ゴ", "", [
        ["**午前**九時に会いましょう。", "**ごぜん** くじ に あいましょう。", "Let's meet at 9 a.m.", "N5", undefined, "ゴ"],
        ["**午後**は図書館で勉強します。", "**ごご** は としょかん で べんきょう します。", "I study at the library in the afternoon.", "N5", undefined, "ゴ"],
      ], [
        ["午前中", "ごぜんちゅう", "during the morning", "N4", "**午前中**は家にいます。", "I'm at home in the morning.", "**ごぜんちゅう** は いえ に います。"],
        ["正午", "しょうご", "noon", "N3", "**正午**に昼ご飯を食べます。", "I eat lunch at noon.", "**しょうご** に ひるごはん を たべます。"],
      ]),
    ],
  },
  {
    n: 6,
    note: "Time · parts of the day",
    items: [
      bk("朝", "N5", "morning", "チョウ", "あさ", [
        ["**朝食**は七時です。", "**ちょうしょく** は しちじ です。", "Breakfast is at seven.", "N3", undefined, "チョウ"],
        ["**朝ご飯**を食べましたか。", "**あさごはん** を たべました か。", "Did you eat breakfast?", "N5", undefined, "あさ"],
        ["日曜日の**朝**は公園を歩きます。", "にちようび の **あさ** は こうえん を あるきます。", "On Sunday mornings I walk in the park.", "N5", undefined, "あさ"],
      ], [
        ["今朝", "けさ", "this morning", "N5", "**今朝**は寒かったです。", "It was cold this morning.", "**けさ** は さむかった です。"],
        ["毎朝", "まいあさ", "every morning", "N5", "**毎朝**シャワーを浴びます。", "I take a shower every morning.", "**まいあさ** シャワー を あびます。"],
        ["朝日", "あさひ", "morning sun", "N3", "**朝日**がきれいです。", "The morning sun is beautiful.", "**あさひ** が きれい です。"],
      ]),
      bk("昼", "N5", "daytime, noon", "チュウ", "ひる", [
        ["**昼食**は会社で食べます。", "**ちゅうしょく** は かいしゃ で たべます。", "I eat lunch at the office.", "N3", undefined, "チュウ"],
        ["**昼ご飯**は何を食べますか。", "**ひるごはん** は なに を たべます か。", "What will you eat for lunch?", "N5", undefined, "ひる"],
        ["**昼休み**に友達と話します。", "**ひるやすみ** に ともだち と はなします。", "I talk with friends during the lunch break.", "N4", undefined, "ひる"],
      ], [
        ["昼", "ひる", "noon, daytime", "N5", "**昼**は暖かいです。", "It's warm during the day.", "**ひる** は あたたかい です。"],
        ["昼間", "ひるま", "daytime", "N4", "**昼間**は家にいません。", "I'm not home during the day.", "**ひるま** は いえ に いません。"],
      ]),
      bk("夕", "N5", "evening", "", "ゆう", [
        ["**夕方**、雨が降りました。", "**ゆうがた**、 あめ が ふりました。", "It rained in the evening.", "N5", undefined, "ゆう"],
        ["**夕飯**は七時に食べます。", "**ゆうはん** は しちじ に たべます。", "I eat dinner at seven.", "N4", undefined, "ゆう"],
      ], [
        ["夕べ", "ゆうべ", "last night", "N5", "**夕べ**は早く寝ました。", "I went to bed early last night.", "**ゆうべ** は はやく ねました。"],
        ["夕日", "ゆうひ", "setting sun", "N3", "海の**夕日**はきれいです。", "The sunset over the sea is beautiful.", "うみ の **ゆうひ** は きれい です。"],
      ]),
      bk("夜", "N5", "night", "ヤ", "よ よる", [
        ["**今夜**、電話します。", "**こんや**、 でんわ します。", "I'll call you tonight.", "N4", undefined, "ヤ"],
        ["**夜中**に雨が降りました。", "**よなか** に あめ が ふりました。", "It rained in the middle of the night.", "N4", undefined, "よ"],
        ["**夜**はテレビを見ます。", "**よる** は テレビ を みます。", "I watch TV at night.", "N5", undefined, "よる"],
      ], [
        ["夜中", "よなか", "middle of the night", "N4", "**夜中**に目が覚めました。", "I woke up in the middle of the night.", "**よなか** に め が さめました。"],
        ["夜間", "やかん", "nighttime", "N3", "この病院は**夜間**も開いています。", "This hospital is open at night too.", "この びょういん は **やかん** も あいて います。"],
      ]),
      bk("間", "N5", "interval, between", "カン ケン", "あいだ ま", [
        ["毎日**二時間**勉強します。", "まいにち **にじかん** べんきょう します。", "I study for two hours every day.", "N5", undefined, "カン"],
        ["**人間**はみんな違います。", "**にんげん** は みんな ちがいます。", "All people are different.", "N4", undefined, "ケン"],
        ["銀行と郵便局の**間**に本屋があります。", "ぎんこう と ゆうびんきょく の **あいだ** に ほんや が あります。", "There's a bookstore between the bank and the post office.", "N5", undefined, "あいだ"],
        ["バスに**間に合いました**。", "バス に **まにあいました**。", "I made it in time for the bus.", "N4", undefined, "ま"],
      ], [
        ["時間", "じかん", "time", "N5", "**時間**がありますか。", "Do you have time?", "**じかん** が あります か。"],
        ["人間", "にんげん", "human being", "N4", "**人間**は考える動物です。", "Humans are animals that think.", "**にんげん** は かんがえる どうぶつ です。"],
        ["間に合う", "まにあう", "to be in time", "N4", "電車に**間に合いました**。", "I made it in time for the train.", "でんしゃ に **まにあいました**。"],
      ]),
    ],
  },
  {
    n: 7,
    note: "Nature · elements and mountains",
    items: [
      bk("火", "N5", "fire", "カ", "ひ", [
        ["**火曜日**にプールへ行きます。", "**かようび** に プール へ いきます。", "I go to the pool on Tuesdays.", "N5", undefined, "カ"],
        ["**火**を消してください。", "**ひ** を けして ください。", "Please put out the fire.", "N4", undefined, "ひ"],
      ], [
        ["花火", "はなび", "fireworks", "N4", "夏に**花火**を見ました。", "I watched fireworks in the summer.", "なつ に **はなび** を みました。"],
        ["火事", "かじ", "fire (disaster)", "N4", "昨日、近くで**火事**がありました。", "There was a fire nearby yesterday.", "きのう、 ちかく で **かじ** が ありました。"],
        ["火山", "かざん", "volcano", "N3", "富士山は**火山**です。", "Mt. Fuji is a volcano.", "ふじさん は **かざん** です。"],
      ]),
      bk("水", "N5", "water", "スイ", "みず", [
        ["**水曜日**は休みです。", "**すいようび** は やすみ です。", "Wednesday is my day off.", "N5", undefined, "スイ"],
        ["**水**を一杯ください。", "**みず** を いっぱい ください。", "A glass of water, please.", "N5", undefined, "みず"],
      ], [
        ["水泳", "すいえい", "swimming", "N4", "趣味は**水泳**です。", "My hobby is swimming.", "しゅみ は **すいえい** です。"],
        ["水道", "すいどう", "water supply, tap water", "N4", "**水道**の水を飲みます。", "I drink tap water.", "**すいどう** の みず を のみます。"],
      ]),
      bk("木", "N5", "tree, wood", "モク", "き", [
        ["**木曜日**に会いましょう。", "**もくようび** に あいましょう。", "Let's meet on Thursday.", "N5", undefined, "モク"],
        ["庭に大きい**木**があります。", "にわ に おおきい **き** が あります。", "There's a big tree in the garden.", "N5", undefined, "き"],
      ], [
        ["植木", "うえき", "garden plant, potted tree", "N3", "ベランダに**植木**があります。", "There are potted plants on the balcony.", "ベランダ に **うえき** が あります。"],
        ["木造", "もくぞう", "wooden (construction)", "N2", "この家は**木造**です。", "This house is made of wood.", "この いえ は **もくぞう** です。"],
      ]),
      bk("金", "N5", "gold, money", "キン", "かね", [
        ["**金曜日**の夜は外で食べます。", "**きんようび** の よる は そと で たべます。", "On Friday nights I eat out.", "N5", undefined, "キン"],
        ["**お金**がありません。", "**おかね** が ありません。", "I have no money.", "N5", undefined, "かね"],
      ], [
        ["お金持ち", "おかねもち", "rich person", "N4", "彼は**お金持ち**です。", "He is rich.", "かれ は **おかねもち** です。"],
        ["料金", "りょうきん", "fee, charge", "N4", "バスの**料金**はいくらですか。", "How much is the bus fare?", "バス の **りょうきん** は いくら です か。"],
        ["金", "きん", "gold", "N3", "**金**の指輪をもらいました。", "I received a gold ring.", "**きん** の ゆびわ を もらいました。"],
      ]),
      bk("土", "N5", "earth, soil", "ド ト", "つち", [
        ["**土曜日**に映画を見ます。", "**どようび** に えいが を みます。", "I'll watch a movie on Saturday.", "N5", undefined, "ド"],
        ["この**土地**は広いです。", "この **とち** は ひろい です。", "This piece of land is large.", "N3", undefined, "ト"],
        ["花を**土**に植えました。", "はな を **つち** に うえました。", "I planted flowers in the soil.", "N3", undefined, "つち"],
      ], [
        ["お土産", "おみやげ", "souvenir", "N4", "京都で**お土産**を買いました。", "I bought souvenirs in Kyoto.", "きょうと で **おみやげ** を かいました。"],
        ["土地", "とち", "land", "N3", "ここは**土地**が高いです。", "Land is expensive here.", "ここ は **とち** が たかい です。"],
      ]),
      bk("山", "N5", "mountain", "サン", "やま", [
        ["**富士山**はとても高いです。", "**ふじさん** は とても たかい です。", "Mt. Fuji is very tall.", undefined, undefined, "サン"],
        ["夏休みに**山**に登りました。", "なつやすみ に **やま** に のぼりました。", "I climbed a mountain during summer vacation.", "N5", undefined, "やま"],
      ], [
        ["山登り", "やまのぼり", "mountain climbing", "N4", "週末に**山登り**をします。", "I go mountain climbing on weekends.", "しゅうまつ に **やまのぼり** を します。"],
        ["沢山", "たくさん", "many, a lot", "N5", "公園に人が**沢山**います。", "There are a lot of people in the park.", "こうえん に ひと が **たくさん** います。"],
      ]),
    ],
  },
  {
    n: 8,
    note: "Nature · rivers, fields and sky",
    items: [
      bk("川", "N5", "river", "", "かわ", [
        ["この**川**はとてもきれいです。", "この **かわ** は とても きれい です。", "This river is very clean.", "N5", undefined, "かわ"],
        ["夏は**川**で泳ぎます。", "なつ は **かわ** で およぎます。", "In summer I swim in the river.", "N5", undefined, "かわ"],
      ], [
        ["小川", "おがわ", "stream, brook", "N3", "**小川**で魚を見ました。", "I saw fish in the stream.", "**おがわ** で さかな を みました。"],
        ["天の川", "あまのがわ", "the Milky Way", "N2", "七夕の夜に**天の川**を見ました。", "I saw the Milky Way on the night of Tanabata.", "たなばた の よる に **あまのがわ** を みました。"],
      ]),
      bk("田", "N5", "rice field", "デン", "た", [
        ["窓から**水田**が見えます。", "まど から **すいでん** が みえます。", "I can see rice paddies from the window.", "N2", undefined, "デン"],
        ["**田んぼ**で米を作ります。", "**たんぼ** で こめ を つくります。", "Rice is grown in the paddies.", "N3", undefined, "た"],
        ["**田中**さんは私の先生です。", "**たなか** さん は わたし の せんせい です。", "Mr. Tanaka is my teacher.", undefined, undefined, "た"],
      ], [
        ["田舎", "いなか", "countryside, hometown", "N4", "祖母は**田舎**に住んでいます。", "My grandmother lives in the countryside.", "そぼ は **いなか** に すんで います。"],
        ["水田", "すいでん", "paddy field", "N2", "この辺りには**水田**が多いです。", "There are many paddy fields around here.", "この あたり に は **すいでん** が おおい です。"],
      ]),
      bk("天", "N5", "heaven, sky", "テン", "あま", [
        ["**天気**がいいですね。", "**てんき** が いい です ね。", "Nice weather, isn't it?", "N5", undefined, "テン"],
        ["明日の**天気予報**を見ました。", "あした の **てんきよほう** を みました。", "I checked tomorrow's weather forecast.", "N4", undefined, "テン"],
        ["夜空に**天の川**が見えます。", "よぞら に **あまのがわ** が みえます。", "You can see the Milky Way in the night sky.", "N2", undefined, "あま"],
      ], [
        ["天ぷら", "てんぷら", "tempura", "N4", "**天ぷら**が大好きです。", "I love tempura.", "**てんぷら** が だいすき です。"],
        ["天井", "てんじょう", "ceiling", "N3", "この部屋は**天井**が高いです。", "This room has a high ceiling.", "この へや は **てんじょう** が たかい です。"],
      ]),
      bk("空", "N5", "sky, empty", "クウ", "そら から あ.く", [
        ["**空港**まで電車で行きます。", "**くうこう** まで でんしゃ で いきます。", "I'll go to the airport by train.", "N4", undefined, "クウ"],
        ["今日は**空**が青いです。", "きょう は **そら** が あおい です。", "The sky is blue today.", "N5", undefined, "そら"],
        ["この箱は**空っぽ**です。", "この はこ は **からっぽ** です。", "This box is empty.", "N3", undefined, "から"],
        ["この席は**空いて**いますか。", "この せき は **あいて** います か。", "Is this seat free?", "N4", undefined, "あ.く"],
      ], [
        ["空気", "くうき", "air", "N4", "山の**空気**はおいしいです。", "The mountain air is fresh.", "やま の **くうき** は おいしい です。"],
        ["空手", "からて", "karate", "N3", "兄は**空手**を習っています。", "My older brother is learning karate.", "あに は **からて** を ならって います。"],
      ]),
      bk("雨", "N5", "rain", "", "あめ あま", [
        ["**雨**が降っています。", "**あめ** が ふって います。", "It's raining.", "N5", undefined, "あめ"],
        ["今日は**大雨**です。", "きょう は **おおあめ** です。", "There's heavy rain today.", "N3", undefined, "あめ"],
        ["駅で**雨宿り**をしました。", "えき で **あまやどり** を しました。", "I waited out the rain at the station.", "N2", undefined, "あま"],
      ], [
        ["梅雨", "つゆ", "rainy season", "N3", "六月は**梅雨**です。", "June is the rainy season.", "ろくがつ は **つゆ** です。"],
        ["小雨", "こさめ", "light rain, drizzle", "N2", "朝から**小雨**が降っています。", "It's been drizzling since morning.", "あさ から **こさめ** が ふって います。"],
      ]),
    ],
  },
  {
    n: 9,
    note: "Nature · flowers, energy and animals",
    items: [
      bk("花", "N5", "flower", "カ", "はな", [
        ["テーブルに**花瓶**があります。", "テーブル に **かびん** が あります。", "There's a vase on the table.", "N4", undefined, "カ"],
        ["公園に**花**がたくさん咲いています。", "こうえん に **はな** が たくさん さいて います。", "Many flowers are blooming in the park.", "N5", undefined, "はな"],
        ["**花見**に行きましょう。", "**はなみ** に いきましょう。", "Let's go cherry-blossom viewing.", "N4", undefined, "はな"],
      ], [
        ["花瓶", "かびん", "vase", "N4", "**花瓶**に花を入れました。", "I put flowers in the vase.", "**かびん** に はな を いれました。"],
        ["花屋", "はなや", "flower shop", "N4", "駅の前に**花屋**があります。", "There's a flower shop in front of the station.", "えき の まえ に **はなや** が あります。"],
      ]),
      bk("気", "N5", "spirit, air", "キ", "", [
        ["**お元気**ですか。", "**おげんき** です か。", "How are you?", "N5", undefined, "キ"],
        ["**病気**で学校を休みました。", "**びょうき** で がっこう を やすみました。", "I missed school because I was sick.", "N5", undefined, "キ"],
      ], [
        ["天気", "てんき", "weather", "N5", "**天気**がいい日は散歩します。", "I take a walk on days with nice weather.", "**てんき** が いい ひ は さんぽ します。"],
        ["気持ち", "きもち", "feeling", "N4", "朝の空気は**気持ち**がいいです。", "The morning air feels nice.", "あさ の くうき は **きもち** が いい です。"],
      ]),
      bk("電", "N5", "electricity", "デン", "", [
        ["**電車**で会社へ行きます。", "**でんしゃ** で かいしゃ へ いきます。", "I go to work by train.", "N5", undefined, "デン"],
        ["母に**電話**をかけました。", "はは に **でんわ** を かけました。", "I called my mother.", "N5", undefined, "デン"],
      ], [
        ["電気", "でんき", "electricity, light", "N5", "部屋の**電気**を消してください。", "Please turn off the light in the room.", "へや の **でんき** を けして ください。"],
        ["電池", "でんち", "battery", "N4", "**電池**が切れました。", "The battery died.", "**でんち** が きれました。"],
        ["電子レンジ", "でんしレンジ", "microwave oven", "N4", "**電子レンジ**で温めます。", "I heat it in the microwave.", "**でんしレンジ** で あたためます。"],
      ]),
      bk("魚", "N5", "fish", "ギョ", "さかな", [
        ["**金魚**を二匹飼っています。", "**きんぎょ** を にひき かって います。", "I have two goldfish.", "N3", undefined, "ギョ"],
        ["私は**魚**が好きです。", "わたし は **さかな** が すき です。", "I like fish.", "N5", undefined, "さかな"],
      ], [
        ["魚屋", "さかなや", "fish shop", "N4", "**魚屋**で魚を買いました。", "I bought fish at the fish shop.", "**さかなや** で さかな を かいました。"],
        ["焼き魚", "やきざかな", "grilled fish", "N3", "朝ご飯に**焼き魚**を食べました。", "I ate grilled fish for breakfast.", "あさごはん に **やきざかな** を たべました。"],
      ]),
      bk("犬", "N5", "dog", "", "いぬ", [
        ["**犬**と散歩します。", "**いぬ** と さんぽ します。", "I take a walk with my dog.", "N5", undefined, "いぬ"],
        ["**子犬**がとてもかわいいです。", "**こいぬ** が とても かわいい です。", "The puppy is very cute.", "N3", undefined, "いぬ"],
      ], [
        ["飼い犬", "かいいぬ", "pet dog", "N2", "これは私の**飼い犬**です。", "This is my pet dog.", "これ は わたし の **かいいぬ** です。"],
        ["番犬", "ばんけん", "watchdog", "N1", "うちの犬はいい**番犬**です。", "Our dog is a good watchdog.", "うち の いぬ は いい **ばんけん** です。"],
      ]),
    ],
  },
  {
    n: 10,
    note: "People · men, women and parents",
    items: [
      bk("人", "N5", "person", "ジン ニン", "ひと", [
        ["私は**日本人**です。", "わたし は **にほんじん** です。", "I am Japanese.", "N5", undefined, "ジン"],
        ["教室に学生が**三人**います。", "きょうしつ に がくせい が **さんにん** います。", "There are three students in the classroom.", "N5", undefined, "ニン"],
        ["あの**人**は誰ですか。", "あの **ひと** は だれ です か。", "Who is that person?", "N5", undefined, "ひと"],
      ], [
        ["大人", "おとな", "adult", "N5", "**大人**のチケットは千円です。", "An adult ticket is 1,000 yen.", "**おとな** の チケット は せんえん です。"],
        ["外国人", "がいこくじん", "foreigner", "N5", "この町には**外国人**が多いです。", "There are many foreigners in this town.", "この まち に は **がいこくじん** が おおい です。"],
        ["人気", "にんき", "popularity", "N4", "このお店は**人気**があります。", "This shop is popular.", "この おみせ は **にんき** が あります。"],
      ]),
      bk("子", "N5", "child", "シ ス", "こ", [
        ["この**帽子**は高いです。", "この **ぼうし** は たかい です。", "This hat is expensive.", "N5", undefined, "シ"],
        ["**椅子**に座ってください。", "**いす** に すわって ください。", "Please sit on the chair.", "N5", undefined, "ス"],
        ["**子供**が公園で遊んでいます。", "**こども** が こうえん で あそんで います。", "Children are playing in the park.", "N5", undefined, "こ"],
        ["**女の子**が歌っています。", "**おんなのこ** が うたって います。", "A girl is singing.", "N5", undefined, "こ"],
      ], [
        ["男の子", "おとこのこ", "boy", "N5", "**男の子**が走っています。", "A boy is running.", "**おとこのこ** が はしって います。"],
        ["お菓子", "おかし", "sweets, snacks", "N5", "**お菓子**を買いました。", "I bought some snacks.", "**おかし** を かいました。"],
        ["帽子", "ぼうし", "hat, cap", "N5", "外で**帽子**をかぶります。", "I wear a hat outside.", "そと で **ぼうし** を かぶります。"],
      ]),
      bk("女", "N5", "woman", "ジョ", "おんな", [
        ["**彼女**はとても親切です。", "**かのじょ** は とても しんせつ です。", "She is very kind.", "N4", undefined, "ジョ"],
        ["あの**女の人**は私の先生です。", "あの **おんなのひと** は わたし の せんせい です。", "That woman is my teacher.", "N5", undefined, "おんな"],
      ], [
        ["女性", "じょせい", "woman, female", "N4", "あの**女性**は医者です。", "That woman is a doctor.", "あの **じょせい** は いしゃ です。"],
        ["女子", "じょし", "girl, female", "N3", "**女子**トイレはあちらです。", "The women's restroom is over there.", "**じょし** トイレ は あちら です。"],
      ]),
      bk("男", "N5", "man", "ダン ナン", "おとこ", [
        ["あの**男性**は私の先生です。", "あの **だんせい** は わたし の せんせい です。", "That man is my teacher.", "N4", undefined, "ダン"],
        ["**長男**は大学生です。", "**ちょうなん** は だいがくせい です。", "My eldest son is a university student.", "N3", undefined, "ナン"],
        ["あの**男の人**は誰ですか。", "あの **おとこのひと** は だれ です か。", "Who is that man?", "N5", undefined, "おとこ"],
      ], [
        ["男性", "だんせい", "man, male", "N4", "**男性**の店員に聞きました。", "I asked a male clerk.", "**だんせい** の てんいん に ききました。"],
        ["男子", "だんし", "boy, male", "N3", "このクラスは**男子**が多いです。", "There are many boys in this class.", "この クラス は **だんし** が おおい です。"],
      ]),
      bk("父", "N5", "father", "フ", "ちち", [
        ["**祖父**は元気です。", "**そふ** は げんき です。", "My grandfather is well.", "N4", undefined, "フ"],
        ["**父**は銀行で働いています。", "**ちち** は ぎんこう で はたらいて います。", "My father works at a bank.", "N5", undefined, "ちち"],
        ["**父**は毎朝コーヒーを飲みます。", "**ちち** は まいあさ コーヒー を のみます。", "My father drinks coffee every morning.", "N5", undefined, "ちち"],
      ], [
        ["祖父", "そふ", "grandfather", "N4", "**祖父**は八十歳です。", "My grandfather is eighty.", "**そふ** は はちじゅっさい です。"],
        ["父親", "ちちおや", "father", "N3", "彼はいい**父親**です。", "He is a good father.", "かれ は いい **ちちおや** です。"],
        ["お父さん", "おとうさん", "father (polite)", "N5", "**お父さん**はお元気ですか。", "How is your father?", "**おとうさん** は おげんき です か。"],
      ]),
    ],
  },
  {
    n: 11,
    note: "People · family, friends and names",
    items: [
      bk("母", "N5", "mother", "ボ", "はは", [
        ["**祖母**は八十歳です。", "**そぼ** は はちじゅっさい です。", "My grandmother is eighty.", "N4", undefined, "ボ"],
        ["**母**は料理が上手です。", "**はは** は りょうり が じょうず です。", "My mother is good at cooking.", "N5", undefined, "はは"],
        ["**母**に手紙を書きました。", "**はは** に てがみ を かきました。", "I wrote a letter to my mother.", "N5", undefined, "はは"],
      ], [
        ["祖母", "そぼ", "grandmother", "N4", "**祖母**と一緒に住んでいます。", "I live with my grandmother.", "**そぼ** と いっしょ に すんで います。"],
        ["母親", "ははおや", "mother", "N3", "私は**母親**に似ています。", "I look like my mother.", "わたし は **ははおや** に にて います。"],
        ["母国語", "ぼこくご", "native language", "N2", "私の**母国語**は英語です。", "My native language is English.", "わたし の **ぼこくご** は えいご です。"],
      ]),
      bk("友", "N5", "friend", "ユウ", "とも", [
        ["彼は私の**親友**です。", "かれ は わたし の **しんゆう** です。", "He is my best friend.", "N3", undefined, "ユウ"],
        ["**友達**と映画を見ました。", "**ともだち** と えいが を みました。", "I watched a movie with a friend.", "N5", undefined, "とも"],
      ], [
        ["友人", "ゆうじん", "friend", "N3", "**友人**の結婚式に行きました。", "I went to a friend's wedding.", "**ゆうじん** の けっこんしき に いきました。"],
        ["友情", "ゆうじょう", "friendship", "N2", "二人の**友情**は長く続いています。", "Their friendship has lasted a long time.", "ふたり の **ゆうじょう** は ながく つづいて います。"],
      ]),
      bk("私", "N5", "I, private", "シ", "わたし わたくし", [
        ["この大学は**私立**です。", "この だいがく は **しりつ** です。", "This university is private.", "N3", undefined, "シ"],
        ["**私**は学生です。", "**わたし** は がくせい です。", "I am a student.", "N5", undefined, "わたし"],
        ["**私たち**は同じクラスです。", "**わたしたち** は おなじ クラス です。", "We are in the same class.", "N5", undefined, "わたし"],
        ["**私**は田中と申します。", "**わたくし** は たなか と もうします。", "My name is Tanaka. (formal)", "N4", undefined, "わたくし"],
      ], [
        ["私立", "しりつ", "private (institution)", "N3", "姉は**私立**の大学に通っています。", "My older sister goes to a private university.", "あね は **しりつ** の だいがく に かよって います。"],
        ["私鉄", "してつ", "private railway", "N2", "毎日**私鉄**で会社へ行きます。", "I take a private railway to work every day.", "まいにち **してつ** で かいしゃ へ いきます。"],
      ]),
      bk("名", "N5", "name", "メイ ミョウ", "な", [
        ["京都は**有名**な町です。", "きょうと は **ゆうめい** な まち です。", "Kyoto is a famous city.", "N5", undefined, "メイ"],
        ["私の**名字**は山田です。", "わたし の **みょうじ** は やまだ です。", "My family name is Yamada.", "N3", undefined, "ミョウ"],
        ["**お名前**は何ですか。", "**おなまえ** は なん です か。", "What is your name?", "N5", undefined, "な"],
      ], [
        ["名字", "みょうじ", "surname, family name", "N3", "私の**名字**は田中です。", "My surname is Tanaka.", "わたし の **みょうじ** は たなか です。"],
        ["名刺", "めいし", "business card", "N3", "**名刺**をどうぞ。", "Here is my business card.", "**めいし** を どうぞ。"],
        ["名物", "めいぶつ", "local specialty", "N2", "これは大阪の**名物**です。", "This is a specialty of Osaka.", "これ は おおさか の **めいぶつ** です。"],
      ]),
      bk("口", "N5", "mouth", "コウ", "くち", [
        ["日本の**人口**は多いです。", "にほん の **じんこう** は おおい です。", "Japan has a large population.", "N4", undefined, "コウ"],
        ["**口**を大きく開けてください。", "**くち** を おおきく あけて ください。", "Please open your mouth wide.", "N5", undefined, "くち"],
        ["駅の**入り口**で待っています。", "えき の **いりぐち** で まって います。", "I'll wait at the station entrance.", "N5", undefined, "くち"],
      ], [
        ["出口", "でぐち", "exit", "N5", "**出口**はあちらです。", "The exit is over there.", "**でぐち** は あちら です。"],
        ["人口", "じんこう", "population", "N4", "東京は**人口**が多いです。", "Tokyo has a large population.", "とうきょう は **じんこう** が おおい です。"],
        ["窓口", "まどぐち", "service window, counter", "N3", "**窓口**で切符を買いました。", "I bought a ticket at the counter.", "**まどぐち** で きっぷ を かいました。"],
      ]),
    ],
  },
  {
    n: 12,
    note: "People · body and strength",
    items: [
      bk("目", "N5", "eye", "モク", "め", [
        ["**目的**は日本語の勉強です。", "**もくてき** は にほんご の べんきょう です。", "My purpose is to study Japanese.", "N3", undefined, "モク"],
        ["私の**目**は茶色です。", "わたし の **め** は ちゃいろ です。", "My eyes are brown.", "N5", undefined, "め"],
        ["**二つ目**の角を右に曲がってください。", "**ふたつめ** の かど を みぎ に まがって ください。", "Please turn right at the second corner.", "N4", undefined, "め"],
      ], [
        ["目的", "もくてき", "purpose", "N3", "旅行の**目的**は何ですか。", "What is the purpose of your trip?", "りょこう の **もくてき** は なん です か。"],
        ["目覚まし時計", "めざましどけい", "alarm clock", "N3", "**目覚まし時計**が鳴りました。", "The alarm clock rang.", "**めざましどけい** が なりました。"],
        ["目薬", "めぐすり", "eye drops", "N2", "寝る前に**目薬**をさします。", "I use eye drops before going to bed.", "ねる まえ に **めぐすり** を さします。"],
      ]),
      bk("耳", "N5", "ear", "ジ", "みみ", [
        ["**耳鼻科**は二階です。", "**じびか** は にかい です。", "The ENT clinic is on the second floor.", "N1", undefined, "ジ"],
        ["うさぎの**耳**は長いです。", "うさぎ の **みみ** は ながい です。", "Rabbits have long ears.", "N5", undefined, "みみ"],
        ["祖父は**耳**が遠いです。", "そふ は **みみ** が とおい です。", "My grandfather is hard of hearing.", "N5", undefined, "みみ"],
      ], [
        ["耳鼻科", "じびか", "ear, nose and throat clinic", "N1", "昨日、**耳鼻科**に行きました。", "I went to an ENT clinic yesterday.", "きのう、 **じびか** に いきました。"],
        ["耳鳴り", "みみなり", "ringing in the ears", "N1", "朝から**耳鳴り**がします。", "My ears have been ringing since morning.", "あさ から **みみなり** が します。"],
      ]),
      bk("手", "N5", "hand", "シュ", "て", [
        ["兄は**歌手**です。", "あに は **かしゅ** です。", "My older brother is a singer.", "N4", undefined, "シュ"],
        ["ご飯の前に**手**を洗います。", "ごはん の まえ に **て** を あらいます。", "I wash my hands before meals.", "N5", undefined, "て"],
        ["今日は**手**が冷たいです。", "きょう は **て** が つめたい です。", "My hands are cold today.", "N5", undefined, "て"],
      ], [
        ["下手", "へた", "bad at, unskillful", "N5", "私は料理が**下手**です。", "I'm bad at cooking.", "わたし は りょうり が **へた** です。"],
        ["切手", "きって", "postage stamp", "N5", "郵便局で**切手**を買いました。", "I bought stamps at the post office.", "ゆうびんきょく で **きって** を かいました。"],
        ["手紙", "てがみ", "letter", "N5", "友達に**手紙**を書きました。", "I wrote a letter to a friend.", "ともだち に **てがみ** を かきました。"],
      ]),
      bk("足", "N5", "foot, leg", "ソク", "あし た.りる た.す", [
        ["来週、**遠足**に行きます。", "らいしゅう、 **えんそく** に いきます。", "We're going on a school trip next week.", "N3", undefined, "ソク"],
        ["歩きすぎて**足**が痛いです。", "あるきすぎて **あし** が いたい です。", "My feet hurt from walking too much.", "N5", undefined, "あし"],
        ["お金が**足りません**。", "おかね が **たりません**。", "I don't have enough money.", "N4", undefined, "た.りる"],
        ["お茶に砂糖を**足します**。", "おちゃ に さとう を **たします**。", "I add sugar to my tea.", "N4", undefined, "た.す"],
      ], [
        ["遠足", "えんそく", "school trip, excursion", "N3", "明日は**遠足**です。", "Tomorrow is our school excursion.", "あした は **えんそく** です。"],
        ["一足", "いっそく", "one pair (of shoes)", "N3", "靴を**一足**買いました。", "I bought a pair of shoes.", "くつ を **いっそく** かいました。"],
        ["足す", "たす", "to add", "N4", "二に三を**足す**と五です。", "Two plus three is five.", "に に さん を **たす** と ご です。"],
      ]),
      bk("力", "N5", "power", "リョク", "ちから", [
        ["毎日**努力**しています。", "まいにち **どりょく** して います。", "I make an effort every day.", "N3", undefined, "リョク"],
        ["父は**力**が強いです。", "ちち は **ちから** が つよい です。", "My father is strong.", "N4", undefined, "ちから"],
      ], [
        ["協力", "きょうりょく", "cooperation", "N3", "みんなで**協力**しましょう。", "Let's all work together.", "みんな で **きょうりょく** しましょう。"],
        ["電力", "でんりょく", "electric power", "N2", "夏は**電力**をたくさん使います。", "We use a lot of electricity in summer.", "なつ は **でんりょく** を たくさん つかいます。"],
      ]),
    ],
  },
];
