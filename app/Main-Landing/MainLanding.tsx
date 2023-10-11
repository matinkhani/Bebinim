import React, { useState } from "react";
import {
  BebinimBox,
  LinksPlace,
  Container,
  FilmPoster,
  BebinimLinks,
  FreshSVG,
  FreshText,
  LeftSide,
  RightSide,
  ArrowIconsPlace,
  ArrowIcons,
  ExplainContainer,
  ExplainAndWatch,
  Text,
  MoreExplainText,
  MoreExplainBtn,
  WatchSVG,
  MoreIcon,
} from "../Styled Components/MainLanding";
import MainMovie from "./array";
import Link from "next/link";
import "./styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function MainLanding() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {MainMovie.map((item, index) => {
            return (
              <Container
                className="keen-slider__slide"
                style={{ backgroundImage: `url(${item.url})` }}
              >
                <FilmPoster>
                  <LeftSide>
                    <ArrowIconsPlace>
                      <ArrowIcons src="./images/arrowcircleleft.svg" />
                      <ArrowIcons src="./images/arrowcircleright.svg" />
                    </ArrowIconsPlace>
                  </LeftSide>

                  <RightSide>
                    <ExplainContainer>
                      <ExplainAndWatch>
                        <MoreExplainText
                          style={
                            item.id === 1
                              ? { color: "black" }
                              : item.id === 2
                              ? { color: "black" }
                              : item.id === 3
                              ? { color: "white" }
                              : item.id === 4
                              ? { color: "white" }
                              : {}
                          }
                        >
                          توضیحات بیشتر
                        </MoreExplainText>
                        <Link href={`Main-Landing/${item.id}`}>
                          <MoreIcon src="./images/mores.svg" />
                        </Link>
                        <Link href={`Main-Landing/${item.id}`}>
                          <MoreExplainBtn>
                            تماشا کنید
                            <WatchSVG src="./images/watch.svg" />
                          </MoreExplainBtn>
                        </Link>
                      </ExplainAndWatch>
                      <Text
                        style={
                          item.id === 1
                            ? { color: "black" }
                            : item.id === 2
                            ? { color: "black" }
                            : item.id === 3
                            ? { color: "white" }
                            : item.id === 4
                            ? { color: "white" }
                            : {}
                        }
                      >
                        {item.text}
                      </Text>
                    </ExplainContainer>
                  </RightSide>
                </FilmPoster>

                <BebinimBox>
                  <LinksPlace>
                    <BebinimLinks>
                      <FreshText>انیمیشن تازه ببینیم</FreshText>
                      <FreshSVG src="./images/freshAnimation.svg" />
                    </BebinimLinks>

                    <BebinimLinks>
                      <FreshText>سریال تازه ببینیم</FreshText>
                      <FreshSVG src="./images/freshSerial.svg" />
                    </BebinimLinks>

                    <BebinimLinks>
                      <FreshText>فیلم تازه ببینیم</FreshText>
                      <FreshSVG src="./images/freshMovie.svg" />
                    </BebinimLinks>
                  </LinksPlace>
                </BebinimBox>
              </Container>
            );
          })}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
