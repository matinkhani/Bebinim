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

export const ImdbImg = styled.img`
  width: 288px;
  height: 216px;
  border-radius: 8px;
  cursor: pointer;
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
