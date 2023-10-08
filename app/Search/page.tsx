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
  Container,
  Items,
  Hover,
  HoverText,
  Line,
  Name,
  Year,
  DateFilm,
  Details,
  NameFilm,
  LinkPlace,
  ItemsPlace,
  ItemsName,
} from "../Styled Components/SearchFilter";
import Link from "next/link";

export default function Search() {
  const [userInput, setUserInput] = useState<string>("");
  const regex = /^[a-zA-Z آ-ی]*$/;

  const filteredData = AllMovies.filter((id) => {
    if (userInput === "") {
      return "";
    } else {
      return id.name.toLowerCase().includes(userInput);
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 160,
              }}
            >
              <img src="./images/Search/searchstatus.svg" />
              عنوان فیلم، سریال یا بازیگر مورد نظر خود را
              <br /> جستجو کنید و یا از طریق فیلترهای موجود
              <br /> {"."}فیلم و سریال مورد نظر خود را پیدا کنید
            </div>
          ) : (
            <Container>
              {filteredData.map((item, index) => {
                return (
                  <ItemsPlace>
                    <Items
                      style={{
                        backgroundImage: `url(${item.url})`,
                        backgroundSize: "cover",
                      }}
                    >
                      <Hover>
                        <Link href={`Search/${item.id}`}>
                        <LinkPlace>
                          <HoverText>
                            <Details>
                              <NameFilm>{item.name}</NameFilm>
                              <DateFilm>
                                <Year>{item.year}</Year>
                                <Line />
                                <Name>{item.category}</Name>
                              </DateFilm>
                            </Details>
                          </HoverText>
                        </LinkPlace>
                        </Link>
                      </Hover>
                    </Items>
                    <ItemsName>{item.name}</ItemsName>
                  </ItemsPlace>
                );
              })}
            </Container>
          )}
        </SearchItem>
      </SearchMain>
    </SearchContainer>
  );
}
