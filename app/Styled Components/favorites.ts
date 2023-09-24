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
  height: 80%;
  width: 100%;
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
  justify-content: center;
  align-items: center;

`;
export const FavoriteImg = styled.img`
height: 256px;
width: 184px;
border-radius: 8px;
overflow-y: hidden;
`