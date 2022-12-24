import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height : 53px;
`;

export const HomepageTable = styled.table`
    width: 100%;
    font-size: ${({theme}) => theme.fontSize.header_14};
    font-weight: ${({theme}) => theme.fontWeight.normal};
    line-height: 150%;
`;