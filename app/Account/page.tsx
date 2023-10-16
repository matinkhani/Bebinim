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
import TransitionsModal from "./Modal";
import TransitionsEmailModal from "./EmailModal";

export default function Account() {
  const select = useSelector((state: RoutState) => state.Reducer);
  return (
    <Container>
      <Header />
      <UnderHeader />
      <AccountMain>
        <AccountText>
          <img src="./images/Account/profileIcon.svg" />
          حساب کاربری
        </AccountText>
        <InformationMain>
          <InformationContain>
            <NamePlace>
              <TransitionsModal />
              <NameandLastName>
                <p>نام و نام خانوادگی:</p>
                {select.Name ? <p>{select.Name}</p> : <p>ندارد.</p>}
              </NameandLastName>
            </NamePlace>
            <EmailPlace>
              <TransitionsEmailModal />
              <CheckEmail>
                <p>ایمیل:</p>
                {select.Email ? <p>{select.Email}</p> : <p>ندارد.</p>}
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
              <Result>
              {select.OneMonthAuto ? (
              <> {"."}اشتراک یک ماهه با تمدید خودکار  </>
            ) : select.OneMonth ? (
              <> {"."}اشتراک یک ماهه  </>
            ) : select.ThreeMonth ? (
              <> {"."}اشتراک سه ماهه  </>
            ) : select.SixMonth ? (
              <> {"."}اشتراک شش ماهه  </>
            ) : (
              <> {"."}اشتراک فعال ندارید </>
            )}
              </Result>
              <p> {":"} وضعیت اشتراک </p>
            </ResultText>
          </ResultContain>
        </ResultMain>
      </AccountMain>
    </Container>
  );
}
