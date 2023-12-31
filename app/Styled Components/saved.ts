import { styled } from "styled-components";

export const SearchMain = styled.div`
  height: 100%;
  min-height: 92.3vh;
  width: 1440px;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  gap: 30px;
`;

export const InputContainer = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: end;
  gap: 20px;
`;

export const SerachInputPlace = styled.div`
  height: 55%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputandSearch = styled.div`
  height: 64px;
  width: 78%;
  border-radius: 8px;
  border: none;
  display: flex;
  background-color: rgba(254, 254, 254, 1);
`;

export const Input = styled.input`
  height: 64px;
  width: 93%;
  text-align: right;
  outline: none;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  font-family: var(--medium);
  color: rgba(7, 7, 7, 1);
  background-color: rgba(254, 254, 254, 1);
`;

export const SearchIcons = styled.div`
  height: 64px;
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseInput = styled.div`
  height: 50%;
  width: 10%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--medium);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const FilterPlace = styled.div`
  height: 35%;
  width: 20.5%;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const FilterDrop = styled.div`
  height: 48px;
  width: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--medium);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  border-radius: 8px;
  gap: 8px;
  background-color: rgba(254, 254, 254, 1);
  color: rgba(7, 7, 7, 1);
`;

export const SearchItem = styled.div`
  height: 75%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fefefe;
  text-align: right;
  font-family: var(--medium);
  font-size: 16px;
  font-weight: 400;
`;

///Search Header Styled
export const HeaderContainer = styled.div`
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
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LeftSection1 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: start;
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
////dropdown

export const BackContainer = styled.div`
  width: 352px;
  height: 316px;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const Container = styled.div`
  height: 312px;
  width: 352px;
  border-radius: 8px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  background-color: rgba(7, 7, 7, 0.9);
  font-family: var(--medium);
`;

export const SectionRight = styled.div`
  height: 92%;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const RightTabs = styled.div`
  height: 14%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionLeft = styled.div`
  height: 92%;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const LeftTabs = styled.div`
  height: 14%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextMovies = styled.p`
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #52b5b4;
  }
`;

