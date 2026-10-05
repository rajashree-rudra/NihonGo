// N2 kanji book — groups 57–83 (kanji 237–353). See part-1.ts for the format.
import { bk, type BookGroup } from "../../builders.ts";

export const GROUPS: BookGroup[] = [
  {
    n: 57,
    note: "訁 speech, light right side",
    items: [
      bk("訓", "N2", "instruct, kun reading", "クン", "", [["今日は**訓練**があります。", "きょう は **くんれん** が あります。", "I have training today.", "N3", undefined, "クン"]]),
      bk("川", "N5", "river", "セン", "かわ", [
        ["大雨で**河川**の水が増えました。", "おおあめ で **かせん** の みず が ふえました。", "The rivers rose because of the heavy rain.", "N2", undefined, "セン"],
        ["**川**で泳ぎました。", "**かわ** で およぎました。", "I swam in the river.", "N3", undefined, "かわ"],
      ]),
      bk("設", "N2", "establish, set up", "セツ", "もう.ける", [
        ["会社の**設備**は新しいです。", "かいしゃ の **せつび** は あたらしい です。", "The company's facilities are new.", "N3", undefined, "セツ"],
        ["新しい駅を**建設**しています。", "あたらしい えき を **けんせつ** して います。", "They are building a new station.", "N3", undefined, "セツ"],
        ["駅の前に案内所を**設け**ました。", "えき の まえ に あんないじょ を **もうけ**ました。", "They set up an information desk in front of the station.", "N2", undefined, "もう.ける"],
      ], [
        ["設計", "せっけい", "plan, design", "N3", "今、家の**設計**をしています。", "I'm designing a house right now.", "いま、 いえ の **せっけい** を して います。"],
        ["開設", "かいせつ", "establishment; opening; setting up", "N2", "新しい店を**開設**しました。", "We opened a new store.", "あたらしい みせ を **かいせつ** しました。"],
        ["設計者", "せっけいしゃ", "designer", "N2", "この橋の**設計者**は有名です。", "The designer of this bridge is famous.", "この はし の **せっけいしゃ** は ゆうめい です。"],
        ["設計図", "せっけいず", "plan; blueprint", "N2", "**設計図**を見ながら作ります。", "I build it while looking at the blueprint.", "**せっけいず** を みながら つくります。"],
        ["新設", "しんせつ", "establishing; founding; newly set up", "N2", "学校に**新設**のプールがあります。", "The school has a newly built pool.", "がっこう に **しんせつ** の プール が あります。"],
      ]),
      bk("役", "N3", "role, duty, use", "ヤク エキ", "", [
        ["これは**役に立つ**本です。", "これ は **やく に たつ** ほん です。", "This is a useful book.", "N3", undefined, "ヤク"],
        ["彼は大事な**役割**をしています。", "かれ は だいじ な **やくわり** を して います。", "He plays an important role.", "N3", undefined, "ヤク"],
        ["父はまだ**現役**で働いています。", "ちち は まだ **げんえき** で はたらいて います。", "My father is still actively working.", "N1", undefined, "エキ"],
      ]),
      bk("投", "N3", "throw", "トウ", "な.げる", [
        ["選挙で**投票**しました。", "せんきょ で **とうひょう** しました。", "I voted in the election.", "N3", undefined, "トウ"],
        ["ボールを**投げ**ます。", "ボール を **なげ**ます。", "I throw the ball.", "N3", undefined, "な.げる"],
      ]),
      bk("詞", "N2", "part of speech, words", "シ", "", [
        ["この歌の**歌詞**が好きです。", "この うた の **かし** が すき です。", "I like the lyrics of this song.", "N2", undefined, "シ"],
        ["「本」は**名詞**です。", "「ほん」 は **めいし** です。", "“Book” is a noun.", "N2", undefined, "シ"],
      ], [
        ["形容詞", "けいようし", "adjective", "N2", "「大きい」は**形容詞**です。", "\"Ookii\" is an adjective.", "「おおきい」 は **けいようし** です。"],
        ["形容動詞", "けいようどうし", "adjectival noun, quasi-adjective", "N2", "「静か」は**形容動詞**です。", "\"Shizuka\" is a na-adjective.", "「しずか」 は **けいようどうし** です。"],
        ["台詞", "せりふ", "speech, words, one's lines", "N2", "役者が**台詞**を覚えます。", "The actor memorizes his lines.", "やくしゃ が **せりふ** を おぼえます。"],
        ["代名詞", "だいめいし", "pronoun", "N2", "「これ」は**代名詞**です。", "\"Kore\" is a pronoun.", "「これ」 は **だいめいし** です。"],
        ["動詞", "どうし", "verb", "N3", "**動詞**の形を覚えます。", "I memorize verb forms.", "**どうし** の かたち を おぼえます。"],
        ["助詞", "じょし", "(grammar) particle, postposition", "N3", "**助詞**の使い方が難しいです。", "Using particles is difficult.", "**じょし** の つかいかた が むずかしい です。"],
      ]),
      bk("詰", "N2", "pack, stuff, block", "キツ", "つ.める つ.まる", [
        ["警察が男を厳しく**詰問**しました。", "けいさつ が おとこ を きびしく **きつもん** しました。", "The police questioned the man sharply.", "N1", undefined, "キツ"],
        ["かばんに服を**詰め**ます。", "かばん に ふく を **つめ**ます。", "I pack clothes into the bag.", "N3", undefined, "つ.める"],
        ["風邪で鼻が**詰まって**います。", "かぜ で はな が **つまって** います。", "My nose is blocked from a cold.", "N2", undefined, "つ.まる"],
      ], [["見詰める", "みつめる", "to stare at, to gaze at", "N2", "彼はじっと私を**見詰め**ました。", "He stared at me intently.", "かれ は じっと わたし を **みつめ**ました。"]]),
    ],
  },
  {
    n: 58,
    note: "訁 speech, heavy right side",
    items: [
      bk("誌", "N2", "magazine, record", "シ", "", [["電車で**雑誌**を読みます。", "でんしゃ で **ざっし** を よみます。", "I read a magazine on the train.", "N3", undefined, "シ"]]),
      bk("課", "N2", "section, lesson, assign", "カ", "", [
        ["**課長**に話しました。", "**かちょう** に はなしました。", "I spoke to the section chief.", "N2", undefined, "カ"],
        ["今日の**課題**は難しいです。", "きょう の **かだい** は むずかしい です。", "Today's assignment is difficult.", "N2", undefined, "カ"],
      ], [
        ["課税", "かぜい", "taxation", "N2", "高い品物に**課税**されます。", "Expensive goods are taxed.", "たかい しなもの に **かぜい** されます。"],
        ["課程", "かてい", "course, curriculum", "N2", "大学の**課程**を終えました。", "I completed the university course.", "だいがく の **かてい** を おえました。"],
        ["日課", "にっか", "daily work, daily routine", "N2", "朝の散歩が私の**日課**です。", "A morning walk is part of my daily routine.", "あさ の さんぽ が わたし の **にっか** です。"],
        ["学生課", "がくせいか", "student affairs office", "N2", "**学生課**で書類をもらいます。", "I get the documents at the student affairs office.", "**がくせいか** で しょるい を もらいます。"],
        ["放課後", "ほうかご", "after school", "N2", "**放課後**、友だちと遊びます。", "I play with my friends after school.", "**ほうかご**、 ともだち と あそびます。"],
        ["課する", "かする", "to levy; to impose; to assign", "N2", "会社が新しい仕事を**課し**ます。", "The company assigns a new job.", "かいしゃ が あたらしい しごと を **かし**ます。"],
      ]),
      bk("講", "N2", "lecture", "コウ", "", [
        ["大学で**講義**を受けます。", "だいがく で **こうぎ** を うけます。", "I attend lectures at university.", "N2", undefined, "コウ"],
        ["日本語の**講座**に申し込みました。", "にほんご の **こうざ** に もうしこみました。", "I signed up for a Japanese course.", "N2", undefined, "コウ"],
      ], [
        ["休講", "きゅうこう", "lecture canceled", "N2", "今日の授業は**休講**です。", "Today's class is canceled.", "きょう の じゅぎょう は **きゅうこう** です。"],
        ["講師", "こうし", "lecturer", "N2", "大学の**講師**になりました。", "I became a university lecturer.", "だいがく の **こうし** に なりました。"],
        ["講演", "こうえん", "lecture, talk", "N3", "有名な先生の**講演**を聞きました。", "I listened to a famous professor's lecture.", "ゆうめい な せんせい の **こうえん** を ききました。"],
        ["受講", "じゅこう", "taking (attending) lectures", "N2", "日本語の授業を**受講**します。", "I'm taking a Japanese class.", "にほんご の じゅぎょう を **じゅこう** します。"],
      ]),
      bk("構", "N3", "structure, mind", "コウ", "かま.う かま.える", [
        ["建物の**構造**を調べます。", "たてもの の **こうぞう** を しらべます。", "I examine the building's structure.", "N2", undefined, "コウ"],
        ["気にしなくても**構い**ません。", "き に しなくても **かまい**ません。", "You don't have to worry about it.", "N3", undefined, "かま.う"],
        ["駅前に新しい店を**構え**ました。", "えきまえ に あたらしい みせ を **かまえ**ました。", "He set up a new shop in front of the station.", "N2", undefined, "かま.える"],
      ]),
    ],
  },
  {
    n: 59,
    note: "貝 shell = money",
    items: [
      bk("貝", "N2", "shellfish, shell", "", "かい", [["海で**貝**を拾いました。", "うみ で **かい** を ひろいました。", "I picked up shells at the beach.", "N2", undefined, "かい"]]),
      bk("見", "N5", "see, look", "ケン", "み.る み.せる", [
        ["クラスで工場を**見学**しました。", "クラス で こうじょう を **けんがく** しました。", "Our class toured a factory.", "N3", undefined, "ケン"],
        ["昨日、映画を**見**ました。", "きのう、 えいが を **み**ました。", "I watched a movie yesterday.", "N5", undefined, "み.る"],
        ["写真を**見せて**ください。", "しゃしん を **みせて** ください。", "Please show me the photo.", "N4", undefined, "み.せる"],
      ]),
      bk("貨", "N2", "goods, currency", "カ", "", [
        ["この電車は**貨物**を運びます。", "この でんしゃ は **かもつ** を はこびます。", "This train carries freight.", "N2", undefined, "カ"],
        ["財布に**硬貨**がたくさんあります。", "さいふ に **こうか** が たくさん あります。", "There are a lot of coins in my wallet.", "N3", undefined, "カ"],
      ], [["通貨", "つうか", "currency", "N3", "この国の**通貨**は何ですか。", "What is this country's currency?", "この くに の **つうか** は なん です か。"]]),
      bk("販", "N2", "sell", "ハン", "", [
        ["ここで切符を**販売**しています。", "ここ で きっぷ を **はんばい** して います。", "Tickets are sold here.", "N3", undefined, "ハン"],
        ["**販売者**に連絡しました。", "**はんばいしゃ** に れんらく しました。", "I contacted the seller.", "N2", undefined, "ハン"],
      ], [["通信販売", "つうしんはんばい", "mail order; online shopping", "N2", "**通信販売**で服を買います。", "I buy clothes by mail order.", "**つうしんはんばい** で ふく を かいます。"]]),
      bk("貯", "N2", "save, store", "チョ", "た.める た.まる", [
        ["毎月、少し**貯金**します。", "まいつき、 すこし **ちょきん** します。", "I save a little every month.", "N3", undefined, "チョ"],
        ["野菜を倉庫に**貯蔵**します。", "やさい を そうこ に **ちょぞう** します。", "We store the vegetables in a warehouse.", "N2", undefined, "チョ"],
        ["新しいカメラのためにお金を**貯めて**います。", "あたらしい カメラ の ため に おかね を **ためて** います。", "I'm saving money for a new camera.", "N3", undefined, "た.める"],
        ["一年でお金が十万円**貯まり**ました。", "いちねん で おかね が じゅうまんえん **たまり**ました。", "I saved up 100,000 yen in a year.", "N3", undefined, "た.まる"],
      ], [
        ["貯まる", "たまる", "to be saved up (of money)", "N3", "お金が少し**貯まり**ました。", "I've saved up a little money.", "おかね が すこし **たまり**ました。"],
        ["貯める", "ためる", "to save up (money)", "N3", "旅行のためにお金を**貯め**ます。", "I'm saving money for a trip.", "りょこう の ため に おかね を **ため**ます。"],
      ]),
      bk("貿", "N2", "trade", "ボウ", "", [["父は**貿易**の仕事をしています。", "ちち は **ぼうえき** の しごと を して います。", "My father works in trade.", "N3", undefined, "ボウ"]]),
    ],
  },
  {
    n: 60,
    note: "貝 sitting at the bottom",
    items: [
      bk("賞", "N2", "prize, praise", "ショウ", "", [
        ["大会で**賞**をもらいました。", "たいかい で **しょう** を もらいました。", "I got a prize at the competition.", "N3", undefined, "ショウ"],
        ["静かな部屋で音楽を**鑑賞**します。", "しずか な へや で おんがく を **かんしょう** します。", "I enjoy music in a quiet room.", "N2", undefined, "ショウ"],
      ], [
        ["賞金", "しょうきん", "prize, monetary award", "N2", "大会で**賞金**をもらいました。", "I won prize money at the tournament.", "たいかい で **しょうきん** を もらいました。"],
        ["賞品", "しょうひん", "prize, trophy", "N2", "一等の**賞品**は自転車です。", "The first prize is a bicycle.", "いっとう の **しょうひん** は じてんしゃ です。"],
        ["受賞", "じゅしょう", "winning a prize", "N2", "彼はその映画で**受賞**しました。", "He won an award for that film.", "かれ は その えいが で **じゅしょう** しました。"],
      ]),
      bk("賢", "N2", "wise, clever", "ケン", "かしこ.い", [
        ["今は待つのが**賢明**です。", "いま は まつ の が **けんめい** です。", "It is wise to wait for now.", "N1", undefined, "ケン"],
        ["彼女はとても**賢い**です。", "かのじょ は とても **かしこい** です。", "She is very clever.", "N3", undefined, "かしこ.い"],
      ]),
      bk("贈", "N2", "give (a gift)", "ゾウ ソウ", "おく.る", [
        ["卒業式で記念品の**贈呈**がありました。", "そつぎょうしき で きねんひん の **ぞうてい** が ありました。", "Commemorative gifts were presented at the graduation ceremony.", "N1", undefined, "ゾウ"],
        ["父が図書館に本を**寄贈**しました。", "ちち が としょかん に ほん を **きそう** しました。", "My father donated books to the library. (also read きぞう)", "N1", undefined, "ソウ"],
        ["友だちに**贈り物**をしました。", "ともだち に **おくりもの** を しました。", "I gave my friend a present.", "N3", undefined, "おく.る"],
        ["母の日に花を**贈り**ます。", "はは の ひ に はな を **おくり**ます。", "I'll give flowers on Mother's Day.", "N3", undefined, "おく.る"],
      ]),
      bk("増", "N3", "increase", "ゾウ", "ふ.える ふ.やす ま.す", [
        ["人口が**増加**しています。", "じんこう が **ぞうか** して います。", "The population is growing.", "N3", undefined, "ゾウ"],
        ["店の客が**増え**ました。", "みせ の きゃく が **ふえ**ました。", "The shop's customers have increased.", "N3", undefined, "ふ.える"],
        ["日本語の勉強時間を**増やし**ます。", "にほんご の べんきょう じかん を **ふやし**ます。", "I'll increase my Japanese study time.", "N3", undefined, "ふ.やす"],
        ["雨で川の水が**増し**ました。", "あめ で かわ の みず が **まし**ました。", "The river rose because of the rain.", "N2", undefined, "ま.す"],
      ]),
    ],
  },
  {
    n: 61,
    note: "釒 metal",
    items: [
      bk("針", "N2", "needle, hand (of a clock)", "シン", "はり", [
        ["これが学校の新しい**方針**です。", "これ が がっこう の あたらしい **ほうしん** です。", "This is the school's new policy.", "N2", undefined, "シン"],
        ["**針**で指を刺しました。", "**はり** で ゆび を さしました。", "I pricked my finger with a needle.", "N3", undefined, "はり"],
      ], [
        ["針金", "はりがね", "wire", "N2", "**針金**で形を作ります。", "I make shapes with wire.", "**はりがね** で かたち を つくります。"],
        ["方針", "ほうしん", "objective, plan, policy", "N2", "会社の**方針**が変わりました。", "The company's policy has changed.", "かいしゃ の **ほうしん** が かわりました。"],
      ]),
      bk("鈍", "N2", "dull, slow", "ドン", "にぶ.い", [
        ["彼は人の気持ちに**鈍感**です。", "かれ は ひと の きもち に **どんかん** です。", "He is insensitive to people's feelings.", "N1", undefined, "ドン"],
        ["このナイフは**鈍い**です。", "この ナイフ は **にぶい** です。", "This knife is dull.", "N2", undefined, "にぶ.い"],
      ]),
      bk("鉄", "N2", "iron", "テツ", "", [
        ["この門は**鉄**でできています。", "この もん は **てつ** で できて います。", "This gate is made of iron.", "N3", undefined, "テツ"],
        ["**私鉄**で通勤しています。", "**してつ** で つうきん して います。", "I commute by private railway.", "N2", undefined, "テツ"],
      ], [
        ["鉄橋", "てっきょう", "iron bridge", "N2", "電車が**鉄橋**を渡ります。", "The train crosses the railway bridge.", "でんしゃ が **てっきょう** を わたります。"],
        ["鉄砲", "てっぽう", "gun", "N2", "博物館で昔の**鉄砲**を見ました。", "I saw old guns at the museum.", "はくぶつかん で むかし の **てっぽう** を みました。"],
        ["鉄道", "てつどう", "railway; railroad", "N3", "**鉄道**で旅行するのが好きです。", "I like traveling by train.", "**てつどう** で りょこう する の が すき です。"],
      ]),
      bk("鉱", "N2", "mineral, ore", "コウ", "", [
        ["山に古い**鉱山**があります。", "やま に ふるい **こうざん** が あります。", "There is an old mine in the mountain.", "N2", undefined, "コウ"],
        ["彼は**鉱物**を集めています。", "かれ は **こうぶつ** を あつめて います。", "He collects minerals.", "N2", undefined, "コウ"],
      ]),
      bk("銅", "N2", "copper, bronze", "ドウ", "", [
        ["**銅**メダルを取りました。", "**どう** メダル を とりました。", "I won a bronze medal.", "N2", undefined, "ドウ"],
        ["古い**銅貨**を集めています。", "ふるい **どうか** を あつめて います。", "I collect old copper coins.", "N2", undefined, "ドウ"],
      ]),
      bk("銀", "N3", "silver", "ギン", "", [
        ["**銀行**でお金を下ろします。", "**ぎんこう** で おかね を おろします。", "I withdraw money at the bank.", "N5", undefined, "ギン"],
        ["これは**銀**のスプーンです。", "これ は **ぎん** の スプーン です。", "This is a silver spoon.", "N3", undefined, "ギン"],
      ]),
      bk("鋭", "N2", "sharp, keen", "エイ", "するど.い", [
        ["三角形の一つの**鋭角**を測ります。", "さんかくけい の ひとつ の **えいかく** を はかります。", "I measure one acute angle of the triangle.", "N1", undefined, "エイ"],
        ["このナイフは**鋭い**です。", "この ナイフ は **するどい** です。", "This knife is sharp.", "N2", undefined, "するど.い"],
      ]),
      bk("録", "N2", "record", "ロク", "", [
        ["会議を**録音**します。", "かいぎ を **ろくおん** します。", "I'll record the meeting.", "N2", undefined, "ロク"],
        ["新しい**記録**が出ました。", "あたらしい **きろく** が でました。", "A new record was set.", "N3", undefined, "ロク"],
      ]),
    ],
  },
  {
    n: 62,
    note: "触 is 角 + 虫",
    items: [
      bk("角", "N2", "corner, angle, horn", "カク", "かど つの", [
        ["三角形の**角度**を測ります。", "さんかくけい の **かくど** を はかります。", "I measure the angles of the triangle.", "N2", undefined, "カク"],
        ["次の**角**を右に曲がってください。", "つぎ の **かど** を みぎ に まがって ください。", "Please turn right at the next corner.", "N3", undefined, "かど"],
        ["牛には**角**があります。", "うし に は **つの** が あります。", "Cows have horns.", "N2", undefined, "つの"],
      ], [
        ["四角い", "しかくい", "square", "N2", "**四角い**テーブルを買いました。", "I bought a square table.", "**しかくい** テーブル を かいました。"],
        ["折角", "せっかく", "with trouble, at great pains, long-awaited", "N2", "**折角**来たのに店は休みでした。", "I went all the way there, but the store was closed.", "**せっかく** きた のに みせ は やすみ でした。"],
        ["直角", "ちょっかく", "right angle", "N2", "ここで**直角**に曲がります。", "Turn at a right angle here.", "ここ で **ちょっかく** に まがります。"],
        ["方角", "ほうがく", "direction, way", "N2", "駅の**方角**が分かりません。", "I can't tell which direction the station is.", "えき の **ほうがく** が わかりません。"],
        ["街角", "まちかど", "street corner", "N2", "**街角**で友だちに会いました。", "I ran into a friend on the street corner.", "**まちかど** で ともだち に あいました。"],
        ["四つ角", "よつかど", "four corners, crossroads", "N2", "次の**四つ角**を右に曲がります。", "Turn right at the next intersection.", "つぎ の **よつかど** を みぎ に まがります。"],
        ["四角", "しかく", "square", "N3", "紙を**四角**に切ります。", "I cut the paper into a square.", "かみ を **しかく** に きります。"],
      ]),
      bk("用", "N5", "use, business", "ヨウ", "もち.いる", [
        ["今日は**用事**があります。", "きょう は **ようじ** が あります。", "I have something to do today.", "N4", undefined, "ヨウ"],
        ["この道具を**使用**します。", "この どうぐ を **しよう** します。", "I use this tool.", "N3", undefined, "ヨウ"],
        ["新しい方法を**用いて**調べました。", "あたらしい ほうほう を **もちいて** しらべました。", "We investigated using a new method.", "N2", undefined, "もち.いる"],
      ]),
      bk("触", "N2", "touch", "ショク", "ふ.れる さわ.る", [
        ["車の**接触**事故がありました。", "くるま の **せっしょく** じこ が ありました。", "There was a minor collision between cars.", "N2", undefined, "ショク"],
        ["冷たい風が顔に**触れ**ました。", "つめたい かぜ が かお に **ふれ**ました。", "A cold wind touched my face.", "N3", undefined, "ふ.れる"],
        ["ここに**触ら**ないでください。", "ここ に **さわら**ないで ください。", "Please don't touch here.", "N3", undefined, "さわ.る"],
        ["犬に**触って**もいいですか。", "いぬ に **さわって** も いい です か。", "May I touch the dog?", "N3", undefined, "さわ.る"],
      ], [
        ["触れる", "ふれる", "to touch, to feel, to violate", "N3", "展示品に**触れ**ないでください。", "Please do not touch the exhibits.", "てんじひん に **ふれ**ないで ください。"],
        ["触れ合い", "ふれあい", "contact; connectedness; rapport", "N2", "人との**触れ合い**が好きです。", "I enjoy connecting with people.", "ひと と の **ふれあい** が すき です。"],
        ["触れ合う", "ふれあう", "to come into contact with; to touch each other", "N2", "手と手が**触れ合い**ました。", "Our hands touched.", "て と て が **ふれあい**ました。"],
        ["目に触れる", "めにふれる", "to catch one's eye", "N2", "大事な物は**目に触れる**所に置きます。", "I keep important things where I can see them.", "だいじ な もの は **め に ふれる** ところ に おきます。"],
      ]),
    ],
  },
  {
    n: 63,
    note: "亻 person, light right side",
    items: [
      bk("介", "N2", "mediate, introduce", "カイ", "", [
        ["友だちを母に**紹介**しました。", "ともだち を はは に **しょうかい** しました。", "I introduced my friend to my mother.", "N4", undefined, "カイ"],
        ["祖母の**介護**をしています。", "そぼ の **かいご** を して います。", "I take care of my grandmother.", "N2", undefined, "カイ"],
      ], [
        ["厄介", "やっかい", "trouble, burden, care", "N3", "**厄介**な仕事を頼まれました。", "I was asked to do a troublesome job.", "**やっかい** な しごと を たのまれました。"],
        ["介護施設", "かいごしせつ", "nursing home", "N2", "祖父は今、**介護施設**にいます。", "My grandfather is in a nursing home now.", "そふ は いま、 **かいごしせつ** に います。"],
      ]),
      bk("仏", "N2", "Buddha", "ブツ", "ほとけ", [
        ["日本には**仏教**のお寺が多いです。", "にほん に は **ぶっきょう** の おてら が おおい です。", "There are many Buddhist temples in Japan.", "N3", undefined, "ブツ"],
        ["大きな**仏**の像を見ました。", "おおきな **ほとけ** の ぞう を みました。", "I saw a big statue of Buddha.", "N3", undefined, "ほとけ"],
      ]),
      bk("令", "N2", "order, command", "レイ", "", [["それは社長の**命令**です。", "それ は しゃちょう の **めいれい** です。", "That's the president's order.", "N3", undefined, "レイ"]]),
      bk("仲", "N2", "relationship, go-between", "チュウ", "なか", [
        ["不動産屋が家の売買を**仲介**します。", "ふどうさんや が いえ の ばいばい を **ちゅうかい** します。", "The real estate agent mediates the sale of the house.", "N1", undefined, "チュウ"],
        ["二人はとても**仲**がいいです。", "ふたり は とても **なか** が いい です。", "The two get along very well.", "N3", undefined, "なか"],
        ["兄と**仲直り**しました。", "あに と **なかなおり** しました。", "I made up with my older brother.", "N2", undefined, "なか"],
      ], [
        ["仲良し", "なかよし", "intimate friend, bosom buddy", "N2", "あの二人は**仲良し**です。", "Those two are good friends.", "あの ふたり は **なかよし** です。"],
        ["仲間", "なかま", "company, fellow, colleague", "N3", "仕事の**仲間**と食事をします。", "I have dinner with my coworkers.", "しごと の **なかま** と しょくじ を します。"],
      ]),
      bk("伸", "N2", "stretch, grow", "シン", "の.びる の.ばす", [
        ["手紙の最後に**追伸**を書きました。", "てがみ の さいご に **ついしん** を かきました。", "I wrote a postscript at the end of the letter.", "N1", undefined, "シン"],
        ["髪が**伸び**ました。", "かみ が **のび**ました。", "My hair has grown.", "N3", undefined, "の.びる"],
        ["朝、体を**伸ばし**ます。", "あさ、 からだ を **のばし**ます。", "I stretch my body in the morning.", "N3", undefined, "の.ばす"],
      ]),
      bk("伺", "N2", "visit, ask (humble)", "", "うかが.う", [
        ["明日、お宅に**伺い**ます。", "あした、 おたく に **うかがい**ます。", "I will visit your home tomorrow.", "N3", undefined, "うかが.う"],
        ["一つ**伺って**もいいですか。", "ひとつ **うかがって** も いい です か。", "May I ask you one thing?", "N3", undefined, "うかが.う"],
      ]),
    ],
  },
  {
    n: 64,
    note: "亻 person, boxy right side",
    items: [
      bk("依", "N2", "depend on, request", "イ エ", "", [
        ["会社に仕事を**依頼**しました。", "かいしゃ に しごと を **いらい** しました。", "I requested the job from the company.", "N2", undefined, "イ"],
        ["天気は**依然**として悪いです。", "てんき は **いぜん** と して わるい です。", "The weather is still bad.", "N1", undefined, "イ"],
        ["彼は仏教に**帰依**しました。", "かれ は ぶっきょう に **きえ** しました。", "He devoted himself to Buddhism.", "N1", undefined, "エ"],
      ]),
      bk("個", "N2", "individual, counter for things", "コ", "", [
        ["りんごを**三個**買いました。", "りんご を **さんこ** かいました。", "I bought three apples.", "N4", undefined, "コ"],
        ["これは**個人**の意見です。", "これ は **こじん** の いけん です。", "This is a personal opinion.", "N2", undefined, "コ"],
      ], [
        ["個体", "こたい", "an individual", "N2", "一つ一つの**個体**を調べます。", "We examine each individual one by one.", "ひとつ ひとつ の **こたい** を しらべます。"],
        ["個人差", "こじんさ", "individual differences", "N2", "覚える速さには**個人差**があります。", "How quickly people memorize varies from person to person.", "おぼえる はやさ に は **こじんさ** が あります。"],
      ]),
      bk("倍", "N2", "double, times", "バイ", "", [
        ["値段が**二倍**になりました。", "ねだん が **にばい** に なりました。", "The price doubled.", "N3", undefined, "バイ"],
        ["去年より客が**倍増**しました。", "きょねん より きゃく が **ばいぞう** しました。", "Customers doubled compared with last year.", "N1", undefined, "バイ"],
      ]),
      bk("停", "N2", "stop, halt", "テイ", "", [
        ["**バス停**で待ちます。", "**バスてい** で まちます。", "I wait at the bus stop.", "N3", undefined, "テイ"],
        ["電車が急に**停止**しました。", "でんしゃ が きゅう に **ていし** しました。", "The train stopped suddenly.", "N2", undefined, "テイ"],
      ], [
        ["停車", "ていしゃ", "stopping (e.g., train)", "N2", "電車が次の駅に**停車**します。", "The train stops at the next station.", "でんしゃ が つぎ の えき に **ていしゃ** します。"],
        ["停電", "ていでん", "power outage, electricity outage, blackout", "N2", "台風で**停電**しました。", "The power went out because of the typhoon.", "たいふう で **ていでん** しました。"],
        ["停留所", "ていりゅうじょ", "bus or tram stop", "N3", "バスの**停留所**で待ちます。", "I wait at the bus stop.", "バス の **ていりゅうじょ** で まちます。"],
      ]),
    ],
  },
  {
    n: 65,
    note: "象 hides inside 像",
    items: [
      bk("傾", "N2", "lean, tilt, tendency", "ケイ", "かたむ.く かたむ.ける", [
        ["最近、値段が上がる**傾向**があります。", "さいきん、 ねだん が あがる **けいこう** が あります。", "Lately there's a tendency for prices to rise.", "N2", undefined, "ケイ"],
        ["壁の絵が**傾いて**います。", "かべ の え が **かたむいて** います。", "The picture on the wall is tilted.", "N2", undefined, "かたむ.く"],
        ["先生の話に耳を**傾け**ました。", "せんせい の はなし に みみ を **かたむけ**ました。", "I listened closely to the teacher.", "N2", undefined, "かたむ.ける"],
      ], [["傾らか", "なだらか", "gradual, gentle", "N2", "**傾らか**な坂をゆっくり上ります。", "I slowly walk up the gentle slope.", "**なだらか** な さか を ゆっくり のぼります。"]]),
      bk("像", "N2", "statue, image", "ゾウ", "", [
        ["公園に大きな**像**があります。", "こうえん に おおきな **ぞう** が あります。", "There is a big statue in the park.", "N2", undefined, "ゾウ"],
        ["そんなことは**想像**もできません。", "そんな こと は **そうぞう** も できません。", "I can't even imagine such a thing.", "N3", undefined, "ゾウ"],
      ]),
      bk("象", "N2", "elephant, phenomenon", "ショウ ゾウ", "", [
        ["彼の第一**印象**はよかったです。", "かれ の だいいち **いんしょう** は よかった です。", "My first impression of him was good.", "N3", undefined, "ショウ"],
        ["動物園で**象**を見ました。", "どうぶつえん で **ぞう** を みました。", "I saw an elephant at the zoo.", "N3", undefined, "ゾウ"],
      ], [
        ["抽象", "ちゅうしょう", "abstract", "N2", "先生が**抽象**の意味を教えました。", "The teacher explained the meaning of \"abstract.\"", "せんせい が **ちゅうしょう** の いみ を おしえました。"],
        ["現象", "げんしょう", "phenomenon", "N3", "珍しい**現象**を見ました。", "I saw an unusual phenomenon.", "めずらしい **げんしょう** を みました。"],
        ["対象", "たいしょう", "target; object (of study, etc.); subject", "N3", "子どもを**対象**にした本です。", "This is a book aimed at children.", "こども を **たいしょう** に した ほん です。"],
        ["対象外", "たいしょうがい", "not covered by; not subject to", "N2", "この商品は割引の**対象外**です。", "This item is not eligible for the discount.", "この しょうひん は わりびき の **たいしょうがい** です。"],
      ]),
      bk("億", "N2", "hundred million", "オク", "", [["日本の人口は**一億**人以上です。", "にほん の じんこう は **いちおく** にん いじょう です。", "Japan's population is over one hundred million.", "N3", undefined, "オク"]]),
    ],
  },
  {
    n: 66,
    note: "普 is 並 with 日 under it",
    items: [
      bk("並", "N2", "line up, row, ordinary", "ヘイ", "なら.ぶ なら.べる なみ", [
        ["二本の線が**並行**しています。", "にほん の せん が **へいこう** して います。", "The two lines run parallel.", "N2", undefined, "ヘイ"],
        ["店の前に人が**並んで**います。", "みせ の まえ に ひと が **ならんで** います。", "People are lined up in front of the shop.", "N3", undefined, "なら.ぶ"],
        ["本を棚に**並べ**ました。", "ほん を たな に **ならべ**ました。", "I arranged the books on the shelf.", "N3", undefined, "なら.べる"],
        ["駅まで桜の**並木**が続いています。", "えき まで さくら の **なみき** が つづいて います。", "A row of cherry trees continues to the station.", "N2", undefined, "なみ"],
      ], [
        ["並木", "なみき", "roadside tree, row of trees", "N2", "駅までの**並木**がきれいです。", "The row of trees leading to the station is beautiful.", "えき まで の **なみき** が きれい です。"],
        ["並行", "へいこう", "(going) side by side, concurrent, at the same time", "N2", "二本の道が**並行**しています。", "The two roads run parallel.", "にほん の みち が **へいこう** して います。"],
        ["町並み", "まちなみ", "townscape; row of stores and houses", "N2", "古い**町並み**が残っています。", "The old townscape still remains.", "ふるい **まちなみ** が のこって います。"],
      ]),
      bk("普", "N2", "universal, general", "フ", "", [
        ["**普通**の電車に乗ります。", "**ふつう** の でんしゃ に のります。", "I take the local train.", "N3", undefined, "フ"],
        ["スマホが世界中に**普及**しました。", "スマホ が せかいじゅう に **ふきゅう** しました。", "Smartphones have spread worldwide.", "N1", undefined, "フ"],
      ], [["普段", "ふだん", "in everyday situations, usually, ordinarily", "N3", "**普段**は八時に起きます。", "I usually get up at eight.", "**ふだん** は はちじ に おきます。"]]),
    ],
  },
  {
    n: 67,
    note: "刂 blade on the right",
    items: [
      bk("刷", "N2", "print", "サツ", "す.る", [
        ["書類を**印刷**します。", "しょるい を **いんさつ** します。", "I print the documents.", "N3", undefined, "サツ"],
        ["新聞を毎朝百万部**刷り**ます。", "しんぶん を まいあさ ひゃくまんぶ **すり**ます。", "They print a million copies of the newspaper every morning.", "N1", undefined, "す.る"],
      ]),
      bk("刺", "N2", "pierce, sting", "シ", "さ.す さ.さる", [
        ["会議で**名刺**を交換しました。", "かいぎ で **めいし** を こうかん しました。", "We exchanged business cards at the meeting.", "N2", undefined, "シ"],
        ["蚊に**刺され**ました。", "か に **さされ**ました。", "I got bitten by a mosquito.", "N2", undefined, "さ.す"],
        ["**刺身**が好きです。", "**さしみ** が すき です。", "I like sashimi.", "N3", undefined, "さ.す"],
        ["指にとげが**刺さり**ました。", "ゆび に とげ が **ささり**ました。", "A splinter got stuck in my finger.", "N2", undefined, "さ.さる"],
      ], [
        ["名刺", "めいし", "business card", "N2", "会議で**名刺**を交換しました。", "We exchanged business cards at the meeting.", "かいぎ で **めいし** を こうかん しました。"],
        ["刺激", "しげき", "stimulus, impetus, incentive", "N3", "新しい仕事は**刺激**があります。", "My new job is stimulating.", "あたらしい しごと は **しげき** が あります。"],
      ]),
      bk("則", "N2", "rule, law", "ソク", "", [
        ["学校の**規則**を守ります。", "がっこう の **きそく** を まもります。", "I follow the school rules.", "N3", undefined, "ソク"],
        ["生活が**不規則**になりました。", "せいかつ が **ふきそく** に なりました。", "My daily routine became irregular.", "N2", undefined, "ソク"],
      ], [["法則", "ほうそく", "law, rule", "N2", "自然の**法則**を学びます。", "I study the laws of nature.", "しぜん の **ほうそく** を まなびます。"]]),
      bk("副", "N2", "vice-, secondary", "フク", "", [
        ["彼は**副社長**です。", "かれ は **ふくしゃちょう** です。", "He is the vice president.", "N2", undefined, "フク"],
        ["この薬は**副作用**が少ないです。", "この くすり は **ふくさよう** が すくない です。", "This medicine has few side effects.", "N2", undefined, "フク"],
      ], [["副詞", "ふくし", "adverb", "N2", "「とても」は**副詞**です。", "\"Totemo\" is an adverb.", "「とても」 は **ふくし** です。"]]),
      bk("劇", "N2", "drama, play", "ゲキ", "", [
        ["昨日、**劇**を見に行きました。", "きのう、 **げき** を み に いきました。", "I went to see a play yesterday.", "N3", undefined, "ゲキ"],
        ["大学で**演劇**をしています。", "だいがく で **えんげき** を して います。", "I do theatre at university.", "N2", undefined, "ゲキ"],
      ], [
        ["劇場", "げきじょう", "theater, playhouse", "N3", "**劇場**で映画を見ました。", "I watched a movie at the theater.", "**げきじょう** で えいが を みました。"],
        ["悲劇", "ひげき", "tragedy", "N3", "**悲劇**の物語を読みました。", "I read a tragic story.", "**ひげき** の ものがたり を よみました。"],
        ["劇的", "げきてき", "dramatic; exciting", "N2", "試合は**劇的**に終わりました。", "The game ended dramatically.", "しあい は **げきてき** に おわりました。"],
      ]),
    ],
  },
  {
    n: 68,
    note: "identical tops",
    items: [
      bk("券", "N2", "ticket", "ケン", "", [
        ["**入場券**を買いました。", "**にゅうじょうけん** を かいました。", "I bought an admission ticket.", "N2", undefined, "ケン"],
        ["この**券**は今日まで使えます。", "この **けん** は きょう まで つかえます。", "This voucher is valid until today.", "N3", undefined, "ケン"],
      ], [
        ["回数券", "かいすうけん", "book of tickets", "N2", "**回数券**を買うと安いです。", "Buying a book of tickets is cheaper.", "**かいすうけん** を かう と やすい です。"],
        ["定期券", "ていきけん", "commuter pass, season ticket", "N2", "電車の**定期券**をなくしました。", "I lost my train commuter pass.", "でんしゃ の **ていきけん** を なくしました。"],
      ]),
      bk("巻", "N2", "roll, wind, volume", "カン", "ま.く まき", [
        ["この漫画の**第一巻**を買いました。", "この まんが の **だいいっかん** を かいました。", "I bought the first volume of this manga.", "N2", undefined, "カン"],
        ["首にマフラーを**巻き**ます。", "くび に マフラー を **まき**ます。", "I wrap a scarf around my neck.", "N2", undefined, "ま.く"],
        ["お風呂の後、**寝巻**に着替えます。", "おふろ の あと、 **ねまき** に きがえます。", "After the bath I change into pyjamas.", "N2", undefined, "まき"],
      ], [["巻き込む", "まきこむ", "to roll up; to involve; to drag into", "N2", "事故に**巻き込まれ**ました。", "I got caught up in an accident.", "じこ に **まきこまれ**ました。"]]),
    ],
  },
  {
    n: 69,
    note: "交 shapes and 阝 on the right",
    items: [
      bk("効", "N2", "effect, work", "コウ", "き.く", [
        ["毎日の運動の**効果**がありました。", "まいにち の うんどう の **こうか** が ありました。", "The daily exercise had an effect.", "N3", undefined, "コウ"],
        ["この薬はよく**効き**ます。", "この くすり は よく **きき**ます。", "This medicine works well.", "N3", undefined, "き.く"],
      ], [
        ["効力", "こうりょく", "effect, efficacy", "N2", "この薬は**効力**が強いです。", "This medicine is very potent.", "この くすり は **こうりょく** が つよい です。"],
        ["有効", "ゆうこう", "valid, effectual", "N3", "この切符は今日まで**有効**です。", "This ticket is valid until today.", "この きっぷ は きょう まで **ゆうこう** です。"],
        ["効用", "こうよう", "use; utility; effect", "N2", "毎日の運動の**効用**は大きいです。", "Daily exercise has great benefits.", "まいにち の うんどう の **こうよう** は おおきい です。"],
        ["特効薬", "とっこうやく", "specific medicine; wonder drug", "N2", "風邪の**特効薬**はありません。", "There is no cure-all for colds.", "かぜ の **とっこうやく** は ありません。"],
      ]),
      bk("郊", "N2", "suburbs, outskirts", "コウ", "", [["**郊外**に住んでいます。", "**こうがい** に すんで います。", "I live in the suburbs.", "N2", undefined, "コウ"]]),
      bk("交", "N4", "mix, exchange, cross", "コウ", "まじ.わる ま.ぜる か.わす", [
        ["この町は**交通**が便利です。", "この まち は **こうつう** が べんり です。", "Transport is convenient in this town.", "N4", undefined, "コウ"],
        ["外国人と**交流**します。", "がいこくじん と **こうりゅう** します。", "I interact with people from other countries.", "N2", undefined, "コウ"],
        ["二本の道がここで**交わり**ます。", "にほん の みち が ここ で **まじわり**ます。", "The two roads intersect here.", "N1", undefined, "まじ.わる"],
        ["冗談を**交ぜ**ながら話しました。", "じょうだん を **まぜ**ながら はなしました。", "He talked while mixing in jokes.", "N1", undefined, "ま.ぜる"],
        ["朝、近所の人とあいさつを**交わし**ます。", "あさ、 きんじょ の ひと と あいさつ を **かわし**ます。", "In the morning I exchange greetings with my neighbors.", "N2", undefined, "か.わす"],
      ]),
      bk("郵", "N2", "mail", "ユウ", "", [
        ["**郵便局**で切手を買います。", "**ゆうびんきょく** で きって を かいます。", "I buy stamps at the post office.", "N4", undefined, "ユウ"],
        ["**郵便**が届きました。", "**ゆうびん** が とどきました。", "The mail arrived.", "N3", undefined, "ユウ"],
      ], [["郵送", "ゆうそう", "mailing", "N2", "書類を**郵送**します。", "I will send the documents by mail.", "しょるい を **ゆうそう** します。"]]),
    ],
  },
  {
    n: 70,
    note: "力 at the bottom",
    items: [
      bk("勇", "N2", "courage", "ユウ", "いさ.む いさ.ましい", [
        ["**勇気**を出して話しました。", "**ゆうき** を だして はなしました。", "I found the courage to speak.", "N3", undefined, "ユウ"],
        ["子どもたちは**勇んで**出かけました。", "こどもたち は **いさんで** でかけました。", "The children set off in high spirits.", "N1", undefined, "いさ.む"],
        ["みんなで**勇ましい**歌を歌いました。", "みんな で **いさましい** うた を うたいました。", "We all sang a rousing song.", "N2", undefined, "いさ.ましい"],
      ]),
      bk("募", "N2", "recruit, gather", "ボ", "つの.る", [
        ["アルバイトを**募集**しています。", "アルバイト を **ぼしゅう** して います。", "We are recruiting part-time staff.", "N2", undefined, "ボ"],
        ["今年は**応募者**が多いです。", "ことし は **おうぼしゃ** が おおい です。", "There are many applicants this year.", "N2", undefined, "ボ"],
        ["町のために寄付を**募り**ました。", "まち の ため に きふ を **つのり**ました。", "We collected donations for the town.", "N1", undefined, "つの.る"],
      ]),
      bk("勢", "N2", "force, energy", "セイ", "いきお.い", [
        ["公園に**大勢**の人がいます。", "こうえん に **おおぜい** の ひと が います。", "There are a lot of people in the park.", "N3", undefined, "セイ"],
        ["火の**勢い**が強いです。", "ひ の **いきおい** が つよい です。", "The fire's force is strong.", "N2", undefined, "いきお.い"],
      ], [["姿勢", "しせい", "attitude; posture", "N2", "**姿勢**をよくして座ります。", "I sit with good posture.", "**しせい** を よく して すわります。"]]),
    ],
  },
  {
    n: 71,
    note: "儿 legs at the bottom",
    items: [
      bk("兆", "N2", "trillion, sign", "チョウ", "きざ.し", [
        ["国の予算は**百兆**円です。", "くに の よさん は **ひゃくちょう** えん です。", "The national budget is 100 trillion yen.", "N2", undefined, "チョウ"],
        ["少しずつ春の**兆し**が見えてきました。", "すこし ずつ はる の **きざし** が みえて きました。", "Signs of spring have gradually begun to appear.", "N1", undefined, "きざ.し"],
      ]),
      bk("児", "N2", "child", "ジ ニ", "", [
        ["**児童**は無料です。", "**じどう** は むりょう です。", "Children get in free.", "N2", undefined, "ジ"],
        ["子どもを**小児科**に連れて行きました。", "こども を **しょうにか** に つれて いきました。", "I took my child to the pediatrician.", "N2", undefined, "ニ"],
      ], [["育児", "いくじ", "childcare, nursing", "N2", "**育児**は大変ですが楽しいです。", "Raising children is hard but fun.", "**いくじ** は たいへん です が たのしい です。"]]),
      bk("党", "N2", "party, faction", "トウ", "", [
        ["新しい**党**ができました。", "あたらしい **とう** が できました。", "A new party was formed.", "N2", undefined, "トウ"],
        ["新しい**政党**ができました。", "あたらしい **せいとう** が できました。", "A new political party was formed.", "N2", undefined, "トウ"],
      ], [["野党", "やとう", "opposition party", "N3", "**野党**が計画に反対しました。", "The opposition party opposed the plan.", "**やとう** が けいかく に はんたい しました。"]]),
      bk("兵", "N2", "soldier", "ヘイ ヒョウ", "", [
        ["門の前に**兵士**が立っています。", "もん の まえ に **へいし** が たって います。", "A soldier is standing in front of the gate.", "N2", undefined, "ヘイ"],
        ["昔、祖父は**兵隊**でした。", "むかし、 そふ は **へいたい** でした。", "Long ago, my grandfather was a soldier.", "N2", undefined, "ヘイ"],
        ["**兵庫県**に神戸という町があります。", "**ひょうごけん** に こうべ と いう まち が あります。", "There is a city called Kobe in Hyogo Prefecture.", undefined, undefined, "ヒョウ"],
      ]),
    ],
  },
  {
    n: 72,
    note: "阝 mound on the left",
    items: [
      bk("防", "N2", "prevent, defend", "ボウ", "ふせ.ぐ", [
        ["手を洗って病気を**予防**します。", "て を あらって びょうき を **よぼう** します。", "I wash my hands to prevent illness.", "N2", undefined, "ボウ"],
        ["火事を**防ぐ**ことが大切です。", "かじ を **ふせぐ** こと が たいせつ です。", "Preventing fires is important.", "N2", undefined, "ふせ.ぐ"],
      ], [
        ["消防署", "しょうぼうしょ", "fire station", "N2", "**消防署**は駅の近くです。", "The fire station is near the train station.", "**しょうぼうしょ** は えき の ちかく です。"],
        ["防止", "ぼうし", "prevention, check", "N2", "事故を**防止**します。", "We prevent accidents.", "じこ を **ぼうし** します。"],
        ["防犯", "ぼうはん", "prevention of crime", "N2", "店に**防犯**カメラがあります。", "The store has security cameras.", "みせ に **ぼうはん** カメラ が あります。"],
        ["消防", "しょうぼう", "fire fighting, fire department", "N3", "**消防**の人がすぐ来ました。", "The firefighters came right away.", "**しょうぼう** の ひと が すぐ きました。"],
        ["防災", "ぼうさい", "disaster prevention", "N2", "学校で**防災**の訓練をしました。", "We had a disaster drill at school.", "がっこう で **ぼうさい** の くんれん を しました。"],
      ]),
      bk("放", "N3", "release, let go", "ホウ", "はな.す はな.つ", [
        ["試合をテレビで**放送**しています。", "しあい を テレビ で **ほうそう** して います。", "The match is being broadcast on TV.", "N3", undefined, "ホウ"],
        ["鳥を空に**放し**ました。", "とり を そら に **はなし**ました。", "I released the bird into the sky.", "N2", undefined, "はな.す"],
        ["花がいい香りを**放って**います。", "はな が いい かおり を **はなって** います。", "The flowers give off a nice scent.", "N1", undefined, "はな.つ"],
      ]),
      bk("陸", "N2", "land", "リク", "", [
        ["飛行機が**着陸**しました。", "ひこうき が **ちゃくりく** しました。", "The plane landed.", "N2", undefined, "リク"],
        ["船から**陸**が見えます。", "ふね から **りく** が みえます。", "I can see land from the ship.", "N2", undefined, "リク"],
      ], [
        ["大陸", "たいりく", "continent", "N3", "いつか**大陸**を旅行したいです。", "I want to travel across a continent someday.", "いつか **たいりく** を りょこう したい です。"],
        ["陸上", "りくじょう", "on land; ground; track and field", "N2", "**陸上**の競技に出ます。", "I compete in track and field.", "**りくじょう** の きょうぎ に でます。"],
      ]),
      bk("隅", "N2", "corner, nook", "グウ", "すみ", [
        ["公園の**一隅**に小さな池があります。", "こうえん の **いちぐう** に ちいさな いけ が あります。", "There is a small pond in one corner of the park.", "N1", undefined, "グウ"],
        ["部屋の**隅**にいすを置きます。", "へや の **すみ** に いす を おきます。", "I put the chair in the corner of the room.", "N2", undefined, "すみ"],
      ]),
      bk("階", "N2", "floor, story, stairs", "カイ", "", [
        ["私の部屋は**三階**です。", "わたし の へや は **さんがい** です。", "My room is on the third floor.", "N5", undefined, "カイ"],
        ["**階段**を使ってください。", "**かいだん** を つかって ください。", "Please use the stairs.", "N4", undefined, "カイ"],
      ], [["段階", "だんかい", "gradation, grade, stage", "N2", "次の**段階**に進みます。", "We move on to the next stage.", "つぎ の **だんかい** に すすみます。"]]),
      bk("皆", "N3", "all, everyone", "カイ", "みな みんな", [
        ["この町では事故は**皆無**です。", "この まち で は じこ は **かいむ** です。", "There are no accidents at all in this town.", "N1", undefined, "カイ"],
        ["**皆さん**、おはようございます。", "**みなさん**、 おはよう ございます。", "Good morning, everyone.", "N4", undefined, "みな"],
        ["**皆**で食事をしました。", "**みんな** で しょくじ を しました。", "We all ate together.", "N4", undefined, "みんな"],
      ]),
    ],
  },
  {
    n: 73,
    note: "雨 crown on top",
    items: [
      bk("雲", "N2", "cloud", "ウン", "くも", [
        ["山の上から**雲海**が見えました。", "やま の うえ から **うんかい** が みえました。", "From the mountaintop we could see a sea of clouds.", "N1", undefined, "ウン"],
        ["空に白い**雲**があります。", "そら に しろい **くも** が あります。", "There are white clouds in the sky.", "N3", undefined, "くも"],
      ]),
      bk("曇", "N2", "cloudy", "ドン", "くも.る", [
        ["朝から**曇天**が続いています。", "あさ から **どんてん** が つづいて います。", "It has been overcast since morning.", "N1", undefined, "ドン"],
        ["今日は**曇り**です。", "きょう は **くもり** です。", "It's cloudy today.", "N4", undefined, "くも.る"],
      ]),
      bk("零", "N2", "zero", "レイ", "", [
        ["気温は**零度**です。", "きおん は **れいど** です。", "The temperature is zero degrees.", "N2", undefined, "レイ"],
        ["今朝は**零下**でした。", "けさ は **れいか** でした。", "It was below zero this morning.", "N2", undefined, "レイ"],
      ], [["零点", "れいてん", "zero, no marks", "N2", "テストで**零点**を取りました。", "I got a zero on the test.", "テスト で **れいてん** を とりました。"]]),
      bk("震", "N2", "quake, tremble", "シン", "ふる.える ふる.う", [
        ["昨日、**地震**がありました。", "きのう、 **じしん** が ありました。", "There was an earthquake yesterday.", "N4", undefined, "シン"],
        ["寒くて手が**震え**ます。", "さむくて て が **ふるえ**ます。", "My hands are shaking from the cold.", "N2", undefined, "ふる.える"],
        ["試合の前に**武者震い**がしました。", "しあい の まえ に **むしゃぶるい** が しました。", "I trembled with excitement before the match.", "N1", undefined, "ふる.う"],
      ]),
      bk("振", "N3", "shake, wave", "シン", "ふ.る", [
        ["電車が**振動**しています。", "でんしゃ が **しんどう** して います。", "The train is vibrating.", "N2", undefined, "シン"],
        ["駅で手を**振り**ました。", "えき で て を **ふり**ました。", "I waved at the station.", "N3", undefined, "ふ.る"],
      ]),
    ],
  },
  {
    n: 74,
    note: "立 on top",
    items: [
      bk("章", "N2", "chapter, badge", "ショウ", "", [
        ["**文章**を書くのが好きです。", "**ぶんしょう** を かく の が すき です。", "I like writing sentences.", "N3", undefined, "ショウ"],
        ["この本の**第一章**を読みました。", "この ほん の **だいいっしょう** を よみました。", "I read the first chapter of this book.", "N2", undefined, "ショウ"],
      ]),
      bk("音", "N5", "sound", "オン イン", "おと ね", [
        ["**音楽**が好きです。", "**おんがく** が すき です。", "I like music.", "N5", undefined, "オン"],
        ["日本語の**母音**は五つです。", "にほんご の **ぼいん** は いつつ です。", "Japanese has five vowels.", "N1", undefined, "イン"],
        ["大きな**音**がしました。", "おおきな **おと** が しました。", "There was a loud noise.", "N4", undefined, "おと"],
        ["彼はやっと**本音**を話しました。", "かれ は やっと **ほんね** を はなしました。", "He finally said what he really thought.", "N2", undefined, "ね"],
      ]),
      bk("童", "N2", "child", "ドウ", "わらべ", [
        ["子どもに**童話**を読みます。", "こども に **どうわ** を よみます。", "I read fairy tales to my child.", "N2", undefined, "ドウ"],
        ["公園で**児童**が遊んでいます。", "こうえん で **じどう** が あそんで います。", "Children are playing in the park.", "N2", undefined, "ドウ"],
        ["祖母が古い**童歌**を教えてくれました。", "そぼ が ふるい **わらべうた** を おしえて くれました。", "My grandmother taught me an old children's song.", "N1", undefined, "わらべ"],
      ]),
      bk("重", "N4", "heavy, important", "ジュウ チョウ", "おも.い かさ.ねる", [
        ["**重要**な話があります。", "**じゅうよう** な はなし が あります。", "I have something important to say.", "N3", undefined, "ジュウ"],
        ["**貴重**な経験をしました。", "**きちょう** な けいけん を しました。", "I had a valuable experience.", "N2", undefined, "チョウ"],
        ["この荷物は**重い**です。", "この にもつ は **おもい** です。", "This luggage is heavy.", "N5", undefined, "おも.い"],
        ["お皿を**重ねて**しまいます。", "おさら を **かさねて** しまいます。", "I stack the plates and put them away.", "N2", undefined, "かさ.ねる"],
      ]),
      bk("里", "N4", "village, hometown", "リ", "さと", [
        ["お正月に**郷里**へ帰ります。", "おしょうがつ に **きょうり** へ かえります。", "I go back to my hometown for New Year.", "N1", undefined, "リ"],
        ["母の**里**は九州です。", "はは の **さと** は きゅうしゅう です。", "My mother's hometown is Kyushu.", "N2", undefined, "さと"],
      ]),
      bk("競", "N2", "compete", "キョウ ケイ", "きそ.う せ.る", [
        ["二人は**競争**しています。", "ふたり は **きょうそう** して います。", "The two are competing.", "N3", undefined, "キョウ"],
        ["明日、学校で**競技会**があります。", "あした、 がっこう で **きょうぎかい** が あります。", "There's an athletic meet at school tomorrow.", "N2", undefined, "キョウ"],
        ["日曜に**競馬**を見に行きます。", "にちよう に **けいば** を み に いきます。", "I go to see horse racing on Sundays.", "N2", undefined, "ケイ"],
        ["二人は成績を**競って**います。", "ふたり は せいせき を **きそって** います。", "The two are competing for grades.", "N2", undefined, "きそ.う"],
        ["市場で魚が**競り**にかけられます。", "いちば で さかな が **せり** に かけられます。", "Fish are put up for auction at the market.", "N1", undefined, "せ.る"],
      ], [
        ["競馬", "けいば", "horse racing", "N2", "日曜に**競馬**を見に行きます。", "I go to see horse racing on Sundays.", "にちよう に **けいば** を み に いきます。"],
        ["競合", "きょうごう", "competition; rivalry", "N3", "二つの店が**競合**しています。", "The two stores are competing.", "ふたつ の みせ が **きょうごう** して います。"],
      ]),
      bk("辛", "N2", "spicy, painful", "シン", "から.い つら.い", [
        ["もう少しの**辛抱**です。", "もう すこし の **しんぼう** です。", "Just be patient a little longer.", "N2", undefined, "シン"],
        ["このカレーは**辛い**です。", "この カレー は **からい** です。", "This curry is spicy.", "N4", undefined, "から.い"],
        ["毎朝早く起きるのは**辛い**です。", "まいあさ はやく おきる の は **つらい** です。", "Getting up early every morning is hard.", "N3", undefined, "つら.い"],
      ]),
      bk("幸", "N3", "happiness, luck", "コウ", "しあわ.せ さいわ.い", [
        ["**幸運**を祈ります。", "**こううん** を いのります。", "I wish you good luck.", "N2", undefined, "コウ"],
        ["**幸せ**な家族です。", "**しあわせ** な かぞく です。", "It's a happy family.", "N3", undefined, "しあわ.せ"],
        ["**幸い**、けがはありませんでした。", "**さいわい**、 けが は ありません でした。", "Fortunately, no one was hurt.", "N2", undefined, "さいわ.い"],
      ]),
    ],
  },
  {
    n: 75,
    note: "奥 is 央 under a lid",
    items: [
      bk("央", "N2", "center", "オウ", "", [["部屋の**中央**にテーブルがあります。", "へや の **ちゅうおう** に テーブル が あります。", "There's a table in the center of the room.", "N2", undefined, "オウ"]]),
      bk("奥", "N2", "interior, depths", "オウ", "おく", [
        ["先生から茶道の**奥義**を学びました。", "せんせい から さどう の **おうぎ** を まなびました。", "I learned the secrets of the tea ceremony from my teacher.", "N1", undefined, "オウ"],
        ["店の**奥**に席があります。", "みせ の **おく** に せき が あります。", "There are seats at the back of the shop.", "N2", undefined, "おく"],
        ["**奥さん**によろしく伝えてください。", "**おくさん** に よろしく つたえて ください。", "Please say hello to your wife.", "N4", undefined, "おく"],
      ], [["奥底", "おくそこ", "depths; bottom (of one's heart)", "N2", "心の**奥底**でそう思っています。", "I think so deep down in my heart.", "こころ の **おくそこ** で そう おもって います。"]]),
    ],
  },
  {
    n: 76,
    note: "口 mouth, small",
    items: [
      bk("叫", "N2", "shout", "キョウ", "さけ.ぶ", [
        ["ジェットコースターでみんな**絶叫**しました。", "ジェットコースター で みんな **ぜっきょう** しました。", "Everyone screamed on the roller coaster.", "N1", undefined, "キョウ"],
        ["男の人が大きな声で**叫び**ました。", "おとこ の ひと が おおきな こえ で **さけび**ました。", "The man shouted in a loud voice.", "N2", undefined, "さけ.ぶ"],
      ]),
      bk("召", "N2", "summon, (honorific) eat", "ショウ", "め.す", [
        ["国会が**召集**されました。", "こっかい が **しょうしゅう** されました。", "The Diet was convened.", "N1", undefined, "ショウ"],
        ["どうぞ**召し上がって**ください。", "どうぞ **めしあがって** ください。", "Please help yourself.", "N3", undefined, "め.す"],
        ["お茶を**召し上がり**ますか。", "おちゃ を **めしあがり**ます か。", "Would you like to have some tea?", "N3", undefined, "め.す"],
      ]),
      bk("各", "N2", "each, every", "カク", "おのおの", [
        ["**各国**の代表が集まりました。", "**かっこく** の だいひょう が あつまりました。", "Representatives from each country gathered.", "N2", undefined, "カク"],
        ["**各自**で昼ご飯を持って来てください。", "**かくじ** で ひるごはん を もって きて ください。", "Please each bring your own lunch.", "N2", undefined, "カク"],
        ["**各々**が自分の意見を言いました。", "**おのおの** が じぶん の いけん を いいました。", "Each person gave their own opinion.", "N1", undefined, "おのおの"],
      ], [
        ["各地", "かくち", "various parts of the country", "N2", "**各地**から人が集まりました。", "People gathered from all over.", "**かくち** から ひと が あつまりました。"],
        ["各位", "かくい", "everyone; each and every one", "N2", "社員**各位**にお知らせします。", "This is a notice to all employees.", "しゃいん **かくい** に おしらせ します。"],
      ]),
      bk("含", "N2", "include, contain", "ガン", "ふく.む ふく.める", [
        ["この水は鉄分を多く**含有**しています。", "この みず は てつぶん を おおく **がんゆう** して います。", "This water contains a lot of iron.", "N1", undefined, "ガン"],
        ["この値段は税金を**含み**ます。", "この ねだん は ぜいきん を **ふくみ**ます。", "This price includes tax.", "N2", undefined, "ふく.む"],
        ["このジュースは砂糖を**含んで**います。", "この ジュース は さとう を **ふくんで** います。", "This juice contains sugar.", "N2", undefined, "ふく.む"],
        ["私を**含めて**五人が来ました。", "わたし を **ふくめて** ごにん が きました。", "Five people came, including me.", "N2", undefined, "ふく.める"],
      ], [["含める", "ふくめる", "to include", "N3", "税金を**含め**て計算します。", "I calculate it including tax.", "ぜいきん を **ふくめ**て けいさん します。"]]),
    ],
  },
  {
    n: 77,
    note: "口 mouth, in bigger shapes",
    items: [
      bk("周", "N2", "around, circumference", "シュウ", "まわ.り", [
        ["駅の**周辺**は店が多いです。", "えき の **しゅうへん** は みせ が おおい です。", "There are many shops in the area around the station.", "N2", undefined, "シュウ"],
        ["家の**周り**に花を植えました。", "いえ の **まわり** に はな を うえました。", "I planted flowers around the house.", "N3", undefined, "まわ.り"],
      ], [
        ["円周", "えんしゅう", "circumference", "N2", "**円周**の長さを測ります。", "I measure the circumference of the circle.", "**えんしゅう** の ながさ を はかります。"],
        ["周囲", "しゅうい", "surroundings, circumference, environs", "N3", "家の**周囲**に花を植えました。", "I planted flowers around the house.", "いえ の **しゅうい** に はな を うえました。"],
        ["周年", "しゅうねん", "whole year; -th anniversary", "N2", "会社は今年、十**周年**です。", "The company celebrates its tenth anniversary this year.", "かいしゃ は ことし、 じゅう **しゅうねん** です。"],
      ]),
      bk("咲", "N2", "bloom", "", "さ.く", [
        ["桜が**咲き**ました。", "さくら が **さき**ました。", "The cherry blossoms have bloomed.", "N3", undefined, "さ.く"],
        ["庭に赤い花が**咲いて**います。", "にわ に あかい はな が **さいて** います。", "Red flowers are blooming in the garden.", "N3", undefined, "さ.く"],
      ]),
      bk("喫", "N2", "consume (drink, smoke)", "キツ", "", [
        ["**喫茶店**でコーヒーを飲みました。", "**きっさてん** で コーヒー を のみました。", "I had coffee at a coffee shop.", "N3", undefined, "キツ"],
        ["ここは**喫煙**できません。", "ここ は **きつえん** できません。", "You can't smoke here.", "N2", undefined, "キツ"],
      ]),
      bk("史", "N2", "history", "シ", "", [["日本の**歴史**を勉強しています。", "にほん の **れきし** を べんきょう して います。", "I'm studying Japanese history.", "N3", undefined, "シ"]], [
        ["女史", "じょし", "Ms.", "N3", "田中**女史**が話しました。", "Ms. Tanaka spoke.", "たなか **じょし** が はなしました。"],
      ]),
    ],
  },
  {
    n: 78,
    note: "忄 heart on the left",
    items: [
      bk("快", "N2", "pleasant, cheerful", "カイ", "こころよ.い", [
        ["この部屋は広くて**快適**です。", "この へや は ひろくて **かいてき** です。", "This room is spacious and comfortable.", "N2", undefined, "カイ"],
        ["**快速**電車に乗ります。", "**かいそく** でんしゃ に のります。", "I take the rapid train.", "N2", undefined, "カイ"],
        ["先生は私の頼みを**快く**聞いてくれました。", "せんせい は わたし の たのみ を **こころよく** きいて くれました。", "My teacher gladly granted my request.", "N1", undefined, "こころよ.い"],
      ], [
        ["快晴", "かいせい", "good weather", "N2", "今日は**快晴**です。", "It's clear and sunny today.", "きょう は **かいせい** です。"],
        ["愉快", "ゆかい", "pleasant, happy", "N3", "昨日は**愉快**な話を聞きました。", "I heard an amusing story yesterday.", "きのう は **ゆかい** な はなし を ききました。"],
        ["不快", "ふかい", "displeasure; discomfort", "N2", "大きな音が**不快**です。", "Loud noises are unpleasant.", "おおきな おと が **ふかい** です。"],
        ["不愉快", "ふゆかい", "unpleasant; disagreeable", "N2", "昨日は**不愉快**な思いをしました。", "I had an unpleasant experience yesterday.", "きのう は **ふゆかい** な おもい を しました。"],
      ]),
      bk("悩", "N2", "worry, trouble", "ノウ", "なや.む なや.ます", [
        ["彼の顔には**苦悩**が見えました。", "かれ の かお に は **くのう** が みえました。", "Anguish showed on his face.", "N1", undefined, "ノウ"],
        ["仕事のことで**悩んで**います。", "しごと の こと で **なやんで** います。", "I'm troubled about work.", "N2", undefined, "なや.む"],
        ["一人で**悩ま**ないでください。", "ひとり で **なやま**ないで ください。", "Please don't worry alone.", "N2", undefined, "なや.む"],
        ["毎晩、騒音に**悩まされて**います。", "まいばん、 そうおん に **なやまされて** います。", "I'm bothered by noise every night.", "N2", undefined, "なや.ます"],
      ]),
      bk("憎", "N2", "hate", "ゾウ", "にく.む にく.い", [
        ["戦争は**憎悪**を生みます。", "せんそう は **ぞうお** を うみます。", "War breeds hatred.", "N1", undefined, "ゾウ"],
        ["私は彼を**憎んで**はいません。", "わたし は かれ を **にくんで** は いません。", "I don't hate him.", "N2", undefined, "にく.む"],
        ["**憎い**気持ちはもうありません。", "**にくい** きもち は もう ありません。", "I no longer have hateful feelings.", "N2", undefined, "にく.い"],
      ], [
        ["憎らしい", "にくらしい", "odious, hateful", "N2", "弟が**憎らしい**ことを言います。", "My little brother says spiteful things.", "おとうと が **にくらしい** こと を いいます。"],
        ["生憎", "あいにく", "unfortunately; sorry, but...", "N3", "**生憎**、店は休みでした。", "Unfortunately, the store was closed.", "**あいにく**、 みせ は やすみ でした。"],
      ]),
    ],
  },
  {
    n: 79,
    note: "心 sitting at the bottom",
    items: [
      bk("恋", "N2", "romantic love", "レン", "こい こい.しい", [
        ["二人は**恋愛**結婚です。", "ふたり は **れんあい** けっこん です。", "The two of them married for love.", "N2", undefined, "レン"],
        ["彼女は私の**恋人**です。", "かのじょ は わたし の **こいびと** です。", "She is my girlfriend.", "N3", undefined, "こい"],
        ["彼は**恋**をしています。", "かれ は **こい** を して います。", "He is in love.", "N3", undefined, "こい"],
        ["国の家族が**恋しい**です。", "くに の かぞく が **こいしい** です。", "I miss my family back home.", "N2", undefined, "こい.しい"],
      ], [
        ["恋しい", "こいしい", "dear, beloved; to miss", "N2", "国の料理が**恋しい**です。", "I miss the food of my home country.", "くに の りょうり が **こいしい** です。"],
        ["失恋", "しつれん", "broken heart, unrequited love", "N2", "友だちが**失恋**しました。", "My friend got his heart broken.", "ともだち が **しつれん** しました。"],
      ]),
      bk("患", "N2", "suffer from illness", "カン", "わずら.う", [
        ["病院に**患者**が大勢います。", "びょういん に **かんじゃ** が おおぜい います。", "There are many patients at the hospital.", "N2", undefined, "カン"],
        ["祖父は長く胸を**患って**いました。", "そふ は ながく むね を **わずらって** いました。", "My grandfather suffered from a chest illness for a long time.", "N1", undefined, "わずら.う"],
      ]),
    ],
  },
  {
    n: 80,
    note: "彳 on the left",
    items: [
      bk("律", "N2", "law, rhythm", "リツ リチ", "", [
        ["**法律**を守りましょう。", "**ほうりつ** を まもりましょう。", "Let's obey the law.", "N3", undefined, "リツ"],
        ["学校の**規律**を守ります。", "がっこう の **きりつ** を まもります。", "I follow the school rules.", "N1", undefined, "リツ"],
        ["彼はとても**律儀**な人です。", "かれ は とても **りちぎ** な ひと です。", "He is a very conscientious person.", "N1", undefined, "リチ"],
      ], [["自律", "じりつ", "autonomy; self-control", "N2", "**自律**した生活を送ります。", "I lead an independent life.", "**じりつ** した せいかつ を おくります。"]]),
      bk("復", "N2", "restore, return, again", "フク", "", [
        ["毎日、漢字を**復習**します。", "まいにち、 かんじ を **ふくしゅう** します。", "I review kanji every day.", "N4", undefined, "フク"],
        ["**往復**の切符を買いました。", "**おうふく** の きっぷ を かいました。", "I bought a round-trip ticket.", "N3", undefined, "フク"],
      ], [["回復", "かいふく", "recovery (from illness), rehabilitation, restoration", "N3", "病気から**回復**しました。", "I recovered from my illness.", "びょうき から **かいふく** しました。"]]),
    ],
  },
  {
    n: 81,
    note: "艹 grass, light",
    items: [
      bk("芸", "N2", "art, performance", "ゲイ", "", [
        ["彼は**芸術**が好きです。", "かれ は **げいじゅつ** が すき です。", "He likes art.", "N3", undefined, "ゲイ"],
        ["犬が上手に**芸**をしました。", "いぬ が じょうず に **げい** を しました。", "The dog did a trick well.", "N2", undefined, "ゲイ"],
      ], [
        ["園芸", "えんげい", "horticulture, gardening", "N2", "母の趣味は**園芸**です。", "My mother's hobby is gardening.", "はは の しゅみ は **えんげい** です。"],
        ["芸能", "げいのう", "public entertainment, performing arts", "N2", "**芸能**のニュースをよく見ます。", "I often watch entertainment news.", "**げいのう** の ニュース を よく みます。"],
        ["工芸", "こうげい", "industrial arts", "N2", "旅行先で**工芸**品を買いました。", "I bought handicrafts on my trip.", "りょこうさき で **こうげい** ひん を かいました。"],
        ["文芸", "ぶんげい", "literature, art and literature", "N2", "**文芸**の雑誌を読みます。", "I read a literary magazine.", "**ぶんげい** の ざっし を よみます。"],
      ]),
      bk("荒", "N2", "rough, wild", "コウ", "あら.い あ.れる", [
        ["戦争で町が**荒廃**しました。", "せんそう で まち が **こうはい** しました。", "The town was devastated by the war.", "N1", undefined, "コウ"],
        ["彼は言葉づかいが**荒い**です。", "かれ は ことばづかい が **あらい** です。", "He speaks roughly.", "N2", undefined, "あら.い"],
        ["今日は海が**荒れて**います。", "きょう は うみ が **あれて** います。", "The sea is rough today.", "N2", undefined, "あ.れる"],
        ["冬は手が**荒れ**ます。", "ふゆ は て が **あれ**ます。", "My hands get chapped in winter.", "N2", undefined, "あ.れる"],
      ], [["荒廃", "こうはい", "ruin", "N3", "戦争で町が**荒廃**しました。", "The town was devastated by the war.", "せんそう で まち が **こうはい** しました。"]]),
      bk("荷", "N2", "baggage, load", "カ", "に", [
        ["工場から商品を**出荷**します。", "こうじょう から しょうひん を **しゅっか** します。", "We ship the goods from the factory.", "N1", undefined, "カ"],
        ["**荷物**が重いです。", "**にもつ** が おもい です。", "The luggage is heavy.", "N4", undefined, "に"],
      ]),
    ],
  },
  {
    n: 82,
    note: "艹 grass, heavy",
    items: [
      bk("菓", "N2", "sweets, confectionery", "カ", "", [["**お菓子**を食べます。", "**おかし** を たべます。", "I eat sweets.", "N4", undefined, "カ"]]),
      bk("果", "N3", "fruit, result", "カ", "は.たす は.てる", [
        ["テストの**結果**を待っています。", "テスト の **けっか** を まって います。", "I'm waiting for the test results.", "N3", undefined, "カ"],
        ["約束を**果たし**ました。", "やくそく を **はたし**ました。", "I kept my promise.", "N2", undefined, "は.たす"],
        ["この道は**果て**しなく続いています。", "この みち は **はて**しなく つづいて います。", "This road goes on endlessly.", "N1", undefined, "は.てる"],
      ], [["果物", "くだもの", "fruit (special reading)", "N5", "**果物**をたくさん食べます。", "I eat a lot of fruit.", "**くだもの** を たくさん たべます。"]]),
      bk("菜", "N2", "vegetable, greens", "サイ", "な", [
        ["**野菜**をたくさん食べます。", "**やさい** を たくさん たべます。", "I eat a lot of vegetables.", "N4", undefined, "サイ"],
        ["春になると**菜の花**が咲きます。", "はる に なる と **なのはな** が さきます。", "Rapeseed flowers bloom in spring.", "N1", undefined, "な"],
      ]),
      bk("蒸", "N2", "steam", "ジョウ", "む.す む.れる", [
        ["やかんから**蒸気**が出ています。", "やかん から **じょうき** が でて います。", "Steam is coming out of the kettle.", "N2", undefined, "ジョウ"],
        ["野菜を**蒸し**ます。", "やさい を **むし**ます。", "I steam the vegetables.", "N2", undefined, "む.す"],
        ["今日は**蒸し暑い**です。", "きょう は **むしあつい** です。", "It's hot and humid today.", "N2", undefined, "む.す"],
        ["長く歩いて靴の中が**蒸れ**ました。", "ながく あるいて くつ の なか が **むれ**ました。", "After a long walk, it got stuffy inside my shoes.", "N1", undefined, "む.れる"],
      ], [
        ["蒸気", "じょうき", "steam, vapor", "N2", "やかんから**蒸気**が出ています。", "Steam is coming out of the kettle.", "やかん から **じょうき** が でて います。"],
        ["蒸発", "じょうはつ", "evaporation; unexplained disappearance", "N2", "皿の水が**蒸発**しました。", "The water in the dish evaporated.", "さら の みず が **じょうはつ** しました。"],
        ["水蒸気", "すいじょうき", "water vapor, steam", "N2", "窓が**水蒸気**で白いです。", "The window is white with steam.", "まど が **すいじょうき** で しろい です。"],
      ]),
      bk("薄", "N2", "thin, pale, weak", "ハク", "うす.い うす.める", [
        ["困っている人を見て帰るのは**薄情**です。", "こまって いる ひと を みて かえる の は **はくじょう** です。", "It's heartless to see someone in trouble and just go home.", "N1", undefined, "ハク"],
        ["この紙は**薄い**です。", "この かみ は **うすい** です。", "This paper is thin.", "N3", undefined, "うす.い"],
        ["部屋が少し**薄暗い**です。", "へや が すこし **うすぐらい** です。", "The room is a little dim.", "N2", undefined, "うす.い"],
        ["スープが濃いので水で**薄め**ました。", "スープ が こい ので みず で **うすめ**ました。", "The soup was strong, so I thinned it with water.", "N2", undefined, "うす.める"],
      ], [
        ["薄める", "うすめる", "to dilute, to water down", "N2", "ジュースを水で**薄め**ます。", "I dilute the juice with water.", "ジュース を みず で **うすめ**ます。"],
        ["薄れる", "うすれる", "to fade; to become dim", "N2", "昔の記憶が**薄れ**ました。", "Old memories have faded.", "むかし の きおく が **うすれ**ました。"],
      ]),
    ],
  },
  {
    n: 83,
    note: "車 vehicle",
    items: [
      bk("軍", "N2", "army, military", "グン", "", [
        ["彼は昔、**軍隊**にいました。", "かれ は むかし、 **ぐんたい** に いました。", "He was in the army long ago.", "N2", undefined, "グン"],
        ["**軍**の飛行機が飛んでいます。", "**ぐん** の ひこうき が とんで います。", "Military planes are flying.", "N2", undefined, "グン"],
      ]),
      bk("運", "N4", "carry, luck", "ウン", "はこ.ぶ", [
        ["車を**運転**します。", "くるま を **うんてん** します。", "I drive a car.", "N4", undefined, "ウン"],
        ["荷物を部屋に**運び**ます。", "にもつ を へや に **はこび**ます。", "I carry the luggage to the room.", "N4", undefined, "はこ.ぶ"],
      ]),
      bk("軟", "N2", "soft", "ナン", "やわ.らか やわ.らかい", [
        ["彼女は体が**柔軟**です。", "かのじょ は からだ が **じゅうなん** です。", "Her body is flexible.", "N1", undefined, "ナン"],
        ["この肉は**軟らか**で食べやすいです。", "この にく は **やわらか** で たべやすい です。", "This meat is tender and easy to eat.", "N2", undefined, "やわ.らか"],
        ["**軟らかい**ご飯が好きです。", "**やわらかい** ごはん が すき です。", "I like soft rice.", "N3", undefined, "やわ.らかい"],
      ], [["軟弱", "なんじゃく", "weakness; feebleness", "N2", "雨で地面が**軟弱**になりました。", "The ground became soft because of the rain.", "あめ で じめん が **なんじゃく** に なりました。"]]),
      bk("軽", "N2", "light (weight)", "ケイ", "かる.い", [
        ["危険を**軽視**してはいけません。", "きけん を **けいし** して は いけません。", "You must not make light of danger.", "N1", undefined, "ケイ"],
        ["このかばんは**軽い**です。", "この かばん は **かるい** です。", "This bag is light.", "N4", undefined, "かる.い"],
      ]),
      bk("輪", "N2", "ring, wheel, circle", "リン", "わ", [
        ["自転車の**車輪**が回ります。", "じてんしゃ の **しゃりん** が まわります。", "The bicycle's wheels are turning.", "N2", undefined, "リン"],
        ["**指輪**をもらいました。", "**ゆびわ** を もらいました。", "I received a ring.", "N3", undefined, "わ"],
        ["みんなで**輪**になりました。", "みんな で **わ** に なりました。", "We all formed a circle.", "N2", undefined, "わ"],
      ], [["車輪", "しゃりん", "(car) wheel", "N2", "自転車の**車輪**が回ります。", "The bicycle's wheels are turning.", "じてんしゃ の **しゃりん** が まわります。"]]),
      bk("論", "N3", "argument, theory", "ロン", "", [
        ["会議で**議論**しました。", "かいぎ で **ぎろん** しました。", "We debated at the meeting.", "N2", undefined, "ロン"],
        ["**論文**を書いています。", "**ろんぶん** を かいて います。", "I'm writing a paper.", "N2", undefined, "ロン"],
      ]),
      bk("輸", "N2", "transport, send", "ユ", "", [
        ["この車は外国から**輸入**しました。", "この くるま は がいこく から **ゆにゅう** しました。", "This car was imported from abroad.", "N3", undefined, "ユ"],
        ["日本は車を**輸出**しています。", "にほん は くるま を **ゆしゅつ** して います。", "Japan exports cars.", "N3", undefined, "ユ"],
      ], [
        ["輸血", "ゆけつ", "blood transfusion", "N2", "病院で**輸血**を受けました。", "I received a blood transfusion at the hospital.", "びょういん で **ゆけつ** を うけました。"],
        ["輸送", "ゆそう", "transport, transportation", "N2", "荷物をトラックで**輸送**します。", "We transport the cargo by truck.", "にもつ を トラック で **ゆそう** します。"],
      ]),
    ],
  },
];
