import styled from "styled-components";
import Arrow from "../../../assets/small_expand_arrow.svg";

export const Wrapper = styled.div`
    margin-left:calc(50% - 40px);
    position: relative;
    width: 80px;
    height: 32px;
`;

export const Selecter = styled.button`
    display: flex;
    align-items: center;
    padding: 10px 8px 10px 8px;
    width: 80px;
    height: 32px;

    background-color: #ffffff;

    border: 1px solid #c3c3c7;
    border-radius: 4px;

    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.fontSize.body_14};
    line-height: 150%;

    color: ${({ theme }) => theme.colors.greyScale_5};
`;

export const SelecterArrow = styled.img.attrs({ src: `${Arrow}` })`
    position: absolute;

    top: 12.08px;
    right: 12.08px;
`;

export const OptionWrapper = styled.ul<{ isClicked: boolean }>`
    display: ${({ isClicked }) => (isClicked ? "block" : "none")};

    width: 80px;

    background: #ffffff;
    border: 1px solid ${({ theme }) => theme.colors.greyScale_3};
    border-radius: 4px;
`;

export const OptionItem = styled.li`
    width: 80px;
    height: 32px;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12px;

    &:hover {
        background: ${({ theme }) => theme.colors.greyScale_2};
        color: ${({ theme }) => theme.colors.primary};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
    }

    cursor: pointer;
`;
