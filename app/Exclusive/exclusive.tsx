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
  Movies1,
  Movies2,
  Movies3,
  Movies4,
  RealBtn,
} from "../Styled Components/exclusive";

export default function Exclusive() {
  return (
    <Container>
      <ExclusiveText>اختصاصی ببینیم</ExclusiveText>
      <ExclusiveMovie>
        <Movies1>
          <Hover>
            <HoverText>
              <Details>
                <DetailsTop>
                  <RealBtn>ریلیتی‌شو</RealBtn>
                </DetailsTop>
                <DetailsBottom>
                  <HoverFilmName>صداتو</HoverFilmName>
                  <HoverDate>پنجشنبه‌ها</HoverDate>
                </DetailsBottom>
              </Details>
            </HoverText>
          </Hover>
        </Movies1>
        <Movies2>
          <Hover>
            <HoverText>
              <Details>
                <DetailsTop>
                  <RealBtn>سریال</RealBtn>
                </DetailsTop>
                <DetailsBottom>
                  <HoverFilmName>آکتور</HoverFilmName>
                  <HoverDate>شنبه‌ها</HoverDate>
                </DetailsBottom>
              </Details>
            </HoverText>
          </Hover>
        </Movies2>
        <Movies3>
          <Hover>
            <HoverText>
              <Details>
                <DetailsTop>
                  <RealBtn>ریلیتی‌شو</RealBtn>
                </DetailsTop>
                <DetailsBottom>
                  <HoverFilmName>پدر خوانده</HoverFilmName>
                  <HoverDate>جمعه‌ها</HoverDate>
                </DetailsBottom>
              </Details>
            </HoverText>
          </Hover>
        </Movies3>
        <Movies4>
          <Hover>
            <HoverText>
              <Details>
                <DetailsTop>
                  <RealBtn>ریلیتی‌شو</RealBtn>
                </DetailsTop>
                <DetailsBottom>
                  <HoverFilmName>ناتو</HoverFilmName>
                  <HoverDate>دوشنبه‌ها</HoverDate>
                </DetailsBottom>
              </Details>
            </HoverText>
          </Hover>
        </Movies4>
      </ExclusiveMovie>
    </Container>
  );
}
