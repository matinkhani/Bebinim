import React from "react";
import {
  Container,
  Details,
  DetailsBottom,
  DetailsTop,
  ExclusiveMovie,
  ExclusiveText,
  Hover,
  HoverDate,
  HoverFilmName,
  HoverText,
  Movies,
  RealBtn,
} from "../Styled Components/exclusive";

export default function Exclusive() {
  const Movie = [
    // Sedato
    {
      url: "./images/exclusive/sedato.svg",
      name: "صداتو",
      date: "پنجشنبه‌ها",
      category: "ریلیتی‌شو",
    },
    // Actor
    {
      url: "./images/exclusive/actor.svg",
      name: "آکتور",
      date: "شنبه‌ها",
      category: "سریال",
    },
    // The God Father
    {
      url: "./images/exclusive/godfather.svg",
      name: "پدر خوانده",
      date: "جمعه‌ها",
      category: "ریلیتی‌شو",
    },
    // Nato
    {
      url: "./images/exclusive/nato.svg",
      name: "ناتو",
      date: "دوشنبه‌ها",
      category: "ریلیتی‌شو",
    },
  ];

  return (
    <Container>
      <ExclusiveText>اختصاصی ببینیم</ExclusiveText>
      <ExclusiveMovie>
        {Movie.map((item, index) => {
          return (
            <Movies key={index} style={{ backgroundImage: `url(${item.url})` }}>
              <Hover>
                <HoverText>
                  <Details>
                    <DetailsTop>
                      <RealBtn>{item.category}</RealBtn>
                    </DetailsTop>
                    <DetailsBottom>
                      <HoverFilmName>{item.name}</HoverFilmName>
                      <HoverDate>{item.date}</HoverDate>
                    </DetailsBottom>
                  </Details>
                </HoverText>
              </Hover>
            </Movies>
          );
        })}
      </ExclusiveMovie>
    </Container>
  );
}
