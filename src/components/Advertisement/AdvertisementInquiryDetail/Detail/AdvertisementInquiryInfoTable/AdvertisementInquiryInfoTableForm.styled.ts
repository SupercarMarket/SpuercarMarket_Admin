import styled from "styled-components";
import {Button} from "../../../../Common/Button/ButtonForm.styled";

export const AdvertisementWrapper = styled.div`
    width: 780px;
    height : 465px;
`;

export const AdvertisementDetailTable = styled.table`
    width: 100%;
    margin-top : 20px;
`;
export const TableHeader = styled.td`
    width: 120px;
    height: 53px;
    padding: 0px 16px;
    vertical-align: middle;
    background-color: ${({theme}) => theme.colors.greyScale_2};
    border-bottom : 1px solid ${({theme}) => theme.colors.greyScale_3};
`;

export const TableContent = styled.td`
    width: 280px;
    height: 53px;
    padding: 0px 16px;
    vertical-align: middle;
    border-bottom : 1px solid ${({theme}) => theme.colors.greyScale_3};
`;


export const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom : 0;
    right : 0;
    left: 0;
    //padding: 21px;
  
    align-items : center;
    justify-content:center;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
`
export const ModalBody = styled.div` 
    display: inline-block;
    padding: 24px;
    //width: 20%;
    gap: 16px;
    height: 50%;
    width: 50%;
    background: #FFFFFF;
    border-radius: 4px;
`
export const BottomArea = styled.div`
    display: flex;
`;

export const ModalButton = styled( Button )`
    /* margin : 80px auto; */
    /* width: 87.48px; */
    margin:4px 4px 0px auto;
`;
