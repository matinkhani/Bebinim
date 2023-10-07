"use client";
import React, { useState } from "react";

import {
  CloseInput,
  FilterDrop,
  FilterPlace,
  Input,
  InputContainer,
  InputandSearch,
  SearchContainer,
  SearchIcons,
  SearchItem,
  SearchMain,
  SerachInputPlace,
} from "./search";
import Searchheader from "./search-header";
import { useRouter } from "next/navigation";
import AllMovies from "./array";
import {
  DateFilm,
  Details,
  FavoriteImg,
  Hover,
  HoverText,
  Line,
  LinkPlace,
  Name,
  NameFilm,
  Year,
} from "../Styled Components/favorites";

export default function Search() {
  const [userInput, setUserInput] = useState<string>("");
  const regex = /^[a-zA-Z آ-ی]*$/;

  const filteredData = AllMovies.filter((id) => {
    if (userInput === "") {
      return "";
    } else {
      return id.name.includes(userInput);
    }
  });

  const route = useRouter();
  return (
    <SearchContainer>
      <Searchheader />
      <SearchMain>
        <InputContainer>
          <SerachInputPlace>
            <CloseInput
              onClick={() => {
                route.back();
              }}
            >
              بستن
              <img
                style={{ height: 48, width: 48 }}
                src="./images/Search/close.svg"
              />
            </CloseInput>
            <InputandSearch>
              <Input
                onChange={(e) => {
                  if (e.target.value === "" || regex.test(e.target.value)) {
                    setUserInput(e.target.value);
                  }
                }}
                value={userInput}
                placeholder="فیلم، سریال، بازیگر و ژانر"
              />
              <SearchIcons>
                <img
                  style={{ height: 24, width: 24 }}
                  src="./images/Search/search.svg"
                />
              </SearchIcons>
            </InputandSearch>
          </SerachInputPlace>
          <FilterPlace>
            <FilterDrop>
              <img
                style={{ height: 16, width: 16 }}
                src="./images/Search/arrow.svg"
              />
              فیلتر کردن
            </FilterDrop>
          </FilterPlace>
        </InputContainer>

        <SearchItem>
          {userInput === "" ? (
            <div>
              <img src="./images/Search/searchstatus.svg" />
              عنوان فیلم، سریال یا بازیگر مورد نظر خود را
              <br /> جستجو کنید و یا از طریق فیلترهای موجود
              <br /> {"."}فیلم و سریال مورد نظر خود را پیدا کنید
            </div>
          ) : (
            <div>
              {filteredData.map((item, index) => {
                return (
                  <>
                    <div>{item.name}</div>
                  </>
                );
              })}
            </div>
          )}
        </SearchItem>
      </SearchMain>
    </SearchContainer>
  );
}
