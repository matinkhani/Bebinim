import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("./images/Subscribe/pofila.svg") lightgray 50% / cover;
  background-position: 50% 10%;
`;

export const TittleText = styled.div`
  height: 65px;
  width: 54.5%;
  margin-top: 75px;
  color: #070707;
  text-align: right;
  font-family: var(--medium);
  font-size: 26px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    text-align: center;
    font-size: 20px;
    height: 80px;
  }
`;

export const BuySubscribe1 = styled.div`
  height: 170px;
  width: 67%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 160px;
  }
`;

export const Month1 = styled.div`
  height: 152px;
  width: 81.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fefefe;
  border-radius: 8px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 93%;
    height: 120px;
  }
`;

export const AutoTop = styled.div`
  height: 49%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MiddleLine = styled.div`
  height: 1px;
  width: 97%;
  background-color: #cbcbcb;
`;

export const AutoText = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: var(--medium);
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 55%;
    font-size: 16px;
  }
`;

export const AutoPrice = styled.div`
  height: 100%;
  width: 25%;
  direction: rtl;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: #b55253;
  font-family: var(--medium);
  font-size: 22px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 42%;
    font-size: 16px;
  }
`;

export const LinkPlace = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    gap: 5px;
  }
`;

export const AutoBottom = styled.div`
  height: 45%;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    justify-content: center;
  }
`;

export const AutoBottomText = styled.div`
  height: 100%;
  width: 70%;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: var(--medium);
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 92%;
    font-size: 14px;
    gap: 20px;
  }
`;

export const More = styled.p`
  color: #52b5b4;
  font-family: var(--medium);
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const BuySubscribe2 = styled.div`
  height: 165px;
  width: 67%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 130px;
  }
`;

export const Month2 = styled.div`
  height: 130px;
  width: 81.5%;
  display: flex;
  justify-content: space-between;
  background-color: #fefefe;
  border-radius: 8px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 93%;
    height: 100px;
  }
`;

export const OnceMonthText = styled.div`
  height: 100%;
  width: 40%;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 50%;
  }
`;

export const OnceTop = styled.div`
  height: 50%;
  width: 90%;
  display: flex;
  justify-content: end;
  align-items: center;
  color: #000;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  line-height: normal;
  font-weight: 700;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 16px;
    width: 95%;
  }
`;

export const OnceBottom = styled.div`
  height: 50%;
  width: 90%;
  display: flex;
  justify-content: end;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 16px;
    width: 95%;
  }
`;

export const OnceBottomText = styled.div`
  height: 24px;
  width: 180px;
  direction: rtl;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: var(--medium);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 4px;
  background: #b55253;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 11px;
  }
`;

export const OnceMonthPrice = styled.div`
  height: 100%;
  width: 30%;
  display: flex;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 45%;
  }
`;

export const OncePrice = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgba(117, 117, 117, 0.7);
  text-align: right;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 95%;
  }
`;

export const OncePriceTop = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
  position: relative;
  color: rgba(117, 117, 117, 0.7);
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Reduction = styled.div`
  position: absolute;
  height: 1px;
  width: 70%;
  transform: rotate(-15deg);
  background-color: #b55253;
`;

export const OncePriceBottom = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
  color: #b55253;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ArrowIcon = styled.div`
  height: 100%;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BuySubscribe3 = styled.div`
  height: 165px;
  width: 67%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 130px;
  }
`;

export const Month3 = styled.div`
  height: 130px;
  width: 81.5%;
  display: flex;
  justify-content: space-between;
  background-color: #fefefe;
  border-radius: 8px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 93%;
    height: 100px;
  }
`;

export const ThirdMonthText = styled.div`
  height: 100%;
  width: 40%;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 50%;
  }
`;

export const ThirdTop = styled.div`
  height: 50%;
  width: 90%;
  display: flex;
  justify-content: end;
  align-items: center;
  color: #000;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  line-height: normal;
  font-weight: 700;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 16px;
    width: 95%;
  }
`;

export const ThirdBottom = styled.div`
  height: 50%;
  width: 90%;
  display: flex;
  justify-content: end;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 16px;
    width: 95%;
  }
`;

export const ThirdBottomText = styled.div`
  height: 24px;
  width: 180px;
  direction: rtl;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: var(--medium);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 4px;
  background: #b55253;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 11px;
  }
`;

export const ThirdMonthPrice = styled.div`
  height: 100%;
  width: 30%;
  display: flex;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 48%;
  }
`;

export const ThirdPrice = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgba(117, 117, 117, 0.7);
  text-align: right;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 95%;
  }
`;

export const ThirdPriceTop = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
  position: relative;
  color: rgba(117, 117, 117, 0.7);
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ThirdReduction = styled.div`
  position: absolute;
  height: 1px;
  width: 70%;
  transform: rotate(-15deg);
  background-color: #b55253;
`;

export const ThirdPriceBottom = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
  color: #b55253;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const BuySubscribe4 = styled.div`
  height: 90px;
  width: 67%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;

export const Month4 = styled.div`
  height: 100%;
  width: 81.5%;
  display: flex;
  justify-content: space-between;
  background-color: #fefefe;
  border-radius: 8px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 93%;
    height: 70%;
  }
`;

export const SixthText = styled.div`
  height: 100%;
  width: 17.8%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 22%;
    font-size: 16px;
  }
`;

export const SixthPrice = styled.div`
  height: 100%;
  width: 21.1%;
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
  gap: 27px;
  color: #b55253;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 20px;
    width: 49%;
    gap: 0px;
    justify-content: space-around;
  }
`;
