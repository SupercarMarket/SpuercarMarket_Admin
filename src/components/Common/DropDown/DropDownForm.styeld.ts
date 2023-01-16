import styled from "styled-components";
import Arrow from "../../../assets/small_expand_arrow.svg";

export const Wrapper = styled.div`
    position: relative;
    width: 160px;
    height: 44px;
`;

export const Selecter = styled.button`
    display: flex;
    align-items: center;
    padding: 10px 22px;

    width: 160px;
    height: 44px;

    background-color: #FFFFFF;

    border: 1px solid #C3C3C7;
    border-radius: 4px;

    font-weight: ${({theme}) => theme.fontWeight.normal};
    font-size: ${({theme}) => theme.fontSize.body_16};
    line-height: 150%;
    
    color: ${({theme}) => theme.colors.greyScale_6};
`;

export const SelecterArrow = styled.img.attrs( { src : `${Arrow}`})`
    position: absolute;

    top : 19.08px;
    right : 19.08px;
`;

export const OptionWrapper = styled.ul<{ isClicked : boolean }>`
    display: ${({isClicked}) => isClicked ? "block": "none"};
    
    width: 160px;
    
    background: #FFFFFF;
    border: 1px solid ${({theme}) => theme.colors.greyScale_3};
    border-radius: 4px;
`;

export const OptionItem = styled.li`
    width: 160px;
    height: 44px;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12px;


    &:hover{
        background: ${({theme}) => theme.colors.greyScale_2};
        color: ${({theme}) => theme.colors.primary};
        font-weight: ${({theme}) => theme.fontWeight.bold };
    }

    cursor: pointer;
`;