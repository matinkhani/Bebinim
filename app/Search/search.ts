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

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 40%;
  }
  @media screen and (min-width: 481px) and (max-width: 630px) {
    width: 30%;
  }
  @media screen and (min-width: 630px) and (max-width: 850px) {
    width: 45%;
  }
  @media screen and (min-width: 850px) and (max-width: 1100px) {
    width: 60%;
  }
  @media screen and (min-width: 1100px) and (max-width: 1280px) {
    width: 85%;
  }
`;

export const SerachInputPlace = styled.div`
  height: 55%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
  @media screen and (min-width: 481px) and (max-width: 630px) {
    gap: 25px;
  }
  @media screen and (min-width: 630px) and (max-width: 850px) {
    gap: 15px;
  }
`;

export const InputandSearch = styled.div`
  height: 64px;
  width: 78%;
  border-radius: 8px;
  border: none;
  display: flex;
  background-color: rgba(254, 254, 254, 1);

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 50%;
    margin-top: 15px;
  }
  @media screen and (min-width: 481px) and (max-width: 630px) {
    width: 75%;
  }
  @media screen and (min-width: 630px) and (max-width: 850px) {
    width: 70%;
  }
  @media screen and (min-width: 1100px) and (max-width: 1280px) {
    width: 75%;
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

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 85%;
  }
  @media screen and (min-width: 481px) and (max-width: 630px) {
    width: 85%;
  }
  @media screen and (min-width: 630px) and (max-width: 850px) {
    width: 90%;
  }
`;

export const SearchIcons = styled.div`
  height: 64px;
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 15%;
  }
  @media screen and (min-width: 481px) and (max-width: 630px) {
    width: 15%;
  }
  @media screen and (min-width: 630px) and (max-width: 850px) {
    width: 10%;
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

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: fit-content;
    display: none;
  }
  @media screen and (min-width: 481px) and (max-width: 630px) {
    width: fit-content;
  }
  @media screen and (min-width: 630px) and (max-width: 850px) {
    width: 15%;
  }
`;

export const FilterPlace = styled.div`
  height: 35%;
  width: 20.5%;
  display: flex;
  justify-content: center;
  align-items: start;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
  @media screen and (min-width: 630px) and (max-width: 850px) {
    width: 31.5%;
  }
  @media screen and (min-width: 850px) and (max-width: 1100px) {
    width: 26.5%;
  }
  @media screen and (min-width: 1100px) and (max-width: 1280px) {
    width: 25%;
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

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 20%;
    font-size: 14px;
  }
  @media screen and (min-width: 481px) and (max-width: 630px) {
    width: 30%;
    font-size: 15px;
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
  @media screen and (min-width: 481px) and (max-width: 630px) {
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
  @media screen and (min-width: 481px) and (max-width: 630px) {
    width: 85px;
    height: 85px;
  }
  @media screen and (min-width: 850px) and (max-width: 1100px) {
    width: 90px;
    height: 90px;
  }
  @media screen and (min-width: 630px) and (max-width: 850px) {
    width: 80px;
    height: 80px;
  }
  @media screen and (min-width: 1100px) and (max-width: 1280px) {
    width: 85px;
    height: 85px;
  }
`;

/// Search Header Styled
export const SearchContainer = styled.div`
  width: 1440px;
  min-height: 100vh;
  background-color: #291212;
`;
