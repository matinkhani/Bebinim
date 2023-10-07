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

export default function MainLanding() {
  return (
    <>
      {MainMovie.map((item, index) => {
        return (
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
                    <MoreExplainText>توضیحات بیشتر</MoreExplainText>
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
                  <Text>{item.text}</Text>
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
        );
      })}
    </>
  );
}
