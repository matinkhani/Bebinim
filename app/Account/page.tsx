"use client";
import React from "react";
import Header from "../Header/Header";
import {
  AccountMain,
  AccountText,
  AddEmail,
  CheckEmail,
  Container,
  EditName,
  EmailPlace,
  InformationContain,
  InformationMain,
  NamePlace,
  NameandLastName,
  Password,
  PasswordPlace,
  PhoneNumber,
  PhoneNumberPlace,
  Result,
  ResultBtn,
  ResultContain,
  ResultMain,
  ResultText,
  UnderHeader,
} from "../Styled Components/Account";
import Link from "next/link";
import { RoutState } from "../Redux/store";
import { useSelector } from "react-redux";

export default function Account() {
  const select = useSelector((state: RoutState) => state.Reducer);
  return (
    <Container>
      <Header />
      <UnderHeader />
      <AccountMain>
        <AccountText>
          <img src="./images/Account/profile.svg" />
          حساب کاربری
        </AccountText>
        <InformationMain>
          <InformationContain>
            <NamePlace>
              <EditName>ویرایش</EditName>
              <NameandLastName>
                <p>نام و نام خانوادگی:</p>
                <p>امیرحسین امین مقدم</p>
              </NameandLastName>
            </NamePlace>
            <EmailPlace>
              <AddEmail>افزودن ایمیل</AddEmail>
              <CheckEmail>
                <p>ایمیل:</p>
                <p>ندارد.</p>
              </CheckEmail>
            </EmailPlace>
            <PhoneNumberPlace>
              <PhoneNumber>
                <p>
                  {"+98"}
                  {select.PhoneNumber}
                </p>
                <p> {":"} شماره تلفن همراه </p>
              </PhoneNumber>
            </PhoneNumberPlace>
            <PasswordPlace>
              <Password>تغییر رمز عبور</Password>
            </PasswordPlace>
          </InformationContain>
        </InformationMain>
        <ResultMain>
          <ResultContain>
            <Link href="/Subscribe">
              <ResultBtn>خرید اشتراک</ResultBtn>
            </Link>
            <ResultText>
              <Result>غیرفعال</Result>
              <p> {":"} وضعیت اشتراک جاری </p>
            </ResultText>
          </ResultContain>
        </ResultMain>
      </AccountMain>
    </Container>
  );
}
