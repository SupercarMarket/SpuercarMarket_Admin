import styled from "styled-components";
import { Button } from "../../../../../Common/Button/ButtonForm.styled";
import BlackCheckBox from "../../../../../../assets/black_checkbox.svg";

export const Tbody = styled.tbody``;

export const TableContent = styled.td`
    height: 40px;

    text-align:center;
    vertical-align:middle;

    border : 1px solid ${({theme}) => theme.colors.greyScale_3};
`;

export const TableBodyButton = styled( Button )``;

export const TableBodyCheckBoxWrapper = styled.div``;

export const TableBodyInputCheckBox = styled.input.attrs({ type : "checkbox" } )`
    display: none;
    &+label{
    cursor: pointer;
    position: relative;

    display:inline-block;
    width:18px;
    height:18px;
    border:2px solid #1E1E20;
    border-radius: 4px;
    vertical-align: middle;
  }
  
  &:checked+label{
    width: 18px;
    height:18px;
    background-image: url(${BlackCheckBox});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const TableBodyLabelCheckBox = styled.label``;