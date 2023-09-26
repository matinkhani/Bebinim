import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./animation.css";
import { Navigation } from "swiper/modules";
import {
  Container,
  CarouselContainer,
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
} from "../Styled Components/animation";

export default function Animation() {
  const Animations = [
    // Sponge Bob
    {
      url: "./images/animation/sponge-bob.png",
      name: "باب اسنفجی",
      year: "۱۹۹۹",
      category: "انیمیشن",
    },
    // Panda
    {
      url: "./images/animation/panda.svg",
      name: "پاندای کونگ فو کار ۳",
      year: "۲۰۱۶",
      category: "انیمیشن",
    },
    // Ice Age
    {
      url: "./images/animation/ice-age.jpg",
      name: "عصر یخبندان",
      year: "۲۰۰۲",
      category: "انیمیشن",
    },
    // Cars
    {
      url: "./images/animation/cars.jpg",
      name: "ماشین‌ها",
      year: "۲۰۰۶",
      category: "انیمیشن",
    },
    // Tom & Jerry
    {
      url: "./images/animation/tom&jerry.png",
      name: "تام و جری",
      year: "۱۹۴۰",
      category: "انیمیشن",
    },
    // Pink Panther
    {
      url: "./images/animation/pink-panther.png",
      name: "پلنگ صورتی",
      year: "۱۹۶۹",
      category: "انیمیشن",
    },
    // Madagascar
    {
      url: "./images/animation/madagascar.jpg",
      name: "ماداگاسکار ۲",
      year: "۲۰۰۵",
      category: "انیمیشن",
    },
    // Toy Story
    {
      url: "./images/animation/toy-story.jpeg",
      name: "داستان اسباب بازی",
      year: "۱۹۹۵",
      category: "انیمیشن",
    },
    // Luca
    {
      url: "./images/animation/luca.svg",
      name: "لوکا",
      year: "۲۰۲۱",
      category: "انیمیشن",
    },
    // Soul
    {
      url: "./images/animation/soul.svg",
      name: "روح",
      year: "۲۰۲۰",
      category: "انیمیشن",
    },
    // Rango
    {
      url: "./images/animation/rango.svg",
      name: "رنگو",
      year: "۲۰۱۱",
      category: "انیمیشن",
    },
    // Dolphin Boy
    {
      url: "./images/animation/dolphin.svg",
      name: "پسر دلفینی",
      year: "۲۰۲۱",
      category: "انیمیشن",
    },
    // Turning Red
    {
      url: "./images/animation/turning-red.svg",
      name: "قرمز شدن",
      year: "۲۰۲۱",
      category: "انیمیشن",
    },
  ];

  return (
    <Container>
      <TextPlace>
        <Text>انیمیشن</Text>
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
            {Animations.map((item, index) => {
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
