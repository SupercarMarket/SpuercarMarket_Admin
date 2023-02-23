import styled from "styled-components";

export const SellerInfoWrapper = styled.div`
    width: 100%;
    height : 697px;
    gap : 40px;
    display: flex;

    font-weight: ${({theme}) => theme.fontWeight.normal};
    font-size: ${({theme}) => theme.fontSize.body_14};
    line-height: 150%;

    color: ${({theme}) => theme.colors.greyScale_6};
`;

// 판매자 정보 헤더 공통 속성
export const SellerInfoHeader = styled.td`
    width: 120px;
    height: 53px;

    padding : 0px 16px;

    background-color: ${({theme}) => theme.colors.greyScale_2};
    border-bottom : 1px solid ${({theme}) => theme.colors.greyScale_3};

    vertical-align:middle;
`;

// 판매자 정보 바디 공통 속성
export const SellerInfoContent = styled.td`
    width: 270px;
    height: 53px;   

    padding : 0px 16px;
    border-bottom : 1px solid ${({theme}) => theme.colors.greyScale_3};

    vertical-align:middle;
`;