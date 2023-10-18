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
import { CreateAccount, GetNumber, ShowNumber } from "../Redux/createslice";
import { RoutState } from "../Redux/store";

export default function Login() {
  const dispatch = useDispatch();
  const select = useSelector((state: RoutState) => state.Reducer);
  const [pass, setPass] = useState<string>("");
  const [checkInputs, setcheckInputs] = useState<boolean>(false);
  const regex = /^[0-9۰-۹\b]+$/;
  const regex2 = /^[a-zA-Z0-9_.-]*$/;
  const ConfirmLogin = () => {
    dispatch(CreateAccount(true));
    dispatch(ShowNumber(select.PhoneNumber));
    dispatch(GetNumber(""));
  };

  useEffect(() => {
    if (
      select.PhoneNumber.length < 10 &&
      pass.length < 8 &&
      select.PhoneNumber.slice(0, 1) !== "9"
    ) {
      setcheckInputs(false);
    } else {
      if (
        select.PhoneNumber.length >= 10 &&
        pass.length >= 8 &&
        select.PhoneNumber.slice(0, 1) === "9"
      ) {
        setcheckInputs(true);
      } else {
        setcheckInputs(false);
      }
    }
  }, [select.PhoneNumber, pass]);

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
                  if (e.target.value === "" || regex.test(e.target.value)) {
                    dispatch(GetNumber(e.target.value));
                  }
                }}
                value={select.PhoneNumber}
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
            {checkInputs ? (
              <>
                <Link
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  href="/"
                >
                  {" "}
                  <LoginBtn onClick={ConfirmLogin}>ورود</LoginBtn>
                </Link>
              </>
            ) : (
              <>
                <LoginBtn
                  onClick={() => {
                    alert("لطفا شماره تلفن و رمز عبور درست وارد نمایید");
                  }}
                >
                  ورود
                </LoginBtn>
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
