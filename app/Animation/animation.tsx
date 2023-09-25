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
            {/* Film 1 */}
            <SwiperSlide>
              <FavoriteImg src="./images/animation/sponge-bob.png" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>باب اسنفجی</NameFilm>
                    <DateFilm>
                      <Year>۱۹۹۹</Year>
                      <Line />
                      <Name>انیمیشن</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 2 */}
            <SwiperSlide>
              <FavoriteImg src="./images/animation/panda.svg" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>پاندای کونگ فو کار ۳</NameFilm>
                    <DateFilm>
                      <Year>۲۰۱۶</Year>
                      <Line />
                      <Name>انیمیشن</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 3 */}
            <SwiperSlide>
              <FavoriteImg src="./images/animation/ice-age.jpg" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>عصر یخبندان</NameFilm>
                    <DateFilm>
                      <Year>۲۰۰۲</Year>
                      <Line />
                      <Name>انیمیشن</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 4 */}
            <SwiperSlide>
              <FavoriteImg src="./images/animation/cars.jpg" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>ماشین‌ها</NameFilm>
                    <DateFilm>
                      <Year>۲۰۰۶</Year>
                      <Line />
                      <Name>انیمیشن</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 5 */}
            <SwiperSlide>
              <FavoriteImg src="./images/animation/tom&jerry.png" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>تام و جری</NameFilm>
                    <DateFilm>
                      <Year>۱۹۴۰</Year>
                      <Line />
                      <Name>انیمیشن</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 6 */}
            <SwiperSlide>
              <FavoriteImg src="./images/animation/pink-panther.png" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>پلنگ صورتی</NameFilm>
                    <DateFilm>
                      <Year>۱۹۶۹</Year>
                      <Line />
                      <Name>انیمیشن</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>
            {/* Film 7 */}
            <SwiperSlide>
              <FavoriteImg src="./images/animation/madagascar.jpg" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>ماداگاسکار ۲</NameFilm>
                    <DateFilm>
                      <Year>۲۰۰۵</Year>
                      <Line />
                      <Name>انیمیشن</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 8 */}
            <SwiperSlide>
              <FavoriteImg src="./images/animation/toy-story.jpeg" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>داستان اسباب بازی</NameFilm>
                    <DateFilm>
                      <Year>۱۹۹۵</Year>
                      <Line />
                      <Name>انیمیشن</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 9 */}
            <SwiperSlide>
              <FavoriteImg src="./images/animation/luca.svg" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>لوکا</NameFilm>
                    <DateFilm>
                      <Year>۲۰۲۱</Year>
                      <Line />
                      <Name>انیمیشن</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 10 */}
            <SwiperSlide>
              <FavoriteImg src="./images/animation/soul.svg" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>روح</NameFilm>
                    <DateFilm>
                      <Year>۲۰۲۰</Year>
                      <Line />
                      <Name>انیمیشن</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 11 */}
            <SwiperSlide>
              <FavoriteImg src="./images/animation/rango.svg" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>رنگو</NameFilm>
                    <DateFilm>
                      <Year>۲۰۱۱</Year>
                      <Line />
                      <Name>انیمیشن</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 12 */}
            <SwiperSlide>
              <FavoriteImg src="./images/animation/dolphin.svg" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>پسر دلفینی</NameFilm>
                    <DateFilm>
                      <Year>۲۰۲۲</Year>
                      <Line />
                      <Name>انیمیشن</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
            {/* Film 13 */}
            <SwiperSlide>
              <FavoriteImg src="./images/animation/turning-red.svg" />
              <Hover>
                <HoverText>
                  <Details>
                    <NameFilm>قرمز شدن</NameFilm>
                    <DateFilm>
                      <Year>۲۰۲۲</Year>
                      <Line />
                      <Name>انیمیشن</Name>
                    </DateFilm>
                  </Details>
                </HoverText>
              </Hover>
            </SwiperSlide>{" "}
          </Swiper>
        </Carousel>
      </CarouselContainer>
    </Container>
  );
}
