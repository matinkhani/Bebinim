import styled from "styled-components";

export const BackContainer = styled.div`
  width: 352px;
  height: 316px;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const Container = styled.div`
  height: 312px;
  width: 352px;
  border-radius: 8px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  background-color: rgba(7, 7, 7, 0.9);
  font-family:  var(--medium);
`;

export const SectionRight = styled.div`
  height: 92%;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const RightTabs = styled.div`
  height: 14%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionLeft = styled.div`
  height: 92%;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const LeftTabs = styled.div`
  height: 14%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextMovies = styled.p`
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #52b5b4;
  }
`;
