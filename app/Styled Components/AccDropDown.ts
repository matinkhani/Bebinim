import styled from "styled-components";

export const AccImg = styled.img`
  cursor: pointer;
`;

export const AccDropContainer = styled.div`
  width: 288px;
  height: 320px;
  border-radius: 8px;
  background-color: rgba(254, 254, 254, 1);
  color: rgba(7, 7, 7, 1);
  position: absolute;
  left: 130px;
  top: 70px;
  display: flex;
  flex-direction: column;
`;

export const SubContainer = styled.div`
  width: 288px;
  height: 96px;
  background-color: rgba(181, 82, 83, 1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const ExplainSub = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubText = styled.div`
  font-family: var(--medium);
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: right;
  color: rgba(255, 255, 255, 1);
`;

export const BuySub = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BuySubBtn = styled.div`
  width: 200px;
  height: 32px;
  padding: 5px, 56px, 6px, 53px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SubBtnMiddle = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const BuySubText = styled.p`
  font-family: var(--medium);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: right;
  color: rgba(7, 7, 7, 1);
`;

export const BuySubIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const MoreContainer = styled.div`
  width: 288px;
  height: 224px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Tabs = styled.div`
  width: 90%;
  height: 17.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const TabsRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 4px;
`;

export const Icons = styled.img``;

export const Texts = styled.div`
  font-family: var(--medium);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: right;
  color: rgba(0, 0, 0, 1);
`;

export const TabsLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const ArrowIcon = styled.img``

export const Line = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LineMidlle = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const LogOutTab = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const LogOutTabRight = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 4px;
`;

export const LogOutTabLeft = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const LogOutTabIcon = styled.img``;

export const LogOutTabText = styled.div`
  font-family: var(--medium);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: right;
  color: rgba(0, 0, 0, 1);
`;
