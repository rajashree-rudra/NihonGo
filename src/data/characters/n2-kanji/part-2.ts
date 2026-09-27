// N2 kanji book — groups 29–56 (kanji 113–236). See part-1.ts for the format.
import { bk, type BookGroup } from "../../builders.ts";

export const GROUPS: BookGroup[] = [
  {
    n: 29,
    note: "火 fire, simple forms",
    items: [
      bk("灯", "N2", "lamp, light", "トウ", "ひ あかり", [
        ["部屋の**電灯**を消しました。", "へや の **でんとう** を けしました。", "I turned off the room light.", "N3"],
        ["遠くに**灯り**が見えます。", "とおく に **あかり** が みえます。", "I can see a light in the distance.", "N3"],
      ], [
        ["蛍光灯", "けいこうとう", "fluorescent lamp", "N2", "部屋の**蛍光灯**を換えます。", "I'm replacing the fluorescent light in my room."],
        ["灯台", "とうだい", "lighthouse", "N2", "海の近くに**灯台**があります。", "There is a lighthouse near the sea."],
        ["灯油", "とうゆ", "lamp oil, kerosene", "N2", "冬は**灯油**を買います。", "I buy kerosene in winter."],
      ]),
      bk("灰", "N2", "ash", "カイ", "はい", [
        ["**灰色**の服を着ています。", "**はいいろ** の ふく を きて います。", "I'm wearing gray clothes.", "N2"],
        ["たばこの**灰**が落ちました。", "たばこ の **はい** が おちました。", "Cigarette ash fell.", "N3"],
      ]),
      bk("炭", "N2", "charcoal, coal", "タン", "すみ", [
        ["**石炭**を使います。", "**せきたん** を つかいます。", "We use coal.", "N3"],
        ["**炭**で肉を焼きます。", "**すみ** で にく を やきます。", "I grill meat over charcoal."],
      ], [["炭鉱", "たんこう", "coal mine, coal pit", "N2", "昔ここに**炭鉱**がありました。", "There used to be a coal mine here."]]),
    ],
  },
  {
    n: 30,
    note: "火 fire, complex forms",
    items: [
      bk("焼", "N2", "burn, grill, bake", "ショウ", "や.く や.ける", [["魚を**焼き**ます。", "さかな を **やき**ます。", "I grill fish."]]),
      bk("照", "N2", "shine, illuminate", "ショウ", "て.る て.らす", [
        ["太陽が**照って**います。", "たいよう が **てって** います。", "The sun is shining.", "N2"],
        ["部屋の**照明**が明るいです。", "へや の **しょうめい** が あかるい です。", "The room lighting is bright.", "N2"],
      ], [
        ["対照", "たいしょう", "contrast, antithesis, comparison", "N2", "二つの絵を**対照**します。", "I compare the two pictures."],
        ["照らす", "てらす", "to shine on, to illuminate", "N2", "月が道を**照らして**います。", "The moon is lighting up the road."],
      ]),
      bk("燃", "N2", "burn", "ネン", "も.える も.やす", [
        ["紙はよく**燃え**ます。", "かみ は よく **もえ**ます。", "Paper burns easily.", "N3"],
        ["**燃える**ごみは火曜日です。", "**もえる** ごみ は かようび です。", "Burnable trash is on Tuesday.", "N3"],
      ], [["燃やす", "もやす", "to burn", "N3", "庭で古い紙を**燃やし**ます。", "I burn old paper in the yard."]]),
      bk("然", "N3", "nature, so", "ゼン ネン", "", [
        ["**自然**が豊かな所です。", "**しぜん** が ゆたか な ところ です。", "It's a place rich in nature.", "N3"],
        ["**突然**、雨が降りました。", "**とつぜん**、あめ が ふりました。", "Suddenly it started raining.", "N3"],
      ]),
      bk("燥", "N2", "dry up", "ソウ", "", [
        ["冬は空気が**乾燥**します。", "ふゆ は くうき が **かんそう** します。", "The air gets dry in winter.", "N2"],
        ["**乾燥機**で服を乾かします。", "**かんそうき** で ふく を かわかします。", "I dry clothes in the dryer.", "N2"],
      ]),
      bk("爆", "N2", "explode, burst", "バク", "", [["工場で**爆発**がありました。", "こうじょう で **ばくはつ** が ありました。", "There was an explosion at the factory.", "N3"]]),
    ],
  },
  {
    n: 31,
    note: "冫 ice radical, looks like 氵",
    items: [
      bk("凍", "N2", "freeze", "トウ", "こお.る こご.える", [
        ["池の水が**凍り**ました。", "いけ の みず が **こおり**ました。", "The pond water froze.", "N3"],
        ["**冷凍**食品を買いました。", "**れいとう** しょくひん を かいました。", "I bought frozen food.", "N2"],
      ], [["凍える", "こごえる", "to freeze, to be chilled, to be frozen", "N2", "手が**凍える**ほど寒いです。", "It's so cold my hands are freezing."]]),
      bk("東", "N5", "east", "トウ", "ひがし", [["**東**の空が明るいです。", "**ひがし** の そら が あかるい です。", "The eastern sky is bright."]]),
    ],
  },
  {
    n: 32,
    note: "玉 shapes and 宀 roofs",
    items: [
      bk("玉", "N2", "ball, jewel", "ギョク", "たま", [
        ["**玉ねぎ**を切ります。", "**たまねぎ** を きります。", "I cut the onion.", "N3"],
        ["小さい**玉**で遊びます。", "ちいさい **たま** で あそびます。", "I play with a small ball.", "N3"],
      ]),
      bk("王", "N3", "king", "オウ", "", [
        ["昔、この国に**王**がいました。", "むかし、この くに に **おう** が いました。", "Long ago there was a king in this country.", "N3"],
        ["**王様**の話を読みました。", "**おうさま** の はなし を よみました。", "I read a story about a king.", "N3"],
      ]),
      bk("珍", "N2", "rare, unusual", "チン", "めずら.しい", [["これは**珍しい**花です。", "これ は **めずらしい** はな です。", "This is a rare flower."]]),
      bk("瓶", "N2", "bottle, jar", "ビン", "", [
        ["**瓶**にジュースを入れます。", "**びん** に ジュース を いれます。", "I put juice in a bottle.", "N3"],
        ["**瓶詰**のジャムを買いました。", "びんづめ の ジャム を かいました。", "I bought bottled jam.", "N2"],
      ]),
      bk("宝", "N2", "treasure", "ホウ", "たから", [
        ["これは私の**宝物**です。", "これ は わたし の **たからもの** です。", "This is my treasure.", "N3"],
        ["子どもは**宝**です。", "こども は **たから** です。", "Children are treasures.", "N3"],
      ], [["宝石", "ほうせき", "gem, jewel", "N3", "母は**宝石**を集めています。", "My mother collects gemstones."]]),
      bk("宇", "N2", "eaves, space", "ウ", "", [
        ["**宇宙**にはたくさんの星があります。", "**うちゅう** には たくさん の ほし が あります。", "There are many stars in space.", "N3"],
        ["**宇宙人**の映画を見ました。", "うちゅうじん の えいが を みました。", "I watched a movie about aliens.", "N2"],
      ]),
    ],
  },
  {
    n: 33,
    note: "nearly the same box shape",
    items: [
      bk("皿", "N2", "plate, dish", "", "さら", [
        ["**お皿**を洗います。", "**おさら** を あらいます。", "I wash the dishes.", "N3"],
        ["夕食の後、**皿洗い**をします。", "ゆうしょく の あと、さらあらい を します。", "I do the dishes after dinner.", "N2"],
      ]),
      bk("血", "N2", "blood", "ケツ", "ち", [
        ["指から**血**が出ました。", "ゆび から **ち** が でました。", "Blood came out of my finger."],
        ["病院で**血液**を調べました。", "びょういん で **けつえき** を しらべました。", "They tested my blood at the hospital.", "N3"],
      ], [["血管", "けっかん", "blood vessel", "N3", "**血管**が細いです。", "My blood vessels are thin."]]),
    ],
  },
  {
    n: 34,
    note: "皮 hides inside 被",
    items: [
      bk("皮", "N2", "skin, peel, hide", "ヒ", "かわ", [
        ["りんごの**皮**をむきます。", "りんご の **かわ** を むきます。", "I peel the apple skin.", "N3"],
        ["彼は**皮肉**を言いました。", "かれ は ひにく を いいました。", "He made a sarcastic remark.", "N2"],
      ]),
      bk("被", "N2", "suffer, cover", "ヒ", "こうむ.る かぶ.せる かぶ.る", [
        ["台風の**被害**が大きいです。", "たいふう の **ひがい** が おおきい です。", "The typhoon damage is big.", "N3"],
        ["箱にふたを**被せ**ます。", "はこ に ふた を かぶせます。", "I put the lid on the box.", "N2"],
      ]),
    ],
  },
  {
    n: 35,
    note: "same 目 body, different top",
    items: [
      bk("省", "N2", "ministry, omit, reflect", "セイ ショウ", "はぶ.く かえり.みる", [
        ["長い名前を**省略**します。", "ながい なまえ を **しょうりゃく** します。", "I'll shorten the long name.", "N2"],
        ["説明を**省き**ます。", "せつめい を **はぶき**ます。", "I'll skip the explanation.", "N2"],
      ], [
        ["反省", "はんせい", "reflection, reconsideration", "N2", "自分の行動を**反省**します。", "I reflect on my own actions."],
        ["帰省", "きせい", "homecoming; returning home", "N2", "夏に田舎へ**帰省**します。", "I go back to my hometown in the summer."],
      ]),
      bk("少", "N5", "few, little", "ショウ", "すく.ない すこ.し", [
        ["**少し**待ってください。", "**すこし** まって ください。", "Please wait a little.", "N3"],
        ["この村は人が**少ない**です。", "この むら は ひと が **すくない** です。", "There are few people in this village.", "N3"],
      ]),
      bk("県", "N2", "prefecture", "ケン", "", [["私は千葉**県**に住んでいます。", "わたし は ちば**けん** に すんで います。", "I live in Chiba Prefecture.", "N3"]]),
    ],
  },
  {
    n: 36,
    note: "矢 / 石 left side",
    items: [
      bk("短", "N2", "short", "タン", "みじか.い", [
        ["この鉛筆は**短い**です。", "この えんぴつ は **みじかい** です。", "This pencil is short.", "N2"],
        ["**短期**のアルバイトを探します。", "たんき の アルバイト を さがします。", "I'm looking for a short-term part-time job.", "N2"],
      ], [
        ["短所", "たんしょ", "defect, weak point; disadvantage", "N2", "自分の**短所**を知っています。", "I know my own weaknesses."],
        ["短編", "たんぺん", "short (e.g., story, film)", "N2", "**短編**の小説を読みました。", "I read a short story."],
        ["長短", "ちょうたん", "length; long and short", "N2", "二本の線の**長短**を比べます。", "I compare the lengths of the two lines."],
        ["短期間", "たんきかん", "short term; short time", "N2", "**短期間**で日本語を覚えました。", "I learned Japanese in a short period of time."],
      ]),
      bk("砂", "N2", "sand", "サ シャ", "すな", [
        ["**砂糖**を入れますか。", "**さとう** を いれます か。", "Shall I add sugar?"],
        ["海の**砂**は熱いです。", "うみ の **すな** は あつい です。", "The sand at the beach is hot."],
      ], [["砂漠", "さばく", "desert", "N3", "**砂漠**は昼、とても暑いです。", "The desert is very hot during the day."]]),
      bk("硬", "N2", "hard, stiff", "コウ", "かた.い", [["この肉は**硬い**です。", "この にく は **かたい** です。", "This meat is tough.", "N3"]]),
      bk("磨", "N2", "polish, brush", "マ", "みが.く", [
        ["歯を**磨き**ます。", "は を **みがき**ます。", "I brush my teeth.", undefined, "Ha o migakimasu."],
        ["朝と夜に**歯磨き**をします。", "あさ と よる に はみがき を します。", "I brush my teeth morning and night.", "N2"],
      ]),
    ],
  },
  {
    n: 37,
    note: "礻 / 示 altar",
    items: [
      bk("祈", "N2", "pray, wish", "キ", "いの.る", [
        ["神社で**祈り**ました。", "じんじゃ で **いのり**ました。", "I prayed at the shrine."],
        ["成功を**祈って**います。", "せいこう を **いのって** います。", "I'm wishing for your success."],
      ]),
      bk("折", "N3", "fold, break", "セツ", "お.る お.れる", [
        ["紙を半分に**折り**ます。", "かみ を はんぶん に **おり**ます。", "I fold the paper in half."],
        ["**折り紙**が好きです。", "**おりがみ** が すき です。", "I like origami."],
      ]),
      bk("祝", "N2", "celebrate", "シュク シュウ", "いわ.う", [
        ["誕生日を**祝い**ます。", "たんじょうび を **いわい**ます。", "We celebrate the birthday.", "N3"],
        ["**お祝い**のカードを送りました。", "**おいわい** の カード を おくりました。", "I sent a congratulations card.", "N3"],
      ], [["祝日", "しゅくじつ", "national holiday", "N2", "明日は**祝日**です。", "Tomorrow is a national holiday."]]),
      bk("祭", "N2", "festival", "サイ", "まつ.り まつ.る", [
        ["夏の**祭り**に行きます。", "なつ の **まつり** に いきます。", "I'm going to the summer festival.", "N2"],
        ["**祭日**は店が休みです。", "さいじつ は みせ が やすみ です。", "Shops are closed on public holidays.", "N2"],
      ], [["大学祭", "だいがくさい", "university festival", "N2", "**大学祭**でカレーを売ります。", "We're selling curry at the university festival."]]),
      bk("際", "N3", "occasion, edge", "サイ", "きわ", [
        ["出かける**際**は鍵をかけます。", "でかける **さい** は かぎ を かけます。", "When going out, I lock the door.", "N3"],
        ["**国際**的な会社です。", "**こくさい**てき な かいしゃ です。", "It's an international company.", "N3"],
      ]),
      bk("察", "N3", "guess, inspect", "サツ", "", [
        ["**警察**に電話しました。", "**けいさつ** に でんわ しました。", "I called the police."],
        ["相手の気持ちを**察し**ます。", "あいて の きもち を **さっし**ます。", "I sense how the other person feels."],
      ]),
      bk("禁", "N2", "prohibit", "キン", "", [
        ["ここは駐車**禁止**です。", "ここ は ちゅうしゃ **きんし** です。", "Parking is prohibited here.", "N3"],
        ["この店は**禁煙**です。", "この みせ は きんえん です。", "This shop is non-smoking.", "N3"],
      ]),
    ],
  },
  {
    n: 38,
    note: "扌 hand, simple right side",
    items: [
      bk("担", "N2", "carry, be in charge", "タン", "かつ.ぐ にな.う", [
        ["私がこの仕事を**担当**します。", "わたし が この しごと を **たんとう** します。", "I am in charge of this job.", "N2"],
        ["**担当者**に電話します。", "たんとうしゃ に でんわ します。", "I'll call the person in charge.", "N2"],
      ]),
      bk("拝", "N2", "worship, (humble) see", "ハイ", "おが.む", [
        ["神社で**拝み**ました。", "じんじゃ で **おがみ**ました。", "I prayed at the shrine.", "N2"],
        ["お写真を**拝見**しました。", "おしゃしん を **はいけん** しました。", "I have seen your photo. (humble)", "N2"],
      ]),
      bk("挟", "N2", "put between, pinch", "キョウ", "はさ.む はさ.まる", [
        ["パンにハムを**挟み**ます。", "パン に ハム を **はさみ**ます。", "I put ham between the bread.", "N2"],
        ["ドアに服が**挟まり**ました。", "ドア に ふく が はさまりました。", "My clothes got caught in the door.", "N2"],
      ]),
      bk("捜", "N2", "search, look for", "ソウ", "さが.す", [
        ["財布を**捜して**います。", "さいふ を **さがして** います。", "I'm looking for my wallet.", "N2"],
        ["警察が事件を**捜査**しています。", "けいさつ が じけん を そうさ して います。", "The police are investigating the case.", "N2"],
      ]),
    ],
  },
  {
    n: 39,
    note: "扌 hand, complex right side",
    items: [
      bk("掃", "N2", "sweep", "ソウ", "は.く", [
        ["部屋を**掃除**します。", "へや を **そうじ** します。", "I clean the room.", "N2"],
        ["毎週、**掃除機**をかけます。", "まいしゅう、**そうじき** を かけます。", "I vacuum every week.", "N2"],
      ]),
      bk("掘", "N2", "dig", "クツ", "ほ.る", [
        ["庭に穴を**掘り**ました。", "にわ に あな を **ほり**ました。", "I dug a hole in the garden.", "N2"],
        ["子どもが砂を**掘って**います。", "こども が すな を **ほって** います。", "The child is digging in the sand.", "N2"],
      ]),
      bk("採", "N2", "pick, adopt, hire", "サイ", "と.る", [
        ["会社に**採用**されました。", "かいしゃ に **さいよう** されました。", "I was hired by the company.", "N2"],
        ["山でキノコを**採り**ました。", "やま で キノコ を **とり**ました。", "I picked mushrooms in the mountain.", "N2"],
      ], [
        ["採点", "さいてん", "marking, grading", "N2", "先生がテストを**採点**します。", "The teacher grades the test."],
        ["採集", "さいしゅう", "collecting, gathering", "N3", "山で虫を**採集**しました。", "I collected insects in the mountains."],
        ["不採用", "ふさいよう", "rejection (of an application)", "N2", "会社から**不採用**の連絡が来ました。", "I got a rejection notice from the company."],
      ]),
      bk("接", "N2", "touch, contact, connect", "セツ", "つ.ぐ", [
        ["明日、**面接**があります。", "あした、**めんせつ** が あります。", "I have an interview tomorrow.", "N2"],
        ["**直接**、先生に話します。", "**ちょくせつ**、せんせい に はなします。", "I'll talk to the teacher directly.", "N3"],
      ], [
        ["応接", "おうせつ", "reception", "N2", "**応接**室でお客と話します。", "I talk with guests in the reception room."],
        ["間接", "かんせつ", "indirect, indirectness", "N2", "**間接**の光で部屋が明るいです。", "The room is bright with indirect light."],
        ["接近", "せっきん", "getting closer, drawing nearer, approaching", "N2", "台風が**接近**しています。", "A typhoon is approaching."],
        ["接する", "せっする", "to attend to (someone); to associate with", "N2", "お客に優しく**接し**ます。", "I treat customers kindly."],
        ["接続", "せつぞく", "connection, union, join", "N2", "パソコンをネットに**接続**します。", "I connect the computer to the internet."],
        ["接着", "せっちゃく", "adhesion; gluing; bonding", "N2", "二枚の紙を**接着**します。", "I glue two sheets of paper together."],
      ]),
      bk("換", "N2", "exchange, replace", "カン", "か.える か.わる", [
        ["空港でお金を**交換**します。", "くうこう で おかね を **こうかん** します。", "I exchange money at the airport.", "N3"],
        ["時計の電池を**換え**ました。", "とけい の でんち を **かえ**ました。", "I changed the watch battery.", "N3"],
      ], [
        ["換気", "かんき", "ventilation", "N2", "窓を開けて**換気**します。", "I open the window to air out the room."],
        ["乗換", "のりかえ", "a transfer (e.g., trains, buses)", "N2", "次の駅で**乗換**です。", "We transfer at the next station."],
        ["乗り換え", "のりかえ", "transfer (trains, buses, etc.)", "N2", "東京で**乗り換え**をします。", "I change trains in Tokyo."],
        ["変換", "へんかん", "change; conversion; transformation", "N2", "ひらがなを漢字に**変換**します。", "I convert hiragana into kanji."],
        ["気分転換", "きぶんてんかん", "change of pace; change of mood", "N2", "散歩は**気分転換**になります。", "Taking a walk is a nice change of pace."],
      ]),
      bk("損", "N2", "loss, damage", "ソン", "そこ.なう", [
        ["買わないと**損**ですよ。", "かわない と **そん** です よ。", "You'll lose out if you don't buy it.", "N3"],
        ["**損得**を考えないで手伝います。", "そんとく を かんがえないで てつだいます。", "I help without thinking about gain or loss.", "N2"],
      ], [["損害", "そんがい", "damage, loss", "N3", "台風で大きな**損害**が出ました。", "The typhoon caused heavy damage."]]),
    ],
  },
  {
    n: 40,
    note: "禾 grain radical",
    items: [
      bk("秒", "N2", "second (time)", "ビョウ", "", [["十**秒**待ってください。", "じゅう**びょう** まって ください。", "Please wait ten seconds.", "N3"]]),
      bk("移", "N2", "move, shift", "イ", "うつ.る うつ.す", [
        ["新しい家に**移り**ました。", "あたらしい いえ に **うつり**ました。", "I moved to a new house.", "N3"],
        ["となりの席に**移動**してください。", "となり の せき に **いどう** して ください。", "Please move to the next seat.", "N3"],
      ], [
        ["移転", "いてん", "moving, transfer", "N2", "会社が駅の近くに**移転**しました。", "The company moved near the station."],
        ["移し替える", "うつしかえる", "to shift; to transfer", "N2", "荷物を別の箱に**移し替え**ます。", "I move the luggage into a different box."],
      ]),
      bk("多", "N5", "many, much", "タ", "おお.い", [["この店は人が**多い**です。", "この みせ は ひと が **おおい** です。", "There are many people at this shop.", "N2"]]),
      bk("税", "N2", "tax", "ゼイ", "", [
        ["**税金**を払います。", "**ぜいきん** を はらいます。", "I pay taxes.", "N3"],
        ["この値段は消費**税**込みです。", "この ねだん は しょうひ**ぜい** こみ です。", "This price includes consumption tax.", "N3"],
      ], [
        ["税関", "ぜいかん", "customs", "N2", "空港の**税関**を通ります。", "I go through customs at the airport."],
        ["免税", "めんぜい", "tax exemption", "N2", "空港の**免税**店で買いました。", "I bought it at the airport duty-free shop."],
      ]),
      bk("説", "N3", "explain, theory", "セツ ゼイ", "と.く", [
        ["先生が**説明**しました。", "せんせい が **せつめい** しました。", "The teacher explained.", "N3"],
        ["**小説**を読みます。", "**しょうせつ** を よみます。", "I read novels.", "N3"],
      ]),
      bk("香", "N2", "fragrance, scent", "コウ キョウ", "か かお.り かお.る", [
        ["花のいい**香り**がします。", "はな の いい **かおり** が します。", "There's a lovely scent of flowers.", "N3"],
        ["彼女は**香水**をつけています。", "かのじょ は **こうすい** を つけて います。", "She is wearing perfume.", "N2"],
      ]),
    ],
  },
  {
    n: 41,
    note: "⺮ bamboo, light",
    items: [
      bk("竹", "N2", "bamboo", "チク", "たけ", [["庭に**竹**があります。", "にわ に **たけ** が あります。", "There is bamboo in the garden.", "N2"]]),
      bk("符", "N2", "token, sign, ticket", "フ", "", [
        ["電車の**切符**を買います。", "でんしゃ の **きっぷ** を かいます。", "I buy a train ticket."],
        ["地図の**符号**を覚えます。", "ちず の ふごう を おぼえます。", "I memorize the symbols on the map.", "N2"],
      ]),
      bk("付", "N4", "attach, stick", "フ", "つ.ける つ.く", [
        ["**受付**で名前を書きます。", "**うけつけ** で なまえ を かきます。", "I write my name at the reception desk.", "N2"],
        ["ノートにシールを**付け**ます。", "ノート に シール を **つけ**ます。", "I stick a sticker on my notebook.", "N2"],
      ]),
      bk("筆", "N2", "writing brush", "ヒツ", "ふで", [
        ["**筆**で名前を書きます。", "**ふで** で なまえ を かきます。", "I write my name with a brush.", "N3"],
        ["先生は今、本を**執筆**しています。", "せんせい は いま、ほん を しっぴつ して います。", "The teacher is writing a book at the moment.", "N2"],
      ], [
        ["随筆", "ずいひつ", "essays, miscellaneous writings", "N2", "**随筆**を読むのが好きです。", "I like reading essays."],
        ["筆記", "ひっき", "note taking, writing", "N2", "先生の話を**筆記**します。", "I take notes on what the teacher says."],
        ["筆者", "ひっしゃ", "writer, author", "N2", "この記事の**筆者**は有名です。", "The author of this article is famous."],
      ]),
      bk("筒", "N2", "tube, cylinder", "トウ", "つつ", [
        ["**封筒**に手紙を入れます。", "**ふうとう** に てがみ を いれます。", "I put the letter in an envelope."],
        ["水**筒**を持って行きます。", "すい**とう** を もって いきます。", "I'll take a water bottle."],
      ]),
      bk("同", "N4", "same", "ドウ", "おな.じ", [["**同じ**物を買いました。", "**おなじ** もの を かいました。", "I bought the same thing.", "N2"]]),
    ],
  },
  {
    n: 42,
    note: "⺮ bamboo, heavy",
    items: [
      bk("算", "N2", "calculate", "サン", "", [
        ["**計算**が苦手です。", "**けいさん** が にがて です。", "I'm bad at calculation.", "N3"],
        ["旅行の**予算**が足りません。", "りょこう の **よさん** が たりません。", "The budget for the trip isn't enough.", "N3"],
      ], [
        ["掛け算", "かけざん", "multiplication", "N2", "学校で**掛け算**を習いました。", "I learned multiplication at school."],
        ["算数", "さんすう", "arithmetic", "N2", "**算数**が得意です。", "I'm good at arithmetic."],
        ["算盤", "そろばん", "abacus", "N2", "祖父は**算盤**が使えます。", "My grandfather can use an abacus."],
        ["引算", "ひきざん", "subtraction", "N2", "**引算**の問題を解きます。", "I solve subtraction problems."],
        ["割算", "わりざん", "division (math)", "N2", "**割算**は少し難しいです。", "Division is a little difficult."],
        ["精算", "せいさん", "exact calculation, adjustment", "N3", "駅で運賃を**精算**します。", "I pay the fare adjustment at the station."],
      ]),
      bk("管", "N2", "pipe, manage", "カン", "くだ", [
        ["部屋の鍵は**管理人**が持っています。", "へや の かぎ は **かんりにん** が もって います。", "The manager has the room key.", "N3"],
        ["水道の**管**が壊れました。", "すいどう の **かん** が こわれました。", "The water pipe broke.", "N3"],
      ]),
      bk("築", "N2", "build, construct", "チク", "きず.く", [
        ["彼は**建築**の勉強をしています。", "かれ は **けんちく** の べんきょう を して います。", "He is studying architecture.", "N3"],
        ["この家は**築**十年です。", "この いえ は **ちく** じゅうねん です。", "This house was built ten years ago.", "N3"],
      ]),
      bk("簡", "N2", "simple, brief", "カン", "", [
        ["このテストは**簡単**です。", "この テスト は **かんたん** です。", "This test is easy."],
        ["説明を**簡略**にします。", "せつめい を かんりゃく に します。", "I keep the explanation brief.", "N2"],
      ], [["簡略化", "かんりゃくか", "simplification", "N2", "手続きを**簡略化**しました。", "The procedures were simplified."]]),
      bk("間", "N5", "interval, between", "カン ケン", "あいだ ま", [
        ["少しの**間**、待ちました。", "すこし の **あいだ**、まちました。", "I waited for a short while.", "N2"],
        ["**時間**がありません。", "**じかん** が ありません。", "There is no time.", "N2"],
      ]),
      bk("籍", "N2", "register, enrollment", "セキ", "", [
        ["**国籍**は日本です。", "**こくせき** は にほん です。", "My nationality is Japanese.", "N3"],
        ["ネットで**書籍**を注文しました。", "ネット で しょせき を ちゅうもん しました。", "I ordered a book online.", "N2"],
      ], [["在籍", "ざいせき", "being enrolled; being registered", "N2", "私はこの大学に**在籍**しています。", "I'm enrolled at this university."]]),
    ],
  },
  {
    n: 43,
    note: "糸 thread, simple right side",
    items: [
      bk("糸", "N2", "thread", "シ", "いと", [["針に**糸**を通します。", "はり に **いと** を とおします。", "I thread the needle with thread."]]),
      bk("紅", "N2", "crimson, deep red", "コウ ク", "べに くれない", [
        ["**紅茶**を飲みます。", "**こうちゃ** を のみます。", "I drink black tea."],
        ["**口紅**をつけました。", "**くちべに** を つけました。", "I put on lipstick.", "N2"],
      ], [["紅葉", "こうよう", "fall colors (of leaves)", "N2", "秋の**紅葉**がきれいです。", "The autumn leaves are beautiful."]]),
      bk("工", "N4", "craft, construction", "コウ ク", "", [
        ["**工場**で働いています。", "**こうじょう** で はたらいて います。", "I work at a factory.", "N3"],
        ["道路の**工事**が始まりました。", "どうろ の **こうじ** が はじまりました。", "Road construction has started.", "N2"],
      ]),
      bk("純", "N2", "pure, genuine", "ジュン", "", [
        ["話はとても**単純**です。", "はなし は とても **たんじゅん** です。", "The story is very simple.", "N3"],
        ["彼は**純粋**な人です。", "かれ は **じゅんすい** な ひと です。", "He is a pure-hearted person.", "N2"],
      ], [
        ["純情", "じゅんじょう", "pure heart", "N2", "彼は**純情**な人です。", "He is a pure-hearted person."],
        ["単純明快", "たんじゅんめいかい", "simple and clear", "N2", "先生の説明は**単純明快**でした。", "The teacher's explanation was simple and clear."],
      ]),
      bk("細", "N2", "thin, fine, detailed", "サイ", "ほそ.い こま.かい", [
        ["この道は**細い**です。", "この みち は **ほそい** です。", "This road is narrow."],
        ["**細かい**お金がありません。", "**こまかい** おかね が ありません。", "I don't have any small change."],
      ], [["細長い", "ほそながい", "long and narrow", "N2", "**細長い**箱に入れます。", "I put it in a long, narrow box."]]),
      bk("田", "N5", "rice field", "デン", "た", [
        ["**田**んぼに水を入れます。", "**た**んぼ に みず を いれます。", "I let water into the rice field.", "N2"],
        ["**田中**さんは私の友だちです。", "**たなか** さん は わたし の ともだち です。", "Mr. Tanaka is my friend.", "N2"],
      ]),
    ],
  },
  {
    n: 44,
    note: "糸 thread, medium right side",
    items: [
      bk("紹", "N2", "introduce", "ショウ", "", [["友だちを**紹介**します。", "ともだち を **しょうかい** します。", "I'll introduce my friend."]]),
      bk("招", "N3", "invite, beckon", "ショウ", "まね.く", [
        ["パーティーに**招待**されました。", "パーティー に **しょうたい** されました。", "I was invited to the party.", "N3"],
        ["友だちを家に**招き**ます。", "ともだち を いえ に **まねき**ます。", "I invite friends to my house.", "N3"],
      ]),
      bk("絡", "N2", "entwine, connect", "ラク", "から.む から.まる", [
        ["あとで**連絡**します。", "あとで **れんらく** します。", "I'll contact you later.", "N2"],
        ["**連絡先**を教えてください。", "**れんらくさき** を おしえて ください。", "Please tell me your contact details.", "N3"],
      ]),
      bk("綿", "N2", "cotton", "メン", "わた", [["このシャツは**綿**です。", "この シャツ は **めん** です。", "This shirt is cotton.", "N3"]]),
      bk("総", "N2", "general, whole, total", "ソウ", "", [
        ["**総理**大臣が話しました。", "**そうり** だいじん が はなしました。", "The prime minister spoke.", "N2"],
        ["**総合**病院に行きます。", "**そうごう** びょういん に いきます。", "I'm going to the general hospital.", "N2"],
      ], [
        ["総額", "そうがく", "sum total; total amount", "N2", "旅行の**総額**を計算します。", "I calculate the total cost of the trip."],
        ["総務", "そうむ", "general affairs; general administration", "N2", "会社で**総務**の仕事をしています。", "I work in general affairs at my company."],
        ["総数", "そうすう", "total number; count", "N2", "参加者の**総数**は百人です。", "The total number of participants is one hundred."],
      ]),
    ],
  },
  {
    n: 45,
    note: "糸 thread, heavy right side",
    items: [
      bk("緑", "N2", "green", "リョク", "みどり", [
        ["春になって山が**緑**になりました。", "はる に なって やま が **みどり** に なりました。", "The mountain turned green in spring."],
        ["食事の後に**緑茶**を飲みます。", "しょくじ の あと に りょくちゃ を のみます。", "I drink green tea after meals.", "N2"],
      ]),
      bk("線", "N2", "line", "セン", "", [
        ["紙に**線**を書きます。", "かみ に **せん** を かきます。", "I draw a line on the paper."],
        ["大事な言葉に**下線**を引きます。", "だいじ な ことば に かせん を ひきます。", "I underline the important words.", "N2"],
      ], [
        ["曲線", "きょくせん", "curve", "N2", "きれいな**曲線**を書きます。", "I draw a beautiful curve."],
        ["光線", "こうせん", "beam, light ray", "N2", "太陽の**光線**が強いです。", "The sun's rays are strong."],
        ["新幹線", "しんかんせん", "Shinkansen, “Bullet Train”", "N2", "**新幹線**で大阪へ行きます。", "I go to Osaka by Shinkansen."],
        ["水平線", "すいへいせん", "horizon", "N2", "**水平線**に船が見えます。", "I can see a ship on the horizon."],
        ["線路", "せんろ", "line, track, roadbed", "N2", "**線路**のそばを歩きます。", "I walk beside the railroad tracks."],
        ["脱線", "だっせん", "derailment, digression", "N2", "電車が**脱線**しました。", "The train derailed."],
        ["直線", "ちょくせん", "straight line", "N2", "ここに**直線**を引いてください。", "Please draw a straight line here."],
        ["内線", "ないせん", "phone extension", "N2", "**内線**でお願いします。", "Please use the internal extension."],
        ["地平線", "ちへいせん", "horizon", "N3", "**地平線**から日が昇ります。", "The sun rises from the horizon."],
        ["目線", "めせん", "one's gaze; point of view", "N2", "子どもの**目線**で話します。", "I talk to children at their eye level."],
      ]),
      bk("編", "N2", "knit, edit, compile", "ヘン", "あ.む", [
        ["セーターを**編み**ました。", "セーター を **あみ**ました。", "I knitted a sweater.", "N2"],
        ["彼は本の**編集**をしています。", "かれ は ほん の **へんしゅう** を して います。", "He does book editing.", "N2"],
      ], [["編み物", "あみもの", "knitting", "N2", "冬は**編み物**をします。", "I knit in the winter."]]),
      bk("練", "N2", "practice, refine", "レン", "ね.る", [
        ["毎日、日本語を**練習**します。", "まいにち、にほんご を **れんしゅう** します。", "I practice Japanese every day.", "N3"],
        ["**洗練**されたデザインです。", "せんれん された デザイン です。", "It's a refined design.", "N2"],
      ]),
      bk("績", "N2", "achievement, results", "セキ", "", [
        ["テストの**成績**がよかったです。", "テスト の **せいせき** が よかった です。", "My test results were good.", "N3"],
        ["彼の**功績**は大きいです。", "かれ の こうせき は おおきい です。", "His achievements are great.", "N2"],
      ], [["実績", "じっせき", "achievements, actual results", "N2", "会社の**実績**が上がりました。", "The company's performance improved."]]),
      bk("積", "N3", "pile up, accumulate", "セキ", "つ.む つ.もる", [
        ["雪が**積もり**ました。", "ゆき が **つもり**ました。", "The snow has piled up.", "N2"],
        ["少しずつ経験を**積み**ます。", "すこし ずつ けいけん を **つみ**ます。", "I build up experience little by little.", "N2"],
      ]),
      bk("責", "N3", "blame, responsibility", "セキ", "せ.める", [
        ["私が**責任**を持ちます。", "わたし が **せきにん** を もちます。", "I'll take responsibility.", "N3"],
        ["人を**責め**ないでください。", "ひと を **せめ**ないで ください。", "Please don't blame people.", "N3"],
      ]),
    ],
  },
  {
    n: 46,
    note: "identical tops",
    items: [
      bk("栄", "N2", "flourish, glory", "エイ", "さか.える は.える", [["野菜は**栄養**があります。", "やさい は **えいよう** が あります。", "Vegetables have nutrition.", "N3"]]),
      bk("営", "N2", "manage, run a business", "エイ", "いとな.む", [
        ["店は九時から**営業**します。", "みせ は くじ から **えいぎょう** します。", "The shop opens for business at nine.", "N3"],
        ["父は小さい店を**経営**しています。", "ちち は ちいさい みせ を けいえい して います。", "My father runs a small shop.", "N3"],
      ], [["経営者", "けいえいしゃ", "manager; proprietor", "N2", "**経営者**と会って話しました。", "I met and talked with the company's manager."]]),
    ],
  },
  {
    n: 47,
    note: "米 rice radical",
    items: [
      bk("粉", "N2", "powder, flour", "フン", "こな こ", [
        ["小麦**粉**でパンを作ります。", "こむぎ**こ** で パン を つくります。", "I make bread with flour.", "N3"],
        ["春は**花粉症**でつらいです。", "はる は かふんしょう で つらい です。", "Spring is hard because of hay fever.", "N2"],
      ]),
      bk("分", "N5", "minute, part, understand", "ブン フン ブ", "わ.かる わ.ける", [["十**分**待ってください。", "じゅっ**ぷん** まって ください。", "Please wait ten minutes.", "N3"]]),
      bk("粒", "N2", "grain, drop", "リュウ", "つぶ", [["この米は**粒**が大きいです。", "この こめ は **つぶ** が おおきい です。", "This rice has big grains.", "N2"]]),
      bk("立", "N5", "stand", "リツ", "た.つ た.てる", [["**立って**ください。", "**たって** ください。", "Please stand up."]]),
    ],
  },
  {
    n: 48,
    note: "paired wing-like halves",
    items: [
      bk("羽", "N2", "feather, wing", "ウ", "はね は", [
        ["鳥の**羽**が落ちていました。", "とり の **はね** が おちて いました。", "A bird's feather had fallen.", "N2"],
        ["公園で鳥の**羽根**を拾いました。", "こうえん で とり の はね を ひろいました。", "I picked up a bird feather in the park.", "N2"],
      ]),
      bk("弱", "N2", "weak", "ジャク", "よわ.い よわ.る", [
        ["私は寒さに**弱い**です。", "わたし は さむさ に **よわい** です。", "I'm weak against the cold."],
        ["自分の**弱点**を直します。", "じぶん の じゃくてん を なおします。", "I work on my weak points.", "N2"],
      ], [
        ["弱まる", "よわまる", "to weaken, to be emaciated, to be dejected", "N3", "夕方、雨が**弱まり**ました。", "The rain weakened in the evening."],
        ["弱める", "よわめる", "to weaken", "N3", "火を少し**弱めて**ください。", "Please turn the heat down a little."],
        ["強弱", "きょうじゃく", "strength and weakness", "N2", "声に**強弱**をつけて読みます。", "I read aloud with varying emphasis."],
        ["弱気", "よわき", "timid; weak-kneed; fainthearted", "N2", "試合の前に**弱気**になりました。", "I lost my nerve before the match."],
        ["弱々しい", "よわよわしい", "frail; feeble", "N2", "子犬の声が**弱々しい**です。", "The puppy's voice is feeble."],
      ]),
      bk("翌", "N2", "the following (day)", "ヨク", "", [
        ["**翌日**、雨が降りました。", "**よくじつ**、あめ が ふりました。", "The next day, it rained.", "N2"],
        ["**翌朝**、早く起きました。", "**よくあさ**、はやく おきました。", "The next morning, I got up early.", "N2"],
      ]),
      bk("群", "N2", "flock, group", "グン", "む.れ む.れる", [["羊の**群れ**が見えます。", "ひつじ の **むれ** が みえます。", "I can see a flock of sheep.", "N2"]]),
    ],
  },
  {
    n: 49,
    note: "all built on 者",
    items: [
      bk("著", "N2", "author, remarkable", "チョ", "あらわ.す いちじる.しい", [["この本の**著者**は有名です。", "この ほん の **ちょしゃ** は ゆうめい です。", "The author of this book is famous.", "N3"]]),
      bk("者", "N3", "person", "シャ", "もの", [
        ["**若者**が集まっています。", "**わかもの** が あつまって います。", "Young people are gathering.", "N2"],
        ["**医者**に相談しました。", "**いしゃ** に そうだん しました。", "I consulted a doctor.", "N2"],
      ]),
      bk("暑", "N4", "hot (weather)", "ショ", "あつ.い", [["今日はとても**暑い**です。", "きょう は とても **あつい** です。", "It is very hot today."]]),
      bk("諸", "N2", "various, many", "ショ", "", [
        ["世界の**諸国**が集まりました。", "せかい の **しょこく** が あつまりました。", "Various countries of the world gathered.", "N2"],
        ["**諸外国**の文化を学びます。", "**しょがいこく** の ぶんか を まなびます。", "I study the cultures of foreign countries.", "N2"],
      ]),
      bk("署", "N2", "government office, signature", "ショ", "", [
        ["**警察署**に行きました。", "**けいさつしょ** に いきました。", "I went to the police station."],
        ["ここに**署名**してください。", "ここ に **しょめい** して ください。", "Please sign here.", "N3"],
      ]),
    ],
  },
  {
    n: 50,
    note: "土 earth, light",
    items: [
      bk("圧", "N2", "pressure", "アツ", "", [
        ["今日は**気圧**が低いです。", "きょう は **きあつ** が ひくい です。", "The air pressure is low today.", "N2"],
        ["病院で**血圧**を測りました。", "びょういん で **けつあつ** を はかりました。", "I had my blood pressure taken at the hospital.", "N2"],
      ], [
        ["圧縮", "あっしゅく", "compression, condensation, pressure", "N2", "ファイルを**圧縮**します。", "I compress the file."],
        ["圧勝", "あっしょう", "complete victory", "N2", "昨日の試合に**圧勝**しました。", "We won yesterday's match by a landslide."],
      ]),
      bk("均", "N2", "level, average", "キン", "", [["テストの**平均**点は七十点です。", "テスト の **へいきん**てん は ななじゅってん です。", "The average test score is 70.", "N3"]]),
      bk("型", "N2", "type, model, mold", "ケイ", "かた", [
        ["血液**型**はA型です。", "けつえき**がた** は エーがた です。", "My blood type is A.", "N3"],
        ["これは**典型**の例です。", "これ は てんけい の れい です。", "This is a typical example.", "N3"],
      ], [
        ["体型", "たいけい", "figure; body shape; build", "N2", "**体型**に合う服を選びます。", "I choose clothes that suit my body type."],
        ["夜型", "よるがた", "nocturnal (person)", "N2", "私は**夜型**の人間です。", "I'm a night owl."],
        ["典型的", "てんけいてき", "typical; representative", "N3", "**典型的**な日本の家です。", "It's a typical Japanese house."],
      ]),
      bk("埋", "N2", "bury, fill", "マイ", "う.める う.まる", [
        ["庭に箱を**埋め**ました。", "にわ に はこ を **うめ**ました。", "I buried a box in the garden.", "N2"],
        ["道が雪で**埋まり**ました。", "みち が ゆき で うまりました。", "The road was buried in snow.", "N3"],
      ]),
    ],
  },
  {
    n: 51,
    note: "土 earth, heavy",
    items: [
      bk("塔", "N2", "tower", "トウ", "", [["遠くに高い**塔**が見えます。", "とおく に たかい **とう** が みえます。", "I can see a tall tower in the distance.", "N3"]]),
      bk("塗", "N2", "paint, spread", "ト", "ぬ.る", [["パンにバターを**塗り**ます。", "パン に バター を **ぬり**ます。", "I spread butter on the bread."]]),
      bk("塩", "N2", "salt", "エン", "しお", [
        ["**塩**を少し入れます。", "**しお** を すこし いれます。", "I add a little salt."],
        ["父は**塩辛**が好きです。", "ちち は しおから が すき です。", "My father likes shiokara.", "N2"],
      ], [
        ["塩辛い", "しおからい", "salty (taste)", "N2", "このスープは**塩辛い**です。", "This soup is salty."],
        ["食塩", "しょくえん", "table salt", "N2", "料理に**食塩**を少し入れます。", "I add a little table salt to the dish."],
      ]),
      bk("境", "N2", "border, boundary", "キョウ ケイ", "さかい", [
        ["**環境**を守りましょう。", "**かんきょう** を まもりましょう。", "Let's protect the environment.", "N3"],
        ["ここが二つの国の**国境**です。", "ここ が ふたつ の くに の **こっきょう** です。", "This is the border between the two countries.", "N3"],
      ], [["境界", "きょうかい", "boundary", "N2", "二つの国の**境界**を歩きました。", "I walked along the border between the two countries."]]),
    ],
  },
  {
    n: 52,
    note: "胃 hides inside 膚",
    items: [
      bk("胃", "N2", "stomach", "イ", "", [["**胃**が痛いです。", "**い** が いたい です。", "My stomach hurts.", "N3"]]),
      bk("膚", "N2", "skin", "フ", "", [
        ["**皮膚**が赤くなりました。", "**ひふ** が あかく なりました。", "My skin turned red.", "N2"],
        ["**皮膚科**に行きました。", "**ひふか** に いきました。", "I went to the dermatologist.", "N2"],
      ]),
    ],
  },
  {
    n: 53,
    note: "月 tucked under a lid",
    items: [
      bk("肩", "N2", "shoulder", "ケン", "かた", [
        ["**肩**が痛いです。", "**かた** が いたい です。", "My shoulder hurts.", "N3"],
        ["兄は**肩幅**が広いです。", "あに は かたはば が ひろい です。", "My brother has broad shoulders.", "N2"],
      ]),
      bk("肯", "N2", "agree, affirm", "コウ", "", [
        ["彼ははっきり**肯定**しました。", "かれ は はっきり **こうてい** しました。", "He clearly said yes.", "N2"],
        ["**肯定的**な意見が多いです。", "**こうていてき** な いけん が おおい です。", "There are many positive opinions.", "N2"],
      ]),
    ],
  },
  {
    n: 54,
    note: "⺝ body parts, left side",
    items: [
      bk("胸", "N2", "chest, breast", "キョウ", "むね", [["**胸**に手を当てます。", "**むね** に て を あてます。", "I put my hand on my chest.", "N3"]]),
      bk("脂", "N2", "fat, grease", "シ", "あぶら", [
        ["この肉は**脂**が多いです。", "この にく は **あぶら** が おおい です。", "This meat has a lot of fat.", "N2"],
        ["**脂肪**の少ない肉を選びます。", "しぼう の すくない にく を えらびます。", "I choose meat that is low in fat.", "N2"],
      ]),
      bk("指", "N4", "finger, point", "シ", "ゆび さ.す", [["**指**が痛いです。", "**ゆび** が いたい です。", "My finger hurts.", "N3"]]),
      bk("脳", "N2", "brain", "ノウ", "", [
        ["**脳**は体で一番大切な所です。", "**のう** は からだ で いちばん たいせつ な ところ です。", "The brain is the most important part of the body.", "N3"],
        ["彼は**頭脳**が優れています。", "かれ は ずのう が すぐれて います。", "He has an excellent mind.", "N2"],
      ]),
      bk("腕", "N2", "arm, skill", "ワン", "うで", [
        ["この服は**腕**が短いです。", "この ふく は **うで** が みじかい です。", "The sleeves of this shirt are short."],
        ["**腕時計**を買いました。", "**うでどけい** を かいました。", "I bought a wristwatch."],
      ]),
      bk("腰", "N2", "lower back, waist", "ヨウ", "こし", [
        ["**腰**が痛いです。", "**こし** が いたい です。", "My lower back hurts.", "N3"],
        ["公園の**腰掛け**で休みます。", "こうえん の こしかけ で やすみます。", "I rest on the bench in the park.", "N2"],
      ], [
        ["腰掛", "こしかけ", "seat, bench", "N2", "木の**腰掛**に座りました。", "I sat on a wooden bench."],
        ["腰掛ける", "こしかける", "to sit (down)", "N2", "そこのいすに**腰掛けて**ください。", "Please have a seat on that chair."],
      ]),
      bk("要", "N3", "need, main point", "ヨウ", "い.る かなめ", [
        ["**必要**な物だけ買います。", "**ひつよう** な もの だけ かいます。", "I only buy what is necessary."],
        ["**重要**な会議があります。", "**じゅうよう** な かいぎ が あります。", "There is an important meeting.", "N3"],
      ]),
    ],
  },
  {
    n: 55,
    note: "臓 is 月 + 蔵",
    items: [
      bk("蔵", "N2", "storehouse", "ゾウ", "くら", [
        ["**冷蔵庫**に牛乳があります。", "**れいぞうこ** に ぎゅうにゅう が あります。", "There is milk in the fridge."],
        ["お酒を**蔵**に入れます。", "おさけ を **くら** に いれます。", "We put the sake in the storehouse."],
      ]),
      bk("臓", "N2", "internal organ", "ゾウ", "", [["走ったので**心臓**が速く動いています。", "はしった ので **しんぞう** が はやく うごいて います。", "My heart is beating fast because I ran.", "N3"]]),
    ],
  },
  {
    n: 56,
    note: "衣 / 衤 clothing",
    items: [
      bk("衣", "N2", "clothes", "イ", "ころも", [
        ["**衣類**を洗濯します。", "**いるい** を せんたく します。", "I wash the clothes.", "N3"],
        ["冬の**衣服**を出しました。", "ふゆ の **いふく** を だしました。", "I took out my winter clothing.", "N3"],
      ], [
        ["衣食住", "いしょくじゅう", "food, clothing and shelter", "N2", "**衣食住**は生活の基本です。", "Food, clothing, and shelter are the basics of life."],
        ["衣料", "いりょう", "clothing", "N3", "**衣料**品店で服を買います。", "I buy clothes at a clothing store."],
        ["白衣", "はくい", "white robe; doctor's white gown", "N2", "医者は**白衣**を着ています。", "The doctor is wearing a white coat."],
      ]),
      bk("装", "N2", "dress, equipment", "ソウ ショウ", "よそお.う", [
        ["今日の**服装**はきれいです。", "きょう の **ふくそう** は きれい です。", "Today's outfit is nice.", "N3"],
        ["工場に新しい**装置**を入れました。", "こうじょう に あたらしい **そうち** を いれました。", "We installed new equipment in the factory.", "N3"],
      ]),
      bk("袋", "N2", "bag, sack", "タイ", "ふくろ", [
        ["**袋**をください。", "**ふくろ** を ください。", "A bag, please.", "N3"],
        ["着物に**足袋**をはきます。", "きもの に たび を はきます。", "I wear tabi socks with a kimono.", "N2"],
      ]),
      bk("代", "N4", "substitute, fee, era", "ダイ タイ", "か.わる か.える よ", [
        ["電気**代**を払いました。", "でんき**だい** を はらいました。", "I paid the electricity bill.", "N3"],
        ["父の**代わり**に行きます。", "ちち の **かわり** に いきます。", "I'll go instead of my father.", "N3"],
      ]),
      bk("裏", "N2", "back, reverse side", "リ", "うら", [
        ["紙の**裏**に名前を書きます。", "かみ の **うら** に なまえ を かきます。", "I write my name on the back of the paper."],
        ["紙を**裏返して**ください。", "かみ を うらがえして ください。", "Please turn the paper over.", "N2"],
      ], [
        ["裏口", "うらぐち", "backdoor, rear entrance", "N2", "**裏口**から家に入りました。", "I entered the house through the back door."],
        ["裏切る", "うらぎる", "to betray, to turn traitor", "N3", "友だちを**裏切り**ません。", "I won't betray my friends."],
        ["裏面", "りめん", "back; reverse; other side", "N2", "紙の**裏面**に名前を書きます。", "Write your name on the back of the paper."],
        ["裏側", "うらがわ", "the reverse; the other side", "N3", "建物の**裏側**に駐車場があります。", "There is a parking lot behind the building."],
      ]),
      bk("補", "N2", "supplement, make up for", "ホ", "おぎな.う", [
        ["足りない分をお金で**補い**ます。", "たりない ぶん を おかね で **おぎない**ます。", "I'll make up the shortfall with money.", "N2"],
        ["彼は市長の**候補**です。", "かれ は しちょう の **こうほ** です。", "He is a candidate for mayor.", "N2"],
      ], [["補償", "ほしょう", "compensation, reparation", "N3", "会社が損害を**補償**しました。", "The company compensated for the damage."]]),
      bk("複", "N2", "double, multiple", "フク", "", [
        ["この問題は**複雑**です。", "この もんだい は **ふくざつ** です。", "This problem is complicated."],
        ["**複数**の人が来ました。", "**ふくすう** の ひと が きました。", "Several people came.", "N2"],
      ], [["複写", "ふくしゃ", "copy, duplicate", "N2", "大事な書類を**複写**します。", "I make a copy of the important document."]]),
    ],
  },
];
