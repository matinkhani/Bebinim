import styled from "styled-components";

export const Container = styled.div`
  height: 745px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  background-size: cover;
  background-position: 40%;

  @media screen and (max-width: 600px) {
    height: 450px;
  }
  @media screen and (max-width: 900px) {
    height: 500px;
  }
  @media screen and (min-width: 900px) and (max-width: 1200px) {
    height: 600px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1440px) {
    height: 650px;
  }
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

  @media screen and (max-width: 1200px) {
    background-image: linear-gradient(
      to top,
      #291212,
      transparent,
      transparent,
      transparent
    );
  }
`;

export const ArrowIconsPlace = styled.div`
  height: 10%;
  width: 30%;
  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowIconsLeft = styled.img`
  height: 48px;
  width: 48px;
  position: absolute;
  bottom: 120px;
  left: 35px;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    bottom: 15px;
  }
`;

export const ArrowIconsRight = styled.img`
  height: 48px;
  width: 48px;
  position: absolute;
  left: 90px;
  bottom: 120px;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    bottom: 15px;
  }
`;

export const RightSide = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    align-items: end;
    background-image: linear-gradient(
      to top,
      #291212,
      transparent,
      transparent,
      transparent
    );
  }
`;

export const ExplainContainer = styled.div`
  height: 50%;
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

  @media screen and (max-width: 1200px) {
    gap: 15px;
    width: 100%;
    height: 85%;
    align-items: end;
    justify-content: end;
    margin-right: 40px;
  }
`;

export const MoreExplainText = styled.p`
  font-family: var(--medium);
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;

  @media screen and (max-width: 900px) {
    display: none;
  }
  @media screen and (min-width: 900px) and (max-width: 1200px) {
    margin-bottom: 10px;
  }
`;

export const MoreIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    margin-bottom: 10px;
  }
`;

export const MoreExplainBtn = styled.button`
  width: 161px;
  height: 54px;
  padding: 12px, 24px, 12px, 24px;
  border-radius: 4px;
  color: rgba(254, 254, 254, 1);
  background-color: rgba(181, 82, 83, 1);
  font-family: var(--medium);
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

  @media screen and (max-width: 1200px) {
    width: 120px;
    height: 50px;
    font-size: 16px;
    border-radius: 8px;
    justify-content: center;
  }
`;

export const WatchSVG = styled.img`
  width: 24px;
  height: 24px;
`;

export const Text = styled.div`
  height: 18%;
  width: 70%;
  direction: rtl;
  font-family: var(--medium);
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0em;
  color: rgba(0, 0, 0, 1);

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const BebinimBox = styled.div`
  width: 100%;
  height: 128px;
  position: absolute;
  bottom: 91px;
  left: 20px;
  background-image: linear-gradient(to top, #291212, transparent);
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 1200px) {
    position: unset;
    height: 280px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1440px) {
    left: 0px;
  }
`;

export const LinksPlace = styled.div`
  height: 80%;
  width: 90%;
  gap: 25px;
  display: flex;
  align-items: end;
  justify-content: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: 90%;
    gap: 15px;
  }
  @media screen and (min-width: 900px) and (max-width: 1200px) {
    height: 40%;
  }
`;

export const BebinimLinks = styled.div`
  width: 392px;
  height: 80%;
  padding: 28px, 96px, 28px, 118px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: rgba(254, 254, 254, 0.2);

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const FreshSVG = styled.img`
  width: 40px;
  height: 40px;
`;

export const FreshText = styled.p`
  font-family: var(--medium);
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: right;
`;
