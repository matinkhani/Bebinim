"use client";
import React from "react";
import {
  AboutMovies,
  AboutPhoto,
  AboutText,
  AgeLimit,
  BackColor,
  Buttons,
  Container,
  Episodes,
  GradientDiv,
  GradientImg,
  LeftNumbers,
  LeftSection,
  LikesButton,
  MiddleLine,
  Numbers,
  Play,
  Rate,
  ResAbout,
  RightNumbers,
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
  DeleteItem,
  SavedTypes,
} from "@/app/Redux/createslice";
import { useDispatch, useSelector } from "react-redux";
import { RoutState } from "@/app/Redux/store";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Carousel,
  CarouselContainer,
  FavoriteImg,
} from "@/app/Styled Components/favorites";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../favorites.css";
import { Navigation } from "swiper/modules";

export default function WatchMovie({ params }: { params: { id: number } }) {
  const Find: any = FavoritesArr.find((elem) => elem.id === +params.id);
  const dispatch = useDispatch();
  const select = useSelector((state: RoutState) => state.Reducer);

  const Responsive680 = useMediaQuery("(max-width:680px)");
  const Responsive1100 = useMediaQuery("(max-width:1100px)");

  const newList = () => {
    const isListed = select.SavedList.find((elem) => elem.id === +params.id);
    if (!isListed) {
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
      dispatch(AddToSavedList(items));
    } else {
      dispatch(DeleteItem(Find.id));
    }
  };

  return (
    <Container>
      {Responsive680 ? (
        <>
          <LeftSection style={{ backgroundImage: `url(${Find.bgImg})` }}>
            <GradientDiv>
              <BackColor>
                <Play src="../images/play.svg" />
              </BackColor>
            </GradientDiv>
          </LeftSection>

          <RightSection>
            <AboutMovies>
              <ResAbout>
                <Buttons>
                  <LikesButton>
                    <img src="../images/Watch/dislike.svg" />
                    <img src="../images/Watch/like.svg" />
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={newList}
                      src={
                        select.SavedList.find((elem) => elem.id === +params.id)
                          ? Find.saved
                          : Find.save
                      }
                    />
                  </LikesButton>
                </Buttons>
                <Tittle>{Find.name}</Tittle>
              </ResAbout>
              <Numbers>
                <LeftNumbers>
                  <Rate>
                    {Find.rate}
                    {" :"} علاقه‌مندی
                    <img
                      style={{ height: "18px", width: "18px" }}
                      src="../images/Watch/love.svg"
                    />
                  </Rate>
                  <Time>
                    {Find.time}
                    {" :"} مدت زمان
                    <img
                      style={{ height: "18px", width: "18px" }}
                      src="../images/timer.svg"
                    />
                  </Time>
                </LeftNumbers>
                <RightNumbers>
                  <Year>
                    {Find.year} {":"} سال انتشار{" "}
                    <img
                      style={{ height: "18px", width: "18px" }}
                      src="../images/calendar.svg"
                    />{" "}
                  </Year>
                  <AgeLimit>
                    {Find.age}
                    {" :"} محدودیت سنی
                    <img
                      style={{ height: "18px", width: "18px" }}
                      src="../images/lock.svg"
                    />
                  </AgeLimit>
                </RightNumbers>
              </Numbers>
              <AboutText>
                {" "}
                خلاصه {": "}
                <br />
                {Find.description}{" "}
              </AboutText>
            </AboutMovies>

            <MiddleLine />
            <AboutPhoto>
              <Episodes>تصاویر</Episodes>
              <Sekans>
                <CarouselContainer>
                  <Carousel>
                    <Swiper
                      navigation={true}
                      slidesPerView={1}
                      speed={900}
                      modules={[Navigation]}
                      className="mySwiper"
                      slidesPerGroup={1}
                      loop={true}
                    >
                      <SwiperSlide>
                        <FavoriteImg
                          style={{ height: 200, width: 250 }}
                          src={Find.image1}
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <FavoriteImg
                          style={{ height: 200, width: 250 }}
                          src={Find.image2}
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <FavoriteImg
                          style={{ height: 200, width: 250 }}
                          src={Find.image3}
                        />
                      </SwiperSlide>
                    </Swiper>
                  </Carousel>
                </CarouselContainer>
              </Sekans>
            </AboutPhoto>
          </RightSection>
        </>
      ) : Responsive1100 ? (
        <>
          <LeftSection style={{ backgroundImage: `url(${Find.bgImg})` }}>
            <GradientDiv>
              <BackColor>
                <Play src="../images/play.svg" />
              </BackColor>
            </GradientDiv>
          </LeftSection>

          <RightSection>
            <AboutMovies>
              <ResAbout>
                <Buttons>
                  <LikesButton>
                    <img src="../images/Watch/dislike.svg" />
                    <img src="../images/Watch/like.svg" />
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={newList}
                      src={
                        select.SavedList.find((elem) => elem.id === +params.id)
                          ? Find.saved
                          : Find.save
                      }
                    />
                  </LikesButton>
                </Buttons>
                <Tittle>{Find.name}</Tittle>
              </ResAbout>
              <Numbers>
                <LeftNumbers>
                  <Rate>
                    {Find.rate}
                    {" :"} علاقه‌مندی
                    <img
                      style={{ height: "18px", width: "18px" }}
                      src="../images/Watch/love.svg"
                    />
                  </Rate>
                  <Time>
                    {Find.time}
                    {" :"} مدت زمان
                    <img
                      style={{ height: "18px", width: "18px" }}
                      src="../images/timer.svg"
                    />
                  </Time>
                </LeftNumbers>
                <RightNumbers>
                  <Year>
                    {Find.year} {":"} سال انتشار{" "}
                    <img
                      style={{ height: "18px", width: "18px" }}
                      src="../images/calendar.svg"
                    />{" "}
                  </Year>
                  <AgeLimit>
                    {Find.age}
                    {" :"} محدودیت سنی
                    <img
                      style={{ height: "18px", width: "18px" }}
                      src="../images/lock.svg"
                    />
                  </AgeLimit>
                </RightNumbers>
              </Numbers>
              <AboutText>
                {" "}
                خلاصه {": "}
                <br />
                {Find.description}{" "}
              </AboutText>
            </AboutMovies>

            <MiddleLine />
            <AboutPhoto>
              <Episodes>تصاویر</Episodes>
              <Sekans>
                <CarouselContainer>
                  <Carousel>
                    <Swiper
                      navigation={true}
                      slidesPerView={2}
                      speed={900}
                      modules={[Navigation]}
                      className="mySwiper"
                      slidesPerGroup={1}
                    >
                      <SwiperSlide>
                        <FavoriteImg
                          style={{ height: 200, width: 250 }}
                          src={Find.image1}
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <FavoriteImg
                          style={{ height: 200, width: 250 }}
                          src={Find.image2}
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <FavoriteImg
                          style={{ height: 200, width: 250 }}
                          src={Find.image3}
                        />
                      </SwiperSlide>
                    </Swiper>
                  </Carousel>
                </CarouselContainer>
              </Sekans>
            </AboutPhoto>
          </RightSection>
        </>
      ) : (
        <>
          <LeftSection style={{ backgroundImage: `url(${Find.bgImg})` }}>
            <GradientImg src="../images/Watch/gradient.svg" />
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
                    src={
                      select.SavedList.find((elem) => elem.id === +params.id)
                        ? Find.saved
                        : Find.save
                    }
                  />
                </LikesButton>
                <WatchButton>تماشا کردن</WatchButton>
              </Buttons>
            </AboutMovies>

            <MiddleLine />
            <AboutPhoto>
              <Episodes>تصاویر</Episodes>
              <Sekans>
                <SekansPhoto
                  style={{ backgroundImage: `url(${Find.image1})` }}
                />
                <SekansPhoto
                  style={{ backgroundImage: `url(${Find.image2})` }}
                />
                <SekansPhoto
                  style={{ backgroundImage: `url(${Find.image3})` }}
                />
              </Sekans>
            </AboutPhoto>
          </RightSection>
        </>
      )}
    </Container>
  );
}
