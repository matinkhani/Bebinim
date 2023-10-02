"use client";
import React from "react";
import {
  AmountPayable,
  Bank,
  BankIconPlace,
  BankNamePlace,
  BanksPlace,
  BuyBtnPlace,
  BuyButton,
  BuyComplete,
  BuyPlace,
  BuySub,
  ChooseBank,
  Container,
  Discount,
  LastPrice,
  Line,
  MiddleLine,
  Month,
  Price,
  PriceNumber,
  PriceText,
  Tax,
} from "../Styled Components/buy";
import "animate.css";

export default function Buy() {
  const BanksData = [
    { url: "images/Buy/saman.svg", name: "بانک سامان" },
    { url: "images/Buy/ayande.svg", name: "بانک آینده" },
    { url: "images/Buy/maskan.svg", name: "بانک مسکن" },
    { url: "images/Buy/mellat.svg", name: "بانک ملت" },
    { url: "images/Buy/sepah.svg", name: "بانک سپه" },
  ];

  return (
    <Container>
      <BuyPlace>
        <BuyComplete>تکمیل خرید</BuyComplete>
        <BuySub className="animate__animated animate__slideInUp">
          <Month>یک ماهه </Month>
          <Price>
            <PriceNumber> ۱۱۹,۰۰۰ تومان</PriceNumber>
            <PriceText>قیمت:</PriceText>
          </Price>
          <Discount>
            <PriceNumber>۲۹,۰۰۰ تومان</PriceNumber>
            <PriceText>جمع تخفیف:</PriceText>
          </Discount>
          <Tax>
            <PriceNumber> ۸,۰۰۰ تومان</PriceNumber>
            <PriceText>مالیات بر ارزش افزوده:</PriceText>
          </Tax>
          <AmountPayable>
            <PriceNumber
              style={{ color: "rgba(181, 82, 83, 1)", fontWeight: 700 }}
            >
              ۹۸,۰۰۰ تومان
            </PriceNumber>
            <PriceText>مبلغ قابل پرداخت:</PriceText>
          </AmountPayable>
          <MiddleLine>
            <Line />
          </MiddleLine>
          <ChooseBank>انتخاب بانک</ChooseBank>
          <BanksPlace>
            {BanksData.map((item, index) => {
              return (
                <Bank key={index}>
                  <BankIconPlace>
                    <img src={item.url} />
                  </BankIconPlace>
                  <BankNamePlace>{item.name}</BankNamePlace>
                </Bank>
              );
            })}
          </BanksPlace>
          <LastPrice>۹۸,۰۰۰ تومان</LastPrice>
          <BuyBtnPlace>
            <BuyButton>ادامه و پرداخت</BuyButton>
          </BuyBtnPlace>
        </BuySub>
      </BuyPlace>
    </Container>
  );
}
