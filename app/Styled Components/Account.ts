import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("./images/Account/accBg.svg");
  background-size: cover;
  background-position: 50% 80%;
  background-repeat: no-repeat;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UnderHeader = styled.div`
  height: 7.6%;
  width: 100%;
  background-color: #291212;
`;

export const AccountMain = styled.div`
  height: 92.4%;
  width: 100%;
`;

export const AccountText = styled.div`
  height: 76px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 4px;
  color: #070707;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const InformationMain = styled.div`
  height: 286px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 390px;
    align-items: center;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    height: 300px;
    align-items: center;
  }
`;

export const InformationContain = styled.div`
  height: 250px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 8px;
  background: #fefefe;
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 320px) and (max-width: 480px) {
    justify-content: start;
    gap: 5px;
    width: 350px;
    height: 350px;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    justify-content: start;
    gap: 5px;
    width: 480px;
    height: 250px;
  }
`;

export const NamePlace = styled.div`
  height: 30px;
  width: 89.4%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 310px;
    height: 30%;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
  }
`;

export const NameandLastName = styled.div`
  height: 30px;
  width: 350px;
  direction: rtl;
  display: flex;
  gap: 16px;
  color: #000;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 40%;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    height: 40%;
    width: 80%;
    justify-content: start;
    align-items: center;
    font-size: 18px;
  }
`;

export const EditName = styled.div`
  height: 30px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #2c6666;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const EmailPlace = styled.div`
  height: 30px;
  width: 89.4%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 310px;
    height: 25%;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 20%;
  }
`;

export const AddEmail = styled.div`
  height: 100%;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2c6666;
  cursor: pointer;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CheckEmail = styled.div`
  height: 100%;
  width: 120px;
  direction: rtl;
  display: flex;
  gap: 16px;
  color: #000;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 40%;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    height: 40%;
    width: 73.5%;
    align-items: center;
    font-size: 18px;
  }
`;

export const PhoneNumberPlace = styled.div`
  height: 30px;
  width: 89.4%;
  display: flex;
  justify-content: end;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 310px;
    height: 20%;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 96.8%;
    height: 20%;
  }
`;

export const PhoneNumber = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  color: #000;
  justify-content: space-between;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 70%;
    justify-content: center;
    align-items: end;
    font-size: 18px;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    width: 100%;
    height: 70%;
    justify-content: end;
    align-items: center;
    font-size: 18px;
  }
`;

export const PasswordPlace = styled.div`
  height: 30px;
  width: 89.4%;
  display: flex;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 50px;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    height: 80px;
    justify-content: center;
    align-items: center;
  }
`;

export const Password = styled.div`
  width: 100px;
  color: #2c6666;
  cursor: pointer;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ResultMain = styled.div`
  height: 156px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    align-items: start;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    align-items: start;
    margin-top: 5px;
  }
`;

export const ResultContain = styled.div`
  height: 120px;
  width: 600px;
  display: flex;
  justify-content: end;
  align-items: center;
  border-radius: 8px;
  background: #fefefe;
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 80px;
    width: 350px;
    justify-content: center;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    height: 80px;
    width: 480px;
    justify-content: space-around;
    gap: 50px;
  }
`;

export const ResultText = styled.div`
  height: 50px;
  width: 77%;
  color: #000;
  padding-right: 35px;
  gap: 10px;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  display: flex;
  justify-content: end;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    justify-content: space-between;
    width: 70%;
    font-size: 14px;
    text-align: right;
    padding-right: 0px;
    gap: 0px;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    justify-content: space-between;
    width: 60%;
    font-size: 16px;
    text-align: right;
    padding-right: 0px;
    gap: 0px;
  }
`;

export const Result = styled.div`
  height: 25px;
  width: fit-content;
  color: #b55253;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 60%;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    width: 60%;
    font-size: 16px;
    display: flex;
    justify-content: end;
    align-items: center;
  }
`;

export const ResultBtn = styled.button`
  height: 48px;
  width: 112px;
  color: #fefefe;
  cursor: pointer;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: none;
  background-color: #52b5b4;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 80px;
    height: 40px;
    font-size: 13px;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    width: 80px;
    height: 40px;
    font-size: 13px;
  }
`;
