/* ==========================================================================
   JOURNEY TO HOKUSAI — Configuration Wiring, Bilingual (EN / 日本語),
   Trailer Subtitle Switcher, Bento Lightbox & Stripe 4K Screening Room.
   Reads site, PostHog & Stripe settings exclusively from window.SITE (config.js).
   ========================================================================== */

(function () {
  "use strict";

  var cfg = window.SITE || {};
  var STORAGE_KEY = "hokusai-lang";

  var I18N = {
    en: {
      pageTitle: "JOURNEY TO HOKUSAI — A woodblock artist’s pilgrimage to Japan | A film by Chikara Motomura",
      watchPageTitle: "Screening Room — JOURNEY TO HOKUSAI",
      skip: "Skip to rental pass",

      "nav.trailer": "Trailer",
      "nav.watch": "Watch",
      "nav.film": "The Film",
      "nav.stills": "Stills",
      "nav.director": "Filmmaker",
      "nav.screenings": "Screenings",
      "nav.credits": "Credits",
      "nav.cta": "Rent Film",
      "nav.menu": "Menu",
      "nav.close": "Close",

      "hero.laurel": "Mill Valley Film Festival · World Premiere 2019",
      "hero.subtitle": "A woodblock artist’s pilgrimage to Japan",
      "hero.byline": "A film by Chikara Motomura",
      "hero.facts":
        'Feature Documentary &middot; <span class="nowrap">80 min</span> &middot; <span class="nowrap">4K Ultra HD</span> &middot; <span class="nowrap">Japan &amp; California</span>',
      "hero.ctaRent": "Rent Film — $4.99",
      "hero.ctaTrailer": "Watch Trailer",

      "trailer.regionAria": "JOURNEY TO HOKUSAI official 4K trailer",
      "trailer.kicker": "Official Trailer",
      "trailer.subGroupAria": "Trailer subtitle edition",
      "trailer.subEn": "EN Subtitles",
      "trailer.subJa": "日本語字幕",
      "trailer.playAria": "Play official trailer",
      "trailer.playLabel": "Play Trailer",
      "trailer.captionLeft": "Kyoto · Tokyo · Echizen · Obuse · Mt. Fuji",
      "trailer.captionRight": "4K Ultra HD · Stereo",

      "watch.eyebrow": "01 · Digital Release",
      "watch.heading": "Watch Journey to Hokusai at Home.",
      "watch.lead":
        "Stream the complete 80-minute documentary instantly in up to 4K Ultra HD, with both English-subtitled and Japanese-subtitled editions included.",
      "watch.rentBadge": "48-Hour Rental · 4K Ultra HD",
      "watch.rentFeat1": "Instant 80-minute feature stream in up to 4K Ultra HD",
      "watch.rentFeat2": "48-hour viewing window from moment of purchase",
      "watch.rentFeat3": "Switch between English and Japanese subtitles",
      "watch.rentFeat4": "Watch on Mac, PC, iPhone, iPad, or AirPlay",
      "watch.soon": "Stripe checkout opens soon",
      "watch.opening": "Opening Stripe Checkout…",
      "watch.error": "Unable to reach Stripe checkout. Please try again.",
      "watch.stripeNote": "Encrypted checkout powered by Stripe · Apple Pay, Google Pay & all major cards",
      "watch.enterRoom": "Already have a Screening Pass? Enter Screening Room →",

      "tier.rent.label": "Rent Film",
      "tier.rent.terms":
        "48-hour streaming pass in up to 4K Ultra HD. Includes both the English-subtitled and Japanese-subtitled editions.",

      "film.eyebrow": "02 · The Story",
      "film.heading": "Two Artists, Two Centuries, One Woodblock.",
      "film.epigraph":
        "“My ‘Journey to Hokusai’ taught me how Hokusai achieved this extraordinary immortality as his art spread out across the whole world, influencing how we see both man and nature, and how we understand the mystical power of beauty in our world.”<br>— Tom Killion",
      "film.logline":
        "Tom Killion has long held a dream – to go to Japan and learn a traditional method of printing by hand. Deeply touched by the artist Hokusai’s prints when he was a child, Tom has for almost 50 years successfully created iconic California landscape prints. This film follows Tom’s journey to Japan to finally learn the traditional technique from Kenji Takenaka, a 5th-generation printer in Kyoto.",
      "film.p1":
        "Journey to Hokusai is a feature-length documentary that intimately follows an artist’s creative process and discovery of the origins of his art. Tom Killion, a woodblock print artist, identifies the 19th-century Japanese artist Hokusai as his inspirational master and “the most talented artist ever.” When Tom makes his California landscape prints, his most important artistic references are Hokusai’s landscape prints. Tom sketches a real landscape just like Hokusai did 200 years ago. He carves woodblocks using Japanese hand tools. But when it comes to printing, Tom uses a German printing press and oil-based ink, unlike the traditional Japanese method of printing by hand with watercolor ink.",
      "film.p2":
        "The film follows every step of Tom’s journey: choosing a sketch illustrating the California landscape; carving it on woodblocks in his studio; learning the traditional printing technique with Kenji Takenaka, a 5th-generation master printer in Kyoto; and successfully producing the print. Throughout the film, Tom’s homage to Hokusai is interwoven as poignant side stories — Hokusai’s grave in Tokyo; a 9th-generation “Living National Treasure” papermaker in the Echizen region whose ancestors must have produced paper for Hokusai’s prints; the town of Obuse in central Japan, where Hokusai spent his last few years and produced some of his important works; and sites where some of Hokusai’s Mt. Fuji prints were created.",
      "film.pillar1Title": "Sketch",
      "film.pillar1Copy":
        "Like Hokusai two hundred years ago, Tom draws from a real landscape — choosing the California view that will become a new print.",
      "film.pillar2Title": "Carve",
      "film.pillar2Copy":
        "In his studio, Tom cuts the design into woodblocks with Japanese hand tools, one block for every color.",
      "film.pillar3Title": "Print",
      "film.pillar3Copy":
        "In Kyoto, Tom trades his German press and oil-based ink for watercolor pigment and the hand-held baren, guided by master printer Kenji Takenaka.",
      "film.posterAlt": "JOURNEY TO HOKUSAI — Official Film Poster",

      "specs.eyebrow": "Technical Specifications",
      "specs.heading": "Crafted in 4K Cinema Resolution.",
      "specs.runtimeDt": "Running Time",
      "specs.runtimeDd": "80 minutes (Feature Documentary)",
      "specs.masterDt": "Master Format",
      "specs.masterDd": "4K Ultra HD (3840×2160) · 16:9",
      "specs.editionsDt": "Included Editions",
      "specs.editionsDd": "English Subtitled Edition & Japanese Subtitled Edition",
      "specs.audioDt": "Language & Audio",
      "specs.audioDd": "English & Japanese · Stereo",
      "specs.scoreDt": "Music",
      "specs.scoreDd": "Taiko performed by Chako Takahashi · Cello & piano score",
      "specs.locationDt": "Filmed On Location",
      "specs.locationDd": "Kyoto, Tokyo, Echizen, Obuse & Mt. Fuji, Japan · California, USA",

      "stills.eyebrow": "03 · Visual Archive",
      "stills.heading": "Frames from the Journey.",
      "stills.lead": "Select any frame to inspect in full screen.",
      "stills.close": "Close",
      "stills.s1Alt": "Tom Killion standing in a crowded Tokyo street, looking up",
      "stills.s1Cap": "Tom Killion arrives in Tokyo, in search of Hokusai",
      "stills.s2Alt": "Tom Killion gazing up at a vividly colored ceiling painting of a mythical bird",
      "stills.s2Cap": "Face to face with Hokusai’s ceiling painting in Obuse",
      "stills.s3Alt": "A silhouetted figure on a lakeside boardwalk facing snow-capped Mt. Fuji",
      "stills.s3Cap": "Mt. Fuji — the mountain Hokusai drew again and again",
      "stills.s4Alt": "A brush spreading blue watercolor pigment across a carved woodblock",
      "stills.s4Cap": "Brushing watercolor pigment onto a carved woodblock",
      "stills.s5Alt": "Tom Killion lifting a freshly printed sheet from the woodblock",
      "stills.s5Cap": "Tom lifts a fresh hand-printed impression from the block",

      "director.eyebrow": "04 · Filmmaker",
      "director.heading": "Chikara Motomura",
      "director.p1":
        "Born in Japan and based in the San Francisco Bay Area, Chikara Motomura has worked for nearly thirty-five years as an independent documentary director, cinematographer, and editor across New York, Hawaii, and California. Beginning his career in New York, he spent more than two decades directing and shooting for major Japanese television networks including NHK, Japan’s public broadcaster.",
      "director.p2":
        "After moving to the Bay Area in 1997, Motomura served as a principal collaborator on fourteen independent feature films with Sundance Grand Jury Prize and Cannes Caméra d’Or winner Rob Nilsson, and worked as cinematographer and editor on Link TV’s Peabody Award-winning program <em>Mosaic</em>. Often working as an intimate one-person camera and sound crew, his feature documentaries include <em>Journey to Hokusai</em> (2019), <em>Kinobu: Food, Tradition, and Identity</em> (2025), and the forthcoming <em>The Last Boatbuilder</em>.",
      "director.siteLink": "chikaramotomura.net ↗",
      "director.contactLink": "Contact Filmmaker ↗",

      "screenings.eyebrow": "05 · Exhibition",
      "screenings.heading": "Screenings.",
      "screenings.s1Meta": "World Premiere · October 2019",
      "screenings.s1Title": "Mill Valley Film Festival",
      "screenings.s1Detail":
        "Premiered at the 2019 Mill Valley Film Festival in Marin County, California — Tom Killion’s home ground on the slopes of Mt. Tamalpais.",
      "screenings.s2Meta": "Museum Screening · November 2023",
      "screenings.s2Title": "Bowers Museum — Santa Ana, California",
      "screenings.s2Detail":
        "Screened at the Bowers Museum, followed by a Q&A with Tom Killion.",
      "screenings.s3Meta": "Theatrical Screening · 2025",
      "screenings.s3Title": "The Lark Theater — Larkspur, California",
      "screenings.s3Detail":
        "Returned to the big screen in Marin County at the historic Lark Theater.",
      "screenings.s4Meta": "Festival Screening · June 2020",
      "screenings.s4Title": "Fine Art Film Festival",
      "screenings.s5Meta": "Festival Screening · June 2020",
      "screenings.s5Title": "Lift-Off Tokyo Film Festival",
      "screenings.s6Meta": "Festival Screening · November 2020",
      "screenings.s6Title": "Coronado Island Film Festival — Coronado, California",
      "screenings.s7Meta": "Festival Screening · May 2022",
      "screenings.s7Title": "Mendocino Film Festival — Mendocino, California",
      "screenings.artistLink": "Visit Tom Killion’s studio (tomkillion.com) ↗",
      "screenings.inquiries": "Screenings & Press Inquiries:",

      "credits.eyebrow": "06 · Credits",
      "credits.heading": "Film Credits",
      "credits.prodDirEdDt": "Produced, Directed & Edited By",
      "credits.prodDirEdDd": "Chikara Motomura",
      "credits.camSoundDt": "Cinematography & Sound Recording",
      "credits.camSoundDd": "Chikara Motomura",
      "credits.featuringDt": "Featuring",
      "credits.featuringDd":
        '<span class="credits-line">Tom Killion (Woodblock Print Artist)</span><span class="credits-line">Kenji Takenaka (5th-Generation Master Printer, Kyoto)</span>',
      "credits.colorDt": "Color Grading",
      "credits.colorDd": "Gary Coates",
      "credits.soundDt": "Sound Edit & Mix",
      "credits.soundDd": "Philip Perkins",
      "credits.titleDt": "Title Conceived By",
      "credits.titleDd": "Beth LaDove",
      "credits.editConsultDt": "Editorial Consultant",
      "credits.editConsultDd": "Sylvia Donati",
      "credits.musicDt": "Music",
      "credits.musicDd":
        '<span class="credits-line">Taiko performed by Chako Takahashi</span><span class="credits-line">“Piano and Cello” — Soundtrapper</span><span class="credits-line">“The Tale-Teller (Strings Only)” — LynnePublishing</span><span class="credits-line">“Retro Lounge Jazz” — Vuxelle</span><span class="credits-line">“Atmospheric Cello and Piano Film,” “Spacious Cello and Piano Film Music,” “Quiet Wonder (Piano Trio),” “Ambient Cello and Piano Atmosphere,” “Cello and Piano Film Music Atmosphere,” “Mysterious, Suspense – Sparse Cello and Piano Atmosphere” — GestonWreen</span>',
      "credits.patronsDt": "Patrons",
      "credits.patronsDd":
        '<span class="credits-thanks-grid"><span>Linda Brownrigg</span><span>Georgia Donati</span><span>David Abercrombie</span><span>John &amp; Patty Brissenden</span><span>Nancy Donald</span><span>Andrea London</span><span>Evan Doll</span><span>Michael Skarbinski</span><span>Steve Gallagher</span><span>Tom Hopkins</span><span>Devon Hoffman</span><span>Crystal Wilson</span><span>B Vonnegut</span><span>Bob Epstein</span><span>Lawrence Willison</span></span>',
      "credits.thanksDt": "Special Thanks",
      "credits.thanksDd":
        '<span class="credits-thanks-grid"><span>Tom Killion</span><span>The Killion Family</span><span>Kenji Takenaka</span><span>Seihachi Takenaka</span><span>Kazuki Nojima</span><span>Hiroka Yabushita</span><span>Daiki Nagai</span><span>Takezasado Staff</span><span>Ichibei Iwano</span><span>The Iwano Family</span><span>Seikyoji Temple</span><span>Hideyuki Honda</span><span>Ohya Shobo Bookstore</span><span>Kimio Koketsu</span><span>Kuri Koketsu</span><span>Takai Kozan Memorial Museum</span><span>Isako Kaneda</span><span>Hokusai-kan Museum</span><span>Miyuki Arai</span><span>Mizuki Kitazawa</span><span>Gansho-in Temple</span><span>Miyoe Watanabe</span><span>Yoko Watanabe</span><span>Shigeyoshi Hara</span><span>The Hara Family</span><span>Hozo-in</span><span>Toshiyuki Yano</span><span>Santa Cruz Museum of Art &amp; History</span><span>Whitney Ford-Terry</span><span>Jackie Sarfati</span><span>Shannon Smigo</span></span>',

      "footer.rights": "© Chikara Motomura. All rights reserved.",
      "footer.watch": "Rent Film",
      "footer.room": "Screening Room",
      "footer.contact": "Contact",

      "watchRoom.skip": "Skip to player",
      "watchRoom.subGroupAria": "Film subtitle edition",
      "watchRoom.backAria": "Return to JOURNEY TO HOKUSAI main page",
      "watchRoom.options": "Rent Film",
      "watchRoom.vfAria": "JOURNEY TO HOKUSAI full film player",
      "watchRoom.modeDefault": "Screening Room",
      "watchRoom.modeRent": "48-Hour Rental · 4K",
      "watchRoom.hudDir": "Directed by Chikara Motomura",
      "watchRoom.hudAudio": "English & Japanese · EN / JP Subtitles",
      "watchRoom.gateTitle": "Screening Pass Required",
      "watchRoom.gateCopy":
        "Rent <em>JOURNEY TO HOKUSAI</em> for <strong>$4.99</strong> to unlock a 48-hour 4K Ultra HD streaming pass. After Stripe checkout, you are automatically brought back here to watch the full film.",
      "watchRoom.gateRentCta": "Rent Film — $4.99",
      "watchRoom.backHome": "About the Film",
      "watchRoom.verifyingTitle": "Verifying Screening Pass",
      "watchRoom.verifyingCopy": "Confirming your Stripe order and preparing 4K playback…",
      "watchRoom.expiredTitle": "Access Expired or Invalid",
      "watchRoom.expiredCopy":
        "This screening pass could not be verified or its 48-hour rental window has ended. Return to the main page or contact us if you need assistance with your order.",
      "watchRoom.rentalUntil": "48-hour rental active · Available until ",
      "watchRoom.ytRent": "Thank you for renting JOURNEY TO HOKUSAI. Bookmark this page — your rental pass is active for 48 hours."
    },

    ja: {
      pageTitle: "JOURNEY TO HOKUSAI — 木版画家、北斎の源流をたどる | 本村 力 監督作品",
      watchPageTitle: "スクリーニングルーム — JOURNEY TO HOKUSAI",
      skip: "レンタル案内へスキップ",

      "nav.trailer": "予告編",
      "nav.watch": "視聴案内",
      "nav.film": "作品紹介",
      "nav.stills": "場面写真",
      "nav.director": "監督",
      "nav.screenings": "上映歴",
      "nav.credits": "クレジット",
      "nav.cta": "レンタル視聴",
      "nav.menu": "メニュー",
      "nav.close": "閉じる",

      "hero.laurel": "ミルバレー映画祭 2019 ワールドプレミア",
      "hero.subtitle": "ある木版画家が、自らの芸術の源流をたどる旅",
      "hero.byline": "本村 力 監督作品",
      "hero.facts":
        '長編ドキュメンタリー &middot; <span class="nowrap">80分</span> &middot; <span class="nowrap">4K Ultra HD</span> &middot; <span class="nowrap">日本・カリフォルニア</span>',
      "hero.ctaRent": "レンタル視聴 — $4.99",
      "hero.ctaTrailer": "予告編を見る",

      "trailer.regionAria": "『Journey to Hokusai』公式4K予告編",
      "trailer.kicker": "公式予告編",
      "trailer.subGroupAria": "予告編の字幕切り替え",
      "trailer.subEn": "英語字幕",
      "trailer.subJa": "日本語字幕",
      "trailer.playAria": "公式予告編を再生",
      "trailer.playLabel": "予告編を再生",
      "trailer.captionLeft": "京都・東京・越前・小布施・富士山",
      "trailer.captionRight": "4K Ultra HD · ステレオ",

      "watch.eyebrow": "01 · デジタル配信",
      "watch.heading": "ご自宅で『Journey to Hokusai』を鑑賞する。",
      "watch.lead":
        "80分の本編を最高4K Ultra HD画質で即時ストリーミング再生。英語字幕版・日本語字幕版の両方をお楽しみいただけます。",
      "watch.rentBadge": "48時間レンタル · 4K Ultra HD",
      "watch.rentFeat1": "80分の本編を最高4K Ultra HD画質で即時ストリーミング",
      "watch.rentFeat2": "レンタル開始から48時間、いつでも視聴できます",
      "watch.rentFeat3": "英語字幕版と日本語字幕版を切り替え可能",
      "watch.rentFeat4": "Mac・PC・iPhone・iPad・AirPlayで鑑賞可能",
      "watch.soon": "Stripe決済受付はまもなく開始します",
      "watch.opening": "Stripe決済画面を開いています…",
      "watch.error": "決済サーバーに接続できませんでした。もう一度お試しください。",
      "watch.stripeNote": "Stripeによる暗号化決済 · Apple Pay・Google Pay・各種カード対応",
      "watch.enterRoom": "視聴パスをお持ちの方はこちら（スクリーニングルーム）→",

      "tier.rent.label": "レンタル視聴",
      "tier.rent.terms":
        "48時間の4K Ultra HDストリーミング視聴パス。英語字幕版・日本語字幕版の両方をご覧いただけます。",

      "film.eyebrow": "02 · 作品紹介",
      "film.heading": "二人の芸術家、二百年の時、一枚の版木。",
      "film.epigraph":
        "「北斎をめぐるこの旅で、私は学びました。北斎の芸術がいかに世界中へと広がり、人と自然の見方、そしてこの世界にある美の神秘的な力の捉え方に影響を与え、比類なき不滅の存在となったのかを。」<br>— トム・キリオン",
      "film.logline":
        "トム・キリオンには長年の夢があった。日本へ行き、伝統的な手摺りの技法を学ぶことだ。幼い頃に北斎の版画に深く心を動かされたトムは、50年近くにわたりカリフォルニアの風景を描いた木版画を制作し、高い評価を得てきた。本作は、京都の五代目摺師・竹中健司のもとで、ついにその伝統技法を学ぶトムの日本への旅を追う。",
      "film.p1":
        "『Journey to Hokusai』は、一人の芸術家の創作過程と、自らの芸術の源流を発見していく姿を親密に見つめた長編ドキュメンタリーである。木版画家トム・キリオンは、19世紀の日本の絵師・葛飾北斎を心の師と仰ぎ、「史上最も才能ある芸術家」と語る。カリフォルニアの風景版画を制作する際、彼にとって最も重要な手本は北斎の風景版画だ。トムは200年前の北斎と同じように実際の風景を写生し、日本の彫刻刀で版木を彫る。しかし摺りの工程では、伝統的な水性絵具による手摺りではなく、ドイツ製のプレス機と油性インクを用いてきた。",
      "film.p2":
        "映画はトムの旅のすべての段階を追う。カリフォルニアの風景を描いた下絵を選び、アトリエで版木を彫り、京都で五代目摺師・竹中健司から伝統的な摺りの技法を学び、そして作品を摺り上げるまで。その合間には、北斎へのオマージュが心に響くエピソードとして織り込まれる。東京にある北斎の墓、北斎の版画の紙を漉いていたであろう越前の九代目・人間国宝の紙漉き職人、北斎が晩年を過ごし重要な作品を残した信州・小布施の町、そして北斎が富士を描いた場所の数々を、トムは訪ねていく。",
      "film.pillar1Title": "描 · Sketch",
      "film.pillar1Copy":
        "200年前の北斎と同じように、トムは実際の風景を写生し、新たな版画となるカリフォルニアの景色を選ぶ。",
      "film.pillar2Title": "彫 · Carve",
      "film.pillar2Copy":
        "アトリエで、日本の彫刻刀を使い、色ごとに一枚ずつ版木を彫り進めていく。",
      "film.pillar3Title": "摺 · Print",
      "film.pillar3Copy":
        "京都でトムは、ドイツ製プレス機と油性インクを手放し、摺師・竹中健司の指導のもと、水性絵具と馬連による手摺りに挑む。",
      "film.posterAlt": "『JOURNEY TO HOKUSAI』公式ポスター",

      "specs.eyebrow": "作品仕様",
      "specs.heading": "4Kシネママスター収録。",
      "specs.runtimeDt": "上映時間",
      "specs.runtimeDd": "80分（長編ドキュメンタリー）",
      "specs.masterDt": "マスターフォーマット",
      "specs.masterDd": "4K Ultra HD (3840×2160) · 16:9",
      "specs.editionsDt": "収録バージョン",
      "specs.editionsDd": "英語字幕版／日本語字幕版",
      "specs.audioDt": "言語・音声",
      "specs.audioDd": "英語・日本語 · ステレオ",
      "specs.scoreDt": "音楽",
      "specs.scoreDd": "太鼓演奏：Chako Takahashi · チェロとピアノによる劇伴",
      "specs.locationDt": "撮影地",
      "specs.locationDd": "日本（京都・東京・越前・小布施・富士山）· アメリカ・カリフォルニア",

      "stills.eyebrow": "03 · 場面写真",
      "stills.heading": "旅のひとこま。",
      "stills.lead": "写真をクリックすると拡大表示されます。",
      "stills.close": "閉じる",
      "stills.s1Alt": "人で賑わう東京の街角で空を見上げるトム・キリオン",
      "stills.s1Cap": "北斎を求めて東京に降り立ったトム・キリオン",
      "stills.s2Alt": "鮮やかな霊鳥の天井画を見上げるトム・キリオン",
      "stills.s2Cap": "小布施で北斎の天井画と向き合う",
      "stills.s3Alt": "湖畔の桟橋から雪をいただく富士山を望む人影",
      "stills.s3Cap": "北斎が幾度も描いた富士の姿",
      "stills.s4Alt": "彫り上がった版木に青い水性絵具を刷毛で広げる手元",
      "stills.s4Cap": "版木に刷毛で水性絵具をのせる",
      "stills.s5Alt": "摺り上がったばかりの紙を版木から持ち上げるトム・キリオン",
      "stills.s5Cap": "手摺りしたばかりの一枚を版木から剥がすトム",

      "director.eyebrow": "04 · 監督プロフィール",
      "director.heading": "本村 力（Chikara Motomura）",
      "director.p1":
        "日本出身、サンフランシスコ・ベイエリア在住。ニューヨーク、ハワイ、サンフランシスコでテレビ／映画制作に携わっておよそ35年。ニューヨークでキャリアをスタートし、NHKをはじめとする日本のテレビ局向け番組のディレクター／撮影監督として20年以上活動。",
      "director.p2":
        "1997年よりベイエリアに拠点を移し、カンヌ国際映画祭カメラ・ドールおよびサンダンス映画祭審査員大賞受賞監督ロブ・ニルソンの独立映画14作品に主要スタッフとして参画したほか、ピーボディ賞受賞報道番組『Mosaic』（Link TV）で撮影・編集を担当。撮影から録音・編集まで単独で手がける長編ドキュメンタリーに『Journey to Hokusai』（2019年）、『木乃婦 — 食、伝統、アイデンティティ』（2025年）、そして現在制作中の『The Last Boatbuilder（最後の和船大工）』がある。",
      "director.siteLink": "公式サイト chikaramotomura.net ↗",
      "director.contactLink": "監督へのお問い合わせ ↗",

      "screenings.eyebrow": "05 · 上映歴",
      "screenings.heading": "上映情報。",
      "screenings.s1Meta": "ワールドプレミア · 2019年10月",
      "screenings.s1Title": "ミルバレー映画祭",
      "screenings.s1Detail":
        "トム・キリオンの故郷、タマルパイス山の麓に広がるカリフォルニア州マリン郡で開催された2019年ミルバレー映画祭にて初公開。",
      "screenings.s2Meta": "美術館上映 · 2023年11月",
      "screenings.s2Title": "バウアーズ美術館（カリフォルニア州サンタアナ）",
      "screenings.s2Detail":
        "バウアーズ美術館にて上映、トム・キリオンによる質疑応答を開催。",
      "screenings.s3Meta": "劇場上映 · 2025年",
      "screenings.s3Title": "ラーク・シアター（カリフォルニア州ラークスパー）",
      "screenings.s3Detail":
        "マリン郡の歴史ある映画館ラーク・シアターで、再びスクリーンに。",
      "screenings.s4Meta": "映画祭上映 · 2020年6月",
      "screenings.s4Title": "ファインアート映画祭（Fine Art Film Festival）",
      "screenings.s5Meta": "映画祭上映 · 2020年6月",
      "screenings.s5Title": "Lift-Off Tokyo 映画祭",
      "screenings.s6Meta": "映画祭上映 · 2020年11月",
      "screenings.s6Title": "コロナド・アイランド映画祭（カリフォルニア州コロナド）",
      "screenings.s7Meta": "映画祭上映 · 2022年5月",
      "screenings.s7Title": "メンドシーノ映画祭（カリフォルニア州メンドシーノ）",
      "screenings.artistLink": "トム・キリオン公式サイト（tomkillion.com）↗",
      "screenings.inquiries": "上映・取材のお問い合わせ：",

      "credits.eyebrow": "06 · クレジット",
      "credits.heading": "スタッフ・協力",
      "credits.prodDirEdDt": "製作・監督・編集",
      "credits.prodDirEdDd": "本村 力（Chikara Motomura）",
      "credits.camSoundDt": "撮影・録音",
      "credits.camSoundDd": "本村 力（Chikara Motomura）",
      "credits.featuringDt": "出演",
      "credits.featuringDd":
        '<span class="credits-line">トム・キリオン（木版画家）</span><span class="credits-line">竹中 健司（京都・五代目摺師）</span>',
      "credits.colorDt": "カラーグレーディング",
      "credits.colorDd": "Gary Coates",
      "credits.soundDt": "音響編集・ミックス",
      "credits.soundDd": "Philip Perkins",
      "credits.titleDt": "タイトル考案",
      "credits.titleDd": "Beth LaDove",
      "credits.editConsultDt": "編集コンサルタント",
      "credits.editConsultDd": "Sylvia Donati",
      "credits.musicDt": "音楽",
      "credits.musicDd":
        '<span class="credits-line">太鼓演奏：Chako Takahashi</span><span class="credits-line">“Piano and Cello” — Soundtrapper</span><span class="credits-line">“The Tale-Teller (Strings Only)” — LynnePublishing</span><span class="credits-line">“Retro Lounge Jazz” — Vuxelle</span><span class="credits-line">“Atmospheric Cello and Piano Film,” “Spacious Cello and Piano Film Music,” “Quiet Wonder (Piano Trio),” “Ambient Cello and Piano Atmosphere,” “Cello and Piano Film Music Atmosphere,” “Mysterious, Suspense – Sparse Cello and Piano Atmosphere” — GestonWreen</span>',
      "credits.patronsDt": "パトロン",
      "credits.patronsDd":
        '<span class="credits-thanks-grid"><span>Linda Brownrigg</span><span>Georgia Donati</span><span>David Abercrombie</span><span>John &amp; Patty Brissenden</span><span>Nancy Donald</span><span>Andrea London</span><span>Evan Doll</span><span>Michael Skarbinski</span><span>Steve Gallagher</span><span>Tom Hopkins</span><span>Devon Hoffman</span><span>Crystal Wilson</span><span>B Vonnegut</span><span>Bob Epstein</span><span>Lawrence Willison</span></span>',
      "credits.thanksDt": "特別協力",
      "credits.thanksDd":
        '<span class="credits-thanks-grid"><span>Tom Killion</span><span>The Killion Family</span><span>Kenji Takenaka</span><span>Seihachi Takenaka</span><span>Kazuki Nojima</span><span>Hiroka Yabushita</span><span>Daiki Nagai</span><span>Takezasado Staff</span><span>Ichibei Iwano</span><span>The Iwano Family</span><span>Seikyoji Temple</span><span>Hideyuki Honda</span><span>Ohya Shobo Bookstore</span><span>Kimio Koketsu</span><span>Kuri Koketsu</span><span>Takai Kozan Memorial Museum</span><span>Isako Kaneda</span><span>Hokusai-kan Museum</span><span>Miyuki Arai</span><span>Mizuki Kitazawa</span><span>Gansho-in Temple</span><span>Miyoe Watanabe</span><span>Yoko Watanabe</span><span>Shigeyoshi Hara</span><span>The Hara Family</span><span>Hozo-in</span><span>Toshiyuki Yano</span><span>Santa Cruz Museum of Art &amp; History</span><span>Whitney Ford-Terry</span><span>Jackie Sarfati</span><span>Shannon Smigo</span></span>',

      "footer.rights": "© Chikara Motomura. All rights reserved.",
      "footer.watch": "レンタル視聴",
      "footer.room": "スクリーニングルーム",
      "footer.contact": "お問い合わせ",

      "watchRoom.skip": "プレーヤーへスキップ",
      "watchRoom.subGroupAria": "本編の字幕切り替え",
      "watchRoom.backAria": "『Journey to Hokusai』トップページへ戻る",
      "watchRoom.options": "レンタル視聴",
      "watchRoom.vfAria": "『Journey to Hokusai』本編プレーヤー",
      "watchRoom.modeDefault": "スクリーニングルーム",
      "watchRoom.modeRent": "48時間レンタル · 4K",
      "watchRoom.hudDir": "監督：本村 力",
      "watchRoom.hudAudio": "英語・日本語 · 英語／日本語字幕",
      "watchRoom.gateTitle": "視聴パスが必要です",
      "watchRoom.gateCopy":
        "『Journey to Hokusai』は<strong>$4.99</strong>（48時間の4K Ultra HDストリーミング視聴パス）にてご鑑賞いただけます。Stripeでのお支払い完了後、自動的にこのページで本編再生が解禁されます。",
      "watchRoom.gateRentCta": "レンタル視聴 — $4.99",
      "watchRoom.backHome": "作品ページへ戻る",
      "watchRoom.verifyingTitle": "視聴パスを確認しています",
      "watchRoom.verifyingCopy": "Stripeの決済情報を照会し、4K再生の準備を行っています…",
      "watchRoom.expiredTitle": "アクセス期限切れ・無効なリンク",
      "watchRoom.expiredCopy":
        "視聴パスを確認できないか、48時間のレンタル期間が終了しています。トップページへ戻るか、サポートまでお問い合わせください。",
      "watchRoom.rentalUntil": "48時間レンタル有効 · 視聴期限：",
      "watchRoom.ytRent": "『Journey to Hokusai』をレンタルいただき、ありがとうございます。このページをブックマークしてご利用ください（48時間有効）。"
    }
  };

  var DEFAULT_EN_TIERS = {
    rent: {
      label: "Rent Film",
      terms:
        "48-hour streaming pass in up to 4K Ultra HD. Includes both the English-subtitled and Japanese-subtitled editions."
    }
  };

  var STILLS_ITEMS = [
    { src: "assets/stills/tokyo-street.jpg", capKey: "stills.s1Cap", altKey: "stills.s1Alt" },
    { src: "assets/stills/ceiling-painting.jpg", capKey: "stills.s2Cap", altKey: "stills.s2Alt" },
    { src: "assets/stills/mt-fuji.jpg", capKey: "stills.s3Cap", altKey: "stills.s3Alt" },
    { src: "assets/stills/inking-block.jpg", capKey: "stills.s4Cap", altKey: "stills.s4Alt" },
    { src: "assets/stills/fresh-print.jpg", capKey: "stills.s5Cap", altKey: "stills.s5Alt" }
  ];

  var currentLang = "en";
  var currentTrailerVer = "en";
  var userPinnedTrailerVer = false;
  var trailerPlayTracked = false;
  var activeLightboxIdx = -1;

  var watchRoomState = "gate"; // "gate" | "yt" | "verifying" | "active" | "expired"
  var watchRoomData = null;

  function trimStr(val) {
    return typeof val === "string" ? val.trim() : "";
  }

  function initPostHog() {
    var phKey = trimStr(cfg.POSTHOG_KEY);
    if (!phKey) return;
    var phHost = trimStr(cfg.POSTHOG_HOST) || "https://us.i.posthog.com";

    /* Official PostHog async web loader (array.js) */
    !(function (t, e) {
      var o, n, p, r;
      e.__SV ||
        ((window.posthog = e),
        (e._i = []),
        (e.init = function (i, s, a) {
          function g(t, e) {
            var o = e.split(".");
            2 == o.length && ((t = t[o[0]]), (e = o[1])),
              (t[e] = function () {
                t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
              });
          }
          ((p = t.createElement("script")).type = "text/javascript"),
            (p.crossOrigin = "anonymous"),
            (p.async = !0),
            (p.src =
              s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") +
              "/static/array.js"),
            (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);
          var u = e;
          for (
            void 0 !== a ? (u = e[a] = []) : (a = "posthog"),
              u.people = u.people || [],
              Object.defineProperty(u, "toString", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function (t) {
                  var e = "posthog";
                  return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e;
                }
              }),
              Object.defineProperty(u.people, "toString", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function () {
                  return u.toString(1) + ".people (stub)";
                }
              }),
              o =
                "init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(
                  " "
                ),
              n = 0;
            n < o.length;
            n++
          )
            g(u, o[n]);
          e._i.push([i, s, a]);
        }),
        (e.__SV = 1));
    })(document, window.posthog || []);

    window.posthog.init(phKey, {
      api_host: phHost,
      person_profiles: "identified_only",
      capture_pageview: true,
      capture_pageleave: true
    });
  }

  function trackEvent(eventName, props) {
    try {
      if (window.posthog && typeof window.posthog.capture === "function") {
        window.posthog.capture(eventName, props || {});
      }
    } catch (e) {}
  }

  function t(key) {
    var dict = I18N[currentLang] || I18N.en;
    return dict[key] !== undefined ? dict[key] : I18N.en[key] || "";
  }

  function detectInitialLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var qLang = trimStr(params.get("lang")).toLowerCase();
      if (qLang === "ja" || qLang === "en") {
        try {
          window.localStorage.setItem(STORAGE_KEY, qLang);
        } catch (eSave) {}
        return qLang;
      }
    } catch (e) {}

    try {
      var saved = trimStr(window.localStorage.getItem(STORAGE_KEY)).toLowerCase();
      if (saved === "ja" || saved === "en") return saved;
    } catch (e2) {}

    return "en";
  }

  function localizeCheckoutUrl(rawUrl, lang) {
    if (!rawUrl) return "";
    try {
      var parsed = new URL(rawUrl, window.location.href);
      if (parsed.hostname.indexOf("stripe.com") !== -1) {
        parsed.searchParams.set("locale", lang === "ja" ? "ja" : "en");
      }
      return parsed.toString();
    } catch (e) {
      return rawUrl;
    }
  }

  function resolveTierCheckoutLink(tierCfg) {
    if (!tierCfg) return "";
    var raw =
      currentLang === "ja" && trimStr(tierCfg.linkJa)
        ? trimStr(tierCfg.linkJa)
        : trimStr(tierCfg.link);
    return localizeCheckoutUrl(raw, currentLang);
  }

  // Accepts "https://vimeo.com/ID/HASH?…", "ID/HASH", "ID:HASH" or "ID".
  function parseVimeoRef(ref) {
    var m = /(?:^|vimeo\.com\/(?:video\/)?)(\d{6,12})(?:[\/:]([0-9a-fA-F]{6,20}))?/.exec(trimStr(ref));
    return m ? { id: m[1], hash: m[2] || "" } : null;
  }

  function vimeoEmbedUrl(ref, autoplay) {
    var v = parseVimeoRef(ref);
    if (!v) return "";
    return (
      "https://player.vimeo.com/video/" +
      v.id +
      "?" +
      (v.hash ? "h=" + v.hash + "&" : "") +
      "dnt=1&title=0&byline=0&portrait=0" +
      (autoplay ? "&autoplay=1" : "")
    );
  }

  function makePlayerFrame(src, title) {
    var frame = document.createElement("iframe");
    frame.src = src;
    frame.title = title;
    frame.allow = "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    return frame;
  }

  function trailerVimeoSrc(ver, autoplay) {
    var en = trimStr(cfg.trailerVimeoEn);
    var ja = trimStr(cfg.trailerVimeoJa) || en;
    return vimeoEmbedUrl(ver === "ja" ? ja : en, autoplay);
  }

  function setTrailerVersion(ver, manualPin) {
    var targetVer = ver === "ja" ? "ja" : "en";
    if (manualPin) {
      userPinnedTrailerVer = true;
      trackEvent("trailer_subtitle_switched", {
        edition: targetVer === "ja" ? "ja_sub" : "en_sub",
        lang: currentLang
      });
    }
    currentTrailerVer = targetVer;

    var subBtns = document.querySelectorAll("[data-trailer-ver]");
    for (var i = 0; i < subBtns.length; i++) {
      var active = subBtns[i].getAttribute("data-trailer-ver") === targetVer;
      subBtns[i].classList.toggle("is-active", active);
      subBtns[i].setAttribute("aria-pressed", active ? "true" : "false");
    }

    // Vimeo trailers: swap the player only once it has been started.
    if (trimStr(cfg.trailerVimeoEn)) {
      var vimeoFrame = document.getElementById("trailer-vimeo");
      if (vimeoFrame) {
        var nextSrc = trailerVimeoSrc(targetVer, true);
        if (vimeoFrame.getAttribute("src") !== nextSrc) vimeoFrame.setAttribute("src", nextSrc);
      }
      return;
    }

    var trailerVideo = document.getElementById("trailer-video");
    if (!trailerVideo) return;

    var srcEn = trimStr(cfg.trailerSrcEn) || "assets/trailer-en.mp4";
    var srcJa = trimStr(cfg.trailerSrcJa) || srcEn;
    var desiredSrc = targetVer === "ja" ? srcJa : srcEn;

    if (trailerVideo.getAttribute("src") === desiredSrc) return;

    var wasPlaying = !trailerVideo.paused && !trailerVideo.ended;
    var resumeTime = trailerVideo.currentTime || 0;

    trailerVideo.setAttribute("src", desiredSrc);
    if (resumeTime > 0.2) {
      var restorePlayback = function () {
        trailerVideo.removeEventListener("loadedmetadata", restorePlayback);
        try {
          trailerVideo.currentTime = Math.min(resumeTime, Math.max(0, (trailerVideo.duration || resumeTime) - 0.1));
        } catch (eSeek) {}
        if (wasPlaying) {
          var p = trailerVideo.play();
          if (p && typeof p.catch === "function") p.catch(function () {});
        }
      };
      trailerVideo.addEventListener("loadedmetadata", restorePlayback);
      trailerVideo.load();
    }
  }

  function wireGlobalLinksAndTrailer() {
    var posterUrl = trimStr(cfg.posterSrc);
    var posterEl = document.getElementById("hero-poster-img");
    if (posterEl && posterUrl && posterEl.getAttribute("src") !== posterUrl) {
      posterEl.setAttribute("src", posterUrl);
    }

    var trailerEmbedUrl = trimStr(cfg.trailerEmbed);
    var trailerScreen = document.getElementById("trailer-screen");
    var trailerVideo = document.getElementById("trailer-video");
    var trailerPlayBtn = document.getElementById("trailer-play-btn");

    if (trailerScreen && trailerEmbedUrl) {
      trailerScreen.innerHTML = "";
      var iframe = document.createElement("iframe");
      iframe.src = trailerEmbedUrl;
      iframe.title = "JOURNEY TO HOKUSAI — Official Trailer";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.loading = "lazy";
      trailerScreen.appendChild(iframe);
      var subToggleWrap = document.querySelector(".sub-toggle");
      if (subToggleWrap) subToggleWrap.hidden = true;
    } else if (trailerScreen && trailerVideo && trimStr(cfg.trailerVimeoEn)) {
      // Vimeo trailers: keep the poster + play pill, load the player on click.
      trailerVideo.removeAttribute("src");
      trailerVideo.setAttribute("preload", "none");
      trailerVideo.controls = false;
      var vimeoPoster = trimStr(cfg.trailerPoster);
      if (vimeoPoster) trailerVideo.setAttribute("poster", vimeoPoster);

      var startVimeoTrailer = function () {
        if (document.getElementById("trailer-vimeo")) return;
        var vFrame = makePlayerFrame(
          trailerVimeoSrc(currentTrailerVer, true),
          "JOURNEY TO HOKUSAI — Official Trailer"
        );
        vFrame.id = "trailer-vimeo";
        trailerScreen.appendChild(vFrame);
        trailerVideo.hidden = true;
        if (trailerPlayBtn) trailerPlayBtn.hidden = true;
        if (!trailerPlayTracked) {
          trailerPlayTracked = true;
          trackEvent("trailer_played", {
            edition: currentTrailerVer === "ja" ? "ja_sub" : "en_sub",
            lang: currentLang
          });
        }
      };
      if (trailerPlayBtn) trailerPlayBtn.addEventListener("click", startVimeoTrailer);
      trailerVideo.addEventListener("click", startVimeoTrailer);

      var vimeoSubBtns = document.querySelectorAll("[data-trailer-ver]");
      for (var vs = 0; vs < vimeoSubBtns.length; vs++) {
        vimeoSubBtns[vs].addEventListener("click", function (ev) {
          setTrailerVersion(ev.currentTarget.getAttribute("data-trailer-ver"), true);
        });
      }
    } else if (trailerVideo) {
      var trailerPoster = trimStr(cfg.trailerPoster);
      if (trailerPoster && trailerVideo.getAttribute("poster") !== trailerPoster) {
        trailerVideo.setAttribute("poster", trailerPoster);
      }

      if (trailerPlayBtn) {
        trailerVideo.controls = false;
        var startTrailer = function () {
          trailerVideo.controls = true;
          trailerPlayBtn.hidden = true;
          var playPromise = trailerVideo.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(function () {});
          }
        };
        trailerPlayBtn.addEventListener("click", startTrailer);
        trailerVideo.addEventListener("play", function () {
          trailerVideo.controls = true;
          trailerPlayBtn.hidden = true;
          if (!trailerPlayTracked) {
            trailerPlayTracked = true;
            trackEvent("trailer_played", {
              edition: currentTrailerVer === "ja" ? "ja_sub" : "en_sub",
              lang: currentLang
            });
          }
        });
      }

      var subBtns = document.querySelectorAll("[data-trailer-ver]");
      for (var s = 0; s < subBtns.length; s++) {
        subBtns[s].addEventListener("click", function (ev) {
          var v = ev.currentTarget.getAttribute("data-trailer-ver");
          setTrailerVersion(v, true);
        });
      }
    }

    var dirUrl = trimStr(cfg.directorSiteUrl);
    if (dirUrl) {
      var dirLinks = document.querySelectorAll("[data-site-director]");
      for (var d = 0; d < dirLinks.length; d++) {
        dirLinks[d].setAttribute("href", dirUrl);
      }
    }

    var email = trimStr(cfg.contactEmail);
    if (email) {
      var emailLinks = document.querySelectorAll("[data-site-email]");
      for (var k = 0; k < emailLinks.length; k++) {
        emailLinks[k].setAttribute("href", "mailto:" + email);
        if (emailLinks[k].getAttribute("data-site-email") === "text") {
          emailLinks[k].textContent = email;
        }
      }
    }
  }

  function syncLocalizedExternalLinks() {
    var restLinks = document.querySelectorAll("[data-site-restaurant]");
    var restUrl =
      currentLang === "ja" && trimStr(cfg.restaurantSiteUrlJa)
        ? trimStr(cfg.restaurantSiteUrlJa)
        : trimStr(cfg.restaurantSiteUrl) || "https://www.tomkillion.com";
    for (var i = 0; i < restLinks.length; i++) {
      restLinks[i].setAttribute("href", restUrl);
    }
  }

  function startWorkerCheckout(workerUrl, tierKey, btnEl, statusEl, defaultLabel) {
    btnEl.disabled = true;
    btnEl.textContent = t("watch.opening");
    if (statusEl) {
      statusEl.hidden = true;
    }

    fetch(workerUrl + "/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tier: tierKey, locale: currentLang })
    })
      .then(function (res) {
        if (!res.ok) {
          throw new Error("Checkout HTTP " + res.status);
        }
        return res.json();
      })
      .then(function (data) {
        if (data && data.url) {
          window.location.href = localizeCheckoutUrl(data.url, currentLang);
          return;
        }
        throw new Error("Missing checkout URL");
      })
      .catch(function () {
        btnEl.disabled = false;
        btnEl.textContent = defaultLabel;
        if (statusEl) {
          statusEl.textContent = t("watch.error");
          statusEl.hidden = false;
        }
      });
  }

  function resolveTierText(tierKey, tierCfg) {
    var rawLabel = trimStr(tierCfg.label);
    var rawTerms = trimStr(tierCfg.terms);
    var defaults = DEFAULT_EN_TIERS[tierKey] || {};

    if (currentLang === "ja") {
      var jaLabel = trimStr(tierCfg.labelJa);
      var jaTerms = trimStr(tierCfg.termsJa);
      var isDefaultLabel = !rawLabel || rawLabel === defaults.label;
      var isDefaultTerms = !rawTerms || rawTerms === defaults.terms;
      return {
        label: jaLabel || (isDefaultLabel ? t("tier." + tierKey + ".label") : rawLabel),
        terms: jaTerms || (isDefaultTerms ? t("tier." + tierKey + ".terms") : rawTerms)
      };
    }

    return {
      label: rawLabel || t("tier." + tierKey + ".label") || tierKey,
      terms: rawTerms || t("tier." + tierKey + ".terms")
    };
  }

  function bindStaticCheckoutTracking(el, tierKey, locationName) {
    if (!el || el.getAttribute("data-ph-bound") === "1") return;
    el.setAttribute("data-ph-bound", "1");
    el.addEventListener("click", function () {
      var href = el.getAttribute("href") || "";
      if (href.indexOf("stripe.com") !== -1) {
        var tCfg = cfg[tierKey] || {};
        trackEvent("checkout_clicked", {
          tier: tierKey,
          price: trimStr(tCfg.price),
          mode: "links",
          location: locationName,
          lang: currentLang
        });
      }
    });
  }

  function wireTickets() {
    var isWorkerMode = trimStr(cfg.mode).toLowerCase() === "worker";
    var workerUrl = trimStr(cfg.WORKER_URL).replace(/\/+$/, "");

    var rentLink = resolveTierCheckoutLink(cfg.rent);

    // Hero & Watch Room Gate quick CTAs
    var heroRentEls = document.querySelectorAll("[data-hero-rent]");
    for (var r = 0; r < heroRentEls.length; r++) {
      heroRentEls[r].href = !isWorkerMode && rentLink ? rentLink : "#watch";
      bindStaticCheckoutTracking(heroRentEls[r], "rent", "hero");
    }

    var gateRent = document.getElementById("watch-gate-rent");
    if (gateRent) {
      gateRent.href = !isWorkerMode && rentLink ? rentLink : "./#watch";
      bindStaticCheckoutTracking(gateRent, "rent", "watch_gate");
    }

    var cards = document.querySelectorAll("[data-tier]");
    if (!cards.length) return;

    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var tierKey = card.getAttribute("data-tier");
      var tierCfg = cfg[tierKey];
      if (!tierCfg) continue;

      var copy = resolveTierText(tierKey, tierCfg);
      var price =
        currentLang === "ja" && trimStr(tierCfg.priceJa)
          ? trimStr(tierCfg.priceJa)
          : trimStr(tierCfg.price);
      var directLink = resolveTierCheckoutLink(tierCfg);

      var labelEl = card.querySelector("[data-tier-label]");
      var priceEl = card.querySelector("[data-tier-price]");
      var termsEl = card.querySelector("[data-tier-terms]");
      var slotEl = card.querySelector("[data-tier-slot]");
      var statusEl = card.querySelector("[data-tier-status]");

      if (labelEl) labelEl.textContent = copy.label;
      if (priceEl) priceEl.textContent = price;
      if (termsEl) termsEl.textContent = copy.terms;

      if (!slotEl) continue;

      var isFeatured = card.classList.contains("ticket-card--featured");
      var btnVariant = isFeatured ? "btn btn--ticket-featured" : "btn btn--ticket";
      var ctaLabel =
        price && /^[$\u00a5\u20ac\u00a30-9]/.test(price)
          ? copy.label + " \u2014 " + price
          : copy.label;
      slotEl.innerHTML = "";

      if (!isWorkerMode && directLink) {
        var linkEl = document.createElement("a");
        linkEl.className = btnVariant;
        linkEl.href = directLink;
        linkEl.rel = "noopener";
        linkEl.textContent = ctaLabel;
        (function (tKey, tPrice) {
          linkEl.addEventListener("click", function () {
            trackEvent("checkout_clicked", {
              tier: tKey,
              price: tPrice,
              mode: "links",
              location: "card",
              lang: currentLang
            });
          });
        })(tierKey, price);
        slotEl.appendChild(linkEl);
        if (statusEl) statusEl.hidden = true;
      } else if (isWorkerMode && workerUrl) {
        var activeBtn = document.createElement("button");
        activeBtn.type = "button";
        activeBtn.className = btnVariant;
        activeBtn.textContent = ctaLabel;
        (function (tKey, tPrice, bEl, sEl, cLabel) {
          bEl.addEventListener("click", function () {
            trackEvent("checkout_clicked", {
              tier: tKey,
              price: tPrice,
              mode: "worker",
              location: "card",
              lang: currentLang
            });
            startWorkerCheckout(workerUrl, tKey, bEl, sEl, cLabel);
          });
        })(tierKey, price, activeBtn, statusEl, ctaLabel);
        slotEl.appendChild(activeBtn);
        if (statusEl) statusEl.hidden = true;
      } else {
        var disabledBtn = document.createElement("button");
        disabledBtn.type = "button";
        disabledBtn.className = btnVariant + " is-disabled";
        disabledBtn.disabled = true;
        disabledBtn.setAttribute("aria-disabled", "true");
        disabledBtn.textContent = ctaLabel;
        slotEl.appendChild(disabledBtn);
        if (statusEl) {
          statusEl.textContent = t("watch.soon");
          statusEl.hidden = false;
        }
      }
    }
  }

  /* ==========================================================================
     LIGHTBOX FOR 4K FILM STILLS
     ========================================================================== */

  function syncLightboxCaption() {
    if (activeLightboxIdx < 0 || activeLightboxIdx >= STILLS_ITEMS.length) return;
    var item = STILLS_ITEMS[activeLightboxIdx];
    var imgEl = document.getElementById("lightbox-img");
    var capEl = document.getElementById("lightbox-caption");
    var counterEl = document.getElementById("lightbox-counter");
    if (imgEl) {
      imgEl.src = item.src;
      imgEl.alt = t(item.altKey);
    }
    if (capEl) capEl.textContent = t(item.capKey);
    if (counterEl) counterEl.textContent = (activeLightboxIdx + 1) + " / " + STILLS_ITEMS.length;
  }

  function wireStillsLightbox() {
    var modal = document.getElementById("still-lightbox");
    if (!modal) return;

    var triggers = document.querySelectorAll("[data-still-index]");
    var closeBtn = document.getElementById("lightbox-close");
    var prevBtn = document.getElementById("lightbox-prev");
    var nextBtn = document.getElementById("lightbox-next");
    var backdrops = modal.querySelectorAll("[data-lightbox-close]");

    function openAt(idx) {
      activeLightboxIdx = (idx + STILLS_ITEMS.length) % STILLS_ITEMS.length;
      syncLightboxCaption();
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      trackEvent("still_opened", {
        index: activeLightboxIdx + 1,
        src: STILLS_ITEMS[activeLightboxIdx].src,
        lang: currentLang
      });
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      modal.hidden = true;
      activeLightboxIdx = -1;
      document.body.style.overflow = "";
    }

    for (var i = 0; i < triggers.length; i++) {
      triggers[i].addEventListener("click", function (ev) {
        var idx = parseInt(ev.currentTarget.getAttribute("data-still-index") || "0", 10);
        openAt(isNaN(idx) ? 0 : idx);
      });
    }

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    for (var b = 0; b < backdrops.length; b++) {
      backdrops[b].addEventListener("click", closeModal);
    }
    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        if (activeLightboxIdx >= 0) openAt(activeLightboxIdx - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        if (activeLightboxIdx >= 0) openAt(activeLightboxIdx + 1);
      });
    }

    document.addEventListener("keydown", function (ev) {
      if (modal.hidden) return;
      if (ev.key === "Escape") {
        closeModal();
      } else if (ev.key === "ArrowLeft") {
        openAt(activeLightboxIdx - 1);
      } else if (ev.key === "ArrowRight") {
        openAt(activeLightboxIdx + 1);
      }
    });
  }

  /* ==========================================================================
     4K SCREENING ROOM (watch.html)
     ========================================================================== */

  function renderWatchRoomDynamicCopy() {
    var root = document.getElementById("watch-player-root");
    if (!root) return;

    var gateTitle = document.getElementById("watch-gate-title");
    var gateCopy = document.getElementById("watch-gate-copy");
    var expiryEl = document.getElementById("watch-expiry");
    var hudModeEl = document.getElementById("watch-hud-mode");

    if (watchRoomState === "yt" && expiryEl) {
      expiryEl.textContent = t("watchRoom.ytRent");
      if (hudModeEl) hudModeEl.textContent = t("watchRoom.modeRent");
    } else if (watchRoomState === "verifying") {
      if (gateTitle) gateTitle.textContent = t("watchRoom.verifyingTitle");
      if (gateCopy) gateCopy.textContent = t("watchRoom.verifyingCopy");
    } else if (watchRoomState === "expired") {
      if (gateTitle) gateTitle.textContent = t("watchRoom.expiredTitle");
      if (gateCopy) gateCopy.textContent = t("watchRoom.expiredCopy");
    } else if (watchRoomState === "active" && watchRoomData && expiryEl) {
      if (watchRoomData.expiresAt) {
        var dt = new Date(watchRoomData.expiresAt);
        var locale = currentLang === "ja" ? "ja-JP" : undefined;
        expiryEl.textContent =
          t("watchRoom.rentalUntil") +
          (isNaN(dt.getTime()) ? watchRoomData.expiresAt : dt.toLocaleString(locale));
      } else {
        expiryEl.textContent = t("watchRoom.ytRent");
      }
      if (hudModeEl) hudModeEl.textContent = t("watchRoom.modeRent");
    }
  }

  function wireWatchRoom() {
    var root = document.getElementById("watch-player-root");
    if (!root) return;

    var isWorkerMode = trimStr(cfg.mode).toLowerCase() === "worker";
    var workerUrl = trimStr(cfg.WORKER_URL).replace(/\/+$/, "");
    var params = new URLSearchParams(window.location.search);
    var token = trimStr(params.get("token"));
    var sessionId = trimStr(params.get("session_id"));

    var gateEl = document.getElementById("watch-gate");
    var videoEl = document.getElementById("film-video");
    var controlsBar = document.getElementById("watch-controls-bar");

    // Option A — Stripe Payment Link redirect. The full-film video IDs live only
    // in the Payment Link's redirect URL (never in this public repo):
    //   Vimeo:   watch.html?vm=EN_ID:EN_HASH&vmja=JA_ID:JA_HASH
    //   YouTube: watch.html?v=EN_YOUTUBE_ID&vja=JA_YOUTUBE_ID   (legacy links)
    // The second edition is optional; when present, an edition switcher is shown.
    var ytPattern = /^[A-Za-z0-9_-]{11}$/;
    var filmEditions = null;
    var vmEn = parseVimeoRef(params.get("vm"));
    var vmJa = parseVimeoRef(params.get("vmja"));

    if (vmEn) {
      filmEditions = {
        en: vimeoEmbedUrl(vmEn.id + ":" + vmEn.hash, false),
        ja: vmJa ? vimeoEmbedUrl(vmJa.id + ":" + vmJa.hash, false) : ""
      };
    } else if (ytPattern.test(trimStr(params.get("v")))) {
      var ytEmbedSrc = function (id) {
        return "https://www.youtube-nocookie.com/embed/" + id + "?rel=0&modestbranding=1&playsinline=1";
      };
      var ytJa = trimStr(params.get("vja"));
      filmEditions = {
        en: ytEmbedSrc(trimStr(params.get("v"))),
        ja: ytPattern.test(ytJa) ? ytEmbedSrc(ytJa) : ""
      };
    }

    if (!isWorkerMode && filmEditions) {
      watchRoomState = "yt";

      var hasJaEdition = !!filmEditions.ja;
      if (!hasJaEdition) filmEditions.ja = filmEditions.en;
      // Japanese visitors start on the original (no-subtitle) edition when available.
      var startEdition = hasJaEdition && currentLang === "ja" ? "ja" : "en";

      var screen = document.getElementById("watch-cinema-screen");
      var frame = null;
      if (screen) {
        frame = makePlayerFrame(filmEditions[startEdition], "JOURNEY TO HOKUSAI — Full Film");
        screen.insertBefore(frame, screen.firstChild);
      }

      var editionToggle = document.getElementById("film-edition-toggle");
      if (editionToggle && hasJaEdition && frame) {
        var editionBtns = editionToggle.querySelectorAll("[data-film-ver]");
        var setEdition = function (ver) {
          for (var b = 0; b < editionBtns.length; b++) {
            var on = editionBtns[b].getAttribute("data-film-ver") === ver;
            editionBtns[b].classList.toggle("is-active", on);
            editionBtns[b].setAttribute("aria-pressed", on ? "true" : "false");
          }
        };
        setEdition(startEdition);
        for (var e = 0; e < editionBtns.length; e++) {
          editionBtns[e].addEventListener("click", function () {
            var ver = this.getAttribute("data-film-ver");
            if (this.classList.contains("is-active")) return;
            frame.src = filmEditions[ver];
            setEdition(ver);
            trackEvent("film_edition_switched", {
              edition: ver === "ja" ? "ja_sub" : "en_sub",
              lang: currentLang
            });
          });
        }
        editionToggle.hidden = false;
      }

      if (gateEl) gateEl.hidden = true;
      if (controlsBar) controlsBar.hidden = false;

      trackEvent("screening_room_unlocked", {
        plan: "rent",
        delivery: "links",
        lang: currentLang
      });
      renderWatchRoomDynamicCopy();
      return;
    }

    // Option B — Worker / Stripe Checkout Session verification:
    if (!isWorkerMode || !workerUrl || (!token && !sessionId)) {
      return;
    }

    watchRoomState = "verifying";
    renderWatchRoomDynamicCopy();

    var query = new URLSearchParams();
    if (token) query.set("token", token);
    if (sessionId) query.set("session_id", sessionId);

    fetch(workerUrl + "/access?" + query.toString(), {
      method: "GET",
      headers: { Accept: "application/json" }
    })
      .then(function (res) {
        if (!res.ok) throw new Error("Access denied");
        return res.json();
      })
      .then(function (data) {
        if (!data || !data.streamUrl) {
          throw new Error("Missing stream URL");
        }
        watchRoomState = "active";
        watchRoomData = data;

        var preferredStream =
          currentLang === "ja" && trimStr(data.streamUrlJa)
            ? trimStr(data.streamUrlJa)
            : trimStr(data.streamUrl);

        if (videoEl) {
          videoEl.src = preferredStream;
          videoEl.hidden = false;
        }
        if (gateEl) gateEl.hidden = true;
        if (controlsBar) controlsBar.hidden = false;

        trackEvent("screening_room_unlocked", {
          plan: "rent",
          delivery: "worker",
          lang: currentLang
        });
        renderWatchRoomDynamicCopy();
      })
      .catch(function () {
        watchRoomState = "expired";
        renderWatchRoomDynamicCopy();
      });
  }

  /* ==========================================================================
     LANGUAGE APPLICATION & NAVIGATION MENU
     ========================================================================== */

  function applyLanguage(lang, persist) {
    currentLang = lang === "ja" ? "ja" : "en";
    document.documentElement.setAttribute("lang", currentLang);

    var isWatchRoom = !!document.getElementById("watch-player-root");
    document.title = isWatchRoom ? t("watchPageTitle") : t("pageTitle");

    var textNodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < textNodes.length; i++) {
      var key = textNodes[i].getAttribute("data-i18n");
      if (key === "nav.menu") {
        var navEl = document.querySelector(".site-nav");
        var isOpen = navEl && navEl.classList.contains("is-open");
        textNodes[i].textContent = isOpen ? t("nav.close") : t("nav.menu");
      } else {
        textNodes[i].textContent = t(key);
      }
    }

    var htmlNodes = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlNodes.length; j++) {
      var hKey = htmlNodes[j].getAttribute("data-i18n-html");
      htmlNodes[j].innerHTML = t(hKey);
    }

    var ariaNodes = document.querySelectorAll("[data-i18n-aria]");
    for (var k = 0; k < ariaNodes.length; k++) {
      var aKey = ariaNodes[k].getAttribute("data-i18n-aria");
      ariaNodes[k].setAttribute("aria-label", t(aKey));
    }

    var altNodes = document.querySelectorAll("[data-i18n-alt]");
    for (var q = 0; q < altNodes.length; q++) {
      var altKey = altNodes[q].getAttribute("data-i18n-alt");
      altNodes[q].setAttribute("alt", t(altKey));
    }

    var langBtns = document.querySelectorAll("[data-set-lang]");
    for (var n = 0; n < langBtns.length; n++) {
      var active = langBtns[n].getAttribute("data-set-lang") === currentLang;
      langBtns[n].classList.toggle("is-active", active);
      langBtns[n].setAttribute("aria-pressed", active ? "true" : "false");
    }

    // Automatically match trailer version to language unless viewer manually pinned it
    if (!userPinnedTrailerVer) {
      setTrailerVersion(currentLang === "ja" ? "ja" : "en", false);
    }

    syncLocalizedExternalLinks();
    wireTickets();
    syncLightboxCaption();
    renderWatchRoomDynamicCopy();

    if (persist) {
      try {
        window.localStorage.setItem(STORAGE_KEY, currentLang);
      } catch (e) {}

      try {
        var url = new URL(window.location.href);
        if (currentLang === "ja") {
          url.searchParams.set("lang", "ja");
        } else {
          url.searchParams.delete("lang");
        }
        window.history.replaceState({}, "", url.toString());
      } catch (e2) {}
    }
  }

  function wireMenuAndLanguageControls() {
    var langBtns = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < langBtns.length; i++) {
      langBtns[i].addEventListener("click", function (ev) {
        var targetLang = ev.currentTarget.getAttribute("data-set-lang");
        if (targetLang !== currentLang) {
          applyLanguage(targetLang, true);
          trackEvent("language_switched", { lang: currentLang });
        }
      });
    }

    var navEl = document.querySelector(".site-nav");
    var toggleBtn = document.getElementById("menu-toggle");
    var navLinks = document.getElementById("site-nav-links");

    if (!navEl || !toggleBtn || !navLinks) return;

    function closeMenu() {
      navEl.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.textContent = t("nav.menu");
    }

    toggleBtn.addEventListener("click", function () {
      var opening = !navEl.classList.contains("is-open");
      navEl.classList.toggle("is-open", opening);
      toggleBtn.setAttribute("aria-expanded", opening ? "true" : "false");
      toggleBtn.textContent = opening ? t("nav.close") : t("nav.menu");
    });

    var anchors = navLinks.querySelectorAll("a");
    for (var j = 0; j < anchors.length; j++) {
      anchors[j].addEventListener("click", closeMenu);
    }

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && navEl.classList.contains("is-open")) {
        closeMenu();
        toggleBtn.focus();
      }
    });
  }

  initPostHog();
  wireGlobalLinksAndTrailer();
  wireMenuAndLanguageControls();
  wireStillsLightbox();
  applyLanguage(detectInitialLang(), false);
  wireWatchRoom();
})();
