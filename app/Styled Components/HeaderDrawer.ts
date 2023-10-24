import styled from "styled-components";

export const DrawerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const TopSection = styled.div`
  height: 15%;
  width: 100%;
  margin-top: 10px;
  border-radius: 16px;
  box-shadow: 0px 10px 20px -7px;
  background-color: #222222;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginTopSection = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Div = styled.div`
  direction: rtl;
  text-align: center;
  color: #fefefe;
  padding-top: 10px;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const PhoneContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ButtomSection = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const HomeePlace = styled.div`
  height: 8%;
  width: 80%;
  margin-top: 12px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;
`;

export const HomeeIcon = styled.img`
  height: 18px;
  width: 18px;
`;

export const HomeeText = styled.div`
  margin-top: 4px;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SubsPlace = styled.div`
  height: 8%;
  width: 80%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;
`;

export const SubsIcon = styled.img`
  height: 18px;
  width: 18px;
`;

export const SubsText = styled.div`
  margin-top: 4px;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CatgPlace = styled.div`
  height: 8%;
  width: 80%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;
`;

export const CatgIcon = styled.img`
  height: 18px;
  width: 18px;
`;

export const CatgText = styled.div`
  margin-top: 4px;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const LogOutPlace = styled.div`
  height: 8%;
  width: 80%;
  position: absolute;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;
  bottom: 0px;
  right: 30px;
`;

export const LogOutIcon = styled.img`
  height: 18px;
  width: 18px;
`;

export const LogOutText = styled.div`
  color: #b55253;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const FilmPlace = styled.div`
  height: 8%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 12px;
  transition: all 0.3s;
`;

export const FilmTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FilmDown = styled.div`
  width: 110%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #222222;
  border-radius: 8px;
`;

export const FilmsCatg = styled.div`
  width: 100%;
  height: 14%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FilmCatgLast = styled(FilmsCatg)`
  justify-content: end;
  width: 72%;
`;

export const FilmsText = styled.div`
  font-family: var(--medium);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: right;
  color: #2c6666;
`;

export const Film = styled.div`
  display: flex;
  gap: 12px;
`;

export const FilmIcon = styled.img`
  height: 18px;
  width: 18px;
`;

export const FilmText = styled.div`
  margin-top: 4px;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SerialPlace = styled.div`
  height: 8%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 12px;
  transition: all 0.3s;
`;

export const SerialTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SerialDown = styled.div`
  width: 110%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #222222;
  border-radius: 8px;
`;

export const SerialCatg = styled.div`
  width: 100%;
  height: 14%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SerialCatgLast = styled(SerialCatg)`
  justify-content: end;
  width: 72%;
`;

export const SerialsText = styled.div`
  font-family: var(--medium);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: right;
  color: #2c6666;
`;

export const Serial = styled.div`
  display: flex;
  gap: 12px;
`;

export const SerialIcon = styled.img`
  height: 18px;
  width: 18px;
`;

export const SerialText = styled.div`
  margin-top: 4px;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const TopNone = styled.div`
  height: 80%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TopTextNone = styled.div`
  height: 50%;
  width: 100%;
  direction: rtl;
  text-align: center;
  padding-top: 12px;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const DownTextNone = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SavedListPlace = styled.div`
  height: 8%;
  width: 80%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;
`;

export const SavedIcon = styled.img`
  height: 18px;
  width: 18px;
`;

export const SavedText = styled.div`
  margin-top: 4px;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
