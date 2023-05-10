import styled from "styled-components";
import { Button } from "components/Common/Button/ButtonForm.styled";
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width : 100%;
    min-height: calc(100vh - 96px);
    padding : 40px 40px;
`;

export const TableWrapper = styled.div`
    width: 100%;
    height : 465px;
`;

export const Table = styled.table`
    width: 100%;
    margin-top : 20px;
`;
export const TableHeader = styled.td`
    width: 120px;
    height: 53px;
    padding: 0px 16px;
    vertical-align: middle;
    background-color: ${({theme}) => theme.colors.greyScale_2};
    border-bottom : 1px solid ${({theme}) => theme.colors.greyScale_3};
`;

export const TableContent = styled.td`
    height: 53px;
    padding: 0px 16px;
    vertical-align: middle;
    border-bottom : 1px solid ${({theme}) => theme.colors.greyScale_3};
`;
export const CompleteButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 100%;
    height : 44px;
    
    padding : 80px 0px 62px 0px;
`;

export const CompleteButton = styled( Button )`
    /* margin : 80px auto; */
    /* width: 87.48px; */
`;