import styled from "styled-components";

export const VehicleSaleThead = styled.thead``;

export const VehicleSaleTableHeader = styled.th`
    width: 140px;
    height: 40px;

    text-align:center;
    vertical-align:middle;

    border : 1px solid ${({theme}) => theme.colors.greyScale_3};
    background-color: ${({theme}) => theme.colors.greyScale_2};
`;