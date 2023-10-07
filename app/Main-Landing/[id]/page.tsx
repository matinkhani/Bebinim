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
} from "../../Styled Components/watchMovie";
import MainMovie from "../array";

export default function WatchOnline({ params }: { params: { id: number } }) {
  const Find: any = MainMovie.find((elem) => elem.id === +params.id);

  return (
    <Container>
      <LeftSection style={{ backgroundImage: `url(${Find.bgImg})` }}>
        <img src="../images/Watch/gradient.svg" />
      </LeftSection>
      <RightSection>
        <AboutMovies>
          <Tittle>{Find.name}</Tittle>
          <Numbers>
            <Rate>
              {Find.rate}
              <img src="../images/Watch/love.svg" />
            </Rate>
            <Time>{Find.time}</Time>
            <Year>{Find.year} </Year>
            <AgeLimit>{Find.age}</AgeLimit>
          </Numbers>
          <AboutText>{Find.description}</AboutText>
          <Buttons>
            <LikesButton>
              <img src="../images/Watch/dislike.svg" />
              <img src="../images/Watch/like.svg" />
              <img src="../images/Watch/save.svg" />
            </LikesButton>
            <WatchButton>تماشا کردن</WatchButton>
          </Buttons>
        </AboutMovies>

        <MiddleLine />
        <AboutPhoto>
          <Episodes>تصاویر</Episodes>
          <Sekans>
            <SekansPhoto style={{ backgroundImage: `url(${Find.image1})` }} />
            <SekansPhoto style={{ backgroundImage: `url(${Find.image2})` }} />
            <SekansPhoto style={{ backgroundImage: `url(${Find.image3})` }} />
          </Sekans>
        </AboutPhoto>
      </RightSection>
    </Container>
  );
}
