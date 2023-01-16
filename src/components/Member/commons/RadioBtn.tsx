import React from "react";
import { ChangeEventHandler } from "react";
import styled from "styled-components";

const RadioWrapper = styled.div`
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

type RadioBtnProps = {
  optionData: option[];
  value: string;
  setValue: Function;
};

function RadioBtn({ optionData, value, setValue }: RadioBtnProps) {
  const handleRadioCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <RadioWrapper>
      {optionData.map((option) => (
        <Radio key={option.value} value={option.value} name={option.name} checked={option.value === value} handleRadioCheck={handleRadioCheck} />
      ))}
    </RadioWrapper>
  );
}

function Radio({ value, name, checked, handleRadioCheck }: { value: string; name: string; checked: boolean; handleRadioCheck: ChangeEventHandler<HTMLInputElement> }) {
  return (
    <Label>
      <input type="radio" value={value} name={name} checked={checked} onChange={handleRadioCheck} />
      <span>{name}</span>
    </Label>
  );
}

export default RadioBtn;
