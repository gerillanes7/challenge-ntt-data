import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  gap: 80px;
  padding: 0 16px;
`;

export const FirstColumn = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
`;

export const SecondColumn = styled.div`
  width: calc( 100% - 350px);
  gap: 25px;
  display: flex;
  flex-direction: column;
  heigth: 100%;
`;