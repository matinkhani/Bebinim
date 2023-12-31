import styled from "styled-components";

export const Container = styled.div`
  height: 50vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 70%;
  background-image: url("./images/footer/cinema-seats.webp");
  background-color: #291212;
  position: relative;
  
  @media screen and (max-width: 480px) {
    height: 30vh;
  }
`;

export const Place = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  background-image: linear-gradient(
    to bottom,
    #291212,
    transparent,
    transparent
  );
  position: absolute;
`;

export const FooterDetails = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(18, 41, 41, 1);
`;

export const Support = styled.div`
  height: 100%;
  width: 19%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: right;
  font-family: var(--medium);
  font-size: 12px;
  font-weight: 500;
`;

export const Rules = styled.div`
  height: 100%;
  width: 19%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: right;
  font-family: var(--medium);
  font-size: 12px;
  font-weight: 500;
`;
export const AboutUs = styled.div`
  height: 100%;
  width: 19%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: right;
  font-family: var(--medium);
  font-size: 12px;
  font-weight: 500;
`;

export const BuySubscription = styled.div`
  height: 100%;
  width: 19%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: right;
  font-family: var(--medium);
  font-size: 12px;
  font-weight: 500;
`;

export const HomePage = styled.div`
  height: 100%;
  width: 19%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: right;
  font-family: var(--medium);
  font-size: 12px;
  font-weight: 500;
`;
