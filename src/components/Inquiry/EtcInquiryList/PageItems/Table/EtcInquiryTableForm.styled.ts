import styled from "styled-components";

export const TableWrapper = styled.div`
    width : 100%;
    margin-left : auto;
    margin-right : auto;
`;

export const EtcInquiryTable = styled.table`
    width : 100%;
    /* table-layout: fixed; */
    border : 1px solid ${({theme}) => theme.colors.greyScale_3};
    border-collapse: collapse;
`;
