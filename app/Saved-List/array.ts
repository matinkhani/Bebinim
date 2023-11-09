const AllMovies = [
    // Ablagh
    {
      id: 1,
      url: "../../images/Watch/ablagh.webp",
      name: "ابلق",
      name2: "ablagh",
      category: "فیلم",
      year: "۱۳۹۹",
      image1: "../images/Watch/ablagh1.webp",
      image2: "../images/Watch/ablagh2.webp",
      image3: "../images/Watch/ablagh3.webp",
      age: "+۱۳",
      time: "۲:۳۸:۰۰",
      rate: "۱۸٪",
      bgImg: "../images/Watch/ablagh.webp",
      description:
        "راحله به همراه خوانواده در یکی از محله‌های تهران زندگی می‌کنند. شوهر خواهر علی، فردی است که یک کسب و کار را برای خانم‌های محله ایجاد کرده است.",
    },
    // TiTi
    {
      id: 2,
      url: "./images/favorites/frame2.webp",
      name: "تی تی",
      name2: "titi",
      category: "فیلم",
      year: "۱۳۹۹",
      image1: "../images/Watch/titi1.webp",
      image2: "../images/Watch/titi2.webp",
      image3: "../images/Watch/titi3.webp",
      age: "+۱۸",
      time: "۱:۴۲:۵۹",
      rate: "۶۵٪",
      bgImg: "../images/Watch/titi.webp",
      description:
        "ابراهیم، استاد فیزیک دانشگاه که روی تئوری پایان دنیا کار می‌کند، در بیمارستان با خانم نظافتچی عجیبی به نام تی تی آشنا می‌شود.",
    },
    // Pooste Shir
    {
      id: 3,
      url: "./images/favorites/Frame3.webp",
      name: "پوست شیر‍",
      name2: "pooste shir",
      category: "سریال",
      year: "۱۴۰۱",
      image1: "../images/Watch/frame1.webp",
      image2: "../images/Watch/frame2.webp",
      image3: "../images/Watch/frame3.webp",
      age: "+۱۴",
      time: "۴۵:۳۰",
      rate: "۹۰٪",
      bgImg: "../images/Watch/postshir.webp",
      description:
        "نعیم که پانزده سال زندان را به عشق دیدن دخترش تاب آورده پس از رهایی، برای دیدار با او دچار بحرانی بزرگ می شود.",
    },
    // Marde Bazande
    {
      id: 4,
      url: "./images/favorites/Frame4.webp",
      name: "مرد بازنده",
      name2: "marde bazande",
      category: "فیلم",
      year: "۱۴۰۰",
      image1: "../images/Watch/loser1.webp",
      image2: "../images/Watch/loser2.webp",
      image3: "../images/Watch/loser3.webp",
      age: "+۱۵",
      time: "۱:۵۳:۳۰",
      rate: "۵۵٪",
      bgImg: "../images/Watch/loser.webp",
      description:
        "احمد خسروی مسئول رسیدگی به پرونده‌های مشکوک به قتل می‌شود و به سرنخ‌هایی دست می‌یابد که پشت پرده این قتل رازگونه به کشف شبکه فساد اقتصادی می‌رسد.",
    },
    // Sag Band
    {
      id: 5,
      url: "./images/favorites/Frame5.webp",
      name: "سگ بند",
      name2: "sag band",
      category: "فیلم",
      year: "۱۴۰۰",
      image1: "../images/Watch/sagband1.webp",
      image2: "../images/Watch/sagband2.webp",
      image3: "../images/Watch/sagband4.webp",
      age: "+۱۶",
      time: "۱:۳۰:۳۰",
      rate: "۹۸٪",
      bgImg: "../images/Watch/sagband.webp",
      description:
        "هیچ وقت گول اسم و ظاهر آدم‌ها رو نخورید؛ ارتش هیتلر با اون عظمت، اسمش نازی بود. این فیلم سینمایی  دومین ساخته مهران احمدی پس از فیلم سینمایی «مصادره» محسوب می‌شود.",
    },
    // Shadravan
    {
      id: 6,
      url: "./images/favorites/Frame6.webp",
      name: "شادروان",
      name2: "shadravan",
      category: "فیلم",
      year: "۱۴۰۱",
      image1: "../images/Watch/shad1.webp",
      image2: "../images/Watch/shad2.webp",
      image3: "../images/Watch/shad3.webp",
      age: "+۱۷",
      time: "۱:۳۴:۳۰",
      rate: "۳۵٪",
      bgImg: "../images/Watch/shad.webp",
      description:
        "شادروان به دردسرهای یک خانواده پس از فوت ناگهانی پدرشان می‌پردازد. آن‌ها که در حاشیهٔ شهر زندگی می‌کنند و حالا با درگذشت پدرشان ماجراهای تازه‌ای برایشان به وجود می‌آید.",
    },
    // Zelava
    {
      id: 7,
      url: "./images/favorites/Frame7.webp",
      name: "زالاوا",
      name2: "zalava",
      category: "فیلم",
      year: "۱۳۹۹",
      image1: "../images/Watch/zelava1.webp",
      image2: "../images/Watch/zelava2.webp",
      image3: "../images/Watch/zelava3.webp",
      age: "+۱۳",
      time: "۱:۳۰:۱۵",
      rate: "۴۵٪",
      bgImg: "../images/Watch/zelava.webp",
      description:
        "داستان زالاوا در اواخر دههٔ ۱۳۵۰ خورشیدی روی می‌دهد و راوی اتفاقی است که باعث ترس مردم شده و رئیس پاسگاه تلاش می‌کند تا امنیت را به روستا بازگرداند.",
    },
    // The Last of Us
    {
      id: 8,
      url: "./images/favorites/Frame8.webp",
      name: "The Last of Us",
      name2: "آخرین بازمانده از ما",
      category: "سریال",
      year: "۲۰۱۳",
      image1: "../images/Watch/last1.webp",
      image2: "../images/Watch/last2.webp",
      image3: "../images/Watch/last3.webp",
      age: "+۱۴",
      time: "۴۶:۲۰",
      rate: "۸۷٪",
      bgImg: "../images/favorites/Frame8.webp",
      description:
        "وقایع این سریال در سال ۲۰۲۳ جریان دارد و اتفاقات مربوط به ۲۰ سال پس از همه‌گیری یک بیماری قارچی را به تصویر می‌کشد.",
    },
    // Bedoone Gharar Ghabli
    {
      id: 9,
      url: "./images/favorites/Frame9.webp",
      name: "بدون قرار قبلی",
      name2: "bedoone gharar ghabli",
      category: "فیلم",
      year: "۱۴۰۰",
      image1: "../images/Watch/gharar4.webp",
      image2: "../images/Watch/gharar5.webp",
      image3: "../images/Watch/gharar6.webp",
      age: "+۱۵",
      time: "۲:۰۲:۰۵",
      rate: "۵۸٪",
      bgImg: "../images/Watch/gharar.webp",
      description:
        "داستان فیلم در مورد دختری به نام یاسمن است که پس از سال‌ها به دلیل مرگ پدرش از آلمان به ایران بازگشته است.",
    },
    // John Wick Chapter 4
    {
      id: 10,
      url: "../images/Watch/john-wick.webp",
      name: "John Wick: Chapter 4",
      name2: "جان ویک ۴",
      category: "فیلم",
      year: "۲۰۲۳",
      image1: "../images/Watch/john-wick1.webp",
      image2: "../images/Watch/john-wick2.webp",
      image3: "../images/Watch/john-wick3.webp",
      age: "+۱۵",
      time: "۲:۴۹:۱۵",
      rate: "۹۲٪",
      bgImg: "../images/Watch/john-wick.webp",
      description:
        "چند سالی است که ماشینش را دزدیده و سگش را کشته‌اند و صدها نفر کشته شده‌اند. جان ویک هر قانون ممکنی در دنیای زیرزمینی قاتلان شکسته.",
    },
    // Shenaye Parvane
    {
      id: 11,
      url: "./images/favorites/Frame11.webp",
      name: "شنای پروانه",
      name2: "shenaye parvane",
      category: "فیلم",
      year: "۱۳۹۸",
      image1: "../images/Watch/shena1.webp",
      image2: "../images/Watch/shena2.webp",
      image3: "../images/Watch/shena3.webp",
      age: "+۱۵",
      time: "۲:۰۱:۱۷",
      rate: "۶۷٪",
      bgImg: "../images/Watch/shena.webp",
      description:
        "پروانه به گاراژ صافکاری برادرشوهرش حجت می‌رود و از او می‌خواهد تا جلوی همسرش هاشم  را بگیرد.",
    },
    // Mogheiat Mahdi
    {
      id: 12,
      url: "./images/favorites/Frame12.webp",
      name: "موقعیت مهدی",
      name2: "mogheiat mahdi",
      category: "فیلم",
      year: "۱۴۰۰",
      image1: "../images/Watch/mehdi1.webp",
      image2: "../images/Watch/mehdi2.webp",
      image3: "../images/Watch/mehdi3.webp",
      age: "+۱۵",
      time: "۱:۴۰:۰۰",
      rate: "۷۵٪",
      bgImg: "../images/Watch/mehdi.webp",
      description:
        "داستان درباره زندگی مهدی باکری و رابطه وی با همسرش، شرکت در جنگ ایران و عراق همراه برادرش حمید باکری، فرماندهی سپاه عاشورا در جنگ و به شهادت رسیدن وی است.",
    },
    // Dozist
    {
      id: 13,
      url: "./images/favorites/Frame13.webp",
      name: "دوزیست",
      name2: "dozist",
      category: "فیلم",
      year: "۱۳۹۹",
      image1: "../images/Watch/dozist1.webp",
      image2: "../images/Watch/dozist2.webp",
      image3: "../images/Watch/dozist3.webp",
      age: "+۱۵",
      time: "۱:۳۵:۰۰",
      rate: "۶۹٪",
      bgImg: "../images/Watch/dozist.webp",
      description:
        "در جنوب شهر، پسری به نام عطا (جواد عزتی)، با پدرش زندگی می‌کند و دو تن از دوستان خود را نیز به خانه راه داده‌ است.",
    },
    // WW3
    {
      id: 14,
      url: "./images/Search/ww3.webp",
      name: "جنگ جهانی سوم",
      name2: "ww3",
      category: "فیلم",
      year: "۱۴۰۱",
      image1: "../images/Online/ww3-1.webp",
      image2: "../images/Online/ww3-2.webp",
      image3: "../images/Online/ww3-3.webp",
      age: "+۱۳",
      time: "۱:۴۷:۰۸",
      rate: "۶۷",
      bgImg: "../images/Online/ww3.webp",
      description:
        "شکیب (محسن تنابنده) یک کارگر روزمزد میانسالِ بی‌خانمان است که همسر و پسرش را سال‌ها پیش در زلزله از دست داده و تاکنون با این امر کنار نیامده است",
    },
    // Maslahat
    {
      id: 15,
      url: "./images/Search/mslahat.webp",
      name: "مصلحت",
      name2: "maslahat",
      category: "فیلم",
      year: "۱۳۹۹",
      image1: "../images/Online/maslahat1.webp",
      image2: "../images/Online/maslahat2.webp",
      image3: "../images/Online/maslahat3.webp",
      age: "+۱۶",
      time: "۲:۱۴:۰۰",
      rate: "۵۴",
      bgImg: "../images/Online/maslahat.webp",
      description:
        "داستان از آنجایی آغاز می‌شود که «مهدی» پسر آیت‌الله مشکاتیان که یکی از مقامات بلندپایه‌ی قوه‌ی قضائیه است، مرتکب قتل می‌شود، اما از پذیرفتن آن سر باز می‌زند و ...",
    },
    // Fosil
    {
      id: 16,
      url: "./images/Search/fosil.webp",
      name: "فسیل",
      name2: "fosil",
      category: "فیلم",
      year: "۱۳۹۹",
      image1: "../images/Online/fosil1.webp",
      image2: "../images/Online/fosil2.webp",
      image3: "../images/Online/fosil3.webp",
      age: "+۱۵",
      time: "۱:۵۰:۰۰",
      rate: "۹۷",
      bgImg: "../images/Online/fosil.webp",
      description:
        "اسماعیل، سعید و صفا که عضو گروه موسیقی بلک داگز هستند، برای معروفیت و موفقیت تلاش دارند. اسماعیل (با نام خوانندگی اسی) دنبال اجرا جلوی شاه است. اما ...",
    },
    // Sedato
    {
      id: 17,
      url: "./images/exclusive/sedato.webp",
      name: "صداتو",
      name2: "sedato",
      date: "پنجشنبه‌ها",
      category: "ریلیتی‌شو",
      year: "۱۴۰۲",
      image1: "../images/D-Exclusive/sedato1.webp",
      image2: "../images/D-Exclusive/sedato4.webp",
      image3: "../images/D-Exclusive/sedato3.webp",
      age: "+۳",
      time: "۴۵:۰۰",
      rate: "۶۲٪",
      bgImg: "../images/exclusive/sedato.webp",
      description:
        "«صداتو» یک مسابقه موزیکال-معمایی به کارگردانی و تهیه‌کنندگی حامد جوادزاده و با اجرای محسن کیایی محصول سال ۱۴۰۲ می‌باشد که برای پلتفرم نمایش‌خوانگی فیلیمو ساخته شد.",
    },
    // Actor
    {
      id: 18,
      url: "./images/exclusive/actor.webp",
      name: "آکتور",
      name2: "actor",
      date: "شنبه‌ها",
      category: "سریال",
      year: "۱۴۰۱",
      image1: "../images/D-Exclusive/actorpng.webp",
      image2: "../images/D-Exclusive/actor1.webp",
      image3: "../images/D-Exclusive/actor2.webp",
      age: "+۱۳",
      time: "۴۲:۰۰",
      rate: "۸۹٪",
      bgImg: "../images/D-Exclusive/actor.webp",
      description:
        "داستان این سریال، درباره زندگی پر فراز و نشیب چند بازیگر مستعد تئاتر است که بعد از پیشنهادی که به آن‌ها می‌شود زندگی‌ شان درگیر ماجراهایی پیچیده می‌شود.",
    },
    // The God Father
    {
      id: 19,
      url: "./images/exclusive/godfather.webp",
      name: "پدر خوانده",
      name2: "pedar khande",
      date: "جمعه‌ها",
      category: "ریلیتی‌شو",
      year: "۱۴۰۰",
      image1: "../images/D-Exclusive/pedar1.webp",
      image2: "../images/D-Exclusive/pedar2.webp",
      image3: "../images/D-Exclusive/pedar3.webp",
      age: "+۱۳",
      time: "۵۷:۰۰",
      rate: "۷۸٪",
      bgImg: "../images/D-Exclusive/pedar.webp",
      description:
        "یک مجموعه نمایش خانگی ایرانی به کارگردانی سعید ابوطالب و محمدرضا رضائیان است که بر اساس بازی مافیا ساخته شده‌است.",
    },
    // Nato
    {
      id: 20,
      url: "./images/exclusive/nato.webp",
      name: "ناتو",
      name2: "nato",
      date: "دوشنبه‌ها",
      category: "ریلیتی‌شو",
      year: "۱۴۰۲",
      image1: "../images/D-Exclusive/nato1.webp",
      image2: "../images/D-Exclusive/nato2.webp",
      image3: "../images/D-Exclusive/nato3.webp",
      age: "+۱۳",
      time: "۵۳:۰۰",
      rate: "۷۶٪",
      bgImg: "../images/D-Exclusive/nato.webp",
      description:
        "ناتو سریال، برنامه، مسابقه یا رئالیتی شو جدید نمایش خانگی است که جایگزین فصل اول پدرخوانده است. سریال یا برنامه ناتو به صورت هفتگی برای دانلود قرار می گیرد.",
    },
    // Sponge Bob
    {
      id: 21,
      url: "../images/animation/sponge-bob.webp",
      name: "باب اسنفجی",
      name2: "sponge bob",
      year: "۱۹۹۹",
      category: "انیمیشن",
      bgImg: "../images/animation/pong-bob.webp",
      image1: "../images/D-Animation/bob1.webp",
      image2: "../images/D-Animation/bob2.webp",
      image3: "../images/D-Animation/bob3.webp",
      age: "+۳",
      time: "۳۸:۰۰",
      rate: "۱۰۰٪",
      description:
        "شخصیت اصلی کارتون باب اسفنجی شلوار مکعبی است که در یک رستوران آشپز است و به کار نسبتاً ساده و یکنواخت خود بسیار علاقه‌مند است و به گل لاله حساسیت دارد ...",
    },
    // Panda
    {
      id: 22,
      url: "./images/animation/panda.webp",
      name: "پاندای کونگ فو کار ۳",
      name2: "kung fu panda",
      year: "۲۰۱۶",
      category: "انیمیشن",
      bgImg: "../images/animation/panda.webp",
      image1: "../images/D-Animation/panda1.webp",
      image2: "../images/D-Animation/panda2.webp",
      image3: "../images/D-Animation/panda3.webp",
      age: "+۳",
      time: "۳۰:۰۰",
      rate: "۹۵٪",
      description:
        "داستان این انیمیشن در چین باستان رخ می‌دهد؛ پاندای چاق بی دست و پایی به نام پو که به توانایی های خود آگاه نیست ولی علاقه زیادی به کونگ فو دارد ...",
    },
    // Ice Age
    {
      id: 23,
      url: "./images/animation/ice-age.webp",
      name: "عصر یخبندان",
      name2: "ice age",
      year: "۲۰۰۲",
      category: "انیمیشن",
      bgImg: "../images/animation/ice-age.webp",
      image1: "../images/D-Animation/asr1.webp",
      image2: "../images/D-Animation/asr2.webp",
      image3: "../images/D-Animation/asr3.webp",
      age: "+۱۳",
      time: "۲:۳۸:۰۰",
      rate: "۹۸٪",
      description:
        "ابتدا حمله‌ای توسط گروهی از ببرهای دندان خنجری به یکی از دهکده‌های انسان‌ها صورت می‌گیرد که طی آن همسر یکی از افراد قبیله  ... ",
    },
    // Cars
    {
      id: 24,
      url: "./images/animation/cars.webp",
      name: "ماشین‌ها",
      name2: "cars",
      year: "۲۰۰۶",
      category: "انیمیشن",
      bgImg: "../images/animation/cars2.webp",
      image1: "../images/D-Animation/cars1.webp",
      image2: "../images/D-Animation/cars2.webp",
      image3: "../images/D-Animation/cars3.webp",
      age: "+۳",
      time: "۱:۵۸:۰۰",
      rate: "۹۸٪",
      description:
        "لایتنینگ مک کوئین ماشین مسابقه تازه‌کاری است که تنها هدفش برنده شدن است به‌طوری‌که برای برنده شدن اخلاق‌های خود را زیر پا می‌گذارد. در یک روز ...",
    },
    // Tom & Jerry
    {
      id: 25,
      url: "./images/animation/tom&jerry.webp",
      name: "تام و جری",
      name2: "tom and jerry",
      year: "۱۹۴۰",
      category: "انیمیشن",
      bgImg: "../images/animation/tom&jerry.webp",
      image1: "../images/D-Animation/tom1.webp",
      image2: "../images/D-Animation/tom2.webp",
      image3: "../images/D-Animation/tom3.webp",
      age: "+۳",
      time: "۱۸:۰۰",
      rate: "۱۰۰٪",
      description:
        "این دو شخصیت با همدیگر دشمن اند ولی وقتی در یک دردسر بزرگی که بین آن دو می‌آید با هم متحد می‌شوند ولی شانس جری موشه بیش‌تر از تام گربه‌هه است ...",
    },
    // Pink Panther
    {
      id: 26,
      url: "./images/animation/pink-panther.webp",
      name: "پلنگ صورتی",
      name2: "pink panther",
      year: "۱۹۶۹",
      category: "انیمیشن",
      bgImg: "../images/animation/pink.webp",
      image1: "../images/D-Animation/pink1.webp",
      image2: "../images/D-Animation/pink2.webp",
      image3: "../images/D-Animation/pink3.webp",
      age: "+۳",
      time: "۱۵:۰۰",
      rate: "۹۸٪",
      description:
        "پلنگ صورتی مجموعه فیلمهای کمدی-پلیسی است که اولین آن‌ها در سال ۱۹۶۳ ساخته شد و با موفقیت آن دنباله‌های زیادی برایش ساخته شد ... ",
    },
    // Madagascar
    {
      id: 27,
      url: "./images/animation/madagascar.webp",
      name: "ماداگاسکار ۲",
      name2: "madagascar",
      year: "۲۰۰۵",
      category: "انیمیشن",
      bgImg: "../images/animation/madagascar1.webp",
      image1: "../images/D-Animation/madagascar1.webp",
      image2: "../images/D-Animation/madagascar2.webp",
      image3: "../images/D-Animation/madagascar3.webp",
      age: "+۳",
      time: "۱:۲۹:۰۰",
      rate: "۹۵٪",
      description:
        "الکس بچه‌ای بازیگوش بوده و پدرش هم سلطان جنگل. پدرش می‌خواهد او را برای جانشینی خود تربیت کند، ولی الکس فقط به دنبال بازی است. ناگهان ...",
    },
    // Toy Story
    {
      id: 28,
      url: "./images/animation/toy-story.webp",
      name: "داستان اسباب بازی",
      name2: "toy story",
      year: "۱۹۹۵",
      category: "انیمیشن",
      bgImg: "../images/animation/toy-story.webp",
      image1: "../images/D-Animation/toy1.webp",
      image2: "../images/D-Animation/toy2.webp",
      image3: "../images/D-Animation/toy3.webp",
      age: "+۳",
      time: "۱:۲۸:۰۰",
      rate: "۹۸٪",
      description:
        "در یک دنیایی که اسباب‌بازی‌ها در غیاب انسان‌ها زنده می‌شوند. گروهی از اسباب‌بازی‌ها درحال آماده شدن برای نقل مکان به یک خانه جدید به همراه صاحبشان ...",
    },
    // Luca
    {
      id: 29,
      url: "./images/animation/luca.webp",
      name: "لوکا",
      name2: "luca",
      year: "۲۰۲۱",
      category: "انیمیشن",
      bgImg: "../images/animation/luca.webp",
      image1: "../images/D-Animation/luca1.webp",
      image2: "../images/D-Animation/luca2.webp",
      image3: "../images/D-Animation/luca3.webp",
      age: "+۳",
      time: "۱:۳۵:۰۰",
      rate: "۷۸٪",
      description:
        "کودک هیولای دریایی ترسو، لوکا پاگورو، از چند بزماهی در سواحل شهر پورتوروسو در ایتالیا نگهداری می‌کند. والدینش از ترس اینکه ممکن است توسط انسان‌ها شکار شود ...",
    },
    // Soul
    {
      id: 30,
      url: "./images/animation/soul1.webp",
      name: "روح",
      name2: "soul",
      year: "۲۰۲۰",
      category: "انیمیشن",
      bgImg: "../images/animation/soul.webp",
      image1: "../images/D-Animation/soul1.webp",
      image2: "../images/D-Animation/soul2.webp",
      image3: "../images/D-Animation/soul3.webp",
      age: "+۳",
      time: "۲:۳۸:۰۰",
      rate: "۵۸٪",
      description:
        "داستان فیلم پویانمایی روح، دربارهٔ جو گاردنر، آموزگار نوازندگی یک گروه موسیقی در دبیرستان است. جو که همیشه سودای اجرای موسیقی جاز بر صحنه را در سر می‌پرورانده ...",
    },
    // Rango
    {
      id: 31,
      url: "./images/animation/rangopng.webp",
      name: "رنگو",
      name2: "rango",
      year: "۲۰۱۱",
      category: "انیمیشن",
      bgImg: "../images/animation/rango.webp",
      image1: "../images/D-Animation/rango1.webp",
      image2: "../images/D-Animation/rango2.webp",
      image3: "../images/D-Animation/rango3.webp",
      age: "+۳",
      time: "۱:۴۷:۰۰",
      rate: "۸۸٪",
      description:
        "انیمیشن رنگو داستان زندگی یک آفتاب‌پرست (بزمجه) خانگی است که دچار بحران هویت می‌باشد. این فیلم که حال و هوایی وسترن و کمدی دارد ...",
    },
    // Dolphin Boy
    {
      id: 32,
      url: "./images/animation/dolphin.webp",
      name: "پسر دلفینی",
      name2: "dolphin boy",
      year: "۲۰۲۱",
      category: "انیمیشن",
      bgImg: "../images/animation/dolphin1.webp",
      image1: "../images/D-Animation/dolphin1.webp",
      image2: "../images/D-Animation/dolphin2.webp",
      image3: "../images/D-Animation/dolphin3.webp",
      age: "+۳",
      time: "۱:۳۰:۰۰",
      rate: "۸۰٪",
      description:
        "هنگامی که یک هواپیما در دریا سقوط می کند، یک دلفین جوان به نام سفید و مادرش یک نوزاد انسانی پیدا می کنند و از او مراقبت می کنند. دلفین بعداً بزرگ می‌شود و ...",
    },
    // Turning Red
    {
      id: 33,
      url: "./images/animation/turning-red.webp",
      name: "قرمز شدن",
      name2: "turning red",
      year: "۲۰۲۱",
      category: "انیمیشن",
      bgImg: "../images/animation/turning-red1.webp",
      image1: "../images/D-Animation/turning1.webp",
      image2: "../images/D-Animation/turning2.webp",
      image3: "../images/D-Animation/turning3.webp",
      age: "+۳",
      time: "۱:۴۰:۰۰",
      rate: "۶۸٪",
      description:
        " میلین «می» لی، یک دانش‌آموز ۱۳ ساله چینی-کانادایی را دنبال می‌کند که به دلیل یک نفرین ارثی، وقتی هر احساس شدیدی را تجربه می‌کند، به یک ...",
    },
    // Fight Club
    {
      id: 34,
      url: "./images/Search/fightclub.webp",
      name: "Fight Club",
      name2: "باشگاه مبارزه",
      year: "۱۹۹۹",
      category: "فیلم",
      image1: "../images/D-IMDB/fightclub1.webp",
      image2: "../images/D-IMDB/fightclub2.webp",
      image3: "../images/D-IMDB/fightclub3.webp",
      age: "+۱۶",
      time: "۲:۱۹:۰۰",
      rate: "۸۹٪",
      bgImg: "../images/D-IMDB/fightclub.webp",
      description:
        "شخصیت اصلی فیلم جوان بی‌نامی است که به عنوان راوی شناخته می‌شود. راوی زندگی غیرعادی و عجیبی دارد.",
    },
    // The Dark Knight
    {
      id: 35,
      url: "./images/Search/darkknight.webp",
      name: "The Dark Knight",
      name2: "شوالیه تاریکی",
      year: "۲۰۰۸",
      category: "فیلم",
      image1: "../images/D-IMDB/dark-knight1.webp",
      image2: "../images/D-IMDB/dark-knight2.webp",
      image3: "../images/D-IMDB/dark-knight3.webp",
      age: "+۱۶",
      time: "۲:۳۲:۰۰",
      rate: "۹۰٪",
      bgImg: "../images/D-IMDB/dark-knight.webp",
      description:
        "در گاتهام سیتی، یک سال پس از ناپدید شدن دکتر جاناتان کرین معروف به مترسک، امنیت توسط بتمن دوباره به گاتهام بازگردانده شده.",
    },
    // Breaking Bad
    {
      id: 36,
      url: "./images/Search/breakingbad.webp",
      name: "Breaking Bad",
      name2: "افسارگسیخته",
      year: "۲۰۰۸",
      category: "سریال",
      image1: "../images/D-IMDB/breaking-bad1.webp",
      image2: "../images/D-IMDB/breaking-bad2.webp",
      image3: "../images/D-IMDB/breaking-bad3.webp",
      age: "+۱۶",
      time: "۴۵:۰۰",
      rate: "۹۷٪",
      bgImg: "../images/D-IMDB/breaking-bad.webp",
      description:
        "بریکینگ بد داستان والتر وایت دانشمند شیمی زحمتکش و بی‌حاشیه‌ای را به تصویر می‌کشد که دبیر دبیرستان است. وایت در ابتدای داستان متوجه می‌شود که مبتلا به سرطان ریه است.",
    },
    // Inception
    {
      id: 37,
      url: "./images/Search/inception.webp",
      name: "Inception",
      name2: "الهام",
      year: "۲۰۱۰",
      category: "فیلم",
      image1: "../images/D-IMDB/inception1.webp",
      image2: "../images/D-IMDB/inception2.webp",
      image3: "../images/D-IMDB/inception3.webp",
      age: "+۳",
      time: "۲:۲۸:۰۰",
      rate: "۸۳٪",
      bgImg: "../images/D-IMDB/inception.webp",
      description:
        "دام کاب (لئوناردو دی‌کاپریو) یک دزد ماهر در استخراج اسرار ارزشمند مورد نیاز سازمان‌های جاسوسی و شرکت‌های تجاری و چندملیتی است.",
    },
    // La La Land
    {
      id: 38,
      url: "./images/Search/lalaland.webp",
      name: "La La Land",
      name2: "لا لا لند",
      year: "۲۰۱۶",
      category: "فیلم",
      image1: "../images/D-IMDB/lalaland1.webp",
      image2: "../images/D-IMDB/lalaland2.webp",
      image3: "../images/D-IMDB/lalaland3.webp",
      age: "+۱۶",
      time: "۲:۰۸:۲۷",
      rate: "۷۹٪",
      bgImg: "../images/D-IMDB/lalaland.webp",
      description:
        "میا، دختری جوان و مشتاقِ بازیگری است که در کافی‌شاپ کمپانی برادران وارنر مشغول به کار است و در فاصله‌ی آزمون‌های بازیگری خود به بازیگرهای هالیوود قهوه لاته می‌دهد.",
    },
    // Coda
    {
      id: 39,
      url: "./images/Search/coda.webp",
      name: "Coda",
      name2: "کدا",
      year: "۲۰۲۱",
      category: "فیلم",
      image1: "../images/D-IMDB/coda1.webp",
      image2: "../images/D-IMDB/coda2.webp",
      image3: "../images/D-IMDB/coda3.webp",
      age: "+۱۳",
      time: "۱:۵۵:۰۰",
      rate: "۶۹٪",
      bgImg: "../images/D-IMDB/codaa.webp",
      description:
        "داستان فیلم در مورد دختری جوان به نام روبی است که تنها عضو شنوای خانواده است. پدر، مادر و برادر بزرگتر روبی به نام لئو همگی ناشنوا هستند.",
    },
    // Interstellar
    {
      id: 40,
      url: "./images/Search/interstellar.webp",
      name: "Interstellar",
      name2: "میان ستاره‌ای",
      year: "۲۰۱۴",
      category: "فیلم",
      image1: "../images/D-IMDB/interstellar1.webp",
      image2: "../images/D-IMDB/interstellar2.webp",
      image3: "../images/D-IMDB/interstellar3.webp",
      age: "+۱۳",
      time: "۲:۴۹:۵۶",
      rate: "۹۱٪",
      bgImg: "../images/D-IMDB/interstellarpng.webp",
      description:
        "در آینده زمین به علت آتشک محصولات کشاورزی رو به نابودی است و هر روز محصولات بیشتری نابود می‌شود. متیو به همراه پدر زن، پسر و دخترش در یک مزرعه زندگی می‌کنند.",
    },
    // The Godfather
    {
      id: 41,
      url: "./images/Search/god.webp",
      name: "The Godfather",
      name2: "پدر خوانده",
      year: "۱۹۷۲",
      category: "فیلم",
      image1: "../images/D-IMDB/god1.webp",
      image2: "../images/D-IMDB/god2.webp",
      image3: "../images/D-IMDB/god3.webp",
      age: "+۱۵",
      time: "۲:۵۵:۰۰",
      rate: "۸۹٪",
      bgImg: "../images/D-IMDB/the-godfather.webp",
      description:
        "فیلم در جشن عروسی کانی، دختر دون ویتو کورلئونه، با کارلو ریزی در لانگ بیچ نیویورک، لانگ آیلند در اواخر تابستان ۱۹۴۵ شروع می‌شود.",
    },
  ];
  
  export default AllMovies;
  