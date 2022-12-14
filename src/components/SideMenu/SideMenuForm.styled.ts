import styled from "styled-components";
import Arrow from "../../assets/expand_arrow.svg";

export const Wrapper = styled.nav`
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 100vh;

    border : 1px solid #EAEAEC;
    padding : 20px 0px;
`;

export const MainMenu = styled.li`
    width: 100%;

    font-weight: ${ ( { theme }) => theme.fontWeight.bold };
    font-size: ${ ( { theme }) => theme.fontSize.header_14 };
    color: ${ ( { theme }) => theme.colors.greyScale_6 };
    line-height : 120%;

    cursor: pointer;
`;

export const MainMenuWrapper = styled.div`
    padding : 0px 24px;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SubMenuWrapper = styled.ul<{ isClicked : boolean }>`
    display: ${({isClicked}) => isClicked ? 'block' : 'none'};
    /* transition: all ease 3s; */
`;

export const SubMenu = styled.li<{ isClicked : boolean }>`
    display: flex;
    align-items: center;
    padding: 0px 40px;
    height: 44px;

    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    cursor: pointer;

    background-color: ${(props) => props.isClicked ? props.theme.colors.greyScale_2 : "#FFFFFF" };

    /* transition: all ease 0.8s; */
    /* &:hover{
        background-color: ${({theme}) => theme.colors.greyScale_2 };
    } */
`;

export const ExpandArrow = styled.img.attrs( { src : `${Arrow}`})<{ isClicked : boolean }>`
    transition: all ease 0.4s;
    transform: ${({isClicked}) => isClicked ? `rotate(180deg)` : `rotate(0deg)`};
`;