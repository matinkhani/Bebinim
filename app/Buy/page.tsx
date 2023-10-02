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

export default function Buy() {
  return (
    <Container>
      <BuyPlace>
        <BuyComplete>تکمیل خرید</BuyComplete>
        <BuySub>
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
              ۸۹‍,۰۰۰ تومان
            </PriceNumber>
            <PriceText>مبلغ قابل پرداخت:</PriceText>
          </AmountPayable>
          <MiddleLine>
            <Line />
          </MiddleLine>
          <ChooseBank>انتخاب بانک</ChooseBank>
          <BanksPlace>
            <Bank>
              {" "}
              <BankIconPlace>
                {" "}
                <img src="./images/Buy/saman.svg" />{" "}
              </BankIconPlace>{" "}
              <BankNamePlace>بانک سامان</BankNamePlace>{" "}
            </Bank>
            <Bank>
              {" "}
              <BankIconPlace>
                {" "}
                <img src="./images/Buy/ayande.svg" />{" "}
              </BankIconPlace>{" "}
              <BankNamePlace>بانک آینده</BankNamePlace>{" "}
            </Bank>
            <Bank>
              {" "}
              <BankIconPlace>
                {" "}
                <img src="./images/Buy/maskan.svg" />{" "}
              </BankIconPlace>{" "}
              <BankNamePlace>بانک مسکن</BankNamePlace>{" "}
            </Bank>
            <Bank>
              {" "}
              <BankIconPlace>
                {" "}
                <img src="./images/Buy/mellat.svg" />{" "}
              </BankIconPlace>{" "}
              <BankNamePlace>بانک ملت</BankNamePlace>{" "}
            </Bank>
            <Bank>
              {" "}
              <BankIconPlace>
                {" "}
                <img src="./images/Buy/sepah.svg" />{" "}
              </BankIconPlace>{" "}
              <BankNamePlace>بانک سپه</BankNamePlace>{" "}
            </Bank>
          </BanksPlace>
          <LastPrice>۸۹‍,۰۰۰ تومان</LastPrice>
          <BuyBtnPlace>
            <BuyButton>ادامه و پرداخت</BuyButton>
          </BuyBtnPlace>
        </BuySub>
      </BuyPlace>
    </Container>
  );
}
