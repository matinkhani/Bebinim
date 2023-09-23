import React from "react";
import {
  BebinimIcon,
  BebinimIconAndText,
  BebinimText,
  ButtonsText,
  BuyBtn,
  Container,
  LeftSection,
  RightSection,
  SearchIcon,
  SignLoginBtn,
  BebinimPlace,
  MiddleLine,
  TabsPlace,
  SerialTab,
  FilmTab,
  CategoryTab,
  HomeTab,
  FilmSerialImg,
  CatgoryText,
  HomeText,
  DropDownFilm,
  DropDownSerial,
  SerialHover,
  FilmHover,
} from "../Styled Components/Header";
import { useState } from "react";
import FimlDrop from "./DropDown/FimlDrop";
import SerialDrop from "./DropDown/SerialDrop";

export default function Header() {
  const [filmDropDown, setFilmDropDown] = useState<boolean>(false);
  const [serialDropDown, setSerialDropDown] = useState<boolean>(false);

  const [filmArrow, setFilmArrow] = useState<boolean>(false);
  const [serialArrow, setSerialArrow] = useState<boolean>(false);

  return (
    <Container>
      <LeftSection>
        <SignLoginBtn>
          <ButtonsText>ورود / ثبت نام</ButtonsText>
        </SignLoginBtn>
        <BuyBtn>
          <ButtonsText>خرید اشتراک</ButtonsText>
        </BuyBtn>
        <SearchIcon src="./images/SearchIcon.svg" />
      </LeftSection>

      <RightSection
        onMouseLeave={() => {
          setSerialDropDown(false);
          setFilmDropDown(false);
          setFilmArrow(false);
          setSerialArrow(false);
        }}
      >
        <TabsPlace>
          <SerialTab>
            <SerialHover
              onMouseEnter={() => {
                setSerialDropDown(true);
                setFilmDropDown(false);
                setSerialArrow(true);
                setFilmArrow(false);
              }}
              style={{
                display: "flex",
                gap: 7,
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "fit-content",
              }}
            >
              <FilmSerialImg
                src="./images/arrowdown.svg"
                style={
                  serialArrow
                    ? {
                        transition: "0.3s",
                        WebkitTransition: "0.3s",
                        MozTransition: "0.3s",
                        msTransition: "0.3s",
                        OTransition: "0.3s",
                        WebkitTransform: "rotate(180deg)",
                        transform: "rotate(180deg)",
                      }
                    : { transition: "0.2s" }
                }
              />
              <p>سریال</p>
            </SerialHover>
          </SerialTab>

          <DropDownSerial>{serialDropDown && <SerialDrop />}</DropDownSerial>

          <FilmTab>
            <FilmHover
              onMouseEnter={() => {
                setFilmDropDown(true);
                setSerialDropDown(false);
                setFilmArrow(true);
                setSerialArrow(false);
              }}
              style={{
                display: "flex",
                gap: 7,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FilmSerialImg
                src="./images/arrowdown.svg"
                style={
                  filmArrow
                    ? {
                        transition: "0.3s",
                        WebkitTransition: "0.3s",
                        MozTransition: "0.3s",
                        msTransition: "0.3s",
                        OTransition: "0.3s",
                        WebkitTransform: "rotate(180deg)",
                        transform: "rotate(180deg)",
                      }
                    : { transition: "0.2s" }
                }
              />
              <p>فیلم</p>
            </FilmHover>
          </FilmTab>

          <DropDownFilm>{filmDropDown && <FimlDrop />}</DropDownFilm>

          <CategoryTab>
            <CatgoryText>دسته‌بندی</CatgoryText>
          </CategoryTab>

          <HomeTab>
            <HomeText>خانه</HomeText>
          </HomeTab>
        </TabsPlace>

        <MiddleLine />

        <BebinimPlace>
          <BebinimIconAndText>
            <BebinimText>ببینیم</BebinimText>
            <BebinimIcon src="./images/BebinimIcon.svg" />
          </BebinimIconAndText>
        </BebinimPlace>
      </RightSection>
    </Container>
  );
}
