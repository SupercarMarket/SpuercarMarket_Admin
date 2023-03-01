import styled from "styled-components";
import { Button } from "../../../../Common/Button/ButtonForm.styled";

export const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
`;

export const TopLeftWrapper = styled.div`
    display: flex;
    gap: 20px;
    z-index : 1;
`;

export const TopRightWrapper = styled.div`
    display: flex;
    gap : 9px;
`;

export const TopProgressButton = styled( Button )<{}>``

export const TotalTopButton = styled( Button )<{ progressCount : number }>`
    cursor : default;
    color : ${({ progressCount }) => progressCount > 0 ? ({theme}) => theme.colors.greyScale_6 : ({theme}) => theme.colors.greyScale_5};
    background-color : ${({ progressCount }) => progressCount > 0 ? ({theme}) => theme.colors.greyScale_1 : ({theme}) => theme.colors.greyScale_3};
`;