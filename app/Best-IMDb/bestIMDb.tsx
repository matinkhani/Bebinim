import React from "react";
import {
  Container,
  DateFilm,
  Details,
  Hover,
  HoverText,
  ImdbDetails,
  ImdbImg,
  ImdbText,
  ImgContainer,
  Line,
  MidlleLine,
  More,
  Name,
  NameFilm,
  PlaceImdb,
  Year,
} from "../Styled Components/bestIMDb";
import BestIMDbArr from "./array";
import Link from "next/link";

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
        {BestIMDbArr.map((item, index) => {
          return (
            <>
              <ImgContainer>
                <ImdbImg key={index} src={item.url} />
                <Hover>
                  <Link href={`Best-IMDb/${item.id}`}>
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
                  </Link>
                </Hover>
              </ImgContainer>
            </>
          );
        })}
      </PlaceImdb>
    </Container>
  );
}
