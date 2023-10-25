import styled from "styled-components";

export const SavedContainer = styled.div`
  width: 1440px;
  min-height: 100vh;
  background-color: #291212;
`;

export const SavedMain = styled.div`
  height: 100%;
  min-height: 92.3vh;
  width: 1440px;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  gap: 30px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin-top: 0px;
  }
  @media screen and (min-width: 480px) and (max-width: 630px) {
    width: 100%;
    margin-top: 0px;
  }
  @media screen and (min-width: 630px) and (max-width: 900px) {
    width: 100%;
    margin-top: 0px;
  }
  @media screen and (min-width: 900px) and (max-width: 1280px) {
    width: 100%;
    margin-top: 0px;
  }
`;

export const SavedText = styled.div`
  height: 772px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fefefe;
  text-align: right;
  font-family: var(--medium);
  font-size: 24px;
  font-weight: 400;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 16px;
  }
  @media screen and (min-width: 480px) and (max-width: 630px) {
    font-size: 18px;
  }
  @media screen and (min-width: 630px) and (max-width: 900px) {
    font-size: 20px;
  }
  @media screen and (min-width: 900px) and (max-width: 1280px) {
    font-size: 22px;
  }
`;

export const SaveContainer = styled.div`
  height: 100%;
  width: 88%;
  margin-top: 25px;
  gap: 32px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 20%;
    margin-top: 90px;
  }
  @media screen and (min-width: 480px) and (max-width: 630px) {
    width: 30%;
    margin-top: 90px;
  }
  @media screen and (min-width: 630px) and (max-width: 900px) {
    width: 44%;
    margin-top: 90px;
  }
  @media screen and (min-width: 900px) and (max-width: 1280px) {
    width: 60%;
    margin-top: 90px;
  }
`;

export const ItemsSavedPlace = styled.div`
  height: 290px;
  width: 184px;
  display: flex;
  flex-direction: column;
`;

export const SaveItems = styled.div`
  height: 256px;
  width: 184px;
  border-radius: 8px;
`;

export const SavedHoverText = styled.div`
  display: none;
`;

export const SavedHover = styled.div`
  height: 256px;
  width: 184px;
  border-radius: 8px;
  position: absolute;
  transition: all 0.3s;
  cursor: pointer;
  border: 3px solid transparent;
  font-family: var(--medium);

  &:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgba(7, 7, 7, 0.6);
    border-radius: 8px;
    border: 3px solid rgba(255, 255, 255, 1);
  }
  &:hover ${SavedHoverText} {
    display: flex;
  }
`;

export const SavedLinkPlace = styled.div`
  height: 256px;
  width: 184px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SavedDetails = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SavedNameFilm = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
`;

export const SavedDateFilm = styled.div`
  height: 50px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  color: white;
`;

export const SavedYear = styled.p``;

export const SavedLine = styled.div`
  width: 2px;
  height: 24px;
  background-color: #b55253;
`;

export const SavedName = styled.p``;

export const SavedItemsName = styled.div`
  width: 184px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: end;
  font-family: var(--medium);
  font-size: 16px;
  font-weight: 500;
  color: #fefefe;
`;
