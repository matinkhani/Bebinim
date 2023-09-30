import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  background-image: url("./images/Signin/kos.svg");
  background-size: cover;
  background-position: 50% 65%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MiddleContainer = styled.div`
  height: 570px;
  width: 600px;
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
`;

export const LoginBtn = styled.button`
  width: 134px;
  height: 48px;
  padding: 12px, 0px, 12px, 0px;
  border-radius: 8px;
  gap: 10px;
  background-color: rgba(181, 82, 83, 1);
  color: rgba(254, 254, 254, 1);

  font-family: var(--medium);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  border: none;
  cursor: pointer;
`;

export const DownContainer = styled.div`
  width: 100%;
  height: 85%;
`;

export const SignInForm = styled.div`
  width: 600px;
  height: 498px;
  top: 240px;
  left: 420px;
  border-radius: 8px;
  background-color: rgba(7, 7, 7, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextSignIn = styled.div`
  width: 85%;
  height: 15%;
  display: flex;
  justify-content: end;
  align-items: end;
  color: white;
  font-family: var(--medium);
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
`;

export const InputPlace = styled.div`
  width: 85%;
  height: 20%;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: green;
`;

export const Input = styled.input`
  width: 390px;
  height: 56px;
  padding: 14px, 195px, 6px, 16px;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: black;
  border: none;
  outline: none;
`;

export const CodePlace = styled.div`
  width: 85%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: end;
  background-color: blue;
`;

export const CodeTop = styled.div`
  width: 85%;
  height: 40%;
  display: flex;
  justify-content: end;
  align-items: center;
  //styleName: caption/l;
  font-family: var(--medium);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: right;
`;

export const CodeDown = styled.div`
  width: 85%;
  height: 60%;
  background-color: orange;
`;

export const SignInBtnPlace = styled.div`
  width: 85%;
  height: 30%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const SignInBtn = styled.button`
  width: 390px;
  height: 56px;
  padding: 16px, 0px, 16px, 0px;
  border-radius: 8px;
  background-color: rgba(181, 82, 83, 1);
  color: rgba(254, 254, 254, 1);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: var(--medium);
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: right;
`;
