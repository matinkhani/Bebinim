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
import AnimationsArr from "./arrayAnimation";
import Link from "next/link";
import { LinkPlace } from "../Styled Components/favorites";

export default function Animation() {
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
            breakpoints={{
              0: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
              1000: {
                slidesPerView: 6,
                slidesPerGroup: 4,
              }
            }}
          >
            {AnimationsArr.map((item, index) => {
              return (
                <SwiperSlide>
                  <FavoriteImg key={index} src={item.url} />
                  <Hover>
                    <Link href={`Animation/${item.id}`}>
                      <LinkPlace>
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
                      </LinkPlace>
                    </Link>
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
