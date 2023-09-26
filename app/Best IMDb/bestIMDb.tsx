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
  const BestIMDbTop = [
    // Fight Club
    {
      url: "./images/imdb/fight-club.png",
      name: "Fight Club",
      year: "۱۹۹۹",
      category: "فیلم",
    },
    // The Dark Knight
    {
      url: "./images/imdb/dark-knight.png",
      name: "The Dark Knight",
      year: "۲۰۰۸",
      category: "فیلم",
    },
    // Breaking Bad
    {
      url: "./images/imdb/breaking-bad.png",
      name: "Breaking Bad",
      year: "۲۰۰۸",
      category: "سریال",
    },
    // Inception
    {
      url: "./images/imdb/inception.png",
      name: "Inception",
      year: "۲۰۱۰",
      category: "فیلم",
    },
  ];

  const BestIMDbDown = [
    // La La Land
    {
      url: "./images/imdb/lala-land.png",
      name: "La La Land",
      year: "۲۰۱۶",
      category: "فیلم",
    },
    // Coda
    {
      url: "./images/imdb/coda.png",
      name: "Coda",
      year: "۲۰۲۱",
      category: "فیلم",
    },
    // Interstellar
    {
      url: "./images/imdb/interstellar.png",
      name: "Interstellar",
      year: "۲۰۱۴",
      category: "فیلم",
    },
    // The Godfather
    {
      url: "./images/imdb/god-father.png",
      name: "The Godfather",
      year: "۱۹۷۲",
      category: "فیلم",
    },
  ];

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
        {/* Top Section */}
        <ImdbTop>
          {BestIMDbTop.map((item, index) => {
            return (
              <>
                <ImgContainer>
                  <ImdbImg src={item.url} />
                  <Hover>
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
                  </Hover>
                </ImgContainer>
              </>
            );
          })}
        </ImdbTop>
          {/* Down Section */}
        <ImdbDown>
          {BestIMDbDown.map((item, index) => {
            return (
              <>
                <ImgContainer>
                  <ImdbImg src={item.url} />
                  <Hover>
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
                  </Hover>
                </ImgContainer>
              </>
            );
          })}
        </ImdbDown>
      </PlaceImdb>
    </Container>
  );
}
