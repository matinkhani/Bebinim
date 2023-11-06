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
import Image from "next/image";

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
  const Responsive1440 = useMediaQuery("(max-width:1440px)");

  return (
    <Container>
      <TextPlace>
        <Text>محبوب‌ترین‌های ببینیم</Text>
      </TextPlace>
      {Responsive1440 ? (
        <>
          <ArrowPlace>
            <Carousel
              slidesToScroll={Responsive900 ? 1 : Responsive1440 ? 2 : 3}
              slidesToShow={
                Responsive600
                  ? 2
                  : Responsive900
                  ? 3
                  : Responsive1200
                  ? 4
                  : Responsive1440
                  ? 5
                  : 6
              }
              cellSpacing={0}
              wrapAround={true}
              style={
                Responsive600
                  ? {
                      height: "100%",
                      width: "80%",
                      gap: "5px",
                      marginLeft: "40px",
                      marginTop: "40px",
                    }
                  : Responsive900
                  ? {
                      height: "100%",
                      width: "88%",
                      gap: "5px",
                      marginLeft: "40px",
                      marginTop: "40px",
                    }
                  : Responsive1200
                  ? {
                      height: "100%",
                      width: "92%",
                      gap: "5px",
                      marginLeft: "40px",
                      marginTop: "40px",
                    }
                  : {
                      height: "100%",
                      width: "93%",
                      gap: "5px",
                      marginLeft: "40px",
                      marginTop: "40px",
                    }
              }
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
                  <Image
                    alt="favorites image"
                    height={Responsive1200 ? 180 : 258}
                    width={Responsive1200 ? 140 : 184}
                    key={index}
                    src={item.url}
                    style={{
                      borderRadius: 8,
                      overflowY: "hidden",
                      cursor: "pointer",
                      position: "relative",
                    }}
                  />
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
                      <Image
                        alt="favorites image"
                        height={256}
                        width={184}
                        key={index}
                        src={item.url}
                        style={{
                          borderRadius: 8,
                          overflowY: "hidden",
                          cursor: "pointer",
                          position: "relative",
                        }}
                      />
                      <Hover>
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
