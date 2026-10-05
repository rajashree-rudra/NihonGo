// N2 kanji book — groups 1–28 (kanji 1–112). Grouped by visual similarity.
// bk(kanji, level, meaning, on'yomi, kun'yomi, [[ja, kana, en, word level]], [[word, reading, meaning, level, example]])
import { bk, type BookGroup } from "../../builders.ts";

export const GROUPS: BookGroup[] = [
  {
    n: 1,
    note: "small curved strokes",
    items: [
      bk("丸", "N2", "round, circle", "ガン", "まる まる.い まる.める", [
        ["チームが**一丸**となって戦いました。", "チーム が **いちがん** と なって たたかいました。", "The team fought as one.", "N1", undefined, "ガン"],
        ["紙に**丸**を書いてください。", "かみ に **まる** を かいて ください。", "Please draw a circle on the paper.", "N3", undefined, "まる"],
        ["地球は**丸い**です。", "ちきゅう は **まるい** です。", "The earth is round.", "N3", undefined, "まる.い"],
        ["紙を**丸めて**捨てました。", "かみ を **まるめて** すてました。", "I crumpled up the paper and threw it away.", "N2", undefined, "まる.める"],
      ]),
      bk("久", "N2", "long time, old", "キュウ ク", "ひさ.しい", [
        ["**永久**に残る建物です。", "**えいきゅう** に のこる たてもの です。", "It's a building that will last forever.", "N3", undefined, "キュウ"],
        ["**久遠**の平和を願います。", "**くおん** の へいわ を ねがいます。", "I pray for everlasting peace.", "N1", undefined, "ク"],
        ["お**久しぶり**です。", "お**ひさしぶり** です。", "Long time no see.", undefined, undefined, "ひさ.しい"],
      ]),
      bk("了", "N2", "finish, complete", "リョウ", "", [
        ["授業が**終了**しました。", "じゅぎょう が **しゅうりょう** しました。", "The class has ended.", "N2", undefined, "リョウ"],
        ["仕事が**完了**しました。", "しごと が **かんりょう** しました。", "The work is complete.", "N3", undefined, "リョウ"],
      ]),
      bk("子", "N5", "child", "シ ス", "こ", [
        ["今日は体の**調子**がいいです。", "きょう は からだ の **ちょうし** が いい です。", "I'm feeling good today.", "N3", undefined, "シ"],
        ["彼の**様子**が少し変です。", "かれ の **ようす** が すこし へん です。", "He's acting a little strange.", "N3", undefined, "ス"],
        ["**子供**が好き。", "**こども** が すき。", "I love children.", "N5", undefined, "こ"],
      ]),
    ],
  },
  {
    n: 2,
    note: "same 乚 / 乙 right side",
    items: [
      bk("乱", "N2", "disorder, riot", "ラン", "みだ.れる みだ.す", [
        ["駅が**混乱**しています。", "えき が **こんらん** して います。", "The station is in chaos.", "N3", undefined, "ラン"],
        ["風で髪が**乱れ**ました。", "かぜ で かみ が **みだれ**ました。", "My hair got messy from the wind.", "N2", undefined, "みだ.れる"],
        ["列を**乱さないで**ください。", "れつ を **みださないで** ください。", "Please don't break the line.", "N2", undefined, "みだ.す"],
      ], [["乱暴", "らんぼう", "rude, violent, rough", "N2", "弟は言葉が**乱暴**です。", "My little brother speaks roughly.", "おとうと は ことば が **らんぼう** です。"]]),
      bk("乳", "N2", "milk, breast", "ニュウ", "ちち", [
        ["毎朝**牛乳**を飲みます。", "まいあさ **ぎゅうにゅう** を のみます。", "I drink milk every morning.", undefined, undefined, "ニュウ"],
        ["**乳製品**を毎日食べます。", "**にゅうせいひん** を まいにち たべます。", "I eat dairy products every day.", "N2", undefined, "ニュウ"],
        ["赤ちゃんが母親の**乳**を飲んでいます。", "あかちゃん が ははおや の **ちち** を のんで います。", "The baby is drinking its mother's milk.", "N2", undefined, "ちち"],
      ]),
      bk("乾", "N2", "dry", "カン", "かわ.く かわ.かす", [
        ["この部屋は**乾燥**しています。", "この へや は **かんそう** して います。", "This room is dry.", "N2", undefined, "カン"],
        ["洗濯物が**乾き**ました。", "せんたくもの が **かわき**ました。", "The laundry has dried.", undefined, undefined, "かわ.く"],
        ["冬は空気が**乾いて**います。", "ふゆ は くうき が **かわいて** います。", "The air is dry in winter.", undefined, undefined, "かわ.く"],
        ["ドライヤーで髪を**乾かし**ます。", "ドライヤー で かみ を **かわかし**ます。", "I dry my hair with a hair dryer.", "N3", undefined, "かわ.かす"],
      ], [
        ["乾電池", "かんでんち", "dry cell, battery", "N2", "時計の**乾電池**を換えました。", "I changed the batteries in the clock.", "とけい の **かんでんち** を かえました。"],
        ["乾杯", "かんぱい", "Cheers! (a toast)", "N2", "みんなで**乾杯**しました。", "We all made a toast together.", "みんな で **かんぱい** しました。"],
      ]),
      bk("札", "N2", "banknote, label", "サツ", "ふだ", [
        ["千円**札**を使います。", "せんえん**さつ** を つかいます。", "I'll use a 1,000-yen bill.", "N3", undefined, "サツ"],
        ["**改札**で切符を見せます。", "**かいさつ** で きっぷ を みせます。", "I show my ticket at the ticket gate.", "N2", undefined, "サツ"],
        ["かばんに名前の**札**を付けます。", "かばん に なまえ の **ふだ** を つけます。", "I attach a name tag to my bag.", "N2", undefined, "ふだ"],
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
    note: "almost identical",
    items: [
      bk("氷", "N2", "ice", "ヒョウ", "こおり", [
        ["これは**氷山**の一角です。", "これ は **ひょうざん** の いっかく です。", "This is just the tip of the iceberg.", "N2", undefined, "ヒョウ"],
        ["コップに**氷**を入れてください。", "コップ に **こおり** を いれて ください。", "Please put ice in the glass.", "N3", undefined, "こおり"],
      ]),
      bk("永", "N2", "eternal, long", "エイ", "なが.い", [
        ["この歌を**永遠**に忘れません。", "この うた を **えいえん** に わすれません。", "I will never forget this song.", "N3", undefined, "エイ"],
        ["**永久**に残る建物です。", "**えいきゅう** に のこる たてもの です。", "It's a building that will last forever.", "N3", undefined, "エイ"],
        ["祖父は**永い**眠りにつきました。", "そふ は **ながい** ねむり に つきました。", "My grandfather passed away (fell into eternal sleep).", "N2", undefined, "なが.い"],
      ]),
      bk("水", "N5", "water", "スイ", "みず", [
        ["**水曜日**に会いましょう。", "**すいようび** に あいましょう。", "Let's meet on Wednesday.", "N5", undefined, "スイ"],
        ["**水**を飲みます。", "**みず** を のみます。", "I will drink water.", "N5", undefined, "みず"],
      ]),
    ],
  },
  {
    n: 4,
    note: "干-shaped strokes",
    items: [
      bk("干", "N2", "dry, hang out", "カン", "ほ.す ひ.る", [
        ["他人の生活に**干渉**しないでください。", "たにん の せいかつ に **かんしょう** しないで ください。", "Please don't interfere in other people's lives.", "N1", undefined, "カン"],
        ["洗濯物を**干し**ます。", "せんたくもの を **ほし**ます。", "I hang out the laundry.", "N2", undefined, "ほ.す"],
        ["朝ご飯に魚の**干物**を食べます。", "あさごはん に さかな の **ひもの** を たべます。", "I eat dried fish for breakfast.", "N1", undefined, "ひ.る"],
      ]),
      bk("千", "N5", "thousand", "セン", "ち", [
        ["**千**円ください。", "**せん**えん ください。", "A thousand yen, please.", undefined, undefined, "セン"],
        ["**千葉**に住んでいます。", "**ちば** に すんで います。", "I live in Chiba.", "N3", undefined, "ち"],
      ]),
      bk("午", "N5", "noon", "ゴ", "", [
        ["**午前**九時に会います。", "**ごぜん** くじ に あいます。", "We meet at nine a.m.", undefined, undefined, "ゴ"],
        ["**午後**は忙しいです。", "**ごご** は いそがしい です。", "I'm busy in the afternoon.", undefined, undefined, "ゴ"],
      ]),
      bk("汗", "N2", "sweat", "カン", "あせ", [
        ["運動すると体が**発汗**します。", "うんどう する と からだ が **はっかん** します。", "The body sweats when you exercise.", "N1", undefined, "カン"],
        ["たくさん**汗**をかきました。", "たくさん **あせ** を かきました。", "I sweated a lot.", "N3", undefined, "あせ"],
      ]),
      bk("刊", "N2", "publish, edition", "カン", "", [
        ["毎朝、**朝刊**を読みます。", "まいあさ、 **ちょうかん** を よみます。", "I read the morning paper every morning.", "N2", undefined, "カン"],
        ["**週刊誌**を買いました。", "**しゅうかんし** を かいました。", "I bought a weekly magazine.", "N3", undefined, "カン"],
      ], [
        ["夕刊", "ゆうかん", "evening paper", "N2", "父は**夕刊**を読んでいます。", "My father is reading the evening paper.", "ちち は **ゆうかん** を よんで います。"],
        ["刊行", "かんこう", "publication, issue", "N3", "この本は去年**刊行**されました。", "This book was published last year.", "この ほん は きょねん **かんこう** されました。"],
      ]),
      bk("軒", "N2", "counter for houses, eaves", "ケン", "のき", [
        ["この町に店が三**軒**あります。", "この まち に みせ が さん**げん** あります。", "There are three shops in this town.", "N3", undefined, "ケン"],
        ["いつか一**軒家**を買いたいです。", "いつか いっ**けんや** を かいたい です。", "Someday I want to buy a house.", "N3", undefined, "ケン"],
        ["**軒**に風鈴を下げます。", "**のき** に ふうりん を さげます。", "I hang a wind chime from the eaves.", "N2", undefined, "のき"],
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
        ["彼は徳川家の**家臣**でした。", "かれ は とくがわけ の **かしん** でした。", "He was a retainer of the Tokugawa family.", "N1", undefined, "シン"],
        ["彼は**大臣**です。", "かれ は **だいじん** です。", "He is a minister.", "N3", undefined, "ジン"],
      ]),
    ],
  },
  {
    n: 6,
    note: "only the top differs",
    items: [
      bk("委", "N2", "committee, entrust", "イ", "ゆだ.ねる", [
        ["私はクラスの**委員**です。", "わたし は クラス の **いいん** です。", "I am a class committee member.", "N3", undefined, "イ"],
        ["**委員会**は三時からです。", "**いいんかい** は さんじ から です。", "The committee meeting is from three o'clock.", "N3", undefined, "イ"],
        ["最後の判断は彼に**委ねます**。", "さいご の はんだん は かれ に **ゆだねます**。", "I'll leave the final decision to him.", "N1", undefined, "ゆだ.ねる"],
      ]),
      bk("季", "N2", "season", "キ", "", [
        ["日本には四つの**季節**があります。", "にほん に は よっつ の **きせつ** が あります。", "Japan has four seasons.", undefined, undefined, "キ"],
        ["日本の**四季**は美しいです。", "にほん の **しき** は うつくしい です。", "Japan's four seasons are beautiful.", "N2", undefined, "キ"],
      ], [["季刊", "きかん", "quarterly (e.g., magazine)", "N3", "この雑誌は**季刊**です。", "This magazine is a quarterly.", "この ざっし は **きかん** です。"]]),
    ],
  },
  {
    n: 7,
    note: "only one stroke group differs",
    items: [
      bk("城", "N2", "castle", "ジョウ", "しろ", [
        ["大阪**城**は有名です。", "おおさか**じょう** は ゆうめい です。", "Osaka Castle is famous.", "N3", undefined, "ジョウ"],
        ["お**城**を見に行きました。", "お**しろ** を み に いきました。", "I went to see the castle.", "N3", undefined, "しろ"],
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
        ["落とし物を**拾得**しました。", "おとしもの を **しゅうとく** しました。", "I found a lost item.", "N1", undefined, "シュウ"],
        ["**拾**万円と書きます。", "**じゅう**まんえん と かきます。", "It is written as 100,000 yen (formal numeral).", "N1", undefined, "ジュウ"],
        ["道でお金を**拾い**ました。", "みち で おかね を **ひろい**ました。", "I picked up money on the street.", undefined, undefined, "ひろ.う"],
        ["ごみを**拾って**ください。", "ごみ を **ひろって** ください。", "Please pick up the trash.", undefined, undefined, "ひろ.う"],
      ]),
      bk("捨", "N2", "throw away", "シャ", "す.てる", [
        ["答えを**四捨五入**します。", "こたえ を **ししゃごにゅう** します。", "I round off the answer.", "N2", undefined, "シャ"],
        ["ごみを**捨て**ました。", "ごみ を **すて**ました。", "I threw away the trash.", undefined, undefined, "す.てる"],
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
      ], [
        ["団地", "だんち", "housing complex", "N2", "古い**団地**に住んでいます。", "I live in an old housing complex.", "ふるい **だんち** に すんで います。"],
        ["集団", "しゅうだん", "group, mass", "N3", "**集団**で行動します。", "We act as a group.", "**しゅうだん** で こうどう します。"],
      ]),
      bk("囲", "N2", "surround, enclose", "イ", "かこ.む かこ.う", [
        ["テストの**範囲**を教えてください。", "テスト の **はんい** を おしえて ください。", "Please tell me what the test covers.", "N3", undefined, "イ"],
        ["みんなでテーブルを**囲み**ました。", "みんな で テーブル を **かこみ**ました。", "We all sat around the table.", "N3", undefined, "かこ.む"],
        ["家は木に**囲まれて**います。", "いえ は き に **かこまれて** います。", "The house is surrounded by trees.", "N3", undefined, "かこ.む"],
        ["庭を塀で**囲い**ました。", "にわ を へい で **かこい**ました。", "I enclosed the garden with a fence.", "N2", undefined, "かこ.う"],
      ], [
        ["範囲", "はんい", "extent, scope, range", "N3", "テストの**範囲**は狭いです。", "The range of the test is narrow.", "テスト の **はんい** は せまい です。"],
        ["雰囲気", "ふんいき", "atmosphere, mood", "N3", "この店は**雰囲気**がいいです。", "This shop has a nice atmosphere.", "この みせ は **ふんいき** が いい です。"],
      ]),
      bk("固", "N2", "hard, solid", "コ", "かた.い かた.まる かた.める", [
        ["彼は**頑固**な人です。", "かれ は **がんこ** な ひと です。", "He is a stubborn person.", "N2", undefined, "コ"],
        ["このパンは**固い**です。", "この パン は **かたい** です。", "This bread is hard.", undefined, undefined, "かた.い"],
        ["ふたが**固くて**開きません。", "ふた が **かたくて** あきません。", "The lid is too tight to open.", undefined, undefined, "かた.い"],
        ["ゼリーが冷蔵庫で**固まり**ました。", "ゼリー が れいぞうこ で **かたまり**ました。", "The jelly set in the fridge.", "N2", undefined, "かた.まる"],
        ["留学する決心を**固め**ました。", "りゅうがく する けっしん を **かため**ました。", "I made up my mind to study abroad.", "N2", undefined, "かた.める"],
      ], [["固まる", "かたまる", "to harden, to solidify, to become firm", "N2", "セメントが**固まり**ました。", "The cement has hardened.", "セメント が **かたまり**ました。"]]),
    ],
  },
  {
    n: 10,
    note: "similar grid shape",
    items: [
      bk("冊", "N2", "counter for books", "サツ サク", "", [
        ["本を三**冊**買いました。", "ほん を さん**さつ** かいました。", "I bought three books.", undefined, undefined, "サツ"],
        ["桜の季節に**短冊**に俳句を書きます。", "さくら の きせつ に **たんざく** に はいく を かきます。", "In cherry blossom season, I write haiku on paper strips.", "N1", undefined, "サク"],
      ]),
      bk("再", "N2", "again, re-", "サイ サ", "ふたた.び", [
        ["音楽を**再生**します。", "おんがく を **さいせい** します。", "I'll play the music.", "N2", undefined, "サイ"],
        ["店は来月**再開**します。", "みせ は らいげつ **さいかい** します。", "The shop will reopen next month.", "N2", undefined, "サイ"],
        ["**再来週**また会いましょう。", "**さらいしゅう** また あいましょう。", "Let's meet again the week after next.", "N3", undefined, "サ"],
        ["**再び**日本に来たいです。", "**ふたたび** にほん に きたい です。", "I want to come to Japan again.", "N2", undefined, "ふたた.び"],
      ], [
        ["再三", "さいさん", "again and again, repeatedly", "N2", "**再三**注意しました。", "I warned them again and again.", "**さいさん** ちゅうい しました。"],
        ["再度", "さいど", "twice; again; a second time", "N2", "**再度**確かめてください。", "Please check it once more.", "**さいど** たしかめて ください。"],
      ]),
    ],
  },
  {
    n: 11,
    note: "both contain 氐",
    items: [
      bk("低", "N2", "low", "テイ", "ひく.い ひく.める", [
        ["急に気温が**低下**しました。", "きゅう に きおん が **ていか** しました。", "The temperature dropped suddenly.", "N2", undefined, "テイ"],
        ["この山は**低い**です。", "この やま は **ひくい** です。", "This mountain is low.", "N2", undefined, "ひく.い"],
        ["図書館では声を**低め**ましょう。", "としょかん で は こえ を **ひくめ**ましょう。", "Let's lower our voices in the library.", "N2", undefined, "ひく.める"],
      ], [
        ["最低", "さいてい", "least, lowest, worst", "N3", "今日は**最低**の一日でした。", "Today was the worst day ever.", "きょう は **さいてい** の いちにち でした。"],
        ["最低限", "さいていげん", "minimum; at the very least", "N2", "**最低限**のお金だけ持ちます。", "I'll carry only the bare minimum of money.", "**さいていげん** の おかね だけ もちます。"],
        ["低価格", "ていかかく", "low price", "N2", "**低価格**の店で買います。", "I shop at low-priced stores.", "**ていかかく** の みせ で かいます。"],
        ["低気圧", "ていきあつ", "low atmospheric pressure; foul mood", "N2", "明日は**低気圧**が来ます。", "A low-pressure system is coming tomorrow.", "あした は **ていきあつ** が きます。"],
      ]),
      bk("底", "N2", "bottom", "テイ", "そこ", [
        ["部屋の掃除を**徹底**しました。", "へや の そうじ を **てってい** しました。", "We cleaned the room thoroughly.", "N3", undefined, "テイ"],
        ["海の**底**は暗いです。", "うみ の **そこ** は くらい です。", "The bottom of the sea is dark.", "N3", undefined, "そこ"],
      ]),
    ],
  },
  {
    n: 12,
    note: "tiny 几 hooks",
    items: [
      bk("机", "N2", "desk", "キ", "つくえ", [
        ["**机上**の空論です。", "**きじょう** の くうろん です。", "It's just an armchair theory.", "N1", undefined, "キ"],
        ["**机**の上に本があります。", "**つくえ** の うえ に ほん が あります。", "There is a book on the desk.", undefined, undefined, "つくえ"],
      ]),
      bk("肌", "N2", "skin", "", "はだ", [
        ["彼女は**肌**がきれいです。", "かのじょ は **はだ** が きれい です。", "She has beautiful skin.", "N3", undefined, "はだ"],
        ["冬は暖かい**肌着**を着ます。", "ふゆ は あたたかい **はだぎ** を きます。", "I wear warm underwear in winter.", "N2", undefined, "はだ"],
      ]),
    ],
  },
  {
    n: 13,
    note: "才 vs 寸",
    items: [
      bk("材", "N2", "material, lumber", "ザイ", "", [
        ["料理の**材料**を買います。", "りょうり の **ざいりょう** を かいます。", "I buy ingredients for cooking.", "N3", undefined, "ザイ"],
        ["**材木**で小屋を作ります。", "**ざいもく** で こや を つくります。", "I build a hut with lumber.", "N2", undefined, "ザイ"],
      ], [
        ["木材", "もくざい", "lumber, timber, wood", "N2", "この**木材**は硬いです。", "This wood is hard.", "この **もくざい** は かたい です。"],
        ["材質", "ざいしつ", "material; quality of material", "N2", "かばんの**材質**は革です。", "The bag is made of leather.", "かばん の **ざいしつ** は かわ です。"],
      ]),
      bk("村", "N2", "village", "ソン", "むら", [
        ["**農村**で米を作っています。", "**のうそん** で こめ を つくって います。", "They grow rice in a farming village.", "N2", undefined, "ソン"],
        ["小さい**村**に住んでいます。", "ちいさい **むら** に すんで います。", "I live in a small village.", undefined, undefined, "むら"],
      ]),
    ],
  },
  {
    n: 14,
    note: "反 family, plus 片 inside 版",
    items: [
      bk("板", "N2", "board, plank", "ハン バン", "いた", [
        ["**鉄板**で肉を焼きます。", "**てっぱん** で にく を やきます。", "I grill meat on an iron plate.", "N1", undefined, "ハン"],
        ["**黒板**に字を書きます。", "**こくばん** に じ を かきます。", "I write on the blackboard.", "N3", undefined, "バン"],
        ["木の**板**を切りました。", "き の **いた** を きりました。", "I cut a wooden board.", "N3", undefined, "いた"],
        ["**まな板**の上で野菜を切ります。", "**まないた** の うえ で やさい を きります。", "I cut vegetables on the cutting board.", "N3", undefined, "いた"],
      ], [["看板", "かんばん", "sign, signboard", "N2", "店の前に**看板**があります。", "There is a sign in front of the shop.", "みせ の まえ に **かんばん** が あります。"]]),
      bk("枚", "N2", "counter for flat things", "マイ", "", [
        ["紙を五**枚**ください。", "かみ を ご**まい** ください。", "Five sheets of paper, please.", undefined, undefined, "マイ"],
        ["紙の**枚数**を数えます。", "かみ の **まいすう** を かぞえます。", "I count the number of sheets.", "N2", undefined, "マイ"],
      ]),
      bk("坂", "N2", "slope, hill", "ハン", "さか", [
        ["この先は**急坂**なので気をつけてください。", "この さき は **きゅうはん** なので き を つけて ください。", "The road ahead is a steep slope, so please be careful.", "N1", undefined, "ハン"],
        ["この**坂**は急です。", "この **さか** は きゅう です。", "This slope is steep.", undefined, undefined, "さか"],
        ["**坂道**を自転車で上ります。", "**さかみち** を じてんしゃ で のぼります。", "I ride up the hill on my bicycle.", "N2", undefined, "さか"],
      ]),
      bk("版", "N2", "printing, edition", "ハン", "", [
        ["この本は去年**出版**されました。", "この ほん は きょねん **しゅっぱん** されました。", "This book was published last year.", "N3", undefined, "ハン"],
        ["新しい**版**が出ました。", "あたらしい **はん** が でました。", "A new edition came out.", "N3", undefined, "ハン"],
      ], [["出版社", "しゅっぱんしゃ", "publisher; publishing house", "N2", "**出版社**で働いています。", "I work at a publishing house.", "**しゅっぱんしゃ** で はたらいて います。"]]),
      bk("反", "N3", "anti-, opposite", "ハン タン", "そ.る", [
        ["**反対**の意見もあります。", "**はんたい** の いけん も あります。", "There are opposing opinions too.", "N2", undefined, "ハン"],
        ["祖母は着物の**反物**を買いました。", "そぼ は きもの の **たんもの** を かいました。", "My grandmother bought a roll of kimono cloth.", "N1", undefined, "タン"],
        ["暑さで板が**反って**しまいました。", "あつさ で いた が **そって** しまいました。", "The board warped from the heat.", "N1", undefined, "そ.る"],
      ]),
      bk("片", "N2", "one side, piece", "ヘン", "かた", [
        ["ガラスの**破片**が落ちています。", "ガラス の **はへん** が おちて います。", "There are pieces of broken glass on the ground.", "N2", undefined, "ヘン"],
        ["部屋を**片付け**ます。", "へや を **かたづけ**ます。", "I tidy up the room.", "N2", undefined, "かた"],
        ["靴下の**片方**がありません。", "くつした の **かたほう** が ありません。", "One of the socks is missing.", "N3", undefined, "かた"],
      ], [
        ["片道", "かたみち", "one-way (trip)", "N2", "**片道**の切符を買いました。", "I bought a one-way ticket.", "**かたみち** の きっぷ を かいました。"],
        ["片寄る", "かたよる", "to be one-sided, to incline, to be partial", "N2", "荷物が**片寄って**います。", "The load is lopsided.", "にもつ が **かたよって** います。"],
        ["破片", "はへん", "fragment, broken piece", "N2", "ガラスの**破片**に気をつけてください。", "Please be careful of the broken glass.", "ガラス の **はへん** に き を つけて ください。"],
      ]),
    ],
  },
  {
    n: 15,
    note: "枝 vs 技 — 木 or 扌",
    items: [
      bk("枝", "N2", "branch", "シ", "えだ", [
        ["それは**枝葉**の問題です。", "それ は **しよう** の もんだい です。", "That is a minor, side issue.", "N1", undefined, "シ"],
        ["木の**枝**が折れました。", "き の **えだ** が おれました。", "The tree branch broke.", undefined, undefined, "えだ"],
      ]),
      bk("枯", "N2", "wither", "コ", "か.れる か.らす", [
        ["この井戸は**枯渇**しました。", "この いど は **こかつ** しました。", "This well has dried up.", "N1", undefined, "コ"],
        ["花が**枯れ**ました。", "はな が **かれ**ました。", "The flowers have withered.", "N2", undefined, "か.れる"],
        ["水をやらずに花を**枯らして**しまいました。", "みず を やらず に はな を **からして** しまいました。", "I forgot to water the flowers and let them die.", "N2", undefined, "か.らす"],
      ]),
      bk("技", "N2", "skill, technique", "ギ", "わざ", [
        ["彼は**技術者**です。", "かれ は **ぎじゅつしゃ** です。", "He is an engineer.", undefined, undefined, "ギ"],
        ["新しい**技術**を学びます。", "あたらしい **ぎじゅつ** を まなびます。", "I'm learning a new skill.", undefined, undefined, "ギ"],
        ["柔道の**技**を練習します。", "じゅうどう の **わざ** を れんしゅう します。", "I practice judo techniques.", "N2", undefined, "わざ"],
      ], [
        ["演技", "えんぎ", "acting, performance", "N3", "彼女の**演技**はすばらしいです。", "Her acting is wonderful.", "かのじょ の **えんぎ** は すばらしい です。"],
        ["技師", "ぎし", "engineer, technician", "N3", "**技師**が機械を直しました。", "The technician repaired the machine.", "**ぎし** が きかい を なおしました。"],
      ]),
    ],
  },
  {
    n: 16,
    note: "柱 and 駐 share 主",
    items: [
      bk("柱", "N2", "pillar, post", "チュウ", "はしら", [
        ["家の前に**電柱**があります。", "いえ の まえ に **でんちゅう** が あります。", "There is a telephone pole in front of the house.", "N2", undefined, "チュウ"],
        ["家の**柱**は木です。", "いえ の **はしら** は き です。", "The house pillars are made of wood.", undefined, undefined, "はしら"],
      ]),
      bk("柔", "N2", "soft, gentle", "ジュウ ニュウ", "やわ.らか やわ.らかい", [
        ["**柔道**を習っています。", "**じゅうどう** を ならって います。", "I'm learning judo.", "N3", undefined, "ジュウ"],
        ["彼は**柔和**な顔をしています。", "かれ は **にゅうわ** な かお を して います。", "He has a gentle face.", "N1", undefined, "ニュウ"],
        ["**柔らか**な光が差しています。", "**やわらか** な ひかり が さして います。", "A soft light is shining in.", "N2", undefined, "やわ.らか"],
        ["このパンは**柔らかい**です。", "この パン は **やわらかい** です。", "This bread is soft.", undefined, undefined, "やわ.らかい"],
      ]),
      bk("駐", "N2", "stop over, reside", "チュウ", "", [
        ["ここに**駐車**してもいいですか。", "ここ に **ちゅうしゃ** して も いい です か。", "May I park here?", "N3", undefined, "チュウ"],
        ["**駐車場**は満車です。", "**ちゅうしゃじょう** は まんしゃ です。", "The parking lot is full.", "N3", undefined, "チュウ"],
      ], [["駐輪所", "ちゅうりんじょ", "bicycle parking place", "N2", "自転車を**駐輪所**に置きます。", "I park my bicycle at the bicycle parking area.", "じてんしゃ を **ちゅうりんじょ** に おきます。"]]),
      bk("注", "N4", "pour, attention", "チュウ", "そそ.ぐ", [
        ["車に**注意**してください。", "くるま に **ちゅうい** して ください。", "Please watch out for cars.", "N3", undefined, "チュウ"],
        ["店で料理を**注文**します。", "みせ で りょうり を **ちゅうもん** します。", "I order food at the restaurant.", "N3", undefined, "チュウ"],
        ["カップにお茶を**注ぎ**ます。", "カップ に おちゃ を **そそぎ**ます。", "I pour tea into the cup.", "N2", undefined, "そそ.ぐ"],
      ]),
      bk("住", "N5", "live, reside", "ジュウ", "す.む す.まう", [
        ["ここに**住所**を書いてください。", "ここ に **じゅうしょ** を かいて ください。", "Please write your address here.", "N3", undefined, "ジュウ"],
        ["大阪に**住んで**います。", "おおさか に **すんで** います。", "I live in Osaka.", "N3", undefined, "す.む"],
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
        ["病院で**検査**を受けました。", "びょういん で **けんさ** を うけました。", "I had an examination at the hospital.", "N3", undefined, "サ"],
        ["会社が**調査**をしています。", "かいしゃ が **ちょうさ** を して います。", "The company is doing a survey.", "N3", undefined, "サ"],
      ], [["巡査", "じゅんさ", "policeman", "N2", "**巡査**が道を教えてくれました。", "A police officer showed me the way.", "**じゅんさ** が みち を おしえて くれました。"]]),
      bk("極", "N2", "pole, extreme", "キョク ゴク", "きわ.める きわ.み", [
        ["**北極**はとても寒いです。", "**ほっきょく** は とても さむい です。", "The North Pole is very cold.", "N2", undefined, "キョク"],
        ["彼は**積極的**な人です。", "かれ は **せっきょくてき** な ひと です。", "He is a proactive person.", "N3", undefined, "キョク"],
        ["温泉に入って、**極楽**気分です。", "おんせん に はいって、 **ごくらく** きぶん です。", "Soaking in the hot spring, I feel like I'm in paradise.", "N1", undefined, "ゴク"],
        ["彼は料理の道を**極め**ました。", "かれ は りょうり の みち を **きわめ**ました。", "He mastered the art of cooking.", "N1", undefined, "きわ.める"],
        ["それは失礼の**極み**です。", "それ は しつれい の **きわみ** です。", "That is the height of rudeness.", "N1", undefined, "きわ.み"],
      ], [
        ["消極的", "しょうきょくてき", "passive", "N2", "彼は**消極的**な性格です。", "He has a passive personality.", "かれ は **しょうきょくてき** な せいかく です。"],
        ["南極", "なんきょく", "south pole, Antarctic", "N2", "**南極**はとても寒いです。", "The South Pole is very cold.", "**なんきょく** は とても さむい です。"],
      ]),
      bk("根", "N2", "root", "コン", "ね", [
        ["彼はとても**根気**があります。", "かれ は とても **こんき** が あります。", "He has a lot of patience.", "N2", undefined, "コン"],
        ["木の**根**は長いです。", "き の **ね** は ながい です。", "The tree's roots are long.", "N3", undefined, "ね"],
        ["**屋根**の上に猫がいます。", "**やね** の うえ に ねこ が います。", "There is a cat on the roof.", "N3", undefined, "ね"],
      ], [
        ["垣根", "かきね", "hedge", "N2", "庭の**垣根**を切りました。", "I trimmed the hedge in the garden.", "にわ の **かきね** を きりました。"],
        ["根元", "ねもと", "root; base; origin", "N2", "木の**根元**に花が咲いています。", "Flowers are blooming at the base of the tree.", "き の **ねもと** に はな が さいて います。"],
        ["根性", "こんじょう", "willpower; guts; determination", "N2", "彼はとても**根性**があります。", "He really has guts.", "かれ は とても **こんじょう** が あります。"],
        ["根っこ", "ねっこ", "root (of a plant); stump; origin", "N2", "この木は**根っこ**が太いです。", "This tree has thick roots.", "この き は **ねっこ** が ふとい です。"],
        ["根強い", "ねづよい", "firmly rooted; deep-seated", "N2", "この歌は**根強い**人気があります。", "This song has enduring popularity.", "この うた は **ねづよい** にんき が あります。"],
      ]),
    ],
  },
  {
    n: 18,
    note: "stacked 木",
    items: [
      bk("森", "N2", "forest", "シン", "もり", [
        ["**森林**を守りましょう。", "**しんりん** を まもりましょう。", "Let's protect the forests.", "N2", undefined, "シン"],
        ["**森**の中を歩きました。", "**もり** の なか を あるきました。", "I walked through the forest.", undefined, undefined, "もり"],
      ]),
      bk("林", "N2", "woods, grove", "リン", "はやし", [
        ["**山林**の中を歩きました。", "**さんりん** の なか を あるきました。", "I walked through the mountain forest.", "N2", undefined, "リン"],
        ["家の後ろに**林**があります。", "いえ の うしろ に **はやし** が あります。", "There is a wood behind the house.", undefined, undefined, "はやし"],
      ]),
    ],
  },
  {
    n: 19,
    note: "木 + complex right side",
    items: [
      bk("植", "N2", "plant", "ショク", "う.える う.わる", [
        ["部屋に**植物**があります。", "へや に **しょくぶつ** が あります。", "There are plants in the room.", "N3", undefined, "ショク"],
        ["庭に木を**植え**ました。", "にわ に き を **うえ**ました。", "I planted a tree in the garden.", undefined, undefined, "う.える"],
        ["庭に桜の木が**植わって**います。", "にわ に さくら の き が **うわって** います。", "A cherry tree is planted in the garden.", "N1", undefined, "う.わる"],
      ], [
        ["植木", "うえき", "garden shrubs, trees, potted plant", "N2", "母は**植木**が好きです。", "My mother likes garden plants.", "はは は **うえき** が すき です。"],
        ["田植え", "たうえ", "rice planting", "N2", "六月に**田植え**をします。", "We plant rice in June.", "ろくがつ に **たうえ** を します。"],
        ["鉢植え", "はちうえ", "potted plant", "N2", "窓の近くに**鉢植え**を置きます。", "I put a potted plant near the window.", "まど の ちかく に **はちうえ** を おきます。"],
      ]),
      bk("直", "N4", "straight, fix", "チョク ジキ", "なお.す なお.る ただ.ちに", [
        ["先生に**直接**聞きました。", "せんせい に **ちょくせつ** ききました。", "I asked the teacher directly.", "N3", undefined, "チョク"],
        ["**正直**に話します。", "**しょうじき** に はなします。", "I'll speak honestly.", "N3", undefined, "ジキ"],
        ["字を**直して**ください。", "じ を **なおして** ください。", "Please correct the writing.", "N3", undefined, "なお.す"],
        ["パソコンが**直り**ました。", "パソコン が **なおり**ました。", "The computer has been fixed.", "N3", undefined, "なお.る"],
        ["**直ちに**出発してください。", "**ただちに** しゅっぱつ して ください。", "Please depart immediately.", "N2", undefined, "ただ.ちに"],
      ]),
      bk("械", "N2", "machine, device", "カイ", "", [
        ["工場に**機械**があります。", "こうじょう に **きかい** が あります。", "There are machines in the factory.", "N3", undefined, "カイ"],
        ["病院に新しい**器械**が入りました。", "びょういん に あたらしい **きかい** が はいりました。", "New instruments arrived at the hospital.", "N3", undefined, "カイ"],
      ]),
      bk("棒", "N2", "stick, pole", "ボウ", "", [
        ["木の**棒**を持っています。", "き の **ぼう** を もって います。", "I'm holding a wooden stick.", "N3", undefined, "ボウ"],
      ]),
      bk("橋", "N2", "bridge", "キョウ", "はし", [
        ["**歩道橋**を渡って学校へ行きます。", "**ほどうきょう** を わたって がっこう へ いきます。", "I cross the pedestrian bridge to go to school.", "N2", undefined, "キョウ"],
        ["**橋**を渡ります。", "**はし** を わたります。", "I cross the bridge.", undefined, undefined, "はし"],
      ]),
    ],
  },
  {
    n: 20,
    note: "氵 + short right side",
    items: [
      bk("池", "N2", "pond", "チ", "いけ", [
        ["時計の**電池**が切れました。", "とけい の **でんち** が きれました。", "The clock's battery has run out.", "N3", undefined, "チ"],
        ["公園に**池**があります。", "こうえん に **いけ** が あります。", "There is a pond in the park.", undefined, undefined, "いけ"],
      ]),
      bk("地", "N5", "ground, earth", "チ ジ", "", [
        ["この**地図**を見てください。", "この **ちず** を みて ください。", "Please look at this map.", "N3", undefined, "チ"],
        ["**地下**鉄で行きます。", "**ちか**てつ で いきます。", "I'll go by subway.", "N3", undefined, "チ"],
        ["昨日、大きな**地震**がありました。", "きのう、 おおきな **じしん** が ありました。", "There was a big earthquake yesterday.", "N4", undefined, "ジ"],
      ]),
      bk("他", "N4", "other", "タ", "ほか", [
        ["**他人**に迷惑をかけません。", "**たにん** に めいわく を かけません。", "I don't trouble other people.", "N3", undefined, "タ"],
        ["**他**の店に行きます。", "**ほか** の みせ に いきます。", "I'll go to another shop.", "N3", undefined, "ほか"],
      ]),
      bk("沈", "N2", "sink", "チン", "しず.む しず.める", [
        ["嵐で船が**沈没**しました。", "あらし で ふね が **ちんぼつ** しました。", "The ship sank in the storm.", "N1", undefined, "チン"],
        ["太陽が**沈み**ました。", "たいよう が **しずみ**ました。", "The sun has set.", "N3", undefined, "しず.む"],
        ["ソファーに体を**沈め**ました。", "ソファー に からだ を **しずめ**ました。", "I sank down into the sofa.", "N1", undefined, "しず.める"],
      ]),
      bk("汚", "N2", "dirty", "オ", "きたな.い よご.れる よご.す", [
        ["川の**汚染**が問題です。", "かわ の **おせん** が もんだい です。", "River pollution is a problem.", "N3", undefined, "オ"],
        ["この部屋は**汚い**です。", "この へや は **きたない** です。", "This room is dirty.", "N3", undefined, "きたな.い"],
        ["シャツが**汚れて**しまいました。", "シャツ が **よごれて** しまいました。", "My shirt got dirty.", "N3", undefined, "よご.れる"],
        ["借りた本を**汚さないで**ください。", "かりた ほん を **よごさないで** ください。", "Please don't get the borrowed book dirty.", "N2", undefined, "よご.す"],
      ]),
    ],
  },
  {
    n: 21,
    note: "氵 + medium right side",
    items: [
      bk("河", "N2", "river", "カ", "かわ", [
        ["この**河川**は長いです。", "この **かせん** は ながい です。", "This river is long.", "N3", undefined, "カ"],
        ["大きな**河**が流れています。", "おおきな **かわ** が ながれて います。", "A big river is flowing.", "N3", undefined, "かわ"],
      ], [["運河", "うんが", "canal, waterway", "N2", "**運河**を船が通ります。", "Ships pass through the canal.", "**うんが** を ふね が とおります。"]]),
      bk("何", "N5", "what", "カ", "なに なん", [
        ["兄は大学で**幾何学**を勉強しています。", "あに は だいがく で **きかがく** を べんきょう して います。", "My older brother studies geometry at university.", "N1", undefined, "カ"],
        ["朝ご飯に**何**を食べましたか。", "あさごはん に **なに** を たべました か。", "What did you eat for breakfast?", "N5", undefined, "なに"],
        ["これは**何**ですか。", "これ は **なん** です か。", "What is this?", "N5", undefined, "なん"],
        ["**何時**に来ますか。", "**なんじ** に きます か。", "What time are you coming?", "N5", undefined, "なん"],
      ]),
      bk("波", "N2", "wave", "ハ", "なみ", [
        ["この辺りは**電波**が弱いです。", "この あたり は **でんぱ** が よわい です。", "The signal is weak around here.", "N2", undefined, "ハ"],
        ["今日は**波**が高いです。", "きょう は **なみ** が たかい です。", "The waves are high today.", "N3", undefined, "なみ"],
      ]),
      bk("泊", "N2", "stay overnight", "ハク", "と.まる と.める", [
        ["友だちの家に一**泊**しました。", "ともだち の いえ に いっ**ぱく** しました。", "I stayed one night at my friend's house.", "N2", undefined, "ハク"],
        ["ホテルに**泊まり**ます。", "ホテル に **とまり**ます。", "I will stay at a hotel.", "N2", undefined, "と.まる"],
        ["友だちを家に**泊め**ました。", "ともだち を いえ に **とめ**ました。", "I let my friend stay over at my house.", "N2", undefined, "と.める"],
      ], [
        ["泊める", "とめる", "to give shelter to, to lodge", "N2", "友だちを家に**泊め**ました。", "I let my friend stay over at my house.", "ともだち を いえ に **とめ**ました。"],
        ["宿泊", "しゅくはく", "lodging", "N3", "安いホテルに**宿泊**します。", "I'll stay at a cheap hotel.", "やすい ホテル に **しゅくはく** します。"],
        ["宿泊先", "しゅくはくさき", "lodging place", "N2", "**宿泊先**を教えてください。", "Please tell me where you're staying.", "**しゅくはくさき** を おしえて ください。"],
      ]),
      bk("白", "N5", "white", "ハク", "しろ しろ.い", [
        ["この答案は**白紙**です。", "この とうあん は **はくし** です。", "This answer sheet is blank.", "N2", undefined, "ハク"],
        ["私は**白**が好きです。", "わたし は **しろ** が すき です。", "I like white.", "N5", undefined, "しろ"],
        ["**白い**シャツを着ます。", "**しろい** シャツ を きます。", "I wear a white shirt.", undefined, undefined, "しろ.い"],
      ]),
      bk("百", "N5", "hundred", "ヒャク", "", [
        ["これは**百**円です。", "これ は **ひゃく**えん です。", "This is one hundred yen.", undefined, undefined, "ヒャク"],
      ]),
      bk("泥", "N2", "mud", "デイ", "どろ", [
        ["父は昨夜**泥酔**して帰ってきました。", "ちち は さくや **でいすい** して かえって きました。", "My father came home dead drunk last night.", "N1", undefined, "デイ"],
        ["靴が**泥**で汚れました。", "くつ が **どろ** で よごれました。", "My shoes got dirty with mud.", "N3", undefined, "どろ"],
      ]),
    ],
  },
  {
    n: 22,
    note: "谷 sits inside 浴",
    items: [
      bk("浅", "N2", "shallow", "セン", "あさ.い", [
        ["それは**浅薄**な考えです。", "それ は **せんぱく** な かんがえ です。", "That is a shallow way of thinking.", "N1", undefined, "セン"],
        ["この川は**浅い**です。", "この かわ は **あさい** です。", "This river is shallow.", undefined, undefined, "あさ.い"],
      ]),
      bk("浴", "N2", "bathe", "ヨク", "あ.びる あ.びせる", [
        ["**浴室**はきれいです。", "**よくしつ** は きれい です。", "The bathroom is clean.", undefined, undefined, "ヨク"],
        ["シャワーを**浴び**ます。", "シャワー を **あび**ます。", "I take a shower.", "N3", undefined, "あ.びる"],
        ["記者たちは彼に質問を**浴びせ**ました。", "きしゃ たち は かれ に しつもん を **あびせ**ました。", "The reporters showered him with questions.", "N1", undefined, "あ.びせる"],
      ], [
        ["海水浴", "かいすいよく", "sea bathing, seawater bath", "N2", "夏に**海水浴**に行きます。", "I go swimming in the sea in summer.", "なつ に **かいすいよく** に いきます。"],
        ["浴衣", "ゆかた", "bathrobe, informal summer kimono", "N2", "祭りで**浴衣**を着ました。", "I wore a yukata at the festival.", "まつり で **ゆかた** を きました。"],
      ]),
      bk("涙", "N2", "tears", "ルイ", "なみだ", [
        ["優勝して**感涙**にむせびました。", "ゆうしょう して **かんるい** に むせびました。", "We won and were choked with tears of joy.", "N1", undefined, "ルイ"],
        ["**涙**が出ました。", "**なみだ** が でました。", "Tears came out.", "N3", undefined, "なみだ"],
      ]),
      bk("谷", "N2", "valley", "コク", "たに", [
        ["秋の**渓谷**は紅葉がきれいです。", "あき の **けいこく** は こうよう が きれい です。", "The autumn leaves in the gorge are beautiful.", "N1", undefined, "コク"],
        ["山と山の間に**谷**があります。", "やま と やま の あいだ に **たに** が あります。", "There is a valley between the mountains.", "N3", undefined, "たに"],
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
        ["**今夜**は星がきれいです。", "**こんや** は ほし が きれい です。", "The stars are beautiful tonight.", "N2", undefined, "ヤ"],
        ["**夜**は静かです。", "**よる** は しずか です。", "It is quiet at night.", "N2", undefined, "よる"],
        ["**夜中**に目が覚めました。", "**よなか** に め が さめました。", "I woke up in the middle of the night.", "N3", undefined, "よ"],
      ]),
      bk("涼", "N2", "cool, refreshing", "リョウ", "すず.しい", [
        ["夏は川で**納涼**祭りがあります。", "なつ は かわ で **のうりょう** まつり が あります。", "In summer there is an evening-cool festival by the river.", "N1", undefined, "リョウ"],
        ["秋は**涼しい**です。", "あき は **すずしい** です。", "Autumn is cool.", "N2", undefined, "すず.しい"],
      ]),
      bk("京", "N4", "capital", "キョウ ケイ", "", [
        ["**東京**で働いています。", "**とうきょう** で はたらいて います。", "I work in Tokyo.", undefined, undefined, "キョウ"],
        ["**京都**はきれいな町です。", "**きょうと** は きれいな まち です。", "Kyoto is a beautiful city.", undefined, undefined, "キョウ"],
        ["**京浜**工業地帯は東京と横浜の間にあります。", "**けいひん** こうぎょう ちたい は とうきょう と よこはま の あいだ に あります。", "The Keihin industrial zone lies between Tokyo and Yokohama.", "N1", undefined, "ケイ"],
      ]),
      bk("混", "N2", "mix, crowded", "コン", "ま.ぜる ま.ざる こ.む", [
        ["駅は朝、**混雑**します。", "えき は あさ、 **こんざつ** します。", "The station gets crowded in the morning.", "N3", undefined, "コン"],
        ["卵と牛乳を**混ぜ**ます。", "たまご と ぎゅうにゅう を **まぜ**ます。", "I mix the eggs and milk.", "N3", undefined, "ま.ぜる"],
        ["水と油は**混ざり**ません。", "みず と あぶら は **まざり**ません。", "Water and oil don't mix.", "N3", undefined, "ま.ざる"],
        ["電車が**混んで**います。", "でんしゃ が **こんで** います。", "The train is crowded.", undefined, undefined, "こ.む"],
      ], [
        ["混合", "こんごう", "mixing, mixture", "N2", "二つの色を**混合**します。", "I mix the two colors.", "ふたつ の いろ を **こんごう** します。"],
        ["混雑", "こんざつ", "confusion, congestion", "N3", "駅は朝、**混雑**します。", "The station gets crowded in the morning.", "えき は あさ、 **こんざつ** します。"],
        ["混ざる", "まざる", "to be mixed, to mingle with", "N3", "水と油は**混ざり**ません。", "Water and oil don't mix.", "みず と あぶら は **まざり**ません。"],
        ["混じる", "まじる", "to be mixed, to mingle with", "N3", "白い糸に赤が**混じって**います。", "There is some red mixed in with the white thread.", "しろい いと に あか が **まじって** います。"],
      ]),
    ],
  },
  {
    n: 24,
    note: "氵 + boxy right side",
    items: [
      bk("清", "N2", "pure, clean", "セイ ショウ", "きよ.い きよ.める", [
        ["台所を**清潔**にします。", "だいどころ を **せいけつ** に します。", "I keep the kitchen clean.", "N2", undefined, "セイ"],
        ["山伏が「**六根清浄**」と唱えます。", "やまぶし が 「**ろっこんしょうじょう**」 と となえます。", "The mountain ascetics chant \"purify the six senses.\"", "N1", undefined, "ショウ"],
        ["山の川の水は**清い**です。", "やま の かわ の みず は **きよい** です。", "The mountain river water is pure.", "N2", undefined, "きよ.い"],
        ["神社に入る前に手を**清め**ます。", "じんじゃ に はいる まえ に て を **きよめ**ます。", "I purify my hands before entering the shrine.", "N1", undefined, "きよ.める"],
      ], [
        ["清書", "せいしょ", "clean copy", "N2", "手紙を**清書**しました。", "I made a clean copy of the letter.", "てがみ を **せいしょ** しました。"],
        ["清掃", "せいそう", "cleaning", "N2", "毎朝、公園を**清掃**します。", "The park is cleaned every morning.", "まいあさ、 こうえん を **せいそう** します。"],
        ["清算", "せいさん", "settlement (of accounts); liquidation", "N2", "旅行の費用を**清算**しました。", "We settled the travel expenses.", "りょこう の ひよう を **せいさん** しました。"],
      ]),
      bk("晴", "N4", "clear up, sunny", "セイ", "は.れる は.らす", [
        ["今日は雲一つない**快晴**です。", "きょう は くも ひとつ ない **かいせい** です。", "Today is perfectly clear, without a single cloud.", "N2", undefined, "セイ"],
        ["今日は**晴れ**です。", "きょう は **はれ** です。", "It is sunny today.", undefined, undefined, "は.れる"],
        ["明日は**晴れる**でしょう。", "あした は **はれる** でしょう。", "It will probably clear up tomorrow.", undefined, undefined, "は.れる"],
        ["カラオケで気分を**晴らし**ました。", "カラオケ で きぶん を **はらし**ました。", "I cheered myself up at karaoke.", "N1", undefined, "は.らす"],
      ]),
      bk("静", "N4", "quiet", "セイ ジョウ", "しず.か", [
        ["**冷静**に考えてください。", "**れいせい** に かんがえて ください。", "Please think calmly.", "N2", undefined, "セイ"],
        ["看護師が腕の**静脈**に注射しました。", "かんごし が うで の **じょうみゃく** に ちゅうしゃ しました。", "The nurse gave an injection into a vein in my arm.", "N1", undefined, "ジョウ"],
        ["図書館は**静か**です。", "としょかん は **しずか** です。", "The library is quiet.", undefined, undefined, "しず.か"],
      ]),
      bk("減", "N2", "decrease", "ゲン", "へ.る へ.らす", [
        ["この町の人口が**減少**しています。", "この まち の じんこう が **げんしょう** して います。", "The population of this town is decreasing.", "N3", undefined, "ゲン"],
        ["お金が**減り**ました。", "おかね が **へり**ました。", "My money has decreased.", "N3", undefined, "へ.る"],
        ["学生の数が**減って**います。", "がくせい の かず が **へって** います。", "The number of students is going down.", "N3", undefined, "へ.る"],
        ["旅行の荷物を**減らし**ます。", "りょこう の にもつ を **へらし**ます。", "I'll reduce my luggage for the trip.", "N3", undefined, "へ.らす"],
      ], [
        ["増減", "ぞうげん", "increase and decrease, fluctuation", "N2", "客の**増減**を調べます。", "We look into the rise and fall in customers.", "きゃく の **ぞうげん** を しらべます。"],
        ["加減", "かげん", "adjustment; addition and subtraction", "N3", "お湯の**加減**はどうですか。", "How is the water temperature?", "おゆ の **かげん** は どう です か。"],
        ["減少", "げんしょう", "decrease, reduction, decline", "N3", "この町の人口が**減少**しています。", "The population of this town is decreasing.", "この まち の じんこう が **げんしょう** して います。"],
        ["減らす", "へらす", "to decrease, to diminish", "N3", "旅行の荷物を**減らし**ます。", "I'll reduce my luggage for the trip.", "りょこう の にもつ を **へらし**ます。"],
        ["減速", "げんそく", "deceleration", "N2", "カーブで**減速**します。", "I slow down on curves.", "カーブ で **げんそく** します。"],
        ["半減", "はんげん", "reduction by half; halving", "N2", "台風で客が**半減**しました。", "The number of customers was halved because of the typhoon.", "たいふう で きゃく が **はんげん** しました。"],
      ]),
      bk("温", "N2", "warm", "オン", "あたた.かい あたた.める あたた.まる", [
        ["**温泉**に行きたいです。", "**おんせん** に いきたい です。", "I want to go to a hot spring.", "N2", undefined, "オン"],
        ["**温かい**お茶を飲みます。", "**あたたかい** おちゃ を のみます。", "I drink warm tea.", "N3", undefined, "あたた.かい"],
        ["スープを**温め**ます。", "スープ を **あたため**ます。", "I'll heat up the soup.", "N3", undefined, "あたた.める"],
        ["風呂で体が**温まり**ました。", "ふろ で からだ が **あたたまり**ました。", "The bath warmed me up.", "N2", undefined, "あたた.まる"],
      ], [
        ["温まる", "あたたまる", "to warm oneself", "N2", "風呂で体が**温まり**ました。", "The bath warmed me up.", "ふろ で からだ が **あたたまり**ました。"],
        ["温室", "おんしつ", "greenhouse", "N2", "**温室**で野菜を育てます。", "We grow vegetables in a greenhouse.", "**おんしつ** で やさい を そだてます。"],
        ["温帯", "おんたい", "temperate zone", "N2", "日本は**温帯**にあります。", "Japan is in the temperate zone.", "にほん は **おんたい** に あります。"],
        ["温める", "あたためる", "to warm, to heat", "N3", "スープを**温め**ます。", "I'll heat up the soup.", "スープ を **あたため**ます。"],
        ["温暖", "おんだん", "warmth", "N3", "この島は冬も**温暖**です。", "This island is warm even in winter.", "この しま は ふゆ も **おんだん** です。"],
        ["温度", "おんど", "temperature", "N3", "部屋の**温度**を上げます。", "I'll raise the room temperature.", "へや の **おんど** を あげます。"],
        ["地球温暖化", "ちきゅうおんだんか", "global warming", "N2", "**地球温暖化**が進んでいます。", "Global warming is getting worse.", "**ちきゅうおんだんか** が すすんで います。"],
        ["常温", "じょうおん", "normal temperature; room temperature", "N2", "薬は**常温**で保存します。", "The medicine is stored at room temperature.", "くすり は **じょうおん** で ほぞん します。"],
        ["温厚", "おんこう", "gentle; mild-mannered", "N2", "部長は**温厚**な人です。", "The department manager is a gentle person.", "ぶちょう は **おんこう** な ひと です。"],
      ]),
      bk("測", "N2", "measure", "ソク", "はか.る", [
        ["望遠鏡で星を**観測**します。", "ぼうえんきょう で ほし を **かんそく** します。", "I observe the stars with a telescope.", "N2", undefined, "ソク"],
        ["体温を**測り**ます。", "たいおん を **はかり**ます。", "I take my temperature.", "N3", undefined, "はか.る"],
      ], [
        ["測定", "そくてい", "measurement", "N2", "体温を**測定**します。", "I take my body temperature.", "たいおん を **そくてい** します。"],
        ["測量", "そくりょう", "measurement, surveying", "N2", "土地を**測量**しました。", "We surveyed the land.", "とち を **そくりょう** しました。"],
        ["予測", "よそく", "prediction, estimation", "N3", "明日の天気を**予測**します。", "I predict tomorrow's weather.", "あした の てんき を **よそく** します。"],
        ["計測", "けいそく", "measuring; measurement", "N2", "部屋の広さを**計測**しました。", "I measured the size of the room.", "へや の ひろさ を **けいそく** しました。"],
      ]),
      bk("側", "N3", "side", "ソク", "がわ", [
        ["箱の**側面**に名前を書きます。", "はこ の **そくめん** に なまえ を かきます。", "I write my name on the side of the box.", "N2", undefined, "ソク"],
        ["道の右**側**を歩きます。", "みち の みぎ**がわ** を あるきます。", "I walk on the right side of the road.", "N3", undefined, "がわ"],
      ]),
    ],
  },
  {
    n: 25,
    note: "氵 + tall right side",
    items: [
      bk("湖", "N2", "lake", "コ", "みずうみ", [
        ["**湖畔**のホテルに泊まりました。", "**こはん** の ホテル に とまりました。", "I stayed at a lakeside hotel.", "N1", undefined, "コ"],
        ["**湖**で泳ぎました。", "**みずうみ** で およぎました。", "I swam in the lake.", undefined, undefined, "みずうみ"],
      ]),
      bk("湯", "N2", "hot water", "トウ", "ゆ", [
        ["近所の**銭湯**に行きます。", "きんじょ の **せんとう** に いきます。", "I go to the neighborhood public bath.", "N2", undefined, "トウ"],
        ["**お湯**を沸かします。", "**おゆ** を わかします。", "I boil water.", undefined, undefined, "ゆ"],
        ["なべから**湯気**が出ています。", "なべ から **ゆげ** が でて います。", "Steam is coming from the pot.", "N2", undefined, "ゆ"],
      ], [
        ["湯飲み", "ゆのみ", "teacup", "N2", "**湯飲み**でお茶を飲みます。", "I drink tea from a teacup.", "**ゆのみ** で おちゃ を のみます。"],
        ["湯飲", "ゆのみ", "teacup", "N2", "新しい**湯飲**を買いました。", "I bought a new teacup.", "あたらしい **ゆのみ** を かいました。"],
      ]),
      bk("場", "N4", "place", "ジョウ", "ば", [
        ["**駐車場**はどこですか。", "**ちゅうしゃじょう** は どこ です か。", "Where is the parking lot?", "N2", undefined, "ジョウ"],
        ["**会場**に人が集まりました。", "**かいじょう** に ひと が あつまりました。", "People gathered at the venue.", "N2", undefined, "ジョウ"],
        ["待ち合わせの**場所**を決めましょう。", "まちあわせ の **ばしょ** を きめましょう。", "Let's decide on a meeting place.", "N4", undefined, "ば"],
      ]),
      bk("湾", "N2", "bay, gulf", "ワン", "", [
        ["東京**湾**が見えます。", "とうきょう**わん** が みえます。", "You can see Tokyo Bay.", "N3", undefined, "ワン"],
      ]),
      bk("湿", "N2", "damp, humid", "シツ", "しめ.る しめ.す", [
        ["夏は**湿度**が高いです。", "なつ は **しつど** が たかい です。", "The humidity is high in summer.", "N2", undefined, "シツ"],
        ["服がまだ**湿って**います。", "ふく が まだ **しめって** います。", "The clothes are still damp.", "N2", undefined, "しめ.る"],
        ["タオルを水で**湿して**ください。", "タオル を みず で **しめして** ください。", "Please dampen the towel with water.", "N1", undefined, "しめ.す"],
      ], [
        ["湿気", "しっき", "moisture, humidity, dampness", "N2", "夏は**湿気**が多いです。", "It is very humid in summer.", "なつ は **しっき** が おおい です。"],
        ["湿っぽい", "しめっぽい", "damp; humid; gloomy", "N2", "この部屋は**湿っぽい**です。", "This room is damp.", "この へや は **しめっぽい** です。"],
      ]),
    ],
  },
  {
    n: 26,
    note: "氵 + heavy right side",
    items: [
      bk("準", "N2", "standard, semi-", "ジュン", "", [
        ["旅行の**準備**をします。", "りょこう の **じゅんび** を します。", "I prepare for the trip.", undefined, undefined, "ジュン"],
        ["会社の**基準**を守ります。", "かいしゃ の **きじゅん** を まもります。", "I follow the company's standards.", "N2", undefined, "ジュン"],
      ], [
        ["規準", "きじゅん", "standard, basis, criteria", "N2", "**規準**に従って作ります。", "We make it according to the standards.", "**きじゅん** に したがって つくります。"],
        ["標準", "ひょうじゅん", "standard, level", "N2", "**標準**の大きさを選びます。", "I choose the standard size.", "**ひょうじゅん** の おおきさ を えらびます。"],
        ["水準", "すいじゅん", "level, standard", "N3", "生活の**水準**が上がりました。", "The standard of living has risen.", "せいかつ の **すいじゅん** が あがりました。"],
      ]),
      bk("溶", "N2", "melt, dissolve", "ヨウ", "と.ける と.かす", [
        ["山から**溶岩**が流れました。", "やま から **ようがん** が ながれました。", "Lava flowed from the mountain.", "N2", undefined, "ヨウ"],
        ["氷が**溶け**ました。", "こおり が **とけ**ました。", "The ice has melted.", "N2", undefined, "と.ける"],
        ["砂糖を水に**溶かし**ます。", "さとう を みず に **とかし**ます。", "I dissolve sugar in water.", "N2", undefined, "と.かす"],
      ], [
        ["溶け込む", "とけこむ", "to melt into; to become a part of", "N2", "新しいクラスに**溶け込み**ました。", "I fit right into my new class.", "あたらしい クラス に **とけこみ**ました。"],
        ["溶岩", "ようがん", "lava", "N2", "山から**溶岩**が流れました。", "Lava flowed from the mountain.", "やま から **ようがん** が ながれました。"],
      ]),
      bk("容", "N3", "contain, form", "ヨウ", "", [
        ["手紙の**内容**を確かめます。", "てがみ の **ないよう** を たしかめます。", "I check the contents of the letter.", "N3", undefined, "ヨウ"],
        ["この問題は**容易**です。", "この もんだい は **ようい** です。", "This problem is easy.", "N3", undefined, "ヨウ"],
      ]),
      bk("滴", "N2", "drop, drip", "テキ", "しずく", [
        ["窓に**水滴**が付いています。", "まど に **すいてき** が ついて います。", "There are water drops on the window.", "N2", undefined, "テキ"],
        ["油を一**滴**入れます。", "あぶら を いっ**てき** いれます。", "I add one drop of oil.", "N2", undefined, "テキ"],
        ["葉っぱから雨の**滴**が落ちます。", "はっぱ から あめ の **しずく** が おちます。", "Raindrops fall from the leaves.", "N1", undefined, "しずく"],
      ]),
      bk("適", "N3", "suitable", "テキ", "", [
        ["彼はこの仕事に**適して**います。", "かれ は この しごと に **てきして** います。", "He is suited to this job.", undefined, undefined, "テキ"],
        ["**適当**な言葉が見つかりません。", "**てきとう** な ことば が みつかりません。", "I can't find the right words.", undefined, undefined, "テキ"],
      ]),
      bk("敵", "N3", "enemy, opponent", "テキ", "かたき", [
        ["試合で**敵**に負けました。", "しあい で **てき** に まけました。", "We lost to the opponent in the match.", "N3", undefined, "テキ"],
        ["課長は私を**目の敵**にしています。", "かちょう は わたし を **めのかたき** に して います。", "The section chief treats me as his enemy.", "N1", undefined, "かたき"],
      ]),
    ],
  },
  {
    n: 27,
    note: "氵 + dense right side",
    items: [
      bk("漁", "N2", "fishing", "ギョ リョウ", "", [
        ["この町は**漁業**が盛んです。", "この まち は **ぎょぎょう** が さかん です。", "Fishing is big in this town.", "N2", undefined, "ギョ"],
        ["父は**漁師**です。", "ちち は **りょうし** です。", "My father is a fisherman.", "N2", undefined, "リョウ"],
      ]),
      bk("魚", "N4", "fish", "ギョ", "さかな うお", [
        ["**金魚**を飼っています。", "**きんぎょ** を かって います。", "I keep goldfish.", "N3", undefined, "ギョ"],
        ["**魚**を焼きます。", "**さかな** を やきます。", "I grill fish.", "N3", undefined, "さかな"],
        ["朝早く**魚市場**へ行きました。", "あさ はやく **うおいちば** へ いきました。", "I went to the fish market early in the morning.", "N1", undefined, "うお"],
      ]),
      bk("濃", "N2", "thick, strong (taste)", "ノウ", "こ.い", [
        ["塩の**濃度**を調べます。", "しお の **のうど** を しらべます。", "I check the salt concentration.", "N2", undefined, "ノウ"],
        ["このコーヒーは**濃い**です。", "この コーヒー は **こい** です。", "This coffee is strong.", "N3", undefined, "こ.い"],
      ], [["濃厚", "のうこう", "rich (in flavor); thick; dense", "N2", "このスープは**濃厚**です。", "This soup is rich.", "この スープ は **のうこう** です。"]]),
      bk("濯", "N2", "wash, rinse", "タク", "", [
        ["今日は**洗濯**をします。", "きょう は **せんたく** を します。", "I'll do the laundry today.", undefined, undefined, "タク"],
        ["**洗濯機**が壊れました。", "**せんたくき** が こわれました。", "The washing machine broke.", "N2", undefined, "タク"],
      ]),
      bk("曜", "N5", "day of the week", "ヨウ", "", [
        ["今日は何**曜日**ですか。", "きょう は なん**ようび** です か。", "What day of the week is it today?", "N3", undefined, "ヨウ"],
      ]),
    ],
  },
  {
    n: 28,
    note: "氵 group, easy to mix up",
    items: [
      bk("況", "N2", "condition, situation", "キョウ", "", [
        ["今の**状況**を説明します。", "いま の **じょうきょう** を せつめい します。", "I'll explain the current situation.", "N3", undefined, "キョウ"],
      ]),
      bk("兄", "N4", "older brother", "ケイ キョウ", "あに", [
        ["姉の夫は私の**義兄**です。", "あね の おっと は わたし の **ぎけい** です。", "My older sister's husband is my brother-in-law.", "N1", undefined, "ケイ"],
        ["私は三人**兄弟**です。", "わたし は さんにん **きょうだい** です。", "There are three of us siblings.", "N4", undefined, "キョウ"],
        ["**兄**は大学生です。", "**あに** は だいがくせい です。", "My older brother is a university student.", undefined, undefined, "あに"],
        ["お**兄さん**によろしく。", "お**にいさん** に よろしく。", "Say hello to your brother.", undefined, undefined, "あに"],
      ]),
      bk("泉", "N2", "spring, fountain", "セン", "いずみ", [
        ["**温泉**に入りました。", "**おんせん** に はいりました。", "I got into the hot spring.", "N2", undefined, "セン"],
        ["山に**泉**があります。", "やま に **いずみ** が あります。", "There is a spring in the mountain.", "N3", undefined, "いずみ"],
      ]),
      bk("沸", "N2", "boil", "フツ", "わ.く わ.かす", [
        ["水は百度で**沸騰**します。", "みず は ひゃくど で **ふっとう** します。", "Water boils at 100 degrees.", "N1", undefined, "フツ"],
        ["お湯が**沸き**ました。", "おゆ が **わき**ました。", "The water has boiled.", undefined, undefined, "わ.く"],
        ["やかんでお湯を**沸かし**ます。", "やかん で おゆ を **わかし**ます。", "I boil water in a kettle.", undefined, undefined, "わ.かす"],
      ]),
      bk("油", "N2", "oil", "ユ", "あぶら", [
        ["**醤油**をかけてください。", "**しょうゆ** を かけて ください。", "Please put soy sauce on it.", "N3", undefined, "ユ"],
        ["フライパンに**油**を入れます。", "フライパン に **あぶら** を いれます。", "I put oil in the frying pan.", "N3", undefined, "あぶら"],
      ], [
        ["油断", "ゆだん", "negligence, unpreparedness", "N2", "**油断**して失敗しました。", "I got careless and failed.", "**ゆだん** して しっぱい しました。"],
        ["石油", "せきゆ", "oil, petroleum, kerosene", "N3", "**石油**の値段が上がりました。", "The price of oil has gone up.", "**せきゆ** の ねだん が あがりました。"],
      ]),
      bk("由", "N4", "reason, cause", "ユ ユウ", "よし", [
        ["大阪**経由**で東京へ行きます。", "おおさか **けいゆ** で とうきょう へ いきます。", "I'm going to Tokyo via Osaka.", "N2", undefined, "ユ"],
        ["**理由**を教えてください。", "**りゆう** を おしえて ください。", "Please tell me the reason.", undefined, undefined, "ユウ"],
        ["**自由**な時間が欲しいです。", "**じゆう** な じかん が ほしい です。", "I want some free time.", undefined, undefined, "ユウ"],
        ["彼が何を考えているか、私には知る**由**もありません。", "かれ が なに を かんがえて いる か、 わたし に は しる **よし** も ありません。", "I have no way of knowing what he is thinking.", "N1", undefined, "よし"],
      ]),
    ],
  },
];
