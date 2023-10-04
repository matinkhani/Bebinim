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
`;

export const PlaceIcon = styled.div`
  height: 276px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
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
`;
