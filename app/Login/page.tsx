"use client";
import React from "react";
import {
  Container,
  DownContainer,
  DownText,
  Input,
  InputPlace,
  LoginBtn,
  LoginButton,
  MiddleContainer,
  SignIn,
  TopContainer,
  TopText,
} from "../Styled Components/login";

export default function Login() {
  return (
    <Container>
      <MiddleContainer>
        <TopContainer>
          <SignIn>
            ثبت نام
            <img src="./images/Login/login.svg" />
          </SignIn>
        </TopContainer>
        <DownContainer>
          <TopText>ورود از طریق شماره تلفن همراه</TopText>
          <InputPlace>
            <Input />
            <Input />
          </InputPlace>
          <LoginButton>
            <LoginBtn>ورود</LoginBtn>
          </LoginButton>
          <DownText>رمز عبور خود را فراموش کرده‌ام</DownText>
        </DownContainer>
      </MiddleContainer>
    </Container>
  );
}
