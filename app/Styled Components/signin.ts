import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  background-image: url("./images/Signin/signinBg.svg");
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
  height: 100%;
  border-radius: 8px;
  background-color: rgba(7, 7, 7, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextSignIn = styled.div`
  width: 82%;
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
  width: 82%;
  height: 20%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const NumInput = styled.div`
  height: 56px;
  width: 390px;
  border-radius: 8px;
  background-color: rgba(254, 254, 254, 1);
  display: flex;
`;

export const Numberr = styled.div`
  height: 56px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 25px;
  color: black;
  border-radius: 8px;
  font-family: var(--medium);
`;

export const Line = styled.div`
  width: 2px;
  height: 26px;
  background-color: black;
`;

export const Input = styled.input`
  height: 56px;
  width: 80%;
  outline: none;
  border: none;
  color: #070707;
  border-radius: 8px;
  background: #f9f9f9;
  display: inline-flex;
  align-items: center;
  padding-inline: 15px;

  font-family: var(--medium);
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;

  &::placeholder {
    color: #070707;
  }
`;
export const CodePlace = styled.div`
  width: 82%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const CodeTop = styled.div`
  width: 85%;
  height: 40%;
  display: flex;
  justify-content: end;
  align-items: center;
  font-family: var(--medium);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: right;
`;

export const CodeDown = styled.div`
  width: 76.5%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignInBtnPlace = styled.div`
  width: 82%;
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
