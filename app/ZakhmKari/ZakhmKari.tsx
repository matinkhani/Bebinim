import React from "react";
import {
  BgImg,
  Carousel,
  CarouselContainer,
  Category1,
  Category2,
  Container,
  Details,
  DetailsMovieBtn,
  DetailsMovieText,
  DetailsText,
  Director,
  MovieCarousel,
  MovieIacon,
  MovieMain,
  Rate,
  RatePlace,
  Text,
  TextPlace,
  WatchSVG,
} from "../Styled Components/ZakhmKari";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ZakhmKariArr from "./array";
import "./movie.css";

export default function Movie() {
  return (
    <Container>
      <TextPlace>
        <Text>سریال زخم کاری: بازگشت</Text>
      </TextPlace>
      <BgImg>
        <MovieMain>
          <Details>
            <MovieIacon>
              <img src="./images/ZakhmKari/mov_logo.svg" />
            </MovieIacon>
            <DetailsText>
              <Director>کارگردان: محمدحسین مهدویان</Director>
              <RatePlace>
                <Rate>
                  ۳۰٪
                  <img src="./images/ZakhmKari/rate.svg" />
                </Rate>
                <Category2>خانوادگی</Category2>
                <Category1>درام</Category1>
              </RatePlace>
              <DetailsMovieText>
                در نبود مالک حالا مدعیان تاج و تخت او یکی یکی از راه می‌رسند و
                این آغاز آشوب دیگری است… هنوز بوی خون به مشام می‌رسد!» به دلیل
                حفظ جذابیت‌ها، داستان کامل فصل دوم زخم کاری اعلام نمی‌شود اما
                اگر بخواهیم با توجه به پایان‌بندی فصل اول کمی تجسم کنیم و فصل
                دوم را در ذهنمان طراحی کنیم باید منتظر زنده ماندن مالک از ضربات
                چاقو، خروش و انتقام ...
              </DetailsMovieText>
              <DetailsMovieBtn>
                تماشا کنید
                <WatchSVG src="./images/watch.svg" />
              </DetailsMovieBtn>
            </DetailsText>
          </Details>

          <MovieCarousel>
            <CarouselContainer>
              <Carousel>
                <Swiper
              
                  navigation={true}
                  slidesPerView={4}
                  speed={1200}
                  modules={[Navigation]}
                  className="mySwiper"
                  slidesPerGroup={2}
                >
                  <SwiperSlide>
                    <img
                      style={{ height: 160, width: 280, borderRadius: 8 }}
                      src="./images/ZakhmKari/Zakhm1.svg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      style={{ height: 160, width: 280, borderRadius: 8 }}
                      src="./images/ZakhmKari/Zakhm2.svg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      style={{ height: 160, width: 280, borderRadius: 8 }}
                      src="./images/ZakhmKari/Zakhm3.svg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      style={{ height: 160, width: 280, borderRadius: 8 }}
                      src="./images/ZakhmKari/Zakhm4.svg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      style={{ height: 160, width: 280, borderRadius: 8 }}
                      src="./images/ZakhmKari/Zakhm5.svg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      style={{ height: 160, width: 280, borderRadius: 8 }}
                      src="./images/ZakhmKari/Zakhm6.svg"
                    />
                  </SwiperSlide>
                </Swiper>
              </Carousel>
            </CarouselContainer>
          </MovieCarousel>
        </MovieMain>
      </BgImg>
    </Container>
  );
}
