"use client";
import {
  CategoryItems,
  Container,
  ImagesPlace,
  Null,
} from "@/app/Styled Components/category";
import React from "react";
import { GlobalStyle } from "../Styled Components/Landing";
import Header from "../Header/Header";
import "animate.css";

export default function Category() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Header />
        <Null />
        <ImagesPlace className="animate__animated animate__fadeInUpBig">
          <CategoryItems></CategoryItems>
          <CategoryItems></CategoryItems>
          <CategoryItems></CategoryItems>
          <CategoryItems></CategoryItems>
          <CategoryItems></CategoryItems>
          <CategoryItems></CategoryItems>
          <CategoryItems></CategoryItems>
          <CategoryItems></CategoryItems>
          <CategoryItems></CategoryItems>
          <CategoryItems></CategoryItems>
          <CategoryItems></CategoryItems>
          <CategoryItems></CategoryItems>
          <CategoryItems></CategoryItems>
          <CategoryItems></CategoryItems>
          <CategoryItems></CategoryItems>
        </ImagesPlace>
      </Container>
    </React.Fragment>
  );
}
