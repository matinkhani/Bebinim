import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 73vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #291212;

  @media screen and (max-width: 1200px) {
    height: 800px;
    justify-content: start;
  }
  @media screen and (min-width: 1200px) and (max-width: 1440px) {
    height: 75vh;
  }
`;

export const CinemaOlineText = styled.div`
  width: 86%;
  height: 5%;
  display: flex;
  justify-content: end;
  align-items: center;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 20px;
  font-weight: 700;

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 15%;
    font-size: 18px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 1200px) and (max-width: 1440px) {
    width: 89%;
    height: 20%;
  }
`;

export const PosterPlace = styled.div`
  width: 86%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 35px;

  @media screen and (max-width: 1200px) {
    gap: 20px;
    justify-content: center;
  }
  @media screen and (min-width: 1200px) and (max-width: 1440px) {
    width: 90%;
  }
`;

export const Movie1 = styled.div`
  width: 600px;
  height: 228px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-size: cover;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 600px) {
    height: 140px;
    width: 290px;
  }
  @media screen and (min-width: 600px) and (max-width: 800px) {
    height: 140px;
    width: 500px;
  }
  @media screen and (min-width: 800px) and (max-width: 1200px) {
    height: 160px;
    width: 520px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1440px) {
    height: 205px;
    width: 520px;
  }
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

  @media screen and (max-width: 600px) {
    height: 140px;
    width: 290px;
  }
  @media screen and (min-width: 600px) and (max-width: 800px) {
    height: 140px;
    width: 500px;
  }
  @media screen and (min-width: 800px) and (max-width: 1200px) {
    height: 160px;
    width: 520px;
  }
`;

export const Hover = styled.div`
  width: 600px;
  height: 228px;
  position: absolute;
  border-radius: 8px;
  border: 4px solid transparent;
  transition: all 0.3s;
  cursor: pointer;
  font-family: var(--medium);

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

  @media screen and (max-width: 600px) {
    height: 140px;
    width: 290px;
  }
  @media screen and (min-width: 600px) and (max-width: 800px) {
    height: 140px;
    width: 500px;
  }
  @media screen and (min-width: 800px) and (max-width: 1200px) {
    height: 160px;
    width: 520px;
  }
`;

export const DetalisTop = styled.div`
  width: 35%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 600px) {
    width: 70%;
  }
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
`;

export const DetailsText = styled.div`
  height: 100%;
  width: 93%;
  font-family: var(--medium);
  font-size: 16px;
  direction: rtl;
  line-height: 35px;

  @media screen and (max-width: 600px) {
    font-size: 10px;
    line-height: 25px;
  }
`;
