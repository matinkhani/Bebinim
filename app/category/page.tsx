"use client";
import { Container, ImagesPlace, Null } from "@/app/Styled Components/category";
import React from "react";
import { GlobalStyle } from "../Styled Components/Landing";
import Header from "../Header/Header";
import "animate.css";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import CategoryArray from "./array";

export default function Category() {
  const Responsive480 = useMediaQuery("(max-width:480px)");
  const Responsive800 = useMediaQuery("(max-width:800px)");
  const Responsive1240 = useMediaQuery("(max-width:1240px)");

  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Header />
        <Null />
        <ImagesPlace className="animate__animated animate__fadeInUpBig">
          {CategoryArray.map((item, index) => {
            return (
              <>
                <Image
                  src={item.src}
                  alt={item.alt}
                  height={200}
                  width={288}
                  style={
                    Responsive480
                      ? {
                          height: 150,
                          width: 250,
                          backgroundPosition: "80% 30%",
                        }
                      : Responsive800
                      ? {
                          height: 140,
                          width: 210,
                          backgroundPosition: "94% 30%",
                        }
                      : Responsive1240
                      ? {
                          height: 160,
                          width: 240,
                          backgroundPosition: "94% 30%",
                        }
                      : {}
                  }
                  key={index}
                />
              </>
            );
          })}
          <Link href="/Search">
            <Image
              src={"/./images/Category/search.png"}
              alt="search tab"
              height={200}
              width={288}
              style={
                Responsive480
                  ? {
                      height: 150,
                      width: 250,
                      backgroundPosition: "80% 30%",
                    }
                  : Responsive800
                  ? {
                      height: 140,
                      width: 210,
                      backgroundPosition: "94% 30%",
                    }
                  : Responsive1240
                  ? {
                      height: 160,
                      width: 240,
                      backgroundPosition: "94% 30%",
                    }
                  : {}
              }
            />
          </Link>
        </ImagesPlace>
      </Container>
    </React.Fragment>
  );
}
