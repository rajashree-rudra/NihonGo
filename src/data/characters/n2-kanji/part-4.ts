// N2 kanji book — groups 85–111 (kanji 357–448). See part-1.ts for the format.
import { bk, type BookGroup } from "../../builders.ts";

export const GROUPS: BookGroup[] = [
  {
    n: 85,
    note: "辶 road at the bottom",
    items: [
      bk("述", "N2", "state, mention", "ジュツ", "の.べる", [
        ["意見を**述べて**ください。", "いけん を **のべて** ください。", "Please state your opinion.", "N3", undefined, "の.べる"],
        ["レポートに事実を**記述**します。", "レポート に じじつ を **きじゅつ** します。", "I describe the facts in the report.", "N2", undefined, "ジュツ"],
        ["文の**述語**を探します。", "ぶん の **じゅつご** を さがします。", "I look for the predicate of the sentence.", "N2", undefined, "ジュツ"],
      ]),
      bk("術", "N3", "art, technique", "ジュツ", "すべ", [
        ["新しい**技術**を使います。", "あたらしい **ぎじゅつ** を つかいます。", "We use new technology.", "N3", undefined, "ジュツ"],
        ["病院で**手術**を受けました。", "びょういん で **しゅじゅつ** を うけました。", "I had an operation at the hospital.", "N3", undefined, "ジュツ"],
        ["もう何もする**術**がありません。", "もう なにも する **すべ** が ありません。", "There is nothing more we can do.", "N1", undefined, "すべ"],
      ]),
      bk("逆", "N2", "reverse, opposite", "ギャク ゲキ", "さか さか.らう", [
        ["**逆**の方向に行ってしまいました。", "**ぎゃく** の ほうこう に いって しまいました。", "I went in the opposite direction.", "N2", undefined, "ギャク"],
        ["絵が**逆様**になっています。", "え が **さかさま** に なって います。", "The picture is upside down.", "N2", undefined, "さか"],
        ["兄と私は性格が**真逆**です。", "あに と わたし は せいかく が **まぎゃく** です。", "My brother and I have completely opposite personalities.", "N2", undefined, "ギャク"],
        ["部長の**逆鱗**に触れてしまいました。", "ぶちょう の **げきりん** に ふれて しまいました。", "I incurred the manager's wrath.", "N1", undefined, "ゲキ"],
      ], [
        ["逆らう", "さからう", "to go against, to oppose, to disobey", "N3", "親に**逆らい**ません。", "I don't disobey my parents.", "おや に **さからい**ません。"],
      ]),
      bk("造", "N2", "make, build", "ゾウ", "つく.る", [
        ["木で家を**造り**ます。", "き で いえ を **つくり**ます。", "We build houses out of wood.", "N3", undefined, "つく.る"],
        ["この建物の**構造**は珍しいです。", "この たてもの の **こうぞう** は めずらしい です。", "The structure of this building is unusual.", "N2", undefined, "ゾウ"],
        ["公園に**人造**の湖があります。", "こうえん に **じんぞう** の みずうみ が あります。", "There is an artificial lake in the park.", "N2", undefined, "ゾウ"],
        ["この町は**造船**が盛んです。", "この まち は **ぞうせん** が さかん です。", "Shipbuilding thrives in this town.", "N2", undefined, "ゾウ"],
      ], [
        ["製造", "せいぞう", "manufacture, production", "N3", "この工場は車を**製造**しています。", "This factory manufactures cars.", "この こうじょう は くるま を **せいぞう** して います。"],
        ["創造", "そうぞう", "creation", "N3", "新しい文化を**創造**します。", "We create a new culture.", "あたらしい ぶんか を **そうぞう** します。"],
      ]),
      bk("辺", "N2", "area, vicinity", "ヘン", "あた.り べ", [
        ["この**辺**に郵便局はありますか。", "この **へん** に ゆうびんきょく は あります か。", "Is there a post office around here?", "N3", undefined, "ヘン"],
      ], [
        ["辺り", "あたり", "area, vicinity, around", "N3", "この**辺り**は夜とても静かです。", "This area is very quiet at night.", "この **あたり** は よる とても しずか です。"],
        ["海辺", "うみべ", "seaside, beach", "N3", "**海辺**で遊びました。", "I played at the seaside.", "**うみべ** で あそびました。"],
      ]),
    ],
  },
  {
    n: 86,
    note: "巾 cloth",
    items: [
      bk("布", "N2", "cloth, spread", "フ", "ぬの", [
        ["白い**布**でカバーを作ります。", "しろい **ぬの** で カバー を つくります。", "I'll make a cover from white cloth.", "N3", undefined, "ぬの"],
        ["**座布団**に座ってください。", "**ざぶとん** に すわって ください。", "Please sit on the cushion.", "N2", undefined, "フ"],
        ["この鳥の**分布**を調べます。", "この とり の **ぶんぷ** を しらべます。", "I study the distribution of this bird.", "N2", undefined, "フ"],
      ], [
        ["財布", "さいふ", "wallet, purse", "N3", "**財布**をなくしました。", "I lost my wallet.", "**さいふ** を なくしました。"],
      ]),
      bk("希", "N2", "hope, rare", "キ", "", [
        ["**希望**の大学に入りました。", "**きぼう** の だいがく に はいりました。", "I got into the university I hoped for.", "N3", undefined, "キ"],
      ], [
        ["希望者", "きぼうしゃ", "applicant, person who wishes to take part", "N3", "**希望者**は手を上げてください。", "Those who want to join, please raise your hand.", "**きぼうしゃ** は て を あげて ください。"],
      ]),
      bk("帯", "N2", "belt, zone, carry", "タイ", "おび お.びる", [
        ["着物の**帯**はきれいです。", "きもの の **おび** は きれい です。", "The kimono sash is beautiful.", "N3", undefined, "おび"],
        ["**携帯**電話を忘れました。", "**けいたい** でんわ を わすれました。", "I forgot my mobile phone.", "N2", undefined, "タイ"],
        ["朝の**時間帯**は電車が混みます。", "あさ の **じかんたい** は でんしゃ が こみます。", "Trains are crowded in the morning hours.", "N2", undefined, "タイ"],
        ["ここは静かな**地帯**です。", "ここ は しずか な **ちたい** です。", "This is a quiet area.", "N2", undefined, "タイ"],
        ["**寒帯**の動物を調べます。", "**かんたい** の どうぶつ を しらべます。", "I study the animals of the frigid zone.", "N2", undefined, "タイ"],
        ["夕方、空が赤みを**帯びて**きました。", "ゆうがた、 そら が あかみ を **おびて** きました。", "In the evening, the sky took on a reddish tinge.", "N1", undefined, "お.びる"],
      ], [
        ["熱帯", "ねったい", "tropics", "N3", "**熱帯**の花が咲いています。", "Tropical flowers are blooming.", "**ねったい** の はな が さいて います。"],
        ["一帯", "いったい", "a region, the whole place", "N3", "この**一帯**は畑です。", "This whole area is farmland.", "この **いったい** は はたけ です。"],
      ]),
      bk("帽", "N2", "hat, cap", "ボウ", "", [
        ["**帽子**をかぶります。", "**ぼうし** を かぶります。", "I put on a hat.", "N3", undefined, "ボウ"],
      ]),
      bk("幅", "N2", "width, range", "フク", "はば", [
        ["この道は**幅**が広いです。", "この みち は **はば** が ひろい です。", "This road's width is generous.", "N3", undefined, "はば"],
        ["彼は**幅広い**知識があります。", "かれ は **はばひろい** ちしき が あります。", "He has broad knowledge.", "N2", undefined, "はば"],
        ["この道路の**幅員**は十メートルです。", "この どうろ の **ふくいん** は じゅう メートル です。", "This road is ten meters wide.", "N1", undefined, "フク"],
      ]),
    ],
  },
  {
    n: 87,
    note: "广 roof on the left",
    items: [
      bk("庁", "N2", "government office", "チョウ", "", [
        ["書類をもらいに**県庁**に行きました。", "しょるい を もらい に **けんちょう** に いきました。", "I went to the prefectural office to get documents.", "N2", undefined, "チョウ"],
        ["**気象庁**は明日は雨だと言いました。", "**きしょうちょう** は あした は あめ だ と いいました。", "The weather agency said it will rain tomorrow.", "N2", undefined, "チョウ"],
        ["父は**官庁**で働いています。", "ちち は **かんちょう** で はたらいて います。", "My father works at a government office.", "N2", undefined, "チョウ"],
      ]),
      bk("床", "N2", "floor, bed", "ショウ", "ゆか とこ", [
        ["**床**を掃除します。", "**ゆか** を そうじ します。", "I clean the floor.", "N3", undefined, "ゆか"],
        ["毎朝六時に**起床**します。", "まいあさ ろくじ に **きしょう** します。", "I get up at six every morning.", "N2", undefined, "ショウ"],
        ["**床の間**に花を飾ります。", "**とこのま** に はな を かざります。", "I decorate the alcove with flowers.", "N2", undefined, "とこ"],
      ]),
      bk("府", "N2", "prefecture, government", "フ", "", [
        ["**政府**が新しい法律を作りました。", "**せいふ** が あたらしい ほうりつ を つくりました。", "The government made a new law.", "N3", undefined, "フ"],
        ["**大阪府**に住んでいます。", "**おおさかふ** に すんで います。", "I live in Osaka Prefecture.", "N2", undefined, "フ"],
      ]),
      bk("庫", "N2", "storehouse, garage", "コ ク", "", [
        ["牛乳を**冷蔵庫**に入れます。", "ぎゅうにゅう を **れいぞうこ** に いれます。", "I put the milk in the fridge.", "N4", undefined, "コ"],
        ["車を**車庫**に入れます。", "くるま を **しゃこ** に いれます。", "I put the car in the garage.", "N2", undefined, "コ"],
        ["荷物を**倉庫**に入れます。", "にもつ を **そうこ** に いれます。", "I put the luggage in the warehouse.", "N2", undefined, "コ"],
        ["お寺の**庫裏**でお茶をいただきました。", "おてら の **くり** で おちゃ を いただきました。", "I was served tea in the temple's living quarters.", "N1", undefined, "ク"],
      ], [
        ["金庫", "きんこ", "safe, vault", "N3", "大切な物を**金庫**に入れました。", "I put the valuables in the safe.", "たいせつ な もの を **きんこ** に いれました。"],
      ]),
    ],
  },
  {
    n: 88,
    note: "寸 at the bottom or right",
    items: [
      bk("寺", "N2", "temple", "ジ", "てら", [
        ["古い**お寺**を見に行きました。", "ふるい **おてら** を み に いきました。", "I went to see an old temple.", "N2", undefined, "てら"],
        ["古い**寺院**を見学しました。", "ふるい **じいん** を けんがく しました。", "I toured an old temple.", "N2", undefined, "ジ"],
      ]),
      bk("封", "N2", "seal", "フウ ホウ", "", [
        ["**封筒**に切手を貼ります。", "**ふうとう** に きって を はります。", "I put a stamp on the envelope.", "N4", undefined, "フウ"],
        ["手紙に**封**をしました。", "てがみ に **ふう** を しました。", "I sealed the letter.", "N2", undefined, "フウ"],
        ["届いた手紙を**開封**しました。", "とどいた てがみ を **かいふう** しました。", "I opened the letter that arrived.", "N2", undefined, "フウ"],
        ["昔の日本は**封建**社会でした。", "むかし の にほん は **ほうけん** しゃかい でした。", "Old Japan was a feudal society.", "N1", undefined, "ホウ"],
      ]),
      bk("専", "N2", "specialty, exclusive", "セン", "もっぱ.ら", [
        ["私の**専門**は日本語です。", "わたし の **せんもん** は にほんご です。", "My specialty is Japanese.", "N3", undefined, "セン"],
        ["今は勉強に**専念**します。", "いま は べんきょう に **せんねん** します。", "For now, I will devote myself to studying.", "N2", undefined, "セン"],
        ["コーヒーの**専門店**に行きます。", "コーヒー の **せんもんてん** に いきます。", "I'm going to a specialty coffee shop.", "N2", undefined, "セン"],
        ["図書館で**専門書**を借りました。", "としょかん で **せんもんしょ** を かりました。", "I borrowed a specialized book from the library.", "N2", undefined, "セン"],
        ["母は**専業主婦**です。", "はは は **せんぎょうしゅふ** です。", "My mother is a full-time housewife.", "N2", undefined, "セン"],
        ["彼は会社の**専属**の運転手です。", "かれ は かいしゃ の **せんぞく** の うんてんしゅ です。", "He is the company's exclusive driver.", "N2", undefined, "セン"],
        ["昔この国は**専制**の政治でした。", "むかし この くに は **せんせい** の せいじ でした。", "Long ago, this country was ruled by despotism.", "N2", undefined, "セン"],
        ["休みの日は**専ら**家で本を読んでいます。", "やすみ の ひ は **もっぱら** いえ で ほん を よんで います。", "On my days off I mostly read books at home.", "N1", undefined, "もっぱ.ら"],
      ], [
        ["専門家", "せんもんか", "expert, specialist", "N3", "彼はコンピューターの**専門家**です。", "He is a computer expert.", "かれ は コンピューター の **せんもんか** です。"],
        ["専攻", "せんこう", "major subject, special study", "N3", "大学で日本語を**専攻**しました。", "I majored in Japanese at university.", "だいがく で にほんご を **せんこう** しました。"],
      ]),
      bk("将", "N2", "commander, future", "ショウ", "", [
        ["**将来**、先生になりたいです。", "**しょうらい**、 せんせい に なりたい です。", "In the future I want to be a teacher.", "N3", undefined, "ショウ"],
        ["祖父と**将棋**をします。", "そふ と **しょうぎ** を します。", "I play shogi with my grandfather.", "N2", undefined, "ショウ"],
      ]),
      bk("尊", "N2", "respect, precious", "ソン", "とうと.い たっと.い", [
        ["父を**尊敬**しています。", "ちち を **そんけい** して います。", "I respect my father.", "N3", undefined, "ソン"],
        ["命はとても**尊い**ものです。", "いのち は とても **とうとい** もの です。", "Life is very precious.", "N2", undefined, "とうと.い"],
        ["祖父は平和の**尊さ**を教えてくれました。", "そふ は へいわ の **たっとさ** を おしえて くれました。", "My grandfather taught me the value of peace.", "N2", undefined, "たっと.い"],
      ], [
        ["尊重", "そんちょう", "respect, esteem, regard", "N3", "相手の意見を**尊重**します。", "I respect the other person's opinion.", "あいて の いけん を **そんちょう** します。"],
      ]),
      bk("導", "N2", "guide, lead", "ドウ", "みちび.く", [
        ["先生が学生を**指導**します。", "せんせい が がくせい を **しどう** します。", "The teacher guides the students.", "N2", undefined, "ドウ"],
        ["彼が私たちを**導いて**くれました。", "かれ が わたしたち を **みちびいて** くれました。", "He led us.", "N2", undefined, "みちび.く"],
      ], [
        ["指導者", "しどうしゃ", "leader; guide; instructor", "N3", "よい**指導者**に出会いました。", "I met a good mentor.", "よい **しどうしゃ** に であいました。"],
      ]),
    ],
  },
  {
    n: 89,
    note: "日 tucked into the shape",
    items: [
      bk("旧", "N2", "old, former", "キュウ", "", [
        ["中国では**旧正月**を祝います。", "ちゅうごく では **きゅうしょうがつ** を いわいます。", "In China they celebrate the Lunar New Year.", "N2", undefined, "キュウ"],
        ["これは**旧型**のパソコンです。", "これ は **きゅうがた** の パソコン です。", "This is an old-model computer.", "N2", undefined, "キュウ"],
      ]),
      bk("昇", "N2", "rise, ascend", "ショウ", "のぼ.る", [
        ["太陽が**昇り**ました。", "たいよう が **のぼり**ました。", "The sun has risen.", "N3", undefined, "のぼ.る"],
        ["今年は気温が**上昇**しています。", "ことし は きおん が **じょうしょう** して います。", "Temperatures are rising this year.", "N2", undefined, "ショウ"],
      ]),
      bk("星", "N2", "star", "セイ ショウ", "ほし", [
        ["空に**星**がたくさん見えます。", "そら に **ほし** が たくさん みえます。", "Many stars are visible in the sky.", "N3", undefined, "ほし"],
        ["東の空に**明星**が光っています。", "ひがし の そら に **みょうじょう** が ひかって います。", "The morning star is shining in the eastern sky.", "N1", undefined, "ショウ"],
      ], [
        ["衛星", "えいせい", "satellite", "N3", "**衛星**から写真を送ります。", "Photos are sent down from the satellite.", "**えいせい** から しゃしん を おくります。"],
      ]),
      bk("姓", "N2", "surname", "セイ ショウ", "", [
        ["ここに**姓**と名前を書いてください。", "ここ に **せい** と なまえ を かいて ください。", "Please write your surname and given name here.", "N2", undefined, "セイ"],
        ["ここに**姓名**を書いてください。", "ここ に **せいめい** を かいて ください。", "Please write your full name here.", "N2", undefined, "セイ"],
        ["祖父は昔、**百姓**をしていました。", "そふ は むかし、 **ひゃくしょう** を して いました。", "My grandfather used to be a farmer.", "N1", undefined, "ショウ"],
      ]),
      bk("暴", "N2", "violent, expose", "ボウ バク", "あば.れる あば.く", [
        ["**暴力**はいけません。", "**ぼうりょく** は いけません。", "Violence is not acceptable.", "N2", undefined, "ボウ"],
        ["昨日は**暴風雨**でした。", "きのう は **ぼうふうう** でした。", "Yesterday there was a violent storm.", "N2", undefined, "ボウ"],
        ["犬が庭で**暴れて**います。", "いぬ が にわ で **あばれて** います。", "The dog is running wild in the yard.", "N2", undefined, "あば.れる"],
        ["記者が政治家の秘密を**暴露**しました。", "きしゃ が せいじか の ひみつ を **ばくろ** しました。", "The reporter exposed the politician's secret.", "N1", undefined, "バク"],
        ["警察が犯人のうそを**暴き**ました。", "けいさつ が はんにん の うそ を **あばき**ました。", "The police exposed the criminal's lie.", "N1", undefined, "あば.く"],
      ]),
      bk("替", "N2", "exchange, replace", "タイ", "か.える か.わる", [
        ["シャツを新しい物に**替え**ました。", "シャツ を あたらしい もの に **かえ**ました。", "I changed into a new shirt.", "N3", undefined, "か.える"],
        ["夜は二人で**交替**で働きます。", "よる は ふたり で **こうたい** で はたらきます。", "At night the two of us work in shifts.", "N2", undefined, "タイ"],
        ["四月から担当者が**替わり**ました。", "しがつ から たんとうしゃ が **かわり**ました。", "The person in charge changed from April.", "N2", undefined, "か.わる"],
        ["家に帰って服を**着替え**ます。", "いえ に かえって ふく を **きがえ**ます。", "I go home and change my clothes.", "N2", undefined, "か.える"],
        ["古い物と新しい物を**入れ替え**ます。", "ふるい もの と あたらしい もの を **いれかえ**ます。", "I replace the old things with new ones.", "N2", undefined, "か.える"],
        ["予定を**組み替え**ました。", "よてい を **くみかえ**ました。", "I rearranged my schedule.", "N2", undefined, "か.える"],
        ["銀行の**為替**で送金しました。", "ぎんこう の **かわせ** で そうきん しました。", "I sent money by bank transfer.", "N2", undefined, "*"],
      ], [
        ["両替", "りょうがえ", "money exchange", "N3", "銀行でお金を**両替**します。", "I exchange money at the bank.", "ぎんこう で おかね を **りょうがえ** します。"],
      ]),
    ],
  },
  {
    n: 90,
    note: "shapes that wrap around something",
    items: [
      bk("包", "N2", "wrap", "ホウ", "つつ.む", [
        ["プレゼントを紙で**包み**ます。", "プレゼント を かみ で **つつみ**ます。", "I wrap the present in paper.", "N3", undefined, "つつ.む"],
        ["新しい**包丁**を買いました。", "あたらしい **ほうちょう** を かいました。", "I bought a new kitchen knife.", "N2", undefined, "ホウ"],
        ["きれいに**包装**してください。", "きれい に **ほうそう** して ください。", "Please wrap it nicely.", "N2", undefined, "ホウ"],
        ["指に**包帯**を巻きます。", "ゆび に **ほうたい** を まきます。", "I wrap a bandage around my finger.", "N2", undefined, "ホウ"],
        ["この計画は問題を**内包**しています。", "この けいかく は もんだい を **ないほう** して います。", "This plan contains inherent problems.", "N2", undefined, "ホウ"],
      ], [
        ["小包", "こづつみ", "parcel, package", "N3", "**小包**が届きました。", "A parcel has arrived.", "**こづつみ** が とどきました。"],
      ]),
      bk("匹", "N2", "counter for small animals", "ヒツ", "ひき", [
        ["犬を**二匹**飼っています。", "いぬ を **にひき** かって います。", "I keep two dogs.", "N3", undefined, "ひき"],
        ["彼の実力はプロに**匹敵**します。", "かれ の じつりょく は プロ に **ひってき** します。", "His ability rivals a professional's.", "N1", undefined, "ヒツ"],
      ]),
      bk("区", "N2", "ward, district, section", "ク", "", [
        ["二つの色の**区別**がつきません。", "ふたつ の いろ の **くべつ** が つきません。", "I can't tell the two colors apart.", "N3", undefined, "ク"],
        ["私は**港区**に住んでいます。", "わたし は **みなとく** に すんで います。", "I live in Minato Ward.", "N2", undefined, "ク"],
        ["**区役所**で書類をもらいました。", "**くやくしょ** で しょるい を もらいました。", "I got the documents at the ward office.", "N2", undefined, "ク"],
        ["この**区域**は駐車禁止です。", "この **くいき** は ちゅうしゃ きんし です。", "Parking is prohibited in this zone.", "N2", undefined, "ク"],
        ["文を**区切って**読みます。", "ぶん を **くぎって** よみます。", "I read the sentence in separate chunks.", "N2", undefined, "ク"],
        ["ごみを**区分**して出します。", "ごみ を **くぶん** して だします。", "I sort the garbage before putting it out.", "N2", undefined, "ク"],
      ], [
        ["地区", "ちく", "district, section", "N3", "この**地区**はとても静かです。", "This district is very quiet.", "この **ちく** は とても しずか です。"],
      ]),
      bk("欧", "N2", "Europe", "オウ", "", [
        ["**欧米**の文化を学びます。", "**おうべい** の ぶんか を まなびます。", "I study Western culture.", "N2", undefined, "オウ"],
        ["来年、**北欧**に行きたいです。", "らいねん、 **ほくおう** に いきたい です。", "I want to go to Northern Europe next year.", "N2", undefined, "オウ"],
      ]),
    ],
  },
  {
    n: 91,
    note: "small marks beside a shape",
    items: [
      bk("占", "N2", "fortune-telling, occupy", "セン", "うらな.う し.める", [
        ["今日の運勢を**占い**ました。", "きょう の うんせい を **うらない**ました。", "I had today's fortune told.", "N2", undefined, "うらな.う"],
        ["弟がソファを**占領**しています。", "おとうと が ソファ を **せんりょう** して います。", "My little brother is taking up the whole sofa.", "N2", undefined, "セン"],
        ["女性が半分を**占めて**います。", "じょせい が はんぶん を **しめて** います。", "Women make up half of them.", "N2", undefined, "し.める"],
        ["店の品物を**買い占め**ました。", "みせ の しなもの を **かいしめ**ました。", "Someone bought up all the goods in the store.", "N2", undefined, "し.める"],
      ]),
      bk("印", "N2", "mark, seal, symbol", "イン", "しるし", [
        ["大事な所に**印**を付けます。", "だいじ な ところ に **しるし** を つけます。", "I put a mark on the important parts.", "N3", undefined, "しるし"],
        ["この書類に**印鑑**を押してください。", "この しょるい に **いんかん** を おして ください。", "Please stamp this document with your seal.", "N2", undefined, "イン"],
        ["**目印**に赤い旗を立てます。", "**めじるし** に あかい はた を たてます。", "I put up a red flag as a marker.", "N2", undefined, "しるし"],
        ["**矢印**の方へ進みます。", "**やじるし** の ほう へ すすみます。", "Go in the direction of the arrow.", "N2", undefined, "しるし"],
        ["会議で**印刷物**を配ります。", "かいぎ で **いんさつぶつ** を くばります。", "We hand out printed materials at the meeting.", "N2", undefined, "イン"],
        ["面接で**好印象**を与えました。", "めんせつ で **こういんしょう** を あたえました。", "I made a good impression at the interview.", "N2", undefined, "イン"],
      ]),
      bk("卵", "N2", "egg", "ラン", "たまご", [
        ["朝ご飯に**卵**を食べます。", "あさごはん に **たまご** を たべます。", "I eat eggs for breakfast.", "N4", undefined, "たまご"],
        ["春になると魚が**産卵**します。", "はる に なる と さかな が **さんらん** します。", "Fish lay their eggs when spring comes.", "N1", undefined, "ラン"],
      ]),
    ],
  },
  {
    n: 92,
    note: "尸 / 戸 flap on top",
    items: [
      bk("戸", "N2", "door", "コ", "と", [
        ["**戸**を閉めてください。", "**と** を しめて ください。", "Please close the door.", "N2", undefined, "と"],
        ["郊外に**一戸建て**を買いました。", "こうがい に **いっこだて** を かいました。", "We bought a detached house in the suburbs.", "N2", undefined, "コ"],
        ["夜は**雨戸**を閉めます。", "よる は **あまど** を しめます。", "I close the storm shutters at night.", "N2", undefined, "と"],
        ["村に古い**井戸**があります。", "むら に ふるい **いど** が あります。", "There is an old well in the village.", "N2", undefined, "と"],
        ["**戸棚**にお皿を入れます。", "**とだな** に おさら を いれます。", "I put the plates in the cupboard.", "N2", undefined, "と"],
        ["**瀬戸物**のお皿を買いました。", "**せともの** の おさら を かいました。", "I bought a china plate.", "N2", undefined, "と"],
      ]),
      bk("届", "N2", "deliver, reach", "", "とど.く とど.ける", [
        ["荷物が**届き**ました。", "にもつ が **とどき**ました。", "The package has arrived.", "N3", undefined, "とど.く"],
      ], [
        ["届ける", "とどける", "to deliver, to report (to)", "N3", "落とし物を交番に**届け**ました。", "I took the lost item to the police box.", "おとしもの を こうばん に **とどけ**ました。"],
      ]),
      bk("層", "N2", "layer, stratum, class", "ソウ", "", [
        ["この歌は若い**層**に人気があります。", "この うた は わかい **そう** に にんき が あります。", "This song is popular with the younger group.", "N2", undefined, "ソウ"],
        ["このビルは**高層**ビルです。", "この ビル は **こうそう** ビル です。", "This is a high-rise building.", "N2", undefined, "ソウ"],
        ["**大層**立派な家ですね。", "**たいそう** りっぱ な いえ です ね。", "What a very splendid house!", "N2", undefined, "ソウ"],
      ], [
        ["一層", "いっそう", "much more, still more", "N3", "昨日より**一層**寒くなりました。", "It has gotten even colder than yesterday.", "きのう より **いっそう** さむく なりました。"],
      ]),
    ],
  },
  {
    n: 93,
    note: "mountains, coasts and water",
    items: [
      bk("岩", "N2", "rock, crag", "ガン", "いわ", [
        ["海に大きな**岩**があります。", "うみ に おおきな **いわ** が あります。", "There is a big rock in the sea.", "N3", undefined, "いわ"],
        ["この山には大きな**岩石**が多いです。", "この やま には おおきな **がんせき** が おおい です。", "There are many large rocks on this mountain.", "N1", undefined, "ガン"],
      ]),
      bk("岸", "N2", "shore, bank", "ガン", "きし", [
        ["**海岸**を散歩しました。", "**かいがん** を さんぽ しました。", "I walked along the coast.", "N3", undefined, "ガン"],
      ], [
        ["岸", "きし", "shore, bank", "N3", "川の**岸**に木がたくさんあります。", "There are many trees on the riverbank.", "かわ の **きし** に き が たくさん あります。"],
      ]),
      bk("島", "N2", "island", "トウ", "しま", [
        ["小さい**島**に行きました。", "ちいさい **しま** に いきました。", "I went to a small island.", "N2", undefined, "しま"],
        ["**半島**の先に灯台があります。", "**はんとう** の さき に とうだい が あります。", "There is a lighthouse at the tip of the peninsula.", "N2", undefined, "トウ"],
        ["日本**列島**は細長いです。", "にほん **れっとう** は ほそながい です。", "The Japanese archipelago is long and narrow.", "N2", undefined, "トウ"],
      ]),
      bk("州", "N2", "state, province", "シュウ", "す", [
        ["アメリカには五十の**州**があります。", "アメリカ には ごじゅう の **しゅう** が あります。", "America has fifty states.", "N3", undefined, "シュウ"],
        ["川の真ん中に**中州**があります。", "かわ の まんなか に **なかす** が あります。", "There is a sandbank in the middle of the river.", "N1", undefined, "す"],
      ]),
    ],
  },
  {
    n: 94,
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
        ["**畳**の部屋で寝ます。", "**たたみ** の へや で ねます。", "I sleep in a tatami room.", "N2", undefined, "たたみ"],
        ["私の部屋は**六畳**です。", "わたし の へや は **ろくじょう** です。", "My room is six tatami mats in size.", "N2", undefined, "ジョウ"],
        ["服を**折り畳んで**しまいます。", "ふく を **おりたたんで** しまいます。", "I fold the clothes and put them away.", "N2", undefined, "たた.む"],
      ]),
      bk("療", "N2", "heal, cure", "リョウ", "", [
        ["病院で**治療**を受けました。", "びょういん で **ちりょう** を うけました。", "I received treatment at the hospital.", "N3", undefined, "リョウ"],
      ], [
        ["医療", "いりょう", "medical care, medicine", "N3", "将来は**医療**の仕事をしたいです。", "In the future I want to work in medicine.", "しょうらい は **いりょう** の しごと を したい です。"],
      ]),
    ],
  },
  {
    n: 95,
    note: "頁 head on the right",
    items: [
      bk("順", "N2", "order, turn", "ジュン", "", [
        ["**順番**に並んでください。", "**じゅんばん** に ならんで ください。", "Please line up in order.", "N2", undefined, "ジュン"],
        ["**順序**を守ってください。", "**じゅんじょ** を まもって ください。", "Please keep to the order.", "N2", undefined, "ジュン"],
        ["試合の**順位**が決まりました。", "しあい の **じゅんい** が きまりました。", "The rankings for the competition have been decided.", "N2", undefined, "ジュン"],
        ["駅までの**道順**を教えます。", "えき まで の **みちじゅん** を おしえます。", "I explain the route to the station.", "N2", undefined, "ジュン"],
        ["新しい生活に**順応**しました。", "あたらしい せいかつ に **じゅんのう** しました。", "I adapted to my new life.", "N2", undefined, "ジュン"],
        ["**天候不順**で野菜が高いです。", "**てんこうふじゅん** で やさい が たかい です。", "Vegetables are expensive due to the unseasonable weather.", "N2", undefined, "ジュン"],
      ], [
        ["順調", "じゅんちょう", "doing well", "N3", "仕事は**順調**に進んでいます。", "Work is progressing smoothly.", "しごと は **じゅんちょう** に すすんで います。"],
      ]),
      bk("預", "N2", "deposit, entrust", "ヨ", "あず.ける あず.かる", [
        ["銀行にお金を**預け**ます。", "ぎんこう に おかね を **あずけ**ます。", "I deposit money at the bank.", "N3", undefined, "あず.ける"],
        ["毎月、給料の一部を**預金**しています。", "まいつき、 きゅうりょう の いちぶ を **よきん** して います。", "Every month I save part of my salary in the bank.", "N2", undefined, "ヨ"],
        ["友だちの荷物を**預かり**ます。", "ともだち の にもつ を **あずかり**ます。", "I look after my friend's luggage.", "N2", undefined, "あず.かる"],
      ]),
      bk("領", "N2", "territory, receive", "リョウ", "", [
        ["**大統領**がテレビに出ました。", "**だいとうりょう** が テレビ に でました。", "The president appeared on TV.", "N2", undefined, "リョウ"],
        ["**領収書**をください。", "**りょうしゅうしょ** を ください。", "A receipt, please.", "N2", undefined, "リョウ"],
        ["彼は説明の**要領**がいいです。", "かれ は せつめい の **ようりょう** が いい です。", "He is good at explaining things clearly.", "N2", undefined, "リョウ"],
        ["**領事**館で書類をもらいます。", "**りょうじ**かん で しょるい を もらいます。", "I get documents at the consulate.", "N2", undefined, "リョウ"],
      ]),
      bk("額", "N2", "amount, forehead, frame", "ガク", "ひたい", [
        ["**金額**を確かめてください。", "**きんがく** を たしかめて ください。", "Please check the amount.", "N3", undefined, "ガク"],
        ["暑くて**額**に汗をかきました。", "あつくて **ひたい** に あせ を かきました。", "It was hot, and sweat formed on my forehead.", "N2", undefined, "ひたい"],
        ["セールで**半額**になりました。", "セール で **はんがく** に なりました。", "It became half price in the sale.", "N2", undefined, "ガク"],
        ["旅行の代金を**全額**払いました。", "りょこう の だいきん を **ぜんがく** はらいました。", "I paid the full cost of the trip.", "N2", undefined, "ガク"],
        ["工事に**多額**のお金がかかります。", "こうじ に **たがく** の おかね が かかります。", "The construction costs a large amount of money.", "N2", undefined, "ガク"],
      ]),
    ],
  },
  {
    n: 96,
    note: "攵 on the right",
    items: [
      bk("改", "N2", "reform, renew", "カイ", "あらた.める あらた.まる", [
        ["会社は仕事のやり方を**改善**しました。", "かいしゃ は しごと の やりかた を **かいぜん** しました。", "The company improved its way of working.", "N3", undefined, "カイ"],
        ["生活を**改め**ます。", "せいかつ を **あらため**ます。", "I'll change my lifestyle.", "N2", undefined, "あらた.める"],
        ["去年、法律が**改正**されました。", "きょねん、 ほうりつ が **かいせい** されました。", "The law was amended last year.", "N2", undefined, "カイ"],
        ["古い家を**改造**しました。", "ふるい いえ を **かいぞう** しました。", "I remodeled an old house.", "N2", undefined, "カイ"],
        ["年が**改まって**、気持ちも新しくなりました。", "とし が **あらたまって**、 きもち も あたらしく なりました。", "With the new year, I feel refreshed.", "N1", undefined, "あらた.まる"],
      ]),
      bk("敬", "N2", "respect", "ケイ", "うやま.う", [
        ["先生に**敬語**を使います。", "せんせい に **けいご** を つかいます。", "I use polite language with my teacher.", "N2", undefined, "ケイ"],
        ["九月に**敬老**の日があります。", "くがつ に **けいろう** の ひ が あります。", "Respect for the Aged Day is in September.", "N2", undefined, "ケイ"],
        ["昔から人々は神を**敬って**きました。", "むかし から ひとびと は かみ を **うやまって** きました。", "People have revered the gods since long ago.", "N1", undefined, "うやま.う"],
      ], [
        ["敬意", "けいい", "respect, honor", "N3", "先生に**敬意**を持っています。", "I have respect for my teacher.", "せんせい に **けいい** を もって います。"],
      ]),
    ],
  },
  {
    n: 97,
    note: "舟 boat",
    items: [
      bk("舟", "N2", "boat", "シュウ", "ふね", [
        ["小さい**舟**で川を渡りました。", "ちいさい **ふね** で かわ を わたりました。", "I crossed the river in a small boat.", "N2", undefined, "ふね"],
        ["ライバル同士が**呉越同舟**で協力しました。", "ライバル どうし が **ごえつどうしゅう** で きょうりょく しました。", "The rivals worked together, being in the same boat.", "N1", undefined, "シュウ"],
      ]),
      bk("航", "N2", "navigate, sail, fly", "コウ", "", [
        ["日本**航空**の飛行機に乗ります。", "にほん **こうくう** の ひこうき に のります。", "I take a Japan Airlines plane.", "N3", undefined, "コウ"],
        ["台風で船が**欠航**しました。", "たいふう で ふね が **けっこう** しました。", "The boat was cancelled because of the typhoon.", "N2", undefined, "コウ"],
      ], [
        ["航海", "こうかい", "sail, voyage", "N3", "長い**航海**に出ます。", "We set out on a long voyage.", "ながい **こうかい** に でます。"],
      ]),
      bk("般", "N2", "general, carrier", "ハン", "", [
        ["**一般**の人も入れます。", "**いっぱん** の ひと も はいれます。", "General visitors can enter too.", "N3", undefined, "ハン"],
        ["テストは**全般**によくできました。", "テスト は **ぜんぱん** に よく できました。", "Overall, I did well on the test.", "N2", undefined, "ハン"],
      ], [
        ["一般的", "いっぱんてき", "general, typical", "N3", "それは**一般的**な意見です。", "That's a common opinion.", "それ は **いっぱんてき** な いけん です。"],
      ]),
      bk("船", "N3", "ship", "セン", "ふね ふな", [
        ["**船**で島に行きます。", "**ふね** で しま に いきます。", "I go to the island by ship.", "N2", undefined, "ふね"],
        ["港に大きな**客船**が着きました。", "みなと に おおきな **きゃくせん** が つきました。", "A large passenger ship arrived at the port.", "N2", undefined, "セン"],
        ["**船便**で荷物を送ります。", "**ふなびん** で にもつ を おくります。", "I send the package by sea mail.", "N2", undefined, "ふな"],
      ]),
    ],
  },
  {
    n: 98,
    note: "走 and 足 on the left",
    items: [
      bk("超", "N2", "exceed, super-", "チョウ", "こ.える こ.す", [
        ["気温が三十度を**超え**ました。", "きおん が さんじゅうど を **こえ**ました。", "The temperature went over thirty degrees.", "N3", undefined, "こ.える"],
        ["荷物が重さを**超過**しました。", "にもつ が おもさ を **ちょうか** しました。", "The luggage went over the weight limit.", "N2", undefined, "チョウ"],
        ["参加者は百人を**超す**でしょう。", "さんかしゃ は ひゃくにん を **こす** でしょう。", "There will probably be over a hundred participants.", "N2", undefined, "こ.す"],
      ]),
      bk("跡", "N2", "trace, mark, ruins", "セキ", "あと", [
        ["雪に足の**跡**があります。", "ゆき に あし の **あと** が あります。", "There are footprints in the snow.", "N3", undefined, "あと"],
        ["古い城の**遺跡**を見学しました。", "ふるい しろ の **いせき** を けんがく しました。", "I toured the ruins of an old castle.", "N2", undefined, "セキ"],
        ["砂に**足跡**が残っています。", "すな に **あしあと** が のこって います。", "Footprints remain in the sand.", "N2", undefined, "あと"],
      ]),
      bk("踊", "N2", "dance", "ヨウ", "おど.る", [
        ["みんなで**踊り**ましょう。", "みんな で **おどり**ましょう。", "Let's all dance.", "N3", undefined, "おど.る"],
        ["姉は**日本舞踊**を習っています。", "あね は **にほんぶよう** を ならって います。", "My sister is learning traditional Japanese dance.", "N1", undefined, "ヨウ"],
      ]),
      bk("通", "N5", "pass, commute", "ツウ", "とお.る かよ.う", [
        ["この道は車がよく**通り**ます。", "この みち は くるま が よく **とおり**ます。", "Cars often pass along this road.", "N4", undefined, "とお.る"],
        ["毎日電車で**通勤**しています。", "まいにち でんしゃ で **つうきん** して います。", "I commute by train every day.", "N3", undefined, "ツウ"],
        ["毎日、学校に**通って**います。", "まいにち、 がっこう に **かよって** います。", "I go to school every day.", "N4", undefined, "かよ.う"],
      ]),
    ],
  },
  {
    n: 99,
    note: "十 built into the shape",
    items: [
      bk("卒", "N2", "graduate", "ソツ", "", [
        ["三月に大学を**卒業**します。", "さんがつ に だいがく を **そつぎょう** します。", "I graduate from university in March.", "N3", undefined, "ソツ"],
        ["兄は**新卒**で銀行に入りました。", "あに は **しんそつ** で ぎんこう に はいりました。", "My brother joined a bank straight out of university.", "N2", undefined, "ソツ"],
      ]),
      bk("協", "N2", "cooperate", "キョウ", "", [
        ["みんなで**協力**しましょう。", "みんな で **きょうりょく** しましょう。", "Let's all work together.", "N3", undefined, "キョウ"],
      ], [
        ["協議", "きょうぎ", "discussion, conference", "N3", "みんなで**協議**します。", "We discuss it together.", "みんな で **きょうぎ** します。"],
        ["協調", "きょうちょう", "co-operation, conciliation, harmony", "N3", "他の国と**協調**します。", "We cooperate with other countries.", "ほか の くに と **きょうちょう** します。"],
      ]),
    ],
  },
  {
    n: 100,
    note: "又 shapes",
    items: [
      bk("双", "N2", "pair, both", "ソウ", "ふた", [
        ["彼らは**双子**です。", "かれら は **ふたご** です。", "They are twins.", "N3", undefined, "ふた"],
        ["**双方**の意見を聞きます。", "**そうほう** の いけん を ききます。", "I listen to the opinions of both sides.", "N2", undefined, "ソウ"],
      ]),
      bk("厚", "N2", "thick, kind", "コウ", "あつ.い", [
        ["この本は**厚い**です。", "この ほん は **あつい** です。", "This book is thick.", "N3", undefined, "あつ.い"],
        ["**厚かましい**お願いですみません。", "**あつかましい** おねがい で すみません。", "Sorry for the cheeky request.", "N2", undefined, "あつ.い"],
        ["皆様の**ご厚意**に感謝します。", "みなさま の **ごこうい** に かんしゃ します。", "I am grateful for everyone's kindness.", "N1", undefined, "コウ"],
      ]),
    ],
  },
  {
    n: 101,
    note: "幺 threads inside",
    items: [
      bk("孫", "N2", "grandchild", "ソン", "まご", [
        ["祖母には**孫**が三人います。", "そぼ には **まご** が さんにん います。", "My grandmother has three grandchildren.", "N3", undefined, "まご"],
        ["**子孫**に土地を残します。", "**しそん** に とち を のこします。", "I'll leave the land to my descendants.", "N2", undefined, "ソン"],
      ]),
      bk("幼", "N2", "infancy, young", "ヨウ", "おさな.い", [
        ["これは**幼い**頃の写真です。", "これ は **おさない** ころ の しゃしん です。", "This is a photo from when I was little.", "N3", undefined, "おさな.い"],
        ["子どもは**幼稚園**に行っています。", "こども は **ようちえん** に いって います。", "My child goes to kindergarten.", "N2", undefined, "ヨウ"],
        ["**幼児**が公園で遊んでいます。", "**ようじ** が こうえん で あそんで います。", "Small children are playing in the park.", "N2", undefined, "ヨウ"],
      ]),
    ],
  },
  {
    n: 102,
    note: "long sweeping bottom strokes",
    items: [
      bk("承", "N2", "consent, hear (humble)", "ショウ", "うけたまわ.る", [
        ["はい、**承知**しました。", "はい、 **しょうち** しました。", "Yes, understood.", "N2", undefined, "ショウ"],
        ["部長の**承認**をもらいました。", "ぶちょう の **しょうにん** を もらいました。", "I got the manager's approval.", "N2", undefined, "ショウ"],
        ["ご注文を**承り**ました。", "ごちゅうもん を **うけたまわり**ました。", "We have received your order.", "N2", undefined, "うけたまわ.る"],
      ]),
      bk("延", "N2", "extend, postpone", "エン", "の.びる の.ばす", [
        ["会議が来週に**延期**になりました。", "かいぎ が らいしゅう に **えんき** に なりました。", "The meeting was postponed to next week.", "N3", undefined, "エン"],
        ["会議を三十分**延長**します。", "かいぎ を さんじゅっぷん **えんちょう** します。", "We will extend the meeting by thirty minutes.", "N2", undefined, "エン"],
      ], [
        ["延ばす", "のばす", "to extend, to stretch, to reach out", "N3", "出発を一日**延ばし**ました。", "I postponed my departure by one day.", "しゅっぱつ を いちにち **のばし**ました。"],
        ["延びる", "のびる", "to be extended, to be delayed", "N3", "電車が遅れて到着が**延び**ました。", "The train was late so the arrival was delayed.", "でんしゃ が おくれて とうちゃく が **のび**ました。"],
      ]),
    ],
  },
  {
    n: 103,
    note: "few strokes, easy to confuse",
    items: [
      bk("比", "N2", "compare, ratio", "ヒ", "くら.べる", [
        ["兄と**比べる**と私は背が低いです。", "あに と **くらべる** と わたし は せ が ひくい です。", "Compared with my brother, I'm short.", "N3", undefined, "くら.べる"],
        ["今日は**比較的**暖かいです。", "きょう は **ひかくてき** あたたかい です。", "Today is comparatively warm.", "N2", undefined, "ヒ"],
      ], [
        ["比較", "ひかく", "comparison", "N3", "二つの店を**比較**します。", "I compare the two stores.", "ふたつ の みせ を **ひかく** します。"],
      ]),
      bk("毛", "N2", "hair, fur, wool", "モウ", "け", [
        ["猫の**毛**が服に付きました。", "ねこ の **け** が ふく に つきました。", "Cat hair got on my clothes.", "N3", undefined, "け"],
        ["**毛糸**で手袋を編みます。", "**けいと** で てぶくろ を あみます。", "I knit gloves out of wool.", "N2", undefined, "け"],
        ["**毛皮**のコートは暖かいです。", "**けがわ** の コート は あたたかい です。", "Fur coats are warm.", "N2", undefined, "け"],
        ["**羊毛**のセーターを買いました。", "**ようもう** の セーター を かいました。", "I bought a wool sweater.", "N2", undefined, "モウ"],
      ], [
        ["髪の毛", "かみのけ", "hair (head)", "N3", "**髪の毛**を短く切りました。", "I cut my hair short.", "**かみのけ** を みじかく きりました。"],
        ["毛布", "もうふ", "blanket", "N3", "寒いので**毛布**を使います。", "It's cold, so I use a blanket.", "さむい ので **もうふ** を つかいます。"],
      ]),
      bk("手", "N5", "hand", "シュ", "て", [
        ["**手**を洗います。", "**て** を あらいます。", "I wash my hands.", "N5", undefined, "て"],
        ["彼は有名な野球**選手**です。", "かれ は ゆうめい な やきゅう **せんしゅ** です。", "He is a famous baseball player.", "N3", undefined, "シュ"],
      ]),
      bk("宅", "N3", "home, house", "タク", "", [
        ["**お宅**はどちらですか。", "**おたく** は どちら です か。", "Where is your home?", "N3", undefined, "タク"],
        ["**帰宅**は七時ごろです。", "**きたく** は しちじ ごろ です。", "I get home around seven.", "N3", undefined, "タク"],
      ]),
      bk("甘", "N2", "sweet, lenient", "カン", "あま.い あま.やかす", [
        ["このケーキは**甘い**です。", "この ケーキ は **あまい** です。", "This cake is sweet.", "N4", undefined, "あま.い"],
        ["子どもを**甘やかし**ません。", "こども を **あまやかし**ません。", "I don't spoil my children.", "N2", undefined, "あま.やかす"],
        ["このジュースには**甘味料**が入っています。", "この ジュース には **かんみりょう** が はいって います。", "This juice contains sweetener.", "N1", undefined, "カン"],
      ]),
    ],
  },
  {
    n: 104,
    note: "angular old-fashioned shapes",
    items: [
      bk("武", "N2", "warrior, military", "ブ ム", "", [
        ["博物館で昔の**武器**を見ました。", "はくぶつかん で むかし の **ぶき** を みました。", "I saw old weapons at the museum.", "N3", undefined, "ブ"],
        ["昔、**武士**は刀を持っていました。", "むかし、 **ぶし** は かたな を もって いました。", "Long ago, samurai carried swords.", "N2", undefined, "ブ"],
        ["彼は**武道**を習っています。", "かれ は **ぶどう** を ならって います。", "He is learning martial arts.", "N2", undefined, "ブ"],
        ["お祭りで**武者**の格好をしました。", "おまつり で **むしゃ** の かっこう を しました。", "I dressed up as a warrior at the festival.", "N1", undefined, "ム"],
      ]),
      bk("歴", "N2", "history, career", "レキ", "", [
        ["日本の**歴史**に興味があります。", "にほん の **れきし** に きょうみ が あります。", "I'm interested in Japanese history.", "N3", undefined, "レキ"],
        ["**履歴書**を書きました。", "**りれきしょ** を かきました。", "I wrote my résumé.", "N2", undefined, "レキ"],
      ], [
        ["学歴", "がくれき", "academic background", "N3", "**学歴**より経験が大事です。", "Experience matters more than academic background.", "**がくれき** より けいけん が だいじ です。"],
      ]),
      bk("殿", "N2", "palace, (honorific) Mr.", "デン テン", "との どの", [
        ["ヨーロッパの古い**宮殿**を見学しました。", "ヨーロッパ の ふるい **きゅうでん** を けんがく しました。", "I toured an old palace in Europe.", "N1", undefined, "デン"],
        ["書類に「田中**殿**」と書きました。", "しょるい に 「たなか **どの**」 と かきました。", "I wrote “Mr. Tanaka” on the document.", "N2", undefined, "どの"],
        ["昔の**御殿**が今も残っています。", "むかし の **ごてん** が いま も のこって います。", "The old palace still remains today.", "N1", undefined, "テン"],
        ["昔、ここに**殿様**のお城がありました。", "むかし、 ここ に **とのさま** の おしろ が ありました。", "Long ago, the lord's castle stood here.", "N1", undefined, "との"],
      ]),
    ],
  },
  {
    n: 105,
    note: "nearly the same top half",
    items: [
      bk("毒", "N2", "poison", "ドク", "", [
        ["このキノコには**毒**があります。", "この キノコ には **どく** が あります。", "This mushroom has poison in it.", "N3", undefined, "ドク"],
        ["食事の前に手を**消毒**します。", "しょくじ の まえ に て を **しょうどく** します。", "I disinfect my hands before eating.", "N2", undefined, "ドク"],
      ], [
        ["気の毒", "きのどく", "pitiful, a pity", "N3", "彼は**気の毒**な人です。", "He is a pitiful person.", "かれ は **きのどく** な ひと です。"],
      ]),
      bk("麦", "N2", "wheat, barley", "バク", "むぎ", [
        ["畑に**麦**が育っています。", "はたけ に **むぎ** が そだって います。", "Wheat is growing in the field.", "N2", undefined, "むぎ"],
        ["夏は**麦茶**を飲みます。", "なつ は **むぎちゃ** を のみます。", "I drink barley tea in summer.", "N2", undefined, "むぎ"],
        ["ビールは**麦芽**から作られます。", "ビール は **ばくが** から つくられます。", "Beer is made from malt.", "N1", undefined, "バク"],
      ], [
        ["蕎麦", "そば", "soba (buckwheat noodles)", "N3", "昼に**蕎麦**を食べました。", "I ate soba for lunch.", "ひる に **そば** を たべました。"],
      ]),
    ],
  },
  {
    n: 106,
    note: "small standalone shapes",
    items: [
      bk("虫", "N2", "insect, bug", "チュウ", "むし", [
        ["部屋に**虫**が入りました。", "へや に **むし** が はいりました。", "A bug got into the room.", "N3", undefined, "むし"],
        ["夏休みに**昆虫**を集めました。", "なつやすみ に **こんちゅう** を あつめました。", "I collected insects during the summer vacation.", "N2", undefined, "チュウ"],
      ], [
        ["虫歯", "むしば", "cavity, tooth decay", "N3", "歯医者で**虫歯**を治しました。", "I had my cavity treated at the dentist.", "はいしゃ で **むしば** を なおしました。"],
      ]),
      bk("缶", "N2", "can, tin", "カン", "", [
        ["**缶**ビールを買いました。", "**かん** ビール を かいました。", "I bought a canned beer.", "N3", undefined, "カン"],
        ["**缶詰**のスープを温めます。", "**かんづめ** の スープ を あたためます。", "I heat up canned soup.", "N2", undefined, "カン"],
      ]),
    ],
  },
  {
    n: 107,
    note: "farming, stacked shapes",
    items: [
      bk("農", "N2", "farming, agriculture", "ノウ", "", [
        ["祖父は**農業**をしています。", "そふ は **のうぎょう** を して います。", "My grandfather works in farming.", "N3", undefined, "ノウ"],
        ["静かな**農村**で育ちました。", "しずか な **のうそん** で そだちました。", "I grew up in a quiet farming village.", "N2", undefined, "ノウ"],
        ["**農薬**を使わない野菜です。", "**のうやく** を つかわない やさい です。", "These vegetables are grown without pesticides.", "N2", undefined, "ノウ"],
        ["台風で**農作物**が倒れました。", "たいふう で **のうさくぶつ** が たおれました。", "The typhoon flattened the crops.", "N2", undefined, "ノウ"],
        ["この地方の**農産物**は米です。", "この ちほう の **のうさんぶつ** は こめ です。", "This region's produce is rice.", "N2", undefined, "ノウ"],
        ["**農園**でいちごを取りました。", "**のうえん** で いちご を とりました。", "We picked strawberries at the farm.", "N2", undefined, "ノウ"],
      ], [
        ["農家", "のうか", "farmer, farm family", "N3", "祖父は**農家**です。", "My grandfather is a farmer.", "そふ は **のうか** です。"],
        ["農民", "のうみん", "farmers, peasants", "N3", "**農民**が畑で働いています。", "Farmers are working in the fields.", "**のうみん** が はたけ で はたらいて います。"],
      ]),
      bk("量", "N2", "quantity, amount", "リョウ", "はか.る", [
        ["ご飯の**量**が多いです。", "ごはん の **りょう** が おおい です。", "The portion of rice is large.", "N3", undefined, "リョウ"],
        ["荷物の**重量**を調べます。", "にもつ の **じゅうりょう** を しらべます。", "I check the weight of the luggage.", "N2", undefined, "リョウ"],
        ["このかばんは**容量**が大きいです。", "この かばん は **ようりょう** が おおきい です。", "This bag has a large capacity.", "N2", undefined, "リョウ"],
        ["テレビの**音量**を下げます。", "テレビ の **おんりょう** を さげます。", "I turn down the TV volume.", "N2", undefined, "リョウ"],
        ["材料の**分量**を量ります。", "ざいりょう の **ぶんりょう** を はかります。", "I measure the amounts of the ingredients.", "N2", undefined, "リョウ"],
        ["品物の**数量**を数えます。", "しなもの の **すうりょう** を かぞえます。", "I count the quantity of goods.", "N2", undefined, "リョウ"],
        ["工事には**多量**の水が必要です。", "こうじ には **たりょう** の みず が ひつよう です。", "The construction requires a large quantity of water.", "N2", undefined, "リョウ"],
      ], [
        ["大量", "たいりょう", "large quantity; mass", "N3", "**大量**の紙を注文しました。", "I ordered a large quantity of paper.", "**たいりょう** の かみ を ちゅうもん しました。"],
        ["量る", "はかる", "to measure, to weigh", "N3", "毎朝、体重を**量り**ます。", "I weigh myself every morning.", "まいあさ、 たいじゅう を **はかり**ます。"],
      ]),
      bk("耕", "N2", "till, plow", "コウ", "たがや.す", [
        ["畑を**耕し**ます。", "はたけ を **たがやし**ます。", "I plow the field.", "N2", undefined, "たがや.す"],
        ["村の**耕地**が広がっています。", "むら の **こうち** が ひろがって います。", "The village farmland stretches out.", "N2", undefined, "コウ"],
      ]),
      bk("豊", "N2", "abundant, rich", "ホウ", "ゆた.か", [
        ["この国は自然が**豊か**です。", "この くに は しぜん が **ゆたか** です。", "This country is rich in nature.", "N3", undefined, "ゆた.か"],
      ], [
        ["豊富", "ほうふ", "abundance, plenty", "N3", "店には品物が**豊富**にあります。", "The shop has an abundance of goods.", "みせ には しなもの が **ほうふ** に あります。"],
      ]),
    ],
  },
  {
    n: 108,
    note: "隹 bird inside",
    items: [
      bk("雇", "N2", "employ, hire", "コ", "やと.う", [
        ["店は新しい人を**雇い**ました。", "みせ は あたらしい ひと を **やとい**ました。", "The shop hired a new person.", "N3", undefined, "やと.う"],
        ["会社は新しく十人を**雇用**しました。", "かいしゃ は あたらしく じゅうにん を **こよう** しました。", "The company took on ten new employees.", "N2", undefined, "コ"],
      ]),
      bk("隻", "N2", "counter for ships", "セキ", "", [
        ["港に船が**三隻**あります。", "みなと に ふね が **さんせき** あります。", "There are three ships in the harbor.", "N1", undefined, "セキ"],
      ]),
    ],
  },
  {
    n: 109,
    note: "the gate shape itself",
    items: [
      bk("門", "N2", "gate", "モン", "かど", [
        ["学校の**門**は八時に開きます。", "がっこう の **もん** は はちじ に あきます。", "The school gate opens at eight.", "N2", undefined, "モン"],
        ["学校の**正門**で待ちます。", "がっこう の **せいもん** で まちます。", "I'll wait at the school's main gate.", "N2", undefined, "モン"],
        ["日本語の**入門**の本を買いました。", "にほんご の **にゅうもん** の ほん を かいました。", "I bought an introductory book on Japanese.", "N2", undefined, "モン"],
        ["兄は**名門**の学校に入りました。", "あに は **めいもん** の がっこう に はいりました。", "My older brother got into a prestigious school.", "N2", undefined, "モン"],
        ["二人の新しい**門出**を祝います。", "ふたり の あたらしい **かどで** を いわいます。", "We celebrate the couple's new start in life.", "N1", undefined, "かど"],
      ]),
      bk("問", "N4", "question, problem", "モン", "と.う", [
        ["この**問題**は難しいです。", "この **もんだい** は むずかしい です。", "This problem is difficult.", "N4", undefined, "モン"],
        ["何か**質問**がありますか。", "なにか **しつもん** が あります か。", "Do you have any questions?", "N4", undefined, "モン"],
        ["この事故の責任が**問われて**います。", "この じこ の せきにん が **とわれて** います。", "Responsibility for this accident is being questioned.", "N2", undefined, "と.う"],
      ]),
      bk("開", "N5", "open", "カイ", "あ.ける ひら.く", [
        ["ドアを**開け**ます。", "ドア を **あけ**ます。", "I open the door.", "N5", undefined, "あ.ける"],
        ["会議は十時に**開始**します。", "かいぎ は じゅうじ に **かいし** します。", "The meeting starts at ten.", "N3", undefined, "カイ"],
        ["駅前に新しい店が**開き**ました。", "えきまえ に あたらしい みせ が **ひらき**ました。", "A new shop opened in front of the station.", "N3", undefined, "ひら.く"],
      ]),
    ],
  },
  {
    n: 110,
    note: "symmetrical stacked shapes",
    items: [
      bk("革", "N2", "leather, reform", "カク", "かわ", [
        ["**革**のかばんを買いました。", "**かわ** の かばん を かいました。", "I bought a leather bag.", "N3", undefined, "かわ"],
      ], [
        ["改革", "かいかく", "reform", "N3", "政府は**改革**を進めています。", "The government is pushing reform.", "せいふ は **かいかく** を すすめて います。"],
      ]),
      bk("黄", "N2", "yellow", "コウ オウ", "き こ", [
        ["**黄色い**花が咲いています。", "**きいろい** はな が さいて います。", "Yellow flowers are blooming.", "N4", undefined, "き"],
        ["春になると**黄砂**が飛んできます。", "はる に なる と **こうさ** が とんで きます。", "When spring comes, yellow dust blows in.", "N1", undefined, "コウ"],
        ["このケーキには**卵黄**だけを使います。", "この ケーキ には **らんおう** だけ を つかいます。", "I use only egg yolks for this cake.", "N1", undefined, "オウ"],
        ["秋の田んぼは**黄金**色に光っています。", "あき の たんぼ は **こがね**いろ に ひかって います。", "In autumn the rice fields shine golden.", "N1", undefined, "こ"],
      ]),
    ],
  },
  {
    n: 111,
    note: "tall, heavily stacked",
    items: [
      bk("骨", "N2", "bone", "コツ", "ほね", [
        ["転んで**骨**を折りました。", "ころんで **ほね** を おりました。", "I fell and broke a bone.", "N3", undefined, "ほね"],
      ], [
        ["骨折", "こっせつ", "bone fracture", "N3", "転んで足を**骨折**しました。", "I fell and broke my leg.", "ころんで あし を **こっせつ** しました。"],
      ]),
      bk("鼻", "N2", "nose", "ビ", "はな", [
        ["犬は**鼻**がいいです。", "いぬ は **はな** が いい です。", "Dogs have a good nose.", "N3", undefined, "はな"],
        ["風邪で**鼻水**が出ます。", "かぜ で **はなみず** が でます。", "I have a runny nose from a cold.", "N2", undefined, "はな"],
        ["耳が痛くて**耳鼻科**に行きました。", "みみ が いたくて **じびか** に いきました。", "My ear hurt, so I went to an ear, nose and throat clinic.", "N1", undefined, "ビ"],
      ]),
      bk("齢", "N2", "age", "レイ", "よわい", [
        ["ここに**年齢**を書いてください。", "ここ に **ねんれい** を かいて ください。", "Please write your age here.", "N3", undefined, "レイ"],
        ["祖母はもう**高齢**です。", "そぼ は もう **こうれい** です。", "My grandmother is elderly now.", "N2", undefined, "レイ"],
        ["ここは**高齢者**の席です。", "ここ は **こうれいしゃ** の せき です。", "These seats are for the elderly.", "N2", undefined, "レイ"],
        ["社会の**高齢化**が進んでいます。", "しゃかい の **こうれいか** が すすんで います。", "Society's population is aging.", "N2", undefined, "レイ"],
        ["村の**最高齢**は九十九歳です。", "むら の **さいこうれい** は きゅうじゅうきゅうさい です。", "The oldest person in the village is ninety-nine.", "N2", undefined, "レイ"],
        ["祖父は**齢**八十を過ぎても元気です。", "そふ は **よわい** はちじゅう を すぎても げんき です。", "My grandfather is still healthy even past the age of eighty.", "N1", undefined, "よわい"],
      ]),
    ],
  },
];
