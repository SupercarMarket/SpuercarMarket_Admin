import styled from "styled-components";
import { Button } from "../../../../../Common/Button/ButtonForm.styled";

export const VehicleSaleTbody = styled.tbody``;

export const VehicleSaleTableContent = styled.td`
    height: 40px;

    text-align:center;
    vertical-align:middle;

    cursor: pointer;
    
    border : 1px solid ${({theme}) => theme.colors.greyScale_3};
`;

export const VehicleSaleTableBtnContent = styled.td`
    height: 40px;

    text-align:center;
    vertical-align:middle;
    
    border : 1px solid ${({theme}) => theme.colors.greyScale_3};
`;

export const VehicleSaleButton = styled( Button )<{ isAccepted : boolean }>`
    color : ${({ isAccepted }) => isAccepted ? ({theme}) => theme.colors.greyScale_6 : ({theme}) => theme.colors.greyScale_5};
    background-color : ${({ isAccepted }) => isAccepted ? ({theme}) => theme.colors.greyScale_1 : ({theme}) => theme.colors.greyScale_3};

    pointer-events : ${({ isAccepted }) => isAccepted ? 'auto' : 'none' };
`;