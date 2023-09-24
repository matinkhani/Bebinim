"use client";
import React from "react";
import { Container, GlobalStyle } from "./Styled Components/Landing";
import Header from "./Header/Header";
import MainLanding from "./Main Landing/MainLanding";
import Favorites from "./Favorites/favorites";
import OnlineCinema from "./Online Cinema/onlineCinema";
export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Header />
        <MainLanding />
        <Favorites />
        <OnlineCinema />
      </Container>
    </React.Fragment>
  );
}
