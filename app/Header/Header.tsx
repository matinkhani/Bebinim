import React from "react";
import {
  BebinimIcon,
  BebinimIconAndText,
  BebinimText,
  ButtonsText,
  BuyBtn,
  Container,
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
  UnderContainer,
  ContainerResponsive,
  SearchSection,
  BebinimSection,
  MenuSection,
} from "../Styled Components/Header";
import { useState } from "react";
import FimlDrop from "./DropDown/FimlDrop";
import SerialDrop from "./DropDown/SerialDrop";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.css";
import "animate.css";
import { RoutState } from "../Redux/store";
import { useSelector } from "react-redux";
import {
  AccIconConatiner,
  AccImg,
  ConatinerAcc,
} from "../Styled Components/AccDropDown";
import AccountDrop from "./DropDown/AccountDrop";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import {
  ButtomSection,
  CatgIcon,
  CatgPlace,
  CatgText,
  DrawerContainer,
  Film,
  FilmCatgLast,
  FilmDown,
  FilmIcon,
  FilmPlace,
  FilmText,
  FilmTop,
  FilmsCatg,
  FilmsText,
  HomeeIcon,
  HomeePlace,
  HomeeText,
  Serial,
  SerialCatg,
  SerialCatgLast,
  SerialDown,
  SerialIcon,
  SerialPlace,
  SerialText,
  SerialTop,
  SerialsText,
  SubsIcon,
  SubsPlace,
  SubsText,
  TopSection,
} from "../Styled Components/HeaderDrawer";

export default function Header() {
  const [filmDropDown, setFilmDropDown] = useState<boolean>(false);
  const [serialDropDown, setSerialDropDown] = useState<boolean>(false);
  const [accDropDown, setAccDropDown] = useState<boolean>(false);

  const [filmArrow, setFilmArrow] = useState<boolean>(false);
  const [serialArrow, setSerialArrow] = useState<boolean>(false);
  const select = useSelector((state: RoutState) => state.Reducer);
  const pathname = usePathname();

  const responsive = useMediaQuery("(max-width: 630px)");

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [film, setFilm] = useState<boolean>(false);
  const [serial, setSerial] = useState<boolean>(false);

  return (
    <UnderContainer>
      {responsive ? (
        <>
          <ContainerResponsive
          // onClick={() => {
          //   if (openMenu) {
          //     setOpenMenu(false);
          //   }
          // }}
          >
            <SearchSection>
              <Link href="/Search">
                <SearchIcon
                  src="./images/SearchIcon.svg"
                  style={{ height: 30, width: 30 }}
                />
              </Link>
            </SearchSection>
            <BebinimSection>
              <BebinimIconAndText>
                <BebinimText style={{ fontSize: 28 }}>
                  <Link href="#">ببینیم</Link>
                </BebinimText>
                <Link href="#">
                  <BebinimIcon
                    style={{ height: 35, width: 35 }}
                    src="./images/BebinimIcon.svg"
                  />
                </Link>
              </BebinimIconAndText>
            </BebinimSection>
            <MenuSection>
              <img
                onClick={() => {
                  setOpenMenu(true);
                }}
                src="./images/menu.svg"
                style={{ height: 30, width: 30 }}
              />
            </MenuSection>

            {/* Drawer */}
            <Drawer
              sx={{
                "& .MuiPaper-root ": {
                  width: "67%",
                  backgroundColor: "#2b2b2b",
                },
              }}
              anchor="right"
              open={openMenu}
            >
              <DrawerContainer>
                <TopSection></TopSection>
                <ButtomSection>
                  <HomeePlace>
                    <HomeeText>خانه</HomeeText>
                    <HomeeIcon src="./images/Drawer/Home.svg" />
                  </HomeePlace>
                  <SubsPlace>
                    <SubsText>خرید اشتراک</SubsText>
                    <SubsIcon src="./images/Drawer/shoppingcart.svg" />
                  </SubsPlace>
                  <CatgPlace>
                    <CatgText>دسته‌بندی</CatgText>
                    <CatgIcon src="./images/Drawer/category.svg" />
                  </CatgPlace>
                  <FilmPlace
                    onClick={() => {
                      setFilm(!film);
                      setSerial(false);
                    }}
                    style={film ? { height: "50%" } : { height: "8%" }}
                  >
                    <FilmTop>
                      <img
                        style={
                          film
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
                        src="./images/arrowdown.svg"
                      />
                      <Film>
                        <FilmText>فیلم</FilmText>
                        <FilmIcon src="./images/Drawer/video.svg" />
                      </Film>
                    </FilmTop>
                    <FilmDown
                      style={film ? { display: "flex" } : { display: "none" }}
                    >
                      <FilmsCatg>
                        <FilmsText>معمایی</FilmsText>
                        <FilmsText>جنگی</FilmsText>
                      </FilmsCatg>
                      <FilmsCatg>
                        <FilmsText>جنایی</FilmsText>
                        <FilmsText>کمدی</FilmsText>
                      </FilmsCatg>
                      <FilmsCatg>
                        <FilmsText>عاشقانه</FilmsText>
                        <FilmsText>ترسناک</FilmsText>
                      </FilmsCatg>
                      <FilmsCatg>
                        <FilmsText>ماجراجویی</FilmsText>
                        <FilmsText>تاریخی</FilmsText>
                      </FilmsCatg>
                      <FilmsCatg>
                        <FilmsText>اکشن</FilmsText>
                        <FilmsText>درام</FilmsText>
                      </FilmsCatg>
                      <FilmsCatg>
                        <FilmsText>وسترن</FilmsText>
                        <FilmsText>اجتماعی</FilmsText>
                      </FilmsCatg>
                      <FilmCatgLast>
                        <FilmsText>بیوگرافی</FilmsText>
                      </FilmCatgLast>
                    </FilmDown>
                  </FilmPlace>
                  <SerialPlace
                    onClick={() => {
                      setSerial(!serial);
                      setFilm(false);
                    }}
                    style={serial ? { height: "50%" } : { height: "8%" }}
                  >
                    <SerialTop>
                      <img
                        style={
                          serial
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
                        src="./images/arrowdown.svg"
                      />
                      <Serial>
                        <SerialText>سریال</SerialText>
                        <SerialIcon src="./images/Drawer/monitor.svg" />
                      </Serial>
                    </SerialTop>
                    <SerialDown
                      style={serial ? { display: "flex" } : { display: "none" }}
                    >
                      <SerialCatg>
                        <SerialsText>معمایی</SerialsText>
                        <SerialsText>جنگی</SerialsText>
                      </SerialCatg>
                      <SerialCatg>
                        <SerialsText>جنایی</SerialsText>
                        <SerialsText>کمدی</SerialsText>
                      </SerialCatg>
                      <SerialCatg>
                        <SerialsText>عاشقانه</SerialsText>
                        <SerialsText>ترسناک</SerialsText>
                      </SerialCatg>
                      <SerialCatg>
                        <SerialsText>ماجراجویی</SerialsText>
                        <SerialsText>تاریخی</SerialsText>
                      </SerialCatg>
                      <SerialCatg>
                        <SerialsText>اکشن</SerialsText>
                        <SerialsText>درام</SerialsText>
                      </SerialCatg>
                      <SerialCatg>
                        <SerialsText>وسترن</SerialsText>
                        <SerialsText>اجتماعی</SerialsText>
                      </SerialCatg>
                      <SerialCatgLast>
                        <SerialsText>بیوگرافی</SerialsText>
                      </SerialCatgLast>
                    </SerialDown>
                  </SerialPlace>
                </ButtomSection>
              </DrawerContainer>
            </Drawer>
          </ContainerResponsive>
        </>
      ) : (
        <>
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
                    <AccImg src="./images/Account/profile.svg" />{" "}
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

                <DropDownSerial>
                  {serialDropDown && <SerialDrop />}
                </DropDownSerial>

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
                      className={`link ${
                        pathname === "/category" ? "active" : ""
                      }`}
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
        </>
      )}
    </UnderContainer>
  );
}
