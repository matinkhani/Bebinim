import React from "react";
import {
  Container,
  Details,
  DetailsBottom,
  DetailsTop,
  ExclusiveMovie,
  ExclusiveText,
  ExlContainer,
  Hover,
  HoverDate,
  HoverFilmName,
  HoverText,
  RealBtn,
} from "../Styled Components/exclusive";
import ExclusiveArr from "./array";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

export default function Exclusive() {
  const Responsive480 = useMediaQuery("(max-width:480px)");
  const Responsive600 = useMediaQuery("(max-width:600px)");
  const Responsive900 = useMediaQuery("(max-width:900px)");
  const Responsive1200 = useMediaQuery("(max-width:1200px)");
  const Responsive1440 = useMediaQuery("(max-width:1440px)");
  return (
    <Container>
      <ExlContainer>
        <ExclusiveText>اختصاصی ببینیم</ExclusiveText>
        <ExclusiveMovie>
          {ExclusiveArr.map((item, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    borderRadius: 8,
                    cursor: "pointer",
                    position: "relative",
                  }}
                  alt="exclusive images"
                  height={400}
                  width={
                    Responsive600
                      ? 300
                      : Responsive900
                      ? 220
                      : Responsive1200
                      ? 285
                      : Responsive1440
                      ? 260
                      : 288
                  }
                  src={Responsive480 ? item.urlMobile : item.url}
                />
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
              </div>
            );
          })}
        </ExclusiveMovie>
      </ExlContainer>
    </Container>
  );
}
