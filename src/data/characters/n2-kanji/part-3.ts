// N2 kanji book — groups 57–83 (kanji 237–353). See part-1.ts for the format.
import { bk, type BookGroup } from "../../builders.ts";

export const GROUPS: BookGroup[] = [
  {
    n: 57,
    note: "訁 speech, light right side",
    items: [
      bk("訓", "N2", "instruct, kun reading", "クン", "", [["今日は**訓練**があります。", "きょう は **くんれん** が あります。", "I have training today.", "N3"]]),
      bk("川", "N5", "river", "セン", "かわ", [["**川**で泳ぎました。", "**かわ** で およぎました。", "I swam in the river.", "N3"]]),
      bk("設", "N2", "establish, set up", "セツ", "もう.ける", [
        ["会社の**設備**は新しいです。", "かいしゃ の **せつび** は あたらしい です。", "The company's facilities are new.", "N3"],
        ["新しい駅を**建設**しています。", "あたらしい えき を **けんせつ** して います。", "They are building a new station.", "N3"],
      ], [
        ["設計", "せっけい", "plan, design", "N3", "今、家の**設計**をしています。", "I'm designing a house right now."],
        ["開設", "かいせつ", "establishment; opening; setting up", "N2", "新しい店を**開設**しました。", "We opened a new store."],
        ["設計者", "せっけいしゃ", "designer", "N2", "この橋の**設計者**は有名です。", "The designer of this bridge is famous."],
        ["設計図", "せっけいず", "plan; blueprint", "N2", "**設計図**を見ながら作ります。", "I build it while looking at the blueprint."],
        ["新設", "しんせつ", "establishing; founding; newly set up", "N2", "学校に**新設**のプールがあります。", "The school has a newly built pool."],
      ]),
      bk("役", "N3", "role, duty, use", "ヤク エキ", "", [
        ["これは**役に立つ**本です。", "これ は **やく に たつ** ほん です。", "This is a useful book.", "N3"],
        ["彼は大事な**役割**をしています。", "かれ は だいじ な **やくわり** を して います。", "He plays an important role.", "N3"],
      ]),
      bk("投", "N3", "throw", "トウ", "な.げる", [
        ["ボールを**投げ**ます。", "ボール を **なげ**ます。", "I throw the ball."],
        ["選挙で**投票**しました。", "せんきょ で **とうひょう** しました。", "I voted in the election.", "N3"],
      ]),
      bk("詞", "N2", "part of speech, words", "シ", "", [
        ["この歌の**歌詞**が好きです。", "この うた の **かし** が すき です。", "I like the lyrics of this song.", "N2"],
        ["「本」は**名詞**です。", "「ほん」 は **めいし** です。", "“Book” is a noun.", "N2"],
      ], [
        ["形容詞", "けいようし", "adjective", "N2", "「大きい」は**形容詞**です。", "\"Ookii\" is an adjective."],
        ["形容動詞", "けいようどうし", "adjectival noun, quasi-adjective", "N2", "「静か」は**形容動詞**です。", "\"Shizuka\" is a na-adjective."],
        ["台詞", "せりふ", "speech, words, one's lines", "N2", "役者が**台詞**を覚えます。", "The actor memorizes his lines."],
        ["代名詞", "だいめいし", "pronoun", "N2", "「これ」は**代名詞**です。", "\"Kore\" is a pronoun."],
        ["動詞", "どうし", "verb", "N3", "**動詞**の形を覚えます。", "I memorize verb forms."],
        ["助詞", "じょし", "(grammar) particle, postposition", "N3", "**助詞**の使い方が難しいです。", "Using particles is difficult."],
      ]),
      bk("詰", "N2", "pack, stuff, block", "キツ", "つ.める つ.まる", [
        ["かばんに服を**詰め**ます。", "かばん に ふく を **つめ**ます。", "I pack clothes into the bag.", "N3"],
        ["風邪で鼻が**詰まって**います。", "かぜ で はな が **つまって** います。", "My nose is blocked from a cold.", "N2"],
      ], [["見詰める", "みつめる", "to stare at, to gaze at", "N2", "彼はじっと私を**見詰め**ました。", "He stared at me intently."]]),
    ],
  },
  {
    n: 58,
    note: "訁 speech, heavy right side",
    items: [
      bk("誌", "N2", "magazine, record", "シ", "", [["電車で**雑誌**を読みます。", "でんしゃ で **ざっし** を よみます。", "I read a magazine on the train."]]),
      bk("課", "N2", "section, lesson, assign", "カ", "", [
        ["**課長**に話しました。", "**かちょう** に はなしました。", "I spoke to the section chief.", "N2"],
        ["今日の**課題**は難しいです。", "きょう の **かだい** は むずかしい です。", "Today's assignment is difficult.", "N2"],
      ], [
        ["課税", "かぜい", "taxation", "N2", "高い品物に**課税**されます。", "Expensive goods are taxed."],
        ["課程", "かてい", "course, curriculum", "N2", "大学の**課程**を終えました。", "I completed the university course."],
        ["日課", "にっか", "daily work, daily routine", "N2", "朝の散歩が私の**日課**です。", "A morning walk is part of my daily routine."],
        ["学生課", "がくせいか", "student affairs office", "N2", "**学生課**で書類をもらいます。", "I get the documents at the student affairs office."],
        ["放課後", "ほうかご", "after school", "N2", "**放課後**、友だちと遊びます。", "I play with my friends after school."],
        ["課する", "かする", "to levy; to impose; to assign", "N2", "会社が新しい仕事を**課し**ます。", "The company assigns a new job."],
      ]),
      bk("講", "N2", "lecture", "コウ", "", [
        ["大学で**講義**を受けます。", "だいがく で **こうぎ** を うけます。", "I attend lectures at university."],
        ["日本語の**講座**に申し込みました。", "にほんご の **こうざ** に もうしこみました。", "I signed up for a Japanese course.", "N2"],
      ], [
        ["休講", "きゅうこう", "lecture canceled", "N2", "今日の授業は**休講**です。", "Today's class is canceled."],
        ["講師", "こうし", "lecturer", "N2", "大学の**講師**になりました。", "I became a university lecturer."],
        ["講演", "こうえん", "lecture, talk", "N3", "有名な先生の**講演**を聞きました。", "I listened to a famous professor's lecture."],
        ["受講", "じゅこう", "taking (attending) lectures", "N2", "日本語の授業を**受講**します。", "I'm taking a Japanese class."],
      ]),
      bk("構", "N3", "structure, mind", "コウ", "かま.う かま.える", [
        ["建物の**構造**を調べます。", "たてもの の **こうぞう** を しらべます。", "I examine the building's structure.", "N2"],
        ["気にしなくても**構い**ません。", "き に しなくて も **かまい**ません。", "You don't have to worry about it.", "N3"],
      ]),
    ],
  },
  {
    n: 59,
    note: "貝 shell = money",
    items: [
      bk("貝", "N2", "shellfish, shell", "", "かい", [["海で**貝**を拾いました。", "うみ で **かい** を ひろいました。", "I picked up shells at the beach.", "N2"]]),
      bk("見", "N5", "see, look", "ケン", "み.る み.せる", [["昨日、映画を**見**ました。", "きのう、えいが を **み**ました。", "I watched a movie yesterday.", "N3"]]),
      bk("貨", "N2", "goods, currency", "カ", "", [
        ["この電車は**貨物**を運びます。", "この でんしゃ は **かもつ** を はこびます。", "This train carries freight.", "N2"],
        ["財布に**硬貨**がたくさんあります。", "さいふ に **こうか** が たくさん あります。", "There are a lot of coins in my wallet.", "N3"],
      ], [["通貨", "つうか", "currency", "N3", "この国の**通貨**は何ですか。", "What is this country's currency?"]]),
      bk("販", "N2", "sell", "ハン", "", [
        ["ここで切符を**販売**しています。", "ここ で きっぷ を **はんばい** して います。", "Tickets are sold here.", "N3"],
        ["**販売者**に連絡しました。", "はんばいしゃ に れんらく しました。", "I contacted the seller.", "N2"],
      ], [["通信販売", "つうしんはんばい", "mail order; online shopping", "N2", "**通信販売**で服を買います。", "I buy clothes by mail order."]]),
      bk("貯", "N2", "save, store", "チョ", "た.める た.まる", [
        ["毎月、少し**貯金**します。", "まいつき、すこし **ちょきん** します。", "I save a little every month.", "N3"],
        ["野菜を倉庫に**貯蔵**します。", "やさい を そうこ に ちょぞう します。", "We store the vegetables in a warehouse.", "N2"],
      ], [
        ["貯まる", "たまる", "to be saved up (of money)", "N3", "お金が少し**貯まり**ました。", "I've saved up a little money."],
        ["貯める", "ためる", "to save up (money)", "N3", "旅行のためにお金を**貯め**ます。", "I'm saving money for a trip."],
      ]),
      bk("貿", "N2", "trade", "ボウ", "", [["父は**貿易**の仕事をしています。", "ちち は **ぼうえき** の しごと を して います。", "My father works in trade."]]),
    ],
  },
  {
    n: 60,
    note: "貝 sitting at the bottom",
    items: [
      bk("賞", "N2", "prize, praise", "ショウ", "", [
        ["大会で**賞**をもらいました。", "たいかい で **しょう** を もらいました。", "I got a prize at the competition.", "N3"],
        ["静かな部屋で音楽を**鑑賞**します。", "しずか な へや で おんがく を かんしょう します。", "I enjoy music in a quiet room.", "N2"],
      ], [
        ["賞金", "しょうきん", "prize, monetary award", "N2", "大会で**賞金**をもらいました。", "I won prize money at the tournament."],
        ["賞品", "しょうひん", "prize, trophy", "N2", "一等の**賞品**は自転車です。", "The first prize is a bicycle."],
        ["受賞", "じゅしょう", "winning a prize", "N2", "彼はその映画で**受賞**しました。", "He won an award for that film."],
      ]),
      bk("賢", "N2", "wise, clever", "ケン", "かしこ.い", [["彼女はとても**賢い**です。", "かのじょ は とても **かしこい** です。", "She is very clever.", "N3"]]),
      bk("贈", "N2", "give (a gift)", "ゾウ ソウ", "おく.る", [
        ["友だちに**贈り物**をしました。", "ともだち に **おくりもの** を しました。", "I gave my friend a present.", "N3"],
        ["母の日に花を**贈り**ます。", "はは の ひ に はな を **おくり**ます。", "I'll give flowers on Mother's Day.", "N3"],
      ]),
      bk("増", "N3", "increase", "ゾウ", "ふ.える ふ.やす ま.す", [
        ["店の客が**増え**ました。", "みせ の きゃく が **ふえ**ました。", "The shop's customers have increased.", "N3"],
        ["人口が**増加**しています。", "じんこう が **ぞうか** して います。", "The population is growing.", "N3"],
      ]),
    ],
  },
  {
    n: 61,
    note: "釒 metal",
    items: [
      bk("針", "N2", "needle, hand (of a clock)", "シン", "はり", [
        ["**針**で指を刺しました。", "**はり** で ゆび を さしました。", "I pricked my finger with a needle.", "N3"],
        ["船の**針路**を変えます。", "ふね の しんろ を かえます。", "We change the ship's course.", "N2"],
      ], [
        ["針金", "はりがね", "wire", "N2", "**針金**で形を作ります。", "I make shapes with wire."],
        ["方針", "ほうしん", "objective, plan, policy", "N2", "会社の**方針**が変わりました。", "The company's policy has changed."],
      ]),
      bk("鈍", "N2", "dull, slow", "ドン", "にぶ.い", [["このナイフは**鈍い**です。", "この ナイフ は **にぶい** です。", "This knife is dull.", "N2"]]),
      bk("鉄", "N2", "iron", "テツ", "", [
        ["この門は**鉄**でできています。", "この もん は **てつ** で できて います。", "This gate is made of iron.", "N3"],
        ["**私鉄**で通勤しています。", "してつ で つうきん して います。", "I commute by private railway.", "N2"],
      ], [
        ["鉄橋", "てっきょう", "iron bridge", "N2", "電車が**鉄橋**を渡ります。", "The train crosses the railway bridge."],
        ["鉄砲", "てっぽう", "gun", "N2", "博物館で昔の**鉄砲**を見ました。", "I saw old guns at the museum."],
        ["鉄道", "てつどう", "railway; railroad", "N3", "**鉄道**で旅行するのが好きです。", "I like traveling by train."],
      ]),
      bk("鉱", "N2", "mineral, ore", "コウ", "", [
        ["山に古い**鉱山**があります。", "やま に ふるい **こうざん** が あります。", "There is an old mine in the mountain."],
        ["彼は**鉱物**を集めています。", "かれ は **こうぶつ** を あつめて います。", "He collects minerals.", "N2"],
      ]),
      bk("銅", "N2", "copper, bronze", "ドウ", "", [
        ["**銅**メダルを取りました。", "**どう** メダル を とりました。", "I won a bronze medal.", "N2"],
        ["古い**銅貨**を集めています。", "ふるい どうか を あつめて います。", "I collect old copper coins.", "N2"],
      ]),
      bk("銀", "N3", "silver", "ギン", "", [
        ["**銀行**でお金を下ろします。", "**ぎんこう** で おかね を おろします。", "I withdraw money at the bank.", "N3"],
        ["これは**銀**のスプーンです。", "これ は **ぎん** の スプーン です。", "This is a silver spoon.", "N3"],
      ]),
      bk("鋭", "N2", "sharp, keen", "エイ", "するど.い", [["このナイフは**鋭い**です。", "この ナイフ は **するどい** です。", "This knife is sharp.", "N3"]]),
      bk("録", "N2", "record", "ロク", "", [
        ["会議を**録音**します。", "かいぎ を **ろくおん** します。", "I'll record the meeting.", "N2"],
        ["新しい**記録**が出ました。", "あたらしい **きろく** が でました。", "A new record was set.", "N3"],
      ]),
    ],
  },
  {
    n: 62,
    note: "触 is 角 + 虫",
    items: [
      bk("角", "N2", "corner, angle, horn", "カク", "かど つの", [
        ["次の**角**を右に曲がってください。", "つぎ の **かど** を みぎ に まがって ください。", "Please turn right at the next corner.", "N3"],
        ["三角形の**角度**を測ります。", "さんかくけい の かくど を はかります。", "I measure the angles of the triangle.", "N2"],
      ], [
        ["四角い", "しかくい", "square", "N2", "**四角い**テーブルを買いました。", "I bought a square table."],
        ["折角", "せっかく", "with trouble, at great pains, long-awaited", "N2", "**折角**来たのに店は休みでした。", "I went all the way there, but the store was closed."],
        ["直角", "ちょっかく", "right angle", "N2", "ここで**直角**に曲がります。", "Turn at a right angle here."],
        ["方角", "ほうがく", "direction, way", "N2", "駅の**方角**が分かりません。", "I can't tell which direction the station is."],
        ["街角", "まちかど", "street corner", "N2", "**街角**で友だちに会いました。", "I ran into a friend on the street corner."],
        ["四つ角", "よつかど", "four corners, crossroads", "N2", "次の**四つ角**を右に曲がります。", "Turn right at the next intersection."],
        ["四角", "しかく", "square", "N3", "紙を**四角**に切ります。", "I cut the paper into a square."],
      ]),
      bk("用", "N5", "use, business", "ヨウ", "もち.いる", [
        ["今日は**用事**があります。", "きょう は **ようじ** が あります。", "I have something to do today."],
        ["この道具を**使用**します。", "この どうぐ を **しよう** します。", "I use this tool.", "N3"],
      ]),
      bk("触", "N2", "touch", "ショク", "ふ.れる さわ.る", [
        ["ここに**触ら**ないでください。", "ここ に **さわら**ないで ください。", "Please don't touch here."],
        ["犬に**触って**もいいですか。", "いぬ に **さわって** も いい です か。", "May I touch the dog?"],
      ], [
        ["触れる", "ふれる", "to touch, to feel, to violate", "N3", "展示品に**触れ**ないでください。", "Please do not touch the exhibits."],
        ["触れ合い", "ふれあい", "contact; connectedness; rapport", "N2", "人との**触れ合い**が好きです。", "I enjoy connecting with people."],
        ["触れ合う", "ふれあう", "to come into contact with; to touch each other", "N2", "手と手が**触れ合い**ました。", "Our hands touched."],
        ["目に触れる", "めにふれる", "to catch one's eye", "N2", "大事な物は**目に触れる**所に置きます。", "I keep important things where I can see them."],
      ]),
    ],
  },
  {
    n: 63,
    note: "亻 person, light right side",
    items: [
      bk("介", "N2", "mediate, introduce", "カイ", "", [
        ["友だちを母に**紹介**しました。", "ともだち を はは に **しょうかい** しました。", "I introduced my friend to my mother."],
        ["祖母の**介護**をしています。", "そぼ の **かいご** を して います。", "I take care of my grandmother.", "N2"],
      ], [
        ["厄介", "やっかい", "trouble, burden, care", "N3", "**厄介**な仕事を頼まれました。", "I was asked to do a troublesome job."],
        ["介護施設", "かいごしせつ", "nursing home", "N2", "祖父は今、**介護施設**にいます。", "My grandfather is in a nursing home now."],
      ]),
      bk("仏", "N2", "Buddha", "ブツ", "ほとけ", [
        ["日本には**仏教**のお寺が多いです。", "にほん には **ぶっきょう** の おてら が おおい です。", "There are many Buddhist temples in Japan.", "N3"],
        ["大きな**仏**の像を見ました。", "おおきな **ほとけ** の ぞう を みました。", "I saw a big statue of Buddha.", "N3"],
      ]),
      bk("令", "N2", "order, command", "レイ", "", [["それは社長の**命令**です。", "それ は しゃちょう の **めいれい** です。", "That's the president's order.", "N3"]]),
      bk("仲", "N2", "relationship, go-between", "チュウ", "なか", [
        ["二人はとても**仲**がいいです。", "ふたり は とても **なか** が いい です。", "The two get along very well.", "N3"],
        ["兄と**仲直り**しました。", "あに と **なかなおり** しました。", "I made up with my older brother.", "N2"],
      ], [
        ["仲良し", "なかよし", "intimate friend, bosom buddy", "N2", "あの二人は**仲良し**です。", "Those two are good friends."],
        ["仲間", "なかま", "company, fellow, colleague", "N3", "仕事の**仲間**と食事をします。", "I have dinner with my coworkers."],
      ]),
      bk("伸", "N2", "stretch, grow", "シン", "の.びる の.ばす", [
        ["髪が**伸び**ました。", "かみ が **のび**ました。", "My hair has grown.", "N3"],
        ["朝、体を**伸ばし**ます。", "あさ、からだ を **のばし**ます。", "I stretch my body in the morning.", "N3"],
      ]),
      bk("伺", "N2", "visit, ask (humble)", "シ", "うかが.う", [
        ["明日、お宅に**伺い**ます。", "あした、おたく に **うかがい**ます。", "I will visit your home tomorrow.", "N3"],
        ["一つ**伺って**もいいですか。", "ひとつ **うかがって** も いい です か。", "May I ask you one thing?", "N3"],
      ]),
    ],
  },
  {
    n: 64,
    note: "亻 person, boxy right side",
    items: [
      bk("依", "N2", "depend on, request", "イ エ", "", [
        ["会社に仕事を**依頼**しました。", "かいしゃ に しごと を **いらい** しました。", "I requested the job from the company.", "N3"],
        ["天気は**依然**として悪いです。", "てんき は いぜん として わるい です。", "The weather is still bad.", "N2"],
      ]),
      bk("個", "N2", "individual, counter for things", "コ", "", [
        ["りんごを三**個**買いました。", "りんご を さん**こ** かいました。", "I bought three apples.", "N2"],
        ["これは**個人**の意見です。", "これ は **こじん** の いけん です。", "This is a personal opinion.", "N2"],
      ], [
        ["個体", "こたい", "an individual", "N2", "一つ一つの**個体**を調べます。", "We examine each individual one by one."],
        ["個人差", "こじんさ", "individual differences", "N2", "覚える速さには**個人差**があります。", "How quickly people memorize varies from person to person."],
      ]),
      bk("倍", "N2", "double, times", "バイ", "", [
        ["値段が二**倍**になりました。", "ねだん が に**ばい** に なりました。", "The price doubled."],
        ["去年より客が**倍増**しました。", "きょねん より きゃく が ばいぞう しました。", "Customers doubled compared with last year.", "N2"],
      ]),
      bk("停", "N2", "stop, halt", "テイ", "", [
        ["バス**停**で待ちます。", "バス**てい** で まちます。", "I wait at the bus stop."],
        ["電車が急に**停止**しました。", "でんしゃ が きゅう に **ていし** しました。", "The train stopped suddenly.", "N2"],
      ], [
        ["停車", "ていしゃ", "stopping (e.g., train)", "N2", "電車が次の駅に**停車**します。", "The train stops at the next station."],
        ["停電", "ていでん", "power outage, electricity outage, blackout", "N2", "台風で**停電**しました。", "The power went out because of the typhoon."],
        ["停留所", "ていりゅうじょ", "bus or tram stop", "N3", "バスの**停留所**で待ちます。", "I wait at the bus stop."],
      ]),
    ],
  },
  {
    n: 65,
    note: "象 hides inside 像",
    items: [
      bk("傾", "N2", "lean, tilt, tendency", "ケイ", "かたむ.く かたむ.ける", [
        ["壁の絵が**傾いて**います。", "かべ の え が **かたむいて** います。", "The picture on the wall is tilted.", "N2"],
        ["最近、値段が上がる**傾向**があります。", "さいきん、ねだん が あがる **けいこう** が あります。", "Lately there's a tendency for prices to rise.", "N2"],
      ], [["傾らか", "なだらか", "gradual, gentle", "N2", "**傾らか**な坂をゆっくり上ります。", "I slowly walk up the gentle slope."]]),
      bk("像", "N2", "statue, image", "ゾウ", "", [
        ["公園に大きな**像**があります。", "こうえん に おおきな **ぞう** が あります。", "There is a big statue in the park.", "N3"],
        ["そんなことは**想像**もできません。", "そんな こと は **そうぞう** も できません。", "I can't even imagine such a thing.", "N3"],
      ]),
      bk("象", "N2", "elephant, phenomenon", "ショウ ゾウ", "", [
        ["動物園で**象**を見ました。", "どうぶつえん で **ぞう** を みました。", "I saw an elephant at the zoo.", "N3"],
        ["彼の第一**印象**はよかったです。", "かれ の だいいち **いんしょう** は よかった です。", "My first impression of him was good.", "N3"],
      ], [
        ["抽象", "ちゅうしょう", "abstract", "N2", "先生が**抽象**の意味を教えました。", "The teacher explained the meaning of \"abstract.\""],
        ["現象", "げんしょう", "phenomenon", "N3", "珍しい**現象**を見ました。", "I saw an unusual phenomenon."],
        ["対象", "たいしょう", "target; object (of study, etc.); subject", "N3", "子どもを**対象**にした本です。", "This is a book aimed at children."],
        ["対象外", "たいしょうがい", "not covered by; not subject to", "N2", "この商品は割引の**対象外**です。", "This item is not eligible for the discount."],
      ]),
      bk("億", "N2", "hundred million", "オク", "", [["日本の人口は一**億**人以上です。", "にほん の じんこう は いち**おく**にん いじょう です。", "Japan's population is over one hundred million."]]),
    ],
  },
  {
    n: 66,
    note: "普 is 並 with 日 under it",
    items: [
      bk("並", "N2", "line up, row, ordinary", "ヘイ", "なら.ぶ なら.べる なみ", [
        ["店の前に人が**並んで**います。", "みせ の まえ に ひと が **ならんで** います。", "People are lined up in front of the shop.", "N3"],
        ["本を棚に**並べ**ました。", "ほん を たな に **ならべ**ました。", "I arranged the books on the shelf.", "N3"],
      ], [
        ["並木", "なみき", "roadside tree, row of trees", "N2", "駅までの**並木**がきれいです。", "The row of trees leading to the station is beautiful."],
        ["並行", "へいこう", "(going) side by side, concurrent, at the same time", "N2", "二本の道が**並行**しています。", "The two roads run parallel."],
        ["町並み", "まちなみ", "townscape; row of stores and houses", "N2", "古い**町並み**が残っています。", "The old townscape still remains."],
      ]),
      bk("普", "N2", "universal, general", "フ", "", [
        ["**普通**の電車に乗ります。", "**ふつう** の でんしゃ に のります。", "I take the local train."],
        ["スマホが世界中に**普及**しました。", "スマホ が せかいじゅう に ふきゅう しました。", "Smartphones have spread worldwide.", "N2"],
      ], [["普段", "ふだん", "in everyday situations, usually, ordinarily", "N3", "**普段**は八時に起きます。", "I usually get up at eight."]]),
    ],
  },
  {
    n: 67,
    note: "刂 blade on the right",
    items: [
      bk("刷", "N2", "print", "サツ", "す.る", [["書類を**印刷**します。", "しょるい を **いんさつ** します。", "I print the documents.", "N3"]]),
      bk("刺", "N2", "pierce, sting", "シ", "さ.す さ.さる", [
        ["蚊に**刺され**ました。", "か に **さされ**ました。", "I got bitten by a mosquito.", "N2"],
        ["**刺身**が好きです。", "**さしみ** が すき です。", "I like sashimi.", "N2"],
      ], [
        ["名刺", "めいし", "business card", "N2", "会議で**名刺**を交換しました。", "We exchanged business cards at the meeting."],
        ["刺激", "しげき", "stimulus, impetus, incentive", "N3", "新しい仕事は**刺激**があります。", "My new job is stimulating."],
      ]),
      bk("則", "N2", "rule, law", "ソク", "", [
        ["学校の**規則**を守ります。", "がっこう の **きそく** を まもります。", "I follow the school rules."],
        ["生活が**不規則**になりました。", "せいかつ が ふきそく に なりました。", "My daily routine became irregular.", "N2"],
      ], [["法則", "ほうそく", "law, rule", "N2", "自然の**法則**を学びます。", "I study the laws of nature."]]),
      bk("副", "N2", "vice-, secondary", "フク", "", [
        ["彼は**副社長**です。", "かれ は **ふくしゃちょう** です。", "He is the vice president.", "N2"],
        ["この薬は**副作用**が少ないです。", "この くすり は **ふくさよう** が すくない です。", "This medicine has few side effects.", "N2"],
      ], [["副詞", "ふくし", "adverb", "N2", "「とても」は**副詞**です。", "\"Totemo\" is an adverb."]]),
      bk("劇", "N2", "drama, play", "ゲキ", "", [
        ["昨日、**劇**を見に行きました。", "きのう、**げき** を み に いきました。", "I went to see a play yesterday.", "N3"],
        ["大学で**演劇**をしています。", "だいがく で えんげき を して います。", "I do theatre at university.", "N2"],
      ], [
        ["劇場", "げきじょう", "theater, playhouse", "N3", "**劇場**で映画を見ました。", "I watched a movie at the theater."],
        ["悲劇", "ひげき", "tragedy", "N3", "**悲劇**の物語を読みました。", "I read a tragic story."],
        ["劇的", "げきてき", "dramatic; exciting", "N2", "試合は**劇的**に終わりました。", "The game ended dramatically."],
      ]),
    ],
  },
  {
    n: 68,
    note: "identical tops",
    items: [
      bk("券", "N2", "ticket", "ケン", "", [
        ["**入場券**を買いました。", "**にゅうじょうけん** を かいました。", "I bought an admission ticket.", "N3"],
        ["この**券**は今日まで使えます。", "この **けん** は きょう まで つかえます。", "This voucher is valid until today.", "N3"],
      ], [
        ["回数券", "かいすうけん", "book of tickets", "N2", "**回数券**を買うと安いです。", "Buying a book of tickets is cheaper."],
        ["定期券", "ていきけん", "commuter pass, season ticket", "N2", "電車の**定期券**をなくしました。", "I lost my train commuter pass."],
      ]),
      bk("巻", "N2", "roll, wind, volume", "カン", "ま.く まき", [
        ["首にマフラーを**巻き**ます。", "くび に マフラー を **まき**ます。", "I wrap a scarf around my neck.", "N2"],
        ["お風呂の後、**寝巻**に着替えます。", "おふろ の あと、ねまき に きがえます。", "After the bath I change into pyjamas.", "N2"],
      ], [["巻き込む", "まきこむ", "to roll up; to involve; to drag into", "N2", "事故に**巻き込まれ**ました。", "I got caught up in an accident."]]),
    ],
  },
  {
    n: 69,
    note: "交 shapes and 阝 on the right",
    items: [
      bk("効", "N2", "effect, work", "コウ", "き.く", [
        ["この薬はよく**効き**ます。", "この くすり は よく **きき**ます。", "This medicine works well.", "N3"],
        ["毎日の運動の**効果**がありました。", "まいにち の うんどう の **こうか** が ありました。", "The daily exercise had an effect.", "N3"],
      ], [
        ["効力", "こうりょく", "effect, efficacy", "N2", "この薬は**効力**が強いです。", "This medicine is very potent."],
        ["有効", "ゆうこう", "valid, effectual", "N3", "この切符は今日まで**有効**です。", "This ticket is valid until today."],
        ["効用", "こうよう", "use; utility; effect", "N2", "毎日の運動の**効用**は大きいです。", "Daily exercise has great benefits."],
        ["特効薬", "とっこうやく", "specific medicine; wonder drug", "N2", "風邪の**特効薬**はありません。", "There is no cure-all for colds."],
      ]),
      bk("郊", "N2", "suburbs, outskirts", "コウ", "", [["**郊外**に住んでいます。", "**こうがい** に すんで います。", "I live in the suburbs."]]),
      bk("交", "N4", "mix, exchange, cross", "コウ", "まじ.わる ま.ぜる か.わす", [
        ["この町は**交通**が便利です。", "この まち は **こうつう** が べんり です。", "Transport is convenient in this town."],
        ["外国人と**交流**します。", "がいこくじん と **こうりゅう** します。", "I interact with people from other countries.", "N2"],
      ]),
      bk("郵", "N2", "mail", "ユウ", "", [
        ["**郵便局**で切手を買います。", "**ゆうびんきょく** で きって を かいます。", "I buy stamps at the post office.", "N3"],
        ["**郵便**が届きました。", "**ゆうびん** が とどきました。", "The mail arrived.", "N3"],
      ], [["郵送", "ゆうそう", "mailing", "N2", "書類を**郵送**します。", "I will send the documents by mail."]]),
    ],
  },
  {
    n: 70,
    note: "力 at the bottom",
    items: [
      bk("勇", "N2", "courage", "ユウ", "いさ.む いさ.ましい", [
        ["**勇気**を出して話しました。", "**ゆうき** を だして はなしました。", "I found the courage to speak.", "N3"],
        ["みんなで**勇ましい**歌を歌いました。", "みんな で いさましい うた を うたいました。", "We all sang a rousing song.", "N2"],
      ]),
      bk("募", "N2", "recruit, gather", "ボ", "つの.る", [
        ["アルバイトを**募集**しています。", "アルバイト を **ぼしゅう** して います。", "We are recruiting part-time staff.", "N2"],
        ["今年は**応募者**が多いです。", "ことし は おうぼしゃ が おおい です。", "There are many applicants this year.", "N2"],
      ]),
      bk("勢", "N2", "force, energy", "セイ", "いきお.い", [
        ["公園に**大勢**の人がいます。", "こうえん に **おおぜい** の ひと が います。", "There are a lot of people in the park.", "N3"],
        ["火の**勢い**が強いです。", "ひ の **いきおい** が つよい です。", "The fire's force is strong.", "N3"],
      ], [["姿勢", "しせい", "attitude; posture", "N2", "**姿勢**をよくして座ります。", "I sit with good posture."]]),
    ],
  },
  {
    n: 71,
    note: "儿 legs at the bottom",
    items: [
      bk("兆", "N2", "trillion, sign", "チョウ", "きざ.し", [["国の予算は百**兆**円です。", "くに の よさん は ひゃく**ちょう**えん です。", "The national budget is 100 trillion yen.", "N2"]]),
      bk("児", "N2", "child", "ジ ニ", "", [
        ["**児童**は無料です。", "**じどう** は むりょう です。", "Children get in free.", "N2"],
        ["子どもを**小児科**に連れて行きました。", "こども を **しょうにか** に つれて いきました。", "I took my child to the pediatrician.", "N2"],
      ], [["育児", "いくじ", "childcare, nursing", "N2", "**育児**は大変ですが楽しいです。", "Raising children is hard but fun."]]),
      bk("党", "N2", "party, faction", "トウ", "", [
        ["新しい**党**ができました。", "あたらしい **とう** が できました。", "A new party was formed.", "N3"],
        ["新しい**政党**ができました。", "あたらしい せいとう が できました。", "A new political party was formed.", "N2"],
      ], [["野党", "やとう", "opposition party", "N3", "**野党**が計画に反対しました。", "The opposition party opposed the plan."]]),
      bk("兵", "N2", "soldier", "ヘイ ヒョウ", "", [
        ["門の前に**兵士**が立っています。", "もん の まえ に **へいし** が たって います。", "A soldier is standing in front of the gate."],
        ["昔、祖父は**兵隊**でした。", "むかし、そふ は **へいたい** でした。", "Long ago, my grandfather was a soldier.", "N2"],
      ]),
    ],
  },
  {
    n: 72,
    note: "阝 mound on the left",
    items: [
      bk("防", "N2", "prevent, defend", "ボウ", "ふせ.ぐ", [
        ["手を洗って病気を**予防**します。", "て を あらって びょうき を **よぼう** します。", "I wash my hands to prevent illness.", "N2"],
        ["火事を**防ぐ**ことが大切です。", "かじ を **ふせぐ** こと が たいせつ です。", "Preventing fires is important.", "N2"],
      ], [
        ["消防署", "しょうぼうしょ", "fire station", "N2", "**消防署**は駅の近くです。", "The fire station is near the train station."],
        ["防止", "ぼうし", "prevention, check", "N2", "事故を**防止**します。", "We prevent accidents."],
        ["防犯", "ぼうはん", "prevention of crime", "N2", "店に**防犯**カメラがあります。", "The store has security cameras."],
        ["消防", "しょうぼう", "fire fighting, fire department", "N3", "**消防**の人がすぐ来ました。", "The firefighters came right away."],
        ["防災", "ぼうさい", "disaster prevention", "N2", "学校で**防災**の訓練をしました。", "We had a disaster drill at school."],
      ]),
      bk("放", "N3", "release, let go", "ホウ", "はな.す はな.つ", [
        ["試合をテレビで**放送**しています。", "しあい を テレビ で **ほうそう** して います。", "The match is being broadcast on TV.", "N2"],
        ["鳥を空に**放し**ました。", "とり を そら に **はなし**ました。", "I released the bird into the sky.", "N2"],
      ]),
      bk("陸", "N2", "land", "リク", "", [
        ["飛行機が**着陸**しました。", "ひこうき が **ちゃくりく** しました。", "The plane landed.", "N3"],
        ["船から**陸**が見えます。", "ふね から **りく** が みえます。", "I can see land from the ship.", "N3"],
      ], [
        ["大陸", "たいりく", "continent", "N3", "いつか**大陸**を旅行したいです。", "I want to travel across a continent someday."],
        ["陸上", "りくじょう", "on land; ground; track and field", "N2", "**陸上**の競技に出ます。", "I compete in track and field."],
      ]),
      bk("隅", "N2", "corner, nook", "グウ", "すみ", [["部屋の**隅**にいすを置きます。", "へや の **すみ** に いす を おきます。", "I put the chair in the corner of the room.", "N2"]]),
      bk("階", "N2", "floor, story, stairs", "カイ", "", [
        ["私の部屋は三**階**です。", "わたし の へや は さん**がい** です。", "My room is on the third floor."],
        ["**階段**を使ってください。", "**かいだん** を つかって ください。", "Please use the stairs."],
      ], [["段階", "だんかい", "gradation, grade, stage", "N2", "次の**段階**に進みます。", "We move on to the next stage."]]),
      bk("皆", "N3", "all, everyone", "カイ", "みな みんな", [
        ["**皆**で食事をしました。", "**みんな** で しょくじ を しました。", "We all ate together.", "N3"],
        ["**皆さん**、おはようございます。", "**みなさん**、おはよう ございます。", "Good morning, everyone.", "N3"],
      ]),
    ],
  },
  {
    n: 73,
    note: "雨 crown on top",
    items: [
      bk("雲", "N2", "cloud", "ウン", "くも", [["空に白い**雲**があります。", "そら に しろい **くも** が あります。", "There are white clouds in the sky."]]),
      bk("曇", "N2", "cloudy", "ドン", "くも.る", [["今日は**曇り**です。", "きょう は **くもり** です。", "It's cloudy today.", "N3"]]),
      bk("零", "N2", "zero", "レイ", "", [
        ["気温は**零度**です。", "きおん は **れいど** です。", "The temperature is zero degrees."],
        ["今朝は**零下**でした。", "けさ は **れいか** でした。", "It was below zero this morning."],
      ], [["零点", "れいてん", "zero, no marks", "N2", "テストで**零点**を取りました。", "I got a zero on the test."]]),
      bk("震", "N2", "quake, tremble", "シン", "ふる.える ふる.う", [
        ["昨日、**地震**がありました。", "きのう、**じしん** が ありました。", "There was an earthquake yesterday."],
        ["寒くて手が**震え**ます。", "さむくて て が **ふるえ**ます。", "My hands are shaking from the cold.", "N3"],
      ]),
      bk("振", "N3", "shake, wave", "シン", "ふ.る", [
        ["駅で手を**振り**ました。", "えき で て を **ふり**ました。", "I waved at the station.", "N2"],
        ["電車が**振動**しています。", "でんしゃ が **しんどう** して います。", "The train is vibrating.", "N2"],
      ]),
    ],
  },
  {
    n: 74,
    note: "立 on top",
    items: [
      bk("章", "N2", "chapter, badge", "ショウ", "", [
        ["**文章**を書くのが好きです。", "**ぶんしょう** を かく の が すき です。", "I like writing sentences.", "N3"],
        ["この本の第一**章**を読みました。", "この ほん の だいいっ**しょう** を よみました。", "I read the first chapter of this book.", "N3"],
      ]),
      bk("音", "N5", "sound", "オン イン", "おと ね", [
        ["大きな**音**がしました。", "おおきな **おと** が しました。", "There was a loud noise.", "N3"],
        ["**音楽**が好きです。", "**おんがく** が すき です。", "I like music.", "N3"],
      ]),
      bk("童", "N2", "child", "ドウ", "わらべ", [
        ["子どもに**童話**を読みます。", "こども に **どうわ** を よみます。", "I read fairy tales to my child.", "N2"],
        ["子どもと**童謡**を歌います。", "こども と どうよう を うたいます。", "I sing nursery rhymes with my child.", "N3"],
      ]),
      bk("重", "N4", "heavy, important", "ジュウ チョウ", "おも.い かさ.ねる", [
        ["この荷物は**重い**です。", "この にもつ は **おもい** です。", "This luggage is heavy.", "N2"],
        ["**重要**な話があります。", "**じゅうよう** な はなし が あります。", "I have something important to say.", "N2"],
      ]),
      bk("里", "N4", "village, hometown", "リ", "さと", [["母の**里**は九州です。", "はは の **さと** は きゅうしゅう です。", "My mother's hometown is Kyushu."]]),
      bk("競", "N2", "compete", "キョウ ケイ", "きそ.う せ.る", [
        ["二人は**競争**しています。", "ふたり は **きょうそう** して います。", "The two are competing.", "N2"],
        ["明日、学校で**競技会**があります。", "あした、がっこう で **きょうぎかい** が あります。", "There's an athletic meet at school tomorrow.", "N2"],
      ], [
        ["競馬", "けいば", "horse racing", "N2", "日曜に**競馬**を見に行きます。", "I go to see horse racing on Sundays."],
        ["競合", "きょうごう", "competition; rivalry", "N3", "二つの店が**競合**しています。", "The two stores are competing."],
      ]),
      bk("辛", "N2", "spicy, painful", "シン", "から.い つら.い", [["このカレーは**辛い**です。", "この カレー は **からい** です。", "This curry is spicy.", "N2"]]),
      bk("幸", "N3", "happiness, luck", "コウ", "しあわ.せ さいわ.い", [
        ["**幸せ**な家族です。", "**しあわせ** な かぞく です。", "It's a happy family.", "N3"],
        ["**幸運**を祈ります。", "**こううん** を いのります。", "I wish you good luck.", "N3"],
      ]),
    ],
  },
  {
    n: 75,
    note: "奥 is 央 under a lid",
    items: [
      bk("央", "N2", "center", "オウ", "", [["部屋の**中央**にテーブルがあります。", "へや の **ちゅうおう** に テーブル が あります。", "There's a table in the center of the room.", "N3"]]),
      bk("奥", "N2", "interior, depths", "オウ", "おく", [
        ["店の**奥**に席があります。", "みせ の **おく** に せき が あります。", "There are seats at the back of the shop.", "N3"],
        ["**奥さん**によろしく伝えてください。", "**おくさん** に よろしく つたえて ください。", "Please say hello to your wife.", "N3"],
      ], [["奥底", "おくそこ", "depths; bottom (of one's heart)", "N2", "心の**奥底**でそう思っています。", "I think so deep down in my heart."]]),
    ],
  },
  {
    n: 76,
    note: "口 mouth, small",
    items: [
      bk("叫", "N2", "shout", "キョウ", "さけ.ぶ", [["男の人が大きな声で**叫び**ました。", "おとこ の ひと が おおきな こえ で **さけび**ました。", "The man shouted in a loud voice.", "N3"]]),
      bk("召", "N2", "summon, (honorific) eat", "ショウ", "め.す", [
        ["どうぞ**召し上がって**ください。", "どうぞ **めしあがって** ください。", "Please help yourself."],
        ["お茶を**召し上がり**ますか。", "おちゃ を **めしあがり**ます か。", "Would you like to have some tea?"],
      ]),
      bk("各", "N2", "each, every", "カク", "おのおの", [
        ["**各国**の代表が集まりました。", "**かっこく** の だいひょう が あつまりました。", "Representatives from each country gathered.", "N2"],
        ["**各自**で昼ご飯を持って来てください。", "**かくじ** で ひるごはん を もって きて ください。", "Please each bring your own lunch.", "N2"],
      ], [
        ["各地", "かくち", "various parts of the country", "N2", "**各地**から人が集まりました。", "People gathered from all over."],
        ["各位", "かくい", "everyone; each and every one", "N2", "社員**各位**にお知らせします。", "This is a notice to all employees."],
      ]),
      bk("含", "N2", "include, contain", "ガン", "ふく.む ふく.める", [
        ["この値段は税金を**含み**ます。", "この ねだん は ぜいきん を **ふくみ**ます。", "This price includes tax.", "N3"],
        ["このジュースは砂糖を**含んで**います。", "この ジュース は さとう を **ふくんで** います。", "This juice contains sugar.", "N3"],
      ], [["含める", "ふくめる", "to include", "N3", "税金を**含め**て計算します。", "I calculate it including tax."]]),
    ],
  },
  {
    n: 77,
    note: "口 mouth, in bigger shapes",
    items: [
      bk("周", "N2", "around, circumference", "シュウ", "まわ.り", [
        ["家の**周り**に花を植えました。", "いえ の **まわり** に はな を うえました。", "I planted flowers around the house."],
        ["駅の**周辺**は店が多いです。", "えき の **しゅうへん** は みせ が おおい です。", "There are many shops in the area around the station.", "N2"],
      ], [
        ["円周", "えんしゅう", "circumference", "N2", "**円周**の長さを測ります。", "I measure the circumference of the circle."],
        ["周囲", "しゅうい", "surroundings, circumference, environs", "N3", "家の**周囲**に花を植えました。", "I planted flowers around the house."],
        ["周年", "しゅうねん", "whole year; -th anniversary", "N2", "会社は今年、十**周年**です。", "The company celebrates its tenth anniversary this year."],
      ]),
      bk("咲", "N2", "bloom", "", "さ.く", [
        ["桜が**咲き**ました。", "さくら が **さき**ました。", "The cherry blossoms have bloomed."],
        ["庭に赤い花が**咲いて**います。", "にわ に あかい はな が **さいて** います。", "Red flowers are blooming in the garden."],
      ]),
      bk("喫", "N2", "consume (drink, smoke)", "キツ", "", [
        ["**喫茶店**でコーヒーを飲みました。", "**きっさてん** で コーヒー を のみました。", "I had coffee at a coffee shop."],
        ["ここは**喫煙**できません。", "ここ は **きつえん** できません。", "You can't smoke here."],
      ]),
      bk("史", "N2", "history", "シ", "", [["日本の**歴史**を勉強しています。", "にほん の **れきし** を べんきょう して います。", "I'm studying Japanese history.", "N2"]], [
        ["女史", "じょし", "Ms.", "N3", "田中**女史**が話しました。", "Ms. Tanaka spoke."],
      ]),
    ],
  },
  {
    n: 78,
    note: "忄 heart on the left",
    items: [
      bk("快", "N2", "pleasant, cheerful", "カイ", "こころよ.い", [
        ["この部屋は広くて**快適**です。", "この へや は ひろくて **かいてき** です。", "This room is spacious and comfortable.", "N2"],
        ["**快速**電車に乗ります。", "**かいそく** でんしゃ に のります。", "I take the rapid train.", "N2"],
      ], [
        ["快晴", "かいせい", "good weather", "N2", "今日は**快晴**です。", "It's clear and sunny today."],
        ["愉快", "ゆかい", "pleasant, happy", "N3", "昨日は**愉快**な話を聞きました。", "I heard an amusing story yesterday."],
        ["不快", "ふかい", "displeasure; discomfort", "N2", "大きな音が**不快**です。", "Loud noises are unpleasant."],
        ["不愉快", "ふゆかい", "unpleasant; disagreeable", "N2", "昨日は**不愉快**な思いをしました。", "I had an unpleasant experience yesterday."],
      ]),
      bk("悩", "N2", "worry, trouble", "ノウ", "なや.む なや.ます", [
        ["仕事のことで**悩んで**います。", "しごと の こと で **なやんで** います。", "I'm troubled about work.", "N2"],
        ["一人で**悩ま**ないでください。", "ひとり で **なやま**ないで ください。", "Please don't worry alone.", "N2"],
      ]),
      bk("憎", "N2", "hate", "ゾウ", "にく.む にく.い", [
        ["私は彼を**憎んで**はいません。", "わたし は かれ を **にくんで** は いません。", "I don't hate him.", "N2"],
        ["**憎い**気持ちはもうありません。", "**にくい** きもち は もう ありません。", "I no longer have hateful feelings.", "N2"],
      ], [
        ["憎らしい", "にくらしい", "odious, hateful", "N2", "弟が**憎らしい**ことを言います。", "My little brother says spiteful things."],
        ["生憎", "あいにく", "unfortunately; sorry, but...", "N3", "**生憎**、店は休みでした。", "Unfortunately, the store was closed."],
      ]),
    ],
  },
  {
    n: 79,
    note: "心 sitting at the bottom",
    items: [
      bk("恋", "N2", "romantic love", "レン", "こい こい.しい", [
        ["彼女は私の**恋人**です。", "かのじょ は わたし の **こいびと** です。", "She is my girlfriend.", "N3"],
        ["彼は**恋**をしています。", "かれ は **こい** を して います。", "He is in love.", "N3"],
      ], [
        ["恋しい", "こいしい", "dear, beloved; to miss", "N2", "国の料理が**恋しい**です。", "I miss the food of my home country."],
        ["失恋", "しつれん", "broken heart, unrequited love", "N2", "友だちが**失恋**しました。", "My friend got his heart broken."],
      ]),
      bk("患", "N2", "suffer from illness", "カン", "わずら.う", [["病院に**患者**が大勢います。", "びょういん に **かんじゃ** が おおぜい います。", "There are many patients at the hospital.", "N3"]]),
    ],
  },
  {
    n: 80,
    note: "彳 on the left",
    items: [
      bk("律", "N2", "law, rhythm", "リツ リチ", "", [
        ["**法律**を守りましょう。", "**ほうりつ** を まもりましょう。", "Let's obey the law."],
        ["学校の**規律**を守ります。", "がっこう の きりつ を まもります。", "I follow the school rules.", "N2"],
      ], [["自律", "じりつ", "autonomy; self-control", "N2", "**自律**した生活を送ります。", "I lead an independent life."]]),
      bk("復", "N2", "restore, return, again", "フク", "", [
        ["毎日、漢字を**復習**します。", "まいにち、かんじ を **ふくしゅう** します。", "I review kanji every day."],
        ["**往復**の切符を買いました。", "**おうふく** の きっぷ を かいました。", "I bought a round-trip ticket.", "N2"],
      ], [["回復", "かいふく", "recovery (from illness), rehabilitation, restoration", "N3", "病気から**回復**しました。", "I recovered from my illness."]]),
    ],
  },
  {
    n: 81,
    note: "艹 grass, light",
    items: [
      bk("芸", "N2", "art, performance", "ゲイ", "", [
        ["彼は**芸術**が好きです。", "かれ は **げいじゅつ** が すき です。", "He likes art.", "N3"],
        ["犬が上手に**芸**をしました。", "いぬ が じょうず に **げい** を しました。", "The dog did a trick well."],
      ], [
        ["園芸", "えんげい", "horticulture, gardening", "N2", "母の趣味は**園芸**です。", "My mother's hobby is gardening."],
        ["芸能", "げいのう", "public entertainment, performing arts", "N2", "**芸能**のニュースをよく見ます。", "I often watch entertainment news."],
        ["工芸", "こうげい", "industrial arts", "N2", "旅行先で**工芸**品を買いました。", "I bought handicrafts on my trip."],
        ["文芸", "ぶんげい", "literature, art and literature", "N2", "**文芸**の雑誌を読みます。", "I read a literary magazine."],
      ]),
      bk("荒", "N2", "rough, wild", "コウ", "あら.い あ.れる", [
        ["今日は海が**荒れて**います。", "きょう は うみ が **あれて** います。", "The sea is rough today.", "N2"],
        ["冬は手が**荒れ**ます。", "ふゆ は て が **あれ**ます。", "My hands get chapped in winter.", "N2"],
      ], [["荒廃", "こうはい", "ruin", "N3", "戦争で町が**荒廃**しました。", "The town was devastated by the war."]]),
      bk("荷", "N2", "baggage, load", "カ", "に", [["**荷物**が重いです。", "**にもつ** が おもい です。", "The luggage is heavy."]]),
    ],
  },
  {
    n: 82,
    note: "艹 grass, heavy",
    items: [
      bk("菓", "N2", "sweets, confectionery", "カ", "", [["**お菓子**を食べます。", "**おかし** を たべます。", "I eat sweets.", "N3"]]),
      bk("果", "N3", "fruit, result", "カ", "は.たす は.てる", [
        ["テストの**結果**を待っています。", "テスト の **けっか** を まって います。", "I'm waiting for the test results.", "N3"],
        ["**果物**をたくさん食べます。", "**くだもの** を たくさん たべます。", "I eat a lot of fruit."],
      ]),
      bk("菜", "N2", "vegetable, greens", "サイ", "な", [["**野菜**をたくさん食べます。", "**やさい** を たくさん たべます。", "I eat a lot of vegetables."]]),
      bk("蒸", "N2", "steam", "ジョウ", "む.す む.れる", [
        ["野菜を**蒸し**ます。", "やさい を **むし**ます。", "I steam the vegetables.", "N2"],
        ["今日は**蒸し暑い**です。", "きょう は **むしあつい** です。", "It's hot and humid today.", "N2"],
      ], [
        ["蒸気", "じょうき", "steam, vapor", "N2", "やかんから**蒸気**が出ています。", "Steam is coming out of the kettle."],
        ["蒸発", "じょうはつ", "evaporation; unexplained disappearance", "N2", "皿の水が**蒸発**しました。", "The water in the dish evaporated."],
        ["水蒸気", "すいじょうき", "water vapor, steam", "N2", "窓が**水蒸気**で白いです。", "The window is white with steam."],
      ]),
      bk("薄", "N2", "thin, pale, weak", "ハク", "うす.い うす.める", [
        ["この紙は**薄い**です。", "この かみ は **うすい** です。", "This paper is thin."],
        ["部屋が少し**薄暗い**です。", "へや が すこし うすぐらい です。", "The room is a little dim.", "N2"],
      ], [
        ["薄める", "うすめる", "to dilute, to water down", "N2", "ジュースを水で**薄め**ます。", "I dilute the juice with water."],
        ["薄れる", "うすれる", "to fade; to become dim", "N2", "昔の記憶が**薄れ**ました。", "Old memories have faded."],
      ]),
    ],
  },
  {
    n: 83,
    note: "車 vehicle",
    items: [
      bk("軍", "N2", "army, military", "グン", "", [
        ["彼は昔、**軍隊**にいました。", "かれ は むかし、**ぐんたい** に いました。", "He was in the army long ago.", "N3"],
        ["**軍**の飛行機が飛んでいます。", "**ぐん** の ひこうき が とんで います。", "Military planes are flying.", "N3"],
      ]),
      bk("運", "N4", "carry, luck", "ウン", "はこ.ぶ", [
        ["車を**運転**します。", "くるま を **うんてん** します。", "I drive a car.", "N3"],
        ["荷物を部屋に**運び**ます。", "にもつ を へや に **はこび**ます。", "I carry the luggage to the room.", "N3"],
      ]),
      bk("軟", "N2", "soft", "ナン", "やわ.らか やわ.らかい", [
        ["彼女は体が**柔軟**です。", "かのじょ は からだ が **じゅうなん** です。", "Her body is flexible.", "N2"],
        ["**軟らかい**ご飯が好きです。", "**やわらかい** ごはん が すき です。", "I like soft rice.", "N2"],
      ], [["軟弱", "なんじゃく", "weakness; feebleness", "N2", "雨で地面が**軟弱**になりました。", "The ground became soft because of the rain."]]),
      bk("軽", "N2", "light (weight)", "ケイ", "かる.い", [
        ["このかばんは**軽い**です。", "この かばん は **かるい** です。", "This bag is light.", "N2"],
        ["危険を**軽視**してはいけません。", "きけん を けいし して は いけません。", "You must not make light of danger.", "N2"],
      ]),
      bk("輪", "N2", "ring, wheel, circle", "リン", "わ", [
        ["**指輪**をもらいました。", "**ゆびわ** を もらいました。", "I received a ring.", "N3"],
        ["みんなで**輪**になりました。", "みんな で **わ** に なりました。", "We all formed a circle.", "N3"],
      ], [["車輪", "しゃりん", "(car) wheel", "N2", "自転車の**車輪**が回ります。", "The bicycle's wheels are turning."]]),
      bk("論", "N3", "argument, theory", "ロン", "", [
        ["会議で**議論**しました。", "かいぎ で **ぎろん** しました。", "We debated at the meeting.", "N2"],
        ["**論文**を書いています。", "**ろんぶん** を かいて います。", "I'm writing a paper.", "N2"],
      ]),
      bk("輸", "N2", "transport, send", "ユ", "", [
        ["この車は外国から**輸入**しました。", "この くるま は がいこく から **ゆにゅう** しました。", "This car was imported from abroad.", "N3"],
        ["日本は車を**輸出**しています。", "にほん は くるま を **ゆしゅつ** して います。", "Japan exports cars.", "N3"],
      ], [
        ["輸血", "ゆけつ", "blood transfusion", "N2", "病院で**輸血**を受けました。", "I received a blood transfusion at the hospital."],
        ["輸送", "ゆそう", "transport, transportation", "N2", "荷物をトラックで**輸送**します。", "We transport the cargo by truck."],
      ]),
    ],
  },
];
