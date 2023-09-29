import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  height: fit-content;
  min-height: 100vh;
  overflow-y: hidden;
  background-color: #291212;
`;
export const Null = styled.div`
  height: 1px;
  width: 100%;
`;
export const ImagesPlace = styled.div`
  height: fit-content;
  width: 90.5%;
  max-width: 1440px;
  margin-top: 90px;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  gap: 16px;
`;
export const CategoryItems = styled.div`
  height: 200px;
  width: 288px;
  border-radius: 8px;
  border: 1px solid rgba(254, 254, 254, 1);
  background-image: url("./images/footer/cinema-seats.svg");
`;
