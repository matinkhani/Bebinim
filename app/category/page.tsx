"use client";
import {
  CategoryItems,
  Container,
  Image1,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  ImagesPlace,
  Null,
} from "@/app/Styled Components/category";
import React from "react";
import { GlobalStyle } from "../Styled Components/Landing";
import Header from "../Header/Header";
import "animate.css";
import Link from "next/link";

export default function Category() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Header />
        <Null />
        <ImagesPlace className="animate__animated animate__fadeInUpBig">
          <Image1 />
          <Image2 />
          <Image3 />
          <Image4 />
          <Image5 />
          <Image6 />
          <Image7 />
          <Image8 />
          <Image9 />
          <Image10 />
          <Image11 />
          <Image12 />
          <Link href="/Search">
            <Image13 />
          </Link>
          <Image14 />
          <Image15 />
        </ImagesPlace>
      </Container>
    </React.Fragment>
  );
}
