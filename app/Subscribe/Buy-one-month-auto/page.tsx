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
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

export default function Buy() {
  const BanksData = [
    { url: "/images/Buy/saman.webp", name: "بانک سامان" },
    { url: "/images/Buy/ayande.webp", name: "بانک آینده" },
    { url: "/images/Buy/maskan.webp", name: "بانک مسکن" },
    { url: "/images/Buy/mellat.webp", name: "بانک ملت" },
    { url: "/images/Buy/sepah.webp", name: "بانک سپه" },
  ];

  const dispatch = useDispatch();
  const select = useSelector((state: RoutState) => state.Reducer);
  const Responsive480 = useMediaQuery("(max-width:480px)");
  const Responsive630 = useMediaQuery("(max-width:630px)");
  const Responsive850 = useMediaQuery("(max-width:850px)");

  const ChangeSubState = () => {
    if (select.OneMonth) {
      dispatch(ChangeOneMonth(false));
      dispatch(ChangeOneMonthAuto(true));
    } else {
      if (select.ThreeMonth) {
        dispatch(ChangeThreeMonth(false));
        dispatch(ChangeOneMonthAuto(true));
      } else {
        if (select.SixMonth) {
          dispatch(ChangeSixMonth(false));
          dispatch(ChangeOneMonthAuto(true));
        } else {
          dispatch(ChangeOneMonthAuto(true));
        }
      }
    }
  };

  return (
    <Container>
      <BuyPlace>
        <BuyComplete>تکمیل خرید</BuyComplete>
        <BuySub className="animate__animated animate__slideInUp">
          <Month>یک ماهه با تمدید خودکار</Month>
          <Price>
            <PriceNumber> ۶۷,۰۰۰ تومان</PriceNumber>
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
              ۷۵,۰۰۰ تومان
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
                    <Image
                      alt="bank icon image"
                      height={130}
                      width={130}
                      src={item.url}
                      style={
                        Responsive480
                          ? { height: 55, width: 55 }
                          : Responsive630
                          ? { height: 61, width: 61 }
                          : Responsive850
                          ? { height: 75, width: 75 }
                          : {}
                      }
                    />
                  </BankIconPlace>
                  <BankNamePlace>{item.name}</BankNamePlace>
                </Bank>
              );
            })}
          </BanksPlace>
          <LastPrice>۷۵,۰۰۰ تومان</LastPrice>
          <BuyBtnPlace>
            <Link href="/Subscribe/Buy-one-month-auto/Success">
              {" "}
              <BuyButton onClick={ChangeSubState}>ادامه و پرداخت</BuyButton>
            </Link>
          </BuyBtnPlace>
        </BuySub>
      </BuyPlace>
    </Container>
  );
}
