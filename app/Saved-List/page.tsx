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
import { Container, DateFilm, Details, Hover, HoverText, Items, ItemsName, ItemsPlace, Line, LinkPlace, Name, NameFilm, Year } from "../Styled Components/SearchFilter";
import Link from "next/link";

export default function Search() {
  const route = useRouter();
  const select = useSelector((state: RoutState) => state.Reducer);
  console.log(select.SavedList);

  return (
    <SavedContainer>
      <Savedheader />
      <SearchMain>
        {select.SaveCheck === false ? (
          <SavedText> {"."}فیلم یا سریال نشان شده‌ای ندارید </SavedText>
        ) : (
          <>
          <Container>
            {select.SavedList.map((item, index) => {
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
            </Container></>
        )}
      </SearchMain>
    </SavedContainer>
  );
}
