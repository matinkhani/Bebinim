"use client";
import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { CreateAccount } from "../Redux/createslice";

export default function Login() {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState<number>(0);
  const [pass, setPass] = useState<string>("");
  const [CheckLink, setCheckLink] = useState<boolean>(false);
  const regex = /^[0-9۰-۹\b]+$/;
  const regex2 = /^[a-zA-Z0-9_.-]*$/;
  const ConfirmLogin = () => {
    dispatch(CreateAccount(true));
  };


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
                onChange={(e) => {
                  if (e.target.value === "" || regex.test(e.target.value )||(e.target.value.length ===10)) {
                    setPhone(+e.target.value);
                    setCheckLink(true)
                  }
                }}
                value={phone === 0 ? "" : phone}
                maxLength={10}
                placeholder="* * * * * * * * *"
              />
            </NumInput>
            <InputPass
              onChange={(e) => {
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
            {CheckLink === true ? (
              <>
                <Link href="/">
                  {" "}
                  <LoginBtn onClick={ConfirmLogin}>ورود</LoginBtn>
                </Link>
              </>
            ) : (
              <>
                <LoginBtn onClick={ConfirmLogin}>ورود</LoginBtn>
              </>
            )}
          </LoginButton>
          <DownText>
            <p style={{ cursor: "pointer" }}>رمز عبور خود را فراموش کرده‌ام</p>
          </DownText>
        </DownContainer>
      </MiddleContainer>
    </Container>
  );
}
