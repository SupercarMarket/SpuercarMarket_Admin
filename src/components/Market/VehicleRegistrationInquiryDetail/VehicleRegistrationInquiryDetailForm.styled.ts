import styled from "styled-components";
import { Button } from "../../Common/Button/ButtonForm.styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width : 100%;
    padding : 40px 40px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 100%;
    height : 44px;
    
    padding : 80px 0px;
    gap : 8px;
`;

export const HiddenButton = styled( Button )`
    /* margin : 80px auto; */
    /* width: 87.48px; */
`;