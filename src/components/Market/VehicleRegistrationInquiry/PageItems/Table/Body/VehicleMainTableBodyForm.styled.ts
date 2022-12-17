import styled from "styled-components";
import { Button } from "../../../../../Common/Button/ButtonForm.styled";

export const VehicleSaleTbody = styled.tbody``;

export const VehicleSaleTableContent = styled.td`
    height: 40px;

    text-align:center;
    vertical-align:middle;
    
    border : 1px solid ${({theme}) => theme.colors.greyScale_3};
`;

export const VehicleSaleButton = styled( Button )``;