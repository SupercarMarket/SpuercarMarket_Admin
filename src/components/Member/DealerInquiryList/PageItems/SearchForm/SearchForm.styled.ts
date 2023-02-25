import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 16px;
  background: #ffffff;

  input.textBox {
    padding: 0px 20px;

    width: 360px;
    height: 44px;

    background: #ffffff;
    border: 1px solid #c3c3c7;
    border-radius: 4px;
  }
`;

const SearchIconButton = styled.button`
  background: none;
  border: none;
  position: relative;
  right: 70px;
`;

export { Form, SearchIconButton };
