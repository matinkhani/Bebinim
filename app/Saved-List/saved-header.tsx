import React from "react";
import {
  BebinimIcon,
  BebinimIconAndText,
  BebinimText,
  ButtonsText,
  BuyBtn,
  Container,
  LeftSection1,
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
  LeftSectionContainer,
  LeftSectionContainer2,
} from "../Styled Components/Header";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../Header/Header.css";
import "animate.css";
import { RoutState } from "../Redux/store";
import { useSelector } from "react-redux";
import {
  AccIconConatiner,
  AccImg,
  ConatinerAcc,
} from "../Styled Components/AccDropDown";
import AccountDrop from "../Header/DropDown/AccountDrop";
import SerialDrop from "../Header/DropDown/SerialDrop";
import FimlDrop from "../Header/DropDown/FimlDrop";

export default function Header() {
  const [filmDropDown, setFilmDropDown] = useState<boolean>(false);
  const [serialDropDown, setSerialDropDown] = useState<boolean>(false);
  const [accDropDown, setAccDropDown] = useState<boolean>(false);

  const [filmArrow, setFilmArrow] = useState<boolean>(false);
  const [serialArrow, setSerialArrow] = useState<boolean>(false);
  const select = useSelector((state: RoutState) => state.Reducer);
  const pathname = usePathname();

  return (
    <Container>
      {select.CheckLogin === true ? (
        <>
          <LeftSectionContainer2>
            <AccIconConatiner
              onMouseEnter={() => {
                setAccDropDown(true);
              }}
              onMouseLeave={() => {
                setAccDropDown(false);
              }}
            >
              <AccImg
                src="./images/Account/profile.svg"
              />{" "}
            </AccIconConatiner>
            <Link href="/Search">
              <SearchIcon src="./images/SearchIcon.svg" />
            </Link>
          </LeftSectionContainer2>
          {accDropDown && (
            <ConatinerAcc
              onMouseEnter={() => {
                setAccDropDown(true);
              }}
              onMouseLeave={() => {
                setAccDropDown(false);
              }}
            >
              <AccountDrop />
            </ConatinerAcc>
          )}
        </>
      ) : (
        <LeftSectionContainer>
          <Link href="/Login">
            <SignLoginBtn className="animate__animated animate__fadeInRight animate__faster">
              <ButtonsText>ورود / ثبت نام</ButtonsText>
            </SignLoginBtn>
          </Link>
          <Link href="/Subscribe">
            <BuyBtn className="animate__animated animate__fadeInLeft animate__faster">
              <ButtonsText>خرید اشتراک</ButtonsText>
            </BuyBtn>
          </Link>
          <Link href="/Search">
            <SearchIcon src="./images/SearchIcon.svg" />
          </Link>
        </LeftSectionContainer>
      )}

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
            <CatgoryText>
              <Link
                className={`link ${pathname === "/category" ? "active" : ""}`}
                href="/category"
              >
                دسته‌بندی
              </Link>
            </CatgoryText>
          </CategoryTab>

          <HomeTab>
            <HomeText>
              <Link
                className={`link ${pathname === "/" ? "active" : ""}`}
                href="/"
              >
                خانه
              </Link>
            </HomeText>
          </HomeTab>
        </TabsPlace>

        <MiddleLine />

        <BebinimPlace>
          <BebinimIconAndText>
            <BebinimText>
              <Link href="#">ببینیم</Link>
            </BebinimText>
            <Link href="#">
              <BebinimIcon src="./images/BebinimIcon.svg" />
            </Link>
          </BebinimIconAndText>
        </BebinimPlace>
      </RightSection>
    </Container>
  );
}
