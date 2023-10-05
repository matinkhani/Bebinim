"use client"
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
  Movie2,
  Movie3,
  Movie4,
  Name,
  PosterPlace,
  Year,
} from "../Styled Components/onlineCinema";
import OnlineMovie from "./onlineMovie";
import Link from "next/link";

export default function OnlineCinema() {
  return (
    <Container>
      <CinemaOlineText>سینما آنلاین</CinemaOlineText>
      <PosterPlace>
        {OnlineMovie.map((item, index) => {
          return (
            <Link href={`Online-Cinema/${item.id}`}>
              <Movie1
                key={index}
                style={
                  index === 0
                    ? {
                        backgroundImage: `url(${item.url})`,
                        backgroundPosition: "50% 70%",
                      }
                    : index === 1
                    ? {
                        backgroundImage: `url(${item.url})`,
                        backgroundPosition: "50% 15%",
                      }
                    : index === 2
                    ? {
                        backgroundImage: `url(${item.url})`,
                        backgroundPosition: "50% 0%",
                      }
                    : index === 3
                    ? {
                        backgroundImage: `url(${item.url})`,
                        backgroundPosition: "50% 70%",
                      }
                    : {}
                }
              >
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
              </Movie1>
            </Link>
          );
        })}
      </PosterPlace>
    </Container>
  );
}
