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

export default function MainLanding() {
  return (
    <Container>
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
              <MoreIcon src="./images/mores.svg" />
              <MoreExplainBtn>
                تماشا کنید
                <WatchSVG src="./images/watch.svg" />
              </MoreExplainBtn>
            </ExplainAndWatch>
            <Text>
              داستان با آغاز شورش کردها در ایران توسط احزاب کُرد در سال ۱۳۵۸ از
              جمله کومله و دموکرات، محمد بروجردی از طرف آیت الله خمینی مأموریت
              می‌یابد تا به‌عنوان فرمانده سپاه پاسداران انقلاب اسلامی در کردستان
              وضعیت را به حالت عادی برگرداند...
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
  );
}
