import styled from "styled-components";
import { Button } from "../../Common/Button/ButtonForm.styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width : 100%;
    padding : 40px 40px;
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
    width: 280px;
    height: 53px;
    padding: 0px 16px;
    vertical-align: middle;
    border-bottom : 1px solid ${({theme}) => theme.colors.greyScale_3};
`;

export const HiddenButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 100%;
    height : 44px;
    gap: 8px;
    padding : 80px 0px 62px 0px;
`;

export const HiddenButton = styled( Button )`
    /* margin : 80px auto; */
    /* width: 87.48px; */
`;