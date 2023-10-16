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
`;

export const NamePlace = styled.div`
  height: 30px;
  width: 89.4%;
  display: flex;
  justify-content: space-between;
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
`;

export const PhoneNumberPlace = styled.div`
  height: 30px;
  width: 89.4%;
  display: flex;
  justify-content: end;
`;

export const PhoneNumber = styled.div`
  height: 100%;
  width: 60%;
  /* direction: rtl; */
  display: flex;
  color: #000;
  justify-content: space-between;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const PasswordPlace = styled.div`
  height: 30px;
  width: 89.4%;
  display: flex;
`;

export const Password = styled.div`
  height: 100%;
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
`;
