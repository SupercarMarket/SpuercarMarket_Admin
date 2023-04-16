import styled from "styled-components";
import { Button } from "../../../../Common/Button/ButtonForm.styled";

export const DownLaodFileInputButtonWrapper = styled.div`
    display: flex;
    gap : 8px;
    height : 44px;
`;


export const DownLaodFileInput = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 520px;
    padding : 16px;

    font-weight: ${({theme}) => theme.fontWeight.normal};
    font-size:${({theme}) => theme.fontSize.body_14};
    line-height: 150%;
    color : ${({theme}) => theme.colors.greyScale_5};

    border: 1px solid ${({theme}) => theme.colors.greyScale_4};
    border-radius: 4px;

    vertical-align: center;

    /* ::placeholder{
        font-weight: ${({theme}) => theme.fontWeight.normal};
        font-size:${({theme}) => theme.fontSize.body_14};
        line-height: 150%;
        color : ${({theme}) => theme.colors.greyScale_5};
    } */
`;

export const DownLaodButton = styled( Button )`
    font-size: 16px;
`;