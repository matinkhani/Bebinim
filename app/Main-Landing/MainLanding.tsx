import React, { useState } from "react";
import {
  BebinimBox,
  LinksPlace,
  Container,
  FilmPoster,
  BebinimLinks,
  FreshText,
  LeftSide,
  RightSide,
  ArrowIconsPlace,
  ExplainContainer,
  ExplainAndWatch,
  MoreExplainText,
  MoreExplainBtn,
  CenterPlace,
  CenterPl,
} from "../Styled Components/MainLanding";
import MainMovie from "./array";
import Link from "next/link";
import Carousel from "nuka-carousel";
import "./styles.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

const renderCenterLeftControls = ({
  previousSlide,
}: {
  previousSlide: any;
}) => {
  const Responsive1200 = useMediaQuery("(max-width:1200px)");
  return (
    <Image
      alt="previous button"
      height={48}
      width={48}
      style={
        Responsive1200
          ? {
              position: "absolute",
              left: "35px",
              bottom: "15px",
              cursor: "pointer",
            }
          : {
              position: "absolute",
              left: "35px",
              bottom: "120px",
              cursor: "pointer",
            }
      }
      onClick={previousSlide}
      src="./images/arrowcircleleft.svg"
    />
  );
};

const renderCenterRightControls = ({ nextSlide }: { nextSlide: any }) => {
  const Responsive1200 = useMediaQuery("(max-width:1200px)");
  return (
    <Image
      alt="next button"
      height={48}
      width={48}
      style={
        Responsive1200
          ? {
              position: "absolute",
              left: "90px",
              bottom: "15px",
              cursor: "pointer",
            }
          : {
              position: "absolute",
              left: "90px",
              bottom: "120px",
              cursor: "pointer",
            }
      }
      onClick={nextSlide}
      src="./images/arrowcircleright.svg"
    />
  );
};
export default function MainLanding() {
  const Responsive1200 = useMediaQuery("(max-width:1200px)");
  return (
    <>
      <Carousel
        disableEdgeSwiping={false}
        renderCenterLeftControls={renderCenterLeftControls}
        renderCenterRightControls={renderCenterRightControls}
        wrapAround={true}
      >
        {MainMovie.map((item, index) => {
          return (
            <Container
              style={
                Responsive1200
                  ? { backgroundImage: `url(${item.urlMobile})` }
                  : { backgroundImage: `url(${item.url})` }
              }
            >
              <FilmPoster key={index}>
                <LeftSide>
                  <ArrowIconsPlace></ArrowIconsPlace>
                </LeftSide>

                <RightSide>
                  <ExplainContainer>
                    {Responsive1200 ? (
                      <>
                        <ExplainAndWatch>
                          <MoreExplainText style={{ color: "#fff" }}>
                            <Link href={`Main-Landing/${item.id}`}>
                              توضیحات بیشتر
                            </Link>
                          </MoreExplainText>
                          <Link href={`Main-Landing/${item.id}`}>
                            <Image
                              alt="more icon"
                              height={24}
                              width={24}
                              style={{
                                marginBottom: "10px",
                                cursor: "pointer",
                              }}
                              src={"./images/mores2.svg"}
                            />
                          </Link>
                          <Link href={`Main-Landing/${item.id}`}>
                            <MoreExplainBtn>
                              تماشا کنید
                              <Image
                                alt="watch icon"
                                height={24}
                                width={24}
                                src="./images/watch.svg"
                              />
                            </MoreExplainBtn>
                          </Link>
                        </ExplainAndWatch>
                      </>
                    ) : (
                      <>
                        <ExplainAndWatch>
                          <MoreExplainText
                            style={
                              item.id === 42
                                ? { color: "black" }
                                : item.id === 43
                                ? { color: "White" }
                                : item.id === 44
                                ? { color: "white" }
                                : item.id === 45
                                ? { color: "white" }
                                : {}
                            }
                          >
                            <Link href={`Main-Landing/${item.id}`}>
                              توضیحات بیشتر
                            </Link>
                          </MoreExplainText>
                          <Link href={`Main-Landing/${item.id}`}>
                            <Image
                              alt="more icon"
                              height={24}
                              width={24}
                              src={
                                item.id === 42
                                  ? "./images/mores.svg"
                                  : item.id === 43
                                  ? "./images/mores2.svg"
                                  : item.id === 44
                                  ? "./images/mores2.svg"
                                  : item.id === 45
                                  ? "./images/mores2.svg"
                                  : ""
                              }
                              style={{ cursor: "pointer" }}
                            />
                          </Link>
                          <Link href={`Main-Landing/${item.id}`}>
                            <MoreExplainBtn>
                              تماشا کنید
                              <Image
                                alt="watch icon"
                                height={24}
                                width={24}
                                src="./images/watch.svg"
                              />
                            </MoreExplainBtn>
                          </Link>
                        </ExplainAndWatch>
                      </>
                    )}
                  </ExplainContainer>
                </RightSide>
              </FilmPoster>
            </Container>
          );
        })}
      </Carousel>
      <BebinimBox>
        <LinksPlace>
          <BebinimLinks>
            <CenterPlace>
              <CenterPl>
                <FreshText>انیمیشن تازه ببینیم</FreshText>
                <Image
                  alt="animaiton icon"
                  height={40}
                  width={40}
                  src="./images/freshAnimation.svg"
                />
              </CenterPl>
            </CenterPlace>
          </BebinimLinks>

          <BebinimLinks>
            <CenterPlace>
              <CenterPl>
                <FreshText>سریال تازه ببینیم</FreshText>
                <Image
                  alt="animaiton icon"
                  height={40}
                  width={40}
                  src="./images/freshSerial.svg"
                />
              </CenterPl>
            </CenterPlace>
          </BebinimLinks>

          <BebinimLinks>
            <CenterPlace>
              <CenterPl>
                <FreshText>فیلم تازه ببینیم</FreshText>
                <Image
                  alt="animaiton icon"
                  height={40}
                  width={40}
                  src="./images/freshMovie.svg"
                />
              </CenterPl>
            </CenterPlace>
          </BebinimLinks>
        </LinksPlace>
      </BebinimBox>
    </>
  );
}
