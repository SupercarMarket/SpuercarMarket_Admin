import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  thead {
    background: #f7f7f8;
    border-radius: 4px;
  }
  tbody {
    background: #ffffff;
    border-radius: 4px;
  }
  td {
    height: 40px;
    border: 1px solid lightgray;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #1e1e20;
    text-align: center;
    vertical-align: middle;
  }
`;

export { Table };
