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
} from "../Styled Components/Header";

export default function Header() {
  return (
    <Container>
      <LeftSection>
        <SignLoginBtn>
          <ButtonsText>ورود / ثبت نام</ButtonsText>
        </SignLoginBtn>
        <BuyBtn>
          <ButtonsText>خرید اشتراک</ButtonsText>
        </BuyBtn>
        <SearchIcon src="./images/SearchIcon.png" />
      </LeftSection>

      <RightSection>
        <TabsPlace>
          <SerialTab>
            <FilmSerialImg src="./images/arrowdown.png" />
            سریال
          </SerialTab>

          <FilmTab>
            <FilmSerialImg src="./images/arrowdown.png" />
            فیلم
          </FilmTab>

          <CategoryTab>
            <p style={{ cursor: "pointer" }}>دسته‌بندی</p>
          </CategoryTab>

          <HomeTab>
            <p style={{ cursor: "pointer" }}>خانه</p>
          </HomeTab>
        </TabsPlace>

        <MiddleLine />

        <BebinimPlace>
          <BebinimIconAndText>
            <BebinimText>ببینیم</BebinimText>
            <BebinimIcon src="./images/BebinimIcon.png" />
          </BebinimIconAndText>
        </BebinimPlace>
      </RightSection>
    </Container>
  );
}
