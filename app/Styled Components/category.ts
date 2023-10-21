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
  width: 90.5%;
  max-width: 1440px;
  margin-bottom: 56px;
  margin-top: 90px;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 40px;
  }
`;

export const CategoryItems = styled.div`
  height: 200px;
  width: 288px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid rgba(254, 254, 254, 1);

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 150px;
    width: 250px;
    background-position: 80% 30%;
    border: none;
  }
`;

export const Image1 = styled(CategoryItems)`
  background-image: url("./images/Category/serial.svg");
`;

export const Image2 = styled(CategoryItems)`
  background-image: url("./images/Category/ekhtesasi.svg");
`;

export const Image3 = styled(CategoryItems)`
  background-image: url("./images/Category/online.svg");
`;

export const Image4 = styled(CategoryItems)`
  background-image: url("./images/Category/irani.svg");
`;

export const Image5 = styled(CategoryItems)`
  background-image: url("./images/Category/imdb.svg");
`;

export const Image6 = styled(CategoryItems)`
  background-image: url("./images/Category/rielitisho.svg");
`;

export const Image7 = styled(CategoryItems)`
  background-image: url("./images/Category/taksho.svg");
`;

export const Image8 = styled(CategoryItems)`
  background-image: url("./images/Category/animat.svg");
`;

export const Image9 = styled(CategoryItems)`
  background-image: url("./images/Category/khareji.svg");
`;

export const Image10 = styled(CategoryItems)`
  background-image: url("./images/Category/torki.svg");
`;

export const Image11 = styled(CategoryItems)`
  background-image: url("./images/Category/koreii.svg");
`;

export const Image12 = styled(CategoryItems)`
  background-image: url("./images/Category/hendi.svg");
`;

export const Image13 = styled(CategoryItems)`
  background-image: url("./images/Category/search.svg");
`;

export const Image14 = styled(CategoryItems)`
  background-image: url("./images/Category/mostanad.svg");
`;

export const Image15 = styled(CategoryItems)`
  background-image: url("./images/Category/kotah.svg");
`;
