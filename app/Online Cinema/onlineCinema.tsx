import React from "react";
import {
  CinemaOlineText,
  Container,
  Movie1,
  Movie2,
  Movie3,
  Movie4,
  PosterPlace,
} from "../Styled Components/onlineCinema";

export default function OnlineCinema() {
  return (
    <Container>
      <CinemaOlineText>سینما آنلاین</CinemaOlineText>
      <PosterPlace>
        <Movie1></Movie1>
        <Movie2></Movie2>
        <Movie3></Movie3>
        <Movie4></Movie4>
      </PosterPlace>
    </Container>
  );
}
