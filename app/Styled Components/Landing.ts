import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    background-color: #291212;
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
  width: 100vw;
  max-width: 1440px;
  position: relative;
  background-color: #291212;
`;
