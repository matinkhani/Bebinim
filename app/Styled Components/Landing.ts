import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
  }
  @font-face {
    font-family:"IRANSansX";
    src: url("./Fonts/IRANSansXMedium.ttf");
  }
  @font-face {
    font-family:"Digi Lalezar Plus";
    src: url("./Fonts/Digi Lalezar Plus.ttf");
  }
`;
export const Container = styled.div`
  height: fit-content;
  width: 1440px;
  background-color: #291212;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
