import { styled } from "styled-components";

export const Container = styled.div`
  height: 606px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #291212;
`;

export const TextPlace = styled.div`
  height: 10%;
  width: 28.4%;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const Text = styled.p`
  font-family: var(--medium);
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  color: rgba(254, 254, 254, 1);
`;

export const CarouselContainer = styled.div`
height: 450px;
width: 115%;
margin-top: 27px;
background-image: url("./images/ZakhmKari/background.svg");
background-size: cover;
`