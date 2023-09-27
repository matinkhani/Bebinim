"use client";
import { Container } from "@/app/Styled Components/category";
import React from "react";
import { GlobalStyle } from "../Styled Components/Landing";
import Header from "../Header/Header";

export default function Category() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </React.Fragment>
  );
}
