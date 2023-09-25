import styled from "styled-components";

export const Container = styled.div`
  height: 57vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  background-color: #291212;
`;

export const ExclusiveText = styled.div`
  height: 15%;
  width: 28.2%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: IRANSansX;
  font-size: 20px;
  font-weight: 700;
`;

export const ExclusiveMovie = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Movies1 = styled.div`
  width: 319px;
  height: 400px;
  border-radius: 8px;
  background-image: url("./images/exclusive/sedato.svg");
  background-size: cover;
  cursor: pointer;
  position: relative;
`;

export const Movies2 = styled.div`
  width: 319px;
  height: 400px;
  border-radius: 8px;
  background-image: url("./images/exclusive/actor.svg");
  background-size: cover;
  cursor: pointer;
  position: relative;
`;

export const Movies3 = styled.div`
  width: 319px;
  height: 400px;
  border-radius: 8px;
  background-image: url("./images/exclusive/godfather.svg");
  background-size: cover;
  cursor: pointer;
  position: relative;
`;

export const Movies4 = styled.div`
  width: 319px;
  height: 400px;
  border-radius: 8px;
  background-image: url("./images/exclusive/nato.svg");
  background-size: cover;
  cursor: pointer;
  position: relative;
`;
export const HoverText = styled.div`
  display: none;
`;
export const Details = styled.div`
  height: 400px;
  width: 319px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
`;

export const DetailsTop = styled.div`
height: 20%;
width: 100%;
`
export const DetailsBottom = styled.div`
height: 50%;
width: 100%;
`

export const Hover = styled.div`
  width: 319px;
  height: 400px;
  position: absolute;
  cursor: pointer;
  font-family: IRANSansX;
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
`;
