import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  gap: 50px;
  overflow-y: hidden;
  display: flex;
  align-items: center;

  @media screen and (max-width: 680px) {
    gap: 0px;
    flex-direction: column;
    overflow-y: auto;
    align-items: center;
  }
`;

export const LeftSection = styled.div`
  height: 100%;
  width: 50%;
  direction: rtl;
  background-size: cover;
  background-position: 50% 10%;

  @media screen and (max-width: 480px) {
    height: 35%;
    width: 100%;
    position: relative;
  }
  @media screen and (min-width: 480px) and (max-width: 680px) {
    height: 35%;
    width: 100%;
    background-position: 50% 30%;
    position: relative;
  }
`;

export const GradientDiv = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(to top, #291212 0%, rgba(41, 18, 18, 0) 100%);
`;

export const GradientImg = styled.img``;
export const BackColor = styled.div`
  height: 40px;
  width: 40px;
  position: absolute;
  bottom: 35px;
  right: 40px;
  border-radius: 50%;
  background-color: #291212;
`;
export const Play = styled.img`
  height: 50px;
  width: 50px;
`;

export const RightSection = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: red; */

  @media screen and (max-width: 680px) {
    height: 65%;
    width: 100%;
    justify-content: start;
    /* background-color: gold; */
  }
`;

export const AboutMovies = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  @media screen and (max-width: 680px) {
    /* background-color: white; */
    height: 300px;
  }
`;
export const ResAbout = styled.div`
  height: 100px;
  width: 100%;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
`;

export const Tittle = styled.div`
  height: 100px;
  width: fit-content;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  justify-content: end;

  @media screen and (max-width: 680px) {
    /* background-color: red; */
    height: 50px;
    align-items: center;
    padding-top: 20px;
    padding-right: 40px;
    font-size: 28px;
  }
`;

export const Numbers = styled.div`
  height: 55px;
  width: 70%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 680px) {
    /* background-color: red; */
    height: 135px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
export const RightNumbers = styled.div`
  height: 70%;
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* background-color: green; */
`;
export const LeftNumbers = styled.div`
  height: 70%;
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* background-color: purple; */
`;

export const AgeLimit = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 4px;
  background: #5c5c5c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 680px) {
    font-size: 12px;
    width: 100%;
    display: flex;
    font-weight: 500;
    gap: 5px;
    background-color: transparent;
  }
`;

export const Year = styled.div`
  height: 35px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (max-width: 680px) {
    font-size: 14px;
    width: 100%;
    display: flex;
    font-weight: 100;
    gap: 5px;
    /* background-color: red; */
  }
`;

export const Time = styled.div`
  height: 30px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (max-width: 680px) {
    font-size: 14px;
    width: 100%;
    display: flex;
    font-weight: 500;
    gap: 3px;
  }
`;

export const Rate = styled.div`
  height: 30px;
  width: 65px;
  gap: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (max-width: 680px) {
    font-size: 14px;
    width: 100%;
    display: flex;
    font-weight: 500;
    gap: 10px;
  }
`;

export const AboutText = styled.div`
  height: 94px;
  width: 100%;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  direction: rtl;
  line-height: 42px;
  display: flex;

  @media screen and (max-width: 680px) {
    /* background-color: gold; */
    font-size: 14px;
    font-weight: 500;
    width: 90%;
    align-items: center;
    padding-right: 40px;
    line-height: 24px;
    height: 120px;
  }
`;

export const Buttons = styled.div`
  height: 100px;
  width: 50%;
  gap: 32px;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: end;

  @media screen and (max-width: 680px) {
    /* background-color: black; */
    height: 50px;
    width: 40%;
    align-items: end;
    justify-content: center;
  }
`;

export const WatchButton = styled.div`
  height: 48px;
  width: 119px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background-color: #b55253;
`;

export const LikesButton = styled.div`
  height: 24px;
  width: 120px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 680px) {
    width: 100px;
  }
`;

export const MiddleLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: #52b5b4;
`;

export const AboutPhoto = styled.div`
  height: 338px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 680px) {
    height: 71%;
  }
`;

export const Episodes = styled.div`
  height: 78px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 680px) {
    font-size: 18px;
    width: 90%;
    height: 80px;
    /* background-color: red; */
  }
`;

export const Sekans = styled.div`
  height: 256px;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: space-between;
  /* background-color: red; */

  @media screen and (max-width: 680px) {
    /* background-color: gold; */
    align-items: start;
    justify-content: center;
    gap: 5px;
    height: 350px;
  }
`;

export const SekansPhoto = styled.div`
  height: 256px;
  width: 184px;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 8px;

  @media screen and (max-width: 680px) {
    height: 240px;
    width: 250px;
  }
`;
