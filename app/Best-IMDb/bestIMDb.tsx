import React from "react";
import {
  Container,
  DateFilm,
  Details,
  Hover,
  HoverText,
  ImdbDetails,
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
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function BestIMDb() {
  const Responsive900 = useMediaQuery("(max-width:900px)");
  const Responsive1440 = useMediaQuery("(max-width:1440px)");

  return (
    <Container>
      <ImdbDetails>
        <More>
          <Image
            alt="more icon"
            height={16}
            width={16}
            style={{ cursor: "pointer" }}
            src="./images/imdb/arrow.svg"
          />{" "}
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
                <Image
                  alt="imdbs shows"
                  height={Responsive900 ? 180 : Responsive1440 ? 170 : 200}
                  width={Responsive900 ? 268 : Responsive1440 ? 250 : 288}
                  key={index}
                  src={item.url}
                  style={{ borderRadius: 8 }}
                />
                <Hover>
                  {" "}
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
                  </Link>{" "}
                </Hover>
              </ImgContainer>
            </>
          );
        })}
      </PlaceImdb>
    </Container>
  );
}
