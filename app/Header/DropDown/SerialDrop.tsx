import {
  BackContainer,
  Container,
  LeftTabs,
  RightTabs,
  SectionLeft,
  SectionRight,
  TextMovies,
} from "@/app/Styled Components/HeaderDropDown";
import Link from "next/link";
import React from "react";

export default function SerialDrop() {
  return (
    <BackContainer>
      <Container>
        <SectionLeft>
          <LeftTabs>
            <TextMovies>
              <Link href="#">جنگی</Link>
            </TextMovies>
          </LeftTabs>
          <LeftTabs>
            <TextMovies>
              <Link href="#">کمدی</Link>
            </TextMovies>
          </LeftTabs>
          <LeftTabs>
            <TextMovies>
              <Link href="#">ترسناک</Link>
            </TextMovies>
          </LeftTabs>
          <LeftTabs>
            <TextMovies>
              <Link href="#">تاریخی</Link>
            </TextMovies>
          </LeftTabs>
          <LeftTabs>
            <TextMovies>
              <Link href="#">درام</Link>
            </TextMovies>
          </LeftTabs>
          <LeftTabs>
            <TextMovies>
              <Link href="#">اجتماعی</Link>
            </TextMovies>
          </LeftTabs>
          <LeftTabs />
        </SectionLeft>
        <SectionRight>
          <RightTabs>
            <TextMovies>
              <Link href="#">معمایی</Link>
            </TextMovies>
          </RightTabs>
          <RightTabs>
            <TextMovies>
              <Link href="#">جنایی</Link>
            </TextMovies>
          </RightTabs>
          <RightTabs>
            <TextMovies>
              <Link href="#">عاشقانه</Link>
            </TextMovies>
          </RightTabs>
          <RightTabs>
            <TextMovies>
              <Link href="#">ماجراجویی</Link>
            </TextMovies>
          </RightTabs>
          <RightTabs>
            <TextMovies>
              <Link href="#">اکشن</Link>
            </TextMovies>
          </RightTabs>
          <RightTabs>
            <TextMovies>
              <Link href="#">وسترن</Link>
            </TextMovies>
          </RightTabs>
          <RightTabs>
            <TextMovies>
              <Link href="#">بیوگرافی</Link>
            </TextMovies>
          </RightTabs>
        </SectionRight>
      </Container>
    </BackContainer>
  );
}
