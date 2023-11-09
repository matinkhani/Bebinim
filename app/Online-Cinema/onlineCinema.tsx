"use client";
import React from "react";
import {
  CinemaOlineText,
  Container,
  DetailsPlace,
  DetailsText,
  DetalisDown,
  DetalisTop,
  Hover,
  HoverText,
  Line,
  Movie1,
  Name,
  PosterPlace,
  Year,
} from "../Styled Components/onlineCinema";
import OnlineMovie from "./onlineMovie";
import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function OnlineCinema() {
  const Responsive600 = useMediaQuery("(max-width:600px)");
  const Responsive800 = useMediaQuery("(max-width:800px)");
  const Responsive1200 = useMediaQuery("(max-width:1200px)");
  const Responsive1440 = useMediaQuery("(max-width:1440px)");

  return (
    <Container>
      <CinemaOlineText>سینما آنلاین</CinemaOlineText>
      <PosterPlace>
        {OnlineMovie.map((item, index) => {
          return (
            <Link href={`Online-Cinema/${item.id}`}>
              <Hover>
                <HoverText>
                  <DetailsPlace>
                    <DetalisTop>
                      <Year>{item.year}</Year>
                      <Line />
                      <Name>{item.name}</Name>
                    </DetalisTop>
                    <DetalisDown>
                      <DetailsText>{item.description}</DetailsText>
                    </DetalisDown>
                  </DetailsPlace>
                </HoverText>
              </Hover>
              <Image
                alt="online cinema movies"
                src={item.url}
                height={
                  Responsive800
                    ? 140
                    : Responsive1200
                    ? 160
                    : Responsive1440
                    ? 205
                    : 228
                }
                width={
                  Responsive600
                    ? 290
                    : Responsive800
                    ? 500
                    : Responsive1440
                    ? 520
                    : 600
                }
                key={index}
                style={{ borderRadius: 8 }}
              />
            </Link>
          );
        })}
      </PosterPlace>
    </Container>
  );
}
