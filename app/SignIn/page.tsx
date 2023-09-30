"use client";
import React from "react";
import {
  CodeDown,
  CodePlace,
  CodeTop,
  Container,
  DownContainer,
  Input,
  InputPlace,
  LoginBtn,
  MiddleContainer,
  SignInBtn,
  SignInBtnPlace,
  SignInForm,
  TextSignIn,
  TopContainer,
} from "../Styled Components/signin";
import Link from "next/link";

export default function SingIn() {
  return (
    <Container>
      <MiddleContainer>
        <TopContainer>
        <Link href="/Login">
        <LoginBtn>ورود</LoginBtn>
        </Link>
        </TopContainer>
        <DownContainer>
          <SignInForm>
            <TextSignIn>ثبت نام با شماره تلفن همراه</TextSignIn>
            <InputPlace>
              <Input></Input>
            </InputPlace>
            <CodePlace>
              <CodeTop>کد فعالسازی را وارد کنید</CodeTop>
              <CodeDown></CodeDown>
            </CodePlace>
            <SignInBtnPlace>
              <SignInBtn>ثبت نام</SignInBtn>
            </SignInBtnPlace>
          </SignInForm>
        </DownContainer>
      </MiddleContainer>
    </Container>
  );
}
