"use client";
import React from "react";
import { Container, Text } from "./Styled Components/StyledLoading";

export default function Loading() {
  return (
    <Container>
      <Text>  {"..."} لطفاً منتظر بمانید   </Text>
    </Container>
  );
}
