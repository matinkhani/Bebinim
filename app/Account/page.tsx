"use client";
import React from "react";
import Header from "../Header/Header";
import {
  AccountMain,
  AccountText,
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
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Account() {
  const select = useSelector((state: RoutState) => state.Reducer);
  const Responsive = useMediaQuery("(max-width:480px)");
  return (
    <Container>
      <Header />
      <UnderHeader />
      <AccountMain>
        <AccountText>
          <img src="./images/Account/profileIcon.svg" />
          حساب کاربری
        </AccountText>

        {Responsive ? (
          <>
            {" "}
            <InformationMain>
              <InformationContain>
                <NamePlace>
                  <NameandLastName>
                    <p>نام و نام خانوادگی:</p>
                    {select.Name ? <p>{select.Name}</p> : <p>ندارد.</p>}
                  </NameandLastName>
                  <TransitionsModal />
                </NamePlace>
                <EmailPlace>
                  <CheckEmail>
                    <p>ایمیل:</p>
                    {select.Email ? <p>{select.Email}</p> : <p>ندارد.</p>}
                  </CheckEmail>
                  <TransitionsEmailModal />
                </EmailPlace>
                <PhoneNumberPlace>
                  <PhoneNumber>
                    <p>
                      {"+98"}
                      {select.ShowPhoneNumber}
                    </p>
                    <p> {":"} شماره تلفن همراه </p>
                  </PhoneNumber>
                </PhoneNumberPlace>
                <PasswordPlace>
                  <Password>تغییر رمز عبور</Password>
                </PasswordPlace>
              </InformationContain>
            </InformationMain>
          </>
        ) : (
          <>
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
                      {select.ShowPhoneNumber}
                    </p>
                    <p> {":"} شماره تلفن همراه </p>
                  </PhoneNumber>
                </PhoneNumberPlace>
                <PasswordPlace>
                  <Password>تغییر رمز عبور</Password>
                </PasswordPlace>
              </InformationContain>
            </InformationMain>
          </>
        )}

        <ResultMain>
          <ResultContain>
            <Link href="/Subscribe">
              <ResultBtn>خرید اشتراک</ResultBtn>
            </Link>
            <ResultText>
              <Result>
                {select.OneMonthAuto ? (
                  <> یک ماهه با تمدید خودکار </>
                ) : select.OneMonth ? (
                  <> یک ماهه </>
                ) : select.ThreeMonth ? (
                  <> سه ماهه </>
                ) : select.SixMonth ? (
                  <> شش ماهه </>
                ) : (
                  <> {"."}اشتراک فعال ندارید </>
                )}
              </Result>
              <p style={{ width: "45%" }}> {":"} وضعیت اشتراک </p>
            </ResultText>
          </ResultContain>
        </ResultMain>
      </AccountMain>
    </Container>
  );
}
