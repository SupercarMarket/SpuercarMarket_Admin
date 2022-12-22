import styled from "styled-components";

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top : 20px;
`;

export const PageNumberButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    
    border-radius: 50%;

    border: none;
    background-color: #FFFFFF;
    cursor: pointer;

    &[aria-current]{
        background-color: #B79F7B;;
        color: #FFFFFF;
    }
`;

export const ChangePageButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height : 32px;
    /* border: none;
    outline: none; */
    border : 1px solid #EAEAEC;
    border-radius: 50%;
    background-color: #FFFFFF;
`;

export const ChangePageButtonImage = styled.img`
    border: none;
    outline: none;
`;