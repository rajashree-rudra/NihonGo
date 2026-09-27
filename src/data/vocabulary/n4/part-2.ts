// JLPT N4 vocabulary — part 2 of 6. Word list: elzup/jlpt-word-list (MIT). Examples: original.
import type { VocabEntry } from "../../types.ts";

export const WORDS: VocabEntry[] = [
  {
    word: "親", reading: "おや", romaji: "oya", meaning: "parent, parents", pos: "noun", category: "people",
    examples: [
      { ja: "親に電話をかけました。", kana: "おやに でんわを かけました。", romaji: "Oya ni denwa o kakemashita.", en: "I called my parents." },
      { ja: "夏休みに親と旅行します。", kana: "なつやすみに おやと りょこう します。", romaji: "Natsuyasumi ni oya to ryokou shimasu.", en: "I'm going to travel with my parents during summer vacation." },
    ],
  },
  {
    word: "それに", reading: "それに", romaji: "sore ni", meaning: "moreover, besides, on top of that", pos: "conjunction", category: "adverbs",
    examples: [
      { ja: "この店は安いです。それに、おいしいです。", kana: "この みせは やすいです。それに、おいしいです。", romaji: "Kono mise wa yasui desu. Sore ni, oishii desu.", en: "This restaurant is cheap. Besides, the food is tasty." },
      { ja: "今日は雨です。それに、風も強いです。", kana: "きょうは あめです。それに、かぜも つよいです。", romaji: "Kyou wa ame desu. Sore ni, kaze mo tsuyoi desu.", en: "It's raining today. On top of that, the wind is strong too." },
    ],
  },
  {
    word: "西洋", reading: "せいよう", romaji: "seiyou", meaning: "the West, Western countries", pos: "noun", category: "society",
    examples: [
      { ja: "西洋の音楽が好きです。", kana: "せいようの おんがくが すきです。", romaji: "Seiyou no ongaku ga suki desu.", en: "I like Western music." },
      { ja: "この町には西洋の古い建物があります。", kana: "この まちには せいようの ふるい たてものが あります。", romaji: "Kono machi ni wa seiyou no furui tatemono ga arimasu.", en: "There are old Western buildings in this town." },
    ],
  },
  {
    word: "思う", reading: "おもう", romaji: "omou", meaning: "to think, to feel", pos: "verb-u", category: "verbs", masu: "おもいます",
    examples: [
      { ja: "明日は雨が降ると思います。", kana: "あしたは あめが ふると おもいます。", romaji: "Ashita wa ame ga furu to omoimasu.", en: "I think it will rain tomorrow." },
      { ja: "この映画をどう思いますか。", kana: "この えいがを どう おもいますか。", romaji: "Kono eiga o dou omoimasu ka.", en: "What do you think of this movie?" },
    ],
  },
  {
    word: "パート", reading: "パート", romaji: "paato", meaning: "part-time work, part-timer (short for パートタイム)", pos: "noun", category: "school",
    examples: [
      { ja: "母はスーパーでパートをしています。", kana: "ははは スーパーで パートを して います。", romaji: "Haha wa suupaa de paato o shite imasu.", en: "My mother works part-time at a supermarket." },
      { ja: "週に三日、パートで働いています。", kana: "しゅうに みっか、パートで はたらいて います。", romaji: "Shuu ni mikka, paato de hataraite imasu.", en: "I work part-time three days a week." },
    ],
  },
  {
    word: "時代", reading: "じだい", romaji: "jidai", meaning: "age, period, era", pos: "noun", category: "time",
    examples: [
      { ja: "学生時代によくこの店に来ました。", kana: "がくせい じだいに よく この みせに きました。", romaji: "Gakusei jidai ni yoku kono mise ni kimashita.", en: "I often came to this shop in my student days." },
      { ja: "今はスマホの時代です。", kana: "いまは スマホの じだいです。", romaji: "Ima wa sumaho no jidai desu.", en: "Now is the age of smartphones." },
    ],
  },
  {
    word: "申し上げる", reading: "もうしあげる", romaji: "moushiageru", meaning: "to say, to tell (humble)", pos: "verb-ru", category: "verbs", masu: "もうしあげます",
    examples: [
      { ja: "心からお礼を申し上げます。", kana: "こころから おれいを もうしあげます。", romaji: "Kokoro kara orei o moushiagemasu.", en: "I thank you from the bottom of my heart." },
      { ja: "先生に私の考えを申し上げました。", kana: "せんせいに わたしの かんがえを もうしあげました。", romaji: "Sensei ni watashi no kangae o moushiagemashita.", en: "I told my teacher what I thought." },
    ],
  },
  {
    word: "～式", reading: "～しき", romaji: "~shiki", meaning: "~ ceremony; ~ style", pos: "suffix", category: "grammar",
    examples: [
      { ja: "来週、姉の結婚式があります。", kana: "らいしゅう、あねの けっこんしきが あります。", romaji: "Raishuu, ane no kekkonshiki ga arimasu.", en: "My older sister's wedding is next week." },
      { ja: "このトイレは洋式ですか。", kana: "この トイレは ようしきですか。", romaji: "Kono toire wa youshiki desu ka.", en: "Is this toilet Western-style?" },
    ],
  },
  {
    word: "出席", reading: "しゅっせき", romaji: "shusseki", meaning: "attendance; to attend", pos: "suru-verb", category: "school", masu: "しゅっせきします",
    examples: [
      { ja: "明日の会議に出席しますか。", kana: "あしたの かいぎに しゅっせき しますか。", romaji: "Ashita no kaigi ni shusseki shimasu ka.", en: "Will you attend tomorrow's meeting?" },
      { ja: "先生が出席をとりました。", kana: "せんせいが しゅっせきを とりました。", romaji: "Sensei ga shusseki o torimashita.", en: "The teacher took attendance." },
    ],
  },
  {
    word: "～家", reading: "～か", romaji: "~ka", meaning: "-ist, -er (a person who specializes in ~)", pos: "suffix", category: "people",
    examples: [
      { ja: "兄は音楽家です。", kana: "あには おんがくかです。", romaji: "Ani wa ongakuka desu.", en: "My older brother is a musician." },
      { ja: "将来、小説家になりたいです。", kana: "しょうらい、しょうせつかに なりたいです。", romaji: "Shourai, shousetsuka ni naritai desu.", en: "I want to become a novelist in the future." },
    ],
  },
  {
    word: "迎える", reading: "むかえる", romaji: "mukaeru", meaning: "to welcome, to meet, to pick up (someone)", pos: "verb-ru", category: "verbs", masu: "むかえます",
    examples: [
      { ja: "空港へ友達を迎えに行きます。", kana: "くうこうへ ともだちを むかえに いきます。", romaji: "Kuukou e tomodachi o mukae ni ikimasu.", en: "I'm going to the airport to pick up my friend." },
      { ja: "家族がみんなで私を迎えてくれました。", kana: "かぞくが みんなで わたしを むかえて くれました。", romaji: "Kazoku ga minna de watashi o mukaete kuremashita.", en: "My whole family came to welcome me." },
    ],
  },
  {
    word: "触る", reading: "さわる", romaji: "sawaru", meaning: "to touch, to feel", pos: "verb-u", category: "verbs", masu: "さわります",
    examples: [
      { ja: "作品に触らないでください。", kana: "さくひんに さわらないで ください。", romaji: "Sakuhin ni sawaranaide kudasai.", en: "Please don't touch the artwork." },
      { ja: "この犬に触ってもいいですか。", kana: "この いぬに さわっても いいですか。", romaji: "Kono inu ni sawatte mo ii desu ka.", en: "May I touch this dog?" },
    ],
  },
  {
    word: "～建て", reading: "～だて", romaji: "~date", meaning: "~-story (building); built as ~", pos: "suffix", category: "home",
    examples: [
      { ja: "私の家は二階建てです。", kana: "わたしの いえは にかいだてです。", romaji: "Watashi no ie wa nikaidate desu.", en: "My house has two stories." },
      { ja: "駅の前に十階建てのビルができました。", kana: "えきの まえに じゅっかいだての ビルが できました。", romaji: "Eki no mae ni jukkaidate no biru ga dekimashita.", en: "A ten-story building went up in front of the station." },
    ],
  },
  {
    word: "社長", reading: "しゃちょう", romaji: "shachou", meaning: "company president", pos: "noun", category: "school",
    examples: [
      { ja: "社長は今、会議室にいます。", kana: "しゃちょうは いま、かいぎしつに います。", romaji: "Shachou wa ima, kaigishitsu ni imasu.", en: "The president is in the conference room right now." },
      { ja: "父の友達は小さい会社の社長です。", kana: "ちちの ともだちは ちいさい かいしゃの しゃちょうです。", romaji: "Chichi no tomodachi wa chiisai kaisha no shachou desu.", en: "My father's friend is the president of a small company." },
    ],
  },
  {
    word: "動物園", reading: "どうぶつえん", romaji: "doubutsuen", meaning: "zoo", pos: "noun", category: "places",
    examples: [
      { ja: "日曜日に子どもと動物園へ行きました。", kana: "にちようびに こどもと どうぶつえんへ いきました。", romaji: "Nichiyoubi ni kodomo to doubutsuen e ikimashita.", en: "I went to the zoo with my child on Sunday." },
      { ja: "この動物園にパンダはいますか。", kana: "この どうぶつえんに パンダは いますか。", romaji: "Kono doubutsuen ni panda wa imasu ka.", en: "Are there pandas at this zoo?" },
    ],
  },
  {
    word: "捕まえる", reading: "つかまえる", romaji: "tsukamaeru", meaning: "to catch", pos: "verb-ru", category: "verbs", masu: "つかまえます",
    examples: [
      { ja: "弟は公園で虫を捕まえました。", kana: "おとうとは こうえんで むしを つかまえました。", romaji: "Otouto wa kouen de mushi o tsukamaemashita.", en: "My younger brother caught a bug in the park." },
      { ja: "駅の前でタクシーを捕まえましょう。", kana: "えきの まえで タクシーを つかまえましょう。", romaji: "Eki no mae de takushii o tsukamaemashou.", en: "Let's catch a taxi in front of the station." },
    ],
  },
  {
    word: "季節", reading: "きせつ", romaji: "kisetsu", meaning: "season", pos: "noun", category: "time",
    examples: [
      { ja: "一番好きな季節は何ですか。", kana: "いちばん すきな きせつは なんですか。", romaji: "Ichiban suki na kisetsu wa nan desu ka.", en: "What is your favorite season?" },
      { ja: "秋は食べ物がおいしい季節です。", kana: "あきは たべものが おいしい きせつです。", romaji: "Aki wa tabemono ga oishii kisetsu desu.", en: "Autumn is the season when food tastes good." },
    ],
  },
  {
    word: "寄る", reading: "よる", romaji: "yoru", meaning: "to stop by, to drop in", pos: "verb-u", category: "verbs", masu: "よります",
    examples: [
      { ja: "帰りにスーパーに寄ります。", kana: "かえりに スーパーに よります。", romaji: "Kaeri ni suupaa ni yorimasu.", en: "I'll stop by the supermarket on the way home." },
      { ja: "近くに来たら、ぜひ寄ってください。", kana: "ちかくに きたら、ぜひ よって ください。", romaji: "Chikaku ni kitara, zehi yotte kudasai.", en: "If you're ever nearby, please drop in." },
    ],
  },
  {
    word: "決まる", reading: "きまる", romaji: "kimaru", meaning: "to be decided, to be settled", pos: "verb-u", category: "verbs", masu: "きまります",
    examples: [
      { ja: "旅行の日が決まりました。", kana: "りょこうの ひが きまりました。", romaji: "Ryokou no hi ga kimarimashita.", en: "The date of the trip has been decided." },
      { ja: "パーティーの場所はまだ決まっていません。", kana: "パーティーの ばしょは まだ きまって いません。", romaji: "Paatii no basho wa mada kimatte imasen.", en: "The place for the party hasn't been decided yet." },
    ],
  },
  {
    word: "開く", reading: "ひらく", romaji: "hiraku", meaning: "to open; to hold (an event)", pos: "verb-u", category: "verbs", masu: "ひらきます",
    examples: [
      { ja: "教科書の三十ページを開いてください。", kana: "きょうかしょの さんじゅっページを ひらいて ください。", romaji: "Kyoukasho no sanjuppeeji o hiraite kudasai.", en: "Please open your textbook to page 30." },
      { ja: "来月、友達の誕生日パーティーを開きます。", kana: "らいげつ、ともだちの たんじょうび パーティーを ひらきます。", romaji: "Raigetsu, tomodachi no tanjoubi paatii o hirakimasu.", en: "Next month we're holding a birthday party for a friend." },
    ],
  },
  {
    word: "逃げる", reading: "にげる", romaji: "nigeru", meaning: "to run away, to escape", pos: "verb-ru", category: "verbs", masu: "にげます",
    examples: [
      { ja: "猫が窓から逃げました。", kana: "ねこが まどから にげました。", romaji: "Neko ga mado kara nigemashita.", en: "The cat got out through the window." },
      { ja: "嫌なことから逃げないで、頑張りましょう。", kana: "いやな ことから にげないで、がんばりましょう。", romaji: "Iya na koto kara nigenaide, ganbarimashou.", en: "Let's not run away from hard things; let's do our best." },
    ],
  },
  {
    word: "だから", reading: "だから", romaji: "dakara", meaning: "so, therefore", pos: "conjunction", category: "adverbs",
    examples: [
      { ja: "雨が降っています。だから、今日は家にいます。", kana: "あめが ふって います。だから、きょうは いえに います。", romaji: "Ame ga futte imasu. Dakara, kyou wa ie ni imasu.", en: "It's raining. So I'm staying home today." },
      { ja: "明日はテストだから、早く寝る。", kana: "あしたは テストだから、はやく ねる。", romaji: "Ashita wa tesuto dakara, hayaku neru.", en: "I have a test tomorrow, so I'm going to bed early." },
    ],
  },
  {
    word: "残念", reading: "ざんねん", romaji: "zannen", meaning: "too bad, disappointing, regrettable", pos: "na-adj", category: "na-adj",
    examples: [
      { ja: "パーティーに行けなくて、残念です。", kana: "パーティーに いけなくて、ざんねんです。", romaji: "Paatii ni ikenakute, zannen desu.", en: "It's a shame I can't go to the party." },
      { ja: "残念なことに、試合は雨で中止になりました。", kana: "ざんねんな ことに、しあいは あめで ちゅうしに なりました。", romaji: "Zannen na koto ni, shiai wa ame de chuushi ni narimashita.", en: "Unfortunately, the game was cancelled because of rain." },
    ],
  },
  {
    word: "畳", reading: "たたみ", romaji: "tatami", meaning: "tatami mat (Japanese straw floor mat)", pos: "noun", category: "home",
    examples: [
      { ja: "畳の部屋で寝るのが好きです。", kana: "たたみの へやで ねるのが すきです。", romaji: "Tatami no heya de neru no ga suki desu.", en: "I like sleeping in a tatami room." },
      { ja: "畳の上では靴を脱いでください。", kana: "たたみの うえでは くつを ぬいで ください。", romaji: "Tatami no ue de wa kutsu o nuide kudasai.", en: "Please take off your shoes on the tatami." },
    ],
  },
  {
    word: "丁寧", reading: "ていねい", romaji: "teinei", meaning: "polite, courteous; careful", pos: "na-adj", category: "na-adj",
    examples: [
      { ja: "田中さんはいつも丁寧に話します。", kana: "たなかさんは いつも ていねいに はなします。", romaji: "Tanaka-san wa itsumo teinei ni hanashimasu.", en: "Mr. Tanaka always speaks politely." },
      { ja: "あの店の店員はとても丁寧です。", kana: "あの みせの てんいんは とても ていねいです。", romaji: "Ano mise no ten'in wa totemo teinei desu.", en: "The staff at that shop are very courteous." },
    ],
  },
  {
    word: "地理", reading: "ちり", romaji: "chiri", meaning: "geography; layout of an area", pos: "noun", category: "school",
    examples: [
      { ja: "私は地理の授業が好きです。", kana: "わたしは ちりの じゅぎょうが すきです。", romaji: "Watashi wa chiri no jugyou ga suki desu.", en: "I like geography class." },
      { ja: "この町の地理がまだよく分かりません。", kana: "この まちの ちりが まだ よく わかりません。", romaji: "Kono machi no chiri ga mada yoku wakarimasen.", en: "I still don't know my way around this town very well." },
    ],
  },
  {
    word: "さっき", reading: "さっき", romaji: "sakki", meaning: "a little while ago, just now", pos: "adverb", category: "adverbs",
    examples: [
      { ja: "さっき山田さんから電話がありました。", kana: "さっき やまださんから でんわが ありました。", romaji: "Sakki Yamada-san kara denwa ga arimashita.", en: "Mr. Yamada called a little while ago." },
      { ja: "さっき食べたばかりなので、おなかがいっぱいです。", kana: "さっき たべた ばかりなので、おなかが いっぱいです。", romaji: "Sakki tabeta bakari na node, onaka ga ippai desu.", en: "I just ate a little while ago, so I'm full." },
    ],
  },
  {
    word: "怖い", reading: "こわい", romaji: "kowai", meaning: "scary, frightening; afraid", pos: "i-adj", category: "i-adj",
    examples: [
      { ja: "夜の道は少し怖いです。", kana: "よるの みちは すこし こわいです。", romaji: "Yoru no michi wa sukoshi kowai desu.", en: "The streets at night are a little scary." },
      { ja: "子どもの時、犬が怖かったです。", kana: "こどもの とき、いぬが こわかったです。", romaji: "Kodomo no toki, inu ga kowakatta desu.", en: "When I was a child, I was afraid of dogs." },
    ],
  },
  {
    word: "包む", reading: "つつむ", romaji: "tsutsumu", meaning: "to wrap, to cover", pos: "verb-u", category: "verbs", masu: "つつみます",
    examples: [
      { ja: "プレゼントをきれいな紙で包みました。", kana: "プレゼントを きれいな かみで つつみました。", romaji: "Purezento o kirei na kami de tsutsumimashita.", en: "I wrapped the present in pretty paper." },
      { ja: "すみません、これを包んでいただけますか。", kana: "すみません、これを つつんで いただけますか。", romaji: "Sumimasen, kore o tsutsunde itadakemasu ka.", en: "Excuse me, could you wrap this for me?" },
    ],
  },
  {
    word: "なるべく", reading: "なるべく", romaji: "narubeku", meaning: "as much as possible, if possible", pos: "adverb", category: "adverbs",
    examples: [
      { ja: "なるべく早く来てください。", kana: "なるべく はやく きて ください。", romaji: "Narubeku hayaku kite kudasai.", en: "Please come as early as you can." },
      { ja: "夜はなるべく甘い物を食べないようにしています。", kana: "よるは なるべく あまい ものを たべない ように して います。", romaji: "Yoru wa narubeku amai mono o tabenai you ni shite imasu.", en: "I try not to eat sweets at night as much as possible." },
    ],
  },
  {
    word: "無理", reading: "むり", romaji: "muri", meaning: "impossible, unreasonable; overdoing it", pos: "na-adj", category: "na-adj",
    examples: [
      { ja: "一日でこの本を読むのは無理です。", kana: "いちにちで この ほんを よむのは むりです。", romaji: "Ichinichi de kono hon o yomu no wa muri desu.", en: "It's impossible to read this book in one day." },
      { ja: "無理をしないで、ゆっくり休んでください。", kana: "むりを しないで、ゆっくり やすんで ください。", romaji: "Muri o shinaide, yukkuri yasunde kudasai.", en: "Don't overdo it; please get plenty of rest." },
    ],
  },
  {
    word: "サンドイッチ", reading: "サンドイッチ", romaji: "sandoitchi", meaning: "sandwich", pos: "noun", category: "food",
    examples: [
      { ja: "昼ご飯にサンドイッチを作りました。", kana: "ひるごはんに サンドイッチを つくりました。", romaji: "Hirugohan ni sandoitchi o tsukurimashita.", en: "I made sandwiches for lunch." },
      { ja: "このサンドイッチは卵が入っていますか。", kana: "この サンドイッチは たまごが はいって いますか。", romaji: "Kono sandoitchi wa tamago ga haitte imasu ka.", en: "Does this sandwich have egg in it?" },
    ],
  },
  {
    word: "会議室", reading: "かいぎしつ", romaji: "kaigishitsu", meaning: "conference room, meeting room", pos: "noun", category: "school",
    examples: [
      { ja: "会議室は三階にあります。", kana: "かいぎしつは さんがいに あります。", romaji: "Kaigishitsu wa sangai ni arimasu.", en: "The meeting room is on the third floor." },
      { ja: "会議室を予約しましたか。", kana: "かいぎしつを よやく しましたか。", romaji: "Kaigishitsu o yoyaku shimashita ka.", en: "Did you book the meeting room?" },
    ],
  },
  {
    word: "品物", reading: "しなもの", romaji: "shinamono", meaning: "goods, items, merchandise", pos: "noun", category: "shopping",
    examples: [
      { ja: "この店は品物がとても多いです。", kana: "この みせは しなものが とても おおいです。", romaji: "Kono mise wa shinamono ga totemo ooi desu.", en: "This store has a lot of goods." },
      { ja: "買った品物を家に送ってもらいました。", kana: "かった しなものを いえに おくって もらいました。", romaji: "Katta shinamono o ie ni okutte moraimashita.", en: "I had the things I bought sent to my house." },
    ],
  },
  {
    word: "人形", reading: "にんぎょう", romaji: "ningyou", meaning: "doll, figure", pos: "noun", category: "hobbies",
    examples: [
      { ja: "妹は人形で遊ぶのが好きです。", kana: "いもうとは にんぎょうで あそぶのが すきです。", romaji: "Imouto wa ningyou de asobu no ga suki desu.", en: "My younger sister likes playing with dolls." },
      { ja: "京都でかわいい人形を買いました。", kana: "きょうとで かわいい にんぎょうを かいました。", romaji: "Kyouto de kawaii ningyou o kaimashita.", en: "I bought a cute doll in Kyoto." },
    ],
  },
  {
    word: "利用", reading: "りよう", romaji: "riyou", meaning: "use; to use, to make use of", pos: "suru-verb", category: "ideas", masu: "りようします",
    examples: [
      { ja: "毎日、図書館を利用しています。", kana: "まいにち、としょかんを りよう して います。", romaji: "Mainichi, toshokan o riyou shite imasu.", en: "I use the library every day." },
      { ja: "このカードはどの店でも利用できます。", kana: "この カードは どの みせでも りよう できます。", romaji: "Kono kaado wa dono mise demo riyou dekimasu.", en: "You can use this card at any store." },
    ],
  },
  {
    word: "飾る", reading: "かざる", romaji: "kazaru", meaning: "to decorate, to display", pos: "verb-u", category: "verbs", masu: "かざります",
    examples: [
      { ja: "テーブルに花を飾りました。", kana: "テーブルに はなを かざりました。", romaji: "Teeburu ni hana o kazarimashita.", en: "I put flowers on the table as decoration." },
      { ja: "部屋に家族の写真を飾っています。", kana: "へやに かぞくの しゃしんを かざって います。", romaji: "Heya ni kazoku no shashin o kazatte imasu.", en: "I have family photos displayed in my room." },
    ],
  },
  {
    word: "止める", reading: "とめる", romaji: "tomeru", meaning: "to stop (something); to park; to turn off", pos: "verb-ru", category: "verbs", masu: "とめます",
    examples: [
      { ja: "ここに車を止めてもいいですか。", kana: "ここに くるまを とめても いいですか。", romaji: "Koko ni kuruma o tomete mo ii desu ka.", en: "May I park my car here?" },
      { ja: "出かける前に、水を止めてください。", kana: "でかける まえに、みずを とめて ください。", romaji: "Dekakeru mae ni, mizu o tomete kudasai.", en: "Please turn off the water before you go out." },
    ],
  },
  {
    word: "恥ずかしい", reading: "はずかしい", romaji: "hazukashii", meaning: "embarrassed, shy; embarrassing", pos: "i-adj", category: "i-adj",
    examples: [
      { ja: "みんなの前で歌うのは恥ずかしいです。", kana: "みんなの まえで うたうのは はずかしいです。", romaji: "Minna no mae de utau no wa hazukashii desu.", en: "Singing in front of everyone is embarrassing." },
      { ja: "名前を間違えて、とても恥ずかしかったです。", kana: "なまえを まちがえて、とても はずかしかったです。", romaji: "Namae o machigaete, totemo hazukashikatta desu.", en: "I got someone's name wrong and was really embarrassed." },
    ],
  },
  {
    word: "いくら～ても", reading: "いくら～ても", romaji: "ikura ~ temo", meaning: "no matter how much ~, however ~", pos: "expression", category: "grammar",
    examples: [
      { ja: "いくら練習しても、上手になりません。", kana: "いくら れんしゅう しても、じょうずに なりません。", romaji: "Ikura renshuu shite mo, jouzu ni narimasen.", en: "No matter how much I practice, I don't get any better." },
      { ja: "いくら高くても、この時計が欲しいです。", kana: "いくら たかくても、この とけいが ほしいです。", romaji: "Ikura takakute mo, kono tokei ga hoshii desu.", en: "However expensive it is, I want this watch." },
    ],
  },
  {
    word: "用事", reading: "ようじ", romaji: "youji", meaning: "errand, something to do, business", pos: "noun", category: "ideas",
    examples: [
      { ja: "今日は用事があるので、早く帰ります。", kana: "きょうは ようじが あるので、はやく かえります。", romaji: "Kyou wa youji ga aru node, hayaku kaerimasu.", en: "I have something to take care of today, so I'll leave early." },
      { ja: "明日の午後、何か用事がありますか。", kana: "あしたの ごご、なにか ようじが ありますか。", romaji: "Ashita no gogo, nanika youji ga arimasu ka.", en: "Do you have any plans tomorrow afternoon?" },
    ],
  },
  {
    word: "ビル", reading: "ビル", romaji: "biru", meaning: "building (multi-story)", pos: "noun", category: "places",
    examples: [
      { ja: "あの高いビルは銀行です。", kana: "あの たかい ビルは ぎんこうです。", romaji: "Ano takai biru wa ginkou desu.", en: "That tall building is a bank." },
      { ja: "私の会社はこのビルの五階にあります。", kana: "わたしの かいしゃは この ビルの ごかいに あります。", romaji: "Watashi no kaisha wa kono biru no gokai ni arimasu.", en: "My company is on the fifth floor of this building." },
    ],
  },
  {
    word: "けんか", reading: "けんか", romaji: "kenka", meaning: "quarrel, fight; to argue", pos: "suru-verb", category: "ideas", masu: "けんかします",
    examples: [
      { ja: "昨日、弟とけんかしました。", kana: "きのう、おとうとと けんか しました。", romaji: "Kinou, otouto to kenka shimashita.", en: "I had a fight with my little brother yesterday." },
      { ja: "けんかをしないで、仲良く遊んでね。", kana: "けんかを しないで、なかよく あそんでね。", romaji: "Kenka o shinaide, nakayoku asonde ne.", en: "Don't fight; play nicely together, okay?" },
    ],
  },
  {
    word: "頑張る", reading: "がんばる", romaji: "ganbaru", meaning: "to do one's best, to try hard", pos: "verb-u", category: "verbs", masu: "がんばります",
    examples: [
      { ja: "試験のために毎日頑張っています。", kana: "しけんの ために まいにち がんばって います。", romaji: "Shiken no tame ni mainichi ganbatte imasu.", en: "I'm working hard every day for the exam." },
      { ja: "明日の試合、頑張ってください。", kana: "あしたの しあい、がんばって ください。", romaji: "Ashita no shiai, ganbatte kudasai.", en: "Good luck in tomorrow's match!" },
    ],
  },
  {
    word: "投げる", reading: "なげる", romaji: "nageru", meaning: "to throw", pos: "verb-ru", category: "verbs", masu: "なげます",
    examples: [
      { ja: "子どもが公園でボールを投げています。", kana: "こどもが こうえんで ボールを なげて います。", romaji: "Kodomo ga kouen de booru o nagete imasu.", en: "A child is throwing a ball in the park." },
      { ja: "川に石を投げないでください。", kana: "かわに いしを なげないで ください。", romaji: "Kawa ni ishi o nagenaide kudasai.", en: "Please don't throw stones into the river." },
    ],
  },
  {
    word: "故障", reading: "こしょう", romaji: "koshou", meaning: "breakdown, malfunction; to break down", pos: "suru-verb", category: "home", masu: "こしょうします",
    examples: [
      { ja: "エレベーターが故障しています。", kana: "エレベーターが こしょう して います。", romaji: "Erebeetaa ga koshou shite imasu.", en: "The elevator is out of order." },
      { ja: "車の故障で、会社に遅れました。", kana: "くるまの こしょうで、かいしゃに おくれました。", romaji: "Kuruma no koshou de, kaisha ni okuremashita.", en: "My car broke down, so I was late for work." },
    ],
  },
  {
    word: "力", reading: "ちから", romaji: "chikara", meaning: "strength, power", pos: "noun", category: "body",
    examples: [
      { ja: "兄はとても力が強いです。", kana: "あには とても ちからが つよいです。", romaji: "Ani wa totemo chikara ga tsuyoi desu.", en: "My older brother is very strong." },
      { ja: "友達の言葉が私の力になりました。", kana: "ともだちの ことばが わたしの ちからに なりました。", romaji: "Tomodachi no kotoba ga watashi no chikara ni narimashita.", en: "My friend's words gave me strength." },
    ],
  },
  {
    word: "受ける", reading: "うける", romaji: "ukeru", meaning: "to take (an exam, a class); to receive", pos: "verb-ru", category: "verbs", masu: "うけます",
    examples: [
      { ja: "来月、日本語の試験を受けます。", kana: "らいげつ、にほんごの しけんを うけます。", romaji: "Raigetsu, nihongo no shiken o ukemasu.", en: "I'm taking a Japanese exam next month." },
      { ja: "毎週土曜日に英語の授業を受けています。", kana: "まいしゅう どようびに えいごの じゅぎょうを うけて います。", romaji: "Maishuu doyoubi ni eigo no jugyou o ukete imasu.", en: "I take an English class every Saturday." },
    ],
  },
  {
    word: "気分", reading: "きぶん", romaji: "kibun", meaning: "feeling, mood", pos: "noun", category: "body",
    examples: [
      { ja: "今日は気分がいいです。", kana: "きょうは きぶんが いいです。", romaji: "Kyou wa kibun ga ii desu.", en: "I feel good today." },
      { ja: "気分が悪いので、少し休んでもいいですか。", kana: "きぶんが わるいので、すこし やすんでも いいですか。", romaji: "Kibun ga warui node, sukoshi yasunde mo ii desu ka.", en: "I don't feel well. May I rest for a bit?" },
    ],
  },
  {
    word: "間違える", reading: "まちがえる", romaji: "machigaeru", meaning: "to make a mistake, to get (something) wrong", pos: "verb-ru", category: "verbs", masu: "まちがえます",
    examples: [
      { ja: "駅で電車を間違えました。", kana: "えきで でんしゃを まちがえました。", romaji: "Eki de densha o machigaemashita.", en: "I took the wrong train at the station." },
      { ja: "間違えてもいいですから、話してみてください。", kana: "まちがえても いいですから、はなして みて ください。", romaji: "Machigaete mo ii desu kara, hanashite mite kudasai.", en: "It's okay to make mistakes, so please try speaking." },
    ],
  },
  {
    word: "そんな", reading: "そんな", romaji: "sonna", meaning: "such, that kind of", pos: "pronoun", category: "pointing",
    examples: [
      { ja: "そんなことはありません。", kana: "そんな ことは ありません。", romaji: "Sonna koto wa arimasen.", en: "That's not true." },
      { ja: "そんな高いかばんは買えません。", kana: "そんな たかい かばんは かえません。", romaji: "Sonna takai kaban wa kaemasen.", en: "I can't buy such an expensive bag." },
    ],
  },
  {
    word: "星", reading: "ほし", romaji: "hoshi", meaning: "star", pos: "noun", category: "nature",
    examples: [
      { ja: "今夜は星がきれいですね。", kana: "こんやは ほしが きれいですね。", romaji: "Kon'ya wa hoshi ga kirei desu ne.", en: "The stars are beautiful tonight, aren't they?" },
      { ja: "町では星があまり見えません。", kana: "まちでは ほしが あまり みえません。", romaji: "Machi de wa hoshi ga amari miemasen.", en: "You can't see many stars in the city." },
    ],
  },
  {
    word: "場合", reading: "ばあい", romaji: "baai", meaning: "case, situation, when", pos: "noun", category: "grammar",
    examples: [
      { ja: "雨の場合、試合は中止です。", kana: "あめの ばあい、しあいは ちゅうしです。", romaji: "Ame no baai, shiai wa chuushi desu.", en: "If it rains, the game will be cancelled." },
      { ja: "分からない場合は、先生に聞いてください。", kana: "わからない ばあいは、せんせいに きいて ください。", romaji: "Wakaranai baai wa, sensei ni kiite kudasai.", en: "If you don't understand, please ask the teacher." },
    ],
  },
  {
    word: "やっと", reading: "やっと", romaji: "yatto", meaning: "at last, finally", pos: "adverb", category: "adverbs",
    examples: [
      { ja: "やっと宿題が終わりました。", kana: "やっと しゅくだいが おわりました。", romaji: "Yatto shukudai ga owarimashita.", en: "I've finally finished my homework." },
      { ja: "三十分待って、やっとバスが来ました。", kana: "さんじゅっぷん まって、やっと バスが きました。", romaji: "Sanjuppun matte, yatto basu ga kimashita.", en: "After waiting thirty minutes, the bus finally came." },
    ],
  },
  {
    word: "足りる", reading: "たりる", romaji: "tariru", meaning: "to be enough, to be sufficient", pos: "verb-ru", category: "verbs", masu: "たります",
    examples: [
      { ja: "お金が足りません。", kana: "おかねが たりません。", romaji: "Okane ga tarimasen.", en: "I don't have enough money." },
      { ja: "五人分の料理で足りますか。", kana: "ごにんぶんの りょうりで たりますか。", romaji: "Goninbun no ryouri de tarimasu ka.", en: "Will food for five people be enough?" },
    ],
  },
  {
    word: "行う", reading: "おこなう", romaji: "okonau", meaning: "to hold, to carry out, to conduct (formal)", pos: "verb-u", category: "verbs", masu: "おこないます",
    examples: [
      { ja: "来週、学校でテストが行われます。", kana: "らいしゅう、がっこうで テストが おこなわれます。", romaji: "Raishuu, gakkou de tesuto ga okonawaremasu.", en: "A test will be held at school next week." },
      { ja: "毎月一回、会議を行います。", kana: "まいつき いっかい、かいぎを おこないます。", romaji: "Maitsuki ikkai, kaigi o okonaimasu.", en: "We hold a meeting once a month." },
    ],
  },
  {
    word: "ぶどう", reading: "ぶどう", romaji: "budou", meaning: "grapes", pos: "noun", category: "food",
    examples: [
      { ja: "私はぶどうが大好きです。", kana: "わたしは ぶどうが だいすきです。", romaji: "Watashi wa budou ga daisuki desu.", en: "I love grapes." },
      { ja: "このぶどうは甘くておいしいですね。", kana: "この ぶどうは あまくて おいしいですね。", romaji: "Kono budou wa amakute oishii desu ne.", en: "These grapes are sweet and delicious, aren't they?" },
    ],
  },
  {
    word: "無くなる", reading: "なくなる", romaji: "nakunaru", meaning: "to be lost, to disappear; to run out", pos: "verb-u", category: "verbs", masu: "なくなります",
    examples: [
      { ja: "財布が無くなりました。", kana: "さいふが なくなりました。", romaji: "Saifu ga nakunarimashita.", en: "My wallet is gone." },
      { ja: "冷蔵庫の牛乳がもうすぐ無くなります。", kana: "れいぞうこの ぎゅうにゅうが もうすぐ なくなります。", romaji: "Reizouko no gyuunyuu ga mousugu nakunarimasu.", en: "We'll soon run out of milk in the fridge." },
    ],
  },
  {
    word: "準備", reading: "じゅんび", romaji: "junbi", meaning: "preparation; to prepare", pos: "suru-verb", category: "ideas", masu: "じゅんびします",
    examples: [
      { ja: "旅行の準備はできましたか。", kana: "りょこうの じゅんびは できましたか。", romaji: "Ryokou no junbi wa dekimashita ka.", en: "Are you ready for your trip?" },
      { ja: "今、晩ご飯の準備をしています。", kana: "いま、ばんごはんの じゅんびを して います。", romaji: "Ima, bangohan no junbi o shite imasu.", en: "I'm getting dinner ready now." },
    ],
  },
  {
    word: "世界", reading: "せかい", romaji: "sekai", meaning: "world", pos: "noun", category: "places",
    examples: [
      { ja: "いつか世界を旅行したいです。", kana: "いつか せかいを りょこう したいです。", romaji: "Itsuka sekai o ryokou shitai desu.", en: "Someday I want to travel around the world." },
      { ja: "世界で一番高い山は何ですか。", kana: "せかいで いちばん たかい やまは なんですか。", romaji: "Sekai de ichiban takai yama wa nan desu ka.", en: "What is the highest mountain in the world?" },
    ],
  },
  {
    word: "住所", reading: "じゅうしょ", romaji: "juusho", meaning: "address", pos: "noun", category: "places",
    examples: [
      { ja: "ここに名前と住所を書いてください。", kana: "ここに なまえと じゅうしょを かいて ください。", romaji: "Koko ni namae to juusho o kaite kudasai.", en: "Please write your name and address here." },
      { ja: "新しい住所を教えてもらえますか。", kana: "あたらしい じゅうしょを おしえて もらえますか。", romaji: "Atarashii juusho o oshiete moraemasu ka.", en: "Could you tell me your new address?" },
    ],
  },
  {
    word: "再来月", reading: "さらいげつ", romaji: "saraigetsu", meaning: "the month after next", pos: "noun", category: "time",
    examples: [
      { ja: "再来月、アメリカへ行きます。", kana: "さらいげつ、アメリカへ いきます。", romaji: "Saraigetsu, Amerika e ikimasu.", en: "I'm going to America the month after next." },
      { ja: "引っ越しは再来月になりました。", kana: "ひっこしは さらいげつに なりました。", romaji: "Hikkoshi wa saraigetsu ni narimashita.", en: "The move has been set for the month after next." },
    ],
  },
  {
    word: "林", reading: "はやし", romaji: "hayashi", meaning: "woods, grove", pos: "noun", category: "nature",
    examples: [
      { ja: "家の後ろに小さい林があります。", kana: "いえの うしろに ちいさい はやしが あります。", romaji: "Ie no ushiro ni chiisai hayashi ga arimasu.", en: "There's a small grove behind the house." },
      { ja: "林の中を散歩しました。", kana: "はやしの なかを さんぽ しました。", romaji: "Hayashi no naka o sanpo shimashita.", en: "I took a walk through the woods." },
    ],
  },
  {
    word: "倍", reading: "ばい", romaji: "bai", meaning: "double, twice; ~ times (as much)", pos: "counter", category: "numbers",
    examples: [
      { ja: "この店の値段は、あの店の二倍です。", kana: "この みせの ねだんは、あの みせの にばいです。", romaji: "Kono mise no nedan wa, ano mise no nibai desu.", en: "Prices at this shop are twice those at that shop." },
      { ja: "今年は去年より倍の人が来ました。", kana: "ことしは きょねんより ばいの ひとが きました。", romaji: "Kotoshi wa kyonen yori bai no hito ga kimashita.", en: "Twice as many people came this year as last year." },
    ],
  },
  {
    word: "痩せる", reading: "やせる", romaji: "yaseru", meaning: "to lose weight, to become thin", pos: "verb-ru", category: "verbs", masu: "やせます",
    examples: [
      { ja: "毎朝走って、三キロ痩せました。", kana: "まいあさ はしって、さんキロ やせました。", romaji: "Maiasa hashitte, sankiro yasemashita.", en: "I ran every morning and lost three kilograms." },
      { ja: "もう少し痩せたいです。", kana: "もう すこし やせたいです。", romaji: "Mou sukoshi yasetai desu.", en: "I want to lose a little more weight." },
    ],
  },
  {
    word: "線", reading: "せん", romaji: "sen", meaning: "line; (train) line", pos: "noun", category: "colors",
    examples: [
      { ja: "大事なところに線を引いてください。", kana: "だいじな ところに せんを ひいて ください。", romaji: "Daiji na tokoro ni sen o hiite kudasai.", en: "Please underline the important parts." },
      { ja: "白い線の内側で待ってください。", kana: "しろい せんの うちがわで まって ください。", romaji: "Shiroi sen no uchigawa de matte kudasai.", en: "Please wait behind the white line." },
    ],
  },
  {
    word: "戦争", reading: "せんそう", romaji: "sensou", meaning: "war", pos: "noun", category: "society",
    examples: [
      { ja: "祖父は戦争の話をしてくれました。", kana: "そふは せんそうの はなしを して くれました。", romaji: "Sofu wa sensou no hanashi o shite kuremashita.", en: "My grandfather told me about the war." },
      { ja: "戦争のない世界になってほしいです。", kana: "せんそうの ない せかいに なって ほしいです。", romaji: "Sensou no nai sekai ni natte hoshii desu.", en: "I hope the world will be free of war." },
    ],
  },
  {
    word: "決める", reading: "きめる", romaji: "kimeru", meaning: "to decide, to choose", pos: "verb-ru", category: "verbs", masu: "きめます",
    examples: [
      { ja: "夏休みの旅行先を決めました。", kana: "なつやすみの りょこうさきを きめました。", romaji: "Natsuyasumi no ryokousaki o kimemashita.", en: "I decided where to go on my summer trip." },
      { ja: "何を食べるか、まだ決めていません。", kana: "なにを たべるか、まだ きめて いません。", romaji: "Nani o taberu ka, mada kimete imasen.", en: "I haven't decided what to eat yet." },
    ],
  },
  {
    word: "調べる", reading: "しらべる", romaji: "shiraberu", meaning: "to look up, to check, to investigate", pos: "verb-ru", category: "verbs", masu: "しらべます",
    examples: [
      { ja: "分からない言葉を辞書で調べます。", kana: "わからない ことばを じしょで しらべます。", romaji: "Wakaranai kotoba o jisho de shirabemasu.", en: "I look up words I don't know in the dictionary." },
      { ja: "電車の時間を調べてくれませんか。", kana: "でんしゃの じかんを しらべて くれませんか。", romaji: "Densha no jikan o shirabete kuremasen ka.", en: "Could you check the train times for me?" },
    ],
  },
  {
    word: "寝坊", reading: "ねぼう", romaji: "nebou", meaning: "oversleeping; to oversleep", pos: "suru-verb", category: "ideas", masu: "ねぼうします",
    examples: [
      { ja: "今朝、寝坊して、学校に遅れました。", kana: "けさ、ねぼう して、がっこうに おくれました。", romaji: "Kesa, nebou shite, gakkou ni okuremashita.", en: "I overslept this morning and was late for school." },
      { ja: "明日は寝坊しないでね。", kana: "あしたは ねぼう しないでね。", romaji: "Ashita wa nebou shinaide ne.", en: "Don't oversleep tomorrow, okay?" },
    ],
  },
  {
    word: "パパ", reading: "パパ", romaji: "papa", meaning: "dad, daddy", pos: "noun", category: "people",
    examples: [
      { ja: "パパ、一緒に遊ぼう。", kana: "パパ、いっしょに あそぼう。", romaji: "Papa, issho ni asobou.", en: "Daddy, let's play together!" },
      { ja: "娘は毎晩パパと一緒にお風呂に入ります。", kana: "むすめは まいばん パパと いっしょに おふろに はいります。", romaji: "Musume wa maiban papa to issho ni ofuro ni hairimasu.", en: "My daughter takes a bath with her dad every night." },
    ],
  },
  {
    word: "光る", reading: "ひかる", romaji: "hikaru", meaning: "to shine, to glitter", pos: "verb-u", category: "verbs", masu: "ひかります",
    examples: [
      { ja: "夜空に星が光っています。", kana: "よぞらに ほしが ひかって います。", romaji: "Yozora ni hoshi ga hikatte imasu.", en: "Stars are shining in the night sky." },
      { ja: "遠くで何かが光りました。", kana: "とおくで なにかが ひかりました。", romaji: "Tooku de nanika ga hikarimashita.", en: "Something flashed in the distance." },
    ],
  },
  {
    word: "夫", reading: "おっと", romaji: "otto", meaning: "(my) husband", pos: "noun", category: "people",
    examples: [
      { ja: "夫は銀行で働いています。", kana: "おっとは ぎんこうで はたらいて います。", romaji: "Otto wa ginkou de hataraite imasu.", en: "My husband works at a bank." },
      { ja: "週末は夫と買い物に行きました。", kana: "しゅうまつは おっとと かいものに いきました。", romaji: "Shuumatsu wa otto to kaimono ni ikimashita.", en: "I went shopping with my husband on the weekend." },
    ],
  },
  {
    word: "雲", reading: "くも", romaji: "kumo", meaning: "cloud", pos: "noun", category: "nature",
    examples: [
      { ja: "空に白い雲が浮かんでいます。", kana: "そらに しろい くもが うかんで います。", romaji: "Sora ni shiroi kumo ga ukande imasu.", en: "White clouds are floating in the sky." },
      { ja: "今日は雲が多くて、少し寒いです。", kana: "きょうは くもが おおくて、すこし さむいです。", romaji: "Kyou wa kumo ga ookute, sukoshi samui desu.", en: "It's cloudy today and a little cold." },
    ],
  },
  {
    word: "坂", reading: "さか", romaji: "saka", meaning: "slope, hill", pos: "noun", category: "places",
    examples: [
      { ja: "駅までは長い坂を上ります。", kana: "えきまでは ながい さかを のぼります。", romaji: "Eki made wa nagai saka o noborimasu.", en: "To get to the station, you go up a long hill." },
      { ja: "この坂の上に学校があります。", kana: "この さかの うえに がっこうが あります。", romaji: "Kono saka no ue ni gakkou ga arimasu.", en: "There's a school at the top of this hill." },
    ],
  },
  {
    word: "～てしまう", reading: "～てしまう", romaji: "~te shimau", meaning: "to end up ~ (regret); to finish ~ completely", pos: "expression", category: "grammar",
    examples: [
      { ja: "電車に傘を忘れてしまいました。", kana: "でんしゃに かさを わすれて しまいました。", romaji: "Densha ni kasa o wasurete shimaimashita.", en: "I left my umbrella on the train." },
      { ja: "宿題はもうやってしまった。", kana: "しゅくだいは もう やって しまった。", romaji: "Shukudai wa mou yatte shimatta.", en: "I've already finished my homework." },
    ],
  },
  {
    word: "飛行場", reading: "ひこうじょう", romaji: "hikoujou", meaning: "airport, airfield", pos: "noun", category: "transport",
    examples: [
      { ja: "飛行場まで車で一時間かかります。", kana: "ひこうじょうまで くるまで いちじかん かかります。", romaji: "Hikoujou made kuruma de ichijikan kakarimasu.", en: "It takes an hour by car to get to the airport." },
      { ja: "父を飛行場へ迎えに行きました。", kana: "ちちを ひこうじょうへ むかえに いきました。", romaji: "Chichi o hikoujou e mukae ni ikimashita.", en: "I went to the airport to pick up my father." },
    ],
  },
  {
    word: "柔道", reading: "じゅうどう", romaji: "juudou", meaning: "judo", pos: "noun", category: "hobbies",
    examples: [
      { ja: "兄は子どもの時から柔道をしています。", kana: "あには こどもの ときから じゅうどうを して います。", romaji: "Ani wa kodomo no toki kara juudou o shite imasu.", en: "My older brother has done judo since he was a child." },
      { ja: "日本で柔道を習いたいです。", kana: "にほんで じゅうどうを ならいたいです。", romaji: "Nihon de juudou o naraitai desu.", en: "I want to learn judo in Japan." },
    ],
  },
  {
    word: "決して", reading: "けっして", romaji: "kesshite", meaning: "never, by no means (with a negative)", pos: "adverb", category: "adverbs",
    examples: [
      { ja: "このことは決して忘れません。", kana: "この ことは けっして わすれません。", romaji: "Kono koto wa kesshite wasuremasen.", en: "I will never forget this." },
      { ja: "危ないですから、決して一人で川に行かないでください。", kana: "あぶないですから、けっして ひとりで かわに いかないで ください。", romaji: "Abunai desu kara, kesshite hitori de kawa ni ikanaide kudasai.", en: "It's dangerous, so never go to the river alone." },
    ],
  },
  {
    word: "事務所", reading: "じむしょ", romaji: "jimusho", meaning: "office", pos: "noun", category: "school",
    examples: [
      { ja: "事務所は二階にあります。", kana: "じむしょは にかいに あります。", romaji: "Jimusho wa nikai ni arimasu.", en: "The office is on the second floor." },
      { ja: "明日の朝、事務所に来てください。", kana: "あしたの あさ、じむしょに きて ください。", romaji: "Ashita no asa, jimusho ni kite kudasai.", en: "Please come to the office tomorrow morning." },
    ],
  },
  {
    word: "連絡", reading: "れんらく", romaji: "renraku", meaning: "contact, communication; to contact", pos: "suru-verb", category: "ideas", masu: "れんらくします",
    examples: [
      { ja: "着いたら連絡してください。", kana: "ついたら れんらく して ください。", romaji: "Tsuitara renraku shite kudasai.", en: "Please get in touch when you arrive." },
      { ja: "山田さんからまだ連絡がありません。", kana: "やまださんから まだ れんらくが ありません。", romaji: "Yamada-san kara mada renraku ga arimasen.", en: "I still haven't heard from Mr. Yamada." },
    ],
  },
  {
    word: "小学校", reading: "しょうがっこう", romaji: "shougakkou", meaning: "elementary school", pos: "noun", category: "school",
    examples: [
      { ja: "弟は小学校の三年生です。", kana: "おとうとは しょうがっこうの さんねんせいです。", romaji: "Otouto wa shougakkou no sannensei desu.", en: "My younger brother is in third grade at elementary school." },
      { ja: "家の近くに小学校があります。", kana: "いえの ちかくに しょうがっこうが あります。", romaji: "Ie no chikaku ni shougakkou ga arimasu.", en: "There's an elementary school near my house." },
    ],
  },
  {
    word: "客", reading: "きゃく", romaji: "kyaku", meaning: "guest, visitor; customer", pos: "noun", category: "people",
    examples: [
      { ja: "今日はお客さんが多いですね。", kana: "きょうは おきゃくさんが おおいですね。", romaji: "Kyou wa okyakusan ga ooi desu ne.", en: "There are a lot of customers today, aren't there?" },
      { ja: "週末、家に客が来ます。", kana: "しゅうまつ、いえに きゃくが きます。", romaji: "Shuumatsu, ie ni kyaku ga kimasu.", en: "We have guests coming to our house this weekend." },
    ],
  },
  {
    word: "昔", reading: "むかし", romaji: "mukashi", meaning: "the old days, long ago", pos: "noun", category: "time",
    examples: [
      { ja: "昔、ここに大きな木がありました。", kana: "むかし、ここに おおきな きが ありました。", romaji: "Mukashi, koko ni ookina ki ga arimashita.", en: "Long ago, there was a big tree here." },
      { ja: "この町は昔と全然違います。", kana: "この まちは むかしと ぜんぜん ちがいます。", romaji: "Kono machi wa mukashi to zenzen chigaimasu.", en: "This town is completely different from how it used to be." },
    ],
  },
  {
    word: "美しい", reading: "うつくしい", romaji: "utsukushii", meaning: "beautiful, lovely", pos: "i-adj", category: "i-adj",
    examples: [
      { ja: "富士山はとても美しいです。", kana: "ふじさんは とても うつくしいです。", romaji: "Fujisan wa totemo utsukushii desu.", en: "Mt. Fuji is very beautiful." },
      { ja: "美しい音楽を聞きながら、本を読みました。", kana: "うつくしい おんがくを ききながら、ほんを よみました。", romaji: "Utsukushii ongaku o kikinagara, hon o yomimashita.", en: "I read a book while listening to beautiful music." },
    ],
  },
  {
    word: "捨てる", reading: "すてる", romaji: "suteru", meaning: "to throw away", pos: "verb-ru", category: "verbs", masu: "すてます",
    examples: [
      { ja: "ごみはここに捨ててください。", kana: "ごみは ここに すてて ください。", romaji: "Gomi wa koko ni sutete kudasai.", en: "Please throw your trash away here." },
      { ja: "古い服を捨てました。", kana: "ふるい ふくを すてました。", romaji: "Furui fuku o sutemashita.", en: "I threw away my old clothes." },
    ],
  },
  {
    word: "なさる", reading: "なさる", romaji: "nasaru", meaning: "to do (honorific form of する)", pos: "verb-u", category: "verbs", masu: "なさいます",
    examples: [
      { ja: "週末は何をなさいますか。", kana: "しゅうまつは なにを なさいますか。", romaji: "Shuumatsu wa nani o nasaimasu ka.", en: "What will you be doing this weekend? (honorific)" },
      { ja: "先生はゴルフをなさるそうです。", kana: "せんせいは ゴルフを なさる そうです。", romaji: "Sensei wa gorufu o nasaru sou desu.", en: "I hear that the teacher plays golf." },
    ],
  },
  {
    word: "事", reading: "こと", romaji: "koto", meaning: "thing, matter, fact (often written こと)", pos: "noun", category: "grammar",
    examples: [
      { ja: "日本の事をもっと知りたいです。", kana: "にほんの ことを もっと しりたいです。", romaji: "Nihon no koto o motto shiritai desu.", en: "I want to know more about Japan." },
      { ja: "私の趣味は写真を撮ることです。", kana: "わたしの しゅみは しゃしんを とる ことです。", romaji: "Watashi no shumi wa shashin o toru koto desu.", en: "My hobby is taking photos." },
    ],
  },
  {
    word: "どんどん", reading: "どんどん", romaji: "dondon", meaning: "rapidly, steadily, more and more", pos: "adverb", category: "adverbs",
    examples: [
      { ja: "日本語がどんどん上手になっています。", kana: "にほんごが どんどん じょうずに なって います。", romaji: "Nihongo ga dondon jouzu ni natte imasu.", en: "My Japanese is getting better and better." },
      { ja: "遠慮しないで、どんどん食べてください。", kana: "えんりょ しないで、どんどん たべて ください。", romaji: "Enryo shinaide, dondon tabete kudasai.", en: "Don't be shy — eat as much as you like." },
    ],
  },
  {
    word: "試合", reading: "しあい", romaji: "shiai", meaning: "match, game, competition", pos: "noun", category: "hobbies",
    examples: [
      { ja: "明日、サッカーの試合があります。", kana: "あした、サッカーの しあいが あります。", romaji: "Ashita, sakkaa no shiai ga arimasu.", en: "There's a soccer match tomorrow." },
      { ja: "昨日の試合に勝ちましたか。", kana: "きのうの しあいに かちましたか。", romaji: "Kinou no shiai ni kachimashita ka.", en: "Did you win yesterday's game?" },
    ],
  },
  {
    word: "適当", reading: "てきとう", romaji: "tekitou", meaning: "suitable, appropriate; (casual) careless, half-hearted", pos: "na-adj", category: "na-adj",
    examples: [
      { ja: "適当な言葉が見つかりません。", kana: "てきとうな ことばが みつかりません。", romaji: "Tekitou na kotoba ga mitsukarimasen.", en: "I can't find the right words." },
      { ja: "宿題を適当にしないでください。", kana: "しゅくだいを てきとうに しないで ください。", romaji: "Shukudai o tekitou ni shinaide kudasai.", en: "Please don't do your homework carelessly." },
    ],
  },
  {
    word: "素晴らしい", reading: "すばらしい", romaji: "subarashii", meaning: "wonderful, splendid", pos: "i-adj", category: "i-adj",
    examples: [
      { ja: "山からの景色は素晴らしかったです。", kana: "やまからの けしきは すばらしかったです。", romaji: "Yama kara no keshiki wa subarashikatta desu.", en: "The view from the mountain was wonderful." },
      { ja: "素晴らしい考えですね。", kana: "すばらしい かんがえですね。", romaji: "Subarashii kangae desu ne.", en: "What a wonderful idea!" },
    ],
  },
  {
    word: "美術館", reading: "びじゅつかん", romaji: "bijutsukan", meaning: "art museum, art gallery", pos: "noun", category: "places",
    examples: [
      { ja: "週末、美術館で絵を見ました。", kana: "しゅうまつ、びじゅつかんで えを みました。", romaji: "Shuumatsu, bijutsukan de e o mimashita.", en: "I looked at paintings at the art museum on the weekend." },
      { ja: "この美術館は月曜日が休みです。", kana: "この びじゅつかんは げつようびが やすみです。", romaji: "Kono bijutsukan wa getsuyoubi ga yasumi desu.", en: "This art museum is closed on Mondays." },
    ],
  },
  {
    word: "文法", reading: "ぶんぽう", romaji: "bunpou", meaning: "grammar", pos: "noun", category: "school",
    examples: [
      { ja: "日本語の文法は難しいですか。", kana: "にほんごの ぶんぽうは むずかしいですか。", romaji: "Nihongo no bunpou wa muzukashii desu ka.", en: "Is Japanese grammar difficult?" },
      { ja: "毎日、文法を少しずつ勉強しています。", kana: "まいにち、ぶんぽうを すこしずつ べんきょう して います。", romaji: "Mainichi, bunpou o sukoshizutsu benkyou shite imasu.", en: "I study grammar a little bit every day." },
    ],
  },
  {
    word: "終わり", reading: "おわり", romaji: "owari", meaning: "end, ending", pos: "noun", category: "time",
    examples: [
      { ja: "夏休みももうすぐ終わりです。", kana: "なつやすみも もうすぐ おわりです。", romaji: "Natsuyasumi mo mousugu owari desu.", en: "Summer vacation will be over soon." },
      { ja: "映画の終わりはとても悲しかったです。", kana: "えいがの おわりは とても かなしかったです。", romaji: "Eiga no owari wa totemo kanashikatta desu.", en: "The ending of the movie was very sad." },
    ],
  },
  {
    word: "壁", reading: "かべ", romaji: "kabe", meaning: "wall", pos: "noun", category: "home",
    examples: [
      { ja: "壁に時計を掛けました。", kana: "かべに とけいを かけました。", romaji: "Kabe ni tokei o kakemashita.", en: "I hung a clock on the wall." },
      { ja: "この部屋の壁は白いです。", kana: "この へやの かべは しろいです。", romaji: "Kono heya no kabe wa shiroi desu.", en: "The walls of this room are white." },
    ],
  },
  {
    word: "一度", reading: "いちど", romaji: "ichido", meaning: "once, one time", pos: "noun", category: "numbers",
    examples: [
      { ja: "もう一度言ってください。", kana: "もう いちど いって ください。", romaji: "Mou ichido itte kudasai.", en: "Please say it once more." },
      { ja: "一度京都へ行ってみたいです。", kana: "いちど きょうとへ いって みたいです。", romaji: "Ichido Kyouto e itte mitai desu.", en: "I'd like to visit Kyoto at least once." },
    ],
  },
  {
    word: "お礼", reading: "おれい", romaji: "orei", meaning: "thanks, gratitude; a thank-you gift", pos: "noun", category: "ideas",
    examples: [
      { ja: "手伝ってくれたお礼に、ご飯をごちそうします。", kana: "てつだって くれた おれいに、ごはんを ごちそう します。", romaji: "Tetsudatte kureta orei ni, gohan o gochisou shimasu.", en: "To thank you for helping me, I'll treat you to a meal." },
      { ja: "先生にお礼の手紙を書きました。", kana: "せんせいに おれいの てがみを かきました。", romaji: "Sensei ni orei no tegami o kakimashita.", en: "I wrote a thank-you letter to my teacher." },
    ],
  },
  {
    word: "親切", reading: "しんせつ", romaji: "shinsetsu", meaning: "kind, helpful; kindness", pos: "na-adj", category: "na-adj",
    examples: [
      { ja: "田中さんはとても親切な人です。", kana: "たなかさんは とても しんせつな ひとです。", romaji: "Tanaka-san wa totemo shinsetsu na hito desu.", en: "Ms. Tanaka is a very kind person." },
      { ja: "駅員さんが親切に道を教えてくれました。", kana: "えきいんさんが しんせつに みちを おしえて くれました。", romaji: "Ekiin-san ga shinsetsu ni michi o oshiete kuremashita.", en: "The station attendant kindly showed me the way." },
    ],
  },
  {
    word: "知らせる", reading: "しらせる", romaji: "shiraseru", meaning: "to let (someone) know, to inform", pos: "verb-ru", category: "verbs", masu: "しらせます",
    examples: [
      { ja: "結果が分かったら、知らせてください。", kana: "けっかが わかったら、しらせて ください。", romaji: "Kekka ga wakattara, shirasete kudasai.", en: "Please let me know when you find out the results." },
      { ja: "引っ越したことを友達に知らせました。", kana: "ひっこした ことを ともだちに しらせました。", romaji: "Hikkoshita koto o tomodachi ni shirasemashita.", en: "I let my friends know that I had moved." },
    ],
  },
  {
    word: "歯医者", reading: "はいしゃ", romaji: "haisha", meaning: "dentist", pos: "noun", category: "body",
    examples: [
      { ja: "明日、歯医者に行きます。", kana: "あした、はいしゃに いきます。", romaji: "Ashita, haisha ni ikimasu.", en: "I'm going to the dentist tomorrow." },
      { ja: "歯が痛いなら、歯医者に行ったほうがいいですよ。", kana: "はが いたいなら、はいしゃに いった ほうが いいですよ。", romaji: "Ha ga itai nara, haisha ni itta hou ga ii desu yo.", en: "If your tooth hurts, you should go to the dentist." },
    ],
  },
  {
    word: "熱心", reading: "ねっしん", romaji: "nesshin", meaning: "eager, enthusiastic, hard-working", pos: "na-adj", category: "na-adj",
    examples: [
      { ja: "山田さんは熱心に日本語を勉強しています。", kana: "やまださんは ねっしんに にほんごを べんきょう して います。", romaji: "Yamada-san wa nesshin ni nihongo o benkyou shite imasu.", en: "Mr. Yamada studies Japanese very eagerly." },
      { ja: "熱心な学生が多いクラスです。", kana: "ねっしんな がくせいが おおい クラスです。", romaji: "Nesshin na gakusei ga ooi kurasu desu.", en: "It's a class with many enthusiastic students." },
    ],
  },
  {
    word: "始める", reading: "はじめる", romaji: "hajimeru", meaning: "to start, to begin (something)", pos: "verb-ru", category: "verbs", masu: "はじめます",
    examples: [
      { ja: "去年からピアノを始めました。", kana: "きょねんから ピアノを はじめました。", romaji: "Kyonen kara piano o hajimemashita.", en: "I started playing the piano last year." },
      { ja: "では、授業を始めましょう。", kana: "では、じゅぎょうを はじめましょう。", romaji: "Dewa, jugyou o hajimemashou.", en: "Well then, let's start the class." },
    ],
  },
  {
    word: "もらう", reading: "もらう", romaji: "morau", meaning: "to receive, to get; to have (someone) do", pos: "verb-u", category: "verbs", masu: "もらいます",
    examples: [
      { ja: "誕生日に友達から花をもらいました。", kana: "たんじょうびに ともだちから はなを もらいました。", romaji: "Tanjoubi ni tomodachi kara hana o moraimashita.", en: "I got flowers from a friend for my birthday." },
      { ja: "父に駅まで送ってもらいました。", kana: "ちちに えきまで おくって もらいました。", romaji: "Chichi ni eki made okutte moraimashita.", en: "My father gave me a ride to the station." },
    ],
  },
  {
    word: "泣く", reading: "なく", romaji: "naku", meaning: "to cry", pos: "verb-u", category: "verbs", masu: "なきます",
    examples: [
      { ja: "赤ちゃんが泣いています。", kana: "あかちゃんが ないて います。", romaji: "Akachan ga naite imasu.", en: "The baby is crying." },
      { ja: "その映画を見て、泣いてしまいました。", kana: "その えいがを みて、ないて しまいました。", romaji: "Sono eiga o mite, naite shimaimashita.", en: "I ended up crying when I watched that movie." },
    ],
  },
  {
    word: "治る", reading: "なおる", romaji: "naoru", meaning: "to get better, to recover (from illness)", pos: "verb-u", category: "verbs", masu: "なおります",
    examples: [
      { ja: "風邪はもう治りましたか。", kana: "かぜは もう なおりましたか。", romaji: "Kaze wa mou naorimashita ka.", en: "Is your cold better now?" },
      { ja: "薬を飲んだら、頭痛がすぐ治りました。", kana: "くすりを のんだら、ずつうが すぐ なおりました。", romaji: "Kusuri o nondara, zutsuu ga sugu naorimashita.", en: "When I took the medicine, my headache went away quickly." },
    ],
  },
  {
    word: "熱", reading: "ねつ", romaji: "netsu", meaning: "fever; heat", pos: "noun", category: "body",
    examples: [
      { ja: "熱があるので、今日は休みます。", kana: "ねつが あるので、きょうは やすみます。", romaji: "Netsu ga aru node, kyou wa yasumimasu.", en: "I have a fever, so I'm taking today off." },
      { ja: "子どもの熱が下がりました。", kana: "こどもの ねつが さがりました。", romaji: "Kodomo no netsu ga sagarimashita.", en: "My child's fever has gone down." },
    ],
  },
  {
    word: "お祭り", reading: "おまつり", romaji: "omatsuri", meaning: "festival", pos: "noun", category: "hobbies",
    examples: [
      { ja: "夏になると、町でお祭りがあります。", kana: "なつに なると、まちで おまつりが あります。", romaji: "Natsu ni naru to, machi de omatsuri ga arimasu.", en: "When summer comes, there's a festival in town." },
      { ja: "一緒にお祭りに行きませんか。", kana: "いっしょに おまつりに いきませんか。", romaji: "Issho ni omatsuri ni ikimasen ka.", en: "Would you like to go to the festival together?" },
    ],
  },
  {
    word: "水道", reading: "すいどう", romaji: "suidou", meaning: "water supply, tap water", pos: "noun", category: "home",
    examples: [
      { ja: "水道の水は飲めますか。", kana: "すいどうの みずは のめますか。", romaji: "Suidou no mizu wa nomemasu ka.", en: "Can you drink the tap water?" },
      { ja: "水道が壊れて、水が出ません。", kana: "すいどうが こわれて、みずが でません。", romaji: "Suidou ga kowarete, mizu ga demasen.", en: "The water pipes are broken, so no water comes out." },
    ],
  },
  {
    word: "匂い", reading: "におい", romaji: "nioi", meaning: "smell, scent", pos: "noun", category: "ideas",
    examples: [
      { ja: "台所からいい匂いがします。", kana: "だいどころから いい においが します。", romaji: "Daidokoro kara ii nioi ga shimasu.", en: "Something smells good in the kitchen." },
      { ja: "この花はあまり匂いがしません。", kana: "この はなは あまり においが しません。", romaji: "Kono hana wa amari nioi ga shimasen.", en: "This flower doesn't have much of a scent." },
    ],
  },
  {
    word: "ベル", reading: "ベル", romaji: "beru", meaning: "bell, doorbell", pos: "noun", category: "home",
    examples: [
      { ja: "授業の始まりのベルが鳴りました。", kana: "じゅぎょうの はじまりの ベルが なりました。", romaji: "Jugyou no hajimari no beru ga narimashita.", en: "The bell rang for the start of class." },
      { ja: "玄関のベルが鳴っていますよ。", kana: "げんかんの ベルが なって いますよ。", romaji: "Genkan no beru ga natte imasu yo.", en: "The doorbell is ringing." },
    ],
  },
  {
    word: "赤ん坊", reading: "あかんぼう", romaji: "akanbou", meaning: "baby", pos: "noun", category: "people",
    examples: [
      { ja: "赤ん坊がよく寝ています。", kana: "あかんぼうが よく ねて います。", romaji: "Akanbou ga yoku nete imasu.", en: "The baby is sleeping soundly." },
      { ja: "姉の赤ん坊はとても小さくてかわいいです。", kana: "あねの あかんぼうは とても ちいさくて かわいいです。", romaji: "Ane no akanbou wa totemo chiisakute kawaii desu.", en: "My older sister's baby is very small and cute." },
    ],
  },
];
