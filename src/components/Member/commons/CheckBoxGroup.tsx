import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  height: 44px;
`;

type option = {
  value: string;
  name: string;
};

type CheckBoxProps = {
  optionData: option[];
  checkedList: string[];
  setCheckedList: Function;
};

function CheckBoxGroup({ optionData, checkedList, setCheckedList }: CheckBoxProps) {
  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleAllCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isAllChecked) {
      const newList: string[] = [];
      optionData.forEach((option) => newList.push(option.value));
      setCheckedList(newList);
    } else {
      setCheckedList([]);
    }
    setIsAllChecked(!isAllChecked);
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (checkedList.includes(event.target.value)) {
      setCheckedList((prev: string[]) => prev.filter((el) => el !== event.target.value));
    } else {
      setCheckedList([...checkedList, event.target.value]);
    }
    console.log(checkedList);
  };

  return (
    <CheckBoxWrapper>
      <CheckBox value={"0"} name={"전체"} checked={isAllChecked} onChange={handleAllCheck} />
      {optionData.map((option) => (
        <CheckBox key={option.value} value={option.value} name={option.name} checked={checkedList.includes(option.value)} onChange={handleCheck} />
      ))}
    </CheckBoxWrapper>
  );
}

function CheckBox({ value, name, checked, onChange }: { value: string; name: string; checked: boolean; onChange: React.ChangeEventHandler<HTMLInputElement> }) {
  return (
    <Label>
      <input type="checkbox" value={value} checked={checked} onChange={onChange} />
      <span>{name}</span>
    </Label>
  );
}

export default CheckBoxGroup;
