import styled from "styled-components";
import { Button } from "../../Common/Button/ButtonForm.styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width : 100%;
    min-height: calc(100vh - 96px);
    padding : 40px 40px;
`;

export const Modal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
`
export const ModalBody = styled.div` 
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 16px;
    width: 648px;
    height: 393px;
    background: #FFFFFF;
    border-radius: 4px;
`
export const ModalTextArea = styled.textarea`
    box-sizing: border-box;
    
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    margin: 16px 0px 16px 0px;
    width: 600px;
    height: 240px;
    background: #FFFFFF;
    border: 1px solid #C3C3C7;
    border-radius: 4px;
    flex: none;
    order: 1;
    flex-grow: 0;
    resize:none;
`

export const BottomArea = styled.div`
    display: flex;
`;
export const ModalButton = styled( Button )`
    /* margin : 80px auto; */
    /* width: 87.48px; */
    margin:4px 4px 0px auto;
`;
export const ModalCompleteButton = styled( Button )`
    /* margin : 80px auto; */
    /* width: 87.48px; */
    margin:4px 0px 0px 4px;
    color: #B79F7B;
    border: 1px solid #B79F7B;
`;
export const TableWrapper = styled.div`
    width: 100%;
    height : 568px;
    gap : 40px;
    display: flex;
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

export const CompleteButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 100%;
    height : 44px;
    
    padding : 80px 0px 62px 0px;
`;

export const CompleteButton = styled( Button )`
    /* margin : 80px auto; */
    /* width: 87.48px; */
`;