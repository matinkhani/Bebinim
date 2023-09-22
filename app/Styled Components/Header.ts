import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 70px;
  background-color: #291212;
`;

export const LeftSection = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SignLoginBtn = styled.button`
  height: 32px;
  width: 98px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  color: #fefefe;
  background-color: #b55253;
`;

export const ButtonsText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`;

export const BuyBtn = styled.button`
  width: 87px;
  height: 32px;
  border: 1px solid #b55253;
  border-radius: 6px;
  padding: 6px 8px 5px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #b55253;
  cursor: pointer;
`;

export const SearchIcon = styled.img`
  height: 32px;
  width: 32px;
  color: #fefefe;
  cursor: pointer;
`;

export const RightSection = styled.div`
  height: 100%;
  width: 40%;
  gap: 7px;
  display: flex;
  align-items: center;
`;

export const BebinimPlace = styled.div`
  height: 100%;
  width: 20%;
`;

export const MiddleLine = styled.div`
  height: 55%;
  width: 0.05%;
  background-color: white;
`;

export const TabsPlace = styled.div`
  height: 100%;
  width: 79%;
  display: flex;
  justify-content: end;
  align-items: center;
  color: #fefefe;
  font-family: IRANSansX;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SerialTab = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

export const FilmTab = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

export const CategoryTab = styled.div`
  height: fit-content;
  width: 25%;
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
`;

export const HomeTab = styled.div`
  height: fit-content;
  width: 8%;
  padding: 5px;
  display: flex;
  gap: 7px;
  justify-content: end;
  align-items: center;
`;

export const BebinimIconAndText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const BebinimIcon = styled.img`
  height: 40px;
  width: 40px;
`;

export const BebinimText = styled.p`
  font-size: 32px;
  font-weight: 950;
  line-height: 52.45px;
  color: #b55253;
`;

export const FilmSerialImg = styled.img`
  height: 16px;
  width: 16px;
`;
