import styled from "styled-components";
import Arrow from "assets/expand_arrow.svg";

export const HistoryTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 120%;
        /* identical to box height, or 29px */

        /* Grayscale/Grayscale-6 (Black) */
        color: #1e1e20;
    }
`;

export const ExpandArrow = styled.img.attrs({ src: `${Arrow}` })<{ isClicked: boolean }>`
    width: 20px;
    transition: all ease 0.4s;
    transform: ${({ isClicked }) => (isClicked ? `rotate(180deg)` : `rotate(0deg)`)};
`;
