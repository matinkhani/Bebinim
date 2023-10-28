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
  LinkPlace,
} from "../Styled Components/favorites";
import Link from "next/link";
import FavoritesArr from "./array";

export default function Favorites() {
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
            {FavoritesArr.map((item, index) => {
              return (
                <SwiperSlide>
                  <FavoriteImg key={index} src={item.url} />
                  <Hover>
                    {" "}
                    <Link href={`Favorites/${item.id}`}>
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
