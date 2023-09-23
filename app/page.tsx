"use client";
import React from "react";
import { Container, GlobalStyle } from "./Styled Components/Landing";
import Header from "./Header/Header";
import MainLanding from "./Main Landing/MainLanding";
export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Header />
        <MainLanding />
      </Container>
    </React.Fragment>
  );
}
