import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 75vh;
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
  width: 80%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  gap: 20px;
`;

export const Movie1 = styled.div`
  width: 660px;
  height: 255px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 8px;
  background-size: cover;
  background-position: 50% 70%;
  background-image: url("./images/CinemaOnline/ablagh.svg");
  cursor: pointer;
`;

export const Movie2 = styled.div`
  width: 660px;
  height: 255px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 8px;
  background-size: cover;
  background-position: 50% 15%;
  background-image: url("./images/CinemaOnline/worldwar3.svg");
  cursor: pointer;
`;

export const Movie3 = styled.div`
  width: 660px;
  height: 255px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 8px;
  background-size: cover;
  background-position: 50% 0%;
  background-image: url("./images/CinemaOnline/maslahat.png");
  cursor: pointer;
`;

export const Movie4 = styled.div`
  width: 660px;
  height: 255px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 8px;
  background-size: cover;
  background-position: 50% 70%;
  background-image: url("./images/CinemaOnline/fosil.png");
  cursor: pointer;
`;

// export const MovieImg = styled.img`
//   height: 100%;
//   width: 100%;
//   background-size: cover;
// `;
