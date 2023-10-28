"use client";
import React from "react";
import { Container, GlobalStyle } from "./Styled Components/Landing";
import Header from "./Header/Header";
import MainLanding from "./Main-Landing/MainLanding";
import Favorites from "./Favorites/favorites";
import OnlineCinema from "./Online-Cinema/onlineCinema";
import Exclusive from "./Exclusive/exclusive";
import Animation from "./Animation/animation";
import Nostalgia from "./Nostalgia/nostalgia";
import BestIMDb from "./Best-IMDb/bestIMDb";
import FooterSection from "./Footer Section/footerSection";
import Movie from "./ZakhmKari/ZakhmKari";
export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Header />
        <MainLanding />
        <Favorites />
        <OnlineCinema />
        {/* <Exclusive /> */}
        {/* <Animation /> */}
        {/* <Movie /> */}
        {/* <Nostalgia /> */}
        {/* <BestIMDb /> */}
      </Container>
      {/* <FooterSection /> */}
    </React.Fragment>
  );
}
