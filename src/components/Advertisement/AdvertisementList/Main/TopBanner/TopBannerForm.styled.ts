import styled from "styled-components";
import { Button } from "../../../../Common/Button/ButtonForm.styled";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
`;

export const RightWrapper = styled.div`
    display: flex;
    gap : 9px;
`;

export const BannerButton = styled( Button )``;

export const BannerInfoButton = styled( Button )`
    cursor : default;
    background-color: ${({theme}) => theme.colors.greyScale_3 };
    color : ${({theme}) => theme.colors.greyScale_5 };
`;