import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  height: fit-content;
  min-height: 100vh;
  overflow-y: hidden;
  background-color: #291212;
`;

export const Null = styled.div`
  height: 1px;
  width: 100%;
`;

export const ImagesPlace = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 1440px;
  margin-bottom: 56px;
  margin-top: 90px;
  display: grid;
  grid-template-columns: repeat(4, 288px);
  justify-content: center;
  align-items: center;
  gap: 24px;
  direction: rtl;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: repeat(1, 250px);
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 40px;
  }
  @media screen and (min-width: 481px) and (max-width: 800px) {
    grid-template-columns: repeat(2, 200px);
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 40px;
    direction: rtl;
  }
  @media screen and (min-width: 800px) and (max-width: 1240px) {
    grid-template-columns: repeat(3, 220px);
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 40px;
  }
`;
