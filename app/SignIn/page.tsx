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
  LoginBtn,
  MiddleContainer,
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
