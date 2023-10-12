"use client";
import React from "react";

import {
  SavedContainer,
  SavedText,
  SearchMain,
} from "../Styled Components/saved";
import { useRouter } from "next/navigation";

import Savedheader from "./saved-header";
import { useSelector } from "react-redux";
import { RoutState } from "../Redux/store";

export default function Search() {
  const route = useRouter();
  const select = useSelector((state: RoutState) => state.Reducer);

  return (
    <SavedContainer>
      <Savedheader />
      <SearchMain>
        {select.SavedList.length === 0 ? (
          <SavedText> {"."}فیلم یا سریال نشان شده‌ای ندارید </SavedText>
        ) : (
          <>
            {select.SavedList.map((item, index) => {
              return (
                <div
                  style={{
                    height: 80,
                    width: 80,
                    backgroundColor: "blue",
                    color: "white",
                  }}
                >
                  {item.name}
                </div>
              );
            })}
          </>
        )}
      </SearchMain>
    </SavedContainer>
  );
}
