import React, { useState } from "react";
import styled from "styled-components";

const SelectBox = styled.div`
  position: relative;
  width: 100%;
  height: 44px;
  border: 1px solid #c3c3c7;
  border-radius: 4px;
  color: #1e1e20;
  background-color: #ffffff;
  cursor: pointer;
  text-align: left;

  &::before {
    content: "⌵";
    position: absolute;
    top: 6px;
    right: 20px;
    font-size: 24px;
  }
`;

const Label = styled.label`
  position: relative;
  top: 10px;
  left: 20px;
  font-size: 16px;
  line-height: 150%;
`;

const SelectOptions = styled.ul<{ show: boolean; optionNumber: number }>`
  position: absolute;
  list-style: none;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: ${(props) => props.optionNumber * 44};
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  margin: 0;
  border-radius: 4px;
  background: #ffffff;
  border: ${(props) => (props.show ? "1px solid #c3c3c7" : "none")};
  z-index: 5;
`;

const Option = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 24px;
  font-size: 14px;
  line-height: 150%;
  padding: 10px;
  padding-left: 15px;
  transition: background-color 0.2s ease-in;
  &:hover {
    color: #b79f7b;
    background-color: #f7f7f8;
    font-weight: 700;
  }
`;

type option = {
  value: string;
  name: string;
};

type SelectProps = {
  optionData: option[];
  value: string;
  setValue: Function;
};

function Select({ optionData, value, setValue }: SelectProps) {
  const [isShowOptions, setIsShowOptions] = useState(false);

  const handleOnChangeSelectValue = (event: React.MouseEvent<HTMLLIElement>) => {
    setValue(event.currentTarget.getAttribute("value"));
  };

  return (
    <SelectBox onClick={() => setIsShowOptions((prev) => !prev)}>
      <Label>
        {
          optionData.find((el) => {
            return el.value === value;
          })!.name
        }
      </Label>
      <SelectOptions show={isShowOptions} optionNumber={optionData.length}>
        {optionData.map((data: option) => (
          <Option key={data.value} title={data.name} value={data.value} onClick={handleOnChangeSelectValue}>
            {data.name}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
}

export default Select;
