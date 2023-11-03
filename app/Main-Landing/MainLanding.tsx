import React, { useState } from "react";
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
  ExplainContainer,
  ExplainAndWatch,
  Text,
  MoreExplainText,
  MoreExplainBtn,
  WatchSVG,
  MoreIcon,
  ArrowIconsRight,
  ArrowIconsLeft,
} from "../Styled Components/MainLanding";
import MainMovie from "./array";
import Link from "next/link";
import Carousel from "nuka-carousel";
import "./styles.css";
import useMediaQuery from "@mui/material/useMediaQuery";

const renderCenterLeftControls = ({
  previousSlide,
}: {
  previousSlide: any;
}) => (
  <ArrowIconsLeft onClick={previousSlide} src="./images/arrowcircleleft.svg" />
);

const renderCenterRightControls = ({ nextSlide }: { nextSlide: any }) => {
  return (
    <ArrowIconsRight onClick={nextSlide} src="./images/arrowcircleRight.svg" />
  );
};
export default function MainLanding() {
  const Responsive600 = useMediaQuery("(max-width:600px)");
  const Responsive900 = useMediaQuery("(max-width:900px)");

  return (
    <>
      <Carousel
        disableEdgeSwiping={false}
        renderCenterLeftControls={renderCenterLeftControls}
        renderCenterRightControls={renderCenterRightControls}
        wrapAround={true}
      >
        {MainMovie.map((item, index) => {
          return (
            <Container
              style={
                Responsive900
                  ? { backgroundImage: `url(${item.urlMobile})` }
                  : { backgroundImage: `url(${item.url})` }
              }
            >
              <FilmPoster>
                <LeftSide>
                  <ArrowIconsPlace></ArrowIconsPlace>
                </LeftSide>

                <RightSide>
                  <ExplainContainer>
                    {Responsive900 ? (
                      <>
                        <ExplainAndWatch>
                          <MoreExplainText
                            style={
                              item.id === 42
                                ? { color: "black" }
                                : item.id === 43
                                ? { color: "White" }
                                : item.id === 44
                                ? { color: "white" }
                                : item.id === 45
                                ? { color: "white" }
                                : {}
                            }
                          >
                            <Link href={`Main-Landing/${item.id}`}>
                              توضیحات بیشتر
                            </Link>
                          </MoreExplainText>
                          <Link href={`Main-Landing/${item.id}`}>
                            <MoreIcon
                              src={
                                item.id === 42
                                  ? "./images/mores.svg"
                                  : item.id === 43
                                  ? "./images/mores2.svg"
                                  : item.id === 44
                                  ? "./images/mores2.svg"
                                  : item.id === 45
                                  ? Responsive600
                                    ? "./images/mores2.svg"
                                    : "./images/mores2.svg"
                                  : ""
                              }
                            />
                          </Link>
                          <Link href={`Main-Landing/${item.id}`}>
                            <MoreExplainBtn>
                              تماشا کنید
                              <WatchSVG src="./images/watch.svg" />
                            </MoreExplainBtn>
                          </Link>
                        </ExplainAndWatch>
                      </>
                    ) : (
                      <>
                        <ExplainAndWatch>
                          <MoreExplainText
                            style={
                              item.id === 42
                                ? { color: "black" }
                                : item.id === 43
                                ? { color: "White" }
                                : item.id === 44
                                ? { color: "white" }
                                : item.id === 45
                                ? { color: "white" }
                                : {}
                            }
                          >
                            <Link href={`Main-Landing/${item.id}`}>
                              توضیحات بیشتر
                            </Link>
                          </MoreExplainText>
                          <Link href={`Main-Landing/${item.id}`}>
                            <MoreIcon
                              src={
                                item.id === 42
                                  ? "./images/mores.svg"
                                  : item.id === 43
                                  ? "./images/mores2.svg"
                                  : item.id === 44
                                  ? "./images/mores2.svg"
                                  : item.id === 45
                                  ? "./images/mores2.svg"
                                  : ""
                              }
                            />
                          </Link>
                          <Link href={`Main-Landing/${item.id}`}>
                            <MoreExplainBtn>
                              تماشا کنید
                              <WatchSVG src="./images/watch.svg" />
                            </MoreExplainBtn>
                          </Link>
                        </ExplainAndWatch>
                      </>
                    )}
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
                      {/* {item.text} */}
                    </Text>
                  </ExplainContainer>
                </RightSide>
              </FilmPoster>
            </Container>
          );
        })}
      </Carousel>
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
    </>
  );
}
