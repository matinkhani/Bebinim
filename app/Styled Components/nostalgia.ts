import styled from "styled-components";

export const Container = styled.div`
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  background-color: #291212;
`;

export const TextPlace = styled.div`
  height: 20%;
  width: 19.5%;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const Text = styled.p`
  font-family: var(--medium);
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  color: rgba(254, 254, 254, 1);
`;

export const CarouselContainer = styled.div`
  height: 90%;
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
  height: 85%;
  width: 85.5%;
  border: 1px solid #ab8427;
  border-radius: 8px;
  padding: 15px 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ImagePlace = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 5px;
`;

export const Details = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #291212;
`;

export const DetailsTop = styled.div`
  height: 29%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  font-family: var(--medium);
  color: #fefefe;
`;

export const DetailsName = styled.div`
  height: 55%;
  width: 33.3%;
  font-size: 25px;
  font-weight: 700;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const DetailsYear = styled.div`
  height: 22.5%;
  width: 33.3%;
  font-size: 17px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const DetailsTime = styled.div`
  height: 22.5%;
  width: 33.3%;
  font-size: 17px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const DetailsCenter = styled.div`
  height: 50%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: end;
  line-height: 40px;
  font-family: var(--medium);
  font-size: 17px;
  font-weight: 500;
  color: #fefefe;
`;

export const DetailsDown = styled.div`
  height: 11%;
  width: 90%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const WatchBtn = styled.button`
  height: 54px;
  width: 161px;
  gap: 3.5px;
  cursor: pointer;
  background-color: #b55253;
  border-radius: 4px;
  padding: 12px 24px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--medium);
  font-size: 20px;
  font-weight: 500;
  color: #fefefe;
`;

export const FavoriteImg = styled.img`
  height: 100%;
  width: 650px;
  border-radius: 8px;
  overflow-y: hidden;
  cursor: pointer;
  position: relative;
`;
