// N5 kanji book — groups 13–26. Grouped by theme.
// bk(kanji, level, meaning, on'yomi, kun'yomi, [[ja, kana, en, word level]], [[word, reading, meaning, level, example, exampleEn]])
import { bk, type BookGroup } from "../../builders.ts";

export const GROUPS: BookGroup[] = [
  {
    n: 13,
    note: "Position · up, down, middle, left and right",
    items: [
      bk("上", "N5", "up, above", "ジョウ", "うえ あ.がる あ.げる", [
        ["机の**上**に本があります。", "つくえ の **うえ** に ほん が あります。", "There is a book on the desk.", "N5", undefined, "うえ"],
        ["山田さんは歌が**上手**です。", "やまだ さん は うた が **じょうず** です。", "Mr. Yamada is good at singing.", "N5", undefined, "ジョウ"],
        ["階段を**上がって**ください。", "かいだん を **あがって** ください。", "Please go up the stairs.", "N4", undefined, "あ.がる"],
        ["手を**上げて**ください。", "て を **あげて** ください。", "Please raise your hand.", "N4", undefined, "あ.げる"],
      ], []),
      bk("下", "N5", "down, below", "カ ゲ", "した さ.がる くだ.さる", [
        ["椅子の**下**に猫がいます。", "いす の **した** に ねこ が います。", "There is a cat under the chair.", "N5", undefined, "した"],
        ["お水を**下さい**。", "おみず を **ください**。", "Some water, please.", "N5", undefined, "くだ.さる"],
        ["**地下鉄**で会社に行きます。", "**ちかてつ** で かいしゃ に いきます。", "I go to work by subway.", "N5", undefined, "カ"],
        ["新しい**靴下**を買いました。", "あたらしい **くつした** を かいました。", "I bought new socks.", "N5", undefined, "した"],
        ["私は歌が**下手**です。", "わたし は うた が **へた** です。", "I'm bad at singing.", "N5", undefined, "*"],
        ["熱が**下がりました**。", "ねつ が **さがりました**。", "My fever went down.", "N4", undefined, "さ.がる"],
        ["次の駅で**下車**します。", "つぎ の えき で **げしゃ** します。", "I will get off at the next station.", "N3", undefined, "ゲ"],
      ], []),
      bk("中", "N5", "middle, inside", "チュウ", "なか", [
        ["かばんの**中**に財布があります。", "かばん の **なか** に さいふ が あります。", "My wallet is in the bag.", "N5", undefined, "なか"],
        ["私は**中国**から来ました。", "わたし は **ちゅうごく** から きました。", "I came from China.", "N5", undefined, "チュウ"],
      ], []),
      bk("左", "N5", "left", "サ", "ひだり", [
        ["次の角を**左**に曲がってください。", "つぎ の かど を **ひだり** に まがって ください。", "Please turn left at the next corner.", "N5", undefined, "ひだり"],
        ["**左手**で字を書きます。", "**ひだりて** で じ を かきます。", "I write with my left hand.", "N5", undefined, "ひだり"],
        ["**左右**をよく見てください。", "**さゆう** を よく みて ください。", "Please look carefully left and right.", "N3", undefined, "サ"],
      ], []),
      bk("右", "N5", "right", "ウ ユウ", "みぎ", [
        ["**右**を見てください。", "**みぎ** を みて ください。", "Please look to the right.", "N5", undefined, "みぎ"],
        ["**右手**を上げてください。", "**みぎて** を あげて ください。", "Please raise your right hand.", "N5", undefined, "みぎ"],
        ["次の信号で**右折**します。", "つぎ の しんごう で **うせつ** します。", "I'll turn right at the next traffic light.", "N3", undefined, "ウ"],
        ["**左右**を見てから渡ります。", "**さゆう** を みて から わたります。", "I look left and right, then cross.", "N3", undefined, "ユウ"],
      ], []),
    ],
  },
  {
    n: 14,
    note: "Position · outside, inside, front and back",
    items: [
      bk("外", "N5", "outside", "ガイ ゲ", "そと はず.す", [
        ["**外**は寒いです。", "**そと** は さむい です。", "It's cold outside.", "N5", undefined, "そと"],
        ["夏休みに**外国**へ行きたいです。", "なつやすみ に **がいこく** へ いきたい です。", "I want to go abroad during the summer holidays.", "N5", undefined, "ガイ"],
        ["この町には**外国人**が多いです。", "この まち に は **がいこくじん** が おおい です。", "There are many foreigners in this town.", "N5", undefined, "ガイ"],
        ["**外科**の先生に会いました。", "**げか** の せんせい に あいました。", "I saw a surgeon.", "N3", undefined, "ゲ"],
        ["眼鏡を**外して**ください。", "めがね を **はずして** ください。", "Please take off your glasses.", "N3", undefined, "はず.す"],
      ], []),
      bk("内", "N5", "inside", "ナイ", "うち", [
        ["私が町を**案内**します。", "わたし が まち を **あんない** します。", "I'll show you around the town.", "N4", undefined, "ナイ"],
        ["箱の**内側**は赤いです。", "はこ の **うちがわ** は あかい です。", "The inside of the box is red.", "N3", undefined, "うち"],
      ], []),
      bk("前", "N5", "front, before", "ゼン", "まえ", [
        ["駅の**前**で待っています。", "えき の **まえ** で まって います。", "I'm waiting in front of the station.", "N5", undefined, "まえ"],
        ["お**名前**は何ですか。", "お**なまえ** は なん です か。", "What is your name?", "N5", undefined, "まえ"],
        ["**午前**九時に会社に着きます。", "**ごぜん** くじ に かいしゃ に つきます。", "I arrive at the office at 9 a.m.", "N5", undefined, "ゼン"],
      ], []),
      bk("後", "N5", "behind, after", "ゴ コウ", "うし.ろ あと のち", [
        ["私の**後ろ**に座ってください。", "わたし の **うしろ** に すわって ください。", "Please sit behind me.", "N5", undefined, "うし.ろ"],
        ["**午後**は暇です。", "**ごご** は ひま です。", "I'm free in the afternoon.", "N5", undefined, "ゴ"],
        ["授業の**後**で図書館へ行きます。", "じゅぎょう の **あと** で としょかん へ いきます。", "I'll go to the library after class.", "N5", undefined, "あと"],
        ["**後輩**と昼ご飯を食べました。", "**こうはい** と ひるごはん を たべました。", "I ate lunch with my junior.", "N3", undefined, "コウ"],
        ["**後ほど**電話します。", "**のちほど** でんわ します。", "I'll call you later.", "N3", undefined, "のち"],
      ], []),
    ],
  },
  {
    n: 15,
    note: "Position · the four compass directions",
    items: [
      bk("東", "N5", "east", "トウ", "ひがし", [
        ["太陽は**東**から出ます。", "たいよう は **ひがし** から でます。", "The sun rises in the east.", "N5", undefined, "ひがし"],
        ["来月**東京**へ行きます。", "らいげつ **とうきょう** へ いきます。", "I'm going to Tokyo next month.", "N5", undefined, "トウ"],
      ], []),
      bk("西", "N5", "west", "セイ サイ", "にし", [
        ["家の**西**に公園があります。", "いえ の **にし** に こうえん が あります。", "There is a park to the west of my house.", "N5", undefined, "にし"],
        ["**西洋**の料理が好きです。", "**せいよう** の りょうり が すき です。", "I like Western food.", "N3", undefined, "セイ"],
        ["私は**関西**の出身です。", "わたし は **かんさい** の しゅっしん です。", "I'm from the Kansai region.", "N3", undefined, "サイ"],
      ], []),
      bk("南", "N5", "south", "ナン", "みなみ", [
        ["冬に鳥は**南**へ飛んでいきます。", "ふゆ に とり は **みなみ** へ とんで いきます。", "Birds fly south in winter.", "N5", undefined, "みなみ"],
        ["夏休みに**南米**へ行きます。", "なつやすみ に **なんべい** へ いきます。", "I'm going to South America in the summer holidays.", "N3", undefined, "ナン"],
      ], []),
      bk("北", "N5", "north", "ホク", "きた", [
        ["私の町は東京の**北**にあります。", "わたし の まち は とうきょう の **きた** に あります。", "My town is north of Tokyo.", "N5", undefined, "きた"],
        ["冬に**北海道**へスキーに行きます。", "ふゆ に **ほっかいどう** へ スキー に いきます。", "I go skiing in Hokkaido in winter.", "N4", undefined, "ホク"],
      ], []),
    ],
  },
  {
    n: 16,
    note: "Describing · size, height, price and length",
    items: [
      bk("大", "N5", "big", "ダイ タイ", "おお.きい おお", [
        ["この**大きい**かばんは私のです。", "この **おおきい** かばん は わたし の です。", "This big bag is mine.", "N5", undefined, "おお.きい"],
        ["兄は**大学**で勉強しています。", "あに は **だいがく** で べんきょう して います。", "My older brother studies at university.", "N5", undefined, "ダイ"],
        ["私は猫が**大好き**です。", "わたし は ねこ が **だいすき** です。", "I love cats.", "N5", undefined, "ダイ"],
        ["家族は**大切**です。", "かぞく は **たいせつ** です。", "Family is important.", "N5", undefined, "タイ"],
        ["**大人**は千円です。", "**おとな** は せんえん です。", "Adults are 1,000 yen.", "N5", undefined, "*"],
        ["昨日は**大雨**でした。", "きのう は **おおあめ** でした。", "There was heavy rain yesterday.", "N4", undefined, "おお"],
      ], []),
      bk("小", "N5", "small", "ショウ", "ちい.さい こ お", [
        ["家に**小さい**犬がいます。", "いえ に **ちいさい** いぬ が います。", "I have a small dog at home.", "N5", undefined, "ちい.さい"],
        ["妹は**小学校**に通っています。", "いもうと は **しょうがっこう** に かよって います。", "My younger sister goes to elementary school.", "N4", undefined, "ショウ"],
        ["木の上に**小鳥**がいます。", "き の うえ に **ことり** が います。", "There is a little bird in the tree.", "N4", undefined, "こ"],
        ["家の近くに**小川**があります。", "いえ の ちかく に **おがわ** が あります。", "There is a stream near my house.", "N3", undefined, "お"],
      ], []),
      bk("高", "N5", "tall, expensive", "コウ", "たか.い", [
        ["このカメラはとても**高い**です。", "この カメラ は とても **たかい** です。", "This camera is very expensive.", "N5", undefined, "たか.い"],
        ["姉は**高校**の先生です。", "あね は **こうこう** の せんせい です。", "My older sister is a high school teacher.", "N4", undefined, "コウ"],
      ], []),
      bk("安", "N5", "cheap, safe", "アン", "やす.い", [
        ["この店の野菜は**安い**です。", "この みせ の やさい は **やすい** です。", "The vegetables at this shop are cheap.", "N5", undefined, "やす.い"],
        ["日本は**安全**な国です。", "にほん は **あんぜん** な くに です。", "Japan is a safe country.", "N4", undefined, "アン"],
      ], []),
      bk("長", "N5", "long, chief", "チョウ", "なが.い", [
        ["彼女は髪が**長い**です。", "かのじょ は かみ が **ながい** です。", "She has long hair.", "N5", undefined, "なが.い"],
        ["父は会社の**社長**です。", "ちち は かいしゃ の **しゃちょう** です。", "My father is the president of a company.", "N4", undefined, "チョウ"],
      ], []),
    ],
  },
  {
    n: 17,
    note: "Describing · new, old, many, few and white",
    items: [
      bk("新", "N5", "new", "シン", "あたら.しい", [
        ["**新しい**靴を買いました。", "**あたらしい** くつ を かいました。", "I bought new shoes.", "N5", undefined, "あたら.しい"],
        ["毎朝**新聞**を読みます。", "まいあさ **しんぶん** を よみます。", "I read the newspaper every morning.", "N5", undefined, "シン"],
      ], []),
      bk("古", "N5", "old", "コ", "ふる.い", [
        ["この家はとても**古い**です。", "この いえ は とても **ふるい** です。", "This house is very old.", "N5", undefined, "ふる.い"],
        ["**中古**の車を買いました。", "**ちゅうこ** の くるま を かいました。", "I bought a used car.", "N3", undefined, "コ"],
      ], []),
      bk("多", "N5", "many", "タ", "おお.い", [
        ["東京は人が**多い**です。", "とうきょう は ひと が **おおい** です。", "There are a lot of people in Tokyo.", "N5", undefined, "おお.い"],
        ["週末は**多分**雨でしょう。", "しゅうまつ は **たぶん** あめ でしょう。", "It will probably rain this weekend.", "N5", undefined, "タ"],
      ], []),
      bk("少", "N5", "few, a little", "ショウ", "すく.ない すこ.し", [
        ["砂糖を**少し**入れてください。", "さとう を **すこし** いれて ください。", "Please put in a little sugar.", "N5", undefined, "すこ.し"],
        ["この町は人が**少ない**です。", "この まち は ひと が **すくない** です。", "There are few people in this town.", "N5", undefined, "すく.ない"],
        ["**少年**が走っています。", "**しょうねん** が はしって います。", "A boy is running.", "N3", undefined, "ショウ"],
      ], []),
      bk("白", "N5", "white", "ハク", "しろ しろ.い", [
        ["**白い**シャツを着ています。", "**しろい** シャツ を きて います。", "I'm wearing a white shirt.", "N5", undefined, "しろ.い"],
        ["私は**白**が好きです。", "わたし は **しろ** が すき です。", "I like white.", "N5", undefined, "しろ"],
        ["この本はとても**面白い**です。", "この ほん は とても **おもしろい** です。", "This book is very interesting.", "N5", undefined, "しろ.い"],
        ["公園の池に**白鳥**がいます。", "こうえん の いけ に **はくちょう** が います。", "There are swans on the pond in the park.", "N2", undefined, "ハク"],
      ], []),
    ],
  },
  {
    n: 18,
    note: "Describing · red, liking, near and wide",
    items: [
      bk("赤", "N5", "red", "セキ", "あか あか.い", [
        ["**赤い**りんごを食べました。", "**あかい** りんご を たべました。", "I ate a red apple.", "N5", undefined, "あか.い"],
        ["信号が**赤**になりました。", "しんごう が **あか** に なりました。", "The traffic light turned red.", "N5", undefined, "あか"],
        ["**赤道**の近くはとても暑いです。", "**せきどう** の ちかく は とても あつい です。", "It is very hot near the equator.", "N2", undefined, "セキ"],
      ], []),
      bk("好", "N5", "like, fond of", "コウ", "す.き この.む", [
        ["私は音楽が**好き**です。", "わたし は おんがく が **すき** です。", "I like music.", "N5", undefined, "す.き"],
        ["父は甘い物を**好みます**。", "ちち は あまい もの を **このみます**。", "My father likes sweet things.", "N3", undefined, "この.む"],
        ["カレーは私の**好物**です。", "カレー は わたし の **こうぶつ** です。", "Curry is my favourite food.", "N2", undefined, "コウ"],
      ], []),
      bk("近", "N5", "near", "キン", "ちか.い", [
        ["駅はここから**近い**です。", "えき は ここ から **ちかい** です。", "The station is close to here.", "N5", undefined, "ちか.い"],
        ["家の**近く**にスーパーがあります。", "いえ の **ちかく** に スーパー が あります。", "There is a supermarket near my house.", "N5", undefined, "ちか.い"],
        ["**近所**に公園があります。", "**きんじょ** に こうえん が あります。", "There is a park in my neighbourhood.", "N4", undefined, "キン"],
      ], []),
      bk("広", "N5", "wide", "コウ", "ひろ.い", [
        ["この部屋は**広い**です。", "この へや は **ひろい** です。", "This room is spacious.", "N5", undefined, "ひろ.い"],
        ["テレビで車の**広告**を見ました。", "テレビ で くるま の **こうこく** を みました。", "I saw a car advert on TV.", "N3", undefined, "コウ"],
      ], []),
    ],
  },
  {
    n: 19,
    note: "Actions · seeing, hearing, talking, reading and writing",
    items: [
      bk("見", "N5", "see", "ケン", "み.る み.せる", [
        ["毎晩テレビを**見ます**。", "まいばん テレビ を **みます**。", "I watch TV every night.", "N5", undefined, "み.る"],
        ["写真を**見せて**ください。", "しゃしん を **みせて** ください。", "Please show me the photo.", "N4", undefined, "み.せる"],
        ["明日、町を**見物**します。", "あした、 まち を **けんぶつ** します。", "Tomorrow I'll go sightseeing in the town.", "N4", undefined, "ケン"],
      ], []),
      bk("聞", "N5", "hear, ask", "ブン", "き.く き.こえる", [
        ["毎朝ラジオを**聞きます**。", "まいあさ ラジオ を **ききます**。", "I listen to the radio every morning.", "N5", undefined, "き.く"],
        ["駅で**新聞**を買います。", "えき で **しんぶん** を かいます。", "I buy a newspaper at the station.", "N5", undefined, "ブン"],
        ["隣の部屋から音楽が**聞こえます**。", "となり の へや から おんがく が **きこえます**。", "I can hear music from the next room.", "N4", undefined, "き.こえる"],
      ], []),
      bk("話", "N5", "talk", "ワ", "はな.す はなし", [
        ["友達と電話で**話します**。", "ともだち と でんわ で **はなします**。", "I talk with my friend on the phone.", "N5", undefined, "はな.す"],
        ["母に**電話**します。", "はは に **でんわ** します。", "I'll call my mother.", "N5", undefined, "ワ"],
        ["面白い**話**を聞きました。", "おもしろい **はなし** を ききました。", "I heard an interesting story.", "N5", undefined, "はなし"],
      ], []),
      bk("読", "N5", "read", "ドク", "よ.む", [
        ["図書館で本を**読みます**。", "としょかん で ほん を **よみます**。", "I read books at the library.", "N5", undefined, "よ.む"],
        ["私の趣味は**読書**です。", "わたし の しゅみ は **どくしょ** です。", "My hobby is reading.", "N3", undefined, "ドク"],
      ], []),
      bk("書", "N5", "write", "ショ", "か.く", [
        ["ここに名前を**書いて**ください。", "ここ に なまえ を **かいて** ください。", "Please write your name here.", "N5", undefined, "か.く"],
        ["これは私の**辞書**です。", "これ は わたし の **じしょ** です。", "This is my dictionary.", "N5", undefined, "ショ"],
      ], []),
    ],
  },
  {
    n: 20,
    note: "Actions · eating, drinking, coming and going",
    items: [
      bk("食", "N5", "eat", "ショク", "た.べる", [
        ["朝ご飯にパンを**食べます**。", "あさごはん に パン を **たべます**。", "I eat bread for breakfast.", "N5", undefined, "た.べる"],
        ["好きな**食べ物**は何ですか。", "すきな **たべもの** は なん です か。", "What food do you like?", "N5", undefined, "た.べる"],
        ["**食堂**で昼ご飯を食べましょう。", "**しょくどう** で ひるごはん を たべましょう。", "Let's eat lunch in the cafeteria.", "N5", undefined, "ショク"],
      ], []),
      bk("飲", "N5", "drink", "イン", "の.む", [
        ["毎朝コーヒーを**飲みます**。", "まいあさ コーヒー を **のみます**。", "I drink coffee every morning.", "N5", undefined, "の.む"],
        ["冷たい**飲み物**をください。", "つめたい **のみもの** を ください。", "A cold drink, please.", "N5", undefined, "の.む"],
        ["駅前には**飲食店**が多いです。", "えきまえ に は **いんしょくてん** が おおい です。", "There are many restaurants in front of the station.", "N2", undefined, "イン"],
      ], []),
      bk("行", "N5", "go", "コウ ギョウ", "い.く おこな.う", [
        ["明日、学校へ**行きます**。", "あした、 がっこう へ **いきます**。", "I'll go to school tomorrow.", "N5", undefined, "い.く"],
        ["夏休みに**旅行**をしました。", "なつやすみ に **りょこう** を しました。", "I went on a trip during the summer holidays.", "N5", undefined, "コウ"],
        ["**飛行機**で沖縄へ行きます。", "**ひこうき** で おきなわ へ いきます。", "I'll go to Okinawa by plane.", "N5", undefined, "コウ"],
        ["来週、学校の**行事**があります。", "らいしゅう、 がっこう の **ぎょうじ** が あります。", "There is a school event next week.", "N3", undefined, "ギョウ"],
        ["明日テストを**行います**。", "あした テスト を **おこないます**。", "We will hold a test tomorrow.", "N3", undefined, "おこな.う"],
      ], []),
      bk("来", "N5", "come", "ライ", "く.る", [
        ["友達が家に**来ました**。", "ともだち が いえ に **きました**。", "A friend came to my house.", "N5", undefined, "く.る"],
        ["**来週**テストがあります。", "**らいしゅう** テスト が あります。", "There is a test next week.", "N5", undefined, "ライ"],
        ["**来年**日本へ行きます。", "**らいねん** にほん へ いきます。", "I will go to Japan next year.", "N5", undefined, "ライ"],
      ], []),
      bk("出", "N5", "exit, go out", "シュツ", "で.る だ.す", [
        ["七時に家を**出ます**。", "しちじ に いえ を **でます**。", "I leave home at seven.", "N5", undefined, "で.る"],
        ["宿題を**出して**ください。", "しゅくだい を **だして** ください。", "Please hand in your homework.", "N5", undefined, "だ.す"],
        ["**出口**はあちらです。", "**でぐち** は あちら です。", "The exit is over there.", "N5", undefined, "で.る"],
        ["バスは九時に**出発**します。", "バス は くじ に **しゅっぱつ** します。", "The bus departs at nine.", "N4", undefined, "シュツ"],
      ], []),
    ],
  },
  {
    n: 21,
    note: "Actions · entering, buying, meeting, resting and standing",
    items: [
      bk("入", "N5", "enter", "ニュウ", "はい.る い.れる い.る", [
        ["部屋に**入って**もいいですか。", "へや に **はいって** も いい です か。", "May I come into the room?", "N5", undefined, "はい.る"],
        ["かばんに本を**入れます**。", "かばん に ほん を **いれます**。", "I put the book in my bag.", "N5", undefined, "い.れる"],
        ["**入口**は右にあります。", "**いりぐち** は みぎ に あります。", "The entrance is on the right.", "N5", undefined, "い.る"],
        ["来年、大学に**入学**します。", "らいねん、 だいがく に **にゅうがく** します。", "I will enter university next year.", "N4", undefined, "ニュウ"],
      ], []),
      bk("買", "N5", "buy", "バイ", "か.う", [
        ["スーパーで牛乳を**買いました**。", "スーパー で ぎゅうにゅう を **かいました**。", "I bought milk at the supermarket.", "N5", undefined, "か.う"],
        ["週末に母と**買い物**に行きます。", "しゅうまつ に はは と **かいもの** に いきます。", "I go shopping with my mother at the weekend.", "N5", undefined, "か.う"],
        ["この店では古い本の**売買**をしています。", "この みせ で は ふるい ほん の **ばいばい** を して います。", "This shop buys and sells old books.", "N2", undefined, "バイ"],
      ], []),
      bk("会", "N5", "meet", "カイ", "あ.う", [
        ["駅で友達に**会いました**。", "えき で ともだち に **あいました**。", "I met a friend at the station.", "N5", undefined, "あ.う"],
        ["兄は**会社**で働いています。", "あに は **かいしゃ** で はたらいて います。", "My older brother works at a company.", "N5", undefined, "カイ"],
      ], []),
      bk("休", "N5", "rest", "キュウ", "やす.む", [
        ["疲れたので少し**休みます**。", "つかれた ので すこし **やすみます**。", "I'm tired, so I'll rest a little.", "N5", undefined, "やす.む"],
        ["明日は学校が**休み**です。", "あした は がっこう が **やすみ** です。", "There is no school tomorrow.", "N5", undefined, "やす.む"],
        ["**夏休み**に海へ行きました。", "**なつやすみ** に うみ へ いきました。", "I went to the sea during the summer holidays.", "N5", undefined, "やす.む"],
        ["**休日**は家にいます。", "**きゅうじつ** は いえ に います。", "I stay home on my days off.", "N3", undefined, "キュウ"],
      ], []),
      bk("立", "N5", "stand", "リツ", "た.つ た.てる", [
        ["皆さん、**立って**ください。", "みなさん、 **たって** ください。", "Everyone, please stand up.", "N5", undefined, "た.つ"],
        ["とても**立派**な家ですね。", "とても **りっぱ** な いえ です ね。", "That's a really splendid house.", "N4", undefined, "リツ"],
        ["旅行の計画を**立てました**。", "りょこう の けいかく を **たてました**。", "I made a plan for the trip.", "N3", undefined, "た.てる"],
      ], []),
    ],
  },
  {
    n: 22,
    note: "Actions · saying, thinking, knowing and walking",
    items: [
      bk("言", "N5", "say", "ゲン ゴン", "い.う こと", [
        ["もう一度**言って**ください。", "もう いちど **いって** ください。", "Please say it once more.", "N5", undefined, "い.う"],
        ["この**言葉**の意味は何ですか。", "この **ことば** の いみ は なん です か。", "What does this word mean?", "N4", undefined, "こと"],
        ["先生に**伝言**があります。", "せんせい に **でんごん** が あります。", "There is a message for the teacher.", "N3", undefined, "ゴン"],
        ["祖母は**方言**で話します。", "そぼ は **ほうげん** で はなします。", "My grandmother speaks in dialect.", "N2", undefined, "ゲン"],
      ], []),
      bk("思", "N5", "think", "シ", "おも.う", [
        ["明日は雨だと**思います**。", "あした は あめ だ と **おもいます**。", "I think it will rain tomorrow.", "N4", undefined, "おも.う"],
        ["それは**不思議**ですね。", "それ は **ふしぎ** です ね。", "That's strange, isn't it?", "N3", undefined, "シ"],
      ], []),
      bk("知", "N5", "know", "チ", "し.る", [
        ["その人の名前を**知って**いますか。", "その ひと の なまえ を **しって** います か。", "Do you know that person's name?", "N5", undefined, "し.る"],
        ["先生は**知識**がたくさんあります。", "せんせい は **ちしき** が たくさん あります。", "The teacher has a lot of knowledge.", "N3", undefined, "チ"],
      ], []),
      bk("歩", "N5", "walk", "ホ ポ", "ある.く", [
        ["駅まで**歩きます**。", "えき まで **あるきます**。", "I walk to the station.", "N5", undefined, "ある.く"],
        ["毎朝公園を**散歩**します。", "まいあさ こうえん を **さんぽ** します。", "I take a walk in the park every morning.", "N5", undefined, "ポ"],
        ["**歩道**を歩いてください。", "**ほどう** を あるいて ください。", "Please walk on the pavement.", "N3", undefined, "ホ"],
      ], []),
    ],
  },
  {
    n: 23,
    note: "Actions · running, living, having and being born",
    items: [
      bk("走", "N5", "run", "ソウ", "はし.る", [
        ["駅まで**走りました**。", "えき まで **はしりました**。", "I ran to the station.", "N5", undefined, "はし.る"],
        ["公園で弟と**競走**しました。", "こうえん で おとうと と **きょうそう** しました。", "I raced my younger brother in the park.", "N2", undefined, "ソウ"],
      ], []),
      bk("住", "N5", "live, reside", "ジュウ", "す.む", [
        ["東京に**住んで**います。", "とうきょう に **すんで** います。", "I live in Tokyo.", "N5", undefined, "す.む"],
        ["ここに**住所**を書いてください。", "ここ に **じゅうしょ** を かいて ください。", "Please write your address here.", "N4", undefined, "ジュウ"],
      ], []),
      bk("有", "N5", "have, exist", "ユウ", "", [
        ["この店はとても**有名**です。", "この みせ は とても **ゆうめい** です。", "This shop is very famous.", "N5", undefined, "ユウ"],
      ], []),
      bk("生", "N5", "life, birth", "セイ ショウ", "い.きる う.まれる", [
        ["田中**先生**は優しいです。", "たなか **せんせい** は やさしい です。", "Mr. Tanaka (the teacher) is kind.", "N5", undefined, "セイ"],
        ["私は大学の**学生**です。", "わたし は だいがく の **がくせい** です。", "I am a university student.", "N5", undefined, "セイ"],
        ["明日は私の**誕生日**です。", "あした は わたし の **たんじょうび** です。", "Tomorrow is my birthday.", "N5", undefined, "ショウ"],
        ["魚は水の中で**生きて**います。", "さかな は みず の なか で **いきて** います。", "Fish live in water.", "N4", undefined, "い.きる"],
        ["娘は去年**生まれました**。", "むすめ は きょねん **うまれました**。", "My daughter was born last year.", "N4", undefined, "う.まれる"],
      ], []),
    ],
  },
  {
    n: 24,
    note: "Places · school, books and language",
    items: [
      bk("学", "N5", "study", "ガク", "まな.ぶ", [
        ["私は**学生**です。", "わたし は **がくせい** です。", "I am a student.", "N5", undefined, "ガク"],
        ["**学校**は八時半に始まります。", "**がっこう** は はちじはん に はじまります。", "School starts at half past eight.", "N5", undefined, "ガク"],
        ["大学で日本語を**学んで**います。", "だいがく で にほんご を **まなんで** います。", "I'm studying Japanese at university.", "N3", undefined, "まな.ぶ"],
      ], []),
      bk("校", "N5", "school", "コウ", "", [
        ["毎日**学校**へ行きます。", "まいにち **がっこう** へ いきます。", "I go to school every day.", "N5", undefined, "コウ"],
      ], []),
      bk("本", "N5", "book, origin", "ホン", "", [
        ["図書館で**本**を借りました。", "としょかん で **ほん** を かりました。", "I borrowed a book from the library.", "N5", undefined, "ホン"],
        ["**日本**の料理が好きです。", "**にほん** の りょうり が すき です。", "I like Japanese food.", "N5", undefined, "ホン"],
        ["それは**本当**ですか。", "それ は **ほんとう** です か。", "Is that true?", "N5", undefined, "ホン"],
      ], []),
      bk("語", "N5", "language, word", "ゴ", "かた.る", [
        ["毎日**日本語**を勉強します。", "まいにち **にほんご** を べんきょう します。", "I study Japanese every day.", "N5", undefined, "ゴ"],
        ["母は**英語**を話します。", "はは は **えいご** を はなします。", "My mother speaks English.", "N5", undefined, "ゴ"],
        ["面白い**物語**を読みました。", "おもしろい **ものがたり** を よみました。", "I read an interesting story.", "N3", undefined, "かた.る"],
      ], []),
      bk("国", "N5", "country", "コク", "くに", [
        ["あなたの**国**はどこですか。", "あなた の **くに** は どこ です か。", "Where is your country?", "N5", undefined, "くに"],
        ["いつか**外国**に住みたいです。", "いつか **がいこく** に すみたい です。", "I want to live in a foreign country someday.", "N5", undefined, "コク"],
      ], []),
    ],
  },
  {
    n: 25,
    note: "Places · home, shops, work and getting around",
    items: [
      bk("家", "N5", "house, home", "カ", "いえ うち", [
        ["私の**家**は駅から近いです。", "わたし の **いえ** は えき から ちかい です。", "My house is close to the station.", "N5", undefined, "いえ"],
        ["私の**家族**は四人です。", "わたし の **かぞく** は よにん です。", "There are four people in my family.", "N5", undefined, "カ"],
        ["**お家**はどこですか。", "**おうち** は どこ です か。", "Where is your home?", "N5", undefined, "うち"],
      ], []),
      bk("店", "N5", "shop", "テン", "みせ", [
        ["この**店**のケーキはおいしいです。", "この **みせ** の ケーキ は おいしい です。", "The cakes at this shop are delicious.", "N5", undefined, "みせ"],
        ["**喫茶店**でコーヒーを飲みます。", "**きっさてん** で コーヒー を のみます。", "I drink coffee at a café.", "N4", undefined, "テン"],
      ], []),
      bk("社", "N5", "company, shrine", "シャ ジャ", "", [
        ["**会社**まで電車で行きます。", "**かいしゃ** まで でんしゃ で いきます。", "I go to the office by train.", "N5", undefined, "シャ"],
        ["お正月に**神社**へ行きます。", "おしょうがつ に **じんじゃ** へ いきます。", "I go to a shrine at New Year.", "N4", undefined, "ジャ"],
      ], []),
      bk("駅", "N5", "station", "エキ", "", [
        ["**駅**はどこですか。", "**えき** は どこ です か。", "Where is the station?", "N5", undefined, "エキ"],
      ], []),
      bk("道", "N5", "road, way", "ドウ", "みち", [
        ["この**道**をまっすぐ行ってください。", "この **みち** を まっすぐ いって ください。", "Please go straight along this road.", "N5", undefined, "みち"],
        ["冬に**北海道**へ行きたいです。", "ふゆ に **ほっかいどう** へ いきたい です。", "I want to go to Hokkaido in winter.", "N4", undefined, "ドウ"],
      ], []),
    ],
  },
  {
    n: 26,
    note: "Places · cars, silver, paper and asking what",
    items: [
      bk("車", "N5", "car", "シャ", "くるま", [
        ["父は新しい**車**を買いました。", "ちち は あたらしい **くるま** を かいました。", "My father bought a new car.", "N5", undefined, "くるま"],
        ["**電車**で学校へ行きます。", "**でんしゃ** で がっこう へ いきます。", "I go to school by train.", "N5", undefined, "シャ"],
        ["**自転車**で公園へ行きます。", "**じてんしゃ** で こうえん へ いきます。", "I go to the park by bicycle.", "N5", undefined, "シャ"],
        ["これは日本の**自動車**です。", "これ は にほん の **じどうしゃ** です。", "This is a Japanese car.", "N5", undefined, "シャ"],
      ], []),
      bk("銀", "N5", "silver", "ギン", "", [
        ["明日、**銀行**へ行きます。", "あした、 **ぎんこう** へ いきます。", "I'll go to the bank tomorrow.", "N5", undefined, "ギン"],
      ], []),
      bk("紙", "N5", "paper", "シ", "かみ", [
        ["この**紙**に名前を書いてください。", "この **かみ** に なまえ を かいて ください。", "Please write your name on this paper.", "N5", undefined, "かみ"],
        ["友達に**手紙**を書きました。", "ともだち に **てがみ** を かきました。", "I wrote a letter to a friend.", "N5", undefined, "かみ"],
        ["この本の**表紙**は青いです。", "この ほん の **ひょうし** は あおい です。", "The cover of this book is blue.", "N2", undefined, "シ"],
      ], []),
      bk("何", "N5", "what", "", "なに なん", [
        ["朝ご飯に**何**を食べましたか。", "あさごはん に **なに** を たべました か。", "What did you eat for breakfast?", "N5", undefined, "なに"],
        ["家族は**何人**ですか。", "かぞく は **なんにん** です か。", "How many people are in your family?", "N5", undefined, "なん"],
        ["今**何時**ですか。", "いま **なんじ** です か。", "What time is it now?", "N5", undefined, "なん"],
      ], []),
    ],
  },
];
