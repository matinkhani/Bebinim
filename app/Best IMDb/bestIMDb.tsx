import React from "react";
import {
  Container,
  DateFilm,
  Details,
  Hover,
  HoverText,
  ImdbDetails,
  ImdbDown,
  ImdbImg,
  ImdbText,
  ImdbTop,
  ImgContainer,
  Line,
  MidlleLine,
  More,
  Name,
  NameFilm,
  PlaceImdb,
  Year,
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
          <ImgContainer>
            <ImdbImg src="./images/imdb/fight-club.png" />
            <Hover>
              <HoverText>
                <Details>
                  <NameFilm>Fight Club</NameFilm>
                  <DateFilm>
                    <Year>۱۹۹۹</Year>
                    <Line />
                    <Name>فیلم</Name>
                  </DateFilm>
                </Details>
              </HoverText>
            </Hover>
          </ImgContainer>

          <ImgContainer>
            <ImdbImg src="./images/imdb/dark-knight.png" />
            <Hover>
              <HoverText>
                <Details>
                  <NameFilm>The Dark Knight</NameFilm>
                  <DateFilm>
                    <Year>۲۰۰۸</Year>
                    <Line />
                    <Name>فیلم</Name>
                  </DateFilm>
                </Details>
              </HoverText>
            </Hover>
          </ImgContainer>

          <ImgContainer>
            <ImdbImg src="./images/imdb/breaking-bad.png" />
            <Hover>
              <HoverText>
                <Details>
                  <NameFilm>Breaking Bad</NameFilm>
                  <DateFilm>
                    <Year>۲۰۰۸</Year>
                    <Line />
                    <Name>سریال</Name>
                  </DateFilm>
                </Details>
              </HoverText>
            </Hover>
          </ImgContainer>

          <ImgContainer>
            <ImdbImg src="./images/imdb/inception.png" />
            <Hover>
              <HoverText>
                <Details>
                  <NameFilm>Inception</NameFilm>
                  <DateFilm>
                    <Year>۲۰۱۰</Year>
                    <Line />
                    <Name>فیلم</Name>
                  </DateFilm>
                </Details>
              </HoverText>
            </Hover>
          </ImgContainer>
        </ImdbTop>
        <ImdbDown>
          <ImgContainer>
            <ImdbImg src="./images/imdb/lala-land.png" />
            <Hover>
              <HoverText>
                <Details>
                  <NameFilm>La La Land</NameFilm>
                  <DateFilm>
                    <Year>۲۰۱۶</Year>
                    <Line />
                    <Name>فیلم</Name>
                  </DateFilm>
                </Details>
              </HoverText>
            </Hover>
          </ImgContainer>

          <ImgContainer>
            <ImdbImg src="./images/imdb/coda.png" />
            <Hover>
              <HoverText>
                <Details>
                  <NameFilm>Coda</NameFilm>
                  <DateFilm>
                    <Year>۲۰۲۱</Year>
                    <Line />
                    <Name>فیلم</Name>
                  </DateFilm>
                </Details>
              </HoverText>
            </Hover>
          </ImgContainer>

          <ImgContainer>
            <ImdbImg src="./images/imdb/interstellar.png" />
            <Hover>
              <HoverText>
                <Details>
                  <NameFilm>Interstellar</NameFilm>
                  <DateFilm>
                    <Year>۲۰۱۴</Year>
                    <Line />
                    <Name>فیلم</Name>
                  </DateFilm>
                </Details>
              </HoverText>
            </Hover>
          </ImgContainer>

          <ImgContainer>
            <ImdbImg src="./images/imdb/god-father.png" />
            <Hover>
              <HoverText>
                <Details>
                  <NameFilm>The Godfather</NameFilm>
                  <DateFilm>
                    <Year>۱۹۷۲</Year>
                    <Line />
                    <Name>فیلم</Name>
                  </DateFilm>
                </Details>
              </HoverText>
            </Hover>
          </ImgContainer>
        </ImdbDown>
      </PlaceImdb>
    </Container>
  );
}
