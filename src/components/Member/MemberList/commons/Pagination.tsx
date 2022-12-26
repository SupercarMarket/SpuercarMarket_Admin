import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 16px;
`;

const ArrowButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #eaeaec;
  border-radius: 50%;
  margin: 0px;
  height: 32px;
  width: 32px;
  color: #8e8e95;

  &:hover {
    background: #b79f7b;
    cursor: pointer;
    color: #ffffff;
  }
`;

const Button = styled.button<{ active: boolean }>`
  border: none;
  border-radius: 50%;
  margin: 0;
  background-color: ${(props) => (props.active ? "#b79f7b" : "#ffffff")};
  font-size: 14px;
  color: #1e1e20;
  color: ${(props) => (props.active ? "#ffffff" : "#1e1e20")};
  width: 32px;
  height: 32px;

  &:hover {
    background-color: #b79f7b;
    color: #ffffff;
    cursor: pointer;
  }
`;

function Pagination({ total, currentPage, setCurrentPage }: { total: number; currentPage: number; setCurrentPage: Function }) {
  const numPages = Math.ceil(total / 20);
  let firstPage = currentPage - 1 - ((currentPage - 1) % 10) + 1;
  let lastPage = numPages < firstPage + 9 ? numPages : firstPage + 9;

  return (
    <>
      <Nav>
        <ArrowButton onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
          &lt;&lt;
        </ArrowButton>
        <ArrowButton onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          &lt;
        </ArrowButton>
        {Array(lastPage - firstPage + 1)
          .fill(0)
          .map((_, i) => (
            <Button key={firstPage + i} onClick={() => setCurrentPage(firstPage + i)} active={currentPage === firstPage + i ? true : false}>
              {firstPage + i}
            </Button>
          ))}
        <ArrowButton onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === numPages}>
          &gt;
        </ArrowButton>
        <ArrowButton onClick={() => setCurrentPage(numPages)} disabled={currentPage === numPages}>
          &gt;&gt;
        </ArrowButton>
      </Nav>
    </>
  );
}

export default Pagination;
