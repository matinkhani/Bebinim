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
        }}
      >
        <TabsPlace>
          <SerialTab>
            <SerialHover
              onMouseEnter={() => {
                setSerialDropDown(true);
                setFilmDropDown(false);
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
              <FilmSerialImg src="./images/arrowdown.svg" />
              <p>سریال</p>
            </SerialHover>
          </SerialTab>

          <DropDownSerial>{serialDropDown && <SerialDrop />}</DropDownSerial>

          <FilmTab>
            <FilmHover
              onMouseEnter={() => {
                setFilmDropDown(true);
                setSerialDropDown(false);
              }}
              style={{
                display: "flex",
                gap: 7,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FilmSerialImg src="./images/arrowdown.svg" />
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
