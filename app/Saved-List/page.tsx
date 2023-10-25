"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RoutState } from "../Redux/store";
import Link from "next/link";
import Header from "../Header/Header";
import {
  ItemsSavedPlace,
  SaveContainer,
  SaveItems,
  SavedContainer,
  SavedDateFilm,
  SavedDetails,
  SavedHover,
  SavedHoverText,
  SavedItemsName,
  SavedLine,
  SavedLinkPlace,
  SavedMain,
  SavedName,
  SavedNameFilm,
  SavedText,
  SavedYear,
} from "../Styled Components/savedStyled";

export default function Search() {
  const select = useSelector((state: RoutState) => state.Reducer);

  return (
    <SavedContainer>
      <Header />
      <SavedMain>
        {select.SavedList.length === 0 ? (
          <SavedText> {"."}فیلم یا سریال نشان شده‌ای ندارید </SavedText>
        ) : (
          <>
            <SaveContainer>
              {select.SavedList.map((item, index) => {
                return (
                  <ItemsSavedPlace>
                    <SaveItems
                      style={{
                        backgroundImage: `url(${item.url})`,
                        backgroundSize: "cover",
                      }}
                    >
                      <SavedHover>
                        <Link href={`Search/${item.id}`}>
                          <SavedLinkPlace>
                            <SavedHoverText>
                              <SavedDetails>
                                <SavedNameFilm>{item.name}</SavedNameFilm>
                                <SavedDateFilm>
                                  <SavedYear>{item.year}</SavedYear>
                                  <SavedLine />
                                  <SavedName>{item.category}</SavedName>
                                </SavedDateFilm>
                              </SavedDetails>
                            </SavedHoverText>
                          </SavedLinkPlace>
                        </Link>
                      </SavedHover>
                    </SaveItems>
                    <SavedItemsName>{item.name}</SavedItemsName>
                  </ItemsSavedPlace>
                );
              })}
            </SaveContainer>
          </>
        )}
      </SavedMain>
    </SavedContainer>
  );
}
