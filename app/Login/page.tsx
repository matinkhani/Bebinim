"use client";
import React, { useState } from "react";
import {
  Container,
  DownContainer,
  DownText,
  Input,
  InputPass,
  InputPlace,
  Line,
  LoginBtn,
  LoginButton,
  MiddleContainer,
  NumInput,
  Numberr,
  SignIn,
  TopContainer,
  TopText,
} from "../Styled Components/login";
import Link from "next/link";

export default function Login() {
  const [phone, setPhone] = useState<number>(0);
  const [pass, setPass] = useState<string>("");
  const regex = /^[0-9۰-۹\b]+$/;
  const regex2 = /^[a-zA-Z0-9_.-]*$/;

  return (
    <Container>
      <MiddleContainer>
        <TopContainer>
          <Link href="/SignIn">
            <SignIn>
              ثبت نام
              <img src="./images/Login/login.svg" />
            </SignIn>
          </Link>
        </TopContainer>
        <DownContainer>
          <TopText>ورود از طریق شماره تلفن همراه</TopText>
          <InputPlace>
            <NumInput>
              <Numberr>
                +۹۸
                <Line />
              </Numberr>
              <Input
                onChange={(e: any) => {
                  if (e.target.value === "" || regex.test(e.target.value)) {
                    setPhone(e.target.value);
                  }
                }}
                value={phone === 0 ? "" : phone}
                maxLength={10}
                placeholder="* * * * * * * * *"
              />
            </NumInput>
            <InputPass
              onChange={(e: any) => {
                if (e.target.value === "" || regex2.test(e.target.value)) {
                  setPass(e.target.value);
                }
              }}
              value={pass}
              maxLength={16}
              placeholder="رمز عبور"
              type="password"
              minLength={8}
              required
            />
          </InputPlace>
          <LoginButton>
            <LoginBtn>ورود</LoginBtn>
          </LoginButton>
          <DownText>
            <p style={{ cursor: "pointer" }}>رمز عبور خود را فراموش کرده‌ام</p>
          </DownText>
        </DownContainer>
      </MiddleContainer>
    </Container>
  );
}
