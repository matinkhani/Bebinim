import { styled } from "styled-components";

export const Container = styled.div`
  height: 606px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BgImg = styled.div`
  height: 100%;
  width: 115%;
  background-image: url("./images/ZakhmKari/background.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MovieMain = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    180deg,
    #291212 0%,
    rgba(46, 8, 8, 0.45) 18.35%,
    rgba(51, 0, 0, 0) 78.96%,
    rgba(43, 15, 15, 0.82) 99.99%,
    #291212 100%
  );
`;

export const Details = styled.div`
  height: 300px;
  width: 87.5%;
  gap: 280px;
  display: flex;
  justify-content: end;
`;
export const MovieIacon = styled.div`
  width: 276px;
  height: 181px;
`;

export const DetailsText = styled.div`
  height: 100%;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;
export const Director = styled.div`
  height: 45px;
  width: fit-content;
  display: flex;
  align-items: end;
  color: #757575;
  font-family: var(--medium);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const RatePlace = styled.div`
  height: 55px;
  width: 30%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 24px;
`;
export const Category1 = styled.div`
  height: 20px;
  width: 28px;
  padding: 4px;
  gap: 10px;
  border-radius: 8px;
  background: #6d2a38;
  color: var(--F9F9F9, #f9f9f9);
  text-align: center;
  font-family: var(--medium);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
`;
export const Category2 = styled.div`
  height: 20px;
  width: 51px;
  padding: 4px;
  gap: 10px;
  border-radius: 8px;
  background: #6d2a38;
  color: var(--F9F9F9, #f9f9f9);
  text-align: center;
  font-family: var(--medium);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
`;
export const Rate = styled.div`
  height: 21px;
  width: 44px;
  gap: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b55253;
  text-align: center;
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const DetailsMovieText = styled.div`
height: 72px;
width: 789px;
direction: rtl;
color: #CBCBCB;
text-align: right;
font-family: var(--medium);
font-size: 14px;
font-style: normal;
font-weight: 500;
`

export const MovieCarousel = styled.div`
  height: 160px;
  width: 100%;
`;

export const TextPlace = styled.div`
  height: 10%;
  width: 27.8%;
  display: flex;
  justify-content: center;
  align-self: end;
  align-items: end;
`;

export const Text = styled.p`
  font-family: var(--medium);
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  color: rgba(254, 254, 254, 1);
`;
