"use client";
import React from "react";
import {
  AmountPayable,
  Bank,
  BankIconPlace,
  BankImg,
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
} from "../../Styled Components/buy";
import "animate.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeOneMonth,
  ChangeOneMonthAuto,
  ChangeSixMonth,
  ChangeThreeMonth,
} from "@/app/Redux/createslice";
import { RoutState } from "@/app/Redux/store";

export default function Buy() {
  const BanksData = [
    { url: "../images/Buy/saman.svg", name: "بانک سامان" },
    { url: "../images/Buy/ayande.svg", name: "بانک آینده" },
    { url: "../images/Buy/maskan.svg", name: "بانک مسکن" },
    { url: "../images/Buy/mellat.svg", name: "بانک ملت" },
    { url: "../images/Buy/sepah.svg", name: "بانک سپه" },
  ];

  const dispatch = useDispatch();
  const select = useSelector((state: RoutState) => state.Reducer);

  const ChangeSubState = () => {
    if (select.OneMonthAuto) {
      dispatch(ChangeOneMonthAuto(false));
      dispatch(ChangeSixMonth(true));
    } else {
      if (select.ThreeMonth) {
        dispatch(ChangeThreeMonth(false));
        dispatch(ChangeSixMonth(true));
      } else {
        if (select.OneMonth) {
          dispatch(ChangeOneMonth(false));
          dispatch(ChangeSixMonth(true));
        } else {
          dispatch(ChangeSixMonth(true));
        }
      }
    }
  };

  return (
    <Container>
      <BuyPlace>
        <BuyComplete>تکمیل خرید</BuyComplete>
        <BuySub className="animate__animated animate__slideInUp">
          <Month>شش ماهه </Month>
          <Price>
            <PriceNumber> ۴۹۹,۰۰۰ تومان</PriceNumber>
            <PriceText>قیمت:</PriceText>
          </Price>
          <Discount>
            <PriceNumber>۰ تومان</PriceNumber>
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
              ۵۰۷,۰۰۰ تومان
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
                    <BankImg src={item.url} />
                  </BankIconPlace>
                  <BankNamePlace>{item.name}</BankNamePlace>
                </Bank>
              );
            })}
          </BanksPlace>
          <LastPrice>۵۰۷,۰۰۰ تومان</LastPrice>
          <BuyBtnPlace>
            <Link href="/Subscribe/Buy-six-month/Success">
              {" "}
              <BuyButton onClick={ChangeSubState}>ادامه و پرداخت</BuyButton>
            </Link>
          </BuyBtnPlace>
        </BuySub>
      </BuyPlace>
    </Container>
  );
}
