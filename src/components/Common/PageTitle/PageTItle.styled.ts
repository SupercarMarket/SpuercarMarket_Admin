import styled from "styled-components";

export const Title = styled.span`
    color: ${({theme}) => theme.colors.greyScale_6};
    font-size : ${({theme}) => theme.fontSize.header_24};
    font-weight: ${({theme}) => theme.fontWeight.bold};
    line-height: 120%;
`;