"use client";
import React, { useState } from "react";
import {
  CodeDown,
  CodePlace,
  CodeTop,
  Container,
  DownContainer,
  Input,
  InputPlace,
  Line,
  LoginBtn,
  MiddleContainer,
  NumInput,
  Numberr,
  SignInBtn,
  SignInBtnPlace,
  SignInForm,
  TextSignIn,
  TopContainer,
} from "../Styled Components/signin";
import Link from "next/link";
import OtpInput from "react-otp-input";

export default function SingIn() {
  const [otp, setOtp] = useState<string>("");
  const [phone, setPhone] = useState<number>(0);
  const regex = /^[0-9۰-۹\b]+$/;

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
                />
              </NumInput>
            </InputPlace>
            <CodePlace>
              <CodeTop>کد فعالسازی را وارد کنید</CodeTop>
              <CodeDown>
                <OtpInput
                  inputStyle={{
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    borderBottom: "2px solid white",
                    display: "flex",
                    color: "white",
                    width: 48,
                    fontSize: 30,
                  }}
                  value={otp}
                  onChange={setOtp}
                  inputType="tel"
                  renderSeparator={
                    <div
                      style={{ width: 20, backgroundColor: "transparent" }}
                    ></div>
                  }
                  renderInput={(props) => <input {...props} />}
                />
              </CodeDown>
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