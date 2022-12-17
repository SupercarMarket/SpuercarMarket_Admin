import styled from "styled-components";
import { Button } from "../../../Common/Button/ButtonForm.styled";

export const VehicleMainTableWrapper = styled.div`
    width : 100%;
    margin-left : auto;
    margin-right : auto;
`;

export const VehicleSaleInfoTable = styled.table`
    width: 100%;
    border : 1px solid ${({theme}) => theme.colors.greyScale_3};
    border-collapse: collapse;

    font-weight: ${({theme}) => theme.fontWeight.normal };
    font-size: ${({theme}) => theme.fontSize.body_14};
    line-height: 150%;

    color: ${({ theme }) => theme.colors.greyScale_6 };
`;

export const VehicleSaleTbody = styled.tbody``;

export const VehicleSaleTableContent = styled.td`
    height: 40px;

    text-align:center;
    vertical-align:middle;
    
    border : 1px solid ${({theme}) => theme.colors.greyScale_3};
`;

export const VehicleSaleButton = styled( Button )``;