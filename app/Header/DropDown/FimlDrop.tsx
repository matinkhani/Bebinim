import {
  BackContainer,
  Container,
  LeftTabs,
  RightTabs,
  SectionLeft,
  SectionRight,
  TextMovies,
} from "@/app/Styled Components/HeaderDropDown";
import React from "react";

export default function FimlDrop() {
  return (
    <BackContainer>
      <Container>
        <SectionLeft>
          <LeftTabs>
            <TextMovies>جنگی</TextMovies>
          </LeftTabs>
          <LeftTabs>
            <TextMovies>کمدی</TextMovies>
          </LeftTabs>
          <LeftTabs>
            <TextMovies>ترسناک</TextMovies>
          </LeftTabs>
          <LeftTabs>
            <TextMovies>تاریخی</TextMovies>
          </LeftTabs>
          <LeftTabs>
            <TextMovies>درام</TextMovies>
          </LeftTabs>
          <LeftTabs>
            <TextMovies>اجتماعی</TextMovies>
          </LeftTabs>
          <LeftTabs />
        </SectionLeft>
        <SectionRight>
          <RightTabs>
            <TextMovies>معمایی</TextMovies>
          </RightTabs>
          <RightTabs>
            <TextMovies>جنایی</TextMovies>
          </RightTabs>
          <RightTabs>
            <TextMovies>عاشقانه</TextMovies>
          </RightTabs>
          <RightTabs>
            <TextMovies>ماجراجویی</TextMovies>
          </RightTabs>
          <RightTabs>
            <TextMovies>اکشن</TextMovies>
          </RightTabs>
          <RightTabs>
            <TextMovies>وسترن</TextMovies>
          </RightTabs>
          <RightTabs>
            <TextMovies>بیوگرافی</TextMovies>
          </RightTabs>
        </SectionRight>
      </Container>
    </BackContainer>
  );
}
