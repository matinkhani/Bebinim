import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 1440;
  background-color: #291212;
`;
