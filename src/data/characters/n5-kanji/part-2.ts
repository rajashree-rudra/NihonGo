// N5 kanji book — groups 13–26. Grouped by theme.
// bk(kanji, level, meaning, on'yomi, kun'yomi, [[ja, kana, en, word level]], [[word, reading, meaning, level, example, exampleEn]])
import { bk, type BookGroup } from "../../builders.ts";

export const GROUPS: BookGroup[] = [
  {
    n: 13,
    note: "Position · up, down, middle, left and right",
    items: [
      bk("上", "N5", "up, above", "ジョウ", "うえ あ.がる あ.げる", [
        ["机の**上**に本があります。", "つくえ の **うえ** に ほん が あります。", "There is a book on the desk.", "N5"],
        ["階段を**上がって**ください。", "かいだん を **あがって** ください。", "Please go up the stairs.", "N4"],
      ], [
        ["上手", "じょうず", "skilful, good at", "N5", "彼女は料理が**上手**です。", "She is good at cooking.", "かのじょ は りょうり が **じょうず** です。"],
        ["以上", "いじょう", "or more, above", "N4", "二十歳**以上**の人は入れます。", "People aged twenty or over can enter.", "はたち **いじょう** の ひと は はいれます。"],
        ["屋上", "おくじょう", "rooftop", "N3", "**屋上**でお弁当を食べました。", "We ate our lunch on the rooftop.", "**おくじょう** で おべんとう を たべました。"],
      ]),
      bk("下", "N5", "down, below", "カ ゲ", "した さ.がる くだ.さる", [
        ["椅子の**下**に猫がいます。", "いす の **した** に ねこ が います。", "There is a cat under the chair.", "N5"],
        ["熱が**下がりました**。", "ねつ が **さがりました**。", "My fever went down.", "N4"],
      ], [
        ["地下鉄", "ちかてつ", "subway", "N5", "**地下鉄**で会社に行きます。", "I go to work by subway.", "**ちかてつ** で かいしゃ に いきます。"],
        ["下手", "へた", "unskilful, bad at", "N5", "私は歌が**下手**です。", "I'm bad at singing.", "わたし は うた が **へた** です。"],
        ["靴下", "くつした", "socks", "N5", "新しい**靴下**を買いました。", "I bought new socks.", "あたらしい **くつした** を かいました。"],
      ]),
      bk("中", "N5", "middle, inside", "チュウ", "なか", [
        ["かばんの**中**に財布があります。", "かばん の **なか** に さいふ が あります。", "My wallet is in the bag.", "N5"],
        ["私は**中国**から来ました。", "わたし は **ちゅうごく** から きました。", "I came from China.", "N5"],
      ], [
        ["中学校", "ちゅうがっこう", "junior high school", "N4", "弟は**中学校**に通っています。", "My younger brother goes to junior high school.", "おとうと は **ちゅうがっこう** に かよって います。"],
        ["一日中", "いちにちじゅう", "all day long", "N4", "昨日は**一日中**雨でした。", "It rained all day yesterday.", "きのう は **いちにちじゅう** あめ でした。"],
        ["途中", "とちゅう", "on the way, midway", "N3", "学校へ行く**途中**で友達に会いました。", "I met a friend on the way to school.", "がっこう へ いく **とちゅう** で ともだち に あいました。"],
      ]),
      bk("左", "N5", "left", "サ", "ひだり", [
        ["次の角を**左**に曲がってください。", "つぎ の かど を **ひだり** に まがって ください。", "Please turn left at the next corner.", "N5"],
        ["銀行は駅の**左側**にあります。", "ぎんこう は えき の **ひだりがわ** に あります。", "The bank is on the left side of the station.", "N4"],
      ], [
        ["左手", "ひだりて", "left hand", "N5", "**左手**で字を書きます。", "I write with my left hand.", "**ひだりて** で じ を かきます。"],
        ["左右", "さゆう", "left and right", "N3", "道を渡る前に**左右**を見ます。", "I look left and right before crossing the road.", "みち を わたる まえ に **さゆう** を みます。"],
      ]),
      bk("右", "N5", "right", "ウ ユウ", "みぎ", [
        ["**右**を見てください。", "**みぎ** を みて ください。", "Please look to the right.", "N5"],
        ["トイレは**右側**です。", "トイレ は **みぎがわ** です。", "The toilet is on the right.", "N4"],
      ], [
        ["右手", "みぎて", "right hand", "N5", "**右手**を上げてください。", "Please raise your right hand.", "**みぎて** を あげて ください。"],
        ["右折", "うせつ", "right turn", "N3", "ここで**右折**しないでください。", "Please don't turn right here.", "ここ で **うせつ** しないで ください。"],
      ]),
    ],
  },
  {
    n: 14,
    note: "Position · outside, inside, front and back",
    items: [
      bk("外", "N5", "outside", "ガイ ゲ", "そと ほか はず.す", [
        ["**外**は寒いです。", "**そと** は さむい です。", "It's cold outside.", "N5"],
        ["夏休みに**外国**へ行きたいです。", "なつやすみ に **がいこく** へ いきたい です。", "I want to go abroad during the summer holidays.", "N5"],
      ], [
        ["外国人", "がいこくじん", "foreigner", "N5", "この町には**外国人**が多いです。", "There are many foreigners in this town.", "この まち に は **がいこくじん** が おおい です。"],
        ["海外", "かいがい", "overseas", "N3", "兄は**海外**で働いています。", "My older brother works overseas.", "あに は **かいがい** で はたらいて います。"],
        ["外出", "がいしゅつ", "going out", "N3", "父は今**外出**しています。", "My father is out right now.", "ちち は いま **がいしゅつ** して います。"],
      ]),
      bk("内", "N5", "inside", "ナイ", "うち", [
        ["私が町を**案内**します。", "わたし が まち を **あんない** します。", "I'll show you around the town.", "N4"],
        ["三十分**以内**に来てください。", "さんじゅっぷん **いない** に きて ください。", "Please come within thirty minutes.", "N3"],
      ], [
        ["家内", "かない", "(my) wife", "N4", "**家内**は料理が上手です。", "My wife is good at cooking.", "**かない** は りょうり が じょうず です。"],
        ["国内", "こくない", "domestic, within the country", "N3", "**国内**旅行が好きです。", "I like travelling within the country.", "**こくない** りょこう が すき です。"],
        ["内側", "うちがわ", "inside, inner side", "N3", "箱の**内側**は赤いです。", "The inside of the box is red.", "はこ の **うちがわ** は あかい です。"],
      ]),
      bk("前", "N5", "front, before", "ゼン", "まえ", [
        ["駅の**前**で待っています。", "えき の **まえ** で まって います。", "I'm waiting in front of the station.", "N5"],
        ["**午前**九時に会社に着きます。", "**ごぜん** くじ に かいしゃ に つきます。", "I arrive at the office at 9 a.m.", "N5"],
      ], [
        ["名前", "なまえ", "name", "N5", "お**名前**は何ですか。", "What is your name?", "お**なまえ** は なん です か。"],
        ["以前", "いぜん", "before, formerly", "N3", "**以前**東京に住んでいました。", "I used to live in Tokyo.", "**いぜん** とうきょう に すんで いました。"],
      ]),
      bk("後", "N5", "behind, after", "ゴ コウ", "うし.ろ あと のち", [
        ["私の**後ろ**に座ってください。", "わたし の **うしろ** に すわって ください。", "Please sit behind me.", "N5"],
        ["授業の**後**で図書館へ行きます。", "じゅぎょう の **あと** で としょかん へ いきます。", "I'll go to the library after class.", "N5"],
      ], [
        ["午後", "ごご", "afternoon, p.m.", "N5", "**午後**は雨が降るでしょう。", "It will probably rain in the afternoon.", "**ごご** は あめ が ふる でしょう。"],
        ["最後", "さいご", "last, the end", "N4", "これが**最後**の問題です。", "This is the last question.", "これ が **さいご** の もんだい です。"],
        ["後輩", "こうはい", "junior (at school or work)", "N3", "**後輩**に仕事を教えます。", "I teach the work to my junior.", "**こうはい** に しごと を おしえます。"],
      ]),
    ],
  },
  {
    n: 15,
    note: "Position · the four compass directions",
    items: [
      bk("東", "N5", "east", "トウ", "ひがし", [
        ["太陽は**東**から出ます。", "たいよう は **ひがし** から でます。", "The sun rises in the east.", "N5"],
        ["来月**東京**へ行きます。", "らいげつ **とうきょう** へ いきます。", "I'm going to Tokyo next month.", "N5"],
      ], [
        ["東口", "ひがしぐち", "east exit", "N4", "駅の**東口**で会いましょう。", "Let's meet at the east exit of the station.", "えき の **ひがしぐち** で あいましょう。"],
        ["関東", "かんとう", "Kanto region", "N3", "**関東**は夏がとても暑いです。", "Summers in Kanto are very hot.", "**かんとう** は なつ が とても あつい です。"],
        ["東洋", "とうよう", "the East, the Orient", "N3", "**東洋**の文化に興味があります。", "I'm interested in Eastern culture.", "**とうよう** の ぶんか に きょうみ が あります。"],
      ]),
      bk("西", "N5", "west", "セイ サイ", "にし", [
        ["家の**西**に公園があります。", "いえ の **にし** に こうえん が あります。", "There is a park to the west of my house.", "N5"],
        ["私は**関西**の出身です。", "わたし は **かんさい** の しゅっしん です。", "I'm from the Kansai region.", "N3"],
      ], [
        ["西口", "にしぐち", "west exit", "N4", "**西口**にタクシー乗り場があります。", "There is a taxi stand at the west exit.", "**にしぐち** に タクシー のりば が あります。"],
        ["西洋", "せいよう", "the West, Western countries", "N3", "**西洋**の音楽が好きです。", "I like Western music.", "**せいよう** の おんがく が すき です。"],
      ]),
      bk("南", "N5", "south", "ナン", "みなみ", [
        ["冬に鳥は**南**へ飛んでいきます。", "ふゆ に とり は **みなみ** へ とんで いきます。", "Birds fly south in winter.", "N5"],
        ["**南口**の前で待っています。", "**みなみぐち** の まえ で まって います。", "I'm waiting in front of the south exit.", "N4"],
      ], [
        ["南米", "なんべい", "South America", "N3", "いつか**南米**を旅行したいです。", "Someday I want to travel around South America.", "いつか **なんべい** を りょこう したい です。"],
        ["東南アジア", "とうなんアジア", "Southeast Asia", "N3", "**東南アジア**の料理が好きです。", "I like Southeast Asian food.", "**とうなんアジア** の りょうり が すき です。"],
      ]),
      bk("北", "N5", "north", "ホク", "きた", [
        ["私の町は東京の**北**にあります。", "わたし の まち は とうきょう の **きた** に あります。", "My town is north of Tokyo.", "N5"],
        ["**北口**から出てください。", "**きたぐち** から でて ください。", "Please go out through the north exit.", "N4"],
      ], [
        ["北海道", "ほっかいどう", "Hokkaido", "N4", "冬に**北海道**へスキーに行きます。", "I go skiing in Hokkaido in winter.", "ふゆ に **ほっかいどう** へ スキー に いきます。"],
        ["東北", "とうほく", "Tohoku region, northeast", "N3", "祖母は**東北**に住んでいます。", "My grandmother lives in Tohoku.", "そぼ は **とうほく** に すんで います。"],
        ["南北", "なんぼく", "north and south", "N3", "日本は**南北**に長い国です。", "Japan is a country that is long from north to south.", "にほん は **なんぼく** に ながい くに です。"],
      ]),
    ],
  },
  {
    n: 16,
    note: "Describing · size, height, price and length",
    items: [
      bk("大", "N5", "big", "ダイ タイ", "おお.きい おお", [
        ["この**大きい**かばんは私のです。", "この **おおきい** かばん は わたし の です。", "This big bag is mine.", "N5"],
        ["兄は**大学**で勉強しています。", "あに は **だいがく** で べんきょう して います。", "My older brother studies at university.", "N5"],
      ], [
        ["大好き", "だいすき", "love, really like", "N5", "私は猫が**大好き**です。", "I love cats.", "わたし は ねこ が **だいすき** です。"],
        ["大切", "たいせつ", "important, precious", "N5", "家族は**大切**です。", "Family is important.", "かぞく は **たいせつ** です。"],
        ["大人", "おとな", "adult", "N5", "**大人**は千円です。", "Adults are 1,000 yen.", "**おとな** は せんえん です。"],
      ]),
      bk("小", "N5", "small", "ショウ", "ちい.さい こ お", [
        ["**小さい**犬を飼っています。", "**ちいさい** いぬ を かって います。", "I have a small dog.", "N5"],
        ["妹は**小学校**に通っています。", "いもうと は **しょうがっこう** に かよって います。", "My younger sister goes to elementary school.", "N4"],
      ], [
        ["小説", "しょうせつ", "novel", "N4", "寝る前に**小説**を読みます。", "I read a novel before going to bed.", "ねる まえ に **しょうせつ** を よみます。"],
        ["小鳥", "ことり", "little bird", "N4", "庭で**小鳥**が鳴いています。", "Little birds are singing in the garden.", "にわ で **ことり** が ないて います。"],
      ]),
      bk("高", "N5", "tall, expensive", "コウ", "たか.い", [
        ["このカメラはとても**高い**です。", "この カメラ は とても **たかい** です。", "This camera is very expensive.", "N5"],
        ["姉は**高校**の先生です。", "あね は **こうこう** の せんせい です。", "My older sister is a high school teacher.", "N4"],
      ], [
        ["高さ", "たかさ", "height", "N4", "この山の**高さ**は何メートルですか。", "How many metres high is this mountain?", "この やま の **たかさ** は なん メートル です か。"],
        ["最高", "さいこう", "the best, highest", "N3", "今日は**最高**の一日でした。", "Today was the best day.", "きょう は **さいこう** の いちにち でした。"],
        ["高速道路", "こうそくどうろ", "expressway", "N3", "**高速道路**が込んでいます。", "The expressway is crowded.", "**こうそくどうろ** が こんで います。"],
      ]),
      bk("安", "N5", "cheap, safe", "アン", "やす.い", [
        ["この店の野菜は**安い**です。", "この みせ の やさい は **やすい** です。", "The vegetables at this shop are cheap.", "N5"],
        ["日本は**安全**な国です。", "にほん は **あんぜん** な くに です。", "Japan is a safe country.", "N4"],
      ], [
        ["安心", "あんしん", "relief, peace of mind", "N4", "先生の話を聞いて**安心**しました。", "I felt relieved after hearing what the teacher said.", "せんせい の はなし を きいて **あんしん** しました。"],
        ["不安", "ふあん", "anxious, uneasy", "N3", "明日の試験が**不安**です。", "I'm anxious about tomorrow's exam.", "あした の しけん が **ふあん** です。"],
      ]),
      bk("長", "N5", "long, chief", "チョウ", "なが.い", [
        ["彼女は髪が**長い**です。", "かのじょ は かみ が **ながい** です。", "She has long hair.", "N5"],
        ["父は会社の**社長**です。", "ちち は かいしゃ の **しゃちょう** です。", "My father is the president of a company.", "N4"],
      ], [
        ["部長", "ぶちょう", "department head", "N4", "**部長**は今会議中です。", "The department head is in a meeting now.", "**ぶちょう** は いま かいぎちゅう です。"],
        ["長さ", "ながさ", "length", "N4", "このひもの**長さ**を測ってください。", "Please measure the length of this string.", "この ひも の **ながさ** を はかって ください。"],
        ["長男", "ちょうなん", "eldest son", "N3", "田中さんの**長男**は医者です。", "Mr. Tanaka's eldest son is a doctor.", "たなか さん の **ちょうなん** は いしゃ です。"],
      ]),
    ],
  },
  {
    n: 17,
    note: "Describing · new, old, many, few and white",
    items: [
      bk("新", "N5", "new", "シン", "あたら.しい", [
        ["**新しい**靴を買いました。", "**あたらしい** くつ を かいました。", "I bought new shoes.", "N5"],
        ["毎朝**新聞**を読みます。", "まいあさ **しんぶん** を よみます。", "I read the newspaper every morning.", "N5"],
      ], [
        ["新幹線", "しんかんせん", "bullet train", "N4", "**新幹線**で大阪へ行きます。", "I'll go to Osaka by bullet train.", "**しんかんせん** で おおさか へ いきます。"],
        ["新年", "しんねん", "New Year", "N3", "**新年**おめでとうございます。", "Happy New Year.", "**しんねん** おめでとう ございます。"],
        ["新鮮", "しんせん", "fresh", "N3", "この魚はとても**新鮮**です。", "This fish is very fresh.", "この さかな は とても **しんせん** です。"],
      ]),
      bk("古", "N5", "old", "コ", "ふる.い", [
        ["この建物はとても**古い**です。", "この たてもの は とても **ふるい** です。", "This building is very old.", "N5"],
        ["**中古**の車を買いました。", "**ちゅうこ** の くるま を かいました。", "I bought a used car.", "N3"],
      ], [
        ["古本", "ふるほん", "second-hand book", "N3", "駅の近くの店で**古本**を買いました。", "I bought a second-hand book at a shop near the station.", "えき の ちかく の みせ で **ふるほん** を かいました。"],
        ["古代", "こだい", "ancient times", "N2", "大学で**古代**の歴史を勉強しています。", "I'm studying ancient history at university.", "だいがく で **こだい** の れきし を べんきょう して います。"],
      ]),
      bk("多", "N5", "many", "タ", "おお.い", [
        ["東京は人が**多い**です。", "とうきょう は ひと が **おおい** です。", "There are a lot of people in Tokyo.", "N5"],
        ["週末は**多分**雨でしょう。", "しゅうまつ は **たぶん** あめ でしょう。", "It will probably rain this weekend.", "N5"],
      ], [
        ["多く", "おおく", "many, much", "N4", "**多く**の人がパーティーに来ました。", "Many people came to the party.", "**おおく** の ひと が パーティー に きました。"],
        ["多少", "たしょう", "somewhat, a little", "N3", "英語は**多少**話せます。", "I can speak English a little.", "えいご は **たしょう** はなせます。"],
      ]),
      bk("少", "N5", "few, a little", "ショウ", "すく.ない すこ.し", [
        ["砂糖を**少し**入れてください。", "さとう を **すこし** いれて ください。", "Please put in a little sugar.", "N5"],
        ["この町は人が**少ない**です。", "この まち は ひと が **すくない** です。", "There are few people in this town.", "N5"],
      ], [
        ["少々", "しょうしょう", "a little, a moment", "N3", "**少々**お待ちください。", "Please wait a moment.", "**しょうしょう** おまち ください。"],
        ["少年", "しょうねん", "boy", "N3", "**少年**がボールで遊んでいます。", "A boy is playing with a ball.", "**しょうねん** が ボール で あそんで います。"],
        ["少女", "しょうじょ", "girl", "N3", "その**少女**は歌が上手です。", "That girl is good at singing.", "その **しょうじょ** は うた が じょうず です。"],
      ]),
      bk("白", "N5", "white", "ハク", "しろ しろ.い", [
        ["**白い**シャツを着ています。", "**しろい** シャツ を きて います。", "I'm wearing a white shirt.", "N5"],
        ["この本はとても**面白い**です。", "この ほん は とても **おもしろい** です。", "This book is very interesting.", "N5"],
      ], [
        ["真っ白", "まっしろ", "pure white", "N3", "外は雪で**真っ白**です。", "Outside is all white with snow.", "そと は ゆき で **まっしろ** です。"],
        ["白鳥", "はくちょう", "swan", "N2", "湖に**白鳥**がいます。", "There are swans on the lake.", "みずうみ に **はくちょう** が います。"],
      ]),
    ],
  },
  {
    n: 18,
    note: "Describing · red, liking, near and wide",
    items: [
      bk("赤", "N5", "red", "セキ", "あか あか.い", [
        ["**赤い**りんごを食べました。", "**あかい** りんご を たべました。", "I ate a red apple.", "N5"],
        ["**赤ちゃん**が寝ています。", "**あかちゃん** が ねて います。", "The baby is sleeping.", "N4"],
      ], [
        ["赤", "あか", "red (colour)", "N5", "信号が**赤**になりました。", "The traffic light turned red.", "しんごう が **あか** に なりました。"],
        ["真っ赤", "まっか", "bright red", "N3", "恥ずかしくて顔が**真っ赤**になりました。", "I was so embarrassed my face turned bright red.", "はずかしくて かお が **まっか** に なりました。"],
      ]),
      bk("好", "N5", "like, fond of", "コウ", "す.き この.む", [
        ["私は音楽が**好き**です。", "わたし は おんがく が **すき** です。", "I like music.", "N5"],
        ["一番**好きな**食べ物は何ですか。", "いちばん **すきな** たべもの は なん です か。", "What is your favourite food?", "N5"],
      ], [
        ["好み", "このみ", "taste, preference", "N3", "この味は私の**好み**です。", "This flavour is to my taste.", "この あじ は わたし の **このみ** です。"],
        ["好物", "こうぶつ", "favourite food", "N2", "カレーは弟の**好物**です。", "Curry is my younger brother's favourite food.", "カレー は おとうと の **こうぶつ** です。"],
      ]),
      bk("近", "N5", "near", "キン", "ちか.い", [
        ["家の**近く**にスーパーがあります。", "いえ の **ちかく** に スーパー が あります。", "There is a supermarket near my house.", "N5"],
        ["駅はここから**近い**です。", "えき は ここ から **ちかい** です。", "The station is close to here.", "N5"],
      ], [
        ["最近", "さいきん", "recently, lately", "N4", "**最近**とても忙しいです。", "I've been very busy lately.", "**さいきん** とても いそがしい です。"],
        ["近所", "きんじょ", "neighbourhood", "N4", "**近所**の人はみんな親切です。", "The people in my neighbourhood are all kind.", "**きんじょ** の ひと は みんな しんせつ です。"],
      ]),
      bk("広", "N5", "wide", "コウ", "ひろ.い", [
        ["この部屋は**広い**です。", "この へや は **ひろい** です。", "This room is spacious.", "N5"],
        ["テレビで新しい車の**広告**を見ました。", "テレビ で あたらしい くるま の **こうこく** を みました。", "I saw an advert for a new car on TV.", "N3"],
      ], [
        ["広さ", "ひろさ", "size, area", "N4", "この部屋の**広さ**はどのくらいですか。", "How big is this room?", "この へや の **ひろさ** は どのくらい です か。"],
        ["広場", "ひろば", "plaza, open space", "N3", "駅前の**広場**でお祭りがあります。", "There is a festival in the square in front of the station.", "えきまえ の **ひろば** で おまつり が あります。"],
      ]),
    ],
  },
  {
    n: 19,
    note: "Actions · seeing, hearing, talking, reading and writing",
    items: [
      bk("見", "N5", "see", "ケン", "み.る み.せる", [
        ["毎晩テレビを**見ます**。", "まいばん テレビ を **みます**。", "I watch TV every night.", "N5"],
        ["写真を**見せて**ください。", "しゃしん を **みせて** ください。", "Please show me the photo.", "N4"],
      ], [
        ["花見", "はなみ", "cherry-blossom viewing", "N4", "公園で**花見**をしました。", "We had a cherry-blossom viewing in the park.", "こうえん で **はなみ** を しました。"],
        ["意見", "いけん", "opinion", "N4", "あなたの**意見**を聞かせてください。", "Please tell me your opinion.", "あなた の **いけん** を きかせて ください。"],
        ["見物", "けんぶつ", "sightseeing", "N4", "京都でお寺を**見物**しました。", "I went sightseeing at temples in Kyoto.", "きょうと で おてら を **けんぶつ** しました。"],
      ]),
      bk("聞", "N5", "hear, ask", "ブン モン", "き.く き.こえる", [
        ["毎朝ラジオを**聞きます**。", "まいあさ ラジオ を **ききます**。", "I listen to the radio every morning.", "N5"],
        ["隣の部屋から音楽が**聞こえます**。", "となり の へや から おんがく が **きこえます**。", "I can hear music from the next room.", "N4"],
      ], [
        ["新聞", "しんぶん", "newspaper", "N5", "駅で**新聞**を買いました。", "I bought a newspaper at the station.", "えき で **しんぶん** を かいました。"],
        ["聞き取り", "ききとり", "listening comprehension", "N3", "**聞き取り**のテストは難しかったです。", "The listening test was difficult.", "**ききとり** の テスト は むずかしかった です。"],
      ]),
      bk("話", "N5", "talk", "ワ", "はな.す はなし", [
        ["友達と電話で**話します**。", "ともだち と でんわ で **はなします**。", "I talk with my friend on the phone.", "N5"],
        ["面白い**話**を聞きました。", "おもしろい **はなし** を ききました。", "I heard an interesting story.", "N5"],
      ], [
        ["電話", "でんわ", "telephone", "N5", "後で**電話**します。", "I'll call you later.", "あとで **でんわ** します。"],
        ["会話", "かいわ", "conversation", "N4", "日本語の**会話**を練習します。", "I practise Japanese conversation.", "にほんご の **かいわ** を れんしゅう します。"],
        ["世話", "せわ", "care, looking after", "N4", "毎日犬の**世話**をしています。", "I look after the dog every day.", "まいにち いぬ の **せわ** を して います。"],
      ]),
      bk("読", "N5", "read", "ドク", "よ.む", [
        ["図書館で本を**読みます**。", "としょかん で ほん を **よみます**。", "I read books at the library.", "N5"],
        ["私の趣味は**読書**です。", "わたし の しゅみ は **どくしょ** です。", "My hobby is reading.", "N3"],
      ], [
        ["読み方", "よみかた", "way of reading", "N4", "この漢字の**読み方**を教えてください。", "Please tell me how to read this kanji.", "この かんじ の **よみかた** を おしえて ください。"],
        ["読者", "どくしゃ", "reader", "N3", "この雑誌は**読者**が多いです。", "This magazine has many readers.", "この ざっし は **どくしゃ** が おおい です。"],
      ]),
      bk("書", "N5", "write", "ショ", "か.く", [
        ["ここに名前を**書いて**ください。", "ここ に なまえ を **かいて** ください。", "Please write your name here.", "N5"],
        ["**図書館**で勉強します。", "**としょかん** で べんきょう します。", "I study at the library.", "N4"],
      ], [
        ["辞書", "じしょ", "dictionary", "N5", "**辞書**で言葉を調べます。", "I look up words in the dictionary.", "**じしょ** で ことば を しらべます。"],
        ["教科書", "きょうかしょ", "textbook", "N3", "**教科書**の十ページを開いてください。", "Please open your textbook to page ten.", "**きょうかしょ** の じゅっページ を ひらいて ください。"],
        ["書類", "しょるい", "document, papers", "N3", "この**書類**にサインしてください。", "Please sign this document.", "この **しょるい** に サイン して ください。"],
      ]),
    ],
  },
  {
    n: 20,
    note: "Actions · eating, drinking, coming and going",
    items: [
      bk("食", "N5", "eat", "ショク", "た.べる", [
        ["朝ご飯にパンを**食べます**。", "あさごはん に パン を **たべます**。", "I eat bread for breakfast.", "N5"],
        ["**食堂**で昼ご飯を食べましょう。", "**しょくどう** で ひるごはん を たべましょう。", "Let's eat lunch in the cafeteria.", "N5"],
      ], [
        ["食べ物", "たべもの", "food", "N5", "好きな**食べ物**は何ですか。", "What food do you like?", "すきな **たべもの** は なん です か。"],
        ["食事", "しょくじ", "meal", "N4", "週末に家族と**食事**をしました。", "I had a meal with my family at the weekend.", "しゅうまつ に かぞく と **しょくじ** を しました。"],
        ["夕食", "ゆうしょく", "dinner, evening meal", "N4", "**夕食**は七時です。", "Dinner is at seven.", "**ゆうしょく** は しちじ です。"],
      ]),
      bk("飲", "N5", "drink", "イン", "の.む", [
        ["毎朝コーヒーを**飲みます**。", "まいあさ コーヒー を **のみます**。", "I drink coffee every morning.", "N5"],
        ["冷たい**飲み物**をください。", "つめたい **のみもの** を ください。", "A cold drink, please.", "N5"],
      ], [
        ["飲み会", "のみかい", "drinking party", "N3", "金曜日に会社の**飲み会**があります。", "There is a company drinking party on Friday.", "きんようび に かいしゃ の **のみかい** が あります。"],
        ["飲食店", "いんしょくてん", "restaurant, eatery", "N2", "駅前には**飲食店**が多いです。", "There are many restaurants in front of the station.", "えきまえ に は **いんしょくてん** が おおい です。"],
      ]),
      bk("行", "N5", "go", "コウ ギョウ", "い.く おこな.う", [
        ["明日、学校へ**行きます**。", "あした、 がっこう へ **いきます**。", "I'll go to school tomorrow.", "N5"],
        ["夏休みに**旅行**をしました。", "なつやすみ に **りょこう** を しました。", "I went on a trip during the summer holidays.", "N5"],
      ], [
        ["飛行機", "ひこうき", "aeroplane", "N5", "**飛行機**で沖縄へ行きます。", "I'll go to Okinawa by plane.", "**ひこうき** で おきなわ へ いきます。"],
        ["急行", "きゅうこう", "express (train)", "N4", "**急行**は次の駅に止まりません。", "The express doesn't stop at the next station.", "**きゅうこう** は つぎ の えき に とまりません。"],
        ["行う", "おこなう", "to carry out, hold", "N3", "明日テストを**行います**。", "We will hold a test tomorrow.", "あした テスト を **おこないます**。"],
      ]),
      bk("来", "N5", "come", "ライ", "く.る", [
        ["友達が家に**来ました**。", "ともだち が いえ に **きました**。", "A friend came to my house.", "N5"],
        ["**来週**テストがあります。", "**らいしゅう** テスト が あります。", "There is a test next week.", "N5"],
      ], [
        ["来年", "らいねん", "next year", "N5", "**来年**日本へ留学します。", "I will study abroad in Japan next year.", "**らいねん** にほん へ りゅうがく します。"],
        ["将来", "しょうらい", "future", "N4", "**将来**医者になりたいです。", "I want to become a doctor in the future.", "**しょうらい** いしゃ に なりたい です。"],
      ]),
      bk("出", "N5", "exit, go out", "シュツ", "で.る だ.す", [
        ["七時に家を**出ます**。", "しちじ に いえ を **でます**。", "I leave home at seven.", "N5"],
        ["宿題を**出して**ください。", "しゅくだい を **だして** ください。", "Please hand in your homework.", "N5"],
      ], [
        ["出口", "でぐち", "exit", "N5", "**出口**はあちらです。", "The exit is over there.", "**でぐち** は あちら です。"],
        ["出発", "しゅっぱつ", "departure", "N4", "バスは九時に**出発**します。", "The bus departs at nine.", "バス は くじ に **しゅっぱつ** します。"],
        ["思い出", "おもいで", "memory", "N3", "旅行はいい**思い出**になりました。", "The trip became a good memory.", "りょこう は いい **おもいで** に なりました。"],
      ]),
    ],
  },
  {
    n: 21,
    note: "Actions · entering, buying, meeting, resting and standing",
    items: [
      bk("入", "N5", "enter", "ニュウ", "はい.る い.れる", [
        ["部屋に**入って**もいいですか。", "へや に **はいって** も いい です か。", "May I come into the room?", "N5"],
        ["かばんに本を**入れます**。", "かばん に ほん を **いれます**。", "I put the book in my bag.", "N5"],
      ], [
        ["入口", "いりぐち", "entrance", "N5", "**入口**は右にあります。", "The entrance is on the right.", "**いりぐち** は みぎ に あります。"],
        ["入学", "にゅうがく", "entering a school", "N4", "弟は四月に小学校に**入学**します。", "My younger brother starts elementary school in April.", "おとうと は しがつ に しょうがっこう に **にゅうがく** します。"],
        ["入院", "にゅういん", "hospitalisation", "N4", "祖父は先週**入院**しました。", "My grandfather went into hospital last week.", "そふ は せんしゅう **にゅういん** しました。"],
      ]),
      bk("買", "N5", "buy", "バイ", "か.う", [
        ["スーパーで牛乳を**買いました**。", "スーパー で ぎゅうにゅう を **かいました**。", "I bought milk at the supermarket.", "N5"],
        ["この本はどこで**買えます**か。", "この ほん は どこ で **かえます** か。", "Where can I buy this book?", "N4"],
      ], [
        ["買い物", "かいもの", "shopping", "N5", "週末に母と**買い物**に行きます。", "I go shopping with my mother at the weekend.", "しゅうまつ に はは と **かいもの** に いきます。"],
        ["売買", "ばいばい", "buying and selling", "N2", "インターネットで車の**売買**ができます。", "You can buy and sell cars on the internet.", "インターネット で くるま の **ばいばい** が できます。"],
      ]),
      bk("会", "N5", "meet", "カイ エ", "あ.う", [
        ["駅で友達に**会いました**。", "えき で ともだち に **あいました**。", "I met a friend at the station.", "N5"],
        ["兄は**会社**で働いています。", "あに は **かいしゃ** で はたらいて います。", "My older brother works at a company.", "N5"],
      ], [
        ["会議", "かいぎ", "meeting, conference", "N4", "午後三時から**会議**があります。", "There is a meeting from 3 p.m.", "ごご さんじ から **かいぎ** が あります。"],
        ["教会", "きょうかい", "church", "N4", "日曜日に**教会**へ行きます。", "I go to church on Sundays.", "にちようび に **きょうかい** へ いきます。"],
      ]),
      bk("休", "N5", "rest", "キュウ", "やす.む", [
        ["疲れたので少し**休みます**。", "つかれた ので すこし **やすみます**。", "I'm tired, so I'll rest a little.", "N5"],
        ["明日は学校が**休み**です。", "あした は がっこう が **やすみ** です。", "There is no school tomorrow.", "N5"],
      ], [
        ["夏休み", "なつやすみ", "summer holidays", "N5", "**夏休み**に海へ行きました。", "I went to the sea during the summer holidays.", "**なつやすみ** に うみ へ いきました。"],
        ["休日", "きゅうじつ", "holiday, day off", "N3", "**休日**は家でゆっくりします。", "On my days off I relax at home.", "**きゅうじつ** は いえ で ゆっくり します。"],
        ["休憩", "きゅうけい", "break, rest", "N3", "十分**休憩**しましょう。", "Let's take a ten-minute break.", "じゅっぷん **きゅうけい** しましょう。"],
      ]),
      bk("立", "N5", "stand", "リツ リュウ", "た.つ た.てる", [
        ["皆さん、**立って**ください。", "みなさん、 **たって** ください。", "Everyone, please stand up.", "N5"],
        ["とても**立派**な家ですね。", "とても **りっぱ** な いえ です ね。", "That's a really splendid house.", "N4"],
      ], [
        ["国立", "こくりつ", "national (institution)", "N3", "兄は**国立**大学の学生です。", "My older brother is a student at a national university.", "あに は **こくりつ** だいがく の がくせい です。"],
        ["目立つ", "めだつ", "to stand out", "N3", "赤い服はよく**目立ちます**。", "Red clothes really stand out.", "あかい ふく は よく **めだちます**。"],
      ]),
    ],
  },
  {
    n: 22,
    note: "Actions · saying, thinking, knowing and walking",
    items: [
      bk("言", "N5", "say", "ゲン ゴン", "い.う こと", [
        ["もう一度**言って**ください。", "もう いちど **いって** ください。", "Please say it once more.", "N5"],
        ["この**言葉**の意味は何ですか。", "この **ことば** の いみ は なん です か。", "What does this word mean?", "N4"],
      ], [
        ["伝言", "でんごん", "message", "N3", "田中さんに**伝言**をお願いします。", "Please give Mr. Tanaka a message.", "たなか さん に **でんごん** を おねがい します。"],
        ["方言", "ほうげん", "dialect", "N2", "祖母は**方言**で話します。", "My grandmother speaks in dialect.", "そぼ は **ほうげん** で はなします。"],
      ]),
      bk("思", "N5", "think", "シ", "おも.う", [
        ["明日は雨だと**思います**。", "あした は あめ だ と **おもいます**。", "I think it will rain tomorrow.", "N4"],
        ["子供のころを**思い出しました**。", "こども の ころ を **おもいだしました**。", "I remembered my childhood.", "N4"],
      ], [
        ["思い出", "おもいで", "memory", "N3", "祖父と旅行した**思い出**があります。", "I have memories of travelling with my grandfather.", "そふ と りょこう した **おもいで** が あります。"],
        ["不思議", "ふしぎ", "mysterious, strange", "N3", "それは**不思議**な話ですね。", "That's a strange story.", "それ は **ふしぎ** な はなし です ね。"],
      ]),
      bk("知", "N5", "know", "チ", "し.る", [
        ["その人の名前を**知って**いますか。", "その ひと の なまえ を **しって** います か。", "Do you know that person's name?", "N5"],
        ["結果を**知らせて**ください。", "けっか を **しらせて** ください。", "Please let me know the result.", "N4"],
      ], [
        ["知り合い", "しりあい", "acquaintance", "N3", "彼は古い**知り合い**です。", "He is an old acquaintance.", "かれ は ふるい **しりあい** です。"],
        ["知識", "ちしき", "knowledge", "N3", "本を読んで**知識**を増やします。", "I read books to increase my knowledge.", "ほん を よんで **ちしき** を ふやします。"],
      ]),
      bk("歩", "N5", "walk", "ホ ポ", "ある.く", [
        ["駅まで**歩きます**。", "えき まで **あるきます**。", "I walk to the station.", "N5"],
        ["毎朝公園を**散歩**します。", "まいあさ こうえん を **さんぽ** します。", "I take a walk in the park every morning.", "N5"],
      ], [
        ["歩道", "ほどう", "pavement, sidewalk", "N3", "子供は**歩道**を歩きましょう。", "Children, walk on the pavement.", "こども は **ほどう** を あるきましょう。"],
        ["進歩", "しんぽ", "progress", "N3", "科学は大きく**進歩**しました。", "Science has made great progress.", "かがく は おおきく **しんぽ** しました。"],
      ]),
    ],
  },
  {
    n: 23,
    note: "Actions · running, living, having and being born",
    items: [
      bk("走", "N5", "run", "ソウ", "はし.る", [
        ["駅まで**走りました**。", "えき まで **はしりました**。", "I ran to the station.", "N5"],
        ["廊下を**走らないで**ください。", "ろうか を **はしらないで** ください。", "Please don't run in the corridor.", "N5"],
      ], [
        ["走り回る", "はしりまわる", "to run around", "N3", "子供たちが庭を**走り回って**います。", "The children are running around the garden.", "こどもたち が にわ を **はしりまわって** います。"],
        ["競走", "きょうそう", "race", "N2", "公園で弟と**競走**しました。", "I raced my younger brother in the park.", "こうえん で おとうと と **きょうそう** しました。"],
      ]),
      bk("住", "N5", "live, reside", "ジュウ", "す.む", [
        ["東京に**住んで**います。", "とうきょう に **すんで** います。", "I live in Tokyo.", "N5"],
        ["ここに**住所**を書いてください。", "ここ に **じゅうしょ** を かいて ください。", "Please write your address here.", "N4"],
      ], [
        ["住宅", "じゅうたく", "housing, residence", "N3", "この辺りは**住宅**が多いです。", "There are a lot of houses around here.", "この あたり は **じゅうたく** が おおい です。"],
        ["住民", "じゅうみん", "residents", "N2", "町の**住民**が集まりました。", "The residents of the town gathered.", "まち の **じゅうみん** が あつまりました。"],
        ["住まい", "すまい", "home, dwelling", "N2", "新しい**住まい**はとても静かです。", "My new home is very quiet.", "あたらしい **すまい** は とても しずか です。"],
      ]),
      bk("有", "N5", "have, exist", "ユウ ウ", "あ.る", [
        ["この店はとても**有名**です。", "この みせ は とても **ゆうめい** です。", "This shop is very famous.", "N5"],
        ["この駐車場は**有料**です。", "この ちゅうしゃじょう は **ゆうりょう** です。", "This car park charges a fee.", "N3"],
      ], [
        ["有名人", "ゆうめいじん", "celebrity", "N3", "駅で**有名人**を見ました。", "I saw a celebrity at the station.", "えき で **ゆうめいじん** を みました。"],
        ["有効", "ゆうこう", "valid, effective", "N2", "このチケットは今月まで**有効**です。", "This ticket is valid until the end of this month.", "この チケット は こんげつ まで **ゆうこう** です。"],
      ]),
      bk("生", "N5", "life, birth", "セイ ショウ", "い.きる う.まれる", [
        ["田中**先生**は優しいです。", "たなか **せんせい** は やさしい です。", "Mr. Tanaka (the teacher) is kind.", "N5"],
        ["娘は去年**生まれました**。", "むすめ は きょねん **うまれました**。", "My daughter was born last year.", "N4"],
      ], [
        ["学生", "がくせい", "student", "N5", "私は大学の**学生**です。", "I am a university student.", "わたし は だいがく の **がくせい** です。"],
        ["誕生日", "たんじょうび", "birthday", "N5", "**誕生日**おめでとう。", "Happy birthday.", "**たんじょうび** おめでとう。"],
        ["生きる", "いきる", "to live", "N4", "魚は水の中で**生きて**います。", "Fish live in water.", "さかな は みず の なか で **いきて** います。"],
      ]),
    ],
  },
  {
    n: 24,
    note: "Places · school, books and language",
    items: [
      bk("学", "N5", "study", "ガク", "まな.ぶ", [
        ["私は**学生**です。", "わたし は **がくせい** です。", "I am a student.", "N5"],
        ["来年アメリカに**留学**します。", "らいねん アメリカ に **りゅうがく** します。", "I will study abroad in America next year.", "N4"],
      ], [
        ["学校", "がっこう", "school", "N5", "**学校**は八時半に始まります。", "School starts at half past eight.", "**がっこう** は はちじはん に はじまります。"],
        ["数学", "すうがく", "mathematics", "N4", "**数学**のテストは難しかったです。", "The maths test was difficult.", "**すうがく** の テスト は むずかしかった です。"],
        ["学ぶ", "まなぶ", "to learn, study", "N3", "大学で経済を**学んで**います。", "I'm studying economics at university.", "だいがく で けいざい を **まなんで** います。"],
      ]),
      bk("校", "N5", "school", "コウ", "", [
        ["毎日**学校**へ行きます。", "まいにち **がっこう** へ いきます。", "I go to school every day.", "N5"],
        ["私の**高校**は駅の近くにあります。", "わたし の **こうこう** は えき の ちかく に あります。", "My high school is near the station.", "N4"],
      ], [
        ["校長", "こうちょう", "principal, headteacher", "N3", "**校長**先生はとても優しいです。", "The principal is very kind.", "**こうちょう** せんせい は とても やさしい です。"],
        ["校庭", "こうてい", "schoolyard", "N2", "子供たちが**校庭**で遊んでいます。", "The children are playing in the schoolyard.", "こどもたち が **こうてい** で あそんで います。"],
      ]),
      bk("本", "N5", "book, origin", "ホン", "もと", [
        ["図書館で**本**を借りました。", "としょかん で **ほん** を かりました。", "I borrowed a book from the library.", "N5"],
        ["**日本**の料理が好きです。", "**にほん** の りょうり が すき です。", "I like Japanese food.", "N5"],
      ], [
        ["本当", "ほんとう", "true, real", "N5", "それは**本当**ですか。", "Is that true?", "それ は **ほんとう** です か。"],
        ["本棚", "ほんだな", "bookshelf", "N4", "**本棚**に辞書があります。", "There is a dictionary on the bookshelf.", "**ほんだな** に じしょ が あります。"],
        ["絵本", "えほん", "picture book", "N3", "寝る前に子供に**絵本**を読みます。", "I read a picture book to my child before bed.", "ねる まえ に こども に **えほん** を よみます。"],
      ]),
      bk("語", "N5", "language, word", "ゴ", "かた.る", [
        ["毎日**日本語**を勉強します。", "まいにち **にほんご** を べんきょう します。", "I study Japanese every day.", "N5"],
        ["母は**英語**を話すことができます。", "はは は **えいご** を はなす こと が できます。", "My mother can speak English.", "N5"],
      ], [
        ["単語", "たんご", "word, vocabulary", "N4", "毎日新しい**単語**を覚えます。", "I memorise new words every day.", "まいにち あたらしい **たんご** を おぼえます。"],
        ["物語", "ものがたり", "story, tale", "N3", "面白い**物語**を読みました。", "I read an interesting story.", "おもしろい **ものがたり** を よみました。"],
        ["敬語", "けいご", "honorific language", "N3", "店員はお客さんに**敬語**を使います。", "Shop staff use honorific language with customers.", "てんいん は おきゃくさん に **けいご** を つかいます。"],
      ]),
      bk("国", "N5", "country", "コク", "くに", [
        ["あなたの**国**はどこですか。", "あなた の **くに** は どこ です か。", "Where is your country?", "N5"],
        ["**国際**空港に着きました。", "**こくさい** くうこう に つきました。", "We arrived at the international airport.", "N3"],
      ], [
        ["外国", "がいこく", "foreign country", "N5", "いつか**外国**に住みたいです。", "I want to live in a foreign country someday.", "いつか **がいこく** に すみたい です。"],
        ["国語", "こくご", "Japanese (school subject), national language", "N3", "私は**国語**の授業が好きです。", "I like Japanese language class.", "わたし は **こくご** の じゅぎょう が すき です。"],
      ]),
    ],
  },
  {
    n: 25,
    note: "Places · home, shops, work and getting around",
    items: [
      bk("家", "N5", "house, home", "カ ケ", "いえ うち", [
        ["私の**家**は駅から近いです。", "わたし の **いえ** は えき から ちかい です。", "My house is close to the station.", "N5"],
        ["父は有名な**作家**です。", "ちち は ゆうめいな **さっか** です。", "My father is a famous writer.", "N3"],
      ], [
        ["家族", "かぞく", "family", "N5", "私の**家族**は四人です。", "There are four people in my family.", "わたし の **かぞく** は よにん です。"],
        ["家賃", "やちん", "rent", "N3", "この部屋の**家賃**は高いです。", "The rent for this room is expensive.", "この へや の **やちん** は たかい です。"],
        ["家庭", "かてい", "home, household", "N3", "彼女は温かい**家庭**で育ちました。", "She grew up in a warm home.", "かのじょ は あたたかい **かてい** で そだちました。"],
      ]),
      bk("店", "N5", "shop", "テン", "みせ", [
        ["この**店**のケーキはおいしいです。", "この **みせ** の ケーキ は おいしい です。", "The cakes at this shop are delicious.", "N5"],
        ["近くに新しい**喫茶店**ができました。", "ちかく に あたらしい **きっさてん** が できました。", "A new café has opened nearby.", "N4"],
      ], [
        ["店員", "てんいん", "shop assistant", "N4", "**店員**にトイレの場所を聞きました。", "I asked the shop assistant where the toilet was.", "**てんいん** に トイレ の ばしょ を ききました。"],
        ["売店", "ばいてん", "kiosk, stall", "N3", "駅の**売店**で水を買いました。", "I bought water at the station kiosk.", "えき の **ばいてん** で みず を かいました。"],
        ["本店", "ほんてん", "main store, head office", "N3", "この店の**本店**は東京にあります。", "This shop's main store is in Tokyo.", "この みせ の **ほんてん** は とうきょう に あります。"],
      ]),
      bk("社", "N5", "company, shrine", "シャ ジャ", "やしろ", [
        ["**会社**まで電車で行きます。", "**かいしゃ** まで でんしゃ で いきます。", "I go to the office by train.", "N5"],
        ["お正月に**神社**へ行きます。", "おしょうがつ に **じんじゃ** へ いきます。", "I go to a shrine at New Year.", "N4"],
      ], [
        ["社会", "しゃかい", "society", "N4", "授業で**社会**の問題について話します。", "We talk about social issues in class.", "じゅぎょう で **しゃかい** の もんだい に ついて はなします。"],
        ["社員", "しゃいん", "company employee", "N4", "この会社には**社員**が百人います。", "This company has a hundred employees.", "この かいしゃ に は **しゃいん** が ひゃくにん います。"],
        ["入社", "にゅうしゃ", "joining a company", "N3", "兄は四月に**入社**しました。", "My older brother joined the company in April.", "あに は しがつ に **にゅうしゃ** しました。"],
      ]),
      bk("駅", "N5", "station", "エキ", "", [
        ["**駅**はどこですか。", "**えき** は どこ です か。", "Where is the station?", "N5"],
        ["**駅員**に聞きましょう。", "**えきいん** に ききましょう。", "Let's ask the station staff.", "N3"],
      ], [
        ["駅前", "えきまえ", "in front of the station", "N4", "**駅前**に銀行があります。", "There is a bank in front of the station.", "**えきまえ** に ぎんこう が あります。"],
        ["駅長", "えきちょう", "stationmaster", "N2", "**駅長**さんに挨拶しました。", "I greeted the stationmaster.", "**えきちょう** さん に あいさつ しました。"],
      ]),
      bk("道", "N5", "road, way", "ドウ", "みち", [
        ["この**道**をまっすぐ行ってください。", "この **みち** を まっすぐ いって ください。", "Please go straight along this road.", "N5"],
        ["冬に**北海道**へ行きたいです。", "ふゆ に **ほっかいどう** へ いきたい です。", "I want to go to Hokkaido in winter.", "N4"],
      ], [
        ["水道", "すいどう", "water supply, tap water", "N4", "日本では**水道**の水が飲めます。", "In Japan you can drink tap water.", "にほん で は **すいどう** の みず が のめます。"],
        ["道具", "どうぐ", "tool, equipment", "N4", "使った**道具**を片付けてください。", "Please put away the tools you used.", "つかった **どうぐ** を かたづけて ください。"],
        ["柔道", "じゅうどう", "judo", "N3", "兄は**柔道**を習っています。", "My older brother is learning judo.", "あに は **じゅうどう** を ならって います。"],
      ]),
    ],
  },
  {
    n: 26,
    note: "Places · cars, silver, paper and asking what",
    items: [
      bk("車", "N5", "car", "シャ", "くるま", [
        ["父は新しい**車**を買いました。", "ちち は あたらしい **くるま** を かいました。", "My father bought a new car.", "N5"],
        ["**電車**で学校へ行きます。", "**でんしゃ** で がっこう へ いきます。", "I go to school by train.", "N5"],
      ], [
        ["自転車", "じてんしゃ", "bicycle", "N5", "**自転車**で公園へ行きます。", "I go to the park by bicycle.", "**じてんしゃ** で こうえん へ いきます。"],
        ["自動車", "じどうしゃ", "automobile", "N5", "この町には**自動車**の工場があります。", "There is a car factory in this town.", "この まち に は **じどうしゃ** の こうじょう が あります。"],
        ["駐車場", "ちゅうしゃじょう", "car park, parking lot", "N3", "**駐車場**はどこですか。", "Where is the car park?", "**ちゅうしゃじょう** は どこ です か。"],
      ]),
      bk("銀", "N5", "silver", "ギン", "", [
        ["**銀行**でお金を下ろしました。", "**ぎんこう** で おかね を おろしました。", "I withdrew money at the bank.", "N5"],
        ["彼女は**銀色**のペンを持っています。", "かのじょ は **ぎんいろ** の ペン を もって います。", "She has a silver pen.", "N2"],
      ], [
        ["銀", "ぎん", "silver", "N2", "誕生日に**銀**の指輪をもらいました。", "I got a silver ring for my birthday.", "たんじょうび に **ぎん** の ゆびわ を もらいました。"],
        ["銀メダル", "ぎんメダル", "silver medal", "N2", "姉は水泳で**銀メダル**を取りました。", "My older sister won a silver medal in swimming.", "あね は すいえい で **ぎんメダル** を とりました。"],
      ]),
      bk("紙", "N5", "paper", "シ", "かみ", [
        ["この**紙**に名前を書いてください。", "この **かみ** に なまえ を かいて ください。", "Please write your name on this paper.", "N5"],
        ["友達に**手紙**を書きました。", "ともだち に **てがみ** を かきました。", "I wrote a letter to a friend.", "N5"],
      ], [
        ["紙袋", "かみぶくろ", "paper bag", "N3", "**紙袋**に入れてください。", "Please put it in a paper bag.", "**かみぶくろ** に いれて ください。"],
        ["表紙", "ひょうし", "cover (of a book)", "N2", "この本の**表紙**はきれいです。", "The cover of this book is pretty.", "この ほん の **ひょうし** は きれい です。"],
        ["和紙", "わし", "Japanese paper", "N2", "これは**和紙**で作った人形です。", "This is a doll made of Japanese paper.", "これ は **わし** で つくった にんぎょう です。"],
      ]),
      bk("何", "N5", "what", "カ", "なに なん", [
        ["これは**何**ですか。", "これ は **なん** です か。", "What is this?", "N5"],
        ["家族は**何人**ですか。", "かぞく は **なんにん** です か。", "How many people are in your family?", "N5"],
      ], [
        ["何時", "なんじ", "what time", "N5", "今**何時**ですか。", "What time is it now?", "いま **なんじ** です か。"],
        ["何か", "なにか", "something", "N4", "**何か**飲みますか。", "Would you like something to drink?", "**なにか** のみます か。"],
        ["何度", "なんど", "how many times, many times", "N4", "**何度**も電話しました。", "I called many times.", "**なんど** も でんわ しました。"],
      ]),
    ],
  },
];
