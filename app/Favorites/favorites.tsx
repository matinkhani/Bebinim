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
  ArrowLeft,
  Carousel,
  ArrowRight,
  Arrow,
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
            {/* Film 1 */}
            <SwiperSlide>
              <FavoriteImg src="./images/favorites/Frame1.png" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>ابلق</NameFilm>
                    <DateFilm>
                      <Year>۱۳۹۹</Year>
                      <Line />
                      <Name>فیلم</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 2 */}
            <SwiperSlide>
              <FavoriteImg src="./images/favorites/frame2.png" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>تی تی</NameFilm>
                    <DateFilm>
                      <Year>۱۳۹۹</Year>
                      <Line />
                      <Name>فیلم</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 3 */}
            <SwiperSlide>
              <FavoriteImg src="./images/favorites/Frame3.png" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>پوست شیر‍‍</NameFilm>
                    <DateFilm>
                      <Year>۱۴۰۱</Year>
                      <Line />
                      <Name>سریال</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 4 */}
            <SwiperSlide>
              <FavoriteImg src="./images/favorites/Frame4.png" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>مرد بازنده</NameFilm>
                    <DateFilm>
                      <Year>۱۴۰۰</Year>
                      <Line />
                      <Name>فیلم</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 5 */}
            <SwiperSlide>
              <FavoriteImg src="./images/favorites/Frame5.png" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>سگ بند</NameFilm>
                    <DateFilm>
                      <Year>۱۴۰۰</Year>
                      <Line />
                      <Name>فیلم</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 6 */}
            <SwiperSlide>
              <FavoriteImg src="./images/favorites/Frame6.png" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>شادروان</NameFilm>
                    <DateFilm>
                      <Year>۱۴۰۱</Year>
                      <Line />
                      <Name>فیلم</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 7 */}
            <SwiperSlide>
              <FavoriteImg src="./images/favorites/Frame7.jpg" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>زلاوا</NameFilm>
                    <DateFilm>
                      <Year>۱۳۹۹</Year>
                      <Line />
                      <Name>فیلم</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 8 */}
            <SwiperSlide>
              <FavoriteImg src="./images/favorites/Frame8.jpg" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>The Last of Us</NameFilm>
                    <DateFilm>
                      <Year>۲۰۱۳</Year>
                      <Line />
                      <Name>سریال</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 9 */}
            <SwiperSlide>
              <FavoriteImg src="./images/favorites/Frame9.jpg" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>بدون قرار قبلی</NameFilm>
                    <DateFilm>
                      <Year>۱۴۰۰</Year>
                      <Line />
                      <Name>فیلم</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 10 */}
            <SwiperSlide>
              <FavoriteImg src="./images/favorites/Frame10.jpg" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>John Wick: Chapter 4</NameFilm>
                    <DateFilm>
                      <Year>۲۰۲۳</Year>
                      <Line />
                      <Name>فیلم</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 11 */}
            <SwiperSlide>
              <FavoriteImg src="./images/favorites/Frame11.jpg" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>شنای پروانه</NameFilm>
                    <DateFilm>
                      <Year>۱۳۹۸</Year>
                      <Line />
                      <Name>فیلم</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 12 */}
            <SwiperSlide>
              <FavoriteImg src="./images/favorites/Frame12.jpeg" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>موقعیت مهدی</NameFilm>
                    <DateFilm>
                      <Year>۱۴۰۰</Year>
                      <Line />
                      <Name>فیلم</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 13 */}
            <SwiperSlide>
              <FavoriteImg src="./images/favorites/Frame13.jpg" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>دوزیست</NameFilm>
                    <DateFilm>
                      <Year>۱۳۹۹</Year>
                      <Line />
                      <Name>فیلم</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>
          </Swiper>
        </Carousel>
      </CarouselContainer>
    </Container>
  );
}
