import styled from "styled-components";

export const Container = styled.div`
  height: 45vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  background-color: #291212;

  @media screen and (max-width: 600px) {
    height: 35vh;
  }
`;

export const TextPlace = styled.div`
  height: 20%;
  width: 27.3%;
  display: flex;
  justify-content: center;
  align-items: end;

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 25%;
  }
`;

export const Text = styled.p`
  font-family: var(--medium);
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  color: rgba(254, 254, 254, 1);

  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
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

export const Carousel2 = styled.div`
  height: 100%;
  width: 87.9%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 74%;
  }
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
  height: 260px;
  width: 190px;
  border-radius: 8px;
  position: absolute;
  transition: all 0.3s;
  cursor: pointer;
  border: 3px solid transparent;
  font-family: var(--medium);

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

  @media screen and (max-width: 1200px) {
    height: 180px;
    width: 140px;
  }
`;

export const FavoriteImg = styled.img`
  height: 256px;
  width: 184px;
  border-radius: 8px;
  overflow-y: hidden;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 1200px) {
    height: 180px;
    width: 140px;
  }
`;

export const LinkPlace = styled.div`
  height: 256px;
  width: 184px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    height: 180px;
    width: 140px;
  }
`;

export const ArrowPlace = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const Arrowright = styled.img`
height: 48px;
width: 48px;
position: absolute;
top: 40%;
right: 1.5%;
cursor: pointer;
`
export const Arrowleft = styled.img`
height: 48px;
width: 48px;
position: absolute;
top: 40%;
left: 1.5%;
cursor: pointer;
`
