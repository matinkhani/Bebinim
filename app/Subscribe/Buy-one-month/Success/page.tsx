"use client";
import React from "react";
import {
  Container,
  Date,
  LandingButton,
  LoginSection,
  MassageText,
  PlaceIcon,
  SuccessMain,
  SuccessText,
} from "../../../Styled Components/success";

export default function Success() {
  return (
    <Container>
      <SuccessMain className="animate__animated animate__slideInUp">
        <PlaceIcon>
          <img src="../../images/Success/tick.svg" />
        </PlaceIcon>
        <SuccessText>
          اشتراک یک ماهه شما از تاریخ
          <Date> {"۱۴۰۲,۰۷,۱۰"} </Date>
          با موفقیت فعال شد{"."}
        </SuccessText>
        <MassageText>
          {"."}وضعیت اشتراکتان را می‌توانید از طریق پنل کاربری پیگیری کنید
        </MassageText>
        <LoginSection>
          <img src="../../images/Success/user.svg" />
          ورود به حساب کاربری
        </LoginSection>
        <LandingButton>
          <img src="../../images/Success/arrowleft.svg" />
          بازکشت به صفحه اصلی
        </LandingButton>
      </SuccessMain>
    </Container>
  );
}
