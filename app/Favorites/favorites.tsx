import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./favorites.css";
import { Navigation } from "swiper/modules";
import {
  CarouselContainer,
  Container,
  TextPlace,
  Text,
  Carousel,
  FavoriteImg,
  Hover,
  HoverText,
  Details,
  NameFilm,
  DateFilm,
  Year,
  Name,
  Line,
} from "../Styled Components/favorites";

export default function Favorites() {
  const Favorites = [
    //ablagh
    {
      url: "./images/favorites/Frame1.png",
      name: "ابلق",
      category: "فیلم",
      year: "۱۳۹۹",
    },
    //titi
    {
      url: "./images/favorites/frame2.png",
      name: "تی تی",
      category: "فیلم",
      year: "۱۳۹۹",
    },
    //posteshir
    {
      url: "./images/favorites/Frame3.png",
      name: "پوست شیر‍",
      category: "سریال",
      year: "۱۴۰۱",
    },
    //marde baznde
    {
      url: "./images/favorites/Frame4.png",
      name: "مرد بازنده",
      category: "فیلم",
      year: "۱۴۰۰",
    },
    //sag band
    {
      url: "./images/favorites/Frame5.png",
      name: "سگ بند",
      category: "فیلم",
      year: "۱۴۰۰",
    },
    //shadravan
    {
      url: "./images/favorites/Frame6.png",
      name: "شادروان",
      category: "فیلم",
      year: "۱۴۰۱",
    },
    //zelava
    {
      url: "./images/favorites/Frame7.jpg",
      name: "زلاوا",
      category: "فیلم",
      year: "۱۳۹۹",
    },
    //last of us
    {
      url: "./images/favorites/Frame8.jpg",
      name: "The Last of Us",
      category: "سریال",
      year: "۲۰۱۳",
    },
    //bedon ghara ghabli
    {
      url: "./images/favorites/Frame9.jpg",
      name: "بدون قرار قبلی",
      category: "فیلم",
      year: "۱۴۰۰",
    },
    //john wick 4
    {
      url: "./images/favorites/Frame10.jpg",
      name: "John Wick: Chapter 4",
      category: "فیلم",
      year: "۲۰۲۳",
    },
    //shenaye parvane
    {
      url: "./images/favorites/Frame11.jpg",
      name: "شنای پروانه",
      category: "فیلم",
      year: "۱۳۹۸",
    },
    //mogheiat mahdi
    {
      url: "./images/favorites/Frame12.jpeg",
      name: "موقعیت مهدی",
      category: "فیلم",
      year: "۱۴۰۰",
    },
    //dozist
    {
      url: "./images/favorites/Frame13.jpg",
      name: "دوزیست",
      category: "فیلم",
      year: "۱۳۹۹",
    },
  ];
  return (
    <Container>
      <TextPlace>
        <Text>محبوب‌ترین‌های ببینیم</Text>
      </TextPlace>
      <CarouselContainer>
        <Carousel>
          <Swiper
            navigation={true}
            slidesPerView={6}
            speed={1200}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerGroup={4}
          >
            {Favorites.map((item, index) => {
              return (
                <SwiperSlide>
                  <FavoriteImg key={index} src={item.url} />
                  <Hover>
                    <HoverText>
                      <Details>
                        <NameFilm>{item.name}</NameFilm>
                        <DateFilm>
                          <Year>{item.year}</Year>
                          <Line />
                          <Name>{item.category}</Name>
                        </DateFilm>
                      </Details>
                    </HoverText>
                  </Hover>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Carousel>
      </CarouselContainer>
    </Container>
  );
}
