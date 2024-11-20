import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.tr`
  text-align: left;
  border-bottom: 2px solid #f1f2f7;

  th {
    padding-bottom: 8px;
    &:nth-child(1) {
      width: 60%;
    }
    &:nth-child(2) {
      width: 15%;
    }
    &:nth-child(3) {
      width: 15%;
      text-align: center;
    }
  }
`;

export const TableRow = styled.tr<{ $isEven: boolean }>`
  text-align: left;
  border-bottom: 1.5px solid #f1f2f7;
  background-color: ${({ $isEven }) => ($isEven ? "#F9F9F9" : "#fff")};

  td {
    padding: 12px 0;

    &:nth-child(1) {
      color: #4d86b1;
      cursor: pointer;
      padding-left: 8px;
    }

    &:nth-child(3) {
      text-align: center;
    }
  }
`;
