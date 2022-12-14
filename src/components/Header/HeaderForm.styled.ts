import styled from "styled-components";
import HeaderLogo from "../../assets/logo.svg";

const Wrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height : 96px;
    padding: 0px 40px;

    background-color: ${ ( { theme } ) => theme.colors.greyScale_6 };
`;

const Logo = styled.img.attrs({ src : `${HeaderLogo}`})`
    /* width : 361px;
    height : 56px; */
`

const LogoutButton = styled.button`
    font-weight: ${ ( { theme } ) => theme.fontWeight.normal };
    font-size : ${ ( { theme } ) => theme.fontSize.header_16 };

    line-height: 150%;

    color : ${ ( { theme } ) => theme.colors.greyScale_1 };
    background-color: ${ ( { theme } ) => theme.colors.greyScale_6 };

    outline: none;
    border: none;
`;

export { Wrapper, Logo, LogoutButton };