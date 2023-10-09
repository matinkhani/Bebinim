import React from "react";
import {
  BebinimBox,
  LinksPlace,
  Container,
  FilmPoster,
  BebinimLinks,
  FreshSVG,
  FreshText,
  LeftSide,
  RightSide,
  ArrowIconsPlace,
  ArrowIcons,
  ExplainContainer,
  ExplainAndWatch,
  Text,
  MoreExplainText,
  MoreExplainBtn,
  WatchSVG,
  MoreIcon,
} from "../Styled Components/MainLanding";
import MainMovie from "./array";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./main.css";
import { Navigation } from "swiper/modules";

export default function MainLanding() {
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={1}
        speed={1200}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerGroup={1}
        loop={true}
      >
        {MainMovie.map((item, index) => {
          return (
            <SwiperSlide>
              <Container style={{ backgroundImage: `url(${item.url})` }}>
                <FilmPoster>
                  <LeftSide>
                    <ArrowIconsPlace>
                      <ArrowIcons src="./images/arrowcircleleft.svg" />
                      <ArrowIcons src="./images/arrowcircleright.svg" />
                    </ArrowIconsPlace>
                  </LeftSide>

                  <RightSide>
                    <ExplainContainer>
                      <ExplainAndWatch>
                        <MoreExplainText
                          style={
                            item.id === 1
                              ? { color: "black" }
                              : item.id === 2
                              ? { color: "black" }
                              : item.id === 3
                              ? { color: "white" }
                              : item.id === 4
                              ? { color: "white" }
                              : {}
                          }
                        >
                          توضیحات بیشتر
                        </MoreExplainText>
                        <Link href={`Main-Landing/${item.id}`}>
                          <MoreIcon src="./images/mores.svg" />
                        </Link>
                        <Link href={`Main-Landing/${item.id}`}>
                          <MoreExplainBtn>
                            تماشا کنید
                            <WatchSVG src="./images/watch.svg" />
                          </MoreExplainBtn>
                        </Link>
                      </ExplainAndWatch>
                      <Text
                        style={
                          item.id === 1
                            ? { color: "black" }
                            : item.id === 2
                            ? { color: "black" }
                            : item.id === 3
                            ? { color: "white" }
                            : item.id === 4
                            ? { color: "white" }
                            : {}
                        }
                      >
                        {item.text}
                      </Text>
                    </ExplainContainer>
                  </RightSide>
                </FilmPoster>

                <BebinimBox>
                  <LinksPlace>
                    <BebinimLinks>
                      <FreshText>انیمیشن تازه ببینیم</FreshText>
                      <FreshSVG src="./images/freshAnimation.svg" />
                    </BebinimLinks>

                    <BebinimLinks>
                      <FreshText>سریال تازه ببینیم</FreshText>
                      <FreshSVG src="./images/freshSerial.svg" />
                    </BebinimLinks>

                    <BebinimLinks>
                      <FreshText>فیلم تازه ببینیم</FreshText>
                      <FreshSVG src="./images/freshMovie.svg" />
                    </BebinimLinks>
                  </LinksPlace>
                </BebinimBox>
              </Container>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
