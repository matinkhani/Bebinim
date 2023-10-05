const BestIMDbArr = [
  // Fight Club
  {
    id: 1,
    url: "./images/imdb/fight-club.png",
    name: "Fight Club",
    year: "۱۹۹۹",
    category: "فیلم",
    image1: "../images/D-IMDB/fightclub1.png",
    image2: "../images/D-IMDB/fightclub2.jpg",
    image3: "../images/D-IMDB/fightclub3.jpg",
    age: "+۱۶",
    time: "۲:۱۹:۰۰",
    rate: "۸۹٪",
    bgImg: "../images/D-IMDB/fightclub.jpg",
    description:
      "شخصیت اصلی فیلم جوان بی‌نامی است که به عنوان راوی شناخته می‌شود. راوی زندگی غیرعادی و عجیبی دارد.",
  },
  // The Dark Knight
  {
    id: 2,
    url: "./images/imdb/dark-knight.png",
    name: "The Dark Knight",
    year: "۲۰۰۸",
    category: "فیلم",
    image1: "../images/D-IMDB/dark-knight1.png",
    image2: "../images/D-IMDB/dark-knight2.png",
    image3: "../images/D-IMDB/dark-knight3.jpg",
    age: "+۱۶",
    time: "۲:۳۲:۰۰",
    rate: "۹۰٪",
    bgImg: "../images/D-IMDB/dark-knight.png",
    description:
      "در گاتهام سیتی، یک سال پس از ناپدید شدن دکتر جاناتان کرین معروف به مترسک، امنیت توسط بتمن دوباره به گاتهام بازگردانده شده.",
  },
  // Breaking Bad
  {
    id: 3,
    url: "./images/imdb/breaking-bad.png",
    name: "Breaking Bad",
    year: "۲۰۰۸",
    category: "سریال",
    image1: "../images/D-IMDB/breaking-bad1.png",
    image2: "../images/D-IMDB/breaking-bad2.jpg",
    image3: "../images/D-IMDB/breaking-bad3.jpg",
    age: "+۱۶",
    time: "۴۵:۰۰",
    rate: "۹۷٪",
    bgImg: "../images/D-IMDB/breaking-bad.jpg",
    description:
      "بریکینگ بد داستان والتر وایت دانشمند شیمی زحمتکش و بی‌حاشیه‌ای را به تصویر می‌کشد که دبیر دبیرستان است. وایت در ابتدای داستان متوجه می‌شود که مبتلا به سرطان ریه است.",
  },
  // Inception
  {
    id: 4,
    url: "./images/imdb/inception.png",
    name: "Inception",
    year: "۲۰۱۰",
    category: "فیلم",
    image1: "../images/D-IMDB/inception1.png",
    image2: "../images/D-IMDB/inception2.jpg",
    image3: "../images/D-IMDB/inception3.jpg",
    age: "+۳",
    time: "۲:۲۸:۰۰",
    rate: "۸۳٪",
    bgImg: "../images/D-IMDB/inception.jpg",
    description:
      "دام کاب (لئوناردو دی‌کاپریو) یک دزد ماهر در استخراج اسرار ارزشمند مورد نیاز سازمان‌های جاسوسی و شرکت‌های تجاری و چندملیتی است.",
  },
  // La La Land
  {
    id: 5,
    url: "./images/imdb/lala-land.png",
    name: "La La Land",
    year: "۲۰۱۶",
    category: "فیلم",
    image1: "../images/D-IMDB/lalaland1.jpg",
    image2: "../images/D-IMDB/lalaland2.png",
    image3: "../images/D-IMDB/lalaland3.png",
    age: "+۱۶",
    time: "۲:۰۸:۲۷",
    rate: "۷۹٪",
    bgImg: "../images/D-IMDB/lalaland.jpg",
    description:
      "میا، دختری جوان و مشتاقِ بازیگری است که در کافی‌شاپ کمپانی برادران وارنر مشغول به کار است و در فاصله‌ی آزمون‌های بازیگری خود به بازیگرهای هالیوود قهوه لاته می‌دهد.",
  },
  // Coda
  {
    id: 6,
    url: "./images/imdb/coda.png",
    name: "Coda",
    year: "۲۰۲۱",
    category: "فیلم",
    image1: "../images/D-IMDB/coda1.jpeg",
    image2: "../images/D-IMDB/coda2.png",
    image3: "../images/D-IMDB/coda3.jpg",
    age: "+۱۳",
    time: "۱:۵۵:۰۰",
    rate: "۶۹٪",
    bgImg: "../images/D-IMDB/codaa.jpg",
    description:
      "داستان فیلم در مورد دختری جوان به نام روبی است که تنها عضو شنوای خانواده است. پدر، مادر و برادر بزرگتر روبی به نام لئو همگی ناشنوا هستند.",
  },
  // Interstellar
  {
    id: 7,
    url: "./images/imdb/interstellar.png",
    name: "Interstellar",
    year: "۲۰۱۴",
    category: "فیلم",
    image1: "../images/D-IMDB/interstellar1.png",
    image2: "../images/D-IMDB/interstellar2.jpg",
    image3: "../images/D-IMDB/interstellar3.png",
    age: "+۱۳",
    time: "۲:۴۹:۵۶",
    rate: "۹۱٪",
    bgImg: "../images/D-IMDB/interstellar.png",
    description:
      "در آینده زمین به علت آتشک محصولات کشاورزی رو به نابودی است و هر روز محصولات بیشتری نابود می‌شود. متیو به همراه پدر زن، پسر و دخترش در یک مزرعه زندگی می‌کنند.",
  },
  // The Godfather
  {
    id: 8,
    url: "./images/imdb/god-father.png",
    name: "The Godfather",
    year: "۱۹۷۲",
    category: "فیلم",
    image1: "../images/D-IMDB/god1.png",
    image2: "../images/D-IMDB/god2.jpg",
    image3: "../images/D-IMDB/god3.png",
    age: "+۱۵",
    time: "۲:۵۵:۰۰",
    rate: "۸۹٪",
    bgImg: "../images/D-IMDB/the-godfather.jpg",
    description:
      "فیلم در جشن عروسی کانی، دختر دون ویتو کورلئونه، با کارلو ریزی در لانگ بیچ نیویورک، لانگ آیلند در اواخر تابستان ۱۹۴۵ شروع می‌شود.",
  },
];

export default BestIMDbArr;
