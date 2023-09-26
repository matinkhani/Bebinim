import styled from "styled-components";

export const Container = styled.div`
  background-image: url("./images/GharibFilm.png");
  height: 639px;
  width: 1440px;
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  background-size: cover;
  margin-top: 64px;
`;

export const FilmPoster = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
`;

export const LeftSide = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: end;
`;

export const ArrowIconsPlace = styled.div`
  height: 10%;
  width: 30%;
  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowIcons = styled.img`
  height: 48px;
  width: 48px;
`;

export const RightSide = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
`;

export const ExplainContainer = styled.div`
  height: 45%;
  gap: 13px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ExplainAndWatch = styled.div`
  height: 30%;
  width: 72%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 15px;
`;

export const MoreExplainText = styled.p`
  font-family: IRANSansX;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  color: rgba(0, 0, 0, 1);
`;

export const MoreIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const MoreExplainBtn = styled.button`
  width: 161px;
  height: 54px;
  padding: 12px, 24px, 12px, 24px;
  border-radius: 4px;
  color: rgba(254, 254, 254, 1);
  background-color: rgba(181, 82, 83, 1);
  font-family: IRANSansX;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: right;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  cursor: pointer;
`;

export const WatchSVG = styled.img`
  width: 24px;
  height: 24px;
`;

export const Text = styled.div`
  height: fit-content;
  width: 79%;
  direction: rtl;
  font-family: IRANSansX;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0em;
  color: rgba(0, 0, 0, 1);
`;

export const BebinimBox = styled.div`
  width: 100%;
  height: 160px;
  background-image: linear-gradient(to top, #291212, transparent);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const LinksPlace = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  align-items: end;
  justify-content: space-evenly;
`;

export const BebinimLinks = styled.div`
  width: 392px;
  height: 100%;
  padding: 28px, 96px, 28px, 118px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: rgba(254, 254, 254, 0.2);
`;

export const FreshSVG = styled.img`
  width: 40px;
  height: 40px;
`;

export const FreshText = styled.p`
  font-family: IRANSansX;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: right;
`;
