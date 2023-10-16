import React from "react";
import {
  BgImg,
  Category1,
  Category2,
  // CarouselContainer,
  Container,
  Details,
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
} from "../Styled Components/ZakhmKari";

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
            </DetailsText>
          </Details>
          <MovieCarousel>
            
          </MovieCarousel>
        </MovieMain>
      </BgImg>
    </Container>
  );
}
