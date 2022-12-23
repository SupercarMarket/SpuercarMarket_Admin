import { findByLabelText } from "@testing-library/react";
import styled from "styled-components"
import { Button } from "../../Common/Button/ButtonForm.styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width : 100%;
    padding : 40px 40px;
`;

export const ContentWrapperAttrs = styled.div`
    width : 100%;
    margin-top: 20px;
`;

export const TableAttrs = styled.table`
    font-size: ${({theme}) => theme.fontSize.header_14};
    font-weight: ${({theme}) => theme.fontWeight.normal};
    line-height: 150%;
`;

export const TableTdAttrs = styled.td`
    height: 53px;
    padding: 0px 16px;
    vertical-align: middle;
    border-bottom : 1px solid ${({theme}) => theme.colors.greyScale_3};
`;

export const TableHeader = styled( TableTdAttrs )`
    width: 120px;
    background-color: ${({theme}) => theme.colors.greyScale_2};
`;

export const TableContent = styled( TableTdAttrs )`
    width: 280px;
`;

export const HiddenButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 100%;
    height : 44px;
    
    padding : 80px 0px;

`;

export const HiddenButton = styled( Button )`
    /* margin : 80px auto; */
    /* width: 87.48px; */
`;

//판매자 정보
export const ForSaleSellerInfoWrapper = styled.div`
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
export const ForSaleSellerInfoHeader = styled.td`
    width: 120px;
    height: 53px;

    padding : 0px 16px;

    background-color: ${({theme}) => theme.colors.greyScale_2};
    border-bottom : 1px solid ${({theme}) => theme.colors.greyScale_3};

    vertical-align:middle;
`;

// 판매자 정보 바디 공통 속성
export const ForSaleSellerInfoContent = styled.td`
    width: 270px;
    height: 53px;   

    padding : 0px 16px;
    border-bottom : 1px solid ${({theme}) => theme.colors.greyScale_3};

    vertical-align:middle;
`;

export const ForSaleDealerPhotoHeader = styled( ForSaleSellerInfoHeader )`
    height : 152px;
    padding-left : 16px;
    padding-right : 12px;
`;

export const ForSaleDealerPhotoContent = styled( ForSaleSellerInfoContent )`
    height: 152px;
    padding : 16px;
`;

export const ForSalePhoto = styled.img`
    width: 238px;
    height: 120px;
`;

// 딜러 정보
export const ForSaleDealerInfoWrapper = styled.div`
    width : 780px;
    height : 100%;
`;

export const ForSaleDealerTable = styled.table`
    width : 100%;
    /* height : 100%; */
    margin-top : 20px;
`;

// 회원 정보

export const ForSaleMemberInfoWrapper = styled.div`
    width: 780px;
    height : 373px;
`;

export const ForSalerMemeberTable = styled.table`
    width: 100%;
    margin-top : 20px;
`;