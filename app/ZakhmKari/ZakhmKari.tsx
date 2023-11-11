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
} from "../Styled Components/ZakhmKari";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ZakhmKariArr from "./array";
import "./movie.css";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

export default function Movie() {
  const Responsive1440 = useMediaQuery("(max-width:1440px)");
  return (
    <Container>
      {ZakhmKariArr.map((item, index) => {
        return (
          <>
            <TextPlace>
              <Text>سریال زخم کاری: بازگشت</Text>
            </TextPlace>
            <BgImg>
              <MovieMain>
                <Details>
                  <MovieIacon>
                    <Image
                      height={100}
                      width={100}
                      alt="zakhm kari logo"
                      src="/images/ZakhmKari/mov_logo.webp"
                    />
                  </MovieIacon>
                  <DetailsText>
                    <Director>کارگردان: محمدحسین مهدویان</Director>
                    <RatePlace>
                      <Rate>
                        ۳۰٪
                        <Image
                          height={24}
                          width={24}
                          alt="rate icon"
                          src="./images/ZakhmKari/rate.svg"
                        />
                      </Rate>
                      <Category2>خانوادگی</Category2>
                      <Category1>درام</Category1>
                    </RatePlace>
                    <DetailsMovieText>
                      در نبود مالک حالا مدعیان تاج و تخت او یکی یکی از راه
                      می‌رسند و این آغاز آشوب دیگری است… هنوز بوی خون به مشام
                      می‌رسد!» به دلیل حفظ جذابیت‌ها، داستان کامل فصل دوم زخم
                      کاری اعلام نمی‌شود اما اگر بخواهیم با توجه به پایان‌بندی
                      فصل اول کمی تجسم کنیم و فصل دوم را در ذهنمان طراحی کنیم
                      باید منتظر زنده ماندن مالک از ضربات چاقو، خروش و انتقام
                      ...
                    </DetailsMovieText>
                    <DetailsMovieBtn>
                      <Link
                        style={{
                          height: "100%",
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        href={`ZakhmKari/${item.id}`}
                      >
                        تماشا کنید
                        <Image
                          height={24}
                          width={24}
                          alt="watch icon"
                          src="./images/watch.svg"
                        />
                      </Link>
                    </DetailsMovieBtn>
                  </DetailsText>
                </Details>

                <MovieCarousel
                  style={
                    Responsive1440 ? { display: "none" } : { display: "flex" }
                  }
                >
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
                          <Image
                            alt="zakhm kari images"
                            height={160}
                            width={280}
                            src={item.photo1}
                            style={{ borderRadius: 8 }}
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image
                            alt="zakhm kari images"
                            height={160}
                            width={280}
                            src={item.photo2}
                            style={{ borderRadius: 8 }}
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image
                            alt="zakhm kari images"
                            height={160}
                            width={280}
                            src={item.photo3}
                            style={{ borderRadius: 8 }}
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image
                            alt="zakhm kari images"
                            height={160}
                            width={280}
                            src={item.photo4}
                            style={{ borderRadius: 8 }}
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image
                            alt="zakhm kari images"
                            height={160}
                            width={280}
                            src={item.photo5}
                            style={{ borderRadius: 8 }}
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image
                            alt="zakhm kari images"
                            height={160}
                            width={280}
                            src={item.photo6}
                            style={{ borderRadius: 8 }}
                          />
                        </SwiperSlide>
                      </Swiper>
                    </Carousel>
                  </CarouselContainer>
                </MovieCarousel>
              </MovieMain>
            </BgImg>
          </>
        );
      })}
    </Container>
  );
}
