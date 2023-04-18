import styled from "styled-components";
import { Button } from "components/Common/Button/ButtonForm.styled";
import Arrow from "assets/small_expand_arrow.svg";
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width : 100%;
    min-height: calc(100vh - 96px);
    padding : 40px 40px;
`;

export const TableWrapper = styled.div`
    width: 100%;
    height : 465px;
`;

export const Table = styled.table`
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

export const Input = styled.input.attrs( { type : "text", placeHolder : "배너명을 입력하세요."} )`
    width: 100%;
    height: 44px;
    padding: 0px 20px;

    background-color: ${({theme}) => theme.colors.greyScale_1 };

    font-weight: ${({theme}) => theme.fontWeight.normal};
    font-size: ${({theme}) => theme.fontSize.body_16};
    line-height: 150%;

    border: 1px solid #C3C3C7;
    border-radius: 4px;
`;


export const RadioBtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;

export const RadioBtnLabel = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    height: 44px;
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

export const SelecterWrapper = styled.div`
    position: relative;
    width: 80px;
    height: 32px;
`;

export const FileLabel = styled.label`
box-sizing: "border-box";

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 20px 22px;
gap: 4px;
margin-top:10px;

width: 120px;
height: 44px;

/* Grayscale/Grayscale-1 (White) */

background: #FFFFFF;
/* Grayscale/Grayscale-4 */

border: 1px solid #C3C3C7;
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`

export const FileNameWrapper = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 0px 16px;
gap: 16px;

width: 900px;
height: 44px;

/* Grayscale/Grayscale-1 (White) */

background: #FFFFFF;
/* Grayscale/Grayscale-4 */

border: 1px solid #C3C3C7;
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 1;
`