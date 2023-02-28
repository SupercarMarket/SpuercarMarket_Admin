import styled from "styled-components";

export const MemberInfoWrapper = styled.div`
    width: 780px;
    height : 373px;
`;

export const MemeberTable = styled.table`
    width: 100%;
    margin-top : 20px;
`;
// 판매자 정보 헤더 공통 속성
export const MemberHeader = styled.td`
    width: 120px;
    height: 53px;

    padding : 0px 16px;

    background-color: ${({theme}) => theme.colors.greyScale_2};
    border-bottom : 1px solid ${({theme}) => theme.colors.greyScale_3};

    vertical-align:middle;
`;

// 판매자 정보 바디 공통 속성
export const MemberContent = styled.td`
    width: 270px;
    height: 53px;   

    padding : 0px 16px;
    border-bottom : 1px solid ${({theme}) => theme.colors.greyScale_3};

    vertical-align:middle;
`;