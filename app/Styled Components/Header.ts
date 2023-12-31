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

export const UnderContainer = styled.div`
  height: 64px;
  width: 100vw;
  position: fixed;
  z-index: 2;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #291212;
`;
export const LeftSectionContainer = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LeftSectionContainer2 = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 25px;
`;

export const LeftSection1 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  transition: all 0.3s;
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
  font-family: var(--medium);
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
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
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

export const BebinimText = styled.p`
  font-size: 32px;
  font-weight: 950;
  line-height: 52.45px;
  color: #b55253;
  font-family: var(--regular);
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

// Responsive Mode

export const ContainerResponsive = styled.div`
  width: 90%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  background-color: #291212;
  z-index: 2;
`;

export const SearchSection = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BebinimSection = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuSection = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuContainer = styled.div`
  height: 280px;
  width: 280px;
  border-radius: 8px;
  position: absolute;
  top: 100%;
  right: 5%;
  background-color: rgba(7, 7, 7, 0.9);
  font-family: var(--medium);
  color: #fff;
  display: flex;
  flex-direction: column;
`;

export const HomeMenu = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const CategoryMenu = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const FilmMenu = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
`;

export const SerialMenu = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const SubMenu = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
`;

export const OpenFilm = styled.div`
  width: 100%;
  height: 312px;
  position: absolute;
`;
