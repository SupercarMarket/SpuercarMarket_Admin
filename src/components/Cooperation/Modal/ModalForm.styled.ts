import styled from "styled-components";

export const ModalOuter = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalWapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 648px;
    height: 393px;
    padding: 24px;
    gap: 16px;
    
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors.greyScale_1};
`;

export const ModalTitle = styled.span`
    font-weight: ${({theme}) => theme.fontWeight.bold };
    font-size : ${({theme}) => theme.fontSize.header_24 };
    line-height: 120%;

    color : ${ ({theme}) => theme.colors.greyScale_6 };
`;

export const ModalInputBox = styled.textarea`
    padding: 16px;
    width: 600px;
    height: 240px;
    
    border: 1px solid ${({theme}) => theme.colors.greyScale_4};
    border-radius: 4px;
    resize: none;
    
    &:focus{
        outline: none;
        overflow-y: none;
    }
`;

export const ModalButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    gap : 8px;
`;

export const ModalButton = styled.button<{ title: string } >`
    width: 72px;
    height: 44px;
    font-weight: ${({theme}) => theme.fontWeight.normal};
    font-size: ${({theme}) => theme.fontSize.body_16};
    line-height: 150%;
    /* color: ${({theme}) => theme.colors.greyScale_6}; */
    color: ${({title}) => title === "cancel" ? ({theme}) => theme.colors.greyScale_6 : ({theme}) => theme.colors.primary };
    background-color: ${ ({theme}) => theme.colors.greyScale_1};

    border : 1px solid ${({title}) => title === "cancel" ? ({theme}) => theme.colors.greyScale_6 : ({theme}) => theme.colors.primary };
    border-radius: 4px;
`;