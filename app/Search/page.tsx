"use client";
import React, { useState } from "react";
import {
  CloseInput,
  DivSearch,
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
import Header from "../Header/Header";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

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

  const Responsive480 = useMediaQuery("(max-width:480px)");
  const Responsive630 = useMediaQuery("(max-width:630px)");
  const Responsive850 = useMediaQuery("(max-width:850px)");
  const Responsive1100 = useMediaQuery("(max-width:1100px)");
  const Responsive1280 = useMediaQuery("(max-width:1280px)");

  const route = useRouter();
  return (
    <SearchContainer>
      <Header />
      <SearchMain>
        <InputContainer>
          <SerachInputPlace>
            <CloseInput
              onClick={() => {
                route.back();
              }}
            >
              بستن
              <Image
                alt="close icon"
                height={48}
                width={48}
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
                <Image
                  alt="search icon"
                  height={24}
                  width={24}
                  src="./images/Search/search.svg"
                />
              </SearchIcons>
            </InputandSearch>
          </SerachInputPlace>
          <FilterPlace>
            <FilterDrop>
              <Image
                alt="arrow"
                height={16}
                width={16}
                src="./images/Search/arrow.svg"
              />
              فیلتر کردن
            </FilterDrop>
          </FilterPlace>
        </InputContainer>

        <SearchItem>
          {userInput === "" ? (
            <DivSearch>
              <Image
                alt="search status"
                height={
                  Responsive480
                    ? 50
                    : Responsive630
                    ? 85
                    : Responsive850
                    ? 80
                    : Responsive1100
                    ? 90
                    : Responsive1280
                    ? 85
                    : 85
                }
                width={
                  Responsive480
                    ? 50
                    : Responsive630
                    ? 85
                    : Responsive850
                    ? 80
                    : Responsive1100
                    ? 90
                    : Responsive1280
                    ? 85
                    : 85
                }
                src="./images/Search/searchstatus.svg"
              />
              عنوان فیلم، سریال یا بازیگر مورد نظر خود را
              <br /> جستجو کنید و یا از طریق فیلترهای موجود
              <br /> {"."}فیلم و سریال مورد نظر خود را پیدا کنید
            </DivSearch>
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
