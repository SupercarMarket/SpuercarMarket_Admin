import styled from "styled-components";
import { Button } from "../../../Common/Button/ButtonForm.styled";

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

export const TopHideButton = styled( Button )<{}>``

export const TotalTopButton = styled( Button )<{}>`
    cursor : default;
    background-color: ${({theme}) => theme.colors.greyScale_3 };
    color : ${({theme}) => theme.colors.greyScale_5 };
`;