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
  /* background-color: green; */
`;

export const InputContainer = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: end;
  gap: 20px;
  /* background-color: red; */

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 40%;
  }
`;

export const SerachInputPlace = styled.div`
  height: 55%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */

  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const InputandSearch = styled.div`
  height: 64px;
  width: 78%;
  border-radius: 8px;
  border: none;
  display: flex;
  background-color: rgba(254, 254, 254, 1);
  /* background-color: green; */

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 50%;
    margin-top: 15px;
  }
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
  /* background-color: red; */

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 85%;
  }
`;

export const SearchIcons = styled.div`
  height: 64px;
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 15%;
  }
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
  /* background-color: aqua; */

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: fit-content;
    display: none;
  }
`;

export const FilterPlace = styled.div`
  height: 35%;
  width: 20.5%;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: black;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
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
  /* background-color: darkgreen; */

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 20%;
    font-size: 14px;
  }
`;

export const DivSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 160px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    align-self: center;
    gap: 10px;
    margin-top: 110px;
  }
`;

export const ImgSearch = styled.img`
  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

/// Search Header Styled
export const SearchContainer = styled.div`
  width: 1440px;
  min-height: 100vh;
  background-color: #291212;
  /* background-color: darkmagenta; */
`;
