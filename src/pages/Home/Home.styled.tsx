import styled from "styled-components";

export const Container = styled.section``;

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;
`;

export const FilterInput = styled.input`
  height: 40px;
  width: 300px;
  border-radius: 6px;
  border: 1px solid #d6dbdf;
  font-size: 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 20px;
  row-gap: 200px;
  margin-top: 120px;
`;
