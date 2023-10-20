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
  /* background-color: gold; */
`;
export const HomeePlace = styled.div`
  height: 8%;
  width: 80%;
  margin-top: 12px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;
  /* background-color: red; */
`;
export const HomeeIcon = styled.img`
  height: 18px;
  width: 18px;
  /* background-color: red; */
`;

export const HomeeText = styled.div`
  /* background-color: gold; */
  margin-top: 4px;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* background-color: blue; */
`;

export const SubsPlace = styled.div`
  height: 8%;
  width: 80%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;
  /* background-color: red; */
`;
export const SubsIcon = styled.img`
  height: 18px;
  width: 18px;
`;

export const SubsText = styled.div`
  /* background-color: gold; */
  margin-top: 4px;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* background-color: blue; */
`;

export const CatgPlace = styled.div`
  height: 8%;
  width: 80%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;
  /* background-color: red; */
`;

export const CatgIcon = styled.img`
  height: 18px;
  width: 18px;
`;
export const CatgText = styled.div`
  /* background-color: gold; */
  margin-top: 4px;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* background-color: blue; */
`;

export const FilmPlace = styled.div`
  height: 8%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 12px;
  /* background-color: red; */
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
  /* background-color: purple; */
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
  /* background-color: gold; */
  margin-top: 4px;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* background-color: blue; */
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
  /* background-color: purple; */
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
  /* background-color: gold; */
  margin-top: 4px;
  color: #fefefe;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* background-color: blue; */
`;
