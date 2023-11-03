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
  Carousel2,
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
  ArrowPlace,
  Arrowright,
  Arrowleft,
} from "../Styled Components/favorites";
import Link from "next/link";
import FavoritesArr from "./array";
import useMediaQuery from "@mui/material/useMediaQuery";
import Carousel from "nuka-carousel";
import "./styleF.css";

export default function Favorites() {
  const renderCenterLeftControls = ({
    previousSlide,
  }: {
    previousSlide: any;
  }) => <Arrowleft onClick={previousSlide} src="./images/arrowleft.svg" />;

  const renderCenterRightControls = ({ nextSlide }: { nextSlide: any }) => {
    return <Arrowright onClick={nextSlide} src="./images/arrowright.svg" />;
  };
  const Responsive600 = useMediaQuery("(max-width:600px)");
  const Responsive900 = useMediaQuery("(max-width:900px)");
  const Responsive1200 = useMediaQuery("(max-width:1200px)");
  return (
    <Container>
      <TextPlace>
        <Text>محبوب‌ترین‌های ببینیم</Text>
      </TextPlace>
      {Responsive600 ? (
        <>
          <ArrowPlace>
            <Carousel
              slidesToScroll={1}
              slidesToShow={2}
              cellSpacing={0}
              wrapAround={true}
              style={{
                height: "100%",
                width: "86.5%",
                gap: "5px",
                marginLeft: "40px",
                marginTop: "40px",
              }}
              renderCenterLeftControls={renderCenterLeftControls}
              renderCenterRightControls={renderCenterRightControls}
            >
              {FavoritesArr.map((item, index) => (
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
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
                </div>
              ))}
            </Carousel>
          </ArrowPlace>
        </>
      ) : Responsive900 ? (
        <>
          <ArrowPlace>
            <Carousel
              slidesToScroll={1}
              slidesToShow={3}
              cellSpacing={0}
              wrapAround={true}
              style={{
                height: "100%",
                width: "88%",
                gap: "5px",
                marginLeft: "40px",
                marginTop: "40px",
              }}
              renderCenterLeftControls={renderCenterLeftControls}
              renderCenterRightControls={renderCenterRightControls}
            >
              {FavoritesArr.map((item, index) => (
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
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
                </div>
              ))}
            </Carousel>
          </ArrowPlace>
        </>
      ) : Responsive1200 ? (
        <>
          <ArrowPlace>
            <Carousel
              slidesToScroll={2}
              slidesToShow={4}
              cellSpacing={0}
              wrapAround={true}
              style={{
                height: "100%",
                width: "92%",
                gap: "5px",
                marginLeft: "40px",
                marginTop: "40px",
              }}
              renderCenterLeftControls={renderCenterLeftControls}
              renderCenterRightControls={renderCenterRightControls}
            >
              {FavoritesArr.map((item, index) => (
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
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
                </div>
              ))}
            </Carousel>
          </ArrowPlace>
        </>
      ) : (
        <>
          <CarouselContainer>
            <Carousel2>
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
                  },
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
            </Carousel2>
          </CarouselContainer>
        </>
      )}
    </Container>
  );
}
