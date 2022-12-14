import styled from "styled-components";
import Search from "../../../assets/searh.svg";

export const SearchBarWrapper = styled.div`
    position : relative;
    width: 360px;
    height: 44px;
`;

export const SearchBarInput = styled.input.attrs( { type : "text", placeholder: "검색어를 입력해주세요." } )`
    width: 360px;
    height: 44px;
    padding: 0px 20px;

    background-color: ${({theme}) => theme.colors.greyScale_1 };

    font-weight: ${({theme}) => theme.fontWeight.normal};
    font-size: ${({theme}) => theme.fontSize.body_16};
    line-height: 150%;

    border: 1px solid #C3C3C7;
    border-radius: 4px;
`;

export const SearchBarIcon = styled.img.attrs( { src : `${Search}`})< { isFocus : boolean }>`
    display : ${({ isFocus }) => isFocus ? "none" : "block"};
    position : absolute;
    top: 13px;
    right: 23.5px;
`;