// N2 kanji book — groups 30–57 (kanji 117–240). See part-1.ts for the format.
import { bk, type BookGroup } from "../../builders.ts";

export const GROUPS: BookGroup[] = [
  {
    n: 30,
    note: "火 fire, simple forms",
    items: [
      bk("灯", "N2", "lamp, light", "トウ", "ひ あかり", [
        ["部屋の**電灯**を消しました。", "へや の **でんとう** を けしました。", "I turned off the room light.", "N3", undefined, "トウ"],
        ["夜、遠くに町の**灯**が見えます。", "よる、 とおく に まち の **ひ** が みえます。", "At night I can see the lights of the town in the distance.", "N2", undefined, "ひ"],
        ["冬は**灯油**を買います。", "ふゆ は **とうゆ** を かいます。", "I buy kerosene in winter.", "N2", undefined, "トウ"],
        ["海の近くに**灯台**があります。", "うみ の ちかく に **とうだい** が あります。", "There is a lighthouse near the sea.", "N2", undefined, "トウ"],
        ["部屋の**蛍光灯**を換えます。", "へや の **けいこうとう** を かえます。", "I'm replacing the fluorescent light in my room.", "N2", undefined, "トウ"],
      ], [
        ["灯り", "あかり", "light, lamp", "N3", "遠くに**灯り**が見えます。", "I can see a light in the distance.", "とおく に **あかり** が みえます。"],
      ]),
      bk("灰", "N2", "ash", "カイ", "はい", [
        ["たばこの**灰**が落ちました。", "たばこ の **はい** が おちました。", "Cigarette ash fell.", "N3", undefined, "はい"],
        ["**灰色**の服を着ています。", "**はいいろ** の ふく を きて います。", "I'm wearing gray clothes.", "N2", undefined, "はい"],
        ["運動場に**石灰**で白い線を引きます。", "うんどうじょう に **せっかい** で しろい せん を ひきます。", "We draw white lines on the sports ground with lime.", "N1", undefined, "カイ"],
      ]),
      bk("炭", "N2", "charcoal, coal", "タン", "すみ", [
        ["**炭**で肉を焼きます。", "**すみ** で にく を やきます。", "I grill meat over charcoal.", "N2", undefined, "すみ"],
        ["昔ここに**炭鉱**がありました。", "むかし ここ に **たんこう** が ありました。", "There used to be a coal mine here.", "N2", undefined, "タン"],
      ], [
        ["石炭", "せきたん", "coal", "N3", "**石炭**を使います。", "We use coal.", "**せきたん** を つかいます。"],
      ]),
    ],
  },
  {
    n: 31,
    note: "火 fire, complex forms",
    items: [
      bk("焼", "N2", "burn, grill, bake", "ショウ", "や.く や.ける", [
        ["魚を**焼き**ます。", "さかな を **やき**ます。", "I grill fish.", "N4", undefined, "や.く"],
        ["火事で家が**全焼**しました。", "かじ で いえ が **ぜんしょう** しました。", "The house burned down completely in the fire.", "N1", undefined, "ショウ"],
      ], [
        ["焼ける", "やける", "to burn; to be baked, to be grilled", "N3", "パンがおいしそうに**焼け**ました。", "The bread has baked nicely.", "パン が おいしそう に **やけ**ました。"],
      ]),
      bk("照", "N2", "shine, illuminate", "ショウ", "て.る て.らす", [
        ["ライトで足元を**照らし**ます。", "ライト で あしもと を **てらし**ます。", "I light up my feet with a flashlight.", "N2", undefined, "て.らす"],
        ["部屋の**照明**が明るいです。", "へや の **しょうめい** が あかるい です。", "The room lighting is bright.", "N2", undefined, "ショウ"],
        ["太陽が**照って**います。", "たいよう が **てって** います。", "The sun is shining.", "N2", undefined, "て.る"],
        ["二つの絵を**対照**します。", "ふたつ の え を **たいしょう** します。", "I compare the two pictures.", "N2", undefined, "ショウ"],
      ]),
      bk("燃", "N2", "burn", "ネン", "も.える も.やす", [
        ["紙はよく**燃え**ます。", "かみ は よく **もえ**ます。", "Paper burns easily.", "N3", undefined, "も.える"],
        ["車の**燃料**が少なくなりました。", "くるま の **ねんりょう** が すくなく なりました。", "The car is running low on fuel.", "N2", undefined, "ネン"],
      ], [
        ["燃やす", "もやす", "to burn", "N3", "庭で古い紙を**燃やし**ます。", "I burn old paper in the yard.", "にわ で ふるい かみ を **もやし**ます。"],
      ]),
      bk("然", "N3", "nature, so", "ゼン ネン", "", [
        ["**自然**が豊かな所です。", "**しぜん** が ゆたか な ところ です。", "It's a place rich in nature.", "N3", undefined, "ゼン"],
        ["**突然**、雨が降りました。", "**とつぜん**、 あめ が ふりました。", "Suddenly it started raining.", "N3", undefined, "ゼン"],
        ["これは山の**天然**の水です。", "これ は やま の **てんねん** の みず です。", "This is natural spring water from the mountains.", "N2", undefined, "ネン"],
      ]),
      bk("燥", "N2", "dry up", "ソウ", "", [
        ["冬は空気が**乾燥**します。", "ふゆ は くうき が **かんそう** します。", "The air gets dry in winter.", "N2", undefined, "ソウ"],
        ["**乾燥機**で服を乾かします。", "**かんそうき** で ふく を かわかします。", "I dry clothes in the dryer.", "N2", undefined, "ソウ"],
      ]),
      bk("爆", "N2", "explode, burst", "バク", "", [
        ["工場で**爆発**がありました。", "こうじょう で **ばくはつ** が ありました。", "There was an explosion at the factory.", "N3", undefined, "バク"],
      ]),
    ],
  },
  {
    n: 32,
    note: "冫 ice radical, looks like 氵",
    items: [
      bk("凍", "N2", "freeze", "トウ", "こお.る こご.える", [
        ["池の水が**凍り**ました。", "いけ の みず が **こおり**ました。", "The pond water froze.", "N3", undefined, "こお.る"],
        ["**冷凍**食品を買いました。", "**れいとう** しょくひん を かいました。", "I bought frozen food.", "N2", undefined, "トウ"],
        ["寒くて手が**凍え**そうです。", "さむくて て が **こごえ**そう です。", "It's so cold my hands feel like they'll freeze.", "N2", undefined, "こご.える"],
      ]),
      bk("東", "N5", "east", "トウ", "ひがし", [
        ["**東**の空が明るいです。", "**ひがし** の そら が あかるい です。", "The eastern sky is bright.", "N5", undefined, "ひがし"],
        ["私は**東京**に住んでいます。", "わたし は **とうきょう** に すんで います。", "I live in Tokyo.", "N5", undefined, "トウ"],
      ]),
    ],
  },
  {
    n: 33,
    note: "玉 shapes and 宀 roofs",
    items: [
      bk("玉", "N2", "ball, jewel", "ギョク", "たま", [
        ["小さい**玉**で遊びます。", "ちいさい **たま** で あそびます。", "I play with a small ball.", "N3", undefined, "たま"],
        ["お客さんに**玉露**を出しました。", "おきゃくさん に **ぎょくろ** を だしました。", "I served the guest high-grade green tea.", "N1", undefined, "ギョク"],
      ], [
        ["玉ねぎ", "たまねぎ", "onion", "N3", "**玉ねぎ**を切ります。", "I cut the onion.", "**たまねぎ** を きります。"],
      ]),
      bk("王", "N3", "king", "オウ", "", [
        ["昔、この国に**王**がいました。", "むかし、 この くに に **おう** が いました。", "Long ago there was a king in this country.", "N3", undefined, "オウ"],
        ["**王様**の話を読みました。", "**おうさま** の はなし を よみました。", "I read a story about a king.", "N3", undefined, "オウ"],
      ]),
      bk("珍", "N2", "rare, unusual", "チン", "めずら.しい", [
        ["これは**珍しい**花です。", "これ は **めずらしい** はな です。", "This is a rare flower.", "N3", undefined, "めずら.しい"],
        ["これはこの地方の**珍味**です。", "これ は この ちほう の **ちんみ** です。", "This is a delicacy of this region.", "N1", undefined, "チン"],
      ]),
      bk("瓶", "N2", "bottle, jar", "ビン", "", [
        ["**瓶**にジュースを入れます。", "**びん** に ジュース を いれます。", "I put juice in a bottle.", "N3", undefined, "ビン"],
        ["**瓶詰**のジャムを買いました。", "**びんづめ** の ジャム を かいました。", "I bought bottled jam.", "N2", undefined, "ビン"],
      ]),
      bk("宝", "N2", "treasure", "ホウ", "たから", [
        ["子どもは**宝**です。", "こども は **たから** です。", "Children are treasures.", "N3", undefined, "たから"],
        ["**国宝**のお寺を見に行きました。", "**こくほう** の おてら を み に いきました。", "I went to see a temple that is a national treasure.", "N2", undefined, "ホウ"],
      ], [
        ["宝物", "たからもの", "treasure", "N3", "これは私の**宝物**です。", "This is my treasure.", "これ は わたし の **たからもの** です。"],
        ["宝石", "ほうせき", "gem, jewel", "N3", "母は**宝石**を集めています。", "My mother collects gemstones.", "はは は **ほうせき** を あつめて います。"],
      ]),
      bk("宇", "N2", "eaves, space", "ウ", "", [
        ["**宇宙**にはたくさんの星があります。", "**うちゅう** には たくさん の ほし が あります。", "There are many stars in space.", "N3", undefined, "ウ"],
        ["**宇宙人**の映画を見ました。", "**うちゅうじん** の えいが を みました。", "I watched a movie about aliens.", "N2", undefined, "ウ"],
      ]),
    ],
  },
  {
    n: 34,
    note: "nearly the same box shape",
    items: [
      bk("皿", "N2", "plate, dish", "", "さら", [
        ["**お皿**を洗います。", "**おさら** を あらいます。", "I wash the dishes.", "N3", undefined, "さら"],
        ["夕食の後、**皿洗い**をします。", "ゆうしょく の あと、 **さらあらい** を します。", "I do the dishes after dinner.", "N2", undefined, "さら"],
      ]),
      bk("血", "N2", "blood", "ケツ", "ち", [
        ["指から**血**が出ました。", "ゆび から **ち** が でました。", "Blood came out of my finger.", "N3", undefined, "ち"],
      ], [
        ["血液", "けつえき", "blood", "N3", "病院で**血液**を調べました。", "They tested my blood at the hospital.", "びょういん で **けつえき** を しらべました。"],
        ["血管", "けっかん", "blood vessel", "N3", "**血管**が細いです。", "My blood vessels are thin.", "**けっかん** が ほそい です。"],
      ]),
    ],
  },
  {
    n: 35,
    note: "皮 hides inside 被",
    items: [
      bk("皮", "N2", "skin, peel, hide", "ヒ", "かわ", [
        ["りんごの**皮**をむきます。", "りんご の **かわ** を むきます。", "I peel the apple skin.", "N3", undefined, "かわ"],
        ["彼は**皮肉**を言いました。", "かれ は **ひにく** を いいました。", "He made a sarcastic remark.", "N2", undefined, "ヒ"],
      ]),
      bk("被", "N2", "suffer, cover", "ヒ", "こうむ.る かぶ.せる かぶ.る", [
        ["台風の**被害**が大きいです。", "たいふう の **ひがい** が おおきい です。", "The typhoon damage is big.", "N3", undefined, "ヒ"],
        ["箱にふたを**被せ**ます。", "はこ に ふた を **かぶせ**ます。", "I put the lid on the box.", "N2", undefined, "かぶ.せる"],
        ["会社は台風で大きな損害を**被り**ました。", "かいしゃ は たいふう で おおきな そんがい を **こうむり**ました。", "The company suffered heavy losses from the typhoon.", "N1", undefined, "こうむ.る"],
      ], [
        ["被る", "かぶる", "to put on (a hat), to wear on the head", "N3", "外は暑いので帽子を**被って**ください。", "It's hot outside, so please wear a hat.", "そと は あつい ので ぼうし を **かぶって** ください。"],
      ]),
    ],
  },
  {
    n: 36,
    note: "same 目 body, different top",
    items: [
      bk("省", "N2", "ministry, omit, reflect", "セイ ショウ", "はぶ.く かえり.みる", [
        ["昨日のことを**反省**しています。", "きのう の こと を **はんせい** して います。", "I'm reflecting on what happened yesterday.", "N2", undefined, "セイ"],
        ["長い名前を**省略**します。", "ながい なまえ を **しょうりゃく** します。", "I'll shorten the long name.", "N2", undefined, "ショウ"],
        ["説明を**省き**ます。", "せつめい を **はぶき**ます。", "I'll skip the explanation.", "N2", undefined, "はぶ.く"],
        ["夏に田舎へ**帰省**します。", "なつ に いなか へ **きせい** します。", "I go back to my hometown in the summer.", "N2", undefined, "セイ"],
        ["自分の行動を**省みる**ことが大切です。", "じぶん の こうどう を **かえりみる** こと が たいせつ です。", "It's important to reflect on your own actions.", "N1", undefined, "かえり.みる"],
      ]),
      bk("少", "N5", "few, little", "ショウ", "すく.ない すこ.し", [
        ["**少し**待ってください。", "**すこし** まって ください。", "Please wait a little.", "N5", undefined, "すこ.し"],
        ["この村は人が**少ない**です。", "この むら は ひと が **すくない** です。", "There are few people in this village.", "N5", undefined, "すく.ない"],
        ["公園で**少年**がサッカーをしています。", "こうえん で **しょうねん** が サッカー を して います。", "A boy is playing soccer in the park.", "N3", undefined, "ショウ"],
      ]),
      bk("県", "N2", "prefecture", "ケン", "", [
        ["私は千葉**県**に住んでいます。", "わたし は ちば**けん** に すんで います。", "I live in Chiba Prefecture.", "N3", undefined, "ケン"],
      ]),
    ],
  },
  {
    n: 37,
    note: "矢 / 石 left side",
    items: [
      bk("短", "N2", "short", "タン", "みじか.い", [
        ["この鉛筆は**短い**です。", "この えんぴつ は **みじかい** です。", "This pencil is short.", "N5", undefined, "みじか.い"],
        ["**短期**のアルバイトを探します。", "**たんき** の アルバイト を さがします。", "I'm looking for a short-term part-time job.", "N2", undefined, "タン"],
        ["**短期間**で日本語を覚えました。", "**たんきかん** で にほんご を おぼえました。", "I learned Japanese in a short period of time.", "N2", undefined, "タン"],
        ["自分の**短所**を知っています。", "じぶん の **たんしょ** を しって います。", "I know my own weaknesses.", "N2", undefined, "タン"],
        ["**短編**の小説を読みました。", "**たんぺん** の しょうせつ を よみました。", "I read a short story.", "N2", undefined, "タン"],
        ["二本の線の**長短**を比べます。", "にほん の せん の **ちょうたん** を くらべます。", "I compare the lengths of the two lines.", "N2", undefined, "タン"],
      ]),
      bk("砂", "N2", "sand", "サ シャ", "すな", [
        ["海の**砂**は熱いです。", "うみ の **すな** は あつい です。", "The sand at the beach is hot.", "N3", undefined, "すな"],
        ["外は**土砂降り**です。", "そと は **どしゃぶり** です。", "It's pouring rain outside.", "N2", undefined, "シャ"],
      ], [
        ["砂糖", "さとう", "sugar", "N5", "**砂糖**を入れますか。", "Shall I add sugar?", "**さとう** を いれます か。"],
        ["砂漠", "さばく", "desert", "N3", "**砂漠**は昼、とても暑いです。", "The desert is very hot during the day.", "**さばく** は ひる、 とても あつい です。"],
      ]),
      bk("硬", "N2", "hard, stiff", "コウ", "かた.い", [
        ["この肉は**硬い**です。", "この にく は **かたい** です。", "This meat is tough.", "N3", undefined, "かた.い"],
        ["自動販売機に**硬貨**を入れます。", "じどうはんばいき に **こうか** を いれます。", "I put coins into the vending machine.", "N2", undefined, "コウ"],
      ]),
      bk("磨", "N2", "polish, brush", "マ", "みが.く", [
        ["歯を**磨き**ます。", "は を **みがき**ます。", "I brush my teeth.", "N3", "Ha o migakimasu.", "みが.く"],
        ["朝と夜に**歯磨き**をします。", "あさ と よる に **はみがき** を します。", "I brush my teeth morning and night.", "N2", undefined, "みが.く"],
        ["石を**研磨**して光らせます。", "いし を **けんま** して ひからせます。", "I polish the stone to make it shine.", "N1", undefined, "マ"],
      ]),
    ],
  },
  {
    n: 38,
    note: "礻 / 示 altar",
    items: [
      bk("祈", "N2", "pray, wish", "キ", "いの.る", [
        ["神社で**祈り**ました。", "じんじゃ で **いのり**ました。", "I prayed at the shrine.", "N3", undefined, "いの.る"],
        ["家族の健康を**祈願**しました。", "かぞく の けんこう を **きがん** しました。", "I prayed for my family's health.", "N1", undefined, "キ"],
      ]),
      bk("折", "N3", "fold, break", "セツ", "お.る お.れる", [
        ["紙を半分に**折り**ます。", "かみ を はんぶん に **おり**ます。", "I fold the paper in half.", "N4", undefined, "お.る"],
        ["風で木の枝が**折れ**ました。", "かぜ で き の えだ が **おれ**ました。", "A tree branch broke in the wind.", "N3", undefined, "お.れる"],
        ["足を**骨折**して病院に行きました。", "あし を **こっせつ** して びょういん に いきました。", "I broke my leg and went to the hospital.", "N2", undefined, "セツ"],
      ], [
        ["折り紙", "おりがみ", "origami, folding paper", "N4", "**折り紙**が好きです。", "I like origami.", "**おりがみ** が すき です。"],
      ]),
      bk("祝", "N2", "celebrate", "シュク シュウ", "いわ.う", [
        ["誕生日を**祝い**ます。", "たんじょうび を **いわい**ます。", "We celebrate the birthday.", "N3", undefined, "いわ.う"],
        ["結婚式で**ご祝儀**を渡します。", "けっこんしき で **ごしゅうぎ** を わたします。", "I give a gift of money at the wedding.", "N1", undefined, "シュウ"],
      ], [
        ["祝日", "しゅくじつ", "national holiday", "N3", "明日は**祝日**です。", "Tomorrow is a national holiday.", "あした は **しゅくじつ** です。"],
        ["お祝い", "おいわい", "celebration; congratulatory gift", "N3", "**お祝い**のカードを送りました。", "I sent a congratulations card.", "**おいわい** の カード を おくりました。"],
      ]),
      bk("祭", "N2", "festival", "サイ", "まつ.り まつ.る", [
        ["夏の**祭り**に行きます。", "なつ の **まつり** に いきます。", "I'm going to the summer festival.", "N2", undefined, "まつ.り"],
        ["**祭日**は店が休みです。", "**さいじつ** は みせ が やすみ です。", "Shops are closed on public holidays.", "N2", undefined, "サイ"],
        ["**大学祭**でカレーを売ります。", "**だいがくさい** で カレー を うります。", "We're selling curry at the university festival.", "N2", undefined, "サイ"],
        ["この神社は山の神を**祭って**います。", "この じんじゃ は やま の かみ を **まつって** います。", "This shrine enshrines the god of the mountain.", "N1", undefined, "まつ.る"],
      ]),
      bk("際", "N3", "occasion, edge", "サイ", "きわ", [
        ["**国際**的な会社です。", "**こくさい**てき な かいしゃ です。", "It's an international company.", "N3", undefined, "サイ"],
        ["出かける**際**は鍵をかけます。", "でかける **さい** は かぎ を かけます。", "When going out, I lock the door.", "N3", undefined, "サイ"],
        ["電車では**窓際**の席に座ります。", "でんしゃ では **まどぎわ** の せき に すわります。", "On the train I sit in a window seat.", "N2", undefined, "きわ"],
      ]),
      bk("察", "N3", "guess, inspect", "サツ", "", [
        ["**警察**に電話しました。", "**けいさつ** に でんわ しました。", "I called the police.", "N4", undefined, "サツ"],
      ]),
      bk("禁", "N2", "prohibit", "キン", "", [
        ["ここは駐車**禁止**です。", "ここ は ちゅうしゃ **きんし** です。", "Parking is prohibited here.", "N3", undefined, "キン"],
      ], [
        ["禁煙", "きんえん", "no smoking", "N3", "この店は**禁煙**です。", "This shop is non-smoking.", "この みせ は **きんえん** です。"],
      ]),
    ],
  },
  {
    n: 39,
    note: "扌 hand, simple right side",
    items: [
      bk("担", "N2", "carry, be in charge", "タン", "かつ.ぐ にな.う", [
        ["私がこの仕事を**担当**します。", "わたし が この しごと を **たんとう** します。", "I am in charge of this job.", "N2", undefined, "タン"],
        ["**担当者**に電話します。", "**たんとうしゃ** に でんわ します。", "I'll call the person in charge.", "N2", undefined, "タン"],
        ["重い荷物を肩に**担ぎ**ます。", "おもい にもつ を かた に **かつぎ**ます。", "I carry the heavy load on my shoulder.", "N2", undefined, "かつ.ぐ"],
        ["若い人が町の未来を**担って**います。", "わかい ひと が まち の みらい を **になって** います。", "Young people are shouldering the town's future.", "N1", undefined, "にな.う"],
      ]),
      bk("拝", "N2", "worship, (humble) see", "ハイ", "おが.む", [
        ["お写真を**拝見**しました。", "おしゃしん を **はいけん** しました。", "I have seen your photo. (humble)", "N2", undefined, "ハイ"],
        ["神社で**拝み**ました。", "じんじゃ で **おがみ**ました。", "I prayed at the shrine.", "N2", undefined, "おが.む"],
      ]),
      bk("挟", "N2", "put between, pinch", "キョウ", "はさ.む はさ.まる", [
        ["パンにハムを**挟み**ます。", "パン に ハム を **はさみ**ます。", "I put ham between the bread.", "N2", undefined, "はさ.む"],
        ["ドアに服が**挟まり**ました。", "ドア に ふく が **はさまり**ました。", "My clothes got caught in the door.", "N2", undefined, "はさ.まる"],
        ["敵を前と後ろから**挟撃**しました。", "てき を まえ と うしろ から **きょうげき** しました。", "They attacked the enemy from front and back.", "N1", undefined, "キョウ"],
      ]),
      bk("捜", "N2", "search, look for", "ソウ", "さが.す", [
        ["財布を**捜して**います。", "さいふ を **さがして** います。", "I'm looking for my wallet.", "N2", undefined, "さが.す"],
        ["警察が事件を**捜査**しています。", "けいさつ が じけん を **そうさ** して います。", "The police are investigating the case.", "N2", undefined, "ソウ"],
      ]),
    ],
  },
  {
    n: 40,
    note: "扌 hand, complex right side",
    items: [
      bk("掃", "N2", "sweep", "ソウ", "は.く", [
        ["部屋を**掃除**します。", "へや を **そうじ** します。", "I clean the room.", "N4", undefined, "ソウ"],
        ["毎週、**掃除機**をかけます。", "まいしゅう、 **そうじき** を かけます。", "I vacuum every week.", "N2", undefined, "ソウ"],
        ["玄関をほうきで**掃き**ます。", "げんかん を ほうき で **はき**ます。", "I sweep the entrance with a broom.", "N2", undefined, "は.く"],
      ]),
      bk("掘", "N2", "dig", "クツ", "ほ.る", [
        ["庭に穴を**掘り**ました。", "にわ に あな を **ほり**ました。", "I dug a hole in the garden.", "N2", undefined, "ほ.る"],
        ["ここで古い町を**発掘**しています。", "ここ で ふるい まち を **はっくつ** して います。", "They are excavating an old town here.", "N1", undefined, "クツ"],
      ]),
      bk("採", "N2", "pick, adopt, hire", "サイ", "と.る", [
        ["会社に**採用**されました。", "かいしゃ に **さいよう** されました。", "I was hired by the company.", "N2", undefined, "サイ"],
        ["山でキノコを**採り**ました。", "やま で キノコ を **とり**ました。", "I picked mushrooms in the mountain.", "N2", undefined, "と.る"],
        ["先生がテストを**採点**します。", "せんせい が テスト を **さいてん** します。", "The teacher grades the test.", "N2", undefined, "サイ"],
        ["会社から**不採用**の連絡が来ました。", "かいしゃ から **ふさいよう** の れんらく が きました。", "I got a rejection notice from the company.", "N2", undefined, "サイ"],
      ], [
        ["採集", "さいしゅう", "collecting, gathering", "N3", "山で虫を**採集**しました。", "I collected insects in the mountains.", "やま で むし を **さいしゅう** しました。"],
      ]),
      bk("接", "N2", "touch, contact, connect", "セツ", "つ.ぐ", [
        ["**直接**、先生に話します。", "**ちょくせつ**、 せんせい に はなします。", "I'll talk to the teacher directly.", "N3", undefined, "セツ"],
        ["明日、**面接**があります。", "あした、 **めんせつ** が あります。", "I have an interview tomorrow.", "N2", undefined, "セツ"],
        ["パソコンをネットに**接続**します。", "パソコン を ネット に **せつぞく** します。", "I connect the computer to the internet.", "N2", undefined, "セツ"],
        ["台風が**接近**しています。", "たいふう が **せっきん** して います。", "A typhoon is approaching.", "N2", undefined, "セツ"],
        ["お客に優しく**接し**ます。", "おきゃく に やさしく **せっし**ます。", "I treat customers kindly.", "N2", undefined, "セツ"],
        ["**間接**の光で部屋が明るいです。", "**かんせつ** の ひかり で へや が あかるい です。", "The room is bright with indirect light.", "N2", undefined, "セツ"],
        ["**応接**室でお客と話します。", "**おうせつ**しつ で おきゃく と はなします。", "I talk with guests in the reception room.", "N2", undefined, "セツ"],
        ["二枚の紙を**接着**します。", "にまい の かみ を **せっちゃく** します。", "I glue two sheets of paper together.", "N2", undefined, "セツ"],
        ["りんごの木に**接ぎ木**をします。", "りんご の き に **つぎき** を します。", "I graft a branch onto the apple tree.", "N1", undefined, "つ.ぐ"],
      ]),
      bk("換", "N2", "exchange, replace", "カン", "か.える か.わる", [
        ["空港でお金を**交換**します。", "くうこう で おかね を **こうかん** します。", "I exchange money at the airport.", "N3", undefined, "カン"],
        ["東京で**乗り換え**をします。", "とうきょう で **のりかえ** を します。", "I change trains in Tokyo.", "N2", undefined, "か.える"],
        ["窓を開けて**換気**します。", "まど を あけて **かんき** します。", "I open the window to air out the room.", "N2", undefined, "カン"],
        ["ひらがなを漢字に**変換**します。", "ひらがな を かんじ に **へんかん** します。", "I convert hiragana into kanji.", "N2", undefined, "カン"],
        ["散歩は**気分転換**になります。", "さんぽ は **きぶんてんかん** に なります。", "Taking a walk is a nice change of pace.", "N2", undefined, "カン"],
        ["二人の席が**入れ換わり**ました。", "ふたり の せき が **いれかわり**ました。", "The two people's seats were swapped.", "N2", undefined, "か.わる"],
      ], [
        ["換える", "かえる", "to exchange, to replace", "N3", "時計の電池を**換え**ました。", "I changed the watch battery.", "とけい の でんち を **かえ**ました。"],
      ]),
      bk("損", "N2", "loss, damage", "ソン", "そこ.なう", [
        ["買わないと**損**ですよ。", "かわない と **そん** です よ。", "You'll lose out if you don't buy it.", "N3", undefined, "ソン"],
        ["**損得**を考えないで手伝います。", "**そんとく** を かんがえないで てつだいます。", "I help without thinking about gain or loss.", "N2", undefined, "ソン"],
        ["たばこは健康を**損ない**ます。", "たばこ は けんこう を **そこない**ます。", "Smoking harms your health.", "N1", undefined, "そこ.なう"],
      ], [
        ["損害", "そんがい", "damage, loss", "N3", "台風で大きな**損害**が出ました。", "The typhoon caused heavy damage.", "たいふう で おおきな **そんがい** が でました。"],
      ]),
    ],
  },
  {
    n: 41,
    note: "禾 grain radical",
    items: [
      bk("秒", "N2", "second (time)", "ビョウ", "", [
        ["十**秒**待ってください。", "じゅう**びょう** まって ください。", "Please wait ten seconds.", "N3", undefined, "ビョウ"],
      ]),
      bk("移", "N2", "move, shift", "イ", "うつ.る うつ.す", [
        ["となりの席に**移動**してください。", "となり の せき に **いどう** して ください。", "Please move to the next seat.", "N3", undefined, "イ"],
        ["会社が駅の近くに**移転**しました。", "かいしゃ が えき の ちかく に **いてん** しました。", "The company moved near the station.", "N2", undefined, "イ"],
        ["荷物を別の箱に**移し替え**ます。", "にもつ を べつ の はこ に **うつしかえ**ます。", "I move the luggage into a different box.", "N2", undefined, "うつ.す"],
      ], [
        ["移る", "うつる", "to move (house), to shift", "N3", "新しい家に**移り**ました。", "I moved to a new house.", "あたらしい いえ に **うつり**ました。"],
        ["移す", "うつす", "to move (something), to transfer", "N3", "机を窓の近くに**移し**ました。", "I moved the desk near the window.", "つくえ を まど の ちかく に **うつし**ました。"],
      ]),
      bk("多", "N5", "many, much", "タ", "おお.い", [
        ["この店は人が**多い**です。", "この みせ は ひと が **おおい** です。", "There are many people at this shop.", "N5", undefined, "おお.い"],
        ["明日は**多分**雨が降るでしょう。", "あした は **たぶん** あめ が ふる でしょう。", "It will probably rain tomorrow.", "N4", undefined, "タ"],
      ]),
      bk("税", "N2", "tax", "ゼイ", "", [
        ["**税金**を払います。", "**ぜいきん** を はらいます。", "I pay taxes.", "N3", undefined, "ゼイ"],
        ["空港の**税関**を通ります。", "くうこう の **ぜいかん** を とおります。", "I go through customs at the airport.", "N2", undefined, "ゼイ"],
        ["空港の**免税**店で買いました。", "くうこう の **めんぜい**てん で かいました。", "I bought it at the airport duty-free shop.", "N2", undefined, "ゼイ"],
      ], [
        ["税", "ぜい", "tax", "N3", "この値段は消費**税**込みです。", "This price includes consumption tax.", "この ねだん は しょうひ**ぜい** こみ です。"],
      ]),
      bk("説", "N3", "explain, theory", "セツ ゼイ", "と.く", [
        ["先生が**説明**しました。", "せんせい が **せつめい** しました。", "The teacher explained.", "N3", undefined, "セツ"],
        ["**小説**を読みます。", "**しょうせつ** を よみます。", "I read novels.", "N3", undefined, "セツ"],
        ["候補者が駅前で**遊説**しています。", "こうほしゃ が えきまえ で **ゆうぜい** して います。", "The candidate is giving campaign speeches in front of the station.", "N1", undefined, "ゼイ"],
        ["先生は命の大切さを**説き**ました。", "せんせい は いのち の たいせつさ を **とき**ました。", "The teacher explained the value of life.", "N1", undefined, "と.く"],
      ]),
      bk("香", "N2", "fragrance, scent", "コウ キョウ", "か かお.り かお.る", [
        ["花のいい**香り**がします。", "はな の いい **かおり** が します。", "There's a lovely scent of flowers.", "N3", undefined, "かお.り"],
        ["彼女は**香水**をつけています。", "かのじょ は **こうすい** を つけて います。", "She is wearing perfume.", "N2", undefined, "コウ"],
        ["将棋の**香車**はまっすぐ前に進みます。", "しょうぎ の **きょうしゃ** は まっすぐ まえ に すすみます。", "The lance in shogi moves straight forward.", "N1", undefined, "キョウ"],
        ["部屋に花の**残り香**がありました。", "へや に はな の **のこりか** が ありました。", "The lingering scent of flowers remained in the room.", "N1", undefined, "か"],
        ["庭で梅の花が**香って**います。", "にわ で うめ の はな が **かおって** います。", "The plum blossoms in the garden are fragrant.", "N1", undefined, "かお.る"],
      ]),
    ],
  },
  {
    n: 42,
    note: "⺮ bamboo, light",
    items: [
      bk("竹", "N2", "bamboo", "チク", "たけ", [
        ["庭に**竹**があります。", "にわ に **たけ** が あります。", "There is bamboo in the garden.", "N2", undefined, "たけ"],
        ["京都の**竹林**を散歩しました。", "きょうと の **ちくりん** を さんぽ しました。", "I took a walk through a bamboo grove in Kyoto.", "N1", undefined, "チク"],
      ]),
      bk("符", "N2", "token, sign, ticket", "フ", "", [
        ["電車の**切符**を買います。", "でんしゃ の **きっぷ** を かいます。", "I buy a train ticket.", "N5", undefined, "フ"],
        ["地図の**符号**を覚えます。", "ちず の **ふごう** を おぼえます。", "I memorize the symbols on the map.", "N2", undefined, "フ"],
      ]),
      bk("付", "N4", "attach, stick", "フ", "つ.ける つ.く", [
        ["ノートにシールを**付け**ます。", "ノート に シール を **つけ**ます。", "I stick a sticker on my notebook.", "N4", undefined, "つ.ける"],
        ["服にごみが**付いて**います。", "ふく に ごみ が **ついて** います。", "There is some dirt on your clothes.", "N4", undefined, "つ.く"],
        ["**受付**で名前を書きます。", "**うけつけ** で なまえ を かきます。", "I write my name at the reception desk.", "N4", undefined, "つ.ける"],
        ["病院に**寄付**をしました。", "びょういん に **きふ** を しました。", "I made a donation to the hospital.", "N2", undefined, "フ"],
      ]),
      bk("筆", "N2", "writing brush", "ヒツ", "ふで", [
        ["**筆**で名前を書きます。", "**ふで** で なまえ を かきます。", "I write my name with a brush.", "N3", undefined, "ふで"],
        ["この記事の**筆者**は有名です。", "この きじ の **ひっしゃ** は ゆうめい です。", "The author of this article is famous.", "N2", undefined, "ヒツ"],
        ["先生は今、本を**執筆**しています。", "せんせい は いま、 ほん を **しっぴつ** して います。", "The teacher is writing a book at the moment.", "N2", undefined, "ヒツ"],
        ["先生の話を**筆記**します。", "せんせい の はなし を **ひっき** します。", "I take notes on what the teacher says.", "N2", undefined, "ヒツ"],
        ["**随筆**を読むのが好きです。", "**ずいひつ** を よむ の が すき です。", "I like reading essays.", "N2", undefined, "ヒツ"],
      ]),
      bk("筒", "N2", "tube, cylinder", "トウ", "つつ", [
        ["**封筒**に手紙を入れます。", "**ふうとう** に てがみ を いれます。", "I put the letter in an envelope.", "N5", undefined, "トウ"],
        ["ポスターを**筒**に入れて送ります。", "ポスター を **つつ** に いれて おくります。", "I put the poster in a tube and send it.", "N2", undefined, "つつ"],
      ], [
        ["水筒", "すいとう", "water bottle, flask", "N3", "**水筒**を持って行きます。", "I'll take a water bottle.", "**すいとう** を もって いきます。"],
      ]),
      bk("同", "N4", "same", "ドウ", "おな.じ", [
        ["**同じ**物を買いました。", "**おなじ** もの を かいました。", "I bought the same thing.", "N5", undefined, "おな.じ"],
        ["二人は**同時**に答えました。", "ふたり は **どうじ** に こたえました。", "The two answered at the same time.", "N3", undefined, "ドウ"],
      ]),
    ],
  },
  {
    n: 43,
    note: "⺮ bamboo, heavy",
    items: [
      bk("算", "N2", "calculate", "サン", "", [
        ["**計算**が苦手です。", "**けいさん** が にがて です。", "I'm bad at calculation.", "N3", undefined, "サン"],
        ["**算数**が得意です。", "**さんすう** が とくい です。", "I'm good at arithmetic.", "N2", undefined, "サン"],
        ["学校で**掛け算**を習いました。", "がっこう で **かけざん** を ならいました。", "I learned multiplication at school.", "N2", undefined, "サン"],
        ["**引算**の問題を解きます。", "**ひきざん** の もんだい を ときます。", "I solve subtraction problems.", "N2", undefined, "サン"],
        ["**割算**は少し難しいです。", "**わりざん** は すこし むずかしい です。", "Division is a little difficult.", "N2", undefined, "サン"],
      ], [
        ["予算", "よさん", "budget", "N3", "旅行の**予算**が足りません。", "The budget for the trip isn't enough.", "りょこう の **よさん** が たりません。"],
        ["精算", "せいさん", "exact calculation, adjustment", "N3", "駅で運賃を**精算**します。", "I pay the fare adjustment at the station.", "えき で うんちん を **せいさん** します。"],
      ]),
      bk("管", "N2", "pipe, manage", "カン", "くだ", [
        ["この建物は市が**管理**しています。", "この たてもの は し が **かんり** して います。", "The city manages this building.", "N2", undefined, "カン"],
      ], [
        ["管理人", "かんりにん", "manager, caretaker", "N3", "部屋の鍵は**管理人**が持っています。", "The manager has the room key.", "へや の かぎ は **かんりにん** が もって います。"],
        ["管", "くだ", "pipe, tube", "N3", "水道の**管**が壊れました。", "The water pipe broke.", "すいどう の **くだ** が こわれました。"],
      ]),
      bk("築", "N2", "build, construct", "チク", "きず.く", [
        ["彼は**建築**の勉強をしています。", "かれ は **けんちく** の べんきょう を して います。", "He is studying architecture.", "N3", undefined, "チク"],
        ["友だちといい関係を**築き**ました。", "ともだち と いい かんけい を **きずき**ました。", "I built a good relationship with my friends.", "N1", undefined, "きず.く"],
      ], [
        ["築", "ちく", "(years since) built", "N3", "この家は**築**十年です。", "This house was built ten years ago.", "この いえ は **ちく** じゅうねん です。"],
      ]),
      bk("簡", "N2", "simple, brief", "カン", "", [
        ["このテストは**簡単**です。", "この テスト は **かんたん** です。", "This test is easy.", "N4", undefined, "カン"],
        ["説明を**簡略**にします。", "せつめい を **かんりゃく** に します。", "I keep the explanation brief.", "N2", undefined, "カン"],
        ["手続きを**簡略化**しました。", "てつづき を **かんりゃくか** しました。", "The procedures were simplified.", "N2", undefined, "カン"],
      ]),
      bk("間", "N5", "interval, between", "カン ケン", "あいだ ま", [
        ["**時間**がありません。", "**じかん** が ありません。", "There is no time.", "N5", undefined, "カン"],
        ["少しの**間**、待ちました。", "すこし の **あいだ**、 まちました。", "I waited for a short while.", "N4", undefined, "あいだ"],
        ["走って電車に**間に合い**ました。", "はしって でんしゃ に **まにあい**ました。", "I ran and made it in time for the train.", "N3", undefined, "ま"],
        ["**世間**の目が気になります。", "**せけん** の め が き に なります。", "I worry about what people think.", "N2", undefined, "ケン"],
      ]),
      bk("籍", "N2", "register, enrollment", "セキ", "", [
        ["**国籍**は日本です。", "**こくせき** は にほん です。", "My nationality is Japanese.", "N3", undefined, "セキ"],
        ["ネットで**書籍**を注文しました。", "ネット で **しょせき** を ちゅうもん しました。", "I ordered a book online.", "N2", undefined, "セキ"],
        ["私はこの大学に**在籍**しています。", "わたし は この だいがく に **ざいせき** して います。", "I'm enrolled at this university.", "N2", undefined, "セキ"],
      ]),
    ],
  },
  {
    n: 44,
    note: "糸 thread, simple right side",
    items: [
      bk("糸", "N2", "thread", "シ", "いと", [
        ["針に**糸**を通します。", "はり に **いと** を とおします。", "I thread the needle with thread.", "N3", undefined, "いと"],
        ["昔、この町には**製糸**工場がありました。", "むかし、 この まち には **せいし** こうじょう が ありました。", "Long ago there was a silk mill in this town.", "N1", undefined, "シ"],
      ]),
      bk("紅", "N2", "crimson, deep red", "コウ ク", "べに くれない", [
        ["**紅茶**を飲みます。", "**こうちゃ** を のみます。", "I drink black tea.", "N5", undefined, "コウ"],
        ["秋の**紅葉**がきれいです。", "あき の **こうよう** が きれい です。", "The autumn leaves are beautiful.", "N2", undefined, "コウ"],
        ["**口紅**をつけました。", "**くちべに** を つけました。", "I put on lipstick.", "N2", undefined, "べに"],
        ["誕生日に**真紅**のバラをもらいました。", "たんじょうび に **しんく** の バラ を もらいました。", "I got deep red roses for my birthday.", "N1", undefined, "ク"],
        ["夕日で空が**紅**に染まりました。", "ゆうひ で そら が **くれない** に そまりました。", "The sky was dyed crimson by the sunset.", "N1", undefined, "くれない"],
      ]),
      bk("工", "N4", "craft, construction", "コウ ク", "", [
        ["**工場**で働いています。", "**こうじょう** で はたらいて います。", "I work at a factory.", "N3", undefined, "コウ"],
        ["**大工**さんが家を建てています。", "**だいく** さん が いえ を たてて います。", "A carpenter is building a house.", "N3", undefined, "ク"],
      ]),
      bk("純", "N2", "pure, genuine", "ジュン", "", [
        ["話はとても**単純**です。", "はなし は とても **たんじゅん** です。", "The story is very simple.", "N3", undefined, "ジュン"],
        ["彼は**純粋**な人です。", "かれ は **じゅんすい** な ひと です。", "He is a pure-hearted person.", "N2", undefined, "ジュン"],
        ["彼は**純情**な人です。", "かれ は **じゅんじょう** な ひと です。", "He is a pure-hearted person.", "N2", undefined, "ジュン"],
        ["先生の説明は**単純明快**でした。", "せんせい の せつめい は **たんじゅんめいかい** でした。", "The teacher's explanation was simple and clear.", "N2", undefined, "ジュン"],
      ]),
      bk("細", "N2", "thin, fine, detailed", "サイ", "ほそ.い こま.かい", [
        ["この道は**細い**です。", "この みち は **ほそい** です。", "This road is narrow.", "N4", undefined, "ほそ.い"],
        ["**詳細**はメールで送ります。", "**しょうさい** は メール で おくります。", "I'll send the details by email.", "N2", undefined, "サイ"],
        ["**細長い**箱に入れます。", "**ほそながい** はこ に いれます。", "I put it in a long, narrow box.", "N2", undefined, "ほそ.い"],
      ], [
        ["細かい", "こまかい", "small, fine; detailed", "N3", "**細かい**お金がありません。", "I don't have any small change.", "**こまかい** おかね が ありません。"],
      ]),
      bk("田", "N5", "rice field", "デン", "た", [
        ["**田んぼ**に水を入れます。", "**たんぼ** に みず を いれます。", "I let water into the rice field.", "N2", undefined, "た"],
        ["村には**水田**が広がっています。", "むら には **すいでん** が ひろがって います。", "Rice paddies spread out around the village.", "N1", undefined, "デン"],
      ]),
    ],
  },
  {
    n: 45,
    note: "糸 thread, medium right side",
    items: [
      bk("紹", "N2", "introduce", "ショウ", "", [
        ["友だちを**紹介**します。", "ともだち を **しょうかい** します。", "I'll introduce my friend.", "N4", undefined, "ショウ"],
      ]),
      bk("招", "N3", "invite, beckon", "ショウ", "まね.く", [
        ["パーティーに**招待**されました。", "パーティー に **しょうたい** されました。", "I was invited to the party.", "N3", undefined, "ショウ"],
        ["友だちを家に**招き**ます。", "ともだち を いえ に **まねき**ます。", "I invite friends to my house.", "N3", undefined, "まね.く"],
      ]),
      bk("絡", "N2", "entwine, connect", "ラク", "から.む から.まる", [
        ["あとで**連絡**します。", "あとで **れんらく** します。", "I'll contact you later.", "N4", undefined, "ラク"],
        ["コードが足に**絡んで**転びました。", "コード が あし に **からんで** ころびました。", "A cord got tangled around my feet and I fell.", "N1", undefined, "から.む"],
        ["糸が**絡まって**しまいました。", "いと が **からまって** しまいました。", "The thread got tangled.", "N1", undefined, "から.まる"],
      ], [
        ["連絡先", "れんらくさき", "contact details", "N3", "**連絡先**を教えてください。", "Please tell me your contact details.", "**れんらくさき** を おしえて ください。"],
      ]),
      bk("綿", "N2", "cotton", "メン", "わた", [
        ["このシャツは**綿**です。", "この シャツ は **めん** です。", "This shirt is cotton.", "N3", undefined, "メン"],
        ["お祭りで**綿あめ**を買いました。", "おまつり で **わたあめ** を かいました。", "I bought cotton candy at the festival.", "N2", undefined, "わた"],
      ]),
      bk("総", "N2", "general, whole, total", "ソウ", "", [
        ["**総理**大臣が話しました。", "**そうり** だいじん が はなしました。", "The prime minister spoke.", "N2", undefined, "ソウ"],
        ["**総合**病院に行きます。", "**そうごう** びょういん に いきます。", "I'm going to the general hospital.", "N2", undefined, "ソウ"],
        ["旅行の**総額**を計算します。", "りょこう の **そうがく** を けいさん します。", "I calculate the total cost of the trip.", "N2", undefined, "ソウ"],
        ["参加者の**総数**は百人です。", "さんかしゃ の **そうすう** は ひゃくにん です。", "The total number of participants is one hundred.", "N2", undefined, "ソウ"],
        ["会社で**総務**の仕事をしています。", "かいしゃ で **そうむ** の しごと を して います。", "I work in general affairs at my company.", "N2", undefined, "ソウ"],
      ]),
    ],
  },
  {
    n: 46,
    note: "糸 thread, heavy right side",
    items: [
      bk("緑", "N2", "green", "リョク", "みどり", [
        ["春になって山が**緑**になりました。", "はる に なって やま が **みどり** に なりました。", "The mountain turned green in spring.", "N4", undefined, "みどり"],
        ["食事の後に**緑茶**を飲みます。", "しょくじ の あと に **りょくちゃ** を のみます。", "I drink green tea after meals.", "N2", undefined, "リョク"],
      ]),
      bk("線", "N2", "line", "セン", "", [
        ["紙に**線**を書きます。", "かみ に **せん** を かきます。", "I draw a line on the paper.", "N3", undefined, "セン"],
        ["**新幹線**で大阪へ行きます。", "**しんかんせん** で おおさか へ いきます。", "I go to Osaka by Shinkansen.", "N2", undefined, "セン"],
        ["**線路**のそばを歩きます。", "**せんろ** の そば を あるきます。", "I walk beside the railroad tracks.", "N2", undefined, "セン"],
        ["ここに**直線**を引いてください。", "ここ に **ちょくせん** を ひいて ください。", "Please draw a straight line here.", "N2", undefined, "セン"],
        ["大事な言葉に**下線**を引きます。", "だいじ な ことば に **かせん** を ひきます。", "I underline the important words.", "N2", undefined, "セン"],
        ["きれいな**曲線**を書きます。", "きれい な **きょくせん** を かきます。", "I draw a beautiful curve.", "N2", undefined, "セン"],
        ["**水平線**に船が見えます。", "**すいへいせん** に ふね が みえます。", "I can see a ship on the horizon.", "N2", undefined, "セン"],
        ["太陽の**光線**が強いです。", "たいよう の **こうせん** が つよい です。", "The sun's rays are strong.", "N2", undefined, "セン"],
        ["**内線**でお願いします。", "**ないせん** で おねがい します。", "Please use the internal extension.", "N2", undefined, "セン"],
        ["子どもの**目線**で話します。", "こども の **めせん** で はなします。", "I talk to children at their eye level.", "N2", undefined, "セン"],
        ["電車が**脱線**しました。", "でんしゃ が **だっせん** しました。", "The train derailed.", "N2", undefined, "セン"],
      ], [
        ["地平線", "ちへいせん", "horizon", "N3", "**地平線**から日が昇ります。", "The sun rises from the horizon.", "**ちへいせん** から ひ が のぼります。"],
      ]),
      bk("編", "N2", "knit, edit, compile", "ヘン", "あ.む", [
        ["彼は本の**編集**をしています。", "かれ は ほん の **へんしゅう** を して います。", "He does book editing.", "N2", undefined, "ヘン"],
        ["セーターを**編み**ました。", "セーター を **あみ**ました。", "I knitted a sweater.", "N2", undefined, "あ.む"],
        ["冬は**編み物**をします。", "ふゆ は **あみもの** を します。", "I knit in the winter.", "N2", undefined, "あ.む"],
      ]),
      bk("練", "N2", "practice, refine", "レン", "ね.る", [
        ["毎日、日本語を**練習**します。", "まいにち、 にほんご を **れんしゅう** します。", "I practice Japanese every day.", "N3", undefined, "レン"],
        ["**洗練**されたデザインです。", "**せんれん** された デザイン です。", "It's a refined design.", "N2", undefined, "レン"],
        ["みんなで旅行の計画を**練って**います。", "みんな で りょこう の けいかく を **ねって** います。", "We're working out our travel plans together.", "N1", undefined, "ね.る"],
      ]),
      bk("績", "N2", "achievement, results", "セキ", "", [
        ["テストの**成績**がよかったです。", "テスト の **せいせき** が よかった です。", "My test results were good.", "N3", undefined, "セキ"],
        ["彼の**功績**は大きいです。", "かれ の **こうせき** は おおきい です。", "His achievements are great.", "N2", undefined, "セキ"],
        ["会社の**実績**が上がりました。", "かいしゃ の **じっせき** が あがりました。", "The company's performance improved.", "N2", undefined, "セキ"],
      ]),
      bk("積", "N3", "pile up, accumulate", "セキ", "つ.む つ.もる", [
        ["少しずつ経験を**積み**ます。", "すこし ずつ けいけん を **つみ**ます。", "I build up experience little by little.", "N2", undefined, "つ.む"],
        ["この部屋の**面積**は二十平方メートルです。", "この へや の **めんせき** は にじゅう へいほう メートル です。", "The area of this room is twenty square meters.", "N2", undefined, "セキ"],
        ["雪が**積もり**ました。", "ゆき が **つもり**ました。", "The snow has piled up.", "N2", undefined, "つ.もる"],
      ]),
      bk("責", "N3", "blame, responsibility", "セキ", "せ.める", [
        ["私が**責任**を持ちます。", "わたし が **せきにん** を もちます。", "I'll take responsibility.", "N3", undefined, "セキ"],
        ["人を**責め**ないでください。", "ひと を **せめ**ないで ください。", "Please don't blame people.", "N3", undefined, "せ.める"],
      ]),
    ],
  },
  {
    n: 47,
    note: "identical tops",
    items: [
      bk("栄", "N2", "flourish, glory", "エイ", "さか.える は.える", [
        ["野菜は**栄養**があります。", "やさい は **えいよう** が あります。", "Vegetables have nutrition.", "N3", undefined, "エイ"],
        ["この町は昔、港で**栄えて**いました。", "この まち は むかし、 みなと で **さかえて** いました。", "Long ago this town flourished as a port.", "N1", undefined, "さか.える"],
        ["彼は**栄えある**賞を受けました。", "かれ は **はえある** しょう を うけました。", "He received a glorious award.", "N1", undefined, "は.える"],
      ]),
      bk("営", "N2", "manage, run a business", "エイ", "いとな.む", [
        ["店は九時から**営業**します。", "みせ は くじ から **えいぎょう** します。", "The shop opens for business at nine.", "N3", undefined, "エイ"],
        ["**経営者**と会って話しました。", "**けいえいしゃ** と あって はなしました。", "I met and talked with the company's manager.", "N2", undefined, "エイ"],
        ["祖父は小さな旅館を**営んで**います。", "そふ は ちいさな りょかん を **いとなんで** います。", "My grandfather runs a small inn.", "N1", undefined, "いとな.む"],
      ], [
        ["経営", "けいえい", "management, running (a business)", "N3", "父は小さい店を**経営**しています。", "My father runs a small shop.", "ちち は ちいさい みせ を **けいえい** して います。"],
      ]),
    ],
  },
  {
    n: 48,
    note: "米 rice radical",
    items: [
      bk("粉", "N2", "powder, flour", "フン", "こな こ", [
        ["この薬は**粉**なので飲みにくいです。", "この くすり は **こな** なので のみにくい です。", "This medicine is a powder, so it's hard to take.", "N2", undefined, "こな"],
        ["春は**花粉症**でつらいです。", "はる は **かふんしょう** で つらい です。", "Spring is hard because of hay fever.", "N2", undefined, "フン"],
      ], [
        ["小麦粉", "こむぎこ", "flour", "N3", "**小麦粉**でパンを作ります。", "I make bread with flour.", "**こむぎこ** で パン を つくります。"],
      ]),
      bk("分", "N5", "minute, part, understand", "ブン フン ブ", "わ.かる わ.ける", [
        ["日本語が少し**分かり**ます。", "にほんご が すこし **わかり**ます。", "I understand a little Japanese.", "N5", undefined, "わ.かる"],
        ["十**分**待ってください。", "じゅっ**ぷん** まって ください。", "Please wait ten minutes.", "N5", undefined, "フン"],
        ["ケーキを**半分**食べました。", "ケーキ を **はんぶん** たべました。", "I ate half of the cake.", "N4", undefined, "ブン"],
        ["かぜは**大分**よくなりました。", "かぜ は **だいぶ** よく なりました。", "My cold has gotten a lot better.", "N3", undefined, "ブ"],
        ["お菓子をみんなで**分け**ます。", "おかし を みんな で **わけ**ます。", "We share the sweets among everyone.", "N3", undefined, "わ.ける"],
      ]),
      bk("粒", "N2", "grain, drop", "リュウ", "つぶ", [
        ["この米は**粒**が大きいです。", "この こめ は **つぶ** が おおきい です。", "This rice has big grains.", "N2", undefined, "つぶ"],
        ["この写真は**粒子**が細かいです。", "この しゃしん は **りゅうし** が こまかい です。", "This photo has fine grain.", "N1", undefined, "リュウ"],
      ]),
      bk("立", "N5", "stand", "リツ", "た.つ た.てる", [
        ["**立って**ください。", "**たって** ください。", "Please stand up.", "N5", undefined, "た.つ"],
        ["兄は**国立**の大学に入りました。", "あに は **こくりつ** の だいがく に はいりました。", "My older brother entered a national university.", "N3", undefined, "リツ"],
        ["夏休みの計画を**立て**ます。", "なつやすみ の けいかく を **たて**ます。", "I make plans for the summer vacation.", "N3", undefined, "た.てる"],
      ]),
    ],
  },
  {
    n: 49,
    note: "paired wing-like halves",
    items: [
      bk("羽", "N2", "feather, wing", "ウ", "はね は", [
        ["鳥の**羽**が落ちていました。", "とり の **はね** が おちて いました。", "A bird's feather had fallen.", "N2", undefined, "はね"],
        ["**羽毛**の布団は暖かいです。", "**うもう** の ふとん は あたたかい です。", "Down comforters are warm.", "N1", undefined, "ウ"],
        ["寒いので上着を**羽織り**ました。", "さむい ので うわぎ を **はおり**ました。", "It was cold, so I threw on a jacket.", "N1", undefined, "は"],
      ]),
      bk("弱", "N2", "weak", "ジャク", "よわ.い よわ.る", [
        ["私は寒さに**弱い**です。", "わたし は さむさ に **よわい** です。", "I'm weak against the cold.", "N5", undefined, "よわ.い"],
        ["自分の**弱点**を直します。", "じぶん の **じゃくてん** を なおします。", "I work on my weak points.", "N2", undefined, "ジャク"],
        ["暑さで体が**弱って**います。", "あつさ で からだ が **よわって** います。", "My body is worn down by the heat.", "N2", undefined, "よわ.る"],
        ["試合の前に**弱気**になりました。", "しあい の まえ に **よわき** に なりました。", "I lost my nerve before the match.", "N2", undefined, "よわ.い"],
        ["声に**強弱**をつけて読みます。", "こえ に **きょうじゃく** を つけて よみます。", "I read aloud with varying emphasis.", "N2", undefined, "ジャク"],
        ["子犬の声が**弱々しい**です。", "こいぬ の こえ が **よわよわしい** です。", "The puppy's voice is feeble.", "N2", undefined, "よわ.い"],
      ], [
        ["弱める", "よわめる", "to weaken", "N3", "火を少し**弱めて**ください。", "Please turn the heat down a little.", "ひ を すこし **よわめて** ください。"],
        ["弱まる", "よわまる", "to weaken, to become weak", "N3", "夕方、雨が**弱まり**ました。", "The rain weakened in the evening.", "ゆうがた、 あめ が **よわまり**ました。"],
      ]),
      bk("翌", "N2", "the following (day)", "ヨク", "", [
        ["**翌日**、雨が降りました。", "**よくじつ**、 あめ が ふりました。", "The next day, it rained.", "N2", undefined, "ヨク"],
        ["**翌朝**、早く起きました。", "**よくあさ**、 はやく おきました。", "The next morning, I got up early.", "N2", undefined, "ヨク"],
      ]),
      bk("群", "N2", "flock, group", "グン", "む.れ む.れる", [
        ["羊の**群れ**が見えます。", "ひつじ の **むれ** が みえます。", "I can see a flock of sheep.", "N2", undefined, "む.れ"],
        ["彼は**抜群**に歌がうまいです。", "かれ は **ばつぐん** に うた が うまい です。", "He is outstandingly good at singing.", "N1", undefined, "グン"],
        ["公園でハトが**群れて**います。", "こうえん で ハト が **むれて** います。", "Pigeons are flocking in the park.", "N1", undefined, "む.れる"],
      ]),
    ],
  },
  {
    n: 50,
    note: "all built on 者",
    items: [
      bk("著", "N2", "author, remarkable", "チョ", "あらわ.す いちじる.しい", [
        ["この本の**著者**は有名です。", "この ほん の **ちょしゃ** は ゆうめい です。", "The author of this book is famous.", "N3", undefined, "チョ"],
        ["先生は歴史の本を三冊**著し**ました。", "せんせい は れきし の ほん を さんさつ **あらわし**ました。", "The professor wrote three history books.", "N1", undefined, "あらわ.す"],
        ["この町は**著しく**発展しました。", "この まち は **いちじるしく** はってん しました。", "This town has developed remarkably.", "N1", undefined, "いちじる.しい"],
      ]),
      bk("者", "N3", "person", "シャ", "もの", [
        ["**医者**に相談しました。", "**いしゃ** に そうだん しました。", "I consulted a doctor.", "N5", undefined, "シャ"],
        ["**若者**が集まっています。", "**わかもの** が あつまって います。", "Young people are gathering.", "N2", undefined, "もの"],
      ]),
      bk("暑", "N4", "hot (weather)", "ショ", "あつ.い", [
        ["今日はとても**暑い**です。", "きょう は とても **あつい** です。", "It is very hot today.", "N5", undefined, "あつ.い"],
        ["九月になっても**残暑**が厳しいです。", "くがつ に なって も **ざんしょ** が きびしい です。", "Even in September, the lingering summer heat is severe.", "N1", undefined, "ショ"],
      ]),
      bk("諸", "N2", "various, many", "ショ", "", [
        ["世界の**諸国**が集まりました。", "せかい の **しょこく** が あつまりました。", "Various countries of the world gathered.", "N2", undefined, "ショ"],
        ["**諸外国**の文化を学びます。", "**しょがいこく** の ぶんか を まなびます。", "I study the cultures of foreign countries.", "N2", undefined, "ショ"],
      ]),
      bk("署", "N2", "government office, signature", "ショ", "", [
        ["ここに**署名**してください。", "ここ に **しょめい** して ください。", "Please sign here.", "N3", undefined, "ショ"],
      ], [
        ["警察署", "けいさつしょ", "police station", "N3", "**警察署**に行きました。", "I went to the police station.", "**けいさつしょ** に いきました。"],
      ]),
    ],
  },
  {
    n: 51,
    note: "土 earth, light",
    items: [
      bk("圧", "N2", "pressure", "アツ", "", [
        ["今日は**気圧**が低いです。", "きょう は **きあつ** が ひくい です。", "The air pressure is low today.", "N2", undefined, "アツ"],
        ["病院で**血圧**を測りました。", "びょういん で **けつあつ** を はかりました。", "I had my blood pressure taken at the hospital.", "N2", undefined, "アツ"],
        ["ファイルを**圧縮**します。", "ファイル を **あっしゅく** します。", "I compress the file.", "N2", undefined, "アツ"],
        ["昨日の試合に**圧勝**しました。", "きのう の しあい に **あっしょう** しました。", "We won yesterday's match by a landslide.", "N2", undefined, "アツ"],
      ]),
      bk("均", "N2", "level, average", "キン", "", [
        ["テストの**平均**点は七十点です。", "テスト の **へいきん**てん は ななじゅってん です。", "The average test score is 70.", "N3", undefined, "キン"],
      ]),
      bk("型", "N2", "type, model, mold", "ケイ", "かた", [
        ["血液**型**はA型です。", "けつえき**がた** は エーがた です。", "My blood type is A.", "N3", undefined, "かた"],
        ["**体型**に合う服を選びます。", "**たいけい** に あう ふく を えらびます。", "I choose clothes that suit my body type.", "N2", undefined, "ケイ"],
        ["私は**夜型**の人間です。", "わたし は **よるがた** の にんげん です。", "I'm a night owl.", "N2", undefined, "かた"],
      ], [
        ["典型的", "てんけいてき", "typical; representative", "N3", "**典型的**な日本の家です。", "It's a typical Japanese house.", "**てんけいてき** な にほん の いえ です。"],
        ["典型", "てんけい", "type, typical example", "N3", "これは**典型**の例です。", "This is a typical example.", "これ は **てんけい** の れい です。"],
      ]),
      bk("埋", "N2", "bury, fill", "マイ", "う.める う.まる", [
        ["庭に箱を**埋め**ました。", "にわ に はこ を **うめ**ました。", "I buried a box in the garden.", "N2", undefined, "う.める"],
        ["この山には金が**埋蔵**されています。", "この やま には きん が **まいぞう** されて います。", "Gold lies buried in this mountain.", "N1", undefined, "マイ"],
      ], [
        ["埋まる", "うまる", "to be buried, to be filled up", "N3", "道が雪で**埋まり**ました。", "The road was buried in snow.", "みち が ゆき で **うまり**ました。"],
      ]),
    ],
  },
  {
    n: 52,
    note: "土 earth, heavy",
    items: [
      bk("塔", "N2", "tower", "トウ", "", [
        ["遠くに高い**塔**が見えます。", "とおく に たかい **とう** が みえます。", "I can see a tall tower in the distance.", "N3", undefined, "トウ"],
      ]),
      bk("塗", "N2", "paint, spread", "ト", "ぬ.る", [
        ["パンにバターを**塗り**ます。", "パン に バター を **ぬり**ます。", "I spread butter on the bread.", "N3", undefined, "ぬ.る"],
        ["来週、家の壁の**塗装**をします。", "らいしゅう、 いえ の かべ の **とそう** を します。", "Next week we're having the house walls painted.", "N1", undefined, "ト"],
      ]),
      bk("塩", "N2", "salt", "エン", "しお", [
        ["**塩**を少し入れます。", "**しお** を すこし いれます。", "I add a little salt.", "N4", undefined, "しお"],
        ["**塩分**の多い料理は体に悪いです。", "**えんぶん** の おおい りょうり は からだ に わるい です。", "Salty food is bad for your health.", "N2", undefined, "エン"],
        ["料理に**食塩**を少し入れます。", "りょうり に **しょくえん** を すこし いれます。", "I add a little table salt to the dish.", "N2", undefined, "エン"],
        ["このスープは**塩辛い**です。", "この スープ は **しおからい** です。", "This soup is salty.", "N2", undefined, "しお"],
        ["父は**塩辛**が好きです。", "ちち は **しおから** が すき です。", "My father likes shiokara.", "N2", undefined, "しお"],
      ]),
      bk("境", "N2", "border, boundary", "キョウ ケイ", "さかい", [
        ["**環境**を守りましょう。", "**かんきょう** を まもりましょう。", "Let's protect the environment.", "N3", undefined, "キョウ"],
        ["この川が二つの町の**境**です。", "この かわ が ふたつ の まち の **さかい** です。", "This river is the boundary between the two towns.", "N2", undefined, "さかい"],
        ["二つの国の**境界**を歩きました。", "ふたつ の くに の **きょうかい** を あるきました。", "I walked along the border between the two countries.", "N2", undefined, "キョウ"],
        ["お寺の**境内**を散歩しました。", "おてら の **けいだい** を さんぽ しました。", "I took a walk in the temple grounds.", "N1", undefined, "ケイ"],
      ], [
        ["国境", "こっきょう", "national border", "N3", "ここが二つの国の**国境**です。", "This is the border between the two countries.", "ここ が ふたつ の くに の **こっきょう** です。"],
      ]),
    ],
  },
  {
    n: 53,
    note: "胃 hides inside 膚",
    items: [
      bk("胃", "N2", "stomach", "イ", "", [
        ["**胃**が痛いです。", "**い** が いたい です。", "My stomach hurts.", "N3", undefined, "イ"],
      ]),
      bk("膚", "N2", "skin", "フ", "", [
        ["**皮膚**が赤くなりました。", "**ひふ** が あかく なりました。", "My skin turned red.", "N2", undefined, "フ"],
        ["**皮膚科**に行きました。", "**ひふか** に いきました。", "I went to the dermatologist.", "N2", undefined, "フ"],
      ]),
    ],
  },
  {
    n: 54,
    note: "月 tucked under a lid",
    items: [
      bk("肩", "N2", "shoulder", "ケン", "かた", [
        ["**肩**が痛いです。", "**かた** が いたい です。", "My shoulder hurts.", "N3", undefined, "かた"],
        ["兄は**肩幅**が広いです。", "あに は **かたはば** が ひろい です。", "My brother has broad shoulders.", "N2", undefined, "かた"],
        ["**肩甲骨**のあたりが痛いです。", "**けんこうこつ** の あたり が いたい です。", "It hurts around my shoulder blades.", "N1", undefined, "ケン"],
      ]),
      bk("肯", "N2", "agree, affirm", "コウ", "", [
        ["彼ははっきり**肯定**しました。", "かれ は はっきり **こうてい** しました。", "He clearly said yes.", "N2", undefined, "コウ"],
        ["**肯定的**な意見が多いです。", "**こうていてき** な いけん が おおい です。", "There are many positive opinions.", "N2", undefined, "コウ"],
      ]),
    ],
  },
  {
    n: 55,
    note: "⺝ body parts, left side",
    items: [
      bk("胸", "N2", "chest, breast", "キョウ", "むね", [
        ["**胸**に手を当てます。", "**むね** に て を あてます。", "I put my hand on my chest.", "N3", undefined, "むね"],
        ["彼は**度胸**がある人です。", "かれ は **どきょう** が ある ひと です。", "He is a person with guts.", "N1", undefined, "キョウ"],
      ]),
      bk("脂", "N2", "fat, grease", "シ", "あぶら", [
        ["**脂肪**の少ない肉を選びます。", "**しぼう** の すくない にく を えらびます。", "I choose meat that is low in fat.", "N2", undefined, "シ"],
        ["この肉は**脂**が多いです。", "この にく は **あぶら** が おおい です。", "This meat has a lot of fat.", "N2", undefined, "あぶら"],
      ]),
      bk("指", "N4", "finger, point", "シ", "ゆび さ.す", [
        ["**指**が痛いです。", "**ゆび** が いたい です。", "My finger hurts.", "N3", undefined, "ゆび"],
        ["地図で駅を**指して**ください。", "ちず で えき を **さして** ください。", "Please point to the station on the map.", "N3", undefined, "さ.す"],
        ["先生の**指示**に従います。", "せんせい の **しじ** に したがいます。", "I follow the teacher's instructions.", "N2", undefined, "シ"],
      ]),
      bk("脳", "N2", "brain", "ノウ", "", [
        ["**脳**は体で一番大切な所です。", "**のう** は からだ で いちばん たいせつ な ところ です。", "The brain is the most important part of the body.", "N3", undefined, "ノウ"],
        ["彼は**頭脳**が優れています。", "かれ は **ずのう** が すぐれて います。", "He has an excellent mind.", "N2", undefined, "ノウ"],
      ]),
      bk("腕", "N2", "arm, skill", "ワン", "うで", [
        ["**腕**を上げてください。", "**うで** を あげて ください。", "Please raise your arm.", "N3", undefined, "うで"],
        ["彼は経営の**手腕**があります。", "かれ は けいえい の **しゅわん** が あります。", "He has business management skills.", "N1", undefined, "ワン"],
      ], [
        ["腕時計", "うでどけい", "wristwatch", "N3", "**腕時計**を買いました。", "I bought a wristwatch.", "**うでどけい** を かいました。"],
      ]),
      bk("腰", "N2", "lower back, waist", "ヨウ", "こし", [
        ["**腰**が痛いです。", "**こし** が いたい です。", "My lower back hurts.", "N3", undefined, "こし"],
        ["公園の**腰掛け**で休みます。", "こうえん の **こしかけ** で やすみます。", "I rest on the bench in the park.", "N2", undefined, "こし"],
        ["そこのいすに**腰掛けて**ください。", "そこ の いす に **こしかけて** ください。", "Please have a seat on that chair.", "N2", undefined, "こし"],
        ["父は**腰痛**に悩んでいます。", "ちち は **ようつう** に なやんで います。", "My father suffers from lower back pain.", "N1", undefined, "ヨウ"],
      ]),
      bk("要", "N3", "need, main point", "ヨウ", "い.る かなめ", [
        ["**必要**な物だけ買います。", "**ひつよう** な もの だけ かいます。", "I only buy what is necessary.", "N4", undefined, "ヨウ"],
        ["**重要**な会議があります。", "**じゅうよう** な かいぎ が あります。", "There is an important meeting.", "N3", undefined, "ヨウ"],
        ["彼はチームの**要**です。", "かれ は チーム の **かなめ** です。", "He is the linchpin of the team.", "N1", undefined, "かなめ"],
      ], [
        ["要る", "いる", "to need", "N5", "この仕事には時間が**要り**ます。", "This job takes time.", "この しごと には じかん が **いり**ます。"],
      ]),
    ],
  },
  {
    n: 56,
    note: "臓 is 月 + 蔵",
    items: [
      bk("蔵", "N2", "storehouse", "ゾウ", "くら", [
        ["**冷蔵庫**に牛乳があります。", "**れいぞうこ** に ぎゅうにゅう が あります。", "There is milk in the fridge.", "N4", undefined, "ゾウ"],
        ["お酒を**蔵**に入れます。", "おさけ を **くら** に いれます。", "We put the sake in the storehouse.", "N1", undefined, "くら"],
      ]),
      bk("臓", "N2", "internal organ", "ゾウ", "", [
        ["走ったので**心臓**が速く動いています。", "はしった ので **しんぞう** が はやく うごいて います。", "My heart is beating fast because I ran.", "N3", undefined, "ゾウ"],
      ]),
    ],
  },
  {
    n: 57,
    note: "衣 / 衤 clothing",
    items: [
      bk("衣", "N2", "clothes", "イ", "ころも", [
        ["冬の**衣服**を出しました。", "ふゆ の **いふく** を だしました。", "I took out my winter clothing.", "N3", undefined, "イ"],
        ["**衣食住**は生活の基本です。", "**いしょくじゅう** は せいかつ の きほん です。", "Food, clothing, and shelter are the basics of life.", "N2", undefined, "イ"],
        ["医者は**白衣**を着ています。", "いしゃ は **はくい** を きて います。", "The doctor is wearing a white coat.", "N2", undefined, "イ"],
        ["エビに**衣**をつけて揚げます。", "エビ に **ころも** を つけて あげます。", "I coat the shrimp in batter and fry them.", "N1", undefined, "ころも"],
      ], [
        ["衣類", "いるい", "clothing, clothes", "N3", "**衣類**を洗濯します。", "I wash the clothes.", "**いるい** を せんたく します。"],
        ["衣料", "いりょう", "clothing", "N3", "**衣料**品店で服を買います。", "I buy clothes at a clothing store.", "**いりょう**ひんてん で ふく を かいます。"],
      ]),
      bk("装", "N2", "dress, equipment", "ソウ ショウ", "よそお.う", [
        ["今日の**服装**はきれいです。", "きょう の **ふくそう** は きれい です。", "Today's outfit is nice.", "N3", undefined, "ソウ"],
        ["舞台の**衣装**がとてもきれいです。", "ぶたい の **いしょう** が とても きれい です。", "The stage costumes are very beautiful.", "N2", undefined, "ショウ"],
        ["男は客を**装って**店に入りました。", "おとこ は きゃく を **よそおって** みせ に はいりました。", "The man entered the shop pretending to be a customer.", "N1", undefined, "よそお.う"],
      ], [
        ["装置", "そうち", "device, equipment", "N3", "工場に新しい**装置**を入れました。", "We installed new equipment in the factory.", "こうじょう に あたらしい **そうち** を いれました。"],
      ]),
      bk("袋", "N2", "bag, sack", "タイ", "ふくろ", [
        ["**袋**をください。", "**ふくろ** を ください。", "A bag, please.", "N3", undefined, "ふくろ"],
        ["重さは**風袋**を引いて量ります。", "おもさ は **ふうたい** を ひいて はかります。", "The weight is measured minus the packaging (tare).", "N1", undefined, "タイ"],
      ]),
      bk("代", "N4", "substitute, fee, era", "ダイ タイ", "か.わる か.える よ", [
        ["父の**代わり**に行きます。", "ちち の **かわり** に いきます。", "I'll go instead of my father.", "N3", undefined, "か.わる"],
        ["電気**代**を払いました。", "でんき**だい** を はらいました。", "I paid the electricity bill.", "N3", undefined, "ダイ"],
        ["友だちと**交代**で運転します。", "ともだち と **こうたい** で うんてん します。", "My friend and I take turns driving.", "N2", undefined, "タイ"],
        ["健康はお金には**代え**られません。", "けんこう は おかね には **かえ**られません。", "Health cannot be bought with money.", "N2", undefined, "か.える"],
        ["**千代紙**で鶴を折ります。", "**ちよがみ** で つる を おります。", "I fold a crane from patterned paper.", "N1", undefined, "よ"],
      ]),
      bk("裏", "N2", "back, reverse side", "リ", "うら", [
        ["紙の**裏**に名前を書きます。", "かみ の **うら** に なまえ を かきます。", "I write my name on the back of the paper.", "N3", undefined, "うら"],
        ["**裏口**から家に入りました。", "**うらぐち** から いえ に はいりました。", "I entered the house through the back door.", "N2", undefined, "うら"],
        ["紙を**裏返して**ください。", "かみ を **うらがえして** ください。", "Please turn the paper over.", "N2", undefined, "うら"],
        ["**裏面**の説明を読んでください。", "**りめん** の せつめい を よんで ください。", "Please read the explanation on the back.", "N2", undefined, "リ"],
      ], [
        ["裏側", "うらがわ", "the reverse; the other side", "N3", "建物の**裏側**に駐車場があります。", "There is a parking lot behind the building.", "たてもの の **うらがわ** に ちゅうしゃじょう が あります。"],
        ["裏切る", "うらぎる", "to betray, to turn traitor", "N3", "友だちを**裏切り**ません。", "I won't betray my friends.", "ともだち を **うらぎり**ません。"],
      ]),
      bk("補", "N2", "supplement, make up for", "ホ", "おぎな.う", [
        ["彼は市長の**候補**です。", "かれ は しちょう の **こうほ** です。", "He is a candidate for mayor.", "N2", undefined, "ホ"],
        ["足りない分をお金で**補い**ます。", "たりない ぶん を おかね で **おぎない**ます。", "I'll make up the shortfall with money.", "N2", undefined, "おぎな.う"],
      ], [
        ["補償", "ほしょう", "compensation, reparation", "N3", "会社が損害を**補償**しました。", "The company compensated for the damage.", "かいしゃ が そんがい を **ほしょう** しました。"],
      ]),
      bk("複", "N2", "double, multiple", "フク", "", [
        ["この問題は**複雑**です。", "この もんだい は **ふくざつ** です。", "This problem is complicated.", "N3", undefined, "フク"],
        ["**複数**の人が来ました。", "**ふくすう** の ひと が きました。", "Several people came.", "N2", undefined, "フク"],
        ["大事な書類を**複写**します。", "だいじ な しょるい を **ふくしゃ** します。", "I make a copy of the important document.", "N2", undefined, "フク"],
      ]),
    ],
  },
];
