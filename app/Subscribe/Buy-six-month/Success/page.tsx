"use client";
import React from "react";
import {
  Container,
  Date,
  LandingButton,
  LinkToProfile,
  LoginSection,
  MassageText,
  PlaceIcon,
  SuccessMain,
  SuccessText,
} from "../../../Styled Components/success";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RoutState } from "@/app/Redux/store";
import Image from "next/image";

export default function Success() {
  const select = useSelector((state: RoutState) => state.Reducer);

  return (
    <Container>
      <SuccessMain className="animate__animated animate__slideInUp">
        <PlaceIcon>
          <Image
            height={128}
            width={128}
            alt="success"
            src="../../images/Success/tick.svg"
          />
        </PlaceIcon>
        <SuccessText>
          اشتراک شش ماهه شما از تاریخ
          <Date> {"۱۴۰۲,۰۷,۱۰"} </Date>
          با موفقیت فعال شد{"."}
        </SuccessText>
        <MassageText>
          {"."}وضعیت اشتراکتان را می‌توانید از طریق پنل کاربری پیگیری کنید
        </MassageText>
        <LoginSection>
          <LinkToProfile>
            {select.CheckLogin ? (
              <>
                <Link
                  style={{ height: "100%", width: "100%", display: "flex" }}
                  href="/Account"
                >
                  <Image
                    height={24}
                    width={24}
                    alt="user"
                    src="../../images/Success/user.svg"
                  />
                  ورود به حساب کاربری
                </Link>
              </>
            ) : (
              <>
                <Link
                  style={{ height: "100%", width: "100%", display: "flex" }}
                  href="/SignIn"
                >
                  <Image
                    height={24}
                    width={24}
                    alt="user"
                    src="../../images/Success/user.svg"
                  />
                  ورود به حساب کاربری
                </Link>
              </>
            )}
          </LinkToProfile>
        </LoginSection>
        <Link style={{ display: "flex", gap: 4 }} href="/">
          <LandingButton>
            <LinkToProfile>
              <Image
                height={24}
                width={24}
                alt="arrow"
                src="../../images/Success/arrowleft.svg"
              />
              بازکشت به صفحه اصلی
            </LinkToProfile>
          </LandingButton>
        </Link>
      </SuccessMain>
    </Container>
  );
}
