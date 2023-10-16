"use client";
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { RoutState } from "../Redux/store";
import { CreateAccount, GetNumber } from "../Redux/createslice";

export default function SingIn() {
  const dispatch = useDispatch();
  const select = useSelector((state: RoutState) => state.Reducer);
  const [otp, setOtp] = useState<string>("");
  const regex = /^[0-9۰-۹\b]+$/;
  const [checkInputs, setcheckInputs] = useState<boolean>(false);
  const ConfirmLogin = () => {
    dispatch(CreateAccount(true));
  };

  useEffect(() => {
    if (
      select.PhoneNumber.length < 10 &&
      otp.length < 4 &&
      select.PhoneNumber.slice(0, 1) !== "9"
    ) {
      setcheckInputs(false);
    } else {
      if (
        select.PhoneNumber.length >= 10 &&
        otp.length >= 4 &&
        select.PhoneNumber.slice(0, 1) === "9"
      ) {
        setcheckInputs(true);
      } else {
        setcheckInputs(false);
      }
    }
  }, [select.PhoneNumber, otp]);

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
                  onChange={(e) => {
                    if (e.target.value === "" || regex.test(e.target.value)) {
                      dispatch(GetNumber(e.target.value));
                    }
                  }}
                  value={select.PhoneNumber === "0" ? "" : select.PhoneNumber}
                  maxLength={10}
                  placeholder="* * * * * * * * *"
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
              {checkInputs ? (
                <>
                  <Link href="/Account">
                    {" "}
                    <SignInBtn onClick={ConfirmLogin}>ثبت نام</SignInBtn>
                  </Link>
                </>
              ) : (
                <>
                  <SignInBtn
                    onClick={() => {
                      alert(
                        "لطفا شماره تلفن و کد فعالسازی را درست وارد نمایید "
                      );
                    }}
                  >
                    ثبت نام
                  </SignInBtn>
                </>
              )}
            </SignInBtnPlace>
          </SignInForm>
        </DownContainer>
      </MiddleContainer>
    </Container>
  );
}
