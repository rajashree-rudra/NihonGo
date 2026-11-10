// N2 kanji book — groups 1–29 (kanji 1–116). Grouped by visual similarity.
// bk(kanji, level, meaning, on'yomi, kun'yomi, [[ja, kana, en, word level]], [[word, reading, meaning, level, example]])
import { bk, type BookGroup } from "../../builders.ts";

export const GROUPS: BookGroup[] = [
  {
    n: 1,
    note: "small curved strokes",
    items: [
      bk("丸", "N2", "round, circle", "ガン", "まる まる.い まる.める", [
        ["地球は**丸い**です。", "ちきゅう は **まるい** です。", "The earth is round.", "N3", undefined, "まる.い"],
        ["紙を**丸めて**捨てました。", "かみ を **まるめて** すてました。", "I crumpled up the paper and threw it away.", "N2", undefined, "まる.める"],
        ["チームが**一丸**となって戦いました。", "チーム が **いちがん** と なって たたかいました。", "The team fought as one.", "N1", undefined, "ガン"],
      ], [
        ["丸", "まる", "circle", "N3", "紙に**丸**を書いてください。", "Please draw a circle on the paper.", "かみ に **まる** を かいて ください。"],
      ]),
      bk("久", "N2", "long time, old", "キュウ ク", "ひさ.しい", [
        ["お**久しぶり**です。", "お**ひさしぶり** です。", "Long time no see.", "N4", undefined, "ひさ.しい"],
        ["**久遠**の平和を願います。", "**くおん** の へいわ を ねがいます。", "I pray for everlasting peace.", "N1", undefined, "ク"],
      ], [
        ["永久", "えいきゅう", "eternity, permanence", "N3", "**永久**に残る建物です。", "It's a building that will last forever.", "**えいきゅう** に のこる たてもの です。"],
      ]),
      bk("了", "N2", "finish, complete", "リョウ", "", [
        ["授業が**終了**しました。", "じゅぎょう が **しゅうりょう** しました。", "The class has ended.", "N2", undefined, "リョウ"],
      ], [
        ["完了", "かんりょう", "completion", "N3", "仕事が**完了**しました。", "The work is complete.", "しごと が **かんりょう** しました。"],
      ]),
      bk("子", "N5", "child", "シ ス", "こ", [
        ["**子供**が好き。", "**こども** が すき。", "I love children.", "N5", undefined, "こ"],
        ["今日は体の**調子**がいいです。", "きょう は からだ の **ちょうし** が いい です。", "I'm feeling good today.", "N3", undefined, "シ"],
        ["彼の**様子**が少し変です。", "かれ の **ようす** が すこし へん です。", "He's acting a little strange.", "N3", undefined, "ス"],
      ]),
    ],
  },
  {
    n: 2,
    note: "same 乚 / 乙 right side",
    items: [
      bk("乱", "N2", "disorder, riot", "ラン", "みだ.れる みだ.す", [
        ["風で髪が**乱れ**ました。", "かぜ で かみ が **みだれ**ました。", "My hair got messy from the wind.", "N2", undefined, "みだ.れる"],
        ["列を**乱さないで**ください。", "れつ を **みださないで** ください。", "Please don't break the line.", "N2", undefined, "みだ.す"],
        ["弟は言葉が**乱暴**です。", "おとうと は ことば が **らんぼう** です。", "My little brother speaks roughly.", "N2", undefined, "ラン"],
      ], [
        ["混乱", "こんらん", "confusion, chaos", "N3", "駅が**混乱**しています。", "The station is in chaos.", "えき が **こんらん** して います。"],
      ]),
      bk("乳", "N2", "milk, breast", "ニュウ", "ちち", [
        ["毎朝**牛乳**を飲みます。", "まいあさ **ぎゅうにゅう** を のみます。", "I drink milk every morning.", "N5", undefined, "ニュウ"],
        ["**乳製品**を毎日食べます。", "**にゅうせいひん** を まいにち たべます。", "I eat dairy products every day.", "N2", undefined, "ニュウ"],
        ["赤ちゃんが母親の**乳**を飲んでいます。", "あかちゃん が ははおや の **ちち** を のんで います。", "The baby is drinking its mother's milk.", "N2", undefined, "ちち"],
      ]),
      bk("乾", "N2", "dry", "カン", "かわ.く かわ.かす", [
        ["洗濯物が**乾き**ました。", "せんたくもの が **かわき**ました。", "The laundry has dried.", "N3", undefined, "かわ.く"],
        ["この部屋は**乾燥**しています。", "この へや は **かんそう** して います。", "This room is dry.", "N2", undefined, "カン"],
        ["時計の**乾電池**を換えました。", "とけい の **かんでんち** を かえました。", "I changed the batteries in the clock.", "N2", undefined, "カン"],
        ["みんなで**乾杯**しました。", "みんな で **かんぱい** しました。", "We all made a toast together.", "N2", undefined, "カン"],
      ], [
        ["乾かす", "かわかす", "to dry (something)", "N3", "ドライヤーで髪を**乾かし**ます。", "I dry my hair with a hair dryer.", "ドライヤー で かみ を **かわかし**ます。"],
      ]),
      bk("札", "N2", "banknote, label", "サツ", "ふだ", [
        ["千円**札**を使います。", "せんえん**さつ** を つかいます。", "I'll use a 1,000-yen bill.", "N3", undefined, "サツ"],
        ["**改札**で切符を見せます。", "**かいさつ** で きっぷ を みせます。", "I show my ticket at the ticket gate.", "N2", undefined, "サツ"],
        ["かばんに**名札**を付けます。", "かばん に **なふだ** を つけます。", "I attach a name tag to my bag.", "N2", undefined, "ふだ"],
      ]),
      bk("礼", "N3", "thanks, bow, manners", "レイ ライ", "", [
        ["お**礼**を言いました。", "お**れい** を いいました。", "I said thank you.", "N3", undefined, "レイ"],
        ["**礼儀**が大切です。", "**れいぎ** が たいせつ です。", "Manners are important.", "N3", undefined, "レイ"],
        ["自然を**礼賛**する詩です。", "しぜん を **らいさん** する し です。", "It is a poem in praise of nature.", "N1", undefined, "ライ"],
      ]),
    ],
  },
  {
    n: 3,
    note: "almost identical: 氷 永 水, and 泳 (氵 + 永)",
    items: [
      bk("氷", "N2", "ice", "ヒョウ", "こおり", [
        ["コップに**氷**を入れてください。", "コップ に **こおり** を いれて ください。", "Please put ice in the glass.", "N3", undefined, "こおり"],
        ["これは**氷山**の一角です。", "これ は **ひょうざん** の いっかく です。", "This is just the tip of the iceberg.", "N2", undefined, "ヒョウ"],
      ]),
      bk("永", "N2", "eternal, long", "エイ", "なが.い", [
        ["この歌を**永遠**に忘れません。", "この うた を **えいえん** に わすれません。", "I will never forget this song.", "N3", undefined, "エイ"],
        ["祖父は**永い**眠りにつきました。", "そふ は **ながい** ねむり に つきました。", "My grandfather passed away (fell into eternal sleep).", "N2", undefined, "なが.い"],
      ], [
        ["永久", "えいきゅう", "eternity, permanence", "N3", "**永久**に残る建物です。", "It's a building that will last forever.", "**えいきゅう** に のこる たてもの です。"],
      ]),
      bk("泳", "N3", "swim", "エイ", "およ.ぐ", [
        ["プールで**泳ぎ**ます。", "プール で **およぎ**ます。", "I swim in the pool.", "N5", undefined, "およ.ぐ"],
      ], [
        ["水泳", "すいえい", "swimming", "N4", "私の趣味は**水泳**です。", "My hobby is swimming.", "わたし の しゅみ は **すいえい** です。"],
      ]),
      bk("水", "N5", "water", "スイ", "みず", [
        ["**水**を飲みます。", "**みず** を のみます。", "I will drink water.", "N5", undefined, "みず"],
        ["**水曜日**に会いましょう。", "**すいようび** に あいましょう。", "Let's meet on Wednesday.", "N5", undefined, "スイ"],
      ]),
    ],
  },
  {
    n: 4,
    note: "干-shaped strokes",
    items: [
      bk("干", "N2", "dry, hang out", "カン", "ほ.す ひ.る", [
        ["洗濯物を**干し**ます。", "せんたくもの を **ほし**ます。", "I hang out the laundry.", "N2", undefined, "ほ.す"],
        ["他人の生活に**干渉**しないでください。", "たにん の せいかつ に **かんしょう** しないで ください。", "Please don't interfere in other people's lives.", "N1", undefined, "カン"],
        ["朝ご飯に魚の**干物**を食べます。", "あさごはん に さかな の **ひもの** を たべます。", "I eat dried fish for breakfast.", "N1", undefined, "ひ.る"],
      ]),
      bk("千", "N5", "thousand", "セン", "ち", [
        ["**千**円ください。", "**せん**えん ください。", "A thousand yen, please.", "N5", undefined, "セン"],
        ["**千葉**に住んでいます。", "**ちば** に すんで います。", "I live in Chiba.", "N3", undefined, "ち"],
      ]),
      bk("午", "N5", "noon", "ゴ", "", [
        ["**午前**九時に会います。", "**ごぜん** くじ に あいます。", "We meet at nine a.m.", "N5", undefined, "ゴ"],
        ["**午後**は忙しいです。", "**ごご** は いそがしい です。", "I'm busy in the afternoon.", "N5", undefined, "ゴ"],
      ]),
      bk("汗", "N2", "sweat", "カン", "あせ", [
        ["たくさん**汗**をかきました。", "たくさん **あせ** を かきました。", "I sweated a lot.", "N3", undefined, "あせ"],
        ["運動すると体が**発汗**します。", "うんどう する と からだ が **はっかん** します。", "The body sweats when you exercise.", "N1", undefined, "カン"],
      ]),
      bk("刊", "N2", "publish, edition", "カン", "", [
        ["毎朝、**朝刊**を読みます。", "まいあさ、 **ちょうかん** を よみます。", "I read the morning paper every morning.", "N2", undefined, "カン"],
        ["父は**夕刊**を読んでいます。", "ちち は **ゆうかん** を よんで います。", "My father is reading the evening paper.", "N2", undefined, "カン"],
      ], [
        ["週刊誌", "しゅうかんし", "weekly magazine", "N3", "**週刊誌**を買いました。", "I bought a weekly magazine.", "**しゅうかんし** を かいました。"],
        ["刊行", "かんこう", "publication, issue", "N3", "この本は去年**刊行**されました。", "This book was published last year.", "この ほん は きょねん **かんこう** されました。"],
      ]),
      bk("軒", "N2", "counter for houses, eaves", "ケン", "のき", [
        ["この町に店が**三軒**あります。", "この まち に みせ が **さんげん** あります。", "There are three shops in this town.", "N3", undefined, "ケン"],
        ["**軒**に風鈴を下げます。", "**のき** に ふうりん を さげます。", "I hang a wind chime from the eaves.", "N2", undefined, "のき"],
      ], [
        ["一軒家", "いっけんや", "detached house", "N3", "いつか**一軒家**を買いたいです。", "Someday I want to buy a house.", "いつか **いっけんや** を かいたい です。"],
      ]),
    ],
  },
  {
    n: 5,
    note: "mirror-like shapes",
    items: [
      bk("巨", "N2", "huge, giant", "キョ", "", [
        ["駅の前に**巨大**なビルがあります。", "えき の まえ に **きょだい** な ビル が あります。", "There is a huge building in front of the station.", "N3", undefined, "キョ"],
      ]),
      bk("臣", "N2", "retainer, minister", "シン ジン", "", [
        ["彼は**大臣**です。", "かれ は **だいじん** です。", "He is a minister.", "N3", undefined, "ジン"],
        ["彼は徳川家の**家臣**でした。", "かれ は とくがわけ の **かしん** でした。", "He was a retainer of the Tokugawa family.", "N1", undefined, "シン"],
      ]),
    ],
  },
  {
    n: 6,
    note: "only the top differs",
    items: [
      bk("委", "N2", "committee, entrust", "イ", "ゆだ.ねる", [
        ["私はクラスの**委員**です。", "わたし は クラス の **いいん** です。", "I am a class committee member.", "N3", undefined, "イ"],
        ["最後の判断は彼に**委ねます**。", "さいご の はんだん は かれ に **ゆだねます**。", "I'll leave the final decision to him.", "N1", undefined, "ゆだ.ねる"],
      ], [
        ["委員会", "いいんかい", "committee, committee meeting", "N3", "**委員会**は三時からです。", "The committee meeting is from three o'clock.", "**いいんかい** は さんじ から です。"],
      ]),
      bk("季", "N2", "season", "キ", "", [
        ["日本には四つの**季節**があります。", "にほん に は よっつ の **きせつ** が あります。", "Japan has four seasons.", "N4", undefined, "キ"],
        ["日本の**四季**は美しいです。", "にほん の **しき** は うつくしい です。", "Japan's four seasons are beautiful.", "N2", undefined, "キ"],
      ], [
        ["季刊", "きかん", "quarterly (e.g., magazine)", "N3", "この雑誌は**季刊**です。", "This magazine is a quarterly.", "この ざっし は **きかん** です。"],
      ]),
      bk("柔", "N2", "soft, gentle", "ジュウ ニュウ", "やわ.らか やわ.らかい", [
        ["このパンは**柔らかい**です。", "この パン は **やわらかい** です。", "This bread is soft.", "N3", undefined, "やわ.らかい"],
        ["**柔らか**な光が差しています。", "**やわらか** な ひかり が さして います。", "A soft light is shining in.", "N2", undefined, "やわ.らか"],
        ["彼は**柔和**な顔をしています。", "かれ は **にゅうわ** な かお を して います。", "He has a gentle face.", "N1", undefined, "ニュウ"],
      ], [
        ["柔道", "じゅうどう", "judo", "N3", "**柔道**を習っています。", "I'm learning judo.", "**じゅうどう** を ならって います。"],
      ]),
    ],
  },
  {
    n: 7,
    note: "only one stroke group differs",
    items: [
      bk("城", "N2", "castle", "ジョウ", "しろ", [
        ["お**城**を見に行きました。", "お**しろ** を み に いきました。", "I went to see the castle.", "N3", undefined, "しろ"],
      ], [
        ["大阪城", "おおさかじょう", "Osaka Castle", "N3", "**大阪城**は有名です。", "Osaka Castle is famous.", "**おおさかじょう** は ゆうめい です。"],
      ]),
      bk("域", "N2", "area, region", "イキ", "", [
        ["この**地域**は静かです。", "この **ちいき** は しずか です。", "This area is quiet.", "N3", undefined, "イキ"],
        ["川の**流域**に町があります。", "かわ の **りゅういき** に まち が あります。", "There is a town in the river basin.", "N2", undefined, "イキ"],
      ]),
    ],
  },
  {
    n: 8,
    note: "opposite meanings, similar shape",
    items: [
      bk("拾", "N2", "pick up", "シュウ ジュウ", "ひろ.う", [
        ["道でお金を**拾い**ました。", "みち で おかね を **ひろい**ました。", "I picked up money on the street.", "N4", undefined, "ひろ.う"],
        ["落とし物を**拾得**しました。", "おとしもの を **しゅうとく** しました。", "I found a lost item.", "N1", undefined, "シュウ"],
        ["**拾**万円と書きます。", "**じゅう**まんえん と かきます。", "It is written as 100,000 yen (formal numeral).", "N1", undefined, "ジュウ"],
      ]),
      bk("捨", "N2", "throw away", "シャ", "す.てる", [
        ["ごみを**捨て**ました。", "ごみ を **すて**ました。", "I threw away the trash.", "N4", undefined, "す.てる"],
        ["答えを**四捨五入**します。", "こたえ を **ししゃごにゅう** します。", "I round off the answer.", "N2", undefined, "シャ"],
      ]),
    ],
  },
  {
    n: 9,
    note: "box enclosure 囗",
    items: [
      bk("団", "N2", "group, association", "ダン トン", "", [
        ["**団体**で旅行します。", "**だんたい** で りょこう します。", "We travel as a group.", "N2", undefined, "ダン"],
        ["**布団**で寝ます。", "**ふとん** で ねます。", "I sleep on a futon.", "N2", undefined, "トン"],
        ["古い**団地**に住んでいます。", "ふるい **だんち** に すんで います。", "I live in an old housing complex.", "N2", undefined, "ダン"],
      ], [
        ["集団", "しゅうだん", "group, mass", "N3", "**集団**で行動します。", "We act as a group.", "**しゅうだん** で こうどう します。"],
      ]),
      bk("囲", "N2", "surround, enclose", "イ", "かこ.む かこ.う", [
        ["みんなでテーブルを**囲み**ました。", "みんな で テーブル を **かこみ**ました。", "We all sat around the table.", "N3", undefined, "かこ.む"],
        ["庭を塀で**囲い**ました。", "にわ を へい で **かこい**ました。", "I enclosed the garden with a fence.", "N2", undefined, "かこ.う"],
      ], [
        ["雰囲気", "ふんいき", "atmosphere, mood", "N3", "この店は**雰囲気**がいいです。", "This shop has a nice atmosphere.", "この みせ は **ふんいき** が いい です。"],
        ["範囲", "はんい", "extent, scope, range", "N3", "テストの**範囲**を教えてください。", "Please tell me what the test covers.", "テスト の **はんい** を おしえて ください。"],
      ]),
      bk("固", "N2", "hard, solid", "コ", "かた.い かた.まる かた.める", [
        ["このパンは**固い**です。", "この パン は **かたい** です。", "This bread is hard.", "N3", undefined, "かた.い"],
        ["彼は**頑固**な人です。", "かれ は **がんこ** な ひと です。", "He is a stubborn person.", "N2", undefined, "コ"],
        ["ゼリーが冷蔵庫で**固まり**ました。", "ゼリー が れいぞうこ で **かたまり**ました。", "The jelly set in the fridge.", "N2", undefined, "かた.まる"],
        ["留学する決心を**固め**ました。", "りゅうがく する けっしん を **かため**ました。", "I made up my mind to study abroad.", "N2", undefined, "かた.める"],
      ]),
    ],
  },
  {
    n: 10,
    note: "similar grid shape",
    items: [
      bk("冊", "N2", "counter for books", "サツ サク", "", [
        ["本を三**冊**買いました。", "ほん を さん**さつ** かいました。", "I bought three books.", "N5", undefined, "サツ"],
        ["桜の季節に**短冊**に俳句を書きます。", "さくら の きせつ に **たんざく** に はいく を かきます。", "In cherry blossom season, I write haiku on paper strips.", "N1", undefined, "サク"],
      ]),
      bk("再", "N2", "again, re-", "サイ サ", "ふたた.び", [
        ["音楽を**再生**します。", "おんがく を **さいせい** します。", "I'll play the music.", "N2", undefined, "サイ"],
        ["店は来月**再開**します。", "みせ は らいげつ **さいかい** します。", "The shop will reopen next month.", "N2", undefined, "サイ"],
        ["**再び**日本に来たいです。", "**ふたたび** にほん に きたい です。", "I want to come to Japan again.", "N2", undefined, "ふたた.び"],
        ["**再度**確かめてください。", "**さいど** たしかめて ください。", "Please check it once more.", "N2", undefined, "サイ"],
        ["**再三**注意しました。", "**さいさん** ちゅうい しました。", "I warned them again and again.", "N2", undefined, "サイ"],
      ], [
        ["再来週", "さらいしゅう", "the week after next", "N3", "**再来週**また会いましょう。", "Let's meet again the week after next.", "**さらいしゅう** また あいましょう。"],
      ]),
    ],
  },
  {
    n: 11,
    note: "both contain 氐",
    items: [
      bk("低", "N2", "low", "テイ", "ひく.い ひく.める", [
        ["この山は**低い**です。", "この やま は **ひくい** です。", "This mountain is low.", "N2", undefined, "ひく.い"],
        ["急に気温が**低下**しました。", "きゅう に きおん が **ていか** しました。", "The temperature dropped suddenly.", "N2", undefined, "テイ"],
        ["図書館では声を**低め**ましょう。", "としょかん で は こえ を **ひくめ**ましょう。", "Let's lower our voices in the library.", "N2", undefined, "ひく.める"],
        ["**最低限**のお金だけ持ちます。", "**さいていげん** の おかね だけ もちます。", "I'll carry only the bare minimum of money.", "N2", undefined, "テイ"],
        ["**低価格**の店で買います。", "**ていかかく** の みせ で かいます。", "I shop at low-priced stores.", "N2", undefined, "テイ"],
        ["明日は**低気圧**が来ます。", "あした は **ていきあつ** が きます。", "A low-pressure system is coming tomorrow.", "N2", undefined, "テイ"],
      ], [
        ["最低", "さいてい", "least, lowest, worst", "N3", "今日は**最低**の一日でした。", "Today was the worst day ever.", "きょう は **さいてい** の いちにち でした。"],
      ]),
      bk("底", "N2", "bottom", "テイ", "そこ", [
        ["海の**底**は暗いです。", "うみ の **そこ** は くらい です。", "The bottom of the sea is dark.", "N3", undefined, "そこ"],
      ], [
        ["徹底", "てってい", "thoroughness, completeness", "N3", "部屋の掃除を**徹底**しました。", "We cleaned the room thoroughly.", "へや の そうじ を **てってい** しました。"],
      ]),
    ],
  },
  {
    n: 12,
    note: "tiny 几 hooks",
    items: [
      bk("机", "N2", "desk", "キ", "つくえ", [
        ["**机**の上に本があります。", "**つくえ** の うえ に ほん が あります。", "There is a book on the desk.", "N5", undefined, "つくえ"],
        ["**机上**の空論です。", "**きじょう** の くうろん です。", "It's just an armchair theory.", "N1", undefined, "キ"],
      ]),
      bk("肌", "N2", "skin", "", "はだ", [
        ["彼女は**肌**がきれいです。", "かのじょ は **はだ** が きれい です。", "She has beautiful skin.", "N3", undefined, "はだ"],
        ["冬は暖かい**肌着**を着ます。", "ふゆ は あたたかい **はだぎ** を きます。", "I wear warm underwear in winter.", "N2", undefined, "はだ"],
      ]),
    ],
  },
  {
    n: 13,
    note: "木 family: 才 vs 寸, and stacked 木",
    items: [
      bk("材", "N2", "material, lumber", "ザイ", "", [
        ["料理の**材料**を買います。", "りょうり の **ざいりょう** を かいます。", "I buy ingredients for cooking.", "N3", undefined, "ザイ"],
        ["**材木**で小屋を作ります。", "**ざいもく** で こや を つくります。", "I build a hut with lumber.", "N2", undefined, "ザイ"],
        ["この**木材**は硬いです。", "この **もくざい** は かたい です。", "This wood is hard.", "N2", undefined, "ザイ"],
        ["かばんの**材質**は革です。", "かばん の **ざいしつ** は かわ です。", "The bag is made of leather.", "N2", undefined, "ザイ"],
      ]),
      bk("村", "N2", "village", "ソン", "むら", [
        ["小さい**村**に住んでいます。", "ちいさい **むら** に すんで います。", "I live in a small village.", "N4", undefined, "むら"],
        ["**農村**で米を作っています。", "**のうそん** で こめ を つくって います。", "They grow rice in a farming village.", "N2", undefined, "ソン"],
      ]),
      bk("森", "N2", "forest", "シン", "もり", [
        ["**森**の中を歩きました。", "**もり** の なか を あるきました。", "I walked through the forest.", "N4", undefined, "もり"],
        ["**森林**を守りましょう。", "**しんりん** を まもりましょう。", "Let's protect the forests.", "N2", undefined, "シン"],
      ]),
      bk("林", "N2", "woods, grove", "リン", "はやし", [
        ["家の後ろに**林**があります。", "いえ の うしろ に **はやし** が あります。", "There is a wood behind the house.", "N4", undefined, "はやし"],
        ["**山林**の中を歩きました。", "**さんりん** の なか を あるきました。", "I walked through the mountain forest.", "N2", undefined, "リン"],
      ]),
    ],
  },
  {
    n: 14,
    note: "反 family, plus 片 inside 版",
    items: [
      bk("板", "N2", "board, plank", "ハン バン", "いた", [
        ["木の**板**を切りました。", "き の **いた** を きりました。", "I cut a wooden board.", "N3", undefined, "いた"],
        ["店の前に**看板**があります。", "みせ の まえ に **かんばん** が あります。", "There is a sign in front of the shop.", "N2", undefined, "バン"],
        ["**鉄板**で肉を焼きます。", "**てっぱん** で にく を やきます。", "I grill meat on an iron plate.", "N1", undefined, "ハン"],
      ], [
        ["黒板", "こくばん", "blackboard", "N3", "**黒板**に字を書きます。", "I write on the blackboard.", "**こくばん** に じ を かきます。"],
        ["まな板", "まないた", "cutting board", "N3", "**まな板**の上で野菜を切ります。", "I cut vegetables on the cutting board.", "**まないた** の うえ で やさい を きります。"],
      ]),
      bk("枚", "N2", "counter for flat things", "マイ", "", [
        ["紙を五**枚**ください。", "かみ を ご**まい** ください。", "Five sheets of paper, please.", "N5", undefined, "マイ"],
        ["紙の**枚数**を数えます。", "かみ の **まいすう** を かぞえます。", "I count the number of sheets.", "N2", undefined, "マイ"],
      ]),
      bk("坂", "N2", "slope, hill", "ハン", "さか", [
        ["この**坂**は急です。", "この **さか** は きゅう です。", "This slope is steep.", "N4", undefined, "さか"],
        ["**坂道**を自転車で上ります。", "**さかみち** を じてんしゃ で のぼります。", "I ride up the hill on my bicycle.", "N2", undefined, "さか"],
        ["この先は**急坂**なので気をつけてください。", "この さき は **きゅうはん** なので き を つけて ください。", "The road ahead is a steep slope, so please be careful.", "N1", undefined, "ハン"],
      ]),
      bk("版", "N2", "printing, edition", "ハン", "", [
        ["この本は去年**出版**されました。", "この ほん は きょねん **しゅっぱん** されました。", "This book was published last year.", "N3", undefined, "ハン"],
        ["**出版社**で働いています。", "**しゅっぱんしゃ** で はたらいて います。", "I work at a publishing house.", "N2", undefined, "ハン"],
      ], [
        ["版", "はん", "edition, version", "N3", "新しい**版**が出ました。", "A new edition came out.", "あたらしい **はん** が でました。"],
      ]),
      bk("反", "N3", "anti-, opposite", "ハン タン", "そ.る", [
        ["**反対**の意見もあります。", "**はんたい** の いけん も あります。", "There are opposing opinions too.", "N2", undefined, "ハン"],
        ["祖母は着物の**反物**を買いました。", "そぼ は きもの の **たんもの** を かいました。", "My grandmother bought a roll of kimono cloth.", "N1", undefined, "タン"],
        ["暑さで板が**反って**しまいました。", "あつさ で いた が **そって** しまいました。", "The board warped from the heat.", "N1", undefined, "そ.る"],
      ]),
      bk("片", "N2", "one side, piece", "ヘン", "かた", [
        ["部屋を**片付け**ます。", "へや を **かたづけ**ます。", "I tidy up the room.", "N2", undefined, "かた"],
        ["ガラスの**破片**が落ちています。", "ガラス の **はへん** が おちて います。", "There are pieces of broken glass on the ground.", "N2", undefined, "ヘン"],
        ["**片道**の切符を買いました。", "**かたみち** の きっぷ を かいました。", "I bought a one-way ticket.", "N2", undefined, "かた"],
        ["荷物が**片寄って**います。", "にもつ が **かたよって** います。", "The load is lopsided.", "N2", undefined, "かた"],
      ], [
        ["片方", "かたほう", "one side, one of a pair", "N3", "靴下の**片方**がありません。", "One of the socks is missing.", "くつした の **かたほう** が ありません。"],
      ]),
    ],
  },
  {
    n: 15,
    note: "枝 vs 技 (支), with 枯 and 波",
    items: [
      bk("枝", "N2", "branch", "シ", "えだ", [
        ["木の**枝**が折れました。", "き の **えだ** が おれました。", "The tree branch broke.", "N3", undefined, "えだ"],
        ["それは**枝葉**の問題です。", "それ は **しよう** の もんだい です。", "That is a minor, side issue.", "N1", undefined, "シ"],
      ]),
      bk("枯", "N2", "wither", "コ", "か.れる か.らす", [
        ["花が**枯れ**ました。", "はな が **かれ**ました。", "The flowers have withered.", "N2", undefined, "か.れる"],
        ["水をやらずに花を**枯らして**しまいました。", "みず を やらず に はな を **からして** しまいました。", "I forgot to water the flowers and let them die.", "N2", undefined, "か.らす"],
        ["この井戸は**枯渇**しました。", "この いど は **こかつ** しました。", "This well has dried up.", "N1", undefined, "コ"],
      ]),
      bk("技", "N2", "skill, technique", "ギ", "わざ", [
        ["新しい**技術**を学びます。", "あたらしい **ぎじゅつ** を まなびます。", "I'm learning a new skill.", "N3", undefined, "ギ"],
        ["柔道の**技**を練習します。", "じゅうどう の **わざ** を れんしゅう します。", "I practice judo techniques.", "N2", undefined, "わざ"],
      ], [
        ["技術者", "ぎじゅつしゃ", "engineer", "N3", "彼は**技術者**です。", "He is an engineer.", "かれ は **ぎじゅつしゃ** です。"],
        ["演技", "えんぎ", "acting, performance", "N3", "彼女の**演技**はすばらしいです。", "Her acting is wonderful.", "かのじょ の **えんぎ** は すばらしい です。"],
        ["技師", "ぎし", "engineer, technician", "N3", "**技師**が機械を直しました。", "The technician repaired the machine.", "**ぎし** が きかい を なおしました。"],
      ]),
      bk("支", "N3", "branch, support", "シ", "ささ.える", [
        ["カードで**支払い**ます。", "カード で **しはらい**ます。", "I'll pay by card.", "N3", undefined, "シ"],
        ["駅前の**支店**で働いています。", "えきまえ の **してん** で はたらいて います。", "I work at the branch by the station.", "N3", undefined, "シ"],
        ["家族が私を**支えて**います。", "かぞく が わたし を **ささえて** います。", "My family supports me.", "N3", undefined, "ささ.える"],
        ["朝ご飯の**支度**をします。", "あさごはん の **したく** を します。", "I get breakfast ready.", "N3", undefined, "シ"],
      ]),
      bk("波", "N2", "wave", "ハ", "なみ", [
        ["今日は**波**が高いです。", "きょう は **なみ** が たかい です。", "The waves are high today.", "N3", undefined, "なみ"],
        ["この辺りは**電波**が弱いです。", "この あたり は **でんぱ** が よわい です。", "The signal is weak around here.", "N2", undefined, "ハ"],
      ]),
    ],
  },
  {
    n: 16,
    note: "柱 and 駐 share 主",
    items: [
      bk("柱", "N2", "pillar, post", "チュウ", "はしら", [
        ["家の**柱**は木です。", "いえ の **はしら** は き です。", "The house pillars are made of wood.", "N3", undefined, "はしら"],
        ["家の前に**電柱**があります。", "いえ の まえ に **でんちゅう** が あります。", "There is a telephone pole in front of the house.", "N2", undefined, "チュウ"],
      ]),
      bk("駐", "N2", "stop over, reside", "チュウ", "", [
        ["ここに**駐車**してもいいですか。", "ここ に **ちゅうしゃ** して も いい です か。", "May I park here?", "N3", undefined, "チュウ"],
        ["自転車を**駐輪所**に置きます。", "じてんしゃ を **ちゅうりんじょ** に おきます。", "I park my bicycle at the bicycle parking area.", "N2", undefined, "チュウ"],
      ], [
        ["駐車場", "ちゅうしゃじょう", "parking lot", "N3", "**駐車場**は満車です。", "The parking lot is full.", "**ちゅうしゃじょう** は まんしゃ です。"],
      ]),
      bk("注", "N4", "pour, attention", "チュウ", "そそ.ぐ", [
        ["車に**注意**してください。", "くるま に **ちゅうい** して ください。", "Please watch out for cars.", "N3", undefined, "チュウ"],
        ["カップにお茶を**注ぎ**ます。", "カップ に おちゃ を **そそぎ**ます。", "I pour tea into the cup.", "N2", undefined, "そそ.ぐ"],
      ]),
      bk("住", "N5", "live, reside", "ジュウ", "す.む す.まう", [
        ["大阪に**住んで**います。", "おおさか に **すんで** います。", "I live in Osaka.", "N3", undefined, "す.む"],
        ["ここに**住所**を書いてください。", "ここ に **じゅうしょ** を かいて ください。", "Please write your address here.", "N3", undefined, "ジュウ"],
        ["今はどちらにお**住まい**ですか。", "いま は どちら に お**すまい** です か。", "Where do you live now?", "N2", undefined, "す.まう"],
      ]),
      bk("主", "N4", "main, master", "シュ", "おも ぬし", [
        ["**主人**は会社員です。", "**しゅじん** は かいしゃいん です。", "My husband is an office worker.", "N2", undefined, "シュ"],
        ["**主な**理由は二つあります。", "**おもな** りゆう は ふたつ あります。", "There are two main reasons.", "N3", undefined, "おも"],
        ["この犬の**飼い主**はだれですか。", "この いぬ の **かいぬし** は だれ です か。", "Who is this dog's owner?", "N2", undefined, "ぬし"],
      ]),
    ],
  },
  {
    n: 17,
    note: "木 with heavy right/bottom parts",
    items: [
      bk("査", "N2", "investigate", "サ", "", [
        ["会社が**調査**をしています。", "かいしゃ が **ちょうさ** を して います。", "The company is doing a survey.", "N3", undefined, "サ"],
        ["**巡査**が道を教えてくれました。", "**じゅんさ** が みち を おしえて くれました。", "A police officer showed me the way.", "N2", undefined, "サ"],
      ], [
        ["検査", "けんさ", "inspection, examination", "N3", "病院で**検査**を受けました。", "I had an examination at the hospital.", "びょういん で **けんさ** を うけました。"],
      ]),
      bk("極", "N2", "pole, extreme", "キョク ゴク", "きわ.める きわ.み", [
        ["彼は**積極的**な人です。", "かれ は **せっきょくてき** な ひと です。", "He is a proactive person.", "N3", undefined, "キョク"],
        ["**北極**はとても寒いです。", "**ほっきょく** は とても さむい です。", "The North Pole is very cold.", "N2", undefined, "キョク"],
        ["**南極**にはペンギンがいます。", "**なんきょく** に は ペンギン が います。", "There are penguins in Antarctica.", "N2", undefined, "キョク"],
        ["彼は**消極的**な性格です。", "かれ は **しょうきょくてき** な せいかく です。", "He has a passive personality.", "N2", undefined, "キョク"],
        ["温泉に入って、**極楽**気分です。", "おんせん に はいって、 **ごくらく** きぶん です。", "Soaking in the hot spring, I feel like I'm in paradise.", "N1", undefined, "ゴク"],
        ["彼は料理の道を**極め**ました。", "かれ は りょうり の みち を **きわめ**ました。", "He mastered the art of cooking.", "N1", undefined, "きわ.める"],
        ["それは失礼の**極み**です。", "それ は しつれい の **きわみ** です。", "That is the height of rudeness.", "N1", undefined, "きわ.み"],
      ]),
      bk("根", "N2", "root", "コン", "ね", [
        ["木の**根**は長いです。", "き の **ね** は ながい です。", "The tree's roots are long.", "N3", undefined, "ね"],
        ["彼はとても**根気**があります。", "かれ は とても **こんき** が あります。", "He has a lot of patience.", "N2", undefined, "コン"],
        ["彼はとても**根性**があります。", "かれ は とても **こんじょう** が あります。", "He really has guts.", "N2", undefined, "コン"],
        ["この歌は**根強い**人気があります。", "この うた は **ねづよい** にんき が あります。", "This song has enduring popularity.", "N2", undefined, "ね"],
        ["木の**根元**に花が咲いています。", "き の **ねもと** に はな が さいて います。", "Flowers are blooming at the base of the tree.", "N2", undefined, "ね"],
        ["この木は**根っこ**が太いです。", "この き は **ねっこ** が ふとい です。", "This tree has thick roots.", "N2", undefined, "ね"],
        ["庭の**垣根**を切りました。", "にわ の **かきね** を きりました。", "I trimmed the hedge in the garden.", "N2", undefined, "ね"],
      ], [
        ["屋根", "やね", "roof", "N3", "**屋根**の上に猫がいます。", "There is a cat on the roof.", "**やね** の うえ に ねこ が います。"],
      ]),
    ],
  },
  {
    n: 18,
    note: "直 inside 植 and 値",
    items: [
      bk("植", "N2", "plant", "ショク", "う.える う.わる", [
        ["部屋に**植物**があります。", "へや に **しょくぶつ** が あります。", "There are plants in the room.", "N3", undefined, "ショク"],
        ["母は**植木**が好きです。", "はは は **うえき** が すき です。", "My mother likes garden plants.", "N2", undefined, "う.える"],
        ["六月に**田植え**をします。", "ろくがつ に **たうえ** を します。", "We plant rice in June.", "N2", undefined, "う.える"],
        ["窓の近くに**鉢植え**を置きます。", "まど の ちかく に **はちうえ** を おきます。", "I put a potted plant near the window.", "N2", undefined, "う.える"],
        ["庭に桜の木が**植わって**います。", "にわ に さくら の き が **うわって** います。", "A cherry tree is planted in the garden.", "N1", undefined, "う.わる"],
      ], [
        ["植える", "うえる", "to plant", "N4", "庭に木を**植え**ました。", "I planted a tree in the garden.", "にわ に き を **うえ**ました。"],
      ]),
      bk("直", "N4", "straight, fix", "チョク ジキ", "なお.す なお.る ただ.ちに", [
        ["字を**直して**ください。", "じ を **なおして** ください。", "Please correct the writing.", "N3", undefined, "なお.す"],
        ["先生に**直接**聞きました。", "せんせい に **ちょくせつ** ききました。", "I asked the teacher directly.", "N3", undefined, "チョク"],
        ["**正直**に話します。", "**しょうじき** に はなします。", "I'll speak honestly.", "N3", undefined, "ジキ"],
        ["パソコンが**直り**ました。", "パソコン が **なおり**ました。", "The computer has been fixed.", "N3", undefined, "なお.る"],
        ["**直ちに**出発してください。", "**ただちに** しゅっぱつ して ください。", "Please depart immediately.", "N2", undefined, "ただ.ちに"],
      ]),
      bk("値", "N3", "price, value", "チ", "ね", [
        ["この服の**値段**はいくらですか。", "この ふく の **ねだん** は いくら です か。", "How much is this piece of clothing?", "N4", undefined, "ね"],
        ["この本は読む**価値**があります。", "この ほん は よむ **かち** が あります。", "This book is worth reading.", "N2", undefined, "チ"],
      ]),
    ],
  },
  {
    n: 19,
    note: "木 + complex right side",
    items: [
      bk("械", "N2", "machine, device", "カイ", "", [
        ["工場に**機械**があります。", "こうじょう に **きかい** が あります。", "There are machines in the factory.", "N3", undefined, "カイ"],
      ], [
        ["器械", "きかい", "instrument, apparatus", "N3", "病院に新しい**器械**が入りました。", "New instruments arrived at the hospital.", "びょういん に あたらしい **きかい** が はいりました。"],
      ]),
      bk("棒", "N2", "stick, pole", "ボウ", "", [
        ["木の**棒**を持っています。", "き の **ぼう** を もって います。", "I'm holding a wooden stick.", "N3", undefined, "ボウ"],
      ]),
      bk("橋", "N2", "bridge", "キョウ", "はし", [
        ["**橋**を渡ります。", "**はし** を わたります。", "I cross the bridge.", "N5", undefined, "はし"],
        ["**歩道橋**を渡って学校へ行きます。", "**ほどうきょう** を わたって がっこう へ いきます。", "I cross the pedestrian bridge to go to school.", "N2", undefined, "キョウ"],
      ]),
    ],
  },
  {
    n: 20,
    note: "氵 + short right side",
    items: [
      bk("池", "N2", "pond", "チ", "いけ", [
        ["公園に**池**があります。", "こうえん に **いけ** が あります。", "There is a pond in the park.", "N5", undefined, "いけ"],
      ], [
        ["電池", "でんち", "battery", "N3", "時計の**電池**が切れました。", "The clock's battery has run out.", "とけい の **でんち** が きれました。"],
      ]),
      bk("地", "N5", "ground, earth", "チ ジ", "", [
        ["この**地図**を見てください。", "この **ちず** を みて ください。", "Please look at this map.", "N3", undefined, "チ"],
        ["昨日、大きな**地震**がありました。", "きのう、 おおきな **じしん** が ありました。", "There was a big earthquake yesterday.", "N4", undefined, "ジ"],
      ]),
      bk("他", "N4", "other", "タ", "ほか", [
        ["**他**の店に行きます。", "**ほか** の みせ に いきます。", "I'll go to another shop.", "N3", undefined, "ほか"],
        ["**他人**に迷惑をかけません。", "**たにん** に めいわく を かけません。", "I don't trouble other people.", "N3", undefined, "タ"],
      ]),
      bk("沈", "N2", "sink", "チン", "しず.む しず.める", [
        ["太陽が**沈み**ました。", "たいよう が **しずみ**ました。", "The sun has set.", "N3", undefined, "しず.む"],
        ["嵐で船が**沈没**しました。", "あらし で ふね が **ちんぼつ** しました。", "The ship sank in the storm.", "N1", undefined, "チン"],
        ["ソファーに体を**沈め**ました。", "ソファー に からだ を **しずめ**ました。", "I sank down into the sofa.", "N1", undefined, "しず.める"],
      ]),
      bk("汚", "N2", "dirty", "オ", "きたな.い よご.れる よご.す", [
        ["この部屋は**汚い**です。", "この へや は **きたない** です。", "This room is dirty.", "N3", undefined, "きたな.い"],
        ["借りた本を**汚さないで**ください。", "かりた ほん を **よごさないで** ください。", "Please don't get the borrowed book dirty.", "N2", undefined, "よご.す"],
      ], [
        ["汚れる", "よごれる", "to get dirty", "N3", "シャツが**汚れて**しまいました。", "My shirt got dirty.", "シャツ が **よごれて** しまいました。"],
        ["汚染", "おせん", "pollution, contamination", "N3", "川の**汚染**が問題です。", "River pollution is a problem.", "かわ の **おせん** が もんだい です。"],
      ]),
    ],
  },
  {
    n: 21,
    note: "可 family (河 何 可), and 白 inside 泊 and 百",
    items: [
      bk("河", "N2", "river", "カ", "かわ", [
        ["大きな**河**が流れています。", "おおきな **かわ** が ながれて います。", "A big river is flowing.", "N3", undefined, "かわ"],
        ["**運河**を船が通ります。", "**うんが** を ふね が とおります。", "Ships pass through the canal.", "N2", undefined, "カ"],
        ["京都の**河原町**で買い物をしました。", "きょうと の **かわらまち** で かいもの を しました。", "I went shopping in Kawaramachi, Kyoto.", "N2", undefined, "かわ"],
      ], [
        ["河川", "かせん", "rivers", "N3", "この**河川**は長いです。", "This river is long.", "この **かせん** は ながい です。"],
      ]),
      bk("何", "N5", "what", "カ", "なに なん", [
        ["朝ご飯に**何**を食べましたか。", "あさごはん に **なに** を たべました か。", "What did you eat for breakfast?", "N5", undefined, "なに"],
        ["**何時**に来ますか。", "**なんじ** に きます か。", "What time are you coming?", "N5", undefined, "なん"],
        ["兄は大学で**幾何学**を勉強しています。", "あに は だいがく で **きかがく** を べんきょう して います。", "My older brother studies geometry at university.", "N1", undefined, "カ"],
      ]),
      bk("可", "N3", "possible, approve", "カ", "", [
        ["日本語で話すことが**可能**です。", "にほんご で はなす こと が **かのう** です。", "It is possible to speak in Japanese.", "N3", undefined, "カ"],
        ["先生の**許可**をもらいました。", "せんせい の **きょか** を もらいました。", "I got the teacher's permission.", "N3", undefined, "カ"],
      ]),
      bk("泊", "N2", "stay overnight", "ハク", "と.まる と.める", [
        ["ホテルに**泊まり**ます。", "ホテル に **とまり**ます。", "I will stay at a hotel.", "N2", undefined, "と.まる"],
        ["友だちの家に一**泊**しました。", "ともだち の いえ に いっ**ぱく** しました。", "I stayed one night at my friend's house.", "N2", undefined, "ハク"],
        ["友だちを家に**泊め**ました。", "ともだち を いえ に **とめ**ました。", "I let my friend stay over at my house.", "N2", undefined, "と.める"],
        ["**宿泊先**を教えてください。", "**しゅくはくさき** を おしえて ください。", "Please tell me where you're staying.", "N2", undefined, "ハク"],
      ], [
        ["宿泊", "しゅくはく", "lodging", "N3", "安いホテルに**宿泊**します。", "I'll stay at a cheap hotel.", "やすい ホテル に **しゅくはく** します。"],
      ]),
      bk("白", "N5", "white", "ハク", "しろ しろ.い", [
        ["**白い**シャツを着ます。", "**しろい** シャツ を きます。", "I wear a white shirt.", "N5", undefined, "しろ.い"],
        ["私は**白**が好きです。", "わたし は **しろ** が すき です。", "I like white.", "N5", undefined, "しろ"],
        ["この答案は**白紙**です。", "この とうあん は **はくし** です。", "This answer sheet is blank.", "N2", undefined, "ハク"],
      ]),
      bk("百", "N5", "hundred", "ヒャク", "", [
        ["これは**百**円です。", "これ は **ひゃく**えん です。", "This is one hundred yen.", "N5", undefined, "ヒャク"],
      ]),
    ],
  },
  {
    n: 22,
    note: "谷 inside 浴 and 容; 容 inside 溶",
    items: [
      bk("浅", "N2", "shallow", "セン", "あさ.い", [
        ["この川は**浅い**です。", "この かわ は **あさい** です。", "This river is shallow.", "N3", undefined, "あさ.い"],
        ["それは**浅薄**な考えです。", "それ は **せんぱく** な かんがえ です。", "That is a shallow way of thinking.", "N1", undefined, "セン"],
      ]),
      bk("浴", "N2", "bathe", "ヨク", "あ.びる あ.びせる", [
        ["シャワーを**浴び**ます。", "シャワー を **あび**ます。", "I take a shower.", "N3", undefined, "あ.びる"],
        ["**浴室**はきれいです。", "**よくしつ** は きれい です。", "The bathroom is clean.", "N2", undefined, "ヨク"],
        ["夏に**海水浴**に行きます。", "なつ に **かいすいよく** に いきます。", "I go swimming in the sea in summer.", "N2", undefined, "ヨク"],
        ["祭りで**浴衣**を着ました。", "まつり で **ゆかた** を きました。", "I wore a yukata at the festival.", "N2", undefined, "*"],
        ["記者たちは彼に質問を**浴びせ**ました。", "きしゃ たち は かれ に しつもん を **あびせ**ました。", "The reporters showered him with questions.", "N1", undefined, "あ.びせる"],
      ]),
      bk("谷", "N2", "valley", "コク", "たに", [
        ["山と山の間に**谷**があります。", "やま と やま の あいだ に **たに** が あります。", "There is a valley between the mountains.", "N3", undefined, "たに"],
        ["この**渓谷**はとても深いです。", "この **けいこく** は とても ふかい です。", "This gorge is very deep.", "N1", undefined, "コク"],
      ]),
      bk("容", "N3", "contain, form", "ヨウ", "", [
        ["手紙の**内容**を確かめます。", "てがみ の **ないよう** を たしかめます。", "I check the contents of the letter.", "N3", undefined, "ヨウ"],
        ["この問題は**容易**です。", "この もんだい は **ようい** です。", "This problem is easy.", "N3", undefined, "ヨウ"],
      ]),
      bk("溶", "N2", "melt, dissolve", "ヨウ", "と.ける と.かす", [
        ["氷が**溶け**ました。", "こおり が **とけ**ました。", "The ice has melted.", "N2", undefined, "と.ける"],
        ["砂糖を水に**溶かし**ます。", "さとう を みず に **とかし**ます。", "I dissolve sugar in water.", "N2", undefined, "と.かす"],
        ["山から**溶岩**が流れました。", "やま から **ようがん** が ながれました。", "Lava flowed from the mountain.", "N2", undefined, "ヨウ"],
        ["新しいクラスに**溶け込み**ました。", "あたらしい クラス に **とけこみ**ました。", "I fit right into my new class.", "N2", undefined, "と.ける"],
      ]),
    ],
  },
  {
    n: 23,
    note: "氵 + wide right side",
    items: [
      bk("液", "N2", "liquid, fluid", "エキ", "", [
        ["これは**液体**です。", "これ は **えきたい** です。", "This is a liquid.", "N2", undefined, "エキ"],
      ]),
      bk("夜", "N4", "night", "ヤ", "よる よ", [
        ["**夜**は静かです。", "**よる** は しずか です。", "It is quiet at night.", "N2", undefined, "よる"],
        ["**今夜**は星がきれいです。", "**こんや** は ほし が きれい です。", "The stars are beautiful tonight.", "N2", undefined, "ヤ"],
        ["**夜中**に目が覚めました。", "**よなか** に め が さめました。", "I woke up in the middle of the night.", "N3", undefined, "よ"],
      ]),
      bk("涼", "N2", "cool, refreshing", "リョウ", "すず.しい", [
        ["秋は**涼しい**です。", "あき は **すずしい** です。", "Autumn is cool.", "N2", undefined, "すず.しい"],
        ["夏は川で**納涼**祭りがあります。", "なつ は かわ で **のうりょう** まつり が あります。", "In summer there is an evening-cool festival by the river.", "N1", undefined, "リョウ"],
      ]),
      bk("京", "N4", "capital", "キョウ ケイ", "", [
        ["**東京**で働いています。", "**とうきょう** で はたらいて います。", "I work in Tokyo.", "N5", undefined, "キョウ"],
        ["**京浜**工業地帯は東京と横浜の間にあります。", "**けいひん** こうぎょう ちたい は とうきょう と よこはま の あいだ に あります。", "The Keihin industrial zone lies between Tokyo and Yokohama.", "N1", undefined, "ケイ"],
      ], [
        ["京都", "きょうと", "Kyoto", "N5", "**京都**はきれいな町です。", "Kyoto is a beautiful city.", "**きょうと** は きれいな まち です。"],
      ]),
    ],
  },
  {
    n: 24,
    note: "涙・泥・混 — 氵 with similar right sides",
    items: [
      bk("涙", "N2", "tears", "ルイ", "なみだ", [
        ["**涙**が出ました。", "**なみだ** が でました。", "Tears came out.", "N3", undefined, "なみだ"],
        ["優勝して**感涙**にむせびました。", "ゆうしょう して **かんるい** に むせびました。", "We won and were choked with tears of joy.", "N1", undefined, "ルイ"],
      ]),
      bk("泥", "N2", "mud", "デイ", "どろ", [
        ["靴が**泥**で汚れました。", "くつ が **どろ** で よごれました。", "My shoes got dirty with mud.", "N3", undefined, "どろ"],
        ["父は昨夜**泥酔**して帰ってきました。", "ちち は さくや **でいすい** して かえって きました。", "My father came home dead drunk last night.", "N1", undefined, "デイ"],
      ]),
      bk("混", "N2", "mix, crowded", "コン", "ま.ぜる ま.ざる こ.む", [
        ["電車が**混んで**います。", "でんしゃ が **こんで** います。", "The train is crowded.", "N4", undefined, "こ.む"],
        ["二つの色を**混合**します。", "ふたつ の いろ を **こんごう** します。", "I mix the two colors.", "N2", undefined, "コン"],
      ], [
        ["混ぜる", "まぜる", "to mix, to stir", "N3", "卵と牛乳を**混ぜ**ます。", "I mix the eggs and milk.", "たまご と ぎゅうにゅう を **まぜ**ます。"],
        ["混雑", "こんざつ", "confusion, congestion", "N3", "駅は朝、**混雑**します。", "The station gets crowded in the morning.", "えき は あさ、 **こんざつ** します。"],
        ["混ざる", "まざる", "to be mixed, to mingle with", "N3", "水と油は**混ざり**ません。", "Water and oil don't mix.", "みず と あぶら は **まざり**ません。"],
        ["混じる", "まじる", "to be mixed, to mingle with", "N3", "白い糸に赤が**混じって**います。", "There is some red mixed in with the white thread.", "しろい いと に あか が **まじって** います。"],
      ]),
    ],
  },
  {
    n: 25,
    note: "氵 + boxy right side",
    items: [
      bk("清", "N2", "pure, clean", "セイ ショウ", "きよ.い きよ.める", [
        ["台所を**清潔**にします。", "だいどころ を **せいけつ** に します。", "I keep the kitchen clean.", "N2", undefined, "セイ"],
        ["山の川の水は**清い**です。", "やま の かわ の みず は **きよい** です。", "The mountain river water is pure.", "N2", undefined, "きよ.い"],
        ["毎朝、公園を**清掃**します。", "まいあさ、 こうえん を **せいそう** します。", "The park is cleaned every morning.", "N2", undefined, "セイ"],
        ["手紙を**清書**しました。", "てがみ を **せいしょ** しました。", "I made a clean copy of the letter.", "N2", undefined, "セイ"],
        ["旅行の費用を**清算**しました。", "りょこう の ひよう を **せいさん** しました。", "We settled the travel expenses.", "N2", undefined, "セイ"],
        ["山伏が「**六根清浄**」と唱えます。", "やまぶし が 「**ろっこんしょうじょう**」 と となえます。", "The mountain ascetics chant \"purify the six senses.\"", "N1", undefined, "ショウ"],
        ["神社に入る前に手を**清め**ます。", "じんじゃ に はいる まえ に て を **きよめ**ます。", "I purify my hands before entering the shrine.", "N1", undefined, "きよ.める"],
      ]),
      bk("晴", "N4", "clear up, sunny", "セイ", "は.れる は.らす", [
        ["明日は**晴れる**でしょう。", "あした は **はれる** でしょう。", "It will probably clear up tomorrow.", "N5", undefined, "は.れる"],
        ["今日は雲一つない**快晴**です。", "きょう は くも ひとつ ない **かいせい** です。", "Today is perfectly clear, without a single cloud.", "N2", undefined, "セイ"],
        ["カラオケで気分を**晴らし**ました。", "カラオケ で きぶん を **はらし**ました。", "I cheered myself up at karaoke.", "N1", undefined, "は.らす"],
      ], [
        ["晴れ", "はれ", "sunny weather, clear skies", "N5", "今日は**晴れ**です。", "It is sunny today.", "きょう は **はれ** です。"],
      ]),
      bk("静", "N4", "quiet", "セイ ジョウ", "しず.か", [
        ["図書館は**静か**です。", "としょかん は **しずか** です。", "The library is quiet.", "N5", undefined, "しず.か"],
        ["**冷静**に考えてください。", "**れいせい** に かんがえて ください。", "Please think calmly.", "N2", undefined, "セイ"],
        ["看護師が腕の**静脈**に注射しました。", "かんごし が うで の **じょうみゃく** に ちゅうしゃ しました。", "The nurse gave an injection into a vein in my arm.", "N1", undefined, "ジョウ"],
      ]),
      bk("減", "N2", "decrease", "ゲン", "へ.る へ.らす", [
        ["お金が**減り**ました。", "おかね が **へり**ました。", "My money has decreased.", "N3", undefined, "へ.る"],
        ["客の**増減**を調べます。", "きゃく の **ぞうげん** を しらべます。", "We look into the rise and fall in customers.", "N2", undefined, "ゲン"],
        ["カーブで**減速**します。", "カーブ で **げんそく** します。", "I slow down on curves.", "N2", undefined, "ゲン"],
        ["台風で客が**半減**しました。", "たいふう で きゃく が **はんげん** しました。", "The number of customers was halved because of the typhoon.", "N2", undefined, "ゲン"],
      ], [
        ["減らす", "へらす", "to decrease, to diminish", "N3", "旅行の荷物を**減らし**ます。", "I'll reduce my luggage for the trip.", "りょこう の にもつ を **へらし**ます。"],
        ["減少", "げんしょう", "decrease, reduction, decline", "N3", "この町の人口が**減少**しています。", "The population of this town is decreasing.", "この まち の じんこう が **げんしょう** して います。"],
        ["加減", "かげん", "adjustment; addition and subtraction", "N3", "お湯の**加減**はどうですか。", "How is the water temperature?", "おゆ の **かげん** は どう です か。"],
      ]),
      bk("温", "N2", "warm", "オン", "あたた.かい あたた.める あたた.まる", [
        ["**温かい**お茶を飲みます。", "**あたたかい** おちゃ を のみます。", "I drink warm tea.", "N3", undefined, "あたた.かい"],
        ["**温泉**に行きたいです。", "**おんせん** に いきたい です。", "I want to go to a hot spring.", "N2", undefined, "オン"],
        ["風呂で体が**温まり**ました。", "ふろ で からだ が **あたたまり**ました。", "The bath warmed me up.", "N2", undefined, "あたた.まる"],
        ["**温室**で野菜を育てます。", "**おんしつ** で やさい を そだてます。", "We grow vegetables in a greenhouse.", "N2", undefined, "オン"],
        ["薬は**常温**で保存します。", "くすり は **じょうおん** で ほぞん します。", "The medicine is stored at room temperature.", "N2", undefined, "オン"],
        ["**地球温暖化**が進んでいます。", "**ちきゅうおんだんか** が すすんで います。", "Global warming is getting worse.", "N2", undefined, "オン"],
        ["日本は**温帯**にあります。", "にほん は **おんたい** に あります。", "Japan is in the temperate zone.", "N2", undefined, "オン"],
        ["部長は**温厚**な人です。", "ぶちょう は **おんこう** な ひと です。", "The department manager is a gentle person.", "N2", undefined, "オン"],
      ], [
        ["温度", "おんど", "temperature", "N3", "部屋の**温度**を上げます。", "I'll raise the room temperature.", "へや の **おんど** を あげます。"],
        ["温める", "あたためる", "to warm, to heat", "N3", "スープを**温め**ます。", "I'll heat up the soup.", "スープ を **あたため**ます。"],
        ["温暖", "おんだん", "warmth", "N3", "この島は冬も**温暖**です。", "This island is warm even in winter.", "この しま は ふゆ も **おんだん** です。"],
      ]),
      bk("測", "N2", "measure", "ソク", "はか.る", [
        ["体温を**測り**ます。", "たいおん を **はかり**ます。", "I take my temperature.", "N3", undefined, "はか.る"],
        ["望遠鏡で星を**観測**します。", "ぼうえんきょう で ほし を **かんそく** します。", "I observe the stars with a telescope.", "N2", undefined, "ソク"],
        ["体温を**測定**します。", "たいおん を **そくてい** します。", "I take my body temperature.", "N2", undefined, "ソク"],
        ["部屋の広さを**計測**しました。", "へや の ひろさ を **けいそく** しました。", "I measured the size of the room.", "N2", undefined, "ソク"],
        ["土地を**測量**しました。", "とち を **そくりょう** しました。", "We surveyed the land.", "N2", undefined, "ソク"],
      ], [
        ["予測", "よそく", "prediction, estimation", "N3", "明日の天気を**予測**します。", "I predict tomorrow's weather.", "あした の てんき を **よそく** します。"],
      ]),
      bk("側", "N3", "side", "ソク", "がわ", [
        ["道の右**側**を歩きます。", "みち の みぎ**がわ** を あるきます。", "I walk on the right side of the road.", "N3", undefined, "がわ"],
        ["箱の**側面**に名前を書きます。", "はこ の **そくめん** に なまえ を かきます。", "I write my name on the side of the box.", "N2", undefined, "ソク"],
      ]),
    ],
  },
  {
    n: 26,
    note: "氵 + tall right side",
    items: [
      bk("湖", "N2", "lake", "コ", "みずうみ", [
        ["**湖**で泳ぎました。", "**みずうみ** で およぎました。", "I swam in the lake.", "N3", undefined, "みずうみ"],
        ["**湖畔**のホテルに泊まりました。", "**こはん** の ホテル に とまりました。", "I stayed at a lakeside hotel.", "N1", undefined, "コ"],
      ]),
      bk("湯", "N2", "hot water", "トウ", "ゆ", [
        ["**お湯**を沸かします。", "**おゆ** を わかします。", "I boil water.", "N4", undefined, "ゆ"],
        ["近所の**銭湯**に行きます。", "きんじょ の **せんとう** に いきます。", "I go to the neighborhood public bath.", "N2", undefined, "トウ"],
        ["なべから**湯気**が出ています。", "なべ から **ゆげ** が でて います。", "Steam is coming from the pot.", "N2", undefined, "ゆ"],
        ["**湯飲み**でお茶を飲みます。", "**ゆのみ** で おちゃ を のみます。", "I drink tea from a teacup.", "N2", undefined, "ゆ"],
      ]),
      bk("場", "N4", "place", "ジョウ", "ば", [
        ["待ち合わせの**場所**を決めましょう。", "まちあわせ の **ばしょ** を きめましょう。", "Let's decide on a meeting place.", "N4", undefined, "ば"],
        ["**駐車場**はどこですか。", "**ちゅうしゃじょう** は どこ です か。", "Where is the parking lot?", "N2", undefined, "ジョウ"],
      ]),
      bk("湾", "N2", "bay, gulf", "ワン", "", [
        ["東京**湾**が見えます。", "とうきょう**わん** が みえます。", "You can see Tokyo Bay.", "N3", undefined, "ワン"],
      ]),
      bk("湿", "N2", "damp, humid", "シツ", "しめ.る しめ.す", [
        ["夏は**湿度**が高いです。", "なつ は **しつど** が たかい です。", "The humidity is high in summer.", "N2", undefined, "シツ"],
        ["服がまだ**湿って**います。", "ふく が まだ **しめって** います。", "The clothes are still damp.", "N2", undefined, "しめ.る"],
        ["夏は**湿気**が多いです。", "なつ は **しっき** が おおい です。", "It is very humid in summer.", "N2", undefined, "シツ"],
        ["この部屋は**湿っぽい**です。", "この へや は **しめっぽい** です。", "This room is damp.", "N2", undefined, "しめ.る"],
        ["タオルを水で**湿して**ください。", "タオル を みず で **しめして** ください。", "Please dampen the towel with water.", "N1", undefined, "しめ.す"],
      ]),
    ],
  },
  {
    n: 27,
    note: "氵 + heavy right side",
    items: [
      bk("準", "N2", "standard, semi-", "ジュン", "", [
        ["旅行の**準備**をします。", "りょこう の **じゅんび** を します。", "I prepare for the trip.", "N4", undefined, "ジュン"],
        ["会社の**基準**を守ります。", "かいしゃ の **きじゅん** を まもります。", "I follow the company's standards.", "N2", undefined, "ジュン"],
        ["**標準**の大きさを選びます。", "**ひょうじゅん** の おおきさ を えらびます。", "I choose the standard size.", "N2", undefined, "ジュン"],
        ["**規準**に従って作ります。", "**きじゅん** に したがって つくります。", "We make it according to the standards.", "N2", undefined, "ジュン"],
      ], [
        ["水準", "すいじゅん", "level, standard", "N3", "生活の**水準**が上がりました。", "The standard of living has risen.", "せいかつ の **すいじゅん** が あがりました。"],
      ]),
      bk("滴", "N2", "drop, drip", "テキ", "しずく", [
        ["窓に**水滴**が付いています。", "まど に **すいてき** が ついて います。", "There are water drops on the window.", "N2", undefined, "テキ"],
        ["油を**一滴**入れます。", "あぶら を **いってき** いれます。", "I add one drop of oil.", "N2", undefined, "テキ"],
        ["葉っぱから雨の**滴**が落ちます。", "はっぱ から あめ の **しずく** が おちます。", "Raindrops fall from the leaves.", "N1", undefined, "しずく"],
      ]),
      bk("適", "N3", "suitable", "テキ", "", [
        ["**適当**な言葉が見つかりません。", "**てきとう** な ことば が みつかりません。", "I can't find the right words.", "N3", undefined, "テキ"],
      ]),
      bk("敵", "N3", "enemy, opponent", "テキ", "かたき", [
        ["試合で**敵**に負けました。", "しあい で **てき** に まけました。", "We lost to the opponent in the match.", "N3", undefined, "テキ"],
        ["課長は私を**目の敵**にしています。", "かちょう は わたし を **めのかたき** に して います。", "The section chief treats me as his enemy.", "N1", undefined, "かたき"],
      ]),
    ],
  },
  {
    n: 28,
    note: "氵 + dense right side",
    items: [
      bk("漁", "N2", "fishing", "ギョ リョウ", "", [
        ["この町は**漁業**が盛んです。", "この まち は **ぎょぎょう** が さかん です。", "Fishing is big in this town.", "N2", undefined, "ギョ"],
        ["父は**漁師**です。", "ちち は **りょうし** です。", "My father is a fisherman.", "N2", undefined, "リョウ"],
      ]),
      bk("魚", "N4", "fish", "ギョ", "さかな うお", [
        ["**魚**を焼きます。", "**さかな** を やきます。", "I grill fish.", "N3", undefined, "さかな"],
        ["**金魚**を飼っています。", "**きんぎょ** を かって います。", "I keep goldfish.", "N3", undefined, "ギョ"],
        ["朝早く**魚市場**へ行きました。", "あさ はやく **うおいちば** へ いきました。", "I went to the fish market early in the morning.", "N1", undefined, "うお"],
      ]),
      bk("濃", "N2", "thick, strong (taste)", "ノウ", "こ.い", [
        ["このコーヒーは**濃い**です。", "この コーヒー は **こい** です。", "This coffee is strong.", "N3", undefined, "こ.い"],
        ["塩の**濃度**を調べます。", "しお の **のうど** を しらべます。", "I check the salt concentration.", "N2", undefined, "ノウ"],
        ["このスープは**濃厚**です。", "この スープ は **のうこう** です。", "This soup is rich.", "N2", undefined, "ノウ"],
      ]),
      bk("濯", "N2", "wash, rinse", "タク", "", [
        ["今日は**洗濯**をします。", "きょう は **せんたく** を します。", "I'll do the laundry today.", "N4", undefined, "タク"],
        ["**洗濯機**が壊れました。", "**せんたくき** が こわれました。", "The washing machine broke.", "N2", undefined, "タク"],
      ]),
      bk("曜", "N5", "day of the week", "ヨウ", "", [
        ["今日は何**曜日**ですか。", "きょう は なん**ようび** です か。", "What day of the week is it today?", "N3", undefined, "ヨウ"],
      ]),
    ],
  },
  {
    n: 29,
    note: "氵 group, easy to mix up",
    items: [
      bk("況", "N2", "condition, situation", "キョウ", "", [
        ["今の**状況**を説明します。", "いま の **じょうきょう** を せつめい します。", "I'll explain the current situation.", "N3", undefined, "キョウ"],
      ]),
      bk("兄", "N4", "older brother", "ケイ キョウ", "あに", [
        ["**兄**は大学生です。", "**あに** は だいがくせい です。", "My older brother is a university student.", "N5", undefined, "あに"],
        ["私は三人**兄弟**です。", "わたし は さんにん **きょうだい** です。", "There are three of us siblings.", "N4", undefined, "キョウ"],
        ["姉の夫は私の**義兄**です。", "あね の おっと は わたし の **ぎけい** です。", "My older sister's husband is my brother-in-law.", "N1", undefined, "ケイ"],
      ], [
        ["お兄さん", "おにいさん", "older brother (polite)", "N5", "**お兄さん**によろしく。", "Say hello to your brother.", "**おにいさん** に よろしく。"],
      ]),
      bk("泉", "N2", "spring, fountain", "セン", "いずみ", [
        ["**温泉**に入りました。", "**おんせん** に はいりました。", "I got into the hot spring.", "N2", undefined, "セン"],
      ], [
        ["泉", "いずみ", "spring, fountain", "N3", "山に**泉**があります。", "There is a spring in the mountain.", "やま に **いずみ** が あります。"],
      ]),
      bk("沸", "N2", "boil", "フツ", "わ.く わ.かす", [
        ["お湯が**沸き**ました。", "おゆ が **わき**ました。", "The water has boiled.", "N4", undefined, "わ.く"],
        ["水は百度で**沸騰**します。", "みず は ひゃくど で **ふっとう** します。", "Water boils at 100 degrees.", "N1", undefined, "フツ"],
      ], [
        ["沸かす", "わかす", "to boil, to heat", "N4", "やかんでお湯を**沸かし**ます。", "I boil water in a kettle.", "やかん で おゆ を **わかし**ます。"],
      ]),
      bk("油", "N2", "oil", "ユ", "あぶら", [
        ["フライパンに**油**を入れます。", "フライパン に **あぶら** を いれます。", "I put oil in the frying pan.", "N3", undefined, "あぶら"],
        ["**油断**して失敗しました。", "**ゆだん** して しっぱい しました。", "I got careless and failed.", "N2", undefined, "ユ"],
      ], [
        ["醤油", "しょうゆ", "soy sauce", "N3", "**醤油**をかけてください。", "Please put soy sauce on it.", "**しょうゆ** を かけて ください。"],
        ["石油", "せきゆ", "oil, petroleum, kerosene", "N3", "**石油**の値段が上がりました。", "The price of oil has gone up.", "**せきゆ** の ねだん が あがりました。"],
      ]),
      bk("由", "N4", "reason, cause", "ユ ユウ", "よし", [
        ["**理由**を教えてください。", "**りゆう** を おしえて ください。", "Please tell me the reason.", "N4", undefined, "ユウ"],
        ["**自由**な時間が欲しいです。", "**じゆう** な じかん が ほしい です。", "I want some free time.", "N4", undefined, "ユウ"],
        ["大阪**経由**で東京へ行きます。", "おおさか **けいゆ** で とうきょう へ いきます。", "I'm going to Tokyo via Osaka.", "N2", undefined, "ユ"],
        ["彼が何を考えているか、私には知る**由**もありません。", "かれ が なに を かんがえて いる か、 わたし に は しる **よし** も ありません。", "I have no way of knowing what he is thinking.", "N1", undefined, "よし"],
      ]),
    ],
  },
];
