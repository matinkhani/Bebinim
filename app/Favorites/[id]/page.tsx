"use client";
import React from "react";
import {
  AboutMovies,
  AboutPhoto,
  AboutText,
  AgeLimit,
  Buttons,
  Container,
  Episodes,
  LeftSection,
  LikesButton,
  MiddleLine,
  Numbers,
  Rate,
  RightSection,
  Sekans,
  SekansPhoto,
  Time,
  Tittle,
  WatchButton,
  Year,
} from "../../Styled Components/watchMovie";
import FavoritesArr from "../array";
import {
  AddToSavedList,
  CheckSave,
  DeleteItem,
  SavedTypes,
} from "@/app/Redux/createslice";
import { useDispatch, useSelector } from "react-redux";
import { RoutState } from "@/app/Redux/store";

export default function WatchMovie({ params }: { params: { id: number } }) {
  const Find: any = FavoritesArr.find((elem) => elem.id === +params.id);
  const dispatch = useDispatch();
  const select = useSelector((state: RoutState) => state.Reducer);

  // console.log(params.id);

  const newList = () => {
    dispatch(CheckSave(!select.SaveCheck));
    if (select.SaveCheck === false) {
      let items: SavedTypes = {
        id: Find.id,
        url: Find.url,
        name: Find.name,
        category: Find.category,
        year: Find.year,
        image1: Find.image1,
        image2: Find.image2,
        image3: Find.image3,
        age: Find.age,
        time: Find.time,
        rate: Find.rate,
        bgImg: Find.bgImg,
        description: Find.description,
        saved: Find.saved,
        save: Find.save,
      };
      console.log(items);
      dispatch(AddToSavedList(items));
    } else {
      dispatch(DeleteItem(Find.id));
    }
  };

  return (
    <Container>
      <LeftSection style={{ backgroundImage: `url(${Find.bgImg})` }}>
        <img src="../images/Watch/gradient.svg" />
      </LeftSection>
      <RightSection>
        <AboutMovies>
          <Tittle>{Find.name}</Tittle>
          <Numbers>
            <Rate>
              {Find.rate}
              <img src="../images/Watch/love.svg" />
            </Rate>
            <Time>{Find.time}</Time>
            <Year>{Find.year} </Year>
            <AgeLimit>{Find.age}</AgeLimit>
          </Numbers>
          <AboutText>{Find.description}</AboutText>
          <Buttons>
            <LikesButton>
              <img src="../images/Watch/dislike.svg" />
              <img src="../images/Watch/like.svg" />
              <img
                style={{ cursor: "pointer" }}
                onClick={newList}
                src={select.SaveCheck ? Find.saved : Find.save}
              />
            </LikesButton>
            <WatchButton>تماشا کردن</WatchButton>
          </Buttons>
        </AboutMovies>

        <MiddleLine />
        <AboutPhoto>
          <Episodes>تصاویر</Episodes>
          <Sekans>
            <SekansPhoto style={{ backgroundImage: `url(${Find.image1})` }} />
            <SekansPhoto style={{ backgroundImage: `url(${Find.image2})` }} />
            <SekansPhoto style={{ backgroundImage: `url(${Find.image3})` }} />
          </Sekans>
        </AboutPhoto>
      </RightSection>
    </Container>
  );
}
