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
            <Container style={{ backgroundImage: `url(${item.url})` }}>
              <FilmPoster>
                <LeftSide>
                  <ArrowIconsPlace></ArrowIconsPlace>
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
