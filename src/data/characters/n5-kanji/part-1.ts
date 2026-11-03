// N5 kanji book — groups 1–12. Grouped by theme.
// bk(kanji, level, meaning, on'yomi, kun'yomi, [[ja, kana, en, word level]], [[word, reading, meaning, level, example, exampleEn]])
import { bk, type BookGroup } from "../../builders.ts";

export const GROUPS: BookGroup[] = [
  {
    n: 1,
    note: "Numbers · one to five",
    items: [
      bk("一", "N5", "one", "イチ", "ひと ひと.つ", [
        ["**一**から十まで数えます。", "**いち** から じゅう まで かぞえます。", "I count from one to ten.", "N5", undefined, "イチ"],
        ["**一月**は寒いです。", "**いちがつ** は さむい です。", "January is cold.", "N5", undefined, "イチ"],
        ["夏が**一番**好きです。", "なつ が **いちばん** すき です。", "I like summer the most.", "N5", undefined, "イチ"],
        ["私は**一人**で住んでいます。", "わたし は **ひとり** で すんで います。", "I live alone.", "N5", undefined, "ひと"],
        ["りんごを**一つ**ください。", "りんご を **ひとつ** ください。", "One apple, please.", "N5", undefined, "ひと.つ"],
        ["四月**一日**は月曜日です。", "しがつ **ついたち** は げつようび です。", "April 1st is a Monday.", "N5", undefined, "*"],
      ], []),
      bk("二", "N5", "two", "ニ", "ふた ふた.つ", [
        ["一たす一は**二**です。", "いち たす いち は **に** です。", "One plus one is two.", "N5", undefined, "ニ"],
        ["**二月**に雪が降りました。", "**にがつ** に ゆき が ふりました。", "It snowed in February.", "N5", undefined, "ニ"],
        ["**二時**に会いましょう。", "**にじ** に あいましょう。", "Let's meet at two.", "N5", undefined, "ニ"],
        ["**二人**で公園へ行きました。", "**ふたり** で こうえん へ いきました。", "The two of us went to the park.", "N5", undefined, "ふた"],
        ["卵を**二つ**買いました。", "たまご を **ふたつ** かいました。", "I bought two eggs.", "N5", undefined, "ふた.つ"],
        ["五月**二日**に友達が来ます。", "ごがつ **ふつか** に ともだち が きます。", "My friend is coming on May 2nd.", "N5", undefined, "*"],
        ["姉は**二十歳**です。", "あね は **はたち** です。", "My older sister is twenty.", "N5", undefined, "*"],
      ], []),
      bk("三", "N5", "three", "サン", "み みっ.つ", [
        ["一たす二は**三**です。", "いち たす に は **さん** です。", "One plus two is three.", "N5", undefined, "サン"],
        ["**三月**に日本へ行きます。", "**さんがつ** に にほん へ いきます。", "I'm going to Japan in March.", "N5", undefined, "サン"],
        ["**三人**で昼ご飯を食べました。", "**さんにん** で ひるごはん を たべました。", "The three of us ate lunch.", "N5", undefined, "サン"],
        ["猫が**三匹**います。", "ねこ が **さんびき** います。", "There are three cats.", "N5", undefined, "サン"],
        ["ケーキを**三つ**買いました。", "ケーキ を **みっつ** かいました。", "I bought three pieces of cake.", "N5", undefined, "みっ.つ"],
        ["**三日**にテストがあります。", "**みっか** に テスト が あります。", "There is a test on the 3rd.", "N5", undefined, "み"],
      ], []),
      bk("四", "N5", "four", "シ", "よ よっ.つ よん", [
        ["二たす二は**四**です。", "に たす に は **よん** です。", "Two plus two is four.", "N5", undefined, "よん"],
        ["**四月**に学校が始まります。", "**しがつ** に がっこう が はじまります。", "School starts in April.", "N5", undefined, "シ"],
        ["今、**四時**です。", "いま、 **よじ** です。", "It's four o'clock now.", "N5", undefined, "よ"],
        ["家族は**四人**です。", "かぞく は **よにん** です。", "There are four people in my family.", "N5", undefined, "よ"],
        ["みかんを**四つ**食べました。", "みかん を **よっつ** たべました。", "I ate four mandarin oranges.", "N5", undefined, "よっ.つ"],
        ["七月**四日**に帰ります。", "しちがつ **よっか** に かえります。", "I'll go home on July 4th.", "N5", undefined, "よ"],
        ["この本は**四百**円です。", "この ほん は **よんひゃく** えん です。", "This book is 400 yen.", "N5", undefined, "よん"],
      ], []),
      bk("五", "N5", "five", "ゴ", "いつ いつ.つ", [
        ["二たす三は**五**です。", "に たす さん は **ご** です。", "Two plus three is five.", "N5", undefined, "ゴ"],
        ["**五月**は暖かいです。", "**ごがつ** は あたたかい です。", "May is warm.", "N5", undefined, "ゴ"],
        ["教室に学生が**五人**います。", "きょうしつ に がくせい が **ごにん** います。", "There are five students in the classroom.", "N5", undefined, "ゴ"],
        ["駅まで**五分**です。", "えき まで **ごふん** です。", "It's five minutes to the station.", "N5", undefined, "ゴ"],
        ["**五日**は休みです。", "**いつか** は やすみ です。", "The 5th is a day off.", "N5", undefined, "いつ"],
        ["みかんを**五つ**食べました。", "みかん を **いつつ** たべました。", "I ate five mandarin oranges.", "N5", undefined, "いつ.つ"],
      ], []),
    ],
  },
  {
    n: 2,
    note: "Numbers · six to ten",
    items: [
      bk("六", "N5", "six", "ロク", "むっ.つ むい", [
        ["三たす三は**六**です。", "さん たす さん は **ろく** です。", "Three plus three is six.", "N5", undefined, "ロク"],
        ["毎朝**六時**に起きます。", "まいあさ **ろくじ** に おきます。", "I get up at six every morning.", "N5", undefined, "ロク"],
        ["**六月**は雨が多いです。", "**ろくがつ** は あめ が おおい です。", "It rains a lot in June.", "N5", undefined, "ロク"],
        ["このパンは**六百**円です。", "この パン は **ろっぴゃく** えん です。", "This bread is 600 yen.", "N5", undefined, "ロク"],
        ["卵を**六つ**買いました。", "たまご を **むっつ** かいました。", "I bought six eggs.", "N5", undefined, "むっ.つ"],
        ["**六日**に友達が来ます。", "**むいか** に ともだち が きます。", "My friend is coming on the 6th.", "N5", undefined, "むい"],
      ], []),
      bk("七", "N5", "seven", "シチ", "なな なな.つ なの", [
        ["三たす四は**七**です。", "さん たす よん は **なな** です。", "Three plus four is seven.", "N5", undefined, "なな"],
        ["**七月**は暑いです。", "**しちがつ** は あつい です。", "July is hot.", "N5", undefined, "シチ"],
        ["夜**七時**に晩ご飯を食べます。", "よる **しちじ** に ばんごはん を たべます。", "I eat dinner at seven in the evening.", "N5", undefined, "シチ"],
        ["**七人**でパーティーをしました。", "**しちにん** で パーティー を しました。", "Seven of us had a party.", "N5", undefined, "シチ"],
        ["妹は**七歳**です。", "いもうと は **ななさい** です。", "My little sister is seven years old.", "N5", undefined, "なな"],
        ["箱が**七つ**あります。", "はこ が **ななつ** あります。", "There are seven boxes.", "N5", undefined, "なな.つ"],
        ["**七日**に国へ帰ります。", "**なのか** に くに へ かえります。", "I'll go back to my country on the 7th.", "N5", undefined, "なの"],
      ], []),
      bk("八", "N5", "eight", "ハチ", "や やっ.つ よう", [
        ["四たす四は**八**です。", "よん たす よん は **はち** です。", "Four plus four is eight.", "N5", undefined, "ハチ"],
        ["**八時**に家を出ます。", "**はちじ** に いえ を でます。", "I leave home at eight.", "N5", undefined, "ハチ"],
        ["**八月**に海へ行きました。", "**はちがつ** に うみ へ いきました。", "I went to the sea in August.", "N5", undefined, "ハチ"],
        ["お皿が**八つ**あります。", "おさら が **やっつ** あります。", "There are eight plates.", "N5", undefined, "やっ.つ"],
        ["**八日**は私の誕生日です。", "**ようか** は わたし の たんじょうび です。", "The 8th is my birthday.", "N5", undefined, "よう"],
        ["駅の前に**八百屋**があります。", "えき の まえ に **やおや** が あります。", "There's a greengrocer in front of the station.", "N4", undefined, "や"],
      ], []),
      bk("九", "N5", "nine", "キュウ ク", "ここの ここの.つ", [
        ["四たす五は**九**です。", "よん たす ご は **きゅう** です。", "Four plus five is nine.", "N5", undefined, "キュウ"],
        ["このシャツは**九百**円です。", "この シャツ は **きゅうひゃく** えん です。", "This shirt is 900 yen.", "N5", undefined, "キュウ"],
        ["祖母は**九十**歳です。", "そぼ は **きゅうじゅう** さい です。", "My grandmother is ninety years old.", "N5", undefined, "キュウ"],
        ["**九月**はまだ暑いです。", "**くがつ** は まだ あつい です。", "It's still hot in September.", "N5", undefined, "ク"],
        ["授業は**九時**からです。", "じゅぎょう は **くじ** から です。", "Class starts at nine.", "N5", undefined, "ク"],
        ["**九日**に会いましょう。", "**ここのか** に あいましょう。", "Let's meet on the 9th.", "N5", undefined, "ここの"],
        ["りんごが**九つ**あります。", "りんご が **ここのつ** あります。", "There are nine apples.", "N5", undefined, "ここの.つ"],
      ], []),
      bk("十", "N5", "ten", "ジュウ ジュッ", "とお", [
        ["五たす五は**十**です。", "ご たす ご は **じゅう** です。", "Five plus five is ten.", "N5", undefined, "ジュウ"],
        ["**十月**は涼しいです。", "**じゅうがつ** は すずしい です。", "October is cool.", "N5", undefined, "ジュウ"],
        ["クラスに学生が**二十**人います。", "クラス に がくせい が **にじゅう** にん います。", "There are twenty students in the class.", "N5", undefined, "ジュウ"],
        ["卵が**十個**あります。", "たまご が **じゅっこ** あります。", "There are ten eggs.", "N5", undefined, "ジュッ"],
        ["**十日**は日曜日です。", "**とおか** は にちようび です。", "The 10th is a Sunday.", "N5", undefined, "とお"],
      ], []),
    ],
  },
  {
    n: 3,
    note: "Numbers · hundreds, thousands and yen",
    items: [
      bk("百", "N5", "hundred", "ヒャク", "", [
        ["**百**メートル走りました。", "**ひゃく** メートル はしりました。", "I ran 100 meters.", "N5", undefined, "ヒャク"],
        ["このノートは**百円**です。", "この ノート は **ひゃくえん** です。", "This notebook is 100 yen.", "N5", undefined, "ヒャク"],
        ["学校に学生が**三百**人います。", "がっこう に がくせい が **さんびゃく** にん います。", "There are 300 students at the school.", "N5", undefined, "ヒャク"],
        ["この本は**八百**円です。", "この ほん は **はっぴゃく** えん です。", "This book is 800 yen.", "N5", undefined, "ヒャク"],
      ], []),
      bk("千", "N5", "thousand", "セン", "", [
        ["**千**人が来ました。", "**せん** にん が きました。", "A thousand people came.", "N5", undefined, "セン"],
        ["この傘は**千円**です。", "この かさ は **せんえん** です。", "This umbrella is 1,000 yen.", "N5", undefined, "セン"],
        ["チケットは**三千**円でした。", "チケット は **さんぜん** えん でした。", "The ticket was 3,000 yen.", "N5", undefined, "セン"],
        ["靴は**八千**円でした。", "くつ は **はっせん** えん でした。", "The shoes were 8,000 yen.", "N5", undefined, "セン"],
      ], []),
      bk("万", "N5", "ten thousand", "マン バン", "", [
        ["車は二百**万**円でした。", "くるま は にひゃく **まん** えん でした。", "The car was two million yen.", "N5", undefined, "マン"],
        ["このカメラは**一万円**です。", "この カメラ は **いちまんえん** です。", "This camera is 10,000 yen.", "N5", undefined, "マン"],
        ["この町には**五万**人が住んでいます。", "この まち に は **ごまん** にん が すんで います。", "50,000 people live in this town.", "N5", undefined, "マン"],
        ["みんなで「**万歳**」と言いました。", "みんな で 「**ばんざい**」 と いいました。", "Everyone shouted \"banzai\".", "N3", undefined, "バン"],
      ], []),
      bk("円", "N5", "yen, circle", "エン", "まる.い", [
        ["日本のお金は**円**です。", "にほん の おかね は **えん** です。", "Japanese money is the yen.", "N5", undefined, "エン"],
        ["コーヒーは**五百円**です。", "コーヒー は **ごひゃくえん** です。", "Coffee is 500 yen.", "N5", undefined, "エン"],
        ["**千円**札を持っています。", "**せんえん** さつ を もって います。", "I have a 1,000-yen bill.", "N5", undefined, "エン"],
        ["**一円**玉がありますか。", "**いちえん** だま が あります か。", "Do you have a one-yen coin?", "N5", undefined, "エン"],
        ["このテーブルは**円い**です。", "この テーブル は **まるい** です。", "This table is round.", "N4", undefined, "まる.い"],
      ], []),
    ],
  },
  {
    n: 4,
    note: "Time · days, years and hours",
    items: [
      bk("日", "N5", "sun, day", "ニチ ジツ", "ひ か", [
        ["**日曜日**に買い物をします。", "**にちようび** に かいもの を します。", "I go shopping on Sundays.", "N5", undefined, "ニチ"],
        ["冬は**日**が短いです。", "ふゆ は **ひ** が みじかい です。", "The days are short in winter.", "N5", undefined, "ひ"],
        ["**毎日**日本語を勉強します。", "**まいにち** にほんご を べんきょう します。", "I study Japanese every day.", "N5", undefined, "ニチ"],
        ["**日本**の食べ物が好きです。", "**にほん** の たべもの が すき です。", "I like Japanese food.", "N5", undefined, "ニチ"],
        ["会社を**三日**休みました。", "かいしゃ を **みっか** やすみました。", "I took three days off work.", "N5", undefined, "か"],
        ["**明日**は学校へ行きます。", "**あした** は がっこう へ いきます。", "I'll go to school tomorrow.", "N5", undefined, "*"],
        ["土曜日は**休日**です。", "どようび は **きゅうじつ** です。", "Saturday is a day off.", "N4", undefined, "ジツ"],
      ], []),
      bk("月", "N5", "moon, month", "ゲツ ガツ", "つき", [
        ["**月曜日**は忙しいです。", "**げつようび** は いそがしい です。", "Mondays are busy.", "N5", undefined, "ゲツ"],
        ["**月**がとてもきれいです。", "**つき** が とても きれい です。", "The moon is very beautiful.", "N5", undefined, "つき"],
        ["**四月**に日本へ来ました。", "**しがつ** に にほん へ きました。", "I came to Japan in April.", "N5", undefined, "ガツ"],
        ["**今月**は旅行に行きます。", "**こんげつ** は りょこう に いきます。", "I'm going on a trip this month.", "N5", undefined, "ゲツ"],
        ["**来月**国へ帰ります。", "**らいげつ** くに へ かえります。", "I'll return to my country next month.", "N5", undefined, "ゲツ"],
        ["日本に**一か月**います。", "にほん に **いっかげつ** います。", "I'll be in Japan for one month.", "N5", undefined, "ゲツ"],
      ], []),
      bk("年", "N5", "year", "ネン", "とし", [
        ["**来年**は日本へ行きたいです。", "**らいねん** は にほん へ いきたい です。", "I want to go to Japan next year.", "N5", undefined, "ネン"],
        ["**去年**、日本へ行きました。", "**きょねん**、 にほん へ いきました。", "I went to Japan last year.", "N5", undefined, "ネン"],
        ["**毎年**京都へ行きます。", "**まいとし** きょうと へ いきます。", "I go to Kyoto every year.", "N5", undefined, "とし"],
        ["祖父は**年**をとりました。", "そふ は **とし** を とりました。", "My grandfather has gotten old.", "N5", undefined, "とし"],
      ], []),
      bk("時", "N5", "time, hour", "ジ", "とき", [
        ["**時間**がありません。", "**じかん** が ありません。", "I don't have time.", "N5", undefined, "ジ"],
        ["今、**何時**ですか。", "いま、 **なんじ** です か。", "What time is it now?", "N5", undefined, "ジ"],
        ["暇な**時**は本を読みます。", "ひま な **とき** は ほん を よみます。", "When I'm free, I read books.", "N5", undefined, "とき"],
        ["**時々**映画を見ます。", "**ときどき** えいが を みます。", "I sometimes watch movies.", "N5", undefined, "とき"],
        ["新しい**時計**を買いました。", "あたらしい **とけい** を かいました。", "I bought a new watch.", "N5", undefined, "*"],
      ], []),
      bk("分", "N5", "minute, divide", "ブン フン", "わ.ける わ.かる", [
        ["この問題が**分かりません**。", "この もんだい が **わかりません**。", "I don't understand this problem.", "N5", undefined, "わ.かる"],
        ["**自分**の部屋を掃除します。", "**じぶん** の へや を そうじ します。", "I clean my own room.", "N5", undefined, "ブン"],
        ["駅まで歩いて**二十分**です。", "えき まで あるいて **にじゅっぷん** です。", "It's a twenty-minute walk to the station.", "N5", undefined, "フン"],
        ["パンを二つに**分けます**。", "パン を ふたつ に **わけます**。", "I'll split the bread in two.", "N4", undefined, "わ.ける"],
      ], []),
      bk("半", "N5", "half", "ハン", "", [
        ["りんごを**半分**食べました。", "りんご を **はんぶん** たべました。", "I ate half an apple.", "N5", undefined, "ハン"],
        ["今、**三時半**です。", "いま、 **さんじはん** です。", "It's 3:30 now.", "N5", undefined, "ハン"],
      ], []),
    ],
  },
  {
    n: 5,
    note: "Time · now, last and every",
    items: [
      bk("今", "N5", "now", "コン", "いま", [
        ["**今**、何をしていますか。", "**いま**、 なに を して います か。", "What are you doing now?", "N5", undefined, "いま"],
        ["**今晩**、映画を見ます。", "**こんばん**、 えいが を みます。", "I'll watch a movie tonight.", "N5", undefined, "コン"],
        ["**今週**はテストがあります。", "**こんしゅう** は テスト が あります。", "There's a test this week.", "N5", undefined, "コン"],
        ["**今日**は暑いです。", "**きょう** は あつい です。", "It's hot today.", "N5", undefined, "*"],
        ["**今朝**パンを食べました。", "**けさ** パン を たべました。", "I ate bread this morning.", "N5", undefined, "*"],
      ], []),
      bk("先", "N5", "ahead, previous", "セン", "さき", [
        ["あの人は**先生**です。", "あの ひと は **せんせい** です。", "That person is a teacher.", "N5", undefined, "セン"],
        ["**先週**、京都へ行きました。", "**せんしゅう**、 きょうと へ いきました。", "I went to Kyoto last week.", "N5", undefined, "セン"],
        ["**先月**、日本へ来ました。", "**せんげつ**、 にほん へ きました。", "I came to Japan last month.", "N5", undefined, "セン"],
        ["**先に**帰ります。", "**さきに** かえります。", "I'll go home first.", "N4", undefined, "さき"],
      ], []),
      bk("毎", "N5", "every", "マイ", "", [
        ["**毎日**歩いて学校へ行きます。", "**まいにち** あるいて がっこう へ いきます。", "I walk to school every day.", "N5", undefined, "マイ"],
        ["**毎朝**コーヒーを飲みます。", "**まいあさ** コーヒー を のみます。", "I drink coffee every morning.", "N5", undefined, "マイ"],
        ["**毎週**土曜日にテニスをします。", "**まいしゅう** どようび に テニス を します。", "I play tennis every Saturday.", "N5", undefined, "マイ"],
        ["**毎晩**本を読みます。", "**まいばん** ほん を よみます。", "I read a book every night.", "N5", undefined, "マイ"],
        ["**毎月**家族に電話します。", "**まいつき** かぞく に でんわ します。", "I call my family every month.", "N5", undefined, "マイ"],
      ], []),
      bk("週", "N5", "week", "シュウ", "", [
        ["**今週**は雨が多いです。", "**こんしゅう** は あめ が おおい です。", "There's been a lot of rain this week.", "N5", undefined, "シュウ"],
        ["**来週**、テストがあります。", "**らいしゅう**、 テスト が あります。", "There's a test next week.", "N5", undefined, "シュウ"],
        ["**先週**友達に会いました。", "**せんしゅう** ともだち に あいました。", "I met a friend last week.", "N5", undefined, "シュウ"],
        ["**一週間**休みます。", "**いっしゅうかん** やすみます。", "I'll take a week off.", "N5", undefined, "シュウ"],
      ], []),
      bk("午", "N5", "noon", "ゴ", "", [
        ["**午後**は図書館で勉強します。", "**ごご** は としょかん で べんきょう します。", "I study at the library in the afternoon.", "N5", undefined, "ゴ"],
        ["**午前**九時に会いましょう。", "**ごぜん** くじ に あいましょう。", "Let's meet at 9 a.m.", "N5", undefined, "ゴ"],
      ], []),
    ],
  },
  {
    n: 6,
    note: "Time · parts of the day",
    items: [
      bk("朝", "N5", "morning", "チョウ", "あさ", [
        ["日曜日の**朝**は公園を歩きます。", "にちようび の **あさ** は こうえん を あるきます。", "On Sunday mornings I walk in the park.", "N5", undefined, "あさ"],
        ["**朝ご飯**を食べましたか。", "**あさごはん** を たべました か。", "Did you eat breakfast?", "N5", undefined, "あさ"],
        ["**毎朝**シャワーを浴びます。", "**まいあさ** シャワー を あびます。", "I take a shower every morning.", "N5", undefined, "あさ"],
        ["**今朝**は寒かったです。", "**けさ** は さむかった です。", "It was cold this morning.", "N5", undefined, "*"],
        ["**朝食**は七時です。", "**ちょうしょく** は しちじ です。", "Breakfast is at seven.", "N3", undefined, "チョウ"],
      ], []),
      bk("昼", "N5", "daytime, noon", "チュウ", "ひる", [
        ["**昼**は暖かいです。", "**ひる** は あたたかい です。", "It's warm during the day.", "N5", undefined, "ひる"],
        ["**昼ご飯**は何を食べますか。", "**ひるごはん** は なに を たべます か。", "What will you eat for lunch?", "N5", undefined, "ひる"],
        ["**昼食**は会社で食べます。", "**ちゅうしょく** は かいしゃ で たべます。", "I eat lunch at the office.", "N3", undefined, "チュウ"],
      ], []),
      bk("夕", "N5", "evening", "", "ゆう", [
        ["**夕方**、雨が降りました。", "**ゆうがた**、 あめ が ふりました。", "It rained in the evening.", "N5", undefined, "ゆう"],
        ["**夕べ**は早く寝ました。", "**ゆうべ** は はやく ねました。", "I went to bed early last night.", "N5", undefined, "ゆう"],
      ], []),
      bk("夜", "N5", "night", "ヤ", "よ よる", [
        ["**夜**はテレビを見ます。", "**よる** は テレビ を みます。", "I watch TV at night.", "N5", undefined, "よる"],
        ["**今夜**、電話します。", "**こんや**、 でんわ します。", "I'll call you tonight.", "N4", undefined, "ヤ"],
        ["**夜中**に雨が降りました。", "**よなか** に あめ が ふりました。", "It rained in the middle of the night.", "N4", undefined, "よ"],
      ], []),
      bk("間", "N5", "interval, between", "カン ケン", "あいだ ま", [
        ["**時間**がありますか。", "**じかん** が あります か。", "Do you have time?", "N5", undefined, "カン"],
        ["駅と銀行の**間**にカフェがあります。", "えき と ぎんこう の **あいだ** に カフェ が あります。", "There's a café between the station and the bank.", "N5", undefined, "あいだ"],
        ["毎日**二時間**勉強します。", "まいにち **にじかん** べんきょう します。", "I study for two hours every day.", "N5", undefined, "カン"],
        ["**人間**はみんな違います。", "**にんげん** は みんな ちがいます。", "All people are different.", "N4", undefined, "ケン"],
        ["バスに**間に合いました**。", "バス に **まにあいました**。", "I made it in time for the bus.", "N4", undefined, "ま"],
      ], []),
    ],
  },
  {
    n: 7,
    note: "Nature · elements and mountains",
    items: [
      bk("火", "N5", "fire", "カ", "ひ", [
        ["**火**を消してください。", "**ひ** を けして ください。", "Please put out the fire.", "N4", undefined, "ひ"],
        ["**火曜日**にプールへ行きます。", "**かようび** に プール へ いきます。", "I go to the pool on Tuesdays.", "N5", undefined, "カ"],
      ], []),
      bk("水", "N5", "water", "スイ", "みず", [
        ["**水**を一杯ください。", "**みず** を いっぱい ください。", "A glass of water, please.", "N5", undefined, "みず"],
        ["**水曜日**は休みです。", "**すいようび** は やすみ です。", "Wednesday is my day off.", "N5", undefined, "スイ"],
      ], []),
      bk("木", "N5", "tree, wood", "モク", "き", [
        ["庭に大きい**木**があります。", "にわ に おおきい **き** が あります。", "There's a big tree in the garden.", "N5", undefined, "き"],
        ["**木曜日**に会いましょう。", "**もくようび** に あいましょう。", "Let's meet on Thursday.", "N5", undefined, "モク"],
      ], []),
      bk("金", "N5", "gold, money", "キン", "かね", [
        ["**お金**がありません。", "**おかね** が ありません。", "I have no money.", "N5", undefined, "かね"],
        ["**金曜日**の夜は外で食べます。", "**きんようび** の よる は そと で たべます。", "On Friday nights I eat out.", "N5", undefined, "キン"],
      ], []),
      bk("土", "N5", "earth, soil", "ド ト", "つち", [
        ["**土曜日**に映画を見ます。", "**どようび** に えいが を みます。", "I'll watch a movie on Saturday.", "N5", undefined, "ド"],
        ["花を**土**に植えました。", "はな を **つち** に うえました。", "I planted flowers in the soil.", "N3", undefined, "つち"],
        ["この**土地**は広いです。", "この **とち** は ひろい です。", "This piece of land is large.", "N3", undefined, "ト"],
        ["京都で**お土産**を買いました。", "きょうと で **おみやげ** を かいました。", "I bought souvenirs in Kyoto.", "N4", undefined, "*"],
      ], []),
      bk("山", "N5", "mountain", "サン", "やま", [
        ["夏休みに**山**に登りました。", "なつやすみ に **やま** に のぼりました。", "I climbed a mountain during summer vacation.", "N5", undefined, "やま"],
        ["**富士山**はとても高いです。", "**ふじさん** は とても たかい です。", "Mt. Fuji is very tall.", "N5", undefined, "サン"],
        ["公園に人が**沢山**います。", "こうえん に ひと が **たくさん** います。", "There are a lot of people in the park.", "N5", undefined, "サン"],
      ], []),
    ],
  },
  {
    n: 8,
    note: "Nature · rivers, fields and sky",
    items: [
      bk("川", "N5", "river", "", "かわ", [
        ["この**川**はとてもきれいです。", "この **かわ** は とても きれい です。", "This river is very clean.", "N5", undefined, "かわ"],
      ], []),
      bk("田", "N5", "rice field", "デン", "た", [
        ["**田んぼ**で米を作ります。", "**たんぼ** で こめ を つくります。", "Rice is grown in the paddies.", "N3", undefined, "た"],
        ["**田中**さんは私の先生です。", "**たなか** さん は わたし の せんせい です。", "Mr. Tanaka is my teacher.", "N5", undefined, "た"],
        ["祖母は**田舎**に住んでいます。", "そぼ は **いなか** に すんで います。", "My grandmother lives in the countryside.", "N4", undefined, "*"],
        ["窓から**水田**が見えます。", "まど から **すいでん** が みえます。", "I can see rice paddies from the window.", "N2", undefined, "デン"],
      ], []),
      bk("天", "N5", "heaven, sky", "テン", "あま", [
        ["**天気**がいいですね。", "**てんき** が いい です ね。", "Nice weather, isn't it?", "N5", undefined, "テン"],
        ["夜空に**天の川**が見えます。", "よぞら に **あまのがわ** が みえます。", "You can see the Milky Way in the night sky.", "N2", undefined, "あま"],
      ], []),
      bk("空", "N5", "sky, empty", "クウ", "そら から あ.く", [
        ["今日は**空**が青いです。", "きょう は **そら** が あおい です。", "The sky is blue today.", "N5", undefined, "そら"],
        ["**空港**まで電車で行きます。", "**くうこう** まで でんしゃ で いきます。", "I'll go to the airport by train.", "N4", undefined, "クウ"],
        ["この席は**空いて**いますか。", "この せき は **あいて** います か。", "Is this seat free?", "N4", undefined, "あ.く"],
        ["この箱は**空っぽ**です。", "この はこ は **からっぽ** です。", "This box is empty.", "N3", undefined, "から"],
      ], []),
      bk("雨", "N5", "rain", "", "あめ あま", [
        ["**雨**が降っています。", "**あめ** が ふって います。", "It's raining.", "N5", undefined, "あめ"],
        ["駅で**雨宿り**をしました。", "えき で **あまやどり** を しました。", "I waited out the rain at the station.", "N2", undefined, "あま"],
      ], []),
    ],
  },
  {
    n: 9,
    note: "Nature · flowers, energy and animals",
    items: [
      bk("花", "N5", "flower", "カ", "はな", [
        ["公園に**花**がたくさん咲いています。", "こうえん に **はな** が たくさん さいて います。", "Many flowers are blooming in the park.", "N5", undefined, "はな"],
        ["テーブルに**花瓶**があります。", "テーブル に **かびん** が あります。", "There's a vase on the table.", "N4", undefined, "カ"],
      ], []),
      bk("気", "N5", "spirit, air", "キ", "", [
        ["**お元気**ですか。", "**おげんき** です か。", "How are you?", "N5", undefined, "キ"],
        ["**天気**がいい日は散歩します。", "**てんき** が いい ひ は さんぽ します。", "I take a walk on days with nice weather.", "N5", undefined, "キ"],
        ["**病気**で学校を休みました。", "**びょうき** で がっこう を やすみました。", "I missed school because I was sick.", "N5", undefined, "キ"],
      ], []),
      bk("電", "N5", "electricity", "デン", "", [
        ["**電車**で会社へ行きます。", "**でんしゃ** で かいしゃ へ いきます。", "I go to work by train.", "N5", undefined, "デン"],
        ["母に**電話**をかけました。", "はは に **でんわ** を かけました。", "I called my mother.", "N5", undefined, "デン"],
        ["部屋の**電気**を消してください。", "へや の **でんき** を けして ください。", "Please turn off the light in the room.", "N5", undefined, "デン"],
      ], []),
      bk("魚", "N5", "fish", "ギョ", "さかな", [
        ["私は**魚**が好きです。", "わたし は **さかな** が すき です。", "I like fish.", "N5", undefined, "さかな"],
        ["家に**金魚**がいます。", "いえ に **きんぎょ** が います。", "I have goldfish at home.", "N3", undefined, "ギョ"],
      ], []),
      bk("犬", "N5", "dog", "", "いぬ", [
        ["**犬**と散歩します。", "**いぬ** と さんぽ します。", "I take a walk with my dog.", "N5", undefined, "いぬ"],
      ], []),
    ],
  },
  {
    n: 10,
    note: "People · men, women and parents",
    items: [
      bk("人", "N5", "person", "ジン ニン", "ひと", [
        ["あの**人**は誰ですか。", "あの **ひと** は だれ です か。", "Who is that person?", "N5", undefined, "ひと"],
        ["私は**日本人**です。", "わたし は **にほんじん** です。", "I am Japanese.", "N5", undefined, "ジン"],
        ["教室に学生が**三人**います。", "きょうしつ に がくせい が **さんにん** います。", "There are three students in the classroom.", "N5", undefined, "ニン"],
        ["この町には**外国人**が多いです。", "この まち に は **がいこくじん** が おおい です。", "There are many foreigners in this town.", "N5", undefined, "ジン"],
        ["**大人**のチケットは千円です。", "**おとな** の チケット は せんえん です。", "An adult ticket is 1,000 yen.", "N5", undefined, "*"],
      ], []),
      bk("子", "N5", "child", "シ ス", "こ", [
        ["**子供**が公園で遊んでいます。", "**こども** が こうえん で あそんで います。", "Children are playing in the park.", "N5", undefined, "こ"],
        ["**女の子**が歌っています。", "**おんなのこ** が うたって います。", "A girl is singing.", "N5", undefined, "こ"],
        ["**男の子**が走っています。", "**おとこのこ** が はしって います。", "A boy is running.", "N5", undefined, "こ"],
        ["この**帽子**は高いです。", "この **ぼうし** は たかい です。", "This hat is expensive.", "N5", undefined, "シ"],
        ["**椅子**に座ってください。", "**いす** に すわって ください。", "Please sit on the chair.", "N5", undefined, "ス"],
        ["**お菓子**を買いました。", "**おかし** を かいました。", "I bought some snacks.", "N5", undefined, "シ"],
      ], []),
      bk("女", "N5", "woman", "ジョ", "おんな", [
        ["あの**女の人**は私の先生です。", "あの **おんなのひと** は わたし の せんせい です。", "That woman is my teacher.", "N5", undefined, "おんな"],
        ["あの**女性**は医者です。", "あの **じょせい** は いしゃ です。", "That woman is a doctor.", "N4", undefined, "ジョ"],
      ], []),
      bk("男", "N5", "man", "ダン ナン", "おとこ", [
        ["あの**男の人**は誰ですか。", "あの **おとこのひと** は だれ です か。", "Who is that man?", "N5", undefined, "おとこ"],
        ["あの**男性**は私の先生です。", "あの **だんせい** は わたし の せんせい です。", "That man is my teacher.", "N4", undefined, "ダン"],
        ["**長男**は大学生です。", "**ちょうなん** は だいがくせい です。", "My eldest son is a university student.", "N3", undefined, "ナン"],
      ], []),
      bk("父", "N5", "father", "フ", "ちち", [
        ["**父**は毎朝コーヒーを飲みます。", "**ちち** は まいあさ コーヒー を のみます。", "My father drinks coffee every morning.", "N5", undefined, "ちち"],
        ["**お父さん**はお元気ですか。", "**おとうさん** は おげんき です か。", "How is your father?", "N5", undefined, "*"],
        ["**祖父**は元気です。", "**そふ** は げんき です。", "My grandfather is well.", "N4", undefined, "フ"],
      ], []),
    ],
  },
  {
    n: 11,
    note: "People · family, friends and names",
    items: [
      bk("母", "N5", "mother", "ボ", "はは", [
        ["**母**は料理が上手です。", "**はは** は りょうり が じょうず です。", "My mother is good at cooking.", "N5", undefined, "はは"],
        ["**祖母**は八十歳です。", "**そぼ** は はちじゅっさい です。", "My grandmother is eighty.", "N4", undefined, "ボ"],
      ], []),
      bk("友", "N5", "friend", "ユウ", "とも", [
        ["**友達**と映画を見ました。", "**ともだち** と えいが を みました。", "I watched a movie with a friend.", "N5", undefined, "とも"],
        ["彼は私の**親友**です。", "かれ は わたし の **しんゆう** です。", "He is my best friend.", "N3", undefined, "ユウ"],
      ], []),
      bk("私", "N5", "I, private", "シ", "わたし わたくし", [
        ["**私**は学生です。", "**わたし** は がくせい です。", "I am a student.", "N5", undefined, "わたし"],
        ["**私たち**は同じクラスです。", "**わたしたち** は おなじ クラス です。", "We are in the same class.", "N5", undefined, "わたし"],
        ["この大学は**私立**です。", "この だいがく は **しりつ** です。", "This university is private.", "N3", undefined, "シ"],
        ["**私**は田中と申します。", "**わたくし** は たなか と もうします。", "My name is Tanaka. (formal)", "N4", undefined, "わたくし"],
      ], []),
      bk("名", "N5", "name", "メイ ミョウ", "な", [
        ["**お名前**は何ですか。", "**おなまえ** は なん です か。", "What is your name?", "N5", undefined, "な"],
        ["京都は**有名**な町です。", "きょうと は **ゆうめい** な まち です。", "Kyoto is a famous city.", "N5", undefined, "メイ"],
        ["私の**名字**は山田です。", "わたし の **みょうじ** は やまだ です。", "My family name is Yamada.", "N3", undefined, "ミョウ"],
      ], []),
      bk("口", "N5", "mouth", "コウ", "くち", [
        ["**口**を大きく開けてください。", "**くち** を おおきく あけて ください。", "Please open your mouth wide.", "N5", undefined, "くち"],
        ["駅の**入り口**で待っています。", "えき の **いりぐち** で まって います。", "I'll wait at the station entrance.", "N5", undefined, "くち"],
        ["**出口**はあちらです。", "**でぐち** は あちら です。", "The exit is over there.", "N5", undefined, "くち"],
        ["日本の**人口**は多いです。", "にほん の **じんこう** は おおい です。", "Japan has a large population.", "N4", undefined, "コウ"],
      ], []),
    ],
  },
  {
    n: 12,
    note: "People · body and strength",
    items: [
      bk("目", "N5", "eye", "モク", "め", [
        ["私の**目**は茶色です。", "わたし の **め** は ちゃいろ です。", "My eyes are brown.", "N5", undefined, "め"],
        ["旅行の**目的**は何ですか。", "りょこう の **もくてき** は なん です か。", "What is the purpose of your trip?", "N3", undefined, "モク"],
      ], []),
      bk("耳", "N5", "ear", "ジ", "みみ", [
        ["うさぎの**耳**は長いです。", "うさぎ の **みみ** は ながい です。", "Rabbits have long ears.", "N5", undefined, "みみ"],
        ["**耳鼻科**は二階です。", "**じびか** は にかい です。", "The ENT clinic is on the second floor.", "N1", undefined, "ジ"],
      ], []),
      bk("手", "N5", "hand", "シュ", "て", [
        ["ご飯の前に**手**を洗います。", "ごはん の まえ に **て** を あらいます。", "I wash my hands before meals.", "N5", undefined, "て"],
        ["友達に**手紙**を書きました。", "ともだち に **てがみ** を かきました。", "I wrote a letter to a friend.", "N5", undefined, "て"],
        ["郵便局で**切手**を買いました。", "ゆうびんきょく で **きって** を かいました。", "I bought stamps at the post office.", "N5", undefined, "て"],
        ["私は料理が**下手**です。", "わたし は りょうり が **へた** です。", "I'm bad at cooking.", "N5", undefined, "*"],
        ["兄は**歌手**です。", "あに は **かしゅ** です。", "My older brother is a singer.", "N4", undefined, "シュ"],
      ], []),
      bk("足", "N5", "foot, leg", "ソク", "あし た.りる た.す", [
        ["**足**が痛いです。", "**あし** が いたい です。", "My feet hurt.", "N5", undefined, "あし"],
        ["お金が**足りません**。", "おかね が **たりません**。", "I don't have enough money.", "N4", undefined, "た.りる"],
        ["お茶に砂糖を**足します**。", "おちゃ に さとう を **たします**。", "I add sugar to my tea.", "N4", undefined, "た.す"],
        ["明日は**遠足**です。", "あした は **えんそく** です。", "Tomorrow is our school excursion.", "N3", undefined, "ソク"],
      ], []),
      bk("力", "N5", "power", "リョク", "ちから", [
        ["父は**力**が強いです。", "ちち は **ちから** が つよい です。", "My father is strong.", "N4", undefined, "ちから"],
        ["毎日**努力**しています。", "まいにち **どりょく** して います。", "I make an effort every day.", "N3", undefined, "リョク"],
      ], []),
    ],
  },
];
