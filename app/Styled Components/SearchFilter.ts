import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 88%;
  gap: 32px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ItemsPlace = styled.div`
  height: 290px;
  width: 184px;
  display: flex;
  flex-direction: column;
`;

export const ItemsName = styled.div`
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

export const Items = styled.div`
  height: 256px;
  width: 184px;
  border-radius: 8px;
`;
export const Details = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NameFilm = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
`;

export const DateFilm = styled.div`
  height: 50px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  color: white;
`;

export const Year = styled.p``;

export const Line = styled.div`
  width: 2px;
  height: 24px;
  background-color: #b55253;
`;

export const Name = styled.p``;

export const HoverText = styled.div`
  display: none;
`;

export const Hover = styled.div`
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
  &:hover ${HoverText} {
    display: flex;
  }
`;

export const LinkPlace = styled.div`
  height: 256px;
  width: 184px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
