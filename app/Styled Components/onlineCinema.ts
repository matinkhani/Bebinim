import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 77vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #291212;
`;

export const CinemaOlineText = styled.div`
  width: 79%;
  height: 10%;
  display: flex;
  justify-content: end;
  align-items: center;
  color: #fefefe;
  font-family: IRANSansX;
  font-size: 20px;
  font-weight: 700;
`;

export const PosterPlace = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Movie1 = styled.div`
  width: 600px;
  height: 228px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 8px;
  background-size: cover;
  background-position: 50% 70%;
  background-image: url("./images/CinemaOnline/ablagh.svg");
  cursor: pointer;
  position: relative;
`;

export const Movie2 = styled.div`
  width: 600px;
  height: 228px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 8px;
  background-size: cover;
  background-position: 50% 15%;
  background-image: url("./images/CinemaOnline/worldwar3.svg");
  position: relative;
  cursor: pointer;
`;

export const Movie3 = styled.div`
  width: 600px;
  height: 228px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 8px;
  background-size: cover;
  background-position: 50% 0%;
  background-image: url("./images/CinemaOnline/maslahat.png");
  cursor: pointer;
  position: relative;
`;

export const Movie4 = styled.div`
  width: 600px;
  height: 228px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 8px;
  background-size: cover;
  background-position: 50% 70%;
  background-image: url("./images/CinemaOnline/fosil.png");
  cursor: pointer;
  position: relative;
`;

export const HoverText = styled.div`
  display: none;
`;

export const DetailsPlace = styled.div`
  width: 600px;
  height: 228px;
  display: flex;
  align-items: end;
  flex-direction: column;
  border: 4px solid #52b5b4;
  border-radius: 8px;
`;

export const Hover = styled.div`
  width: 600px;
  height: 228px;
  position: absolute;
  border-radius: 8px;
  border: 4px solid transparent;
  transition: all 0.3s;
  cursor: pointer;
  font-family: IRANSansX;

  &:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgba(7, 7, 7, 0.8);
    border: 4px solid #52b5b4;
    border-radius: 8px;
  }

  &:hover ${HoverText} {
    display: flex;
  }
`;

export const DetalisTop = styled.div`
  width: 35%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Year = styled.p``;

export const Line = styled.div`
  width: 2px;
  height: 24px;
  background-color: #b55253;
`;

export const Name = styled.p``;

export const DetalisDown = styled.div`
  width: 89%;
  height: 60%;
  display: flex;
  justify-content: start;
  align-items: center;
  /* background-color: yellow; */
`;

export const DetailsText = styled.div`
  height: 100%;
  width: 93%;
  font-family: IRANSansX;
  font-size: 16px;
  direction: rtl;
  line-height: 35px;
`;
