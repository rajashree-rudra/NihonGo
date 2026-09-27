// N2 kanji book — groups 84–110 (kanji 354–445). See part-1.ts for the format.
import { bk, type BookGroup } from "../../builders.ts";

export const GROUPS: BookGroup[] = [
  {
    n: 84,
    note: "辶 road at the bottom",
    items: [
      bk("述", "N2", "state, mention", "ジュツ", "の.べる", [
        ["意見を**述べて**ください。", "いけん を **のべて** ください。", "Please state your opinion.", "N3"],
        ["会議で考えを**述べ**ました。", "かいぎ で かんがえ を **のべ**ました。", "I expressed my thoughts at the meeting.", "N3"],
      ], [["述語", "じゅつご", "predicate", "N2", "文の**述語**を探します。", "I look for the predicate of the sentence."]]),
      bk("術", "N3", "art, technique", "ジュツ", "すべ", [
        ["病院で**手術**を受けました。", "びょういん で **しゅじゅつ** を うけました。", "I had an operation at the hospital.", "N3"],
        ["新しい技**術**を使います。", "あたらしい ぎ**じゅつ** を つかいます。", "We use new technology."],
      ]),
      bk("逆", "N2", "reverse, opposite", "ギャク ゲキ", "さか さか.らう", [
        ["**逆**の方向に行ってしまいました。", "**ぎゃく** の ほうこう に いって しまいました。", "I went in the opposite direction.", "N2"],
        ["絵が**逆様**になっています。", "え が さかさま に なって います。", "The picture is upside down.", "N2"],
      ], [
        ["逆らう", "さからう", "to go against, to oppose, to disobey", "N3", "親に**逆らい**ません。", "I don't disobey my parents."],
        ["真逆", "まさか", "by no means; surely not", "N3", "**真逆**、そんなことはないでしょう。", "Surely that can't be the case."],
      ]),
      bk("造", "N2", "make, build", "ゾウ", "つく.る", [
        ["この工場は車を**製造**しています。", "この こうじょう は くるま を **せいぞう** して います。", "This factory manufactures cars.", "N3"],
        ["木で家を**造り**ます。", "き で いえ を **つくり**ます。", "We build houses out of wood."],
      ], [
        ["構造", "こうぞう", "structure, construction", "N2", "この建物の**構造**は珍しいです。", "The structure of this building is unusual."],
        ["人造", "じんぞう", "man-made, synthetic, artificial", "N2", "公園に**人造**の湖があります。", "There is an artificial lake in the park."],
        ["造船", "ぞうせん", "shipbuilding", "N2", "この町は**造船**が盛んです。", "Shipbuilding thrives in this town."],
        ["創造", "そうぞう", "creation", "N3", "新しい文化を**創造**します。", "We create a new culture."],
      ]),
      bk("辺", "N2", "area, vicinity", "ヘン", "あた.り べ", [
        ["この**辺**に郵便局はありますか。", "この **へん** に ゆうびんきょく は あります か。", "Is there a post office around here?", "N3"],
        ["**海辺**で遊びました。", "**うみべ** で あそびました。", "I played at the seaside.", "N3"],
      ]),
    ],
  },
  {
    n: 85,
    note: "巾 cloth",
    items: [
      bk("布", "N2", "cloth, spread", "フ", "ぬの", [
        ["**財布**をなくしました。", "**さいふ** を なくしました。", "I lost my wallet.", "N3"],
        ["白い**布**でカバーを作ります。", "しろい **ぬの** で カバー を つくります。", "I'll make a cover from white cloth.", "N3"],
      ], [
        ["座布団", "ざぶとん", "cushion (Japanese)", "N2", "**座布団**に座ってください。", "Please sit on the cushion."],
        ["分布", "ぶんぷ", "distribution", "N2", "この鳥の**分布**を調べます。", "I study the distribution of this bird."],
      ]),
      bk("希", "N2", "hope, rare", "キ", "", [
        ["**希望**の大学に入りました。", "**きぼう** の だいがく に はいりました。", "I got into the university I hoped for.", "N3"],
        ["**希望者**は手を上げてください。", "きぼうしゃ は て を あげて ください。", "Those who want to join, please raise your hand.", "N3"],
      ]),
      bk("帯", "N2", "belt, zone, carry", "タイ", "おび お.びる", [
        ["**携帯**電話を忘れました。", "**けいたい** でんわ を わすれました。", "I forgot my mobile phone.", "N2"],
        ["着物の**帯**はきれいです。", "きもの の **おび** は きれい です。", "The kimono sash is beautiful.", "N3"],
      ], [
        ["寒帯", "かんたい", "frigid zone", "N2", "**寒帯**の動物を調べます。", "I study the animals of the frigid zone."],
        ["地帯", "ちたい", "area, zone", "N2", "ここは静かな**地帯**です。", "This is a quiet area."],
        ["一帯", "いったい", "a region, the whole place", "N3", "この**一帯**は畑です。", "This whole area is farmland."],
        ["熱帯", "ねったい", "tropics", "N3", "**熱帯**の花が咲いています。", "Tropical flowers are blooming."],
        ["時間帯", "じかんたい", "period of time; time slot", "N2", "朝の**時間帯**は電車が混みます。", "Trains are crowded in the morning hours."],
      ]),
      bk("帽", "N2", "hat, cap", "ボウ", "", [["**帽子**をかぶります。", "**ぼうし** を かぶります。", "I put on a hat."]]),
      bk("幅", "N2", "width, range", "フク", "はば", [
        ["この道は**幅**が広いです。", "この みち は **はば** が ひろい です。", "This road's width is generous.", "N3"],
        ["彼は**幅広い**知識があります。", "かれ は はばひろい ちしき が あります。", "He has broad knowledge.", "N2"],
      ]),
    ],
  },
  {
    n: 86,
    note: "广 roof on the left",
    items: [
      bk("庁", "N2", "government office", "チョウ", "", [
        ["書類をもらいに**県庁**に行きました。", "しょるい を もらい に **けんちょう** に いきました。", "I went to the prefectural office to get documents.", "N2"],
        ["**気象庁**は明日は雨だと言いました。", "**きしょうちょう** は あした は あめ だ と いいました。", "The weather agency said it will rain tomorrow.", "N2"],
      ], [["官庁", "かんちょう", "government office, authorities", "N2", "父は**官庁**で働いています。", "My father works at a government office."]]),
      bk("床", "N2", "floor, bed", "ショウ", "ゆか とこ", [
        ["**床**を掃除します。", "**ゆか** を そうじ します。", "I clean the floor.", "N3"],
        ["毎朝六時に**起床**します。", "まいあさ ろくじ に きしょう します。", "I get up at six every morning.", "N2"],
      ], [["床の間", "とこのま", "alcove", "N2", "**床の間**に花を飾ります。", "I decorate the alcove with flowers."]]),
      bk("府", "N2", "prefecture, government", "フ", "", [
        ["**政府**が新しい法律を作りました。", "**せいふ** が あたらしい ほうりつ を つくりました。", "The government made a new law.", "N3"],
        ["大阪**府**に住んでいます。", "おおさか**ふ** に すんで います。", "I live in Osaka Prefecture."],
      ]),
      bk("庫", "N2", "storehouse, garage", "コ ク", "", [
        ["車を**車庫**に入れます。", "くるま を **しゃこ** に いれます。", "I put the car in the garage.", "N2"],
        ["大切な物を**金庫**に入れました。", "たいせつ な もの を **きんこ** に いれました。", "I put the valuables in the safe.", "N3"],
      ], [["倉庫", "そうこ", "storehouse, warehouse", "N2", "荷物を**倉庫**に入れます。", "I put the luggage in the warehouse."]]),
    ],
  },
  {
    n: 87,
    note: "寸 at the bottom or right",
    items: [
      bk("寺", "N2", "temple", "ジ", "てら", [
        ["古い**お寺**を見に行きました。", "ふるい **おてら** を み に いきました。", "I went to see an old temple.", "N2"],
        ["古い**寺院**を見学しました。", "ふるい じいん を けんがく しました。", "I toured an old temple.", "N2"],
      ]),
      bk("封", "N2", "seal", "フウ ホウ", "", [
        ["手紙に**封**をしました。", "てがみ に **ふう** を しました。", "I sealed the letter."],
        ["届いた手紙を**開封**しました。", "とどいた てがみ を かいふう しました。", "I opened the letter that arrived.", "N2"],
      ]),
      bk("専", "N2", "specialty, exclusive", "セン", "もっぱ.ら", [
        ["私の**専門**は日本語です。", "わたし の **せんもん** は にほんご です。", "My specialty is Japanese.", "N3"],
        ["彼はコンピューターの**専門家**です。", "かれ は コンピューター の **せんもんか** です。", "He is a computer expert.", "N3"],
      ], [
        ["専制", "せんせい", "despotism, autocracy", "N2", "昔この国は**専制**の政治でした。", "Long ago, this country was ruled by despotism."],
        ["専攻", "せんこう", "major subject, special study", "N3", "大学で日本語を**専攻**しました。", "I majored in Japanese at university."],
        ["専業主婦", "せんぎょうしゅふ", "full-time housewife", "N2", "母は**専業主婦**です。", "My mother is a full-time housewife."],
        ["専門書", "せんもんしょ", "technical book; specialized book", "N2", "図書館で**専門書**を借りました。", "I borrowed a specialized book from the library."],
        ["専門店", "せんもんてん", "specialist shop", "N2", "コーヒーの**専門店**に行きます。", "I'm going to a specialty coffee shop."],
        ["専念", "せんねん", "devoting oneself to; absorption", "N2", "今は勉強に**専念**します。", "For now, I will devote myself to studying."],
        ["専属", "せんぞく", "exclusive; attached to", "N2", "彼は会社の**専属**の運転手です。", "He is the company's exclusive driver."],
      ]),
      bk("将", "N2", "commander, future", "ショウ", "", [
        ["**将来**、先生になりたいです。", "**しょうらい**、せんせい に なりたい です。", "In the future I want to be a teacher."],
        ["祖父と**将棋**をします。", "そふ と しょうぎ を します。", "I play shogi with my grandfather.", "N2"],
      ]),
      bk("尊", "N2", "respect, precious", "ソン", "とうと.い たっと.い", [
        ["父を**尊敬**しています。", "ちち を **そんけい** して います。", "I respect my father.", "N3"],
        ["相手の意見を**尊重**します。", "あいて の いけん を そんちょう します。", "I respect the other person's opinion.", "N3"],
      ]),
      bk("導", "N2", "guide, lead", "ドウ", "みちび.く", [
        ["先生が学生を**指導**します。", "せんせい が がくせい を **しどう** します。", "The teacher guides the students.", "N2"],
        ["彼が私たちを**導いて**くれました。", "かれ が わたしたち を **みちびいて** くれました。", "He led us.", "N2"],
      ], [["指導者", "しどうしゃ", "leader; guide; instructor", "N3", "よい**指導者**に出会いました。", "I met a good mentor."]]),
    ],
  },
  {
    n: 88,
    note: "日 tucked into the shape",
    items: [
      bk("旧", "N2", "old, former", "キュウ", "", [
        ["中国では**旧正月**を祝います。", "ちゅうごく では **きゅうしょうがつ** を いわいます。", "In China they celebrate the Lunar New Year.", "N2"],
        ["これは**旧型**のパソコンです。", "これ は **きゅうがた** の パソコン です。", "This is an old-model computer.", "N2"],
      ]),
      bk("昇", "N2", "rise, ascend", "ショウ", "のぼ.る", [
        ["太陽が**昇り**ました。", "たいよう が **のぼり**ました。", "The sun has risen.", "N3"],
        ["今年は気温が**上昇**しています。", "ことし は きおん が **じょうしょう** して います。", "Temperatures are rising this year.", "N2"],
      ]),
      bk("星", "N2", "star", "セイ ショウ", "ほし", [
        ["空に**星**がたくさん見えます。", "そら に **ほし** が たくさん みえます。", "Many stars are visible in the sky."],
        ["**衛星**から写真を送ります。", "えいせい から しゃしん を おくります。", "Photos are sent down from the satellite.", "N3"],
      ]),
      bk("姓", "N2", "surname", "セイ ショウ", "", [
        ["ここに**姓**と名前を書いてください。", "ここ に **せい** と なまえ を かいて ください。", "Please write your surname and given name here.", "N2"],
        ["ここに**姓名**を書いてください。", "ここ に せいめい を かいて ください。", "Please write your full name here.", "N2"],
      ]),
      bk("暴", "N2", "violent, expose", "ボウ バク", "あば.れる あば.く", [
        ["**暴力**はいけません。", "**ぼうりょく** は いけません。", "Violence is not acceptable."],
        ["昨日は**暴風雨**でした。", "きのう は **ぼうふうう** でした。", "Yesterday there was a violent storm."],
      ], [["暴れる", "あばれる", "to act violently, to rage", "N2", "犬が庭で**暴れて**います。", "The dog is running wild in the yard."]]),
      bk("替", "N2", "exchange, replace", "タイ", "か.える か.わる", [
        ["銀行でお金を**両替**します。", "ぎんこう で おかね を **りょうがえ** します。", "I exchange money at the bank.", "N3"],
        ["シャツを新しい物に**替え**ました。", "シャツ を あたらしい もの に **かえ**ました。", "I changed into a new shirt.", "N3"],
      ], [
        ["為替", "かわせ", "money order, exchange", "N2", "銀行の**為替**で送金しました。", "I sent money by bank transfer."],
        ["着替え", "きがえ", "changing clothes, change of clothes", "N2", "旅行に**着替え**を持って行きます。", "I take a change of clothes on trips."],
        ["着替える", "きがえる", "to change (one's) clothes", "N2", "家に帰って服を**着替え**ます。", "I go home and change my clothes."],
        ["交替", "こうたい", "change, relief, alteration", "N2", "二人で**交替**して運転します。", "The two of us take turns driving."],
        ["入れ替える", "いれかえる", "to replace; to substitute", "N2", "古い物と新しい物を**入れ替え**ます。", "I replace the old things with new ones."],
        ["組み替える", "くみかえる", "to rearrange; to recombine", "N2", "予定を**組み替え**ました。", "I rearranged my schedule."],
      ]),
    ],
  },
  {
    n: 89,
    note: "shapes that wrap around something",
    items: [
      bk("包", "N2", "wrap", "ホウ", "つつ.む", [
        ["プレゼントを紙で**包み**ます。", "プレゼント を かみ で **つつみ**ます。", "I wrap the present in paper.", "N3"],
        ["店の人が本を**包んで**くれました。", "みせ の ひと が ほん を **つつんで** くれました。", "The shop staff wrapped the book for me.", "N3"],
      ], [
        ["包装", "ほうそう", "packing, wrapping", "N2", "きれいに**包装**してください。", "Please wrap it nicely."],
        ["包帯", "ほうたい", "bandage", "N2", "指に**包帯**を巻きます。", "I wrap a bandage around my finger."],
        ["包丁", "ほうちょう", "kitchen knife, carving knife", "N2", "**包丁**で野菜を切ります。", "I cut vegetables with a kitchen knife."],
        ["小包", "こづつみ", "parcel, package", "N3", "**小包**が届きました。", "A parcel has arrived."],
        ["内包", "ないほう", "connotation; inclusion; containment", "N2", "この計画は問題を**内包**しています。", "This plan contains inherent problems."],
      ]),
      bk("匹", "N2", "counter for small animals", "ヒツ", "ひき", [["犬を二**匹**飼っています。", "いぬ を に**ひき** かって います。", "I keep two dogs."]]),
      bk("区", "N2", "ward, district, section", "ク", "", [
        ["私は港**区**に住んでいます。", "わたし は みなと**く** に すんで います。", "I live in Minato Ward."],
        ["**区役所**で書類をもらいました。", "**くやくしょ** で しょるい を もらいました。", "I got the documents at the ward office."],
      ], [
        ["区域", "くいき", "zone, district, area", "N2", "この**区域**は駐車禁止です。", "Parking is prohibited in this zone."],
        ["区切る", "くぎる", "to punctuate, to cut off, to mark off", "N2", "文を**区切って**読みます。", "I read the sentence in separate chunks."],
        ["区分", "くぶん", "division, section, classification", "N2", "ごみを**区分**して出します。", "I sort the garbage before putting it out."],
        ["区別", "くべつ", "distinction, differentiation, classification", "N3", "二つの色の**区別**がつきません。", "I can't tell the two colors apart."],
        ["地区", "ちく", "district, section", "N3", "この**地区**はとても静かです。", "This district is very quiet."],
      ]),
      bk("欧", "N2", "Europe", "オウ", "", [
        ["**欧米**の文化を学びます。", "**おうべい** の ぶんか を まなびます。", "I study Western culture.", "N2"],
        ["来年、北**欧**に行きたいです。", "らいねん、ほく**おう** に いきたい です。", "I want to go to Northern Europe next year."],
      ]),
    ],
  },
  {
    n: 90,
    note: "small marks beside a shape",
    items: [
      bk("占", "N2", "fortune-telling, occupy", "セン", "うらな.う し.める", [
        ["今日の運勢を**占い**ました。", "きょう の うんせい を **うらない**ました。", "I had today's fortune told.", "N2"],
        ["女性が半分を**占めて**います。", "じょせい が はんぶん を **しめて** います。", "Women make up half of them.", "N2"],
      ], [["買い占める", "かいしめる", "to buy up", "N2", "店の品物を**買い占め**ました。", "Someone bought up all the goods in the store."]]),
      bk("印", "N2", "mark, seal, symbol", "イン", "しるし", [
        ["大事な所に**印**を付けます。", "だいじ な ところ に **しるし** を つけます。", "I put a mark on the important parts.", "N3"],
        ["**目印**に赤い旗を立てます。", "めじるし に あかい はた を たてます。", "I put up a red flag as a marker.", "N2"],
      ], [
        ["矢印", "やじるし", "directing arrow", "N2", "**矢印**の方へ進みます。", "Go in the direction of the arrow."],
        ["印刷物", "いんさつぶつ", "printed matter", "N2", "会議で**印刷物**を配ります。", "We hand out printed materials at the meeting."],
        ["好印象", "こういんしょう", "good impression", "N2", "面接で**好印象**を与えました。", "I made a good impression at the interview."],
      ]),
      bk("卵", "N2", "egg", "ラン", "たまご", [["朝ご飯に**卵**を食べます。", "あさごはん に **たまご** を たべます。", "I eat eggs for breakfast."]]),
    ],
  },
  {
    n: 91,
    note: "尸 / 戸 flap on top",
    items: [
      bk("戸", "N2", "door", "コ", "と", [
        ["**戸**を閉めてください。", "**と** を しめて ください。", "Please close the door."],
        ["夜は**雨戸**を閉めます。", "よる は あまど を しめます。", "I close the storm shutters at night.", "N2"],
      ], [
        ["井戸", "いど", "water well", "N2", "村に古い**井戸**があります。", "There is an old well in the village."],
        ["瀬戸物", "せともの", "earthenware, crockery, china", "N2", "**瀬戸物**のお皿を買いました。", "I bought a china plate."],
        ["戸棚", "とだな", "cupboard, cabinet", "N2", "**戸棚**にお皿を入れます。", "I put the plates in the cupboard."],
      ]),
      bk("届", "N2", "deliver, reach", "カイ", "とど.く とど.ける", [["荷物が**届き**ました。", "にもつ が **とどき**ました。", "The package has arrived.", "N3"]]),
      bk("層", "N2", "layer, stratum, class", "ソウ", "", [
        ["このビルは**高層**ビルです。", "この ビル は **こうそう** ビル です。", "This is a high-rise building.", "N2"],
        ["この歌は若い**層**に人気があります。", "この うた は わかい **そう** に にんき が あります。", "This song is popular with the younger group."],
      ], [
        ["大層", "たいそう", "very much, greatly", "N2", "**大層**立派な家ですね。", "What a very splendid house!"],
        ["一層", "いっそう", "much more, still more", "N3", "昨日より**一層**寒くなりました。", "It has gotten even colder than yesterday."],
      ]),
    ],
  },
  {
    n: 92,
    note: "mountains, coasts and water",
    items: [
      bk("岩", "N2", "rock, crag", "ガン", "いわ", [["海に大きな**岩**があります。", "うみ に おおきな **いわ** が あります。", "There is a big rock in the sea.", "N3"]]),
      bk("岸", "N2", "shore, bank", "ガン", "きし", [
        ["**海岸**を散歩しました。", "**かいがん** を さんぽ しました。", "I walked along the coast.", "N3"],
        ["川の**岸**に木がたくさんあります。", "かわ の **きし** に き が たくさん あります。", "There are many trees on the riverbank.", "N3"],
      ]),
      bk("島", "N2", "island", "トウ", "しま", [
        ["小さい**島**に行きました。", "ちいさい **しま** に いきました。", "I went to a small island.", "N2"],
        ["**半島**の先に灯台があります。", "はんとう の さき に とうだい が あります。", "There is a lighthouse at the tip of the peninsula.", "N2"],
      ], [["列島", "れっとう", "chain of islands", "N2", "日本**列島**は細長いです。", "The Japanese archipelago is long and narrow."]]),
      bk("州", "N2", "state, province", "シュウ", "す", [["アメリカには五十の**州**があります。", "アメリカ には ごじゅう の **しゅう** が あります。", "America has fifty states.", "N3"]]),
    ],
  },
  {
    n: 93,
    note: "boxy, stacked bodies",
    items: [
      bk("畜", "N2", "livestock", "チク", "", [
        ["農場で**家畜**を育てています。", "のうじょう で **かちく** を そだてて います。", "They raise livestock on the farm."],
        ["この村は**牧畜**が盛んです。", "この むら は ぼくちく が さかん です。", "Stock farming thrives in this village.", "N2"],
      ]),
      bk("略", "N2", "abbreviate, strategy", "リャク", "", [
        ["長い名前は**略して**書きます。", "ながい なまえ は **りゃくして** かきます。", "I write long names in short form.", "N2"],
        ["会社の**戦略**を考えます。", "かいしゃ の せんりゃく を かんがえます。", "I think about the company's strategy.", "N2"],
      ]),
      bk("畳", "N2", "tatami mat, fold", "ジョウ", "たたみ たた.む", [
        ["**畳**の部屋で寝ます。", "**たたみ** の へや で ねます。", "I sleep in a tatami room.", "N2"],
        ["服を**折り畳んで**しまいます。", "ふく を おりたたんで しまいます。", "I fold the clothes and put them away.", "N2"],
      ]),
      bk("療", "N2", "heal, cure", "リョウ", "", [
        ["病院で**治療**を受けました。", "びょういん で **ちりょう** を うけました。", "I received treatment at the hospital.", "N3"],
        ["将来は**医療**の仕事をしたいです。", "しょうらい は **いりょう** の しごと を したい です。", "In the future I want to work in medicine.", "N3"],
      ]),
    ],
  },
  {
    n: 94,
    note: "頁 head on the right",
    items: [
      bk("順", "N2", "order, turn", "ジュン", "", [
        ["**順番**に並んでください。", "**じゅんばん** に ならんで ください。", "Please line up in order.", "N2"],
        ["**順序**を守ってください。", "じゅんじょ を まもって ください。", "Please keep to the order.", "N2"],
      ], [
        ["道順", "みちじゅん", "itinerary, route", "N2", "駅までの**道順**を教えます。", "I explain the route to the station."],
        ["順調", "じゅんちょう", "doing well", "N3", "仕事は**順調**に進んでいます。", "Work is progressing smoothly."],
        ["順位", "じゅんい", "order; rank; position", "N2", "試合の**順位**が決まりました。", "The rankings for the competition have been decided."],
        ["順応", "じゅんのう", "adaptation; adjustment", "N2", "新しい生活に**順応**しました。", "I adapted to my new life."],
        ["天候不順", "てんこうふじゅん", "unseasonable weather", "N2", "**天候不順**で野菜が高いです。", "Vegetables are expensive due to the unseasonable weather."],
      ]),
      bk("預", "N2", "deposit, entrust", "ヨ", "あず.ける あず.かる", [
        ["銀行にお金を**預け**ます。", "ぎんこう に おかね を **あずけ**ます。", "I deposit money at the bank.", "N3"],
        ["友だちの荷物を**預かり**ます。", "ともだち の にもつ を あずかります。", "I look after my friend's luggage.", "N2"],
      ]),
      bk("領", "N2", "territory, receive", "リョウ", "", [
        ["大統**領**がテレビに出ました。", "だいとう**りょう** が テレビ に でました。", "The president appeared on TV.", "N2"],
        ["**領収書**をください。", "**りょうしゅうしょ** を ください。", "A receipt, please.", "N2"],
      ], [
        ["要領", "ようりょう", "gist, essentials, outline", "N2", "彼は説明の**要領**がいいです。", "He is good at explaining things clearly."],
        ["領事", "りょうじ", "consul", "N2", "**領事**館で書類をもらいます。", "I get documents at the consulate."],
      ]),
      bk("額", "N2", "amount, forehead, frame", "ガク", "ひたい", [
        ["**金額**を確かめてください。", "**きんがく** を たしかめて ください。", "Please check the amount.", "N3"],
        ["壁に絵の**額**をかけました。", "かべ に え の **がく** を かけました。", "I hung a picture frame on the wall.", "N3"],
      ], [
        ["半額", "はんがく", "half price; half the amount", "N2", "セールで**半額**になりました。", "It became half price in the sale."],
        ["多額", "たがく", "large amount (of money)", "N2", "工事に**多額**のお金がかかります。", "The construction costs a large amount of money."],
        ["全額", "ぜんがく", "total; full amount", "N2", "旅行の代金を**全額**払いました。", "I paid the full cost of the trip."],
      ]),
    ],
  },
  {
    n: 95,
    note: "攵 on the right",
    items: [
      bk("改", "N2", "reform, renew", "カイ", "あらた.める あらた.まる", [
        ["生活を**改め**ます。", "せいかつ を **あらため**ます。", "I'll change my lifestyle.", "N2"],
        ["会社は仕事のやり方を**改善**しました。", "かいしゃ は しごと の やりかた を **かいぜん** しました。", "The company improved its way of working.", "N3"],
      ], [
        ["改正", "かいせい", "revision, amendment, alteration", "N2", "去年、法律が**改正**されました。", "The law was amended last year."],
        ["改造", "かいぞう", "remodeling", "N2", "古い家を**改造**しました。", "I remodeled an old house."],
      ]),
      bk("敬", "N2", "respect", "ケイ", "うやま.う", [
        ["先生に**敬語**を使います。", "せんせい に **けいご** を つかいます。", "I use polite language with my teacher.", "N2"],
        ["九月に**敬老**の日があります。", "くがつ に **けいろう** の ひ が あります。", "Respect for the Aged Day is in September.", "N2"],
      ], [["敬意", "けいい", "respect, honor", "N3", "先生に**敬意**を持っています。", "I have respect for my teacher."]]),
    ],
  },
  {
    n: 96,
    note: "舟 boat",
    items: [
      bk("舟", "N2", "boat", "シュウ", "ふね", [["小さい**舟**で川を渡りました。", "ちいさい **ふね** で かわ を わたりました。", "I crossed the river in a small boat."]]),
      bk("航", "N2", "navigate, sail, fly", "コウ", "", [
        ["日本**航空**の飛行機に乗ります。", "にほん **こうくう** の ひこうき に のります。", "I take a Japan Airlines plane.", "N3"],
        ["台風で船が**欠航**しました。", "たいふう で ふね が **けっこう** しました。", "The boat was cancelled because of the typhoon."],
      ], [["航海", "こうかい", "sail, voyage", "N3", "長い**航海**に出ます。", "We set out on a long voyage."]]),
      bk("般", "N2", "general, carrier", "ハン", "", [
        ["**一般**の人も入れます。", "**いっぱん** の ひと も はいれます。", "General visitors can enter too.", "N3"],
        ["それは**一般的**な意見です。", "それ は **いっぱんてき** な いけん です。", "That's a common opinion.", "N3"],
      ], [["全般", "ぜんぱん", "(the) whole, general", "N2", "テストは**全般**によくできました。", "Overall, I did well on the test."]]),
      bk("船", "N3", "ship", "セン", "ふね ふな", [["**船**で島に行きます。", "**ふね** で しま に いきます。", "I go to the island by ship.", "N2"]]),
    ],
  },
  {
    n: 97,
    note: "走 and 足 on the left",
    items: [
      bk("超", "N2", "exceed, super-", "チョウ", "こ.える こ.す", [
        ["気温が三十度を**超え**ました。", "きおん が さんじゅうど を **こえ**ました。", "The temperature went over thirty degrees.", "N3"],
        ["荷物が重さを**超過**しました。", "にもつ が おもさ を ちょうか しました。", "The luggage went over the weight limit.", "N2"],
      ]),
      bk("跡", "N2", "trace, mark, ruins", "セキ", "あと", [
        ["雪に足の**跡**があります。", "ゆき に あし の **あと** が あります。", "There are footprints in the snow.", "N3"],
        ["砂に**足跡**が残っています。", "すな に あしあと が のこって います。", "Footprints remain in the sand.", "N2"],
      ]),
      bk("踊", "N2", "dance", "ヨウ", "おど.る", [["みんなで**踊り**ましょう。", "みんな で **おどり**ましょう。", "Let's all dance."]]),
      bk("通", "N5", "pass, commute", "ツウ", "とお.る かよ.う", [
        ["毎日、学校に**通って**います。", "まいにち、がっこう に **かよって** います。", "I go to school every day.", "N2"],
        ["この道は車がよく**通り**ます。", "この みち は くるま が よく **とおり**ます。", "Cars often pass along this road.", "N2"],
      ]),
    ],
  },
  {
    n: 98,
    note: "十 built into the shape",
    items: [
      bk("卒", "N2", "graduate", "ソツ", "", [["三月に大学を**卒業**します。", "さんがつ に だいがく を **そつぎょう** します。", "I graduate from university in March."]], [
        ["率直", "そっちょく", "frank, candid, honest", "N2", "**率直**な意見を言ってください。", "Please give me your honest opinion."],
      ]),
      bk("協", "N2", "cooperate", "キョウ", "", [
        ["みんなで**協力**しましょう。", "みんな で **きょうりょく** しましょう。", "Let's all work together.", "N3"],
        ["みんなで**協議**します。", "みんな で きょうぎ します。", "We discuss it together.", "N3"],
      ], [["協調", "きょうちょう", "co-operation, conciliation, harmony", "N3", "他の国と**協調**します。", "We cooperate with other countries."]]),
    ],
  },
  {
    n: 99,
    note: "又 shapes",
    items: [
      bk("双", "N2", "pair, both", "ソウ", "ふた", [["彼らは**双子**です。", "かれら は **ふたご** です。", "They are twins.", "N3"]]),
      bk("厚", "N2", "thick, kind", "コウ", "あつ.い", [
        ["この本は**厚い**です。", "この ほん は **あつい** です。", "This book is thick."],
        ["**厚かましい**お願いですみません。", "あつかましい おねがい で すみません。", "Sorry for the cheeky request.", "N2"],
      ]),
    ],
  },
  {
    n: 100,
    note: "幺 threads inside",
    items: [
      bk("孫", "N2", "grandchild", "ソン", "まご", [
        ["祖母には**孫**が三人います。", "そぼ には **まご** が さんにん います。", "My grandmother has three grandchildren.", "N3"],
        ["**子孫**に土地を残します。", "しそん に とち を のこします。", "I'll leave the land to my descendants.", "N2"],
      ]),
      bk("幼", "N2", "infancy, young", "ヨウ", "おさな.い", [
        ["子どもは**幼稚園**に行っています。", "こども は **ようちえん** に いって います。", "My child goes to kindergarten.", "N2"],
        ["これは**幼い**頃の写真です。", "これ は **おさない** ころ の しゃしん です。", "This is a photo from when I was little.", "N3"],
      ], [["幼児", "ようじ", "infant, baby, child", "N2", "**幼児**が公園で遊んでいます。", "Small children are playing in the park."]]),
    ],
  },
  {
    n: 101,
    note: "long sweeping bottom strokes",
    items: [
      bk("承", "N2", "consent, hear (humble)", "ショウ", "うけたまわ.る", [
        ["はい、**承知**しました。", "はい、**しょうち** しました。", "Yes, understood.", "N2"],
        ["部長の**承認**をもらいました。", "ぶちょう の しょうにん を もらいました。", "I got the manager's approval.", "N2"],
      ]),
      bk("延", "N2", "extend, postpone", "エン", "の.びる の.ばす", [
        ["会議が来週に**延期**になりました。", "かいぎ が らいしゅう に **えんき** に なりました。", "The meeting was postponed to next week.", "N3"],
        ["電車が遅れて到着が**延び**ました。", "でんしゃ が おくれて とうちゃく が **のび**ました。", "The train was late so the arrival was delayed.", "N3"],
      ], [
        ["延長", "えんちょう", "extension, prolongation", "N2", "会議を三十分**延長**します。", "We will extend the meeting by thirty minutes."],
        ["延ばす", "のばす", "to extend, to stretch, to reach out", "N3", "出発を一日**延ばし**ました。", "I postponed my departure by one day."],
      ]),
    ],
  },
  {
    n: 102,
    note: "few strokes, easy to confuse",
    items: [
      bk("比", "N2", "compare, ratio", "ヒ", "くら.べる", [
        ["兄と**比べる**と私は背が低いです。", "あに と **くらべる** と わたし は せ が ひくい です。", "Compared with my brother, I'm short."],
        ["今日は**比較的**暖かいです。", "きょう は ひかくてき あたたかい です。", "Today is comparatively warm.", "N2"],
      ], [["比較", "ひかく", "comparison", "N3", "二つの店を**比較**します。", "I compare the two stores."]]),
      bk("毛", "N2", "hair, fur, wool", "モウ", "け", [
        ["猫の**毛**が服に付きました。", "ねこ の **け** が ふく に つきました。", "Cat hair got on my clothes."],
        ["**毛糸**で手袋を編みます。", "けいと で てぶくろ を あみます。", "I knit gloves out of wool.", "N2"],
      ], [
        ["毛皮", "けがわ", "fur, skin, pelt", "N2", "**毛皮**のコートは暖かいです。", "Fur coats are warm."],
        ["羊毛", "ようもう", "wool", "N2", "**羊毛**のセーターを買いました。", "I bought a wool sweater."],
        ["髪の毛", "かみのけ", "hair (head)", "N3", "**髪の毛**を短く切りました。", "I cut my hair short."],
        ["毛布", "もうふ", "blanket", "N3", "寒いので**毛布**を使います。", "It's cold, so I use a blanket."],
      ]),
      bk("手", "N5", "hand", "シュ", "て", [["**手**を洗います。", "**て** を あらいます。", "I wash my hands.", "N2"]]),
      bk("宅", "N3", "home, house", "タク", "", [
        ["**帰宅**は七時ごろです。", "**きたく** は しちじ ごろ です。", "I get home around seven.", "N3"],
        ["お**宅**はどちらですか。", "お**たく** は どちら です か。", "Where is your home?", "N3"],
      ]),
      bk("甘", "N2", "sweet, lenient", "カン", "あま.い あま.やかす", [
        ["このケーキは**甘い**です。", "この ケーキ は **あまい** です。", "This cake is sweet."],
        ["子どもを**甘やかし**ません。", "こども を あまやかしません。", "I don't spoil my children.", "N2"],
      ]),
    ],
  },
  {
    n: 103,
    note: "angular old-fashioned shapes",
    items: [
      bk("武", "N2", "warrior, military", "ブ ム", "", [
        ["昔、**武士**は刀を持っていました。", "むかし、**ぶし** は かたな を もって いました。", "Long ago, samurai carried swords.", "N2"],
        ["彼は**武道**を習っています。", "かれ は **ぶどう** を ならって います。", "He is learning martial arts."],
      ], [["武器", "ぶき", "weapon, arms", "N3", "博物館で昔の**武器**を見ました。", "I saw old weapons at the museum."]]),
      bk("歴", "N2", "history, career", "レキ", "", [
        ["日本の**歴史**に興味があります。", "にほん の **れきし** に きょうみ が あります。", "I'm interested in Japanese history."],
        ["**履歴書**を書きました。", "**りれきしょ** を かきました。", "I wrote my résumé.", "N2"],
      ], [["学歴", "がくれき", "academic background", "N3", "**学歴**より経験が大事です。", "Experience matters more than academic background."]]),
      bk("殿", "N2", "palace, (honorific) Mr.", "デン テン", "との どの", [["書類に「田中**殿**」と書きました。", "しょるい に 「たなか **どの**」 と かきました。", "I wrote “Mr. Tanaka” on the document.", "N2"]]),
    ],
  },
  {
    n: 104,
    note: "nearly the same top half",
    items: [
      bk("毒", "N2", "poison", "ドク", "", [
        ["このキノコには**毒**があります。", "この キノコ には **どく** が あります。", "This mushroom has poison in it.", "N3"],
        ["それは**お気の毒に**思います。", "それ は おきのどくに おもいます。", "I'm sorry to hear that.", "N2"],
      ], [
        ["消毒", "しょうどく", "disinfection", "N2", "食事の前に手を**消毒**します。", "I disinfect my hands before eating."],
        ["気の毒", "きのどく", "pitiful, a pity", "N3", "彼は**気の毒**な人です。", "He is a pitiful person."],
      ]),
      bk("麦", "N2", "wheat, barley", "バク", "むぎ", [
        ["夏は**麦茶**を飲みます。", "なつ は **むぎちゃ** を のみます。", "I drink barley tea in summer."],
        ["畑に**麦**が育っています。", "はたけ に **むぎ** が そだって います。", "Wheat is growing in the field."],
      ], [["蕎麦", "そば", "soba (buckwheat noodles)", "N3", "昼に**蕎麦**を食べました。", "I ate soba for lunch."]]),
    ],
  },
  {
    n: 105,
    note: "small standalone shapes",
    items: [
      bk("虫", "N2", "insect, bug", "チュウ", "むし", [
        ["部屋に**虫**が入りました。", "へや に **むし** が はいりました。", "A bug got into the room."],
        ["歯医者で**虫歯**を治しました。", "はいしゃ で むしば を なおしました。", "I had my cavity treated at the dentist.", "N3"],
      ]),
      bk("缶", "N2", "can, tin", "カン", "", [
        ["**缶**ビールを買いました。", "**かん** ビール を かいました。", "I bought a canned beer.", "N3"],
        ["**缶詰**のスープを温めます。", "かんづめ の スープ を あたためます。", "I heat up canned soup.", "N2"],
      ]),
    ],
  },
  {
    n: 106,
    note: "farming, stacked shapes",
    items: [
      bk("農", "N2", "farming, agriculture", "ノウ", "", [
        ["祖父は**農業**をしています。", "そふ は **のうぎょう** を して います。", "My grandfather works in farming.", "N3"],
        ["この地方の**農産物**は米です。", "この ちほう の のうさんぶつ は こめ です。", "This region's produce is rice.", "N2"],
      ], [
        ["農村", "のうそん", "agricultural community", "N2", "静かな**農村**で育ちました。", "I grew up in a quiet farming village."],
        ["農薬", "のうやく", "agricultural chemicals", "N2", "**農薬**を使わない野菜です。", "These vegetables are grown without pesticides."],
        ["農家", "のうか", "farmer, farm family", "N3", "祖父は**農家**です。", "My grandfather is a farmer."],
        ["農民", "のうみん", "farmers, peasants", "N3", "**農民**が畑で働いています。", "Farmers are working in the fields."],
        ["農園", "のうえん", "plantation", "N2", "**農園**でいちごを取りました。", "We picked strawberries at the farm."],
        ["農作物", "のうさくぶつ", "crops; agricultural produce", "N2", "台風で**農作物**が倒れました。", "The typhoon flattened the crops."],
      ]),
      bk("量", "N2", "quantity, amount", "リョウ", "はか.る", [
        ["ご飯の**量**が多いです。", "ごはん の **りょう** が おおい です。", "The portion of rice is large.", "N3"],
        ["荷物の**重量**を調べます。", "にもつ の じゅうりょう を しらべます。", "I check the weight of the luggage.", "N2"],
      ], [
        ["分量", "ぶんりょう", "amount, quantity", "N2", "材料の**分量**を量ります。", "I measure the amounts of the ingredients."],
        ["音量", "おんりょう", "volume (sound)", "N2", "テレビの**音量**を下げます。", "I turn down the TV volume."],
        ["数量", "すうりょう", "quantity; volume; amount", "N2", "品物の**数量**を数えます。", "I count the quantity of goods."],
        ["多量", "たりょう", "large quantity", "N2", "工事には**多量**の水が必要です。", "The construction requires a large quantity of water."],
        ["容量", "ようりょう", "capacity; volume", "N2", "このかばんは**容量**が大きいです。", "This bag has a large capacity."],
        ["大量", "たいりょう", "large quantity; mass", "N3", "**大量**の紙を注文しました。", "I ordered a large quantity of paper."],
      ]),
      bk("耕", "N2", "till, plow", "コウ", "たがや.す", [
        ["畑を**耕し**ます。", "はたけ を **たがやし**ます。", "I plow the field.", "N2"],
        ["村の**耕地**が広がっています。", "むら の こうち が ひろがって います。", "The village farmland stretches out.", "N2"],
      ]),
      bk("豊", "N2", "abundant, rich", "ホウ", "ゆた.か", [
        ["この国は自然が**豊か**です。", "この くに は しぜん が **ゆたか** です。", "This country is rich in nature.", "N3"],
        ["店には品物が**豊富**にあります。", "みせ には しなもの が **ほうふ** に あります。", "The shop has an abundance of goods.", "N3"],
      ]),
    ],
  },
  {
    n: 107,
    note: "隹 bird inside",
    items: [
      bk("雇", "N2", "employ, hire", "コ", "やと.う", [
        ["店は新しい人を**雇い**ました。", "みせ は あたらしい ひと を **やとい**ました。", "The shop hired a new person.", "N3"],
        ["私は小さい会社に**雇われて**います。", "わたし は ちいさい かいしゃ に **やとわれて** います。", "I'm employed by a small company.", "N3"],
      ]),
      bk("隻", "N2", "counter for ships", "セキ", "", [["港に船が三**隻**あります。", "みなと に ふね が さん**せき** あります。", "There are three ships in the harbor."]]),
    ],
  },
  {
    n: 108,
    note: "the gate shape itself",
    items: [
      bk("門", "N2", "gate", "モン", "かど", [
        ["学校の**門**は八時に開きます。", "がっこう の **もん** は はちじ に あきます。", "The school gate opens at eight."],
        ["学校の**正門**で待ちます。", "がっこう の せいもん で まちます。", "I'll wait at the school's main gate.", "N2"],
      ], [
        ["名門", "めいもん", "noted family; prestigious school", "N2", "兄は**名門**の学校に入りました。", "My older brother got into a prestigious school."],
        ["入門", "にゅうもん", "entering an institution; primer; introduction", "N2", "日本語の**入門**の本を買いました。", "I bought an introductory book on Japanese."],
      ]),
      bk("問", "N4", "question, problem", "モン", "と.う", [
        ["何か**質問**がありますか。", "なにか **しつもん** が あります か。", "Do you have any questions?", "N2"],
        ["この**問題**は難しいです。", "この **もんだい** は むずかしい です。", "This problem is difficult.", "N2"],
      ]),
      bk("開", "N5", "open", "カイ", "あ.ける ひら.く", [["ドアを**開け**ます。", "ドア を **あけ**ます。", "I open the door."]]),
    ],
  },
  {
    n: 109,
    note: "symmetrical stacked shapes",
    items: [
      bk("革", "N2", "leather, reform", "カク", "かわ", [
        ["**革**のかばんを買いました。", "**かわ** の かばん を かいました。", "I bought a leather bag.", "N3"],
        ["政府は**改革**を進めています。", "せいふ は **かいかく** を すすめて います。", "The government is pushing reform.", "N3"],
      ]),
      bk("黄", "N2", "yellow", "コウ オウ", "き こ", [["**黄色い**花が咲いています。", "**きいろい** はな が さいて います。", "Yellow flowers are blooming."]]),
    ],
  },
  {
    n: 110,
    note: "tall, heavily stacked",
    items: [
      bk("骨", "N2", "bone", "コツ", "ほね", [
        ["転んで**骨**を折りました。", "ころんで **ほね** を おりました。", "I fell and broke a bone.", "N3"],
        ["転んで足を**骨折**しました。", "ころんで あし を こっせつ しました。", "I fell and broke my leg.", "N3"],
      ]),
      bk("鼻", "N2", "nose", "ビ", "はな", [
        ["犬は**鼻**がいいです。", "いぬ は **はな** が いい です。", "Dogs have a good nose."],
        ["風邪で**鼻水**が出ます。", "かぜ で はなみず が でます。", "I have a runny nose from a cold.", "N2"],
      ]),
      bk("齢", "N2", "age", "レイ", "よわい", [
        ["ここに**年齢**を書いてください。", "ここ に **ねんれい** を かいて ください。", "Please write your age here.", "N3"],
        ["祖母はもう**高齢**です。", "そぼ は もう こうれい です。", "My grandmother is elderly now.", "N2"],
      ], [
        ["高齢化", "こうれいか", "population ageing", "N2", "社会の**高齢化**が進んでいます。", "Society's population is aging."],
        ["高齢者", "こうれいしゃ", "old person; the elderly", "N2", "ここは**高齢者**の席です。", "These seats are for the elderly."],
        ["最高齢", "さいこうれい", "oldest; most advanced age", "N2", "村の**最高齢**は九十九歳です。", "The oldest person in the village is ninety-nine."],
      ]),
    ],
  },
];
