import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(203, 203, 203, 1);
  overflow-y: hidden;
`;

export const BuyPlace = styled.div`
  height: 780px;
  width: 808px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 350px;
    height: 620px;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    width: 450px;
    height: 620px;
  }
`;

export const BuyComplete = styled.div`
  width: 90%;
  height: 10%;
  font-family: var(--medium);
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: right;
  color: rgba(7, 7, 7, 1);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    align-items: start;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    align-items: start;
  }
`;

export const BuySub = styled.div`
  width: 100%;
  height: 90%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(254, 254, 254, 1);
`;

export const Month = styled.div`
  width: 90%;
  height: 9%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--medium);
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: right;
  color: rgba(0, 0, 0, 1);
`;

export const PricesPlaces = styled.div`
  width: 90%;
  height: 8%;
  display: flex;
  align-items: end;
  justify-content: space-between;
  font-family: var(--medium);
  font-size: 20px;
  font-weight: normal;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: right;
  color: rgba(0, 0, 0, 1);
`;

export const Price = styled(PricesPlaces)`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: flex;
    align-items: center;
    font-size: 16px;
    width: 85%;
  }
 
  @media screen and (min-width: 481px) and (max-width: 630px) {
    display: flex;
    align-items: center;
    font-size: 19px;
    width: 85%;
  }
`;

export const PriceNumber = styled.div`
  height: fit-content;
  width: fit-content;
  direction: rtl;
`;

export const PriceText = styled.div`
  height: fit-content;
  width: fit-content;
  direction: rtl;
`;

export const Discount = styled(PricesPlaces)`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: flex;
    align-items: center;
    font-size: 16px;
    width: 85%;
  }
 
  @media screen and (min-width: 481px) and (max-width: 630px) {
    display: flex;
    align-items: center;
    font-size: 19px;
    width: 85%;
  }
`;

export const Tax = styled(PricesPlaces)`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: flex;
    align-items: center;
    font-size: 16px;
    width: 85%;
  }
  
  @media screen and (min-width: 481px) and (max-width: 630px) {
    display: flex;
    align-items: center;
    font-size: 19px;
    width: 85%;
  }
`;

export const AmountPayable = styled(PricesPlaces)`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: flex;
    align-items: center;
    font-size: 16px;
    width: 85%;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    display: flex;
    align-items: center;
    font-size: 19px;
    width: 85%;
  }
`;

export const MiddleLine = styled.div`
  height: 8%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(203, 203, 203, 1);
`;

export const ChooseBank = styled.div`
  height: 4%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: end;
  font-family: var(--medium);
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: right;
  color: rgba(0, 0, 0, 1);

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 10%;
  }
 
  @media screen and (min-width: 481px) and (max-width: 630px) {
    height: 10%;
  }
`;

export const BanksPlace = styled.div`
  width: 90%;
  height: 28%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 25%;
    width: 95%;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    height: 25%;
    width: 95%;
  }
`;

export const Bank = styled.div`
  height: 100%;
  width: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  align-items: center;
`;

export const BankImg = styled.img`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 55px;
    height: 55px;
  }
 
  @media screen and (min-width: 481px) and (max-width: 630px) {
    width: 61px;
    height: 61px;
  }
`;

export const BankIconPlace = styled.div`
  height: 135px;
  width: 135px;
  border: 2px solid rgba(82, 181, 180, 1);
  border-radius: 8px;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    border: 2px solid rgba(181, 82, 83, 1);
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 60px;
    width: 60px;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    height: 65px;
    width: 65px;
  }
`;

export const BankNamePlace = styled.div`
  font-family: var(--medium);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: right;
  color: rgba(0, 0, 0, 1);

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 10px;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    font-size: 14px;
  }
`;

export const LastPrice = styled.div`
  width: 90%;
  height: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--medium);
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: right;
  color: rgba(181, 82, 83, 1);
  direction: rtl;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 10%;
    font-size: 16px;
    align-items: end;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    height: 10%;
    font-size: 18px;
    align-items: end;
  }
`;

export const BuyBtnPlace = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 15%;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    height: 15%;
  }
`;

export const BuyButton = styled.button`
  width: 728px;
  height: 56px;
  top: 684px;
  left: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(181, 82, 83, 1);
  color: rgba(254, 254, 254, 1);
  border: none;
  outline: none;
  cursor: pointer;
  font-family: var(--medium);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: right;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 300px;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    width: 40F0px;
  }
`;
