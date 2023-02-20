import styled from "styled-components";
import { ContentWrapperAttrs, TableAttrs } from "../../ForSaleListDetail/ForSaleListDetailForm.styled";

export const TableTdAttrs = styled.td`
    height: 53px;
    padding: 0px 16px;
    vertical-align: middle;
    border-bottom : 1px solid ${({theme}) => theme.colors.greyScale_3};
`;

// 종합정보
export const MainForSaleInfoTableWrapper = styled( ContentWrapperAttrs )`
    height : 216px;    
`;

export const MainForSaleInfoTable = styled( TableAttrs )``;