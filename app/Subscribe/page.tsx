"use client";
import React from "react";
import {
  BuySubscribe1,
  BuySubscribe2,
  BuySubscribe3,
  BuySubscribe4,
  Container,
  Month1,
  Month2,
  Month3,
  Month4,
  TittleText,
} from "../Styled Components/subscribe";

export default function Subscribe() {
  return (
    <Container>
      <TittleText>اشتراک خود را انتخاب کنید</TittleText>
      <BuySubscribe1>
        <Month1></Month1>
      </BuySubscribe1>
      <BuySubscribe2>
        <Month2></Month2>
      </BuySubscribe2>
      <BuySubscribe3>
        <Month3></Month3>
      </BuySubscribe3>
      <BuySubscribe4>
        <Month4></Month4>
      </BuySubscribe4>
    </Container>
  );
}
