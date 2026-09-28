// N2 kanji book — groups 84–110 (kanji 354–445). See part-1.ts for the format.
import { bk, type BookGroup } from "../../builders.ts";

export const GROUPS: BookGroup[] = [
  {
    n: 84,
    note: "辶 road at the bottom",
    items: [
      bk("述", "N2", "state, mention", "ジュツ", "の.べる", [
        ["レポートに事実を**記述**します。", "レポート に じじつ を **きじゅつ** します。", "I describe the facts in the report.", "N2", undefined, "ジュツ"],
        ["意見を**述べて**ください。", "いけん を **のべて** ください。", "Please state your opinion.", "N3", undefined, "の.べる"],
        ["会議で考えを**述べ**ました。", "かいぎ で かんがえ を **のべ**ました。", "I expressed my thoughts at the meeting.", "N3", undefined, "の.べる"],
      ], [["述語", "じゅつご", "predicate", "N2", "文の**述語**を探します。", "I look for the predicate of the sentence.", "ぶん の **じゅつご** を さがします。"]]),
      bk("術", "N3", "art, technique", "ジュツ", "すべ", [
        ["病院で**手術**を受けました。", "びょういん で **しゅじゅつ** を うけました。", "I had an operation at the hospital.", "N3", undefined, "ジュツ"],
        ["新しい**技術**を使います。", "あたらしい **ぎじゅつ** を つかいます。", "We use new technology.", "N3", undefined, "ジュツ"],
        ["もう何もする**術**がありません。", "もう なにも する **すべ** が ありません。", "There is nothing more we can do.", "N1", undefined, "すべ"],
      ]),
      bk("逆", "N2", "reverse, opposite", "ギャク ゲキ", "さか さか.らう", [
        ["**逆**の方向に行ってしまいました。", "**ぎゃく** の ほうこう に いって しまいました。", "I went in the opposite direction.", "N2", undefined, "ギャク"],
        ["部長の**逆鱗**に触れてしまいました。", "ぶちょう の **げきりん** に ふれて しまいました。", "I incurred the manager's wrath.", "N1", undefined, "ゲキ"],
        ["絵が**逆様**になっています。", "え が **さかさま** に なって います。", "The picture is upside down.", "N2", undefined, "さか"],
        ["親に**逆らって**はいけません。", "おや に **さからって** は いけません。", "You must not disobey your parents.", "N3", undefined, "さか.らう"],
      ], [
        ["逆らう", "さからう", "to go against, to oppose, to disobey", "N3", "親に**逆らい**ません。", "I don't disobey my parents.", "おや に **さからい**ません。"],
        ["真逆", "まぎゃく", "complete opposite", "N2", "兄と私は性格が**真逆**です。", "My brother and I have completely opposite personalities.", "あに と わたし は せいかく が **まぎゃく** です。"],
      ]),
      bk("造", "N2", "make, build", "ゾウ", "つく.る", [
        ["この工場は車を**製造**しています。", "この こうじょう は くるま を **せいぞう** して います。", "This factory manufactures cars.", "N3", undefined, "ゾウ"],
        ["木で家を**造り**ます。", "き で いえ を **つくり**ます。", "We build houses out of wood.", "N3", undefined, "つく.る"],
      ], [
        ["構造", "こうぞう", "structure, construction", "N2", "この建物の**構造**は珍しいです。", "The structure of this building is unusual.", "この たてもの の **こうぞう** は めずらしい です。"],
        ["人造", "じんぞう", "man-made, synthetic, artificial", "N2", "公園に**人造**の湖があります。", "There is an artificial lake in the park.", "こうえん に **じんぞう** の みずうみ が あります。"],
        ["造船", "ぞうせん", "shipbuilding", "N2", "この町は**造船**が盛んです。", "Shipbuilding thrives in this town.", "この まち は **ぞうせん** が さかん です。"],
        ["創造", "そうぞう", "creation", "N3", "新しい文化を**創造**します。", "We create a new culture.", "あたらしい ぶんか を **そうぞう** します。"],
      ]),
      bk("辺", "N2", "area, vicinity", "ヘン", "あた.り べ", [
        ["この**辺**に郵便局はありますか。", "この **へん** に ゆうびんきょく は あります か。", "Is there a post office around here?", "N3", undefined, "ヘン"],
        ["この**辺り**は夜とても静かです。", "この **あたり** は よる とても しずか です。", "This area is very quiet at night.", "N3", undefined, "あた.り"],
        ["**海辺**で遊びました。", "**うみべ** で あそびました。", "I played at the seaside.", "N3", undefined, "べ"],
      ]),
    ],
  },
  {
    n: 85,
    note: "巾 cloth",
    items: [
      bk("布", "N2", "cloth, spread", "フ", "ぬの", [
        ["**財布**をなくしました。", "**さいふ** を なくしました。", "I lost my wallet.", "N3", undefined, "フ"],
        ["白い**布**でカバーを作ります。", "しろい **ぬの** で カバー を つくります。", "I'll make a cover from white cloth.", "N3", undefined, "ぬの"],
      ], [
        ["座布団", "ざぶとん", "cushion (Japanese)", "N2", "**座布団**に座ってください。", "Please sit on the cushion.", "**ざぶとん** に すわって ください。"],
        ["分布", "ぶんぷ", "distribution", "N2", "この鳥の**分布**を調べます。", "I study the distribution of this bird.", "この とり の **ぶんぷ** を しらべます。"],
      ]),
      bk("希", "N2", "hope, rare", "キ", "", [
        ["**希望**の大学に入りました。", "**きぼう** の だいがく に はいりました。", "I got into the university I hoped for.", "N3", undefined, "キ"],
        ["**希望者**は手を上げてください。", "**きぼうしゃ** は て を あげて ください。", "Those who want to join, please raise your hand.", "N3", undefined, "キ"],
      ]),
      bk("帯", "N2", "belt, zone, carry", "タイ", "おび お.びる", [
        ["**携帯**電話を忘れました。", "**けいたい** でんわ を わすれました。", "I forgot my mobile phone.", "N2", undefined, "タイ"],
        ["着物の**帯**はきれいです。", "きもの の **おび** は きれい です。", "The kimono sash is beautiful.", "N3", undefined, "おび"],
        ["夕方、空が赤みを**帯びて**きました。", "ゆうがた、 そら が あかみ を **おびて** きました。", "In the evening, the sky took on a reddish tinge.", "N1", undefined, "お.びる"],
      ], [
        ["寒帯", "かんたい", "frigid zone", "N2", "**寒帯**の動物を調べます。", "I study the animals of the frigid zone.", "**かんたい** の どうぶつ を しらべます。"],
        ["地帯", "ちたい", "area, zone", "N2", "ここは静かな**地帯**です。", "This is a quiet area.", "ここ は しずか な **ちたい** です。"],
        ["一帯", "いったい", "a region, the whole place", "N3", "この**一帯**は畑です。", "This whole area is farmland.", "この **いったい** は はたけ です。"],
        ["熱帯", "ねったい", "tropics", "N3", "**熱帯**の花が咲いています。", "Tropical flowers are blooming.", "**ねったい** の はな が さいて います。"],
        ["時間帯", "じかんたい", "period of time; time slot", "N2", "朝の**時間帯**は電車が混みます。", "Trains are crowded in the morning hours.", "あさ の **じかんたい** は でんしゃ が こみます。"],
      ]),
      bk("帽", "N2", "hat, cap", "ボウ", "", [["**帽子**をかぶります。", "**ぼうし** を かぶります。", "I put on a hat.", "N3", undefined, "ボウ"]]),
      bk("幅", "N2", "width, range", "フク", "はば", [
        ["この道路の**幅員**は十メートルです。", "この どうろ の **ふくいん** は じゅう メートル です。", "This road is ten meters wide.", "N1", undefined, "フク"],
        ["この道は**幅**が広いです。", "この みち は **はば** が ひろい です。", "This road's width is generous.", "N3", undefined, "はば"],
        ["彼は**幅広い**知識があります。", "かれ は **はばひろい** ちしき が あります。", "He has broad knowledge.", "N2", undefined, "はば"],
      ]),
    ],
  },
  {
    n: 86,
    note: "广 roof on the left",
    items: [
      bk("庁", "N2", "government office", "チョウ", "", [
        ["書類をもらいに**県庁**に行きました。", "しょるい を もらい に **けんちょう** に いきました。", "I went to the prefectural office to get documents.", "N2", undefined, "チョウ"],
        ["**気象庁**は明日は雨だと言いました。", "**きしょうちょう** は あした は あめ だ と いいました。", "The weather agency said it will rain tomorrow.", "N2", undefined, "チョウ"],
      ], [["官庁", "かんちょう", "government office, authorities", "N2", "父は**官庁**で働いています。", "My father works at a government office.", "ちち は **かんちょう** で はたらいて います。"]]),
      bk("床", "N2", "floor, bed", "ショウ", "ゆか とこ", [
        ["毎朝六時に**起床**します。", "まいあさ ろくじ に **きしょう** します。", "I get up at six every morning.", "N2", undefined, "ショウ"],
        ["**床**を掃除します。", "**ゆか** を そうじ します。", "I clean the floor.", "N3", undefined, "ゆか"],
        ["昨夜は早く**床**に就きました。", "さくや は はやく **とこ** に つきました。", "I went to bed early last night.", "N1", undefined, "とこ"],
      ], [["床の間", "とこのま", "alcove", "N2", "**床の間**に花を飾ります。", "I decorate the alcove with flowers.", "**とこのま** に はな を かざります。"]]),
      bk("府", "N2", "prefecture, government", "フ", "", [
        ["**政府**が新しい法律を作りました。", "**せいふ** が あたらしい ほうりつ を つくりました。", "The government made a new law.", "N3", undefined, "フ"],
        ["**大阪府**に住んでいます。", "**おおさかふ** に すんで います。", "I live in Osaka Prefecture.", "N2", undefined, "フ"],
      ]),
      bk("庫", "N2", "storehouse, garage", "コ ク", "", [
        ["車を**車庫**に入れます。", "くるま を **しゃこ** に いれます。", "I put the car in the garage.", "N2", undefined, "コ"],
        ["大切な物を**金庫**に入れました。", "たいせつ な もの を **きんこ** に いれました。", "I put the valuables in the safe.", "N3", undefined, "コ"],
        ["お寺の**庫裏**でお茶をいただきました。", "おてら の **くり** で おちゃ を いただきました。", "I was served tea in the temple's living quarters.", "N1", undefined, "ク"],
      ], [["倉庫", "そうこ", "storehouse, warehouse", "N2", "荷物を**倉庫**に入れます。", "I put the luggage in the warehouse.", "にもつ を **そうこ** に いれます。"]]),
    ],
  },
  {
    n: 87,
    note: "寸 at the bottom or right",
    items: [
      bk("寺", "N2", "temple", "ジ", "てら", [
        ["古い**寺院**を見学しました。", "ふるい **じいん** を けんがく しました。", "I toured an old temple.", "N2", undefined, "ジ"],
        ["古い**お寺**を見に行きました。", "ふるい **おてら** を み に いきました。", "I went to see an old temple.", "N2", undefined, "てら"],
      ]),
      bk("封", "N2", "seal", "フウ ホウ", "", [
        ["手紙に**封**をしました。", "てがみ に **ふう** を しました。", "I sealed the letter.", "N2", undefined, "フウ"],
        ["届いた手紙を**開封**しました。", "とどいた てがみ を **かいふう** しました。", "I opened the letter that arrived.", "N2", undefined, "フウ"],
        ["昔の日本は**封建**社会でした。", "むかし の にほん は **ほうけん** しゃかい でした。", "Old Japan was a feudal society.", "N1", undefined, "ホウ"],
      ]),
      bk("専", "N2", "specialty, exclusive", "セン", "もっぱ.ら", [
        ["私の**専門**は日本語です。", "わたし の **せんもん** は にほんご です。", "My specialty is Japanese.", "N3", undefined, "セン"],
        ["彼はコンピューターの**専門家**です。", "かれ は コンピューター の **せんもんか** です。", "He is a computer expert.", "N3", undefined, "セン"],
        ["休みの日は**専ら**家で本を読んでいます。", "やすみ の ひ は **もっぱら** いえ で ほん を よんで います。", "On my days off I mostly read books at home.", "N1", undefined, "もっぱ.ら"],
      ], [
        ["専制", "せんせい", "despotism, autocracy", "N2", "昔この国は**専制**の政治でした。", "Long ago, this country was ruled by despotism.", "むかし この くに は **せんせい** の せいじ でした。"],
        ["専攻", "せんこう", "major subject, special study", "N3", "大学で日本語を**専攻**しました。", "I majored in Japanese at university.", "だいがく で にほんご を **せんこう** しました。"],
        ["専業主婦", "せんぎょうしゅふ", "full-time housewife", "N2", "母は**専業主婦**です。", "My mother is a full-time housewife.", "はは は **せんぎょうしゅふ** です。"],
        ["専門書", "せんもんしょ", "technical book; specialized book", "N2", "図書館で**専門書**を借りました。", "I borrowed a specialized book from the library.", "としょかん で **せんもんしょ** を かりました。"],
        ["専門店", "せんもんてん", "specialist shop", "N2", "コーヒーの**専門店**に行きます。", "I'm going to a specialty coffee shop.", "コーヒー の **せんもんてん** に いきます。"],
        ["専念", "せんねん", "devoting oneself to; absorption", "N2", "今は勉強に**専念**します。", "For now, I will devote myself to studying.", "いま は べんきょう に **せんねん** します。"],
        ["専属", "せんぞく", "exclusive; attached to", "N2", "彼は会社の**専属**の運転手です。", "He is the company's exclusive driver.", "かれ は かいしゃ の **せんぞく** の うんてんしゅ です。"],
      ]),
      bk("将", "N2", "commander, future", "ショウ", "", [
        ["**将来**、先生になりたいです。", "**しょうらい**、 せんせい に なりたい です。", "In the future I want to be a teacher.", "N3", undefined, "ショウ"],
        ["祖父と**将棋**をします。", "そふ と **しょうぎ** を します。", "I play shogi with my grandfather.", "N2", undefined, "ショウ"],
      ]),
      bk("尊", "N2", "respect, precious", "ソン", "とうと.い たっと.い", [
        ["父を**尊敬**しています。", "ちち を **そんけい** して います。", "I respect my father.", "N3", undefined, "ソン"],
        ["相手の意見を**尊重**します。", "あいて の いけん を **そんちょう** します。", "I respect the other person's opinion.", "N3", undefined, "ソン"],
        ["命はとても**尊い**ものです。", "いのち は とても **とうとい** もの です。", "Life is very precious.", "N2", undefined, "とうと.い"],
        ["祖父の**尊い**教えを忘れません。", "そふ の **たっとい** おしえ を わすれません。", "I will never forget my grandfather's noble teachings.", "N2", undefined, "たっと.い"],
      ]),
      bk("導", "N2", "guide, lead", "ドウ", "みちび.く", [
        ["先生が学生を**指導**します。", "せんせい が がくせい を **しどう** します。", "The teacher guides the students.", "N2", undefined, "ドウ"],
        ["彼が私たちを**導いて**くれました。", "かれ が わたしたち を **みちびいて** くれました。", "He led us.", "N2", undefined, "みちび.く"],
      ], [["指導者", "しどうしゃ", "leader; guide; instructor", "N3", "よい**指導者**に出会いました。", "I met a good mentor.", "よい **しどうしゃ** に であいました。"]]),
    ],
  },
  {
    n: 88,
    note: "日 tucked into the shape",
    items: [
      bk("旧", "N2", "old, former", "キュウ", "", [
        ["中国では**旧正月**を祝います。", "ちゅうごく では **きゅうしょうがつ** を いわいます。", "In China they celebrate the Lunar New Year.", "N2", undefined, "キュウ"],
        ["これは**旧型**のパソコンです。", "これ は **きゅうがた** の パソコン です。", "This is an old-model computer.", "N2", undefined, "キュウ"],
      ]),
      bk("昇", "N2", "rise, ascend", "ショウ", "のぼ.る", [
        ["今年は気温が**上昇**しています。", "ことし は きおん が **じょうしょう** して います。", "Temperatures are rising this year.", "N2", undefined, "ショウ"],
        ["太陽が**昇り**ました。", "たいよう が **のぼり**ました。", "The sun has risen.", "N3", undefined, "のぼ.る"],
      ]),
      bk("星", "N2", "star", "セイ ショウ", "ほし", [
        ["**衛星**から写真を送ります。", "**えいせい** から しゃしん を おくります。", "Photos are sent down from the satellite.", "N3", undefined, "セイ"],
        ["東の空に**明星**が光っています。", "ひがし の そら に **みょうじょう** が ひかって います。", "The morning star is shining in the eastern sky.", "N1", undefined, "ショウ"],
        ["空に**星**がたくさん見えます。", "そら に **ほし** が たくさん みえます。", "Many stars are visible in the sky.", "N3", undefined, "ほし"],
      ]),
      bk("姓", "N2", "surname", "セイ ショウ", "", [
        ["ここに**姓**と名前を書いてください。", "ここ に **せい** と なまえ を かいて ください。", "Please write your surname and given name here.", "N2", undefined, "セイ"],
        ["ここに**姓名**を書いてください。", "ここ に **せいめい** を かいて ください。", "Please write your full name here.", "N2", undefined, "セイ"],
        ["祖父は昔、**百姓**をしていました。", "そふ は むかし、 **ひゃくしょう** を して いました。", "My grandfather used to be a farmer.", "N1", undefined, "ショウ"],
      ]),
      bk("暴", "N2", "violent, expose", "ボウ バク", "あば.れる あば.く", [
        ["**暴力**はいけません。", "**ぼうりょく** は いけません。", "Violence is not acceptable.", "N2", undefined, "ボウ"],
        ["昨日は**暴風雨**でした。", "きのう は **ぼうふうう** でした。", "Yesterday there was a violent storm.", "N2", undefined, "ボウ"],
        ["記者が政治家の秘密を**暴露**しました。", "きしゃ が せいじか の ひみつ を **ばくろ** しました。", "The reporter exposed the politician's secret.", "N1", undefined, "バク"],
        ["酔った男が駅で**暴れ**ました。", "よった おとこ が えき で **あばれ**ました。", "A drunk man went on a rampage at the station.", "N2", undefined, "あば.れる"],
        ["警察が犯人のうそを**暴き**ました。", "けいさつ が はんにん の うそ を **あばき**ました。", "The police exposed the criminal's lie.", "N1", undefined, "あば.く"],
      ], [["暴れる", "あばれる", "to act violently, to rage", "N2", "犬が庭で**暴れて**います。", "The dog is running wild in the yard.", "いぬ が にわ で **あばれて** います。"]]),
      bk("替", "N2", "exchange, replace", "タイ", "か.える か.わる", [
        ["夜は二人で**交替**で働きます。", "よる は ふたり で **こうたい** で はたらきます。", "At night the two of us work in shifts.", "N2", undefined, "タイ"],
        ["銀行でお金を**両替**します。", "ぎんこう で おかね を **りょうがえ** します。", "I exchange money at the bank.", "N3", undefined, "か.える"],
        ["シャツを新しい物に**替え**ました。", "シャツ を あたらしい もの に **かえ**ました。", "I changed into a new shirt.", "N3", undefined, "か.える"],
        ["四月から担当者が**替わり**ました。", "しがつ から たんとうしゃ が **かわり**ました。", "The person in charge changed from April.", "N2", undefined, "か.わる"],
      ], [
        ["為替", "かわせ", "money order, exchange", "N2", "銀行の**為替**で送金しました。", "I sent money by bank transfer.", "ぎんこう の **かわせ** で そうきん しました。"],
        ["着替え", "きがえ", "changing clothes, change of clothes", "N2", "旅行に**着替え**を持って行きます。", "I take a change of clothes on trips.", "りょこう に **きがえ** を もって いきます。"],
        ["着替える", "きがえる", "to change (one's) clothes", "N2", "家に帰って服を**着替え**ます。", "I go home and change my clothes.", "いえ に かえって ふく を **きがえ**ます。"],
        ["交替", "こうたい", "change, relief, alteration", "N2", "二人で**交替**して運転します。", "The two of us take turns driving.", "ふたり で **こうたい** して うんてん します。"],
        ["入れ替える", "いれかえる", "to replace; to substitute", "N2", "古い物と新しい物を**入れ替え**ます。", "I replace the old things with new ones.", "ふるい もの と あたらしい もの を **いれかえ**ます。"],
        ["組み替える", "くみかえる", "to rearrange; to recombine", "N2", "予定を**組み替え**ました。", "I rearranged my schedule.", "よてい を **くみかえ**ました。"],
      ]),
    ],
  },
  {
    n: 89,
    note: "shapes that wrap around something",
    items: [
      bk("包", "N2", "wrap", "ホウ", "つつ.む", [
        ["警察が建物を**包囲**しました。", "けいさつ が たてもの を **ほうい** しました。", "The police surrounded the building.", "N1", undefined, "ホウ"],
        ["プレゼントを紙で**包み**ます。", "プレゼント を かみ で **つつみ**ます。", "I wrap the present in paper.", "N3", undefined, "つつ.む"],
        ["店の人が本を**包んで**くれました。", "みせ の ひと が ほん を **つつんで** くれました。", "The shop staff wrapped the book for me.", "N3", undefined, "つつ.む"],
      ], [
        ["包装", "ほうそう", "packing, wrapping", "N2", "きれいに**包装**してください。", "Please wrap it nicely.", "きれい に **ほうそう** して ください。"],
        ["包帯", "ほうたい", "bandage", "N2", "指に**包帯**を巻きます。", "I wrap a bandage around my finger.", "ゆび に **ほうたい** を まきます。"],
        ["包丁", "ほうちょう", "kitchen knife, carving knife", "N2", "**包丁**で野菜を切ります。", "I cut vegetables with a kitchen knife.", "**ほうちょう** で やさい を きります。"],
        ["小包", "こづつみ", "parcel, package", "N3", "**小包**が届きました。", "A parcel has arrived.", "**こづつみ** が とどきました。"],
        ["内包", "ないほう", "connotation; inclusion; containment", "N2", "この計画は問題を**内包**しています。", "This plan contains inherent problems.", "この けいかく は もんだい を **ないほう** して います。"],
      ]),
      bk("匹", "N2", "counter for small animals", "ヒツ", "ひき", [
        ["彼の実力はプロに**匹敵**します。", "かれ の じつりょく は プロ に **ひってき** します。", "His ability rivals a professional's.", "N1", undefined, "ヒツ"],
        ["犬を**二匹**飼っています。", "いぬ を **にひき** かって います。", "I keep two dogs.", "N3", undefined, "ひき"],
      ]),
      bk("区", "N2", "ward, district, section", "ク", "", [
        ["私は**港区**に住んでいます。", "わたし は **みなとく** に すんで います。", "I live in Minato Ward.", "N2", undefined, "ク"],
        ["**区役所**で書類をもらいました。", "**くやくしょ** で しょるい を もらいました。", "I got the documents at the ward office.", "N2", undefined, "ク"],
      ], [
        ["区域", "くいき", "zone, district, area", "N2", "この**区域**は駐車禁止です。", "Parking is prohibited in this zone.", "この **くいき** は ちゅうしゃ きんし です。"],
        ["区切る", "くぎる", "to punctuate, to cut off, to mark off", "N2", "文を**区切って**読みます。", "I read the sentence in separate chunks.", "ぶん を **くぎって** よみます。"],
        ["区分", "くぶん", "division, section, classification", "N2", "ごみを**区分**して出します。", "I sort the garbage before putting it out.", "ごみ を **くぶん** して だします。"],
        ["区別", "くべつ", "distinction, differentiation, classification", "N3", "二つの色の**区別**がつきません。", "I can't tell the two colors apart.", "ふたつ の いろ の **くべつ** が つきません。"],
        ["地区", "ちく", "district, section", "N3", "この**地区**はとても静かです。", "This district is very quiet.", "この **ちく** は とても しずか です。"],
      ]),
      bk("欧", "N2", "Europe", "オウ", "", [
        ["**欧米**の文化を学びます。", "**おうべい** の ぶんか を まなびます。", "I study Western culture.", "N2", undefined, "オウ"],
        ["来年、**北欧**に行きたいです。", "らいねん、 **ほくおう** に いきたい です。", "I want to go to Northern Europe next year.", "N2", undefined, "オウ"],
      ]),
    ],
  },
  {
    n: 90,
    note: "small marks beside a shape",
    items: [
      bk("占", "N2", "fortune-telling, occupy", "セン", "うらな.う し.める", [
        ["その会社が市場を**独占**しています。", "その かいしゃ が しじょう を **どくせん** して います。", "That company monopolizes the market.", "N1", undefined, "セン"],
        ["今日の運勢を**占い**ました。", "きょう の うんせい を **うらない**ました。", "I had today's fortune told.", "N2", undefined, "うらな.う"],
        ["女性が半分を**占めて**います。", "じょせい が はんぶん を **しめて** います。", "Women make up half of them.", "N2", undefined, "し.める"],
      ], [["買い占める", "かいしめる", "to buy up", "N2", "店の品物を**買い占め**ました。", "Someone bought up all the goods in the store.", "みせ の しなもの を **かいしめ**ました。"]]),
      bk("印", "N2", "mark, seal, symbol", "イン", "しるし", [
        ["この書類に**印鑑**を押してください。", "この しょるい に **いんかん** を おして ください。", "Please stamp this document with your seal.", "N2", undefined, "イン"],
        ["大事な所に**印**を付けます。", "だいじ な ところ に **しるし** を つけます。", "I put a mark on the important parts.", "N3", undefined, "しるし"],
        ["**目印**に赤い旗を立てます。", "**めじるし** に あかい はた を たてます。", "I put up a red flag as a marker.", "N2", undefined, "しるし"],
      ], [
        ["矢印", "やじるし", "directing arrow", "N2", "**矢印**の方へ進みます。", "Go in the direction of the arrow.", "**やじるし** の ほう へ すすみます。"],
        ["印刷物", "いんさつぶつ", "printed matter", "N2", "会議で**印刷物**を配ります。", "We hand out printed materials at the meeting.", "かいぎ で **いんさつぶつ** を くばります。"],
        ["好印象", "こういんしょう", "good impression", "N2", "面接で**好印象**を与えました。", "I made a good impression at the interview.", "めんせつ で **こういんしょう** を あたえました。"],
      ]),
      bk("卵", "N2", "egg", "ラン", "たまご", [
        ["春になると魚が**産卵**します。", "はる に なる と さかな が **さんらん** します。", "Fish lay their eggs when spring comes.", "N1", undefined, "ラン"],
        ["朝ご飯に**卵**を食べます。", "あさごはん に **たまご** を たべます。", "I eat eggs for breakfast.", "N4", undefined, "たまご"],
      ]),
    ],
  },
  {
    n: 91,
    note: "尸 / 戸 flap on top",
    items: [
      bk("戸", "N2", "door", "コ", "と", [
        ["郊外に**一戸建て**を買いました。", "こうがい に **いっこだて** を かいました。", "We bought a detached house in the suburbs.", "N2", undefined, "コ"],
        ["**戸**を閉めてください。", "**と** を しめて ください。", "Please close the door.", "N2", undefined, "と"],
        ["夜は**雨戸**を閉めます。", "よる は **あまど** を しめます。", "I close the storm shutters at night.", "N2", undefined, "と"],
      ], [
        ["井戸", "いど", "water well", "N2", "村に古い**井戸**があります。", "There is an old well in the village.", "むら に ふるい **いど** が あります。"],
        ["瀬戸物", "せともの", "earthenware, crockery, china", "N2", "**瀬戸物**のお皿を買いました。", "I bought a china plate.", "**せともの** の おさら を かいました。"],
        ["戸棚", "とだな", "cupboard, cabinet", "N2", "**戸棚**にお皿を入れます。", "I put the plates in the cupboard.", "**とだな** に おさら を いれます。"],
      ]),
      bk("届", "N2", "deliver, reach", "", "とど.く とど.ける", [
        ["荷物が**届き**ました。", "にもつ が **とどき**ました。", "The package has arrived.", "N3", undefined, "とど.く"],
        ["落とし物を交番に**届け**ました。", "おとしもの を こうばん に **とどけ**ました。", "I took the lost item to the police box.", "N3", undefined, "とど.ける"],
      ]),
      bk("層", "N2", "layer, stratum, class", "ソウ", "", [
        ["このビルは**高層**ビルです。", "この ビル は **こうそう** ビル です。", "This is a high-rise building.", "N2", undefined, "ソウ"],
        ["この歌は若い**層**に人気があります。", "この うた は わかい **そう** に にんき が あります。", "This song is popular with the younger group.", "N2", undefined, "ソウ"],
      ], [
        ["大層", "たいそう", "very much, greatly", "N2", "**大層**立派な家ですね。", "What a very splendid house!", "**たいそう** りっぱ な いえ です ね。"],
        ["一層", "いっそう", "much more, still more", "N3", "昨日より**一層**寒くなりました。", "It has gotten even colder than yesterday.", "きのう より **いっそう** さむく なりました。"],
      ]),
    ],
  },
  {
    n: 92,
    note: "mountains, coasts and water",
    items: [
      bk("岩", "N2", "rock, crag", "ガン", "いわ", [
        ["この山には大きな**岩石**が多いです。", "この やま には おおきな **がんせき** が おおい です。", "There are many large rocks on this mountain.", "N1", undefined, "ガン"],
        ["海に大きな**岩**があります。", "うみ に おおきな **いわ** が あります。", "There is a big rock in the sea.", "N3", undefined, "いわ"],
      ]),
      bk("岸", "N2", "shore, bank", "ガン", "きし", [
        ["**海岸**を散歩しました。", "**かいがん** を さんぽ しました。", "I walked along the coast.", "N3", undefined, "ガン"],
        ["川の**岸**に木がたくさんあります。", "かわ の **きし** に き が たくさん あります。", "There are many trees on the riverbank.", "N3", undefined, "きし"],
      ]),
      bk("島", "N2", "island", "トウ", "しま", [
        ["**半島**の先に灯台があります。", "**はんとう** の さき に とうだい が あります。", "There is a lighthouse at the tip of the peninsula.", "N2", undefined, "トウ"],
        ["小さい**島**に行きました。", "ちいさい **しま** に いきました。", "I went to a small island.", "N2", undefined, "しま"],
      ], [["列島", "れっとう", "chain of islands", "N2", "日本**列島**は細長いです。", "The Japanese archipelago is long and narrow.", "にほん **れっとう** は ほそながい です。"]]),
      bk("州", "N2", "state, province", "シュウ", "す", [
        ["アメリカには五十の**州**があります。", "アメリカ には ごじゅう の **しゅう** が あります。", "America has fifty states.", "N3", undefined, "シュウ"],
        ["川の真ん中に**中州**があります。", "かわ の まんなか に **なかす** が あります。", "There is a sandbank in the middle of the river.", "N1", undefined, "す"],
      ]),
    ],
  },
  {
    n: 93,
    note: "boxy, stacked bodies",
    items: [
      bk("畜", "N2", "livestock", "チク", "", [
        ["農場で**家畜**を育てています。", "のうじょう で **かちく** を そだてて います。", "They raise livestock on the farm.", "N2", undefined, "チク"],
        ["この村は**牧畜**が盛んです。", "この むら は **ぼくちく** が さかん です。", "Stock farming thrives in this village.", "N2", undefined, "チク"],
      ]),
      bk("略", "N2", "abbreviate, strategy", "リャク", "", [
        ["長い名前は**略して**書きます。", "ながい なまえ は **りゃくして** かきます。", "I write long names in short form.", "N2", undefined, "リャク"],
        ["会社の**戦略**を考えます。", "かいしゃ の **せんりゃく** を かんがえます。", "I think about the company's strategy.", "N2", undefined, "リャク"],
      ]),
      bk("畳", "N2", "tatami mat, fold", "ジョウ", "たたみ たた.む", [
        ["私の部屋は**六畳**です。", "わたし の へや は **ろくじょう** です。", "My room is six tatami mats in size.", "N2", undefined, "ジョウ"],
        ["**畳**の部屋で寝ます。", "**たたみ** の へや で ねます。", "I sleep in a tatami room.", "N2", undefined, "たたみ"],
        ["服を**折り畳んで**しまいます。", "ふく を **おりたたんで** しまいます。", "I fold the clothes and put them away.", "N2", undefined, "たた.む"],
      ]),
      bk("療", "N2", "heal, cure", "リョウ", "", [
        ["病院で**治療**を受けました。", "びょういん で **ちりょう** を うけました。", "I received treatment at the hospital.", "N3", undefined, "リョウ"],
        ["将来は**医療**の仕事をしたいです。", "しょうらい は **いりょう** の しごと を したい です。", "In the future I want to work in medicine.", "N3", undefined, "リョウ"],
      ]),
    ],
  },
  {
    n: 94,
    note: "頁 head on the right",
    items: [
      bk("順", "N2", "order, turn", "ジュン", "", [
        ["**順番**に並んでください。", "**じゅんばん** に ならんで ください。", "Please line up in order.", "N2", undefined, "ジュン"],
        ["**順序**を守ってください。", "**じゅんじょ** を まもって ください。", "Please keep to the order.", "N2", undefined, "ジュン"],
      ], [
        ["道順", "みちじゅん", "itinerary, route", "N2", "駅までの**道順**を教えます。", "I explain the route to the station.", "えき まで の **みちじゅん** を おしえます。"],
        ["順調", "じゅんちょう", "doing well", "N3", "仕事は**順調**に進んでいます。", "Work is progressing smoothly.", "しごと は **じゅんちょう** に すすんで います。"],
        ["順位", "じゅんい", "order; rank; position", "N2", "試合の**順位**が決まりました。", "The rankings for the competition have been decided.", "しあい の **じゅんい** が きまりました。"],
        ["順応", "じゅんのう", "adaptation; adjustment", "N2", "新しい生活に**順応**しました。", "I adapted to my new life.", "あたらしい せいかつ に **じゅんのう** しました。"],
        ["天候不順", "てんこうふじゅん", "unseasonable weather", "N2", "**天候不順**で野菜が高いです。", "Vegetables are expensive due to the unseasonable weather.", "**てんこうふじゅん** で やさい が たかい です。"],
      ]),
      bk("預", "N2", "deposit, entrust", "ヨ", "あず.ける あず.かる", [
        ["毎月、給料の一部を**預金**しています。", "まいつき、 きゅうりょう の いちぶ を **よきん** して います。", "Every month I save part of my salary in the bank.", "N2", undefined, "ヨ"],
        ["銀行にお金を**預け**ます。", "ぎんこう に おかね を **あずけ**ます。", "I deposit money at the bank.", "N3", undefined, "あず.ける"],
        ["友だちの荷物を**預かり**ます。", "ともだち の にもつ を **あずかり**ます。", "I look after my friend's luggage.", "N2", undefined, "あず.かる"],
      ]),
      bk("領", "N2", "territory, receive", "リョウ", "", [
        ["**大統領**がテレビに出ました。", "**だいとうりょう** が テレビ に でました。", "The president appeared on TV.", "N2", undefined, "リョウ"],
        ["**領収書**をください。", "**りょうしゅうしょ** を ください。", "A receipt, please.", "N2", undefined, "リョウ"],
      ], [
        ["要領", "ようりょう", "gist, essentials, outline", "N2", "彼は説明の**要領**がいいです。", "He is good at explaining things clearly.", "かれ は せつめい の **ようりょう** が いい です。"],
        ["領事", "りょうじ", "consul", "N2", "**領事**館で書類をもらいます。", "I get documents at the consulate.", "**りょうじ**かん で しょるい を もらいます。"],
      ]),
      bk("額", "N2", "amount, forehead, frame", "ガク", "ひたい", [
        ["**金額**を確かめてください。", "**きんがく** を たしかめて ください。", "Please check the amount.", "N3", undefined, "ガク"],
        ["壁に絵の**額**をかけました。", "かべ に え の **がく** を かけました。", "I hung a picture frame on the wall.", "N3", undefined, "ガク"],
        ["暑くて**額**に汗をかきました。", "あつくて **ひたい** に あせ を かきました。", "It was hot, and sweat formed on my forehead.", "N2", undefined, "ひたい"],
      ], [
        ["半額", "はんがく", "half price; half the amount", "N2", "セールで**半額**になりました。", "It became half price in the sale.", "セール で **はんがく** に なりました。"],
        ["多額", "たがく", "large amount (of money)", "N2", "工事に**多額**のお金がかかります。", "The construction costs a large amount of money.", "こうじ に **たがく** の おかね が かかります。"],
        ["全額", "ぜんがく", "total; full amount", "N2", "旅行の代金を**全額**払いました。", "I paid the full cost of the trip.", "りょこう の だいきん を **ぜんがく** はらいました。"],
      ]),
    ],
  },
  {
    n: 95,
    note: "攵 on the right",
    items: [
      bk("改", "N2", "reform, renew", "カイ", "あらた.める あらた.まる", [
        ["会社は仕事のやり方を**改善**しました。", "かいしゃ は しごと の やりかた を **かいぜん** しました。", "The company improved its way of working.", "N3", undefined, "カイ"],
        ["生活を**改め**ます。", "せいかつ を **あらため**ます。", "I'll change my lifestyle.", "N2", undefined, "あらた.める"],
        ["年が**改まって**、気持ちも新しくなりました。", "とし が **あらたまって**、 きもち も あたらしく なりました。", "With the new year, I feel refreshed.", "N1", undefined, "あらた.まる"],
      ], [
        ["改正", "かいせい", "revision, amendment, alteration", "N2", "去年、法律が**改正**されました。", "The law was amended last year.", "きょねん、 ほうりつ が **かいせい** されました。"],
        ["改造", "かいぞう", "remodeling", "N2", "古い家を**改造**しました。", "I remodeled an old house.", "ふるい いえ を **かいぞう** しました。"],
      ]),
      bk("敬", "N2", "respect", "ケイ", "うやま.う", [
        ["先生に**敬語**を使います。", "せんせい に **けいご** を つかいます。", "I use polite language with my teacher.", "N2", undefined, "ケイ"],
        ["九月に**敬老**の日があります。", "くがつ に **けいろう** の ひ が あります。", "Respect for the Aged Day is in September.", "N2", undefined, "ケイ"],
        ["昔から人々は神を**敬って**きました。", "むかし から ひとびと は かみ を **うやまって** きました。", "People have revered the gods since long ago.", "N1", undefined, "うやま.う"],
      ], [["敬意", "けいい", "respect, honor", "N3", "先生に**敬意**を持っています。", "I have respect for my teacher.", "せんせい に **けいい** を もって います。"]]),
    ],
  },
  {
    n: 96,
    note: "舟 boat",
    items: [
      bk("舟", "N2", "boat", "シュウ", "ふね", [
        ["ライバル同士が**呉越同舟**で協力しました。", "ライバル どうし が **ごえつどうしゅう** で きょうりょく しました。", "The rivals worked together, being in the same boat.", "N1", undefined, "シュウ"],
        ["小さい**舟**で川を渡りました。", "ちいさい **ふね** で かわ を わたりました。", "I crossed the river in a small boat.", "N2", undefined, "ふね"],
      ]),
      bk("航", "N2", "navigate, sail, fly", "コウ", "", [
        ["日本**航空**の飛行機に乗ります。", "にほん **こうくう** の ひこうき に のります。", "I take a Japan Airlines plane.", "N3", undefined, "コウ"],
        ["台風で船が**欠航**しました。", "たいふう で ふね が **けっこう** しました。", "The boat was cancelled because of the typhoon.", "N2", undefined, "コウ"],
      ], [["航海", "こうかい", "sail, voyage", "N3", "長い**航海**に出ます。", "We set out on a long voyage.", "ながい **こうかい** に でます。"]]),
      bk("般", "N2", "general, carrier", "ハン", "", [
        ["**一般**の人も入れます。", "**いっぱん** の ひと も はいれます。", "General visitors can enter too.", "N3", undefined, "ハン"],
        ["それは**一般的**な意見です。", "それ は **いっぱんてき** な いけん です。", "That's a common opinion.", "N3", undefined, "ハン"],
      ], [["全般", "ぜんぱん", "(the) whole, general", "N2", "テストは**全般**によくできました。", "Overall, I did well on the test.", "テスト は **ぜんぱん** に よく できました。"]]),
      bk("船", "N3", "ship", "セン", "ふね ふな", [
        ["港に大きな**客船**が着きました。", "みなと に おおきな **きゃくせん** が つきました。", "A large passenger ship arrived at the port.", "N2", undefined, "セン"],
        ["**船**で島に行きます。", "**ふね** で しま に いきます。", "I go to the island by ship.", "N2", undefined, "ふね"],
        ["**船便**で荷物を送ります。", "**ふなびん** で にもつ を おくります。", "I send the package by sea mail.", "N2", undefined, "ふな"],
      ]),
    ],
  },
  {
    n: 97,
    note: "走 and 足 on the left",
    items: [
      bk("超", "N2", "exceed, super-", "チョウ", "こ.える こ.す", [
        ["荷物が重さを**超過**しました。", "にもつ が おもさ を **ちょうか** しました。", "The luggage went over the weight limit.", "N2", undefined, "チョウ"],
        ["気温が三十度を**超え**ました。", "きおん が さんじゅうど を **こえ**ました。", "The temperature went over thirty degrees.", "N3", undefined, "こ.える"],
        ["参加者は百人を**超す**でしょう。", "さんかしゃ は ひゃくにん を **こす** でしょう。", "There will probably be over a hundred participants.", "N2", undefined, "こ.す"],
      ]),
      bk("跡", "N2", "trace, mark, ruins", "セキ", "あと", [
        ["古い城の**遺跡**を見学しました。", "ふるい しろ の **いせき** を けんがく しました。", "I toured the ruins of an old castle.", "N2", undefined, "セキ"],
        ["雪に足の**跡**があります。", "ゆき に あし の **あと** が あります。", "There are footprints in the snow.", "N3", undefined, "あと"],
        ["砂に**足跡**が残っています。", "すな に **あしあと** が のこって います。", "Footprints remain in the sand.", "N2", undefined, "あと"],
      ]),
      bk("踊", "N2", "dance", "ヨウ", "おど.る", [
        ["姉は**日本舞踊**を習っています。", "あね は **にほんぶよう** を ならって います。", "My sister is learning traditional Japanese dance.", "N1", undefined, "ヨウ"],
        ["みんなで**踊り**ましょう。", "みんな で **おどり**ましょう。", "Let's all dance.", "N3", undefined, "おど.る"],
      ]),
      bk("通", "N5", "pass, commute", "ツウ", "とお.る かよ.う", [
        ["毎日電車で**通勤**しています。", "まいにち でんしゃ で **つうきん** して います。", "I commute by train every day.", "N3", undefined, "ツウ"],
        ["この道は車がよく**通り**ます。", "この みち は くるま が よく **とおり**ます。", "Cars often pass along this road.", "N2", undefined, "とお.る"],
        ["毎日、学校に**通って**います。", "まいにち、 がっこう に **かよって** います。", "I go to school every day.", "N2", undefined, "かよ.う"],
      ]),
    ],
  },
  {
    n: 98,
    note: "十 built into the shape",
    items: [
      bk("卒", "N2", "graduate", "ソツ", "", [["三月に大学を**卒業**します。", "さんがつ に だいがく を **そつぎょう** します。", "I graduate from university in March.", "N3", undefined, "ソツ"]], [
        ["新卒", "しんそつ", "new graduate", "N2", "兄は**新卒**で銀行に入りました。", "My brother joined a bank straight out of university.", "あに は **しんそつ** で ぎんこう に はいりました。"],
      ]),
      bk("協", "N2", "cooperate", "キョウ", "", [
        ["みんなで**協力**しましょう。", "みんな で **きょうりょく** しましょう。", "Let's all work together.", "N3", undefined, "キョウ"],
        ["みんなで**協議**します。", "みんな で **きょうぎ** します。", "We discuss it together.", "N3", undefined, "キョウ"],
      ], [["協調", "きょうちょう", "co-operation, conciliation, harmony", "N3", "他の国と**協調**します。", "We cooperate with other countries.", "ほか の くに と **きょうちょう** します。"]]),
    ],
  },
  {
    n: 99,
    note: "又 shapes",
    items: [
      bk("双", "N2", "pair, both", "ソウ", "ふた", [
        ["**双方**の意見を聞きます。", "**そうほう** の いけん を ききます。", "I listen to the opinions of both sides.", "N2", undefined, "ソウ"],
        ["彼らは**双子**です。", "かれら は **ふたご** です。", "They are twins.", "N3", undefined, "ふた"],
      ]),
      bk("厚", "N2", "thick, kind", "コウ", "あつ.い", [
        ["皆様の**ご厚意**に感謝します。", "みなさま の **ごこうい** に かんしゃ します。", "I am grateful for everyone's kindness.", "N1", undefined, "コウ"],
        ["この本は**厚い**です。", "この ほん は **あつい** です。", "This book is thick.", "N3", undefined, "あつ.い"],
        ["**厚かましい**お願いですみません。", "**あつかましい** おねがい で すみません。", "Sorry for the cheeky request.", "N2", undefined, "あつ.い"],
      ]),
    ],
  },
  {
    n: 100,
    note: "幺 threads inside",
    items: [
      bk("孫", "N2", "grandchild", "ソン", "まご", [
        ["**子孫**に土地を残します。", "**しそん** に とち を のこします。", "I'll leave the land to my descendants.", "N2", undefined, "ソン"],
        ["祖母には**孫**が三人います。", "そぼ には **まご** が さんにん います。", "My grandmother has three grandchildren.", "N3", undefined, "まご"],
      ]),
      bk("幼", "N2", "infancy, young", "ヨウ", "おさな.い", [
        ["子どもは**幼稚園**に行っています。", "こども は **ようちえん** に いって います。", "My child goes to kindergarten.", "N2", undefined, "ヨウ"],
        ["これは**幼い**頃の写真です。", "これ は **おさない** ころ の しゃしん です。", "This is a photo from when I was little.", "N3", undefined, "おさな.い"],
      ], [["幼児", "ようじ", "infant, baby, child", "N2", "**幼児**が公園で遊んでいます。", "Small children are playing in the park.", "**ようじ** が こうえん で あそんで います。"]]),
    ],
  },
  {
    n: 101,
    note: "long sweeping bottom strokes",
    items: [
      bk("承", "N2", "consent, hear (humble)", "ショウ", "うけたまわ.る", [
        ["はい、**承知**しました。", "はい、 **しょうち** しました。", "Yes, understood.", "N2", undefined, "ショウ"],
        ["部長の**承認**をもらいました。", "ぶちょう の **しょうにん** を もらいました。", "I got the manager's approval.", "N2", undefined, "ショウ"],
        ["ご注文を**承り**ました。", "ごちゅうもん を **うけたまわり**ました。", "We have received your order.", "N2", undefined, "うけたまわ.る"],
      ]),
      bk("延", "N2", "extend, postpone", "エン", "の.びる の.ばす", [
        ["会議が来週に**延期**になりました。", "かいぎ が らいしゅう に **えんき** に なりました。", "The meeting was postponed to next week.", "N3", undefined, "エン"],
        ["電車が遅れて到着が**延び**ました。", "でんしゃ が おくれて とうちゃく が **のび**ました。", "The train was late so the arrival was delayed.", "N3", undefined, "の.びる"],
        ["締め切りを一週間**延ばし**ました。", "しめきり を いっしゅうかん **のばし**ました。", "We extended the deadline by one week.", "N3", undefined, "の.ばす"],
      ], [
        ["延長", "えんちょう", "extension, prolongation", "N2", "会議を三十分**延長**します。", "We will extend the meeting by thirty minutes.", "かいぎ を さんじゅっぷん **えんちょう** します。"],
        ["延ばす", "のばす", "to extend, to stretch, to reach out", "N3", "出発を一日**延ばし**ました。", "I postponed my departure by one day.", "しゅっぱつ を いちにち **のばし**ました。"],
      ]),
    ],
  },
  {
    n: 102,
    note: "few strokes, easy to confuse",
    items: [
      bk("比", "N2", "compare, ratio", "ヒ", "くら.べる", [
        ["今日は**比較的**暖かいです。", "きょう は **ひかくてき** あたたかい です。", "Today is comparatively warm.", "N2", undefined, "ヒ"],
        ["兄と**比べる**と私は背が低いです。", "あに と **くらべる** と わたし は せ が ひくい です。", "Compared with my brother, I'm short.", "N3", undefined, "くら.べる"],
      ], [["比較", "ひかく", "comparison", "N3", "二つの店を**比較**します。", "I compare the two stores.", "ふたつ の みせ を **ひかく** します。"]]),
      bk("毛", "N2", "hair, fur, wool", "モウ", "け", [
        ["寒いので**毛布**をかけて寝ます。", "さむい ので **もうふ** を かけて ねます。", "It's cold, so I sleep under a blanket.", "N3", undefined, "モウ"],
        ["猫の**毛**が服に付きました。", "ねこ の **け** が ふく に つきました。", "Cat hair got on my clothes.", "N3", undefined, "け"],
        ["**毛糸**で手袋を編みます。", "**けいと** で てぶくろ を あみます。", "I knit gloves out of wool.", "N2", undefined, "け"],
      ], [
        ["毛皮", "けがわ", "fur, skin, pelt", "N2", "**毛皮**のコートは暖かいです。", "Fur coats are warm.", "**けがわ** の コート は あたたかい です。"],
        ["羊毛", "ようもう", "wool", "N2", "**羊毛**のセーターを買いました。", "I bought a wool sweater.", "**ようもう** の セーター を かいました。"],
        ["髪の毛", "かみのけ", "hair (head)", "N3", "**髪の毛**を短く切りました。", "I cut my hair short.", "**かみのけ** を みじかく きりました。"],
        ["毛布", "もうふ", "blanket", "N3", "寒いので**毛布**を使います。", "It's cold, so I use a blanket.", "さむい ので **もうふ** を つかいます。"],
      ]),
      bk("手", "N5", "hand", "シュ", "て", [
        ["彼は有名な野球**選手**です。", "かれ は ゆうめい な やきゅう **せんしゅ** です。", "He is a famous baseball player.", "N3", undefined, "シュ"],
        ["**手**を洗います。", "**て** を あらいます。", "I wash my hands.", "N5", undefined, "て"],
      ]),
      bk("宅", "N3", "home, house", "タク", "", [
        ["**帰宅**は七時ごろです。", "**きたく** は しちじ ごろ です。", "I get home around seven.", "N3", undefined, "タク"],
        ["**お宅**はどちらですか。", "**おたく** は どちら です か。", "Where is your home?", "N3", undefined, "タク"],
      ]),
      bk("甘", "N2", "sweet, lenient", "カン", "あま.い あま.やかす", [
        ["このジュースには**甘味料**が入っています。", "この ジュース には **かんみりょう** が はいって います。", "This juice contains sweetener.", "N1", undefined, "カン"],
        ["このケーキは**甘い**です。", "この ケーキ は **あまい** です。", "This cake is sweet.", "N4", undefined, "あま.い"],
        ["子どもを**甘やかし**ません。", "こども を **あまやかし**ません。", "I don't spoil my children.", "N2", undefined, "あま.やかす"],
      ]),
    ],
  },
  {
    n: 103,
    note: "angular old-fashioned shapes",
    items: [
      bk("武", "N2", "warrior, military", "ブ ム", "", [
        ["昔、**武士**は刀を持っていました。", "むかし、 **ぶし** は かたな を もって いました。", "Long ago, samurai carried swords.", "N2", undefined, "ブ"],
        ["彼は**武道**を習っています。", "かれ は **ぶどう** を ならって います。", "He is learning martial arts.", "N2", undefined, "ブ"],
        ["お祭りで**武者**の格好をしました。", "おまつり で **むしゃ** の かっこう を しました。", "I dressed up as a warrior at the festival.", "N1", undefined, "ム"],
      ], [["武器", "ぶき", "weapon, arms", "N3", "博物館で昔の**武器**を見ました。", "I saw old weapons at the museum.", "はくぶつかん で むかし の **ぶき** を みました。"]]),
      bk("歴", "N2", "history, career", "レキ", "", [
        ["日本の**歴史**に興味があります。", "にほん の **れきし** に きょうみ が あります。", "I'm interested in Japanese history.", "N3", undefined, "レキ"],
        ["**履歴書**を書きました。", "**りれきしょ** を かきました。", "I wrote my résumé.", "N2", undefined, "レキ"],
      ], [["学歴", "がくれき", "academic background", "N3", "**学歴**より経験が大事です。", "Experience matters more than academic background.", "**がくれき** より けいけん が だいじ です。"]]),
      bk("殿", "N2", "palace, (honorific) Mr.", "デン テン", "との どの", [
        ["ヨーロッパの古い**宮殿**を見学しました。", "ヨーロッパ の ふるい **きゅうでん** を けんがく しました。", "I toured an old palace in Europe.", "N1", undefined, "デン"],
        ["昔の**御殿**が今も残っています。", "むかし の **ごてん** が いま も のこって います。", "The old palace still remains today.", "N1", undefined, "テン"],
        ["昔、ここに**殿様**のお城がありました。", "むかし、 ここ に **とのさま** の おしろ が ありました。", "Long ago, the lord's castle stood here.", "N1", undefined, "との"],
        ["書類に「田中**殿**」と書きました。", "しょるい に 「たなか **どの**」 と かきました。", "I wrote “Mr. Tanaka” on the document.", "N2", undefined, "どの"],
      ]),
    ],
  },
  {
    n: 104,
    note: "nearly the same top half",
    items: [
      bk("毒", "N2", "poison", "ドク", "", [
        ["このキノコには**毒**があります。", "この キノコ には **どく** が あります。", "This mushroom has poison in it.", "N3", undefined, "ドク"],
        ["それは**お気の毒**に思います。", "それ は **おきのどく** に おもいます。", "I'm sorry to hear that.", "N2", undefined, "ドク"],
      ], [
        ["消毒", "しょうどく", "disinfection", "N2", "食事の前に手を**消毒**します。", "I disinfect my hands before eating.", "しょくじ の まえ に て を **しょうどく** します。"],
        ["気の毒", "きのどく", "pitiful, a pity", "N3", "彼は**気の毒**な人です。", "He is a pitiful person.", "かれ は **きのどく** な ひと です。"],
      ]),
      bk("麦", "N2", "wheat, barley", "バク", "むぎ", [
        ["ビールは**麦芽**から作られます。", "ビール は **ばくが** から つくられます。", "Beer is made from malt.", "N1", undefined, "バク"],
        ["夏は**麦茶**を飲みます。", "なつ は **むぎちゃ** を のみます。", "I drink barley tea in summer.", "N2", undefined, "むぎ"],
        ["畑に**麦**が育っています。", "はたけ に **むぎ** が そだって います。", "Wheat is growing in the field.", "N2", undefined, "むぎ"],
      ], [["蕎麦", "そば", "soba (buckwheat noodles)", "N3", "昼に**蕎麦**を食べました。", "I ate soba for lunch.", "ひる に **そば** を たべました。"]]),
    ],
  },
  {
    n: 105,
    note: "small standalone shapes",
    items: [
      bk("虫", "N2", "insect, bug", "チュウ", "むし", [
        ["夏休みに**昆虫**を集めました。", "なつやすみ に **こんちゅう** を あつめました。", "I collected insects during the summer vacation.", "N2", undefined, "チュウ"],
        ["部屋に**虫**が入りました。", "へや に **むし** が はいりました。", "A bug got into the room.", "N3", undefined, "むし"],
        ["歯医者で**虫歯**を治しました。", "はいしゃ で **むしば** を なおしました。", "I had my cavity treated at the dentist.", "N3", undefined, "むし"],
      ]),
      bk("缶", "N2", "can, tin", "カン", "", [
        ["**缶**ビールを買いました。", "**かん** ビール を かいました。", "I bought a canned beer.", "N3", undefined, "カン"],
        ["**缶詰**のスープを温めます。", "**かんづめ** の スープ を あたためます。", "I heat up canned soup.", "N2", undefined, "カン"],
      ]),
    ],
  },
  {
    n: 106,
    note: "farming, stacked shapes",
    items: [
      bk("農", "N2", "farming, agriculture", "ノウ", "", [
        ["祖父は**農業**をしています。", "そふ は **のうぎょう** を して います。", "My grandfather works in farming.", "N3", undefined, "ノウ"],
        ["この地方の**農産物**は米です。", "この ちほう の **のうさんぶつ** は こめ です。", "This region's produce is rice.", "N2", undefined, "ノウ"],
      ], [
        ["農村", "のうそん", "agricultural community", "N2", "静かな**農村**で育ちました。", "I grew up in a quiet farming village.", "しずか な **のうそん** で そだちました。"],
        ["農薬", "のうやく", "agricultural chemicals", "N2", "**農薬**を使わない野菜です。", "These vegetables are grown without pesticides.", "**のうやく** を つかわない やさい です。"],
        ["農家", "のうか", "farmer, farm family", "N3", "祖父は**農家**です。", "My grandfather is a farmer.", "そふ は **のうか** です。"],
        ["農民", "のうみん", "farmers, peasants", "N3", "**農民**が畑で働いています。", "Farmers are working in the fields.", "**のうみん** が はたけ で はたらいて います。"],
        ["農園", "のうえん", "plantation", "N2", "**農園**でいちごを取りました。", "We picked strawberries at the farm.", "**のうえん** で いちご を とりました。"],
        ["農作物", "のうさくぶつ", "crops; agricultural produce", "N2", "台風で**農作物**が倒れました。", "The typhoon flattened the crops.", "たいふう で **のうさくぶつ** が たおれました。"],
      ]),
      bk("量", "N2", "quantity, amount", "リョウ", "はか.る", [
        ["ご飯の**量**が多いです。", "ごはん の **りょう** が おおい です。", "The portion of rice is large.", "N3", undefined, "リョウ"],
        ["荷物の**重量**を調べます。", "にもつ の **じゅうりょう** を しらべます。", "I check the weight of the luggage.", "N2", undefined, "リョウ"],
        ["毎朝、体重を**量り**ます。", "まいあさ、 たいじゅう を **はかり**ます。", "I weigh myself every morning.", "N3", undefined, "はか.る"],
      ], [
        ["分量", "ぶんりょう", "amount, quantity", "N2", "材料の**分量**を量ります。", "I measure the amounts of the ingredients.", "ざいりょう の **ぶんりょう** を はかります。"],
        ["音量", "おんりょう", "volume (sound)", "N2", "テレビの**音量**を下げます。", "I turn down the TV volume.", "テレビ の **おんりょう** を さげます。"],
        ["数量", "すうりょう", "quantity; volume; amount", "N2", "品物の**数量**を数えます。", "I count the quantity of goods.", "しなもの の **すうりょう** を かぞえます。"],
        ["多量", "たりょう", "large quantity", "N2", "工事には**多量**の水が必要です。", "The construction requires a large quantity of water.", "こうじ には **たりょう** の みず が ひつよう です。"],
        ["容量", "ようりょう", "capacity; volume", "N2", "このかばんは**容量**が大きいです。", "This bag has a large capacity.", "この かばん は **ようりょう** が おおきい です。"],
        ["大量", "たいりょう", "large quantity; mass", "N3", "**大量**の紙を注文しました。", "I ordered a large quantity of paper.", "**たいりょう** の かみ を ちゅうもん しました。"],
      ]),
      bk("耕", "N2", "till, plow", "コウ", "たがや.す", [
        ["村の**耕地**が広がっています。", "むら の **こうち** が ひろがって います。", "The village farmland stretches out.", "N2", undefined, "コウ"],
        ["畑を**耕し**ます。", "はたけ を **たがやし**ます。", "I plow the field.", "N2", undefined, "たがや.す"],
      ]),
      bk("豊", "N2", "abundant, rich", "ホウ", "ゆた.か", [
        ["店には品物が**豊富**にあります。", "みせ には しなもの が **ほうふ** に あります。", "The shop has an abundance of goods.", "N3", undefined, "ホウ"],
        ["この国は自然が**豊か**です。", "この くに は しぜん が **ゆたか** です。", "This country is rich in nature.", "N3", undefined, "ゆた.か"],
      ]),
    ],
  },
  {
    n: 107,
    note: "隹 bird inside",
    items: [
      bk("雇", "N2", "employ, hire", "コ", "やと.う", [
        ["会社は新しく十人を**雇用**しました。", "かいしゃ は あたらしく じゅうにん を **こよう** しました。", "The company took on ten new employees.", "N2", undefined, "コ"],
        ["店は新しい人を**雇い**ました。", "みせ は あたらしい ひと を **やとい**ました。", "The shop hired a new person.", "N3", undefined, "やと.う"],
        ["私は小さい会社に**雇われて**います。", "わたし は ちいさい かいしゃ に **やとわれて** います。", "I'm employed by a small company.", "N3", undefined, "やと.う"],
      ]),
      bk("隻", "N2", "counter for ships", "セキ", "", [["港に船が**三隻**あります。", "みなと に ふね が **さんせき** あります。", "There are three ships in the harbor.", "N1", undefined, "セキ"]]),
    ],
  },
  {
    n: 108,
    note: "the gate shape itself",
    items: [
      bk("門", "N2", "gate", "モン", "かど", [
        ["学校の**門**は八時に開きます。", "がっこう の **もん** は はちじ に あきます。", "The school gate opens at eight.", "N2", undefined, "モン"],
        ["学校の**正門**で待ちます。", "がっこう の **せいもん** で まちます。", "I'll wait at the school's main gate.", "N2", undefined, "モン"],
        ["二人の新しい**門出**を祝います。", "ふたり の あたらしい **かどで** を いわいます。", "We celebrate the couple's new start in life.", "N1", undefined, "かど"],
      ], [
        ["名門", "めいもん", "noted family; prestigious school", "N2", "兄は**名門**の学校に入りました。", "My older brother got into a prestigious school.", "あに は **めいもん** の がっこう に はいりました。"],
        ["入門", "にゅうもん", "entering an institution; primer; introduction", "N2", "日本語の**入門**の本を買いました。", "I bought an introductory book on Japanese.", "にほんご の **にゅうもん** の ほん を かいました。"],
      ]),
      bk("問", "N4", "question, problem", "モン", "と.う", [
        ["何か**質問**がありますか。", "なにか **しつもん** が あります か。", "Do you have any questions?", "N4", undefined, "モン"],
        ["この**問題**は難しいです。", "この **もんだい** は むずかしい です。", "This problem is difficult.", "N4", undefined, "モン"],
        ["この事故の責任が**問われて**います。", "この じこ の せきにん が **とわれて** います。", "Responsibility for this accident is being questioned.", "N2", undefined, "と.う"],
      ]),
      bk("開", "N5", "open", "カイ", "あ.ける ひら.く", [
        ["会議は十時に**開始**します。", "かいぎ は じゅうじ に **かいし** します。", "The meeting starts at ten.", "N3", undefined, "カイ"],
        ["ドアを**開け**ます。", "ドア を **あけ**ます。", "I open the door.", "N5", undefined, "あ.ける"],
        ["駅前に新しい店が**開き**ました。", "えきまえ に あたらしい みせ が **ひらき**ました。", "A new shop opened in front of the station.", "N3", undefined, "ひら.く"],
      ]),
    ],
  },
  {
    n: 109,
    note: "symmetrical stacked shapes",
    items: [
      bk("革", "N2", "leather, reform", "カク", "かわ", [
        ["政府は**改革**を進めています。", "せいふ は **かいかく** を すすめて います。", "The government is pushing reform.", "N3", undefined, "カク"],
        ["**革**のかばんを買いました。", "**かわ** の かばん を かいました。", "I bought a leather bag.", "N3", undefined, "かわ"],
      ]),
      bk("黄", "N2", "yellow", "コウ オウ", "き こ", [
        ["春になると**黄砂**が飛んできます。", "はる に なる と **こうさ** が とんで きます。", "When spring comes, yellow dust blows in.", "N1", undefined, "コウ"],
        ["このケーキには**卵黄**だけを使います。", "この ケーキ には **らんおう** だけ を つかいます。", "I use only egg yolks for this cake.", "N1", undefined, "オウ"],
        ["**黄色い**花が咲いています。", "**きいろい** はな が さいて います。", "Yellow flowers are blooming.", "N4", undefined, "き"],
        ["秋の田んぼは**黄金**色に光っています。", "あき の たんぼ は **こがね**いろ に ひかって います。", "In autumn the rice fields shine golden.", "N1", undefined, "こ"],
      ]),
    ],
  },
  {
    n: 110,
    note: "tall, heavily stacked",
    items: [
      bk("骨", "N2", "bone", "コツ", "ほね", [
        ["転んで足を**骨折**しました。", "ころんで あし を **こっせつ** しました。", "I fell and broke my leg.", "N3", undefined, "コツ"],
        ["転んで**骨**を折りました。", "ころんで **ほね** を おりました。", "I fell and broke a bone.", "N3", undefined, "ほね"],
      ]),
      bk("鼻", "N2", "nose", "ビ", "はな", [
        ["耳が痛くて**耳鼻科**に行きました。", "みみ が いたくて **じびか** に いきました。", "My ear hurt, so I went to an ear, nose and throat clinic.", "N1", undefined, "ビ"],
        ["犬は**鼻**がいいです。", "いぬ は **はな** が いい です。", "Dogs have a good nose.", "N3", undefined, "はな"],
        ["風邪で**鼻水**が出ます。", "かぜ で **はなみず** が でます。", "I have a runny nose from a cold.", "N2", undefined, "はな"],
      ]),
      bk("齢", "N2", "age", "レイ", "よわい", [
        ["ここに**年齢**を書いてください。", "ここ に **ねんれい** を かいて ください。", "Please write your age here.", "N3", undefined, "レイ"],
        ["祖母はもう**高齢**です。", "そぼ は もう **こうれい** です。", "My grandmother is elderly now.", "N2", undefined, "レイ"],
        ["祖父は**齢**八十を過ぎても元気です。", "そふ は **よわい** はちじゅう を すぎても げんき です。", "My grandfather is still healthy even past the age of eighty.", "N1", undefined, "よわい"],
      ], [
        ["高齢化", "こうれいか", "population ageing", "N2", "社会の**高齢化**が進んでいます。", "Society's population is aging.", "しゃかい の **こうれいか** が すすんで います。"],
        ["高齢者", "こうれいしゃ", "old person; the elderly", "N2", "ここは**高齢者**の席です。", "These seats are for the elderly.", "ここ は **こうれいしゃ** の せき です。"],
        ["最高齢", "さいこうれい", "oldest; most advanced age", "N2", "村の**最高齢**は九十九歳です。", "The oldest person in the village is ninety-nine.", "むら の **さいこうれい** は きゅうじゅうきゅうさい です。"],
      ]),
    ],
  },
];
