import styled from 'styled-components'

export const Container = styled.div`
height: 100%;
width: 88%;
gap: 32px;
display: flex;
justify-content: center;
flex-wrap: wrap;
`
export const Items = styled.div`
height: 256px;
width: 184px;
`
export const Details = styled.div`
  height: 100px;
  width: 130px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NameFilm = styled.div`
  height: 50px;
  width: fit-content;
  display: flex;
  align-items: end;
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
  font-family: IRANSansX;

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