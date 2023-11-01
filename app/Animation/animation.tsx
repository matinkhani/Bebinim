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
} from "../Styled Components/animation";
import AnimationsArr from "./arrayAnimation";
import Link from "next/link";
import { ArrowPlace, Arrowleft, Arrowright, LinkPlace } from "../Styled Components/favorites";
import useMediaQuery from "@mui/material/useMediaQuery";
import Carousel from "nuka-carousel";
import "./styleA.css";

export default function Animation() {
  const renderCenterLeftControls = ({
    previousSlide,
  }: {
    previousSlide: any;
  }) => <Arrowleft onClick={previousSlide} src="./images/arrowleft.svg" />;

  const renderCenterRightControls = ({ nextSlide }: { nextSlide: any }) => {
    return <Arrowright onClick={nextSlide} src="./images/arrowright.svg" />;
  };
  const Responsive600 = useMediaQuery("(max-width:600px)");
  return (
    <Container>
      <TextPlace>
        <Text>انیمیشن</Text>
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
                width: "80%",
                gap: "5px",
                marginLeft: "40px",
                marginTop: "40px",
              }}
              renderCenterLeftControls={renderCenterLeftControls}
              renderCenterRightControls={renderCenterRightControls}
            >
              {AnimationsArr.map((item, index) => (
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
        </Carousel2>
      </CarouselContainer>
        </>
      )}
    </Container>
  );
}
