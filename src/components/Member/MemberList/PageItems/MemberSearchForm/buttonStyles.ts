import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 22px;
  background: #ffffff;
  border: 1px solid #c3c3c7;
  border-radius: 4px;
  color: #1e1e20;
  margin: 0px;

  &:disabled {
    background: #eaeaec;
    border-radius: 4px;
    color: #8e8e95;
  }

  &:hover {
    background: #f3f3f3;
  }

  &.brown {
    background: #b79f7b;
    color: #ffffff;
    border: none;

    &:hover {
      background: #9c8667;
    }
  }
`;
