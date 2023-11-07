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
  DisLike,
  Episodes,
  GradientDiv,
  LeftNumbers,
  LeftSection,
  Like,
  LikesButton,
  MiddleLine,
  Numbers,
  Rate,
  ResAbout,
  RightNumbers,
  RightSection,
  Saved,
  Sekans,
  Time,
  Tittle,
  WatchButton,
  Year,
} from "../../Styled Components/watchMovie";
import AnimationsArr from "../arrayAnimation";
import { useDispatch, useSelector } from "react-redux";
import { RoutState } from "@/app/Redux/store";
import {
  AddToSavedList,
  DeleteItem,
  SavedTypes,
} from "@/app/Redux/createslice";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Carousel2,
  CarouselContainer,
  FavoriteImg,
} from "@/app/Styled Components/animation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../Favorites/favorites.css";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function WatchMovie({ params }: { params: { id: number } }) {
  const Find: any = AnimationsArr.find((elem) => elem.id === +params.id);
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
      {Responsive1100 ? (
        <>
          <LeftSection style={{ backgroundImage: `url(${Find.bgImg})` }}>
            <GradientDiv>
              <BackColor>
                <Image
                  alt="play button"
                  height={50}
                  width={50}
                  src="../images/play.svg"
                />
              </BackColor>
            </GradientDiv>
          </LeftSection>

          <RightSection>
            <AboutMovies>
              <ResAbout>
                <Buttons>
                  <LikesButton>
                    <DisLike>
                      {" "}
                      <Image
                        alt="dislike button"
                        height={22}
                        width={22}
                        src="../images/Watch/dislike.svg"
                      />
                    </DisLike>
                    <Like>
                      <Image
                        alt="like button"
                        height={22}
                        width={22}
                        src="../images/Watch/like.svg"
                      />
                    </Like>
                    <Saved>
                      <Image
                        alt="save button"
                        height={22}
                        width={22}
                        style={{ cursor: "pointer" }}
                        onClick={newList}
                        src={
                          select.SavedList.find(
                            (elem) => elem.id === +params.id
                          )
                            ? Find.saved
                            : Find.save
                        }
                      />
                    </Saved>
                  </LikesButton>
                </Buttons>
                <Tittle>{Find.name}</Tittle>
              </ResAbout>
              <Numbers>
                <LeftNumbers>
                  <Rate>
                    {Find.rate}
                    {" :"} علاقه‌مندی
                    <Image
                      height={18}
                      width={18}
                      alt="love button"
                      src="../images/Watch/love.svg"
                    />
                  </Rate>
                  <Time>
                    {Find.time}
                    {" :"} مدت زمان
                    <Image
                      height={18}
                      width={18}
                      alt="time button"
                      src="../images/timer.svg"
                    />
                  </Time>
                </LeftNumbers>
                <RightNumbers>
                  <Year>
                    {Find.year} {":"} سال انتشار{" "}
                    <Image
                      height={18}
                      width={18}
                      alt="calendar button"
                      src="../images/calendar.svg"
                    />
                  </Year>
                  <AgeLimit>
                    {Find.age}
                    {" :"} محدودیت سنی
                    <Image
                      alt="lock button"
                      height={18}
                      width={18}
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
                  <Carousel2>
                    <Swiper
                      navigation={true}
                      slidesPerView={Responsive680 ? 1 : Responsive1100 ? 2 : 2}
                      speed={900}
                      modules={[Navigation]}
                      className="mySwiper"
                      slidesPerGroup={1}
                      loop={true}
                    >
                      <SwiperSlide>
                        <Image
                          alt="images of animation"
                          height={Responsive680 ? 180 : 200}
                          width={Responsive680 ? 220 : 250}
                          src={Find.image1}
                          style={
                            Responsive680
                              ? { borderRadius: 8 }
                              : { borderRadius: 16 }
                          }
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          alt="images of animation"
                          height={Responsive680 ? 180 : 200}
                          width={Responsive680 ? 220 : 250}
                          src={Find.image2}
                          style={
                            Responsive680
                              ? { borderRadius: 8 }
                              : { borderRadius: 16 }
                          }
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          alt="images of animation"
                          height={Responsive680 ? 180 : 200}
                          width={Responsive680 ? 220 : 250}
                          src={Find.image3}
                          style={
                            Responsive680
                              ? { borderRadius: 8 }
                              : { borderRadius: 16 }
                          }
                        />
                      </SwiperSlide>
                    </Swiper>
                  </Carousel2>
                </CarouselContainer>
              </Sekans>
            </AboutPhoto>
          </RightSection>
        </>
      ) : (
        <>
          <LeftSection style={{ backgroundImage: `url(${Find.bgImg})` }}>
            <Image
              height={875}
              width={605}
              alt="gradient image"
              src="../images/Watch/gradient.svg"
            />
          </LeftSection>
          <RightSection>
            <AboutMovies>
              <Tittle>{Find.name}</Tittle>
              <Numbers>
                <Rate>
                  {Find.rate}
                  <Image
                    alt="love button"
                    height={24.5}
                    width={24.5}
                    src="../images/Watch/love.svg"
                  />
                </Rate>
                <Time>{Find.time}</Time>
                <Year>{Find.year} </Year>
                <AgeLimit>{Find.age}</AgeLimit>
              </Numbers>
              <AboutText>{Find.description}</AboutText>
              <Buttons>
                <LikesButton>
                  <DisLike>
                    {" "}
                    <Image
                      height={24.5}
                      width={24.5}
                      alt="dislike button"
                      src="../images/Watch/dislike.svg"
                    />
                  </DisLike>
                  <Like>
                    <Image
                      height={24.5}
                      width={24.5}
                      alt="like button"
                      src="../images/Watch/like.svg"
                    />
                  </Like>
                  <Saved>
                    <Image
                      height={24.5}
                      width={24.5}
                      alt="save button"
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={newList}
                      src={
                        select.SavedList.find((elem) => elem.id === +params.id)
                          ? Find.saved
                          : Find.save
                      }
                    />
                  </Saved>
                </LikesButton>
                <WatchButton>تماشا کردن</WatchButton>
              </Buttons>
            </AboutMovies>

            <MiddleLine />
            <AboutPhoto>
              <Episodes>تصاویر</Episodes>
              <Sekans>
                <Image
                  alt="scene image"
                  height={Responsive1100 ? 240 : 256}
                  width={Responsive1100 ? 250 : 184}
                  src={Find.image1}
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    borderRadius: 8,
                  }}
                />
                <Image
                  alt="scene image"
                  height={Responsive1100 ? 240 : 256}
                  width={Responsive1100 ? 250 : 184}
                  src={Find.image2}
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    borderRadius: 8,
                  }}
                />
                <Image
                  alt="scene image"
                  height={Responsive1100 ? 240 : 256}
                  width={Responsive1100 ? 250 : 184}
                  src={Find.image3}
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    borderRadius: 8,
                  }}
                />
              </Sekans>
            </AboutPhoto>
          </RightSection>
        </>
      )}
    </Container>
  );
}
