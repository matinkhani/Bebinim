import styled from "styled-components";

export const Div = styled.div``;

export const EmailInput = styled.input`
  height: 56px;
  width: 390px;
  color: var(--black, #070707);
  font-family: var(--medium);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: inline-flex;
  padding: 6px 15px 6px 6px;
  align-items: center;
  border-radius: 8px;
  background: #f9f9f9;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 300px;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    width: 390px;
  }
`;
export const NameInput = styled.input`
  height: 56px;
  width: 390px;
  text-align: center;
  color: var(--black, #070707);
  font-family: var(--medium);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: inline-flex;
  padding: 6px 15px 6px 6px;
  align-items: center;
  border-radius: 8px;
  background: #f9f9f9;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 300px;
  }

  @media screen and (min-width: 481px) and (max-width: 630px) {
    width: 390px;
  }
`;
export const EmailBtn = styled.button`
  display: inline-flex;
  height: 48px;
  width: 134px;
  color: #fefefe;
  text-align: center;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px 16px;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #b55253;
`;
export const NameBtn = styled.button`
  display: inline-flex;
  height: 48px;
  width: 134px;
  color: #fefefe;
  text-align: center;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px 16px;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #b55253;
`;
