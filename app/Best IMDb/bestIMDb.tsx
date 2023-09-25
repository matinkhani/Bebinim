import React from "react";
import {
  Container,
  ImdbDetails,
  ImdbDown,
  ImdbImg,
  ImdbText,
  ImdbTop,
  MidlleLine,
  More,
  PlaceImdb,
} from "../Styled Components/bestIMDb";

export default function BestIMDb() {
  return (
    <Container>
      <ImdbDetails>
        <More>
          <img style={{ cursor: "pointer" }} src="./images/imdb/arrow.svg" />{" "}
          <p style={{ cursor: "pointer" }}>مشاهده همه</p>
        </More>
        <MidlleLine></MidlleLine>
        <ImdbText>Imdb برترین‌های</ImdbText>
      </ImdbDetails>
      <PlaceImdb>
        <ImdbTop>
          <ImdbImg src="./images/imdb/fight-club.png" />
          <ImdbImg src="./images/imdb/dark-knight.png" />
          <ImdbImg src="./images/imdb/breaking-bad.png" />
          <ImdbImg src="./images/imdb/inception.png" />
        </ImdbTop>
        <ImdbDown>
          <ImdbImg src="./images/imdb/lala-land.png" />
          <ImdbImg src="./images/imdb/coda.png" />
          <ImdbImg src="./images/imdb/interstellar.png" />
          <ImdbImg src="./images/imdb/god-father.png" />
        </ImdbDown>
      </PlaceImdb>
    </Container>
  );
}
