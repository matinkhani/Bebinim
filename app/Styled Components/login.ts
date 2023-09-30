import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: 50% 65%;
  background-size: cover;
  background-image: url("./images/Login/background.svg");
`;
export const MiddleContainer = styled.div`
  height: 570px;
  width: 600px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
`;
export const TopContainer = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  align-items: center;
`;
export const SignIn = styled.button`
  height: 48px;
  width: 134px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0px 12px 0px;
  border-radius: 8px;
  gap: 10px;
  background-color: rgba(181, 82, 83, 1);
  color: rgba(254, 254, 254, 1);
  font-family: var(--medium);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border: none;
  cursor: pointer;
  letter-spacing: 0em;
`;
export const DownContainer = styled.div`
  height: 85%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(7, 7, 7, 0.8);
`;
export const TopText = styled.div`
  height: 40px;
  width: 390px;
  color: rgba(254, 254, 254, 1);
  text-align: right;
  font-family: var(--medium);
  font-size: 16px;
  font-weight: 700;
`;
export const InputPlace = styled.div`
  height: 171px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Input = styled.input`
  height: 56px;
  width: 390px;
  outline: none;
  border: none;
  color: #070707;
  border-radius: 8px;
  background: #f9f9f9;
  display: inline-flex;
  padding: 14px 195px 6px 16px;
  align-items: center;
`;
export const LoginButton = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
`;
export const LoginBtn = styled.button`
  display: flex;
  width: 390px;
  height: 56px;
  outline: none;
  border: none;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #b55253;
  color: #fefefe;
  text-align: right;
  font-family: var(--medium);
  font-size: 16px;
  font-weight: 700;
`;
export const DownText = styled.div`
  height: 69px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  color: #f9f9f9;
  text-align: right;
  font-family: var(--medium);
  font-size: 14px;
  font-weight: 500;
`;
