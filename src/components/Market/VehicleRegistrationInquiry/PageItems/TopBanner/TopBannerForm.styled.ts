import styled from "styled-components";
import { Button } from "../../../../Common/Button/ButtonForm.styled";

export const TopBannerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 44px;
    margin-bottom : 20px;
`;

export const TopBannerLeftWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 20px;

    width: 514px;
    height : 100%;
`;

export const TopBannerButton = styled(Button) <{ totalCount: number }>`
    color : ${({ totalCount }) => totalCount > 0 ? ({ theme }) => theme.colors.greyScale_6 : ({ theme }) => theme.colors.greyScale_5};
    background-color : ${({ totalCount }) => totalCount > 0 ? ({ theme }) => theme.colors.greyScale_1 : ({ theme }) => theme.colors.greyScale_3};
`;