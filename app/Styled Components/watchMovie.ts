import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  gap: 50px;
  overflow-y: hidden;
  display: flex;
  align-items: center;
`;

export const LeftSection = styled.div`
  height: 100%;
  width: 50%;
  direction: rtl;
  background-size: cover;
  background-position: 50% 10%;
`;

export const RightSection = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutMovies = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
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
`;

export const Numbers = styled.div`
  height: 55px;
  width: 70%;
  display: flex;
  justify-content: space-between;
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
`;

export const Sekans = styled.div`
  height: 256px;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const SekansPhoto = styled.div`
  height: 256px;
  width: 184px;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 8px;
`;
