"use client";
import React from "react";

import { SavedContainer, SavedText, SearchMain } from "../Styled Components/saved";
import { useRouter } from "next/navigation";

import Savedheader from "./saved-header";

export default function Search() {
  const route = useRouter();
  return (
    <SavedContainer>
      <Savedheader />
      <SearchMain>
        <SavedText> {"."}فیلم یا سریال نشان شده‌ای ندارید  </SavedText>
      </SearchMain>
    </SavedContainer>
  );
}
