"use client";
import React from "react";

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

export default function Search() {
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
              <Input placeholder="فیلم، سریال، بازیگر و ژانر" />
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
          <img src="./images/Search/searchstatus.svg" />
          عنوان فیلم، سریال یا بازیگر مورد نظر خود را
          <br /> جستجو کنید و یا از طریق فیلترهای موجود
          <br /> {"."}فیلم و سریال مورد نظر خود را پیدا کنید
        </SearchItem>
      </SearchMain>
    </SearchContainer>
  );
}
