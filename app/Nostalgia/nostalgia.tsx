import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./nostalgia.css";
import { Navigation } from "swiper/modules";
import {
  Container,
  CarouselContainer,
  TextPlace,
  Text,
  Carousel,
  FavoriteImg,
  ImagePlace,
  Details,
  DetailsTop,
  DetailsCenter,
  DetailsDown,
  WatchBtn,
  DetailsTime,
  DetailsYear,
  DetailsName,
} from "../Styled Components/nostalgia";

export default function Nostalgia() {
  const Nostalgias = [
    // Khorshid 5
    {
      url: "./images/nostalgia/khorshid5.png",
      name: "پنجمین خورشید",
      year: "۱۳۸۸ : سال تولید",
      time: "۳۵:۲۵ : مدت زمان",
      description:
        "داستان یک شاگرد مکانیک، محسن(حمید گودرزی) و رفیق صمیمی او همایون(شهرام قائدی) است که در سال ۱۳۶۴ و در وضعیت بد اقتصادی زندگی می‌کنند. آنها بر اثر حادثه‌ای کتیبه ای پیدا می‌کنند که قابلیت سفر در زمان را دارد و محسن همراه عتیقه ۲۴ سال در زمان سفر می‌کند و در سال ۱۳۸۸ در تهران امروز خود را می‌یابد",
    },
    // Karkhe
    {
      url: "./images/nostalgia/karkhe.png",
      name: "از کرخه تا راین",
      year: "۱۳۷۱ : سال تولید",
      time: "۱:۳۳:۵۵ : مدت زمان",
      description:
        "سعید که بر اثر بمب‌های شیمیایی نابینا شده به همراه گروهی از همرزمانش برای معالجه به آلمان اعزام می‌شود. لیلا خواهر سعید که سال هاست در آلمان با شوهر آلمانی و پسرشان یوناس (یونس) زندگی می‌کند، سعید را در آسایشگاه می‌بیند. بین سعید و یونس رابطه عاطفی عمیقی برقرار می‌شود",
    },
    // Ekhtajiha
    {
      url: "./images/nostalgia/ekhraji.png",
      name: "اخراجی‌ها",
      year: "۱۳۸۵ : سال تولید",
      time: "۱:۴۴:۱۵ : مدت زمان",
      description:
        "مجید از اراذل جنوب تهران عاشق دختر پیرمرد عارفی به نام میرزا می‌شود. میرزا شرط ازدواج مجید و دخترش را سر به راه شدن او می‌داند. مجید تصمیم می‌گیرد برای اثبات سر به راه شدن خود به جبهه برود که بقیه دوستانش نیز همراه او می‌شوند. برای حضور آنها در جبهه، مخالفت‌هایی وجود دارد اما با ضمانت میرزا و یکی دیگر از رزمنده‌ها آنها به پادگان آموزشی می‌رسند",
    },
    // Azhans
    {
      url: "./images/nostalgia/azhans.png",
      name: "آژانس شیشه‌ای",
      year: "۱۳۷۶ : سال تولید",
      time: "۱:۵۴:۰۵ : مدت زمان",
      description:
        "داستان سریال روایتگر لحظاتی از زندگی نوجوانی به نام مجید و مادربزرگش (بی بی) است. در این سریال داستان‌های متعددی را برای مخاطبان به نمایش می‌گذارند که از آن جمله می‌توان به ملخ دریایی، امتحان ورزش، زنگ انشاء، اردو و … اشاره کرد. داستان اصلی قصه‌های مجید در محیط کرمان نگارش شده بود و روایت‌گر لحظه‌های کودکی به نام مجید است که با مادربزرگش (بی‌بی) زندگی می‌کند",
    },
    // Majid
    {
      url: "./images/nostalgia/majid.png",
      name: "قصه‌های مجید",
      year: "۱۳۶۹ : سال تولید",
      time: "۴۳:۲۵ : مدت زمان",
      description:
        "داستان سریال روایتگر لحظاتی از زندگی نوجوانی به نام مجید و مادربزرگش (بی بی) است. در این سریال داستان‌های متعددی را برای مخاطبان به نمایش می‌گذارند که از آن جمله می‌توان به ملخ دریایی، امتحان ورزش، زنگ انشاء، اردو و … اشاره کرد. داستان اصلی قصه‌های مجید در محیط کرمان نگارش شده بود و روایت‌گر لحظه‌های کودکی به نام مجید است که با مادربزرگش (بی‌بی) زندگی می‌کند",
    },
    // Marmoolak
    {
      url: "./images/nostalgia/marmolak.png",
      name: "مارمولک",
      year: "۱۳۸۲ : سال تولید",
      time: "۱:۰۱:۴۵ : مدت زمان",
      description:
        "رضا مثقالی معروف به رضا مارمولک دزد سابقه‌داری است که بارها دستگیر و زندانی شده، اما در آخرین دستگیری، اتهام او سرقت مسلحانه است. رضا را به زندانی تحویل می‌دهند که رئیس آن (آقای مجاور) مردی بسیار سختگیر و انعطاف‌ناپذیر است. او عقیده دارد باید آنقدر نسبت به مجرمان - با روش‌هایی خاص - سخت‌گیری کند که حتی فکر اعمال خلاف به مغزشان نرسد",
    },
  ];

  return (
    <Container>
      <TextPlace>
        <Text>نوستالژی</Text>
      </TextPlace>
      <CarouselContainer>
        <Carousel>
          <Swiper
            navigation={true}
            slidesPerView={1}
            speed={700}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerGroup={1}
          >
            {Nostalgias.map((item, index) => {
              return (
                <SwiperSlide>
                  <ImagePlace>
                    <FavoriteImg key={index} src={item.url} />
                  </ImagePlace>
                  <Details>
                    <DetailsTop>
                      <DetailsName>{item.name}</DetailsName>
                      <DetailsYear>{item.year}</DetailsYear>
                      <DetailsTime>{item.time}</DetailsTime>
                    </DetailsTop>
                    <DetailsCenter>{item.description}</DetailsCenter>
                    <DetailsDown>
                      <WatchBtn>
                        تماشا کنید
                        <img src="./images/watch.svg" />
                      </WatchBtn>
                    </DetailsDown>
                  </Details>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Carousel>
      </CarouselContainer>
    </Container>
  );
}
