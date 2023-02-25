import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;

  div {
    width: 100%;
  }
`;

const TitleDiv = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #1e1e20;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;

  .title {
    background: #f7f7f8;
    border-radius: 4px;
  }
  .content {
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

  img {
    width: 150px;
    height: 100px;
  }
`;

export { Container, TitleDiv, Table };
