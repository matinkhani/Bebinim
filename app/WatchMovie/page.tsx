"use client";
import React from "react";
import {
  AboutMovies,
  AboutPhoto,
  AboutText,
  AgeLimit,
  Buttons,
  Container,
  Episodes,
  LeftSection,
  LikesButton,
  MiddleLine,
  Numbers,
  Rate,
  RightSection,
  Sekans,
  SekansPhoto,
  Time,
  Tittle,
  WatchButton,
  Year,
} from "../Styled Components/watchMovie";

export default function WatchMovie() {
  return (
    <Container>
      <LeftSection>
        <img src="./images/Watch/gradient.svg" />
      </LeftSection>
      <RightSection>
        <AboutMovies>
          <Tittle>پوست شیر</Tittle>
          <Numbers>
            <Rate>
              ۳۰٪
              <img src="./images/Watch/love.svg" />
            </Rate>
            <Time>۴۵:۳۰</Time>
            <Year>۱۴۰۲ </Year>
            <AgeLimit>+۱۵</AgeLimit>
          </Numbers>
          <AboutText>
            نعیم که پانزده سال زندان را به عشق دیدن دخترش تاب آورده پس از رهایی،
            برای <br /> دیدار با او دچار بحرانی بزرگ می شود.
          </AboutText>
          <Buttons>
            <LikesButton>
              <img src="./images/Watch/dislike.svg" />
              <img src="./images/Watch/like.svg" />
              <img src="./images/Watch/save.svg" />
            </LikesButton>
            <WatchButton>تماشا کردن</WatchButton>
          </Buttons>
        </AboutMovies>

        <MiddleLine />
        <AboutPhoto>
          <Episodes>قسمت‌ها</Episodes>
          <Sekans>
            <SekansPhoto src="./images/Watch/frame1.svg" />
            <SekansPhoto src="./images/Watch/frame2.svg" />
            <SekansPhoto src="./images/Watch/frame3.svg" />
          </Sekans>
        </AboutPhoto>
      </RightSection>
    </Container>
  );
}
