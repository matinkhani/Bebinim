import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  height: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 70px;
  background-color: #291212;
  position: fixed;
  z-index: 2;
`;

export const LeftSectionContainer = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LeftSection1 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  transition: all 0.3s;
  /* background-color: red; */
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
  font-size: 13px;
  font-weight: 500;
  line-height: 21px;
  font-family: "IRANSansX";
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
  gap: 15px;
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
  font-weight: 500;
  line-height: normal;
`;

export const FilmSerialImg = styled.img`
  height: 16px;
  width: 16px;
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

export const SerialHover = styled.div`
  display: flex;
  row-gap: 7px;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: fit-content;
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

export const FilmHover = styled.div`
  display: flex;
  row-gap: 7px;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: fit-content;
`;

export const CategoryTab = styled.div`
  height: fit-content;
  width: 25%;
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
`;

export const CatgoryText = styled.p`
  cursor: pointer;
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

export const HomeText = styled.p`
  cursor: pointer;
`;

export const BebinimIconAndText = styled.div`
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const BebinimIcon = styled.img`
  height: 40px;
  width: 40px;
  cursor: pointer;
`;

export const BebinimText = styled.p`
  font-size: 32px;
  font-weight: 950;
  line-height: 52.45px;
  color: #b55253;
  font-family: "Digi Lalezar Plus";
  cursor: pointer;
`;

export const DropDownFilm = styled.div`
  position: absolute;
  top: 64px;
  right: 28.5%;
  transition: all 0.3s linear;
`;

export const DropDownSerial = styled.div`
  position: absolute;
  top: 64px;
  right: 34.8%;
  transition: all 0.3s linear;
`;
