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
import ExclusiveArr from "./array";
import Link from "next/link";

export default function Exclusive() {
  return (
    <Container>
      <ExclusiveText>اختصاصی ببینیم</ExclusiveText>
      <ExclusiveMovie>
        {ExclusiveArr.map((item, index) => {
          return (
            <Movies key={index} style={{ backgroundImage: `url(${item.url})` }}>
              <Hover>
                <Link href={`Exclusive/${item.id}`}>
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
                </Link>
              </Hover>
            </Movies>
          );
        })}
      </ExclusiveMovie>
    </Container>
  );
}
