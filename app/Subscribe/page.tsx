"use client";
import React from "react";
import {
  ArrowIcon,
  AutoBottom,
  AutoBottomText,
  AutoPrice,
  AutoText,
  AutoTop,
  BuySubscribe1,
  BuySubscribe2,
  BuySubscribe3,
  BuySubscribe4,
  Container,
  LinkPlace,
  MiddleLine,
  Month1,
  Month2,
  Month3,
  Month4,
  More,
  OnceBottom,
  OnceBottomText,
  OnceMonthPrice,
  OnceMonthText,
  OncePrice,
  OncePriceBottom,
  OncePriceTop,
  OnceTop,
  Reduction,
  SixthPrice,
  SixthText,
  ThirdBottom,
  ThirdBottomText,
  ThirdMonthPrice,
  ThirdMonthText,
  ThirdPrice,
  ThirdPriceBottom,
  ThirdPriceTop,
  ThirdTop,
  TittleText,
} from "../Styled Components/subscribe";
import Link from "next/link";

export default function Subscribe() {
  return (
    <Container>
      <TittleText>اشتراک خود را انتخاب کنید</TittleText>
      <BuySubscribe1>
        <Month1>
          <AutoTop>
            <AutoPrice>
              <Link href="/Subscribe/Buy-one-month-auto">
                <LinkPlace>
                  <p style={{ cursor: "pointer" }}>۷۵‍‍‍,۰۰۰ تومان</p>
                  <img
                    style={{ cursor: "pointer" }}
                    src="./images/Subscribe/arrow.svg"
                  />
                </LinkPlace>
              </Link>
            </AutoPrice>
            <AutoText>یک ماهه با تمدید خودکار </AutoText>
          </AutoTop>
          <MiddleLine />
          <AutoBottom>
            <AutoBottomText>
              <img src="./images/Subscribe/arrow2.svg" />
              <More>بیشتر بدانید</More>
              {"."}
              مبلغ اشتراک هر ماه به صوت خودکار از حساب شما کسر خواهد شد
            </AutoBottomText>
          </AutoBottom>
        </Month1>
      </BuySubscribe1>
      <BuySubscribe2>
        <Month2>
          <OnceMonthPrice>
            <Link href="/Subscribe/Buy-one-month">
              <ArrowIcon>
                <img
                  style={{ height: 24, width: 24 }}
                  src="./images/Subscribe/arrow.svg"
                />
              </ArrowIcon>
            </Link>
            <OncePrice>
              <OncePriceTop>
                ۱۱۹‍,۰۰۰ تومان
                <Reduction />
              </OncePriceTop>
              <OncePriceBottom> ۸۹‍,۰۰۰ تومان </OncePriceBottom>
            </OncePrice>
          </OnceMonthPrice>
          <OnceMonthText>
            <OnceTop>یک ماهه </OnceTop>
            <OnceBottom>
              <OnceBottomText>۲۵ % تخفیف ویژه خرید اولی ها</OnceBottomText>
            </OnceBottom>
          </OnceMonthText>
        </Month2>
      </BuySubscribe2>
      <BuySubscribe3>
        <Month3>
          <ThirdMonthPrice>
            <Link href="/Subscribe/Buy-three-month">
              <ArrowIcon>
                <img
                  style={{ height: 24, width: 24 }}
                  src="./images/Subscribe/arrow.svg"
                />
              </ArrowIcon>
            </Link>
            <ThirdPrice>
              <ThirdPriceTop>
                ۳۴۹,۰۰۰ تومان
                <Reduction />
              </ThirdPriceTop>
              <ThirdPriceBottom> ۲۴۹,۰۰۰ تومان</ThirdPriceBottom>
            </ThirdPrice>
          </ThirdMonthPrice>
          <ThirdMonthText>
            <ThirdTop>سه ماهه </ThirdTop>
            <ThirdBottom>
              <ThirdBottomText>۳۰ % تخفیف ویژه خرید اولی ها</ThirdBottomText>
            </ThirdBottom>
          </ThirdMonthText>
        </Month3>
      </BuySubscribe3>
      <BuySubscribe4>
        <Month4>
          <SixthPrice>
            ۴۹۹,۰۰۰ تومان
            <Link href="/Subscribe/Buy-six-month">
              <img
                style={{ height: 24, width: 24 }}
                src="./images/Subscribe/arrow.svg"
              />
            </Link>
          </SixthPrice>
          <SixthText>شش ماهه </SixthText>
        </Month4>
      </BuySubscribe4>
    </Container>
  );
}