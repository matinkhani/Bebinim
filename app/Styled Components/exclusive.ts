import styled from "styled-components";

export const Container = styled.div`
  height: 57vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  background-color: #291212;

  @media screen and (max-width: 600px) {
    height: 200vh;
  }
`;

export const ExclusiveText = styled.div`
  height: 15%;
  width: 23.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--medium);
  font-size: 20px;
  font-weight: 700;
  color: white;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 5%;
    font-size: 18px;
  }
`;

export const ExclusiveMovie = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Movies = styled.div`
  width: 288px;
  height: 400px;
  border-radius: 8px;
  background-size: cover;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;

export const HoverText = styled.div`
  display: none;
`;

export const Details = styled.div`
  width: 288px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;

  @media screen and (max-width: 600px) {
    width: 300px;
    justify-content: center;
    gap: 140px;
  }
`;

export const DetailsTop = styled.div`
  height: 28%;
  width: 70%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const RealBtn = styled.button`
  height: 32px;
  width: 82px;
  font-family: var(--medium);
  font-size: 16px;
  font-weight: 700;
  border: none;
  color: #070707;
  text-align: center;
  border-radius: 8px;
  background-color: #52b5b4;
`;

export const DetailsBottom = styled.div`
  height: 30%;
  width: 100%;
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HoverFilmName = styled.div`
  height: 40%;
  width: 100%;
  color: #fff;
  text-align: center;
  font-family: var(--medium);
  font-size: 32px;
  font-weight: 700;
`;

export const HoverDate = styled.div`
  height: 35%;
  width: 100%;
  color: #b55253;
  text-align: center;
  font-family: var(--medium);
  font-size: 20px;
  font-weight: 700;
`;

export const Hover = styled.div`
  width: 288px;
  height: 400px;
  position: absolute;
  cursor: pointer;
  font-family: var(--medium);
  border: 4px solid transparent;
  transition: all 0.3s;
  border-radius: 8px;

  &:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(7, 7, 7, 0.8);
    border: 3px solid #b55253;
  }

  &:hover ${HoverText} {
    display: flex;
  }

  @media screen and (max-width: 600px) {
    width: 300px;
    height: 350px;
  }
`;
