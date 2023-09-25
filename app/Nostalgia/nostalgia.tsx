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
            {/* Film 1 */}
            <SwiperSlide>
              <ImagePlace>
                <FavoriteImg src="./images/nostalgia/khorshid5.png" />
              </ImagePlace>
              <Details>
                <DetailsTop>
                  <DetailsName>پنجمین خورشید</DetailsName>
                  <DetailsYear>۱۳۸۸ : سال تولید</DetailsYear>
                  <DetailsTime>۳۵:۲۵ : مدت زمان</DetailsTime>
                </DetailsTop>
                <DetailsCenter>
                  داستان یک شاگرد مکانیک، محسن(حمید گودرزی) و رفیق صمیمی او
                  همایون(شهرام قائدی) است که در سال ۱۳۶۴ و در وضعیت بد اقتصادی
                  زندگی می‌کنند. آنها بر اثر حادثه‌ای کتیبه ای پیدا می‌کنند که
                  قابلیت سفر در زمان را دارد و محسن همراه عتیقه ۲۴ سال در زمان
                  سفر می‌کند و در سال ۱۳۸۸ در تهران امروز خود را می‌یابد
                </DetailsCenter>
                <DetailsDown>
                  <WatchBtn>
                    تماشا کنید
                    <img src="./images/watch.svg" />
                  </WatchBtn>
                </DetailsDown>
              </Details>
            </SwiperSlide>{" "}
            {/* Film 2 */}
            <SwiperSlide>
              <ImagePlace>
                <FavoriteImg src="./images/nostalgia/karkhe.png" />
              </ImagePlace>
              <Details>
                <DetailsTop>
                  <DetailsName>از کرخه تا راین</DetailsName>
                  <DetailsYear>۱۳۷۱ : سال تولید</DetailsYear>
                  <DetailsTime>۱:۳۳:۵۵ : مدت زمان</DetailsTime>
                </DetailsTop>
                <DetailsCenter>
                  سعید که بر اثر بمب‌های شیمیایی نابینا شده به همراه گروهی از
                  همرزمانش برای معالجه به آلمان اعزام می‌شود. لیلا خواهر سعید که
                  سال هاست در آلمان با شوهر آلمانی و پسرشان یوناس (یونس) زندگی
                  می‌کند، سعید را در آسایشگاه می‌بیند. بین سعید و یونس رابطه
                  عاطفی عمیقی برقرار می‌شود
                </DetailsCenter>
                <DetailsDown>
                  <WatchBtn>
                    تماشا کنید
                    <img src="./images/watch.svg" />
                  </WatchBtn>
                </DetailsDown>
              </Details>
            </SwiperSlide>{" "}
            {/* Film 3 */}
            <SwiperSlide>
              <ImagePlace>
                <FavoriteImg src="./images/nostalgia/ekhraji.png" />
              </ImagePlace>
              <Details>
                <DetailsTop>
                  <DetailsName>اخراجی‌ها</DetailsName>
                  <DetailsYear>۱۳۸۵ : سال تولید</DetailsYear>
                  <DetailsTime>۱:۴۴:۱۵ : مدت زمان</DetailsTime>
                </DetailsTop>
                <DetailsCenter>
                  مجید از اراذل جنوب تهران عاشق دختر پیرمرد عارفی به نام میرزا
                  می‌شود. میرزا شرط ازدواج مجید و دخترش را سر به راه شدن او
                  می‌داند. مجید تصمیم می‌گیرد برای اثبات سر به راه شدن خود به
                  جبهه برود که بقیه دوستانش نیز همراه او می‌شوند. برای حضور آنها
                  در جبهه، مخالفت‌هایی وجود دارد اما با ضمانت میرزا و یکی دیگر
                  از رزمنده‌ها آنها به پادگان آموزشی می‌رسند
                </DetailsCenter>
                <DetailsDown>
                  <WatchBtn>
                    تماشا کنید
                    <img src="./images/watch.svg" />
                  </WatchBtn>
                </DetailsDown>
              </Details>
            </SwiperSlide>{" "}
            {/* Film 4 */}
            <SwiperSlide>
              <ImagePlace>
                <FavoriteImg src="./images/nostalgia/azhans.png" />
              </ImagePlace>
              <Details>
                <DetailsTop>
                  <DetailsName>آژانس‌ شیشه‌ای</DetailsName>
                  <DetailsYear>۱۳۷۶ : سال تولید</DetailsYear>
                  <DetailsTime>۱:۵۴:۰۵ : مدت زمان</DetailsTime>
                </DetailsTop>
                <DetailsCenter>
                  عباس، بسیجی خراسانی است که از سال‌های حضورش در جنگ ایران و
                  عراق، ترکش خمپاره‌ای در کنار شاهرگ گردنش باقی مانده‌است. به
                  اصرار همسرش، نرگس، برای معاینه به تهران می‌آید و در خیابان، به
                  شکل اتفاقی با همرزم سابقش، حاج کاظم، روبه‌رو می‌شود که مشغول
                  مسافرکشی است. پزشک، وضعیت عباس را بحرانی تشخیص می‌دهد و توصیه
                  می‌کند هرچه زودتر برای بیرون آوردن ترکش به لندن برود
                </DetailsCenter>
                <DetailsDown>
                  <WatchBtn>
                    تماشا کنید
                    <img src="./images/watch.svg" />
                  </WatchBtn>
                </DetailsDown>
              </Details>
            </SwiperSlide>{" "}
            {/* Film 5 */}
            <SwiperSlide>
              <ImagePlace>
                <FavoriteImg src="./images/nostalgia/majid.png" />
              </ImagePlace>
              <Details>
                <DetailsTop>
                  <DetailsName>قصه‌های مجید</DetailsName>
                  <DetailsYear>۱۳۶۹ : سال تولید</DetailsYear>
                  <DetailsTime>۴۳:۲۵ : مدت زمان</DetailsTime>
                </DetailsTop>
                <DetailsCenter>
                  داستان سریال روایتگر لحظاتی از زندگی نوجوانی به نام مجید و
                  مادربزرگش (بی بی) است. در این سریال داستان‌های متعددی را برای
                  مخاطبان به نمایش می‌گذارند که از آن جمله می‌توان به ملخ
                  دریایی، امتحان ورزش، زنگ انشاء، اردو و … اشاره کرد.[۱]داستان
                  اصلی قصه‌های مجید در محیط کرمان نگارش شده بود و روایت‌گر
                  لحظه‌های کودکی به نام مجید است که با مادربزرگش (بی‌بی) زندگی
                  می‌کند
                </DetailsCenter>
                <DetailsDown>
                  <WatchBtn>
                    تماشا کنید
                    <img src="./images/watch.svg" />
                  </WatchBtn>
                </DetailsDown>
              </Details>
            </SwiperSlide>{" "}
            {/* Film 6 */}
            <SwiperSlide>
              <ImagePlace>
                <FavoriteImg src="./images/nostalgia/marmolak.png" />
              </ImagePlace>
              <Details>
                <DetailsTop>
                  <DetailsName>مارمولک</DetailsName>
                  <DetailsYear>۱۳۸۲ : سال تولید</DetailsYear>
                  <DetailsTime>۱:۰۱:۴۵ : مدت زمان</DetailsTime>
                </DetailsTop>
                <DetailsCenter>
                  رضا مثقالی معروف به رضا مارمولک دزد سابقه‌داری است که بارها
                  دستگیر و زندانی شده، اما در آخرین دستگیری، اتهام او سرقت
                  مسلحانه است. رضا را به زندانی تحویل می‌دهند که رئیس آن (آقای
                  مجاور) مردی بسیار سختگیر و انعطاف‌ناپذیر است. او عقیده دارد
                  باید آنقدر نسبت به مجرمان - با روش‌هایی خاص - سخت‌گیری کند که
                  حتی فکر اعمال خلاف به مغزشان نرسد
                </DetailsCenter>
                <DetailsDown>
                  <WatchBtn>
                    تماشا کنید
                    <img src="./images/watch.svg" />
                  </WatchBtn>
                </DetailsDown>
              </Details>
            </SwiperSlide>{" "}
          </Swiper>
        </Carousel>
      </CarouselContainer>
    </Container>
  );
}
