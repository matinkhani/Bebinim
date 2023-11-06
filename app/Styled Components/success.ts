import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  min-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ededed;
`;

export const SuccessMain = styled.div`
  height: 650px;
  width: 808px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fefefe;
  border-radius: 8px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 320px;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    width: 450px;
  }

  @media screen and (min-width: 630px) and (max-width: 850px) {
    width: 700px;
  }
`;

export const PlaceIcon = styled.div`
  height: 276px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 160px;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    height: 160px;
  }

  @media screen and (min-width: 630) and (max-width: 850px) {
    height: 160px;
  }
`;

export const SuccessText = styled.div`
  height: 92px;
  width: 100%;
  direction: rtl;
  display: flex;
  justify-content: center;
  align-items: end;
  color: #000;
  font-family: var(--medium);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 2px;
    font-weight: 100;
    height: 150px;
    justify-content: end;
    align-items: center;
    flex-direction: column;
    background-color: red;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    font-size: 22px;
    height: 150px;
    justify-content: end;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (min-width: 360px) and (max-width: 850px) {
    font-size: 22px;
    height: 150px;
  }
`;

export const Date = styled.pre`
  color: #b55253;
  font-family: var(--medium);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MassageText = styled.div`
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  color: #000;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 190px;
    text-align: center;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    height: 190px;
    text-align: center;
  }

  @media screen and (min-width: 630px) and (max-width: 850px) {
    height: 190px;
    text-align: center;
  }
`;

export const LoginSection = styled.div`
  height: 98px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 4px;
  color: #000;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 50px;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    height: 50px;
  }

  @media screen and (min-width: 630px) and (max-width: 850px) {
    height: 50px;
  }
`;

export const LinkToProfile = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const LandingButton = styled.div`
  height: 65px;
  width: 728px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  border-radius: 8px;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: #b55253;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 280px;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    width: 420px;
  }

  @media screen and (min-width: 630px) and (max-width: 850px) {
    width: 580px;
  }
`;
