import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./favorites.css";
import { Navigation } from "swiper/modules";
import {
  CarouselContainer,
  Container,
  TextPlace,
  Text,
  ArrowLeft,
  Carousel,
  ArrowRight,
  Arrow,
  FavoriteImg,
} from "../Styled Components/favorites";

export default function Favorites() {
  const images: any[] = [
    { lable: "Image 1", url: "./images/favorites/frame1.jpeg" },
    { lable: "Image 2", url: "./images/favorites/frame2.jpg" },
    { lable: "Image 3", url: "./images/favorites/frame3.jpg" },
    { lable: "Image 4", url: "./images/favorites/frame4.jpg" },
    { lable: "Image 5", url: "./images/favorites/frame5.png" },
    { lable: "Image 6", url: "./images/favorites/frame6.jpg" },
    { lable: "Image 7", url: "./images/favorites/frame7.jpg" },
    { lable: "Image 8", url: "./images/favorites/frame8.png" },
    { lable: "Image 9", url: "./images/favorites/frame9.jpg" },
    { lable: "Image 10", url: "./images/favorites/frame10.png" },
    { lable: "Image 11", url: "./images/favorites/frame11.png" },
    { lable: "Image 12", url: "./images/favorites/frame12.png" },
    { lable: "Image 13", url: "./images/favorites/frame13.png" },
  ];
  return (
    <Container>
      <TextPlace>
        <Text>محبوب‌ترین‌های ببینیم</Text>
      </TextPlace>
      <CarouselContainer>
        {/* <ArrowLeft>
          <Arrow
            style={{ transform: "rotate(180deg" }}
            src="./images/favorites/arrowright.svg"
          />
        </ArrowLeft> */}
        <Carousel>
          <Swiper navigation={true} slidesPerView={6} speed={1200} modules={[Navigation]} className="mySwiper"  slidesPerGroup={4}>
        
          
            
            <SwiperSlide >
            <FavoriteImg src="./images/favorites/Frame1.png" />
            </SwiperSlide>    <SwiperSlide>
            <FavoriteImg src="./images/favorites/frame2.png" />
            </SwiperSlide>    <SwiperSlide>
            <FavoriteImg src="./images/favorites/Frame3.png" />
            </SwiperSlide>    <SwiperSlide>
            <FavoriteImg src="./images/favorites/Frame4.png" />
            </SwiperSlide>    <SwiperSlide>
            <FavoriteImg src="./images/favorites/Frame5.png" />
            </SwiperSlide>    <SwiperSlide>
            <FavoriteImg src="./images/favorites/Frame6.png" />
            </SwiperSlide>    <SwiperSlide>
            <FavoriteImg src="./images/favorites/Frame7.jpg" />
            </SwiperSlide>    <SwiperSlide>
            <FavoriteImg src="./images/favorites/Frame8.jpg" />
            </SwiperSlide>    <SwiperSlide>
            <FavoriteImg src="./images/favorites/Frame9.jpg" />
            </SwiperSlide>    <SwiperSlide>
            <FavoriteImg src="./images/favorites/Frame10.jpg" />
            </SwiperSlide>    <SwiperSlide>
            <FavoriteImg src="./images/favorites/Frame11.jpg" />
            </SwiperSlide>    <SwiperSlide>
            <FavoriteImg src="./images/favorites/Frame12.jpeg" />
            </SwiperSlide>    <SwiperSlide>
            <FavoriteImg src="./images/favorites/Frame13.jpg" />
            </SwiperSlide>    
           
          </Swiper>
        </Carousel>
        {/* <ArrowRight>
          <Arrow src="./images/favorites/arrowright.svg" />
        </ArrowRight> */}
      </CarouselContainer>
    </Container>
  );
}
