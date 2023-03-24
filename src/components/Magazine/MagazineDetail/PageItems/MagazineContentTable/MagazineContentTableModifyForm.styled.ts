import styled from "styled-components";

export const MagazineTitleTextArea = styled.textarea`
    position: absolute;
    width: 1120px;
    height: 40px;
    max-height: 130px;
    left: 40px;
    bottom: 80px;
    resize: none;

    vertical-align: text-bottom;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 120%;
    color: #ffffff;
    background: rgba(0, 0, 0, 0);

    border: none;

    &:focus {
        outline: none;
    }
`;

export const MagazineContentTextArea = styled.textarea`
    width: 100%;
    border: 1px solid black;
    height: 568px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    justify-content: center;
`;
