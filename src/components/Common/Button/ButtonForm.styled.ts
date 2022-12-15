import styled from "styled-components";

export const Button = styled.button`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    padding: 0px 22px;

    height: 44px;

    font-weight: ${({theme}) => theme.fontWeight.normal};
    font-size: ${({theme}) => theme.fontSize.body_16};
    line-height: 150%;

    /* enable */
    background-color: ${({theme}) => theme.colors.greyScale_1 };
    color : ${({theme}) => theme.colors.greyScale_6 };
    /* disable */
    /* background-color: ${({theme}) => theme.colors.greyScale_3 }; */
    /* color : ${({theme}) => theme.colors.greyScale_5 }; */

    border: 1px solid #C3C3C7;
    border-radius: 4px;
`;