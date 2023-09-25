import styled from "styled-components";

export const Container = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  background-color: #291212;
`;

export const TextPlace = styled.div`
  height: 20%;
  width: 31.5%;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const Text = styled.p`
  font-family: IRANSansX;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  color: rgba(254, 254, 254, 1);
`;

export const CarouselContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowLeft = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled.img`
  height: 56px;
  width: 56px;
  cursor: pointer;
`;

export const ArrowRight = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Carousel = styled.div`
  height: 100%;
  width: 82%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Details = styled.div`
  height: 100px;
  width: 130px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NameFilm = styled.div`
  height: 50px;
  width: fit-content;
  display: flex;
  align-items: end;
`;

export const DateFilm = styled.div`
  height: 50px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  color: white;
`;

export const Year = styled.p``;

export const Line = styled.div`
  width: 2px;
  height: 24px;
  background-color: #b55253;
`;

export const Name = styled.p``;

export const HoverText = styled.div`
  display: none;
`;

export const Hover = styled.div`
  height: 256px;
  width: 184px;
  border-radius: 8px;
  position: absolute;
  transition: all 0.3s;
  cursor: pointer;
  border: 3px solid transparent;
  font-family: IRANSansX;

  &:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgba(7, 7, 7, 0.6);
    border-radius: 8px;
    border: 3px solid rgba(255, 255, 255, 1);
  }
  &:hover ${HoverText} {
    display: flex;
  }
`;

export const FavoriteImg = styled.img`
  height: 256px;
  width: 184px;
  border-radius: 8px;
  overflow-y: hidden;
  cursor: pointer;
  position: relative;
`;