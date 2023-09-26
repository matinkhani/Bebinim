import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 66vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #291212;
`;

export const PlaceImdb = styled.div`
  height: 90%;
  width: 82%;
  display: flex;
  flex-direction: column;
`;

export const ImdbTop = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 71px;
`;

export const ImdbDown = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 71px;
`;

export const ImdbDetails = styled.div`
  height: 10%;
  width: 39.2%;
  gap: 15px;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
`;

export const ImdbText = styled.div`
  height: 100%;
  width: 24%;
  display: flex;
  justify-content: start;
  align-items: center;
  color: #fefefe;
  font-family: IRANSansX;
  font-size: 20px;
  font-weight: 700;
`;

export const MidlleLine = styled.div`
  height: 24px;
  width: 1px;
  background-color: #fefefe;
`;

export const More = styled.div`
  height: 100%;
  width: 30%;
  gap: 5px;
  color: #52b5b4;
  font-family: IRANSansX;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ImgContainer = styled.div`
  height: 216px;
  width: 288px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const HoverText = styled.div`
  display: none;
`;

export const Hover = styled.div`
  width: 288px;
  height: 216px;
  border-radius: 8px;
  position: absolute;
  transition: all 0.3s;
  cursor: pointer;
  border: 3px solid transparent;
  font-family: IRANSansX;

  &:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgba(7, 7, 7, 0.6);
    border-radius: 8px;
    border: 3px solid rgba(255, 255, 255, 1);
  }
  &:hover ${HoverText} {
    display: flex;
  }
`;

export const ImdbImg = styled.img`
  width: 288px;
  height: 216px;
  border-radius: 8px;
  cursor: pointer;
`;

export const Details = styled.div`
  height: 120px;
  width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NameFilm = styled.div`
  height: 50px;
  width: fit-content;
  display: flex;
  align-items: end;
`;

export const DateFilm = styled.div`
  height: 50px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  color: white;
`;

export const Year = styled.p``;

export const Line = styled.div`
  width: 2px;
  height: 24px;
  background-color: #b55253;
`;

export const Name = styled.p``;